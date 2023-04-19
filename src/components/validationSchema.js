import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required")
});

export default ValidationSchema;
