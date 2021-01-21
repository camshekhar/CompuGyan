
document.addEventListener('DOMContentLoaded', function(event) {

console.log("This is blog.js")
let sc = document.createElement('script')
sc.setAttribute('src', 'https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js');

document.head.appendChild(sc);
sc.onload = ()=>{
tinymce.init({
    selector: '#id_content',
    width: 800,
    height: 600,

  //////// Plugins and Features..////////
  plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
  imagetools_cors_hosts: ['picsum.photos'],
  menubar: 'file edit view insert format tools table help',
  mobile: {
    menubar: true,
    theme: 'mobile',
    plugins: 'autosave lists autolink',
    toolbar: 'undo bold italic styleselect',
  },
  toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',

  });
}
})