import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { sortOffers } from '../../store/action';

import {getPlaceOffers} from '../../store/selectors/offer-data';

function SortingOptions() {
  const placeOffers = useSelector(getPlaceOffers);

  const dispatch = useDispatch();

  const handleSortOffers = (payload) => {
    dispatch(sortOffers(payload));
  };

  const [isOpenSorting, setIsOpenSorting] = useState(false);
  const [sortingKind, setSortingKind] = useState('Popular');

  function handleOpenSorting(evt) {
    evt.preventDefault();
    setIsOpenSorting(!isOpenSorting);
  }

  function handleSetSorting(evt) {
    evt.preventDefault();
    setSortingKind(evt.target.textContent);
    handleSortOffers({
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

export {SortingOptions};
export default SortingOptions;
