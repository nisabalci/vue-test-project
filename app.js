new Vue({
	el: "#app",
	data: {
		sellCount: 0,
		sellWarning: false,

		productList: [
			{
				title: "MacBook Pro",
				price: 20000,
				count: 10,
			},
			{
				title: "IPhone",
				price: 5000,
				count: 5,
			},
			{
				title: "Klavye",
				price: 100,
				count: 1000,
			},
		],
	},
	methods: {
		sellProduct(product) {
			if (this.sellCount > product.count) {
				this.sellWarning = true;
			} else {
				product.count = product.count - this.sellCount;
				this.sellWarning = false;
			}
		},
		backgroundByCount(product) {
			return { green: product.count > 0, red: product.count <= 0 };
		},
	},
});
