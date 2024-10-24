import Category from './Category';

import { News } from '@/lib/microcms';
import Image from 'next/image';
import { DateTime } from './DateTime';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <Card>
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
          <CardDescription>{data.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {data.thumbnail ? (
            <Image
              className='w-[200px] rounded-sm'
              src={data.thumbnail.url}
              alt=''
              width={data.thumbnail.width}
              height={data.thumbnail.height}
            />
          ) : (
            <Image
              className='w-[200px] rounded-sm'
              src='/no-image.png'
              alt='No Image'
              width={1200}
              height={630}
            />
          )}
        </CardContent>
        <CardContent>
          <div
            dangerouslySetInnerHTML={{
              __html: data.content,
            }}
          />
        </CardContent>
        <CardFooter>
          <Category category={data.category} />
          <DateTime date={data.publishedAt ?? data.createdAt} />
        </CardFooter>
      </Card>
    </main>
  );
}
