import dynamic from "next/dynamic";
const NavBar = dynamic(() => import("./NavBar"));

const Main = () => {
  return (
    <>
        <NavBar />
    </>
  );
};

export default Main;
