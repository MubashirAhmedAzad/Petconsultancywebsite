import { motion } from "motion/react";
import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";

interface LiveChatButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

// Design Tokens
const tokens = {
  buttonRadius: 9999,
  buttonHeight: 56,
  buttonMinWidth: 180,
  buttonMaxWidth: 360,
  paddingX: 24,
  
  // Light theme gradient
  gradientFromLight: "#1e3a8a", // Deep blue
  gradientToLight: "#f59e0b", // Orange
  
  // Dark theme gradient
  gradientFromDark: "#3b82f6", // Bright blue
  gradientToDark: "#8b5cf6", // Purple
  
  textColor: "#ffffff",
  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
  fontWeight: 600,
  fontSize: 16,
  letterSpacing: "0.2px",
  
  shadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
  shadowHover: "0 8px 24px rgba(0, 0, 0, 0.16)",
  
  iconSize: 20,
  iconGap: 8,
  
  // Focus ring
  focusRingWidth: 2,
  focusRingColor: "#ffffff",
  focusRingGlow: "rgba(255, 255, 255, 0.5)",
};

export function LiveChatButton({ 
  onClick, 
  disabled = false,
  className = ""
}: LiveChatButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98, y: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`
        live-chat-button
        group relative overflow-hidden
        flex items-center justify-center gap-${tokens.iconGap / 4}
        ${className}
      `}
      style={{
        height: `${tokens.buttonHeight}px`,
        minWidth: `${tokens.buttonMinWidth}px`,
        maxWidth: `${tokens.buttonMaxWidth}px`,
        paddingLeft: `${tokens.paddingX}px`,
        paddingRight: `${tokens.paddingX}px`,
        borderRadius: `${tokens.buttonRadius}px`,
        fontFamily: tokens.fontFamily,
        fontSize: `${tokens.fontSize}px`,
        fontWeight: tokens.fontWeight,
        letterSpacing: tokens.letterSpacing,
        color: tokens.textColor,
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        boxShadow: disabled ? "none" : tokens.shadow,
        outline: "none",
      }}
      aria-label="Start live chat support"
      aria-disabled={disabled}
      role="button"
    >
      {/* Light Theme Gradient Background */}
      <div
        className="absolute inset-0 transition-opacity duration-300 dark:opacity-0"
        style={{
          background: `linear-gradient(90deg, ${tokens.gradientFromLight} 0%, ${tokens.gradientToLight} 100%)`,
        }}
      />
      
      {/* Dark Theme Gradient Background */}
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-0 dark:opacity-100"
        style={{
          background: `linear-gradient(90deg, ${tokens.gradientFromDark} 0%, ${tokens.gradientToDark} 100%)`,
        }}
      />

      {/* Hover Highlight Overlay */}
      {!disabled && (
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%)",
          }}
        />
      )}

      {/* Active/Press Overlay */}
      {!disabled && isPressed && (
        <div 
          className="absolute inset-0"
          style={{
            background: "rgba(0, 0, 0, 0.1)",
            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        />
      )}

      {/* Focus Ring */}
      <div 
        className="absolute inset-0 rounded-full opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none"
        style={{
          outline: `${tokens.focusRingWidth}px solid ${tokens.focusRingColor}`,
          outlineOffset: "4px",
          boxShadow: `0 0 0 6px ${tokens.focusRingGlow}`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex items-center gap-2">
        {/* Left Icon - Chat Bubble */}
        <MessageCircle 
          size={tokens.iconSize}
          className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
          strokeWidth={2.5}
          aria-hidden="true"
        />
        
        {/* Text Label */}
        <span className="whitespace-nowrap">
          Start Live Chat
        </span>
        
        {/* Right Icon - Send/Arrow */}
        <Send 
          size={tokens.iconSize}
          className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2.5}
          aria-hidden="true"
        />
      </div>

      {/* Ripple Effect on Click (optional enhancement) */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          initial={{ scale: 0, opacity: 0.5 }}
          whileTap={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
          }}
        />
      )}
    </motion.button>
  );
}

// Floating Action Button Variant (for positioning on page)
export function FloatingLiveChatButton({ 
  onClick,
  disabled = false,
  position = "bottom-right"
}: LiveChatButtonProps & { position?: "bottom-right" | "bottom-left" | "bottom-center" }) {
  const positionStyles = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6", 
    "bottom-center": "bottom-6 left-1/2 -translate-x-1/2",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      className={`fixed z-50 ${positionStyles[position]}`}
    >
      <LiveChatButton onClick={onClick} disabled={disabled} />
    </motion.div>
  );
}

// Export tokens for external use/documentation
export const liveChatButtonTokens = tokens;
