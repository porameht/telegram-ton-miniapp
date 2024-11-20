import { initTheme } from './theme.js';
import { validateForm, initFormValidation } from './validation.js';
import { getFacebookCredentials } from './formData.js';

export function initApp() {

    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    // tg.enableClosingConfirmation();

    // Initialize theme
    initTheme(tg);

    // Initialize form validation
    initFormValidation();

    // Attach submit handler
    window.submitForm = async function() {
        if (!validateForm()) {
            tg.showPopup({
                title: 'Validation Error',
                message: 'Please fill in all required fields',
                buttons: [{type: 'ok'}]
            });
            return;
        }

        const fbCreds = getFacebookCredentials();
        const data = {
            name: document.getElementById('projectName').value.trim(),
            facebook_credentials: {
                "default": fbCreds
            },
            is_active: document.getElementById('isActive').checked,
            is_logging: document.getElementById('isLogging').checked
        };

        try {
            document.getElementById('submitBtn').disabled = true;
            const jsonData = JSON.stringify(data);
            await tg.sendData(jsonData);
            setTimeout(() => {
                tg.close();
            }, 500);
        } catch (error) {
            console.error('Error submitting form:', error);
            tg.showPopup({
                title: 'Error',
                message: 'Failed to submit form: ' + error.message,
                buttons: [{type: 'ok'}]
            });
            document.getElementById('submitBtn').disabled = false;
        }
    };
} 