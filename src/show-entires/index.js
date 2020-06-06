import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import styles from "./styles";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";

function ShowEntires(props) {
  const { classes } = props;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await API.graphql(graphqlOperation(listPosts))
        setPosts(postsData.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    }
    getPosts();
  }, [])

  console.log(posts)

  return (
    <Grid className={classes.root}>
    Show user entires
    {posts.map(post => (
      <Typography>
      {post.selectionText}
      </Typography>
    ))}
    </Grid>
  );
}

export default withStyles(styles)(ShowEntires);
