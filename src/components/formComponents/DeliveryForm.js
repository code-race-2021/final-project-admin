import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Form from "./Form";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";

const DeliveryForm = () => {
  const [isValid, setIsValid] = useState(true);

  function validate(value) {
    //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
    let regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    //Validate TextBox value against the Regex.
    let isSpecialCharacter = regex.test(value);

    if (isSpecialCharacter) {
      return true;
    } else {
      return false;
    }
  }

  const deliveryFormData = (
    <>
      {/* PRODUCT CODE */}
      <InputField
        type={"text"}
        placeholder={"Letras y/o números."}
        label={"Ingrese el código del producto"}
        validate={validate}
        invalidMsg={"Únicamente letras y/o números!"}
        defaultValue={"..."}
      />
      {/* PRODUCT TYPE */}
      <RadioButtons
        label={"Tipo de Delivery"}
        options={["Regular", "Express"]}
        defaultValue={""}
      />
    </>
  );

  return <Form formData={deliveryFormData} validate={validate} />;
};

export default DeliveryForm;
