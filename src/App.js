import React from 'react';
import { withStyles } from "@material-ui/styles";
import {Grid, Typography, Link } from '@material-ui/core';
import UserInput from './user-input';
import ShowEntries from './show-entires';
import styles from './styles';
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports-test";
Amplify.configure(awsconfig);

function App(props) {
  const {classes} = props;
  return (
    <Grid className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        PENCILS DOWN PROTEST
      </Typography>
      <Typography variant="h2" className={classes.subTitle}>
        IN SOLIDARITY WITH THE MOVEMENT FOR BLACK LIVES
      </Typography>
      <Grid className={classes.textBlock}>
        <Typography>
          This protest is an expression of solidarity with{" "}
          <Link
          className={classes.link}
            href="https://blacklivesmatter.com/"
            target="_blank"
            rel="noopener"
          >
            Black Lives Matter
          </Link>{" "}
          and the{" "}
          <Link
          className={classes.link}
            href="https://m4bl.org/week-of-action/"
            target="_blank"
            rel="noopener"
          >
            current uprising against systemic racism
          </Link>
          . We—an unaffiliated group of architects, designers, theorists,
          urbanists, teachers, students, and built environment workers—join the
          fight against racist policies and practices by withholding labor. We recognize that the ability to withhold labor is not a privilege held by all, yet we cannot ignore
          that our solidarity must be mobilized by action.
        </Typography>
      </Grid>
      <Grid className={classes.textBlock}>
        <Typography>
          This moment demands a direct confrontation with architecture and
          design’s participation in systemic racism. For too long, our cities
          have been shaped by racist practices, from redlining to urban renewal
          to gentrification. Furthermore, as professionals involved in the
          making of cities, we know all too well that city budgets
          disproportionately fund police departments rather than provide
          communities with housing, transit, social services, and public
          education. It is time to confront this complicity directly and demand
          change.
        </Typography>
      </Grid>
      <Grid className={classes.textBlock}>
        <Typography>
          We see the act of withholding labor as a form of protest, one that
          echoes and supports the events happening in the streets. With pencils
          down, we honor all lives lost at the hands of racist violence. With
          pencils down, we reflect on architecture’s complicity in the
          production of inequality. And with pencils down, we demand that cities
          across the country reallocate police funding to the production of
          equitable cities and communities.
        </Typography>
      </Grid>
      <UserInput />
      <ShowEntries />
    </Grid>
  );
}

export default withStyles(styles)(App);
