import { Disclosure } from "@headlessui/react";
import type { Filters } from "../../types/Character";

interface AsideProps {
  handleFilters: (key: keyof Filters, value: string) => void;
  clearFilters: () => void;
  filters: Filters;
}

interface FilterOption {
  id: keyof Filters;
  label: string;
  options: string[];
}

const filtersOption: FilterOption[] = [
  {
    id: "status",
    label: "Status",
    options: ["Alive", "Dead", "Unknown"],
  },
  {
    id: "species",
    label: "Species",
    options: [
      "Human",
      "Alien",
      "Humanoid",
      "Unknown",
      "Robot",
      "Planet",
      "Animal",
      "Disease",
      "Cronenberg",
      "Poopybutthole",
      "Mythological",
    ],
  },
  {
    id: "gender",
    label: "Gender",
    options: ["Female", "Male", "Genderless", "Unknown"],
  },
];

const Aside = ({ handleFilters, clearFilters, filters }: AsideProps) => {
  return (
    <aside className="[grid-area:aside] px-5 flex flex-col self-center h-95 overflow-hidden overflow-y-auto  gap-4 py-4 w-65 aside">
      <div className="text-center">
        <h2 className="text-[22px] py-4">Filters</h2>
        <span className="cursor-pointer underline" onClick={clearFilters}>
          Clear filters
        </span>
      </div>
      {filtersOption.map((filter) => (
        <Disclosure key={filter.id}>
          {({ open }) => (
            <div className="border-b border-white/20 py-1">
              <Disclosure.Button className="flex justify-between items-center w-full py-3 text-white font-bold cursor-pointer">
                {filter.label}
                <span>{open ? "▲" : "▼"}</span>
              </Disclosure.Button>
              <Disclosure.Panel className="flex flex-col gap-2">
                {filter.options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-4 text-white/80 cursor-pointer hover:text-white"
                  >
                    <input
                      type="radio"
                      name={filter.id}
                      value={option.toLowerCase()}
                      onChange={() =>
                        handleFilters(filter.id, option.toLowerCase())
                      }
                      checked={filters[filter.id] === option.toLowerCase()}
                      className="accent-[#00B4C8]"
                    />
                    {option}
                  </label>
                ))}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </aside>
  );
};

export default Aside;
