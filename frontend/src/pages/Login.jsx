import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import api from "../api/axios"; 
import Navbar from "../components/Navbar";


const schema = z.object({
  username: z.string().min(3, "Le nom d'utilisateur doit contenir au moins 3 caractères"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/auth/login", data);
      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Identifiants invalides");
    }
  };

  return (
    <div className="min-h-screen bg-hazel-light flex flex-col font-cormorant">
      <Navbar transparent={false} />

      <div className="flex-grow flex items-center justify-center px-4 py-12">

        <div className="max-w-md w-full bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-hazel-btn/20 text-center">
          
          <h2 className="text-4xl font-bold text-hazel-rust mb-2 tracking-wide">
            Espace Administration
          </h2>
          <p className="text-md text-hazel-brown italic mb-8 tracking-wider">
            Accès strictement réservé à la photographe
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
            
            {/* CHAMP NOM D'UTILISATEUR */}
            <div>
              <label className="block text-lg font-medium text-hazel-brown mb-2 tracking-wide">
                Nom d'utilisateur
              </label>
              <input 
                type="text" 
                {...register("username")} 
                placeholder="Ex: Hazel_admin" 
                className="w-full px-4 py-3 bg-white/90 border border-hazel-btn/40 text-hazel-brown rounded-xl outline-none focus:ring-2 focus:ring-hazel-rust focus:border-transparent transition-all duration-300 placeholder-hazel-btn/50 text-lg" 
              />
              {errors.username && (
                <p className="text-hazel-rust text-sm mt-1.5 italic font-sans">{errors.username.message}</p>
              )}
            </div>

            {/* CHAMP MOT DE PASSE */}
            <div>
              <label className="block text-lg font-medium text-hazel-brown mb-2 tracking-wide">
                Mot de passe
              </label>
              <input 
                type="password" 
                {...register("password")} 
                placeholder="••••••••" 
                className="w-full px-4 py-3 bg-white/90 border border-hazel-btn/40 text-hazel-brown rounded-xl outline-none focus:ring-2 focus:ring-hazel-rust focus:border-transparent transition-all duration-300 placeholder-hazel-btn/50 text-lg" 
              />
              {errors.password && (
                <p className="text-hazel-rust text-sm mt-1.5 italic font-sans">{errors.password.message}</p>
              )}
            </div>

            {/* BTN */}
            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full bg-hazel-rust hover:bg-[#6F2E2E] text-white font-medium py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 uppercase tracking-widest text-sm active:scale-[0.98]"
              >
                Se connecter
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;