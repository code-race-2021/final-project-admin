import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Form from "./Form";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";

const ServiceForm = () => {

  const serviceFormData = (
    <>
      {/* SKU INPUT */}
      <InputField
        type={"text"}
        placeholder={"Letras y/o números."}
        label={"Ingrese el SKU"}
      />
      {/* SERVICE TYPE RADIO BUTTONS */}
      <RadioButtons
        label={"Tipo de servicio"}
        options={["Garantía", "Devolución"]}
      />
      {/* VALIDITY DAYS INPUT */}
      <InputField
        type={"number"}
        placeholder={"Únicamente números."}
        label={"Días de vigencia"}
      />
    </>
  );

  return <Form formData={serviceFormData} />;
};

export default ServiceForm;
