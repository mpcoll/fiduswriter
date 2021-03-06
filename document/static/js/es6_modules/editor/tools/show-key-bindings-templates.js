export let showKeyBindingsTemplate = _.template('\
<div title="'+gettext('Keyboard Shortcuts')+'">\
      <div id="helpListWrap" class="help-list-wrap">\
        <ul class="help-list">\
          <li class="help-key-unit">\
            <kbd class="help-key"><span>CTRL+p</span></kbd>\
            <span class="help-key-def">'+gettext('Print')+'</span>\
          </li>\
          <li class="help-key-unit">\
            <kbd class="help-key"><span>CTRL+s</span></kbd>\
            <span class="help-key-def">'+gettext('Save revision')+'</span>\
          </li>\
          <li class="help-key-unit">\
            <kbd class="help-key"><span>Shift+CTRL+/</span></kbd>\
            <span class="help-key-def">'+gettext('Show keyboard shortcuts')+'</span>\
          </li>\
        </ul><!-- .help-list -->\
        <ul class="help-list">\
          <li class="help-key-unit">\
            <kbd class="help-key"><span>CTRL+B</span></kbd>\
            <span class="help-key-def">'+gettext('Bold')+'</span>\
          </li>\
          <li class="help-key-unit">\
            <kbd class="help-key"><span>CTRL+I</span></kbd>\
            <span class="help-key-def">'+gettext('Italics')+'</span>\
          </li>\
          <li class="help-key-unit">\
            <kbd class="help-key"><span>CTRL+Z</span></kbd>\
            <span class="help-key-def">'+gettext('Undo')+'</span>\
          </li>\
          <li class="help-key-unit">\
            <kbd class="help-key"><span>CTRL+Shift+Z</span></kbd>\
            <span class="help-key-def">'+gettext('Redo')+'</span>\
          </li>\
        </ul><!-- .help-list -->\
      </div><!-- .help-list-wrap -->\
</div>\
')
