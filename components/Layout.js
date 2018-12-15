import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container">
        <nav>
          <Link href="/">
            <a>
              <div className="main-title">Hacker Next</div>
            </a>
          </Link>
        </nav>

        {children}
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: #f6f6ef;
        }

        nav > * {
          display: inline-block;
          color: blacl;
        }

        nav a {
          text-decoration: none;
        }

        nav .main-title {
          font-weight: bold;
        }
      `}</style>

      <style global jsx>
        {`
          body {
            background: white;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
