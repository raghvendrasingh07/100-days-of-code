import React from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../Components/PageHeader";
import { PeopleOutlineTwoTone } from "@material-ui/icons";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
}));

export default function Employee() {
  const classes = useStyles();
  return (
    <>
      <PageHeader
        title="Employee Form"
        subTitle="Form Design with validation"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
}
