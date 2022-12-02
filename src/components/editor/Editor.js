import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Col } from "react-bootstrap";
import { AiFillAppstore, AiOutlinePlusCircle } from "react-icons/ai";
import { HiPhotograph,HiPlay } from "react-icons/hi";
import { GiLoveSong ,GiSettingsKnobs} from "react-icons/gi";
import { MdOutlineTextFields,MdOutlineKeyboardVoice,MdOutlineContentCut ,MdArrowDropUp} from "react-icons/md";
import { MdStyle } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { TiArrowMinimise } from "react-icons/ti";
import { RiArrowGoBackFill,RiArrowGoForwardFill ,RiDeleteBinLine} from "react-icons/ri";
import Story from "../story/Story";
import Visual from "../visuals/Visual";
import Audio from "../audio/Audio";
import Text from "../text/Text";
import Style from "../style/Stlye";
import Brand from "../brand/Brand";
import Format from "../format/Format";

import { faL } from "@fortawesome/free-solid-svg-icons";
const Editor = () => {
  const [show, setShow] = useState("Story");
  // const [visuals,setVisuals] = useState(false)

  // const handleStory = () => {
  //   setIsStory(true)
  //   setVisuals(false)
  // }
  // const handleVisual = () => {
  //   setIsStory(false)
  //   setVisuals(true)
  // }

  return (
    <>
      <div className="row">
        <div
          className="col-sm-1"
          style={{
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => setShow("Story")}
            style={{
              display: "block",
              border: "none",
              margin: 10,
              flexDirection: "column",
              backgroundColor: "#000",
            }}
          >
            <AiFillAppstore style={{ width: 30, height: 30 }} />
            <h6>Story</h6>
          </Button>
          <Button
            onClick={() => setShow("Visual")}
            style={{
              display: "block",
              border: "none",
              margin: 10,
              flexDirection: "column",
              backgroundColor: "#000",
            }}
          >
            <HiPhotograph style={{ width: 30, height: 30 }} />
            <h6>Visuals</h6>
          </Button>
          <Button
            onClick={() => setShow("Audio")}
            style={{
              display: "block",
              border: "none",
              margin: 10,
              flexDirection: "column",
              backgroundColor: "#000",
            }}
          >
            <GiLoveSong style={{ width: 30, height: 30 }} />
            <h6>Audio</h6>
          </Button>
          <Button
            onClick={() => setShow("Text")}
            style={{
              display: "block",
              border: "none",
              margin: 10,
              flexDirection: "column",
              backgroundColor: "#000",
            }}
          >
            <MdOutlineTextFields style={{ width: 30, height: 30 }} />
            <h6>Text</h6>
          </Button>
          <Button
            onClick={() => setShow("Style")}
            style={{
              display: "block",
              border: "none",
              margin: 10,
              flexDirection: "column",
              backgroundColor: "#000",
            }}
          >
            <MdStyle style={{ width: 30, height: 30 }} />
            <h6>style</h6>
          </Button>
          <Button
            onClick={() => setShow("Brand")}
            style={{
              display: "block",
              border: "none",
              margin: 10,
              flexDirection: "column",
              backgroundColor: "#000",
            }}
          >
            <FaShoppingBag style={{ width: 30, height: 30 }} />
            <h6>Brand</h6>
          </Button>
          <Button
            onClick={() => setShow("Format")}
            style={{
              display: "block",
              border: "none",
              margin: 10,
              flexDirection: "column",
              backgroundColor: "#000",
            }}
          >
            <TiArrowMinimise style={{ width: 30, height: 30 }} />
            <h6>Format</h6>
          </Button>
        </div>
        {/* .............................side bar ......................................... */}

        <div className="col-sm-11" style={{}}>
          <div className="row">
            <div className="col-12" style={{}}>
              <div
                className="row"
                style={{
                  borderTop: " 1px solid lightgray",
                  // backgroundColor: "pink",
                  borderBottom:'1px solid lightgray',
                }}
              >
                <div className="col-md-6">
                  <p>Project </p>
                  <div>
                    <input
                      style={{
                        padding: 10,
                        width: 300,
                        border:'none',
                      }}
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginRight: 10,
                      marginTop: 30,
                    }}
                  >
                    <Button variant="light" style={{ padding: 5, borderRadius: 5 }}>
                      Previous
                    </Button>
                    <Button variant="light"
                      style={{ padding: 5, borderRadius: 5, marginLeft: 20 }}
                    >
                      Preview
                    </Button>
                    <Button
                    variant="light"
                      style={{ padding: 5, borderRadius: 5, marginLeft: 20 }}
                    >
                      Generate
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-sm-5 "
              style={{
                backgroundColor: "#DCDCDC",  
                boxShadow: "1px 2px 9px #fff",
              }}
            >
              {show === "Story" ? (
                <Story />
              ) : show === "Visual" ? (
                <Visual />
              ) : show === "Audio" ? (
                <Audio />
              ) : show === "Text" ? (
                <Text />
              ) : show === "Text" ? (
                <Text />
              ) : show === "Style" ? (
                <Style />
              ) : show === "Brand" ? (
                <Brand />
              ) : show === "Format" ? (
                <Format />
              ) : (
                <Story />
              )}
            </div>
            <div
              className="col-sm-7 "
              style={{  height: "74vh" }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    // backgroundColor: "yellow",
                    marginTop: 20,
                    marginLeft: 15,
                    marginRight: 15,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Button variant="light" style={{ margin: "auto",width:35, }}>
                    <AiOutlinePlusCircle style={{ width: 30, height: 30,color:'gray' ,marginLeft:-10}} />
                  </Button>
                  <div>
                    <iframe
                      responsive
                      style={{ width: 700, height: 400 }}
                      src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                      title="video"
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        // backgroundColor:'lightgray',
                        marginTop:-5,
                        alignContent:'center',
                        alignItems:'center'
                      }}
                    >
                      <div style={{display:'flex',flexDirection:'row'}}>
                      <Button variant="light">
                      <RiArrowGoBackFill style={{width:20,height:20}}/>
                        </Button>
                      
                        <Button variant="light">
                         <RiArrowGoForwardFill style={{width:20,height:20}}/>
                        </Button>
                      </div>
                      <div>
                      <Button variant="light" style={{display:'flex',flexDirection:'row',height:40}}>
                         <RiDeleteBinLine style={{width:15,height:15,marginTop:4}}/>
                        <p>Delete</p>
                        </Button>
                      </div>
                      <div>
                      <Button variant="light" style={{display:'flex',flexDirection:'row',height:40}}>
                         <HiPlay style={{width:20,height:20,marginTop:3}}/>
                        <p>Preview</p>
                        </Button>
                      </div>
                      <div>
                      <Button variant="light" style={{display:'flex',flexDirection:'row',height:40}}>
                         <MdOutlineContentCut style={{width:20,height:20,marginTop:3}}/>
                        <p>Trim</p>
                        </Button>
                      </div>
                      <div>
                      <Button variant="light" style={{display:'flex',flexDirection:'row',height:40}}>
                         <MdOutlineKeyboardVoice style={{width:20,height:20,marginTop:3}}/>
                        <p>Add Voice-over</p>
                         <MdArrowDropUp style={{width:20,height:20,marginTop:3}}/>
                        </Button>
                      </div>
                      <div>
                      <Button variant="light" style={{display:'flex',flexDirection:'row',height:40 ,}}>
                         <GiSettingsKnobs style={{width:20,height:20,marginTop:3}}/>
                        <p>Settings</p>
                         <MdArrowDropUp style={{width:20,height:20,marginTop:3}}/>
                        </Button>
                      </div>
                     
                    </div>
                  </div>
                  <Button variant="light" style={{ margin: "auto",width:35, }}>
                    <AiOutlinePlusCircle style={{ width: 30, height: 30,color:'gray',marginLeft:-10}} />
                  </Button>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:300,  marginTop:30}}>
                 <Button variant="light" style={{height:90,marginLeft:10}}>
                   <iframe
                      responsive
                      style={{ width: 100, height: 50, }}
                      src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                      title="video"
                    />
                    <p  style={{marginLeft:5}}>Intro scene</p>
                 </Button>
                 <Button variant="light" style={{height:90,marginLeft:10}}>
                   <iframe
                      responsive
                      style={{ width: 100, height: 50, }}
                      src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                      title="video"
                    />
                          <p style={{marginLeft:5}}>Scene 1</p>
                 </Button>
                 <Button variant="light" style={{height:90,marginLeft:10}}>
                   <iframe
                      responsive
                      style={{ width: 100, height: 50,}}
                      src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                      title="video"
                    />
                          <p style={{marginLeft:10}}>Outro Scene</p>
                 </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
