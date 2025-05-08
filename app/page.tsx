
import Head from 'next/head';
import Image from 'next/image';

import { Header } from '@/components/Header';

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-900">
    

      <div className="relative bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        <div className="relative z-10">
          {/* Navigation */}
          <Header />

          {/* Hero Section */}
          <main className="container mx-auto px-6 py-12 md:py-24">
            <div className="text-center">
              {/* <div className="pt-0.5 pb-[0.1] rounded-xl bg-gradient-to-b from-blue-900 to-blue-100 w-fit mx-auto">
                <p className="text-white text-sm px-4 py-2 h-full rounded-xl bg-black w-full">
                  Welcome to CodeMovement
                </p>
              </div> */}

              <div className="rounded-3xl p-px bg-gradient-to-b from-blue-900 to-transparent w-fit mx-auto mb-12">
                <div className="text-white bg-black py-2 px-6 rounded-[calc(1.5rem-1px)]">
                  Welcome to CodeMovement
                </div>
              </div>


              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-300">
                  We help businesses to<br />
                  have great impact
                </span>
                <span className="inline-block border  border-white backdrop-blur-md bg-white/10 rounded px-4 py-1 ml-2">online</span>
              </h1>
              {/* <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent animated-gradient">
                  We help businesses to<br />
                  have great impact
                </span>
                <span className="inline-block bg-gray-800 bg-opacity-70 rounded px-4 py-1 ml-2">online</span>
              </h1> */}

              <p className="text-white max-w-2xl mx-auto mb-12">
                We are a digital agency that ideates, designs, and develops powerful software.
                <br />
                Leap into the future with a team trusted by the biggest brands.
              </p>

              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-gray-900/70 text-white px-8 py-3 rounded transition border border-white">
                  Our Services
                </button>
                <button className="backdrop-blur-md border border-white bg-white/20 text-white px-8 py-3 rounded-md transition">
                  WordPress Training
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}