import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

//redux 
import { connect } from 'react-redux';

//material ui
import {
    Container,
    InputBase,
    IconButton
} from '@material-ui/core';

//components
import Post from "./Post";
import CreatePost from './CreatePost';
import actions from "../../redux/main/actions";
import auth from '../../redux/auth/actions';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 15,
    maxWidth: '1120px',
   
  }
}))

const Posts = ({posts, filtered}) => {
  const classes = useStyles();
 

  return (
    <Container 
      classes={{
        root: classes.container
      }}
    >
    <CreatePost />
      {
        filtered && filtered.map((post, index) => <Post key={post.id} post={post} index={index} />)
      }
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.main.posts,
    filtered: state.main.filtered
  }
}

const mapDispatchToProps =  {
  updateVoteCount: actions.updateVoteCount,
  reloadData: actions.reloadData,

}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
