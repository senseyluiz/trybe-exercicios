"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        this.isvalidName(name);
        this.name = name,
            this.birthDate = birthDate;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setName", {
        set: function (name) {
            this.isvalidName(name);
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getBirthDate", {
        get: function () {
            return this.birthDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setBirthDate", {
        set: function (birthDate) {
            this.birthDate = birthDate;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.isvalidName = function (name) {
        if (name.length <= 3)
            throw new Error('O nome precisa ter mais de 3 caracteres');
        return true;
    };
    return Person;
}());
exports.default = Person;
