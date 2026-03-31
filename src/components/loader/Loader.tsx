"use client";

import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div style={styles.container}>
      <ClipLoader size={20} color="#fff" />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",   // center horizontally
    alignItems: "center",       // center vertically
    width: "30px",
    height: "30px",
    margin: "0 auto",
    backgroundColor: "#000", // softer red (optional)
    borderRadius: "8px",
  },
};