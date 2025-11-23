import { Card, Button, Modal, Form } from "react-bootstrap";
import Menubar from "./Menubar";
import { Server } from "./Server.js";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [currentPost, setCurrentPost] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${Server}/posts`);
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);

  // CREATE
  const handleCreate = async () => {
    try {
      const res = await axios.post(`${Server}/create-post`, formData);

      // Correct: push backend-created object (with _id)
      setPosts([...posts, res.data]);

      setShowCreate(false);
      setFormData({ title: "", content: "", author: "" });
    } catch (err) {
      console.error(err);
    }
  };

  // UPDATE
  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `${Server}/posts/${currentPost._id}`,
        formData
      );

      // Replace updated post
      setPosts(posts.map(p => (p._id === currentPost._id ? res.data : p)));

      setShowUpdate(false);
      setCurrentPost(null);
    } catch (err) {
      console.error(err);
    }
  };

  // DELETE
  const confirmDelete = async () => {
    try {
      await axios.delete(`${Server}/posts/${currentPost._id}`);

      // Remove from state
      setPosts(posts.filter(p => p._id !== currentPost._id));

      setShowDelete(false);
      setCurrentPost(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Menubar title="Home" color="green" />

      <div className="d-flex justify-content-center mt-3">
        <Button onClick={() => setShowCreate(true)}>+ Create Post</Button>
      </div>

      <ol className="mt-3">
        {posts.map((post, index) => (
          <li key={index} style={{ listStyle: "none", marginBottom: "1rem" }}>
            <Card style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Author: {post.author}
                </Card.Subtitle>
                <Card.Text>{post.content}</Card.Text>

                <div className="d-flex gap-2">
                  <Button
                    variant="warning"
                    onClick={() => {
                      setCurrentPost(post);
                      setFormData({
                        title: post.title,
                        content: post.content,
                        author: post.author,
                      });
                      setShowUpdate(true);
                    }}
                  >
                    Update
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => {
                      setCurrentPost(post);
                      setShowDelete(true);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ol>

      {/* CREATE MODAL */}
      <Modal show={showCreate} onHide={() => setShowCreate(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Author</Form.Label>
              <Form.Control
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setShowCreate(false)}>Cancel</Button>
          <Button variant="success" onClick={handleCreate}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* UPDATE MODAL */}
      <Modal show={showUpdate} onHide={() => setShowUpdate(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Author</Form.Label>
              <Form.Control
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setShowUpdate(false)}>Cancel</Button>
          <Button variant="warning" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      {/* DELETE CONFIRM */}
      <Modal show={showDelete} onHide={() => setShowDelete(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Post?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you wanna delete:
          <br />
          <strong>{currentPost?.title}</strong> ?
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setShowDelete(false)}>Cancel</Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
