export function getHumanReadable(minutes) {
  const hours = Math.floor(minutes / 60);
  const minutesDisplay = minutes % 60;
  return `${hours}:${minutes < 10 ? "0" : ""}${minutesDisplay}` + " uur";
}
