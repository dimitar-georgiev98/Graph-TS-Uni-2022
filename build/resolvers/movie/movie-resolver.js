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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieResolver = void 0;
const type_graphql_1 = require("type-graphql");
const movie_entity_1 = require("../../entities/movie-entity");
const user_roles_1 = require("../user/user-roles");
const movie_arguments_1 = require("./movie-arguments");
let MovieResolver = class MovieResolver {
    async movies() {
        return await movie_entity_1.MovieModel.find({});
    }
    async movie(_id) {
        return await movie_entity_1.MovieModel.findById(_id);
    }
    async createMovie(data) {
        const newUser = new movie_entity_1.MovieModel(data);
        await newUser.save();
        return newUser;
    }
    async deleteMovie(_id) {
        return await movie_entity_1.MovieModel.findByIdAndRemove(_id);
    }
    async editMovie(_id, data) {
        return await movie_entity_1.MovieModel.findByIdAndUpdate(_id, data, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [movie_entity_1.Movie]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MovieResolver.prototype, "movies", null);
__decorate([
    (0, type_graphql_1.Query)(returns => movie_entity_1.Movie),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieResolver.prototype, "movie", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => movie_entity_1.Movie),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_arguments_1.BaseMovieInput]),
    __metadata("design:returntype", Promise)
], MovieResolver.prototype, "createMovie", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_roles_1.UserRoles.ADMIN, user_roles_1.UserRoles.SUPER_ADMIN]),
    (0, type_graphql_1.Mutation)(returns => movie_entity_1.Movie),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieResolver.prototype, "deleteMovie", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_roles_1.UserRoles.ADMIN, user_roles_1.UserRoles.SUPER_ADMIN]),
    (0, type_graphql_1.Mutation)(returns => movie_entity_1.Movie),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, movie_arguments_1.MovieInput]),
    __metadata("design:returntype", Promise)
], MovieResolver.prototype, "editMovie", null);
MovieResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], MovieResolver);
exports.MovieResolver = MovieResolver;
