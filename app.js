var fs = require('fs'),
	Twitter = require('node-tweet-stream'),
	t_config = require('./config')(),
      	t = new Twitter(t_config),
	track = "worldcup,world,cup,brazil,bra,brabrazil,algeria,alg,algalgeria,australia,aus,ausaustralia,argentina,arg,argargentina,belgium,bel,belbelgium,bosniaandherzegovina,bosnia and herzegovina,bosnia,herzegovina,bih,bihbosniaandherzegovina,cameroon,cmr,cmrcameroon,chile,chi,chichile,colombia,col,colcolombia,costarica,cro,crocostarica,costa rica,crc,crccostarica,ecuador,ecu,ecuecuador,england,eng,engengland,france,fra,frafrance,germany,ger,gergermany,ghana,gha,ghaghana,greece,gre,gregreece,honduras,hon,honhonuras,iran,irn,irniran,italy,ita,itaitaly,ivorycoast,ivory coast,civ,civivorycoast,japan,jpn,jpnjapan,mexico,mex,mexmexico,netherlands,ned,nednetherlands,nigeria,nga,nganigeria,portugal,porportugal,russia,rus,rusrussia,southkorea,south korea,kor,korsouthkorea,spain,esp,espspain,switzerland,sui,suiswitzerland,unitedstates,united states,usa,usaunitedstates,uruguay,uru,uruguay".split(",");

t.on('tweet', function (tweet) {
	console.log(tweet);
	fs.appendFile("tweets", JSON.stringify(tweet), function(err) {
	    if(err) {
		console.log(err);
	    } else {
		console.log("The file was saved!");
	    }
	}); 
})

t.on('error', function (err) {
	console.log('Oh no')
})

for(var i = 0; i < track.length; i++) {
	t.track(track[i]);
	t.track("#" + track[i]);
}
