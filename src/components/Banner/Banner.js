import banner from "../../resources/banner.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img
        data-testid="banner"
        src={banner}
        alt="O banner principal da página do Organo"
      />
    </div>
  );
}

export default Banner;
