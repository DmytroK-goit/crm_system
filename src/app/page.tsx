import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.png" />
        <title>CRM System</title>
      </Head>

      <main
        className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/main-bg.jpg')" }}
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent">
          CRM SYSTEM
        </h1>

        <Link
          href="/dashboard"
          className="flex items-center justify-center w-40 h-14 rounded-xl bg-amber-400 text-black font-semibold shadow-md transition duration-300 ease-in-out transform hover:bg-amber-500 hover:scale-105 cursor-pointer"
        >
          Dashboard
        </Link>
      </main>
    </>
  );
}
