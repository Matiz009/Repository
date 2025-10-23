const Post = require('../model/post');


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

module.exports={ createPost };