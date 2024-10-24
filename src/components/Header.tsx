import { headerLinks } from '@/constants';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className='flex items-center justify-between py-4 px-4 border-b-2 md:px-52'>
      <Link href='/'>
        <h1 className='text-2xl font-bold hover:opacity-80'>Sample Website</h1>
      </Link>
      <nav className='hidden md:block'>
        <ul className='flex items-center gap-4'>
          {headerLinks.map((link) => (
            <li key={link.key}>
              <Button variant='link' asChild>
                <Link href={link.route}>{link.label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className='md:hidden'>
        <Button variant='outline' size='icon'>
          <Menu />
        </Button>
      </div>
    </header>
  );
}
