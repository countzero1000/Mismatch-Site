
import Head from 'next/head'
import Navbar from './navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>
              Mismatch Media
              
            </title>
            <link rel = "stylesheet"
              href = "https://bootswatch.com/4/cyborg/bootstrap.min.css"
            />
        </Head>
        <Navbar/>
        <div>
        {props.children}
        </div>

    </div>

);


export default Layout;
