/***
 * Доброго дня!
 * Домашка на 11.01:
 *
 * Завдання:
 * написати функцію processArr, що приймає масив чисел.
 * Вертає обʼєкт, в якому є наступні поля:
 * 1. поле zeros. значення - кількість нулів в масиві
 * 2. поле count. значення - кількість унікальних елементів массива.
 * 3. поле pos_num. значення - кількість унікальних елементів, що > 0
 * 4. поле neg_num. значення - кількість унікальних елементів, що < 0
 * 5. поле evens. значення - кількість унікальних елементів, що діляться на 2 без остачі
 * 6. поле odds. значення - кількість унікальних елементів, що діляться на 2 з остачею
 *
 * приклад роботи:
 * var arr = [-1, 0, 1, 0, 3, 5, 8, 0, 2, 12, 2, 0, 8, -1];
 * getAverage(arr) має повертати:
 * {zeros: 4, count: 8, pos_num: 6, neg_num: 1, evens: 3, odds: 3}
 * якщо є проблеми з частиною умови "унікальних значень", можна зробити по оригінальному масиву arr,
 * а на його базі створенному новому масиву унікальних елементів
 * ***/
'use strict';

const arr = [-1, 0, 1, 0, 3, 5, 8, 0, 2, 12, 2, 0, 8, -1];

function processArr (arr) {
	let bufer = 0;
	let result = 0;
	return {
		zeros: function(){
			arr.forEach(function(value) {
				if(value === bufer) {
					result += 1;
				}
			});
			return result;
		},
		count: function(){
			result = 0;
			arr.forEach(function(value, index, array) {
				if (array.indexOf(value) === index) {
					result += 1
				};
			})
			return result;
		},
		pos_num: function(){
			result = 0;
			arr.forEach(function(value, index, array) {
				if (array.indexOf(value) === index && value > bufer) {
					result += 1
				};
			})
			return result;
		},
		neg_num: function(){
			result = 0;
			arr.forEach(function(value, index, array) {
				if (array.indexOf(value) === index && value < bufer) {
					result += 1
				};
			})
			return result;
		},
		evens: function(){
			result = 0;
			arr.forEach(function(value, index, array) {
				if (array.indexOf(value) === index && value % 2 === 0 && value !== bufer) {
					result += 1
				};
			})
			return result;
		},
		odds:function(){
			result = 0;
			arr.forEach(function(value, index, array) {
				if (array.indexOf(value) === index && value % 2 === 1 && value !== bufer) {
					result += 1
				};
			})
			return result;
		}
	}
}

let obj = processArr(arr);
