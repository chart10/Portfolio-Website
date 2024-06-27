import './TechStackList.css';
import { ToolIcon } from '../ToolIcon/ToolIcon';

const techStackList = ({ techStack }) => {
  return (
    <div id='tech-stack-container'>
      {techStack.map((tool, index) => {
        return <ToolIcon key={index} tool={tool} />;
      })}
    </div>
  );
};
export default techStackList;
