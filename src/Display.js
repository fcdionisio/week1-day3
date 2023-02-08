import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material"

const Display = ({ userData }) => {
  const userList = userData.map((item) => {
    return (
      <React.Fragment key={item.email}>
        <Card sx={{
          maxWidth: 260, 
          backgroundColor: "#00d4ff", 
          float: "left",
          marginBottom: "12px", 
          marginRight: "12px"

        }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {item.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {item.dob}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {item.email}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {item.contactNumber}
            </Typography>            
            <Typography variant="body2" color="text.secondary">
              {item.aboutSelf}
            </Typography>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  });

  return <>{userList}</>;
};

export default Display;
