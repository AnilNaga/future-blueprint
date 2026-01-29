import { ReactNode } from 'react';
import Footer from './Footer';
import ScrollIndicator from './ScrollIndicator';

interface LayoutProps {
    children: ReactNode;
}

const GlobalLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="min-h-screen app-glass-bg text-slate-900 relative overflow-x-hidden">
                {children}
            </div>
            <ScrollIndicator />
        </>
    );
};

export default GlobalLayout;
