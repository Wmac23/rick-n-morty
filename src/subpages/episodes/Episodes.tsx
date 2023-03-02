import { useQuery, gql } from "@apollo/client";
import { NavLink } from "react-router-dom";
import LoadButton from "../../components/library/buttons/LoadButton/LoadButton";
import Card from "../../components/library/visual/Card";

const GET_EPISODES = gql`
  query {
    episodes {
      results {
        id
        name
        episode
      }
    }
  }
`;

// console.log(GET_EPISODES);

export default function Episodes() {
  const { loading, error, data } = useQuery(GET_EPISODES);

  console.log(data?.episodes?.results);

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
          {data.episodes.results.map(({ id, name, episode }) => (
            <NavLink to={"/EpisodeDetail/" + id}>
              <Card key={id} title={name} subtitle={episode} />
            </NavLink>
          ))}
        </ul>
        <LoadButton />
      </div>
    </>
  );
}
