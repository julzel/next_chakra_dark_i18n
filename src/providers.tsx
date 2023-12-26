import { ReactNode, FC } from 'react';
import UIContext from '@/contexts/UIContext';

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <UIContext>{children}</UIContext>;
};

export default Providers;
