import Form from "./Form";
import FormInputField from "./FormInputField";
import { isNotAlphabet, isNotEmail , isNotDNI } from "../../ValidationUtils";

const ClientForm = () => {
  const clientFormData = (
    <>
      {/* NAME INPUT */}
      <FormInputField
        required={true}
        type={"text"}
        placeholder={"Pedro"}
        label={"Ingrese su nombre."}
        validate={isNotAlphabet}
        invalidMsg={"Debe haber algo mal"}
        isRequired
      />
      {/* DNI INPUT */}
      <FormInputField
        required={true}
        type={"number"}
        placeholder={12345678}
        label={"Ingrese su DNI"}
        validate={isNotDNI}
        invalidMsg={"Ingrese los 8 números del DNI"}
      />
      {/* EMAIL INPUT */}
      <FormInputField
        required={true}
        type={"email"}
        placeholder={"test@test.com"}
        label={"Ingrese su email"}
        validate={isNotEmail}
        invalidMsg={"Formato de correo inválido."}
      />
    </>
  );

  return <Form formData={clientFormData} />;
};

export default ClientForm;
