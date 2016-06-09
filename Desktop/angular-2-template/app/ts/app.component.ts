import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {

    mainheading = Config.MAIN_HEADING;
    videos: Array<Video>;

    constructor(){
        this.videos = [
            new Video(1, " Weird Crazy Funny Bad Auditions", "1zXIPBQbCB8", "America's Got Talent 2016 Weird Crazy Funny Bad Auditions"),
            new Video(2, "1-Introduction", "QAbQgLGKd3Y", "Android App Development for Beginners - 1 - Introduction")
        ]
    }
}
