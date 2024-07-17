
import { VTable } from '@visactor/react-vtable'
import type { IEditor } from '@visactor/vtable-editors';
export function register(name: string, editor: IEditor) {
  VTable.register.editor(name, editor)
}