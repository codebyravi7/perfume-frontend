export const calculatePriceDifference = (priceActual, priceDiscounted) => {
  const priceActualNum = parseFloat(
    priceActual.replace("₹", "").replace(/,/g, "")
  );
  const priceDiscountedNum = parseFloat(
    priceDiscounted.replace("₹", "").replace(/,/g, "")
  );

  return priceActualNum - priceDiscountedNum;
};
