// Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
//     Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
// let a = [1, 2, 3]
// a.reverse()
// console.log(a)

//Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
// let a = [0, 1, false, 2, undefined, '', 3, null]
// console.log(a.filter(el => el !==0 && el !== false && el !== undefined && el !=='' && el !== null))

// * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
//     Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

// const num =[1,2,3,1,2]
// const b = num.filter((el,index) =>{
//     return index === num.indexOf(el);
// });
// console.log(b)



// Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// let d =[`a`,`b`,`c`]
// let b = [1, 2, 3]
// let c = [...d,...b]
// console.log(c)


// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let d =[1,2,3]
// let b =[4,5,6]
// let c = [...d,...b]
// console.log(c)


// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let d = [1,2,3,]
// let b =[4,5,6]
// let c = [...b,...d]
// console.log(c)


// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]
// let a = [1, 2, 3, 4, 5]
// console.log(a.filter(el => el !==2 && el !==3))


// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
// let k  = {
//     js:`test`,
//     jq:`hello`,
//     css:`world`
// }
// console.log(Object.keys(k))

// Напишите код, который преобразовывает и объединяет все
// элементы массива в одно строковое значение. Элементы
// массива будут разделены запятой.
//  let b=   ['Капуста', 'Репа', 'Редиска', 'Морковка']
// console.log(b.join(','))

// Пользователь вводит строку кириллицей разного регистра.Напишите
// функцию, которая принимает строку в качестве аргумента
// и заменяет регистр каждого символа на противоположный. Например, если вводится
// «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк]

// function toggleCase(inputString) {
//
//     let result = '';
//
//     for (let i = 0; i < inputString.length; i++) {
//         const char = inputString[i];
//
//
//         if (char === char.toUpperCase()) {
//             result += char.toLowerCase();
//         } else {
//             result += char.toUpperCase();
//         }
//     }
//
//     return result;
// }
//
// const inputString = "КаЖдЫй ОхОтНиК";
// const toggledString = toggleCase(inputString);
// console.log(toggledString);

// const cars = [
//     {
//         make: "Ford",
//         model: "Mustang",
//         year: 1969,
//         color: "red",
//         price: 25000
//     },
//     {
//         make: "Ford",
//         model: "F-150",
//         year: 2017,
//         color: "blue",
//         price: 30000
//     },
//     {
//         make: "Tesla",
//         model: "Model S",
//         year: 2018,
//         color: "black",
//         price: 120000
//     },
//     {
//         make: "Chevrolet",
//         model: "Camaro",
//         year: 1970,
//         color: "orange",
//         price: 60000
//     },
//     {
//         make: "Dodge",
//         model: "Challenger",
//         year: 2019,
//         color: "red",
//         price: 35000
//     },
//     {
//         make: "Chevrolet",
//         model: "Corvette",
//         year: 2019,
//         color: "blue",
//         price: 90000
//     },
//     {
//         make: "Tesla",
//         model: "Model 3",
//         year: 2019,
//         color: "white",
//         price: 40000
//     },
//     {
//         make: "Mercedes",
//         model: "C-Class",
//         year: 2019,
//         color: "black",
//         price: 60000
//     }
// ]
// const handleFilter =()=>cars.filter(el => el.price>10000 && el.price<60000 && el.year<2019)
// console.log(handleFilter(cars))
