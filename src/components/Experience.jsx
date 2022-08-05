import React, {useState} from 'react';
import Text from './Text.jsx'
import experienceStyles from '../styles/Experience.module.css';

const Experience = (props) => {
	const [experienceInfo, setExperienceInfo] = useState({
		companyName: '',
		positionTitle: '',
		jobDescription: '',
		exStart: '',
		exEnd: ''
	});

	const [editMode, setEditMode] = useState(true);

	const handleChange = (e) => {
		const { id, value } = e.target;
		setExperienceInfo((prevInfo) => {
			let newInfo = { ...prevInfo, [id]: value };
			return newInfo;
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setEditMode((prevInfo) => !prevInfo);
	};

	const { companyName, positionTitle, jobDescription, exStart, exEnd } = experienceInfo;
	const { id, handleDelete } = props;

	if(!editMode) {
		return (
			<Text 
				companyName={companyName}
				positionTitle={positionTitle}
				jobDescription={jobDescription}
				exStart={exStart}
				exEnd={exEnd}
        handleEdit={handleSubmit}
			/>
		);
	};

  return (
    <div className={experienceStyles.main}>
      <form className={experienceStyles.form} action='' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="companyName">Company: </label>
					<input onChange={handleChange} value={companyName} type="text" id="companyName" placeholder="Company" required/>
        </div> 
        <div>
          <label htmlFor="position">Position:</label>
					<input onChange={handleChange} value={positionTitle} type="text" id="positionTitle" placeholder="Position" required/>
        </div> 
        <div>
          <label htmlFor='exStart'>Start: </label>
          <input onChange={handleChange} value={exStart} type="date" id="exStart" required/>
        </div> 
        <div>
          <label htmlFor='exEnd'>End: </label>
          <input onChange={handleChange} value={exEnd} type="date" id="exEnd" required/>
        </div>
        <div className={experienceStyles.jobDescription}>
          <textarea onChange={handleChange} value={jobDescription} id="jobDescription" placeholder="Job Description" rows="4" cols="50" required/>
        </div>
				<div className={experienceStyles.button}>
					<button type="submit">Save</button>
					<button type="button" onClick={()=>handleDelete('experienceIds', id)}>Delete</button>
        </div> 
      </form>
    </div>
  );
};

export default Experience;
