import "./Home.css";
import CharacterCard from "../characterCard/CharacterCard";
import Aside from "../aside/Aside";
import type { Character, Filters } from "../../types/Character";

interface HomeProps {
  data: Character | null;
  error: string;
  loading: boolean;
  input: string;
  debounce: string;
  filters: Filters;
  handleFilters: (key: keyof Filters, value: string) => void;
  clearFilters: () => void;
}

const Home = ({
  data,
  error,
  loading,
  input,
  debounce,
  filters,
  handleFilters,
  clearFilters,
}: HomeProps) => {
  if (loading)
    return (
      <p className="flex h-100 items-center justify-center">
        Loading characters...
      </p>
    );

  return (
    <section className="grid [grid-template-areas:'aside_layout'] items-center grid-cols-[250px_1fr] overflow-hidden section-home h-163 home-container">
      <Aside
        filters={filters}
        handleFilters={handleFilters}
        clearFilters={clearFilters}
      />
      {!error ? (
        <div className="grid [grid-area:layout] grid-cols-[repeat(auto-fit,minmax(400px,1fr))] overflow-y-auto py-1 home h-full">
          {input
            ? data?.results
                .filter((character) =>
                  character.name
                    .toLowerCase()
                    .includes(debounce.trim().toLowerCase()),
                )
                .map((item) => (
                  <CharacterCard
                    key={item.id}
                    img={item.image}
                    name={item.name}
                    status={item.status}
                    species={item.species}
                  />
                ))
            : data?.results.map((character) => (
                <CharacterCard
                  key={character.id}
                  img={character.image}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                />
              ))}
        </div>
      ) : (
        <p className="mx-auto text-[20px]">{error}</p>
      )}
    </section>
  );
};

export default Home;
