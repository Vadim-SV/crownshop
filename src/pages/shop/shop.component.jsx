import React from 'react';
import SHOP_DATA from '../../redux/shop/shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
import {connect} from 'react-redux';
import {selectCollections} from '../../redux/shop/shop.selectors';

import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
import {Route} from 'react-router-dom';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';








import CollectionPageContainer from '../collection/collection.container';







class ShopPage extends React.Component {
 

  componentDidMount (){
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart();

  }


  render () {

      const {match,isCollectionFetching} = this.props;
      
      return (
        <div className='shop-page'>  
        <Route exact path={`${match.path}`} 
        component = {CollectionsOverviewContainer}
           />
        <Route 
        path= {`${match.path}/:collectionId`}
        component ={CollectionPageContainer}
        />
        </div>
      
      )}
    }
    


    const mapDispatchToProps = dispatch => ({
      fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
    });

export default connect(null, mapDispatchToProps)(ShopPage);