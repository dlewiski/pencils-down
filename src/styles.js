const styles = (theme) => ({
  root: {
    padding: theme.spacing(5, 6, 5),
  },
  title: {
    fontSize: theme.typography.pxToRem(70),
    fontWeight: "bold",
    letterSpacing: "8px",
  },
  subTitle: {
    fontSize: theme.typography.pxToRem(38),
    paddingBottom: "20px",
  },
  textBlock: {
    padding: theme.spacing(1.5, 0),
  },
});

export default styles;