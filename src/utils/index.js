export const covertDateToVN = (data) => {
  switch (data.toLowerCase()) {
    case "monday":
      return "Thứ 2";
    case "tuesday":
      return "Thứ 3";
    case "wednesday":
      return "Thứ 4";
    case "thursday":
      return "Thứ 5";
    case "friday":
      return "Thứ 6";
    case "saturday":
      return "Thứ 7";

    default:
      return "Thứ 2";
  }
};
