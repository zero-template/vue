import { Component, Vue } from 'vue-facing-decorator'

@Component({
  render(this: AppComponent) {
    return (
      <div
        class="text-center flex h-screen flex-justify-center flex-items-center flex-col"
        onClick={this.changeText}
      >
        {this.msg}
        <div class="flex">
          <code class="mr2">UNOCSS</code>
          <code class="mr2">Vite</code>
          <code class="mr2">Vue</code>
          <code class="mr2">Pinia</code>
          <code class="mr2">Vue Router</code>
          <code class="mr2">Axios</code>
          <code class="mr2">TypeScript</code>
          <code class="mr2">Less</code>
          <code class="mr2">ESLint</code>
          <code class="mr2">Prettier</code>
          <code>Decorator</code>
        </div>
      </div>
    )
  }
})
export default class AppComponent extends Vue {
  public msg = 'Hello world'

  public changeText() {
    this.msg = this.msg === 'Hello world' ? 'Hello Zero' : 'Hello world'
  }
}
