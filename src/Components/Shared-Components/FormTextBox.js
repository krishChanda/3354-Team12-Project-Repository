import React from "react";
import PropTypes from "prop-types";
import "./FormTextBox.css";

const FormTextBox = (FormTextBoxProps) => {
    return (
        <div className="FormTextBox-outer">
            <div className="container">
                <form className="form">
                    <div className="FormTextBox-input">
                        <span class="icon">
                            <img src={FormTextBoxProps.icon} alt="email icon" />
                        </span>
                        <input
                            type={FormTextBoxProps.type}
                            name={FormTextBoxProps.name}
                            placeholder={FormTextBoxProps.placeholder}
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
};

export default FormTextBox;
