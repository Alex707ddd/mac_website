import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col font-sans">
      {/* Navigation */}
      <nav className="border-b border-slate-800/50 backdrop-blur-sm fixed w-full z-10 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold tracking-tight text-white">
                CHAN & CO., MAC
                <span className="ml-2 text-slate-400 text-sm font-normal hidden sm:inline">陳浩庭律師行</span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow pt-16 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium tracking-wider uppercase border border-blue-500/20">
              Professional • Private • Digital
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
              <span className="block">不只是律師，</span>
              <span className="block text-blue-400">更是您的法律策略夥伴</span>
            </h1>

            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              利用先進 AI 技術協助您快速梳理案情，過濾無效諮詢，節省寶貴時間。
              我們專注於提供高效、精準的法律解決方案。
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/intake"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg shadow-sm text-slate-900 bg-white hover:bg-slate-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white transform hover:-translate-y-0.5"
              >
                開始 AI 案情初步評估
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </Link>
              <a
                href="mailto:info@macchan.hk"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-base font-medium rounded-lg text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-slate-500"
              >
                聯絡我們
              </a>
            </div>

            <div className="pt-8 border-t border-slate-800 mt-8">
              <p className="text-sm text-slate-500">
                TRUSTED BY CLIENTS ACROSS HONG KONG
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-full flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent mix-blend-overlay z-10"></div>
              <Image
                src="https://www.districtcouncils.gov.hk/images/member/7/tm/9_tm_chan_ho_ting.jpg"
                alt="Chan Ho Ting"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decor elements */}
            <div className="absolute -z-10 top-[-20px] right-[-20px] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -z-10 bottom-[-20px] left-[-20px] w-72 h-72 bg-purple-500/20 rounded-full blur-3xl opacity-30"></div>
          </div>

        </div>
      </main>
    </div>
  )
}
