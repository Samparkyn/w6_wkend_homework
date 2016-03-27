var assert = require('chai').assert;
var Record = require('../records');
var RecordStore = require('../record_store');

var samsStore = new RecordStore("Sams Store", "Lausanne");
var record1 = new Record("Robbie Williams", "Escapology", 20);
var record2 = new Record("Coldplay", "Adventure of a Lifetime", 22);

describe('Record Store', function(){
  it('should have a name', function(){
    assert.equal("Sams Store", samsStore.name);
  })
  it('should have a city', function(){
    assert.equal("Lausanne", samsStore.city);
  })
  it('should add records to inventory', function(){
    samsStore.inventory = [];
    samsStore.addRecord(record1.title);
    samsStore.addRecord(record2.title);
    assert.deepEqual(["Escapology", "Adventure of a Lifetime"], samsStore.inventory);
  })
  it('should have x in inventory', function(){
    assert.deepEqual(["Escapology", "Adventure of a Lifetime"], samsStore.inventory);
  })
  it('should be able to sell a record', function(){
    samsStore.sellRecord(record1.title);
    assert.equal(1, samsStore.inventory.length);
  })
  it('should have a balance', function(){
    samsStore.balance = 0;
    assert.equal(0, samsStore.balance);
  })
  it('should update balance after selling a record', function(){
    samsStore.sellRecord(record2);
    assert.equal(22, samsStore.balance);
  })
  it('should find a record by title', function(){
    samsStore.addRecord(record1);
    samsStore.addRecord(record2);
    assert.equal(record2, samsStore.findRecordByTitle(record2));
  })
})