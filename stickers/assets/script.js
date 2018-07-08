var app = new Vue({
	'el': '#fullpage',
	'data': {
		'stickers': [
			'https://s.tcdn.co/f40/2cf/f402cf98-b311-3eb3-af17-6c5fcca01545/1.png',
			'http://vkclub.su/_data/stickers/sparks/sticker_vk_sparks_000.png',
			'https://telegram-stickers.github.io/public/stickers/animals/2.png',

			'https://telegram-stickers.github.io/public/stickers/animals/14.png',
			'https://telegram-stickers.github.io/public/stickers/animals/13.png',
			'https://telegram-stickers.github.io/public/stickers/animals/17.png',
			// 'https://telegram-stickers.github.io/public/stickers/animals/12.png',
			'https://s.tcdn.co/c76/5a3/c765a3db-8099-3359-8976-30b76a49588e/5.png',

			'https://s.tcdn.co/d47/df4/d47df409-404d-31cc-9749-652881191b93/1.png',
			'https://s.tcdn.co/d47/df4/d47df409-404d-31cc-9749-652881191b93/8.png',

			'https://s.tcdn.co/17a/d1d/17ad1d46-6d6d-3ff7-bbd4-9d054d9154c1/5.png', //
			'https://s.tcdn.co/17a/d1d/17ad1d46-6d6d-3ff7-bbd4-9d054d9154c1/12.png',
			'https://s.tcdn.co/f40/2cf/f402cf98-b311-3eb3-af17-6c5fcca01545/2.png',
			'https://s.tcdn.co/0cc/ba1/0ccba11f-e506-3c8c-8862-a4d914dcf683/8.png',
			'https://s.tcdn.co/905/ed2/905ed27a-e789-353d-9f6d-19a5fa593116/29.png',
			'https://s.tcdn.co/5a2/7e0/5a27e027-8da2-3df8-ae73-de6c04e63f02/19.png',
		]
	}
})

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});
