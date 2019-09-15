import {
	firestore,
	convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import ShopACtionTypes from './shop.types';

export const updateCollections = collectionsMap => ({
	type: ShopACtionTypes.UPDATE_COLLECTIONS,
	payload: collectionsMap
});

export const fetchCollectionsStart = () => ({
	type: ShopACtionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
	type: ShopACtionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
	type: ShopACtionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
	return dispatch => {
		const collectionRef = firestore.collection('collection');
		dispatch(fetchCollectionsStart());

		collectionRef
			.get()
			.then(snapshot => {
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				dispatch(fetchCollectionsSuccess(collectionsMap));
			})
			.catch(error => dispatch(fetchCollectionsFailure(error.message)));
	};
};
