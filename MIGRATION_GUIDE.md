# Data Structure Migration Guide

## Overview
This document outlines the migration from the old product/collection structure to the new enhanced system that supports both individual product listings and collection bundles.

## Key Changes

### 1. Enhanced Products Structure
**Before:**
```json
{
  "id": "vibe-check",
  "title": "Vibe Check",
  "price": 49,
  "type": "Vinyl",
  "tags": ["Trending", "Laptop"],
  "collection": "trending-pack"
}
```

**After:**
```json
{
  "id": "vibe-check",
  "title": "Vibe Check", 
  "price": 49,
  "type": "Vinyl",
  "tags": ["Trending", "Laptop"],
  "collections": ["trending-pack", "cafe-collab"],
  "category": "lifestyle",
  "popularity": 95,
  "description": "Detailed description..."
}
```

### 2. Enhanced Collections Structure
**Before:**
```json
{
  "id": "soft-rebellion",
  "title": "Soft Rebellion Drop",
  "price": 299,
  "originalPrice": 359,
  "stickers": ["sunset-mood", "peach-plush", "minimal-heart"]
}
```

**After:**
```json
{
  "id": "soft-rebellion",
  "title": "Soft Rebellion Drop",
  "price": 299,
  "originalPrice": 359,
  "stickers": ["peach-plush", "minimal-heart", "sunset-mood"],
  "category": "limited-edition",
  "discount": 17,
  "isLimited": true
}
```

## New Features

### 1. Multi-Collection Support
- Products can belong to multiple collections
- `collection` field changed to `collections` array
- Better organization and cross-selling opportunities

### 2. Category System
- Every product has a category for better filtering
- Collections also categorized for organization
- Enables category-based browsing and recommendations

### 3. Popularity Scoring
- Each product has a popularity score (0-100)
- Used for trending algorithms and recommendations
- Helps surface popular content

### 4. Enhanced Search & Discovery
- Better search capabilities across products and collections
- Category and tag-based filtering
- Recommendation engine based on similarity

## Data Utility Functions

### Core Functions
- `getAllProducts()` - Get all individual products
- `getAllCollections()` - Get all collections
- `getProductsByCategory(category)` - Filter by category
- `getProductsInCollection(collectionId)` - Get products in a collection

### Search & Discovery
- `searchProducts(query)` - Search products by text
- `getTrendingProducts(limit)` - Get trending products
- `getRecommendedProducts(baseProduct, limit)` - Get recommendations

### Analytics
- `getCollectionSavings(collectionId)` - Calculate savings on collections
- `validateProductData()` - Check data integrity

## Migration Steps

### Phase 1: Data Preparation ✅
- [x] Create enhanced products.json with all 32+ products
- [x] Create enhanced collections.json with 14 collections
- [x] Create data utility functions
- [x] Add backward compatibility

### Phase 2: Component Updates (Next)
- [ ] Update Shop.jsx to use new data structure
- [ ] Update Collections.jsx for both individual and collection views
- [ ] Update cart system for enhanced product data
- [ ] Update search and filtering

### Phase 3: UI/UX Enhancements (Next)
- [ ] Add category filtering
- [ ] Add popularity-based sorting
- [ ] Add recommendation sections
- [ ] Enhanced collection vs individual product flow

### Phase 4: Testing & Optimization (Next)
- [ ] Test material system with new structure
- [ ] Validate cart functionality
- [ ] Test WhatsApp message generation
- [ ] Performance optimization

## Backward Compatibility

The new system maintains backward compatibility through:
- `productsDataLegacy` and `collectionsDataLegacy` exports
- Legacy field mapping in utility functions
- Gradual migration approach

## Implementation Notes

### File Structure
```
src/data/
├── products.json (old - keep for backup)
├── collections.json (old - keep for backup)
├── products-enhanced.json (new)
├── collections-enhanced.json (new)
└── dataUtils.js (utility functions)
```

### Usage Examples
```javascript
// Import new data utilities
import { 
  getAllProducts, 
  getProductsInCollection,
  getTrendingProducts 
} from '../data/dataUtils';

// Get all products for shop page
const products = getAllProducts();

// Get trending products for homepage
const trending = getTrendingProducts(8);

// Get products in a specific collection
const collectionProducts = getProductsInCollection('cosmic-collection');
```

## Next Steps

1. **Review the data structure** - Check if additional products or collections needed
2. **Update component imports** - Switch to new data utilities
3. **Test material system** - Ensure material pricing works with new structure
4. **Enhance UI** - Add category filters, popularity sorting, recommendations

Ready for implementation! 🚀
