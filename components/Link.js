import Link from 'next/link';

export const focusClasses = `outline-none focus:underline focus:text-main-400 focus:ring focus:ring-main focus:ring-offset-4 focus:ring-offset-main focus:ring-opacity-75 rounded-sm `;

// Any passed className will replace default link styles, not add to them!
export default function MyLink({ className = ``, ...props }) {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  const anchorClasses = className
    ? `${focusClasses} ${className}`
    : `${focusClasses} text-main-primary font-normal hover:underline hover:text-main-400 cursor-pointer`;

  return isInternalLink ? (
    <Link href={href}>
      <a className={anchorClasses} {...props} />
    </Link>
  ) : (
    <a
      className={anchorClasses}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}
