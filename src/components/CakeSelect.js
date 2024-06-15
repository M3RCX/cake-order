import React from "react";
import { Form, Image } from "react-bootstrap";

const CakeSelect = ({ id, src, value }) => {
  return (
    <div className="py-3">
      <Form.Check
        required
        type="radio"
        id={`${id}`}
        name="radioGroup"
        label={
          <>
            <Image src={`${src}`} className="" />
          </>
        }
        value={`${value}`}
        className="d-flex align-items-center "

        // checked={selectedOption === 'option1'}
        // onChange={handleOptionChange}
      />
    </div>
  );
};

export default CakeSelect;
