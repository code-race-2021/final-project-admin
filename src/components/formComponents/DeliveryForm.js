import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Form from "./Form";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";

const DeliveryForm = () => {

  const deliveryFormData = (
    <>
      {/* PRODUCT CODE */}
      <InputField
        type={"text"}
        placeholder={"Letras y/o números."}
        label={"Ingrese el código del producto"}
      />
      {/* PRODUCT TYPE */}
      <RadioButtons
        label={"Tipo de Delivery"}
        options={["Regular", "Express"]}
      />  
    </>
  );

  return <Form formData={deliveryFormData} />;
};

export default DeliveryForm;
