import './Footer.css';
import ContactMe from '../ContactMe/ContactMe';
import {
  BsChatHeart,
  BsBoxArrowInRight,
  BsArrowReturnRight,
} from 'react-icons/bs';

const footer = () => {
  return (
    <footer id='contact-me-page'>
      <p>
        Website designed by me! <BsChatHeart />
      </p>
      <p id='website-src'>
        <a href='https://github.com/chart10/Portfolio' target='_blank'>
          <BsArrowReturnRight /> Source Code
        </a>
      </p>
      <ContactMe />
    </footer>
  );
};
export default footer;
