import { useQuery, gql } from "@apollo/client";
import LoadButton from "../../components/library/buttons/LoadButton/LoadButton";
import Card from "../../components/library/visual/Card";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        species
        image
      }
    }
  }
`;

// console.log(GET_CHARACTERS);

export default function Characters() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  console.log(data?.characters?.results);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <div className="flexContainer">
        <img
          className="banner"
          src="./src/assets/PngItem_438051 1.png"
          alt=""
        />
        <ul>
          {data.characters.results.map(({ id, name, species, image }) => (
            <Card key={id} image={image} title={name} subtitle={species} />
          ))}
        </ul>
        <LoadButton />
      </div>
    </>
  );
}
