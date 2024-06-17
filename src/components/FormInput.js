import React from "react";
import { Form, Alert } from "react-bootstrap";

const FormInput = ({
  type,
  placeholder,
  name,
  required,
  onChange,
  invalidMessage,
  labelText,
  lengthMax,
  isMobile,
  formText,
  cssCustom,
}) => {
  return (
    <Form.Group className={`mb-3 ${cssCustom}`} controlId={`form${name}`}>
      {labelText && (
        <Form.Label
          className={`text-normal fs-4 ${type === "email" ? "mb-0" : ""}`}
        >
          {labelText}
          {required && <span className="required">*</span>}
        </Form.Label>
      )}

      {isMobile ? (
        <>
          {formText && (
            <Form.Text className={"my-2"} id={`${name}TextInfo`} muted>
              {formText}
            </Form.Text>
          )}
          <Form.Control
            size="lg"
            className="form-input fw-lighter border border-black"
            type={type}
            placeholder={placeholder}
            required={required}
            name={name}
            onChange={onChange}
            maxLength={lengthMax}
          />
          <Form.Control.Feedback type="invalid">
            <Alert variant="danger">{invalidMessage}</Alert>
          </Form.Control.Feedback>
        </>
      ) : (
        <>
          <Form.Control
            size="lg"
            className={`form-input fw-lighter border border-black ${
              !required ? "prevent-validation" : ""
            }`}
            type={type}
            placeholder={placeholder}
            required={required}
            name={name}
            onChange={onChange}
            maxLength={lengthMax}
          />
          {formText && (
            <Form.Text className={"my-2"} id={`${name}TextInfo`} muted>
              {formText}
            </Form.Text>
          )}
          {invalidMessage && (
            <Form.Control.Feedback type="invalid">
              <Alert variant="danger">{invalidMessage}</Alert>
            </Form.Control.Feedback>
          )}
        </>
      )}
    </Form.Group>
  );
};

export default FormInput;
