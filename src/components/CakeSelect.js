import React from "react";
import { Form, Image } from "react-bootstrap";

const CakeSelect = ({ id, src, value, onChange }) => {
  return (
    <div className="py-3">
      <Form.Check
        required
        type="radio"
        id={`${id}`}
        name="radioGroup"
        label={
          <>
            <Image
              src={`${src}`}
              className=""
              style={{ maxHeight: "380px" }}
            />
          </>
        }
        value={`${value}`}
        className="d-flex align-items-center prevent-validation"
        onChange={onChange}
      />
    </div>
  );
};

export default CakeSelect;
