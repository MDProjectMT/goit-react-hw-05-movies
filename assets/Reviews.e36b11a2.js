import{u as p,r as a,a as s,j as d}from"./index.cd919721.js";import{a as c,p as e}from"./index.df9f3349.js";function h(){const{movieId:i}=p(),[o,n]=a.exports.useState([]);return a.exports.useEffect(()=>{(async()=>{try{const t=await c.get(`https://api.themoviedb.org/3/movie/${i}/reviews?api_key=2e6e040c77128d6262e889fe3f6426db`);n(t.data.results)}catch(t){console.error("Error",t)}})()},[i]),o.length>0?s("div",{children:o.map(r=>d("div",{children:[s("h3",{children:r.author}),s("p",{children:r.content})]},r.id))}):s("div",{children:"We don't have any reviews for this movie"})}h.propTypes={reviews:e.exports.arrayOf(e.exports.shape({id:e.exports.string.isRequired,author:e.exports.string.isRequired,content:e.exports.string.isRequired}))};export{h as default};
