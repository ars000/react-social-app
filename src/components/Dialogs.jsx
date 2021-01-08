import React from 'react';
import { createUseStyles } from 'react-jss';
import avatar from './../assets/img/user-avatar.png';

const useStyles = createUseStyles({
  dialogs: {
    display: 'grid',
    gridTemplateColumns: '2fr 10fr'
  },
  dialog: {

  },
  dialogItem: {
    
  }
})

const Dialogs = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.dialogs}>
      {/* <h2>Dialogs</h2> */}
      <div className={classes.dialog}>        
        <div className={classes.dialogItem}>Arsen</div>
        <div className={classes.dialogItem}>Andrey</div>
        <div className={classes.dialogItem}>Dima</div>
        <div className={classes.dialogItem}>Mischa</div>
        <div className={classes.dialogItem}>Sveta</div>
      </div>
      <div className={classes.message}>
        <div className={classes.messageItem}>message 1</div>
        <div className={classes.messageItem}>message 2</div>
        <div className={classes.messageItem}>message 3</div>
        <div className={classes.messageItem}>message 4</div>
        <div className={classes.messageItem}>message 5</div>
      </div>
    </div>
  );
}

export default Dialogs;