import React, { useState } from 'react';
import { MapPin, Users, Bed, Bath, Wifi, Car, Wind, Home as HomeIcon, Mail, Phone, ChevronLeft, ChevronRight, Check, Facebook, MessageCircle, Star, Quote, X, Image } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  // Hero slider images
  const images = [
    {
      url: 'https://customer-assets.emergentagent.com/job_viavacation/artifacts/sshzcft4_IMG_5674.jpeg',
      alt: 'Tramonto sulla spiaggia di Viareggio'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_viavacation/artifacts/lw1c0vgl_IMG_5796.png',
      alt: 'Spiaggia al tramonto con ombrelloni'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_viavacation/artifacts/moplhtb7_IMG_4434.heic',
      alt: 'Sala da pranzo luminosa con vista'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_viavacation/artifacts/cc4pu73i_IMG_4708.heic',
      alt: 'Camera da letto confortevole'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_viavacation/artifacts/dcafliod_IMG_4400.heic',
      alt: 'Cucina moderna e attrezzata'
    }
  ];

  // Gallery images
  const galleryImages = [
    {
      url: 'https://customer-assets.emergentagent.com/job_viavacation/artifacts/moplhtb7_IMG_4434.heic',
      title: 'Sala da Pranzo',
      category: 'Interni'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_viavacation/artifacts/cc4pu73i_IMG_4708.heic',
      title: 'Camera da Letto',
      category: 'Interni'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_viavacation/artifacts/gr2a4dwl_IMG_4384.heic',
      title: 'Tavolo da Pranzo',
      category: 'Interni'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_viavacation/artifacts/dcafliod_IMG_4400.heic',
      title: 'Cucina Attrezzata',
      category: 'Interni'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_viavacation/artifacts/5ns21zjn_IMG_4386.heic',
      title: 'Dettagli Decorativi',
      category: 'Interni'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_viavacation/artifacts/99w1b8pk_IMG_4428.heic',
      title: 'Bagno con Doccia',
      category: 'Interni'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_viavacation/artifacts/xrt348tm_IMG_4404.heic',
      title: 'Bagno Principale',
      category: 'Interni'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_viavacation/artifacts/7j1mx23w_IMG_4435.heic',
      title: 'Zona Pineta',
      category: 'Dintorni'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_viavacation/artifacts/sshzcft4_IMG_5674.jpeg',
      title: 'Tramonto sulla Pineta',
      category: 'Dintorni'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_viavacation/artifacts/lw1c0vgl_IMG_5796.png',
      title: 'Spiaggia di Viareggio',
      category: 'Dintorni'
    }
  ];

  const features = [
    {
      icon: Bed,
      title: '3 Camere',
      description: 'Camere matrimoniali con letti separabili'
    },
    {
      icon: Bath,
      title: '2 Bagni',
      description: 'Bagni completi con doccia'
    },
    {
      icon: Users,
      title: 'Fino a 8 Ospiti',
      description: 'Spazio confortevole per tutta la famiglia'
    },
    {
      icon: MapPin,
      title: '300m dalla Spiaggia',
      description: 'Di fronte alla pineta di Viareggio'
    }
  ];

  const amenities = [
    'Aria condizionata',
    'WiFi ad alta velocità',
    'Cucina completamente attrezzata',
    'Lavatrice',
    'Terrazzo coperto',
    'Ascensore',
    'Parcheggio gratuito',
    'Posto bici coperto',
    'TV',
    'Asciugacapelli',
    'Biancheria inclusa',
    'Prodotti per la pulizia'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <HomeIcon className="h-6 w-6 text-sky-600" />
              <h1 className="text-xl font-bold text-gray-900">Pinetamare</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-sky-600 transition-colors duration-200">Home</a>
              <a href="#features" className="text-gray-600 hover:text-sky-600 transition-colors duration-200">Caratteristiche</a>
              <a href="#gallery" className="text-gray-600 hover:text-sky-600 transition-colors duration-200">Galleria</a>
              <a href="#location" className="text-gray-600 hover:text-sky-600 transition-colors duration-200">Posizione</a>
              <a href="#reviews" className="text-gray-600 hover:text-sky-600 transition-colors duration-200">Recensioni</a>
            </nav>
            <Button className="bg-sky-600 hover:bg-sky-700 text-white transition-all duration-200 hover:shadow-lg">
              <a href="#contact">Contattaci</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50 opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-sky-100 rounded-full">
              <span className="text-sky-700 font-semibold text-sm">Guest Favourite ⭐</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pinetamare Seaside Park
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A soli 300 metri dalla spiaggia e proprio di fronte alla suggestiva pineta di Viareggio.
              Il punto di partenza ideale per le tue vacanze al mare.
            </p>
          </div>

          {/* Image Gallery Slider */}
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl group">
            <div className="aspect-[16/10] relative">
              <img 
                src={images[currentImageIndex].url}
                alt={images[currentImageIndex].alt}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Caratteristiche Principali</h3>
            <p className="text-gray-600 text-lg">Tutto ciò di cui hai bisogno per una vacanza perfetta</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-6">
                    <feature.icon className="h-8 w-8 text-sky-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">L'Appartamento</h3>
          <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              Situato in una delle zone più tranquille e affascinanti della città, a due passi dal 
              <span className="font-semibold text-gray-900"> Grand Hotel Principe di Piemonte</span>, 
              questo luminoso appartamento unisce comfort moderno e posizione imbattibile.
            </p>
            
            <div className="bg-sky-50 rounded-xl p-8 my-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Spazi e Comfort</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-sky-600 rounded-full mt-2 mr-3"></span>
                  <span><strong>3 camere matrimoniali</strong>, di cui 2 con letti separabili su richiesta</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-sky-600 rounded-full mt-2 mr-3"></span>
                  <span><strong>2 bagni completi</strong> con doccia</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-sky-600 rounded-full mt-2 mr-3"></span>
                  <span><strong>Cucina ben attrezzata</strong> per preparare i tuoi pasti</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-sky-600 rounded-full mt-2 mr-3"></span>
                  <span><strong>Ampio soggiorno luminoso</strong> per momenti di relax</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-sky-600 rounded-full mt-2 mr-3"></span>
                  <span><strong>Terrazzo interno coperto</strong> con lavatrice e lavabo</span>
                </li>
              </ul>
            </div>

            <p>
              Il condominio è servito da <strong>ascensore</strong>, ideale anche per chi viaggia con bambini 
              o bagagli pesanti. Inoltre è disponibile un comodo <strong>posto biciclette interno e coperto</strong>, 
              perfetto per esplorare Viareggio in libertà.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Image className="h-8 w-8 text-sky-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Galleria Fotografica</h3>
            <p className="text-gray-600 text-lg">Scopri gli spazi dell'appartamento e i dintorni</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-square"
                onClick={() => setSelectedGalleryImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 bg-sky-600 text-white text-xs font-semibold rounded-full mb-2">
                      {image.category}
                    </span>
                    <h4 className="text-white font-bold text-lg">{image.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-sky-400 transition-colors duration-200"
            onClick={() => setSelectedGalleryImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedGalleryImage.url}
              alt={selectedGalleryImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <span className="inline-block px-3 py-1 bg-sky-600 text-white text-xs font-semibold rounded-full mb-2">
                {selectedGalleryImage.category}
              </span>
              <h3 className="text-white text-2xl font-bold">{selectedGalleryImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Amenities Section */}
      <section className="py-24 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Servizi Inclusi</h3>
            <p className="text-gray-600 text-lg">Tutto per il tuo comfort</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {amenities.map((amenity, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-sky-600" />
                  </div>
                </div>
                <span className="text-gray-700 font-medium">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Posizione Perfetta</h3>
            <p className="text-gray-600 text-lg">Nel cuore di Viareggio, vicino a tutto</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-sky-50 rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Nelle Vicinanze</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-sky-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">300 metri dalla spiaggia</p>
                      <p className="text-gray-600">A pochi passi dal mare cristallino</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-sky-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Di fronte alla Pineta</p>
                      <p className="text-gray-600">Vista sulla suggestiva pineta di Viareggio</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-sky-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Grand Hotel Principe</p>
                      <p className="text-gray-600">A due passi dal prestigioso hotel</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-sky-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Centro città</p>
                      <p className="text-gray-600">Negozi, ristoranti e vita notturna a portata di mano</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11444.537820394595!2d10.234891!3d43.8649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5919c3c3c3c3d%3A0x3c3c3c3c3c3c3c3c!2sViareggio%2C%20LU!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Viareggio"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Cosa Dicono i Nostri Ospiti</h3>
            <p className="text-gray-600 text-lg">Recensioni verificate da Airbnb</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-xl bg-gradient-to-br from-sky-50 to-blue-50">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">J</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Joey</h4>
                        <p className="text-gray-600 text-sm">10 anni su Airbnb</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">Luglio 2025</p>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-sky-200" />
                  <p className="text-gray-700 leading-relaxed text-lg pl-6 italic">
                    Siamo stati a casa di Marco per un mese ed è stato come essere a casa nostra fin dal momento in cui siamo entrati. 
                    Sua madre e suo padre ci hanno accolto e ci hanno mostrato l'intero appartamento. Lo spazio è enorme e molto pulito. 
                    È di dimensioni perfette, ha tutto il necessario per cucinare, vivere e pulire! L'appartamento e la zona sono super 
                    sicuri e perfettamente situati sulla stessa strada di negozi di alimenti biologici, generi alimentari, macelleria 
                    e il supermercato locale è a 10 minuti a piedi. La spiaggia è a 7 minuti a piedi e il parco è raggiungibile in 1 minuto! 
                    Ambiente incantevole e Viareggio è una città splendida. Marco e la sua famiglia sono diventati come una famiglia per noi. 
                    Sono stati sempre molto reattivi e ci hanno contattato per vedere se stavamo bene e se avevamo bisogno di qualcosa. 
                    Le persone più gentili che abbiamo incontrato a Viareggio. Sicuramente tornerò a visitare e soggiornare a casa di Marco. 
                    Grazie Marco per te, i tuoi genitori e la tua bella casa.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-sky-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">M</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Risposta di Marco</p>
                      <p className="text-sm text-gray-600">Luglio 2025</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://www.airbnb.com/rooms/1094849969088520293/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sky-600 hover:text-sky-700 font-semibold transition-colors duration-200"
            >
              <span>Leggi tutte le recensioni su Airbnb</span>
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-sky-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prenota il Tuo Soggiorno
          </h3>
          <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto">
            Assistenza durante il soggiorno per qualsiasi problematica, per garantirti una vacanza senza pensieri!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
            <a 
              href="mailto:pinetamare20@gmail.com"
              className="inline-flex items-center space-x-2 bg-white text-sky-700 px-8 py-4 rounded-lg font-semibold hover:bg-sky-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Mail className="h-5 w-5" />
              <span>Invia Email</span>
            </a>
            <a 
              href="https://m.me/pinetamare"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-sky-700 px-8 py-4 rounded-lg font-semibold hover:bg-sky-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Contattaci su Messenger</span>
            </a>
            <a 
              href="https://airbnb.com/h/pinetamare20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-sky-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-900 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <HomeIcon className="h-5 w-5" />
              <span>Vedi su Airbnb</span>
            </a>
            <a 
              href="https://www.facebook.com/share/1NRNChRbnX/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-sky-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-900 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Facebook className="h-5 w-5" />
              <span>Pagina Facebook</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <HomeIcon className="h-6 w-6 text-sky-400" />
                <h3 className="text-xl font-bold text-white">Pinetamare</h3>
              </div>
              <p className="text-gray-400">
                Il tuo appartamento ideale per le vacanze a Viareggio
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Link Rapidi</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-sky-400 transition-colors duration-200">Home</a></li>
                <li><a href="#features" className="hover:text-sky-400 transition-colors duration-200">Caratteristiche</a></li>
                <li><a href="#location" className="hover:text-sky-400 transition-colors duration-200">Posizione</a></li>
                <li><a href="#contact" className="hover:text-sky-400 transition-colors duration-200">Contatti</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contatti</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-sky-400" />
                  <span>pinetamare20@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-sky-400" />
                  <span>Viareggio, Toscana</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <h5 className="text-sm font-semibold text-white mb-3">Seguici</h5>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/share/1NRNChRbnX/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-sky-600 hover:bg-sky-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5 text-white" />
                  </a>
                  <a 
                    href="https://m.me/pinetamare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-sky-600 hover:bg-sky-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    aria-label="Messenger"
                  >
                    <MessageCircle className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 Pinetamare Seaside Park. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;