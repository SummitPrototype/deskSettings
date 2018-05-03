const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/deskSettings/'
  },
    generate:{
  		dir: 'docs'
  	}
} : {
 		 generate:{
  			dir: 'docs'
		 }
	}

module.exports = {
  ...routerBase,
  modules: [
  ],
  head:{
  	meta:[
		{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }
  	],
    script: [
       { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.js' },
       { src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js'}

    ],
    link: [
       { rel:'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css'},
       { rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
    ]
  }

}