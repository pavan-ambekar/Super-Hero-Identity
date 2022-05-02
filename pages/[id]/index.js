import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useRouter } from "next/router";

const axios = require("axios").default;

const EachHero = ({ hero }) => {
  const router = useRouter();
  const heroId = router.query.id;

  const deleteHero = async () => {
    try {
      const delHero = await axios(`http://localhost:3000/api/hero/${heroId}`, {
        method: "DELETE",
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="display-3">Identity of hero</h1>
      <MDBCard className="border border-2 my-2" style={{ maxWidth: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>{hero.superHero}</MDBCardTitle>
          <MDBCardText>{hero.realName}</MDBCardText>
          <MDBBtn className="mx-2 btn btn-danger" onClick={deleteHero}>
            Delete Hero
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
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

export default EachHero;
