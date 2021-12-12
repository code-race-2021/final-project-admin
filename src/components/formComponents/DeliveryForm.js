import { FormControl } from "@chakra-ui/react";
import  { hasSpecialCharacters } from "../../ValidationUtils";
import { deliveryRadioButtonOptions } from "../../Constants"
import Form from "./Form";
import FormInputField from "./FormInputField";
import FormRadioButtons from "./FormRadioButtons";

const DeliveryForm = () => {

  const deliveryFormData = (
    <>
      {/* PRODUCT CODE */}
      <FormInputField
        required={true}
        type={"text"}
        placeholder={"ASD123ASD123"}
        label={"Ingrese el código del producto"}
        validate={hasSpecialCharacters}
        invalidMsg={"Únicamente letras y/o números!"}
      />
      {/* PRODUCT TYPE */}
      <FormRadioButtons
        required={true}
        label={"Tipo de Delivery"}
        options={deliveryRadioButtonOptions}
      />
    </>
  );

  return <Form formData={deliveryFormData} />;
};

export default DeliveryForm;
