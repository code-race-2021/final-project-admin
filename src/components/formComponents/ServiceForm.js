import { FormControl } from "@chakra-ui/react";
import Form from "./Form";
import FormInputField from "./FormInputField";
import FormRadioButtons from "./FormRadioButtons";
import { hasSpecialCharacters, isNotNumber, serviceRadioButtonOptions } from "../../Utils";

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
