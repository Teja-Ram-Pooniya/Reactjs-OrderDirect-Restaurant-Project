

import React, { useState, useEffect } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('orders');
  const [darkMode, setDarkMode] = useState(false);

  // Mock data for dashboard
  const orders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      items: '2x Margherita Pizza, 1x Caesar Salad',
      time: '10:30 AM',
      status: 'Processing',
      total: '$45.99',
      type: 'Delivery'
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      items: '1x Spaghetti Bolognese, 1x Tiramisu',
      time: '11:15 AM',
      status: 'Ready for Pickup',
      total: '$38.50',
      type: 'Pickup'
    },
    {
      id: 'ORD-003',
      customer: 'Mike Johnson',
      items: '3x Chicken Wings, 2x Cola',
      time: '12:45 PM',
      status: 'Out for Delivery',
      total: '$29.75',
      type: 'Delivery'
    }
  ];

  const inventory = [
    { item: 'Tomato Sauce', quantity: 150, unit: 'kg', threshold: 50 },
    { item: 'Mozzarella Cheese', quantity: 80, unit: 'kg', threshold: 40 },
    { item: 'Basil Leaves', quantity: 20, unit: 'g', threshold: 10 },
    { item: 'Pasta', quantity: 300, unit: 'kg', threshold: 100 },
    { item: 'Cola Syrup', quantity: 5, unit: 'L', threshold: 2 }
  ];

  const timeFrames = [
    { day: 'Monday', open: '11:00 AM', close: '9:00 PM', delivery: '11:00 AM - 8:30 PM' },
    { day: 'Tuesday', open: '11:00 AM', close: '9:00 PM', delivery: '11:00 AM - 8:30 PM' },
    { day: 'Wednesday', open: '11:00 AM', close: '9:00 PM', delivery: '11:00 AM - 8:30 PM' },
    { day: 'Thursday', open: '11:00 AM', close: '10:00 PM', delivery: '11:00 AM - 9:30 PM' },
    { day: 'Friday', open: '11:00 AM', close: '11:00 PM', delivery: '11:00 AM - 10:30 PM' },
    { day: 'Saturday', open: '10:00 AM', close: '11:00 PM', delivery: '10:00 AM - 10:30 PM' },
    { day: 'Sunday', open: '10:00 AM', close: '8:00 PM', delivery: '10:00 AM - 7:30 PM' }
  ];

  const staff = [
    { id: 'STF-001', name: 'Sarah Johnson', role: 'Head Chef', schedule: 'Mon-Fri 9AM-6PM', availability: 'Available' },
    { id: 'STF-002', name: 'David Williams', role: 'Server', schedule: 'Weekends 10AM-10PM', availability: 'Available' },
    { id: 'STF-003', name: 'Emily Davis', role: 'Delivery Driver', schedule: 'Daily 11AM-9PM', availability: 'Busy' }
  ];

  const menuItems = [
    { id: 'MN-001', name: 'Margherita Pizza', category: 'Pizza', price: '$14.99', available: true },
    { id: 'MN-002', name: 'Caesar Salad', category: 'Salad', price: '$8.99', available: true },
    { id: 'MN-003', name: 'Spaghetti Bolognese', category: 'Pasta', price: '$12.99', available: false },
    { id: 'MN-004', name: 'Tiramisu', category: 'Dessert', price: '$6.99', available: true },
    { id: 'MN-005', name: 'Cola', category: 'Drink', price: '$2.50', available: true }
  ];

  const salesData = {
    daily: [
      { day: 'Mon', sales: 1200 },
      { day: 'Tue', sales: 950 },
      { day: 'Wed', sales: 800 },
      { day: 'Thu', sales: 1100 },
      { day: 'Fri', sales: 1500 },
      { day: 'Sat', sales: 1800 },
      { day: 'Sun', sales: 900 }
    ],
    orderTypes: [
      { type: 'Delivery', percentage: 60 },
      { type: 'Pickup', percentage: 40 }
    ]
  };

  const customerReviews = [
    {
      customer: 'Alex Wilson',
      rating: 5,
      comment: 'Amazing food and quick delivery! Will definitely order again.',
      date: '2023-10-15'
    },
    {
      customer: 'Mia Thompson',
      rating: 4,
      comment: 'Great service but the pasta was a bit undercooked.',
      date: '2023-10-14'
    },
    {
      customer: 'James Brown',
      rating: 3,
      comment: 'Average experience. The delivery took longer than expected.',
      date: '2023-10-12'
    }
  ];

  const notifications = [
    { id: 1, message: 'Low stock alert: Basil Leaves (20g left)', time: '10 minutes ago' },
    { id: 2, message: 'New order received: ORD-003', time: '5 minutes ago' },
    { id: 3, message: 'Staff reminder: David Williams scheduled for shift today', time: '1 hour ago' }
  ];

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

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2 dark:bg-gray-800' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-orange-500">OrderDirect</div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-orange-500 transition-colors dark:text-gray-300">Features</a>
            <a href="#dashboard" className="text-gray-700 hover:text-orange-500 transition-colors dark:text-gray-300">Dashboard</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-orange-500 transition-colors dark:text-gray-300">How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors dark:text-gray-300">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-orange-500 transition-colors dark:text-gray-300">Pricing</a>
          </nav>
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          
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
            className="md:hidden flex items-center text-gray-700 dark:text-gray-300"
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
          <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-fadeIn dark:bg-gray-800">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-orange-500 transition-colors dark:text-gray-300">Features</a>
              <a href="#dashboard" className="text-gray-700 hover:text-orange-500 transition-colors dark:text-gray-300">Dashboard</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-orange-500 transition-colors dark:text-gray-300">How It Works</a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors dark:text-gray-300">Testimonials</a>
              <a href="#pricing" className="text-gray-700 hover:text-orange-500 transition-colors dark:text-gray-300">Pricing</a>
              <a 
                href="#contact" 
                className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors w-full text-center"
              >
                Get Started
              </a>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors dark:text-gray-300 dark:hover:text-orange-400"
              >
                {darkMode ? (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                    </svg>
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 dark:text-white">
              Skip Hefty Platform Fees & Take Control of Your Orders
            </h1>
            <p className="text-xl text-gray-700 mb-8 dark:text-gray-300">
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
                className="px-8 py-4 bg-white text-orange-500 rounded-full hover:bg-gray-100 transition-colors text-lg font-medium border-2 border-orange-500 text-center transform hover:scale-105 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700 dark:border-orange-400"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-orange-100 rounded-lg transform rotate-3 dark:bg-gray-700"></div>
              <img 
                src="https://placehold.co/600x400" 
                alt="Restaurant online ordering interface" 
                className="relative z-10 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Dashboard Section */}
      <section id="dashboard" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">All-in-One Dashboard</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
              Track your orders, manage inventory, and set time frames in real-time from our intuitive dashboard
            </p>
          </div>
          
          {/* Dashboard Tabs */}
          <div className="flex justify-center mb-8 space-x-1">
            <button 
              className={`px-6 py-3 rounded-lg transition-colors ${activeTab === 'orders' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
              onClick={() => setActiveTab('orders')}
            >
              Order Tracking
            </button>
            <button 
              className={`px-6 py-3 rounded-lg transition-colors ${activeTab === 'inventory' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
              onClick={() => setActiveTab('inventory')}
            >
              Inventory Management
            </button>
            <button 
              className={`px-6 py-3 rounded-lg transition-colors ${activeTab === 'timeframes' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
              onClick={() => setActiveTab('timeframes')}
            >
              Time Frame Settings
            </button>
            <button 
              className={`px-6 py-3 rounded-lg transition-colors ${activeTab === 'analytics' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
              onClick={() => setActiveTab('analytics')}
            >
              Analytics & Reports
            </button>
            <button 
              className={`px-6 py-3 rounded-lg transition-colors ${activeTab === 'staff' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
              onClick={() => setActiveTab('staff')}
            >
              Staff Management
            </button>
            <button 
              className={`px-6 py-3 rounded-lg transition-colors ${activeTab === 'menu' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
              onClick={() => setActiveTab('menu')}
            >
              Menu Management
            </button>
            <button 
              className={`px-6 py-3 rounded-lg transition-colors ${activeTab === 'reviews' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
              onClick={() => setActiveTab('reviews')}
            >
              Customer Reviews
            </button>
          </div>
          
          {/* Order Tracking Tab */}
          {activeTab === 'orders' && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Orders</h3>
                  <div className="flex space-x-4">
                    <select className="px-3 py-2 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300">
                      <option>All Statuses</option>
                      <option>Processing</option>
                      <option>Ready for Pickup</option>
                      <option>Out for Delivery</option>
                      <option>Completed</option>
                    </select>
                    <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors dark:bg-orange-600 dark:hover:bg-orange-700">
                      Export
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Order ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Items</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Total</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {orders.map((order, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{order.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{order.customer}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{order.items}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{order.time}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 
                                order.status === 'Ready for Pickup' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 
                                order.status === 'Out for Delivery' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' : 
                                'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{order.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{order.total}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300">View</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">3</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600">
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600">1</button>
                      <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600">
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Inventory Management Tab */}
          {activeTab === 'inventory' && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Inventory Management</h3>
                  <div className="flex space-x-4">
                    <select className="px-3 py-2 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300">
                      <option>All Categories</option>
                      <option>Produce</option>
                      <option>Dairy</option>
                      <option>Meat</option>
                      <option>Drinks</option>
                    </select>
                    <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors dark:bg-orange-600 dark:hover:bg-orange-700">
                      Add Item
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Item</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Quantity</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Unit</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Reorder Threshold</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Status</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {inventory.map((item, index) => (
                        <tr key={index} className={`hover:bg-gray-50 dark:hover:bg-gray-700 ${item.quantity < item.threshold ? 'bg-red-50 dark:bg-red-900/20' : ''}`}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{item.item}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{item.quantity}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{item.unit}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{item.threshold} {item.unit}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${item.quantity < item.threshold ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 
                                'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}`}>
                              {item.quantity < item.threshold ? 'Low Stock' : 'In Stock'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300">Edit</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors dark:bg-green-600 dark:hover:bg-green-700">
                    Update Inventory
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Time Frame Settings Tab */}
          {activeTab === 'timeframes' && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Time Frame Settings</h3>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors dark:bg-orange-600 dark:hover:bg-orange-700">
                    Save Changes
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Day</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Restaurant Hours</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Delivery Hours</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {timeFrames.map((frame, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{frame.day}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            <div className="flex items-center space-x-2">
                              <input 
                                type="text" 
                                defaultValue={frame.open} 
                                className="w-20 px-2 py-1 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                              />
                              <span>-</span>
                              <input 
                                type="text" 
                                defaultValue={frame.close} 
                                className="w-20 px-2 py-1 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            <div className="flex items-center space-x-2">
                              <input 
                                type="text" 
                                defaultValue={frame.delivery} 
                                className="w-32 px-2 py-1 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300">Reset</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 dark:text-white">Sales Analytics</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Daily Sales Chart */}
                  <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-700">
                    <h4 className="text-lg font-medium text-gray-900 mb-4 dark:text-white">Daily Sales</h4>
                    <div className="h-64 flex items-end justify-around">
                      {salesData.daily.map((day, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div 
                            className="w-10 bg-orange-500 rounded-t transition-all duration-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
                            style={{ height: `${(day.sales / 20)}px` }}
                          ></div>
                          <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">{day.day}</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">${day.sales}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Order Type Distribution */}
                  <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-700">
                    <h4 className="text-lg font-medium text-gray-900 mb-4 dark:text-white">Order Type Distribution</h4>
                    <div className="h-64 flex items-center justify-center">
                      <div className="relative w-48 h-48">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#f97316" strokeWidth="30" strokeDasharray={`${salesData.orderTypes[0].percentage} 100`} />
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#fdba74" strokeWidth="30" strokeDasharray={`${salesData.orderTypes[1].percentage} 100`} strokeDashoffset={`-${salesData.orderTypes[0].percentage}`} />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-center">
                          <div>
                            <div className="text-xl font-bold text-gray-900 dark:text-white">Orders</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">By Type</div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-orange-500 rounded-sm mr-2"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">Delivery ({salesData.orderTypes[0].percentage}%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-orange-200 rounded-sm mr-2"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">Pickup ({salesData.orderTypes[1].percentage}%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
                    <div className="text-sm font-medium text-orange-100">Total Sales</div>
                    <div className="mt-2 text-3xl font-bold">$8,945.74</div>
                    <div className="mt-4 text-sm text-orange-100 flex items-center">
                      <span>↑ 12% from last week</span>
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                    <div className="text-sm font-medium text-blue-100">Orders Processed</div>
                    <div className="mt-2 text-3xl font-bold">1,234</div>
                    <div className="mt-4 text-sm text-blue-100 flex items-center">
                      <span>↑ 8% from last week</span>
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                    <div className="text-sm font-medium text-green-100">Customer Satisfaction</div>
                    <div className="mt-2 text-3xl font-bold">4.7/5.0</div>
                    <div className="mt-4 text-sm text-green-100 flex items-center">
                      <span>↑ 0.2 from last month</span>
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Staff Management Tab */}
          {activeTab === 'staff' && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Staff Management</h3>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors dark:bg-orange-600 dark:hover:bg-orange-700">
                    Add Staff
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Schedule</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Availability</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {staff.map((member, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{member.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{member.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{member.role}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{member.schedule}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${member.availability === 'Available' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                                'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                              {member.availability}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300">Edit</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {/* Menu Management Tab */}
          {activeTab === 'menu' && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Menu Management</h3>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors dark:bg-orange-600 dark:hover:bg-orange-700">
                    Add Menu Item
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Availability</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {menuItems.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{item.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{item.category}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{item.price}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${item.available ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                                'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                              {item.available ? 'Available' : 'Out of Stock'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300">Edit</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {/* Customer Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 dark:text-white">Customer Reviews</h3>
                <div className="space-y-6">
                  {customerReviews.map((review, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg dark:bg-gray-700">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white">{review.customer}</h4>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="mt-2 text-gray-600 dark:text-gray-300">{review.comment}</p>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{review.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Key Features Section */}
      <section id="features" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
              Everything you need to manage your online orders efficiently and cost-effectively
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Existing features from previous code */}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
              Getting started with our platform is quick and easy
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-orange-200 hidden md:block dark:bg-orange-800"></div>
            
            <div className="space-y-16 md:space-y-0">
              {/* Existing how it works content from previous code */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
              Hear from restaurants like yours that have saved money and improved efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Existing testimonials from previous code */}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
              Choose the plan that fits your restaurant's needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Existing pricing plans from previous code */}
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 dark:text-white">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Our platform integrates seamlessly with major delivery and online ordering platforms
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Existing partners from previous code */}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
              Everything you need to know about our restaurant online ordering platform
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {/* Existing FAQ content from previous code */}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
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
      <footer className="bg-gray-900 text-white py-12 dark:bg-gray-950">
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
                <li><a href="#dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</a></li>
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
