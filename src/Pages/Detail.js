import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Detail = ({ theme, setTheme }) => {
  const [data, setData] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch(
      `https://restcountries.com/v2/name/${name
        .split("-")
        .join(" ")}?fullText=true`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      {data.length && (
        <>
          <div
            className={` patent-card  ${theme === "light" ? "light" : "dark"}`}
          >
            <Link to={"/"}>
              <button className="detail-btn">Back</button>
            </Link>

            <section className="parent-section-detail">
              <div className="img-detail">
                <img
                  alt="country"
                  className="imgs-detail "
                  src={data[0].flags.svg}
                />
              </div>
              <div className="detail-detail">
                <h4 className="title">{data[0].name}</h4>
                <section className="more-detail-about-country">
                  <div>
                    <p>native Name : {data[0].nativeName}</p>
                    <p>population : {data[0].population}</p>
                    <p>Region : {data[0].region}</p>
                    <p>Sub Region : {data[0].subregion} </p>
                    <p>Capital : {data[0].capital}</p>
                  </div>
                  <div className="right">
                    <p>Top Level Domain : {data[0].topLevelDomain}</p>
                    <p>Currencies :</p>
                    <p>Language :</p>
                  </div>
                </section>
                <p>
                  Border Countries :{" "}
                  {data[0].borders?.map((item) => {
                    return <span className=" p-1">{item}</span>;
                  })}
                </p>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
