import { Container } from "../../../components/Shared/Container/Container";

export default function TardanzaAsistenciaHeader({
  label,
}: {
  label: "Tardanzas" | "Inasistencias";
}) {
  return (
    <Container $width="100%" $direction="column">
      <Container
        $width="100%"
        $justifyContent="center"
        className="border-bottom"
      >
        {label}
      </Container>
      <Container $direction="row" $width="100%">
        <Container
          $width="50%"
          $justifyContent="center"
          className="border-right"
        >
          Just.
        </Container>
        <Container $width="50%" $justifyContent="center">
          Inj.
        </Container>
      </Container>
    </Container>
  );
}
