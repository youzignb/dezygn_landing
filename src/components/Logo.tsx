import { Sparkles } from 'lucide-react';
import dezignIcon from '../assets/images/logos/dezygn-icon.png';

interface LogoProps {
  variant?: 'default' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Logo = ({ 
  variant = 'default', 
  size = 'md', 
  showText = true, 
  className = '' 
}: LogoProps) => {
  // Size configurations
  const sizeConfig = {
    sm: {
      icon: 'w-6 h-6',
      text: 'text-lg',
      container: 'gap-1'
    },
    md: {
      icon: 'w-8 h-8',
      text: 'text-xl',
      container: 'gap-2'
    },
    lg: {
      icon: 'w-12 h-12',
      text: 'text-3xl',
      container: 'gap-3'
    }
  };

  // Variant configurations
  const variantConfig = {
    default: {
      iconBg: 'bg-gradient-to-r from-purple-600 to-blue-600',
      iconColor: 'text-white',
      textColor: 'text-gray-900'
    },
    light: {
      iconBg: 'bg-gradient-to-r from-purple-400 to-blue-400',
      iconColor: 'text-white',
      textColor: 'text-white'
    },
    dark: {
      iconBg: 'bg-gradient-to-r from-purple-800 to-blue-800',
      iconColor: 'text-white',
      textColor: 'text-gray-900'
    }
  };

  const config = sizeConfig[size];
  const colors = variantConfig[variant];

  // Check if custom logo exists, otherwise use gradient icon
  const useCustomLogo = true; // Enable custom logo for dezygn

  if (useCustomLogo) {
    return (
      <div className={`flex items-center ${config.container} ${className}`}>
        <img 
          src={dezignIcon}
          alt="Dezygn Logo"
          className={`${size === 'sm' ? 'w-6 h-6' : size === 'md' ? 'w-8 h-8' : 'w-12 h-12'} object-contain`}
        />
        {showText && (
          <span className={`${config.text} font-normal ${colors.textColor}`} style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            dezygn
          </span>
        )}
      </div>
    );
  }

  // Fallback gradient logo
  return (
    <div className={`flex items-center ${config.container} ${className}`}>
      <div className={`${config.icon} ${colors.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}>
        <Sparkles className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-7 h-7'} ${colors.iconColor}`} />
      </div>
      {showText && (
        <span className={`${config.text} font-black ${colors.textColor}`}>
          Dezygn
        </span>
      )}
    </div>
  );
};

export default Logo;