import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img
        data-testid="banner"
        src="/resources/banner.png"
        alt="O banner principal da página do Organo"
      />
    </div>
  );
}

export default Banner;
