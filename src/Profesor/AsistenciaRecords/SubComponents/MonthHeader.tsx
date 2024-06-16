import styled from 'styled-components';
import { Container } from '../../../components/Shared/Container/Container';
import { dayCellWidth, MONTH_NAME } from '../utils';

export const DayCell = styled(Container)`
  border-top: 1px solid black;
  &:not(:last-of-type) {
    border-right: 1px solid black;
  }
`;

export default function MonthHeader({ monthName, days }: { monthName: MONTH_NAME; days: number[] }) {
  return (
    <Container $direction="column" $width="100%">
      <Container $width="100%" $justifyContent="center">
        {monthName.toUpperCase()}
      </Container>
      <Container $direction="row">
        {days.map((day) => {
          return (
            <DayCell $width={`${dayCellWidth}rem`} key={day} $justifyContent="center">
              {day}
            </DayCell>
          );
        })}
      </Container>
    </Container>
  );
}
