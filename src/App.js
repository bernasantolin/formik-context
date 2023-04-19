import { Grid } from "@material-ui/core";
import Formik from "./components/Formik/index";
import Button from "./components/Button/index";
import TextField from "./components/TextField/index";
import ValidationSchema from "./components/validationSchema";
import useFakeBackend from "./components/fakeBackend";

export default function App() {
  const { errors, setRequest } = useFakeBackend();

  return (
    <Formik
      initialValues={{ firstName: "" }}
      validationSchema={ValidationSchema}
      enableReinitialize={true}
      setErrors={errors}
      onSubmit={() => {
        alert("backend requesting...");
        setRequest();
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <label>First Name</label>
        </Grid>
        <Grid item xs={12}>
          <TextField name="firstName" />
        </Grid>
        <Grid item xs={12}>
          <Button>Submit</Button>
        </Grid>
      </Grid>
    </Formik>
  );
}
