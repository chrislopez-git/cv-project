import React, { useState } from 'react';

function General(props){

    // will use state hooks to update
    // https://reactjs.org/docs/hooks-state.html
    // to set state we call setInfo. the content inside the useState call is array "info"

    const[info, setInfo] = useState({
        userName: '',
        phoneNum: '',
        email: '',
        location: '',
    });

    // update info[] on each change hopefully

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInfo({...info, [name]: value });

    }

    return (
        <>
            <input 
            type="text" 
            name="userName"
            placeholder="Name"
            id="userName-input"
            onChange={handleChange}
            value={info.userName}
            />
            <input 
            type="text" 
            name="phoneNum"
            placeholder="Phone Number"
            id="PhoneNum-input"
            onChange={handleChange}
            value={info.phoneNum}
            />
            <input 
            type="text" 
            name="email"
            placeholder="Email"
            id="Email-input"
            onChange={handleChange}
            value={info.email}

            />
            <input 
            type="text" 
            name="location"
            placeholder="Location"
            id="Location-input"
            onChange={handleChange}
            value={info.location}

            />
        </>

    );
}

export default General;