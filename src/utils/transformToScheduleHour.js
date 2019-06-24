import dayjs from 'dayjs';

/**
 * @param {string} start
 * @param {string} [end]
 * @retuns {string}
 */
const transformToScheduleHour = (start, end = null) => {
  start = dayjs(start).format('HH:mm');

  if (end) {
    end = dayjs(end).format('HH:mm');
  }

  return start + (end ? ` - ${end}` : '');
};

export default transformToScheduleHour;
