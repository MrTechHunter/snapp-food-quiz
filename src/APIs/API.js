export const getVendors = async page => {
  const vendors = await (
    await fetch(`https://snappfood.ir/mobile/v3/restaurant/vendors-list?page=${page}&page_size=50&lat=35.754&long=51.328`)
  ).json();
  return vendors.data.finalResult;
};