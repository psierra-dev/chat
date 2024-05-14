import Input from "../../common/components/Input";

const SearchUser = () => {
  return (
    <Input
      name=""
      label_text=""
      onChange={(e) => console.log(e)}
      icon="search"
      placeholder="Buscar usuario..."
    />
  );
};

export default SearchUser;
