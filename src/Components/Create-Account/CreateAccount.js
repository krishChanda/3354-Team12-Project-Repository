import React from "react";
import FormTextBox from "../Shared-Components/FormTextBox";
import email_icon from "../../../public/icons/email_icon.svg";
import password_icon from "../../../public/icons/password_icon.svg";
import "./CreateAccount.css";

const CreateAccount = () => {
    return (
        <div className="Create-Account">
            <h2 className="Create-Account-title">
                <span>Create Account</span>
            </h2>
            <FormTextBox
                type="email"
                name="email"
                icon={email_icon}
                placeholder="EMAIL"
            />
            <FormTextBox
                type="password"
                name="password"
                icon={password_icon}
                placeholder="PASSWORD"
            />
            <FormTextBox
                type="password"
                name="confirm password"
                icon={password_icon}
                placeholder="CONFIRM PASSWORD"
            />
        </div>
    );
};

export default CreateAccount;
