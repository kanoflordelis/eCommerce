import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {
	firestore,
	convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
	unsubscribeFromSnaphot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRec = firestore.collection('collection');

		collectionRec.onSnapshot(async snapshot => {
			convertCollectionsSnapshotToMap(snapshot);
			updateCollections(snapshot);
		});
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} component={CollectionsOverview} />
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPage}
				/>
			</div>
		);
	}
}

const mapStateToDispatch = dispatch => ({
	updateCollections: collectionsMap =>
		dispatch(updateCollections(collectionsMap))
});

export default connect(
	null,
	mapStateToDispatch
)(ShopPage);
