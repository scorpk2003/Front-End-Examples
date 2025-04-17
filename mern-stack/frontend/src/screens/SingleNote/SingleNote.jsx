import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import { noteDeleteAction, updateNoteAction } from "../../actions/noteAction";
import {
  useHistory,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { Card, Form, CardBody, CardHeader, Button } from "react-bootstrap";
import ReactMarkdow from "react-markdown";
import axios from "axios";

const SingleNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const match = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { loading, error } = noteUpdate;

  const notedelete = useSelector((state) => state.noteDelete);
  const { loading: loadingDelete, error: errorDelete } = notedelete;

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/notes/${match.params.id}`);
      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setDate(data.updateAt);
    };
    fetching();
  }, [match.params.id, date]);

  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure?")) {
      dispatch(noteDeleteAction(id));
    }
    history.push("/mynotes");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !content || !category) return;
    dispatch(updateNoteAction(match.params.id, title, content, category));
    resetHandler();
    history.push("/mynotes");
  };
  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };
  return (
    <MainScreen title="Update Note">
      <Card>
        <Card.Header>Update Note</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {loadingDelete && <Loading></Loading>}
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                value={title}
                placeholder="Enter this title"
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={content}
                placeholder="Enter this content"
                onChange={(e) => setContent(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {content && (
              <Card>
                <CardHeader>Note Preview</CardHeader>
                <CardBody>
                  <ReactMarkdow>{content}</ReactMarkdow>
                </CardBody>
              </Card>
            )}
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="category"
                value={category}
                placeholder="Enter this category"
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button type="submit" variant="primary">
              {" "}
              Edit Note
            </Button>
            <Button className="mx-2" onClick={resetHandler} variant="danger">
              Reset Field
            </Button>
            <Button
              className="mx-2"
              onClick={() => deleteHandler(match.params.id)}
              variant="danger"
            >
              Delete Note
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
};

export default SingleNote;
