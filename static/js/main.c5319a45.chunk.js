(this.webpackJsonpfinder=this.webpackJsonpfinder||[]).push([[0],{58:function(e,n,t){e.exports=t(86)},85:function(e,n,t){},86:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(16),o=t.n(i),c=t(7),l=t.n(c),s=t(11),d=t(106),u=t(48),m=t.n(u),p=t(30),f=t(6),v=t(15),g="https://api.themoviedb.org/3",b="66b725c8addb143a3f0d48d8f54c417d",h=function(e,n){var t=new Set(e);return e.has(n)?t.delete(n):t.add(n),t},x=function(e,n){return 0===n.size?Object(v.a)(e):e.filter((function(e){return e.genres.some((function(e){return n.has(e)}))}))},E=function(e,n){switch(n.type){case"ADD_OR_REMOVE_GENRE_FILTER":return Object(f.a)(Object(f.a)({},e),{},{filteredGenres:h(e.filteredGenres,n.payload)});case"SET_MOVIES":return Object(f.a)(Object(f.a)({},e),{},{movies:n.payload,filteredMovies:n.payload,filteredGenres:new Set,currentPage:2});case"FILTER_MOVIES":return Object(f.a)(Object(f.a)({},e),{},{filteredMovies:x(e.movies,e.filteredGenres),isSideBarVisible:!1});case"SEARCH_MOVIES":return Object(f.a)(Object(f.a)({},e),{},{movies:n.payload.movies,filteredMovies:n.payload.movies,filteredGenres:new Set,searchedMovie:n.payload.query,currentPage:2});case"LOAD_MOVIES":return Object(f.a)(Object(f.a)({},e),{},{movies:[].concat(Object(v.a)(e.movies),Object(v.a)(n.payload)),filteredMovies:[].concat(Object(v.a)(e.filteredMovies),Object(v.a)(x(n.payload,e.filteredGenres))),currentPage:e.currentPage+1});case"OPEN_OVERLAY":return Object(f.a)(Object(f.a)({},e),{},{selectedMovie:n.payload,isOverlayVisible:!0});case"CLOSE_OVERLAY":return Object(f.a)(Object(f.a)({},e),{},{selectedMovie:null,isOverlayVisible:!1});case"OPEN_SIDEBAR":return Object(f.a)(Object(f.a)({},e),{},{isSideBarVisible:!0});case"CLOSE_SIDEBAR":return Object(f.a)(Object(f.a)({},e),{},{isSideBarVisible:!1});case"SET_SPINNER_LOADING":return Object(f.a)(Object(f.a)({},e),{},{isSpinnerLoading:!e.isSpinnerLoading});case"SET_LOADING_MOVIES":return Object(f.a)(Object(f.a)({},e),{},{isLoadingMovies:!e.isLoadingMovies});default:return e}},y={genres:["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Family","Fantasy","History","Horror","Music","Mystery","Romance","Science Fiction","TV Movie","Thriller","War","Western"].map((function(e,n){return{id:n+1,name:e}})),filteredGenres:new Set,movies:[],filteredMovies:[],selectedMovie:null,currentPage:1,searchedMovie:"",isOverlayVisible:!1,isSideBarVisible:!1,isSpinnerLoading:!1,isLoadingMovies:!1},O=Object(r.createContext)(),w=function(e){var n=Object(r.useReducer)(E,y),t=Object(p.a)(n,2),i=t[0],o=t[1];return a.a.createElement(O.Provider,{value:{state:i,dispatch:o}},e.children)},j=t(3),S=t(4);function _(){var e=Object(j.a)(["\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, .5);\n    z-index: 2;\n\n    .container-box {\n        background-color: white;\n        position: fixed;\n        top: 2.5rem;\n        left: 2.5rem;\n        bottom: 2.5rem;\n        right: 2.5rem;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 1rem;\n\n        .close {\n            color: black;\n            position: absolute;\n            /* button width is 48px */\n            top: -20px;\n            right: -20px;\n            z-index: 2;\n        }\n\n        img {\n            max-width: 100%;\n        }\n\n        .content {\n            display: flex;\n            flex-direction: column;\n\n            .header {\n                display: flex;\n                align-items: center;\n                width: 100%;\n                margin-top: 1.5rem;\n\n                .title-date {\n                    display: flex;\n                    flex-direction: column;\n\n                    .title {\n                        font-size: .9rem;\n                    }\n\n                    .date {\n                        margin-top: .25rem;\n                        font-size: .7rem;\n                    }\n                }\n\n                .rate {\n                    margin-left: auto;\n                    background-color: var(--secundary-color);\n                    border: 1px solid var(--border-secundary-color);\n                    padding: .5rem;\n                    border-radius: 2.5px;\n                }\n            }\n\n            .overview {\n                margin: 1.5rem 0;\n                font-size: .8rem;\n            }\n\n            .actions {\n                width: 100%;\n                margin-top: auto;\n                display: flex;\n                flex-direction: column;\n\n                button {\n                    cursor: pointer;\n                    padding: .5rem 1rem;\n                    border: none;\n\n                    &.offline {\n                        background-color: var(--primary-color);\n                        border: 1px solid var(--border-primary-color);\n                        margin-bottom: .25rem;\n                    }\n\n                    &.online {\n                        background-color: var(--secundary-color);\n                        border: 1px solid var(--border-secundary-color);\n                        margin-top: .25rem;\n                    }\n                }\n            }\n        }\n    }\n\n    @media (min-width: 336px) {\n        .container-box {\n            .content {\n                .actions {\n                    flex-direction: row;\n                    justify-content: space-evenly;\n\n                    button.offline {\n                        margin-bottom: 0;\n                    }\n\n                    button.online {\n                        margin-top: 0;\n                    }\n                }\n            }\n        }\n    }\n\n    @media (min-width: 650px) {\n        .container-box {\n            flex-direction: row;\n            height: 450px;\n            margin: auto;\n            padding: 1rem 0;\n\n            img {\n                width: 40%;\n                height: 100%;\n                padding: 0 1rem;\n            }\n\n            .content {\n                width: 60%;\n                height: 100%;\n                padding: 0 1rem;\n\n                .header {\n                    .title-date {\n                        .title {\n                            font-size: 1.2rem;\n                        }\n\n                        .date {\n                            font-size: .75rem;\n                        }\n                    }\n\n                    .rate {\n                        margin-left: auto;\n                        padding: .5rem;\n                        border-radius: 2.5px;\n                    }\n                }\n\n                .overview {\n                    font-size: 1rem;\n                }\n            }\n        }\n    }\n\n    @media (min-width: 1024px) {\n        .container-box {\n            width: 80%;\n        }\n    }\n\n    @media(min-width: 1200px) {\n        .container-box {\n            width: 60%;\n        }\n    }\n"]);return _=function(){return e},e}var N=S.a.div(_()),k=function(){var e=Object(r.useContext)(O),n=e.state,t=e.dispatch,i=n.selectedMovie,o=i.image,c=i.title,l=i.rate,s=i.release_date,u=i.overview,p=function(){t({type:"CLOSE_OVERLAY"})};return a.a.createElement(N,{onClick:p},a.a.createElement("div",{className:"container-box",onClick:function(e){return e.stopPropagation()}},a.a.createElement(d.a,{className:"close",onClick:p},a.a.createElement(m.a,null)),a.a.createElement("img",{src:o,alt:c}),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"title-date"},a.a.createElement("span",{className:"title"},c),a.a.createElement("span",{className:"date"},s)),a.a.createElement("span",{className:"rate"},l)),a.a.createElement("div",{className:"overview"},u),a.a.createElement("div",{className:"actions"},a.a.createElement("button",{className:"offline"},"Watch Offline"),a.a.createElement("button",{className:"online"},"Watch Online")))))},I=t(49),R=t.n(I);function L(){var e=Object(j.a)(["\n    min-height: 48px;\n    display: flex;\n    align-items: center;\n    padding: 0 1rem;\n    background-color: var(--primary-color);\n    border-bottom: 1px solid var(--border-primary-color);\n    box-shadow: 0 5px 8px rgba(var(--dark-gray), .1);\n\n    .title {\n        font-size: 1.5rem;\n        cursor: pointer;\n    }\n\n    .menu-icon {\n        margin-left: auto;\n\n        & svg {\n            color: rgb(var(--dark-gray));\n        }\n    }\n\n    @media (min-width: 768px) {\n        display: none;\n    }\n"]);return L=function(){return e},e}var M=S.a.div(L()),C=function(){var e=Object(r.useContext)(O).dispatch;return a.a.createElement(M,null,a.a.createElement("h1",{className:"title"},"Movie Finder"),a.a.createElement(d.a,{className:"menu-icon",onClick:function(){return e({type:"OPEN_SIDEBAR"})}},a.a.createElement(R.a,null)))},V=t(50),A=t.n(V),D=t(108),z=t(107);function G(){var e=Object(j.a)(["\n    & svg {\n        color: rgb(var(--dark-gray));\n    }\n"]);return G=function(){return e},e}var T=S.a.div(G()),P=function(e){var n=e.id,t=e.name,i=e.isFiltered,o=Object(r.useContext)(O).dispatch;return a.a.createElement(T,null,a.a.createElement(D.a,{control:a.a.createElement(z.a,{checked:i,onChange:function(){return o({type:"ADD_OR_REMOVE_GENRE_FILTER",payload:n})}}),label:t}))};function F(){var e=Object(j.a)(["\n    margin-bottom: 1rem;\n    overflow-y: scroll;\n\n    .title {\n        font-size: 1.5rem;\n        margin-bottom: 1rem;\n    }\n\n    .genres {\n        overflow-y: scroll;\n    }\n\n    @media (min-width: 650px) {\n        .genres {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n        }\n    }\n\n    @media (min-width: 768px) {\n        .genres {\n            display: block;\n        }\n    }\n"]);return F=function(){return e},e}var B=S.a.div(F()),q=function(){var e=Object(r.useContext)(O).state,n=e.genres,t=e.filteredGenres;return a.a.createElement(B,null,a.a.createElement("h1",{className:"title"},"Genres"),a.a.createElement("div",{className:"genres"},n.map((function(e){return a.a.createElement(P,Object.assign({key:e.id,isFiltered:t.has(e.id)},e))}))))};function H(){var e=Object(j.a)(["\n    padding: 1rem;\n    height: 100%;\n\n    .container {\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n\n        .filter {\n            margin-top: auto;\n            padding: .5rem 0;\n            border: 1px solid black;\n            background-color: var(--primary-color);\n            border: 1px solid var(--border-primary-color);\n            font-size: 1rem;\n            border-radius: 5px;\n            cursor: pointer;\n        }\n    }\n\xdf\n    @media (min-width: 650px) {\n        height: 100%;\n        justify-content: space-between;\n    }\n\n    @media (min-width: 768px) {\n        margin: 0;\n    }\n"]);return H=function(){return e},e}var J=S.a.div(H()),W=function(){var e=Object(r.useContext)(O).dispatch;return a.a.createElement(J,null,a.a.createElement("div",{className:"container"},a.a.createElement(q,null),a.a.createElement("button",{className:"filter",onClick:function(){return e({type:"FILTER_MOVIES"})}},"Filter")))};function Y(){var e=Object(j.a)(["\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: var(--secundary-color);\n    border-right: 1px solid var(--border-secundary-color);\n    padding: 1.5rem 1rem;\n    z-index: 1;\n    display: ",";\n\n    .close {\n        display: flex;\n\n        button {\n            margin-left: auto;\n            width: 24px;\n            height: 24px;\n        }\n    }\n\n    @media (min-width: 768px) {\n        width: 30%;\n        max-height: 100%;\n        display: inline-block;\n        position: unset;\n        padding: 0;\n\n        .close {\n            display: none;\n        }\n    }\n\n    @media (min-width: 1200px) {\n        width: 20%;\n    }\n"]);return Y=function(){return e},e}var U=S.a.div(Y(),(function(e){return e.visible?"inline-block":"none"})),K=function(){var e=Object(r.useContext)(O),n=e.state,t=e.dispatch,i=n.isSideBarVisible;return a.a.createElement(U,{visible:i},a.a.createElement("div",{className:"close"},a.a.createElement(d.a,{onClick:function(){return t({type:"CLOSE_SIDEBAR"})}},a.a.createElement(A.a,null))),a.a.createElement(W,null))},Q=t(54),X=t.n(Q),Z=t(51),$=t(52),ee=t.n($),ne=function(){var e=Object(s.a)(l.a.mark((function e(n,t){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.prev=1,e.next=4,ee.a.get(n);case 4:a=e.sent,r=t(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t){return e.apply(this,arguments)}}(),te=function(){var e=Object(s.a)(l.a.mark((function e(n,t,r){var a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem(n)){e.next=3;break}return a=JSON.parse(localStorage.getItem(n)),e.abrupt("return",a);case 3:return e.next=5,ne(t,r);case 5:return i=e.sent,localStorage.setItem(n,JSON.stringify(i)),e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),re=t(53),ae=t.n(re),ie=function(e){return{id:ae()(),image:e.poster_path?"".concat("https://image.tmdb.org/t/p/w500","/").concat(e.poster_path):"/movie-finder-react/default.png",title:e.title,rate:e.vote_average,release_date:e.release_date,overview:e.overview,genres:e.genre_ids}},oe=function e(){Object(Z.a)(this,e)};oe.retrieve=Object(s.a)(l.a.mark((function e(){var n,t,r,a=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,t="".concat(g).concat("/movie/top_rated","?api_key=").concat(b,"&page=").concat(n),e.next=4,te("ls_movies",t,(function(e){return e.results.map(ie)}));case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))),oe.search=function(){var e=Object(s.a)(l.a.mark((function e(n){var t,r,a,i,o=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:1,r=encodeURI(n),a="".concat(g).concat("/search/movie","?api_key=").concat(b,"&query=").concat(r,"&page=").concat(t),e.next=5,ne(a,(function(e){return e.results.map(ie)}));case 5:return i=e.sent,localStorage.setItem("ls_movies",JSON.stringify(i)),e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),oe.load=function(){var e=Object(s.a)(l.a.mark((function e(n,t){var r,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="",r=""===n?"".concat(g).concat("/movie/top_rated","?api_key=").concat(b,"&page=").concat(t):"".concat(g).concat("/search/movie","?api_key=").concat(b,"&query=").concat(n,"&page=").concat(t),e.next=4,ne(r,(function(e){return e.results.map(ie)}));case 4:return a=e.sent,i=JSON.parse(localStorage.getItem("ls_movies")),localStorage.setItem("ls_movies",JSON.stringify([].concat(Object(v.a)(i),Object(v.a)(a)))),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();var ce=oe;function le(){var e=Object(j.a)(["\n    width: 100%;\n    display: flex;\n    margin: 1rem 0;\n\n    .search {\n        flex: 1;\n        padding-right: 1rem;\n\n        input[type=text] {\n            width: 100%;\n            height: 100%;\n            padding-left: 1rem;\n            font-size: .9rem;\n            color: var(--dark-gray);\n            border: none;\n            border-left: 2px solid var(--border-secundary-color);\n        }\n    }\n\n    .search-icon {\n        background-color: var(--secundary-color);\n\n        & svg {\n            color: rgb(var(--dark-gray));\n        }\n    }\n\n    @media (min-width: 768px) {\n        margin-top: 1.5rem;\n\n        .search {\n            input[type=text] {\n                border: 2px solid var(--border-secundary-color);\n            }\n        }\n    }\n"]);return le=function(){return e},e}var se=S.a.div(le()),de=function(){var e=Object(r.useContext)(O).dispatch,n=Object(r.useState)(""),t=Object(p.a)(n,2),i=t[0],o=t[1],c=function(){var n=Object(s.a)(l.a.mark((function n(){var t,r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==i){n.next=2;break}return n.abrupt("return");case 2:return t=i.trim(),e({type:"SET_SPINNER_LOADING"}),n.next=6,ce.search(t);case 6:r=n.sent,e({type:"SEARCH_MOVIES",payload:{movies:r,query:t}}),e({type:"SET_SPINNER_LOADING"}),o("");case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return a.a.createElement(se,null,a.a.createElement("div",{className:"search"},a.a.createElement("input",{type:"text",placeholder:"Search movie",value:i,onChange:function(e){var n=e.target.value;o(n)},autoFocus:!0})),a.a.createElement(d.a,{className:"search-icon",onClick:c},a.a.createElement(X.a,null)))};function ue(){var e=Object(j.a)(["\n    width: 100%;\n    height: 350px;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid var(--border-secundary-color);\n    border-radius: 5px;\n    box-shadow: 3px 3px 3px rgba(var(--dark-gray), .1);\n\n    img {\n        width: 100%;\n        min-height: 250px;\n        cursor: pointer;\n    }\n\n    .content {\n        padding: 1rem .5rem;\n        flex: 1;\n        display: flex;\n        align-items: center;\n        max-height: 100px;\n\n        .header {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            width: 100%;\n            max-height: 100%;\n            overflow: hidden;\n\n            .title {\n                font-size: .9rem;\n                font-weight: bolder;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                margin-right: 1rem;\n            }\n\n            .rate {\n                margin-left: auto;\n                background-color: var(--secundary-color);\n                padding: .5rem;\n                border: 1px solid var(--border-secundary-color);\n                border-radius: 5px;\n            }\n        }\n\n        .overview {\n            display: none;\n        }\n    }\n\n    @media (min-width: 768px) {\n        flex-direction: row;\n        height: 300px;\n\n        img {\n            width: 35%;\n            height: 100%;\n        }\n\n        .content {\n            width: 65%;\n            min-height: 100%;\n            flex-direction: column;\n            padding: 1rem;\n            border-left: 1px solid var(--border-secundary-color);\n\n            .header {\n                width: 100%;\n\n                title {\n                    font-size: 1rem;\n                }\n            }\n\n            .overview {\n                display: block;\n                margin-top: 1.1rem;\n                font-size: .85rem;\n            }\n        }\n    }\n"]);return ue=function(){return e},e}var me=S.a.div(ue()),pe=function(e){var n=e.movie,t=Object(r.useContext)(O).dispatch,i=n.image,o=n.title,c=n.rate,l=n.overview;return a.a.createElement(me,null,a.a.createElement("img",{src:i,alt:o,onClick:function(){return t({type:"OPEN_OVERLAY",payload:n})},loading:"lazy"}),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"header"},a.a.createElement("span",{className:"title"},o),a.a.createElement("span",{className:"rate"},c)),a.a.createElement("div",{className:"overview"},l)))},fe=t(8),ve=t.n(fe),ge=function(e){var n=e.childRef,t=e.scrollOffset,i=e.onScroll,o=e.shouldScroll,c=e.children;return Object(r.useEffect)((function(){var e=n.current,t=function(){if(o){var n=e.lastElementChild;if(void 0!==n){var t=n.offsetHeight,r=e.offsetHeight;e.scrollHeight-(e.scrollTop+r)<=t/2&&i()}}};return e.addEventListener("scroll",t,!1),function(){e.removeEventListener("scroll",t,!1)}}),[n,t,i,o]),a.a.createElement(a.a.Fragment,null,c)};ge.propTypes={childRef:ve.a.object.isRequired,scrollOffset:ve.a.number.isRequired,onScroll:ve.a.func.isRequired,shouldScroll:ve.a.bool.isRequired};var be=ge;function he(){var e=Object(j.a)(["\n    max-height: 100%;\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    grid-gap: 1rem;\n    margin: 1rem 0;\n    overflow-y: scroll;\n\n    .load-more {\n        cursor: pointer;\n        padding: .5rem 1rem;\n        border: none;\n        background-color: var(--primary-color);\n        font-size: 1rem;\n        margin-top: 1rem;\n        grid-column: span 2;\n    }\n\n    @media (min-width: 450px) {\n        grid-template-columns: repeat(2, 1fr);\n\n        .load-more {\n            grid-column: span 3;\n        }\n    }\n\n    @media (min-width: 650px) {\n        grid-template-columns: repeat(3, 1fr);\n\n        .load-more {\n            grid-column: span 4;\n        }\n    }\n\n    @media (min-width: 768px) {\n        grid-template-columns: repeat(1, 1fr);\n\n        .load-more {\n            grid-column: span 1;\n        }\n    }\n\n    @media (min-width: 1200px) {\n        grid-template-columns: repeat(2, 1fr);\n\n        .load-more {\n            grid-column: span 2;\n        }\n    }\n"]);return he=function(){return e},e}var xe=S.a.div(he()),Ee=function(){var e=Object(r.useContext)(O),n=e.state,t=e.dispatch,i=n.filteredMovies,o=n.currentPage,c=n.searchedMovie,d=n.isLoadingMovies,u=Object(r.useRef)(),m=function(){var e=Object(s.a)(l.a.mark((function e(n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"SET_LOADING_MOVIES"}),e.next=3,ce.load(c,n);case 3:r=e.sent,t({type:"LOAD_MOVIES",payload:r}),t({type:"SET_LOADING_MOVIES"});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return a.a.createElement(xe,{ref:u},a.a.createElement(be,{childRef:u,scrollOffset:50,onScroll:function(){return m(o)},shouldScroll:!d},i.map((function(e){return a.a.createElement(pe,{key:e.id,movie:e})}))))},ye=t(55),Oe=t(105),we=t(9),je=Object(we.a)({root:{color:"#888888",margin:"auto"}})(Oe.a),Se=function(e){return function(n){var t=n.isLoading,r=Object(ye.a)(n,["isLoading"]);return t?a.a.createElement(je,null):a.a.createElement(e,r)}};function _e(){var e=Object(j.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 0 2rem;\n\n    @media (min-width: 768px) {\n        width: 70%;\n    }\n\n    @media (min-width: 1200px) {\n        width: 80%;\n    }\n"]);return _e=function(){return e},e}var Ne=S.a.div(_e()),ke=Se(Ee),Ie=function(){var e=Object(r.useContext)(O).state;return a.a.createElement(Ne,null,a.a.createElement(de,null),a.a.createElement(ke,{isLoading:e.isSpinnerLoading}))};function Re(){var e=Object(j.a)(["\n    width: 100%;\n    max-height: 100%;\n    display: flex;\n"]);return Re=function(){return e},e}var Le=S.a.div(Re()),Me=function(){return a.a.createElement(Le,null,a.a.createElement(K,null),a.a.createElement(Ie,null))};function Ce(){var e=Object(j.a)(["\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n\n    .body {\n        display: flex;\n        flex-direction: column;\n    }\n"]);return Ce=function(){return e},e}var Ve=S.a.div(Ce()),Ae=function(){var e=Object(r.useContext)(O),n=e.state,t=e.dispatch;Object(r.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"SET_SPINNER_LOADING"}),e.next=3,ce.retrieve();case 3:n=e.sent,t({type:"SET_MOVIES",payload:n}),t({type:"SET_SPINNER_LOADING"});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var i=n.isOverlayVisible;return a.a.createElement(Ve,null,i&&a.a.createElement(k,null),a.a.createElement(C,null),a.a.createElement(Me,null))};t(84),t(85);o.a.render(a.a.createElement(w,null,a.a.createElement(Ae,null)),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.c5319a45.chunk.js.map