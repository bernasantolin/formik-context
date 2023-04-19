import { useFormikContext } from "formik";
import { Button } from "@material-ui/core";

const FormButton = ({ children, otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    // this will trigger the <Formik> prodiver
    submitForm();
  };

  const configFormButton = {
    ...otherProps,
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: handleSubmit
  };

  return <Button {...configFormButton}>{children}</Button>;
};

export default FormButton;
