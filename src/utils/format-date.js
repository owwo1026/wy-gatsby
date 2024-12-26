import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const DATE_FORMAT = {
  DAYJS: 'YYYY-MM-DDTHH:mm:ss.SSS',
  DAYJS_SLASH_AM_PM: 'YYYY/MM/DD HH:mm:ssA',
  DAYJS_SLASH: 'YYYY/MM/DD',
  DAYJS_DASH: 'YYYY-MM-DD',
  DAYJS_CN: 'YYYY年MM月DD日',
  DAYJS_CN_HM: 'YYYY年MM月DD日 HH:mm',
  DAYJS_TIME_SLASH: 'YYYY/MM/DD HH:mm',
  DATE: 'yyyy-MM-ddTHH:mm:ss.SSS',
  DATE_SLASH: 'yyyy/MM/dd',
  DATE_DASH: 'yyyy-MM-dd',
  DATE_CN: 'yyyy年MM月dd日',
  TIME: 'HH:mm',
  TIME_HMS: 'HH:mm:ss',
};

export function formatDate(date, format = 'YYYY-MM-DD') {
  if (!date) return '';
  const taiwanTime = dayjs(date).utcOffset('+08:00');
  return taiwanTime.format(format);
}
