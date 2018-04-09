let paymentMangersData = [
    ['amazon', 'Amazon'],
    ['ebay', 'eBay'],
    ['walmart', 'Walmart'],
    // Others
]

for (let [target, title] of paymentMangersData) {
    let paymentManager = new PaymentManager(title)
    paymentManager.render(target)
}