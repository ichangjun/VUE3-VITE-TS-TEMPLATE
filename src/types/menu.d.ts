export interface MenuItem {
  key: number // 菜单id
  label: string // 菜单标题
  title: string // 设置收缩时展示的悬浮菜单标题
  disabled: boolean // 是否禁用
  path: string  // 菜单路径
  icon?: string, // 菜单图标
  children?: Menu[] // 子菜单
}
