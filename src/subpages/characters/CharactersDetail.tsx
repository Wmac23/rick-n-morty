import { gql, useQuery } from "@apollo/client";
import Card from "../../components/library/visual/Card";
import List from "../../components/library/visual/List";

export default function CharactersDetail() {
  return (
    <>
      <div>
        {/* <img src= alt="" /> */}
        <span>name</span>
      </div>
      <div>
        <List />
      </div>
    </>
  );
}
