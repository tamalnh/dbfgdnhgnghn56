import React, { Component } from 'react'

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="row py-5">
                <div className="col-sm-6 offset-sm-3" >
                    <form className="form-group">
                        <input className="form-control mb-2" placeholder="title"  />
                        <textarea className="form-control mb-2" placeholder="Write something" rows="5"></textarea>
                        <button  className="btn btn-dark float-right">Post</button>
                    </form>
                </div> 
            </div>
        );
    }
}

export default AddPost;