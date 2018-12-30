class People {
  constructor(name) {
    this.name = name
  }

  sayHello () {
    console.log(`${this.name} say happy new year`)
  }
}

let master = new People('master');
master.sayHello();