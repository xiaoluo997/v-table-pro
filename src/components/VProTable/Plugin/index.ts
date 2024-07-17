import { register } from "./register";
import { EditorPlugins } from './CellEditor/index'

export const setupEditor = () => {
  EditorPlugins.forEach((p) => p.init(register))
  return register
}
