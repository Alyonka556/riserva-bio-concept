import territoryOlive from "../assets/territory-olive.png";

import {
  TerritoryContainer,
  TerritoryContent,
  TerritoryInfo,
  TerritoryTitle,
  TerritoryText,
  TerritoryImage,
} from "./TerritorySection.styled";

function TerritorySection() {
  return (
    <TerritoryContainer id="territorio">
      <TerritoryContent>
        <TerritoryInfo>
          <TerritoryTitle>Il territorio</TerritoryTitle>
          <TerritoryText>
            Nel cuore della Tuscia, il territorio di Tuscania offre un ambiente
            ideale per la coltivazione degli ulivi e la produzione di olio extra
            vergine di oliva biologico.
          </TerritoryText>{" "}
        </TerritoryInfo>
        <TerritoryImage
          src={territoryOlive}
          alt="Olivetto biologico nel territorio di Tuscania"
        />
      </TerritoryContent>
    </TerritoryContainer>
  );
}

export default TerritorySection;
