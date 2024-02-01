import { GlobConfig } from "@/types/config";

/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-01 19:29:01
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-01 19:31:23
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/hooks/setting/use-glob-setting.ts
 * @Description: 工程设置hooks
 */
export const useGlobSetting = (): Readonly<GlobConfig> => {
  const glob: Readonly<GlobConfig> = {
    title: "Anson Admin",
    description: "开箱即用的中后台管理系统",
    apiUrl: "",
    shortName: "中后台管理系统",
  };
  return glob;
}
