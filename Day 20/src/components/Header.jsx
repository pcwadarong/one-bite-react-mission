const Header = ({ title, leftChild, rightChild }) => {
  return (
    <div className="flex items-center justify-between py-5">
      <div >{leftChild}</div>
      <div className="text-2xl text-center">{title}</div>
      <div>{rightChild}</div>
    </div>
  );
};

export default Header;