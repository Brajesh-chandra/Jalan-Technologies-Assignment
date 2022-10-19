class Coffee {
  constructor(Espresso, Cappuccino, Latte) {
    this.Espresso = Espresso;
    this.Cappuccino = Cappuccino;
    this.Latte = Latte;
  }

  getEspressoDetail() {
    return `Espresso: ${this.Espresso}`;
  }

  getCappuccinoDetail() {
    return `Cappuccino ${this.Cappuccino}`;
  }
  getLatteDetail() {
    return `Latte ${this.Latte}`;
  }
}

class Flavour extends Coffee {
  constructor(Espresso, Cappuccino, Latte, milk, cream, latte) {
    super(Espresso, Cappuccino, Latte);
    this.milk = milk;
    this.cream = cream;
    this.latte = latte;
  }

  getOrderDetail() {
    return `${this.getEspressoDetail()} choose some flavour: Milk ${
      this.milk
    }, Cream: ${this.cream}, Latte: ${this.latte}`;
  }
}

let order1 = new Flavour("Espresso", "milk");

console.log(order1);
