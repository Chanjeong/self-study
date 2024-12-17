import BreadCrumb from "../components/common/Breadcrumb";
import { MENUS } from "../constants/category";
import ItemList from "../components/common/ItemList";
import styles from "../assets/css/Accessory.module.css";
import Title from "./Title";
import { useDarkMode } from "../helpers/DarkModeProvider";
/**
 * 뷰페이지에는 특별한 로직이 포함되어서는 안됩니다.
 * 컴포넌트를 불러다 렌더링하는 용도로만 사용 하세요.
 */

const Accessory = (): JSX.Element => {
  const { darkMode } = useDarkMode();

  return (
    <section className="pt-4 lg:pt-20 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category={MENUS.HOME} crumb={MENUS.ACCESSORY} />
      <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        {/* components products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        <Title>액세서리</Title>
        <ItemList category={"jewelery"} darkMode={darkMode} />
      </article>
    </section>
  );
};

export default Accessory;
