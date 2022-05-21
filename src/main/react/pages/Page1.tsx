import './App.css';
import PageTemplate from "../components/PageTemplate"
import InputText from "../components/InputText"
import { Button, Row } from 'react-bootstrap';

function Page1() {
  return (
    <>
      <PageTemplate>

        <h3>Page 1. test.</h3>

        <Row className="mx-0">
          <InputText id="testId" text="Test Name 1" />
          <Button variant="success">Button #3</Button>
        </Row>


      </PageTemplate>
    </>
  );
}

export default Page1;
