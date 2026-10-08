import {
  NotFoundMain,
  ErrorCode,
  Title,
  Text,
  HomeLink,
} from "./NotFoundPage.styled";

function NotFoundPage() {
  return (
    <NotFoundMain>
      <ErrorCode>404</ErrorCode>

      <Title>Pagina non trovata</Title>

      <Text>La pagina che stai cercando non esiste.</Text>

      <HomeLink to="/">Torna alla home</HomeLink>
    </NotFoundMain>
  );
}

export default NotFoundPage;
