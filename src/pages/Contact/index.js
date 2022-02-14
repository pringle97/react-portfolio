// import "../../components/homestyle/home1.css";
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Contact = () => {
  return (
    <body>
    <h1>This is the Contact Page</h1>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
          />
        </FormGroup></Form>
    </body>
  )
}

export default Contact