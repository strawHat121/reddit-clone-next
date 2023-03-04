import React, { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';

const Layout: React.FC = ({ children }) => {
    return (
        <Fragment>
            <Navbar />
            <main>{children}</main>
        </Fragment>
    )
}
export default Layout;