const Header = ({ title, leftChild, rightChild }) => {
  return (
    // Header
    <div className="flex items-center justify-between py-5 border-b-2 border-gray-300">
      <div>{leftChild}</div>
      <div className="text-2xl text-center">{title}</div>
      <div>{rightChild}</div>
    </div>
  );
};

export default Header;
