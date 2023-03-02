import { useQuery, gql } from "@apollo/client";
import List from "../../components/library/visual/List";

const GET_CHARACTER = gql`
query {
  character(id: 1) {
      id
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
    }
  }
`;

// console.log(GET_CHARACTER);

export default function Character() {
  const { loading, error, data } = useQuery(GET_CHARACTER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <div className="flexContainer">
        <ul>
          {data.character.results.map(({ id, species, type, gender, origin, location }) => (
              <List key={id} specie={species} type={type} gender={gender} origin={origin} location={location} />
          ))}
        </ul>
      
      </div>
    </>
  );
}

