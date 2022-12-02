import React, { Component } from "react";
import { Button } from "react-bootstrap";

import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
class Textareademo extends Component {
  constructor() {
    super();
    this.state = {
      textAreaValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            // backgroundColor: "red",
            // width: "70%",
            marginLeft: "13%",
            marginRight: "13%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4>Script Editor</h4>
          <div
            style={{
              // backgroundColor: "yellowgreen",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              {/* <div
                style={{
                  display: "flex",
                }}
              >
                <p>Estimated Time</p>
                <BiTimeFive
                  style={{ width: 20, height: 20, marginLeft: 5, marginTop: 3 }}
                />
              </div> */}

              <div style={{ justifyContent: "center" , alignItems: "center",}}>
                <Button  style={{backgroundColor:'pink',color:'#000' ,borderColor:'white' ,marginTop:5,marginLeft:10, padding:7,borderRadius:10}}>Cancel</Button>
                <Link to={"/Template"} ><Button style={{backgroundColor:'pink',color:'#000' ,borderColor:'white' ,marginTop:5,marginLeft:10, padding:7,borderRadius:10}}>Proceed</Button></Link> 
              </div>
            </div>
          </div>
        </div>
       
        <div
          style={{
            display: "flex",
            // alignItems: "center",
            borderRadius:10,
            margin:80,
            justifyContent: "center",
            // height: "50vh",
            backgroundColor:'#fff',
            flexDirection:'column',
            boxShadow: '1px 2px 9px #F4AAB9',
            margin: '4em',
            padding: '1em',
          
          }}
        >
          {/* <label>Enter value : </label> */}

          <input type="text"  style={{height:50, border:0, }} placeholder="Enter video name" />
          <textarea
          style={{border:0,backgroundColor:'#fff'}}
          placeholder="Start Typing here script"
            value={this.state.textAreaValue}
            onChange={this.handleChange}
            rows={15}
            cols={150}
          />
        </div>``
      </>
    );
  }
}

export default Textareademo;


