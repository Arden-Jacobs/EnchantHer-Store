"use client";

import React, { useState, useEffect } from "react";
import AuthModal from "@/components/auth-modal";
import { User, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>(null); // Explicitly set the type
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }
    getUser();
  }, [supabase.auth]);

  const handleSignUp = async () => {
    try {
      const res = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      setUser(res.data.user);
      toast.success("Check your email for confirmation link");
      router.refresh();
      setEmail("");
      setPassword("");
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Sign-up failed. Please try again.");
    }
  };

//   const handleSignIn = async () => {
//     const res = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });
//     setUser(res.data.user);
//     router.push("/giveaway");
//     setEmail("");
//     setPassword("");
//     setIsModalOpen(false);
//   };

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     router.refresh();
//     setUser(null);
//     setIsModalOpen(false);
//   };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <h1 className="text-red-600">loading..</h1>;
  }

  if (user) {
    return (
          <h1
          >
            Already entered draw
          </h1>
    );
  }

  return (
    <>
    <ToastContainer />
      <AuthModal isOpen={isModalOpen} onChange={closeModal}>
        <div className="h-auto flex items-center justify-center p-6">
          <div className="p-8 rounded-lg shadow-md w-96">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="mb-4 w-full p-3 rounded-md border text-black placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="mb-4 w-full p-3 rounded-md border text-black placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSignUp}
              className="w-full mb-2 p-3 rounded-md bg-red-500 text-white hover:bg-red-700 focus:outline-none"
            >
              Sign Up
            </button>
            {/* <button
              onClick={handleSignIn}
              className="w-full p-3 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outline-none"
            >
              Sign In
            </button> */}
          </div>
        </div>
      </AuthModal>

        <button
          onClick={() => setIsModalOpen(true)}
        >
          Sign Up
        </button>
    </>
  );
}
