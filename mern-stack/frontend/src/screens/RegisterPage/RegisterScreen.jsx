import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

import MainScreen from "../../components/MainScreen";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [pic, setPic] = useState(
    "https://www.pinterest.com/pin/37154765670354492/"
  );
  const [message, setMessage] = useState("");
  const [picMessage, setPicMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please Select Image ");
    }
    setPicMessage(null);
    if (pics.type === "image") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "roadsidecoder");
      fetch("https://api.cloudinary.com/v1_1/roadsidecoder/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json)
        .then((data) => {
          setPic(data.url.toString());
        });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      setMessage("Password not Match");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);
        const { data } = await axios.post(
          "/api/users",
          { name, password, email, pic },
          config
        );
        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <MainScreen title="Register">
      <div className="LoginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger" children={message} />}
        {loading && <Loading />}
        <Form className="mb-3" onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="name"
              placeholder="enter-name"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPass(e.target.value)}
              value={confirmPass}
            />
          </Form.Group>
          {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
          )}
          <Form.Group className="mb-3" controlId="pic">
            <Form.Label>Profile Pictures</Form.Label>
            <Form.Control
              controlid="custom-file"
              type="file"
              label="Upload Profile Picture"
              value={picMessage}
              onChange={(e) => postDetails(e.target.files[0])}
            ></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </MainScreen>
  );
};

export default RegisterScreen;
