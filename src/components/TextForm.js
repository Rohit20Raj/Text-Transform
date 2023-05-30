import React, { useState } from 'react'

export default function TextForm(props) {
    const toUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('✅ Converted to UpperCase!', 'success');
    }
    const toLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('✅ Converted to LowerCase!', 'success');
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const clear = () => {
        let newText = '';
        setText(newText);
        props.showAlert('✅ Text cleared!', 'danger');
    }
    const toClipboard = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            // Copy the text inside the text field
            navigator.clipboard.writeText(text);

            // Alert the copied text
            props.showAlert('✅ Text copied to Clipboard', 'warning');
        } else {
            // Clipboard API not supported
            // Use fallback method, such as document.execCommand('copy')
            // or display an error message to the user
            props.showAlert('❌ Copying to clipboard not supported in this browser 😞', 'warning');
        }
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");

    return (
        <div>
            <div className="container mt-3">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.theme === 'dark' ? 'light' : 'dark'}`}><h3>Enter text below</h3></label>
                    <textarea className={`form-control bg-${props.theme}`} id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange} style={{ color: props.theme === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <button type="button" className={`btn btn-outline-${props.theme === 'dark' ? 'light' : 'dark'} m-2`} onClick={toUpperCase}>Convert to UpperCase</button>
                <button type="button" className={`btn btn-outline-${props.theme === 'dark' ? 'light' : 'dark'} m-2`} onClick={toLowerCase}>Convert to LowerCase</button>
                <button type="button" className={`btn btn-outline-${props.theme === 'dark' ? 'light' : 'dark'} m-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button type="button" className={`btn btn-outline-${props.theme === 'dark' ? 'light' : 'dark'} m-2`} onClick={clear}>Clear</button>
                <button type="button" className={`btn btn-outline-${props.theme === 'dark' ? 'light' : 'dark'} m-2`} onClick={toClipboard}>Copy to Clipboard</button>

            </div>
            <div className='container my-2'>
                <div className={`text-${props.theme === 'dark' ? 'light' : 'dark'}`}>{text.split(" ").length - 1} words & {text.length} characters </div>
            </div>
        </div>
    )
}