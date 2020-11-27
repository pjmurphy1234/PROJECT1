const myCalender = new CalendarPicker('#myCalendarWrapper', {
	// options here
});
myCalender.value
myCalender.value.getDay();
myCalender.value.toDateString();
const nextYear = new Date().getFullYear() + 1;
const myCalender = new CalendarPicker('#myCalendarWrapper', {
      min: new Date(),
      max: new Date(nextYear, 10) 
});