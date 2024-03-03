"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReels() {
        // calculation
        return 8;
    }
}
class Twitter extends TakePhoto {
    constructor(camerMode, filter, burst) {
        super(camerMode, filter);
        this.camerMode = camerMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('Sepia');
    }
}
const rs = new Twitter('DSLR', 'Paris', 500);
rs.getReels();
