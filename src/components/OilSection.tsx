import {
  OilContainer,
  OilContent,
  OilTitle,
  OilText,
  OilInfo,
  OilProduct,
  OilFeatures,
  OilFeature,
} from "./OilSection.styled";

function OilSection() {
  return (
    <OilContainer id="olio">
      <OilContent>
        {" "}
        <OilInfo>
          {" "}
          <OilTitle>Il nostro olio</OilTitle>
          <OilText>
            Olio Extra Vergine di Oliva Biologico, prodotto nel territorio di
            Tuscania.
          </OilText>
          <OilText>
            Un olio biologico che nasce dagli ulivi del territorio di Tuscania,
            nel cuore della Tuscia.
          </OilText>
          <OilFeatures>
            <OilFeature>100% Biologico</OilFeature>
            <OilFeature>Tuscania</OilFeature>
            <OilFeature>Extra Vergine</OilFeature>
          </OilFeatures>
        </OilInfo>
        <OilProduct>Prodotto</OilProduct>
      </OilContent>
    </OilContainer>
  );
}

export default OilSection;
