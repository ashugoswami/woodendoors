import ProductDetail from "../../../components/products/product-details";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="min-h-screen">
      <ProductDetail productId={params.id} />
    </div>
  );
}
