export interface Watch {
  id: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  description: string
  features: string[]
  specifications: {
    movement: string
    case: string
    diameter: string
    waterResistance: string
    strap: string
  }
  inStock: boolean
  rating: number
  reviewCount: number
}

export const watches: Watch[] = [
  {
    id: '1',
    name: 'Submariner Date',
    brand: 'Luxury Swiss',
    price: 12500,
    originalPrice: 13500,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A legendary diving watch with exceptional water resistance and timeless design.',
    features: ['Automatic Movement', 'Ceramic Bezel', 'Luminous Markers', 'Screw-down Crown'],
    specifications: {
      movement: 'Automatic, Self-winding',
      case: 'Oystersteel',
      diameter: '41mm',
      waterResistance: '300m (1,000ft)',
      strap: 'Oystersteel bracelet'
    },
    inStock: true,
    rating: 4.9,
    reviewCount: 247
  },
  {
    id: '2',
    name: 'Speedmaster Professional',
    brand: 'Omega Heritage',
    price: 6250,
    image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The iconic moonwatch worn by astronauts, featuring a manual-wind chronograph movement.',
    features: ['Manual Wind', 'Chronograph', 'Tachymeter', 'Sapphire Crystal'],
    specifications: {
      movement: 'Manual-winding chronograph',
      case: 'Stainless Steel',
      diameter: '42mm',
      waterResistance: '50m (165ft)',
      strap: 'Leather with deployment clasp'
    },
    inStock: true,
    rating: 4.8,
    reviewCount: 189
  },
  {
    id: '3',
    name: 'GMT-Master II',
    brand: 'Luxury Swiss',
    price: 15750,
    image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Perfect for world travelers with dual time zone functionality and striking design.',
    features: ['GMT Function', 'Ceramic Bezel', '48-hour Power Reserve', 'Oyster Bracelet'],
    specifications: {
      movement: 'Automatic, Self-winding',
      case: 'Oystersteel and Gold',
      diameter: '40mm',
      waterResistance: '100m (330ft)',
      strap: 'Jubilee bracelet'
    },
    inStock: false,
    rating: 4.9,
    reviewCount: 156
  },
  {
    id: '4',
    name: 'Seamaster Planet Ocean',
    brand: 'Omega Heritage',
    price: 5200,
    image: 'https://images.pexels.com/photos/1034063/pexels-photo-1034063.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Professional diving watch with exceptional depth rating and co-axial movement.',
    features: ['Co-Axial Movement', 'Helium Escape Valve', 'Ceramic Bezel', 'Master Chronometer'],
    specifications: {
      movement: 'Automatic, Co-Axial',
      case: 'Stainless Steel',
      diameter: '43.5mm',
      waterResistance: '600m (2,000ft)',
      strap: 'Stainless steel bracelet'
    },
    inStock: true,
    rating: 4.7,
    reviewCount: 203
  },
  {
    id: '5',
    name: 'Daytona Racing',
    brand: 'Luxury Swiss',
    price: 28500,
    originalPrice: 30000,
    image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The ultimate racing chronograph with exceptional precision and motorsport heritage.',
    features: ['Racing Chronograph', 'Ceramic Bezel', 'In-house Movement', 'Oyster Bracelet'],
    specifications: {
      movement: 'Automatic chronograph',
      case: 'Oystersteel',
      diameter: '40mm',
      waterResistance: '100m (330ft)',
      strap: 'Oystersteel Oyster bracelet'
    },
    inStock: true,
    rating: 5.0,
    reviewCount: 89
  },
  {
    id: '6',
    name: 'Constellation Co-Axial',
    brand: 'Omega Heritage',
    price: 4800,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Elegant dress watch combining precision with sophisticated design elements.',
    features: ['Co-Axial Escapement', 'Diamond Hour Markers', 'Date Display', 'Sapphire Crystal'],
    specifications: {
      movement: 'Automatic, Co-Axial',
      case: 'Stainless Steel and Gold',
      diameter: '38mm',
      waterResistance: '100m (330ft)',
      strap: 'Leather with gold clasp'
    },
    inStock: true,
    rating: 4.6,
    reviewCount: 124
  },
  {
    id: '7',
    name: 'Explorer II',
    brand: 'Luxury Swiss',
    price: 9250,
    image: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Built for extreme conditions with 24-hour display and exceptional durability.',
    features: ['24-Hour Hand', 'Paraflex Shock Absorbers', 'Chromalight Display', 'Oyster Bracelet'],
    specifications: {
      movement: 'Automatic, Self-winding',
      case: 'Oystersteel',
      diameter: '42mm',
      waterResistance: '100m (330ft)',
      strap: 'Oystersteel Oyster bracelet'
    },
    inStock: true,
    rating: 4.8,
    reviewCount: 167
  },
  {
    id: '8',
    name: 'De Ville Prestige',
    brand: 'Omega Heritage',
    price: 3200,
    image: 'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Classic elegance meets modern precision in this refined timepiece.',
    features: ['Quartz Movement', 'Roman Numerals', 'Date Window', 'Scratch-resistant Sapphire'],
    specifications: {
      movement: 'Swiss Quartz',
      case: 'Stainless Steel',
      diameter: '36.8mm',
      waterResistance: '30m (100ft)',
      strap: 'Leather with deployment clasp'
    },
    inStock: true,
    rating: 4.5,
    reviewCount: 95
  }
]

export function getWatchById(id: string): Watch | undefined {
  return watches.find(watch => watch.id === id)
}

export function getWatchesByBrand(brand: string): Watch[] {
  return watches.filter(watch => watch.brand === brand)
}