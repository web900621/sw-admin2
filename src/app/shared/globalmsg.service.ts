import {Injectable} from '@angular/core';
import {Message} from 'primeng/primeng';

@Injectable()
export class GrowlService {

  growlMsg: Message[] = [];

  constructor() {
  }

  /*-------- g-growl提示框 --------- */
  // success样式
  showSuccess(summaryStr: string, detailStr: string) {
    this.growlMsg = [];
    this.growlMsg.push({severity: 'success', summary: summaryStr, detail: detailStr});
  }

  // info样式
  showInfo(summaryStr: string, detailStr: string) {
    this.growlMsg = [];
    this.growlMsg.push({severity: 'info', summary: summaryStr, detail: detailStr});
  }

  // warn样式
  showWarn(summaryStr: string, detailStr: string) {
    this.growlMsg = [];
    this.growlMsg.push({severity: 'warn', summary: summaryStr, detail: detailStr});
  }

  // error样式
  showError(summaryStr: string, detailStr: string) {
    this.growlMsg = [];
    this.growlMsg.push({severity: 'error', summary: summaryStr, detail: detailStr});
  }

  // 清除提示框
  clear() {
    this.growlMsg = [];
  }

  /*-------- g-confirmDialog提示框 --------- */
  /*
   headerStr:提示框的标题
   msgStr: 描述内容
   acceptFunc:确认回调的方法
   rejectFunc:取消回调的方法
   */
  // showConfirmDialog(confirmation: ConfirmationObj) {
  //   this.confirmationService.confirm({
  //     header: confirmation.header || '提示',
  //     message: confirmation.message,
  //     icon: 'fa fa-question-circle',
  //     accept: confirmation.acceptFunc,
  //     reject: confirmation.rejectFunc
  //   });
  // }

}

export interface ConfirmationObj {
  message: string;
  header?: string;
  acceptFunc?: Function;
  rejectFunc?: Function;
}
