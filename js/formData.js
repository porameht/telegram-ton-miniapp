export function getWatermarkData() {
    const text = document.getElementById('watermarkText').value.trim();
    if (!text) return null;
    
    return {
        text,
        url: document.getElementById('watermarkUrl').value.trim() || null,
        color: document.getElementById('watermarkColor').value || null,
        font_size: parseInt(document.getElementById('watermarkFontSize').value) || null,
        opacity: parseInt(document.getElementById('watermarkOpacity').value) || null,
        position: document.getElementById('watermarkPosition').value
    };
}

export function getFacebookCredentials() {
    const appId = document.getElementById('appId').value.trim();
    if (!appId) return null;

    return {
        app_id: appId,
        app_secret: document.getElementById('appSecret').value.trim(),
        access_token: document.getElementById('accessToken').value.trim(),
        ad_account_id: document.getElementById('adAccountId').value.trim(),
        account_suffix: document.getElementById('accountSuffix').value.trim(),
        pixel_id: document.getElementById('pixelId').value.trim() || null,
        link_url: document.getElementById('linkUrl').value.trim() || null,
        page_id: document.getElementById('pageId').value.trim() || null,
        watermark: getWatermarkData()
    };
} 