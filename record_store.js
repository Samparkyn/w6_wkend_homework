
var _ = require('lodash');
var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype = {
  addRecord: function(record){
    this.inventory.push(record);
  },
  findRecordByTitle: function(record){
    return _.find(this.inventory, {title: record.title});
  },
  listInventory: function(){
    return this.inventory;
  },
  sellRecord: function(record){
    var sold = this.inventory.splice(0, 1);
    return this.balance += record.price;

  }
}


module.exports = RecordStore;