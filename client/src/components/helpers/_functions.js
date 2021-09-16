export const formatRelatedItems = ({ name, category, default_price: price }) => ({
  name,
  category,
  price
});

export const formatPreviewImage = ({photos}) => ({
  photos
})