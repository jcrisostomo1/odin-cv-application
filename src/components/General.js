import React, {useState} from 'react';
import generalStyles from '../styles/General.module.css';

const General = (props) => {
	const [personalInfo, setPersonalInfo] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
	});

	const [editMode, setEditMode] = useState(true);
	
	const handleChange = (e) => {
		const { id, value } = e.target;
		setPersonalInfo((prevInfo) => {
			let newInfo = { ...prevInfo, [id]: value };
			return newInfo;
		});
	};

	const handleSubmit = (e) =>{
		e.preventDefault();
		setEditMode((prevInfo) => !prevInfo);
	};

	const { title } = props;
	const { firstName, lastName, email, phone } = personalInfo;
	
  if(!editMode) {
		return (
			<>
			<p>{firstName}</p>
			<p>{lastName}</p>
			<p>{email}</p>
			<p>{phone}</p>
			<button onClick={handleSubmit}>Edit</button>
			</>
		)
	};
		return (
    <>
			<h3>{title}</h3>
			<div className={generalStyles.main}>
				<form className={generalStyles.form} action='' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
						<input onChange={handleChange} value={firstName} type="text" id="firstName" placeholder="John" required/>
          </div> 
          <div>
            <label htmlFor="lastName">Last Name:</label>
						<input onChange={handleChange} value={lastName} type="text" id="lastName" placeholder="johndoe@test.com" required/>
          </div> 
          <div>
            <label htmlFor="email">Email:</label>
						<input onChange={handleChange} value={email} type="email" id="email" placeholder="Email" required/>
          </div> 
          <div>
            <label htmlFor="phone">Phone:</label>
						<input onChange={handleChange} value={phone} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"id="phone" placeholder="123-456-7890" required/>
          </div> 
          <button className={generalStyles.button} type='submit'>
						Save
					</button>
        </form>
      </div>
    </>
  )
};

export default General;