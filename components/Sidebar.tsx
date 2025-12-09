"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, TrendingUp, Activity, Settings } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Retention", href: "/dashboard#retention", icon: TrendingUp },
    { name: "Forecast", href: "/dashboard#forecast", icon: Activity },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <aside
      className="
        w-60 
        h-screen 
        fixed 
        left-0 top-0 
        flex flex-col
        pt-10 
        px-4 py-6 
        bg-sidebar 
        border-r 
        border-sidebar-border
      "
    >
      {/* UA Logo / Title */}
      <div className="mb-8">
        <h1 className="text-xl font-semibold tracking-tight text-sidebar-foreground">
          UA Insights
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href || pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium
                transition-colors
                ${
                  active
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }
              `}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-6 text-xs text-sidebar-foreground/50">
        Universal Audio © {new Date().getFullYear()}
      </div>
    </aside>
  );
}
