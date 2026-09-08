/**
 * Badge — tech stack pill badge
 * @param {'default'|'solid'|'glow'} variant
 */
export default function Badge({ children, variant = 'default', color, className = '' }) {
  const variants = {
    default: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 hover:border-indigo-500/40',
    solid:   'bg-indigo-600 text-white border border-indigo-500',
    glow:    'bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 shadow-glow-sm hover:shadow-glow',
  };

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
        transition-all duration-200 cursor-default select-none
        ${variants[variant]}
        ${className}
      `}
      style={color ? { color, borderColor: `${color}40`, background: `${color}15` } : {}}
    >
      {children}
    </span>
  );
}
