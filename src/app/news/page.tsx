import NewsList from '@/components/NewsList';
import { TOP_NEWS_LIMIT } from '@/constants';
import { getNewsList } from '@/lib/microcms';

export default async function NewsPage() {
  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });

  return (
    <div className='p-4'>
      <div className='flex flex-col items-center justify-center py-4 rounded-sm bg-slate-400'>
        <h2 className='text-3xl font-bold'>- News -</h2>
        <p className='text-xl'>お知らせ</p>
      </div>
      <div className='flex p-4'>
        <NewsList news={data.contents} />
      </div>
    </div>
  );
}
