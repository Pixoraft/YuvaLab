import * as XLSX from 'xlsx';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface TestData {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  code: string;
  sampleType: string;
  reportTime: string;
  homeCollection: boolean;
  isPopular?: boolean;
}

export class ExcelProcessor {
  private static instance: ExcelProcessor;
  private testsCache: TestData[] | null = null;

  static getInstance(): ExcelProcessor {
    if (!ExcelProcessor.instance) {
      ExcelProcessor.instance = new ExcelProcessor();
    }
    return ExcelProcessor.instance;
  }

  private readExcelFile(): any[] {
    try {
      // Try multiple possible paths for the Excel file
      const possiblePaths = [
        // Root directory (where we copied it)
        path.join(process.cwd(), 'METROPOLISEDOS_Jalandhar.xlsx'),
        // Development paths
        path.join(process.cwd(), 'client/public/METROPOLISEDOS_Jalandhar.xlsx'),
        path.join(process.cwd(), 'attached_assets/METROPOLISEDOS_Jalandhar_1756449194123.xlsx'),
        path.join(__dirname, '../client/public/METROPOLISEDOS_Jalandhar.xlsx'),
        path.join(__dirname, '../attached_assets/METROPOLISEDOS_Jalandhar_1756449194123.xlsx'),
        path.join(__dirname, '../METROPOLISEDOS_Jalandhar.xlsx'),
        // Production paths (after build)
        path.join(process.cwd(), 'dist/public/METROPOLISEDOS_Jalandhar.xlsx'),
        path.join(process.cwd(), 'dist/METROPOLISEDOS_Jalandhar.xlsx'),
        path.join(__dirname, '../dist/public/METROPOLISEDOS_Jalandhar.xlsx'),
        path.join(__dirname, '../public/METROPOLISEDOS_Jalandhar.xlsx'),
        // Render production paths
        path.join(__dirname, 'public/METROPOLISEDOS_Jalandhar.xlsx'),
        path.join(__dirname, 'METROPOLISEDOS_Jalandhar.xlsx'),
        // More fallback paths
        path.join(__dirname, '../../client/public/METROPOLISEDOS_Jalandhar.xlsx'),
        path.join(__dirname, '../../METROPOLISEDOS_Jalandhar.xlsx')
      ];
      
      console.log('Searching for Excel file in paths:', possiblePaths.slice(0, 5));
      
      let fileBuffer: Buffer | null = null;
      let usedPath = '';
      
      for (const filePath of possiblePaths) {
        try {
          fileBuffer = readFileSync(filePath);
          usedPath = filePath;
          console.log('Successfully read Excel file from:', usedPath);
          break;
        } catch (error) {
          // Try next path
          continue;
        }
      }
      
      if (!fileBuffer) {
        console.warn('Could not find Excel file in any expected location, using fallback data');
        console.log('Current working directory:', process.cwd());
        console.log('__dirname:', __dirname);
        return this.getFallbackTestData();
      }
      
      const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0]; // Get first sheet
      const worksheet = workbook.Sheets[sheetName];
      return XLSX.utils.sheet_to_json(worksheet);
    } catch (error) {
      console.error('Error reading Excel file:', error);
      console.log('Using fallback test data due to Excel file error');
      return this.getFallbackTestData();
    }
  }

  processExcelData(rawData: any[]): TestData[] {
    // Skip the header row (first row) and process actual data
    const dataRows = rawData.slice(1);
    
    return dataRows.map((row, index) => {
      // Map Excel columns based on the actual structure we found
      const code = row['METROPOLISEDOS_Jalandhar'] || `T${index + 1}`;
      const name = row['__EMPTY'] || '';
      const testType = row['__EMPTY_1'] || '';
      const method = row['__EMPTY_2'] || '';
      const sampleQuantity = row['__EMPTY_3'] || '';
      const fastingReq = row['__EMPTY_4'] || '';
      const reportTime = row['__EMPTY_7'] || '4 Hours';
      const price = this.parsePrice(row['__EMPTY_8'] || '500');
      const sampleGuideline = row['__EMPTY_9'] || '';
      
      // Determine category from test type or method
      const category = this.determineCategory(name, testType, method);
      
      // Determine sample type from sample guideline or quantity
      const sampleType = this.determineSampleType(sampleQuantity, sampleGuideline);
      
      // Determine if it's a popular test
      const isPopular = this.isPopularTest(name, category);
      
      return {
        id: index + 1,
        name: name.toString().trim(),
        category: category,
        price: price,
        originalPrice: Math.round(price * 1.4), // Add 40% as original price for discount display
        code: code.toString().trim().toUpperCase(),
        sampleType: sampleType,
        reportTime: this.formatReportTime(reportTime.toString()),
        homeCollection: true, // Default to true for all tests
        isPopular
      };
    }).filter(test => test.name && test.name.length > 0 && !test.name.includes('Test Name')); // Filter out empty rows and header remnants
  }

  private parsePrice(priceStr: string | number): number {
    if (typeof priceStr === 'number') return priceStr;
    const cleanPrice = priceStr.toString().replace(/[^\d.]/g, '');
    const parsed = parseFloat(cleanPrice);
    return isNaN(parsed) ? 500 : parsed; // Default to 500 if can't parse
  }

  private determineCategory(name: string, testType: string, method: string): string {
    const nameStr = name.toLowerCase();
    const typeStr = testType.toLowerCase();
    
    if (nameStr.includes('blood') || nameStr.includes('hemoglobin') || nameStr.includes('hb')) return 'Blood Tests';
    if (nameStr.includes('thyroid') || nameStr.includes('tsh') || nameStr.includes('t3') || nameStr.includes('t4')) return 'Thyroid Tests';
    if (nameStr.includes('liver') || nameStr.includes('sgot') || nameStr.includes('sgpt') || nameStr.includes('bilirubin')) return 'Liver Tests';
    if (nameStr.includes('kidney') || nameStr.includes('urea') || nameStr.includes('creatinine') || nameStr.includes('urine')) return 'Kidney Tests';
    if (nameStr.includes('lipid') || nameStr.includes('cholesterol') || nameStr.includes('hdl') || nameStr.includes('ldl') || nameStr.includes('triglyceride')) return 'Lipid Profile';
    if (nameStr.includes('vitamin') || nameStr.includes('b12') || nameStr.includes('d3') || nameStr.includes('folic')) return 'Vitamin Tests';
    if (nameStr.includes('hormone') || nameStr.includes('testosterone') || nameStr.includes('estrogen') || nameStr.includes('prolactin')) return 'Hormone Tests';
    if (nameStr.includes('cardiac') || nameStr.includes('troponin') || nameStr.includes('cpk') || nameStr.includes('heart')) return 'Cardiac Tests';
    if (nameStr.includes('diabetes') || nameStr.includes('glucose') || nameStr.includes('hba1c') || nameStr.includes('sugar')) return 'Diabetes';
    if (nameStr.includes('iron') || nameStr.includes('ferritin') || nameStr.includes('tibc')) return 'Iron Studies';
    if (nameStr.includes('fever') || nameStr.includes('dengue') || nameStr.includes('malaria') || nameStr.includes('typhoid')) return 'Fever Panel';
    if (typeStr.includes('grp')) return 'Specialized Tests';
    if (typeStr.includes('inv')) return 'Investigation Tests';
    
    return 'General Tests';
  }

  private determineSampleType(sampleQuantity: string, sampleGuideline: string): string {
    const quantityStr = sampleQuantity.toLowerCase();
    const guidelineStr = sampleGuideline.toLowerCase();
    
    if (quantityStr.includes('ml') || guidelineStr.includes('blood') || guidelineStr.includes('serum') || guidelineStr.includes('plasma')) return 'Blood';
    if (guidelineStr.includes('urine') || quantityStr.includes('urine')) return 'Urine';
    if (guidelineStr.includes('stool') || guidelineStr.includes('fecal')) return 'Stool';
    if (guidelineStr.includes('tissue') || guidelineStr.includes('biopsy')) return 'Tissue';
    if (guidelineStr.includes('swab') || guidelineStr.includes('throat')) return 'Swab';
    if (guidelineStr.includes('saliva') || guidelineStr.includes('oral')) return 'Saliva';
    
    return 'Blood'; // Default to blood
  }

  private formatReportTime(reportTime: string): string {
    const timeStr = reportTime.toLowerCase().trim();
    if (timeStr.includes('same day') || timeStr === '0') return 'Same Day';
    if (timeStr.includes('1 day') || timeStr.includes('after 1 day')) return 'Next Day';
    if (timeStr.includes('2 days') || timeStr.includes('after 2 days')) return '2 Days';
    if (timeStr.includes('3 days') || timeStr.includes('after 3 days')) return '3 Days';
    if (timeStr.includes('4 days') || timeStr.includes('after 4 days')) return '4 Days';
    if (timeStr.includes('5 days') || timeStr.includes('after 5 days')) return '5 Days';
    if (timeStr.includes('7 days') || timeStr.includes('week') || timeStr.includes('after 7 days')) return '1 Week';
    if (timeStr.includes('10 days') || timeStr.includes('after 10 days')) return '10 Days';
    if (timeStr.includes('12 days') || timeStr.includes('after 12 days')) return '12 Days';
    if (timeStr.includes('14 days') || timeStr.includes('2 weeks') || timeStr.includes('after 14 days')) return '2 Weeks';
    if (timeStr.includes('21 days') || timeStr.includes('3 weeks') || timeStr.includes('after 21 days')) return '3 Weeks';
    if (timeStr.includes('hours') || timeStr.includes('hour')) return timeStr.includes('4') ? '4 Hours' : '6 Hours';
    
    return timeStr || '4 Hours'; // Default to 4 hours
  }

  private isPopularTest(testName: string, category: string): boolean {
    const popularTests = [
      'complete blood count', 'cbc', 'blood sugar', 'glucose', 'hba1c',
      'thyroid', 'tsh', 't3', 't4', 'lipid profile', 'cholesterol',
      'liver function', 'kidney function', 'vitamin d', 'vitamin b12',
      'hemoglobin', 'blood pressure', 'ecg', 'x-ray', 'ultrasound',
      'creatinine', 'urea', 'bilirubin', 'sgot', 'sgpt'
    ];
    
    const testNameLower = testName.toLowerCase();
    const categoryLower = category.toLowerCase();
    
    return popularTests.some(popular => 
      testNameLower.includes(popular) || categoryLower.includes(popular)
    );
  }

  getAllTests(): TestData[] {
    if (!this.testsCache) {
      const rawData = this.readExcelFile();
      this.testsCache = this.processExcelData(rawData);
      console.log(`Loaded ${this.testsCache.length} tests successfully`);
    }
    return this.testsCache;
  }

  getPopularTests(): TestData[] {
    return this.getAllTests().filter(test => test.isPopular);
  }

  getTestsByCategory(category: string): TestData[] {
    return this.getAllTests().filter(test => 
      test.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  searchTests(searchTerm: string): TestData[] {
    const term = searchTerm.toLowerCase();
    return this.getAllTests().filter(test =>
      test.name.toLowerCase().includes(term) ||
      test.category.toLowerCase().includes(term) ||
      test.code.toLowerCase().includes(term)
    );
  }

  refreshCache(): void {
    this.testsCache = null;
  }

  getFallbackTestData(): any[] {
    // Fallback test data when Excel file is not available
    return [
      { id: 1, testName: 'Complete Blood Count (CBC)', category: 'Blood Tests', price: 400, code: 'CBC001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: true },
      { id: 2, testName: 'Blood Sugar (Fasting)', category: 'Diabetes', price: 150, code: 'BSF001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: true },
      { id: 3, testName: 'Blood Sugar (Random)', category: 'Diabetes', price: 150, code: 'BSR001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: true },
      { id: 4, testName: 'HbA1c (Glycated Hemoglobin)', category: 'Diabetes', price: 600, code: 'HBA001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: true },
      { id: 5, testName: 'Thyroid Profile (T3, T4, TSH)', category: 'Thyroid Tests', price: 800, code: 'THY001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: true },
      { id: 6, testName: 'Liver Function Test (LFT)', category: 'Liver Tests', price: 600, code: 'LFT001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: true },
      { id: 7, testName: 'Kidney Function Test (KFT)', category: 'Kidney Tests', price: 500, code: 'KFT001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: true },
      { id: 8, testName: 'Lipid Profile', category: 'Lipid Profile', price: 700, code: 'LIP001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: true },
      { id: 9, testName: 'Vitamin D (25-OH)', category: 'Vitamin Tests', price: 1200, code: 'VIT001', sampleType: 'Blood', reportTime: 'Next Day', isPopular: true },
      { id: 10, testName: 'Vitamin B12', category: 'Vitamin Tests', price: 800, code: 'VIT002', sampleType: 'Blood', reportTime: 'Next Day', isPopular: true },
      { id: 11, testName: 'Hemoglobin (Hb)', category: 'Blood Tests', price: 200, code: 'HB001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: true },
      { id: 12, testName: 'ESR (Erythrocyte Sedimentation Rate)', category: 'Blood Tests', price: 150, code: 'ESR001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: false },
      { id: 13, testName: 'Creatinine (Serum)', category: 'Kidney Tests', price: 250, code: 'CRE001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: true },
      { id: 14, testName: 'Urea (Blood)', category: 'Kidney Tests', price: 200, code: 'URE001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: true },
      { id: 15, testName: 'Uric Acid', category: 'General Tests', price: 300, code: 'URA001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: false },
      { id: 16, testName: 'Iron Studies', category: 'Iron Studies', price: 1000, code: 'IRN001', sampleType: 'Blood', reportTime: 'Next Day', isPopular: false },
      { id: 17, testName: 'Calcium (Serum)', category: 'General Tests', price: 300, code: 'CAL001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: false },
      { id: 18, testName: 'Magnesium (Serum)', category: 'General Tests', price: 400, code: 'MAG001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: false },
      { id: 19, testName: 'Phosphorus (Serum)', category: 'General Tests', price: 350, code: 'PHO001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: false },
      { id: 20, testName: 'Dengue Profile', category: 'Fever Panel', price: 1200, code: 'DEN001', sampleType: 'Blood', reportTime: 'Same Day', isPopular: false },
      { id: 21, testName: 'Malaria Antigen', category: 'Fever Panel', price: 400, code: 'MAL001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: false },
      { id: 22, testName: 'Typhoid (Widal Test)', category: 'Fever Panel', price: 300, code: 'TYP001', sampleType: 'Blood', reportTime: '4 Hours', isPopular: false },
      { id: 23, testName: 'COVID-19 RT-PCR', category: 'Specialized Tests', price: 1500, code: 'COV001', sampleType: 'Swab', reportTime: 'Next Day', isPopular: false },
      { id: 24, testName: 'Testosterone (Total)', category: 'Hormone Tests', price: 800, code: 'TES001', sampleType: 'Blood', reportTime: 'Next Day', isPopular: false },
      { id: 25, testName: 'Prolactin', category: 'Hormone Tests', price: 600, code: 'PRO001', sampleType: 'Blood', reportTime: 'Next Day', isPopular: false }
    ].map(test => ({
      'METROPOLISEDOS_Jalandhar': test.code,
      '__EMPTY': test.testName,
      '__EMPTY_1': test.category,
      '__EMPTY_2': 'Standard Method',
      '__EMPTY_3': '2-3 ml',
      '__EMPTY_4': 'Fasting not required',
      '__EMPTY_7': test.reportTime,
      '__EMPTY_8': test.price,
      '__EMPTY_9': `${test.sampleType} sample required`
    }));
  }
}