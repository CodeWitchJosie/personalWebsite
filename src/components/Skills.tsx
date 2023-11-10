import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SkillChart from './SkillChart';
import { graphql, StaticQuery, useStaticQuery } from 'gatsby';
import { JsonQueryEdge } from '../utils/graphQlUtils';

export interface Skill {
  label: string;
  percent: number;
}

const Skills = () => {
  const data = useStaticQuery(graphql`
    query getSkills {
      allSkillsJson {
        edges {
          node {
            label
            percent
          }
        }
      }
    }
  `);
  const skills: Skill[] = data.allSkillsJson.edges.map((item: JsonQueryEdge) => item.node);
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
