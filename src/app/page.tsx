import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <main>
      <h1>Next.js + Tailwind CSS</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </main>
  );
};

export default Home;
