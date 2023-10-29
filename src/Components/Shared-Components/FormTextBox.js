import React from "react";
import PropTypes from "prop-types";
import "./FormTextBox.css";

const FormTextBox = (FormTextBoxProps) => {
    return (
        <form>
            <label>
                <input
                    className="FormTextBox"
                    type={FormTextBoxProps.type}
                    name={FormTextBoxProps.name}
                    placeholder={FormTextBoxProps.placeholder}
                />
            </label>
        </form>
    );
};

FormTextBox.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
};

export default FormTextBox;
