import React, {useState} from "react";
import { withStyles } from "@material-ui/styles";
import { Grid, Input, Button, Typography } from "@material-ui/core";
import styles from "./styles";
import { API, graphqlOperation } from "aws-amplify";
import { createPost } from "../graphql/mutations";

function UserInput(props) {
  const { classes } = props;
  const [fieldValues, setFieldValues] = useState({
    selectionText: "",
    numberOfHours: null,
  });

  const handleTextInput = (event => {
    event.persist();

    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      selectionText: event.target.value,
    }));
  })

  const handleNumberInput = (event => {
    event.persist();
    
    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      numberOfHours: parseFloat(event.target.value),
    }));
  })

  const validateForm = () => {

  }

  const submitForm = async event => {
    console.log("in submit form")
    event.preventDefault();
    try {
      await API.graphql(graphqlOperation(createPost, { input: fieldValues }));
      console.log("form submitted")
    } catch (e) {
      console.log("error on form submit", e);
    }
  }

  return (
    <Grid className={classes.root}>
      <form className={classes.formRoot} onSubmit={submitForm}>
        <Grid className={classes.inputAndTextGroup}>
          Today, I will withhold my labor for
          <Input name="hours" onChange={handleNumberInput} className={classes.inputRoot}></Input>
          hours in solidarity with the Movement for Black Lives and in
          recognition of architecture’s complicity in systemic racism.
        </Grid>
        <Button type="submit" className={classes.submitButton}>PLEDGE</Button>
      </form>
    </Grid>
  );
}

export default withStyles(styles)(UserInput);
