import React, {  useState } from "react";
import { Typography, Avatar, IconButton, Collapse } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import Skeleton from "@mui/material/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useLikePost } from "../api/blogPostOperation";
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment"
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiCardActions-root": {},
  },
}));

function BlogCard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState();
  const { mutate,  } = useLikePost();
  const PROFILE = useSelector((state) => state.userProfile.PROFILE);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  const { img, loading, author, postId, like,date,username } = props;

  const alreadyLike = like.find((item) => item.includes(PROFILE.id));

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar sx={{ backgroundColor: "red" }} aria-label="recipe">
              R
            </Avatar>
          )
        }
        action={
          loading ? null : author._id === PROFILE.id ? (
            <div>
              <IconButton
                onClick={() => {
                  dispatch({
                    type: "setConfirmDelete",
                    payload: { isOpen: true, postId },
                  });
                }}
              >
                <DeleteIcon />
              </IconButton>

              <IconButton>
                <EditIcon />
              </IconButton>
            </div>
          ) : null
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            username
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            moment(date).fromNow()
          )
        }
      />

      {loading ? (
        <Skeleton sx={{ height: 194 }} animation="wave" variant="rectangular" />
      ) : img === undefined ? (
        <Skeleton
          sx={{ height: 194 }}
          width={1100}
          animation="wave"
          variant="rectangular"
        />
      ) : (
        <CardMedia
        onDoubleClick={
          ()=>{
            console.log("double clicked")
          }
        }
          width="100%"
          component="img"
          height="194"
          image={img || "/static/images/cards/paella.jpg"}
          alt="Paella dish"
        />
      )}

      {loading ? (
        <React.Fragment>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </React.Fragment>
      ) : (
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      )}

      <CardActions disableSpacing>
        {alreadyLike !== undefined ? (
          <IconButton
            onClick={() => {
              if (PROFILE.id ) {
                mutate({ postId, author:PROFILE.id, remove: "true" });
              } else {
                dispatch({ type: "setLoginPop", payload: { isOpen: true } });
              }
            }}
            sx={{ marginLeft: "15px" }}
            aria-label="add to favorites"
          >
            
            {PROFILE.id?<FavoriteIcon color="secondary" />:<FavoriteBorderOutlinedIcon />}
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              if (PROFILE.id) {
                mutate({ postId, author:PROFILE.id, remove: "false" });
              } else {
                dispatch({ type: "setLoginPop", payload: { isOpen: true } });
              }
            }}
            sx={{ marginLeft: "15px" }}
            aria-label="add to favorites"
          >
            {PROFILE.id?<FavoriteBorderOutlinedIcon />:<FavoriteBorderOutlinedIcon />}
            
          </IconButton>
        )}
        {like.length}
        <IconButton>
          <ModeCommentOutlinedIcon />
        </IconButton>
        2
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ marginLeft: "auto" }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default BlogCard;
