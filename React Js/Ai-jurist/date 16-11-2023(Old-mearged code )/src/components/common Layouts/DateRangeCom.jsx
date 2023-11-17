import { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateRangeCom = () => {

  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])

  // open close
  const [open, setOpen] = useState(false)

  // Track whether a date range is selected
  const [isDateSelected, setIsDateSelected] = useState(false);

  // get the target element to toggle 
  const refOne = useRef(null)

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false)
    }
  }

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false)
    }
  }

  // Function to update the date selection and track if a date is selected
  const handleDateChange = (item) => {
    setRange([item.selection]);
    setIsDateSelected(true);
  }

  return (
    <div className="calendarWrap">
      <input
        value={
          isDateSelected
            ? `${format(range[0].startDate, 'dd/MM/yyyy')} to ${format(range[0].endDate, 'dd/MM/yyyy')}`
            : ''
        }
        readOnly
        className="inputBox"
        onClick={() => setOpen(open => !open)}
        placeholder='dd/mm/yyyy to dd/mm/yyyy'
      />

      <div ref={refOne}>
        {open &&
          <DateRange
            onChange={handleDateChange}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        }
      </div>
    </div>
  )
}

export default DateRangeCom