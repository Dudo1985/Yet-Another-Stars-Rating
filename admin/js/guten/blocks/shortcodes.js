(()=>{"use strict";var e={161:(e,t,a)=>{var r=a(534),n=wp.blocks.registerBlockType,s=wp.components.PanelBody,l=wp.element.Fragment,c=wp.blockEditor,o=c.useBlockProps,i=c.InspectorControls;n("yet-another-stars-rating/most-active-users",{edit:function(e){var t=o({className:"yasr-active-users-block"}),a=[React.createElement(r.YasrNoSettingsPanel,{key:0})];function n(e){return React.createElement(i,null,React.createElement(s,{title:"Settings"},React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("div",null,a))))}return wp.hooks.doAction("yasr_top_visitor_setting",a),React.createElement(l,null,React.createElement(n,null),React.createElement("div",t,"[yasr_most_active_users]"))},save:function(e){var t=o.save({className:"yasr-active-users-block"});return React.createElement("div",t,"[yasr_most_active_users]")}}),n("yet-another-stars-rating/most-active-reviewers",{edit:function(e){var t=o({className:"yasr-reviewers-block"}),a=[React.createElement(r.YasrNoSettingsPanel,{key:0})];function n(e){return React.createElement(i,null,React.createElement(s,{title:"Settings"},React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("div",null,a))))}return wp.hooks.doAction("yasr_top_reviewers_setting",a),React.createElement(l,null,React.createElement(n,null),React.createElement("div",t,"[yasr_top_reviewers]"))},save:function(e){var t=o.save({className:"yasr-reviewers-block"});return React.createElement("div",t,"[yasr_top_reviewers]")}})},972:(e,t,a)=>{var r=a(534),n=wp.blocks.registerBlockType,s=wp.element.Fragment,l=wp.blockEditor.useBlockProps;n("yet-another-stars-rating/overall-rating",{edit:function(e){var t=l({className:"yasr-overall-block"}),a=e.attributes,n=a.size,c=a.postId,o=e.setAttributes,i=e.isSelected,u=null,m=null;return"large"!==n&&(u=' size="'+n+'"'),!0===/^\d+$/.test(c)&&(m=' postid="'+c+'"'),React.createElement(s,null,i&&React.createElement(r.YasrBlocksPanel,{block:"overall",size:n,postId:c,setAttributes:o}),React.createElement("div",t,"[yasr_overall_rating",u,m,"]",i&&React.createElement(r.YasrPrintSelectSize,{size:n,setAttributes:o})))},save:function(e){var t=l.save({className:"yasr-overall-block"}),a=e.attributes,r=a.size,n=a.postId,s="";return r&&(s+='size="'+r+'"'),n&&(s+=' postid="'+n+'"'),React.createElement("div",t,"[yasr_overall_rating ",s,"]")}})},982:(e,t,a)=>{var r=a(534),n=wp.blocks.registerBlockType,s=wp.components.PanelBody,l=wp.element.Fragment,c=wp.blockEditor,o=c.useBlockProps,i=c.InspectorControls;n("yet-another-stars-rating/overall-rating-ranking",{edit:function(e){var t=o({className:"yasr-ov-ranking-block"}),a=[React.createElement(r.YasrNoSettingsPanel,{key:0})];function n(e){return React.createElement(i,null,React.createElement(s,{title:"Settings"},React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("div",null,a))))}return wp.hooks.doAction("yasr_overall_rating_rankings",a),React.createElement(l,null,React.createElement(n,null),React.createElement("div",t,"[yasr_ov_ranking]"))},save:function(e){var t=o.save({className:"yasr-ov-ranking-block"});return React.createElement("div",t,"[yasr_ov_ranking]")}}),n("yet-another-stars-rating/visitor-votes-ranking",{edit:function(e){var t=o({className:"yasr-vv-ranking-block"}),a=[React.createElement(r.YasrNoSettingsPanel,{key:0})];function n(e){return React.createElement(i,null,React.createElement(s,{title:"Settings"},React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("div",null,a))))}return wp.hooks.doAction("yasr_visitor_votes_rankings",a),React.createElement(l,null,React.createElement(n,null),React.createElement("div",t,"[yasr_most_or_highest_rated_posts]"))},save:function(e){var t=o.save({className:"yasr-vv-ranking-block"});return React.createElement("div",t,"[yasr_most_or_highest_rated_posts]")}})},835:(e,t,a)=>{var r=a(534),n=wp.blocks.registerBlockType,s=(wp.components.PanelBody,wp.element.Fragment),l=wp.blockEditor,c=l.useBlockProps;l.InspectorControls;n("yet-another-stars-rating/user-rate-history",{edit:function(e){var t=c({className:"yasr-user-rate-history"}),a=[React.createElement(r.YasrNoSettingsPanel,{key:0})];return wp.hooks.doAction("yasr_user_rate_history_settings",a),React.createElement(s,null,React.createElement("div",t,"[yasr_user_rate_history]"))},save:function(e){var t=c.save({className:"yasr-user-rate-history"});return React.createElement("div",t,"[yasr_user_rate_history]")}})},466:(e,t,a)=>{var r=a(534),n=wp.blocks.registerBlockType,s=wp.element.Fragment,l=wp.blockEditor.useBlockProps;n("yet-another-stars-rating/visitor-votes",{edit:function(e){var t=l({className:"yasr-vv-block"}),a=e.attributes,n=a.size,c=a.postId,o=e.setAttributes,i=e.isSelected,u=null,m=null;return"large"!==n&&(u=' size="'+n+'"'),!0===/^\d+$/.test(c)&&(m=' postid="'+c+'"'),React.createElement(s,null,React.createElement(r.YasrBlocksPanel,{block:"visitors",size:n,setAttributes:o,postId:c}),React.createElement("div",t,"[yasr_visitor_votes",u,m,"]",i&&React.createElement(r.YasrPrintSelectSize,{size:n,setAttributes:o})))},save:function(e){var t=l.save({className:"yasr-vv-block"}),a=e.attributes,r=a.size,n=a.postId,s="";return r&&(s+='size="'+r+'"'),n&&(s+=' postid="'+n+'"'),React.createElement("div",t,"[yasr_visitor_votes ",s,"]")}})},534:(e,t,a)=>{a.r(t),a.d(t,{YasrBlocksPanel:()=>b,YasrDivRatingOverall:()=>_,YasrNoSettingsPanel:()=>k,YasrPrintInputId:()=>E,YasrPrintSelectSize:()=>g,YasrProText:()=>R,yasrLabelSelectSize:()=>o,yasrLeaveThisBlankText:()=>p,yasrOptionalText:()=>c,yasrOverallDescription:()=>y,yasrSelectSizeChoose:()=>i,yasrSelectSizeLarge:()=>v,yasrSelectSizeMedium:()=>m,yasrSelectSizeSmall:()=>u,yasrVisitorVotesDescription:()=>d});var r=a(534),n=wp.i18n.__,s=wp.components.PanelBody,l=wp.blockEditor.InspectorControls,c=n("All these settings are optional","yet-another-stars-rating"),o=n("Choose Size","yet-another-stars-rating"),i=n("Choose stars size","yet-another-stars-rating"),u=n("Small","yet-another-stars-rating"),m=n("Medium","yet-another-stars-rating"),v=n("Large","yet-another-stars-rating"),p=n("Leave this blank if you don't know what you're doing.","yet-another-stars-rating"),y=n("Remember: only the post author can rate here.","yet-another-stars-rating"),d=n("This is the star set where your users will be able to vote","yet-another-stars-rating");function g(e){return React.createElement("form",null,React.createElement("select",{value:e.size,onChange:function(t){return a=e.setAttributes,n=(r=t).target.querySelector("option:checked"),a({size:n.value}),void r.preventDefault();var a,r,n}},React.createElement("option",{value:"--"},r.yasrSelectSizeChoose),React.createElement("option",{value:"small"},r.yasrSelectSizeSmall),React.createElement("option",{value:"medium"},r.yasrSelectSizeMedium),React.createElement("option",{value:"large"},r.yasrSelectSizeLarge)))}function E(e){var t;return!1!==e.postId&&(t=e.postId),React.createElement("div",null,React.createElement("input",{type:"text",size:"4",defaultValue:t,onKeyPress:function(t){return function(e,t){if("Enter"===t.key){var a=t.target.value;!0!==/^\d+$/.test(a)&&""!==a||e({postId:a}),t.preventDefault()}}(e.setAttributes,t)}}))}function R(){var e=n("To be able to customize this ranking, you need","yet-another-stars-rating"),t=n("You can buy the plugin, including support, updates and upgrades, on","yet-another-stars-rating");return React.createElement("h3",null,e," ",React.createElement("a",{href:"https://yetanotherstarsrating.com/?utm_source=wp-plugin&utm_medium=gutenberg_panel&utm_campaign=yasr_editor_screen&utm_content=rankings#yasr-pro"},"Yasr Pro."),React.createElement("br",null),t," ",React.createElement("a",{href:"https://yetanotherstarsrating.com/?utm_source=wp-plugin&utm_medium=gutenberg_panel&utm_campaign=yasr_editor_screen&utm_content=rankings"},"yetanotherstarsrating.com"))}function k(e){return React.createElement("div",null,React.createElement(R,null))}function b(e){var t;return"visitors"===e.block&&(t=d),"overall"===e.block&&(t=y),React.createElement(l,null,"overall"===e.block&&React.createElement(_,null),React.createElement(s,{title:"Settings"},React.createElement("h3",null,c),React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("label",null,o),React.createElement("div",null,React.createElement(g,{size:e.size,setAttributes:e.setAttributes}))),React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("label",null,"Post ID"),React.createElement(E,{postId:e.postId,setAttributes:e.setAttributes}),React.createElement("div",{className:"yasr-guten-block-explain"},"Use return (↵) to save."),React.createElement("p",null,p)),React.createElement("div",{className:"yasr-guten-block-panel"},t)))}function _(e){if(!0===JSON.parse(yasrConstantGutenberg.isFseElement))return React.createElement("div",{className:"yasr-guten-block-panel yasr-guten-block-panel-center"},React.createElement("div",null,n("This is a template file, you can't rate here. You need to insert the rating inside the single post or page","yet-another-stars-rating")),React.createElement("br",null));var t=n("Rate this article / item","yet-another-stars-rating"),a=wp.data.select("core/editor").getCurrentPost().meta.yasr_overall_rating,r=function(e,t){e=e.toFixed(1),e=parseFloat(e),wp.data.dispatch("core/editor").editPost({meta:{yasr_overall_rating:e}}),this.setRating(e),t()};return React.createElement("div",{className:"yasr-guten-block-panel yasr-guten-block-panel-center"},t,React.createElement("div",{id:"overall-rater",ref:function(){return yasrSetRaterValue(32,"overall-rater",!1,.1,!1,a,r)}}))}}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,a),s.exports}a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a(534),a(972),a(466),a(982),a(161);a(835)})();