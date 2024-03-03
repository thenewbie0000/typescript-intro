abstract class TakePhoto{
  constructor(
    public cameraMode: string,
    public filter: string
  ){}

  abstract getSepia(): void
  getReels():number{
    // calculation
    return 8;
  }
}



class Twitter extends TakePhoto{
  constructor(
    public camerMode: string,
    public filter: string,
    public burst: number
  ){
    super(camerMode, filter)
  }

  getSepia(): void {
    console.log('Sepia')
  }

}

const rs = new Twitter('DSLR', 'Paris', 500)

rs.getReels()