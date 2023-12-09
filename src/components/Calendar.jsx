import { useState } from "react";
import styles from "@styles/Calendar.module.css";

export default function Calendar() {
  const [date, setDate] = useState({
    startDate: new Date(-30),
    endDate: new Date(),
    key: "selection",
  });
  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setDate({
      ...date,
      [name]: new Date(value),
    });
  };
  const search = (e) => {
    e.preventDefault();
    // Perform your search based on the date range
    console.log("Search with date range:", date);
  };
  return (
    <form className={styles.dateRangeForm} onSubmit={(e) => search(e)}>
      <div className={styles.dateRangeInputs}>
        <label htmlFor="startDate">
          Start date:{" "}
          <input
            name="startDate"
            value={date.startDate.toISOString().substring(0, 10)}
            onChange={(e) => handleDateChange(e)}
            type="date"
          />
        </label>
        <label htmlFor="endDate">
          End date:{" "}
          <input
            name="endDate"
            value={date.endDate.toISOString().substring(0, 10)}
            //   value={date.startDate.toISOString().substring(0, 10)}
            onChange={(e) => handleDateChange(e)}
            type="date"
          />
        </label>
      </div>
      <input type="submit" value="Search" />
    </form>
  );
}

// export default function Calendar() {
//   const [openDate, setOpenDate] = useState(false);
//   const [date, setDate] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(), // Use null if you don't want to have endDate
//       key: "selection",
//     },
//   ]);
//   return (
//     <div className="calendar">
//       <span onClick={() => setOpenDate(!openDate)}>{`${formatDate(
//         date[0].startDate
//       )} to ${formatDate(date[0].endDate)}`}</span>
//       {openDate && (
//         <DateRange
//           editableDateInputs={true}
//           onChange={(item) => setDate([item.selection])}
//           moveRangeOnFirstSelection={false}
//           ranges={date}
//           className="date"
//         />
//       )}
//     </div>
//   );
// }
