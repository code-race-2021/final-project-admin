import  { isAlphabet, isSKU, isNumber } from "../../Utils";
import Form from "./Form";
import InputField from "./InputField";

const ProductForm = () => {

  const productFormData = (
    <>
      {/* PRODUCT NAME INPUT */}
      <InputField
        type={"text"}
        label={"Nombre del Producto"}
        placeholder={"Únicamente letras."}
        validate={isAlphabet}
        invalidMsg={"Únicamente letras!"}
      />
      {/* SKU INPUT */}
      <InputField
        type={"text"}
        placeholder={"Ingrese letras y/o números."}
        label={"Ingrese el SKU"}
        validate={isSKU}
        invalidMsg={"Únicamente letras y/o números!"}
      />
      {/* PRICE INPUT */}
      <InputField
        type={"number"}
        placeholder={"$1312"}
        label={"Precio"}
        validate={isNumber}
        invalidMsg={"Únicamente números!"}
        defaultValue={99999}
      />
    </>
  );

  return <Form formData={productFormData} />;
};

export default ProductForm;
