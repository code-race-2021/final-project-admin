import Form from "./Form";
import FormInputField from "./FormInputField";
import FormRadioButtons from "./FormRadioButtons";
import { isNotAlphabet, isNotDNI } from "../../ValidationUtils";
import { currencyRadioButtonOptions } from "../../Constants"

const VendorForm = () => {
  const vendorFormData = (
    <>
      {/* NAME INPUT */}
      <FormInputField
        required={true}
        type={"text"}
        placeholder={"Pedro"}
        label={"Ingrese su nombre."}
        validate={isNotAlphabet}
        invalidMsg={"Nombre inválido."}
      />
      {/* CODE INPUT */}
      <FormInputField
        required={true}
        type={"text"}
        placeholder={12345}
        label={"Código de venta"}
        validate={isNotDNI}
        invalidMsg={"Únicamente números!"}
      />
      {/* EMAIL INPUT */}
      <FormRadioButtons label={"Divisa"} options={currencyRadioButtonOptions} required={true}/>
    </>
  );

  return <Form formData={vendorFormData} />;
};

export default VendorForm;
