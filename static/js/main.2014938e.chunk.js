(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var a=i(3),s=i.n(a),n=(i(11),i(6)),c=i(1),r=(i(12),i(13),i(14),i(0)),l=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(l,{movie:e},e.imdbId)}))})},m=i(4),d=i.n(m);var j=function(e){return/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/.test(e)};var b=function(e){var t=e.name,i=e.value,a=e.label,s=void 0===a?t:a,n=e.placeholder,l=void 0===n?"Enter ".concat(s):n,o=e.required,m=void 0!==o&&o,b=e.url,h=void 0!==b&&b,u=e.onChange,g=void 0===u?function(){}:u,p=e.hasSomeError,v=Object(c.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))}))[0],O=Object(c.useState)(""),w=O[0],x=O[1];return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:v,children:s}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{type:"text",id:v,"data-cy":"movie-".concat(t),className:d()("input",{"is-danger":w}),placeholder:l,value:i,onChange:function(e){var t=e.target.value,i="";m&&!t?(p(!0),i="".concat(s," is required")):h&&!j(t)?(p(!0),i="This is not a url"):p(!1),x(i),g(t)}})}),w&&Object(r.jsx)("p",{className:"help is-danger",children:w})]})},h=function(e){var t=e.onAdd,i=Object(c.useState)(0),a=i[0],s=i[1],n=Object(c.useState)(!1),l=n[0],o=n[1],m=Object(c.useState)(""),d=m[0],j=m[1],h=Object(c.useState)(""),u=h[0],g=h[1],p=Object(c.useState)(""),v=p[0],O=p[1],w=Object(c.useState)(""),x=w[0],f=w[1],M=Object(c.useState)(""),N=M[0],S=M[1],T=d.trim()&&v.trim()&&x.trim()&&N.trim()&&!l;return Object(r.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),T&&(t({title:d.trim(),description:u.trim(),imgUrl:v.trim(),imdbUrl:x.trim(),imdbId:N.trim()}),j(""),g(""),O(""),f(""),S(""),s((function(e){return e+1})))},children:[Object(r.jsx)("h2",{className:"title",children:"Add a movie"}),Object(r.jsx)(b,{name:"title",label:"Title",value:d,onChange:j,required:!0,hasSomeError:o}),Object(r.jsx)(b,{name:"description",label:"Description",value:u,onChange:g,hasSomeError:o}),Object(r.jsx)(b,{name:"imgUrl",label:"Image URL",value:v,onChange:O,hasSomeError:o,url:!0,required:!0}),Object(r.jsx)(b,{name:"imdbUrl",label:"Imdb URL",value:x,onChange:f,hasSomeError:o,url:!0,required:!0}),Object(r.jsx)(b,{name:"imdbId",label:"Imdb ID",value:N,onChange:S,hasSomeError:o,required:!0}),Object(r.jsx)("div",{className:"field is-grouped",children:Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:!T,children:"Add"})})})]},a)},u=i(5),g=function(){var e=Object(c.useState)(u),t=e[0],i=e[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:t})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(h,{onAdd:function(e){i((function(t){return[].concat(Object(n.a)(t),[e])}))}})})]})};s.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.2014938e.chunk.js.map