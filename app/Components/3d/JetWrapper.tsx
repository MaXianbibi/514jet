"use client";

import dynamic from 'next/dynamic';

// Importer Jet dynamiquement
const Jet = dynamic(() => import('@/app/Components/3d/Canvas'), {
  ssr: false,
  loading: () => (
    <></>
  ),
});

export default function JetWrapper() {
  return (
    <div className="absolute 2xl:left-150 top-25 xl:flex hidden overflow-visible pointer-events-none">
      <Jet />
    </div>
  );
}