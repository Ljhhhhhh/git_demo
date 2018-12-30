class People {
  constructor(name) {
    this.name = name
  }

  sayHello () {
    console.log(`${this.name} say happy new year`)
  }
}

let ljh = new People('lujiehui');
ljh.sayHello();