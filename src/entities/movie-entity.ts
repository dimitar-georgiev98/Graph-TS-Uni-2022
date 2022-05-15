import { ObjectType, Field } from "type-graphql"
import { prop as Prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectId } from "mongodb"

@ObjectType()
export class Movie {

    @Field()
    readonly _id: ObjectId;

    @Prop({ required: true })
    @Field()
    name: string;

    @Prop({ required: true })
    @Field()
    description: string;

    @Prop({ required: true })
    @Field()
    year: string;

    @Prop({ required: true })
    @Field()
    image: string;
}

export const MovieModel = getModelForClass(Movie, { schemaOptions: { timestamps: true } })