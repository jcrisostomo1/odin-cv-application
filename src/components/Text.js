import React from 'react';
import textStyles from '../styles/Text.module.css';

const Text = (props) => {
	if (props.firstName) {
		return (
      <div className={textStyles.main}>
        <div className={textStyles.form}>
          <p><span className={textStyles.bold}>First Name: </span>{props.firstName}</p>
          <p><span className={textStyles.bold}>Last Name: </span>{props.lastName}</p>
          <p><span className={textStyles.bold}>Email: </span>{props.email}</p>
          <p><span className={textStyles.bold}>Phone: </span>{props.phone}</p>
          <button type='button' onClick={props.handleEdit}>Edit</button>
			  </div>
      </div>
		);
	} else  if (props.university) {
		return (
			<div className={textStyles.main}>
        <div className={textStyles.form}>
          <p><span className={textStyles.bold}>University: </span>{props.university}</p>
          <p><span className={textStyles.bold}>City: </span>{props.city}</p>
          <p><span className={textStyles.bold}>Degree: </span>{props.degree}</p>
          <p><span className={textStyles.bold}>Subject: </span>{props.subject}</p>
          <p><span className={textStyles.bold}>Start: </span>{props.edStart}</p>
          <p><span className={textStyles.bold}>End: </span>{props.edEnd}</p>
          <button type='button' onClick={props.handleEdit}>Edit</button>
			  </div>
      </div>
		);
	} else {
    return (
      <div className={textStyles.main}>
        <div className={textStyles.form}>
          <p><span className={textStyles.bold}>Company Name: </span>{props.companyName}</p>
          <p><span className={textStyles.bold}>Position: </span>{props.positionTitle}</p>
          <p><span className={textStyles.bold}>Start: </span>{props.exStart}</p>
          <p><span className={textStyles.bold}>End: </span>{props.exEnd}</p>
          <p className={textStyles.textarea}><span className={textStyles.bold}>Job Description: </span>{props.jobDescription}</p>
          <button type='button' onClick={props.handleEdit}>Edit</button>
        </div>
    </div>
    );
  }
};

export default Text;