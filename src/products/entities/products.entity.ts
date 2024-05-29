import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema()
export class Products extends Document {
    @Prop({
        unique:true,
        index: true
    })
    name: string;
    barCode: string;
    brand: string;
    nutritionalFacts: Object;
    category: string;
    ingredients: Object;
    ingredientsFatcs: Array<string>;
    nutritionalFlags: Array<string>;
    image: string;
}

export const ProductsSchema = SchemaFactory.createForClass(Products)