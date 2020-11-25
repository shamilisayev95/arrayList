function AnotherArray() {
  this.arr = [];
  this.index = 0;
  if(arguments.length > 0) {
    for(let i = 0; i < arguments.length; i++){
      this.arr[i] = arguments[i];
      this.index++;
    }
  }
}

AnotherArray.prototype.myPush = function() {
  for(let i = 0;i < arguments.length; i++){
    this.arr[ this.index++ ] = arguments[i];
  }
  return this;
};
let myArr = new AnotherArray(1,2,3);
console.log(myArr.myPush(5))