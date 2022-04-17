import { rest } from "msw";
import { db } from "./db";

export const handlers = [
  rest.get("/user", (req, res, ctx) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        return resolve(res(ctx.status(200), ctx.json(db.user.getAll()[0])));
      }, 1000)
    );
  }),

  rest.put("/update-nickname", (req, res, ctx) => {
    const nickname = req.url.searchParams.get("nickname");
    const updated = db.user.update({
      where: { id: { equals: 1 } },
      data: { nickName: nickname },
    });

    return res(ctx.json(updated));
  }),
];
