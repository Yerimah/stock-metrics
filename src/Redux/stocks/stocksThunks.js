import {
  retrieveAllStocks,
  retrieveSingleStock,
  startLoadingData,
  stopLoadingData,
} from './stocksActions';

const Endpoint = 'https://financialmodelingprep.com/api/v3/';
const ApiKey = 'c8df2b2287beeee75ae5d11c25284393';

export const fetchApiData = () => async (dispatch) => {
  try {
    dispatch(startLoadingData(true));
    const response = await fetch(`${Endpoint}stock_market/actives?apikey=${ApiKey}`);
    const info = await response.json();
    dispatch(retrieveAllStocks(info));
  } catch (err) {
    throw new Error(err);
  } finally {
    dispatch(stopLoadingData(false));
  }
};

export const fetchStockDetails = (companySymbol) => async (dispatch) => {
  try {
    dispatch(startLoadingData(true));
    const response = await fetch(`${Endpoint}/income-statement/${companySymbol}?limit=120&apikey=${ApiKey}`);
    const info = await response.json();
    dispatch(retrieveSingleStock(info));
  } catch (err) {
    throw new Error(err);
  } finally {
    dispatch(stopLoadingData(false));
  }
};
