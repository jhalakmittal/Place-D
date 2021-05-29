// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
// import "./admn-add.css";
// import {Button} from 'react-bootstrap'
// import Ccontent from "./com-add-content";
// const useStyles = makeStyles(theme => ({
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width:'400px,'
//     },
//     paper: {
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
//     Button:{
//         backgroundColor:"green"
//     }
// }));

// export default function ComAdd() {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };
//     return (
//         <div>

//             <button className="btn-success btn-large"  onClick={handleOpen}>
//                <PostAddIcon size="lg"/>
//             </button>

//             <Modal
//                 aria-labelledby="transition-modal-title"
//                 aria-describedby="transition-modal-description"
//                 className={classes.modal}
//                 open={open}
//                 onClose={handleClose}
//                 closeAfterTransition
//                 BackdropComponent={Backdrop}
//                 BackdropProps={{
//                     timeout: 500,
//                 }}
//             >
//                 <Fade in={open}>
//                     <div className={classes.paper}>
//                         <h2 >Add Company Details</h2>
//                         <hr/>
//                         <p>
//                         <Ccontent/>
//                         </p>
//                     </div>
//                 </Fade>
//             </Modal>
//         </div>
//     );
// }