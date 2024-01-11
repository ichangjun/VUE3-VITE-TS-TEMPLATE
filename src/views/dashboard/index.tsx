import { defineComponent } from 'vue'
import Logo from '@/assets/images/logo.jpg';
export default defineComponent({
  name: 'Dashboard',
  setup() {
    const countArr = [1,2,3,4,5,6,7,8,9,10]
    return () => (
      <div id="dashboard-view">
        <i-echarts />
        <i-svg-icon />
        <img src={Logo} />
        {countArr.map((item: number) => item > 5 ? <div><input v-model:value={item} key={item} /></div> : <div></div>)}
      </div>
    )
  }
})
