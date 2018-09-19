export default 'world!'

export class C {
  public x = 10
  public getX = () => this.x
  public setX = (newVal: number) => {
    this.x = newVal
  }
}

export let x = new C()
export let y = { ...{ some: 'value' } }
