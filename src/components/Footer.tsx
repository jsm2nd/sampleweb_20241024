import { storeLists } from '@/constants';

export default function Footer() {
  return (
    <footer className='flex-row items-center justify-center p-4 border-t-2'>
      <ul className='flex flex-col items-center justify-center p-8 gap-8 rounded-sm bg-slate-200 md:flex-row md:gap-36'>
        {storeLists.map((store) => (
          <li key={store.key}>
            <dl>
              <dt className='text-lg font-bold mb-2 border-b-2 border-gray-300'>
                {store.name}
              </dt>
              <dd className='text-sm'>住所： {store.address}</dd>
              <dd className='text-sm'>電話番号： {store.phone}</dd>
              <dd className='text-sm'>営業時間： {store.businessHours}</dd>
            </dl>
          </li>
        ))}
      </ul>
      <div className='flex items-center justify-center text-sm text-muted-foreground bg-muted p-4 rounded-lg mt-4'>
        © 2024 Sample Website
      </div>
    </footer>
  );
}
