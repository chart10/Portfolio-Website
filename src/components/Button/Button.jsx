import './Button.css';

const Button = (props) => {
  return (
    <button className='btn' onClick={props.onClick}>
      <span id='text-scroll'>{props.btnText}</span>
    </button>
  );
};
export default Button;
