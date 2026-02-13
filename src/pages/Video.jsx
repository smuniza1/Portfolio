import PageTitle from "../components/PageTitle";

export default function Video({ openNav }) {
  return (
    <div>
      <header>
    <p id="menu-icon" onClick={openNav}>☰</p>
    <h1>MUNIZA SIDDIQUI</h1>
  </header>
      <PageTitle title="VIDEO"/>
    </div>
  );
}
