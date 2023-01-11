//В программе объявлены переменные firstName и lastName. Создайте объект user со свойствами
// firstName и lastName и добавьте getter и setter fullName. Сеттер fullName должен принимать
//  имя и фамилию пользователя через пробел, разделять и присваивать свойствам firstName и lastName
//   соответственно. Геттер fullName должен формировать строку, состоящую из имени и фамилии через пробел.

//Пример значений переменных:

let firstName = "Александр";
let lastName = "Петров";

const user = {
  firstName: firstName,
  lastName: lastName,
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user.fullName);

//Пример результата:

//user.fullName // "Александр Петров"
//user.fullName = "Всеволод Старозубов"
//user.firstName // "Всеволод"
//user.lastName // "Старозубов"
