import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

import placeOffersProp from '../offer-list/offer-list.prop';

function SortingOptions(props) {
  const {placeOffers, sortOffers} = props;
  const [isOpenSorting, setIsOpenSorting] = useState(false);
  const [sortingKind, setSortingKind] = useState('Popular');

  function handleOpenSorting(evt) {
    evt.preventDefault();
    setIsOpenSorting(!isOpenSorting);
  }

  function handleSetSorting(evt) {
    evt.preventDefault();
    setSortingKind(evt.target.textContent);
    sortOffers({
      offers: placeOffers,
      sortingKind: Number(evt.target.id),
    });
    setIsOpenSorting(!isOpenSorting);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={handleOpenSorting}
      >
        {sortingKind}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${(isOpenSorting) && 'places__options--opened'}`}
        onClick={handleSetSorting}
      >
        <li id="0" className="places__option places__option--active" tabIndex="0">Popular</li>
        <li id="1" className="places__option" tabIndex="0">Price: low to high</li>
        <li id="2" className="places__option" tabIndex="0">Price: high to low</li>
        <li id="3" className="places__option" tabIndex="0">Top rated first</li>
      </ul>
    </form>
  );
}

SortingOptions.propTypes = {
  placeOffers: placeOffersProp,
  sortOffers: PropTypes.func,
};

const mapStateToProps = (state) => ({
  placeOffers: state.placeOffers,
});

const mapDispatchToProps = (dispatch) => ({
  sortOffers(payload) {
    dispatch(ActionCreator.sortOffers(payload));
  },
});


export {SortingOptions};
export default connect(mapStateToProps, mapDispatchToProps)(SortingOptions);
