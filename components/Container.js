export default function Container({ as = 'div', className = ``, ...props }) {
  const Component = as;
  return (
    <Component
      className={`lg:container mx-auto px-6 sm:px-8 md:px-10 lg:px-16 ${className}`}
      {...props}
    />
  );
}
