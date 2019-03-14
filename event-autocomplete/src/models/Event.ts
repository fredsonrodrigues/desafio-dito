import { Schema, Model, model } from "mongoose";
import { IEvent } from "./IEvent"

var UserEventSchema: Schema = new Schema({
    timestamp: { type: Date, required: true },
    event: { type: String, required: true }
}, { collection: 'events' });

export const UserEvent: Model<IEvent> = model<IEvent>("UserEvent", UserEventSchema);