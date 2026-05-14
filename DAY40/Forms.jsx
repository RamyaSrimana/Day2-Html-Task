import { useState } from "react";
import TextInput from "./TextInput";
function Forms() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function checkValidation(e) {
    e.preventDefault();
    const isNameValid = name.trim() != "";
    const isemailValid = email.includes("@");
    const isPasswordValid = password.length >= 6;
    const isFormValid = isNameValid && isemailValid && isPasswordValid;
    if (!isFormValid) {
      setError("Please fill details correctly");
      return;
    }
    setError("");
    console.log(name, email, password);
  }

  function resetAll() {
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <form onSubmit={checkValidation}>
         <TextInput
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Submit</button>
        <button type="button" onClick={resetAll}>
          Clear
        </button>
      </form>
    </>
  );
}
export default Forms;
