import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema()
export class Products extends Document {
    @Prop({
        unique:true,
        index: true
    })
    name: string;
    @Prop({
        unique:true,
    })
    barCode: string;
    @Prop({
        unique:true,
    })
    brand: string;
    @Prop({
        type: Object,
    })
    nutritionalFacts: Object;
    @Prop({
        unique:true,
    })
    category: string;
    @Prop({
        type: Array
    })
    ingredients: Array<string>;
    @Prop({
        unique:true,
    })
    ingredientsFacts: Array<string>;
    @Prop({
        unique:true,
    })
    nutritionalFlags: Array<string>;
    @Prop({
        unique:true,
    })
    image: string;
}

export const ProductsSchema = SchemaFactory.createForClass(Products)