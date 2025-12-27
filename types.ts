
export interface QuarterlyData {
  quarter: string;
  theme: string;
  keywords: string[];
  description: string;
  summary: string;
  intensity: number; // 0 to 100 representing emotional turbulence/effort
}

export interface Achievement {
  id: number;
  title: string;
  essence: string;
  condition: string;
}

export interface InternalDialogue {
  level: number;
  stage: string;
  signal: string[];
  mantra: string[];
  point: string;
}

export interface Strength {
  name: string;
  evidence: string;
  situation: string;
  diff: string;
}
