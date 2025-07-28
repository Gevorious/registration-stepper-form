import type { LayoutProps } from './types';
import './styles.css';

const Layout = ({ children }: LayoutProps) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
