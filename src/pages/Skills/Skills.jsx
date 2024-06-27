import './Skills.css';
import { skillList } from '../../assets/projects';
import { ToolIcon } from '../../components/ToolIcon/ToolIcon';

const skills = () => {
  return (
    <section className='page' id='skills-page'>
      <h1 id='skills-title'>My Skills</h1>
      <div id='skills-container'>
        {skillList.map((tool, index) => {
          return (
            <div key={index} className='skill-item'>
              <ToolIcon tool={tool} className='skill-icon' />
              <h5 className='skill-title'>{tool}</h5>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default skills;
