import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SkillChart from './SkillChart';

export interface Skill {
  label: string;
  percent: number;
}

const Skills = () => {
  // TODO: move to /data and make a query

  const skills: Skill[] = [
    {
      label: 'JavaScript',
      percent: 95,
    },
    {
      label: 'React',
      percent: 80,
    },
    {
      label: 'Angular',
      percent: 60,
    },
    {
      label: 'Bootstrap',
      percent: 90,
    },
    {
      label: 'HTML5',
      percent: 90,
    },
    {
      label: 'Sass/CSS',
      percent: 70,
    },
  ];
  return (
    <div id={`skills`}>
      <Container>
        <Row>
          <div className='col-lg-2 offset-lg-1'>
            <h5 className='text-uppercase'>Skills</h5>
          </div>
          {skills.map((skill: Skill, index: number) => {
            return (
              <div
                key={skill.label}
                className={`skill-card text-center centered col-lg-3${
                  index > 0 && index % 3 === 0 ? ' offset-lg-3' : ''
                }`}
              >
                <SkillChart label={skill.label} percent={skill.percent} />
                <p>{skill.label}</p>
                <br />
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
export default Skills;
