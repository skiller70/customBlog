import InputController from "../Form/InputController";
import Formsy from "formsy-react";
import React from "react";
import { makeStyles } from "@mui/styles";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useBlogForm } from "../Hook/useBlogForm";
import { Stack } from "@mui/system";
import InputImage from "../Form/InputImage";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(1.5),
      width: "90%",
    },
  },
}));
function CreateBlog(props) {
  const classes = useStyles();

  const { onValid, onInvalid, onValidSubmit, canSubmit } = useBlogForm();

  return (
    <Formsy
      className={classes.root}
      onValid={onValid}
      onValidSubmit={onValidSubmit}
      onInvalid={onInvalid}
    >
      <Grid container>
        <Grid xs={12} md={10} item>
          {" "}
          <InputController name="title" label="Tile" required></InputController>
        </Grid>
        <Grid xs={12} md={10} item>
          {" "}
          <InputController
            name="subject"
            label="Subject"
            required
          ></InputController> 
        </Grid>
        <Grid xs={12} md={10} item>
          <Stack
            sx={{ paddingLeft: "6%" }}
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Button
              variant="contained"
              startIcon={<AddPhotoAlternateOutlinedIcon />}
              component="label"
            >
              Upload
              <InputImage name="blogPost" required/>
            </Button>
          </Stack>
        </Grid>

        <Grid xs={12} md={10} item>
          {" "}
          <InputController
            id="standard-multiline-static"
            multiline
            rows="4"
            variant="standard"
            name="content"
            label="Content"
            required
          ></InputController>
        </Grid>
      </Grid>

      <Grid xs={12} md={10} item>
        <Stack
          sx={{ paddingLeft: "40%" }}
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <Button type="submit" disabled={!canSubmit} variant="contained">
            Post
          </Button>
        </Stack>
      </Grid>
    </Formsy>
  );
}

export default CreateBlog;
