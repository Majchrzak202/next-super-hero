import styles from "../styles/Home.module.css";
import HeroesList from "../components/HeroesList";
import { MongoClient } from "mongodb";

const DUMMY_HEROES = [
  {
    name: "Hulk",
    image:
      "https://bleedingcool.com/wp-content/uploads/2019/08/marvels-avengers-square-enix-4-900x900.jpg",
    description: "Green motherfucker",
  },
  {
    mane: "Batman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJTx041Mu_F7ypL2EeSoIL5B4fhYhPpEoJAbQxWwLSw&s",
    description: "Na na na na na na na Batman",
  },
  {
    name: "Spider-Man",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMQWFeMeBgK_vGG2uyHt_obCfTbS1rCpK8Z8RwsShZPA&s",
    description: "Not this Peter Parker fool",
  },
];

const heroes = (props) => {
  return (
    <div className={styles.main}>
      <HeroesList heroes={props.heroes} />
    </div>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb://inkapusta0:Naukaprogramowania1@ac-cjrttmg-shard-00-00.k8alrhp.mongodb.net:27017,ac-cjrttmg-shard-00-01.k8alrhp.mongodb.net:27017,ac-cjrttmg-shard-00-02.k8alrhp.mongodb.net:27017/?ssl=true&replicaSet=atlas-xuf6pl-shard-0&authSource=admin&retryWrites=true&w=majority"
  );

  const db = client.db();

  const heroesCollection = db.collection("Heroes");

  const heroes = await heroesCollection.find().toArray()

  client.close()

  return {
    props: {
      heroes: heroes.map((hero) => ({
        name: hero.name,
        image: hero.image, 
        description: hero.description,
        id: hero._id.toString()
      })),
    },
    revalidate: 10,
  };
}

export default heroes;
