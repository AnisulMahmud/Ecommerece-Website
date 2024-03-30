import { useEffect, useState } from "react";

export const useFetchSingleProduct = (productId) => {

  const [product, setProduct] = useState([null])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );

        if (!response.ok) {
          setIsLoading(false);
          throw new Error("Cant fetch the product with the given ID ${productId}");
        }
        const product = await response.json();
        setProduct(product);
        setIsLoading(false);
        console.log(product);
      } catch (error) {
        setError("Cant fetch the product with the given ID ${productId}");
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  return [product, isLoading, error]

};
