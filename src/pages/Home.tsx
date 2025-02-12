import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import "./slider.css"; 
import { TypeWriter } from '../components/TypeWriter';
import { AiIllustration } from "../components/Svg";
import { Quote } from 'lucide-react';


const Home = () => {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const alumniCompanies = [
    { name: "Tech Mahindra", logo: "/image25.png" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "LinkedIn", logo: "https://logo.clearbit.com/linkedin.com" },
    { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
    { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
    { name: "Virtusa", logo: "https://logo.clearbit.com/virtusa.com" },
    { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
    { name: "HCL", logo: "https://logo.clearbit.com/hcl.com" },
    { name: "Facebook", logo: "https://logo.clearbit.com/facebook.com" },
    { name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  ]
    const alumniCompanie = [
      
    { name: "L&T", logo: "https://logo.clearbit.com/larsentoubro.com" },
    { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
    { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
    { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
    { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
    { name: "SAP", logo: "https://logo.clearbit.com/sap.com" },
    { name: "Capgemini", logo: "https://logo.clearbit.com/capgemini.com" },
    { name: "EY", logo: "https://logo.clearbit.com/ey.com" },
    { name: "KPMG", logo: "https://logo.clearbit.com/kpmg.com" },
    { name: "PwC", logo: "https://logo.clearbit.com/pwc.com" },
    { name: "Tesla", logo: "https://logo.clearbit.com/tesla.com" },
    { name: "Cisco", logo: "https://logo.clearbit.com/cisco.com" },
    { name: "Goldman Sachs", logo: "https://logo.clearbit.com/goldmansachs.com" },
    { name: "JP Morgan", logo: "https://logo.clearbit.com/jpmorganchase.com" },
    { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
    { name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com" },
    { name: "Intel", logo: "https://logo.clearbit.com/intel.com" },
    { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" }
];

  

  const courses = [
    {
      title: "Competitive Programming",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
      status: "explore"
    },
    {
      title: "Get Placement Ready",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
      status: "explore"
    },
    {
      title: "Web Development",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
      status: "coming-soon"
    },
    {
      title: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
      status: "coming-soon"
    }
  ];

  const testimonials = [
    {
      name: "SAMIKSHA SHARMA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      companyLogo: "/image21.png",
      text: "From the team's perspective, the process was convenient with Cantilever taking up a lot of the challenging tasks of scheduling events and personal interviews.Fudent's perspective, the entire process felt quite robust, exhaus-tive & aligned with the placement process."
    },
    {
      name: "AKHIL MAHAJAN",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      companyLogo: "image22.png",
      text: "First oﬀ I would like to thank you for having collaborated with us and imparting your knowledge to the students of our institute. I a m sure they have learnt a lot and have a better understanding of the dos and the don'ts than they had before."
    },
    {
      name: "AYUSHI SHARMA",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      companyLogo: "/image23.png",
      text: "The trainers are highly qualified. They taught us aptitude, core and verbal. I personally liked aptitude and core subjects. The trainers clarified each and every doubt. Daily assessments helped me a lot on my incremental improvement and helped in keeping an eye on the overall performance of students."
    },
    {
      name: "RAHUL KUMAR",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      companyLogo: "/image24.png",
      text: "I attended the training programme by cantilever labs held on our campus and I am glad to get the opportunity to be mentored by them as they have an astute knowledge and experience of the corporate world. This training helped me in getting an excellent campus placement."
    },
    {
      name: "PRIYA PATEL",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      companyLogo: "/image25.png",
      text: "Cantilever Labs conducted around 1200 Mock PIs & 980 Mock GDs in aperiod of 15 days.All the interviewers are recent graduates of top institutions and also withperfect work experience to provide valuable feedback and guidance tostudents."
    },
    {
      name: "VIKRAM SINGH",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      companyLogo: "/image26.png",
      text: "All Sessions were well organized and got really good tips for placement preparation. The guidance provided in the interview was great and got to know things on which I need to work on. Overall the cantilever labs team has been very supportive!"
    }
  ];
  const features = [
    {
      title: "Learn",
      subtitle: "Learn from Industry experts",
      description: "& get Doubts clarified in less than 30min",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80"
    },
    {
      title: "Code",
      subtitle: "Hands on Project",
      description: "based learning programs in a community based format",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80"
    },
    {
      title: "Upskill",
      subtitle: "Get certified , Get Internship",
      description: "Land up in dream job",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
    }
  ];

  const mentors = [
    {
      name: "Manish Kankani",
      role: "Google Tech Lead",
      college: "IIT Roorkee",
      company: "Google",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      companyLogo: "https://logo.clearbit.com/google.com"
    },
    {
      name: "Vivek Jhaver",
      role: "SDE-2, Amazon",
      college: "VNIT Nagpur",
      company: "Amazon",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      companyLogo: "https://logo.clearbit.com/amazon.com"
    },
    {
      name: "Suresh Santhanam",
      role: "Software Eng.Microsoft",
      college: "IIIT Hyderabad",
      company: "Microsoft",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      companyLogo: "https://logo.clearbit.com/microsoft.com"
    },
    {
      name: "Vivek",
      role: "Partner At Quadeye",
      college: "IIT Bombay",
      company: "Quadeye",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
      companyLogo: "/image27.png"
    },
    {
      name: "Sanjay Nair",
      role: "Associate Capgemini",
      college: "ISB Hyderabad",
      company: "Capgemini",
      image: "/image31.png",
      companyLogo: "https://logo.clearbit.com/capgemini.com"
    },
    {
      name: "Amit Vaid",
      role: "Voice President Facebook",
      college: "VTU Bangalore",
      company: "Facebook",
      image: "/image32.png",
      companyLogo: "/image30.png"
    },
    {
      name: "Avanish Mundra",
      role: "CEO - Cantilever Labs",
      college: "VTU",
      company: "Cantilever",
      image: "/image33.png",
      companyLogo: "/image29.png"
    },
    {
      name: "Drishti Mamtani",
      role: "Software Engineer Google",
      college: "BITS'21",
      company: "Google",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      companyLogo: "https://logo.clearbit.com/google.com"
    },
    {
      name: "Fareen Bano",
      role: "SDE-2, PayPal",
      college: "IIIT Bombay",
      company: "PayPal",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      companyLogo: "/image28.png"
    }
  ];
  

  const awards = [
    {
      title: "Global Training Partner",
      image: "/image6.png"
    },
    {
      title: "HDFC Bank SmartUp",
      image: "/image7.png"
    },
    {
      title: "T-Angel",
      image: "/image8.png"
    },
    {
      title: "Lab32",
      image: "/image9.png"
    }
  ];

  const pressRecognitions = [
    {
      title: "Global Training Partner",
      image: "/image10.png"
    },
    {
      title: "HDFC Bank SmartUp",
      image: "/image11.png"
    },
    {
      title: "T-Angel",
      image: "/image12.png"
    },
    {
      title: "Lab32",
      image: "/image13.png"
    },
    {
      title: "Global Training Partner",
      image: "/image14.png"
    },
    {
      title: "HDFC Bank SmartUp",
      image: "/image15.png"
    },
    {
      title: "T-Angel",
      image: "/image16.png"
    },
    {
      title: "Lab32",
      image: "/image17.png"
    }
  ];
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4267B2] to-[#1e3a8a] text-white relative overflow-hidden mt-16 sm:mt-0">
  <div className="container mx-auto px-9 py-20">
    <div className="flex items-center justify-between">
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          <div className="flex items-center gap-3">
            <span className="text-[#FFA500]">UPSKILL</span>
            <TypeWriter 
              words={['for future', 'Yourself']} 
              className="text-white"
            />
          </div>
        </h1>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">Grab your Dream Job</h2>
        <p className="text-base sm:text-xl lg:text-2xl mb-6 sm:mb-10 text-[#FFD700]">
          Be Different & Make the Difference, Start your Journey Today
        </p>
        <button 
          className="bg-[#FFA500] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full 
            font-bold text-base sm:text-lg lg:text-xl
            transform transition-all duration-300 ease-out
            hover:bg-[#FF9000] hover:scale-110 hover:-translate-y-1
            hover:shadow-[0_0_30px_rgba(255,165,0,0.5)]
            active:scale-90 active:shadow-none active:translate-y-0
            animate-pulse-subtle"
        >
          GET STARTED
        </button>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-end w-2/5">
        <AiIllustration/>
      </div>
    </div>
  </div>
  {/* Wave shape at the bottom */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      className="relative block w-full h-[100px]"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        className="fill-white"
      />
    </svg>
  </div>
</section>

  


      {/* Alumni Companies */}
      <section className="py-20 ">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">
      Our Alumni Placed At Leading Companies
    </h2>

    <div className="slider-wrapper">
      {/* Upper Row: Right to Left */}
      <div className="slide-track top">
        {alumniCompanies.concat(alumniCompanies).map((company, index) => (
          <div key={`top-${index}`} className="company-logo">
            <img src={company.logo} alt={company.name} className="w-40 h-24 object-contain" />
          </div>
        ))}
      </div>

      {/* Lower Row: Left to Right (Starts at the same time) */}
      <div className="slide-track bottom mt-8">
        {alumniCompanie.concat(alumniCompanie).map((company, index) => (
          <div key={`bottom-${index}`} className="company-logo">
            <img src={company.logo} alt={company.name} className="w-40 h-24 object-contain" />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* BOOST your career */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">
            BOOST your <span className="italic">career</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="text-center">
              <img src="/image3.png" alt="Learn" className="w-[300px] h-[400px] mx-auto mb-4 rounded-2xl" />
            </div>
            <div className="text-center">
              <img src="/image4.png" alt="Code" className="w-[320px] h-[400px] mx-auto mb-4 rounded-2xl" />
            </div>
            <div className="text-center">
              <img src="/image5.png" alt="Upskill" className="w-[300px] h-[400px] mx-auto mb-4 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
            <p className="text-xl text-gray-600 font-semibold">Boost your knowledge and stay ahead in the industry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  {course.status === 'explore' ? (
                    <div className="flex items-center justify-between">
                      <button className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors flex items-center gap-2">
                        Explore
                        <svg 
                          className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                      </button>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Available
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500">Coming Soon...</p>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Soon
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Student */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8">
            <div className="w-1/3">
              <img
                src="/image19.png"
                alt="Sarvesh Mehtani"
                className="w-64 h-64 rounded-full object-cover mx-auto"
              />
            </div>
            <div className="w-2/3">
              <h2 className="text-4xl font-bold mb-4">SARVESH MEHTANI</h2>
              <h3 className="text-2xl mb-6">IIT Bombay - Computer Science</h3>
              <p className="text-lg mb-8">
                Overall, I loved the fact that the whole process was tailored as per the
                individual's interests and goals which made it very effective in pointing
                out our areas of strength and the areas that we need to work on.
              </p>
              <div className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-medium">
                A.I.R 1, JEE ADVANCED 2017
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600 font-semibold">Hear from our successful graduates who transformed their careers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative group"
              >
                <div className="absolute top-6 right-6 text-gray-300 group-hover:text-[#4267B2] transition-colors">
                  <Quote size={32} />
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-gray-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <img
                      src={testimonial.companyLogo}
                      alt="Company"
                      className="h-6 object-contain mt-1"
                    />
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    <div className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=500"
              alt="Job Search"
              className="w-full max-w-md rounded-lg opacity-90"
            />
          </div>
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              Searching for a<br />Job/Internship?
            </h2>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>

          {/* Mentors Section */}
          <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Your Mentors</h2>
            <p className="text-xl text-gray-600 font-semibold">Turning students into professionals with guidance from industry leaders</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer"
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-gray-100 group-hover:ring-blue-100 transition-all duration-300"
                    />
                          <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-lg transition-all duration-300">
                            <img
                              src={mentor.companyLogo}
                              alt={mentor.company}
                              className="w-8 h-8 object-contain"
                            />
                          </div>

                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {mentor.name}
                    </h3>
                    <p className="text-gray-600 font-medium mb-1 ">{mentor.role}</p>
                    <p className="text-gray-500 text-sm font-semibold">{mentor.college}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Awards and Recognition</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={award.image}
                  alt={award.title}
                  className="object-contain w-[300px] h-[248px]"

                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Recognition */}
      <section className="py-5 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Press Recognitions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {pressRecognitions.map((press, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={press.image}
                  alt={press.title}
                  className="h-[150px]w-[350px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masterclasses Section */}
      ;<section className="py-20 bg-blue-600 text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">Our previous MASTERCLASSES</h2>
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-16 justify-items-start max-w-7xl mx-auto">
      <div className="w-full lg:w-[600px] h-[250px] lg:h-[350px] lg:pr-8">
        <iframe
          src="https://www.youtube.com/embed/fqmyHS8SznQ?si=L4Z8hHRWj_2MrlsX"
          title="How to crack Product Companies"
          className="w-full h-full rounded-lg"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full lg:w-[600px] h-[250px] lg:h-[350px]">
        <iframe
          src="https://www.youtube.com/embed/OqhT_f9pNpg?si=ojVPhrgY8onqzVwV"
          title="Placement Preparation tips"
          className="w-full h-full rounded-lg"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</section>
      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Stay UPDATED with our MASTERCLASSES</h2>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Type your email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Notified
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-[#F5C05A]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between bg-white rounded-lg p-8">
            <h2 className="text-3xl font-bold">More Queries?</h2>
            <button className="bg-black text-white px-8 py-3 rounded-md hover:opacity-90 transition-opacity">
              CONTACT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;