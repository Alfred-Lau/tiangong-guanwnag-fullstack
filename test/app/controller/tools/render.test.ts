// test/app/controller/tools/render.test.js
import { app } from "egg-mock/bootstrap";
// import { Context } from "egg";
import assert from "assert";

describe("test/app/controller/tools/render.test.js", () => {
  describe("GET /api/render/record", () => {
    it("should work", async () => {
      // 通过 factory-girl 快速创建 render 对象到数据库中
      await app.factory.createMany("render", 3);
      const res = await app.httpRequest().get("/api/render/record");
      assert(res.status === 200);
      assert(res.body.length === 3);
      assert(res.body[0].name);
      assert(res.body[0].url);
    });
  });

  // describe('GET /users/:id', () => {
  //   it('should work', async () => {
  //     const user = await app.factory.create('user');
  //     const res = await app.httpRequest().get(`/users/${user.id}`);
  //     assert(res.status === 200);
  //     assert(res.body.age === user.age);
  //   });
  // });

  // describe('POST /users', () => {
  //   it('should work', async () => {
  //     app.mockCsrf();
  //     let res = await app.httpRequest().post('/users').send({
  //       age: 10,
  //       name: 'name',
  //     });
  //     assert(res.status === 201);
  //     assert(res.body.id);

  //     res = await app.httpRequest().get(`/users/${res.body.id}`);
  //     assert(res.status === 200);
  //     assert(res.body.name === 'name');
  //   });
  // });

  // describe('DELETE /users/:id', () => {
  //   it('should work', async () => {
  //     const user = await app.factory.create('user');

  //     app.mockCsrf();
  //     const res = await app.httpRequest().delete(`/users/${user.id}`);
  //     assert(res.status === 200);
  //   });
  // });
});
