import {React, useState} from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import CakeSelect from "./CakeSelect";

import cake1 from "../assets/cake1.jpg";
import cake2 from "../assets/cake2.jpg";
import cake3 from "../assets/cake3.jpg";
import cake4 from "../assets/cake4.jpg";

const FormCake = () => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({
    option: '',
    firstName: '',
    lastName: '',
    deliveryDate: '',
    deliveryTime: '',
    phone: '',
    email: '',
    streetLine: '',
    streetLine2: '',
    city: '',
    region: '',
    postalCode: '',
    country: '',

  })

  const isMobile = () => {
    return window.innerWidth < 768;
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="px-2"
    >
      <Row>
        <Col xs={12} md={6}>
          <CakeSelect id={"option1"} src={cake1} value={"option1"} />
          <CakeSelect id={"option2"} src={cake2} value={"option2"} />
        </Col>
        <Col xs={12} md={6}>
          <CakeSelect id={"option3"} src={cake3} value={"option3"} />
          <CakeSelect id={"option4"} src={cake4} value={"option4"} />
        </Col>
      </Row>

      <p className="pt-5 fs-1 fw-lighter text-decoration-underline text-normal">
        Order Information
      </p>
      <Row>
        <Form.Label className="text-normal fs-4">
          Name<span className="required">*</span>
        </Form.Label>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Control
              size="lg"
              className="form-input fw-lighter border border-black"
              type="text"
              placeholder="First"
              required
              name="firstName"
            />
            <Form.Control.Feedback type="invalid">
              Please insert a valid first name.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Control
              size="lg"
              className="form-input fw-lighter border border-black"
              type="text"
              placeholder="Last"
              required
              name="lastName"

            />
            <Form.Control.Feedback type="invalid">
              Please insert a valid last name.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formDateDelivery">
            <Form.Label className="text-normal fs-4">Delivery date</Form.Label>
            <Form.Control
              size="lg"
              className="form-input fw-lighter border border-black"
              type="date"
              name="deliveryDate"

            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formDeliveryTime">
            <Form.Label className="text-normal fs-4">
              preferred delivery time
            </Form.Label>
            <Form.Control
              size="lg"
              className="form-input fw-lighter border border-black"
              type="time"
              name="deliveryTime"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label className="text-normal fs-4">
              Phone<span className="required">*</span>
            </Form.Label>
            <Form.Control
              size="lg"
              className="form-input fw-lighter border border-black"
              type="phone"
              placeholder="### ### ###"
              required
              name="phone"
            />
            <Form.Control.Feedback type="invalid">
              Please insert a valid phone.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className={isMobile() ? "" : "pt-2"}>
          <Form.Group className="mb-3 d-flex flex-column" controlId="formEmail">
            <Form.Label className="text-normal mb-0 fs-4">
              Email<span className="required">*</span>
            </Form.Label>
            {isMobile() ? (
              <>
                <Form.Text className="my-2" id="emailTextInfo" muted>
                  To receive the complete receipt
                </Form.Text>
                <Form.Control
                  aria-describedby="emailTextInfo"
                  size="lg"
                  className="form-input fw-lighter border border-black"
                  type="email"
                  placeholder=""
                  name="email"
                />
                <Form.Control.Feedback type="invalid">
                  Please insert a valid email.
                </Form.Control.Feedback>
              </>
            ) : (
              <>
                <Form.Control
                  aria-describedby="emailTextInfo"
                  size="lg"
                  className="form-input fw-lighter border border-black"
                  type="email"
                  placeholder=""
                  name="email"
                />
                <Form.Control.Feedback type="invalid">
                  Please insert a valid email.
                </Form.Control.Feedback>
                <Form.Text className="my-2" id="emailTextInfo" muted>
                  To receive the complete receipt
                </Form.Text>
              </>
            )}
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label className="text-normal fs-4">Address</Form.Label>
        <Form.Control
          size="lg"
          className="form-input fw-lighter my-3 border border-black"
          type="text"
          placeholder="street address"
          name="streetLine"
          />
        <Form.Control
          size="lg"
          className="form-input fw-lighter my-3 border border-black"
          type="text"
          placeholder="street address line 2 "
          name="streetLine2"

        />
        <Form.Control
          size="lg"
          className="form-input fw-lighter my-3 border border-black"
          type="text"
          placeholder="city"
          name="city"
        />
        <Form.Control
          size="lg"
          className="form-input fw-lighter my-3 border border-black"
          type="text"
          placeholder="region"
          name="region"
        />
        <Form.Control
          size="lg"
          className="form-input fw-lighter my-3 border border-black"
          type="text"
          placeholder="postal / zip code"
          name="postalCode"
        />
        <Form.Select
          size="lg"
          className="form-input fw-lighter border border-black"
          aria-label="Default select example"
          name="country"
        >
          <option disabled>Country</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>

      <Row>
        <Col xs={{ span: 4, offset: 3 }} md={{ span: 4, offset: 5 }}>
          <Button type="submit" size="lg" className="px-5 py-3 fw-lighter fs-4">
            Order
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormCake;
