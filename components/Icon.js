export default function Icon({ title = ``, link = ``, ...props }) {
  return (
    <svg className="align-text-top mx-1 inline-block" {...props}>
      {title && <title>{title}</title>}
      {link && <use xlinkHref={link} />}
    </svg>
  );
}
