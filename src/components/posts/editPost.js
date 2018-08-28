import React, { Component } from 'react';
import Axios from 'axios'
const URL = 'http://localhost:3030/api/posts'
class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            editPost: {
                ...this.props.editPost
            }
         };
    }


    formSubmitHandler = (e) => {
        e.preventDefault()

        let newPost = {
            title: this.state.editPost.title,
            description: this.state.editPost.description,
        }

        Axios.patch(`${URL}/${this.state.editPost._id}`, newPost)

        this.props.updatePostHandler(this.state.editPost)
        this.props.editPostHandler(false, null)
    }

    postChangeHandler = (event) => {
        let updatedPost = this.state.editPost;
        let name = event.target.name
        updatedPost[name] = event.target.value

        this.setState({
            editPost: updatedPost
        })

        
        

    }

    render() {
        // console.log(this.state.editPost)
        return (
            <form className="form-group py-5" onSubmit={this.formSubmitHandler}>
                <input 
                    className="form-control mb-2" 
                    name="title"
                    defaultValue={this.state.editPost.title}
                    onChange={this.postChangeHandler} />
                <textarea  
                        className="form-control mb-2" 
                        name= "description"
                        defaultValue={this.state.editPost.description}
                        onChange={this.postChangeHandler}
                ></textarea>

                <button className="btn btn-primary">Save</button>
            </form>
        );
    }
}

export default EditPost;