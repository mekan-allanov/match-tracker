import { IStatusMap } from "./types";

export const getMatchStatus = (status: "Scheduled" | "Ongoing" | "Finished"): IStatusMap => {
  const statusMap = {
    Scheduled: { text: "Match Preparing", color: "#EB6402" },
    Ongoing: { text: "Live", color: "#43AD28" },
    Finished: { text: "Finished", color: "#EB0237" },
  };

  return statusMap[status];
};
