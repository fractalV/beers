/**
 * Created by Vad on 02.06.2014.
 */
'use strict';
//Get your client ID and secrent by visiting https://developer.foursquare.com
//Thise are demo client Id & secret.

var requestParms = {
    clientId: "TLMMYTSZGQCMMQOOO3WK4AGK2BTP340LM5QN4HGXFXCJP4VW",
    clientSecret: "WJ3C5E5MW1RF55ANHCAB5AJ1BAOL12TZNWLOIRD0W525ZUSH",
    version: "20140602"
}

app.factory('placesPhotosService', function ($resource) {

    var requestUri = 'https://api.foursquare.com/v2/venues/:venueId/:action';

    return $resource(requestUri,
        {
            action: 'photos',
            client_id: requestParms.clientId,
            client_secret: requestParms.clientSecret,
            v: requestParms.version,
            limit: '9',
            callback: 'JSON_CALLBACK'
        },
        {
            get: { method: 'JSONP' }
        });

});
