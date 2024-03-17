import { useEffect, useState } from "react";

export const useFetchProducts = (selectedCategoryName) => {

  const [categorisedProducts, setCategorisedProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${selectedCategoryName}`
        );

        if (!response.ok) {
          setIsLoading(false);
          throw new Error("Cant fetch the data for that resource");
        }
        const product = await response.json();
        setCategorisedProducts(product);
        setIsLoading(false);
        console.log(product);
      } catch (error) {
        setError("error");
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategoryName]);

  return [categorisedProducts, isLoading, error]

};
