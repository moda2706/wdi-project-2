const mongoose    = require('mongoose');
mongoose.Promise  = require('bluebird');

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/wdi-project-2';
mongoose.connect(dbURI);

const Artist      = require('../models/artist');
const User        = require('../models/user');

Artist.collection.drop();
User.collection.drop();

User
.create([{
  username: 'admin',
  email: 'easymonju@gmail.com',
  password: 'password',
  passwordConfirmation: 'password'
}])
.then((user) => {
  console.log(`${user.length} users created`);

  return Artist
  .create([
    {
      artist: 'Banksy',
      title: 'Naked Man Hanging from Window',
      description: 'Banksy Well Hung Lover as it is also known, is another enduring icon of the British city of Bristol. ... Having made headlines around the world when it first appeared, “Well Hung Lover” is a wry dedication to the insolent attitude of Bristol.',
      image: 'https://cdn-s3.touchofmodern.com/products/000/004/353/8a7e59f8957c1484ebc5f0a5801bb2e6_large.jpg?1392329799',
      lat: '51.4492436',
      lng: '-2.6088978'
    },{
      artist: 'Banksy',
      title: 'Preserved for posterity',
      description: 'Councils and property owners initially treated Banksy like any other vandal, erasing his work from their walls not long after it appeared. With the artist\'s rise to fame, though, his murals became valuable works of art. People began to protect the stencils with perspex covers. Several remain under screens to this day.',
      image: 'https://assets.londonist.com/uploads/2016/10/i875/img_6938.jpg',
      lat: '51.526328',
      lng: '-0.0809167'
    },{
      artist: 'Banksy',
      title: 'Grim Reaper',
      description: 'Originally painted on the side of a boat in Bristol, this piece has found a new home in the city\'s M Shed gallery.',
      image: 'http://visitbristol.co.uk/imageresizer/?image=%2Fdmsimgs%2FBanksy-thekla.jpg&action=ProductDetail',
      lat: '51.4483204',
      lng: '-2.5983256'
    },{
      artist: 'Banksy',
      title: 'Spy Booth',
      description: 'Painted down the road from GCHQ, this now severely defaced piece was seen as a critique on global surveillance.',
      image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/03/12/11/spy-booth-banksy.jpg',
      lat: '51.8991684',
      lng: '-2.0682282'
    },{
      artist: 'Banksy',
      title: 'The Mild Mild West',
      description: 'Another Bristol piece, this is said to refer to the police\'s heavy-handed approach to breaking up raves.',
      image: 'http://visitbristol.co.uk/imageresizer/?image=%2Fdmsimgs%2FBanksy-Mild-Mild-West_CREDIT_Destination-Bristol_452359259.jpg&action=ProductDetail',
      lat: '51.4627184',
      lng: '-2.5919742'
    },{
      artist: 'Banksy',
      title: 'Yellow Lines Flower Painter',
      description: 'Located in Bethnal Green in London, the Yellow Lines Flower Painter is one of Banksy’s most famous pieces. In this piece, the world-renowned graffiti artist shows a painter, presumably tasked to paint the yellow lines so common to the streets of London, taking a break after painting a large yellow flower on a wall.',
      image: 'http://www.stencilrevolution.com/photopost/2012/09/Yellow-Lines-Flower-Painter-by-Banksy-580x475.jpg',
      lat: '51.5279652',
      lng: '-0.0661011'
    },{
      artist: 'Banksy',
      title: 'Gorilla And Mask',
      description: 'After a long hiatus Banksy is back with both this piece In Bristol and a large Portaloo version of Stonehenge.',
      image: 'http://www.artofthestate.co.uk/photos/banksy_gorilla_with_mask.jpg',
      lat: '51.4753125',
      lng: '-2.5453882'
    },{
      artist: 'Banksy',
      title: 'Pulp Fiction',
      description: 'John Travolta has never been so impotent',
      image: 'http://www.artofthestate.co.uk/photos/banksy_travolta.jpg',
      lat: '51.5257324',
      lng: '-0.0880074'
    },{
      artist: 'Banksy',
      title: 'Have A Nice Day',
      description: 'This image shows the sheer scale (and audacity) of this piece',
      image: 'http://www.artofthestate.co.uk/photos/banksy_old_st_cops2.jpg',
      lat: '51.5256244',
      lng: '-0.0897066'
    },{
      artist: 'Banksy',
      title: 'Banksy Graffiti',
      description: 'Freestyle painted truck by Banksy, now residing in Spain. This truck was painted in 1998 and was seen at Glastonbury for 3 or 4 years after that as well as at the Eclipse festival in Cornwall. Various images Of Banksy\'s European adventures supplied by readers of artofthestate will be here shortly',
      image: 'http://www.artofthestate.co.uk/photos/banksy_painted_truck.jpg',
      lat: '40.4188517',
      lng: '-3.7056571'
    },{
      artist: 'Banksy',
      title: 'Looters',
      description: 'Looters depicted by Banksy in New Orleans. Reports of looting were widespread in a hysterical media but what the hell are you supposed to do when the local supermarket isn\'t open 24 hours a day anymore? ',
      image: 'http://www.artofthestate.co.uk/photos/banksy_couk_looting.jpg',
      lat: '29.9591374',
      lng: '-90.0628647'
    },{
      artist: 'Banksy',
      title: 'Crayon Boy',
      description: 'Banksy Crayon Boy on the back of a store in LA in the run up to the Oscars 2011',
      image: 'http://www.artofthestate.co.uk/photos/banksy_karin_crayon_boy_3.jpg',
      lat: '34.0645222',
      lng: '-118.4628406,13'
    },{
      artist: 'Banksy',
      title: 'Kissing Coppers',
      description: 'Banksy\'s kissing coppers turned up in Brighton but were pretty swiftly damaged and repainted (its unclear by whom). They were then protected by perspex as seen in this photo',
      image: 'http://www.artofthestate.co.uk/photos/banksy_brighton_kissing_coppers.jpg',
      lat: '50.8284764',
      lng: '-0.1428541'
    },{
      artist: 'Banksy',
      title: 'Heart Boy',
      description: 'This piece originally appeared in Islington, London, but it has a new home now in Amsterdam\'s Moco Museum.',
      image: 'http://cdn2.straatosphere.com/wp-content/uploads/2016/06/376895.jpg',
      lat: '51.5226504',
      lng: '-0.1000412'
    },{
      artist: 'Banksy',
      title: 'Hammer Boy',
      description: 'One of the street artist\'s surviving pieces from his New York residency back in 2013.',
      image: 'https://untappedcities-wpengine.netdna-ssl.com/wp-content/uploads/2013/10/Banksy-Hammer-Boy-Upper-West-Side.jpg',
      lat: '40.773813',
      lng: '-73.9583693'
    },{
      artist: 'D*face',
      title: 'Circles Wall Piece 2004',
      description: 'July 2004 hit at Feltham Circles featuring Hersey, Fybe, Catman, Monsta, D-Face and Gorb ',
      image: 'http://www.artofthestate.co.uk/photos/dface_flyer.jpg',
      lat: '51.4453053',
      lng: '-0.4474111'
    },{
      artist: 'D*face',
      title: 'The London police \'Lads\' and D-Face poster',
      description: 'High up on a wall in Old Street. The London Police (now based in Amsterdam) must have had some fun pasting this up. And yeah, if you are wondering, it was a joint hit with D-face - see the balloon dog figure on the right.',
      image: 'http://www.artofthestate.co.uk/photos/pglondonGRAFFITIlpolice3.jpg',
      lat: '52.3644419',
      lng: '4.9051932'
    },{
      artist: 'D*face',
      title: 'D-face poster',
      description: 'This Hello My Name Is poster has been completed with a D-Face trademark figure and signature',
      image: 'http://www.artofthestate.co.uk/photos/pglondonGRAFFITIdface2.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'D*face',
      title: 'Dub Swimming Pool',
      description: 'A quick "5 minute dub" on the pool side',
      image: 'http://www.artofthestate.co.uk/photos/dface_flyer_2.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'D*face',
      title: 'Car Wash',
      description: 'Round the corner from one of those hand car wash places....',
      image: 'http://www.artofthestate.co.uk/photos/dface_car_wash.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'D*face',
      title: 'Flying Circus',
      description: 'Feltham circles piece',
      image: 'http://www.artofthestate.co.uk/photos/dface_feltham_clown.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'D*face',
      title: ' Death & Glory Solo Show',
      description: 'D*face\'s first solo show was held in the Old Truman Brewery off Brick Lane, East London in October 2006',
      image: 'http:www.artofthestate.co.uk/photos/dface_dg_ddog_crash.gif',
      lat: '',
      lng: ''
    },{
      artist: 'Invader',
      title: 'Space Invader Tile, CCTV',
      description: 'New work installed off Tottenham Court Road in 2006',
      image: 'http://www.artofthestate.co.uk/photos/space_invader_cctv.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Invader',
      title: 'Space Invader 2006 invasion',
      description: 'King John Court Supersized Invader found in King John Court, East London. All of which is pretty obvious from the photo!',
      image: 'http://www.artofthestate.co.uk/photos/space_invader_st_johns_court.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Invader',
      title: '2007 invasion, Union Jack',
      description: 'Still with the eyes and mouth in the middle of a Union Jack flag',
      image: 'http://www.artofthestate.co.uk/photos/invader_union_jack.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Invader',
      title: 'Space Invader 2007 invasion Trumans Brewery, Brick Lane',
      description: 'I used to hate these buggers. They\'d peel off when you\'d nearly completed the level and try and bomb you into having to start all over again.',
      image: 'http://www.artofthestate.co.uk/photos/invader_brick_lane.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Invader',
      title: 'Invader 2007 Invasion, Bear Street',
      description: 'Bear Street, London.',
      image: 'http://www.artofthestate.co.uk/photos/invader_bear_street.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Invader',
      title: 'Invader 2006 Invasion',
      description: 'Late 2006 or early 2007, found near Old Street station.',
      image: 'http://www.artofthestate.co.uk/photos/invader_old_street.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Adam Neate',
      title: 'Waleska at Cargo',
      description: 'Adam Neate and Waleska on Cargo\'s walls',
      image: 'http://www.artofthestate.co.uk/photos/toasters_orange_toaster.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Adam Neate',
      title: 'Moving Units piece, South Bank,  London',
      description: 'This was Adam\'s contribution to the \'Moving Units\' event under the Southbank Centre in London. Several new skateable structures were installed - even though every time I\'ve been there the home counties kids seem to have enough trouble staying on their boards let alone skating off curved concrete plinths. ' ,
      image: 'http://www.artofthestate.co.uk/photos/adam_neate_southbank.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Adam Neate',
      title: 'Adam Neate piece, East London',
      description: 'A low wall full of Adam\'s trademark head in one of London\'s best spots to see burners',
      image: 'http://www.artofthestate.co.uk/photos/adam_neate_piece.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Roa',
      title: 'Roa Beaver, Hackney Road',
      description: 'Roa came back to London for a solo show at the Pure Evil gallery in April 2010. Naturally he left his mark on the city with some spectacularly large animals painted on the side of partly demolished buildings like this sometime car park on the Hackney Road',
      image: 'http://www.artofthestate.co.uk/photos/roa_london_2010_2.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Roa',
      title: 'Stork by Roa - Hanbury Street.',
      description: 'Four storey high stork by Roa in Hanbury Road off Brick Lane',
      image: 'http://www.artofthestate.co.uk/photos/roa_london_2010_3.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Roa',
      title: 'Roa at the Foundry',
      description: 'Now awaiting its fate from the developers the Foundry\'s walls play host to one of Roa\'s largest piece in London',
      image: 'http://www.artofthestate.co.uk/photos/roa_foundry.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'London Police',
      title: 'The London police 114 \'Lads\' poster',
      description: 'Another London police poster underneath some strange looking figures in Standard Place.',
      image: 'http://www.artofthestate.co.uk/photos/pglondonGRAFFITIlpolice114.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'London Police',
      title: 'Mankato Stencil, Old Street area',
      description: 'Mankato, along with Kinesis are one of several bands using stencils to promote themselves. I haven\'t heard Mankato yet but the Kinesis album is very, very good. Also featured in this picture is a London Police Lads stencil, a anti war in Iraq stencil and a rather pointless "Billposters will be prosecuted" poster ',
      image: 'http://www.artofthestate.co.uk/photos/pglondonGRAFFITImankato.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'London Police',
      title: 'London Police drawing, Carnaby Street',
      description: 'Another London Police drawing - this time off Carnaby Street.',
      image: 'http://www.artofthestate.co.uk/photos/graffiti_london_policepurple.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Ludo',
      title: 'Natures Revenge (pineapple skull)',
      description: 'Ludo\'s pineapple skull bursting out of a wall above an unsuspecting passer by on Sclater Street',
      image: 'http://www.artofthestate.co.uk/photos/ludo_pineapple.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Ludo',
      title: 'Natures Revenge CCTV flower off Shoreditch High Street, London',
      description: 'Ludo\'s Natures Revenge series incorporate the mechanical into the organic such as this flower appearing to sprout out a wall in Shoreditch, East London',
      image: 'http://www.artofthestate.co.uk/photos/Ludo_cctv.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Ludo',
      title: 'Natures Revenge (mechanised flying insect)',
      description: 'From 2012, another piece from Ludo sees a mechanised flying insect in a Shoreditch car park',
      image: 'http://www.artofthestate.co.uk/photos/ludo_mechanised_insect.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Shok-1',
      title: 'Shok-1 and Lovepusher collaboration',
      description: 'Shok-1 and Lovepusher collaboration',
      image: 'http://www.artofthestate.co.uk/photos/new_shok.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Shok-1',
      title: 'Shok 1, Leake Street - Cans Tunnel',
      description: 'Stunning work by Shok1 in the Leake Street tunnel which was previously the home of the Cans Festival.  ',
      image: 'http://www.artofthestate.co.uk/photos/shok1_leake_street.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Shok-1',
      title: 'Shok-1 van graffiti (2010)',
      description: 'Shok-1 took this graffiti covered van often seen around the Portobello Road and converted it into his very own \'Urban Assault Vehicle\' covered in gallery quality art',
      image: 'http://www.artofthestate.co.uk/photos/shok1_van_truck.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Shok-1',
      title: 'Money, Fame and Power',
      description: 'Shok-1\'s amazing Money, Fame Power\' piece in Borough, South London',
      image: 'http://www.artofthestate.co.uk/photos/shok-1_south_london.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Obey',
      title: 'Propaganda Posters, Cargo, Rivington Street, London ',
      description: '',
      image: 'http://www.artofthestate.co.uk/photos/obey_propaganda_peace.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Obey',
      title: ' New World Odor',
      description: 'Fast forward to 2006 and Obey hits town again. This large scale poster work was on the outside walls of Cargo which regularly features work by graffiti related artists. ',
      image: 'http://www.artofthestate.co.uk/photos/obey_new_world_odor.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Obey',
      title: 'War By Numbers',
      description: 'War by numbers piece near Stolenspace, the venue for the Nineteeneightyfouria show',
      image: 'http://www.artofthestate.co.uk/photos/shepard_fairey_2007_street_poster_girl_grenade.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Obey',
      title: 'Shepard Fairey, Curtain Road',
      description: 'On the other side of the gap between the two buildings was this high up piece (Curtain Road)',
      image: 'http://www.artofthestate.co.uk/photos/obey_up_arrow.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Stik',
      title: 'Curtain Road',
      description: 'Stik is a London Street artist who been creating Stik people around East London for over ten years, adorning shop shutters and walls. Stik people, are androgynous and constructed from simple shapes. Stik, the street artist was homeless for a period',
      image: 'https://assets.londonist.com/uploads/2010/09/i875/18795_stikcurtain.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Stik',
      title: 'Princelet Street',
      description: 'Stik is a London Street artist who been creating Stik people around East London for over ten years, adorning shop shutters and walls. Stik people, are androgynous and constructed from simple shapes. Stik, the street artist was homeless for a period',
      image: 'https://assets.londonist.com/uploads/2010/09/i875/18795_stikprincelet.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Stik',
      title: 'Torville Street',
      description: 'Stik is a London Street artist who been creating Stik people around East London for over ten years, adorning shop shutters and walls. Stik people, are androgynous and constructed from simple shapes. Stik, the street artist was homeless for a period',
      image: 'https://assets.londonist.com/uploads/2010/09/i875/18795_stikredchurch.jpg',
      lat: '',
      lng: ''
    },{
      artist: 'Stik',
      title: 'Angry Stik',
      description: 'Stik is a London Street artist who been creating Stik people around East London for over ten years, adorning shop shutters and walls. Stik people, are androgynous and constructed from simple shapes. Stik, the street artist was homeless for a period',
      image: 'https://assets.londonist.com/uploads/2010/09/i875/18795_stikgrimsby.jpg',
      lat: '51.5232069',
      lng: '-0.0727232'
    },{
      artist: 'Stik',
      title: '',
      description: '',
      image: '',
      lat: '',
      lng: ''
    },{
      artist: 'Stik',
      title: '',
      description: '',
      image: '',
      lat: '',
      lng: ''
    }]);

})
  .then(artists => {
    artists.forEach(artist => {
      artist
      .save(artist, (err, artist) => {
        if(err) return console.log(err);
        return console.log(`${artist.artist} was created`);
      });
    });
  });
  //   if (artists){
  //     console.log(`${artists.length} were created`);
  //   } else {
  //     console.log('No artists created');
  //   }
  // })
  // .catch(err => {
  //   console.log(`Error: ${err}`);
  // .finally(() => {
  //     mongoose.connection.close();
  //   });
