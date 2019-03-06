import req from "supertest";

import App from '../App';

test("[GET] /", async () => {
  const res = await req(App).get("/");
  expect(JSON.parse(res.text)).toEqual({
    message: 'Olá Typescript'
  });
});
