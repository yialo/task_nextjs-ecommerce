import Link from 'next/link';

interface Props {
  pageCount: number;
}

export const ProductPagination: React.FC<Props> = ({ pageCount }) => {
  return (
    <div className="flex justify-center gap-x-4">
      {Array.from({ length: pageCount }).map((_, i) => {
        return (
          <Link
            key={i}
            href={`/?page=${i + 1}`}
            className="text-md rounded bg-gray-200 px-4 py-2 font-semibold"
          >
            {i + 1}
          </Link>
        );
      })}
    </div>
  );
};
