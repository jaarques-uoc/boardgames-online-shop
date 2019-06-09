import React from "react";


const TextInput = ({fieldName, label, onChange, disabled}) =>
    <FieldInput fieldName={fieldName} label={label} onChange={onChange} disabled={disabled} type="text"/>;

const PasswordInput = ({fieldName, label, onChange, disabled}) =>
    <FieldInput fieldName={fieldName} label={label} onChange={onChange} disabled={disabled} type="password"/>;

const FieldInput = ({fieldName, label, type, placeholder, onChange, disabled}) =>
    <div className="form-group row">
        <label htmlFor={fieldName} className="col-sm-3 col-form-label">{label}</label>
        <div className="col-sm-9">
            <input type={type}
                   className="form-control"
                   id={fieldName}
                   onChange={onChange}
                   disabled={disabled}
                   placeholder={placeholder}/>
        </div>
    </div>;

const TextAreaInput = ({fieldName, label, onChange, disabled}) =>
    <div className="form-group row">
        <label htmlFor={fieldName} className="col-sm-3 col-form-label">{label}</label>
        <div className="col-sm-9">
            <textarea className="form-control"
                      id={fieldName}
                      onChange={onChange}
                      disabled={disabled}/>
        </div>
    </div>;

export {TextInput, PasswordInput, TextAreaInput};