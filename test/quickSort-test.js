var assert = require("chai").assert;
var quickSort = require('../quickSort');

describe('quickSort', function() {
  it('is a function', function(){
    assert.isFunction(quickSort);
  });
  it('leaves sorted sorted', function(){
    assert.deepEqual(quickSort([1,2,3]), [1,2,3])
    assert.deepEqual(quickSort([1,2,3,4]), [1,2,3,4])
    assert.deepEqual(quickSort([1,2,3,4,5,6]), [1,2,3,4,5,6])
    assert.deepEqual(quickSort([1,2,3,4,5,6,7]), [1,2,3,4,5,6,7])
    assert.deepEqual(quickSort([1,2,3,4,20,30,50,60]), [1,2,3,4,20,30,50,60])
  });
  it('sorts two', function(){
    assert.deepEqual(quickSort([2,1]), [1,2])
  });
  it('sorts three', function(){
    assert.deepEqual(quickSort([2,1,3]), [1,2,3])
  });

  it('leaves sorted sorted', function(){
    assert.deepEqual(quickSort([1,2,3]), [1,2,3])
  });
  it('sorts an array of numbers', function(){
    array = [2,3,1,100,4,101,13]
    expected = [1,2,3,4,13,100,101]
    assert.deepEqual(quickSort(array), expected)
  });

});
