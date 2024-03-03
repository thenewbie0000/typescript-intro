"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, reels) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.reels = reels;
    }
    createStory() {
        console.log('Story was uploaded');
    }
}
