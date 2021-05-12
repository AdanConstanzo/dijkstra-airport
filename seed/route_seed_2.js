var Routes = require('../models/Routes');

var mongoose = require("mongoose");

var connect = "mongodb://admin:supportftw117@ds155490.mlab.com:55490/dijkstra-airplanes"
mongoose.connect(connect);
console.log("Working.");

var routes = [

new Routes(
{
    From:"CTA",
    To:"NAP",
    Distance:386.032,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CTA",
    To:"NAP",
    Distance:386.032,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"CTA",
    To:"NAP",
    Distance:386.032,
    Airport:"easyJet"
}),
new Routes(
{
    From:"CTA",
    To:"ORY",
    Distance:1617.79,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"CTA",
    To:"OTP",
    Distance:1215.19,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"CTA",
    To:"PSA",
    Distance:795.738,
    Airport:"Air One"
}),
new Routes(
{
    From:"CTA",
    To:"PSA",
    Distance:795.738,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CTA",
    To:"STR",
    Distance:1334.16,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"CTA",
    To:"STR",
    Distance:1334.16,
    Airport:"Air One"
}),
new Routes(
{
    From:"CTA",
    To:"STR",
    Distance:1334.16,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CTA",
    To:"STR",
    Distance:1334.16,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"CTA",
    To:"STR",
    Distance:1334.16,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"CTA",
    To:"SVO",
    Distance:2646.89,
    Airport:"Air One"
}),
new Routes(
{
    From:"CTA",
    To:"SVO",
    Distance:2646.89,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CTA",
    To:"TRN",
    Distance:1058.71,
    Airport:"Air One"
}),
new Routes(
{
    From:"CTA",
    To:"TRN",
    Distance:1058.71,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CTA",
    To:"TRN",
    Distance:1058.71,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"CTA",
    To:"TRN",
    Distance:1058.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CTA",
    To:"TSF",
    Distance:940.439,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CTA",
    To:"TXL",
    Distance:1683.93,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"CTA",
    To:"TXL",
    Distance:1683.93,
    Airport:"Air One"
}),
new Routes(
{
    From:"CTA",
    To:"TXL",
    Distance:1683.93,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CTA",
    To:"TXL",
    Distance:1683.93,
    Airport:"Finnair"
}),
new Routes(
{
    From:"CTA",
    To:"TXL",
    Distance:1683.93,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"CTA",
    To:"TXL",
    Distance:1683.93,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"CTA",
    To:"VCE",
    Distance:921.841,
    Airport:"Air One"
}),
new Routes(
{
    From:"CTA",
    To:"VCE",
    Distance:921.841,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"CTA",
    To:"VCE",
    Distance:921.841,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CTA",
    To:"VIE",
    Distance:1189.78,
    Airport:"Air One"
}),
new Routes(
{
    From:"CTA",
    To:"VIE",
    Distance:1189.78,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CTA",
    To:"VIE",
    Distance:1189.78,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"CTA",
    To:"VRN",
    Distance:947.608,
    Airport:"Air One"
}),
new Routes(
{
    From:"CTA",
    To:"VRN",
    Distance:947.608,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CTA",
    To:"VRN",
    Distance:947.608,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"CTA",
    To:"ZRH",
    Distance:1232.48,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"CTA",
    To:"ZRH",
    Distance:1232.48,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"CTA",
    To:"ZRH",
    Distance:1232.48,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"CTC",
    To:"AEP",
    Distance:960.123,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"CTG",
    To:"ADZ",
    Distance:716.031,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"CTG",
    To:"BOG",
    Distance:655.848,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"CTG",
    To:"BOG",
    Distance:655.848,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"CTG",
    To:"BOG",
    Distance:655.848,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"CTG",
    To:"CLO",
    Distance:773.111,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"CTG",
    To:"FLL",
    Distance:1805.19,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"CTG",
    To:"JFK",
    Distance:3362.12,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"CTG",
    To:"MDE",
    Distance:475.777,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"CTG",
    To:"MIA",
    Distance:1779.48,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"CTG",
    To:"MIA",
    Distance:1779.48,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CTG",
    To:"MIA",
    Distance:1779.48,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CTG",
    To:"PTY",
    Distance:450.706,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"CTL",
    To:"BNE",
    Distance:688.194,
    Airport:"Qantas"
}),
new Routes(
{
    From:"CTL",
    To:"RMA",
    Distance:250.494,
    Airport:"Qantas"
}),
new Routes(
{
    From:"CTL",
    To:"TWB",
    Distance:574.112,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"CTL",
    To:"ULP",
    Distance:201.164,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"CTM",
    To:"MEX",
    Distance:1134.47,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"CTS",
    To:"AOJ",
    Distance:241.615,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"AXT",
    Distance:372.328,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"AXT",
    Distance:372.328,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"BKK",
    Distance:5073.45,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"CTS",
    To:"FKS",
    Distance:626.15,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"FKS",
    Distance:626.15,
    Airport:"Hokkaido International Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"FSZ",
    Distance:937.505,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"FSZ",
    Distance:937.505,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"FUK",
    Distance:1415.08,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"FUK",
    Distance:1415.08,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"FUK",
    Distance:1415.08,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"GUM",
    Distance:3270.7,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"GUM",
    Distance:3270.7,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"HIJ",
    Distance:1198.96,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"HIJ",
    Distance:1198.96,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"HKD",
    Distance:132.743,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"HKG",
    Distance:3429,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"CTS",
    To:"HKG",
    Distance:3429,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"HNA",
    Distance:375.036,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"HND",
    Distance:819.84,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"HND",
    Distance:819.84,
    Airport:"Hokkaido International Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"HND",
    Distance:819.84,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"HND",
    Distance:819.84,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"HNL",
    Distance:6027.95,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"IBR",
    Distance:741.349,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"ICN",
    Distance:1421.19,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"ICN",
    Distance:1421.19,
    Airport:"Jin Air"
}),
new Routes(
{
    From:"CTS",
    To:"ICN",
    Distance:1421.19,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"CTS",
    To:"ICN",
    Distance:1421.19,
    Airport:"Tway Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"ITM",
    Distance:1040.02,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"ITM",
    Distance:1040.02,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"ITM",
    Distance:1040.02,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"KIJ",
    Distance:620.154,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"KIJ",
    Distance:620.154,
    Airport:"Hokkaido International Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"KIJ",
    Distance:620.154,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"KIX",
    Distance:1082.73,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"KIX",
    Distance:1082.73,
    Airport:"Genesis"
}),
new Routes(
{
    From:"CTS",
    To:"KIX",
    Distance:1082.73,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"KIX",
    Distance:1082.73,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"CTS",
    To:"KMQ",
    Distance:841.336,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"KMQ",
    Distance:841.336,
    Airport:"Hokkaido International Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"KUH",
    Distance:205.795,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"MMB",
    Distance:234.68,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"MMB",
    Distance:234.68,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"MMJ",
    Distance:802.682,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"NGO",
    Distance:976.379,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"NGO",
    Distance:976.379,
    Airport:"Genesis"
}),
new Routes(
{
    From:"CTS",
    To:"NGO",
    Distance:976.379,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"NGO",
    Distance:976.379,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"NRT",
    Distance:787.563,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"NRT",
    Distance:787.563,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"NRT",
    Distance:787.563,
    Airport:"Arrow Air"
}),
new Routes(
{
    From:"CTS",
    To:"NRT",
    Distance:787.563,
    Airport:"Genesis"
}),
new Routes(
{
    From:"CTS",
    To:"NRT",
    Distance:787.563,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"NRT",
    Distance:787.563,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"OKA",
    Distance:2241.73,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"OKJ",
    Distance:1119.87,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"OKJ",
    Distance:1119.87,
    Airport:"Hokkaido International Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"PEK",
    Distance:2106.68,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTS",
    To:"PEK",
    Distance:2106.68,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"PUS",
    Distance:1386.2,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"CTS",
    To:"PVG",
    Distance:2180.54,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"PVG",
    Distance:2180.54,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"SDJ",
    Distance:519.592,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"SDJ",
    Distance:519.592,
    Airport:"Hokkaido International Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"SDJ",
    Distance:519.592,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"SDJ",
    Distance:519.592,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"SDJ",
    Distance:519.592,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"SHB",
    Distance:279.567,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"TOY",
    Distance:782.403,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"TOY",
    Distance:782.403,
    Airport:"Hokkaido International Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"TPE",
    Distance:2712.33,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"TPE",
    Distance:2712.33,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"TPE",
    Distance:2712.33,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"CTS",
    To:"TPE",
    Distance:2712.33,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"CTS",
    To:"UKB",
    Distance:1064.48,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"UKB",
    Distance:1064.48,
    Airport:"Hokkaido International Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"UKB",
    Distance:1064.48,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"UUS",
    Distance:464.475,
    Airport:"Sat Airlines"
}),
new Routes(
{
    From:"CTS",
    To:"WKJ",
    Distance:292.456,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTS",
    To:"YGJ",
    Distance:1088.68,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"AKU",
    Distance:2427.45,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"AKU",
    Distance:2427.45,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"AMS",
    Distance:7942.06,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"AMS",
    Distance:7942.06,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"AUH",
    Distance:4871.83,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CTU",
    To:"AUH",
    Distance:4871.83,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"CTU",
    To:"AUH",
    Distance:4871.83,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"BAV",
    Distance:1236.63,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"BHY",
    Distance:1137.74,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"BKK",
    Distance:1907.29,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"BKK",
    Distance:1907.29,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"CTU",
    To:"BOM",
    Distance:3372.02,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"BPX",
    Distance:654.676,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"BPX",
    Distance:654.676,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"CAN",
    Distance:1222.6,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"CAN",
    Distance:1222.6,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"CAN",
    Distance:1222.6,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"CAN",
    Distance:1222.6,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"CTU",
    To:"CAN",
    Distance:1222.6,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"CAN",
    Distance:1222.6,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"CGO",
    Distance:1025.01,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"CGO",
    Distance:1025.01,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"CGO",
    Distance:1025.01,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"CGO",
    Distance:1025.01,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"CGO",
    Distance:1025.01,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"CGQ",
    Distance:2356.2,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"CGQ",
    Distance:2356.2,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"CIH",
    Distance:1058.94,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"CIH",
    Distance:1058.94,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"CKG",
    Distance:276.14,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"CSX",
    Distance:936.53,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"CSX",
    Distance:936.53,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"CSX",
    Distance:936.53,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"CSX",
    Distance:936.53,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"CSX",
    Distance:936.53,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"CSX",
    Distance:936.53,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"CZX",
    Distance:1504.75,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"CZX",
    Distance:1504.75,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"CZX",
    Distance:1504.75,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"DAD",
    Distance:1673.02,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"DCY",
    Distance:400.248,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"DCY",
    Distance:400.248,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"DCY",
    Distance:400.248,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"DCY",
    Distance:400.248,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"DIG",
    Distance:517.33,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"DLU",
    Distance:653.321,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"DOH",
    Distance:5135.4,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"CTU",
    To:"DSN",
    Distance:1169.08,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"FOC",
    Distance:1621.82,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"FOC",
    Distance:1621.82,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"FOC",
    Distance:1621.82,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"FOC",
    Distance:1621.82,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"FRA",
    Distance:7812.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"FRA",
    Distance:7812.48,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"CTU",
    To:"HAK",
    Distance:1351.83,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"HAK",
    Distance:1351.83,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HAK",
    Distance:1351.83,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HAK",
    Distance:1351.83,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HAK",
    Distance:1351.83,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HAN",
    Distance:1056.93,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HDG",
    Distance:1173.88,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HET",
    Distance:1344.19,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"HET",
    Distance:1344.19,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HET",
    Distance:1344.19,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HFE",
    Distance:1276.34,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"HFE",
    Distance:1276.34,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HFE",
    Distance:1276.34,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HFE",
    Distance:1276.34,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HFE",
    Distance:1276.34,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HGH",
    Distance:1580.26,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"HGH",
    Distance:1580.26,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HGH",
    Distance:1580.26,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HGH",
    Distance:1580.26,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"HGH",
    Distance:1580.26,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HGH",
    Distance:1580.26,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HGH",
    Distance:1580.26,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HGH",
    Distance:1580.26,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"CTU",
    To:"HGH",
    Distance:1580.26,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HKG",
    Distance:1351.62,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"HKG",
    Distance:1351.62,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"CTU",
    To:"HKG",
    Distance:1351.62,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"CTU",
    To:"HKG",
    Distance:1351.62,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HKG",
    Distance:1351.62,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HKG",
    Distance:1351.62,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HKT",
    Distance:2565.72,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"HRB",
    Distance:2554.66,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"HRB",
    Distance:2554.66,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"ICN",
    Distance:2204.16,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"ICN",
    Distance:2204.16,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"ICN",
    Distance:2204.16,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"INC",
    Distance:898.815,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"INC",
    Distance:898.815,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"INC",
    Distance:898.815,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"JDZ",
    Distance:1281.13,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"JDZ",
    Distance:1281.13,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"JGS",
    Distance:1128.12,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"JHG",
    Distance:1008.02,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"JHG",
    Distance:1008.02,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"JIQ",
    Distance:484.593,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"JJN",
    Distance:1576.84,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"JNG",
    Distance:1289.81,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"JZH",
    Distance:254.583,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"JZH",
    Distance:254.583,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"CTU",
    To:"JZH",
    Distance:254.583,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"JZH",
    Distance:254.583,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"JZH",
    Distance:254.583,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"JZH",
    Distance:254.583,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"JZH",
    Distance:254.583,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KGT",
    Distance:217.349,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KHG",
    Distance:2716.46,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"KHG",
    Distance:2716.46,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KHH",
    Distance:1855.02,
    Airport:"Primaris Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KHI",
    Distance:3658.38,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"KHN",
    Distance:1169.28,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"KHN",
    Distance:1169.28,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KHN",
    Distance:1169.28,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KHN",
    Distance:1169.28,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KMG",
    Distance:632.32,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"KMG",
    Distance:632.32,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"CTU",
    To:"KMG",
    Distance:632.32,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KMG",
    Distance:632.32,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KMG",
    Distance:632.32,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"KMG",
    Distance:632.32,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KMG",
    Distance:632.32,
    Airport:"KSY"
}),
new Routes(
{
    From:"CTU",
    To:"KMG",
    Distance:632.32,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KMG",
    Distance:632.32,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KOW",
    Distance:1196.59,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KRL",
    Distance:2015.15,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"KRL",
    Distance:2015.15,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KTM",
    Distance:1831.33,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"KUL",
    Distance:3103.81,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"CTU",
    To:"KWE",
    Distance:528.598,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"KWE",
    Distance:528.598,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KWE",
    Distance:528.598,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"KWE",
    Distance:528.598,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KWE",
    Distance:528.598,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KWE",
    Distance:528.598,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"CTU",
    To:"KWL",
    Distance:844.478,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"KWL",
    Distance:844.478,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KWL",
    Distance:844.478,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KWL",
    Distance:844.478,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"KWL",
    Distance:844.478,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"LHR",
    Distance:8301.61,
    Airport:"British Airways"
}),
new Routes(
{
    From:"CTU",
    To:"LHW",
    Distance:616.611,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"LHW",
    Distance:616.611,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"LHW",
    Distance:616.611,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"LHW",
    Distance:616.611,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"LJG",
    Distance:547.591,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"LJG",
    Distance:547.591,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"LJG",
    Distance:547.591,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"CTU",
    To:"LJG",
    Distance:547.591,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"LJG",
    Distance:547.591,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"LUM",
    Distance:869.843,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"LXA",
    Distance:1263.36,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"LXA",
    Distance:1263.36,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"LXA",
    Distance:1263.36,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"LXA",
    Distance:1263.36,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"LXA",
    Distance:1263.36,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"CTU",
    To:"LYG",
    Distance:1498.75,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"LZH",
    Distance:888.902,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"LZY",
    Distance:936.629,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"LZY",
    Distance:936.629,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"LZY",
    Distance:936.629,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"LZY",
    Distance:936.629,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"CTU",
    To:"MEL",
    Distance:8697.46,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"MFM",
    Distance:1341.05,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"MFM",
    Distance:1341.05,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"CTU",
    To:"NAY",
    Distance:1522.26,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"NAY",
    Distance:1522.26,
    Airport:"China United"
}),
new Routes(
{
    From:"CTU",
    To:"NGB",
    Distance:1683.56,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"NGB",
    Distance:1683.56,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"NGB",
    Distance:1683.56,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"NKG",
    Distance:1423.95,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"NKG",
    Distance:1423.95,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"NKG",
    Distance:1423.95,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"NKG",
    Distance:1423.95,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"NKG",
    Distance:1423.95,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"NNG",
    Distance:980.53,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"NNG",
    Distance:980.53,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"NNG",
    Distance:980.53,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"NNY",
    Distance:861.446,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"NRT",
    Distance:3420.27,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"NRT",
    Distance:3420.27,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTU",
    To:"PEK",
    Distance:1556.03,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"PEK",
    Distance:1556.03,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTU",
    To:"PEK",
    Distance:1556.03,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"PEK",
    Distance:1556.03,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"PEK",
    Distance:1556.03,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"PEK",
    Distance:1556.03,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"PVG",
    Distance:1703.9,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"PVG",
    Distance:1703.9,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"CTU",
    To:"PVG",
    Distance:1703.9,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"PVG",
    Distance:1703.9,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"PVG",
    Distance:1703.9,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"PVG",
    Distance:1703.9,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"PVG",
    Distance:1703.9,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"PZI",
    Distance:495.617,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"PZI",
    Distance:495.617,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"PZI",
    Distance:495.617,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SHA",
    Distance:1659.08,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"SHA",
    Distance:1659.08,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SHA",
    Distance:1659.08,
    Airport:"China SSS"
}),
new Routes(
{
    From:"CTU",
    To:"SHA",
    Distance:1659.08,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SHA",
    Distance:1659.08,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SHA",
    Distance:1659.08,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SHA",
    Distance:1659.08,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"CTU",
    To:"SHE",
    Distance:2106.97,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"SHE",
    Distance:2106.97,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SHE",
    Distance:2106.97,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SIN",
    Distance:3250.05,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"SIN",
    Distance:3250.05,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"CTU",
    To:"SIN",
    Distance:3250.05,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SJW",
    Distance:1304.29,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SJW",
    Distance:1304.29,
    Airport:"China SSS"
}),
new Routes(
{
    From:"CTU",
    To:"SJW",
    Distance:1304.29,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SWA",
    Distance:1491.5,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"SWA",
    Distance:1491.5,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SWA",
    Distance:1491.5,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SYX",
    Distance:1472.19,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"SYX",
    Distance:1472.19,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"SYX",
    Distance:1472.19,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"CTU",
    To:"SYX",
    Distance:1472.19,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SYX",
    Distance:1472.19,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SZX",
    Distance:1318.25,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"SZX",
    Distance:1318.25,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SZX",
    Distance:1318.25,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"SZX",
    Distance:1318.25,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SZX",
    Distance:1318.25,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SZX",
    Distance:1318.25,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"SZX",
    Distance:1318.25,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"CTU",
    To:"TAO",
    Distance:1647.73,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"TAO",
    Distance:1647.73,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TAO",
    Distance:1647.73,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TAO",
    Distance:1647.73,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TAO",
    Distance:1647.73,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TCZ",
    Distance:825.727,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"CTU",
    To:"TNA",
    Distance:1409.94,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"TNA",
    Distance:1409.94,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TNA",
    Distance:1409.94,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TNA",
    Distance:1409.94,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"TNA",
    Distance:1409.94,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TNA",
    Distance:1409.94,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TNA",
    Distance:1409.94,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TNA",
    Distance:1409.94,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TPE",
    Distance:1804.04,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"TPE",
    Distance:1804.04,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TPE",
    Distance:1804.04,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"CTU",
    To:"TSA",
    Distance:1833.9,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TSN",
    Distance:1545.6,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"TSN",
    Distance:1545.6,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"CTU",
    To:"TSN",
    Distance:1545.6,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"TSN",
    Distance:1545.6,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"CTU",
    To:"TSN",
    Distance:1545.6,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TSN",
    Distance:1545.6,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TXN",
    Distance:1378.02,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TXN",
    Distance:1378.02,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TYN",
    Distance:1127.38,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"TYN",
    Distance:1127.38,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TYN",
    Distance:1127.38,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TYN",
    Distance:1127.38,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"TYN",
    Distance:1127.38,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"URC",
    Distance:2071.5,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"URC",
    Distance:2071.5,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"URC",
    Distance:2071.5,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"URC",
    Distance:2071.5,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"URC",
    Distance:2071.5,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"UYN",
    Distance:1005.81,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"UYN",
    Distance:1005.81,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"WNZ",
    Distance:1665.03,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"WNZ",
    Distance:1665.03,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"WNZ",
    Distance:1665.03,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"WNZ",
    Distance:1665.03,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"WUH",
    Distance:981.182,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"WUH",
    Distance:981.182,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"WUH",
    Distance:981.182,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"WUH",
    Distance:981.182,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"WUH",
    Distance:981.182,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"WUH",
    Distance:981.182,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"WUH",
    Distance:981.182,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"WUX",
    Distance:1572.15,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"WUX",
    Distance:1572.15,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"WUX",
    Distance:1572.15,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"WUX",
    Distance:1572.15,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"WXN",
    Distance:427.222,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"XIC",
    Distance:334.846,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"XIC",
    Distance:334.846,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"XIC",
    Distance:334.846,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"XIY",
    Distance:622.732,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"XIY",
    Distance:622.732,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"XIY",
    Distance:622.732,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"XIY",
    Distance:622.732,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"CTU",
    To:"XIY",
    Distance:622.732,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"XIY",
    Distance:622.732,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"XIY",
    Distance:622.732,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"XIY",
    Distance:622.732,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"XMN",
    Distance:1548.83,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"XMN",
    Distance:1548.83,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"XMN",
    Distance:1548.83,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"XMN",
    Distance:1548.83,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"XMN",
    Distance:1548.83,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"CTU",
    To:"XMN",
    Distance:1548.83,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"XNN",
    Distance:684.576,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"XNN",
    Distance:684.576,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"XNN",
    Distance:684.576,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"XNN",
    Distance:684.576,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"XNN",
    Distance:684.576,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"CTU",
    To:"XUZ",
    Distance:1297.62,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"YCU",
    Distance:822.651,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"YCU",
    Distance:822.651,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"YIH",
    Distance:717.001,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"YIN",
    Distance:2479.7,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"YIN",
    Distance:2479.7,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"YIW",
    Distance:1554.27,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"YIW",
    Distance:1554.27,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"YNT",
    Distance:1772.82,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"YNT",
    Distance:1772.82,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"YNT",
    Distance:1772.82,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"YTY",
    Distance:1508.57,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"ZHA",
    Distance:1222.2,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"ZHA",
    Distance:1222.2,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CTU",
    To:"ZUH",
    Distance:1337.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"CTU",
    To:"ZUH",
    Distance:1337.48,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CUC",
    To:"BOG",
    Distance:401.664,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"CUC",
    To:"BOG",
    Distance:401.664,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"CUC",
    To:"MDE",
    Distance:376.379,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"CUC",
    To:"PTY",
    Distance:766.333,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"CUE",
    To:"GYE",
    Distance:128.852,
    Airport:"TAME"
}),
new Routes(
{
    From:"CUE",
    To:"UIO",
    Distance:310.536,
    Airport:"Aerolane"
}),
new Routes(
{
    From:"CUE",
    To:"UIO",
    Distance:310.536,
    Airport:"TAME"
}),
new Routes(
{
    From:"CUF",
    To:"AHO",
    Distance:438.728,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CUF",
    To:"CAG",
    Distance:600.603,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CUF",
    To:"CMN",
    Distance:1804.26,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"CUF",
    To:"OTP",
    Distance:1460.93,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"CUF",
    To:"TPS",
    Distance:842.182,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CUK",
    To:"BZE",
    Distance:36.4197,
    Airport:"Midwest Airlines (Egypt)"
}),
new Routes(
{
    From:"CUK",
    To:"SPR",
    Distance:20.964,
    Airport:"Midwest Airlines (Egypt)"
}),
new Routes(
{
    From:"CUL",
    To:"GDL",
    Distance:636.395,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUL",
    To:"GDL",
    Distance:636.395,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUL",
    To:"HMO",
    Distance:597.764,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUL",
    To:"HMO",
    Distance:597.764,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CUL",
    To:"LAP",
    Distance:302.325,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"CUL",
    To:"MEX",
    Distance:1048.54,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUL",
    To:"MEX",
    Distance:1048.54,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"CUL",
    To:"MEX",
    Distance:1048.54,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUL",
    To:"MTY",
    Distance:749.28,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUL",
    To:"MTY",
    Distance:749.28,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"CUL",
    To:"MTY",
    Distance:749.28,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CUL",
    To:"MTY",
    Distance:749.28,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUL",
    To:"SJD",
    Distance:290.263,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"CUL",
    To:"TIJ",
    Distance:1266.2,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUL",
    To:"TIJ",
    Distance:1266.2,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"CUL",
    To:"TIJ",
    Distance:1266.2,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUM",
    To:"CCS",
    Distance:313.137,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"CUN",
    To:"AGU",
    Distance:1599.95,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUN",
    To:"AMS",
    Distance:8280.89,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"CUN",
    To:"ATL",
    Distance:1421.66,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUN",
    To:"ATL",
    Distance:1421.66,
    Airport:"Air France"
}),
new Routes(
{
    From:"CUN",
    To:"ATL",
    Distance:1421.66,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"CUN",
    To:"ATL",
    Distance:1421.66,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CUN",
    To:"ATL",
    Distance:1421.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CUN",
    To:"ATL",
    Distance:1421.66,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"ATL",
    Distance:1421.66,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"ATL",
    Distance:1421.66,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"CUN",
    To:"ATL",
    Distance:1421.66,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"CUN",
    To:"AUS",
    Distance:1484.31,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"CUN",
    To:"AUS",
    Distance:1484.31,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"BJX",
    Distance:1515.33,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUN",
    To:"BOG",
    Distance:2277.75,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"CUN",
    To:"BOG",
    Distance:2277.75,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"BOS",
    Distance:2796.18,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUN",
    To:"BOS",
    Distance:2796.18,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"BOS",
    Distance:2796.18,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CUN",
    To:"BOS",
    Distance:2796.18,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"CUN",
    To:"BOS",
    Distance:2796.18,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CUN",
    To:"BWI",
    Distance:2239.54,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"CUN",
    To:"CDG",
    Distance:8218.82,
    Airport:"XL Airways France"
}),
new Routes(
{
    From:"CUN",
    To:"CLE",
    Distance:2314.39,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"CLE",
    Distance:2314.39,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"CLT",
    Distance:1679.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"CLT",
    Distance:1679.46,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CUN",
    To:"CUU",
    Distance:2102.24,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUN",
    To:"CVG",
    Distance:2013.95,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CUN",
    To:"CZM",
    Distance:57.3906,
    Airport:"Mongolian International Air Lines "
}),
new Routes(
{
    From:"CUN",
    To:"DEN",
    Distance:2689.26,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"CUN",
    To:"DEN",
    Distance:2689.26,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"DEN",
    Distance:2689.26,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"DFW",
    Distance:1657.19,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"DFW",
    Distance:1657.19,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"DFW",
    Distance:1657.19,
    Airport:"Sun Country Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"DFW",
    Distance:1657.19,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CUN",
    To:"DTW",
    Distance:2377.6,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUN",
    To:"DTW",
    Distance:2377.6,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CUN",
    To:"DTW",
    Distance:2377.6,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"DUS",
    Distance:8443.69,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"CUN",
    To:"EWR",
    Distance:2493.33,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"EZE",
    Distance:6894.65,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"CUN",
    To:"FCO",
    Distance:9183.97,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"FCO",
    Distance:9183.97,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"CUN",
    To:"FLL",
    Distance:884.766,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"CUN",
    To:"FLL",
    Distance:884.766,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"FRA",
    Distance:8604.49,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"CUN",
    To:"GDL",
    Distance:1708.73,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"CUN",
    To:"GDL",
    Distance:1708.73,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUN",
    To:"HAV",
    Distance:509.165,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUN",
    To:"HAV",
    Distance:509.165,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"CUN",
    To:"HMO",
    Distance:2588.02,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUN",
    To:"IAD",
    Distance:2185.07,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"IAH",
    Distance:1307.2,
    Airport:"Air China"
}),
new Routes(
{
    From:"CUN",
    To:"IAH",
    Distance:1307.2,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"IND",
    Distance:2077.95,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUN",
    To:"IND",
    Distance:2077.95,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CUN",
    To:"JFK",
    Distance:2506.33,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUN",
    To:"JFK",
    Distance:2506.33,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"JFK",
    Distance:2506.33,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CUN",
    To:"JFK",
    Distance:2506.33,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"CUN",
    To:"JFK",
    Distance:2506.33,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CUN",
    To:"LAX",
    Distance:3406.63,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUN",
    To:"LAX",
    Distance:3406.63,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CUN",
    To:"LAX",
    Distance:3406.63,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"LAX",
    Distance:3406.63,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"CUN",
    To:"LGW",
    Distance:7976.73,
    Airport:"British Airways"
}),
new Routes(
{
    From:"CUN",
    To:"LGW",
    Distance:7976.73,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"CUN",
    To:"LGW",
    Distance:7976.73,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"LGW",
    Distance:7976.73,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"CUN",
    To:"LGW",
    Distance:7976.73,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"CUN",
    To:"LGW",
    Distance:7976.73,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"CUN",
    To:"LIM",
    Distance:3827.57,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"MAD",
    Distance:7960.66,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUN",
    To:"MAD",
    Distance:7960.66,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"CUN",
    To:"MAD",
    Distance:7960.66,
    Airport:"Compagnie Africaine d\\'Aviation"
}),
new Routes(
{
    From:"CUN",
    To:"MAN",
    Distance:7794.52,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"CUN",
    To:"MAN",
    Distance:7794.52,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"MAN",
    Distance:7794.52,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"CUN",
    To:"MAN",
    Distance:7794.52,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"CUN",
    To:"MCI",
    Distance:2163.5,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"MCO",
    Distance:995.609,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUN",
    To:"MCO",
    Distance:995.609,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CUN",
    To:"MCO",
    Distance:995.609,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"CUN",
    To:"MDW",
    Distance:2308.69,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"CUN",
    To:"MEX",
    Distance:1284.36,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUN",
    To:"MEX",
    Distance:1284.36,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"CUN",
    To:"MEX",
    Distance:1284.36,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"CUN",
    To:"MEX",
    Distance:1284.36,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"MEX",
    Distance:1284.36,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"MEX",
    Distance:1284.36,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUN",
    To:"MIA",
    Distance:854.964,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"MIA",
    Distance:854.964,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"MIA",
    Distance:854.964,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CUN",
    To:"MID",
    Distance:288.885,
    Airport:"Mongolian International Air Lines "
}),
new Routes(
{
    From:"CUN",
    To:"MKE",
    Distance:2438.2,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"CUN",
    To:"MSP",
    Distance:2714.62,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUN",
    To:"MSP",
    Distance:2714.62,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CUN",
    To:"MSP",
    Distance:2714.62,
    Airport:"Sun Country Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"MTY",
    Distance:1448.33,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"CUN",
    To:"MTY",
    Distance:1448.33,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"CUN",
    To:"MTY",
    Distance:1448.33,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUN",
    To:"MXP",
    Distance:8771.12,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"OAX",
    Distance:1128.15,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"CUN",
    To:"ORD",
    Distance:2330.64,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"ORD",
    Distance:2330.64,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CUN",
    To:"ORD",
    Distance:2330.64,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"PBC",
    Distance:1218.02,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUN",
    To:"PHL",
    Distance:2367.8,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"PHL",
    Distance:2367.8,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"PHL",
    Distance:2367.8,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CUN",
    To:"PHX",
    Distance:2830.38,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"PHX",
    Distance:2830.38,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CUN",
    To:"PIT",
    Distance:2252.71,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"PTY",
    Distance:1553.92,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUN",
    To:"PTY",
    Distance:1553.92,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"QRO",
    Distance:1383.54,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUN",
    To:"RDU",
    Distance:1828.1,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUN",
    To:"RDU",
    Distance:1828.1,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CUN",
    To:"REX",
    Distance:1281.84,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"CUN",
    To:"SAL",
    Distance:875.65,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"CUN",
    To:"SAT",
    Distance:1498.74,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"CUN",
    To:"SCL",
    Distance:6288.34,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"SFO",
    Distance:3871.22,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"SFO",
    Distance:3871.22,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"CUN",
    To:"SLC",
    Distance:3227.14,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUN",
    To:"SLC",
    Distance:3227.14,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CUN",
    To:"SLP",
    Distance:1458.27,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUN",
    To:"STL",
    Distance:1997.63,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"TAM",
    Distance:1143.91,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"CUN",
    To:"TGZ",
    Distance:816.205,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"CUN",
    To:"TIJ",
    Distance:3234.69,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUN",
    To:"TLC",
    Distance:1337.3,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"CUN",
    To:"TLC",
    Distance:1337.3,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUN",
    To:"TRC",
    Distance:1760.53,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"CUN",
    To:"VER",
    Distance:994.532,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"CUN",
    To:"VER",
    Distance:994.532,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUN",
    To:"VKO",
    Distance:10006.5,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"CUN",
    To:"VSA",
    Distance:708.286,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"CUN",
    To:"YEG",
    Distance:4245.79,
    Airport:"WestJet"
}),
new Routes(
{
    From:"CUN",
    To:"YHZ",
    Distance:3406.86,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"CUN",
    To:"YHZ",
    Distance:3406.86,
    Airport:"WestJet"
}),
new Routes(
{
    From:"CUN",
    To:"YQB",
    Distance:3186.99,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"CUN",
    To:"YUL",
    Distance:2969.77,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"CUN",
    To:"YUL",
    Distance:2969.77,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"CUN",
    To:"YUL",
    Distance:2969.77,
    Airport:"WestJet"
}),
new Routes(
{
    From:"CUN",
    To:"YVR",
    Distance:4475.57,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"CUN",
    To:"YVR",
    Distance:4475.57,
    Airport:"WestJet"
}),
new Routes(
{
    From:"CUN",
    To:"YYC",
    Distance:4091.03,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"CUN",
    To:"YYC",
    Distance:4091.03,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"CUN",
    To:"YYC",
    Distance:4091.03,
    Airport:"WestJet"
}),
new Routes(
{
    From:"CUN",
    To:"YYZ",
    Distance:2605.32,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"CUN",
    To:"YYZ",
    Distance:2605.32,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"CUN",
    To:"YYZ",
    Distance:2605.32,
    Airport:"WestJet"
}),
new Routes(
{
    From:"CUQ",
    To:"IRG",
    Distance:110.248,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"CUR",
    To:"AMS",
    Distance:7834.08,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"CUR",
    To:"AMS",
    Distance:7834.08,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CUR",
    To:"AUA",
    Distance:119.795,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"CUR",
    To:"AUA",
    Distance:119.795,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"CUR",
    To:"AUA",
    Distance:119.795,
    Airport:"Tiara Air"
}),
new Routes(
{
    From:"CUR",
    To:"BOG",
    Distance:1009.03,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"CUR",
    To:"BON",
    Distance:75.4179,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"CUR",
    To:"BON",
    Distance:75.4179,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"CUR",
    To:"BON",
    Distance:75.4179,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"CUR",
    To:"BRM",
    Distance:242.57,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"CUR",
    To:"CCS",
    Distance:277.781,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"CUR",
    To:"CLT",
    Distance:2830.36,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"CUR",
    To:"DUS",
    Distance:7962.8,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"CUR",
    To:"KIN",
    Distance:1055.45,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"CUR",
    To:"LSP",
    Distance:137.334,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"CUR",
    To:"MAR",
    Distance:352.025,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"CUR",
    To:"MDE",
    Distance:975.496,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"CUR",
    To:"MIA",
    Distance:1923.05,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CUR",
    To:"MIA",
    Distance:1923.05,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"CUR",
    To:"MIA",
    Distance:1923.05,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CUR",
    To:"PBM",
    Distance:1687.57,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"CUR",
    To:"POS",
    Distance:849.521,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"CUR",
    To:"POS",
    Distance:849.521,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"CUR",
    To:"POS",
    Distance:849.521,
    Airport:"Surinam Airways"
}),
new Routes(
{
    From:"CUR",
    To:"PTY",
    Distance:1190.54,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"CUR",
    To:"SDQ",
    Distance:698.097,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"CUR",
    To:"SDQ",
    Distance:698.097,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"CUR",
    To:"SDQ",
    Distance:698.097,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"CUR",
    To:"SXM",
    Distance:904.151,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"CUR",
    To:"VLN",
    Distance:253.118,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"CUU",
    To:"CJS",
    Distance:329.199,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUU",
    To:"CUN",
    Distance:2102.24,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUU",
    To:"DFW",
    Distance:971.258,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CUU",
    To:"DFW",
    Distance:971.258,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CUU",
    To:"GDL",
    Distance:948.311,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUU",
    To:"GDL",
    Distance:948.311,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUU",
    To:"HMO",
    Distance:496.733,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUU",
    To:"IAH",
    Distance:1039.1,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CUU",
    To:"MEX",
    Distance:1244.82,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUU",
    To:"MEX",
    Distance:1244.82,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"CUU",
    To:"MEX",
    Distance:1244.82,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUU",
    To:"MTY",
    Distance:664.012,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUU",
    To:"MTY",
    Distance:664.012,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"CUU",
    To:"MTY",
    Distance:664.012,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUU",
    To:"TIJ",
    Distance:1135.54,
    Airport:"Volaris"
}),
new Routes(
{
    From:"CUU",
    To:"TRC",
    Distance:430.5,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUZ",
    To:"AQP",
    Distance:314.272,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"CUZ",
    To:"JUL",
    Distance:287.857,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"CUZ",
    To:"JUL",
    Distance:287.857,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"CUZ",
    To:"JUL",
    Distance:287.857,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"CUZ",
    To:"LIM",
    Distance:585.912,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CUZ",
    To:"LIM",
    Distance:585.912,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"CUZ",
    To:"LIM",
    Distance:585.912,
    Airport:"Peruvian Airlines"
}),
new Routes(
{
    From:"CUZ",
    To:"LIM",
    Distance:585.912,
    Airport:"Star Peru (2I)"
}),
new Routes(
{
    From:"CUZ",
    To:"LPB",
    Distance:521.022,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"CUZ",
    To:"PEM",
    Distance:310.932,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"CUZ",
    To:"PEM",
    Distance:310.932,
    Airport:"Star Peru (2I)"
}),
new Routes(
{
    From:"CVG",
    To:"ATL",
    Distance:602.182,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CVG",
    To:"ATL",
    Distance:602.182,
    Airport:"Air France"
}),
new Routes(
{
    From:"CVG",
    To:"ATL",
    Distance:602.182,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CVG",
    To:"ATL",
    Distance:602.182,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"ATL",
    Distance:602.182,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CVG",
    To:"ATL",
    Distance:602.182,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"CVG",
    To:"ATL",
    Distance:602.182,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"CVG",
    To:"BDL",
    Distance:1062.09,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"BNA",
    Distance:370.267,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"BOS",
    Distance:1207.62,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"BWI",
    Distance:690.097,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"CDG",
    Distance:6669.71,
    Airport:"Air France"
}),
new Routes(
{
    From:"CVG",
    To:"CDG",
    Distance:6669.71,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"CLT",
    Distance:539.197,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CVG",
    To:"CLT",
    Distance:539.197,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"CLT",
    Distance:539.197,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CVG",
    To:"CUN",
    Distance:2013.95,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CVG",
    To:"CUN",
    Distance:2013.95,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"DCA",
    Distance:659.983,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CVG",
    To:"DCA",
    Distance:659.983,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"DCA",
    Distance:659.983,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CVG",
    To:"DEN",
    Distance:1716.37,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"DEN",
    Distance:1716.37,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"CVG",
    To:"DEN",
    Distance:1716.37,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CVG",
    To:"DFW",
    Distance:1304.76,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CVG",
    To:"DFW",
    Distance:1304.76,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"DFW",
    Distance:1304.76,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CVG",
    To:"DTW",
    Distance:368.837,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"EWR",
    Distance:913.864,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"EWR",
    Distance:913.864,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CVG",
    To:"FLL",
    Distance:1503.08,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"GRR",
    Distance:432.096,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"IAD",
    Distance:623.197,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CVG",
    To:"IAH",
    Distance:1402.32,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"IAH",
    Distance:1402.32,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CVG",
    To:"JAX",
    Distance:989.25,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"JFK",
    Distance:945.657,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CVG",
    To:"JFK",
    Distance:945.657,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"JFK",
    Distance:945.657,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CVG",
    To:"LAS",
    Distance:2694.4,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"LAX",
    Distance:3050.93,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"LGA",
    Distance:939.898,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"MCI",
    Distance:865.996,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"MCO",
    Distance:1220.72,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"MEM",
    Distance:648.196,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"MIA",
    Distance:1529.59,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CVG",
    To:"MIA",
    Distance:1529.59,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CVG",
    To:"MKE",
    Distance:511.104,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"MSN",
    Distance:599.846,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"MSP",
    Distance:958.633,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"MSY",
    Distance:1129.07,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"ORD",
    Distance:425.383,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CVG",
    To:"ORD",
    Distance:425.383,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"ORD",
    Distance:425.383,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CVG",
    To:"ORD",
    Distance:425.383,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CVG",
    To:"PGD",
    Distance:1371.43,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"CVG",
    To:"PHL",
    Distance:814.048,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CVG",
    To:"PHL",
    Distance:814.048,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"PHL",
    Distance:814.048,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CVG",
    To:"PIT",
    Distance:411.522,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"PUJ",
    Distance:2766.71,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"RDU",
    Distance:627.237,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"RIC",
    Distance:663.779,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"RSW",
    Distance:1417.5,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"SFB",
    Distance:1184.89,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"CVG",
    To:"SFO",
    Distance:3269.12,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"SLC",
    Distance:2327.62,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"STL",
    Distance:494.504,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"TPA",
    Distance:1246.99,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"TTN",
    Distance:854.038,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"CVG",
    To:"XNA",
    Distance:901.931,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"YYZ",
    Distance:664.249,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"CVG",
    To:"YYZ",
    Distance:664.249,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CVG",
    To:"YYZ",
    Distance:664.249,
    Airport:"WestJet"
}),
new Routes(
{
    From:"CVM",
    To:"MEX",
    Distance:474.623,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CVM",
    To:"MEX",
    Distance:474.623,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"CVU",
    To:"FLW",
    Distance:24.0916,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"CVU",
    To:"HOR",
    Distance:243.323,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"CWA",
    To:"DTW",
    Distance:581.798,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CWA",
    To:"MSP",
    Distance:282.185,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CWA",
    To:"ORD",
    Distance:341.076,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CWA",
    To:"ORD",
    Distance:341.076,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CWA",
    To:"ORD",
    Distance:341.076,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"AEP",
    Distance:1340.01,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"CWB",
    To:"BSB",
    Distance:1081.76,
    Airport:"Air France"
}),
new Routes(
{
    From:"CWB",
    To:"BSB",
    Distance:1081.76,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"BSB",
    Distance:1081.76,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"CWB",
    To:"BSB",
    Distance:1081.76,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"CAC",
    Distance:438.842,
    Airport:"Azul"
}),
new Routes(
{
    From:"CWB",
    To:"CFC",
    Distance:224.983,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"CWB",
    To:"CGH",
    Distance:331.154,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"CGH",
    Distance:331.154,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"CGR",
    Distance:795.45,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"CWB",
    To:"CNF",
    Distance:845.585,
    Airport:"Azul"
}),
new Routes(
{
    From:"CWB",
    To:"CXJ",
    Distance:453.707,
    Airport:"Azul"
}),
new Routes(
{
    From:"CWB",
    To:"EZE",
    Distance:1368.75,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"FLN",
    Distance:246.243,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"CWB",
    To:"GIG",
    Distance:673.387,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"GIG",
    Distance:673.387,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"GIG",
    Distance:673.387,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"GPB",
    Distance:228.898,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"CWB",
    To:"GRU",
    Distance:359.624,
    Airport:"Azul"
}),
new Routes(
{
    From:"CWB",
    To:"GRU",
    Distance:359.624,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"GRU",
    Distance:359.624,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"IGU",
    Distance:532.811,
    Airport:"Azul"
}),
new Routes(
{
    From:"CWB",
    To:"IGU",
    Distance:532.811,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"IGU",
    Distance:532.811,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"LDB",
    Distance:314.165,
    Airport:"Azul"
}),
new Routes(
{
    From:"CWB",
    To:"LDB",
    Distance:314.165,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"LDB",
    Distance:314.165,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"CWB",
    To:"LDB",
    Distance:314.165,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"MGF",
    Distance:366.959,
    Airport:"Azul"
}),
new Routes(
{
    From:"CWB",
    To:"MGF",
    Distance:366.959,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"MGF",
    Distance:366.959,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"MVD",
    Distance:1226.28,
    Airport:"BQB Lineas Aereas"
}),
new Routes(
{
    From:"CWB",
    To:"POA",
    Distance:533.971,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"POA",
    Distance:533.971,
    Airport:"Azul"
}),
new Routes(
{
    From:"CWB",
    To:"POA",
    Distance:533.971,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"POA",
    Distance:533.971,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"POA",
    Distance:533.971,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CWB",
    To:"RAO",
    Distance:509.134,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"CWB",
    To:"SDU",
    Distance:675.538,
    Airport:"Azul"
}),
new Routes(
{
    From:"CWB",
    To:"SSA",
    Distance:1804.82,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"VCP",
    Distance:348.405,
    Airport:"Azul"
}),
new Routes(
{
    From:"CWB",
    To:"VCP",
    Distance:348.405,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"CWB",
    To:"XAP",
    Distance:390.115,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"CWL",
    To:"AGP",
    Distance:1639.54,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"CWL",
    To:"AGP",
    Distance:1639.54,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"CWL",
    To:"AGP",
    Distance:1639.54,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"CWL",
    To:"ALC",
    Distance:1474.42,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"CWL",
    To:"ALC",
    Distance:1474.42,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"CWL",
    To:"ALC",
    Distance:1474.42,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"CWL",
    To:"AMS",
    Distance:565.674,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CWL",
    To:"AMS",
    Distance:565.674,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CWL",
    To:"BCN",
    Distance:1196.82,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"CWL",
    To:"BCN",
    Distance:1196.82,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"CWL",
    To:"BHD",
    Distance:396.098,
    Airport:"Flybe"
}),
new Routes(
{
    From:"CWL",
    To:"DLM",
    Distance:3006.42,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"CWL",
    To:"DUB",
    Distance:300.111,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"CWL",
    To:"DUS",
    Distance:701.778,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"CWL",
    To:"EDI",
    Distance:506.311,
    Airport:"Air France"
}),
new Routes(
{
    From:"CWL",
    To:"EDI",
    Distance:506.311,
    Airport:"CityJet"
}),
new Routes(
{
    From:"CWL",
    To:"GLA",
    Distance:502.771,
    Airport:"Air France"
}),
new Routes(
{
    From:"CWL",
    To:"GLA",
    Distance:502.771,
    Airport:"CityJet"
}),
new Routes(
{
    From:"CWL",
    To:"HER",
    Distance:2885.02,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"CWL",
    To:"JER",
    Distance:256.657,
    Airport:"Air France"
}),
new Routes(
{
    From:"CWL",
    To:"JER",
    Distance:256.657,
    Airport:"CityJet"
}),
new Routes(
{
    From:"CWL",
    To:"JER",
    Distance:256.657,
    Airport:"Flybe"
}),
new Routes(
{
    From:"CWL",
    To:"LCA",
    Distance:3463.77,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"CWL",
    To:"MLA",
    Distance:2233.35,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"CWL",
    To:"NCL",
    Distance:419.481,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"CWL",
    To:"ORY",
    Distance:503.703,
    Airport:"Air France"
}),
new Routes(
{
    From:"CWL",
    To:"ORY",
    Distance:503.703,
    Airport:"CityJet"
}),
new Routes(
{
    From:"CWL",
    To:"PMI",
    Distance:1398.17,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"CWL",
    To:"RHO",
    Distance:2984.2,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"CWL",
    To:"TFS",
    Distance:2822.31,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"CWL",
    To:"TFS",
    Distance:2822.31,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"CXB",
    To:"DAC",
    Distance:310.672,
    Airport:"Rainbow Air Polynesia"
}),
new Routes(
{
    From:"CXB",
    To:"DAC",
    Distance:310.672,
    Airport:"United Airways"
}),
new Routes(
{
    From:"CXB",
    To:"DAC",
    Distance:310.672,
    Airport:"Viking Hellas"
}),
new Routes(
{
    From:"CXH",
    To:"YWH",
    Distance:98.4272,
    Airport:"Helijet"
}),
new Routes(
{
    From:"CXI",
    To:"HNL",
    Distance:2150.57,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"CXI",
    To:"HNL",
    Distance:2150.57,
    Airport:"Qantas"
}),
new Routes(
{
    From:"CXI",
    To:"NAN",
    Distance:3527.53,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"CXI",
    To:"NAN",
    Distance:3527.53,
    Airport:"Qantas"
}),
new Routes(
{
    From:"CXJ",
    To:"CGH",
    Distance:766.205,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"CXJ",
    To:"CWB",
    Distance:453.707,
    Airport:"Azul"
}),
new Routes(
{
    From:"CXJ",
    To:"VCP",
    Distance:798.245,
    Airport:"Azul"
}),
new Routes(
{
    From:"CXR",
    To:"DAD",
    Distance:463.125,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"CXR",
    To:"DME",
    Distance:7735.91,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"CXR",
    To:"HAN",
    Distance:1087.93,
    Airport:"Royal Air Cambodge"
}),
new Routes(
{
    From:"CXR",
    To:"HAN",
    Distance:1087.93,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"CXR",
    To:"SGN",
    Distance:309.05,
    Airport:"Jetstar Pacific"
}),
new Routes(
{
    From:"CXR",
    To:"SGN",
    Distance:309.05,
    Airport:"Royal Air Cambodge"
}),
new Routes(
{
    From:"CXR",
    To:"SGN",
    Distance:309.05,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"CYB",
    To:"GCM",
    Distance:160.703,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"CYB",
    To:"LYB",
    Distance:22.0016,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"CYF",
    To:"BET",
    Distance:151.369,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"CYF",
    To:"BET",
    Distance:151.369,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"CYF",
    To:"KPN",
    Distance:27.8919,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"CYO",
    To:"HAV",
    Distance:176.583,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"CYO",
    To:"MXP",
    Distance:8330.29,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"CYO",
    To:"SCU",
    Distance:621.169,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"CYP",
    To:"MNL",
    Distance:467.864,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"CYS",
    To:"DEN",
    Distance:144.37,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"CYS",
    To:"DEN",
    Distance:144.37,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"CYS",
    To:"DEN",
    Distance:144.37,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CYS",
    To:"WRL",
    Distance:404.569,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"CYS",
    To:"WRL",
    Distance:404.569,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"CYS",
    To:"WRL",
    Distance:404.569,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CYX",
    To:"YKS",
    Distance:1611.87,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"CYX",
    To:"YKS",
    Distance:1611.87,
    Airport:"Piedmont Airlines (1948-1989)"
}),
new Routes(
{
    From:"CYZ",
    To:"MNL",
    Distance:280.437,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"CZE",
    To:"CCS",
    Distance:307.279,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"CZH",
    To:"SPR",
    Distance:69.8623,
    Airport:"Midwest Airlines (Egypt)"
}),
new Routes(
{
    From:"CZL",
    To:"ALG",
    Distance:307.878,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"CZL",
    To:"AZR",
    Distance:1135.85,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"CZL",
    To:"CDG",
    Distance:1454.3,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"CZL",
    To:"GHA",
    Distance:504.548,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"CZL",
    To:"HME",
    Distance:513.744,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"CZL",
    To:"IST",
    Distance:1991.49,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"CZL",
    To:"LYS",
    Distance:1058.58,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"CZL",
    To:"LYS",
    Distance:1058.58,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"CZL",
    To:"MLH",
    Distance:1260.23,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"CZL",
    To:"MLH",
    Distance:1260.23,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"CZL",
    To:"MRS",
    Distance:805.072,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"CZL",
    To:"MRS",
    Distance:805.072,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"CZL",
    To:"NCE",
    Distance:822.444,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"CZL",
    To:"ORN",
    Distance:655.718,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"CZL",
    To:"ORY",
    Distance:1427.08,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"CZL",
    To:"ORY",
    Distance:1427.08,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"CZM",
    To:"ATL",
    Distance:1478.9,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"CZM",
    To:"ATL",
    Distance:1478.9,
    Airport:"Air France"
}),
new Routes(
{
    From:"CZM",
    To:"ATL",
    Distance:1478.9,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CZM",
    To:"ATL",
    Distance:1478.9,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CZM",
    To:"ATL",
    Distance:1478.9,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"CZM",
    To:"CLT",
    Distance:1735.23,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CZM",
    To:"CLT",
    Distance:1735.23,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CZM",
    To:"CUN",
    Distance:57.3906,
    Airport:"Mongolian International Air Lines "
}),
new Routes(
{
    From:"CZM",
    To:"DEN",
    Distance:2733.47,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"CZM",
    To:"DFW",
    Distance:1701.41,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CZM",
    To:"DFW",
    Distance:1701.41,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CZM",
    To:"IAH",
    Distance:1349.2,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CZM",
    To:"MEX",
    Distance:1274.77,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"CZM",
    To:"MIA",
    Distance:896.14,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CZM",
    To:"MIA",
    Distance:896.14,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CZM",
    To:"YUL",
    Distance:3025.05,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"CZS",
    To:"RBR",
    Distance:621.563,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"CZU",
    To:"BOG",
    Distance:530.063,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"CZU",
    To:"BOG",
    Distance:530.063,
    Airport:"SATENA"
}),
new Routes(
{
    From:"CZX",
    To:"CAN",
    Distance:1140.66,
    Airport:"Air China"
}),
new Routes(
{
    From:"CZX",
    To:"CAN",
    Distance:1140.66,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"CAN",
    Distance:1140.66,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"CKG",
    Distance:1271.32,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"CKG",
    Distance:1271.32,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"CSX",
    Distance:751.026,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"CTU",
    Distance:1504.75,
    Airport:"Air China"
}),
new Routes(
{
    From:"CZX",
    To:"CTU",
    Distance:1504.75,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"CTU",
    Distance:1504.75,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"DLC",
    Distance:798.316,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"DYG",
    Distance:941.855,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"FOC",
    Distance:667.92,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"FOC",
    Distance:667.92,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"HRB",
    Distance:1622.06,
    Airport:"Air China"
}),
new Routes(
{
    From:"CZX",
    To:"HRB",
    Distance:1622.06,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"HRB",
    Distance:1622.06,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"KMG",
    Distance:1826.81,
    Airport:"KSY"
}),
new Routes(
{
    From:"CZX",
    To:"KMG",
    Distance:1826.81,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"KWL",
    Distance:1203.56,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"NAY",
    Distance:921.68,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"NAY",
    Distance:921.68,
    Airport:"China United"
}),
new Routes(
{
    From:"CZX",
    To:"PEK",
    Distance:947.472,
    Airport:"Air China"
}),
new Routes(
{
    From:"CZX",
    To:"PEK",
    Distance:947.472,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"PEK",
    Distance:947.472,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"SHE",
    Distance:1096.93,
    Airport:"Air China"
}),
new Routes(
{
    From:"CZX",
    To:"SHE",
    Distance:1096.93,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"SHE",
    Distance:1096.93,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"SZX",
    Distance:1186.83,
    Airport:"Air China"
}),
new Routes(
{
    From:"CZX",
    To:"SZX",
    Distance:1186.83,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"SZX",
    Distance:1186.83,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"SZX",
    Distance:1186.83,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"TYN",
    Distance:912.949,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"TYN",
    Distance:912.949,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"XIY",
    Distance:1056.57,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"XMN",
    Distance:837.047,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"XMN",
    Distance:837.047,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"CZX",
    To:"ZUH",
    Distance:1269.97,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"DAB",
    To:"ATL",
    Distance:589.713,
    Airport:"Air France"
}),
new Routes(
{
    From:"DAB",
    To:"ATL",
    Distance:589.713,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DAB",
    To:"ATL",
    Distance:589.713,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DAB",
    To:"CLT",
    Distance:671.046,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DAB",
    To:"CLT",
    Distance:671.046,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DAC",
    To:"AUH",
    Distance:3617.7,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"DAC",
    To:"BKK",
    Distance:1568.34,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"DAC",
    To:"BKK",
    Distance:1568.34,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"BKK",
    Distance:1568.34,
    Airport:"Druk Air"
}),
new Routes(
{
    From:"DAC",
    To:"BKK",
    Distance:1568.34,
    Airport:"Rainbow Air Polynesia"
}),
new Routes(
{
    From:"DAC",
    To:"BKK",
    Distance:1568.34,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"DAC",
    To:"BKK",
    Distance:1568.34,
    Airport:"United Airways"
}),
new Routes(
{
    From:"DAC",
    To:"BOM",
    Distance:1887.85,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DAC",
    To:"BZL",
    Distance:116.321,
    Airport:"United Airways"
}),
new Routes(
{
    From:"DAC",
    To:"CAN",
    Distance:2331.18,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"CCU",
    Distance:239.161,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DAC",
    To:"CCU",
    Distance:239.161,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"CCU",
    Distance:239.161,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DAC",
    To:"CCU",
    Distance:239.161,
    Airport:"Rainbow Air Polynesia"
}),
new Routes(
{
    From:"DAC",
    To:"CCU",
    Distance:239.161,
    Airport:"United Airways"
}),
new Routes(
{
    From:"DAC",
    To:"CGP",
    Distance:228.866,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"CGP",
    Distance:228.866,
    Airport:"Rainbow Air Polynesia"
}),
new Routes(
{
    From:"DAC",
    To:"CGP",
    Distance:228.866,
    Airport:"United Airways"
}),
new Routes(
{
    From:"DAC",
    To:"CGP",
    Distance:228.866,
    Airport:"Viking Hellas"
}),
new Routes(
{
    From:"DAC",
    To:"CMB",
    Distance:2165.76,
    Airport:"L"
}),
new Routes(
{
    From:"DAC",
    To:"CMB",
    Distance:2165.76,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"CXB",
    Distance:310.672,
    Airport:"Rainbow Air Polynesia"
}),
new Routes(
{
    From:"DAC",
    To:"CXB",
    Distance:310.672,
    Airport:"United Airways"
}),
new Routes(
{
    From:"DAC",
    To:"CXB",
    Distance:310.672,
    Airport:"Viking Hellas"
}),
new Routes(
{
    From:"DAC",
    To:"DEL",
    Distance:1425.41,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DAC",
    To:"DEL",
    Distance:1425.41,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"DEL",
    Distance:1425.41,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DAC",
    To:"DMM",
    Distance:4080.06,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"DMM",
    Distance:4080.06,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"DOH",
    Distance:3917.11,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"DOH",
    Distance:3917.11,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DAC",
    To:"DXB",
    Distance:3536.93,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DAC",
    To:"DXB",
    Distance:3536.93,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DAC",
    To:"DXB",
    Distance:3536.93,
    Airport:"United Airways"
}),
new Routes(
{
    From:"DAC",
    To:"FCO",
    Distance:7319.55,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"HKG",
    Distance:2409.02,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"HKG",
    Distance:2409.02,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"DAC",
    To:"HKG",
    Distance:2409.02,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"DAC",
    To:"IST",
    Distance:5957.85,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"JED",
    Distance:5231.03,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"JED",
    Distance:5231.03,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"JED",
    Distance:5231.03,
    Airport:"United Airways"
}),
new Routes(
{
    From:"DAC",
    To:"JSR",
    Distance:145.892,
    Airport:"Rainbow Air Polynesia"
}),
new Routes(
{
    From:"DAC",
    To:"JSR",
    Distance:145.892,
    Airport:"United Airways"
}),
new Routes(
{
    From:"DAC",
    To:"JSR",
    Distance:145.892,
    Airport:"Viking Hellas"
}),
new Routes(
{
    From:"DAC",
    To:"KHI",
    Distance:2353.65,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"KMG",
    Distance:1256.06,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"KTM",
    Distance:661.786,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"KTM",
    Distance:661.786,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"DAC",
    To:"KTM",
    Distance:661.786,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"DAC",
    To:"KTM",
    Distance:661.786,
    Airport:"United Airways"
}),
new Routes(
{
    From:"DAC",
    To:"KUL",
    Distance:2642.34,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"KUL",
    Distance:2642.34,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"KUL",
    Distance:2642.34,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"DAC",
    To:"KUL",
    Distance:2642.34,
    Airport:"Rainbow Air Polynesia"
}),
new Routes(
{
    From:"DAC",
    To:"KUL",
    Distance:2642.34,
    Airport:"United Airways"
}),
new Routes(
{
    From:"DAC",
    To:"KWI",
    Distance:4240.51,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"KWI",
    Distance:4240.51,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"DAC",
    To:"LHR",
    Distance:8014.73,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"MAA",
    Distance:1616.23,
    Airport:"Maldivian"
}),
new Routes(
{
    From:"DAC",
    To:"MCT",
    Distance:3262.23,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"MCT",
    Distance:3262.23,
    Airport:"United Airways"
}),
new Routes(
{
    From:"DAC",
    To:"PBH",
    Distance:407.68,
    Airport:"Druk Air"
}),
new Routes(
{
    From:"DAC",
    To:"RGN",
    Distance:975.499,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"RUH",
    Distance:4407.52,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"SHJ",
    Distance:3520.91,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"DAC",
    To:"SIN",
    Distance:2898.25,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"SIN",
    Distance:2898.25,
    Airport:"Rainbow Air Polynesia"
}),
new Routes(
{
    From:"DAC",
    To:"SIN",
    Distance:2898.25,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"DAC",
    To:"SIN",
    Distance:2898.25,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"DAC",
    To:"SPD",
    Distance:260.707,
    Airport:"United Airways"
}),
new Routes(
{
    From:"DAC",
    To:"ZYL",
    Distance:193.993,
    Airport:"Rainbow Air Polynesia"
}),
new Routes(
{
    From:"DAC",
    To:"ZYL",
    Distance:193.993,
    Airport:"United Airways"
}),
new Routes(
{
    From:"DAC",
    To:"ZYL",
    Distance:193.993,
    Airport:"Viking Hellas"
}),
new Routes(
{
    From:"DAD",
    To:"BMV",
    Distance:375.447,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"CAN",
    Distance:975.726,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"CAN",
    Distance:975.726,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"CTU",
    Distance:1673.02,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"CXR",
    Distance:463.125,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"DLI",
    Distance:477.804,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"HAN",
    Distance:628.402,
    Airport:"Jetstar Pacific"
}),
new Routes(
{
    From:"DAD",
    To:"HAN",
    Distance:628.402,
    Airport:"Royal Air Cambodge"
}),
new Routes(
{
    From:"DAD",
    To:"HAN",
    Distance:628.402,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"HGH",
    Distance:2009.95,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"HKG",
    Distance:919.277,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"DAD",
    To:"HKG",
    Distance:919.277,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"DAD",
    To:"HPH",
    Distance:553.3,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"ICN",
    Distance:2980.91,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"ICN",
    Distance:2980.91,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"DAD",
    To:"ICN",
    Distance:2980.91,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"KMG",
    Distance:1145.39,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"MFM",
    Distance:884.03,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"DAD",
    To:"PVG",
    Distance:2173.05,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"PXU",
    Distance:227.613,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"REP",
    Distance:555.17,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"DAD",
    To:"REP",
    Distance:555.17,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"REP",
    Distance:555.17,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"REP",
    Distance:555.17,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"DAD",
    To:"SGN",
    Distance:604.614,
    Airport:"Jetstar Pacific"
}),
new Routes(
{
    From:"DAD",
    To:"SGN",
    Distance:604.614,
    Airport:"Royal Air Cambodge"
}),
new Routes(
{
    From:"DAD",
    To:"SGN",
    Distance:604.614,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"SIN",
    Distance:1697.61,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"DAD",
    To:"SIN",
    Distance:1697.61,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"SIN",
    Distance:1697.61,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"DAD",
    To:"VII",
    Distance:402.104,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"WNZ",
    Distance:1853.02,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DAD",
    To:"XMN",
    Distance:1400.86,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"ABQ",
    Distance:932.079,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"AMA",
    Distance:519.189,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAL",
    To:"AMA",
    Distance:519.189,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"ATL",
    Distance:1158.03,
    Airport:"Air France"
}),
new Routes(
{
    From:"DAL",
    To:"ATL",
    Distance:1158.03,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DAL",
    To:"ATL",
    Distance:1158.03,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"ATL",
    Distance:1158.03,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"DAL",
    To:"AUS",
    Distance:304.974,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAL",
    To:"AUS",
    Distance:304.974,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"BHM",
    Distance:942.513,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAL",
    To:"BHM",
    Distance:942.513,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"BKG",
    Distance:528.417,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"ELD",
    Distance:378.732,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"ELP",
    Distance:902.169,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"HOU",
    Distance:386.122,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAL",
    To:"HOU",
    Distance:386.122,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"HRL",
    Distance:740.032,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"IAH",
    Distance:349.08,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"ICT",
    Distance:536.649,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"LBB",
    Distance:471.01,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAL",
    To:"LBB",
    Distance:471.01,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"LIT",
    Distance:476.044,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAL",
    To:"LIT",
    Distance:476.044,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"MAF",
    Distance:512.235,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAL",
    To:"MAF",
    Distance:512.235,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"MCI",
    Distance:742.483,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAL",
    To:"MCI",
    Distance:742.483,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"MSY",
    Distance:701.341,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAL",
    To:"MSY",
    Distance:701.341,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"OKC",
    Distance:291.371,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAL",
    To:"OKC",
    Distance:291.371,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"SAT",
    Distance:399.271,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAL",
    To:"SAT",
    Distance:399.271,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"SEA",
    Distance:2684.42,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAL",
    To:"SFO",
    Distance:2370.16,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAL",
    To:"SLC",
    Distance:1606.59,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAL",
    To:"STL",
    Distance:878.332,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAL",
    To:"STL",
    Distance:878.332,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAL",
    To:"TUL",
    Distance:382.953,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAR",
    To:"ADD",
    Distance:1763.67,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DAR",
    To:"AMS",
    Distance:7345.03,
    Airport:"Air France"
}),
new Routes(
{
    From:"DAR",
    To:"AMS",
    Distance:7345.03,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DAR",
    To:"AMS",
    Distance:7345.03,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DAR",
    To:"ARK",
    Distance:483.012,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"DAR",
    To:"CAI",
    Distance:4197.54,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"DAR",
    To:"DOH",
    Distance:3815.79,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DAR",
    To:"DXB",
    Distance:3977.67,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DAR",
    To:"EBB",
    Distance:1074.4,
    Airport:"Northern Dene Airways"
}),
new Routes(
{
    From:"DAR",
    To:"EBB",
    Distance:1074.4,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"DAR",
    To:"HAH",
    Distance:683.638,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"DAR",
    To:"HRE",
    Distance:1511.15,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"DAR",
    To:"IST",
    Distance:5426.03,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DAR",
    To:"JNB",
    Distance:2436.15,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DAR",
    To:"JRO",
    Distance:450.095,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"DAR",
    To:"JRO",
    Distance:450.095,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DAR",
    To:"JRO",
    Distance:450.095,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"DAR",
    To:"KGL",
    Distance:1143.22,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"DAR",
    To:"LLW",
    Distance:970.491,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DAR",
    To:"MCT",
    Distance:3971.76,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"DAR",
    To:"MWZ",
    Distance:851.855,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"DAR",
    To:"MYW",
    Distance:399.608,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"DAR",
    To:"NBO",
    Distance:667.61,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"DAR",
    To:"NBO",
    Distance:667.61,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DAR",
    To:"NBO",
    Distance:667.61,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"DAR",
    To:"NBO",
    Distance:667.61,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"DAR",
    To:"NBO",
    Distance:667.61,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DAR",
    To:"NBO",
    Distance:667.61,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"DAR",
    To:"POL",
    Distance:694.447,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"DAR",
    To:"ZNZ",
    Distance:72.9949,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DAR",
    To:"ZNZ",
    Distance:72.9949,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"DAR",
    To:"ZNZ",
    Distance:72.9949,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DAR",
    To:"ZNZ",
    Distance:72.9949,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"DAT",
    To:"CIH",
    Distance:425.104,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DAT",
    To:"NAY",
    Distance:249.706,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DAT",
    To:"NAY",
    Distance:249.706,
    Airport:"China United"
}),
new Routes(
{
    From:"DAT",
    To:"PEK",
    Distance:264,
    Airport:"Air China"
}),
new Routes(
{
    From:"DAT",
    To:"PEK",
    Distance:264,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DAT",
    To:"PVG",
    Distance:1243.43,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DAT",
    To:"SHE",
    Distance:839.055,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"DAT",
    To:"TYN",
    Distance:267.629,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DAT",
    To:"TYN",
    Distance:267.629,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"DAT",
    To:"TYN",
    Distance:267.629,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"DAT",
    To:"XIY",
    Distance:751.292,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"DAU",
    To:"LAE",
    Distance:478.024,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"DAU",
    To:"POM",
    Distance:442.079,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"DAU",
    To:"POM",
    Distance:442.079,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"DAU",
    To:"UNG",
    Distance:391.738,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"DAV",
    To:"PAC",
    Distance:323.06,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"DAV",
    To:"SJO",
    Distance:263.957,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"DAX",
    To:"CAN",
    Distance:1048.89,
    Airport:"Air China"
}),
new Routes(
{
    From:"DAX",
    To:"CAN",
    Distance:1048.89,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DAX",
    To:"KMG",
    Distance:842.008,
    Airport:"Air China"
}),
new Routes(
{
    From:"DAX",
    To:"KMG",
    Distance:842.008,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DAX",
    To:"PEK",
    Distance:1273.75,
    Airport:"Air China"
}),
new Routes(
{
    From:"DAX",
    To:"PEK",
    Distance:1273.75,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DAX",
    To:"PVG",
    Distance:1359.45,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DAX",
    To:"SZX",
    Distance:1147.67,
    Airport:"Air China"
}),
new Routes(
{
    From:"DAX",
    To:"SZX",
    Distance:1147.67,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DAY",
    To:"ATL",
    Distance:696.956,
    Airport:"Air France"
}),
new Routes(
{
    From:"DAY",
    To:"ATL",
    Distance:696.956,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAY",
    To:"ATL",
    Distance:696.956,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"DAY",
    To:"ATL",
    Distance:696.956,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DAY",
    To:"ATL",
    Distance:696.956,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DAY",
    To:"ATL",
    Distance:696.956,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAY",
    To:"BWI",
    Distance:652.348,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAY",
    To:"BWI",
    Distance:652.348,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAY",
    To:"CLE",
    Distance:260.981,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DAY",
    To:"CLT",
    Distance:595.854,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DAY",
    To:"CLT",
    Distance:595.854,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DAY",
    To:"DCA",
    Distance:628.043,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DAY",
    To:"DCA",
    Distance:628.043,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DAY",
    To:"DEN",
    Distance:1741.44,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAY",
    To:"DEN",
    Distance:1741.44,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DAY",
    To:"DFW",
    Distance:1384.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DAY",
    To:"DFW",
    Distance:1384.48,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DAY",
    To:"DTW",
    Distance:266.929,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DAY",
    To:"EWR",
    Distance:856.42,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DAY",
    To:"IAD",
    Distance:590.486,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DAY",
    To:"LGA",
    Distance:881.794,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DAY",
    To:"LGA",
    Distance:881.794,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DAY",
    To:"LGA",
    Distance:881.794,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DAY",
    To:"MCO",
    Distance:1303.31,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DAY",
    To:"MSP",
    Distance:922.734,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DAY",
    To:"ORD",
    Distance:386.109,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DAY",
    To:"ORD",
    Distance:386.109,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DAY",
    To:"ORD",
    Distance:386.109,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DAY",
    To:"PHL",
    Distance:765.715,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DAY",
    To:"PHL",
    Distance:765.715,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DAY",
    To:"TPA",
    Distance:1335.22,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DAY",
    To:"TPA",
    Distance:1335.22,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DBA",
    To:"KHI",
    Distance:519.576,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"DBO",
    To:"BHQ",
    Distance:669.286,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"DBO",
    To:"SYD",
    Distance:309.454,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DBO",
    To:"SYD",
    Distance:309.454,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"DBQ",
    To:"ORD",
    Distance:235.799,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DBQ",
    To:"ORD",
    Distance:235.799,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DBV",
    To:"AMS",
    Distance:1480.71,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"DBV",
    To:"ARN",
    Distance:1900.54,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"DBV",
    To:"ARN",
    Distance:1900.54,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"DBV",
    To:"ATH",
    Distance:704.324,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"DBV",
    To:"BCN",
    Distance:1344.59,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"DBV",
    To:"BCN",
    Distance:1344.59,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DBV",
    To:"BFS",
    Distance:2227.79,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"DBV",
    To:"BGO",
    Distance:2160.22,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"DBV",
    To:"BHX",
    Distance:1852.6,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"DBV",
    To:"BHX",
    Distance:1852.6,
    Airport:"Flybe"
}),
new Routes(
{
    From:"DBV",
    To:"BHX",
    Distance:1852.6,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DBV",
    To:"BRU",
    Distance:1397.23,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"DBV",
    To:"CDG",
    Distance:1410.21,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"DBV",
    To:"CGN",
    Distance:1251.18,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DBV",
    To:"DUB",
    Distance:2171.99,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DBV",
    To:"DUS",
    Distance:1302.64,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"DBV",
    To:"DUS",
    Distance:1302.64,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DBV",
    To:"DUS",
    Distance:1302.64,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DBV",
    To:"EDI",
    Distance:2146.99,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"DBV",
    To:"EDI",
    Distance:2146.99,
    Airport:"easyJet"
}),
new Routes(
{
    From:"DBV",
    To:"EMA",
    Distance:1848.47,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"DBV",
    To:"FCO",
    Distance:502.792,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"DBV",
    To:"FRA",
    Distance:1115.01,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"DBV",
    To:"FRA",
    Distance:1115.01,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DBV",
    To:"GVA",
    Distance:1047.55,
    Airport:"easyJet"
}),
new Routes(
{
    From:"DBV",
    To:"HAJ",
    Distance:1273.64,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DBV",
    To:"HAM",
    Distance:1373.72,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DBV",
    To:"HEL",
    Distance:2025.68,
    Airport:"Finnair"
}),
new Routes(
{
    From:"DBV",
    To:"HEL",
    Distance:2025.68,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"DBV",
    To:"LBA",
    Distance:1927.33,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"DBV",
    To:"LGW",
    Distance:1690.07,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"DBV",
    To:"LGW",
    Distance:1690.07,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DBV",
    To:"LGW",
    Distance:1690.07,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"DBV",
    To:"LGW",
    Distance:1690.07,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DBV",
    To:"LGW",
    Distance:1690.07,
    Airport:"easyJet"
}),
new Routes(
{
    From:"DBV",
    To:"LIL",
    Distance:1457.56,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"DBV",
    To:"LUX",
    Distance:1214.6,
    Airport:"Luxair"
}),
new Routes(
{
    From:"DBV",
    To:"MAN",
    Distance:1932.34,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"DBV",
    To:"MAN",
    Distance:1932.34,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"DBV",
    To:"MAN",
    Distance:1932.34,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DBV",
    To:"MUC",
    Distance:818.19,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"DBV",
    To:"MUC",
    Distance:818.19,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DBV",
    To:"NCL",
    Distance:2002,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"DBV",
    To:"ORY",
    Distance:1410.01,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DBV",
    To:"OSI",
    Distance:325.507,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"DBV",
    To:"OSL",
    Distance:2019.96,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"DBV",
    To:"RJK",
    Distance:418.254,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"DBV",
    To:"STN",
    Distance:1703.73,
    Airport:"easyJet"
}),
new Routes(
{
    From:"DBV",
    To:"STR",
    Distance:978.152,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DBV",
    To:"TRD",
    Distance:2371.31,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"DBV",
    To:"TRF",
    Distance:1928.92,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"DBV",
    To:"TXL",
    Distance:1172.18,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"DBV",
    To:"TXL",
    Distance:1172.18,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DBV",
    To:"VCE",
    Distance:574.949,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"DBV",
    To:"VIE",
    Distance:631.089,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"DBV",
    To:"VIE",
    Distance:631.089,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"DBV",
    To:"WAW",
    Distance:1086.93,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"DBV",
    To:"ZAG",
    Distance:394.863,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"DBV",
    To:"ZRH",
    Distance:937.471,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"DBV",
    To:"ZRH",
    Distance:937.471,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"DCA",
    To:"AGS",
    Distance:753.023,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"AGS",
    Distance:753.023,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"ALB",
    Distance:511.652,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"ALB",
    Distance:511.652,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"ATL",
    Distance:880.087,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"DCA",
    To:"ATL",
    Distance:880.087,
    Airport:"Air France"
}),
new Routes(
{
    From:"DCA",
    To:"ATL",
    Distance:880.087,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DCA",
    To:"ATL",
    Distance:880.087,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"DCA",
    To:"ATL",
    Distance:880.087,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DCA",
    To:"ATL",
    Distance:880.087,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"ATL",
    Distance:880.087,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"AUS",
    Distance:2114.36,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"BDL",
    Distance:503.651,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"BDL",
    Distance:503.651,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"BGR",
    Distance:948.378,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"BGR",
    Distance:948.378,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"BHM",
    Distance:1050.59,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"BHM",
    Distance:1050.59,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"BNA",
    Distance:902.482,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"BNA",
    Distance:902.482,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"BOS",
    Distance:641.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"BOS",
    Distance:641.48,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DCA",
    To:"BOS",
    Distance:641.48,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"BTV",
    Distance:703.076,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"BTV",
    Distance:703.076,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"BUF",
    Distance:476.371,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"BUF",
    Distance:476.371,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"CAE",
    Distance:657.051,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"CAE",
    Distance:657.051,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"CAK",
    Distance:440.262,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"CAK",
    Distance:440.262,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"CHA",
    Distance:840.205,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"CHA",
    Distance:840.205,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"CHS",
    Distance:715.023,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"CHS",
    Distance:715.023,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"CLE",
    Distance:498.238,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"CLT",
    Distance:532.636,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"CLT",
    Distance:532.636,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"CMH",
    Distance:518.616,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"CMH",
    Distance:518.616,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"CRW",
    Distance:399.329,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"CRW",
    Distance:399.329,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"CVG",
    Distance:659.983,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"CVG",
    Distance:659.983,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DCA",
    To:"CVG",
    Distance:659.983,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"DAY",
    Distance:628.043,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"DAY",
    Distance:628.043,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"DEN",
    Distance:2369.2,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"DEN",
    Distance:2369.2,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"DFW",
    Distance:1914.94,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"DFW",
    Distance:1914.94,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"DSM",
    Distance:1440.86,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"DSM",
    Distance:1440.86,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"DTW",
    Distance:651.251,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"DTW",
    Distance:651.251,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DCA",
    To:"DTW",
    Distance:651.251,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"EWR",
    Distance:319.345,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"FAY",
    Distance:459.466,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"FAY",
    Distance:459.466,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"FLL",
    Distance:1450.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"FLL",
    Distance:1450.48,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DCA",
    To:"FLL",
    Distance:1450.48,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"GSO",
    Distance:399.041,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"GSO",
    Distance:399.041,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"GSP",
    Distance:636.927,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"GSP",
    Distance:636.927,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"HHH",
    Distance:810.63,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"HHH",
    Distance:810.63,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"HOU",
    Distance:1958.83,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"HPN",
    Distance:375.732,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"HPN",
    Distance:375.732,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"HSV",
    Distance:985.317,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"HSV",
    Distance:985.317,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"IAH",
    Distance:1941.63,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"ILM",
    Distance:515.25,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"ILM",
    Distance:515.25,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"IND",
    Distance:802.103,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"IND",
    Distance:802.103,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"ISP",
    Distance:399.633,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"ISP",
    Distance:399.633,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"JAN",
    Distance:1383.24,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"JAN",
    Distance:1383.24,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"JAX",
    Distance:1021.64,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"JAX",
    Distance:1021.64,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"JFK",
    Distance:342.216,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"JFK",
    Distance:342.216,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DCA",
    To:"JFK",
    Distance:342.216,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"LAN",
    Distance:770.407,
    Airport:"Sun Country Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"LAS",
    Distance:3353.6,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"LAS",
    Distance:3353.6,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"LAX",
    Distance:3710.9,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"LAX",
    Distance:3710.9,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"LAX",
    Distance:3710.9,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DCA",
    To:"LAX",
    Distance:3710.9,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"LEX",
    Distance:665.117,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DCA",
    To:"LGA",
    Distance:344.786,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"LGA",
    Distance:344.786,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DCA",
    To:"LGA",
    Distance:344.786,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"LIT",
    Distance:1425.83,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"LIT",
    Distance:1425.83,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"MCI",
    Distance:1524.24,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"MCI",
    Distance:1524.24,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"MCI",
    Distance:1524.24,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"MCO",
    Distance:1224.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"MCO",
    Distance:1224.12,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DCA",
    To:"MCO",
    Distance:1224.12,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"MEM",
    Distance:1224.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"MEM",
    Distance:1224.01,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DCA",
    To:"MEM",
    Distance:1224.01,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"MHT",
    Distance:653.626,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"MHT",
    Distance:653.626,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"MIA",
    Distance:1483.59,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"MIA",
    Distance:1483.59,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"MKE",
    Distance:1018.86,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DCA",
    To:"MKE",
    Distance:1018.86,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"MSN",
    Distance:1135.56,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DCA",
    To:"MSP",
    Distance:1494.84,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"MSP",
    Distance:1494.84,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DCA",
    To:"MSP",
    Distance:1494.84,
    Airport:"Sun Country Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"MSP",
    Distance:1494.84,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"MSY",
    Distance:1559.35,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"MSY",
    Distance:1559.35,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"MYR",
    Distance:599.551,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"MYR",
    Distance:599.551,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"NAS",
    Distance:1536.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"NAS",
    Distance:1536.48,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"OAJ",
    Distance:450.236,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"OAJ",
    Distance:450.236,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"OMA",
    Distance:1623.99,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"OMA",
    Distance:1623.99,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DCA",
    To:"OMA",
    Distance:1623.99,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"ORD",
    Distance:982.621,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"ORD",
    Distance:982.621,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"ORD",
    Distance:982.621,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"ORF",
    Distance:229.708,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"ORF",
    Distance:229.708,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"PBI",
    Distance:1382.75,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"PBI",
    Distance:1382.75,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"PDX",
    Distance:3773.19,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"PDX",
    Distance:3773.19,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"PHL",
    Distance:191.608,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"PHL",
    Distance:191.608,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"PHX",
    Distance:3177.68,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"PHX",
    Distance:3177.68,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"PIT",
    Distance:328.62,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"PIT",
    Distance:328.62,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"PNS",
    Distance:1313.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"PNS",
    Distance:1313.43,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"PVD",
    Distance:573.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"PVD",
    Distance:573.89,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"PWM",
    Distance:774.481,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"PWM",
    Distance:774.481,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"RDU",
    Distance:365.086,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"RDU",
    Distance:365.086,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"ROC",
    Distance:477.422,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"ROC",
    Distance:477.422,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"RSW",
    Distance:1438.26,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DCA",
    To:"RSW",
    Distance:1438.26,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"RSW",
    Distance:1438.26,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"RSW",
    Distance:1438.26,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"SAN",
    Distance:3654.77,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"SAN",
    Distance:3654.77,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"SAV",
    Distance:837.151,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"SAV",
    Distance:837.151,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"SDF",
    Distance:760.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"SDF",
    Distance:760.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"SEA",
    Distance:3738.16,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"SFO",
    Distance:3920.94,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"SFO",
    Distance:3920.94,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"DCA",
    To:"SJU",
    Distance:2507.48,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DCA",
    To:"SLC",
    Distance:2972.04,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DCA",
    To:"SRQ",
    Distance:1372.86,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"SRQ",
    Distance:1372.86,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"STL",
    Distance:1154.38,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"STL",
    Distance:1154.38,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"STL",
    Distance:1154.38,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"SYR",
    Distance:479.992,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"SYR",
    Distance:479.992,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"TLH",
    Distance:1153.06,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"TLH",
    Distance:1153.06,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"TPA",
    Distance:1311.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"TPA",
    Distance:1311.87,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DCA",
    To:"TPA",
    Distance:1311.87,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"TYS",
    Distance:701.581,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"TYS",
    Distance:701.581,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"VPS",
    Distance:1270.83,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"VPS",
    Distance:1270.83,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"YHZ",
    Distance:1303.04,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"YHZ",
    Distance:1303.04,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"YOW",
    Distance:728.255,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DCA",
    To:"YUL",
    Distance:784.321,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DCA",
    To:"YUL",
    Distance:784.321,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"YUL",
    Distance:784.321,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCA",
    To:"YYZ",
    Distance:578.563,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DCA",
    To:"YYZ",
    Distance:578.563,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DCA",
    To:"YYZ",
    Distance:578.563,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DCM",
    To:"AGF",
    Distance:152.551,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"DCM",
    To:"AJA",
    Distance:561.89,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"DCM",
    To:"ORY",
    Distance:574.795,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"DCY",
    To:"CTU",
    Distance:400.248,
    Airport:"Air China"
}),
new Routes(
{
    From:"DCY",
    To:"CTU",
    Distance:400.248,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DCY",
    To:"CTU",
    Distance:400.248,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DCY",
    To:"CTU",
    Distance:400.248,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"DDC",
    To:"DEN",
    Distance:469.798,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DDC",
    To:"DEN",
    Distance:469.798,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"DDC",
    To:"DEN",
    Distance:469.798,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DDC",
    To:"LBL",
    Distance:118.776,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DDC",
    To:"LBL",
    Distance:118.776,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"DDC",
    To:"LBL",
    Distance:118.776,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DDG",
    To:"PEK",
    Distance:655.378,
    Airport:"Air China"
}),
new Routes(
{
    From:"DDG",
    To:"PEK",
    Distance:655.378,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DDG",
    To:"PVG",
    Distance:1012.69,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DDG",
    To:"TAO",
    Distance:540.045,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DDG",
    To:"TAO",
    Distance:540.045,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"DEA",
    To:"KHI",
    Distance:650.718,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"DEA",
    To:"SHJ",
    Distance:1560.28,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"DEB",
    To:"EIN",
    Distance:1250.25,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"DEB",
    To:"LTN",
    Distance:1647.8,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"DEC",
    To:"ORD",
    Distance:251.705,
    Airport:"Air Choice One"
}),
new Routes(
{
    From:"DEC",
    To:"STL",
    Distance:177.022,
    Airport:"Air Choice One"
}),
new Routes(
{
    From:"DED",
    To:"DEL",
    Distance:208.492,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DED",
    To:"DEL",
    Distance:208.492,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DED",
    To:"DEL",
    Distance:208.492,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DED",
    To:"DEL",
    Distance:208.492,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DED",
    To:"LKO",
    Distance:464.178,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEE",
    To:"UUS",
    Distance:424.593,
    Airport:"Sat Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"ADD",
    Distance:4552.46,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"ADD",
    Distance:4552.46,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"ALA",
    Distance:1644.09,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"DEL",
    To:"AMD",
    Distance:756.518,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"AMD",
    Distance:756.518,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"AMD",
    Distance:756.518,
    Airport:"Go Air"
}),
new Routes(
{
    From:"DEL",
    To:"AMD",
    Distance:756.518,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"AMD",
    Distance:756.518,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"AMD",
    Distance:756.518,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"AMM",
    Distance:3945.43,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"DEL",
    To:"AMS",
    Distance:6363.45,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"ASB",
    Distance:2027.06,
    Airport:"Turkmenistan Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"ATQ",
    Distance:413.869,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"ATQ",
    Distance:413.869,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"ATQ",
    Distance:413.869,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"ATQ",
    Distance:413.869,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"AUH",
    Distance:2277.38,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"DEL",
    To:"AUH",
    Distance:2277.38,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"DEL",
    To:"AUH",
    Distance:2277.38,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"BAH",
    Distance:2619.78,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"BAH",
    Distance:2619.78,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"DEL",
    To:"BBI",
    Distance:1277.71,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"BBI",
    Distance:1277.71,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"BDQ",
    Distance:794.479,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"BDQ",
    Distance:794.479,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"BHO",
    Distance:587.469,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"BHO",
    Distance:587.469,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"BHO",
    Distance:587.469,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"BHX",
    Distance:6798.84,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"BKK",
    Distance:2948.49,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"BKK",
    Distance:2948.49,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"BKK",
    Distance:2948.49,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"BKK",
    Distance:2948.49,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"DEL",
    To:"BLR",
    Distance:1737.46,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"BLR",
    Distance:1737.46,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"BLR",
    Distance:1737.46,
    Airport:"Go Air"
}),
new Routes(
{
    From:"DEL",
    To:"BLR",
    Distance:1737.46,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"BLR",
    Distance:1737.46,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"BLR",
    Distance:1737.46,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"BOM",
    Distance:1138.23,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"BOM",
    Distance:1138.23,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"BOM",
    Distance:1138.23,
    Airport:"Go Air"
}),
new Routes(
{
    From:"DEL",
    To:"BOM",
    Distance:1138.23,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"BOM",
    Distance:1138.23,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"BOM",
    Distance:1138.23,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"BRU",
    Distance:6399.31,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DEL",
    To:"BRU",
    Distance:6399.31,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"BRU",
    Distance:6399.31,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"CAN",
    Distance:3649.66,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"CCU",
    Distance:1312.68,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"CCU",
    Distance:1312.68,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"CCU",
    Distance:1312.68,
    Airport:"Go Air"
}),
new Routes(
{
    From:"DEL",
    To:"CCU",
    Distance:1312.68,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"CCU",
    Distance:1312.68,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"CCU",
    Distance:1312.68,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"CDG",
    Distance:6565.37,
    Airport:"Air France"
}),
new Routes(
{
    From:"DEL",
    To:"CDG",
    Distance:6565.37,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"CJB",
    Distance:1949.98,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"CMB",
    Distance:2395.85,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"CMB",
    Distance:2395.85,
    Airport:"L"
}),
new Routes(
{
    From:"DEL",
    To:"CMB",
    Distance:2395.85,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"COK",
    Distance:2048.55,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"COK",
    Distance:2048.55,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"DAC",
    Distance:1425.41,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"DAC",
    Distance:1425.41,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"DAC",
    Distance:1425.41,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"DED",
    Distance:208.492,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"DED",
    Distance:208.492,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"DED",
    Distance:208.492,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"DED",
    Distance:208.492,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"DHM",
    Distance:408.17,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"DHM",
    Distance:408.17,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"DIB",
    Distance:1760.83,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"DMM",
    Distance:2696.95,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"DMM",
    Distance:2696.95,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"DMM",
    Distance:2696.95,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"DOH",
    Distance:2553.73,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"DOH",
    Distance:2553.73,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DEL",
    To:"DXB",
    Distance:2183.59,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"DXB",
    Distance:2183.59,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DEL",
    To:"DXB",
    Distance:2183.59,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"DXB",
    Distance:2183.59,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"DXB",
    Distance:2183.59,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"DYU",
    Distance:1347.36,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"DEL",
    To:"EWR",
    Distance:11763.7,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"FCO",
    Distance:5932,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"DEL",
    To:"FCO",
    Distance:5932,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"FRA",
    Distance:6122.63,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"FRA",
    Distance:6122.63,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DEL",
    To:"GAU",
    Distance:1455.52,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"GAU",
    Distance:1455.52,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"GAU",
    Distance:1455.52,
    Airport:"Go Air"
}),
new Routes(
{
    From:"DEL",
    To:"GAU",
    Distance:1455.52,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"GAU",
    Distance:1455.52,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"GAU",
    Distance:1455.52,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"GOI",
    Distance:1504.24,
    Airport:"Go Air"
}),
new Routes(
{
    From:"DEL",
    To:"GOI",
    Distance:1504.24,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"GOI",
    Distance:1504.24,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"GOP",
    Distance:657.166,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"GOP",
    Distance:657.166,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"HEA",
    Distance:1543.03,
    Airport:"Safi Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"HEL",
    Distance:5223.06,
    Airport:"Finnair"
}),
new Routes(
{
    From:"DEL",
    To:"HKG",
    Distance:3746.36,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"HKG",
    Distance:3746.36,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"HKG",
    Distance:3746.36,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"DEL",
    To:"HKG",
    Distance:3746.36,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"DEL",
    To:"HKG",
    Distance:3746.36,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"HYD",
    Distance:1243.58,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"HYD",
    Distance:1243.58,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"HYD",
    Distance:1243.58,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"HYD",
    Distance:1243.58,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"HYD",
    Distance:1243.58,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"ICN",
    Distance:4652.43,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"ICN",
    Distance:4652.43,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"IDR",
    Distance:662.859,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"IDR",
    Distance:662.859,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"IDR",
    Distance:662.859,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"IDR",
    Distance:662.859,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"IDR",
    Distance:662.859,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"IKA",
    Distance:2554.41,
    Airport:"Mahan Air"
}),
new Routes(
{
    From:"DEL",
    To:"IST",
    Distance:4558.52,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"IST",
    Distance:4558.52,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"IXB",
    Distance:1125.16,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"IXB",
    Distance:1125.16,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"IXB",
    Distance:1125.16,
    Airport:"Go Air"
}),
new Routes(
{
    From:"DEL",
    To:"IXB",
    Distance:1125.16,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"IXB",
    Distance:1125.16,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"IXB",
    Distance:1125.16,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"IXC",
    Distance:236.249,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"IXC",
    Distance:236.249,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"IXC",
    Distance:236.249,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"IXC",
    Distance:236.249,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"IXD",
    Distance:575.519,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"IXJ",
    Distance:507.05,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"IXJ",
    Distance:507.05,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"IXJ",
    Distance:507.05,
    Airport:"Go Air"
}),
new Routes(
{
    From:"DEL",
    To:"IXJ",
    Distance:507.05,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"IXJ",
    Distance:507.05,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"IXJ",
    Distance:507.05,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"IXL",
    Distance:620.713,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"IXL",
    Distance:620.713,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"IXL",
    Distance:620.713,
    Airport:"Go Air"
}),
new Routes(
{
    From:"DEL",
    To:"IXL",
    Distance:620.713,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"IXR",
    Distance:1007.67,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"IXR",
    Distance:1007.67,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"IXR",
    Distance:1007.67,
    Airport:"Go Air"
}),
new Routes(
{
    From:"DEL",
    To:"IXR",
    Distance:1007.67,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"IXR",
    Distance:1007.67,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"IXU",
    Distance:983.092,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"IXU",
    Distance:983.092,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"JAI",
    Distance:231.701,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"JAI",
    Distance:231.701,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"JAI",
    Distance:231.701,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"JAI",
    Distance:231.701,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"JDH",
    Distance:475.81,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"JDH",
    Distance:475.81,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"JDH",
    Distance:475.81,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"JED",
    Distance:3879.71,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"JED",
    Distance:3879.71,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"JFK",
    Distance:11754.5,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"JLR",
    Distance:667.811,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"JLR",
    Distance:667.811,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"KBL",
    Distance:1001.29,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"KBL",
    Distance:1001.29,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"KBL",
    Distance:1001.29,
    Airport:"Kam Air"
}),
new Routes(
{
    From:"DEL",
    To:"KBL",
    Distance:1001.29,
    Airport:"Safi Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"KBL",
    Distance:1001.29,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"KDH",
    Distance:1131.04,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"KHI",
    Distance:1067.41,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"KNU",
    Distance:399.123,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"KTM",
    Distance:815.167,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"KTM",
    Distance:815.167,
    Airport:"Druk Air"
}),
new Routes(
{
    From:"DEL",
    To:"KTM",
    Distance:815.167,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"KTM",
    Distance:815.167,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"KTM",
    Distance:815.167,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"KUL",
    Distance:3876.9,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"KUL",
    Distance:3876.9,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"KUL",
    Distance:3876.9,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"DEL",
    To:"KUU",
    Distance:368.111,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"KWI",
    Distance:2829.87,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"DEL",
    To:"LHE",
    Distance:418.872,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"LHR",
    Distance:6731.12,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"LHR",
    Distance:6731.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"LHR",
    Distance:6731.12,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DEL",
    To:"LHR",
    Distance:6731.12,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"LHR",
    Distance:6731.12,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"DEL",
    To:"LKO",
    Distance:423.48,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"LKO",
    Distance:423.48,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"LKO",
    Distance:423.48,
    Airport:"Go Air"
}),
new Routes(
{
    From:"DEL",
    To:"LKO",
    Distance:423.48,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"LKO",
    Distance:423.48,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"LKO",
    Distance:423.48,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"LUH",
    Distance:277.631,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"MAA",
    Distance:1760.59,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"MAA",
    Distance:1760.59,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"MAA",
    Distance:1760.59,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"MAA",
    Distance:1760.59,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"MAA",
    Distance:1760.59,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"MCT",
    Distance:1956.59,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"MCT",
    Distance:1956.59,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"DEL",
    To:"MEL",
    Distance:10191.8,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"MRU",
    Distance:5833.57,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"MRU",
    Distance:5833.57,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"DEL",
    To:"MUC",
    Distance:5899.45,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"MUC",
    Distance:5899.45,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DEL",
    To:"NAG",
    Distance:853.895,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"NAG",
    Distance:853.895,
    Airport:"Go Air"
}),
new Routes(
{
    From:"DEL",
    To:"NAG",
    Distance:853.895,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"NBO",
    Distance:5416.32,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"DEL",
    To:"NRT",
    Distance:5908.87,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"NRT",
    Distance:5908.87,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"DEL",
    To:"NRT",
    Distance:5908.87,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"ORD",
    Distance:12021.3,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"PAT",
    Distance:856.713,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"PAT",
    Distance:856.713,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"PAT",
    Distance:856.713,
    Airport:"Go Air"
}),
new Routes(
{
    From:"DEL",
    To:"PAT",
    Distance:856.713,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"PAT",
    Distance:856.713,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"PEK",
    Distance:3808.9,
    Airport:"Air China"
}),
new Routes(
{
    From:"DEL",
    To:"PNQ",
    Distance:1156.46,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"PNQ",
    Distance:1156.46,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"PNQ",
    Distance:1156.46,
    Airport:"Go Air"
}),
new Routes(
{
    From:"DEL",
    To:"PNQ",
    Distance:1156.46,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"PNQ",
    Distance:1156.46,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"PNQ",
    Distance:1156.46,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"PVG",
    Distance:4291.5,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"PVG",
    Distance:4291.5,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"RPR",
    Distance:944.829,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"RPR",
    Distance:944.829,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"RPR",
    Distance:944.829,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"RUH",
    Distance:3037.07,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"RUH",
    Distance:3037.07,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"SHJ",
    Distance:2166.62,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"DEL",
    To:"SIN",
    Distance:4159.45,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"SIN",
    Distance:4159.45,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DEL",
    To:"SIN",
    Distance:4159.45,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"SIN",
    Distance:4159.45,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"STV",
    Distance:938.036,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"STV",
    Distance:938.036,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"SVO",
    Distance:4363.35,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"SXR",
    Distance:642.035,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"SXR",
    Distance:642.035,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"SXR",
    Distance:642.035,
    Airport:"Go Air"
}),
new Routes(
{
    From:"DEL",
    To:"SXR",
    Distance:642.035,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"SXR",
    Distance:642.035,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"SXR",
    Distance:642.035,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"SYD",
    Distance:10435.4,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"TAS",
    Distance:1579.5,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"DEL",
    To:"TPE",
    Distance:4372.01,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"DEL",
    To:"TPE",
    Distance:4372.01,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"UDR",
    Distance:542.591,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"UDR",
    Distance:542.591,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"UDR",
    Distance:542.591,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"UDR",
    Distance:542.591,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"VIE",
    Distance:5546,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"VIE",
    Distance:5546,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"VNS",
    Distance:667.008,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"VNS",
    Distance:667.008,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DEL",
    To:"VNS",
    Distance:667.008,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DEL",
    To:"VNS",
    Distance:667.008,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DEL",
    To:"VNS",
    Distance:667.008,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DEL",
    To:"VTZ",
    Distance:1358,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"ZRH",
    Distance:6147.84,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DEL",
    To:"ZRH",
    Distance:6147.84,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"DEN",
    To:"ABQ",
    Distance:562.656,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"ABQ",
    Distance:562.656,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ABQ",
    Distance:562.656,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"AIA",
    Distance:289.863,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"AIA",
    Distance:289.863,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"AIA",
    Distance:289.863,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ALS",
    Distance:289.045,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ALS",
    Distance:289.045,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ALS",
    Distance:289.045,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"AMA",
    Distance:578.616,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"AMA",
    Distance:578.616,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"AMA",
    Distance:578.616,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ANC",
    Distance:3863.06,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ASE",
    Distance:201.22,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ATL",
    Distance:1926.63,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"DEN",
    To:"ATL",
    Distance:1926.63,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DEN",
    To:"ATL",
    Distance:1926.63,
    Airport:"Air France"
}),
new Routes(
{
    From:"DEN",
    To:"ATL",
    Distance:1926.63,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"ATL",
    Distance:1926.63,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"DEN",
    To:"ATL",
    Distance:1926.63,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DEN",
    To:"ATL",
    Distance:1926.63,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ATL",
    Distance:1926.63,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ATL",
    Distance:1926.63,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ATL",
    Distance:1926.63,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ATL",
    Distance:1926.63,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"DEN",
    To:"AUS",
    Distance:1248.82,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"AUS",
    Distance:1248.82,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"AUS",
    Distance:1248.82,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BDL",
    Distance:2682.92,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BFF",
    Distance:241.394,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BFL",
    Distance:1356.74,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BHM",
    Distance:1740.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BIL",
    Distance:732.343,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BIS",
    Distance:831.233,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BIS",
    Distance:831.233,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BKG",
    Distance:1067.76,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BMI",
    Distance:1338.84,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BNA",
    Distance:1627.6,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"BNA",
    Distance:1627.6,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BNA",
    Distance:1627.6,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BNA",
    Distance:1627.6,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BOI",
    Distance:1042.18,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BOI",
    Distance:1042.18,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BOS",
    Distance:2815.75,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DEN",
    To:"BOS",
    Distance:2815.75,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BOS",
    Distance:2815.75,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BUR",
    Distance:1366.11,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BUR",
    Distance:1366.11,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BWI",
    Distance:2393.56,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"BWI",
    Distance:2393.56,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BWI",
    Distance:2393.56,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BZN",
    Distance:843.588,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"BZN",
    Distance:843.588,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CAK",
    Distance:1965.21,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CEZ",
    Distance:446.146,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CID",
    Distance:1111.71,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CID",
    Distance:1111.71,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CLE",
    Distance:1927.94,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CLE",
    Distance:1927.94,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CLT",
    Distance:2148.21,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CLT",
    Distance:2148.21,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DEN",
    To:"CMH",
    Distance:1852.66,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"CMH",
    Distance:1852.66,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CMH",
    Distance:1852.66,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"COD",
    Distance:629.705,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"COS",
    Distance:117.429,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CPR",
    Distance:370.212,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CUN",
    Distance:2689.26,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"CUN",
    Distance:2689.26,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CUN",
    Distance:2689.26,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CVG",
    Distance:1716.37,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DEN",
    To:"CVG",
    Distance:1716.37,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CVG",
    Distance:1716.37,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CYS",
    Distance:144.37,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CYS",
    Distance:144.37,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CYS",
    Distance:144.37,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"CZM",
    Distance:2733.47,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"DAY",
    Distance:1741.44,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"DAY",
    Distance:1741.44,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"DCA",
    Distance:2369.2,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"DCA",
    Distance:2369.2,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"DDC",
    Distance:469.798,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"DFW",
    Distance:1032.1,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"DFW",
    Distance:1032.1,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"DFW",
    Distance:1032.1,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"DFW",
    Distance:1032.1,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DEN",
    To:"DFW",
    Distance:1032.1,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"DIK",
    Distance:785.876,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"DRO",
    Distance:403.264,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"DSM",
    Distance:945.932,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"DSM",
    Distance:945.932,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"DTW",
    Distance:1802.31,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DEN",
    To:"DTW",
    Distance:1802.31,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"DTW",
    Distance:1802.31,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"DTW",
    Distance:1802.31,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"DTW",
    Distance:1802.31,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"EAR",
    Distance:490.02,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"EGE",
    Distance:193.416,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ELP",
    Distance:908.638,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"EUG",
    Distance:1599.72,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"EUG",
    Distance:1599.72,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"EWR",
    Distance:2576.43,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"EWR",
    Distance:2576.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"FAR",
    Distance:1008.48,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"FAR",
    Distance:1008.48,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"FAT",
    Distance:1354.78,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"FAT",
    Distance:1354.78,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"FCA",
    Distance:1209.83,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"FLL",
    Distance:2739.04,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"FLL",
    Distance:2739.04,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"FLL",
    Distance:2739.04,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"FLL",
    Distance:2739.04,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"FMN",
    Distance:465.445,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"FMN",
    Distance:465.445,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"FMN",
    Distance:465.445,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"FRA",
    Distance:8087.82,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DEN",
    To:"FRA",
    Distance:8087.82,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"FSD",
    Distance:776.92,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"FSD",
    Distance:776.92,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"GCC",
    Distance:504.042,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"GEG",
    Distance:1342.9,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"GEG",
    Distance:1342.9,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"GEG",
    Distance:1342.9,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"GEG",
    Distance:1342.9,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"GJT",
    Distance:340.708,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"GRR",
    Distance:1629.09,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"GRR",
    Distance:1629.09,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"GSO",
    Distance:2200.64,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"GTF",
    Distance:1003.19,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"GUC",
    Distance:244.365,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"HDN",
    Distance:226.894,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"HLN",
    Distance:954.722,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"HNL",
    Distance:5407.85,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"HOU",
    Distance:1421.89,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"HSV",
    Distance:1683.72,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"IAD",
    Distance:2331.71,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"IAD",
    Distance:2331.71,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"IAH",
    Distance:1387.5,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"IAH",
    Distance:1387.5,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"IAH",
    Distance:1387.5,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ICT",
    Distance:673.998,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"IDA",
    Distance:735.974,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ILG",
    Distance:2473.24,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"IND",
    Distance:1567.63,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"IND",
    Distance:1567.63,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"IND",
    Distance:1567.63,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"IND",
    Distance:1567.63,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ISN",
    Distance:928.37,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"JAC",
    Distance:652.915,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"JAX",
    Distance:2324.93,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"JFK",
    Distance:2609.8,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DEN",
    To:"JFK",
    Distance:2609.8,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DEN",
    To:"KEF",
    Distance:5727,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"DEN",
    To:"KOA",
    Distance:5351.46,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LAR",
    Distance:182.119,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LAS",
    Distance:1009.37,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"LAS",
    Distance:1009.37,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LAS",
    Distance:1009.37,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LAS",
    Distance:1009.37,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LAS",
    Distance:1009.37,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LAX",
    Distance:1385.13,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"LAX",
    Distance:1385.13,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LAX",
    Distance:1385.13,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LAX",
    Distance:1385.13,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LAX",
    Distance:1385.13,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LAX",
    Distance:1385.13,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DEN",
    To:"LAX",
    Distance:1385.13,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LBB",
    Distance:734.357,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LBF",
    Distance:365.415,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LBL",
    Distance:450.142,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LGA",
    Distance:2599.82,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DEN",
    To:"LGA",
    Distance:2599.82,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LGA",
    Distance:2599.82,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LGA",
    Distance:2599.82,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LHR",
    Distance:7496.06,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LHR",
    Distance:7496.06,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DEN",
    To:"LHR",
    Distance:7496.06,
    Airport:"Finnair"
}),
new Routes(
{
    From:"DEN",
    To:"LHR",
    Distance:7496.06,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LIH",
    Distance:5486.7,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LIR",
    Distance:3761.89,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LIT",
    Distance:1238.68,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LIT",
    Distance:1238.68,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"LNK",
    Distance:679.296,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MAF",
    Distance:908.15,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MCI",
    Distance:855.388,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"MCI",
    Distance:855.388,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MCI",
    Distance:855.388,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MCI",
    Distance:855.388,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MCK",
    Distance:349.52,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MCO",
    Distance:2486.36,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"MCO",
    Distance:2486.36,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MCO",
    Distance:2486.36,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MCO",
    Distance:2486.36,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MDT",
    Distance:2366.84,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MDW",
    Distance:1437.35,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"MDW",
    Distance:1437.35,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MDW",
    Distance:1437.35,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MEM",
    Distance:1401.43,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DEN",
    To:"MEM",
    Distance:1401.43,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MEM",
    Distance:1401.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MEX",
    Distance:2333.47,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MEX",
    Distance:2333.47,
    Airport:"Volaris"
}),
new Routes(
{
    From:"DEN",
    To:"MFR",
    Distance:1546.88,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MIA",
    Distance:2748.7,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MIA",
    Distance:2748.7,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DEN",
    To:"MIA",
    Distance:2748.7,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MKE",
    Distance:1437.99,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"MKE",
    Distance:1437.99,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MKE",
    Distance:1437.99,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MKE",
    Distance:1437.99,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MLI",
    Distance:1206.53,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MOT",
    Distance:972.08,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MOT",
    Distance:972.08,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MRY",
    Distance:1540.75,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MSN",
    Distance:1325.97,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MSN",
    Distance:1325.97,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MSO",
    Distance:1091.39,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MSP",
    Distance:1092.37,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"MSP",
    Distance:1092.37,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DEN",
    To:"MSP",
    Distance:1092.37,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MSP",
    Distance:1092.37,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MSP",
    Distance:1092.37,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MSP",
    Distance:1092.37,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MSY",
    Distance:1708.09,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DEN",
    To:"MSY",
    Distance:1708.09,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"MSY",
    Distance:1708.09,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MSY",
    Distance:1708.09,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MSY",
    Distance:1708.09,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"MTJ",
    Distance:315.67,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"NRT",
    Distance:9292.73,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"DEN",
    To:"NRT",
    Distance:9292.73,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"OAK",
    Distance:1536.76,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"OGG",
    Distance:5308.32,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"OKC",
    Distance:796.3,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"OKC",
    Distance:796.3,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"OKC",
    Distance:796.3,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"OKC",
    Distance:796.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"OMA",
    Distance:758.158,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"OMA",
    Distance:758.158,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"OMA",
    Distance:758.158,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"OMA",
    Distance:758.158,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ONT",
    Distance:1315.73,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"ONT",
    Distance:1315.73,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ONT",
    Distance:1315.73,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ORD",
    Distance:1426.03,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ORD",
    Distance:1426.03,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ORD",
    Distance:1426.03,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DEN",
    To:"ORD",
    Distance:1426.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"ORF",
    Distance:2493.02,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"PDX",
    Distance:1592.13,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PDX",
    Distance:1592.13,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PDX",
    Distance:1592.13,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PGA",
    Distance:674.394,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PHF",
    Distance:2460.81,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PHL",
    Distance:2500.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PHL",
    Distance:2500.4,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PHL",
    Distance:2500.4,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DEN",
    To:"PHL",
    Distance:2500.4,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PHX",
    Distance:968.5,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"PHX",
    Distance:968.5,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PHX",
    Distance:968.5,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PHX",
    Distance:968.5,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PHX",
    Distance:968.5,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PHX",
    Distance:968.5,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DEN",
    To:"PHX",
    Distance:968.5,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PIA",
    Distance:1272.65,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PIR",
    Distance:619.18,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PIR",
    Distance:619.18,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PIR",
    Distance:619.18,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PIT",
    Distance:2070.97,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PIT",
    Distance:2070.97,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PSC",
    Distance:1369.52,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PSP",
    Distance:1246.8,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PSP",
    Distance:1246.8,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PUB",
    Distance:175.525,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PVR",
    Distance:2133.61,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"PVR",
    Distance:2133.61,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"RAP",
    Distance:483.982,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"RDM",
    Distance:1442.26,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"RDU",
    Distance:2306.48,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"RIW",
    Distance:475.67,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"RKS",
    Distance:417.145,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"RNO",
    Distance:1290.88,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"RNO",
    Distance:1290.88,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"RSW",
    Distance:2584.04,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"RSW",
    Distance:2584.04,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SAF",
    Distance:488.105,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SAN",
    Distance:1371.29,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"SAN",
    Distance:1371.29,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SAN",
    Distance:1371.29,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SAN",
    Distance:1371.29,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SAT",
    Distance:1279.94,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"SAT",
    Distance:1279.94,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SAT",
    Distance:1279.94,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SBA",
    Distance:1471.41,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SBA",
    Distance:1471.41,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SDF",
    Distance:1643.6,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SDF",
    Distance:1643.6,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SEA",
    Distance:1645.08,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SEA",
    Distance:1645.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SEA",
    Distance:1645.08,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SEA",
    Distance:1645.08,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SEA",
    Distance:1645.08,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SFO",
    Distance:1552.75,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SFO",
    Distance:1552.75,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SFO",
    Distance:1552.75,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SGF",
    Distance:1022.65,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SGU",
    Distance:834.9,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SHR",
    Distance:577.65,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SHV",
    Distance:1274.33,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SJC",
    Distance:1522.31,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SJC",
    Distance:1522.31,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SJD",
    Distance:1917.77,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"SJD",
    Distance:1917.77,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SJD",
    Distance:1917.77,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SJO",
    Distance:3888.3,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SLC",
    Distance:627.557,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"SLC",
    Distance:627.557,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DEN",
    To:"SLC",
    Distance:627.557,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SLC",
    Distance:627.557,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SLC",
    Distance:627.557,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SMF",
    Distance:1459.72,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"SMF",
    Distance:1459.72,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SMF",
    Distance:1459.72,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SNA",
    Distance:1359.69,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"SNA",
    Distance:1359.69,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SNA",
    Distance:1359.69,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"SNA",
    Distance:1359.69,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"STL",
    Distance:1235.52,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"STL",
    Distance:1235.52,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"STL",
    Distance:1235.52,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"TPA",
    Distance:2422.53,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"TPA",
    Distance:2422.53,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"TPA",
    Distance:2422.53,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"TPA",
    Distance:2422.53,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"TUL",
    Distance:870.043,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"TUL",
    Distance:870.043,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"TUS",
    Distance:1028.8,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DEN",
    To:"TUS",
    Distance:1028.8,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"TUS",
    Distance:1028.8,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"TYS",
    Distance:1866.36,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"TYS",
    Distance:1866.36,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"XNA",
    Distance:990.09,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"YEG",
    Distance:1640,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DEN",
    To:"YEG",
    Distance:1640,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"YMM",
    Distance:1926.94,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DEN",
    To:"YMM",
    Distance:1926.94,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"YQR",
    Distance:1175.36,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DEN",
    To:"YQR",
    Distance:1175.36,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"YUL",
    Distance:2587.51,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DEN",
    To:"YUL",
    Distance:2587.51,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"YVR",
    Distance:1789.5,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DEN",
    To:"YVR",
    Distance:1789.5,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"YWG",
    Distance:1260.01,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DEN",
    To:"YWG",
    Distance:1260.01,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"YXE",
    Distance:1377.49,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DEN",
    To:"YXE",
    Distance:1377.49,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"YYC",
    Distance:1445.26,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DEN",
    To:"YYC",
    Distance:1445.26,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DEN",
    To:"YYZ",
    Distance:2111.21,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DEN",
    To:"YYZ",
    Distance:2111.21,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ABI",
    Distance:253.333,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ABI",
    Distance:253.333,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"ABQ",
    Distance:913.83,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ABQ",
    Distance:913.83,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"ACT",
    Distance:144.087,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ACT",
    Distance:144.087,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"AEX",
    Distance:457.261,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"AEX",
    Distance:457.261,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"AGU",
    Distance:1348.75,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"AGU",
    Distance:1348.75,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"AMA",
    Distance:501.516,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"AMA",
    Distance:501.516,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"AMS",
    Distance:7900.1,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DFW",
    To:"AMS",
    Distance:7900.1,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ATL",
    Distance:1174.53,
    Airport:"Air France"
}),
new Routes(
{
    From:"DFW",
    To:"ATL",
    Distance:1174.53,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"DFW",
    To:"ATL",
    Distance:1174.53,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ATL",
    Distance:1174.53,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DFW",
    To:"ATL",
    Distance:1174.53,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DFW",
    To:"ATL",
    Distance:1174.53,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ATL",
    Distance:1174.53,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DFW",
    To:"ATL",
    Distance:1174.53,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ATL",
    Distance:1174.53,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"ATL",
    Distance:1174.53,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"DFW",
    To:"AUS",
    Distance:306.388,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DFW",
    To:"AUS",
    Distance:306.388,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"AUS",
    Distance:306.388,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"BDL",
    Distance:2363.18,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"BDL",
    Distance:2363.18,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"BHM",
    Distance:959.044,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"BHM",
    Distance:959.044,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"BJX",
    Distance:1394.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"BJX",
    Distance:1394.48,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"BMI",
    Distance:1110.23,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"BMI",
    Distance:1110.23,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"BNA",
    Distance:1014.15,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"BNA",
    Distance:1014.15,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"BNE",
    Distance:13364.8,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"BNE",
    Distance:13364.8,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DFW",
    To:"BOG",
    Distance:3932.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"BOG",
    Distance:3932.87,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"BOG",
    Distance:3932.87,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"BOS",
    Distance:2509.27,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"BOS",
    Distance:2509.27,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DFW",
    To:"BOS",
    Distance:2509.27,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"BOS",
    Distance:2509.27,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"BPT",
    Distance:435.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"BPT",
    Distance:435.01,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"BRO",
    Distance:778.157,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"BRO",
    Distance:778.157,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"BTR",
    Distance:615.742,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"BTR",
    Distance:615.742,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"BWI",
    Distance:1954.76,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"BWI",
    Distance:1954.76,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"BWI",
    Distance:1954.76,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"BZE",
    Distance:1918.19,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"BZE",
    Distance:1918.19,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"CAE",
    Distance:1480.47,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CAE",
    Distance:1480.47,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"CCS",
    Distance:3944.97,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CDG",
    Distance:7944.06,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CDG",
    Distance:7944.06,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DFW",
    To:"CDG",
    Distance:7944.06,
    Airport:"Finnair"
}),
new Routes(
{
    From:"DFW",
    To:"CDG",
    Distance:7944.06,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CDG",
    Distance:7944.06,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"CHA",
    Distance:1116.23,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CHA",
    Distance:1116.23,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"CHS",
    Distance:1585.22,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CHS",
    Distance:1585.22,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"CID",
    Distance:1104.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CID",
    Distance:1104.08,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"CLE",
    Distance:1641.73,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CLE",
    Distance:1641.73,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"CLE",
    Distance:1641.73,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CLL",
    Distance:264.462,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CLL",
    Distance:264.462,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"CLT",
    Distance:1503.2,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CLT",
    Distance:1503.2,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"CMH",
    Distance:1488.69,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CMH",
    Distance:1488.69,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"CMI",
    Distance:1114.38,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CMI",
    Distance:1114.38,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"COS",
    Distance:952.551,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"COS",
    Distance:952.551,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"COU",
    Distance:788.417,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"COU",
    Distance:788.417,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"CRP",
    Distance:571.766,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CRP",
    Distance:571.766,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"CRW",
    Distance:1520.28,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CRW",
    Distance:1520.28,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"CUN",
    Distance:1657.19,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CUN",
    Distance:1657.19,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CUN",
    Distance:1657.19,
    Airport:"Sun Country Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CUN",
    Distance:1657.19,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"CUU",
    Distance:971.258,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CUU",
    Distance:971.258,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"CVG",
    Distance:1304.76,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CVG",
    Distance:1304.76,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DFW",
    To:"CVG",
    Distance:1304.76,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"CZM",
    Distance:1701.41,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"CZM",
    Distance:1701.41,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"DAY",
    Distance:1384.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"DAY",
    Distance:1384.48,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"DCA",
    Distance:1914.94,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"DCA",
    Distance:1914.94,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"DEN",
    Distance:1032.1,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"DEN",
    Distance:1032.1,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"DEN",
    Distance:1032.1,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"DEN",
    Distance:1032.1,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"DEN",
    Distance:1032.1,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"DRO",
    Distance:1083.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"DRO",
    Distance:1083.48,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"DSM",
    Distance:1005.6,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"DSM",
    Distance:1005.6,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"DTW",
    Distance:1586.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"DTW",
    Distance:1586.42,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DFW",
    To:"DTW",
    Distance:1586.42,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"DTW",
    Distance:1586.42,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"DXB",
    Distance:12919.4,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DFW",
    To:"DXB",
    Distance:12919.4,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DFW",
    To:"ELP",
    Distance:885.334,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ELP",
    Distance:885.334,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"EVV",
    Distance:1032.44,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"EVV",
    Distance:1032.44,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"EWR",
    Distance:2204.79,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"EWR",
    Distance:2204.79,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"EWR",
    Distance:2204.79,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"EZE",
    Distance:8533.65,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"EZE",
    Distance:8533.65,
    Airport:"LAN Argentina"
}),
new Routes(
{
    From:"DFW",
    To:"FAR",
    Distance:1559.49,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"FAR",
    Distance:1559.49,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"FAT",
    Distance:2109.11,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"FAT",
    Distance:2109.11,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"FLL",
    Distance:1798.92,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"FLL",
    Distance:1798.92,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"FLL",
    Distance:1798.92,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"FRA",
    Distance:8256.94,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DFW",
    To:"FRA",
    Distance:8256.94,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"FRA",
    Distance:8256.94,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DFW",
    To:"FRA",
    Distance:8256.94,
    Airport:"Finnair"
}),
new Routes(
{
    From:"DFW",
    To:"FRA",
    Distance:8256.94,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"FRA",
    Distance:8256.94,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DFW",
    To:"FRA",
    Distance:8256.94,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"FRA",
    Distance:8256.94,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"FRA",
    Distance:8256.94,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"FSD",
    Distance:1188.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"FSD",
    Distance:1188.42,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"FSM",
    Distance:366.077,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"FSM",
    Distance:366.077,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"FWA",
    Distance:1381.68,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"FWA",
    Distance:1381.68,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"GCK",
    Distance:651.407,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"GCK",
    Distance:651.407,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"GDL",
    Distance:1509.64,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"GDL",
    Distance:1509.64,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"GGG",
    Distance:225.175,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"GGG",
    Distance:225.175,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"GIG",
    Distance:8419.83,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"GIG",
    Distance:8419.83,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"GIG",
    Distance:8419.83,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"GJT",
    Distance:1242.23,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"GJT",
    Distance:1242.23,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"GPT",
    Distance:803.121,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"GPT",
    Distance:803.121,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"GRI",
    Distance:904.476,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"GRI",
    Distance:904.476,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"GRK",
    Distance:216.683,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"GRK",
    Distance:216.683,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"GRR",
    Distance:1498.35,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"GRR",
    Distance:1498.35,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"GRU",
    Distance:8243.6,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"GRU",
    Distance:8243.6,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"GRU",
    Distance:8243.6,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"GSO",
    Distance:1604.73,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"GSO",
    Distance:1604.73,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"GSP",
    Distance:1384.37,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"GSP",
    Distance:1384.37,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"GUA",
    Distance:2140.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"GUA",
    Distance:2140.08,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"HNL",
    Distance:6080.85,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"HNL",
    Distance:6080.85,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"HOU",
    Distance:398.304,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"HOU",
    Distance:398.304,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"HSV",
    Distance:967.742,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"HSV",
    Distance:967.742,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"IAD",
    Distance:1882.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"IAD",
    Distance:1882.48,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"IAD",
    Distance:1882.48,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"IAH",
    Distance:361.618,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"IAH",
    Distance:361.618,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"IAH",
    Distance:361.618,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ICN",
    Distance:10986.7,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ICN",
    Distance:10986.7,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DFW",
    To:"ICN",
    Distance:10986.7,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"DFW",
    To:"ICN",
    Distance:10986.7,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"ICT",
    Distance:529.736,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ICT",
    Distance:529.736,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"IND",
    Distance:1223.99,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"IND",
    Distance:1223.99,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"JAN",
    Distance:655.277,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"JAN",
    Distance:655.277,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"JAX",
    Distance:1475.25,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"JAX",
    Distance:1475.25,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"JFK",
    Distance:2234.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"JFK",
    Distance:2234.89,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DFW",
    To:"JFK",
    Distance:2234.89,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"JLN",
    Distance:526.568,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"JLN",
    Distance:526.568,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"LAS",
    Distance:1694.82,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LAS",
    Distance:1694.82,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LAS",
    Distance:1694.82,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"LAW",
    Distance:225.322,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LAW",
    Distance:225.322,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"LAX",
    Distance:1983.18,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LAX",
    Distance:1983.18,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LAX",
    Distance:1983.18,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LAX",
    Distance:1983.18,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"LAX",
    Distance:1983.18,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LAX",
    Distance:1983.18,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"DFW",
    To:"LBB",
    Distance:452.84,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LBB",
    Distance:452.84,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"LCH",
    Distance:474.996,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LCH",
    Distance:474.996,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"LEX",
    Distance:1261.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LEX",
    Distance:1261.12,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"LFT",
    Distance:564.326,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LFT",
    Distance:564.326,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"LGA",
    Distance:2231.36,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LGA",
    Distance:2231.36,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DFW",
    To:"LGA",
    Distance:2231.36,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LGA",
    Distance:2231.36,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"LHR",
    Distance:7626.93,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LHR",
    Distance:7626.93,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DFW",
    To:"LHR",
    Distance:7626.93,
    Airport:"Finnair"
}),
new Routes(
{
    From:"DFW",
    To:"LHR",
    Distance:7626.93,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LHR",
    Distance:7626.93,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LHR",
    Distance:7626.93,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"LIM",
    Distance:5424.05,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LIM",
    Distance:5424.05,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LIM",
    Distance:5424.05,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"LIR",
    Distance:2744.57,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LIR",
    Distance:2744.57,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"LIT",
    Distance:489.109,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LIT",
    Distance:489.109,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"LRD",
    Distance:639.1,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"LRD",
    Distance:639.1,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MAD",
    Distance:7972.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MAD",
    Distance:7972.46,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MAD",
    Distance:7972.46,
    Airport:"Finnair"
}),
new Routes(
{
    From:"DFW",
    To:"MAD",
    Distance:7972.46,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MAD",
    Distance:7972.46,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MAF",
    Distance:496.13,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MAF",
    Distance:496.13,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MBJ",
    Distance:2488.74,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MBJ",
    Distance:2488.74,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MCI",
    Distance:741.653,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MCI",
    Distance:741.653,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MCO",
    Distance:1582.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MCO",
    Distance:1582.42,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MCO",
    Distance:1582.42,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MEM",
    Distance:693.304,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MEM",
    Distance:693.304,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DFW",
    To:"MEM",
    Distance:693.304,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MEX",
    Distance:1510.34,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"DFW",
    To:"MEX",
    Distance:1510.34,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MEX",
    Distance:1510.34,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MEX",
    Distance:1510.34,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DFW",
    To:"MEX",
    Distance:1510.34,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MFE",
    Distance:756.293,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MFE",
    Distance:756.293,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MGM",
    Distance:998.883,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MGM",
    Distance:998.883,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MHK",
    Distance:695.1,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MHK",
    Distance:695.1,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MIA",
    Distance:1802.17,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MIA",
    Distance:1802.17,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MKE",
    Distance:1373.57,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MKE",
    Distance:1373.57,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MLI",
    Distance:1112.29,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MLI",
    Distance:1112.29,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MLM",
    Distance:1503.75,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MLM",
    Distance:1503.75,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MLM",
    Distance:1503.75,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MLU",
    Distance:469.786,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MLU",
    Distance:469.786,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MOB",
    Distance:866.333,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MOB",
    Distance:866.333,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MSN",
    Distance:1322.35,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MSN",
    Distance:1322.35,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MSP",
    Distance:1372.57,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MSP",
    Distance:1372.57,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DFW",
    To:"MSP",
    Distance:1372.57,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MSP",
    Distance:1372.57,
    Airport:"Sun Country Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MSP",
    Distance:1372.57,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MSY",
    Distance:719.439,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MSY",
    Distance:719.439,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MSY",
    Distance:719.439,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MSY",
    Distance:719.439,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DFW",
    To:"MSY",
    Distance:719.439,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MSY",
    Distance:719.439,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MTY",
    Distance:845.444,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MTY",
    Distance:845.444,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"MYR",
    Distance:1683.39,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MZT",
    Distance:1410.05,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"MZT",
    Distance:1410.05,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"NAS",
    Distance:2090.32,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"NAS",
    Distance:2090.32,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"NRT",
    Distance:10322.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"NRT",
    Distance:10322.3,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"NRT",
    Distance:10322.3,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"NRT",
    Distance:10322.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"OAK",
    Distance:2339.5,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"OGG",
    Distance:5962.34,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"OGG",
    Distance:5962.34,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"OKC",
    Distance:282.359,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"OKC",
    Distance:282.359,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"OMA",
    Distance:940.205,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"OMA",
    Distance:940.205,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"ONT",
    Distance:1908.36,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ONT",
    Distance:1908.36,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"ORD",
    Distance:1290.64,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ORD",
    Distance:1290.64,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ORD",
    Distance:1290.64,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"ORD",
    Distance:1290.64,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ORF",
    Distance:1947.35,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ORF",
    Distance:1947.35,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"PBC",
    Distance:1533.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"PBC",
    Distance:1533.42,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"PBI",
    Distance:1772.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"PBI",
    Distance:1772.12,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"PDX",
    Distance:2597.01,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"PDX",
    Distance:2597.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"PDX",
    Distance:2597.01,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"PDX",
    Distance:2597.01,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"PHL",
    Distance:2092.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"PHL",
    Distance:2092.87,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"PHL",
    Distance:2092.87,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"PHX",
    Distance:1393.83,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"PHX",
    Distance:1393.83,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"PHX",
    Distance:1393.83,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"PIA",
    Distance:1082.53,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"PIA",
    Distance:1082.53,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"PIT",
    Distance:1715.71,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"PIT",
    Distance:1715.71,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"PLS",
    Distance:2731.91,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"PLS",
    Distance:2731.91,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"PNS",
    Distance:969.869,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"PNS",
    Distance:969.869,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"PSP",
    Distance:1808.34,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"PSP",
    Distance:1808.34,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"PTY",
    Distance:3210.04,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"PTY",
    Distance:3210.04,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"PVR",
    Distance:1582.97,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"PVR",
    Distance:1582.97,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"QRO",
    Distance:1400.49,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"QRO",
    Distance:1400.49,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"RAP",
    Distance:1344.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"RAP",
    Distance:1344.89,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"RDU",
    Distance:1704.52,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"RDU",
    Distance:1704.52,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"RIC",
    Distance:1859.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"RIC",
    Distance:1859.46,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"RNO",
    Distance:2160.51,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"RNO",
    Distance:2160.51,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"ROW",
    Distance:699.237,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ROW",
    Distance:699.237,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"RSW",
    Distance:1634.28,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"RSW",
    Distance:1634.28,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"RSW",
    Distance:1634.28,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"RTB",
    Distance:2124.97,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"RTB",
    Distance:2124.97,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SAF",
    Distance:884.724,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SAF",
    Distance:884.724,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SAL",
    Distance:2309.98,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SAL",
    Distance:2309.98,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"DFW",
    To:"SAL",
    Distance:2309.98,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SAL",
    Distance:2309.98,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SAN",
    Distance:1880.4,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SAN",
    Distance:1880.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SAN",
    Distance:1880.4,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SAN",
    Distance:1880.4,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SAT",
    Distance:397.965,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SAT",
    Distance:397.965,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SAV",
    Distance:1485.97,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SAV",
    Distance:1485.97,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SCL",
    Distance:7866.28,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SCL",
    Distance:7866.28,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SCL",
    Distance:7866.28,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SDF",
    Distance:1177.74,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SDF",
    Distance:1177.74,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SEA",
    Distance:2668.17,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SEA",
    Distance:2668.17,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SEA",
    Distance:2668.17,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SFO",
    Distance:2351.93,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SFO",
    Distance:2351.93,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SFO",
    Distance:2351.93,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SFO",
    Distance:2351.93,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SFO",
    Distance:2351.93,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"DFW",
    To:"SGF",
    Distance:586.511,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SGF",
    Distance:586.511,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SHV",
    Distance:304.81,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SHV",
    Distance:304.81,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SJC",
    Distance:2310.22,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SJC",
    Distance:2310.22,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SJD",
    Distance:1647.94,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SJD",
    Distance:1647.94,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SJD",
    Distance:1647.94,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SJO",
    Distance:2865.84,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SJO",
    Distance:2865.84,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SJT",
    Distance:367.858,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SJT",
    Distance:367.858,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SJU",
    Distance:3482.32,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SJU",
    Distance:3482.32,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SLC",
    Distance:1589.45,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SLC",
    Distance:1589.45,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DFW",
    To:"SLC",
    Distance:1589.45,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SLP",
    Distance:1243.73,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SLP",
    Distance:1243.73,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SMF",
    Distance:2298.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SMF",
    Distance:2298.43,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SNA",
    Distance:1934.88,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SNA",
    Distance:1934.88,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SNA",
    Distance:1934.88,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SPI",
    Distance:1014.6,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SPI",
    Distance:1014.6,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"SPS",
    Distance:181.493,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"SPS",
    Distance:181.493,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"STL",
    Distance:885.374,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"STL",
    Distance:885.374,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"TLH",
    Distance:1231.92,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"TLH",
    Distance:1231.92,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"TPA",
    Distance:1492.69,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"TPA",
    Distance:1492.69,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"TPA",
    Distance:1492.69,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"TRC",
    Distance:1022.41,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"TRC",
    Distance:1022.41,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"TUL",
    Distance:381.914,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"TUL",
    Distance:381.914,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"TUS",
    Distance:1305.68,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"TUS",
    Distance:1305.68,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"TXK",
    Distance:290.252,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"TXK",
    Distance:290.252,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"TYR",
    Distance:164.63,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"TYR",
    Distance:164.63,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"TYS",
    Distance:1239.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"TYS",
    Distance:1239.4,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"VPS",
    Distance:1029.71,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"VPS",
    Distance:1029.71,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"XNA",
    Distance:451.813,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"XNA",
    Distance:451.813,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"YEG",
    Distance:2622.97,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"YEG",
    Distance:2622.97,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"YUL",
    Distance:2432.25,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"YUL",
    Distance:2432.25,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"YUL",
    Distance:2432.25,
    Airport:"WestJet"
}),
new Routes(
{
    From:"DFW",
    To:"YVR",
    Distance:2819.37,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"YVR",
    Distance:2819.37,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"YVR",
    Distance:2819.37,
    Airport:"WestJet"
}),
new Routes(
{
    From:"DFW",
    To:"YYC",
    Distance:2451.21,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"YYC",
    Distance:2451.21,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DFW",
    To:"YYC",
    Distance:2451.21,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"YYC",
    Distance:2451.21,
    Airport:"WestJet"
}),
new Routes(
{
    From:"DFW",
    To:"YYZ",
    Distance:1928.41,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DFW",
    To:"YYZ",
    Distance:1928.41,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"YYZ",
    Distance:1928.41,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DFW",
    To:"YYZ",
    Distance:1928.41,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"YYZ",
    Distance:1928.41,
    Airport:"WestJet"
}),
new Routes(
{
    From:"DFW",
    To:"ZCL",
    Distance:1242.19,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DFW",
    To:"ZCL",
    Distance:1242.19,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DGA",
    To:"BZE",
    Distance:64.3944,
    Airport:"Midwest Airlines (Egypt)"
}),
new Routes(
{
    From:"DGA",
    To:"PLJ",
    Distance:50.2153,
    Airport:"Midwest Airlines (Egypt)"
}),
new Routes(
{
    From:"DGO",
    To:"IAH",
    Distance:1118.29,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DGO",
    To:"LAX",
    Distance:1732.69,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DGO",
    To:"MEX",
    Distance:767.336,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"DGO",
    To:"MEX",
    Distance:767.336,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"DGO",
    To:"TIJ",
    Distance:1533.81,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"DGT",
    To:"CEB",
    Distance:131.375,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"DGT",
    To:"MNL",
    Distance:626.616,
    Airport:"Air Philippines"
}),
new Routes(
{
    From:"DGT",
    To:"MNL",
    Distance:626.616,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"DGT",
    To:"MNL",
    Distance:626.616,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"DHB",
    To:"RCE",
    Distance:11.3622,
    Airport:"Kenmore Air"
}),
new Routes(
{
    From:"DHB",
    To:"WSX",
    Distance:3.90992,
    Airport:"Kenmore Air"
}),
new Routes(
{
    From:"DHI",
    To:"KTM",
    Distance:482.519,
    Airport:"Yeti Airways"
}),
new Routes(
{
    From:"DHM",
    To:"DEL",
    Distance:408.17,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DHM",
    To:"DEL",
    Distance:408.17,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DHN",
    To:"ATL",
    Distance:274.708,
    Airport:"Air France"
}),
new Routes(
{
    From:"DHN",
    To:"ATL",
    Distance:274.708,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DHN",
    To:"ATL",
    Distance:274.708,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DIB",
    To:"CCU",
    Distance:851.904,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DIB",
    To:"CCU",
    Distance:851.904,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DIB",
    To:"DMU",
    Distance:216.727,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DIB",
    To:"GAU",
    Distance:373.394,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DIB",
    To:"GAU",
    Distance:373.394,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DIB",
    To:"GAU",
    Distance:373.394,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DIE",
    To:"DZA",
    Distance:438.19,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"DIE",
    To:"NOS",
    Distance:150.587,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"DIE",
    To:"RUN",
    Distance:1157.25,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"DIE",
    To:"SVB",
    Distance:234.831,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"DIE",
    To:"TNR",
    Distance:742.735,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"DIG",
    To:"CAN",
    Distance:1449.96,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DIG",
    To:"CTU",
    Distance:517.33,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DIG",
    To:"JHG",
    Distance:656.253,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DIG",
    To:"KMG",
    Distance:436.196,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"DIG",
    To:"KMG",
    Distance:436.196,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DIG",
    To:"KMG",
    Distance:436.196,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DIG",
    To:"LXA",
    Distance:872.121,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DIJ",
    To:"TLS",
    Distance:498.161,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"DIK",
    To:"DEN",
    Distance:785.876,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DIK",
    To:"MSP",
    Distance:771.531,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DIL",
    To:"DPS",
    Distance:1138.8,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"DIL",
    To:"DRW",
    Distance:725.378,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"DIL",
    To:"DRW",
    Distance:725.378,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DIL",
    To:"SIN",
    Distance:2627.79,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"DIN",
    To:"HAN",
    Distance:290.65,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DIR",
    To:"ADD",
    Distance:342.847,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DIR",
    To:"JIB",
    Distance:256.999,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DIR",
    To:"JIJ",
    Distance:106.513,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DIU",
    To:"PBD",
    Distance:167.314,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"DIU",
    To:"PBD",
    Distance:167.314,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DIW",
    To:"KCT",
    Distance:40.26,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"DIY",
    To:"ADB",
    Distance:1141.42,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"DIY",
    To:"ADB",
    Distance:1141.42,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"DIY",
    To:"ESB",
    Distance:670.076,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DIY",
    To:"IST",
    Distance:1035.27,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"DIY",
    To:"IST",
    Distance:1035.27,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DIY",
    To:"SAW",
    Distance:992.923,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"DIY",
    To:"SAW",
    Distance:992.923,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DJB",
    To:"BTH",
    Distance:311.292,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DJB",
    To:"BTH",
    Distance:311.292,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"DJB",
    To:"CGK",
    Distance:600.464,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"DJB",
    To:"CGK",
    Distance:600.464,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DJB",
    To:"CGK",
    Distance:600.464,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DJB",
    To:"CGK",
    Distance:600.464,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"DJE",
    To:"BRU",
    Distance:1960.69,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DJE",
    To:"BSL",
    Distance:1549,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DJE",
    To:"CDG",
    Distance:1814.89,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"DJE",
    To:"CDG",
    Distance:1814.89,
    Airport:"Servicios de Transportes A"
}),
new Routes(
{
    From:"DJE",
    To:"DUS",
    Distance:1963.26,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DJE",
    To:"DUS",
    Distance:1963.26,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DJE",
    To:"DUS",
    Distance:1963.26,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DJE",
    To:"FRA",
    Distance:1805.2,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DJE",
    To:"FRA",
    Distance:1805.2,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DJE",
    To:"GVA",
    Distance:1430.25,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DJE",
    To:"HAM",
    Distance:2197.57,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DJE",
    To:"LEJ",
    Distance:1955.87,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DJE",
    To:"LIL",
    Distance:1957.89,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"DJE",
    To:"LIL",
    Distance:1957.89,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DJE",
    To:"LUX",
    Distance:1791.08,
    Airport:"Luxair"
}),
new Routes(
{
    From:"DJE",
    To:"LYS",
    Distance:1403.49,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"DJE",
    To:"LYS",
    Distance:1403.49,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DJE",
    To:"MLH",
    Distance:1548.94,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"DJE",
    To:"MRS",
    Distance:1166.94,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"DJE",
    To:"MRS",
    Distance:1166.94,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DJE",
    To:"MUC",
    Distance:1612.15,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DJE",
    To:"MUC",
    Distance:1612.15,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"DJE",
    To:"MUC",
    Distance:1612.15,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DJE",
    To:"NBE",
    Distance:246.635,
    Airport:"Luxair"
}),
new Routes(
{
    From:"DJE",
    To:"NCE",
    Distance:1130.48,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DJE",
    To:"NTE",
    Distance:1805.21,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"DJE",
    To:"NTE",
    Distance:1805.21,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DJE",
    To:"NTE",
    Distance:1805.21,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DJE",
    To:"NUE",
    Distance:1737.44,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DJE",
    To:"ORY",
    Distance:1792.03,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"DJE",
    To:"ORY",
    Distance:1792.03,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DJE",
    To:"ORY",
    Distance:1792.03,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DJE",
    To:"SXB",
    Distance:1651.22,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DJE",
    To:"SXF",
    Distance:2069.32,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DJE",
    To:"TIP",
    Distance:259.32,
    Airport:"Servicios de Transportes A"
}),
new Routes(
{
    From:"DJE",
    To:"TUN",
    Distance:334.628,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"DJE",
    To:"ZRH",
    Distance:1522.55,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DJG",
    To:"OGX",
    Distance:935.583,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"DJG",
    To:"TMR",
    Distance:439.842,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"DJJ",
    To:"BIK",
    Distance:513.612,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DJJ",
    To:"BIK",
    Distance:513.612,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"DJJ",
    To:"CGK",
    Distance:3774.01,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DJJ",
    To:"CGK",
    Distance:3774.01,
    Airport:"Interlink Airlines"
}),
new Routes(
{
    From:"DJJ",
    To:"MKQ",
    Distance:660.958,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DJJ",
    To:"MKQ",
    Distance:660.958,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DJJ",
    To:"MKQ",
    Distance:660.958,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"DJJ",
    To:"MKW",
    Distance:742.785,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DJJ",
    To:"MKW",
    Distance:742.785,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"DJJ",
    To:"NBX",
    Distance:564.339,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DJJ",
    To:"TIM",
    Distance:457.462,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DJJ",
    To:"TIM",
    Distance:457.462,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"DJJ",
    To:"UPG",
    Distance:2341.84,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DJJ",
    To:"UPG",
    Distance:2341.84,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DJJ",
    To:"UPG",
    Distance:2341.84,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"DJJ",
    To:"WMX",
    Distance:242.329,
    Airport:"Illinois Airways"
}),
new Routes(
{
    From:"DKR",
    To:"ABJ",
    Distance:1819.66,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"DKR",
    To:"ABJ",
    Distance:1819.66,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"DKR",
    To:"ABJ",
    Distance:1819.66,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"ACC",
    Distance:2148.78,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"DKR",
    To:"ACC",
    Distance:2148.78,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"ACC",
    Distance:2148.78,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"DKR",
    To:"ALG",
    Distance:3187.75,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"DKR",
    To:"BCN",
    Distance:3504.1,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"BCN",
    Distance:3504.1,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"BJL",
    Distance:180.184,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"BJL",
    Distance:180.184,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"BJL",
    Distance:180.184,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"BJL",
    Distance:180.184,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"BKO",
    Distance:1059.57,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"DKR",
    To:"BKO",
    Distance:1059.57,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"BKO",
    Distance:1059.57,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"DKR",
    To:"BKO",
    Distance:1059.57,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"BKO",
    Distance:1059.57,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DKR",
    To:"BRU",
    Distance:4477.44,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DKR",
    To:"BRU",
    Distance:4477.44,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"BRU",
    Distance:4477.44,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DKR",
    To:"BRU",
    Distance:4477.44,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"BRU",
    Distance:4477.44,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"CDG",
    Distance:4225.96,
    Airport:"Air France"
}),
new Routes(
{
    From:"DKR",
    To:"CDG",
    Distance:4225.96,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"DKR",
    To:"CKY",
    Distance:712.144,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DKR",
    To:"CKY",
    Distance:712.144,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"CKY",
    Distance:712.144,
    Airport:"Dennis Sky"
}),
new Routes(
{
    From:"DKR",
    To:"CKY",
    Distance:712.144,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"CKY",
    Distance:712.144,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DKR",
    To:"CKY",
    Distance:712.144,
    Airport:"Mauritania Airlines International"
}),
new Routes(
{
    From:"DKR",
    To:"CKY",
    Distance:712.144,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"CKY",
    Distance:712.144,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"CMN",
    Distance:2299.17,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"DKR",
    To:"COO",
    Distance:2361.8,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"DKR",
    To:"COO",
    Distance:2361.8,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"DLA",
    Distance:3209.82,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"DXB",
    Distance:7617.6,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DKR",
    To:"FNA",
    Distance:825.873,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"FNA",
    Distance:825.873,
    Airport:"Kampuchea Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"IAD",
    Distance:6400.53,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DKR",
    To:"IAD",
    Distance:6400.53,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DKR",
    To:"IAD",
    Distance:6400.53,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"IST",
    Distance:5319.32,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"JFK",
    Distance:6120.19,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DKR",
    To:"JNB",
    Distance:6716.69,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DKR",
    To:"JNB",
    Distance:6716.69,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DKR",
    To:"JNB",
    Distance:6716.69,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"LIS",
    Distance:2795.78,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"DKR",
    To:"LOS",
    Distance:2446.23,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"LPA",
    Distance:1482.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"LPA",
    Distance:1482.89,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"DKR",
    To:"LPA",
    Distance:1482.89,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"MAD",
    Distance:3165.81,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"DKR",
    To:"MAD",
    Distance:3165.81,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"MXP",
    Distance:4219.62,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"DKR",
    To:"NKC",
    Distance:408.025,
    Airport:"Mauritania Airlines International"
}),
new Routes(
{
    From:"DKR",
    To:"NKC",
    Distance:408.025,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"ORY",
    Distance:4191.51,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"DKR",
    To:"OUA",
    Distance:1747.04,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"DKR",
    To:"OXB",
    Distance:373.562,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"OXB",
    Distance:373.562,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"DKR",
    To:"TFN",
    Distance:1532.72,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"DKR",
    To:"TUN",
    Distance:3681.3,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DKR",
    To:"ZIG",
    Distance:275.734,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"ABJ",
    Distance:1518.76,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"DLA",
    To:"ADD",
    Distance:3258.53,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"ADD",
    Distance:3258.53,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"BGF",
    Distance:976.776,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"BGF",
    Distance:976.776,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"DLA",
    To:"BRU",
    Distance:5237.38,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DLA",
    To:"BRU",
    Distance:5237.38,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"BRU",
    Distance:5237.38,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DLA",
    To:"BRU",
    Distance:5237.38,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"DLA",
    To:"BRU",
    Distance:5237.38,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"BZV",
    Distance:1105.02,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"DLA",
    To:"BZV",
    Distance:1105.02,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"BZV",
    Distance:1105.02,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"DLA",
    To:"BZV",
    Distance:1105.02,
    Airport:"Varig Log"
}),
new Routes(
{
    From:"DLA",
    To:"CDG",
    Distance:5050.44,
    Airport:"Air France"
}),
new Routes(
{
    From:"DLA",
    To:"CDG",
    Distance:5050.44,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"CMN",
    Distance:3725.86,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"DLA",
    To:"COO",
    Distance:853.271,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"DLA",
    To:"COO",
    Distance:853.271,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"DLA",
    To:"COO",
    Distance:853.271,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"COO",
    Distance:853.271,
    Airport:"Varig Log"
}),
new Routes(
{
    From:"DLA",
    To:"DKR",
    Distance:3209.82,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"FIH",
    Distance:1129.27,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DLA",
    To:"FIH",
    Distance:1129.27,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"FIH",
    Distance:1129.27,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DLA",
    To:"FIH",
    Distance:1129.27,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"GOU",
    Distance:716.704,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"DLA",
    To:"IST",
    Distance:4531.81,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"LBV",
    Distance:395.935,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"DLA",
    To:"LBV",
    Distance:395.935,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"DLA",
    To:"LBV",
    Distance:395.935,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DLA",
    To:"LBV",
    Distance:395.935,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"LFW",
    Distance:967.757,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"LOS",
    Distance:763.89,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"LOS",
    Distance:763.89,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"DLA",
    To:"MVR",
    Distance:874.036,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"DLA",
    To:"NBO",
    Distance:3080.89,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"DLA",
    To:"NDJ",
    Distance:1076.33,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"DLA",
    To:"NDJ",
    Distance:1076.33,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"NSI",
    Distance:205.872,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"NSI",
    Distance:205.872,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"DLA",
    To:"NSI",
    Distance:205.872,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DLA",
    To:"NSI",
    Distance:205.872,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"DLA",
    To:"NSI",
    Distance:205.872,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"DLA",
    To:"NSI",
    Distance:205.872,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"PNR",
    Distance:1010.08,
    Airport:"Pacific East Asia Cargo Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"SSG",
    Distance:115.55,
    Airport:"Air France"
}),
new Routes(
{
    From:"DLA",
    To:"SSG",
    Distance:115.55,
    Airport:"Chicago Express"
}),
new Routes(
{
    From:"DLA",
    To:"SSG",
    Distance:115.55,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"SSG",
    Distance:115.55,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DLA",
    To:"SSG",
    Distance:115.55,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"CAN",
    Distance:1898.65,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"CGO",
    Distance:844.969,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"CGO",
    Distance:844.969,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"CGO",
    Distance:844.969,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"CGO",
    Distance:844.969,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"CGO",
    Distance:844.969,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"CGO",
    Distance:844.969,
    Airport:"West Air China"
}),
new Routes(
{
    From:"DLC",
    To:"CHG",
    Distance:300.976,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"CIF",
    Distance:425.952,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"DLC",
    To:"CJU",
    Distance:751.562,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"CKG",
    Distance:1707.22,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"CSX",
    Distance:1423.18,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"CZX",
    Distance:798.316,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"DOY",
    Distance:341.506,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"DLC",
    To:"FOC",
    Distance:1459.48,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"FUG",
    Distance:848.294,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"DLC",
    To:"FUK",
    Distance:997.202,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"FUK",
    Distance:997.202,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"DLC",
    To:"HDG",
    Distance:681.197,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"DLC",
    To:"HET",
    Distance:854.202,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"HFE",
    Distance:886.4,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"HFE",
    Distance:886.4,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"HFE",
    Distance:886.4,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"HGH",
    Distance:976.636,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"HGH",
    Distance:976.636,
    Airport:"China SSS"
}),
new Routes(
{
    From:"DLC",
    To:"HGH",
    Distance:976.636,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"HGH",
    Distance:976.636,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"DLC",
    To:"HGH",
    Distance:976.636,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"HGH",
    Distance:976.636,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"HGH",
    Distance:976.636,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"DLC",
    To:"HGH",
    Distance:976.636,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"HGH",
    Distance:976.636,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"HGH",
    Distance:976.636,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"HIA",
    Distance:615.292,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"DLC",
    To:"HIJ",
    Distance:1131.59,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"HIJ",
    Distance:1131.59,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"DLC",
    To:"HKG",
    Distance:1988.61,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"HKG",
    Distance:1988.61,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"DLC",
    To:"HRB",
    Distance:835.233,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"HRB",
    Distance:835.233,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"HRB",
    Distance:835.233,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"ICN",
    Distance:460.176,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"ICN",
    Distance:460.176,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"ICN",
    Distance:460.176,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"ICN",
    Distance:460.176,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"DLC",
    To:"JMU",
    Distance:1136.87,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"JNG",
    Distance:593.37,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"DLC",
    To:"KHN",
    Distance:1237.11,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"KIX",
    Distance:1319.94,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"KIX",
    Distance:1319.94,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"DLC",
    To:"KIX",
    Distance:1319.94,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"KMG",
    Distance:2348.39,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"LYA",
    Distance:967.823,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"LYG",
    Distance:531.594,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"LYG",
    Distance:531.594,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"DLC",
    To:"LYI",
    Distance:516.667,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"DLC",
    To:"MDG",
    Distance:907.932,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"NGB",
    Distance:1016.23,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"NGB",
    Distance:1016.23,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"NGB",
    Distance:1016.23,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"DLC",
    To:"NGB",
    Distance:1016.23,
    Airport:"Starline.kz"
}),
new Routes(
{
    From:"DLC",
    To:"NGO",
    Distance:1429.98,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"NKG",
    Distance:838.988,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"NKG",
    Distance:838.988,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"NKG",
    Distance:838.988,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"NKG",
    Distance:838.988,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"NKG",
    Distance:838.988,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"NRT",
    Distance:1699.99,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"NRT",
    Distance:1699.99,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"DLC",
    To:"NRT",
    Distance:1699.99,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"NRT",
    Distance:1699.99,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"NRT",
    Distance:1699.99,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"NTG",
    Distance:768.358,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"NTG",
    Distance:768.358,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"PEK",
    Distance:442.55,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"PEK",
    Distance:442.55,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"DLC",
    To:"PEK",
    Distance:442.55,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"PEK",
    Distance:442.55,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"PEK",
    Distance:442.55,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"PEK",
    Distance:442.55,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"PVG",
    Distance:870.136,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"PVG",
    Distance:870.136,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"PVG",
    Distance:870.136,
    Airport:"China SSS"
}),
new Routes(
{
    From:"DLC",
    To:"PVG",
    Distance:870.136,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"PVG",
    Distance:870.136,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"PVG",
    Distance:870.136,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"PVG",
    Distance:870.136,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"SHP",
    Distance:191.047,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"DLC",
    To:"SJW",
    Distance:599.038,
    Airport:"China SSS"
}),
new Routes(
{
    From:"DLC",
    To:"SJW",
    Distance:599.038,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"SZX",
    Distance:1957.71,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"SZX",
    Distance:1957.71,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"SZX",
    Distance:1957.71,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TAO",
    Distance:317.199,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"TAO",
    Distance:317.199,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TAO",
    Distance:317.199,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TAO",
    Distance:317.199,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TAO",
    Distance:317.199,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TNA",
    Distance:445.757,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"TNA",
    Distance:445.757,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TNA",
    Distance:445.757,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TNA",
    Distance:445.757,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TNA",
    Distance:445.757,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TNA",
    Distance:445.757,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TOY",
    Distance:1396.9,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TPE",
    Distance:1544.53,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TPE",
    Distance:1544.53,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TPE",
    Distance:1544.53,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TPE",
    Distance:1544.53,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"DLC",
    To:"TSN",
    Distance:362.453,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"TSN",
    Distance:362.453,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"DLC",
    To:"TSN",
    Distance:362.453,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"DLC",
    To:"TSN",
    Distance:362.453,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"DLC",
    To:"TSN",
    Distance:362.453,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TSN",
    Distance:362.453,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"DLC",
    To:"TSN",
    Distance:362.453,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TSN",
    Distance:362.453,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TVS",
    Distance:315.355,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"DLC",
    To:"TXN",
    Distance:1069.69,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TYN",
    Distance:788.318,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"TYN",
    Distance:788.318,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TYN",
    Distance:788.318,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"TYN",
    Distance:788.318,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"WEF",
    Distance:334.151,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"WUH",
    Distance:1128.2,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"DLC",
    To:"WUH",
    Distance:1128.2,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"WUH",
    Distance:1128.2,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"WUH",
    Distance:1128.2,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"DLC",
    To:"WUX",
    Distance:836.836,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"WUX",
    Distance:836.836,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"XIY",
    Distance:1244.23,
    Airport:"Air China"
}),
new Routes(
{
    From:"DLC",
    To:"XIY",
    Distance:1244.23,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"XIY",
    Distance:1244.23,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"XIY",
    Distance:1244.23,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"XIY",
    Distance:1244.23,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"XMN",
    Distance:1635.35,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"XUZ",
    Distance:664.619,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"YNJ",
    Distance:794.231,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"YNT",
    Distance:174.52,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"DLC",
    To:"YNZ",
    Distance:633.289,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLC",
    To:"YTY",
    Distance:730.801,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLE",
    To:"LIS",
    Distance:1495.84,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DLE",
    To:"OPO",
    Distance:1294.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DLE",
    To:"RAK",
    Distance:2063.68,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DLG",
    To:"AKN",
    Distance:114.301,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"DLG",
    To:"ANC",
    Distance:527.11,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"DLG",
    To:"ANC",
    Distance:527.11,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"DLH",
    To:"AZA",
    Distance:2226.19,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"DLH",
    To:"LAS",
    Distance:2243.77,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"DLH",
    To:"MSP",
    Distance:232.036,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DLH",
    To:"ORD",
    Distance:638.918,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DLI",
    To:"DAD",
    Distance:477.804,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DLI",
    To:"HAN",
    Distance:1087.84,
    Airport:"Royal Air Cambodge"
}),
new Routes(
{
    From:"DLI",
    To:"HAN",
    Distance:1087.84,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DLI",
    To:"SGN",
    Distance:213.776,
    Airport:"Royal Air Cambodge"
}),
new Routes(
{
    From:"DLI",
    To:"SGN",
    Distance:213.776,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DLM",
    To:"AMS",
    Distance:2554.14,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"DLM",
    To:"BFS",
    Distance:3317.59,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"DLM",
    To:"BHX",
    Distance:2949.63,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"DLM",
    To:"BHX",
    Distance:2949.63,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"DLM",
    To:"BHX",
    Distance:2949.63,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"DLM",
    To:"BHX",
    Distance:2949.63,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DLM",
    To:"BLK",
    Distance:3088.27,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"DLM",
    To:"BRS",
    Distance:2965.34,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"DLM",
    To:"BRS",
    Distance:2965.34,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DLM",
    To:"BRS",
    Distance:2965.34,
    Airport:"easyJet"
}),
new Routes(
{
    From:"DLM",
    To:"CWL",
    Distance:3006.42,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DLM",
    To:"DME",
    Distance:2190.17,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DLM",
    To:"DUS",
    Distance:2376.64,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DLM",
    To:"DUS",
    Distance:2376.64,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DLM",
    To:"EDI",
    Distance:3216.05,
    Airport:"easyJet"
}),
new Routes(
{
    From:"DLM",
    To:"EMA",
    Distance:2941.52,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"DLM",
    To:"EMA",
    Distance:2941.52,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DLM",
    To:"FRA",
    Distance:2193.84,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DLM",
    To:"FRA",
    Distance:2193.84,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DLM",
    To:"GLA",
    Distance:3270.79,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"DLM",
    To:"GLA",
    Distance:3270.79,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"DLM",
    To:"GLA",
    Distance:3270.79,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DLM",
    To:"HAJ",
    Distance:2299.74,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DLM",
    To:"HAJ",
    Distance:2299.74,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DLM",
    To:"HAM",
    Distance:2374.38,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DLM",
    To:"IST",
    Distance:474.124,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"DLM",
    To:"IST",
    Distance:474.124,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DLM",
    To:"LBA",
    Distance:3012.04,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"DLM",
    To:"LBA",
    Distance:3012.04,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"DLM",
    To:"LBA",
    Distance:3012.04,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DLM",
    To:"LGW",
    Distance:2792.72,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"DLM",
    To:"LGW",
    Distance:2792.72,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"DLM",
    To:"LGW",
    Distance:2792.72,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"DLM",
    To:"LGW",
    Distance:2792.72,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DLM",
    To:"LGW",
    Distance:2792.72,
    Airport:"easyJet"
}),
new Routes(
{
    From:"DLM",
    To:"LTN",
    Distance:2837.27,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"DLM",
    To:"LTN",
    Distance:2837.27,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DLM",
    To:"MAN",
    Distance:3023.52,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"DLM",
    To:"MAN",
    Distance:3023.52,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"DLM",
    To:"MAN",
    Distance:3023.52,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"DLM",
    To:"MAN",
    Distance:3023.52,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"DLM",
    To:"MAN",
    Distance:3023.52,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DLM",
    To:"MAN",
    Distance:3023.52,
    Airport:"easyJet"
}),
new Routes(
{
    From:"DLM",
    To:"MUC",
    Distance:1893.95,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DLM",
    To:"MUC",
    Distance:1893.95,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DLM",
    To:"NCL",
    Distance:3074.63,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"DLM",
    To:"NCL",
    Distance:3074.63,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"DLM",
    To:"NCL",
    Distance:3074.63,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DLM",
    To:"RTM",
    Distance:2551.83,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"DLM",
    To:"SAW",
    Distance:467.552,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"DLM",
    To:"STN",
    Distance:2800.34,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"DLM",
    To:"STN",
    Distance:2800.34,
    Airport:"easyJet"
}),
new Routes(
{
    From:"DLM",
    To:"STR",
    Distance:2070.39,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DLM",
    To:"STR",
    Distance:2070.39,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DLM",
    To:"SXF",
    Distance:2111.66,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DLM",
    To:"VIE",
    Distance:1612.33,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"DLM",
    To:"VKO",
    Distance:2194.38,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DLU",
    To:"CTU",
    Distance:653.321,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DLU",
    To:"JHG",
    Distance:411.145,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"DLU",
    To:"JHG",
    Distance:411.145,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DLU",
    To:"KMG",
    Distance:254.364,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"DLU",
    To:"KMG",
    Distance:254.364,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DLU",
    To:"KMG",
    Distance:254.364,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLU",
    To:"KWE",
    Distance:654.656,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DLY",
    To:"IPA",
    Distance:34.5056,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"DLY",
    To:"VLI",
    Distance:139.045,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"DMB",
    To:"ALA",
    Distance:468.95,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"DMB",
    To:"DME",
    Distance:2763.93,
    Airport:"Japan Asia Airways"
}),
new Routes(
{
    From:"DMB",
    To:"SVX",
    Distance:1714.03,
    Airport:"Japan Asia Airways"
}),
new Routes(
{
    From:"DMB",
    To:"TSE",
    Distance:908.392,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"DMD",
    To:"BUC",
    Distance:78.3186,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"DMD",
    To:"ISA",
    Distance:310.822,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"DMD",
    To:"ONG",
    Distance:147.025,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"DME",
    To:"AAQ",
    Distance:1157.82,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"ABA",
    Distance:3366.3,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"AER",
    Distance:1337.83,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"AER",
    Distance:1337.83,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"AER",
    Distance:1337.83,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"AGP",
    Distance:3793.53,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"DME",
    To:"AGP",
    Distance:3793.53,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DME",
    To:"AKX",
    Distance:1412.06,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"DME",
    To:"AKX",
    Distance:1412.06,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"DME",
    To:"ALA",
    Distance:3080.92,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"ALC",
    Distance:3424.91,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"DME",
    To:"ALC",
    Distance:3424.91,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DME",
    To:"ALC",
    Distance:3424.91,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"ALC",
    Distance:3424.91,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"AMM",
    Distance:2638.03,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"DME",
    To:"AMM",
    Distance:2638.03,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"ASB",
    Distance:2467.8,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"ASB",
    Distance:2467.8,
    Airport:"Turkmenistan Airlines"
}),
new Routes(
{
    From:"DME",
    To:"ASF",
    Distance:1235.23,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"DME",
    To:"ASF",
    Distance:1235.23,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"ATH",
    Distance:2206.29,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"DME",
    To:"ATH",
    Distance:2206.29,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"AUH",
    Distance:3706.72,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"DME",
    To:"AUH",
    Distance:3706.72,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"AZN",
    Distance:2986,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"DME",
    To:"BAX",
    Distance:2910.12,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"DME",
    To:"BAX",
    Distance:2910.12,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"BCN",
    Distance:3028.68,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"DME",
    To:"BCN",
    Distance:3028.68,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DME",
    To:"BCN",
    Distance:3028.68,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"BHK",
    Distance:2615.66,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"DME",
    To:"BHK",
    Distance:2615.66,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"BHK",
    Distance:2615.66,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"DME",
    To:"BKK",
    Distance:7058.76,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"DME",
    To:"BKK",
    Distance:7058.76,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"DME",
    To:"BKK",
    Distance:7058.76,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"BOJ",
    Distance:1612.48,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"BQS",
    Distance:5602.34,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"BRU",
    Distance:2260.68,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"DME",
    To:"BTK",
    Distance:3834.28,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"BUS",
    Distance:1557.68,
    Airport:"Georgian Airways"
}),
new Routes(
{
    From:"DME",
    To:"BUS",
    Distance:1557.68,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"CAI",
    Distance:2858.48,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"DME",
    To:"CEK",
    Distance:1484.45,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"CEK",
    Distance:1484.45,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"CFU",
    Distance:2203.36,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"DME",
    To:"CGN",
    Distance:2094.6,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"CIT",
    Distance:2691.19,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"DME",
    To:"CMB",
    Distance:6511.34,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"DME",
    To:"CSY",
    Distance:595.211,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"DME",
    To:"CXR",
    Distance:7735.91,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DME",
    To:"DLM",
    Distance:2190.17,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"DNK",
    Distance:807.206,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"DNK",
    Distance:807.206,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"DME",
    To:"DOH",
    Distance:3532.1,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DME",
    To:"DOK",
    Distance:815.695,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"DUS",
    Distance:2098.16,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DME",
    To:"DUS",
    Distance:2098.16,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"DWC",
    Distance:3708.04,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"DXB",
    Distance:3641.98,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DME",
    To:"DYR",
    Distance:6226.05,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"DYU",
    Distance:2961.54,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"DME",
    To:"DYU",
    Distance:2961.54,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"DME",
    To:"EGO",
    Distance:537.057,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"DME",
    To:"EGO",
    Distance:537.057,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"DME",
    To:"EGO",
    Distance:537.057,
    Airport:"Polet Airlines (Priv)"
}),
new Routes(
{
    From:"DME",
    To:"ESL",
    Distance:1099.94,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"DME",
    To:"EVN",
    Distance:1763.04,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"FCO",
    Distance:2394.06,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"DME",
    To:"FCO",
    Distance:2394.06,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"FEG",
    Distance:2982.37,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"DME",
    To:"FEG",
    Distance:2982.37,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"DME",
    To:"FKB",
    Distance:2146.83,
    Airport:"Germania"
}),
new Routes(
{
    From:"DME",
    To:"FRA",
    Distance:2048.82,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DME",
    To:"FRA",
    Distance:2048.82,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DME",
    To:"FRA",
    Distance:2048.82,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"FRU",
    Distance:2942.82,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"DME",
    To:"FRU",
    Distance:2942.82,
    Airport:"Apache Air"
}),
new Routes(
{
    From:"DME",
    To:"FRU",
    Distance:2942.82,
    Airport:"Comores Airlines"
}),
new Routes(
{
    From:"DME",
    To:"FRU",
    Distance:2942.82,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"DME",
    To:"FRU",
    Distance:2942.82,
    Airport:"Gabon Airlines"
}),
new Routes(
{
    From:"DME",
    To:"FRU",
    Distance:2942.82,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"GBB",
    Distance:1773.33,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"GDX",
    Distance:5892.42,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"GOA",
    Distance:2388.18,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"GOI",
    Distance:5401.54,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"GOJ",
    Distance:378.255,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"GOJ",
    Distance:378.255,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"GRV",
    Distance:1460.32,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"DME",
    To:"GVA",
    Distance:2427.48,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"DME",
    To:"GYD",
    Distance:1885.36,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"DME",
    To:"GYD",
    Distance:1885.36,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"HAN",
    Distance:6693.17,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DME",
    To:"HEL",
    Distance:937.62,
    Airport:"Finnair"
}),
new Routes(
{
    From:"DME",
    To:"HEL",
    Distance:937.62,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"HER",
    Distance:2434,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"DME",
    To:"HER",
    Distance:2434,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"HER",
    Distance:2434,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"HKG",
    Distance:7108.59,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"DME",
    To:"HKG",
    Distance:7108.59,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"HKG",
    Distance:7108.59,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"HKT",
    Distance:7429.48,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"HMA",
    Distance:1908.42,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"HRG",
    Distance:3156.49,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"HTA",
    Distance:4728.44,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"HTA",
    Distance:4728.44,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"IAH",
    Distance:9532.45,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"DME",
    To:"IAH",
    Distance:9532.45,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"IEV",
    Distance:747.539,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"IJK",
    Distance:974.647,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"DME",
    To:"IJK",
    Distance:974.647,
    Airport:"IzAvia"
}),
new Routes(
{
    From:"DME",
    To:"IKT",
    Distance:4207.87,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"IKT",
    Distance:4207.87,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KBP",
    Distance:733.04,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KBP",
    Distance:733.04,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KEJ",
    Distance:2986.35,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KEJ",
    Distance:2986.35,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KGD",
    Distance:1098.78,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KGD",
    Distance:1098.78,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KGD",
    Distance:1098.78,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KGF",
    Distance:2450.1,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KGS",
    Distance:2225.45,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KHV",
    Distance:6149.96,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KIV",
    Distance:1129.77,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"DME",
    To:"KIV",
    Distance:1129.77,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KJA",
    Distance:3322.02,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KJA",
    Distance:3322.02,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KOV",
    Distance:2047.63,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KRO",
    Distance:1723.79,
    Airport:"IzAvia"
}),
new Routes(
{
    From:"DME",
    To:"KRR",
    Distance:1156.98,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"DME",
    To:"KRR",
    Distance:1156.98,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KRR",
    Distance:1156.98,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KRR",
    Distance:1156.98,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KSQ",
    Distance:2775.07,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KSQ",
    Distance:2775.07,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"DME",
    To:"KUF",
    Distance:818.239,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KUF",
    Distance:818.239,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KUF",
    Distance:818.239,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KVD",
    Distance:1743.94,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KZN",
    Distance:715.665,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"DME",
    To:"KZN",
    Distance:715.665,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KZN",
    Distance:715.665,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"KZN",
    Distance:715.665,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"LBD",
    Distance:2873.23,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"LBD",
    Distance:2873.23,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"DME",
    To:"LCA",
    Distance:2306.71,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"LED",
    Distance:666.891,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"DME",
    To:"LED",
    Distance:666.891,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"DME",
    To:"LED",
    Distance:666.891,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"LED",
    Distance:666.891,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"LED",
    Distance:666.891,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"LEJ",
    Distance:1746.14,
    Airport:"Germania"
}),
new Routes(
{
    From:"DME",
    To:"LGW",
    Distance:2543.34,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"LGW",
    Distance:2543.34,
    Airport:"easyJet"
}),
new Routes(
{
    From:"DME",
    To:"LHR",
    Distance:2544.68,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DME",
    To:"LIS",
    Distance:3913.3,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"LIS",
    Distance:3913.3,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"DME",
    To:"LLK",
    Distance:2023.05,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"LWN",
    Distance:1687.33,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"MAD",
    Distance:3436.01,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DME",
    To:"MAD",
    Distance:3436.01,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"MAN",
    Distance:2575.6,
    Airport:"easyJet"
}),
new Routes(
{
    From:"DME",
    To:"MCX",
    Distance:1566.13,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"DME",
    To:"MJZ",
    Distance:4171.5,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"DME",
    To:"MLA",
    Distance:2808.36,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"DME",
    To:"MRV",
    Distance:1296.91,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"MRV",
    Distance:1296.91,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"MRV",
    Distance:1296.91,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"MSQ",
    Distance:657.032,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"DME",
    To:"MSQ",
    Distance:657.032,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"MSQ",
    Distance:657.032,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"MUC",
    Distance:1942.02,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DME",
    To:"MUC",
    Distance:1942.02,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DME",
    To:"MUC",
    Distance:1942.02,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"MXP",
    Distance:2307.96,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"NBC",
    Distance:892.767,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"DME",
    To:"NBE",
    Distance:2989.89,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"DME",
    To:"NBE",
    Distance:2989.89,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"NCE",
    Distance:2540.91,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"DME",
    To:"NCU",
    Distance:2123.46,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"NCU",
    Distance:2123.46,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"DME",
    To:"NJC",
    Distance:2306.74,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"NJC",
    Distance:2306.74,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"NMA",
    Distance:2921.85,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"DME",
    To:"NMA",
    Distance:2921.85,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"DME",
    To:"NOJ",
    Distance:2244.47,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"DME",
    To:"NOZ",
    Distance:3093.04,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"NRT",
    Distance:7513.21,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"DME",
    To:"NRT",
    Distance:7513.21,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"NSK",
    Distance:2864.83,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"DME",
    To:"NSK",
    Distance:2864.83,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"NUX",
    Distance:2346.4,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"DME",
    To:"NUX",
    Distance:2346.4,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"NUX",
    Distance:2346.4,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"NVI",
    Distance:2624.2,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"DME",
    To:"NVI",
    Distance:2624.2,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"NVI",
    Distance:2624.2,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"DME",
    To:"NYM",
    Distance:2171.62,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"DME",
    To:"NYM",
    Distance:2171.62,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"ODS",
    Distance:1118.57,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"ODS",
    Distance:1118.57,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"DME",
    To:"OGZ",
    Distance:1439.68,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"OMS",
    Distance:2223.64,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"DME",
    To:"OMS",
    Distance:2223.64,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"OMS",
    Distance:2223.64,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"OSS",
    Distance:3025.2,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"DME",
    To:"OSS",
    Distance:3025.2,
    Airport:"Comores Airlines"
}),
new Routes(
{
    From:"DME",
    To:"OSS",
    Distance:3025.2,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"DME",
    To:"OSS",
    Distance:3025.2,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"OSS",
    Distance:3025.2,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"OSW",
    Distance:1452.25,
    Airport:"Orenburg Airlines"
}),
new Routes(
{
    From:"DME",
    To:"OVB",
    Distance:2789.7,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"OVB",
    Distance:2789.7,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"OVB",
    Distance:2789.7,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"PED",
    Distance:1600.67,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"PEE",
    Distance:1137.75,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"PEE",
    Distance:1137.75,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"PES",
    Distance:751.848,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"DME",
    To:"PEZ",
    Distance:527.708,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"DME",
    To:"PFO",
    Distance:2338.02,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"PFO",
    Distance:2338.02,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"PKC",
    Distance:6774.74,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"PMI",
    Distance:3126.15,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"DME",
    To:"PMI",
    Distance:3126.15,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DME",
    To:"PUJ",
    Distance:9296.61,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"PUY",
    Distance:2053.92,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"PWQ",
    Distance:2561.93,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"PYJ",
    Distance:3920.68,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"DME",
    To:"REN",
    Distance:1221.76,
    Airport:"Orenburg Airlines"
}),
new Routes(
{
    From:"DME",
    To:"RGK",
    Distance:3115.55,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"RHO",
    Distance:2240.36,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"DME",
    To:"RHO",
    Distance:2240.36,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"RHO",
    Distance:2240.36,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"RIX",
    Distance:877.404,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"DME",
    To:"RIX",
    Distance:877.404,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"RMI",
    Distance:2196.2,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"RMI",
    Distance:2196.2,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"ROV",
    Distance:915.873,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"ROV",
    Distance:915.873,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"ROV",
    Distance:915.873,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"RTW",
    Distance:702.929,
    Airport:"Saratov Aviation Division"
}),
new Routes(
{
    From:"DME",
    To:"SAW",
    Distance:1731.8,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"DME",
    To:"SCO",
    Distance:1591.45,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"DME",
    To:"SGC",
    Distance:2141.37,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"SGN",
    Distance:7684.06,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"SGN",
    Distance:7684.06,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"DME",
    To:"SHJ",
    Distance:3638.84,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"DME",
    To:"SIN",
    Distance:8401.36,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"DME",
    To:"SIN",
    Distance:8401.36,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"SIP",
    Distance:1184.55,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"SIP",
    Distance:1184.55,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"SIP",
    Distance:1184.55,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"SKD",
    Distance:2760.33,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"DME",
    To:"SKD",
    Distance:2760.33,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"DME",
    To:"SKG",
    Distance:1985.15,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"DME",
    To:"SKG",
    Distance:1985.15,
    Airport:"Air Nippon"
}),
new Routes(
{
    From:"DME",
    To:"SKG",
    Distance:1985.15,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"SKX",
    Distance:489.664,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"DME",
    To:"SLY",
    Distance:1954.8,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"DME",
    To:"SSH",
    Distance:3063.22,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"STW",
    Distance:1183.09,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"STW",
    Distance:1183.09,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"SVX",
    Distance:1421.89,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"SVX",
    Distance:1421.89,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"SVX",
    Distance:1421.89,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"SYX",
    Distance:7179.23,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"TAS",
    Distance:2765.63,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"DME",
    To:"TBS",
    Distance:1611.48,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"TFS",
    Distance:5259.49,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"TGD",
    Distance:1979.09,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"DME",
    To:"TIV",
    Distance:2001.06,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"DME",
    To:"TIV",
    Distance:2001.06,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"DME",
    To:"TIV",
    Distance:2001.06,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"DME",
    To:"TIV",
    Distance:2001.06,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"TIV",
    Distance:2001.06,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"TJM",
    Distance:1691.51,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"DME",
    To:"TJM",
    Distance:1691.51,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"TJU",
    Distance:3064.28,
    Airport:"Japan Asia Airways"
}),
new Routes(
{
    From:"DME",
    To:"TJU",
    Distance:3064.28,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"TJU",
    Distance:3064.28,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"TLV",
    Distance:2612.35,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"DME",
    To:"TLV",
    Distance:2612.35,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"TMJ",
    Distance:2985.32,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"DME",
    To:"TOF",
    Distance:2892.7,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"TOF",
    Distance:2892.7,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"TSE",
    Distance:2263.64,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"TUN",
    Distance:2931.16,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DME",
    To:"TXL",
    Distance:1631.44,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DME",
    To:"TXL",
    Distance:1631.44,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"UFA",
    Distance:1147.16,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"DME",
    To:"UFA",
    Distance:1147.16,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"UFA",
    Distance:1147.16,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"UFA",
    Distance:1147.16,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"UGC",
    Distance:2254.53,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"UGC",
    Distance:2254.53,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"DME",
    To:"UKK",
    Distance:3007.23,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"UKS",
    Distance:1230.54,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"DME",
    To:"ULV",
    Distance:672.274,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"DME",
    To:"UUA",
    Distance:951.444,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"DME",
    To:"UUD",
    Distance:4410.91,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"UUD",
    Distance:4410.91,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DME",
    To:"UUS",
    Distance:6658.53,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"VAR",
    Distance:1534.97,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"VIE",
    Distance:1668.14,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"DME",
    To:"VIE",
    Distance:1668.14,
    Airport:"Niki"
}),
new Routes(
{
    From:"DME",
    To:"VIE",
    Distance:1668.14,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"VIE",
    Distance:1668.14,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"VIE",
    Distance:1668.14,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DME",
    To:"VKT",
    Distance:1903.16,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"DME",
    To:"VLC",
    Distance:3324.23,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"VNO",
    Distance:807.947,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"VOG",
    Distance:857.292,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"VOZ",
    Distance:409.083,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"DME",
    To:"VOZ",
    Distance:409.083,
    Airport:"Polet Airlines (Priv)"
}),
new Routes(
{
    From:"DME",
    To:"VRA",
    Distance:9586.09,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"VRN",
    Distance:2194.48,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"VVO",
    Distance:6410.29,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"YKS",
    Distance:4897.12,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DME",
    To:"YKS",
    Distance:4897.12,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DME",
    To:"ZRH",
    Distance:2197.22,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"DMK",
    To:"BFV",
    Distance:320.244,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"CAN",
    Distance:1700.86,
    Airport:"Orient Thai Airlines"
}),
new Routes(
{
    From:"DMK",
    To:"CAN",
    Distance:1700.86,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"CEI",
    Distance:675.985,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"CEI",
    Distance:675.985,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"CGK",
    Distance:2326,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"CJM",
    Distance:380.801,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"CKG",
    Distance:1863.77,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"CNX",
    Distance:567.542,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"CNX",
    Distance:567.542,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"CSX",
    Distance:2054.15,
    Airport:"Alpi Eagles"
}),
new Routes(
{
    From:"DMK",
    To:"CSX",
    Distance:2054.15,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"DPS",
    Distance:2988.43,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"HAN",
    Distance:981.743,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"HDY",
    Distance:776.423,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"HDY",
    Distance:776.423,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"HGH",
    Distance:2723.63,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"HKG",
    Distance:1686.48,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"HKT",
    Distance:691.559,
    Airport:"Alpi Eagles"
}),
new Routes(
{
    From:"DMK",
    To:"HKT",
    Distance:691.559,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"HKT",
    Distance:691.559,
    Airport:"Orient Thai Airlines"
}),
new Routes(
{
    From:"DMK",
    To:"HKT",
    Distance:691.559,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"KBV",
    Distance:670.433,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"KBV",
    Distance:670.433,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"KHN",
    Distance:2291,
    Airport:"Alpi Eagles"
}),
new Routes(
{
    From:"DMK",
    To:"KKC",
    Distance:367.714,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"KMG",
    Distance:1252.13,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"KOP",
    Distance:579.382,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"KOP",
    Distance:579.382,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"KUL",
    Distance:1247.61,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"KUL",
    Distance:1247.61,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"DMK",
    To:"KUL",
    Distance:1247.61,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"LOE",
    Distance:409.904,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"MAA",
    Distance:2210.66,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"MAQ",
    Distance:380.707,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"MDL",
    Distance:994.927,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"MFM",
    Distance:1648.87,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"NAW",
    Distance:831.37,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"NGB",
    Distance:2776.92,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"NNT",
    Distance:544.662,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"NST",
    Distance:601.79,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"NST",
    Distance:601.79,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"PEN",
    Distance:958.675,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"PHS",
    Distance:321.096,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"PHS",
    Distance:321.096,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"PNH",
    Distance:529.533,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"PRH",
    Distance:471.568,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"REP",
    Distance:350.878,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"RGN",
    Distance:583.767,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"RGN",
    Distance:583.767,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"ROI",
    Distance:419.219,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"SGN",
    Distance:741.16,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"SIN",
    Distance:1445.71,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"SNO",
    Distance:524.123,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"SUB",
    Distance:2722.61,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"SZX",
    Distance:1696.88,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"TST",
    Distance:720.236,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"TST",
    Distance:720.236,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"UBP",
    Distance:482.332,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"UBP",
    Distance:482.332,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"UNN",
    Distance:509.672,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"URT",
    Distance:555.15,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"URT",
    Distance:555.15,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"UTH",
    Distance:451.383,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"DMK",
    To:"UTH",
    Distance:451.383,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"WUH",
    Distance:2335.22,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMK",
    To:"XIY",
    Distance:2425.75,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DMM",
    To:"ABT",
    Distance:1079.09,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"ADD",
    Distance:2264.18,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"ADE",
    Distance:1596.46,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"DMM",
    To:"AHB",
    Distance:1172.8,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"AMM",
    Distance:1461.35,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"DMM",
    To:"AMS",
    Distance:4704.77,
    Airport:"Air France"
}),
new Routes(
{
    From:"DMM",
    To:"AMS",
    Distance:4704.77,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DMM",
    To:"AMS",
    Distance:4704.77,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"AUH",
    Distance:537.343,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"DMM",
    To:"AUH",
    Distance:537.343,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DMM",
    To:"AUH",
    Distance:537.343,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"DMM",
    To:"BAH",
    Distance:86.1856,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"DMM",
    To:"BAH",
    Distance:86.1856,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"BEY",
    Distance:1597.93,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"BHH",
    Distance:1028.15,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"BLR",
    Distance:3270.7,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"BOM",
    Distance:2498.91,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DMM",
    To:"BOM",
    Distance:2498.91,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"CAI",
    Distance:1843.68,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"DMM",
    To:"CAI",
    Distance:1843.68,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"CCJ",
    Distance:3226.89,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"DMM",
    To:"CCJ",
    Distance:3226.89,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"CMB",
    Distance:3835.4,
    Airport:"L"
}),
new Routes(
{
    From:"DMM",
    To:"CMB",
    Distance:3835.4,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"CMB",
    Distance:3835.4,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"COK",
    Distance:3329.68,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DMM",
    To:"COK",
    Distance:3329.68,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"DAC",
    Distance:4080.06,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"DEL",
    Distance:2696.95,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DMM",
    To:"DEL",
    Distance:2696.95,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DMM",
    To:"DEL",
    Distance:2696.95,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"DOH",
    Distance:222.181,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DMM",
    To:"DWC",
    Distance:573.569,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DMM",
    To:"DXB",
    Distance:573.163,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DMM",
    To:"DXB",
    Distance:573.163,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DMM",
    To:"DXB",
    Distance:573.163,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DMM",
    To:"DXB",
    Distance:573.163,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"EAM",
    Distance:1130.01,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"ELQ",
    Distance:600.284,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"FRA",
    Distance:4369.04,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DMM",
    To:"GIZ",
    Distance:1298.34,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"HAS",
    Distance:810.986,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"HBE",
    Distance:2018.89,
    Airport:"Air Arabia Egypt"
}),
new Routes(
{
    From:"DMM",
    To:"HBE",
    Distance:2018.89,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"DMM",
    To:"HYD",
    Distance:3113.49,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"ISB",
    Distance:2372.99,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"ISB",
    Distance:2372.99,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"ISB",
    Distance:2372.99,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"DMM",
    To:"IST",
    Distance:2511.43,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"IST",
    Distance:2511.43,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"IXE",
    Distance:3016.32,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"DMM",
    To:"JED",
    Distance:1203.89,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"DMM",
    To:"JED",
    Distance:1203.89,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"KHI",
    Distance:1747.17,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"KHI",
    Distance:1747.17,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"KWI",
    Distance:355.24,
    Airport:"Air France"
}),
new Routes(
{
    From:"DMM",
    To:"KWI",
    Distance:355.24,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DMM",
    To:"KWI",
    Distance:355.24,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"KWI",
    Distance:355.24,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"DMM",
    To:"KWI",
    Distance:355.24,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DMM",
    To:"KWI",
    Distance:355.24,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"LHE",
    Distance:2452.36,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"LHE",
    Distance:2452.36,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"DMM",
    To:"MAA",
    Distance:3502.18,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"MCT",
    Distance:912.675,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"DMM",
    To:"MED",
    Distance:1034.73,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"DMM",
    To:"MED",
    Distance:1034.73,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"MHD",
    Distance:1430.88,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"DMM",
    To:"MHD",
    Distance:1430.88,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"MNL",
    Distance:7450.69,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"MNL",
    Distance:7450.69,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"RUH",
    Distance:353.138,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"RUH",
    Distance:353.138,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"DMM",
    To:"RUH",
    Distance:353.138,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"SHJ",
    Distance:585.955,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"DMM",
    To:"SKT",
    Distance:2464.77,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"TAI",
    Distance:1538.92,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"DMM",
    To:"TIF",
    Distance:1091,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"DMM",
    To:"TIF",
    Distance:1091,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"TRV",
    Distance:3489,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DMM",
    To:"TUU",
    Distance:1317.06,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DMM",
    To:"YNB",
    Distance:1207.13,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"DMU",
    To:"CCU",
    Distance:648.126,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DMU",
    To:"DIB",
    Distance:216.727,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DND",
    To:"STN",
    Distance:550.3,
    Airport:"Flybe"
}),
new Routes(
{
    From:"DNH",
    To:"HGH",
    Distance:2588.99,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"DNH",
    To:"LHW",
    Distance:912.794,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"DNH",
    To:"LHW",
    Distance:912.794,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"DNH",
    To:"URC",
    Distance:717.265,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DNH",
    To:"URC",
    Distance:717.265,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"DNH",
    To:"XIY",
    Distance:1407.87,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DNH",
    To:"XIY",
    Distance:1407.87,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DNK",
    To:"BUS",
    Distance:907.065,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"DNK",
    To:"DME",
    Distance:807.206,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DNK",
    To:"DME",
    Distance:807.206,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"DNK",
    To:"EVN",
    Distance:1173.58,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"DNK",
    To:"IST",
    Distance:958.706,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DNK",
    To:"IST",
    Distance:958.706,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"DNK",
    To:"IST",
    Distance:958.706,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"DNK",
    To:"KBP",
    Distance:376.29,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"DNK",
    To:"KBP",
    Distance:376.29,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"DNK",
    To:"SVO",
    Distance:861.251,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"DNK",
    To:"TBS",
    Distance:1072.21,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"DNK",
    To:"TLV",
    Distance:1817.66,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"DNK",
    To:"VIE",
    Distance:1369.44,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"DNK",
    To:"VIE",
    Distance:1369.44,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"DNR",
    To:"EMA",
    Distance:474.801,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DNR",
    To:"GCI",
    Distance:101.614,
    Airport:"Aurigny Air Services"
}),
new Routes(
{
    From:"DNR",
    To:"STN",
    Distance:401.864,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DNZ",
    To:"IST",
    Distance:362.947,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DNZ",
    To:"SAW",
    Distance:347.785,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"ADD",
    Distance:2258.77,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"ADE",
    Distance:1542.81,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"DOH",
    To:"ALG",
    Distance:4729.08,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"AMD",
    Distance:2148.98,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"AMM",
    Distance:1680.53,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"AMM",
    Distance:1680.53,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"DOH",
    To:"AMS",
    Distance:4921.35,
    Airport:"Air France"
}),
new Routes(
{
    From:"DOH",
    To:"AMS",
    Distance:4921.35,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DOH",
    To:"AMS",
    Distance:4921.35,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"ARN",
    Distance:4617.48,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"ATH",
    Distance:2955.1,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"DOH",
    To:"ATH",
    Distance:2955.1,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"ATQ",
    Distance:2375.52,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"AUH",
    Distance:324.712,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"DOH",
    To:"AUH",
    Distance:324.712,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"BAH",
    Distance:145.963,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DOH",
    To:"BAH",
    Distance:145.963,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"DOH",
    To:"BAH",
    Distance:145.963,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"BAH",
    Distance:145.963,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DOH",
    To:"BAH",
    Distance:145.963,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"DOH",
    To:"BAH",
    Distance:145.963,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"BAH",
    Distance:145.963,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DOH",
    To:"BAH",
    Distance:145.963,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"DOH",
    To:"BAH",
    Distance:145.963,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"BAH",
    Distance:145.963,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"BAH",
    Distance:145.963,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"DOH",
    To:"BAH",
    Distance:145.963,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"BCN",
    Distance:4858.68,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"DOH",
    To:"BCN",
    Distance:4858.68,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"BCN",
    Distance:4858.68,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DOH",
    To:"BEY",
    Distance:1819.9,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"BEY",
    Distance:1819.9,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"BGW",
    Distance:1138.2,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"BKK",
    Distance:5284.2,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"BLR",
    Distance:3056.53,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"BOM",
    Distance:2295.17,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"DOH",
    To:"BOM",
    Distance:2295.17,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DOH",
    To:"BOM",
    Distance:2295.17,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"BRU",
    Distance:4890.47,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"BSR",
    Distance:701.869,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"BUD",
    Distance:3754.55,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"CAI",
    Distance:2053.95,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"DOH",
    To:"CAI",
    Distance:2053.95,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"CAN",
    Distance:6201.39,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"CCJ",
    Distance:3008.29,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"DOH",
    To:"CCJ",
    Distance:3008.29,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"CCU",
    Distance:3747.39,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"CDG",
    Distance:4967.08,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"CGK",
    Distance:6897.06,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"CKG",
    Distance:5405.08,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"CMB",
    Distance:3615.69,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"CMB",
    Distance:3615.69,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"CMN",
    Distance:5731.01,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"COK",
    Distance:3110.32,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DOH",
    To:"COK",
    Distance:3110.32,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"CPH",
    Distance:4608.47,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"CRK",
    Distance:7213.49,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"CTU",
    Distance:5135.4,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"DAC",
    Distance:3917.11,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"DAR",
    Distance:3815.79,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"DEL",
    Distance:2553.73,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DOH",
    To:"DEL",
    Distance:2553.73,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"DME",
    Distance:3532.1,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"DMM",
    Distance:222.181,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"DWC",
    Distance:365.462,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DOH",
    To:"DWC",
    Distance:365.462,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"DXB",
    Distance:382.074,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"DXB",
    Distance:382.074,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DOH",
    To:"DXB",
    Distance:382.074,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DOH",
    To:"DXB",
    Distance:382.074,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"DXB",
    Distance:382.074,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"EBB",
    Distance:3476.34,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"EBL",
    Distance:1419.12,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"ELQ",
    Distance:788.519,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"ESB",
    Distance:2388.87,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"FCO",
    Distance:4035.23,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"FRA",
    Distance:4587.21,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DOH",
    To:"FRA",
    Distance:4587.21,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DOH",
    To:"FRA",
    Distance:4587.21,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"FRA",
    Distance:4587.21,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"DOH",
    To:"FRA",
    Distance:4587.21,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DOH",
    To:"FRA",
    Distance:4587.21,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"GOI",
    Distance:2563.32,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"GRU",
    Distance:11853.3,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"GVA",
    Distance:4633.57,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"DOH",
    To:"GVA",
    Distance:4633.57,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"GYD",
    Distance:1696.73,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"GYD",
    Distance:1696.73,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"HBE",
    Distance:2231.21,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"HGH",
    Distance:6697.13,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"HKG",
    Distance:6295.2,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"DOH",
    To:"HKG",
    Distance:6295.2,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"HYD",
    Distance:2911.82,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"IAD",
    Distance:11125.7,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"IAD",
    Distance:11125.7,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"IAH",
    Distance:12931.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"IAH",
    Distance:12931.4,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"IAH",
    Distance:12931.4,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DOH",
    To:"ICN",
    Distance:7056.84,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"ICN",
    Distance:7056.84,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"IKA",
    Distance:1129.87,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"ISB",
    Distance:2276.87,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"IST",
    Distance:2731.42,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"IST",
    Distance:2731.42,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"ISU",
    Distance:1291.84,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"JED",
    Distance:1326.11,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"JED",
    Distance:1326.11,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"JFK",
    Distance:10767.8,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"JFK",
    Distance:10767.8,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"JNB",
    Distance:6239.48,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"KHI",
    Distance:1570.23,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"KIX",
    Distance:7909.23,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"DOH",
    To:"KIX",
    Distance:7909.23,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"KIX",
    Distance:7909.23,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"KRT",
    Distance:2250.27,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"KRT",
    Distance:2250.27,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"DOH",
    To:"KTM",
    Distance:3364.05,
    Airport:"Nepal Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"KTM",
    Distance:3364.05,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"KUL",
    Distance:5913.04,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"KUL",
    Distance:5913.04,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"KWI",
    Distance:566.317,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"DOH",
    To:"KWI",
    Distance:566.317,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"LCA",
    Distance:2025.61,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"LHE",
    Distance:2334.79,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"LHR",
    Distance:5239.69,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"LHR",
    Distance:5239.69,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DOH",
    To:"LOS",
    Distance:5523.01,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"LRR",
    Distance:388.2,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"DOH",
    To:"LXR",
    Distance:1892.17,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"MAA",
    Distance:3290.89,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"MAD",
    Distance:5327.36,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"DOH",
    To:"MAD",
    Distance:5327.36,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"MAD",
    Distance:5327.36,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DOH",
    To:"MAN",
    Distance:5407.62,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"MAN",
    Distance:5407.62,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DOH",
    To:"MCT",
    Distance:705.006,
    Airport:"Air France"
}),
new Routes(
{
    From:"DOH",
    To:"MCT",
    Distance:705.006,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DOH",
    To:"MCT",
    Distance:705.006,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"MCT",
    Distance:705.006,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"DOH",
    To:"MCT",
    Distance:705.006,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"MED",
    Distance:1198.31,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"MEL",
    Distance:11960.4,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"MHD",
    Distance:1442.43,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"MLE",
    Distance:3314.69,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"MNL",
    Distance:7286.87,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"MNL",
    Distance:7286.87,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"MUC",
    Distance:4299.93,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"MUC",
    Distance:4299.93,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DOH",
    To:"MXP",
    Distance:4420.43,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"NBO",
    Distance:3349.35,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"NJF",
    Distance:1023.42,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"NRT",
    Distance:8302.06,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"DOH",
    To:"NRT",
    Distance:8302.06,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"NRT",
    Distance:8302.06,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"ORD",
    Distance:11457.1,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"ORD",
    Distance:11457.1,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"OSL",
    Distance:4956.82,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"OTP",
    Distance:3137.66,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"PEK",
    Distance:6166.8,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"PER",
    Distance:9332.11,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"PEW",
    Distance:2153.52,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"PEW",
    Distance:2153.52,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"PHL",
    Distance:10917,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"PHL",
    Distance:10917,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"PVG",
    Distance:6800.52,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"RGN",
    Distance:4694.85,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"RUH",
    Distance:491.104,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"RUH",
    Distance:491.104,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"RUH",
    Distance:491.104,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"SAH",
    Distance:1329.65,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"SAH",
    Distance:1329.65,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"DOH",
    To:"SAW",
    Distance:2691.84,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"DOH",
    To:"SGN",
    Distance:5998.86,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"SHJ",
    Distance:397.375,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"DOH",
    To:"SHJ",
    Distance:397.375,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"SIN",
    Distance:6210.45,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"SLL",
    Distance:950.994,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"SYZ",
    Distance:486.333,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"DOH",
    To:"SYZ",
    Distance:486.333,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"TIF",
    Distance:1200.21,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"TRV",
    Distance:3268.51,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"TUN",
    Distance:4107.27,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"TXL",
    Distance:4404.11,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"VCE",
    Distance:4147.4,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"DOH",
    To:"VCE",
    Distance:4147.4,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"VIE",
    Distance:3966.71,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"WAW",
    Distance:3942.96,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"YUL",
    Distance:10404.8,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOH",
    To:"ZRH",
    Distance:4492.83,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DOK",
    To:"DME",
    Distance:815.695,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DOK",
    To:"DWC",
    Distance:3027.46,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DOK",
    To:"IST",
    Distance:1058.45,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"DOK",
    To:"IST",
    Distance:1058.45,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DOK",
    To:"IST",
    Distance:1058.45,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"DOK",
    To:"KBP",
    Distance:557.414,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"DOK",
    To:"KBP",
    Distance:557.414,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"DOK",
    To:"KUT",
    Distance:753.581,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"DOK",
    To:"LCA",
    Distance:1506.53,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"DOK",
    To:"MUC",
    Distance:1914.07,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DOK",
    To:"SAW",
    Distance:1039.77,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"DOK",
    To:"SHJ",
    Distance:2968.56,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"DOK",
    To:"SKG",
    Distance:1440.69,
    Airport:"Air Nippon"
}),
new Routes(
{
    From:"DOK",
    To:"SVO",
    Distance:878.611,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"DOK",
    To:"TLV",
    Distance:1802.14,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"DOL",
    To:"LCY",
    Distance:238.054,
    Airport:"Air France"
}),
new Routes(
{
    From:"DOL",
    To:"LCY",
    Distance:238.054,
    Airport:"CityJet"
}),
new Routes(
{
    From:"DOM",
    To:"ANU",
    Distance:184.419,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"DOM",
    To:"BGI",
    Distance:336.902,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"DOM",
    To:"EIS",
    Distance:471.927,
    Airport:"BVI Airways"
}),
new Routes(
{
    From:"DOM",
    To:"EIS",
    Distance:471.927,
    Airport:"TUR Avrupa Hava YollarÄ±"
}),
new Routes(
{
    From:"DOM",
    To:"PTP",
    Distance:83.6272,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"DOM",
    To:"PTP",
    Distance:83.6272,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"DOM",
    To:"PTP",
    Distance:83.6272,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"DOM",
    To:"SJU",
    Distance:594.434,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DOM",
    To:"SJU",
    Distance:594.434,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"DOM",
    To:"SJU",
    Distance:594.434,
    Airport:"Seaborne Airlines"
}),
new Routes(
{
    From:"DOM",
    To:"SJU",
    Distance:594.434,
    Airport:"TUR Avrupa Hava YollarÄ±"
}),
new Routes(
{
    From:"DOM",
    To:"STT",
    Distance:498.891,
    Airport:"TUR Avrupa Hava YollarÄ±"
}),
new Routes(
{
    From:"DOM",
    To:"SVD",
    Distance:267.343,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"DOM",
    To:"SXM",
    Distance:337.601,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"DOM",
    To:"SXM",
    Distance:337.601,
    Airport:"BVI Airways"
}),
new Routes(
{
    From:"DOM",
    To:"SXM",
    Distance:337.601,
    Airport:"TUR Avrupa Hava YollarÄ±"
}),
new Routes(
{
    From:"DOM",
    To:"SXM",
    Distance:337.601,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"DOU",
    To:"CGR",
    Distance:195.321,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"DOU",
    To:"GRU",
    Distance:864.776,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"DOU",
    To:"VCP",
    Distance:792.183,
    Airport:"Azul"
}),
new Routes(
{
    From:"DOY",
    To:"CAN",
    Distance:1614.98,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"DOY",
    To:"CKG",
    Distance:1365.72,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"DOY",
    To:"DLC",
    Distance:341.506,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"DOY",
    To:"HRB",
    Distance:1140.44,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"DOY",
    To:"PEK",
    Distance:345.288,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"DOY",
    To:"PVG",
    Distance:754.367,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"DPL",
    To:"CEB",
    Distance:202.488,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"DPL",
    To:"DVO",
    Distance:302.883,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"DPL",
    To:"MNL",
    Distance:703.573,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"DPL",
    To:"MNL",
    Distance:703.573,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"DPO",
    To:"MEL",
    Distance:411.954,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DPS",
    To:"ADL",
    Distance:3759.86,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"DPS",
    To:"ADL",
    Distance:3759.86,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"DPS",
    To:"BDO",
    Distance:861.027,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"BDO",
    Distance:861.027,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"BDO",
    Distance:861.027,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"DPS",
    To:"BDO",
    Distance:861.027,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"BKI",
    Distance:1635.88,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"DPS",
    To:"BKK",
    Distance:2958.59,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"DPS",
    To:"BMU",
    Distance:387.669,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"BMU",
    Distance:387.669,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"BNE",
    Distance:4487.82,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"BNE",
    Distance:4487.82,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"DPS",
    To:"BNE",
    Distance:4487.82,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"DPS",
    To:"BPN",
    Distance:853.419,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"BTH",
    Distance:1644.11,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"CAN",
    Distance:3579.64,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"CGK",
    Distance:982.619,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"CGK",
    Distance:982.619,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"CGK",
    Distance:982.619,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"DPS",
    To:"CGK",
    Distance:982.619,
    Airport:"Interlink Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"CGK",
    Distance:982.619,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"CGK",
    Distance:982.619,
    Airport:"Mandala Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"CGK",
    Distance:982.619,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"DPS",
    To:"DIL",
    Distance:1138.8,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"DPS",
    To:"DMK",
    Distance:2988.43,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"DPS",
    To:"DRW",
    Distance:1763.78,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"DPS",
    To:"DRW",
    Distance:1763.78,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"DPS",
    To:"HKG",
    Distance:3456.09,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"DPS",
    To:"HKG",
    Distance:3456.09,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"DPS",
    To:"HKG",
    Distance:3456.09,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"HKG",
    Distance:3456.09,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"HKG",
    Distance:3456.09,
    Airport:"Mandala Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"HND",
    Distance:5561.06,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"DPS",
    To:"HND",
    Distance:5561.06,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"ICN",
    Distance:5271.61,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"ICN",
    Distance:5271.61,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"ICN",
    Distance:5271.61,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"DPS",
    To:"JOG",
    Distance:531.893,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"JOG",
    Distance:531.893,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"DPS",
    To:"JOG",
    Distance:531.893,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"KIX",
    Distance:5246.71,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"DPS",
    To:"KIX",
    Distance:5246.71,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"KOE",
    Distance:946.024,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"KOE",
    Distance:946.024,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"KUL",
    Distance:1964.39,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"DPS",
    To:"KUL",
    Distance:1964.39,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"DPS",
    To:"KUL",
    Distance:1964.39,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"KUL",
    Distance:1964.39,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"DPS",
    To:"LBJ",
    Distance:519.932,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"LBJ",
    Distance:519.932,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"LOP",
    Distance:121.939,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"LOP",
    Distance:121.939,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"MEL",
    Distance:4381.98,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"MEL",
    Distance:4381.98,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"DPS",
    To:"MEL",
    Distance:4381.98,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"DPS",
    To:"MLG",
    Distance:284.884,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"MNL",
    Distance:2665.36,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"DPS",
    To:"MNL",
    Distance:2665.36,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"MOF",
    Distance:777.164,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"NRT",
    Distance:5610.61,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"DPS",
    To:"NRT",
    Distance:5610.61,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"PER",
    Distance:2580.17,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"PER",
    Distance:2580.17,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"DPS",
    To:"PER",
    Distance:2580.17,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"DPS",
    To:"PER",
    Distance:2580.17,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DPS",
    To:"PER",
    Distance:2580.17,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"DPS",
    To:"PHE",
    Distance:1345.46,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"DPS",
    To:"PLM",
    Distance:1327.64,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"POM",
    Distance:3518.94,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"DPS",
    To:"PVG",
    Distance:4491.78,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"SIN",
    Distance:1671.48,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"SIN",
    Distance:1671.48,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"DPS",
    To:"SIN",
    Distance:1671.48,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"DPS",
    To:"SIN",
    Distance:1671.48,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"SIN",
    Distance:1671.48,
    Airport:"Mandala Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"SIN",
    Distance:1671.48,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DPS",
    To:"SIN",
    Distance:1671.48,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DPS",
    To:"SIN",
    Distance:1671.48,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"SIN",
    Distance:1671.48,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"DPS",
    To:"SIN",
    Distance:1671.48,
    Airport:"Valuair"
}),
new Routes(
{
    From:"DPS",
    To:"SRG",
    Distance:563.686,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"SRG",
    Distance:563.686,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"SUB",
    Distance:303.023,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"SUB",
    Distance:303.023,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"SUB",
    Distance:303.023,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"DPS",
    To:"SUB",
    Distance:303.023,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"SYD",
    Distance:4622.15,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"SYD",
    Distance:4622.15,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"DPS",
    To:"SYD",
    Distance:4622.15,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"DPS",
    To:"SZX",
    Distance:3493.25,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"TIM",
    Distance:2443.7,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"TMC",
    Distance:453.696,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"TMC",
    Distance:453.696,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"TPE",
    Distance:3818.25,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"TPE",
    Distance:3818.25,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"DPS",
    To:"TPE",
    Distance:3818.25,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"UPG",
    Distance:634.397,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"DPS",
    To:"UPG",
    Distance:634.397,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"DPS",
    To:"UPG",
    Distance:634.397,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DPS",
    To:"WGP",
    Distance:572.827,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"DRG",
    To:"BKC",
    Distance:73.7004,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"DRG",
    To:"BKC",
    Distance:73.7004,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"DRG",
    To:"OTZ",
    Distance:90.9366,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"DRG",
    To:"OTZ",
    Distance:90.9366,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"DRK",
    To:"SJO",
    Distance:154.823,
    Airport:"CAL Cargo Air Lines"
}),
new Routes(
{
    From:"DRK",
    To:"SJO",
    Distance:154.823,
    Airport:"Euro Exec Express"
}),
new Routes(
{
    From:"DRK",
    To:"SJO",
    Distance:154.823,
    Airport:"LACSA"
}),
new Routes(
{
    From:"DRO",
    To:"DEN",
    Distance:403.264,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DRO",
    To:"DFW",
    Distance:1083.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DRO",
    To:"DFW",
    Distance:1083.48,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DRO",
    To:"PHX",
    Distance:565.707,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DRO",
    To:"PHX",
    Distance:565.707,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DRS",
    To:"AYT",
    Distance:2077.83,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DRS",
    To:"AYT",
    Distance:2077.83,
    Airport:"Germania"
}),
new Routes(
{
    From:"DRS",
    To:"BCN",
    Distance:1412.45,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"DRS",
    To:"BCN",
    Distance:1412.45,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DRS",
    To:"BSL",
    Distance:599.018,
    Airport:"easyJet"
}),
new Routes(
{
    From:"DRS",
    To:"CFU",
    Distance:1367.87,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DRS",
    To:"CGN",
    Distance:464.356,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DRS",
    To:"DUS",
    Distance:487.761,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DRS",
    To:"DUS",
    Distance:487.761,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DRS",
    To:"FRA",
    Distance:388.738,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DRS",
    To:"HER",
    Distance:1979.28,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DRS",
    To:"HRG",
    Distance:3151.95,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DRS",
    To:"LCY",
    Distance:952.411,
    Airport:"Air France"
}),
new Routes(
{
    From:"DRS",
    To:"LCY",
    Distance:952.411,
    Airport:"CityJet"
}),
new Routes(
{
    From:"DRS",
    To:"MUC",
    Distance:340.189,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DRS",
    To:"NBE",
    Distance:1695.11,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DRS",
    To:"PMI",
    Distance:1546.17,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DRS",
    To:"RHO",
    Distance:1993.25,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DRS",
    To:"STR",
    Distance:423.79,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DRS",
    To:"SVO",
    Distance:1642.56,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"DRS",
    To:"TFS",
    Distance:3606,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DRS",
    To:"ZRH",
    Distance:556.07,
    Airport:"Intersky"
}),
new Routes(
{
    From:"DRW",
    To:"ADL",
    Distance:2622.1,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"DRW",
    To:"ADL",
    Distance:2622.1,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DRW",
    To:"ASP",
    Distance:1307.08,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DRW",
    To:"ASP",
    Distance:1307.08,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DRW",
    To:"BME",
    Distance:1106.97,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"DRW",
    To:"BME",
    Distance:1106.97,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DRW",
    To:"BNE",
    Distance:2851.59,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DRW",
    To:"BNE",
    Distance:2851.59,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"DRW",
    To:"BNE",
    Distance:2851.59,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"DRW",
    To:"BNE",
    Distance:2851.59,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DRW",
    To:"BNE",
    Distance:2851.59,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"DRW",
    To:"BNE",
    Distance:2851.59,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"DRW",
    To:"CNS",
    Distance:1675.97,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"DRW",
    To:"CNS",
    Distance:1675.97,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DRW",
    To:"DIL",
    Distance:725.378,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"DRW",
    To:"DIL",
    Distance:725.378,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DRW",
    To:"DPS",
    Distance:1763.78,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"DRW",
    To:"DPS",
    Distance:1763.78,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"DRW",
    To:"GOV",
    Distance:645.992,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"DRW",
    To:"GOV",
    Distance:645.992,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DRW",
    To:"GOV",
    Distance:645.992,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DRW",
    To:"GTE",
    Distance:629.442,
    Airport:"Aero-Service"
}),
new Routes(
{
    From:"DRW",
    To:"GTE",
    Distance:629.442,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"DRW",
    To:"ISA",
    Distance:1297.77,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"DRW",
    To:"ISA",
    Distance:1297.77,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DRW",
    To:"KNX",
    Distance:441.48,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"DRW",
    To:"KNX",
    Distance:441.48,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DRW",
    To:"KUL",
    Distance:3635.38,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"DRW",
    To:"MCV",
    Distance:718.335,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"DRW",
    To:"MEL",
    Distance:3133.36,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"DRW",
    To:"MEL",
    Distance:3133.36,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DRW",
    To:"MEL",
    Distance:3133.36,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"DRW",
    To:"MNG",
    Distance:367.369,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"DRW",
    To:"MNL",
    Distance:3183.71,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"DRW",
    To:"PER",
    Distance:2652.63,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DRW",
    To:"PER",
    Distance:2652.63,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"DRW",
    To:"SIN",
    Distance:3338.35,
    Airport:"Jetstar Asia Airways"
}),
new Routes(
{
    From:"DRW",
    To:"SIN",
    Distance:3338.35,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"DRW",
    To:"SIN",
    Distance:3338.35,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"DRW",
    To:"SIN",
    Distance:3338.35,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"DRW",
    To:"SYD",
    Distance:3155.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DRW",
    To:"SYD",
    Distance:3155.48,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"DRW",
    To:"SYD",
    Distance:3155.48,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DRW",
    To:"SYD",
    Distance:3155.48,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"DRW",
    To:"TSV",
    Distance:1861.19,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"DRW",
    To:"TSV",
    Distance:1861.19,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DSK",
    To:"PEW",
    Distance:238.847,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"DSK",
    To:"PZH",
    Distance:148.863,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"DSM",
    To:"ATL",
    Distance:1195.77,
    Airport:"Air France"
}),
new Routes(
{
    From:"DSM",
    To:"ATL",
    Distance:1195.77,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DSM",
    To:"ATL",
    Distance:1195.77,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DSM",
    To:"CLT",
    Distance:1310.67,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DSM",
    To:"CLT",
    Distance:1310.67,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DSM",
    To:"DCA",
    Distance:1440.86,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DSM",
    To:"DCA",
    Distance:1440.86,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DSM",
    To:"DEN",
    Distance:945.932,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DSM",
    To:"DEN",
    Distance:945.932,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DSM",
    To:"DFW",
    Distance:1005.6,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DSM",
    To:"DFW",
    Distance:1005.6,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DSM",
    To:"DTW",
    Distance:856.424,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DSM",
    To:"EWR",
    Distance:1632.36,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DSM",
    To:"IAH",
    Distance:1293.07,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DSM",
    To:"LAS",
    Distance:1952.22,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"DSM",
    To:"LAS",
    Distance:1952.22,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DSM",
    To:"LGA",
    Distance:1655.4,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DSM",
    To:"MDW",
    Distance:491.724,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DSM",
    To:"MDW",
    Distance:491.724,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DSM",
    To:"MSP",
    Distance:373.991,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DSM",
    To:"ORD",
    Distance:480.103,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DSM",
    To:"ORD",
    Distance:480.103,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DSM",
    To:"ORD",
    Distance:480.103,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DSM",
    To:"PGD",
    Distance:1943.23,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"DSM",
    To:"PHX",
    Distance:1847.12,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DSM",
    To:"PHX",
    Distance:1847.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DSM",
    To:"PHX",
    Distance:1847.12,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DSM",
    To:"PIE",
    Distance:1813.43,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"DSM",
    To:"SFB",
    Distance:1809.2,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"DSN",
    To:"CGO",
    Distance:681.802,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"DSN",
    To:"CGO",
    Distance:681.802,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DSN",
    To:"CKG",
    Distance:1168.03,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"DSN",
    To:"CSX",
    Distance:1329.2,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"DSN",
    To:"CTU",
    Distance:1169.08,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"DSN",
    To:"HET",
    Distance:188.239,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"DSN",
    To:"HGH",
    Distance:1426.56,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"DSN",
    To:"HRB",
    Distance:1468.22,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DSN",
    To:"INC",
    Distance:378.74,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"DSN",
    To:"KMG",
    Distance:1786.49,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DSN",
    To:"NAY",
    Distance:542.693,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DSN",
    To:"NAY",
    Distance:542.693,
    Airport:"China United"
}),
new Routes(
{
    From:"DSN",
    To:"NKG",
    Distance:1201.57,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"DSN",
    To:"PEK",
    Distance:558.808,
    Airport:"Air China"
}),
new Routes(
{
    From:"DSN",
    To:"PEK",
    Distance:558.808,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DSN",
    To:"SHE",
    Distance:1130.73,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"DSN",
    To:"SJW",
    Distance:438.799,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"DSN",
    To:"TSN",
    Distance:632.574,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"DSN",
    To:"TYN",
    Distance:324.433,
    Airport:"Air China"
}),
new Routes(
{
    From:"DSN",
    To:"TYN",
    Distance:324.433,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"DSN",
    To:"URC",
    Distance:1914.82,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"DSN",
    To:"WUH",
    Distance:1076.58,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"DSN",
    To:"XIY",
    Distance:611.392,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"DSN",
    To:"XIY",
    Distance:611.392,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DSN",
    To:"XIY",
    Distance:611.392,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"DTM",
    To:"ADB",
    Distance:2116.3,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"DTM",
    To:"AGP",
    Distance:1907.32,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DTM",
    To:"AHO",
    Distance:1211.6,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DTM",
    To:"BCN",
    Distance:1212.28,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"DTM",
    To:"BCN",
    Distance:1212.28,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DTM",
    To:"BEG",
    Distance:1197.85,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"DTM",
    To:"BUD",
    Distance:954.287,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"DTM",
    To:"CLJ",
    Distance:1278.51,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"DTM",
    To:"FAO",
    Distance:2025.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DTM",
    To:"GDN",
    Distance:792.605,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"DTM",
    To:"GRO",
    Distance:1130.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DTM",
    To:"HDF",
    Distance:512.646,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DTM",
    To:"IEV",
    Distance:1597.75,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"DTM",
    To:"KRK",
    Distance:869.302,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DTM",
    To:"KTW",
    Distance:810.038,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"DTM",
    To:"LTN",
    Distance:551.181,
    Airport:"easyJet"
}),
new Routes(
{
    From:"DTM",
    To:"LWO",
    Distance:1164.9,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"DTM",
    To:"MUC",
    Distance:461.423,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DTM",
    To:"MUC",
    Distance:461.423,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DTM",
    To:"ONQ",
    Distance:2163.52,
    Airport:"Germania"
}),
new Routes(
{
    From:"DTM",
    To:"OPO",
    Distance:1686.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DTM",
    To:"OTP",
    Distance:1570.31,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"DTM",
    To:"PMI",
    Distance:1382.94,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DTM",
    To:"PMI",
    Distance:1382.94,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DTM",
    To:"PMI",
    Distance:1382.94,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DTM",
    To:"SAW",
    Distance:2032.37,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DTM",
    To:"SAW",
    Distance:2032.37,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"DTM",
    To:"SKP",
    Distance:1501.42,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"DTM",
    To:"SOF",
    Distance:1540.73,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"DTM",
    To:"SPU",
    Distance:1099.51,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DTM",
    To:"STN",
    Distance:509.805,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DTM",
    To:"TSR",
    Distance:1188.35,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"DTM",
    To:"VNO",
    Distance:1226.63,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"DTW",
    To:"ABE",
    Distance:681.798,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"ACY",
    Distance:798.865,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"ALB",
    Distance:785.148,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"AMS",
    Distance:6323.6,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"AMS",
    Distance:6323.6,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"APN",
    Distance:319.081,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"ATL",
    Distance:958.2,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"DTW",
    To:"ATL",
    Distance:958.2,
    Airport:"Air France"
}),
new Routes(
{
    From:"DTW",
    To:"ATL",
    Distance:958.2,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DTW",
    To:"ATL",
    Distance:958.2,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"DTW",
    To:"ATL",
    Distance:958.2,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"ATL",
    Distance:958.2,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"ATL",
    Distance:958.2,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"ATL",
    Distance:958.2,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"DTW",
    To:"ATW",
    Distance:475.325,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"AUS",
    Distance:1848.53,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"AVL",
    Distance:756.746,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"AVP",
    Distance:639.909,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"AZO",
    Distance:181.057,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"BDL",
    Distance:880.619,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"BGM",
    Distance:607.096,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"BGR",
    Distance:1204.59,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"BHM",
    Distance:1006.76,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"BMI",
    Distance:502.724,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"BNA",
    Distance:734.968,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"BNA",
    Distance:734.968,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"BOS",
    Distance:1014.99,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"BOS",
    Distance:1014.99,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DTW",
    To:"BTV",
    Distance:861.6,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"BUF",
    Distance:386.9,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"BWI",
    Distance:656.739,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DTW",
    To:"BWI",
    Distance:656.739,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"BWI",
    Distance:656.739,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"CAE",
    Distance:940.432,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"CAK",
    Distance:214.609,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"CDG",
    Distance:6359.06,
    Airport:"Air France"
}),
new Routes(
{
    From:"DTW",
    To:"CDG",
    Distance:6359.06,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"DTW",
    To:"CDG",
    Distance:6359.06,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"CHA",
    Distance:814.032,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"CHS",
    Distance:1075.79,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"CID",
    Distance:690.763,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"CIU",
    Distance:457.796,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"CLE",
    Distance:153.152,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"CLT",
    Distance:805.7,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"CLT",
    Distance:805.7,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"CLT",
    Distance:805.7,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DTW",
    To:"CMH",
    Distance:249.254,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"CRW",
    Distance:452.231,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"CUN",
    Distance:2377.6,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"DTW",
    To:"CUN",
    Distance:2377.6,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"CUN",
    Distance:2377.6,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"CVG",
    Distance:368.837,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"CWA",
    Distance:581.798,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"DAY",
    Distance:266.929,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"DCA",
    Distance:651.251,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"DCA",
    Distance:651.251,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"DCA",
    Distance:651.251,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DTW",
    To:"DEN",
    Distance:1802.31,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"DEN",
    Distance:1802.31,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"DEN",
    Distance:1802.31,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"DEN",
    Distance:1802.31,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"DEN",
    Distance:1802.31,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"DFW",
    Distance:1586.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"DFW",
    Distance:1586.42,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"DFW",
    Distance:1586.42,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"DFW",
    Distance:1586.42,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DTW",
    To:"DSM",
    Distance:856.424,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"ELM",
    Distance:532.302,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"ERI",
    Distance:262.32,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"ESC",
    Distance:491.769,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"EVV",
    Distance:584.478,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"EWR",
    Distance:783.477,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"EWR",
    Distance:783.477,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"FLL",
    Distance:1818.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"FLL",
    Distance:1818.3,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"FRA",
    Distance:6678,
    Airport:"Air France"
}),
new Routes(
{
    From:"DTW",
    To:"FRA",
    Distance:6678,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"FRA",
    Distance:6678,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"FRA",
    Distance:6678,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DTW",
    To:"FRA",
    Distance:6678,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"FWA",
    Distance:205.62,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"GCM",
    Distance:2555.48,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"GRB",
    Distance:461.41,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"GRR",
    Distance:192.626,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"GRU",
    Distance:8223.49,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"GRU",
    Distance:8223.49,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"GSO",
    Distance:740.81,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"GSP",
    Distance:819.536,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"HPN",
    Distance:811.168,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"HSV",
    Distance:893.298,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"IAD",
    Distance:616.29,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"IAD",
    Distance:616.29,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"IAH",
    Distance:1730.88,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"IAH",
    Distance:1730.88,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"IAH",
    Distance:1730.88,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"ICN",
    Distance:10654.5,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"ILG",
    Distance:708.676,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"IND",
    Distance:371.372,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"ITH",
    Distance:567.286,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"JAX",
    Distance:1311.46,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"JFK",
    Distance:816.722,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"LAN",
    Distance:119.161,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"LAS",
    Distance:2808.04,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"LAS",
    Distance:2808.04,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"LAS",
    Distance:2808.04,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"LAX",
    Distance:3178.04,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DTW",
    To:"LAX",
    Distance:3178.04,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"LAX",
    Distance:3178.04,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"LEX",
    Distance:476.382,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"LGA",
    Distance:805.132,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"LGA",
    Distance:805.132,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"LGA",
    Distance:805.132,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"LGA",
    Distance:805.132,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DTW",
    To:"LHR",
    Distance:6044.19,
    Airport:"Air France"
}),
new Routes(
{
    From:"DTW",
    To:"LHR",
    Distance:6044.19,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"LHR",
    Distance:6044.19,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"LHR",
    Distance:6044.19,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"DTW",
    To:"LIT",
    Distance:1133.95,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MBJ",
    Distance:2685.97,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MBS",
    Distance:158.307,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MCI",
    Distance:1009.36,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MCO",
    Distance:1543.65,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MCO",
    Distance:1543.65,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"MDT",
    Distance:595.07,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MDW",
    Distance:366.551,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"DTW",
    To:"MDW",
    Distance:366.551,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MDW",
    Distance:366.551,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"MEM",
    Distance:982.478,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MEX",
    Distance:2932.78,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"DTW",
    To:"MEX",
    Distance:2932.78,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MHT",
    Distance:978.352,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MIA",
    Distance:1847.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"MIA",
    Distance:1847.08,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MIA",
    Distance:1847.08,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DTW",
    To:"MKE",
    Distance:380.797,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MLI",
    Distance:598.619,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MQT",
    Distance:561.577,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MSN",
    Distance:499.836,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MSP",
    Distance:848.24,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MSY",
    Distance:1492.28,
    Airport:"Air France"
}),
new Routes(
{
    From:"DTW",
    To:"MSY",
    Distance:1492.28,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MSY",
    Distance:1492.28,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"MSY",
    Distance:1492.28,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"MTY",
    Distance:2383.39,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"DTW",
    To:"MTY",
    Distance:2383.39,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MYR",
    Distance:1024.67,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"MYR",
    Distance:1024.67,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"NAS",
    Distance:1984.55,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"NGO",
    Distance:10520.8,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"NRT",
    Distance:10272.1,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"OKC",
    Distance:1445.98,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"OMA",
    Distance:1044.17,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"ORD",
    Distance:376.393,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"ORD",
    Distance:376.393,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"ORD",
    Distance:376.393,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DTW",
    To:"ORD",
    Distance:376.393,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"ORF",
    Distance:851.254,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"PBI",
    Distance:1752.05,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"PDX",
    Distance:3134.91,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"PDX",
    Distance:3134.91,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"PEK",
    Distance:10646.7,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"PEK",
    Distance:10646.7,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"PEK",
    Distance:10646.7,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"PHL",
    Distance:728.048,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"PHL",
    Distance:728.048,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"PHL",
    Distance:728.048,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DTW",
    To:"PHX",
    Distance:2683.95,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"PHX",
    Distance:2683.95,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"PHX",
    Distance:2683.95,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"PHX",
    Distance:2683.95,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DTW",
    To:"PIA",
    Distance:555.657,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"PIT",
    Distance:323.173,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"PLN",
    Distance:390.924,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"PUJ",
    Distance:2986.1,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"PVD",
    Distance:987.131,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"PVG",
    Distance:11461.8,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"PVG",
    Distance:11461.8,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"PVG",
    Distance:11461.8,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"PWM",
    Distance:1072.75,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"RDU",
    Distance:806.941,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"RIC",
    Distance:733.93,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"ROA",
    Distance:615.205,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"ROC",
    Distance:475.208,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"RSW",
    Distance:1749.19,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"RSW",
    Distance:1749.19,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"SAN",
    Distance:3142.16,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"SAN",
    Distance:3142.16,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"SAT",
    Distance:1954.35,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"SAV",
    Distance:1137.36,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"SBN",
    Distance:251.374,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"SCE",
    Distance:482.525,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"SDF",
    Distance:492.503,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"SEA",
    Distance:3093.03,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"SFO",
    Distance:3337.34,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"SJU",
    Distance:3110.37,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"SLC",
    Distance:2377.87,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"STL",
    Distance:707.106,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"STL",
    Distance:707.106,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"SWF",
    Distance:769.598,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"SYR",
    Distance:600.754,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"TPA",
    Distance:1584.81,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"TPA",
    Distance:1584.81,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"TTN",
    Distance:745.359,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"TUL",
    Distance:1268.31,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"TVC",
    Distance:333.77,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"TYS",
    Distance:713.953,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"XNA",
    Distance:1149.38,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"YOW",
    Distance:706.901,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"YUL",
    Distance:851.065,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"YUL",
    Distance:851.065,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"YUL",
    Distance:851.065,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"DTW",
    To:"YUL",
    Distance:851.065,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DTW",
    To:"YYZ",
    Distance:343.975,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DTW",
    To:"YYZ",
    Distance:343.975,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DTW",
    To:"YYZ",
    Distance:343.975,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DTW",
    To:"YYZ",
    Distance:343.975,
    Airport:"WestJet"
}),
new Routes(
{
    From:"DUB",
    To:"ABZ",
    Distance:492.891,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"ACE",
    Distance:2786.49,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"ACE",
    Distance:2786.49,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"ADB",
    Distance:3044.53,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"AGP",
    Distance:1867.16,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"AGP",
    Distance:1867.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"AHO",
    Distance:1792.85,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"ALC",
    Distance:1739.16,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"ALC",
    Distance:1739.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"AMS",
    Distance:750.16,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"ARN",
    Distance:1624.75,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"ARN",
    Distance:1624.75,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"DUB",
    To:"ATH",
    Distance:2875.7,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"ATL",
    Distance:6322.9,
    Airport:"Air France"
}),
new Routes(
{
    From:"DUB",
    To:"ATL",
    Distance:6322.9,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DUB",
    To:"ATL",
    Distance:6322.9,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DUB",
    To:"AUH",
    Distance:5940.79,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"AUH",
    Distance:5940.79,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"DUB",
    To:"BCN",
    Distance:1485.22,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"BCN",
    Distance:1485.22,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"BGY",
    Distance:1433.51,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"BHX",
    Distance:321.507,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"BHX",
    Distance:321.507,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"BIO",
    Distance:1152.03,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"BIQ",
    Distance:1160.12,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"BLK",
    Distance:217.404,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"BLQ",
    Distance:1610.83,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"BLQ",
    Distance:1610.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"BOD",
    Distance:1036.69,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"BOH",
    Distance:421.422,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"BOJ",
    Distance:2754.2,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"BOS",
    Distance:4802.86,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"BOS",
    Distance:4802.86,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DUB",
    To:"BRE",
    Distance:1001.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"BRI",
    Distance:2193.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"BRS",
    Distance:330.719,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"BRS",
    Distance:330.719,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"BRU",
    Distance:784.316,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"BSL",
    Distance:1168.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"BTS",
    Distance:1741.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"BUD",
    Distance:1914.11,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"BUD",
    Distance:1914.11,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"BVA",
    Distance:728.734,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"BZG",
    Distance:1605.5,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"CCF",
    Distance:1297.84,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"CDG",
    Distance:784.972,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"CDG",
    Distance:784.972,
    Airport:"Air France"
}),
new Routes(
{
    From:"DUB",
    To:"CDG",
    Distance:784.972,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"DUB",
    To:"CFN",
    Distance:225.1,
    Airport:"Flybe"
}),
new Routes(
{
    From:"DUB",
    To:"CFU",
    Distance:2500.82,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"CGN",
    Distance:956.686,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUB",
    To:"CHQ",
    Distance:3086.99,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"CIA",
    Distance:1904.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"CIY",
    Distance:2433.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"CLT",
    Distance:5973.23,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DUB",
    To:"CLT",
    Distance:5973.23,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DUB",
    To:"CPH",
    Distance:1241.54,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"CPH",
    Distance:1241.54,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"DUB",
    To:"CPH",
    Distance:1241.54,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"DUB",
    To:"CRL",
    Distance:804.488,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"CTA",
    Distance:2414.16,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"CWL",
    Distance:300.111,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"DBV",
    Distance:2171.99,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"DUS",
    Distance:915.109,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"DUS",
    Distance:915.109,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUB",
    To:"DXB",
    Distance:5918.53,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DUB",
    To:"DXB",
    Distance:5918.53,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DUB",
    To:"EDI",
    Distance:337.2,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"EDI",
    Distance:337.2,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"EIN",
    Distance:818.203,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"EMA",
    Distance:336.141,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"EWR",
    Distance:5124.46,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUB",
    To:"EWR",
    Distance:5124.46,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DUB",
    To:"EXT",
    Distance:356.812,
    Airport:"Flybe"
}),
new Routes(
{
    From:"DUB",
    To:"FAO",
    Distance:1829.06,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"FAO",
    Distance:1829.06,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"FCO",
    Distance:1885.86,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"FMM",
    Distance:1305.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"FRA",
    Distance:1085.46,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"FRA",
    Distance:1085.46,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUB",
    To:"FUE",
    Distance:2844.94,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"FUE",
    Distance:2844.94,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"GDN",
    Distance:1615.76,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"GLA",
    Distance:296.998,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"GRO",
    Distance:1445.94,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"GVA",
    Distance:1191.31,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"HAJ",
    Distance:1072.2,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"HAM",
    Distance:1072.6,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"HEL",
    Distance:2023.29,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"DUB",
    To:"HHN",
    Distance:1007.77,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"IAD",
    Distance:5463.9,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"IAD",
    Distance:5463.9,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DUB",
    To:"IBZ",
    Distance:1719.15,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"IBZ",
    Distance:1719.15,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"IOM",
    Distance:130.887,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"IST",
    Distance:2949.17,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DUB",
    To:"JER",
    Distance:547.238,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"JFK",
    Distance:5103.03,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"JFK",
    Distance:5103.03,
    Airport:"Air France"
}),
new Routes(
{
    From:"DUB",
    To:"JFK",
    Distance:5103.03,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DUB",
    To:"JFK",
    Distance:5103.03,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DUB",
    To:"JFK",
    Distance:5103.03,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DUB",
    To:"JFK",
    Distance:5103.03,
    Airport:"Finnair"
}),
new Routes(
{
    From:"DUB",
    To:"JFK",
    Distance:5103.03,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DUB",
    To:"JFK",
    Distance:5103.03,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DUB",
    To:"JFK",
    Distance:5103.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DUB",
    To:"KIR",
    Distance:258.555,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"KIV",
    Distance:2579.26,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"DUB",
    To:"KRK",
    Distance:1820.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"KTW",
    Distance:1758.29,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"KUN",
    Distance:1966.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"LBA",
    Distance:307.782,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"LCY",
    Distance:478.338,
    Airport:"Air France"
}),
new Routes(
{
    From:"DUB",
    To:"LCY",
    Distance:478.338,
    Airport:"CityJet"
}),
new Routes(
{
    From:"DUB",
    To:"LEI",
    Distance:1867.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"LGW",
    Distance:484.452,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"LGW",
    Distance:484.452,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"LHR",
    Distance:448.892,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"LHR",
    Distance:448.892,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DUB",
    To:"LHR",
    Distance:448.892,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DUB",
    To:"LIN",
    Distance:1426.77,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"LIS",
    Distance:1642.48,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"LIS",
    Distance:1642.48,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"LPA",
    Distance:2931.21,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"LPA",
    Distance:2931.21,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"LPL",
    Distance:227.068,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"LRH",
    Distance:883.277,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"LTN",
    Distance:433.533,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"LUX",
    Distance:959.35,
    Airport:"Luxair"
}),
new Routes(
{
    From:"DUB",
    To:"LYS",
    Distance:1181.84,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"MAD",
    Distance:1451.8,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"MAD",
    Distance:1451.8,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DUB",
    To:"MAD",
    Distance:1451.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"MAN",
    Distance:265.015,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"MAN",
    Distance:265.015,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"MCO",
    Distance:6541.44,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"MJV",
    Distance:1789.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"MLA",
    Distance:2532.01,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"MRS",
    Distance:1393.11,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"MUC",
    Distance:1381.29,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"MUC",
    Distance:1381.29,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUB",
    To:"MXP",
    Distance:1381.74,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"NAP",
    Distance:2074.3,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"NCE",
    Distance:1466.34,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"NCE",
    Distance:1466.34,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"NCL",
    Distance:347.538,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"NCL",
    Distance:347.538,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"NTE",
    Distance:771.201,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"OPO",
    Distance:1365.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"ORD",
    Distance:5895.32,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"ORD",
    Distance:5895.32,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DUB",
    To:"ORD",
    Distance:5895.32,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DUB",
    To:"ORD",
    Distance:5895.32,
    Airport:"Finnair"
}),
new Routes(
{
    From:"DUB",
    To:"ORD",
    Distance:5895.32,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DUB",
    To:"ORD",
    Distance:5895.32,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DUB",
    To:"ORD",
    Distance:5895.32,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DUB",
    To:"OSL",
    Distance:1291.83,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"DUB",
    To:"OSL",
    Distance:1291.83,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"DUB",
    To:"OTP",
    Distance:2531,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"OTP",
    Distance:2531,
    Airport:"Tarom"
}),
new Routes(
{
    From:"DUB",
    To:"PGF",
    Distance:1365.57,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"PHL",
    Distance:5252.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DUB",
    To:"PHL",
    Distance:5252.87,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DUB",
    To:"PIK",
    Distance:256.392,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"PMI",
    Distance:1685.76,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"PMI",
    Distance:1685.76,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"POZ",
    Distance:1545.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"PRG",
    Distance:1454.75,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"PRG",
    Distance:1454.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"PSA",
    Distance:1628.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"PUY",
    Distance:1738.55,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"RAK",
    Distance:2429.79,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"RDZ",
    Distance:1187,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"REU",
    Distance:1473.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"RIX",
    Distance:1942.61,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"RYG",
    Distance:1235.68,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"RZE",
    Distance:1967.63,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"SCQ",
    Distance:1180.95,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"SDR",
    Distance:1125.74,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"SEN",
    Distance:514.183,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"SFO",
    Distance:8183.01,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"SOU",
    Distance:433.068,
    Airport:"Flybe"
}),
new Routes(
{
    From:"DUB",
    To:"STN",
    Distance:470.668,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"STR",
    Distance:1200.49,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"SVQ",
    Distance:1779.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"SXF",
    Distance:1328.27,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"SXF",
    Distance:1328.27,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"SZZ",
    Distance:1395.21,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"TFS",
    Distance:2945.32,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"TFS",
    Distance:2945.32,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"TLS",
    Distance:1223.79,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"TSF",
    Distance:1581.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"TUF",
    Distance:829.358,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"VCE",
    Distance:1600.64,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"VIE",
    Distance:1702.45,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"VLC",
    Distance:1610.05,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"VNO",
    Distance:2048.07,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"VRN",
    Distance:1522.52,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"WAW",
    Distance:1825.49,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"WMI",
    Distance:1796.7,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"WRO",
    Distance:1589.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"YYZ",
    Distance:5260.98,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"YYZ",
    Distance:5260.98,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"DUB",
    To:"YYZ",
    Distance:5260.98,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"DUB",
    To:"ZAD",
    Distance:1881.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"DUB",
    To:"ZRH",
    Distance:1237.32,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUB",
    To:"ZRH",
    Distance:1237.32,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"DUD",
    To:"AKL",
    Distance:1062.65,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"DUD",
    To:"AKL",
    Distance:1062.65,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"DUD",
    To:"CHC",
    Distance:327.915,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"DUD",
    To:"WLG",
    Distance:631.59,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"DUJ",
    To:"CLE",
    Distance:247.893,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DUJ",
    To:"FKL",
    Distance:83.3684,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DUR",
    To:"BFN",
    Distance:460.12,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DUR",
    To:"CPT",
    Distance:1245.64,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DUR",
    To:"CPT",
    Distance:1245.64,
    Airport:"Comair"
}),
new Routes(
{
    From:"DUR",
    To:"CPT",
    Distance:1245.64,
    Airport:"Mango"
}),
new Routes(
{
    From:"DUR",
    To:"CPT",
    Distance:1245.64,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DUR",
    To:"DXB",
    Distance:6669.28,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DUR",
    To:"DXB",
    Distance:6669.28,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DUR",
    To:"ELS",
    Distance:451.543,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DUR",
    To:"GRJ",
    Distance:924.086,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DUR",
    To:"HLA",
    Distance:537.714,
    Airport:"Comair"
}),
new Routes(
{
    From:"DUR",
    To:"HRE",
    Distance:1338.67,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DUR",
    To:"JNB",
    Distance:501.837,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DUR",
    To:"JNB",
    Distance:501.837,
    Airport:"Comair"
}),
new Routes(
{
    From:"DUR",
    To:"JNB",
    Distance:501.837,
    Airport:"Mango"
}),
new Routes(
{
    From:"DUR",
    To:"JNB",
    Distance:501.837,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DUR",
    To:"LUN",
    Distance:1647.71,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DUR",
    To:"MPM",
    Distance:477.597,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DUR",
    To:"MQP",
    Distance:510.267,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DUR",
    To:"MRU",
    Distance:2882.26,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"DUR",
    To:"PLZ",
    Distance:672.364,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DUR",
    To:"PLZ",
    Distance:672.364,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DUS",
    To:"ACE",
    Distance:3006.73,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"ACE",
    Distance:3006.73,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"ADB",
    Distance:2149.42,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"ADB",
    Distance:2149.42,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"DUS",
    To:"AGA",
    Distance:2686.03,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"AGP",
    Distance:1853.46,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"AGP",
    Distance:1853.46,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"ALC",
    Distance:1555.69,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"AMS",
    Distance:178.348,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"DUS",
    To:"AMS",
    Distance:178.348,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"AOI",
    Distance:985.931,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"ARN",
    Distance:1162.41,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"ARN",
    Distance:1162.41,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"ARN",
    Distance:1162.41,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"DUS",
    To:"ASR",
    Distance:2626.72,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"ATH",
    Distance:2003.42,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"ATH",
    Distance:2003.42,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"ATL",
    Distance:7236.38,
    Airport:"Air France"
}),
new Routes(
{
    From:"DUS",
    To:"ATL",
    Distance:7236.38,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DUS",
    To:"ATL",
    Distance:7236.38,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"AUH",
    Distance:5026.29,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"AUH",
    Distance:5026.29,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"AUH",
    Distance:5026.29,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"DUS",
    To:"AYT",
    Distance:2478.7,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"AYT",
    Distance:2478.7,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"AYT",
    Distance:2478.7,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"AYT",
    Distance:2478.7,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"DUS",
    To:"AYT",
    Distance:2478.7,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DUS",
    To:"BCN",
    Distance:1167.41,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"BCN",
    Distance:1167.41,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"BCN",
    Distance:1167.41,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"BCN",
    Distance:1167.41,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"BEG",
    Distance:1234.18,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"BEG",
    Distance:1234.18,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"DUS",
    To:"BHX",
    Distance:598.364,
    Airport:"Flybe"
}),
new Routes(
{
    From:"DUS",
    To:"BHX",
    Distance:598.364,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"BIA",
    Distance:992.972,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"BIO",
    Distance:1147.63,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"BLL",
    Distance:519.349,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DUS",
    To:"BRI",
    Distance:1363.03,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"BSL",
    Distance:415.031,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"BUD",
    Distance:999.012,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"CAG",
    Distance:1350.3,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"CAG",
    Distance:1350.3,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"CAG",
    Distance:1350.3,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"DUS",
    To:"CDG",
    Distance:392.768,
    Airport:"Air France"
}),
new Routes(
{
    From:"DUS",
    To:"CDG",
    Distance:392.768,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"DUS",
    To:"CDG",
    Distance:392.768,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"CFU",
    Distance:1650.22,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"CFU",
    Distance:1650.22,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"CFU",
    Distance:1650.22,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DUS",
    To:"CHQ",
    Distance:2233.51,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"CLY",
    Distance:985.908,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"CPH",
    Distance:618.996,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"CPH",
    Distance:618.996,
    Airport:"Finnair"
}),
new Routes(
{
    From:"DUS",
    To:"CPH",
    Distance:618.996,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"CPH",
    Distance:618.996,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"DUS",
    To:"CTA",
    Distance:1670.01,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"CTA",
    Distance:1670.01,
    Airport:"Air One"
}),
new Routes(
{
    From:"DUS",
    To:"CTA",
    Distance:1670.01,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"DUS",
    To:"CTA",
    Distance:1670.01,
    Airport:"Finnair"
}),
new Routes(
{
    From:"DUS",
    To:"CTA",
    Distance:1670.01,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"CTA",
    Distance:1670.01,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"DUS",
    To:"CUN",
    Distance:8443.69,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"CUR",
    Distance:7962.8,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"CWL",
    Distance:701.778,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"DBV",
    Distance:1302.64,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"DBV",
    Distance:1302.64,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"DBV",
    Distance:1302.64,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"DJE",
    Distance:1963.26,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"DJE",
    Distance:1963.26,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"DJE",
    Distance:1963.26,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DUS",
    To:"DLM",
    Distance:2376.64,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"DLM",
    Distance:2376.64,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DUS",
    To:"DME",
    Distance:2098.16,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"DME",
    Distance:2098.16,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"DRS",
    Distance:487.761,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"DRS",
    Distance:487.761,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"DUB",
    Distance:915.109,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"DUS",
    To:"DUB",
    Distance:915.109,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"DXB",
    Distance:5005.08,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DUS",
    To:"DXB",
    Distance:5005.08,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DUS",
    To:"EBL",
    Distance:3373.24,
    Airport:"Germania"
}),
new Routes(
{
    From:"DUS",
    To:"ESB",
    Distance:2365.61,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"EWR",
    Distance:6038.44,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"EWR",
    Distance:6038.44,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"EXT",
    Distance:714.32,
    Airport:"Flybe"
}),
new Routes(
{
    From:"DUS",
    To:"FAO",
    Distance:1967.22,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"FAO",
    Distance:1967.22,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DUS",
    To:"FCO",
    Distance:1134.21,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"FCO",
    Distance:1134.21,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"FCO",
    Distance:1134.21,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"DUS",
    To:"FDH",
    Distance:448.45,
    Airport:"Intersky"
}),
new Routes(
{
    From:"DUS",
    To:"FLR",
    Distance:895.488,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"FLR",
    Distance:895.488,
    Airport:"Finnair"
}),
new Routes(
{
    From:"DUS",
    To:"FLR",
    Distance:895.488,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"DUS",
    To:"FNC",
    Distance:2814.25,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"FNC",
    Distance:2814.25,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"FRA",
    Distance:188.148,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"FRA",
    Distance:188.148,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"FUE",
    Distance:3066.91,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"FUE",
    Distance:3066.91,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"FUE",
    Distance:3066.91,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DUS",
    To:"GCI",
    Distance:695.259,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"GLA",
    Distance:896.254,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"GOT",
    Distance:792.556,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"GPA",
    Distance:1857.09,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DUS",
    To:"GRZ",
    Distance:790.642,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"GRZ",
    Distance:790.642,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"GVA",
    Distance:563.748,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"GWT",
    Distance:416.391,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"HAM",
    Distance:339.627,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"HAM",
    Distance:339.627,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"HDF",
    Distance:575.672,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"HEL",
    Distance:1507.8,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"HEL",
    Distance:1507.8,
    Airport:"Finnair"
}),
new Routes(
{
    From:"DUS",
    To:"HER",
    Distance:2302.81,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"HER",
    Distance:2302.81,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"HER",
    Distance:2302.81,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"HER",
    Distance:2302.81,
    Airport:"Germania"
}),
new Routes(
{
    From:"DUS",
    To:"HER",
    Distance:2302.81,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"HER",
    Distance:2302.81,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DUS",
    To:"HRG",
    Distance:3510.76,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"HRG",
    Distance:3510.76,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"HRG",
    Distance:3510.76,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DUS",
    To:"HRG",
    Distance:3510.76,
    Airport:"Yangon Airways"
}),
new Routes(
{
    From:"DUS",
    To:"IBZ",
    Distance:1443.15,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"IBZ",
    Distance:1443.15,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"IBZ",
    Distance:1443.15,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"IKA",
    Distance:3921.9,
    Airport:"Mahan Air"
}),
new Routes(
{
    From:"DUS",
    To:"IST",
    Distance:2037.05,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"ISU",
    Distance:3514.17,
    Airport:"Germania"
}),
new Routes(
{
    From:"DUS",
    To:"JER",
    Distance:677.45,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"JFK",
    Distance:6017.23,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"JFK",
    Distance:6017.23,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"KGS",
    Distance:2273.83,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"KGS",
    Distance:2273.83,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"KGS",
    Distance:2273.83,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DUS",
    To:"KLX",
    Distance:1986.88,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"KTW",
    Distance:867.545,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"KVA",
    Distance:1787.69,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"LAX",
    Distance:9133.12,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"LAX",
    Distance:9133.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"LBA",
    Distance:636.901,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"DUS",
    To:"LCA",
    Distance:2815.98,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"LCY",
    Distance:466.072,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DUS",
    To:"LED",
    Distance:1740.71,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"LED",
    Distance:1740.71,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"LED",
    Distance:1740.71,
    Airport:"Rossiya-Russian Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"LEJ",
    Distance:380.371,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"LGW",
    Distance:484.61,
    Airport:"easyJet"
}),
new Routes(
{
    From:"DUS",
    To:"LHR",
    Distance:501.846,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"LHR",
    Distance:501.846,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DUS",
    To:"LHR",
    Distance:501.846,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"LIS",
    Distance:1861.72,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"DUS",
    To:"LNZ",
    Distance:631.682,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"LNZ",
    Distance:631.682,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"LPA",
    Distance:3189.79,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"LPA",
    Distance:3189.79,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"LPA",
    Distance:3189.79,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DUS",
    To:"LPA",
    Distance:3189.79,
    Airport:"Yangon Airways"
}),
new Routes(
{
    From:"DUS",
    To:"LUX",
    Distance:189.034,
    Airport:"China United Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"LUX",
    Distance:189.034,
    Airport:"Luxair"
}),
new Routes(
{
    From:"DUS",
    To:"LYS",
    Distance:630.739,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"MAD",
    Distance:1439.39,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"MAD",
    Distance:1439.39,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"MAD",
    Distance:1439.39,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"MAH",
    Distance:1285.78,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"MAN",
    Distance:655.433,
    Airport:"Flybe"
}),
new Routes(
{
    From:"DUS",
    To:"MAN",
    Distance:655.433,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"MIA",
    Distance:7603.56,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"MIA",
    Distance:7603.56,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"MJT",
    Distance:2053.68,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"MLA",
    Distance:1822.46,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"DUS",
    To:"MLA",
    Distance:1822.46,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"MPL",
    Distance:883.047,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"MUC",
    Distance:485.82,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"MUC",
    Distance:485.82,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"MXP",
    Distance:645.577,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"MXP",
    Distance:645.577,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"MXP",
    Distance:645.577,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"DUS",
    To:"NAP",
    Distance:1292.56,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"NAP",
    Distance:1292.56,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"NAP",
    Distance:1292.56,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"DUS",
    To:"NBE",
    Distance:1716.69,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"NBE",
    Distance:1716.69,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"DUS",
    To:"NBE",
    Distance:1716.69,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DUS",
    To:"NCE",
    Distance:849.2,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"NCE",
    Distance:849.2,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"NCL",
    Distance:700.405,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"NQY",
    Distance:829.948,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"NRT",
    Distance:9331.04,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"DUS",
    To:"NRT",
    Distance:9331.04,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"NTE",
    Distance:761.923,
    Airport:"Air France"
}),
new Routes(
{
    From:"DUS",
    To:"NTE",
    Distance:761.923,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"DUS",
    To:"NUE",
    Distance:364.006,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"NUE",
    Distance:364.006,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"OLB",
    Distance:1174.49,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"OLB",
    Distance:1174.49,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"OLB",
    Distance:1174.49,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"DUS",
    To:"ONQ",
    Distance:2209.58,
    Airport:"Germania"
}),
new Routes(
{
    From:"DUS",
    To:"ORD",
    Distance:6788.41,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"ORD",
    Distance:6788.41,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"ORD",
    Distance:6788.41,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DUS",
    To:"ORD",
    Distance:6788.41,
    Airport:"Finnair"
}),
new Routes(
{
    From:"DUS",
    To:"ORD",
    Distance:6788.41,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"ORD",
    Distance:6788.41,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"ORD",
    Distance:6788.41,
    Airport:"US Airways"
}),
new Routes(
{
    From:"DUS",
    To:"ORD",
    Distance:6788.41,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"OSL",
    Distance:1026.06,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"OSL",
    Distance:1026.06,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"DUS",
    To:"OTP",
    Distance:1615.89,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"PDL",
    Distance:2947.35,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"PEK",
    Distance:7796.1,
    Airport:"Air China"
}),
new Routes(
{
    From:"DUS",
    To:"PEK",
    Distance:7796.1,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"PMI",
    Distance:1341.96,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"PMI",
    Distance:1341.96,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"PMI",
    Distance:1341.96,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"PMI",
    Distance:1341.96,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DUS",
    To:"PMI",
    Distance:1341.96,
    Airport:"Yangon Airways"
}),
new Routes(
{
    From:"DUS",
    To:"POP",
    Distance:7435.67,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"POZ",
    Distance:701.645,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"PRG",
    Distance:543.821,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"PRG",
    Distance:543.821,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"PRG",
    Distance:543.821,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"DUS",
    To:"PRN",
    Distance:1449.17,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"PUJ",
    Distance:7381.58,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"PVK",
    Distance:1753.6,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"RHO",
    Distance:2362.97,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"RHO",
    Distance:2362.97,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"RHO",
    Distance:2362.97,
    Airport:"Germania"
}),
new Routes(
{
    From:"DUS",
    To:"RHO",
    Distance:2362.97,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DUS",
    To:"RIX",
    Distance:1279.61,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"DUS",
    To:"RIX",
    Distance:1279.61,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"RMF",
    Distance:3704.79,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"RSW",
    Distance:7640.48,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"RSW",
    Distance:7640.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"SAW",
    Distance:2073.92,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"SAW",
    Distance:2073.92,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"SAW",
    Distance:2073.92,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"SKG",
    Distance:1726.63,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"SKG",
    Distance:1726.63,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"SKG",
    Distance:1726.63,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"SKG",
    Distance:1726.63,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"SMI",
    Distance:2186.42,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"SPC",
    Distance:3242.31,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"SPU",
    Distance:1119.31,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"SPU",
    Distance:1119.31,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"SPU",
    Distance:1119.31,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"STN",
    Distance:455.94,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"STR",
    Distance:338.131,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"SUF",
    Distance:1562.09,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"SVO",
    Distance:2068.03,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"SZG",
    Distance:594.35,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"SZG",
    Distance:594.35,
    Airport:"Finnair"
}),
new Routes(
{
    From:"DUS",
    To:"TFS",
    Distance:3237.21,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"TFS",
    Distance:3237.21,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"TFS",
    Distance:3237.21,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DUS",
    To:"TGD",
    Distance:1370.54,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"TLV",
    Distance:3135.29,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"TRN",
    Distance:680.167,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"TUN",
    Distance:1628.63,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DUS",
    To:"TXL",
    Distance:468.747,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"TXL",
    Distance:468.747,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"TXL",
    Distance:468.747,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"VCE",
    Distance:763.498,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"VCE",
    Distance:763.498,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"VCE",
    Distance:763.498,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"DUS",
    To:"VIE",
    Distance:787.824,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"VIE",
    Distance:787.824,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"VIE",
    Distance:787.824,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"VKO",
    Distance:2057.6,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"VLC",
    Distance:1427.3,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"VRA",
    Distance:7909.56,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"WAW",
    Distance:981.287,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"WAW",
    Distance:981.287,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"DUS",
    To:"WAW",
    Distance:981.287,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"WRO",
    Distance:704.855,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"XRY",
    Distance:1908.94,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"DUS",
    To:"XRY",
    Distance:1908.94,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"DUS",
    To:"ZAD",
    Distance:1023.23,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"DUS",
    To:"ZRH",
    Distance:444.4,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUS",
    To:"ZRH",
    Distance:444.4,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DUS",
    To:"ZRH",
    Distance:444.4,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"DUS",
    To:"ZTH",
    Distance:1868.99,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"DUT",
    To:"AKB",
    Distance:544.743,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"DUT",
    To:"IKO",
    Distance:186.254,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"DUT",
    To:"KQA",
    Distance:55.8859,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"DVO",
    To:"BCD",
    Distance:491.883,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"DVO",
    To:"CEB",
    Distance:398.404,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"DVO",
    To:"CEB",
    Distance:398.404,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"DVO",
    To:"CEB",
    Distance:398.404,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"DVO",
    To:"CGY",
    Distance:183.22,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"DVO",
    To:"DPL",
    Distance:302.883,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"DVO",
    To:"ILO",
    Distance:524.492,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"DVO",
    To:"MNL",
    Distance:963.787,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"DVO",
    To:"MNL",
    Distance:963.787,
    Airport:"LSM Airlines"
}),
new Routes(
{
    From:"DVO",
    To:"MNL",
    Distance:963.787,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"DVO",
    To:"PPS",
    Distance:811.402,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"DVO",
    To:"SIN",
    Distance:2484.26,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"DVO",
    To:"SIN",
    Distance:2484.26,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"DVO",
    To:"ZAM",
    Distance:396.411,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"DWC",
    To:"AMD",
    Distance:1789.73,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"AMM",
    Distance:2032.57,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"BAH",
    Distance:487.922,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"BAH",
    Distance:487.922,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"DWC",
    To:"BEY",
    Distance:2159.76,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"BUD",
    Distance:4049.19,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"DWC",
    To:"CEK",
    Distance:3459.82,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DWC",
    To:"CGP",
    Distance:3744.15,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"CMB",
    Distance:3268.06,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"DME",
    Distance:3708.04,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DWC",
    To:"DMM",
    Distance:573.569,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"DOH",
    Distance:365.462,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"DOH",
    Distance:365.462,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DWC",
    To:"DOK",
    Distance:3027.46,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"GOJ",
    Distance:3640.16,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DWC",
    To:"IEV",
    Distance:3569.84,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"JED",
    Distance:1660.72,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"KBL",
    Distance:1758.11,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"KIV",
    Distance:3399.21,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"KRT",
    Distance:2552.51,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"KTM",
    Distance:3033.26,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"KUF",
    Distance:3245.53,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"KUF",
    Distance:3245.53,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DWC",
    To:"KUF",
    Distance:3245.53,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DWC",
    To:"KUL",
    Distance:5549,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"DWC",
    To:"KWI",
    Distance:877.677,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"KWI",
    Distance:877.677,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"DWC",
    To:"KZN",
    Distance:3485.85,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"LED",
    Distance:4365.21,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DWC",
    To:"LHR",
    Distance:5537.82,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"DWC",
    To:"MCT",
    Distance:340.054,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"MLE",
    Distance:3002,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"MNL",
    Distance:6937.58,
    Airport:"Air Philippines"
}),
new Routes(
{
    From:"DWC",
    To:"MNL",
    Distance:6937.58,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"DWC",
    To:"MRV",
    Distance:2443.87,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DWC",
    To:"ODS",
    Distance:3260.58,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"OMS",
    Distance:3697.94,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DWC",
    To:"OTP",
    Distance:3432.81,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"DWC",
    To:"OVB",
    Distance:4069.55,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DWC",
    To:"PEE",
    Distance:3710.62,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DWC",
    To:"RUH",
    Distance:849.726,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"SOF",
    Distance:3527.98,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"DWC",
    To:"SVX",
    Distance:3609.03,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"SVX",
    Distance:3609.03,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DWC",
    To:"SVX",
    Distance:3609.03,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DWC",
    To:"TJM",
    Distance:3720.67,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DWC",
    To:"UFA",
    Distance:3337.23,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DWC",
    To:"VKO",
    Distance:3745.84,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DWD",
    To:"JED",
    Distance:621.205,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DWD",
    To:"RUH",
    Distance:237.68,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"ACC",
    Distance:6288.97,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"ADD",
    Distance:2518.96,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"ADD",
    Distance:2518.96,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"ADD",
    Distance:2518.96,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"ADE",
    Distance:1755.53,
    Airport:"Nasair"
}),
new Routes(
{
    From:"DXB",
    To:"ADE",
    Distance:1755.53,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"DXB",
    To:"ADL",
    Distance:11006.4,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"ADL",
    Distance:11006.4,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"AHB",
    Distance:1525.27,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"ALG",
    Distance:5068.25,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"DXB",
    To:"ALG",
    Distance:5068.25,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"AMD",
    Distance:1767.42,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"AMD",
    Distance:1767.42,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DXB",
    To:"AMM",
    Distance:2021.55,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"AMM",
    Distance:2021.55,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"AMM",
    Distance:2021.55,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"AMM",
    Distance:2021.55,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"DXB",
    To:"AMS",
    Distance:5168.64,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"DXB",
    To:"AMS",
    Distance:5168.64,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"AMS",
    Distance:5168.64,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"ARN",
    Distance:4785.12,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"ARN",
    Distance:4785.12,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"ASB",
    Distance:1443.86,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"ASB",
    Distance:1443.86,
    Airport:"Turkmenistan Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"ATH",
    Distance:3271.87,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"ATL",
    Distance:12209.4,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"DXB",
    To:"AWZ",
    Distance:935.316,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"DXB",
    To:"AZI",
    Distance:129.493,
    Airport:"VRG Linhas Aereas"
}),
new Routes(
{
    From:"DXB",
    To:"BAH",
    Distance:487.062,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"BAH",
    Distance:487.062,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"BAH",
    Distance:487.062,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"DXB",
    To:"BAH",
    Distance:487.062,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"BBO",
    Distance:1984.9,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"DXB",
    To:"BCN",
    Distance:5175.71,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"BDH",
    Distance:152.139,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"BEG",
    Distance:3816.47,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"BEY",
    Distance:2140.69,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"BEY",
    Distance:2140.69,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"BGW",
    Distance:1398.01,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"BGW",
    Distance:1398.01,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"BHX",
    Distance:5603.41,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"BHX",
    Distance:5603.41,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"BKK",
    Distance:4903.74,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"BKK",
    Distance:4903.74,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"BKK",
    Distance:4903.74,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"DXB",
    To:"BLR",
    Distance:2706.87,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"BND",
    Distance:240.795,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"DXB",
    To:"BND",
    Distance:240.795,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"BNE",
    Distance:11979.2,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"BNE",
    Distance:11979.2,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"BOM",
    Distance:1926.16,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DXB",
    To:"BOM",
    Distance:1926.16,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"BOM",
    Distance:1926.16,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"BOM",
    Distance:1926.16,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DXB",
    To:"BOS",
    Distance:10702.1,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"BOS",
    Distance:10702.1,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DXB",
    To:"BSR",
    Distance:958.533,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"BSR",
    Distance:958.533,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"BUZ",
    Distance:607.827,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"BWN",
    Distance:6721.4,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"CAI",
    Distance:2415.46,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"DXB",
    To:"CAI",
    Distance:2415.46,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"CAI",
    Distance:2415.46,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"CAN",
    Distance:5827.24,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"CAN",
    Distance:5827.24,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"CCJ",
    Distance:2675.44,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"DXB",
    To:"CCJ",
    Distance:2675.44,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DXB",
    To:"CCJ",
    Distance:2675.44,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"CCU",
    Distance:3365.8,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"CDG",
    Distance:5238.63,
    Airport:"Air France"
}),
new Routes(
{
    From:"DXB",
    To:"CDG",
    Distance:5238.63,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"DXB",
    To:"CDG",
    Distance:5238.63,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"CGK",
    Distance:6547.07,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"CGK",
    Distance:6547.07,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"DXB",
    To:"CGP",
    Distance:3713.53,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"CMB",
    Distance:3288.15,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"CMB",
    Distance:3288.15,
    Airport:"L"
}),
new Routes(
{
    From:"DXB",
    To:"CMB",
    Distance:3288.15,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"CMN",
    Distance:6080.5,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"COK",
    Distance:2781.44,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"DXB",
    To:"COK",
    Distance:2781.44,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"COK",
    Distance:2781.44,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"COK",
    Distance:2781.44,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DXB",
    To:"CPH",
    Distance:4818.39,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"CPH",
    Distance:4818.39,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"CPT",
    Distance:7643.57,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"CPT",
    Distance:7643.57,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DXB",
    To:"DAC",
    Distance:3536.93,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"DAC",
    Distance:3536.93,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"DAC",
    Distance:3536.93,
    Airport:"United Airways"
}),
new Routes(
{
    From:"DXB",
    To:"DAR",
    Distance:3977.67,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"DEL",
    Distance:2183.59,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DXB",
    To:"DEL",
    Distance:2183.59,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"DEL",
    Distance:2183.59,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"DEL",
    Distance:2183.59,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DXB",
    To:"DEL",
    Distance:2183.59,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"DXB",
    To:"DFW",
    Distance:12919.4,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"DFW",
    Distance:12919.4,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DXB",
    To:"DKR",
    Distance:7617.6,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"DME",
    Distance:3641.98,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"DMM",
    Distance:573.163,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"DMM",
    Distance:573.163,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"DMM",
    Distance:573.163,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"DMM",
    Distance:573.163,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"DOH",
    Distance:382.074,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"DOH",
    Distance:382.074,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"DOH",
    Distance:382.074,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"DXB",
    To:"DOH",
    Distance:382.074,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"DUB",
    Distance:5918.53,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"DUB",
    Distance:5918.53,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"DUR",
    Distance:6669.28,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"DUR",
    Distance:6669.28,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DXB",
    To:"DUS",
    Distance:5005.08,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"DUS",
    Distance:5005.08,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"DYU",
    Distance:1944.47,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"DYU",
    Distance:1944.47,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"DXB",
    To:"EBB",
    Distance:3731.34,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"EBL",
    Distance:1634.2,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"EBL",
    Distance:1634.2,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"ELQ",
    Distance:1166.01,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"EVN",
    Distance:1944.76,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"FCO",
    Distance:4342.81,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"FRA",
    Distance:4844.86,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"FRA",
    Distance:4844.86,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DXB",
    To:"FRA",
    Distance:4844.86,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"FRU",
    Distance:2635.42,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"GIG",
    Distance:11883.2,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"GLA",
    Distance:5840.56,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"GLA",
    Distance:5840.56,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"GOI",
    Distance:2212.77,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"DXB",
    To:"GRU",
    Distance:12216.6,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"GSM",
    Distance:209.083,
    Airport:"Georgian National Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"GSM",
    Distance:209.083,
    Airport:"Kish Air"
}),
new Routes(
{
    From:"DXB",
    To:"GVA",
    Distance:4919.43,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"GVA",
    Distance:4919.43,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"GYD",
    Distance:1762.26,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"GYD",
    Distance:1762.26,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"HAM",
    Distance:4884.22,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"HAM",
    Distance:4884.22,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"HAS",
    Distance:1383.69,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"HBE",
    Distance:2589.21,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"HGA",
    Distance:2116.77,
    Airport:"Daallo Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"HKG",
    Distance:5919.64,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"DXB",
    To:"HKG",
    Distance:5919.64,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"HKT",
    Distance:4927.19,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"HND",
    Distance:7934.59,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"HND",
    Distance:7934.59,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"HRK",
    Distance:3196.64,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"HYD",
    Distance:2540.35,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"HYD",
    Distance:2540.35,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"HYD",
    Distance:2540.35,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"IAD",
    Distance:11355.3,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"IAD",
    Distance:11355.3,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DXB",
    To:"IAD",
    Distance:11355.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"IAH",
    Distance:13124.8,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"IAH",
    Distance:13124.8,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DXB",
    To:"ICN",
    Distance:6728.88,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"ICN",
    Distance:6728.88,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"DXB",
    To:"IFN",
    Distance:900.486,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"DXB",
    To:"IKA",
    Distance:1199.87,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"IKA",
    Distance:1199.87,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"DXB",
    To:"IKA",
    Distance:1199.87,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"IKA",
    Distance:1199.87,
    Airport:"Mahan Air"
}),
new Routes(
{
    From:"DXB",
    To:"ISB",
    Distance:1949.01,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"ISB",
    Distance:1949.01,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"ISB",
    Distance:1949.01,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"DXB",
    To:"IST",
    Distance:3008.37,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"IST",
    Distance:3008.37,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"IST",
    Distance:3008.37,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"ISU",
    Distance:1495.63,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"IXE",
    Distance:2459.75,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"DXB",
    To:"IXE",
    Distance:2459.75,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"DXB",
    To:"JED",
    Distance:1699,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"JED",
    Distance:1699,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"JED",
    Distance:1699,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"DXB",
    To:"JED",
    Distance:1699,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"JED",
    Distance:1699,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"JFK",
    Distance:11001.5,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"JFK",
    Distance:11001.5,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DXB",
    To:"JIB",
    Distance:1992.4,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"JNB",
    Distance:6413.1,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"JNB",
    Distance:6413.1,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"DXB",
    To:"JUB",
    Distance:3399.38,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"KBL",
    Distance:1686.39,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"KBL",
    Distance:1686.39,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"KBL",
    Distance:1686.39,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"KBL",
    Distance:1686.39,
    Airport:"Kam Air"
}),
new Routes(
{
    From:"DXB",
    To:"KBL",
    Distance:1686.39,
    Airport:"Safi Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"KBP",
    Distance:3488.66,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"KBP",
    Distance:3488.66,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"KDH",
    Distance:1238.02,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"KGL",
    Distance:4067.24,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"DXB",
    To:"KHI",
    Distance:1188.27,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"KHI",
    Distance:1188.27,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"KHI",
    Distance:1188.27,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"KHI",
    Distance:1188.27,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"DXB",
    To:"KIH",
    Distance:198.044,
    Airport:"Kish Air"
}),
new Routes(
{
    From:"DXB",
    To:"KIX",
    Distance:7577.03,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"KIX",
    Distance:7577.03,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"KJA",
    Distance:4547.72,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"KMG",
    Distance:4744.12,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"KRR",
    Distance:2635.86,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"KRR",
    Distance:2635.86,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"KRT",
    Distance:2603.24,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"KRT",
    Distance:2603.24,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"KRT",
    Distance:2603.24,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"DXB",
    To:"KTM",
    Distance:2990.54,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"KUF",
    Distance:3170.79,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"KUL",
    Distance:5549.18,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"KUL",
    Distance:5549.18,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"KUL",
    Distance:5549.18,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"DXB",
    To:"KWI",
    Distance:853.978,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"KWI",
    Distance:853.978,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"KWI",
    Distance:853.978,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"DXB",
    To:"KWI",
    Distance:853.978,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"DXB",
    To:"LAD",
    Distance:5931.49,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"LAD",
    Distance:5931.49,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"LAX",
    Distance:13400.1,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"LAX",
    Distance:13400.1,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DXB",
    To:"LCA",
    Distance:2342.6,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"LED",
    Distance:4300.61,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"LGW",
    Distance:5473.13,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"LGW",
    Distance:5473.13,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"LHE",
    Distance:1985.19,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"LHE",
    Distance:1985.19,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"LHE",
    Distance:1985.19,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"DXB",
    To:"LHR",
    Distance:5498.03,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"LHR",
    Distance:5498.03,
    Airport:"British Airways"
}),
new Routes(
{
    From:"DXB",
    To:"LHR",
    Distance:5498.03,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"LHR",
    Distance:5498.03,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"LHR",
    Distance:5498.03,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"DXB",
    To:"LIS",
    Distance:6137.8,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"LIS",
    Distance:6137.8,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"DXB",
    To:"LKO",
    Distance:2552.11,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"LOS",
    Distance:5895.91,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"LRR",
    Distance:286.467,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"LUN",
    Distance:5372.71,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"LYS",
    Distance:4986.83,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"MAA",
    Distance:2933.95,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"MAA",
    Distance:2933.95,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"MAD",
    Distance:5649.12,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"MAN",
    Distance:5655.27,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"MAN",
    Distance:5655.27,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"MBA",
    Distance:3674.75,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"DXB",
    To:"MCT",
    Distance:348.479,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"MCT",
    Distance:348.479,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"MCT",
    Distance:348.479,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"DXB",
    To:"MCT",
    Distance:348.479,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"MED",
    Distance:1580.37,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"MED",
    Distance:1580.37,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"MED",
    Distance:1580.37,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"MEL",
    Distance:11645.1,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"MEL",
    Distance:11645.1,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"MHD",
    Distance:1287.28,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"MLA",
    Distance:4056.39,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"MLE",
    Distance:3040.77,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"MNL",
    Distance:6905.99,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"DXB",
    To:"MNL",
    Distance:6905.99,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"MNL",
    Distance:6905.99,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"MRU",
    Distance:5085.9,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"DXB",
    To:"MRU",
    Distance:5085.9,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"MRV",
    Distance:2383.33,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"MRV",
    Distance:2383.33,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"MUC",
    Distance:4564.02,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"MUC",
    Distance:4564.02,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"DXB",
    To:"MUC",
    Distance:4564.02,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"MUX",
    Distance:1671.42,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"MUX",
    Distance:1671.42,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"DXB",
    To:"MXP",
    Distance:4707.41,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"MXP",
    Distance:4707.41,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DXB",
    To:"NBO",
    Distance:3559.26,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"NBO",
    Distance:3559.26,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"NBO",
    Distance:3559.26,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"DXB",
    To:"NBO",
    Distance:3559.26,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"NCE",
    Distance:4783.89,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"NCL",
    Distance:5653.31,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"NCL",
    Distance:5653.31,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"NJF",
    Distance:1304.86,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"NRT",
    Distance:7979.21,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"NRT",
    Distance:7979.21,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"OTP",
    Distance:3393.41,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"OTP",
    Distance:3393.41,
    Airport:"Tarom"
}),
new Routes(
{
    From:"DXB",
    To:"OVB",
    Distance:3987.92,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"PEK",
    Distance:5845.05,
    Airport:"Air China"
}),
new Routes(
{
    From:"DXB",
    To:"PEK",
    Distance:5845.05,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"PER",
    Distance:9041.52,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"PER",
    Distance:9041.52,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"PEW",
    Distance:1835.33,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"PEW",
    Distance:1835.33,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"DXB",
    To:"PRG",
    Distance:4463.79,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"PRG",
    Distance:4463.79,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"PVG",
    Distance:6448.44,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"PZU",
    Distance:1971.51,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"RIY",
    Distance:1333.02,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"DXB",
    To:"ROV",
    Distance:2804.15,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"RUH",
    Distance:873.015,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"RUH",
    Distance:873.015,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"DXB",
    To:"RUH",
    Distance:873.015,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"RUH",
    Distance:873.015,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"SAH",
    Distance:1589.45,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"SAH",
    Distance:1589.45,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"SAH",
    Distance:1589.45,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"DXB",
    To:"SAW",
    Distance:2967.5,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"SAW",
    Distance:2967.5,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"SEA",
    Distance:11927.7,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"SEA",
    Distance:11927.7,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DXB",
    To:"SEZ",
    Distance:3327.79,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"SFO",
    Distance:13020.1,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"SFO",
    Distance:13020.1,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"DXB",
    To:"SGN",
    Distance:5618.72,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"SIN",
    Distance:5846.7,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"DXB",
    To:"SIN",
    Distance:5846.7,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"SIN",
    Distance:5846.7,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"SIN",
    Distance:5846.7,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"SIN",
    Distance:5846.7,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"SKP",
    Distance:3600.89,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"SKT",
    Distance:2015.14,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"SKT",
    Distance:2015.14,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"SLL",
    Distance:922.832,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"SLL",
    Distance:922.832,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"DXB",
    To:"SVO",
    Distance:3711.67,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"SVO",
    Distance:3711.67,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"DXB",
    To:"SVX",
    Distance:3528.7,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"SYD",
    Distance:12043.9,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"SYD",
    Distance:12043.9,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"SYZ",
    Distance:549.68,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"TAS",
    Distance:2194.15,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"DXB",
    To:"TBS",
    Distance:2061.33,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"TBZ",
    Distance:1670.45,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"TIF",
    Distance:1568.69,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"TIP",
    Distance:4160.45,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"DXB",
    To:"TPE",
    Distance:6555.39,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"TRV",
    Distance:2947.1,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"DXB",
    To:"TRV",
    Distance:2947.1,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"TRV",
    Distance:2947.1,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"TUN",
    Distance:4444.47,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"TUN",
    Distance:4444.47,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"DXB",
    To:"TUU",
    Distance:1890.22,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"VCE",
    Distance:4430.41,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"VIE",
    Distance:4222.9,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"VIE",
    Distance:4222.9,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"VOG",
    Distance:2786.52,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"WAW",
    Distance:4155.81,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"WAW",
    Distance:4155.81,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"XSB",
    Distance:301.146,
    Airport:"VRG Linhas Aereas"
}),
new Routes(
{
    From:"DXB",
    To:"YNB",
    Distance:1750.93,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DXB",
    To:"YYZ",
    Distance:11082.2,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"ZAH",
    Distance:720.897,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"ZBR",
    Distance:504.638,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"DXB",
    To:"ZRH",
    Distance:4767.92,
    Airport:"Emirates"
}),
new Routes(
{
    From:"DXB",
    To:"ZRH",
    Distance:4767.92,
    Airport:"Qantas"
}),
new Routes(
{
    From:"DXB",
    To:"ZRH",
    Distance:4767.92,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"DXB",
    To:"ZYL",
    Distance:3663.92,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"DYG",
    To:"CAN",
    Distance:695.826,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DYG",
    To:"CKG",
    Distance:374.517,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"DYG",
    To:"CKG",
    Distance:374.517,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"DYG",
    To:"CSX",
    Distance:289.365,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DYG",
    To:"CSX",
    Distance:289.365,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"DYG",
    To:"CZX",
    Distance:941.855,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DYG",
    To:"NKG",
    Distance:858.636,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DYG",
    To:"NKG",
    Distance:858.636,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"DYG",
    To:"PEK",
    Distance:1342.95,
    Airport:"Air China"
}),
new Routes(
{
    From:"DYG",
    To:"PEK",
    Distance:1342.95,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DYG",
    To:"PEK",
    Distance:1342.95,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"DYG",
    To:"PVG",
    Distance:1115.55,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DYG",
    To:"PVG",
    Distance:1115.55,
    Airport:"China SSS"
}),
new Routes(
{
    From:"DYG",
    To:"PVG",
    Distance:1115.55,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"DYG",
    To:"SZX",
    Distance:793.64,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DYG",
    To:"TPE",
    Distance:1157.46,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DYG",
    To:"TPE",
    Distance:1157.46,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"DYG",
    To:"TSN",
    Distance:1281.81,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"DYG",
    To:"TYN",
    Distance:982.252,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DYG",
    To:"XIY",
    Distance:615.362,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"DYG",
    To:"XIY",
    Distance:615.362,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"DYR",
    To:"DME",
    Distance:6226.05,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"DYR",
    To:"KHV",
    Distance:3074.2,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"DYU",
    To:"AER",
    Distance:2470.16,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"DYU",
    To:"ALA",
    Distance:872.203,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"DYU",
    To:"ALA",
    Distance:872.203,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"DYU",
    To:"ALA",
    Distance:872.203,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"DYU",
    To:"CEK",
    Distance:1942.49,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"CEK",
    Distance:1942.49,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"DEL",
    Distance:1347.36,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"DYU",
    To:"DME",
    Distance:2961.54,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"DYU",
    To:"DME",
    Distance:2961.54,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"DYU",
    To:"DXB",
    Distance:1944.47,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"DYU",
    To:"DXB",
    Distance:1944.47,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"DYU",
    To:"FRA",
    Distance:4825.59,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"DYU",
    To:"FRU",
    Distance:691.586,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"FRU",
    Distance:691.586,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"DYU",
    To:"GOJ",
    Distance:2694.85,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"IKA",
    Distance:1605.16,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"IKA",
    Distance:1605.16,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"DYU",
    To:"IKT",
    Distance:3124.08,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"DYU",
    To:"IKT",
    Distance:3124.08,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"DYU",
    To:"IST",
    Distance:3400.84,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"DYU",
    To:"IST",
    Distance:3400.84,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"DYU",
    To:"IST",
    Distance:3400.84,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"KJA",
    Distance:2623.05,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"KJA",
    Distance:2623.05,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"DYU",
    To:"KJA",
    Distance:2623.05,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"KRR",
    Distance:2546.18,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"DYU",
    To:"KRR",
    Distance:2546.18,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"DYU",
    To:"KUF",
    Distance:2187.58,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"KZN",
    Distance:2388.87,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"DYU",
    To:"KZN",
    Distance:2388.87,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"LED",
    Distance:3580.77,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"LED",
    Distance:3580.77,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"DYU",
    To:"LED",
    Distance:3580.77,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"DYU",
    To:"LED",
    Distance:3580.77,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"MHD",
    Distance:850.436,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"MRV",
    Distance:2228.24,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"NBC",
    Distance:2247.3,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"OMS",
    Distance:1856.97,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"DYU",
    To:"OVB",
    Distance:2103.69,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"OVB",
    Distance:2103.69,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"DYU",
    To:"REN",
    Distance:1802.07,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"DYU",
    To:"ROV",
    Distance:2535.17,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"SGC",
    Distance:2554.88,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"DYU",
    To:"SHJ",
    Distance:1928.47,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"DYU",
    To:"SVX",
    Distance:2107.66,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"DYU",
    To:"SVX",
    Distance:2107.66,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"DYU",
    To:"SVX",
    Distance:2107.66,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"UFA",
    Distance:2030.17,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"URC",
    Distance:1665.26,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"DYU",
    To:"URC",
    Distance:1665.26,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"DYU",
    To:"URC",
    Distance:1665.26,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"DYU",
    To:"VOG",
    Distance:2259.84,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"DZA",
    To:"DIE",
    Distance:438.19,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"DZA",
    To:"HAH",
    Distance:260.138,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"DZA",
    To:"HAH",
    Distance:260.138,
    Airport:"Air France"
}),
new Routes(
{
    From:"DZA",
    To:"HAH",
    Distance:260.138,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"DZA",
    To:"HAH",
    Distance:260.138,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"DZA",
    To:"MJN",
    Distance:338.557,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"DZA",
    To:"RUN",
    Distance:1410.68,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"DZA",
    To:"RUN",
    Distance:1410.68,
    Airport:"XL Airways France"
}),
new Routes(
{
    From:"DZA",
    To:"TNR",
    Distance:706.534,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"DZA",
    To:"TNR",
    Distance:706.534,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"DZA",
    To:"TNR",
    Distance:706.534,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"DZN",
    To:"ALA",
    Distance:870.986,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"DZN",
    To:"TSE",
    Distance:456.905,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"EAE",
    To:"VLI",
    Distance:67.7652,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"EAM",
    To:"DMM",
    Distance:1130.01,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"EAM",
    To:"JED",
    Distance:712.848,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"EAM",
    To:"RUH",
    Distance:850.256,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"EAR",
    To:"DEN",
    Distance:490.02,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"EAS",
    To:"BCN",
    Distance:391.859,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"EAS",
    To:"BCN",
    Distance:391.859,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"EAS",
    To:"MAD",
    Distance:350.601,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"EAT",
    To:"SEA",
    Distance:158.332,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"EAU",
    To:"ORD",
    Distance:431.925,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EBA",
    To:"ACH",
    Distance:528.054,
    Airport:"Intersky"
}),
new Routes(
{
    From:"EBA",
    To:"BRN",
    Distance:509.908,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"EBA",
    To:"FDH",
    Distance:549.044,
    Airport:"Intersky"
}),
new Routes(
{
    From:"EBA",
    To:"MUC",
    Distance:633.482,
    Airport:"Intersky"
}),
new Routes(
{
    From:"EBA",
    To:"ZRH",
    Distance:539.627,
    Airport:"Intersky"
}),
new Routes(
{
    From:"EBB",
    To:"ADD",
    Distance:1217.61,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"EBB",
    To:"AMS",
    Distance:6357.96,
    Airport:"Air France"
}),
new Routes(
{
    From:"EBB",
    To:"AMS",
    Distance:6357.96,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"EBB",
    To:"AMS",
    Distance:6357.96,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"EBB",
    To:"ASM",
    Distance:1838.48,
    Airport:"Nasair"
}),
new Routes(
{
    From:"EBB",
    To:"BJM",
    Distance:510.618,
    Airport:"Northern Dene Airways"
}),
new Routes(
{
    From:"EBB",
    To:"BRU",
    Distance:6238.98,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"EBB",
    To:"BRU",
    Distance:6238.98,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"EBB",
    To:"BRU",
    Distance:6238.98,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EBB",
    To:"BRU",
    Distance:6238.98,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EBB",
    To:"CAI",
    Distance:3346.5,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"EBB",
    To:"DAR",
    Distance:1074.4,
    Airport:"Northern Dene Airways"
}),
new Routes(
{
    From:"EBB",
    To:"DAR",
    Distance:1074.4,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"EBB",
    To:"DOH",
    Distance:3476.34,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"EBB",
    To:"DXB",
    Distance:3731.34,
    Airport:"Emirates"
}),
new Routes(
{
    From:"EBB",
    To:"IST",
    Distance:4566.41,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"EBB",
    To:"JNB",
    Distance:2945.84,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"EBB",
    To:"JRO",
    Distance:643.335,
    Airport:"Northern Dene Airways"
}),
new Routes(
{
    From:"EBB",
    To:"JRO",
    Distance:643.335,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"EBB",
    To:"JUB",
    Distance:545.117,
    Airport:"Northern Dene Airways"
}),
new Routes(
{
    From:"EBB",
    To:"KGL",
    Distance:340.024,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"EBB",
    To:"KGL",
    Distance:340.024,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EBB",
    To:"KGL",
    Distance:340.024,
    Airport:"Northern Dene Airways"
}),
new Routes(
{
    From:"EBB",
    To:"KGL",
    Distance:340.024,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"EBB",
    To:"KGL",
    Distance:340.024,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"EBB",
    To:"LHR",
    Distance:6497.54,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EBB",
    To:"LHR",
    Distance:6497.54,
    Airport:"British Airways"
}),
new Routes(
{
    From:"EBB",
    To:"MGQ",
    Distance:1446.52,
    Airport:"Northern Dene Airways"
}),
new Routes(
{
    From:"EBB",
    To:"NBO",
    Distance:521.036,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"EBB",
    To:"NBO",
    Distance:521.036,
    Airport:"Northern Dene Airways"
}),
new Routes(
{
    From:"EBB",
    To:"PAF",
    Distance:274.889,
    Airport:"Benin Golf Air"
}),
new Routes(
{
    From:"EBB",
    To:"RUA",
    Distance:375.004,
    Airport:"Eagle Air"
}),
new Routes(
{
    From:"EBJ",
    To:"ABZ",
    Distance:687.092,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"EBJ",
    To:"BLL",
    Distance:44.4849,
    Airport:"DAT Danish Air Transport"
}),
new Routes(
{
    From:"EBL",
    To:"ADA",
    Distance:779.137,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"EBL",
    To:"ADA",
    Distance:779.137,
    Airport:"Zoom Airlines"
}),
new Routes(
{
    From:"EBL",
    To:"AMM",
    Distance:889.478,
    Airport:"Royal Falcon"
}),
new Routes(
{
    From:"EBL",
    To:"AMM",
    Distance:889.478,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"EBL",
    To:"AMM",
    Distance:889.478,
    Airport:"Zoom Airlines"
}),
new Routes(
{
    From:"EBL",
    To:"AMS",
    Distance:3535.45,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EBL",
    To:"ARN",
    Distance:3202.86,
    Airport:"Germania"
}),
new Routes(
{
    From:"EBL",
    To:"ARN",
    Distance:3202.86,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"EBL",
    To:"ARN",
    Distance:3202.86,
    Airport:"Zoom Airlines"
}),
new Routes(
{
    From:"EBL",
    To:"AUH",
    Distance:1663.35,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"EBL",
    To:"AYT",
    Distance:1176.87,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"EBL",
    To:"BEY",
    Distance:816.752,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"EBL",
    To:"BEY",
    Distance:816.752,
    Airport:"Zoom Airlines"
}),
new Routes(
{
    From:"EBL",
    To:"CAI",
    Distance:1350.42,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"EBL",
    To:"DOH",
    Distance:1419.12,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"EBL",
    To:"DUS",
    Distance:3373.24,
    Airport:"Germania"
}),
new Routes(
{
    From:"EBL",
    To:"DXB",
    Distance:1634.2,
    Airport:"Emirates"
}),
new Routes(
{
    From:"EBL",
    To:"DXB",
    Distance:1634.2,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"EBL",
    To:"ESB",
    Distance:1050.75,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"EBL",
    To:"ESB",
    Distance:1050.75,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"EBL",
    To:"ESB",
    Distance:1050.75,
    Airport:"Zoom Airlines"
}),
new Routes(
{
    From:"EBL",
    To:"FRA",
    Distance:3215.96,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EBL",
    To:"GOT",
    Distance:3328.58,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"EBL",
    To:"IKA",
    Distance:654.382,
    Airport:"Mahan Air"
}),
new Routes(
{
    From:"EBL",
    To:"IST",
    Distance:1415.46,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"EBL",
    To:"IST",
    Distance:1415.46,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"EBL",
    To:"MUC",
    Distance:2940.02,
    Airport:"Germania"
}),
new Routes(
{
    From:"EBL",
    To:"SHJ",
    Distance:1637.37,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"EBL",
    To:"TBS",
    Distance:610.004,
    Airport:"Cameroon Airlines"
}),
new Routes(
{
    From:"EBL",
    To:"VIE",
    Distance:2594.5,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"EBU",
    To:"BIA",
    Distance:531.098,
    Airport:"Air France"
}),
new Routes(
{
    From:"EBU",
    To:"BIA",
    Distance:531.098,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"EBU",
    To:"FEZ",
    Distance:1513.05,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EBU",
    To:"OPO",
    Distance:1150.32,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EBU",
    To:"SAW",
    Distance:2082.18,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ECN",
    To:"ADA",
    Distance:258.854,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"ECN",
    To:"ADA",
    Distance:258.854,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ECN",
    To:"ADB",
    Distance:663.781,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"ECN",
    To:"ADB",
    Distance:663.781,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ECN",
    To:"AYT",
    Distance:310.414,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ECN",
    To:"ESB",
    Distance:554.768,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ECN",
    To:"ESB",
    Distance:554.768,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ECN",
    To:"GZT",
    Distance:409.721,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ECN",
    To:"HTY",
    Distance:285.021,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ECN",
    To:"IST",
    Distance:765.93,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"ECN",
    To:"IST",
    Distance:765.93,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"ECN",
    To:"IST",
    Distance:765.93,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ECN",
    To:"SAW",
    Distance:736.256,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ECN",
    To:"SAW",
    Distance:736.256,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ECP",
    To:"ATL",
    Distance:388.466,
    Airport:"Air France"
}),
new Routes(
{
    From:"ECP",
    To:"ATL",
    Distance:388.466,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ECP",
    To:"ATL",
    Distance:388.466,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ECP",
    To:"BNA",
    Distance:648.203,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ECP",
    To:"BWI",
    Distance:1287.04,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ECP",
    To:"HOU",
    Distance:916.119,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ECP",
    To:"STL",
    Distance:1023.96,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"EDI",
    To:"ACE",
    Distance:3110.34,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"AGP",
    Distance:2144.97,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EDI",
    To:"AGP",
    Distance:2144.97,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"ALC",
    Distance:1975.67,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EDI",
    To:"ALC",
    Distance:1975.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"ALC",
    Distance:1975.67,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"AMS",
    Distance:666.362,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"EDI",
    To:"AMS",
    Distance:666.362,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"ARN",
    Distance:1320.25,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"EDI",
    To:"ARN",
    Distance:1320.25,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"EDI",
    To:"ATH",
    Distance:2848.01,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"BCN",
    Distance:1676.57,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"EDI",
    To:"BCN",
    Distance:1676.57,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"EDI",
    To:"BCN",
    Distance:1676.57,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"BFS",
    Distance:230.282,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"BGO",
    Distance:697.38,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"EDI",
    To:"BHD",
    Distance:216.768,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EDI",
    To:"BHX",
    Distance:402.826,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EDI",
    To:"BJV",
    Distance:3107.51,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"BLQ",
    Distance:1635.63,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"BOD",
    Distance:1250.69,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"BRE",
    Distance:847.462,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"BRS",
    Distance:509.679,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"BRU",
    Distance:764.686,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"EDI",
    To:"BRU",
    Distance:764.686,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EDI",
    To:"BSL",
    Distance:1191.62,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"BTS",
    Distance:1642.45,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"BUD",
    Distance:1811.96,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EDI",
    To:"BZR",
    Distance:1483.5,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"CDG",
    Distance:868.679,
    Airport:"Air France"
}),
new Routes(
{
    From:"EDI",
    To:"CDG",
    Distance:868.679,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"EDI",
    To:"CDG",
    Distance:868.679,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EDI",
    To:"CDG",
    Distance:868.679,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"EDI",
    To:"CDG",
    Distance:868.679,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"CFU",
    Distance:2492.65,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"CGN",
    Distance:895.806,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"EDI",
    To:"CIA",
    Distance:1949.4,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"CPH",
    Distance:1000.64,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"EDI",
    To:"CPH",
    Distance:1000.64,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"CRL",
    Distance:801.792,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"CWL",
    Distance:506.311,
    Airport:"Air France"
}),
new Routes(
{
    From:"EDI",
    To:"CWL",
    Distance:506.311,
    Airport:"CityJet"
}),
new Routes(
{
    From:"EDI",
    To:"DBV",
    Distance:2146.99,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EDI",
    To:"DBV",
    Distance:2146.99,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"DLM",
    Distance:3216.05,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"DUB",
    Distance:337.2,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"EDI",
    To:"DUB",
    Distance:337.2,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"EMA",
    Distance:371.165,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EDI",
    To:"EWR",
    Distance:5244.79,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EDI",
    To:"EWR",
    Distance:5244.79,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EDI",
    To:"EXT",
    Distance:579.95,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EDI",
    To:"FAO",
    Distance:2133.55,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EDI",
    To:"FAO",
    Distance:2133.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"FRA",
    Distance:1031.98,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EDI",
    To:"FUE",
    Distance:3169.24,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"GDN",
    Distance:1392.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"GSE",
    Distance:946.312,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"GVA",
    Distance:1264.18,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"HAM",
    Distance:892.937,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"HER",
    Distance:3147.24,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"HHN",
    Distance:974.314,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"IST",
    Distance:2857.66,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"EDI",
    To:"JER",
    Distance:753.859,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EDI",
    To:"KEF",
    Distance:1384.63,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"KOI",
    Distance:335.615,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EDI",
    To:"KRK",
    Distance:1670.99,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"KRK",
    Distance:1670.99,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"KUN",
    Distance:1723.23,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"LCY",
    Distance:543.08,
    Airport:"British Airways"
}),
new Routes(
{
    From:"EDI",
    To:"LGW",
    Distance:573.696,
    Airport:"British Airways"
}),
new Routes(
{
    From:"EDI",
    To:"LGW",
    Distance:573.696,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"LHR",
    Distance:532.822,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EDI",
    To:"LHR",
    Distance:532.822,
    Airport:"British Airways"
}),
new Routes(
{
    From:"EDI",
    To:"LHR",
    Distance:532.822,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"EDI",
    To:"LHR",
    Distance:532.822,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"EDI",
    To:"LHR",
    Distance:532.822,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"EDI",
    To:"LIS",
    Distance:1956.13,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"LPA",
    Distance:3259.39,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"LSI",
    Distance:453.712,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EDI",
    To:"LTN",
    Distance:493.909,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"LYS",
    Distance:1280.61,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"MAD",
    Distance:1718.74,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"MAH",
    Distance:1873.49,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EDI",
    To:"MAN",
    Distance:297.189,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EDI",
    To:"MJV",
    Distance:2029.97,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EDI",
    To:"MLA",
    Distance:2609.33,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"MRS",
    Distance:1519.72,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"MUC",
    Distance:1330.34,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"MXP",
    Distance:1424,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"NAP",
    Distance:2109.54,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"NCE",
    Distance:1559.79,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"NRN",
    Distance:789.157,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"NWI",
    Distance:472.792,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EDI",
    To:"ORK",
    Distance:566.431,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"EDI",
    To:"OSL",
    Distance:970.25,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"EDI",
    To:"OSL",
    Distance:970.25,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"EDI",
    To:"PFO",
    Distance:3595.98,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"PMI",
    Distance:1877.58,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EDI",
    To:"PMI",
    Distance:1877.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"PMI",
    Distance:1877.58,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"EDI",
    To:"PMI",
    Distance:1877.58,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"POZ",
    Distance:1365.96,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"PRG",
    Distance:1341.29,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EDI",
    To:"PRG",
    Distance:1341.29,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"PSA",
    Distance:1677.35,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"RYG",
    Distance:921.982,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"SDR",
    Distance:1392.85,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"SEN",
    Distance:555.257,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"SNN",
    Distance:509.674,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"EDI",
    To:"SOU",
    Distance:571.68,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EDI",
    To:"STN",
    Distance:509.859,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"SVG",
    Distance:629.387,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"EDI",
    To:"SXF",
    Distance:1165.7,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"SYY",
    Distance:308.845,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EDI",
    To:"TFS",
    Distance:3276.26,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EDI",
    To:"TFS",
    Distance:3276.26,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"EDI",
    To:"TFS",
    Distance:3276.26,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EDI",
    To:"VCE",
    Distance:1597.06,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EDI",
    To:"WIC",
    Distance:279.482,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EDL",
    To:"LOK",
    Distance:304.955,
    Airport:"Fly540"
}),
new Routes(
{
    From:"EDL",
    To:"NBO",
    Distance:268.295,
    Airport:"Fly540"
}),
new Routes(
{
    From:"EDL",
    To:"NBO",
    Distance:268.295,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"EDO",
    To:"SAW",
    Distance:245.562,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"EDR",
    To:"CNS",
    Distance:495.496,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"EDR",
    To:"KWM",
    Distance:67.2322,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"EEK",
    To:"BET",
    Distance:63.9564,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"EEK",
    To:"KWN",
    Distance:52.1781,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"EEK",
    To:"KWN",
    Distance:52.1781,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"EFL",
    To:"AMS",
    Distance:1993.06,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EFL",
    To:"ATH",
    Distance:302.329,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"EFL",
    To:"ATH",
    Distance:302.329,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"EFL",
    To:"LGW",
    Distance:2172.36,
    Airport:"easyJet"
}),
new Routes(
{
    From:"EFL",
    To:"PVK",
    Distance:92.472,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"EFL",
    To:"STN",
    Distance:2195.26,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EGC",
    To:"BRS",
    Distance:767.56,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EGC",
    To:"CRL",
    Distance:692.122,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EGC",
    To:"EMA",
    Distance:900.331,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EGC",
    To:"EXT",
    Distance:719.519,
    Airport:"Air France"
}),
new Routes(
{
    From:"EGC",
    To:"EXT",
    Distance:719.519,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EGC",
    To:"LPL",
    Distance:977.086,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EGC",
    To:"PGX",
    Distance:47.5716,
    Airport:"Twin Jet"
}),
new Routes(
{
    From:"EGC",
    To:"RTM",
    Distance:843.824,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EGC",
    To:"SOU",
    Distance:695.212,
    Airport:"Air France"
}),
new Routes(
{
    From:"EGC",
    To:"SOU",
    Distance:695.212,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EGC",
    To:"STN",
    Distance:785.283,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EGE",
    To:"DEN",
    Distance:193.416,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EGM",
    To:"GZO",
    Distance:123.525,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"EGM",
    To:"HIR",
    Distance:257.237,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"EGM",
    To:"RBV",
    Distance:52.382,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"EGM",
    To:"VAO",
    Distance:145.119,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"EGN",
    To:"KRT",
    Distance:1110.46,
    Airport:"ALAK"
}),
new Routes(
{
    From:"EGN",
    To:"KRT",
    Distance:1110.46,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"EGO",
    To:"DME",
    Distance:537.057,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"EGO",
    To:"DME",
    Distance:537.057,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"EGO",
    To:"DME",
    Distance:537.057,
    Airport:"Polet Airlines (Priv)"
}),
new Routes(
{
    From:"EGO",
    To:"FRU",
    Distance:2965.7,
    Airport:"Comores Airlines"
}),
new Routes(
{
    From:"EGO",
    To:"GOJ",
    Distance:782.032,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"EGO",
    To:"KGD",
    Distance:1171.88,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"EGO",
    To:"KRR",
    Distance:652.654,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"EGO",
    To:"KUF",
    Distance:977.89,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"EGO",
    To:"KZN",
    Distance:1008.25,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"EGO",
    To:"LED",
    Distance:1093.21,
    Airport:"Polet Airlines (Priv)"
}),
new Routes(
{
    From:"EGO",
    To:"ROV",
    Distance:444.067,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"EGS",
    To:"RKV",
    Distance:380.159,
    Airport:"Air Iceland"
}),
new Routes(
{
    From:"EGX",
    To:"AKN",
    Distance:69.0716,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"EIN",
    To:"ACE",
    Distance:2957.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"AGP",
    Distance:1818.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"AGP",
    Distance:1818.71,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"AHO",
    Distance:1223.52,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"ALC",
    Distance:1535.77,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"ALC",
    Distance:1535.77,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"ATH",
    Distance:2089,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"AYT",
    Distance:2571.37,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"BCN",
    Distance:1156.63,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"BDS",
    Distance:1538.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"BEG",
    Distance:1327.31,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"EIN",
    To:"BGY",
    Distance:716.665,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"BJV",
    Distance:2356.63,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"BLQ",
    Distance:885.245,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"BUD",
    Distance:1096.07,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"EIN",
    To:"CCF",
    Distance:944.117,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"CFU",
    Distance:1730.85,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"CHQ",
    Distance:2315.7,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"CIA",
    Distance:1205.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"CLJ",
    Distance:1425.33,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"EIN",
    To:"CPH",
    Distance:667.442,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"CTA",
    Distance:1731.23,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"DEB",
    Distance:1250.25,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"EIN",
    To:"DLM",
    Distance:2467.14,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"DUB",
    Distance:818.203,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"FAO",
    Distance:1918.53,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"FAO",
    Distance:1918.53,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"FEZ",
    Distance:2119.34,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"GDN",
    Distance:934.537,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"EIN",
    To:"GRO",
    Distance:1080.2,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"GRQ",
    Distance:202.929,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"IBZ",
    Distance:1432.72,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"IBZ",
    Distance:1432.72,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"INN",
    Distance:635.197,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"KRK",
    Distance:1023.22,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"KTW",
    Distance:964.529,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"EIN",
    To:"LIS",
    Distance:1804.46,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"LPA",
    Distance:3137.35,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"LPA",
    Distance:3137.35,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"MAD",
    Distance:1398.26,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"MJV",
    Distance:1596.09,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"MLA",
    Distance:1878.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"MRS",
    Distance:891.263,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"NAP",
    Distance:1358.35,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"NCE",
    Distance:877.273,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"NOC",
    Distance:993.212,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"OPO",
    Distance:1560.29,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"OTP",
    Distance:1713.05,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"EIN",
    To:"PMI",
    Distance:1338.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"PMI",
    Distance:1338.58,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"PSA",
    Distance:941.514,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"RAK",
    Distance:2463.77,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"REU",
    Distance:1189.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"RIX",
    Distance:1348.52,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"EIN",
    To:"RTM",
    Distance:85.7177,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"SAW",
    Distance:2169.4,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"SKP",
    Distance:1620.83,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"EIN",
    To:"SOF",
    Distance:1669.73,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"EIN",
    To:"STN",
    Distance:357.657,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"SVQ",
    Distance:1793.9,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"TPS",
    Distance:1605.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"TSF",
    Distance:816.688,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIN",
    To:"TXL",
    Distance:555.228,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"VCE",
    Distance:836.761,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"VLC",
    Distance:1405.06,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"EIN",
    To:"VNO",
    Distance:1372.22,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"EIN",
    To:"WAW",
    Distance:1072.88,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"EIN",
    To:"WMI",
    Distance:1050.91,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EIS",
    To:"DOM",
    Distance:471.927,
    Airport:"BVI Airways"
}),
new Routes(
{
    From:"EIS",
    To:"DOM",
    Distance:471.927,
    Airport:"TUR Avrupa Hava YollarÄ±"
}),
new Routes(
{
    From:"EIS",
    To:"NEV",
    Distance:248.452,
    Airport:"TUR Avrupa Hava YollarÄ±"
}),
new Routes(
{
    From:"EIS",
    To:"SJU",
    Distance:153.887,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EIS",
    To:"SJU",
    Distance:153.887,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"EIS",
    To:"SJU",
    Distance:153.887,
    Airport:"Seaborne Airlines"
}),
new Routes(
{
    From:"EIS",
    To:"STT",
    Distance:46.9601,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"EIS",
    To:"STT",
    Distance:46.9601,
    Airport:"TUR Avrupa Hava YollarÄ±"
}),
new Routes(
{
    From:"EIS",
    To:"SXM",
    Distance:157.965,
    Airport:"BVI Airways"
}),
new Routes(
{
    From:"EIS",
    To:"SXM",
    Distance:157.965,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"EIS",
    To:"SXM",
    Distance:157.965,
    Airport:"TUR Avrupa Hava YollarÄ±"
}),
new Routes(
{
    From:"EIS",
    To:"SXM",
    Distance:157.965,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"EJA",
    To:"BOG",
    Distance:261.002,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"EJH",
    To:"JED",
    Distance:571.51,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"EKO",
    To:"SLC",
    Distance:321.027,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ELC",
    To:"MNG",
    Distance:145.456,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"ELD",
    To:"DAL",
    Distance:378.732,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"ELD",
    To:"HOT",
    Distance:142.196,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"ELF",
    To:"KRT",
    Distance:808.132,
    Airport:"ALAK"
}),
new Routes(
{
    From:"ELF",
    To:"KRT",
    Distance:808.132,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"ELG",
    To:"OGX",
    Distance:285.142,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ELG",
    To:"TMR",
    Distance:900.344,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ELH",
    To:"FLL",
    Distance:353.676,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ELH",
    To:"MIA",
    Distance:363.328,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ELH",
    To:"MIA",
    Distance:363.328,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ELH",
    To:"NAS",
    Distance:92.4423,
    Airport:"Aeroper"
}),
new Routes(
{
    From:"ELH",
    To:"NAS",
    Distance:92.4423,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"ELH",
    To:"PBI",
    Distance:366.291,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ELI",
    To:"GLV",
    Distance:35.8804,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"ELI",
    To:"KKA",
    Distance:64.0289,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"ELI",
    To:"KKA",
    Distance:64.0289,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ELI",
    To:"OME",
    Distance:152.035,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"ELI",
    To:"OME",
    Distance:152.035,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ELL",
    To:"JNB",
    Distance:279.442,
    Airport:"VivaColombia"
}),
new Routes(
{
    From:"ELM",
    To:"DTW",
    Distance:532.302,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ELM",
    To:"ORD",
    Distance:908.668,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ELM",
    To:"PHL",
    Distance:289.637,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ELM",
    To:"PHL",
    Distance:289.637,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ELM",
    To:"PIE",
    Distance:1668.96,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"ELM",
    To:"SFB",
    Distance:1538.62,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"ELP",
    To:"ATL",
    Distance:2059.52,
    Airport:"Air France"
}),
new Routes(
{
    From:"ELP",
    To:"ATL",
    Distance:2059.52,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ELP",
    To:"ATL",
    Distance:2059.52,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ELP",
    To:"AUS",
    Distance:848.835,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ELP",
    To:"DAL",
    Distance:902.169,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ELP",
    To:"DEN",
    Distance:908.638,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ELP",
    To:"DFW",
    Distance:885.334,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ELP",
    To:"DFW",
    Distance:885.334,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ELP",
    To:"HOU",
    Distance:1087.21,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ELP",
    To:"IAH",
    Distance:1071.85,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ELP",
    To:"LAS",
    Distance:937.971,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ELP",
    To:"LAX",
    Distance:1147.58,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ELP",
    To:"LAX",
    Distance:1147.58,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ELP",
    To:"LAX",
    Distance:1147.58,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ELP",
    To:"LAX",
    Distance:1147.58,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ELP",
    To:"LAX",
    Distance:1147.58,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ELP",
    To:"ORD",
    Distance:1987.53,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ELP",
    To:"ORD",
    Distance:1987.53,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ELP",
    To:"PHL",
    Distance:2929.26,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ELP",
    To:"PHX",
    Distance:557.709,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ELP",
    To:"PHX",
    Distance:557.709,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ELP",
    To:"PHX",
    Distance:557.709,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ELP",
    To:"SAT",
    Distance:797.195,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ELP",
    To:"SAT",
    Distance:797.195,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ELQ",
    To:"CAI",
    Distance:1283.27,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"ELQ",
    To:"CAI",
    Distance:1283.27,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ELQ",
    To:"CAI",
    Distance:1283.27,
    Airport:"Express One International"
}),
new Routes(
{
    From:"ELQ",
    To:"CAI",
    Distance:1283.27,
    Airport:"Nile Air"
}),
new Routes(
{
    From:"ELQ",
    To:"DMM",
    Distance:600.284,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"ELQ",
    To:"DOH",
    Distance:788.519,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ELQ",
    To:"DXB",
    Distance:1166.01,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"ELQ",
    To:"IST",
    Distance:2133.61,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ELQ",
    To:"JED",
    Distance:695.773,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"ELQ",
    To:"MED",
    Distance:452.508,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"ELQ",
    To:"RUH",
    Distance:329.16,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"ELQ",
    To:"SHJ",
    Distance:1180.04,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"ELS",
    To:"CPT",
    Distance:861.226,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"ELS",
    To:"DUR",
    Distance:451.543,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"ELS",
    To:"JNB",
    Distance:767.917,
    Airport:"Comair"
}),
new Routes(
{
    From:"ELS",
    To:"JNB",
    Distance:767.917,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"ELS",
    To:"PLZ",
    Distance:230.372,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"ELU",
    To:"ALG",
    Distance:479.472,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ELV",
    To:"JNU",
    Distance:105.073,
    Airport:"Alaska Seaplane Service"
}),
new Routes(
{
    From:"EMA",
    To:"ABZ",
    Distance:489.156,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"EMA",
    To:"ACE",
    Distance:2840.22,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"EMA",
    To:"ACE",
    Distance:2840.22,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"ACE",
    Distance:2840.22,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"ACE",
    Distance:2840.22,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"EMA",
    To:"ACE",
    Distance:2840.22,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"EMA",
    To:"ACE",
    Distance:2840.22,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"EMA",
    To:"AGP",
    Distance:1813.4,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"EMA",
    To:"AGP",
    Distance:1813.4,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"AGP",
    Distance:1813.4,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"ALC",
    Distance:1618.85,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"EMA",
    To:"ALC",
    Distance:1618.85,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"ALC",
    Distance:1618.85,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"ALC",
    Distance:1618.85,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"EMA",
    To:"AMS",
    Distance:415.665,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EMA",
    To:"BCN",
    Distance:1307.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"BGY",
    Distance:1126.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"BHD",
    Distance:358.877,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EMA",
    To:"BJV",
    Distance:2829.8,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"BRU",
    Distance:452.938,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"EMA",
    To:"BUD",
    Distance:1578,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"CCF",
    Distance:1102.42,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"CDG",
    Distance:503.975,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"CFU",
    Distance:2183.51,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"CHQ",
    Distance:2770.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"CIA",
    Distance:1608.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"DBV",
    Distance:1848.47,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"DLM",
    Distance:2941.52,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"DLM",
    Distance:2941.52,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"EMA",
    To:"DLM",
    Distance:2941.52,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"EMA",
    To:"DNR",
    Distance:474.801,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"DUB",
    Distance:336.141,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"EDI",
    Distance:371.165,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EMA",
    To:"EGC",
    Distance:900.331,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"FAO",
    Distance:1832.81,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"EMA",
    To:"FAO",
    Distance:1832.81,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"FAO",
    Distance:1832.81,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"FAO",
    Distance:1832.81,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"EMA",
    To:"FNC",
    Distance:2557.06,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"FUE",
    Distance:2900.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"FUE",
    Distance:2900.03,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"EMA",
    To:"GCI",
    Distance:387.939,
    Airport:"Aurigny Air Services"
}),
new Routes(
{
    From:"EMA",
    To:"GLA",
    Distance:393.379,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EMA",
    To:"GRO",
    Distance:1253.25,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"HER",
    Distance:2844.87,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"IBZ",
    Distance:1565.83,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"IBZ",
    Distance:1565.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"IBZ",
    Distance:1565.83,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"EMA",
    To:"JER",
    Distance:407.413,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EMA",
    To:"KRK",
    Distance:1488.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"LCA",
    Distance:3388.19,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"EMA",
    To:"LEI",
    Distance:1779.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"LIG",
    Distance:795.718,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"LPA",
    Distance:3001.49,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"LPA",
    Distance:3001.49,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"LPA",
    Distance:3001.49,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"EMA",
    To:"LRH",
    Distance:739.721,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"MAH",
    Distance:1502.43,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"MAH",
    Distance:1502.43,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"MAH",
    Distance:1502.43,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"EMA",
    To:"MJV",
    Distance:1674.64,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"MJV",
    Distance:1674.64,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"MLA",
    Distance:2256.58,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"EMA",
    To:"NBE",
    Distance:2077.89,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"EMA",
    To:"NBE",
    Distance:2077.89,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"EMA",
    To:"NBE",
    Distance:2077.89,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"EMA",
    To:"NOC",
    Distance:510.953,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"ORK",
    Distance:498.742,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"PFO",
    Distance:3330.5,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"PFO",
    Distance:3330.5,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"EMA",
    To:"PFO",
    Distance:3330.5,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"EMA",
    To:"PMI",
    Distance:1508.41,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"EMA",
    To:"PMI",
    Distance:1508.41,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"PMI",
    Distance:1508.41,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"PMI",
    Distance:1508.41,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"EMA",
    To:"PMI",
    Distance:1508.41,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"EMA",
    To:"PRG",
    Distance:1119.15,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"PSA",
    Distance:1333.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"REU",
    Distance:1312.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"RHO",
    Distance:2924.16,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"RHO",
    Distance:2924.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"RHO",
    Distance:2924.16,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"EMA",
    To:"RIX",
    Distance:1670.39,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"RZE",
    Distance:1637.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"SXF",
    Distance:1002.3,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"TFS",
    Distance:3028.73,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"EMA",
    To:"TFS",
    Distance:3028.73,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"EMA",
    To:"TFS",
    Distance:3028.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"TFS",
    Distance:3028.73,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"EMA",
    To:"TFS",
    Distance:3028.73,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"EMA",
    To:"TFS",
    Distance:3028.73,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"EMA",
    To:"TSF",
    Distance:1262.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"VLC",
    Distance:1484.94,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"WMI",
    Distance:1477.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMA",
    To:"WRO",
    Distance:1259.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"EMD",
    To:"BNE",
    Distance:652.436,
    Airport:"Qantas"
}),
new Routes(
{
    From:"EMD",
    To:"BNE",
    Distance:652.436,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"EMK",
    To:"AUK",
    Distance:14.611,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"EMK",
    To:"BET",
    Distance:263.055,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"EMK",
    To:"KOT",
    Distance:55.6103,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"EMK",
    To:"KOT",
    Distance:55.6103,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ENA",
    To:"ANC",
    Distance:95.0585,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"ENA",
    To:"ANC",
    Distance:95.0585,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ENA",
    To:"ANC",
    Distance:95.0585,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ENE",
    To:"KOE",
    Distance:265.008,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"ENE",
    To:"KOE",
    Distance:265.008,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"ENE",
    To:"LBJ",
    Distance:198.873,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"ENE",
    To:"LBJ",
    Distance:198.873,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"ENH",
    To:"WUH",
    Distance:455.163,
    Airport:"Air France"
}),
new Routes(
{
    From:"ENH",
    To:"WUH",
    Distance:455.163,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"ENH",
    To:"WUH",
    Distance:455.163,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ENH",
    To:"WUH",
    Distance:455.163,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"ENU",
    To:"ABV",
    Distance:283.521,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ENU",
    To:"ADD",
    Distance:3452.06,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ENU",
    To:"LOS",
    Distance:468.639,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ENY",
    To:"CKG",
    Distance:815.439,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"ENY",
    To:"NAY",
    Distance:691.684,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"ENY",
    To:"NAY",
    Distance:691.684,
    Airport:"China United"
}),
new Routes(
{
    From:"ENY",
    To:"PEK",
    Distance:722.403,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"ENY",
    To:"XIY",
    Distance:254.082,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"EOH",
    To:"APO",
    Distance:199.437,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"EOH",
    To:"APO",
    Distance:199.437,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"EOH",
    To:"APO",
    Distance:199.437,
    Airport:"SATENA"
}),
new Routes(
{
    From:"EOH",
    To:"BOG",
    Distance:232.457,
    Airport:"SATENA"
}),
new Routes(
{
    From:"EOH",
    To:"BSC",
    Distance:199.444,
    Airport:"SATENA"
}),
new Routes(
{
    From:"EOH",
    To:"IBE",
    Distance:206.275,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"EOH",
    To:"MTR",
    Distance:290.687,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"EOH",
    To:"NQU",
    Distance:195.586,
    Airport:"SATENA"
}),
new Routes(
{
    From:"EOH",
    To:"PEI",
    Distance:157.349,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"EOH",
    To:"UIB",
    Distance:130.248,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"EOH",
    To:"UIB",
    Distance:130.248,
    Airport:"SATENA"
}),
new Routes(
{
    From:"EOI",
    To:"KOI",
    Distance:26.9777,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"EPR",
    To:"PER",
    Distance:580.507,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"EPR",
    To:"PER",
    Distance:580.507,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"EPR",
    To:"RVT",
    Distance:149.85,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"EQS",
    To:"AEP",
    Distance:1439.3,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EQS",
    To:"BRC",
    Distance:195.351,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"EQS",
    To:"CRD",
    Distance:433.169,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"ERC",
    To:"ESB",
    Distance:558.856,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ERC",
    To:"IST",
    Distance:918.132,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ERC",
    To:"SAW",
    Distance:875.955,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ERF",
    To:"AYT",
    Distance:2217.03,
    Airport:"Germania"
}),
new Routes(
{
    From:"ERF",
    To:"FUE",
    Distance:3251.61,
    Airport:"Germania"
}),
new Routes(
{
    From:"ERF",
    To:"LGW",
    Distance:778.536,
    Airport:"Germania"
}),
new Routes(
{
    From:"ERF",
    To:"LPA",
    Distance:3381.68,
    Airport:"Germania"
}),
new Routes(
{
    From:"ERF",
    To:"PMI",
    Distance:1422.39,
    Airport:"Germania"
}),
new Routes(
{
    From:"ERF",
    To:"TFS",
    Distance:3436.44,
    Airport:"Germania"
}),
new Routes(
{
    From:"ERI",
    To:"CLE",
    Distance:157.581,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ERI",
    To:"DTW",
    Distance:262.32,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ERI",
    To:"PHL",
    Distance:481.579,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ERI",
    To:"PHL",
    Distance:481.579,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ERM",
    To:"JCB",
    Distance:93.2548,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"ERM",
    To:"PFB",
    Distance:64.9778,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"ERN",
    To:"TFF",
    Distance:676.148,
    Airport:"Azul"
}),
new Routes(
{
    From:"ERS",
    To:"MPA",
    Distance:924.521,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"ERS",
    To:"NDU",
    Distance:586.267,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"ERS",
    To:"OND",
    Distance:539.375,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"ERZ",
    To:"ESB",
    Distance:695.94,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ERZ",
    To:"IST",
    Distance:1050.47,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"ERZ",
    To:"IST",
    Distance:1050.47,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ERZ",
    To:"SAW",
    Distance:1008.63,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ERZ",
    To:"SAW",
    Distance:1008.63,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"ADA",
    Distance:402.276,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"ADB",
    Distance:542.696,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"ADB",
    Distance:542.696,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"ADF",
    Distance:543.183,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"AJI",
    Distance:857.049,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"AYT",
    Distance:406.662,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"BAL",
    Distance:742.589,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"BEG",
    Distance:1162.07,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ESB",
    To:"BGG",
    Distance:666.735,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"BGW",
    Distance:1258.03,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"BJV",
    Distance:562.274,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"BJV",
    Distance:562.274,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"CGN",
    Distance:2324.15,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"CKZ",
    Distance:558.273,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"DIY",
    Distance:670.076,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"DOH",
    Distance:2388.87,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ESB",
    To:"DUS",
    Distance:2365.61,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"EBL",
    Distance:1050.75,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"ESB",
    To:"EBL",
    Distance:1050.75,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"EBL",
    Distance:1050.75,
    Airport:"Zoom Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"ECN",
    Distance:554.768,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"ECN",
    Distance:554.768,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"ERC",
    Distance:558.856,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"ERZ",
    Distance:695.94,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"EZS",
    Distance:566.922,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"FRA",
    Distance:2198.34,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"GNY",
    Distance:591.925,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"GYD",
    Distance:1444.35,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"GZP",
    Distance:430.029,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"GZT",
    Distance:526.341,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"HTY",
    Distance:507.549,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"IGD",
    Distance:924.831,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"IKA",
    Distance:1676.12,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"ESB",
    To:"IKA",
    Distance:1676.12,
    Airport:"Mahan Air"
}),
new Routes(
{
    From:"ESB",
    To:"IST",
    Distance:365.549,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"IST",
    Distance:365.549,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"KCM",
    Distance:447.614,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"KSY",
    Distance:858.528,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"MLX",
    Distance:477.188,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"MQM",
    Distance:737.071,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"MSR",
    Distance:759.554,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"MUC",
    Distance:1912.15,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ESB",
    To:"SAW",
    Distance:323.124,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"SAW",
    Distance:323.124,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"STR",
    Distance:2102.71,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"TEQ",
    Distance:442.747,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"TZX",
    Distance:581.864,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"VAN",
    Distance:907.891,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"VIE",
    Distance:1578.17,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"VIE",
    Distance:1578.17,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESB",
    To:"VKO",
    Distance:1747.84,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ESC",
    To:"DTW",
    Distance:491.769,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ESD",
    To:"FRD",
    Distance:22.3241,
    Airport:"Kenmore Air"
}),
new Routes(
{
    From:"ESL",
    To:"DME",
    Distance:1099.94,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"ESM",
    To:"CLO",
    Distance:459.676,
    Airport:"TAME"
}),
new Routes(
{
    From:"ESM",
    To:"GYE",
    Distance:349.869,
    Airport:"TAME"
}),
new Routes(
{
    From:"ESM",
    To:"UIO",
    Distance:177.545,
    Airport:"TAME"
}),
new Routes(
{
    From:"ESU",
    To:"MRS",
    Distance:1871.11,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ESU",
    To:"ORY",
    Distance:2176.18,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"ESU",
    To:"ORY",
    Distance:2176.18,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ETH",
    To:"HFA",
    Distance:361.265,
    Airport:"Arkia Israel Airlines"
}),
new Routes(
{
    From:"ETH",
    To:"SDV",
    Distance:284.43,
    Airport:"Arkia Israel Airlines"
}),
new Routes(
{
    From:"ETH",
    To:"SDV",
    Distance:284.43,
    Airport:"Israir"
}),
new Routes(
{
    From:"ETH",
    To:"TLV",
    Distance:272.53,
    Airport:"Arkia Israel Airlines"
}),
new Routes(
{
    From:"ETH",
    To:"TLV",
    Distance:272.53,
    Airport:"Israir"
}),
new Routes(
{
    From:"ETZ",
    To:"ALG",
    Distance:1388.64,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ETZ",
    To:"LYS",
    Distance:372.416,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"ETZ",
    To:"MRS",
    Distance:621.883,
    Airport:"Twin Jet"
}),
new Routes(
{
    From:"ETZ",
    To:"NCE",
    Distance:596.574,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"ETZ",
    To:"TLS",
    Distance:703.398,
    Airport:"Twin Jet"
}),
new Routes(
{
    From:"EUG",
    To:"AZA",
    Distance:1562.67,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"EUG",
    To:"DEN",
    Distance:1599.72,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"EUG",
    To:"DEN",
    Distance:1599.72,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EUG",
    To:"LAS",
    Distance:1125.75,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"EUG",
    To:"LAX",
    Distance:1205.25,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"EUG",
    To:"LAX",
    Distance:1205.25,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EUG",
    To:"LAX",
    Distance:1205.25,
    Airport:"US Airways"
}),
new Routes(
{
    From:"EUG",
    To:"OAK",
    Distance:716.853,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"EUG",
    To:"PDX",
    Distance:169.855,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"EUG",
    To:"PDX",
    Distance:169.855,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EUG",
    To:"PDX",
    Distance:169.855,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EUG",
    To:"SEA",
    Distance:376.219,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"EUG",
    To:"SFO",
    Distance:726.795,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EUG",
    To:"SLC",
    Distance:992.445,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"EUN",
    To:"AGA",
    Distance:507.011,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"EUN",
    To:"CMN",
    Distance:877.141,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"EUN",
    To:"LPA",
    Distance:230.623,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"EUN",
    To:"LPA",
    Distance:230.623,
    Airport:"Tropic Air"
}),
new Routes(
{
    From:"EUX",
    To:"SXM",
    Distance:62.074,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"EVE",
    To:"ALC",
    Distance:3519.32,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"EVE",
    To:"ANX",
    Distance:91.6183,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"EVE",
    To:"BOO",
    Distance:166.844,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"EVE",
    To:"OSL",
    Distance:959.971,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"EVE",
    To:"OSL",
    Distance:959.971,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"EVE",
    To:"SVG",
    Distance:1195.48,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"EVE",
    To:"TOS",
    Distance:159.6,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"EVE",
    To:"TRD",
    Distance:616.765,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"EVE",
    To:"TRD",
    Distance:616.765,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"EVG",
    To:"ARN",
    Distance:326.737,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"EVG",
    To:"MXX",
    Distance:121.282,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"AER",
    Distance:519.737,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"AER",
    Distance:519.737,
    Airport:"Air Armenia"
}),
new Routes(
{
    From:"EVN",
    To:"ATH",
    Distance:1779.25,
    Airport:"Air Armenia"
}),
new Routes(
{
    From:"EVN",
    To:"BEY",
    Distance:1057.66,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"CDG",
    Distance:3409.62,
    Airport:"Air Armenia"
}),
new Routes(
{
    From:"EVN",
    To:"CDG",
    Distance:3409.62,
    Airport:"Air France"
}),
new Routes(
{
    From:"EVN",
    To:"CDG",
    Distance:3409.62,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"EVN",
    To:"CEK",
    Distance:2104.14,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"DME",
    Distance:1763.04,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"DNK",
    Distance:1173.58,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"EVN",
    To:"DXB",
    Distance:1944.76,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"EVN",
    To:"FCO",
    Distance:2689.14,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"EVN",
    To:"GOJ",
    Distance:1788.89,
    Airport:"Air Armenia"
}),
new Routes(
{
    From:"EVN",
    To:"GOJ",
    Distance:1788.89,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"IKA",
    Distance:792.847,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"KBP",
    Distance:1545.46,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"KJA",
    Distance:3883.51,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"KRR",
    Distance:691.281,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"KUF",
    Distance:1546.69,
    Airport:"Air Armenia"
}),
new Routes(
{
    From:"EVN",
    To:"KUF",
    Distance:1546.69,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"LED",
    Distance:2396.07,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"LED",
    Distance:2396.07,
    Airport:"Air Armenia"
}),
new Routes(
{
    From:"EVN",
    To:"LED",
    Distance:2396.07,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"MRV",
    Distance:466.157,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"MSQ",
    Distance:1957.91,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"OMS",
    Distance:2692.23,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"EVN",
    To:"OVB",
    Distance:3253.53,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"PRG",
    Distance:2587.13,
    Airport:"Atlantis European Airways"
}),
new Routes(
{
    From:"EVN",
    To:"PRG",
    Distance:2587.13,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"ROV",
    Distance:871.745,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"RTW",
    Distance:1250.25,
    Airport:"Saratov Aviation Division"
}),
new Routes(
{
    From:"EVN",
    To:"SCO",
    Distance:689.962,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"EVN",
    To:"SHJ",
    Distance:1944.88,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"EVN",
    To:"SVO",
    Distance:1832.33,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"SVX",
    Distance:2194.25,
    Airport:"Air Armenia"
}),
new Routes(
{
    From:"EVN",
    To:"SVX",
    Distance:2194.25,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"TJM",
    Distance:2419.28,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"EVN",
    To:"VIE",
    Distance:2374.58,
    Airport:"Atlantis European Airways"
}),
new Routes(
{
    From:"EVN",
    To:"VIE",
    Distance:2374.58,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"VIE",
    Distance:2374.58,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"VKO",
    Distance:1795.59,
    Airport:"Air Armenia"
}),
new Routes(
{
    From:"EVN",
    To:"VKO",
    Distance:1795.59,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"EVN",
    To:"VOG",
    Distance:960.205,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"EVN",
    To:"VOZ",
    Distance:1356.46,
    Airport:"Polet Airlines (Priv)"
}),
new Routes(
{
    From:"EVN",
    To:"WAW",
    Distance:2228.87,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"EVV",
    To:"ATL",
    Distance:563.565,
    Airport:"Air France"
}),
new Routes(
{
    From:"EVV",
    To:"ATL",
    Distance:563.565,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"EVV",
    To:"ATL",
    Distance:563.565,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"EVV",
    To:"ATL",
    Distance:563.565,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"EVV",
    To:"DFW",
    Distance:1032.44,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EVV",
    To:"DFW",
    Distance:1032.44,
    Airport:"US Airways"
}),
new Routes(
{
    From:"EVV",
    To:"DTW",
    Distance:584.478,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"EVV",
    To:"ORD",
    Distance:439.432,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EVV",
    To:"ORD",
    Distance:439.432,
    Airport:"US Airways"
}),
new Routes(
{
    From:"EWB",
    To:"ACK",
    Distance:88.2934,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"EWB",
    To:"HPN",
    Distance:239.303,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"EWB",
    To:"MVY",
    Distance:42.5308,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"EWN",
    To:"ATL",
    Distance:696.309,
    Airport:"Air France"
}),
new Routes(
{
    From:"EWN",
    To:"ATL",
    Distance:696.309,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"EWN",
    To:"ATL",
    Distance:696.309,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"EWN",
    To:"CLT",
    Distance:354.951,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EWN",
    To:"CLT",
    Distance:354.951,
    Airport:"US Airways"
}),
new Routes(
{
    From:"EWR",
    To:"ALB",
    Distance:230.61,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"AMS",
    Distance:5868.46,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"EWR",
    To:"AMS",
    Distance:5868.46,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"AMS",
    Distance:5868.46,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"AMS",
    Distance:5868.46,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"ANU",
    Distance:2875.91,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"ARN",
    Distance:6307.18,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"EWR",
    To:"ARN",
    Distance:6307.18,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"ATL",
    Distance:1199.31,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"EWR",
    To:"ATL",
    Distance:1199.31,
    Airport:"Air France"
}),
new Routes(
{
    From:"EWR",
    To:"ATL",
    Distance:1199.31,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"EWR",
    To:"ATL",
    Distance:1199.31,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"EWR",
    To:"ATL",
    Distance:1199.31,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"ATL",
    Distance:1199.31,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"ATL",
    Distance:1199.31,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"EWR",
    To:"AUA",
    Distance:3160.83,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"AUS",
    Distance:2416.91,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"AUS",
    Distance:2416.91,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"BCN",
    Distance:6176.62,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"BCN",
    Distance:6176.62,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"BDA",
    Distance:1254.08,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"BFS",
    Distance:5098.82,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"BFS",
    Distance:5098.82,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"BHX",
    Distance:5444.83,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"BHX",
    Distance:5444.83,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"BNA",
    Distance:1201.01,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"EWR",
    To:"BNA",
    Distance:1201.01,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"BNA",
    Distance:1201.01,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"BOG",
    Distance:4002.01,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"EWR",
    To:"BOG",
    Distance:4002.01,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"BOM",
    Distance:12545.8,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"EWR",
    To:"BOM",
    Distance:12545.8,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"BON",
    Distance:3227.83,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"BOS",
    Distance:322.308,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"EWR",
    To:"BOS",
    Distance:322.308,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"BQN",
    Distance:2558.11,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"BRU",
    Distance:5907.22,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"BRU",
    Distance:5907.22,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"EWR",
    To:"BRU",
    Distance:5907.22,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"EWR",
    To:"BRU",
    Distance:5907.22,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"BRU",
    Distance:5907.22,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"BTV",
    Distance:428.379,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"BUF",
    Distance:453.225,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"BWI",
    Distance:271.793,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"BZE",
    Distance:2909.06,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"CDG",
    Distance:5856.57,
    Airport:"Air France"
}),
new Routes(
{
    From:"EWR",
    To:"CDG",
    Distance:5856.57,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"EWR",
    To:"CDG",
    Distance:5856.57,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"CDG",
    Distance:5856.57,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"CHS",
    Distance:1011.54,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"CLE",
    Distance:648.815,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"CLT",
    Distance:850.291,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"CLT",
    Distance:850.291,
    Airport:"US Airways"
}),
new Routes(
{
    From:"EWR",
    To:"CLT",
    Distance:850.291,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"CMH",
    Distance:742.987,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"CPH",
    Distance:6206.81,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"EWR",
    To:"CUN",
    Distance:2493.33,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"CVG",
    Distance:913.864,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"EWR",
    To:"CVG",
    Distance:913.864,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"DAY",
    Distance:856.42,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"DCA",
    Distance:319.345,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"DEL",
    Distance:11763.7,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"DEN",
    Distance:2576.43,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"DEN",
    Distance:2576.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"DFW",
    Distance:2204.79,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"DFW",
    Distance:2204.79,
    Airport:"US Airways"
}),
new Routes(
{
    From:"EWR",
    To:"DFW",
    Distance:2204.79,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"DSM",
    Distance:1632.36,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"DTW",
    Distance:783.477,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"EWR",
    To:"DTW",
    Distance:783.477,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"DUB",
    Distance:5124.46,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"DUB",
    Distance:5124.46,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"DUS",
    Distance:6038.44,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"DUS",
    Distance:6038.44,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"EDI",
    Distance:5244.79,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"EDI",
    Distance:5244.79,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"FCO",
    Distance:6890.89,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"FCO",
    Distance:6890.89,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"FLL",
    Distance:1716.84,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"EWR",
    To:"FLL",
    Distance:1716.84,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"FPO",
    Distance:1625.89,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"EWR",
    To:"FRA",
    Distance:6209.57,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"FRA",
    Distance:6209.57,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"GCM",
    Distance:2475.92,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"GLA",
    Distance:5181.99,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"GLA",
    Distance:5181.99,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"GRR",
    Distance:971.465,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"GRU",
    Distance:7683.9,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"GSO",
    Distance:716.446,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"GSP",
    Distance:956.215,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"GUA",
    Distance:3307.39,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"GVA",
    Distance:6224.94,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"EWR",
    To:"GVA",
    Distance:6224.94,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"HAM",
    Distance:6137.53,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"HAM",
    Distance:6137.53,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"HKG",
    Distance:12959.9,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"HKG",
    Distance:12959.9,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"EWR",
    To:"HKG",
    Distance:12959.9,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"HNL",
    Distance:7973.38,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"HOU",
    Distance:2269.03,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"IAD",
    Distance:341.418,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"IAH",
    Distance:2250.55,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"IND",
    Distance:1034.62,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"ITH",
    Distance:276.122,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"JAX",
    Distance:1320.95,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"KEF",
    Distance:4176.91,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"EWR",
    To:"LAS",
    Distance:3576.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"LAX",
    Distance:3941.02,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"LAX",
    Distance:3941.02,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"EWR",
    To:"LHR",
    Distance:5561.44,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"LHR",
    Distance:5561.44,
    Airport:"British Airways"
}),
new Routes(
{
    From:"EWR",
    To:"LHR",
    Distance:5561.44,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"EWR",
    To:"LHR",
    Distance:5561.44,
    Airport:"Finnair"
}),
new Routes(
{
    From:"EWR",
    To:"LHR",
    Distance:5561.44,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"LHR",
    Distance:5561.44,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"LHR",
    Distance:5561.44,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"LHR",
    Distance:5561.44,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"EWR",
    To:"LIM",
    Distance:5869.42,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"LIR",
    Distance:3528.45,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"LIS",
    Distance:5433.27,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"EWR",
    To:"LIS",
    Distance:5433.27,
    Airport:"US Airways"
}),
new Routes(
{
    From:"EWR",
    To:"LIS",
    Distance:5433.27,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MAD",
    Distance:5788.34,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"MAD",
    Distance:5788.34,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MAN",
    Distance:5383.17,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"MAN",
    Distance:5383.17,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MBJ",
    Distance:2493.05,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MCI",
    Distance:1753.02,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MCO",
    Distance:1510.88,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"EWR",
    To:"MCO",
    Distance:1510.88,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MDW",
    Distance:1141.08,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"EWR",
    To:"MDW",
    Distance:1141.08,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MEM",
    Distance:1520.28,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MEX",
    Distance:3342.71,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MHT",
    Distance:336.629,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MIA",
    Distance:1750.59,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MIA",
    Distance:1750.59,
    Airport:"US Airways"
}),
new Routes(
{
    From:"EWR",
    To:"MIA",
    Distance:1750.59,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MKE",
    Distance:1163.47,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MSN",
    Distance:1282.35,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MSP",
    Distance:1618.72,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"EWR",
    To:"MSP",
    Distance:1618.72,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MSY",
    Distance:1877.43,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"EWR",
    To:"MSY",
    Distance:1877.43,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"EWR",
    To:"MSY",
    Distance:1877.43,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"MSY",
    Distance:1877.43,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MSY",
    Distance:1877.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MUC",
    Distance:6502.96,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"MUC",
    Distance:6502.96,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MXP",
    Distance:6436.34,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"MXP",
    Distance:6436.34,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"MYR",
    Distance:886.114,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"NAS",
    Distance:1767.25,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"NRT",
    Distance:10810.1,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"EWR",
    To:"NRT",
    Distance:10810.1,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"OKC",
    Distance:2127.65,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"OMA",
    Distance:1819.76,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"OPO",
    Distance:5360.74,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"EWR",
    To:"OPO",
    Distance:5360.74,
    Airport:"US Airways"
}),
new Routes(
{
    From:"EWR",
    To:"ORD",
    Distance:1154.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"ORD",
    Distance:1154.46,
    Airport:"US Airways"
}),
new Routes(
{
    From:"EWR",
    To:"ORD",
    Distance:1154.46,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"ORF",
    Distance:457.535,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"ORY",
    Distance:5855.57,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"ORY",
    Distance:5855.57,
    Airport:"British Airways"
}),
new Routes(
{
    From:"EWR",
    To:"ORY",
    Distance:5855.57,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"OSL",
    Distance:5932.99,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"EWR",
    To:"OSL",
    Distance:5932.99,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"PBI",
    Distance:1650.38,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"EWR",
    To:"PBI",
    Distance:1650.38,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"PDX",
    Distance:3906.5,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"PEK",
    Distance:10967.9,
    Airport:"Air China"
}),
new Routes(
{
    From:"EWR",
    To:"PEK",
    Distance:10967.9,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"PHL",
    Distance:128.844,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"PHL",
    Distance:128.844,
    Airport:"US Airways"
}),
new Routes(
{
    From:"EWR",
    To:"PHX",
    Distance:3425.34,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"PHX",
    Distance:3425.34,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"PHX",
    Distance:3425.34,
    Airport:"US Airways"
}),
new Routes(
{
    From:"EWR",
    To:"PHX",
    Distance:3425.34,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"PIT",
    Distance:512.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"PLS",
    Distance:2111.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"POP",
    Distance:2352.78,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"POS",
    Distance:3576.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"PTY",
    Distance:3553.59,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"PTY",
    Distance:3553.59,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"PUJ",
    Distance:2521.82,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"PVD",
    Distance:257.324,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"PVG",
    Distance:11860,
    Airport:"Air China"
}),
new Routes(
{
    From:"EWR",
    To:"PVG",
    Distance:11860,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"PVR",
    Distance:3680.16,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"PWM",
    Distance:457.098,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"RDU",
    Distance:669.962,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"RIC",
    Distance:446.634,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"ROC",
    Distance:395.994,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"RSW",
    Distance:1722,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"EWR",
    To:"RSW",
    Distance:1722,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SAL",
    Distance:3358.38,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"EWR",
    To:"SAL",
    Distance:3358.38,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SAN",
    Distance:3895.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SAP",
    Distance:3104.97,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SAT",
    Distance:2522.41,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SAV",
    Distance:1140.64,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SDF",
    Distance:1031.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SDQ",
    Distance:2512.54,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SEA",
    Distance:3854.84,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SEA",
    Distance:3854.84,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SEA",
    Distance:3854.84,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SFO",
    Distance:4118.4,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SFO",
    Distance:4118.4,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"EWR",
    To:"SJD",
    Distance:3842.79,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SJO",
    Distance:3553.65,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SJU",
    Distance:2594.4,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"EWR",
    To:"SJU",
    Distance:2594.4,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SLC",
    Distance:3160.23,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"EWR",
    To:"SNA",
    Distance:3907.8,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SNN",
    Distance:4968.05,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"SNN",
    Distance:4968.05,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"STI",
    Distance:2391.1,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"EWR",
    To:"STL",
    Distance:1400.35,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"STL",
    Distance:1400.35,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"STR",
    Distance:6317.43,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"STR",
    Distance:6317.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"STT",
    Distance:2636.39,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SXM",
    Distance:2731.74,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"SYR",
    Distance:313.103,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"TLV",
    Distance:9140.24,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"TLV",
    Distance:9140.24,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"TPA",
    Distance:1607.27,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"EWR",
    To:"TPA",
    Distance:1607.27,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"TUL",
    Distance:1950.77,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"TXL",
    Distance:6387.39,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EWR",
    To:"TXL",
    Distance:6387.39,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"TYS",
    Distance:1014.28,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"UVF",
    Distance:3261.24,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"XNA",
    Distance:1815.5,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"YEG",
    Distance:3247.99,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"EWR",
    To:"YEG",
    Distance:3247.99,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"YHZ",
    Distance:985.61,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"YOW",
    Distance:529.065,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"YQB",
    Distance:713.719,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"YQM",
    Distance:974.032,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"YTZ",
    Distance:540.341,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"YUL",
    Distance:532.428,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"EWR",
    To:"YUL",
    Distance:532.428,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"YVR",
    Distance:3899.2,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"EWR",
    To:"YVR",
    Distance:3899.2,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"EWR",
    To:"YVR",
    Distance:3899.2,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"YYC",
    Distance:3246.73,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"EWR",
    To:"YYT",
    Distance:1866.04,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"YYZ",
    Distance:558.965,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"EWR",
    To:"YYZ",
    Distance:558.965,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EWR",
    To:"ZRH",
    Distance:6332.28,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"EWR",
    To:"ZRH",
    Distance:6332.28,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EXT",
    To:"AGP",
    Distance:1565.74,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EXT",
    To:"ALC",
    Distance:1402.74,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EXT",
    To:"AMS",
    Distance:591.88,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EXT",
    To:"BHD",
    Distance:462.485,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EXT",
    To:"CDG",
    Distance:468.125,
    Airport:"Air France"
}),
new Routes(
{
    From:"EXT",
    To:"CDG",
    Distance:468.125,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EXT",
    To:"DUB",
    Distance:356.812,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EXT",
    To:"DUS",
    Distance:714.32,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EXT",
    To:"EDI",
    Distance:579.95,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EXT",
    To:"EGC",
    Distance:719.519,
    Airport:"Air France"
}),
new Routes(
{
    From:"EXT",
    To:"EGC",
    Distance:719.519,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EXT",
    To:"FAO",
    Distance:1567.84,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EXT",
    To:"FAO",
    Distance:1567.84,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"EXT",
    To:"GCI",
    Distance:155.674,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EXT",
    To:"GLA",
    Distance:575.247,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EXT",
    To:"ISC",
    Distance:224.513,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"EXT",
    To:"JER",
    Distance:190.791,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EXT",
    To:"MAN",
    Distance:301.478,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EXT",
    To:"MLA",
    Distance:2186.71,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"EXT",
    To:"NQY",
    Distance:116.333,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"EXT",
    To:"PMI",
    Distance:1332.14,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EXT",
    To:"PMI",
    Distance:1332.14,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"EXT",
    To:"PMI",
    Distance:1332.14,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"EXT",
    To:"RNS",
    Distance:320.246,
    Airport:"Air France"
}),
new Routes(
{
    From:"EXT",
    To:"RNS",
    Distance:320.246,
    Airport:"Flybe"
}),
new Routes(
{
    From:"EYK",
    To:"NYA",
    Distance:183.087,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"EYK",
    To:"OVS",
    Distance:306.56,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"EYK",
    To:"SVX",
    Distance:836.439,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"EYK",
    To:"VKO",
    Distance:1858.91,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"EYP",
    To:"BOG",
    Distance:207.004,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"EYP",
    To:"BOG",
    Distance:207.004,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"EYW",
    To:"ATL",
    Distance:1042.34,
    Airport:"Air France"
}),
new Routes(
{
    From:"EYW",
    To:"ATL",
    Distance:1042.34,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"EYW",
    To:"ATL",
    Distance:1042.34,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"EYW",
    To:"FLL",
    Distance:233.49,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EYW",
    To:"LGA",
    Distance:1946.79,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"EYW",
    To:"MCO",
    Distance:433.016,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"EYW",
    To:"MIA",
    Distance:201.93,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EYW",
    To:"MIA",
    Distance:201.93,
    Airport:"US Airways"
}),
new Routes(
{
    From:"EYW",
    To:"MSY",
    Distance:1034.3,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"EYW",
    To:"RSW",
    Distance:220.173,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EYW",
    To:"TPA",
    Distance:387.96,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"EYW",
    To:"TPA",
    Distance:387.96,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"EYW",
    To:"TPA",
    Distance:387.96,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"AMS",
    Distance:11462.2,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"ASU",
    Distance:1069.98,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"ASU",
    Distance:1069.98,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"ASU",
    Distance:1069.98,
    Airport:"TAM Mercosur"
}),
new Routes(
{
    From:"EZE",
    To:"ATL",
    Distance:8075.97,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"EZE",
    To:"BCN",
    Distance:10480.9,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"BOG",
    Distance:4688.88,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"BOG",
    Distance:4688.88,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"EZE",
    To:"BRC",
    Distance:1308.98,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"BSB",
    Distance:2358.15,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"CCC",
    Distance:6715.03,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"EZE",
    To:"CCS",
    Distance:5129.03,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"CCS",
    Distance:5129.03,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"EZE",
    To:"CDG",
    Distance:11100.5,
    Airport:"Air France"
}),
new Routes(
{
    From:"EZE",
    To:"CDG",
    Distance:11100.5,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"COR",
    Distance:656.057,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"CUN",
    Distance:6894.65,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"CWB",
    Distance:1368.75,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"DFW",
    Distance:8533.65,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"DFW",
    Distance:8533.65,
    Airport:"LAN Argentina"
}),
new Routes(
{
    From:"EZE",
    To:"FCO",
    Distance:11155.8,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"FCO",
    Distance:11155.8,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"EZE",
    To:"FLN",
    Distance:1237.34,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"FOR",
    Distance:4021.19,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"FRA",
    Distance:11500.6,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"EZE",
    To:"FTE",
    Distance:2037.53,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"FTE",
    Distance:2037.53,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"GIG",
    Distance:1996.36,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"GIG",
    Distance:1996.36,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"GIG",
    Distance:1996.36,
    Airport:"Emirates"
}),
new Routes(
{
    From:"EZE",
    To:"GIG",
    Distance:1996.36,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"GIG",
    Distance:1996.36,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"GIG",
    Distance:1996.36,
    Airport:"TAM Mercosur"
}),
new Routes(
{
    From:"EZE",
    To:"GRU",
    Distance:1722.73,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"GRU",
    Distance:1722.73,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"GRU",
    Distance:1722.73,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"GRU",
    Distance:1722.73,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"EZE",
    To:"GRU",
    Distance:1722.73,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"GRU",
    Distance:1722.73,
    Airport:"TAM Mercosur"
}),
new Routes(
{
    From:"EZE",
    To:"GRU",
    Distance:1722.73,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"GYE",
    Distance:4250.73,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"IAH",
    Distance:8173.32,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"IGR",
    Distance:1082.59,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"JFK",
    Distance:8534.82,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"JFK",
    Distance:8534.82,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"JFK",
    Distance:8534.82,
    Airport:"LAN Argentina"
}),
new Routes(
{
    From:"EZE",
    To:"LHR",
    Distance:11137.1,
    Airport:"British Airways"
}),
new Routes(
{
    From:"EZE",
    To:"LIM",
    Distance:3152.97,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"LIM",
    Distance:3152.97,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"EZE",
    To:"LIM",
    Distance:3152.97,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"MAD",
    Distance:10086.9,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"MAD",
    Distance:10086.9,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"EZE",
    To:"MAD",
    Distance:10086.9,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"MDZ",
    Distance:972.481,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"MEX",
    Distance:7397.37,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"EZE",
    To:"MIA",
    Distance:7118.92,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"MIA",
    Distance:7118.92,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"MIA",
    Distance:7118.92,
    Airport:"LAN Argentina"
}),
new Routes(
{
    From:"EZE",
    To:"MVD",
    Distance:228.645,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"MVD",
    Distance:228.645,
    Airport:"Air France"
}),
new Routes(
{
    From:"EZE",
    To:"MVD",
    Distance:228.645,
    Airport:"BQB Lineas Aereas"
}),
new Routes(
{
    From:"EZE",
    To:"MVD",
    Distance:228.645,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"POA",
    Distance:874.828,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"PTY",
    Distance:5350.85,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"PUJ",
    Distance:6026.82,
    Airport:"LAN Argentina"
}),
new Routes(
{
    From:"EZE",
    To:"REL",
    Distance:1098.43,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"ROS",
    Distance:297.709,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"SCL",
    Distance:1138.23,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"SCL",
    Distance:1138.23,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"EZE",
    To:"SCL",
    Distance:1138.23,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"SCL",
    Distance:1138.23,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"EZE",
    To:"SCL",
    Distance:1138.23,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"EZE",
    To:"USH",
    Distance:2350.25,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"VVI",
    Distance:1963.67,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"EZE",
    To:"VVI",
    Distance:1963.67,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"EZS",
    To:"ADB",
    Distance:1056.51,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"EZS",
    To:"ESB",
    Distance:566.922,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"EZS",
    To:"IST",
    Distance:932.438,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"EZS",
    To:"IST",
    Distance:932.438,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"EZS",
    To:"SAW",
    Distance:889.999,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"EZS",
    To:"SAW",
    Distance:889.999,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"FAE",
    To:"BGO",
    Distance:696.883,
    Airport:"Atlantic Airways"
}),
new Routes(
{
    From:"FAE",
    To:"BLL",
    Distance:1171.27,
    Airport:"Atlantic Airways"
}),
new Routes(
{
    From:"FAE",
    To:"CPH",
    Distance:1344.07,
    Airport:"Atlantic Airways"
}),
new Routes(
{
    From:"FAE",
    To:"SVG",
    Distance:789.705,
    Airport:"Atlantic Airways"
}),
new Routes(
{
    From:"FAI",
    To:"AET",
    Distance:291.266,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"FAI",
    To:"AKP",
    Distance:407.149,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"FAI",
    To:"ANC",
    Distance:418.946,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"FAI",
    To:"ANC",
    Distance:418.946,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"FAI",
    To:"BTT",
    Distance:286.87,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"FAI",
    To:"FYU",
    Distance:228.797,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"FAI",
    To:"FYU",
    Distance:228.797,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"FAI",
    To:"GAL",
    Distance:430.051,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"FAI",
    To:"GAL",
    Distance:430.051,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"FAI",
    To:"HKB",
    Distance:118.202,
    Airport:"40-Mile Air"
}),
new Routes(
{
    From:"FAI",
    To:"KBC",
    Distance:185.796,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"FAI",
    To:"RBY",
    Distance:360.769,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"FAI",
    To:"RBY",
    Distance:360.769,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"FAI",
    To:"SCC",
    Distance:598.741,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"FAI",
    To:"SCC",
    Distance:598.741,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"FAI",
    To:"SEA",
    Distance:2461.58,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"FAI",
    To:"TAL",
    Distance:202.367,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"FAO",
    To:"AGP",
    Distance:310.778,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"FAO",
    To:"AMS",
    Distance:1969.77,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"FAO",
    To:"ARN",
    Distance:3119.74,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"FAO",
    To:"BFS",
    Distance:1966.34,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FAO",
    To:"BFS",
    Distance:1966.34,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FAO",
    To:"BHD",
    Distance:1963.92,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"FAO",
    To:"BHX",
    Distance:1784.01,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"FAO",
    To:"BHX",
    Distance:1784.01,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"BHX",
    Distance:1784.01,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FAO",
    To:"BLK",
    Distance:1901.63,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FAO",
    To:"BLL",
    Distance:2446.81,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"BOH",
    Distance:1605.97,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"BRE",
    Distance:2204.49,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"BRS",
    Distance:1650.43,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"BRS",
    Distance:1650.43,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FAO",
    To:"BRU",
    Distance:1832.27,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"FAO",
    To:"BRU",
    Distance:1832.27,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"FAO",
    To:"BSL",
    Distance:1728.05,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FAO",
    To:"BVA",
    Distance:1603.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"CDG",
    Distance:1581.25,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"FAO",
    To:"CGN",
    Distance:1950.51,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"FAO",
    To:"CGN",
    Distance:1950.51,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"CPH",
    Distance:2584.22,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"FAO",
    To:"CRL",
    Distance:1792.09,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"DTM",
    Distance:2025.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"DUB",
    Distance:1829.06,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"FAO",
    To:"DUB",
    Distance:1829.06,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"DUS",
    Distance:1967.22,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FAO",
    To:"DUS",
    Distance:1967.22,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FAO",
    To:"EDI",
    Distance:2133.55,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FAO",
    To:"EDI",
    Distance:2133.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"EIN",
    Distance:1918.53,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"EIN",
    Distance:1918.53,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"FAO",
    To:"EMA",
    Distance:1832.81,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"FAO",
    To:"EMA",
    Distance:1832.81,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FAO",
    To:"EMA",
    Distance:1832.81,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"EMA",
    Distance:1832.81,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FAO",
    To:"EXT",
    Distance:1567.84,
    Airport:"Flybe"
}),
new Routes(
{
    From:"FAO",
    To:"FMM",
    Distance:1919.37,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"FRA",
    Distance:1957.35,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FAO",
    To:"FRA",
    Distance:1957.35,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"FAO",
    To:"FRA",
    Distance:1957.35,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FAO",
    To:"GLA",
    Distance:2113.58,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FAO",
    To:"GLA",
    Distance:2113.58,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FAO",
    To:"GLA",
    Distance:2113.58,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FAO",
    To:"GRQ",
    Distance:2115.13,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"FAO",
    To:"GVA",
    Distance:1551.6,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FAO",
    To:"HAJ",
    Distance:2199.9,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FAO",
    To:"HAM",
    Distance:2306.39,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FAO",
    To:"HAM",
    Distance:2306.39,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"FAO",
    To:"HHN",
    Distance:1884.25,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"KIR",
    Distance:1690.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"LBA",
    Distance:1935.41,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"FAO",
    To:"LBA",
    Distance:1935.41,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FAO",
    To:"LBA",
    Distance:1935.41,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"LDY",
    Distance:2005.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"LGW",
    Distance:1687.56,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"FAO",
    To:"LGW",
    Distance:1687.56,
    Airport:"British Airways"
}),
new Routes(
{
    From:"FAO",
    To:"LGW",
    Distance:1687.56,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"FAO",
    To:"LGW",
    Distance:1687.56,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FAO",
    To:"LGW",
    Distance:1687.56,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FAO",
    To:"LHR",
    Distance:1713.51,
    Airport:"British Airways"
}),
new Routes(
{
    From:"FAO",
    To:"LIS",
    Distance:221.669,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"LIS",
    Distance:221.669,
    Airport:"SATA International"
}),
new Routes(
{
    From:"FAO",
    To:"LIS",
    Distance:221.669,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"FAO",
    To:"LIS",
    Distance:221.669,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FAO",
    To:"LPL",
    Distance:1857.2,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"LPL",
    Distance:1857.2,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FAO",
    To:"LTN",
    Distance:1756.69,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"FAO",
    To:"LTN",
    Distance:1756.69,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FAO",
    To:"LTN",
    Distance:1756.69,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FAO",
    To:"LUX",
    Distance:1805.4,
    Airport:"Luxair"
}),
new Routes(
{
    From:"FAO",
    To:"MAN",
    Distance:1869.31,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"FAO",
    To:"MAN",
    Distance:1869.31,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FAO",
    To:"MAN",
    Distance:1869.31,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"MAN",
    Distance:1869.31,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FAO",
    To:"MST",
    Distance:1889.78,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"MUC",
    Distance:2038.21,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FAO",
    To:"MUC",
    Distance:2038.21,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FAO",
    To:"MUC",
    Distance:2038.21,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"FAO",
    To:"MUC",
    Distance:2038.21,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FAO",
    To:"NCL",
    Distance:2059.76,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FAO",
    To:"NCL",
    Distance:2059.76,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FAO",
    To:"NCL",
    Distance:2059.76,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FAO",
    To:"NOC",
    Distance:1879.88,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"NRN",
    Distance:1965.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"OPO",
    Distance:474.781,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"ORK",
    Distance:1649.19,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"FAO",
    To:"ORK",
    Distance:1649.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"ORY",
    Distance:1547.26,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FAO",
    To:"ORY",
    Distance:1547.26,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FAO",
    To:"OSL",
    Distance:2909.78,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"FAO",
    To:"PIK",
    Distance:2072.28,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"PMI",
    Distance:974.432,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FAO",
    To:"RTM",
    Distance:1924.97,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"FAO",
    To:"SEN",
    Distance:1756.41,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FAO",
    To:"SID",
    Distance:2691.94,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"FAO",
    To:"SNN",
    Distance:1745.97,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"FAO",
    To:"SNN",
    Distance:1745.97,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"SOU",
    Distance:1635.69,
    Airport:"Flybe"
}),
new Routes(
{
    From:"FAO",
    To:"STN",
    Distance:1774.34,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FAO",
    To:"STN",
    Distance:1774.34,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FAO",
    To:"STR",
    Distance:1901.94,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"FAO",
    To:"STR",
    Distance:1901.94,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FAO",
    To:"TXL",
    Distance:2390.95,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FAO",
    To:"XRY",
    Distance:172.142,
    Airport:"Luxair"
}),
new Routes(
{
    From:"FAR",
    To:"ATL",
    Distance:1807.96,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FAR",
    To:"AZA",
    Distance:1963.76,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FAR",
    To:"DEN",
    Distance:1008.48,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"FAR",
    To:"DEN",
    Distance:1008.48,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FAR",
    To:"DFW",
    Distance:1559.49,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FAR",
    To:"DFW",
    Distance:1559.49,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FAR",
    To:"LAS",
    Distance:1937.22,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FAR",
    To:"MSP",
    Distance:358.726,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FAR",
    To:"ORD",
    Distance:894.765,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FAR",
    To:"ORD",
    Distance:894.765,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FAR",
    To:"ORD",
    Distance:894.765,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FAR",
    To:"PIE",
    Distance:2445.98,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FAR",
    To:"SFB",
    Distance:2427.4,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FAR",
    To:"SLC",
    Distance:1390.5,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FAT",
    To:"DEN",
    Distance:1354.78,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"FAT",
    To:"DEN",
    Distance:1354.78,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FAT",
    To:"DFW",
    Distance:2109.11,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FAT",
    To:"DFW",
    Distance:2109.11,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FAT",
    To:"GDL",
    Distance:2406.9,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"FAT",
    To:"GDL",
    Distance:2406.9,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FAT",
    To:"GDL",
    Distance:2406.9,
    Airport:"Volaris"
}),
new Routes(
{
    From:"FAT",
    To:"LAS",
    Distance:415.725,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FAT",
    To:"LAS",
    Distance:415.725,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FAT",
    To:"LAX",
    Distance:336.73,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"FAT",
    To:"LAX",
    Distance:336.73,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FAT",
    To:"LAX",
    Distance:336.73,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FAT",
    To:"LAX",
    Distance:336.73,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FAT",
    To:"PDX",
    Distance:1008.91,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"FAT",
    To:"PHX",
    Distance:793.078,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FAT",
    To:"PHX",
    Distance:793.078,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FAT",
    To:"SAN",
    Distance:505.342,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"FAT",
    To:"SEA",
    Distance:1205.66,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"FAT",
    To:"SFO",
    Distance:253.277,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FAT",
    To:"SLC",
    Distance:805.221,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FAV",
    To:"PPT",
    Distance:452.853,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"FAV",
    To:"RGI",
    Distance:247.09,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"FAY",
    To:"ATL",
    Distance:531.228,
    Airport:"Air France"
}),
new Routes(
{
    From:"FAY",
    To:"ATL",
    Distance:531.228,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FAY",
    To:"ATL",
    Distance:531.228,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FAY",
    To:"CLT",
    Distance:189.284,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FAY",
    To:"CLT",
    Distance:189.284,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FAY",
    To:"DCA",
    Distance:459.466,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FAY",
    To:"DCA",
    Distance:459.466,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FAY",
    To:"IAD",
    Distance:457.426,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FBM",
    To:"FIH",
    Distance:1552.62,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"FBM",
    To:"JNB",
    Distance:1619.38,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"FBM",
    To:"JNB",
    Distance:1619.38,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"FBM",
    To:"KGA",
    Distance:842.421,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"FBM",
    To:"MJM",
    Distance:747.853,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"FBM",
    To:"NBO",
    Distance:1542.58,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FBM",
    To:"NBO",
    Distance:1542.58,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"FBM",
    To:"NLA",
    Distance:199.123,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FBM",
    To:"NLA",
    Distance:199.123,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FBM",
    To:"NLA",
    Distance:199.123,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"FBS",
    To:"LKE",
    Distance:112.61,
    Airport:"Kenmore Air"
}),
new Routes(
{
    From:"FBS",
    To:"RCE",
    Distance:13.5585,
    Airport:"Kenmore Air"
}),
new Routes(
{
    From:"FCA",
    To:"DEN",
    Distance:1209.83,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FCA",
    To:"LAS",
    Distance:1361.94,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FCA",
    To:"MSP",
    Distance:1646.06,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FCA",
    To:"SEA",
    Distance:607.889,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"FCA",
    To:"SLC",
    Distance:855.571,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FCO",
    To:"ADD",
    Distance:4481.06,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"AGP",
    Distance:1547.93,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"AGP",
    Distance:1547.93,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"AGP",
    Distance:1547.93,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"AHO",
    Distance:355.907,
    Airport:"Excel Airways"
}),
new Routes(
{
    From:"FCO",
    To:"ALC",
    Distance:1157.19,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"ALC",
    Distance:1157.19,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"ALG",
    Distance:962.78,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"FCO",
    To:"ALG",
    Distance:962.78,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"AMM",
    Distance:2382.38,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"AMM",
    Distance:2382.38,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FCO",
    To:"AMM",
    Distance:2382.38,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"FCO",
    To:"AMS",
    Distance:1296.78,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"AMS",
    Distance:1296.78,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"AMS",
    Distance:1296.78,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"AMS",
    Distance:1296.78,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"AOI",
    Distance:220.989,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"ARN",
    Distance:2022.47,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"FCO",
    To:"ARN",
    Distance:2022.47,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"FCO",
    To:"ATH",
    Distance:1085.51,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"ATH",
    Distance:1085.51,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"ATH",
    Distance:1085.51,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"ATH",
    Distance:1085.51,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FCO",
    To:"ATH",
    Distance:1085.51,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"ATL",
    Distance:8085.96,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"FCO",
    To:"ATL",
    Distance:8085.96,
    Airport:"Air France"
}),
new Routes(
{
    From:"FCO",
    To:"ATL",
    Distance:8085.96,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"ATL",
    Distance:8085.96,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FCO",
    To:"ATL",
    Distance:8085.96,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"AUH",
    Distance:4339.25,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"AUH",
    Distance:4339.25,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"FCO",
    To:"BCN",
    Distance:847.868,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"BCN",
    Distance:847.868,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"BCN",
    Distance:847.868,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"BCN",
    Distance:847.868,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FCO",
    To:"BDS",
    Distance:493.014,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"BEG",
    Distance:732.616,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"BEG",
    Distance:732.616,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"FCO",
    To:"BEG",
    Distance:732.616,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"BEY",
    Distance:2216.87,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"BEY",
    Distance:2216.87,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"BGO",
    Distance:2110.99,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"FCO",
    To:"BHX",
    Distance:1583.12,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"FCO",
    To:"BIO",
    Distance:1251.23,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"BKK",
    Distance:8876.08,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"FCO",
    To:"BLQ",
    Distance:313.527,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"BOD",
    Distance:1100.15,
    Airport:"Air France"
}),
new Routes(
{
    From:"FCO",
    To:"BOD",
    Distance:1100.15,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"FCO",
    To:"BOD",
    Distance:1100.15,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"BOS",
    Distance:6569.28,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"BOS",
    Distance:6569.28,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FCO",
    To:"BRI",
    Distance:382.912,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"BRS",
    Distance:1557.4,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"BRU",
    Distance:1172.59,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"BRU",
    Distance:1172.59,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"BRU",
    Distance:1172.59,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"BRU",
    Distance:1172.59,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"BRU",
    Distance:1172.59,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"BRU",
    Distance:1172.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FCO",
    To:"BSL",
    Distance:743.396,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"FCO",
    To:"BSL",
    Distance:743.396,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"BUD",
    Distance:835.733,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"BUD",
    Distance:835.733,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"FCO",
    To:"BUD",
    Distance:835.733,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"FCO",
    To:"BZO",
    Distance:522.912,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"BZO",
    Distance:522.912,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"FCO",
    To:"CAG",
    Distance:391.829,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"CAI",
    Distance:2150.17,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"CAI",
    Distance:2150.17,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"FCO",
    To:"CCS",
    Distance:8335.59,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"CDG",
    Distance:1100.97,
    Airport:"Air France"
}),
new Routes(
{
    From:"FCO",
    To:"CDG",
    Distance:1100.97,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"CDG",
    Distance:1100.97,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"FCO",
    To:"CGN",
    Distance:1080.55,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"FCO",
    To:"CLT",
    Distance:7726.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"CLT",
    Distance:7726.43,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FCO",
    To:"CMB",
    Distance:7628.79,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"CMB",
    Distance:7628.79,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"CMB",
    Distance:7628.79,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"CMN",
    Distance:1977.32,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"CMN",
    Distance:1977.32,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"FCO",
    To:"CPH",
    Distance:1536.27,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"CPH",
    Distance:1536.27,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"FCO",
    To:"CPH",
    Distance:1536.27,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"FCO",
    To:"CPH",
    Distance:1536.27,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"CTA",
    Distance:539.153,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"CTA",
    Distance:539.153,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"CTA",
    Distance:539.153,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"CTA",
    Distance:539.153,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"CTA",
    Distance:539.153,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FCO",
    To:"CTA",
    Distance:539.153,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FCO",
    To:"DAC",
    Distance:7319.55,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"DBV",
    Distance:502.792,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"DEL",
    Distance:5932,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"DEL",
    Distance:5932,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"DME",
    Distance:2394.06,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"DME",
    Distance:2394.06,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"DOH",
    Distance:4035.23,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"FCO",
    To:"DUB",
    Distance:1885.86,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"FCO",
    To:"DUS",
    Distance:1134.21,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FCO",
    To:"DUS",
    Distance:1134.21,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FCO",
    To:"DUS",
    Distance:1134.21,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FCO",
    To:"DXB",
    Distance:4342.81,
    Airport:"Emirates"
}),
new Routes(
{
    From:"FCO",
    To:"EVN",
    Distance:2689.14,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"EWR",
    Distance:6890.89,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FCO",
    To:"EWR",
    Distance:6890.89,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"EZE",
    Distance:11155.8,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"FCO",
    To:"EZE",
    Distance:11155.8,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"FLR",
    Distance:238.753,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"FRA",
    Distance:957.859,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"FRA",
    Distance:957.859,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"FRA",
    Distance:957.859,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FCO",
    To:"FUE",
    Distance:2783.51,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FCO",
    To:"GDN",
    Distance:1470.89,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"FCO",
    To:"GIG",
    Distance:9171.55,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"GLA",
    Distance:1973.52,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FCO",
    To:"GOA",
    Distance:401.088,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"GOT",
    Distance:1763.37,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"FCO",
    To:"GRU",
    Distance:9433.12,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"GVA",
    Distance:695.445,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"GVA",
    Distance:695.445,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"FCO",
    To:"GVA",
    Distance:695.445,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"FCO",
    To:"GVA",
    Distance:695.445,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"GYD",
    Distance:3143.15,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"GYD",
    Distance:3143.15,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"HAJ",
    Distance:1200.54,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"FCO",
    To:"HAM",
    Distance:1325.65,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"FCO",
    To:"HAM",
    Distance:1325.65,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"HAV",
    Distance:8694.82,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"HAV",
    Distance:8694.82,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"FCO",
    To:"HEL",
    Distance:2232.98,
    Airport:"Finnair"
}),
new Routes(
{
    From:"FCO",
    To:"HEL",
    Distance:2232.98,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"FCO",
    To:"HKG",
    Distance:9282.13,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"FCO",
    To:"IAD",
    Distance:7232.25,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"IAS",
    Distance:1354.55,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"IAS",
    Distance:1354.55,
    Airport:"Tarom"
}),
new Routes(
{
    From:"FCO",
    To:"ICN",
    Distance:8964.48,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"ICN",
    Distance:8964.48,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"FCO",
    To:"IKA",
    Distance:3423.5,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"IKA",
    Distance:3423.5,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"FCO",
    To:"IST",
    Distance:1382.67,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"IST",
    Distance:1382.67,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"JED",
    Distance:3362.05,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"JED",
    Distance:3362.05,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"JFK",
    Distance:6866.32,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"JFK",
    Distance:6866.32,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"JFK",
    Distance:6866.32,
    Airport:"British Airways"
}),
new Routes(
{
    From:"FCO",
    To:"JFK",
    Distance:6866.32,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FCO",
    To:"JFK",
    Distance:6866.32,
    Airport:"Finnair"
}),
new Routes(
{
    From:"FCO",
    To:"JFK",
    Distance:6866.32,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"JFK",
    Distance:6866.32,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FCO",
    To:"KBP",
    Distance:1715.94,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"KBP",
    Distance:1715.94,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"KIV",
    Distance:1439.45,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"FCO",
    To:"KIV",
    Distance:1439.45,
    Airport:"Carpatair"
}),
new Routes(
{
    From:"FCO",
    To:"KIX",
    Distance:9738.94,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"KWI",
    Distance:3490.48,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"KWI",
    Distance:3490.48,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"FCO",
    To:"LAX",
    Distance:10203.3,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"LAX",
    Distance:10203.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FCO",
    To:"LBA",
    Distance:1689.8,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FCO",
    To:"LCY",
    Distance:1420.97,
    Airport:"Air France"
}),
new Routes(
{
    From:"FCO",
    To:"LCY",
    Distance:1420.97,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"LED",
    Distance:2350.63,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"LED",
    Distance:2350.63,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"LED",
    Distance:2350.63,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"LGW",
    Distance:1405.86,
    Airport:"British Airways"
}),
new Routes(
{
    From:"FCO",
    To:"LGW",
    Distance:1405.86,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"FCO",
    To:"LGW",
    Distance:1405.86,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"LHR",
    Distance:1444.62,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"LHR",
    Distance:1444.62,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"LHR",
    Distance:1444.62,
    Airport:"British Airways"
}),
new Routes(
{
    From:"FCO",
    To:"LIN",
    Distance:470.219,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"LIN",
    Distance:470.219,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"LIS",
    Distance:1839.76,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"LIS",
    Distance:1839.76,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"FCO",
    To:"LIS",
    Distance:1839.76,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FCO",
    To:"LOS",
    Distance:4015.14,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"LRM",
    Distance:7935,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"LRM",
    Distance:7935,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FCO",
    To:"LTN",
    Distance:1470.61,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"FCO",
    To:"LUX",
    Distance:987.339,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"LUX",
    Distance:987.339,
    Airport:"Luxair"
}),
new Routes(
{
    From:"FCO",
    To:"LUZ",
    Distance:1316.92,
    Airport:"Carpatair"
}),
new Routes(
{
    From:"FCO",
    To:"LWO",
    Distance:1268.45,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"FCO",
    To:"LYS",
    Distance:721.16,
    Airport:"Air France"
}),
new Routes(
{
    From:"FCO",
    To:"LYS",
    Distance:721.16,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"FCO",
    To:"LYS",
    Distance:721.16,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"LYS",
    Distance:721.16,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"MAD",
    Distance:1330.49,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"FCO",
    To:"MAD",
    Distance:1330.49,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"MAD",
    Distance:1330.49,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"MAN",
    Distance:1677.62,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FCO",
    To:"MIA",
    Distance:8329.91,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"MIA",
    Distance:8329.91,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FCO",
    To:"MLA",
    Distance:688.756,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"FCO",
    To:"MLA",
    Distance:688.756,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"MLA",
    Distance:688.756,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"FCO",
    To:"MLA",
    Distance:688.756,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FCO",
    To:"MPL",
    Distance:705.087,
    Airport:"Air France"
}),
new Routes(
{
    From:"FCO",
    To:"MPL",
    Distance:705.087,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"MRS",
    Distance:603.475,
    Airport:"Air France"
}),
new Routes(
{
    From:"FCO",
    To:"MRS",
    Distance:603.475,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"MSQ",
    Distance:1778.12,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"MUC",
    Distance:729.159,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"MUC",
    Distance:729.159,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FCO",
    To:"MXP",
    Distance:510.911,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"MXP",
    Distance:510.911,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"MXP",
    Distance:510.911,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"MXP",
    Distance:510.911,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FCO",
    To:"MXP",
    Distance:510.911,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"NAP",
    Distance:198.562,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"NCE",
    Distance:459.905,
    Airport:"Air France"
}),
new Routes(
{
    From:"FCO",
    To:"NCE",
    Distance:459.905,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"NCE",
    Distance:459.905,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"NCL",
    Distance:1788.33,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FCO",
    To:"NRT",
    Distance:9905.08,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"NTE",
    Distance:1247.74,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"NTE",
    Distance:1247.74,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"NTE",
    Distance:1247.74,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FCO",
    To:"NTE",
    Distance:1247.74,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"OLB",
    Distance:249.368,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FCO",
    To:"OPO",
    Distance:1739.32,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"OPO",
    Distance:1739.32,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"FCO",
    To:"ORD",
    Distance:7742.08,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"ORD",
    Distance:7742.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"ORD",
    Distance:7742.08,
    Airport:"British Airways"
}),
new Routes(
{
    From:"FCO",
    To:"ORD",
    Distance:7742.08,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FCO",
    To:"ORD",
    Distance:7742.08,
    Airport:"Finnair"
}),
new Routes(
{
    From:"FCO",
    To:"ORD",
    Distance:7742.08,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"ORD",
    Distance:7742.08,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FCO",
    To:"ORN",
    Distance:1309.19,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"ORY",
    Distance:1089.85,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"ORY",
    Distance:1089.85,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"ORY",
    Distance:1089.85,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"OSL",
    Distance:2046.32,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"FCO",
    To:"OSL",
    Distance:2046.32,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"FCO",
    To:"OTP",
    Distance:1162.76,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"OTP",
    Distance:1162.76,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"FCO",
    To:"OTP",
    Distance:1162.76,
    Airport:"Tarom"
}),
new Routes(
{
    From:"FCO",
    To:"PEK",
    Distance:8146.42,
    Airport:"Air China"
}),
new Routes(
{
    From:"FCO",
    To:"PHL",
    Distance:7016.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"PHL",
    Distance:7016.87,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FCO",
    To:"PMO",
    Distance:409.767,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"PMO",
    Distance:409.767,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"PMO",
    Distance:409.767,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FCO",
    To:"PMO",
    Distance:409.767,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"PRG",
    Distance:935.403,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"PRG",
    Distance:935.403,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"PRG",
    Distance:935.403,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"PRG",
    Distance:935.403,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"PRG",
    Distance:935.403,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"FCO",
    To:"PRG",
    Distance:935.403,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"FCO",
    To:"PRG",
    Distance:935.403,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"PSA",
    Distance:258.24,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"PVG",
    Distance:9169.18,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"PVG",
    Distance:9169.18,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"REG",
    Distance:506.249,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"REG",
    Distance:506.249,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"RIX",
    Distance:1877.22,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"FCO",
    To:"RIX",
    Distance:1877.22,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"RTM",
    Distance:1273.86,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"FCO",
    To:"RUH",
    Distance:3670.59,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"RUH",
    Distance:3670.59,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"RZE",
    Distance:1190.87,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"FCO",
    To:"SAW",
    Distance:1425.09,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"SIN",
    Distance:10051.9,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"SKG",
    Distance:908.095,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"SKG",
    Distance:908.095,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"SKP",
    Distance:775.56,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"SOF",
    Distance:922.826,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"SOF",
    Distance:922.826,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"FCO",
    To:"SOF",
    Distance:922.826,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"FCO",
    To:"SPU",
    Distance:382.92,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"STR",
    Distance:801.324,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"FCO",
    To:"SUF",
    Distance:467.134,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"SUF",
    Distance:467.134,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FCO",
    To:"SVO",
    Distance:2398.04,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"SVO",
    Distance:2398.04,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"SVX",
    Distance:3792.33,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"SXB",
    Distance:831.456,
    Airport:"Air France"
}),
new Routes(
{
    From:"FCO",
    To:"SXB",
    Distance:831.456,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"FCO",
    To:"SXB",
    Distance:831.456,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"SXF",
    Distance:1179.83,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"TAS",
    Distance:4656.95,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"FCO",
    To:"TBS",
    Distance:2697.05,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"TGD",
    Distance:580.9,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"TGD",
    Distance:580.9,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"TIA",
    Distance:622.341,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"TIA",
    Distance:622.341,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"TIP",
    Distance:1019.58,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"FCO",
    To:"TIP",
    Distance:1019.58,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"TLS",
    Distance:911.545,
    Airport:"Air France"
}),
new Routes(
{
    From:"FCO",
    To:"TLS",
    Distance:911.545,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"TLS",
    Distance:911.545,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"TLV",
    Distance:2278.28,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"TLV",
    Distance:2278.28,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"TLV",
    Distance:2278.28,
    Airport:"Israir"
}),
new Routes(
{
    From:"FCO",
    To:"TLV",
    Distance:2278.28,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FCO",
    To:"TRN",
    Distance:529.295,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"TRN",
    Distance:529.295,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"TRS",
    Distance:457.932,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"TUN",
    Distance:577.594,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"TUN",
    Distance:577.594,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"FCO",
    To:"TXL",
    Distance:1198.46,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FCO",
    To:"TXL",
    Distance:1198.46,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"FCO",
    To:"TXL",
    Distance:1198.46,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FCO",
    To:"VCE",
    Distance:411.591,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"VCE",
    Distance:411.591,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FCO",
    To:"VIE",
    Distance:778.87,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FCO",
    To:"VIE",
    Distance:778.87,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"VIE",
    Distance:778.87,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"VIE",
    Distance:778.87,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FCO",
    To:"VIE",
    Distance:778.87,
    Airport:"Niki"
}),
new Routes(
{
    From:"FCO",
    To:"VKO",
    Distance:2368.49,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"VLC",
    Distance:1103.48,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"VLC",
    Distance:1103.48,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"VLC",
    Distance:1103.48,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FCO",
    To:"VNO",
    Distance:1716.67,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"FCO",
    To:"VRN",
    Distance:414.101,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"WAW",
    Distance:1326.19,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"WAW",
    Distance:1326.19,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"FCO",
    To:"YUL",
    Distance:6584.93,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"FCO",
    To:"YYZ",
    Distance:7086.15,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"FCO",
    To:"YYZ",
    Distance:7086.15,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"FCO",
    To:"YYZ",
    Distance:7086.15,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"YYZ",
    Distance:7086.15,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FCO",
    To:"YYZ",
    Distance:7086.15,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FCO",
    To:"ZRH",
    Distance:693.998,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FCO",
    To:"ZRH",
    Distance:693.998,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"FCO",
    To:"ZRH",
    Distance:693.998,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"FDE",
    To:"BGO",
    Distance:125.675,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"FDE",
    To:"OSL",
    Distance:318.651,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"FDF",
    To:"BGI",
    Distance:234.598,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"FDF",
    To:"CAY",
    Distance:1440.63,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"FDF",
    To:"CAY",
    Distance:1440.63,
    Airport:"Air France"
}),
new Routes(
{
    From:"FDF",
    To:"CDG",
    Distance:6869.66,
    Airport:"XL Airways France"
}),
new Routes(
{
    From:"FDF",
    To:"HAV",
    Distance:2435.41,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"FDF",
    To:"MIA",
    Distance:2362.27,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FDF",
    To:"MIA",
    Distance:2362.27,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FDF",
    To:"ORY",
    Distance:6850.15,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"FDF",
    To:"ORY",
    Distance:6850.15,
    Airport:"Air France"
}),
new Routes(
{
    From:"FDF",
    To:"ORY",
    Distance:6850.15,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"FDF",
    To:"PTP",
    Distance:194.602,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"FDF",
    To:"PTP",
    Distance:194.602,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"FDF",
    To:"PTP",
    Distance:194.602,
    Airport:"Air France"
}),
new Routes(
{
    From:"FDF",
    To:"PTP",
    Distance:194.602,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"FDF",
    To:"SDQ",
    Distance:1017.43,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"FDF",
    To:"SDQ",
    Distance:1017.43,
    Airport:"Air France"
}),
new Routes(
{
    From:"FDF",
    To:"SJU",
    Distance:683.332,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FDF",
    To:"SJU",
    Distance:683.332,
    Airport:"Seaborne Airlines"
}),
new Routes(
{
    From:"FDF",
    To:"SLU",
    Distance:63.4802,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"FDF",
    To:"SLU",
    Distance:63.4802,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"FDF",
    To:"SLU",
    Distance:63.4802,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"FDF",
    To:"SLU",
    Distance:63.4802,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"FDF",
    To:"YUL",
    Distance:3635.65,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"FDH",
    To:"AYT",
    Distance:2110.52,
    Airport:"Germania"
}),
new Routes(
{
    From:"FDH",
    To:"CGN",
    Distance:394.564,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"FDH",
    To:"DUS",
    Distance:448.45,
    Airport:"Intersky"
}),
new Routes(
{
    From:"FDH",
    To:"EBA",
    Distance:549.044,
    Airport:"Intersky"
}),
new Routes(
{
    From:"FDH",
    To:"FRA",
    Distance:271.286,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FDH",
    To:"HAM",
    Distance:663.466,
    Airport:"Intersky"
}),
new Routes(
{
    From:"FDH",
    To:"IBZ",
    Distance:1178.06,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FDH",
    To:"IST",
    Distance:1700.2,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"FDH",
    To:"OLB",
    Distance:753.085,
    Airport:"Intersky"
}),
new Routes(
{
    From:"FDH",
    To:"PMI",
    Distance:1054.05,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FDH",
    To:"PMI",
    Distance:1054.05,
    Airport:"Germania"
}),
new Routes(
{
    From:"FDH",
    To:"TXL",
    Distance:606.391,
    Airport:"Intersky"
}),
new Routes(
{
    From:"FDH",
    To:"ZAD",
    Distance:600.471,
    Airport:"Intersky"
}),
new Routes(
{
    From:"FEG",
    To:"DME",
    Distance:2982.37,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"FEG",
    To:"DME",
    Distance:2982.37,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"FEG",
    To:"KRR",
    Distance:2693.36,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"FEG",
    To:"KZN",
    Distance:2360.73,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"FEG",
    To:"LED",
    Distance:3572.81,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"FEG",
    To:"OVB",
    Distance:1817.56,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"FEG",
    To:"TAS",
    Distance:230.191,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"FEN",
    To:"NAT",
    Distance:387.552,
    Airport:"Azul"
}),
new Routes(
{
    From:"FEN",
    To:"REC",
    Distance:549.559,
    Airport:"Azul"
}),
new Routes(
{
    From:"FEN",
    To:"REC",
    Distance:549.559,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"FEZ",
    To:"BCN",
    Distance:1027.73,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FEZ",
    To:"BCN",
    Distance:1027.73,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FEZ",
    To:"BCN",
    Distance:1027.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FEZ",
    To:"BGY",
    Distance:1805.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FEZ",
    To:"BVA",
    Distance:1822.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FEZ",
    To:"CMN",
    Distance:249.658,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"FEZ",
    To:"CRL",
    Distance:1991.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FEZ",
    To:"EBU",
    Distance:1513.05,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FEZ",
    To:"EIN",
    Distance:2119.34,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FEZ",
    To:"FNI",
    Distance:1360.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FEZ",
    To:"HHN",
    Distance:2043.12,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FEZ",
    To:"MPL",
    Distance:1321.98,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"FEZ",
    To:"MRS",
    Distance:1376.36,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FEZ",
    To:"NRN",
    Distance:2159.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FEZ",
    To:"NTE",
    Distance:1497.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FEZ",
    To:"ORY",
    Distance:1753.79,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"FEZ",
    To:"PSA",
    Distance:1712.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FEZ",
    To:"STN",
    Distance:2040.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FIH",
    To:"BRU",
    Distance:6236.12,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"FIH",
    To:"BRU",
    Distance:6236.12,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"FIH",
    To:"BRU",
    Distance:6236.12,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FIH",
    To:"BRU",
    Distance:6236.12,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FIH",
    To:"BZV",
    Distance:25.9464,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FIH",
    To:"BZV",
    Distance:25.9464,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FIH",
    To:"BZV",
    Distance:25.9464,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"FIH",
    To:"BZV",
    Distance:25.9464,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"FIH",
    To:"CDG",
    Distance:6067.55,
    Airport:"Air France"
}),
new Routes(
{
    From:"FIH",
    To:"DLA",
    Distance:1129.27,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"FIH",
    To:"DLA",
    Distance:1129.27,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"FIH",
    To:"DLA",
    Distance:1129.27,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"FIH",
    To:"DLA",
    Distance:1129.27,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FIH",
    To:"DLA",
    Distance:1129.27,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FIH",
    To:"FBM",
    Distance:1552.62,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"FIH",
    To:"FKI",
    Distance:1208.75,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"FIH",
    To:"IST",
    Distance:5224.28,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"FIH",
    To:"JNB",
    Distance:2776.39,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"FIH",
    To:"KGA",
    Distance:795.943,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"FIH",
    To:"KND",
    Distance:1173.28,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"FIH",
    To:"LBV",
    Distance:859.816,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FIH",
    To:"MDK",
    Distance:583.187,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"FIH",
    To:"MJM",
    Distance:920.026,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"FIH",
    To:"NBO",
    Distance:2409.76,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FIH",
    To:"NBO",
    Distance:2409.76,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"FIH",
    To:"TSH",
    Distance:634.679,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"FJR",
    To:"AZI",
    Distance:203.154,
    Airport:"VRG Linhas Aereas"
}),
new Routes(
{
    From:"FKB",
    To:"ACE",
    Distance:2875.41,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FKB",
    To:"AGP",
    Distance:1688.62,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FKB",
    To:"ALC",
    Distance:1357.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FKB",
    To:"BRI",
    Distance:1088.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FKB",
    To:"CAG",
    Distance:1062.28,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FKB",
    To:"CIA",
    Distance:852.318,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FKB",
    To:"DME",
    Distance:2146.83,
    Airport:"Germania"
}),
new Routes(
{
    From:"FKB",
    To:"GRO",
    Distance:870.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FKB",
    To:"HAM",
    Distance:555.495,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"FKB",
    To:"LPA",
    Distance:3066.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FKB",
    To:"OPO",
    Distance:1556.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FKB",
    To:"PMI",
    Distance:1110.44,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FKB",
    To:"PMI",
    Distance:1110.44,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FKB",
    To:"SKG",
    Distance:1489.2,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FKB",
    To:"STN",
    Distance:654.728,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FKB",
    To:"TFS",
    Distance:3123.35,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FKB",
    To:"TPS",
    Distance:1259.35,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FKB",
    To:"TXL",
    Distance:557.72,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FKB",
    To:"TXL",
    Distance:557.72,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"FKB",
    To:"ZAD",
    Distance:760.771,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FKI",
    To:"FIH",
    Distance:1208.75,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"FKI",
    To:"GOM",
    Distance:515.105,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"FKL",
    To:"CLE",
    Distance:165.988,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FKL",
    To:"DUJ",
    Distance:83.3684,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FKQ",
    To:"KNG",
    Distance:177.863,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"FKQ",
    To:"MKW",
    Distance:300.153,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"FKQ",
    To:"SOQ",
    Distance:255.669,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"FKS",
    To:"CTS",
    Distance:626.15,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FKS",
    To:"CTS",
    Distance:626.15,
    Airport:"Hokkaido International Airlines"
}),
new Routes(
{
    From:"FKS",
    To:"ITM",
    Distance:524.689,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FKS",
    To:"ITM",
    Distance:524.689,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"FLA",
    To:"BOG",
    Distance:380.176,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"FLA",
    To:"BOG",
    Distance:380.176,
    Airport:"SATENA"
}),
new Routes(
{
    From:"FLG",
    To:"PHX",
    Distance:192.292,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FLG",
    To:"PHX",
    Distance:192.292,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FLL",
    To:"ACY",
    Distance:1576.11,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"ALB",
    Distance:1942.11,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"ARN",
    Distance:7962.14,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"FLL",
    To:"ATL",
    Distance:936.441,
    Airport:"Air France"
}),
new Routes(
{
    From:"FLL",
    To:"ATL",
    Distance:936.441,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"FLL",
    To:"ATL",
    Distance:936.441,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FLL",
    To:"ATL",
    Distance:936.441,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FLL",
    To:"ATL",
    Distance:936.441,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"ATL",
    Distance:936.441,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"ATL",
    Distance:936.441,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"ATL",
    Distance:936.441,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"FLL",
    To:"AUA",
    Distance:1844.37,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"AUS",
    Distance:1775.67,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"FLL",
    To:"AUS",
    Distance:1775.67,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"AUS",
    Distance:1775.67,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"AVL",
    Distance:1065.81,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FLL",
    To:"AXM",
    Distance:2448.97,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"BDL",
    Distance:1891.89,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"BDL",
    Distance:1891.89,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"BIM",
    Distance:98.0332,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"BNA",
    Distance:1277.94,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"BOG",
    Distance:2460.82,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"FLL",
    To:"BOG",
    Distance:2460.82,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"BOG",
    Distance:2460.82,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"BOG",
    Distance:2460.82,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FLL",
    To:"BOS",
    Distance:1994.31,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"BOS",
    Distance:1994.31,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"BQN",
    Distance:1581.28,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"BUF",
    Distance:1880.06,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"BWI",
    Distance:1492.71,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"FLL",
    To:"BWI",
    Distance:1492.71,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"BWI",
    Distance:1492.71,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"CLE",
    Distance:1712.73,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"CLT",
    Distance:1019.28,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"CLT",
    Distance:1019.28,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FLL",
    To:"CMH",
    Distance:1569.11,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"CPH",
    Distance:7811.78,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"FLL",
    To:"CTG",
    Distance:1805.19,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"CUN",
    Distance:884.766,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"CUN",
    Distance:884.766,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"CVG",
    Distance:1503.08,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FLL",
    To:"DCA",
    Distance:1450.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"DCA",
    Distance:1450.48,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"DCA",
    Distance:1450.48,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FLL",
    To:"DEN",
    Distance:2739.04,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"DEN",
    Distance:2739.04,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"DEN",
    Distance:2739.04,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"DEN",
    Distance:2739.04,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"DFW",
    Distance:1798.92,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"DFW",
    Distance:1798.92,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"DFW",
    Distance:1798.92,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FLL",
    To:"DTW",
    Distance:1818.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FLL",
    To:"DTW",
    Distance:1818.3,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"ELH",
    Distance:353.676,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"EWR",
    Distance:1716.84,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"EWR",
    Distance:1716.84,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"EYW",
    Distance:233.49,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"FPO",
    Distance:154.971,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"FLL",
    To:"FPO",
    Distance:154.971,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"GGT",
    Distance:513.778,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"GHB",
    Distance:392.863,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"GSP",
    Distance:1000.77,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FLL",
    To:"GUA",
    Distance:1672.25,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"HOU",
    Distance:1537.82,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"FLL",
    To:"HOU",
    Distance:1537.82,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"HPN",
    Distance:1769.63,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"IAD",
    Distance:1453.26,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"IAG",
    Distance:1897.34,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"IAH",
    Distance:1551.54,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"IND",
    Distance:1620.86,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"ISP",
    Distance:1761.45,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"JAX",
    Distance:514.091,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"JFK",
    Distance:1723.29,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FLL",
    To:"JFK",
    Distance:1723.29,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"KIN",
    Distance:968.863,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"KIN",
    Distance:968.863,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"KIN",
    Distance:968.863,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"LAS",
    Distance:3492.12,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"LAS",
    Distance:3492.12,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"LAX",
    Distance:3763.23,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"LAX",
    Distance:3763.23,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"LAX",
    Distance:3763.23,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"FLL",
    To:"LBE",
    Distance:1580.85,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"LEX",
    Distance:1394.44,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FLL",
    To:"LGA",
    Distance:1734.58,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FLL",
    To:"LGA",
    Distance:1734.58,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"LGA",
    Distance:1734.58,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"LIM",
    Distance:4248.65,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"LIM",
    Distance:4248.65,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"MBJ",
    Distance:872.521,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"MBJ",
    Distance:872.521,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"MBJ",
    Distance:872.521,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"MCI",
    Distance:1999.54,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"MCO",
    Distance:285.9,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"MCO",
    Distance:285.9,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"MDE",
    Distance:2269.89,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"MDE",
    Distance:2269.89,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"MDW",
    Distance:1880.69,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"MGA",
    Distance:1672.23,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"MHH",
    Distance:309.839,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"MKE",
    Distance:2003.78,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"FLL",
    To:"MKE",
    Distance:2003.78,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"MSP",
    Distance:2396.01,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FLL",
    To:"MSY",
    Distance:1082.83,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"FLL",
    To:"MSY",
    Distance:1082.83,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"MYR",
    Distance:854.053,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"NAS",
    Distance:292.976,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"FLL",
    To:"NAS",
    Distance:292.976,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"ORD",
    Distance:1905.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"ORD",
    Distance:1905.4,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"ORD",
    Distance:1905.4,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FLL",
    To:"ORD",
    Distance:1905.4,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"ORH",
    Distance:1952.71,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"OSL",
    Distance:7581.88,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"FLL",
    To:"PAP",
    Distance:1160.27,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"PAP",
    Distance:1160.27,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"PAP",
    Distance:1160.27,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"PAP",
    Distance:1160.27,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FLL",
    To:"PBG",
    Distance:2150.99,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FLL",
    To:"PBG",
    Distance:2150.99,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"PHL",
    Distance:1600.63,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"PHL",
    Distance:1600.63,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"PHL",
    Distance:1600.63,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FLL",
    To:"PHX",
    Distance:3168.87,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"FLL",
    To:"PHX",
    Distance:3168.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"PHX",
    Distance:3168.87,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"PHX",
    Distance:3168.87,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FLL",
    To:"PIT",
    Distance:1603.32,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"POS",
    Distance:2621.14,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"POS",
    Distance:2621.14,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"PTY",
    Distance:1892.19,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"PUJ",
    Distance:1470.77,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"PUJ",
    Distance:1470.77,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"PVD",
    Distance:1916.17,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"PVD",
    Distance:1916.17,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"RDU",
    Distance:1097.98,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FLL",
    To:"RDU",
    Distance:1097.98,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"RDU",
    Distance:1097.98,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"RIC",
    Distance:1298.94,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"SAL",
    Distance:1683.98,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"SAP",
    Distance:1429.85,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"SDQ",
    Distance:1372.33,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"SDQ",
    Distance:1372.33,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"SEA",
    Distance:4367.63,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"SFO",
    Distance:4150.81,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"FLL",
    To:"SFO",
    Distance:4150.81,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"SFO",
    Distance:4150.81,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"SFO",
    Distance:4150.81,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"FLL",
    To:"SJO",
    Distance:1838.15,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"SJO",
    Distance:1838.15,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"SJU",
    Distance:1683.72,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"FLL",
    To:"SJU",
    Distance:1683.72,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"SJU",
    Distance:1683.72,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"SJU",
    Distance:1683.72,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"STI",
    Distance:1227.31,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"STL",
    Distance:1702.25,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"STT",
    Distance:1781.63,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"SWF",
    Distance:1803.38,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"FLL",
    To:"SXM",
    Distance:1967.75,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"TCB",
    Distance:285.003,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"TLC",
    Distance:2124.57,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"TPA",
    Distance:316.798,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"FLL",
    To:"TPA",
    Distance:316.798,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"TPA",
    Distance:316.798,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"TPA",
    Distance:316.798,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"TTN",
    Distance:1654.86,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"FLL",
    To:"TYS",
    Distance:1142.85,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FLL",
    To:"YUL",
    Distance:2231.31,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"FLL",
    To:"YUL",
    Distance:2231.31,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"FLL",
    To:"YUL",
    Distance:2231.31,
    Airport:"WestJet"
}),
new Routes(
{
    From:"FLL",
    To:"YYZ",
    Distance:1958.11,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"FLL",
    To:"YYZ",
    Distance:1958.11,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"FLL",
    To:"YYZ",
    Distance:1958.11,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FLL",
    To:"YYZ",
    Distance:1958.11,
    Airport:"WestJet"
}),
new Routes(
{
    From:"FLL",
    To:"ZSA",
    Distance:609.291,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"FLN",
    To:"AEP",
    Distance:1210.99,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"FLN",
    To:"BSB",
    Distance:1313.63,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"FLN",
    To:"BSB",
    Distance:1313.63,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"FLN",
    To:"CCM",
    Distance:145.485,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"FLN",
    To:"CGH",
    Distance:487.975,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"FLN",
    To:"CGH",
    Distance:487.975,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"FLN",
    To:"CGH",
    Distance:487.975,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"FLN",
    To:"CWB",
    Distance:246.243,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"FLN",
    To:"EZE",
    Distance:1237.34,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"FLN",
    To:"GIG",
    Distance:759.245,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"FLN",
    To:"GIG",
    Distance:759.245,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"FLN",
    To:"GIG",
    Distance:759.245,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"FLN",
    To:"GRU",
    Distance:515.29,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"FLN",
    To:"GRU",
    Distance:515.29,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"FLN",
    To:"GRU",
    Distance:515.29,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"FLN",
    To:"JCB",
    Distance:296.727,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"FLN",
    To:"POA",
    Distance:363.459,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"FLN",
    To:"POA",
    Distance:363.459,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"FLN",
    To:"VCP",
    Distance:537.57,
    Airport:"Azul"
}),
new Routes(
{
    From:"FLN",
    To:"XAP",
    Distance:410.009,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"FLN",
    To:"XAP",
    Distance:410.009,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"FLO",
    To:"CLT",
    Distance:159.704,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FLO",
    To:"CLT",
    Distance:159.704,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FLR",
    To:"AMS",
    Distance:1058.34,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FLR",
    To:"AMS",
    Distance:1058.34,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"BCN",
    Distance:797.55,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"BCN",
    Distance:797.55,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"BHX",
    Distance:1355.52,
    Airport:"Flybe"
}),
new Routes(
{
    From:"FLR",
    To:"BOD",
    Distance:954.211,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"FLR",
    To:"BRI",
    Distance:543.703,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"BRI",
    Distance:543.703,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"BRU",
    Distance:936.18,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"CAG",
    Distance:537.515,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"CAG",
    Distance:537.515,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"CDG",
    Distance:879.349,
    Airport:"Air France"
}),
new Routes(
{
    From:"FLR",
    To:"CDG",
    Distance:879.349,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FLR",
    To:"CPH",
    Distance:1317.05,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"CPH",
    Distance:1317.05,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"CTA",
    Distance:776.708,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"FLR",
    To:"CTA",
    Distance:776.708,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"CTA",
    Distance:776.708,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"DUS",
    Distance:895.488,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FLR",
    To:"DUS",
    Distance:895.488,
    Airport:"Finnair"
}),
new Routes(
{
    From:"FLR",
    To:"DUS",
    Distance:895.488,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FLR",
    To:"FCO",
    Distance:238.753,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FLR",
    To:"FRA",
    Distance:720.074,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FLR",
    To:"GVA",
    Distance:482.875,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FLR",
    To:"GVA",
    Distance:482.875,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"FLR",
    To:"LCY",
    Distance:1193.11,
    Airport:"Air France"
}),
new Routes(
{
    From:"FLR",
    To:"LCY",
    Distance:1193.11,
    Airport:"British Airways"
}),
new Routes(
{
    From:"FLR",
    To:"LCY",
    Distance:1193.11,
    Airport:"CityJet"
}),
new Routes(
{
    From:"FLR",
    To:"LGW",
    Distance:1180.38,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"LGW",
    Distance:1180.38,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"LYS",
    Distance:527.447,
    Airport:"Air France"
}),
new Routes(
{
    From:"FLR",
    To:"LYS",
    Distance:527.447,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"FLR",
    To:"MAD",
    Distance:1270.33,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"MAD",
    Distance:1270.33,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"MUC",
    Distance:507.23,
    Airport:"Air Dolomiti"
}),
new Routes(
{
    From:"FLR",
    To:"MUC",
    Distance:507.23,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FLR",
    To:"NTE",
    Distance:1064.54,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"FLR",
    To:"ORY",
    Distance:871.415,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"ORY",
    Distance:871.415,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"PMO",
    Distance:646.106,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"FLR",
    To:"PMO",
    Distance:646.106,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"PMO",
    Distance:646.106,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"STR",
    Distance:563.588,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FLR",
    To:"STR",
    Distance:563.588,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FLR",
    To:"TXL",
    Distance:984.988,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"TXL",
    Distance:984.988,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"VIE",
    Distance:632.615,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FLR",
    To:"VIE",
    Distance:632.615,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"FLR",
    To:"VIE",
    Distance:632.615,
    Airport:"Finnair"
}),
new Routes(
{
    From:"FLR",
    To:"VIE",
    Distance:632.615,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FLR",
    To:"VIE",
    Distance:632.615,
    Airport:"Niki"
}),
new Routes(
{
    From:"FLR",
    To:"ZRH",
    Distance:455.773,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"FLR",
    To:"ZRH",
    Distance:455.773,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"FLS",
    To:"LST",
    Distance:174.411,
    Airport:"Sharp Airlines"
}),
new Routes(
{
    From:"FLW",
    To:"CVU",
    Distance:24.0916,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"FLW",
    To:"HOR",
    Distance:233.233,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"FLW",
    To:"PDL",
    Distance:509.093,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"FLW",
    To:"TER",
    Distance:357.018,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"FMA",
    To:"AEP",
    Distance:928.257,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"FMM",
    To:"AGP",
    Distance:1740.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FMM",
    To:"AHO",
    Distance:832.508,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FMM",
    To:"ALC",
    Distance:1387.39,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FMM",
    To:"BEG",
    Distance:847.919,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"FMM",
    To:"CHQ",
    Distance:1796.97,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FMM",
    To:"CIA",
    Distance:712.706,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FMM",
    To:"CLY",
    Distance:617.338,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FMM",
    To:"CLY",
    Distance:617.338,
    Airport:"Niki"
}),
new Routes(
{
    From:"FMM",
    To:"DUB",
    Distance:1305.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FMM",
    To:"FAO",
    Distance:1919.37,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FMM",
    To:"GRO",
    Distance:896.188,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FMM",
    To:"HAM",
    Distance:627.568,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"FMM",
    To:"IEV",
    Distance:1488.02,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"FMM",
    To:"NAP",
    Distance:852.459,
    Airport:"Intersky"
}),
new Routes(
{
    From:"FMM",
    To:"OPO",
    Distance:1668.61,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FMM",
    To:"PMI",
    Distance:1113.92,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FMM",
    To:"PMI",
    Distance:1113.92,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FMM",
    To:"SKP",
    Distance:1116.45,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"FMM",
    To:"SNN",
    Distance:1451.95,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FMM",
    To:"STN",
    Distance:835.803,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FMM",
    To:"TFS",
    Distance:3199.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FMM",
    To:"TPS",
    Distance:1135.26,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FMM",
    To:"TXL",
    Distance:552.376,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"FMN",
    To:"ALS",
    Distance:223.361,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"FMN",
    To:"ALS",
    Distance:223.361,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"FMN",
    To:"ALS",
    Distance:223.361,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FMN",
    To:"DEN",
    Distance:465.445,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"FMN",
    To:"DEN",
    Distance:465.445,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"FMN",
    To:"DEN",
    Distance:465.445,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FMN",
    To:"SOW",
    Distance:318.756,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"FMN",
    To:"SOW",
    Distance:318.756,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"FMN",
    To:"SOW",
    Distance:318.756,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FMO",
    To:"AGP",
    Distance:1966.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FMO",
    To:"AYT",
    Distance:2475.73,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FMO",
    To:"BRE",
    Distance:125.866,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"FMO",
    To:"CFU",
    Distance:1679.73,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FMO",
    To:"FRA",
    Distance:241.965,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FMO",
    To:"GRO",
    Distance:1196.89,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FMO",
    To:"IBZ",
    Distance:1553.04,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FMO",
    To:"MUC",
    Distance:511.485,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FMO",
    To:"PMI",
    Distance:1449.81,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FMO",
    To:"STR",
    Distance:398.201,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"FMO",
    To:"ZRH",
    Distance:522.953,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"FNA",
    To:"ABJ",
    Distance:1088.87,
    Airport:"Kampuchea Airlines"
}),
new Routes(
{
    From:"FNA",
    To:"ACC",
    Distance:1475.85,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FNA",
    To:"ACC",
    Distance:1475.85,
    Airport:"Kampuchea Airlines"
}),
new Routes(
{
    From:"FNA",
    To:"ACC",
    Distance:1475.85,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"FNA",
    To:"BJL",
    Distance:646.472,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"FNA",
    To:"BJL",
    Distance:646.472,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"FNA",
    To:"CDG",
    Distance:4726.08,
    Airport:"Air France"
}),
new Routes(
{
    From:"FNA",
    To:"CDG",
    Distance:4726.08,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FNA",
    To:"CMN",
    Distance:2811.67,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"FNA",
    To:"DKR",
    Distance:825.873,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"FNA",
    To:"DKR",
    Distance:825.873,
    Airport:"Kampuchea Airlines"
}),
new Routes(
{
    From:"FNA",
    To:"LGW",
    Distance:4877.37,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"FNA",
    To:"LHR",
    Distance:4906.14,
    Airport:"British Airways"
}),
new Routes(
{
    From:"FNA",
    To:"LOS",
    Distance:1834.3,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"FNA",
    To:"MLW",
    Distance:373.022,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FNA",
    To:"ROB",
    Distance:409.594,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"FNA",
    To:"ROB",
    Distance:409.594,
    Airport:"British Airways"
}),
new Routes(
{
    From:"FNA",
    To:"ROB",
    Distance:409.594,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"FNA",
    To:"ROB",
    Distance:409.594,
    Airport:"Kampuchea Airlines"
}),
new Routes(
{
    From:"FNA",
    To:"ROB",
    Distance:409.594,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FNA",
    To:"ROB",
    Distance:409.594,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"FNA",
    To:"ROB",
    Distance:409.594,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FNC",
    To:"AMS",
    Distance:2783.5,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"FNC",
    To:"BHX",
    Distance:2506.45,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"FNC",
    To:"BHX",
    Distance:2506.45,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FNC",
    To:"BRE",
    Distance:3043.15,
    Airport:"Germania"
}),
new Routes(
{
    From:"FNC",
    To:"BRS",
    Distance:2370.55,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FNC",
    To:"BRU",
    Distance:2664.08,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"FNC",
    To:"BSL",
    Distance:2628.17,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FNC",
    To:"CCS",
    Distance:5676.05,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"FNC",
    To:"CGN",
    Distance:2806.4,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FNC",
    To:"DUS",
    Distance:2814.25,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FNC",
    To:"DUS",
    Distance:2814.25,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FNC",
    To:"EMA",
    Distance:2557.06,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FNC",
    To:"FRA",
    Distance:2833.98,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FNC",
    To:"FRA",
    Distance:2833.98,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FNC",
    To:"GLA",
    Distance:2748.11,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"FNC",
    To:"HAJ",
    Distance:3052.65,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FNC",
    To:"HAM",
    Distance:3145.89,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FNC",
    To:"LBA",
    Distance:2640.1,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FNC",
    To:"LEJ",
    Distance:3137.55,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FNC",
    To:"LEJ",
    Distance:3137.55,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FNC",
    To:"LGW",
    Distance:2455.53,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"FNC",
    To:"LGW",
    Distance:2455.53,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"FNC",
    To:"LGW",
    Distance:2455.53,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FNC",
    To:"LGW",
    Distance:2455.53,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FNC",
    To:"LIS",
    Distance:965.136,
    Airport:"SATA International"
}),
new Routes(
{
    From:"FNC",
    To:"LIS",
    Distance:965.136,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"FNC",
    To:"LIS",
    Distance:965.136,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FNC",
    To:"LIS",
    Distance:965.136,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FNC",
    To:"LPA",
    Distance:546.425,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"FNC",
    To:"LPA",
    Distance:546.425,
    Airport:"SATA International"
}),
new Routes(
{
    From:"FNC",
    To:"LUX",
    Distance:2671.17,
    Airport:"Luxair"
}),
new Routes(
{
    From:"FNC",
    To:"MAN",
    Distance:2570.28,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FNC",
    To:"MAN",
    Distance:2570.28,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FNC",
    To:"MUC",
    Distance:2947.88,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FNC",
    To:"MUC",
    Distance:2947.88,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FNC",
    To:"OPO",
    Distance:1190.75,
    Airport:"SATA International"
}),
new Routes(
{
    From:"FNC",
    To:"OPO",
    Distance:1190.75,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"FNC",
    To:"OPO",
    Distance:1190.75,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FNC",
    To:"ORY",
    Distance:2389.93,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"FNC",
    To:"PDL",
    Distance:984.92,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"FNC",
    To:"PDL",
    Distance:984.92,
    Airport:"SATA International"
}),
new Routes(
{
    From:"FNC",
    To:"PDL",
    Distance:984.92,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"FNC",
    To:"PRG",
    Distance:3193.79,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"FNC",
    To:"STR",
    Distance:2798.13,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FNC",
    To:"STR",
    Distance:2798.13,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FNC",
    To:"TXL",
    Distance:3262.86,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FNC",
    To:"VIE",
    Distance:3264.87,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FNC",
    To:"VIE",
    Distance:3264.87,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"FNC",
    To:"VIE",
    Distance:3264.87,
    Airport:"Niki"
}),
new Routes(
{
    From:"FNC",
    To:"VIE",
    Distance:3264.87,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"FNC",
    To:"ZRH",
    Distance:2688.09,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FNC",
    To:"ZRH",
    Distance:2688.09,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"FNI",
    To:"CRL",
    Distance:745.206,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FNI",
    To:"FEZ",
    Distance:1360.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FNI",
    To:"LPL",
    Distance:1190.17,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FNI",
    To:"LTN",
    Distance:970.201,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FNJ",
    To:"KUL",
    Distance:4724.62,
    Airport:"Air Koryo"
}),
new Routes(
{
    From:"FNJ",
    To:"PEK",
    Distance:783.293,
    Airport:"Air China"
}),
new Routes(
{
    From:"FNJ",
    To:"PEK",
    Distance:783.293,
    Airport:"Air Koryo"
}),
new Routes(
{
    From:"FNJ",
    To:"SHE",
    Distance:313.554,
    Airport:"Air Koryo"
}),
new Routes(
{
    From:"FNJ",
    To:"VVO",
    Distance:712.51,
    Airport:"Air Koryo"
}),
new Routes(
{
    From:"FNT",
    To:"ATL",
    Distance:1039.01,
    Airport:"Air France"
}),
new Routes(
{
    From:"FNT",
    To:"ATL",
    Distance:1039.01,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FNT",
    To:"ATL",
    Distance:1039.01,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FNT",
    To:"BWI",
    Distance:727.179,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"FNT",
    To:"BWI",
    Distance:727.179,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FNT",
    To:"CLE",
    Distance:232.783,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FNT",
    To:"LAS",
    Distance:2782.55,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FNT",
    To:"MCO",
    Distance:1631.01,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"FNT",
    To:"MCO",
    Distance:1631.01,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FNT",
    To:"MSP",
    Distance:787.918,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FNT",
    To:"ORD",
    Distance:358.454,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FNT",
    To:"ORD",
    Distance:358.454,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FNT",
    To:"TPA",
    Distance:1670.35,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"FNT",
    To:"TPA",
    Distance:1670.35,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"BKK",
    Distance:2397.45,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"BKK",
    Distance:2397.45,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CAN",
    Distance:702.406,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CAN",
    Distance:702.406,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CAN",
    Distance:702.406,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CGK",
    Distance:3831.53,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CGK",
    Distance:3831.53,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CGO",
    Distance:1105.83,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CGO",
    Distance:1105.83,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CGO",
    Distance:1105.83,
    Airport:"West Air China"
}),
new Routes(
{
    From:"FOC",
    To:"CGO",
    Distance:1105.83,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CGQ",
    Distance:2019.01,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"FOC",
    To:"CJU",
    Distance:1069.24,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CKG",
    Distance:1346.88,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CKG",
    Distance:1346.88,
    Airport:"West Air China"
}),
new Routes(
{
    From:"FOC",
    To:"CKG",
    Distance:1346.88,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CSX",
    Distance:685.384,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"FOC",
    To:"CSX",
    Distance:685.384,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CSX",
    Distance:685.384,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CSX",
    Distance:685.384,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CSX",
    Distance:685.384,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CSX",
    Distance:685.384,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CTU",
    Distance:1621.82,
    Airport:"Air China"
}),
new Routes(
{
    From:"FOC",
    To:"CTU",
    Distance:1621.82,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CTU",
    Distance:1621.82,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CTU",
    Distance:1621.82,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CZX",
    Distance:667.92,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"CZX",
    Distance:667.92,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"DLC",
    Distance:1459.48,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"HAK",
    Distance:1154.14,
    Airport:"Air China"
}),
new Routes(
{
    From:"FOC",
    To:"HAK",
    Distance:1154.14,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"HAK",
    Distance:1154.14,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"HAK",
    Distance:1154.14,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"HAK",
    Distance:1154.14,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"HFE",
    Distance:689.462,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"FOC",
    To:"HFE",
    Distance:689.462,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"HFE",
    Distance:689.462,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"HGH",
    Distance:483.471,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"HGH",
    Distance:483.471,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"HIA",
    Distance:873.417,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"FOC",
    To:"HKG",
    Distance:709.019,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"FOC",
    To:"HKG",
    Distance:709.019,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"FOC",
    To:"HKG",
    Distance:709.019,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"HKG",
    Distance:709.019,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"HRB",
    Distance:2266.45,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"HRB",
    Distance:2266.45,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"JDZ",
    Distance:450.808,
    Airport:"Air China"
}),
new Routes(
{
    From:"FOC",
    To:"JDZ",
    Distance:450.808,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"KHH",
    Distance:379.821,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"FOC",
    To:"KHH",
    Distance:379.821,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"FOC",
    To:"KHH",
    Distance:379.821,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"KIX",
    Distance:1767.55,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FOC",
    To:"KIX",
    Distance:1767.55,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"KMG",
    Distance:1700.68,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"KMG",
    Distance:1700.68,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"KMG",
    Distance:1700.68,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"KUL",
    Distance:3213.47,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"KUL",
    Distance:3213.47,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"KUL",
    Distance:3213.47,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"KWE",
    Distance:1284.12,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"KWE",
    Distance:1284.12,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"FOC",
    To:"KWE",
    Distance:1284.12,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"KWL",
    Distance:968.348,
    Airport:"Air China"
}),
new Routes(
{
    From:"FOC",
    To:"KWL",
    Distance:968.348,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"KWL",
    Distance:968.348,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"KWL",
    Distance:968.348,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"LYG",
    Distance:958.756,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"FOC",
    To:"MFM",
    Distance:746.366,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"MFM",
    Distance:746.366,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"NKG",
    Distance:650.398,
    Airport:"Air China"
}),
new Routes(
{
    From:"FOC",
    To:"NKG",
    Distance:650.398,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"NKG",
    Distance:650.398,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"NKG",
    Distance:650.398,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"NKG",
    Distance:650.398,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"NKG",
    Distance:650.398,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"NKG",
    Distance:650.398,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"NKG",
    Distance:650.398,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"NNG",
    Distance:1221.54,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"FOC",
    To:"NNG",
    Distance:1221.54,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"NNG",
    Distance:1221.54,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"NNG",
    Distance:1221.54,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"PEK",
    Distance:1598.54,
    Airport:"Air China"
}),
new Routes(
{
    From:"FOC",
    To:"PEK",
    Distance:1598.54,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"PEK",
    Distance:1598.54,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"PEK",
    Distance:1598.54,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"PEK",
    Distance:1598.54,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"PVG",
    Distance:615.728,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"PVG",
    Distance:615.728,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"RMQ",
    Distance:209.261,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"FOC",
    To:"SGN",
    Distance:2166.8,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"SHA",
    Distance:607.549,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"SHA",
    Distance:607.549,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"SHA",
    Distance:607.549,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"SHA",
    Distance:607.549,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"SIN",
    Distance:3207.31,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"SIN",
    Distance:3207.31,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"SYX",
    Distance:1353.66,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"SYX",
    Distance:1353.66,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"FOC",
    To:"SYX",
    Distance:1353.66,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"SZX",
    Distance:697.111,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FOC",
    To:"SZX",
    Distance:697.111,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"SZX",
    Distance:697.111,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"SZX",
    Distance:697.111,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"TAO",
    Distance:1150.74,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"FOC",
    To:"TAO",
    Distance:1150.74,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"TAO",
    Distance:1150.74,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"TNA",
    Distance:1236.36,
    Airport:"Air China"
}),
new Routes(
{
    From:"FOC",
    To:"TNA",
    Distance:1236.36,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"TNA",
    Distance:1236.36,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"TNA",
    Distance:1236.36,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"TNA",
    Distance:1236.36,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"TPE",
    Distance:184.115,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"FOC",
    To:"TPE",
    Distance:184.115,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"TSA",
    Distance:212.619,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"TSA",
    Distance:212.619,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"FOC",
    To:"TSA",
    Distance:212.619,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"TSN",
    Distance:1482.43,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"TYN",
    Distance:1470.75,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"WUH",
    Distance:758.449,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"WUH",
    Distance:758.449,
    Airport:"West Air China"
}),
new Routes(
{
    From:"FOC",
    To:"WUH",
    Distance:758.449,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"WUX",
    Distance:622.657,
    Airport:"Air China"
}),
new Routes(
{
    From:"FOC",
    To:"WUX",
    Distance:622.657,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"XIY",
    Distance:1410.95,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"XIY",
    Distance:1410.95,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"XIY",
    Distance:1410.95,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"XIY",
    Distance:1410.95,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"XIY",
    Distance:1410.95,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"XUZ",
    Distance:946.903,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"FOC",
    To:"ZUH",
    Distance:773.692,
    Airport:"Air China"
}),
new Routes(
{
    From:"FOC",
    To:"ZUH",
    Distance:773.692,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"ZUH",
    Distance:773.692,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"FOC",
    To:"ZUH",
    Distance:773.692,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"FOE",
    To:"ORD",
    Distance:737.272,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FON",
    To:"SJO",
    Distance:71.1893,
    Airport:"LACSA"
}),
new Routes(
{
    From:"FON",
    To:"XQP",
    Distance:127.657,
    Airport:"CAL Cargo Air Lines"
}),
new Routes(
{
    From:"FON",
    To:"XQP",
    Distance:127.657,
    Airport:"LACSA"
}),
new Routes(
{
    From:"FOR",
    To:"BEL",
    Distance:1136.2,
    Airport:"Azul"
}),
new Routes(
{
    From:"FOR",
    To:"BEL",
    Distance:1136.2,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"BEL",
    Distance:1136.2,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"BSB",
    Distance:1691.72,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"BSB",
    Distance:1691.72,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"FOR",
    To:"BSB",
    Distance:1691.72,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"CNF",
    Distance:1859.29,
    Airport:"Azul"
}),
new Routes(
{
    From:"FOR",
    To:"EZE",
    Distance:4021.19,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"GIG",
    Distance:2176.23,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"GIG",
    Distance:2176.23,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"FOR",
    To:"GIG",
    Distance:2176.23,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"GRU",
    Distance:2346.1,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"GRU",
    Distance:2346.1,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"FOR",
    To:"GRU",
    Distance:2346.1,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"JDO",
    Distance:391.413,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"FOR",
    To:"JPA",
    Distance:545.658,
    Airport:"Azul"
}),
new Routes(
{
    From:"FOR",
    To:"LIS",
    Distance:5612.32,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"FOR",
    To:"MAO",
    Distance:2389.71,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"MXP",
    Distance:7200.59,
    Airport:"Air Italy"
}),
new Routes(
{
    From:"FOR",
    To:"NAT",
    Distance:434.525,
    Airport:"Azul"
}),
new Routes(
{
    From:"FOR",
    To:"NAT",
    Distance:434.525,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"NAT",
    Distance:434.525,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"REC",
    Distance:627.134,
    Airport:"Azul"
}),
new Routes(
{
    From:"FOR",
    To:"REC",
    Distance:627.134,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"REC",
    Distance:627.134,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"SLZ",
    Distance:646.701,
    Airport:"Azul"
}),
new Routes(
{
    From:"FOR",
    To:"SLZ",
    Distance:646.701,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"SLZ",
    Distance:646.701,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"SSA",
    Distance:1015.97,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"SSA",
    Distance:1015.97,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"THE",
    Distance:496.653,
    Airport:"Azul"
}),
new Routes(
{
    From:"FOR",
    To:"THE",
    Distance:496.653,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"THE",
    Distance:496.653,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"FOR",
    To:"VCP",
    Distance:2330.02,
    Airport:"Azul"
}),
new Routes(
{
    From:"FPO",
    To:"ATL",
    Distance:960.587,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FPO",
    To:"BHM",
    Distance:1098.28,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"FPO",
    To:"BWI",
    Distance:1415.51,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"FPO",
    To:"CLT",
    Distance:985.943,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FPO",
    To:"CLT",
    Distance:985.943,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FPO",
    To:"CMH",
    Distance:1543.93,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"FPO",
    To:"EWR",
    Distance:1625.89,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"FPO",
    To:"FLL",
    Distance:154.971,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"FPO",
    To:"FLL",
    Distance:154.971,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FPO",
    To:"MIA",
    Distance:180.492,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FPO",
    To:"MIA",
    Distance:180.492,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FPO",
    To:"NAS",
    Distance:209.047,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"FPO",
    To:"RIC",
    Distance:1224.04,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"FRA",
    To:"ABV",
    Distance:4562.71,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"ABZ",
    Distance:1064.59,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"ACC",
    Distance:5006.17,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"ACE",
    Distance:2994.06,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"ACE",
    Distance:2994.06,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FRA",
    To:"ADB",
    Distance:1966.77,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"FRA",
    To:"ADD",
    Distance:5349.49,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"ADD",
    Distance:5349.49,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"AGA",
    Distance:2655.26,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"AGP",
    Distance:1815.32,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"ALA",
    Distance:5091.47,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"ALC",
    Distance:1491.63,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"ALG",
    Distance:1543.1,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"FRA",
    To:"ALG",
    Distance:1543.1,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"AMM",
    Distance:3045.84,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"AMM",
    Distance:3045.84,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"AMM",
    Distance:3045.84,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"FRA",
    To:"AMS",
    Distance:365.74,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"AMS",
    Distance:365.74,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"AMS",
    Distance:365.74,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"AMS",
    Distance:365.74,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"ARN",
    Distance:1224.53,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"ARN",
    Distance:1224.53,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"ARN",
    Distance:1224.53,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"FRA",
    To:"ASB",
    Distance:4117.07,
    Airport:"Turkmenistan Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"ATH",
    Distance:1816.58,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"ATH",
    Distance:1816.58,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"ATL",
    Distance:7408.2,
    Airport:"Air France"
}),
new Routes(
{
    From:"FRA",
    To:"ATL",
    Distance:7408.2,
    Airport:"British Airways"
}),
new Routes(
{
    From:"FRA",
    To:"ATL",
    Distance:7408.2,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FRA",
    To:"ATL",
    Distance:7408.2,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"ATL",
    Distance:7408.2,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"ATL",
    Distance:7408.2,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"AUH",
    Distance:4863.59,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"FRA",
    To:"AUH",
    Distance:4863.59,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"AUH",
    Distance:4863.59,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"FRA",
    To:"AUH",
    Distance:4863.59,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"AUH",
    Distance:4863.59,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"AYT",
    Distance:2299.15,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"AYT",
    Distance:2299.15,
    Airport:"Germania"
}),
new Routes(
{
    From:"FRA",
    To:"AYT",
    Distance:2299.15,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"FRA",
    To:"AYT",
    Distance:2299.15,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FRA",
    To:"BAH",
    Distance:4441.35,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"FRA",
    To:"BCN",
    Distance:1091.98,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"BCN",
    Distance:1091.98,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"BCN",
    Distance:1091.98,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"BCN",
    Distance:1091.98,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BEG",
    Distance:1055.92,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"BEG",
    Distance:1055.92,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"FRA",
    To:"BEG",
    Distance:1055.92,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"FRA",
    To:"BEG",
    Distance:1055.92,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BEG",
    Distance:1055.92,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"FRA",
    To:"BEY",
    Distance:2839.31,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BEY",
    Distance:2839.31,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"BGO",
    Distance:1160.63,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BGO",
    Distance:1160.63,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"FRA",
    To:"BHX",
    Distance:764.742,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BIA",
    Distance:834.162,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BIO",
    Distance:1148.04,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BKK",
    Distance:9001.55,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BKK",
    Distance:9001.55,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"FRA",
    To:"BLL",
    Distance:636.661,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BLL",
    Distance:636.661,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"FRA",
    To:"BLQ",
    Distance:644.621,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BLR",
    Distance:7421.64,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"FRA",
    To:"BLR",
    Distance:7421.64,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BOG",
    Distance:9085.12,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"FRA",
    To:"BOG",
    Distance:9085.12,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BOM",
    Distance:6570.75,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"FRA",
    To:"BOM",
    Distance:6570.75,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BOS",
    Distance:5887.84,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BOS",
    Distance:5887.84,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"BRE",
    Distance:336.35,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BRS",
    Distance:806.465,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"FRA",
    To:"BRU",
    Distance:303.264,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"BRU",
    Distance:303.264,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"BRU",
    Distance:303.264,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BSL",
    Distance:280.902,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BSL",
    Distance:280.902,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"FRA",
    To:"BSL",
    Distance:280.902,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"FRA",
    To:"BUD",
    Distance:835.866,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"BUD",
    Distance:835.866,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"BVC",
    Distance:4704.28,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FRA",
    To:"CAI",
    Distance:2922.68,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"FRA",
    To:"CAI",
    Distance:2922.68,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"CCS",
    Distance:8074.65,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"CDG",
    Distance:446.925,
    Airport:"Air France"
}),
new Routes(
{
    From:"FRA",
    To:"CDG",
    Distance:446.925,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"CFU",
    Distance:1462.09,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"CFU",
    Distance:1462.09,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"CFU",
    Distance:1462.09,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FRA",
    To:"CHQ",
    Distance:2045.59,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"CLT",
    Distance:7057.99,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"CLT",
    Distance:7057.99,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FRA",
    To:"CMB",
    Distance:8068.23,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"CMN",
    Distance:2275.37,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"CMN",
    Distance:2275.37,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"FRA",
    To:"CPH",
    Distance:680.106,
    Airport:"Air China"
}),
new Routes(
{
    From:"FRA",
    To:"CPH",
    Distance:680.106,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"CPH",
    Distance:680.106,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"CPH",
    Distance:680.106,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"FRA",
    To:"CTA",
    Distance:1490.2,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"CTA",
    Distance:1490.2,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FRA",
    To:"CTU",
    Distance:7812.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"FRA",
    To:"CTU",
    Distance:7812.48,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"CUN",
    Distance:8604.49,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"DBV",
    Distance:1115.01,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"DBV",
    Distance:1115.01,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"DBV",
    Distance:1115.01,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"DEL",
    Distance:6122.63,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"FRA",
    To:"DEL",
    Distance:6122.63,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"DEN",
    Distance:8087.82,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"DEN",
    Distance:8087.82,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"DFW",
    Distance:8256.94,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"DFW",
    Distance:8256.94,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"DFW",
    Distance:8256.94,
    Airport:"British Airways"
}),
new Routes(
{
    From:"FRA",
    To:"DFW",
    Distance:8256.94,
    Airport:"Finnair"
}),
new Routes(
{
    From:"FRA",
    To:"DFW",
    Distance:8256.94,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"DFW",
    Distance:8256.94,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"DFW",
    Distance:8256.94,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"DFW",
    Distance:8256.94,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FRA",
    To:"DFW",
    Distance:8256.94,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"DJE",
    Distance:1805.2,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"DJE",
    Distance:1805.2,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"FRA",
    To:"DLM",
    Distance:2193.84,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"DLM",
    Distance:2193.84,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FRA",
    To:"DME",
    Distance:2048.82,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"DME",
    Distance:2048.82,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"DME",
    Distance:2048.82,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"DMM",
    Distance:4369.04,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"DOH",
    Distance:4587.21,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"FRA",
    To:"DOH",
    Distance:4587.21,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"DOH",
    Distance:4587.21,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"FRA",
    To:"DOH",
    Distance:4587.21,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"FRA",
    To:"DOH",
    Distance:4587.21,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FRA",
    To:"DOH",
    Distance:4587.21,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"DRS",
    Distance:388.738,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"DTW",
    Distance:6678,
    Airport:"Air France"
}),
new Routes(
{
    From:"FRA",
    To:"DTW",
    Distance:6678,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FRA",
    To:"DTW",
    Distance:6678,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"DTW",
    Distance:6678,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"DTW",
    Distance:6678,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"DUB",
    Distance:1085.46,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"FRA",
    To:"DUB",
    Distance:1085.46,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"DUS",
    Distance:188.148,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"DUS",
    Distance:188.148,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"DXB",
    Distance:4844.86,
    Airport:"Emirates"
}),
new Routes(
{
    From:"FRA",
    To:"DXB",
    Distance:4844.86,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"DXB",
    Distance:4844.86,
    Airport:"Qantas"
}),
new Routes(
{
    From:"FRA",
    To:"DYU",
    Distance:4825.59,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"FRA",
    To:"EBL",
    Distance:3215.96,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"EDI",
    Distance:1031.98,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"ESB",
    Distance:2198.34,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"EWR",
    Distance:6209.57,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"EWR",
    Distance:6209.57,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"EZE",
    Distance:11500.6,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"FAO",
    Distance:1957.35,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"FAO",
    Distance:1957.35,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"FRA",
    To:"FAO",
    Distance:1957.35,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FRA",
    To:"FCO",
    Distance:957.859,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FRA",
    To:"FCO",
    Distance:957.859,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"FCO",
    Distance:957.859,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"FDH",
    Distance:271.286,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"FLR",
    Distance:720.074,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"FMO",
    Distance:241.965,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"FNC",
    Distance:2833.98,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"FNC",
    Distance:2833.98,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FRA",
    To:"FUE",
    Distance:3053.86,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"FUE",
    Distance:3053.86,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FRA",
    To:"GCI",
    Distance:802.989,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"GDN",
    Distance:830.284,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"GDN",
    Distance:830.284,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"GIG",
    Distance:9566.01,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"GIG",
    Distance:9566.01,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"GOJ",
    Distance:2420.39,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"GOT",
    Distance:883.465,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"GOT",
    Distance:883.465,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"GOT",
    Distance:883.465,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"FRA",
    To:"GPA",
    Distance:1669.01,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FRA",
    To:"GRU",
    Distance:9795.69,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"GRU",
    Distance:9795.69,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"GRZ",
    Distance:609.559,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"GRZ",
    Distance:609.559,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"GVA",
    Distance:458.282,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"GVA",
    Distance:458.282,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"FRA",
    To:"GVA",
    Distance:458.282,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"GVA",
    Distance:458.282,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"FRA",
    To:"GWT",
    Distance:543.563,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"GYD",
    Distance:3369.17,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"GYD",
    Distance:3369.17,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"GYD",
    Distance:3369.17,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"HAJ",
    Distance:282.138,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"HAM",
    Distance:412.841,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"HAN",
    Distance:8713.84,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FRA",
    To:"HAN",
    Distance:8713.84,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"HAV",
    Distance:8136.54,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"HDF",
    Distance:575.199,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"FRA",
    To:"HEL",
    Distance:1539.71,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"HEL",
    Distance:1539.71,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"HEL",
    Distance:1539.71,
    Airport:"Finnair"
}),
new Routes(
{
    From:"FRA",
    To:"HEL",
    Distance:1539.71,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"HEL",
    Distance:1539.71,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"FRA",
    To:"HER",
    Distance:2115.26,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"HER",
    Distance:2115.26,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"HER",
    Distance:2115.26,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"HER",
    Distance:2115.26,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FRA",
    To:"HKG",
    Distance:9155.4,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"FRA",
    To:"HKG",
    Distance:9155.4,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"HND",
    Distance:9362.63,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FRA",
    To:"HND",
    Distance:9362.63,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"HOG",
    Distance:7893.41,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"HRG",
    Distance:3324.6,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"IAD",
    Distance:6549.18,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"IAD",
    Distance:6549.18,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"IAH",
    Distance:8401.27,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"IAH",
    Distance:8401.27,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"IBZ",
    Distance:1363.04,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"IBZ",
    Distance:1363.04,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"IBZ",
    Distance:1363.04,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"ICN",
    Distance:8545.07,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"ICN",
    Distance:8545.07,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"FRA",
    To:"ICN",
    Distance:8545.07,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"IKA",
    Distance:3776.06,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"FRA",
    To:"IKA",
    Distance:3776.06,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"INN",
    Distance:370.015,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"INN",
    Distance:370.015,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"IST",
    Distance:1863.84,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"IST",
    Distance:1863.84,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"IST",
    Distance:1863.84,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FRA",
    To:"JED",
    Distance:4132.74,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"FRA",
    To:"JED",
    Distance:4132.74,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"JED",
    Distance:4132.74,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"JED",
    Distance:4132.74,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"JED",
    Distance:4132.74,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"FRA",
    To:"JED",
    Distance:4132.74,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"JFK",
    Distance:6187.98,
    Airport:"Air France"
}),
new Routes(
{
    From:"FRA",
    To:"JFK",
    Distance:6187.98,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FRA",
    To:"JFK",
    Distance:6187.98,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"JFK",
    Distance:6187.98,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"JFK",
    Distance:6187.98,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"JFK",
    Distance:6187.98,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"JFK",
    Distance:6187.98,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FRA",
    To:"JFK",
    Distance:6187.98,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"JNB",
    Distance:8689.88,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"JNB",
    Distance:8689.88,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"FRA",
    To:"JNB",
    Distance:8689.88,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FRA",
    To:"KBP",
    Distance:1585.8,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"KBP",
    Distance:1585.8,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"KEF",
    Distance:2400.6,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"FRA",
    To:"KGS",
    Distance:2089.01,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"KGS",
    Distance:2089.01,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FRA",
    To:"KIV",
    Distance:1536.63,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"FRA",
    To:"KIX",
    Distance:9262.51,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FRA",
    To:"KIX",
    Distance:9262.51,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"KRK",
    Distance:801.89,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"KRK",
    Distance:801.89,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"KTW",
    Distance:750.212,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"KTW",
    Distance:750.212,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"KUF",
    Distance:2847.7,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"KUL",
    Distance:9999.52,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"KUL",
    Distance:9999.52,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"KUL",
    Distance:9999.52,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"KWI",
    Distance:4022.14,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"FRA",
    To:"KWI",
    Distance:4022.14,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"LAD",
    Distance:6563.48,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"LAS",
    Distance:8962.72,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"LAX",
    Distance:9321.25,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"LAX",
    Distance:9321.25,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"LCA",
    Distance:2637.26,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"FRA",
    To:"LCA",
    Distance:2637.26,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"FRA",
    To:"LCA",
    Distance:2637.26,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"LCY",
    Distance:618.78,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"LCY",
    Distance:618.78,
    Airport:"British Airways"
}),
new Routes(
{
    From:"FRA",
    To:"LCY",
    Distance:618.78,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"LED",
    Distance:1749.24,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"LED",
    Distance:1749.24,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"LEJ",
    Distance:303.604,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"LHR",
    Distance:653.231,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"LHR",
    Distance:653.231,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"LHR",
    Distance:653.231,
    Airport:"British Airways"
}),
new Routes(
{
    From:"FRA",
    To:"LHR",
    Distance:653.231,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"LIN",
    Distance:512.358,
    Airport:"Air Dolomiti"
}),
new Routes(
{
    From:"FRA",
    To:"LIN",
    Distance:512.358,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FRA",
    To:"LIN",
    Distance:512.358,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"LIN",
    Distance:512.358,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"LIS",
    Distance:1871.8,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"LIS",
    Distance:1871.8,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"LIS",
    Distance:1871.8,
    Airport:"SATA International"
}),
new Routes(
{
    From:"FRA",
    To:"LIS",
    Distance:1871.8,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"FRA",
    To:"LIS",
    Distance:1871.8,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FRA",
    To:"LJU",
    Distance:609.166,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"FRA",
    To:"LJU",
    Distance:609.166,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"LNZ",
    Distance:456.371,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"LNZ",
    Distance:456.371,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"LOS",
    Distance:4855.8,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"LOS",
    Distance:4855.8,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"LOS",
    Distance:4855.8,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"LPA",
    Distance:3182.93,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"LPA",
    Distance:3182.93,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FRA",
    To:"LUX",
    Distance:173.052,
    Airport:"Luxair"
}),
new Routes(
{
    From:"FRA",
    To:"LYS",
    Distance:542.917,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"LYS",
    Distance:542.917,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"LYS",
    Distance:542.917,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"MAA",
    Distance:7596.17,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"FRA",
    To:"MAA",
    Distance:7596.17,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"MAD",
    Distance:1418.41,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"MAD",
    Distance:1418.41,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"FRA",
    To:"MAD",
    Distance:1418.41,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"MAD",
    Distance:1418.41,
    Airport:"Finnair"
}),
new Routes(
{
    From:"FRA",
    To:"MAD",
    Distance:1418.41,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"MAD",
    Distance:1418.41,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"MAD",
    Distance:1418.41,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"MAD",
    Distance:1418.41,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"MAH",
    Distance:1179.78,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FRA",
    To:"MAN",
    Distance:831.287,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"MBA",
    Distance:6707.74,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"MBJ",
    Distance:8193.75,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"MCO",
    Distance:7618.27,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"MCO",
    Distance:7618.27,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"MCT",
    Distance:5180.84,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"FRA",
    To:"MEX",
    Distance:9550.54,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"MIA",
    Distance:7761.88,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"MIA",
    Distance:7761.88,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"MLA",
    Distance:1646.57,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"FRA",
    To:"MLA",
    Distance:1646.57,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"MLE",
    Distance:7885.62,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"MPL",
    Distance:797.094,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"MRS",
    Distance:775.354,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"MRS",
    Distance:775.354,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"MRU",
    Distance:9200.45,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"MSQ",
    Distance:1397.36,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"MSQ",
    Distance:1397.36,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"MUC",
    Distance:300.174,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"MUC",
    Distance:300.174,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"MXP",
    Distance:488.987,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"MXP",
    Distance:488.987,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"NAP",
    Distance:1110.02,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"FRA",
    To:"NAP",
    Distance:1110.02,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"NBE",
    Distance:1558.73,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"FRA",
    To:"NBE",
    Distance:1558.73,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"FRA",
    To:"NBO",
    Distance:6317.06,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"NCE",
    Distance:715.217,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"NDR",
    Distance:1917.28,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"FRA",
    To:"NGO",
    Distance:9295.36,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FRA",
    To:"NGO",
    Distance:9295.36,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"NKG",
    Distance:8637.08,
    Airport:"Air China"
}),
new Routes(
{
    From:"FRA",
    To:"NKG",
    Distance:8637.08,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"NRT",
    Distance:9368.44,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"NUE",
    Distance:190.525,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"OLB",
    Distance:1017.78,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"OPO",
    Distance:1650.67,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"OPO",
    Distance:1650.67,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"FRA",
    To:"ORD",
    Distance:6969.86,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"ORD",
    Distance:6969.86,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"OSL",
    Distance:1141.99,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"OSL",
    Distance:1141.99,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"OSL",
    Distance:1141.99,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"FRA",
    To:"OTP",
    Distance:1451.78,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"OTP",
    Distance:1451.78,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"OTP",
    Distance:1451.78,
    Airport:"Tarom"
}),
new Routes(
{
    From:"FRA",
    To:"OVB",
    Distance:4805.95,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"PDL",
    Distance:3029.63,
    Airport:"SATA International"
}),
new Routes(
{
    From:"FRA",
    To:"PEK",
    Distance:7789.36,
    Airport:"Air China"
}),
new Routes(
{
    From:"FRA",
    To:"PEK",
    Distance:7789.36,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"PHL",
    Distance:6337.91,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"PHL",
    Distance:6337.91,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"PHL",
    Distance:6337.91,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FRA",
    To:"PMI",
    Distance:1250.72,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"PMI",
    Distance:1250.72,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"PMI",
    Distance:1250.72,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"PMI",
    Distance:1250.72,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FRA",
    To:"PMO",
    Distance:1366.17,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"PNQ",
    Distance:6686.97,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"FRA",
    To:"PNQ",
    Distance:6686.97,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"POP",
    Distance:7570.56,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"POZ",
    Distance:634.833,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"POZ",
    Distance:634.833,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"PRG",
    Distance:408.055,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"PRG",
    Distance:408.055,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"PRG",
    Distance:408.055,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"PRG",
    Distance:408.055,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"FRA",
    To:"PRN",
    Distance:1265.12,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"FRA",
    To:"PRN",
    Distance:1265.12,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"PUJ",
    Distance:7510.51,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"PUY",
    Distance:699.091,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"PUY",
    Distance:699.091,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"PVG",
    Distance:8859.77,
    Airport:"Air China"
}),
new Routes(
{
    From:"FRA",
    To:"PVG",
    Distance:8859.77,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"PVG",
    Distance:8859.77,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"REC",
    Distance:7707.33,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"RHO",
    Distance:2178.85,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"RHO",
    Distance:2178.85,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FRA",
    To:"RIX",
    Distance:1272.19,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"FRA",
    To:"RIX",
    Distance:1272.19,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"RIX",
    Distance:1272.19,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"RUH",
    Distance:4293.84,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"RUH",
    Distance:4293.84,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"RZE",
    Distance:960.556,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"SAW",
    Distance:1901.49,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"SAW",
    Distance:1901.49,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"SDQ",
    Distance:7614.92,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"SEA",
    Distance:8197.04,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"SEA",
    Distance:8197.04,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"SEA",
    Distance:8197.04,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"SEZ",
    Distance:7562.64,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"SFO",
    Distance:9148.14,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"FRA",
    To:"SFO",
    Distance:9148.14,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"SFO",
    Distance:9148.14,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"SGN",
    Distance:9657.99,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FRA",
    To:"SGN",
    Distance:9657.99,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"SHE",
    Distance:8034.05,
    Airport:"Air China"
}),
new Routes(
{
    From:"FRA",
    To:"SHE",
    Distance:8034.05,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"SIN",
    Distance:10281.3,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"SIN",
    Distance:10281.3,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"SIN",
    Distance:10281.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FRA",
    To:"SJU",
    Distance:7352.35,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"SKG",
    Distance:1541.68,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"SKG",
    Distance:1541.68,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"SKG",
    Distance:1541.68,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FRA",
    To:"SOF",
    Distance:1397.83,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"FRA",
    To:"SOF",
    Distance:1397.83,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"SPC",
    Distance:3249.92,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"SPU",
    Distance:931.192,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"SPU",
    Distance:931.192,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"SPU",
    Distance:931.192,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"SSA",
    Distance:8352.68,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"STR",
    Distance:156.536,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"SVG",
    Distance:1001.63,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"SVG",
    Distance:1001.63,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"FRA",
    To:"SVO",
    Distance:2024.49,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"SZG",
    Distance:409.708,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"SZG",
    Distance:409.708,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"TAB",
    Distance:7591.42,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"TAS",
    Distance:4686.49,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"FRA",
    To:"TFS",
    Distance:3236.8,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"TFS",
    Distance:3236.8,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FRA",
    To:"TGD",
    Distance:1183.6,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"TIA",
    Distance:1289.48,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"FRA",
    To:"TLL",
    Distance:1470.35,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"TLS",
    Distance:895.977,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"TLS",
    Distance:895.977,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"TLV",
    Distance:2954.24,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"TLV",
    Distance:2954.24,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"TPE",
    Distance:9367.08,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"TRN",
    Distance:540.741,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"TSE",
    Distance:4310.85,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"FRA",
    To:"TSE",
    Distance:4310.85,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"TSE",
    Distance:4310.85,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"TUN",
    Distance:1471.23,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"TUN",
    Distance:1471.23,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"FRA",
    To:"TXL",
    Distance:433.648,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"TXL",
    Distance:433.648,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"TXL",
    Distance:433.648,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"TXL",
    Distance:433.648,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"VCE",
    Distance:577.55,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"VIE",
    Distance:621.964,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FRA",
    To:"VIE",
    Distance:621.964,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"VIE",
    Distance:621.964,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"VIE",
    Distance:621.964,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"VIE",
    Distance:621.964,
    Airport:"Niki"
}),
new Routes(
{
    From:"FRA",
    To:"VKO",
    Distance:2010.27,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"VKO",
    Distance:2010.27,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"VLC",
    Distance:1369.09,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"FRA",
    To:"VLC",
    Distance:1369.09,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"VNO",
    Distance:1243.74,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"FRA",
    To:"VNO",
    Distance:1243.74,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"VRA",
    Distance:8065.81,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"VRN",
    Distance:543.92,
    Airport:"Air Dolomiti"
}),
new Routes(
{
    From:"FRA",
    To:"VRN",
    Distance:543.92,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"WAW",
    Distance:898.35,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"WAW",
    Distance:898.35,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"WAW",
    Distance:898.35,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"WDH",
    Distance:8110.98,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"FRA",
    To:"WRO",
    Distance:600.941,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"WRO",
    Distance:600.941,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"XRY",
    Distance:1883.4,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"XRY",
    Distance:1883.4,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FRA",
    To:"YHZ",
    Distance:5234.55,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"YOW",
    Distance:5983.3,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"FRA",
    To:"YOW",
    Distance:5983.3,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"YUL",
    Distance:5853.42,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"FRA",
    To:"YUL",
    Distance:5853.42,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"YVR",
    Distance:8062.16,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"FRA",
    To:"YVR",
    Distance:8062.16,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FRA",
    To:"YVR",
    Distance:8062.16,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"YYC",
    Distance:7527.97,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"FRA",
    To:"YYC",
    Distance:7527.97,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"FRA",
    To:"YYC",
    Distance:7527.97,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"YYZ",
    Distance:6342.67,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"FRA",
    To:"YYZ",
    Distance:6342.67,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"ZAD",
    Distance:835.082,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"ZAD",
    Distance:835.082,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"ZAG",
    Distance:735.433,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"ZAG",
    Distance:735.433,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"ZRH",
    Distance:284.848,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"FRA",
    To:"ZRH",
    Distance:284.848,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"FRA",
    To:"ZRH",
    Distance:284.848,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"FRD",
    To:"BFI",
    Distance:122.688,
    Airport:"Kenmore Air"
}),
new Routes(
{
    From:"FRE",
    To:"HIR",
    Distance:155.938,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"FRE",
    To:"VAO",
    Distance:109.785,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"FRO",
    To:"BGO",
    Distance:143.846,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"FRO",
    To:"FDE",
    Distance:44.604,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"FRO",
    To:"HOV",
    Distance:86.1519,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"FRO",
    To:"KSU",
    Distance:223.009,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"FRO",
    To:"OSL",
    Distance:363.004,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"FRU",
    To:"ALA",
    Distance:210.216,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"FRU",
    To:"ALA",
    Distance:210.216,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"CEK",
    Distance:1650.38,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"FRU",
    To:"DME",
    Distance:2942.82,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"FRU",
    To:"DME",
    Distance:2942.82,
    Airport:"Apache Air"
}),
new Routes(
{
    From:"FRU",
    To:"DME",
    Distance:2942.82,
    Airport:"Comores Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"DME",
    Distance:2942.82,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"DME",
    Distance:2942.82,
    Airport:"Gabon Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"DME",
    Distance:2942.82,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"DXB",
    Distance:2635.42,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"FRU",
    To:"DYU",
    Distance:691.586,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"DYU",
    Distance:691.586,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"FRU",
    To:"EGO",
    Distance:2965.7,
    Airport:"Comores Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"IKT",
    Distance:2439.88,
    Airport:"Comores Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"IST",
    Distance:3732.49,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"FRU",
    To:"IST",
    Distance:3732.49,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"KJA",
    Distance:1939.81,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"FRU",
    To:"KJA",
    Distance:1939.81,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"KRR",
    Distance:2807.91,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"FRU",
    To:"KZN",
    Distance:2276.25,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"LED",
    Distance:3491.9,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"LED",
    Distance:3491.9,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"OSS",
    Distance:306.297,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"FRU",
    To:"OSS",
    Distance:306.297,
    Airport:"Apache Air"
}),
new Routes(
{
    From:"FRU",
    To:"OSS",
    Distance:306.297,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"OVB",
    Distance:1454.04,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"FRU",
    To:"OVB",
    Distance:1454.04,
    Airport:"Comores Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"OVB",
    Distance:1454.04,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"OVB",
    Distance:1454.04,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"SAW",
    Distance:3696.07,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"SGC",
    Distance:2034.16,
    Airport:"Comores Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"SGC",
    Distance:2034.16,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"SVO",
    Distance:2986.62,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"SVO",
    Distance:2986.62,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FRU",
    To:"SVX",
    Distance:1801.98,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"FRU",
    To:"SVX",
    Distance:1801.98,
    Airport:"Comores Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"SVX",
    Distance:1801.98,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"SVX",
    Distance:1801.98,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"TAS",
    Distance:472.822,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"FRU",
    To:"TAS",
    Distance:472.822,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"FRU",
    To:"TSE",
    Distance:913.929,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"FRU",
    To:"ULN",
    Distance:2554.45,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"URC",
    Distance:1051.67,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"FRU",
    To:"URC",
    Distance:1051.67,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FRU",
    To:"URC",
    Distance:1051.67,
    Airport:"Comores Airlines"
}),
new Routes(
{
    From:"FRW",
    To:"GBE",
    Distance:409.856,
    Airport:"Air Botswana"
}),
new Routes(
{
    From:"FRW",
    To:"JNB",
    Distance:559.245,
    Airport:"Air Botswana"
}),
new Routes(
{
    From:"FSC",
    To:"ANG",
    Distance:854.619,
    Airport:"Luxair"
}),
new Routes(
{
    From:"FSC",
    To:"BOD",
    Distance:876.938,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"FSC",
    To:"CRL",
    Distance:1058.28,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FSC",
    To:"LIL",
    Distance:1108.32,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"FSC",
    To:"LUX",
    Distance:930.9,
    Airport:"Luxair"
}),
new Routes(
{
    From:"FSC",
    To:"MRS",
    Distance:384.375,
    Airport:"Air France"
}),
new Routes(
{
    From:"FSC",
    To:"MRS",
    Distance:384.375,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FSC",
    To:"MRS",
    Distance:384.375,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"FSC",
    To:"NCE",
    Distance:285.138,
    Airport:"Air France"
}),
new Routes(
{
    From:"FSC",
    To:"NCE",
    Distance:285.138,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"FSC",
    To:"NCE",
    Distance:285.138,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"FSC",
    To:"NTE",
    Distance:1057.04,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"FSC",
    To:"NTE",
    Distance:1057.04,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"FSC",
    To:"ORY",
    Distance:960.893,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"FSD",
    To:"ATL",
    Distance:1535.45,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FSD",
    To:"AZA",
    Distance:1724.86,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FSD",
    To:"DEN",
    Distance:776.92,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"FSD",
    To:"DEN",
    Distance:776.92,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FSD",
    To:"DFW",
    Distance:1188.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FSD",
    To:"DFW",
    Distance:1188.42,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FSD",
    To:"LAS",
    Distance:1774.14,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FSD",
    To:"MSP",
    Distance:315.481,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FSD",
    To:"ORD",
    Distance:742.529,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FSD",
    To:"ORD",
    Distance:742.529,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FSD",
    To:"ORD",
    Distance:742.529,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FSD",
    To:"PIE",
    Distance:2148.73,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FSD",
    To:"SFB",
    Distance:2148.03,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FSM",
    To:"ATL",
    Distance:929.941,
    Airport:"Air France"
}),
new Routes(
{
    From:"FSM",
    To:"ATL",
    Distance:929.941,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FSM",
    To:"ATL",
    Distance:929.941,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FSM",
    To:"DFW",
    Distance:366.077,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FSM",
    To:"DFW",
    Distance:366.077,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FSP",
    To:"YHZ",
    Distance:605.448,
    Airport:"Air Saint Pierre"
}),
new Routes(
{
    From:"FSP",
    To:"YUL",
    Distance:1358.84,
    Airport:"Air Saint Pierre"
}),
new Routes(
{
    From:"FSP",
    To:"YYT",
    Distance:275.439,
    Airport:"Air Saint Pierre"
}),
new Routes(
{
    From:"FSZ",
    To:"CTS",
    Distance:937.505,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FSZ",
    To:"CTS",
    Distance:937.505,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"FSZ",
    To:"FUK",
    Distance:724.196,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"FSZ",
    To:"ICN",
    Distance:1094.48,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FSZ",
    To:"ICN",
    Distance:1094.48,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"FSZ",
    To:"KOJ",
    Distance:769.586,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"FSZ",
    To:"OKA",
    Distance:1389.38,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FSZ",
    To:"PVG",
    Distance:1579.43,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"FSZ",
    To:"PVG",
    Distance:1579.43,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"FSZ",
    To:"TPE",
    Distance:1954.42,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"FTA",
    To:"AWD",
    Distance:72.5962,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"FTA",
    To:"TAH",
    Distance:105.89,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"FTE",
    To:"AEP",
    Distance:2068.5,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"FTE",
    To:"EZE",
    Distance:2037.53,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"FTE",
    To:"USH",
    Distance:567.2,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"FTE",
    To:"USH",
    Distance:567.2,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FTU",
    To:"TLE",
    Distance:375.477,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"FTU",
    To:"TNR",
    Distance:696.068,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"FUE",
    To:"ACE",
    Distance:60.315,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"FUE",
    To:"AMS",
    Distance:3066.2,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"FUE",
    To:"BCN",
    Distance:2031.89,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FUE",
    To:"BCN",
    Distance:2031.89,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FUE",
    To:"BCN",
    Distance:2031.89,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"BGY",
    Distance:2815.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"BHX",
    Distance:2849.97,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"FUE",
    To:"BHX",
    Distance:2849.97,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"BHX",
    Distance:2849.97,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"FUE",
    To:"BHX",
    Distance:2849.97,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"FUE",
    To:"BHX",
    Distance:2849.97,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FUE",
    To:"BIO",
    Distance:1919.59,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"FUE",
    To:"BIO",
    Distance:1919.59,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FUE",
    To:"BOH",
    Distance:2679.74,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"BRE",
    Distance:3304.07,
    Airport:"Germania"
}),
new Routes(
{
    From:"FUE",
    To:"BRE",
    Distance:3304.07,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"BRS",
    Distance:2713.92,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FUE",
    To:"BRS",
    Distance:2713.92,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FUE",
    To:"BRU",
    Distance:2930.94,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"FUE",
    To:"BSL",
    Distance:2816.24,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FUE",
    To:"BSL",
    Distance:2816.24,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FUE",
    To:"CGN",
    Distance:3050.01,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FUE",
    To:"CGN",
    Distance:3050.01,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FUE",
    To:"CRL",
    Distance:2891.28,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"DUB",
    Distance:2844.94,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"FUE",
    To:"DUB",
    Distance:2844.94,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"DUS",
    Distance:3066.91,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FUE",
    To:"DUS",
    Distance:3066.91,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FUE",
    To:"DUS",
    Distance:3066.91,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FUE",
    To:"EDI",
    Distance:3169.24,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"EMA",
    Distance:2900.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"EMA",
    Distance:2900.03,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"FUE",
    To:"EMA",
    Distance:2900.03,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"FUE",
    To:"EMA",
    Distance:2900.03,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FUE",
    To:"ERF",
    Distance:3251.61,
    Airport:"Germania"
}),
new Routes(
{
    From:"FUE",
    To:"FCO",
    Distance:2783.51,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FUE",
    To:"FRA",
    Distance:3053.86,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FUE",
    To:"FRA",
    Distance:3053.86,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FUE",
    To:"GLA",
    Distance:3139.87,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FUE",
    To:"GLA",
    Distance:3139.87,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"FUE",
    To:"HAJ",
    Distance:3299.39,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FUE",
    To:"HAJ",
    Distance:3299.39,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FUE",
    To:"HAM",
    Distance:3406.03,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FUE",
    To:"HAM",
    Distance:3406.03,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FUE",
    To:"LBA",
    Distance:2995.02,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FUE",
    To:"LBA",
    Distance:2995.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"LEJ",
    Distance:3352.37,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FUE",
    To:"LEJ",
    Distance:3352.37,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FUE",
    To:"LGW",
    Distance:2770.36,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"FUE",
    To:"LGW",
    Distance:2770.36,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"FUE",
    To:"LGW",
    Distance:2770.36,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"FUE",
    To:"LGW",
    Distance:2770.36,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FUE",
    To:"LGW",
    Distance:2770.36,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FUE",
    To:"LPA",
    Distance:160.083,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"FUE",
    To:"LPA",
    Distance:160.083,
    Airport:"Tropic Air"
}),
new Routes(
{
    From:"FUE",
    To:"LPL",
    Distance:2909.62,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"LPL",
    Distance:2909.62,
    Airport:"easyJet"
}),
new Routes(
{
    From:"FUE",
    To:"LTN",
    Distance:2835.04,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"LTN",
    Distance:2835.04,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FUE",
    To:"LUX",
    Distance:2904.24,
    Airport:"Luxair"
}),
new Routes(
{
    From:"FUE",
    To:"MAD",
    Distance:1635.5,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"FUE",
    To:"MAD",
    Distance:1635.5,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"FUE",
    To:"MAD",
    Distance:1635.5,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"MAN",
    Distance:2926.55,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"FUE",
    To:"MAN",
    Distance:2926.55,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FUE",
    To:"MAN",
    Distance:2926.55,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"FUE",
    To:"MAN",
    Distance:2926.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"MAN",
    Distance:2926.55,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FUE",
    To:"MUC",
    Distance:3116.73,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FUE",
    To:"MUC",
    Distance:3116.73,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FUE",
    To:"MUC",
    Distance:3116.73,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FUE",
    To:"MXP",
    Distance:2750.99,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FUE",
    To:"NRN",
    Distance:3064.49,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"NTE",
    Distance:2334.97,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"FUE",
    To:"NUE",
    Distance:3152.09,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FUE",
    To:"ORK",
    Distance:2638.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"PAD",
    Distance:3181.07,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FUE",
    To:"PIK",
    Distance:3098.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"PSA",
    Distance:2742.96,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"SNN",
    Distance:2726.92,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"STN",
    Distance:2856.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"FUE",
    To:"STN",
    Distance:2856.14,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"FUE",
    To:"STR",
    Distance:2991.25,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FUE",
    To:"STR",
    Distance:2991.25,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FUE",
    To:"SXF",
    Distance:3487.1,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"FUE",
    To:"SZG",
    Distance:3155.85,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FUE",
    To:"SZG",
    Distance:3155.85,
    Airport:"Niki"
}),
new Routes(
{
    From:"FUE",
    To:"TFN",
    Distance:242.221,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"FUE",
    To:"TFS",
    Distance:269.174,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"FUE",
    To:"TFS",
    Distance:269.174,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FUE",
    To:"TXL",
    Distance:3487.44,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FUE",
    To:"VIE",
    Distance:3401.4,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FUE",
    To:"VIE",
    Distance:3401.4,
    Airport:"Niki"
}),
new Routes(
{
    From:"FUE",
    To:"VRN",
    Distance:2875.34,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"FUE",
    To:"ZQW",
    Distance:2931.63,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"FUE",
    To:"ZRH",
    Distance:2865.44,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"FUE",
    To:"ZRH",
    Distance:2865.44,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"FUG",
    To:"CAN",
    Distance:1085.51,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FUG",
    To:"DLC",
    Distance:848.294,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"FUG",
    To:"HGH",
    Distance:528.664,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"FUG",
    To:"PEK",
    Distance:801.327,
    Airport:"Air China"
}),
new Routes(
{
    From:"FUG",
    To:"PEK",
    Distance:801.327,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"FUG",
    To:"SHA",
    Distance:553.486,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"FUG",
    To:"SHA",
    Distance:553.486,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"FUG",
    To:"TSN",
    Distance:705.622,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"FUG",
    To:"WNZ",
    Distance:735.153,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"FUG",
    To:"XIY",
    Distance:675.871,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"FUG",
    To:"XMN",
    Distance:955.99,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"FUJ",
    To:"FUK",
    Distance:182.085,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUJ",
    To:"FUK",
    Distance:182.085,
    Airport:"Catovair"
}),
new Routes(
{
    From:"FUJ",
    To:"NGS",
    Distance:104.803,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUJ",
    To:"NGS",
    Distance:104.803,
    Airport:"Catovair"
}),
new Routes(
{
    From:"FUK",
    To:"AMS",
    Distance:9108.67,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"BKK",
    Distance:3724.83,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"BKK",
    Distance:3724.83,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"FUK",
    To:"CAN",
    Distance:2018.85,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"CJU",
    Distance:366.835,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"CJU",
    Distance:366.835,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"CTS",
    Distance:1415.08,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"CTS",
    Distance:1415.08,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"CTS",
    Distance:1415.08,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"DLC",
    Distance:997.202,
    Airport:"Air China"
}),
new Routes(
{
    From:"FUK",
    To:"DLC",
    Distance:997.202,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"FSZ",
    Distance:724.196,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"FUJ",
    Distance:182.085,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"FUJ",
    Distance:182.085,
    Airport:"Catovair"
}),
new Routes(
{
    From:"FUK",
    To:"GUM",
    Distance:2664.36,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"GUM",
    Distance:2664.36,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"HAN",
    Distance:2783.39,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"HAN",
    Distance:2783.39,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"HKG",
    Distance:2047.17,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"FUK",
    To:"HKG",
    Distance:2047.17,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"FUK",
    To:"HKG",
    Distance:2047.17,
    Airport:"Hong Kong Express Airways"
}),
new Routes(
{
    From:"FUK",
    To:"HNA",
    Distance:1153.68,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"HND",
    Distance:881.334,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"HND",
    Distance:881.334,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"HND",
    Distance:881.334,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"HND",
    Distance:881.334,
    Airport:"Star Flyer"
}),
new Routes(
{
    From:"FUK",
    To:"HNL",
    Distance:7064.22,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FUK",
    To:"HNL",
    Distance:7064.22,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"IBR",
    Distance:953.103,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"ICN",
    Distance:563.323,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"ICN",
    Distance:563.323,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"ICN",
    Distance:563.323,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"ICN",
    Distance:563.323,
    Airport:"Jeju Air"
}),
new Routes(
{
    From:"FUK",
    To:"ICN",
    Distance:563.323,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"FUK",
    To:"ICN",
    Distance:563.323,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"ICN",
    Distance:563.323,
    Airport:"Tway Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"ISG",
    Distance:1194.01,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"ITM",
    Distance:477.702,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"ITM",
    Distance:477.702,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"ITM",
    Distance:477.702,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"KIJ",
    Distance:895.668,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"KIJ",
    Distance:895.668,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"KIX",
    Distance:451.751,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"KIX",
    Distance:451.751,
    Airport:"Genesis"
}),
new Routes(
{
    From:"FUK",
    To:"KIX",
    Distance:451.751,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"FUK",
    To:"KMI",
    Distance:211.689,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"KMI",
    Distance:211.689,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"KMQ",
    Distance:625.838,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"KMQ",
    Distance:625.838,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"MFM",
    Distance:2083.85,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"FUK",
    To:"MMJ",
    Distance:739.288,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"MNL",
    Distance:2324.46,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"NGO",
    Distance:601.04,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"NGO",
    Distance:601.04,
    Airport:"Genesis"
}),
new Routes(
{
    From:"FUK",
    To:"NGO",
    Distance:601.04,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"NRT",
    Distance:939.835,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"NRT",
    Distance:939.835,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"NRT",
    Distance:939.835,
    Airport:"Genesis"
}),
new Routes(
{
    From:"FUK",
    To:"NRT",
    Distance:939.835,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"OKA",
    Distance:864.969,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"OKA",
    Distance:864.969,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"FUK",
    To:"OKA",
    Distance:864.969,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"PUS",
    Distance:225.078,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"FUK",
    To:"PUS",
    Distance:225.078,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"PUS",
    Distance:225.078,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"FUK",
    To:"PVG",
    Distance:855.878,
    Airport:"Air China"
}),
new Routes(
{
    From:"FUK",
    To:"PVG",
    Distance:855.878,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"PVG",
    Distance:855.878,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"SDJ",
    Distance:1069.53,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"SDJ",
    Distance:1069.53,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"SDJ",
    Distance:1069.53,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"SDJ",
    Distance:1069.53,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"SGN",
    Distance:3504.26,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"SGN",
    Distance:3504.26,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"SHE",
    Distance:1071.85,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"SIN",
    Distance:4520.67,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"SIN",
    Distance:4520.67,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"TAO",
    Distance:965.196,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"TAO",
    Distance:965.196,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"TPE",
    Distance:1300.1,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUK",
    To:"TPE",
    Distance:1300.1,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"FUK",
    To:"TPE",
    Distance:1300.1,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"TPE",
    Distance:1300.1,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"FUK",
    To:"TPE",
    Distance:1300.1,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"FUK",
    To:"TSJ",
    Distance:129.3,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"FUN",
    To:"SUV",
    Distance:1060.62,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"FUO",
    To:"NAY",
    Distance:1874.23,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"FUO",
    To:"NAY",
    Distance:1874.23,
    Airport:"China United"
}),
new Routes(
{
    From:"FUT",
    To:"WLS",
    Distance:234.268,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"FWA",
    To:"ATL",
    Distance:819.169,
    Airport:"Air France"
}),
new Routes(
{
    From:"FWA",
    To:"ATL",
    Distance:819.169,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FWA",
    To:"ATL",
    Distance:819.169,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"FWA",
    To:"ATL",
    Distance:819.169,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"FWA",
    To:"AZA",
    Distance:2483.86,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FWA",
    To:"DFW",
    Distance:1381.68,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FWA",
    To:"DFW",
    Distance:1381.68,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FWA",
    To:"DTW",
    Distance:205.62,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FWA",
    To:"MSP",
    Distance:783.918,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"FWA",
    To:"MYR",
    Distance:982.058,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FWA",
    To:"ORD",
    Distance:251.629,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"FWA",
    To:"ORD",
    Distance:251.629,
    Airport:"US Airways"
}),
new Routes(
{
    From:"FWA",
    To:"ORD",
    Distance:251.629,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"FWA",
    To:"PGD",
    Distance:1590.63,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FWA",
    To:"PIE",
    Distance:1471.02,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FWA",
    To:"SFB",
    Distance:1403.45,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"FYU",
    To:"BTI",
    Distance:401.963,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"FYU",
    To:"FAI",
    Distance:228.797,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"FYU",
    To:"FAI",
    Distance:228.797,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"FYU",
    To:"VEE",
    Distance:68.9481,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"GAE",
    To:"TOE",
    Distance:184.031,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"GAE",
    To:"TUN",
    Distance:330.897,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"GAF",
    To:"GAE",
    Distance:132.535,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"GAF",
    To:"TOE",
    Distance:84.6466,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"GAJ",
    To:"HND",
    Distance:322.288,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"GAJ",
    To:"ITM",
    Distance:596.925,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"GAJ",
    To:"NKM",
    Distance:466.132,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"GAL",
    To:"FAI",
    Distance:430.051,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"GAL",
    To:"HSL",
    Distance:110.358,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"GAL",
    To:"KAL",
    Distance:97.9242,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"GAL",
    To:"KAL",
    Distance:97.9242,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"GAL",
    To:"NUL",
    Distance:53.9574,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"GAL",
    To:"NUL",
    Distance:53.9574,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"GAL",
    To:"RBY",
    Distance:69.6557,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"GAM",
    To:"OME",
    Distance:315.878,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"GAM",
    To:"OME",
    Distance:315.878,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"GAM",
    To:"SVA",
    Distance:61.6843,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"GAM",
    To:"SVA",
    Distance:61.6843,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"GAN",
    To:"CMB",
    Distance:1150.52,
    Airport:"Maldivian"
}),
new Routes(
{
    From:"GAN",
    To:"KDM",
    Distance:132.565,
    Airport:"Maldivian"
}),
new Routes(
{
    From:"GAN",
    To:"MLE",
    Distance:544.79,
    Airport:"Maldivian"
}),
new Routes(
{
    From:"GAO",
    To:"HAV",
    Distance:816.337,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"GAU",
    To:"AJL",
    Distance:289.632,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"GAU",
    To:"AJL",
    Distance:289.632,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"GAU",
    To:"BKK",
    Distance:1679.63,
    Airport:"Druk Air"
}),
new Routes(
{
    From:"GAU",
    To:"BLR",
    Distance:2062.37,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"GAU",
    To:"BOM",
    Distance:2071.07,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"GAU",
    To:"CCU",
    Distance:498.309,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"GAU",
    To:"CCU",
    Distance:498.309,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"GAU",
    To:"CCU",
    Distance:498.309,
    Airport:"Go Air"
}),
new Routes(
{
    From:"GAU",
    To:"CCU",
    Distance:498.309,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"GAU",
    To:"CCU",
    Distance:498.309,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"GAU",
    To:"CCU",
    Distance:498.309,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"GAU",
    To:"DEL",
    Distance:1455.52,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"GAU",
    To:"DEL",
    Distance:1455.52,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"GAU",
    To:"DEL",
    Distance:1455.52,
    Airport:"Go Air"
}),
new Routes(
{
    From:"GAU",
    To:"DEL",
    Distance:1455.52,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"GAU",
    To:"DEL",
    Distance:1455.52,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"GAU",
    To:"DEL",
    Distance:1455.52,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"GAU",
    To:"DIB",
    Distance:373.394,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"GAU",
    To:"DIB",
    Distance:373.394,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"GAU",
    To:"IMF",
    Distance:276.123,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"GAU",
    To:"IMF",
    Distance:276.123,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"GAU",
    To:"IMF",
    Distance:276.123,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"GAU",
    To:"IMF",
    Distance:276.123,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"GAU",
    To:"IXA",
    Distance:249.198,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"GAU",
    To:"IXA",
    Distance:249.198,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"GAU",
    To:"IXB",
    Distance:330.679,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"GAU",
    To:"IXB",
    Distance:330.679,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"GAU",
    To:"IXS",
    Distance:192.712,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"GAU",
    To:"IXS",
    Distance:192.712,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"GAU",
    To:"IXS",
    Distance:192.712,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"GAU",
    To:"PBH",
    Distance:258.556,
    Airport:"Druk Air"
}),
new Routes(
{
    From:"GBB",
    To:"DME",
    Distance:1773.33,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"GBE",
    To:"BBK",
    Distance:751.58,
    Airport:"Air Botswana"
}),
new Routes(
{
    From:"GBE",
    To:"CPT",
    Distance:1263.38,
    Airport:"Air Botswana"
}),
new Routes(
{
    From:"GBE",
    To:"FRW",
    Distance:409.856,
    Airport:"Air Botswana"
}),
new Routes(
{
    From:"GBE",
    To:"HRE",
    Distance:910.79,
    Airport:"Air Botswana"
}),
new Routes(
{
    From:"GBE",
    To:"JNB",
    Distance:292.8,
    Airport:"Air Botswana"
}),
new Routes(
{
    From:"GBE",
    To:"JNB",
    Distance:292.8,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"GBE",
    To:"LUN",
    Distance:1059.27,
    Airport:"Air Botswana"
}),
new Routes(
{
    From:"GBE",
    To:"MUB",
    Distance:570.185,
    Airport:"Air Botswana"
}),
new Routes(
{
    From:"GBE",
    To:"NBO",
    Distance:2841.87,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"GBT",
    To:"MED",
    Distance:1960.13,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"GBT",
    To:"MHD",
    Distance:474.012,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"GBT",
    To:"THR",
    Distance:308.178,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"GBT",
    To:"THR",
    Distance:308.178,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"GBT",
    To:"ZAH",
    Distance:1023.88,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"GBT",
    To:"ZAH",
    Distance:1023.88,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"GCC",
    To:"DEN",
    Distance:504.042,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GCC",
    To:"RKS",
    Distance:419.569,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GCC",
    To:"SLC",
    Distance:659.007,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GCI",
    To:"ACI",
    Distance:41.0959,
    Airport:"Aurigny Air Services"
}),
new Routes(
{
    From:"GCI",
    To:"AMS",
    Distance:607.225,
    Airport:"Skynet Airlines"
}),
new Routes(
{
    From:"GCI",
    To:"BHX",
    Distance:340.969,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GCI",
    To:"BRS",
    Distance:216.735,
    Airport:"Aurigny Air Services"
}),
new Routes(
{
    From:"GCI",
    To:"DNR",
    Distance:101.614,
    Airport:"Aurigny Air Services"
}),
new Routes(
{
    From:"GCI",
    To:"DUS",
    Distance:695.259,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"GCI",
    To:"EMA",
    Distance:387.939,
    Airport:"Aurigny Air Services"
}),
new Routes(
{
    From:"GCI",
    To:"EXT",
    Distance:155.674,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GCI",
    To:"JER",
    Distance:38.7948,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"GCI",
    To:"JER",
    Distance:38.7948,
    Airport:"Aurigny Air Services"
}),
new Routes(
{
    From:"GCI",
    To:"JER",
    Distance:38.7948,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GCI",
    To:"JER",
    Distance:38.7948,
    Airport:"Skynet Airlines"
}),
new Routes(
{
    From:"GCI",
    To:"LGW",
    Distance:256.173,
    Airport:"Aurigny Air Services"
}),
new Routes(
{
    From:"GCI",
    To:"MAN",
    Distance:436.338,
    Airport:"Aurigny Air Services"
}),
new Routes(
{
    From:"GCI",
    To:"NWI",
    Distance:451.067,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GCI",
    To:"SOU",
    Distance:190.381,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GCI",
    To:"SOU",
    Distance:190.381,
    Airport:"Skynet Airlines"
}),
new Routes(
{
    From:"GCI",
    To:"STN",
    Distance:337.892,
    Airport:"Aurigny Air Services"
}),
new Routes(
{
    From:"GCK",
    To:"DFW",
    Distance:651.407,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GCK",
    To:"DFW",
    Distance:651.407,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GCM",
    To:"ATL",
    Distance:1623.73,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GCM",
    To:"CLT",
    Distance:1770.83,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GCM",
    To:"CLT",
    Distance:1770.83,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GCM",
    To:"CYB",
    Distance:160.703,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"GCM",
    To:"DTW",
    Distance:2555.48,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GCM",
    To:"EWR",
    Distance:2475.92,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GCM",
    To:"HAV",
    Distance:425.228,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"GCM",
    To:"IAD",
    Distance:2217.19,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GCM",
    To:"IAH",
    Distance:1843.83,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GCM",
    To:"JFK",
    Distance:2480.87,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"GCM",
    To:"JFK",
    Distance:2480.87,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"GCM",
    To:"KIN",
    Distance:504.666,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"GCM",
    To:"LCE",
    Distance:703.728,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"GCM",
    To:"LCE",
    Distance:703.728,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"GCM",
    To:"LYB",
    Distance:138.922,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"GCM",
    To:"MIA",
    Distance:731.068,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GCM",
    To:"MIA",
    Distance:731.068,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"GCM",
    To:"MIA",
    Distance:731.068,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GCM",
    To:"NAS",
    Distance:754.077,
    Airport:"British Airways"
}),
new Routes(
{
    From:"GCM",
    To:"ORD",
    Distance:2597.09,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"GCM",
    To:"PHL",
    Distance:2361.91,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GCM",
    To:"PHL",
    Distance:2361.91,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GCM",
    To:"TPA",
    Distance:972.847,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"GCM",
    To:"YYZ",
    Distance:2716.21,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"GCM",
    To:"YYZ",
    Distance:2716.21,
    Airport:"WestJet"
}),
new Routes(
{
    From:"GCN",
    To:"PGA",
    Distance:125.018,
    Airport:"SENIC AIRLINES"
}),
new Routes(
{
    From:"GCW",
    To:"BLD",
    Distance:93.0274,
    Airport:"Papillon Grand Canyon Helicopters"
}),
new Routes(
{
    From:"GDE",
    To:"JIJ",
    Distance:390.647,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"GDL",
    To:"ATL",
    Distance:2363.87,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"ATL",
    Distance:2363.87,
    Airport:"Air France"
}),
new Routes(
{
    From:"GDL",
    To:"ATL",
    Distance:2363.87,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"GDL",
    To:"ATL",
    Distance:2363.87,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GDL",
    To:"ATL",
    Distance:2363.87,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"GDL",
    To:"ATL",
    Distance:2363.87,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"GDL",
    To:"CEN",
    Distance:1010.94,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"CJS",
    Distance:1274.27,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"GDL",
    To:"CJS",
    Distance:1274.27,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"CUL",
    Distance:636.395,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"CUL",
    Distance:636.395,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"CUN",
    Distance:1708.73,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"GDL",
    To:"CUN",
    Distance:1708.73,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"CUU",
    Distance:948.311,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"CUU",
    Distance:948.311,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"DFW",
    Distance:1509.64,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GDL",
    To:"DFW",
    Distance:1509.64,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GDL",
    To:"FAT",
    Distance:2406.9,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"FAT",
    Distance:2406.9,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GDL",
    To:"FAT",
    Distance:2406.9,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"HMO",
    Distance:1231.55,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"HMO",
    Distance:1231.55,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"GDL",
    To:"HMO",
    Distance:1231.55,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"IAH",
    Distance:1321.7,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GDL",
    To:"LAP",
    Distance:825.723,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"LAP",
    Distance:825.723,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"GDL",
    To:"LAP",
    Distance:825.723,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"LAS",
    Distance:2078.52,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"LAX",
    Distance:2105.68,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"LAX",
    Distance:2105.68,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"GDL",
    To:"LAX",
    Distance:2105.68,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"GDL",
    To:"LAX",
    Distance:2105.68,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GDL",
    To:"LAX",
    Distance:2105.68,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GDL",
    To:"LAX",
    Distance:2105.68,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GDL",
    To:"LAX",
    Distance:2105.68,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"LMM",
    Distance:823.073,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"MDW",
    Distance:2779.55,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"MEX",
    Distance:459.124,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"MEX",
    Distance:459.124,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"GDL",
    To:"MEX",
    Distance:459.124,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"GDL",
    To:"MEX",
    Distance:459.124,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"MID",
    Distance:1420.24,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"GDL",
    To:"MID",
    Distance:1420.24,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"MTY",
    Distance:669.976,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"MTY",
    Distance:669.976,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"GDL",
    To:"MTY",
    Distance:669.976,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GDL",
    To:"MTY",
    Distance:669.976,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"GDL",
    To:"MTY",
    Distance:669.976,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"MXL",
    Distance:1791.74,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"MZT",
    Distance:423.242,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"OAK",
    Distance:2641.04,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"ONT",
    Distance:2059.13,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"ONT",
    Distance:2059.13,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GDL",
    To:"ONT",
    Distance:2059.13,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"ORD",
    Distance:2789.39,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"ORD",
    Distance:2789.39,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GDL",
    To:"PBC",
    Distance:538.426,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"PHX",
    Distance:1673.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GDL",
    To:"PHX",
    Distance:1673.01,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GDL",
    To:"PHX",
    Distance:1673.01,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"PTY",
    Distance:2864.48,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"PTY",
    Distance:2864.48,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"GDL",
    To:"PVR",
    Distance:202.999,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"REX",
    Distance:800.936,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"GDL",
    To:"SAT",
    Distance:1114.12,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"GDL",
    To:"SAT",
    Distance:1114.12,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"SFO",
    Distance:2643.86,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"SFO",
    Distance:2643.86,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"GDL",
    To:"SFO",
    Distance:2643.86,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GDL",
    To:"SJC",
    Distance:2595.46,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"SJC",
    Distance:2595.46,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"GDL",
    To:"SJC",
    Distance:2595.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GDL",
    To:"SJC",
    Distance:2595.46,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"SJD",
    Distance:723.235,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"GDL",
    To:"SJD",
    Distance:723.235,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"GDL",
    To:"SJD",
    Distance:723.235,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"SLC",
    Distance:2398.03,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GDL",
    To:"SMF",
    Distance:2673.62,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"SMF",
    Distance:2673.62,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GDL",
    To:"SMF",
    Distance:2673.62,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"SNA",
    Distance:2048.68,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"GDL",
    To:"TGZ",
    Distance:1169.88,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"GDL",
    To:"TGZ",
    Distance:1169.88,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"TIJ",
    Distance:1902.38,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"TIJ",
    Distance:1902.38,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"GDL",
    To:"TIJ",
    Distance:1902.38,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"TLC",
    Distance:413.056,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"TLC",
    Distance:413.056,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"TRC",
    Distance:561.235,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GDL",
    To:"TRC",
    Distance:561.235,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"GDL",
    To:"VER",
    Distance:760.617,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"GDL",
    To:"VER",
    Distance:760.617,
    Airport:"Volaris"
}),
new Routes(
{
    From:"GDL",
    To:"VSA",
    Distance:1136.49,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"GDN",
    To:"AES",
    Distance:1155.35,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"AMS",
    Distance:936.62,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"GDN",
    To:"BCN",
    Distance:1890.94,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"BGO",
    Distance:1028.69,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"BGY",
    Distance:1150.66,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"BHX",
    Distance:1351.78,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GDN",
    To:"BRS",
    Distance:1454.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GDN",
    To:"BRU",
    Distance:1017.36,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"GDN",
    To:"BVA",
    Distance:1244.14,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"CGN",
    Distance:856.982,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"CPH",
    Distance:395.276,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"GDN",
    To:"CPH",
    Distance:395.276,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"GDN",
    To:"DTM",
    Distance:792.605,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"DUB",
    Distance:1615.76,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GDN",
    To:"EDI",
    Distance:1392.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GDN",
    To:"EIN",
    Distance:934.537,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"FCO",
    Distance:1470.89,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"FRA",
    Distance:830.284,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"GDN",
    To:"FRA",
    Distance:830.284,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GDN",
    To:"GLA",
    Distance:1458.6,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"GSE",
    Distance:556.535,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"HAU",
    Distance:974.321,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"HEL",
    Distance:766.093,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"GDN",
    To:"KRK",
    Distance:486.459,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"GDN",
    To:"KRS",
    Distance:767.773,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"LBA",
    Distance:1308.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GDN",
    To:"LBC",
    Distance:508.947,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"LPL",
    Distance:1397.44,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"LTN",
    Distance:1282.98,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"LUZ",
    Distance:450.713,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"GDN",
    To:"MAN",
    Distance:1359.78,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GDN",
    To:"MMX",
    Distance:349.535,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"MUC",
    Distance:813.911,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"GDN",
    To:"MUC",
    Distance:813.911,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GDN",
    To:"NYO",
    Distance:499.599,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"ORK",
    Distance:1809.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GDN",
    To:"OSL",
    Distance:782.715,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"GDN",
    To:"OSL",
    Distance:782.715,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"GDN",
    To:"PSA",
    Distance:1324.77,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GDN",
    To:"RYG",
    Distance:725.069,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GDN",
    To:"STN",
    Distance:1243.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GDN",
    To:"SVG",
    Distance:928.277,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"TKU",
    Distance:718.879,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"TRD",
    Distance:1096.82,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"TRF",
    Distance:731.064,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GDN",
    To:"TXL",
    Distance:397.786,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"GDN",
    To:"WAW",
    Distance:296.85,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"GDN",
    To:"WMI",
    Distance:258.556,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GDN",
    To:"WRO",
    Distance:379.349,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"GDN",
    To:"ZRH",
    Distance:1034.46,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"GDQ",
    To:"ADD",
    Distance:421.139,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"GDQ",
    To:"LLI",
    Distance:178.578,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"GDT",
    To:"PLS",
    Distance:121.785,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"GDT",
    To:"PLS",
    Distance:121.785,
    Airport:"PB Air"
}),
new Routes(
{
    From:"GDT",
    To:"SLX",
    Distance:13.7625,
    Airport:"PB Air"
}),
new Routes(
{
    From:"GDT",
    To:"XSC",
    Distance:40.7412,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"GDV",
    To:"BIL",
    Distance:321.602,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"GDX",
    To:"DME",
    Distance:5892.42,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"GDX",
    To:"IKT",
    Distance:2929.19,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"GDX",
    To:"KHV",
    Distance:1610.87,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"GDX",
    To:"KHV",
    Distance:1610.87,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"GDX",
    To:"KHV",
    Distance:1610.87,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"GDX",
    To:"YKS",
    Distance:1149.64,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"GDZ",
    To:"SVO",
    Distance:1269,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"GEA",
    To:"ILP",
    Distance:107.539,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"GEA",
    To:"KNQ",
    Distance:215.635,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"GEA",
    To:"KOC",
    Distance:298.193,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"GEA",
    To:"LIF",
    Distance:183.046,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"GEA",
    To:"MEE",
    Distance:183.104,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"GEA",
    To:"TGJ",
    Distance:188.732,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"GEA",
    To:"TOU",
    Distance:205.925,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"GEA",
    To:"UVE",
    Distance:180.18,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"GEG",
    To:"BOI",
    Distance:462.325,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"GEG",
    To:"DEN",
    Distance:1342.9,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"GEG",
    To:"DEN",
    Distance:1342.9,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"GEG",
    To:"DEN",
    Distance:1342.9,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"GEG",
    To:"DEN",
    Distance:1342.9,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GEG",
    To:"LAS",
    Distance:1298.07,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"GEG",
    To:"LAX",
    Distance:1522.6,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GEG",
    To:"MSP",
    Distance:1885.99,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GEG",
    To:"OAK",
    Distance:1164.89,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"GEG",
    To:"PDX",
    Distance:447.808,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"GEG",
    To:"PHX",
    Distance:1643.86,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GEG",
    To:"PHX",
    Distance:1643.86,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"GEG",
    To:"PHX",
    Distance:1643.86,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GEG",
    To:"SEA",
    Distance:358.955,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"GEG",
    To:"SLC",
    Distance:878.753,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GEL",
    To:"POA",
    Distance:347.88,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"GEL",
    To:"RIA",
    Distance:165.712,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"GEO",
    To:"JFK",
    Distance:4098.16,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"GEO",
    To:"KIN",
    Distance:2378.47,
    Airport:"Overland Airways"
}),
new Routes(
{
    From:"GEO",
    To:"MIA",
    Distance:3173.58,
    Airport:"Surinam Airways"
}),
new Routes(
{
    From:"GEO",
    To:"PBM",
    Distance:358.485,
    Airport:"Surinam Airways"
}),
new Routes(
{
    From:"GEO",
    To:"POS",
    Distance:567.806,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"GEO",
    To:"PZO",
    Distance:535.263,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"GEO",
    To:"YYZ",
    Distance:4630.3,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"GEO",
    To:"YYZ",
    Distance:4630.3,
    Airport:"Overland Airways"
}),
new Routes(
{
    From:"GES",
    To:"CEB",
    Distance:487.15,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"GES",
    To:"ILO",
    Distance:591.512,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"GES",
    To:"MNL",
    Distance:1041.71,
    Airport:"Air Philippines"
}),
new Routes(
{
    From:"GES",
    To:"MNL",
    Distance:1041.71,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"GES",
    To:"MNL",
    Distance:1041.71,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"GET",
    To:"PER",
    Distance:369.913,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"GET",
    To:"PER",
    Distance:369.913,
    Airport:"Qantas"
}),
new Routes(
{
    From:"GET",
    To:"PER",
    Distance:369.913,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"GEV",
    To:"ARN",
    Distance:843.972,
    Airport:"NextJet"
}),
new Routes(
{
    From:"GEV",
    To:"ARN",
    Distance:843.972,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"GEV",
    To:"KRF",
    Distance:475.837,
    Airport:"NextJet"
}),
new Routes(
{
    From:"GEV",
    To:"KRF",
    Distance:475.837,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"GFF",
    To:"NRA",
    Distance:64.6779,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"GFF",
    To:"SYD",
    Distance:471.706,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"GFK",
    To:"AZA",
    Distance:2028.3,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GFK",
    To:"LAS",
    Distance:1977.9,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GFK",
    To:"MSP",
    Distance:456.189,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GFK",
    To:"SFB",
    Distance:2533.48,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GFK",
    To:"TVF",
    Distance:74.8569,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"GFN",
    To:"TRO",
    Distance:241.828,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"GGG",
    To:"DFW",
    Distance:225.175,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GGG",
    To:"DFW",
    Distance:225.175,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GGT",
    To:"ATL",
    Distance:1395.67,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GGT",
    To:"FLL",
    Distance:513.778,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GGT",
    To:"GHB",
    Distance:196.903,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GGT",
    To:"MIA",
    Distance:510.138,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GGT",
    To:"MIA",
    Distance:510.138,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GGT",
    To:"NAS",
    Distance:229.9,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"GGT",
    To:"YYZ",
    Distance:2262.83,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"GGW",
    To:"BIL",
    Distance:304.383,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"GHA",
    To:"ALG",
    Distance:481.828,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"GHA",
    To:"CZL",
    Distance:504.548,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"GHA",
    To:"ORN",
    Distance:543.413,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"GHA",
    To:"TMR",
    Distance:1076.83,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"GHB",
    To:"FLL",
    Distance:392.863,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GHB",
    To:"NAS",
    Distance:117.475,
    Airport:"Aeroper"
}),
new Routes(
{
    From:"GHB",
    To:"NAS",
    Distance:117.475,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"GHE",
    To:"PAC",
    Distance:166.132,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"GHT",
    To:"TIP",
    Distance:885.891,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"GIB",
    To:"BHX",
    Distance:1834.7,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"GIB",
    To:"LGW",
    Distance:1717.37,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GIB",
    To:"LHR",
    Distance:1747.75,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GIB",
    To:"LHR",
    Distance:1747.75,
    Airport:"British Airways"
}),
new Routes(
{
    From:"GIB",
    To:"LTN",
    Distance:1792.11,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"GIB",
    To:"MAN",
    Distance:1927.72,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"GIG",
    To:"AEP",
    Distance:1969.77,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"GIG",
    To:"AJU",
    Distance:1469.11,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"AMS",
    Distance:9559.26,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"ATL",
    Distance:7641.81,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GIG",
    To:"ATL",
    Distance:7641.81,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"GIG",
    To:"BEL",
    Distance:2448.96,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"BEL",
    Distance:2448.96,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"BOG",
    Distance:4541.55,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"GIG",
    To:"BSB",
    Distance:913.95,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"BSB",
    Distance:913.95,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GIG",
    To:"BSB",
    Distance:913.95,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"CDG",
    Distance:9183.84,
    Airport:"Air France"
}),
new Routes(
{
    From:"GIG",
    To:"CGB",
    Distance:1567.08,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"CGH",
    Distance:360.295,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"CGH",
    Distance:360.295,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"CGR",
    Distance:1209.21,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"CLT",
    Distance:7576.74,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"CLT",
    Distance:7576.74,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GIG",
    To:"CNF",
    Distance:360.972,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"CNF",
    Distance:360.972,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"CWB",
    Distance:673.387,
    Airport:"Air France"
}),
new Routes(
{
    From:"GIG",
    To:"CWB",
    Distance:673.387,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"CWB",
    Distance:673.387,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"CWB",
    Distance:673.387,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"DFW",
    Distance:8419.83,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"DFW",
    Distance:8419.83,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"DFW",
    Distance:8419.83,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GIG",
    To:"DXB",
    Distance:11883.2,
    Airport:"Emirates"
}),
new Routes(
{
    From:"GIG",
    To:"EZE",
    Distance:1996.36,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"GIG",
    To:"EZE",
    Distance:1996.36,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"EZE",
    Distance:1996.36,
    Airport:"Emirates"
}),
new Routes(
{
    From:"GIG",
    To:"EZE",
    Distance:1996.36,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"EZE",
    Distance:1996.36,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"EZE",
    Distance:1996.36,
    Airport:"TAM Mercosur"
}),
new Routes(
{
    From:"GIG",
    To:"FCO",
    Distance:9171.55,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"GIG",
    To:"FLN",
    Distance:759.245,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"FLN",
    Distance:759.245,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GIG",
    To:"FLN",
    Distance:759.245,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"FOR",
    Distance:2176.23,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"FOR",
    Distance:2176.23,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GIG",
    To:"FOR",
    Distance:2176.23,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"FRA",
    Distance:9566.01,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GIG",
    To:"FRA",
    Distance:9566.01,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"GRU",
    Distance:337.079,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"GRU",
    Distance:337.079,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"GRU",
    Distance:337.079,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GIG",
    To:"GRU",
    Distance:337.079,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"GRU",
    Distance:337.079,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"GYN",
    Distance:928.762,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"IAH",
    Distance:8088.04,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"IGU",
    Distance:1181.23,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"IGU",
    Distance:1181.23,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"JFK",
    Distance:7729.51,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"JFK",
    Distance:7729.51,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"JFK",
    Distance:7729.51,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GIG",
    To:"JPA",
    Distance:1954.43,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"JPA",
    Distance:1954.43,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GIG",
    To:"JPA",
    Distance:1954.43,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"LAD",
    Distance:6199.63,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"LHR",
    Distance:9253.5,
    Airport:"British Airways"
}),
new Routes(
{
    From:"GIG",
    To:"LIM",
    Distance:3777.31,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"GIG",
    To:"LIM",
    Distance:3777.31,
    Airport:"Grupo TACA"
}),
new Routes(
{
    From:"GIG",
    To:"LIS",
    Distance:7714.71,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"GIG",
    To:"MAD",
    Distance:8147.61,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"MAO",
    Distance:2847.95,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"MAO",
    Distance:2847.95,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"MCZ",
    Distance:1678.18,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"MCZ",
    Distance:1678.18,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"MIA",
    Distance:6717.58,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"MIA",
    Distance:6717.58,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"MIA",
    Distance:6717.58,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GIG",
    To:"MVD",
    Distance:1824.45,
    Airport:"BQB Lineas Aereas"
}),
new Routes(
{
    From:"GIG",
    To:"NAT",
    Distance:2065.35,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"NAT",
    Distance:2065.35,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"NVT",
    Distance:708.821,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"OPO",
    Distance:7964.85,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"GIG",
    To:"POA",
    Distance:1122.59,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"POA",
    Distance:1122.59,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GIG",
    To:"POA",
    Distance:1122.59,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"PTY",
    Distance:5295.49,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"RAO",
    Distance:502.892,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"REC",
    Distance:1858.75,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"REC",
    Distance:1858.75,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GIG",
    To:"REC",
    Distance:1858.75,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"SCL",
    Distance:2934.78,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"SCL",
    Distance:2934.78,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"SDQ",
    Distance:5410.14,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"SDQ",
    Distance:5410.14,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GIG",
    To:"SLZ",
    Distance:2251.29,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"SLZ",
    Distance:2251.29,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"SSA",
    Distance:1216.86,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"SSA",
    Distance:1216.86,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GIG",
    To:"SSA",
    Distance:1216.86,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"VCP",
    Distance:399.114,
    Airport:"Azul"
}),
new Routes(
{
    From:"GIG",
    To:"VCP",
    Distance:399.114,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"VCP",
    Distance:399.114,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"VIX",
    Distance:417.121,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GIG",
    To:"VIX",
    Distance:417.121,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GIL",
    To:"ISB",
    Distance:279.711,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"GIS",
    To:"AKL",
    Distance:334.918,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"GIS",
    To:"WLG",
    Distance:400.942,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"GIU",
    To:"CMB",
    Distance:74.6483,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"GIU",
    To:"TRR",
    Distance:135.367,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"GIZ",
    To:"DMM",
    Distance:1298.34,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"GIZ",
    To:"JED",
    Distance:641.679,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"GIZ",
    To:"JED",
    Distance:641.679,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"GIZ",
    To:"MED",
    Distance:901.993,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"GIZ",
    To:"RUH",
    Distance:992.252,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"GIZ",
    To:"RUH",
    Distance:992.252,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"GJA",
    To:"LCE",
    Distance:127.798,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"GJT",
    To:"DEN",
    Distance:340.708,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GJT",
    To:"DFW",
    Distance:1242.23,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GJT",
    To:"DFW",
    Distance:1242.23,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GJT",
    To:"IAH",
    Distance:1575.1,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GJT",
    To:"LAS",
    Distance:674.368,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GJT",
    To:"PHX",
    Distance:705.271,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GJT",
    To:"PHX",
    Distance:705.271,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GJT",
    To:"SLC",
    Distance:347.581,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GKA",
    To:"HGU",
    Distance:124.484,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"GKA",
    To:"LAE",
    Distance:157.142,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"GKA",
    To:"MAG",
    Distance:106.705,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"GKA",
    To:"POM",
    Distance:424.602,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"GKA",
    To:"POM",
    Distance:424.602,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"GKK",
    To:"KDO",
    Distance:125.858,
    Airport:"Maldivian"
}),
new Routes(
{
    From:"GKK",
    To:"MLE",
    Distance:384.997,
    Airport:"Maldivian"
}),
new Routes(
{
    From:"GLA",
    To:"ACE",
    Distance:3081.23,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"GLA",
    To:"ACE",
    Distance:3081.23,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"GLA",
    To:"ACE",
    Distance:3081.23,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"GLA",
    To:"ACE",
    Distance:3081.23,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"GLA",
    To:"ACE",
    Distance:3081.23,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"GLA",
    To:"AGP",
    Distance:2134.62,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"GLA",
    To:"AGP",
    Distance:2134.62,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"GLA",
    To:"AGP",
    Distance:2134.62,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GLA",
    To:"ALC",
    Distance:1977.01,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"GLA",
    To:"ALC",
    Distance:1977.01,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"GLA",
    To:"ALC",
    Distance:1977.01,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GLA",
    To:"AMS",
    Distance:717.958,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"GLA",
    To:"AMS",
    Distance:717.958,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"GLA",
    To:"AMS",
    Distance:717.958,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GLA",
    To:"AYT",
    Distance:3368.16,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"GLA",
    To:"BCN",
    Distance:1688.12,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"GLA",
    To:"BEB",
    Distance:253.029,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GLA",
    To:"BFS",
    Distance:176.039,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GLA",
    To:"BHD",
    Distance:166.621,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GLA",
    To:"BHX",
    Distance:418.267,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GLA",
    To:"BJV",
    Distance:3161.73,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"GLA",
    To:"BJV",
    Distance:3161.73,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"GLA",
    To:"BRR",
    Distance:224.905,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GLA",
    To:"BRS",
    Distance:511.778,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GLA",
    To:"CAL",
    Distance:92.2966,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GLA",
    To:"CDG",
    Distance:896.627,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GLA",
    To:"CFN",
    Distance:262.976,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GLA",
    To:"CUN",
    Distance:7620.27,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"GLA",
    To:"CUN",
    Distance:7620.27,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"GLA",
    To:"CWL",
    Distance:502.771,
    Airport:"Air France"
}),
new Routes(
{
    From:"GLA",
    To:"CWL",
    Distance:502.771,
    Airport:"CityJet"
}),
new Routes(
{
    From:"GLA",
    To:"DLM",
    Distance:3270.79,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"GLA",
    To:"DLM",
    Distance:3270.79,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"GLA",
    To:"DLM",
    Distance:3270.79,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"GLA",
    To:"DUB",
    Distance:296.998,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"GLA",
    To:"DUS",
    Distance:896.254,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GLA",
    To:"DXB",
    Distance:5840.56,
    Airport:"Emirates"
}),
new Routes(
{
    From:"GLA",
    To:"DXB",
    Distance:5840.56,
    Airport:"Qantas"
}),
new Routes(
{
    From:"GLA",
    To:"EMA",
    Distance:393.379,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GLA",
    To:"EWR",
    Distance:5181.99,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GLA",
    To:"EWR",
    Distance:5181.99,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GLA",
    To:"EXT",
    Distance:575.247,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GLA",
    To:"FAO",
    Distance:2113.58,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"GLA",
    To:"FAO",
    Distance:2113.58,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"GLA",
    To:"FAO",
    Distance:2113.58,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GLA",
    To:"FCO",
    Distance:1973.52,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"GLA",
    To:"FNC",
    Distance:2748.11,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"GLA",
    To:"FUE",
    Distance:3139.87,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"GLA",
    To:"FUE",
    Distance:3139.87,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"GLA",
    To:"GDN",
    Distance:1458.6,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GLA",
    To:"HER",
    Distance:3197.28,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"GLA",
    To:"IBZ",
    Distance:1938.45,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"GLA",
    To:"IBZ",
    Distance:1938.45,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"GLA",
    To:"ILY",
    Distance:115.981,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GLA",
    To:"JER",
    Distance:756.191,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GLA",
    To:"JER",
    Distance:756.191,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GLA",
    To:"KEF",
    Distance:1347.45,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"GLA",
    To:"KGS",
    Distance:3169.78,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GLA",
    To:"KOI",
    Distance:355.097,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GLA",
    To:"LBA",
    Distance:284.959,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GLA",
    To:"LCA",
    Distance:3703.58,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"GLA",
    To:"LCY",
    Distance:568.154,
    Airport:"British Airways"
}),
new Routes(
{
    From:"GLA",
    To:"LGW",
    Distance:595.24,
    Airport:"British Airways"
}),
new Routes(
{
    From:"GLA",
    To:"LGW",
    Distance:595.24,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GLA",
    To:"LHR",
    Distance:554.048,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GLA",
    To:"LHR",
    Distance:554.048,
    Airport:"British Airways"
}),
new Routes(
{
    From:"GLA",
    To:"LHR",
    Distance:554.048,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"GLA",
    To:"LPA",
    Distance:3227.44,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"GLA",
    To:"LPA",
    Distance:3227.44,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"GLA",
    To:"LPA",
    Distance:3227.44,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"GLA",
    To:"LSI",
    Distance:482.5,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GLA",
    To:"LTN",
    Distance:518.027,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GLA",
    To:"MAN",
    Distance:312.562,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GLA",
    To:"MCO",
    Distance:6626.61,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"GLA",
    To:"MCO",
    Distance:6626.61,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GLA",
    To:"MCO",
    Distance:6626.61,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"GLA",
    To:"MLA",
    Distance:2644.8,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"GLA",
    To:"NBE",
    Distance:2471.16,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"GLA",
    To:"ORK",
    Distance:521.05,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"GLA",
    To:"PFO",
    Distance:3652.13,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"GLA",
    To:"PHL",
    Distance:5310.81,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GLA",
    To:"PHL",
    Distance:5310.81,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GLA",
    To:"PMI",
    Distance:1889.52,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"GLA",
    To:"PMI",
    Distance:1889.52,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"GLA",
    To:"PMI",
    Distance:1889.52,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"GLA",
    To:"PMI",
    Distance:1889.52,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GLA",
    To:"RHO",
    Distance:3258.41,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"GLA",
    To:"RHO",
    Distance:3258.41,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"GLA",
    To:"SOU",
    Distance:583.868,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GLA",
    To:"STN",
    Distance:538.409,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GLA",
    To:"SXF",
    Distance:1228.6,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GLA",
    To:"SYY",
    Distance:284.741,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GLA",
    To:"TFS",
    Distance:3242.15,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"GLA",
    To:"TFS",
    Distance:3242.15,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"GLA",
    To:"TFS",
    Distance:3242.15,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"GLA",
    To:"TFS",
    Distance:3242.15,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"GLA",
    To:"TRE",
    Distance:166.087,
    Airport:"Flybe"
}),
new Routes(
{
    From:"GLA",
    To:"WAW",
    Distance:1699.22,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GLA",
    To:"YYC",
    Distance:6476.69,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"GLA",
    To:"YYZ",
    Distance:5283.97,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"GLF",
    To:"PJM",
    Distance:18.7581,
    Airport:"CAL Cargo Air Lines"
}),
new Routes(
{
    From:"GLF",
    To:"SJO",
    Distance:186.905,
    Airport:"Euro Exec Express"
}),
new Routes(
{
    From:"GLF",
    To:"SJO",
    Distance:186.905,
    Airport:"LACSA"
}),
new Routes(
{
    From:"GLK",
    To:"BSA",
    Distance:533.272,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"GLO",
    To:"IOM",
    Distance:293.722,
    Airport:"Star1 Airlines"
}),
new Routes(
{
    From:"GLT",
    To:"BNE",
    Distance:434.481,
    Airport:"Qantas"
}),
new Routes(
{
    From:"GLT",
    To:"BNE",
    Distance:434.481,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"GLT",
    To:"ROK",
    Distance:93.5091,
    Airport:"Qantas"
}),
new Routes(
{
    From:"GLT",
    To:"SYD",
    Distance:1120.45,
    Airport:"Qantas"
}),
new Routes(
{
    From:"GLV",
    To:"ELI",
    Distance:35.8804,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"GLV",
    To:"OME",
    Distance:116.647,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"GLV",
    To:"WMO",
    Distance:24.7217,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"GLV",
    To:"WMO",
    Distance:24.7217,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"GMA",
    To:"MDK",
    Distance:393.407,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"GMB",
    To:"ADD",
    Distance:475.27,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"GMB",
    To:"ASO",
    Distance:210.15,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"CJU",
    Distance:450.81,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"CJU",
    Distance:450.81,
    Airport:"Eastar Jet"
}),
new Routes(
{
    From:"GMP",
    To:"CJU",
    Distance:450.81,
    Airport:"Jeju Air"
}),
new Routes(
{
    From:"GMP",
    To:"CJU",
    Distance:450.81,
    Airport:"Jin Air"
}),
new Routes(
{
    From:"GMP",
    To:"CJU",
    Distance:450.81,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"GMP",
    To:"CJU",
    Distance:450.81,
    Airport:"Tway Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"HIN",
    Distance:297.589,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"GMP",
    To:"HND",
    Distance:1180.43,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"GMP",
    To:"HND",
    Distance:1180.43,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"HND",
    Distance:1180.43,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"HND",
    Distance:1180.43,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"GMP",
    To:"KIX",
    Distance:835.627,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"GMP",
    To:"KIX",
    Distance:835.627,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"KIX",
    Distance:835.627,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"KIX",
    Distance:835.627,
    Airport:"Jeju Air"
}),
new Routes(
{
    From:"GMP",
    To:"KIX",
    Distance:835.627,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"GMP",
    To:"KPO",
    Distance:292.149,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"KPO",
    Distance:292.149,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"GMP",
    To:"KWJ",
    Distance:270.422,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"KWJ",
    Distance:270.422,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"GMP",
    To:"NGO",
    Distance:946.775,
    Airport:"Jeju Air"
}),
new Routes(
{
    From:"GMP",
    To:"PEK",
    Distance:926.96,
    Airport:"Air China"
}),
new Routes(
{
    From:"GMP",
    To:"PEK",
    Distance:926.96,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"PEK",
    Distance:926.96,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"PEK",
    Distance:926.96,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"GMP",
    To:"PUS",
    Distance:326.994,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"PUS",
    Distance:326.994,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"GMP",
    To:"RSU",
    Distance:310.967,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"RSU",
    Distance:310.967,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"GMP",
    To:"SHA",
    Distance:866.067,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"SHA",
    Distance:866.067,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"SHA",
    Distance:866.067,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"GMP",
    To:"SHA",
    Distance:866.067,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"TSA",
    Distance:1474.41,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"TSA",
    Distance:1474.41,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"GMP",
    To:"TSA",
    Distance:1474.41,
    Airport:"Eastar Jet"
}),
new Routes(
{
    From:"GMP",
    To:"TSA",
    Distance:1474.41,
    Airport:"Tway Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"USN",
    Distance:316.26,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"GMP",
    To:"USN",
    Distance:316.26,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"GMR",
    To:"PPT",
    Distance:1652.1,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"GMZ",
    To:"TFN",
    Distance:99.2477,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"GND",
    To:"BGI",
    Distance:275.949,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"GND",
    To:"JFK",
    Distance:3393.24,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"GND",
    To:"JFK",
    Distance:3393.24,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GND",
    To:"MIA",
    Distance:2472.27,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GND",
    To:"MIA",
    Distance:2472.27,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GND",
    To:"PMV",
    Distance:266.902,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"GND",
    To:"POS",
    Distance:164.13,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"GND",
    To:"POS",
    Distance:164.13,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"GND",
    To:"POS",
    Distance:164.13,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"GND",
    To:"SVD",
    Distance:141.311,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"GND",
    To:"UVF",
    Distance:212.426,
    Airport:"British Airways"
}),
new Routes(
{
    From:"GND",
    To:"UVF",
    Distance:212.426,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"GND",
    To:"YYZ",
    Distance:3915.37,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"GND",
    To:"YYZ",
    Distance:3915.37,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"GNM",
    To:"SSA",
    Distance:502.668,
    Airport:"Abaet"
}),
new Routes(
{
    From:"GNU",
    To:"PTU",
    Distance:18.1913,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"GNV",
    To:"ATL",
    Distance:483.942,
    Airport:"Air France"
}),
new Routes(
{
    From:"GNV",
    To:"ATL",
    Distance:483.942,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"GNV",
    To:"ATL",
    Distance:483.942,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GNV",
    To:"ATL",
    Distance:483.942,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"GNV",
    To:"CLT",
    Distance:626.737,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GNV",
    To:"CLT",
    Distance:626.737,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GNV",
    To:"MCO",
    Distance:168.543,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GNV",
    To:"MIA",
    Distance:475.124,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GNV",
    To:"MIA",
    Distance:475.124,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GNV",
    To:"TPA",
    Distance:192.347,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GNY",
    To:"ADB",
    Distance:1034.31,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"GNY",
    To:"ESB",
    Distance:591.925,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"GNY",
    To:"IST",
    Distance:952.511,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"GNY",
    To:"IST",
    Distance:952.511,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"GNY",
    To:"SAW",
    Distance:910.651,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"GOA",
    To:"BCN",
    Distance:650.533,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"GOA",
    To:"BCN",
    Distance:650.533,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"GOA",
    To:"BRI",
    Distance:741.649,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GOA",
    To:"CAG",
    Distance:574.253,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GOA",
    To:"CDG",
    Distance:700.496,
    Airport:"Air France"
}),
new Routes(
{
    From:"GOA",
    To:"CDG",
    Distance:700.496,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"GOA",
    To:"CRL",
    Distance:748.443,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GOA",
    To:"CTA",
    Distance:932.292,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"GOA",
    To:"DME",
    Distance:2388.18,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"GOA",
    To:"FCO",
    Distance:401.088,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"GOA",
    To:"IST",
    Distance:1672.18,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"GOA",
    To:"LGW",
    Distance:1006.42,
    Airport:"British Airways"
}),
new Routes(
{
    From:"GOA",
    To:"MUC",
    Distance:492.995,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GOA",
    To:"NAP",
    Distance:593.68,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"GOA",
    To:"OLB",
    Distance:394.747,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"GOA",
    To:"PMO",
    Distance:779.018,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"GOA",
    To:"STN",
    Distance:1046.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GOA",
    To:"TIA",
    Distance:946.004,
    Airport:"Air One"
}),
new Routes(
{
    From:"GOA",
    To:"TIA",
    Distance:946.004,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"GOA",
    To:"TPS",
    Distance:784.694,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GOH",
    To:"JAV",
    Distance:561.483,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"GOH",
    To:"JFR",
    Distance:264.66,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"GOH",
    To:"JHS",
    Distance:321.065,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"GOH",
    To:"JSU",
    Distance:148.372,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"GOH",
    To:"KEF",
    Distance:1400.56,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"GOH",
    To:"KUS",
    Distance:702.486,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"GOH",
    To:"RKV",
    Distance:1428.1,
    Airport:"Air Iceland"
}),
new Routes(
{
    From:"GOH",
    To:"SFJ",
    Distance:317.496,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"GOH",
    To:"UAK",
    Distance:463.692,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"GOI",
    To:"AMD",
    Distance:864.958,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"GOI",
    To:"BLR",
    Distance:494.105,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"GOI",
    To:"BLR",
    Distance:494.105,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"GOI",
    To:"BLR",
    Distance:494.105,
    Airport:"Go Air"
}),
new Routes(
{
    From:"GOI",
    To:"BLR",
    Distance:494.105,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"GOI",
    To:"BLR",
    Distance:494.105,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"GOI",
    To:"BLR",
    Distance:494.105,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"GOI",
    To:"BOM",
    Distance:424.797,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"GOI",
    To:"BOM",
    Distance:424.797,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"GOI",
    To:"BOM",
    Distance:424.797,
    Airport:"Go Air"
}),
new Routes(
{
    From:"GOI",
    To:"BOM",
    Distance:424.797,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"GOI",
    To:"BOM",
    Distance:424.797,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"GOI",
    To:"BOM",
    Distance:424.797,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"GOI",
    To:"DEL",
    Distance:1504.24,
    Airport:"Go Air"
}),
new Routes(
{
    From:"GOI",
    To:"DEL",
    Distance:1504.24,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"GOI",
    To:"DEL",
    Distance:1504.24,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"GOI",
    To:"DME",
    Distance:5401.54,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"GOI",
    To:"DOH",
    Distance:2563.32,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"GOI",
    To:"DXB",
    Distance:2212.77,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"GOI",
    To:"HYD",
    Distance:545.512,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"GOI",
    To:"HYD",
    Distance:545.512,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"GOI",
    To:"KWI",
    Distance:3062.59,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"GOI",
    To:"MAA",
    Distance:734.017,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"GOI",
    To:"MAA",
    Distance:734.017,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"GOI",
    To:"MAA",
    Distance:734.017,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"GOI",
    To:"MAA",
    Distance:734.017,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"GOI",
    To:"PNQ",
    Distance:356.09,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"GOI",
    To:"PNQ",
    Distance:356.09,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"GOI",
    To:"SHJ",
    Distance:2202.76,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"GOJ",
    To:"DME",
    Distance:378.255,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"GOJ",
    To:"DME",
    Distance:378.255,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"GOJ",
    To:"DWC",
    Distance:3640.16,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"GOJ",
    To:"DYU",
    Distance:2694.85,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"GOJ",
    To:"EGO",
    Distance:782.032,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"GOJ",
    To:"EVN",
    Distance:1788.89,
    Airport:"Air Armenia"
}),
new Routes(
{
    From:"GOJ",
    To:"EVN",
    Distance:1788.89,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"GOJ",
    To:"FRA",
    Distance:2420.39,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GOJ",
    To:"KUF",
    Distance:507.719,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"GOJ",
    To:"LBD",
    Distance:2589.62,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"GOJ",
    To:"NMA",
    Distance:2622.49,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"GOJ",
    To:"NSK",
    Distance:2565.6,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"GOJ",
    To:"PRG",
    Distance:2063.89,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"GOJ",
    To:"PRG",
    Distance:2063.89,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"GOJ",
    To:"SVO",
    Distance:395.903,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"GOJ",
    To:"SVX",
    Distance:1043.71,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"GOJ",
    To:"TAS",
    Distance:2477.23,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"GOJ",
    To:"VKO",
    Distance:412.495,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"GOM",
    To:"BKY",
    Distance:85.5289,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"GOM",
    To:"FKI",
    Distance:515.105,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"GOP",
    To:"DEL",
    Distance:657.166,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"GOP",
    To:"DEL",
    Distance:657.166,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"GOQ",
    To:"XIY",
    Distance:905.249,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"GOQ",
    To:"XNN",
    Distance:356.156,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"GOT",
    To:"AAR",
    Distance:181.896,
    Airport:"British Airways"
}),
new Routes(
{
    From:"GOT",
    To:"AGP",
    Distance:2639.62,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"GOT",
    To:"AGP",
    Distance:2639.62,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"GOT",
    To:"ALC",
    Distance:2348.25,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"GOT",
    To:"AMS",
    Distance:763.539,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"GOT",
    To:"ARN",
    Distance:393.862,
    Airport:"Air China"
}),
new Routes(
{
    From:"GOT",
    To:"ARN",
    Distance:393.862,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"GOT",
    To:"ARN",
    Distance:393.862,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"GOT",
    To:"ARN",
    Distance:393.862,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GOT",
    To:"BCN",
    Distance:1958.32,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"GOT",
    To:"BCN",
    Distance:1958.32,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"GOT",
    To:"BCN",
    Distance:1958.32,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"GOT",
    To:"BHX",
    Distance:1061.61,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"GOT",
    To:"BMA",
    Distance:378.678,
    Airport:"Finnair"
}),
new Routes(
{
    From:"GOT",
    To:"BMA",
    Distance:378.678,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"GOT",
    To:"BRU",
    Distance:905.015,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"GOT",
    To:"BRU",
    Distance:905.015,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"GOT",
    To:"CDG",
    Distance:1156.17,
    Airport:"Air France"
}),
new Routes(
{
    From:"GOT",
    To:"CDG",
    Distance:1156.17,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"GOT",
    To:"CPH",
    Distance:228.544,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"GOT",
    To:"DUS",
    Distance:792.556,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GOT",
    To:"EBL",
    Distance:3328.58,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"GOT",
    To:"FCO",
    Distance:1763.37,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"GOT",
    To:"FRA",
    Distance:883.465,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"GOT",
    To:"FRA",
    Distance:883.465,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GOT",
    To:"FRA",
    Distance:883.465,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"GOT",
    To:"HEL",
    Distance:782.681,
    Airport:"Finnair"
}),
new Routes(
{
    From:"GOT",
    To:"IKA",
    Distance:3780.78,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"GOT",
    To:"IST",
    Distance:2195.77,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"GOT",
    To:"IST",
    Distance:2195.77,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"GOT",
    To:"LGW",
    Distance:1081.49,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"GOT",
    To:"LHR",
    Distance:1068.27,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GOT",
    To:"LHR",
    Distance:1068.27,
    Airport:"British Airways"
}),
new Routes(
{
    From:"GOT",
    To:"LHR",
    Distance:1068.27,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"GOT",
    To:"LHR",
    Distance:1068.27,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"GOT",
    To:"LYS",
    Distance:1414.85,
    Airport:"Air France"
}),
new Routes(
{
    From:"GOT",
    To:"LYS",
    Distance:1414.85,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"GOT",
    To:"MAN",
    Distance:1031.29,
    Airport:"British Airways"
}),
new Routes(
{
    From:"GOT",
    To:"MUC",
    Distance:1035.64,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GOT",
    To:"MUC",
    Distance:1035.64,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"GOT",
    To:"NCE",
    Distance:1596.5,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"GOT",
    To:"OSL",
    Distance:289.456,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"GOT",
    To:"OSL",
    Distance:289.456,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"GOT",
    To:"PMI",
    Distance:2127.74,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"GOT",
    To:"RIX",
    Distance:706.344,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"GOT",
    To:"SPU",
    Distance:1595.2,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"GOT",
    To:"SVG",
    Distance:410.997,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"GOT",
    To:"TXL",
    Distance:571.037,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"GOT",
    To:"TXL",
    Distance:571.037,
    Airport:"Finnair"
}),
new Routes(
{
    From:"GOT",
    To:"TXL",
    Distance:571.037,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"GOU",
    To:"NDJ",
    Distance:360.306,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"GOU",
    To:"NSI",
    Distance:655.626,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"GOV",
    To:"CNS",
    Distance:1089.87,
    Airport:"Qantas"
}),
new Routes(
{
    From:"GOV",
    To:"DRW",
    Distance:645.992,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"GOV",
    To:"DRW",
    Distance:645.992,
    Airport:"Qantas"
}),
new Routes(
{
    From:"GOV",
    To:"GTE",
    Distance:193.576,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"GPA",
    To:"DUS",
    Distance:1857.09,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"GPA",
    To:"FRA",
    Distance:1669.01,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"GPA",
    To:"PFO",
    Distance:1059.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GPB",
    To:"CWB",
    Distance:228.898,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"GPI",
    To:"CLO",
    Distance:200.202,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"GPI",
    To:"CLO",
    Distance:200.202,
    Airport:"SATENA"
}),
new Routes(
{
    From:"GPS",
    To:"GYE",
    Distance:1169.57,
    Airport:"Aerolane"
}),
new Routes(
{
    From:"GPS",
    To:"GYE",
    Distance:1169.57,
    Airport:"TAME"
}),
new Routes(
{
    From:"GPT",
    To:"ATL",
    Distance:565.981,
    Airport:"Air France"
}),
new Routes(
{
    From:"GPT",
    To:"ATL",
    Distance:565.981,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"GPT",
    To:"ATL",
    Distance:565.981,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GPT",
    To:"ATL",
    Distance:565.981,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"GPT",
    To:"CLT",
    Distance:928.161,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GPT",
    To:"CLT",
    Distance:928.161,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GPT",
    To:"DFW",
    Distance:803.121,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GPT",
    To:"DFW",
    Distance:803.121,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GPT",
    To:"IAH",
    Distance:604.471,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GRB",
    To:"ATL",
    Distance:1247.53,
    Airport:"Air France"
}),
new Routes(
{
    From:"GRB",
    To:"ATL",
    Distance:1247.53,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GRB",
    To:"ATL",
    Distance:1247.53,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"GRB",
    To:"DTW",
    Distance:461.41,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GRB",
    To:"MSP",
    Distance:404.93,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GRB",
    To:"ORD",
    Distance:279.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GRB",
    To:"ORD",
    Distance:279.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GRB",
    To:"ORD",
    Distance:279.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GRI",
    To:"AZA",
    Distance:1454.95,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GRI",
    To:"DFW",
    Distance:904.476,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GRI",
    To:"DFW",
    Distance:904.476,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GRI",
    To:"LAS",
    Distance:1559.6,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GRJ",
    To:"CPT",
    Distance:348.273,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"GRJ",
    To:"DUR",
    Distance:924.086,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"GRJ",
    To:"JNB",
    Distance:1040.56,
    Airport:"Comair"
}),
new Routes(
{
    From:"GRJ",
    To:"JNB",
    Distance:1040.56,
    Airport:"Mango"
}),
new Routes(
{
    From:"GRJ",
    To:"JNB",
    Distance:1040.56,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"GRK",
    To:"ATL",
    Distance:1289.79,
    Airport:"Air France"
}),
new Routes(
{
    From:"GRK",
    To:"ATL",
    Distance:1289.79,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GRK",
    To:"ATL",
    Distance:1289.79,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"GRK",
    To:"DFW",
    Distance:216.683,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GRK",
    To:"DFW",
    Distance:216.683,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GRK",
    To:"IAH",
    Distance:266.943,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GRO",
    To:"AHO",
    Distance:483.163,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"AMS",
    Distance:1167.05,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"GRO",
    To:"BDS",
    Distance:1274.85,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"BGY",
    Distance:697.194,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"BLL",
    Distance:1606.76,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"BOH",
    Distance:1048.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"BRE",
    Distance:1318.44,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"BRS",
    Distance:1133.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"BRU",
    Distance:1009.42,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"GRO",
    To:"BTS",
    Distance:1329.28,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"BVA",
    Distance:841.405,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"CAG",
    Distance:607.504,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"CGN",
    Distance:1051.52,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"CRL",
    Distance:960.449,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"DTM",
    Distance:1130.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"DUB",
    Distance:1445.94,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"EIN",
    Distance:1080.2,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"EMA",
    Distance:1253.25,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"FKB",
    Distance:870.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"FMM",
    Distance:896.188,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"FMO",
    Distance:1196.89,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"GRQ",
    Distance:1279.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"HHN",
    Distance:959.812,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"IBZ",
    Distance:356.612,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"IEV",
    Distance:2315.39,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"GRO",
    To:"KRK",
    Distance:1592.98,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"LBA",
    Distance:1369.99,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"LPP",
    Distance:2725.04,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"LTN",
    Distance:1133.95,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"LWO",
    Distance:1853.22,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"GRO",
    To:"MAN",
    Distance:1327.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"MLA",
    Distance:1214.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"MST",
    Distance:1027.94,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"NCL",
    Distance:1496.37,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"NRN",
    Distance:1108.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"PMI",
    Distance:261.029,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"POZ",
    Distance:1575.43,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"PSA",
    Distance:653.272,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"PSR",
    Distance:942.386,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"RAK",
    Distance:1492.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"RBA",
    Distance:1205.52,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"RTM",
    Distance:1125.32,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"GRO",
    To:"SFT",
    Distance:2781.23,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"SKG",
    Distance:1693.64,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"STN",
    Distance:1126.45,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"TLL",
    Distance:2468.11,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"TMP",
    Distance:2577.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"TPS",
    Distance:940.049,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRO",
    To:"WRO",
    Distance:1483.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRP",
    To:"MQH",
    Distance:220.104,
    Airport:"Shuttle America"
}),
new Routes(
{
    From:"GRQ",
    To:"FAO",
    Distance:2115.13,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"GRQ",
    To:"GRO",
    Distance:1279.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRQ",
    To:"LPA",
    Distance:3330.74,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"GRQ",
    To:"MST",
    Distance:251.69,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"GRQ",
    To:"PMI",
    Distance:1536.61,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GRQ",
    To:"PMI",
    Distance:1536.61,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"GRR",
    To:"ATL",
    Distance:1032.31,
    Airport:"Air France"
}),
new Routes(
{
    From:"GRR",
    To:"ATL",
    Distance:1032.31,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GRR",
    To:"ATL",
    Distance:1032.31,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"GRR",
    To:"AZA",
    Distance:2508.61,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GRR",
    To:"BWI",
    Distance:848.73,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"GRR",
    To:"CLE",
    Distance:344.025,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GRR",
    To:"CVG",
    Distance:432.096,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GRR",
    To:"DEN",
    Distance:1629.09,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"GRR",
    To:"DEN",
    Distance:1629.09,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GRR",
    To:"DFW",
    Distance:1498.35,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GRR",
    To:"DFW",
    Distance:1498.35,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GRR",
    To:"DTW",
    Distance:192.626,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GRR",
    To:"EWR",
    Distance:971.465,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GRR",
    To:"IAD",
    Distance:806.339,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GRR",
    To:"IAH",
    Distance:1678.9,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GRR",
    To:"LAS",
    Distance:2637.49,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GRR",
    To:"LGA",
    Distance:992.32,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GRR",
    To:"MCO",
    Distance:1650.81,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GRR",
    To:"MCO",
    Distance:1650.81,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"GRR",
    To:"MSP",
    Distance:655.62,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GRR",
    To:"ORD",
    Distance:219.729,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GRR",
    To:"ORD",
    Distance:219.729,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GRR",
    To:"ORD",
    Distance:219.729,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GRR",
    To:"PIE",
    Distance:1684.1,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GRR",
    To:"SFB",
    Distance:1614.48,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GRR",
    To:"STL",
    Distance:614.196,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"GRR",
    To:"STL",
    Distance:614.196,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"GRR",
    To:"TPA",
    Distance:1679.08,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"AEP",
    Distance:1694.53,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"GRU",
    To:"AEP",
    Distance:1694.53,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"AEP",
    Distance:1694.53,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"AGT",
    Distance:876.85,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"AGT",
    Distance:876.85,
    Airport:"TAM Mercosur"
}),
new Routes(
{
    From:"GRU",
    To:"AJU",
    Distance:1705.1,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"AJU",
    Distance:1705.1,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"AMS",
    Distance:9774.4,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"ARU",
    Distance:480.045,
    Airport:"Azul"
}),
new Routes(
{
    From:"GRU",
    To:"ASU",
    Distance:1137.03,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"ASU",
    Distance:1137.03,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"ASU",
    Distance:1137.03,
    Airport:"TAM Mercosur"
}),
new Routes(
{
    From:"GRU",
    To:"ATL",
    Distance:7510.15,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GRU",
    To:"AUH",
    Distance:12120.5,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"GRU",
    To:"BCN",
    Distance:8764.36,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"BEL",
    Distance:2461.69,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"BEL",
    Distance:2461.69,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"BGI",
    Distance:4299.47,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"BOG",
    Distance:4335.89,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"GRU",
    To:"BOG",
    Distance:4335.89,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"BOG",
    Distance:4335.89,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"BPS",
    Distance:1095.5,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"BPS",
    Distance:1095.5,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"BSB",
    Distance:854.3,
    Airport:"Azul"
}),
new Routes(
{
    From:"GRU",
    To:"BSB",
    Distance:854.3,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"BSB",
    Distance:854.3,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GRU",
    To:"BSB",
    Distance:854.3,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"CAC",
    Distance:733.947,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"CBB",
    Distance:2157.17,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"CCS",
    Distance:4393.8,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"CCS",
    Distance:4393.8,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"CDG",
    Distance:9404.68,
    Airport:"Air France"
}),
new Routes(
{
    From:"GRU",
    To:"CDG",
    Distance:9404.68,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"CGB",
    Distance:1329.57,
    Airport:"Azul"
}),
new Routes(
{
    From:"GRU",
    To:"CGB",
    Distance:1329.57,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"CGB",
    Distance:1329.57,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GRU",
    To:"CGB",
    Distance:1329.57,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"CGR",
    Distance:907.691,
    Airport:"Azul"
}),
new Routes(
{
    From:"GRU",
    To:"CGR",
    Distance:907.691,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"CGR",
    Distance:907.691,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"CLT",
    Distance:7464.26,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"CLT",
    Distance:7464.26,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GRU",
    To:"CMN",
    Distance:7539.21,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"GRU",
    To:"CNF",
    Distance:495.225,
    Airport:"Azul"
}),
new Routes(
{
    From:"GRU",
    To:"CNF",
    Distance:495.225,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"CNF",
    Distance:495.225,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"COR",
    Distance:1955.44,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"CWB",
    Distance:359.624,
    Airport:"Azul"
}),
new Routes(
{
    From:"GRU",
    To:"CWB",
    Distance:359.624,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"CWB",
    Distance:359.624,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GRU",
    To:"CWB",
    Distance:359.624,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"DFW",
    Distance:8243.6,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"DFW",
    Distance:8243.6,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"DFW",
    Distance:8243.6,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GRU",
    To:"DOH",
    Distance:11853.3,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"GRU",
    To:"DOU",
    Distance:864.776,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"DTW",
    Distance:8223.49,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"DTW",
    Distance:8223.49,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GRU",
    To:"DXB",
    Distance:12216.6,
    Airport:"Emirates"
}),
new Routes(
{
    From:"GRU",
    To:"EWR",
    Distance:7683.9,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"EZE",
    Distance:1722.73,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"GRU",
    To:"EZE",
    Distance:1722.73,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"EZE",
    Distance:1722.73,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"EZE",
    Distance:1722.73,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"GRU",
    To:"EZE",
    Distance:1722.73,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"EZE",
    Distance:1722.73,
    Airport:"TAM Mercosur"
}),
new Routes(
{
    From:"GRU",
    To:"EZE",
    Distance:1722.73,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"FCO",
    Distance:9433.12,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"GRU",
    To:"FLN",
    Distance:515.29,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"FLN",
    Distance:515.29,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GRU",
    To:"FLN",
    Distance:515.29,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"FOR",
    Distance:2346.1,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"FOR",
    Distance:2346.1,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GRU",
    To:"FOR",
    Distance:2346.1,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"FRA",
    Distance:9795.69,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GRU",
    To:"FRA",
    Distance:9795.69,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"GIG",
    Distance:337.079,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"GIG",
    Distance:337.079,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GRU",
    To:"GIG",
    Distance:337.079,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"GIG",
    Distance:337.079,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"GYN",
    Distance:808.826,
    Airport:"Azul"
}),
new Routes(
{
    From:"GRU",
    To:"GYN",
    Distance:808.826,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"GYN",
    Distance:808.826,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"IAD",
    Distance:7648.89,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"IAH",
    Distance:7905.45,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"IGU",
    Distance:845.919,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"IGU",
    Distance:845.919,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"IOS",
    Distance:1235.55,
    Airport:"Azul"
}),
new Routes(
{
    From:"GRU",
    To:"IPN",
    Distance:603.11,
    Airport:"Azul"
}),
new Routes(
{
    From:"GRU",
    To:"IST",
    Distance:10548.5,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"JDO",
    Distance:1959.92,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GRU",
    To:"JFK",
    Distance:7663.75,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"JFK",
    Distance:7663.75,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"JFK",
    Distance:7663.75,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GRU",
    To:"JFK",
    Distance:7663.75,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"JFK",
    Distance:7663.75,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GRU",
    To:"JNB",
    Distance:7439.02,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"GRU",
    To:"JNB",
    Distance:7439.02,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"JOI",
    Distance:389.33,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"JPA",
    Distance:2189.06,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"JPA",
    Distance:2189.06,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"LAD",
    Distance:6533.8,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"LAX",
    Distance:9918.63,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"LAX",
    Distance:9918.63,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"GRU",
    To:"LAX",
    Distance:9918.63,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GRU",
    To:"LDB",
    Distance:475.775,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"LDB",
    Distance:475.775,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"LFW",
    Distance:6136.16,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"LHR",
    Distance:9460.27,
    Airport:"British Airways"
}),
new Routes(
{
    From:"GRU",
    To:"LHR",
    Distance:9460.27,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"LIM",
    Distance:3474.9,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"GRU",
    To:"LIM",
    Distance:3474.9,
    Airport:"Grupo TACA"
}),
new Routes(
{
    From:"GRU",
    To:"LIM",
    Distance:3474.9,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"LIM",
    Distance:3474.9,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"LIS",
    Distance:7934.76,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"GRU",
    To:"MAD",
    Distance:8378.68,
    Airport:"Air China"
}),
new Routes(
{
    From:"GRU",
    To:"MAD",
    Distance:8378.68,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"GRU",
    To:"MAD",
    Distance:8378.68,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"MAD",
    Distance:8378.68,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"MAD",
    Distance:8378.68,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"MAO",
    Distance:2697.35,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"MAO",
    Distance:2697.35,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"MCO",
    Distance:6869.06,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"MCO",
    Distance:6869.06,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"MCZ",
    Distance:1919.44,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"MCZ",
    Distance:1919.44,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GRU",
    To:"MCZ",
    Distance:1919.44,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"MEX",
    Distance:7433.16,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GRU",
    To:"MEX",
    Distance:7433.16,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"MGF",
    Distance:565.813,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"MIA",
    Distance:6573.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"MIA",
    Distance:6573.48,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"MIA",
    Distance:6573.48,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GRU",
    To:"MUC",
    Distance:9856.93,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GRU",
    To:"MUC",
    Distance:9856.93,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"MVD",
    Distance:1570.05,
    Airport:"BQB Lineas Aereas"
}),
new Routes(
{
    From:"GRU",
    To:"MVD",
    Distance:1570.05,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"MVD",
    Distance:1570.05,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"MVD",
    Distance:1570.05,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"MVD",
    Distance:1570.05,
    Airport:"TAM Mercosur"
}),
new Routes(
{
    From:"GRU",
    To:"MXP",
    Distance:9484.97,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"NAT",
    Distance:2288.8,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"NAT",
    Distance:2288.8,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GRU",
    To:"NAT",
    Distance:2288.8,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"NVT",
    Distance:441.802,
    Airport:"Azul"
}),
new Routes(
{
    From:"GRU",
    To:"NVT",
    Distance:441.802,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"OPO",
    Distance:8179.6,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"GRU",
    To:"ORD",
    Distance:8428.05,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"PFB",
    Distance:793.397,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GRU",
    To:"PLU",
    Distance:475.699,
    Airport:"Azul"
}),
new Routes(
{
    From:"GRU",
    To:"POA",
    Distance:866.101,
    Airport:"Azul"
}),
new Routes(
{
    From:"GRU",
    To:"POA",
    Distance:866.101,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"POA",
    Distance:866.101,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GRU",
    To:"POA",
    Distance:866.101,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"PTY",
    Distance:5085.96,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"RAO",
    Distance:288.626,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"RAO",
    Distance:288.626,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"GRU",
    To:"RAO",
    Distance:288.626,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"REC",
    Distance:2100.29,
    Airport:"Azul"
}),
new Routes(
{
    From:"GRU",
    To:"REC",
    Distance:2100.29,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"REC",
    Distance:2100.29,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GRU",
    To:"REC",
    Distance:2100.29,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"ROS",
    Distance:1751.5,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"ROS",
    Distance:1751.5,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"SCL",
    Distance:2614.59,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"SCL",
    Distance:2614.59,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"GRU",
    To:"SCL",
    Distance:2614.59,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"SDQ",
    Distance:5292.29,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"SDQ",
    Distance:5292.29,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GRU",
    To:"SDU",
    Distance:342.926,
    Airport:"Azul"
}),
new Routes(
{
    From:"GRU",
    To:"SDU",
    Distance:342.926,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"SJP",
    Distance:419.622,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"SLZ",
    Distance:2330.5,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"SLZ",
    Distance:2330.5,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"SSA",
    Distance:1450.88,
    Airport:"Azul"
}),
new Routes(
{
    From:"GRU",
    To:"SSA",
    Distance:1450.88,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"SSA",
    Distance:1450.88,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"GRU",
    To:"SSA",
    Distance:1450.88,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"THE",
    Distance:2079.96,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"THE",
    Distance:2079.96,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"UBA",
    Distance:436.067,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"UDI",
    Distance:537.608,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"UDI",
    Distance:537.608,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"UDI",
    Distance:537.608,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"GRU",
    To:"UIO",
    Distance:4318.51,
    Airport:"TAME"
}),
new Routes(
{
    From:"GRU",
    To:"VDC",
    Distance:1119.76,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"VIX",
    Distance:729.113,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"VIX",
    Distance:729.113,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"VVI",
    Distance:1849.14,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"VVI",
    Distance:1849.14,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"YYZ",
    Distance:8193.53,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"GRU",
    To:"YYZ",
    Distance:8193.53,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"GRU",
    To:"ZRH",
    Distance:9608.47,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"GRV",
    To:"DME",
    Distance:1460.32,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"GRW",
    To:"TER",
    Distance:89.1491,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"GRX",
    To:"BCN",
    Distance:680.133,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"GRX",
    To:"BCN",
    Distance:680.133,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"GRX",
    To:"LCY",
    Distance:1620.25,
    Airport:"British Airways"
}),
new Routes(
{
    From:"GRX",
    To:"LCY",
    Distance:1620.25,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"GRX",
    To:"MAD",
    Distance:367.932,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"GRX",
    To:"MLN",
    Distance:224.671,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"GRX",
    To:"PMI",
    Distance:624.891,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"GRX",
    To:"PMI",
    Distance:624.891,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"GRX",
    To:"PMI",
    Distance:624.891,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"GRZ",
    To:"AYT",
    Distance:1689.59,
    Airport:"Niki"
}),
new Routes(
{
    From:"GRZ",
    To:"AYT",
    Distance:1689.59,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"GRZ",
    To:"DUS",
    Distance:790.642,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"GRZ",
    To:"DUS",
    Distance:790.642,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GRZ",
    To:"FRA",
    Distance:609.559,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"GRZ",
    To:"FRA",
    Distance:609.559,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GRZ",
    To:"HER",
    Distance:1528.1,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"GRZ",
    To:"HER",
    Distance:1528.1,
    Airport:"Niki"
}),
new Routes(
{
    From:"GRZ",
    To:"MUC",
    Distance:312.674,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"GRZ",
    To:"MUC",
    Distance:312.674,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GRZ",
    To:"PMI",
    Distance:1317.44,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"GRZ",
    To:"PMI",
    Distance:1317.44,
    Airport:"Niki"
}),
new Routes(
{
    From:"GRZ",
    To:"STR",
    Distance:500.833,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"GRZ",
    To:"STR",
    Distance:500.833,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GRZ",
    To:"TFS",
    Distance:3482.64,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"GRZ",
    To:"TFS",
    Distance:3482.64,
    Airport:"Niki"
}),
new Routes(
{
    From:"GRZ",
    To:"TXL",
    Distance:638.114,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"GRZ",
    To:"VIE",
    Distance:150.599,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"GRZ",
    To:"ZRH",
    Distance:522.788,
    Airport:"Intersky"
}),
new Routes(
{
    From:"GSE",
    To:"AGP",
    Distance:2636.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GSE",
    To:"AHO",
    Distance:1923.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GSE",
    To:"ALC",
    Distance:2347.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GSE",
    To:"BEG",
    Distance:1552.76,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GSE",
    To:"BGY",
    Distance:1353.62,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GSE",
    To:"BUD",
    Distance:1251.29,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GSE",
    To:"BVA",
    Distance:1124.64,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GSE",
    To:"CIA",
    Distance:1777.11,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GSE",
    To:"EDI",
    Distance:946.312,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GSE",
    To:"GDN",
    Distance:556.535,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GSE",
    To:"MLA",
    Distance:2444.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GSE",
    To:"MRS",
    Distance:1660.27,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GSE",
    To:"PMI",
    Distance:2129.95,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GSE",
    To:"PSA",
    Distance:1570.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GSE",
    To:"SKP",
    Distance:1887.64,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GSE",
    To:"STN",
    Distance:989.727,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GSE",
    To:"VBY",
    Distance:384.632,
    Airport:"Golden Air"
}),
new Routes(
{
    From:"GSE",
    To:"VBY",
    Distance:384.632,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"GSE",
    To:"WAW",
    Distance:850.711,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"GSE",
    To:"ZAD",
    Distance:1538.52,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"GSM",
    To:"DXB",
    Distance:209.083,
    Airport:"Georgian National Airlines"
}),
new Routes(
{
    From:"GSM",
    To:"DXB",
    Distance:209.083,
    Airport:"Kish Air"
}),
new Routes(
{
    From:"GSM",
    To:"KIH",
    Distance:232.072,
    Airport:"Georgian National Airlines"
}),
new Routes(
{
    From:"GSM",
    To:"MHD",
    Distance:1080.59,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"GSM",
    To:"MHD",
    Distance:1080.59,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"GSM",
    To:"SYZ",
    Distance:461.302,
    Airport:"Georgian National Airlines"
}),
new Routes(
{
    From:"GSM",
    To:"SYZ",
    Distance:461.302,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"GSM",
    To:"THR",
    Distance:1079.45,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"GSO",
    To:"ATL",
    Distance:492.599,
    Airport:"Air France"
}),
new Routes(
{
    From:"GSO",
    To:"ATL",
    Distance:492.599,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"GSO",
    To:"ATL",
    Distance:492.599,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GSO",
    To:"ATL",
    Distance:492.599,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"GSO",
    To:"ATL",
    Distance:492.599,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"GSO",
    To:"CLT",
    Distance:133.846,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GSO",
    To:"CLT",
    Distance:133.846,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GSO",
    To:"DCA",
    Distance:399.041,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GSO",
    To:"DCA",
    Distance:399.041,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GSO",
    To:"DEN",
    Distance:2200.64,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"GSO",
    To:"DFW",
    Distance:1604.73,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GSO",
    To:"DFW",
    Distance:1604.73,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GSO",
    To:"DTW",
    Distance:740.81,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GSO",
    To:"EWR",
    Distance:716.446,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GSO",
    To:"IAD",
    Distance:384.794,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GSO",
    To:"LGA",
    Distance:741.092,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GSO",
    To:"LGA",
    Distance:741.092,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GSO",
    To:"LGA",
    Distance:741.092,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GSO",
    To:"MIA",
    Distance:1146.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GSO",
    To:"MIA",
    Distance:1146.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GSO",
    To:"ORD",
    Distance:948.478,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GSO",
    To:"PHL",
    Distance:587.631,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GSO",
    To:"PHL",
    Distance:587.631,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GSO",
    To:"PIE",
    Distance:946.495,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GSO",
    To:"SFB",
    Distance:823.027,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GSP",
    To:"ATL",
    Distance:246.58,
    Airport:"Air France"
}),
new Routes(
{
    From:"GSP",
    To:"ATL",
    Distance:246.58,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"GSP",
    To:"ATL",
    Distance:246.58,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GSP",
    To:"ATL",
    Distance:246.58,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"GSP",
    To:"ATL",
    Distance:246.58,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"GSP",
    To:"BNA",
    Distance:426.083,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"GSP",
    To:"BWI",
    Distance:684.716,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"GSP",
    To:"CLE",
    Distance:725.277,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GSP",
    To:"CLT",
    Distance:121.402,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GSP",
    To:"CLT",
    Distance:121.402,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GSP",
    To:"DCA",
    Distance:636.927,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GSP",
    To:"DCA",
    Distance:636.927,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GSP",
    To:"DFW",
    Distance:1384.37,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GSP",
    To:"DFW",
    Distance:1384.37,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GSP",
    To:"DTW",
    Distance:819.536,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GSP",
    To:"EWR",
    Distance:956.215,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GSP",
    To:"FLL",
    Distance:1000.77,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GSP",
    To:"HOU",
    Distance:1358.07,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"GSP",
    To:"IAD",
    Distance:617.863,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GSP",
    To:"IAH",
    Distance:1345.64,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GSP",
    To:"LGA",
    Distance:981.463,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GSP",
    To:"MDW",
    Distance:905.018,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"GSP",
    To:"MDW",
    Distance:905.018,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"GSP",
    To:"ORD",
    Distance:929.833,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GSP",
    To:"PGD",
    Distance:887.139,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GSP",
    To:"PHL",
    Distance:827.92,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GSP",
    To:"PHL",
    Distance:827.92,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GSP",
    To:"PIE",
    Distance:778.008,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GSP",
    To:"SFB",
    Distance:686.557,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GST",
    To:"HNH",
    Distance:40.5245,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"GST",
    To:"JNU",
    Distance:66.361,
    Airport:"Alaska Seaplane Service"
}),
new Routes(
{
    From:"GST",
    To:"JNU",
    Distance:66.361,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"GTE",
    To:"CNS",
    Distance:1047.39,
    Airport:"Aero-Service"
}),
new Routes(
{
    From:"GTE",
    To:"DRW",
    Distance:629.442,
    Airport:"Aero-Service"
}),
new Routes(
{
    From:"GTE",
    To:"DRW",
    Distance:629.442,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"GTE",
    To:"GOV",
    Distance:193.576,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"GTF",
    To:"AZA",
    Distance:1576.28,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GTF",
    To:"DEN",
    Distance:1003.19,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GTF",
    To:"HLN",
    Distance:107.802,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"GTF",
    To:"LAS",
    Distance:1305.61,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"GTF",
    To:"MSP",
    Distance:1423.36,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GTF",
    To:"SEA",
    Distance:821.602,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"GTF",
    To:"SLC",
    Distance:745.864,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GTO",
    To:"MDC",
    Distance:252.11,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"GTO",
    To:"UPG",
    Distance:731.803,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"GTO",
    To:"UPG",
    Distance:731.803,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"GTO",
    To:"UPG",
    Distance:731.803,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"GTR",
    To:"ATL",
    Distance:386.372,
    Airport:"Air France"
}),
new Routes(
{
    From:"GTR",
    To:"ATL",
    Distance:386.372,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GTR",
    To:"ATL",
    Distance:386.372,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"GUA",
    To:"ATL",
    Distance:2205.94,
    Airport:"Air France"
}),
new Routes(
{
    From:"GUA",
    To:"ATL",
    Distance:2205.94,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GUA",
    To:"BOG",
    Distance:2102.99,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"GUA",
    To:"DFW",
    Distance:2140.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GUA",
    To:"DFW",
    Distance:2140.08,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GUA",
    To:"EWR",
    Distance:3307.39,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUA",
    To:"FLL",
    Distance:1672.25,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"GUA",
    To:"IAD",
    Distance:2995.91,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUA",
    To:"IAH",
    Distance:1782.09,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUA",
    To:"JFK",
    Distance:3320.74,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GUA",
    To:"LAX",
    Distance:3531.5,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"GUA",
    To:"LAX",
    Distance:3531.5,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"GUA",
    To:"LAX",
    Distance:3531.5,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GUA",
    To:"LAX",
    Distance:3531.5,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GUA",
    To:"MEX",
    Distance:1056.37,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GUA",
    To:"MEX",
    Distance:1056.37,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"GUA",
    To:"MGA",
    Distance:544.141,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"GUA",
    To:"MIA",
    Distance:1640.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"GUA",
    To:"MIA",
    Distance:1640.01,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"GUA",
    To:"MIA",
    Distance:1640.01,
    Airport:"US Airways"
}),
new Routes(
{
    From:"GUA",
    To:"MIA",
    Distance:1640.01,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUA",
    To:"PTY",
    Distance:1358.37,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"GUA",
    To:"SAL",
    Distance:203.334,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"GUA",
    To:"SAL",
    Distance:203.334,
    Airport:"British Airways"
}),
new Routes(
{
    From:"GUA",
    To:"SAL",
    Distance:203.334,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"GUA",
    To:"SAP",
    Distance:295.885,
    Airport:"Air Atlanta Icelandic"
}),
new Routes(
{
    From:"GUA",
    To:"SAP",
    Distance:295.885,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"GUA",
    To:"SAP",
    Distance:295.885,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"GUA",
    To:"SJO",
    Distance:855.223,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"GUA",
    To:"SJO",
    Distance:855.223,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"GUA",
    To:"TAP",
    Distance:199.57,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"GUA",
    To:"TGU",
    Distance:361.341,
    Airport:"Air Atlanta Icelandic"
}),
new Routes(
{
    From:"GUA",
    To:"TGU",
    Distance:361.341,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"GUA",
    To:"TGU",
    Distance:361.341,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"GUC",
    To:"DEN",
    Distance:244.365,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"CNS",
    Distance:3378.55,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"CTS",
    Distance:3270.7,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"GUM",
    To:"CTS",
    Distance:3270.7,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"FUK",
    Distance:2664.36,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"GUM",
    To:"FUK",
    Distance:2664.36,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"HKG",
    Distance:3404.11,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"HNL",
    Distance:6109.2,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"ICN",
    Distance:3227.26,
    Airport:"Jeju Air"
}),
new Routes(
{
    From:"GUM",
    To:"ICN",
    Distance:3227.26,
    Airport:"Jin Air"
}),
new Routes(
{
    From:"GUM",
    To:"ICN",
    Distance:3227.26,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"GUM",
    To:"KIX",
    Distance:2520.37,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"GUM",
    To:"KIX",
    Distance:2520.37,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GUM",
    To:"KIX",
    Distance:2520.37,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"GUM",
    To:"KIX",
    Distance:2520.37,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"MNL",
    Distance:2566.72,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"MNL",
    Distance:2566.72,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"NGO",
    Distance:2508.73,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"GUM",
    To:"NGO",
    Distance:2508.73,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GUM",
    To:"NGO",
    Distance:2508.73,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"NRT",
    Distance:2516.52,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"GUM",
    To:"NRT",
    Distance:2516.52,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"GUM",
    To:"NRT",
    Distance:2516.52,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"NRT",
    Distance:2516.52,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"OKJ",
    Distance:2608.64,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"GUM",
    To:"OKJ",
    Distance:2608.64,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"PUS",
    Distance:2889.39,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"GUM",
    To:"ROP",
    Distance:90.6971,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"ROR",
    Distance:1310.72,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"SDJ",
    Distance:2768.29,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"GUM",
    To:"SDJ",
    Distance:2768.29,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"SPN",
    Distance:207.818,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"TKK",
    Distance:1020.5,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"TPE",
    Distance:2782.15,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"GUM",
    To:"TPE",
    Distance:2782.15,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"GUM",
    To:"YAP",
    Distance:855.096,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GUR",
    To:"LSA",
    Distance:216.859,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"GUR",
    To:"MIS",
    Distance:276.971,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"GUR",
    To:"MIS",
    Distance:276.971,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"GUR",
    To:"PNP",
    Distance:278.17,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"GUR",
    To:"POM",
    Distance:354.513,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"GUR",
    To:"POM",
    Distance:354.513,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"GUW",
    To:"ALA",
    Distance:2009.34,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"GUW",
    To:"ALA",
    Distance:2009.34,
    Airport:"Flightlink Tanzania"
}),
new Routes(
{
    From:"GUW",
    To:"AMS",
    Distance:3370.38,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"GUW",
    To:"IST",
    Distance:1952.77,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"GUW",
    To:"SCO",
    Distance:367.131,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"GUW",
    To:"SCO",
    Distance:367.131,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"GUW",
    To:"TSE",
    Distance:1490.18,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"GUW",
    To:"TSE",
    Distance:1490.18,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"GUW",
    To:"URA",
    Distance:448.448,
    Airport:"Flightlink Tanzania"
}),
new Routes(
{
    From:"GUW",
    To:"VKO",
    Distance:1376.63,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"GVA",
    To:"AGP",
    Distance:1380.3,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"GVA",
    To:"AGP",
    Distance:1380.3,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"AJA",
    Distance:525.71,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"ALC",
    Distance:1040.1,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"ALG",
    Distance:1088.41,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"GVA",
    To:"AMM",
    Distance:3018.43,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"GVA",
    To:"AMS",
    Distance:681.998,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"GVA",
    To:"AMS",
    Distance:681.998,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"ARN",
    Distance:1682.71,
    Airport:"Air China"
}),
new Routes(
{
    From:"GVA",
    To:"ARN",
    Distance:1682.71,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"GVA",
    To:"ARN",
    Distance:1682.71,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"GVA",
    To:"ARN",
    Distance:1682.71,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"ATH",
    Distance:1731.29,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"GVA",
    To:"ATH",
    Distance:1731.29,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"GVA",
    To:"ATH",
    Distance:1731.29,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"AUH",
    Distance:4926.33,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"GVA",
    To:"AUH",
    Distance:4926.33,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"GVA",
    To:"AYT",
    Distance:2288.57,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"GVA",
    To:"BCN",
    Distance:637.446,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"GVA",
    To:"BCN",
    Distance:637.446,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"BDS",
    Distance:1137.59,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"BEG",
    Distance:1115.83,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"GVA",
    To:"BEG",
    Distance:1115.83,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"GVA",
    To:"BEG",
    Distance:1115.83,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"BEY",
    Distance:2833.68,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"GVA",
    To:"BIA",
    Distance:489.616,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"BIO",
    Distance:782.734,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"BIQ",
    Distance:675.474,
    Airport:"Air France"
}),
new Routes(
{
    From:"GVA",
    To:"BIQ",
    Distance:675.474,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"GVA",
    To:"BOD",
    Distance:553.996,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"GVA",
    To:"BOD",
    Distance:553.996,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"BRS",
    Distance:862.151,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"BRU",
    Distance:532.1,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"GVA",
    To:"BRU",
    Distance:532.1,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"GVA",
    To:"BRU",
    Distance:532.1,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"GVA",
    To:"BRU",
    Distance:532.1,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"BUD",
    Distance:1007.61,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"CAG",
    Distance:813.092,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"CAI",
    Distance:2824.39,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"GVA",
    To:"CAI",
    Distance:2824.39,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"GVA",
    To:"CDG",
    Distance:407.743,
    Airport:"Air France"
}),
new Routes(
{
    From:"GVA",
    To:"CDG",
    Distance:407.743,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"GVA",
    To:"CMN",
    Distance:1843.14,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"GVA",
    To:"CPH",
    Distance:1138.26,
    Airport:"Air China"
}),
new Routes(
{
    From:"GVA",
    To:"CPH",
    Distance:1138.26,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"GVA",
    To:"CPH",
    Distance:1138.26,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"GVA",
    To:"CPH",
    Distance:1138.26,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"CTA",
    Distance:1223.73,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"GVA",
    To:"CTA",
    Distance:1223.73,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"DBV",
    Distance:1047.55,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"DJE",
    Distance:1430.25,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"GVA",
    To:"DME",
    Distance:2427.48,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"GVA",
    To:"DOH",
    Distance:4633.57,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"GVA",
    To:"DOH",
    Distance:4633.57,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"GVA",
    To:"DUB",
    Distance:1191.31,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"GVA",
    To:"DUS",
    Distance:563.748,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"GVA",
    To:"DXB",
    Distance:4919.43,
    Airport:"Emirates"
}),
new Routes(
{
    From:"GVA",
    To:"DXB",
    Distance:4919.43,
    Airport:"Qantas"
}),
new Routes(
{
    From:"GVA",
    To:"EDI",
    Distance:1264.18,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"EWR",
    Distance:6224.94,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"GVA",
    To:"EWR",
    Distance:6224.94,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"GVA",
    To:"FAO",
    Distance:1551.6,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"FCO",
    Distance:695.445,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"GVA",
    To:"FCO",
    Distance:695.445,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"GVA",
    To:"FCO",
    Distance:695.445,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"GVA",
    To:"FCO",
    Distance:695.445,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"FLR",
    Distance:482.875,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"GVA",
    To:"FLR",
    Distance:482.875,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"GVA",
    To:"FRA",
    Distance:458.282,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"GVA",
    To:"FRA",
    Distance:458.282,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"GVA",
    To:"FRA",
    Distance:458.282,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"GVA",
    To:"FRA",
    Distance:458.282,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"GVA",
    To:"HAM",
    Distance:867.281,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"GVA",
    To:"HEL",
    Distance:1990.64,
    Airport:"Finnair"
}),
new Routes(
{
    From:"GVA",
    To:"HER",
    Distance:2002.76,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"GVA",
    To:"HER",
    Distance:2002.76,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"HRG",
    Distance:3223.48,
    Airport:"easyJet"
}),
new Routes(
{
    From:"GVA",
    To:"IAD",
    Distance:6566.3,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"GVA",
    To:"IAD",
    Distance:6566.3,
}),
{
}),
{