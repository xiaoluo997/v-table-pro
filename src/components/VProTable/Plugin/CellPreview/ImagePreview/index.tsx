import { Group } from '@visactor/react-vtable'
import {Image} from 'antd'
export const ImagePreview = (props) => {
  const { table, row, col, rect, dataValue } = props;
  if (!table || row === undefined || col === undefined) {
    return null;
  }

  const { height, width } = rect || table.getCellRect(col, row);
  const record = table.getRecordByCell(col, row);
  return <Group
      attribute={{
        width,
        height,
        react: {
          pointerEvents: true,
          container: table.bodyDomContainer, // table.headerDomContainer
          // anchorType: 'bottom-right',
          element:  <Image
                      width={200}
                      src='https://www.baidu.com/img/flexible/logo/pc/result.png'
                      alt='lamp'
                    />  
        }
      }}
    ></Group>
  
}