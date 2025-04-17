import MainScreen from "../../components/MainScreen";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listnote, noteDeleteAction } from "../../actions/noteAction";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const MyNotes = ({ search }) => {
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.noteList);
  const userLogin = useSelector((state) => state.userLogin);
  const noteCreate = useSelector((state) => state.noteCreate);
  const noteUpdate = useSelector((state) => state.noteUpdate);
  const deleteNote = useSelector((state) => state.noteDelete);

  const { userInfo } = userLogin;
  const { success: successCreate } = noteCreate;
  const { loading, notes, error } = noteList;
  const { success: successUpdate } = noteUpdate;
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = deleteNote;

  const DeleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(noteDeleteAction(id));
    }
  };

  const history = useHistory();

  useEffect(() => {
    dispatch(listnote());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    successCreate,
    userInfo,
    successUpdate,
    successDelete,
  ]);

  return (
    <MainScreen title={`Wellcome Back ${userInfo.name}..`}>
      <Link to="createnote" style={{ textDecoration: "none" }}>
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {loading && <Loading />}
      {loadingDelete && <Loading></Loading>}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {notes
        ?.reverse()
        .filter((filt) =>
          filt.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((note) => (
          <Accordion defaultActiveKey={["0"]} key={note._id}>
            <Accordion.Item eventkey="0">
              <Card style={{ margin: 10 }}>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    <Accordion.Button as={Card.Text} variant="link">
                      {note.title}
                    </Accordion.Button>
                  </span>
                  <div>
                    <Button href={`/note/${note._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => DeleteHandler(note._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Collapse>
                  <Card.Body>
                    <h4>
                      <Badge bg="success" text="light">
                        Category - {note.category}{" "}
                      </Badge>
                    </h4>

                    <blockquote className="blockquote mb-0">
                      <p>{note.content}</p>
                      <footer className="blockquote-footer">
                        Creater on -{" "}
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion.Item>
          </Accordion>
        ))}
    </MainScreen>
  );
};

export default MyNotes;
