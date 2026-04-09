import React from "react";

const About = () => {
  return (
    <div className="About_page">
      <section className="aboutHero">
        <h1>關於本站</h1>
        <p>為攝影愛好者與創作者打造的沉浸式影像探索空間。</p>
      </section>

      <div className="featuresGrid">
        <div className="featureCard">
          <div className="icon">📸</div>
          <h3>高品質影像</h3>
          <p>
            串接 Pexels 全球頂尖攝影社群 API，為您提供無數高品質、可免費商用的攝影作品。
          </p>
        </div>

        <div className="featureCard">
          <div className="icon">✨</div>
          <h3>極簡體驗</h3>
          <p>
            採用精確的 8px 律動系統與 24px 圓角美學，專注於影像本身，排除一切視覺干擾。
          </p>
        </div>

        <div className="featureCard">
          <div className="icon">🛠️</div>
          <h3>技術核心</h3>
          <p>
            基於 React 框架與 Vite 構建環境，結合 Axios 異步請求與 Hook 狀態管理，確保極速流暢。
          </p>
        </div>
      </div>

      <section className="usageSection">
        <h2>如何使用</h2>
        <div className="usageSteps">
          <div className="step">
            <span className="stepNum">01</span>
            <p>在搜尋框輸入關鍵字或點擊熱門標籤</p>
          </div>
          <div className="step">
            <span className="stepNum">02</span>
            <p>瀏覽自動加載的精彩照片集</p>
          </div>
          <div className="step">
            <span className="stepNum">03</span>
            <p>點擊照片下載原始高解析度影像</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
