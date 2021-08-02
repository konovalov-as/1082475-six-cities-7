import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { sortOffers } from '../../store/action';

import {getPlaceOffers} from '../../store/selectors/offer-data';

import { SortingKind } from '../../const';

function SortingOptions() {
  const placeOffers = useSelector(getPlaceOffers);

  const dispatch = useDispatch();

  const [isOpenSorting, setIsOpenSorting] = useState(false);
  const [sortingKind, setSortingKind] = useState(SortingKind.POPULAR);

  function handleOpenSorting(evt) {
    evt.preventDefault();
    setIsOpenSorting(!isOpenSorting);
  }

  function handleSetSorting(evt) {
    evt.preventDefault();
    setSortingKind(evt.target.textContent);

    dispatch(sortOffers({
      offers: placeOffers,
      sortingKind: evt.target.textContent,
    }));
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
        <li className="places__option places__option--active" tabIndex="0">{SortingKind.POPULAR}</li>
        <li className="places__option" tabIndex="0">{SortingKind.LOW_TO_HIGH}</li>
        <li className="places__option" tabIndex="0">{SortingKind.HIGH_TO_LOW}</li>
        <li className="places__option" tabIndex="0">{SortingKind.TOP_RATED_FIRST}</li>
      </ul>
    </form>
  );
}

export {SortingOptions};
export default SortingOptions;
