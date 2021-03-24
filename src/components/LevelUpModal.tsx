import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/LevelModalUp.module.css';

export function LevelUpModal() {
const { level, closelevelUpModal } = useContext(ChallengeContext);

  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closelevelUpModal}>
          <img src="/icons/close.svg" alt="CloseIcon" />
        </button>
      </div>
    </div>
  );
}