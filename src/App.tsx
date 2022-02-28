import { useFetch } from "./hooks/useFetch";

type Reporitory = {
  full_name: string;
  description: string;
};

function App() {
  const { data: repositories, isFetching } = useFetch<Reporitory[]>(
    "https://api.github.com/users/pedromakengo/repos"
  );
  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {repositories?.map((repos) => (
        <li key={repos.full_name}>
          <strong>{repos.full_name}</strong>
          <p>{repos.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;
