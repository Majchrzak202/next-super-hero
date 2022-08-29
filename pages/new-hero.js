import styles from "../styles/Home.module.css";
import NewHeroForm from "../components/NewHeroForm";

const NewHero = () => {
  const addNewHero = async (heroData) => {
    const response = await fetch("api/new-hero", {
      method: "POST",
      body: JSON.stringify(heroData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.json();
    console.log(data);
  };
  return (
    <div className={styles.main}>
      <NewHeroForm addNewHero={addNewHero} />
    </div>
  );
};

export default NewHero;
