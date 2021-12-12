import { useState } from "react";
import  { hasSpecialCharacters } from "../../Utils";
import Form from "./Form";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";

const DeliveryForm = () => {
  const [isValid, setIsValid] = useState(true);

  const deliveryFormData = (
    <>
      {/* PRODUCT CODE */}
      <InputField
        type={"text"}
        placeholder={"ASD123ASD123"}
        label={"Ingrese el código del producto"}
        validate={hasSpecialCharacters}
        invalidMsg={"Únicamente letras y/o números!"}
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
