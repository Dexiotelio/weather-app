import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function WeatherForm({ handleSubmit }) {
  return (
    <Form
      onSubmit={handleSubmit}
      className="rounded-3 w-25 p-2 shadow-lg position-absolute top-0 start-50 translate-middle-x form bg-secondary text-black border border-success-subtle text-white"
    >
      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          placeholder="City"
          size="sm"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlid="code">
        <Form.Label>Code</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          placeholder="Code"
          size="sm"
        />
      </Form.Group>
      <div className="d-grid gap-3">
        <Button type="submit" variant="primary" size="sm">
          Search
        </Button>
      </div>
    </Form>
  );
}
