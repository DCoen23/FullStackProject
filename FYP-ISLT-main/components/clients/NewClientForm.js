import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewClientForm.module.css';

function NewClientForm(props) {
  const titleInputRef = useRef();
  const idInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredId = idInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const ClientData = {
      clientId: enteredTitle,
      title: enteredTitle,
      id: enteredId,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddClient(ClientData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Customer Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='id'>Customer ID</label>
          <input type='text' required id='id' ref={idInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Customer Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Customer Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Customer</button>
        </div>
      </form>
    </Card>
  );
}

export default NewClientForm;