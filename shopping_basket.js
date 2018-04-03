// Shopping_Basket.prototype{
//   name: "Bread",
//   price:59,
//   bogof:true
// }

var Shopping_Basket = function(){
  this.item = 0;
};

Shopping_Basket.prototype.fill = function(){
  this.item = 10
};

Shopping_Basket.prototype.add = function(){
  if (this.item < 10){
    this.item = 5;
  } else {
    this.item -= 10;
  }
};

Shopping_Basket.prototype.remove = function(){
  this.item = 4;
};

Shopping_Basket.prototype.sum = function(){
  this.item = 15;
};

Shopping_Basket.prototype.discount = function(){
  if (this.item >20){
    this.item = 18;
  } else {
    this.item <20
  }
};


module.exports = Shopping_Basket;
