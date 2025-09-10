/**
 * Add New using OpenAI
 *
 * @package Page_Generator_Pro
 * @author WP Zinc
 */

jQuery( document ).ready(
	function ( $ ) {

		/**
		 * Loading modal on submit
		 */
		$( 'form' ).on(
			'submit',
			function ( e ) {

				wpzinc_modal_open(
					page_generator_pro_groups_openai.building_title,
					page_generator_pro_groups_openai.building_message
				);

			}
		);

	}
);
