import styles from '../styles/components/Profile.module.css';

export function Profile () {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Dikizeko-Oliveira.png" alt="Dike"/>
      <div>
        <strong>Dikezeko Oliveira</strong>
        <p>
          <img src="icons/level.svg" alt="LEvel"/>
          Level 1
        </p>
      </div>
    </div>
  );
}