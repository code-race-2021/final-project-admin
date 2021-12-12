import Form from "./Form";
import InputField from "./InputField";
import { isAlphabet, isEmail , isDNI } from "../../Utils";
import { FormControl } from "@chakra-ui/react";

const ClientForm = () => {
  const clientFormData = (
    <FormControl isRequired>
      {/* NAME INPUT */}
      <InputField
        type={"text"}
        placeholder={"Pedro"}
        label={"Ingrese su nombre."}
        validate={isAlphabet}
        invalidMsg={"Debe haber algo mal"}
        isRequired
      />
      {/* DNI INPUT */}
      <InputField
        type={"number"}
        placeholder={12345678}
        label={"Ingrese su DNI"}
        validate={isDNI}
        invalidMsg={"Ingrese los 8 números del DNI"}
      />
      {/* EMAIL INPUT */}
      <InputField
        type={"email"}
        placeholder={"test@test.com"}
        label={"Ingrese su email"}
        validate={isEmail}
        invalidMsg={"Formato de correo inválido."}
      />
    </FormControl>
  );

  return <Form formData={clientFormData} />;
};

export default ClientForm;
