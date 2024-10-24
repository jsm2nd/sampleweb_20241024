import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { Clock } from 'lucide-react';

type Props = {
  date: string;
};

dayjs.extend(utc);
dayjs.extend(timezone);

export const DateTime = ({ date }: Props) => {
  const formatDate = dayjs.utc(date).tz('Asia/Tokyo').format('YYYY-MM-DD');
  return (
    <div className='flex items-center text-slate-500 gap-1'>
      <Clock size={17} />
      {formatDate}
    </div>
  );
};
