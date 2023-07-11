import React,{useState} from 'react';
import styled from "styled-components";
import Box from "@mui/material/Box";
import {IconButton, Menu, MenuItem, Tooltip} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {BsThreeDotsVertical} from "react-icons/bs";
import {useNavigate} from "react-router-dom";

const NavHeader = () => {
     const navigate=useNavigate()
    const [anchorElUser, setAnchorElUser] = useState(null);

    const settings = ['Profile','Logout'];
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = (setting) => {
        setAnchorElUser(null);
        setting=="Profile" ? navigate("/login") : navigate("/login")
    };
    return (
        <Container>

            <Box sx={{
                height: '100%',
                display: 'flex',
                justifyContent:'space-between',
                alignItems: 'center',
                padding: '0 15px'
            }}>
                <Box>
                    <UserBox>
                        <Avatar src={"/broken-image.jpg"}/>
                         <UserTitile>
                             Kimdir
                        </UserTitile>

                    </UserBox>
                </Box>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <BsThreeDotsVertical size={30} color={'#607484'}/>
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={()=>handleCloseUserMenu(setting)}>
                            <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </Container>
    );
};
const UserTitile = styled.div`
  color: #FFFFFF;
`

const UserBox = styled.div`
  padding: 10px;
  margin-top: 15px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`
const Container=styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(23 33 43);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

`
export default NavHeader;
