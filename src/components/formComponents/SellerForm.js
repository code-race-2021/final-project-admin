import Form from "../formComponents/generics/Form";
import FormInputField from "../formComponents/generics/FormInputField";
import FormRadioButtons from "../formComponents/generics/FormRadioButtons";
import { isNotAlphabet, isNotDNI } from "../../utils/ValidationUtils";
import { currencyRadioButtonOptions } from "../../utils/Constants"

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
