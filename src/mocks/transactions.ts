let pendingTransactions: Array<object>;
let completedTransactions: Array<object>;

pendingTransactions = [{
    name : "Apple, Inc",
    amount : "9.99"
  },
  {
    name : "Chipotle",
    amount : "12"
  },
  {
    name : "Shell",
    amount : "40"
  },
  {
    name : "Amazon.com",
    amount : "34.23"
  },
  {
    name : "Best Buy",
    amount : "999"
  }];

completedTransactions = [{
    name : "Starbucks",
    amount : "5.00"
  }, {
    name : "Kroger",
    amount : "25.32"
  },{
    name : "Netflix",
    amount : "9.99"
  }];

export {
  pendingTransactions,
  completedTransactions
};
