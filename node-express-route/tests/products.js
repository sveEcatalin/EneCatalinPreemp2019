const app = require("../index");
const request = require("supertest");
const expect = require("chai").expect;

describe("GET /products", function() {
  it("responds with json", function(done) {
    request(app)
      .get("/products")
      .expect("Content-Type", /json/)
      // .expect("Content-Length", "15")
      .expect(200, done);
  });
});
describe("GET /products/:id", function() {
  it("responds with json", function(done) {
    request(app)
      .get("/products/2")
      .expect("Content-Type", /json/)
      // .expect("Content-Length", "15")
      .expect(200, done);
  });
});

describe("GET /products test product", function() {
  it("second product should be named Product 2", function() {
    return request(app)
      .get("/products")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(response.body.data[1].name).to.be.equal("Product 2");
      });
  });
});
