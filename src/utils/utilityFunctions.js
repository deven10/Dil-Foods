export const totalAmount = (data) => {
  return data.reduce(
    (accumulator, current) => accumulator + current.price * current.cartQty,
    0
  );
};

export const isGreaterThan10 = (num) => (num >= 10 ? num : `0${num}`);

export const dateInYYMMDD = (inputDate) => {
  const date = new Date(inputDate);
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yy = date.getFullYear();

  return `${isGreaterThan10(yy)}-${isGreaterThan10(mm)}-${isGreaterThan10(dd)}`;
};

export function formatDate(inputDate) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [year, month, day] = inputDate.split("-");
  const monthName = months[parseInt(month, 10) - 1];

  // Add suffix to the day
  let daySuffix = "th";
  if (day === "01" || day === "21" || day === "31") {
    daySuffix = "st";
  } else if (day === "02" || day === "22") {
    daySuffix = "nd";
  } else if (day === "03" || day === "23") {
    daySuffix = "rd";
  }

  const formattedDate = `${parseInt(day, 10)}${daySuffix} ${monthName} ${year}`;
  return formattedDate;
}
