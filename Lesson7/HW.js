//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
//function User(id, name, surname, email, phone) {
//    this.id = id;
//    this.name = name;
//    this.surname = surname;
//    this.email = email;
//    this.phone = phone;
//}
//
//let UserArr = [
//    new User(1, 'Max', 'Williams', 'max@gmail.com', '262(136)379-56-32'),
//    new User(11, 'Taras', 'Peters ', 'Taras@gmail.com', '747(96)625-74-74'),
//    new User(9, 'Valeriy', 'Gibson ', 'Valeriy@gmail.com', '91(3299)375-84-81'),
//    new User(8, 'Oleh', 'Martin ', 'Oleh@gmail.com', '6(095)728-39-30'),
//    new User(12, 'Andriy', 'Jordan ', 'Andriy@gmail.com', '70(348)436-19-56'),
//    new User(264, 'Vasiliy', 'Jackson ', 'Vaska@gmail.com', '794(949)114-51-75    '),
//    new User(365, 'Anatoliy', 'Grant ', 'Anatoliy@gmail.com', '46(81)253-97-24'),
//    new User(915, 'Timofey', 'Davis ', 'Timofey@gmail.com', '02(55)957-16-26'),
//    new User(55, 'Artur', 'Campbell ', 'Artur@gmail.com', '023(953)556-95-42'),
//    new User(99, 'Oleksandr', 'Adams ', 'Oleksandr@gmail.com', '8(20)838-30-90')
//]
//console.log(UserArr)

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//console.log(UserArr.filter(value =>!(value.id % 2)));

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//console.log(UserArr.sort((a, b) => a.id - b.id));

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client
//class Client {
//    constructor(id, name, surname, email, phone, order) {
//        this.id = id;
//        this.name = name;
//        this.surname = surname;
//        this.email = email;
//        this.phone = phone;
//        this.order = order;
//    }
//}
//
// let Clients = [
//    new Client(1, 'Max', 'Williams', 'max@gmail.com', '262(136)379-56-32', ['driveshaft']),
//    new Client(11, 'Taras', 'Peters ', 'Taras@gmail.com', '747(96)625-74-74',['brake disks',  'tires(x4)']),
//    new Client(9, 'Valeriy', 'Gibson ', 'Valeriy@gmail.com', '91(3299)375-84-81',['ac compressor',  'left wing']),
//    new Client(8, 'Oleh', 'Martin ', 'Oleh@gmail.com', '6(095)728-39-30', ['M-package body kit','exhaust']),
//    new Client(12, 'Andriy', 'Jordan ', 'Andriy@gmail.com', '70(348)436-19-56', ['oil filter','tires(x2)','ac compressor']),
//    new Client(264, 'Vasiliy', 'Jackson ', 'Vaska@gmail.com', '794(949)114-51-75, ['engine block','engine oil']),
//    new Client(365, 'Anatoliy', 'Grant ', 'Anatoliy@gmail.com', '46(81)253-97-24',['timing chain']),
   // new Client(915, 'Timofey', 'Davis ', 'Timofey@gmail.com', '02(55)957-16-26', ['clutch kit','coil springs','drive axle','fuel filter','drive axle']),
   // new Client(55, 'Artur', 'Campbell ', 'Artur@gmail.com', '023(953)556-95-42', ['fuel pump','cylinder head gasket','door lock','v-belt']),
   // new Client(99, 'Oleksandr', 'Adams ', 'Oleksandr@gmail.com', '8(20)838-30-90,230',['car battery','fuel tank'])
//
//];
//console.log(Clients)

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//let sort = Clients.sort((a, b) =>a.order.length-b.order.length);
//console.log(sort)
