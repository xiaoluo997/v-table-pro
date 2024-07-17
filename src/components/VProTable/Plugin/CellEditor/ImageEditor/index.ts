import CustomImage from './ImageEditor'
import { VTable } from '@visactor/react-vtable'
import type { IEditor } from '@visactor/vtable-editors';

export default {
  init(register: (name: string, editor: IEditor) => any) {
    register(this.name, new CustomImage)
  },
  name:'image-editor'
}