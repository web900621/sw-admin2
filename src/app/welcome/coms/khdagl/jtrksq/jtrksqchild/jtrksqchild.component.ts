import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {JtrksqService} from '../jtrksq.service';
import {ConfirmationService} from 'primeng/primeng';

@Component({
    selector: 'jhi-jtrksqchild',
    templateUrl: './jtrksqchild.component.html',
    styleUrls: ['./jtrksqchild.component.css']
})
export class JtrksqchildComponent implements OnInit {
    @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('jtrkUserNameChild') jtrkUserNameChild: ElementRef;

    public isDisabled: boolean = false;
    public jtrkUserCode: any = '';
    public jtrkApplicantName: any = '';
    public jtrkUserName: any = '';
    public jtrkYyhName: any = '';
    public jtrkYyhAdr: any = '';
    public jtrkUserState: any = '';
    private applicantPhone: any;
    private yyhCode = [];
    public selectedYyhCode;

    public userJtrks: any = [];
    public selectedUserJtrk: any;

    constructor(public jtrksqService: JtrksqService,
                public confirmationService: ConfirmationService) {
        this.yyhCode.push({label: '110', value: 1001001001002});
        this.yyhCode.push({label: '111', value: 1001001001003});
    }

    ngOnInit() {
        console.log(111);
        console.log(this.selectedYyhCode);
        this.getUserJtrks();
        this.jtrkUserNameChild.nativeElement.disabled = this.isDisabled;
    }

    getUserJtrks() {
        this.jtrksqService.getUserJtrks().subscribe((res) => {
            this.userJtrks = res.json().data;
        });
    }

    closeme(msg) {
        this.closeModal.emit(msg);
    }
}
