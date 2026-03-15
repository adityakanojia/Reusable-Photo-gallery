interface SearchBarProps {
  query: string;
  setQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  return (
    <div className="flex justify-center mt-6 w-full">
      <input
        className="focus:outline-none focus:ring-2 focus:ring-cyan-400h-[50px] w-full max-w-md text-md p-2 mx-2  rounded bg-inherit border border-cyan-500 text-white font-poppins flex justify-center item-center rounded-lg"
        value={query}
        placeholder="Search"
        onChange={setQuery}
      />
    </div>
  );
};

export default SearchBar;
