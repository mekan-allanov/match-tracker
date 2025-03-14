import styles from "./skeleton.module.scss";
import { SkeletonProps } from "./types";

export default function Skeleton({ count = 3, height = "87px", width = "100%" }: SkeletonProps) {
  return (
    <div className={styles.skeleton}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={styles.skeleton__item} style={{ height, width }}></div>
      ))}
    </div>
  );
}
