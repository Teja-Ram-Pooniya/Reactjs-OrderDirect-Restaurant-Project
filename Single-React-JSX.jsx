import React, { useState, useEffect } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Google Integration",
      description: "Seamlessly connect with Google Business to manage your online presence and orders in one place.",
      icon: "google"
    },
    {
      title: "Flexible Pickup & Delivery",
      description: "Offer customers multiple fulfillment options with smart routing and time slot management.",
      icon: "delivery"
    },
    {
      title: "Smart Menu Management",
      description: "Update menus across all platforms instantly with our intuitive drag-and-drop interface.",
      icon: "menu"
    },
    {
      title: "Pricing Control",
      description: "Set your own fees and commissions without third-party platform restrictions or hidden costs.",
      icon: "pricing"
    }
  ];

  const howItWorks = [
    {
      title: "Setup Your Account",
      description: "Quick and easy onboarding process to get your restaurant live in minutes."
    },
    {
      title: "Connect Platforms",
      description: "Integrate with Google and other platforms to centralize order management."
    },
    {
      title: "Manage Orders",
      description: "Process orders from all platforms in one intuitive dashboard."
    },
    {
      title: "Grow Your Business",
      description: "Focus on food quality while we handle the technology behind the scenes."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Owner, The Urban Bistro",
      quote: "Since switching to this platform, we've saved thousands in fees and gained complete control over our online ordering process.",
      avatar: "https://placehold.co/100x100"
    },
    {
      name: "Michael Chen",
      role: "Manager, Spice Garden",
      quote: "The integration with Google has dramatically increased our visibility and order volume without the high platform fees.",
      avatar: "https://placehold.co/100x100"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small restaurants just getting started with online ordering.",
      features: [
        "Up to 500 monthly orders",
        "Basic menu management",
        "Single location support",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$99",
      description: "Ideal for growing restaurants with multiple locations and higher volume.",
      features: [
        "Up to 2500 monthly orders",
        "Advanced menu management",
        "Multiple location support",
        "Priority support",
        "Custom integrations"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large restaurant chains with complex needs and high volume.",
      features: [
        "Unlimited orders",
        "Full feature set",
        "Dedicated account manager",
        "API access",
        "Custom development"
      ]
    }
  ];

  const partners = [
    { name: "Google", logo: "https://placehold.co/100x50" },
    { name: "Uber Eats", logo: "https://placehold.co/100x50" },
    { name: "DoorDash", logo: "https://placehold.co/100x50" },
    { name: "Postmates", logo: "https://placehold.co/100x50" },
    { name: "Grubhub", logo: "https://placehold.co/100x50" }
  ];

  const faq = [
    {
      question: "How does the Google integration work?",
      answer: "Our platform connects directly to your Google Business listing, allowing you to manage your menu, hours, and orders all in one place."
    },
    {
      question: "Can I use my own delivery drivers?",
      answer: "Yes! Our platform supports both third-party delivery services and your own in-house delivery team with route optimization tools."
    },
    {
      question: "Is there a contract or commitment?",
      answer: "No long-term contracts! You can cancel at any time with 30 days notice. We believe in earning your business every month."
    },
    {
      question: "How are payments processed?",
      answer: "We integrate with major payment processors to handle transactions securely. You receive payments directly to your account."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-orange-500">OrderDirect</div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-orange-500 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-orange-500 transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</a>
          </nav>
          
          {/* Call to Action Button */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors transform hover:scale-105"
            >
              Get Started
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-orange-500 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-orange-500 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors">Testimonials</a>
              <a href="#pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</a>
              <a 
                href="#contact" 
                className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors w-full text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Skip Hefty Platform Fees & Take Control of Your Orders
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Our cutting-edge platform seamlessly integrates with Google, offering flexible pickup and delivery options with smart menu and pricing management.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#features" 
                className="px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors text-lg font-medium text-center transform hover:scale-105"
              >
                Learn More
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white text-orange-500 rounded-full hover:bg-gray-100 transition-colors text-lg font-medium border-2 border-orange-500 text-center transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-orange-100 rounded-lg transform rotate-3"></div>
              <img 
                src="https://placehold.co/600x400" 
                alt="Restaurant online ordering interface" 
                className="relative z-10 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your online orders efficiently and cost-effectively
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  {feature.icon === "google" && (
                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.787-1.604-4.11-2.56-6.735-2.56-5.422 0-9.834 4.411-9.834 9.834s4.411 9.834 9.834 9.834c5.989 0 9.229-4.519 9.229-8.421 0-0.662-0.075-1.309-0.191-1.945h-9.038z"/>
                    </svg>
                  )}
                  {feature.icon === "delivery" && (
                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  )}
                  {feature.icon === "menu" && (
                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 8h16v2H4zm0 5h16v2H4zm0 5h16v2H4zm18-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2H2a2 2 0 0 1-2-2 2 2 0 0 1 2-2h20z"/>
                    </svg>
                  )}
                  {feature.icon === "pricing" && (
                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-14c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm0 15c-2.757 0-5-2.243-5-5h2c0 1.654 1.346 3 3 3s3-1.346 3-3h2c0 2.757-2.243 5-5 5z"/>
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started with our platform is quick and easy
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-orange-200 hidden md:block"></div>
            
            <div className="space-y-16 md:space-y-0">
              {howItWorks.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center">
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:order-2'}`}>
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:order-1'}`}>
                    <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <img 
                        src={`https://placehold.co/600x400?text=Step+${index + 1}`} 
                        alt={step.title} 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from restaurants like yours that have saved money and improved efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your restaurant's needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                  plan.highlighted ? 'border-2 border-orange-500 transform scale-105' : ''
                }`}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#contact" 
                    className={`w-full block text-center px-6 py-3 rounded-full ${
                      plan.highlighted 
                        ? 'bg-orange-500 text-white hover:bg-orange-600' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    } transition-colors transform hover:scale-105`}
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform integrates seamlessly with major delivery and online ordering platforms
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our restaurant online ordering platform
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faq.map((item, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control of Your Orders?</h2>
              <p className="text-xl mb-8">
                Get in touch with our team to learn how we can help you reduce fees and improve your online ordering experience.
              </p>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit" 
                    className="px-8 py-3 bg-white text-orange-500 rounded-full hover:bg-gray-100 transition-colors font-medium transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">OrderDirect</h3>
              <p className="text-gray-400">
                Helping restaurants take control of their online orders and reduce platform fees.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-gray-400">info@orderdirect.com</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-400">123 Restaurant Tech Ave, Food City, FC 12345</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} OrderDirect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
