import { UserEvent } from "../models/Event";

test("Create Event", async () => {
    let evnt = new UserEvent({ event: 'this-test-just-for-development', timestamp: new Date() });
    let e = await evnt.save()
    expect(e).toBeInstanceOf(Object)
});

test("Get Event", async () => {
    let evnt = await UserEvent.findOne({ event: 'this-test-just-for-development'});
    expect(evnt).toBeInstanceOf(Object)
});

test("destroy Event", async () => {
    let evnt = await UserEvent.deleteMany({ event: 'this-test-just-for-development' });
    expect(evnt.ok).toEqual(1);
});