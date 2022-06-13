

export const getGifs = async(category)=>{
    const urlConsume='https://api.giphy.com/v1/gifs/search?';
    const apiKey = 'A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K';
    const url = urlConsume+'api_key='+apiKey+`&limit=10&q=${category}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
  
    const gifs = data.map( img => ({
             id: img.id,
             title: img.title,
             url: img.images.downsized_medium.url
    }))
    console.log(gifs);
    return gifs;
  }