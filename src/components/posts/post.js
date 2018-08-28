import React, { Component } from 'react'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            post: {
                ...this.props.post
            }
         };
    }





    render() {
        // console.log(this.props)
        return (
            <div className="card">
                <div className="card-body">
                    <span 
                        className="float-right ml-2" 
                        style={{cursor: 'pointer'}}
                        onClick={() => {this.props.editPostHandler(true, this.state.post)}}
                        >

                        <i className="fas fa-edit"></i>
                    </span>

                    <span 
                            className="float-right" style={{cursor: 'pointer', color: this.state.post.reaction === true ?  'red' : 'black' }}  
                            onClick={() => {this.props.postReactionHandler(this.state.post)}}>

                        <i className="fas fa-heart"></i>
                    </span>
                    <h5 className="card-title">{this.state.post.title}</h5>
                    <p className="card-text">{this.state.post.description}</p>
                    <button 
                        className="btn btn-primary"
                        onClick = {() => {this.props.selectedPost(this.state.post)}}
                        >View Post</button>
                </div>
            </div>
        );
    }
}

export default Post;