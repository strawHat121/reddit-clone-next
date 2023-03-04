import React, { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';

type LayoutProps = {
    children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Fragment>
            <Navbar />
            <main>{children}</main>
        </Fragment>
    )
}
export default Layout;