import ShopACtionTypes from './shop.types';

export const updateCollections = collectionsMap => ({
	type: ShopACtionTypes.UPDATE_COLLECTIONS,
	payload: collectionsMap
});
