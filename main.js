// 🌊 スクロール連動・フワッとフェードイン演出 (Intersection Observer)
document.addEventListener("DOMContentLoaded", () => {
    // フェードインさせたい要素（セクションや col カード）を指定
    // 今回は既存のクラス名「.col」と「#portfolio-game」をターゲットにします
    const fadeElements = document.querySelectorAll(".col, #portfolio-game, .section4 li");

    // 1. 最初はすべての要素を透明にして、少し下にズラしておく（CSSの準備をJSで自動化）
    fadeElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    // 2. 画面に要素が入ってきたかを検知するセンサー（Observer）の設定
    const observerOptions = {
        root: null, // ブラウザの画面全体を基準にする
        rootMargin: "0px 0px -60px 0px", // 画面の一番下より少し手前で発動させるお守り
        threshold: 0.1 // 要素が10%見えたら発動
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // 要素が画面内に入ってきたら
            if (entry.isIntersecting) {
                const target = entry.target;
                target.style.opacity = "1";
                target.style.transform = "translateY(0)";
                // 一度表示されたらセンサーを解除して、何度もパタパタ動かないようにする
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    // 3. すべてのターゲット要素にセンサーをセットする
    fadeElements.forEach(el => {
        scrollObserver.observe(el);
    });
});

// 📰 News欄のアコーディオン開閉ロジック
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("news-toggle-btn");
    const pastNews = document.getElementById("past-news");

    if (!toggleBtn || !pastNews) return;

    toggleBtn.addEventListener("click", () => {
        // open クラスがついていれば削除、なければ追加する（トグル処理）
        pastNews.classList.toggle("open");

        // 画面の書き換え（ボタンの文字を状態に合わせて変える）
        if (pastNews.classList.contains("open")) {
            toggleBtn.textContent = "▲ 過去のニュースを閉じる";
        } else {
            toggleBtn.textContent = "▼ 過去のニュースをもっと見る";
        }
    });
});
