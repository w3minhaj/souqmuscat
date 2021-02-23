export const addresses = [
  {
    city: 'Muscat',
    areas: [
      'Mabela',
      'Al Khoud',
      'Al Hail',
      'Mawaleh',
      'Bawsher',
      'Al Ansab',
      'Ghala',
    ],
  },
  {
    city: 'Al Batinah',
    areas: [
      'Barka',
      'Suwaiq',
      'Musanna',
      'Rustaq',
      'Saham',
      'Al Khaburah',
      'Sohar',
      'Shinas',
      'Liwa',
    ],
  },
  {
    city: 'Ad Dakhiliyah',
    areas: [
      'Fanja',
      'BidBid',
      'Samail',
      'Izki',
      'Nizwa',
      'Bahla',
      'Al Hamra',
      'Adam',
    ],
  },
  {
    city: 'Ad Dhahirah',
    areas: ['Ibri', 'Yanqul', 'Dhank'],
  },
  {
    city: 'Ash Sharqiyah',
    areas: [
      'Ibra',
      'Bidiya',
      'Wadi Bani Khalid',
      'Al Qabil',
      'Al Mudaybi',
      'Sinaw',
      'Samad Al Shan',
      'Dema Wa Thaieen',
      'Sur',
      'Jalan Bani Bu Ali',
      'Jalan Bani Bu Hassan',
      'Al-Kamil Wal-Wafi',
      'Al-Ashkharah',
    ],
  },
  {
    city: 'Musandam',
    areas: ['Khasab', 'Dibba'],
  },
  {
    city: 'Others',
    areas: ['Salalah', 'Duqm', 'Al Buraimi', 'Mahout', 'Masirah Island'],
  },
]

export const cities = addresses.map((x) => x.city)

const areasArray = []

addresses.forEach((x) => {
  x.areas.forEach((y) => areasArray.push(y))
})

export const areas = areasArray
