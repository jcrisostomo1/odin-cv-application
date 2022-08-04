import React, {useState} from 'react';
import educationStyles from '../styles/Education.module.css';

const Education = (props) => {
	const [educationInfo, setEducationInfo] = useState({
		university: '',
		city: '',
		degree: '',
		subject: '',
		edStart: '',
		edEnd: '',
	});

	const [editMode, seteditMode] = useState(true);

	const handleChange = (e) => {
		const { id, value } = e.target;
		setEducationInfo((prevInfo) => {
			let newInfo = { ...prevInfo, [id]: value };
			return newInfo;
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		seteditMode((prevInfo) => !prevInfo);
	};

	const { university, city, degree, subject, edStart, edEnd } = educationInfo;
	const { id, handleDelete } = props;

	if (!editMode) {
		return (
			<>
				<p>{university}</p>
				<p>{city}</p>
				<p>{degree}</p>
				<p>{subject}</p>
				<p>{edStart}</p>
				<p>{edEnd}</p>
				<button onClick={handleSubmit}>Edit</button>
			</>
		);
	};

	return (
		<div className={educationStyles.main}>
			<form className={educationStyles.form} action='' onSubmit={handleSubmit}>
				<div>
					<label htmlFor="university">University:</label>
					<input onChange={handleChange} value={university} type="text" id="university" placeholder="University" required/>
				</div> 
				<div>
					<label htmlFor="city">City:</label>
					<input onChange={handleChange} value={city} type="text" id="city" placeholder="City" required/>
				</div> 
				<div>
					<label htmlFor="degree">Degree:</label>
					<input onChange={handleChange} value={degree} type="text" id="degree" placeholder="Degree" required/>
				</div> 
				<div>
					<label htmlFor="subject">Subject:</label>
					<input onChange={handleChange} value={subject} type="text" id="subject" placeholder="Subject" required/>
				</div> 
				<div>
					<label htmlFor='edStart'>Start: </label>
					<input onChange={handleChange} value={edStart} type="date" id="edStart" required/>
				</div> 
				<div>
					<label htmlFor='edEnd'>End: </label>
					<input onChange={handleChange} value={edEnd} type="date" id="edEnd" required/>
				</div>
				<div className={educationStyles.button}>
					<button>Save</button>
					<button type="button" onClick={()=>{handleDelete(id)}}>Delete</button>
				</div>
			</form>
		</div>
	);
};

export default Education;