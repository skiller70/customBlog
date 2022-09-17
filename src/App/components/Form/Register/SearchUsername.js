import React from "react";
import { useSelector } from "react-redux";
import BouncingDotsLoader from "../../ReuseComponents/BouncingDotsLoader";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
function SearchUsername(props) {
  const search_username = useSelector((state) => state.searchUser);

  return (
    <>
      {search_username.LOADING ? (
        <BouncingDotsLoader />
      ) : search_username.USERNAME === true ? (
        <CloseIcon color="secondary" />
      ) : search_username.USERNAME === false ? (
        <DoneIcon color="success" />
      ) : null}
    </>
  );
}

export default SearchUsername;
