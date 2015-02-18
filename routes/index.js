var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/yves', function(req, res) {
  res.render('article', yvesArticle);
});


router.get('/data', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(yvesContext));
});

module.exports = router;



var yvesContext = {
  "Yves Behar" : {
    "article-text" : {
      "text": "Renowned industrial designer. Behar has become one of the leading industrial designers of his generation, creating iconic objects for Jawbone, Herman Miller, General Electric, and Puma, among many others. ‘ He’s broadly interested in \"moving design closer to the body,\" through objects that adapt to you over time. \"Our principal role as designers is to accelerate new ideas, and the adoption of new ideas,\"."
    },
    "wikipedia" : {
      "title": "Yves Behar",
      "summary": "Yves Béhar (born 1967) is a Swiss designer, entrepreneur,[1] and sustainability advocate.[2] He is the founder and principal designer of Fuseproject, an award-winning industrial design and brand development firm. Béhar is also Chief Creative Officer of the wearable technology company Jawbone, and Co-founder and Chief Creative Officer of August, a Smart Lock maker.",
      "img": "http://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Yves_Behar.jpg/440px-Yves_Behar.jpg"
    }
  },
  "BlueFocus" : {
    "article-text" : {
      "text": "Paid a reported $46.7 million for its (Fuseproject) stake, and plans to expand Behar’s model of \"venture design\" — forming long-term partnerships with startups in exchange for equity in the companies — around the world"
    }
  }
};

var yvesArticle = {
    headerImg: 'http://www.hermanmiller.com/content/dam/hermanmiller/page_assets/designers/hero_designer_behar.jpg',
    title: 'THE MAKER\'S MARK',
    subtitle: 'Yves Behar is the man behind Silicon Valley\'s most beautiful gadgets. But can his good taste conquer the world?',
    author: 'By Casey Newton on August 6, 2014 10:30 am',
    body: '<p><strong>Yves Behar is taking questions.</strong></p>\n<p><span class="context" keyword="Yves Behar">Behar</span>, the renowned industrial designer, is standing in a glass-enclosed conference room at Art Basel, the Swiss art fair, as part of a business trip to Europe. He began in France at Cannes Lion, the annual festival for advertisers, and will finish in London, where he’ll debut his new line of furniture for Herman Miller. Today Behar is speaking on a panel with the kitchen-sink title of “New Technologies, Human Experiences, and Ethics: Discussing Design’s Future.” As it begins, he settles into his chair and faces the audience.</p>\n<p>About 50 people of all ages crowd into the room to hear <span class="context" keyword="Yves Behar">Behar</span> discuss his work with the aid of slides. “The secret,” he says, “is in the relationship between the person and the object.”</p>\n<p>Since moving to California in 1990, <span class="context" keyword="Yves Behar">Behar</span> has become one of the leading industrial designers of his generation, creating iconic objects for Jawbone, Herman Miller, General Electric, and Puma, among many others. The objects often have a socially progressive bent: light fixtures that promote energy conservation, say, or cheap but durable laptops that offer poor children improved access to education. Behar’s designs tend to be practical rather than flashy, and they have a history of predicting — or dictating — mass-market trends. His design for the Jambox, first released in 2010, launched a multibillion-dollar wireless-speaker market.</p>\n<p>Lanky and handsome at 47, <span class="context" keyword="Yves Behar">Behar</span> keeps fit with a regimen of surfing and yoga. In a crowd he is most easily spotted by his wild tangle of brown hair, now graying at the edges, which adds a dash of mad scientist to an otherwise manicured appearance. His style is Silicon Valley dressed for a date: a fitted chambray shirt over dark denim, cuffed at the bottom. On his left wrist he wears a neon orange Up band, which he designed, and complements it with a colorful pair of surf-shop woven bracelets.</p>\n<p>Industrial design is a curious profession. Its practitioners are not quite artists, though they are artistic; they are not inventors, though they are inventive; and they are not engineers, though the best of them bring a deep technical understanding to their work. Working freelance or in-house, industrial designers marry art and science to improve the look, feel, and function of lamps, chairs, razors and even corporate logos — anything meant to serve a practical function. Good industrial design makes a thing look good, and great industrial design builds a relationship between an object and its owner. You use it again and again. You fall in love.</p>\n<p>Weeks after he returns from Europe, the value of <span class="context" keyword="Yves Behar">Behar\'s</span> work will become clear when he sells 75 percent of his industrial design firm, Fuseproject, to a six-year-old Chinese conglomerate named <span class="context" keyword="BlueFocus">BlueFocus</span>. BlueFocus paid a reported $46.7 million for its stake, and plans to expand Behar’s model of "venture design" — forming long-term partnerships with startups in exchange for equity in the companies — around the world. With new capital in the bank and an eager international audience, Behar’s bid to redesign the world is about to go global.</p>\n<h3>"THE SECRET IS IN THE RELATIONSHIP BETWEEN THE PERSON AND THE OBJECT."</h3>\n<p>Industrial design is a curious profession. Its practitioners are not quite artists, though they are artistic; they are not inventors, though they are inventive; and they are not engineers, though the best of them bring a deep technical understanding to their work. Working freelance or in-house, industrial designers marry art and science to improve the look, feel, and function of lamps, chairs, razors and even corporate logos — anything meant to serve a practical function. Good industrial design makes a thing look good, and great industrial design builds a relationship between an object and its owner. You use it again and again. You fall in love.</p>\n<p>Weeks after he returns from Europe, the value of Behar’s work will become clear when he sells 75 percent of his industrial design firm, Fuseproject, to a six-year-old Chinese conglomerate named BlueFocus. BlueFocus paid a reported $46.7 million for its stake, and plans to expand Behar’s model of "venture design" — forming long-term partnerships with startups in exchange for equity in the companies — around the world. With new capital in the bank and an eager international audience, Behar’s bid to redesign the world is about to go global.</p>\n<img src="http://cdn2.vox-cdn.com/assets/4862246/img_0714.jpg" class="img-rounded img-responsive">\n<p><strong>In public Behar speaks softly</strong>, and his sentences bear the occasional hesitation of someone for whom English is a second language. (His first is French, and he is also fluent in Italian and German.) In English, Behar will sometimes cut off a sentence halfway through and begin again, or give up after conveying the general idea. Onstage and in interviews, Behar’s attitude is one of polite forbearance — the child made to sit still for a portrait. When he listens, he sometimes removes his Up band and turns it over in his hands. If a question particularly interests him, he grows more animated, illustrating his thoughts with gestures. His hands roll forward like waves, one thought proceeding neatly to the next, a tide of answers coming in to shore.</p>'
  };




