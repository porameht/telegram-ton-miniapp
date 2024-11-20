export function validateForm() {
    const requiredFields = ['projectName', 'appId', 'appSecret', 'accessToken', 'adAccountId', 'accountSuffix'];
    return requiredFields.every(fieldId => 
        document.getElementById(fieldId).value.trim().length > 0
    );
}

export function initFormValidation() {
    const requiredFields = ['projectName', 'appId', 'appSecret', 'accessToken', 'adAccountId', 'accountSuffix'];
    const submitBtn = document.getElementById('submitBtn');

    requiredFields.forEach(fieldId => {
        document.getElementById(fieldId).addEventListener('input', () => {
            submitBtn.disabled = !validateForm();
        });
    });

    // Initialize submit button state
    submitBtn.disabled = !validateForm();
} 