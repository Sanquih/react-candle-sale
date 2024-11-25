"use client";
import styles from "./Home.module.css";
import { MyButton } from "../../components/MyButton";
import useNewCandle from "../../hooks/useNewCandle";

export type HomeProps = {
  // types...
};

const Home: React.FC<HomeProps> = ({}) => {
  const { createNewCandle } = useNewCandle();

  return (
    <div className={`${styles.home} col w100 h100`}>
      <h1 className={styles.primaryColor}>Aura Encendida</h1>
      <p className={styles.primaryColor}>
        Enciende tu espacio con velas artesanales hechas con esencias naturales
        que elevan tus sentidos. <br /> Descubre nuestra colección de fragancias
        desde solo <b>$20,000</b> y transforma cada rincón en un refugio de
        calma y bienestar.
      </p>
      <MyButton onClick={createNewCandle}>Crear Aura</MyButton>
    </div>
  );
};

export default Home;
