import Header from "../modules/common/components/Header";
import WrapperCategory from "../modules/user/components/WrapperCategory";
import FilterableUserList from "../modules/user/components/FilterableUserList";
import InfoUser from "../modules/user/components/InfoUser";
const users = [
  {
    id: 1,
    username: "usuario1",
    interests: ["Leer", "Fútbol", "Cine"],
    like: 45,
    dislike: 10,
    biography:
      "Apasionado de la lectura y el fútbol, disfruta de las buenas películas los fines de semana.",
  },
  {
    id: 2,
    username: "usuario2",
    interests: ["Música", "Viajar", "Fotografía"],
    like: 60,
    dislike: 5,
    biography:
      "Aventurero y amante de la música, siempre con una cámara en mano para capturar la esencia del mundo.",
  },
  {
    id: 3,
    username: "usuario3",
    interests: ["Cocinar", "Videojuegos", "Tecnología"],
    like: 35,
    dislike: 12,
    biography:
      "Chef aficionado y gamer entusiasta, siempre al tanto de las últimas novedades tecnológicas.",
  },
  {
    id: 4,
    username: "usuario4",
    interests: ["Deportes", "Lectura", "Pintura"],
    like: 50,
    dislike: 8,
    biography:
      "Deportista y lector empedernido, encuentra en la pintura una forma de expresión única.",
  },
  {
    id: 5,
    username: "usuario5",
    interests: ["Cine", "Jardinería", "Yoga"],
    like: 70,
    dislike: 3,
    biography:
      "Amante del cine clásico y la naturaleza, encuentra paz en la jardinería y el yoga.",
  },
];

const PageUsers = () => {
  return (
    <div className=" w-screen h-screen p-4 flex flex-col px-2 md:px-20 lg:px-32">
      <Header />
      <div className=" w-full h-full pt-8 flex flex-col flex-1 lg:flex-row gap-2 md:gap-4">
        <aside className="flex flex-col bg-neutral-100 rounded-2xl">
          <div className=" p-3 md:p-4 flex  flex-1 w-full lg:max-w-[350px]">
            <WrapperCategory interests={users[0].interests} />
          </div>
        </aside>
        <main className="flex flex-col lg:flex-row flex-1 bg-neutral-100 rounded-2xl overflow-auto">
          <FilterableUserList users={users} />
          <section className=" hidden lg:flex w-[40%] p-2 md:p-4 border-l-2">
            <InfoUser />
          </section>
        </main>
      </div>
    </div>
  );
};

export default PageUsers;
