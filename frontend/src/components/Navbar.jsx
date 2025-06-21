import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useThemeStore } from "../store/useThemeStore";
import { LogOut, User, Settings } from "lucide-react";

// ILinkU Logo Component
const ILinkULogo = ({ size = 'normal' }) => {
  const sizeClasses = {
    small: 'h-8',
    normal: 'h-10',
    large: 'h-12'
  };

  const textSizeClasses = {
    small: 'text-lg',
    normal: 'text-xl',
    large: 'text-2xl'
  };

  return (
    <div className="group flex items-center gap-3 transition-all duration-300 hover:scale-105">
      {/* Logo Icon */}
      <div className={`relative ${sizeClasses[size]} aspect-square rounded-2xl
                      bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
                      flex items-center justify-center shadow-lg
                      group-hover:shadow-xl group-hover:shadow-blue-500/25
                      transition-all duration-300`}>
        
        {/* Chain Link Icon with Chat Bubble Shape */}
        <div className="relative flex items-center justify-center">
          {/* Left Link (I) */}
          <div className="relative">
            <div className="w-3 h-4 border-2 border-white rounded-full 
                           bg-gradient-to-br from-white/20 to-transparent
                           transform -rotate-12 transition-transform duration-300
                           group-hover:rotate-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[6px] font-bold text-white">I</span>
              </div>
            </div>
          </div>
          
          {/* Connecting Element */}
          <div className="w-1 h-0.5 bg-white/80 mx-0.5 rounded-full
                         transition-all duration-300 group-hover:w-1.5"></div>
          
          {/* Right Link (U) */}
          <div className="relative">
            <div className="w-3 h-4 border-2 border-white rounded-full
                           bg-gradient-to-br from-white/20 to-transparent
                           transform rotate-12 transition-transform duration-300
                           group-hover:rotate-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[6px] font-bold text-white">U</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0
                        transition-opacity duration-300 group-hover:opacity-100"></div>
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/30 to-purple-400/30
                        animate-pulse opacity-50"></div>
      </div>

      {/* Typography */}
      <h1 className={`font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
                     bg-clip-text text-transparent ${textSizeClasses[size]}
                     transition-all duration-300 group-hover:from-blue-500
                     group-hover:via-purple-500 group-hover:to-pink-500`}
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        ILinkU
      </h1>
    </div>
  );
};

const Navbar = () => {
  const { authUser, logout } = useAuthStore();
  const { theme } = useThemeStore();

  return (
    <header
      data-theme={theme}
      className="fixed top-0 z-50 w-full backdrop-blur-xl
                 bg-base-100/70 border-b border-base-200/50
                 transition-all duration-300"
    >
      <div className="container mx-auto h-16 px-6">
        <div className="flex h-full items-center justify-between">

          {/* Logo */}
          <Link to="/" className="transition-all duration-300">
            <ILinkULogo size="normal" />
          </Link>

          {/* Right‑hand nav */}
          <nav className="flex items-center gap-2">

            {/* Settings (always) */}
            <Link
              to="/settings"
              className="group relative flex items-center gap-2.5 rounded-xl
                         px-4 py-2.5 text-base-content/80 hover:text-base-content
                         hover:bg-base-200/70 transition-all duration-200"
            >
              <Settings className="size-4 transition-transform duration-300 group-hover:rotate-90" />
              <span className="hidden sm:inline text-sm font-medium">Settings</span>
              <div className="absolute inset-0 rounded-xl bg-base-200/50 opacity-0
                              transition-opacity duration-200 group-hover:opacity-100" />
            </Link>

            {/* Auth‑only items */}
            {authUser && (
              <div className="ml-1 flex items-center gap-2 animate-in slide-in-from-right-5 duration-300">

                <Link
                  to="/profile"
                  className="group relative flex items-center gap-2.5 rounded-xl
                             px-4 py-2.5 text-base-content/80 hover:text-primary
                             hover:bg-primary/10 transition-all duration-200"
                >
                  <User className="size-4 transition-transform duration-200 group-hover:scale-110" />
                  <span className="hidden sm:inline text-sm font-medium">Profile</span>
                  <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0
                                  transition-opacity duration-200 group-hover:opacity-100" />
                </Link>

                <button
                  onClick={logout}
                  className="group relative flex items-center gap-2.5 rounded-xl
                             px-4 py-2.5 text-base-content/70 hover:text-error
                             hover:bg-error/10 transition-all duration-200"
                >
                  <LogOut className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  <span className="hidden sm:inline text-sm font-medium">Logout</span>
                  <div className="absolute inset-0 rounded-xl bg-error/10 opacity-0
                                  transition-opacity duration-200 group-hover:opacity-100" />
                </button>

              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;