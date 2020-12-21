var mixedMode = {
  name: "htmlmixed",
  scriptTypes: [{matches: /\/x-handlebars-template|\/x-mustache/i,
                 mode: null},
                {matches: /(text|application)\/(x-)?vb(a|script)/i,
                 mode: "vbscript"}]
};
var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: mixedMode,
  inputStyle: "contenteditable",
  lineNumbers:true,
  selectionPointer: true,
  styleActiveLine: true,
  extraKeys: {"Ctrl-Space": "autocomplete"}
  
});
editor.setOption("theme","cobalt");
editor.on('keyup',function(cm,event){
  event = {
type: "keydown",
keyCode: event.keyCode,
ctrlKey: event.ctrlKey,
shiftKey: event.shiftKey,
altKey: event.altKey,
metaKey: event.metaKey
}
document.getElementById("output").innerHTML=editor.getValue();
})
function println(text){
          document.write(text);
      }
var display;
var editor1 = document.getElementById("editor");
function edited(){
  editor1 = document.getElementById("editor").value;
  
  display= document.getElementById("output").innerHTML=editor1;}