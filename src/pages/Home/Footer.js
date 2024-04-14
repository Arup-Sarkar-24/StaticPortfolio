import React from 'react';

export const Footer = () => {
  return (
    <footer className='footer-container py-12'>
        <div className='footer-divider h-[1px] w-full bg-gray-700' />
        <div className='footer-content flex items-center justify-center flex-col mt-10 opacity-70'>
            <h2 className='footer-text text-white'>
                Designed and Developed By
            </h2>
            <h2 className='footer-text text-white'>
                <span>Arup Sarkar</span>
            </h2>
        </div>
    </footer>
  );
};

export default Footer;
