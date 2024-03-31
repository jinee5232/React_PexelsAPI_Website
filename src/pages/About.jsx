import React from "react";

const About = () => {
  return (
    <div className="About_page">
      <h2> 簡介：</h2>
      <p>
        本網站是一个簡單的圖片展示網頁，利用 Pexels 提供的
        API，讓用戶能夠瀏覽各種高品質的免費照片。無論是尋找靈感、美化站、設計專案個人創作
      </p>
      <h2>使用說明：</h2>
      <p>
        在搜尋框中輸入關鍵字，然後點擊"Search" 按鈕，即可取得相關的圖片結果。
        滾動頁面即可加載更多的圖片，無需手動操作。
        點擊喜歡的圖片，即可查看其詳細資訊以及原始連結。 技術說明： 使用React
        框架建立前端介面，提供了元件化的開發方式，以便於維護和擴展。 透過Axios
        庫進行網路請求，利用Pexels API 取得照片資料。 利用useState 和useEffect
        等React Hook 管理元件狀態和副作用，實現頁面功能。 透過CSS
        進行樣式設計，使頁面呈現美觀舒適的視覺效果。
      </p>
    </div>
  );
};

export default About;
