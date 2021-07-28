import React from 'react';

function SavePageBtn(){

    const formatResume = () => {
        // disable buttons
        const buttons = document.getElementsByTagName('button');
        Array.from(buttons, (button) => (button.style.display = 'none'));

        // disable inputs and remove display of input boxes
        const inputs = document.getElementsByTagName('input');
        Array.from(inputs, (inputs) => {
            inputs.style.border = 'none';
            inputs.style.backgroundColor = 'white';
            
        });


    };




    return (
        <button className="save-page-btn" onClick={formatResume}>Save Resume</button>
    );


}

export default SavePageBtn;