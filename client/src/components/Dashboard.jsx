import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Gift, Wallet, History } from 'lucide-react';

const DashboardPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto space-y-8">
     {/* User Profile */}
     <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h2>
          <div className="flex items-center space-x-4">
            <img src="https://via.placeholder.com/80" alt="User" className="w-20 h-20 rounded-full border-2 border-blue-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-700">User Name</h3>
              <p className="text-gray-600">Email: user@example.com</p>
              <p className="text-gray-600">Current Token Balance: 1,234</p>
            </div>
          </div>
          <Link to="/profile/edit" className="block mt-4 text-blue-600 hover:underline">Edit Profile</Link>
        </section>
        {/* Metrics Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Wallet className="w-8 h-8 text-blue-500" />
              <h3 className="ml-3 text-xl font-semibold text-gray-700">Total Tokens</h3>
            </div>
            <p className="text-3xl text-blue-600">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <ArrowUpRight className="w-8 h-8 text-green-500" />
              <h3 className="ml-3 text-xl font-semibold text-gray-700">Points Earned</h3>
            </div>
            <p className="text-3xl text-green-600">567</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <History className="w-8 h-8 text-red-500" />
              <h3 className="ml-3 text-xl font-semibold text-gray-700">Points Redeemed</h3>
            </div>
            <p className="text-3xl text-red-600">345</p>
          </div>
        </section>

        {/* Rewards Catalog */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Rewards Catalog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="https://via.placeholder.com/150" alt="Reward" className="w-full h-32 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4">Reward Name</h3>
              <p className="text-gray-600 mt-2">Description of the reward item goes here.</p>
              <p className="text-blue-600 font-semibold mt-2">500 Tokens</p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700 transition duration-300">Redeem</button>
            </div>
            {/* More reward items can be added here */}
          </div>
        </section>

        {/* Transaction History */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Transaction History</h2>
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-left text-gray-700">Date</th>
                <th className="py-3 px-4 text-left text-gray-700">Description</th>
                <th className="py-3 px-4 text-left text-gray-700">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4 text-gray-600">2024-07-20</td>
                <td className="py-2 px-4 text-gray-600">Purchase at Store</td>
                <td className="py-2 px-4 text-green-600">+100 Tokens</td>
              </tr>
              {/* More transaction rows can be added here */}
            </tbody>
          </table>
        </section>

       
      </div>
    </main>
  );
};

export default DashboardPage;
