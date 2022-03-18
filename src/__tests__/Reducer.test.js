import store from '../Redux/configureStore';
import { startLoadingData, stopLoadingData, retrieveSingleStock } from '../Redux/stocks/stocksActions';

describe('Loading the reducer', () => {
  it('should affrim loading from the api', () => {
    store.dispatch(startLoadingData(true));
    expect(store.getState().loadingReducer.loading).toBe(true);
  });

  it('should confirm loading stopped', () => {
    store.dispatch(stopLoadingData(false));
    expect(store.getState().loadingReducer.loading).toBe(false);
  });
});

describe('get single stock data', () => {
  it('should load single data from the api', () => {
    store.dispatch(retrieveSingleStock({ info: [], name: 'google', price: '5000' }));
    expect(store.getState().singleStockReducer.companyName).toBe('google');
  });
});
