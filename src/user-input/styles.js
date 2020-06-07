const styles = (theme) => ({
  root: {
    margin: theme.spacing(4, 0),
  },
  formRoot: {
    display: "flex",
    flexDirection: "column",
  },
  inputAndTextGroup: {
    padding: theme.spacing(3, 0, 5),
    fontSize: '1.75rem',
    color: 'red',
  },
  inputRoot: {
    margin: theme.spacing(0, 2),
    fontSize: '1.75rem',
  },
  submitButton: {
    width: '150px',
    background: 'black',
    color: 'white',
    alignSelf: 'center',
  }
});

export default styles;