import Category from '@/components/Category';
import { DateTime } from '@/components/DateTime';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getNewsDetail } from '@/lib/microcms';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug);
  return (
    <div className='flex flex-col items-center p-8 gap-4 border-t-8 border-b-8'>
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
    </div>
  );
}
