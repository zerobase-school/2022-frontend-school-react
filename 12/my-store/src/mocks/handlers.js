import { rest } from "msw";

export const handlers = [
  rest.get("/user", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "hwarari",
        email: "hwarari@gmail.com",
      })
    );
  }),
];
