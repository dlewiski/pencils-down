const styles = (theme) => ({
  root: {
    paddingBottom: theme.spacing(4),
  },
  formRoot: {
    display: "flex",
    flexDirection: "column",
  },
  inputAndTextGroup: {
    padding: theme.spacing(3, 0, 5),
    fontSize: "1.75rem",
    color: "red",
  },
  inputRoot: {
    margin: theme.spacing(0, 2),
    fontSize: "1.75rem",
    width: "65px",
    "& .MuiInput-underline:before": {
      borderBottom: "1px solid red",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "1px solid red",
    },
  },
  inputInput: {
    textAlign: "center",
  },
  inputUnderline: {
    color: "red",
    "& .MuiInput-underline:before": {
      borderBottom: "1px solid red",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
  },
  submitButton: {
    width: "150px",
    backgroundColor: "black",
    color: "white",
    alignSelf: "center",
    "&:hover": {
      backgroundColor: 'grey',
    },
  },
});

export default styles;