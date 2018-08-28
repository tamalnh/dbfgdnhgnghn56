import React, { Component } from 'react'

class postDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedPost: {
                ...this.props.selectedPost
            },
            isComment: false
         };
    }

    commeRenderHandler = () => {
        this.setState({
            isComment:true
        })
    }

    renderComments = () => {
        if(this.state.isComment === true){
            if(this.state.selectedPost.comments){
                return(
                    <div className="comments-meta w-100">
                        <div className="bg-secondary text-white py-1 px-1 mb-2"> {this.state.selectedPost.comments} </div> 

                        <input className="form-control " placeholder="write comment..." /> 
                    </div>
                )
            }
        }
    }

    render() {
        // console.log(this.state.selectedPost)
        return (
            <div className="row">
                <div className="row">
                    <div className="col-sm-12">
                    <button className="btn float-right" style={{color: '#F15E29'}} 
                            onClick={this.props.postDetailsHandler}>
                            <i class="fas fa-window-close"></i> </button>

                    <div className="bg-secondary py-4 px-2 text-white">
                        <h1>{this.state.selectedPost.title}</h1>
                        <p className="lead">{this.state.selectedPost.description}</p>
                        <span className="float-right d-inline-block text-primary bg-light py-1 px-1 mb-1" style={{cursor: 'pointer'}} onClick={this.commeRenderHandler}>comments</span>
                    </div>
                    </div>
                </div>
 
                
                <div className="row">
                    <div className="col-sm-12">
                    {this.renderComments()}
                        <div className="comments-body">
                            
                        </div>
                    </div>
                </div>
                     
            </div>
        );
    }
}

export default postDetails;