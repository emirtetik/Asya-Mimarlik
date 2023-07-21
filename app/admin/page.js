"use client"
import React, {useState} from 'react';
import AdminPanel from './adminpanel/page';


function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const admin = {
    [process.env.NEXT_PUBLIC_ADMIN ]: process.env.NEXT_PUBLIC_PASSWORD ,
  };

 
  const handleLogin = () => {
    // Kullanıcı adı ve şifre doğrulamasını gerçekleştir
    if (admin[username] === password) {
      setIsLoggedIn(true);
    } else {
      setError('Kullanıcı adı veya şifre yanlış.');
    }
  };

  return (
    <main>
      {isLoggedIn ? (
        <AdminPanel />
      ) : (
        <section className="w-full h-full">
          <div className="container h-full px-4 mx-auto ">
            <div className="flex items-center content-center justify-center h-screen">
              <div className="w-full px-4 lg:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-300 border-0 rounded-lg shadow-lg">
                  <div className="flex-auto px-4 py-10 pt-4 lg:px-10">
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                          htmlFor="username"
                        >
                          Username
                        </label>
                        <input
                          onChange={(e) => setUsername(e.target.value)}
                          value={username}
                          id="username"
                          type="text"
                          className="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
                          placeholder="Username"
                          style={{ transition: 'all .15s ease' }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          id="password"
                          className="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
                          placeholder="Password"
                          style={{ transition: 'all .15s ease' }}
                        />
                      </div>

                      <div className="mt-6 text-center">
                        {error && <div className="text-red-500">{error}</div>}
                        <button
                          onClick={handleLogin}
                          className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-900 rounded shadow outline-none active:bg-gray-700 hover:shadow-lg focus:outline-none"
                          type="button"
                          style={{ transition: 'all .15s ease' }}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default Login;
