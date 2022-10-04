import useInput from "./hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFName,
    isValid: enteredFNameIsValid,
    hasError: fNameInputHasError,
    valueChangeHandler: fNameChangedHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: resetFNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLName,
    isValid: enteredLNameIsValid,
    hasError: lNameInputHasError,
    valueChangeHandler: lNameChangedHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: resetLNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!enteredFNameIsValid || !enteredLNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredFName);
    console.log(enteredLName);
    console.log(enteredEmail);

    resetFNameInput();
    resetLNameInput();
    resetEmailInput();
  };

  const fNameInputClasses = fNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lNameInputClasses = lNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div >
        <div className={fNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
          type='text'
          id='name'
          onChange={fNameChangedHandler}
          onBlur={fNameBlurHandler}
          value={enteredFName} />
          {fNameInputHasError && (
          <p className='error-text'>Please enter a valid name.</p>
        )}
        </div>
        <div className={lNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
          type='text'
          id='name'
          onChange={lNameChangedHandler}
          onBlur={lNameBlurHandler}
          value={enteredLName} />
          {lNameInputHasError && (
          <p className='error-text'>Please enter a valid name.</p>
        )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}/>
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
