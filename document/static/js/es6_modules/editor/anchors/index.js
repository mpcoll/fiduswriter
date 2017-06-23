import {ModAnchorStore} from "./store"
import {ModAnchorInteractions} from "./interactions"

export class ModAnchors {
    constructor(editor) {
        editor.mod.anchors = this
        this.editor = editor
        new ModAnchorStore(this)
        new ModAnchorInteractions(this)
        let styleContainers = document.createElement('temp')
        styleContainers.innerHTML = `
        <style type="text/css" id="active-anchor-style">.comment[data-id^='anchor'] {background-color: #fffacf;}</style>`
        while (styleContainers.firstElementChild) {
            document.head.appendChild(styleContainers.firstElementChild)
        }
        this.bindEvents()
    }
    
    bindEvents() {

        // Handle comments show/hide
        let that=this        
        jQuery(document).on('click', '#outlines-display:not(.disabled)',
            function() {
            	jQuery('#outlines').html('')
            	that.editor.pm.doc.descendants((node, pos, parent) => {
            		let nodeStart = pos
            		let nodeEnd = pos + node.nodeSize
            		for (let i =0; i < node.marks.length; i++) {
            			let mark = node.marks[i]
            			if (mark.type.name === 'comment' && String(mark.attrs.id).includes('anchor')) 
            			{
            				jQuery('#outlines').append( "<div id='outlinebox' class='anchor-box'><span id='anchorSummary' class='elipse'>"+node.text+"</span><a class='anchorURI'>"+window.location.href+"?anchor="+String(mark.attrs.id)+"</a></div>" );
            			}
            		}
            	})                       	
            	
            	jQuery(this).toggleClass('selected') // what should this look like? CSS needs to be defined
            	jQuery('#outlines').toggleClass('hide')
            		
            })
         jQuery('.anchorURI').on('click',function () {
         	let id=this.text.split('=')[1]
         	jQuery('.comment[data-id="'+id+'"]')[0].scrollTop( 300 );
            		})
            	
            

    }
}