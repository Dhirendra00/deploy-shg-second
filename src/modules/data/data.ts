export const gender = [
  { id: 1, label: "Male" },
  { id: 2, label: "Female" },
  { id: 3, label: "Others" },
];

export const service = [
  { id: 1, label: "opd" },
  { id: 2, label: "maternal health" },
];

export const caste = [
  { id: 1, label: "Dalit" },
  { id: 2, label: "Janajati" },
  { id: 3, label: "Madhesi" },
  { id: 4, label: "Muslim" },
  { id: 5, label: "Brahmin" },
  { id: 6, label: "Chettri" },
  { id: 7, label: "Anya" },
];

export const province = [
  {
    id: 1,
    label: "Province 1",
  },
  {
    id: 2,
    label: "Province 2",
  },
  {
    id: 3,
    label: "Province 3",
  },
  {
    id: 4,
    label: "Province 4",
  },
  {
    id: 5,
    label: "Province 5",
  },
  {
    id: 6,
    label: "Province 6",
  },
  {
    id: 7,
    label: "Province 7",
  },
];

export const districtData = [
  {
    code: "703",
    label: "Darchula",
    provinceId: 7,
  },
  {
    code: "705",
    label: "Dadeldhura",
    provinceId: 7,
  },
  {
    code: "707",
    label: "Achham",
    provinceId: 7,
  },
  {
    code: "702",
    label: "Bajhang",
    provinceId: 7,
  },
  {
    code: "701",
    label: "Bajura",
    provinceId: 7,
  },
  {
    code: "704",
    label: "Baitadi",
    provinceId: 7,
  },
  {
    code: "708",
    label: "Kailali",
    provinceId: 7,
  },
  {
    code: "709",
    label: "kanchanpur",
    provinceId: 7,
  },
  {
    code: "706",
    label: "Doti",
    provinceId: 7,
  },
];

export const palikaData = [
  {
    code: "70601",
    label: "Purbichouki Rural Municipality",
    districtCode: "706",
  },
  {
    code: "70602",
    label: "Sayal Rural Municipality",
    districtCode: "706",
  },
  {
    code: "70603",
    label: "Aadarsha Rural Municipality",
    districtCode: "706",
  },
  {
    code: "70604",
    label: "Shikhar Municipality",
    districtCode: "706",
  },
  {
    code: "70605",
    label: "Dipayal Silgadhi Municipality",
    districtCode: "706",
  },
  {
    code: "70606",
    label: "K.I. Singh Rural Municipality",
    districtCode: "706",
  },
  {
    code: "70607",
    label: "Bogatan Rural Municipality",
    districtCode: "706",
  },
  {
    code: "70608",
    label: "Badi Kedar Rural Municipality",
    districtCode: "706",
  },
  {
    code: "70609",
    label: "Jorayal Rural Municipality",
    districtCode: "706",
  },
  {
    code: "70109",
    label: "Tribeni Municipality",
    districtCode: "701",
  },
  {
    code: "70108",
    label: "Budhiganga Municipality",
    districtCode: "701",
  },
  {
    code: "70107",
    label: "Chhededaha Rural Municip",
    districtCode: "701",
  },
  {
    code: "70106",
    label: "Badimalika Municipality",
    districtCode: "701",
  },
  {
    code: "70105",
    label: "Pandab Gufa Rural Municipality",
    districtCode: "701",
  },
  {
    code: "70104",
    label: "Swami Kartik Rural Municipality",
    districtCode: "701",
  },
  {
    code: "70103",
    label: "Budhinanda Municipality",
    districtCode: "701",
  },
  {
    code: "70102",
    label: "Gaumul Rural Municipality",
    districtCode: "701",
  },
  {
    code: "70101",
    label: "Himali Rural Municipality",
    districtCode: "701",
  },
];

const ward = Array.from({ length: 25 }, (_, i) => `${i + 1}`);
export const wardData = ward.map((element) => ({
  id: element,
  label: element,
}));
