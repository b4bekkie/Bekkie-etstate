import React from 'react';

const About = () => {
    // Define team members with their information
    const teamMembers = [
        {
            name: 'Bilal Khan',
            image: require('bilal.png'),
            description: '.',
            whatsappNumber: '+923211154143', 
        },
        {
          name: 'shahzad ahmad',
          image: 'your_profile_pic.jpg',
          whatsappNumber: '1234567890', 
      },
        
    ];

    return (
        <div>
            {/* Team Section */}
            <section className="p-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-6">
                        Meet Our  Team
                    </h2>
                    <div className="flex flex-wrap justify-center">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="rounded-full w-32 h-32 mx-auto mb-4"
                                    />
                                    <h3 className="text-lg font-semibold">{member.name}</h3>
                                    <p>{member.description}</p>
                                    <button
                                        onClick={() => window.open(`https://wa.me/${member.whatsappNumber}`, '_blank')}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded-md"
                                    >
                                        Contact
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
