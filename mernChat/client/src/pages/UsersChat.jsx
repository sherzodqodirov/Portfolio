import React, {useState} from 'react';
import styled from "styled-components";
import Box from "@mui/material/Box";
import {IconButton} from "@mui/material";
import {ImAttachment} from "react-icons/im";
import {IoSend} from "react-icons/io5";
import InputEmoji from "react-input-emoji";

const UsersChat = () => {

    const myDataId = "1"

    const data = [
        {
            userId: '2',
            message: "Salom qalaysan ",
            hour: "19:26"
        },
        {
            userId: '1',
            message: "Zo'r ",
            hour: "19:27"
        },
    ]
    const [text, setText] = useState("");

    function handleOnEnter(text) {
        console.log("enter:", text);
    }

    function handleOnClick() {
        console.log("click:", text);
        setText("")
    }

    return (
        <Container>
            <ChatBox>
                {data.map((item,key)=>(
                    <Box key={key} sx={{
                        display: "flex",
                        justifyContent: `${item.userId==myDataId && "end" || "start"}`,
                    }}>
                        <ItemMessage bgColor={item.userId==myDataId}>
                            <p>{item.message}</p>
                            <span>{item.hour}</span>
                        </ItemMessage>
                    </Box>
                ))}


            </ChatBox>

            <BoxInput>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    <IconButton
                        sx={{
                            width: "100%",
                            height: "100%",
                            border: 'none',
                        }}
                        component="label"
                    >
                        <ImAttachment size={30} style={{color: "#6a7580"}}/>
                        <input
                            type="file"
                            hidden
                        />

                    </IconButton>

                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {/* <InputM type="text" placeholder="to write a message..." />*/}
                    <InputEmoji
                        borderRadius={0}
                        value={text}
                        onChange={setText}
                        cleanOnEnter
                        shouldReturn
                        onEnter={handleOnEnter}
                        placeholder="to write a message..."
                    />
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <IconButton aria-label="attachment" size="large" onClick={handleOnClick}>
                        <IoSend style={{color: "rgb(82 136 193)"}} fontSize="inherit"/>
                    </IconButton>
                </Box>

            </BoxInput>

        </Container>
    );
};

const ItemMessage = styled.div`
  position: relative;
  width: 200px;
  min-height: 30px;
  margin: 15px 10px;
  padding: 10px 20px 10px 10px;
  border-radius: 5px;
  background-color: ${props => props.bgColor && "rgb(43 82 120)" || "#182533"};
  color: #fff;

  p {

  }

  span {
    color: #548aa9;
    font-size: 12px;
    position: absolute;
    right: 7px;
    bottom: 1px;
  }
`
const ChatBox = styled.div`
  width: 100%;
  height: 80vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
`
const BoxInput = styled.div`
  position: absolute;
  bottom: 2px;
  width: 100%;
  height: 50px;
  background-color: #17212b;
  display: grid;
  grid-template-columns: 0.05fr 1fr 0.1fr;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export default UsersChat;
