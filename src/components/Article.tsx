import Category from './Category';

import { News } from '@/lib/microcms';
import Image from 'next/image';
import { DateTime } from './DateTime';

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className=''>{data.title}</h1>
      <p className=''>{data.description}</p>
      <div className=''>
        <Category category={data.category} />
        <DateTime date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=''
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </main>
  );
}
