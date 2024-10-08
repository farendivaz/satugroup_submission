export const SearchInput: React.FC<{
  searchTerm: string;
  onSearch: (term: string) => void;
}> = ({ searchTerm, onSearch }) => (
  <div className="mb-4">
    <input
      type="text"
      placeholder="Search articles..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);
