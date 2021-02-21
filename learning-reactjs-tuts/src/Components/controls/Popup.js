import { Dialog } from "@material-ui/core";
import React from "react";

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  return <Dialog open={openPopup}></Dialog>;
}
