import React from 'react';

const Alert = ({text, hideAlert, type}) =>
    <div className={`alert alert-${type} alert-dismissible`} role="alert">
        <div>{text}</div>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={hideAlert}>
            <span aria-hidden="true">&times;</span>
        </button>
    </div>;

const SuccessAlert = ({text, hideAlert}) => <Alert text={text} hideAlert={hideAlert} type='success'/>;

const ErrorAlert = ({text, hideAlert}) => <Alert text={text} hideAlert={hideAlert} type='danger'/>;

const resetAlert = () => ({
    show: false,
    count: 0
});

const incrementAlert = alert => ({
    show: true,
    count: alert.count + 1
});

const showSuccessAlert = alerts => showAlert(alerts, 'success');

const showErrorAlert = alerts => showAlert(alerts, 'error');

const showAlert = (alerts, type) => updateAlert(alerts, type, incrementAlert);

const hideSuccessAlert = alerts => hideAlert(alerts, 'success');

const hideErrorAlert = alerts => hideAlert(alerts, 'error');

const hideAlert = (alerts, type) => updateAlert(alerts, type, resetAlert);

const updateAlert = (alerts, type, func) => {
    const updatedAlerts = {...alerts};

    updatedAlerts[type] = func(alerts[type]);

    return updatedAlerts;
};

export {SuccessAlert, ErrorAlert, resetAlert, showSuccessAlert, showErrorAlert, hideSuccessAlert, hideErrorAlert};