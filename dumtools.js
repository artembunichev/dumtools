fetch(
	
	chrome.runtime.getURL( "dumtools.css" )
	
)
	
	.then(
		( res )=> (
			res.text()
				.then(
					( css_text )=> {
						
						chrome.devtools.panels.applyStyleSheet( css_text ) ;
						
					}
				)
		)
	);
