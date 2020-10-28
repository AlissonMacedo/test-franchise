// ---------------------- Ticket Average
export function ticketAverageRequest() {
  return {
    type: '@chart/TICKET_AVERAGE_REQUEST',
  };
}

export function ticketAverageSuccess(data) {
  return {
    type: '@chart/TICKET_AVERAGE_SUCCESS',
    payload: { data },
  };
}

export function ticketAverageFailure() {
  return {
    type: '@chart/TICKET_AVERAGE_FAILURE',
  };
}

// ------------------------------ GMV
export function gmvRequest() {
  return {
    type: '@chart/GMV_REQUEST',
  };
}

export function gmvSuccess(data) {
  return {
    type: '@chart/GMV_SUCCESS',
    payload: { data },
  };
}

export function gmvFailure() {
  return {
    type: '@chart/GMV_FAILURE',
  };
}

// ------------------------ Order Week
export function orderWeekRequest() {
  return {
    type: '@chart/ORDER_WEEK_REQUEST',
  };
}

export function orderWeekFilter(data) {
  return {
    type: '@chart/ORDER_WEEK_FILTER',
    payload: { data },
  };
}

export function orderWeekSuccess(data) {
  return {
    type: '@chart/ORDER_WEEK_SUCCESS',
    payload: { data },
  };
}

export function orderWeekFailure() {
  return {
    type: '@chart/ORDER_WEEK_FAILURE',
  };
}

// -------------------------- Order Hour
export function orderHourRequest() {
  return {
    type: '@chart/ORDER_HOUR_REQUEST',
  };
}

export function orderHourFilter(data) {
  return {
    type: '@chart/ORDER_HOUR_FILTER',
    payload: { data },
  };
}

export function orderHourSuccess(data) {
  return {
    type: '@chart/ORDER_HOUR_SUCCESS',
    payload: { data },
  };
}

export function orderHourFailure() {
  return {
    type: '@chart/ORDER_HOUR_FAILURE',
  };
}

// ------------------------- Type Payment
export function typePaymentRequest() {
  return {
    type: '@chart/TYPE_PAYMENT_REQUEST',
  };
}

export function typePaymentFilter(data) {
  return {
    type: '@chart/TYPE_PAYMENT_FILTER',
    payload: { data },
  };
}

export function typePaymentSuccess(data) {
  return {
    type: '@chart/TYPE_PAYMENT_SUCCESS',
    payload: { data },
  };
}

export function typePaymentFailure() {
  return {
    type: '@chart/TYPE_PAYMENT_FAILURE',
  };
}
// -------------------------- Type Order
export function typeOrderRequest() {
  return {
    type: '@chart/TYPE_ORDER_REQUEST',
  };
}
//
export function typeOrderFilter(data) {
  return {
    type: '@chart/TYPE_ORDER_FILTER',
    payload: { data },
  };
}

export function typeOrderSuccess(data) {
  return {
    type: '@chart/TYPE_ORDER_SUCCESS',
    payload: { data },
  };
}

export function typeOrderFailure() {
  return {
    type: '@chart/TYPE_ORDER_FAILURE',
  };
}

// --------------------------------- Order
export function ordersRequest() {
  return {
    type: '@chart/ORDERS_REQUEST',
  };
}

export function ordersSuccess(data) {
  return {
    type: '@chart/ORDERS_SUCCESS',
    payload: { data },
  };
}

export function ordersFailure() {
  return {
    type: '@chart/ORDERS_FAILURE',
  };
}
// ---------------------------- Order Average
export function ordersAverageDayRequest() {
  return {
    type: '@chart/ORDERS_AVERAGE_DAY_REQUEST',
  };
}

export function ordersAverageDaySuccess(data) {
  return {
    type: '@chart/ORDERS_AVERAGE_DAY_SUCCESS',
    payload: { data },
  };
}

export function ordersAverageDayFailure() {
  return {
    type: '@chart/ORDERS_AVERAGE_DAY_FAILURE',
  };
}

// ------------------------ Product More Sale
export function productMoreSaleRequest() {
  return {
    type: '@chart/PRODUCT_MORE_SALE_REQUEST',
  };
}
//
export function productMoreSaleFilter(data) {
  return {
    type: '@chart/PRODUCT_MORE_SALE_FILTER',
    payload: { data },
  };
}

export function productMoreSaleSuccess(data) {
  return {
    type: '@chart/PRODUCT_MORE_SALE_SUCCESS',
    payload: { data },
  };
}

export function productMoreSaleFailure() {
  return {
    type: '@chart/PRODUCT_MORE_SALE_FAILURE',
  };
}

// ----------------------- Supplier More Sale

export function supplierMoreSaleRequest() {
  return {
    type: '@chart/SUPPLIER_MORE_SALE_REQUEST',
  };
}
//
export function supplierMoreSaleFilter(data) {
  return {
    type: '@chart/SUPPLIER_MORE_SALE_FILTER',
    payload: { data },
  };
}

export function supplierMoreSaleSuccess(data) {
  return {
    type: '@chart/SUPPLIER_MORE_SALE_SUCCESS',
    payload: { data },
  };
}

export function supplierMoreSaleFailure() {
  return {
    type: '@chart/SUPPLIER_MORE_SALE_FAILURE',
  };
}

// -------------------------------------------
