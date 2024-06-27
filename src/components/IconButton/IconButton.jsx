import './IconButton.css';

const Button = (props) => {
  return (
    <button className='icon-btn' onClick={props.onClick}>
      <div className='icon-wrapper'>{props.icon}</div>
    </button>
  );
};
export default Button;
