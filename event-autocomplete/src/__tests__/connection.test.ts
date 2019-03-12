import { UserEvent } from "../models/Event";
import * as env from 'dotenv';
env.config();
import mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL || '', { useNewUrlParser: true });

test("Create Event", async () => {
    let evnt = new UserEvent({ event: 'this-test-just-for-development', timestamp: new Date() });
    let e = await evnt.save()
    expect(e).toBeInstanceOf(Object)
});

test("Get Event", async () => {
    let evnt = await UserEvent.find({ event: new RegExp('this-test', 'i') });
    expect(evnt.length).toBeGreaterThanOrEqual(1)
});

test("destroy Events", async () => {
    let evnt = await UserEvent.deleteMany({ event: 'this-test-just-for-development' });
    expect(evnt.ok).toEqual(1);
});