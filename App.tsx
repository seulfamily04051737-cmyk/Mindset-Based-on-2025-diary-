
import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Heart, Shield, Zap, Target, BookOpen, AlertCircle, RefreshCcw, ArrowRight,
  TrendingUp, Activity, CheckCircle2, Info, Menu, X, ChevronRight, MessageSquare
} from 'lucide-react';
import { QUARTERLY_ANALYSIS, TOP_ACHIEVEMENTS, INTERNAL_DIALOGUES, STRENGTHS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'emotion' | 'strategy' | 'action'>('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const SectionHeader = ({ title, icon: Icon, subtitle }: { title: string, icon: any, subtitle?: string }) => (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
          <Icon size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      {subtitle && <p className="text-gray-600 ml-11">{subtitle}</p>}
    </div>
  );

  const OverviewTab = () => (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Hero Summary */}
      <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 text-white shadow-xl">
        <h3 className="text-lg font-medium opacity-80 mb-2">2025 한 줄 요약</h3>
        <p className="text-2xl md:text-3xl font-bold leading-tight">
          "불안을 성과로 눌러오던 삶에서, 불안을 다루는 법을 배우며 <br className="hidden md:block" />
          '나로 충분한 기반'을 만들기 시작한 한 해"
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
            <p className="text-xs uppercase tracking-wider opacity-60 mb-1">상태</p>
            <p className="font-semibold text-lg">흔들리지만 방향은 분명함</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
            <p className="text-xs uppercase tracking-wider opacity-60 mb-1">핵심 변화</p>
            <p className="font-semibold text-lg">불안 = 문제 → 불안 = 신호</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
            <p className="text-xs uppercase tracking-wider opacity-60 mb-1">도달 지점</p>
            <p className="font-semibold text-lg">내 편에 서 있는 상태</p>
          </div>
        </div>
      </div>

      {/* Major Mindset Shifts */}
      <section>
        <SectionHeader title="주요 사고방식의 변화" icon={RefreshCcw} subtitle="통제에서 조정으로, 타인에서 자기 기준으로의 이동" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { from: "타인 중심 (반응, 평가)", to: "자기 기준 (불편, 에너지)", label: "판단 기준" },
            { from: "통제 (불안 잠재우기)", to: "조정 (균형 맞추기)", label: "불안 대응" },
            { from: "불안 회피 (싸우기)", to: "불안 인식 (통과시키기)", label: "감정 태도" }
          ].map((shift, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full mb-4">{shift.label}</span>
              <p className="text-gray-400 line-through text-sm mb-2">{shift.from}</p>
              <ArrowRight className="text-indigo-300 mb-2 rotate-90 md:rotate-0" size={20} />
              <p className="text-gray-800 font-bold text-lg">{shift.to}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section>
        <SectionHeader title="올해의 주요 성과 (Top 5)" icon={Target} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOP_ACHIEVEMENTS.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 size={20} />
              </div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h4>
              <p className="text-indigo-600 text-sm font-semibold mb-2">{item.essence}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{item.condition}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const EmotionTab = () => (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section>
        <SectionHeader title="연도별 감정 키워드 맵" icon={Activity} subtitle="긴장에서 안정으로 흘러가는 12개월의 여정" />
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={QUARTERLY_ANALYSIS}>
              <defs>
                <linearGradient id="colorIntensity" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="quarter" stroke="#94a3b8" />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" dataKey="intensity" name="에너지 부하/불안도" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorIntensity)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {QUARTERLY_ANALYSIS.map((q, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="text-6xl font-black">{i + 1}</span>
              </div>
              <h3 className="text-indigo-600 font-bold mb-1">{q.quarter}</h3>
              <h4 className="text-xl font-bold text-gray-800 mb-4">{q.theme}</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {q.keywords.map((kw, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-100">
                    #{kw}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed italic border-l-4 border-indigo-100 pl-4">
                "{q.summary}"
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">{q.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="올해의 강점 지도" icon={TrendingUp} subtitle="감정 데이터가 보여주는 나의 탁월한 역량" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="h-80 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
             <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={STRENGTHS.map(s => ({ subject: s.name, full: 100, A: 80 + Math.random() * 20 }))}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                <PolarRadiusAxis hide />
                <Radar name="강점" dataKey="A" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {STRENGTHS.map((s, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-gray-800">{s.name}</h4>
                  <span className="text-xs text-indigo-500 font-medium">{s.diff}</span>
                </div>
                <p className="text-xs text-gray-500">{s.evidence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const StrategyTab = () => (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section>
        <SectionHeader title="불안 대응 도구함" icon={Shield} subtitle="불안이 왔을 때 꺼내 쓸 수 있는 신경계 안정 문장 세트" />
        <div className="space-y-6">
          {INTERNAL_DIALOGUES.map((dialogue) => (
            <div key={dialogue.level} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-48 bg-indigo-50 p-6 flex flex-col justify-center items-center text-center">
                <span className="text-xs font-bold text-indigo-400 mb-1 uppercase tracking-widest">Level {dialogue.level}</span>
                <h4 className="text-indigo-900 font-bold leading-tight">{dialogue.stage}</h4>
              </div>
              <div className="flex-1 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-xs font-bold text-gray-400 uppercase mb-3 flex items-center gap-1">
                      <AlertCircle size={14} /> 신호 감지
                    </h5>
                    <ul className="space-y-2">
                      {dialogue.signal.map((s, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-indigo-400 mt-1">•</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-indigo-400 uppercase mb-3 flex items-center gap-1">
                      <MessageSquare size={14} /> 내부 대화 문장
                    </h5>
                    <div className="space-y-2">
                      {dialogue.mantra.map((m, idx) => (
                        <div key={idx} className="bg-indigo-50/50 px-3 py-2 rounded-lg text-sm text-indigo-700 font-medium">
                          "{m}"
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-2 text-xs text-gray-400">
                  <Info size={14} /> <strong>Key Point:</strong> {dialogue.point}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="내려놓아야 할 자기 오해" icon={Info} subtitle="나를 제약하던 낡은 프레임을 버리고 진실을 마주하기" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              wrong: "나는 불안이 많고 예민한 사람이다", 
              right: "나는 시스템 이상을 빨리 감지하는 감지력이 높은 사람이다",
              cost: "불안을 고쳐야 할 결함으로 취급하며 에너지를 소진함"
            },
            { 
              wrong: "나는 아직 부족하다 / 더 준비돼야 한다", 
              right: "나는 부족해서 멈춘 게 아니라, 충분해도 멈추지 않는 기준을 써왔다",
              cost: "성취 후에도 불안이 남는 구조가 반복됨"
            },
            { 
              wrong: "나는 잘 버티는 사람이어야 한다", 
              right: "나는 잘 조정해야 오래 가는 지속 가능한 사람이다",
              cost: "회복을 뒤로 미루며 에너지를 한계까지 소모함"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="mb-4">
                <span className="text-xs font-bold text-red-400 uppercase block mb-1">Old Frame</span>
                <p className="text-gray-400 line-through text-sm">{item.wrong}</p>
              </div>
              <div className="mb-4">
                <span className="text-xs font-bold text-indigo-500 uppercase block mb-1">New Truth</span>
                <p className="text-gray-800 font-bold">{item.right}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-50">
                <p className="text-xs text-gray-500 italic leading-relaxed">{item.cost}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const ActionTab = () => (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section>
        <SectionHeader title="2026 운영 헌법" icon={BookOpen} subtitle="지속 가능한 삶을 위해 반드시 지켜야 할 최소 조건" />
        <div className="bg-indigo-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10">
            <Shield size={120} />
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                "안전이 확인되지 않으면 결정하지 않는다",
                "에너지 70% 이상일 때만 확장한다",
                "불안한 날은 '유지 모드'로 전환한다",
                "버틸 수 있어도 버티지 않는 선택을 검토한다"
              ].map((rule, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold shrink-0 mt-1">
                    {idx + 1}
                  </div>
                  <p className="text-lg font-semibold">{rule}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {[
                "관계에서 설명보다 경계를 먼저 둔다",
                "인풋보다 아웃풋을 기본값으로 둔다",
                "잘될수록 일부러 비워둔다"
              ].map((rule, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold shrink-0 mt-1">
                    {idx + 5}
                  </div>
                  <p className="text-lg font-semibold">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader title="4주 리셋 플랜" icon={RefreshCcw} subtitle="실제로 작동하는 현실적인 시스템 재설계" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { week: "1주차: 관측", action: "하루 1회 에너지 상태 기록 및 불안 순간 체크 (분석 금지)" },
            { week: "2주차: 차단", action: "에너지 소진원 1가지 의도적 차단 (예: 인풋 과다)" },
            { week: "3주차: 고정", action: "회복 루틴 1가지를 시간표에 고정 (아무것도 안 하는 30분)" },
            { week: "4주차: 재설계", action: "잘 작동한 것 3개 정리 및 운영 규칙 7가지 최종 수정" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <h4 className="font-bold text-indigo-600 mb-2">{item.week}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{item.action}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center py-12">
        <p className="text-gray-400 text-sm mb-4">
          "올해의 당신은 열심히 사는 법이 아니라, 무너지지 않고 사는 법을 설계했습니다."
        </p>
        <button 
          onClick={() => setActiveTab('overview')}
          className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:underline"
        >
          처음으로 돌아가기 <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );

  const NavItem = ({ id, label, icon: Icon }: { id: any, label: string, icon: any }) => (
    <button
      onClick={() => { setActiveTab(id); setIsMenuOpen(false); }}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
        activeTab === id 
          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
          : 'text-gray-500 hover:bg-gray-100'
      }`}
    >
      <Icon size={18} />
      <span className="font-semibold text-sm">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
            <h1 className="text-lg font-bold text-gray-800">2025 Mindset Analysis</h1>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            <NavItem id="overview" label="연간 회고" icon={Target} />
            <NavItem id="emotion" label="감정 지도" icon={Heart} />
            <NavItem id="strategy" label="대응 전략" icon={Shield} />
            <NavItem id="action" label="운영 규칙" icon={Zap} />
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-2 flex flex-col">
            <NavItem id="overview" label="연간 회고" icon={Target} />
            <NavItem id="emotion" label="감정 지도" icon={Heart} />
            <NavItem id="strategy" label="대응 전략" icon={Shield} />
            <NavItem id="action" label="운영 규칙" icon={Zap} />
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'emotion' && <EmotionTab />}
        {activeTab === 'strategy' && <StrategyTab />}
        {activeTab === 'action' && <ActionTab />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-800 font-bold mb-1">2025 Emotional Analysis Dashboard</p>
            <p className="text-gray-500 text-sm">Generated for sustainable living and growth.</p>
          </div>
          <div className="flex gap-4">
            <div className="text-center p-3">
              <p className="text-2xl font-bold text-indigo-600">12</p>
              <p className="text-xs text-gray-400">Monthly Records</p>
            </div>
            <div className="text-center p-3">
              <p className="text-2xl font-bold text-indigo-600">5</p>
              <p className="text-xs text-gray-400">Core Shifts</p>
            </div>
            <div className="text-center p-3">
              <p className="text-2xl font-bold text-indigo-600">∞</p>
              <p className="text-xs text-gray-400">Potential</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Call-to-Action */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => setActiveTab('strategy')}
          className="bg-indigo-600 text-white p-4 rounded-full shadow-2xl hover:bg-indigo-700 transition-all flex items-center gap-2 group"
        >
          <Shield size={24} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">
            신속 대응 도구함
          </span>
        </button>
      </div>
    </div>
  );
};

export default App;
