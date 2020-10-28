import { takeLatest, call, put, all } from 'redux-saga/effects';
import moment from 'moment';
import {
  ticketAverageSuccess,
  ticketAverageFailure,
  gmvSuccess,
  gmvFailure,
  orderWeekSuccess,
  orderWeekFailure,
  orderHourSuccess,
  orderHourFailure,
  typePaymentSuccess,
  typePaymentFailure,
  typeOrderSuccess,
  typeOrderFailure,
  ordersSuccess,
  ordersFailure,
  ordersAverageDaySuccess,
  ordersAverageDayFailure,
  productMoreSaleSuccess,
  productMoreSaleFailure,
  supplierMoreSaleSuccess,
  supplierMoreSaleFailure,
} from './actions';
import api from '../../../services/api';
import {
  ticketAverage,
  typePayment,
  typeOrder,
  orderHour,
  orderHour2,
  gmv,
  orders,
  ordersAverageDay,
  productsMoreSale,
  supplierMoreSale,
} from '../../../mook/mook.json';

const returnMedia = array => {
  let soma = 0;
  let media = 0;

  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }

  media = soma / array.length;

  return Math.trunc(media);
};

const convertDay = day => {
  switch (day) {
    case 'sunday':
      return 'Domingo';
    case 'monday':
      return 'Segunda';
    case 'tuesday':
      return 'Terça';
    case 'wednesday':
      return 'Quarta';
    case 'thursday':
      return 'Quinta';
    case 'friday':
      return 'Sexta';
    case 'saturday':
      return 'Sábado';
    default:
  }
  return null;
};

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaXR5IjoiU8OjbyBKb3PDqSBkbyBSaW8gUGFyZG8iLCJmcmFuY2hpc2VlSWQiOjEwfQ.6V5XFlgxEL6BBWDS3arWy_m-cDnK7G-m2akzF2v3iRg';
api.defaults.headers.Authorization = `Bearer ${token}`;

export function* ticketAverageGetData() {
  try {
    yield put(ticketAverageSuccess(ticketAverage));
  } catch (err) {
    yield put(ticketAverageFailure(err));
  }
}

export function* gmvGetData() {
  try {
    yield put(gmvSuccess(gmv));
  } catch (err) {
    yield put(gmvFailure(err));
  }
}

// --------------------------------- Type Payment
export function* typePaymentGetData() {
  try {
    const response = yield call(api.get, `payment-ratio?b=2020-10-01&e=2020-10-10`);

    const data = [response.data.body.online, response.data.body.offline];

    yield put(typePaymentSuccess(data));
  } catch (err) {
    yield put(typePaymentFailure(err));
  }
}

export function* typePaymentFilterData({ payload }) {
  try {
    const { data } = payload;
    yield put(typePaymentSuccess(typePayment[data]));
  } catch (err) {
    yield put(typePaymentFailure(err));
  }
}

// ------------------------------- Type Order
export function* typeOrderGetData() {
  try {
    const dateNow = moment().format('yyyy-MM-DD');
    const dateNowOneLess = moment()
      .subtract(30, 'd')
      .format('yyyy-MM-DD');

    const response = yield call(api.get, `order-ratio?b=${dateNowOneLess}&e=${dateNow}`);

    const data = [response.data.body.marketplace, response.data.body.enterprise];

    yield put(typeOrderSuccess(data));
  } catch (err) {
    yield put(typeOrderFailure(err));
  }
}

export function* typeOrderFilterData({ payload }) {
  try {
    const { data } = payload;
    const dateNow = moment().format('yyyy-MM-DD');
    if (data === 'today') {
      const dateNowOneLess = moment()
        .subtract(7, 'd')
        .format('yyyy-MM-DD');
      const response = yield call(api.get, `order-ratio?b=${dateNowOneLess}&e=${dateNow}`);
      const data = [response.data.body.marketplace, response.data.body.enterprise];

      yield put(typeOrderSuccess(data));
    } else if (data === 'week') {
      const dateNowOneLess = moment()
        .subtract(7, 'd')
        .format('yyyy-MM-DD');
      const response = yield call(api.get, `order-ratio?b=${dateNowOneLess}&e=${dateNow}`);
      const data = [response.data.body.marketplace, response.data.body.enterprise];

      yield put(typeOrderSuccess(data));
    } else if (data === 'month') {
      const dateNowOneLess = moment()
        .subtract(30, 'd')
        .format('yyyy-MM-DD');
      const response = yield call(api.get, `order-ratio?b=${dateNowOneLess}&e=${dateNow}`);
      const data = [response.data.body.marketplace, response.data.body.enterprise];
      yield put(typeOrderSuccess(data));
    }
  } catch (err) {
    yield put(typeOrderFailure(err));
  }
}

// ------------------------------------- Order Week
export function* orderWeekGetData() {
  try {
    const response = yield call(api.get, `order-avg-dow?b=2020-10-01&e=2020-10-10`);
    const ArrayDados = response.data.body.map(state => state.orderCount);
    const ArrayLabel = response.data.body.map(state => convertDay(state.day));

    const data = {
      Subscribe: returnMedia(ArrayDados),
      labels: ArrayLabel,
      gained: ArrayDados,
      // percent: 15,
    };

    yield put(orderWeekSuccess(data));
  } catch (err) {
    yield put(orderWeekFailure(err));
  }
}

export function* orderWeekFilterData({ payload }) {
  try {
    const { data } = payload;
    yield put(orderWeekSuccess(orderHour[data]));
  } catch (err) {
    yield put(orderHourFailure(err));
  }
}

// -------------------------------------- Order Hour
export function* orderHourGetData() {
  try {
    const response = yield call(api.get, `order-avg-time?b=2020-10-01&e=2020-10-10`);
    const ArrayDados = response.data.body.map(state => state.count);
    const ArrayLabel = response.data.body.map(
      state => `${moment(state.begin, 'HH:mm:ss').format('HH')} às ${moment(state.end, 'HH:mm:ss').format('HH')}h `,
    );

    const data = {
      Subscribe: returnMedia(ArrayDados),
      labels: ArrayLabel,
      gained: ArrayDados,
      // percent: 15,
    };

    yield put(orderHourSuccess(data));
  } catch (err) {
    yield put(orderHourFailure(err));
  }
}

export function* orderHourFilterData({ payload }) {
  try {
    const { data } = payload;
    yield put(orderHourSuccess(orderHour[data]));
  } catch (err) {
    yield put(orderHourFailure(err));
  }
}

export function* ordersGetData() {
  try {
    yield put(ordersSuccess(orders));
  } catch (err) {
    yield put(ordersFailure(err));
  }
}

export function* ordersAverageDayGetData() {
  try {
    yield put(ordersAverageDaySuccess(ordersAverageDay));
  } catch (err) {
    yield put(ordersAverageDayFailure(err));
  }
}

export function* productMoreSaleGetData() {
  try {
    const { fifteen } = productsMoreSale;
    yield put(productMoreSaleSuccess(fifteen));
  } catch (err) {
    yield put(productMoreSaleFailure(err));
  }
}

export function* productMoreSaleFilterData({ payload }) {
  try {
    const { data } = payload;
    yield put(productMoreSaleSuccess(productsMoreSale[data]));
  } catch (err) {
    yield put(productMoreSaleFailure(err));
  }
}

export function* supplierMoreSaleGetData() {
  try {
    const response = yield call(api.get, `top-suppliers?qnt=10`);

    const { fifteen } = supplierMoreSale;
    yield put(supplierMoreSaleSuccess(response.data.body));
  } catch (err) {
    yield put(supplierMoreSaleFailure(err));
  }
}

export function* supplierMoreSaleFilterData({ payload }) {
  try {
    const response = yield call(api.get, `top-suppliers?qnt=10`);

    const { data } = payload;
    yield put(supplierMoreSaleSuccess(response.data.body));
  } catch (err) {
    yield put(supplierMoreSaleFailure(err));
  }
}

export default all([
  takeLatest('@chart/TICKET_AVERAGE_REQUEST', ticketAverageGetData),
  takeLatest('@chart/GMV_REQUEST', gmvGetData),
  // ----- Order Hour
  takeLatest('@chart/ORDER_HOUR_REQUEST', orderHourGetData),
  takeLatest('@chart/ORDER_HOUR_FILTER', orderHourFilterData),
  // ----- Order Week
  takeLatest('@chart/ORDER_WEEK_REQUEST', orderWeekGetData),
  takeLatest('@chart/ORDER_WEEK_FILTER', orderWeekFilterData),
  // ----- Orders
  takeLatest('@chart/ORDERS_REQUEST', ordersGetData),
  takeLatest('@chart/ORDERS_AVERAGE_DAY_REQUEST', ordersAverageDayGetData),
  takeLatest('@chart/PRODUCT_MORE_SALE_REQUEST', productMoreSaleGetData),
  takeLatest('@chart/PRODUCT_MORE_SALE_FILTER', productMoreSaleFilterData),
  takeLatest('@chart/SUPPLIER_MORE_SALE_REQUEST', supplierMoreSaleGetData),
  takeLatest('@chart/SUPPLIER_MORE_SALE_FILTER', supplierMoreSaleFilterData),
  takeLatest('@chart/TYPE_PAYMENT_REQUEST', typePaymentGetData),
  takeLatest('@chart/TYPE_PAYMENT_FILTER', typePaymentFilterData),
  takeLatest('@chart/TYPE_ORDER_REQUEST', typeOrderGetData),
  takeLatest('@chart/TYPE_ORDER_FILTER', typeOrderFilterData),
]);
