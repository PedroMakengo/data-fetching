import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export type Repository = {
  full_name: string;
  description: string;
};

export function Repos() {
  const { data, isFetching } = useQuery<Repository[]>(
    "repos",
    async () => {
      const response = await axios.get(
        "https://api.github.com/users/pedromakengo/repos"
      );

      return response.data;
    },
    {
      staleTime: 1000 * 60, // 1 minute
    }
  );

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {data?.map((repo, index) => (
        <li key={index}>
          <Link to={`repo/${repo.full_name}`}>{repo.full_name}</Link>
          <p>{repo.description}</p>
        </li>
      ))}
    </ul>
  );
}
