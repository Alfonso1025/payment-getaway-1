module.exports = function formatLineItems(items, merchandiseMap) {
    return items.map(item => {
        const storeItem = merchandiseMap.get(item.id);
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: storeItem.productName
                },
                unit_amount: storeItem.priceInCents // Assuming priceInCents is the price in cents
            },
            quantity: item.qty
        };
    });
}
