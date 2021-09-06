const levels = {
  1: `text-5xl sm:text-7xl leading-relaxed tracking-tighter`,
  2: `text-4xl sm:text-6xl leading-relaxed tracking-tighter`,
  3: `text-3xl sm:text-5xl leading-relaxed tracking-tight`,
  4: `text-2xl sm:text-4xl leading-relaxed tracking-tight`,
  5: `text-xl sm:text-3xl leading-normal tracking-tight`,
  6: `text-xl sm:text-2xl leading-normal tracking-tight`,
};

const weights = {
  light: `font-extralight`,
  normal: `font-normal`,
  bold: `font-bold`,
};

const families = {
  sans: `font-sans`,
  mono: `font-mono`,
  inherit: `font-inherit`,
};

const Heading = ({
  as = 'h1',
  level = 1,
  weight = 'normal',
  family = 'sans',
  className = ``,
  ...rest
}) => {
  const Component = as;

  return (
    <Component
      className={`text-main ${levels[level]} ${weights[weight]} ${families[family]} ${className}`}
      {...rest}
    />
  );
};

export default Heading;
