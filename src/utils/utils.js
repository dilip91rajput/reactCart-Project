
const calculateTaxAmount = (netamount, total, tax) => {
    return (netamount + total * tax / 100).toFixed(2);
};
const calculateDiscountedAmount = (taxAmount, discount) => {
    return  taxAmount * (discount / 100).toFixed(2);
};
const calculateFinalAmount = (taxAmount, discountedAmount) => {
    return taxAmount - discountedAmount;
};
const vatCalculation = (total, tax) => {
   return (total.toFixed(2)*tax/100)
}
export {
    calculateDiscountedAmount,
    calculateTaxAmount,
    calculateFinalAmount,
    vatCalculation
}

