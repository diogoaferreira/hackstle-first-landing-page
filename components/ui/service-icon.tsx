type ServiceIconName =
  | "cti"
  | "asm"
  | "assessments"
  | "ciso"
  | "audit"
  | "redteam";

export default function ServiceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const labelMap: Record<ServiceIconName, string> = {
    cti: "Cyber Threat Intelligence",
    asm: "Attack Surface Management",
    assessments: "Security Assessments",
    ciso: "CISO as a Service",
    audit: "Audit & Compliance",
    redteam: "Red Team Operations",
  };

  switch (name) {
    case "cti":
      // Shield with eye
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          role="img"
          aria-label={labelMap[name]}
        >
          <path d="M12 3l7 4v5c0 5-3.5 8.3-7 9-3.5-.7-7-4-7-9V7l7-4z" />
          <path d="M12 9c-2.8 0-5 2.2-5 3s2.2 3 5 3 5-2.2 5-3-2.2-3-5-3zm0 4.2a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" />
        </svg>
      );
    case "asm":
      // Globe network
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          role="img"
          aria-label={labelMap[name]}
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2c2.2 0 4.2.8 5.8 2.1H6.2A9 9 0 0112 4zm-8 8c0-.7.1-1.3.3-2h15.4c.2.7.3 1.3.3 2s-.1 1.3-.3 2H4.3c-.2-.7-.3-1.3-.3-2zm2.2 4.9h13c-1.6 1.3-3.6 2.1-5.8 2.1s-4.2-.8-5.8-2.1z" />
        </svg>
      );
    case "assessments":
      // Target
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          role="img"
          aria-label={labelMap[name]}
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 110 12 6 6 0 010-12zm0 3a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
      );
    case "ciso":
      // Briefcase (standalone CISO icon)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          role="img"
          aria-label={labelMap[name]}
        >
          <path d="M9 3h6a2 2 0 012 2v2h3a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2h3V5a2 2 0 012-2zm1 4V5h4v2H10z" />
        </svg>
      );
    case "audit":
      // Checklist
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          role="img"
          aria-label={labelMap[name]}
        >
          <path d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2zm2 4h6v2H9V8zm0 4h6v2H9v-2zm0 4h6v2H9v-2z" />
          <path d="M6 9l1.5 1.5L9.5 8l1 1-3 3L5 10l1-1z" />
        </svg>
      );
    case "redteam":
      // Crossed swords
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          role="img"
          aria-label={labelMap[name]}
        >
          <path d="M7 3l4 4-6 6-2-2 6-6zm10 0l4 4-6 6-2-2 6-6z" />
          <path d="M11 11l2 2-6 6-2-2 6-6zm6 0l2 2-6 6-2-2 6-6z" />
        </svg>
      );
  }
}
