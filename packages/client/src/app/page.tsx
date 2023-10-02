import { APP_TITLE } from '@/shared/config';

const RootPage: React.FC = () => {
  return (
    <main className="p-4">
      <h1 className="sr-only">{APP_TITLE}</h1>
      <p>Product list</p>
    </main>
  );
};

export default RootPage;
