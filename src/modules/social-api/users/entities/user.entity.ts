import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";

@Schema()
export class User extends Document {
    @Prop({ type: String, required: false})
    name: string;
    @Prop({ type: String, required: true})
    password: string;
    @Prop({unique: true, type: String, required: true})
    email: string;
    @Prop({type: String, required: true})
    role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);