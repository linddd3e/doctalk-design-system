# Doctalk Design System 구축 가이드

shadcn/ui 기반 React 컴포넌트 라이브러리를 npm 패키지로 배포하는 전체 과정을 정리한 문서입니다.

---

## 목차

1. [프로젝트 초기화](#1-프로젝트-초기화)
2. [Tailwind CSS 설정](#2-tailwind-css-설정)
3. [shadcn/ui 설정](#3-shadcnui-설정)
4. [컴포넌트 추가](#4-컴포넌트-추가)
5. [라이브러리 빌드 설정](#5-라이브러리-빌드-설정)
6. [npm 배포 설정](#6-npm-배포-설정)
7. [GitHub 업로드](#7-github-업로드)
8. [npm 배포](#8-npm-배포)
9. [사용 방법](#9-사용-방법)

---

## 1. 프로젝트 초기화

### Vite + React + TypeScript 프로젝트 생성

```bash
npm create vite@latest doctalk-design-system -- --template react-ts
cd doctalk-design-system
npm install
```

### 생성된 구조

```
doctalk-design-system/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

---

## 2. Tailwind CSS 설정

### 설치

```bash
npm install -D tailwindcss@^3.4.0 postcss autoprefixer
npx tailwindcss init -p
```

> **주의**: shadcn/ui는 Tailwind CSS v3을 사용합니다. v4가 아닌 v3을 설치해야 합니다.

### tailwind.config.js 설정

```js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### src/index.css 설정

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

---

## 3. shadcn/ui 설정

### 필수 의존성 설치

```bash
npm install -D @types/node tailwindcss-animate
npm install clsx tailwind-merge class-variance-authority lucide-react
```

### Path Alias 설정

#### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "declaration": true,
    "declarationMap": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

#### vite.config.ts

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### components.json 생성

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### 유틸리티 함수 생성

#### src/lib/utils.ts

```ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 디렉토리 구조 생성

```bash
mkdir -p src/lib src/components/ui src/hooks
```

---

## 4. 컴포넌트 추가

### 전체 컴포넌트 일괄 추가

```bash
npx shadcn@latest add --all --yes
```

### 추가되는 컴포넌트 목록 (53개)

- accordion, alert, alert-dialog, aspect-ratio, avatar
- badge, breadcrumb, button, button-group
- calendar, card, carousel, chart, checkbox, collapsible, command, context-menu
- dialog, drawer, dropdown-menu
- empty, field, form
- hover-card
- input, input-group, input-otp, item
- kbd
- label
- menubar
- navigation-menu
- pagination, popover, progress
- radio-group, resizable
- scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, switch
- table, tabs, textarea, toggle, toggle-group, tooltip

### 컴포넌트 파일 위치 수정

shadcn CLI가 `@/` 경로를 폴더로 생성할 수 있습니다. 이 경우:

```bash
mv @/components/ui/* src/components/ui/
mv @/hooks/* src/hooks/
rm -rf @
```

---

## 5. 라이브러리 빌드 설정

### tsup 설치

```bash
npm install -D tsup
```

### tsup.config.ts 생성

```ts
import { defineConfig } from "tsup"
import path from "path"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  treeshake: true,
  minify: false,
  banner: {
    js: '"use client";',
  },
  esbuildOptions(options) {
    options.alias = {
      "@": path.resolve(__dirname, "./src"),
    }
  },
})
```

### src/index.ts 엔트리 포인트 생성

```ts
// Utility functions
export { cn } from "./lib/utils"

// Hooks
export { useIsMobile } from "./hooks/use-mobile"

// UI Components
export * from "./components/ui/accordion"
export * from "./components/ui/alert"
export * from "./components/ui/alert-dialog"
export * from "./components/ui/button"
export * from "./components/ui/card"
// ... 모든 컴포넌트 export
```

### 빌드 시 발생할 수 있는 문제 해결

#### 1. 순환 참조 문제

일부 컴포넌트가 자기 자신을 import하는 경우:

```ts
// 잘못된 예 (input-otp.tsx)
import { OTPInput } from "@/components/ui/input-otp"

// 올바른 예
import { OTPInput } from "input-otp"
```

```ts
// 잘못된 예 (sonner.tsx)
import { Toaster as Sonner } from "@/components/ui/sonner"

// 올바른 예
import { Toaster as Sonner } from "sonner"
```

#### 2. Type-only import 문제

`verbatimModuleSyntax`가 활성화된 경우:

```ts
// 잘못된 예
import { ButtonProps, buttonVariants } from "@/components/ui/button"

// 올바른 예
import { type ButtonProps, buttonVariants } from "@/components/ui/button"
```

#### 3. 패키지 API 변경

`react-resizable-panels` v3 이상:

```ts
// 이전 API
import { PanelGroup, PanelResizeHandle } from "react-resizable-panels"

// 새 API
import { Group, Panel, Separator } from "react-resizable-panels"
```

---

## 6. npm 배포 설정

### package.json 설정

```json
{
  "name": "doctalk-design-system",
  "version": "0.1.0",
  "description": "Doctalk Design System - A React component library based on shadcn/ui",
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.js"
      },
      "require": {
        "types": "./dist/index.d.cts",
        "default": "./dist/index.cjs"
      }
    },
    "./styles.css": "./dist/styles.css"
  },
  "files": [
    "dist",
    "README.md"
  ],
  "sideEffects": [
    "**/*.css"
  ],
  "scripts": {
    "dev": "vite",
    "build": "tsup && npm run build:css",
    "build:css": "npx tailwindcss -i ./src/index.css -o ./dist/styles.css --minify",
    "prepublishOnly": "npm run build"
  },
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0"
  },
  "keywords": [
    "doctalk",
    "design-system",
    "react",
    "shadcn",
    "tailwindcss"
  ],
  "license": "MIT"
}
```

### 빌드 실행

```bash
npm run build
```

### 빌드 결과물

```
dist/
├── index.js          # ESM 빌드
├── index.cjs         # CommonJS 빌드
├── index.d.ts        # TypeScript 타입 정의
├── index.d.cts       # CJS 타입 정의
├── index.js.map      # 소스맵
├── index.cjs.map     # 소스맵
└── styles.css        # CSS 스타일
```

---

## 7. GitHub 업로드

### Git 초기화

```bash
git init
git add .
git commit -m "Initial commit: Doctalk Design System"
```

### GitHub 저장소 생성

1. https://github.com/new 접속
2. Repository name: `doctalk-design-system`
3. **"Add a README file"** 체크 해제
4. Create repository 클릭

### Remote 설정 및 Push

```bash
git remote add origin https://github.com/YOUR_USERNAME/doctalk-design-system.git
git push -u origin main
```

---

## 8. npm 배포

### npm 로그인

```bash
npm login
```

### 패키지 배포

```bash
npm publish
```

### 버전 업데이트

```bash
# 패치 버전 (0.1.0 → 0.1.1)
npm version patch

# 마이너 버전 (0.1.0 → 0.2.0)
npm version minor

# 메이저 버전 (0.1.0 → 1.0.0)
npm version major

# 배포
npm publish
```

---

## 9. 사용 방법

### 설치

```bash
npm install doctalk-design-system
```

### CSS 스타일 import

```tsx
// main.tsx 또는 App.tsx
import "doctalk-design-system/styles.css"
```

### Tailwind CSS 설정 (선택)

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... 기존 설정
    "./node_modules/doctalk-design-system/**/*.{js,ts,jsx,tsx}",
  ],
}
```

### 컴포넌트 사용

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Input } from "doctalk-design-system"

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>로그인</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="이메일" />
        <Input type="password" placeholder="비밀번호" />
        <Button>로그인</Button>
      </CardContent>
    </Card>
  )
}
```

---

## 트러블슈팅

### 1. "Module not found: @/lib/utils"

tsup.config.ts에 alias 설정 확인:

```ts
esbuildOptions(options) {
  options.alias = {
    "@": path.resolve(__dirname, "./src"),
  }
}
```

### 2. DTS Build error: '--jsx' is not set

tsconfig.json에 jsx 설정 확인:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```

### 3. Circular definition error

컴포넌트가 자기 자신을 import하는지 확인하고, 원본 패키지에서 import하도록 수정

### 4. verbatimModuleSyntax type import error

타입은 `type` 키워드로 import:

```ts
import { type SomeType, someFunction } from "package"
```

---

## 참고 자료

- [shadcn/ui 공식 문서](https://ui.shadcn.com)
- [Tailwind CSS 문서](https://tailwindcss.com)
- [tsup 문서](https://tsup.egoist.dev)
- [npm 배포 가이드](https://docs.npmjs.com/packages-and-modules)
