import { readProductById } from '@/entities/product';

interface Props {
  params: {
    id: number;
  };
}

const ProductPage: React.FC<Props> = async ({ params }) => {
  const product = await readProductById(params.id);

  return (
    <main className="page-center-container">
      <h1>Product: {params.id}</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </main>
  );
};

export default ProductPage;
