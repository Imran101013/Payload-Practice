import React from "react";
import type { FindUsBlock as FindUsBlockType } from "@/payload-types";

export const FindUsBlock: React.FC<FindUsBlockType> = ({ heading, description, map }) => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">{heading}</h2>
        <p className="text-lg text-gray-600 text-center mb-12">{description}</p>

        <div className="flex justify-center">
          <iframe
            src={map || ''}
            width="1100"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};