import Image from 'next/image';
import * as React from 'react';
import { readProductById } from '@/entities/product';
import { Button } from '@/shared/ui/button';

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
    <main className="page-center-container grid justify-items-center gap-6 max-md:gap-4 md:grid-cols-[1fr_auto] md:px-8 md:py-6">
      <Image
        className="md:col-start-2"
        src={image}
        alt={name}
        width={384}
        height={629}
      />
      <div className="grid content-start gap-y-4 max-md:px-4 max-md:pb-4 md:row-start-1">
        <h1 className="text-xl font-semibold">{name}</h1>
        <div
          className="third-party-html"
          dangerouslySetInnerHTML={{ __html: unescapedDescription }}
        />
        <div className="text-xl font-semibold">{`Price: ${price}`}</div>
        {/* @ts-ignore */}
        <Button
          className="w-full max-w-[400px]"
          // onClick={() => {
          //   console.log(`Add to cart product with id: ${id}`);
          // }}
        >
          Add to cart
        </Button>
      </div>
    </main>
  );
};

export default ProductPage;
