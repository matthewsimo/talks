export default function ImageAttribution(props) {
  const linkClasses = '';
  //    'text-main-300 hover:text-main-200 focus:text-main-200 hover:underline focus:underline';
  return (
    <div className="pt-1 sm:pt-2 xl:pt-3 text-main-300 italic sm:text-lg max-w-prose mx-auto">
      <small {...props} />
    </div>
  );
}
