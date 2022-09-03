//// [objectTypeWithDuplicateNumericProperty.ts]
// numeric properties must be distinct after a ToNumber operation
// so the below are all errors
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var C = function C() {
    "use strict";
    _class_call_check(this, C);
};
var a;
var b = {
    1: 1,
    1.0: 1,
    1.: 1,
    1.00: 1
};