"use client";
import Link from "next/link";
import Head from "next/head";

import Stories from "containers/Stories";
import ContentMedia from "containers/ContentMedia";
import Portal from "portals";
import StoryPortal from "portals/StoryPortal";
import styles from "styles/Home.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className={styles.container}>
      {/* <Head>12345</Head> */}

      <div className="App h-auto min-h-screen w-full">
        <section className="w-full max-w-[900px] mx-auto h-full">
          <Stories />
          <ContentMedia />
        </section>

        <Portal>
          <StoryPortal />
        </Portal>
      </div>
      <div className="portal" />

      <footer>
        <a
          // href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Written by EJ
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </main>
  );
}
