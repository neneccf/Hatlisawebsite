"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleChange(loc)}
          className={`px-2.5 py-1.5 rounded-md text-xs font-semibold uppercase transition-all duration-200 ${
            locale === loc
              ? "bg-white/15 text-white"
              : "text-white/50 hover:text-white hover:bg-white/5"
          }`}
          aria-label={loc === "pt" ? "Português" : "English"}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
