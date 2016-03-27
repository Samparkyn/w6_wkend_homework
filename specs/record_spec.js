var assert = require('chai').assert;
var Record = require('../records');
var RecordStore = require('../record_store');

var record1 = new Record("Robbie Williams", "Escapology", 20);
var record2 = new Record("Coldplay", "Adventure of a Lifetime", 22);

describe('Record', function(){
  it('should have an artist', function(){
    assert.equal("Robbie Williams", record1.artist);
  })
  it('should have a title', function(){
    assert.equal("Escapology", record1.title);
  })
  it('should have a price', function(){
    assert.equal(20, record1.price);
  })
})