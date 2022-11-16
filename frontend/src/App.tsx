import React from 'react';
import './App.scss';

import Layout from './logic/Layout/Layout';
import Head from "./UI/head/Sec1";
import Sec1 from "./UI/head/Sec1";
import Sec2 from "./UI/Sec2/Sec2";
import Sec3 from "./UI/Sec3/Sec3";
import Sec4 from "./UI/Sec4/Sec4";

function App() {

    return (
        <div className="app">
            <Layout>
                <Sec1/>
                <Sec2/>
                <Sec3/>
                <Sec4/>
            </Layout>
        </div>
  );
}

export default App;
