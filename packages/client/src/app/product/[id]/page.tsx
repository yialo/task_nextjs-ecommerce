import { readAllProducts } from '@/entities/product';

interface Props {
  params: {
    id: number;
  };
}

export const generateStaticParams = async () => {
  const products = await readAllProducts();
  return products.map((product) => ({
    id: product.id,
  }));
};

const ProductPage: React.FC<Props> = ({ params }) => {
  return (
    <main className="page-center-container">
      <h1>Product: {params.id}</h1>
    </main>
  );
};

export default ProductPage;
