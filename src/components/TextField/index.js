import { TextField } from "@material-ui/core";
import { useField } from "formik";

const FormTextField = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configFormTextField = {
    ...field,
    ...otherProps,
    variant: "outlined",
    fullWidth: true,
    size: "small"
  };

  if (meta && meta.error) {
    configFormTextField.error = true;
    configFormTextField.helperText = meta.error;
  }

  return <TextField {...configFormTextField} />;
};

export default FormTextField;
