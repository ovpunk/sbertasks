//class Person {
//  constructor(name, age, music) {
//    this.name = name;
//    this.age = age;
//    this.music = music;
//  }
//  getInfo() {
//    return `${this.name} в ${this.age} лет слушает ${this.music}`;
//  }
//}

//let person1 = new Person("Вячеслав", 25, "Панк-рок");
//let person2 = new Person("Влад", 25, "Поп");

//console.log(person1.getInfo());
//console.log(person2.getInfo());

//----------------------------------------------------------

//class Pet {
//  static namePet = "Холли";
//  static user = "Влад";
//  static message(namePet, user) {
//    return `У пользователя ${user || Pet.user} есть кот ${
//      namePet || Pet.namePet
//    }`;
//  }
//}
//console.log(Pet.message());
//----------------------------------------------------------

//class Car {
//  static name = "kia";
//  static model = "sportage";
//  static text(name, model) {
//    return `У моего папы машина ${name || Car.name} ${model || Car.model}`;
//  }
//  text2()
//}

//console.log(Car.text());
//----------------------------------------------------------

//let obj = {
//  array: ["Первый", "Второй", "Третий"],
//  get lastElement() {
//    return this.array[this.array.length - 1];
//  },
//  set setArray(value) {
//    return (obj.array = value);
//  },
//};

//obj.setArray = ["Куку", "Кака", "Кеке"]; // ошибки не будет, т.к. используем set

//console.log(obj.lastElement);
//----------------------------------------------------------
