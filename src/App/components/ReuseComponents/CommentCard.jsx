import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Avatar, IconButton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
const CommentCard = (props) => {
  const { comments, date, author } = props;
  const PROFILE = useSelector((state) => state.userProfile.PROFILE);
  const POP = useSelector((state) => state.popup);
  console.log(POP);
  const isAuthor = PROFILE.id === author._id;
  const isBlogAuthor = POP.GET_COMMENTS_OF_BLOG_AUTHOR === PROFILE.id;
  console.log(isAuthor);
  return (
    <>
      <Card sx={{ marginBottom: 1 }}>
        <CardHeader
          sx={{ marginBottom: -2.5 }}
          avatar={<Avatar></Avatar>}
          action={
            isAuthor ? (
              <div>
                <IconButton size="small">
                  <EditIcon fontSize="string" />
                </IconButton>
                <IconButton size="small">
                  <DeleteIcon fontSize="string" />
                </IconButton>
              </div>
            ) : isBlogAuthor ? (
              <IconButton size="small">
                <DeleteIcon fontSize="string" />
              </IconButton>
            ) : null
          }
          title={author.username}
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
