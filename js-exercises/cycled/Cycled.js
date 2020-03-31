class Cycled extends Array {
  constructor(array) {
    this.array = array;
  }
  current() {
    for(let el of this.array){
      console.log(el)
    }
  }
}

export { Cycled };
