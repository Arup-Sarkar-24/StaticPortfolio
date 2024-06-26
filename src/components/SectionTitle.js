import React from 'react';

export const SectionTitle = ({ title }) => {
  return (
    <div className='flex gap-10 items-center py-10'>
        <h2 className='text-3xl text-white  font-semibold'>{title}</h2>
        <div className='w-60 h-[1px] bg-tertiary'>

        </div>
    </div>
  );
};

export default SectionTitle;
