import { Schema, Model } from "mongoose";
import { mongoose } from "../bin/Conf";
import { IEvent } from "./IEvent"

var UserEventSchema: Schema = new Schema({
    timestamp: { type: Date, required: true },
    event: { type: String, required: true }
}, { collection: 'events' });

export const UserEvent: Model<IEvent> = mongoose.model<IEvent>("UserEvent", UserEventSchema);