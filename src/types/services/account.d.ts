/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-02 15:09:16
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-03-09 12:55:18
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/types/services/account.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface Account {
  id: string,
  username: string,
  type: number,
  status: number,
  whitelistAuthority: number,
  salt: string,
  tokenVersion: number,
  ban: number,
  baoyueVersion: number,
  donateVersion: number,
  anonimousUser: boolean
  uninitialized: boolean
}

export interface Profile {
  userId: string,
  followed: boolean,
  nickname: string,
  backgroundUrl: string,
  avatarUrl: string
}
