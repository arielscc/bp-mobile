export const formatDate = (date: string | Date) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString('default', {month: 'short'});
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  return `${day} de ${month}, ${year}`;
};

export const addYearToDate = (date: Date | string): Date => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  dateObj.setFullYear(year + 1);
  return dateObj;
};
