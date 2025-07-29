import CategorySidebar from "../components/category-sidebar";
import RideCarousel from "../components/ride-carousel";

const HomePage: React.FC = () => {
  return (
    <div className="grid grid-cols-[1fr_1024px] gap-4  my-auto w-full ">
      <div className="col-span-1 overflow-hidden">
        <CategorySidebar />
      </div>
      <div className="w-[1024px] p-4">
        <RideCarousel />
      </div>
    </div>
  );
};
export default HomePage;
