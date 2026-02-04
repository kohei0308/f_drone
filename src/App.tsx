import { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  Shield,
  Target,
  ChevronDown,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', contact: '', message: '' });
    }, 3000);
  };

  const faqs = [
    {
      q: '対応エリアはどこまでですか?',
      a: 'さいたま本社、熊谷営業所、千葉営業所の3拠点体制により、関東圏内で幅広く対応しております。複数拠点による体制で、迅速かつ柔軟な対応が可能です。エリアについてはお気軽にご相談ください。'
    },
    {
      q: '稲作以外の作物にも対応できますか?',
      a: '稲作を中心に、野菜・果樹・茶畑などの散布にも対応しております。圃場の状況や散布内容により対応可否が変わりますので、詳細をお聞かせください。'
    },
    {
      q: 'どのような農薬・肥料に対応していますか?',
      a: 'ドローン散布に適した液剤・粒剤に対応しております。お手持ちの資材についてご相談いただければ、適用可否をご案内いたします。'
    },
    {
      q: '料金はどのくらいかかりますか?',
      a: '圃場面積、散布内容、地形条件などにより異なります。現地確認の上、お見積もりをご提示させていただきますので、まずはお問い合わせください。'
    },
    {
      q: '天候が悪い場合はどうなりますか?',
      a: '雨天や強風時は安全のため作業を延期させていただきます。事前に天候を確認し、お客様と日程調整を行いますのでご安心ください。'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-2 sm:px-3 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="/小さくしたlogo0124_(1).png"
              alt="藤倉ドローン株式会社"
              className="h-12 md:h-14 w-auto"
            />
            <h1 className="text-sm sm:text-base md:text-lg font-bold text-gray-800">藤倉ドローン株式会社</h1>
          </div>
          <a
            href="tel:048-864-6078"
            className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">048-864-6078</span>
          </a>
        </div>
      </header>

      <section
        className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("/img_4083.jpeg")',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto max-w-2xl text-center relative z-10 px-6 py-32">
          <h2 className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose md:leading-loose font-normal text-white mb-10">
            効率を追うのは、あなたの時間を創るため、<br />
            あなたの想いを届けるため。
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-loose sm:leading-loose max-w-lg mx-auto">
            培った技術はお客様との約束を果たすため<br />
            それをただの「効率」では終わらせない。<br />
            私たちが目指すのは農家様が大切にしたいものに<br />
            向き合える「ゆとり」の提供です。
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            こんなお悩み、ありませんか?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              '散布作業が重労働で、身体への負担が大きい',
              '人手不足で、繁忙期の作業が追いつかない',
              '背負い式散布機での作業がきつくなってきた',
              '暑い時期の作業は熱中症のリスクが心配',
              '兼業農家で、散布作業の時間確保が難しい',
              'ムラのない均一な散布で品質を安定させたい'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-12 text-lg">
            藤倉ドローンが、その時間と労力を<br className="md:hidden" />「ゆとり」に変えます。
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-green-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            サービス概要
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            稲作を中心に、野菜・果樹・茶畑など、作物の特性に応じたドローン散布代行サービス
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Target className="text-green-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">農薬・肥料散布に対応</h3>
                  <p className="text-gray-600">
                    稲作を中心に、野菜・果樹・茶畑など、作物の特性に合わせた農薬散布・肥料散布をドローンで代行いたします。
                    液剤・粒剤など、作物や圃場条件に応じて最適な散布方法をご提案します。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-green-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">スポット・定期対応</h3>
                  <p className="text-gray-600">
                    1回限りのスポット対応から、年間を通じた定期対応まで、お客様のご要望に合わせてご提案いたします。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="text-green-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">現地確認の上でご提案</h3>
                  <p className="text-gray-600">
                    圃場の形状、周辺環境、散布内容を確認させていただき、最適なプランをご提案します。
                    まずはお気軽にご相談ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            プロセス
          </h2>
          <p className="text-center text-gray-600 mb-16 text-base">
            考え方を、かたちに。
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '100%' }}>
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="120"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="80"
                  fill="none"
                  stroke="#d1d5db"
                  strokeWidth="1"
                />

                <text
                  x="200"
                  y="185"
                  textAnchor="middle"
                  className="text-sm md:text-base"
                  fill="#374151"
                  style={{ fontSize: '14px', fontWeight: '500' }}
                >
                  効率を
                </text>
                <text
                  x="200"
                  y="203"
                  textAnchor="middle"
                  className="text-sm md:text-base"
                  fill="#374151"
                  style={{ fontSize: '14px', fontWeight: '500' }}
                >
                  大切に思うのは
                </text>
                <text
                  x="200"
                  y="221"
                  textAnchor="middle"
                  className="text-sm md:text-base"
                  fill="#374151"
                  style={{ fontSize: '14px', fontWeight: '700' }}
                >
                  作物を守り
                </text>
                <text
                  x="200"
                  y="239"
                  textAnchor="middle"
                  className="text-sm md:text-base"
                  fill="#374151"
                  style={{ fontSize: '14px', fontWeight: '700' }}
                >
                  育てるため
                </text>

                <g transform="rotate(-45 200 200)">
                  <path
                    d="M 200 75 L 210 85 L 200 95"
                    fill="none"
                    stroke="#15803d"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>

                <g transform="rotate(45 200 200)">
                  <path
                    d="M 200 75 L 210 85 L 200 95"
                    fill="none"
                    stroke="#15803d"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>

                <g transform="rotate(135 200 200)">
                  <path
                    d="M 200 75 L 210 85 L 200 95"
                    fill="none"
                    stroke="#15803d"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>

                <g transform="rotate(225 200 200)">
                  <path
                    d="M 200 75 L 210 85 L 200 95"
                    fill="none"
                    stroke="#15803d"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>

                <g>
                  <text
                    x="200"
                    y="45"
                    textAnchor="middle"
                    fill="#1f2937"
                    style={{ fontSize: '13px', fontWeight: '600' }}
                  >
                    迷わず飛べる
                  </text>
                  <text
                    x="200"
                    y="61"
                    textAnchor="middle"
                    fill="#1f2937"
                    style={{ fontSize: '13px', fontWeight: '600' }}
                  >
                    地図の作成
                  </text>
                </g>

                <g>
                  <text
                    x="320"
                    y="195"
                    textAnchor="middle"
                    fill="#1f2937"
                    style={{ fontSize: '13px', fontWeight: '600' }}
                  >
                    早さが
                  </text>
                  <text
                    x="320"
                    y="211"
                    textAnchor="middle"
                    fill="#1f2937"
                    style={{ fontSize: '13px', fontWeight: '600' }}
                  >
                    適期散布の
                  </text>
                  <text
                    x="320"
                    y="227"
                    textAnchor="middle"
                    fill="#1f2937"
                    style={{ fontSize: '13px', fontWeight: '600' }}
                  >
                    カギ
                  </text>
                </g>

                <g>
                  <text
                    x="200"
                    y="355"
                    textAnchor="middle"
                    fill="#1f2937"
                    style={{ fontSize: '13px', fontWeight: '600' }}
                  >
                    撒き残しのない
                  </text>
                  <text
                    x="200"
                    y="371"
                    textAnchor="middle"
                    fill="#1f2937"
                    style={{ fontSize: '13px', fontWeight: '600' }}
                  >
                    飛行
                  </text>
                </g>

                <g>
                  <text
                    x="80"
                    y="195"
                    textAnchor="middle"
                    fill="#1f2937"
                    style={{ fontSize: '13px', fontWeight: '600' }}
                  >
                    拠点分散
                  </text>
                  <text
                    x="80"
                    y="211"
                    textAnchor="middle"
                    fill="#1f2937"
                    style={{ fontSize: '13px', fontWeight: '600' }}
                  >
                    体制で
                  </text>
                  <text
                    x="80"
                    y="227"
                    textAnchor="middle"
                    fill="#1f2937"
                    style={{ fontSize: '13px', fontWeight: '600' }}
                  >
                    即対応
                  </text>
                </g>
              </svg>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <MapPin className="text-green-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3">複数拠点体制で対応</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    さいたま本社を中心に、熊谷営業所・千葉営業所を構え、複数拠点体制で幅広い地域に対応しています。
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    拠点を分散することで、繁忙期や急なご相談にも柔軟かつ迅速に対応できる体制を整えています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            藤倉ドローンの強み
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '豊富な実績と信頼',
                description: '年間1,000ヘクタールを超える散布実績。BASF社、株式会社セキド、JA、東京大学などとの継続的な取引実績があります。'
              },
              {
                title: '導入しやすい価格設定',
                description: '1,200円から受注可能です。圃場面積や散布内容により異なりますので、詳細はお気軽にご相談ください。'
              },
              {
                title: '短時間で広範囲を均一散布',
                description: '従来の背負い式と比べ、短時間で広い面積を均一に散布。ムラを抑え、品質の安定につながります。'
              },
              {
                title: '作業負担と安全リスクの軽減',
                description: '重い機材を背負う必要がなく、暑い時期の熱中症リスクや身体的負担を大幅に軽減できます。'
              },
              {
                title: '忙しい時期の時間確保',
                description: '散布作業を任せることで、他の農作業や大切な時間に集中できる「ゆとり」が生まれます。'
              },
              {
                title: '経験に基づく確かな技術',
                description: '稲作圃場での散布経験を活かし、現場に合わせた丁寧な作業を心がけています。'
              },
              {
                title: '柔軟な対応力',
                description: '圃場の条件や天候、お客様のスケジュールに合わせて、柔軟に対応いたします。'
              },
              {
                title: '複数拠点による広域対応',
                description: 'さいたま本社、熊谷営業所、千葉営業所の3拠点体制により、幅広いエリアに迅速に対応。繁忙期や急なご相談にも柔軟にお応えできる体制を整えています。'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="text-green-700" size={24} />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-green-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            ご利用の流れ
          </h2>
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'お問い合わせ',
                description: 'お電話またはお問い合わせフォームからご連絡ください。ご希望の散布内容や圃場の状況を簡単にお聞かせください。'
              },
              {
                step: '02',
                title: 'ヒアリング・現地確認・お見積り',
                description: '詳しい内容をお伺いし、必要に応じて現地確認を行います。その後、最適なプランとお見積りをご提示いたします。'
              },
              {
                step: '03',
                title: '日程調整・散布作業実施',
                description: 'お客様のご都合と天候を考慮して日程を調整し、散布作業を実施いたします。作業後のご報告も丁寧に行います。'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`flex-shrink-0 text-green-700 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600 bg-gray-50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-green-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            お問い合わせ
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="font-bold text-xl text-gray-800 mb-6 flex items-center gap-2">
                <Phone className="text-green-700" size={24} />
                お電話でのお問い合わせ
              </h3>
              <a
                href="tel:048-864-6078"
                className="text-3xl font-bold text-green-700 hover:text-green-800 transition-colors block mb-4"
              >
                048-864-6078
              </a>
              <p className="text-gray-600 text-sm">
                お気軽にお電話ください
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="font-bold text-xl text-gray-800 mb-6 flex items-center gap-2">
                <MapPin className="text-green-700" size={24} />
                会社情報
              </h3>
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800">藤倉ドローン株式会社</p>
                  <p className="text-sm mt-1">〒336-0048<br />埼玉県さいたま市南区内谷2-14-22</p>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-700 mb-2">拠点体制</p>
                  <p className="text-sm">さいたま本社・熊谷営業所・千葉営業所</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="font-bold text-xl text-gray-800 mb-6 flex items-center gap-2">
              <Mail className="text-green-700" size={24} />
              お問い合わせフォーム
            </h3>
            {submitted ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
                <CheckCircle2 className="text-green-700 mx-auto mb-4" size={48} />
                <p className="text-green-800 font-semibold text-lg">
                  お問い合わせありがとうございます
                </p>
                <p className="text-gray-600 mt-2">
                  担当者より折り返しご連絡させていただきます
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    電話番号またはメールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="090-1234-5678 または example@mail.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="散布を希望する圃場の面積、場所、時期など、お気軽にお書きください"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-800 transition-colors shadow-lg"
                >
                  送信する
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">
            © Fujikura Drone Co., Ltd.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
