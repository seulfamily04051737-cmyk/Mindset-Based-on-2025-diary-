
import { QuarterlyData, Achievement, InternalDialogue, Strength } from './types';

export const QUARTERLY_ANALYSIS: QuarterlyData[] = [
  {
    quarter: "1분기 (1~3월)",
    theme: "긴장 속에서 버티는 시기",
    keywords: ["불안", "압박감", "책임감", "예민함", "조급함"],
    description: "마음이 늘 '해야 할 것' 쪽으로 기울어 있으며, 쉬는 시간에도 머릿속은 계속 가동되었습니다.",
    summary: "지금 멈추면 안 될 것 같아. 이 정도로는 부족해.",
    intensity: 85
  },
  {
    quarter: "2분기 (4~6월)",
    theme: "피로 인식이 시작된 시기",
    keywords: ["피곤함", "공허함", "짜증", "회의감", "무기력"],
    description: "계속 애쓰고 있는데 만족은 줄어들고, '왜 이렇게까지 해야 하지?'라는 질문이 등장했습니다.",
    summary: "계속 이렇게 살아도 괜찮을까? 나만 너무 애쓰는 건 아닐까?",
    intensity: 70
  },
  {
    quarter: "3분기 (7~9월)",
    theme: "멈춤과 재정렬의 시기",
    keywords: ["안도", "낯섦", "평온", "회복", "안정"],
    description: "휴직과 돌봄으로 속도가 느려지며 '아무것도 안 해도 괜찮다'는 감각을 처음 체험했습니다.",
    summary: "이래도 괜찮네? 세상이 나를 바로 버리지는 않네.",
    intensity: 30
  },
  {
    quarter: "4분기 (10~12월)",
    theme: "불안을 다룰 수 있게 된 시기",
    keywords: ["감사", "안정", "충만감", "자기 신뢰"],
    description: "불안을 쫓아내야 할 대상이 아닌, 인지하고 대응할 신호로 인식하기 시작했습니다.",
    summary: "불안이 오려는 걸 알아. 지금은 안전해. 이 정도면 충분해.",
    intensity: 45
  }
];

export const TOP_ACHIEVEMENTS: Achievement[] = [
  { id: 1, title: "불안의 관리 대상화", essence: "감정 → 행동 자동화 차단", condition: "불안 초입에서 '안전 확인' 문장 사용" },
  { id: 2, title: "AI 실무 성과 연결", essence: "트렌드 소비에서 실전 적용으로", condition: "Figma AI 등 즉시 테스트 및 업무 도입" },
  { id: 3, title: "인지 기능 회복", essence: "기억력 및 상황 판단력 강화", condition: "돌봄 상황 속에서도 문제 해결력 유지" },
  { id: 4, title: "기본 자기신뢰 형성", essence: "조건부 자기확신에서 상시 신뢰로", condition: "이 정도면 충분하다는 감각 체화" },
  { id: 5, title: "운영 철학 명문화", essence: "감각을 기준으로 정립", condition: "진화하는 삶, 불편은 줄이고 만족은 늘리기" }
];

export const INTERNAL_DIALOGUES: InternalDialogue[] = [
  {
    level: 1,
    stage: "미세 신호 (불안 직전)",
    signal: ["가슴 답답함", "얕은 호흡", "이유 없는 긴장"],
    mantra: ["지금 위협은 없다", "이건 위험이 아니라 신호다", "나는 지금 안전하다"],
    point: "상황 분석 전에 안전 확인부터 하세요."
  },
  {
    level: 2,
    stage: "인지 구간 (분명해진 불안)",
    signal: ["'혹시'라는 생각", "미래 시뮬레이션", "해결 욕구"],
    mantra: ["지금 당장 해결할 문제는 없다", "지금은 판단의 시간이 아니다"],
    point: "해결과 판단을 잠시 유예하세요."
  },
  {
    level: 3,
    stage: "행동 충동 구간 (불안 고조)",
    signal: ["압박감", "메시지 발송 욕구", "계획 수정 충동"],
    mantra: ["지금 움직이면 불안이 커진다", "멈추는 것이 더 나은 선택이다"],
    point: "아무것도 안 하기가 최고의 전략입니다."
  },
  {
    level: 4,
    stage: "감정 동반 구간 (불안의 정점)",
    signal: ["이유 없는 눈물", "갑작스러운 피로", "자기 의심"],
    mantra: ["이 감정은 지나간다", "지금의 나는 보호받아야 한다"],
    point: "설명하지 말고 공감 언어만 사용하세요."
  },
  {
    level: 5,
    stage: "회복 구간 (안정화)",
    signal: ["깊어지는 숨", "사고 속도 완화", "긴장 해소"],
    mantra: ["잘 지나왔다", "나는 나를 지킬 수 있다"],
    point: "스스로를 충분히 칭찬해 주세요."
  }
];

export const STRENGTHS: Strength[] = [
  { name: "불안 감지력", evidence: "불안 단계별 인식", situation: "갈등·비교 상황", diff: "초기 신호에서 즉시 조정" },
  { name: "구조화 능력", evidence: "AI·업무·재정 정리", situation: "복잡한 문제 해결", diff: "생각을 시스템화하여 해결" },
  { name: "실행 전 테스트", evidence: "AI 도구 즉시 실험", situation: "업무 개선 필요시", diff: "리스크 최소화 및 빠른 적용" },
  { name: "회복 탄력성", evidence: "휴직 후 안정적 복귀", situation: "급격한 환경 변화", diff: "빠른 리셋과 적응" },
  { name: "자기 관찰력", evidence: "반복 패턴 언어화", situation: "일기 및 회고", diff: "객관적 자기 객관화" }
];
