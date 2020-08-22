import { Context } from 'theme-ui';
import { useContext } from 'react';

const DebugTheme = (props) => {
  const theme = useContext(Context);
  return <pre children={JSON.stringify(theme, null, 2)} />;
};
export default DebugTheme;
