import type { Category } from '@/lib/microcms';

type Props = {
  category: Category;
};

export default function Category({ category }: Props) {
  return (
    <span className='p-2 mr-2 rounded-sm text-sm bg-slate-100'>
      {category.name}
    </span>
  );
}
