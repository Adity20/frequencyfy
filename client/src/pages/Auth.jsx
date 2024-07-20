import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AlertCircle } from 'lucide-react';

const AuthComponent = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [authMethod, setAuthMethod] = useState('traditional');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin
      ? authMethod === 'traditional'
        ? '/api/auth/login'
        : '/api/auth/crypto-login'
      : '/api/auth/register';

    const body = authMethod === 'traditional'
      ? { email, password }
      : { walletAddress };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Auth success:', data);
        onClose();
      } else {
        console.error('Auth error:', data);
        alert(data.error);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please try again.');
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        alert('Wallet connected!');
      } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Failed to connect wallet.');
      }
    } else {
      alert('Please install MetaMask.');
    }
  };

  // UI Components
  const Button = ({ children, className, ...props }) => (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  const Input = ({ className, ...props }) => (
    <input
      className={`w-full px-3 py-2 border rounded ${className}`}
      {...props}
    />
  );

  Input.propTypes = {
    className: PropTypes.string,
  };

  const Card = ({ children, className, ...props }) => (
    <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>
      {children}
    </div>
  );

  Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  const CardHeader = ({ children }) => (
    <div className="px-6 py-4 border-b">{children}</div>
  );

  CardHeader.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const CardContent = ({ children }) => (
    <div className="px-6 py-4">{children}</div>
  );

  CardContent.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const CardTitle = ({ children }) => (
    <h2 className="text-xl font-bold">{children}</h2>
  );

  CardTitle.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const Tabs = ({ children, value, onValueChange }) => (
    <div className="space-y-4">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { value, onValueChange })
      )}
    </div>
  );

  Tabs.propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired,
  };

  const TabsList = ({ children }) => (
    <div className="flex space-x-2 border-b">{children}</div>
  );

  TabsList.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const TabsTrigger = ({ children, value, onValueChange, selectedValue }) => (
    <button
      className={`px-4 py-2 ${selectedValue === value ? 'border-b-2 border-blue-500' : ''}`}
      onClick={() => onValueChange(value)}
    >
      {children}
    </button>
  );

  TabsTrigger.propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };

  const TabsContent = ({ children, value, selectedValue }) => (
    selectedValue === value ? <div>{children}</div> : null
  );

  TabsContent.propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.string.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };

  const Label = ({ children, htmlFor }) => (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  );

  Label.propTypes = {
    children: PropTypes.node.isRequired,
    htmlFor: PropTypes.string.isRequired,
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>{isLogin ? 'Login' : 'Sign Up'}</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={authMethod} onValueChange={setAuthMethod}>
            <TabsList>
              <TabsTrigger value="traditional" selectedValue={authMethod}>Traditional</TabsTrigger>
              <TabsTrigger value="crypto" selectedValue={authMethod}>Crypto</TabsTrigger>
            </TabsList>
            <TabsContent value="traditional" selectedValue={authMethod}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  {isLogin ? 'Login' : 'Sign Up'}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="crypto" selectedValue={authMethod}>
              <div className="space-y-4">
                <p className="text-sm text-gray-500 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Connect your wallet to {isLogin ? 'login' : 'sign up'} with your crypto account.
                </p>
                <Button onClick={connectWallet} className="w-full">
                  Connect Wallet
                </Button>
                {walletAddress && (
                  <div className="text-sm text-gray-500">
                    Connected: {walletAddress}
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-blue-500 hover:underline"
            >
              {isLogin ? 'Need an account? Sign up' : 'Already have an account? Login'}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

AuthComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AuthComponent;
