import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const axios = require("axios").default;

const addNewHero = () => {
  const [form, setForm] = useState({
    superHero: "",
    realName: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios("http://localhost:3000/api/hero", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });
      Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      <h1 className="display-3">Add a new hero identity</h1>
      <form onSubmit={handleForm}>
        <MDBInput
          className="mt-2"
          onChange={handleChange}
          label="Super Hero"
          type="text"
          minLength={1}
          name="superHero"
        />
        <MDBInput
          className="my-2"
          onChange={handleChange}
          label="Real Name"
          type="text"
          minLength={1}
          name="realName"
        />
        <MDBBtn type="submit">Add new hero</MDBBtn>
      </form>
    </div>
  );
};

export default addNewHero;
