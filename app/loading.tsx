'use client';

import { Loader } from "./components/Loader";


export default function Loading() {
  return (
    <div className="h-screen">
      <div className="flex h-full items-center justify-center">
        <Loader />
      </div>
    </div>
  );
}