import React from "react";
import { useState } from "react";
import "./app.css";
import MainInput from "./components/input/MainInput";
import Button from "./components/button/Button";

function App() {

const [name, setName] = useState("");
  const handleChangeName = (e) => {
      setName(e.target.value)
     console.log(name);
  }


const [email, setEmail] = useState("");
  const handleChangeEmail = (e) => {
      setEmail(e.target.value)
     console.log(email);
  }


const [phone, setPhone] = useState("");
  const handleChangePhone = (e) => {
      setPhone(e.target.value)
     console.log(phone);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Aboy enter name na!");
      return;
    }else if (!email) {
      alert("Aboy enter email na!");
      return;
    }
    else if (!phone || phone.length < 10) {
      alert("Aboy enter phone number na, Or you complete am 10");
      return;
    }
    else {
      alert('confirm!! data submitted')
    }
    // console.log(name);
  };


  return (
    <div className="container">
    <form className="formComponents" onSubmit={(e) => handleSubmit(e)}>
    <h3>Warrior's Form</h3>
        <MainInput 
        placeholder="Enter your name" 
        type="text"
        label="name"
        value={name}
        handleChange={handleChangeName}
        />
        <MainInput 
        placeholder="Enter your email" 
        type="email"
        label="email"
        value={email}
        handleChange={handleChangeEmail}
        />
        <MainInput 
        placeholder="Enter your phone number" 
        type="number"
        label="phone"
        value={phone}
        handleChange={handleChangePhone}
        />
        <Button color="red"/>
      </form>
    </div>
  );
}

export default App;
