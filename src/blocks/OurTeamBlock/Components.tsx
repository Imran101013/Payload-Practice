import { OurTeamBlock } from '@/payload-types';
import React from "react";

export const OurTeam: React.FC<OurTeamBlock> = ({ title, description, teamMembers }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">{title}</h2>}
        {description && <p className="text-lg text-center text-gray-600 mb-10">{description}</p>}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {teamMembers?.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              {member.image && typeof member.image === 'object' && 'url' in member.image ? (
                <img
                  src={member.image.url ?? ''}
                  alt={member.image.alt ?? 'Team Member Image'}
                  className="w-full h-[300px] object-cover rounded-lg mb-4"
                />
              ) : null}
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-lg-bold text-blue-500 mb-2">{member.role}</p>
              {member.description && <p className="text-gray-600 mb-4">{member.description}</p>}
              {member.tags && member.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                      {tag.tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}