import React from "react";

export const FilterContent = React.createContext({
  filter: "",
  setFilter: (newFilter: string) => {}
});
