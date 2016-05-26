System.register(['@angular/core', './li-gumb.component', './li-gumb-norender.component'], function(exports_1, context_1) {
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
    var core_1, li_gumb_component_1, li_gumb_norender_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (li_gumb_component_1_1) {
                li_gumb_component_1 = li_gumb_component_1_1;
            },
            function (li_gumb_norender_component_1_1) {
                li_gumb_norender_component_1 = li_gumb_norender_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Angular2 Render without Tags Test";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [li_gumb_component_1.LiGumbComponent, li_gumb_norender_component_1.LiGumbNoRenderComponent],
                        template: "\n        <h1>{{title}}</h1>\n        \n        <h2>This is with custom TAG rendering</h2>        \n        <li-gumb *ngFor=\"let i of [1,2,3]\" [num]=\"i\"></li-gumb>\n        \n        <h2>This is without custom TAG rendering</h2>\n        <li class=\"gumb\" *ngFor=\"let i of [1,2,3]\" [num]=\"i\"></li>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map