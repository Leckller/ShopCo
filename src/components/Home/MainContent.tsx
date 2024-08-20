import MainText from './MainText';
import Model from './Model';

function MainContent() {
  return (
    <section
      className="w-full flex flex-row flex-wrap lg:flex-nowrap
     lg:max-h-[500px] overflow-hidden justify-center"
    >
      <MainText />
      <Model />
    </section>
  );
}

export default MainContent;
