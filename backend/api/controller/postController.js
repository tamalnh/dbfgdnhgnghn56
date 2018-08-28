const Post = require('./../model/postModel')

// getAllPosts
const getAllPosts = (req, res, next) => {
    Post.find()
        .then(result => {
            if(result){
                res.status(200).json({
                message: `${result.length} posts found`,
                posts: result
                })
            }else{
                res.status(404).json({
                    errMsg: 'No data Found'
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                errMsg: 'Error Occured'
            })
        })
}

// createPost 
const createPost = (req, res, next) => {
    console.log(req.body)
    const date = new Date().getTime()
    const post = new Post({
        title : req.body.title,
        description : req.body.description,
        reaction : req.body.reaction,
        comments : req.body.comments,
        timestamp : date
    })

    post.save()
        .then(data => {
            if(data){
                res.status(200).json({
                    message: data
                })
            }else{
                res.status(500).json({ 
                    errMsg: 'Data should not be empty'
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ 
                errMsg: 'Error Occured'
            })
        })

}

// getSinglePost
const getSinglePost = (req, res, next) => {
    const id = req.params.id
    Post.findById(id)
        .then(result => {
            if(result){
                res.status(200).json({ 
                    message: 'Post found',
                    post: result
                })
            }else{
                res.status(404).json({ 
                    errMsg: 'Post not found!'
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                errMsg: 'Error Occured'
            })
        })
}

// updatePost
const updatePost = (req, res, next) => {
    const id = req.params.id
    Post.findByIdAndUpdate(id, {$set: req.body})
        .then(result => {
            if(result){
                res.status(200).json({
                    message: 'Post updated',
                    post: result
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                errMsg: 'Error Occured'
            })
        })
}

// deletePost
const deletePost = (req, res, next) => {
    const id = req.params.id
    Post.findByIdAndDelete(id)
        .then(result => {
            res.status(200).json({
                message: 'Post deleted',
                posts: result
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                errMsg: 'Error Occured'
            })
        });
}

module.exports = {
    getAllPosts,
    createPost,
    getSinglePost,
    updatePost,
    deletePost
}