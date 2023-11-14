// Author: Hayden Bell

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./FormTextBox.css";

const FormTextBox = (FormTextBoxProps) => {
    const [inputValue, setInputValue] = useState(""); // Local state to manage the input value

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);

        // If an onChange function is passed as a prop, call it with the new value
        if (FormTextBoxProps.onChange) {
            FormTextBoxProps.onChange(newValue);
        }
    };

    return (
        <div className="FormTextBox-outer">
            <div className="container">
                <form className="form">
                    <div className="FormTextBox-input">
                        <span className="icon">
                            <img src={FormTextBoxProps.icon} alt="email icon" />
                        </span>
                        <input
                            type={FormTextBoxProps.type}
                            name={FormTextBoxProps.name}
                            placeholder={FormTextBoxProps.placeholder}
                            value={inputValue}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

FormTextBox.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

export default FormTextBox;
