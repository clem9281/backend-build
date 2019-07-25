const server = require("./server");

const request = require("supertest");

describe("SERVER", () => {
  it("db env set to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  it("should return status 200", () => {
    return request(server)
      .get("/")
      .then(res => expect(res.status).toBe(200));
  });

  it("should return data in HTML", () => {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.type).toMatch(/html/);
      });
  });
});
