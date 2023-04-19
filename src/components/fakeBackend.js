import { useState } from "react";

const useFakeBackend = () => {
  const [errors, setErrors] = useState({});

  // simulating a backend request
  const setRequest = () => {
    setTimeout(() => {
      setErrors((errors) => ({
        firstName: "Please enter a valid First Name "
      }));
    }, 2000);
  };

  return { errors, setRequest };
};

export default useFakeBackend;
