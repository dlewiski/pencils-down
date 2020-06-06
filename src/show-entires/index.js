import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import styles from "./styles";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";
import { onCreatePost } from "../graphql/subscriptions";

function ShowEntires(props) {
  const { classes } = props;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await API.graphql(graphqlOperation(listPosts))
        setPosts(postsData.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    }
    // Set up subscription so list ist updated everytime a user enters a message
    API.graphql(graphqlOperation(onCreatePost)).subscribe({
      next: postsData => {
        console.log("in subscription", postsData);
        setPosts(prevPosts => ([postsData.value.data.onCreatePost, ...prevPosts]));
      }
    });

    getPosts();
  }, []);

  return (
    <Grid className={classes.root}>
      Show user entires
      {posts.map((post) => (
        <Typography key={post.id}>
          Today I will {post.selectionText} for{" "}
          <span style={{color: 'red'}}>{post.numberOfHours}</span> hours in honor of all lives lost at
          the hands of racist violence, and in recognition of the built
          environment’s role in systemic racism.
        </Typography>
      ))}
    </Grid>
  );
}

export default withStyles(styles)(ShowEntires);
