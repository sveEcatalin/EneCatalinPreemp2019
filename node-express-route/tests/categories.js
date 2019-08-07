const app = require("../index");
const request = require("supertest");

describe("GET /categories", function() {
  it("responds with json", function(done) {
    request(app)
      .get("/categories")
      .expect("Content-Type", /json/)
      // .expect("Content-Length", "15")
      .expect(200, done);
  });
});

describe("GET /:id/products", function() {
  it("responds with json", function(done) {
    request(app)
      .get("/categories/1/products")
      .expect("Content-Type", /json/)
      // .expect("Content-Length", "15")
      .expect(200, done);
  });
});
