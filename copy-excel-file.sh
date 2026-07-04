#!/bin/bash

# Copy Excel file to multiple locations for production access
echo "Copying Excel file for production deployment..."

# Copy to root
cp client/public/METROPOLISEDOS_Jalandhar.xlsx ./ 2>/dev/null || echo "Warning: Could not copy from client/public"

# Copy to dist directory (after build)
mkdir -p dist
cp METROPOLISEDOS_Jalandhar.xlsx dist/ 2>/dev/null || echo "Warning: Could not copy to dist"
cp client/public/METROPOLISEDOS_Jalandhar.xlsx dist/ 2>/dev/null || echo "Warning: Could not copy from client/public to dist"

# Make sure dist/public exists and copy there too
mkdir -p dist/public
cp METROPOLISEDOS_Jalandhar.xlsx dist/public/ 2>/dev/null || echo "Warning: Could not copy to dist/public"
cp client/public/METROPOLISEDOS_Jalandhar.xlsx dist/public/ 2>/dev/null || echo "Warning: Could not copy from client/public to dist/public"

echo "Excel file copy operations completed."
echo "Using fallback data if Excel file is not found."