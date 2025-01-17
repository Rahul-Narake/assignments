/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  let map = new Map();
  for (let i = 0; i < transactions.length; i++) {
    if (map.get(transactions[i].category)) {
      map.set(
        transactions[i].category,
        map.get(transactions[i].category) + transactions[i].price
      );
    } else {
      map.set(transactions[i].category, transactions[i].price);
    }
  }
  for (let keys of map.keys()) {
    result.push({ category: keys, totalSpent: map.get(keys) });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
