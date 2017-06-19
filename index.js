
var url = 'https://api.idatalabs.com/v1/companies/aggregate/?product_slug=facebook-cdn&groupby=revenue_range'
var image = ['https://static1.squarespace.com/static/5383a76de4b06dea6734f421/t/53f4a1c5e4b0e74a86aad1fa/1406758780069/1+logo',
 'https://image.slidesharecdn.com/presentasigambar1-111021212311-phpapp02/95/presentasi-gambar-1-1-728.jpg?cb=1319232241']
var metaImage = image[0]
function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}

function insertMetaTags (object) {
  var object = {
    og: {
      type: 'article',
      title: 'Facebook data',
      description: 'Revenue Range',
      image: metaImage,
      url: 'https://api.idatalabs.com/v1/companies/aggregate/?product_slug=facebook-cdn&groupby=revenue_range',
      site_name: 'https://api.idatalabs.com/'
    },
    twit: {
      title: 'Facebook data',
      description: 'Revenue Range',
      image: metaImage,
      url: 'https://api.idatalabs.com/v1/companies/aggregate/?product_slug=facebook-cdn&groupby=revenue_range',
      site: 'idatalabs',
      creator: 'idatalabs'
    }
  }
  for (var i in object.og) {
    console.log(i)
    var meta = document.createElement('meta')
    meta.setAttribute('property', 'og:' + i)
    meta.setAttribute('content', object.og[i])
    document.getElementsByTagName('head')[0].appendChild(meta)  
  }
  for (var i in object.twit) {
    console.log(i)
    var meta = document.createElement('meta')
    meta.setAttribute('name', 'twitter:' + i)
    meta.setAttribute('content', object.og[i])
    document.getElementsByTagName('head')[0].appendChild(meta)  
  }
}

function init() {
  console.log(window.location.href)
  var query = window.location.search.substring(1);
  var qs = parse_query_string(query);
  console.log(qs)
  if(qs.image){
    metaImage = image[qs.image]
  }
  insertMetaTags()
  insertImage(image[0])
  insertImage(image[1])
}
function insertImage(image) {
    var elem = document.createElement("img");
    elem.setAttribute("src", image);
    elem.setAttribute("alt", "Flower");
    document.getElementById("chartapp").appendChild(elem);
}
init();
