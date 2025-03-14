import { Match } from "../../../api/types";
import { getMatchStatus } from "./helpers";
import styles from "./matchItem.module.scss";

export default function MatchItem({ match }: { match: Match }) {
  const status = getMatchStatus(match.status);

  return (
    <div className={styles["match-item"]}>
      <div className={styles["match-item__team"]}>
        <img src="/illustrations_role.svg" alt="logo" className={styles["match-item__team-logo"]} />
        <span className={styles["match-item__team-name"]}>{match.awayTeam.name}</span>
      </div>
      <div className={styles["match-item__score"]}>
        <div className={styles["match-item__score-value"]}>
          <span className={styles["match-item__home-score"]}>{match.awayScore}</span> :{" "}
          <span className={styles["match-item__away-score"]}>{match.homeScore}</span>
        </div>
        <span className={styles["match-item__status"]} style={{ background: `${status.color}` }}>
          {status.text}
        </span>
      </div>
      <div className={styles["match-item__team"]}>
        <span className={styles["match-item__team-name"]}>{match.homeTeam.name}</span>
        <img src="/illustrations_role.svg" alt="logo" className={styles["match-item__team-logo"]} />
      </div>
    </div>
  );
}
