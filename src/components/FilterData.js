import { useState, useEffect } from "react";

const FilterData = ({ theme, setTheme, names, setCopy }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const regions = ["Africa", "Asia", "America", "Europe", "Oceania"];

  useEffect(() => {
    const dummyData = names
      ?.filter((item) => {
        if (!selectValue) {
          return true;
        } else {
          return item.region.includes(selectValue);
        }
      })
      .filter((item) => {
        return item.name
          .toLowerCase()
          .includes(inputValue.toLowerCase().trim());
      });
    setCopy(dummyData);
  }, [selectValue, inputValue, setCopy]);

  return (
    <>
      <main className="main">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type={"search"}
          className="input"
          placeholder="Search For A Country"
        />
        <select
          className="select"
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value={""}>Filter By Region</option>
          {regions?.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
      </main>
    </>
  );
};

export default FilterData;
