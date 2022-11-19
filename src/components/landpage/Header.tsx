import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header id="home" className="w-screen h-screen relative overflow-hidden ">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
        src="/video/bg-video.mp4"
      />
      <figure className="absolute top-8 left-8 h-8 w-8 animate-pulse">
        <img
          src="/images/heart.svg"
          width={25}
          height={25}
          alt="Picture of the heart"
        />
      </figure>
      <div className="absolute top-0 h-full w-full flex justify-center items-center">
        <figure className="h-48 w-48 md:h-72 md:w-72">
          <img
            className="w-full"
            src="/images/logo.svg"
            width={25}
            height={25}
            alt="Logo evolumais"
          />
        </figure>
        <div className="absolute bottom-4 text-white text-sm md:text-2xl lg:text-3xl">
          <Typewriter
            options={{
              strings: [
                "A marca inteligente faz os corações baterem mais forte",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
