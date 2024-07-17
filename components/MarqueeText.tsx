import React from 'react';

type Skill = {
    name: string;
    imageUrl: string;
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={skill.imageUrl} alt={skill.name} className="w-32 h-32 updatrounded-md object-cover mb-2" />
            <p className="text-sm text-center font-semibold">{skill.name}</p>
        </div>
    );
};

const MarqueeSkills: React.FC = () => {
    // Example skills data
    const skills: Skill[] = [
        { name: 'Html', imageUrl: 'https://i.pinimg.com/564x/0c/a4/6a/0ca46a03bd9655b67886b09a2b14833d.jpg' },
        { name: 'Css', imageUrl: 'https://i.pinimg.com/564x/96/d0/25/96d02512767883fb4130a494ef925e5b.jpg' },
        { name: 'JS', imageUrl: 'https://i.pinimg.com/564x/5c/79/77/5c797792e038795d517abef0a2077416.jpg' },
        { name: 'React', imageUrl: 'https://i.pinimg.com/564x/cb/a0/b8/cba0b89d2bf2d96a1ed26edb5849f804.jpg' },
        { name: 'JQuery', imageUrl: 'https://i.pinimg.com/564x/ca/b6/c7/cab6c762e02a0b4fe89ab3c977928398.jpg' },
        { name: 'Next', imageUrl: 'https://s3.amazonaws.com/cmscritic.mediasite.org/assets/products/nextjs/logo-291886093470.jpeg?v=1684765419030' },
        { name: 'Node', imageUrl: 'https://i.pinimg.com/564x/e1/1f/0d/e11f0d2cda0ac2c6fa6e645689f727ae.jpg' },
        { name: 'Php', imageUrl: 'https://i.pinimg.com/564x/1a/57/a0/1a57a019bb9929b0303c17775ca74e92.jpg' },
        { name: 'express', imageUrl: 'https://icon.icepanel.io/Technology/png-shadow-512/Express.png' },
        { name: 'React Query', imageUrl: 'https://i.pinimg.com/564x/92/c5/01/92c5018d77af3cc12f081f3a1388f1d4.jpg' },
        { name: 'React Router', imageUrl: 'https://static-00.iconduck.com/assets.00/react-router-icon-2048x1116-jfeevj0l.png' },
        { name: 'Sass', imageUrl: 'https://i.pinimg.com/564x/1e/e1/db/1ee1db8ba0f4ae9cec4de9ccc5681f5e.jpg' },
        { name: 'Mongo', imageUrl: 'https://i.pinimg.com/564x/91/23/7f/91237f1eca767ef74d722ca534f9281a.jpg' },
        { name: 'Firebase', imageUrl: 'https://i.pinimg.com/564x/a0/d0/82/a0d082a92b358d1a43048b2300435593.jpg' },
        { name: 'Sql', imageUrl: 'https://i.pinimg.com/564x/44/5a/98/445a987f6a3032f953c04b4104cacadb.jpg' },
        { name: 'Git', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8YQI6JoUY3_qUYIRURPZ00sBeBH461kKkKw&s' },
    ];

    const LibraryFramework: Skill[] = [
        { name: 'bootstrap', imageUrl: 'https://i.pinimg.com/564x/50/2e/ec/502eec16435bc49c485ca5d2f6b46009.jpg' },
        { name: 'tailwind', imageUrl: 'https://i.pinimg.com/564x/5e/42/c9/5e42c926feb229f934d3089d89c26e2f.jpg' },
        { name: 'Redux', imageUrl: 'https://i.pinimg.com/564x/a3/02/10/a302105c53a9506950a5cbd2959ad553.jpg' },
        { name: 'Native', imageUrl: 'https://i.pinimg.com/564x/cb/a0/b8/cba0b89d2bf2d96a1ed26edb5849f804.jpg' },
    ];

    const deploySkills: Skill[] = [
        { name: 'Vercel', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAuKrVgOa4BJxUnH4gdJ5TV0m2IFEMjLJ2g&s' },
        { name: 'Netlify', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-netlify-3628945-3030170.png?f=webp' },
        { name: 'Aws', imageUrl: 'https://d3gih7jbfe3jlq.cloudfront.net/AWS-Podcast-Title-Art.jpg' },
    ];

    return (
        <div className="marquee py-4">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="marquee-container overflow-hidden whitespace-nowrap">
                    <div data-aos="fade-up" className="skills-container inline-block">
                        {skills.map((skill, index) => (
                            <div key={index} className="inline-flex items-center mx-4">
                                <SkillCard skill={skill} />
                            </div>
                        ))}

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                        <div data-aos="fade-up" className=' border p-4 border-gray-500 rounded-md'>
                            <h2 data-aos="fade-up" className="text-xl font-bold mb-4 text-center"> Framework and Librarys</h2>
                            <div data-aos="fade-up" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                {LibraryFramework.map((skill, index) => (
                                    <StaticCards key={index} skill={skill} />
                                ))}
                            </div>
                        </div>
                        <div data-aos="fade-up" className='border p-4 border-gray-500 rounded-md'>
                            <h2 data-aos="fade-up" className="text-xl font-bold mb-4 text-center">Deploy Tools</h2>
                            <div data-aos="fade-up" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                {deploySkills.map((skill, index) => (
                                    <StaticCards key={index} skill={skill} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarqueeSkills;

const StaticCards: React.FC<{ skill: Skill }> = ({ skill }) =>  (
    <div className="relative overflow-hidden flex justify-center items-center gap-2 border rounded-md transform transition-transform duration-500 hover:scale-110 hover:cursor-pointer p-2">
      <img
        src={skill.imageUrl}
        alt={skill.name}
        className="w-10 h-10 object-cover "
      />
      <h1 className='flex justify-center items-center font-semibold'>{skill.name}</h1>
    </div>
  );
  