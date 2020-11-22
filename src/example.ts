import { Temporal } from "proposal-temporal";

const tryCatch = (fn: () => unknown) => {
  try {
    fn();
  } catch (err) {
    console.error(err);
    console.log("======\n\n");
  }
};

const nowZoned = Temporal.now.zonedDateTimeISO();
const nowPlain = Temporal.now.plainDateTimeISO();
const plainTime = Temporal.PlainTime.from("12:00");

// These throw runtime errors but not TypeScript errors

tryCatch(() => nowZoned.with(plainTime));
// TypeError: calendar invalid for with(). use withCalendar()

tryCatch(() => nowPlain.with(plainTime));
// TypeError: with() does not support a calendar property
