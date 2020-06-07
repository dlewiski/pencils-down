import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import styles from "./styles";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";
import { onCreatePost } from "../graphql/subscriptions";
import { deletePost } from "../graphql/mutations";

function ShowEntires(props) {
  const { classes } = props;
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const postsData = await API.graphql(graphqlOperation(listPosts));
      setPosts(postsData.data.listPosts.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // Set up subscription so list ist updated everytime a user enters hours
    API.graphql(graphqlOperation(onCreatePost)).subscribe({
      next: postsData => {
        setPosts(prevPosts => ([postsData.value.data.onCreatePost, ...prevPosts]));
      }
    });

    getPosts();
  }, []);

  // const handleDelete = async postId => {
  //   try {
  //     await API.graphql(graphqlOperation(deletePost, {input: {id: postId}}));
  //     getPosts();
  //   } catch (e) {
  //     console.log('delete error', e)
  //   }
  // };

  return (
    <Grid className={classes.root}>
      {posts.map((post) => (
        <Grid key={post.id}>
          <Typography>
            Today, I will withhold my labor for{" "}
            <span style={{ color: "red" }}>{post.numberOfHours}</span> hours in
            solidarity with the Movement for Black Lives and in recognition of
            architecture’s complicity in systemic racism.
          </Typography>
          {/* <Button onClick={() => handleDelete(post.id)}>Delete Post</Button> */}
        </Grid>
      ))}
    </Grid>
  );
}

export default withStyles(styles)(ShowEntires);
