import {createSelector} from 'reselect';
import collectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';




const selectShop = state => state.shop;


export const selectCollections = createSelector (

  [selectShop],
  shop => shop.Items
);

export const selectCollectionsForPreview = createSelector (
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
createSelector (
  [selectCollections],
  collections => collections[collectionUrlParam]
);