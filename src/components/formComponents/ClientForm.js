import Form from "./Form";
import InputField from "./InputField";
import { isNotAlphabet, isNotEmail , isNotDNI } from "../../Utils";
import { FormControl } from "@chakra-ui/react";

const ClientForm = () => {
  const clientFormData = (
    <FormControl isRequired>
      {/* NAME INPUT */}
      <InputField
        type={"text"}
        placeholder={"Pedro"}
        label={"Ingrese su nombre."}
        validate={isNotAlphabet}
        invalidMsg={"Debe haber algo mal"}
        isRequired
      />
      {/* DNI INPUT */}
      <InputField
        type={"text"}
        placeholder={12345678}
        label={"Ingrese su DNI"}
        validate={isNotDNI}
        invalidMsg={"Ingrese los 8 números del DNI"}
      />
      {/* EMAIL INPUT */}
      <InputField
        type={"email"}
        placeholder={"test@test.com"}
        label={"Ingrese su email"}
        validate={isNotEmail}
        invalidMsg={"Formato de correo inválido."}
      />
    </FormControl>
  );

  return <Form formData={clientFormData} />;
};

export default ClientForm;
