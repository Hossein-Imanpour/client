const FilterData = ({theme , setTheme}) => {
  return (
    <>
      <main className="main">
      
        <input
          type={"search"}
          className="input"
          placeholder="Search For A Country"
          
        />
        <select className="select">
          <option>Filter By Region</option>
          <option>Africa</option>
          <option>America</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </main>
    </>
  );
};

export default FilterData;
