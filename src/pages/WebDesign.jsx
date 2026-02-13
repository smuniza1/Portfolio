import PageTitle from "../components/PageTitle";

export default function WebDesign({ openNav }) {
  return (
    <div>
      <header>
    <p id="menu-icon" onClick={openNav}>☰</p>
    <h1>MUNIZA SIDDIQUI</h1>
  </header>
      <PageTitle title="WEB DESIGN"/>
    </div>
  );
}
