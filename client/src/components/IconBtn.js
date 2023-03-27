

export function IconBtn({ Icon, isActive, color, children, ...props }) {
  return (
    <button 
        className={`btn icon-btn ${isActive ? 'icon-btn-ative' : '' } ${color || ''} `}  
        {...props}
    >
        <span className={`${children != null ? 'mr1' : '' }`}>
            <Icon />
        </span>
        {children}
    </button>
  )
}
