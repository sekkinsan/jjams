(function() {
    function Fixtures() {
          var Fixtures = {};
          //Example 1
          var albumPicasso = {
            title: 'The Colors',
            artist: 'Pablo Picasso',
            label: 'Cubism',
            year: '1881',
            albumArtUrl: '/assets/images/album_covers/01.png',
            songs: [
              { title: 'Blue', duration: 161.71, audioUrl: '/assets/music/blue' },
              { title: 'Green', duration: 103.96, audioUrl: '/assets/music/green' },
              { title: 'Red', duration: 268.45, audioUrl: '/assets/music/red' },
              { title: 'Pink', duration: 153.14, audioUrl: '/assets/music/pink' },
              { title: 'Magenta', duration: 374.22, audioUrl: '/assets/music/magenta' },
            ]
          };

          //Example 2
          var albumMarconi = {
            title: 'The Telephone',
            artist: 'Gulielmo Marconi',
            label: 'EM',
            year: '1909',
            albumArtUrl: '/assets/images/album_covers/20.png',
            songs: [
              { title: 'Hello, Operator?', duration: '1:01' },
              { title: 'Ring, ring, ring', duration: '5:01' },
              { title: 'Fits in your pocket', duration: '3:21' },
              { title: 'Can you hear me now?', duration: '3:14' },
              { title: 'Wrong phone number', duration: '2:15' }
            ]
          };

          //Album 3 (my choice)
          var albumIU = {
            title: 'Palette',
            artist: 'IU',
            label: 'Loen Entertainment',
            year: '2017',
            albumArtUrl: '/assets/images/album_covers/11.png',
            songs: [
              { title: 'Black Out', duration: '3:48'},
              { title: 'Palette', duration: '3:37'},
              { title: 'dlwlrma', duration: '2:56'},
              { title: 'Ending Scene', duration: '4:09'},
              { title: 'Through The Night', duration: '4:13'}
            ]
          };

          Fixtures.getAlbum = function() {
              return albumPicasso;
          };

          Fixtures.getCollection = function(numberOfAlbums) {
              var albumObjects = [];
              for (var i = 0; i < numberOfAlbums; i++) {
                  albumObjects.push(albumPicasso);
              }
              return albumObjects;
          };

          return Fixtures;
    }

    angular
          .module('blocJams')
          .factory('Fixtures', Fixtures);
})();
