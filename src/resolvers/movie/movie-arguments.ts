import { Field, InputType } from "type-graphql"
import { ObjectId } from "mongodb"
import { Length, MinLength } from "class-validator";
import { Movie } from "../../entities/movie-entity";

@InputType()
export class BaseMovieInput {

    @Field()
    @Length(1, 40)
    name: string;

    @Field()
    @Length(1, 100)
    description: string;

    @Field()
    @Length(1, 4)
    year: string;

    @Field()
    @MinLength(5)
    image: string;
}

@InputType()
export class MovieInput implements Partial<Movie> {

    @Field()
    _id: ObjectId;

    @Field()
    name?: string;

    @Field()
    description?: string;

    @Field()
    year?: string;

    @Field()
    image?: string;
}