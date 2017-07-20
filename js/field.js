jQuery(document).ready(function($) {
	$(document).live('acf/setup_fields', function(e, div){
		$(".select2select").each(function(index, el) {
			$(el).select2({
				placeholder: langs.placeholder,
				width: "50%",
				templateSelection: template,
			});
		});
	});

	function template(data, container) {
		return data.text.replace(/\s\(.*?\)/,"");
	}
});