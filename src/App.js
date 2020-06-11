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
          fight against racist policies and practices by withholding labor. We
          recognize that the ability to withhold labor is not a privilege held
          by all, yet we cannot ignore that our solidarity must be mobilized by
          action.
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
      <Grid className={classes.textBlock}>
        <Typography>
          Instructions: If you are willing and able to withhold labor, type in
          the amount of hours in the blank below. When you hit the 'pledge'
          button, your pledge will populate the page. As pledges are added, this
          website will serve as a record and will visualize this collective
          action. Each day, you can pledge as many hours as you'd like, and if
          you would like to withhold labor for more than one day, you can
          resubmit. Lastly,{" "}
          <Link
            className={classes.link}
            href="https://docs.google.com/document/d/1dp6CIxYnOXUywy4Y7zY3ypoDQETYQcsX7D3T6LjMhV0/edit"
            target="_blank"
            rel="noopener"
          >
            take action
          </Link>{" "}
          during your pledged time. The website will be up as long as the
          protests are ongoing.
        </Typography>
      </Grid>
      <Grid className={classes.textBlock}>
        <Typography>
          *For accountability purposes, entries over 12 hours have been taken
          down, as the pledge specifically asks for commitments to be made one
          day at a time. If you are pledging more than one day, please enter a
          new pledge each day. If you pledged on behalf of others, please reach
          out to them and submit pledges separately. If the pledges with
          unusually high numbers were made in earnest, you are invited to return
          and resubmit.
        </Typography>
      </Grid>
      <UserInput />
      <ShowEntries />
    </Grid>
  );
}

export default withStyles(styles)(App);
