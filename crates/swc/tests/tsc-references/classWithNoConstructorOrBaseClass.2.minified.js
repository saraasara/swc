//// [classWithNoConstructorOrBaseClass.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
new function C() {
    "use strict";
    _class_call_check(this, C);
}();
var D = function D() {
    "use strict";
    _class_call_check(this, D);
};
new D(), new D();