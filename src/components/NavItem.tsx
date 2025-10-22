import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface NavItemProps {
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
  onClick?: () => void;
  variant?: "default" | "hover" | "active";
}

export function NavItem({ 
  label, 
  icon: Icon, 
  isActive = false, 
  onClick,
  variant = "default"
}: NavItemProps) {
  const state = isActive ? "active" : variant;

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        group relative
        h-12 px-4 py-3
        rounded-full
        border
        transition-all duration-300
        flex items-center gap-3
        cursor-pointer
        min-h-[48px]
        w-full lg:w-auto
        focus:outline-none focus:ring-0 focus:border-transparent
        active:outline-none active:ring-0 active:border-transparent
        ${
          isActive
            ? 'bg-gradient-to-r from-[#6C5CE7] to-[#FF5CA8] border-transparent shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]'
            : 'border-transparent bg-transparent hover:bg-[#e5e5e5]/50 dark:hover:bg-[#1A2235]/80 hover:border-[#d4d4d4]/30 dark:hover:border-white/10'
        }
      `}
      style={{
        fontFamily: "'Inter', 'Poppins', system-ui, -apple-system, sans-serif"
      }}
    >
      {/* Icon */}
      <Icon 
        className={`
          w-5 h-5 relative z-10 flex-shrink-0
          transition-colors duration-300
          ${
            isActive
              ? 'text-white'
              : 'text-[#4A4A4A] dark:text-white/80 group-hover:text-[#333333] dark:group-hover:text-white/95'
          }
        `} 
      />
      
      {/* Label */}
      <span 
        className={`
          relative z-10
          transition-colors duration-300
          ${
            isActive
              ? 'text-white'
              : 'text-[#4A4A4A] dark:text-white/80 group-hover:text-[#333333] dark:group-hover:text-white/95'
          }
        `}
        style={{ 
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '1.5'
        }}
      >
        {label}
      </span>
    </motion.button>
  );
}
