import Container from './Container';
import Link from './Link';
import ToggleDarkModeButton from './ToggleDarkModeButton';

export default function Header() {
  const linkClasses =
    'hover:text-main-400 hover:drop-shadow-md transition-shadow transition-colors duration-200 ease-in-out';
  return (
    <Container
      as="header"
      className="w-full pt-12 pb-8 absolute top-0 left-0 right-0 z-10"
    >
      <nav className="flex flex-row justify-between items-baseline ">
        <ul className="flex flex-row justify-start content-around align-baseline items-baseline space-x-4 sm:space-x-8">
          <li className="text-main text-3xl">
            <Link className={linkClasses} href="/">
              Matthew Simo
            </Link>
          </li>
          <li className="text-main text-2xl">
            <Link className={linkClasses} href="/">
              About
            </Link>
          </li>
          <li className="text-main text-2xl">
            <Link className={linkClasses} href="/posts">
              Posts
            </Link>
          </li>
        </ul>
        <ToggleDarkModeButton className={linkClasses} />
      </nav>
    </Container>
  );
}
