import * as React from 'react';
import Skill from './Skills';

const SkillChart = (props: Skill) => {
  return (
    <div className='skill-chart mx-auto'>
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 42 42'
        className='donut'
        aria-labelledby={`${props.label}-title ${props.label}-desc`}
      >
        <title id={`${props.label}-title`}>{props.label}</title>
        <desc id={`${props.label}-desc`}>Donut chart showing {props.percent}% proficiency.</desc>
        <circle className='donut-hole' cx='21' cy='21' r='15.91549430918954' />
        <circle className='donut-ring' cx='21' cy='21' r='15.91549430918954' />

        <circle
          className='donut-segment'
          cx='21'
          cy='21'
          r='15.91549430918954'
          stroke-dasharray={`${props.percent} ${100 - props.percent}`}
          stroke-dashoffset='25'
        />
      </svg>
    </div>
  );
};
export default SkillChart;
