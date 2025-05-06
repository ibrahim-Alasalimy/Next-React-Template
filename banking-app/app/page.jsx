import React from 'react';

const HomePage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition duration-300 ease-in-out">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          IDE
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Create a modern banking application using Next.js, Node.js, and React
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-semibold text-primary dark:text-primary">Project Details</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          In this project, you will build a fully functional banking application that allows users to manage their accounts, view transactions, and perform various banking operations.
        </p>

        <h3 className="text-2xl font-semibold text-primary dark:text-primary mt-4">Requirements:</h3>
        <ul className="list-disc list-inside mb-4">
          <li className="text-gray-700 dark:text-gray-300">User authentication (sign up, login, logout)</li>
          <li className="text-gray-700 dark:text-gray-300">Account management (view balance, transaction history)</li>
          <li className="text-gray-700 dark:text-gray-300">Transfer funds between accounts</li>
          <li className="text-gray-700 dark:text-gray-300">Responsive design for mobile and desktop</li>
          <li className="text-gray-700 dark:text-gray-300">Use of RESTful APIs for backend communication</li>
        </ul>

        <h3 className="text-2xl font-semibold text-primary dark:text-primary mt-4">Technologies to Use:</h3>
        <ul className="list-disc list-inside mb-4">
          <li className="text-gray-700 dark:text-gray-300">Next.js for server-side rendering</li>
          <li className="text-gray-700 dark:text-gray-300">Node.js for backend services</li>
          <li className="text-gray-700 dark:text-gray-300">React for building user interfaces</li>
          <li className="text-gray-700 dark:text-gray-300">Tailwind CSS for styling</li>
          <li className="text-gray-700 dark:text-gray-300">MongoDB or any other database for data storage</li>
        </ul>

        <h3 className="text-2xl font-semibold text-primary dark:text-primary mt-4">Submission Guidelines:</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Please submit your project by pushing your code to a GitHub repository and sharing the link with me. Ensure your app is deployed and accessible online.
        </p>
      </section>

      <footer className="text-center mt-6">
        <p className="text-gray-600 dark:text-gray-400">Good luck, and have fun building your banking app!</p>
      </footer>
    </div>
  );
};

export default HomePage;
