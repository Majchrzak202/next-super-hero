import React from "react";
import styles from "../styles/Home.module.css";
import { Card } from "@mui/material";

const HeroesList = ({heroes}) => {
  return (
    <div className={styles.main}>
      <h1>This is my Heroes List</h1>
      <ul style={{ listStyleType: "none" }}>
        {heroes.map((hero) => (
          <li key={hero.name}>
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "25px",
                width: "auto",
                margin: "10px",
                backgroundColor: "#0070f3",
              }}
            >
              <img
                style={{ width: "100px", height: "100px" }}
                alt={hero.name}
                src={hero.image}
              />
              <h2>{hero.name}</h2>
              <p>{hero.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroesList;
