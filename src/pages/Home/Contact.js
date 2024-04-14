import React from 'react';
import SectionTitle from '../../components/SectionTitle';

export const Contact = () => {
    const user = {
        name: "Arup Sarkar",
        email: "1arupsarkar112@gmail.com",
        mobile: "+919091705624",
        address: "Shibtali, Balurghat, WB, India",
    };

    return (
        <div className="contact-section">
            <SectionTitle title="Connect With Me:" />
            <div className="contact-content flex items-center gap-10">
                <div className="contact-details flex flex-col">
                    {Object.entries(user).map(([key, value], index) => (
                        <div key={index} className="contact-item mb-2">
                            <span className="contact-key text-tertiary capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}:</span>
                            <span className="contact-value text-secondary ml-2">
                                {key === 'linkedIn' || key === 'github' ? (
                                    <a href={value} target="_blank" rel="noopener noreferrer">
                                        {key === 'linkedIn' ? 'LinkedIn' : 'GitHub'}
                                    </a>
                                ) : value}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="lottie-animation h-[200px]">
                    <lottie-player
                        src="https://lottie.host/a8e95d84-c25f-4819-bce3-1d2d28d72176/BqYQO8TlFp.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                    ></lottie-player>
                </div>
            </div>
        </div>
    );
};

export default Contact;
