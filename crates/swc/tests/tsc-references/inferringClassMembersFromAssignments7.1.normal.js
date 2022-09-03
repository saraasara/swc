//// [inferringClassMembersFromAssignments7.js]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
        var self = this;
        self.x = 1;
        self.m = function() {
            console.log(self.x);
        };
    }
    var _proto = C.prototype;
    _proto.mreal = function mreal() {
        var self = this;
        self.y = 2;
    };
    return C;
}();
var c = new C();
c.x;
c.y;
c.m();