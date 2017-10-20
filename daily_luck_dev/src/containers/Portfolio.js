import React from 'react';

import Gallery from '../component/portifolio/Gallery';
import { galleryDetail } from '../component/portifolio/GalleryDetail';

const Portifolio = () => {
  const galleryGenerator = galleryDetail.map(
    (detail) => <Gallery 
                  key={detail.id} 
                  link={detail.link} 
                  title={detail.title} 
                  subTitle={detail.subTitle} />
  );
	return (
        <div className="portifolio" >
            <h1>Portifolio</h1>
            <p>我曾參與或自己製作過的side project</p>
            <figure className="portifolio_gallery">
                <ol>
                   {galleryGenerator} 
                </ol>
            </figure>
        </div>
	);
}

export default Portifolio;
