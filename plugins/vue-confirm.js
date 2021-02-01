import Vue from 'vue';
import VuejsDialog from 'vuejs-dialog';
import VuejsDialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js'; // only needed in custom components

// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css';

// Tell Vue to install the plugin.
Vue.use(VuejsDialog, {
  loader: true,
  okText: 'Ok',
  cancelText: 'Hủy',
  animation: 'bounce',
  message: `<div>
    <div style='color:red'>
       <i class="anticon anticon-exclamation-circle"></i>
        <strong>Cảnh Báo</strong>
    </div>
      <div>
      <br/>
      <p>Bạn có muốn tiếp tục hành động này ?</p>
      </div>
    </div>`,
  html: true,
  backdropClose: false
});