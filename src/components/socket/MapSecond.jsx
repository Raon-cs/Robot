import React, { useState } from "react";
// import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";
// import SevereColdTwoToneIcon from "@mui/icons-material/SevereColdTwoTone";
import SmartToyTwoToneIcon from "@mui/icons-material/SmartToyTwoTone";
import { TbAirConditioningDisabled, TbAirConditioning } from "react-icons/tb";
import { Icon } from "@iconify/react";
import { PiTelevisionSimpleBold, PiTelevisionSimpleFill } from "react-icons/pi";
import style from "./mapsecond.module.css";
import Box from "@mui/material/Box";

function MapSecond({ xn, yn, status }) {
  console.log(xn, yn, status, "확인");

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "85%",
  };

  const iconStyle = {
    position: "absolute",
    top: "6.8339%",
    right: "39.0984%",
  };
  const icon2Style = {
    position: "absolute",
    top: "5.445%",
    right: "90.333%",
  };
  const purifier = {
    position: "absolute",
    top: "68.25%",
    right: "87.11%",
  };
  const purifier2 = {
    position: "absolute",
    top: "72.4944%",
    right: "39.6904%",
  };
  const tv = {
    position: "absolute",
    top: "42.4022%",
    right: "89.6209%",
  };
  const tv2 = {
    position: "absolute",
    top: "41.832%",
    right: "41.3652%",
  };
  const robot = {
    position: "absolute",
    top: `${yn - 6}%`,
    right: `${xn}%`,
  };
  const onIconSize = "18px";
  const offIconSize = "18px";
  const robotSize = "27px";
  return (
    <div style={containerStyle}>
      <img
        src={process.env.PUBLIC_URL + "/map/2pages.png"}
        alt={"title"}
        style={{
          width: "100%",
          height: "100%",
          margin: "auto",
          borderRadius:'1rem'
        }}
      />
      <div style={iconStyle}>
        {status[1] ? (
          <TbAirConditioning style={{ fontSize: offIconSize }} />
        ) : (
          <TbAirConditioningDisabled style={{ fontSize: onIconSize }} />
        )}
      </div>
      <div style={icon2Style}>
        {status[0] ? (
          <TbAirConditioning style={{ fontSize: offIconSize }} />
        ) : (
          <TbAirConditioningDisabled style={{ fontSize: onIconSize }} />
        )}
      </div>
      {xn && yn ? (
        <div style={robot}>
          <SmartToyTwoToneIcon style={{ fontSize: robotSize }} />
        </div>
      ) : (
        <></>
      )}

      <div style={purifier2}>
        {status[1] ? (
          <Icon icon="mdi:air-purifier" style={{ fontSize: onIconSize }} />
        ) : (
          <Icon icon="mdi:air-purifier-off" style={{ fontSize: onIconSize }} />
        )}
      </div>
      <div style={purifier}>
        {status[0] ? (
          <Icon icon="mdi:air-purifier" style={{ fontSize: onIconSize }} />
        ) : (
          <Icon icon="mdi:air-purifier-off" style={{ fontSize: onIconSize }} />
        )}
      </div>
      <div style={tv2}>
        {status[1] ? (
          <PiTelevisionSimpleBold style={{ fontSize: offIconSize }} />
        ) : (
          <PiTelevisionSimpleFill style={{ fontSize: onIconSize }} />
        )}
      </div>
      <div style={tv}>
        {status[0] ? (
          <PiTelevisionSimpleBold style={{ fontSize: offIconSize }} />
        ) : (
          <PiTelevisionSimpleFill style={{ fontSize: onIconSize }} />
        )}
      </div>
      <Box className={style.doorbox} />
      <Icon icon="mdi:garbage" className={style.garbage} />
    </div>
  );
}

export default MapSecond;
