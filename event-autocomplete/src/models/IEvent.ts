import { Document } from "mongoose";

export interface IEvent extends Document {
    timestamp: Date;
    event: string;
}