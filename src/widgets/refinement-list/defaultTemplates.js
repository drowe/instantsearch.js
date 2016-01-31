module.exports = {
  header: '',
  item: `<div class="{{cssClasses.label_parent_container}}<label class="{{cssClasses.label}}">
  <input type="checkbox" class="{{cssClasses.checkbox}}" value="{{name}}" {{#isRefined}}checked{{/isRefined}} />{{name}}
  <span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>
</label></div>`,
  footer: ''
};
