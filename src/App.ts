import { Component, Vue } from 'vue-facing-decorator'
import render from './App.render'

@Component({ render })
export default class AppComponent extends Vue {}
