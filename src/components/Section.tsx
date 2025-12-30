import React from 'react';

interface SectionProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ title, className = "", children }: SectionProps) => {
  return (
    <section className={`py-12 md:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
