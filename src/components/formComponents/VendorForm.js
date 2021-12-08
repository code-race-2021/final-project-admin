import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Form from "./Form";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";

const VendorForm = () => {

  const vendorFormData = (
    <>
      {/* NAME INPUT */}
      <InputField type={"text"} placeholder={"Pedro Pérez"} label={"Ingrese su nombre."} />
      {/* CODE INPUT */}
      <InputField
        type={"number"}
        placeholder={"Máximo 5 caracteres"}
        label={"Código de venta"}
      />
      {/* EMAIL INPUT */}
      <RadioButtons
        label={"Divisa"}
        options={["ARS", "BRL", "USD"]}
      />  
    </>
  );

  return <Form formData={vendorFormData} />;
};

export default VendorForm;
