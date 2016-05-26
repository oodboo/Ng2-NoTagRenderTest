System.register(['@angular/core', '@angular/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var LiGumbComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            LiGumbComponent = (function () {
                function LiGumbComponent() {
                    this.test = "(Click Me)";
                    this.num = 1;
                }
                LiGumbComponent.prototype.changeMessage = function (e) {
                    this.test += " ?";
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], LiGumbComponent.prototype, "num", void 0);
                LiGumbComponent = __decorate([
                    core_1.Component({
                        selector: 'li-gumb',
                        directives: [common_1.NgSwitch],
                        template: "<li class=\"test1\"><a (click)=\"changeMessage($event)\">{{num}} - {{test}}</a></li>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], LiGumbComponent);
                return LiGumbComponent;
            }());
            exports_1("LiGumbComponent", LiGumbComponent);
        }
    }
});
//# sourceMappingURL=li-gumb.component.js.map