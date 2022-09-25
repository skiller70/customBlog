import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Avatar, IconButton, Typography } from "@mui/material";
const CommentCard = (props) => {

  const {comments,date,author} = props;
  return (
    <>
      <Card sx={{marginBottom:1}} >
        <CardHeader sx={{marginBottom:-2.5}}
          avatar={<Avatar></Avatar>}
          action={
            <div>
              <IconButton size="small">
                <EditIcon fontSize="string" />
              </IconButton>
              <IconButton size="small">
                <DeleteIcon fontSize="string" />
              </IconButton>
            </div>
          }
          title={author}
          subheader={date}
        ></CardHeader>
<CardContent>
        <Typography variant="body2" color="text.secondary">
         {comments}
        </Typography>
      </CardContent>
      </Card>
  
    </>
  );
};

export default CommentCard;
