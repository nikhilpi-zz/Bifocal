var express = require('express');
var router = express.Router();
var EMBEDLY_KEY = '12eea0a7d9e140b1bc526f1b08eca80c';

var embedly = require('embedly'),
    util = require('util');

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/yves', function(req, res) {
  getArticle('http://www.theverge.com/2014/8/6/5930539/the-makers-mark-yves-behar-fuseproject-profile', function(data){
    console.log(data);
    res.render('article', data);
  });
});

router.get('/data', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(yvesContext));
});

module.exports = router;

function getArticle(link,cb){
  new embedly({key: EMBEDLY_KEY}, function(err, api) {
    if (!!err) {
      console.error('Error creating Embedly api');
      console.error(err.stack, api);
      return;
    }

    // call single url
    var url = link;
    api.extract({url: url}, function(err, objs) {
      if (!!err) {
        console.error('request #1 failed');
        console.error(err.stack, objs);
        return;
      }
      var data = objs[0];
      data.content = data.content.replace(/<img/g, '<img class="img-rounded img-responsive"')
      return cb(objs[0]);
    });
  });
};

var yvesContext = {
  YvesBehar: {
    title: "Yves Behar",
    keyVariants: ["Yves Behar", "Yves Behar's", "Behar", "Behar's", "Yves"],
    articleText : {
      text: "Renowned industrial designer. Behar has become one of the leading industrial designers of his generation, creating iconic objects for Jawbone, Herman Miller, General Electric, and Puma, among many others. ‘ He’s broadly interested in \"moving design closer to the body,\" through objects that adapt to you over time. \"Our principal role as designers is to accelerate new ideas, and the adoption of new ideas,\"."
    },
    wikipedia: {
      title: "Yves Behar",
      summary: "Yves Béhar (born 1967) is a Swiss designer, entrepreneur, and sustainability advocate.He is the founder and principal designer of Fuseproject, an award-winning industrial design and brand development firm. Béhar is also Chief Creative Officer of the wearable technology company Jawbone, and Co-founder and Chief Creative Officer of August, a Smart Lock maker.",
      img: "http://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Yves_Behar.jpg/440px-Yves_Behar.jpg",
      source: "http://en.wikipedia.org/wiki/Yves_B%C3%A9har"
    }
  },
  BlueFocus: {
    title: "BlueFocus",
    keyVariants: ["BlueFocus"],
    articleText : {
      text: "Paid a reported $46.7 million for its (Fuseproject) stake, and plans to expand Behar’s model of \"venture design\" — forming long-term partnerships with startups in exchange for equity in the companies — around the world"
    }
  },
  FanTV: {
    title: "Fan TV",
    keyVariants: ["Fan TV", "Fan TV remote"],
    quote:{
      text: "It’s a glossy, white, touch-enabled pebble that fits neatly in the hand. It snaps, via magnet, onto the accompanying set-top box, and the shape of the remote mirrors that of the box.",
      source: "https://www.fan.tv/",
      name: "Fan.tv"
    },
    images:{
      img: ["http://rack.0.mshcdn.com/media/ZgkyMDEzLzA1LzMwLzgxL2ZhbnR2Mi41YjQxZS5qcGcKcAl0aHVtYgkxMjAweDk2MDA-/4fa55591/602/fan-tv-2.jpg", "http://rack.1.mshcdn.com/media/ZgkyMDEzLzA1LzMwL2E2L2ZhbnR2My5mOGVkYy5qcGcKcAl0aHVtYgkxMjAweDk2MDA-/9618a4ef/4a3/fan-tv-3.jpg"]
    }
  },
  CannesLion:{
    title: "Cannes Lion",
    keyVariants: ["Cannes Lion", "Cannes"],
    wikipedia: {
      title: "Cannes Lion",
      summary: "Cannes Lions Festival of International Creativity, an annual festival for advertisers.",
      source: "http://en.wikipedia.org/wiki/Cannes_Lions_International_Festival_of_Creativity"
    }
  },
  HermanMiller:{
    title: "Herman Miller",
    keyVariants: ["Herman Miller", "Herman", "Miller"],
    wikipedia: {
      title: "Herman Miller",
      summary: "Herman Miller, Inc., based in Zeeland, Michigan, is a major American manufacturer of office furniture, equipment and home furnishings. It is notable as one of the first companies to produce modern furniture and, under the guidance of Design Director George Nelson, is likely the most prolific and influential producer of furniture of the modernist style.",
      source: "http://en.wikipedia.org/wiki/Herman_Miller_%28manufacturer%29"
    }
  },
  Jambox:{
    title: "Jambox",
    keyVariants:["Jambox"],
    wikipedia: {
      title: "Jambox",
      summary: "speakers designed by Behar in 2010, launched a multibillion-dollar wireless-speaker market",
      source: "http://en.wikipedia.org/wiki/Jawbone_%28company%29#JAMBOX"
    },
    images:{
      img: ["http://wpuploads.appadvice.com/wp-content/uploads/2011/07/Aliph-Jawbone-Jambox-in-Color.jpg", "http://b.fastcompany.net/multisite_files/fastcompany/imagecache/1280/poster/2013/09/3016780-poster-1280-jambox3.jpg"]
    }
  },
  Fuseproject:{
    title: "Fuseproject",
    keyVariants:["Fuseproject"],
    wikipedia: {
      title: "Fuseproject",
      summary: "Behar’s design firm, which he is selling 75% of to a chinese conglomerate called BlueFocus for $46 million",
      source: "http://en.wikipedia.org/wiki/Fuseproject"
    }
  },
  Up:{
    title: "Up",
    keyVariants:["Up"],
    wikipedia: {
      title: "Up",
      img: "http://www.tekshanghai.com/wp-content/uploads/2013/04/jawbone-up-gallery-1.jpg",
      summary: "Fitness tracker wristband created by Yves Behar. One of the first fitness trackers on the market.",
      source: "http://en.wikipedia.org/wiki/Jawbone_%28company%29#UP_design"
    }
  },
  ArtBasel:{
    title: "Art Basel (Basel)",
    keyVariants:["Art Basel", "Basel"],
    quote: {
      text: "The world's premier international art show for Modern and contemporary works, Art Basel features nearly 300 leading galleries.",
      source: "https://www.artbasel.com/",
      name: "Art Basel"
    }
  },
  SabrinaBuell:{
    title: "Sabrina Buell",
    keyVariants:["Sabrina Buell", "Sabrina", "Buell"],
    articleText: {
      text: "Behar’s longtime girlfriend and art advisor."
    },
    images:{
      img: ["http://hauteliving.com/wp-content/uploads/2011/09/Sabrina-Buell.jpg"]
    }
  },
  HenryBehar:{
    title: "Henry Behar",
    keyVariants:["Henry Behar", "Henry"],
    articleText: {
      text: "Yves’ father, who comes from a family of Sephardic Jews who were forced out of the Jewish ghetto in Venice and settled in Turkey."
    }
  },
  ChristineBehar:{
    title: "Christine Behar",
    keyVariants:["Christine Behar", "Christine"],
    articleText: {
      text: "Yves’ mother, grew up in East Germany, and at the age of 17 escaped into West Berlin via an underground tunnel."
    }
  },
  ArtCenterCollegeofDesign: {
    title: "Art Center College of Design",
    keyVariants:["Art Center College of Design", "Art Center"],
    articleText: {
      text: "Yves enrolled at the Swiss branch of the Art Center College of Design"
    },
    wikipedia: {
      title: "Art Center College of Design",
      summary: "Art Center College of Design (Art Center) is a private college located in Pasadena, California.",
      source: "http://en.wikipedia.org/wiki/Art_Center_College_of_Design"
    }
  },
  GillesBianRosa: {
    title: "Gilles BianRosa",
    keyVariants:["Gilles BianRosa", "Gilles", "BianRosa"],
    articleText: {
      text: "who hired Fuseproject to design the Fan TV set-top box. \"I remember Yves’ team looking at him and saying, ‘Holy shit!’\" BianRosa says. \"Even my own team looked at him thinking, ‘What?!’ Because it was crazy for both our timeline and Fuseproject’s timeline. And yet we said fuck it, we’re doing it from scratch. If we’re trying to invent the remote of the future, we’re not going to compromise.\""
    }
  },
  JasonJohnson:{
    title: "Jason Johnson",
    keyVariants:["Jason Johnson", "Jason", "Johnson"],
    articleText: {
      text: "co-founder at August"
    }
  },
  August:{
    title: "August",
    keyVariants:["August"],
    articleText: {
      text: "home automation startup"
    },
    quote: {
      text: "The August Smart Lock provides intelligent, secure access to your home. Now you can control who can enter and who can’t—without the need for keys or codes. And you can do it all from your smartphone.",
      source: "http://august.com/",
      name: "August"
    },
    images:{
      img: ["http://static.dezeen.com/uploads/2013/05/dezeen_August-Smart-Lock-by-Yves-Behar_1sq.jpg","http://www.ageekyworld.com/wp-content/uploads/2014/10/august-lock4.jpg"]
    }
  },
  HosainRahman:{
    title: "Hosain Rahman",
    keyVariants:["Hosain Rahman", "Hosain", "Rahman"],
    articleText: {
      text: "the founder of Jawbone. \"We have a great relationship, but we can fight. I used to tease people that if Yves doesn’t threaten to quit on a project, that means we’re not doing our best work.\""
    },
    images:{
      img:["http://specials-images.forbesimg.com/imageserve/03z04Hj5tzfsO/0x600.jpg?fit=scale&background=000000"]
    }
  },




};





