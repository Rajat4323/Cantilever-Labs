import React from 'react';
import { Calendar, DollarSign, MapPin } from 'lucide-react';

const Gigs = () => {
  const gigs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc",
      location: "Remote",
      salary: "$120k - $150k",
      duration: "6 months",
      description: "Looking for an experienced React developer to join our team...",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "DataFlow Systems",
      location: "New York, NY",
      salary: "$130k - $160k",
      duration: "12 months",
      description: "Seeking a Node.js expert for our growing platform...",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Cloud Solutions Co",
      location: "Remote",
      salary: "$140k - $170k",
      duration: "Permanent",
      description: "Join our team building next-gen cloud applications...",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Available Gigs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gigs.map((gig) => (
            <div key={gig.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={gig.image}
                alt={gig.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{gig.title}</h2>
                <p className="text-gray-600 mb-4">{gig.company}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    {gig.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-5 w-5 mr-2" />
                    {gig.salary}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    {gig.duration}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{gig.description}</p>
                
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;