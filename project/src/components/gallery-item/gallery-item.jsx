import React from 'react';
import PropTypes from 'prop-types';

function GalleryItem (props) {
  const {offerPhoto} = props;

  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={offerPhoto} alt="Awesome hotel" />
    </div>
  );
}

GalleryItem.propTypes = {
  offerPhoto: PropTypes.string,
};

export default GalleryItem;
