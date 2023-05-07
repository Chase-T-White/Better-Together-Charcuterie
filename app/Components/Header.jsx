import Image from "next/image";

const Header = ({ background, title }) => {
  return (
    <header className="page-heading">
      <h2 className="page-heading__title">{title}</h2>
      <Image src={background} className="page-heading__background" />
    </header>
  );
};

export default Header;
