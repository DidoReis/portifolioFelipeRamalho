
import styles from './styles';
import TransitionSequence from './utils/TransitionSequence';

export default function App() {
  return (
    <main className={`bg-light-primary w-full overflow-hidden ${styles.boxWidth}`}>
      <TransitionSequence />
    </main>
  );
}
