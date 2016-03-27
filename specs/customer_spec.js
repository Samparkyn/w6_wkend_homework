var assert = require('chai').assert;
var Record = require('../records');
var RecordStore = require('../record_store');
var Customer = require('../customer');

var customer1 = new Customer("Ricas");
var record1 = new Record("The 1975", "1975", 15);

describe('Customer', function () {
  it('should have a name', function(){
    assert.equal("Ricas", customer1.name);
  })
  it('should be able to buy a record', function(){
    customer1.buyRecord(record1.title);
    assert.equal("1975", customer1.bag);
  })
})