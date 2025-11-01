import { useEffect, useState } from "react";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul>{products.map((p:any) => <li key={p.id}>{p.name} - {p.sku} - {p.stock}</li>)}</ul>
    </div>
  );
}
