import  { isNotAlphabet, hasSpecialCharacters, isNotNumber } from "../../Utils";
import Form from "./Form";
import InputField from "./InputField";
import { FormControl } from "@chakra-ui/react";

const ProductForm = () => {

  const productFormData = (
    <FormControl isRequired>
      {/* PRODUCT NAME INPUT */}
      <InputField
        type={"text"}
        label={"Nombre del Producto"}
        placeholder={"Zapatillas"}
        validate={isNotAlphabet}
        invalidMsg={"Únicamente letras!"}
      />
      {/* SKU INPUT */}
      <InputField
        type={"text"}
        placeholder={"SKERE12345"}
        label={"Ingrese el SKU"}
        validate={hasSpecialCharacters}
        invalidMsg={"Únicamente letras y/o números!"}
      />
      {/* PRICE INPUT */}
      <InputField
        type={"text"}
        placeholder={1312}
        label={"Precio"}
        validate={isNotNumber}
        invalidMsg={"Únicamente números!"}
      />
    </FormControl>
  );

  return <Form formData={productFormData} />;
};

export default ProductForm;
