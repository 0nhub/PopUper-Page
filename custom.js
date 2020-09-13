function carousel(id) {
    if (id === 'slide-1') {
        $('#slide-1').show()
        $('#slide-2').hide()
        $('#slide-3').hide()
        $('#nav-1').css({
            'background-color': '#333',
        });
        $('#nav-2').css({
            'background-color': 'rgba(0, 0, 0, 0.3)',
        });
        $('#nav-3').css({
            'background-color': 'rgba(0, 0, 0, 0.3)',
        });
    }
    if (id === 'slide-2') {
        $('#slide-1').hide()
        $('#slide-2').show()
        $('#slide-3').hide()
        $('#nav-2').css({
            'background-color': '#333',
        });
        $('#nav-1').css({
            'background-color': 'rgba(0, 0, 0, 0.3)',
        });
        $('#nav-3').css({
            'background-color': 'rgba(0, 0, 0, 0.3)',
        });
    }
    if (id === 'slide-3') {
        $('#slide-1').hide()
        $('#slide-2').hide()
        $('#slide-3').show()
        $('#nav-3').css({
            'background-color': '#333',
        });
        $('#nav-2').css({
            'background-color': 'rgba(0, 0, 0, 0.3)',
        });
        $('#nav-1').css({
            'background-color': 'rgba(0, 0, 0, 0.3)',
        });
    }
}

function srollToPage(page) {
    if (page === 'slide-one') {
        $('#slide-one').show()

        const block_type = 'end';
        const element = document.getElementById("slide-one");

        smoothScroll( element, { block: block_type })
        .then( (res) => {
            // hide element
            $('#slide-main').hide()
            $('#slide-two').hide()
            $('#slide-three').hide()
            $('.navigation_down').css({
                'display': 'block',
            });
            if(window.innerWidth <= 600) {
                console.log('window.innerWidth', window.innerWidth)
                $('#navigation_up_one').hide()
                $('.navigation_up').css({
                    'display': 'none',
                });
            } else {
                $('#navigation_up_one').show()
                $('.navigation_up').css({
                    'display': 'block',
                });
            }
        } )
    }
    if (page === 'slide-two') {
        $('#slide-two').show()
        const element = document.getElementById("slide-two");
        const block_type = 'end';

        smoothScroll( element, { block: block_type })
        .then( (res) => {
            // hide element
            $('#slide-main').hide()
            $('#slide-one').hide()
            $('#slide-three').hide()
            $('.navigation_down').css({
                'display': 'block',
            });
            $('.navigation_up').css({
                'display': 'block',
            });
        } )
    }
    if (page === 'slide-three') {
        $('#slide-three').show()
        const element = document.getElementById("slide-three");

        const block_type = 'end';

        smoothScroll( element, { block: block_type })
        .then( (res) => {
            // hide element
            $('#slide-main').hide()
            $('#slide-two').hide()
            $('#slide-one').hide()
            $('.navigation_down').css({
                'display': 'block',
            });
            $('.navigation_up').css({
                'display': 'block',
            });
        } )
    }
    if (page === 'slide-main') {
        $('#slide-main').show()
        const element = document.getElementById("slide-main");
        const block_type = 'start';

        smoothScroll( element, { block: block_type })
        .then( (res) => {
            // hide element
            $('#slide-two').hide()
            $('#slide-one').hide()
            $('#slide-three').hide()
            $('.navigation_down').css({
                'display': 'block',
            });
        } )
    }
}

/* 
*
* Promised based scrollIntoView( { behavior: 'smooth' } )
* @param { Element } elem
**  ::An Element on which we'll call scrollIntoView
* @param { object } [options]
**  ::An optional scrollIntoViewOptions dictionary
* @return { Promise } (void)
**  ::Resolves when the scrolling ends
*
*/
function smoothScroll( elem, options ) {
    return new Promise( (resolve) => {
        if( !( elem instanceof Element ) ) {
        throw new TypeError( 'Argument 1 must be an Element' );
        }
        let same = 0; // a counter
        let lastPos = null; // last known Y position
        // pass the user defined options along with our default
        const scrollOptions = Object.assign( { behavior: 'smooth' }, options );

        // let's begin
        elem.scrollIntoView( scrollOptions );
        requestAnimationFrame( check );
        
        // this function will be called every painting frame
        // for the duration of the smooth scroll operation
        function check() {
        // check our current position
        const newPos = elem.getBoundingClientRect().top;
        
        if( newPos === lastPos ) { // same as previous
            if(same ++ > 2) { // if it's more than two frames
    /* @todo: verify it succeeded
    * if(isAtCorrectPosition(elem, options) {
    *   resolve();
    * } else {
    *   reject();
    * }
    * return;
    */
            return resolve(0); // we've come to an halt
            }
        }
        else {
            same = 0; // reset our counter
            lastPos = newPos; // remember our current position
            // return resolve(lastPos); // we've come to an halt
        }
        // check again next painting frame
        requestAnimationFrame(check);
        }
    });
}
