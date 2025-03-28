import { useCartStore } from "@/lib/store/cartStore";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={product.image} alt={product.title} className="h-60 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>${product.price}</p>
        <div className="card-actions justify-end">
          <button 
            className="btn btn-secondary" 
            onClick={() => addToCart({ ...product, quantity: 1 })} // ✅ Add quantity property
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
