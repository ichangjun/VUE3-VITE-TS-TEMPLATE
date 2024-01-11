import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Main',
  setup() {
    return () => (
      <div id="main-view">
        <router-view />
      </div>
    )
  }
})
