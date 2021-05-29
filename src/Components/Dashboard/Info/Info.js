import React, { useEffect, useState } from "react";
//images -------------------------------------------------------------------------------
import Elon_Musk from "../../../Static/Elon_Musk.jpeg";
import Gwynne_Shotwell from "../../../Static/Gwynne_Shotwell.jpeg";
//CSS -----------------------------------------------------------------------------------
import "./Info.css";

const Info = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function getData() {
      let res = await fetch(`https://api.spacexdata.com/v3/info`);
      let data = await res.json();
      setInfo(data);
    }
    getData();
  }, []);

  return (
    <div className="info_container">
      {info && (
        <div className="flex_center_column">
          <h1>About</h1>
          <h2>{info.name}</h2>
          <h2>{info.founder}</h2>
          <p>{info.summary}</p>
        </div>
      )}
      <div className="flex_center">
        <div style={{ padding: "1em" }} className="flex_center_column">
          <img style={{ height: "20em" }} src={Elon_Musk} />
          <h2>{info.ceo}</h2>
          <h3>CEO/CTO</h3>
        </div>
        <div style={{ padding: "1em" }} className="flex_center_column">
          <img style={{ height: "20em" }} src={Gwynne_Shotwell} />
          <h2>{info.coo}</h2>
          <h3>COO</h3>
        </div>
      </div>
    </div>
  );
};

export default Info;
