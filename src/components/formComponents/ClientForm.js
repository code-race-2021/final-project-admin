import Form from "./Form";
import InputField from "./InputField";
import { isAlphabet, isEmail , isDNI } from "../../Utils";

const ClientForm = () => {
  const clientFormData = (
    <>
      {/* NAME INPUT */}
      <InputField
        type={"text"}
        placeholder={"Pedro"}
        label={"Ingrese su nombre."}
        validate={isAlphabet}
        invalidMsg={"Debe haber algo mal"}
      />
      {/* DNI INPUT */}
      <InputField
        type={"number"}
        placeholder={"12345678"}
        label={"Ingrese su DNI"}
        validate={isDNI}
        defaultValue={12345678}
        invalidMsg={"Ingrese los 8 números del DNI"}
      />
      {/* EMAIL INPUT */}
      <InputField
        type={"email"}
        placeholder={"test@test.com"}
        label={"Ingrese su email"}
        validate={isEmail}
        defaultValue={"test@test.com"}
        invalidMsg={"Formato de correo inválido."}
      />
    </>
  );

  return <Form formData={clientFormData} />;
};

export default ClientForm;
