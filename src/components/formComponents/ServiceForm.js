import { FormControl } from "@chakra-ui/react";
import Form from "./Form";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";
import { hasSpecialCharacters, isNotNumber, serviceRadioButtonOptions } from "../../Utils";

const ServiceForm = () => {

  const serviceFormData = (
    <FormControl isRequired>
      {/* SKU INPUT */}
      <InputField
        type={"text"}
        placeholder={"H0L4CH3"}
        label={"Ingrese el SKU"}
        validate={hasSpecialCharacters}
        invalidMsg={"Únicamente letras y/o números!"}
      />
      {/* SERVICE TYPE RADIO BUTTONS */}
      <RadioButtons
        label={"Tipo de servicio"}
        options={serviceRadioButtonOptions}
      />
      {/* VALIDITY DAYS INPUT */}
      <InputField
        type={"text"}
        placeholder={10}
        label={"Días de vigencia"}
        validate={isNotNumber}
        invalidMsg={"Únicamente números!"}
      />
    </FormControl>
  );

  return <Form formData={serviceFormData} />;
};

export default ServiceForm;
