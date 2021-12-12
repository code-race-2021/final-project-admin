import  { isNotAlphabet, hasSpecialCharacters, isNotNumber } from "../../ValidationUtils";
import Form from "./Form";
import FormInputField from "./FormInputField";

const ProductForm = () => {

  const productFormData = (
    <>
      {/* PRODUCT NAME INPUT */}
      <FormInputField
        required={true}
        type={"text"}
        label={"Nombre del Producto"}
        placeholder={"Zapatillas"}
        validate={isNotAlphabet}
        invalidMsg={"Únicamente letras!"}
      />
      {/* SKU INPUT */}
      <FormInputField
        required={true}
        type={"text"}
        placeholder={"SKERE12345"}
        label={"Ingrese el SKU"}
        validate={hasSpecialCharacters}
        invalidMsg={"Únicamente letras y/o números!"}
      />
      {/* PRICE INPUT */}
      <FormInputField
        required={true}
        type={"text"}
        placeholder={1312}
        label={"Precio"}
        validate={isNotNumber}
        invalidMsg={"Únicamente números!"}
      />
    </>
  );

  return <Form formData={productFormData} />;
};

export default ProductForm;
