
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const NewHeroForm = ({addNewHero}) => {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const router = useRouter()

  const submitHandler = (e) => {
    e.preventDefault();

    const heroData = {
      name: name,
      image: image,
      description: description
    }

    addNewHero(heroData)
    router.push('/')
  };
  return (
    <div className={styles.main}>
      <h1>Add new Hero</h1>
      <form onSubmit={submitHandler} style={{ display: "flex", flexDirection: "column" }}>
        <label>Name</label>
        <input onChange={(e) => setName(e.target.value)} />
        <label>Image</label>
        <input onChange={(e) => setImage(e.target.value)} />
        <label>Description</label>
        <input onChange={(e) => setDescription(e.target.value)} />
        <button style={{ marginTop: "15px" }}>Add a hero </button>
      </form>
    </div>
  );
};

export default NewHeroForm;
