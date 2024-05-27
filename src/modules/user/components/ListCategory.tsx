import { useDispatch } from "react-redux";
import Chip from "../../common/components/Chip";
import { updateInterests } from "../../../store/slices/userSlice";
import { useSelector } from "../../../hooks/useSelector";

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

const ItemInterest = ({ interest }: { interest: string }) => {
  const dispatch = useDispatch();
  const user_interests = useSelector(
    (state) => state.user.value.currentUser?.interests
  );

  const isActive = user_interests.includes(interest);

  const handeleupdateInterests = (interest: string) => {
    dispatch(updateInterests(interest));
  };

  return (
    <div
      onClick={() => handeleupdateInterests(interest)}
      className=" w-fit h-fit relative cursor-pointer"
    >
      <div className=" absolute flex justify-center items-center text-white font-medium right-[-9px] top-[-5px] z-50 w-4 h-4 bg-blue-400 rounded-full">
        1
      </div>
      <Chip text={interest} isActive={isActive} />
    </div>
  );
};

const ListCategory = () => {
  return (
    <div className="flex lg:flex-wrap gap-2 overflow-auto p-2  relative">
      {interests.map((interest) => (
        <ItemInterest key={interest} interest={interest} />
      ))}
    </div>
  );
};

export default ListCategory;
