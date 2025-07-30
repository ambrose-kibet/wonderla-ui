import CategorySidebar from "../components/category-sidebar";
import RideCarousel from "../components/ride-carousel";

const HomePage: React.FC = () => {
  return (
    <div className="grid grid-cols-[1fr_768px]  xl:grid-cols-[1fr_1020px] gap-4  my-auto w-full max-w-screen-2xl mx-auto">
      <div className="col-span-1 overflow-hidden">
        <CategorySidebar />
      </div>
      <div className="col-span-1">
        <RideCarousel />
      </div>
    </div>
  );
};
export default HomePage;
