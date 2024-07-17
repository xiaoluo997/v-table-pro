import type { ListTable } from '@visactor/react-vtable'
import { CommentComponent } from '../Plugin/CellPreview/CommentComponent'
import {OperationComponent} from '../Plugin/CellPreview/OperationComponent'
import { VTable, CustomComponent,ListColumn } from '@visactor/react-vtable'
import {ImagePreview} from '../Plugin/CellPreview/ImagePreview'
const { VGroup, VImage, VTag, VText } = VTable;

export const ColumnsManage = () => {
  return (
    <>
       <ListColumn field={'id'} title={'ID'} />
      <ListColumn field={'sex'} title={'Sex'} editor={'select-editor'} />
      <ListColumn field={'address'} title={'Address'} editor={'select-editor'} />
      <ListColumn field={'name'} title={'Comment'} editor={'select-editor'} >
        <CommentComponent role={'custom-layout'} />
      </ListColumn>
      <ListColumn field={'image'} title={'Image'} editor={'image-editor'} />
      <ListColumn field={''} title={'Operation'} width={160}>
        <OperationComponent role={'custom-layout'} />
      </ListColumn>
    </>
   
  )
}