"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/common/http');
var ShoppingCartService = (function () {
    function ShoppingCartService(http) {
        this.http = http;
    }
    ShoppingCartService.prototype.create = function () {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        var x = Math.floor(Math.random() * 20) + 1;
        x.toString();
        var z = Math.floor(Math.random() * 9) + 1;
        z.toString();
        var w = '';
        w = z + "" + x;
        var body = {
            dateCreated: new Date().getTime(),
            id: w
        };
        this.http.post("https://lastproject-kamimas.c9users.io:8081/api/shopping-cart", body, httpOptions);
        return w;
    };
    ShoppingCartService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ShoppingCartService);
    return ShoppingCartService;
}());
exports.ShoppingCartService = ShoppingCartService;
