# Quick Templates for Adding Content

## 📝 **Add New Product Template**

Copy this template to add a new product to `products-enhanced.json`:

```json
{
  "id": "your-product-id",
  "title": "Product Title",
  "image": "/assets/stickers/your-image.png",
  "price": 49,
  "type": "Vinyl",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "collections": ["collection-id-1", "collection-id-2"],
  "category": "lifestyle",
  "popularity": 85,
  "description": "Detailed product description here"
}
```

### **Field Explanations:**
- `id`: Unique identifier (lowercase, dash-separated)
- `title`: Display name for the product
- `image`: Path to image in `/public/assets/stickers/`
- `price`: Base price in rupees (will be multiplied by material)
- `type`: "Normal", "Vinyl", "Waterproof", or "Polaroid"
- `tags`: Array of searchable tags
- `collections`: Array of collection IDs this product belongs to
- `category`: From categories.json (lifestyle, aesthetic, cute, etc.)
- `popularity`: Score 0-100 for trending algorithms
- `description`: SEO-friendly description

## 📦 **Add New Collection Template**

Copy this template to add a new collection to `collections-enhanced.json`:

```json
{
  "id": "your-collection-id",
  "title": "Collection Title",
  "description": "Collection description explaining the theme or story",
  "price": 299,
  "originalPrice": 359,
  "image": "/assets/stickers/collection-cover-image.png",
  "stickers": ["product-id-1", "product-id-2", "product-id-3"],
  "tags": ["Tag1", "Tag2", "Tag3"],
  "releaseDate": "2025-02-20",
  "isLimited": false,
  "category": "lifestyle",
  "discount": 17
}
```

### **Field Explanations:**
- `id`: Unique identifier (lowercase, dash-separated)
- `title`: Display name for the collection
- `description`: Story/theme explanation
- `price`: Discounted bundle price
- `originalPrice`: Sum of individual prices (for savings calculation)
- `image`: Hero image for the collection
- `stickers`: Array of product IDs included in this collection
- `tags`: Searchable tags for the collection
- `releaseDate`: Launch date (YYYY-MM-DD format)
- `isLimited`: true for limited edition collections
- `category`: Collection category for organization
- `discount`: Percentage discount for display

## 🎨 **Add New Category Template**

Add to `categories.json`:

```json
"your-category": {
  "name": "Category Display Name",
  "description": "What this category represents",
  "icon": "🎯",
  "color": "#e92932"
}
```

## 🛠️ **Quick Modification Examples**

### **Change Material Pricing:**
Edit `src/config/storeConfig.js`:
```javascript
materials: {
  paper: {
    multiplier: 1,    // Paper = base price
  },
  vinyl: {
    multiplier: 1.8,  // Vinyl = 80% more expensive
  }
}
```

### **Add New Material:**
Edit `src/config/storeConfig.js`:
```javascript
materials: {
  // ...existing materials
  premium: {
    name: 'Premium Foil',
    multiplier: 2.5,
    icon: '✨',
    description: 'Luxury foil material with metallic finish'
  }
}
```

### **Change WhatsApp Number:**
Edit `src/config/storeConfig.js`:
```javascript
contact: {
  whatsappNumber: '919876543210',  // New number here
  // ...
}
```

### **Modify Store Settings:**
Edit `src/config/storeConfig.js`:
```javascript
store: {
  trendingLimit: 12,        // Show 12 trending items instead of 8
  currency: '$',            // Change to dollars
  shippingDays: '5-7 days', // Faster shipping
  // ...
}
```

## 🚀 **Implementation Steps**

### **To Add a Product:**
1. Add product entry to `products-enhanced.json`
2. Make sure image exists in `/public/assets/stickers/`
3. Add product ID to relevant collections in `collections-enhanced.json`

### **To Add a Collection:**
1. Add collection entry to `collections-enhanced.json`
2. Make sure all referenced product IDs exist
3. Calculate appropriate pricing (originalPrice should be sum of individual prices)

### **To Modify Existing:**
1. Find the entry in the respective JSON file
2. Modify the fields you want to change
3. Save and the changes will be reflected immediately

## ⚡ **Pro Tips**

- **Product IDs** should be lowercase with dashes (e.g., "cosmic-cat-dreams")
- **Images** should be optimized for web (PNG/JPG, reasonable file size)
- **Popularity scores** 90+ are trending, 80+ are popular, below 80 are regular
- **Collection pricing** should offer 10-25% savings vs individual purchases
- **Categories** should match what's defined in `categories.json`
- **Tags** should be relevant for search (use existing tags when possible)

Everything is set up to be easily modifiable! 🎉
