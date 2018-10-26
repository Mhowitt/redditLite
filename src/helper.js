export function compareTimes(createdUTCTime) {
  let timeNowUTC = Math.round(new Date().getTime() / 1000);
  let timeDifference = Math.round((timeNowUTC - createdUTCTime) / 3600);
  return timeDifference;
}
