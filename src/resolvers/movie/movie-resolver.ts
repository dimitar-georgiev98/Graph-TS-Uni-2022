import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { Movie, MovieModel } from "../../entities/movie-entity";
import { UserRoles } from "../user/user-roles";
import { BaseMovieInput, MovieInput } from "./movie-arguments";

@Resolver()
export class MovieResolver {

    @Query(returns => [Movie])
    async movies(): Promise<Movie[]> {
        return await MovieModel.find({})
    }

    @Query(returns => Movie)
    async movie(@Arg("_id") _id: string): Promise<Movie> {
        return await MovieModel.findById(_id);
    }

    @Mutation(returns => Movie)
    async createMovie(@Arg("data") data: BaseMovieInput): Promise<Movie> {
        const newUser = new MovieModel(data);
        await newUser.save();
        return newUser
    }

    @Authorized([UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
    @Mutation(returns => Movie)
    async deleteMovie(@Arg("_id") _id: string): Promise<Movie> {
        return await MovieModel.findByIdAndRemove(_id);
    }

    @Authorized([UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
    @Mutation(returns => Movie)
    async editMovie(@Arg("_id") _id: string, @Arg("data") data: MovieInput): Promise<Movie> {
        return await MovieModel.findByIdAndUpdate(_id, data, { new: true });
    }
}