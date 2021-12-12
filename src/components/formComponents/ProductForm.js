import  { isAlphabet, hasSpecialCharacters, isNumber } from "../../Utils";
import Form from "./Form";
import InputField from "./InputField";

const ProductForm = () => {

  const productFormData = (
    <>
      {/* PRODUCT NAME INPUT */}
      <InputField
        type={"text"}
        label={"Nombre del Producto"}
        placeholder={"Zapatillas"}
        validate={isAlphabet}
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
        type={"number"}
        placeholder={1312}
        label={"Precio"}
        validate={isNumber}
        invalidMsg={"Únicamente números!"}
      />
    </>
  );

  return <Form formData={productFormData} />;
};

export default ProductForm;
