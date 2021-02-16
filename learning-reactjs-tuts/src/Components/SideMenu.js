import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  sidemenu: {
    background: "#001833",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: "320px",
    height: "100%",
    left: "0",
  },
});

export default function SideMenu() {
  const classes = useStyles();

  return <div className={classes.sidemenu}></div>;
}
