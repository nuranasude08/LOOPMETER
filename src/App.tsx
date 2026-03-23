import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home as HomeIcon, 
  Map as MapIcon, 
  QrCode, 
  Wallet as WalletIcon, 
  User,
  Bell,
  TrendingUp,
  History,
  Gift,
  Navigation,
  Recycle,
  CheckCircle2,
  ArrowLeft,
  Search,
  SlidersHorizontal,
  Coffee,
  TreePine,
  Bus,
  ChevronRight,
  Zap,
  Award,
  Settings
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  Tooltip 
} from 'recharts';
import { cn } from './lib/utils';
import { TRANSACTIONS, REWARDS, MACHINES, WEEKLY_DATA } from './constants';

// --- Components ---

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
  const tabs = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'explore', icon: MapIcon, label: 'Explore' },
    { id: 'scan', icon: QrCode, label: 'Scan', isFab: true },
    { id: 'wallet', icon: WalletIcon, label: 'Wallet' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-8 pt-4 glass rounded-t-3xl shadow-2xl">
      <div className="flex justify-around items-center max-w-md mx-auto relative">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          if (tab.isFab) {
            return (
              <div key={tab.id} className="relative -top-10">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90",
                    isActive 
                      ? "bg-primary text-white" 
                      : "bg-gradient-to-br from-primary to-primary-container text-on-primary-container"
                  )}
                >
                  <Icon size={32} />
                </button>
              </div>
            );
          }

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex flex-col items-center gap-1 transition-all duration-300 px-4 py-2 rounded-2xl",
                isActive ? "text-primary bg-primary/10" : "text-zinc-400"
              )}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-bold uppercase tracking-tighter">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

const Header = ({ title, showBack, onBack }: { title: string, showBack?: boolean, onBack?: () => void }) => (
  <header className="sticky top-0 z-50 px-6 py-4 glass flex justify-between items-center">
    <div className="flex items-center gap-3">
      {showBack && (
        <button onClick={onBack} className="p-2 rounded-full bg-zinc-100">
          <ArrowLeft size={20} />
        </button>
      )}
      {!showBack && (
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200" 
            alt="User" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <h1 className="text-xl font-black text-primary uppercase tracking-widest font-headline">{title}</h1>
    </div>
    <button className="p-2 rounded-full hover:bg-zinc-100 transition-colors">
      <Bell size={24} className="text-zinc-600" />
    </button>
  </header>
);

// --- Pages ---

const HomePage = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }}
    className="space-y-8 pb-32"
  >
    {/* Hero Balance */}
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-emerald-900 rounded-3xl p-8 text-white shadow-xl">
      <div className="relative z-10">
        <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Your Balance</p>
        <div className="flex items-baseline gap-2">
          <h2 className="text-5xl font-black tracking-tighter font-headline">2,450</h2>
          <span className="text-xl font-bold text-primary-container">LP</span>
        </div>
        <div className="flex items-center gap-1 mt-4 text-sm font-medium">
          <TrendingUp size={16} />
          <span>+120 LP today</span>
        </div>
      </div>
      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
    </section>

    {/* Level Progress */}
    <section className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h3 className="text-lg font-bold">Eco-Hero</h3>
          <p className="text-xs text-zinc-500 font-medium">Level 4</p>
        </div>
        <span className="text-xs font-bold text-primary">80% to Level 5</span>
      </div>
      <div className="h-3 w-full bg-zinc-100 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '80%' }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full" 
        />
      </div>
      <p className="mt-4 text-[11px] text-zinc-500 leading-relaxed">
        Keep recycling to unlock the <span className="text-tertiary font-bold">"Ocean Guardian"</span> badge!
      </p>
    </section>

    {/* Quick Actions */}
    <section className="grid grid-cols-2 gap-4">
      <button className="col-span-2 bg-zinc-100 p-5 rounded-3xl flex items-center gap-4 group active:scale-95 transition-all">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <MapIcon size={24} />
        </div>
        <div className="text-left">
          <span className="block font-bold">Find Nearest Machine</span>
          <span className="block text-xs text-zinc-500">2.4km away • Open until 10PM</span>
        </div>
      </button>
      <button className="bg-white p-5 rounded-3xl flex flex-col gap-3 border border-zinc-100 shadow-sm active:scale-95 transition-all">
        <History size={24} className="text-secondary" />
        <span className="font-bold text-sm text-left">Transaction History</span>
      </button>
      <button className="bg-white p-5 rounded-3xl flex flex-col gap-3 border border-zinc-100 shadow-sm active:scale-95 transition-all">
        <Gift size={24} className="text-tertiary" />
        <span className="font-bold text-sm text-left">Rewards Store</span>
      </button>
    </section>

    {/* Weekly Summary Chart */}
    <section className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-bold">Weekly Summary</h3>
          <p className="text-2xl font-black text-primary">12kg <span className="text-xs font-medium text-zinc-500">Carbon Saved</span></p>
        </div>
        <div className="bg-primary/10 px-3 py-1 rounded-full">
          <span className="text-[10px] font-bold text-primary uppercase">Last 7 Days</span>
        </div>
      </div>
      <div className="h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={WEEKLY_DATA}>
            <defs>
              <linearGradient id="colorCarbon" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#006a35" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#006a35" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip 
              contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
            />
            <Area 
              type="monotone" 
              dataKey="carbon" 
              stroke="#006a35" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorCarbon)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  </motion.div>
);

const ExplorePage = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    className="h-[calc(100vh-180px)] relative rounded-3xl overflow-hidden border border-zinc-200"
  >
    {/* Mock Map Background */}
    <div className="absolute inset-0 bg-zinc-200">
      <img 
        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
        alt="Map" 
        className="w-full h-full object-cover opacity-50 grayscale"
      />
      {/* Map Pins */}
      <div className="absolute top-1/3 left-1/4">
        <div className="w-10 h-10 bg-primary rounded-full rounded-bl-none rotate-45 flex items-center justify-center shadow-lg border-2 border-white">
          <Recycle size={20} className="-rotate-45 text-white" />
        </div>
      </div>
    </div>

    {/* Search Overlay */}
    <div className="absolute top-4 left-4 right-4 z-10">
      <div className="glass p-2 rounded-full flex items-center gap-3 shadow-lg">
        <Search size={20} className="ml-3 text-zinc-400" />
        <input 
          type="text" 
          placeholder="Search recycling centers..." 
          className="bg-transparent border-none focus:ring-0 flex-1 text-sm font-medium"
        />
        <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
          <SlidersHorizontal size={18} />
        </button>
      </div>
    </div>

    {/* Bottom Sheet Info */}
    <div className="absolute bottom-4 left-4 right-4 z-10">
      <div className="bg-white p-6 rounded-3xl shadow-2xl border border-zinc-100">
        <div className="w-12 h-1 bg-zinc-200 rounded-full mx-auto mb-6" />
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 bg-primary-container text-on-primary-container text-[10px] font-bold rounded-full uppercase tracking-widest">Available</span>
              <span className="text-zinc-500 text-xs font-medium">320m away</span>
            </div>
            <h2 className="text-2xl font-black font-headline tracking-tight">EcoLoop Hub #42</h2>
            <p className="text-sm text-zinc-500">Friedrichstraße 12, Mitte, Berlin</p>
          </div>
          <button className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600">
            <Navigation size={24} />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {['Plastic', 'Metal', 'Paper'].map((type, i) => (
            <div key={type} className="bg-zinc-50 p-3 rounded-2xl text-center">
              <p className="text-[10px] font-bold text-zinc-400 uppercase mb-1">{type}</p>
              <p className="text-sm font-black">{i === 2 ? 'Full' : i === 0 ? '85%' : '22%'}</p>
            </div>
          ))}
        </div>
        <button className="w-full py-4 bg-zinc-900 text-white rounded-full font-bold flex items-center justify-center gap-2 active:scale-95 transition-all">
          <Navigation size={18} />
          Start Navigation
        </button>
      </div>
    </div>
  </motion.div>
);

const ScanPage = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  React.useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        // Try environment camera first with ideal constraints
        const constraints = { 
          video: { 
            facingMode: { ideal: 'environment' },
            width: { ideal: 1280 },
            height: { ideal: 720 }
          } 
        };
        
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.warn("Ideal camera access failed, trying fallback:", err);
        try {
          // Fallback to any available video source
          stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (fallbackErr) {
          console.error("All camera access attempts failed:", fallbackErr);
          setError("Kameraya erişilemedi. Lütfen tarayıcı izinlerini ve kamera bağlantısını kontrol edin.");
        }
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="h-[calc(100vh-180px)] relative rounded-3xl overflow-hidden bg-black"
    >
      {/* Live Camera View */}
      <div className="absolute inset-0">
        {error ? (
          <div className="flex flex-col items-center justify-center h-full text-white text-center p-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <Settings size={32} className="text-zinc-400" />
            </div>
            <p className="text-sm font-medium opacity-80">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-white/10 rounded-full text-xs font-bold"
            >
              Yeniden Dene
            </button>
          </div>
        ) : (
          <video 
            ref={videoRef}
            autoPlay 
            playsInline 
            muted 
            className="w-full h-full object-cover opacity-80"
          />
        )}
      </div>

      {/* Scanner Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 pointer-events-none">
        <p className="text-white font-bold text-lg text-center mb-8 drop-shadow-lg">
          Scan the QR code on the LoopMeter machine to start.
        </p>
        
        <div className="relative w-64 h-64 border-2 border-primary/40 rounded-3xl">
          <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-xl" />
          <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-xl" />
          <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-xl" />
          <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-xl" />
          <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 animate-scan" />
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
          <div className="w-2 h-2 bg-primary-container rounded-full animate-pulse" />
          <span className="text-white text-sm font-medium">Connecting to Machine #LM-042...</span>
        </div>
      </div>

      {/* Live Deposit Card - Interactive Slide Up */}
      <motion.div 
        initial={false}
        animate={{ y: isExpanded ? 0 : 200 }}
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        className="absolute bottom-4 left-4 right-4 z-30"
      >
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="glass p-6 rounded-3xl shadow-2xl cursor-pointer select-none"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Recycle size={20} className="text-primary" />
              <h2 className="font-bold">Live Deposit</h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase">Active</span>
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                <ChevronRight size={20} className="text-zinc-400 rotate-90" />
              </motion.div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-zinc-100/50 p-3 rounded-2xl text-center">
              <p className="text-[10px] font-bold text-zinc-500 uppercase mb-1">Type</p>
              <p className="text-xs font-bold truncate">Plastic Bottle</p>
            </div>
            <div className="bg-zinc-100/50 p-3 rounded-2xl text-center">
              <p className="text-[10px] font-bold text-zinc-500 uppercase mb-1">Weight</p>
              <p className="text-xs font-bold">0.5kg</p>
            </div>
            <div className="bg-primary/10 p-3 rounded-2xl text-center">
              <p className="text-[10px] font-bold text-primary uppercase mb-1">Points</p>
              <p className="text-xs font-extrabold text-primary">+15 LP</p>
            </div>
          </div>
          <button className="w-full py-4 bg-primary text-white rounded-full font-bold flex items-center justify-center gap-2 active:scale-95 transition-all">
            Finish Deposit
            <CheckCircle2 size={18} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const WalletPage = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }}
    className="space-y-8 pb-32"
  >
    {/* Balance Card */}
    <section className="bg-gradient-to-br from-primary to-emerald-900 rounded-3xl p-8 text-white shadow-xl">
      <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Total Balance</p>
      <div className="flex items-baseline gap-2">
        <h2 className="text-5xl font-black tracking-tighter font-headline">2,450</h2>
        <span className="text-xl font-bold text-primary-container">LP</span>
      </div>
      <div className="mt-8 flex gap-3">
        <button className="flex-1 py-3 bg-primary-container text-on-primary-container rounded-full font-bold text-sm active:scale-95 transition-all">
          Add Funds
        </button>
        <button className="flex-1 py-3 bg-white/10 text-white rounded-full font-bold text-sm backdrop-blur-sm active:scale-95 transition-all">
          Transfer
        </button>
      </div>
    </section>

    {/* Recent Activity */}
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">Activity</h3>
        <button className="text-primary text-sm font-bold">See All</button>
      </div>
      <div className="space-y-3">
        {TRANSACTIONS.map((tx) => (
          <div key={tx.id} className="flex items-center gap-4 p-4 rounded-3xl bg-white border border-zinc-100 shadow-sm">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center",
              tx.type === 'deposit' ? "bg-primary/10 text-primary" : 
              tx.type === 'reward' ? "bg-secondary/10 text-secondary" : "bg-tertiary/10 text-tertiary"
            )}>
              {tx.icon === 'Recycle' ? <Recycle size={20} /> : tx.icon === 'Coffee' ? <Coffee size={20} /> : <TreePine size={20} />}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold">{tx.title}</h4>
              <p className="text-[10px] text-zinc-500">{tx.date}</p>
            </div>
            <span className={cn(
              "text-sm font-black",
              tx.amount > 0 ? "text-primary" : "text-zinc-900"
            )}>
              {tx.amount > 0 ? `+${tx.amount}` : tx.amount} LP
            </span>
          </div>
        ))}
      </div>
    </section>

    {/* Rewards Section */}
    <section className="space-y-6">
      <div className="flex gap-2 p-1 bg-zinc-100 rounded-full">
        <button className="flex-1 py-2 rounded-full text-sm font-bold bg-white shadow-sm">Rewards</button>
        <button className="flex-1 py-2 rounded-full text-sm font-bold text-zinc-500">Donations</button>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-2xl font-black font-headline tracking-tight">Eco Rewards</h3>
        {REWARDS.map((reward) => (
          <div key={reward.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img src={reward.image} alt={reward.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              {reward.isNew && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-primary">New</span>
              )}
            </div>
            <div className="p-5 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold">{reward.title}</h4>
                  <p className="text-xs text-zinc-500">{reward.description}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-600">
                  {reward.category === 'Transport' ? <Bus size={20} /> : <Coffee size={20} />}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-black text-primary">{reward.cost} LP</span>
                <button className="px-6 py-2 bg-primary text-white text-xs font-bold rounded-full active:scale-95 transition-all">Redeem</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

const ProfilePage = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }} 
    animate={{ opacity: 1, scale: 1 }}
    className="space-y-8 pb-32"
  >
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-primary to-primary-container">
        <div className="w-full h-full rounded-full border-4 border-white overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-black font-headline">Alex Thompson</h2>
        <p className="text-sm font-bold text-primary uppercase tracking-widest">Eco-Hero Level 4</p>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-4">
      {[
        { label: 'Recycled', value: '124', unit: 'items', icon: Recycle },
        { label: 'Impact', value: '12', unit: 'kg CO2', icon: Zap },
        { label: 'Rank', value: '#42', unit: 'Global', icon: Award },
      ].map((stat) => (
        <div key={stat.label} className="bg-white p-4 rounded-3xl text-center border border-zinc-100 shadow-sm">
          <stat.icon size={20} className="mx-auto mb-2 text-zinc-400" />
          <p className="text-xl font-black text-zinc-900">{stat.value}</p>
          <p className="text-[10px] font-bold text-zinc-500 uppercase">{stat.label}</p>
        </div>
      ))}
    </div>

    <div className="space-y-3">
      {[
        { label: 'Achievements', icon: Award },
        { label: 'My Impact Report', icon: TrendingUp },
        { label: 'Settings', icon: Settings },
      ].map((item) => (
        <button key={item.label} className="w-full p-5 bg-white rounded-3xl flex items-center justify-between border border-zinc-100 shadow-sm active:scale-[0.98] transition-all">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-600">
              <item.icon size={20} />
            </div>
            <span className="font-bold">{item.label}</span>
          </div>
          <ChevronRight size={20} className="text-zinc-300" />
        </button>
      ))}
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home': return <HomePage />;
      case 'explore': return <ExplorePage />;
      case 'scan': return <ScanPage />;
      case 'wallet': return <WalletPage />;
      case 'profile': return <ProfilePage />;
      default: return <HomePage />;
    }
  };

  const titles: Record<string, string> = {
    home: 'LoopMeter',
    explore: 'Explore',
    scan: 'Scanner',
    wallet: 'My Wallet',
    profile: 'Profile',
  };

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative shadow-2xl">
      <Header 
        title={titles[activeTab]} 
        showBack={activeTab !== 'home'} 
        onBack={() => setActiveTab('home')}
      />
      
      <main className="px-6 pt-6">
        <AnimatePresence mode="wait">
          <div key={activeTab}>
            {renderPage()}
          </div>
        </AnimatePresence>
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
