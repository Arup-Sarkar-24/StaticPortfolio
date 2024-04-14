import React from 'react';

export const LeftSider = () => {
    const iconLinks = [
        { href: 'mailto:1arupsarkar112@gmail.com', icon: 'ri-mail-line', label: 'Email' },
        { href: 'https://www.facebook.com/augusta.stark.12', icon: 'ri-facebook-fill', label: 'Facebook' },
        { href: 'https://www.instagram.com/arup_sarkar_24/', icon: 'ri-instagram-line', label: 'Instagram' },
        { href: 'https://www.linkedin.com/in/arup-sarkar-148088255/', icon: 'ri-linkedin-fill', label: 'LinkedIn' },
        { href: 'https://github.com/arup-sarkar-24', icon: 'ri-github-fill', label: 'GitHub' },
        { href: 'https://wa.me/+919091705624', icon: 'ri-whatsapp-fill', label: 'WhatsApp' },
        { href: 'https://drive.google.com/drive/folders/16WpBgcUfucfk804vehtRcv3cIqznpn5o?usp=sharing', icon: 'ri-pages-fill', label: 'resume' },
    ];

    return (
        <div className='left-10 bottom-0 px-10'>
            <div className='flex flex-row items-center gap-3'>
                {iconLinks.map(({ href, icon, label }, index) => (
                    <a key={index} href={href} target='_blank' rel='noopener noreferrer' title={label}>
                        <i className={`${icon} text-tertiary hover:text-secondary transition-colors`}></i>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default LeftSider;
