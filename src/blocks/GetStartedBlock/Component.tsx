import React from "react";
import { GetStartedBlock as GetStartedBlockProps } from "@/payload-types";

export const GetStarted: React.FC<GetStartedBlockProps> = ({
  title,
  description,
  buttonText,
}) => {
  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {title && <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>}
        {description && <p className="text-lg text-white mb-6">{description}</p>}
        {buttonText && (
          <a
            href="/get-started"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md"
          >
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
};