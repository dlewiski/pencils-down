import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import styles from "./styles";

function ShowEntires(props) {
  const { classes } = props;
  return (
    <Grid className={classes.root}>
    Show user entires
    </Grid>
  );
}

export default withStyles(styles)(ShowEntires);
