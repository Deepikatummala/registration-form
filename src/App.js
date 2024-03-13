import "./App.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import React from "react";

function App() {
  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm();
  
  const handleError = (errors) => {};
  const onSubmit = (data) => {

    window.location.reload();

  };

  return (
    <div className="App">
      

      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration form</h1>
        <div className="input-fields">
          <label>Name</label>
          <input
            type="name"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
          />
        </div>
        <p>{errors?.name && errors.name.message}</p>
        <div className="input-fields">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email id"
            {...register(
              "email",
              { required: "Email  is required" },
              {
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                },
              }
            )}
          />
        </div>
        
        <p>{errors?.email && errors.email.message}</p>
        <div className="input-fields">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter the password"
            {...register("password", { required: "Password is required",    minLength: {
              value: 8,
              message: "Password must be at least 8 characters long"
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/,
              message: "Password must contain at least one uppercase letter, one symbol, and one number"
            } })}
          />
        </div>
        <p>{errors?.password && errors.password.message}</p>
        <div className="input-fields">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
