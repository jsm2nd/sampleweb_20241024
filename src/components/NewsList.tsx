import type { News } from '@/lib/microcms';
import Image from 'next/image';
import Link from 'next/link';
import Category from './Category';
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
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className='grid lg:grid-cols-3 p-4 gap-4 '>
      {news.map((article) => (
        <li key={article.id}>
          <Link href={`/news/${article.id}`}>
            <Card>
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>{article.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {article.thumbnail ? (
                  <Image
                    className='w-[200px] rounded-sm'
                    src={article.thumbnail.url}
                    alt=''
                    width={article.thumbnail.width}
                    height={article.thumbnail.height}
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
                    __html: article.content,
                  }}
                />
              </CardContent>
              <CardFooter>
                <Category category={article.category} />
                <DateTime date={article.publishedAt ?? article.createdAt} />
              </CardFooter>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}
