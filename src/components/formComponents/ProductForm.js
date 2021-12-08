import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Form from "./Form";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";

const ProductForm = () => {
  const productFormData = (
    <>
      {/* PRODUCT NAME INPUT */}
      <InputField
        type={"text"}
        label={"Nombre del Producto"}
        placeholder={"Únicamente letras."}
      />
      {/* SKU INPUT */}
      <InputField
        type={"text"}
        placeholder={"Ingrese letras y/o números."}
        label={"Ingrese el SKU"}
      />
      {/* PRICE INPUT */}
      <InputField
        type={"number"}
        placeholder={"$1312"}
        label={"Precio"}
      />
    </>
  );

  return <Form formData={productFormData} />;
};

export default ProductForm;
