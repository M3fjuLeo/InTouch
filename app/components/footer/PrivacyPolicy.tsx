import React from "react";

interface PrivacyPolicyProps {
  content: { title: string; text: string }[];
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ content }) => {
  return (
    <div className="space-y-4">
      {content.map((section, index) => (
        <div key={index}>
          <strong className="block mb-1 text-[#3D2C2C] font-semibold">
            {section.title}
          </strong>
          <p>{section.text}</p>
        </div>
      ))}
    </div>
  );
};