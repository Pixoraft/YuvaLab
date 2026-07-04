import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { ExcelProcessor } from "./excel-processor";
import { readFileSync } from 'fs';
import path from 'path';

interface TestData {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  code: string;
  sampleType: string;
  reportTime: string;
  homeCollection: boolean;
  isPopular: boolean;
}

// Function to load tests from JSON file
function loadTestsFromJSON(): TestData[] {
  try {
    const jsonPath = path.join(process.cwd(), 'shared/tests-data.json');
    const jsonData = readFileSync(jsonPath, 'utf8');
    const parsedData = JSON.parse(jsonData);
    return parsedData.tests || [];
  } catch (error) {
    console.error('Error loading JSON file:', error);
    return [];
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  const excelProcessor = ExcelProcessor.getInstance();

  // Get all tests from JSON
  app.get("/api/tests", (req, res) => {
    try {
      const tests = loadTestsFromJSON();
      console.log(`API: Returning ${tests.length} tests from JSON`);
      if (tests.length === 0) {
        console.warn('No tests found, check JSON file');
      }
      res.json(tests);
    } catch (error) {
      console.error('Error fetching tests:', error);
      res.status(500).json({ error: 'Failed to fetch tests' });
    }
  });

  // Get popular tests from JSON
  app.get("/api/tests/popular", (req, res) => {
    try {
      const allTests = loadTestsFromJSON();
      const popularTests = allTests.filter(test => test.isPopular === true);
      console.log(`API: Returning ${popularTests.length} popular tests from JSON`);
      res.json(popularTests);
    } catch (error) {
      console.error('Error fetching popular tests:', error);
      res.status(500).json({ error: 'Failed to fetch popular tests' });
    }
  });

  // Search tests in JSON
  app.get("/api/tests/search", (req, res) => {
    try {
      const { q } = req.query;
      if (!q || typeof q !== 'string') {
        return res.status(400).json({ error: 'Search query is required' });
      }
      const allTests = loadTestsFromJSON();
      const results = allTests.filter(test => 
        test.name.toLowerCase().includes(q.toLowerCase()) ||
        test.category.toLowerCase().includes(q.toLowerCase()) ||
        test.code.toLowerCase().includes(q.toLowerCase())
      );
      res.json(results);
    } catch (error) {
      console.error('Error searching tests:', error);
      res.status(500).json({ error: 'Failed to search tests' });
    }
  });

  // Get tests by category from JSON
  app.get("/api/tests/category/:category", (req, res) => {
    try {
      const { category } = req.params;
      const allTests = loadTestsFromJSON();
      const tests = allTests.filter(test => 
        test.category.toLowerCase() === category.toLowerCase()
      );
      res.json(tests);
    } catch (error) {
      console.error('Error fetching tests by category:', error);
      res.status(500).json({ error: 'Failed to fetch tests by category' });
    }
  });

  // Refresh Excel data cache
  app.post("/api/tests/refresh", (req, res) => {
    try {
      excelProcessor.refreshCache();
      res.json({ message: 'Tests cache refreshed successfully' });
    } catch (error) {
      console.error('Error refreshing tests cache:', error);
      res.status(500).json({ error: 'Failed to refresh tests cache' });
    }
  });

  // Test fallback data endpoint
  app.get("/api/tests/fallback", (req, res) => {
    try {
      const fallbackData = excelProcessor.getFallbackTestData();
      const processedData = excelProcessor.processExcelData(fallbackData);
      console.log(`Fallback: Returning ${processedData.length} tests`);
      res.json(processedData);
    } catch (error) {
      console.error('Error with fallback tests:', error);
      res.status(500).json({ error: 'Failed to load fallback tests' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
