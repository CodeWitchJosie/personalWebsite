import * as React from 'react';
import { graphql } from "gatsby";
import {GatsbyImageProps, default as Img} from "gatsby-image"
import Countdown from "../components/Countdown";
import * as moment from 'moment';

interface IndexPageProps {
  data: {
    fedoraImg: {
      childImageSharp: GatsbyImageProps
    }
  }
}

export default class IndexPage
  extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <div className={"container-fluid"}>
        <div className={`row justify-content-center`}>
          <h1>
            Poodle Puppy Countdown!!
          </h1>
        </div>
        <div className={`row justify-content-center`}>
          <div className={'text-center'}>
            <Countdown targetDate={moment("March 31, 2024")}/>
          </div>
        </div>
        <div className={`row justify-content-center`}>
          <div className={`col-4`}>
            <Img fluid={this.props.data.fedoraImg.childImageSharp.fluid}/>
          </div>
        </div>
     </div>
    )
  }
};

export const query = graphql`
  query {
    fedoraImg: file(relativePath: { eq: "fedora.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
