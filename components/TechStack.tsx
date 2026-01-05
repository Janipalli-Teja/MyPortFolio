
import React from 'react';

const SKILLS = [
    { name: 'C', url: 'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white' },
    { name: 'C++', url: 'https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white' },
    { name: 'JavaScript', url: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' },
    { name: 'TypeScript', url: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' },
    { name: 'Python', url: 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54' },
    { name: 'HTML5', url: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' },
    { name: 'CSS3', url: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' },
    { name: 'React', url: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' },
    { name: 'React Native', url: 'https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' },
    { name: 'Redux', url: 'https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white' },
    { name: 'Node.js', url: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' },
    { name: 'Express.js', url: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB' },
    { name: 'MongoDB', url: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' },
    { name: 'MySQL', url: 'https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white' },
    { name: 'Postman', url: 'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white' },
    { name: 'AWS', url: 'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white' },
    { name: 'Firebase', url: 'https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase' },
    { name: 'Docker', url: 'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white' },
    { name: 'Git', url: 'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white' },
    { name: 'GitHub', url: 'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' },
    { name: 'Vercel', url: 'https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white' },
    { name: 'Netlify', url: 'https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7' },
    { name: 'Nginx', url: 'https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white' },
    { name: 'Supabase', url: 'https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white' },
    { name: 'Expo', url: 'https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37' },
    { name: 'Vite', url: 'https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white' },
    { name: 'Twilio', url: 'https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=Twilio&logoColor=white' },
    { name: 'Context API', url: 'https://img.shields.io/badge/Context--API-000000?style=for-the-badge&logo=react' },
];

const TechStack: React.FC = () => {
    return (
        <div id="skills" className="py-32 bg-zinc-950/20 border-y border-zinc-900/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24 reveal-up opacity-0">
                    <h2 className="text-blue-500 font-bold tracking-tighter text-sm mb-2 uppercase italic">Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-zinc-100 mb-6 tracking-tight">Technical Stack</h3>
                    <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit of modern technologies I use to build high-performance applications.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
                    {SKILLS.map((skill, i) => (
                        <div
                            key={i}
                            className="reveal-up opacity-0 transform transition-all duration-300 hover:scale-105 active:scale-95"
                            style={{ animationDelay: `${i * 20}ms` }}
                        >
                            <img
                                src={skill.url}
                                alt={skill.name}
                                className="h-6 md:h-8 w-auto rounded shadow-lg"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
