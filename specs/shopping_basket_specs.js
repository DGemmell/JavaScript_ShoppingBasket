var assert = require('assert');
var Shopping_Basket = require('../shopping_basket.js');

describe('Shopping Basket', function(){

  it('can have no items', function(){
    var shopping_basket = new Shopping_Basket();
    assert.strictEqual(shopping_basket.item, 0);
  });

  it('can have 10 items', function(){
    var shopping_basket = new Shopping_Basket();
    shopping_basket.fill();
    assert.strictEqual(shopping_basket.item, 10)
  });

  it('can add items', function(){
    var shopping_basket = new Shopping_Basket();
    shopping_basket.add(5);
    assert.strictEqual(shopping_basket.item, 5)
  });

  it('can remove an item', function(){
    var shopping_basket = new Shopping_Basket();
    shopping_basket.add(5);
    shopping_basket.remove(1);
    assert.strictEqual(shopping_basket.item, 4)
  });

  it('total of basket', function(){
    var shopping_basket = new Shopping_Basket();
    shopping_basket.sum();
    assert.strictEqual(shopping_basket.item, 15)
  });

  // it('discount applied', function(){
  //   var shopping_basket = new Shopping_Basket();
  //   shopping_basket.discount();
  //   assert.strictEqual(shopping_basket.item, 21)
  // });



});
