export function english_ordinal_suffix(dt) {
  return (
    dt.getDate() +
    (dt.getDate() % 10 === 1 && dt.getDate() !== 11
      ? "st"
      : dt.getDate() % 10 === 2 && dt.getDate() !== 12
      ? "nd"
      : dt.getDate() % 10 === 3 && dt.getDate() !== 13
      ? "rd"
      : "th")
  );
}
