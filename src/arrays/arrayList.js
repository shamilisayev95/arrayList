function ArrayList() {
  this.array = [];
  this.size = 0;
}

ArrayList.prototype.init = function (array) {
  this.array = array;
  this.size = array.length;
};

ArrayList.prototype.getSize = function (){
  return this.size
}

ArrayList.prototype.myPush = function (arg) {

  this.array[this.size] = arg;
  return ++this.size;


};
//
//
ArrayList.prototype.myPop = function () {
  let lastElement = this.array[this.size - 1];
  this.size = this.size - 1
  return lastElement;

};

ArrayList.prototype.myShift = function () {
  let shiftedElement = this.array[0];
  for (let i = 0; i < this.size; i++){
    this.array[i] = this.array[i+1];
  }
  this.size = this.size - 1;
  return shiftedElement;
};

ArrayList.prototype.myUnShift = function (argument){

  for (let i = this.size; i > 0; i--){
    this.array[i] = this.array[i-1];
  }

  this.array[0] = argument;
  return ++this.size;

}

ArrayList.prototype.myToString = function (){
  let result = "[";
  for (let i = 0; i < this.array.length; i++){
    if (i === this.size - 1){
      result += this.array[i]
    }else {
      result += `${this.array[i]}, `;
    }

  }
  result += "]"
  return result;
}

ArrayList.prototype.myClear = function (){
  this.size = 0;
  this.array = [];
}

ArrayList.prototype.myReverse = function (){
  const reversed = [];
  for (let i = this.array.length-1; i >= 0; i--){
    reversed[reversed.length] = this.array[i];
  }
  this.init(reversed);
  return reversed;


}

ArrayList.prototype.mySlice = function (start, end){
  let sliced = [];
  for (let i = start; i < end; i++){
    sliced[sliced.length] = this.array[i]
  }
  return sliced;

}





const aList = new ArrayList();

;

// console.log(aList.init([54, 2, 3, 4, 5]))
// console.log(aList.getSize())
// console.log(aList.myPush(4));
// console.log(aList.myPop());
// console.log(aList.myShift());
// console.log(aList.myUnShift("z"));
// console.log(aList.myToString());
// console.log(aList.myClear())
console.log(aList.myReverse())
// console.log(aList.mySlice(0,1))


module.exports = ArrayList

