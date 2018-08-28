import React, { Component } from 'react'; 
import AddPost from './posts/addPost'
import Posts from './posts/posts'
import Axios from 'axios';

const BASE_URL = 'http://localhost:3030/api/posts';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      posts: [],
      selectedPost: null,
      isEdit: false,
      editPost: null,
      addPost: false
    }
  }

  componentDidMount(){
    Axios.get(BASE_URL)
          .then(res => {
            this.setState({
              posts: res.data.posts
            })
          })
          .catch(err => {
            console.log(err)
          })
  }

  // selectedPostHandler
  selectedPostHandler = (selectedPost) => {
    console.log(selectedPost)
    if(selectedPost){
      this.setState({
        selectedPost: selectedPost,
        isEdit: false

      })
    }
  }

// editPostHandler
  editPostHandler = (value, post) => {
    
    this.setState({
      isEdit: value,
      editPost: post,
      selectedPost: null,
    })
  }

  updatePostHandler = (updatedPost) => {
    // console.log(updatePost)
    let index = this.state.posts.findIndex(post => {
      return post._id === updatedPost._id
    })

    let newPosts = [...this.state.posts]
        newPosts[index] = updatedPost
        
    this.setState({
      posts: newPosts
    })
     
  }

  postReactionHandler = (likedPost) => {
    let index = this.state.posts.findIndex(post => {
      return post._id === likedPost._id
    })

    let newPosts = [...this.state.posts]
 

    if(newPosts[index].reaction === false){
      newPosts[index].reaction = true 
    }else{
      newPosts[index].reaction = false
    }
 

    this.setState({
      posts: newPosts
    })


  }

  //postDetailsHandler
  postDetailsHandler = () => {
    this.setState({
      selectedPost: null
    })
  }

  addPostHandler = () => {
    
  }



  render() {
    console.log(this.state.posts)
    return (
      <div className="App">
        <div className="container-fluid">
          <AddPost />
            <Posts 
                  posts={this.state.posts} 
                  selectedPostHandler={this.selectedPostHandler} 
                  selectedPost={this.state.selectedPost}
                  isEdit= {this.state.isEdit}
                  editPost = {this.state.editPost} 
                  updatePostHandler = {this.updatePostHandler}
                  editPostHandler={this.editPostHandler}
                  postReactionHandler={this.postReactionHandler}
                  postDetailsHandler={this.postDetailsHandler}/>
        </div>
      </div>
    );
  }
}

export default App;
