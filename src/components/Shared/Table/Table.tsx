import { createContext, ReactNode, useContext } from 'react';
import { StyledTable, StyledTableBody, StyledTableBodyItem, StyledTableHeader, StyledTableHeaderItem } from './StyledTable';
import { ContainerProps } from '../Container/Container';

export type TableProps = ContainerProps & {
  $gridTempCols: string;
  $color?: string;
  $fontSize?: string;
  children: ReactNode;
  $headerPadding?: string;
};
const TableContext = createContext<Omit<TableProps, 'children'> | null>(null);

//table
export default function Table(tableProps: TableProps) {
  const { children, ...rest } = tableProps;
  return (
    <StyledTable>
      <TableContext.Provider value={{ ...rest }}>{children}</TableContext.Provider>
    </StyledTable>
  );
}

//table header
function TableHeader({ children }: { children: ReactNode }) {
  const { $gridTempCols } = useContext(TableContext)!;
  return <StyledTableHeader $gridTemplateColumns={$gridTempCols}>{children}</StyledTableHeader>;
}
function TableBody({ children }: { children: ReactNode }) {
  const { $gridTempCols } = useContext(TableContext)!;
  return <StyledTableBody $gridTemplateColumns={$gridTempCols}>{children}</StyledTableBody>;
}

function TableHeaderItem({ children }: { children: ReactNode }) {
  const props = useContext(TableContext)!;
  return (
    <StyledTableHeaderItem {...props} $padding={props.$headerPadding}>
      {children}
    </StyledTableHeaderItem>
  );
}

function TableBodyItem({ children, classN }: { children: ReactNode; classN?: string }) {
  const props = useContext(TableContext)!;

  return (
    <StyledTableBodyItem {...props} className={classN}>
      {children}
    </StyledTableBodyItem>
  );
}

Table.Header = TableHeader;
Table.Body = TableBody;
TableHeader.Item = TableHeaderItem;
TableBody.Item = TableBodyItem;
