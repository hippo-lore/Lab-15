import React, { useState } from "react";

function ProfileCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-fadeIn">
      
      <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-80 text-center border border-white/30 hover:scale-105 transition duration-500">
        
        <img
          src="https://api.dicebear.com/7.x/adventurer/png?seed=anime"
          alt="anime avatar"
          className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg hover:scale-110 transition duration-300"
        />

        <h2 className="text-2xl font-bold text-white mt-4">
          Олеся Ковальчук
        </h2>

        <p className="text-white/80 mt-2 text-sm">
          Frontend Developer 💻 <br />
          Створюю сучасні та красиві інтерфейси
        </p>

        {/* Теги */}
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          <span className="bg-white/30 text-white px-3 py-1 rounded-full text-xs">React</span>
          <span className="bg-white/30 text-white px-3 py-1 rounded-full text-xs">Tailwind</span>
          <span className="bg-white/30 text-white px-3 py-1 rounded-full text-xs">JS</span>
        </div>

        {/* Кнопка */}
        <button
          onClick={() => setOpen(true)}
          className="mt-6 w-full bg-white text-purple-600 font-semibold py-2 rounded-xl hover:bg-purple-100 transition duration-300 shadow-lg"
        >
          Написати ✉️
        </button>

      </div>

      {/* МОДАЛКА */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          
          <div className="bg-white rounded-2xl p-6 w-80 text-center shadow-2xl animate-scaleIn">
            
            <h3 className="text-xl font-bold mb-2">Зв'язок</h3>
            <p className="text-gray-600 text-sm mb-4">
              Напиши мені повідомлення 👇
            </p>

            <input
              type="text"
              placeholder="Твоє ім'я"
              className="w-full border p-2 rounded mb-2"
            />

            <textarea
              placeholder="Твоє повідомлення"
              className="w-full border p-2 rounded mb-3"
            />

            <button
              onClick={() => setOpen(false)}
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
            >
              Відправити
            </button>

            <button
              onClick={() => setOpen(false)}
              className="mt-2 text-sm text-gray-500"
            >
              Закрити
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;