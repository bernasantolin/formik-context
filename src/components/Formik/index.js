import { useEffect, Fragment } from "react";
import { useFormikContext } from "formik";
import { Formik } from "formik";

const FormikWithSetErrors = ({ children, setErrors }) => {
  const { setErrors: setBackendErrors } = useFormikContext();

  useEffect(() => {
    if (setErrors) setBackendErrors(setErrors);
  }, [setErrors]);

  return <Fragment>{children}</Fragment>;
};

const FormikForm = ({ children, setErrors, ...otherProps }) => {
  return (
    <Formik {...otherProps}>
      <FormikWithSetErrors setErrors={setErrors}>
        {children}
      </FormikWithSetErrors>
    </Formik>
  );
};

export default FormikForm;
