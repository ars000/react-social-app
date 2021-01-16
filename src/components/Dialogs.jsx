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

  let addNewElement = React.createRef();

  let addMessage = () => {
    let text = addNewElement.current.value;
    alert(text);
  }


  return (
    <div className={classes.dialogsWrap}>
      <h2>Dialogs</h2>
      <div className={classes.dialogs}>
        <div className={classes.dialogItems}>
          { dialogsElements }
        </div>
        <div className={classes.messages}>
          { messagesElements }
        </div>
      </div>
      <div>
        <textarea ref={addNewElement}></textarea>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;