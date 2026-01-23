# Doctalk Design System

shadcn/ui 기반의 React 컴포넌트 라이브러리입니다.

## 설치

```bash
npm install doctalk-design-system
```

## 사용법

### 1. CSS 스타일 import

프로젝트의 진입점 파일(예: `main.tsx` 또는 `App.tsx`)에 스타일을 import합니다:

```tsx
import "doctalk-design-system/styles.css"
```

### 2. Tailwind CSS 설정

프로젝트에서 Tailwind CSS를 사용하는 경우, `tailwind.config.js`의 content에 패키지 경로를 추가합니다:

```js
module.exports = {
  content: [
    // ... 기존 설정
    "./node_modules/doctalk-design-system/**/*.{js,ts,jsx,tsx}",
  ],
  // ... 기타 설정
}
```

### 3. 컴포넌트 사용

```tsx
import { Button, Card, Input } from "doctalk-design-system"

function App() {
  return (
    <Card>
      <Input placeholder="이메일을 입력하세요" />
      <Button>제출</Button>
    </Card>
  )
}
```

## 포함된 컴포넌트

- **기본 UI**: Button, Input, Textarea, Label, Badge, Separator
- **폼**: Form, Checkbox, Radio Group, Select, Switch, Slider
- **레이아웃**: Card, Accordion, Collapsible, Tabs, Resizable
- **오버레이**: Dialog, Sheet, Drawer, Popover, Tooltip, Hover Card
- **내비게이션**: Navigation Menu, Menubar, Dropdown Menu, Context Menu, Breadcrumb
- **피드백**: Alert, Alert Dialog, Toast (Sonner), Progress, Skeleton, Spinner
- **데이터 표시**: Table, Avatar, Calendar, Chart, Carousel, Pagination
- **기타**: Command, Scroll Area, Aspect Ratio, Toggle, Input OTP

## 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 라이선스

MIT
