"use strict"

function  Auto (mark, model, year, vinCode) {
	this._mark = mark;
	this._model = model;
	this._yearOfRealise = year;
	this._vinCode = vinCode;
}
Auto.prototype.log = function () {
	return `${this._mark} ` + `${this._model} ` + `${this._yearOfRealise}`;
}
Auto.prototype.checkVin = function () {
	if (this._vinCode.length === 16) return true;
	return false;
}

Auto_Fuel.prototype.__proto__ = Auto.prototype;

function Auto_Fuel (mark, model, year, vinCode, engineCapacity, consumption) {
	this._mark = mark;
	this._model = model;
	this._yearOfRealise = year;
	this._vinCode = vinCode;
	this._engineCapacity = engineCapacity;
	this._fuelConsumption = consumption;
}
Auto_Fuel.prototype.showFuelConsumption = function () {
	return `engine capacity:${this._engineCapacity}, ` + `fuel consumption:${this._fuelConsumption}`
}

Auto_Electric.prototype.__proto__ = Auto.prototype;

function Auto_Electric (mark, model, year, vinCode, batteryCapacity) {
	this._mark = mark;
	this._model = model;
	this._yearOfRealise = year;
	this._vinCode = vinCode;
	this._batteryCapacity = batteryCapacity;
}

Auto_Electric.prototype.showBatteryConfig = function () {
return this._batteryCapacity
}

const tesla = new Auto_Electric('Tesla', 'Model X', 2020, 'AF12124AEGJ32413', '100 кВт/ч')

console.log(tesla.log());
console.log(tesla.checkVin());
console.log(tesla.showBatteryConfig());
// //////////////////////////////////////////////////
