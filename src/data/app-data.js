// ============================================================================================
//                                      Data for Form Fields
// ==============================================================================================

export const loginFormFields = [
	{ title: 'email', inputType: 'text', isMandatory: true },
	{ title: 'password', inputType: 'password', isMandatory: true },
	{ title: 'telephone', inputType: 'text', isMandatory: false },
	{ title: 'username', inputType: 'text', isMandatory: true },
];
export const subscribeFormFields = [
	{ title: 'email', inputType: 'text', isMandatory: true },
	{ title: 'password', inputType: 'password', isMandatory: true },
	{ title: 'email', inputType: 'text', isMandatory: false },
	{ title: 'email', inputType: 'text', isMandatory: true },
];

// ============================================================================================
//                                      Data for Backgrounds
// ==============================================================================================

export const BackgroundPages = [
	{
		title: 'Login',
		imageUrl:
			'https://www.drupal.org/files/project-images/reg_confirm_email_with_button_0.png',
		squareColor: 'grey',
	},
	{
		title: 'Sign Up',
		imageUrl:
			'https://www.hcpc-uk.org/globalassets/image-library/icons/icon-register-800x600.gif',
		squareColor: 'black',
	},
	{
		title: 'Subscribe',
		imageUrl: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c50d.png',
		squareColor: 'orange',
	},
];

// ============================================================================================
//                                      Data for Navbar Buttons
// ==============================================================================================

export const NavbarLinks = [
	{
		title: 'Sports',
		isSelected: null,
		toLocation: '/sports',
	},
	{
		title: 'Theatre',
		isSelected: null,
		toLocation: '/theatre',
	},
	{
		title: 'Music',
		isSelected: null,
		toLocation: '/music',
	},
    {
		title: 'Family',
		isSelected: null,
		toLocation: '/family',
	},
	{
		title: 'Login',
		isSelected: null,
		toLocation: '/login',
	},
];


// ============================================================================================
//                                      Data for Event Filtering Buttons
// ==============================================================================================

export const FilteringOptions = [
	{
		title: 'Sort By',
		options: ['Cheapest first', 'Popular first'],
		
	},
	{
		title: 'Filter',
		options: ['Tickets Available', 'Less than 50 Km from me', 'Less than $10', 'Less than $20', 'Less than $50', 'Less than $100'],
	}
	
];