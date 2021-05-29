import React from 'react';
import {Button, TabContent} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Form } from 'react-bootstrap';
import "./admn-add.css";
import PostAddIcon from '@material-ui/icons/PostAdd';
import QueueIcon from '@material-ui/icons/Queue';
import AForm from './admn-form';
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    Button:{
        backgroundColor:"green"
    }
}));

export default function AnimatedModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>

            <Button className="float-right" variant="success" size="sm" onClick={handleOpen}>
                <div>
               <PostAddIcon/>
               </div>
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 className="centre" >Add Announcement</h2>
                        <hr/>
                        <p>
                        <AForm/>
                        </p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}