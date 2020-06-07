const styles = (theme) => ({
  root: {
    margin: theme.spacing(4, 0),
  },
  postText: {
    textAlign: "center",
    padding: theme.spacing(1, 0),
  },
  totalHours: {
    padding: theme.spacing(2, 0),
    textAlign: "center",
    fontSize: "1.75rem",
  },
  [theme.breakpoints.up("md")]: {
    postText: {
      textAlign: "center",
    },
  },
  [theme.breakpoints.up("lg")]: {
    postText: {
      textAlign: "justify",
      fontSize: theme.typography.pxToRem(16),
    },
  },
});

export default styles;