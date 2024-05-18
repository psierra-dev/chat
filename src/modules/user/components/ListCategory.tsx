const interests = [
  "Leer",
  "Fútbol",
  "Deporte",
  "Amistad",
  "Viajar",
  "Música",
  "Cine",
  "Arte",
  "Tecnología",
  "Cocina",
  "Naturaleza",
  "Animales",
  "Moda",
  "Historia",
  "Ciencia",
  "Política",
  "Religión",
  "Salud",
  "Fitness",
  "Juegos",
  "Aventuras",
  "Idiomas",
  "Fotografía",
  "Negocios",
  "Economía",
  "Filosofía",
  "Psicología",
  "Medio Ambiente",
  "Literatura",
  "Teatro",
  "Manualidades",
  "Belleza",
];

const ListCategory = () => {
  return (
    <div className="flex lg:flex-wrap gap-1 overflow-auto p-2  ">
      {interests.map((interest) => (
        <div className=" p-2 rounded-lg shadow-md text-xs md:text-sm  h-fit relative cursor-pointer">
          <div className=" absolute flex justify-center items-center text-white font-medium right-[-1px] top-[-2px] z-100 w-4 h-4 bg-blue-400 rounded-full">
            1
          </div>
          <span>{interest}</span>
        </div>
      ))}
    </div>
  );
};

export default ListCategory;
