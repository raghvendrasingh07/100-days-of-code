import { makeStyles } from "@material-ui/core";
import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  sidemenu: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
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
