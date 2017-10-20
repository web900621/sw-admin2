import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {NavtabService} from '../../../nav/nav-tab/navtab.service';
import {BookadjustmentService} from './bookadjustment.service';
import {ConfirmationService} from 'primeng/primeng';

@Component({
    selector: 'jhi-bookadjustment',
    templateUrl: './bookadjustment.component.html',
    styleUrls: ['./bookadjustment.component.css']
})
export class BookadjustmentComponent implements OnInit {
    public appid = 'bookadjustment';
    public bookData: any = [];
    public bookData1: any = [];
    public bookData2: any = [];

    constructor(public confirmationService: ConfirmationService, public navtabService: NavtabService, public bookadjustmentService: BookadjustmentService) {
    }

    ngOnInit() {
        // this.bookadjustmentService.getaimsBook().subscribe((res) => {
        //     console.log(res);
        //     this.bookData = res;
        //     this.bookData1 = res;
        //     this.bookData2 = res.slice(3, -1);
        // });
    }

    cxBookData() {
        this.bookadjustmentService.getaimsBook().subscribe((res) => {
            this.bookData = res.json().data;
        });
    }

    confirm() {
        this.confirmationService.confirm({
            message: '确定修改并保存么？',
            header: '确认保存',
            icon: 'fa fa-save',
            accept: () => {
            },
            reject: () => {
                console.log('取消了保存操作！');
            }
        });
    }

    onBookDataReorder() {
        console.log(this.bookData);
    }
}
