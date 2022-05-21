
import "./InputText.css"
import PropTypes from 'prop-types';
const InputText = (prop: any) => {
    return (<>
        <label htmlFor={prop.id}>{prop.text}</label>
        <input type="text" id={prop.id} name={prop.id} placeholder={prop.placeholder}></input>
    </>)
};
InputText.propTypes = {
    id: PropTypes.any,
    placeholder: PropTypes.any,
    text: PropTypes.any
}


export default InputText