/**
 * Add/Edit Keyword
 *
 * @package Page_Generator_Pro
 * @author WP Zinc
 */

jQuery( document ).ready(
	function ( $ ) {

		// Initialize conditional fields.
		page_generator_pro_conditional_fields_initialize();
		$( 'select[name="source"]' ).trigger( 'change' );

		// Initialize CodeMirror.
		if ( $( 'textarea.wpzinc-codemirror' ).length > 0 ) {
			$( 'textarea.wpzinc-codemirror' ).each(
				function () {
					wp.codeEditor.initialize( $( this ), page_generator_pro_keywords );
				}
			);
		}

		// Initialize datatables for previewing third party sources.
		if ( $( 'table.page-generator-pro-keywords-table' ).length ) {
			var pageGeneratorProKeywordTermsTable = $( 'table.page-generator-pro-keywords-table' ).DataTable(
				{
					ajax: {
						url: ajaxurl,
						type: 'POST',
						data: {
							action: 	'page_generator_pro_keywords_get_terms',
							nonce:  	$( 'input[name="page-generator-pro_nonce"]' ).val(),
							id: 		$( 'table.page-generator-pro-keywords-table' ).data( 'keyword-id' )
						},
					},
					processing: true,
					serverSide: true,
					responsive: false,
					autoWidth: true,
					scrollX: true,
					scrollY: 500
				}
			);
		}

		// Refresh third party sources when Refresh button clicked.
		$( 'button.page-generator-pro-refresh-terms' ).on(
			'click',
			function ( e ) {

				// Prevent default action on button.
				e.preventDefault();

				// Disable button and show spinner.
				var button = $( this );
				$( 'span.spinner', $( button ).parent() ).addClass( 'is-active' );
				$( button ).prop( 'disabled', 'disabled' );

				// Make an AJAX request to refresh terms for this Keyword.
				$.post(
					ajaxurl,
					{
						'action': 		'page_generator_pro_keywords_refresh_terms',
						'nonce':  		$( button ).data( 'nonce' ),
						'keyword': 		$( button ).data( 'keyword' )
					},
					function ( response ) {

						// Enable button and hide spinner.
						$( 'span.spinner', $( button ).parent() ).removeClass( 'is-active' );
						$( button ).prop( 'disabled', false );

						// If an error occured, show the error message.
						if ( ! response.success ) {
							alert( response.data );
							return;
						}

						// Reload the datatable.
						pageGeneratorProKeywordTermsTable.ajax.reload();

					}
				);

			}
		);

	}
);
