import {
  BrainCircuit,
  Bot,
  CalendarCheck,
  Code2,
  Cpu,
  Gauge,
  Globe,
  Image,
  LayoutTemplate,
  LineChart,
  ListChecks,
  MapPin,
  Megaphone,
  MessageCircleQuestion,
  Palette,
  PenTool,
  Radar,
  Search,
  Share2,
  Smartphone,
  Sparkles,
  Target,
  Terminal,
  TrendingUp,
  Wand2,
  Workflow,
} from "lucide-react";
import type * as React from "react";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/icons/brand-icons";

export type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export const iconMap: Record<string, IconComponent> = {
  Smartphone,
  Globe,
  Terminal,
  Code2,
  BrainCircuit,
  Bot,
  Workflow,
  Cpu,
  Sparkles,
  TrendingUp,
  MapPin,
  Gauge,
  ListChecks,
  MessageCircleQuestion,
  Radar,
  Search,
  Megaphone,
  LineChart,
  Share2,
  CalendarCheck,
  Target,
  PenTool,
  Image,
  LayoutTemplate,
  Wand2,
  Palette,
  Linkedin: LinkedinIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  X: XIcon,
};

export function getIcon(name: string): IconComponent {
  return iconMap[name] ?? Sparkles;
}
