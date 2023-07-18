export interface menuType {
  name: string
  id: number
  path: string | null
  childrenList: Array<menuType>
}
