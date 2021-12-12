import Form from "./Form";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";
import { isNotAlphabet, isNotDNI, currencyRadioButtonOptions } from "../../Utils";
import { FormControl } from "@chakra-ui/react";

const VendorForm = () => {
  const vendorFormData = (
    <FormControl isRequired>
      {/* NAME INPUT */}
      <InputField
        type={"text"}
        placeholder={"Pedro"}
        label={"Ingrese su nombre."}
        validate={isNotAlphabet}
        invalidMsg={"Nombre inválido."}
      />
      {/* CODE INPUT */}
      <InputField
        type={"text"}
        placeholder={12345}
        label={"Código de venta"}
        validate={isNotDNI}
        invalidMsg={"Únicamente números!"}
      />
      {/* EMAIL INPUT */}
      <RadioButtons label={"Divisa"} options={currencyRadioButtonOptions} />
    </FormControl>
  );

  return <Form formData={vendorFormData} />;
};

export default VendorForm;
