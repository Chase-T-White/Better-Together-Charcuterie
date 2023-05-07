import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const MenuForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Board Size</Form.Label>
        <Form.Select>
          <option>Individual</option>
          <option>Graze 2 people</option>
          <option>Bazic 4-5 people</option>
          <option>Better 10-12 people</option>
          <option>Big 15-18 people</option>
          <option>Party 50 people</option>
          <option>Graze</option>
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label>Board Style</Form.Label>
        <Form.Select>
          <option>As Is</option>
          <option>Sweets</option>
          <option>Fruit</option>
          <option>Meats</option>
          <option>Vegan</option>
          <option>Seafood</option>
        </Form.Select>
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

export default MenuForm;
