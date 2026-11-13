JUICE CENTER - ASSET DIRECTORY GUIDE
===================================

This folder (assets/images/) is reserved for future Google Flow image replacements.

IMPORTANT RULES & REPLACEMENT INSTRUCTIONS:
1. In the initial build, all images across the 8 pages are rendered using pure CSS-styled placeholder containers:
   - Reusable class: `.image-placeholder`
   - Specific variant classes: `.hero-placeholder`, `.orange-juice-placeholder`, `.watermelon-placeholder`, etc.
   - Descriptive HTML comments identify each beverage/interior/fruit slot.

2. When you generate final juice and beverage photography using Google Flow:
   - Place your exported image files (e.g. `hero-juice.jpg`, `orange-juice.jpg`, `classic-falooda.jpg`) in this directory (`assets/images/`).
   - Replace the `<div class="image-placeholder ...">...</div>` markup with your `<img>` tag or replace the placeholder CSS background:
     Example:
     `<img src="assets/images/orange-juice.jpg" alt="Fresh Orange Juice" class="beverage-img">`
     or simply place an `<img>` tag inside `.image-placeholder` as `.image-placeholder img { width: 100%; height: 100%; object-fit: cover; }` is pre-styled!

Placeholder Slots Configured:
- Hero Banner (Juice Center Hero)
- Fresh Juices (Orange, Watermelon, Pineapple, Mango, Pomegranate, Apple, Sweet Lime, Mixed Fruit)
- Milkshakes (Chocolate, Vanilla, Strawberry, Mango, Banana, Oreo)
- Smoothies (Mango, Strawberry, Banana, Mixed Berry, Tropical Fruit)
- Mocktails & Coolers (Virgin Mojito, Blue Lagoon, Mint Lemon, Watermelon Cooler, Orange Mint)
- Falooda (Classic, Royal, Mango, Chocolate)
- Special Lime Drinks (Fresh Lime Soda, Sweet Lime Water, Mint Lemon)
- Gallery items (Fruit Selection, Interior, Cold Press Preparation, Counters, Cups, etc.)
