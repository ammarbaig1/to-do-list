import React from "react";
import { useForm } from "react-hook-form";

const FormTwo = () => {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  const onSubmit = async (data) => {
    if (data.username === "this") {
      return alert("here is username", data);
    } else {
      alert("error");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("username", {
            required: "enter valid name",
          })}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default FormTwo;
