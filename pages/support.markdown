---
title: Support
layout: default
permalink: /support
icon: /assets/img/logo.png
description: Support Us Page
keywords: Support, Donate, Help
---

<style>
    /* Centering Container */
    #support-container {
        background: #f9f9f9;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        max-width: 450px;
        margin: auto;
    }

    /* QR Code Styling */
    #support-container img {
        width: 280px;
        border-radius: 10px;
        transition: transform 0.3s ease-in-out;
        margin-bottom: 20px;
    }

    #support-container img:hover {
        transform: scale(1.05);
    }

    /* Support Box */
    .support-button {
        width: 240px;
        padding: 15px;
        background: #ffcc00;
        color: #333;
        font-size: 22px;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
        margin-top: 20px;
        text-align: center;
    }

    .support-button:hover {
        background: #ffb300;
        transform: translateY(-4px);
    }
    
</style>

<section id="support-container">
    <h2 style="color: #444;">Support me by giving me your money</h2>
   

    <a href="https://buymeacoffee.com/redlii">
        <img src="/assets/img/bmc_qr.png" alt="Support QR Code">
    </a>

    <div class="support-button" onclick="window.location.href='https://buymeacoffee.com/redlii';">
        Support Me
    </div>
</section>

