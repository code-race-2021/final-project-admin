import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Form from "./Form";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";

const ServiceForm = () => {
  function checkForSpecialCharacters(value) {
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

  function checkForSpecialCharacters(value) {
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

  function isNumber(value) {
    //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
    let regex = /^\d+$/;
    //Validate TextBox value against the Regex.
    let isNumber = !regex.test(value);

    if (isNumber) {
      return true;
    } else {
      return false;
    }
  }

  const serviceFormData = (
    <>
      {/* SKU INPUT */}
      <InputField
        type={"text"}
        placeholder={"Letras y/o números."}
        label={"Ingrese el SKU"}
        validate={checkForSpecialCharacters}
        invalidMsg={"Únicamente letras y/o números!"}
      />
      {/* SERVICE TYPE RADIO BUTTONS */}
      <RadioButtons
        label={"Tipo de servicio"}
        options={["Garantía", "Devolución"]}
      />
      {/* VALIDITY DAYS INPUT */}
      <InputField
        type={"text"}
        placeholder={"Únicamente números."}
        label={"Días de vigencia"}
        validate={isNumber}
        invalidMsg={"Únicamente números!"}
        defaultValue={10}
      />
    </>
  );

  return <Form formData={serviceFormData} />;
};

export default ServiceForm;
