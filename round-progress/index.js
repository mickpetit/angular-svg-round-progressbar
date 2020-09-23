"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoundProgressModule = void 0;
var core_1 = require("@angular/core");
var round_progress_component_1 = require("./round-progress.component");
var round_progress_ease_1 = require("./round-progress.ease");
var round_progress_config_1 = require("./round-progress.config");
var round_progress_service_1 = require("./round-progress.service");
var RoundProgressModule = /** @class */ (function () {
    function RoundProgressModule() {
    }
    RoundProgressModule = __decorate([
        core_1.NgModule({
            declarations: [round_progress_component_1.RoundProgressComponent],
            exports: [round_progress_component_1.RoundProgressComponent],
            providers: [round_progress_service_1.RoundProgressService, round_progress_ease_1.RoundProgressEase, round_progress_config_1.ROUND_PROGRESS_DEFAULTS_PROVIDER]
        })
    ], RoundProgressModule);
    return RoundProgressModule;
}());
exports.RoundProgressModule = RoundProgressModule;
__exportStar(require("./round-progress.component"), exports);
__exportStar(require("./round-progress.service"), exports);
__exportStar(require("./round-progress.ease"), exports);
__exportStar(require("./round-progress.config"), exports);
//# sourceMappingURL=index.js.map