import React from "react";

export class History {
  history: string[];

  constructor() {
    this.history = [];
  }

  public push(entry: string) {
    this.history.push(entry);
  }
}

export const FilterContent = React.createContext({
  filter: "",
  history: [] as string[],
  setFilter: (newFilter: string) => {}
});
