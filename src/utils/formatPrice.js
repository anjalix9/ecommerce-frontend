export const formatPrice = (price) => {
  return `₹${parseFloat(price).toLocaleString('en-IN')}`;
};

