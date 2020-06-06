import React from 'react';
import { withStyles } from "@material-ui/styles";
import {Grid, Typography } from '@material-ui/core';
import styles from './styles';

function App(props) {
  const {classes} = props;
  return (
    <Grid className={classes.root}>
      <Typography variant="h1">
        PENCILS DOWN IN SOLIDARITY WITH THE MOVEMENT FOR BLACK LIVES
      </Typography>
      <Grid>
        <Typography>
          This document records an expression of solidarity with the Movement
          for Black Lives.
        </Typography>
        <Typography>
          We, an unaffiliated collection of architects, designers, theorists,
          teachers, students, and built environment workers add our voices to
          the widespread call for systemic change.
        </Typography>
      </Grid>
      <Grid>
        <Typography>
          In solidarity with the Movement for Black Lives,
        </Typography>
        <Typography>
          We, an unaffiliated collection of architects, designers, theorists,
          teachers, students, and built environment workers add our voices to
          the widespread call for systemic change.
        </Typography>
        <Typography className={"needsTab"}>
          and in honor of George Floyd,
        </Typography>
        <Typography className={"needsTab"}>
          and against racism and white supremacy,
        </Typography>
        <Typography>
          we will withhold labor throughout this week as much as is possible for
          each of us.
        </Typography>
        <Typography>
          We recognize that the ability to withhold labor is not a privilege
          held by all,{" "}
        </Typography>
        <Typography>yet our solidarity must not be only spoken.</Typography>
        <Grid>
          <Typography>
            May this withdrawal of labor produce a moment of silence in honor of
            all lives lost at the hands of racist violence.
          </Typography>
          <Typography>
            And in this silence, may we reflect on architecture’s complicity in
            the production of inequity.
          </Typography>
          <Typography>
            And may we, in as much as we can given our own precarious working
            conditions, take the moment to withdraw, reflect, and refuse to
            participate in systemic racism.
          </Typography>
        </Grid>
        <Grid>
          <Typography>
            We recognize that the change that is needed is systemic, and we do
            not yet have the tools to do the work that is needed now in our
            cities.{" "}
          </Typography>
          <Typography>
            We demand that our city budgets defund the militarization of the
            police and instead allocate public funds to the production of
            equitable cities and communities.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(App);
