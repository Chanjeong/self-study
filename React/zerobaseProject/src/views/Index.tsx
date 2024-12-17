import ItemList from "../components/common/ItemList";
import Slider from "../components/common/Slider";
import Title from "./Title";
import { useDarkMode } from "../helpers/DarkModeProvider";

const Index = (): JSX.Element => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <Slider darkMode={darkMode} />
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <Title>패션</Title>
        <ItemList category={"clothing"} darkMode={darkMode} limit={4} />
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <Title>디지털</Title>
        <ItemList category={"electronics"} darkMode={darkMode} limit={4} />
      </section>
      <section className="pt-6 lg:pt-12 pb-6 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <Title>액세서리</Title>
        <ItemList category={"jewelery"} darkMode={darkMode} limit={4} />
      </section>
    </>
  );
};

export default Index;
