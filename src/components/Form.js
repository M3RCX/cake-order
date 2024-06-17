import { React, useState } from "react";
import { Button, Col, Form, Row, Modal, Alert } from "react-bootstrap";
import CakeSelect from "./CakeSelect";

import cake1 from "../assets/cake1.jpg";
import cake3 from "../assets/cake2.jpg";
import cake2 from "../assets/cake3.jpg";
import cake4 from "../assets/cake4.jpg";
import FormInput from "./FormInput";

const FormCake = () => {
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setmodalMessage] = useState("");
  const [modalTitle, setmodalTitle] = useState("");
  const [radioError, setRadioError] = useState(false);
  const [dateError, setDateError] = useState(false);

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

    if (!formValues.typeCake) {
      setRadioError(true);
      formValid = false;
    } else {
      setRadioError(false);
    }

    if (date <= today) {
      formValid = false;
      dateValid = false;
      setShowModal(true);
      setmodalMessage("Invalid date, please select a date after today.");
      setmodalTitle("Invalid date");
      setDateError(true);
    }else{
      setDateError(false);
    }

    if (formValid === false) {
      event.preventDefault();
      event.stopPropagation();
      window.scrollTo(0, 0);
      if (dateValid) {
        setShowModal(true);
        setmodalMessage("Oops, check the form and try again.");
        setmodalTitle("Invalid form");
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

        setmodalMessage("Oops, we had a problem. Try again in a moment.");
        setmodalTitle("Error send");
      } else {
        setmodalMessage("Order sent successfully.");
        setmodalTitle("Congratulations!");
        setShowModal(true);
      }
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
        {radioError && <Alert variant="danger">Please select a cake.</Alert>}
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
          <FormInput
            type={"text"}
            placeholder={"First"}
            required={true}
            name={"firstName"}
            onChange={(e) =>
              setFormValues({ ...formValues, firstName: e.target.value })
            }
            invalidMessage={"Please insert a valid first name."}
          />
        </Col>
        <Col xs={12} md={6}>
          <FormInput
            type={"text"}
            placeholder={"Last"}
            required={true}
            name={"lastName"}
            onChange={(e) =>
              setFormValues({ ...formValues, lastName: e.target.value })
            }
            invalidMessage={"Please insert a valid last name."}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <FormInput
            type={"date"}
            required={false}
            name={"deliveryDate"}
            onChange={(e) =>
              setFormValues({ ...formValues, deliveryDate: e.target.value })
            }
            labelText={"Delivery date"}
          />
          {dateError && <Alert variant="danger">please select a date after today.</Alert>}
        </Col>
        <Col xs={12} md={6}>
          <FormInput
            type={"time"}
            required={false}
            name={"deliveryTime"}
            onChange={(e) =>
              setFormValues({ ...formValues, deliveryTime: e.target.value })
            }
            labelText={"Preferred delivery time"}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <FormInput
            type={"phone"}
            required={true}
            name={"phone"}
            placeholder={"### ### ###"}
            onChange={(e) =>
              setFormValues({ ...formValues, phone: e.target.value })
            }
            labelText={"Phone"}
            lengthMax={14}
            invalidMessage={"Please insert a valid phone."}
          />
        </Col>
        <Col xs={12} md={6} className={isMobile() ? "" : "pt-2"}>
          <FormInput
            type={"email"}
            required={true}
            name={"email"}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
            labelText={"Email"}
            invalidMessage={"Please insert a valid email."}
            isMobile={isMobile()}
            formText={" To receive the complete receipt"}
            cssCustom={"d-flex flex-column"}
          />
        </Col>
      </Row>

      <FormInput
        type={"text"}
        required={false}
        name={"streetLine"}
        onChange={(e) =>
          setFormValues({ ...formValues, streetLine: e.target.value })
        }
        labelText={"Address"}
        placeholder={"Street Address"}
      />

      <FormInput
        type={"text"}
        required={false}
        name={"streetLine2"}
        onChange={(e) =>
          setFormValues({ ...formValues, streetLine2: e.target.value })
        }
        placeholder={"Street Address Line 2"}
      />
      <Row>
        <Col xs={12} md={6}>
          <FormInput
            type={"text"}
            required={false}
            name={"city"}
            onChange={(e) =>
              setFormValues({ ...formValues, city: e.target.value })
            }
            placeholder={"City"}
          />
          <FormInput
            type={"text"}
            required={false}
            name={"region"}
            onChange={(e) =>
              setFormValues({ ...formValues, region: e.target.value })
            }
            placeholder={"Region"}
          />
        </Col>

        <Col xs={12} md={6}>
          <FormInput
            type={"text"}
            required={false}
            name={"postalCode"}
            onChange={(e) =>
              setFormValues({ ...formValues, postalCode: e.target.value })
            }
            placeholder={"Postal / Zip Code"}
          />

          <Form.Group className="mb-3" controlId="formCountry">
            <Form.Select
              size="lg"
              className="form-input fw-lighter border border-black prevent-validation"
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
        </Col>
      </Row>

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
