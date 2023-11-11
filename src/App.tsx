import { Component, Vue } from 'vue-facing-decorator'

@Component({
  render(this: AppComponent) {
    return <div onClick={this.changeText}>{this.msg}</div>
  }
})
export default class AppComponent extends Vue {
  public msg = 'Hello world'

  public changeText() {
    this.msg = this.msg === 'Hello world' ? 'Hello zero' : 'Hello world'
  }
}
