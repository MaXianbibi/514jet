import Jet from '@/app/Components/3d/Jet';
import { Suspense } from 'react'

export default function Home() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <Jet />
    </div>
  );
}
