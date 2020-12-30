import React, { useContext } from "react";
import { FilterContent } from "../FilterContent";

export const HistoryList: React.FC = () => {
  const { history, setFilter } = useContext(FilterContent);

  const handleOnClick = (e: React.MouseEvent) => {
    setFilter(e.target.innerText);
  };

  return (
    <div id="historyList">
      {history.map((item) => {
        return (
          <div className="itemList" onClick={handleOnClick}>
            <h5>{item}</h5>
          </div>
        );
      })}
    </div>
  );
};
