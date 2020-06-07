const styles = (theme) => ({
  root: {
    padding: theme.spacing(5, 3.75, 5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "justify",
  },
  title: {
    fontSize: '12vw',
    fontWeight: "bold",
    letterSpacing: "8px",
    textAlign: "center",
  },
  subTitle: {
    fontSize: theme.typography.pxToRem(35),
    paddingBottom: "20px",
    textAlign: "center",
  },
  textBlock: {
    padding: theme.spacing(1.5, 0),
  },
  link: {
    color: "black",
    textDecoration: "underline",
  },

  [theme.breakpoints.up("md")]: {
    title: {
      fontSize: '10vw',
      fontWeight: "bold",
      letterSpacing: "8px",
    },
    subTitle: {
      fontSize: theme.typography.pxToRem(38),
      paddingBottom: "20px",
    },
  },
  [theme.breakpoints.up("lg")]: {
    title: {
      fontSize: "6.59vw",
      fontWeight: "bold",
      letterSpacing: "8px",
      textAlign: "justify",
    },
    subTitle: {
      fontSize: "3.6vw",
      paddingBottom: "20px",
    },
  },
});

export default styles;