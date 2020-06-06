import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import styles from "./styles";
import { API } from "aws-amplify";

function UserInput(props) {
  const { classes } = props;
  return (
    <Grid className={classes.root}>
    User input component
    </Grid>
  );
}

export default withStyles(styles)(UserInput);
