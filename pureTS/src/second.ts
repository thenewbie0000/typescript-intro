interface TakePhotos{
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story{
  createStory(): void
}

class Instagram implements TakePhotos{
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ){}
}


class Youtube implements TakePhotos, Story{
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public reels: number
  ){}

  createStory(): void {
    console.log('Story was uploaded')
  }
}