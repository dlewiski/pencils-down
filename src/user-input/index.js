import React, {useState} from "react";
import { withStyles } from "@material-ui/styles";
import { Grid, Input, Button } from "@material-ui/core";
import styles from "./styles";
import { API, graphqlOperation } from "aws-amplify";
import { createPost } from "../graphql/mutations";

function UserInput(props) {
  const { classes } = props;
  const [fieldValues, setFieldValues] = useState({
    selectionText: '',
    numberOfHours: '',
  });

  const handleNumberInput = (event => {
    event.persist();

    //check if empty value is passed
    if (event.target.value === ''){
      console.log('empty entry')
      return setFieldValues((prevFieldValues) => ({
        ...prevFieldValues,
        numberOfHours: event.target.value,
      }));
    }

    // Check to make sure no letters are present
    if (/[a-z]/i.test(event.target.value)) {
      return console.log("not a number");
    }

    // limit how many digits can be entered
    if (event.target.value.length > 4) {
      return console.log("number is to long");
    }

    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      numberOfHours: event.target.value,
    }));
  })

  const submitForm = async event => {
    event.preventDefault();
    let hoursToSubmit = 0;
    if (parseFloat(fieldValues.numberOfHours)) {
      hoursToSubmit = parseFloat(fieldValues.numberOfHours);
    } else {
      console.log("entry could not be parsed to float")
      return
    }
    try {
      await API.graphql(
        graphqlOperation(createPost, {
          input: { numberOfHours: hoursToSubmit, selectionText: "" },
        })
        );
        setFieldValues((prevFieldValues) => ({
        ...prevFieldValues,
        numberOfHours: '',
      }));
    } catch (e) {
      console.log("error on form submit", e);
    }
  }

  return (
    <Grid className={classes.root}>
      <form className={classes.formRoot} onSubmit={submitForm}>
        <Grid className={classes.inputAndTextGroup}>
          Today, I will withhold my labor for
          <Input
            value={fieldValues.numberOfHours}
            onChange={handleNumberInput}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
              underline: classes.inputUnderline,
            }}
          ></Input>
          hours in solidarity with the Movement for Black Lives and in
          recognition of architecture’s complicity in systemic racism.
        </Grid>
        <Button
          type="submit"
          className={classes.submitButton}
        >
          PLEDGE
        </Button>
      </form>
    </Grid>
  );
}

export default withStyles(styles)(UserInput);
