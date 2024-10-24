import { TOP_NEWS_LIMIT } from '@/constants';
import { getNewsList } from '@/lib/microcms';

export default async function AboutPage() {
  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });
  return (
    <div className='p-4 h-screen'>
      <div className='flex flex-col items-center justify-center py-4 rounded-sm bg-slate-400'>
        <h1 className='text-3xl font-bold'>- About -</h1>
        <p className='text-xl'>私たちについて</p>
      </div>
      <div className='flex items-center justify-center py-8'>
        <h2 className='text-2xl font-bold'>Coming Soon...</h2>
      </div>
    </div>
  );
}
