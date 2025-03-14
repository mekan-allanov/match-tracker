import { useQuery } from "@tanstack/react-query";
import { fetchMatches } from "../../api/fetchMatches";
import styles from "./matches.module.scss";
import MatchItem from "./MatchItem";
import { Match } from "../../api/types";
import Spinner from "../Spinner";
import Skeleton from "../Skeleton";

export default function MatchList() {
  const {
    data: matches,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery({
    queryKey: ["matches"],
    queryFn: fetchMatches,
  });

  return (
    <div className={styles["match-list"]}>
      <div className={styles["match-list__header"]}>
        <h1 className={styles["match-list__title"]}>Match Tracker</h1>
        <div className={styles["match-list__controls"]}>
          {error && (
            <div className={styles["match-list__error"]}>
              <img
                src="/alert-triangle.svg"
                alt="alert-triangle"
                className={styles["match-list__error-img"]}
              />
              <span className={styles["match-list__error-text"]}>
                Ошибка: не удалось загрузить информацию
              </span>
            </div>
          )}
          <button
            className={styles["match-list__refresh"]}
            onClick={() => refetch()}
            disabled={isLoading || isFetching}
          >
            <span className={styles["match-list__refresh-text"]}>Обновить</span>
            {isFetching && (
              <div className={styles["match-list__spinner"]}>
                <Spinner />
              </div>
            )}
          </button>
        </div>
      </div>
      {isLoading || isFetching ? (
        <Skeleton />
      ) : (
        <div className={styles["match-list__matches"]}>
          {matches?.map((match: Match) => (
            <MatchItem key={match.title} match={match} />
          ))}
        </div>
      )}
    </div>
  );
}
