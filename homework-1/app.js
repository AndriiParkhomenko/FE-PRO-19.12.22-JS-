/***
 * Доброго дня!
 * Домашка на 09.01:
 *
 * Завдання 1:
 * написати функцію getAverage, що приймає масив чисел та вертає середнє арифметичне значення цих чисел з точністю 2 знаки після коми.
 * приклад роботи:
 * var arr = [1, 3, 5];
 * getAverage(arr) має повертати 3.00
 * Завдання 2:
 * написати функцію sortArr, що приймає масив чисел та вертає цей масив відсортований (довільно обрати чи то за збільшенням, чи то за зменшенням)
 * приклад роботи:
 * var arr = [2, 4, 1, 3, 5, 2];
 * sortArr(arr); має повертати [5, 4, 3, 2, 2, 1] або [1, 2, 2, 3, 4, 5]
 *
 * Додатково завдання "із зірочкою": другим аргументом до завдання №2 надіслати аргумент order, значенням якого може бути або строка '+', або '-'.
 * зважаючи на цей аргумент, масив буде відсортований за збільшенням/зменшенням значень
 * приклад роботи:
 * sortArr(arr, '+') має повертати [1, 2, 2, 3, 4, 5]
 *
 * Завдання 3:
 * написати функцію deleteFromStr, що приймає першим аргументом строку str, другим аргументом - строку subStr.
 * функція вертає str, з якої видалили subStr частину. я б користувався replaceAll.
 * приклад роботи:
 * deleteFromStr('this is sparta', 's') має повертати "thi i parta"
 *
 * Завдання 4:
 * написати функцію wrapStr, що приймає першим аргументом строку, другим - строку з назвою тегу. вертає строку, огорнуту у тег.
 * приклади роботи:
 * wrapStr('Welcome here!', 'div') вертає '<div>Welcome here</div>'
 * wrapStr('Welcome here!', 'h1') вертає '<h1>Welcome here</h1>'
 *
 * додатково "із зірочкою" до завдання №4:
 * можна надати третій аргумент params. аргумент є обʼєктом, що зберігає в собі назву атрибутів в тегу як ключі,
 * значення атрибутів як значення. повертає строку огорнуту у тег з атрибутами, що описані в обʼєкті params
 * приклад роботи:
 * wrapStr('Link to google', 'a', {id: 'google-link', href: 'https://google.com.ua', class: 'link'})
 * повертає cnhjre
 * '<a id="google-link" href="https://google.com.ua" class="link">Link to google</a>'
 * ***/
'use strict';
// Завдання 1:
var arr = [1, 3, 5];

function getAverage (arr) {
	var average = arr.reduce((total, item) => total + item, 0) / arr.length;
	return average.toFixed(2);
}

getAverage(arr);

// Завдання 2:
var array = [2, 4, 1, 3, 5, 2];
// Вариант 1

var sortArr = (array) => array.sort((a, b) => b - a);

sortArr(array);

// Вариант 2

function sortArr (array) { 
	array.sort((a, b) => b - a);
}

sortArr(array);
// "із зірочкою":

var operatorFunction = {
	'+' : function(a, b) {
		return a - b;
	},
	'-' : function(a, b) {
		return b - a;
	}
};

function sortArray (array, operator) { 
	array.sort((a, b) => operatorFunction[operator](a, b));
}

sortArray(array, '+');

// Завдання 3:

// Вариант 1
var deleteFromStr = (str, subStr) => str.replaceAll(subStr, ''); 

deleteFromStr('this is sparta', 's');

// Вариант 2
function deleteFromStr (str, subStr) { 
	return str.replaceAll(subStr, ''); 
}

deleteFromStr('this is sparta', 's');

// Завдання 4:

// Вариант 1
function wrapStr (text, tag) {
	return '<' + tag + '>' + text.replace('!', '') + '</' + tag + '>'; 
}

wrapStr ('Welcome here!', 'div');

// Вариант 2

wrapStr = (text, tag) => '<' + tag + '>' + text.replace('!', '') + '</' + tag + '>'; 

wrapStr ('Welcome here!', 'h1');
// "із зірочкою":

function wrapString (textName, tagName, params) {
	var param = JSON.stringify(params).replaceAll(',', ' ');
	return '<' + tagName + param.replaceAll(':', '=') + '>' + textName.replace('!', '') + '</' + tagName + '>'; 
}

wrapString ('Link to google', 'a', {id: 'google-link', href: 'https://google.com.ua', class: 'link'});
