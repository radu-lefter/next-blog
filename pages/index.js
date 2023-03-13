import Link from 'next/link';
import NavBar from '../components/NavBar';

function HomePage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>My Blog</h1>
      </main>
    </>
  );
}

export default HomePage;
