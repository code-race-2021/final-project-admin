import Form from "./Form";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";
import { isAlphabet, isNumber } from "../../Utils";

const VendorForm = () => {
  const vendorFormData = (
    <>
      {/* NAME INPUT */}
      <InputField
        type={"text"}
        placeholder={"Pedro"}
        label={"Ingrese su nombre."}
        validate={isAlphabet}
        invalidMsg={"Nombre inválido."}
      />
      {/* CODE INPUT */}
      <InputField
        type={"number"}
        placeholder={12345}
        label={"Código de venta"}
        validate={isNumber}
        invalidMsg={"Únicamente números!"}
      />
      {/* EMAIL INPUT */}
      <RadioButtons label={"Divisa"} options={["ARS", "BRL", "USD"]} />
    </>
  );

  return <Form formData={vendorFormData} />;
};

export default VendorForm;
