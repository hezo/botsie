var app = angular.module('url', []).
	config(function($routeProvider) {
		$routeProvider.
			when('/', {controller:MainCtrl, templateUrl:'views/list.html'}).
			otherwise({redirectTo:'/'});
	});
	function MainCtrl($scope, $http) {
		/*$http.get("/url/all").success(function(data){
			$scope.urls = data;
		});*/
		
		$scope.urls = [
		               {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://kotaku.com/detroit-really-is-getting-a-giant-robocop-statue-here-504967648",
		            	    "date": "1368977639059",
		            	    "bot": "qnet",
		            	    "_id": "5198f0e7cc270d3374000008",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://moontv.fi/ohjelmat/peliryhma/farming-simulator-2013",
		            	    "date": "1368978170940",
		            	    "bot": "qnet",
		            	    "_id": "5198f2facc270d337400000a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-prn2/980645_10151520383209681_2105834910_o.jpg",
		            	    "date": "1369041069398",
		            	    "bot": "ircnet",
		            	    "_id": "5199e8adcc270d3374000022",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Kolhu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltalehti.fi/viihde/2013052017042155_vi.shtml",
		            	    "date": "1369075268972",
		            	    "bot": "qnet",
		            	    "_id": "519a6e44cc270d3374000070",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Kolhu",
		            	    "to": "#finnexus",
		            	    "url": "https://dl.dropboxusercontent.com/u/59401330/ineveraskedforthis.jpg",
		            	    "date": "1369077125324",
		            	    "bot": "qnet",
		            	    "_id": "519a7585cc270d3374000076",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://www.makuja.fi/artikkelit/1758639/tiesitko/juo-kahvia-maksasi-kiittaa/",
		            	    "date": "1369121153827",
		            	    "bot": "qnet",
		            	    "_id": "519b2181cc270d337400007a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "https://twitter.com/AdamSessler/status/336901672662077443",
		            	    "date": "1369165522988",
		            	    "bot": "qnet",
		            	    "_id": "519bced2cc270d33740000db",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Dachar",
		            	    "to": "#finnexus",
		            	    "url": "http://www.mbnet.fi/artikkeli/ajankohtaiset/ajassa/uusi_xbox_one_esiteltiin_ei_tue_vanhoja_peleja",
		            	    "date": "1369206179235",
		            	    "bot": "qnet",
		            	    "_id": "519c6da3cc270d33740000f6",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "mdms",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=KbWgUO-Rqcw",
		            	    "date": "1369206248240",
		            	    "bot": "qnet",
		            	    "_id": "519c6de8cc270d33740000f8",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://kaksplus.fi/keskustelu/plussalaiset/mitas-nyt/2266688-mies-jarkytti-lasta-ja-minua/",
		            	    "date": "1369214582660",
		            	    "bot": "qnet",
		            	    "_id": "519c8e76cc270d3374000102",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=_ZmtDAWnd18",
		            	    "date": "1369221977373",
		            	    "bot": "qnet",
		            	    "_id": "519cab59cc270d337400010c",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Dachar",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltasanomat.fi/terveys/art-1288567394449.html",
		            	    "date": "1369222153295",
		            	    "bot": "qnet",
		            	    "_id": "519cac09cc270d337400010f",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://www.aamulehti.fi/Kotimaa/1194815115156/artikkeli/amerikkalaistutkimus+saannollinen+karkkien+syonti+ei+lihota.html",
		            	    "date": "1369222532783",
		            	    "bot": "qnet",
		            	    "_id": "519cad84cc270d3374000111",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=uIavyLM7rwQ",
		            	    "date": "1369226648158",
		            	    "bot": "qnet",
		            	    "_id": "519cbd98cc270d3374000121",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://yle.fi/uutiset/kuulosti_aprillipilalta__uusi_eu-direktiivi_aiheuttanee_miljoonalaskun_autokaupoille/6653630",
		            	    "date": "1369231425972",
		            	    "bot": "qnet",
		            	    "_id": "519cd041cc270d337400012b",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Kolhu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=KbWgUO-Rqcw",
		            	    "date": "1369231828515",
		            	    "bot": "qnet",
		            	    "_id": "519cd1d4cc270d337400012d",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=GRxofEmo3HA",
		            	    "date": "1369231842258",
		            	    "bot": "qnet",
		            	    "_id": "519cd1e2cc270d337400012f",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://stackoverflow.com/questions/15732/whats-the-best-way-to-validate-an-xml-file-against-an-xsd-file",
		            	    "date": "1369286041627",
		            	    "bot": "ircnet",
		            	    "_id": "519da599cc270d337400014a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "mdms",
		            	    "to": "#finnexus",
		            	    "url": "http://www.talouselama.fi/uutiset/vain+5+euroa++kreikan+prostituutio+150/a2185940",
		            	    "date": "1369290448341",
		            	    "bot": "qnet",
		            	    "_id": "519db6d0cc270d3374000177",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://en.anno-online.com/en/play",
		            	    "date": "1369290596331",
		            	    "bot": "qnet",
		            	    "_id": "519db764cc270d337400017d",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://nyt.fi/20130521-testaa-onko-kaveriporukkasi-tietaemaettaesi-katujengi/",
		            	    "date": "1369301208602",
		            	    "bot": "ircnet",
		            	    "_id": "519de0d8cc270d337400019b",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://nyt.fi/20130521-testaa-onko-kaveriporukkasi-tietaemaettaesi-katujengi/",
		            	    "date": "1369302057327",
		            	    "bot": "qnet",
		            	    "_id": "519de429cc270d33740001a2",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=sDEYEem6g6w",
		            	    "date": "1369302107365",
		            	    "bot": "qnet",
		            	    "_id": "519de45bcc270d33740001a5",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.jokakoti.fi/kohde/c5358?2",
		            	    "date": "1369303711613",
		            	    "bot": "ircnet",
		            	    "_id": "519dea9fcc270d33740001d3",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.jokakoti.fi/kohde/c457f?3",
		            	    "date": "1369303806403",
		            	    "bot": "ircnet",
		            	    "_id": "519deafecc270d33740001db",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.jokakoti.fi/kohde/c3d27?4",
		            	    "date": "1369303870537",
		            	    "bot": "ircnet",
		            	    "_id": "519deb3ecc270d33740001e1",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://open.spotify.com/track/29kVUB6QWlmYDdYlmntbZu",
		            	    "date": "1369304462599",
		            	    "bot": "qnet",
		            	    "_id": "519ded8ecc270d3374000214",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "FlameRage",
		            	    "to": "#finnexus",
		            	    "url": "http://youtu.be/z_9Bt6MG-3Y",
		            	    "date": "1369304489712",
		            	    "bot": "qnet",
		            	    "_id": "519deda9cc270d3374000217",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "FlameRage",
		            	    "to": "#finnexus",
		            	    "url": "http://www.toribash.com/",
		            	    "date": "1369305073131",
		            	    "bot": "qnet",
		            	    "_id": "519deff1cc270d337400022f",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "FlameRage",
		            	    "to": "#finnexus",
		            	    "url": "http://youtu.be/hsNSNep2cyQ",
		            	    "date": "1369305105529",
		            	    "bot": "qnet",
		            	    "_id": "519df011cc270d3374000231",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=QeBmXuOkBro",
		            	    "date": "1369305561145",
		            	    "bot": "qnet",
		            	    "_id": "519df1d9cc270d3374000235",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://xkcd.com/705/",
		            	    "date": "1369307807205",
		            	    "bot": "ircnet",
		            	    "_id": "519dfa9fcc270d337400023d",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Spider_",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.talouselama.fi/uutiset/yahoon+paajohtaja+ei+ole+olemassa+ammattilaisvalokuvaajia/a2186130",
		            	    "date": "1369308372118",
		            	    "bot": "ircnet",
		            	    "_id": "519dfcd4cc270d3374000241",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "https://www.dropbox.com/s/ly5o3t3bc33civz/Untitled.jpg",
		            	    "date": "1369314333940",
		            	    "bot": "qnet",
		            	    "_id": "519e141dcc270d337400025a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "https://docs.google.com/file/d/0B9GVuQjJRE4QQjYyMjNHYy0tLWs/edit?usp=sharing",
		            	    "date": "1369315309635",
		            	    "bot": "qnet",
		            	    "_id": "519e17edcc270d3374000261",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://img29.imageshack.us/img29/8138/earthag.jpg",
		            	    "date": "1369318401689",
		            	    "bot": "qnet",
		            	    "_id": "519e2401cc270d3374000266",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Kolhu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=O9BK3xcRH1g",
		            	    "date": "1369322078448",
		            	    "bot": "qnet",
		            	    "_id": "519e325ecc270d337400026e",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Dachar",
		            	    "to": "#finnexus",
		            	    "url": "http://www.sarjis.info/sarjakuvat/ctrl-alt-del/1955/",
		            	    "date": "1369377710340",
		            	    "bot": "qnet",
		            	    "_id": "519f0baecc270d3374000283",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.aamulehti.fi/Ulkomaat/1194815436843/artikkeli/voimakas+maanjaristys+venajan+itarannikolla+tuntui+moskovassa+asti.html",
		            	    "date": "1369379166781",
		            	    "bot": "ircnet",
		            	    "_id": "519f115ecc270d3374000287",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://www.ilmatar.net/~np/misc/maailmanloppu.html",
		            	    "date": "1369380432905",
		            	    "bot": "qnet",
		            	    "_id": "519f1650cc270d337400028d",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.ilmatar.net/~np/misc/maailmanloppu.html",
		            	    "date": "1369380436347",
		            	    "bot": "ircnet",
		            	    "_id": "519f1654cc270d337400028f",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=U8PrEfJoT6Y",
		            	    "date": "1369400834347",
		            	    "bot": "qnet",
		            	    "_id": "519f6602cc270d33740002d3",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://youtu.be/oN-s9-T6sr8",
		            	    "date": "1369401233958",
		            	    "bot": "qnet",
		            	    "_id": "519f6791cc270d33740002d5",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "jarcco",
		            	    "to": "#finnexus",
		            	    "url": "http://dome.fi/pelit/ajankohtaista/tykkaatko-pelimusiikeista-musabundlesta-valtavasti-upeaa-pelimusaa-maksa-mita-jaksat-periaatteella",
		            	    "date": "1369557547944",
		            	    "bot": "qnet",
		            	    "_id": "51a1ca2bcc270d33740002fd",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Kolhu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=7uIFISklvXY",
		            	    "date": "1369566632806",
		            	    "bot": "qnet",
		            	    "_id": "51a1eda8cc270d3374000305",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://slid.es/gsklee/functional-programming-in-5-minutes",
		            	    "date": "1369636955781",
		            	    "bot": "ircnet",
		            	    "_id": "51a3005bcc270d337400031b",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-frc1/375043_10151602991843901_1297195385_n.jpg",
		            	    "date": "1369641185707",
		            	    "bot": "ircnet",
		            	    "_id": "51a310e1cc270d3374000326",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Spider_",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.talouselama.fi/uutiset/taysin+handsfree++pornoteollisuus+visioi+palveluita+googlealylaseille/a2186701",
		            	    "date": "1369642243620",
		            	    "bot": "ircnet",
		            	    "_id": "51a31503cc270d3374000328",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://youtu.be/cP59HA0Dn-g?t=1m10s",
		            	    "date": "1369657762009",
		            	    "bot": "qnet",
		            	    "_id": "51a351a2cc270d3374000377",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Kolhu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=tQvmRbaYUCo",
		            	    "date": "1369660324808",
		            	    "bot": "qnet",
		            	    "_id": "51a35ba4cc270d337400037c",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=pUocvMtiCMI",
		            	    "date": "1369666557760",
		            	    "bot": "qnet",
		            	    "_id": "51a373fdcc270d3374000382",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Kolhu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=7QLSRMoKKS0",
		            	    "date": "1369682377861",
		            	    "bot": "qnet",
		            	    "_id": "51a3b1c9cc270d337400038a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://youtu.be/zixpms1oo40",
		            	    "date": "1369682932011",
		            	    "bot": "qnet",
		            	    "_id": "51a3b3f4cc270d337400038c",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://24.media.tumblr.com/25b25f85fb45120d5737737a9afa1528/tumblr_mnet35zwnd1sq9709o1_500.jpg",
		            	    "date": "1369717937782",
		            	    "bot": "qnet",
		            	    "_id": "51a43cb1cc270d33740003a0",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://goo.gl/Jg6IV",
		            	    "date": "1369717986033",
		            	    "bot": "qnet",
		            	    "_id": "51a43ce2cc270d33740003a6",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://angularjs.org/",
		            	    "date": "1369718785116",
		            	    "bot": "qnet",
		            	    "_id": "51a44001cc270d33740003c2",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://meri.rosvot.org:8081/static/url/",
		            	    "date": "1369718904622",
		            	    "bot": "qnet",
		            	    "_id": "51a44078cc270d33740003c7",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://google.com",
		            	    "date": "1369718931165",
		            	    "bot": "qnet",
		            	    "_id": "51a44093cc270d33740003cd",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://meri.rosvot.org:8081/static/admin/",
		            	    "date": "1369719015229",
		            	    "bot": "qnet",
		            	    "_id": "51a440e7cc270d33740003d1",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltalehti.fi/uutiset/2013052817074204_uu.shtml",
		            	    "date": "1369725929579",
		            	    "bot": "qnet",
		            	    "_id": "51a45be9cc270d33740003e0",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://www.aamulehti.fi/Kotimaa/1194816195546/artikkeli/tamperelaismiehen+outo+kalansaalis+kaksi+pyrstoa+yksi+paa+katso+kuvat.html",
		            	    "date": "1369726673103",
		            	    "bot": "qnet",
		            	    "_id": "51a45ed1cc270d33740003e6",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/97juRl7.gif",
		            	    "date": "1369730079602",
		            	    "bot": "qnet",
		            	    "_id": "51a46c1fcc270d33740003f0",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://youtu.be/2Dg46Vm8ZBk",
		            	    "date": "1369735762567",
		            	    "bot": "qnet",
		            	    "_id": "51a48252cc270d337400040a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=bdyJ3Be7a1Q",
		            	    "date": "1369737156452",
		            	    "bot": "qnet",
		            	    "_id": "51a487c4cc270d337400041f",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltasanomat.fi/terveys/art-1288569015179.html",
		            	    "date": "1369741791153",
		            	    "bot": "qnet",
		            	    "_id": "51a499dfcc270d3374000423",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=lTb_5oPqCys",
		            	    "date": "1369744341475",
		            	    "bot": "qnet",
		            	    "_id": "51a4a3d5cc270d3374000480",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://www.imdb.com/title/tt1469304/reference",
		            	    "date": "1369744599226",
		            	    "bot": "qnet",
		            	    "_id": "51a4a4d7cc270d3374000495",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://www.studio55.fi/mennaanmatkalle/artikkeli.shtml/1467414/horho-hevonperse-ja-terskanpera--nama-ovat-suomen-kummallisimmat-paikannimet",
		            	    "date": "1369811410518",
		            	    "bot": "qnet",
		            	    "_id": "51a5a9d2cc270d33740004f6",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltalehti.fi/uutiset/2013052917079727_uu.shtml",
		            	    "date": "1369813164967",
		            	    "bot": "qnet",
		            	    "_id": "51a5b0accc270d33740004fc",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://venturebeat.com/2013/05/28/blizzard-delays-unannounced-mmo-until-2016-resets-whole-project-exclusive/",
		            	    "date": "1369816595630",
		            	    "bot": "qnet",
		            	    "_id": "51a5be13cc270d3374000509",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=Y53_GV2aAg8",
		            	    "date": "1369818961994",
		            	    "bot": "qnet",
		            	    "_id": "51a5c751cc270d3374000524",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Kolhu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?feature=player_embedded&v=jfxPWK47eLg",
		            	    "date": "1369842043055",
		            	    "bot": "qnet",
		            	    "_id": "51a6217bcc270d33740005ac",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://uncasipi.puheenvuoro.uusisuomi.fi/141214-pienpanimoiden-suoramyynnista",
		            	    "date": "1369847698728",
		            	    "bot": "qnet",
		            	    "_id": "51a63792cc270d33740005af",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://forums.steampowered.com/forums/showthread.php?t=1876684",
		            	    "date": "1369858275830",
		            	    "bot": "qnet",
		            	    "_id": "51a660e3cc270d33740005ba",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.tomshardware.com/reviews/ivy-bridge-wolfdale-yorkfield-comparison,3487.html",
		            	    "date": "1369894031238",
		            	    "bot": "qnet",
		            	    "_id": "51a6ec8fcc270d33740005c4",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://dev.vaadin.com/ticket/11944",
		            	    "date": "1369895683076",
		            	    "bot": "ircnet",
		            	    "_id": "51a6f303cc270d33740005c9",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://open.spotify.com/track/2o7huAj7uNriKhdYgWyOCc",
		            	    "date": "1369895768104",
		            	    "bot": "ircnet",
		            	    "_id": "51a6f358cc270d33740005d1",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.hymy.fi/tasta-puhutaan/vof-voittaja-antti-railio-pahoinpidellyt-kaksi-tuntematonta-naista",
		            	    "date": "1369895987523",
		            	    "bot": "ircnet",
		            	    "_id": "51a6f433cc270d33740005d7",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://open.spotify.com/track/23t5BRDa2p99nheQb25MQC",
		            	    "date": "1369896474463",
		            	    "bot": "ircnet",
		            	    "_id": "51a6f61acc270d33740005fd",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.digitoday.fi/viihde/2013/05/30/facebook-antoi-aitousmerkin-justin-bieberin-profiilille/20137656/66",
		            	    "date": "1369896564968",
		            	    "bot": "ircnet",
		            	    "_id": "51a6f674cc270d3374000601",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/P7UBqAr.jpg",
		            	    "date": "1369897090561",
		            	    "bot": "qnet",
		            	    "_id": "51a6f882cc270d337400061e",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.rockthebeach.fi/",
		            	    "date": "1369897133536",
		            	    "bot": "ircnet",
		            	    "_id": "51a6f8adcc270d3374000620",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=2g76DUy7jKY",
		            	    "date": "1369897928959",
		            	    "bot": "qnet",
		            	    "_id": "51a6fbc8cc270d3374000640",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://open.spotify.com/track/5qZhQLfKhKCq6OTSB3BsaX",
		            	    "date": "1369898046078",
		            	    "bot": "ircnet",
		            	    "_id": "51a6fc3ecc270d3374000642",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/80hEKGg.jpg",
		            	    "date": "1369898930716",
		            	    "bot": "qnet",
		            	    "_id": "51a6ffb2cc270d3374000671",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://open.spotify.com/track/1xh9DJcqgRGKnMyJFJ9PvF",
		            	    "date": "1369899059948",
		            	    "bot": "ircnet",
		            	    "_id": "51a70033cc270d3374000673",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.suxes.fi/start_fi.htm",
		            	    "date": "1369899235284",
		            	    "bot": "ircnet",
		            	    "_id": "51a700e3cc270d3374000682",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "https://dl.dropboxusercontent.com/u/4586178/Children%20of%20Bodom%20-%20Blooddrunk%20%28dvdrip%29.mkv",
		            	    "date": "1369901775512",
		            	    "bot": "ircnet",
		            	    "_id": "51a70acfcc270d33740006bb",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "https://dl.dropboxusercontent.com/u/4586178/Turisas%20-%20Rasputin%20%28dvdrip%29.mkv",
		            	    "date": "1369902594471",
		            	    "bot": "ircnet",
		            	    "_id": "51a70e02cc270d33740006be",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Spider_",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.digitoday.fi/data/2013/05/30/google-tuunaa-satojen-miljoonien-kayttamaa-gmailia/20137653/66",
		            	    "date": "1369904279960",
		            	    "bot": "ircnet",
		            	    "_id": "51a71497cc270d33740006dd",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltasanomat.fi/tiede/art-1288569531423.html",
		            	    "date": "1369904457796",
		            	    "bot": "qnet",
		            	    "_id": "51a71549cc270d33740006e3",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Spider_",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.taloussanomat.fi/kauppa/2013/05/30/yle-s-ja-plussa-korttitietojen-salailuun-tulossa-loppu/20137657/12",
		            	    "date": "1369904490963",
		            	    "bot": "ircnet",
		            	    "_id": "51a7156acc270d33740006e6",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://open.spotify.com/track/7iAISDMp2A8TQ3hby7ALE7",
		            	    "date": "1369906675933",
		            	    "bot": "ircnet",
		            	    "_id": "51a71df3cc270d33740006ee",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://open.spotify.com/track/6vDvCN272S7Ykh3118Lnuu",
		            	    "date": "1369908776457",
		            	    "bot": "ircnet",
		            	    "_id": "51a72628cc270d33740006f0",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.seiska.fi/Viihdeuutiset/Johanna-Tukiaiselle-ehdoton-vankeustuomio%2521/1005725",
		            	    "date": "1369915317505",
		            	    "bot": "qnet",
		            	    "_id": "51a73fb5cc270d33740006f3",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://tdc.fi/element.php?dogtag=tdcf_palvelu_tt",
		            	    "date": "1369917270931",
		            	    "bot": "qnet",
		            	    "_id": "51a74756cc270d3374000703",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=TXwOnZSbaAM",
		            	    "date": "1369936170021",
		            	    "bot": "qnet",
		            	    "_id": "51a7912acc270d337400071c",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://www.humblebundle.com/weekly",
		            	    "date": "1369941462128",
		            	    "bot": "qnet",
		            	    "_id": "51a7a5d6cc270d337400073b",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Taksu",
		            	    "to": "#finnexus",
		            	    "url": "http://youtu.be/_UmOY6ek_Y4",
		            	    "date": "1369944350668",
		            	    "bot": "qnet",
		            	    "_id": "51a7b11ecc270d3374000741",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/0LQfJbG.jpg",
		            	    "date": "1369958069579",
		            	    "bot": "qnet",
		            	    "_id": "51a7e6b5cc270d3374000744",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.youtube.com/watch?v=TXwOnZSbaAM",
		            	    "date": "1369982295757",
		            	    "bot": "ircnet",
		            	    "_id": "51a84557cc270d337400076e",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.youtube.com/watch?v=V53kqEKiyYU",
		            	    "date": "1369983687744",
		            	    "bot": "ircnet",
		            	    "_id": "51a84ac7cc270d3374000788",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://pastebin.com/CiBuQU82",
		            	    "date": "1369984534926",
		            	    "bot": "ircnet",
		            	    "_id": "51a84e16cc270d33740007a4",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://pastebin.com/3M7ugXBx",
		            	    "date": "1369984622539",
		            	    "bot": "ircnet",
		            	    "_id": "51a84e6ecc270d33740007a8",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://pastebin.com/9FFQzVRi",
		            	    "date": "1369984751969",
		            	    "bot": "ircnet",
		            	    "_id": "51a84eefcc270d33740007b0",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://imgur.com/gallery/KkBM9N1",
		            	    "date": "1369987031990",
		            	    "bot": "qnet",
		            	    "_id": "51a857d7cc270d33740007d4",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://imgur.com/eSSVSJY",
		            	    "date": "1369988841316",
		            	    "bot": "qnet",
		            	    "_id": "51a85ee9cc270d33740007d6",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "https://www.google.com/accounts/recovery/forgotusername",
		            	    "date": "1369990050960",
		            	    "bot": "qnet",
		            	    "_id": "51a863a2cc270d33740007e1",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://uutiset.perussuomalaiset.fi/?p=4785",
		            	    "date": "1369990076103",
		            	    "bot": "qnet",
		            	    "_id": "51a863bccc270d33740007e4",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.minedu.fi/OPM/Avustukset/Nuoriso?lang=fr",
		            	    "date": "1369990278972",
		            	    "bot": "qnet",
		            	    "_id": "51a86486cc270d33740007f3",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://www.minedu.fi/OPM/Avustukset/Nuoriso?lang=fi",
		            	    "date": "1369990317607",
		            	    "bot": "qnet",
		            	    "_id": "51a864adcc270d33740007fa",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://etvaanosaa.net/Hezo.jpg",
		            	    "date": "1369990340576",
		            	    "bot": "qnet",
		            	    "_id": "51a864c4cc270d33740007fe",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Kolhu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.crystalfair.fi/",
		            	    "date": "1369990412338",
		            	    "bot": "qnet",
		            	    "_id": "51a8650ccc270d3374000806",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=v4Wy7gRGgeA",
		            	    "date": "1369990782778",
		            	    "bot": "qnet",
		            	    "_id": "51a8667ecc270d337400081d",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "jarcco",
		            	    "to": "#finnexus",
		            	    "url": "http://www.hotukdeals.com/freebies/free-1-year-kaspersky-anti-virus-2013-1-user-license-1567107",
		            	    "date": "1369992147831",
		            	    "bot": "qnet",
		            	    "_id": "51a86bd3cc270d3374000823",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://gifsound.com/?gif=https://lh3.googleusercontent.com/-1ki50XfE3Co/UagIeuett8I/AAAAAAAAAC8/LnXWrwOmhg4/w506-h301-o/Trackmania.gif&sound=http://www.youtube.com/watch%3Fv=GA5MBu4SpYU",
		            	    "date": "1369992723842",
		            	    "bot": "qnet",
		            	    "_id": "51a86e13cc270d3374000845",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://www.suxes.fi/start_fi.htm",
		            	    "date": "1369996558429",
		            	    "bot": "qnet",
		            	    "_id": "51a87d0ecc270d337400089e",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.youtube.com/watch?v=xDpZtb67690&list=TLjaHkC75vckw",
		            	    "date": "1370012227558",
		            	    "bot": "ircnet",
		            	    "_id": "51a8ba43cc270d33740008ab",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://imgur.com/FBtoEOm,rd9GbCC,7zH2kQ0,qmG5uZb,E4MJBVI,UquT6Vn#0",
		            	    "date": "1370074298456",
		            	    "bot": "qnet",
		            	    "_id": "51a9acbacc270d33740008c4",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/IfCpQAy.jpg",
		            	    "date": "1370085955861",
		            	    "bot": "qnet",
		            	    "_id": "51a9da43cc270d33740008c6",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Kolhu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?feature=player_detailpage&v=J9-Lwpgfd1E#t=67s",
		            	    "date": "1370086522965",
		            	    "bot": "qnet",
		            	    "_id": "51a9dc7acc270d33740008c8",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=AidyRHYg74c",
		            	    "date": "1370169863641",
		            	    "bot": "qnet",
		            	    "_id": "51ab2207cc270d33740008cb",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.huffingtonpost.com/2013/05/31/funny-breakup-this-might-_n_3367988.html?utm_hp_ref=mostpopular",
		            	    "date": "1370248164474",
		            	    "bot": "qnet",
		            	    "_id": "51ac53e4cc270d33740008de",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://yle.fi/uutiset/hellevaroitus_koko_maahan_-_juo_ja_valta_rehkimista/6670353",
		            	    "date": "1370249767231",
		            	    "bot": "qnet",
		            	    "_id": "51ac5a27cc270d33740008e0",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://www.varusteleka.fi/fi/product/ranskalaiset-urheilualushousut-rivot-valkoiset-uudenveroiset/14002",
		            	    "date": "1370258771382",
		            	    "bot": "qnet",
		            	    "_id": "51ac7d53cc270d3374000914",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://forum.finnexus.fi/viewtopic.php?f=14&t=23470",
		            	    "date": "1370267958537",
		            	    "bot": "qnet",
		            	    "_id": "51aca136cc270d337400091c",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "https://www.youtube.com/watch?v=78juOpTM3tE",
		            	    "date": "1370293236557",
		            	    "bot": "qnet",
		            	    "_id": "51ad03f4cc270d3374000922",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Kolhu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=LbVxcGGpV2M",
		            	    "date": "1370293973410",
		            	    "bot": "qnet",
		            	    "_id": "51ad06d5cc270d3374000925",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://db.tt/HeVQ8Uu2",
		            	    "date": "1370322325396",
		            	    "bot": "qnet",
		            	    "_id": "51ad7595cc270d3374000929",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/CQv8FU4h.jpg",
		            	    "date": "1370322351177",
		            	    "bot": "qnet",
		            	    "_id": "51ad75afcc270d337400092b",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://open.spotify.com/track/2shH36IytTvWBMMQi1KhNL",
		            	    "date": "1370329690158",
		            	    "bot": "qnet",
		            	    "_id": "51ad925acc270d3374000946",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://i386.photobucket.com/albums/oo304/Achtungsnow/2012-07-05_00001.jpg",
		            	    "date": "1370341352625",
		            	    "bot": "qnet",
		            	    "_id": "51adbfe8cc270d3374000969",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/vA6aACm.jpg",
		            	    "date": "1370341500224",
		            	    "bot": "qnet",
		            	    "_id": "51adc07ccc270d337400096f",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/KgDmNa1.jpg",
		            	    "date": "1370341503500",
		            	    "bot": "qnet",
		            	    "_id": "51adc07fcc270d3374000971",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://open.spotify.com/track/2vEIgBQTxRu5s6YTKLDYka",
		            	    "date": "1370348955682",
		            	    "bot": "qnet",
		            	    "_id": "51addd9bcc270d3374000985",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Vahearun",
		            	    "to": "#finnexus",
		            	    "url": "http://termite.apcdn.com/full/103232.jpg",
		            	    "date": "1370364714049",
		            	    "bot": "qnet",
		            	    "_id": "51ae1b2acc270d3374000995",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.mikropc.net/kaikki_uutiset/uusi+ehdokas+tulevaisuuden+tallennusvalineeksi+quotskyrmioniquot/a906754",
		            	    "date": "1370367230003",
		            	    "bot": "qnet",
		            	    "_id": "51ae24fecc270d3374000998",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://www.mikropc.net/kaikki_uutiset/symbianmies+luettelee+10+syyta+sille+miksi+symbian+paihittaa+yha+muut/a906746",
		            	    "date": "1370407548669",
		            	    "bot": "qnet",
		            	    "_id": "51aec27ccc270d337400099b",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://www.talouselama.fi/uutiset/nyt+se+on+tutkittu+appleen+nokian+ei+kannata+ruutiaan+haaskata/a2188385",
		            	    "date": "1370414195029",
		            	    "bot": "qnet",
		            	    "_id": "51aedc73cc270d33740009a8",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://geoguessr.com/",
		            	    "date": "1370414249424",
		            	    "bot": "qnet",
		            	    "_id": "51aedca9cc270d33740009ae",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://imgur.com/a/sjmir",
		            	    "date": "1370421753270",
		            	    "bot": "qnet",
		            	    "_id": "51aef9f9cc270d33740009ef",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://t3mppu.kapsi.fi/seal_of_vmp.jpg",
		            	    "date": "1370428812658",
		            	    "bot": "qnet",
		            	    "_id": "51af158ccc270d3374000a05",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://store.steampowered.com/news/10779/",
		            	    "date": "1370431006747",
		            	    "bot": "qnet",
		            	    "_id": "51af1e1ecc270d3374000a14",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltalehti.fi/seksuaalisuusjasuhteet/2013060517111033_se.shtml",
		            	    "date": "1370431414814",
		            	    "bot": "qnet",
		            	    "_id": "51af1fb6cc270d3374000a2b",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://ilmatieteenlaitos.fi/sade-ja-pilvialueet/suomen-etelaosa",
		            	    "date": "1370434928695",
		            	    "bot": "qnet",
		            	    "_id": "51af2d70cc270d3374000a4b",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://ukko.ws/",
		            	    "date": "1370434954911",
		            	    "bot": "qnet",
		            	    "_id": "51af2d8acc270d3374000a4e",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.ursa.fi/ursa/jaostot/myrskybongaus/tutkain/",
		            	    "date": "1370435067436",
		            	    "bot": "qnet",
		            	    "_id": "51af2dfbcc270d3374000a54",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.flcenter.net/static/ukkostutka_suurikuva.html",
		            	    "date": "1370435112138",
		            	    "bot": "qnet",
		            	    "_id": "51af2e28cc270d3374000a58",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://ukkostutkat.com/",
		            	    "date": "1370435236103",
		            	    "bot": "qnet",
		            	    "_id": "51af2ea4cc270d3374000a5a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=uzS4tas0MNw",
		            	    "date": "1370436788864",
		            	    "bot": "qnet",
		            	    "_id": "51af34b4cc270d3374000a5e",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Kolhu",
		            	    "to": "#finnexus",
		            	    "url": "http://static.naamapalmu.com/files/TC/big/EMGuLuGljkuuoguGUSfM.gif",
		            	    "date": "1370439741394",
		            	    "bot": "qnet",
		            	    "_id": "51af403dcc270d3374000a61",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://jlokka.blogspot.fi/2013/05/mika-oulun-yliopistoa-vaivaa.html",
		            	    "date": "1370441735879",
		            	    "bot": "qnet",
		            	    "_id": "51af4807cc270d3374000a65",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "FlameRage",
		            	    "to": "#finnexus",
		            	    "url": "http://fi.wikipedia.org/wiki/Viikki",
		            	    "date": "1370442360711",
		            	    "bot": "qnet",
		            	    "_id": "51af4a78cc270d3374000a67",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/0xO70pM.jpg",
		            	    "date": "1370454489914",
		            	    "bot": "qnet",
		            	    "_id": "51af79d9cc270d3374000a6f",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "mdms",
		            	    "to": "#finnexus",
		            	    "url": "http://bad.host.name/tmp/tietsikka2.jpg",
		            	    "date": "1370457850463",
		            	    "bot": "qnet",
		            	    "_id": "51af86facc270d3374000a72",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "https://www.youtube.com/watch?v=NrlNExm8z5c",
		            	    "date": "1370505303730",
		            	    "bot": "qnet",
		            	    "_id": "51b04057cc270d3374000abc",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://seriouslyforreal.com/seriously-for-real/heracleion-photos-lost-egyptian-city-revealed-after-1200-years-under-sea/",
		            	    "date": "1370516982311",
		            	    "bot": "qnet",
		            	    "_id": "51b06df6cc270d3374000ad2",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://pics.kuvaton.com/kuvei/cat_bag.gif",
		            	    "date": "1370517090292",
		            	    "bot": "qnet",
		            	    "_id": "51b06e62cc270d3374000ad4",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltalehti.fi/uutiset/2013060617117674_uu.shtml",
		            	    "date": "1370517282490",
		            	    "bot": "qnet",
		            	    "_id": "51b06f22cc270d3374000adc",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=hNlcraLuuZs&feature=player_embedded#!",
		            	    "date": "1370518499516",
		            	    "bot": "qnet",
		            	    "_id": "51b073e3cc270d3374000ade",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltasanomat.fi/kotimaa/art-1288570660676.html",
		            	    "date": "1370551788469",
		            	    "bot": "qnet",
		            	    "_id": "51b0f5eccc270d3374000af4",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://dotabuff.com/players/115457710",
		            	    "date": "1370583170392",
		            	    "bot": "qnet",
		            	    "_id": "51b17082cc270d3374000b02",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "jarcco",
		            	    "to": "#finnexus",
		            	    "url": "http://jaggedalliance.gamigo.com/",
		            	    "date": "1370676007366",
		            	    "bot": "qnet",
		            	    "_id": "51b2db27cc270d3374000b56",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://www.ess.fi/?article=417501",
		            	    "date": "1370678989013",
		            	    "bot": "qnet",
		            	    "_id": "51b2e6cdcc270d3374000b59",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://www.mikropc.net/kaikki_uutiset/hakkeri+paljasti+teinin+joukkoraiskaajat++hakkeria+uhkaa+kovempi+tuomio+kuin+raiskaajia/a907752?s=n",
		            	    "date": "1370683493286",
		            	    "bot": "qnet",
		            	    "_id": "51b2f865cc270d3374000b5c",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "https://www.youtube.com/watch?v=ceJ_DeT-c3M",
		            	    "date": "1370708787788",
		            	    "bot": "qnet",
		            	    "_id": "51b35b33cc270d3374000b62",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "https://www.youtube.com/watch?v=5fTcLMsAMD4",
		            	    "date": "1370709470133",
		            	    "bot": "qnet",
		            	    "_id": "51b35ddecc270d3374000b66",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-frc3/980054_10151533218898533_127335989_o.jpg",
		            	    "date": "1370713177028",
		            	    "bot": "qnet",
		            	    "_id": "51b36c59cc270d3374000b8d",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-prn1/704908_10151533220613533_594505836_o.jpg",
		            	    "date": "1370713201187",
		            	    "bot": "qnet",
		            	    "_id": "51b36c71cc270d3374000b8f",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "https://play.spotify.com/track/5QdFp20BzNJWlZgRlEwj6p",
		            	    "date": "1370713520208",
		            	    "bot": "qnet",
		            	    "_id": "51b36db0cc270d3374000ba1",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://hikipedia.info/wiki/Anime",
		            	    "date": "1370713944465",
		            	    "bot": "qnet",
		            	    "_id": "51b36f58cc270d3374000bbf",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Kolhu",
		            	    "to": "#finnexus",
		            	    "url": "https://twimg0-a.akamaihd.net/profile_images/2312704942/Troll_Face.jpg",
		            	    "date": "1370714214239",
		            	    "bot": "qnet",
		            	    "_id": "51b37066cc270d3374000bc4",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://imgur.com/a/hPGMR#0",
		            	    "date": "1370718948393",
		            	    "bot": "qnet",
		            	    "_id": "51b382e4cc270d3374000bcb",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "https://play.spotify.com/track/7fJlEce5Fdgst7RZbbzaVd",
		            	    "date": "1370720919222",
		            	    "bot": "qnet",
		            	    "_id": "51b38a97cc270d3374000bcd",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://naamapalmu.com/file/8945",
		            	    "date": "1370767045947",
		            	    "bot": "qnet",
		            	    "_id": "51b43ec5cc270d3374000bd2",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/CBBAMwz.jpg",
		            	    "date": "1370814407583",
		            	    "bot": "qnet",
		            	    "_id": "51b4f7c7cc270d3374000be1",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://www.vauva.fi/keskustelu/3823997/ketju/mita_eroa_on_instagramilla_ja_pentagramilla",
		            	    "date": "1370846190653",
		            	    "bot": "qnet",
		            	    "_id": "51b573eecc270d3374000be3",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltalehti.fi/uutiset/2013061017134183_uu.shtml",
		            	    "date": "1370864527922",
		            	    "bot": "qnet",
		            	    "_id": "51b5bb8fcc270d3374000bee",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://media.riemurasia.net/albumit/mmedia/tl/bqj/nkgz/48218/672841740.gif",
		            	    "date": "1370866402406",
		            	    "bot": "qnet",
		            	    "_id": "51b5c2e2cc270d3374000bff",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=F6Z3DEP0jvk",
		            	    "date": "1370867294329",
		            	    "bot": "qnet",
		            	    "_id": "51b5c65ecc270d3374000c0b",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://static.iltalehti.fi/uutiset/tamperetulvii_vh_1006_kuvitus_01_uu.jpg",
		            	    "date": "1370895890502",
		            	    "bot": "qnet",
		            	    "_id": "51b63612cc270d3374000c12",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://static.iltalehti.fi/uutiset/lempaala_vh_1006_etu_uu.jpg",
		            	    "date": "1370896348318",
		            	    "bot": "qnet",
		            	    "_id": "51b637dccc270d3374000c15",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "FlameRage",
		            	    "to": "#finnexus",
		            	    "url": "http://www.gametrailers.com/netstorage/e3/live.html",
		            	    "date": "1370918720755",
		            	    "bot": "qnet",
		            	    "_id": "51b68f40cc270d3374000c19",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "mdms",
		            	    "to": "#finnexus",
		            	    "url": "http://imgur.com/a/NiDU9",
		            	    "date": "1370953543375",
		            	    "bot": "qnet",
		            	    "_id": "51b71747cc270d3374000c2b",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Kolhu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.hs.fi/elama/Miesten+himokkaat+katseet+loukkaavat/a1370913793311",
		            	    "date": "1370958377271",
		            	    "bot": "qnet",
		            	    "_id": "51b72a29cc270d3374000c32",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "mdms",
		            	    "to": "#finnexus",
		            	    "url": "http://imgur.com/gallery/rRss2qb",
		            	    "date": "1370964177109",
		            	    "bot": "qnet",
		            	    "_id": "51b740d1cc270d3374000c3c",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "https://ops.turkuamk.fi/opsnet/disp/fi/ops_OpetTapTeks/tab/tab/sea?opettap_id=5431364&stack=push2",
		            	    "date": "1370964972248",
		            	    "bot": "qnet",
		            	    "_id": "51b743eccc270d3374000c3e",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=idp6wjqG674",
		            	    "date": "1370983011752",
		            	    "bot": "qnet",
		            	    "_id": "51b78a63cc270d3374000c41",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=Qy7OGQN9RG4",
		            	    "date": "1371030007405",
		            	    "bot": "qnet",
		            	    "_id": "51b841f7cc270d3374000c59",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-prn1/1012346_209872149163108_867065450_n.jpg",
		            	    "date": "1371063091531",
		            	    "bot": "qnet",
		            	    "_id": "51b8c333cc270d3374000c79",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltasanomat.fi/ulkomaat/art-1288573430254.html",
		            	    "date": "1371102331840",
		            	    "bot": "qnet",
		            	    "_id": "51b95c7bcc270d3374000c86",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://youtu.be/tIyAk_ATxec?t=1m23s",
		            	    "date": "1371111434736",
		            	    "bot": "qnet",
		            	    "_id": "51b9800acc270d3374000c93",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://www.hopealinja.fi/sivut/viikinsaari.htm",
		            	    "date": "1371112260002",
		            	    "bot": "qnet",
		            	    "_id": "51b98344cc270d3374000cb4",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://www.virtualtampere.com/?t=60&p=62&h=-57.64&v=10&f=36.35&ar",
		            	    "date": "1371113324769",
		            	    "bot": "qnet",
		            	    "_id": "51b9876ccc270d3374000cbb",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://forum.finnexus.fi/viewtopic.php?f=79&t=23975",
		            	    "date": "1371134361335",
		            	    "bot": "qnet",
		            	    "_id": "51b9d999cc270d3374000d1f",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://forum.finnexus.fi/viewtopic.php?f=79&t=23975",
		            	    "date": "1371134370337",
		            	    "bot": "qnet",
		            	    "_id": "51b9d9a2cc270d3374000d21",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://www.fuckforforest.com/",
		            	    "date": "1371148547687",
		            	    "bot": "qnet",
		            	    "_id": "51ba1103cc270d3374000d2e",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://www.feissarimokat.com/2013/06/myrsky-vesilasista/",
		            	    "date": "1371149273220",
		            	    "bot": "qnet",
		            	    "_id": "51ba13d9cc270d3374000d31",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "https://www.facebook.com/photo.php?fbid=474853142590194&set=a.474853119256863.1073741831.116543821754463&type=3&theater",
		            	    "date": "1371152253623",
		            	    "bot": "qnet",
		            	    "_id": "51ba1f7dcc270d3374000d3f",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://www.savonsanomat.fi/uutiset/kotimaa/ministerio-kieltaa-perunan-kotikasvatuksen-suomessa/1182572",
		            	    "date": "1371213486529",
		            	    "bot": "qnet",
		            	    "_id": "51bb0eaecc270d3374000d4f",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://is11.snstatic.fi/img/658/1288574047803.jpg",
		            	    "date": "1371217204074",
		            	    "bot": "qnet",
		            	    "_id": "51bb1d34cc270d3374000d5c",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Kolhu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=vbS6_2vA1E0",
		            	    "date": "1371217505344",
		            	    "bot": "qnet",
		            	    "_id": "51bb1e61cc270d3374000d5e",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=4nsKDJlpUbA",
		            	    "date": "1371219440444",
		            	    "bot": "qnet",
		            	    "_id": "51bb25f0cc270d3374000d66",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://dome.fi/pelit/ajankohtaista/skrolli-lupaa-pian-kakkosta",
		            	    "date": "1371224496702",
		            	    "bot": "qnet",
		            	    "_id": "51bb39b0cc270d3374000d6e",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/jYH4wRl.png",
		            	    "date": "1371239308363",
		            	    "bot": "qnet",
		            	    "_id": "51bb738ccc270d3374000d78",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://f.asset.soup.io/asset/4474/6639_a753.gif",
		            	    "date": "1371245717907",
		            	    "bot": "qnet",
		            	    "_id": "51bb8c95cc270d3374000d7e",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Kolhu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=wOlCzhYcKZk",
		            	    "date": "1371299978308",
		            	    "bot": "qnet",
		            	    "_id": "51bc608acc270d3374000d80",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "mdms",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/lENZdt0.gif",
		            	    "date": "1371311303704",
		            	    "bot": "qnet",
		            	    "_id": "51bc8cc7cc270d3374000d83",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "FlameRage",
		            	    "to": "#finnexus",
		            	    "url": "http://nakkivene.net/",
		            	    "date": "1371332154012",
		            	    "bot": "qnet",
		            	    "_id": "51bcde3acc270d3374000d8a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://thebestpageintheuniverse.net/c.cgi?u=e3_wrapup_2013",
		            	    "date": "1371445546096",
		            	    "bot": "qnet",
		            	    "_id": "51be992acc270d3374000da3",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://is12.snstatic.fi/img/468/1288574630995.jpg",
		            	    "date": "1371451976226",
		            	    "bot": "qnet",
		            	    "_id": "51beb248cc270d3374000daf",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://www.leasticoulddo.com/comic/20130617/",
		            	    "date": "1371452441064",
		            	    "bot": "qnet",
		            	    "_id": "51beb419cc270d3374000db4",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://sportsillustrated.cnn.com/2013_swimsuit/painting/kate-upton/13_kate-upton_12.html",
		            	    "date": "1371453420041",
		            	    "bot": "qnet",
		            	    "_id": "51beb7eccc270d3374000dba",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Dachar",
		            	    "to": "#finnexus",
		            	    "url": "http://www.itviikko.fi/tietoturva/2013/06/17/hypponen-ylelle-nsa-vakoilu-ja-googlen-seka-facebookin-luvut-ovat-kaksi-eri-asiaa/20138519/7?rss=8",
		            	    "date": "1371454176401",
		            	    "bot": "qnet",
		            	    "_id": "51bebae0cc270d3374000dbc",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Dachar",
		            	    "to": "#finnexus",
		            	    "url": "http://yle.fi/uutiset/pyorailija_testaa_osaatko_liikennesaannot/6688871?origin=rss",
		            	    "date": "1371463610189",
		            	    "bot": "qnet",
		            	    "_id": "51bedfbacc270d3374000dc1",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltalehti.fi/iltvuutiset/20130617026167037_v0.shtml",
		            	    "date": "1371468107425",
		            	    "bot": "qnet",
		            	    "_id": "51bef14bcc270d3374000dce",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://www.nettiauto.com/volkswagen/polo/5689452",
		            	    "date": "1371482579760",
		            	    "bot": "qnet",
		            	    "_id": "51bf29d3cc270d3374000dd2",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "FlameRage",
		            	    "to": "#finnexus",
		            	    "url": "http://www.specialized.com/fi/en/bikes/multi-use/crosstrail/crosstrailsportdisc",
		            	    "date": "1371503182565",
		            	    "bot": "qnet",
		            	    "_id": "51bf7a4ecc270d3374000dd7",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.jimms.fi/tuote/F3-1600C8Q-16GAB",
		            	    "date": "1371551466971",
		            	    "bot": "qnet",
		            	    "_id": "51c036ea05f5308504000034",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "https://secure.emmi.fi/veikkaus/?cart=2779-hihhieedah&l=FI",
		            	    "date": "1371553045420",
		            	    "bot": "qnet",
		            	    "_id": "51c03d1505f5308504000037",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://www.gog.com/news/nodrm_summer_get_torchlight_free_for_48_hours",
		            	    "date": "1371564143550",
		            	    "bot": "qnet",
		            	    "_id": "51c0686f05f5308504000044",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://ffxivrealm.com/screenshots/ffxiv_20130615_200900-png.264/view-image",
		            	    "date": "1371638881948",
		            	    "bot": "qnet",
		            	    "_id": "51c18c6105f53085040000a3",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "https://pbs.twimg.com/media/BNGe8eKCUAAisjv.jpg:large",
		            	    "date": "1371639449902",
		            	    "bot": "qnet",
		            	    "_id": "51c18e9905f53085040000a5",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://dotabuff.com/players/119829431",
		            	    "date": "1371652641820",
		            	    "bot": "qnet",
		            	    "_id": "51c1c22105f53085040000ba",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Dachar",
		            	    "to": "#finnexus",
		            	    "url": "http://www.suomalainen.com/toplista/tietokirjat-top-10/otavan-v%C3%A4rikasvio-sku-p9511196634?expDataType=CatalogEntryId&expDataUniqueID=4572836",
		            	    "date": "1371719502196",
		            	    "bot": "qnet",
		            	    "_id": "51c2c74e05f53085040000e3",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Dachar",
		            	    "to": "#finnexus",
		            	    "url": "http://www.netanttila.com/shop/ProductDisplay?storeId=1444&productId=96062&urlRequestType=Base&langId=22&catalogId=1444",
		            	    "date": "1371720327939",
		            	    "bot": "qnet",
		            	    "_id": "51c2ca8705f53085040000ec",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://static.naamapalmu.com/files/aJ/big/uTvjSm36XoWIyX7kT211.jpg",
		            	    "date": "1371749211885",
		            	    "bot": "qnet",
		            	    "_id": "51c33b5b05f5308504000107",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "FlameRage",
		            	    "to": "#finnexus",
		            	    "url": "http://blog.kapsi.fi/2013/06/23/lahjoitetaan-kaksi-palvelinta/",
		            	    "date": "1371995627986",
		            	    "bot": "qnet",
		            	    "_id": "51c6fdeb05f530850400011d",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://fc04.deviantart.net/fs70/f/2013/174/a/9/dat_hair_by_keterok-d6acraa.png",
		            	    "date": "1372068203157",
		            	    "bot": "qnet",
		            	    "_id": "51c8196b05f530850400012a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "ShadowArm",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltalehti.fi/seksuaalisuusjasuhteet/2013062017178150_se.shtml",
		            	    "date": "1372068658083",
		            	    "bot": "qnet",
		            	    "_id": "51c81b3205f530850400012c",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "https://www.youtube.com/watch?feature=player_embedded&v=EZ6GF4YlxKc",
		            	    "date": "1372068927031",
		            	    "bot": "ircnet",
		            	    "_id": "51c81c3f05f5308504000130",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "ShadowArm",
		            	    "to": "#finnexus",
		            	    "url": "http://fi8.eu.apcdn.com/full/75883.jpg",
		            	    "date": "1372077589321",
		            	    "bot": "qnet",
		            	    "_id": "51c83e1505f5308504000137",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=ieT-MAlSdfg",
		            	    "date": "1372090565537",
		            	    "bot": "qnet",
		            	    "_id": "51c870c505f530850400013e",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "ShadowArm",
		            	    "to": "#finnexus",
		            	    "url": "http://www.thesun.co.uk/sol/homepage/news/4981933/Woman-kills-husband-and-herself.html",
		            	    "date": "1372157415532",
		            	    "bot": "qnet",
		            	    "_id": "51c975e705f530850400017c",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://onlinegame.rail-nation.com/?ad=10546_1140801100",
		            	    "date": "1372165087849",
		            	    "bot": "qnet",
		            	    "_id": "51c993df05f530850400018e",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://www.mtv3.fi/uutiset/rikos.shtml/2013/06/1773167/uskomaton-tieraivo-iski-turussa",
		            	    "date": "1372170126552",
		            	    "bot": "qnet",
		            	    "_id": "51c9a78e05f5308504000193",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=JDPyJkhCHkc",
		            	    "date": "1372176801615",
		            	    "bot": "qnet",
		            	    "_id": "51c9c1a105f5308504000195",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.bistudio.com/",
		            	    "date": "1372235921762",
		            	    "bot": "qnet",
		            	    "_id": "51caa89105f53085040001a7",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "https://dl.dropboxusercontent.com/u/910038/tstv.PNG",
		            	    "date": "1372245836044",
		            	    "bot": "qnet",
		            	    "_id": "51cacf4c05f53085040001d0",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "_Wam_",
		            	    "to": "#finnexus",
		            	    "url": "http://www.saapalvelu.fi/helsinki/ukkostutka.php",
		            	    "date": "1372255606809",
		            	    "bot": "qnet",
		            	    "_id": "51caf57605f53085040001e2",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://en.wikipedia.org/wiki/Voynich_manuscript",
		            	    "date": "1372269969211",
		            	    "bot": "qnet",
		            	    "_id": "51cb2d9105f53085040001e7",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hezo",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.youtube.com/watch?v=LR8fQiskYII",
		            	    "date": "1372327150118",
		            	    "bot": "ircnet",
		            	    "_id": "51cc0cee05f53085040001f4",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltalehti.fi/uutiset/2013062717199583_uu.shtml",
		            	    "date": "1372346874763",
		            	    "bot": "qnet",
		            	    "_id": "51cc59fa05f53085040001f6",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/281Eftu.gif",
		            	    "date": "1372394896718",
		            	    "bot": "qnet",
		            	    "_id": "51cd159005f5308504000205",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.friatider.se/lan-party-tax-hits-swedish-gamers#.UcwKVubeAgh.twitter",
		            	    "date": "1372399916649",
		            	    "bot": "ircnet",
		            	    "_id": "51cd292c05f530850400020a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "ShadowArm",
		            	    "to": "#finnexus",
		            	    "url": "http://www.wired.co.uk/news/archive/2013-06/27/technoviking",
		            	    "date": "1372404322397",
		            	    "bot": "qnet",
		            	    "_id": "51cd3a6205f5308504000210",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://spcam.orion.fi/laakeluettelo/",
		            	    "date": "1372406547146",
		            	    "bot": "ircnet",
		            	    "_id": "51cd431305f530850400023e",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://fi.wikipedia.org/wiki/ITER",
		            	    "date": "1372410541323",
		            	    "bot": "qnet",
		            	    "_id": "51cd52ad05f530850400024c",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=HO5imsViKp0",
		            	    "date": "1372412156527",
		            	    "bot": "qnet",
		            	    "_id": "51cd58fc05f530850400025a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://the90sbutton.com/",
		            	    "date": "1372413253441",
		            	    "bot": "qnet",
		            	    "_id": "51cd5d4505f530850400025c",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/eBXyo2w.jpg",
		            	    "date": "1372414808248",
		            	    "bot": "qnet",
		            	    "_id": "51cd635805f530850400026f",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-prn1/1044898_10151470646130009_1977261424_n.jpg",
		            	    "date": "1372418676686",
		            	    "bot": "ircnet",
		            	    "_id": "51cd727405f5308504000280",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://upload.wikimedia.org/wikipedia/commons/2/28/SheMayLookCleanBut.jpg",
		            	    "date": "1372420260981",
		            	    "bot": "qnet",
		            	    "_id": "51cd78a405f530850400028f",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "jarcco",
		            	    "to": "#finnexus",
		            	    "url": "https://twitter.com/barrabest/status/351470936807075840/photo/1",
		            	    "date": "1372663575085",
		            	    "bot": "qnet",
		            	    "_id": "51d12f172744cc545f000017",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltalehti.fi/uutiset/2013070117209602_uu.shtml",
		            	    "date": "1372668015799",
		            	    "bot": "qnet",
		            	    "_id": "51d1406f2744cc545f00001e",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://www.reddit.com/r/Games/comments/1hf1qz/warning_russian_users_can_use_an_exploit_to_shut/",
		            	    "date": "1372678045606",
		            	    "bot": "qnet",
		            	    "_id": "51d1679d2744cc545f000043",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://i.imgur.com/IgXGgI4.jpg",
		            	    "date": "1372720438566",
		            	    "bot": "ircnet",
		            	    "_id": "51d20d362744cc545f000062",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://www.cyborgmatt.com/wp-content/uploads/2013/07/Dota2_Lion_SDK01.jpg",
		            	    "date": "1372741426981",
		            	    "bot": "qnet",
		            	    "_id": "51d25f322744cc545f00006a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hezo",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.teefury.com/gallery/2261/Respect_the_Chemistry/",
		            	    "date": "1372748204386",
		            	    "bot": "ircnet",
		            	    "_id": "51d279ac2744cc545f0000aa",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hezo",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.teefury.com/gallery/2150/Heisenberg/",
		            	    "date": "1372748245859",
		            	    "bot": "ircnet",
		            	    "_id": "51d279d52744cc545f0000ad",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hezo",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.teefury.com/gallery/2011/Say_my_name___Heisenberg/",
		            	    "date": "1372748312306",
		            	    "bot": "ircnet",
		            	    "_id": "51d27a182744cc545f0000b0",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hezo",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.teefury.com/gallery/1987/Adventure_Cook/",
		            	    "date": "1372748318567",
		            	    "bot": "ircnet",
		            	    "_id": "51d27a1e2744cc545f0000b2",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/rT4yxBm.jpg",
		            	    "date": "1372772181162",
		            	    "bot": "qnet",
		            	    "_id": "51d2d7552744cc545f0000d1",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://blog.twitch.tv/2013/07/link-twitch-to-your-steam-account/",
		            	    "date": "1372930673790",
		            	    "bot": "qnet",
		            	    "_id": "51d542712744cc545f000104",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltalehti.fi/asuminen/2013070417225850_an.shtml",
		            	    "date": "1372933221633",
		            	    "bot": "qnet",
		            	    "_id": "51d54c652744cc545f000117",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://static.iltalehti.fi/etusivu/nuuksio_vaaka0407MN_503_et.jpg",
		            	    "date": "1372935900469",
		            	    "bot": "qnet",
		            	    "_id": "51d556dc2744cc545f00012f",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltalehti.fi/asuminen/2013070417225850_an.shtml",
		            	    "date": "1372963222611",
		            	    "bot": "qnet",
		            	    "_id": "51d5c1962744cc545f00014a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=07FYdnEawAQ&feature=share&list=UUsXfDf1CDgU3SCt0gxJNXGg",
		            	    "date": "1373014145887",
		            	    "bot": "qnet",
		            	    "_id": "51d688812744cc545f00014d",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://steamcommunity.com/profiles/76561197994168366",
		            	    "date": "1373025191807",
		            	    "bot": "qnet",
		            	    "_id": "51d6b3a72744cc545f000156",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/kDTtUYn.jpg",
		            	    "date": "1373225196556",
		            	    "bot": "qnet",
		            	    "_id": "51d9c0ec2744cc545f000164",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://25.media.tumblr.com/d82eef8e3e65249dbc9fffadabc2c4da/tumblr_mpl7i0C49l1sz538eo1_500.png",
		            	    "date": "1373258475485",
		            	    "bot": "qnet",
		            	    "_id": "51da42eb2744cc545f000167",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Dachar",
		            	    "to": "#finnexus",
		            	    "url": "http://www.gamasutra.com/blogs/RaminShokrizade/20130626/194933/The_Top_F2P_Monetization_Tricks.php",
		            	    "date": "1373266314651",
		            	    "bot": "qnet",
		            	    "_id": "51da618a2744cc545f00018b",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-ash3/1025802_10200119473578761_1200883337_o.jpg",
		            	    "date": "1373310035323",
		            	    "bot": "qnet",
		            	    "_id": "51db0c532744cc545f00019a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/WFZxWFs.jpg",
		            	    "date": "1373368907611",
		            	    "bot": "qnet",
		            	    "_id": "51dbf24b2744cc545f0001b9",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://www.dota2.com/thebetaisover/",
		            	    "date": "1373440012358",
		            	    "bot": "qnet",
		            	    "_id": "51dd080c2744cc545f0001ea",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://i.minus.com/igUlEMzy5UlJU.gif",
		            	    "date": "1373448376385",
		            	    "bot": "qnet",
		            	    "_id": "51dd28b82744cc545f0001f6",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Capu",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltalehti.fi/uutiset/201307100114544_uu.shtml",
		            	    "date": "1373450116598",
		            	    "bot": "qnet",
		            	    "_id": "51dd2f842744cc545f0001fa",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "https://play.spotify.com/album/7f6QKBwFAJMzZJXQ4TzsVC",
		            	    "date": "1373451792587",
		            	    "bot": "qnet",
		            	    "_id": "51dd36102744cc545f0001fe",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "https://dl.dropboxusercontent.com/u/910038/capa.PNG",
		            	    "date": "1373537476253",
		            	    "bot": "qnet",
		            	    "_id": "51de84c42744cc545f000296",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://youtu.be/-SGCWhWBjYc",
		            	    "date": "1373605402355",
		            	    "bot": "qnet",
		            	    "_id": "51df8e1a2744cc545f0002af",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.twitch.tv/verikopteri",
		            	    "date": "1373608033494",
		            	    "bot": "qnet",
		            	    "_id": "51df98612744cc545f0002b1",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltalehti.fi/uutiset/2013071117257633_uu.shtml",
		            	    "date": "1373610215769",
		            	    "bot": "qnet",
		            	    "_id": "51dfa0e7b52166965c000020",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://store.steampowered.com/app/8930/",
		            	    "date": "1373624145971",
		            	    "bot": "qnet",
		            	    "_id": "51dfd751b52166965c00005a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=Dsg_aqaI3m0",
		            	    "date": "1373627411691",
		            	    "bot": "qnet",
		            	    "_id": "51dfe413b52166965c0000b9",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://open.spotify.com/track/3v15f2Z0j7LV416W6fifQL",
		            	    "date": "1373628568288",
		            	    "bot": "qnet",
		            	    "_id": "51dfe898b52166965c0000bf",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://www.taloussanomat.fi/autot/2013/07/06/uraohjus-ajaa-audilla-mummoankka-volkkarilla/20139339/304",
		            	    "date": "1373630017064",
		            	    "bot": "qnet",
		            	    "_id": "51dfee41b52166965c0000e9",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://devopsreactions.tumblr.com/post/37900111750/review-of-a-sysadmin-cv-by-upper-management",
		            	    "date": "1373630583501",
		            	    "bot": "qnet",
		            	    "_id": "51dff077b52166965c0000ee",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://open.spotify.com/track/2SvJOccXXRIkF1Bp8LOSj7",
		            	    "date": "1373631298865",
		            	    "bot": "qnet",
		            	    "_id": "51dff342b52166965c0000f6",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://open.spotify.com/track/57LmiainsD8Awh0Bgu3n2c",
		            	    "date": "1373631346399",
		            	    "bot": "qnet",
		            	    "_id": "51dff372b52166965c0000f8",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=GkrFvuGDX3U&list=PL1B95C576CD7742BE",
		            	    "date": "1373631569319",
		            	    "bot": "qnet",
		            	    "_id": "51dff451b52166965c0000fa",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "https://github.com/videlalvaro/gifsockets",
		            	    "date": "1373774694556",
		            	    "bot": "ircnet",
		            	    "_id": "51e22366b52166965c000100",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.iltalehti.fi/iltvmusiikki/20130711027252961_a4.shtml",
		            	    "date": "1373881848824",
		            	    "bot": "ircnet",
		            	    "_id": "51e3c5f8b52166965c00011a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://top10matkatarjoukset.savalanche.com/store/product/16540/5+y%25C3%25B6n+loma+kauniissa+Floridassa+4+hengelle+ja+4+kpl+1+p%25C3%25A4iv%25C3%25A4n+lippua+Walt+Disney-teemapuistoon%252C+sis_+majoitus%252C+aamiainen%252C+lentokentt%25C3%25A4kuljetukset+ja+kaupunkikierros/?locale=fi&shop_id=837",
		            	    "date": "1373887549165",
		            	    "bot": "qnet",
		            	    "_id": "51e3dc3db52166965c000133",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.aamulehti.fi/Kotimaa/1194826509629/artikkeli/tallainen+on+funparkin+kohulaite+katso+video.html",
		            	    "date": "1373937661617",
		            	    "bot": "ircnet",
		            	    "_id": "51e49ffdb52166965c00014a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "https://lkml.org/lkml/2013/7/13/132",
		            	    "date": "1373956638163",
		            	    "bot": "qnet",
		            	    "_id": "51e4ea1eb52166965c00016d",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "https://lkml.org/lkml/2013/7/13/132",
		            	    "date": "1373956640773",
		            	    "bot": "ircnet",
		            	    "_id": "51e4ea20b52166965c00016f",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltalehti.fi/iltvviihde/20130716027470474_a2.shtml",
		            	    "date": "1373965054617",
		            	    "bot": "qnet",
		            	    "_id": "51e50afeb52166965c000180",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://www.feissarimokat.com/2013/07/kirpputorin-loytoja-osa-43/",
		            	    "date": "1373965227620",
		            	    "bot": "qnet",
		            	    "_id": "51e50babb52166965c000188",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.feissarimokat.com/2013/06/luvattomat-kuvat/",
		            	    "date": "1373972751375",
		            	    "bot": "ircnet",
		            	    "_id": "51e5290fb52166965c00018d",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://www.reddit.com/r/Music/comments/1idodh/kanye_wests_new_shirt_is_a_120_plain_white_tshirt/",
		            	    "date": "1373974487142",
		            	    "bot": "qnet",
		            	    "_id": "51e52fd7b52166965c000191",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://www.arvopaperi.fi/uutisarkisto/applen+hikipajasta+tuli+k23/a914770",
		            	    "date": "1373977846097",
		            	    "bot": "qnet",
		            	    "_id": "51e53cf6b52166965c00019c",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://dome.fi/pelit/artikkelit/laitteet/ducky-shine2-pelinappaimisto-luotettavuutta-ja-laatua",
		            	    "date": "1373989214711",
		            	    "bot": "qnet",
		            	    "_id": "51e5695eb52166965c0001a2",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://store.steampowered.com/sub/29152/",
		            	    "date": "1373994438001",
		            	    "bot": "qnet",
		            	    "_id": "51e57dc6b52166965c0001a6",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=J7iJao8pAjA",
		            	    "date": "1374002659945",
		            	    "bot": "qnet",
		            	    "_id": "51e59de3b52166965c0001b4",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://www.soitinlaine.fi/sumuCMS/sivu/tuotetiedot/tuote_id/14168&hakusanat=pink&kategoria_id=",
		            	    "date": "1374040851819",
		            	    "bot": "qnet",
		            	    "_id": "51e63313b52166965c0001b9",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltasanomat.fi/kotimaa/art-1288582999774.html",
		            	    "date": "1374070433513",
		            	    "bot": "qnet",
		            	    "_id": "51e6a6a1b52166965c0001d7",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://store.steampowered.com/app/108200/",
		            	    "date": "1374227176552",
		            	    "bot": "qnet",
		            	    "_id": "51e90ae878948ef37200000f",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://steamcommunity.com/sharedfiles/filedetails/?id=161246840",
		            	    "date": "1374227488496",
		            	    "bot": "qnet",
		            	    "_id": "51e90c2078948ef372000017",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.buzzfeed.com/jenlewis/nicolas-cage-as-your-favorite-disney-princesses",
		            	    "date": "1374229876319",
		            	    "bot": "ircnet",
		            	    "_id": "51e9157478948ef372000030",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "FlameRage",
		            	    "to": "#finnexus",
		            	    "url": "http://flamerage.deviantart.com/art/Dimensional-Space-386556163",
		            	    "date": "1374233342152",
		            	    "bot": "qnet",
		            	    "_id": "51e922fe78948ef37200003b",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://fin.afterdawn.com/uutiset/artikkeli.cfm/2013/07/19/netflixin_html5-suunnitelmat_saivat_aikaan_boikotin",
		            	    "date": "1374233384837",
		            	    "bot": "ircnet",
		            	    "_id": "51e9232878948ef37200003d",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://steamcommunity.com/sharedfiles/filedetails/?id=150920634&searchtext=",
		            	    "date": "1374235635024",
		            	    "bot": "qnet",
		            	    "_id": "51e92bf378948ef372000041",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://www.reddit.com/r/DotA2/comments/1it2a1/how_to_draw_morphling/",
		            	    "date": "1374523942759",
		            	    "bot": "qnet",
		            	    "_id": "51ed922678948ef3720000ca",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/xl4PItd.jpg",
		            	    "date": "1374523968716",
		            	    "bot": "qnet",
		            	    "_id": "51ed924078948ef3720000cc",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.tietokone.fi/artikkeli/uutiset/ubuntu_huippupuhelinta_kehitetaan_joukkorahoituksella",
		            	    "date": "1374557528666",
		            	    "bot": "ircnet",
		            	    "_id": "51ee155878948ef3720000d2",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://www.hameensanomat.fi/uutiset/kotimaa/77459-piispa-esitteli-sauvaansa-paivakotilapsille-rengossa#.Ue6d1AQouDZ.facebook",
		            	    "date": "1374604393618",
		            	    "bot": "qnet",
		            	    "_id": "51eecc6978948ef3720000ed",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "jarcco",
		            	    "to": "#finnexus",
		            	    "url": "https://sarkkakalenteri.skyred.fi/",
		            	    "date": "1374607891367",
		            	    "bot": "qnet",
		            	    "_id": "51eeda1378948ef3720000f0",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://s1239.photobucket.com/user/morris02/media/Vote_from_rooftops.jpg.html",
		            	    "date": "1374608779442",
		            	    "bot": "qnet",
		            	    "_id": "51eedd8b78948ef3720000f3",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "mdms",
		            	    "to": "#finnexus",
		            	    "url": "http://static.naamapalmu.com/files/KQ/medium/bGllEmqOgCFbq8zQSAY8.jpg",
		            	    "date": "1374609158692",
		            	    "bot": "qnet",
		            	    "_id": "51eedf0678948ef3720000f5",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/6LJxVdf.jpg",
		            	    "date": "1374615447611",
		            	    "bot": "qnet",
		            	    "_id": "51eef79778948ef3720000f7",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://www.youtube.com/watch?v=ZnE3uyj9Grg&hd=1",
		            	    "date": "1374646649434",
		            	    "bot": "qnet",
		            	    "_id": "51ef717978948ef3720000fc",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://vimeo.com/70748579",
		            	    "date": "1374666108630",
		            	    "bot": "qnet",
		            	    "_id": "51efbd7c78948ef37200010d",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Spider_",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://stackoverflow.com/a/1732454/857760",
		            	    "date": "1374670696055",
		            	    "bot": "ircnet",
		            	    "_id": "51efcf6878948ef372000119",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Spider_",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "https://en.wikipedia.org/wiki/Chomsky_hierarchy",
		            	    "date": "1374671187471",
		            	    "bot": "ircnet",
		            	    "_id": "51efd15378948ef37200011b",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://steamgraph.net/index.php?action=graph&jstime=1&appid=570&from=1374440400000&to=1374786000000",
		            	    "date": "1374673368408",
		            	    "bot": "qnet",
		            	    "_id": "51efd9d878948ef37200011d",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "miri_",
		            	    "to": "#finnexus",
		            	    "url": "http://www.brandos.fi/iron-fist/iron-fist-oh-no-platform-ifl0072-platf-purple/a13916",
		            	    "date": "1374680981445",
		            	    "bot": "qnet",
		            	    "_id": "51eff79578948ef37200013d",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://www.tietokone.fi/artikkeli/uutiset/googlelta_selvasti_nopeampi_nexus_7_tabletti",
		            	    "date": "1374733255784",
		            	    "bot": "qnet",
		            	    "_id": "51f0c3c778948ef372000153",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Spider_",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.digitoday.fi/viihde/2013/07/25/google-julkaisi-tv-mokkulan/201310325/66",
		            	    "date": "1374739693530",
		            	    "bot": "ircnet",
		            	    "_id": "51f0dced78948ef37200015b",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.tietokone.fi/artikkeli/uutiset/googlelta_selvasti_nopeampi_nexus_7_tabletti",
		            	    "date": "1374739763469",
		            	    "bot": "ircnet",
		            	    "_id": "51f0dd3378948ef37200015e",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Quh",
		            	    "to": "#finnexus",
		            	    "url": "http://whatthecommit.com/",
		            	    "date": "1374741110426",
		            	    "bot": "qnet",
		            	    "_id": "51f0e27678948ef372000161",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "hezo",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltasanomat.fi/autot/art-1288584890812.html",
		            	    "date": "1374741359137",
		            	    "bot": "qnet",
		            	    "_id": "51f0e36f78948ef372000163",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://whatthecommit.com/",
		            	    "date": "1374741939721",
		            	    "bot": "ircnet",
		            	    "_id": "51f0e5b378948ef372000168",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Defree",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/LEf9LB6.jpg",
		            	    "date": "1374751207575",
		            	    "bot": "qnet",
		            	    "_id": "51f109e778948ef372000172",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://whatthecommit.com/b308cab3c87a1c8ce4e80662e8f3415a",
		            	    "date": "1374756848736",
		            	    "bot": "ircnet",
		            	    "_id": "51f11ff078948ef37200017a",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://dome.fi/pelit/ajankohtaista/viela-ehdit-mukaan-nettilinnanrakentelun-betaan",
		            	    "date": "1374779837547",
		            	    "bot": "qnet",
		            	    "_id": "51f179bd78948ef37200017f",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://dome.fi/elokuvat/ajankohtaista/paivan-tv-leffavinkki-2-tieteiskauhun-kiistamaton-klassikko",
		            	    "date": "1374821403315",
		            	    "bot": "qnet",
		            	    "_id": "51f21c1b78948ef372000183",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltalehti.fi/uutiset/2013072617298944_uu.shtml",
		            	    "date": "1374826827677",
		            	    "bot": "qnet",
		            	    "_id": "51f2314b78948ef372000187",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.iltalehti.fi/uutiset/2013072617298944_uu.shtml",
		            	    "date": "1374826831375",
		            	    "bot": "ircnet",
		            	    "_id": "51f2314f78948ef372000189",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Spider_",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.taloussanomat.fi/ulkomaat/2013/07/26/pelottavan-taitava-tietomurto-venalaisliiga-noyryytti-suuryrityksia/201310395/12",
		            	    "date": "1374835404326",
		            	    "bot": "ircnet",
		            	    "_id": "51f252cc78948ef372000193",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://open.spotify.com/track/291hlAJFotFlscbKt3aJaa",
		            	    "date": "1374837167830",
		            	    "bot": "ircnet",
		            	    "_id": "51f259af78948ef3720001a8",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hezo",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://open.spotify.com/track/0X8DO4yv6TO2c2ogOLIGAh",
		            	    "date": "1374837558341",
		            	    "bot": "ircnet",
		            	    "_id": "51f25b3678948ef3720001b4",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hezo",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://open.spotify.com/track/4oaJfuc2cg8mxuSPvLpbG4",
		            	    "date": "1374837644128",
		            	    "bot": "ircnet",
		            	    "_id": "51f25b8c78948ef3720001b8",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hezo",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://open.spotify.com/track/5wEuXUt6mikwlMgIuzJSGD",
		            	    "date": "1374838030980",
		            	    "bot": "ircnet",
		            	    "_id": "51f25d0e78948ef3720001cc",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hezo",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://open.spotify.com/track/4rmCDOIJFZ10a1x1BVzKwr",
		            	    "date": "1374838777834",
		            	    "bot": "ircnet",
		            	    "_id": "51f25ff978948ef3720001d4",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Castoor",
		            	    "to": "#finnexus",
		            	    "url": "http://i.imgur.com/7HWFWGS.gif",
		            	    "date": "1374841667724",
		            	    "bot": "qnet",
		            	    "_id": "51f26b4378948ef3720001e8",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "The_Thing",
		            	    "to": "#finnexus",
		            	    "url": "http://www.iltasanomat.fi/kotimaa/art-1288585251363.html",
		            	    "date": "1374852517734",
		            	    "bot": "qnet",
		            	    "_id": "51f295a578948ef3720001ea",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.youtube.com/watch?v=AIXUgtNC4Kc",
		            	    "date": "1375016239181",
		            	    "bot": "ircnet",
		            	    "_id": "51f5152f78948ef3720001ef",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "loneghos",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.youtube.com/watch?v=HcXNPI-IPPM",
		            	    "date": "1375016451992",
		            	    "bot": "ircnet",
		            	    "_id": "51f5160378948ef3720001f3",
		            	    "__v": 0
		            	  },
		            	  {
		            	    "from": "Hekki",
		            	    "to": "#korruptiokoodarit",
		            	    "url": "http://www.tietoviikko.fi/kaikki_uutiset/facebook+kiihdyttaa+phpsta+yhdeksan+kertaa+nopeampi/a916946",
		            	    "date": "1375074706719",
		            	    "bot": "ircnet",
		            	    "_id": "51f5f99278948ef3720001f6",
		            	    "__v": 0
		            	  }
		            	];
		
	}