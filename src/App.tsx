import * as React from "react";
import "./styles.css";
import { PokedexRoutes } from "./routes/PokedexRoutes";
import { FilterContent } from "./FilterContent";

export default function App() {
  const [filter, setFilter] = React.useState<string>("");
  const [history] = React.useState<string[]>([]);

  return (
    <FilterContent.Provider value={{ filter, setFilter, history }}>
      <PokedexRoutes />
    </FilterContent.Provider>
  );
}
