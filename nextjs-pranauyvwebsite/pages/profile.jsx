// pages/dashboard.jsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import supabase from '../utils/supabaseClient';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error || !session) {
        router.push('/login');
      } else {
        setUser(session.user);
      }

      setLoading(false);
    };

    getUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return <div className="text-center mt-40 text-lg font-semibold">Loading...</div>;
  }

  return (
    <div className="min-h-screen mt-7 bg-gradient-to-br from-white to-blue-50 py-20 px-4">
      <motion.div
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800">
            Welcome, {user?.user_metadata?.full_name || user?.email?.split('@')[0]} 👋
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition-all"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <Card title="Your Profile" value={user.email} icon="👤" />
        </div>
      </motion.div>
    </div>
  );
}

function Card({ title, value, icon }) {
  return (
    <motion.div
      className="bg-blue-100 text-blue-900 rounded-2xl p-6 shadow-md"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm mt-1">{value}</p>
    </motion.div>
  );
}
