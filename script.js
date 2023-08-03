(function () {
  "use strict";

  const $d_days = document.querySelector(".time-day");
  const $d_hours = document.querySelector(".time-hour");
  const $d_minutes = document.querySelector(".time-minute");
  const $d_seconds = document.querySelector(".time-second");

  const getTargetDate = () => {
    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth() + 1;
    const nowDay = now.getDay();
    let targetDateYear = new Date().getFullYear();
    let targetDate = new Date(targetDateYear, 11, 25);

    if (
      targetDate.getFullYear() === nowYear &&
      targetDate.getMonth() + 1 === nowMonth &&
      targetDate.getDay() === nowDay
    ) {
      targetDate.setFullYear(targetDateYear + 1);
    }

    return targetDate;
  };

  const timeLength = (time) => {
    if (time < 10) {
      return "0" + time;
    } else return time;
  };

  const displayTime = (day, hour, minute, second) => {
    minute = timeLength(minute);
    second = timeLength(second);

    $d_days.innerHTML = day;
    $d_hours.innerHTML = hour;
    $d_minutes.innerHTML = minute;
    $d_seconds.innerHTML = second;
  };

  setInterval(function () {
    const now = new Date().getTime();
    const distance = Math.abs(getTargetDate() - now);
    const d_days = Math.floor(distance / (1000 * 3600 * 24));
    const d_hours = Math.floor((distance / (1000 * 3600)) % 24);
    const d_minutes = Math.floor((distance / (1000 * 60)) % 60);
    const d_seconds = Math.floor((distance % (1000 * 60)) / 1000);

    displayTime(d_days, d_hours, d_minutes, d_seconds);
  }, 1000);
})();
