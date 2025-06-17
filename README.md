# GitHub Follow Check

> "내가 팔로우하는 사람들이 나를 팔로우하고 있을까? 🤔"  
> "서로 팔로우하고 있는 사람이 몇 명이나 될까? 👥"  
> "나만 팔로우하고 있는 사람은 누구지? 🔍"

이런 궁금증을 한 번에 해결해 드립니다! GitHub Follow Check는 여러분의 GitHub 팔로워/팔로잉 관계를 한눈에 보여주는 서비스입니다.

## 만들게 된 계기

GitHub에서 활발히 활동하면서 점점 팔로워와 팔로잉이 늘어났는데, 서로 팔로우하고 있는 사람이 누구인지 일일이 확인하기가 어려웠습니다. 
특히 오픈소스 프로젝트에 기여하면서 만난 개발자들과의 관계를 파악하고 싶었는데, GitHub에서는 이런 기능을 제공하지 않더라고요.

그래서 만들었습니다! 클릭 한 번으로:
- 맞팔 관계인 개발자 목록 확인 ✨
- 내가 팔로우는 했지만 맞팔은 안 된 사람들 체크 👀
- 나를 팔로우하고 있지만 내가 놓친 개발자 발견 🎯

<img width="1200" alt="스크린샷 2025-06-17 오후 5 59 35" src="https://github.com/user-attachments/assets/982032f7-7cd1-4989-a4e8-5cb199724f6b" />


## 주요 기능

- **GitHub 사용자 검색**  
  - 사용자명을 입력해 해당 GitHub 계정의 정보를 조회합니다.
- **팔로워/팔로잉 목록 분석**  
  - 팔로워, 팔로잉, 맞팔로우, 단방향 팔로우(내가 팔로우만/상대가 팔로우만) 목록을 구분해 보여줍니다.
- **에러 및 예외 처리**  
  - 존재하지 않는 사용자, API 한도 초과, 네트워크 오류 등 다양한 상황에 맞는 안내 메시지 제공
- **로딩/빈 상태 UI**  
  - 데이터 로딩 중 스피너, 데이터 없음 안내 등 사용자 경험 개선

## 폴더 구조

```
src/
├── components/
│   ├── UserSearch/         # 사용자 검색 UI
│   ├── FollowAnalysis/     # 팔로우 분석 결과 UI
│   └── shared/             # 공용 컴포넌트(스피너 등)
├── hooks/                  # 커스텀 훅
├── services/               # GitHub API 연동 로직
├── types/                  # 타입 정의
└── utils/                  # 공통 유틸리티 함수
```

## 기술 스택

- **프레임워크**: React 18, TypeScript
- **스타일링**: Tailwind CSS
- **상태 관리**: React useState, useReducer
- **API 통신**: Fetch API (GitHub REST API v4)
- **테스트**: React Testing Library, Jest, MSW
- **빌드 도구**: Vite
- **배포**: Vercel, Netlify 등 지원

## 설치 및 실행

1. **의존성 설치**
   ```bash
   npm install
   ```
2. **개발 서버 실행**
   ```bash
   npm run dev
   ```
   브라우저에서 `http://localhost:5173` 접속

3. **프로덕션 빌드**
   ```bash
   npm run build
   ```

4. **테스트 실행**
   ```bash
   npm run test
   ```

## 개발 가이드

- **컴포넌트/훅/서비스/타입/유틸리티**는 각 폴더에 기능별로 분리
- **API 요청/에러 처리**는 `src/services/githubApi.ts`에서 일관성 있게 관리
- **타입 안전성**: any 사용 금지, strict mode 권장
- **접근성/반응형/SEO**: semantic HTML, ARIA, 모바일 우선, 메타 태그 등 적용
- **코드 품질**: ESLint, Prettier, Husky, Lighthouse 등 도구 사용

## 테스트 가이드

- 각 컴포넌트/훅 폴더에 `.test.tsx` 파일로 테스트 작성
- MSW로 GitHub API 모킹
- 정상 동작, 에러, 로딩, 빈 상태, 사용자 상호작용 등 다양한 케이스 커버

## 라이선스

MIT

---

추가 정보나 기여 방법 등은 필요에 따라 자유롭게 확장해 주세요!  
원하는 항목(영문 버전, 스크린샷, 배포 링크 등) 있으면 말씀해 주세요.