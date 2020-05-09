import React from 'react';
import SHOP_DATA from '../../redux/shop/shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
import {connect} from 'react-redux';
import {selectCollections} from '../../redux/shop/shop.selectors';
import {createStructuredSelector} from 'reselect';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';

import {selectCollection} from '../../redux/shop/shop.selectors';

import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}) => (
 <div className='shop-page'>  
      <Route exact path={`${match.path}`} component = {CollectionsOverview}/>
      <Route path= {`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
    );


    const mapStateToProps = (state, ownProps) => ({
      collection: selectCollection (ownProps.match.params.collectionId)
    })


export default ShopPage;