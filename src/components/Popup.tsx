import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SignIn from "./SignIn";
// import SignUp from "./SignUp";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      //   border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4, 3),
      outline: "none",
    },
  })
);

interface PopupProps {}

const Popup: React.FC<PopupProps> = () => {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={false}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
          <div className={classes.paper}>
            <SignIn />
            {/* <SignUp /> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Popup;
