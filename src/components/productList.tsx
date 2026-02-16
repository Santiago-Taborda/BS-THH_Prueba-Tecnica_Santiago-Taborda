"use client";

import { productsService } from "@/services/productsServices";
import { productType } from "@/types/product";
import { useState, useEffect } from "react";

const ProductList = () => {
  const [cart, setCart] = useState<productType[]>([]);
  const [products, setProducts] = useState<productType[]>([]);

  useEffect(() => {
    const fetchProducts = () => {
      productsService()
        .then((data) => {
          console.log(data);
          setProducts(Array.isArray(data) ? data : data.products || [])
        })
        .catch((error) => {
          console.error("Error al obtener los productos:", error);
          setProducts([]);
        });
    };
    fetchProducts();
  }, []);

  const addProductHandler = (productId: number) => {
    const product = products.find((p) => p.id === Number(productId));
    if (!product) return;
    setCart([...cart, product]);
  };

  return (
    <div>
      <div className="flex flex-col px-8 py-4 m-2 border-y">
      <h3>Tu carrito</h3>
      <span>Productos: {cart.length}</span>
      <span>total: ${cart.reduce((sum, product) => sum + product.price, 0)}</span>
      </div>
      
      <h3>Nuestros productos disponibles</h3>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="p-4 m-2 border rounded-sm">
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <button onClick={() => addProductHandler(product.id)} className="font-bold cursor-pointer">Agregar al carrito</button>
          </div>
        ))
      ) : (
        <p>No hay productos disponibles. Intente mas tarde.</p>
      )}
    </div>
  );
};
export default ProductList;
