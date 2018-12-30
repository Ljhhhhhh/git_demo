class People {
  constructor(name) {
    this.name = name
  }

  sayHello () {
    console.log(`${this.name} say happy new year`)
  }
}

let jld = new People('jinlidan');
jld.sayHello();
console.log('commit')