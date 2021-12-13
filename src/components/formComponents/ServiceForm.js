import Form from "../formComponents/generics/Form";
import FormInputField from "../formComponents/generics/FormInputField";
import FormRadioButtons from "../formComponents/generics/FormRadioButtons";
import { hasSpecialCharacters, isNotNumber } from "../../utils/ValidationUtils";
import { serviceRadioButtonOptions } from "../../utils/Constants"

const ServiceForm = () => {

  const serviceFormData = (
    <>
      {/* SKU INPUT */}
      <FormInputField
        required={true}
        type={"text"}
        placeholder={"H0L4CH3"}
        label={"Ingrese el SKU"}
        validate={hasSpecialCharacters}
        invalidMsg={"Únicamente letras y/o números!"}
      />
      {/* SERVICE TYPE RADIO BUTTONS */}
      <FormRadioButtons
        required={true}
        label={"Tipo de servicio"}
        options={serviceRadioButtonOptions}
      />
      {/* VALIDITY DAYS INPUT */}
      <FormInputField
        required={true}
        type={"text"}
        placeholder={10}
        label={"Días de vigencia"}
        validate={isNotNumber}
        invalidMsg={"Únicamente números!"}
      />
    </>
  );

  return <Form formData={serviceFormData} />;
};

export default ServiceForm;
