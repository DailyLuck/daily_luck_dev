import React from 'react';

import react from '../../images/react.svg';
import redux from '../../images/redux.svg';
import html5 from '../../images/html5.svg';
import scss from '../../images/scss.svg';
import graphQL from '../../images/graphQL.svg';
import webpack from '../../images/webpack.svg';
import node from '../../images/node.svg';
import mongoDB from '../../images/mongoDB.svg';
import firebase from '../../images/firebase.svg';
const Skill = () => {
  const svgLgStyle = {
     width: '5rem',
     margin: '10px',
  }
  const svgStyle = {
    width: '3.5rem',
    margin: '10px',
  }
  const svgSmStyle = {
     width: '2rem',
     margin: '10px',
  }
	return (
    <div>
      <p>我較為孰悉的技術 :<br/>React、Redux、HTML5、SCSS</p>
      <img style={svgLgStyle} className="tec-img"src={react} alt="react.svg"/>
      <img style={svgStyle} className="tec-img"src={redux} alt="redux.svg"/>
      <img style={svgStyle} className="tec-img"src={html5} alt="html5.svg"/>
      <img style={svgStyle} className="tec-img"src={scss} alt="scss.svg"/>
      <p>我有在使用還算有點了解的技術 :<br/>GraphQL(我使用ReactApollo配合Express而不是relay)、Webpack</p>
      <img style={svgStyle} className="tec-img"src={graphQL} alt="graphQL.svg"/>
      <img style={svgStyle} className="tec-img"src={webpack} alt="webpack.svg"/>
      <p>研究中有應用在自己的side project的技術 :<br/>NodeJS、Mongose、Firebase</p>
      <img style={svgStyle} className="tec-img"src={node} alt="node.svg"/>
      <img style={svgLgStyle} className="tec-img" src={mongoDB} alt="mongoDB.svg"/>
      <img style={svgSmStyle} className="tec-img" src={firebase} alt="firebase.svg"/>
    </div>
  );
}

export default Skill;