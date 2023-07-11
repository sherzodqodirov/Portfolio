import React from 'react';
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import NavBar from "./NavBar";
import {useSelector} from "react-redux";
import NavHeader from "./NavHeader";

const ChatLayout = () => {

    const {btn} = useSelector(state => state.btnState)

    return (
        <>

            <CoreBox btn={btn}>
                <LeftBox>
                    <NavBar/>
                </LeftBox>
                <RightBox>
                    <NavHeader/>
                    <AreaChat>
                        <Outlet/>
                    </AreaChat>
                </RightBox>
            </CoreBox>
        </>
    );
};

const AreaChat = styled.div`
  width: 100%;
  height: 100%;
`

const LeftBox = styled.div`
  background-color: #0d1520;
  overflow-y: auto;
  overflow-x: hidden;
`
const RightBox = styled.div`
  display: grid;
  grid-template-rows: 0.12fr 1fr;
  height: 100vh;
  background-color: rgb(14 22 33);
`

const CoreBox = styled.div`
  display: grid;
  grid-template-columns: ${props => props.btn === "open" ? "0.3fr 1fr" : "0.05fr 1fr"};
`


export default ChatLayout;
