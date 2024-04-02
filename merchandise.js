// Define the item objects
const item1 = { id: 1, productName: 'T-Shirt', priceInCents: 200 };
const item2 = { id: 2, productName: 'Jeans', priceInCents: 500 };
const item3 = { id: 3, productName: 'Sneakers', priceInCents: 800 };

// Create a Map object and add the items
const merchandiseMap = new Map();

merchandiseMap.set(item1.id, item1);
merchandiseMap.set(item2.id, item2);
merchandiseMap.set(item3.id, item3);

module.exports = merchandiseMap
