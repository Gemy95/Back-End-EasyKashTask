import chai from "chai";
import chaiHttp from "chai-http";
chai.use(chaiHttp);
import app from "../app";
import {expect} from 'chai';

describe("EasyKash Integration tests", () => {
    it("get user transactions", (done) => {
      chai
      .request(app)
      .get("/API/transaction")
      .set("content-type", "application/json")
      .query({ seller_id:1,page:1,per_page:10 })
      .then((response) => {
          expect(response).to.be.json;
          expect(response).to.have.status(200);
          expect(response.body.data).to.be.an.instanceof(Object);
          expect(response.body).to.have.property("message");
          expect(response.body.data.transaction).to.be.an.instanceof(Array);
          expect(response.body.data.transaction[0]).to.be.an.instanceof(Object);
          expect(response.body.data.transaction[0]).to.have.property("seller_id");
          expect(response.body.data.transaction[0]).to.have.property("transaction_id");
          expect(response.body.data.transaction[0]).to.have.property("offer_id");
          expect(response.body.data.transaction[0]).to.have.property("title");
          expect(response.body.data.transaction[0]).to.have.property("fees");
          expect(response.body.data.transaction[0]).to.have.property("amount");
          expect(response.body.data.transaction[0]).to.have.property("created_at");
          expect(response.body.data.transaction[0]).to.have.property("updated_at");
          expect(response.body.data).to.have.property("transaction");
          expect(response.body.data).to.have.property("paging");
          expect(response.body.data.paging).to.have.property("total");
          expect(response.body.data.paging).to.have.property("current_page");
          expect(response.body.data.paging).to.have.property("per_page");
          done();
      }).catch((error)=>{
          done(error);
      });
     }).timeout(50000);
  });