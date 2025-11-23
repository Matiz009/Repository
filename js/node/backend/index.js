const express = require('express');
const cors = require('cors'); 
const connectToDatabase = require('./services/connect');
const Post = require('./model/post');
const { createPost, getPosts, getPostById, deletePostById,updatePostById } = require('./controller/post');

const app = express();
const PORT = 5000;
const server = `/api/v1`;


// This tells the browser that requests from other origins (like your frontend) are allowed.
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Connect MongoDB
connectToDatabase();

// Create a new post
app.post(`${server}/create-post`, createPost);

// Get all posts (from MongoDB)
app.get(`${server}/posts`, getPosts);

// Get a specific post by ID
app.get(`${server}/posts/:id`, getPostById);

// Delete a specific post by ID
app.delete(`${server}/posts/:id`, deletePostById);

//update post by ID - placeholder
app.put(`${server}/posts/:id`, updatePostById);

// Placeholder research endpoint
app.get(`${server}/research`, (req, res) => {
    res.send('<h1>Research endpoint placeholder</h1>');
});

app.get(`${server}`, (req, res) => {
    res.send('<h1>Welcome to the Post API</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}${server}`);
});
