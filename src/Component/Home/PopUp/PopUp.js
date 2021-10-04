import React from "react";
import "./PopUp.css";
import CloseIcon from "@mui/icons-material/Close";
import Extra from "../2-main-body/Extra";
import { useVarContext } from "../../../ContextApi/createConText";

const PopUp = () => {
  const global = useVarContext();
  return (
    <div
      className="video_popUp"
      style={global.popUp ? { display: "block" } : null}
      onClick={global.handleClose}
    >
      <div className="set_video">
        <div className="video_setting">
          <div className="video_iconC">
            <CloseIcon titleAccess="close" onClick={global.handleClose} />
          </div>
          {global.popUp ? <Extra /> : null}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
