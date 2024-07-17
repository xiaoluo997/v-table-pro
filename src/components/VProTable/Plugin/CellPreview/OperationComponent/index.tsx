import { OperationReactComponent } from './OperationReactComponent'
import {Group} from '@visactor/react-vtable'
export const OperationComponent = (props) => {
  const { table, row, col, rect, dataValue } = props;
  if (!table || row === undefined || col === undefined) {
    return null;
  }
  const { height, width } = rect || table.getCellRect(col, row);
  const record = table.getRecordByCell(col, row);

  return (
    <Group
      attribute={{
        width,
        height, 
        react: {
          pointerEvents: true,
          container: table.bodyDomContainer, // table.headerDomContainer
          // anchorType: 'bottom-right',
          element: <OperationReactComponent />
        }
      }}
    ></Group>
  ); 
};