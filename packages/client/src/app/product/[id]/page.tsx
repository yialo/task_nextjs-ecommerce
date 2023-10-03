import Image from 'next/image';
import * as React from 'react';
import { readProductById } from '@/entities/product';

const unescapeHtml = (escapedHtml: string) => {
  return escapedHtml
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&amp;', '&')
    .replaceAll('&nbsp;', '')
    .replace(/ style=".*"/g, '');
};

interface Props {
  params: {
    id: number;
  };
}

const ProductPage: React.FC<Props> = async ({ params }) => {
  const product = await readProductById(params.id);
  const { id, name, description, image, price } = product;
  const unescapedDescription = unescapeHtml(description);

  return (
    <main className="page-center-container px-8 py-4">
      <h1>{name}</h1>
      <Image src={image} alt={name} width={384} height={629} />
      <div
        className="third-party-html"
        dangerouslySetInnerHTML={{ __html: unescapedDescription }}
      />
      <div>{price}</div>
      <div>Add to cart</div>
    </main>
  );
};

export default ProductPage;
