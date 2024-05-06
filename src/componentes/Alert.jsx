const Alert = ({mensaje, color}) => {
    return(
        <div className={`alert alert-${color} mt-3`} role="alert">{mensaje}</div>
    );
};

export default Alert