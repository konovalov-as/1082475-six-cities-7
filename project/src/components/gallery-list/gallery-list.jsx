import React from 'react';
import PropTypes from 'prop-types';

import GalleryItem from '../gallery-item/gallery-item';

function GalleryList (props) {
  const {offerPhotos} = props;

  return (
    <div className="property__gallery">
      {offerPhotos.map((offerPhoto, i) => <GalleryItem key={offerPhoto + i.toString()} offerPhoto={offerPhoto} />)}
    </div>
  );
}

GalleryList.propTypes = {
  offerPhotos: PropTypes.arrayOf(PropTypes.string),
};

export default GalleryList;
