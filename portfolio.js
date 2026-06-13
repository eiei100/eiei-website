/**
 * 過去の成果物欄：アコーディオンの開閉制御
 * @param {string} id - 開閉する説明欄のID
 * @param {HTMLElement} headerElement - クリックされたヘッダー要素
 */
function toggleAccordion(id, headerElement) {
    const content = document.getElementById(id);
    
    if (content) {
        // ヘッダーと説明欄のクラスを切り替える（トグル）
        headerElement.classList.toggle('is-open');
        content.classList.toggle('is-open');
    }
}
