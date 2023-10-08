export const formatShortDate = (ms: number) => {
  const date = new Date(ms);

  const options: Intl.DateTimeFormatOptions = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  };

  return date.toLocaleDateString("en", options);
};
