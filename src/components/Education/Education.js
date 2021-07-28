import React, { useState } from 'react';
import SectionHeading from '../../Layout/SectionHeading';
import AddEntry from '../Buttons/AddEntry';

function Education(props){

    // will use state hooks to update
    // https://reactjs.org/docs/hooks-state.html
    // to set state we call setInfo. the content inside the useState call is array "info"

    const[info, setInfo] = useState({
        school: '',
        years: '',
        gpa: '',
        focus: '',
    });

    // update info[] on each change hopefully

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInfo({...info, [name]: value });
    }

    return (
        <>

            <SectionHeading title="Education History"/>
            
            
            <input 
            type="text" 
            name="school"
            placeholder="School Name"
            id="school-input"
            onChange={handleChange}
            value={info.school}
            />
            <input 
            type="text" 
            name="years"
            placeholder="Years Attended"
            id="years-input"
            onChange={handleChange}
            value={info.years}
            />
            <input 
            type="text" 
            name="gpa"
            placeholder="GPA"
            id="gpa-input"
            onChange={handleChange}
            value={info.gpa}

            />
            <input 
            type="text" 
            name="focus"
            placeholder="Major"
            id="focus-input"
            onChange={handleChange}
            value={info.focus}

            />
            
            <AddEntry />
        </>

    );
}

export default Education;