import React from 'react';
import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';

const useStyles = createUseStyles({
  dialogs: {
    display: 'grid',
    gridTemplateColumns: '2fr 10fr'
  },
})

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {  
  return (
    <div> {props.message} </div>
  );
}

const Dialogs = (props) => {
  const classes = useStyles()

  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );
  let messagesElements = props.state.messages.map(m => <Message message={m.message} /> );

  return (
    <div className={classes.dialogs}>
      {/* <h2>Dialogs</h2> */}
      <div className={classes.dialogItems}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        { messagesElements }
      </div>
    </div>
  );
}

export default Dialogs;