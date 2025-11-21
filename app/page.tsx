import Image from "next/image";
import Link from "next/link";
import { Truck, Shield, Clock, Users, Star, Smartphone, ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#344B77] rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Gerayo Amahoro</span>
              </div>
              {/* Navigation Links */}
              <nav className="hidden md:flex items-center gap-6">
                <a href="#home" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Home
                </a>
                <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Features
                </a>
                <a href="#mobile-app" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Mobile App
                </a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Contact
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="bg-[#344B77] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#2a3d63] transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-[#344B77] to-[#2a3d63] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Reliable Delivery
                <span className="block text-blue-200">Solutions</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Connect with trusted delivery services across Rwanda. Fast, secure, and affordable logistics for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="bg-white text-[#344B77] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  Start Your Business
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#features"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#344B77] transition-colors flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px]">
                <Image
                  src="/tracking_truck.png"
                  alt="Delivery tracking"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Gerayo Amahoro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive delivery solutions with cutting-edge technology and reliable service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#344B77]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#344B77]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Same-day and express delivery options available across major cities.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#344B77]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#344B77]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Safe</h3>
              <p className="text-gray-600">Advanced tracking and insurance coverage for all your packages.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#344B77]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#344B77]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Network</h3>
              <p className="text-gray-600">Verified drivers and partners ensuring reliable service delivery.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#344B77]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#344B77]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">5-Star Service</h3>
              <p className="text-gray-600">Rated excellent by thousands of satisfied customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section id="mobile-app" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Get Our Mobile App
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Track your deliveries, manage orders, and stay connected with our drivers on the go. Available for iOS and Android.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Real-time tracking and notifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Easy order management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Direct communication with drivers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Secure payment options</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                    className="h-12 w-auto"
                  />
                </a>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={137}
                    height={40}
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div>
            
            {/* Mobile App Screenshots */}
            <div className="relative">
              <div className="flex justify-center items-center gap-4 lg:gap-6">
                {/* Phone 1 - Map/Booking Screen */}
                <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-48 h-96 bg-white rounded-3xl shadow-2xl p-2 border border-gray-200">
                    <div className="w-full h-full bg-gray-100 rounded-2xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white">
                        <div className="p-4 space-y-4">
                          <div className="flex justify-between items-center">
                            <div className="text-xs font-semibold">9:41</div>
                            <div className="flex gap-1">
                              <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                              <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                              <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                            </div>
                          </div>
                          <div className="bg-gray-200 h-48 rounded-lg relative">
                            <div className="absolute top-4 left-4 w-8 h-8 bg-[#344B77] rounded-full flex items-center justify-center">
                              <Smartphone className="w-4 h-4 text-white" />
                            </div>
                            <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#344B77] rounded-full flex items-center justify-center">
                              <Smartphone className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="text-sm font-semibold">Book your ride!</div>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
                                <span className="text-xs">Locations</span>
                                <span className="text-xs">›</span>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
                                <span className="text-xs">Type of car</span>
                                <span className="text-xs">›</span>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
                                <span className="text-xs">Payment</span>
                                <span className="text-xs">›</span>
                              </div>
                            </div>
                            <button className="w-full bg-[#344B77] text-white py-2 rounded-lg text-sm font-semibold">
                              Book →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone 2 - Earnings Screen */}
                <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-300 z-10">
                  <div className="w-48 h-96 bg-white rounded-3xl shadow-2xl p-2 border border-gray-200">
                    <div className="w-full h-full bg-gray-100 rounded-2xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white">
                        <div className="p-4 space-y-4">
                          <div className="flex justify-between items-center">
                            <div className="text-xs font-semibold">9:41</div>
                            <div className="flex gap-1">
                              <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                              <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                              <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-semibold mb-2">Earnings</div>
                            <div className="bg-blue-100 p-3 rounded-lg">
                              <div className="text-xs text-gray-600">Total Earnings</div>
                              <div className="text-lg font-bold">$120.50</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-xs font-semibold">Growth</div>
                            <div className="bg-gray-200 h-20 rounded"></div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-xs font-semibold">Earnings Breakdown</div>
                            <div className="space-y-1">
                              <div className="flex justify-between items-center p-2 bg-gray-100 rounded text-xs">
                                <span>🚗 15 Rides</span>
                                <span>$55.5</span>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-gray-100 rounded text-xs">
                                <span>📦 9 Deliveries</span>
                                <span>$55.5</span>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-gray-100 rounded text-xs">
                                <span>🎁 5 Bonuses</span>
                                <span>$55.5</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#344B77]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Delivery Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already using Gerayo Amahoro for their delivery needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-[#344B77] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/login"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#344B77] transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#344B77] rounded-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">Gerayo Amahoro</span>
              </div>
              <p className="text-gray-400">
                Reliable delivery solutions across Rwanda. Fast, secure, and affordable.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Express Delivery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Same Day Delivery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bulk Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">International</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Gerayo Amahoro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
