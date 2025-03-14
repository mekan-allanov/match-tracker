import styles from "./App.module.scss";
import MatchList from "./components/MatchList";

function App() {
  return (
    <div className={styles.App}>
      <MatchList />
    </div>
  );
}

export default App;
