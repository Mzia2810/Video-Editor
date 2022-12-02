import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { TfiSearch } from "react-icons/tfi";

const Story = () => {
  return (
    <div style={{  marginTop: 10 }}>
      <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1">
          <TfiSearch style={{ width: 30, height: 30 }} />
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Search"
        />
      </InputGroup>

      <Button variant="light" style={{ width:'100%',height:70,marginBottom:10,textAlign:'start'}}>
        <h6>Intro Scene</h6>
      </Button>

      <Button variant="light" style={{ width:'100%',height:70,marginBottom:10,textAlign:'start'}}>
        <h6>Scene 1</h6>
        <p style={{marginTop:20}}>Project script here</p>
      </Button>

      <Button variant="light" style={{ width:'100%',height:70,marginBottom:10,textAlign:'start'}}>
        <h6>Outro Scene</h6>
      </Button>
    </div>
  );
};

export default Story;
