"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shared_CheckStringType = void 0;
var Shared_CheckStringType = function (value) {
    return Object.prototype.toString.call(value) === "[object String]";
};
exports.Shared_CheckStringType = Shared_CheckStringType;
