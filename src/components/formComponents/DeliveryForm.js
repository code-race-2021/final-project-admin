import  { hasSpecialCharacters } from "../../utils/ValidationUtils";
import { deliveryRadioButtonOptions } from "../../utils/Constants"
import Form from "../formComponents/generics/Form";
import FormInputField from "../formComponents/generics/FormInputField";
import FormRadioButtons from "../formComponents/generics/FormRadioButtons";

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
