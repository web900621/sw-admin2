import {Component, OnInit} from '@angular/core';
import {NavtabService} from '../../../nav/nav-tab/navtab.service';
import {RemoteinputService} from './remoteinput.service';
@Component({
    selector: 'jhi-remoteinput',
    templateUrl: './remoteinput.component.html',
    styleUrls: ['./remoteinput.component.css']
})
export class RemoteinputComponent implements OnInit {
    public appid = 'remoteinput';

    constructor(public navtabService: NavtabService, public remoteinputService: RemoteinputService) {
    }

    ngOnInit() {
    }

    public uploadedFiles: any[] = [];

    onUpload(event) {
        console.dir(event)
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }

    }

}
