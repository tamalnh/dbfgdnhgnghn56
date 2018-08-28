import React from 'react';
import Post from './post';
import PostDetails from './postDetails';
import EditPost from './editPost'
const Posts = (props) => {
    // console.log(props) 
        if(props.selectedPost !== null && props.isEdit !== true){
            return(
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card-columns">
                            {props.posts.map(post => {
                                return <Post key={post._id} post={post} selectedPost={props.selectedPostHandler} editPostHandler={props.editPostHandler} postReactionHandler={props.postReactionHandler}/>
                            })}         
                        </div>
                    </div>

                    <div className="col-sm-5 offset-sm-1">
                        <PostDetails selectedPost={props.selectedPost} postDetailsHandler={props.postDetailsHandler}/>
                    </div>
                </div>
            )
        }else if (props.isEdit === true && props.selectedPost === null) {
            
            return(
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card-columns">
                            {props.posts.map(post => {
                                return <Post 
                                            key={post._id} 
                                            post={post} 
                                            selectedPost={props.selectedPostHandler} 
                                            editPostHandler={props.editPostHandler} 
                                            postReactionHandler={props.postReactionHandler}/>
                            })}         
                        </div>
                    </div>

                    <div className="col-sm-5 offset-sm-1">
                        <EditPost editPost={props.editPost} updatePostHandler={props.updatePostHandler} editPostHandler={props.editPostHandler}/>
                    </div>
                </div>
            )


        } else{
            return(
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card-columns">
                            {props.posts.map(post => {
                                return <Post key={post._id} post={post} selectedPost={props.selectedPostHandler} editPostHandler={props.editPostHandler} postReactionHandler={props.postReactionHandler}/>
                            })}
                        </div>
                    </div>
                </div>
            )
        }
}

export default Posts;