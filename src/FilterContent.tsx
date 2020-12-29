import React from "react";

export const FilterContent = React.createContext({
  filter: "",
  history: [],
  setFilter: (newFilter: string) => {}
});
