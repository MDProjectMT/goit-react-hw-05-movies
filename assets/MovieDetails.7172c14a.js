import{u as l,r as c,j as i,a as e,L as r,O as v}from"./index.1b098b56.js";import{a as h}from"./axios.0ae12843.js";const m="_link_1vzvd_1",p="_div_1vzvd_5",u="_info_1vzvd_11",_="_title_1vzvd_14",b="_button_1vzvd_19",o={link:m,div:p,info:u,title:_,button:b},g=()=>{const{movieId:n}=l(),[t,d]=c.exports.useState(null);return c.exports.useEffect(()=>{(async()=>{try{const s=await h.get(`https://api.themoviedb.org/3/movie/${n}?api_key=2e6e040c77128d6262e889fe3f6426db`);d(s.data)}catch(s){console.error("Error",s)}})()},[n]),i("div",{children:[e(r,{to:"/",className:o.link,children:e("button",{type:"submit",children:"\xAB Go back"})}),t!==null&&i("div",{children:[i("div",{className:o.div,children:[e("img",{src:`https://image.tmdb.org/t/p/w500/${t.poster_path}`,alt:t.tagline,width:"300px",height:"450px"}),i("div",{children:[i("h1",{children:[t.title," (",t.release_date.slice(0,4),")"]}),i("p",{children:["User Score: ",Math.round(t.vote_average*10),"%"]}),e("h3",{children:"Overview"}),e("p",{children:t.overview}),e("h3",{children:"Genres"}),e("p",{children:t.genres.map(a=>a.name).join(", ")})]})]}),i("div",{className:o.info,children:[e("h3",{className:o.title,children:"Additional information"}),e("div",{children:e(r,{to:`/movies/${n}/cast`,children:e("button",{type:"button",children:"CAST"})})}),e("div",{className:o.button,children:e(r,{to:`/movies/${n}/reviews`,children:e("button",{type:"button",children:"REVIEWS"})})}),e(v,{})]})]})]})};export{g as default};