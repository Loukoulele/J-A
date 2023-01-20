

import React, {Fragment} from 'react';


import { Button, Dialog, Grid, } from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const LocationMap = ({ maxWidth, button, buttonClass }) => {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    const styles = (theme) => ({
        root: {
          margin: 0,
          padding: theme.spacing(2),
        },
        closeButton: {
          position: 'absolute',
          right: theme.spacing(1),
          top: theme.spacing(1),
          color: theme.palette.grey[500],
        },
      });

    const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
          <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
              <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <i className="ti-close"></i>
              </IconButton>
            ) : null}
          </MuiDialogTitle>
        );
      });


    return (
        <Fragment>
            <Button
                className={`btn ${buttonClass}`}
                onClick={handleClickOpen}>
                {button}
                See Location
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Plan d'accès
                </DialogTitle>
                <Grid className="modalBody modal-body">
                    <Grid className="modalBody modal-body">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.672304312897!2d1.6785473160828324!3d48.67350952165986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e41e53d7fd6991%3A0xad17a372d872143a!2sDomaine%20de%20la%20Butte%20Ronde!5e0!3m2!1sen!2sch!4v1674172822589!5m2!1sen!2sch"></iframe>
                    </Grid>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default LocationMap


