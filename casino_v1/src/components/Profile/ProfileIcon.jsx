import React from "react";
import { Avatar } from "@mui/material";

const ProfileIcon = (props) => {
  return (
    <>
        <Avatar sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          marginRight: 5,
          cursor: 'pointer'
        }} src="/broken-image.jpg" {...props} />
    </>
  )
};

export default ProfileIcon;