import React, { useState, useEffect } from "react";
//material ui ----------------------------------------------------------------------------
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const LaunchInfo = ({ launch }) => {
  const [cores, setCores] = useState([]);
  const [payloads, setPayloads] = useState([]);

  useEffect(() => {
    if (launch.rocket.first_stage.cores) {
      setCores(launch.rocket.first_stage.cores);
    }
    if (launch.rocket.second_stage.payloads) {
      setPayloads(launch.rocket.second_stage.payloads);
    }
  }, [launch]);

  return (
    <Accordion className="launch_main">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div
          className={launch.launch_success ? "launch_success" : "launch_reject"}
        >
          <h2>{launch.launch_success ? "Success" : "Reject"}</h2>
        </div>
        <div className="launches_info_mission">
          <div className="launch_mission">
            <h1>{launch.mission_name}</h1>
            <h3>{launch.launch_year}</h3>
            <p>{launch.details}</p>
          </div>
          <div className="launch_site">
            <h3>{launch.launch_site.site_name}</h3>
            <h3>{launch.rocket.rocket_name}</h3>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              marginBottom: "2em",
            }}
          >
            <iframe
              width="620"
              height="345"
              src={"https://www.youtube.com/embed/" + launch.links.youtube_id}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "space-around",
                width: "40em",
              }}
            >
              <div style={{ width: "100%", marginBottom: "1em" }}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>First Stage</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <Typography variant="h4">
                      {launch.rocket.rocket_name}
                    </Typography>
                    <Typography variant="h6">
                      Rocket Type: {launch.rocket.rocket_type}
                    </Typography>
                    {cores.map((core, i) => (
                      <Typography variant="h6" key={i}>
                        Core Serial: {core.core_serial}
                      </Typography>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ width: "100%" }}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Second Stage</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {payloads.map((payload) => {
                      return (
                        <div
                          key={payload.payload_id}
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Typography variant="h4">
                            {payload.payload_id}
                          </Typography>
                          <Typography variant="h6">
                            Customers: {payload.customers.join(", ")}
                          </Typography>
                          {payload.nationality && (
                            <Typography variant="h6">
                              Nationality: {payload.nationality}
                            </Typography>
                          )}
                          {payload.manufacturer && (
                            <Typography variant="h6">
                              Manufacturer: {payload.manufacturer}
                            </Typography>
                          )}
                        </div>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default LaunchInfo;
