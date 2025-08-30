// ==UserScript==
// @name         Redirect on Submit Button Click (Stripe)
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Redirect to Google when the submit button is clicked on Stripe checkout page
// @author       Your Name
// @match        https://checkout.stripe.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to handle click and redirect
    function handleButtonClick(event) {
        event.stopImmediatePropagation(); // Stop other handlers
        // Redirect
        window.location.href = 'https://www.google.com';
    }

    function addClickListener() {
        const button = document.querySelector('button.SubmitButton.SubmitButton--complete[data-testid="hosted-payment-submit-button"]');
        if (button) {
            button.addEventListener('click', handleButtonClick);
        }
    }

    // Wait until DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        addClickListener();

        // Observe for dynamic content loading
        const observer = new MutationObserver(() => {
            addClickListener();
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });
})();
