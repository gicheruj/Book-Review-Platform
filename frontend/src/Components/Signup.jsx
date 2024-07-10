import React, { useState } from "react";
import { Form, Button, Modal, Container, Row, Col } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";

const schema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username must not exceed 50 characters"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email address"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must not exceed 50 characters"),
});

const SignUp = () => {
  const {
    control,
    handleSubmit: handleSubmitForm,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    console.log("User Details:", data);
    setModalMessage("User registered successfully!");
    setShowModal(true);
    reset();
    navigate("/login"); // Redirect to login page after successful registration
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2 className="text-center">Sign Up</h2>
          <Form onSubmit={handleSubmitForm(handleSubmit)}>
            <Controller
              name="username"
              control={control}
              render={({ field, fieldState }) => (
                <Form.Group controlId="signupUsername" className="mb-3">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="text"
                    {...field}
                    isInvalid={!!fieldState.error}
                  />
                  {fieldState.error && (
                    <Form.Control.Feedback type="invalid">
                      {fieldState.error.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Form.Group controlId="signupEmail" className="mb-3">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    {...field}
                    isInvalid={!!fieldState.error}
                  />
                  {fieldState.error && (
                    <Form.Control.Feedback type="invalid">
                      {fieldState.error.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Form.Group controlId="signupPassword" className="mb-3">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    {...field}
                    isInvalid={!!fieldState.error}
                  />
                  {fieldState.error && (
                    <Form.Control.Feedback type="invalid">
                      {fieldState.error.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              )}
            />
            <Button variant="primary" type="submit" className="w-100">
              Sign Up
            </Button>
            <p className="mt-3 text-center">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Form>

          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>Registration Status</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalMessage}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
