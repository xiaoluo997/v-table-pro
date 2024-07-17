import SelectEditor from './SelectEditor'
import { VTable } from '@visactor/react-vtable'
import type { IEditor } from '@visactor/vtable-editors';

export default {
  init(register: (name: string,editor: IEditor) => void) {
    return register(this.name, new SelectEditor)
  },
  name:'select-editor'
}