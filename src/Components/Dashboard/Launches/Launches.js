import React, { useEffect, useState } from "react";
//Redux --------------------------------------------------------------------------------
import { connect } from "react-redux";
import { fetchData } from "../../../Redux/Action/Dashboard/Launches/LaunchAction";
//Component --------------------------------------------------------------------------------
import SignUpToday from "../../Alerts/SignUpToday";
import LaunchInfo from "./LaunchInfo";
//material ui ----------------------------------------------------------------------------
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
//CSS -----------------------------------------------------------------------------------
import "./Launches.css";

function Launches({ launches, fetchData, isPremium }) {
  const [launch, setLaunch] = useState();
  const [limit, setLimit] = useState(0);
  const [shopBuyPremium, setShowBuyPremium] = useState(false);
  useEffect(() => {
    fetchData(limit);
  }, [limit]);

  const changeLimit = (type) => {
    if (type == "prev") {
      if (isPremium) {
        if (limit != 0) setLimit(limit - 5);
      } else {
        setShowBuyPremium(true);
        setTimeout(() => {
          setShowBuyPremium(false);
        }, 3000);
      }
    } else {
      if (isPremium) {
        setLimit(limit + 5);
      } else {
        setShowBuyPremium(true);
        setTimeout(() => {
          setShowBuyPremium(false);
        }, 3000);
      }
    }
  };

  return (
    <div className="launches_container">
      {launches && (
        <div className="launches_list">
          <div className="flex_center">
            <div
              className="each_launch_item arrow_nav"
              style={{ width: "3em" }}
              onClick={() => changeLimit("prev")}
            >
              <ChevronLeftIcon fontSize="large" />
            </div>
          </div>
          {launches &&
            launches.map((launch) => {
              return (
                <div
                  key={launch.flight_number}
                  className={
                    launch.launch_success
                      ? "each_launch_item mission_hover"
                      : "each_launch_item mission_hover"
                  }
                  onClick={() => setLaunch(launch)}
                >
                  <h4>{launch.mission_name}</h4>
                </div>
              );
            })}
          <div className="flex_center">
            <div
              className="each_launch_item arrow_nav"
              style={{ width: "3em" }}
              onClick={() => changeLimit("next")}
            >
              <ChevronRightIcon fontSize="large" />
            </div>
          </div>
        </div>
      )}
      {launch ? (
        <LaunchInfo launch={launch} />
      ) : (
        <div className="flex_center_column" style={{ color: "white" }}>
          <h3>Learn more about the Launches</h3>
          <h4>Select any of the Launches above</h4>
        </div>
      )}
      {shopBuyPremium && <SignUpToday />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    launches: state.LaunchReducer.launches,
    isPremium: state.UserReducer.isPremium,
  };
};

export default connect(mapStateToProps, { fetchData })(Launches);
