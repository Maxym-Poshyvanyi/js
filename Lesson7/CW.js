//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//==============resolve==================
//function Car(model, manufacturer, year, maxspeed, capacity) {
//    this.Model = model;
//    this.Manufacturer = manufacturer;
//    this.Year = year;
//    this.Maxspeed = maxspeed;
//    this.Capacity = capacity;
//    this.drive = function () {
//        console.log(`їдемо зі швидкістю ${maxspeed} км на годину`)
//    }
//    this.info = function () {
//        for (const key in this) {
//            if (typeof this[key] !== "function") {
//                console.log(key +' '+ this[key])
//            }
//        }
//    }
//    this.increaseMaxSpeed = function (newSpeed) {
//        this.Maxspeed = this.Maxspeed + newSpeed;
//    }
//    this.changeYear = function (newValue) {
//        this.Year = newValue;
//    }
//    this.addDriver = function (driver) {
//        this.Driver = driver;
//    }
//}
//
// let car1 = new Car('Opel Omega', 'General Motors', 2022, 200, 2.0);
// console.log(car1);
// car1.drive();
// car1.info()
// car1.increaseMaxSpeed(55);
// car1.changeYear(2020);
// car1.addDriver('Max')
// console.log(car1);

//- (Те саме, тільки через клас) Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//    constructor(model, manufacturer, year, maxspeed, capacity) {
//        this.model = model;
//        this.manufacturer = manufacturer;
//        this.year = year;
//        this.maxspeed = maxspeed;
//        this.capacity = capacity;
//    }
//    drive = function () {
//        console.log(`їдемо зі швидкістю ${(this.maxspeed)} км на годину`)
//    }
//    info = function () {
//        for (const key in this) {
//            if (typeof this[key] !== "function") {
//                console.log(key +' '+ this[key])
//            }
//        }
//    }
//    increaseMaxSpeed = function (newSpeed) {
//        this.maxspeed = this.maxspeed + newSpeed;
//    }
//    changeYear = function (newValue) {
//        this.year = newValue;
//    }
//    addDriver = function (driver) {
//        this.driver = driver;
//    }
// }
// let car2=new Car('Opel Omega A','Germany', 1987,299, 3)
// console.log(car2);
// car2.drive();
// car2.info()
// car2.increaseMaxSpeed(50);
// car2.changeYear(2017);
// car2.addDriver('Max');
// console.log(' ')
// car2.info()

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Cinderella {
//    constructor(Name, Age, Footsize) {
//        this.Name = Name;
//        this.Age = Age;
//        this.Footsize = Footsize;
//    }
// }

// let CinderellaArr = [
//    new Cinderella('Анна', 21, 42),
//    new Cinderella('Валентина', 22, 41),
//    new Cinderella('Яна', 23, 42),
//    new Cinderella('Олена', 24, 42),
//    new Cinderella('Оксана', 25, 44),
//    new Cinderella('Олеся', 19, 40),
//    new Cinderella('Ольга', 26, 42),
//    new Cinderella('Марина', 19, 43),
//    new Cinderella('Наталья', 18, 41),
//    new Cinderella('Вікторія', 20, 41)
// ]
// console.log(CinderellaArr);

//    Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//    constructor(Name, Age, Foundedshoe) {
//        this.Name = Name;
//        this.Age = Age;
//        this.Foundedshoe = Foundedshoe;
//    }
// }
//
// let Prince1 = new Prince('Max', 19 , 30);
// console.log(Prince1);
//
//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (const cinderella of CinderellaArr) {
//    if (cinderella.Footsize === Prince1.Foundedshoe) console.log(`Попелюшку звати ${cinderella.Name}`);
// }
//
//    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let find = CinderellaArr.find(value => value.Footsize === Prince1.Foundedshoe);
// console.log(`Попелюшку звати ${find.Name}`);
