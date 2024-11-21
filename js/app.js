import { initTheme } from './theme.js';
import { validateForm, initFormValidation } from './validation.js';
import { getFacebookCredentials } from './formData.js';

export function initApp() {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();

    // Initialize theme
    initTheme(tg);

    // Initialize form validation
    initFormValidation();

    // In your web app
    console.log('initData', window.Telegram.WebApp.initData);     // Contains initialization data
    console.log('initDataUnsafe', window.Telegram.WebApp.initDataUnsafe);  // Contains user info
    console.log('user', window.Telegram.WebApp);

    // Setup MainButton with proper handling
    tg.MainButton.setText('Submit Form');
    tg.MainButton.show();
    tg.MainButton.enable();  // Make sure button is enabled
    
    // Remove any existing click handlers
    tg.MainButton.offClick();
    
    // Add new click handler
    tg.MainButton.onClick(handleSubmit);
}

// Separate the submit handler for better organization
async function handleSubmit() {
    const tg = window.Telegram.WebApp;
    
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
        is_logging: document.getElementById('isLogging').checked,
        platform: tg.platform,  // Add platform info
        version: tg.version     // Add version info
    };

    try {
        tg.MainButton.showProgress(true);
        const jsonData = JSON.stringify(data);
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        await tg.sendData(jsonData);

        // const response = await fetch('https://api.telegram.org/bot7648273129:AAEUKFU2paanvfdEQEs4vxyB_YW4iodjkls/sendMessage', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         chat_id: window.Telegram.WebApp.initDataUnsafe.user.id,
        //         text: jsonData
        //     })
        // });

        // console.log('Response:', await response.json());
        
        // Optional: Show success message
        tg.showPopup({
            title: 'Success',
            message: 'Form submitted successfully',
            buttons: [{type: 'ok'}]
        });
        
    } catch (error) {
        console.error('Error submitting form:', error);
        tg.showPopup({
            title: 'Error',
            message: 'Failed to submit form: ' + error.message,
            buttons: [{type: 'ok'}]
        });
    } finally {
        tg.MainButton.hideProgress();
    }
}