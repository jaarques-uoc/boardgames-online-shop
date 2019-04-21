import React from "react";


const TextInput = ({fieldName, label, onChange}) =>
    <FieldInput fieldName={fieldName} label={label} onChange={onChange} type="text"/>;

const PasswordInput = ({fieldName, label, onChange}) =>
    <FieldInput fieldName={fieldName} label={label} onChange={onChange} type="password"/>;

const FieldInput = ({fieldName, label, type, placeholder, onChange}) =>
    <div className="form-group row">
        <label htmlFor={fieldName} className="col-sm-3 col-form-label">{label}</label>
        <div className="col-sm-9">
            <input type={type}
                   className="form-control"
                   id={fieldName}
                   onChange={onChange}
                   placeholder={placeholder}/>
        </div>
    </div>;

export {TextInput, PasswordInput};