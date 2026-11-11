export const meta = () => [
  { title: 'Resumind | Auth' },
  { name: 'description', content: 'Log into your account' },
];

const Auth = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[url('/images/bg-main.svg')] bg-cover p-4">
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md w-full text-center space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
          <p className="text-gray-500 mt-2 text-sm">Log In to Continue Your Job Journey</p>
        </div>

        <button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-md transition-colors duration-200">
          Log In
        </button>
      </div>
    </main>
  );
};

export default Auth;