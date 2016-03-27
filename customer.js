var Customer = function(name){
  this.name = name;
  this.bag = [];
}

Customer.prototype = {
  buyRecord: function(record){
    this.bag.push(record);
  }
}

module.exports = Customer;