// Function to check if a string contains Cyrillic characters
function hasCyrillic(str) {
    try {
        // Decode the URL first
        const decodedStr = decodeURIComponent(str);
        return /[\u0400-\u04FF]/.test(decodedStr);
    } catch (e) {
        // In case of invalid URI encoding
        return /[\u0400-\u04FF]/.test(str);
    }
}

// Function to create and show warning bar
function showWarning() {
    if (document.getElementById('cyrillic-warning')) return;

    const warning = document.createElement('div');
    warning.id = 'cyrillic-warning';
    warning.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #ff4444;
        color: white;
        padding: 10px;
        text-align: center;
        font-size: 14px;
        z-index: 999999;
        font-family: Arial, sans-serif;
    `;
    
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.cssText = `
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
    `;
    closeButton.onclick = () => warning.remove();

    warning.innerHTML = '⚠️ Warning: This URL contains Cyrillic characters. It might be a phishing attempt.';
    warning.appendChild(closeButton);
    document.body.insertBefore(warning, document.body.firstChild);
}

// Check URL when page loads
if (hasCyrillic(window.location.href)) {
    showWarning();
}

// Create a MutationObserver to watch for URL changes in SPAs
const observer = new MutationObserver(() => {
    if (hasCyrillic(window.location.href)) {
        showWarning();
    }
});

// Start observing the document
observer.observe(document, {
    subtree: true,
    childList: true
});
