import './LandingPage.css';
import ContactMe from '../../components/ContactMe/ContactMe';
import portrait from '../../assets/headshot-550x550.png';

const LandingPage = () => {
  return (
    <section className='page' id='landing-page'>
      <div id='name-and-title'>
        <h1 id='landing-name'>Christian Hart</h1>
        <p id='landing-name-subtitle'>Web Developer & Software Engineer</p>
      </div>
      <div id='content-row'>
        <div id='headshot-container'>
          <img
            id='headshot'
            src={portrait}
            alt='Christian Hart Headshot 2023'
          />
        </div>
        <div id='content-col'>
          <p className='landing-text'>
            I am a web developer and full stack engineer from Atlanta, Georgia.
            I have a strong passion for building meaningful experiences for
            people through web design. I work with JavaScript, React, Python,
            Java, and MySQL and I'm constantly adding new tools to my kit. Hit
            me up if you'd like to collaborate!
          </p>
          <ContactMe />
        </div>
      </div>
    </section>
  );
};
export default LandingPage;
