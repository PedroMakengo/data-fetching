import axios from "axios";
import { useQuery } from "react-query";

type Reporitory = {
  full_name: string;
  description: string;
};

function App() {
  const { data, isFetching } = useQuery<Reporitory[]>(
    "repos",
    async () => {
      const response = await axios.get(
        "https://api.github.com/users/pedromakengo/repos"
      );

      return response.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {data?.map((repo) => (
        <li key={repo.full_name}>
          <strong>{repo.full_name}</strong>
          <p>{repo.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;
