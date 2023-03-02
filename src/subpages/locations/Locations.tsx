import { useQuery, gql } from "@apollo/client";
import { NavLink } from "react-router-dom";
import LoadButton from "../../components/library/buttons/LoadButton/LoadButton";
import Card from "../../components/library/visual/Card";

const GET_LOCATIONS = gql`
  query {
    locations {
      results {
        id
        name
        type
      }
    }
  }
`;

// console.log(GET_LOCATIONS);

export default function Locations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  console.log(data?.locations?.results);

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
          {data.locations.results.map(({ id, name, type }) => (
            <NavLink to={"/LocationsDetail/" + id}>
              <Card key={id} title={name} subtitle={type} />
            </NavLink>
          ))}
        </ul>
        <LoadButton />
      </div>
    </>
  );
}
