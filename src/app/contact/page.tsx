export default function ContactPage() {
  return (
    <div className='p-8 h-screen'>
      <div className='flex flex-col items-center justify-center py-4 rounded-sm bg-slate-400'>
        <h1 className='text-3xl font-bold'>- Contct -</h1>
        <p className='text-xl'>お問い合わせ</p>
      </div>
      <div className='flex flex-col items-center justify-center py-8'>
        <h2 className='text-2xl font-bold'>Coming Soon...</h2>

        <div className='bg-gray-500 animate-pulse p-8 w-full mt-8'>
          <div className='flex items-center justify-center gap-16'>
            <div className='w-[100px] h-[100px] bg-black animate-spin [animation-duration:10s]'></div>
            <div className='w-[100px] h-[100px] bg-red-500 animate-spin [animation-duration:10s]'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
