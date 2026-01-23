
// Static mock data
const MOCK_USER = {
  id: '1',
  name: 'John Doe',
  email: 'user@example.com',
  token: 'mock-jwt-token-12345'
};

export const MockAuthService = {
  login: async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simple mock check
        if (email && password) {
            // In a real app we'd check credentials
             resolve({
                user: { ...MOCK_USER, email },
                message: 'Login successful'
             });
        } else {
          reject('Invalid credentials');
        }
      }, 500); // Simulate network delay
    });
  },

  register: async (userData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
            user: { ...MOCK_USER, ...userData },
            message: 'Registration successful'
        });
      }, 500);
    });
  },
  
  logout: async () => {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve({ message: 'Logout successful' });
          }, 300);
      })
  }
};
