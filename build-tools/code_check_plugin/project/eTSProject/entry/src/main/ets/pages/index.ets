import Ability from '@ohos.application.Ability';
  import Ability from '@ohos.app.ability.UIAbility';
  var method = 'call_Function';
  export default class MainAbility extends Ability {
    onCreate(want, launchParam) {
      console.log('Callee onCreate is called');
      try {
        this.callee.off(method);
      } catch (error) {
        console.log('Callee.off catch error, error.code: ' + JSON.stringify(error.code) +
          ' error.message: ' + JSON.stringify(error.message));
      }
    }
  }

@Entry
// @ts-ignore
@Component
struct Index {
  @State message: string = 'Hello World'              
build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
                        .fontWeight(FontWeight.Bold)
      }
      .width('100%')
    }
    .height('100%')
  }
}