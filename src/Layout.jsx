import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import axios from "axios";
import Search from "./components/Search";

const Layout = () => {
  // Search State (Lifted from Homepage)
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  const auth = import.meta.env.VITE_PEXELS_AUTH;
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=16";

  const search = async (url) => {
    setIsLoading(true);
    try {
      let result = await axios.get(url, {
        headers: { Authorization: auth },
      });
      setData(result.data.photos);
      setPage(1); // Reset page to 1 for new search
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const morePicture = async () => {
    setIsLoading(true);
    let newURL;
    if (input === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=16`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${input}&per_page=16&page=${
        page + 1
      }`;
    }
    setPage(page + 1);
    try {
      let result = await axios.get(newURL, {
        headers: { Authorization: auth },
      });
      setData(data.concat(result.data.photos));
    } catch (error) {
      console.error("Error fetching more pictures:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    search(initialURL);
    
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowSearch(true);
      } else {
        setShowSearch(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-revert to curated items when search is cleared
  useEffect(() => {
    if (input === "" && data !== null) {
      search(initialURL);
      setPage(1);
    }
  }, [input]);

  return (
    <div className="layoutContainer">
      <nav className={showSearch ? "scrolled" : ""}>
        <div className="navContent">
          <div className="navLeft">
            <Link to="/" className="brand">
              Pexels Explore
            </Link>
            {showSearch && (
              <div className="headerSearch">
                <Search
                  search={search}
                  setInput={setInput}
                  input={input}
                  variant="header"
                />
              </div>
            )}
          </div>
          <ul className="navLinks">
            <li
              onMouseEnter={() => setIsAboutHovered(true)}
              onMouseLeave={() => setIsAboutHovered(false)}
              className="aboutBtnContainer"
            >
              <button className={`aboutBtn ${isAboutHovered ? "active" : ""}`}>
                About
              </button>
              <div className={`aboutDropdown ${isAboutHovered ? "visible" : ""}`}>
                <div className="aboutContent">
                  <section className="aboutSection">
                    <h3 className="sectionTitle">關於本站</h3>
                    <div className="sectionBody">
                      <p>本網站是一個簡單的圖片展示網頁，利用 Pexels 提供的 API，讓用戶能夠瀏覽各種高品質的免費照片。無論是尋找靈感、美化站、設計專案個人創作</p>
                    </div>
                  </section>
                  <section className="aboutSection">
                    <h3 className="sectionTitle">操作方式</h3>
                    <div className="sectionBody">
                      <ol>
                        <li>在搜尋框輸入關鍵字或點擊熱門標籤</li>
                        <li>瀏覽自動加載的精彩照片集</li>
                        <li>點擊照片下載原始高解析度影像</li>
                      </ol>
                    </div>
                  </section>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Outlet context={{ data, input, setInput, search, morePicture, isLoading }} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
