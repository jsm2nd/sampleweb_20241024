import NewsList from '@/components/NewsList';
import { Button } from '@/components/ui/button';
import { TOP_NEWS_LIMIT } from '@/constants';
import { getNewsList } from '@/lib/microcms';
import Link from 'next/link';

export default async function Home() {
  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });
  return (
    <div className='p-4'>
      <div className='flex flex-col items-center justify-center py-4 rounded-sm bg-slate-400'>
        <h1 className='text-3xl font-bold'>- Home -</h1>
        <p className='text-xl'>Welcome to Our WebSite</p>
      </div>
      <div className='flex flex-col items-center justify-center border-b-2 py-4'>
        <h2 className='text-3xl font-bold rounded-sm animate-bounce'>
          ▽ 新着情報 ▽
        </h2>
        <NewsList news={data.contents} />
        <Button asChild>
          <Link href='/news'>もっと見る</Link>
        </Button>
      </div>
      <div></div>
    </div>
  );
}
