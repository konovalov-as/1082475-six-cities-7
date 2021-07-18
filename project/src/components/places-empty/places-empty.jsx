import React from 'react';
import {connect} from 'react-redux';

import {cityProp} from '../../const.prop';

function PlacesEmpty(props) {
  const {city} = props;

  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {city.name}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
}

PlacesEmpty.propTypes = {
  city: cityProp,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

export {PlacesEmpty};
export default connect(mapStateToProps, null)(PlacesEmpty);
