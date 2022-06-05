import { useState } from "react";

import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputStreet, setInputStreet] = useState("");
  const [inputCity, setInputCity] = useState("");

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const streetChangeHandler = (event) => {
    setInputStreet(event.target.value);
  };

  const cityChangeHandler = (event) => {
    setInputCity(event.target.value);
  };

  const confirmHandler = (event) => {
    event.preventDefault();

    if (
      inputName.trim().length === 0 ||
      inputStreet.trim().length === 0 ||
      inputCity.trim().length === 0
    ) {
      return;
    }

    console.log(inputName);
    console.log(inputStreet);
    console.log(inputCity);

    setInputName("");
    setInputStreet("");
    setInputCity("");
  };

	props.onConfirm({
		name: inputName,
		street: inputStreet,
		city: inputCity
	});

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={inputName}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetChangeHandler}
          value={inputStreet}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          value={inputCity}
        />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
