const express = require('express');
const connectToDatabase = require('./connect');
const Post = require('./model/post');
const { createPost } = require('./controller/post');
const app = express();
const PORT = 5000;
const server = `/api/v1`;

app.use(express.json());

// Connect MongoDB
connectToDatabase();

// Create a new post
app.post(`${server}/create-post`, createPost);

// Get all posts (from MongoDB)
app.get(`${server}/posts`, async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

// Get a specific post by ID
app.get(`${server}/posts/:id`, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: 'Invalid post ID' });
    }
});

// Delete a specific post by ID
app.delete(`${server}/posts/:id`, async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) return res.status(404).json({ message: 'Post not found' });
        res.json({ message: `Post with id ${req.params.id} deleted.` });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete post' });
    }
});

// Placeholder research endpoint
app.get(`${server}/research`, (req, res) => {
    res.send('<h1>Research endpoint placeholder</h1>');
});

app.get('/', (req, res) => {
	res.send('<h1>Welcome to the Post API</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
