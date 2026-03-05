interface ServiceIconProps {
  type: "technology" | "finance" | "procurement" | "marketing" | "logistics";
  className?: string;
}

export default function ServiceIcon({ type, className = "w-12 h-12" }: ServiceIconProps) {
  const icons: Record<string, React.ReactNode> = {
    technology: (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12C8 9.79 9.79 8 12 8H36C38.21 8 40 9.79 40 12V30C40 32.21 38.21 34 36 34H12C9.79 34 8 32.21 8 30V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 40H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 34V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 18L21 22L17 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 26H31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    finance: (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 38H42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 38V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 38V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 38V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M34 38V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M42 38V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 28L16 22L24 26L32 18L40 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0" />
        <circle cx="40" cy="12" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    procurement: (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18H36C37.1 18 38 18.9 38 20V38C38 39.1 37.1 40 36 40H12C10.9 40 10 39.1 10 38V20C10 18.9 10.9 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 18V14C16 11.79 17.79 10 20 10H28C30.21 10 32 11.79 32 14V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 24H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 24V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 24V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    marketing: (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 12L34 8V36L10 32V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 12V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M34 14H38C39.1 14 40 14.9 40 16V28C40 29.1 39.1 30 38 30H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 32L12 42H18L20 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    logistics: (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14H28V34H4V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 20H36L42 26V34H28V20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="34" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="36" cy="34" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  };

  return icons[type] || null;
}
