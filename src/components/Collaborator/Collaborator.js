import placeholderAvatar from "../../resources/placeholder_avatar.jpg";
import { isValidUrl } from "../../utils/utils";
import "./Collaborator.css";

function Collaborator({ name, occupation, image, primaryColor }) {
  return (
    <div
      data-testid={`collaborator-${name}`}
      className="collaborator"
      style={{
        background: `linear-gradient(to top, #ffffff 68.7%, ${primaryColor} 31.3%`,
      }}
    >
      <img
        data-testid={`collaborator-${name}-image`}
        src={isValidUrl(image) ? image : placeholderAvatar}
        alt={`A imagem do colaborador ${name}`}
      />
      <div className="collaborator-container">
        <h2 data-testid={`collaborator-${name}-name`}>{name}</h2>
        <h3 data-testid={`collaborator-${name}-occupation`}>{occupation}</h3>
      </div>
    </div>
  );
}

export default Collaborator;
