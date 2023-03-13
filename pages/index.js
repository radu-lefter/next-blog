import Head from 'next/head';
import Link from 'next/link';

function HomePage() {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
        <li>
            <Link href="/posts/first-post">
              First Post
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}

export default HomePage;
