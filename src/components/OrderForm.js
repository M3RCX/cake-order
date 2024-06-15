import React from "react";
import {Col, Row } from "react-bootstrap";
import FormCake from "./Form";

const OrderForm = () => {

  const isMobile = () => {
    return window.innerWidth < 768;
  };

  return (
    <section className="px-4 py-5 my-5">
      <div className={isMobile() ? "text-center" : "text-start"}>
        <p className="fw-light text-normal main-title">Cake Order Form</p>
      </div>
      <div className="text-start px-2">
        <p className={isMobile() ? "fs-4 fw-light text-normal divider" : "fs-1 fw-light text-normal divider"}>
          Order your freshly baked cakes made using only the finest quality
          natural ingredients.
        </p>
        <hr className="my-4 divider" />
      </div>
      <div>
        <p className={isMobile() ? "fs-4 text-normal px-2" : "fs-1 text-normal px-2"}>
          please choose your favorite cake from among the following.
          <span className="required">*</span>
        </p>
      </div>
      <Row>
        <Col>
          <FormCake />
        </Col>
      </Row>
    </section>
  );
};

export default OrderForm;
