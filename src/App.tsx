import * as React from "react";
import "./styles.css";
import { PokedexRoutes } from "./routes/PokedexRoutes";
import { FilterContent } from "./FilterContent";

export default function App() {
  const [filter, setFilter] = React.useState<string>("");

  return (
    <FilterContent.Provider value={{ filter, setFilter }}>
      <PokedexRoutes />
    </FilterContent.Provider>
  );
}
