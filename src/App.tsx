import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Palette, Zap, CreditCard, MessageCircle } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Palette className="h-16 w-16 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            Unlock Your Creative Potential
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Exclusive Canva Pro subscription offer with limited slots available!
            Perfect for students, creators, and educators.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
            onClick={() => window.location.href = "#pricing"}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Claim Your Offer Now
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 border-none shadow-xl">
            <Zap className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Premium Features</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access all premium templates, elements, and features
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 border-none shadow-xl">
            <CreditCard className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Flexible Payment</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Easy payment via UPI or PayPal
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 border-none shadow-xl">
            <MessageCircle className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get help whenever you need it
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <div id="pricing" className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Limited Time Offer!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Don't miss out on this exclusive opportunity to elevate your design game.
            DM now to secure your slot!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
              onClick={() => window.location.href = "https://upi.link"}
            >
              Pay with UPI
            </Button>
            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              onClick={() => window.location.href = "https://paypal.me"}
            >
              Pay with PayPal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;