// import dayjs from 'dayjs';

const adjustGMT = (hours) => {
  const localTime = hours - 3;
  const withZero = localTime.toString().length === 1 ? `0${localTime}` : localTime;
  return withZero === '00' ? '12' : withZero;
};

const dateToTime = (date) => {
  const fullTime = date.split('T')[1];
  const time = fullTime.substring(0, 5);
  const hours = time.split(':')[0];
  const minutes = time.split(':')[1];

  return `${adjustGMT(hours)}:${minutes}`;
};

/**
 * @param {string} start
 * @param {string} [end]
 * @retuns {string}
 */

const transformToScheduleHour = (start, end = null) => {
  start = dateToTime(start);

  if (end) {
    end = dateToTime(end);
  }

  return start + (end ? ` - ${end}` : '');
};

export default transformToScheduleHour;
