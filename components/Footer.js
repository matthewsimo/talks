import Container from './Container';
import Link from './Link';
import Icon from './Icon';

export default function Footer() {
  const footerLinkClasses =
    'focus:ring-offset-main-800 focus:ring-main-200 text-main-300 hover:text-main-200 hover:underline';
  return (
    <footer className="w-full bg-main-800 font-light relative">
      <Container className="w-full py-6 md:py-10 lg:py-16 flex flex-row flex-wrap ">
        <div className="flex flex-row w-full md:w-8/12 space-x-4">
          <img
            className="w-16 h-16 rounded-full block"
            src="/matthewsimo-avatar.jpg"
          />
          <p className="text-main text-xl md:pr-6">
            <strong>Matthew Simo</strong> is a Software Engineer & UX Designer
            based in Houston, Texas. Thanks for visiting, have a look around!
          </p>
        </div>
        <nav className="w-full md:w-4/12 sm:px-4 text-main text-xl">
          <ul className="flex flex-row flex-wrap justify-between align-baseline content-evenly pt-8 md:pt-0 px-8 md:px-0">
            <li className="flex-1/2 mt-2 sm:mt-0">
              <Link className={footerLinkClasses} href="/">
                About
              </Link>
            </li>
            <li className="flex-1/2 mt-2 sm:mt-0">
              <Link className={footerLinkClasses} href="/posts">
                Posts
              </Link>
            </li>
            <li className="flex-1/2 mt-2 sm:mt-0">
              <Link className={footerLinkClasses} href="/">
                Labs
              </Link>
            </li>
            <li className="flex-1/2 mt-2 sm:mt-0">
              <Link
                className={footerLinkClasses}
                target="_blank"
                href="https://twitter.com/matthewsimo"
              >
                Twitter
              </Link>
            </li>
            <li className="flex-1/2 mt-2 sm:mt-0">
              <Link
                className={footerLinkClasses}
                target="_blank"
                href="https://github.com/matthewsimo"
              >
                GitHub
              </Link>
            </li>
            <li className="flex-1/2 mt-2 sm:mt-0">
              <Link
                target="_blank"
                className={footerLinkClasses}
                href="https://www.linkedin.com/in/matthewsimo/"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </nav>

        <small className="w-full pt-8 sm:pt-16 text-main text-base tracking-tight leading-relaxed">
          &copy; {new Date().getFullYear()} Matthew Simo. Learn. Share.
          Attribute. Be nice. &hearts;
          <span className="block">
            <Icon
              title="Texas Icon - Icon made by Good Ware from www.flaticon.com"
              width="18"
              height="18"
              link="/icons/texas.svg#texas"
            />
            Made in Texas
          </span>
        </small>
      </Container>
    </footer>
  );
}
