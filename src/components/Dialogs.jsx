import React from 'react';
import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';
import avatar from './../assets/img/user-avatar.png';

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
    <div> {props.massage} </div>
  );
}

const Dialogs = (props) => {
  const classes = useStyles()

  let dialogsData = [
    {id: 1, name: 'Arsen'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Dima'},
    {id: 4, name: 'Mischa'},
    {id: 5, name: 'Sveta'},
    {id: 6, name: 'Valera'},
  ]

  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'message 1'},
    {id: 5, message: 'message 2'},
    {id: 6, message: 'message 3'},
  ]

  return (
    <div className={classes.dialogs}>
      {/* <h2>Dialogs</h2> */}
      <div className={classes.dialogItems}>        
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        {/* <DialogItem name="Dima" id="3" />
        <DialogItem name="Mischa" id="4" />
        <DialogItem name="Sveta" id="5" />
        <DialogItem name="Valera" id="6" /> */}
      </div>
      <div className={classes.messages}>
        <Message massage={messagesData[0].message} />
        <Message massage={messagesData[1].message} />
        {/* <Message massage="massage 3" /> */}
      </div>
    </div>
  );
}

export default Dialogs;