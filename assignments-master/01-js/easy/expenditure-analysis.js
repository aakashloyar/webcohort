/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let arr={};//it is just a object
  for(let i=0;i<transactions.length;i++) {
      if(arr[transactions[i].category]) {
          arr[transactions[i].category]+=transactions[i].price;
      } else {
          arr[transactions[i].category]=transactions[i].price;
      }
  }
  let result=[];
  for(let key in arr) {
      result.push({category:key,totalSpent:arr[key]});
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
