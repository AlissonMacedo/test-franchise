/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  typePaymentData: null,
  typepaymentLoading: false,
  typeOrderData: null,
  typeOrderLoading: false,
  orderHourData: null,
  orderHourLoading: false,
  orderWeekData: null,
  orderWeekLoading: false,
  gmvData: null,
  gmvLoading: false,
  ordersData: null,
  ordersLoading: false,
  ticketAverageData: null,
  ticketAverageLoading: false,
  ordersAverageDayData: null,
  ordersAverageDayLoading: false,
  productsMoreSaleData: null,
  productMoreSaleLoading: false,
  supplierMoreSaleData: null,
  supplierMoreSaleLoading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@chart/TICKET_AVERAGE_REQUEST': {
        draft.ticketAverageLoading = true;
        break;
      }
      case '@chart/TICKET_AVERAGE_SUCCESS': {
        draft.ticketAverageData = action.payload.data;
        draft.ticketAverageLoading = false;
        break;
      }
      case '@chart/TICKET_AVERAGE_FAILURE': {
        draft.ticketAverageLoading = false;
        break;
      }
      case '@chart/TYPE_PAYMENT_REQUEST': {
        draft.typepaymentLoading = true;
        break;
      }
      case '@chart/TYPE_PAYMENT_SUCCESS': {
        draft.typePaymentData = action.payload.data;
        draft.typepaymentLoading = false;
        break;
      }
      case '@chart/TYPE_PAYMENT_FAILURE': {
        draft.typepaymentLoading = false;
        break;
      }
      case '@chart/TYPE_ORDER_REQUEST': {
        draft.typeOrderLoading = true;
        break;
      }
      case '@chart/TYPE_ORDER_SUCCESS': {
        draft.typeOrderData = action.payload.data;
        draft.typeOrderLoading = false;
        break;
      }
      case '@chart/TYPE_ORDER_FAILURE': {
        draft.typeOrderLoading = false;
        break;
      }
      // -------------------------------- Order Week
      case '@chart/ORDER_WEEK_REQUEST': {
        draft.orderWeekLoading = true;
        break;
      }
      case '@chart/ORDER_WEEK_SUCCESS': {
        draft.orderWeekData = action.payload.data;
        draft.orderWeekLoading = false;
        break;
      }
      case '@chart/ORDER_WEEK_FAILURE': {
        draft.orderWeekLoading = false;
        break;
      }
      // -------------------------------- Order Hour
      case '@chart/ORDER_HOUR_REQUEST': {
        draft.orderHourLoading = true;
        break;
      }
      case '@chart/ORDER_HOUR_SUCCESS': {
        draft.orderHourData = action.payload.data;
        draft.orderHourLoading = false;
        break;
      }
      case '@chart/ORDER_HOUR_FAILURE': {
        draft.orderHourLoading = false;
        break;
      }
      // -------------------------------------- GMV
      case '@chart/GMV_REQUEST': {
        draft.gmvLoading = true;
        break;
      }
      case '@chart/GMV_SUCCESS': {
        draft.gmvData = action.payload.data;
        draft.gmvLoading = false;
        break;
      }
      case '@chart/GMV_FAILURE': {
        draft.gmvLoading = false;
        break;
      }
      case '@chart/ORDERS_REQUEST': {
        draft.ordersLoading = true;
        break;
      }
      case '@chart/ORDERS_SUCCESS': {
        draft.ordersData = action.payload.data;
        draft.ordersLoading = false;
        break;
      }
      case '@chart/ORDERS_FAILURE': {
        draft.ordersLoading = false;
        break;
      }
      case '@chart/ORDERS_AVERAGE_DAY_REQUEST': {
        draft.ordersAverageDayLoading = true;
        break;
      }
      case '@chart/ORDERS_AVERAGE_DAY_SUCCESS': {
        draft.ordersAverageDayData = action.payload.data;
        draft.ordersAverageDayLoading = false;
        break;
      }
      case '@chart/ORDERS_AVERAGE_DAY_FAILURE': {
        draft.ordersAverageDayLoading = false;
        break;
      }
      case '@chart/PRODUCT_MORE_SALE_REQUEST': {
        draft.productMoreSaleLoading = true;
        break;
      }
      case '@chart/PRODUCT_MORE_SALE_SUCCESS': {
        draft.productsMoreSaleData = action.payload.data;
        draft.productMoreSaleLoading = false;
        break;
      }
      case '@chart/PRODUCT_MORE_SALE_FAILURE': {
        draft.productMoreSaleLoading = false;
        break;
      }
      case '@chart/SUPPLIER_MORE_SALE_REQUEST': {
        draft.supplierMoreSaleLoading = true;
        break;
      }
      case '@chart/SUPPLIER_MORE_SALE_SUCCESS': {
        draft.supplierMoreSaleData = action.payload.data;
        draft.supplierMoreSaleLoading = false;
        break;
      }
      case '@chart/SUPPLIER_MORE_SALE_FAILURE': {
        draft.supplierMoreSaleLoading = false;
        break;
      }
      default:
    }
  });
}

// const chartContentReducer = (state = initialState, action) => {
//   const { type, data, err } = action;
//   switch (type) {

//     case SUPPLIERMORESALE_BEGIN:
//       return {
//         ...state,
//         supplierMoreSaleLoading: true,
//       };

//     case SUPPLIERMORESALE_SUCCESS:
//       return {
//         ...state,
//         supplierMoreSaleData: data,
//         supplierMoreSaleLoading: false,
//       };

//     case SUPPLIERMORESALE_ERR:
//       return {
//         ...state,
//         error: err,
//         supplierMoreSaleLoading: false,
//       };
//     default:
//       return state;
//   }
// };

// export default chartContentReducer;
