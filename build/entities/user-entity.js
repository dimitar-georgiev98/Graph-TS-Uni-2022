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
exports.UserModel = exports.User = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const mongodb_1 = require("mongodb");
const movie_entity_1 = require("./movie-entity");
const user_roles_1 = require("../resolvers/user/user-roles");
let User = class User {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], User.prototype, "_id", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ default: Date.now() }),
    __metadata("design:type", Number)
], User.prototype, "lastLogin", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [movie_entity_1.Movie]),
    (0, typegoose_1.prop)({ default: [] }),
    __metadata("design:type", Array)
], User.prototype, "movies", void 0);
__decorate([
    (0, type_graphql_1.Authorized)([user_roles_1.UserRoles.SUPER_ADMIN]),
    (0, type_graphql_1.Field)(type => [String]),
    (0, typegoose_1.prop)({ default: [user_roles_1.UserRoles.USER] }),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
User = __decorate([
    (0, typegoose_1.modelOptions)({ options: { allowMixed: typegoose_1.Severity.ALLOW } }),
    (0, type_graphql_1.ObjectType)()
], User);
exports.User = User;
exports.UserModel = (0, typegoose_1.getModelForClass)(User, { schemaOptions: { timestamps: true } });
