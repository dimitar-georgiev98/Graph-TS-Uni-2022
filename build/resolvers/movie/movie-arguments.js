"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieInput = exports.BaseMovieInput = void 0;
const type_graphql_1 = require("type-graphql");
const mongodb_1 = require("mongodb");
const class_validator_1 = require("class-validator");
let BaseMovieInput = class BaseMovieInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Length)(1, 40),
    __metadata("design:type", String)
], BaseMovieInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], BaseMovieInput.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Length)(1, 4),
    __metadata("design:type", String)
], BaseMovieInput.prototype, "year", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], BaseMovieInput.prototype, "image", void 0);
BaseMovieInput = __decorate([
    (0, type_graphql_1.InputType)()
], BaseMovieInput);
exports.BaseMovieInput = BaseMovieInput;
let MovieInput = class MovieInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], MovieInput.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MovieInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MovieInput.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MovieInput.prototype, "year", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MovieInput.prototype, "image", void 0);
MovieInput = __decorate([
    (0, type_graphql_1.InputType)()
], MovieInput);
exports.MovieInput = MovieInput;
