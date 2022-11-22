import React, {useState} from 'react';
import Footer from "./Footer";
import Header from './Header';

type Props = {
    children: JSX.Element | JSX.Element[],
};

const Layout = ({children}: Props) => (
    <div>
        <Header />
            {children}
        <Footer/>
    </div>
);
export default Layout;