import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

import Skill from '../component/aboutMe/Skill';
import Personality from '../component/aboutMe/Personality';
import Experience from '../component/aboutMe/Experience';

import headPhoto from '../images/maguangchen.jpg';

const AboutMe = (props) => {
	const changeToSkill = () => {
     props.dispatch(actions.changeHover('skill'));
	}
	const changeToPersonality = () => {
     props.dispatch(actions.changeHover('personality'));
	}
	const changeToExperience = () => {
     props.dispatch(actions.changeHover('experience'));
	}

  const status = props.hover;
  const windowInnerWidth = props.windowInnerWidth;

	const content = status === 'skill' ? <Skill />
	: status === 'personality' ? <Personality /> : <Experience />
  
  let contentHeight =  status === 'skill' ? { height:'450px' }
  : status === 'personality' ? { height:'580px' } : { height:'920px' }
  
  if( windowInnerWidth < 486 && windowInnerWidth > 374){
    if(status === 'skill') {
      contentHeight = { height: '520px'};
    } else if(status === 'personality') {
      contentHeight = { height: '790px'};
    } else if(status === 'experience') {
      contentHeight = { height: '1020px'};
    }
  }

  if(windowInnerWidth < 665 && windowInnerWidth > 485){
      if(status === 'personality') {
        contentHeight = { height: '750px'};
      }
  }

	return (
      <div className="about_me">
        <img 
        className="about_me_photo"
        src={headPhoto} alt="Ma Guang Chen"/>
        <h1>About 馬廣辰</h1>
        <div className="about_me_icon-area">
          <span onMouseOver={changeToSkill} ><i className="fa fa-code skill">Skill</i></span>
          <span onMouseOver={changeToPersonality} ><i className="fa fa-user-circle personality">Personality</i></span>
          <span onMouseOver={changeToExperience} ><i className="fa fa-suitcase experience">Experience</i></span>
        </div>
        <div className="about_me_content-area" style={contentHeight}>
          <div className="about_me_content-area_content">{content}</div>
        </div>
      </div>
	)
}

export default connect((state) => 
{ 
  return {
    hover: state.hover,
  }
}
)(AboutMe);