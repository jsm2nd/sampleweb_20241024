import Article from '@/components/Article';
import { Button } from '@/components/ui/button';

import { getNewsDetail } from '@/lib/microcms';
import Link from 'next/link';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug);
  return (
    <div className='flex flex-col items-center justify-center p-4 gap-4 '>
      <Article data={data} />
      <Button asChild>
        <Link href='/news'>ニュース一覧へ</Link>
      </Button>
    </div>
  );
}
