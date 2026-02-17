# Project 1: 案源過濾門戶 (Client Intake Portal) 執行計劃

本計劃旨在構建一個高效、隱私且具備 AI 初步評估功能的法律服務門戶網站。核心目標是過濾低質量案源，提升律師工作效率。

## 1. 項目概覽 (Project Overview)

*   **目標**: 建立一個不僅展示形象，更能實際過濾案源的 "Client Intake Portal"。
*   **核心價值**: "高效、隱私、數位化"。
*   **預計工時**: 3-5 小時。

## 2. 技術棧 (Tech Stack)

*   **前端框架**: [Next.js 14 (App Router)](https://nextjs.org/) - 支援 React Server Components，利於 SEO 與性能。
*   **樣式與設計**: [Tailwind CSS](https://tailwindcss.com/) - 快速開發，配合深藍/白色調主題。
*   **動畫效果**: [Framer Motion](https://www.framer.com/motion/) - 增加互動感與高級感。
*   **表單處理**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) - 強大的表單驗證與類型安全。
*   **測試框架 (TDD)**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/) - 確保核心邏輯正確。
*   **AI 整合**: OpenAI API (或模擬) - 用於生成案情摘要。

## 3. 模組結構 (Modular Structure)

```
/src
  /app          # Next.js App Router 頁面
  /components
    /ui         # 基礎組件 (Button, Card, Input)
    /features   # 功能組件 (IntakeForm, CaseSummary)
  /lib          # 工具函數 (AI client, validators)
  /__tests__    # 測試文件
```

## 4. 詳細執行步驟 (Execution Steps)

### 階段一：環境搭建與基礎設施 (30 mins)
1.  初始化 Next.js 專案。
2.  配置 Tailwind CSS 主題 (Slate-900 / Slate-50)。
3.  配置 Jest 與 React Testing Library。

### 階段二：UI/UX 開發 (TDD) (1 hour)
1.  **Hero Section**: 
    - 設計深藍背景，強調 "高效、隱私"。
    - 實作 "開始評估" 按鈕。
2.  **基本佈局**: 響應式 Header 與 Footer。

### 階段三：核心功能 - 案源過濾 (1.5 hours)
1.  **動態表單 (Intake Form)**:
    - 使用 React Hook Form 開發。
    - 步驟式輸入：基本資料 -> 案件類型 -> 案情描述。
    - *TDD*: 先寫測試驗證表單驗證邏輯 (必填、格式)。
2.  **AI 摘要引擎 (AI Summary)**:
    - 建立 API endpoint `/api/analyze-case`。
    - 設計 Prompt：輸入案情 -> 輸出 (原告需求、爭議點、法律分類)。
    - *TDD*: 測試 API 處理邏輯與 Mock 回應。

### 階段四：整合與優化 (1 hour)
1.  串接表單與 API。
2.  展示 AI 分析結果或發送 Email (模擬)。
3.  UI 細節打磨 (Micro-animations)。

## 5. 待確認事項 (Requirements from User)

為了順利開始，請提供以下資訊：
1.  **律師/事務所名稱** (用於顯示)。
2.  **Logo 檔案** (如有)。
3.  **聯絡 Email** (用於接收案情摘要)。
4.  **OpenAI API Key** (若需接真實 AI，否則我使用模擬數據)。
