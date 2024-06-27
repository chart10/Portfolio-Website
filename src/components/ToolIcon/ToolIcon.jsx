import { FaJava, FaFigma, FaSass } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import {
  SiJavascript,
  SiReact,
  SiFlask,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import PropTypes from 'prop-types';

export const REACT = 'React.js';
export const PYTHON = 'Python';
export const FLASK = 'Flask';
export const NODE = 'Node.js';
export const JAVASCRIPT = 'JavaScript';
export const DOCKER = 'Docker';
export const MYSQL = 'MySQL';
export const HTML = 'HTML5';
export const CSS = 'CSS';
export const GIT = 'Git';
export const GITHUB = 'GitHub';
export const FIGMA = 'Figma';
export const JAVA = 'Java';
export const SASS = 'SASS';

export const toolToIcon = {
  [REACT]: <SiReact title='React.js' />,
  [PYTHON]: <SiPython title='Python' />,
  [FLASK]: <SiFlask title='Flask' />,
  [NODE]: <SiNodedotjs title='Node.js' />,
  [JAVASCRIPT]: <SiJavascript title='Vanilla JavaScript' />,
  [DOCKER]: <SiDocker title='Docker' />,
  [MYSQL]: <GrMysql title='MySQL' />,
  [HTML]: <SiHtml5 title='HTML5' />,
  [CSS]: <SiCss3 title='CSS' />,
  [JAVA]: <FaJava title='Java' />,
  [GIT]: <SiGit title='Git' />,
  [GITHUB]: <SiGithub title='GitHub' />,
  [FIGMA]: <FaFigma title='Figma' />,
  [SASS]: <FaSass title='SASS' />,
};

export const ToolIcon = (props) => {
  return <a title={props.tool}>{toolToIcon[props.tool]}</a>;
};

ToolIcon.propTypes = { tool: PropTypes.string };
