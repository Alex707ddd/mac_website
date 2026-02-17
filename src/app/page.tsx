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
                <a href="/" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#about" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#contact" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
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
                  href="#contact"
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
        </div>

        {/* About Section */}
        <section id="about" className="py-24 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">關於我們</h2>
              <p className="mt-4 text-lg text-slate-400">CHAN & CO., MAC 陳浩庭律師行</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-900 p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">陳浩庭律師</h3>
                <p className="text-slate-400 leading-relaxed">
                  CHAN HO TING MAC<br />
                  獨營執業者 (Sole Proprietor)<br />
                  執業日期: 07/2016
                </p>
              </div>

              <div className="bg-slate-900 p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">公職服務</h3>
                <p className="text-slate-400 leading-relaxed">
                  屯門區議會委任議員<br />
                  社區參與及文化康樂委員會委員<br />
                  專注於提振地區經濟與大廈管理
                </p>
              </div>

              <div className="bg-slate-900 p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">核心價值</h3>
                <p className="text-slate-400 leading-relaxed">
                  Efficient (高效)<br />
                  Private (隱私)<br />
                  Digital (數位化)<br />
                  我們利用科技為您提供最佳法律方案。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <footer id="contact" className="bg-slate-950 py-16 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">聯絡我們</h3>
                <div className="space-y-4 text-slate-400">
                  <p className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    香港金鐘道89號力寶中心1座11樓1105室<br />
                    UNIT 1105, 11/F, TOWER ONE, LIPPO CENTRE, 89 QUEENSWAY, HONG KONG
                  </p>
                  <p className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    2389-9955
                  </p>
                  <p className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@macchan.hk" className="hover:text-white transition-colors">info@macchan.hk</a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">營業時間</h3>
                <div className="space-y-2 text-slate-400">
                  <p className="flex justify-between border-b border-slate-800 pb-2">
                    <span>星期一至五</span>
                    <span>09:30 - 18:00</span>
                  </p>
                  <p className="flex justify-between border-b border-slate-800 pb-2">
                    <span>星期六</span>
                    <span>10:00 - 13:00 (敬請預約)</span>
                  </p>
                  <p className="flex justify-between border-b border-slate-800 pb-2">
                    <span>星期日及公眾假期</span>
                    <span>休息</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} CHAN & CO., MAC. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
