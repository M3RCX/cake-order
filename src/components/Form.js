import { React, useState } from "react";
import { Button, Col, Form, Row, Modal } from "react-bootstrap";
import CakeSelect from "./CakeSelect";

import cake1 from "../assets/cake1.jpg";
import cake3 from "../assets/cake2.jpg";
import cake2 from "../assets/cake3.jpg";
import cake4 from "../assets/cake4.jpg";

const FormCake = () => {
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setmodalMessage] = useState("");
  const [modalTitle, setmodalTitle] = useState("");

  const [formValues, setFormValues] = useState({
    typeCake: "",
    firstName: "",
    lastName: "",
    deliveryDate: "",
    deliveryTime: "",
    phone: "",
    email: "",
    streetLine: "",
    streetLine2: "",
    city: "",
    region: "",
    postalCode: "",
    country: "",
  });

  const isMobile = () => {
    return window.innerWidth < 768;
  };

  const handleSubmit = async (event) => {
    setmodalMessage("");
    setmodalTitle("");
    const form = event.currentTarget;
    const date = formValues.deliveryDate;
    const today = new Date().toISOString().slice(0, 10);
    var formValid = form.checkValidity();
    var dateValid = true;

    if (date <= today) {
      formValid = false;
      dateValid = true;
      setShowModal(true);
      setmodalMessage("invalid date please select a date after today");
      setmodalTitle("invalid date");
    }

    if (formValid === false) {
      event.preventDefault();
      event.stopPropagation();
      window.scrollTo(0, 0);
      if (dateValid) {
        setShowModal(true);
        setmodalMessage("Oops, check the form and try again");
        setmodalTitle("invalid form");
      }
    } else {
      setShowModal(true);
      event.preventDefault();

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );

      if (!response.ok) {
        console.log(response.error);

        setmodalMessage("Oops we had a problem, try again in a moment");
        setmodalTitle("Error send");
      } else {
        setmodalMessage(" order sent successfully");
        setmodalTitle("congratulations!");
        setShowModal(true);
      }
      setValidated(true);
    }
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
          <CakeSelect
            id={"option1"}
            src={cake1}
            value={"bolo arena de biscoito champanhe"}
            onChange={(e) =>
              setFormValues({ ...formValues, typeCake: e.target.value })
            }
          />
          <CakeSelect
            id={"option2"}
            src={cake2}
            value={"bolo liso com bombom"}
            onChange={(e) =>
              setFormValues({ ...formValues, typeCake: e.target.value })
            }
          />
        </Col>
        <Col xs={12} md={6}>
          <CakeSelect
            id={"option3"}
            src={cake3}
            value={"bolo de morango com chantily 2 andares"}
            onChange={(e) =>
              setFormValues({ ...formValues, typeCake: e.target.value })
            }
          />
          <CakeSelect
            id={"option4"}
            src={cake4}
            value={"bolo arco-iris"}
            onChange={(e) =>
              setFormValues({ ...formValues, typeCake: e.target.value })
            }
          />
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
              onChange={(e) =>
                setFormValues({ ...formValues, firstName: e.target.value })
              }
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
              onChange={(e) =>
                setFormValues({ ...formValues, lastName: e.target.value })
              }
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
              onChange={(e) =>
                setFormValues({ ...formValues, deliveryDate: e.target.value })
              }
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
              onChange={(e) =>
                setFormValues({ ...formValues, deliveryTime: e.target.value })
              }
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
              maxLength={14} 
              onChange={(e) =>
                setFormValues({ ...formValues, phone: e.target.value })
              }
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
                  onChange={(e) =>
                    setFormValues({ ...formValues, email: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormValues({ ...formValues, email: e.target.value })
                  }
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
          onChange={(e) =>
            setFormValues({ ...formValues, streetLine: e.target.value })
          }
        />
        <Form.Control
          size="lg"
          className="form-input fw-lighter my-3 border border-black"
          type="text"
          placeholder="street address line 2 "
          name="streetLine2"
          onChange={(e) =>
            setFormValues({ ...formValues, streetLine2: e.target.value })
          }
        />
        <Form.Control
          size="lg"
          className="form-input fw-lighter my-3 border border-black"
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) =>
            setFormValues({ ...formValues, city: e.target.value })
          }
        />
        <Form.Control
          size="lg"
          className="form-input fw-lighter my-3 border border-black"
          type="text"
          placeholder="region"
          name="region"
          onChange={(e) =>
            setFormValues({ ...formValues, region: e.target.value })
          }
        />
        <Form.Control
          size="lg"
          className="form-input fw-lighter my-3 border border-black"
          type="text"
          placeholder="postal / zip code"
          name="postalCode"
          onChange={(e) =>
            setFormValues({ ...formValues, postalCode: e.target.value })
          }
        />
        <Form.Select
          size="lg"
          className="form-input fw-lighter border border-black"
          aria-label="Default select example"
          name="country"
          value={formValues.country}
          onChange={(e) => {
            setFormValues({ ...formValues, country: e.target.value });
          }}
        >
          <option value="" disabled>
            Country
          </option>
          <option value="US">United States</option>
          <option value="BR">Brazil</option>
          <option value="JP">Japan</option>
          <option value="IN">India</option>
          <option value="DE">Germany</option>
          <option value="FR">France</option>
          <option value="IT">Italy</option>
          <option value="CA">Canada</option>
          <option value="AU">Australia</option>
        </Form.Select>
      </Form.Group>

      <Row>
        <Col xs={{ span: 4, offset: 3 }} md={{ span: 4, offset: 5 }}>
          <Button type="submit" size="lg" className="px-5 py-3 fw-lighter fs-4">
            Order
          </Button>
        </Col>
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

export default FormCake;
