import React, { useState, useEffect } from 'react';
import { ChevronRight, Moon, Sun, Globe, Play, ExternalLink, Search, Menu, Home, TrendingUp, Users, BookOpen, Star, Crown, Zap } from 'lucide-react';

const EducationalPlatform = () => {
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState('en');
  const [hoveredVideo, setHoveredVideo] = useState(null);

  // Sample YouTube content data with premium features
  const content = {
    kids: {
      en: {
        title: "Kids (6+)",
        description: "Premium financial cartoons and interactive learning",
        gradient: "from-purple-400 via-pink-400 to-red-400",
        icon: "🎨",
        videos: [
          {
            id: "1",
            title: "Money Basics for Kids - Premium Animation Series",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "5:23",
            views: "1.2M",
            channel: "EduKids Premium",
            isPremium: true,
            rating: 4.9
          },
          {
            id: "2",
            title: "Saving vs Spending - Interactive Story",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "7:45",
            views: "890K",
            channel: "MoneyToons Studio",
            isPremium: false,
            rating: 4.8
          },
          {
            id: "3",
            title: "What is a Bank? - 3D Learning Experience",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "6:12",
            views: "2.1M",
            channel: "SmartKids Academy",
            isPremium: true,
            rating: 4.9
          }
        ]
      },
      zh: {
        title: "儿童 (6+)",
        description: "高级金融卡通和互动学习",
        gradient: "from-purple-400 via-pink-400 to-red-400",
        icon: "🎨",
        videos: [
          {
            id: "1",
            title: "儿童理财基础 - 高级动画系列",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "5:23",
            views: "1.2M",
            channel: "高级教育儿童",
            isPremium: true,
            rating: 4.9
          },
          {
            id: "2",
            title: "储蓄与消费 - 互动故事",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "7:45",
            views: "890K",
            channel: "金钱卡通工作室",
            isPremium: false,
            rating: 4.8
          },
          {
            id: "3",
            title: "什么是银行？- 3D学习体验",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "6:12",
            views: "2.1M",
            channel: "聪明儿童学院",
            isPremium: true,
            rating: 4.9
          }
        ]
      }
    },
    teens: {
      en: {
        title: "Teens",
        description: "Advanced cryptocurrency and financial history",
        gradient: "from-blue-400 via-cyan-400 to-teal-400",
        icon: "🚀",
        videos: [
          {
            id: "4",
            title: "The Complete History of Money - 4K Documentary",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "12:30",
            views: "3.2M",
            channel: "HistoryHub Pro",
            isPremium: true,
            rating: 4.9
          },
          {
            id: "5",
            title: "Cryptocurrency Masterclass - Complete Guide",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "25:22",
            views: "1.8M",
            channel: "CryptoEducation Elite",
            isPremium: true,
            rating: 4.8
          },
          {
            id: "6",
            title: "Digital Economy Revolution",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "15:18",
            views: "2.5M",
            channel: "TechFinance Innovation",
            isPremium: false,
            rating: 4.7
          }
        ]
      },
      zh: {
        title: "青少年",
        description: "高级加密货币和金融历史",
        gradient: "from-blue-400 via-cyan-400 to-teal-400",
        icon: "🚀",
        videos: [
          {
            id: "4",
            title: "货币的完整历史 - 4K纪录片",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "12:30",
            views: "3.2M",
            channel: "历史中心专业版",
            isPremium: true,
            rating: 4.9
          },
          {
            id: "5",
            title: "加密货币大师课 - 完整指南",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "25:22",
            views: "1.8M",
            channel: "精英加密教育",
            isPremium: true,
            rating: 4.8
          },
          {
            id: "6",
            title: "数字经济革命",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "15:18",
            views: "2.5M",
            channel: "科技金融创新",
            isPremium: false,
            rating: 4.7
          }
        ]
      }
    },
    adults: {
      en: {
        title: "Adults",
        description: "Executive-level investment psychology and strategy",
        gradient: "from-amber-400 via-orange-400 to-red-400",
        icon: "💎",
        videos: [
          {
            id: "7",
            title: "Elite Investment Psychology - Masterclass",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "28:45",
            views: "5.1M",
            channel: "InvestorMind Elite",
            isPremium: true,
            rating: 4.9
          },
          {
            id: "8",
            title: "Advanced Market Psychology & Behavioral Finance",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "32:33",
            views: "3.8M",
            channel: "SmartInvesting Pro",
            isPremium: true,
            rating: 4.8
          },
          {
            id: "9",
            title: "Institutional Trading Strategies Revealed",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "24:12",
            views: "2.7M",
            channel: "MarketPsych Institute",
            isPremium: true,
            rating: 4.9
          }
        ]
      },
      zh: {
        title: "成年人",
        description: "高管级投资心理学和策略",
        gradient: "from-amber-400 via-orange-400 to-red-400",
        icon: "💎",
        videos: [
          {
            id: "7",
            title: "精英投资心理学 - 大师课",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "28:45",
            views: "5.1M",
            channel: "精英投资者心态",
            isPremium: true,
            rating: 4.9
          },
          {
            id: "8",
            title: "高级市场心理学与行为金融学",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "32:33",
            views: "3.8M",
            channel: "专业智能投资",
            isPremium: true,
            rating: 4.8
          },
          {
            id: "9",
            title: "机构交易策略揭秘",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "24:12",
            views: "2.7M",
            channel: "市场心理学研究院",
            isPremium: true,
            rating: 4.9
          }
        ]
      }
    }
  };

  const translations = {
    en: {
      hero: "Master Knowledge",
      heroSub: "Premium Educational Experience",
      subtitle: "Curated premium content from world-class educators and industry experts",
      watchOn: "Watch Premium",
      duration: "Duration",
      home: "Home",
      trending: "Trending",
      subscriptions: "Premium",
      library: "Library",
      searchPlaceholder: "Search premium content...",
      premium: "Premium",
      rating: "Rating"
    },
    zh: {
      hero: "掌握知识",
      heroSub: "高级教育体验",
      subtitle: "来自世界级教育者和行业专家的精选高级内容",
      watchOn: "观看高级版",
      duration: "时长",
      home: "首页",
      trending: "热门",
      subscriptions: "高级版",
      library: "媒体库",
      searchPlaceholder: "搜索高级内容...",
      premium: "高级版",
      rating: "评分"
    }
  };

  const t = translations[language];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const VideoCard = ({ video, ageGroup }) => (
    <div 
      className="group relative bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 cursor-pointer rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-400/20 hover:-translate-y-2"
      onMouseEnter={() => setHoveredVideo(video.id)}
      onMouseLeave={() => setHoveredVideo(null)}
    >
      {video.isPremium && (
        <div className="absolute top-3 left-3 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg">
          <Crown className="w-3 h-3" />
          <span>{t.premium}</span>
        </div>
      )}
      
      <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          onError={(e) => {
  const target = e.target as HTMLImageElement;
  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIiBmaWxsPSIjMUYyOTM3Ii8+CjxwYXRoIGQ9Ik0xMzAgMTAwTDE3MCA4MFYxMjBMMTMwIDEwMFoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+';
}}

        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        
        {hoveredVideo === video.id && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 animate-pulse">
              <Play className="w-10 h-10 text-white ml-1" fill="white" />
            </div>
          </div>
        )}
        
        <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-semibold border border-white/20">
          {video.duration}
        </div>
        
        <div className="absolute bottom-3 left-3 flex items-center space-x-1 text-white text-xs opacity-90">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold">{video.rating}</span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 text-sm leading-relaxed group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 dark:group-hover:from-purple-400 dark:group-hover:to-pink-400 transition-all duration-300">
          {video.title}
        </h3>
        
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
            {video.channel}
          </div>
          {video.isPremium && (
            <Zap className="w-4 h-4 text-yellow-500" />
          )}
        </div>
        
        <div className="text-xs text-gray-500 dark:text-gray-500 font-medium">
          {video.views} views
        </div>
      </div>
    </div>
  );

  const AgeGroupSection = ({ ageGroup, data }) => (
    <section className="mb-16">
      <div className={`relative p-8 mb-8 rounded-3xl bg-gradient-to-r ${data.gradient} shadow-2xl overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-4 mb-2">
              <span className="text-4xl">{data.icon}</span>
              <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                {data.title}
              </h2>
            </div>
            <p className="text-white/90 text-lg font-medium drop-shadow">
              {data.description}
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <ChevronRight className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {data.videos.map((video) => (
          <a key={video.id} href={video.url} target="_blank" rel="noopener noreferrer" className="block">
            <VideoCard video={video} ageGroup={ageGroup} />
          </a>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950 transition-all duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-200">
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                EduElite
              </span>
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="flex w-full">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  className="w-full px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 shadow-lg"
                />
              </div>
              <button className="px-6 py-3 ml-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group">
                <Search className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="md:hidden p-2 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-200">
              <Search className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:block">
                {language === 'en' ? 'EN' : '中文'}
              </span>
            </button>
            
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl">
        <div className="px-6 py-3">
          <div className="flex space-x-2 overflow-x-auto">
            <button className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium whitespace-nowrap shadow-lg">
              <Home className="w-4 h-4" />
              <span>{t.home}</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-sm font-medium whitespace-nowrap transition-all duration-200 border border-gray-200/50 dark:border-gray-700/50">
              <TrendingUp className="w-4 h-4" />
              <span>{t.trending}</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-sm font-medium whitespace-nowrap transition-all duration-200 border border-gray-200/50 dark:border-gray-700/50">
              <Crown className="w-4 h-4 text-yellow-500" />
              <span>{t.subscriptions}</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-sm font-medium whitespace-nowrap transition-all duration-200 border border-gray-200/50 dark:border-gray-700/50">
              <BookOpen className="w-4 h-4" />
              <span>{t.library}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full shadow-lg mb-4">
              Premium Educational Platform
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4 leading-tight">
            {t.hero}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            {t.heroSub}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        {Object.entries(content).map(([ageGroup, data]) => (
          <AgeGroupSection 
            key={ageGroup} 
            ageGroup={ageGroup} 
            data={data[language]} 
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 border-t border-gray-700/50 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              EduElite - Premium Learning Experience
            </h3>
            <p className="text-gray-300 text-lg font-medium">
              Elevating education through world-class content and premium experiences
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EducationalPlatform;