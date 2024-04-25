function discountPrices(prices, discount) {
	var discounted = [];

	for (let i = 0; i < prices.length; ++i) {
		var discountedPrice = prices[i] * (1 - discount);
		discounted.push(discountedPrice);
	}

	return discounted;
}

console.log(discountPrices([100, 200, 300], 0.5));
