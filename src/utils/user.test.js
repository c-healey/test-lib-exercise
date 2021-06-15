import { server, rest  } from "../testServer";
import { user } from "./user";

it("gets user", async () => {
  const data = await user(1);
  expect(data.name).toEqual("John Doe");
});
test ('handles user failure', async()=>{
    server.use(rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    return res(ctx.status(404));
  }));
  await expect(user(1)).rejects.toThrow("404")
})