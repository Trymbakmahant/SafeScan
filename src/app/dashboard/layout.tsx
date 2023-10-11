"use client";
import { useState } from "react";
import Sidebar from "../Components/Sidebar/page";
import Navbar from "../Components/Navbar/Navbar";
import styles from "./layout.module.scss";
export default function Dashboard({ children }: { children: React.ReactNode }) {
  const [flag, setFlag] = useState(true);
  return (
    <>
      <Navbar />
      {flag && (
        <>
          <main className={styles.layout}>
            <Sidebar />
            <section>{children}</section>
          </main>
        </>
      )}
    </>
  );
}
