export const fetchProducts = async () => {
  const res = await fetch(
    `http://localhost:3000/api/getProducts`
  );
  const data =await res.json();
  const products : Product[] = await data.products;
  return products;
};
