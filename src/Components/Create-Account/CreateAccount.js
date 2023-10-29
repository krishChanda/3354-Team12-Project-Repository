import React from "react";
import FormTextBox from "../Shared-Components/FormTextBox";
import "./CreateAccount.css";

const CreateAccount = () => {
    return (
        <div className="Create-Account">
            <h2 className="Create-Account-title">
                <span>Create Account</span>
            </h2>
            <FormTextBox type="email" name="email" placeholder="EMAIL" />
            <FormTextBox
                type="password"
                name="password"
                placeholder="PASSWORD"
            />
            <FormTextBox
                type="password"
                name="confirm password"
                placeholder="CONFIRM PASSWORD"
            />
        </div>
    );
};

export default CreateAccount;
