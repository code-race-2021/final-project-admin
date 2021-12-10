import { useState } from "react";
import  { isSKU } from "../../Utils";
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
        placeholder={"Letras y/o números."}
        label={"Ingrese el código del producto"}
        validate={isSKU}
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
