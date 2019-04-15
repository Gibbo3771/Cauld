const months = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec"
};

const days = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat"
};

export const prettyDateParse = dateString => {
  const toParse = new Date(dateString);
  const desc = descriptor(dateString);
  const d = date(dateString);
  return buildPrettyDateObject(desc, d);
};

const descriptor = date => {
  const today = new Date();
  const d = new Date(date);
  if (today.getDate() === d.getDate()) return "CURRENT WEATHER";
  if (today.getDate() + 1 === d.getDate() + 1) return "TOMORROW";
};

const date = date => {
  const d = new Date(date);
  return {
    year: d.getFullYear(),
    month: months[d.getMonth()],
    day: days[d.getDay()]
  };
};

const buildPrettyDateObject = (descriptor, date) => {
  return {
    desciptor: descriptor,
    date: date
  };
};

export const getMonthString = month => {
  return months[month];
};

export const getDayString = day => {
  return days[day];
};
