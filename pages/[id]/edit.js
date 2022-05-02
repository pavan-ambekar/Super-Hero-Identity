import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const axios = require("axios").default;

const editHero = ({ hero }) => {
  const router = useRouter();
  const heroId = router.query.id;

  const [form, setForm] = useState({
    superHero: hero.superHero,
    realName: hero.realName,
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
      const res = await axios(`http://localhost:3000/api/hero/${heroId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });
      router.push("/");
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
          value={form.superHero}
        />
        <MDBInput
          className="my-2"
          onChange={handleChange}
          label="Real Name"
          type="text"
          minLength={1}
          name="realName"
          value={form.realName}
        />
        <MDBBtn type="submit">Edit a hero</MDBBtn>
      </form>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  const res = await axios(`http://localhost:3000/api/hero/${id}`);
  const { hero } = res.data;
  //   console.log(hero);
  return {
    props: { hero },
  };
}

export default editHero;
