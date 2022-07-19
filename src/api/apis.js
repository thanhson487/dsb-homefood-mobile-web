// eslint-disable-next-line import/no-anonymous-default-export
const API = {
  historyMenu: "api/v1/orders/history",
  getInfo: "api/v1/customers/info ",
  delete: (orderId)=> `api/v1/orders/${orderId}`,
  location: "api/v1/locations/all",
  company:"api/v1/company/all",
  submitOrder: "api/v1/orders"
};
export default API;
