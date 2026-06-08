import React from "react";

export default function AboutHistory() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          О нас
        </h1>

        <div className="border-l-4 border-blue-700 pl-4 mb-6">
          <h2 className="text-2xl font-semibold text-blue-800">
            История создания и развития учебного заведения
          </h2>
        </div>

        <p className="text-gray-700 leading-8 text-lg">
          История создания и развития учебного заведения начинается в 1965 году,
          когда в городе Фрунзе было основано Городское профессионально-техническое
          училище №20 (ныне ПЛ №94).
        </p>

        <p className="text-gray-700 leading-8 text-lg mt-4">
          Учебное заведение готовило квалифицированных рабочих кадров для бытового
          обслуживания населения. Здесь проводилось обучение по специальностям:
          фотограф, парикмахер широкого профиля, мастер по ремонту часов,
          радиомеханик, слесарь-газовщик, закройщик и электросварщик.
        </p>

        <p className="text-gray-700 leading-8 text-lg mt-4">
          На протяжении многих лет лицей развивался, открывались новые направления
          подготовки, модернизировалась материально-техническая база и повышалось
          качество образования.
        </p>

        <button
          onClick={() => window.history.back()}
          className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
        >
          Назад
        </button>

      </div>
    </div>
  );
}