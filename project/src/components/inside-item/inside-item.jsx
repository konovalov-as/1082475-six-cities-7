import React from 'react';
import PropTypes from 'prop-types';

function InsideItem ({goodsItem}) {
  return (
    <li className="property__inside-item">
      {goodsItem}
    </li>
  );
}

InsideItem.propTypes = {
  goodsItem: PropTypes.string,
};

export default InsideItem;
