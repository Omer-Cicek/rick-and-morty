import RaMWallPaper from '../assets/RaMWallPaper.webp';

const Main = () => {
  return (
    <main>
      <h1 className="m-4">Welcome to Rick and Morty Page</h1>
      <img
        src={RaMWallPaper}
        className="img-fluid"
        alt="Rick and Morty Wallpaper"
      />
    </main>
  );
};

export default Main;
