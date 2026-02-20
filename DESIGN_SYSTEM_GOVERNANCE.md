# Design System Governance

본 문서는 **shadcn 기반 닥톡 디자인시스템**의 구축, 수정, 배포에 대한  
기본 원칙과 운영 규칙을 정의한다.

---

## 1. Design System Scope

- 닥톡 디자인시스템은 **shadcn/ui를 기반**으로 구축한다.
- 컴포넌트, 토큰, 스타일 규칙은  
  닥톡 디자인시스템 저장소를 **단일 기준(Single Source of Truth)**으로 관리한다.
- 외부 UI 라이브러리 또는 별도의 디자인시스템을 병행 사용하지 않는다.

---

## 2. Repository & Package Management

- 디자인시스템 GitHub 저장소: **[linddd3e/doctalk-design-system](https://github.com/linddd3e/doctalk-design-system)**
- 디자인시스템 npm 패키지: **[doctalk-design-system](https://www.npmjs.com/package/doctalk-design-system)**

---

## 3. UX Principles  
*(Based on Apple Human Interface Guidelines)*

본 원칙은 Apple Human Interface Guidelines(HIG)의 핵심 개념을 참고하되,  
닥톡 서비스의 UX 의사결정에 대한 **최상위 판단 기준**으로 사용한다.

### 3.1 Clarity (명확성)
- 화면의 목적과 사용자의 다음 행동은 **즉시 이해 가능**해야 한다.
- 한 화면에는 **하나의 Primary Action**만 명확히 존재해야 한다.
- 정보와 행동은 시각적 위계로 명확히 구분되어야 한다.
- 설명이 길어질수록 **UI 추가가 아닌 구조 단순화**를 우선 검토한다.

### 3.2 Deference (콘텐츠 우선)
- UI는 콘텐츠와 사용자 행동을 **보조하는 역할**에 집중한다.
- 시각적 장식이나 과도한 효과는 기능 이해를 방해해서는 안 된다.
- UI 자체가 목적이 되어서는 안 되며,  
  콘텐츠·행동·상태가 주인공이 되어야 한다.

### 3.3 Depth (자연스러운 흐름)
- 사용자는 단계적으로 깊어지는 **논리적·공간적 흐름**을 경험해야 한다.
- 모든 선택지와 정보를 한 화면에 과도하게 노출하지 않는다.
- 다음 단계와 이전 단계는 항상 **예측 가능**해야 한다.

---

## 4. Design System Modification Rules

### 수정 대상
다음 항목을 수정하는 경우 **디자인시스템 변경으로 간주**한다.

- shadcn 기반 UI 컴포넌트 구조 또는 API
- 디자인 토큰 (color, spacing, typography, radius 등)
- 컴포넌트 스타일, variant, 상태 정의
- 공통 UI 패턴 또는 사용 규칙

---

### 수정 절차 (필수)

디자인시스템을 수정하는 경우 아래 절차를 **반드시 따른다**.

1. **GitHub 저장소 수정**
   - 컴포넌트, 토큰, 관련 문서(`design-system.md` 포함) 업데이트
   - 변경 내용은 명확한 커밋 메시지로 기록한다.

2. **버전 관리**
   - 변경 범위에 따라 적절한 버전 업데이트를 진행한다.  
     (breaking change / feature / fix 구분)
   
3. **npm 패키지 재배포**
   - GitHub 변경 사항을 반영한 npm 패키지를 재배포한다.
   - 서비스에서 사용 중인 버전과 불일치 상태를 만들지 않는다.

> 디자인시스템 변경 후  
> **GitHub만 수정하거나 npm만 수정하는 행위는 허용되지 않는다.**

---

## 5. Design ↔ System Consistency Rule

- 서비스 화면 디자인은 **항상 최신 디자인시스템 버전**을 기준으로 한다.
- 디자인시스템에 정의되지 않은 컴포넌트 또는 스타일은  
  임의로 화면에 사용해서는 안 된다.
- 신규 UI 패턴이 필요한 경우:
  1. 디자인시스템 확장 제안
  2. 디자인시스템 반영
  3. 화면 적용  
  순서로 진행한다.

---

## 6. Responsibility & Decision Rule

- 디자인시스템 변경에 대한 **최종 결정 권한은 디자이너에게 있다**.
- 개발자는 변경 사항을 제안할 수 있으나,  
  실제 시스템 반영 여부는 디자이너 승인 후 진행한다.
- 승인되지 않은 디자인시스템 수정은 배포할 수 없다.

---

## 7. 목적

- 디자인과 코드 간 괴리를 방지하고
- 서비스 전반의 UI 일관성과 유지보수성을 확보하며
- 디자이너와 개발자가 **같은 기준으로 시스템을 확장**하기 위함이다.
