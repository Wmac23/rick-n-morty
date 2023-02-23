import LoadButton from "../../components/library/buttons/LoadButton/LoadButton";
import Card from "../../components/library/visual/Card";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      id
      name
      description
      photo
    }
  }
`;

export default function Characters() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return data.characters.map(({ id, name, description, photo }) => (
    <>
      <img src="./src/assets/PngItem_438051 1.png" alt="" />
      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
      <LoadButton />
    </>
  ));
}
