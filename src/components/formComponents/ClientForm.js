import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Form from "./Form";
import InputField from "./InputField";

const ClientForm = () => {
  const clientFormData = (
    <>
      {/* NAME INPUT */}
      <InputField type={"text"} placeholder={"Pedro Pérez"} label={"Ingrese su nombre."} />
      {/* DNI INPUT */}
      <InputField
        type={"number"}
        placeholder={"12345678"}
        label={"Ingrese su DNI"}
      />
      {/* EMAIL INPUT */}
      <InputField
        type={"text"}
        placeholder={"test@test.com"}
        label={"Ingrese su email"}
      />
    </>
  );

  return <Form formData={clientFormData} />;
};

export default ClientForm;
