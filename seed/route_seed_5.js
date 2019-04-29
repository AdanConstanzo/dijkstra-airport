var Routes = require('../models/Routes');

var mongoose = require("mongoose");

var connect = "mongodb://admin:supportftw117@ds155490.mlab.com:55490/dijkstra-airplanes"
mongoose.connect(connect);
console.log("Working.");

var routes = [

new Routes(
{
    From:"SXF",
    To:"MAN",
    Distance:1063.71,
    Airport:"easyJet"
}),
new Routes(
{
    From:"SXF",
    To:"MSQ",
    Distance:980.425,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"SXF",
    To:"MXP",
    Distance:827.529,
    Airport:"easyJet"
}),
new Routes(
{
    From:"SXF",
    To:"NAP",
    Distance:1279.4,
    Airport:"easyJet"
}),
new Routes(
{
    From:"SXF",
    To:"NBE",
    Distance:1829.09,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"SXF",
    To:"NCE",
    Distance:1076.29,
    Airport:"easyJet"
}),
new Routes(
{
    From:"SXF",
    To:"OLB",
    Distance:1312.24,
    Airport:"easyJet"
}),
new Routes(
{
    From:"SXF",
    To:"ORY",
    Distance:885.905,
    Airport:"easyJet"
}),
new Routes(
{
    From:"SXF",
    To:"OSL",
    Distance:881.48,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"SXF",
    To:"PMI",
    Distance:1648.29,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"SXF",
    To:"PMI",
    Distance:1648.29,
    Airport:"easyJet"
}),
new Routes(
{
    From:"SXF",
    To:"PSA",
    Distance:994.321,
    Airport:"easyJet"
}),
new Routes(
{
    From:"SXF",
    To:"RAK",
    Distance:2893.56,
    Airport:"easyJet"
}),
new Routes(
{
    From:"SXF",
    To:"RHO",
    Distance:2111.15,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"SXF",
    To:"RYG",
    Distance:796.577,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"SXF",
    To:"SAW",
    Distance:1748.25,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SXF",
    To:"SAW",
    Distance:1748.25,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SXF",
    To:"SEN",
    Distance:882.001,
    Airport:"easyJet"
}),
new Routes(
{
    From:"SXF",
    To:"SKG",
    Distance:1501.5,
    Airport:"easyJet"
}),
new Routes(
{
    From:"SXF",
    To:"SKP",
    Distance:1308.39,
    Airport:"Germania"
}),
new Routes(
{
    From:"SXF",
    To:"SNN",
    Distance:1512.34,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"SXF",
    To:"SOF",
    Distance:1305.16,
    Airport:"easyJet"
}),
new Routes(
{
    From:"SXF",
    To:"STN",
    Distance:907.332,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"SXF",
    To:"SVG",
    Distance:874.446,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"SXF",
    To:"SVO",
    Distance:1596.56,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"SXF",
    To:"SZG",
    Distance:511.352,
    Airport:"easyJet"
}),
new Routes(
{
    From:"SXF",
    To:"TFS",
    Distance:3671.17,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"SXF",
    To:"TFS",
    Distance:3671.17,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"SXF",
    To:"TFS",
    Distance:3671.17,
    Airport:"easyJet"
}),
new Routes(
{
    From:"SXF",
    To:"TLV",
    Distance:2845.52,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"SXF",
    To:"TLV",
    Distance:2845.52,
    Airport:"Israir"
}),
new Routes(
{
    From:"SXF",
    To:"TLV",
    Distance:2845.52,
    Airport:"easyJet"
}),
new Routes(
{
    From:"SXF",
    To:"TRD",
    Distance:1241.03,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"SXF",
    To:"VCE",
    Distance:769.172,
    Airport:"easyJet"
}),
new Routes(
{
    From:"SXF",
    To:"XRY",
    Distance:2315.03,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"SXM",
    To:"ANU",
    Distance:171.968,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"SXM",
    To:"ATL",
    Distance:2738.84,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SXM",
    To:"AXA",
    Distance:19.0896,
    Airport:"SOCHI AIR CHATER"
}),
new Routes(
{
    From:"SXM",
    To:"AXA",
    Distance:19.0896,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"SXM",
    To:"BGI",
    Distance:674.476,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"SXM",
    To:"BOS",
    Distance:2805.9,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"SXM",
    To:"CDG",
    Distance:6739.01,
    Airport:"Air France"
}),
new Routes(
{
    From:"SXM",
    To:"CDG",
    Distance:6739.01,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"SXM",
    To:"CLT",
    Distance:2596.61,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SXM",
    To:"CLT",
    Distance:2596.61,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SXM",
    To:"CUR",
    Distance:904.151,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"SXM",
    To:"CUR",
    Distance:904.151,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"SXM",
    To:"DOM",
    Distance:337.601,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"SXM",
    To:"DOM",
    Distance:337.601,
    Airport:"BVI Airways"
}),
new Routes(
{
    From:"SXM",
    To:"DOM",
    Distance:337.601,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"SXM",
    To:"DOM",
    Distance:337.601,
    Airport:"TUR Avrupa Hava YollarÄ±"
}),
new Routes(
{
    From:"SXM",
    To:"DOM",
    Distance:337.601,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"SXM",
    To:"EIS",
    Distance:157.965,
    Airport:"BVI Airways"
}),
new Routes(
{
    From:"SXM",
    To:"EIS",
    Distance:157.965,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"SXM",
    To:"EIS",
    Distance:157.965,
    Airport:"TUR Avrupa Hava YollarÄ±"
}),
new Routes(
{
    From:"SXM",
    To:"EIS",
    Distance:157.965,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"SXM",
    To:"EUX",
    Distance:62.074,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"SXM",
    To:"EWR",
    Distance:2731.74,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SXM",
    To:"FLL",
    Distance:1967.75,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"SXM",
    To:"IAD",
    Distance:2706.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SXM",
    To:"JFK",
    Distance:2712.24,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SXM",
    To:"JFK",
    Distance:2712.24,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SXM",
    To:"JFK",
    Distance:2712.24,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"SXM",
    To:"JFK",
    Distance:2712.24,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SXM",
    To:"KIN",
    Distance:1446.36,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"SXM",
    To:"MIA",
    Distance:1968.28,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SXM",
    To:"MIA",
    Distance:1968.28,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SXM",
    To:"NEV",
    Distance:107.944,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"SXM",
    To:"ORD",
    Distance:3548.93,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SXM",
    To:"ORY",
    Distance:6721.75,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"SXM",
    To:"ORY",
    Distance:6721.75,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"SXM",
    To:"PAP",
    Distance:971.214,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"SXM",
    To:"PHL",
    Distance:2693,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SXM",
    To:"PHL",
    Distance:2693,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SXM",
    To:"PTP",
    Distance:258.957,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"SXM",
    To:"PTY",
    Distance:2020.16,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"SXM",
    To:"SAB",
    Distance:45.5567,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"SXM",
    To:"SBH",
    Distance:33.0604,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"SXM",
    To:"SBH",
    Distance:33.0604,
    Airport:"PAN Air"
}),
new Routes(
{
    From:"SXM",
    To:"SBH",
    Distance:33.0604,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"SXM",
    To:"SDQ",
    Distance:694.117,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"SXM",
    To:"SDQ",
    Distance:694.117,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"SXM",
    To:"SDQ",
    Distance:694.117,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"SXM",
    To:"SJU",
    Distance:308.708,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"SXM",
    To:"SJU",
    Distance:308.708,
    Airport:"Seaborne Airlines"
}),
new Routes(
{
    From:"SXM",
    To:"SJU",
    Distance:308.708,
    Airport:"TUR Avrupa Hava YollarÄ±"
}),
new Routes(
{
    From:"SXM",
    To:"SKB",
    Distance:91.0705,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"SXM",
    To:"SKB",
    Distance:91.0705,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"SXM",
    To:"SLU",
    Distance:500.994,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"SXM",
    To:"STT",
    Distance:199.696,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"SXM",
    To:"STT",
    Distance:199.696,
    Airport:"TUR Avrupa Hava YollarÄ±"
}),
new Routes(
{
    From:"SXM",
    To:"STX",
    Distance:182.746,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"SXM",
    To:"YYZ",
    Distance:3243.71,
    Airport:"WestJet"
}),
new Routes(
{
    From:"SXO",
    To:"GRP",
    Distance:176.791,
    Airport:"Shuttle America"
}),
new Routes(
{
    From:"SXP",
    To:"AUK",
    Distance:20.1658,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"SXP",
    To:"KSM",
    Distance:94.8893,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"SXR",
    To:"ATQ",
    Distance:253.261,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"SXR",
    To:"BOM",
    Distance:1667.34,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"SXR",
    To:"DEL",
    Distance:642.035,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"SXR",
    To:"DEL",
    Distance:642.035,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"SXR",
    To:"DEL",
    Distance:642.035,
    Airport:"Go Air"
}),
new Routes(
{
    From:"SXR",
    To:"DEL",
    Distance:642.035,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"SXR",
    To:"DEL",
    Distance:642.035,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"SXR",
    To:"DEL",
    Distance:642.035,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"SXR",
    To:"IXC",
    Distance:414.199,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"SXR",
    To:"IXJ",
    Distance:144.45,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"SXR",
    To:"IXJ",
    Distance:144.45,
    Airport:"Go Air"
}),
new Routes(
{
    From:"SXR",
    To:"IXJ",
    Distance:144.45,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"SXR",
    To:"IXJ",
    Distance:144.45,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"SXR",
    To:"IXL",
    Distance:255.902,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"SXX",
    To:"OIA",
    Distance:100.551,
    Airport:"Shuttle America"
}),
new Routes(
{
    From:"SYB",
    To:"KPR",
    Distance:36.272,
    Airport:"Air Salone"
}),
new Routes(
{
    From:"SYD",
    To:"ABX",
    Distance:450.843,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"ABX",
    Distance:450.843,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"SYD",
    To:"ABX",
    Distance:450.843,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"ADL",
    Distance:1164.2,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"ADL",
    Distance:1164.2,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"ADL",
    Distance:1164.2,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"ADL",
    Distance:1164.2,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"SYD",
    To:"ADL",
    Distance:1164.2,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"AKL",
    Distance:2159.53,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"SYD",
    To:"AKL",
    Distance:2159.53,
    Airport:"Air Tahiti Nui"
}),
new Routes(
{
    From:"SYD",
    To:"AKL",
    Distance:2159.53,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"AKL",
    Distance:2159.53,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"AKL",
    Distance:2159.53,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"AKL",
    Distance:2159.53,
    Airport:"Emirates"
}),
new Routes(
{
    From:"SYD",
    To:"AKL",
    Distance:2159.53,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"AKL",
    Distance:2159.53,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"AKL",
    Distance:2159.53,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"AKL",
    Distance:2159.53,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SYD",
    To:"AKL",
    Distance:2159.53,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"APW",
    Distance:4324.28,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"ARM",
    Distance:382.315,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"ARM",
    Distance:382.315,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"SYD",
    To:"ASP",
    Distance:2020.22,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"ASP",
    Distance:2020.22,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"ASP",
    Distance:2020.22,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"SYD",
    To:"AUH",
    Distance:12061.4,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"SYD",
    To:"AUH",
    Distance:12061.4,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"SYD",
    To:"AUH",
    Distance:12061.4,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"AVV",
    Distance:755.52,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"AYQ",
    Distance:2177.58,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"AYQ",
    Distance:2177.58,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"BHQ",
    Distance:930.397,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"SYD",
    To:"BHS",
    Distance:153.23,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"SYD",
    To:"BKK",
    Distance:7514.64,
    Airport:"Emirates"
}),
new Routes(
{
    From:"SYD",
    To:"BKK",
    Distance:7514.64,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"BKK",
    Distance:7514.64,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"SYD",
    To:"BKK",
    Distance:7514.64,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"BME",
    Distance:3390.86,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"BNE",
    Distance:752.833,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"BNE",
    Distance:752.833,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"BNE",
    Distance:752.833,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"BNE",
    Distance:752.833,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"SYD",
    To:"BNE",
    Distance:752.833,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"BNK",
    Distance:611.823,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"BNK",
    Distance:611.823,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"SYD",
    To:"BNK",
    Distance:611.823,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"CAN",
    Distance:7529.23,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"CBR",
    Distance:236.195,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"CBR",
    Distance:236.195,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"CBR",
    Distance:236.195,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"CFS",
    Distance:442.538,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"CFS",
    Distance:442.538,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"SYD",
    To:"CFS",
    Distance:442.538,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"CGK",
    Distance:5518.95,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"SYD",
    To:"CGK",
    Distance:5518.95,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"CHC",
    Distance:2125.96,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"SYD",
    To:"CHC",
    Distance:2125.96,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"CHC",
    Distance:2125.96,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"CHC",
    Distance:2125.96,
    Airport:"Emirates"
}),
new Routes(
{
    From:"SYD",
    To:"CHC",
    Distance:2125.96,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"CHC",
    Distance:2125.96,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"CHC",
    Distance:2125.96,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"CKG",
    Distance:8485,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"CNS",
    Distance:1972.68,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"CNS",
    Distance:1972.68,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"CNS",
    Distance:1972.68,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"CNS",
    Distance:1972.68,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"SYD",
    To:"CNS",
    Distance:1972.68,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"DBO",
    Distance:309.454,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"DBO",
    Distance:309.454,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"SYD",
    To:"DEL",
    Distance:10435.4,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"SYD",
    To:"DFW",
    Distance:13808.2,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"DFW",
    Distance:13808.2,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"DPS",
    Distance:4622.15,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"SYD",
    To:"DPS",
    Distance:4622.15,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"DPS",
    Distance:4622.15,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"DRW",
    Distance:3155.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"DRW",
    Distance:3155.48,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"DRW",
    Distance:3155.48,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"DRW",
    Distance:3155.48,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"DXB",
    Distance:12043.9,
    Airport:"Emirates"
}),
new Routes(
{
    From:"SYD",
    To:"DXB",
    Distance:12043.9,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"GFF",
    Distance:471.706,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"SYD",
    To:"GLT",
    Distance:1120.45,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"HBA",
    Distance:1038.61,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"HBA",
    Distance:1038.61,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"HBA",
    Distance:1038.61,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"HKG",
    Distance:7393.88,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"SYD",
    To:"HKG",
    Distance:7393.88,
    Airport:"Finnair"
}),
new Routes(
{
    From:"SYD",
    To:"HKG",
    Distance:7393.88,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"HKG",
    Distance:7393.88,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"SYD",
    To:"HKG",
    Distance:7393.88,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"HKT",
    Distance:7266.86,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"HNL",
    Distance:8170.49,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"HNL",
    Distance:8170.49,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"HNL",
    Distance:8170.49,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"HNL",
    Distance:8170.49,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"HNL",
    Distance:8170.49,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"HTI",
    Distance:1526.74,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"HTI",
    Distance:1526.74,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"HVB",
    Distance:973.271,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"ICN",
    Distance:8342.77,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"ICN",
    Distance:8342.77,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"SYD",
    To:"ICN",
    Distance:8342.77,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"ICN",
    Distance:8342.77,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"JNB",
    Distance:11023.8,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"JNB",
    Distance:11023.8,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"SYD",
    To:"KTA",
    Distance:3680.64,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"KUL",
    Distance:6584.91,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"SYD",
    To:"KUL",
    Distance:6584.91,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"LAX",
    Distance:12061.1,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"SYD",
    To:"LAX",
    Distance:12061.1,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"LAX",
    Distance:12061.1,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SYD",
    To:"LAX",
    Distance:12061.1,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"LAX",
    Distance:12061.1,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"LAX",
    Distance:12061.1,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"LDH",
    Distance:785.585,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"LST",
    Distance:913.734,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"LST",
    Distance:913.734,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"LSY",
    Distance:602.182,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"SYD",
    To:"MCY",
    Distance:836.853,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"MCY",
    Distance:836.853,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"MEL",
    Distance:705.395,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"SYD",
    To:"MEL",
    Distance:705.395,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"MEL",
    Distance:705.395,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"MEL",
    Distance:705.395,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"MEL",
    Distance:705.395,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"SYD",
    To:"MEL",
    Distance:705.395,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"MEL",
    Distance:705.395,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"MIM",
    Distance:349.109,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"SYD",
    To:"MKY",
    Distance:1433.93,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"MNL",
    Distance:6262.85,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"MNL",
    Distance:6262.85,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"MQL",
    Distance:837.52,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"SYD",
    To:"MRZ",
    Distance:510.292,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"MYA",
    Distance:236.577,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"SYD",
    To:"NAN",
    Distance:3169.75,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"SYD",
    To:"NAN",
    Distance:3169.75,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"NAN",
    Distance:3169.75,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"NAN",
    Distance:3169.75,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"NKG",
    Distance:8050.06,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"NKG",
    Distance:8050.06,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"NLK",
    Distance:1677.77,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"SYD",
    To:"NOU",
    Distance:1980.61,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"SYD",
    To:"NOU",
    Distance:1980.61,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"NRA",
    Distance:436.542,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"SYD",
    To:"NRT",
    Distance:7832.15,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"NRT",
    Distance:7832.15,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"NTL",
    Distance:143.137,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"SYD",
    To:"OAG",
    Distance:199.322,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"SYD",
    To:"OOL",
    Distance:679.983,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"OOL",
    Distance:679.983,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"OOL",
    Distance:679.983,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"SYD",
    To:"OOL",
    Distance:679.983,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"PEK",
    Distance:8964.53,
    Airport:"Air China"
}),
new Routes(
{
    From:"SYD",
    To:"PER",
    Distance:3277.21,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"PER",
    Distance:3277.21,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"PER",
    Distance:3277.21,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"PER",
    Distance:3277.21,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"SYD",
    To:"PER",
    Distance:3277.21,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"PKE",
    Distance:286.981,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"SYD",
    To:"POM",
    Distance:2754.4,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"SYD",
    To:"POM",
    Distance:2754.4,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"PPP",
    Distance:1517.87,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"SYD",
    To:"PQQ",
    Distance:320.614,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"SYD",
    To:"PQQ",
    Distance:320.614,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"PQQ",
    Distance:320.614,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"PVG",
    Distance:7865.4,
    Airport:"Air China"
}),
new Routes(
{
    From:"SYD",
    To:"PVG",
    Distance:7865.4,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"SYD",
    To:"PVG",
    Distance:7865.4,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"PVG",
    Distance:7865.4,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"RAR",
    Distance:4985.01,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"SYD",
    To:"SCL",
    Distance:11340.3,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"SCL",
    Distance:11340.3,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"SFO",
    Distance:11949.7,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"SYD",
    To:"SFO",
    Distance:11949.7,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"SGN",
    Distance:6846.16,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"SGN",
    Distance:6846.16,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"SIN",
    Distance:6293.43,
    Airport:"British Airways"
}),
new Routes(
{
    From:"SYD",
    To:"SIN",
    Distance:6293.43,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"SIN",
    Distance:6293.43,
    Airport:"Emirates"
}),
new Routes(
{
    From:"SYD",
    To:"SIN",
    Distance:6293.43,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"SIN",
    Distance:6293.43,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"SIN",
    Distance:6293.43,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"SIN",
    Distance:6293.43,
    Airport:"Scoot"
}),
new Routes(
{
    From:"SYD",
    To:"SIN",
    Distance:6293.43,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"SIN",
    Distance:6293.43,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"SUV",
    Distance:3241.25,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"SYD",
    To:"TBU",
    Distance:3585.38,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"TMW",
    Distance:319.77,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"TPE",
    Distance:7285.45,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"TRO",
    Distance:260.592,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"SYD",
    To:"TSV",
    Distance:1691.16,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"TSV",
    Distance:1691.16,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"TWB",
    Distance:715.506,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"SYD",
    To:"VLI",
    Distance:2483.9,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"SYD",
    To:"VLI",
    Distance:2483.9,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"WGA",
    Distance:365.838,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"WGA",
    Distance:365.838,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"SYD",
    To:"WLG",
    Distance:2227.7,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"SYD",
    To:"WLG",
    Distance:2227.7,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SYD",
    To:"WLG",
    Distance:2227.7,
    Airport:"Emirates"
}),
new Routes(
{
    From:"SYD",
    To:"WLG",
    Distance:2227.7,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYD",
    To:"WLG",
    Distance:2227.7,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"SYD",
    To:"YVR",
    Distance:12500.9,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"SYD",
    To:"ZQN",
    Distance:1938.92,
    Airport:"Emirates"
}),
new Routes(
{
    From:"SYD",
    To:"ZQN",
    Distance:1938.92,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"SYD",
    To:"ZQN",
    Distance:1938.92,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SYM",
    To:"KMG",
    Distance:304.469,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"SYM",
    To:"KMG",
    Distance:304.469,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SYM",
    To:"KMG",
    Distance:304.469,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYO",
    To:"HND",
    Distance:362.492,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"SYQ",
    To:"LIR",
    Distance:169.182,
    Airport:"CAL Cargo Air Lines"
}),
new Routes(
{
    From:"SYR",
    To:"ATL",
    Distance:1277.63,
    Airport:"Air France"
}),
new Routes(
{
    From:"SYR",
    To:"ATL",
    Distance:1277.63,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SYR",
    To:"ATL",
    Distance:1277.63,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"SYR",
    To:"ATL",
    Distance:1277.63,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"SYR",
    To:"BOS",
    Distance:424.728,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYR",
    To:"BOS",
    Distance:424.728,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SYR",
    To:"CLE",
    Distance:508.891,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SYR",
    To:"CLT",
    Distance:971.669,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYR",
    To:"CLT",
    Distance:971.669,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SYR",
    To:"DCA",
    Distance:479.992,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYR",
    To:"DCA",
    Distance:479.992,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SYR",
    To:"DTW",
    Distance:600.754,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SYR",
    To:"EWR",
    Distance:313.103,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SYR",
    To:"IAD",
    Distance:476.92,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SYR",
    To:"JFK",
    Distance:335.606,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SYR",
    To:"JFK",
    Distance:335.606,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"SYR",
    To:"LGA",
    Distance:318.533,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SYR",
    To:"MCO",
    Distance:1697.75,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"SYR",
    To:"MSP",
    Distance:1380.53,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SYR",
    To:"ORD",
    Distance:973.905,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYR",
    To:"ORD",
    Distance:973.905,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SYR",
    To:"ORD",
    Distance:973.905,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SYR",
    To:"PHL",
    Distance:367.319,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SYR",
    To:"PHL",
    Distance:367.319,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SYR",
    To:"PIE",
    Distance:1790.66,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"SYR",
    To:"YYZ",
    Distance:291.604,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"SYX",
    To:"CAN",
    Distance:695.144,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"CAN",
    Distance:695.144,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"CAN",
    Distance:695.144,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"SYX",
    To:"CGO",
    Distance:1855.76,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"SYX",
    To:"CGO",
    Distance:1855.76,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"CGO",
    Distance:1855.76,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"CGO",
    Distance:1855.76,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"SYX",
    To:"CGO",
    Distance:1855.76,
    Airport:"West Air China"
}),
new Routes(
{
    From:"SYX",
    To:"CKG",
    Distance:1300.09,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"CKG",
    Distance:1300.09,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"CKG",
    Distance:1300.09,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"SYX",
    To:"CKG",
    Distance:1300.09,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"CKG",
    Distance:1300.09,
    Airport:"West Air China"
}),
new Routes(
{
    From:"SYX",
    To:"CSX",
    Distance:1165.84,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"CSX",
    Distance:1165.84,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"SYX",
    To:"CSX",
    Distance:1165.84,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"CSX",
    Distance:1165.84,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"SYX",
    To:"CSX",
    Distance:1165.84,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"SYX",
    To:"CTU",
    Distance:1472.19,
    Airport:"Air China"
}),
new Routes(
{
    From:"SYX",
    To:"CTU",
    Distance:1472.19,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"SYX",
    To:"CTU",
    Distance:1472.19,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"SYX",
    To:"CTU",
    Distance:1472.19,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"CTU",
    Distance:1472.19,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"DME",
    Distance:7179.23,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"FOC",
    Distance:1353.66,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"FOC",
    Distance:1353.66,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"SYX",
    To:"FOC",
    Distance:1353.66,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"HFE",
    Distance:1694.68,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"HGH",
    Distance:1731.83,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"HGH",
    Distance:1731.83,
    Airport:"China SSS"
}),
new Routes(
{
    From:"SYX",
    To:"HGH",
    Distance:1731.83,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"HGH",
    Distance:1731.83,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"SYX",
    To:"HGH",
    Distance:1731.83,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"HGH",
    Distance:1731.83,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"SYX",
    To:"HGH",
    Distance:1731.83,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"HGH",
    Distance:1731.83,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"HKG",
    Distance:647.099,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"SYX",
    To:"HKG",
    Distance:647.099,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"SYX",
    To:"HKG",
    Distance:647.099,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"KHN",
    Distance:1347.01,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"SYX",
    To:"KMG",
    Distance:1013.64,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"SYX",
    To:"KMG",
    Distance:1013.64,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"KMG",
    Distance:1013.64,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"KWE",
    Distance:954.195,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"KWE",
    Distance:954.195,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"SYX",
    To:"KWE",
    Distance:954.195,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"KWE",
    Distance:954.195,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"KWL",
    Distance:771.652,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"LZH",
    Distance:656.566,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"MIG",
    Distance:1533.13,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"NGB",
    Distance:1769.09,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"SYX",
    To:"NGB",
    Distance:1769.09,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"NKG",
    Distance:1769.87,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"NKG",
    Distance:1769.87,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"SYX",
    To:"NKG",
    Distance:1769.87,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"NNG",
    Distance:495.844,
    Airport:"Air China"
}),
new Routes(
{
    From:"SYX",
    To:"NNG",
    Distance:495.844,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"NNG",
    Distance:495.844,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"SYX",
    To:"NNG",
    Distance:495.844,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"PEK",
    Distance:2517.33,
    Airport:"Air China"
}),
new Routes(
{
    From:"SYX",
    To:"PEK",
    Distance:2517.33,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"PEK",
    Distance:2517.33,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"PEK",
    Distance:2517.33,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"PVG",
    Distance:1895.67,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"PVG",
    Distance:1895.67,
    Airport:"China SSS"
}),
new Routes(
{
    From:"SYX",
    To:"PVG",
    Distance:1895.67,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"PVG",
    Distance:1895.67,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"PVG",
    Distance:1895.67,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"SHA",
    Distance:1869.44,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"SHA",
    Distance:1869.44,
    Airport:"China SSS"
}),
new Routes(
{
    From:"SYX",
    To:"SHA",
    Distance:1869.44,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"SJW",
    Distance:2279.78,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"SYX",
    To:"SWA",
    Distance:944.14,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"SZX",
    Distance:665.045,
    Airport:"Air China"
}),
new Routes(
{
    From:"SYX",
    To:"SZX",
    Distance:665.045,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"SZX",
    Distance:665.045,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"SZX",
    Distance:665.045,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"TNA",
    Distance:2199.66,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"TNA",
    Distance:2199.66,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"TPE",
    Distance:1433.82,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"TSN",
    Distance:2438.48,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"SYX",
    To:"TSN",
    Distance:2438.48,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"SYX",
    To:"TYN",
    Distance:2184.59,
    Airport:"Air China"
}),
new Routes(
{
    From:"SYX",
    To:"TYN",
    Distance:2184.59,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"WNZ",
    Distance:1582.69,
    Airport:"Air China"
}),
new Routes(
{
    From:"SYX",
    To:"WNZ",
    Distance:1582.69,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"WNZ",
    Distance:1582.69,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"WUH",
    Distance:1469.62,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"SYX",
    To:"WUH",
    Distance:1469.62,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"WUH",
    Distance:1469.62,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"WUH",
    Distance:1469.62,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"SYX",
    To:"WUX",
    Distance:1837.54,
    Airport:"Air China"
}),
new Routes(
{
    From:"SYX",
    To:"WUX",
    Distance:1837.54,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"XIY",
    Distance:1796.35,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"XIY",
    Distance:1796.35,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"XIY",
    Distance:1796.35,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"SYX",
    To:"XMN",
    Distance:1137.59,
    Airport:"Air China"
}),
new Routes(
{
    From:"SYX",
    To:"XMN",
    Distance:1137.59,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"XMN",
    Distance:1137.59,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"SYX",
    To:"XMN",
    Distance:1137.59,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"XMN",
    Distance:1137.59,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"YBP",
    Distance:1267.91,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"YCU",
    Distance:1865.18,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"YIH",
    Distance:1390.41,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"SYX",
    To:"YTY",
    Distance:1890.6,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"ZHA",
    Distance:338.53,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"ZUH",
    Distance:583.688,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SYX",
    To:"ZUH",
    Distance:583.688,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"SYY",
    To:"ABZ",
    Distance:270.106,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"SYY",
    To:"BEB",
    Distance:101.959,
    Airport:"Flybe"
}),
new Routes(
{
    From:"SYY",
    To:"EDI",
    Distance:308.845,
    Airport:"Flybe"
}),
new Routes(
{
    From:"SYY",
    To:"GLA",
    Distance:284.741,
    Airport:"Flybe"
}),
new Routes(
{
    From:"SYY",
    To:"INV",
    Distance:154.358,
    Airport:"Flybe"
}),
new Routes(
{
    From:"SYZ",
    To:"ABD",
    Distance:430.216,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"AWZ",
    Distance:417.868,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"SYZ",
    To:"AWZ",
    Distance:417.868,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"SYZ",
    To:"AWZ",
    Distance:417.868,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"BDH",
    Distance:399.894,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"SYZ",
    To:"BND",
    Distance:451.549,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"SYZ",
    To:"BND",
    Distance:451.549,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"BUZ",
    Distance:182.668,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"SYZ",
    To:"DOH",
    Distance:486.333,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"SYZ",
    To:"DOH",
    Distance:486.333,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"SYZ",
    To:"DXB",
    Distance:549.68,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"GSM",
    Distance:461.302,
    Airport:"Georgian National Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"GSM",
    Distance:461.302,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"IFN",
    Distance:363.777,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"SYZ",
    To:"IST",
    Distance:2493.24,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"KER",
    Distance:428.224,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"KIH",
    Distance:361.756,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"SYZ",
    To:"KIH",
    Distance:361.756,
    Airport:"Georgian National Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"KIH",
    Distance:361.756,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"SYZ",
    To:"KIH",
    Distance:361.756,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"KWI",
    Distance:449.037,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"SYZ",
    To:"KWI",
    Distance:449.037,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"LRR",
    Distance:271.351,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"MCT",
    Distance:870.254,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"MED",
    Distance:1390.09,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"MHD",
    Distance:993.298,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"SYZ",
    To:"MHD",
    Distance:993.298,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"SYZ",
    To:"MHD",
    Distance:993.298,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"PGU",
    Distance:240.592,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"RAS",
    Distance:908.822,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"SHJ",
    Distance:550.099,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"SYZ",
    To:"SRY",
    Distance:791.102,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"TBZ",
    Distance:1120.8,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"THR",
    Distance:694.189,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"SYZ",
    To:"THR",
    Distance:694.189,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"SYZ",
    To:"THR",
    Distance:694.189,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SYZ",
    To:"ZAH",
    Distance:804.654,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SZA",
    To:"CAB",
    Distance:63.8113,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"SZA",
    To:"LAD",
    Distance:316.652,
    Airport:"Cosmic Air"
}),
new Routes(
{
    From:"SZA",
    To:"LAD",
    Distance:316.652,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"SZB",
    To:"AOR",
    Distance:363.287,
    Airport:"Firefly"
}),
new Routes(
{
    From:"SZB",
    To:"AOR",
    Distance:363.287,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SZB",
    To:"AOR",
    Distance:363.287,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"SZB",
    To:"BTH",
    Distance:362.544,
    Airport:"Firefly"
}),
new Routes(
{
    From:"SZB",
    To:"BTH",
    Distance:362.544,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SZB",
    To:"JHB",
    Distance:287.939,
    Airport:"Firefly"
}),
new Routes(
{
    From:"SZB",
    To:"JHB",
    Distance:287.939,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SZB",
    To:"JHB",
    Distance:287.939,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"SZB",
    To:"KBR",
    Distance:347.53,
    Airport:"Firefly"
}),
new Routes(
{
    From:"SZB",
    To:"KBR",
    Distance:347.53,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SZB",
    To:"KBR",
    Distance:347.53,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"SZB",
    To:"KTE",
    Distance:260.477,
    Airport:"Firefly"
}),
new Routes(
{
    From:"SZB",
    To:"KTE",
    Distance:260.477,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SZB",
    To:"LGK",
    Distance:408.949,
    Airport:"Firefly"
}),
new Routes(
{
    From:"SZB",
    To:"LGK",
    Distance:408.949,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SZB",
    To:"LGK",
    Distance:408.949,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"SZB",
    To:"PEN",
    Distance:279.19,
    Airport:"Firefly"
}),
new Routes(
{
    From:"SZB",
    To:"PEN",
    Distance:279.19,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SZB",
    To:"PEN",
    Distance:279.19,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"SZB",
    To:"PKU",
    Distance:297.096,
    Airport:"Firefly"
}),
new Routes(
{
    From:"SZB",
    To:"PKU",
    Distance:297.096,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SZB",
    To:"RDN",
    Distance:334.57,
    Airport:"Berjaya Air"
}),
new Routes(
{
    From:"SZB",
    To:"SIN",
    Distance:336.145,
    Airport:"Firefly"
}),
new Routes(
{
    From:"SZB",
    To:"SIN",
    Distance:336.145,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SZB",
    To:"TGG",
    Distance:303.974,
    Airport:"Firefly"
}),
new Routes(
{
    From:"SZB",
    To:"TGG",
    Distance:303.974,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SZB",
    To:"TGG",
    Distance:303.974,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"SZB",
    To:"USM",
    Distance:732.222,
    Airport:"Firefly"
}),
new Routes(
{
    From:"SZB",
    To:"USM",
    Distance:732.222,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SZG",
    To:"ACE",
    Distance:3097.64,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SZG",
    To:"ACE",
    Distance:3097.64,
    Airport:"Niki"
}),
new Routes(
{
    From:"SZG",
    To:"AYT",
    Distance:1891.08,
    Airport:"Niki"
}),
new Routes(
{
    From:"SZG",
    To:"AYT",
    Distance:1891.08,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"SZG",
    To:"CGN",
    Distance:544.839,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"SZG",
    To:"CGN",
    Distance:544.839,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"SZG",
    To:"CLY",
    Distance:671.641,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SZG",
    To:"CLY",
    Distance:671.641,
    Airport:"Niki"
}),
new Routes(
{
    From:"SZG",
    To:"DUS",
    Distance:594.35,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SZG",
    To:"DUS",
    Distance:594.35,
    Airport:"Finnair"
}),
new Routes(
{
    From:"SZG",
    To:"FRA",
    Distance:409.708,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"SZG",
    To:"FRA",
    Distance:409.708,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"SZG",
    To:"HAM",
    Distance:682.752,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SZG",
    To:"HAM",
    Distance:682.752,
    Airport:"Finnair"
}),
new Routes(
{
    From:"SZG",
    To:"HER",
    Distance:1711.26,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SZG",
    To:"HER",
    Distance:1711.26,
    Airport:"Niki"
}),
new Routes(
{
    From:"SZG",
    To:"HRG",
    Distance:2916.52,
    Airport:"Niki"
}),
new Routes(
{
    From:"SZG",
    To:"IST",
    Distance:1463.16,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SZG",
    To:"LGW",
    Distance:1022.02,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SZG",
    To:"LGW",
    Distance:1022.02,
    Airport:"British Airways"
}),
new Routes(
{
    From:"SZG",
    To:"LPA",
    Distance:3296.1,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SZG",
    To:"LPA",
    Distance:3296.1,
    Airport:"Niki"
}),
new Routes(
{
    From:"SZG",
    To:"PMI",
    Distance:1231.78,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SZG",
    To:"PMI",
    Distance:1231.78,
    Airport:"Niki"
}),
new Routes(
{
    From:"SZG",
    To:"STN",
    Distance:1020.63,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"SZG",
    To:"SXF",
    Distance:511.352,
    Airport:"easyJet"
}),
new Routes(
{
    From:"SZG",
    To:"TFS",
    Distance:3362.56,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SZG",
    To:"TFS",
    Distance:3362.56,
    Airport:"Niki"
}),
new Routes(
{
    From:"SZG",
    To:"TXL",
    Distance:530.38,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SZG",
    To:"TXL",
    Distance:530.38,
    Airport:"Finnair"
}),
new Routes(
{
    From:"SZG",
    To:"VIE",
    Distance:267.831,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SZG",
    To:"VIE",
    Distance:267.831,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"SZG",
    To:"VIE",
    Distance:267.831,
    Airport:"Niki"
}),
new Routes(
{
    From:"SZG",
    To:"ZRH",
    Distance:335.804,
    Airport:"Intersky"
}),
new Routes(
{
    From:"SZX",
    To:"BFJ",
    Distance:988.406,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"BHY",
    Distance:481.141,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"BKI",
    Distance:1872.68,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"SZX",
    To:"BKI",
    Distance:1872.68,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"BKK",
    Distance:1700.38,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"BKK",
    Distance:1700.38,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CGD",
    Distance:731.253,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CGO",
    Distance:1321.05,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"CGO",
    Distance:1321.05,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CGO",
    Distance:1321.05,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CGO",
    Distance:1321.05,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CGQ",
    Distance:2546.1,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"CGQ",
    Distance:2546.1,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CJU",
    Distance:1731.95,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CKG",
    Distance:1063.15,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"CKG",
    Distance:1063.15,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CKG",
    Distance:1063.15,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CKG",
    Distance:1063.15,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CKG",
    Distance:1063.15,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CKG",
    Distance:1063.15,
    Airport:"West Air China"
}),
new Routes(
{
    From:"SZX",
    To:"CSX",
    Distance:619.965,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CSX",
    Distance:619.965,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CTU",
    Distance:1318.25,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"CTU",
    Distance:1318.25,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CTU",
    Distance:1318.25,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"SZX",
    To:"CTU",
    Distance:1318.25,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CTU",
    Distance:1318.25,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CTU",
    Distance:1318.25,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CTU",
    Distance:1318.25,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"SZX",
    To:"CZX",
    Distance:1186.83,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"CZX",
    Distance:1186.83,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CZX",
    Distance:1186.83,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"CZX",
    Distance:1186.83,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"DAX",
    Distance:1147.67,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"DAX",
    Distance:1147.67,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"DLC",
    Distance:1957.71,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"DLC",
    Distance:1957.71,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"DLC",
    Distance:1957.71,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"DMK",
    Distance:1696.88,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"SZX",
    To:"DPS",
    Distance:3493.25,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"DYG",
    Distance:793.64,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"FOC",
    Distance:697.111,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"SZX",
    To:"FOC",
    Distance:697.111,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"FOC",
    Distance:697.111,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"FOC",
    Distance:697.111,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"GYS",
    Distance:1346.2,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"GYS",
    Distance:1346.2,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"HAK",
    Distance:459.332,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"HAK",
    Distance:459.332,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"HAK",
    Distance:459.332,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"HAK",
    Distance:459.332,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"HFE",
    Distance:1073.12,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"HFE",
    Distance:1073.12,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"HFE",
    Distance:1073.12,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"HFE",
    Distance:1073.12,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"HGH",
    Distance:1070.56,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"HGH",
    Distance:1070.56,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"SZX",
    To:"HGH",
    Distance:1070.56,
    Airport:"China SSS"
}),
new Routes(
{
    From:"SZX",
    To:"HGH",
    Distance:1070.56,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"HGH",
    Distance:1070.56,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"HGH",
    Distance:1070.56,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"HGH",
    Distance:1070.56,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"HGH",
    Distance:1070.56,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"HIA",
    Distance:1343.76,
    Airport:"China SSS"
}),
new Routes(
{
    From:"SZX",
    To:"HKT",
    Distance:2312.8,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"HRB",
    Distance:2792.64,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"HRB",
    Distance:2792.64,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"HRB",
    Distance:2792.64,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"HSN",
    Distance:1175.94,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"HYN",
    Distance:1008.14,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"HYN",
    Distance:1008.14,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"ICN",
    Distance:2044.75,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"ICN",
    Distance:2044.75,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"SZX",
    To:"ICN",
    Distance:2044.75,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"JDZ",
    Distance:817.215,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"JDZ",
    Distance:817.215,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"JGS",
    Distance:482.886,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"JJN",
    Distance:542.402,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"JJN",
    Distance:542.402,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"JJN",
    Distance:542.402,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"JJN",
    Distance:542.402,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"JUZ",
    Distance:868.261,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"JUZ",
    Distance:868.261,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"KHH",
    Distance:671.246,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"KHN",
    Distance:723.153,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"KHN",
    Distance:723.153,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"KHN",
    Distance:723.153,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"KHN",
    Distance:723.153,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"KHN",
    Distance:723.153,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"KMG",
    Distance:1155.42,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"KMG",
    Distance:1155.42,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"KMG",
    Distance:1155.42,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"KMG",
    Distance:1155.42,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"KMG",
    Distance:1155.42,
    Airport:"KSY"
}),
new Routes(
{
    From:"SZX",
    To:"KMG",
    Distance:1155.42,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"KOW",
    Distance:371.501,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"KUL",
    Distance:2568.27,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"SZX",
    To:"KWE",
    Distance:830.629,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"KWE",
    Distance:830.629,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"KWE",
    Distance:830.629,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"KWE",
    Distance:830.629,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"KWE",
    Distance:830.629,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"KWL",
    Distance:478.662,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"KWL",
    Distance:478.662,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"KWL",
    Distance:478.662,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"LHW",
    Distance:1792.24,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"LJG",
    Distance:1448.86,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"SZX",
    To:"LLF",
    Distance:468.298,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"LYI",
    Distance:1450.02,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"LZH",
    Distance:483.451,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"SZX",
    To:"LZO",
    Distance:1089.33,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"MIG",
    Distance:1326.22,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"MIG",
    Distance:1326.22,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"MXZ",
    Distance:303.749,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"NAO",
    Distance:1185.24,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"NAY",
    Distance:1921.69,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"NAY",
    Distance:1921.69,
    Airport:"China United"
}),
new Routes(
{
    From:"SZX",
    To:"NGB",
    Distance:1104.37,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"NGB",
    Distance:1104.37,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"NGB",
    Distance:1104.37,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"NGB",
    Distance:1104.37,
    Airport:"Starline.kz"
}),
new Routes(
{
    From:"SZX",
    To:"NKG",
    Distance:1128.34,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"NKG",
    Distance:1128.34,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"NKG",
    Distance:1128.34,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"NKG",
    Distance:1128.34,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"NKG",
    Distance:1128.34,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"NNG",
    Distance:578.675,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"NNG",
    Distance:578.675,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"NNG",
    Distance:578.675,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"SZX",
    To:"NNG",
    Distance:578.675,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"NNG",
    Distance:578.675,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"NNY",
    Distance:1155.89,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"NTG",
    Distance:1264.3,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"NTG",
    Distance:1264.3,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"PEK",
    Distance:1956.85,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"PEK",
    Distance:1956.85,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"PEK",
    Distance:1956.85,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"PEK",
    Distance:1956.85,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"PVG",
    Distance:1233.09,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"PVG",
    Distance:1233.09,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"SZX",
    To:"PVG",
    Distance:1233.09,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"PVG",
    Distance:1233.09,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"PVG",
    Distance:1233.09,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"PVG",
    Distance:1233.09,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"RMQ",
    Distance:717.705,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"SZX",
    To:"SHA",
    Distance:1208.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"SHA",
    Distance:1208.48,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"SHA",
    Distance:1208.48,
    Airport:"China SSS"
}),
new Routes(
{
    From:"SZX",
    To:"SHA",
    Distance:1208.48,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"SHA",
    Distance:1208.48,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"SHA",
    Distance:1208.48,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"SHA",
    Distance:1208.48,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"SHE",
    Distance:2264.16,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"SHE",
    Distance:2264.16,
    Airport:"China SSS"
}),
new Routes(
{
    From:"SZX",
    To:"SHE",
    Distance:2264.16,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"SIN",
    Distance:2593.97,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"SIN",
    Distance:2593.97,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"SIN",
    Distance:2593.97,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"SZX",
    To:"SIN",
    Distance:2593.97,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"SIN",
    Distance:2593.97,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"SZX",
    To:"SJW",
    Distance:1741.3,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"SJW",
    Distance:1741.3,
    Airport:"China SSS"
}),
new Routes(
{
    From:"SZX",
    To:"SJW",
    Distance:1741.3,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"SJW",
    Distance:1741.3,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"SYX",
    Distance:665.045,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"SYX",
    Distance:665.045,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"SYX",
    Distance:665.045,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"SYX",
    Distance:665.045,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TAO",
    Distance:1641.95,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"TAO",
    Distance:1641.95,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TAO",
    Distance:1641.95,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TAO",
    Distance:1641.95,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TEN",
    Distance:738.032,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TNA",
    Distance:1614.44,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"TNA",
    Distance:1614.44,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TNA",
    Distance:1614.44,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TNA",
    Distance:1614.44,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TPE",
    Distance:801.841,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TPE",
    Distance:801.841,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TPE",
    Distance:801.841,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TPE",
    Distance:801.841,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"SZX",
    To:"TSN",
    Distance:1863.41,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"TSN",
    Distance:1863.41,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TSN",
    Distance:1863.41,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TSN",
    Distance:1863.41,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"SZX",
    To:"TSN",
    Distance:1863.41,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TSN",
    Distance:1863.41,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TXN",
    Distance:904.73,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TYN",
    Distance:1683.69,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"TYN",
    Distance:1683.69,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TYN",
    Distance:1683.69,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"TYN",
    Distance:1683.69,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"URC",
    Distance:3375.76,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"WNZ",
    Distance:918.879,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"WNZ",
    Distance:918.879,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"WNZ",
    Distance:918.879,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"WNZ",
    Distance:918.879,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"WUH",
    Distance:906.485,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"WUH",
    Distance:906.485,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"WUH",
    Distance:906.485,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"WUH",
    Distance:906.485,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"WUX",
    Distance:1182.1,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"WUX",
    Distance:1182.1,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"WUX",
    Distance:1182.1,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"WUX",
    Distance:1182.1,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"WXN",
    Distance:1057.3,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"XFN",
    Distance:1068.16,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"XFN",
    Distance:1068.16,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"XFN",
    Distance:1068.16,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"XIY",
    Distance:1402.3,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"XIY",
    Distance:1402.3,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"XIY",
    Distance:1402.3,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"XIY",
    Distance:1402.3,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"XIY",
    Distance:1402.3,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"XMN",
    Distance:488.204,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"XMN",
    Distance:488.204,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"XMN",
    Distance:488.204,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"XMN",
    Distance:488.204,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"XUZ",
    Distance:1320.82,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"YBP",
    Distance:1152.94,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"YBP",
    Distance:1152.94,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"YCU",
    Distance:1403.35,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"YCU",
    Distance:1403.35,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"YIC",
    Distance:576.389,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"YIC",
    Distance:576.389,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"YIH",
    Distance:923.527,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"YIH",
    Distance:923.527,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"YIH",
    Distance:923.527,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"YNT",
    Distance:1793.98,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"YNT",
    Distance:1793.98,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"YTY",
    Distance:1246.69,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZX",
    To:"ZHA",
    Distance:389.779,
    Airport:"Air China"
}),
new Routes(
{
    From:"SZX",
    To:"ZHA",
    Distance:389.779,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"SZZ",
    To:"DUB",
    Distance:1395.21,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"SZZ",
    To:"LPL",
    Distance:1172.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"SZZ",
    To:"OSL",
    Distance:770.018,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"SZZ",
    To:"STN",
    Distance:1003.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"SZZ",
    To:"SVG",
    Distance:819.671,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"SZZ",
    To:"TRF",
    Distance:684.973,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"SZZ",
    To:"WAW",
    Distance:436.368,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"TAB",
    To:"ANU",
    Distance:673.733,
    Airport:"British Airways"
}),
new Routes(
{
    From:"TAB",
    To:"BGI",
    Distance:258.898,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"TAB",
    To:"JFK",
    Distance:3516.34,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"TAB",
    To:"POS",
    Distance:82.7063,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"TAC",
    To:"CEB",
    Distance:153.56,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"TAC",
    To:"MNL",
    Distance:567.297,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"TAC",
    To:"MNL",
    Distance:567.297,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"TAC",
    To:"MNL",
    Distance:567.297,
    Airport:"South East Asian Airlines"
}),
new Routes(
{
    From:"TAC",
    To:"MNL",
    Distance:567.297,
    Airport:"Zest Air"
}),
new Routes(
{
    From:"TAE",
    To:"CJU",
    Distance:330.736,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"TAE",
    To:"CJU",
    Distance:330.736,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"TAE",
    To:"CJU",
    Distance:330.736,
    Airport:"Tway Airlines"
}),
new Routes(
{
    From:"TAE",
    To:"ICN",
    Distance:263.519,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"TAE",
    To:"PEK",
    Distance:1154.73,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAE",
    To:"PVG",
    Distance:825.865,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAG",
    To:"MNL",
    Distance:620.525,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"TAG",
    To:"MNL",
    Distance:620.525,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"TAG",
    To:"MNL",
    Distance:620.525,
    Airport:"Zest Air"
}),
new Routes(
{
    From:"TAH",
    To:"AUY",
    Distance:105.207,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"TAH",
    To:"AWD",
    Distance:46.5931,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"TAH",
    To:"FTA",
    Distance:105.89,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"TAH",
    To:"IPA",
    Distance:64.7528,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"TAH",
    To:"VLI",
    Distance:217.258,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"TAI",
    To:"CAI",
    Distance:2246.61,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"TAI",
    To:"DMM",
    Distance:1538.92,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"TAI",
    To:"JED",
    Distance:1033.48,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"TAI",
    To:"JIB",
    Distance:260.494,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"TAI",
    To:"RUH",
    Distance:1281.69,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"TAI",
    To:"SAH",
    Distance:199.261,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"TAI",
    To:"SAH",
    Distance:199.261,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"TAK",
    To:"HND",
    Distance:546.327,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TAK",
    To:"HND",
    Distance:546.327,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"TAK",
    To:"ICN",
    Distance:771.643,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TAK",
    To:"ICN",
    Distance:771.643,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"TAK",
    To:"NRT",
    Distance:605.298,
    Airport:"Genesis"
}),
new Routes(
{
    From:"TAK",
    To:"OKA",
    Distance:1080.88,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TAK",
    To:"PVG",
    Distance:1191.84,
    Airport:"China SSS"
}),
new Routes(
{
    From:"TAK",
    To:"TPE",
    Distance:1596.92,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TAL",
    To:"FAI",
    Distance:202.367,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"TAL",
    To:"HSL",
    Distance:205.8,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"TAL",
    To:"RBY",
    Distance:167.487,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"TAM",
    To:"CUN",
    Distance:1143.91,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"TAM",
    To:"IAH",
    Distance:891.14,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TAM",
    To:"MEX",
    Distance:341.828,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TAM",
    To:"MEX",
    Distance:341.828,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"TAM",
    To:"MTY",
    Distance:449.082,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TAM",
    To:"MTY",
    Distance:449.082,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"TAM",
    To:"VER",
    Distance:391.4,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TAO",
    To:"BKK",
    Distance:3182.69,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CAN",
    Distance:1584.6,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"CAN",
    Distance:1584.6,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CAN",
    Distance:1584.6,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CAN",
    Distance:1584.6,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CAN",
    Distance:1584.6,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CGO",
    Distance:623.109,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"CGO",
    Distance:623.109,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TAO",
    To:"CGO",
    Distance:623.109,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CGO",
    Distance:623.109,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CGO",
    Distance:623.109,
    Airport:"West Air China"
}),
new Routes(
{
    From:"TAO",
    To:"CGQ",
    Distance:904.186,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"CGQ",
    Distance:904.186,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CGQ",
    Distance:904.186,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CGQ",
    Distance:904.186,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CGQ",
    Distance:904.186,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CKG",
    Distance:1471.03,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"CKG",
    Distance:1471.03,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CKG",
    Distance:1471.03,
    Airport:"West Air China"
}),
new Routes(
{
    From:"TAO",
    To:"CSX",
    Distance:1121.49,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CSX",
    Distance:1121.49,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TAO",
    To:"CSX",
    Distance:1121.49,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CSX",
    Distance:1121.49,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CTU",
    Distance:1647.73,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"CTU",
    Distance:1647.73,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CTU",
    Distance:1647.73,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CTU",
    Distance:1647.73,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CTU",
    Distance:1647.73,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"CTU",
    Distance:1647.73,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"DDG",
    Distance:540.045,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"DDG",
    Distance:540.045,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"DLC",
    Distance:317.199,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"DLC",
    Distance:317.199,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"DLC",
    Distance:317.199,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"DLC",
    Distance:317.199,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"DLC",
    Distance:317.199,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"FOC",
    Distance:1150.74,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TAO",
    To:"FOC",
    Distance:1150.74,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"FOC",
    Distance:1150.74,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"FUK",
    Distance:965.196,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"FUK",
    Distance:965.196,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"HET",
    Distance:900.798,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"HFE",
    Distance:573.665,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"HFE",
    Distance:573.665,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TAO",
    To:"HFE",
    Distance:573.665,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"HFE",
    Distance:573.665,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"HGH",
    Distance:671.263,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"HGH",
    Distance:671.263,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"HGH",
    Distance:671.263,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"HGH",
    Distance:671.263,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"TAO",
    To:"HGH",
    Distance:671.263,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"HGH",
    Distance:671.263,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"HGH",
    Distance:671.263,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"HGH",
    Distance:671.263,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"HGH",
    Distance:671.263,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"HKG",
    Distance:1672.48,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"TAO",
    To:"HKG",
    Distance:1672.48,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"TAO",
    To:"HRB",
    Distance:1150.79,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"HRB",
    Distance:1150.79,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"HRB",
    Distance:1150.79,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"HRB",
    Distance:1150.79,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"HRB",
    Distance:1150.79,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"HRB",
    Distance:1150.79,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"ICN",
    Distance:556.711,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"ICN",
    Distance:556.711,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"ICN",
    Distance:556.711,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"ICN",
    Distance:556.711,
    Airport:"Jeju Air"
}),
new Routes(
{
    From:"TAO",
    To:"ICN",
    Distance:556.711,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"TAO",
    To:"ICN",
    Distance:556.711,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"JMU",
    Distance:1442.5,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"JMU",
    Distance:1442.5,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"JNZ",
    Distance:540.956,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"JNZ",
    Distance:540.956,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"JXA",
    Distance:1343.08,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"JXA",
    Distance:1343.08,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"KHH",
    Distance:1522.15,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"TAO",
    To:"KHN",
    Distance:923.322,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"KHN",
    Distance:923.322,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"KHN",
    Distance:923.322,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"KIX",
    Distance:1362.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"KIX",
    Distance:1362.48,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TAO",
    To:"KIX",
    Distance:1362.48,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"KIX",
    Distance:1362.48,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"KIX",
    Distance:1362.48,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"KMG",
    Distance:2095.83,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"KMG",
    Distance:2095.83,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"KMG",
    Distance:2095.83,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"KWE",
    Distance:1678.99,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"MDG",
    Distance:1202.3,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"NDG",
    Distance:1254.75,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"NDG",
    Distance:1254.75,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"NGB",
    Distance:723.153,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"NGB",
    Distance:723.153,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"NGB",
    Distance:723.153,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"NGB",
    Distance:723.153,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"NGB",
    Distance:723.153,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"NGO",
    Distance:1492.67,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"NGO",
    Distance:1492.67,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"NKG",
    Distance:521.991,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"NKG",
    Distance:521.991,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"NKG",
    Distance:521.991,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"NRT",
    Distance:1797.56,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"NRT",
    Distance:1797.56,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TAO",
    To:"NRT",
    Distance:1797.56,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"PEK",
    Distance:538.037,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"PEK",
    Distance:538.037,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"PEK",
    Distance:538.037,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"TAO",
    To:"PEK",
    Distance:538.037,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"PEK",
    Distance:538.037,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"PUS",
    Distance:782.197,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"TAO",
    To:"PUS",
    Distance:782.197,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"PUS",
    Distance:782.197,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"PUS",
    Distance:782.197,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"TAO",
    To:"PUS",
    Distance:782.197,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"PVG",
    Distance:584.772,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"PVG",
    Distance:584.772,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"PVG",
    Distance:584.772,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"PVG",
    Distance:584.772,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"PVG",
    Distance:584.772,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"RMQ",
    Distance:1334.71,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"SHA",
    Distance:570.528,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"SHA",
    Distance:570.528,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"SHA",
    Distance:570.528,
    Airport:"China SSS"
}),
new Routes(
{
    From:"TAO",
    To:"SHA",
    Distance:570.528,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"SHA",
    Distance:570.528,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"SHA",
    Distance:570.528,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"SHE",
    Distance:622.351,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"SHE",
    Distance:622.351,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"SHE",
    Distance:622.351,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"SHE",
    Distance:622.351,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"SHE",
    Distance:622.351,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TAO",
    To:"SHE",
    Distance:622.351,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TAO",
    To:"SHE",
    Distance:622.351,
    Airport:"Scoot"
}),
new Routes(
{
    From:"TAO",
    To:"SHE",
    Distance:622.351,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"SHE",
    Distance:622.351,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"SHP",
    Distance:415.47,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"SIN",
    Distance:4232.99,
    Airport:"Scoot"
}),
new Routes(
{
    From:"TAO",
    To:"SJW",
    Distance:549.886,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"SJW",
    Distance:549.886,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TAO",
    To:"SJW",
    Distance:549.886,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"SJW",
    Distance:549.886,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"SZX",
    Distance:1641.95,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"SZX",
    Distance:1641.95,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"SZX",
    Distance:1641.95,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"SZX",
    Distance:1641.95,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"TPE",
    Distance:1246.78,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"TPE",
    Distance:1246.78,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"TPE",
    Distance:1246.78,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"TPE",
    Distance:1246.78,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"TAO",
    To:"TSN",
    Distance:414.675,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"TSN",
    Distance:414.675,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TAO",
    To:"TSN",
    Distance:414.675,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"TXN",
    Distance:752.735,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"TYN",
    Distance:707.018,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"TYN",
    Distance:707.018,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"TYN",
    Distance:707.018,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"TYN",
    Distance:707.018,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"WNZ",
    Distance:929.997,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"WNZ",
    Distance:929.997,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TAO",
    To:"WNZ",
    Distance:929.997,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"WNZ",
    Distance:929.997,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"WUH",
    Distance:835.271,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"WUH",
    Distance:835.271,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"TAO",
    To:"WUH",
    Distance:835.271,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"WUH",
    Distance:835.271,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"WUH",
    Distance:835.271,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"WUH",
    Distance:835.271,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"WUS",
    Distance:978.148,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"WUS",
    Distance:978.148,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"WUX",
    Distance:530.614,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"XIY",
    Distance:1072.56,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"XIY",
    Distance:1072.56,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"XIY",
    Distance:1072.56,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"XIY",
    Distance:1072.56,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"TAO",
    To:"XIY",
    Distance:1072.56,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"XIY",
    Distance:1072.56,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"TAO",
    To:"XIY",
    Distance:1072.56,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"XMN",
    Distance:1321,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"XMN",
    Distance:1321,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"XMN",
    Distance:1321,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"XMN",
    Distance:1321,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"YCU",
    Distance:858.68,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"YCU",
    Distance:858.68,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"YNJ",
    Distance:1069.57,
    Airport:"Air China"
}),
new Routes(
{
    From:"TAO",
    To:"YNJ",
    Distance:1069.57,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TAO",
    To:"YNJ",
    Distance:1069.57,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TAP",
    To:"GUA",
    Distance:199.57,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TAP",
    To:"MEX",
    Distance:879.371,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TAS",
    To:"AER",
    Distance:2409.44,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"AER",
    Distance:2409.44,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"ALA",
    Distance:678.94,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TAS",
    To:"ALA",
    Distance:678.94,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"ATQ",
    Distance:1170,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"AZN",
    Distance:259.628,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"BHK",
    Distance:437.731,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"BKK",
    Distance:4317.97,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"CDG",
    Distance:5133.42,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"CEK",
    Distance:1662.24,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"DEL",
    Distance:1579.5,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"DME",
    Distance:2765.63,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"DXB",
    Distance:2194.15,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"FCO",
    Distance:4656.95,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"FEG",
    Distance:230.191,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"FRA",
    Distance:4686.49,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"FRU",
    Distance:472.822,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"TAS",
    To:"FRU",
    Distance:472.822,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"GOJ",
    Distance:2477.23,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"GYD",
    Distance:1616.6,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"ICN",
    Distance:4843.74,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"ICN",
    Distance:4843.74,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"TAS",
    To:"ICN",
    Distance:4843.74,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"IKA",
    Distance:1705.22,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"TAS",
    To:"IKT",
    Distance:2904.07,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"TAS",
    To:"IST",
    Distance:3358.77,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"IST",
    Distance:3358.77,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"KBP",
    Distance:3102.56,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"KGD",
    Distance:3827.63,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"KGD",
    Distance:3827.63,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"KJA",
    Distance:2354.94,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"KJA",
    Distance:2354.94,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"KRR",
    Distance:2463.96,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"TAS",
    To:"KRR",
    Distance:2463.96,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"KRR",
    Distance:2463.96,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"KSQ",
    Distance:392.946,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"KUF",
    Distance:1970.19,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"KUF",
    Distance:1970.19,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"KUL",
    Distance:5369.43,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"KUL",
    Distance:5369.43,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"KZN",
    Distance:2157.78,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"LED",
    Distance:3364.85,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"LED",
    Distance:3364.85,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"LHR",
    Distance:5260.56,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"MRV",
    Distance:2155.42,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"MRV",
    Distance:2155.42,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"MXP",
    Distance:4795.5,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"NCU",
    Distance:810.812,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"NMA",
    Distance:193.01,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"NRT",
    Distance:6042.49,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"NVI",
    Distance:369.006,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"OMS",
    Distance:1552.81,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"TAS",
    To:"OVB",
    Distance:1816.21,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"OVB",
    Distance:1816.21,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"PEK",
    Distance:3941.64,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"PEK",
    Distance:3941.64,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"PRG",
    Distance:4283.69,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"PRG",
    Distance:4283.69,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"RIX",
    Distance:3640.76,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"TAS",
    To:"RIX",
    Distance:3640.76,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"ROV",
    Distance:2423.17,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"ROV",
    Distance:2423.17,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"SHJ",
    Distance:2178.82,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"SIN",
    Distance:5638.13,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"SIN",
    Distance:5638.13,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"SKD",
    Distance:260.255,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"SVO",
    Distance:2817.46,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"SVO",
    Distance:2817.46,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TAS",
    To:"SVX",
    Distance:1826.31,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"SVX",
    Distance:1826.31,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"TJM",
    Distance:1793.92,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"TLV",
    Distance:3212.26,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"TMJ",
    Distance:473.018,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"TSE",
    Distance:1098.6,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TAS",
    To:"TSE",
    Distance:1098.6,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"UFA",
    Distance:1778.22,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"UGC",
    Distance:720.985,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"URC",
    Distance:1515.09,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"URC",
    Distance:1515.09,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAS",
    To:"VKO",
    Distance:2810.84,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"TAS",
    To:"VOG",
    Distance:2118.66,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TAY",
    To:"HEL",
    Distance:244.003,
    Airport:"Finnair"
}),
new Routes(
{
    From:"TAY",
    To:"HEL",
    Distance:244.003,
    Airport:"Flybe"
}),
new Routes(
{
    From:"TBB",
    To:"HAN",
    Distance:982.723,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"TBB",
    To:"SGN",
    Distance:382.937,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"TBG",
    To:"HGU",
    Distance:345.174,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"TBG",
    To:"POM",
    Distance:806.967,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"TBG",
    To:"POM",
    Distance:806.967,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"TBG",
    To:"UNG",
    Distance:94.3968,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"TBN",
    To:"STL",
    Distance:190.916,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"TBP",
    To:"LIM",
    Distance:1008.06,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"TBS",
    To:"ALA",
    Distance:2620.42,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TBS",
    To:"AMS",
    Distance:3219.96,
    Airport:"Georgian Airways"
}),
new Routes(
{
    From:"TBS",
    To:"AMS",
    Distance:3219.96,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TBS",
    To:"ATH",
    Distance:1837.19,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"TBS",
    To:"BGW",
    Distance:936.922,
    Airport:"Cameroon Airlines"
}),
new Routes(
{
    From:"TBS",
    To:"BUS",
    Distance:278.863,
    Airport:"Georgian Airways"
}),
new Routes(
{
    From:"TBS",
    To:"CDG",
    Distance:3366.28,
    Airport:"Air France"
}),
new Routes(
{
    From:"TBS",
    To:"CDG",
    Distance:3366.28,
    Airport:"Georgian Airways"
}),
new Routes(
{
    From:"TBS",
    To:"DME",
    Distance:1611.48,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"TBS",
    To:"DNK",
    Distance:1072.21,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"TBS",
    To:"DXB",
    Distance:2061.33,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"TBS",
    To:"EBL",
    Distance:610.004,
    Airport:"Cameroon Airlines"
}),
new Routes(
{
    From:"TBS",
    To:"FCO",
    Distance:2697.05,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TBS",
    To:"GYD",
    Distance:447.214,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"TBS",
    To:"GYD",
    Distance:447.214,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"TBS",
    To:"IST",
    Distance:1348.04,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"TBS",
    To:"IST",
    Distance:1348.04,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TBS",
    To:"KBP",
    Distance:1448.18,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TBS",
    To:"KBP",
    Distance:1448.18,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"TBS",
    To:"MSQ",
    Distance:1846.39,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"TBS",
    To:"MUC",
    Distance:2687.8,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TBS",
    To:"RIX",
    Distance:2260.16,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"TBS",
    To:"RIX",
    Distance:2260.16,
    Airport:"Georgian Airways"
}),
new Routes(
{
    From:"TBS",
    To:"SAW",
    Distance:1308.3,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"TBS",
    To:"SAW",
    Distance:1308.3,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TBS",
    To:"SCO",
    Distance:556.899,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"TBS",
    To:"TLV",
    Distance:1396.48,
    Airport:"Arkia Israel Airlines"
}),
new Routes(
{
    From:"TBS",
    To:"TLV",
    Distance:1396.48,
    Airport:"Georgian Airways"
}),
new Routes(
{
    From:"TBS",
    To:"TLV",
    Distance:1396.48,
    Airport:"Israir"
}),
new Routes(
{
    From:"TBS",
    To:"URC",
    Distance:3440.2,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TBS",
    To:"VIE",
    Distance:2332.57,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"TBS",
    To:"VIE",
    Distance:2332.57,
    Airport:"Georgian Airways"
}),
new Routes(
{
    From:"TBS",
    To:"VKO",
    Distance:1645.69,
    Airport:"Georgian Airways"
}),
new Routes(
{
    From:"TBS",
    To:"WAW",
    Distance:2148.14,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"TBT",
    To:"MAO",
    Distance:1105.35,
    Airport:"Azul"
}),
new Routes(
{
    From:"TBU",
    To:"AKL",
    Distance:2004.01,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"TBU",
    To:"AKL",
    Distance:2004.01,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"TBU",
    To:"NAN",
    Distance:867.561,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"TBU",
    To:"SUV",
    Distance:748.536,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"TBU",
    To:"SYD",
    Distance:3585.38,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"TBW",
    To:"VKO",
    Distance:413.312,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"TBZ",
    To:"AWZ",
    Distance:790.123,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"TBZ",
    To:"BND",
    Distance:1538.72,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"TBZ",
    To:"DXB",
    Distance:1670.45,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"TBZ",
    To:"GYD",
    Distance:418.142,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"TBZ",
    To:"IFN",
    Distance:785.819,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"TBZ",
    To:"IST",
    Distance:1523.83,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TBZ",
    To:"MED",
    Distance:1631.25,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"TBZ",
    To:"MHD",
    Distance:1205.32,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"TBZ",
    To:"MHD",
    Distance:1205.32,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"TBZ",
    To:"MHD",
    Distance:1205.32,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"TBZ",
    To:"SYZ",
    Distance:1120.8,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"TBZ",
    To:"THR",
    Distance:526.903,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"TBZ",
    To:"THR",
    Distance:526.903,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"TBZ",
    To:"THR",
    Distance:526.903,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"TBZ",
    To:"THR",
    Distance:526.903,
    Airport:"Kish Air"
}),
new Routes(
{
    From:"TCB",
    To:"FLL",
    Distance:285.003,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TCD",
    To:"LET",
    Distance:149.338,
    Airport:"SATENA"
}),
new Routes(
{
    From:"TCG",
    To:"URC",
    Distance:446.1,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TCG",
    To:"URC",
    Distance:446.1,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TCO",
    To:"CLO",
    Distance:325.743,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"TCQ",
    To:"AQP",
    Distance:235.649,
    Airport:"Peruvian Airlines"
}),
new Routes(
{
    From:"TCQ",
    To:"LIM",
    Distance:994.201,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"TCZ",
    To:"CTU",
    Distance:825.727,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"TCZ",
    To:"JHG",
    Distance:403.188,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TCZ",
    To:"KMG",
    Distance:429.448,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"TCZ",
    To:"KMG",
    Distance:429.448,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TCZ",
    To:"LJG",
    Distance:278.173,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TDD",
    To:"CBB",
    Distance:319.09,
    Airport:"Southern Winds Airlines"
}),
new Routes(
{
    From:"TDD",
    To:"CIJ",
    Distance:593.195,
    Airport:"Southern Winds Airlines"
}),
new Routes(
{
    From:"TDD",
    To:"GYA",
    Distance:446.982,
    Airport:"Southern Winds Airlines"
}),
new Routes(
{
    From:"TDD",
    To:"LPB",
    Distance:397.971,
    Airport:"Southern Winds Airlines"
}),
new Routes(
{
    From:"TDD",
    To:"RBQ",
    Distance:280.98,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"TDD",
    To:"RIB",
    Distance:440.514,
    Airport:"Southern Winds Airlines"
}),
new Routes(
{
    From:"TDD",
    To:"SRZ",
    Distance:380.547,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"TDD",
    To:"SRZ",
    Distance:380.547,
    Airport:"Southern Winds Airlines"
}),
new Routes(
{
    From:"TDX",
    To:"BKK",
    Distance:231.215,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"TEB",
    To:"ACK",
    Distance:338.419,
    Airport:"T.J. Air"
}),
new Routes(
{
    From:"TEE",
    To:"ALG",
    Distance:462.569,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"TEN",
    To:"CAN",
    Distance:639.672,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TEN",
    To:"CSX",
    Distance:385.195,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TEN",
    To:"KWE",
    Distance:289.741,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TEN",
    To:"PEK",
    Distance:1511.56,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TEN",
    To:"SZX",
    Distance:738.032,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TEQ",
    To:"ESB",
    Distance:442.747,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TER",
    To:"FLW",
    Distance:357.018,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"TER",
    To:"GRW",
    Distance:89.1491,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"TER",
    To:"HOR",
    Distance:143.679,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"TER",
    To:"LIS",
    Distance:1554.05,
    Airport:"SATA International"
}),
new Routes(
{
    From:"TER",
    To:"LIS",
    Distance:1554.05,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"TER",
    To:"OPO",
    Distance:1589.05,
    Airport:"SATA International"
}),
new Routes(
{
    From:"TER",
    To:"OPO",
    Distance:1589.05,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"TER",
    To:"PDL",
    Distance:166.353,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"TER",
    To:"PIX",
    Distance:119.515,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"TER",
    To:"SJZ",
    Distance:94.7469,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"TET",
    To:"APL",
    Distance:614.299,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"TET",
    To:"BEW",
    Distance:431.816,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"TET",
    To:"JNB",
    Distance:1247.72,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"TET",
    To:"JNB",
    Distance:1247.72,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"TET",
    To:"MPM",
    Distance:1097.08,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"TET",
    To:"UEL",
    Distance:394.71,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"TET",
    To:"VXC",
    Distance:360.091,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"TFF",
    To:"ERN",
    Distance:676.148,
    Airport:"Azul"
}),
new Routes(
{
    From:"TFF",
    To:"IRZ",
    Distance:331.596,
    Airport:"Azul"
}),
new Routes(
{
    From:"TFF",
    To:"MAO",
    Distance:520.356,
    Airport:"Azul"
}),
new Routes(
{
    From:"TFF",
    To:"OLC",
    Distance:465.702,
    Airport:"Azul"
}),
new Routes(
{
    From:"TFF",
    To:"SJL",
    Distance:438.815,
    Airport:"Azul"
}),
new Routes(
{
    From:"TFI",
    To:"PNP",
    Distance:115.08,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"TFN",
    To:"ACE",
    Distance:271.758,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"TFN",
    To:"AGP",
    Distance:1433.57,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"TFN",
    To:"AGP",
    Distance:1433.57,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"TFN",
    To:"AGP",
    Distance:1433.57,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TFN",
    To:"BCN",
    Distance:2194.51,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"TFN",
    To:"BCN",
    Distance:2194.51,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"TFN",
    To:"BCN",
    Distance:2194.51,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TFN",
    To:"BCN",
    Distance:2194.51,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFN",
    To:"BIO",
    Distance:2038.5,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"TFN",
    To:"BIO",
    Distance:2038.5,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"TFN",
    To:"BIO",
    Distance:2038.5,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TFN",
    To:"CCS",
    Distance:5619.65,
    Airport:"Santa Barbara Airlines"
}),
new Routes(
{
    From:"TFN",
    To:"CMN",
    Distance:995.323,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"TFN",
    To:"DKR",
    Distance:1532.72,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"TFN",
    To:"FUE",
    Distance:242.221,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"TFN",
    To:"GMZ",
    Distance:99.2477,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"TFN",
    To:"LPA",
    Distance:111.834,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"TFN",
    To:"LPA",
    Distance:111.834,
    Airport:"Tropic Air"
}),
new Routes(
{
    From:"TFN",
    To:"MAD",
    Distance:1772.16,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"TFN",
    To:"MAD",
    Distance:1772.16,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TFN",
    To:"MAD",
    Distance:1772.16,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"TFN",
    To:"MAD",
    Distance:1772.16,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TFN",
    To:"MAD",
    Distance:1772.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFN",
    To:"ORY",
    Distance:2759.97,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TFN",
    To:"SCQ",
    Distance:1753.28,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TFN",
    To:"SPC",
    Distance:139.034,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"TFN",
    To:"SPC",
    Distance:139.034,
    Airport:"Tropic Air"
}),
new Routes(
{
    From:"TFN",
    To:"SVQ",
    Distance:1390.15,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"TFN",
    To:"SVQ",
    Distance:1390.15,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"TFN",
    To:"SVQ",
    Distance:1390.15,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TFN",
    To:"VDE",
    Distance:168.742,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"TFN",
    To:"VLC",
    Distance:1901.66,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"ALC",
    Distance:1870.86,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"TFS",
    To:"AMS",
    Distance:3223.92,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"TFS",
    To:"BCN",
    Distance:2245.15,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"BCN",
    Distance:2245.15,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"BCN",
    Distance:2245.15,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"BFS",
    Distance:3075.42,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"TFS",
    To:"BFS",
    Distance:3075.42,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"BGY",
    Distance:3025.98,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"BHX",
    Distance:2978.22,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"TFS",
    To:"BHX",
    Distance:2978.22,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"BHX",
    Distance:2978.22,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"BHX",
    Distance:2978.22,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"TFS",
    To:"BHX",
    Distance:2978.22,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"TFS",
    To:"BLK",
    Distance:3066.75,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"TFS",
    To:"BLL",
    Distance:3698.39,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"BLQ",
    Distance:3072.62,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"BOD",
    Distance:2335.07,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"TFS",
    To:"BOH",
    Distance:2815.09,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"BOH",
    Distance:2815.09,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"TFS",
    To:"BRE",
    Distance:3471.79,
    Airport:"Germania"
}),
new Routes(
{
    From:"TFS",
    To:"BRE",
    Distance:3471.79,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"BRS",
    Distance:2841.76,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"BRS",
    Distance:2841.76,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"BRS",
    Distance:2841.76,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"TFS",
    To:"BRS",
    Distance:2841.76,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"TFS",
    To:"BRS",
    Distance:2841.76,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TFS",
    To:"BRU",
    Distance:3094.92,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"TFS",
    To:"BSL",
    Distance:3009.58,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TFS",
    To:"BSL",
    Distance:3009.58,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"TFS",
    To:"BSL",
    Distance:3009.58,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TFS",
    To:"BVA",
    Distance:2862.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"CDG",
    Distance:2846.53,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TFS",
    To:"CGN",
    Distance:3223.86,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TFS",
    To:"CGN",
    Distance:3223.86,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TFS",
    To:"CGN",
    Distance:3223.86,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"CGN",
    Distance:3223.86,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"TFS",
    To:"CRL",
    Distance:3057.51,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"CWL",
    Distance:2822.31,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"TFS",
    To:"CWL",
    Distance:2822.31,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"TFS",
    To:"DME",
    Distance:5259.49,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"DRS",
    Distance:3606,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TFS",
    To:"DUB",
    Distance:2945.32,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"TFS",
    To:"DUB",
    Distance:2945.32,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"DUS",
    Distance:3237.21,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TFS",
    To:"DUS",
    Distance:3237.21,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"TFS",
    To:"DUS",
    Distance:3237.21,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"TFS",
    To:"EDI",
    Distance:3276.26,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"EDI",
    Distance:3276.26,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"TFS",
    To:"EDI",
    Distance:3276.26,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TFS",
    To:"EMA",
    Distance:3028.73,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"TFS",
    To:"EMA",
    Distance:3028.73,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"TFS",
    To:"EMA",
    Distance:3028.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"EMA",
    Distance:3028.73,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"EMA",
    Distance:3028.73,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"TFS",
    To:"EMA",
    Distance:3028.73,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"TFS",
    To:"ERF",
    Distance:3436.44,
    Airport:"Germania"
}),
new Routes(
{
    From:"TFS",
    To:"FCO",
    Distance:3019.23,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"TFS",
    To:"FKB",
    Distance:3123.35,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"FMM",
    Distance:3199.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"FRA",
    Distance:3236.8,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"TFS",
    To:"FRA",
    Distance:3236.8,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"TFS",
    To:"GLA",
    Distance:3242.15,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"TFS",
    To:"GLA",
    Distance:3242.15,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"GLA",
    Distance:3242.15,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"TFS",
    To:"GLA",
    Distance:3242.15,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"TFS",
    To:"GRZ",
    Distance:3482.64,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TFS",
    To:"GRZ",
    Distance:3482.64,
    Airport:"Niki"
}),
new Routes(
{
    From:"TFS",
    To:"GVA",
    Distance:2832.34,
    Airport:"Helvetic Airways"
}),
new Routes(
{
    From:"TFS",
    To:"GVA",
    Distance:2832.34,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TFS",
    To:"HAJ",
    Distance:3472.84,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"TFS",
    To:"HAM",
    Distance:3574.37,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TFS",
    To:"HAM",
    Distance:3574.37,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"TFS",
    To:"HAM",
    Distance:3574.37,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TFS",
    To:"HHN",
    Distance:3161.7,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"KBP",
    Distance:4674.17,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"LBA",
    Distance:3117.78,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"TFS",
    To:"LBA",
    Distance:3117.78,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"TFS",
    To:"LBA",
    Distance:3117.78,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"LBA",
    Distance:3117.78,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"TFS",
    To:"LED",
    Distance:4977.15,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"LEJ",
    Distance:3538.18,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TFS",
    To:"LEJ",
    Distance:3538.18,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"TFS",
    To:"LGW",
    Distance:2912.42,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"TFS",
    To:"LGW",
    Distance:2912.42,
    Airport:"British Airways"
}),
new Routes(
{
    From:"TFS",
    To:"LGW",
    Distance:2912.42,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"LGW",
    Distance:2912.42,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TFS",
    To:"LGW",
    Distance:2912.42,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"LGW",
    Distance:2912.42,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"TFS",
    To:"LGW",
    Distance:2912.42,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"TFS",
    To:"LGW",
    Distance:2912.42,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TFS",
    To:"LIL",
    Distance:3001.32,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"TFS",
    To:"LPA",
    Distance:117.114,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"TFS",
    To:"LPA",
    Distance:117.114,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"TFS",
    To:"LPL",
    Distance:3028.64,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"LTN",
    Distance:2972.75,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"TFS",
    To:"LTN",
    Distance:2972.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"LTN",
    Distance:2972.75,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"TFS",
    To:"LUX",
    Distance:3081.63,
    Airport:"Luxair"
}),
new Routes(
{
    From:"TFS",
    To:"MAD",
    Distance:1824.58,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"MAD",
    Distance:1824.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"MAN",
    Distance:3048.38,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"TFS",
    To:"MAN",
    Distance:3048.38,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"TFS",
    To:"MAN",
    Distance:3048.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"MAN",
    Distance:3048.38,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"MAN",
    Distance:3048.38,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"TFS",
    To:"MAN",
    Distance:3048.38,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"TFS",
    To:"MAN",
    Distance:3048.38,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TFS",
    To:"MST",
    Distance:3158.17,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"MUC",
    Distance:3317.68,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TFS",
    To:"MUC",
    Distance:3317.68,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"TFS",
    To:"MUC",
    Distance:3317.68,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TFS",
    To:"MUC",
    Distance:3317.68,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"TFS",
    To:"MXP",
    Distance:2959.08,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"TFS",
    To:"NCL",
    Distance:3231.48,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"TFS",
    To:"NCL",
    Distance:3231.48,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"NCL",
    Distance:3231.48,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"TFS",
    To:"NCL",
    Distance:3231.48,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"TFS",
    To:"NOC",
    Distance:2944.81,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"NRN",
    Distance:3230.94,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"NTE",
    Distance:2490.67,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"TFS",
    To:"NUE",
    Distance:3345.1,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TFS",
    To:"NUE",
    Distance:3345.1,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"TFS",
    To:"OPO",
    Distance:1634.23,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"ORK",
    Distance:2730.32,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"ORY",
    Distance:2813.46,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"OSL",
    Distance:4136.96,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TFS",
    To:"OVD",
    Distance:1966.18,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"TFS",
    To:"PAD",
    Distance:3355.72,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"TFS",
    To:"PIK",
    Distance:3201.22,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"PRG",
    Distance:3573.16,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"TFS",
    To:"PSA",
    Distance:2965.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"RIX",
    Distance:4507.42,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"RIX",
    Distance:4507.42,
    Airport:"SmartLynx Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"SCQ",
    Distance:1806.92,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"TFS",
    To:"SCQ",
    Distance:1806.92,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"SDR",
    Distance:2056.28,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"SNN",
    Distance:2813.56,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"STN",
    Distance:2996.7,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"STN",
    Distance:2996.7,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"TFS",
    To:"STN",
    Distance:2996.7,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"TFS",
    To:"STR",
    Distance:3183.56,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"TFS",
    To:"STR",
    Distance:3183.56,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"TFS",
    To:"SVO",
    Distance:5243.2,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"SVQ",
    Distance:1441.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"SXF",
    Distance:3671.17,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"TFS",
    To:"SXF",
    Distance:3671.17,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TFS",
    To:"SXF",
    Distance:3671.17,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TFS",
    To:"SZG",
    Distance:3362.56,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TFS",
    To:"SZG",
    Distance:3362.56,
    Airport:"Niki"
}),
new Routes(
{
    From:"TFS",
    To:"TXL",
    Distance:3670.03,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TFS",
    To:"VDE",
    Distance:131.647,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"TFS",
    To:"VGO",
    Distance:1733.14,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"VIE",
    Distance:3613.38,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TFS",
    To:"VIE",
    Distance:3613.38,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"TFS",
    To:"VIE",
    Distance:3613.38,
    Airport:"Niki"
}),
new Routes(
{
    From:"TFS",
    To:"VLC",
    Distance:1951.94,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TFS",
    To:"ZQW",
    Distance:3115.42,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"TFS",
    To:"ZRH",
    Distance:3062.62,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TFS",
    To:"ZRH",
    Distance:3062.62,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"TGC",
    To:"KCH",
    Distance:122.356,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"TGD",
    To:"BEG",
    Distance:286.378,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"TGD",
    To:"BEG",
    Distance:286.378,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"TGD",
    To:"CDG",
    Distance:1488.83,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"TGD",
    To:"CRL",
    Distance:1444.09,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TGD",
    To:"DME",
    Distance:1979.09,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"TGD",
    To:"DUS",
    Distance:1370.54,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"TGD",
    To:"FCO",
    Distance:580.9,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TGD",
    To:"FCO",
    Distance:580.9,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"TGD",
    To:"FRA",
    Distance:1183.6,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"TGD",
    To:"IST",
    Distance:808.586,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TGD",
    To:"LJU",
    Distance:574.448,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"TGD",
    To:"LJU",
    Distance:574.448,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"TGD",
    To:"STN",
    Distance:1777.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TGD",
    To:"VIE",
    Distance:672.961,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"TGD",
    To:"VIE",
    Distance:672.961,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"TGD",
    To:"ZRH",
    Distance:1014.74,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"TGG",
    To:"KUL",
    Distance:331.459,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"TGG",
    To:"KUL",
    Distance:331.459,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"TGG",
    To:"MYY",
    Distance:1211.57,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"TGG",
    To:"SIN",
    Distance:459.164,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"TGG",
    To:"SZB",
    Distance:303.974,
    Airport:"Firefly"
}),
new Routes(
{
    From:"TGG",
    To:"SZB",
    Distance:303.974,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"TGG",
    To:"SZB",
    Distance:303.974,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"TGH",
    To:"VLI",
    Distance:93.1624,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"TGJ",
    To:"GEA",
    Distance:188.732,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"TGJ",
    To:"LIF",
    Distance:68.6217,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"TGM",
    To:"BVA",
    Distance:1686.76,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TGM",
    To:"DTM",
    Distance:1344.21,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TGM",
    To:"LTN",
    Distance:1888.36,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TGM",
    To:"OTP",
    Distance:248.493,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TGM",
    To:"OTP",
    Distance:248.493,
    Airport:"Tarom"
}),
new Routes(
{
    From:"TGO",
    To:"HET",
    Distance:905.282,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TGO",
    To:"HET",
    Distance:905.282,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TGO",
    To:"HET",
    Distance:905.282,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TGO",
    To:"HGH",
    Distance:1490.11,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"TGO",
    To:"HLD",
    Distance:653.861,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"TGO",
    To:"HRB",
    Distance:394.483,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TGO",
    To:"HRB",
    Distance:394.483,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"TGO",
    To:"NKG",
    Distance:1345.88,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TGO",
    To:"PEK",
    Distance:604.722,
    Airport:"Air China"
}),
new Routes(
{
    From:"TGO",
    To:"PEK",
    Distance:604.722,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TGO",
    To:"PEK",
    Distance:604.722,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TGO",
    To:"PVG",
    Distance:1380.73,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"TGO",
    To:"TNA",
    Distance:856.388,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TGR",
    To:"ALG",
    Distance:480.571,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"TGU",
    To:"ATL",
    Distance:2194.85,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TGU",
    To:"GUA",
    Distance:361.341,
    Airport:"Air Atlanta Icelandic"
}),
new Routes(
{
    From:"TGU",
    To:"GUA",
    Distance:361.341,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"TGU",
    To:"GUA",
    Distance:361.341,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"TGU",
    To:"IAH",
    Distance:1956.91,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TGU",
    To:"LCE",
    Distance:191.035,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"TGU",
    To:"MIA",
    Distance:1491.18,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TGU",
    To:"MIA",
    Distance:1491.18,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TGU",
    To:"PEU",
    Distance:393.011,
    Airport:"Air Atlanta Icelandic"
}),
new Routes(
{
    From:"TGU",
    To:"PTY",
    Distance:1017.6,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"TGU",
    To:"RTB",
    Distance:261.675,
    Airport:"Air Atlanta Icelandic"
}),
new Routes(
{
    From:"TGU",
    To:"RTB",
    Distance:261.675,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"TGU",
    To:"SAL",
    Distance:210.199,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"TGU",
    To:"SAP",
    Distance:172.389,
    Airport:"Air Atlanta Icelandic"
}),
new Routes(
{
    From:"TGU",
    To:"SJO",
    Distance:558.126,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"TGU",
    To:"SJO",
    Distance:558.126,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"TGU",
    To:"SJO",
    Distance:558.126,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TGZ",
    To:"CUN",
    Distance:816.205,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"TGZ",
    To:"GDL",
    Distance:1169.88,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"TGZ",
    To:"GDL",
    Distance:1169.88,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TGZ",
    To:"MEX",
    Distance:714.721,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TGZ",
    To:"MEX",
    Distance:714.721,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"TGZ",
    To:"MEX",
    Distance:714.721,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TGZ",
    To:"MTY",
    Distance:1260,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"TGZ",
    To:"TIJ",
    Distance:2990.77,
    Airport:"Volaris"
}),
new Routes(
{
    From:"THD",
    To:"SGN",
    Distance:1017.9,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"THE",
    To:"BSB",
    Distance:1324.58,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"THE",
    To:"BSB",
    Distance:1324.58,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"THE",
    To:"FOR",
    Distance:496.653,
    Airport:"Azul"
}),
new Routes(
{
    From:"THE",
    To:"FOR",
    Distance:496.653,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"THE",
    To:"FOR",
    Distance:496.653,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"THE",
    To:"GRU",
    Distance:2079.96,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"THE",
    To:"GRU",
    Distance:2079.96,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"THE",
    To:"REC",
    Distance:936.833,
    Airport:"Azul"
}),
new Routes(
{
    From:"THE",
    To:"SLZ",
    Distance:316.551,
    Airport:"Azul"
}),
new Routes(
{
    From:"THE",
    To:"VCP",
    Distance:2048.63,
    Airport:"Azul"
}),
new Routes(
{
    From:"THL",
    To:"HEH",
    Distance:328.439,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"THL",
    To:"KET",
    Distance:96.1035,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"THL",
    To:"MDL",
    Distance:432.314,
    Airport:"Air Mandalay"
}),
new Routes(
{
    From:"THL",
    To:"RGN",
    Distance:564.321,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"THN",
    To:"BMA",
    Distance:341.911,
    Airport:"Golden Air"
}),
new Routes(
{
    From:"THR",
    To:"ABD",
    Distance:657.464,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"THR",
    To:"ABD",
    Distance:657.464,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"ABD",
    Distance:657.464,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"ADU",
    Distance:389.514,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"ADU",
    Distance:389.514,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"AFZ",
    Distance:568.01,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"AWZ",
    Distance:538.553,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"THR",
    To:"AWZ",
    Distance:538.553,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"AWZ",
    Distance:538.553,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"AWZ",
    Distance:538.553,
    Airport:"Kish Air"
}),
new Routes(
{
    From:"THR",
    To:"AZD",
    Distance:501.959,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"AZD",
    Distance:501.959,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"BJB",
    Distance:571.425,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"BND",
    Distance:1056.9,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"BND",
    Distance:1056.9,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"BUZ",
    Distance:751.283,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"BUZ",
    Distance:751.283,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"BXR",
    Distance:993.58,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"GBT",
    Distance:308.178,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"GBT",
    Distance:308.178,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"GSM",
    Distance:1079.45,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"IFN",
    Distance:330.586,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"IFN",
    Distance:330.586,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"IIL",
    Distance:506.19,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"KER",
    Distance:799.065,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"KHD",
    Distance:373.878,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"KIH",
    Distance:1049.9,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"KIH",
    Distance:1049.9,
    Airport:"Kish Air"
}),
new Routes(
{
    From:"THR",
    To:"KSH",
    Distance:406.774,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"THR",
    To:"KSH",
    Distance:406.774,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"KSH",
    Distance:406.774,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"LRR",
    Distance:937.153,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"MED",
    Distance:1664.57,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"THR",
    To:"MHD",
    Distance:751.892,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"THR",
    To:"MHD",
    Distance:751.892,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"MHD",
    Distance:751.892,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"MHD",
    Distance:751.892,
    Airport:"Kish Air"
}),
new Routes(
{
    From:"THR",
    To:"MRX",
    Distance:605.165,
    Airport:"Kish Air"
}),
new Routes(
{
    From:"THR",
    To:"NSH",
    Distance:109.17,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"OMH",
    Distance:598.63,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"OMH",
    Distance:598.63,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"PFQ",
    Distance:529.761,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"PGU",
    Distance:933.768,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"RAS",
    Distance:237.459,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"RAS",
    Distance:237.459,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"RZR",
    Distance:147.144,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"SDG",
    Distance:392.866,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"SYZ",
    Distance:694.189,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"THR",
    To:"SYZ",
    Distance:694.189,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"SYZ",
    Distance:694.189,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"TBZ",
    Distance:526.903,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"THR",
    To:"TBZ",
    Distance:526.903,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"TBZ",
    Distance:526.903,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"TBZ",
    Distance:526.903,
    Airport:"Kish Air"
}),
new Routes(
{
    From:"THR",
    To:"XBJ",
    Distance:793.432,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"YES",
    Distance:555.126,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"ZAH",
    Distance:1132.64,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"THR",
    To:"ZAH",
    Distance:1132.64,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THR",
    To:"ZBR",
    Distance:1430.85,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"THS",
    To:"BKK",
    Distance:407.844,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"THU",
    To:"NAQ",
    Distance:107.826,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"TIA",
    To:"ATH",
    Distance:529.274,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"TIA",
    To:"ATH",
    Distance:529.274,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"TIA",
    To:"BGY",
    Distance:934.953,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"TIA",
    To:"BLQ",
    Distance:768.227,
    Airport:"Air One"
}),
new Routes(
{
    From:"TIA",
    To:"BLQ",
    Distance:768.227,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TIA",
    To:"BLQ",
    Distance:768.227,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"TIA",
    To:"BLQ",
    Distance:768.227,
    Airport:"Excel Airways"
}),
new Routes(
{
    From:"TIA",
    To:"BRI",
    Distance:249.236,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TIA",
    To:"FCO",
    Distance:622.341,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TIA",
    To:"FCO",
    Distance:622.341,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"TIA",
    To:"FRA",
    Distance:1289.48,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"TIA",
    To:"GOA",
    Distance:946.004,
    Airport:"Air One"
}),
new Routes(
{
    From:"TIA",
    To:"GOA",
    Distance:946.004,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TIA",
    To:"IST",
    Distance:762.103,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TIA",
    To:"LGW",
    Distance:1864.45,
    Airport:"British Airways"
}),
new Routes(
{
    From:"TIA",
    To:"LJU",
    Distance:681.011,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"TIA",
    To:"MUC",
    Distance:991.922,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TIA",
    To:"MXP",
    Distance:1001.41,
    Airport:"Air One"
}),
new Routes(
{
    From:"TIA",
    To:"MXP",
    Distance:1001.41,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TIA",
    To:"MXP",
    Distance:1001.41,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"TIA",
    To:"MXP",
    Distance:1001.41,
    Airport:"Excel Airways"
}),
new Routes(
{
    From:"TIA",
    To:"MXP",
    Distance:1001.41,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"TIA",
    To:"PSA",
    Distance:804.153,
    Airport:"Air One"
}),
new Routes(
{
    From:"TIA",
    To:"PSA",
    Distance:804.153,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TIA",
    To:"PSA",
    Distance:804.153,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"TIA",
    To:"SAW",
    Distance:804.399,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"TIA",
    To:"TRN",
    Distance:1062.2,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TIA",
    To:"VCE",
    Distance:748.201,
    Airport:"Air One"
}),
new Routes(
{
    From:"TIA",
    To:"VCE",
    Distance:748.201,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TIA",
    To:"VCE",
    Distance:748.201,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"TIA",
    To:"VIE",
    Distance:784.788,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"TIA",
    To:"VRN",
    Distance:838.921,
    Airport:"Air One"
}),
new Routes(
{
    From:"TIA",
    To:"VRN",
    Distance:838.921,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TIA",
    To:"VRN",
    Distance:838.921,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"TIA",
    To:"VRN",
    Distance:838.921,
    Airport:"Excel Airways"
}),
new Routes(
{
    From:"TIA",
    To:"VRN",
    Distance:838.921,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"TID",
    To:"ALG",
    Distance:217.632,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"TIF",
    To:"AHB",
    Distance:422.871,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"TIF",
    To:"CAI",
    Distance:1325.38,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"TIF",
    To:"CAI",
    Distance:1325.38,
    Airport:"Express One International"
}),
new Routes(
{
    From:"TIF",
    To:"CAI",
    Distance:1325.38,
    Airport:"Nile Air"
}),
new Routes(
{
    From:"TIF",
    To:"DMM",
    Distance:1091,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"TIF",
    To:"DMM",
    Distance:1091,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"TIF",
    To:"DOH",
    Distance:1200.21,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"TIF",
    To:"DXB",
    Distance:1568.69,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"TIF",
    To:"IST",
    Distance:2432.22,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TIF",
    To:"KWI",
    Distance:1138.57,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"TIF",
    To:"RUH",
    Distance:737.914,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"TIF",
    To:"RUH",
    Distance:737.914,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"TIF",
    To:"SHJ",
    Distance:1585.5,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"TIH",
    To:"PPT",
    Distance:308.44,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"TIH",
    To:"RGI",
    Distance:63.9014,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"TIJ",
    To:"ACA",
    Distance:2464.2,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"AGU",
    Distance:1881.7,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"BJX",
    Distance:1999.1,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TIJ",
    To:"BJX",
    Distance:1999.1,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"CEN",
    Distance:894.211,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"CJS",
    Distance:997.755,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TIJ",
    To:"CJS",
    Distance:997.755,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"CLQ",
    Distance:1988.55,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"CUL",
    Distance:1266.2,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TIJ",
    To:"CUL",
    Distance:1266.2,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"TIJ",
    To:"CUL",
    Distance:1266.2,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"CUN",
    Distance:3234.69,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"CUU",
    Distance:1135.54,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"DGO",
    Distance:1533.81,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TIJ",
    To:"GDL",
    Distance:1902.38,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TIJ",
    To:"GDL",
    Distance:1902.38,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"TIJ",
    To:"GDL",
    Distance:1902.38,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"HMO",
    Distance:682.877,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TIJ",
    To:"HMO",
    Distance:682.877,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"LAP",
    Distance:1141.76,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"LMM",
    Distance:1080.27,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"MEX",
    Distance:2301,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TIJ",
    To:"MEX",
    Distance:2301,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"TIJ",
    To:"MEX",
    Distance:2301,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"MLM",
    Distance:2121.6,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"MTY",
    Distance:1798.91,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"MZT",
    Distance:1479.87,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"NRT",
    Distance:8953.71,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TIJ",
    To:"NRT",
    Distance:8953.71,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"TIJ",
    To:"OAX",
    Distance:2667.17,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"PBC",
    Distance:2376.04,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"PVG",
    Distance:10619,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TIJ",
    To:"PVR",
    Distance:1756.88,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"QRO",
    Distance:2126.54,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"SJD",
    Distance:1263.23,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"SLP",
    Distance:1949.35,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"TGZ",
    Distance:2990.77,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"TPQ",
    Distance:1721.73,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"UPN",
    Distance:2084.46,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"VER",
    Distance:2549.78,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"ZCL",
    Distance:1765.19,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIJ",
    To:"ZLO",
    Distance:1936.1,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TIM",
    To:"DJJ",
    Distance:457.462,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"TIM",
    To:"DJJ",
    Distance:457.462,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"TIM",
    To:"DPS",
    Distance:2443.7,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"TIM",
    To:"UPG",
    Distance:1921.49,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"TIP",
    To:"AKF",
    Distance:1368.34,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"ALG",
    Distance:1012.84,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"TIP",
    To:"ALG",
    Distance:1012.84,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"AMM",
    Distance:2147.11,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"TIP",
    To:"AMM",
    Distance:2147.11,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"AMM",
    Distance:2147.11,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"TIP",
    To:"BEN",
    Distance:670.551,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"TIP",
    To:"BEN",
    Distance:670.551,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"CAI",
    Distance:1752.56,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"TIP",
    To:"CAI",
    Distance:1752.56,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"TIP",
    To:"CAI",
    Distance:1752.56,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"CMN",
    Distance:1933.02,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"TIP",
    To:"CMN",
    Distance:1933.02,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"CMN",
    Distance:1933.02,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"TIP",
    To:"DJE",
    Distance:259.32,
    Airport:"Servicios de Transportes A"
}),
new Routes(
{
    From:"TIP",
    To:"DXB",
    Distance:4160.45,
    Airport:"Emirates"
}),
new Routes(
{
    From:"TIP",
    To:"FCO",
    Distance:1019.58,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"TIP",
    To:"FCO",
    Distance:1019.58,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TIP",
    To:"GHT",
    Distance:885.891,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"HBE",
    Distance:1573.38,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"TIP",
    To:"HBE",
    Distance:1573.38,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"IST",
    Distance:1668.24,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"TIP",
    To:"IST",
    Distance:1668.24,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"IST",
    Distance:1668.24,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"JED",
    Distance:2836.42,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"TIP",
    To:"LAQ",
    Distance:823.568,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"LHR",
    Distance:2366.1,
    Airport:"British Airways"
}),
new Routes(
{
    From:"TIP",
    To:"LHR",
    Distance:2366.1,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"LTD",
    Distance:429.856,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"MAD",
    Distance:1724.46,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"MAN",
    Distance:2607.9,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"MIR",
    Distance:408.962,
    Airport:"Servicios de Transportes A"
}),
new Routes(
{
    From:"TIP",
    To:"MIR",
    Distance:408.962,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"TIP",
    To:"MLA",
    Distance:375.241,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"TIP",
    To:"MLA",
    Distance:375.241,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"QUB",
    Distance:678.625,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"SFA",
    Distance:322.969,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"TIP",
    To:"SFA",
    Distance:322.969,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"SFA",
    Distance:322.969,
    Airport:"Servicios de Transportes A"
}),
new Routes(
{
    From:"TIP",
    To:"SFA",
    Distance:322.969,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"TIP",
    To:"SRX",
    Distance:370.034,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"TOB",
    Distance:1014.1,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"TIP",
    To:"TOB",
    Distance:1014.1,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"TUN",
    Distance:537.085,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"TIP",
    To:"TUN",
    Distance:537.085,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TIP",
    To:"TUN",
    Distance:537.085,
    Airport:"Servicios de Transportes A"
}),
new Routes(
{
    From:"TIP",
    To:"TUN",
    Distance:537.085,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TIP",
    To:"TUN",
    Distance:537.085,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TIR",
    To:"HYD",
    Distance:440.178,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"TIR",
    To:"HYD",
    Distance:440.178,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"TIU",
    To:"WLG",
    Distance:441.205,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"TIV",
    To:"BEG",
    Distance:297.204,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"TIV",
    To:"BEG",
    Distance:297.204,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"TIV",
    To:"BRU",
    Distance:1435.64,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"TIV",
    To:"CDG",
    Distance:1450.65,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"TIV",
    To:"DME",
    Distance:2001.06,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"TIV",
    To:"DME",
    Distance:2001.06,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"TIV",
    To:"DME",
    Distance:2001.06,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"TIV",
    To:"DME",
    Distance:2001.06,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"TIV",
    To:"DME",
    Distance:2001.06,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"TIV",
    To:"LED",
    Distance:2088.36,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"TIV",
    To:"LGW",
    Distance:1729.72,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"TIZ",
    To:"HGU",
    Distance:149.112,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"TIZ",
    To:"MXH",
    Distance:65.9541,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"TIZ",
    To:"POM",
    Distance:617.802,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"TJA",
    To:"BYC",
    Distance:117.391,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"TJA",
    To:"BYC",
    Distance:117.391,
    Airport:"Southern Winds Airlines"
}),
new Routes(
{
    From:"TJA",
    To:"CBB",
    Distance:485.069,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"TJA",
    To:"LPB",
    Distance:670.001,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"TJA",
    To:"LPB",
    Distance:670.001,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"TJA",
    To:"SRE",
    Distance:289.943,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"TJA",
    To:"VVI",
    Distance:464.774,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"TJA",
    To:"VVI",
    Distance:464.774,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"TJM",
    To:"DME",
    Distance:1691.51,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"TJM",
    To:"DME",
    Distance:1691.51,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"TJM",
    To:"EVN",
    Distance:2419.28,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"TJM",
    To:"HMA",
    Distance:477.661,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"TJM",
    To:"LBD",
    Distance:1913.52,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"TJM",
    To:"LED",
    Distance:2033.34,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"TJM",
    To:"LED",
    Distance:2033.34,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"TJM",
    To:"NJC",
    Distance:761.087,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"TJM",
    To:"NOJ",
    Distance:852.438,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"TJM",
    To:"NUX",
    Distance:1139.29,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"TJM",
    To:"NUX",
    Distance:1139.29,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"TJM",
    To:"NYA",
    Distance:547.369,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"TJM",
    To:"NYA",
    Distance:547.369,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"TJM",
    To:"NYM",
    Distance:1000.79,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"TJM",
    To:"OVB",
    Distance:1098.21,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"TJM",
    To:"OVS",
    Distance:469.532,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"TJM",
    To:"SGC",
    Distance:650.327,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"TJM",
    To:"SLY",
    Distance:1047.48,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"TJM",
    To:"SVO",
    Distance:1702.53,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"TJM",
    To:"TAS",
    Distance:1793.92,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TJM",
    To:"UFA",
    Distance:657.402,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"TJM",
    To:"URJ",
    Distance:324.884,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"TJQ",
    To:"CGK",
    Distance:395.073,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"TJQ",
    To:"CGK",
    Distance:395.073,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"TJQ",
    To:"CGK",
    Distance:395.073,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"TJQ",
    To:"PGK",
    Distance:190.876,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"TJU",
    To:"CIT",
    Distance:488.071,
    Airport:"Japan Asia Airways"
}),
new Routes(
{
    From:"TJU",
    To:"DME",
    Distance:3064.28,
    Airport:"Japan Asia Airways"
}),
new Routes(
{
    From:"TJU",
    To:"DME",
    Distance:3064.28,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"TJU",
    To:"DME",
    Distance:3064.28,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"TJU",
    To:"LED",
    Distance:3681.28,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"TJU",
    To:"SVX",
    Distance:2189.07,
    Airport:"Japan Asia Airways"
}),
new Routes(
{
    From:"TJU",
    To:"SVX",
    Distance:2189.07,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"TKD",
    To:"ACC",
    Distance:194.726,
    Airport:"Starbow Airlines"
}),
new Routes(
{
    From:"TKE",
    To:"JNU",
    Distance:74.2787,
    Airport:"Alaska Seaplane Service"
}),
new Routes(
{
    From:"TKG",
    To:"BTH",
    Distance:717.305,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"TKG",
    To:"BTH",
    Distance:717.305,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"TKG",
    To:"CGK",
    Distance:190.661,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"TKG",
    To:"CGK",
    Distance:190.661,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"TKG",
    To:"CGK",
    Distance:190.661,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"TKK",
    To:"GUM",
    Distance:1020.5,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TKK",
    To:"PNI",
    Distance:704.237,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TKP",
    To:"TKX",
    Distance:36.9216,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"TKS",
    To:"HND",
    Distance:497.704,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TKS",
    To:"HND",
    Distance:497.704,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"TKU",
    To:"ALC",
    Distance:2939.79,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TKU",
    To:"ARN",
    Distance:259.233,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TKU",
    To:"ARN",
    Distance:259.233,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"TKU",
    To:"CPH",
    Distance:783.223,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TKU",
    To:"GDN",
    Distance:718.879,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TKU",
    To:"HEL",
    Distance:149.849,
    Airport:"Finnair"
}),
new Routes(
{
    From:"TKU",
    To:"MHQ",
    Distance:137.293,
    Airport:"NextJet"
}),
new Routes(
{
    From:"TKU",
    To:"RIX",
    Distance:411.216,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"TKX",
    To:"AHE",
    Distance:132.748,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"TKX",
    To:"PPT",
    Distance:599.301,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"TKX",
    To:"TKP",
    Distance:36.9216,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"TLA",
    To:"KTS",
    Distance:11.7117,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"TLA",
    To:"KTS",
    Distance:11.7117,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"TLA",
    To:"OME",
    Distance:91.3018,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"TLC",
    To:"ACA",
    Distance:287.571,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TLC",
    To:"ACA",
    Distance:287.571,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"TLC",
    To:"CUN",
    Distance:1337.3,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"TLC",
    To:"CUN",
    Distance:1337.3,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TLC",
    To:"FLL",
    Distance:2124.57,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"TLC",
    To:"GDL",
    Distance:413.056,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TLC",
    To:"LAS",
    Distance:2405.49,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"TLC",
    To:"MTY",
    Distance:718.4,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TLC",
    To:"MTY",
    Distance:718.4,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"TLC",
    To:"PVR",
    Distance:612.747,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"TLC",
    To:"SAT",
    Distance:1139.21,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"TLC",
    To:"SJD",
    Distance:1134.29,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"TLC",
    To:"ZIH",
    Distance:277.779,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"TLE",
    To:"FTU",
    Distance:375.477,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TLE",
    To:"MOQ",
    Distance:349.874,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TLE",
    To:"TNR",
    Distance:641.366,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TLH",
    To:"ATL",
    Distance:360.367,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLH",
    To:"ATL",
    Distance:360.367,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TLH",
    To:"ATL",
    Distance:360.367,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TLH",
    To:"CLT",
    Distance:623.067,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TLH",
    To:"CLT",
    Distance:623.067,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TLH",
    To:"DCA",
    Distance:1153.06,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TLH",
    To:"DCA",
    Distance:1153.06,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TLH",
    To:"DFW",
    Distance:1231.92,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TLH",
    To:"DFW",
    Distance:1231.92,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TLH",
    To:"MCO",
    Distance:366.889,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TLH",
    To:"MIA",
    Distance:648.398,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TLH",
    To:"MIA",
    Distance:648.398,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TLH",
    To:"TPA",
    Distance:321.839,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TLL",
    To:"AMS",
    Distance:1471.89,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"TLL",
    To:"AMS",
    Distance:1471.89,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TLL",
    To:"ARN",
    Distance:390.556,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"TLL",
    To:"ARN",
    Distance:390.556,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TLL",
    To:"BGY",
    Distance:1829.24,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TLL",
    To:"BRE",
    Distance:1213.45,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TLL",
    To:"BRU",
    Distance:1591.54,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"TLL",
    To:"BRU",
    Distance:1591.54,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"TLL",
    To:"CPH",
    Distance:838.978,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"TLL",
    To:"CPH",
    Distance:838.978,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TLL",
    To:"FRA",
    Distance:1470.35,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TLL",
    To:"GRO",
    Distance:2468.11,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TLL",
    To:"HEL",
    Distance:100.773,
    Airport:"Finnair"
}),
new Routes(
{
    From:"TLL",
    To:"HER",
    Distance:2676.98,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"TLL",
    To:"IST",
    Distance:2068.63,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TLL",
    To:"KBP",
    Distance:1079.27,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"TLL",
    To:"LED",
    Distance:308.382,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"TLL",
    To:"LGW",
    Distance:1815.95,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLL",
    To:"MAN",
    Distance:1784.01,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TLL",
    To:"NCE",
    Distance:2119.57,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"TLL",
    To:"OSL",
    Distance:771.485,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"TLL",
    To:"OSL",
    Distance:771.485,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TLL",
    To:"OSL",
    Distance:771.485,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TLL",
    To:"PJA",
    Distance:875.26,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"TLL",
    To:"RIX",
    Distance:281.411,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"TLL",
    To:"RYG",
    Distance:793.749,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TLL",
    To:"SPU",
    Distance:1857.92,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"TLL",
    To:"STN",
    Distance:1741.37,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TLL",
    To:"SVO",
    Distance:838.106,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"TLL",
    To:"SVO",
    Distance:838.106,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"TLL",
    To:"TRD",
    Distance:862.833,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"TLL",
    To:"TRD",
    Distance:862.833,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TLL",
    To:"TYF",
    Distance:666.855,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"TLL",
    To:"URE",
    Distance:187.608,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"TLL",
    To:"VNO",
    Distance:532.124,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"TLL",
    To:"VNO",
    Distance:532.124,
    Airport:"LTU International"
}),
new Routes(
{
    From:"TLL",
    To:"VNO",
    Distance:532.124,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TLL",
    To:"WAW",
    Distance:840.994,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"TLM",
    To:"ALG",
    Distance:459.774,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"TLM",
    To:"LYS",
    Distance:1312.33,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"TLM",
    To:"MRS",
    Distance:1097.22,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"TLM",
    To:"MRS",
    Distance:1097.22,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"TLM",
    To:"ORY",
    Distance:1556.09,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"TLM",
    To:"ORY",
    Distance:1556.09,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"TLN",
    To:"ORY",
    Distance:690.757,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLN",
    To:"RTM",
    Distance:993.391,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"TLN",
    To:"STN",
    Distance:1072.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TLS",
    To:"AGP",
    Distance:919.344,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"TLS",
    To:"AGP",
    Distance:919.344,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TLS",
    To:"AJA",
    Distance:635.827,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLS",
    To:"AJA",
    Distance:635.827,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"TLS",
    To:"AJA",
    Distance:635.827,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"TLS",
    To:"ALG",
    Distance:787.299,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"TLS",
    To:"ALG",
    Distance:787.299,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"TLS",
    To:"AMS",
    Distance:997.47,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLS",
    To:"AMS",
    Distance:997.47,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TLS",
    To:"ATH",
    Distance:1996.38,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLS",
    To:"BCN",
    Distance:265.847,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"TLS",
    To:"BCN",
    Distance:265.847,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TLS",
    To:"BIA",
    Distance:669.844,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"TLS",
    To:"BIA",
    Distance:669.844,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLS",
    To:"BRE",
    Distance:1180.82,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"TLS",
    To:"BRS",
    Distance:914.711,
    Airport:"Germania"
}),
new Routes(
{
    From:"TLS",
    To:"BRS",
    Distance:914.711,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLS",
    To:"BRU",
    Distance:842.027,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"TLS",
    To:"BRU",
    Distance:842.027,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLS",
    To:"BSL",
    Distance:650.757,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLS",
    To:"CDG",
    Distance:605.509,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLS",
    To:"CDG",
    Distance:605.509,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TLS",
    To:"CDG",
    Distance:605.509,
    Airport:"XL Airways France"
}),
new Routes(
{
    From:"TLS",
    To:"CDG",
    Distance:605.509,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLS",
    To:"CEG",
    Distance:1108.59,
    Airport:"Germania"
}),
new Routes(
{
    From:"TLS",
    To:"CMN",
    Distance:1379.83,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"TLS",
    To:"CMN",
    Distance:1379.83,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLS",
    To:"CMN",
    Distance:1379.83,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"TLS",
    To:"DIJ",
    Distance:498.161,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"TLS",
    To:"DUB",
    Distance:1223.79,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"TLS",
    To:"ETZ",
    Distance:703.398,
    Airport:"Twin Jet"
}),
new Routes(
{
    From:"TLS",
    To:"FCO",
    Distance:911.545,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLS",
    To:"FCO",
    Distance:911.545,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TLS",
    To:"FCO",
    Distance:911.545,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLS",
    To:"FRA",
    Distance:895.977,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"TLS",
    To:"FRA",
    Distance:895.977,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TLS",
    To:"GVA",
    Distance:472.808,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"TLS",
    To:"GVA",
    Distance:472.808,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLS",
    To:"HAM",
    Distance:1277.92,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLS",
    To:"HAM",
    Distance:1277.92,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TLS",
    To:"IST",
    Distance:2266.21,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TLS",
    To:"LGW",
    Distance:844.165,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLS",
    To:"LHR",
    Distance:883.312,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TLS",
    To:"LHR",
    Distance:883.312,
    Airport:"British Airways"
}),
new Routes(
{
    From:"TLS",
    To:"LIL",
    Distance:781.829,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"TLS",
    To:"LIL",
    Distance:781.829,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLS",
    To:"LIS",
    Distance:1029.41,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"TLS",
    To:"LYS",
    Distance:375.731,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLS",
    To:"LYS",
    Distance:375.731,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TLS",
    To:"LYS",
    Distance:375.731,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLS",
    To:"MAD",
    Distance:535.774,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TLS",
    To:"MAN",
    Distance:1113.7,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"TLS",
    To:"MLA",
    Distance:1412.7,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLS",
    To:"MRS",
    Distance:311.067,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"TLS",
    To:"MUC",
    Distance:960.118,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TLS",
    To:"MXP",
    Distance:623.518,
    Airport:"Twin Jet"
}),
new Routes(
{
    From:"TLS",
    To:"NCE",
    Distance:470.803,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"TLS",
    To:"NCE",
    Distance:470.803,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLS",
    To:"NTE",
    Distance:455.449,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"TLS",
    To:"NTE",
    Distance:455.449,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLS",
    To:"ORN",
    Distance:906.148,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"TLS",
    To:"ORN",
    Distance:906.148,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"TLS",
    To:"ORY",
    Distance:571.819,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLS",
    To:"ORY",
    Distance:571.819,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLS",
    To:"PMI",
    Distance:467.132,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"TLS",
    To:"PMI",
    Distance:467.132,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TLS",
    To:"RAK",
    Distance:1570.01,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLS",
    To:"RAK",
    Distance:1570.01,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"TLS",
    To:"RAK",
    Distance:1570.01,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLS",
    To:"RNS",
    Distance:548.874,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"TLS",
    To:"SVQ",
    Distance:922.947,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLS",
    To:"SVQ",
    Distance:922.947,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TLS",
    To:"SXB",
    Distance:728.487,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLS",
    To:"TUN",
    Distance:1063.71,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TLS",
    To:"VCE",
    Distance:894.325,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLS",
    To:"VCE",
    Distance:894.325,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TLS",
    To:"XFW",
    Distance:1263.68,
    Airport:"Germania"
}),
new Routes(
{
    From:"TLS",
    To:"YUL",
    Distance:5727.75,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"TLT",
    To:"AKI",
    Distance:25.7736,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"TLT",
    To:"BET",
    Distance:58.6902,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"TLT",
    To:"BET",
    Distance:58.6902,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"TLV",
    To:"ADD",
    Distance:2592.81,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"AMM",
    Distance:109.32,
    Airport:"Arkia Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"AMM",
    Distance:109.32,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"TLV",
    To:"AMS",
    Distance:3311.99,
    Airport:"Arkia Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"AMS",
    Distance:3311.99,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"AMS",
    Distance:3311.99,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"AMS",
    Distance:3311.99,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"TLV",
    To:"ARN",
    Distance:3320.53,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TLV",
    To:"ATH",
    Distance:1193.68,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"ATH",
    Distance:1193.68,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"BCN",
    Distance:3081.68,
    Airport:"Arkia Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"BCN",
    Distance:3081.68,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"BCN",
    Distance:3081.68,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"BCN",
    Distance:3081.68,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"BEG",
    Distance:1902.17,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"TLV",
    To:"BKK",
    Distance:6945.66,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"BKK",
    Distance:6945.66,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"TLV",
    To:"BOM",
    Distance:4046.75,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"BRU",
    Distance:3250.98,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"BRU",
    Distance:3250.98,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"BSL",
    Distance:2883.68,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLV",
    To:"BUD",
    Distance:2165.94,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"BUD",
    Distance:2165.94,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TLV",
    To:"CAI",
    Distance:392.484,
    Airport:"Air Sinai"
}),
new Routes(
{
    From:"TLV",
    To:"CDG",
    Distance:3284.22,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLV",
    To:"CDG",
    Distance:3284.22,
    Airport:"Arkia Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"CDG",
    Distance:3284.22,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"CGN",
    Distance:3087.99,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TLV",
    To:"CLJ",
    Distance:1899.52,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TLV",
    To:"CPH",
    Distance:3143.5,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TLV",
    To:"CPH",
    Distance:3143.5,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TLV",
    To:"DME",
    Distance:2612.35,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"DME",
    Distance:2612.35,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"DNK",
    Distance:1817.66,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"DOK",
    Distance:1802.14,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"DUS",
    Distance:3135.29,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TLV",
    To:"ETH",
    Distance:272.53,
    Airport:"Arkia Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"ETH",
    Distance:272.53,
    Airport:"Israir"
}),
new Routes(
{
    From:"TLV",
    To:"EWR",
    Distance:9140.24,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"EWR",
    Distance:9140.24,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"FCO",
    Distance:2278.28,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TLV",
    To:"FCO",
    Distance:2278.28,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"FCO",
    Distance:2278.28,
    Airport:"Israir"
}),
new Routes(
{
    From:"TLV",
    To:"FCO",
    Distance:2278.28,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLV",
    To:"FRA",
    Distance:2954.24,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"FRA",
    Distance:2954.24,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TLV",
    To:"GVA",
    Distance:2918.53,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"GVA",
    Distance:2918.53,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"TLV",
    To:"GVA",
    Distance:2918.53,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLV",
    To:"GYD",
    Distance:1649.28,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"HEL",
    Distance:3230.86,
    Airport:"Finnair"
}),
new Routes(
{
    From:"TLV",
    To:"HER",
    Distance:970.865,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"HKG",
    Distance:7725.85,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"IAS",
    Distance:1795.76,
    Airport:"Tarom"
}),
new Routes(
{
    From:"TLV",
    To:"ICN",
    Distance:8038.92,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"TLV",
    To:"IST",
    Distance:1134.37,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"JFK",
    Distance:9117.05,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TLV",
    To:"JFK",
    Distance:9117.05,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"JNB",
    Distance:6504.28,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"KBP",
    Distance:2065.03,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"KBP",
    Distance:2065.03,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"KRR",
    Distance:1494.72,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"TLV",
    To:"KTW",
    Distance:2430.27,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TLV",
    To:"LAX",
    Distance:12166.6,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"LCA",
    Distance:339.263,
    Airport:"Arkia Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"LCA",
    Distance:339.263,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"TLV",
    To:"LCA",
    Distance:339.263,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"LED",
    Distance:3108.9,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"LED",
    Distance:3108.9,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"LGW",
    Distance:3557.23,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLV",
    To:"LHR",
    Distance:3588.97,
    Airport:"British Airways"
}),
new Routes(
{
    From:"TLV",
    To:"LHR",
    Distance:3588.97,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"LTN",
    Distance:3600.79,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"LTN",
    Distance:3600.79,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLV",
    To:"LWO",
    Distance:2176.78,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"TLV",
    To:"MAD",
    Distance:3544.31,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"MAD",
    Distance:3544.31,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"MAN",
    Distance:3785.06,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLV",
    To:"MRS",
    Distance:2881.62,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLV",
    To:"MRS",
    Distance:2881.62,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"MRV",
    Distance:1533.8,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"TLV",
    To:"MSQ",
    Distance:2492.36,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"MUC",
    Distance:2655.01,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TLV",
    To:"MUC",
    Distance:2655.01,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"MUC",
    Distance:2655.01,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TLV",
    To:"MXP",
    Distance:2705.95,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"MXP",
    Distance:2705.95,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"TLV",
    To:"MXP",
    Distance:2705.95,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLV",
    To:"NAP",
    Distance:2082.43,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"TLV",
    To:"NCE",
    Distance:2735.2,
    Airport:"Air France"
}),
new Routes(
{
    From:"TLV",
    To:"NCE",
    Distance:2735.2,
    Airport:"Israir"
}),
new Routes(
{
    From:"TLV",
    To:"ODS",
    Distance:1642.8,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"ORY",
    Distance:3284.73,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"TLV",
    To:"OTP",
    Distance:1591,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"OTP",
    Distance:1591,
    Airport:"Tarom"
}),
new Routes(
{
    From:"TLV",
    To:"OTP",
    Distance:1591,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TLV",
    To:"PEK",
    Distance:7140.47,
    Airport:"Air China"
}),
new Routes(
{
    From:"TLV",
    To:"PEK",
    Distance:7140.47,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"PHL",
    Distance:9267.59,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"PHL",
    Distance:9267.59,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TLV",
    To:"PRG",
    Distance:2634.63,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"PRG",
    Distance:2634.63,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"PRG",
    Distance:2634.63,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"TLV",
    To:"PRG",
    Distance:2634.63,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TLV",
    To:"RIX",
    Distance:2894.16,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"TLV",
    To:"ROV",
    Distance:1746.23,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"SAW",
    Distance:1106.34,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"SAW",
    Distance:1106.34,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"SOF",
    Distance:1559.35,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"TLV",
    To:"SOF",
    Distance:1559.35,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"SVO",
    Distance:2671.6,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"SVX",
    Distance:3392.9,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"SXF",
    Distance:2845.52,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"SXF",
    Distance:2845.52,
    Airport:"Israir"
}),
new Routes(
{
    From:"TLV",
    To:"SXF",
    Distance:2845.52,
    Airport:"easyJet"
}),
new Routes(
{
    From:"TLV",
    To:"TAS",
    Distance:3212.26,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TLV",
    To:"TBS",
    Distance:1396.48,
    Airport:"Arkia Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"TBS",
    Distance:1396.48,
    Airport:"Georgian Airways"
}),
new Routes(
{
    From:"TLV",
    To:"TBS",
    Distance:1396.48,
    Airport:"Israir"
}),
new Routes(
{
    From:"TLV",
    To:"TXL",
    Distance:2870.86,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TLV",
    To:"TXL",
    Distance:2870.86,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TLV",
    To:"VCE",
    Distance:2449.07,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"VIE",
    Distance:2361.31,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"VIE",
    Distance:2361.31,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"VIE",
    Distance:2361.31,
    Airport:"Niki"
}),
new Routes(
{
    From:"TLV",
    To:"VIN",
    Distance:1986.31,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"VKO",
    Distance:2628.54,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"VNO",
    Distance:2627.05,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TLV",
    To:"WAW",
    Distance:2508.29,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"WAW",
    Distance:2508.29,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"WAW",
    Distance:2508.29,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TLV",
    To:"YUL",
    Distance:8802.9,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"TLV",
    To:"YYZ",
    Distance:9295.12,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"TLV",
    To:"YYZ",
    Distance:9295.12,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"ZRH",
    Distance:2809.35,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"TLV",
    To:"ZRH",
    Distance:2809.35,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"TMC",
    To:"DPS",
    Distance:453.696,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"TMC",
    To:"DPS",
    Distance:453.696,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"TMC",
    To:"KOE",
    Distance:492.386,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"TME",
    To:"BOG",
    Distance:328.029,
    Airport:"SATENA"
}),
new Routes(
{
    From:"TME",
    To:"RVE",
    Distance:54.022,
    Airport:"SATENA"
}),
new Routes(
{
    From:"TMI",
    To:"KTM",
    Distance:185.81,
    Airport:"Yeti Airways"
}),
new Routes(
{
    From:"TMJ",
    To:"DME",
    Distance:2985.32,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TMJ",
    To:"TAS",
    Distance:473.018,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TML",
    To:"ACC",
    Distance:446.094,
    Airport:"Asian Wings Airways"
}),
new Routes(
{
    From:"TML",
    To:"ACC",
    Distance:446.094,
    Airport:"Starbow Airlines"
}),
new Routes(
{
    From:"TMM",
    To:"ANM",
    Distance:359.682,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TMM",
    To:"RUN",
    Distance:711.647,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"TMM",
    To:"RUN",
    Distance:711.647,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TMM",
    To:"SMS",
    Distance:121.518,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TMM",
    To:"TNR",
    Distance:215.842,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TMM",
    To:"WMN",
    Distance:298.871,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TMM",
    To:"WMR",
    Distance:220.102,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TMP",
    To:"AGP",
    Distance:3374.5,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TMP",
    To:"ALC",
    Distance:3062.2,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TMP",
    To:"ARN",
    Distance:367.399,
    Airport:"Air China"
}),
new Routes(
{
    From:"TMP",
    To:"ARN",
    Distance:367.399,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TMP",
    To:"ARN",
    Distance:367.399,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"TMP",
    To:"BGY",
    Distance:1967.12,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TMP",
    To:"BRE",
    Distance:1282.99,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TMP",
    To:"BUD",
    Distance:1578.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TMP",
    To:"GRO",
    Distance:2577.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TMP",
    To:"HEL",
    Distance:142.434,
    Airport:"Finnair"
}),
new Routes(
{
    From:"TMP",
    To:"HHN",
    Distance:1626,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TMP",
    To:"STN",
    Distance:1762.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TMR",
    To:"ALG",
    Distance:1558.21,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"TMR",
    To:"ELG",
    Distance:900.344,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"TMR",
    To:"GHA",
    Distance:1076.83,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"TMR",
    To:"INZ",
    Distance:575.59,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"TMS",
    To:"LAD",
    Distance:1255.5,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"TMS",
    To:"LIS",
    Distance:4565.6,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"TMT",
    To:"STM",
    Distance:206.235,
    Airport:"Azul"
}),
new Routes(
{
    From:"TMU",
    To:"SJO",
    Distance:92.6453,
    Airport:"CAL Cargo Air Lines"
}),
new Routes(
{
    From:"TMU",
    To:"SJO",
    Distance:92.6453,
    Airport:"Euro Exec Express"
}),
new Routes(
{
    From:"TMU",
    To:"SJO",
    Distance:92.6453,
    Airport:"LACSA"
}),
new Routes(
{
    From:"TMW",
    To:"SYD",
    Distance:319.77,
    Airport:"Qantas"
}),
new Routes(
{
    From:"TNA",
    To:"BKK",
    Distance:3052.41,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CAN",
    Distance:1543.46,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"CAN",
    Distance:1543.46,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CAN",
    Distance:1543.46,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CAN",
    Distance:1543.46,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CAN",
    Distance:1543.46,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CGO",
    Distance:400.537,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"CGO",
    Distance:400.537,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CGQ",
    Distance:1000.56,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"CGQ",
    Distance:1000.56,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CGQ",
    Distance:1000.56,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"TNA",
    To:"CGQ",
    Distance:1000.56,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CGQ",
    Distance:1000.56,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CGQ",
    Distance:1000.56,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CKG",
    Distance:1261.88,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"CKG",
    Distance:1261.88,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CKG",
    Distance:1261.88,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CKG",
    Distance:1261.88,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CKG",
    Distance:1261.88,
    Airport:"West Air China"
}),
new Routes(
{
    From:"TNA",
    To:"CSX",
    Distance:1033.81,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"CSX",
    Distance:1033.81,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CSX",
    Distance:1033.81,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CSX",
    Distance:1033.81,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CTU",
    Distance:1409.94,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"CTU",
    Distance:1409.94,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CTU",
    Distance:1409.94,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CTU",
    Distance:1409.94,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"TNA",
    To:"CTU",
    Distance:1409.94,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CTU",
    Distance:1409.94,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"CTU",
    Distance:1409.94,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"DLC",
    Distance:445.757,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"DLC",
    Distance:445.757,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"DLC",
    Distance:445.757,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"DLC",
    Distance:445.757,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"DLC",
    Distance:445.757,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"DLC",
    Distance:445.757,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"FOC",
    Distance:1236.36,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"FOC",
    Distance:1236.36,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"FOC",
    Distance:1236.36,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"FOC",
    Distance:1236.36,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"FOC",
    Distance:1236.36,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"HET",
    Distance:644.147,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"HET",
    Distance:644.147,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"HET",
    Distance:644.147,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"HET",
    Distance:644.147,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"HGH",
    Distance:794.893,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"HGH",
    Distance:794.893,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"HGH",
    Distance:794.893,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"HGH",
    Distance:794.893,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"HKG",
    Distance:1648.57,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"HRB",
    Distance:1231.49,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"HRB",
    Distance:1231.49,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"HRB",
    Distance:1231.49,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"HRB",
    Distance:1231.49,
    Airport:"KSY"
}),
new Routes(
{
    From:"TNA",
    To:"HRB",
    Distance:1231.49,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"HRB",
    Distance:1231.49,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"HRB",
    Distance:1231.49,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"HUN",
    Distance:1487.56,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"ICN",
    Distance:820.792,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"ICN",
    Distance:820.792,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"ICN",
    Distance:820.792,
    Airport:"Eastar Jet"
}),
new Routes(
{
    From:"TNA",
    To:"ICN",
    Distance:820.792,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"TNA",
    To:"ICN",
    Distance:820.792,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"ICN",
    Distance:820.792,
    Airport:"Tway Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"INC",
    Distance:1002.12,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"INC",
    Distance:1002.12,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"KHH",
    Distance:1616.17,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TNA",
    To:"KHN",
    Distance:897.123,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"KHN",
    Distance:897.123,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"TNA",
    To:"KHN",
    Distance:897.123,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"KIX",
    Distance:1648.59,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"KIX",
    Distance:1648.59,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TNA",
    To:"KIX",
    Distance:1648.59,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"KMG",
    Distance:1905.12,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"KMG",
    Distance:1905.12,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"TNA",
    To:"KMG",
    Distance:1905.12,
    Airport:"KSY"
}),
new Routes(
{
    From:"TNA",
    To:"KMG",
    Distance:1905.12,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"KMG",
    Distance:1905.12,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"KMG",
    Distance:1905.12,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"KWE",
    Distance:1510.32,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"KWE",
    Distance:1510.32,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"KWL",
    Distance:1462.53,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"KWL",
    Distance:1462.53,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"TNA",
    To:"LHW",
    Distance:1217.5,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"LHW",
    Distance:1217.5,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"LHW",
    Distance:1217.5,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"LHW",
    Distance:1217.5,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"LJG",
    Distance:1944.87,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"TNA",
    To:"PEK",
    Distance:362.558,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"PEK",
    Distance:362.558,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"PVG",
    Distance:763.062,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"RMQ",
    Distance:1437.36,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"SHA",
    Distance:734.77,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"SHA",
    Distance:734.77,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"SHA",
    Distance:734.77,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"SHE",
    Distance:726.111,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"SHE",
    Distance:726.111,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"SHE",
    Distance:726.111,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"SHE",
    Distance:726.111,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"SHE",
    Distance:726.111,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"SYX",
    Distance:2199.66,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"SYX",
    Distance:2199.66,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"SZX",
    Distance:1614.44,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"SZX",
    Distance:1614.44,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"SZX",
    Distance:1614.44,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"SZX",
    Distance:1614.44,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"TGO",
    Distance:856.388,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TNA",
    To:"TPE",
    Distance:1364.26,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TNA",
    To:"TPE",
    Distance:1364.26,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"TYN",
    Distance:417.607,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"TYN",
    Distance:417.607,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"URC",
    Distance:2621.99,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"URC",
    Distance:2621.99,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"URC",
    Distance:2621.99,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"URC",
    Distance:2621.99,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"WNZ",
    Distance:1051.35,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"WNZ",
    Distance:1051.35,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"WUH",
    Distance:730.147,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"WUH",
    Distance:730.147,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"WUH",
    Distance:730.147,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"WUH",
    Distance:730.147,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"WUS",
    Distance:1020.68,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"XIY",
    Distance:810.025,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"XIY",
    Distance:810.025,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"XIY",
    Distance:810.025,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"XIY",
    Distance:810.025,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"XIY",
    Distance:810.025,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"TNA",
    To:"XIY",
    Distance:810.025,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"XIY",
    Distance:810.025,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"XMN",
    Distance:1371.91,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"XMN",
    Distance:1371.91,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"XMN",
    Distance:1371.91,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"XMN",
    Distance:1371.91,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TNA",
    To:"YNT",
    Distance:373.321,
    Airport:"Air China"
}),
new Routes(
{
    From:"TNA",
    To:"YNT",
    Distance:373.321,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TNC",
    To:"WAA",
    Distance:10.3499,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"TNG",
    To:"AMS",
    Distance:2026.96,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"TNG",
    To:"AMS",
    Distance:2026.96,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"TNG",
    To:"BCN",
    Distance:930.672,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"TNG",
    To:"BCN",
    Distance:930.672,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"TNG",
    To:"BCN",
    Distance:930.672,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TNG",
    To:"BCN",
    Distance:930.672,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"TNG",
    To:"BRU",
    Distance:1881.24,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"TNG",
    To:"BRU",
    Distance:1881.24,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"TNG",
    To:"BVA",
    Distance:1659.64,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TNG",
    To:"CMN",
    Distance:303.815,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"TNG",
    To:"CRL",
    Distance:1837.81,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TNG",
    To:"LGW",
    Distance:1774.63,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"TNG",
    To:"LHR",
    Distance:1804.36,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"TNG",
    To:"LIS",
    Distance:443.239,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"TNG",
    To:"MAD",
    Distance:568.448,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TNG",
    To:"MAD",
    Distance:568.448,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"TNG",
    To:"MAD",
    Distance:568.448,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TNG",
    To:"MRS",
    Distance:1280.34,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TNG",
    To:"ORY",
    Distance:1595.66,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"TNJ",
    To:"CGK",
    Distance:818.416,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"TNJ",
    To:"CGK",
    Distance:818.416,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"TNJ",
    To:"CGK",
    Distance:818.416,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"TNK",
    To:"WWT",
    Distance:52.9891,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"TNK",
    To:"WWT",
    Distance:52.9891,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"TNN",
    To:"HKG",
    Distance:649.564,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TNO",
    To:"LIR",
    Distance:42.8448,
    Airport:"CAL Cargo Air Lines"
}),
new Routes(
{
    From:"TNO",
    To:"SJO",
    Distance:184.382,
    Airport:"CAL Cargo Air Lines"
}),
new Routes(
{
    From:"TNO",
    To:"SJO",
    Distance:184.382,
    Airport:"Euro Exec Express"
}),
new Routes(
{
    From:"TNO",
    To:"SJO",
    Distance:184.382,
    Airport:"LACSA"
}),
new Routes(
{
    From:"TNR",
    To:"ANM",
    Distance:519.285,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"BKK",
    Distance:6862.12,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"BKK",
    Distance:6862.12,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"TNR",
    To:"CDG",
    Distance:8748.3,
    Airport:"Air France"
}),
new Routes(
{
    From:"TNR",
    To:"CDG",
    Distance:8748.3,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"DIE",
    Distance:742.735,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"DZA",
    Distance:706.534,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"FTU",
    Distance:696.068,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"HAH",
    Distance:925.093,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"JNB",
    Distance:2135.09,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"JNB",
    Distance:2135.09,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"TNR",
    To:"MJN",
    Distance:368.019,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"MOQ",
    Distance:370.26,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"MRS",
    Distance:8151.77,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"MRU",
    Distance:1083.99,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"MRU",
    Distance:1083.99,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"TNR",
    To:"NBO",
    Distance:2258.32,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"TNR",
    To:"NOS",
    Distance:616.393,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"ORY",
    Distance:8734.47,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"TNR",
    To:"ORY",
    Distance:8734.47,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"TNR",
    To:"RUN",
    Distance:871.462,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"TNR",
    To:"RUN",
    Distance:871.462,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"SMS",
    Distance:311.407,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"SVB",
    Distance:578.748,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"TLE",
    Distance:641.366,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"TMM",
    Distance:215.842,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TNR",
    To:"WMN",
    Distance:441.276,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"TOB",
    To:"HBE",
    Distance:559.384,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TOB",
    To:"TIP",
    Distance:1014.1,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TOB",
    To:"TUN",
    Distance:1371.14,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TOB",
    To:"TUN",
    Distance:1371.14,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TOE",
    To:"ORY",
    Distance:1711.5,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TOE",
    To:"TUN",
    Distance:376.279,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"TOF",
    To:"DME",
    Distance:2892.7,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"TOF",
    To:"DME",
    Distance:2892.7,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"TOF",
    To:"KJA",
    Distance:448.899,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"TOF",
    To:"SGC",
    Distance:872.7,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"TOF",
    To:"SVO",
    Distance:2898.41,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"TOG",
    To:"KWN",
    Distance:113.2,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"TOH",
    To:"MTV",
    Distance:122.055,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"TOH",
    To:"SLH",
    Distance:113.279,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"TOH",
    To:"ZGU",
    Distance:142.478,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"TOL",
    To:"ORD",
    Distance:342.454,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TOL",
    To:"ORD",
    Distance:342.454,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TOL",
    To:"PGD",
    Distance:1639.32,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"TOL",
    To:"PIE",
    Distance:1524.17,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"TOL",
    To:"SFB",
    Distance:1443.15,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"TOS",
    To:"ALC",
    Distance:3677.93,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TOS",
    To:"ALF",
    Distance:173.759,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TOS",
    To:"ALF",
    Distance:173.759,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TOS",
    To:"ALF",
    Distance:173.759,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TOS",
    To:"ALF",
    Distance:173.759,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TOS",
    To:"ANX",
    Distance:116.508,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TOS",
    To:"ARN",
    Distance:1116.42,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TOS",
    To:"BGO",
    Distance:1220.55,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TOS",
    To:"BOO",
    Distance:326.271,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TOS",
    To:"BOO",
    Distance:326.271,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TOS",
    To:"EVE",
    Distance:159.6,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TOS",
    To:"HAA",
    Distance:151.169,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TOS",
    To:"HFT",
    Distance:210.491,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TOS",
    To:"KKN",
    Distance:422.653,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TOS",
    To:"LGW",
    Distance:2289.41,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TOS",
    To:"LKL",
    Distance:235.458,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TOS",
    To:"LYR",
    Distance:957.617,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TOS",
    To:"MMK",
    Distance:553.232,
    Airport:"Aeroflot-Nord"
}),
new Routes(
{
    From:"TOS",
    To:"OSL",
    Distance:1115.47,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TOS",
    To:"OSL",
    Distance:1115.47,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TOS",
    To:"SKN",
    Distance:196.926,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TOS",
    To:"SOJ",
    Distance:79.4202,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TOS",
    To:"SVG",
    Distance:1355.07,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TOS",
    To:"TRD",
    Distance:775.841,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TOS",
    To:"TRD",
    Distance:775.841,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TOS",
    To:"VDS",
    Distance:419.572,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TOU",
    To:"GEA",
    Distance:205.925,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"TOY",
    To:"CTS",
    Distance:782.403,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TOY",
    To:"CTS",
    Distance:782.403,
    Airport:"Hokkaido International Airlines"
}),
new Routes(
{
    From:"TOY",
    To:"DLC",
    Distance:1396.9,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TOY",
    To:"HND",
    Distance:262.842,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TOY",
    To:"ICN",
    Distance:956.587,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TOY",
    To:"ICN",
    Distance:956.587,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"TOY",
    To:"PVG",
    Distance:1543.68,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TOY",
    To:"PVG",
    Distance:1543.68,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"TOY",
    To:"TPE",
    Distance:1988.49,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"ACY",
    Distance:1472.1,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"ALB",
    Distance:1821.01,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"ALB",
    Distance:1821.01,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"ATL",
    Distance:654.955,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TPA",
    To:"ATL",
    Distance:654.955,
    Airport:"Air France"
}),
new Routes(
{
    From:"TPA",
    To:"ATL",
    Distance:654.955,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"ATL",
    Distance:654.955,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TPA",
    To:"ATL",
    Distance:654.955,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TPA",
    To:"ATL",
    Distance:654.955,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"ATL",
    Distance:654.955,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"ATL",
    Distance:654.955,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"TPA",
    To:"AUS",
    Distance:1490.25,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"BDL",
    Distance:1790.54,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"BDL",
    Distance:1790.54,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"TPA",
    To:"BDL",
    Distance:1790.54,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"BHM",
    Distance:740.48,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"BHM",
    Distance:740.48,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"BNA",
    Distance:986.456,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"BOS",
    Distance:1908.47,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"TPA",
    To:"BUF",
    Distance:1698.77,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"BWI",
    Distance:1357.9,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"BWI",
    Distance:1357.9,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"CAK",
    Distance:1442.37,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"CAK",
    Distance:1442.37,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"CLE",
    Distance:1495.33,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"CLT",
    Distance:818.817,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"CLT",
    Distance:818.817,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TPA",
    To:"CMH",
    Distance:1337.25,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"CMH",
    Distance:1337.25,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TPA",
    To:"CMH",
    Distance:1337.25,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"CVG",
    Distance:1246.99,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TPA",
    To:"DAY",
    Distance:1335.22,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"DAY",
    Distance:1335.22,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"DCA",
    Distance:1311.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"DCA",
    Distance:1311.87,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"TPA",
    To:"DCA",
    Distance:1311.87,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TPA",
    To:"DEN",
    Distance:2422.53,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"DEN",
    Distance:2422.53,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"DEN",
    Distance:2422.53,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"DFW",
    Distance:1492.69,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"DFW",
    Distance:1492.69,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"DFW",
    Distance:1492.69,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TPA",
    To:"DTW",
    Distance:1584.81,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TPA",
    To:"DTW",
    Distance:1584.81,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"EWR",
    Distance:1607.27,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"TPA",
    To:"EWR",
    Distance:1607.27,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"EYW",
    Distance:387.96,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"EYW",
    Distance:387.96,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"EYW",
    Distance:387.96,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"FLL",
    Distance:316.798,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"FLL",
    Distance:316.798,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"FLL",
    Distance:316.798,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"FLL",
    Distance:316.798,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"FNT",
    Distance:1670.35,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"GCM",
    Distance:972.847,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"TPA",
    To:"GNV",
    Distance:192.347,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"GRR",
    Distance:1679.08,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"HOU",
    Distance:1254.95,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"HOU",
    Distance:1254.95,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"HPN",
    Distance:1662.99,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"TPA",
    To:"IAD",
    Distance:1306.87,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"IAH",
    Distance:1265.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"ILG",
    Distance:1448.92,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"IND",
    Distance:1350.68,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"IND",
    Distance:1350.68,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TPA",
    To:"IND",
    Distance:1350.68,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"ISP",
    Distance:1665.31,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"ISP",
    Distance:1665.31,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"JAX",
    Distance:291.816,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"JFK",
    Distance:1619.52,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"JFK",
    Distance:1619.52,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TPA",
    To:"JFK",
    Distance:1619.52,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"TPA",
    To:"JFK",
    Distance:1619.52,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TPA",
    To:"LAS",
    Distance:3187.47,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"LAX",
    Distance:3466.43,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TPA",
    To:"LGA",
    Distance:1628.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TPA",
    To:"LGA",
    Distance:1628.3,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"TPA",
    To:"LGW",
    Distance:7111.07,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"LGW",
    Distance:7111.07,
    Airport:"British Airways"
}),
new Routes(
{
    From:"TPA",
    To:"LGW",
    Distance:7111.07,
    Airport:"Finnair"
}),
new Routes(
{
    From:"TPA",
    To:"LGW",
    Distance:7111.07,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"MCI",
    Distance:1686.85,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"MCI",
    Distance:1686.85,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"MDW",
    Distance:1606.9,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"MDW",
    Distance:1606.9,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"MEM",
    Distance:1055.41,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"MHT",
    Distance:1939.3,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"MIA",
    Distance:329.151,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"MIA",
    Distance:329.151,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TPA",
    To:"MKE",
    Distance:1733.2,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"MKE",
    Distance:1733.2,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"MSP",
    Distance:2104.76,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TPA",
    To:"MSY",
    Distance:783.962,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"MSY",
    Distance:783.962,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"ORD",
    Distance:1631.26,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"ORD",
    Distance:1631.26,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"ORD",
    Distance:1631.26,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TPA",
    To:"ORD",
    Distance:1631.26,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"PBI",
    Distance:280.407,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"PDX",
    Distance:4013.13,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"PHL",
    Distance:1482.74,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"PHL",
    Distance:1482.74,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"PHL",
    Distance:1482.74,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TPA",
    To:"PHX",
    Distance:2872.71,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"PHX",
    Distance:2872.71,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"PHX",
    Distance:2872.71,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"PHX",
    Distance:2872.71,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TPA",
    To:"PIT",
    Distance:1407.54,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"PIT",
    Distance:1407.54,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"PNS",
    Distance:530.071,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"PTY",
    Distance:2127.8,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"PVD",
    Distance:1831.68,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"PVD",
    Distance:1831.68,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"RDU",
    Distance:946.892,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"RDU",
    Distance:946.892,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TPA",
    To:"RDU",
    Distance:946.892,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"ROC",
    Distance:1739.52,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"SAT",
    Distance:1561.93,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"SAT",
    Distance:1561.93,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"SDF",
    Distance:1172.42,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"SEA",
    Distance:4050.99,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"SJU",
    Distance:1991.31,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"SJU",
    Distance:1991.31,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"TPA",
    To:"SJU",
    Distance:1991.31,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"STL",
    Distance:1400.32,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TPA",
    To:"STL",
    Distance:1400.32,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"TLH",
    Distance:321.839,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"TTN",
    Distance:1539.82,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TPA",
    To:"YYZ",
    Distance:1765.14,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"TPA",
    To:"YYZ",
    Distance:1765.14,
    Airport:"WestJet"
}),
new Routes(
{
    From:"TPA",
    To:"ZRH",
    Distance:7835.38,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"TPE",
    To:"AKJ",
    Distance:2823.25,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TPE",
    To:"AKJ",
    Distance:2823.25,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"AKJ",
    Distance:2823.25,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"AMS",
    Distance:9442.5,
    Airport:"Air France"
}),
new Routes(
{
    From:"TPE",
    To:"AMS",
    Distance:9442.5,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"BKI",
    Distance:2198.74,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"TPE",
    To:"BKI",
    Distance:2198.74,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"BKK",
    Distance:2489.36,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"BKK",
    Distance:2489.36,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"BKK",
    Distance:2489.36,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"BKK",
    Distance:2489.36,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"TPE",
    To:"BKK",
    Distance:2489.36,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"BKK",
    Distance:2489.36,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"BNE",
    Distance:6760.07,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"BNE",
    Distance:6760.07,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"CAN",
    Distance:825.86,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"CAN",
    Distance:825.86,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"CAN",
    Distance:825.86,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"CAN",
    Distance:825.86,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"CDG",
    Distance:9785.68,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"CGK",
    Distance:3811.19,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"CGK",
    Distance:3811.19,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"CGK",
    Distance:3811.19,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"TPE",
    To:"CGO",
    Distance:1268.29,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"CGO",
    Distance:1268.29,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"CGO",
    Distance:1268.29,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"CGQ",
    Distance:2083.22,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"CJU",
    Distance:1067.08,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"CKG",
    Distance:1528.68,
    Airport:"Air China"
}),
new Routes(
{
    From:"TPE",
    To:"CKG",
    Distance:1528.68,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"TPE",
    To:"CNX",
    Distance:2398.45,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"CSX",
    Distance:868.101,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"CSX",
    Distance:868.101,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"CSX",
    Distance:868.101,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"CSX",
    Distance:868.101,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"CTS",
    Distance:2712.33,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TPE",
    To:"CTS",
    Distance:2712.33,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"CTS",
    Distance:2712.33,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"CTS",
    Distance:2712.33,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"CTU",
    Distance:1804.04,
    Airport:"Air China"
}),
new Routes(
{
    From:"TPE",
    To:"CTU",
    Distance:1804.04,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"CTU",
    Distance:1804.04,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"DEL",
    Distance:4372.01,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TPE",
    To:"DEL",
    Distance:4372.01,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"DLC",
    Distance:1544.53,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"DLC",
    Distance:1544.53,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"DLC",
    Distance:1544.53,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"DLC",
    Distance:1544.53,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"TPE",
    To:"DPS",
    Distance:3818.25,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"DPS",
    Distance:3818.25,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"DPS",
    Distance:3818.25,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"TPE",
    To:"DXB",
    Distance:6555.39,
    Airport:"Emirates"
}),
new Routes(
{
    From:"TPE",
    To:"DYG",
    Distance:1157.46,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"DYG",
    Distance:1157.46,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"FOC",
    Distance:184.115,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"TPE",
    To:"FOC",
    Distance:184.115,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"FRA",
    Distance:9367.08,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"FSZ",
    Distance:1954.42,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"FUK",
    Distance:1300.1,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TPE",
    To:"FUK",
    Distance:1300.1,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"TPE",
    To:"FUK",
    Distance:1300.1,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"FUK",
    Distance:1300.1,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"FUK",
    Distance:1300.1,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"GUM",
    Distance:2782.15,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"GUM",
    Distance:2782.15,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"HAK",
    Distance:1245.05,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"HAK",
    Distance:1245.05,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"HAN",
    Distance:1633.24,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"HAN",
    Distance:1633.24,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"HAN",
    Distance:1633.24,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"HET",
    Distance:1958.38,
    Airport:"Air China"
}),
new Routes(
{
    From:"TPE",
    To:"HET",
    Distance:1958.38,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"HFE",
    Distance:838.509,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"HFE",
    Distance:838.509,
    Airport:"Primaris Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"HGH",
    Distance:578.216,
    Airport:"Air China"
}),
new Routes(
{
    From:"TPE",
    To:"HGH",
    Distance:578.216,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"HGH",
    Distance:578.216,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"HIJ",
    Distance:1532.6,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"HKD",
    Distance:2585.74,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TPE",
    To:"HKD",
    Distance:2585.74,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"HKD",
    Distance:2585.74,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"HKG",
    Distance:806.074,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"TPE",
    To:"HKG",
    Distance:806.074,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"HKG",
    Distance:806.074,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"TPE",
    To:"HKG",
    Distance:806.074,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"HKG",
    Distance:806.074,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"HKG",
    Distance:806.074,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"HND",
    Distance:2121.57,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"HNL",
    Distance:8144.06,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"HNL",
    Distance:8144.06,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"HRB",
    Distance:2328.24,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"HRB",
    Distance:2328.24,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"ICN",
    Distance:1463.66,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"ICN",
    Distance:1463.66,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"TPE",
    To:"ICN",
    Distance:1463.66,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"ICN",
    Distance:1463.66,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"ICN",
    Distance:1463.66,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"TPE",
    To:"ICN",
    Distance:1463.66,
    Airport:"Scoot"
}),
new Routes(
{
    From:"TPE",
    To:"ICN",
    Distance:1463.66,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"TPE",
    To:"INC",
    Distance:2066.03,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"INC",
    Distance:2066.03,
    Airport:"Primaris Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"ISG",
    Distance:309.335,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"ISG",
    Distance:309.335,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"JFK",
    Distance:12544.6,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"JJN",
    Distance:268.297,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"KHN",
    Distance:675.59,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"KHN",
    Distance:675.59,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"KIX",
    Distance:1703.42,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TPE",
    To:"KIX",
    Distance:1703.42,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"TPE",
    To:"KIX",
    Distance:1703.42,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"KIX",
    Distance:1703.42,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"KIX",
    Distance:1703.42,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"KIX",
    Distance:1703.42,
    Airport:"Jetstar Asia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"KIX",
    Distance:1703.42,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"TPE",
    To:"KIX",
    Distance:1703.42,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"KLO",
    Distance:1494.67,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"KLO",
    Distance:1494.67,
    Airport:"Zest Air"
}),
new Routes(
{
    From:"TPE",
    To:"KMG",
    Distance:1861.32,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"KMG",
    Distance:1861.32,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"KMI",
    Distance:1251.33,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"KMQ",
    Distance:1915.55,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TPE",
    To:"KMQ",
    Distance:1915.55,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"KOJ",
    Distance:1190.52,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"KUH",
    Distance:2890.83,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"KUL",
    Distance:3246.08,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"TPE",
    To:"KUL",
    Distance:3246.08,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"KUL",
    Distance:3246.08,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"KUL",
    Distance:3246.08,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"KWE",
    Distance:1453.03,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"KWE",
    Distance:1453.03,
    Airport:"Primaris Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"KWL",
    Distance:1126.48,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"KWL",
    Distance:1126.48,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"LAX",
    Distance:10922.4,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"LAX",
    Distance:10922.4,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TPE",
    To:"LAX",
    Distance:10922.4,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"LAX",
    Distance:10922.4,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TPE",
    To:"LHW",
    Distance:2079.82,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"LJG",
    Distance:2106.23,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"MFM",
    Distance:843.66,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"TPE",
    To:"MFM",
    Distance:843.66,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"MFM",
    Distance:843.66,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"MNL",
    Distance:1175.44,
    Airport:"Air France"
}),
new Routes(
{
    From:"TPE",
    To:"MNL",
    Distance:1175.44,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"TPE",
    To:"MNL",
    Distance:1175.44,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"MNL",
    Distance:1175.44,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"MNL",
    Distance:1175.44,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"MNL",
    Distance:1175.44,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"NGB",
    Distance:528.542,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"NGB",
    Distance:528.542,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"NGB",
    Distance:528.542,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"TPE",
    To:"NGO",
    Distance:1848.95,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"TPE",
    To:"NGO",
    Distance:1848.95,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"NGO",
    Distance:1848.95,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"NKG",
    Distance:776.393,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"NKG",
    Distance:776.393,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"NKG",
    Distance:776.393,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"TPE",
    To:"NNG",
    Distance:1355.77,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"NNG",
    Distance:1355.77,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"NRT",
    Distance:2181.06,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TPE",
    To:"NRT",
    Distance:2181.06,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"NRT",
    Distance:2181.06,
    Airport:"Arrow Air"
}),
new Routes(
{
    From:"TPE",
    To:"NRT",
    Distance:2181.06,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"TPE",
    To:"NRT",
    Distance:2181.06,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"NRT",
    Distance:2181.06,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TPE",
    To:"NRT",
    Distance:2181.06,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"NRT",
    Distance:2181.06,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"NRT",
    Distance:2181.06,
    Airport:"Scoot"
}),
new Routes(
{
    From:"TPE",
    To:"NRT",
    Distance:2181.06,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"OKA",
    Distance:654.729,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"OKA",
    Distance:654.729,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"TPE",
    To:"OKA",
    Distance:654.729,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"OKJ",
    Distance:1621.66,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TPE",
    To:"OKJ",
    Distance:1621.66,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"PEK",
    Distance:1723.4,
    Airport:"Air China"
}),
new Routes(
{
    From:"TPE",
    To:"PEK",
    Distance:1723.4,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"PEK",
    Distance:1723.4,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"PEK",
    Distance:1723.4,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"PEN",
    Distance:3135.18,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"PNH",
    Distance:2288.3,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"PNH",
    Distance:2288.3,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"PUS",
    Distance:1344.55,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"TPE",
    To:"PUS",
    Distance:1344.55,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"PVG",
    Distance:676.797,
    Airport:"Air China"
}),
new Routes(
{
    From:"TPE",
    To:"PVG",
    Distance:676.797,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"PVG",
    Distance:676.797,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"PVG",
    Distance:676.797,
    Airport:"China SSS"
}),
new Routes(
{
    From:"TPE",
    To:"PVG",
    Distance:676.797,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"PVG",
    Distance:676.797,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"PVG",
    Distance:676.797,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"PVG",
    Distance:676.797,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"REP",
    Distance:2238.04,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"RGN",
    Distance:2753.95,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"ROR",
    Distance:2424.28,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"ROR",
    Distance:2424.28,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"SDJ",
    Distance:2354.26,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TPE",
    To:"SDJ",
    Distance:2354.26,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"SEA",
    Distance:9756.81,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"SEA",
    Distance:9756.81,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TPE",
    To:"SFO",
    Distance:10391.2,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"SFO",
    Distance:10391.2,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TPE",
    To:"SFO",
    Distance:10391.2,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"SFO",
    Distance:10391.2,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TPE",
    To:"SFO",
    Distance:10391.2,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"SGN",
    Distance:2208.06,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"SGN",
    Distance:2208.06,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"SGN",
    Distance:2208.06,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"SHE",
    Distance:1822.91,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"SHE",
    Distance:1822.91,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"SHE",
    Distance:1822.91,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"SHE",
    Distance:1822.91,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"TPE",
    To:"SIN",
    Distance:3222.35,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"SIN",
    Distance:3222.35,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"SIN",
    Distance:3222.35,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"TPE",
    To:"SIN",
    Distance:3222.35,
    Airport:"Jetstar Asia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"SIN",
    Distance:3222.35,
    Airport:"Scoot"
}),
new Routes(
{
    From:"TPE",
    To:"SIN",
    Distance:3222.35,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"SIN",
    Distance:3222.35,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"TPE",
    To:"SJW",
    Distance:1591.87,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"SJW",
    Distance:1591.87,
    Airport:"China SSS"
}),
new Routes(
{
    From:"TPE",
    To:"SJW",
    Distance:1591.87,
    Airport:"Primaris Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"SUB",
    Distance:3723.16,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"SYD",
    Distance:7285.45,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"SYX",
    Distance:1433.82,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"SZX",
    Distance:801.841,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"SZX",
    Distance:801.841,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"SZX",
    Distance:801.841,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"SZX",
    Distance:801.841,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"TPE",
    To:"TAK",
    Distance:1596.92,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"TAO",
    Distance:1246.78,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"TAO",
    Distance:1246.78,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"TAO",
    Distance:1246.78,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"TAO",
    Distance:1246.78,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"TPE",
    To:"TNA",
    Distance:1364.26,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"TNA",
    Distance:1364.26,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"TOY",
    Distance:1988.49,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"TSN",
    Distance:1603.78,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"TXN",
    Distance:595.19,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"TYN",
    Distance:1626.4,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"URC",
    Distance:3695.27,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"URC",
    Distance:3695.27,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"VIE",
    Distance:8968.03,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"WNZ",
    Distance:317.448,
    Airport:"Air China"
}),
new Routes(
{
    From:"TPE",
    To:"WUH",
    Distance:937.007,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"WUH",
    Distance:937.007,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"WUH",
    Distance:937.007,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"WUX",
    Distance:717.821,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"WUX",
    Distance:717.821,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"WUX",
    Distance:717.821,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"WUX",
    Distance:717.821,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"XIY",
    Distance:1590.3,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"XIY",
    Distance:1590.3,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"XIY",
    Distance:1590.3,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"XIY",
    Distance:1590.3,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"TPE",
    To:"XMN",
    Distance:318.961,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"XMN",
    Distance:318.961,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"XUZ",
    Distance:1085.38,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"XUZ",
    Distance:1085.38,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TPE",
    To:"YNT",
    Distance:1370.42,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"YNZ",
    Distance:930.005,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"YNZ",
    Distance:930.005,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"YNZ",
    Distance:930.005,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"TPE",
    To:"YVR",
    Distance:9591.66,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TPE",
    To:"YVR",
    Distance:9591.66,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPE",
    To:"YYZ",
    Distance:12078.8,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TPP",
    To:"IQT",
    Distance:454.862,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"TPP",
    To:"IQT",
    Distance:454.862,
    Airport:"Star Peru (2I)"
}),
new Routes(
{
    From:"TPP",
    To:"LIM",
    Distance:618.401,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"TPP",
    To:"LIM",
    Distance:618.401,
    Airport:"Peruvian Airlines"
}),
new Routes(
{
    From:"TPP",
    To:"LIM",
    Distance:618.401,
    Airport:"Star Peru (2I)"
}),
new Routes(
{
    From:"TPP",
    To:"PCL",
    Distance:287.294,
    Airport:"Star Peru (2I)"
}),
new Routes(
{
    From:"TPQ",
    To:"MEX",
    Distance:640.388,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TPQ",
    To:"MEX",
    Distance:640.388,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"TPQ",
    To:"TIJ",
    Distance:1721.73,
    Airport:"Volaris"
}),
new Routes(
{
    From:"TPS",
    To:"AOI",
    Distance:638.613,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"BGY",
    Distance:893.312,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"BLQ",
    Distance:743.333,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"BTS",
    Distance:1203,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"BVA",
    Distance:1527.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"CAG",
    Distance:333.563,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"CIA",
    Distance:432.418,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"CRL",
    Distance:1533.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"CUF",
    Distance:842.182,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"EIN",
    Distance:1605.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"FKB",
    Distance:1259.35,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"FMM",
    Distance:1135.26,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"GOA",
    Distance:784.694,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"GRO",
    Distance:940.049,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"HHN",
    Distance:1401.45,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"KRK",
    Distance:1471.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"KUN",
    Distance:2087.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"MAN",
    Distance:2056.51,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"MLA",
    Distance:288.894,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"MST",
    Distance:1539.31,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"PEG",
    Distance:576.494,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"PMF",
    Distance:790.07,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"PNL",
    Distance:130.102,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"TPS",
    To:"PSA",
    Distance:665.599,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"TRN",
    Distance:904.585,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"TRS",
    Distance:883.974,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"TSF",
    Distance:860.657,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TPS",
    To:"WMI",
    Distance:1736.09,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRC",
    To:"CUN",
    Distance:1760.53,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"TRC",
    To:"CUU",
    Distance:430.5,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TRC",
    To:"DFW",
    Distance:1022.41,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TRC",
    To:"DFW",
    Distance:1022.41,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TRC",
    To:"GDL",
    Distance:561.235,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TRC",
    To:"GDL",
    Distance:561.235,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"TRC",
    To:"IAH",
    Distance:933.033,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TRC",
    To:"MEX",
    Distance:814.401,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"TRC",
    To:"MEX",
    Distance:814.401,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"TRC",
    To:"MEX",
    Distance:814.401,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"TRD",
    To:"AES",
    Distance:262.551,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TRD",
    To:"AGP",
    Distance:3155.7,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRD",
    To:"ALC",
    Distance:2902.74,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRD",
    To:"ALC",
    Distance:2902.74,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TRD",
    To:"AMS",
    Distance:1290.66,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TRD",
    To:"AMS",
    Distance:1290.66,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TRD",
    To:"ARN",
    Distance:561.787,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TRD",
    To:"AYT",
    Distance:3243.42,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRD",
    To:"BGO",
    Distance:461.442,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRD",
    To:"BGO",
    Distance:461.442,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TRD",
    To:"BNN",
    Distance:231.239,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TRD",
    To:"BOO",
    Distance:452.686,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TRD",
    To:"BOO",
    Distance:452.686,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TRD",
    To:"CPH",
    Distance:877.095,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"TRD",
    To:"CPH",
    Distance:877.095,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRD",
    To:"CPH",
    Distance:877.095,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TRD",
    To:"CPH",
    Distance:877.095,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"TRD",
    To:"DBV",
    Distance:2371.31,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRD",
    To:"EVE",
    Distance:616.765,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRD",
    To:"EVE",
    Distance:616.765,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TRD",
    To:"GDN",
    Distance:1096.82,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TRD",
    To:"KEF",
    Distance:1632.66,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"TRD",
    To:"KRK",
    Distance:1579.23,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRD",
    To:"KRS",
    Distance:603.917,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TRD",
    To:"KSU",
    Distance:159.632,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TRD",
    To:"LGW",
    Distance:1517.89,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRD",
    To:"MJF",
    Distance:280.737,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TRD",
    To:"MQN",
    Distance:360.151,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TRD",
    To:"NCE",
    Distance:2214.26,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRD",
    To:"OSL",
    Distance:363.018,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRD",
    To:"OSL",
    Distance:363.018,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TRD",
    To:"OSY",
    Distance:117.255,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TRD",
    To:"RIX",
    Distance:1020.09,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRD",
    To:"RVK",
    Distance:153.908,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TRD",
    To:"SSJ",
    Distance:287.41,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TRD",
    To:"SVG",
    Distance:582.492,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TRD",
    To:"SXF",
    Distance:1241.03,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRD",
    To:"TLL",
    Distance:862.833,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"TRD",
    To:"TLL",
    Distance:862.833,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TRD",
    To:"TOS",
    Distance:775.841,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRD",
    To:"TOS",
    Distance:775.841,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TRD",
    To:"TRF",
    Distance:476.217,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRD",
    To:"TRF",
    Distance:476.217,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TRD",
    To:"TRF",
    Distance:476.217,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TRE",
    To:"GLA",
    Distance:166.087,
    Airport:"Flybe"
}),
new Routes(
{
    From:"TRF",
    To:"AGP",
    Distance:2719.87,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRF",
    To:"AGP",
    Distance:2719.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRF",
    To:"AHO",
    Distance:2067.76,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRF",
    To:"ALC",
    Distance:2448.87,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRF",
    To:"ALC",
    Distance:2448.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRF",
    To:"AMS",
    Distance:837.894,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TRF",
    To:"AMS",
    Distance:837.894,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TRF",
    To:"ARN",
    Distance:436.158,
    Airport:"NextJet"
}),
new Routes(
{
    From:"TRF",
    To:"AYT",
    Distance:2884.54,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRF",
    To:"BCN",
    Distance:2068.9,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRF",
    To:"BEG",
    Distance:1735.06,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TRF",
    To:"BGO",
    Distance:307.98,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRF",
    To:"BGO",
    Distance:307.98,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TRF",
    To:"CPH",
    Distance:421.95,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TRF",
    To:"CPH",
    Distance:421.95,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TRF",
    To:"DBV",
    Distance:1928.92,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRF",
    To:"GDN",
    Distance:731.064,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TRF",
    To:"KTW",
    Distance:1119.37,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TRF",
    To:"LGW",
    Distance:1110.57,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRF",
    To:"LPA",
    Distance:3989.24,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRF",
    To:"LPL",
    Distance:1035.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRF",
    To:"LUZ",
    Distance:1181.7,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TRF",
    To:"NCE",
    Distance:1739.06,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRF",
    To:"OTP",
    Distance:1944.52,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TRF",
    To:"PMI",
    Distance:2246.8,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRF",
    To:"POZ",
    Distance:856.06,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TRF",
    To:"PSA",
    Distance:1723.86,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRF",
    To:"RIX",
    Distance:843.329,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TRF",
    To:"STN",
    Distance:1025.85,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRF",
    To:"SVG",
    Distance:266.567,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TRF",
    To:"SVG",
    Distance:266.567,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TRF",
    To:"SZZ",
    Distance:684.973,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TRF",
    To:"TRD",
    Distance:476.217,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"TRF",
    To:"TRD",
    Distance:476.217,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"TRF",
    To:"VNO",
    Distance:1039.99,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TRF",
    To:"WAW",
    Distance:1027.23,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TRF",
    To:"WRO",
    Distance:991.535,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TRG",
    To:"AKL",
    Distance:144.446,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"TRG",
    To:"CHC",
    Distance:716.869,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"TRG",
    To:"WLG",
    Distance:423.587,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"TRI",
    To:"ATL",
    Distance:365.282,
    Airport:"Air France"
}),
new Routes(
{
    From:"TRI",
    To:"ATL",
    Distance:365.282,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TRI",
    To:"ATL",
    Distance:365.282,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TRI",
    To:"CLT",
    Distance:192.575,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TRI",
    To:"CLT",
    Distance:192.575,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TRI",
    To:"PIE",
    Distance:952.754,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"TRI",
    To:"SFB",
    Distance:862.892,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"TRK",
    To:"BPN",
    Distance:516.353,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"TRK",
    To:"BPN",
    Distance:516.353,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"TRK",
    To:"BPN",
    Distance:516.353,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"TRK",
    To:"CGK",
    Distance:1603.77,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"TRK",
    To:"SUB",
    Distance:1303.26,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"TRK",
    To:"TWU",
    Distance:125.887,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"TRK",
    To:"UPG",
    Distance:958.537,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"TRN",
    To:"AHO",
    Distance:510.679,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TRN",
    To:"AMS",
    Distance:818.004,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"TRN",
    To:"BCN",
    Distance:625.824,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"TRN",
    To:"BCN",
    Distance:625.824,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TRN",
    To:"BCN",
    Distance:625.824,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRN",
    To:"BDS",
    Distance:977.688,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRN",
    To:"BRI",
    Distance:865.199,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TRN",
    To:"BRI",
    Distance:865.199,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRN",
    To:"BRU",
    Distance:675.968,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"TRN",
    To:"BRU",
    Distance:675.968,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TRN",
    To:"CAG",
    Distance:671.534,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"TRN",
    To:"CDG",
    Distance:573.005,
    Airport:"Air France"
}),
new Routes(
{
    From:"TRN",
    To:"CDG",
    Distance:573.005,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TRN",
    To:"CMN",
    Distance:1851.8,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"TRN",
    To:"CRL",
    Distance:631.352,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRN",
    To:"CTA",
    Distance:1058.71,
    Airport:"Air One"
}),
new Routes(
{
    From:"TRN",
    To:"CTA",
    Distance:1058.71,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TRN",
    To:"CTA",
    Distance:1058.71,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"TRN",
    To:"CTA",
    Distance:1058.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRN",
    To:"DUS",
    Distance:680.167,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TRN",
    To:"FCO",
    Distance:529.295,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TRN",
    To:"FCO",
    Distance:529.295,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"TRN",
    To:"FCO",
    Distance:529.295,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TRN",
    To:"FRA",
    Distance:540.741,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TRN",
    To:"IAS",
    Distance:1548.61,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TRN",
    To:"IAS",
    Distance:1548.61,
    Airport:"Tarom"
}),
new Routes(
{
    From:"TRN",
    To:"IST",
    Distance:1775.93,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TRN",
    To:"LGW",
    Distance:879.522,
    Airport:"British Airways"
}),
new Routes(
{
    From:"TRN",
    To:"MAD",
    Distance:1052.23,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TRN",
    To:"MLA",
    Distance:1187.37,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRN",
    To:"MUC",
    Distance:471.177,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TRN",
    To:"NAP",
    Distance:721.669,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TRN",
    To:"NAP",
    Distance:721.669,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"TRN",
    To:"OLB",
    Distance:501.836,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"TRN",
    To:"PMO",
    Distance:901.874,
    Airport:"Air One"
}),
new Routes(
{
    From:"TRN",
    To:"PMO",
    Distance:901.874,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"TRN",
    To:"PMO",
    Distance:901.874,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TRN",
    To:"REG",
    Distance:1033.67,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TRN",
    To:"STN",
    Distance:921.143,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRN",
    To:"SUF",
    Distance:995.576,
    Airport:"Air One"
}),
new Routes(
{
    From:"TRN",
    To:"SUF",
    Distance:995.576,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TRN",
    To:"TIA",
    Distance:1062.2,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TRN",
    To:"TPS",
    Distance:904.585,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRN",
    To:"ZRH",
    Distance:261.037,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"TRO",
    To:"GFN",
    Distance:241.828,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"TRO",
    To:"SYD",
    Distance:260.592,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"TRR",
    To:"GIU",
    Distance:135.367,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"TRS",
    To:"AHO",
    Distance:713.766,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRS",
    To:"BRI",
    Distance:584.844,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRS",
    To:"BVA",
    Distance:940.494,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRS",
    To:"CRL",
    Distance:843.4,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRS",
    To:"FCO",
    Distance:457.932,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TRS",
    To:"LIN",
    Distance:328.913,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TRS",
    To:"MUC",
    Distance:308.533,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TRS",
    To:"NAP",
    Distance:553.428,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TRS",
    To:"STN",
    Distance:1176.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRS",
    To:"TPS",
    Distance:883.974,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRS",
    To:"VLC",
    Distance:1338.3,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TRU",
    To:"LIM",
    Distance:489.54,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"TRV",
    To:"AUH",
    Distance:2955.21,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"TRV",
    To:"AUH",
    Distance:2955.21,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"TRV",
    To:"AUH",
    Distance:2955.21,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"TRV",
    To:"BAH",
    Distance:3405.9,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"TRV",
    To:"BLR",
    Distance:503.479,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"TRV",
    To:"BLR",
    Distance:503.479,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"TRV",
    To:"BLR",
    Distance:503.479,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"TRV",
    To:"BLR",
    Distance:503.479,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"TRV",
    To:"BOM",
    Distance:1257.71,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"TRV",
    To:"BOM",
    Distance:1257.71,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"TRV",
    To:"BOM",
    Distance:1257.71,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"TRV",
    To:"BOM",
    Distance:1257.71,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"TRV",
    To:"BOM",
    Distance:1257.71,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"TRV",
    To:"BOM",
    Distance:1257.71,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"TRV",
    To:"CMB",
    Distance:357.13,
    Airport:"L"
}),
new Routes(
{
    From:"TRV",
    To:"CMB",
    Distance:357.13,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"TRV",
    To:"COK",
    Distance:194.911,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"TRV",
    To:"COK",
    Distance:194.911,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"TRV",
    To:"COK",
    Distance:194.911,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"TRV",
    To:"DMM",
    Distance:3489,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"TRV",
    To:"DOH",
    Distance:3268.51,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"TRV",
    To:"DXB",
    Distance:2947.1,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"TRV",
    To:"DXB",
    Distance:2947.1,
    Airport:"Emirates"
}),
new Routes(
{
    From:"TRV",
    To:"DXB",
    Distance:2947.1,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"TRV",
    To:"HAQ",
    Distance:456.196,
    Airport:"Maldivian"
}),
new Routes(
{
    From:"TRV",
    To:"KWI",
    Distance:3800.34,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"TRV",
    To:"MAA",
    Distance:615.261,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"TRV",
    To:"MAA",
    Distance:615.261,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"TRV",
    To:"MAA",
    Distance:615.261,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"TRV",
    To:"MAA",
    Distance:615.261,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"TRV",
    To:"MCT",
    Distance:2599.63,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"TRV",
    To:"MCT",
    Distance:2599.63,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"TRV",
    To:"MCT",
    Distance:2599.63,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"TRV",
    To:"MLE",
    Distance:606.596,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"TRV",
    To:"MLE",
    Distance:606.596,
    Airport:"Maldivian"
}),
new Routes(
{
    From:"TRV",
    To:"RUH",
    Distance:3688.14,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"TRV",
    To:"SHJ",
    Distance:2939.54,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"TRV",
    To:"SHJ",
    Distance:2939.54,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"TRV",
    To:"SHJ",
    Distance:2939.54,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"TRV",
    To:"SIN",
    Distance:3100.39,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"TRV",
    To:"SIN",
    Distance:3100.39,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"TRV",
    To:"SIN",
    Distance:3100.39,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"TRW",
    To:"INU",
    Distance:724.927,
    Airport:"Nauru Air Corporation"
}),
new Routes(
{
    From:"TRW",
    To:"MAJ",
    Distance:665.235,
    Airport:"Nauru Air Corporation"
}),
new Routes(
{
    From:"TRW",
    To:"NAN",
    Distance:2179.34,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"TRZ",
    To:"CMB",
    Distance:418.935,
    Airport:"L"
}),
new Routes(
{
    From:"TRZ",
    To:"CMB",
    Distance:418.935,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"TRZ",
    To:"KUL",
    Distance:2689.49,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"TRZ",
    To:"KUL",
    Distance:2689.49,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"TRZ",
    To:"MAA",
    Distance:295.032,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"TRZ",
    To:"MAA",
    Distance:295.032,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"TRZ",
    To:"MAA",
    Distance:295.032,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"TRZ",
    To:"SIN",
    Distance:2982.12,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"TRZ",
    To:"SIN",
    Distance:2982.12,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"TSA",
    To:"CKG",
    Distance:1558.7,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"CKG",
    Distance:1558.7,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TSA",
    To:"CTU",
    Distance:1833.9,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"FOC",
    Distance:212.619,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"FOC",
    Distance:212.619,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TSA",
    To:"FOC",
    Distance:212.619,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"GMP",
    Distance:1474.41,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"GMP",
    Distance:1474.41,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TSA",
    To:"GMP",
    Distance:1474.41,
    Airport:"Eastar Jet"
}),
new Routes(
{
    From:"TSA",
    To:"GMP",
    Distance:1474.41,
    Airport:"Tway Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"HFE",
    Distance:854.055,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TSA",
    To:"HGH",
    Distance:584.202,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TSA",
    To:"HND",
    Distance:2096.7,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TSA",
    To:"HND",
    Distance:2096.7,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"HND",
    Distance:2096.7,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TSA",
    To:"HND",
    Distance:2096.7,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"HUN",
    Distance:116.492,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TSA",
    To:"KNH",
    Distance:330.259,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"KNH",
    Distance:330.259,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TSA",
    To:"MZG",
    Distance:256.651,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"MZG",
    Distance:256.651,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TSA",
    To:"NNG",
    Distance:1387.45,
    Airport:"Primaris Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"PVG",
    Distance:675.814,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"PVG",
    Distance:675.814,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TSA",
    To:"PVG",
    Distance:675.814,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"TSA",
    To:"SHA",
    Distance:681.749,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSA",
    To:"SHA",
    Distance:681.749,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"SHA",
    Distance:681.749,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"SHA",
    Distance:681.749,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TSA",
    To:"SHA",
    Distance:681.749,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"SHA",
    Distance:681.749,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TSA",
    To:"TSN",
    Distance:1611.71,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSA",
    To:"TSN",
    Distance:1611.71,
    Airport:"Primaris Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"TSN",
    Distance:1611.71,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TSA",
    To:"TTT",
    Distance:261.434,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"TYN",
    Distance:1642.48,
    Airport:"Primaris Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"WNZ",
    Distance:323.663,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"TSA",
    To:"WUH",
    Distance:960.932,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TSA",
    To:"XMN",
    Distance:350.574,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"TSA",
    To:"XMN",
    Distance:350.574,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TSE",
    To:"AKX",
    Distance:1007.85,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"AKX",
    Distance:1007.85,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"TSE",
    To:"ALA",
    Distance:950.546,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"ALA",
    Distance:950.546,
    Airport:"Flightlink Tanzania"
}),
new Routes(
{
    From:"TSE",
    To:"ALA",
    Distance:950.546,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TSE",
    To:"ALA",
    Distance:950.546,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"TSE",
    To:"ALA",
    Distance:950.546,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TSE",
    To:"AUH",
    Distance:3288.08,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"AUH",
    Distance:3288.08,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"TSE",
    To:"CIT",
    Distance:974.5,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"CIT",
    Distance:974.5,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"TSE",
    To:"DMB",
    Distance:908.392,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"TSE",
    To:"DME",
    Distance:2263.64,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"TSE",
    To:"DZN",
    Distance:456.905,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"FRA",
    Distance:4310.85,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"FRA",
    Distance:4310.85,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TSE",
    To:"FRA",
    Distance:4310.85,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TSE",
    To:"FRU",
    Distance:913.929,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"GUW",
    Distance:1490.18,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"GUW",
    Distance:1490.18,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"TSE",
    To:"GYD",
    Distance:2022.65,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"IST",
    Distance:3423.67,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"IST",
    Distance:3423.67,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TSE",
    To:"KBP",
    Distance:2823.03,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"KBP",
    Distance:2823.03,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"TSE",
    To:"KSN",
    Distance:592.229,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"KZO",
    Distance:827.004,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"LED",
    Distance:2724.71,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"TSE",
    To:"LED",
    Distance:2724.71,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"LHR",
    Distance:4796.53,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"MSQ",
    Distance:2913.93,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"TSE",
    To:"OMS",
    Distance:455.625,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"OVB",
    Distance:868.317,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"PEK",
    Distance:3652.05,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"PLX",
    Distance:621.767,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"TSE",
    To:"PPK",
    Distance:444.409,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"TSE",
    To:"PWQ",
    Distance:408.434,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"SCO",
    Distance:1718.98,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"SCO",
    Distance:1718.98,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"TSE",
    To:"SHJ",
    Distance:3163.44,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"TSE",
    To:"SVO",
    Distance:2293.28,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"SVX",
    Distance:943.187,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"TAS",
    Distance:1098.6,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"TAS",
    Distance:1098.6,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"TSE",
    To:"UKK",
    Distance:786.362,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"UKK",
    Distance:786.362,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"TSE",
    To:"URA",
    Distance:1387.43,
    Airport:"Flightlink Tanzania"
}),
new Routes(
{
    From:"TSE",
    To:"URC",
    Distance:1435.37,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"URC",
    Distance:1435.37,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TSE",
    To:"VIE",
    Distance:3879.84,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"TSE",
    To:"VIE",
    Distance:3879.84,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"TSE",
    To:"VKO",
    Distance:2303.64,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"TSF",
    To:"AGP",
    Distance:1711.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"AHO",
    Distance:641.24,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"BCN",
    Distance:947.865,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"BDS",
    Distance:724.669,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"BLL",
    Distance:1142.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"BRE",
    Distance:858.722,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"BRI",
    Distance:622.309,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"BRS",
    Distance:1266.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"BRU",
    Distance:815.714,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"BUD",
    Distance:575.245,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"BVA",
    Distance:865.911,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"CAG",
    Distance:756.363,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"CHQ",
    Distance:1508.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"CLJ",
    Distance:892.329,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TSF",
    To:"CMN",
    Distance:2168.05,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"TSF",
    To:"CRL",
    Distance:784.835,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"CTA",
    Distance:940.439,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"DUB",
    Distance:1581.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"EIN",
    Distance:816.688,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"EMA",
    Distance:1262.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"HHN",
    Distance:603.269,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"IEV",
    Distance:1452.18,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"TSF",
    To:"KIV",
    Distance:1291.37,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TSF",
    To:"LBA",
    Distance:1346.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"LWO",
    Distance:992.553,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"TSF",
    To:"MLA",
    Distance:1105.42,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"NRN",
    Distance:796.997,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"NYO",
    Distance:1495.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"OTP",
    Distance:1096.55,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TSF",
    To:"PMO",
    Distance:834.187,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"PRG",
    Distance:518.449,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TSF",
    To:"RYG",
    Distance:1529.65,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"SKP",
    Distance:859.652,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TSF",
    To:"STN",
    Distance:1115.31,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"SUF",
    Distance:820.137,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"TPS",
    Distance:860.657,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSF",
    To:"TSR",
    Distance:709.551,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TSF",
    To:"VLC",
    Distance:1241.33,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TSH",
    To:"FIH",
    Distance:634.679,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"TSH",
    To:"KGA",
    Distance:194.549,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"TSJ",
    To:"FUK",
    Distance:129.3,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TSJ",
    To:"NGS",
    Distance:161.409,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TSJ",
    To:"NGS",
    Distance:161.409,
    Airport:"Catovair"
}),
new Routes(
{
    From:"TSN",
    To:"BAV",
    Distance:647.219,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"BAV",
    Distance:647.219,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"BAV",
    Distance:647.219,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"CAN",
    Distance:1790.56,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"CAN",
    Distance:1790.56,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"CAN",
    Distance:1790.56,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"CAN",
    Distance:1790.56,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSN",
    To:"CAN",
    Distance:1790.56,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"CGO",
    Distance:599.468,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"CGO",
    Distance:599.468,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"CGO",
    Distance:599.468,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"CGO",
    Distance:599.468,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"CGQ",
    Distance:813.352,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"CGQ",
    Distance:813.352,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"CIF",
    Distance:370.095,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"CIF",
    Distance:370.095,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"CIH",
    Distance:490.037,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"CJU",
    Distance:1029.19,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"CJU",
    Distance:1029.19,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSN",
    To:"CKG",
    Distance:1432.36,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"CKG",
    Distance:1432.36,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"CKG",
    Distance:1432.36,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"CKG",
    Distance:1432.36,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"CKG",
    Distance:1432.36,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"CKG",
    Distance:1432.36,
    Airport:"West Air China"
}),
new Routes(
{
    From:"TSN",
    To:"CKG",
    Distance:1432.36,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"CSX",
    Distance:1274.1,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"CSX",
    Distance:1274.1,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"CSX",
    Distance:1274.1,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"CSX",
    Distance:1274.1,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSN",
    To:"CSX",
    Distance:1274.1,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"CTU",
    Distance:1545.6,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"CTU",
    Distance:1545.6,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"TSN",
    To:"CTU",
    Distance:1545.6,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"TSN",
    To:"CTU",
    Distance:1545.6,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSN",
    To:"CTU",
    Distance:1545.6,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"CTU",
    Distance:1545.6,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"DLC",
    Distance:362.453,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"DLC",
    Distance:362.453,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"DLC",
    Distance:362.453,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TSN",
    To:"DLC",
    Distance:362.453,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"TSN",
    To:"DLC",
    Distance:362.453,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"DLC",
    Distance:362.453,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSN",
    To:"DLC",
    Distance:362.453,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"DLC",
    Distance:362.453,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"DSN",
    Distance:632.574,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"DYG",
    Distance:1281.81,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSN",
    To:"FOC",
    Distance:1482.43,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"FUG",
    Distance:705.622,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"HAK",
    Distance:2233.54,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"HAK",
    Distance:2233.54,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"HET",
    Distance:508.021,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"HET",
    Distance:508.021,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"HET",
    Distance:508.021,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"HET",
    Distance:508.021,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSN",
    To:"HET",
    Distance:508.021,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"HET",
    Distance:508.021,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"HGH",
    Distance:1028.4,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"HGH",
    Distance:1028.4,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"HGH",
    Distance:1028.4,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSN",
    To:"HGH",
    Distance:1028.4,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"HGH",
    Distance:1028.4,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"HIA",
    Distance:615.984,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"HKG",
    Distance:1897.93,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"HKG",
    Distance:1897.93,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"TSN",
    To:"HKG",
    Distance:1897.93,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"HRB",
    Distance:1027.01,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"HRB",
    Distance:1027.01,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"HRB",
    Distance:1027.01,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"HRB",
    Distance:1027.01,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"TSN",
    To:"HRB",
    Distance:1027.01,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSN",
    To:"HRB",
    Distance:1027.01,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"HRB",
    Distance:1027.01,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"HRB",
    Distance:1027.01,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"ICN",
    Distance:815.16,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"ICN",
    Distance:815.16,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"ICN",
    Distance:815.16,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"ICN",
    Distance:815.16,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"TSN",
    To:"KHH",
    Distance:1861.86,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TSN",
    To:"KHN",
    Distance:1148.5,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"KMG",
    Distance:2083.07,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"KMG",
    Distance:2083.07,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"KMG",
    Distance:2083.07,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"KWL",
    Distance:1690.79,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSN",
    To:"LHW",
    Distance:1253.16,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"LHW",
    Distance:1253.16,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"MWX",
    Distance:923.561,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"NBS",
    Distance:921.459,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"NGB",
    Distance:1100.19,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"NGB",
    Distance:1100.19,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSN",
    To:"NGO",
    Distance:1788.21,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"NGO",
    Distance:1788.21,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"NTG",
    Distance:850.005,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"NTG",
    Distance:850.005,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"PVG",
    Distance:975.34,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"PVG",
    Distance:975.34,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"PVG",
    Distance:975.34,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"SHA",
    Distance:952.821,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"SHA",
    Distance:952.821,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"SHA",
    Distance:952.821,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"SHA",
    Distance:952.821,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"SHA",
    Distance:952.821,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"SHA",
    Distance:952.821,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"SHA",
    Distance:952.821,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"SHE",
    Distance:563.28,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"SIN",
    Distance:4413.75,
    Airport:"Scoot"
}),
new Routes(
{
    From:"TSN",
    To:"SYX",
    Distance:2438.48,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"SYX",
    Distance:2438.48,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"TSN",
    To:"SZX",
    Distance:1863.41,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"SZX",
    Distance:1863.41,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"SZX",
    Distance:1863.41,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"SZX",
    Distance:1863.41,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSN",
    To:"SZX",
    Distance:1863.41,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"SZX",
    Distance:1863.41,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"TAO",
    Distance:414.675,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"TAO",
    Distance:414.675,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"TAO",
    Distance:414.675,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"TPE",
    Distance:1603.78,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TSN",
    To:"TSA",
    Distance:1611.71,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"TSA",
    Distance:1611.71,
    Airport:"Primaris Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"TSA",
    Distance:1611.71,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"TSN",
    To:"TXN",
    Distance:1047.55,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"TYN",
    Distance:438.464,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"URC",
    Distance:2528.71,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"UYN",
    Distance:667.474,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSN",
    To:"WUH",
    Distance:970.34,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"WUH",
    Distance:970.34,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"WUH",
    Distance:970.34,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"WUH",
    Distance:970.34,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"XIY",
    Distance:924.679,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"XIY",
    Distance:924.679,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"XIY",
    Distance:924.679,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"XIY",
    Distance:924.679,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"TSN",
    To:"XIY",
    Distance:924.679,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSN",
    To:"XIY",
    Distance:924.679,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"XIY",
    Distance:924.679,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"XMN",
    Distance:1622.92,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"XMN",
    Distance:1622.92,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"XMN",
    Distance:1622.92,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSN",
    To:"XMN",
    Distance:1622.92,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"XMN",
    Distance:1622.92,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"XNN",
    Distance:1372.96,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSN",
    To:"YCU",
    Distance:725.062,
    Airport:"Air China"
}),
new Routes(
{
    From:"TSN",
    To:"YCU",
    Distance:725.062,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TSN",
    To:"YNT",
    Distance:400.21,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TSN",
    To:"YNT",
    Distance:400.21,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSN",
    To:"ZUH",
    Distance:1940.44,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"TSR",
    To:"BCN",
    Distance:1626.41,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TSR",
    To:"BGY",
    Distance:902.128,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TSR",
    To:"BLQ",
    Distance:799.83,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TSR",
    To:"BVA",
    Distance:1491.86,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TSR",
    To:"CIA",
    Distance:830.617,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TSR",
    To:"DTM",
    Distance:1188.35,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TSR",
    To:"LTN",
    Distance:1717.36,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TSR",
    To:"MAD",
    Distance:2095.27,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TSR",
    To:"MUC",
    Distance:775.93,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TSR",
    To:"OTP",
    Distance:397.832,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TSR",
    To:"OTP",
    Distance:397.832,
    Airport:"Tarom"
}),
new Routes(
{
    From:"TSR",
    To:"TSF",
    Distance:709.551,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TSR",
    To:"VLC",
    Distance:1910.29,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"TST",
    To:"DMK",
    Distance:720.236,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"TST",
    To:"DMK",
    Distance:720.236,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"TSV",
    To:"BNE",
    Distance:1112.27,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TSV",
    To:"BNE",
    Distance:1112.27,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"TSV",
    To:"BNE",
    Distance:1112.27,
    Airport:"Qantas"
}),
new Routes(
{
    From:"TSV",
    To:"BNE",
    Distance:1112.27,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"TSV",
    To:"CNJ",
    Distance:673.017,
    Airport:"Qantas"
}),
new Routes(
{
    From:"TSV",
    To:"CNS",
    Distance:283.992,
    Airport:"Qantas"
}),
new Routes(
{
    From:"TSV",
    To:"DRW",
    Distance:1861.19,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"TSV",
    To:"DRW",
    Distance:1861.19,
    Airport:"Qantas"
}),
new Routes(
{
    From:"TSV",
    To:"ISA",
    Distance:776.473,
    Airport:"Qantas"
}),
new Routes(
{
    From:"TSV",
    To:"ISA",
    Distance:776.473,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"TSV",
    To:"MEL",
    Distance:2056.76,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"TSV",
    To:"MKY",
    Distance:330.159,
    Airport:"Qantas"
}),
new Routes(
{
    From:"TSV",
    To:"MOV",
    Distance:340.478,
    Airport:"Qantas"
}),
new Routes(
{
    From:"TSV",
    To:"SYD",
    Distance:1691.16,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"TSV",
    To:"SYD",
    Distance:1691.16,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"TSV",
    To:"WIN",
    Distance:515.626,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"TTA",
    To:"CMN",
    Distance:644.316,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"TTE",
    To:"CGK",
    Distance:2427.24,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"TTE",
    To:"CGK",
    Distance:2427.24,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"TTE",
    To:"MDC",
    Distance:284.427,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"TTE",
    To:"MDC",
    Distance:284.427,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"TTE",
    To:"MDC",
    Distance:284.427,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"TTE",
    To:"UPG",
    Distance:1088.68,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"TTE",
    To:"UPG",
    Distance:1088.68,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"TTE",
    To:"UPG",
    Distance:1088.68,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"TTJ",
    To:"HND",
    Distance:507.809,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"TTN",
    To:"ATL",
    Distance:1127.89,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TTN",
    To:"BNA",
    Distance:1133.69,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TTN",
    To:"CLE",
    Distance:605.001,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TTN",
    To:"CLT",
    Distance:778.942,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TTN",
    To:"CVG",
    Distance:854.038,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TTN",
    To:"DTW",
    Distance:745.359,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TTN",
    To:"FLL",
    Distance:1654.86,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TTN",
    To:"IND",
    Distance:979.278,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TTN",
    To:"MCO",
    Distance:1444.93,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TTN",
    To:"MDW",
    Distance:1097.13,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TTN",
    To:"RDU",
    Distance:600.067,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TTN",
    To:"RSW",
    Distance:1656.76,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TTN",
    To:"TPA",
    Distance:1539.82,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TTN",
    To:"UST",
    Distance:1290.76,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TTQ",
    To:"SJO",
    Distance:99.2742,
    Airport:"CAL Cargo Air Lines"
}),
new Routes(
{
    From:"TTT",
    To:"TSA",
    Distance:261.434,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"TTU",
    To:"AHU",
    Distance:142.003,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"TUB",
    To:"PPT",
    Distance:645.96,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"TUB",
    To:"RUR",
    Distance:214.734,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"TUB",
    To:"RVV",
    Distance:197.051,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"TUC",
    To:"AEP",
    Distance:1069.69,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"TUC",
    To:"AEP",
    Distance:1069.69,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"TUF",
    To:"DUB",
    Distance:829.358,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TUF",
    To:"MRS",
    Distance:565.501,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TUF",
    To:"OPO",
    Distance:1014.91,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TUF",
    To:"RAK",
    Distance:1910.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TUF",
    To:"STN",
    Distance:496.391,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"TUG",
    To:"MNL",
    Distance:356.196,
    Airport:"Air Philippines"
}),
new Routes(
{
    From:"TUG",
    To:"MNL",
    Distance:356.196,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"TUG",
    To:"MNL",
    Distance:356.196,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"TUI",
    To:"RUH",
    Distance:1080.52,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"TUK",
    To:"DBA",
    Distance:348.812,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"TUK",
    To:"GWD",
    Distance:109.306,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"TUK",
    To:"KHI",
    Distance:431.752,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"TUK",
    To:"MCT",
    Distance:547.944,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"TUK",
    To:"SHJ",
    Distance:756.473,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"TUK",
    To:"UET",
    Distance:609.614,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"TUL",
    To:"ATL",
    Distance:1082.27,
    Airport:"Air France"
}),
new Routes(
{
    From:"TUL",
    To:"ATL",
    Distance:1082.27,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TUL",
    To:"ATL",
    Distance:1082.27,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TUL",
    To:"ATL",
    Distance:1082.27,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"TUL",
    To:"DAL",
    Distance:382.953,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TUL",
    To:"DEN",
    Distance:870.043,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TUL",
    To:"DEN",
    Distance:870.043,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TUL",
    To:"DEN",
    Distance:870.043,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TUL",
    To:"DFW",
    Distance:381.914,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TUL",
    To:"DFW",
    Distance:381.914,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TUL",
    To:"DTW",
    Distance:1268.31,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TUL",
    To:"EWR",
    Distance:1950.77,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TUL",
    To:"HOU",
    Distance:730.867,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TUL",
    To:"IAD",
    Distance:1649.93,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TUL",
    To:"IAH",
    Distance:692.83,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TUL",
    To:"LAS",
    Distance:1727.11,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TUL",
    To:"MDW",
    Distance:937.504,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TUL",
    To:"MIA",
    Distance:1879.53,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TUL",
    To:"MIA",
    Distance:1879.53,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TUL",
    To:"MSP",
    Distance:991.35,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TUL",
    To:"ORD",
    Distance:941.45,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TUL",
    To:"ORD",
    Distance:941.45,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TUL",
    To:"ORD",
    Distance:941.45,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TUL",
    To:"PHX",
    Distance:1501.75,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TUL",
    To:"SFB",
    Distance:1600.08,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"TUL",
    To:"SLC",
    Distance:1487.69,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TUL",
    To:"STL",
    Distance:563.358,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TUN",
    To:"ABJ",
    Distance:3796.6,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"ALG",
    Distance:624.662,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"TUN",
    To:"ALG",
    Distance:624.662,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"AMM",
    Distance:2426.82,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"TUN",
    To:"AMS",
    Distance:1771.15,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"BCN",
    Distance:859.161,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"BEG",
    Distance:1224.64,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"BEN",
    Distance:1060.66,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"TUN",
    To:"BEN",
    Distance:1060.66,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TUN",
    To:"BEN",
    Distance:1060.66,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"BEY",
    Distance:2309.2,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"TUN",
    To:"BEY",
    Distance:2309.2,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"BKO",
    Distance:3255.05,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"BLQ",
    Distance:859.118,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"BOD",
    Distance:1276.2,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"BRU",
    Distance:1627.46,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"CAI",
    Distance:2096.09,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"TUN",
    To:"CAI",
    Distance:2096.09,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"CDG",
    Distance:1487.91,
    Airport:"Air France"
}),
new Routes(
{
    From:"TUN",
    To:"CDG",
    Distance:1487.91,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"TUN",
    To:"CDG",
    Distance:1487.91,
    Airport:"Servicios de Transportes A"
}),
new Routes(
{
    From:"TUN",
    To:"CGN",
    Distance:1577.52,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TUN",
    To:"CMN",
    Distance:1663.65,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"TUN",
    To:"CMN",
    Distance:1663.65,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"DJE",
    Distance:334.628,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"TUN",
    To:"DKR",
    Distance:3681.3,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"DME",
    Distance:2931.16,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"DOH",
    Distance:4107.27,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"TUN",
    To:"DUS",
    Distance:1628.63,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"DXB",
    Distance:4444.47,
    Airport:"Emirates"
}),
new Routes(
{
    From:"TUN",
    To:"DXB",
    Distance:4444.47,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"FCO",
    Distance:577.594,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TUN",
    To:"FCO",
    Distance:577.594,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"FRA",
    Distance:1471.23,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TUN",
    To:"FRA",
    Distance:1471.23,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"GAE",
    Distance:330.897,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"TUN",
    To:"GAF",
    Distance:298.428,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"TUN",
    To:"GVA",
    Distance:1098.21,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"IST",
    Distance:1668.65,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"IST",
    Distance:1668.65,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TUN",
    To:"JED",
    Distance:3254.24,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"TUN",
    To:"JED",
    Distance:3254.24,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"KWI",
    Distance:3594.08,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"LAQ",
    Distance:1161.69,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TUN",
    To:"LAQ",
    Distance:1161.69,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"LHR",
    Distance:1831.89,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"LIS",
    Distance:1711.12,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"LYS",
    Distance:1075.57,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"TUN",
    To:"LYS",
    Distance:1075.57,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"TUN",
    To:"LYS",
    Distance:1075.57,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"MAD",
    Distance:1262.51,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"MED",
    Distance:3115.02,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"MIR",
    Distance:130.402,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"TUN",
    To:"MIR",
    Distance:130.402,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"TUN",
    To:"MLA",
    Distance:396.292,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"TUN",
    To:"MRA",
    Distance:669.924,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"TUN",
    To:"MRA",
    Distance:669.924,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TUN",
    To:"MRA",
    Distance:669.924,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"MRS",
    Distance:846.762,
    Airport:"Air France"
}),
new Routes(
{
    From:"TUN",
    To:"MRS",
    Distance:846.762,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"MUC",
    Distance:1285.32,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"MXP",
    Distance:984.206,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TUN",
    To:"MXP",
    Distance:984.206,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"NAP",
    Distance:570,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"TUN",
    To:"NCE",
    Distance:798.764,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"NKC",
    Distance:3298.89,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"NTE",
    Distance:1502.91,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"TUN",
    To:"NTE",
    Distance:1502.91,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"ORN",
    Distance:981.93,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"ORY",
    Distance:1466.28,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"TUN",
    To:"ORY",
    Distance:1466.28,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"OUA",
    Distance:2965.29,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"PMO",
    Distance:292.393,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"SFA",
    Distance:240.847,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"TUN",
    To:"SRX",
    Distance:870.79,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TUN",
    To:"SXB",
    Distance:1316.6,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"TIP",
    Distance:537.085,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"TUN",
    To:"TIP",
    Distance:537.085,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TUN",
    To:"TIP",
    Distance:537.085,
    Airport:"Servicios de Transportes A"
}),
new Routes(
{
    From:"TUN",
    To:"TIP",
    Distance:537.085,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"TLS",
    Distance:1063.71,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"TOB",
    Distance:1371.14,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"TUN",
    To:"TOB",
    Distance:1371.14,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"TOE",
    Distance:376.279,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"TUN",
    To:"VCE",
    Distance:978.498,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"VIE",
    Distance:1354.54,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUN",
    To:"ZRH",
    Distance:1188.19,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"TUO",
    To:"AKL",
    Distance:223.493,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"TUO",
    To:"WLG",
    Distance:307.628,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"TUR",
    To:"BEL",
    Distance:301.184,
    Airport:"Azul"
}),
new Routes(
{
    From:"TUS",
    To:"ATL",
    Distance:2474.96,
    Airport:"Air France"
}),
new Routes(
{
    From:"TUS",
    To:"ATL",
    Distance:2474.96,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TUS",
    To:"ATL",
    Distance:2474.96,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TUS",
    To:"ATL",
    Distance:2474.96,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TUS",
    To:"ATL",
    Distance:2474.96,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"TUS",
    To:"DEN",
    Distance:1028.8,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TUS",
    To:"DEN",
    Distance:1028.8,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TUS",
    To:"DFW",
    Distance:1305.68,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TUS",
    To:"DFW",
    Distance:1305.68,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TUS",
    To:"IAH",
    Distance:1503.45,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TUS",
    To:"LAS",
    Distance:586.922,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TUS",
    To:"LAS",
    Distance:586.922,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TUS",
    To:"LAX",
    Distance:724.931,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TUS",
    To:"LAX",
    Distance:724.931,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"TUS",
    To:"LAX",
    Distance:724.931,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TUS",
    To:"LAX",
    Distance:724.931,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TUS",
    To:"LAX",
    Distance:724.931,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TUS",
    To:"LAX",
    Distance:724.931,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TUS",
    To:"MDW",
    Distance:2313.81,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TUS",
    To:"MDW",
    Distance:2313.81,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TUS",
    To:"MSP",
    Distance:2087.28,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TUS",
    To:"ORD",
    Distance:2309.49,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TUS",
    To:"ORD",
    Distance:2309.49,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TUS",
    To:"PDX",
    Distance:1802.18,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"TUS",
    To:"PHX",
    Distance:177.487,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TUS",
    To:"PHX",
    Distance:177.487,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TUS",
    To:"SAN",
    Distance:590.408,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"TUS",
    To:"SEA",
    Distance:1957.5,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"TUS",
    To:"SFO",
    Distance:1208.02,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TUS",
    To:"SJC",
    Distance:1160.03,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"TUS",
    To:"SLC",
    Distance:968.742,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TUU",
    To:"AHB",
    Distance:1283.02,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"TUU",
    To:"CAI",
    Distance:542.14,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"TUU",
    To:"CAI",
    Distance:542.14,
    Airport:"Express One International"
}),
new Routes(
{
    From:"TUU",
    To:"CAI",
    Distance:542.14,
    Airport:"Nile Air"
}),
new Routes(
{
    From:"TUU",
    To:"DMM",
    Distance:1317.06,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"TUU",
    To:"DXB",
    Distance:1890.22,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"TUU",
    To:"JED",
    Distance:786.095,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"TUU",
    To:"MED",
    Distance:523.439,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"TUU",
    To:"RUH",
    Distance:1070.45,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"TVC",
    To:"DTW",
    Distance:333.77,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TVC",
    To:"MSP",
    Distance:602.622,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TVC",
    To:"ORD",
    Distance:360.015,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TVC",
    To:"ORD",
    Distance:360.015,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TVC",
    To:"ORD",
    Distance:360.015,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TVF",
    To:"GFK",
    Distance:74.8569,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"TVS",
    To:"CAN",
    Distance:1868.39,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TVS",
    To:"DLC",
    Distance:315.355,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"TVS",
    To:"PVG",
    Distance:1013.46,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TVS",
    To:"PVG",
    Distance:1013.46,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"TVS",
    To:"SJW",
    Distance:327.225,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"TVS",
    To:"TYN",
    Distance:514.951,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TVU",
    To:"NAN",
    Distance:308.239,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"TVU",
    To:"SUV",
    Distance:223.971,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"TVU",
    To:"SVU",
    Distance:84.1959,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"TVY",
    To:"MGZ",
    Distance:190.483,
    Airport:"Air Mandalay"
}),
new Routes(
{
    From:"TVY",
    To:"RGN",
    Distance:382.588,
    Airport:"Air Mandalay"
}),
new Routes(
{
    From:"TWB",
    To:"BNE",
    Distance:119.811,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"TWB",
    To:"CTL",
    Distance:574.112,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"TWB",
    To:"SGO",
    Distance:331.521,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"TWB",
    To:"SYD",
    Distance:715.506,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"TWF",
    To:"SLC",
    Distance:280.987,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TWU",
    To:"BKI",
    Distance:291.883,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"TWU",
    To:"BKI",
    Distance:291.883,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"TWU",
    To:"JHB",
    Distance:1631.97,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"TWU",
    To:"KUL",
    Distance:1829.72,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"TWU",
    To:"KUL",
    Distance:1829.72,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"TWU",
    To:"SDK",
    Distance:176.661,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"TWU",
    To:"TRK",
    Distance:125.887,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"TXK",
    To:"DFW",
    Distance:290.252,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TXK",
    To:"DFW",
    Distance:290.252,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TXL",
    To:"ACE",
    Distance:3427.66,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"ADB",
    Distance:1913.26,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"TXL",
    To:"AGP",
    Distance:2245.87,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"AGP",
    Distance:2245.87,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"ALC",
    Distance:1913.24,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"AMM",
    Distance:2952.58,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"AMM",
    Distance:2952.58,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"TXL",
    To:"AMS",
    Distance:578.188,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TXL",
    To:"AMS",
    Distance:578.188,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"AOI",
    Distance:994.465,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"ARN",
    Distance:838.778,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"ARN",
    Distance:838.778,
    Airport:"Finnair"
}),
new Routes(
{
    From:"TXL",
    To:"ARN",
    Distance:838.778,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"ARN",
    Distance:838.778,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TXL",
    To:"ARN",
    Distance:838.778,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TXL",
    To:"ATH",
    Distance:1823.08,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"ATH",
    Distance:1823.08,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TXL",
    To:"AUH",
    Distance:4663.67,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"AUH",
    Distance:4663.67,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"TXL",
    To:"AYT",
    Distance:2211.77,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"AYT",
    Distance:2211.77,
    Airport:"Germania"
}),
new Routes(
{
    From:"TXL",
    To:"AYT",
    Distance:2211.77,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"TXL",
    To:"BCN",
    Distance:1510.39,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"BCN",
    Distance:1510.39,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"BCN",
    Distance:1510.39,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"BCN",
    Distance:1510.39,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TXL",
    To:"BEG",
    Distance:1002.21,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"BEG",
    Distance:1002.21,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"TXL",
    To:"BHX",
    Distance:1015.86,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"BIA",
    Distance:1148.34,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"BIO",
    Distance:1579.92,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"BIO",
    Distance:1579.92,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"BLQ",
    Distance:904.212,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"BRI",
    Distance:1296.71,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"BRI",
    Distance:1296.71,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"TXL",
    To:"BRN",
    Distance:752.624,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"TXL",
    To:"BRU",
    Distance:633.23,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"BRU",
    Distance:633.23,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"BRU",
    Distance:633.23,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TXL",
    To:"BUD",
    Distance:711.124,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"CDG",
    Distance:850.499,
    Airport:"Air France"
}),
new Routes(
{
    From:"TXL",
    To:"CDG",
    Distance:850.499,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TXL",
    To:"CDG",
    Distance:850.499,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TXL",
    To:"CFU",
    Distance:1527.14,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"CGN",
    Distance:463.174,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"CGN",
    Distance:463.174,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"CGN",
    Distance:463.174,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"CPH",
    Distance:342.543,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"CPH",
    Distance:342.543,
    Airport:"Finnair"
}),
new Routes(
{
    From:"TXL",
    To:"CPH",
    Distance:342.543,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"CPH",
    Distance:342.543,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TXL",
    To:"CPH",
    Distance:342.543,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"TXL",
    To:"CPH",
    Distance:342.543,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TXL",
    To:"CTA",
    Distance:1683.93,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"CTA",
    Distance:1683.93,
    Airport:"Air One"
}),
new Routes(
{
    From:"TXL",
    To:"CTA",
    Distance:1683.93,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TXL",
    To:"CTA",
    Distance:1683.93,
    Airport:"Finnair"
}),
new Routes(
{
    From:"TXL",
    To:"CTA",
    Distance:1683.93,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"CTA",
    Distance:1683.93,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"TXL",
    To:"DBV",
    Distance:1172.18,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"DBV",
    Distance:1172.18,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"DME",
    Distance:1631.44,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"DME",
    Distance:1631.44,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"DOH",
    Distance:4404.11,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"TXL",
    To:"DUS",
    Distance:468.747,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"DUS",
    Distance:468.747,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"DUS",
    Distance:468.747,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TXL",
    To:"EIN",
    Distance:555.228,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"TXL",
    To:"EWR",
    Distance:6387.39,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TXL",
    To:"EWR",
    Distance:6387.39,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"FAO",
    Distance:2390.95,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"FCO",
    Distance:1198.46,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"FCO",
    Distance:1198.46,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"FCO",
    Distance:1198.46,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"TXL",
    To:"FDH",
    Distance:606.391,
    Airport:"Intersky"
}),
new Routes(
{
    From:"TXL",
    To:"FKB",
    Distance:557.72,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"FKB",
    Distance:557.72,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"FLR",
    Distance:984.988,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"FLR",
    Distance:984.988,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"FMM",
    Distance:552.376,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"FNC",
    Distance:3262.86,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"FRA",
    Distance:433.648,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"FRA",
    Distance:433.648,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"FRA",
    Distance:433.648,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"FRA",
    Distance:433.648,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TXL",
    To:"FUE",
    Distance:3487.44,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"GDN",
    Distance:397.786,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"GOT",
    Distance:571.037,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"GOT",
    Distance:571.037,
    Airport:"Finnair"
}),
new Routes(
{
    From:"TXL",
    To:"GOT",
    Distance:571.037,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"GRZ",
    Distance:638.114,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"GWT",
    Distance:417.404,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"HEL",
    Distance:1118.85,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"HEL",
    Distance:1118.85,
    Airport:"Finnair"
}),
new Routes(
{
    From:"TXL",
    To:"HEL",
    Distance:1118.85,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"HER",
    Distance:2131.95,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"HER",
    Distance:2131.95,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"HER",
    Distance:2131.95,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"HRG",
    Distance:3295.33,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"IBZ",
    Distance:1775.76,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"IBZ",
    Distance:1775.76,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"IST",
    Distance:1741.2,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"JFK",
    Distance:6367.75,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"JFK",
    Distance:6367.75,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"KBP",
    Distance:1241.33,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"KGD",
    Distance:545.619,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"KGD",
    Distance:545.619,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"KGS",
    Distance:2057.24,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"KLU",
    Distance:662.277,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"KLU",
    Distance:662.277,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"KRK",
    Distance:528.888,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"LED",
    Distance:1317.21,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"LHR",
    Distance:947.039,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"LHR",
    Distance:947.039,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"LHR",
    Distance:947.039,
    Airport:"British Airways"
}),
new Routes(
{
    From:"TXL",
    To:"LHR",
    Distance:947.039,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"LIN",
    Distance:843.142,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"LPA",
    Distance:3616.54,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"LUX",
    Distance:591.69,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TXL",
    To:"LUX",
    Distance:591.69,
    Airport:"Luxair"
}),
new Routes(
{
    From:"TXL",
    To:"MAD",
    Distance:1851.96,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"MAD",
    Distance:1851.96,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"MAH",
    Distance:1572.02,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"MHG",
    Distance:478.681,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"MIA",
    Distance:7990.59,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"MIA",
    Distance:7990.59,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"MLA",
    Distance:1859.55,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"TXL",
    To:"MRS",
    Distance:1177.43,
    Airport:"Air France"
}),
new Routes(
{
    From:"TXL",
    To:"MUC",
    Distance:479.576,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"MUC",
    Distance:479.576,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"MUC",
    Distance:479.576,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TXL",
    To:"MXP",
    Distance:838.54,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"MXP",
    Distance:838.54,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"TXL",
    To:"NAP",
    Distance:1300.27,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"NAP",
    Distance:1300.27,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"TXL",
    To:"NBE",
    Distance:1846.51,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"NCE",
    Distance:1086.67,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"NTE",
    Distance:1222.27,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"TXL",
    To:"NUE",
    Distance:374.08,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"NUE",
    Distance:374.08,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"NUE",
    Distance:374.08,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"OLB",
    Distance:1327.63,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"OLB",
    Distance:1327.63,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"TXL",
    To:"ORD",
    Distance:7081.23,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"ORD",
    Distance:7081.23,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"ORY",
    Distance:879.396,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"OSL",
    Distance:859.382,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"OSL",
    Distance:859.382,
    Airport:"Finnair"
}),
new Routes(
{
    From:"TXL",
    To:"OSL",
    Distance:859.382,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"OSL",
    Distance:859.382,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"TXL",
    To:"OTP",
    Distance:1291.86,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"OTP",
    Distance:1291.86,
    Airport:"Finnair"
}),
new Routes(
{
    From:"TXL",
    To:"PEK",
    Distance:7356.33,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"PEK",
    Distance:7356.33,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"PMI",
    Distance:1656.02,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"PMI",
    Distance:1656.02,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"PMO",
    Distance:1599.47,
    Airport:"Air One"
}),
new Routes(
{
    From:"TXL",
    To:"PMO",
    Distance:1599.47,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TXL",
    To:"PRG",
    Distance:281.626,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"PRG",
    Distance:281.626,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"TXL",
    To:"PRN",
    Distance:1251.77,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"PSA",
    Distance:1009.84,
    Airport:"Air One"
}),
new Routes(
{
    From:"TXL",
    To:"PSA",
    Distance:1009.84,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TXL",
    To:"RHO",
    Distance:2136.68,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"RIX",
    Distance:838.585,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"TXL",
    To:"RIX",
    Distance:838.585,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"SAW",
    Distance:1773.33,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"SCN",
    Distance:570.765,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"SCN",
    Distance:570.765,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"SCN",
    Distance:570.765,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TXL",
    To:"SCN",
    Distance:570.765,
    Airport:"Luxair"
}),
new Routes(
{
    From:"TXL",
    To:"SJJ",
    Distance:1040.13,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"SKG",
    Distance:1526.89,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"SMI",
    Distance:1961.55,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"SOF",
    Distance:1330.7,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"SOF",
    Distance:1330.7,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"TXL",
    To:"SOF",
    Distance:1330.7,
    Airport:"Finnair"
}),
new Routes(
{
    From:"TXL",
    To:"SPU",
    Distance:1027.48,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"SPU",
    Distance:1027.48,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"STR",
    Distance:516.939,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"STR",
    Distance:516.939,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"STR",
    Distance:516.939,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"SVO",
    Distance:1603.13,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"SVO",
    Distance:1603.13,
    Airport:"MIAT Mongolian Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"SZG",
    Distance:530.38,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"SZG",
    Distance:530.38,
    Airport:"Finnair"
}),
new Routes(
{
    From:"TXL",
    To:"TFS",
    Distance:3670.03,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"TLV",
    Distance:2870.86,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"TLV",
    Distance:2870.86,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TXL",
    To:"UME",
    Distance:1312.72,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"TXL",
    To:"VCE",
    Distance:787.357,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"VCE",
    Distance:787.357,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"TXL",
    To:"VIE",
    Distance:546.705,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"VIE",
    Distance:546.705,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"VIE",
    Distance:546.705,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"VIE",
    Distance:546.705,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"VIE",
    Distance:546.705,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TXL",
    To:"VKO",
    Distance:1591.42,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TXL",
    To:"VNO",
    Distance:823.497,
    Airport:"LTU International"
}),
new Routes(
{
    From:"TXL",
    To:"VRN",
    Distance:815.492,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"WAW",
    Distance:523.036,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"ZAD",
    Distance:951.894,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"TXL",
    To:"ZAG",
    Distance:784.353,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"ZAG",
    Distance:784.353,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TXL",
    To:"ZRH",
    Distance:659.678,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"TXL",
    To:"ZRH",
    Distance:659.678,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TXL",
    To:"ZRH",
    Distance:659.678,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"TXL",
    To:"ZRH",
    Distance:659.678,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"TXN",
    To:"CAN",
    Distance:860.083,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"CKG",
    Distance:1121.03,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"CKG",
    Distance:1121.03,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"CSX",
    Distance:519.138,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"CTU",
    Distance:1378.02,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"CTU",
    Distance:1378.02,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"DLC",
    Distance:1069.69,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"HAK",
    Distance:1342.95,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TXN",
    To:"HFE",
    Distance:245.286,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"ICN",
    Distance:1146.11,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"ICN",
    Distance:1146.11,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"TXN",
    To:"PEK",
    Distance:1160.5,
    Airport:"Air China"
}),
new Routes(
{
    From:"TXN",
    To:"PEK",
    Distance:1160.5,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"PUS",
    Distance:1169.95,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"SHA",
    Distance:337.142,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"SHA",
    Distance:337.142,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"SZX",
    Distance:904.73,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"TAO",
    Distance:752.735,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"TPE",
    Distance:595.19,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"TXN",
    To:"TSN",
    Distance:1047.55,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TXN",
    To:"TYN",
    Distance:1031.35,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"TYN",
    Distance:1031.35,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"XIY",
    Distance:1036.78,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"TXN",
    To:"XMN",
    Distance:577.159,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TXN",
    To:"XMN",
    Distance:577.159,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"TXN",
    To:"XMN",
    Distance:577.159,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TYF",
    To:"HFS",
    Distance:35.9949,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"TYF",
    To:"TLL",
    Distance:666.855,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"BAV",
    Distance:386.387,
    Airport:"Air China"
}),
new Routes(
{
    From:"TYN",
    To:"BAV",
    Distance:386.387,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"CAN",
    Distance:1597.42,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"CAN",
    Distance:1597.42,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"CAN",
    Distance:1597.42,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"CGQ",
    Distance:1233.29,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"CIH",
    Distance:172.481,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TYN",
    To:"CIH",
    Distance:172.481,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"CIH",
    Distance:172.481,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"CKG",
    Distance:1049.78,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"CKG",
    Distance:1049.78,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"CKG",
    Distance:1049.78,
    Airport:"West Air China"
}),
new Routes(
{
    From:"TYN",
    To:"CSX",
    Distance:1064.19,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"CSX",
    Distance:1064.19,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"CSX",
    Distance:1064.19,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"CTU",
    Distance:1127.38,
    Airport:"Air China"
}),
new Routes(
{
    From:"TYN",
    To:"CTU",
    Distance:1127.38,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"CTU",
    Distance:1127.38,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"CTU",
    Distance:1127.38,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"CTU",
    Distance:1127.38,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"CZX",
    Distance:912.949,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"CZX",
    Distance:912.949,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"DAT",
    Distance:267.629,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"DAT",
    Distance:267.629,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"DAT",
    Distance:267.629,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"DLC",
    Distance:788.318,
    Airport:"Air China"
}),
new Routes(
{
    From:"TYN",
    To:"DLC",
    Distance:788.318,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"DLC",
    Distance:788.318,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"DLC",
    Distance:788.318,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"DSN",
    Distance:324.433,
    Airport:"Air China"
}),
new Routes(
{
    From:"TYN",
    To:"DSN",
    Distance:324.433,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"DYG",
    Distance:982.252,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"FOC",
    Distance:1470.75,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"HAK",
    Distance:1991.68,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"HET",
    Distance:352.072,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"TYN",
    To:"HET",
    Distance:352.072,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"HFE",
    Distance:788.52,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"HFE",
    Distance:788.52,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"HFE",
    Distance:788.52,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"HGH",
    Distance:1102.12,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"HGH",
    Distance:1102.12,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"HGH",
    Distance:1102.12,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"HGH",
    Distance:1102.12,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"HGH",
    Distance:1102.12,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"HKG",
    Distance:1721.03,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"HKG",
    Distance:1721.03,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"HRB",
    Distance:1427.29,
    Airport:"Air China"
}),
new Routes(
{
    From:"TYN",
    To:"HRB",
    Distance:1427.29,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"INC",
    Distance:584.699,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TYN",
    To:"INC",
    Distance:584.699,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"KHN",
    Distance:1033.15,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"KMG",
    Distance:1698.19,
    Airport:"Air China"
}),
new Routes(
{
    From:"TYN",
    To:"KMG",
    Distance:1698.19,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"TYN",
    To:"KMG",
    Distance:1698.19,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"KMG",
    Distance:1698.19,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"KWE",
    Distance:1360.95,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TYN",
    To:"KWL",
    Distance:1414.43,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"KWL",
    Distance:1414.43,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"TYN",
    To:"LHW",
    Distance:820.855,
    Airport:"Air China"
}),
new Routes(
{
    From:"TYN",
    To:"LHW",
    Distance:820.855,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TYN",
    To:"LHW",
    Distance:820.855,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"LHW",
    Distance:820.855,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"TYN",
    To:"LJG",
    Distance:1674.96,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"TYN",
    To:"MFM",
    Distance:1736.8,
    Airport:"Air China"
}),
new Routes(
{
    From:"TYN",
    To:"MFM",
    Distance:1736.8,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"TYN",
    To:"NKG",
    Distance:877.156,
    Airport:"Air China"
}),
new Routes(
{
    From:"TYN",
    To:"NKG",
    Distance:877.156,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"NKG",
    Distance:877.156,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"PEK",
    Distance:429.421,
    Airport:"Air China"
}),
new Routes(
{
    From:"TYN",
    To:"PEK",
    Distance:429.421,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"PEK",
    Distance:429.421,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"PUS",
    Distance:1484.18,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"TYN",
    To:"PVG",
    Distance:1115.76,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"PVG",
    Distance:1115.76,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"SHA",
    Distance:1079.55,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"SHA",
    Distance:1079.55,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"SHA",
    Distance:1079.55,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"SHA",
    Distance:1079.55,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"SHE",
    Distance:998.423,
    Airport:"Air China"
}),
new Routes(
{
    From:"TYN",
    To:"SHE",
    Distance:998.423,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"SHE",
    Distance:998.423,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"SHE",
    Distance:998.423,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"SYX",
    Distance:2184.59,
    Airport:"Air China"
}),
new Routes(
{
    From:"TYN",
    To:"SYX",
    Distance:2184.59,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"SZX",
    Distance:1683.69,
    Airport:"Air China"
}),
new Routes(
{
    From:"TYN",
    To:"SZX",
    Distance:1683.69,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"SZX",
    Distance:1683.69,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"SZX",
    Distance:1683.69,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"TAO",
    Distance:707.018,
    Airport:"Air China"
}),
new Routes(
{
    From:"TYN",
    To:"TAO",
    Distance:707.018,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"TAO",
    Distance:707.018,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"TAO",
    Distance:707.018,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"TNA",
    Distance:417.607,
    Airport:"Air China"
}),
new Routes(
{
    From:"TYN",
    To:"TNA",
    Distance:417.607,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"TPE",
    Distance:1626.4,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"TSA",
    Distance:1642.48,
    Airport:"Primaris Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"TSN",
    Distance:438.464,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"TYN",
    To:"TVS",
    Distance:514.951,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"TXN",
    Distance:1031.35,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"TXN",
    Distance:1031.35,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"URC",
    Distance:2214.42,
    Airport:"Air China"
}),
new Routes(
{
    From:"TYN",
    To:"URC",
    Distance:2214.42,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"URC",
    Distance:2214.42,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"WUH",
    Distance:787.717,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"WUH",
    Distance:787.717,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"XIY",
    Distance:505.823,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"XIY",
    Distance:505.823,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"XMN",
    Distance:1557.75,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"XMN",
    Distance:1557.75,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"TYN",
    To:"YCU",
    Distance:336.895,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"TYR",
    To:"DFW",
    Distance:164.63,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TYR",
    To:"DFW",
    Distance:164.63,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TYR",
    To:"IAH",
    Distance:263.563,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TYS",
    To:"ATL",
    Distance:244.998,
    Airport:"Air France"
}),
new Routes(
{
    From:"TYS",
    To:"ATL",
    Distance:244.998,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"TYS",
    To:"ATL",
    Distance:244.998,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"TYS",
    To:"ATL",
    Distance:244.998,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TYS",
    To:"ATL",
    Distance:244.998,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"TYS",
    To:"ATL",
    Distance:244.998,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"TYS",
    To:"CLT",
    Distance:283.993,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TYS",
    To:"CLT",
    Distance:283.993,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TYS",
    To:"DCA",
    Distance:701.581,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TYS",
    To:"DCA",
    Distance:701.581,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TYS",
    To:"DEN",
    Distance:1866.36,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"TYS",
    To:"DEN",
    Distance:1866.36,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TYS",
    To:"DFW",
    Distance:1239.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TYS",
    To:"DFW",
    Distance:1239.4,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TYS",
    To:"DTW",
    Distance:713.953,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TYS",
    To:"EWR",
    Distance:1014.28,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TYS",
    To:"FLL",
    Distance:1142.85,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"TYS",
    To:"IAD",
    Distance:674.396,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TYS",
    To:"IAH",
    Distance:1240.52,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TYS",
    To:"LGA",
    Distance:1040.67,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TYS",
    To:"LGA",
    Distance:1040.67,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TYS",
    To:"LGA",
    Distance:1040.67,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TYS",
    To:"MSP",
    Distance:1274.49,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"TYS",
    To:"ORD",
    Distance:764.553,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TYS",
    To:"ORD",
    Distance:764.553,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TYS",
    To:"ORD",
    Distance:764.553,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"TYS",
    To:"PGD",
    Distance:1006.72,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"TYS",
    To:"PHL",
    Distance:890.806,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"TYS",
    To:"PHL",
    Distance:890.806,
    Airport:"US Airways"
}),
new Routes(
{
    From:"TYS",
    To:"PIE",
    Distance:887.124,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"TYS",
    To:"SFB",
    Distance:823.759,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"TZA",
    To:"BZE",
    Distance:1.20355,
    Airport:"Midwest Airlines (Egypt)"
}),
new Routes(
{
    From:"TZA",
    To:"DGA",
    Distance:63.7171,
    Airport:"Midwest Airlines (Egypt)"
}),
new Routes(
{
    From:"TZA",
    To:"SPR",
    Distance:54.59,
    Airport:"Midwest Airlines (Egypt)"
}),
new Routes(
{
    From:"TZX",
    To:"ADA",
    Distance:592.275,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"TZX",
    To:"ADB",
    Distance:1121.47,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"TZX",
    To:"ADB",
    Distance:1121.47,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"TZX",
    To:"AER",
    Distance:273.309,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"TZX",
    To:"AYT",
    Distance:900.308,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"TZX",
    To:"ESB",
    Distance:581.864,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TZX",
    To:"IST",
    Distance:920.621,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"TZX",
    To:"IST",
    Distance:920.621,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"TZX",
    To:"SAW",
    Distance:879.769,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"TZX",
    To:"SAW",
    Distance:879.769,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"UAH",
    To:"AUQ",
    Distance:109.967,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"UAH",
    To:"NHV",
    Distance:75.98,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"UAH",
    To:"UAP",
    Distance:73.9574,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"UAK",
    To:"GOH",
    Distance:463.692,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"UAK",
    To:"JFR",
    Distance:242.493,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"UAK",
    To:"JJU",
    Distance:59.2246,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"UAK",
    To:"JNS",
    Distance:43.5341,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"UAK",
    To:"SFJ",
    Distance:699.041,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"UAP",
    To:"AUQ",
    Distance:125.829,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"UAP",
    To:"NHV",
    Distance:64.0103,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"UAP",
    To:"UAH",
    Distance:73.9574,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"UAQ",
    To:"AEP",
    Distance:988.985,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"UAQ",
    To:"MDZ",
    Distance:144.499,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"UAS",
    To:"NYK",
    Distance:86.7249,
    Airport:"Fly Air"
}),
new Routes(
{
    From:"UBA",
    To:"CNF",
    Distance:418.566,
    Airport:"Azul"
}),
new Routes(
{
    From:"UBA",
    To:"GRU",
    Distance:436.067,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"UBA",
    To:"UDI",
    Distance:101.837,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"UBA",
    To:"VCP",
    Distance:370.654,
    Airport:"Azul"
}),
new Routes(
{
    From:"UBJ",
    To:"HND",
    Distance:797.151,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"UBJ",
    To:"HND",
    Distance:797.151,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"UBJ",
    To:"ICN",
    Distance:587.152,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"UBP",
    To:"BKK",
    Distance:476.995,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"UBP",
    To:"DMK",
    Distance:482.332,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"UBP",
    To:"DMK",
    Distance:482.332,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"UCT",
    To:"SCW",
    Distance:231.9,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"UCT",
    To:"USK",
    Distance:345.043,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"UCT",
    To:"VKO",
    Distance:1251.27,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"UDI",
    To:"BSB",
    Distance:336.471,
    Airport:"Azul"
}),
new Routes(
{
    From:"UDI",
    To:"BSB",
    Distance:336.471,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"UDI",
    To:"CGH",
    Distance:552,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"UDI",
    To:"CGH",
    Distance:552,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"UDI",
    To:"CNF",
    Distance:454.56,
    Airport:"Azul"
}),
new Routes(
{
    From:"UDI",
    To:"CNF",
    Distance:454.56,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"UDI",
    To:"GRU",
    Distance:537.608,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"UDI",
    To:"GRU",
    Distance:537.608,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"UDI",
    To:"GRU",
    Distance:537.608,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"UDI",
    To:"GYN",
    Distance:271.555,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"UDI",
    To:"GYN",
    Distance:271.555,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"UDI",
    To:"PLU",
    Distance:461.183,
    Airport:"Azul"
}),
new Routes(
{
    From:"UDI",
    To:"RAO",
    Distance:254.739,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"UDI",
    To:"UBA",
    Distance:101.837,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"UDI",
    To:"VCP",
    Distance:472.423,
    Airport:"Azul"
}),
new Routes(
{
    From:"UDJ",
    To:"IEV",
    Distance:622.393,
    Airport:"Motor Sich"
}),
new Routes(
{
    From:"UDR",
    To:"BOM",
    Distance:623.878,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"UDR",
    To:"BOM",
    Distance:623.878,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"UDR",
    To:"BOM",
    Distance:623.878,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"UDR",
    To:"DEL",
    Distance:542.591,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"UDR",
    To:"DEL",
    Distance:542.591,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"UDR",
    To:"DEL",
    Distance:542.591,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"UDR",
    To:"DEL",
    Distance:542.591,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"UEL",
    To:"BEW",
    Distance:298.651,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"UEL",
    To:"MPM",
    Distance:1000.16,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"UEL",
    To:"TET",
    Distance:394.71,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"UEO",
    To:"OKA",
    Distance:94.7808,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"UET",
    To:"ISB",
    Distance:691.226,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"UET",
    To:"ISB",
    Distance:691.226,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"UET",
    To:"ISB",
    Distance:691.226,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"UET",
    To:"KHI",
    Distance:594.723,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"UET",
    To:"KHI",
    Distance:594.723,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"UET",
    To:"KHI",
    Distance:594.723,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"UET",
    To:"LHE",
    Distance:726.139,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"UET",
    To:"LHE",
    Distance:726.139,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"UET",
    To:"LHE",
    Distance:726.139,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"UET",
    To:"MHD",
    Distance:949.54,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"UET",
    To:"MUX",
    Distance:430.557,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"UET",
    To:"PZH",
    Distance:270.815,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"UET",
    To:"SHJ",
    Distance:1248.77,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"UET",
    To:"TUK",
    Distance:609.614,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"UFA",
    To:"DME",
    Distance:1147.16,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"UFA",
    To:"DME",
    Distance:1147.16,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"UFA",
    To:"DME",
    Distance:1147.16,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"UFA",
    To:"DME",
    Distance:1147.16,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"UFA",
    To:"DWC",
    Distance:3337.23,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"UFA",
    To:"DYU",
    Distance:2030.17,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"UFA",
    To:"GYD",
    Distance:1625.33,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"UFA",
    To:"IST",
    Distance:2497.95,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"UFA",
    To:"KZN",
    Distance:435.51,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"UFA",
    To:"LBD",
    Distance:1896.63,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"UFA",
    To:"LED",
    Distance:1637.38,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"UFA",
    To:"NOJ",
    Distance:1451.5,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"UFA",
    To:"NSK",
    Distance:2274.99,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"UFA",
    To:"NUX",
    Distance:1686.81,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"UFA",
    To:"NUX",
    Distance:1686.81,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"UFA",
    To:"NYM",
    Distance:1522.52,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"UFA",
    To:"PRG",
    Distance:2827.77,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"UFA",
    To:"SGC",
    Distance:1273.66,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"UFA",
    To:"SHJ",
    Distance:3250.24,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"UFA",
    To:"SVO",
    Distance:1176.48,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"UFA",
    To:"SVX",
    Distance:393.122,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"UFA",
    To:"TAS",
    Distance:1778.22,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"UFA",
    To:"TJM",
    Distance:657.402,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"UGC",
    To:"BHK",
    Distance:381.281,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"UGC",
    To:"DME",
    Distance:2254.53,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"UGC",
    To:"DME",
    Distance:2254.53,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"UGC",
    To:"LED",
    Distance:2899.32,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"UGC",
    To:"LED",
    Distance:2899.32,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"UGC",
    To:"TAS",
    Distance:720.985,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"UGC",
    To:"VOG",
    Distance:1502.56,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"UIB",
    To:"BOG",
    Distance:297.297,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"UIB",
    To:"BOG",
    Distance:297.297,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"UIB",
    To:"BOG",
    Distance:297.297,
    Airport:"SATENA"
}),
new Routes(
{
    From:"UIB",
    To:"CLO",
    Distance:240.522,
    Airport:"SATENA"
}),
new Routes(
{
    From:"UIB",
    To:"EOH",
    Distance:130.248,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"UIB",
    To:"EOH",
    Distance:130.248,
    Airport:"SATENA"
}),
new Routes(
{
    From:"UIH",
    To:"HAN",
    Distance:877.603,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"UIH",
    To:"SGN",
    Distance:434.731,
    Airport:"Royal Air Cambodge"
}),
new Routes(
{
    From:"UIH",
    To:"SGN",
    Distance:434.731,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"UIN",
    To:"STL",
    Distance:150.513,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"UIO",
    To:"ATL",
    Distance:3806.85,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"UIO",
    To:"BOG",
    Distance:722.832,
    Airport:"Aerolineas Galapagos (Aerogal)"
}),
new Routes(
{
    From:"UIO",
    To:"BOG",
    Distance:722.832,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"UIO",
    To:"BOG",
    Distance:722.832,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"UIO",
    To:"BOG",
    Distance:722.832,
    Airport:"TAME"
}),
new Routes(
{
    From:"UIO",
    To:"CLO",
    Distance:471.852,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"UIO",
    To:"CUE",
    Distance:310.536,
    Airport:"Aerolane"
}),
new Routes(
{
    From:"UIO",
    To:"CUE",
    Distance:310.536,
    Airport:"TAME"
}),
new Routes(
{
    From:"UIO",
    To:"ESM",
    Distance:177.545,
    Airport:"TAME"
}),
new Routes(
{
    From:"UIO",
    To:"GRU",
    Distance:4318.51,
    Airport:"TAME"
}),
new Routes(
{
    From:"UIO",
    To:"GYE",
    Distance:272.629,
    Airport:"Aerolane"
}),
new Routes(
{
    From:"UIO",
    To:"GYE",
    Distance:272.629,
    Airport:"Aerolineas Galapagos (Aerogal)"
}),
new Routes(
{
    From:"UIO",
    To:"GYE",
    Distance:272.629,
    Airport:"Air France"
}),
new Routes(
{
    From:"UIO",
    To:"GYE",
    Distance:272.629,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"UIO",
    To:"GYE",
    Distance:272.629,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"UIO",
    To:"GYE",
    Distance:272.629,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"UIO",
    To:"GYE",
    Distance:272.629,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"UIO",
    To:"GYE",
    Distance:272.629,
    Airport:"TAME"
}),
new Routes(
{
    From:"UIO",
    To:"HAV",
    Distance:2606.7,
    Airport:"TAME"
}),
new Routes(
{
    From:"UIO",
    To:"IAH",
    Distance:3795.54,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"UIO",
    To:"LGQ",
    Distance:182.087,
    Airport:"TAME"
}),
new Routes(
{
    From:"UIO",
    To:"LIM",
    Distance:1329.75,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"UIO",
    To:"LIM",
    Distance:1329.75,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"UIO",
    To:"LIM",
    Distance:1329.75,
    Airport:"TAME"
}),
new Routes(
{
    From:"UIO",
    To:"LOH",
    Distance:439.729,
    Airport:"TAME"
}),
new Routes(
{
    From:"UIO",
    To:"MAD",
    Distance:8749.18,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"UIO",
    To:"MAD",
    Distance:8749.18,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"UIO",
    To:"MDE",
    Distance:779.324,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"UIO",
    To:"MEC",
    Distance:259.495,
    Airport:"TAME"
}),
new Routes(
{
    From:"UIO",
    To:"MEX",
    Distance:3126.48,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"UIO",
    To:"MIA",
    Distance:2890.26,
    Airport:"Aerolane"
}),
new Routes(
{
    From:"UIO",
    To:"MIA",
    Distance:2890.26,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"UIO",
    To:"OCC",
    Distance:170.733,
    Airport:"Aerolineas Galapagos (Aerogal)"
}),
new Routes(
{
    From:"UIO",
    To:"OCC",
    Distance:170.733,
    Airport:"TAME"
}),
new Routes(
{
    From:"UIO",
    To:"PTY",
    Distance:1029.17,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"UIO",
    To:"SAL",
    Distance:1906.94,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"UIO",
    To:"TUA",
    Distance:136.745,
    Airport:"TAME"
}),
new Routes(
{
    From:"UIO",
    To:"XMS",
    Distance:243.413,
    Airport:"TAME"
}),
new Routes(
{
    From:"UIP",
    To:"ORY",
    Distance:489.349,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"UKA",
    To:"WIL",
    Distance:450.725,
    Airport:"Flightline"
}),
new Routes(
{
    From:"UKA",
    To:"WIL",
    Distance:450.725,
    Airport:"Fly Air"
}),
new Routes(
{
    From:"UKB",
    To:"CTS",
    Distance:1064.48,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"UKB",
    To:"CTS",
    Distance:1064.48,
    Airport:"Hokkaido International Airlines"
}),
new Routes(
{
    From:"UKB",
    To:"CTS",
    Distance:1064.48,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"UKB",
    To:"HND",
    Distance:426.876,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"UKB",
    To:"HND",
    Distance:426.876,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"UKB",
    To:"IBR",
    Distance:500.936,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"UKB",
    To:"KOJ",
    Distance:523.886,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"UKB",
    To:"NGS",
    Distance:526.508,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"UKB",
    To:"OKA",
    Distance:1185.77,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"UKB",
    To:"OKA",
    Distance:1185.77,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"UKB",
    To:"SDJ",
    Distance:641.473,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"UKB",
    To:"YGJ",
    Distance:204.58,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"UKK",
    To:"ALA",
    Distance:851.205,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"UKK",
    To:"ALA",
    Distance:851.205,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"UKK",
    To:"DME",
    Distance:3007.23,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"UKK",
    To:"KGF",
    Distance:657.525,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"UKK",
    To:"PLX",
    Distance:164.621,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"UKK",
    To:"TSE",
    Distance:786.362,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"UKK",
    To:"TSE",
    Distance:786.362,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"UKS",
    To:"DME",
    Distance:1230.54,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"UKS",
    To:"KBP",
    Distance:659.983,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"UKX",
    To:"IKT",
    Distance:516.608,
    Airport:"Cargoitalia"
}),
new Routes(
{
    From:"UKX",
    To:"IKT",
    Distance:516.608,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"ULB",
    To:"CCV",
    Distance:39.0536,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"ULB",
    To:"PBJ",
    Distance:12.1086,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"ULB",
    To:"VLI",
    Distance:151.979,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"ULG",
    To:"ULN",
    Distance:1247.25,
    Airport:"Far Eastern Air Transport"
}),
new Routes(
{
    From:"ULH",
    To:"MED",
    Distance:293.484,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"ULH",
    To:"RUH",
    Distance:899.445,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"ULK",
    To:"IKT",
    Distance:1134.71,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"ULK",
    To:"IKT",
    Distance:1134.71,
    Airport:"Cargoitalia"
}),
new Routes(
{
    From:"ULK",
    To:"IKT",
    Distance:1134.71,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"ULK",
    To:"YKS",
    Distance:807.871,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"ULK",
    To:"YKS",
    Distance:807.871,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"ULK",
    To:"YKS",
    Distance:807.871,
    Airport:"Piedmont Airlines (1948-1989)"
}),
new Routes(
{
    From:"ULN",
    To:"BKK",
    Distance:3839.24,
    Airport:"Homer Air"
}),
new Routes(
{
    From:"ULN",
    To:"BYN",
    Distance:496.051,
    Airport:"Homer Air"
}),
new Routes(
{
    From:"ULN",
    To:"COQ",
    Distance:587.02,
    Airport:"Far Eastern Air Transport"
}),
new Routes(
{
    From:"ULN",
    To:"COQ",
    Distance:587.02,
    Airport:"Homer Air"
}),
new Routes(
{
    From:"ULN",
    To:"DLZ",
    Distance:506.277,
    Airport:"Homer Air"
}),
new Routes(
{
    From:"ULN",
    To:"FRU",
    Distance:2554.45,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ULN",
    To:"HKG",
    Distance:2909.78,
    Airport:"Homer Air"
}),
new Routes(
{
    From:"ULN",
    To:"HKG",
    Distance:2909.78,
    Airport:"MIAT Mongolian Airlines"
}),
new Routes(
{
    From:"ULN",
    To:"HVD",
    Distance:1126.83,
    Airport:"Homer Air"
}),
new Routes(
{
    From:"ULN",
    To:"ICN",
    Distance:1970.99,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"ULN",
    To:"ICN",
    Distance:1970.99,
    Airport:"MIAT Mongolian Airlines"
}),
new Routes(
{
    From:"ULN",
    To:"MXV",
    Distance:528.823,
    Airport:"Far Eastern Air Transport"
}),
new Routes(
{
    From:"ULN",
    To:"MXV",
    Distance:528.823,
    Airport:"Homer Air"
}),
new Routes(
{
    From:"ULN",
    To:"NRT",
    Distance:3061.21,
    Airport:"MIAT Mongolian Airlines"
}),
new Routes(
{
    From:"ULN",
    To:"PEK",
    Distance:1165.46,
    Airport:"Air China"
}),
new Routes(
{
    From:"ULN",
    To:"PEK",
    Distance:1165.46,
    Airport:"MIAT Mongolian Airlines"
}),
new Routes(
{
    From:"ULN",
    To:"SVO",
    Distance:4635.16,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ULN",
    To:"SVO",
    Distance:4635.16,
    Airport:"MIAT Mongolian Airlines"
}),
new Routes(
{
    From:"ULN",
    To:"ULG",
    Distance:1247.25,
    Airport:"Far Eastern Air Transport"
}),
new Routes(
{
    From:"ULN",
    To:"ULO",
    Distance:1097.28,
    Airport:"Far Eastern Air Transport"
}),
new Routes(
{
    From:"ULO",
    To:"ULN",
    Distance:1097.28,
    Airport:"Far Eastern Air Transport"
}),
new Routes(
{
    From:"ULP",
    To:"CTL",
    Distance:201.164,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"ULP",
    To:"WNR",
    Distance:207.111,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"ULV",
    To:"DME",
    Distance:672.274,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"ULV",
    To:"SVX",
    Distance:836.943,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"UMD",
    To:"JQA",
    Distance:3397.8,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"UME",
    To:"ALC",
    Distance:3155.49,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"UME",
    To:"ARN",
    Distance:476.801,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"UME",
    To:"ARN",
    Distance:476.801,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"UME",
    To:"BMA",
    Distance:508.659,
    Airport:"Finnair"
}),
new Routes(
{
    From:"UME",
    To:"BMA",
    Distance:508.659,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"UME",
    To:"TXL",
    Distance:1312.72,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"UNG",
    To:"DAU",
    Distance:391.738,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"UNG",
    To:"HGU",
    Distance:334.957,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"UNG",
    To:"POM",
    Distance:750.955,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"UNG",
    To:"POM",
    Distance:750.955,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"UNG",
    To:"TBG",
    Distance:94.3968,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"UNK",
    To:"ANC",
    Distance:629.8,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"UNK",
    To:"ANC",
    Distance:629.8,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"UNK",
    To:"ANC",
    Distance:629.8,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"UNK",
    To:"OME",
    Distance:235.256,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"UNK",
    To:"SKK",
    Distance:57.5062,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"UNK",
    To:"SKK",
    Distance:57.5062,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"UNK",
    To:"SMK",
    Distance:78.3513,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"UNK",
    To:"SMK",
    Distance:78.3513,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"UNN",
    To:"DMK",
    Distance:509.672,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"UPG",
    To:"AMQ",
    Distance:958.109,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"AMQ",
    Distance:958.109,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"AMQ",
    Distance:958.109,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"UPG",
    To:"BIK",
    Distance:1887.36,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"BIK",
    Distance:1887.36,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"UPG",
    To:"BPN",
    Distance:514.854,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"BPN",
    Distance:514.854,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"BPN",
    Distance:514.854,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"BPN",
    Distance:514.854,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"UPG",
    To:"CGK",
    Distance:1432.22,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"CGK",
    Distance:1432.22,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"CGK",
    Distance:1432.22,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"CGK",
    Distance:1432.22,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"UPG",
    To:"DJJ",
    Distance:2341.84,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"DJJ",
    Distance:2341.84,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"DJJ",
    Distance:2341.84,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"UPG",
    To:"DPS",
    Distance:634.397,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"DPS",
    Distance:634.397,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"UPG",
    To:"DPS",
    Distance:634.397,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"GTO",
    Distance:731.803,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"GTO",
    Distance:731.803,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"GTO",
    Distance:731.803,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"UPG",
    To:"JOG",
    Distance:1052.48,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"JOG",
    Distance:1052.48,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"KBU",
    Distance:424.084,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"KDI",
    Distance:335.648,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"KDI",
    Distance:335.648,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"KDI",
    Distance:335.648,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"UPG",
    To:"KUL",
    Distance:2163.99,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"UPG",
    To:"LOP",
    Distance:547.458,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"LUW",
    Distance:572.446,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"LUW",
    Distance:572.446,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"UPG",
    To:"MDC",
    Distance:946.815,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"MDC",
    Distance:946.815,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"MJU",
    Distance:281.564,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"MKW",
    Distance:1674.71,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"UPG",
    To:"PLW",
    Distance:462.379,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"PLW",
    Distance:462.379,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"PLW",
    Distance:462.379,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"UPG",
    To:"PSJ",
    Distance:423.401,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"PUM",
    Distance:248.593,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"SIN",
    Distance:1869.61,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"SIN",
    Distance:1869.61,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"UPG",
    To:"SIN",
    Distance:1869.61,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"SOQ",
    Distance:1364.01,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"SOQ",
    Distance:1364.01,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"UPG",
    To:"SUB",
    Distance:791.159,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"SUB",
    Distance:791.159,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"UPG",
    To:"SUB",
    Distance:791.159,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"SUB",
    Distance:791.159,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"UPG",
    To:"TIM",
    Distance:1921.49,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"UPG",
    To:"TRK",
    Distance:958.537,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"TTE",
    Distance:1088.68,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"UPG",
    To:"TTE",
    Distance:1088.68,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"UPG",
    To:"TTE",
    Distance:1088.68,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"UPN",
    To:"LAX",
    Distance:2287.54,
    Airport:"Volaris"
}),
new Routes(
{
    From:"UPN",
    To:"TIJ",
    Distance:2084.46,
    Airport:"Volaris"
}),
new Routes(
{
    From:"URA",
    To:"GUW",
    Distance:448.448,
    Airport:"Flightlink Tanzania"
}),
new Routes(
{
    From:"URA",
    To:"SCO",
    Distance:811.401,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"URA",
    To:"TSE",
    Distance:1387.43,
    Airport:"Flightlink Tanzania"
}),
new Routes(
{
    From:"URC",
    To:"AAT",
    Distance:443.077,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"URC",
    To:"AAT",
    Distance:443.077,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"AKU",
    Distance:657.144,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"URC",
    To:"AKU",
    Distance:657.144,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"AKU",
    Distance:657.144,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"ALA",
    Distance:841.456,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"URC",
    To:"ALA",
    Distance:841.456,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"ASB",
    Distance:2517.72,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"BAV",
    Distance:1885.05,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CAN",
    Distance:3277.8,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CAN",
    Distance:3277.8,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CAN",
    Distance:3277.8,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CGO",
    Distance:2485.6,
    Airport:"Air China"
}),
new Routes(
{
    From:"URC",
    To:"CGO",
    Distance:2485.6,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"URC",
    To:"CGO",
    Distance:2485.6,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CGO",
    Distance:2485.6,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CGO",
    Distance:2485.6,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CGO",
    Distance:2485.6,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CGO",
    Distance:2485.6,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CGO",
    Distance:2485.6,
    Airport:"West Air China"
}),
new Routes(
{
    From:"URC",
    To:"CGO",
    Distance:2485.6,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CKG",
    Distance:2313.13,
    Airport:"Air China"
}),
new Routes(
{
    From:"URC",
    To:"CKG",
    Distance:2313.13,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CKG",
    Distance:2313.13,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CKG",
    Distance:2313.13,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CKG",
    Distance:2313.13,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CKG",
    Distance:2313.13,
    Airport:"West Air China"
}),
new Routes(
{
    From:"URC",
    To:"CSX",
    Distance:2879.75,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CSX",
    Distance:2879.75,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CTU",
    Distance:2071.5,
    Airport:"Air China"
}),
new Routes(
{
    From:"URC",
    To:"CTU",
    Distance:2071.5,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CTU",
    Distance:2071.5,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CTU",
    Distance:2071.5,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"URC",
    To:"CTU",
    Distance:2071.5,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"DNH",
    Distance:717.265,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"DNH",
    Distance:717.265,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"URC",
    To:"DSN",
    Distance:1914.82,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"URC",
    To:"DYU",
    Distance:1665.26,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"DYU",
    Distance:1665.26,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"URC",
    To:"DYU",
    Distance:1665.26,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"URC",
    To:"FRU",
    Distance:1051.67,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"URC",
    To:"FRU",
    Distance:1051.67,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"FRU",
    Distance:1051.67,
    Airport:"Comores Airlines"
}),
new Routes(
{
    From:"URC",
    To:"GYD",
    Distance:3080.63,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"HET",
    Distance:2021.12,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"HGH",
    Distance:3266.06,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"HGH",
    Distance:3266.06,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"URC",
    To:"HMI",
    Distance:514.406,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"URC",
    To:"HMI",
    Distance:514.406,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"HMI",
    Distance:514.406,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"HTN",
    Distance:997.882,
    Airport:"Air China"
}),
new Routes(
{
    From:"URC",
    To:"HTN",
    Distance:997.882,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"URC",
    To:"HTN",
    Distance:997.882,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"HTN",
    Distance:997.882,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"HTN",
    Distance:997.882,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"URC",
    To:"HTN",
    Distance:997.882,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"URC",
    To:"IKA",
    Distance:3220.24,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"INC",
    Distance:1659.51,
    Airport:"Air China"
}),
new Routes(
{
    From:"URC",
    To:"INC",
    Distance:1659.51,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"INC",
    Distance:1659.51,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"INC",
    Distance:1659.51,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"URC",
    To:"ISB",
    Distance:1687.39,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"IST",
    Distance:4722.07,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"KCA",
    Distance:439.475,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"URC",
    To:"KCA",
    Distance:439.475,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"KHG",
    Distance:1065.97,
    Airport:"Air China"
}),
new Routes(
{
    From:"URC",
    To:"KHG",
    Distance:1065.97,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"URC",
    To:"KHG",
    Distance:1065.97,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"KHG",
    Distance:1065.97,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"KHG",
    Distance:1065.97,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"KHG",
    Distance:1065.97,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"URC",
    To:"KHG",
    Distance:1065.97,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"URC",
    To:"KHG",
    Distance:1065.97,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"URC",
    To:"KHG",
    Distance:1065.97,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"KRL",
    Distance:269.057,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"URC",
    To:"KRL",
    Distance:269.057,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"KRL",
    Distance:269.057,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"KRL",
    Distance:269.057,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"KRY",
    Distance:279.266,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"URC",
    To:"KRY",
    Distance:279.266,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"KWE",
    Distance:2596.7,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"LBD",
    Distance:1520.7,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"LHW",
    Distance:1620.54,
    Airport:"Air China"
}),
new Routes(
{
    From:"URC",
    To:"LHW",
    Distance:1620.54,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"URC",
    To:"LHW",
    Distance:1620.54,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"LHW",
    Distance:1620.54,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"LHW",
    Distance:1620.54,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"LHW",
    Distance:1620.54,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"URC",
    To:"LHW",
    Distance:1620.54,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"URC",
    To:"LHW",
    Distance:1620.54,
    Airport:"West Air China"
}),
new Routes(
{
    From:"URC",
    To:"NKG",
    Distance:3045.81,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"NLT",
    Distance:333.435,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"URC",
    To:"NLT",
    Distance:333.435,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"OSS",
    Distance:1260.66,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"URC",
    To:"OSS",
    Distance:1260.66,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"OVB",
    Distance:1282.37,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"OVB",
    Distance:1282.37,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"OVB",
    Distance:1282.37,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"URC",
    To:"PEK",
    Distance:2430.02,
    Airport:"Air China"
}),
new Routes(
{
    From:"URC",
    To:"PEK",
    Distance:2430.02,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"PEK",
    Distance:2430.02,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"PEK",
    Distance:2430.02,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"URC",
    To:"PVG",
    Distance:3312.28,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"PVG",
    Distance:3312.28,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"SHA",
    Distance:3272.33,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"SHA",
    Distance:3272.33,
    Airport:"China SSS"
}),
new Routes(
{
    From:"URC",
    To:"SHA",
    Distance:3272.33,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"SHA",
    Distance:3272.33,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"SHA",
    Distance:3272.33,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"URC",
    To:"SHA",
    Distance:3272.33,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"URC",
    To:"SJW",
    Distance:2353.57,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"SJW",
    Distance:2353.57,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"URC",
    To:"SVO",
    Distance:3728.65,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"URC",
    To:"SVO",
    Distance:3728.65,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"SZX",
    Distance:3375.76,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"TAS",
    Distance:1515.09,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"TAS",
    Distance:1515.09,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"URC",
    To:"TBS",
    Distance:3440.2,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"TCG",
    Distance:446.1,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"URC",
    To:"TCG",
    Distance:446.1,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"TNA",
    Distance:2621.99,
    Airport:"Air China"
}),
new Routes(
{
    From:"URC",
    To:"TNA",
    Distance:2621.99,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"TNA",
    Distance:2621.99,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"URC",
    To:"TNA",
    Distance:2621.99,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"URC",
    To:"TPE",
    Distance:3695.27,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"URC",
    To:"TPE",
    Distance:3695.27,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"TSE",
    Distance:1435.37,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"URC",
    To:"TSE",
    Distance:1435.37,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"TSN",
    Distance:2528.71,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"URC",
    To:"TYN",
    Distance:2214.42,
    Airport:"Air China"
}),
new Routes(
{
    From:"URC",
    To:"TYN",
    Distance:2214.42,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"TYN",
    Distance:2214.42,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"URC",
    To:"WUH",
    Distance:2758.5,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"WUH",
    Distance:2758.5,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"WUH",
    Distance:2758.5,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"URC",
    To:"WUH",
    Distance:2758.5,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"URC",
    To:"XIY",
    Distance:2105.2,
    Airport:"Air China"
}),
new Routes(
{
    From:"URC",
    To:"XIY",
    Distance:2105.2,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"XIY",
    Distance:2105.2,
    Airport:"China SSS"
}),
new Routes(
{
    From:"URC",
    To:"XIY",
    Distance:2105.2,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"XIY",
    Distance:2105.2,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"XIY",
    Distance:2105.2,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"URC",
    To:"XIY",
    Distance:2105.2,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"URC",
    To:"XIY",
    Distance:2105.2,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"URC",
    To:"XIY",
    Distance:2105.2,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"URC",
    To:"XNN",
    Distance:1481.02,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"URC",
    To:"XNN",
    Distance:1481.02,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"YCU",
    Distance:2237.24,
    Airport:"Air China"
}),
new Routes(
{
    From:"URC",
    To:"YCU",
    Distance:2237.24,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"URC",
    To:"YIN",
    Distance:491.919,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"URC",
    To:"YIN",
    Distance:491.919,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URC",
    To:"YIW",
    Distance:3295.42,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"URE",
    To:"TLL",
    Distance:187.608,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"URG",
    To:"RIA",
    Distance:323.505,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"URJ",
    To:"HMA",
    Distance:254.403,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"URJ",
    To:"SVX",
    Distance:440.642,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"URJ",
    To:"TJM",
    Distance:324.884,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"URS",
    To:"VKO",
    Distance:431.794,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"URT",
    To:"BKK",
    Distance:535.406,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"URT",
    To:"DMK",
    Distance:555.15,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"URT",
    To:"DMK",
    Distance:555.15,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"URT",
    To:"KUL",
    Distance:765.084,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"URY",
    To:"JED",
    Distance:1098.11,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"URY",
    To:"RUH",
    Distance:1168.44,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"USH",
    To:"AEP",
    Distance:2381.38,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"USH",
    To:"AEP",
    Distance:2381.38,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"USH",
    To:"EZE",
    Distance:2350.25,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"USH",
    To:"FTE",
    Distance:567.2,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"USK",
    To:"ARH",
    Distance:802.028,
    Airport:"Aeroflot-Nord"
}),
new Routes(
{
    From:"USK",
    To:"UCT",
    Distance:345.043,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"USM",
    To:"BKK",
    Distance:465.617,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"USM",
    To:"BKK",
    Distance:465.617,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"USM",
    To:"CNX",
    Distance:1031.93,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"USM",
    To:"HKG",
    Distance:2048.22,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"USM",
    To:"HKG",
    Distance:2048.22,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"USM",
    To:"HKT",
    Distance:249.447,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"USM",
    To:"KBV",
    Distance:199.936,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"USM",
    To:"KUL",
    Distance:777.971,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"USM",
    To:"KUL",
    Distance:777.971,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"USM",
    To:"PEN",
    Distance:473.243,
    Airport:"Firefly"
}),
new Routes(
{
    From:"USM",
    To:"PEN",
    Distance:473.243,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"USM",
    To:"SIN",
    Distance:1009.96,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"USM",
    To:"SIN",
    Distance:1009.96,
    Airport:"Qantas"
}),
new Routes(
{
    From:"USM",
    To:"SIN",
    Distance:1009.96,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"USM",
    To:"SIN",
    Distance:1009.96,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"USM",
    To:"SZB",
    Distance:732.222,
    Airport:"Firefly"
}),
new Routes(
{
    From:"USM",
    To:"SZB",
    Distance:732.222,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"USM",
    To:"UTP",
    Distance:363.148,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"USN",
    To:"CJU",
    Distance:349.461,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"USN",
    To:"GMP",
    Distance:316.26,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"USN",
    To:"GMP",
    Distance:316.26,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"UST",
    To:"TTN",
    Distance:1290.76,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"USU",
    To:"CEB",
    Distance:468.727,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"USU",
    To:"MNL",
    Distance:283.476,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"USU",
    To:"MNL",
    Distance:283.476,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"UTH",
    To:"BKK",
    Distance:466.417,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"UTH",
    To:"BKK",
    Distance:466.417,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"UTH",
    To:"CNX",
    Distance:432.524,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"UTH",
    To:"DMK",
    Distance:451.383,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"UTH",
    To:"DMK",
    Distance:451.383,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"UTH",
    To:"HKT",
    Distance:1139.21,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"UTN",
    To:"CPT",
    Distance:668.48,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"UTN",
    To:"JNB",
    Distance:734.601,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"UTP",
    To:"HKT",
    Distance:586.725,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"UTP",
    To:"USM",
    Distance:363.148,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"UTT",
    To:"JNB",
    Distance:602.867,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"UUA",
    To:"DME",
    Distance:951.444,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"UUA",
    To:"LED",
    Distance:1464.06,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"UUA",
    To:"NJC",
    Distance:1557.17,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"UUA",
    To:"NJC",
    Distance:1557.17,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"UUD",
    To:"DME",
    Distance:4410.91,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"UUD",
    To:"DME",
    Distance:4410.91,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"UUD",
    To:"HTA",
    Distance:403.075,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"UUD",
    To:"IKT",
    Distance:214.701,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"UUD",
    To:"KHV",
    Distance:1997.2,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"UUD",
    To:"KJA",
    Distance:1089.2,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"UUD",
    To:"NZH",
    Distance:739.357,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"UUD",
    To:"OVB",
    Distance:1671.66,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"UUD",
    To:"PEK",
    Distance:1480.83,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"UUD",
    To:"SVO",
    Distance:4412.73,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"UUD",
    To:"YKS",
    Distance:1756.75,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"UUS",
    To:"BVV",
    Distance:437.957,
    Airport:"Sat Airlines"
}),
new Routes(
{
    From:"UUS",
    To:"CTS",
    Distance:464.475,
    Airport:"Sat Airlines"
}),
new Routes(
{
    From:"UUS",
    To:"DEE",
    Distance:424.593,
    Airport:"Sat Airlines"
}),
new Routes(
{
    From:"UUS",
    To:"DME",
    Distance:6658.53,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"UUS",
    To:"HRB",
    Distance:1271.48,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"UUS",
    To:"HRB",
    Distance:1271.48,
    Airport:"Sat Airlines"
}),
new Routes(
{
    From:"UUS",
    To:"ICN",
    Distance:1695.38,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"UUS",
    To:"ICN",
    Distance:1695.38,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"UUS",
    To:"KHV",
    Distance:591.822,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"UUS",
    To:"KHV",
    Distance:591.822,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"UUS",
    To:"NRT",
    Distance:1251.99,
    Airport:"Sat Airlines"
}),
new Routes(
{
    From:"UUS",
    To:"OHH",
    Distance:744.57,
    Airport:"Sat Airlines"
}),
new Routes(
{
    From:"UUS",
    To:"SVO",
    Distance:6641.55,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"UUS",
    To:"VVO",
    Distance:914.28,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"UUS",
    To:"VVO",
    Distance:914.28,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"UVE",
    To:"GEA",
    Distance:180.18,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"UVE",
    To:"LIF",
    Distance:70.972,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"UVF",
    To:"ANU",
    Distance:389.018,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"UVF",
    To:"ATL",
    Distance:3241.61,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"UVF",
    To:"BGI",
    Distance:174.089,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"UVF",
    To:"CLT",
    Distance:3116.51,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"UVF",
    To:"CLT",
    Distance:3116.51,
    Airport:"US Airways"
}),
new Routes(
{
    From:"UVF",
    To:"EWR",
    Distance:3261.24,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"UVF",
    To:"GND",
    Distance:212.426,
    Airport:"British Airways"
}),
new Routes(
{
    From:"UVF",
    To:"GND",
    Distance:212.426,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"UVF",
    To:"GND",
    Distance:212.426,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"UVF",
    To:"JFK",
    Distance:3241.27,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"UVF",
    To:"LGW",
    Distance:6799.55,
    Airport:"British Airways"
}),
new Routes(
{
    From:"UVF",
    To:"LGW",
    Distance:6799.55,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"UVF",
    To:"LGW",
    Distance:6799.55,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"UVF",
    To:"MIA",
    Distance:2422.36,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"UVF",
    To:"MIA",
    Distance:2422.36,
    Airport:"US Airways"
}),
new Routes(
{
    From:"UVF",
    To:"POS",
    Distance:351.406,
    Airport:"British Airways"
}),
new Routes(
{
    From:"UVF",
    To:"POS",
    Distance:351.406,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"UVF",
    To:"YYZ",
    Distance:3775.22,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"UVF",
    To:"YYZ",
    Distance:3775.22,
    Airport:"WestJet"
}),
new Routes(
{
    From:"UYL",
    To:"KRT",
    Distance:909.478,
    Airport:"ALAK"
}),
new Routes(
{
    From:"UYL",
    To:"KRT",
    Distance:909.478,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"UYN",
    To:"CGO",
    Distance:555.881,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"UYN",
    To:"CTU",
    Distance:1005.81,
    Airport:"Air China"
}),
new Routes(
{
    From:"UYN",
    To:"CTU",
    Distance:1005.81,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"UYN",
    To:"KMG",
    Distance:1616.42,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"UYN",
    To:"NAY",
    Distance:598.977,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"UYN",
    To:"NAY",
    Distance:598.977,
    Airport:"China United"
}),
new Routes(
{
    From:"UYN",
    To:"PEK",
    Distance:623.954,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"UYN",
    To:"TSN",
    Distance:667.474,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"UYN",
    To:"XIY",
    Distance:433.943,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"UYN",
    To:"XIY",
    Distance:433.943,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"UYN",
    To:"XIY",
    Distance:433.943,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"UYN",
    To:"XIY",
    Distance:433.943,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"UYU",
    To:"LPB",
    Distance:462.347,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"VAA",
    To:"ARN",
    Distance:429.721,
    Airport:"Air China"
}),
new Routes(
{
    From:"VAA",
    To:"ARN",
    Distance:429.721,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"VAA",
    To:"ARN",
    Distance:429.721,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"VAA",
    To:"ARN",
    Distance:429.721,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"VAA",
    To:"HEL",
    Distance:347.594,
    Airport:"Finnair"
}),
new Routes(
{
    From:"VAI",
    To:"MAG",
    Distance:570.585,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"VAI",
    To:"POM",
    Distance:995.187,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"VAI",
    To:"WWK",
    Distance:280.705,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"VAK",
    To:"HPB",
    Distance:29.8639,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"VAK",
    To:"SCM",
    Distance:34.6412,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"VAN",
    To:"ADA",
    Distance:726.923,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"VAN",
    To:"ESB",
    Distance:907.891,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"VAN",
    To:"IST",
    Distance:1270.96,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"VAN",
    To:"SAW",
    Distance:1228.6,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"VAN",
    To:"SAW",
    Distance:1228.6,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"VAO",
    To:"HIR",
    Distance:251.323,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"VAR",
    To:"BEG",
    Distance:626.008,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"VAR",
    To:"BOJ",
    Distance:77.8693,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"VAR",
    To:"BRU",
    Distance:1951.5,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"VAR",
    To:"DME",
    Distance:1534.97,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"VAR",
    To:"LTN",
    Distance:2304.73,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VAR",
    To:"LUX",
    Distance:1794.46,
    Airport:"Luxair"
}),
new Routes(
{
    From:"VAR",
    To:"SOF",
    Distance:364.45,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"VAR",
    To:"SVO",
    Distance:1572.82,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"VAR",
    To:"VIE",
    Distance:1027.56,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VAS",
    To:"ADB",
    Distance:857.979,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"VAS",
    To:"IST",
    Distance:696.838,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"VAS",
    To:"SAW",
    Distance:654.478,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"VAS",
    To:"SAW",
    Distance:654.478,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"VAW",
    To:"BJF",
    Distance:57.1539,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"VAW",
    To:"KKN",
    Distance:82.5718,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"VAW",
    To:"VDS",
    Distance:55.5558,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"VBV",
    To:"SUV",
    Distance:274.981,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"VBY",
    To:"ARN",
    Distance:222.56,
    Airport:"NextJet"
}),
new Routes(
{
    From:"VBY",
    To:"ARN",
    Distance:222.56,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"VBY",
    To:"BMA",
    Distance:189.556,
    Airport:"Golden Air"
}),
new Routes(
{
    From:"VBY",
    To:"BMA",
    Distance:189.556,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"VBY",
    To:"GSE",
    Distance:384.632,
    Airport:"Golden Air"
}),
new Routes(
{
    From:"VBY",
    To:"GSE",
    Distance:384.632,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"VBY",
    To:"MMX",
    Distance:385.802,
    Airport:"Golden Air"
}),
new Routes(
{
    From:"VBY",
    To:"MMX",
    Distance:385.802,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"VCA",
    To:"HAN",
    Distance:1238.32,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"VCA",
    To:"PQC",
    Distance:191.618,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"VCA",
    To:"VCS",
    Distance:181.228,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"VCE",
    To:"AMS",
    Distance:936.914,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"AMS",
    Distance:936.914,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"VCE",
    To:"AMS",
    Distance:936.914,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"VCE",
    To:"ARN",
    Distance:1615.99,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"VCE",
    To:"ATH",
    Distance:1275.95,
    Airport:"Air One"
}),
new Routes(
{
    From:"VCE",
    To:"ATH",
    Distance:1275.95,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"BCN",
    Distance:951.753,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"VCE",
    To:"BCN",
    Distance:951.753,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VCE",
    To:"BHX",
    Distance:1283.11,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"VCE",
    To:"BIO",
    Distance:1234.99,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"VCE",
    To:"BOD",
    Distance:1026.08,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"VCE",
    To:"BRI",
    Distance:602.22,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"VCE",
    To:"BRU",
    Distance:835.759,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"VCE",
    To:"BRU",
    Distance:835.759,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"VCE",
    To:"BRU",
    Distance:835.759,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VCE",
    To:"BSL",
    Distance:435.495,
    Airport:"easyJet"
}),
new Routes(
{
    From:"VCE",
    To:"CDG",
    Distance:835.345,
    Airport:"Air France"
}),
new Routes(
{
    From:"VCE",
    To:"CDG",
    Distance:835.345,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"CDG",
    Distance:835.345,
    Airport:"easyJet"
}),
new Routes(
{
    From:"VCE",
    To:"CGN",
    Distance:709.841,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"VCE",
    To:"CPH",
    Distance:1124.68,
    Airport:"Air One"
}),
new Routes(
{
    From:"VCE",
    To:"CPH",
    Distance:1124.68,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"CPH",
    Distance:1124.68,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"VCE",
    To:"CPH",
    Distance:1124.68,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"VCE",
    To:"CTA",
    Distance:921.841,
    Airport:"Air One"
}),
new Routes(
{
    From:"VCE",
    To:"CTA",
    Distance:921.841,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"VCE",
    To:"CTA",
    Distance:921.841,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"DBV",
    Distance:574.949,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"VCE",
    To:"DOH",
    Distance:4147.4,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"VCE",
    To:"DOH",
    Distance:4147.4,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"VCE",
    To:"DUB",
    Distance:1600.64,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"VCE",
    To:"DUS",
    Distance:763.498,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VCE",
    To:"DUS",
    Distance:763.498,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"VCE",
    To:"DUS",
    Distance:763.498,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"VCE",
    To:"DXB",
    Distance:4430.41,
    Airport:"Emirates"
}),
new Routes(
{
    From:"VCE",
    To:"EDI",
    Distance:1597.06,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"VCE",
    To:"EIN",
    Distance:836.761,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"VCE",
    To:"FCO",
    Distance:411.591,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"FRA",
    Distance:577.55,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VCE",
    To:"GVA",
    Distance:490.027,
    Airport:"easyJet"
}),
new Routes(
{
    From:"VCE",
    To:"HAJ",
    Distance:797.409,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"VCE",
    To:"HAM",
    Distance:919.274,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"VCE",
    To:"HAM",
    Distance:919.274,
    Airport:"easyJet"
}),
new Routes(
{
    From:"VCE",
    To:"IST",
    Distance:1422.21,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"VCE",
    To:"JFK",
    Distance:6668.25,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"JFK",
    Distance:6668.25,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"VCE",
    To:"JTR",
    Distance:1493.32,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"VCE",
    To:"KIV",
    Distance:1282.91,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"VCE",
    To:"KIV",
    Distance:1282.91,
    Airport:"Carpatair"
}),
new Routes(
{
    From:"VCE",
    To:"LBA",
    Distance:1366.83,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"VCE",
    To:"LCY",
    Distance:1122.68,
    Airport:"British Airways"
}),
new Routes(
{
    From:"VCE",
    To:"LED",
    Distance:1982.95,
    Airport:"Air One"
}),
new Routes(
{
    From:"VCE",
    To:"LED",
    Distance:1982.95,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"LGW",
    Distance:1117.26,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"VCE",
    To:"LGW",
    Distance:1117.26,
    Airport:"British Airways"
}),
new Routes(
{
    From:"VCE",
    To:"LGW",
    Distance:1117.26,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"VCE",
    To:"LGW",
    Distance:1117.26,
    Airport:"easyJet"
}),
new Routes(
{
    From:"VCE",
    To:"LHR",
    Distance:1151.79,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"VCE",
    To:"LHR",
    Distance:1151.79,
    Airport:"British Airways"
}),
new Routes(
{
    From:"VCE",
    To:"LIL",
    Distance:887.955,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"VCE",
    To:"LIS",
    Distance:1915.34,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"LIS",
    Distance:1915.34,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"VCE",
    To:"LMP",
    Distance:1112.99,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"VCE",
    To:"LTN",
    Distance:1169.2,
    Airport:"easyJet"
}),
new Routes(
{
    From:"VCE",
    To:"LYS",
    Distance:565.088,
    Airport:"Air France"
}),
new Routes(
{
    From:"VCE",
    To:"LYS",
    Distance:565.088,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"VCE",
    To:"LYS",
    Distance:565.088,
    Airport:"easyJet"
}),
new Routes(
{
    From:"VCE",
    To:"MAD",
    Distance:1406.26,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VCE",
    To:"MAN",
    Distance:1366.8,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"VCE",
    To:"MAN",
    Distance:1366.8,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"VCE",
    To:"MAN",
    Distance:1366.8,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"VCE",
    To:"MAN",
    Distance:1366.8,
    Airport:"easyJet"
}),
new Routes(
{
    From:"VCE",
    To:"MRS",
    Distance:611.119,
    Airport:"Air France"
}),
new Routes(
{
    From:"VCE",
    To:"MRS",
    Distance:611.119,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"MUC",
    Distance:319.638,
    Airport:"Air Dolomiti"
}),
new Routes(
{
    From:"VCE",
    To:"MUC",
    Distance:319.638,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VCE",
    To:"NAP",
    Distance:537.098,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"VCE",
    To:"NAP",
    Distance:537.098,
    Airport:"easyJet"
}),
new Routes(
{
    From:"VCE",
    To:"NCE",
    Distance:455.548,
    Airport:"Air France"
}),
new Routes(
{
    From:"VCE",
    To:"NCE",
    Distance:455.548,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"NCE",
    Distance:455.548,
    Airport:"easyJet"
}),
new Routes(
{
    From:"VCE",
    To:"NCL",
    Distance:1450.65,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"VCE",
    To:"NRT",
    Distance:9583.44,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"NTE",
    Distance:1086.1,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"VCE",
    To:"NTE",
    Distance:1086.1,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"VCE",
    To:"OLB",
    Distance:561.295,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"VCE",
    To:"ORY",
    Distance:835.761,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"VCE",
    To:"ORY",
    Distance:835.761,
    Airport:"easyJet"
}),
new Routes(
{
    From:"VCE",
    To:"OSL",
    Distance:1635.39,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"VCE",
    To:"PHL",
    Distance:6818.77,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"VCE",
    To:"PHL",
    Distance:6818.77,
    Airport:"US Airways"
}),
new Routes(
{
    From:"VCE",
    To:"PMO",
    Distance:817.269,
    Airport:"Air One"
}),
new Routes(
{
    From:"VCE",
    To:"PMO",
    Distance:817.269,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"VCE",
    To:"PMO",
    Distance:817.269,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"PNL",
    Distance:966.675,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"VCE",
    To:"PRG",
    Distance:530.453,
    Airport:"Air One"
}),
new Routes(
{
    From:"VCE",
    To:"PRG",
    Distance:530.453,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"REG",
    Distance:870.512,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"VCE",
    To:"RIX",
    Distance:1501.13,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"VCE",
    To:"RIX",
    Distance:1501.13,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"SEN",
    Distance:1089.36,
    Airport:"easyJet"
}),
new Routes(
{
    From:"VCE",
    To:"STR",
    Distance:425.978,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VCE",
    To:"STR",
    Distance:425.978,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"VCE",
    To:"SUF",
    Distance:800.522,
    Airport:"Air One"
}),
new Routes(
{
    From:"VCE",
    To:"SUF",
    Distance:800.522,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"SVO",
    Distance:2094.75,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"VCE",
    To:"SVO",
    Distance:2094.75,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"SXF",
    Distance:769.172,
    Airport:"easyJet"
}),
new Routes(
{
    From:"VCE",
    To:"TIA",
    Distance:748.201,
    Airport:"Air One"
}),
new Routes(
{
    From:"VCE",
    To:"TIA",
    Distance:748.201,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"TIA",
    Distance:748.201,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"VCE",
    To:"TLS",
    Distance:894.325,
    Airport:"Air France"
}),
new Routes(
{
    From:"VCE",
    To:"TLS",
    Distance:894.325,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VCE",
    To:"TLV",
    Distance:2449.07,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"VCE",
    To:"TUN",
    Distance:978.498,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"VCE",
    To:"TXL",
    Distance:787.357,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VCE",
    To:"TXL",
    Distance:787.357,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"VCE",
    To:"VIE",
    Distance:432.255,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VCE",
    To:"VKO",
    Distance:2069.53,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VCE",
    To:"YUL",
    Distance:6358.1,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"VCE",
    To:"YYZ",
    Distance:6853.57,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"VCE",
    To:"ZRH",
    Distance:363.577,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"VCL",
    To:"HAN",
    Distance:715.297,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"VCL",
    To:"SGN",
    Distance:556.434,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"VCP",
    To:"AJU",
    Distance:1710.89,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"AQA",
    Distance:167.953,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"ARU",
    Distance:397.48,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"BPS",
    Distance:1114.87,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"BSB",
    Distance:797.773,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"BSB",
    Distance:797.773,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"VCP",
    To:"BSB",
    Distance:797.773,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"VCP",
    To:"BYO",
    Distance:979.361,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"CAC",
    Distance:683.493,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"CCM",
    Distance:675.824,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"CFB",
    Distance:518.145,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"CGB",
    Distance:1247.07,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"CGR",
    Distance:828.026,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"CLV",
    Distance:607.027,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"CNF",
    Distance:498.204,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"CNF",
    Distance:498.204,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"VCP",
    To:"CWB",
    Distance:348.405,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"CWB",
    Distance:348.405,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"VCP",
    To:"CXJ",
    Distance:798.245,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"DOU",
    Distance:792.183,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"FLN",
    Distance:537.57,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"FOR",
    Distance:2330.02,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"GIG",
    Distance:399.114,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"GIG",
    Distance:399.114,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"VCP",
    To:"GIG",
    Distance:399.114,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"VCP",
    To:"GYN",
    Distance:741.705,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"IGU",
    Distance:798.631,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"IOS",
    Distance:1246.63,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"IZA",
    Distance:440.199,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"JDO",
    Distance:1946.61,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"JOI",
    Distance:395.224,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"JPA",
    Distance:2192.53,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"JTC",
    Distance:219.882,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"LDB",
    Distance:410.049,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"LIS",
    Distance:7928.12,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"VCP",
    To:"MAO",
    Distance:2620.02,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"MCZ",
    Distance:1925.99,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"MEA",
    Distance:555.702,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"MGF",
    Distance:501.487,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"MII",
    Distance:300.439,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"NAT",
    Distance:2288.42,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"NVT",
    Distance:456.941,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"PFB",
    Distance:780.805,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"PLU",
    Distance:481.391,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"POA",
    Distance:874.421,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"PPB",
    Distance:450.044,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"RAO",
    Distance:218.487,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"REC",
    Distance:2106.3,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"RVD",
    Distance:701.365,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"SDU",
    Distance:406.74,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"SJP",
    Distance:338.052,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"SSA",
    Distance:1457.54,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"THE",
    Distance:2048.63,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"UBA",
    Distance:370.654,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"UDI",
    Distance:472.423,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"VIX",
    Distance:770.893,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCP",
    To:"XAP",
    Distance:720.855,
    Airport:"Azul"
}),
new Routes(
{
    From:"VCS",
    To:"SGN",
    Distance:232.07,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"VCS",
    To:"VCA",
    Distance:181.228,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"VCT",
    To:"IAH",
    Distance:197.913,
    Airport:"Pacific Wings"
}),
new Routes(
{
    From:"VDA",
    To:"CDG",
    Distance:3452.78,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"VDB",
    To:"OSL",
    Distance:134.641,
    Airport:"ABSA - Aerolinhas Brasileiras"
}),
new Routes(
{
    From:"VDC",
    To:"CNF",
    Distance:624.607,
    Airport:"Azul"
}),
new Routes(
{
    From:"VDC",
    To:"GRU",
    Distance:1119.76,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"VDC",
    To:"PLU",
    Distance:644.177,
    Airport:"Azul"
}),
new Routes(
{
    From:"VDC",
    To:"SSA",
    Distance:348.994,
    Airport:"Azul"
}),
new Routes(
{
    From:"VDC",
    To:"SSA",
    Distance:348.994,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"VDC",
    To:"SSA",
    Distance:348.994,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"VDE",
    To:"LPA",
    Distance:246.122,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"VDE",
    To:"TFN",
    Distance:168.742,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"VDE",
    To:"TFS",
    Distance:131.647,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"VDH",
    To:"HAN",
    Distance:420.22,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"VDH",
    To:"SGN",
    Distance:744.613,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"VDM",
    To:"REL",
    Distance:320.775,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"VDS",
    To:"ALF",
    Distance:245.989,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"VDS",
    To:"BJF",
    Distance:59.7896,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"VDS",
    To:"HFT",
    Distance:240.441,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"VDS",
    To:"KKN",
    Distance:37.7627,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"VDS",
    To:"MEH",
    Distance:130.706,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"VDS",
    To:"TOS",
    Distance:419.572,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"VDS",
    To:"VAW",
    Distance:55.5558,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"VDZ",
    To:"ANC",
    Distance:201.091,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"VDZ",
    To:"ANC",
    Distance:201.091,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"VEE",
    To:"ARC",
    Distance:127.448,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"VEE",
    To:"FYU",
    Distance:68.9481,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"VEL",
    To:"SLC",
    Distance:211.848,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"VER",
    To:"CUN",
    Distance:994.532,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"VER",
    To:"CUN",
    Distance:994.532,
    Airport:"Volaris"
}),
new Routes(
{
    From:"VER",
    To:"GDL",
    Distance:760.617,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"VER",
    To:"GDL",
    Distance:760.617,
    Airport:"Volaris"
}),
new Routes(
{
    From:"VER",
    To:"IAH",
    Distance:1208.2,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"VER",
    To:"MEX",
    Distance:304.48,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"VER",
    To:"MEX",
    Distance:304.48,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"VER",
    To:"MEX",
    Distance:304.48,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"VER",
    To:"MTY",
    Distance:840.155,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"VER",
    To:"MTY",
    Distance:840.155,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"VER",
    To:"MTY",
    Distance:840.155,
    Airport:"Volaris"
}),
new Routes(
{
    From:"VER",
    To:"REX",
    Distance:791.333,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"VER",
    To:"TAM",
    Distance:391.4,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"VER",
    To:"TIJ",
    Distance:2549.78,
    Airport:"Volaris"
}),
new Routes(
{
    From:"VER",
    To:"VSA",
    Distance:377.468,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"VER",
    To:"VSA",
    Distance:377.468,
    Airport:"Mongolian International Air Lines "
}),
new Routes(
{
    From:"VFA",
    To:"BUQ",
    Distance:361.857,
    Airport:"Air Zimbabwe"
}),
new Routes(
{
    From:"VFA",
    To:"HRE",
    Distance:555.845,
    Airport:"Air Zimbabwe"
}),
new Routes(
{
    From:"VFA",
    To:"JNB",
    Distance:928.024,
    Airport:"Air Zimbabwe"
}),
new Routes(
{
    From:"VFA",
    To:"JNB",
    Distance:928.024,
    Airport:"British Airways"
}),
new Routes(
{
    From:"VFA",
    To:"JNB",
    Distance:928.024,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"VFA",
    To:"MUB",
    Distance:328.027,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"VFA",
    To:"WDH",
    Distance:1000.45,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"VGA",
    To:"BLR",
    Distance:521.201,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"VGA",
    To:"HYD",
    Distance:268.099,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"VGA",
    To:"HYD",
    Distance:268.099,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"VGO",
    To:"BCN",
    Distance:893.343,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"VGO",
    To:"BCN",
    Distance:893.343,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VGO",
    To:"BIO",
    Distance:481.419,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VGO",
    To:"CDG",
    Distance:1148.55,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"VGO",
    To:"CDG",
    Distance:1148.55,
    Airport:"Air France"
}),
new Routes(
{
    From:"VGO",
    To:"CDG",
    Distance:1148.55,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VGO",
    To:"MAD",
    Distance:464.319,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"VGO",
    To:"MAD",
    Distance:464.319,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VGO",
    To:"MAD",
    Distance:464.319,
    Airport:"Finnair"
}),
new Routes(
{
    From:"VGO",
    To:"MAD",
    Distance:464.319,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VGO",
    To:"TFS",
    Distance:1733.14,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VGZ",
    To:"BOG",
    Distance:495.863,
    Airport:"SATENA"
}),
new Routes(
{
    From:"VHC",
    To:"LAD",
    Distance:795.575,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"VHC",
    To:"MEG",
    Distance:452.005,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"VHM",
    To:"ARN",
    Distance:550.75,
    Airport:"NextJet"
}),
new Routes(
{
    From:"VHM",
    To:"ARN",
    Distance:550.75,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"VHM",
    To:"HMV",
    Distance:159.007,
    Airport:"NextJet"
}),
new Routes(
{
    From:"VHM",
    To:"HMV",
    Distance:159.007,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"VIE",
    To:"ACE",
    Distance:3343.76,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"ACE",
    Distance:3343.76,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"ACH",
    Distance:527.942,
    Airport:"Air Europe"
}),
new Routes(
{
    From:"VIE",
    To:"ADB",
    Distance:1385.88,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"VIE",
    To:"AGP",
    Distance:2135.47,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"AGP",
    Distance:2135.47,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"ALG",
    Distance:1672.8,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"VIE",
    To:"AMM",
    Distance:2448.56,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"AMM",
    Distance:2448.56,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"AMM",
    Distance:2448.56,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"VIE",
    To:"AMS",
    Distance:959.483,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"AMS",
    Distance:959.483,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"ARN",
    Distance:1286.35,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"ARN",
    Distance:1286.35,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"ARN",
    Distance:1286.35,
    Airport:"Finnair"
}),
new Routes(
{
    From:"VIE",
    To:"ARN",
    Distance:1286.35,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"ATH",
    Distance:1278.9,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"ATH",
    Distance:1278.9,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"AYT",
    Distance:1701.93,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"AYT",
    Distance:1701.93,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"AYT",
    Distance:1701.93,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"AYT",
    Distance:1701.93,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"VIE",
    To:"BCN",
    Distance:1369.69,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"BCN",
    Distance:1369.69,
    Airport:"Air China"
}),
new Routes(
{
    From:"VIE",
    To:"BCN",
    Distance:1369.69,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"BCN",
    Distance:1369.69,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"BCN",
    Distance:1369.69,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"BCN",
    Distance:1369.69,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"BEG",
    Distance:464.649,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"BEG",
    Distance:464.649,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"VIE",
    To:"BKK",
    Distance:8451.06,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"BKK",
    Distance:8451.06,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"VIE",
    To:"BKK",
    Distance:8451.06,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"VIE",
    To:"BLQ",
    Distance:567.607,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"BRE",
    Distance:775.965,
    Airport:"Germania"
}),
new Routes(
{
    From:"VIE",
    To:"BRN",
    Distance:693.818,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"VIE",
    To:"BRU",
    Distance:924.887,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"BRU",
    Distance:924.887,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"BSL",
    Distance:676.686,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"BSL",
    Distance:676.686,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"VIE",
    To:"BUD",
    Distance:214.21,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"CAI",
    Distance:2365.38,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"CAI",
    Distance:2365.38,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"VIE",
    To:"CDG",
    Distance:1035.09,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"CDG",
    Distance:1035.09,
    Airport:"Air France"
}),
new Routes(
{
    From:"VIE",
    To:"CDG",
    Distance:1035.09,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"CDG",
    Distance:1035.09,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"CFU",
    Distance:983.04,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"CFU",
    Distance:983.04,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"CGN",
    Distance:745.992,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"CGN",
    Distance:745.992,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"VIE",
    To:"CGN",
    Distance:745.992,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VIE",
    To:"CHQ",
    Distance:1531.39,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"CHQ",
    Distance:1531.39,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"CHQ",
    Distance:1531.39,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"CLJ",
    Distance:554.817,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"CLJ",
    Distance:554.817,
    Airport:"Tarom"
}),
new Routes(
{
    From:"VIE",
    To:"CPH",
    Distance:876.646,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"CPH",
    Distance:876.646,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"CPH",
    Distance:876.646,
    Airport:"Finnair"
}),
new Routes(
{
    From:"VIE",
    To:"CPH",
    Distance:876.646,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"CPH",
    Distance:876.646,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"VIE",
    To:"CTA",
    Distance:1189.78,
    Airport:"Air One"
}),
new Routes(
{
    From:"VIE",
    To:"CTA",
    Distance:1189.78,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VIE",
    To:"CTA",
    Distance:1189.78,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"DBV",
    Distance:631.089,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"DBV",
    Distance:631.089,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"DEL",
    Distance:5546,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"VIE",
    To:"DEL",
    Distance:5546,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"DLM",
    Distance:1612.33,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"DME",
    Distance:1668.14,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"DME",
    Distance:1668.14,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"DME",
    Distance:1668.14,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"DME",
    Distance:1668.14,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"DME",
    Distance:1668.14,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"DNK",
    Distance:1369.44,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"DNK",
    Distance:1369.44,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"VIE",
    To:"DOH",
    Distance:3966.71,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"VIE",
    To:"DUB",
    Distance:1702.45,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"VIE",
    To:"DUS",
    Distance:787.824,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"DUS",
    Distance:787.824,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"DUS",
    Distance:787.824,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VIE",
    To:"DXB",
    Distance:4222.9,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"DXB",
    Distance:4222.9,
    Airport:"Emirates"
}),
new Routes(
{
    From:"VIE",
    To:"EBL",
    Distance:2594.5,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"ESB",
    Distance:1578.17,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"ESB",
    Distance:1578.17,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"EVN",
    Distance:2374.58,
    Airport:"Atlantis European Airways"
}),
new Routes(
{
    From:"VIE",
    To:"EVN",
    Distance:2374.58,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"EVN",
    Distance:2374.58,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"FCO",
    Distance:778.87,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"FCO",
    Distance:778.87,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VIE",
    To:"FCO",
    Distance:778.87,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"FCO",
    Distance:778.87,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"VIE",
    To:"FCO",
    Distance:778.87,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"FLR",
    Distance:632.615,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"FLR",
    Distance:632.615,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"FLR",
    Distance:632.615,
    Airport:"Finnair"
}),
new Routes(
{
    From:"VIE",
    To:"FLR",
    Distance:632.615,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"VIE",
    To:"FLR",
    Distance:632.615,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"FNC",
    Distance:3264.87,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"FNC",
    Distance:3264.87,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"FNC",
    Distance:3264.87,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"FNC",
    Distance:3264.87,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"VIE",
    To:"FRA",
    Distance:621.964,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"FRA",
    Distance:621.964,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"FRA",
    Distance:621.964,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"FRA",
    Distance:621.964,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VIE",
    To:"FRA",
    Distance:621.964,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"GRZ",
    Distance:150.599,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"GVA",
    Distance:816.922,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"GVA",
    Distance:816.922,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"VIE",
    To:"GYD",
    Distance:2771.71,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"GYD",
    Distance:2771.71,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"HAJ",
    Distance:687.407,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"HAJ",
    Distance:687.407,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"HAJ",
    Distance:687.407,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"VIE",
    To:"HAM",
    Distance:767.465,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"HAM",
    Distance:767.465,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"HAM",
    Distance:767.465,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"VIE",
    To:"HAM",
    Distance:767.465,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VIE",
    To:"HEL",
    Distance:1460.23,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"HEL",
    Distance:1460.23,
    Airport:"Finnair"
}),
new Routes(
{
    From:"VIE",
    To:"HER",
    Distance:1587.29,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"HER",
    Distance:1587.29,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"HER",
    Distance:1587.29,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"HER",
    Distance:1587.29,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"HRG",
    Distance:2764.11,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"HRG",
    Distance:2764.11,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"HRK",
    Distance:1447.86,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"HRK",
    Distance:1447.86,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"IAD",
    Distance:7165.3,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"IAD",
    Distance:7165.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"IAS",
    Distance:833.603,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"IAS",
    Distance:833.603,
    Airport:"Tarom"
}),
new Routes(
{
    From:"VIE",
    To:"IKA",
    Distance:3161.12,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"IKA",
    Distance:3161.12,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"VIE",
    To:"INN",
    Distance:402.353,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"IST",
    Distance:1250.73,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"IST",
    Distance:1250.73,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"IST",
    Distance:1250.73,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"JFK",
    Distance:6805.04,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"JFK",
    Distance:6805.04,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"JMK",
    Distance:1384.43,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"JMK",
    Distance:1384.43,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"JTR",
    Distance:1492.13,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"JTR",
    Distance:1492.13,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"JTR",
    Distance:1492.13,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"KBP",
    Distance:1067.66,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"KBP",
    Distance:1067.66,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"KIV",
    Distance:936.489,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"KLU",
    Distance:234.252,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"KLX",
    Distance:1305.66,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"KLX",
    Distance:1305.66,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"KRK",
    Distance:320.357,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"KRK",
    Distance:320.357,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"KRR",
    Distance:1754.4,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"KSC",
    Distance:350.331,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"LCA",
    Distance:2036.42,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"LCA",
    Distance:2036.42,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"LCA",
    Distance:2036.42,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"LED",
    Distance:1572.01,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"LED",
    Distance:1572.01,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"LED",
    Distance:1572.01,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"LEJ",
    Distance:482.6,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"LEJ",
    Distance:482.6,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VIE",
    To:"LGW",
    Distance:1250.39,
    Airport:"easyJet"
}),
new Routes(
{
    From:"VIE",
    To:"LHR",
    Distance:1275.16,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"LHR",
    Distance:1275.16,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"LHR",
    Distance:1275.16,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"LHR",
    Distance:1275.16,
    Airport:"British Airways"
}),
new Routes(
{
    From:"VIE",
    To:"LIN",
    Distance:629.113,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VIE",
    To:"LIS",
    Distance:2305.01,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"LIS",
    Distance:2305.01,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"VIE",
    To:"LJU",
    Distance:263.61,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"VIE",
    To:"LJU",
    Distance:263.61,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"LNZ",
    Distance:177.176,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"LPA",
    Distance:3544.09,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"LPA",
    Distance:3544.09,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"LPA",
    Distance:3544.09,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"LUX",
    Distance:775.485,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"LUX",
    Distance:775.485,
    Airport:"Luxair"
}),
new Routes(
{
    From:"VIE",
    To:"LWO",
    Distance:571.218,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"LWO",
    Distance:571.218,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"LYS",
    Distance:910.224,
    Airport:"Air France"
}),
new Routes(
{
    From:"VIE",
    To:"LYS",
    Distance:910.224,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"MAD",
    Distance:1804.88,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"MAD",
    Distance:1804.88,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"MAD",
    Distance:1804.88,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"MAN",
    Distance:1443.18,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"VIE",
    To:"MLA",
    Distance:1373.23,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"MLA",
    Distance:1373.23,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"VIE",
    To:"MLA",
    Distance:1373.23,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"MLA",
    Distance:1373.23,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"MSQ",
    Distance:1025.16,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"MSQ",
    Distance:1025.16,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"MUC",
    Distance:355.292,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"MUC",
    Distance:355.292,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"MUC",
    Distance:355.292,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VIE",
    To:"MUC",
    Distance:355.292,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"MUC",
    Distance:355.292,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"VIE",
    To:"MXP",
    Distance:656.375,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"MXP",
    Distance:656.375,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"MXP",
    Distance:656.375,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"VIE",
    To:"MXP",
    Distance:656.375,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"MXP",
    Distance:656.375,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"VIE",
    To:"NAP",
    Distance:823.279,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"NCE",
    Distance:876.101,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"NCE",
    Distance:876.101,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"NCE",
    Distance:876.101,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"NRT",
    Distance:9154.05,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"VIE",
    To:"NRT",
    Distance:9154.05,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"NUE",
    Distance:431.439,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"ODS",
    Distance:1079.13,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"ODS",
    Distance:1079.13,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"OLB",
    Distance:976.729,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"OLB",
    Distance:976.729,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"OLB",
    Distance:976.729,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"VIE",
    To:"OLB",
    Distance:976.729,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"ORD",
    Distance:7566.46,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"ORD",
    Distance:7566.46,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"OSL",
    Distance:1388.87,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"OSL",
    Distance:1388.87,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"VIE",
    To:"OTP",
    Distance:829.982,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"OTP",
    Distance:829.982,
    Airport:"Tarom"
}),
new Routes(
{
    From:"VIE",
    To:"PEK",
    Distance:7451.91,
    Airport:"Air China"
}),
new Routes(
{
    From:"VIE",
    To:"PEK",
    Distance:7451.91,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"PMI",
    Distance:1458.26,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"PMI",
    Distance:1458.26,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"PMI",
    Distance:1458.26,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"PMO",
    Distance:1139.81,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"PRG",
    Distance:277.93,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"PRN",
    Distance:707.503,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"PVK",
    Distance:1075.44,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"PVK",
    Distance:1075.44,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"RHO",
    Distance:1606.24,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"RHO",
    Distance:1606.24,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"RHO",
    Distance:1606.24,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"RIX",
    Distance:1099.08,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"VIE",
    To:"RIX",
    Distance:1099.08,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"RMF",
    Distance:2960.03,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"ROV",
    Distance:1736.27,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"RTM",
    Distance:964.751,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"VIE",
    To:"SAW",
    Distance:1287.02,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"SAW",
    Distance:1287.02,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"SBZ",
    Distance:626.387,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"SBZ",
    Distance:626.387,
    Airport:"Tarom"
}),
new Routes(
{
    From:"VIE",
    To:"SJJ",
    Distance:495.581,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"SKG",
    Distance:984.97,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"SKG",
    Distance:984.97,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"SKG",
    Distance:984.97,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"SKP",
    Distance:790.16,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"SOF",
    Distance:803.987,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"SOF",
    Distance:803.987,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"VIE",
    To:"SPU",
    Distance:508.744,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"SPU",
    Distance:508.744,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"STR",
    Distance:546.047,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"STR",
    Distance:546.047,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"VIE",
    To:"STR",
    Distance:546.047,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VIE",
    To:"SUF",
    Distance:1023.87,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"SVO",
    Distance:1662.54,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"SZG",
    Distance:267.831,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"SZG",
    Distance:267.831,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"SZG",
    Distance:267.831,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"TBS",
    Distance:2332.57,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"TBS",
    Distance:2332.57,
    Airport:"Georgian Airways"
}),
new Routes(
{
    From:"VIE",
    To:"TFS",
    Distance:3613.38,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"TFS",
    Distance:3613.38,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"TFS",
    Distance:3613.38,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"TGD",
    Distance:672.961,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"TGD",
    Distance:672.961,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"TIA",
    Distance:784.788,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"TLV",
    Distance:2361.31,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"TLV",
    Distance:2361.31,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"TLV",
    Distance:2361.31,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"TPE",
    Distance:8968.03,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"TSE",
    Distance:3879.84,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"VIE",
    To:"TSE",
    Distance:3879.84,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"TUN",
    Distance:1354.54,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"VIE",
    To:"TXL",
    Distance:546.705,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"TXL",
    Distance:546.705,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"TXL",
    Distance:546.705,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"VIE",
    To:"TXL",
    Distance:546.705,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"TXL",
    Distance:546.705,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VIE",
    To:"VAR",
    Distance:1027.56,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"VCE",
    Distance:432.255,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"VKO",
    Distance:1637.54,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"VKO",
    Distance:1637.54,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"VLC",
    Distance:1664.85,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"VLC",
    Distance:1664.85,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"VNO",
    Distance:943.184,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"VOL",
    Distance:1107.26,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"VOL",
    Distance:1107.26,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"WAW",
    Distance:548.933,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"WAW",
    Distance:548.933,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"YYZ",
    Distance:6948.28,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"VIE",
    To:"YYZ",
    Distance:6948.28,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"YYZ",
    Distance:6948.28,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VIE",
    To:"ZAG",
    Distance:265.97,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"ZAG",
    Distance:265.97,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"ZRH",
    Distance:603.218,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"ZRH",
    Distance:603.218,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VIE",
    To:"ZRH",
    Distance:603.218,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"VIE",
    To:"ZRH",
    Distance:603.218,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIE",
    To:"ZRH",
    Distance:603.218,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"VIE",
    To:"ZRH",
    Distance:603.218,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"VIE",
    To:"ZTH",
    Distance:1203.77,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VIE",
    To:"ZTH",
    Distance:1203.77,
    Airport:"Niki"
}),
new Routes(
{
    From:"VIG",
    To:"CCS",
    Distance:558.479,
    Airport:"Aero Lanka"
}),
new Routes(
{
    From:"VIG",
    To:"CCS",
    Distance:558.479,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"VIG",
    To:"PMV",
    Distance:881.808,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"VII",
    To:"BMV",
    Distance:723.963,
    Airport:"Jetstar Pacific"
}),
new Routes(
{
    From:"VII",
    To:"DAD",
    Distance:402.104,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"VII",
    To:"HAN",
    Distance:276.534,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"VII",
    To:"SGN",
    Distance:886.811,
    Airport:"Jetstar Pacific"
}),
new Routes(
{
    From:"VII",
    To:"SGN",
    Distance:886.811,
    Airport:"Royal Air Cambodge"
}),
new Routes(
{
    From:"VII",
    To:"SGN",
    Distance:886.811,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"VII",
    To:"VTE",
    Distance:338.354,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"VIJ",
    To:"SJU",
    Distance:166.068,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"VIJ",
    To:"SJU",
    Distance:166.068,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"VIJ",
    To:"SJU",
    Distance:166.068,
    Airport:"Seaborne Airlines"
}),
new Routes(
{
    From:"VIJ",
    To:"STT",
    Distance:58.8602,
    Airport:"TUR Avrupa Hava YollarÄ±"
}),
new Routes(
{
    From:"VIL",
    To:"AGA",
    Distance:973.627,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"VIL",
    To:"CMN",
    Distance:1346.09,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"VIL",
    To:"LPA",
    Distance:471.697,
    Airport:"Tropic Air"
}),
new Routes(
{
    From:"VIN",
    To:"TLV",
    Distance:1986.31,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"VIS",
    To:"LAX",
    Distance:278.965,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"VIX",
    To:"BSB",
    Distance:942.562,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"VIX",
    To:"CAW",
    Distance:191.727,
    Airport:"FlyLal"
}),
new Routes(
{
    From:"VIX",
    To:"CGH",
    Distance:756.025,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"VIX",
    To:"CGH",
    Distance:756.025,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"VIX",
    To:"CNF",
    Distance:391.109,
    Airport:"Azul"
}),
new Routes(
{
    From:"VIX",
    To:"CNF",
    Distance:391.109,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"VIX",
    To:"GIG",
    Distance:417.121,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"VIX",
    To:"GIG",
    Distance:417.121,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"VIX",
    To:"GRU",
    Distance:729.113,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"VIX",
    To:"GRU",
    Distance:729.113,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"VIX",
    To:"SDU",
    Distance:418.851,
    Airport:"Azul"
}),
new Routes(
{
    From:"VIX",
    To:"SDU",
    Distance:418.851,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"VIX",
    To:"SDU",
    Distance:418.851,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"VIX",
    To:"SSA",
    Distance:843.068,
    Airport:"Azul"
}),
new Routes(
{
    From:"VIX",
    To:"SSA",
    Distance:843.068,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"VIX",
    To:"VCP",
    Distance:770.893,
    Airport:"Azul"
}),
new Routes(
{
    From:"VKG",
    To:"SGN",
    Distance:192.125,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"AER",
    Distance:1363.76,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"AGP",
    Distance:3760.01,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"ALA",
    Distance:3124.22,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"AYT",
    Distance:2134.87,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"AYT",
    Distance:2134.87,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"BTK",
    Distance:3860.15,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"VKO",
    To:"BUD",
    Distance:1533.56,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VKO",
    To:"CIT",
    Distance:2736.21,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"CUN",
    Distance:10006.5,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"DLM",
    Distance:2194.38,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"DUS",
    Distance:2057.6,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VKO",
    To:"DWC",
    Distance:3745.84,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"ESB",
    Distance:1747.84,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"EVN",
    Distance:1795.59,
    Airport:"Air Armenia"
}),
new Routes(
{
    From:"VKO",
    To:"EVN",
    Distance:1795.59,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"EYK",
    Distance:1858.91,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"VKO",
    To:"FCO",
    Distance:2368.49,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"FRA",
    Distance:2010.27,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VKO",
    To:"FRA",
    Distance:2010.27,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"GOJ",
    Distance:412.495,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"VKO",
    To:"GUW",
    Distance:1376.63,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"HER",
    Distance:2432.87,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"HKT",
    Distance:7474.61,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"HRG",
    Distance:3171.67,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"IEV",
    Distance:734.708,
    Airport:"East African"
}),
new Routes(
{
    From:"VKO",
    To:"IEV",
    Distance:734.708,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"IKT",
    Distance:4236.74,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"IST",
    Distance:1738.09,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"IST",
    Distance:1738.09,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"JFK",
    Distance:7500.77,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"KJA",
    Distance:3350.58,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"KRR",
    Distance:1181.55,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"VKO",
    To:"KRR",
    Distance:1181.55,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"KSN",
    Distance:1711.58,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"KUF",
    Distance:861.786,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"KUT",
    Distance:1538.65,
    Airport:"Georgian Airways"
}),
new Routes(
{
    From:"VKO",
    To:"KVX",
    Distance:798.088,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"VKO",
    To:"LAX",
    Distance:9794.05,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"LED",
    Distance:625.445,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"LED",
    Distance:625.445,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"LHR",
    Distance:2502.24,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"LHR",
    Distance:2502.24,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"VKO",
    To:"LWO",
    Distance:1100.08,
    Airport:"East African"
}),
new Routes(
{
    From:"VKO",
    To:"MAD",
    Distance:3400.4,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"MIA",
    Distance:9217.76,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"MLE",
    Distance:6563.03,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"MRU",
    Distance:8670.87,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"MRV",
    Distance:1329.69,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"MXP",
    Distance:2274.8,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"NCU",
    Distance:2168.57,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"VKO",
    To:"NSK",
    Distance:2874.01,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"NUX",
    Distance:2360.51,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"VKO",
    To:"NUX",
    Distance:2360.51,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"NYM",
    Distance:2186.24,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"VKO",
    To:"ODS",
    Distance:1117.18,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"ORY",
    Distance:2470.09,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"VKO",
    To:"ORY",
    Distance:2470.09,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"OVB",
    Distance:2822.14,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"OVS",
    Distance:1645.18,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"VKO",
    To:"OZH",
    Distance:869.228,
    Airport:"Motor Sich"
}),
new Routes(
{
    From:"VKO",
    To:"PEK",
    Distance:5817.25,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"PFO",
    Distance:2349.69,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"PWE",
    Distance:5581.34,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"VKO",
    To:"RIX",
    Distance:832.734,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"VKO",
    To:"RIX",
    Distance:832.734,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"SCO",
    Distance:1633.8,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"SEZ",
    Distance:6907.48,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"SSH",
    Distance:3079.14,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"SVX",
    Distance:1455.79,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"TAS",
    Distance:2810.84,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"TBS",
    Distance:1645.69,
    Airport:"Georgian Airways"
}),
new Routes(
{
    From:"VKO",
    To:"TBW",
    Distance:413.312,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"VKO",
    To:"TLV",
    Distance:2628.54,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"TSE",
    Distance:2303.64,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"TXL",
    Distance:1591.42,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VKO",
    To:"UCT",
    Distance:1251.27,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"VKO",
    To:"URS",
    Distance:431.794,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"VKO",
    To:"VCE",
    Distance:2069.53,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"VIE",
    Distance:1637.54,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"VIE",
    Distance:1637.54,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKO",
    To:"VNO",
    Distance:768.063,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"VKO",
    To:"VOZ",
    Distance:439.497,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"VKO",
    To:"YKS",
    Distance:4909.35,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"VKO",
    To:"YYZ",
    Distance:7490.34,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VKT",
    To:"DME",
    Distance:1903.16,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"VKT",
    To:"SCW",
    Distance:899.906,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"VLC",
    To:"AGP",
    Distance:470.627,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"AMS",
    Distance:1481.11,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"AMS",
    Distance:1481.11,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"AMS",
    Distance:1481.11,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"VLC",
    To:"BGY",
    Distance:1079.43,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"BIO",
    Distance:469.732,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"BLQ",
    Distance:1121.11,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"BRI",
    Distance:1470.92,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"BRS",
    Distance:1333.79,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"BRU",
    Distance:1326.51,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"BRU",
    Distance:1326.51,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"BRU",
    Distance:1326.51,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"BVA",
    Distance:1126.85,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"CDG",
    Distance:1085.9,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"VLC",
    To:"CDG",
    Distance:1085.9,
    Airport:"Air France"
}),
new Routes(
{
    From:"VLC",
    To:"CIA",
    Distance:1131.56,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"CLJ",
    Distance:2111.38,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VLC",
    To:"CMN",
    Distance:930.93,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"CMN",
    Distance:930.93,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"VLC",
    To:"CRL",
    Distance:1279.35,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"DME",
    Distance:3324.23,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"DUB",
    Distance:1610.05,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"DUS",
    Distance:1427.3,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VLC",
    To:"EIN",
    Distance:1405.06,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"VLC",
    To:"EMA",
    Distance:1484.94,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"FCO",
    Distance:1103.48,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VLC",
    To:"FCO",
    Distance:1103.48,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"FCO",
    Distance:1103.48,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"FRA",
    Distance:1369.09,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"VLC",
    To:"FRA",
    Distance:1369.09,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VLC",
    To:"GVA",
    Distance:922.133,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"VLC",
    To:"HHN",
    Distance:1312.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"IBZ",
    Distance:173.937,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"IBZ",
    Distance:173.937,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"IBZ",
    Distance:173.937,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"IEV",
    Distance:2693.4,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"VLC",
    To:"IST",
    Distance:2480.76,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"LGW",
    Distance:1296.59,
    Airport:"easyJet"
}),
new Routes(
{
    From:"VLC",
    To:"LIS",
    Distance:750.27,
    Airport:"SATA International"
}),
new Routes(
{
    From:"VLC",
    To:"LIS",
    Distance:750.27,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"VLC",
    To:"LIS",
    Distance:750.27,
    Airport:"US Airways"
}),
new Routes(
{
    From:"VLC",
    To:"LPA",
    Distance:1879.86,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"LPA",
    Distance:1879.86,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"LWO",
    Distance:2233.1,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"VLC",
    To:"MAD",
    Distance:285.542,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"VLC",
    To:"MAD",
    Distance:285.542,
    Airport:"Finnair"
}),
new Routes(
{
    From:"VLC",
    To:"MAD",
    Distance:285.542,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"MAH",
    Distance:404.352,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"MAH",
    Distance:404.352,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"MAN",
    Distance:1547.64,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"MRS",
    Distance:646.057,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"MUC",
    Distance:1388.49,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VLC",
    To:"NRN",
    Distance:1440.81,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"NTE",
    Distance:857.038,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"VLC",
    To:"OPO",
    Distance:721.352,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"ORY",
    Distance:1051.54,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"ORY",
    Distance:1051.54,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"OTP",
    Distance:2256.19,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VLC",
    To:"OVD",
    Distance:646.959,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"VLC",
    To:"OVD",
    Distance:646.959,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"PMI",
    Distance:275.362,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VLC",
    To:"PMI",
    Distance:275.362,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"VLC",
    To:"PMI",
    Distance:275.362,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VLC",
    To:"PMI",
    Distance:275.362,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"PMI",
    Distance:275.362,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"PRG",
    Distance:1651.16,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"PRG",
    Distance:1651.16,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"VLC",
    To:"PSA",
    Distance:1016.46,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"RTM",
    Distance:1437.11,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"VLC",
    To:"SCQ",
    Distance:763.843,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"SDR",
    Distance:518.655,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"SOF",
    Distance:2026.28,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VLC",
    To:"STN",
    Distance:1379.44,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"SVQ",
    Distance:524.369,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"TFN",
    Distance:1901.66,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VLC",
    To:"TFS",
    Distance:1951.94,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"TRS",
    Distance:1338.3,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"TSF",
    Distance:1241.33,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLC",
    To:"TSR",
    Distance:1910.29,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VLC",
    To:"VIE",
    Distance:1664.85,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VLC",
    To:"VIE",
    Distance:1664.85,
    Airport:"Niki"
}),
new Routes(
{
    From:"VLC",
    To:"ZRH",
    Distance:1146.19,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"VLD",
    To:"ATL",
    Distance:335.343,
    Airport:"Air France"
}),
new Routes(
{
    From:"VLD",
    To:"ATL",
    Distance:335.343,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"VLD",
    To:"ATL",
    Distance:335.343,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"VLI",
    To:"AKL",
    Distance:2238.57,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"VLI",
    To:"AKL",
    Distance:2238.57,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"BNE",
    Distance:1893.77,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"BNE",
    Distance:1893.77,
    Airport:"Qantas"
}),
new Routes(
{
    From:"VLI",
    To:"BNE",
    Distance:1893.77,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"VLI",
    To:"CCV",
    Distance:164.95,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"DLY",
    Distance:139.045,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"EAE",
    Distance:67.7652,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"HIR",
    Distance:1281.54,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"VLI",
    To:"HIR",
    Distance:1281.54,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"HIR",
    Distance:1281.54,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"VLI",
    To:"IPA",
    Distance:167.544,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"LNB",
    Distance:125.168,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"LNE",
    Distance:204.507,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"LPM",
    Distance:148.2,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"NAN",
    Distance:966.249,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"VLI",
    To:"NAN",
    Distance:966.249,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"VLI",
    To:"NOU",
    Distance:527.973,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"VLI",
    To:"NOU",
    Distance:527.973,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"NUS",
    Distance:204.914,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"PBJ",
    Distance:140.301,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"SON",
    Distance:270.687,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"SWJ",
    Distance:163.45,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"SYD",
    Distance:2483.9,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"SYD",
    Distance:2483.9,
    Airport:"Qantas"
}),
new Routes(
{
    From:"VLI",
    To:"TAH",
    Distance:217.258,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"TGH",
    Distance:93.1624,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLI",
    To:"VLS",
    Distance:101.572,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLL",
    To:"BCN",
    Distance:578.782,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"VLL",
    To:"BCN",
    Distance:578.782,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"VLL",
    To:"BCN",
    Distance:578.782,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VLL",
    To:"PMI",
    Distance:682.663,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"VLN",
    To:"AUA",
    Distance:346.609,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"VLN",
    To:"AUA",
    Distance:346.609,
    Airport:"Myway Airlines"
}),
new Routes(
{
    From:"VLN",
    To:"BLA",
    Distance:354.604,
    Airport:"Aserca Airlines"
}),
new Routes(
{
    From:"VLN",
    To:"CUR",
    Distance:253.118,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"VLN",
    To:"MAR",
    Distance:418.072,
    Airport:"Aserca Airlines"
}),
new Routes(
{
    From:"VLN",
    To:"PMV",
    Distance:441.235,
    Airport:"Aero Lanka"
}),
new Routes(
{
    From:"VLN",
    To:"PMV",
    Distance:441.235,
    Airport:"Virgin Pacific"
}),
new Routes(
{
    From:"VLN",
    To:"PTY",
    Distance:1261.5,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"VLS",
    To:"VLI",
    Distance:101.572,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"VLV",
    To:"CCS",
    Distance:417.815,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"VNO",
    To:"AES",
    Distance:1408.88,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VNO",
    To:"ARN",
    Distance:712.475,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"VNO",
    To:"ARN",
    Distance:712.475,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"VNO",
    To:"BCN",
    Distance:2258.08,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VNO",
    To:"BCN",
    Distance:2258.08,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VNO",
    To:"BGO",
    Distance:1347.62,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VNO",
    To:"BGY",
    Distance:1485.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VNO",
    To:"BGY",
    Distance:1485.67,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VNO",
    To:"BRE",
    Distance:1094.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VNO",
    To:"BRU",
    Distance:1453.57,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"VNO",
    To:"BRU",
    Distance:1453.57,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"VNO",
    To:"BRU",
    Distance:1453.57,
    Airport:"LTU International"
}),
new Routes(
{
    From:"VNO",
    To:"BRU",
    Distance:1453.57,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VNO",
    To:"BVA",
    Distance:1676.88,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VNO",
    To:"BVA",
    Distance:1676.88,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VNO",
    To:"CDG",
    Distance:1673.65,
    Airport:"LTU International"
}),
new Routes(
{
    From:"VNO",
    To:"CHQ",
    Distance:2125.89,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VNO",
    To:"CIA",
    Distance:1703.31,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VNO",
    To:"CPH",
    Distance:809.242,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"VNO",
    To:"CPH",
    Distance:809.242,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"VNO",
    To:"CRL",
    Distance:1476.7,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VNO",
    To:"DME",
    Distance:807.947,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VNO",
    To:"DTM",
    Distance:1226.63,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VNO",
    To:"DUB",
    Distance:2048.07,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VNO",
    To:"EIN",
    Distance:1372.22,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VNO",
    To:"FCO",
    Distance:1716.67,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VNO",
    To:"FRA",
    Distance:1243.74,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"VNO",
    To:"FRA",
    Distance:1243.74,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VNO",
    To:"HEL",
    Distance:632.223,
    Airport:"British Airways"
}),
new Routes(
{
    From:"VNO",
    To:"HEL",
    Distance:632.223,
    Airport:"Finnair"
}),
new Routes(
{
    From:"VNO",
    To:"HER",
    Distance:2145.46,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"VNO",
    To:"IEV",
    Distance:585.82,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"VNO",
    To:"IST",
    Distance:1540.81,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"VNO",
    To:"KBP",
    Distance:609.264,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"VNO",
    To:"KUT",
    Distance:1868.93,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VNO",
    To:"LED",
    Distance:647.483,
    Airport:"Polet Airlines (Priv)"
}),
new Routes(
{
    From:"VNO",
    To:"LPL",
    Distance:1832.89,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VNO",
    To:"LTN",
    Distance:1723.88,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VNO",
    To:"MSQ",
    Distance:196.893,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"VNO",
    To:"MUC",
    Distance:1163.45,
    Airport:"LTU International"
}),
new Routes(
{
    From:"VNO",
    To:"ORK",
    Distance:2246.9,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VNO",
    To:"OSL",
    Distance:1047.15,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"VNO",
    To:"PRG",
    Distance:900.91,
    Airport:"LTU International"
}),
new Routes(
{
    From:"VNO",
    To:"RIX",
    Distance:267.511,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"VNO",
    To:"RYG",
    Distance:1021.17,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VNO",
    To:"STN",
    Distance:1684.65,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VNO",
    To:"SVG",
    Distance:1281.41,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VNO",
    To:"SVO",
    Distance:780.919,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"VNO",
    To:"TLL",
    Distance:532.124,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"VNO",
    To:"TLL",
    Distance:532.124,
    Airport:"LTU International"
}),
new Routes(
{
    From:"VNO",
    To:"TLL",
    Distance:532.124,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"VNO",
    To:"TLV",
    Distance:2627.05,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VNO",
    To:"TRF",
    Distance:1039.99,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VNO",
    To:"TXL",
    Distance:823.497,
    Airport:"LTU International"
}),
new Routes(
{
    From:"VNO",
    To:"VIE",
    Distance:943.184,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"VNO",
    To:"VKO",
    Distance:768.063,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"VNO",
    To:"WAW",
    Distance:396.49,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"VNS",
    To:"AGR",
    Distance:523.68,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"VNS",
    To:"BOM",
    Distance:1247.29,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"VNS",
    To:"CCU",
    Distance:646.916,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"VNS",
    To:"CCU",
    Distance:646.916,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"VNS",
    To:"DEL",
    Distance:667.008,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"VNS",
    To:"DEL",
    Distance:667.008,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"VNS",
    To:"DEL",
    Distance:667.008,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"VNS",
    To:"DEL",
    Distance:667.008,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"VNS",
    To:"DEL",
    Distance:667.008,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"VNS",
    To:"KTM",
    Distance:352.217,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"VNX",
    To:"INH",
    Distance:206.83,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"VNX",
    To:"JNB",
    Distance:851.027,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"VNX",
    To:"JNB",
    Distance:851.027,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"VNX",
    To:"MPM",
    Distance:515.547,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"VOG",
    To:"DME",
    Distance:857.292,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"VOG",
    To:"DXB",
    Distance:2786.52,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"VOG",
    To:"DYU",
    Distance:2259.84,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"VOG",
    To:"EVN",
    Distance:960.205,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"VOG",
    To:"KRR",
    Distance:572.637,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"VOG",
    To:"LED",
    Distance:1521.84,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"VOG",
    To:"ROV",
    Distance:376.896,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"VOG",
    To:"SVO",
    Distance:926.618,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"VOG",
    To:"TAS",
    Distance:2118.66,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"VOG",
    To:"UGC",
    Distance:1502.56,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"VOL",
    To:"AMS",
    Distance:2007.65,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"VOL",
    To:"CRL",
    Distance:1902,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VOL",
    To:"HHN",
    Distance:1707.08,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VOL",
    To:"VIE",
    Distance:1107.26,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VOL",
    To:"VIE",
    Distance:1107.26,
    Airport:"Niki"
}),
new Routes(
{
    From:"VOZ",
    To:"DME",
    Distance:409.083,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"VOZ",
    To:"DME",
    Distance:409.083,
    Airport:"Polet Airlines (Priv)"
}),
new Routes(
{
    From:"VOZ",
    To:"EVN",
    Distance:1356.46,
    Airport:"Polet Airlines (Priv)"
}),
new Routes(
{
    From:"VOZ",
    To:"KRR",
    Distance:753.861,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"VOZ",
    To:"LED",
    Distance:1048,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"VOZ",
    To:"LED",
    Distance:1048,
    Airport:"Polet Airlines (Priv)"
}),
new Routes(
{
    From:"VOZ",
    To:"MUC",
    Distance:1983.1,
    Airport:"Polet Airlines (Priv)"
}),
new Routes(
{
    From:"VOZ",
    To:"VKO",
    Distance:439.497,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"VPE",
    To:"CBT",
    Distance:559.773,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"VPE",
    To:"LAD",
    Distance:948.081,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"VPE",
    To:"NOV",
    Distance:470.937,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"VPE",
    To:"SDD",
    Distance:326.054,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"VPE",
    To:"SPP",
    Distance:343.227,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"VPE",
    To:"SVP",
    Distance:533.403,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"VPS",
    To:"ATL",
    Distance:402.488,
    Airport:"Air France"
}),
new Routes(
{
    From:"VPS",
    To:"ATL",
    Distance:402.488,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"VPS",
    To:"ATL",
    Distance:402.488,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"VPS",
    To:"CLT",
    Distance:740.428,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"VPS",
    To:"CLT",
    Distance:740.428,
    Airport:"US Airways"
}),
new Routes(
{
    From:"VPS",
    To:"DCA",
    Distance:1270.83,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"VPS",
    To:"DCA",
    Distance:1270.83,
    Airport:"US Airways"
}),
new Routes(
{
    From:"VPS",
    To:"DFW",
    Distance:1029.71,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"VPS",
    To:"DFW",
    Distance:1029.71,
    Airport:"US Airways"
}),
new Routes(
{
    From:"VPS",
    To:"IAH",
    Distance:848.554,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"VPY",
    To:"MPM",
    Distance:757.853,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"VQS",
    To:"SJU",
    Distance:70.9501,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"VQS",
    To:"SJU",
    Distance:70.9501,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"VQS",
    To:"SJU",
    Distance:70.9501,
    Airport:"Reem Air"
}),
new Routes(
{
    From:"VQS",
    To:"SJU",
    Distance:70.9501,
    Airport:"Seaborne Airlines"
}),
new Routes(
{
    From:"VQS",
    To:"SJU",
    Distance:70.9501,
    Airport:"TUR Avrupa Hava YollarÄ±"
}),
new Routes(
{
    From:"VQS",
    To:"STX",
    Distance:80.4947,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"VRA",
    To:"CUN",
    Distance:603.226,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"VRA",
    To:"DME",
    Distance:9586.09,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VRA",
    To:"DUS",
    Distance:7909.56,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"VRA",
    To:"FRA",
    Distance:8065.81,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"VRA",
    To:"SNU",
    Distance:164.401,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"VRA",
    To:"YHZ",
    Distance:2923.84,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"VRA",
    To:"YUL",
    Distance:2590.06,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"VRA",
    To:"YUL",
    Distance:2590.06,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"VRA",
    To:"YUL",
    Distance:2590.06,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"VRA",
    To:"YYC",
    Distance:4190.64,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"VRA",
    To:"YYZ",
    Distance:2301.33,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"VRA",
    To:"YYZ",
    Distance:2301.33,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"VRA",
    To:"YYZ",
    Distance:2301.33,
    Airport:"WestJet"
}),
new Routes(
{
    From:"VRC",
    To:"MNL",
    Distance:358.974,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"VRN",
    To:"AMS",
    Distance:889.028,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"VRN",
    To:"BRI",
    Distance:670.545,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"VRN",
    To:"CAG",
    Distance:699.597,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"VRN",
    To:"CDG",
    Distance:746.73,
    Airport:"Air France"
}),
new Routes(
{
    From:"VRN",
    To:"CDG",
    Distance:746.73,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VRN",
    To:"CGN",
    Distance:668.556,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"VRN",
    To:"CTA",
    Distance:947.608,
    Airport:"Air One"
}),
new Routes(
{
    From:"VRN",
    To:"CTA",
    Distance:947.608,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VRN",
    To:"CTA",
    Distance:947.608,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"VRN",
    To:"DME",
    Distance:2194.48,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"VRN",
    To:"DUB",
    Distance:1522.52,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"VRN",
    To:"FCO",
    Distance:414.101,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VRN",
    To:"FRA",
    Distance:543.92,
    Airport:"Air Dolomiti"
}),
new Routes(
{
    From:"VRN",
    To:"FRA",
    Distance:543.92,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VRN",
    To:"FUE",
    Distance:2875.34,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"VRN",
    To:"HAM",
    Distance:917.939,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"VRN",
    To:"KIV",
    Distance:1396.82,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"VRN",
    To:"KIV",
    Distance:1396.82,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"VRN",
    To:"LGW",
    Distance:1038.07,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"VRN",
    To:"LGW",
    Distance:1038.07,
    Airport:"British Airways"
}),
new Routes(
{
    From:"VRN",
    To:"LGW",
    Distance:1038.07,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"VRN",
    To:"LGW",
    Distance:1038.07,
    Airport:"easyJet"
}),
new Routes(
{
    From:"VRN",
    To:"MAN",
    Distance:1296.76,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"VRN",
    To:"MAN",
    Distance:1296.76,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"VRN",
    To:"MUC",
    Distance:335.917,
    Airport:"Air Dolomiti"
}),
new Routes(
{
    From:"VRN",
    To:"MUC",
    Distance:335.917,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"VRN",
    To:"NAP",
    Distance:572.278,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"VRN",
    To:"OLB",
    Distance:512.245,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"VRN",
    To:"OTP",
    Distance:1198.24,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"VRN",
    To:"PMO",
    Distance:823.214,
    Airport:"Air One"
}),
new Routes(
{
    From:"VRN",
    To:"PMO",
    Distance:823.214,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"VRN",
    To:"PMO",
    Distance:823.214,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VRN",
    To:"TFS",
    Distance:3090.09,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"VRN",
    To:"TIA",
    Distance:838.921,
    Airport:"Air One"
}),
new Routes(
{
    From:"VRN",
    To:"TIA",
    Distance:838.921,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"VRN",
    To:"TIA",
    Distance:838.921,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"VRN",
    To:"TIA",
    Distance:838.921,
    Airport:"Excel Airways"
}),
new Routes(
{
    From:"VRN",
    To:"TIA",
    Distance:838.921,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"VRN",
    To:"TXL",
    Distance:815.492,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"VSA",
    To:"CUN",
    Distance:708.286,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"VSA",
    To:"GDL",
    Distance:1136.49,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"VSA",
    To:"IAH",
    Distance:1357.24,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"VSA",
    To:"MEX",
    Distance:677.823,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"VSA",
    To:"MEX",
    Distance:677.823,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"VSA",
    To:"MEX",
    Distance:677.823,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"VSA",
    To:"MID",
    Distance:465.366,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"VSA",
    To:"MID",
    Distance:465.366,
    Airport:"Mongolian International Air Lines "
}),
new Routes(
{
    From:"VSA",
    To:"MTY",
    Distance:1145.85,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"VSA",
    To:"PAZ",
    Distance:566.88,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"VSA",
    To:"PAZ",
    Distance:566.88,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"VSA",
    To:"VER",
    Distance:377.468,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"VSA",
    To:"VER",
    Distance:377.468,
    Airport:"Mongolian International Air Lines "
}),
new Routes(
{
    From:"VST",
    To:"AGP",
    Distance:2963.06,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VST",
    To:"ALC",
    Distance:2663.24,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VST",
    To:"STN",
    Distance:1330.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VTE",
    To:"BKK",
    Distance:516.817,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"VTE",
    To:"BKK",
    Distance:516.817,
    Airport:"FlyNordic"
}),
new Routes(
{
    From:"VTE",
    To:"BKK",
    Distance:516.817,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"VTE",
    To:"BKK",
    Distance:516.817,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"VTE",
    To:"CAN",
    Distance:1267.45,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"VTE",
    To:"HAN",
    Distance:494.612,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"VTE",
    To:"HAN",
    Distance:494.612,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"VTE",
    To:"ICN",
    Distance:3178.71,
    Airport:"Jin Air"
}),
new Routes(
{
    From:"VTE",
    To:"ICN",
    Distance:3178.71,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"VTE",
    To:"KMG",
    Distance:779.037,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"VTE",
    To:"KMG",
    Distance:779.037,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"VTE",
    To:"KUL",
    Distance:1697.47,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"VTE",
    To:"LPQ",
    Distance:216.515,
    Airport:"FlyNordic"
}),
new Routes(
{
    From:"VTE",
    To:"LPQ",
    Distance:216.515,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"VTE",
    To:"LXG",
    Distance:352.181,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"VTE",
    To:"NNG",
    Distance:778.338,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"VTE",
    To:"ODY",
    Distance:305.495,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"VTE",
    To:"PKZ",
    Distance:467.426,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"VTE",
    To:"PNH",
    Distance:757.061,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"VTE",
    To:"PNH",
    Distance:757.061,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"VTE",
    To:"SIN",
    Distance:1856.66,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"VTE",
    To:"VII",
    Distance:338.354,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"VTE",
    To:"XKH",
    Distance:174.194,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"VTE",
    To:"ZVK",
    Distance:282.354,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"VTZ",
    To:"BBI",
    Distance:391.221,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"VTZ",
    To:"BLR",
    Distance:797.626,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"VTZ",
    To:"BLR",
    Distance:797.626,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"VTZ",
    To:"BLR",
    Distance:797.626,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"VTZ",
    To:"BLR",
    Distance:797.626,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"VTZ",
    To:"BOM",
    Distance:1103.04,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"VTZ",
    To:"BOM",
    Distance:1103.04,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"VTZ",
    To:"BOM",
    Distance:1103.04,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"VTZ",
    To:"CCU",
    Distance:773.114,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"VTZ",
    To:"CCU",
    Distance:773.114,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"VTZ",
    To:"DEL",
    Distance:1358,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"VTZ",
    To:"HYD",
    Distance:505.086,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"VTZ",
    To:"HYD",
    Distance:505.086,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"VTZ",
    To:"HYD",
    Distance:505.086,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"VTZ",
    To:"MAA",
    Distance:618.626,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"VTZ",
    To:"MAA",
    Distance:618.626,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"VTZ",
    To:"SIN",
    Distance:2908.81,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"VTZ",
    To:"SIN",
    Distance:2908.81,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"VUP",
    To:"BOG",
    Distance:645.153,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"VUP",
    To:"BOG",
    Distance:645.153,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"VVC",
    To:"BOG",
    Distance:83.7617,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"VVC",
    To:"BOG",
    Distance:83.7617,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"VVC",
    To:"BOG",
    Distance:83.7617,
    Airport:"SATENA"
}),
new Routes(
{
    From:"VVC",
    To:"LMC",
    Distance:221.974,
    Airport:"SATENA"
}),
new Routes(
{
    From:"VVC",
    To:"MVP",
    Distance:495.887,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"VVC",
    To:"MVP",
    Distance:495.887,
    Airport:"SATENA"
}),
new Routes(
{
    From:"VVC",
    To:"PCR",
    Distance:713.904,
    Airport:"SATENA"
}),
new Routes(
{
    From:"VVC",
    To:"PDA",
    Distance:633.662,
    Airport:"SATENA"
}),
new Routes(
{
    From:"VVI",
    To:"ASU",
    Distance:1024.87,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"VVI",
    To:"ASU",
    Distance:1024.87,
    Airport:"TAM Mercosur"
}),
new Routes(
{
    From:"VVI",
    To:"CBB",
    Distance:323.469,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"VVI",
    To:"CBB",
    Distance:323.469,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"VVI",
    To:"EZE",
    Distance:1963.67,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"VVI",
    To:"EZE",
    Distance:1963.67,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"VVI",
    To:"GRU",
    Distance:1849.14,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"VVI",
    To:"GRU",
    Distance:1849.14,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"VVI",
    To:"IQQ",
    Distance:806.993,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"VVI",
    To:"LIM",
    Distance:1626.58,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"VVI",
    To:"LIM",
    Distance:1626.58,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"VVI",
    To:"LIM",
    Distance:1626.58,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"VVI",
    To:"LPB",
    Distance:552.005,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"VVI",
    To:"LPB",
    Distance:552.005,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"VVI",
    To:"LPB",
    Distance:552.005,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"VVI",
    To:"MAD",
    Distance:8917.67,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"VVI",
    To:"MAD",
    Distance:8917.67,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"VVI",
    To:"MIA",
    Distance:5174.16,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"VVI",
    To:"MIA",
    Distance:5174.16,
    Airport:"US Airways"
}),
new Routes(
{
    From:"VVI",
    To:"PTY",
    Distance:3465.65,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"VVI",
    To:"SRE",
    Distance:273.147,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"VVI",
    To:"SRE",
    Distance:273.147,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"VVI",
    To:"TJA",
    Distance:464.774,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"VVI",
    To:"TJA",
    Distance:464.774,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"BQS",
    Distance:859.691,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"VVO",
    To:"DME",
    Distance:6410.29,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"FNJ",
    Distance:712.51,
    Airport:"Air Koryo"
}),
new Routes(
{
    From:"VVO",
    To:"HKG",
    Distance:2884.22,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"VVO",
    To:"HKG",
    Distance:2884.22,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"ICN",
    Distance:816.433,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"ICN",
    Distance:816.433,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"ICN",
    Distance:816.433,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"VVO",
    To:"ICN",
    Distance:816.433,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"ICN",
    Distance:816.433,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"IKT",
    Distance:2275.89,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"KHV",
    Distance:616.715,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"KHV",
    Distance:616.715,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"NRT",
    Distance:1102.94,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"NRT",
    Distance:1102.94,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"OVB",
    Distance:3729.55,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"OVB",
    Distance:3729.55,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"PEK",
    Distance:1340.73,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"PKC",
    Distance:2210.8,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"PKC",
    Distance:2210.8,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"PUS",
    Distance:954.581,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"SVO",
    Distance:6404.46,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"UUS",
    Distance:914.28,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"UUS",
    Distance:914.28,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"YKS",
    Distance:2084.52,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"VVO",
    To:"YKS",
    Distance:2084.52,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"VXC",
    To:"APL",
    Distance:478.378,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"VXC",
    To:"TET",
    Distance:360.091,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"VXE",
    To:"LIS",
    Distance:2889.34,
    Airport:"TACV"
}),
new Routes(
{
    From:"VXE",
    To:"LIS",
    Distance:2889.34,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"VXE",
    To:"SID",
    Distance:224.347,
    Airport:"TACV"
}),
new Routes(
{
    From:"VXE",
    To:"SNE",
    Distance:86.423,
    Airport:"TACV"
}),
new Routes(
{
    From:"VXO",
    To:"ALC",
    Distance:2356.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"VXO",
    To:"AMS",
    Distance:820.537,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"VXO",
    To:"ARN",
    Distance:355.491,
    Airport:"NextJet"
}),
new Routes(
{
    From:"VXO",
    To:"ARN",
    Distance:355.491,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"VXO",
    To:"BMA",
    Distance:329.006,
    Airport:"Golden Air"
}),
new Routes(
{
    From:"VXO",
    To:"BMA",
    Distance:329.006,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"VXO",
    To:"OSL",
    Distance:419.445,
    Airport:"NextJet"
}),
new Routes(
{
    From:"WAA",
    To:"KTS",
    Distance:81.8589,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"WAA",
    To:"OME",
    Distance:175.1,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"WAA",
    To:"OME",
    Distance:175.1,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"WAA",
    To:"SHH",
    Distance:114.598,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"WAG",
    To:"AKL",
    Distance:329.117,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WAT",
    To:"BHX",
    Distance:363.998,
    Airport:"Flybe"
}),
new Routes(
{
    From:"WAT",
    To:"MAN",
    Distance:348.656,
    Airport:"Flybe"
}),
new Routes(
{
    From:"WAW",
    To:"AGP",
    Distance:2631.96,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"WAW",
    To:"AMS",
    Distance:1101.17,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"AMS",
    Distance:1101.17,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"ARN",
    Distance:853.605,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"ATH",
    Distance:1599.07,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"ATH",
    Distance:1599.07,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"BCN",
    Distance:1869.69,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"BCN",
    Distance:1869.69,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"BCN",
    Distance:1869.69,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"BCN",
    Distance:1869.69,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"WAW",
    To:"BCN",
    Distance:1869.69,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WAW",
    To:"BEG",
    Distance:818.411,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"WAW",
    To:"BEG",
    Distance:818.411,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"BGY",
    Distance:1092.48,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WAW",
    To:"BRU",
    Distance:1146.2,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"BUD",
    Distance:539.936,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"BUD",
    Distance:539.936,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WAW",
    To:"BVA",
    Distance:1354.46,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WAW",
    To:"CDG",
    Distance:1342.5,
    Airport:"Air France"
}),
new Routes(
{
    From:"WAW",
    To:"CDG",
    Distance:1342.5,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"CGN",
    Distance:965.93,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"WAW",
    To:"CPH",
    Distance:665.6,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"WAW",
    To:"CPH",
    Distance:665.6,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"CPH",
    Distance:665.6,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"WAW",
    To:"CRL",
    Distance:1160.7,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WAW",
    To:"DBV",
    Distance:1086.93,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"WAW",
    To:"DOH",
    Distance:3942.96,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"WAW",
    To:"DUB",
    Distance:1825.49,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"WAW",
    To:"DUS",
    Distance:981.287,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"WAW",
    To:"DUS",
    Distance:981.287,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"DUS",
    Distance:981.287,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"WAW",
    To:"DXB",
    Distance:4155.81,
    Airport:"Emirates"
}),
new Routes(
{
    From:"WAW",
    To:"DXB",
    Distance:4155.81,
    Airport:"Qantas"
}),
new Routes(
{
    From:"WAW",
    To:"EIN",
    Distance:1072.88,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WAW",
    To:"EVN",
    Distance:2228.87,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"FCO",
    Distance:1326.19,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"WAW",
    To:"FCO",
    Distance:1326.19,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WAW",
    To:"FRA",
    Distance:898.35,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"FRA",
    Distance:898.35,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"FRA",
    Distance:898.35,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"WAW",
    To:"GDN",
    Distance:296.85,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"GLA",
    Distance:1699.22,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WAW",
    To:"GSE",
    Distance:850.711,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WAW",
    To:"GVA",
    Distance:1261.28,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"GVA",
    Distance:1261.28,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"WAW",
    To:"HAM",
    Distance:753.398,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"HAM",
    Distance:753.398,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"WAW",
    To:"HEL",
    Distance:939.003,
    Airport:"British Airways"
}),
new Routes(
{
    From:"WAW",
    To:"HEL",
    Distance:939.003,
    Airport:"Finnair"
}),
new Routes(
{
    From:"WAW",
    To:"HRK",
    Distance:1097.55,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WAW",
    To:"IST",
    Distance:1379.29,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"IST",
    Distance:1379.29,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"JFK",
    Distance:6847.76,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"KBP",
    Distance:719.266,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"KBP",
    Distance:719.266,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"KRK",
    Distance:246.395,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"KTW",
    Distance:229.273,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"KUT",
    Distance:1957.54,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WAW",
    To:"LCA",
    Distance:2169.48,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"LED",
    Distance:1025.07,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"LHR",
    Distance:1469.42,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"WAW",
    To:"LHR",
    Distance:1469.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"LHR",
    Distance:1469.42,
    Airport:"British Airways"
}),
new Routes(
{
    From:"WAW",
    To:"LHR",
    Distance:1469.42,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"LHR",
    Distance:1469.42,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"LIN",
    Distance:1133.96,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"WAW",
    To:"LIS",
    Distance:2748.96,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"LIS",
    Distance:2748.96,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"WAW",
    To:"LJU",
    Distance:811.884,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"WAW",
    To:"LJU",
    Distance:811.884,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"LPL",
    Distance:1600.77,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WAW",
    To:"LTN",
    Distance:1455.02,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WAW",
    To:"LWO",
    Distance:334.962,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"MAD",
    Distance:2269.75,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"MMX",
    Distance:622.49,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WAW",
    To:"MSQ",
    Distance:509.253,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"MSQ",
    Distance:509.253,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"MUC",
    Distance:777.337,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"MUC",
    Distance:777.337,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"WAW",
    To:"MXP",
    Distance:1149.98,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"NCE",
    Distance:1390.49,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"NYO",
    Distance:779.151,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WAW",
    To:"ODS",
    Distance:948.778,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"ORD",
    Distance:7518.9,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"OSL",
    Distance:1079.1,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"WAW",
    To:"OTP",
    Distance:925.085,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"OTP",
    Distance:925.085,
    Airport:"Tarom"
}),
new Routes(
{
    From:"WAW",
    To:"PEK",
    Distance:6943.77,
    Airport:"Air China"
}),
new Routes(
{
    From:"WAW",
    To:"PEK",
    Distance:6943.77,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"POZ",
    Distance:282.998,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"PRG",
    Distance:521.014,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"PRG",
    Distance:521.014,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"PRG",
    Distance:521.014,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"WAW",
    To:"RIX",
    Distance:563.277,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"WAW",
    To:"RIX",
    Distance:563.277,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"RZE",
    Distance:240.078,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"SOF",
    Distance:1068.78,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"WAW",
    To:"SOF",
    Distance:1068.78,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"SPU",
    Distance:1020.02,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"WAW",
    To:"SVG",
    Distance:1215.06,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"WAW",
    To:"SVO",
    Distance:1150.18,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"SVO",
    Distance:1150.18,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"SZZ",
    Distance:436.368,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"TBS",
    Distance:2148.14,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"TLL",
    Distance:840.994,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"TLV",
    Distance:2508.29,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"TLV",
    Distance:2508.29,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"TLV",
    Distance:2508.29,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WAW",
    To:"TRF",
    Distance:1027.23,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WAW",
    To:"TXL",
    Distance:523.036,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"WAW",
    To:"VIE",
    Distance:548.933,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"VIE",
    Distance:548.933,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"VNO",
    Distance:396.49,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"WRO",
    Distance:305.419,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"YYZ",
    Distance:6934.67,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"WAW",
    To:"YYZ",
    Distance:6934.67,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"ZAD",
    Distance:987.542,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"WAW",
    To:"ZRH",
    Distance:1031,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WAW",
    To:"ZRH",
    Distance:1031,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"WBB",
    To:"KOT",
    Distance:82.7553,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"WBB",
    To:"OME",
    Distance:189.926,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"WBB",
    To:"OME",
    Distance:189.926,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"WBB",
    To:"SMK",
    Distance:8.80516,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"WBB",
    To:"SMK",
    Distance:8.80516,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"WBB",
    To:"UNK",
    Distance:83.8156,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"WBB",
    To:"UNK",
    Distance:83.8156,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"WBM",
    To:"POM",
    Distance:559.321,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"WDH",
    To:"ACC",
    Distance:3665.48,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"WDH",
    To:"CPT",
    Distance:1281.15,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"WDH",
    To:"CPT",
    Distance:1281.15,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"WDH",
    To:"FRA",
    Distance:8110.98,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"WDH",
    To:"HRE",
    Distance:1508.93,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"WDH",
    To:"JNB",
    Distance:1165.22,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"WDH",
    To:"JNB",
    Distance:1165.22,
    Airport:"British Airways"
}),
new Routes(
{
    From:"WDH",
    To:"JNB",
    Distance:1165.22,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"WDH",
    To:"JNB",
    Distance:1165.22,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"WDH",
    To:"JNB",
    Distance:1165.22,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"WDH",
    To:"LAD",
    Distance:1581.28,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"WDH",
    To:"LAD",
    Distance:1581.28,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"WDH",
    To:"LUD",
    Distance:518.183,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"WDH",
    To:"LUN",
    Distance:1402.47,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"WDH",
    To:"LUN",
    Distance:1402.47,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"WDH",
    To:"MUB",
    Distance:678.77,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"WDH",
    To:"SDD",
    Distance:935.056,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"WDH",
    To:"VFA",
    Distance:1000.45,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"WDH",
    To:"WVB",
    Distance:294.076,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"WEF",
    To:"CAN",
    Distance:1575.83,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WEF",
    To:"DLC",
    Distance:334.151,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WEF",
    To:"HGH",
    Distance:723.899,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WEF",
    To:"NGB",
    Distance:788.953,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WEF",
    To:"PEK",
    Distance:441.063,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WEF",
    To:"PVG",
    Distance:660.173,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WEF",
    To:"SHE",
    Distance:637.9,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WEI",
    To:"CNS",
    Distance:623.157,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"WEI",
    To:"CNS",
    Distance:623.157,
    Airport:"Qantas"
}),
new Routes(
{
    From:"WGA",
    To:"MEL",
    Distance:364.466,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"WGA",
    To:"SYD",
    Distance:365.838,
    Airport:"Qantas"
}),
new Routes(
{
    From:"WGA",
    To:"SYD",
    Distance:365.838,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"WGP",
    To:"DPS",
    Distance:572.827,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"WHK",
    To:"AKL",
    Distance:213.036,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WIC",
    To:"ABZ",
    Distance:149.475,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"WIC",
    To:"EDI",
    Distance:279.482,
    Airport:"Flybe"
}),
new Routes(
{
    From:"WIL",
    To:"ASV",
    Distance:154.998,
    Airport:"Flightline"
}),
new Routes(
{
    From:"WIL",
    To:"JRO",
    Distance:236.132,
    Airport:"Fly Air"
}),
new Routes(
{
    From:"WIL",
    To:"KTL",
    Distance:328.098,
    Airport:"Flightline"
}),
new Routes(
{
    From:"WIL",
    To:"LAU",
    Distance:467.088,
    Airport:"Flightline"
}),
new Routes(
{
    From:"WIL",
    To:"LAU",
    Distance:467.088,
    Airport:"Fly Air"
}),
new Routes(
{
    From:"WIL",
    To:"LKG",
    Distance:672.804,
    Airport:"Flightline"
}),
new Routes(
{
    From:"WIL",
    To:"MRE",
    Distance:201.067,
    Airport:"Flightline"
}),
new Routes(
{
    From:"WIL",
    To:"MRE",
    Distance:201.067,
    Airport:"Fly Air"
}),
new Routes(
{
    From:"WIL",
    To:"NYK",
    Distance:141.611,
    Airport:"Fly Air"
}),
new Routes(
{
    From:"WIL",
    To:"UAS",
    Distance:220.952,
    Airport:"Fly Air"
}),
new Routes(
{
    From:"WIL",
    To:"UKA",
    Distance:450.725,
    Airport:"Flightline"
}),
new Routes(
{
    From:"WIL",
    To:"UKA",
    Distance:450.725,
    Airport:"Fly Air"
}),
new Routes(
{
    From:"WIL",
    To:"WJR",
    Distance:498.115,
    Airport:"Flightline"
}),
new Routes(
{
    From:"WIN",
    To:"LRE",
    Distance:170.673,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"WIN",
    To:"TSV",
    Distance:515.626,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"WJR",
    To:"HGA",
    Distance:971.946,
    Airport:"Flightline"
}),
new Routes(
{
    From:"WJR",
    To:"MGQ",
    Distance:580.202,
    Airport:"Flightline"
}),
new Routes(
{
    From:"WJR",
    To:"NBO",
    Distance:488.831,
    Airport:"Flightline"
}),
new Routes(
{
    From:"WJR",
    To:"WIL",
    Distance:498.115,
    Airport:"Flightline"
}),
new Routes(
{
    From:"WJU",
    To:"CJU",
    Distance:456.388,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"WKJ",
    To:"CTS",
    Distance:292.456,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"WKJ",
    To:"HND",
    Distance:1108.64,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"WLG",
    To:"AKL",
    Distance:480.271,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"AKL",
    Distance:480.271,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"WLG",
    To:"BHE",
    Distance:80.8036,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"BNE",
    Distance:2510.96,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"BNE",
    Distance:2510.96,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"WLG",
    To:"CHC",
    Distance:304.322,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"CHC",
    Distance:304.322,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"WLG",
    To:"DUD",
    Distance:631.59,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"GIS",
    Distance:400.942,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"HLZ",
    Distance:387.432,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"IVC",
    Distance:767.967,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"MEL",
    Distance:2589.46,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"MEL",
    Distance:2589.46,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WLG",
    To:"MEL",
    Distance:2589.46,
    Airport:"Emirates"
}),
new Routes(
{
    From:"WLG",
    To:"MEL",
    Distance:2589.46,
    Airport:"Qantas"
}),
new Routes(
{
    From:"WLG",
    To:"MEL",
    Distance:2589.46,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"WLG",
    To:"NPE",
    Distance:270.927,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"NPL",
    Distance:263.247,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"NSN",
    Distance:132.347,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"PMR",
    Distance:131.125,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"ROT",
    Distance:380.463,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"SYD",
    Distance:2227.7,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"SYD",
    Distance:2227.7,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WLG",
    To:"SYD",
    Distance:2227.7,
    Airport:"Emirates"
}),
new Routes(
{
    From:"WLG",
    To:"SYD",
    Distance:2227.7,
    Airport:"Qantas"
}),
new Routes(
{
    From:"WLG",
    To:"SYD",
    Distance:2227.7,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"WLG",
    To:"TIU",
    Distance:441.205,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"TRG",
    Distance:423.587,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"TUO",
    Distance:307.628,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"WRE",
    Distance:619.302,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"WSZ",
    Distance:272.239,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLG",
    To:"ZQN",
    Distance:640.528,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WLH",
    To:"SON",
    Distance:51.5543,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"WLK",
    To:"OTZ",
    Distance:118.994,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"WLK",
    To:"OTZ",
    Distance:118.994,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"WLS",
    To:"FUT",
    Distance:234.268,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"WLS",
    To:"NAN",
    Distance:846.169,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"WLS",
    To:"NOU",
    Distance:2101.17,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"WMI",
    To:"ALC",
    Distance:2270.37,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"BCN",
    Distance:1869.3,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"BGY",
    Distance:1095.12,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"BLQ",
    Distance:1116.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"BRS",
    Distance:1600.25,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"BVA",
    Distance:1336.57,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"CHQ",
    Distance:1901.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"CIA",
    Distance:1330.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"CRL",
    Distance:1141.41,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"DUB",
    Distance:1796.7,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"EIN",
    Distance:1050.91,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"EMA",
    Distance:1477.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"GDN",
    Distance:258.556,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"LPL",
    Distance:1572.51,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"MAN",
    Distance:1534.32,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"MRS",
    Distance:1519.89,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"NYO",
    Distance:742.499,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"PIK",
    Distance:1675.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"PMI",
    Distance:1982.69,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"PSA",
    Distance:1235.01,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"RYG",
    Distance:983.522,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"SKG",
    Distance:1338.35,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"SNN",
    Distance:1984.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"STN",
    Distance:1389.22,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"TPS",
    Distance:1736.09,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMI",
    To:"WRO",
    Distance:299.289,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WMN",
    To:"ANM",
    Distance:83.4314,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"WMN",
    To:"SVB",
    Distance:138.976,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"WMN",
    To:"TMM",
    Distance:298.871,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"WMN",
    To:"TNR",
    Distance:441.276,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"WMO",
    To:"GLV",
    Distance:24.7217,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"WMO",
    To:"GLV",
    Distance:24.7217,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"WMO",
    To:"OME",
    Distance:98.9094,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"WMO",
    To:"OME",
    Distance:98.9094,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"WMR",
    To:"TMM",
    Distance:220.102,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"WMX",
    To:"DJJ",
    Distance:242.329,
    Airport:"Illinois Airways"
}),
new Routes(
{
    From:"WNH",
    To:"KMG",
    Distance:235.464,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WNH",
    To:"KMG",
    Distance:235.464,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WNP",
    To:"MNL",
    Distance:263.61,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"WNP",
    To:"MNL",
    Distance:263.61,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"WNR",
    To:"BVI",
    Distance:336.995,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"WNR",
    To:"ULP",
    Distance:207.111,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"WNZ",
    To:"CAN",
    Distance:908.362,
    Airport:"Air China"
}),
new Routes(
{
    From:"WNZ",
    To:"CAN",
    Distance:908.362,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"CAN",
    Distance:908.362,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"CAN",
    Distance:908.362,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"CAN",
    Distance:908.362,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"CAN",
    Distance:908.362,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"CGO",
    Distance:991.54,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"CGO",
    Distance:991.54,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"CJU",
    Distance:823.35,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"CKG",
    Distance:1398.03,
    Airport:"Air China"
}),
new Routes(
{
    From:"WNZ",
    To:"CKG",
    Distance:1398.03,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"CKG",
    Distance:1398.03,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"CKG",
    Distance:1398.03,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"CKG",
    Distance:1398.03,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"CSX",
    Distance:749.497,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"CSX",
    Distance:749.497,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"CSX",
    Distance:749.497,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"CSX",
    Distance:749.497,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"CTU",
    Distance:1665.03,
    Airport:"Air China"
}),
new Routes(
{
    From:"WNZ",
    To:"CTU",
    Distance:1665.03,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"WNZ",
    To:"CTU",
    Distance:1665.03,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"CTU",
    Distance:1665.03,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"DAD",
    Distance:1853.02,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"FUG",
    Distance:735.153,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"WNZ",
    To:"HAK",
    Distance:1378.18,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"HIA",
    Distance:672.11,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"WNZ",
    To:"HKG",
    Distance:935.6,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"WNZ",
    To:"HKG",
    Distance:935.6,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"HKG",
    Distance:935.6,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"WNZ",
    To:"HRB",
    Distance:2026.01,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"KHN",
    Distance:495.826,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"WNZ",
    To:"KMG",
    Distance:1829.95,
    Airport:"Air China"
}),
new Routes(
{
    From:"WNZ",
    To:"KMG",
    Distance:1829.95,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"KMG",
    Distance:1829.95,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"KWE",
    Distance:1396.92,
    Airport:"Air China"
}),
new Routes(
{
    From:"WNZ",
    To:"KWE",
    Distance:1396.92,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"KWE",
    Distance:1396.92,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"KWL",
    Distance:1115.86,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"LYI",
    Distance:826.221,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"WNZ",
    To:"NAY",
    Distance:1382.28,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"NAY",
    Distance:1382.28,
    Airport:"China United"
}),
new Routes(
{
    From:"WNZ",
    To:"NNG",
    Distance:1403.75,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"WNZ",
    To:"PEK",
    Distance:1408.55,
    Airport:"Air China"
}),
new Routes(
{
    From:"WNZ",
    To:"PEK",
    Distance:1408.55,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"PEK",
    Distance:1408.55,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"PEK",
    Distance:1408.55,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"PVG",
    Distance:370.932,
    Airport:"Air China"
}),
new Routes(
{
    From:"WNZ",
    To:"PVG",
    Distance:370.932,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"PVG",
    Distance:370.932,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"SHA",
    Distance:368.34,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"SHA",
    Distance:368.34,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"SHA",
    Distance:368.34,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"SHE",
    Distance:1514.15,
    Airport:"Air China"
}),
new Routes(
{
    From:"WNZ",
    To:"SHE",
    Distance:1514.15,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"SJW",
    Distance:1286.78,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"SYX",
    Distance:1582.69,
    Airport:"Air China"
}),
new Routes(
{
    From:"WNZ",
    To:"SYX",
    Distance:1582.69,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"SYX",
    Distance:1582.69,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"SZX",
    Distance:918.879,
    Airport:"Air China"
}),
new Routes(
{
    From:"WNZ",
    To:"SZX",
    Distance:918.879,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"SZX",
    Distance:918.879,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"SZX",
    Distance:918.879,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"TAO",
    Distance:929.997,
    Airport:"Air China"
}),
new Routes(
{
    From:"WNZ",
    To:"TAO",
    Distance:929.997,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"WNZ",
    To:"TAO",
    Distance:929.997,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"TAO",
    Distance:929.997,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"TNA",
    Distance:1051.35,
    Airport:"Air China"
}),
new Routes(
{
    From:"WNZ",
    To:"TNA",
    Distance:1051.35,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"TPE",
    Distance:317.448,
    Airport:"Air China"
}),
new Routes(
{
    From:"WNZ",
    To:"TSA",
    Distance:323.663,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"WUH",
    Distance:718.575,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"WUH",
    Distance:718.575,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"WUH",
    Distance:718.575,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"WUH",
    Distance:718.575,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"XIY",
    Distance:1359.71,
    Airport:"Air China"
}),
new Routes(
{
    From:"WNZ",
    To:"XIY",
    Distance:1359.71,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"XIY",
    Distance:1359.71,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"XIY",
    Distance:1359.71,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"XIY",
    Distance:1359.71,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WNZ",
    To:"ZUH",
    Distance:999.136,
    Airport:"Air China"
}),
new Routes(
{
    From:"WNZ",
    To:"ZUH",
    Distance:999.136,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WRE",
    To:"AKL",
    Distance:143.043,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WRE",
    To:"WLG",
    Distance:619.302,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WRG",
    To:"KTN",
    Distance:132.002,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"WRG",
    To:"PSG",
    Distance:49.8244,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"WRL",
    To:"CYS",
    Distance:404.569,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"WRL",
    To:"CYS",
    Distance:404.569,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"WRL",
    To:"CYS",
    Distance:404.569,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"WRO",
    To:"AGP",
    Distance:2331.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"ALC",
    Distance:1973.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"BGY",
    Distance:802.752,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"BLQ",
    Distance:840.796,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"BRS",
    Distance:1361,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"BRU",
    Distance:867.039,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"WRO",
    To:"BVA",
    Distance:1063.76,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WRO",
    To:"CDG",
    Distance:1047.65,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"WRO",
    To:"CHQ",
    Distance:1826.22,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"CIA",
    Distance:1084.97,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"CPH",
    Distance:574.958,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"WRO",
    To:"DUB",
    Distance:1589.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"DUS",
    Distance:704.855,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"WRO",
    To:"EMA",
    Distance:1259.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"FRA",
    Distance:600.941,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WRO",
    To:"FRA",
    Distance:600.941,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"WRO",
    To:"GDN",
    Distance:379.349,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"WRO",
    To:"GRO",
    Distance:1483.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"LPL",
    Distance:1362.57,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"LTN",
    Distance:1194.9,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WRO",
    To:"MLA",
    Distance:1706.04,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"MUC",
    Distance:477.086,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WRO",
    To:"MUC",
    Distance:477.086,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"WRO",
    To:"ORK",
    Distance:1750.7,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"PIK",
    Distance:1501.28,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"RYG",
    Distance:997.246,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"SNN",
    Distance:1770.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"STN",
    Distance:1153.48,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"TRF",
    Distance:991.535,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"WRO",
    To:"WAW",
    Distance:305.419,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"WRO",
    To:"WMI",
    Distance:299.289,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"WRO",
    To:"ZRH",
    Distance:726.843,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"WRY",
    To:"KOI",
    Distance:43.7218,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"WRY",
    To:"PPW",
    Distance:2.82266,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"WSN",
    To:"EGX",
    Distance:61.4152,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"WSX",
    To:"DHB",
    Distance:3.90992,
    Airport:"Kenmore Air"
}),
new Routes(
{
    From:"WSX",
    To:"LPS",
    Distance:14.9262,
    Airport:"Kenmore Air"
}),
new Routes(
{
    From:"WSZ",
    To:"WLG",
    Distance:272.239,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"WTK",
    To:"KVL",
    Distance:69.7537,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"WTK",
    To:"KVL",
    Distance:69.7537,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"WTK",
    To:"OTZ",
    Distance:77.4836,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"WTL",
    To:"BET",
    Distance:67.0496,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"WTL",
    To:"KKH",
    Distance:43.2908,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"WUA",
    To:"HET",
    Distance:441.814,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"WUA",
    To:"HET",
    Distance:441.814,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUA",
    To:"NAY",
    Distance:818.87,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUA",
    To:"NAY",
    Distance:818.87,
    Airport:"China United"
}),
new Routes(
{
    From:"WUA",
    To:"PEK",
    Distance:834.447,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUA",
    To:"PEK",
    Distance:834.447,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WUA",
    To:"PEK",
    Distance:834.447,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUA",
    To:"XIY",
    Distance:619.226,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"AQG",
    Distance:272.7,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"BAV",
    Distance:1151.3,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"BKK",
    Distance:2348.07,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"CAN",
    Distance:826.781,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"CAN",
    Distance:826.781,
    Airport:"Air France"
}),
new Routes(
{
    From:"WUH",
    To:"CAN",
    Distance:826.781,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"CAN",
    Distance:826.781,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"CAN",
    Distance:826.781,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"CDG",
    Distance:8865.01,
    Airport:"Air France"
}),
new Routes(
{
    From:"WUH",
    To:"CGQ",
    Distance:1713.4,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"CGQ",
    Distance:1713.4,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"CGQ",
    Distance:1713.4,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"CIH",
    Distance:615.753,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"CKG",
    Distance:736.198,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"CKG",
    Distance:736.198,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"CKG",
    Distance:736.198,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"CKG",
    Distance:736.198,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"CKG",
    Distance:736.198,
    Airport:"West Air China"
}),
new Routes(
{
    From:"WUH",
    To:"CKG",
    Distance:736.198,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"CNX",
    Distance:2034.17,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"CTU",
    Distance:981.182,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"CTU",
    Distance:981.182,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"CTU",
    Distance:981.182,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"CTU",
    Distance:981.182,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"WUH",
    To:"CTU",
    Distance:981.182,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"CTU",
    Distance:981.182,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"CTU",
    Distance:981.182,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"DLC",
    Distance:1128.2,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"WUH",
    To:"DLC",
    Distance:1128.2,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"DLC",
    Distance:1128.2,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"DLC",
    Distance:1128.2,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"WUH",
    To:"DMK",
    Distance:2335.22,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"WUH",
    To:"DSN",
    Distance:1076.58,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"WUH",
    To:"ENH",
    Distance:455.163,
    Airport:"Air France"
}),
new Routes(
{
    From:"WUH",
    To:"ENH",
    Distance:455.163,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"ENH",
    Distance:455.163,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"ENH",
    Distance:455.163,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"WUH",
    To:"FOC",
    Distance:758.449,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"FOC",
    Distance:758.449,
    Airport:"West Air China"
}),
new Routes(
{
    From:"WUH",
    To:"FOC",
    Distance:758.449,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"HAK",
    Distance:1263.51,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"HAK",
    Distance:1263.51,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"HAK",
    Distance:1263.51,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"WUH",
    To:"HET",
    Distance:1139.79,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"HET",
    Distance:1139.79,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"WUH",
    To:"HET",
    Distance:1139.79,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"HGH",
    Distance:599.594,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"WUH",
    To:"HGH",
    Distance:599.594,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"HGH",
    Distance:599.594,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"HGH",
    Distance:599.594,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"HGH",
    Distance:599.594,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"HKG",
    Distance:942.81,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"HKG",
    Distance:942.81,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"WUH",
    To:"HKG",
    Distance:942.81,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"HKG",
    Distance:942.81,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"WUH",
    To:"HRB",
    Distance:1952.1,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"HYN",
    Distance:739.891,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"WUH",
    To:"ICN",
    Distance:1348.15,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"ICN",
    Distance:1348.15,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"ICN",
    Distance:1348.15,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"WUH",
    To:"INC",
    Distance:1137.13,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"INC",
    Distance:1137.13,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"INC",
    Distance:1137.13,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"INC",
    Distance:1137.13,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"JJN",
    Distance:792.914,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"JJN",
    Distance:792.914,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"JJN",
    Distance:792.914,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"KHH",
    Distance:1097.23,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"KHH",
    Distance:1097.23,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"KHN",
    Distance:268.615,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"KMG",
    Distance:1296.67,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"KMG",
    Distance:1296.67,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"WUH",
    To:"KMG",
    Distance:1296.67,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"KMG",
    Distance:1296.67,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"KMG",
    Distance:1296.67,
    Airport:"KSY"
}),
new Routes(
{
    From:"WUH",
    To:"KMG",
    Distance:1296.67,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"KMG",
    Distance:1296.67,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"KMG",
    Distance:1296.67,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"KWE",
    Distance:862.882,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"KWE",
    Distance:862.882,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"WUH",
    To:"KWE",
    Distance:862.882,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"KWE",
    Distance:862.882,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"KWE",
    Distance:862.882,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"KWL",
    Distance:741.8,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"LHW",
    Distance:1146.63,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"LHW",
    Distance:1146.63,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"LHW",
    Distance:1146.63,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"LJG",
    Distance:1427.47,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"WUH",
    To:"LJG",
    Distance:1427.47,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"WUH",
    To:"LJG",
    Distance:1427.47,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"LYG",
    Distance:630.795,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"LYI",
    Distance:615.174,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"WUH",
    To:"LZH",
    Distance:871.778,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"MFM",
    Distance:962.033,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"MFM",
    Distance:962.033,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"WUH",
    To:"NGB",
    Distance:704.318,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"NGB",
    Distance:704.318,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"NNG",
    Distance:1088.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"NNG",
    Distance:1088.48,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"WUH",
    To:"NNG",
    Distance:1088.48,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"NNG",
    Distance:1088.48,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"NNG",
    Distance:1088.48,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"NNG",
    Distance:1088.48,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"NNG",
    Distance:1088.48,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"NTG",
    Distance:657.785,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"PEK",
    Distance:1055.77,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"PEK",
    Distance:1055.77,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"PEK",
    Distance:1055.77,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"PEK",
    Distance:1055.77,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"PEK",
    Distance:1055.77,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"PUS",
    Distance:1456.53,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"WUH",
    To:"PVG",
    Distance:725.338,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"PVG",
    Distance:725.338,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"PVG",
    Distance:725.338,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"PVG",
    Distance:725.338,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"PVG",
    Distance:725.338,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"SHA",
    Distance:680.914,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"SHA",
    Distance:680.914,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"SHA",
    Distance:680.914,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"SHA",
    Distance:680.914,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"SHE",
    Distance:1431.63,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"SHE",
    Distance:1431.63,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"SHE",
    Distance:1431.63,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"SIN",
    Distance:3445.2,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"SIN",
    Distance:3445.2,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"WUH",
    To:"SIN",
    Distance:3445.2,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"SWA",
    Distance:856.724,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"SYX",
    Distance:1469.62,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"WUH",
    To:"SYX",
    Distance:1469.62,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"SYX",
    Distance:1469.62,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"SYX",
    Distance:1469.62,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"WUH",
    To:"SZX",
    Distance:906.485,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"SZX",
    Distance:906.485,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"SZX",
    Distance:906.485,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"SZX",
    Distance:906.485,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"TAO",
    Distance:835.271,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"TAO",
    Distance:835.271,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"WUH",
    To:"TAO",
    Distance:835.271,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"TAO",
    Distance:835.271,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"TAO",
    Distance:835.271,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"TAO",
    Distance:835.271,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"TNA",
    Distance:730.147,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"TNA",
    Distance:730.147,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"TNA",
    Distance:730.147,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"TNA",
    Distance:730.147,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"TPE",
    Distance:937.007,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"TPE",
    Distance:937.007,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"TPE",
    Distance:937.007,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"TSA",
    Distance:960.932,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"WUH",
    To:"TSN",
    Distance:970.34,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"WUH",
    To:"TSN",
    Distance:970.34,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"TSN",
    Distance:970.34,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"TSN",
    Distance:970.34,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"TYN",
    Distance:787.717,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"TYN",
    Distance:787.717,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"URC",
    Distance:2758.5,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"URC",
    Distance:2758.5,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"URC",
    Distance:2758.5,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"WNZ",
    Distance:718.575,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"WNZ",
    Distance:718.575,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"WNZ",
    Distance:718.575,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"WNZ",
    Distance:718.575,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"WUX",
    Distance:597.229,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"WUX",
    Distance:597.229,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"XFN",
    Distance:236.97,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"XIY",
    Distance:653.342,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"XIY",
    Distance:653.342,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"XIY",
    Distance:653.342,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"XMN",
    Distance:793.804,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"XMN",
    Distance:793.804,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"XMN",
    Distance:793.804,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"XMN",
    Distance:793.804,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"WUH",
    To:"XMN",
    Distance:793.804,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"XMN",
    Distance:793.804,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"XMN",
    Distance:793.804,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"XMN",
    Distance:793.804,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"XNN",
    Distance:1292.96,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"XNN",
    Distance:1292.96,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"YCU",
    Distance:558.279,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"YNT",
    Distance:987.586,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUH",
    To:"YNT",
    Distance:987.586,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"YNT",
    Distance:987.586,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"YNZ",
    Distance:627.89,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"YTY",
    Distance:557.284,
    Airport:"KSY"
}),
new Routes(
{
    From:"WUH",
    To:"YTY",
    Distance:557.284,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUH",
    To:"ZUH",
    Distance:979.498,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUS",
    To:"CAN",
    Distance:672.283,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUS",
    To:"CAN",
    Distance:672.283,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WUS",
    To:"CKG",
    Distance:1129.77,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUS",
    To:"CKG",
    Distance:1129.77,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WUS",
    To:"HKG",
    Distance:727.298,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"WUS",
    To:"PEK",
    Distance:1382.53,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUS",
    To:"PEK",
    Distance:1382.53,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"WUS",
    To:"SHA",
    Distance:505.312,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUS",
    To:"TAO",
    Distance:978.148,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUS",
    To:"TAO",
    Distance:978.148,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WUS",
    To:"TNA",
    Distance:1020.68,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WUS",
    To:"XIY",
    Distance:1155.94,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WUS",
    To:"XMN",
    Distance:351.366,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUS",
    To:"XMN",
    Distance:351.366,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"WUS",
    To:"XMN",
    Distance:351.366,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"CAN",
    Distance:1142.4,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUX",
    To:"CAN",
    Distance:1142.4,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"CAN",
    Distance:1142.4,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"CAN",
    Distance:1142.4,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"CKG",
    Distance:1333.25,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUX",
    To:"CKG",
    Distance:1333.25,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"CKG",
    Distance:1333.25,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"CKG",
    Distance:1333.25,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"CSX",
    Distance:786.232,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"CSX",
    Distance:786.232,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"CTU",
    Distance:1572.15,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUX",
    To:"CTU",
    Distance:1572.15,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"CTU",
    Distance:1572.15,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"CTU",
    Distance:1572.15,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"DLC",
    Distance:836.836,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUX",
    To:"DLC",
    Distance:836.836,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"FOC",
    Distance:622.657,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUX",
    To:"FOC",
    Distance:622.657,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"HKG",
    Distance:1207.82,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"KIX",
    Distance:1418.85,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"WUX",
    To:"KIX",
    Distance:1418.85,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"MFM",
    Distance:1240.23,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"PEK",
    Distance:1015.42,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUX",
    To:"PEK",
    Distance:1015.42,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"PEK",
    Distance:1015.42,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"SHE",
    Distance:1128.7,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUX",
    To:"SHE",
    Distance:1128.7,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"SIN",
    Distance:3770.38,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"SYX",
    Distance:1837.54,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUX",
    To:"SYX",
    Distance:1837.54,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"SZX",
    Distance:1182.1,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUX",
    To:"SZX",
    Distance:1182.1,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"SZX",
    Distance:1182.1,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"SZX",
    Distance:1182.1,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"TAO",
    Distance:530.614,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"TPE",
    Distance:717.821,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"TPE",
    Distance:717.821,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"TPE",
    Distance:717.821,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"TPE",
    Distance:717.821,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"WUX",
    To:"WUH",
    Distance:597.229,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUX",
    To:"WUH",
    Distance:597.229,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"XIY",
    Distance:1136.95,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUX",
    To:"XIY",
    Distance:1136.95,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"XIY",
    Distance:1136.95,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"XMN",
    Distance:805.11,
    Airport:"Air China"
}),
new Routes(
{
    From:"WUX",
    To:"XMN",
    Distance:805.11,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WUX",
    To:"XMN",
    Distance:805.11,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WUZ",
    To:"KWE",
    Distance:564.102,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"WUZ",
    To:"NNG",
    Distance:328.55,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"WUZ",
    To:"ZUH",
    Distance:271.352,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"WVB",
    To:"CPT",
    Distance:1280.88,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"WVB",
    To:"JNB",
    Distance:1418.84,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"WVB",
    To:"WDH",
    Distance:294.076,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"WWK",
    To:"HGU",
    Distance:258.893,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"WWK",
    To:"HGU",
    Distance:258.893,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"WWK",
    To:"MAG",
    Distance:296.301,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"WWK",
    To:"MAG",
    Distance:296.301,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"WWK",
    To:"POM",
    Distance:760.442,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"WWK",
    To:"VAI",
    Distance:280.705,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"WWT",
    To:"BET",
    Distance:152.799,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"WWT",
    To:"BET",
    Distance:152.799,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"WXN",
    To:"CAN",
    Distance:958.631,
    Airport:"Air China"
}),
new Routes(
{
    From:"WXN",
    To:"CAN",
    Distance:958.631,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"WXN",
    To:"CTU",
    Distance:427.222,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"WXN",
    To:"KMG",
    Distance:855.125,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"WXN",
    To:"PEK",
    Distance:1265.68,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"WXN",
    To:"PVG",
    Distance:1276.93,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"WXN",
    To:"PVG",
    Distance:1276.93,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"WXN",
    To:"SZX",
    Distance:1057.3,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"WXN",
    To:"XIY",
    Distance:402.828,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WXN",
    To:"XIY",
    Distance:402.828,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"WXN",
    To:"XMN",
    Distance:1184.73,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"WXN",
    To:"XMN",
    Distance:1184.73,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"WYA",
    To:"ADL",
    Distance:229.704,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"XAP",
    To:"CWB",
    Distance:390.115,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"XAP",
    To:"FLN",
    Distance:410.009,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"XAP",
    To:"FLN",
    Distance:410.009,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"XAP",
    To:"POA",
    Distance:349.539,
    Airport:"Azul"
}),
new Routes(
{
    From:"XAP",
    To:"VCP",
    Distance:720.855,
    Airport:"Azul"
}),
new Routes(
{
    From:"XBJ",
    To:"MHD",
    Distance:372.541,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"XBJ",
    To:"THR",
    Distance:793.432,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"XCH",
    To:"CCK",
    Distance:984.695,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"XCH",
    To:"PER",
    Distance:2612.51,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"XCR",
    To:"OPO",
    Distance:1309.79,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"XCR",
    To:"RAK",
    Distance:2166.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"XFN",
    To:"CAN",
    Distance:978.88,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XFN",
    To:"CKG",
    Distance:602.716,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"XFN",
    To:"HGH",
    Distance:803.295,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"XFN",
    To:"NAY",
    Distance:924.97,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XFN",
    To:"NAY",
    Distance:924.97,
    Airport:"China United"
}),
new Routes(
{
    From:"XFN",
    To:"PEK",
    Distance:962.049,
    Airport:"Air China"
}),
new Routes(
{
    From:"XFN",
    To:"PEK",
    Distance:962.049,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XFN",
    To:"PVG",
    Distance:907.244,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"XFN",
    To:"SZX",
    Distance:1068.16,
    Airport:"Air China"
}),
new Routes(
{
    From:"XFN",
    To:"SZX",
    Distance:1068.16,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XFN",
    To:"SZX",
    Distance:1068.16,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XFN",
    To:"WUH",
    Distance:236.97,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XFN",
    To:"XMN",
    Distance:1020.14,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XFW",
    To:"TLS",
    Distance:1263.68,
    Airport:"Germania"
}),
new Routes(
{
    From:"XIC",
    To:"CKG",
    Distance:474.767,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"XIC",
    To:"CTU",
    Distance:334.846,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIC",
    To:"CTU",
    Distance:334.846,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIC",
    To:"CTU",
    Distance:334.846,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XIC",
    To:"KMG",
    Distance:337.833,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIL",
    To:"HET",
    Distance:481.238,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIL",
    To:"HET",
    Distance:481.238,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIL",
    To:"HET",
    Distance:481.238,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIL",
    To:"NAY",
    Distance:460.916,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIL",
    To:"NAY",
    Distance:460.916,
    Airport:"China United"
}),
new Routes(
{
    From:"XIL",
    To:"PEK",
    Distance:429.555,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIL",
    To:"PEK",
    Distance:429.555,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"BAV",
    Distance:688.519,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"BAV",
    Distance:688.519,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"XIY",
    To:"BHY",
    Distance:1436.25,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CAN",
    Distance:1306.01,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"CAN",
    Distance:1306.01,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CAN",
    Distance:1306.01,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CAN",
    Distance:1306.01,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CAN",
    Distance:1306.01,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CGD",
    Distance:672.635,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"CGQ",
    Distance:1733.71,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CKG",
    Distance:562,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"CKG",
    Distance:562,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"CKG",
    Distance:562,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CKG",
    Distance:562,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CKG",
    Distance:562,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CKG",
    Distance:562,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XIY",
    To:"CKG",
    Distance:562,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CKG",
    Distance:562,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CKG",
    Distance:562,
    Airport:"West Air China"
}),
new Routes(
{
    From:"XIY",
    To:"CKG",
    Distance:562,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CSX",
    Distance:814.833,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"CSX",
    Distance:814.833,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CSX",
    Distance:814.833,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CSX",
    Distance:814.833,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CSX",
    Distance:814.833,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"XIY",
    To:"CSX",
    Distance:814.833,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CSX",
    Distance:814.833,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CTU",
    Distance:622.732,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"CTU",
    Distance:622.732,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CTU",
    Distance:622.732,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CTU",
    Distance:622.732,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"XIY",
    To:"CTU",
    Distance:622.732,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CTU",
    Distance:622.732,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CTU",
    Distance:622.732,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CTU",
    Distance:622.732,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"CZX",
    Distance:1056.57,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"DAT",
    Distance:751.292,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"DLC",
    Distance:1244.23,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"DLC",
    Distance:1244.23,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"DLC",
    Distance:1244.23,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"DLC",
    Distance:1244.23,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"DLC",
    Distance:1244.23,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"DLC",
    Distance:1244.23,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"DMK",
    Distance:2425.75,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"XIY",
    To:"DNH",
    Distance:1407.87,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"DNH",
    Distance:1407.87,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"DSN",
    Distance:611.392,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"DSN",
    Distance:611.392,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"DSN",
    Distance:611.392,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"DYG",
    Distance:615.362,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"DYG",
    Distance:615.362,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XIY",
    To:"ENY",
    Distance:254.082,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"ENY",
    Distance:254.082,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"FOC",
    Distance:1410.95,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"FOC",
    Distance:1410.95,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"FOC",
    Distance:1410.95,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"FOC",
    Distance:1410.95,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"FOC",
    Distance:1410.95,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"FUG",
    Distance:675.871,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"GOQ",
    Distance:905.249,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"GXH",
    Distance:584.767,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"HAK",
    Distance:1622.42,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XIY",
    To:"HEL",
    Distance:6406.48,
    Airport:"Finnair"
}),
new Routes(
{
    From:"XIY",
    To:"HET",
    Distance:761.628,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"HET",
    Distance:761.628,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"HET",
    Distance:761.628,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"HFE",
    Distance:849.107,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"HFE",
    Distance:849.107,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"HFE",
    Distance:849.107,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"HFE",
    Distance:849.107,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XIY",
    To:"HGH",
    Distance:1192.58,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"HGH",
    Distance:1192.58,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"HGH",
    Distance:1192.58,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"HGH",
    Distance:1192.58,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"HGH",
    Distance:1192.58,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XIY",
    To:"HGH",
    Distance:1192.58,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"HGH",
    Distance:1192.58,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"HIA",
    Distance:959.574,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"HKG",
    Distance:1440.49,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"XIY",
    To:"HKG",
    Distance:1440.49,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"HKG",
    Distance:1440.49,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"XIY",
    To:"HMI",
    Distance:1604.41,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"HRB",
    Distance:1932.53,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"HRB",
    Distance:1932.53,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"HRB",
    Distance:1932.53,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"HRB",
    Distance:1932.53,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"HRB",
    Distance:1932.53,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"ICN",
    Distance:1625.45,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"ICN",
    Distance:1625.45,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"ICN",
    Distance:1625.45,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"XIY",
    To:"INC",
    Distance:511.237,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"INC",
    Distance:511.237,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"INC",
    Distance:511.237,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"INC",
    Distance:511.237,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"INC",
    Distance:511.237,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"INC",
    Distance:511.237,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"IQN",
    Distance:183.115,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"JDZ",
    Distance:976.733,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"JDZ",
    Distance:976.733,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"JGN",
    Distance:1100.23,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"JGS",
    Distance:1015.38,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"JNG",
    Distance:717.315,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"XIY",
    To:"JZH",
    Distance:501.288,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KHG",
    Distance:2944.72,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KHN",
    Distance:917.673,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KHN",
    Distance:917.673,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KHN",
    Distance:917.673,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KHN",
    Distance:917.673,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KMG",
    Distance:1200.13,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"KMG",
    Distance:1200.13,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"XIY",
    To:"KMG",
    Distance:1200.13,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KMG",
    Distance:1200.13,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KMG",
    Distance:1200.13,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KMG",
    Distance:1200.13,
    Airport:"KSY"
}),
new Routes(
{
    From:"XIY",
    To:"KMG",
    Distance:1200.13,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KMG",
    Distance:1200.13,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KWE",
    Distance:898.98,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"KWE",
    Distance:898.98,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"KWE",
    Distance:898.98,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KWE",
    Distance:898.98,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KWE",
    Distance:898.98,
    Airport:"China United"
}),
new Routes(
{
    From:"XIY",
    To:"KWE",
    Distance:898.98,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XIY",
    To:"KWE",
    Distance:898.98,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KWE",
    Distance:898.98,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KWL",
    Distance:1033.68,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"KWL",
    Distance:1033.68,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"KWL",
    Distance:1033.68,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KWL",
    Distance:1033.68,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KWL",
    Distance:1033.68,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"KWL",
    Distance:1033.68,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XIY",
    To:"KWL",
    Distance:1033.68,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"LHW",
    Distance:501.609,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"LHW",
    Distance:501.609,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"LHW",
    Distance:501.609,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"LHW",
    Distance:501.609,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"LHW",
    Distance:501.609,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"LHW",
    Distance:501.609,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"LJG",
    Distance:1169.98,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"XIY",
    To:"LJG",
    Distance:1169.98,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"LJG",
    Distance:1169.98,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XIY",
    To:"LJG",
    Distance:1169.98,
    Airport:"KSY"
}),
new Routes(
{
    From:"XIY",
    To:"LJG",
    Distance:1169.98,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"LXA",
    Distance:1776.27,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"LXA",
    Distance:1776.27,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"LXA",
    Distance:1776.27,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"LYI",
    Distance:884.8,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"LZO",
    Distance:698.521,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"MIG",
    Distance:502.679,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"NAO",
    Distance:481.731,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"NGB",
    Distance:1301.1,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"NKG",
    Distance:988.173,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"NKG",
    Distance:988.173,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"NKG",
    Distance:988.173,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"NKG",
    Distance:988.173,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"NKG",
    Distance:988.173,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"NKG",
    Distance:988.173,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"NNG",
    Distance:1317.63,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"NNG",
    Distance:1317.63,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"NNG",
    Distance:1317.63,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"NNG",
    Distance:1317.63,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"XIY",
    To:"NNG",
    Distance:1317.63,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"PEK",
    Distance:933.538,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"PEK",
    Distance:933.538,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"PEK",
    Distance:933.538,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"PEK",
    Distance:933.538,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"PEK",
    Distance:933.538,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"PUS",
    Distance:1841.53,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"XIY",
    To:"PVG",
    Distance:1273.14,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"PVG",
    Distance:1273.14,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"PVG",
    Distance:1273.14,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"PVG",
    Distance:1273.14,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"PVG",
    Distance:1273.14,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"PVG",
    Distance:1273.14,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"PVG",
    Distance:1273.14,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"PVG",
    Distance:1273.14,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"RLK",
    Distance:725.936,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"SHA",
    Distance:1229.2,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"SHA",
    Distance:1229.2,
    Airport:"China SSS"
}),
new Routes(
{
    From:"XIY",
    To:"SHA",
    Distance:1229.2,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"SHA",
    Distance:1229.2,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"SHA",
    Distance:1229.2,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"SHE",
    Distance:1487.41,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"SHE",
    Distance:1487.41,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"SHE",
    Distance:1487.41,
    Airport:"China SSS"
}),
new Routes(
{
    From:"XIY",
    To:"SHE",
    Distance:1487.41,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"SHE",
    Distance:1487.41,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"SHE",
    Distance:1487.41,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"SJW",
    Distance:681.747,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"SJW",
    Distance:681.747,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"SJW",
    Distance:681.747,
    Airport:"China United"
}),
new Routes(
{
    From:"XIY",
    To:"SJW",
    Distance:681.747,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XIY",
    To:"SYX",
    Distance:1796.35,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"SYX",
    Distance:1796.35,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"SYX",
    Distance:1796.35,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XIY",
    To:"SZX",
    Distance:1402.3,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"SZX",
    Distance:1402.3,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"SZX",
    Distance:1402.3,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"SZX",
    Distance:1402.3,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"SZX",
    Distance:1402.3,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"TAO",
    Distance:1072.56,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"TAO",
    Distance:1072.56,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"TAO",
    Distance:1072.56,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"TAO",
    Distance:1072.56,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"XIY",
    To:"TAO",
    Distance:1072.56,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"TAO",
    Distance:1072.56,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XIY",
    To:"TAO",
    Distance:1072.56,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"TNA",
    Distance:810.025,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"TNA",
    Distance:810.025,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"TNA",
    Distance:810.025,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"TNA",
    Distance:810.025,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"TNA",
    Distance:810.025,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XIY",
    To:"TNA",
    Distance:810.025,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"TNA",
    Distance:810.025,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"TPE",
    Distance:1590.3,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"TPE",
    Distance:1590.3,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"TPE",
    Distance:1590.3,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"TPE",
    Distance:1590.3,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"XIY",
    To:"TSN",
    Distance:924.679,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"TSN",
    Distance:924.679,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"TSN",
    Distance:924.679,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"TSN",
    Distance:924.679,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XIY",
    To:"TSN",
    Distance:924.679,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"XIY",
    To:"TSN",
    Distance:924.679,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"TSN",
    Distance:924.679,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"TXN",
    Distance:1036.78,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XIY",
    To:"TYN",
    Distance:505.823,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"TYN",
    Distance:505.823,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"URC",
    Distance:2105.2,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"URC",
    Distance:2105.2,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"URC",
    Distance:2105.2,
    Airport:"China SSS"
}),
new Routes(
{
    From:"XIY",
    To:"URC",
    Distance:2105.2,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"URC",
    Distance:2105.2,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"URC",
    Distance:2105.2,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"XIY",
    To:"URC",
    Distance:2105.2,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"URC",
    Distance:2105.2,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"URC",
    Distance:2105.2,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"UYN",
    Distance:433.943,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"UYN",
    Distance:433.943,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"UYN",
    Distance:433.943,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"UYN",
    Distance:433.943,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"WNZ",
    Distance:1359.71,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"WNZ",
    Distance:1359.71,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"WNZ",
    Distance:1359.71,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"WNZ",
    Distance:1359.71,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"WNZ",
    Distance:1359.71,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"WUA",
    Distance:619.226,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"WUH",
    Distance:653.342,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"WUH",
    Distance:653.342,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"WUH",
    Distance:653.342,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"WUS",
    Distance:1155.94,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"WUX",
    Distance:1136.95,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"WUX",
    Distance:1136.95,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"WUX",
    Distance:1136.95,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"WXN",
    Distance:402.828,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"WXN",
    Distance:402.828,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"XMN",
    Distance:1425.34,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"XMN",
    Distance:1425.34,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"XMN",
    Distance:1425.34,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"XMN",
    Distance:1425.34,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"XMN",
    Distance:1425.34,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"XMN",
    Distance:1425.34,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"XMN",
    Distance:1425.34,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"XNN",
    Distance:649.766,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"XNN",
    Distance:649.766,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"XNN",
    Distance:649.766,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"XNN",
    Distance:649.766,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"XNN",
    Distance:649.766,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"XNN",
    Distance:649.766,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"XNN",
    Distance:649.766,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"XNN",
    Distance:649.766,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"XNN",
    Distance:649.766,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"YBP",
    Distance:743.401,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"YIH",
    Distance:489.671,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"YIW",
    Distance:1205.54,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"YNT",
    Distance:1181.83,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"YNT",
    Distance:1181.83,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"YNZ",
    Distance:1055.53,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"YTY",
    Distance:1037.34,
    Airport:"Air China"
}),
new Routes(
{
    From:"XIY",
    To:"YTY",
    Distance:1037.34,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XIY",
    To:"YZY",
    Distance:8887.21,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XIY",
    To:"YZY",
    Distance:8887.21,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XKH",
    To:"VTE",
    Distance:174.194,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"XMH",
    To:"AHE",
    Distance:20.1543,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"XMH",
    To:"PPT",
    Distance:513.409,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"XMH",
    To:"RGI",
    Distance:180.513,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"XMN",
    To:"AMS",
    Distance:9317.17,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"AMS",
    Distance:9317.17,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"AQG",
    Distance:679.749,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"XMN",
    To:"BKK",
    Distance:2185.69,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"BKK",
    Distance:2185.69,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"XMN",
    To:"BKK",
    Distance:2185.69,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CAN",
    Distance:507.052,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"CAN",
    Distance:507.052,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CAN",
    Distance:507.052,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CAN",
    Distance:507.052,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CAN",
    Distance:507.052,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CAN",
    Distance:507.052,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CGD",
    Distance:807.049,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XMN",
    To:"CGK",
    Distance:3629.66,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"CGK",
    Distance:3629.66,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CGK",
    Distance:3629.66,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CGO",
    Distance:1183.87,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"CGO",
    Distance:1183.87,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CGO",
    Distance:1183.87,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CGO",
    Distance:1183.87,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CGO",
    Distance:1183.87,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CIH",
    Distance:1386.37,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CJU",
    Distance:1285.64,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CKG",
    Distance:1273.05,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"CKG",
    Distance:1273.05,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CKG",
    Distance:1273.05,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CKG",
    Distance:1273.05,
    Airport:"West Air China"
}),
new Routes(
{
    From:"XMN",
    To:"CKG",
    Distance:1273.05,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CSX",
    Distance:634.994,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"CSX",
    Distance:634.994,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CSX",
    Distance:634.994,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CSX",
    Distance:634.994,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"XMN",
    To:"CSX",
    Distance:634.994,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CSX",
    Distance:634.994,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CSX",
    Distance:634.994,
    Airport:"West Air China"
}),
new Routes(
{
    From:"XMN",
    To:"CSX",
    Distance:634.994,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CTU",
    Distance:1548.83,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"CTU",
    Distance:1548.83,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CTU",
    Distance:1548.83,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CTU",
    Distance:1548.83,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CTU",
    Distance:1548.83,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"XMN",
    To:"CTU",
    Distance:1548.83,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CZX",
    Distance:837.047,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"CZX",
    Distance:837.047,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"DAD",
    Distance:1400.86,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"DLC",
    Distance:1635.35,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"FUG",
    Distance:955.99,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XMN",
    To:"HAK",
    Distance:940.756,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"HAK",
    Distance:940.756,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"HAK",
    Distance:940.756,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"HFE",
    Distance:808.691,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"HFE",
    Distance:808.691,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"HFE",
    Distance:808.691,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"HFE",
    Distance:808.691,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"HFE",
    Distance:808.691,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XMN",
    To:"HFE",
    Distance:808.691,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"HFE",
    Distance:808.691,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"HGH",
    Distance:671.909,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"HGH",
    Distance:671.909,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"HGH",
    Distance:671.909,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"HGH",
    Distance:671.909,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"HGH",
    Distance:671.909,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"HKG",
    Distance:496.489,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"XMN",
    To:"HKG",
    Distance:496.489,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"HKG",
    Distance:496.489,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"XMN",
    To:"HKG",
    Distance:496.489,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"HKG",
    Distance:496.489,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"HSN",
    Distance:730.904,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"HSN",
    Distance:730.904,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"ICN",
    Distance:1639.77,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"XMN",
    To:"ICN",
    Distance:1639.77,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"JDZ",
    Distance:541.406,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"JDZ",
    Distance:541.406,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"JGS",
    Distance:428.861,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"XMN",
    To:"JIU",
    Distance:614.734,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"JIU",
    Distance:614.734,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"JUZ",
    Distance:497.6,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"JUZ",
    Distance:497.6,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KHH",
    Distance:314.852,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KHH",
    Distance:314.852,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"XMN",
    To:"KHH",
    Distance:314.852,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KHN",
    Distance:528.941,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KHN",
    Distance:528.941,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KHN",
    Distance:528.941,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KMG",
    Distance:1553.25,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"KMG",
    Distance:1553.25,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KMG",
    Distance:1553.25,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KMG",
    Distance:1553.25,
    Airport:"KSY"
}),
new Routes(
{
    From:"XMN",
    To:"KMG",
    Distance:1553.25,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KMG",
    Distance:1553.25,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KMG",
    Distance:1553.25,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KMG",
    Distance:1553.25,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KOW",
    Distance:353.563,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KUL",
    Distance:2996.05,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KUL",
    Distance:2996.05,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KUL",
    Distance:2996.05,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KWE",
    Distance:1157.43,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"KWE",
    Distance:1157.43,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KWE",
    Distance:1157.43,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KWL",
    Distance:819.233,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"KWL",
    Distance:819.233,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"XMN",
    To:"KWL",
    Distance:819.233,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KWL",
    Distance:819.233,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XMN",
    To:"KWL",
    Distance:819.233,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"KWL",
    Distance:819.233,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"LZH",
    Distance:885.524,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"XMN",
    To:"MFM",
    Distance:534.124,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"MFM",
    Distance:534.124,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"XMN",
    To:"MFM",
    Distance:534.124,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"MFM",
    Distance:534.124,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"MNL",
    Distance:1156.17,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"XMN",
    To:"MNL",
    Distance:1156.17,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"MNL",
    Distance:1156.17,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"NAY",
    Distance:1702.23,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"NAY",
    Distance:1702.23,
    Airport:"China United"
}),
new Routes(
{
    From:"XMN",
    To:"NGB",
    Distance:673.542,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"NGB",
    Distance:673.542,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"NGB",
    Distance:673.542,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"NKG",
    Distance:803.605,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"NKG",
    Distance:803.605,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"XMN",
    To:"NKG",
    Distance:803.605,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"NKG",
    Distance:803.605,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"NKG",
    Distance:803.605,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"NKG",
    Distance:803.605,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"NKG",
    Distance:803.605,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"NKG",
    Distance:803.605,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"NKG",
    Distance:803.605,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"NNG",
    Distance:1036.89,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"NNG",
    Distance:1036.89,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"NNG",
    Distance:1036.89,
    Airport:"KSY"
}),
new Routes(
{
    From:"XMN",
    To:"NNG",
    Distance:1036.89,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"NNG",
    Distance:1036.89,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"NNG",
    Distance:1036.89,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"NRT",
    Distance:2468.3,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"NRT",
    Distance:2468.3,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"XMN",
    To:"NRT",
    Distance:2468.3,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"NTG",
    Distance:882.045,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"NTG",
    Distance:882.045,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"PEK",
    Distance:1733.53,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"PEK",
    Distance:1733.53,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"PEK",
    Distance:1733.53,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"PEK",
    Distance:1733.53,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XMN",
    To:"PEK",
    Distance:1733.53,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"PEK",
    Distance:1733.53,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"PVG",
    Distance:817.889,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"PVG",
    Distance:817.889,
    Airport:"China SSS"
}),
new Routes(
{
    From:"XMN",
    To:"PVG",
    Distance:817.889,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"PVG",
    Distance:817.889,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"RMQ",
    Distance:254.325,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"XMN",
    To:"RMQ",
    Distance:254.325,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"XMN",
    To:"SHA",
    Distance:804.16,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"SHA",
    Distance:804.16,
    Airport:"China SSS"
}),
new Routes(
{
    From:"XMN",
    To:"SHA",
    Distance:804.16,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"SHA",
    Distance:804.16,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"SHA",
    Distance:804.16,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"SHA",
    Distance:804.16,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"SHE",
    Distance:1932.3,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"SHE",
    Distance:1932.3,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"SHE",
    Distance:1932.3,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"SIN",
    Distance:2993.21,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"SIN",
    Distance:2993.21,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"XMN",
    To:"SIN",
    Distance:2993.21,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"SIN",
    Distance:2993.21,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"SJW",
    Distance:1561.4,
    Airport:"China SSS"
}),
new Routes(
{
    From:"XMN",
    To:"SYX",
    Distance:1137.59,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"SYX",
    Distance:1137.59,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"SYX",
    Distance:1137.59,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XMN",
    To:"SYX",
    Distance:1137.59,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"SYX",
    Distance:1137.59,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"SZX",
    Distance:488.204,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"SZX",
    Distance:488.204,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"SZX",
    Distance:488.204,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"SZX",
    Distance:488.204,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"TAO",
    Distance:1321,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"TAO",
    Distance:1321,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"TAO",
    Distance:1321,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"TAO",
    Distance:1321,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"TNA",
    Distance:1371.91,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"TNA",
    Distance:1371.91,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"TNA",
    Distance:1371.91,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"TNA",
    Distance:1371.91,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"TPE",
    Distance:318.961,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"TPE",
    Distance:318.961,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"TSA",
    Distance:350.574,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"XMN",
    To:"TSA",
    Distance:350.574,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"TSN",
    Distance:1622.92,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"TSN",
    Distance:1622.92,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"TSN",
    Distance:1622.92,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"XMN",
    To:"TSN",
    Distance:1622.92,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"TSN",
    Distance:1622.92,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"TXN",
    Distance:577.159,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"TXN",
    Distance:577.159,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XMN",
    To:"TXN",
    Distance:577.159,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"TYN",
    Distance:1557.75,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"TYN",
    Distance:1557.75,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"WUH",
    Distance:793.804,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"WUH",
    Distance:793.804,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"WUH",
    Distance:793.804,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"WUH",
    Distance:793.804,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XMN",
    To:"WUH",
    Distance:793.804,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"WUH",
    Distance:793.804,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"WUH",
    Distance:793.804,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"WUS",
    Distance:351.366,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"WUS",
    Distance:351.366,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"WUS",
    Distance:351.366,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"WUX",
    Distance:805.11,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"WUX",
    Distance:805.11,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"WUX",
    Distance:805.11,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"WXN",
    Distance:1184.73,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"WXN",
    Distance:1184.73,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"XFN",
    Distance:1020.14,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"XIY",
    Distance:1425.34,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"XIY",
    Distance:1425.34,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"XIY",
    Distance:1425.34,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"XIY",
    Distance:1425.34,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"XIY",
    Distance:1425.34,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"XIY",
    Distance:1425.34,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"XIY",
    Distance:1425.34,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"XUZ",
    Distance:1073.77,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"YIH",
    Distance:947.317,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"YIH",
    Distance:947.317,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"YIW",
    Distance:566.167,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"YNZ",
    Distance:1002.08,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"YNZ",
    Distance:1002.08,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"YTY",
    Distance:904.861,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"YTY",
    Distance:904.861,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"ZUH",
    Distance:561.359,
    Airport:"Air China"
}),
new Routes(
{
    From:"XMN",
    To:"ZUH",
    Distance:561.359,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"ZUH",
    Distance:561.359,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XMN",
    To:"ZUH",
    Distance:561.359,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XNA",
    To:"ATL",
    Distance:946.552,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"XNA",
    To:"ATL",
    Distance:946.552,
    Airport:"Air France"
}),
new Routes(
{
    From:"XNA",
    To:"ATL",
    Distance:946.552,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"XNA",
    To:"ATL",
    Distance:946.552,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"XNA",
    To:"ATL",
    Distance:946.552,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"XNA",
    To:"CLT",
    Distance:1210.86,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"XNA",
    To:"CLT",
    Distance:1210.86,
    Airport:"US Airways"
}),
new Routes(
{
    From:"XNA",
    To:"CVG",
    Distance:901.931,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"XNA",
    To:"DEN",
    Distance:990.09,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"XNA",
    To:"DFW",
    Distance:451.813,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"XNA",
    To:"DFW",
    Distance:451.813,
    Airport:"US Airways"
}),
new Routes(
{
    From:"XNA",
    To:"DTW",
    Distance:1149.38,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"XNA",
    To:"EWR",
    Distance:1815.5,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"XNA",
    To:"IAH",
    Distance:706.824,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"XNA",
    To:"LAS",
    Distance:1867.42,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"XNA",
    To:"LAX",
    Distance:2201.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"XNA",
    To:"LAX",
    Distance:2201.89,
    Airport:"US Airways"
}),
new Routes(
{
    From:"XNA",
    To:"LGA",
    Distance:1841.62,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"XNA",
    To:"LGA",
    Distance:1841.62,
    Airport:"US Airways"
}),
new Routes(
{
    From:"XNA",
    To:"MSP",
    Distance:960.64,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"XNA",
    To:"ORD",
    Distance:839.827,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"XNA",
    To:"ORD",
    Distance:839.827,
    Airport:"US Airways"
}),
new Routes(
{
    From:"XNA",
    To:"ORD",
    Distance:839.827,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"XNA",
    To:"SFB",
    Distance:1480.15,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"XNN",
    To:"CGO",
    Distance:1090.03,
    Airport:"Air China"
}),
new Routes(
{
    From:"XNN",
    To:"CGO",
    Distance:1090.03,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"CGO",
    Distance:1090.03,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"CGO",
    Distance:1090.03,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"CGO",
    Distance:1090.03,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"CKG",
    Distance:869.482,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"CKG",
    Distance:869.482,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"CKG",
    Distance:869.482,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"CKG",
    Distance:869.482,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"XNN",
    To:"CKG",
    Distance:869.482,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"XNN",
    To:"CKG",
    Distance:869.482,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"CKG",
    Distance:869.482,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"CSX",
    Distance:1398.73,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"CTU",
    Distance:684.576,
    Airport:"Air China"
}),
new Routes(
{
    From:"XNN",
    To:"CTU",
    Distance:684.576,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"CTU",
    Distance:684.576,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"CTU",
    Distance:684.576,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"CTU",
    Distance:684.576,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"XNN",
    To:"GOQ",
    Distance:356.156,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"INC",
    Distance:411.803,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"KMG",
    Distance:1284.38,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"XNN",
    To:"KWE",
    Distance:1198.29,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"LXA",
    Distance:1312.13,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"LXA",
    Distance:1312.13,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"XNN",
    To:"MIG",
    Distance:619.121,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"NKG",
    Distance:1634.22,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"XNN",
    To:"PEK",
    Distance:1327.13,
    Airport:"Air China"
}),
new Routes(
{
    From:"XNN",
    To:"PEK",
    Distance:1327.13,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"PEK",
    Distance:1327.13,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"PEK",
    Distance:1327.13,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"PEK",
    Distance:1327.13,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"PVG",
    Distance:1916.78,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"TSN",
    Distance:1372.96,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"XNN",
    To:"URC",
    Distance:1481.02,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"XNN",
    To:"URC",
    Distance:1481.02,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"WUH",
    Distance:1292.96,
    Airport:"Air China"
}),
new Routes(
{
    From:"XNN",
    To:"WUH",
    Distance:1292.96,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"XIY",
    Distance:649.766,
    Airport:"Air China"
}),
new Routes(
{
    From:"XNN",
    To:"XIY",
    Distance:649.766,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"XIY",
    Distance:649.766,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"XIY",
    Distance:649.766,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"XIY",
    Distance:649.766,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"XIY",
    Distance:649.766,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"XIY",
    Distance:649.766,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"XIY",
    Distance:649.766,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"XIY",
    Distance:649.766,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"YUS",
    Distance:609.538,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XNN",
    To:"YUS",
    Distance:609.538,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"XNN",
    To:"ZHY",
    Distance:299.569,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XQP",
    To:"PMZ",
    Distance:90.8947,
    Airport:"CAL Cargo Air Lines"
}),
new Routes(
{
    From:"XQP",
    To:"SJO",
    Distance:61.8443,
    Airport:"CAL Cargo Air Lines"
}),
new Routes(
{
    From:"XQP",
    To:"SJO",
    Distance:61.8443,
    Airport:"Euro Exec Express"
}),
new Routes(
{
    From:"XQP",
    To:"SJO",
    Distance:61.8443,
    Airport:"LACSA"
}),
new Routes(
{
    From:"XRY",
    To:"AGP",
    Distance:139.365,
    Airport:"Luxair"
}),
new Routes(
{
    From:"XRY",
    To:"BCN",
    Distance:865.722,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"XRY",
    To:"BCN",
    Distance:865.722,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"XRY",
    To:"BCN",
    Distance:865.722,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"XRY",
    To:"CGN",
    Distance:1887.94,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"XRY",
    To:"DUS",
    Distance:1908.94,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"XRY",
    To:"DUS",
    Distance:1908.94,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"XRY",
    To:"FRA",
    Distance:1883.4,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"XRY",
    To:"FRA",
    Distance:1883.4,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"XRY",
    To:"HAJ",
    Distance:2136.53,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"XRY",
    To:"HAM",
    Distance:2248.45,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"XRY",
    To:"HAM",
    Distance:2248.45,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"XRY",
    To:"HHN",
    Distance:1815.24,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"XRY",
    To:"LUX",
    Distance:1739.16,
    Airport:"Luxair"
}),
new Routes(
{
    From:"XRY",
    To:"MAD",
    Distance:469.729,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"XRY",
    To:"MUC",
    Distance:1941.59,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"XRY",
    To:"MUC",
    Distance:1941.59,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"XRY",
    To:"PMI",
    Distance:829.034,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"XRY",
    To:"STN",
    Distance:1754.81,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"XRY",
    To:"STR",
    Distance:1816.2,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"XRY",
    To:"STR",
    Distance:1816.2,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"XRY",
    To:"SXF",
    Distance:2315.03,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"XSB",
    To:"AZI",
    Distance:191.072,
    Airport:"VRG Linhas Aereas"
}),
new Routes(
{
    From:"XSB",
    To:"DXB",
    Distance:301.146,
    Airport:"VRG Linhas Aereas"
}),
new Routes(
{
    From:"XSC",
    To:"GDT",
    Distance:40.7412,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"XSC",
    To:"PLS",
    Distance:81.4255,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"XTG",
    To:"CMA",
    Distance:177.854,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"XUZ",
    To:"CAN",
    Distance:1253.28,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XUZ",
    To:"CKG",
    Distance:1103.52,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"XUZ",
    To:"CSX",
    Distance:759.944,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XUZ",
    To:"CTU",
    Distance:1297.62,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XUZ",
    To:"DLC",
    Distance:664.619,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XUZ",
    To:"FOC",
    Distance:946.903,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"XUZ",
    To:"HKG",
    Distance:1354.21,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"XUZ",
    To:"HRB",
    Distance:1492,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XUZ",
    To:"INC",
    Distance:1103.51,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XUZ",
    To:"KHH",
    Distance:1326.15,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"XUZ",
    To:"KMG",
    Distance:1720.12,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XUZ",
    To:"KWE",
    Distance:1301.23,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"XUZ",
    To:"KWE",
    Distance:1301.23,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XUZ",
    To:"LYG",
    Distance:201.172,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"XUZ",
    To:"SHA",
    Distance:514.639,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XUZ",
    To:"SHE",
    Distance:968.931,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"XUZ",
    To:"SZX",
    Distance:1320.82,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"XUZ",
    To:"TPE",
    Distance:1085.38,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"XUZ",
    To:"TPE",
    Distance:1085.38,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"XUZ",
    To:"XMN",
    Distance:1073.77,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"YAA",
    To:"YVR",
    Distance:391.666,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YAB",
    To:"YFB",
    Distance:1221.38,
    Airport:"First Air"
}),
new Routes(
{
    From:"YAB",
    To:"YRB",
    Distance:360.21,
    Airport:"First Air"
}),
new Routes(
{
    From:"YAG",
    To:"YQK",
    Distance:142.828,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YAG",
    To:"YQT",
    Distance:304.757,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YAK",
    To:"CDV",
    Distance:364.049,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"YAK",
    To:"JNU",
    Distance:296.477,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"YAM",
    To:"YQT",
    Distance:418.438,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YAM",
    To:"YSB",
    Distance:284.125,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YAM",
    To:"YTZ",
    Distance:511.947,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YAM",
    To:"YYZ",
    Distance:494.018,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YAP",
    To:"GUM",
    Distance:855.096,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YAP",
    To:"ROR",
    Distance:455.654,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YBC",
    To:"YQB",
    Distance:352.301,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YBC",
    To:"YUL",
    Distance:582.879,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YBC",
    To:"YYY",
    Distance:58.2543,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YBC",
    To:"YYY",
    Distance:58.2543,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YBG",
    To:"YUL",
    Distance:380.22,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YBK",
    To:"YCS",
    Distance:282.721,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YBK",
    To:"YCS",
    Distance:282.721,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YBK",
    To:"YRT",
    Distance:256.532,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YBK",
    To:"YRT",
    Distance:256.532,
    Airport:"First Air"
}),
new Routes(
{
    From:"YBK",
    To:"YUT",
    Distance:517.785,
    Airport:"First Air"
}),
new Routes(
{
    From:"YBK",
    To:"YXN",
    Distance:287.492,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YBL",
    To:"YQQ",
    Distance:38.3592,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YBL",
    To:"YQQ",
    Distance:38.3592,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YBL",
    To:"YVR",
    Distance:172.381,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YBL",
    To:"ZEL",
    Distance:311.975,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YBP",
    To:"CAN",
    Distance:1060.45,
    Airport:"Air China"
}),
new Routes(
{
    From:"YBP",
    To:"CAN",
    Distance:1060.45,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YBP",
    To:"KMG",
    Distance:459.519,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YBP",
    To:"PEK",
    Distance:1667.73,
    Airport:"Air China"
}),
new Routes(
{
    From:"YBP",
    To:"PEK",
    Distance:1667.73,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YBP",
    To:"PVG",
    Distance:1681.14,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YBP",
    To:"SYX",
    Distance:1267.91,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"YBP",
    To:"SZX",
    Distance:1152.94,
    Airport:"Air China"
}),
new Routes(
{
    From:"YBP",
    To:"SZX",
    Distance:1152.94,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YBP",
    To:"XIY",
    Distance:743.401,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"YBR",
    To:"YYC",
    Distance:1002.17,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YBX",
    To:"YIF",
    Distance:105.543,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YCB",
    To:"YCO",
    Distance:432.355,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YCB",
    To:"YCO",
    Distance:432.355,
    Airport:"First Air"
}),
new Routes(
{
    From:"YCB",
    To:"YHK",
    Distance:375.611,
    Airport:"First Air"
}),
new Routes(
{
    From:"YCB",
    To:"YYH",
    Distance:455.771,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YCB",
    To:"YZF",
    Distance:849.976,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YCB",
    To:"YZF",
    Distance:849.976,
    Airport:"First Air"
}),
new Routes(
{
    From:"YCD",
    To:"YVR",
    Distance:52.3235,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YCD",
    To:"YYC",
    Distance:738.566,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YCG",
    To:"YVR",
    Distance:403.09,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YCG",
    To:"YYC",
    Distance:326.941,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YCO",
    To:"YCB",
    Distance:432.355,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YCO",
    To:"YCB",
    Distance:432.355,
    Airport:"First Air"
}),
new Routes(
{
    From:"YCO",
    To:"YHI",
    Distance:343.834,
    Airport:"First Air"
}),
new Routes(
{
    From:"YCO",
    To:"YZF",
    Distance:596.223,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YCO",
    To:"YZF",
    Distance:596.223,
    Airport:"First Air"
}),
new Routes(
{
    From:"YCS",
    To:"YBK",
    Distance:282.721,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YCS",
    To:"YBK",
    Distance:282.721,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YCS",
    To:"YRT",
    Distance:91.6793,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YCS",
    To:"YRT",
    Distance:91.6793,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YCS",
    To:"YRT",
    Distance:91.6793,
    Airport:"First Air"
}),
new Routes(
{
    From:"YCS",
    To:"YZS",
    Distance:374.071,
    Airport:"First Air"
}),
new Routes(
{
    From:"YCU",
    To:"CAN",
    Distance:1311.81,
    Airport:"Air China"
}),
new Routes(
{
    From:"YCU",
    To:"CAN",
    Distance:1311.81,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"CKG",
    Distance:716.852,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"CSX",
    Distance:787.997,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"CTU",
    Distance:822.651,
    Airport:"Air China"
}),
new Routes(
{
    From:"YCU",
    To:"CTU",
    Distance:822.651,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"HGH",
    Distance:1031.41,
    Airport:"Air China"
}),
new Routes(
{
    From:"YCU",
    To:"HGH",
    Distance:1031.41,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"HRB",
    Distance:1744.86,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"KMG",
    Distance:1367.59,
    Airport:"Air China"
}),
new Routes(
{
    From:"YCU",
    To:"KMG",
    Distance:1367.59,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"LHW",
    Distance:678.075,
    Airport:"Air China"
}),
new Routes(
{
    From:"YCU",
    To:"LHW",
    Distance:678.075,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"NKG",
    Distance:816.065,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"PEK",
    Distance:747.877,
    Airport:"Air China"
}),
new Routes(
{
    From:"YCU",
    To:"PEK",
    Distance:747.877,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"PVG",
    Distance:1094.83,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"PVG",
    Distance:1094.83,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"SYX",
    Distance:1865.18,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"SZX",
    Distance:1403.35,
    Airport:"Air China"
}),
new Routes(
{
    From:"YCU",
    To:"SZX",
    Distance:1403.35,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"TAO",
    Distance:858.68,
    Airport:"Air China"
}),
new Routes(
{
    From:"YCU",
    To:"TAO",
    Distance:858.68,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"TSN",
    Distance:725.062,
    Airport:"Air China"
}),
new Routes(
{
    From:"YCU",
    To:"TSN",
    Distance:725.062,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"TYN",
    Distance:336.895,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"URC",
    Distance:2237.24,
    Airport:"Air China"
}),
new Routes(
{
    From:"YCU",
    To:"URC",
    Distance:2237.24,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YCU",
    To:"WUH",
    Distance:558.279,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YCY",
    To:"YFB",
    Distance:748.313,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YCY",
    To:"YFB",
    Distance:748.313,
    Airport:"First Air"
}),
new Routes(
{
    From:"YCY",
    To:"YIO",
    Distance:411.434,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YCY",
    To:"YIO",
    Distance:411.434,
    Airport:"First Air"
}),
new Routes(
{
    From:"YDF",
    To:"YHZ",
    Distance:667.895,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YDF",
    To:"YYR",
    Distance:503.14,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YDF",
    To:"YYT",
    Distance:385.379,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YDF",
    To:"YYZ",
    Distance:1803.65,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YDF",
    To:"YYZ",
    Distance:1803.65,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YDP",
    To:"YYR",
    Distance:367.979,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YEG",
    To:"CUN",
    Distance:4245.79,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"DEN",
    Distance:1640,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YEG",
    To:"DEN",
    Distance:1640,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YEG",
    To:"DFW",
    Distance:2622.97,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YEG",
    To:"EWR",
    Distance:3247.99,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YEG",
    To:"EWR",
    Distance:3247.99,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YEG",
    To:"IAH",
    Distance:2984.44,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YEG",
    To:"IAH",
    Distance:2984.44,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YEG",
    To:"KEF",
    Distance:4921.54,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"YEG",
    To:"LAS",
    Distance:1919.76,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YEG",
    To:"LAS",
    Distance:1919.76,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"LAX",
    Distance:2187.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YEG",
    To:"LAX",
    Distance:2187.08,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YEG",
    To:"LAX",
    Distance:2187.08,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"LHR",
    Distance:6808.79,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YEG",
    To:"LHR",
    Distance:6808.79,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YEG",
    To:"MSP",
    Distance:1744.21,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YEG",
    To:"ORD",
    Distance:2279.83,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YEG",
    To:"ORD",
    Distance:2279.83,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YEG",
    To:"PHX",
    Distance:2213.55,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YEG",
    To:"PHX",
    Distance:2213.55,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YEG",
    To:"PHX",
    Distance:2213.55,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"PSP",
    Distance:2178.42,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"PVR",
    Distance:3697.27,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"SEA",
    Distance:897.565,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"YEG",
    To:"SFO",
    Distance:1871.36,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YEG",
    To:"SFO",
    Distance:1871.36,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YEG",
    To:"YHM",
    Distance:2702.07,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"YHY",
    Distance:847.695,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YEG",
    To:"YLW",
    Distance:546.669,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"YMM",
    Distance:401.018,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YEG",
    To:"YMM",
    Distance:401.018,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YEG",
    To:"YMM",
    Distance:401.018,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YEG",
    To:"YMM",
    Distance:401.018,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"YOW",
    Distance:2849.35,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YEG",
    To:"YOW",
    Distance:2849.35,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"YQQ",
    Distance:877.535,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"YQR",
    Distance:689.927,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YEG",
    To:"YQR",
    Distance:689.927,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"YQU",
    Distance:402.406,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YEG",
    To:"YQU",
    Distance:402.406,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"YSM",
    Distance:752.64,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YEG",
    To:"YUL",
    Distance:2968.75,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YEG",
    To:"YUL",
    Distance:2968.75,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"YVR",
    Distance:809.052,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YEG",
    To:"YVR",
    Distance:809.052,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"YEG",
    To:"YVR",
    Distance:809.052,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"YWG",
    Distance:1186.82,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YEG",
    To:"YWG",
    Distance:1186.82,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YEG",
    To:"YWG",
    Distance:1186.82,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"YXE",
    Distance:479.951,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YEG",
    To:"YXE",
    Distance:479.951,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"YXX",
    Distance:774.836,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"YXY",
    Distance:1528.59,
    Airport:"Air North Charter - Canada"
}),
new Routes(
{
    From:"YEG",
    To:"YYC",
    Distance:246.003,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YEG",
    To:"YYC",
    Distance:246.003,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"YYJ",
    Distance:861.291,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"YYZ",
    Distance:2689.09,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YEG",
    To:"YYZ",
    Distance:2689.09,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEG",
    To:"YZF",
    Distance:1019.02,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YEG",
    To:"YZF",
    Distance:1019.02,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YEG",
    To:"YZF",
    Distance:1019.02,
    Airport:"First Air"
}),
new Routes(
{
    From:"YEG",
    To:"YZF",
    Distance:1019.02,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"YEG",
    To:"YZF",
    Distance:1019.02,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YEK",
    To:"YRT",
    Distance:216.561,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YEK",
    To:"YRT",
    Distance:216.561,
    Airport:"First Air"
}),
new Routes(
{
    From:"YEK",
    To:"YXN",
    Distance:149.236,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YEK",
    To:"YXN",
    Distance:149.236,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YEK",
    To:"YXN",
    Distance:149.236,
    Airport:"First Air"
}),
new Routes(
{
    From:"YEK",
    To:"YYQ",
    Distance:261.864,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YEK",
    To:"YYQ",
    Distance:261.864,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YES",
    To:"THR",
    Distance:555.126,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"YEV",
    To:"YGH",
    Distance:307.056,
    Airport:"Hello"
}),
new Routes(
{
    From:"YEV",
    To:"YVQ",
    Distance:445.332,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YEV",
    To:"YVQ",
    Distance:445.332,
    Airport:"First Air"
}),
new Routes(
{
    From:"YFB",
    To:"YAB",
    Distance:1221.38,
    Airport:"First Air"
}),
new Routes(
{
    From:"YFB",
    To:"YCY",
    Distance:748.313,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YFB",
    To:"YCY",
    Distance:748.313,
    Airport:"First Air"
}),
new Routes(
{
    From:"YFB",
    To:"YGT",
    Distance:852.619,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YFB",
    To:"YGT",
    Distance:852.619,
    Airport:"First Air"
}),
new Routes(
{
    From:"YFB",
    To:"YLC",
    Distance:120.641,
    Airport:"First Air"
}),
new Routes(
{
    From:"YFB",
    To:"YOW",
    Distance:2097.43,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YFB",
    To:"YOW",
    Distance:2097.43,
    Airport:"First Air"
}),
new Routes(
{
    From:"YFB",
    To:"YRT",
    Distance:1175.67,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YFB",
    To:"YRT",
    Distance:1175.67,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YFB",
    To:"YRT",
    Distance:1175.67,
    Airport:"First Air"
}),
new Routes(
{
    From:"YFB",
    To:"YTE",
    Distance:391.916,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YFB",
    To:"YTE",
    Distance:391.916,
    Airport:"First Air"
}),
new Routes(
{
    From:"YFB",
    To:"YUX",
    Distance:793.401,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YFB",
    To:"YUX",
    Distance:793.401,
    Airport:"First Air"
}),
new Routes(
{
    From:"YFB",
    To:"YVP",
    Distance:629.433,
    Airport:"First Air"
}),
new Routes(
{
    From:"YFB",
    To:"YXP",
    Distance:297.335,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YFB",
    To:"YXP",
    Distance:297.335,
    Airport:"First Air"
}),
new Routes(
{
    From:"YFC",
    To:"YHZ",
    Distance:260.811,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YFC",
    To:"YOW",
    Distance:712.71,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YFC",
    To:"YUL",
    Distance:561.294,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YFC",
    To:"YYZ",
    Distance:1060.57,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YFO",
    To:"YQD",
    Distance:87.4144,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YFO",
    To:"YQD",
    Distance:87.4144,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YFO",
    To:"YTH",
    Distance:272.286,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YFO",
    To:"YWG",
    Distance:609.914,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YFS",
    To:"YZF",
    Distance:361.832,
    Airport:"Air Tindi"
}),
new Routes(
{
    From:"YFS",
    To:"YZF",
    Distance:361.832,
    Airport:"First Air"
}),
new Routes(
{
    From:"YGH",
    To:"YEV",
    Distance:307.056,
    Airport:"Hello"
}),
new Routes(
{
    From:"YGH",
    To:"YVQ",
    Distance:138.322,
    Airport:"Hello"
}),
new Routes(
{
    From:"YGJ",
    To:"CTS",
    Distance:1088.68,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"YGJ",
    To:"HND",
    Distance:592.101,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"YGJ",
    To:"HND",
    Distance:592.101,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"YGJ",
    To:"ICN",
    Distance:645.106,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"YGJ",
    To:"ICN",
    Distance:645.106,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"YGJ",
    To:"NRT",
    Distance:646.787,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"YGJ",
    To:"OKA",
    Distance:1162.78,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"YGJ",
    To:"UKB",
    Distance:204.58,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"YGK",
    To:"YYZ",
    Distance:250.362,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YGP",
    To:"YGR",
    Distance:250.513,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YGP",
    To:"YQB",
    Distance:561.51,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YGR",
    To:"YGP",
    Distance:250.513,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YGT",
    To:"YFB",
    Distance:852.619,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YGT",
    To:"YFB",
    Distance:852.619,
    Airport:"First Air"
}),
new Routes(
{
    From:"YGT",
    To:"YIO",
    Distance:394.202,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YGT",
    To:"YUX",
    Distance:69.2853,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YGT",
    To:"YUX",
    Distance:69.2853,
    Airport:"First Air"
}),
new Routes(
{
    From:"YGV",
    To:"YPN",
    Distance:69.222,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YGV",
    To:"YZV",
    Distance:188.81,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YGX",
    To:"YTH",
    Distance:205.21,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YGX",
    To:"YWG",
    Distance:736.382,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YGZ",
    To:"YRB",
    Distance:383.413,
    Airport:"Askari Aviation"
}),
new Routes(
{
    From:"YHD",
    To:"YQK",
    Distance:116.264,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YHD",
    To:"YQT",
    Distance:297.186,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YHD",
    To:"YRL",
    Distance:156.141,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YHD",
    To:"YXL",
    Distance:67.7047,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YHI",
    To:"YCO",
    Distance:343.834,
    Airport:"First Air"
}),
new Routes(
{
    From:"YHK",
    To:"YCB",
    Distance:375.611,
    Airport:"First Air"
}),
new Routes(
{
    From:"YHK",
    To:"YYH",
    Distance:135.631,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YHK",
    To:"YYH",
    Distance:135.631,
    Airport:"First Air"
}),
new Routes(
{
    From:"YHK",
    To:"YZF",
    Distance:1089.48,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YHM",
    To:"YEG",
    Distance:2702.07,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YHM",
    To:"YHZ",
    Distance:1324.6,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YHM",
    To:"YQM",
    Distance:1248.25,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YHM",
    To:"YYC",
    Distance:2696.51,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YHO",
    To:"YSO",
    Distance:66.1161,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YHR",
    To:"YIF",
    Distance:107.431,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YHR",
    To:"YNA",
    Distance:155.9,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YHR",
    To:"ZTB",
    Distance:29.0109,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YHY",
    To:"YEG",
    Distance:847.695,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YHY",
    To:"YSM",
    Distance:228.561,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YHY",
    To:"YZF",
    Distance:193.886,
    Airport:"First Air"
}),
new Routes(
{
    From:"YHZ",
    To:"BOS",
    Distance:664.801,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YHZ",
    To:"BOS",
    Distance:664.801,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YHZ",
    To:"CUN",
    Distance:3406.86,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YHZ",
    To:"DCA",
    Distance:1303.04,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YHZ",
    To:"DCA",
    Distance:1303.04,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YHZ",
    To:"EWR",
    Distance:985.61,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YHZ",
    To:"FRA",
    Distance:5234.55,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"YHZ",
    To:"FSP",
    Distance:605.448,
    Airport:"Air Saint Pierre"
}),
new Routes(
{
    From:"YHZ",
    To:"LGA",
    Distance:959.442,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YHZ",
    To:"LGA",
    Distance:959.442,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YHZ",
    To:"LHR",
    Distance:4584.35,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YHZ",
    To:"LHR",
    Distance:4584.35,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YHZ",
    To:"MBJ",
    Distance:3222.74,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YHZ",
    To:"MCO",
    Distance:2411.26,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YHZ",
    To:"MCO",
    Distance:2411.26,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YHZ",
    To:"ORD",
    Distance:1988.53,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YHZ",
    To:"ORD",
    Distance:1988.53,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YHZ",
    To:"PHL",
    Distance:1111.52,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YHZ",
    To:"PHL",
    Distance:1111.52,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YHZ",
    To:"PUJ",
    Distance:2960.37,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YHZ",
    To:"YDF",
    Distance:667.895,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YHZ",
    To:"YFC",
    Distance:260.811,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YHZ",
    To:"YHM",
    Distance:1324.6,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YHZ",
    To:"YOW",
    Distance:954.8,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YHZ",
    To:"YOW",
    Distance:954.8,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YHZ",
    To:"YOW",
    Distance:954.8,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YHZ",
    To:"YQM",
    Distance:164.508,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YHZ",
    To:"YQX",
    Distance:814.447,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YHZ",
    To:"YQY",
    Distance:304.878,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YHZ",
    To:"YSJ",
    Distance:193.096,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YHZ",
    To:"YUL",
    Distance:804.182,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YHZ",
    To:"YUL",
    Distance:804.182,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YHZ",
    To:"YYC",
    Distance:3745.17,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YHZ",
    To:"YYG",
    Distance:159.567,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YHZ",
    To:"YYR",
    Distance:964.529,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YHZ",
    To:"YYT",
    Distance:880.447,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YHZ",
    To:"YYT",
    Distance:880.447,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YHZ",
    To:"YYT",
    Distance:880.447,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YHZ",
    To:"YYT",
    Distance:880.447,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YHZ",
    To:"YYZ",
    Distance:1288.27,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YHZ",
    To:"YYZ",
    Distance:1288.27,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YHZ",
    To:"YYZ",
    Distance:1288.27,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YIC",
    To:"KMG",
    Distance:1192.92,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"YIC",
    To:"PEK",
    Distance:1381.03,
    Airport:"Air China"
}),
new Routes(
{
    From:"YIC",
    To:"PEK",
    Distance:1381.03,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YIC",
    To:"SHA",
    Distance:777.635,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"YIC",
    To:"SZX",
    Distance:576.389,
    Airport:"Air China"
}),
new Routes(
{
    From:"YIC",
    To:"SZX",
    Distance:576.389,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YIF",
    To:"YBX",
    Distance:105.543,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YIF",
    To:"YHR",
    Distance:107.431,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YIF",
    To:"ZLT",
    Distance:47.8165,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YIH",
    To:"CAN",
    Distance:829.944,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YIH",
    To:"CAN",
    Distance:829.944,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"YIH",
    To:"CKG",
    Distance:473.194,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YIH",
    To:"CKG",
    Distance:473.194,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"YIH",
    To:"CKG",
    Distance:473.194,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"YIH",
    To:"CTU",
    Distance:717.001,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"YIH",
    To:"HGH",
    Distance:863.257,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"YIH",
    To:"HKG",
    Distance:961.759,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"YIH",
    To:"KMG",
    Distance:1062.42,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"YIH",
    To:"KWE",
    Distance:645.108,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"YIH",
    To:"NGB",
    Distance:966.8,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"YIH",
    To:"PEK",
    Distance:1144.91,
    Airport:"Air China"
}),
new Routes(
{
    From:"YIH",
    To:"PEK",
    Distance:1144.91,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"YIH",
    To:"PEK",
    Distance:1144.91,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"YIH",
    To:"PEK",
    Distance:1144.91,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YIH",
    To:"SHA",
    Distance:945.297,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YIH",
    To:"SHA",
    Distance:945.297,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"YIH",
    To:"SYX",
    Distance:1390.41,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"YIH",
    To:"SZX",
    Distance:923.527,
    Airport:"Air China"
}),
new Routes(
{
    From:"YIH",
    To:"SZX",
    Distance:923.527,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"YIH",
    To:"SZX",
    Distance:923.527,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YIH",
    To:"XIY",
    Distance:489.671,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"YIH",
    To:"XMN",
    Distance:947.317,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YIH",
    To:"XMN",
    Distance:947.317,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"YIN",
    To:"CTU",
    Distance:2479.7,
    Airport:"Air China"
}),
new Routes(
{
    From:"YIN",
    To:"CTU",
    Distance:2479.7,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YIN",
    To:"URC",
    Distance:491.919,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"YIN",
    To:"URC",
    Distance:491.919,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YIO",
    To:"YCY",
    Distance:411.434,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YIO",
    To:"YCY",
    Distance:411.434,
    Airport:"First Air"
}),
new Routes(
{
    From:"YIO",
    To:"YGT",
    Distance:394.202,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YIW",
    To:"CAN",
    Distance:941.928,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YIW",
    To:"CGO",
    Distance:819.675,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YIW",
    To:"CTU",
    Distance:1554.27,
    Airport:"Air China"
}),
new Routes(
{
    From:"YIW",
    To:"CTU",
    Distance:1554.27,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YIW",
    To:"HRB",
    Distance:1889.92,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YIW",
    To:"JJN",
    Distance:525.497,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"YIW",
    To:"KMG",
    Distance:1775.42,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YIW",
    To:"LYI",
    Distance:652.003,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"YIW",
    To:"PEK",
    Distance:1234.32,
    Airport:"Air China"
}),
new Routes(
{
    From:"YIW",
    To:"PEK",
    Distance:1234.32,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YIW",
    To:"PEK",
    Distance:1234.32,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YIW",
    To:"SHE",
    Distance:1370.45,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YIW",
    To:"SWA",
    Distance:740.325,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"YIW",
    To:"SWA",
    Distance:740.325,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YIW",
    To:"URC",
    Distance:3295.42,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YIW",
    To:"XIY",
    Distance:1205.54,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"YIW",
    To:"XMN",
    Distance:566.167,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YIW",
    To:"ZUH",
    Distance:1053.39,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YKA",
    To:"YVR",
    Distance:257.973,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YKA",
    To:"YYC",
    Distance:452.609,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YKA",
    To:"YYC",
    Distance:452.609,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YKF",
    To:"ORD",
    Distance:636.291,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YKF",
    To:"ORD",
    Distance:636.291,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YKF",
    To:"YYC",
    Distance:2649.32,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YKM",
    To:"SEA",
    Distance:165.849,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"YKS",
    To:"BQS",
    Distance:1305.34,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"YKS",
    To:"CKH",
    Distance:1236.4,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"YKS",
    To:"CKH",
    Distance:1236.4,
    Airport:"Piedmont Airlines (1948-1989)"
}),
new Routes(
{
    From:"YKS",
    To:"CYX",
    Distance:1611.87,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"YKS",
    To:"CYX",
    Distance:1611.87,
    Airport:"Piedmont Airlines (1948-1989)"
}),
new Routes(
{
    From:"YKS",
    To:"DME",
    Distance:4897.12,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"YKS",
    To:"DME",
    Distance:4897.12,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"YKS",
    To:"GDX",
    Distance:1149.64,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"YKS",
    To:"HRB",
    Distance:1845.19,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"YKS",
    To:"IKS",
    Distance:1068.61,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"YKS",
    To:"IKS",
    Distance:1068.61,
    Airport:"Piedmont Airlines (1948-1989)"
}),
new Routes(
{
    From:"YKS",
    To:"IKT",
    Distance:1860,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"YKS",
    To:"IKT",
    Distance:1860,
    Airport:"Cargoitalia"
}),
new Routes(
{
    From:"YKS",
    To:"IKT",
    Distance:1860,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"YKS",
    To:"KHV",
    Distance:1545.54,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"YKS",
    To:"KJA",
    Distance:2191.65,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"YKS",
    To:"LED",
    Distance:4841.54,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"YKS",
    To:"MJZ",
    Distance:812.223,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"YKS",
    To:"MJZ",
    Distance:812.223,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"YKS",
    To:"OVB",
    Distance:2775.16,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"YKS",
    To:"OVB",
    Distance:2775.16,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"YKS",
    To:"PEK",
    Distance:2603.54,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"YKS",
    To:"PEK",
    Distance:2603.54,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"YKS",
    To:"PYJ",
    Distance:976.965,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"YKS",
    To:"PYJ",
    Distance:976.965,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"YKS",
    To:"SVO",
    Distance:4871.57,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"YKS",
    To:"ULK",
    Distance:807.871,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"YKS",
    To:"ULK",
    Distance:807.871,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"YKS",
    To:"ULK",
    Distance:807.871,
    Airport:"Piedmont Airlines (1948-1989)"
}),
new Routes(
{
    From:"YKS",
    To:"UUD",
    Distance:1756.75,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"YKS",
    To:"VKO",
    Distance:4909.35,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"YKS",
    To:"VVO",
    Distance:2084.52,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"YKS",
    To:"VVO",
    Distance:2084.52,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"YLC",
    To:"YFB",
    Distance:120.641,
    Airport:"First Air"
}),
new Routes(
{
    From:"YLE",
    To:"YZF",
    Distance:160.832,
    Airport:"Air Tindi"
}),
new Routes(
{
    From:"YLW",
    To:"LAX",
    Distance:1782.39,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YLW",
    To:"LAX",
    Distance:1782.39,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YLW",
    To:"SEA",
    Distance:352.075,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"YLW",
    To:"YEG",
    Distance:546.669,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YLW",
    To:"YQF",
    Distance:455.954,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YLW",
    To:"YVR",
    Distance:287.228,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YLW",
    To:"YVR",
    Distance:287.228,
    Airport:"Air North Charter - Canada"
}),
new Routes(
{
    From:"YLW",
    To:"YVR",
    Distance:287.228,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YLW",
    To:"YXC",
    Distance:260.953,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YLW",
    To:"YXY",
    Distance:1545.74,
    Airport:"Air North Charter - Canada"
}),
new Routes(
{
    From:"YLW",
    To:"YYC",
    Distance:399.824,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YLW",
    To:"YYC",
    Distance:399.824,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YLW",
    To:"YYJ",
    Distance:327.572,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YLW",
    To:"YYZ",
    Distance:3065.53,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YMM",
    To:"DEN",
    Distance:1926.94,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YMM",
    To:"DEN",
    Distance:1926.94,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YMM",
    To:"YEG",
    Distance:401.018,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YMM",
    To:"YEG",
    Distance:401.018,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YMM",
    To:"YEG",
    Distance:401.018,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YMM",
    To:"YPY",
    Distance:235.136,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YMM",
    To:"YQF",
    Distance:526.274,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YMM",
    To:"YVR",
    Distance:1150.62,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YMM",
    To:"YYC",
    Distance:642.545,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YMM",
    To:"YYC",
    Distance:642.545,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YMM",
    To:"YYZ",
    Distance:2637.16,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YMM",
    To:"YYZ",
    Distance:2637.16,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YMN",
    To:"YRG",
    Distance:110.244,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YMN",
    To:"YSO",
    Distance:42.4574,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YNA",
    To:"YHR",
    Distance:155.9,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YNA",
    To:"YZV",
    Distance:318.545,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YNA",
    To:"YZV",
    Distance:318.545,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YNA",
    To:"ZKG",
    Distance:37.2604,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YNB",
    To:"CAI",
    Distance:935.456,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"YNB",
    To:"CAI",
    Distance:935.456,
    Airport:"Express One International"
}),
new Routes(
{
    From:"YNB",
    To:"CAI",
    Distance:935.456,
    Airport:"Nile Air"
}),
new Routes(
{
    From:"YNB",
    To:"DMM",
    Distance:1207.13,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"YNB",
    To:"DXB",
    Distance:1750.93,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"YNB",
    To:"IST",
    Distance:2059.62,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"YNB",
    To:"JED",
    Distance:296.044,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"YNB",
    To:"RUH",
    Distance:877.921,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"YNB",
    To:"SHJ",
    Distance:1766.36,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"YNG",
    To:"MYR",
    Distance:856.954,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"YNG",
    To:"PGD",
    Distance:1599.16,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"YNG",
    To:"PIE",
    Distance:1495.73,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"YNG",
    To:"SFB",
    Distance:1388.98,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"YNJ",
    To:"CGQ",
    Distance:358.513,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YNJ",
    To:"DLC",
    Distance:794.231,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YNJ",
    To:"ICN",
    Distance:653.618,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNJ",
    To:"ICN",
    Distance:653.618,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"YNJ",
    To:"ICN",
    Distance:653.618,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YNJ",
    To:"ICN",
    Distance:653.618,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"YNJ",
    To:"PEK",
    Distance:1114.94,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNJ",
    To:"PEK",
    Distance:1114.94,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YNJ",
    To:"PEK",
    Distance:1114.94,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YNJ",
    To:"PVG",
    Distance:1469.77,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YNJ",
    To:"PVG",
    Distance:1469.77,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YNJ",
    To:"TAO",
    Distance:1069.57,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNJ",
    To:"TAO",
    Distance:1069.57,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YNJ",
    To:"TAO",
    Distance:1069.57,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"CAN",
    Distance:1737.74,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNT",
    To:"CAN",
    Distance:1737.74,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"CAN",
    Distance:1737.74,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"CGQ",
    Distance:752.512,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNT",
    To:"CGQ",
    Distance:752.512,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"CGQ",
    Distance:752.512,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"CSX",
    Distance:1275.49,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"CTU",
    Distance:1772.82,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNT",
    To:"CTU",
    Distance:1772.82,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"CTU",
    Distance:1772.82,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"DLC",
    Distance:174.52,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"YNT",
    To:"HFE",
    Distance:727.655,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"HGH",
    Distance:802.18,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNT",
    To:"HGH",
    Distance:802.18,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"HKG",
    Distance:1824.14,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"HRB",
    Distance:999.904,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNT",
    To:"HRB",
    Distance:999.904,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"HRB",
    Distance:999.904,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"HRB",
    Distance:999.904,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"HRB",
    Distance:999.904,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"ICN",
    Distance:448.436,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNT",
    To:"ICN",
    Distance:448.436,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"ICN",
    Distance:448.436,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"ICN",
    Distance:448.436,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"YNT",
    To:"ICN",
    Distance:448.436,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"KIX",
    Distance:1290.71,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"KIX",
    Distance:1290.71,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"NKG",
    Distance:669.879,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNT",
    To:"NKG",
    Distance:669.879,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"NKG",
    Distance:669.879,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"PEK",
    Distance:510.834,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNT",
    To:"PEK",
    Distance:510.834,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"PEK",
    Distance:510.834,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"PEK",
    Distance:510.834,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"PVG",
    Distance:697.027,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNT",
    To:"PVG",
    Distance:697.027,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"PVG",
    Distance:697.027,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"SHA",
    Distance:689.838,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNT",
    To:"SHA",
    Distance:689.838,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"SHA",
    Distance:689.838,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"SHA",
    Distance:689.838,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"SHE",
    Distance:472.305,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"SJW",
    Distance:594.046,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNT",
    To:"SJW",
    Distance:594.046,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"SZX",
    Distance:1793.98,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNT",
    To:"SZX",
    Distance:1793.98,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"TNA",
    Distance:373.321,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNT",
    To:"TNA",
    Distance:373.321,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"TPE",
    Distance:1370.42,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"TSN",
    Distance:400.21,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"YNT",
    To:"TSN",
    Distance:400.21,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"YNT",
    To:"WUH",
    Distance:987.586,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNT",
    To:"WUH",
    Distance:987.586,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"WUH",
    Distance:987.586,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YNT",
    To:"XIY",
    Distance:1181.83,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNT",
    To:"XIY",
    Distance:1181.83,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YNY",
    To:"PVG",
    Distance:992.514,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"YNZ",
    To:"CSX",
    Distance:876.489,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YNZ",
    To:"DLC",
    Distance:633.289,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YNZ",
    To:"HKG",
    Distance:1373.91,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YNZ",
    To:"HRB",
    Distance:1457.6,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YNZ",
    To:"HRB",
    Distance:1457.6,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"YNZ",
    To:"NTG",
    Distance:166.464,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YNZ",
    To:"PEK",
    Distance:808.304,
    Airport:"Air China"
}),
new Routes(
{
    From:"YNZ",
    To:"PEK",
    Distance:808.304,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YNZ",
    To:"SHA",
    Distance:268.585,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YNZ",
    To:"SHE",
    Distance:931.949,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YNZ",
    To:"TPE",
    Distance:930.005,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YNZ",
    To:"TPE",
    Distance:930.005,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"YNZ",
    To:"TPE",
    Distance:930.005,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"YNZ",
    To:"WUH",
    Distance:627.89,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YNZ",
    To:"XIY",
    Distance:1055.53,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YNZ",
    To:"XMN",
    Distance:1002.08,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YNZ",
    To:"XMN",
    Distance:1002.08,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"YOL",
    To:"ABV",
    Distance:567.969,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"YOW",
    To:"BOS",
    Distance:497.944,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"BOS",
    Distance:497.944,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YOW",
    To:"CLT",
    Distance:1209.11,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YOW",
    To:"CLT",
    Distance:1209.11,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YOW",
    To:"DCA",
    Distance:728.255,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"DTW",
    Distance:706.901,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YOW",
    To:"EWR",
    Distance:529.065,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YOW",
    To:"FRA",
    Distance:5983.3,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"FRA",
    Distance:5983.3,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YOW",
    To:"IAD",
    Distance:724.285,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"IAD",
    Distance:724.285,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YOW",
    To:"LGA",
    Distance:526.031,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"LGA",
    Distance:526.031,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YOW",
    To:"LHR",
    Distance:5345.96,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"LHR",
    Distance:5345.96,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YOW",
    To:"ORD",
    Distance:1051,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"ORD",
    Distance:1051,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YOW",
    To:"PHL",
    Distance:607.083,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YOW",
    To:"PHL",
    Distance:607.083,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YOW",
    To:"YEG",
    Distance:2849.35,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"YEG",
    Distance:2849.35,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YOW",
    To:"YFB",
    Distance:2097.43,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YOW",
    To:"YFB",
    Distance:2097.43,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YOW",
    To:"YFB",
    Distance:2097.43,
    Airport:"First Air"
}),
new Routes(
{
    From:"YOW",
    To:"YFC",
    Distance:712.71,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"YHZ",
    Distance:954.8,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"YHZ",
    Distance:954.8,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YOW",
    To:"YHZ",
    Distance:954.8,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YOW",
    To:"YQB",
    Distance:368.069,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"YQM",
    Distance:857.075,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"YQM",
    Distance:857.075,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YOW",
    To:"YTZ",
    Distance:350.614,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YOW",
    To:"YUL",
    Distance:151.459,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"YVR",
    Distance:3552.01,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"YWG",
    Distance:1688.51,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"YWG",
    Distance:1688.51,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YOW",
    To:"YXU",
    Distance:505.723,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"YYC",
    Distance:2878.57,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"YYC",
    Distance:2878.57,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YOW",
    To:"YYT",
    Distance:1766.91,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"YYT",
    Distance:1766.91,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YOW",
    To:"YYZ",
    Distance:363.499,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YOW",
    To:"YYZ",
    Distance:363.499,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YOW",
    To:"YYZ",
    Distance:363.499,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YOW",
    To:"YZF",
    Distance:3099.71,
    Airport:"Air North Charter - Canada"
}),
new Routes(
{
    From:"YPN",
    To:"YGV",
    Distance:69.222,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YPN",
    To:"YZV",
    Distance:147.618,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YPR",
    To:"YVR",
    Distance:754.559,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YPR",
    To:"YVR",
    Distance:754.559,
    Airport:"Hawkair"
}),
new Routes(
{
    From:"YPW",
    To:"YVR",
    Distance:118.697,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YPY",
    To:"YMM",
    Distance:235.136,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YPY",
    To:"YSM",
    Distance:147.309,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YQB",
    To:"CDG",
    Distance:5292.11,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YQB",
    To:"EWR",
    Distance:713.719,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YQB",
    To:"ORD",
    Distance:1413.58,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQB",
    To:"ORD",
    Distance:1413.58,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YQB",
    To:"PHL",
    Distance:829.668,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YQB",
    To:"PHL",
    Distance:829.668,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YQB",
    To:"PUJ",
    Distance:3150.54,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YQB",
    To:"YBC",
    Distance:352.301,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YQB",
    To:"YGP",
    Distance:561.51,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQB",
    To:"YOW",
    Distance:368.069,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQB",
    To:"YTZ",
    Distance:718.378,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YQB",
    To:"YUL",
    Distance:232.974,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQB",
    To:"YUL",
    Distance:232.974,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YQB",
    To:"YYZ",
    Distance:731.542,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQB",
    To:"YYZ",
    Distance:731.542,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YQB",
    To:"YZV",
    Distance:536.746,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQB",
    To:"YZV",
    Distance:536.746,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YQD",
    To:"YFO",
    Distance:87.4144,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YQD",
    To:"YFO",
    Distance:87.4144,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YQD",
    To:"YTH",
    Distance:289.752,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YQD",
    To:"YWG",
    Distance:522.922,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YQD",
    To:"YWG",
    Distance:522.922,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YQF",
    To:"YLW",
    Distance:455.954,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YQF",
    To:"YMM",
    Distance:526.274,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YQF",
    To:"YYC",
    Distance:119.11,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQG",
    To:"YTZ",
    Distance:326.33,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YQG",
    To:"YYC",
    Distance:2541.06,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YQG",
    To:"YYZ",
    Distance:312.155,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQK",
    To:"YAG",
    Distance:142.828,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YQK",
    To:"YHD",
    Distance:116.264,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YQK",
    To:"YWG",
    Distance:206.696,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YQL",
    To:"YYC",
    Distance:186.294,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQM",
    To:"EWR",
    Distance:974.032,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YQM",
    To:"MCO",
    Distance:2445.13,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YQM",
    To:"MCO",
    Distance:2445.13,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YQM",
    To:"YHM",
    Distance:1248.25,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YQM",
    To:"YHZ",
    Distance:164.508,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQM",
    To:"YOW",
    Distance:857.075,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQM",
    To:"YOW",
    Distance:857.075,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YQM",
    To:"YUL",
    Distance:705.847,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQM",
    To:"YYZ",
    Distance:1206.53,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQM",
    To:"YYZ",
    Distance:1206.53,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YQQ",
    To:"YBL",
    Distance:38.3592,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YQQ",
    To:"YEG",
    Distance:877.535,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YQQ",
    To:"YVR",
    Distance:135.806,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQQ",
    To:"YVR",
    Distance:135.806,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YQQ",
    To:"YYC",
    Distance:784.863,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YQR",
    To:"DEN",
    Distance:1175.36,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQR",
    To:"DEN",
    Distance:1175.36,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YQR",
    To:"LAS",
    Distance:1803.65,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YQR",
    To:"MSP",
    Distance:1054.29,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YQR",
    To:"ORD",
    Distance:1590.03,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQR",
    To:"ORD",
    Distance:1590.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YQR",
    To:"YEG",
    Distance:689.927,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQR",
    To:"YEG",
    Distance:689.927,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YQR",
    To:"YVR",
    Distance:1332.37,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQR",
    To:"YVR",
    Distance:1332.37,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YQR",
    To:"YWG",
    Distance:531.825,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQR",
    To:"YWG",
    Distance:531.825,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YQR",
    To:"YYC",
    Distance:661.696,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQR",
    To:"YYC",
    Distance:661.696,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YQR",
    To:"YYZ",
    Distance:2027.77,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQR",
    To:"YYZ",
    Distance:2027.77,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YQT",
    To:"YAG",
    Distance:304.757,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YQT",
    To:"YAM",
    Distance:418.438,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YQT",
    To:"YTS",
    Distance:586.036,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YQT",
    To:"YTZ",
    Distance:929.619,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YQT",
    To:"YWG",
    Distance:600.366,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQT",
    To:"YWG",
    Distance:600.366,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YQT",
    To:"YWG",
    Distance:600.366,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YQT",
    To:"YXL",
    Distance:269.476,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YQT",
    To:"YYZ",
    Distance:911.377,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQT",
    To:"YYZ",
    Distance:911.377,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YQU",
    To:"YEG",
    Distance:402.406,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQU",
    To:"YEG",
    Distance:402.406,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YQU",
    To:"YYC",
    Distance:556.175,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQU",
    To:"YYC",
    Distance:556.175,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YQX",
    To:"YHZ",
    Distance:814.447,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQX",
    To:"YYR",
    Distance:635.608,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQX",
    To:"YYT",
    Distance:198.864,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQY",
    To:"YHZ",
    Distance:304.878,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQY",
    To:"YYZ",
    Distance:1562.27,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQZ",
    To:"YVR",
    Distance:428.71,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YQZ",
    To:"YWL",
    Distance:98.6735,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YRA",
    To:"YZF",
    Distance:233.126,
    Airport:"Air Tindi"
}),
new Routes(
{
    From:"YRB",
    To:"YAB",
    Distance:360.21,
    Airport:"First Air"
}),
new Routes(
{
    From:"YRB",
    To:"YGZ",
    Distance:383.413,
    Airport:"Askari Aviation"
}),
new Routes(
{
    From:"YRG",
    To:"YMN",
    Distance:110.244,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YRG",
    To:"YYR",
    Distance:160.943,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YRL",
    To:"YHD",
    Distance:156.141,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YRL",
    To:"YWG",
    Distance:275.657,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YRL",
    To:"YXL",
    Distance:170.255,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YRT",
    To:"YBK",
    Distance:256.532,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YRT",
    To:"YBK",
    Distance:256.532,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YRT",
    To:"YBK",
    Distance:256.532,
    Airport:"First Air"
}),
new Routes(
{
    From:"YRT",
    To:"YCS",
    Distance:91.6793,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YRT",
    To:"YCS",
    Distance:91.6793,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YRT",
    To:"YCS",
    Distance:91.6793,
    Airport:"First Air"
}),
new Routes(
{
    From:"YRT",
    To:"YEK",
    Distance:216.561,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YRT",
    To:"YEK",
    Distance:216.561,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YRT",
    To:"YEK",
    Distance:216.561,
    Airport:"First Air"
}),
new Routes(
{
    From:"YRT",
    To:"YFB",
    Distance:1175.67,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YRT",
    To:"YFB",
    Distance:1175.67,
    Airport:"First Air"
}),
new Routes(
{
    From:"YRT",
    To:"YTH",
    Distance:844.248,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YRT",
    To:"YUT",
    Distance:498.294,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YRT",
    To:"YUT",
    Distance:498.294,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YRT",
    To:"YWG",
    Distance:1467.74,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YRT",
    To:"YWG",
    Distance:1467.74,
    Airport:"First Air"
}),
new Routes(
{
    From:"YRT",
    To:"YXN",
    Distance:68.1821,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YRT",
    To:"YXN",
    Distance:68.1821,
    Airport:"First Air"
}),
new Routes(
{
    From:"YRT",
    To:"YYQ",
    Distance:464.956,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YRT",
    To:"YYQ",
    Distance:464.956,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YRT",
    To:"YZF",
    Distance:1135.9,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YRT",
    To:"YZF",
    Distance:1135.9,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YRT",
    To:"YZF",
    Distance:1135.9,
    Airport:"First Air"
}),
new Routes(
{
    From:"YRT",
    To:"YZS",
    Distance:460.34,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YRT",
    To:"YZS",
    Distance:460.34,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YSB",
    To:"YAM",
    Distance:284.125,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YSB",
    To:"YQT",
    Distance:668.831,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YSB",
    To:"YTS",
    Distance:220.538,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YSB",
    To:"YTZ",
    Distance:350.988,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YSB",
    To:"YYB",
    Distance:109.275,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YSB",
    To:"YYZ",
    Distance:340.33,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YSG",
    To:"YZF",
    Distance:193.386,
    Airport:"Air Tindi"
}),
new Routes(
{
    From:"YSJ",
    To:"YHZ",
    Distance:193.096,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YSJ",
    To:"YUL",
    Distance:613.008,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YSJ",
    To:"YYZ",
    Distance:1103.52,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YSK",
    To:"YWG",
    Distance:1400.06,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YSM",
    To:"YEG",
    Distance:752.64,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YSM",
    To:"YHY",
    Distance:228.561,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YSM",
    To:"YPY",
    Distance:147.309,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YSM",
    To:"YZF",
    Distance:302.177,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YSO",
    To:"YHO",
    Distance:66.1161,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YSO",
    To:"YMN",
    Distance:42.4574,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YTE",
    To:"YFB",
    Distance:391.916,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YTE",
    To:"YFB",
    Distance:391.916,
    Airport:"First Air"
}),
new Routes(
{
    From:"YTE",
    To:"YZS",
    Distance:330.403,
    Airport:"First Air"
}),
new Routes(
{
    From:"YTH",
    To:"YFO",
    Distance:272.286,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YTH",
    To:"YGX",
    Distance:205.21,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YTH",
    To:"YQD",
    Distance:289.752,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YTH",
    To:"YWG",
    Distance:656.39,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YTH",
    To:"YYQ",
    Distance:398.489,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YTH",
    To:"YYQ",
    Distance:398.489,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YTS",
    To:"YSB",
    Distance:220.538,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YTS",
    To:"YTZ",
    Distance:570.317,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YTS",
    To:"YYU",
    Distance:123.065,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YTS",
    To:"YYZ",
    Distance:560.376,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YTY",
    To:"CAN",
    Distance:1197.86,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YTY",
    To:"CGO",
    Distance:586.209,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YTY",
    To:"CKG",
    Distance:1282.77,
    Airport:"Air China"
}),
new Routes(
{
    From:"YTY",
    To:"CKG",
    Distance:1282.77,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YTY",
    To:"CSX",
    Distance:790.044,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YTY",
    To:"CTU",
    Distance:1508.57,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"YTY",
    To:"DLC",
    Distance:730.801,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YTY",
    To:"HRB",
    Distance:1556.7,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YTY",
    To:"PEK",
    Distance:881.627,
    Airport:"Air China"
}),
new Routes(
{
    From:"YTY",
    To:"PEK",
    Distance:881.627,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YTY",
    To:"SYX",
    Distance:1890.6,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YTY",
    To:"SZX",
    Distance:1246.69,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YTY",
    To:"WUH",
    Distance:557.284,
    Airport:"KSY"
}),
new Routes(
{
    From:"YTY",
    To:"WUH",
    Distance:557.284,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YTY",
    To:"XIY",
    Distance:1037.34,
    Airport:"Air China"
}),
new Routes(
{
    From:"YTY",
    To:"XIY",
    Distance:1037.34,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YTY",
    To:"XMN",
    Distance:904.861,
    Airport:"Air China"
}),
new Routes(
{
    From:"YTY",
    To:"XMN",
    Distance:904.861,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"YTZ",
    To:"BOS",
    Distance:696.401,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YTZ",
    To:"EWR",
    Distance:540.341,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YTZ",
    To:"IAD",
    Distance:545.332,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YTZ",
    To:"MDW",
    Distance:712.465,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YTZ",
    To:"MYR",
    Distance:1106.88,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YTZ",
    To:"YAM",
    Distance:511.947,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YTZ",
    To:"YOW",
    Distance:350.614,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YTZ",
    To:"YQB",
    Distance:718.378,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YTZ",
    To:"YQG",
    Distance:326.33,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YTZ",
    To:"YQT",
    Distance:929.619,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YTZ",
    To:"YSB",
    Distance:350.988,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YTZ",
    To:"YTS",
    Distance:570.317,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YTZ",
    To:"YUL",
    Distance:492.633,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YTZ",
    To:"YUL",
    Distance:492.633,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"AGP",
    Distance:5705.16,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"ALG",
    Distance:6275.41,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"YUL",
    To:"AMM",
    Distance:8897.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"AMM",
    Distance:8897.01,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"YUL",
    To:"AMM",
    Distance:8897.01,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YUL",
    To:"AMS",
    Distance:5503.14,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YUL",
    To:"AMS",
    Distance:5503.14,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"ATH",
    Distance:7631.86,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"ATL",
    Distance:1600.29,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"YUL",
    To:"ATL",
    Distance:1600.29,
    Airport:"Air France"
}),
new Routes(
{
    From:"YUL",
    To:"ATL",
    Distance:1600.29,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YUL",
    To:"AZS",
    Distance:2936.87,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"BCN",
    Distance:5911.35,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"BDL",
    Distance:401.79,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"BDL",
    Distance:401.79,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"BOD",
    Distance:5518.1,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"BOS",
    Distance:408.977,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"BOS",
    Distance:408.977,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"BRU",
    Distance:5553.84,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"BRU",
    Distance:5553.84,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"BRU",
    Distance:5553.84,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"BRU",
    Distance:5553.84,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YUL",
    To:"CCC",
    Distance:2589.15,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"CCC",
    Distance:2589.15,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"CCC",
    Distance:2589.15,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"YUL",
    To:"CDG",
    Distance:5523.49,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"CDG",
    Distance:5523.49,
    Airport:"Air France"
}),
new Routes(
{
    From:"YUL",
    To:"CDG",
    Distance:5523.49,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"CDG",
    Distance:5523.49,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"YUL",
    To:"CDG",
    Distance:5523.49,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YUL",
    To:"CDG",
    Distance:5523.49,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YUL",
    To:"CLT",
    Distance:1292.26,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"CLT",
    Distance:1292.26,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YUL",
    To:"CMN",
    Distance:5674.38,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"YUL",
    To:"CMW",
    Distance:2700.34,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"YUL",
    To:"CUN",
    Distance:2969.77,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"CUN",
    Distance:2969.77,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"CUN",
    Distance:2969.77,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YUL",
    To:"CYO",
    Distance:2746.06,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"YUL",
    To:"CZM",
    Distance:3025.05,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"DCA",
    Distance:784.321,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"DCA",
    Distance:784.321,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"DCA",
    Distance:784.321,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YUL",
    To:"DEN",
    Distance:2587.51,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"DEN",
    Distance:2587.51,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"DFW",
    Distance:2432.25,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"DFW",
    Distance:2432.25,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YUL",
    To:"DFW",
    Distance:2432.25,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YUL",
    To:"DOH",
    Distance:10404.8,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"YUL",
    To:"DTW",
    Distance:851.065,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"DTW",
    Distance:851.065,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YUL",
    To:"DTW",
    Distance:851.065,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"YUL",
    To:"DTW",
    Distance:851.065,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YUL",
    To:"EWR",
    Distance:532.428,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"EWR",
    Distance:532.428,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"FCO",
    Distance:6584.93,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"FDF",
    Distance:3635.65,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"FLL",
    Distance:2231.31,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"FLL",
    Distance:2231.31,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"FLL",
    Distance:2231.31,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YUL",
    To:"FRA",
    Distance:5853.42,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"FRA",
    Distance:5853.42,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YUL",
    To:"FSP",
    Distance:1358.84,
    Airport:"Air Saint Pierre"
}),
new Routes(
{
    From:"YUL",
    To:"GVA",
    Distance:5905.07,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"GVA",
    Distance:5905.07,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YUL",
    To:"GVA",
    Distance:5905.07,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"YUL",
    To:"GVA",
    Distance:5905.07,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"HOG",
    Distance:2754.92,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"HOG",
    Distance:2754.92,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"HOG",
    Distance:2754.92,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"YUL",
    To:"IAD",
    Distance:787.3,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"IAD",
    Distance:787.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"IAH",
    Distance:2548.78,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"IAH",
    Distance:2548.78,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"JFK",
    Distance:537.17,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"YUL",
    To:"JFK",
    Distance:537.17,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"JFK",
    Distance:537.17,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YUL",
    To:"JFK",
    Distance:537.17,
    Airport:"Finnair"
}),
new Routes(
{
    From:"YUL",
    To:"JFK",
    Distance:537.17,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YUL",
    To:"JFK",
    Distance:537.17,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YUL",
    To:"LAS",
    Distance:3595.96,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"LAS",
    Distance:3595.96,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YUL",
    To:"LAX",
    Distance:3972.64,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"LAX",
    Distance:3972.64,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"LGA",
    Distance:521.982,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"LGA",
    Distance:521.982,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"LGA",
    Distance:521.982,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YUL",
    To:"LGA",
    Distance:521.982,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YUL",
    To:"LGA",
    Distance:521.982,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"LGA",
    Distance:521.982,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YUL",
    To:"LGW",
    Distance:5245.74,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"LHR",
    Distance:5213.94,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"LHR",
    Distance:5213.94,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"LHR",
    Distance:5213.94,
    Airport:"British Airways"
}),
new Routes(
{
    From:"YUL",
    To:"LHR",
    Distance:5213.94,
    Airport:"Finnair"
}),
new Routes(
{
    From:"YUL",
    To:"LHR",
    Distance:5213.94,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"LHR",
    Distance:5213.94,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YUL",
    To:"LIS",
    Distance:5235.17,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"LYS",
    Distance:5865.79,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"MBJ",
    Distance:3023.25,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"MBJ",
    Distance:3023.25,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"MCO",
    Distance:2008.39,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"MCO",
    Distance:2008.39,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"MEX",
    Distance:3712.77,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"YUL",
    To:"MIA",
    Distance:2264.7,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"MIA",
    Distance:2264.7,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YUL",
    To:"MIA",
    Distance:2264.7,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YUL",
    To:"MRS",
    Distance:6005.18,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"MSP",
    Distance:1524.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YUL",
    To:"MSP",
    Distance:1524.66,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YUL",
    To:"MUC",
    Distance:6150.77,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"MUC",
    Distance:6150.77,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YUL",
    To:"NCE",
    Distance:6128.79,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"ORD",
    Distance:1200.65,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"ORD",
    Distance:1200.65,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"ORD",
    Distance:1200.65,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"YUL",
    To:"ORD",
    Distance:1200.65,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YUL",
    To:"ORD",
    Distance:1200.65,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"ORD",
    Distance:1200.65,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YUL",
    To:"ORY",
    Distance:5525.42,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"YUL",
    To:"PAP",
    Distance:2993.08,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"PHL",
    Distance:634.472,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"PHL",
    Distance:634.472,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YUL",
    To:"POP",
    Distance:2873.92,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"PTP",
    Distance:3441.05,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"PUJ",
    Distance:3032.43,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"PUJ",
    Distance:3032.43,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"PUJ",
    Distance:3032.43,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YUL",
    To:"PVR",
    Distance:3980.54,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"SFO",
    Distance:4075.84,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"SFO",
    Distance:4075.84,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"SNU",
    Distance:2616.29,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"SNU",
    Distance:2616.29,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"SNU",
    Distance:2616.29,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"YUL",
    To:"TLS",
    Distance:5727.75,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"TUN",
    Distance:6770.46,
    Airport:"Servicios de Transportes A"
}),
new Routes(
{
    From:"YUL",
    To:"VCE",
    Distance:6358.1,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"VRA",
    Distance:2590.06,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"VRA",
    Distance:2590.06,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"YBC",
    Distance:582.879,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YBG",
    Distance:380.22,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YEG",
    Distance:2968.75,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YEG",
    Distance:2968.75,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YUL",
    To:"YFC",
    Distance:561.294,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YHZ",
    Distance:804.182,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YHZ",
    Distance:804.182,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"YOW",
    Distance:151.459,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YQB",
    Distance:232.974,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YQB",
    Distance:232.974,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"YQM",
    Distance:705.847,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YSJ",
    Distance:613.008,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YTZ",
    Distance:492.633,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YTZ",
    Distance:492.633,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"YUY",
    Distance:492.465,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YVO",
    Distance:420.927,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YVP",
    Distance:1449.59,
    Airport:"First Air"
}),
new Routes(
{
    From:"YUL",
    To:"YVR",
    Distance:3682.18,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YVR",
    Distance:3682.18,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YUL",
    To:"YWG",
    Distance:1818.36,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YWG",
    Distance:1818.36,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YUL",
    To:"YYC",
    Distance:3005.55,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YYC",
    Distance:3005.55,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YUL",
    To:"YYG",
    Distance:826.468,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YYT",
    Distance:1617.77,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YYY",
    Distance:545.226,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YYZ",
    Distance:507.19,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"YYZ",
    Distance:507.19,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YUL",
    To:"YYZ",
    Distance:507.19,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YUL",
    To:"YYZ",
    Distance:507.19,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"YUL",
    To:"YYZ",
    Distance:507.19,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YUL",
    To:"YYZ",
    Distance:507.19,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YUL",
    To:"YZV",
    Distance:767.727,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"ZBF",
    Distance:656.939,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"ZRH",
    Distance:5995.7,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUL",
    To:"ZRH",
    Distance:5995.7,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"YUL",
    To:"ZSA",
    Distance:2381.42,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUM",
    To:"LAX",
    Distance:381.161,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YUM",
    To:"PHX",
    Distance:256.806,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YUM",
    To:"PHX",
    Distance:256.806,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YUS",
    To:"XNN",
    Distance:609.538,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YUS",
    To:"XNN",
    Distance:609.538,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"YUT",
    To:"YBK",
    Distance:517.785,
    Airport:"First Air"
}),
new Routes(
{
    From:"YUT",
    To:"YRT",
    Distance:498.294,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YUT",
    To:"YZS",
    Distance:290.896,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YUX",
    To:"YFB",
    Distance:793.401,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YUX",
    To:"YFB",
    Distance:793.401,
    Airport:"First Air"
}),
new Routes(
{
    From:"YUX",
    To:"YGT",
    Distance:69.2853,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YUX",
    To:"YGT",
    Distance:69.2853,
    Airport:"First Air"
}),
new Routes(
{
    From:"YUY",
    To:"YUL",
    Distance:492.465,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YUY",
    To:"YVO",
    Distance:79.9584,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVM",
    To:"YXP",
    Distance:172.244,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YVM",
    To:"YXP",
    Distance:172.244,
    Airport:"First Air"
}),
new Routes(
{
    From:"YVO",
    To:"YUL",
    Distance:420.927,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVO",
    To:"YUY",
    Distance:79.9584,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVP",
    To:"YFB",
    Distance:629.433,
    Airport:"First Air"
}),
new Routes(
{
    From:"YVP",
    To:"YUL",
    Distance:1449.59,
    Airport:"First Air"
}),
new Routes(
{
    From:"YVQ",
    To:"YEV",
    Distance:445.332,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YVQ",
    To:"YEV",
    Distance:445.332,
    Airport:"First Air"
}),
new Routes(
{
    From:"YVQ",
    To:"YGH",
    Distance:138.322,
    Airport:"Hello"
}),
new Routes(
{
    From:"YVQ",
    To:"YZF",
    Distance:679.926,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YVQ",
    To:"YZF",
    Distance:679.926,
    Airport:"First Air"
}),
new Routes(
{
    From:"YVQ",
    To:"ZFN",
    Distance:145.221,
    Airport:"Hello"
}),
new Routes(
{
    From:"YVR",
    To:"AKL",
    Distance:11360.8,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"AKL",
    Distance:11360.8,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"YVR",
    To:"AMS",
    Distance:7707.27,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YVR",
    To:"AMS",
    Distance:7707.27,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"CAN",
    Distance:10203,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"CUN",
    Distance:4475.57,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YVR",
    To:"CUN",
    Distance:4475.57,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"DEN",
    Distance:1789.5,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"DEN",
    Distance:1789.5,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"DFW",
    Distance:2819.37,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"DFW",
    Distance:2819.37,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YVR",
    To:"DFW",
    Distance:2819.37,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"EWR",
    Distance:3899.2,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"EWR",
    Distance:3899.2,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"YVR",
    To:"EWR",
    Distance:3899.2,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"FRA",
    Distance:8062.16,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"FRA",
    Distance:8062.16,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"YVR",
    To:"FRA",
    Distance:8062.16,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YVR",
    To:"HKG",
    Distance:10269.3,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"HKG",
    Distance:10269.3,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"YVR",
    To:"HND",
    Distance:7558.65,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"HND",
    Distance:7558.65,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"YVR",
    To:"HNL",
    Distance:4353.62,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"HNL",
    Distance:4353.62,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YVR",
    To:"HNL",
    Distance:4353.62,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"IAH",
    Distance:3169.39,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"ICN",
    Distance:8199.72,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"ICN",
    Distance:8199.72,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"ICN",
    Distance:8199.72,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"YVR",
    To:"JFK",
    Distance:3930.42,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"YVR",
    To:"KOA",
    Distance:4385.26,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"LAS",
    Distance:1597.19,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"LAS",
    Distance:1597.19,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"LAS",
    Distance:1597.19,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YVR",
    To:"LAS",
    Distance:1597.19,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"LAX",
    Distance:1740.89,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"LAX",
    Distance:1740.89,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"LAX",
    Distance:1740.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"LAX",
    Distance:1740.89,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"LAX",
    Distance:1740.89,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"LGW",
    Distance:7618.7,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YVR",
    To:"LHR",
    Distance:7578.01,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"LHR",
    Distance:7578.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"LHR",
    Distance:7578.01,
    Airport:"British Airways"
}),
new Routes(
{
    From:"YVR",
    To:"LHR",
    Distance:7578.01,
    Airport:"Finnair"
}),
new Routes(
{
    From:"YVR",
    To:"LHR",
    Distance:7578.01,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"LHR",
    Distance:7578.01,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YVR",
    To:"LIH",
    Distance:4382.7,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"MAN",
    Distance:7337.43,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YVR",
    To:"MEX",
    Distance:3944.71,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"MNL",
    Distance:10554.1,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"MSP",
    Distance:2304.62,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YVR",
    To:"MUC",
    Distance:8340.38,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"MUC",
    Distance:8340.38,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YVR",
    To:"NRT",
    Distance:7503.37,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"NRT",
    Distance:7503.37,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"YVR",
    To:"NRT",
    Distance:7503.37,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"NRT",
    Distance:7503.37,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"OGG",
    Distance:4301.61,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"OGG",
    Distance:4301.61,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"ORD",
    Distance:2831.42,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"ORD",
    Distance:2831.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"ORD",
    Distance:2831.42,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YVR",
    To:"ORD",
    Distance:2831.42,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"ORD",
    Distance:2831.42,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"PDX",
    Distance:403.3,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"PDX",
    Distance:403.3,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"PDX",
    Distance:403.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"PDX",
    Distance:403.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"PEK",
    Distance:8492.31,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"PEK",
    Distance:8492.31,
    Airport:"Air China"
}),
new Routes(
{
    From:"YVR",
    To:"PHX",
    Distance:1980.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"PHX",
    Distance:1980.43,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YVR",
    To:"PSP",
    Distance:1794.85,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"PVG",
    Distance:9016.05,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"PVG",
    Distance:9016.05,
    Airport:"Air China"
}),
new Routes(
{
    From:"YVR",
    To:"PVG",
    Distance:9016.05,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"PVR",
    Distance:3546.68,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"PVR",
    Distance:3546.68,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YVR",
    To:"PVR",
    Distance:3546.68,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"QBC",
    Distance:428.393,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YVR",
    To:"SEA",
    Distance:204.524,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"SEA",
    Distance:204.524,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"SEA",
    Distance:204.524,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"SEA",
    Distance:204.524,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YVR",
    To:"SEA",
    Distance:204.524,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"SFO",
    Distance:1288.71,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"SFO",
    Distance:1288.71,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"SFO",
    Distance:1288.71,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"SHE",
    Distance:8035.13,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"SJD",
    Distance:3126.84,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"SLC",
    Distance:1281.95,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YVR",
    To:"SNA",
    Distance:1780.4,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YVR",
    To:"SNA",
    Distance:1780.4,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"SYD",
    Distance:12500.9,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"TPE",
    Distance:9591.66,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"TPE",
    Distance:9591.66,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"YVR",
    To:"YBL",
    Distance:172.381,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YBL",
    Distance:172.381,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YVR",
    To:"YCD",
    Distance:52.3235,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YCG",
    Distance:403.09,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YEG",
    Distance:809.052,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YEG",
    Distance:809.052,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"YEG",
    Distance:809.052,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"YKA",
    Distance:257.973,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YLW",
    Distance:287.228,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YLW",
    Distance:287.228,
    Airport:"Air North Charter - Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YLW",
    Distance:287.228,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"YMM",
    Distance:1150.62,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YOW",
    Distance:3552.01,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YPR",
    Distance:754.559,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YPR",
    Distance:754.559,
    Airport:"Hawkair"
}),
new Routes(
{
    From:"YVR",
    To:"YPW",
    Distance:118.697,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YVR",
    To:"YQQ",
    Distance:135.806,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YVR",
    To:"YQR",
    Distance:1332.37,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YQR",
    Distance:1332.37,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"YQZ",
    Distance:428.71,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YUL",
    Distance:3682.18,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YUL",
    Distance:3682.18,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"YWG",
    Distance:1863.92,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YWG",
    Distance:1863.92,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"YWL",
    Distance:341.773,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YWL",
    Distance:341.773,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YVR",
    To:"YXC",
    Distance:537.428,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YXC",
    Distance:537.428,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YVR",
    To:"YXE",
    Distance:1204.69,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YXE",
    Distance:1204.69,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"YXJ",
    Distance:800.257,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YXJ",
    Distance:800.257,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"YXS",
    Distance:523.287,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YXS",
    Distance:523.287,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"YXT",
    Distance:693.28,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YXT",
    Distance:693.28,
    Airport:"Hawkair"
}),
new Routes(
{
    From:"YVR",
    To:"YXT",
    Distance:693.28,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"YXY",
    Distance:1483.32,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YXY",
    Distance:1483.32,
    Airport:"Air North Charter - Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YYC",
    Distance:686.382,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YYC",
    Distance:686.382,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YVR",
    To:"YYC",
    Distance:686.382,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"YYD",
    Distance:683.039,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YYD",
    Distance:683.039,
    Airport:"Hawkair"
}),
new Routes(
{
    From:"YVR",
    To:"YYF",
    Distance:261.291,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YYJ",
    Distance:63.3233,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YYJ",
    Distance:63.3233,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YVR",
    To:"YYJ",
    Distance:63.3233,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"YYZ",
    Distance:3345.55,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YYZ",
    Distance:3345.55,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"YVR",
    To:"YYZ",
    Distance:3345.55,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YVR",
    To:"YZP",
    Distance:750.808,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YVR",
    To:"YZT",
    Distance:341.857,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YVR",
    To:"YZZ",
    Distance:405.899,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YVR",
    To:"ZMT",
    Distance:817.457,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YWG",
    To:"DEN",
    Distance:1260.01,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YWG",
    To:"DEN",
    Distance:1260.01,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YWG",
    To:"LAS",
    Distance:2107.56,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YWG",
    To:"MSP",
    Distance:635.434,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YWG",
    To:"ORD",
    Distance:1137.84,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YWG",
    To:"ORD",
    Distance:1137.84,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YWG",
    To:"YEG",
    Distance:1186.82,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YWG",
    To:"YEG",
    Distance:1186.82,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YWG",
    To:"YEG",
    Distance:1186.82,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YWG",
    To:"YFO",
    Distance:609.914,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YWG",
    To:"YFO",
    Distance:609.914,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YWG",
    To:"YGX",
    Distance:736.382,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YWG",
    To:"YOW",
    Distance:1688.51,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YWG",
    To:"YOW",
    Distance:1688.51,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YWG",
    To:"YQD",
    Distance:522.922,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YWG",
    To:"YQD",
    Distance:522.922,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YWG",
    To:"YQK",
    Distance:206.696,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YWG",
    To:"YQR",
    Distance:531.825,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YWG",
    To:"YQR",
    Distance:531.825,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YWG",
    To:"YQT",
    Distance:600.366,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YWG",
    To:"YQT",
    Distance:600.366,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YWG",
    To:"YRL",
    Distance:275.657,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YWG",
    To:"YRT",
    Distance:1467.74,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YWG",
    To:"YRT",
    Distance:1467.74,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YWG",
    To:"YRT",
    Distance:1467.74,
    Airport:"First Air"
}),
new Routes(
{
    From:"YWG",
    To:"YSK",
    Distance:1400.06,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YWG",
    To:"YTH",
    Distance:656.39,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YWG",
    To:"YUL",
    Distance:1818.36,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YWG",
    To:"YUL",
    Distance:1818.36,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YWG",
    To:"YUL",
    Distance:1818.36,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YWG",
    To:"YVR",
    Distance:1863.92,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YWG",
    To:"YVR",
    Distance:1863.92,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YWG",
    To:"YXE",
    Distance:706.911,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YWG",
    To:"YXE",
    Distance:706.911,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YWG",
    To:"YXU",
    Distance:1445.57,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YWG",
    To:"YYC",
    Distance:1191.45,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YWG",
    To:"YYC",
    Distance:1191.45,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YWG",
    To:"YYQ",
    Distance:1002.82,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YWG",
    To:"YYQ",
    Distance:1002.82,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YWG",
    To:"YYZ",
    Distance:1504.02,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YWG",
    To:"YYZ",
    Distance:1504.02,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YWH",
    To:"CXH",
    Distance:98.4272,
    Airport:"Helijet"
}),
new Routes(
{
    From:"YWH",
    To:"LKE",
    Distance:117.77,
    Airport:"Kenmore Air"
}),
new Routes(
{
    From:"YWJ",
    To:"YZF",
    Distance:616.419,
    Airport:"Hello"
}),
new Routes(
{
    From:"YWJ",
    To:"ZFN",
    Distance:122.572,
    Airport:"Hello"
}),
new Routes(
{
    From:"YWK",
    To:"YYR",
    Distance:431.775,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YWK",
    To:"YYY",
    Distance:488.817,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YWK",
    To:"YZV",
    Distance:302.91,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YWK",
    To:"YZV",
    Distance:302.91,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YWL",
    To:"YQZ",
    Distance:98.6735,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YWL",
    To:"YVR",
    Distance:341.773,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YWL",
    To:"YVR",
    Distance:341.773,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YXC",
    To:"YLW",
    Distance:260.953,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YXC",
    To:"YVR",
    Distance:537.428,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YXC",
    To:"YVR",
    Distance:537.428,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YXC",
    To:"YYC",
    Distance:208.546,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YXE",
    To:"DEN",
    Distance:1377.49,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YXE",
    To:"DEN",
    Distance:1377.49,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YXE",
    To:"LAS",
    Distance:1909.07,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YXE",
    To:"MSP",
    Distance:1277.9,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YXE",
    To:"ORD",
    Distance:1810.13,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YXE",
    To:"YEG",
    Distance:479.951,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YXE",
    To:"YEG",
    Distance:479.951,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YXE",
    To:"YVR",
    Distance:1204.69,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YXE",
    To:"YVR",
    Distance:1204.69,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YXE",
    To:"YWG",
    Distance:706.911,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YXE",
    To:"YWG",
    Distance:706.911,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YXE",
    To:"YYC",
    Distance:518.393,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YXE",
    To:"YYC",
    Distance:518.393,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YXE",
    To:"YYZ",
    Distance:2209.89,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YXE",
    To:"YYZ",
    Distance:2209.89,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YXH",
    To:"YYC",
    Distance:262.894,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YXJ",
    To:"YVR",
    Distance:800.257,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YXJ",
    To:"YVR",
    Distance:800.257,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YXJ",
    To:"YYC",
    Distance:720.808,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YXL",
    To:"YAG",
    Distance:196.666,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YXL",
    To:"YHD",
    Distance:67.7047,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YXL",
    To:"YQT",
    Distance:269.476,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YXL",
    To:"YRL",
    Distance:170.255,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YXN",
    To:"YEK",
    Distance:149.236,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YXN",
    To:"YEK",
    Distance:149.236,
    Airport:"First Air"
}),
new Routes(
{
    From:"YXN",
    To:"YRT",
    Distance:68.1821,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YXN",
    To:"YRT",
    Distance:68.1821,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YXN",
    To:"YRT",
    Distance:68.1821,
    Airport:"First Air"
}),
new Routes(
{
    From:"YXP",
    To:"YFB",
    Distance:297.335,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YXP",
    To:"YFB",
    Distance:297.335,
    Airport:"First Air"
}),
new Routes(
{
    From:"YXP",
    To:"YVM",
    Distance:172.244,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YXP",
    To:"YVM",
    Distance:172.244,
    Airport:"First Air"
}),
new Routes(
{
    From:"YXS",
    To:"YVR",
    Distance:523.287,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YXS",
    To:"YVR",
    Distance:523.287,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YXS",
    To:"YYC",
    Distance:661.764,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YXT",
    To:"YVR",
    Distance:693.28,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YXT",
    To:"YVR",
    Distance:693.28,
    Airport:"Hawkair"
}),
new Routes(
{
    From:"YXT",
    To:"YVR",
    Distance:693.28,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YXT",
    To:"YYD",
    Distance:98.0108,
    Airport:"Hawkair"
}),
new Routes(
{
    From:"YXU",
    To:"ORD",
    Distance:565.739,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YXU",
    To:"ORD",
    Distance:565.739,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YXU",
    To:"YOW",
    Distance:505.723,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YXU",
    To:"YWG",
    Distance:1445.57,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YXU",
    To:"YYC",
    Distance:2620.26,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YXU",
    To:"YYZ",
    Distance:142.28,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YXX",
    To:"YEG",
    Distance:774.836,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YXX",
    To:"YYC",
    Distance:638.507,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YXY",
    To:"YLW",
    Distance:1545.74,
    Airport:"Air North Charter - Canada"
}),
new Routes(
{
    From:"YXY",
    To:"YVR",
    Distance:1483.32,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YXY",
    To:"YVR",
    Distance:1483.32,
    Airport:"Air North Charter - Canada"
}),
new Routes(
{
    From:"YXY",
    To:"YYC",
    Distance:1677.91,
    Airport:"Air North Charter - Canada"
}),
new Routes(
{
    From:"YXY",
    To:"YZF",
    Distance:1103.7,
    Airport:"Air North Charter - Canada"
}),
new Routes(
{
    From:"YYB",
    To:"YSB",
    Distance:109.275,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YYB",
    To:"YYZ",
    Distance:299.158,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"AMS",
    Distance:7167.64,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYC",
    To:"AMS",
    Distance:7167.64,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYC",
    To:"AMS",
    Distance:7167.64,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"CUN",
    Distance:4091.03,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"CUN",
    Distance:4091.03,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"DEN",
    Distance:1445.26,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"DEN",
    Distance:1445.26,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"DFW",
    Distance:2451.21,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"DFW",
    Distance:2451.21,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYC",
    To:"DFW",
    Distance:2451.21,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YYC",
    To:"DFW",
    Distance:2451.21,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"EWR",
    Distance:3246.73,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"FRA",
    Distance:7527.97,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"FRA",
    Distance:7527.97,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYC",
    To:"FRA",
    Distance:7527.97,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YYC",
    To:"GLA",
    Distance:6476.69,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYC",
    To:"IAH",
    Distance:2812.55,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"IAH",
    Distance:2812.55,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"JFK",
    Distance:3277.15,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"JFK",
    Distance:3277.15,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYC",
    To:"JFK",
    Distance:3277.15,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"LAS",
    Distance:1674.12,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"LAS",
    Distance:1674.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"LAS",
    Distance:1674.12,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYC",
    To:"LAS",
    Distance:1674.12,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"LAX",
    Distance:1942.04,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"LAX",
    Distance:1942.04,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"LAX",
    Distance:1942.04,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYC",
    To:"LAX",
    Distance:1942.04,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"LGW",
    Distance:7054.58,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYC",
    To:"LHR",
    Distance:7014.42,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"LHR",
    Distance:7014.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"LHR",
    Distance:7014.42,
    Airport:"British Airways"
}),
new Routes(
{
    From:"YYC",
    To:"LHR",
    Distance:7014.42,
    Airport:"Finnair"
}),
new Routes(
{
    From:"YYC",
    To:"LHR",
    Distance:7014.42,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"LHR",
    Distance:7014.42,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YYC",
    To:"MAN",
    Distance:6776.3,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYC",
    To:"MCO",
    Distance:3711.14,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"MSP",
    Distance:1688.03,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYC",
    To:"NRT",
    Distance:7945.69,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"NRT",
    Distance:7945.69,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"YYC",
    To:"ORD",
    Distance:2224.28,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"ORD",
    Distance:2224.28,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"ORD",
    Distance:2224.28,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYC",
    To:"ORD",
    Distance:2224.28,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"ORD",
    Distance:2224.28,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"PDX",
    Distance:881.628,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"PDX",
    Distance:881.628,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"PHX",
    Distance:1972.63,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"PHX",
    Distance:1972.63,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YYC",
    To:"PHX",
    Distance:1972.63,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"PSP",
    Distance:1932.42,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"PVR",
    Distance:3469.41,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"PVR",
    Distance:3469.41,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"SAN",
    Distance:2060.06,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"SAN",
    Distance:2060.06,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"SEA",
    Distance:725.675,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"SFO",
    Distance:1638.43,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"SFO",
    Distance:1638.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"SFO",
    Distance:1638.43,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"SJD",
    Distance:3131.23,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"SJD",
    Distance:3131.23,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"SLC",
    Distance:1158.83,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYC",
    To:"VRA",
    Distance:4190.64,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YBR",
    Distance:1002.17,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YCD",
    Distance:738.566,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YCG",
    Distance:326.941,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YEG",
    Distance:246.003,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YEG",
    Distance:246.003,
    Airport:"Air North Charter - Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YEG",
    Distance:246.003,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYC",
    To:"YEG",
    Distance:246.003,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"YEG",
    Distance:246.003,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YHM",
    Distance:2696.51,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YHZ",
    Distance:3745.17,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YKA",
    Distance:452.609,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YKA",
    Distance:452.609,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YKF",
    Distance:2649.32,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YLW",
    Distance:399.824,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YLW",
    Distance:399.824,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YMM",
    Distance:642.545,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YMM",
    Distance:642.545,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YOW",
    Distance:2878.57,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YOW",
    Distance:2878.57,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YQF",
    Distance:119.11,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YQG",
    Distance:2541.06,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YQL",
    Distance:186.294,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YQQ",
    Distance:784.863,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YQR",
    Distance:661.696,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YQR",
    Distance:661.696,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YQU",
    Distance:556.175,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YQU",
    Distance:556.175,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YUL",
    Distance:3005.55,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YUL",
    Distance:3005.55,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YVR",
    Distance:686.382,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YVR",
    Distance:686.382,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYC",
    To:"YVR",
    Distance:686.382,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YWG",
    Distance:1191.45,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YWG",
    Distance:1191.45,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YXC",
    Distance:208.546,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YXE",
    Distance:518.393,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YXE",
    Distance:518.393,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YXH",
    Distance:262.894,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YXJ",
    Distance:720.808,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YXS",
    Distance:661.764,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YXU",
    Distance:2620.26,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YXX",
    Distance:638.507,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YYJ",
    Distance:726.956,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YYJ",
    Distance:726.956,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YYZ",
    Distance:2689.2,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYC",
    To:"YYZ",
    Distance:2689.2,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YYC",
    To:"YYZ",
    Distance:2689.2,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYC",
    To:"YZF",
    Distance:1262.19,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYD",
    To:"YVR",
    Distance:683.039,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYD",
    To:"YVR",
    Distance:683.039,
    Airport:"Hawkair"
}),
new Routes(
{
    From:"YYD",
    To:"YXT",
    Distance:98.0108,
    Airport:"Hawkair"
}),
new Routes(
{
    From:"YYF",
    To:"YVR",
    Distance:261.291,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYG",
    To:"YHZ",
    Distance:159.567,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYG",
    To:"YUL",
    Distance:826.468,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYG",
    To:"YYZ",
    Distance:1327.92,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYG",
    To:"YYZ",
    Distance:1327.92,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYH",
    To:"YCB",
    Distance:455.771,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YYH",
    To:"YHK",
    Distance:135.631,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YYH",
    To:"YHK",
    Distance:135.631,
    Airport:"First Air"
}),
new Routes(
{
    From:"YYH",
    To:"YZF",
    Distance:1218.25,
    Airport:"First Air"
}),
new Routes(
{
    From:"YYJ",
    To:"LAS",
    Distance:1551.73,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYJ",
    To:"SEA",
    Distance:156.942,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"YYJ",
    To:"SFO",
    Distance:1229.18,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYJ",
    To:"SFO",
    Distance:1229.18,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYJ",
    To:"YEG",
    Distance:861.291,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYJ",
    To:"YLW",
    Distance:327.572,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYJ",
    To:"YVR",
    Distance:63.3233,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYJ",
    To:"YVR",
    Distance:63.3233,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YYJ",
    To:"YVR",
    Distance:63.3233,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYJ",
    To:"YYC",
    Distance:726.956,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYJ",
    To:"YYC",
    Distance:726.956,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYJ",
    To:"YYZ",
    Distance:3370.25,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYJ",
    To:"YYZ",
    Distance:3370.25,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYQ",
    To:"YEK",
    Distance:261.864,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YYQ",
    To:"YEK",
    Distance:261.864,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YYQ",
    To:"YRT",
    Distance:464.956,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YYQ",
    To:"YRT",
    Distance:464.956,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YYQ",
    To:"YTH",
    Distance:398.489,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YYQ",
    To:"YTH",
    Distance:398.489,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YYQ",
    To:"YWG",
    Distance:1002.82,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YYQ",
    To:"YWG",
    Distance:1002.82,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YYR",
    To:"YDF",
    Distance:503.14,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYR",
    To:"YDP",
    Distance:367.979,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YYR",
    To:"YHZ",
    Distance:964.529,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYR",
    To:"YQX",
    Distance:635.608,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYR",
    To:"YRG",
    Distance:160.943,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YYR",
    To:"YWK",
    Distance:431.775,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYR",
    To:"YYT",
    Distance:833.785,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYT",
    To:"EWR",
    Distance:1866.04,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYT",
    To:"FSP",
    Distance:275.439,
    Airport:"Air Saint Pierre"
}),
new Routes(
{
    From:"YYT",
    To:"LHR",
    Distance:3715.64,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYT",
    To:"LHR",
    Distance:3715.64,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YYT",
    To:"MCO",
    Distance:3254.72,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYT",
    To:"MCO",
    Distance:3254.72,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYT",
    To:"YDF",
    Distance:385.379,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYT",
    To:"YHZ",
    Distance:880.447,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYT",
    To:"YHZ",
    Distance:880.447,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YYT",
    To:"YHZ",
    Distance:880.447,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"YYT",
    To:"YHZ",
    Distance:880.447,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYT",
    To:"YOW",
    Distance:1766.91,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYT",
    To:"YOW",
    Distance:1766.91,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYT",
    To:"YQX",
    Distance:198.864,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYT",
    To:"YUL",
    Distance:1617.77,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYT",
    To:"YYR",
    Distance:833.785,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYT",
    To:"YYZ",
    Distance:2123.46,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYT",
    To:"YYZ",
    Distance:2123.46,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYU",
    To:"YQT",
    Distance:514.268,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YYU",
    To:"YTS",
    Distance:123.065,
    Airport:"Bearskin Lake Air Service"
}),
new Routes(
{
    From:"YYY",
    To:"YBC",
    Distance:58.2543,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYY",
    To:"YBC",
    Distance:58.2543,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YYY",
    To:"YUL",
    Distance:545.226,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYY",
    To:"YWK",
    Distance:488.817,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YYY",
    To:"YZV",
    Distance:227.982,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YYZ",
    To:"ADD",
    Distance:11501.4,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"AMS",
    Distance:5989.66,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"AMS",
    Distance:5989.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYZ",
    To:"AMS",
    Distance:5989.66,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"ANU",
    Distance:3394.39,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"ANU",
    Distance:3394.39,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"ATH",
    Distance:8128.49,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"ATL",
    Distance:1191.08,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"ATL",
    Distance:1191.08,
    Airport:"Air France"
}),
new Routes(
{
    From:"YYZ",
    To:"ATL",
    Distance:1191.08,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYZ",
    To:"ATL",
    Distance:1191.08,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"ATL",
    Distance:1191.08,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"ATL",
    Distance:1191.08,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"AUA",
    Distance:3586.81,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"AUA",
    Distance:3586.81,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"AUH",
    Distance:11122.3,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"AUH",
    Distance:11122.3,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"YYZ",
    To:"AZS",
    Distance:2866.66,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"AZS",
    Distance:2866.66,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"BCN",
    Distance:6417.69,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"BCN",
    Distance:6417.69,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"BDA",
    Distance:1810.63,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"BDA",
    Distance:1810.63,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"BDL",
    Distance:598.569,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"BDL",
    Distance:598.569,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"BGI",
    Distance:3908.48,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"BGI",
    Distance:3908.48,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"BNA",
    Distance:1031.95,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"BOG",
    Distance:4367.2,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"BOG",
    Distance:4367.2,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"YYZ",
    To:"BOS",
    Distance:715.881,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"BOS",
    Distance:715.881,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"BRU",
    Distance:6044.4,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"YYZ",
    To:"BRU",
    Distance:6044.4,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"YYZ",
    To:"BWI",
    Distance:558.095,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"CAI",
    Distance:9228.24,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"YYZ",
    To:"CCC",
    Distance:2355.58,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"CCC",
    Distance:2355.58,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"CDG",
    Distance:6019.85,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"CDG",
    Distance:6019.85,
    Airport:"Air France"
}),
new Routes(
{
    From:"YYZ",
    To:"CDG",
    Distance:6019.85,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"CDG",
    Distance:6019.85,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"YYZ",
    To:"CDG",
    Distance:6019.85,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYZ",
    To:"CDG",
    Distance:6019.85,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YYZ",
    To:"CLE",
    Distance:310.642,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"CLE",
    Distance:310.642,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"CLT",
    Distance:947.756,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"CLT",
    Distance:947.756,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"CLT",
    Distance:947.756,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YYZ",
    To:"CMH",
    Distance:490.183,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"CMH",
    Distance:490.183,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"CMW",
    Distance:2480.32,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"YYZ",
    To:"CPH",
    Distance:6269.44,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"CPH",
    Distance:6269.44,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YYZ",
    To:"CPH",
    Distance:6269.44,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"YYZ",
    To:"CUN",
    Distance:2605.32,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"CUN",
    Distance:2605.32,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"CUN",
    Distance:2605.32,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"CVG",
    Distance:664.249,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"CVG",
    Distance:664.249,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYZ",
    To:"CVG",
    Distance:664.249,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"DCA",
    Distance:578.563,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"DCA",
    Distance:578.563,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"DCA",
    Distance:578.563,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YYZ",
    To:"DEN",
    Distance:2111.21,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"DEN",
    Distance:2111.21,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"DFW",
    Distance:1928.41,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"DFW",
    Distance:1928.41,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"DFW",
    Distance:1928.41,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YYZ",
    To:"DFW",
    Distance:1928.41,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"DFW",
    Distance:1928.41,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"DTW",
    Distance:343.975,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"DTW",
    Distance:343.975,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"YYZ",
    To:"DTW",
    Distance:343.975,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYZ",
    To:"DTW",
    Distance:343.975,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"DTW",
    Distance:343.975,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"DUB",
    Distance:5260.98,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"YYZ",
    To:"DUB",
    Distance:5260.98,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"DUB",
    Distance:5260.98,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"DXB",
    Distance:11082.2,
    Airport:"Emirates"
}),
new Routes(
{
    From:"YYZ",
    To:"EWR",
    Distance:558.965,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"EWR",
    Distance:558.965,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"FCO",
    Distance:7086.15,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"FCO",
    Distance:7086.15,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"FCO",
    Distance:7086.15,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"YYZ",
    To:"FCO",
    Distance:7086.15,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYZ",
    To:"FCO",
    Distance:7086.15,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YYZ",
    To:"FLL",
    Distance:1958.11,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"FLL",
    Distance:1958.11,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"FLL",
    Distance:1958.11,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYZ",
    To:"FLL",
    Distance:1958.11,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"FRA",
    Distance:6342.67,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"FRA",
    Distance:6342.67,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YYZ",
    To:"GCM",
    Distance:2716.21,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"GCM",
    Distance:2716.21,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"GEO",
    Distance:4630.3,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"GEO",
    Distance:4630.3,
    Airport:"Overland Airways"
}),
new Routes(
{
    From:"YYZ",
    To:"GGT",
    Distance:2262.83,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"GLA",
    Distance:5283.97,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"GND",
    Distance:3915.37,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"GND",
    Distance:3915.37,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"GRU",
    Distance:8193.53,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"GRU",
    Distance:8193.53,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"HAV",
    Distance:2314.48,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"HKG",
    Distance:12548.5,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"HKG",
    Distance:12548.5,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"YYZ",
    To:"HOG",
    Distance:2563.91,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"HOG",
    Distance:2563.91,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"IAD",
    Distance:556.659,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"IAD",
    Distance:556.659,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"IAH",
    Distance:2060.09,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"IAH",
    Distance:2060.09,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"ICN",
    Distance:10616.7,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"YYZ",
    To:"IND",
    Distance:706.7,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"ISB",
    Distance:10986.2,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"IST",
    Distance:8198.83,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"IST",
    Distance:8198.83,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"JED",
    Distance:10444.5,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"JFK",
    Distance:588.596,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"JFK",
    Distance:588.596,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"JFK",
    Distance:588.596,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYZ",
    To:"JFK",
    Distance:588.596,
    Airport:"Finnair"
}),
new Routes(
{
    From:"YYZ",
    To:"JFK",
    Distance:588.596,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YYZ",
    To:"JFK",
    Distance:588.596,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"KEF",
    Distance:4170.61,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"YYZ",
    To:"KHI",
    Distance:11670.1,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"KIN",
    Distance:2874.73,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"KIN",
    Distance:2874.73,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"KIN",
    Distance:2874.73,
    Airport:"Overland Airways"
}),
new Routes(
{
    From:"YYZ",
    To:"KIN",
    Distance:2874.73,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"LAS",
    Distance:3120.34,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"LAS",
    Distance:3120.34,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"LAS",
    Distance:3120.34,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYZ",
    To:"LAS",
    Distance:3120.34,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"LAX",
    Distance:3493.96,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"LAX",
    Distance:3493.96,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"LAX",
    Distance:3493.96,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YYZ",
    To:"LAX",
    Distance:3493.96,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"LAX",
    Distance:3493.96,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"LGA",
    Distance:573.149,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"LGA",
    Distance:573.149,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"LGA",
    Distance:573.149,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYZ",
    To:"LGA",
    Distance:573.149,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YYZ",
    To:"LGA",
    Distance:573.149,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"LGA",
    Distance:573.149,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"LGW",
    Distance:5739.19,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"LHE",
    Distance:11246.4,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"LHR",
    Distance:5706.77,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"LHR",
    Distance:5706.77,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"LHR",
    Distance:5706.77,
    Airport:"British Airways"
}),
new Routes(
{
    From:"YYZ",
    To:"LHR",
    Distance:5706.77,
    Airport:"Finnair"
}),
new Routes(
{
    From:"YYZ",
    To:"LHR",
    Distance:5706.77,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"LHR",
    Distance:5706.77,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YYZ",
    To:"LIM",
    Distance:6198.72,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"LIR",
    Distance:3722.69,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"LIR",
    Distance:3722.69,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"LIS",
    Distance:5740.46,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"LIS",
    Distance:5740.46,
    Airport:"SATA International"
}),
new Routes(
{
    From:"YYZ",
    To:"LIS",
    Distance:5740.46,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"YYZ",
    To:"MAN",
    Distance:5511.38,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"MBJ",
    Distance:2803.78,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"MBJ",
    Distance:2803.78,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"MBJ",
    Distance:2803.78,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"MCI",
    Distance:1345.02,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"MCO",
    Distance:1702.08,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"MCO",
    Distance:1702.08,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"MCO",
    Distance:1702.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"MCO",
    Distance:1702.08,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYZ",
    To:"MCO",
    Distance:1702.08,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"MDT",
    Distance:454.137,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"MEX",
    Distance:3246.67,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"MEX",
    Distance:3246.67,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"YYZ",
    To:"MIA",
    Distance:1989.5,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"MIA",
    Distance:1989.5,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"MIA",
    Distance:1989.5,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YYZ",
    To:"MIA",
    Distance:1989.5,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"MKE",
    Distance:673.411,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"MSP",
    Distance:1088.94,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"MSP",
    Distance:1088.94,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"YYZ",
    To:"MSP",
    Distance:1088.94,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"MSP",
    Distance:1088.94,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"MSY",
    Distance:1788.12,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"MSY",
    Distance:1788.12,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"MUC",
    Distance:6640.95,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"MUC",
    Distance:6640.95,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YYZ",
    To:"MYR",
    Distance:1113.33,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"NAS",
    Distance:2081.78,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"NAS",
    Distance:2081.78,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"NRT",
    Distance:10299.6,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"NRT",
    Distance:10299.6,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"YYZ",
    To:"OPO",
    Distance:5642.23,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"OPO",
    Distance:5642.23,
    Airport:"SATA International"
}),
new Routes(
{
    From:"YYZ",
    To:"OPO",
    Distance:5642.23,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"YYZ",
    To:"ORD",
    Distance:700.36,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"ORD",
    Distance:700.36,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"ORD",
    Distance:700.36,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"YYZ",
    To:"ORD",
    Distance:700.36,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YYZ",
    To:"ORD",
    Distance:700.36,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"ORD",
    Distance:700.36,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"PDL",
    Distance:4513.02,
    Airport:"SATA International"
}),
new Routes(
{
    From:"YYZ",
    To:"PDL",
    Distance:4513.02,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"YYZ",
    To:"PEK",
    Distance:10560.8,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"PEK",
    Distance:10560.8,
    Airport:"Air China"
}),
new Routes(
{
    From:"YYZ",
    To:"PEK",
    Distance:10560.8,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"PHL",
    Distance:557.976,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"PHL",
    Distance:557.976,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"PHL",
    Distance:557.976,
    Airport:"US Airways"
}),
new Routes(
{
    From:"YYZ",
    To:"PHL",
    Distance:557.976,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"PHX",
    Distance:3013.39,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"PIT",
    Distance:357.707,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"PIT",
    Distance:357.707,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"PLS",
    Distance:2528.51,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"PLS",
    Distance:2528.51,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"POP",
    Distance:2790.16,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"POP",
    Distance:2790.16,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"POS",
    Distance:4078.85,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"POS",
    Distance:4078.85,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"PTY",
    Distance:3848.07,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"PUJ",
    Distance:2984.31,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"PUJ",
    Distance:2984.31,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"PUJ",
    Distance:2984.31,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"PVG",
    Distance:11414.4,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"PVG",
    Distance:11414.4,
    Airport:"Air China"
}),
new Routes(
{
    From:"YYZ",
    To:"RDU",
    Distance:870.247,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"ROC",
    Distance:169.949,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"RSW",
    Distance:1915.59,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"RSW",
    Distance:1915.59,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"SAL",
    Distance:3480.39,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"YYZ",
    To:"SAN",
    Distance:3465.02,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"SCL",
    Distance:8616.71,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"SEA",
    Distance:3306.67,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"SFO",
    Distance:3627.29,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"SFO",
    Distance:3627.29,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"SJO",
    Distance:3771.45,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"SJU",
    Distance:3082.38,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"SNU",
    Distance:2355.84,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"SNU",
    Distance:2355.84,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"SNU",
    Distance:2355.84,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"YYZ",
    To:"SNU",
    Distance:2355.84,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"STL",
    Distance:1051.03,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"STL",
    Distance:1051.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"SVO",
    Distance:7466.72,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"SXM",
    Distance:3243.71,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"SYR",
    Distance:291.604,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"TLV",
    Distance:9295.12,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"TLV",
    Distance:9295.12,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"TPA",
    Distance:1765.14,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"TPA",
    Distance:1765.14,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"TPE",
    Distance:12078.8,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"YYZ",
    To:"UVF",
    Distance:3775.22,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"UVF",
    Distance:3775.22,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"VCE",
    Distance:6853.57,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"VIE",
    Distance:6948.28,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"VIE",
    Distance:6948.28,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"VIE",
    Distance:6948.28,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YYZ",
    To:"VKO",
    Distance:7490.34,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"VRA",
    Distance:2301.33,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"VRA",
    Distance:2301.33,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"VRA",
    Distance:2301.33,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"WAW",
    Distance:6934.67,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"WAW",
    Distance:6934.67,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"YAM",
    Distance:494.018,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YDF",
    Distance:1803.65,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YDF",
    Distance:1803.65,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YEG",
    Distance:2689.09,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YEG",
    Distance:2689.09,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YFC",
    Distance:1060.57,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YGK",
    Distance:250.362,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YHZ",
    Distance:1288.27,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YHZ",
    Distance:1288.27,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"YHZ",
    Distance:1288.27,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YLW",
    Distance:3065.53,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YMM",
    Distance:2637.16,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YMM",
    Distance:2637.16,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YOW",
    Distance:363.499,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YOW",
    Distance:363.499,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YQB",
    Distance:731.542,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YQB",
    Distance:731.542,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"YQB",
    Distance:731.542,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YQG",
    Distance:312.155,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YQM",
    Distance:1206.53,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YQM",
    Distance:1206.53,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YQR",
    Distance:2027.77,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YQR",
    Distance:2027.77,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"YQR",
    Distance:2027.77,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YQT",
    Distance:911.377,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YQT",
    Distance:911.377,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YQY",
    Distance:1562.27,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YSB",
    Distance:340.33,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YSJ",
    Distance:1103.52,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YTS",
    Distance:560.376,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YUL",
    Distance:507.19,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YUL",
    Distance:507.19,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"YYZ",
    To:"YUL",
    Distance:507.19,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"YUL",
    Distance:507.19,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"YYZ",
    To:"YUL",
    Distance:507.19,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"YYZ",
    To:"YUL",
    Distance:507.19,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"YUL",
    Distance:507.19,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YVR",
    Distance:3345.55,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YVR",
    Distance:3345.55,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"YVR",
    Distance:3345.55,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YWG",
    Distance:1504.02,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YWG",
    Distance:1504.02,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"YYZ",
    To:"YWG",
    Distance:1504.02,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YXE",
    Distance:2209.89,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YXE",
    Distance:2209.89,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YXU",
    Distance:142.28,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YYB",
    Distance:299.158,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YYC",
    Distance:2689.2,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YYC",
    Distance:2689.2,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YYG",
    Distance:1327.92,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YYG",
    Distance:1327.92,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YYJ",
    Distance:3370.25,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YYJ",
    Distance:3370.25,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YYT",
    Distance:2123.46,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"YYT",
    Distance:2123.46,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YYZ",
    To:"YZR",
    Distance:229.33,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"ZRH",
    Distance:6490.66,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YYZ",
    To:"ZRH",
    Distance:6490.66,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"YZF",
    To:"YCB",
    Distance:849.976,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YZF",
    To:"YCB",
    Distance:849.976,
    Airport:"First Air"
}),
new Routes(
{
    From:"YZF",
    To:"YCO",
    Distance:596.223,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YZF",
    To:"YCO",
    Distance:596.223,
    Airport:"First Air"
}),
new Routes(
{
    From:"YZF",
    To:"YEG",
    Distance:1019.02,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YZF",
    To:"YEG",
    Distance:1019.02,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YZF",
    To:"YEG",
    Distance:1019.02,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YZF",
    To:"YEG",
    Distance:1019.02,
    Airport:"First Air"
}),
new Routes(
{
    From:"YZF",
    To:"YEG",
    Distance:1019.02,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"YZF",
    To:"YEG",
    Distance:1019.02,
    Airport:"WestJet"
}),
new Routes(
{
    From:"YZF",
    To:"YFS",
    Distance:361.832,
    Airport:"Air Tindi"
}),
new Routes(
{
    From:"YZF",
    To:"YFS",
    Distance:361.832,
    Airport:"First Air"
}),
new Routes(
{
    From:"YZF",
    To:"YHK",
    Distance:1089.48,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YZF",
    To:"YHK",
    Distance:1089.48,
    Airport:"First Air"
}),
new Routes(
{
    From:"YZF",
    To:"YHY",
    Distance:193.886,
    Airport:"First Air"
}),
new Routes(
{
    From:"YZF",
    To:"YLE",
    Distance:160.832,
    Airport:"Air Tindi"
}),
new Routes(
{
    From:"YZF",
    To:"YOW",
    Distance:3099.71,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YZF",
    To:"YOW",
    Distance:3099.71,
    Airport:"Air North Charter - Canada"
}),
new Routes(
{
    From:"YZF",
    To:"YRA",
    Distance:233.126,
    Airport:"Air Tindi"
}),
new Routes(
{
    From:"YZF",
    To:"YRT",
    Distance:1135.9,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YZF",
    To:"YRT",
    Distance:1135.9,
    Airport:"First Air"
}),
new Routes(
{
    From:"YZF",
    To:"YSG",
    Distance:193.386,
    Airport:"Air Tindi"
}),
new Routes(
{
    From:"YZF",
    To:"YSM",
    Distance:302.177,
    Airport:"Northwestern Air"
}),
new Routes(
{
    From:"YZF",
    To:"YVQ",
    Distance:679.926,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YZF",
    To:"YVQ",
    Distance:679.926,
    Airport:"First Air"
}),
new Routes(
{
    From:"YZF",
    To:"YWJ",
    Distance:616.419,
    Airport:"Hello"
}),
new Routes(
{
    From:"YZF",
    To:"YXY",
    Distance:1103.7,
    Airport:"Air North Charter - Canada"
}),
new Routes(
{
    From:"YZF",
    To:"YYC",
    Distance:1262.19,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YZF",
    To:"YYH",
    Distance:1218.25,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YZP",
    To:"YVR",
    Distance:750.808,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YZR",
    To:"YYZ",
    Distance:229.33,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YZS",
    To:"YCS",
    Distance:374.071,
    Airport:"First Air"
}),
new Routes(
{
    From:"YZS",
    To:"YRT",
    Distance:460.34,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YZS",
    To:"YRT",
    Distance:460.34,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YZS",
    To:"YTE",
    Distance:330.403,
    Airport:"First Air"
}),
new Routes(
{
    From:"YZS",
    To:"YUT",
    Distance:290.896,
    Airport:"Abu Dhabi Amiri Flight"
}),
new Routes(
{
    From:"YZS",
    To:"YUT",
    Distance:290.896,
    Airport:"Canadian North"
}),
new Routes(
{
    From:"YZT",
    To:"YVR",
    Distance:341.857,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YZT",
    To:"ZEL",
    Distance:169.297,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"YZV",
    To:"YGV",
    Distance:188.81,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YZV",
    To:"YNA",
    Distance:318.545,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YZV",
    To:"YNA",
    Distance:318.545,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"YZV",
    To:"YPN",
    Distance:147.618,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YZV",
    To:"YQB",
    Distance:536.746,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YZV",
    To:"YQB",
    Distance:536.746,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YZV",
    To:"YUL",
    Distance:767.727,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YZV",
    To:"YWK",
    Distance:302.91,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"YZV",
    To:"YWK",
    Distance:302.91,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YZV",
    To:"YYY",
    Distance:227.982,
    Airport:"Arik Niger"
}),
new Routes(
{
    From:"YZY",
    To:"LHW",
    Distance:8924.32,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"YZY",
    To:"XIY",
    Distance:8887.21,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"YZY",
    To:"XIY",
    Distance:8887.21,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"YZZ",
    To:"YVR",
    Distance:405.899,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"ZAD",
    To:"BLL",
    Distance:1366,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAD",
    To:"BVA",
    Distance:1167.56,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAD",
    To:"CGN",
    Distance:970.706,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"ZAD",
    To:"CRL",
    Distance:1081.49,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAD",
    To:"DUB",
    Distance:1881.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAD",
    To:"DUS",
    Distance:1023.23,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"ZAD",
    To:"FDH",
    Distance:600.471,
    Airport:"Intersky"
}),
new Routes(
{
    From:"ZAD",
    To:"FKB",
    Distance:760.771,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAD",
    To:"FRA",
    Distance:835.082,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAD",
    To:"FRA",
    Distance:835.082,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ZAD",
    To:"GSE",
    Distance:1538.52,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAD",
    To:"HAU",
    Distance:1827.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAD",
    To:"HHN",
    Distance:891.787,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAD",
    To:"MAN",
    Distance:1643.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAD",
    To:"MRS",
    Distance:816.532,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAD",
    To:"MUC",
    Distance:545.628,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAD",
    To:"MUC",
    Distance:545.628,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ZAD",
    To:"NRN",
    Distance:1078.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAD",
    To:"NYO",
    Distance:1635.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAD",
    To:"PUY",
    Distance:142.782,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAD",
    To:"RYG",
    Distance:1725.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAD",
    To:"STN",
    Distance:1413.84,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAD",
    To:"STR",
    Distance:692.467,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"ZAD",
    To:"TXL",
    Distance:951.894,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"ZAD",
    To:"WAW",
    Distance:987.542,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"ZAD",
    To:"ZAG",
    Distance:190.446,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"AMS",
    Distance:1098.85,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"BCN",
    Distance:1229.44,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"BCN",
    Distance:1229.44,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"BCN",
    Distance:1229.44,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"BLQ",
    Distance:398.168,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"BLQ",
    Distance:398.168,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"ZAG",
    To:"BRU",
    Distance:1029.02,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"BRU",
    Distance:1029.02,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"BUD",
    Distance:307.825,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ZAG",
    To:"BWK",
    Distance:277.488,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"CDG",
    Distance:1079.11,
    Airport:"Air France"
}),
new Routes(
{
    From:"ZAG",
    To:"CDG",
    Distance:1079.11,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"CGN",
    Distance:870.913,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"ZAG",
    To:"CPH",
    Distance:1123.72,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"CPH",
    Distance:1123.72,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ZAG",
    To:"CPH",
    Distance:1123.72,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ZAG",
    To:"DBV",
    Distance:394.863,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"FRA",
    Distance:735.433,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"FRA",
    Distance:735.433,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ZAG",
    To:"IST",
    Distance:1156.86,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"IST",
    Distance:1156.86,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"LGW",
    Distance:1337.49,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ZAG",
    To:"LHR",
    Distance:1368.13,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"LHR",
    Distance:1368.13,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ZAG",
    To:"LHR",
    Distance:1368.13,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"MUC",
    Distance:435.274,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"MUC",
    Distance:435.274,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ZAG",
    To:"OSI",
    Distance:215.52,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"PRN",
    Distance:530.156,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"RJK",
    Distance:130.654,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"SJJ",
    Distance:278.168,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"SKP",
    Distance:612.112,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"SPU",
    Distance:245.742,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"STR",
    Distance:611.845,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"ZAG",
    To:"SVO",
    Distance:1868.2,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"TXL",
    Distance:784.353,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"TXL",
    Distance:784.353,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ZAG",
    To:"VIE",
    Distance:265.97,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"VIE",
    Distance:265.97,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"ZAD",
    Distance:190.446,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"ZRH",
    Distance:605.23,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZAG",
    To:"ZRH",
    Distance:605.23,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZAH",
    To:"DXB",
    Distance:720.897,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"ZAH",
    To:"GBT",
    Distance:1023.88,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"ZAH",
    To:"GBT",
    Distance:1023.88,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"ZAH",
    To:"KER",
    Distance:391.526,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"ZAH",
    To:"MHD",
    Distance:760.673,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"ZAH",
    To:"MHD",
    Distance:760.673,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"ZAH",
    To:"MHD",
    Distance:760.673,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"ZAH",
    To:"SYZ",
    Distance:804.654,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"ZAH",
    To:"THR",
    Distance:1132.64,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"ZAH",
    To:"THR",
    Distance:1132.64,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"ZAH",
    To:"ZBR",
    Distance:451.345,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"ZAL",
    To:"CCP",
    Distance:319.948,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"ZAL",
    To:"SCL",
    Distance:725.397,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"ZAM",
    To:"CEB",
    Distance:431.529,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"ZAM",
    To:"DVO",
    Distance:396.411,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"ZAM",
    To:"JOL",
    Distance:150.844,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"ZAM",
    To:"MNL",
    Distance:851.157,
    Airport:"Air Philippines"
}),
new Routes(
{
    From:"ZAM",
    To:"MNL",
    Distance:851.157,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"ZAM",
    To:"MNL",
    Distance:851.157,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"ZAT",
    To:"CKG",
    Distance:387.754,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"ZAT",
    To:"KMG",
    Distance:278.387,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"ZAT",
    To:"KMG",
    Distance:278.387,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZAZ",
    To:"ACE",
    Distance:1812.56,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAZ",
    To:"BGY",
    Distance:971.282,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAZ",
    To:"BVA",
    Distance:899.938,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAZ",
    To:"CLJ",
    Distance:2041.29,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"ZAZ",
    To:"CRL",
    Distance:1064.97,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZAZ",
    To:"OTP",
    Distance:2216.21,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"ZAZ",
    To:"PMI",
    Distance:395.443,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"ZAZ",
    To:"STN",
    Distance:1140.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZBF",
    To:"YUL",
    Distance:656.939,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ZBR",
    To:"BND",
    Distance:445.159,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"ZBR",
    To:"MCT",
    Distance:295.549,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"ZBR",
    To:"MHD",
    Distance:1201.93,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"ZBR",
    To:"THR",
    Distance:1430.85,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"ZBR",
    To:"THR",
    Distance:1430.85,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"ZBR",
    To:"ZAH",
    Distance:451.345,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"ZCL",
    To:"DFW",
    Distance:1242.19,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ZCL",
    To:"DFW",
    Distance:1242.19,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ZCL",
    To:"LAX",
    Distance:1963.42,
    Airport:"Volaris"
}),
new Routes(
{
    From:"ZCL",
    To:"MDW",
    Distance:2517.38,
    Airport:"Volaris"
}),
new Routes(
{
    From:"ZCL",
    To:"MEX",
    Distance:537.139,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ZCL",
    To:"MEX",
    Distance:537.139,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"ZCL",
    To:"TIJ",
    Distance:1765.19,
    Airport:"Volaris"
}),
new Routes(
{
    From:"ZCO",
    To:"CCP",
    Distance:224.88,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"ZCO",
    To:"SCL",
    Distance:620.23,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"ZCO",
    To:"SCL",
    Distance:620.23,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"ZDY",
    To:"AZI",
    Distance:214.932,
    Airport:"VRG Linhas Aereas"
}),
new Routes(
{
    From:"ZEL",
    To:"YBL",
    Distance:311.975,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"ZEL",
    To:"YZT",
    Distance:169.297,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"ZFN",
    To:"YVQ",
    Distance:145.221,
    Airport:"Hello"
}),
new Routes(
{
    From:"ZFN",
    To:"YWJ",
    Distance:122.572,
    Airport:"Hello"
}),
new Routes(
{
    From:"ZGU",
    To:"MTV",
    Distance:62.8554,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"ZGU",
    To:"SON",
    Distance:148.444,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"ZGU",
    To:"TOH",
    Distance:142.478,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"ZHA",
    To:"CAN",
    Distance:387.509,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZHA",
    To:"CKG",
    Distance:1016.41,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"ZHA",
    To:"CSX",
    Distance:827.579,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"ZHA",
    To:"CTU",
    Distance:1222.2,
    Airport:"Air China"
}),
new Routes(
{
    From:"ZHA",
    To:"CTU",
    Distance:1222.2,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"ZHA",
    To:"HAK",
    Distance:142.666,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"ZHA",
    To:"HKG",
    Distance:386.916,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"ZHA",
    To:"KMG",
    Distance:884.592,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"ZHA",
    To:"NAY",
    Distance:2142.56,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"ZHA",
    To:"NAY",
    Distance:2142.56,
    Airport:"China United"
}),
new Routes(
{
    From:"ZHA",
    To:"PEK",
    Distance:2179.16,
    Airport:"Air China"
}),
new Routes(
{
    From:"ZHA",
    To:"PEK",
    Distance:2179.16,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"ZHA",
    To:"PVG",
    Distance:1586.6,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"ZHA",
    To:"PVG",
    Distance:1586.6,
    Airport:"China SSS"
}),
new Routes(
{
    From:"ZHA",
    To:"PVG",
    Distance:1586.6,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"ZHA",
    To:"SWA",
    Distance:694.478,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"ZHA",
    To:"SYX",
    Distance:338.53,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZHA",
    To:"SZX",
    Distance:389.779,
    Airport:"Air China"
}),
new Routes(
{
    From:"ZHA",
    To:"SZX",
    Distance:389.779,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"ZHY",
    To:"PEK",
    Distance:1027.81,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"ZHY",
    To:"XNN",
    Distance:299.569,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"ZIG",
    To:"CSK",
    Distance:52.9416,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"ZIG",
    To:"DKR",
    Distance:275.734,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"ZIH",
    To:"IAH",
    Distance:1510.31,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ZIH",
    To:"LAX",
    Distance:2478.75,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ZIH",
    To:"LAX",
    Distance:2478.75,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ZIH",
    To:"MEX",
    Distance:324.086,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ZIH",
    To:"MEX",
    Distance:324.086,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"ZIH",
    To:"MEX",
    Distance:324.086,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"ZIH",
    To:"PHX",
    Distance:2051.29,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ZIH",
    To:"PHX",
    Distance:2051.29,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ZIH",
    To:"TLC",
    Distance:277.779,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"ZKG",
    To:"YNA",
    Distance:37.2604,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"ZLO",
    To:"IAH",
    Distance:1522.21,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ZLO",
    To:"LAX",
    Distance:2141.27,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ZLO",
    To:"LAX",
    Distance:2141.27,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ZLO",
    To:"MEX",
    Distance:576.709,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ZLO",
    To:"MEX",
    Distance:576.709,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"ZLO",
    To:"MEX",
    Distance:576.709,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"ZLO",
    To:"TIJ",
    Distance:1936.1,
    Airport:"Volaris"
}),
new Routes(
{
    From:"ZLT",
    To:"YIF",
    Distance:47.8165,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"ZLT",
    To:"ZTB",
    Distance:33.5601,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"ZMT",
    To:"YVR",
    Distance:817.457,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"ZNE",
    To:"PER",
    Distance:1019.92,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ZNE",
    To:"PER",
    Distance:1019.92,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ZNZ",
    To:"ADD",
    Distance:1690.81,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ZNZ",
    To:"DAR",
    Distance:72.9949,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"ZNZ",
    To:"DAR",
    Distance:72.9949,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"ZNZ",
    To:"DAR",
    Distance:72.9949,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"ZNZ",
    To:"FRA",
    Distance:6917.73,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"ZNZ",
    To:"JNB",
    Distance:2502.34,
    Airport:"Mango"
}),
new Routes(
{
    From:"ZNZ",
    To:"JRO",
    Distance:391.39,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ZNZ",
    To:"JRO",
    Distance:391.39,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ZNZ",
    To:"MBA",
    Distance:246.621,
    Airport:"Fly540"
}),
new Routes(
{
    From:"ZNZ",
    To:"NBO",
    Distance:601.789,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"ZNZ",
    To:"NBO",
    Distance:601.789,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"ZOS",
    To:"ZAL",
    Distance:106.908,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"ZQN",
    To:"AKL",
    Distance:1024.84,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"ZQN",
    To:"AKL",
    Distance:1024.84,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"ZQN",
    To:"CHC",
    Distance:346.741,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"ZQN",
    To:"SYD",
    Distance:1938.92,
    Airport:"Emirates"
}),
new Routes(
{
    From:"ZQN",
    To:"SYD",
    Distance:1938.92,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"ZQN",
    To:"SYD",
    Distance:1938.92,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ZQN",
    To:"WLG",
    Distance:640.528,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"ZQW",
    To:"AYT",
    Distance:2326.9,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"ZQW",
    To:"FUE",
    Distance:2931.63,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"ZQW",
    To:"LPA",
    Distance:3061.03,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"ZQW",
    To:"PMI",
    Distance:1135.53,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"ZQW",
    To:"TFS",
    Distance:3115.42,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"ZRH",
    To:"ACE",
    Distance:2806.4,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"ACE",
    Distance:2806.4,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"ADB",
    Distance:1819.93,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ZRH",
    To:"AGP",
    Distance:1607.92,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"ALC",
    Distance:1260.39,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"AMM",
    Distance:2905.81,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"ZRH",
    To:"AMS",
    Distance:602.832,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"AMS",
    Distance:602.832,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"ARN",
    Distance:1486.43,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ZRH",
    To:"ARN",
    Distance:1486.43,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"ATH",
    Distance:1639.49,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"ATL",
    Distance:7531.51,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"AYT",
    Distance:2165.57,
    Airport:"Belair Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"AYT",
    Distance:2165.57,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ZRH",
    To:"AYT",
    Distance:2165.57,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"BCN",
    Distance:856.533,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"BCN",
    Distance:856.533,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"BCN",
    Distance:856.533,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"BDS",
    Distance:1064.74,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"BDS",
    Distance:1064.74,
    Airport:"Helvetic Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"BDS",
    Distance:1064.74,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"ZRH",
    To:"BEG",
    Distance:951.513,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"BEG",
    Distance:951.513,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"BHX",
    Distance:920.71,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"BKK",
    Distance:9054.16,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"BKK",
    Distance:9054.16,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"ZRH",
    To:"BLL",
    Distance:921.136,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"BNX",
    Distance:728.854,
    Airport:"Air Bosna"
}),
new Routes(
{
    From:"ZRH",
    To:"BOD",
    Distance:770.969,
    Airport:"Helvetic Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"BOM",
    Distance:6539.65,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"ZRH",
    To:"BOM",
    Distance:6539.65,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"BOS",
    Distance:6009.99,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"BOS",
    Distance:6009.99,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"BRE",
    Distance:621.005,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"BRS",
    Distance:922.758,
    Airport:"Helvetic Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"BRU",
    Distance:482.865,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"BRU",
    Distance:482.865,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"BUD",
    Distance:804.413,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"CAI",
    Distance:2744.74,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ZRH",
    To:"CAI",
    Distance:2744.74,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"CDG",
    Distance:476.307,
    Airport:"Air France"
}),
new Routes(
{
    From:"ZRH",
    To:"CDG",
    Distance:476.307,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"CGN",
    Distance:391.756,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"ZRH",
    To:"CGN",
    Distance:391.756,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"CMN",
    Distance:2070.94,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"ZRH",
    To:"CPH",
    Distance:949.617,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ZRH",
    To:"CPH",
    Distance:949.617,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"CTA",
    Distance:1232.48,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"CTA",
    Distance:1232.48,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"ZRH",
    To:"CTA",
    Distance:1232.48,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"DBV",
    Distance:937.471,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"DBV",
    Distance:937.471,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"DEL",
    Distance:6147.84,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"ZRH",
    To:"DEL",
    Distance:6147.84,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"DJE",
    Distance:1522.55,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"ZRH",
    To:"DME",
    Distance:2197.22,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"DOH",
    Distance:4492.83,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"DRS",
    Distance:556.07,
    Airport:"Intersky"
}),
new Routes(
{
    From:"ZRH",
    To:"DUB",
    Distance:1237.32,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ZRH",
    To:"DUB",
    Distance:1237.32,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"DUS",
    Distance:444.4,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"DUS",
    Distance:444.4,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ZRH",
    To:"DUS",
    Distance:444.4,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"DXB",
    Distance:4767.92,
    Airport:"Emirates"
}),
new Routes(
{
    From:"ZRH",
    To:"DXB",
    Distance:4767.92,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ZRH",
    To:"DXB",
    Distance:4767.92,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"EBA",
    Distance:539.627,
    Airport:"Intersky"
}),
new Routes(
{
    From:"ZRH",
    To:"EWR",
    Distance:6332.28,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"EWR",
    Distance:6332.28,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"FCO",
    Distance:693.998,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ZRH",
    To:"FCO",
    Distance:693.998,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"FCO",
    Distance:693.998,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"FLR",
    Distance:455.773,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"ZRH",
    To:"FLR",
    Distance:455.773,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"FMO",
    Distance:522.953,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"FNC",
    Distance:2688.09,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"FNC",
    Distance:2688.09,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"FRA",
    Distance:284.848,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"FRA",
    Distance:284.848,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ZRH",
    To:"FRA",
    Distance:284.848,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"FUE",
    Distance:2865.44,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"FUE",
    Distance:2865.44,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"GDN",
    Distance:1034.46,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"ZRH",
    To:"GRU",
    Distance:9608.47,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"GRZ",
    Distance:522.788,
    Airport:"Intersky"
}),
new Routes(
{
    From:"ZRH",
    To:"GVA",
    Distance:230.285,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"ZRH",
    To:"GVA",
    Distance:230.285,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"ZRH",
    To:"GVA",
    Distance:230.285,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"GWT",
    Distance:828.365,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"HAJ",
    Distance:561.457,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ZRH",
    To:"HAJ",
    Distance:561.457,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"HAM",
    Distance:693.051,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"ZRH",
    To:"HAM",
    Distance:693.051,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ZRH",
    To:"HAM",
    Distance:693.051,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"HAV",
    Distance:8216.88,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"HEL",
    Distance:1778.19,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"HEL",
    Distance:1778.19,
    Airport:"Finnair"
}),
new Routes(
{
    From:"ZRH",
    To:"HER",
    Distance:1926.64,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"HER",
    Distance:1926.64,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"HKG",
    Distance:9279.75,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"HRG",
    Distance:3146.39,
    Airport:"Belair Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"HRG",
    Distance:3146.39,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"IAD",
    Distance:6673.17,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"IAD",
    Distance:6673.17,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"IBZ",
    Distance:1117.54,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"ICN",
    Distance:8743.08,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"ZRH",
    To:"IST",
    Distance:1761.94,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"IST",
    Distance:1761.94,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"IST",
    Distance:1761.94,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"IST",
    Distance:1761.94,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"JER",
    Distance:816.758,
    Airport:"Skynet Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"JFK",
    Distance:6309.47,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"JFK",
    Distance:6309.47,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"JFK",
    Distance:6309.47,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"JFK",
    Distance:6309.47,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"JNB",
    Distance:8418.99,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"JNB",
    Distance:8418.99,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"KBP",
    Distance:1657.7,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"KBP",
    Distance:1657.7,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"KEF",
    Distance:2630.71,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"ZRH",
    To:"KRK",
    Distance:872.13,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"ZRH",
    To:"LAS",
    Distance:9171.92,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"LAX",
    Distance:9534.1,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"LAX",
    Distance:9534.1,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"LCA",
    Distance:2505.17,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"LCA",
    Distance:2505.17,
    Airport:"Helvetic Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"LCA",
    Distance:2505.17,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"LCY",
    Distance:759.699,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"LCY",
    Distance:759.699,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"LCY",
    Distance:759.699,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"LED",
    Distance:1965.57,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"LEJ",
    Distance:515.503,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"ZRH",
    To:"LGW",
    Distance:753.703,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ZRH",
    To:"LHR",
    Distance:788.427,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"LHR",
    Distance:788.427,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"LHR",
    Distance:788.427,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"LHR",
    Distance:788.427,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"LIS",
    Distance:1723.49,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"LIS",
    Distance:1723.49,
    Airport:"Finnair"
}),
new Routes(
{
    From:"ZRH",
    To:"LIS",
    Distance:1723.49,
    Airport:"SATA International"
}),
new Routes(
{
    From:"ZRH",
    To:"LIS",
    Distance:1723.49,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"LIS",
    Distance:1723.49,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"ZRH",
    To:"LIS",
    Distance:1723.49,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"LJU",
    Distance:469.943,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"LJU",
    Distance:469.943,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"LPA",
    Distance:3001.18,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"LPA",
    Distance:3001.18,
    Airport:"Helvetic Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"LPA",
    Distance:3001.18,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"LTN",
    Distance:806.7,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ZRH",
    To:"LUG",
    Distance:164.713,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"LUX",
    Distance:295.6,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"LYS",
    Distance:327.34,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"MAD",
    Distance:1238.8,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"MAD",
    Distance:1238.8,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"MAD",
    Distance:1238.8,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"MAN",
    Distance:1006.64,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"MCT",
    Distance:5108.93,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"ZRH",
    To:"MCT",
    Distance:5108.93,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"MIA",
    Distance:7845.02,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"MIA",
    Distance:7845.02,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"MLA",
    Distance:1380.38,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"ZRH",
    To:"MLA",
    Distance:1380.38,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"MUC",
    Distance:260.705,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ZRH",
    To:"MUC",
    Distance:260.705,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"MXP",
    Distance:204.403,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"NAP",
    Distance:862.447,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"NAP",
    Distance:862.447,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"ZRH",
    To:"NBE",
    Distance:1275.94,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"ZRH",
    To:"NBO",
    Distance:6083.74,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ZRH",
    To:"NBO",
    Distance:6083.74,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"NBO",
    Distance:6083.74,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"NCE",
    Distance:435.766,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"NRT",
    Distance:9594.62,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"NRT",
    Distance:9594.62,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"NUE",
    Distance:292.522,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ZRH",
    To:"NUE",
    Distance:292.522,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"OLB",
    Distance:734.168,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"OLB",
    Distance:734.168,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"ZRH",
    To:"OPO",
    Distance:1529.85,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"OPO",
    Distance:1529.85,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"ZRH",
    To:"ORD",
    Distance:7130.72,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"ORD",
    Distance:7130.72,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"OSL",
    Distance:1425.02,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ZRH",
    To:"OSL",
    Distance:1425.02,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"OTP",
    Distance:1389.75,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"PEK",
    Distance:7970.72,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"PHL",
    Distance:6459.92,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"PHL",
    Distance:6459.92,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"PMI",
    Distance:996.415,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"PMI",
    Distance:996.415,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"PRG",
    Distance:510.65,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"PRG",
    Distance:510.65,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"PRG",
    Distance:510.65,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"ZRH",
    To:"PRN",
    Distance:1120.23,
    Airport:"Belair Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"PRN",
    Distance:1120.23,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"PUJ",
    Distance:7525.91,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"PVG",
    Distance:9031.31,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"RAK",
    Distance:2255.44,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"RIX",
    Distance:1480.55,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"ZRH",
    To:"RMF",
    Distance:3337.44,
    Airport:"Belair Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"RMF",
    Distance:3337.44,
    Airport:"Helvetic Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"RMF",
    Distance:3337.44,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"SAW",
    Distance:1802.07,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"SFO",
    Distance:9375.71,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"SFO",
    Distance:9375.71,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"SIN",
    Distance:10305.6,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"SIN",
    Distance:10305.6,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"SIN",
    Distance:10305.6,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ZRH",
    To:"SKP",
    Distance:1198.3,
    Airport:"Belair Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"SKP",
    Distance:1198.3,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"SOF",
    Distance:1278.7,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"ZRH",
    To:"SPU",
    Distance:744.57,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"SPU",
    Distance:744.57,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"STR",
    Distance:145.11,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ZRH",
    To:"STR",
    Distance:145.11,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"SUF",
    Distance:1136.65,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"SUF",
    Distance:1136.65,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"ZRH",
    To:"SVO",
    Distance:2180.64,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"SZG",
    Distance:335.804,
    Airport:"Intersky"
}),
new Routes(
{
    From:"ZRH",
    To:"TFS",
    Distance:3062.62,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"TFS",
    Distance:3062.62,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"TGD",
    Distance:1014.74,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"TLV",
    Distance:2809.35,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"TLV",
    Distance:2809.35,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"TPA",
    Distance:7835.38,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"TRN",
    Distance:261.037,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"ZRH",
    To:"TUN",
    Distance:1188.19,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"ZRH",
    To:"TXL",
    Distance:659.678,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"TXL",
    Distance:659.678,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"TXL",
    Distance:659.678,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ZRH",
    To:"TXL",
    Distance:659.678,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"VCE",
    Distance:363.577,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"VIE",
    Distance:603.218,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZRH",
    To:"VIE",
    Distance:603.218,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"VIE",
    Distance:603.218,
    Airport:"Niki"
}),
new Routes(
{
    From:"ZRH",
    To:"VIE",
    Distance:603.218,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"ZRH",
    To:"VIE",
    Distance:603.218,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"VLC",
    Distance:1146.19,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"WAW",
    Distance:1031,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"WAW",
    Distance:1031,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"WRO",
    Distance:726.843,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"ZRH",
    To:"YUL",
    Distance:5995.7,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ZRH",
    To:"YUL",
    Distance:5995.7,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"YYZ",
    Distance:6490.66,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ZRH",
    To:"YYZ",
    Distance:6490.66,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZRH",
    To:"ZAG",
    Distance:605.23,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ZRH",
    To:"ZAG",
    Distance:605.23,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ZSA",
    To:"FLL",
    Distance:609.291,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ZSA",
    To:"NAS",
    Distance:316.735,
    Airport:"Aeroper"
}),
new Routes(
{
    From:"ZSA",
    To:"NAS",
    Distance:316.735,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"ZSA",
    To:"PLS",
    Distance:343.936,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ZSE",
    To:"MRU",
    Distance:254.797,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"ZSE",
    To:"MRU",
    Distance:254.797,
    Airport:"Air France"
}),
new Routes(
{
    From:"ZSE",
    To:"MRU",
    Distance:254.797,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"ZTB",
    To:"YHR",
    Distance:29.0109,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"ZTB",
    To:"ZLT",
    Distance:33.5601,
    Airport:"WebJet Linhas A"
}),
new Routes(
{
    From:"ZTH",
    To:"AMS",
    Distance:2045.77,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"ZTH",
    To:"ATH",
    Distance:269.494,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ZTH",
    To:"ATH",
    Distance:269.494,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ZTH",
    To:"BRU",
    Distance:1950.75,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"ZTH",
    To:"CRL",
    Distance:1919.68,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ZTH",
    To:"DUS",
    Distance:1868.99,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZTH",
    To:"EFL",
    Distance:53.0872,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"ZTH",
    To:"KIT",
    Distance:250.62,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"ZTH",
    To:"LBA",
    Distance:2481.9,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"ZTH",
    To:"LGW",
    Distance:2225.41,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ZTH",
    To:"LGW",
    Distance:2225.41,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ZTH",
    To:"MAN",
    Distance:2481.18,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"ZTH",
    To:"MAN",
    Distance:2481.18,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"ZTH",
    To:"MUC",
    Distance:1389.36,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZTH",
    To:"VIE",
    Distance:1203.77,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ZTH",
    To:"VIE",
    Distance:1203.77,
    Airport:"Niki"
}),
new Routes(
{
    From:"ZUH",
    To:"CGO",
    Distance:1392.15,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"CGO",
    Distance:1392.15,
    Airport:"West Air China"
}),
new Routes(
{
    From:"ZUH",
    To:"CKG",
    Distance:1090.09,
    Airport:"Air China"
}),
new Routes(
{
    From:"ZUH",
    To:"CKG",
    Distance:1090.09,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"CKG",
    Distance:1090.09,
    Airport:"West Air China"
}),
new Routes(
{
    From:"ZUH",
    To:"CSX",
    Distance:687.671,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"CTU",
    Distance:1337.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"ZUH",
    To:"CTU",
    Distance:1337.48,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"CZX",
    Distance:1269.97,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"FOC",
    Distance:773.692,
    Airport:"Air China"
}),
new Routes(
{
    From:"ZUH",
    To:"FOC",
    Distance:773.692,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"FOC",
    Distance:773.692,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"FOC",
    Distance:773.692,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"HAK",
    Distance:380.494,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"ZUH",
    To:"HAK",
    Distance:380.494,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"HAK",
    Distance:380.494,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"HFE",
    Distance:1154.01,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"HGH",
    Distance:1153.74,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"HYN",
    Distance:1088.84,
    Airport:"Air China"
}),
new Routes(
{
    From:"ZUH",
    To:"HYN",
    Distance:1088.84,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"KHN",
    Distance:803.573,
    Airport:"Air China"
}),
new Routes(
{
    From:"ZUH",
    To:"KHN",
    Distance:803.573,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"KHN",
    Distance:803.573,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"KMG",
    Distance:1133.5,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"KOW",
    Distance:452.472,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"ZUH",
    To:"KWE",
    Distance:835.309,
    Airport:"Air China"
}),
new Routes(
{
    From:"ZUH",
    To:"KWE",
    Distance:835.309,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"KWE",
    Distance:835.309,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"KWL",
    Distance:493.017,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"ZUH",
    To:"LZH",
    Distance:475.361,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"ZUH",
    To:"MXZ",
    Distance:383.814,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"NGB",
    Distance:1186.67,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"NNG",
    Distance:539.444,
    Airport:"Air China"
}),
new Routes(
{
    From:"ZUH",
    To:"NNG",
    Distance:539.444,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"NNG",
    Distance:539.444,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"PEK",
    Distance:2032.42,
    Airport:"Air China"
}),
new Routes(
{
    From:"ZUH",
    To:"PEK",
    Distance:2032.42,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"PEK",
    Distance:2032.42,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"PVG",
    Distance:1316.07,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"PVG",
    Distance:1316.07,
    Airport:"China SSS"
}),
new Routes(
{
    From:"ZUH",
    To:"PVG",
    Distance:1316.07,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"PVG",
    Distance:1316.07,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"PVG",
    Distance:1316.07,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"SHA",
    Distance:1291.67,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"SHA",
    Distance:1291.67,
    Airport:"China SSS"
}),
new Routes(
{
    From:"ZUH",
    To:"SHA",
    Distance:1291.67,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"SHA",
    Distance:1291.67,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"SWA",
    Distance:372.929,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"SYX",
    Distance:583.688,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"SYX",
    Distance:583.688,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"ZUH",
    To:"TSN",
    Distance:1940.44,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"ZUH",
    To:"WNZ",
    Distance:999.136,
    Airport:"Air China"
}),
new Routes(
{
    From:"ZUH",
    To:"WNZ",
    Distance:999.136,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"WUH",
    Distance:979.498,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"WUZ",
    Distance:271.352,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"ZUH",
    To:"XMN",
    Distance:561.359,
    Airport:"Air China"
}),
new Routes(
{
    From:"ZUH",
    To:"XMN",
    Distance:561.359,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"XMN",
    Distance:561.359,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"XMN",
    Distance:561.359,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"ZUH",
    To:"YIW",
    Distance:1053.39,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ZVK",
    To:"BKK",
    Distance:536.36,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"ZVK",
    To:"PKZ",
    Distance:192.456,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"ZVK",
    To:"VTE",
    Distance:282.354,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"ZYL",
    To:"DAC",
    Distance:193.993,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"ZYL",
    To:"DAC",
    Distance:193.993,
    Airport:"Rainbow Air Polynesia"
}),
new Routes(
{
    From:"ZYL",
    To:"DAC",
    Distance:193.993,
    Airport:"United Airways"
}),
new Routes(
{
    From:"ZYL",
    To:"DAC",
    Distance:193.993,
    Airport:"Viking Hellas"
})

];


var done = 0;
for(var i = 0; i < routes.length; i++){
    routes[i].save(function (result) {
        console.log(done);
        done++;
        if(done === routes.length){
            exit();
        }
    })
};


function exit(){
    mongoose.disconnect();
}