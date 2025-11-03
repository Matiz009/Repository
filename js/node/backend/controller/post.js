const Post = require('../model/post');

//Function to create a new post
async function createPost(req, res){
    const { title, content, id, author } = req.body;
  
   const newPost = new Post(
    {
        title,
        content,
        id,
        author
    }
   )
    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}


//function to get all posts
async function getPosts(req, res){
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
}

//function to get a specific post by ID
async function getPostById(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: 'Invalid post ID' });
    }
}

//function to delete a specific post by ID
async function deletePostById(req, res) {
    try {
        
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post+` with id ${req.params.id} deleted.`);
    } catch (error) {
        res.status(500).json({ error: 'Invalid post ID' });
    }
}

//function to delete a specific post by ID
async function updatePostById(req, res) {
    try {
        const { title, content, author } = req.body;
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        post.title = title || post.title;
        post.content = content || post.content;
        post.author = author || post.author;
        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: 'Invalid post ID' });
    }
}
module.exports={ createPost, getPosts, getPostById, deletePostById,updatePostById };