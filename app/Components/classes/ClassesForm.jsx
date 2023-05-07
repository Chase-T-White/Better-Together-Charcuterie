import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ClassesForm = () => {
  // const [numberOfAttendees, setNumberOfAttendees] = useState(0);

  return (
    <Form>
      <Form.Group>
        <Row>
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label># of Attendees</Form.Label>
        <div>
          <Form.Control type="number" />
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Send me event alerts" />
        <Form.Check type="checkbox" label="Sign up to our newsletter" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ClassesForm;
