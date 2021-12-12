import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Form from "./Form";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";
import { isSKU, isNumber } from "../../Utils";

const ServiceForm = () => {


  const serviceFormData = (
    <>
      {/* SKU INPUT */}
      <InputField
        type={"text"}
        placeholder={"H0L4CH3"}
        label={"Ingrese el SKU"}
        validate={isSKU}
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
        placeholder={10}
        label={"Días de vigencia"}
        validate={isNumber}
        invalidMsg={"Únicamente números!"}
      />
    </>
  );

  return <Form formData={serviceFormData} />;
};

export default ServiceForm;
