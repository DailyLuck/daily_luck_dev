import React from 'react'

const Gallery = (props) => {
  const { link, title, subTitle } = props;
  return (
    <li>            
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="info">
                    <h3>{ title }</h3>
                    <p>{ subTitle }</p>
            </div>    
        </a>
    </li>
  )
}

export default Gallery;