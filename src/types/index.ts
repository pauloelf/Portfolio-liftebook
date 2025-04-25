export interface ButtonLinkInterdace {
  children: React.ReactNode;
  href: string;
}

export interface CardPostInterface {
  title: string;
  description: string;
  url: string;
  date: string;
}

export interface CardProjectInterface {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  url: string;
  codeURL: string;
}

export interface TooltipItemInterface {
  trigger: string;
  children: React.ReactNode;
}

export interface Skill {
  id?: number;
  name: string;
  icon: string;
}
