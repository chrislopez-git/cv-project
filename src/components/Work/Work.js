import React, { useState } from 'react';
import SectionHeading from '../../Layout/SectionHeading';
import AddEntry from '../Buttons/AddEntry';

function Work(props){

    // will use state hooks to update
    // https://reactjs.org/docs/hooks-state.html
    // to set state we call setInfo. the content inside the useState call is array "info"

    const[info, setInfo] = useState({
        company: '',
        position: '',
        years: '',
        duties: '',
    });

    // update info[] on each change hopefully

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInfo({...info, [name]: value });
    }

    return (
        <>

            <SectionHeading title="Work History"/>
            
            
            <input 
            type="text" 
            name="company"
            placeholder="Company"
            id="company-input"
            onChange={handleChange}
            value={info.company}
            />
            <input 
            type="text" 
            name="position"
            placeholder="Position"
            id="position-input"
            onChange={handleChange}
            value={info.position}
            />
            <input 
            type="text" 
            name="years"
            placeholder="Time Active"
            id="years-input"
            onChange={handleChange}
            value={info.years}

            />
            <input 
            type="text" 
            name="duties"
            placeholder="Duties"
            id="duties-input"
            onChange={handleChange}
            value={info.duties}

            />

            <AddEntry />


        </>

    );
}

export default Work;