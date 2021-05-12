var Routes = require('../models/Routes');

var mongoose = require("mongoose");

var connect = "mongodb://admin:supportftw117@ds155490.mlab.com:55490/dijkstra-airplanes"
mongoose.connect(connect);
console.log("Working.");

var routes = [


new Routes(
{
    From:"NAP",
    To:"LGW",
    Distance:1592.13,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"NAP",
    To:"LGW",
    Distance:1592.13,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NAP",
    To:"LGW",
    Distance:1592.13,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NAP",
    To:"LIN",
    Distance:649.612,
    Airport:"Air Italy"
}),
new Routes(
{
    From:"NAP",
    To:"LIN",
    Distance:649.612,
    Airport:"Air One"
}),
new Routes(
{
    From:"NAP",
    To:"LIN",
    Distance:649.612,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NAP",
    To:"LIN",
    Distance:649.612,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"NAP",
    To:"LPL",
    Distance:1887.32,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NAP",
    To:"LTN",
    Distance:1654.44,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"NAP",
    To:"LUX",
    Distance:1158.03,
    Airport:"Luxair"
}),
new Routes(
{
    From:"NAP",
    To:"LWO",
    Distance:1245.11,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"NAP",
    To:"MAN",
    Distance:1859.93,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"NAP",
    To:"MAN",
    Distance:1859.93,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"NAP",
    To:"MAN",
    Distance:1859.93,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NAP",
    To:"MUC",
    Distance:853.581,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NAP",
    To:"MUC",
    Distance:853.581,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"NAP",
    To:"MUC",
    Distance:853.581,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"NAP",
    To:"MXP",
    Distance:693.363,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NAP",
    To:"NCE",
    Distance:658.386,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NAP",
    To:"NTE",
    Distance:1446.09,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NAP",
    To:"OLB",
    Distance:401.169,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"NAP",
    To:"ORY",
    Distance:1280.16,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NAP",
    To:"ORY",
    Distance:1280.16,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NAP",
    To:"OTP",
    Distance:1046.95,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"NAP",
    To:"PMO",
    Distance:318.419,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NAP",
    To:"PMO",
    Distance:318.419,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NAP",
    To:"PRG",
    Distance:1024.64,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"NAP",
    To:"STN",
    Distance:1624.71,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NAP",
    To:"STR",
    Distance:954.97,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NAP",
    To:"STR",
    Distance:954.97,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"NAP",
    To:"STR",
    Distance:954.97,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"NAP",
    To:"SXF",
    Distance:1279.4,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NAP",
    To:"TLV",
    Distance:2082.43,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"NAP",
    To:"TRN",
    Distance:721.669,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NAP",
    To:"TRN",
    Distance:721.669,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"NAP",
    To:"TRS",
    Distance:553.428,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NAP",
    To:"TUN",
    Distance:570,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"NAP",
    To:"TXL",
    Distance:1300.27,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NAP",
    To:"TXL",
    Distance:1300.27,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"NAP",
    To:"VCE",
    Distance:537.098,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"NAP",
    To:"VCE",
    Distance:537.098,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NAP",
    To:"VIE",
    Distance:823.279,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"NAP",
    To:"VRN",
    Distance:572.278,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"NAP",
    To:"ZRH",
    Distance:862.447,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NAP",
    To:"ZRH",
    Distance:862.447,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"NAQ",
    To:"JUV",
    Distance:641.732,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"NAQ",
    To:"THU",
    Distance:107.826,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"NAS",
    To:"ATC",
    Distance:186.524,
    Airport:"Aeroper"
}),
new Routes(
{
    From:"NAS",
    To:"ATL",
    Distance:1169.44,
    Airport:"Air France"
}),
new Routes(
{
    From:"NAS",
    To:"ATL",
    Distance:1169.44,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"NAS",
    To:"ATL",
    Distance:1169.44,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NAS",
    To:"ATL",
    Distance:1169.44,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"NAS",
    To:"AXP",
    Distance:458.188,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"BOS",
    Distance:2015.47,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NAS",
    To:"BOS",
    Distance:2015.47,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"NAS",
    To:"BWI",
    Distance:1573.67,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"NAS",
    To:"CLT",
    Distance:1179.54,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NAS",
    To:"CLT",
    Distance:1179.54,
    Airport:"US Airways"
}),
new Routes(
{
    From:"NAS",
    To:"CRI",
    Distance:420.079,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"DCA",
    Distance:1536.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NAS",
    To:"DCA",
    Distance:1536.48,
    Airport:"US Airways"
}),
new Routes(
{
    From:"NAS",
    To:"DFW",
    Distance:2090.32,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NAS",
    To:"DFW",
    Distance:2090.32,
    Airport:"US Airways"
}),
new Routes(
{
    From:"NAS",
    To:"DTW",
    Distance:1984.55,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NAS",
    To:"ELH",
    Distance:92.4423,
    Airport:"Aeroper"
}),
new Routes(
{
    From:"NAS",
    To:"ELH",
    Distance:92.4423,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"EWR",
    Distance:1767.25,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NAS",
    To:"FLL",
    Distance:292.976,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"FLL",
    Distance:292.976,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"NAS",
    To:"FPO",
    Distance:209.047,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"GCM",
    Distance:754.077,
    Airport:"British Airways"
}),
new Routes(
{
    From:"NAS",
    To:"GGT",
    Distance:229.9,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"GHB",
    Distance:117.475,
    Airport:"Aeroper"
}),
new Routes(
{
    From:"NAS",
    To:"GHB",
    Distance:117.475,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"HAV",
    Distance:551.303,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"HAV",
    Distance:551.303,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"NAS",
    To:"IAH",
    Distance:1844.23,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NAS",
    To:"IGA",
    Distance:596.084,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"JFK",
    Distance:1768.13,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NAS",
    To:"JFK",
    Distance:1768.13,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"NAS",
    To:"KIN",
    Distance:792.96,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"NAS",
    To:"LGI",
    Distance:317.417,
    Airport:"Aeroper"
}),
new Routes(
{
    From:"NAS",
    To:"LGI",
    Distance:317.417,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"LHR",
    Distance:6976.48,
    Airport:"British Airways"
}),
new Routes(
{
    From:"NAS",
    To:"MCO",
    Distance:536.354,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"MCO",
    Distance:536.354,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"NAS",
    To:"MHH",
    Distance:168.154,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"MIA",
    Distance:295.787,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NAS",
    To:"MIA",
    Distance:295.787,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"MIA",
    Distance:295.787,
    Airport:"US Airways"
}),
new Routes(
{
    From:"NAS",
    To:"MYG",
    Distance:541.186,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"ORD",
    Distance:2113.75,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NAS",
    To:"PBI",
    Distance:320.363,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"PHL",
    Distance:1662.35,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NAS",
    To:"PHL",
    Distance:1662.35,
    Airport:"US Airways"
}),
new Routes(
{
    From:"NAS",
    To:"PLS",
    Distance:642.878,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"NAS",
    To:"PLS",
    Distance:642.878,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"PLS",
    Distance:642.878,
    Airport:"British Airways"
}),
new Routes(
{
    From:"NAS",
    To:"PTY",
    Distance:1787.08,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"NAS",
    To:"RSD",
    Distance:130.914,
    Airport:"Aeroper"
}),
new Routes(
{
    From:"NAS",
    To:"RSD",
    Distance:130.914,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"SML",
    Distance:275.264,
    Airport:"Aeroper"
}),
new Routes(
{
    From:"NAS",
    To:"SML",
    Distance:275.264,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAS",
    To:"YYZ",
    Distance:2081.78,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"NAS",
    To:"YYZ",
    Distance:2081.78,
    Airport:"WestJet"
}),
new Routes(
{
    From:"NAS",
    To:"ZSA",
    Distance:316.735,
    Airport:"Aeroper"
}),
new Routes(
{
    From:"NAS",
    To:"ZSA",
    Distance:316.735,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"NAT",
    To:"BSB",
    Distance:1770.62,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"NAT",
    To:"BSB",
    Distance:1770.62,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"NAT",
    To:"BSB",
    Distance:1770.62,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"NAT",
    To:"CNF",
    Distance:1793.78,
    Airport:"Azul"
}),
new Routes(
{
    From:"NAT",
    To:"FEN",
    Distance:387.552,
    Airport:"Azul"
}),
new Routes(
{
    From:"NAT",
    To:"FOR",
    Distance:434.525,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"NAT",
    To:"FOR",
    Distance:434.525,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"NAT",
    To:"GIG",
    Distance:2065.35,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"NAT",
    To:"GIG",
    Distance:2065.35,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"NAT",
    To:"GRU",
    Distance:2288.8,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"NAT",
    To:"GRU",
    Distance:2288.8,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"NAT",
    To:"GRU",
    Distance:2288.8,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"NAT",
    To:"LIS",
    Distance:5651,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"NAT",
    To:"REC",
    Distance:248.931,
    Airport:"Azul"
}),
new Routes(
{
    From:"NAT",
    To:"SSA",
    Distance:848.544,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"NAT",
    To:"VCP",
    Distance:2288.42,
    Airport:"Azul"
}),
new Routes(
{
    From:"NAV",
    To:"IST",
    Distance:546.085,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"NAV",
    To:"SAW",
    Distance:504.836,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"NAW",
    To:"DMK",
    Distance:831.37,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"NAY",
    To:"ACX",
    Distance:1950.67,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"ACX",
    Distance:1950.67,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"BAV",
    Distance:549.711,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"BAV",
    Distance:549.711,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"BFJ",
    Distance:1721.4,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"BFJ",
    Distance:1721.4,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"CAN",
    Distance:1845.49,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"CAN",
    Distance:1845.49,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"CIF",
    Distance:345.053,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"CIF",
    Distance:345.053,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"CIH",
    Distance:485.878,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"CIH",
    Distance:485.878,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"CKG",
    Distance:1428.07,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"CKG",
    Distance:1428.07,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"CSX",
    Distance:1321.54,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"CSX",
    Distance:1321.54,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"CTU",
    Distance:1522.26,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"CTU",
    Distance:1522.26,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"CZX",
    Distance:921.68,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"CZX",
    Distance:921.68,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"DAT",
    Distance:249.706,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"DAT",
    Distance:249.706,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"DSN",
    Distance:542.693,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"DSN",
    Distance:542.693,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"ENY",
    Distance:691.684,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"ENY",
    Distance:691.684,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"FUO",
    Distance:1874.23,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"FUO",
    Distance:1874.23,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"HET",
    Distance:404.711,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"HET",
    Distance:404.711,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"HLD",
    Distance:1082.32,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"HLD",
    Distance:1082.32,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"HLH",
    Distance:836.661,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"HLH",
    Distance:836.661,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"HRB",
    Distance:1033.72,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"HRB",
    Distance:1033.72,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"HSN",
    Distance:1222.48,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"HSN",
    Distance:1222.48,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"IQN",
    Distance:889.327,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"IQN",
    Distance:889.327,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"JUZ",
    Distance:1224.49,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"JUZ",
    Distance:1224.49,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"KHN",
    Distance:1214.79,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"KHN",
    Distance:1214.79,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"LYG",
    Distance:634.602,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"LYG",
    Distance:634.602,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"LYI",
    Distance:556.133,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"LYI",
    Distance:556.133,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"NDG",
    Distance:1026.72,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"NDG",
    Distance:1026.72,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"NGB",
    Distance:1199.49,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"NGB",
    Distance:1199.49,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"NNY",
    Distance:828.079,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"NNY",
    Distance:828.079,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"NZH",
    Distance:1090.47,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"NZH",
    Distance:1090.47,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"SHA",
    Distance:1054.01,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"SHA",
    Distance:1054.01,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"SZX",
    Distance:1921.69,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"SZX",
    Distance:1921.69,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"UYN",
    Distance:598.977,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"UYN",
    Distance:598.977,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"WNZ",
    Distance:1382.28,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"WNZ",
    Distance:1382.28,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"WUA",
    Distance:818.87,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"WUA",
    Distance:818.87,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"XFN",
    Distance:924.97,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"XFN",
    Distance:924.97,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"XIL",
    Distance:460.916,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"XIL",
    Distance:460.916,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"XMN",
    Distance:1702.23,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"XMN",
    Distance:1702.23,
    Airport:"China United"
}),
new Routes(
{
    From:"NAY",
    To:"ZHA",
    Distance:2142.56,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NAY",
    To:"ZHA",
    Distance:2142.56,
    Airport:"China United"
}),
new Routes(
{
    From:"NBC",
    To:"DME",
    Distance:892.767,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"NBC",
    To:"DYU",
    Distance:2247.3,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"NBC",
    To:"GYD",
    Distance:1660.36,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"NBC",
    To:"IST",
    Distance:2329.6,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"NBC",
    To:"LED",
    Distance:1383.38,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"NBC",
    To:"SVO",
    Distance:919.677,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"NBC",
    To:"SVX",
    Distance:564.554,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"NBE",
    To:"AMS",
    Distance:1859.4,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"NBE",
    To:"BHX",
    Distance:2057.12,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NBE",
    To:"BRE",
    Distance:1891.57,
    Airport:"Germania"
}),
new Routes(
{
    From:"NBE",
    To:"BRS",
    Distance:1996.83,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"NBE",
    To:"BRS",
    Distance:1996.83,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"NBE",
    To:"BRS",
    Distance:1996.83,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NBE",
    To:"BRU",
    Distance:1715.66,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"NBE",
    To:"CGN",
    Distance:1665.51,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NBE",
    To:"CWL",
    Distance:2024.34,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NBE",
    To:"DME",
    Distance:2989.89,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"NBE",
    To:"DME",
    Distance:2989.89,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"NBE",
    To:"DRS",
    Distance:1695.11,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NBE",
    To:"DUS",
    Distance:1716.69,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NBE",
    To:"DUS",
    Distance:1716.69,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"NBE",
    To:"DUS",
    Distance:1716.69,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"NBE",
    To:"EMA",
    Distance:2077.89,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"NBE",
    To:"EMA",
    Distance:2077.89,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"NBE",
    To:"EMA",
    Distance:2077.89,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NBE",
    To:"FRA",
    Distance:1558.73,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"NBE",
    To:"FRA",
    Distance:1558.73,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"NBE",
    To:"GLA",
    Distance:2471.16,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"NBE",
    To:"GLA",
    Distance:2471.16,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"NBE",
    To:"HAM",
    Distance:1952.29,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"NBE",
    To:"LED",
    Distance:2996.76,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"NBE",
    To:"LED",
    Distance:2996.76,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"NBE",
    To:"LGW",
    Distance:1877.31,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"NBE",
    To:"LGW",
    Distance:1877.31,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"NBE",
    To:"LGW",
    Distance:1877.31,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"NBE",
    To:"LGW",
    Distance:1877.31,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NBE",
    To:"LUX",
    Distance:1545.02,
    Airport:"Luxair"
}),
new Routes(
{
    From:"NBE",
    To:"MAN",
    Distance:2160.53,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"NBE",
    To:"MAN",
    Distance:2160.53,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"NBE",
    To:"MAN",
    Distance:2160.53,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"NBE",
    To:"MAN",
    Distance:2160.53,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NBE",
    To:"MUC",
    Distance:1369.69,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NBE",
    To:"MUC",
    Distance:1369.69,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"NBE",
    To:"MUC",
    Distance:1369.69,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"NBE",
    To:"NCL",
    Distance:2302.62,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"NBE",
    To:"NCL",
    Distance:2302.62,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"NBE",
    To:"NCL",
    Distance:2302.62,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NBE",
    To:"NUE",
    Distance:1493.42,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NBE",
    To:"SVO",
    Distance:3000.99,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"NBE",
    To:"SXF",
    Distance:1829.09,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"NBE",
    To:"TXL",
    Distance:1846.51,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NBE",
    To:"ZRH",
    Distance:1275.94,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"NBO",
    To:"ABJ",
    Distance:4596.02,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"ACC",
    Distance:4190.51,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"ADD",
    Distance:1163.61,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"ADD",
    Distance:1163.61,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"ADD",
    Distance:1163.61,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"ADD",
    Distance:1163.61,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"AMS",
    Distance:6677.42,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NBO",
    To:"AMS",
    Distance:6677.42,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"AMS",
    Distance:6677.42,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"APL",
    Distance:1554.61,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"ASM",
    Distance:1859.89,
    Airport:"Nasair"
}),
new Routes(
{
    From:"NBO",
    To:"AUH",
    Distance:3443.17,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NBO",
    To:"AUH",
    Distance:3443.17,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"NBO",
    To:"AUH",
    Distance:3443.17,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"BJM",
    Distance:874.242,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"BJM",
    Distance:874.242,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"BKK",
    Distance:7224.15,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"BKK",
    Distance:7224.15,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"BKK",
    Distance:7224.15,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"BKO",
    Distance:5186.38,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"BLZ",
    Distance:1611.05,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"BOM",
    Distance:4533.02,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"NBO",
    To:"BOM",
    Distance:4533.02,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"BRU",
    Distance:6566.58,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"NBO",
    To:"BRU",
    Distance:6566.58,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"BRU",
    Distance:6566.58,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"NBO",
    To:"BRU",
    Distance:6566.58,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"BZV",
    Distance:2428.93,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"BZV",
    Distance:2428.93,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"CAI",
    Distance:3544.8,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"NBO",
    To:"CAN",
    Distance:8678.72,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"CAN",
    Distance:8678.72,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"CDG",
    Distance:6495.11,
    Airport:"Air France"
}),
new Routes(
{
    From:"NBO",
    To:"CDG",
    Distance:6495.11,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"DAR",
    Distance:667.61,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"DAR",
    Distance:667.61,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"NBO",
    To:"DAR",
    Distance:667.61,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"NBO",
    To:"DAR",
    Distance:667.61,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"NBO",
    To:"DAR",
    Distance:667.61,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"DEL",
    Distance:5416.32,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"DLA",
    Distance:3080.89,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"DOH",
    Distance:3349.35,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"NBO",
    To:"DXB",
    Distance:3559.26,
    Airport:"Emirates"
}),
new Routes(
{
    From:"NBO",
    To:"DXB",
    Distance:3559.26,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"DXB",
    Distance:3559.26,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"DXB",
    Distance:3559.26,
    Airport:"Qantas"
}),
new Routes(
{
    From:"NBO",
    To:"DZA",
    Distance:1574.12,
    Airport:"Air France"
}),
new Routes(
{
    From:"NBO",
    To:"DZA",
    Distance:1574.12,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"DZA",
    Distance:1574.12,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"EBB",
    Distance:521.036,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"EBB",
    Distance:521.036,
    Airport:"Northern Dene Airways"
}),
new Routes(
{
    From:"NBO",
    To:"EDL",
    Distance:268.295,
    Airport:"Fly540"
}),
new Routes(
{
    From:"NBO",
    To:"EDL",
    Distance:268.295,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"FBM",
    Distance:1542.58,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"FBM",
    Distance:1542.58,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"FIH",
    Distance:2409.76,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"FIH",
    Distance:2409.76,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"GBE",
    Distance:2841.87,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"HRE",
    Distance:1954.05,
    Airport:"Air France"
}),
new Routes(
{
    From:"NBO",
    To:"HRE",
    Distance:1954.05,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"HRE",
    Distance:1954.05,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"ICN",
    Distance:10054.7,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"ICN",
    Distance:10054.7,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"NBO",
    To:"IST",
    Distance:4774.19,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"IST",
    Distance:4774.19,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"JED",
    Distance:2568.78,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"JED",
    Distance:2568.78,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"JIB",
    Distance:1587.81,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"JIB",
    Distance:1587.81,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"JNB",
    Distance:2912.01,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"JNB",
    Distance:2912.01,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"NBO",
    To:"JRO",
    Distance:235.215,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"JRO",
    Distance:235.215,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"NBO",
    To:"JUB",
    Distance:907.762,
    Airport:"Fly540"
}),
new Routes(
{
    From:"NBO",
    To:"JUB",
    Distance:907.762,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"KGL",
    Distance:757.93,
    Airport:"Air France"
}),
new Routes(
{
    From:"NBO",
    To:"KGL",
    Distance:757.93,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"KGL",
    Distance:757.93,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"KGL",
    Distance:757.93,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"NBO",
    To:"KIS",
    Distance:280.276,
    Airport:"Fly540"
}),
new Routes(
{
    From:"NBO",
    To:"KIS",
    Distance:280.276,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"KRT",
    Distance:1940.66,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"LAD",
    Distance:2753.17,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"LHR",
    Distance:6841.74,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"LHR",
    Distance:6841.74,
    Airport:"British Airways"
}),
new Routes(
{
    From:"NBO",
    To:"LHR",
    Distance:6841.74,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"LLW",
    Distance:1429.17,
    Airport:"Air France"
}),
new Routes(
{
    From:"NBO",
    To:"LLW",
    Distance:1429.17,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"LLW",
    Distance:1429.17,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"LOK",
    Distance:515.129,
    Airport:"Fly540"
}),
new Routes(
{
    From:"NBO",
    To:"LOS",
    Distance:3831.77,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"LUN",
    Distance:1814.45,
    Airport:"Air France"
}),
new Routes(
{
    From:"NBO",
    To:"LUN",
    Distance:1814.45,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"LUN",
    Distance:1814.45,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"LUN",
    Distance:1814.45,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"LVI",
    Distance:2199.67,
    Airport:"Air France"
}),
new Routes(
{
    From:"NBO",
    To:"LVI",
    Distance:2199.67,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"LVI",
    Distance:2199.67,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"MBA",
    Distance:422.973,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"NBO",
    To:"MBA",
    Distance:422.973,
    Airport:"Flightline"
}),
new Routes(
{
    From:"NBO",
    To:"MBA",
    Distance:422.973,
    Airport:"Fly540"
}),
new Routes(
{
    From:"NBO",
    To:"MBA",
    Distance:422.973,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"MGQ",
    Distance:1002.41,
    Airport:"Flightline"
}),
new Routes(
{
    From:"NBO",
    To:"MGQ",
    Distance:1002.41,
    Airport:"Zip"
}),
new Routes(
{
    From:"NBO",
    To:"MPM",
    Distance:2775.04,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"MRU",
    Distance:3098.03,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"NBO",
    To:"MRU",
    Distance:3098.03,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"MWZ",
    Distance:461.255,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"MWZ",
    Distance:461.255,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"NBO",
    To:"MYD",
    Distance:411.682,
    Airport:"Fly540"
}),
new Routes(
{
    From:"NBO",
    To:"MYD",
    Distance:411.682,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"NLA",
    Distance:1585.7,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NBO",
    To:"NLA",
    Distance:1585.7,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"NSI",
    Distance:2875.13,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"POL",
    Distance:1356.44,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"NBO",
    To:"POL",
    Distance:1356.44,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"SAH",
    Distance:2032.35,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"NBO",
    To:"SEZ",
    Distance:2097.89,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"SHJ",
    Distance:3575.19,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"NBO",
    To:"TNR",
    Distance:2258.32,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"WJR",
    Distance:488.831,
    Airport:"Flightline"
}),
new Routes(
{
    From:"NBO",
    To:"ZNZ",
    Distance:601.789,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NBO",
    To:"ZNZ",
    Distance:601.789,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"NBO",
    To:"ZRH",
    Distance:6083.74,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"NBO",
    To:"ZRH",
    Distance:6083.74,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"NBO",
    To:"ZRH",
    Distance:6083.74,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NBS",
    To:"CGQ",
    Distance:255.63,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NBS",
    To:"PEK",
    Distance:944.946,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NBS",
    To:"SHE",
    Distance:361.945,
    Airport:"Air France"
}),
new Routes(
{
    From:"NBS",
    To:"SHE",
    Distance:361.945,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NBS",
    To:"TSN",
    Distance:921.459,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NBX",
    To:"AMQ",
    Distance:822.956,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"NBX",
    To:"DJJ",
    Distance:564.339,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"NBX",
    To:"KNG",
    Distance:202.219,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"NCE",
    To:"AJA",
    Distance:232.325,
    Airport:"Air France"
}),
new Routes(
{
    From:"NCE",
    To:"AJA",
    Distance:232.325,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NCE",
    To:"AJA",
    Distance:232.325,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"NCE",
    To:"ALG",
    Distance:845.741,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"NCE",
    To:"AMS",
    Distance:978.865,
    Airport:"Air France"
}),
new Routes(
{
    From:"NCE",
    To:"AMS",
    Distance:978.865,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NCE",
    To:"AMS",
    Distance:978.865,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"NCE",
    To:"ARN",
    Distance:1919.96,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"NCE",
    To:"ARN",
    Distance:1919.96,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"NCE",
    To:"BCN",
    Distance:496.298,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"NCE",
    To:"BCN",
    Distance:496.298,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"NCE",
    To:"BCN",
    Distance:496.298,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"BES",
    Distance:1042.24,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NCE",
    To:"BFS",
    Distance:1559.69,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"BGO",
    Distance:1854.57,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"NCE",
    To:"BHX",
    Distance:1181.41,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"NCE",
    To:"BIA",
    Distance:221.379,
    Airport:"Air France"
}),
new Routes(
{
    From:"NCE",
    To:"BIA",
    Distance:221.379,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NCE",
    To:"BIA",
    Distance:221.379,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"NCE",
    To:"BIQ",
    Distance:704.136,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NCE",
    To:"BOD",
    Distance:644.774,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NCE",
    To:"BOD",
    Distance:644.774,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"BRS",
    Distance:1135.63,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"BRU",
    Distance:831.166,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"NCE",
    To:"BRU",
    Distance:831.166,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"BSL",
    Distance:437.85,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"CDG",
    Distance:694.516,
    Airport:"Air France"
}),
new Routes(
{
    From:"NCE",
    To:"CDG",
    Distance:694.516,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"CFE",
    Distance:397.686,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NCE",
    To:"CFR",
    Distance:848.518,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NCE",
    To:"CGN",
    Distance:801.457,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"NCE",
    To:"CLY",
    Distance:179.23,
    Airport:"Air France"
}),
new Routes(
{
    From:"NCE",
    To:"CLY",
    Distance:179.23,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NCE",
    To:"CLY",
    Distance:179.23,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"NCE",
    To:"CMN",
    Distance:1718.24,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"NCE",
    To:"CPH",
    Distance:1385.27,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"NCE",
    To:"CPH",
    Distance:1385.27,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"NCE",
    To:"CZL",
    Distance:822.444,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"NCE",
    To:"DJE",
    Distance:1130.48,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"NCE",
    To:"DME",
    Distance:2540.91,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"NCE",
    To:"DUB",
    Distance:1466.34,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"NCE",
    To:"DUB",
    Distance:1466.34,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NCE",
    To:"DUS",
    Distance:849.2,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NCE",
    To:"DUS",
    Distance:849.2,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"NCE",
    To:"DXB",
    Distance:4783.89,
    Airport:"Emirates"
}),
new Routes(
{
    From:"NCE",
    To:"EDI",
    Distance:1559.79,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"EIN",
    Distance:877.273,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"NCE",
    To:"ETZ",
    Distance:596.574,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NCE",
    To:"FCO",
    Distance:459.905,
    Airport:"Air France"
}),
new Routes(
{
    From:"NCE",
    To:"FCO",
    Distance:459.905,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NCE",
    To:"FCO",
    Distance:459.905,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"FRA",
    Distance:715.217,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"NCE",
    To:"FSC",
    Distance:285.138,
    Airport:"Air France"
}),
new Routes(
{
    From:"NCE",
    To:"FSC",
    Distance:285.138,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NCE",
    To:"FSC",
    Distance:285.138,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"NCE",
    To:"GOT",
    Distance:1596.5,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"NCE",
    To:"GVA",
    Distance:299.772,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"NCE",
    To:"GVA",
    Distance:299.772,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"HAM",
    Distance:1127.16,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"NCE",
    To:"HAM",
    Distance:1127.16,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"HEL",
    Distance:2199.81,
    Airport:"Finnair"
}),
new Routes(
{
    From:"NCE",
    To:"HEL",
    Distance:2199.81,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"NCE",
    To:"IST",
    Distance:1795.42,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"NCE",
    To:"JFK",
    Distance:6406.85,
    Airport:"Air France"
}),
new Routes(
{
    From:"NCE",
    To:"JFK",
    Distance:6406.85,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NCE",
    To:"KBP",
    Distance:1932.91,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"NCE",
    To:"LBA",
    Distance:1305.99,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCE",
    To:"LCY",
    Distance:1023.47,
    Airport:"British Airways"
}),
new Routes(
{
    From:"NCE",
    To:"LED",
    Distance:2371.26,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"NCE",
    To:"LGW",
    Distance:1001,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"NCE",
    To:"LGW",
    Distance:1001,
    Airport:"British Airways"
}),
new Routes(
{
    From:"NCE",
    To:"LGW",
    Distance:1001,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"NCE",
    To:"LGW",
    Distance:1001,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"LHR",
    Distance:1041.66,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NCE",
    To:"LHR",
    Distance:1041.66,
    Airport:"British Airways"
}),
new Routes(
{
    From:"NCE",
    To:"LIG",
    Distance:535.74,
    Airport:"Twin Jet"
}),
new Routes(
{
    From:"NCE",
    To:"LIL",
    Distance:828.393,
    Airport:"Air France"
}),
new Routes(
{
    From:"NCE",
    To:"LIL",
    Distance:828.393,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"LIS",
    Distance:1468.1,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"NCE",
    To:"LIS",
    Distance:1468.1,
    Airport:"US Airways"
}),
new Routes(
{
    From:"NCE",
    To:"LIS",
    Distance:1468.1,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"LPL",
    Distance:1304,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"LTN",
    Distance:1073.86,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"LUX",
    Distance:668.027,
    Airport:"Luxair"
}),
new Routes(
{
    From:"NCE",
    To:"LYS",
    Distance:284.745,
    Airport:"Air France"
}),
new Routes(
{
    From:"NCE",
    To:"LYS",
    Distance:284.745,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"MAD",
    Distance:956.089,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"NCE",
    To:"MAN",
    Distance:1282.51,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCE",
    To:"MCM",
    Distance:18.166,
    Airport:"TransHolding System"
}),
new Routes(
{
    From:"NCE",
    To:"MIR",
    Distance:928.929,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"NCE",
    To:"MSQ",
    Distance:1890.66,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"NCE",
    To:"MUC",
    Distance:629.963,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"NCE",
    To:"NAP",
    Distance:658.386,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"NCL",
    Distance:1417.71,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"NTE",
    Distance:790.415,
    Airport:"Air France"
}),
new Routes(
{
    From:"NCE",
    To:"NTE",
    Distance:790.415,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"OLB",
    Distance:360.56,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"ORK",
    Distance:1480.31,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"NCE",
    To:"ORY",
    Distance:675.826,
    Airport:"Air France"
}),
new Routes(
{
    From:"NCE",
    To:"ORY",
    Distance:675.826,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"OSL",
    Distance:1857.07,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"NCE",
    To:"OSL",
    Distance:1857.07,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"NCE",
    To:"OTP",
    Distance:1507.76,
    Airport:"Tarom"
}),
new Routes(
{
    From:"NCE",
    To:"PRG",
    Distance:893.473,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"NCE",
    To:"PRG",
    Distance:893.473,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"NCE",
    To:"RAK",
    Distance:1891.34,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"NCE",
    To:"RAK",
    Distance:1891.34,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"RIX",
    Distance:1884.84,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"NCE",
    To:"RNS",
    Distance:848.193,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NCE",
    To:"RTM",
    Distance:945.612,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"NCE",
    To:"SNN",
    Distance:1556.92,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NCE",
    To:"SOU",
    Distance:1035.51,
    Airport:"Air France"
}),
new Routes(
{
    From:"NCE",
    To:"SOU",
    Distance:1035.51,
    Airport:"Flybe"
}),
new Routes(
{
    From:"NCE",
    To:"STN",
    Distance:1051.95,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"SVO",
    Distance:2532.18,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"NCE",
    To:"SXB",
    Distance:543.549,
    Airport:"Air France"
}),
new Routes(
{
    From:"NCE",
    To:"SXF",
    Distance:1076.29,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"TLL",
    Distance:2119.57,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"NCE",
    To:"TLS",
    Distance:470.803,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NCE",
    To:"TLS",
    Distance:470.803,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"TLV",
    Distance:2735.2,
    Airport:"Air France"
}),
new Routes(
{
    From:"NCE",
    To:"TLV",
    Distance:2735.2,
    Airport:"Israir"
}),
new Routes(
{
    From:"NCE",
    To:"TRD",
    Distance:2214.26,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"NCE",
    To:"TRF",
    Distance:1739.06,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"NCE",
    To:"TUN",
    Distance:798.764,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"NCE",
    To:"TXL",
    Distance:1086.67,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"NCE",
    To:"VCE",
    Distance:455.548,
    Airport:"Air France"
}),
new Routes(
{
    From:"NCE",
    To:"VCE",
    Distance:455.548,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NCE",
    To:"VCE",
    Distance:455.548,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCE",
    To:"VIE",
    Distance:876.101,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NCE",
    To:"VIE",
    Distance:876.101,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"NCE",
    To:"VIE",
    Distance:876.101,
    Airport:"Niki"
}),
new Routes(
{
    From:"NCE",
    To:"WAW",
    Distance:1390.49,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"NCE",
    To:"YUL",
    Distance:6128.79,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"NCE",
    To:"ZRH",
    Distance:435.766,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"NCL",
    To:"ABZ",
    Distance:242.709,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"NCL",
    To:"ACE",
    Distance:3054.04,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"ACE",
    Distance:3054.04,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"NCL",
    To:"ACE",
    Distance:3054.04,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"NCL",
    To:"ACE",
    Distance:3054.04,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NCL",
    To:"AGP",
    Distance:2052.95,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"AGP",
    Distance:2052.95,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NCL",
    To:"AGP",
    Distance:2052.95,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCL",
    To:"ALC",
    Distance:1865.05,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"ALC",
    Distance:1865.05,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NCL",
    To:"ALC",
    Distance:1865.05,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCL",
    To:"AMS",
    Distance:522.064,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NCL",
    To:"AMS",
    Distance:522.064,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCL",
    To:"BCN",
    Distance:1552.66,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCL",
    To:"BFS",
    Distance:292.654,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCL",
    To:"BHD",
    Distance:271.78,
    Airport:"Flybe"
}),
new Routes(
{
    From:"NCL",
    To:"BHX",
    Distance:287.312,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"NCL",
    To:"BJV",
    Distance:2965.57,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"BRS",
    Distance:412.105,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCL",
    To:"BRU",
    Distance:618.067,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"NCL",
    To:"BRU",
    Distance:618.067,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"NCL",
    To:"CDG",
    Distance:729.747,
    Airport:"Air France"
}),
new Routes(
{
    From:"NCL",
    To:"CDG",
    Distance:729.747,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NCL",
    To:"CDG",
    Distance:729.747,
    Airport:"Flybe"
}),
new Routes(
{
    From:"NCL",
    To:"CPH",
    Distance:908.247,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"NCL",
    To:"CWL",
    Distance:419.481,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"NCL",
    To:"DBV",
    Distance:2002,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"DLM",
    Distance:3074.63,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"DLM",
    Distance:3074.63,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"NCL",
    To:"DLM",
    Distance:3074.63,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"NCL",
    To:"DLM",
    Distance:3074.63,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NCL",
    To:"DUB",
    Distance:347.538,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"NCL",
    To:"DUB",
    Distance:347.538,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NCL",
    To:"DUS",
    Distance:700.405,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"NCL",
    To:"DXB",
    Distance:5653.31,
    Airport:"Emirates"
}),
new Routes(
{
    From:"NCL",
    To:"DXB",
    Distance:5653.31,
    Airport:"Qantas"
}),
new Routes(
{
    From:"NCL",
    To:"FAO",
    Distance:2059.76,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"FAO",
    Distance:2059.76,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NCL",
    To:"FAO",
    Distance:2059.76,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCL",
    To:"FCO",
    Distance:1788.33,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"FUE",
    Distance:3113.47,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"NCL",
    To:"GRO",
    Distance:1496.37,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NCL",
    To:"HER",
    Distance:3002.25,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"HER",
    Distance:3002.25,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NCL",
    To:"IBZ",
    Distance:1811.97,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"IBZ",
    Distance:1811.97,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NCL",
    To:"IOM",
    Distance:216.769,
    Airport:"Star1 Airlines"
}),
new Routes(
{
    From:"NCL",
    To:"JER",
    Distance:649.124,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCL",
    To:"KRK",
    Distance:1545.46,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"LGW",
    Distance:443.927,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCL",
    To:"LHR",
    Distance:404.207,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NCL",
    To:"LHR",
    Distance:404.207,
    Airport:"British Airways"
}),
new Routes(
{
    From:"NCL",
    To:"LHR",
    Distance:404.207,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"NCL",
    To:"LPA",
    Distance:3209.44,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"MAH",
    Distance:1743.37,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"MJV",
    Distance:1920.65,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"MLA",
    Distance:2464.32,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"NCL",
    To:"MLA",
    Distance:2464.32,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCL",
    To:"NBE",
    Distance:2302.62,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"NCL",
    To:"NBE",
    Distance:2302.62,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"NCL",
    To:"NBE",
    Distance:2302.62,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NCL",
    To:"NCE",
    Distance:1417.71,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCL",
    To:"ORK",
    Distance:573.28,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"NCL",
    To:"PFO",
    Distance:3456.19,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"PFO",
    Distance:3456.19,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NCL",
    To:"PMI",
    Distance:1752.81,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"PMI",
    Distance:1752.81,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"NCL",
    To:"PMI",
    Distance:1752.81,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NCL",
    To:"PMI",
    Distance:1752.81,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NCL",
    To:"PRG",
    Distance:1206.01,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"PSA",
    Distance:1531.45,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"REU",
    Distance:1558.7,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"RHO",
    Distance:3062.27,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"RHO",
    Distance:3062.27,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NCL",
    To:"SOU",
    Distance:455.031,
    Airport:"Flybe"
}),
new Routes(
{
    From:"NCL",
    To:"SSH",
    Distance:4169.02,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"NCL",
    To:"SVG",
    Distance:615.59,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"NCL",
    To:"SVG",
    Distance:615.59,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"NCL",
    To:"SVG",
    Distance:615.59,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"NCL",
    To:"TFS",
    Distance:3231.48,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCL",
    To:"TFS",
    Distance:3231.48,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"NCL",
    To:"TFS",
    Distance:3231.48,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"NCL",
    To:"TFS",
    Distance:3231.48,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NCL",
    To:"VCE",
    Distance:1450.65,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"NCU",
    To:"DME",
    Distance:2123.46,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"NCU",
    To:"DME",
    Distance:2123.46,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"NCU",
    To:"TAS",
    Distance:810.812,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"NCU",
    To:"VKO",
    Distance:2168.57,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"NDB",
    To:"LPA",
    Distance:795.783,
    Airport:"Mauritania Airlines International"
}),
new Routes(
{
    From:"NDB",
    To:"LPA",
    Distance:795.783,
    Airport:"Tropic Air"
}),
new Routes(
{
    From:"NDB",
    To:"NKC",
    Distance:335.031,
    Airport:"Mauritania Airlines International"
}),
new Routes(
{
    From:"NDG",
    To:"NAY",
    Distance:1026.72,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NDG",
    To:"NAY",
    Distance:1026.72,
    Airport:"China United"
}),
new Routes(
{
    From:"NDG",
    To:"PEK",
    Distance:989.895,
    Airport:"Air China"
}),
new Routes(
{
    From:"NDG",
    To:"PEK",
    Distance:989.895,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NDG",
    To:"PEK",
    Distance:989.895,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NDG",
    To:"PVG",
    Distance:1798.88,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NDG",
    To:"TAO",
    Distance:1254.75,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NDG",
    To:"TAO",
    Distance:1254.75,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"NDJ",
    To:"ABV",
    Distance:917.695,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"NDJ",
    To:"ADD",
    Distance:2620.46,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"NDJ",
    To:"CDG",
    Distance:4259.11,
    Airport:"Air France"
}),
new Routes(
{
    From:"NDJ",
    To:"DLA",
    Distance:1076.33,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"NDJ",
    To:"IST",
    Distance:3477.49,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"NDJ",
    To:"KAN",
    Distance:707.804,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"NDJ",
    To:"NGE",
    Distance:555.173,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"NDJ",
    To:"NIM",
    Distance:1401.21,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"NDJ",
    To:"NSI",
    Distance:1010.65,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"NDR",
    To:"AMS",
    Distance:2022.51,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"NDR",
    To:"AMS",
    Distance:2022.51,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"NDR",
    To:"BCN",
    Distance:831.171,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"NDR",
    To:"BCN",
    Distance:831.171,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"NDR",
    To:"BCN",
    Distance:831.171,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"NDR",
    To:"BCN",
    Distance:831.171,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NDR",
    To:"BRU",
    Distance:1869.69,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"NDR",
    To:"BRU",
    Distance:1869.69,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"NDR",
    To:"BVA",
    Distance:1662.27,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NDR",
    To:"CGN",
    Distance:1945.74,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"NDR",
    To:"CGN",
    Distance:1945.74,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"NDR",
    To:"CMN",
    Distance:456.665,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"NDR",
    To:"CRL",
    Distance:1823.29,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NDR",
    To:"FRA",
    Distance:1917.28,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"NDR",
    To:"HHN",
    Distance:1861.34,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NDR",
    To:"MPL",
    Distance:1127.67,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"NDR",
    To:"MRS",
    Distance:1176.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NDR",
    To:"PMI",
    Distance:718.749,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"NDU",
    To:"ERS",
    Distance:586.267,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"NDU",
    To:"MPA",
    Distance:473.256,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"NDY",
    To:"KOI",
    Distance:37.5423,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"NDY",
    To:"SOY",
    Distance:11.1877,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"NEV",
    To:"ANU",
    Distance:85.0397,
    Airport:"Sibaviatrans"
}),
new Routes(
{
    From:"NEV",
    To:"SJU",
    Distance:386.348,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"NEV",
    To:"SJU",
    Distance:386.348,
    Airport:"T.J. Air"
}),
new Routes(
{
    From:"NEV",
    To:"SJU",
    Distance:386.348,
    Airport:"TUR Avrupa Hava YollarÄ±"
}),
new Routes(
{
    From:"NEV",
    To:"SKB",
    Distance:18.0199,
    Airport:"Seaborne Airlines"
}),
new Routes(
{
    From:"NEV",
    To:"SKB",
    Distance:18.0199,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"NEV",
    To:"STT",
    Distance:282.008,
    Airport:"TUR Avrupa Hava YollarÄ±"
}),
new Routes(
{
    From:"NEV",
    To:"SXM",
    Distance:107.944,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"NGB",
    To:"BKK",
    Distance:2783.51,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"CAN",
    Distance:1081.23,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"CAN",
    Distance:1081.23,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"CAN",
    Distance:1081.23,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"CGO",
    Distance:886.552,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"CGQ",
    Distance:1559.04,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"CGQ",
    Distance:1559.04,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"CJU",
    Distance:627.979,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"CKG",
    Distance:1429.47,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"CKG",
    Distance:1429.47,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"CKG",
    Distance:1429.47,
    Airport:"West Air China"
}),
new Routes(
{
    From:"NGB",
    To:"CSX",
    Distance:821.739,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"CSX",
    Distance:821.739,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"CSX",
    Distance:821.739,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"NGB",
    To:"CSX",
    Distance:821.739,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"CSX",
    Distance:821.739,
    Airport:"West Air China"
}),
new Routes(
{
    From:"NGB",
    To:"CTU",
    Distance:1683.56,
    Airport:"Air China"
}),
new Routes(
{
    From:"NGB",
    To:"CTU",
    Distance:1683.56,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"CTU",
    Distance:1683.56,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"DLC",
    Distance:1016.23,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"DLC",
    Distance:1016.23,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"DLC",
    Distance:1016.23,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"NGB",
    To:"DLC",
    Distance:1016.23,
    Airport:"Starline.kz"
}),
new Routes(
{
    From:"NGB",
    To:"DMK",
    Distance:2776.92,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"NGB",
    To:"HAK",
    Distance:1560.78,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"NGB",
    To:"HAK",
    Distance:1560.78,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"HKG",
    Distance:1124.95,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"NGB",
    To:"HKG",
    Distance:1124.95,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"HKG",
    Distance:1124.95,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"NGB",
    To:"HKG",
    Distance:1124.95,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"HRB",
    Distance:1805.41,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"HRB",
    Distance:1805.41,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"ICN",
    Distance:966.75,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"KHH",
    Distance:813.697,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"NGB",
    To:"KHN",
    Distance:549.535,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"KHN",
    Distance:549.535,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"KMG",
    Distance:1921.69,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"KMG",
    Distance:1921.69,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"KWL",
    Distance:1236.63,
    Airport:"Air China"
}),
new Routes(
{
    From:"NGB",
    To:"KWL",
    Distance:1236.63,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"KWL",
    Distance:1236.63,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"NGB",
    To:"KWL",
    Distance:1236.63,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"LJG",
    Distance:2099.83,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"NGB",
    To:"MFM",
    Distance:1160.08,
    Airport:"Air China"
}),
new Routes(
{
    From:"NGB",
    To:"MFM",
    Distance:1160.08,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"NGB",
    To:"NAY",
    Distance:1199.49,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"NAY",
    Distance:1199.49,
    Airport:"China United"
}),
new Routes(
{
    From:"NGB",
    To:"PEK",
    Distance:1223.17,
    Airport:"Air China"
}),
new Routes(
{
    From:"NGB",
    To:"PEK",
    Distance:1223.17,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"PEK",
    Distance:1223.17,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"PEK",
    Distance:1223.17,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"PEK",
    Distance:1223.17,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"RMQ",
    Distance:624.047,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"RMQ",
    Distance:624.047,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"NGB",
    To:"SHE",
    Distance:1295.43,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"SIN",
    Distance:3665.35,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"NGB",
    To:"SJW",
    Distance:1127.05,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"SWA",
    Distance:857.871,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NGB",
    To:"SWA",
    Distance:857.871,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"SYX",
    Distance:1769.09,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"NGB",
    To:"SYX",
    Distance:1769.09,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"SZX",
    Distance:1104.37,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"SZX",
    Distance:1104.37,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"SZX",
    Distance:1104.37,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"SZX",
    Distance:1104.37,
    Airport:"Starline.kz"
}),
new Routes(
{
    From:"NGB",
    To:"TAO",
    Distance:723.153,
    Airport:"Air China"
}),
new Routes(
{
    From:"NGB",
    To:"TAO",
    Distance:723.153,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"TAO",
    Distance:723.153,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"TAO",
    Distance:723.153,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"TAO",
    Distance:723.153,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"TPE",
    Distance:528.542,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"TPE",
    Distance:528.542,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"TPE",
    Distance:528.542,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"NGB",
    To:"TSN",
    Distance:1100.19,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NGB",
    To:"TSN",
    Distance:1100.19,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"NGB",
    To:"WEF",
    Distance:788.953,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"WUH",
    Distance:704.318,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"WUH",
    Distance:704.318,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"XIY",
    Distance:1301.1,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"XMN",
    Distance:673.542,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"XMN",
    Distance:673.542,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"XMN",
    Distance:673.542,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"NGB",
    To:"YIH",
    Distance:966.8,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"NGB",
    To:"ZUH",
    Distance:1186.67,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"NGE",
    To:"NSI",
    Distance:461.081,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"NGO",
    To:"AKJ",
    Distance:1093,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"AXT",
    Distance:609.062,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"BKK",
    Distance:4310.44,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"BKK",
    Distance:4310.44,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"BKK",
    Distance:4310.44,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"NGO",
    To:"CJU",
    Distance:959.873,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"NGO",
    To:"CTS",
    Distance:976.379,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"CTS",
    Distance:976.379,
    Airport:"Genesis"
}),
new Routes(
{
    From:"NGO",
    To:"CTS",
    Distance:976.379,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"CTS",
    Distance:976.379,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"DLC",
    Distance:1429.98,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"DTW",
    Distance:10520.8,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NGO",
    To:"FRA",
    Distance:9295.36,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"FRA",
    Distance:9295.36,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"NGO",
    To:"FUK",
    Distance:601.04,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"FUK",
    Distance:601.04,
    Airport:"Genesis"
}),
new Routes(
{
    From:"NGO",
    To:"FUK",
    Distance:601.04,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"GMP",
    Distance:946.775,
    Airport:"Jeju Air"
}),
new Routes(
{
    From:"NGO",
    To:"GUM",
    Distance:2508.73,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"GUM",
    Distance:2508.73,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NGO",
    To:"GUM",
    Distance:2508.73,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"HAN",
    Distance:3379.69,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"HAN",
    Distance:3379.69,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"HEL",
    Distance:7760.9,
    Airport:"Finnair"
}),
new Routes(
{
    From:"NGO",
    To:"HEL",
    Distance:7760.9,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"HKD",
    Distance:844.39,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"HKG",
    Distance:2624.81,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"HKG",
    Distance:2624.81,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"NGO",
    To:"HKG",
    Distance:2624.81,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"HND",
    Distance:281.017,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"HNL",
    Distance:6467.07,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"HNL",
    Distance:6467.07,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NGO",
    To:"HNL",
    Distance:6467.07,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"IBR",
    Distance:358.264,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"ICN",
    Distance:973.225,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"ICN",
    Distance:973.225,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"ICN",
    Distance:973.225,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"ICN",
    Distance:973.225,
    Airport:"Jeju Air"
}),
new Routes(
{
    From:"NGO",
    To:"ICN",
    Distance:973.225,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"NGO",
    To:"ICN",
    Distance:973.225,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"ISG",
    Distance:1686.83,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"KIJ",
    Distance:363.375,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"KMI",
    Distance:597.638,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"KMJ",
    Distance:593.559,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"KOJ",
    Distance:659.416,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"KOJ",
    Distance:659.416,
    Airport:"Genesis"
}),
new Routes(
{
    From:"NGO",
    To:"KUL",
    Distance:5085.38,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"NGO",
    To:"MMB",
    Distance:1184.85,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"MNL",
    Distance:2759.92,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"NGO",
    To:"MNL",
    Distance:2759.92,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NGO",
    To:"MNL",
    Distance:2759.92,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"MYJ",
    Distance:393.965,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"NGS",
    Distance:671.609,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"NRT",
    Distance:340.173,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"NRT",
    Distance:340.173,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"NRT",
    Distance:340.173,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"OIT",
    Distance:490.772,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"OIT",
    Distance:490.772,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"OKA",
    Distance:1301.57,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"OKA",
    Distance:1301.57,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"NGO",
    To:"OKA",
    Distance:1301.57,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"PEK",
    Distance:1871.72,
    Airport:"Air China"
}),
new Routes(
{
    From:"NGO",
    To:"PEK",
    Distance:1871.72,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"PEK",
    Distance:1871.72,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"NGO",
    To:"PUS",
    Distance:717.122,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"PUS",
    Distance:717.122,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"NGO",
    To:"PVG",
    Distance:1456.89,
    Airport:"Air China"
}),
new Routes(
{
    From:"NGO",
    To:"PVG",
    Distance:1456.89,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"PVG",
    Distance:1456.89,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"PVG",
    Distance:1456.89,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"PVG",
    Distance:1456.89,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"SDJ",
    Distance:517.759,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"SDJ",
    Distance:517.759,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"SGN",
    Distance:4054.93,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"SHE",
    Distance:1384.67,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"SIN",
    Distance:5041.28,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGO",
    To:"SIN",
    Distance:5041.28,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"TAO",
    Distance:1492.67,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"TAO",
    Distance:1492.67,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"TPE",
    Distance:1848.95,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"NGO",
    To:"TPE",
    Distance:1848.95,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"TPE",
    Distance:1848.95,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"TSN",
    Distance:1788.21,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGO",
    To:"TSN",
    Distance:1788.21,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NGQ",
    To:"KHG",
    Distance:903.665,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGQ",
    To:"LXA",
    Distance:1083.43,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"NGS",
    To:"FUJ",
    Distance:104.803,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGS",
    To:"FUJ",
    Distance:104.803,
    Airport:"Catovair"
}),
new Routes(
{
    From:"NGS",
    To:"HND",
    Distance:952.626,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGS",
    To:"HND",
    Distance:952.626,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NGS",
    To:"ICN",
    Distance:595.905,
    Airport:"Jin Air"
}),
new Routes(
{
    From:"NGS",
    To:"IKI",
    Distance:93.2867,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGS",
    To:"IKI",
    Distance:93.2867,
    Airport:"Catovair"
}),
new Routes(
{
    From:"NGS",
    To:"ITM",
    Distance:550.757,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGS",
    To:"ITM",
    Distance:550.757,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NGS",
    To:"KIX",
    Distance:521.253,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"NGS",
    To:"NGO",
    Distance:671.609,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGS",
    To:"OKA",
    Distance:778.809,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGS",
    To:"PVG",
    Distance:789.152,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NGS",
    To:"PVG",
    Distance:789.152,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NGS",
    To:"TSJ",
    Distance:161.409,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NGS",
    To:"TSJ",
    Distance:161.409,
    Airport:"Catovair"
}),
new Routes(
{
    From:"NGS",
    To:"UKB",
    Distance:526.508,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"NHV",
    To:"AUQ",
    Distance:171.935,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"NHV",
    To:"PPT",
    Distance:1406.59,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"NHV",
    To:"UAH",
    Distance:75.98,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"NHV",
    To:"UAP",
    Distance:64.0103,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"NIM",
    To:"ABV",
    Distance:744.505,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"NIM",
    To:"ADD",
    Distance:4020.99,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"NIM",
    To:"ALG",
    Distance:2582.82,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"NIM",
    To:"CDG",
    Distance:3951.04,
    Airport:"Air France"
}),
new Routes(
{
    From:"NIM",
    To:"CDG",
    Distance:3951.04,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NIM",
    To:"CDG",
    Distance:3951.04,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NIM",
    To:"CMN",
    Distance:2422.36,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"NIM",
    To:"COO",
    Distance:792.493,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"NIM",
    To:"NDJ",
    Distance:1401.21,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"NIM",
    To:"OUA",
    Distance:419.758,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"NIM",
    To:"OUA",
    Distance:419.758,
    Airport:"Air France"
}),
new Routes(
{
    From:"NIM",
    To:"OUA",
    Distance:419.758,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NIM",
    To:"OUA",
    Distance:419.758,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"NIM",
    To:"OUA",
    Distance:419.758,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NIM",
    To:"OUA",
    Distance:419.758,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"NIM",
    To:"OUA",
    Distance:419.758,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"NIM",
    To:"OUA",
    Distance:419.758,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"NJC",
    To:"DME",
    Distance:2306.74,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"NJC",
    To:"DME",
    Distance:2306.74,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"NJC",
    To:"HMA",
    Distance:398.814,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"NJC",
    To:"LBD",
    Distance:2351.84,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"NJC",
    To:"OMS",
    Distance:690.826,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"NJC",
    To:"OVB",
    Distance:752.888,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"NJC",
    To:"OVB",
    Distance:752.888,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"NJC",
    To:"OVB",
    Distance:752.888,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"NJC",
    To:"SVO",
    Distance:2301.29,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"NJC",
    To:"SVX",
    Distance:1012.6,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"NJC",
    To:"SVX",
    Distance:1012.6,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"NJC",
    To:"TJM",
    Distance:761.087,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"NJC",
    To:"UUA",
    Distance:1557.17,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"NJC",
    To:"UUA",
    Distance:1557.17,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"NJF",
    To:"AMM",
    Distance:794.738,
    Airport:"Royal Falcon"
}),
new Routes(
{
    From:"NJF",
    To:"BAH",
    Distance:877.545,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"NJF",
    To:"BEY",
    Distance:856.506,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"NJF",
    To:"DOH",
    Distance:1023.42,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"NJF",
    To:"DXB",
    Distance:1304.86,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"NJF",
    To:"IKA",
    Distance:730.921,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"NJF",
    To:"IKA",
    Distance:730.921,
    Airport:"Mahan Air"
}),
new Routes(
{
    From:"NJF",
    To:"IST",
    Distance:1710.55,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"NJF",
    To:"KWI",
    Distance:459.198,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"NJF",
    To:"KWI",
    Distance:459.198,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"NJF",
    To:"SHJ",
    Distance:1311.98,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"NKC",
    To:"BKO",
    Distance:1057.25,
    Airport:"Mauritania Airlines International"
}),
new Routes(
{
    From:"NKC",
    To:"CDG",
    Distance:3818.25,
    Airport:"Air France"
}),
new Routes(
{
    From:"NKC",
    To:"CKY",
    Distance:980.411,
    Airport:"Air France"
}),
new Routes(
{
    From:"NKC",
    To:"CMN",
    Distance:1891.16,
    Airport:"Mauritania Airlines International"
}),
new Routes(
{
    From:"NKC",
    To:"CMN",
    Distance:1891.16,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"NKC",
    To:"DKR",
    Distance:408.025,
    Airport:"Mauritania Airlines International"
}),
new Routes(
{
    From:"NKC",
    To:"DKR",
    Distance:408.025,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"NKC",
    To:"DKR",
    Distance:408.025,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"NKC",
    To:"LPA",
    Distance:1095,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"NKC",
    To:"NDB",
    Distance:335.031,
    Airport:"Mauritania Airlines International"
}),
new Routes(
{
    From:"NKC",
    To:"TUN",
    Distance:3298.89,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"NKG",
    To:"BAV",
    Distance:1261.45,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CAN",
    Distance:1077.81,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"CAN",
    Distance:1077.81,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CAN",
    Distance:1077.81,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CAN",
    Distance:1077.81,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CAN",
    Distance:1077.81,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CAN",
    Distance:1077.81,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CGO",
    Distance:560.234,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CGQ",
    Distance:1421.93,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"CGQ",
    Distance:1421.93,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CGQ",
    Distance:1421.93,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CGQ",
    Distance:1421.93,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CGQ",
    Distance:1421.93,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CGQ",
    Distance:1421.93,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CIF",
    Distance:1166.77,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CKG",
    Distance:1188.8,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"CKG",
    Distance:1188.8,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CKG",
    Distance:1188.8,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CKG",
    Distance:1188.8,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CKG",
    Distance:1188.8,
    Airport:"West Air China"
}),
new Routes(
{
    From:"NKG",
    To:"CSX",
    Distance:671.758,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"NKG",
    To:"CSX",
    Distance:671.758,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CSX",
    Distance:671.758,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CSX",
    Distance:671.758,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"NKG",
    To:"CSX",
    Distance:671.758,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"NKG",
    To:"CSX",
    Distance:671.758,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CTU",
    Distance:1423.95,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"CTU",
    Distance:1423.95,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CTU",
    Distance:1423.95,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"NKG",
    To:"CTU",
    Distance:1423.95,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"CTU",
    Distance:1423.95,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"DLC",
    Distance:838.988,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"DLC",
    Distance:838.988,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"DLC",
    Distance:838.988,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"DLC",
    Distance:838.988,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"DLC",
    Distance:838.988,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"DSN",
    Distance:1201.57,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NKG",
    To:"DYG",
    Distance:858.636,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"DYG",
    Distance:858.636,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"FOC",
    Distance:650.398,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"FOC",
    Distance:650.398,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"FOC",
    Distance:650.398,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"FOC",
    Distance:650.398,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"FOC",
    Distance:650.398,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"FOC",
    Distance:650.398,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"FOC",
    Distance:650.398,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"FOC",
    Distance:650.398,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"FRA",
    Distance:8637.08,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"FRA",
    Distance:8637.08,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"NKG",
    To:"HAK",
    Distance:1557.69,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"HAK",
    Distance:1557.69,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"HAK",
    Distance:1557.69,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"HAK",
    Distance:1557.69,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"NKG",
    To:"HAK",
    Distance:1557.69,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"HET",
    Distance:1192.25,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"HET",
    Distance:1192.25,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"HET",
    Distance:1192.25,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"HKG",
    Distance:1157.32,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"NKG",
    To:"HKG",
    Distance:1157.32,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"HKG",
    Distance:1157.32,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"NKG",
    To:"HKG",
    Distance:1157.32,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"HKG",
    Distance:1157.32,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"HKG",
    Distance:1157.32,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"HRB",
    Distance:1669.63,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"HRB",
    Distance:1669.63,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"HRB",
    Distance:1669.63,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"ICN",
    Distance:941.641,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"ICN",
    Distance:941.641,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"INC",
    Distance:1386.6,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"INC",
    Distance:1386.6,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"JJN",
    Distance:772.778,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"JJN",
    Distance:772.778,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"JJN",
    Distance:772.778,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"KHH",
    Distance:1029.63,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"KHN",
    Distance:427.978,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"KHN",
    Distance:427.978,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"KIX",
    Distance:1553.45,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"KIX",
    Distance:1553.45,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"KMG",
    Distance:1743.94,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"KMG",
    Distance:1743.94,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"KMG",
    Distance:1743.94,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"KMG",
    Distance:1743.94,
    Airport:"KSY"
}),
new Routes(
{
    From:"NKG",
    To:"KMG",
    Distance:1743.94,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"NKG",
    To:"KMG",
    Distance:1743.94,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"KMG",
    Distance:1743.94,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"KMG",
    Distance:1743.94,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"KWE",
    Distance:1305.35,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"KWE",
    Distance:1305.35,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"NKG",
    To:"KWE",
    Distance:1305.35,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"KWE",
    Distance:1305.35,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"KWL",
    Distance:1126.06,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"KWL",
    Distance:1126.06,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"KWL",
    Distance:1126.06,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"KWL",
    Distance:1126.06,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"LHW",
    Distance:1486.29,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"LJG",
    Distance:1882.41,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"NKG",
    To:"LJG",
    Distance:1882.41,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"NKG",
    To:"MFM",
    Distance:1187.21,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"MFM",
    Distance:1187.21,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"NKG",
    To:"MIG",
    Distance:1337.1,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"NNG",
    Distance:1464.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"NNG",
    Distance:1464.48,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"NNG",
    Distance:1464.48,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"NRT",
    Distance:2035.12,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"NRT",
    Distance:2035.12,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"PEK",
    Distance:949.466,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"PEK",
    Distance:949.466,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"PEK",
    Distance:949.466,
    Airport:"Qantas"
}),
new Routes(
{
    From:"NKG",
    To:"PEK",
    Distance:949.466,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"PUS",
    Distance:1009.22,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"PUS",
    Distance:1009.22,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"NKG",
    To:"PVG",
    Distance:287.027,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"RMQ",
    Distance:849.136,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"NKG",
    To:"SHE",
    Distance:1142.15,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"SHE",
    Distance:1142.15,
    Airport:"China SSS"
}),
new Routes(
{
    From:"NKG",
    To:"SHE",
    Distance:1142.15,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"SHE",
    Distance:1142.15,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"NKG",
    To:"SHE",
    Distance:1142.15,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"SHE",
    Distance:1142.15,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"SIN",
    Distance:3722.3,
    Airport:"Scoot"
}),
new Routes(
{
    From:"NKG",
    To:"SJW",
    Distance:819.804,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"SJW",
    Distance:819.804,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"SWA",
    Distance:952.055,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NKG",
    To:"SWA",
    Distance:952.055,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"SYD",
    Distance:8050.06,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"SYD",
    Distance:8050.06,
    Airport:"Qantas"
}),
new Routes(
{
    From:"NKG",
    To:"SYX",
    Distance:1769.87,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"SYX",
    Distance:1769.87,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"NKG",
    To:"SYX",
    Distance:1769.87,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"SZX",
    Distance:1128.34,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"SZX",
    Distance:1128.34,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"SZX",
    Distance:1128.34,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"SZX",
    Distance:1128.34,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"SZX",
    Distance:1128.34,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"TAO",
    Distance:521.991,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"TAO",
    Distance:521.991,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"TAO",
    Distance:521.991,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"TGO",
    Distance:1345.88,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"TPE",
    Distance:776.393,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"TPE",
    Distance:776.393,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"TPE",
    Distance:776.393,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"NKG",
    To:"TYN",
    Distance:877.156,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"TYN",
    Distance:877.156,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"TYN",
    Distance:877.156,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"URC",
    Distance:3045.81,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"XIY",
    Distance:988.173,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"XIY",
    Distance:988.173,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"XIY",
    Distance:988.173,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"XIY",
    Distance:988.173,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"XIY",
    Distance:988.173,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"XIY",
    Distance:988.173,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"XMN",
    Distance:803.605,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"XMN",
    Distance:803.605,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NKG",
    To:"XMN",
    Distance:803.605,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"XMN",
    Distance:803.605,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"XMN",
    Distance:803.605,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"XMN",
    Distance:803.605,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"XMN",
    Distance:803.605,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"XMN",
    Distance:803.605,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"XNN",
    Distance:1634.22,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"NKG",
    To:"YCU",
    Distance:816.065,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"YNT",
    Distance:669.879,
    Airport:"Air China"
}),
new Routes(
{
    From:"NKG",
    To:"YNT",
    Distance:669.879,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"NKG",
    To:"YNT",
    Distance:669.879,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NKM",
    To:"AOJ",
    Distance:692.801,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"NKM",
    To:"GAJ",
    Distance:466.132,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"NKM",
    To:"HNA",
    Distance:594.797,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"NKM",
    To:"KCZ",
    Distance:353.9,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"NKM",
    To:"KIJ",
    Distance:320.942,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"NKM",
    To:"KMJ",
    Distance:620.267,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"NLA",
    To:"ADD",
    Distance:2687.74,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"NLA",
    To:"FBM",
    Distance:199.123,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NLA",
    To:"FBM",
    Distance:199.123,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NLA",
    To:"JNB",
    Distance:1461.87,
    Airport:"Interair South Africa"
}),
new Routes(
{
    From:"NLA",
    To:"JNB",
    Distance:1461.87,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"NLA",
    To:"LUN",
    Distance:260.39,
    Airport:"Proflight Commuter Services"
}),
new Routes(
{
    From:"NLA",
    To:"NBO",
    Distance:1585.7,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NLA",
    To:"NBO",
    Distance:1585.7,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NLA",
    To:"SLI",
    Distance:265.886,
    Airport:"Proflight Commuter Services"
}),
new Routes(
{
    From:"NLD",
    To:"MEX",
    Distance:891.853,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"NLG",
    To:"CDB",
    Distance:132.682,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"NLK",
    To:"AKL",
    Distance:1091.44,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"NLK",
    To:"BNE",
    Distance:1462.91,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"NLK",
    To:"SYD",
    Distance:1677.77,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"NLT",
    To:"URC",
    Distance:333.435,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NLT",
    To:"URC",
    Distance:333.435,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NMA",
    To:"CEK",
    Distance:1754.34,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"NMA",
    To:"DME",
    Distance:2921.85,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"NMA",
    To:"DME",
    Distance:2921.85,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"NMA",
    To:"GOJ",
    Distance:2622.49,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"NMA",
    To:"KJA",
    Distance:2267.22,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"NMA",
    To:"KRR",
    Distance:2653.27,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"NMA",
    To:"LED",
    Distance:3508.78,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"NMA",
    To:"LED",
    Distance:3508.78,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"NMA",
    To:"OVB",
    Distance:1759.9,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"NMA",
    To:"SVX",
    Distance:1915.44,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"NMA",
    To:"SVX",
    Distance:1915.44,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"NMA",
    To:"TAS",
    Distance:193.01,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"NME",
    To:"OOK",
    Distance:22.5499,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"NME",
    To:"OOK",
    Distance:22.5499,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"NME",
    To:"TNK",
    Distance:33.3227,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"NNB",
    To:"HIR",
    Distance:306.44,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"NNB",
    To:"IRA",
    Distance:75.2064,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"BKK",
    Distance:1264.6,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"BKK",
    Distance:1264.6,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"CAN",
    Distance:531.871,
    Airport:"Air China"
}),
new Routes(
{
    From:"NNG",
    To:"CAN",
    Distance:531.871,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"CAN",
    Distance:531.871,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"CGO",
    Distance:1434.77,
    Airport:"Air China"
}),
new Routes(
{
    From:"NNG",
    To:"CGO",
    Distance:1434.77,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NNG",
    To:"CGO",
    Distance:1434.77,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"CGO",
    Distance:1434.77,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"CKG",
    Distance:805.293,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"CKG",
    Distance:805.293,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"CKG",
    Distance:805.293,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"NNG",
    To:"CKG",
    Distance:805.293,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"CSX",
    Distance:801.098,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NNG",
    To:"CSX",
    Distance:801.098,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"CSX",
    Distance:801.098,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"CSX",
    Distance:801.098,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"CTU",
    Distance:980.53,
    Airport:"Air China"
}),
new Routes(
{
    From:"NNG",
    To:"CTU",
    Distance:980.53,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"CTU",
    Distance:980.53,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"FOC",
    Distance:1221.54,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"NNG",
    To:"FOC",
    Distance:1221.54,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"FOC",
    Distance:1221.54,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"FOC",
    Distance:1221.54,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"HAK",
    Distance:380.116,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NNG",
    To:"HAK",
    Distance:380.116,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"HAK",
    Distance:380.116,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"HAK",
    Distance:380.116,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"HAN",
    Distance:288.651,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"HFE",
    Distance:1360.62,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NNG",
    To:"HGH",
    Distance:1484.67,
    Airport:"Air China"
}),
new Routes(
{
    From:"NNG",
    To:"HGH",
    Distance:1484.67,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"HGH",
    Distance:1484.67,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"HGH",
    Distance:1484.67,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"HKG",
    Distance:590.974,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"JJN",
    Distance:1087.88,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NNG",
    To:"KHH",
    Distance:1249.83,
    Airport:"Primaris Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"KHH",
    Distance:1249.83,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"NNG",
    To:"KHN",
    Distance:1040.17,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NNG",
    To:"KHN",
    Distance:1040.17,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"KHN",
    Distance:1040.17,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"KMG",
    Distance:612.567,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NNG",
    To:"KMG",
    Distance:612.567,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"NNG",
    To:"KMG",
    Distance:612.567,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"KMG",
    Distance:612.567,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"KMG",
    Distance:612.567,
    Airport:"KSY"
}),
new Routes(
{
    From:"NNG",
    To:"KMG",
    Distance:612.567,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"KUL",
    Distance:2316,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"NNG",
    To:"KWE",
    Distance:458.497,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NNG",
    To:"KWE",
    Distance:458.497,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"KWL",
    Distance:346.718,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"KWL",
    Distance:346.718,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"LHW",
    Distance:1565.06,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"NNG",
    To:"LJG",
    Distance:931.702,
    Airport:"KSY"
}),
new Routes(
{
    From:"NNG",
    To:"LZO",
    Distance:747.948,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NNG",
    To:"MFM",
    Distance:559.493,
    Airport:"Air China"
}),
new Routes(
{
    From:"NNG",
    To:"MFM",
    Distance:559.493,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"NNG",
    To:"NKG",
    Distance:1464.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"NNG",
    To:"NKG",
    Distance:1464.48,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"NKG",
    Distance:1464.48,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"PEK",
    Distance:2098.04,
    Airport:"Air China"
}),
new Routes(
{
    From:"NNG",
    To:"PEK",
    Distance:2098.04,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"PEK",
    Distance:2098.04,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"PEK",
    Distance:2098.04,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"PNH",
    Distance:1279.67,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"PVG",
    Distance:1649.63,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"PVG",
    Distance:1649.63,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"PVG",
    Distance:1649.63,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"RGN",
    Distance:1409.5,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"RMQ",
    Distance:1282.8,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"NNG",
    To:"SGN",
    Distance:1320.85,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"SHA",
    Distance:1615.23,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"SHA",
    Distance:1615.23,
    Airport:"China SSS"
}),
new Routes(
{
    From:"NNG",
    To:"SHA",
    Distance:1615.23,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"SHA",
    Distance:1615.23,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"SHA",
    Distance:1615.23,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"SIN",
    Distance:2406.52,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"SWA",
    Distance:875.38,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"SYX",
    Distance:495.844,
    Airport:"Air China"
}),
new Routes(
{
    From:"NNG",
    To:"SYX",
    Distance:495.844,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"SYX",
    Distance:495.844,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"NNG",
    To:"SYX",
    Distance:495.844,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"SZX",
    Distance:578.675,
    Airport:"Air China"
}),
new Routes(
{
    From:"NNG",
    To:"SZX",
    Distance:578.675,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"SZX",
    Distance:578.675,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"NNG",
    To:"SZX",
    Distance:578.675,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"SZX",
    Distance:578.675,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"TPE",
    Distance:1355.77,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"TPE",
    Distance:1355.77,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"TSA",
    Distance:1387.45,
    Airport:"Primaris Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"VTE",
    Distance:778.338,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"WNZ",
    Distance:1403.75,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NNG",
    To:"WUH",
    Distance:1088.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"NNG",
    To:"WUH",
    Distance:1088.48,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NNG",
    To:"WUH",
    Distance:1088.48,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"WUH",
    Distance:1088.48,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"WUH",
    Distance:1088.48,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"WUH",
    Distance:1088.48,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"WUH",
    Distance:1088.48,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"WUZ",
    Distance:328.55,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"NNG",
    To:"XIY",
    Distance:1317.63,
    Airport:"Air China"
}),
new Routes(
{
    From:"NNG",
    To:"XIY",
    Distance:1317.63,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NNG",
    To:"XIY",
    Distance:1317.63,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"XIY",
    Distance:1317.63,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"NNG",
    To:"XIY",
    Distance:1317.63,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"XMN",
    Distance:1036.89,
    Airport:"Air China"
}),
new Routes(
{
    From:"NNG",
    To:"XMN",
    Distance:1036.89,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"XMN",
    Distance:1036.89,
    Airport:"KSY"
}),
new Routes(
{
    From:"NNG",
    To:"XMN",
    Distance:1036.89,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"XMN",
    Distance:1036.89,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"XMN",
    Distance:1036.89,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"ZUH",
    Distance:539.444,
    Airport:"Air China"
}),
new Routes(
{
    From:"NNG",
    To:"ZUH",
    Distance:539.444,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"NNG",
    To:"ZUH",
    Distance:539.444,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NNM",
    To:"ARH",
    Distance:663.023,
    Airport:"Aeroflot-Nord"
}),
new Routes(
{
    From:"NNM",
    To:"ARH",
    Distance:663.023,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"NNM",
    To:"KVX",
    Distance:1004.27,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"NNM",
    To:"SCW",
    Distance:646.11,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"NNT",
    To:"CNX",
    Distance:191.727,
    Airport:"Zambia Skyways"
}),
new Routes(
{
    From:"NNT",
    To:"DMK",
    Distance:544.662,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"NNY",
    To:"CAN",
    Distance:1068.27,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNY",
    To:"CGO",
    Distance:205.242,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNY",
    To:"CTU",
    Distance:861.446,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNY",
    To:"HGH",
    Distance:800.941,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNY",
    To:"NAY",
    Distance:828.079,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NNY",
    To:"NAY",
    Distance:828.079,
    Airport:"China United"
}),
new Routes(
{
    From:"NNY",
    To:"SHA",
    Distance:844.899,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NNY",
    To:"SZX",
    Distance:1155.89,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NOB",
    To:"TMU",
    Distance:74.8591,
    Airport:"CAL Cargo Air Lines"
}),
new Routes(
{
    From:"NOC",
    To:"ACE",
    Distance:2802.98,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NOC",
    To:"AGP",
    Distance:1945.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NOC",
    To:"ALC",
    Distance:1847.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NOC",
    To:"BHX",
    Distance:497.948,
    Airport:"Flybe"
}),
new Routes(
{
    From:"NOC",
    To:"BRS",
    Distance:498.052,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NOC",
    To:"EIN",
    Distance:993.212,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NOC",
    To:"EMA",
    Distance:510.953,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NOC",
    To:"FAO",
    Distance:1879.88,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NOC",
    To:"KUN",
    Distance:2111.41,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NOC",
    To:"LGW",
    Distance:658.937,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"NOC",
    To:"LPL",
    Distance:398.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NOC",
    To:"LTN",
    Distance:609.922,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NOC",
    To:"MAN",
    Distance:435.704,
    Airport:"Flybe"
}),
new Routes(
{
    From:"NOC",
    To:"STN",
    Distance:647.134,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NOC",
    To:"TFS",
    Distance:2944.81,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NOJ",
    To:"DME",
    Distance:2244.47,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"NOJ",
    To:"SLY",
    Distance:558.665,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"NOJ",
    To:"SVX",
    Distance:1064.13,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"NOJ",
    To:"TJM",
    Distance:852.438,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"NOJ",
    To:"UFA",
    Distance:1451.5,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"NOS",
    To:"DIE",
    Distance:150.587,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"NOS",
    To:"RUN",
    Distance:1137.16,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"NOS",
    To:"TNR",
    Distance:616.393,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"NOU",
    To:"AKL",
    Distance:1860.28,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"NOU",
    To:"AKL",
    Distance:1860.28,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"NOU",
    To:"BNE",
    Distance:1450.25,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"NOU",
    To:"BNE",
    Distance:1450.25,
    Airport:"Qantas"
}),
new Routes(
{
    From:"NOU",
    To:"KIX",
    Distance:7078.83,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"NOU",
    To:"NAN",
    Distance:1265.66,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"NOU",
    To:"NRT",
    Distance:6976.26,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"NOU",
    To:"PPT",
    Distance:4633.24,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"NOU",
    To:"SYD",
    Distance:1980.61,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"NOU",
    To:"SYD",
    Distance:1980.61,
    Airport:"Qantas"
}),
new Routes(
{
    From:"NOU",
    To:"VLI",
    Distance:527.973,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"NOU",
    To:"VLI",
    Distance:527.973,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"NOU",
    To:"WLS",
    Distance:2101.17,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"NOV",
    To:"LAD",
    Distance:518.881,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"NOV",
    To:"SPP",
    Distance:295.029,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"NOV",
    To:"VPE",
    Distance:470.937,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"NOZ",
    To:"DME",
    Distance:3093.04,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"NOZ",
    To:"SVO",
    Distance:3104.21,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"NPE",
    To:"AKL",
    Distance:328.058,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"NPE",
    To:"CHC",
    Distance:574.933,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"NPE",
    To:"WLG",
    Distance:270.927,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"NPL",
    To:"AKL",
    Distance:228.831,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"NPL",
    To:"CHC",
    Distance:516.88,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"NPL",
    To:"WLG",
    Distance:263.247,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"NQN",
    To:"AEP",
    Distance:994.799,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"NQN",
    To:"AEP",
    Distance:994.799,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"NQN",
    To:"CRD",
    Distance:762.27,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"NQN",
    To:"CRD",
    Distance:762.27,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"NQN",
    To:"MDZ",
    Distance:682.622,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"NQN",
    To:"MDZ",
    Distance:682.622,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"NQU",
    To:"EOH",
    Distance:195.586,
    Airport:"SATENA"
}),
new Routes(
{
    From:"NQY",
    To:"DUS",
    Distance:829.948,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"NQY",
    To:"EXT",
    Distance:116.333,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"NQY",
    To:"ISC",
    Distance:109.964,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"NQY",
    To:"LGW",
    Distance:346.71,
    Airport:"British Airways"
}),
new Routes(
{
    From:"NQY",
    To:"LGW",
    Distance:346.71,
    Airport:"Flybe"
}),
new Routes(
{
    From:"NQY",
    To:"MAN",
    Distance:373.802,
    Airport:"Flybe"
}),
new Routes(
{
    From:"NRA",
    To:"GFF",
    Distance:64.6779,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"NRA",
    To:"SYD",
    Distance:436.542,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"NRK",
    To:"HEL",
    Distance:528.196,
    Airport:"Finnair"
}),
new Routes(
{
    From:"NRK",
    To:"HEL",
    Distance:528.196,
    Airport:"Flybe"
}),
new Routes(
{
    From:"NRL",
    To:"EOI",
    Distance:27.4787,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"NRL",
    To:"KOI",
    Distance:52.8675,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"NRL",
    To:"NDY",
    Distance:15.3296,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"NRL",
    To:"PPW",
    Distance:26.4576,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"NRN",
    To:"ACE",
    Distance:3004.24,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"AGP",
    Distance:1859.96,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"AHO",
    Distance:1230.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"ALC",
    Distance:1570.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"AOI",
    Distance:1038.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"BGY",
    Distance:709.047,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"BLQ",
    Distance:873.375,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"BRI",
    Distance:1417.2,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"BZR",
    Distance:943.921,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"CAG",
    Distance:1391.72,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"CFU",
    Distance:1705.25,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"CHQ",
    Distance:2288.76,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"CIA",
    Distance:1194.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"EDI",
    Distance:789.157,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"FAO",
    Distance:1965.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"FEZ",
    Distance:2159.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"FUE",
    Distance:3064.49,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"GRO",
    Distance:1108.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"IBZ",
    Distance:1463.05,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"LEI",
    Distance:1772.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"LPA",
    Distance:3185.45,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"LPP",
    Distance:1701.45,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"OPO",
    Distance:1611.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"OUD",
    Distance:1977.86,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"PMI",
    Distance:1365.44,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"PMO",
    Distance:1588.36,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"PSA",
    Distance:935.886,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"PSR",
    Distance:1186.34,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"RAK",
    Distance:2506.42,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"RIX",
    Distance:1295.08,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"SDR",
    Distance:1175.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"SKG",
    Distance:1782.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"STN",
    Distance:407.793,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"SUF",
    Distance:1614.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"TFS",
    Distance:3230.94,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"TSF",
    Distance:796.997,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"VLC",
    Distance:1440.81,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRN",
    To:"ZAD",
    Distance:1078.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NRT",
    To:"AKL",
    Distance:8836.29,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"NRT",
    To:"AKL",
    Distance:8836.29,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"AKL",
    Distance:8836.29,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"AMS",
    Distance:9318.79,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"ATL",
    Distance:11002.2,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NRT",
    To:"AUH",
    Distance:8088.47,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"AUH",
    Distance:8088.47,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"NRT",
    To:"BKI",
    Distance:4143.94,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"BKI",
    Distance:4143.94,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"BKK",
    Distance:4649.01,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"NRT",
    To:"BKK",
    Distance:4649.01,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"BKK",
    Distance:4649.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"BKK",
    Distance:4649.01,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"NRT",
    To:"BKK",
    Distance:4649.01,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NRT",
    To:"BKK",
    Distance:4649.01,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"BKK",
    Distance:4649.01,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"NRT",
    To:"BKK",
    Distance:4649.01,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"BOM",
    Distance:6786.22,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"BOM",
    Distance:6786.22,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"NRT",
    To:"BOS",
    Distance:10760.8,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"BOS",
    Distance:10760.8,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"CAN",
    Distance:2944.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"NRT",
    To:"CAN",
    Distance:2944.48,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"CAN",
    Distance:2944.48,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"CAN",
    Distance:2944.48,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"CAN",
    Distance:2944.48,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"CAN",
    Distance:2944.48,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"CDG",
    Distance:9709.94,
    Airport:"Air France"
}),
new Routes(
{
    From:"NRT",
    To:"CDG",
    Distance:9709.94,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"CDG",
    Distance:9709.94,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"CEB",
    Distance:3279.7,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"CGK",
    Distance:5838.96,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"CGK",
    Distance:5838.96,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"NRT",
    To:"CGK",
    Distance:5838.96,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"CGQ",
    Distance:1563.24,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"CJU",
    Distance:1294.33,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"CJU",
    Distance:1294.33,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"NRT",
    To:"CMB",
    Distance:6894.17,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"CNS",
    Distance:5881.73,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"CNS",
    Distance:5881.73,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"NRT",
    To:"CNS",
    Distance:5881.73,
    Airport:"Qantas"
}),
new Routes(
{
    From:"NRT",
    To:"CPH",
    Distance:8712.06,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"NRT",
    To:"CTS",
    Distance:787.563,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"CTS",
    Distance:787.563,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"CTS",
    Distance:787.563,
    Airport:"Arrow Air"
}),
new Routes(
{
    From:"NRT",
    To:"CTS",
    Distance:787.563,
    Airport:"Genesis"
}),
new Routes(
{
    From:"NRT",
    To:"CTS",
    Distance:787.563,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"CTS",
    Distance:787.563,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"CTU",
    Distance:3420.27,
    Airport:"Air China"
}),
new Routes(
{
    From:"NRT",
    To:"CTU",
    Distance:3420.27,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"DEL",
    Distance:5908.87,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"NRT",
    To:"DEL",
    Distance:5908.87,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"DEL",
    Distance:5908.87,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"DEN",
    Distance:9292.73,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"DEN",
    Distance:9292.73,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"DFW",
    Distance:10322.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"DFW",
    Distance:10322.3,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"DFW",
    Distance:10322.3,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"DFW",
    Distance:10322.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"NRT",
    To:"DLC",
    Distance:1699.99,
    Airport:"Air China"
}),
new Routes(
{
    From:"NRT",
    To:"DLC",
    Distance:1699.99,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"DLC",
    Distance:1699.99,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"DLC",
    Distance:1699.99,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"DLC",
    Distance:1699.99,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"DME",
    Distance:7513.21,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"DME",
    Distance:7513.21,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"DOH",
    Distance:8302.06,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"DOH",
    Distance:8302.06,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"DOH",
    Distance:8302.06,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"NRT",
    To:"DPS",
    Distance:5610.61,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"DPS",
    Distance:5610.61,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"NRT",
    To:"DTW",
    Distance:10272.1,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NRT",
    To:"DUS",
    Distance:9331.04,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"DUS",
    Distance:9331.04,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"NRT",
    To:"DXB",
    Distance:7979.21,
    Airport:"Emirates"
}),
new Routes(
{
    From:"NRT",
    To:"DXB",
    Distance:7979.21,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"EWR",
    Distance:10810.1,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"EWR",
    Distance:10810.1,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"FCO",
    Distance:9905.08,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NRT",
    To:"FRA",
    Distance:9368.44,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"FUK",
    Distance:939.835,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"FUK",
    Distance:939.835,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"FUK",
    Distance:939.835,
    Airport:"Genesis"
}),
new Routes(
{
    From:"NRT",
    To:"FUK",
    Distance:939.835,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"GUM",
    Distance:2516.52,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"GUM",
    Distance:2516.52,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NRT",
    To:"GUM",
    Distance:2516.52,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"GUM",
    Distance:2516.52,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"HAN",
    Distance:3719.86,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"HAN",
    Distance:3719.86,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"HAN",
    Distance:3719.86,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"HEL",
    Distance:7829.37,
    Airport:"Finnair"
}),
new Routes(
{
    From:"NRT",
    To:"HEL",
    Distance:7829.37,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"HGH",
    Distance:1955.62,
    Airport:"Air China"
}),
new Routes(
{
    From:"NRT",
    To:"HGH",
    Distance:1955.62,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"HIJ",
    Distance:694.982,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"HIJ",
    Distance:694.982,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"HKG",
    Distance:2962.21,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"HKG",
    Distance:2962.21,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"HKG",
    Distance:2962.21,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"NRT",
    To:"HKG",
    Distance:2962.21,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NRT",
    To:"HKG",
    Distance:2962.21,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"HNL",
    Distance:6136.14,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"HNL",
    Distance:6136.14,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"HNL",
    Distance:6136.14,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"HNL",
    Distance:6136.14,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NRT",
    To:"HNL",
    Distance:6136.14,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"HNL",
    Distance:6136.14,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"NRT",
    To:"HNL",
    Distance:6136.14,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"IAD",
    Distance:10844.6,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"IAD",
    Distance:10844.6,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"IAH",
    Distance:10669.3,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"IAH",
    Distance:10669.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"ICN",
    Distance:1256.92,
    Airport:"Air Tahiti Nui"
}),
new Routes(
{
    From:"NRT",
    To:"ICN",
    Distance:1256.92,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"ICN",
    Distance:1256.92,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"ICN",
    Distance:1256.92,
    Airport:"Arrow Air"
}),
new Routes(
{
    From:"NRT",
    To:"ICN",
    Distance:1256.92,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"ICN",
    Distance:1256.92,
    Airport:"Eastar Jet"
}),
new Routes(
{
    From:"NRT",
    To:"ICN",
    Distance:1256.92,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"ICN",
    Distance:1256.92,
    Airport:"Jeju Air"
}),
new Routes(
{
    From:"NRT",
    To:"ICN",
    Distance:1256.92,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"NRT",
    To:"ICN",
    Distance:1256.92,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"IST",
    Distance:8996.51,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"IST",
    Distance:8996.51,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"ITM",
    Distance:462.135,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"ITM",
    Distance:462.135,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"ITM",
    Distance:462.135,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"JFK",
    Distance:10830.4,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"JFK",
    Distance:10830.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"JFK",
    Distance:10830.4,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NRT",
    To:"JFK",
    Distance:10830.4,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"JFK",
    Distance:10830.4,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"KHH",
    Distance:2427.57,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"KHH",
    Distance:2427.57,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"KHH",
    Distance:2427.57,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"KHH",
    Distance:2427.57,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"NRT",
    To:"KHH",
    Distance:2427.57,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"KHV",
    Distance:1481.6,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"KHV",
    Distance:1481.6,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"KIJ",
    Distance:232.894,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"KIX",
    Distance:490.556,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"KIX",
    Distance:490.556,
    Airport:"Genesis"
}),
new Routes(
{
    From:"NRT",
    To:"KIX",
    Distance:490.556,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"NRT",
    To:"KIX",
    Distance:490.556,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"NRT",
    To:"KMQ",
    Distance:364.424,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"KMQ",
    Distance:364.424,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"KOJ",
    Distance:995.423,
    Airport:"Genesis"
}),
new Routes(
{
    From:"NRT",
    To:"KUL",
    Distance:5408.95,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"KUL",
    Distance:5408.95,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"KUL",
    Distance:5408.95,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"LAX",
    Distance:8753.78,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"NRT",
    To:"LAX",
    Distance:8753.78,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"LAX",
    Distance:8753.78,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"LAX",
    Distance:8753.78,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NRT",
    To:"LAX",
    Distance:8753.78,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"LAX",
    Distance:8753.78,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"LAX",
    Distance:8753.78,
    Airport:"US Airways"
}),
new Routes(
{
    From:"NRT",
    To:"LAX",
    Distance:8753.78,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"LHR",
    Distance:9590.86,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"LHR",
    Distance:9590.86,
    Airport:"British Airways"
}),
new Routes(
{
    From:"NRT",
    To:"LHR",
    Distance:9590.86,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"LHR",
    Distance:9590.86,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"NRT",
    To:"MEL",
    Distance:8178.84,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"NRT",
    To:"MEX",
    Distance:11253.7,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"NRT",
    To:"MFM",
    Distance:2999.51,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"NRT",
    To:"MFM",
    Distance:2999.51,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"MNL",
    Distance:3050.84,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"MNL",
    Distance:3050.84,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"NRT",
    To:"MNL",
    Distance:3050.84,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NRT",
    To:"MNL",
    Distance:3050.84,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"MNL",
    Distance:3050.84,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"MSP",
    Distance:9552.87,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NRT",
    To:"MXP",
    Distance:9748.52,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NRT",
    To:"MYJ",
    Distance:733.963,
    Airport:"Genesis"
}),
new Routes(
{
    From:"NRT",
    To:"NGO",
    Distance:340.173,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"NGO",
    Distance:340.173,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"NGO",
    Distance:340.173,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"NKG",
    Distance:2035.12,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"NKG",
    Distance:2035.12,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"NOU",
    Distance:6976.26,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"NRT",
    To:"OIT",
    Distance:830.877,
    Airport:"Genesis"
}),
new Routes(
{
    From:"NRT",
    To:"OKA",
    Distance:1612.01,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"OKA",
    Distance:1612.01,
    Airport:"Arrow Air"
}),
new Routes(
{
    From:"NRT",
    To:"OKA",
    Distance:1612.01,
    Airport:"Genesis"
}),
new Routes(
{
    From:"NRT",
    To:"OKA",
    Distance:1612.01,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"OKA",
    Distance:1612.01,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"OOL",
    Distance:7240.35,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"OOL",
    Distance:7240.35,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"NRT",
    To:"OOL",
    Distance:7240.35,
    Airport:"Qantas"
}),
new Routes(
{
    From:"NRT",
    To:"ORD",
    Distance:10074,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"ORD",
    Distance:10074,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"ORD",
    Distance:10074,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"ORD",
    Distance:10074,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"ORD",
    Distance:10074,
    Airport:"US Airways"
}),
new Routes(
{
    From:"NRT",
    To:"ORD",
    Distance:10074,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"PDX",
    Distance:7742.11,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NRT",
    To:"PEK",
    Distance:2135.28,
    Airport:"Air China"
}),
new Routes(
{
    From:"NRT",
    To:"PEK",
    Distance:2135.28,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"PEK",
    Distance:2135.28,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"PEK",
    Distance:2135.28,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"PEK",
    Distance:2135.28,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"PEK",
    Distance:2135.28,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"POM",
    Distance:5077.76,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"NRT",
    To:"PPT",
    Distance:9444.46,
    Airport:"Air Tahiti Nui"
}),
new Routes(
{
    From:"NRT",
    To:"PPT",
    Distance:9444.46,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"PUS",
    Distance:1038.16,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"NRT",
    To:"PUS",
    Distance:1038.16,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"PUS",
    Distance:1038.16,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"PUS",
    Distance:1038.16,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"PUS",
    Distance:1038.16,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"NRT",
    To:"PVG",
    Distance:1795.54,
    Airport:"Air China"
}),
new Routes(
{
    From:"NRT",
    To:"PVG",
    Distance:1795.54,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"PVG",
    Distance:1795.54,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"PVG",
    Distance:1795.54,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NRT",
    To:"PVG",
    Distance:1795.54,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"RGN",
    Distance:4830.75,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"ROR",
    Distance:3213.19,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NRT",
    To:"ROR",
    Distance:3213.19,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"SAN",
    Distance:8924.45,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"SAN",
    Distance:8924.45,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"SDJ",
    Distance:268.262,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"SEA",
    Distance:7655.9,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"SEA",
    Distance:7655.9,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NRT",
    To:"SEA",
    Distance:7655.9,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"SFO",
    Distance:8227.53,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"SFO",
    Distance:8227.53,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"SGN",
    Distance:4383.36,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"SGN",
    Distance:4383.36,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"SGN",
    Distance:4383.36,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"SGN",
    Distance:4383.36,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"SHE",
    Distance:1608.58,
    Airport:"Air China"
}),
new Routes(
{
    From:"NRT",
    To:"SHE",
    Distance:1608.58,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"SHE",
    Distance:1608.58,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"SHE",
    Distance:1608.58,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"SIN",
    Distance:5357.58,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"NRT",
    To:"SIN",
    Distance:5357.58,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"SIN",
    Distance:5357.58,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"SIN",
    Distance:5357.58,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NRT",
    To:"SIN",
    Distance:5357.58,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"SIN",
    Distance:5357.58,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"SIN",
    Distance:5357.58,
    Airport:"US Airways"
}),
new Routes(
{
    From:"NRT",
    To:"SIN",
    Distance:5357.58,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"SJC",
    Distance:8276.06,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"SJC",
    Distance:8276.06,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"SPN",
    Distance:2356.43,
    Airport:"Air France"
}),
new Routes(
{
    From:"NRT",
    To:"SPN",
    Distance:2356.43,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NRT",
    To:"SVO",
    Distance:7507.22,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"SYD",
    Distance:7832.15,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"SYD",
    Distance:7832.15,
    Airport:"Qantas"
}),
new Routes(
{
    From:"NRT",
    To:"TAK",
    Distance:605.298,
    Airport:"Genesis"
}),
new Routes(
{
    From:"NRT",
    To:"TAO",
    Distance:1797.56,
    Airport:"Air China"
}),
new Routes(
{
    From:"NRT",
    To:"TAO",
    Distance:1797.56,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"TAO",
    Distance:1797.56,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"TAS",
    Distance:6042.49,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"NRT",
    To:"TPE",
    Distance:2181.06,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"TPE",
    Distance:2181.06,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"TPE",
    Distance:2181.06,
    Airport:"Arrow Air"
}),
new Routes(
{
    From:"NRT",
    To:"TPE",
    Distance:2181.06,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"NRT",
    To:"TPE",
    Distance:2181.06,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"TPE",
    Distance:2181.06,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"NRT",
    To:"TPE",
    Distance:2181.06,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"NRT",
    To:"TPE",
    Distance:2181.06,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"TPE",
    Distance:2181.06,
    Airport:"Scoot"
}),
new Routes(
{
    From:"NRT",
    To:"TPE",
    Distance:2181.06,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"NRT",
    To:"ULN",
    Distance:3061.21,
    Airport:"MIAT Mongolian Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"UUS",
    Distance:1251.99,
    Airport:"Sat Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"VCE",
    Distance:9583.44,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NRT",
    To:"VIE",
    Distance:9154.05,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"VIE",
    Distance:9154.05,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"VVO",
    Distance:1102.94,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"VVO",
    Distance:1102.94,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"XMN",
    Distance:2468.3,
    Airport:"Air China"
}),
new Routes(
{
    From:"NRT",
    To:"XMN",
    Distance:2468.3,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"XMN",
    Distance:2468.3,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"YGJ",
    Distance:646.787,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"YVR",
    Distance:7503.37,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"NRT",
    To:"YVR",
    Distance:7503.37,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"YVR",
    Distance:7503.37,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"YVR",
    Distance:7503.37,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"NRT",
    To:"YYC",
    Distance:7945.69,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"NRT",
    To:"YYC",
    Distance:7945.69,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"YYZ",
    Distance:10299.6,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"NRT",
    To:"YYZ",
    Distance:10299.6,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"ZRH",
    Distance:9594.62,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NRT",
    To:"ZRH",
    Distance:9594.62,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"NSH",
    To:"MHD",
    Distance:732.831,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"NSH",
    To:"THR",
    Distance:109.17,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"NSI",
    To:"BRU",
    Distance:5287.47,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"NSI",
    To:"BRU",
    Distance:5287.47,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"NSI",
    To:"BRU",
    Distance:5287.47,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"NSI",
    To:"BRU",
    Distance:5287.47,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NSI",
    To:"CDG",
    Distance:5107.93,
    Airport:"Air France"
}),
new Routes(
{
    From:"NSI",
    To:"CDG",
    Distance:5107.93,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"NSI",
    To:"CMN",
    Distance:3848.63,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"NSI",
    To:"DLA",
    Distance:205.872,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"NSI",
    To:"DLA",
    Distance:205.872,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"NSI",
    To:"DLA",
    Distance:205.872,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"NSI",
    To:"DLA",
    Distance:205.872,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"NSI",
    To:"DLA",
    Distance:205.872,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"NSI",
    To:"DLA",
    Distance:205.872,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"NSI",
    To:"DLA",
    Distance:205.872,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"NSI",
    To:"GOU",
    Distance:655.626,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"NSI",
    To:"LBV",
    Distance:433.944,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"NSI",
    To:"NBO",
    Distance:2875.13,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"NSK",
    To:"ABA",
    Distance:1743.78,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"NSK",
    To:"AER",
    Distance:3915.02,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"NSK",
    To:"DME",
    Distance:2864.83,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"NSK",
    To:"DME",
    Distance:2864.83,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"NSK",
    To:"GOJ",
    Distance:2565.6,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"NSK",
    To:"KJA",
    Distance:1482.14,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"NSK",
    To:"KUF",
    Distance:2574.69,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"NSK",
    To:"LED",
    Distance:2797.28,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"NSK",
    To:"OVB",
    Distance:1607.25,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"NSK",
    To:"OVB",
    Distance:1607.25,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"NSK",
    To:"OVB",
    Distance:1607.25,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"NSK",
    To:"SVX",
    Distance:1904.78,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"NSK",
    To:"SVX",
    Distance:1904.78,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"NSK",
    To:"UFA",
    Distance:2274.99,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"NSK",
    To:"VKO",
    Distance:2874.01,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"NSN",
    To:"AKL",
    Distance:495.88,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"NSN",
    To:"CHC",
    Distance:250.11,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"NSN",
    To:"PMR",
    Distance:229.07,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"NSN",
    To:"WLG",
    Distance:132.347,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"NST",
    To:"DMK",
    Distance:601.79,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"NST",
    To:"DMK",
    Distance:601.79,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"NTE",
    To:"ADB",
    Distance:2529.85,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"NTE",
    To:"AGP",
    Distance:1189.16,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"NTE",
    To:"AGP",
    Distance:1189.16,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"NTE",
    To:"AJA",
    Distance:1008.26,
    Airport:"Air France"
}),
new Routes(
{
    From:"NTE",
    To:"AJA",
    Distance:1008.26,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTE",
    To:"AJA",
    Distance:1008.26,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"NTE",
    To:"AMS",
    Distance:733.268,
    Airport:"Air France"
}),
new Routes(
{
    From:"NTE",
    To:"AMS",
    Distance:733.268,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NTE",
    To:"ATH",
    Distance:2316.56,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"NTE",
    To:"ATH",
    Distance:2316.56,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NTE",
    To:"BCN",
    Distance:714.237,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"NTE",
    To:"BCN",
    Distance:714.237,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"NTE",
    To:"BIA",
    Distance:1011.79,
    Airport:"Air France"
}),
new Routes(
{
    From:"NTE",
    To:"BIA",
    Distance:1011.79,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTE",
    To:"BIA",
    Distance:1011.79,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"NTE",
    To:"BOD",
    Distance:267.597,
    Airport:"Air France"
}),
new Routes(
{
    From:"NTE",
    To:"BOD",
    Distance:267.597,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NTE",
    To:"BRU",
    Distance:608.886,
    Airport:"Air France"
}),
new Routes(
{
    From:"NTE",
    To:"BRU",
    Distance:608.886,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NTE",
    To:"BSL",
    Distance:689.596,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NTE",
    To:"CDG",
    Distance:371.782,
    Airport:"Air France"
}),
new Routes(
{
    From:"NTE",
    To:"CDG",
    Distance:371.782,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NTE",
    To:"CDG",
    Distance:371.782,
    Airport:"XL Airways France"
}),
new Routes(
{
    From:"NTE",
    To:"CLY",
    Distance:966.786,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTE",
    To:"CLY",
    Distance:966.786,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NTE",
    To:"CMN",
    Distance:1613.44,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"NTE",
    To:"DJE",
    Distance:1805.21,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"NTE",
    To:"DJE",
    Distance:1805.21,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NTE",
    To:"DJE",
    Distance:1805.21,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"NTE",
    To:"DUB",
    Distance:771.201,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NTE",
    To:"DUS",
    Distance:761.923,
    Airport:"Air France"
}),
new Routes(
{
    From:"NTE",
    To:"DUS",
    Distance:761.923,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NTE",
    To:"FCO",
    Distance:1247.74,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"NTE",
    To:"FCO",
    Distance:1247.74,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"NTE",
    To:"FCO",
    Distance:1247.74,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NTE",
    To:"FCO",
    Distance:1247.74,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NTE",
    To:"FEZ",
    Distance:1497.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NTE",
    To:"FLR",
    Distance:1064.54,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTE",
    To:"FSC",
    Distance:1057.04,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTE",
    To:"FSC",
    Distance:1057.04,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NTE",
    To:"FUE",
    Distance:2334.97,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTE",
    To:"GVA",
    Distance:597.216,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NTE",
    To:"HER",
    Distance:2577.51,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NTE",
    To:"LCY",
    Distance:498.727,
    Airport:"Air France"
}),
new Routes(
{
    From:"NTE",
    To:"LCY",
    Distance:498.727,
    Airport:"CityJet"
}),
new Routes(
{
    From:"NTE",
    To:"LGW",
    Distance:456.04,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NTE",
    To:"LIL",
    Distance:511.564,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NTE",
    To:"LIS",
    Distance:1113.03,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NTE",
    To:"LYS",
    Distance:537.263,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NTE",
    To:"LYS",
    Distance:537.263,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"NTE",
    To:"LYS",
    Distance:537.263,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NTE",
    To:"MAD",
    Distance:756.892,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"NTE",
    To:"MAN",
    Distance:691.077,
    Airport:"Air France"
}),
new Routes(
{
    From:"NTE",
    To:"MAN",
    Distance:691.077,
    Airport:"Flybe"
}),
new Routes(
{
    From:"NTE",
    To:"MIR",
    Distance:1629.08,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NTE",
    To:"MLA",
    Distance:1829.68,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NTE",
    To:"MPL",
    Distance:589.48,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTE",
    To:"MPL",
    Distance:589.48,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NTE",
    To:"MRS",
    Distance:674.731,
    Airport:"Air France"
}),
new Routes(
{
    From:"NTE",
    To:"MRS",
    Distance:674.731,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NTE",
    To:"MUC",
    Distance:1009.06,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTE",
    To:"MXP",
    Distance:810.145,
    Airport:"Air France"
}),
new Routes(
{
    From:"NTE",
    To:"MXP",
    Distance:810.145,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NTE",
    To:"MXP",
    Distance:810.145,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NTE",
    To:"NAP",
    Distance:1446.09,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTE",
    To:"NCE",
    Distance:790.415,
    Airport:"Air France"
}),
new Routes(
{
    From:"NTE",
    To:"NCE",
    Distance:790.415,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NTE",
    To:"OLB",
    Distance:1127.44,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTE",
    To:"OPO",
    Distance:864.622,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NTE",
    To:"ORY",
    Distance:343.478,
    Airport:"Air France"
}),
new Routes(
{
    From:"NTE",
    To:"PGF",
    Distance:604.046,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTE",
    To:"PMI",
    Distance:914.572,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTE",
    To:"PMO",
    Distance:1557.99,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTE",
    To:"PRG",
    Distance:1208.97,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTE",
    To:"RAK",
    Distance:1813.14,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"NTE",
    To:"RAK",
    Distance:1813.14,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NTE",
    To:"SOU",
    Distance:422.62,
    Airport:"Air France"
}),
new Routes(
{
    From:"NTE",
    To:"SOU",
    Distance:422.62,
    Airport:"Flybe"
}),
new Routes(
{
    From:"NTE",
    To:"SVQ",
    Distance:1137.91,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"NTE",
    To:"SVQ",
    Distance:1137.91,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"NTE",
    To:"SVQ",
    Distance:1137.91,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NTE",
    To:"SXB",
    Distance:705.984,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTE",
    To:"SXB",
    Distance:705.984,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NTE",
    To:"TFS",
    Distance:2490.67,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTE",
    To:"TLS",
    Distance:455.449,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"NTE",
    To:"TLS",
    Distance:455.449,
    Airport:"easyJet"
}),
new Routes(
{
    From:"NTE",
    To:"TUN",
    Distance:1502.91,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"NTE",
    To:"TUN",
    Distance:1502.91,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"NTE",
    To:"TXL",
    Distance:1222.27,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NTE",
    To:"VCE",
    Distance:1086.1,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTE",
    To:"VCE",
    Distance:1086.1,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"NTE",
    To:"VLC",
    Distance:857.038,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"NTG",
    To:"CAN",
    Distance:1224.73,
    Airport:"Air China"
}),
new Routes(
{
    From:"NTG",
    To:"CAN",
    Distance:1224.73,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"NTG",
    To:"CAN",
    Distance:1224.73,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NTG",
    To:"CKG",
    Distance:1391.39,
    Airport:"KSY"
}),
new Routes(
{
    From:"NTG",
    To:"CKG",
    Distance:1391.39,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NTG",
    To:"DLC",
    Distance:768.358,
    Airport:"Air China"
}),
new Routes(
{
    From:"NTG",
    To:"DLC",
    Distance:768.358,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NTG",
    To:"PEK",
    Distance:973.775,
    Airport:"Air China"
}),
new Routes(
{
    From:"NTG",
    To:"PEK",
    Distance:973.775,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NTG",
    To:"SHE",
    Distance:1055.62,
    Airport:"Air China"
}),
new Routes(
{
    From:"NTG",
    To:"SHE",
    Distance:1055.62,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NTG",
    To:"SZX",
    Distance:1264.3,
    Airport:"Air China"
}),
new Routes(
{
    From:"NTG",
    To:"SZX",
    Distance:1264.3,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NTG",
    To:"TSN",
    Distance:850.005,
    Airport:"Air China"
}),
new Routes(
{
    From:"NTG",
    To:"TSN",
    Distance:850.005,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NTG",
    To:"WUH",
    Distance:657.785,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NTG",
    To:"XMN",
    Distance:882.045,
    Airport:"Air China"
}),
new Routes(
{
    From:"NTG",
    To:"XMN",
    Distance:882.045,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"NTL",
    To:"BNE",
    Distance:612.626,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"NTL",
    To:"BNE",
    Distance:612.626,
    Airport:"Qantas"
}),
new Routes(
{
    From:"NTL",
    To:"BNE",
    Distance:612.626,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"NTL",
    To:"BNK",
    Distance:468.924,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"NTL",
    To:"MEL",
    Distance:835.476,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"NTL",
    To:"MEL",
    Distance:835.476,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"NTL",
    To:"OOL",
    Distance:537.71,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"NTL",
    To:"SYD",
    Distance:143.137,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"NTN",
    To:"CNS",
    Distance:505.282,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"NTN",
    To:"ONG",
    Distance:230.849,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"NTQ",
    To:"HND",
    Distance:317.835,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"NTX",
    To:"BTH",
    Distance:566.528,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"NUE",
    To:"AGP",
    Distance:1897.99,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NUE",
    To:"ALC",
    Distance:1552.89,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NUE",
    To:"AMS",
    Distance:540.959,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NUE",
    To:"AYT",
    Distance:2114.72,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"AYT",
    Distance:2114.72,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"NUE",
    To:"AYT",
    Distance:2114.72,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"NUE",
    To:"BCN",
    Distance:1149.04,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"NUE",
    To:"BCN",
    Distance:1149.04,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"NUE",
    To:"CDG",
    Distance:620.137,
    Airport:"Air France"
}),
new Routes(
{
    From:"NUE",
    To:"CDG",
    Distance:620.137,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NUE",
    To:"DJE",
    Distance:1737.44,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"DUS",
    Distance:364.006,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"DUS",
    Distance:364.006,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"NUE",
    To:"FRA",
    Distance:190.525,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"NUE",
    To:"FUE",
    Distance:3152.09,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"HAM",
    Distance:465.419,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"HAM",
    Distance:465.419,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"NUE",
    To:"HER",
    Distance:1947.78,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"HER",
    Distance:1947.78,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"NUE",
    To:"HRG",
    Distance:3150.63,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"IBZ",
    Distance:1409.33,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"IST",
    Distance:1675.34,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"NUE",
    To:"KGS",
    Distance:1911.99,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"LPA",
    Distance:3286.01,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"MUC",
    Distance:137.724,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"NUE",
    To:"NBE",
    Distance:1493.42,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"OLB",
    Distance:963.896,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"OLB",
    Distance:963.896,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"NUE",
    To:"PMI",
    Distance:1286.56,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"PMI",
    Distance:1286.56,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"NUE",
    To:"RHO",
    Distance:2000.39,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"RHO",
    Distance:2000.39,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"NUE",
    To:"SAW",
    Distance:1712.69,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"SAW",
    Distance:1712.69,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"NUE",
    To:"SKG",
    Distance:1365.23,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"NUE",
    To:"SKG",
    Distance:1365.23,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"SMI",
    Distance:1823.71,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"SPU",
    Distance:773.746,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"STN",
    Distance:806.903,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NUE",
    To:"TFS",
    Distance:3345.1,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"TFS",
    Distance:3345.1,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"NUE",
    To:"TXL",
    Distance:374.08,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"TXL",
    Distance:374.08,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"NUE",
    To:"TXL",
    Distance:374.08,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NUE",
    To:"VIE",
    Distance:431.439,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"NUE",
    To:"ZQW",
    Distance:267.413,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"NUE",
    To:"ZRH",
    Distance:292.522,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"NUE",
    To:"ZRH",
    Distance:292.522,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"NUI",
    To:"BRW",
    Distance:242.569,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"NUI",
    To:"SCC",
    Distance:95.6832,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"NUL",
    To:"GAL",
    Distance:53.9574,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"NUL",
    To:"KAL",
    Distance:55.6691,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"NUL",
    To:"KYU",
    Distance:23.0122,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"NUP",
    To:"ATT",
    Distance:5741.68,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"NUP",
    To:"BET",
    Distance:35.4562,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"NUS",
    To:"CCV",
    Distance:59.5329,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"NUS",
    To:"LPM",
    Distance:61.3299,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"NUS",
    To:"SON",
    Distance:66.7784,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"NUS",
    To:"SWJ",
    Distance:46.3478,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"NUS",
    To:"VLI",
    Distance:204.914,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"NUX",
    To:"DME",
    Distance:2346.4,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"NUX",
    To:"DME",
    Distance:2346.4,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"NUX",
    To:"DME",
    Distance:2346.4,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"NUX",
    To:"KRR",
    Distance:3215.45,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"NUX",
    To:"OMS",
    Distance:1242.03,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"NUX",
    To:"OVB",
    Distance:1272.89,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"NUX",
    To:"SLY",
    Distance:437.206,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"NUX",
    To:"SVO",
    Distance:2323.9,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"NUX",
    To:"SVX",
    Distance:1315.79,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"NUX",
    To:"SVX",
    Distance:1315.79,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"NUX",
    To:"TJM",
    Distance:1139.29,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"NUX",
    To:"TJM",
    Distance:1139.29,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"NUX",
    To:"UFA",
    Distance:1686.81,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"NUX",
    To:"UFA",
    Distance:1686.81,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"NUX",
    To:"VKO",
    Distance:2360.51,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"NUX",
    To:"VKO",
    Distance:2360.51,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"NVA",
    To:"BOG",
    Distance:232.643,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"NVA",
    To:"BOG",
    Distance:232.643,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"NVI",
    To:"DME",
    Distance:2624.2,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"NVI",
    To:"DME",
    Distance:2624.2,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"NVI",
    To:"DME",
    Distance:2624.2,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"NVI",
    To:"LED",
    Distance:3254.28,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"NVI",
    To:"LED",
    Distance:3254.28,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"NVI",
    To:"TAS",
    Distance:369.006,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"NVK",
    To:"BOO",
    Distance:181.306,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"NVT",
    To:"CGH",
    Distance:413.691,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"NVT",
    To:"CGH",
    Distance:413.691,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"NVT",
    To:"GIG",
    Distance:708.821,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"NVT",
    To:"GRU",
    Distance:441.802,
    Airport:"Azul"
}),
new Routes(
{
    From:"NVT",
    To:"GRU",
    Distance:441.802,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"NVT",
    To:"POA",
    Distance:424.988,
    Airport:"Azul"
}),
new Routes(
{
    From:"NVT",
    To:"VCP",
    Distance:456.941,
    Airport:"Azul"
}),
new Routes(
{
    From:"NWI",
    To:"ABZ",
    Distance:550.024,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"NWI",
    To:"ABZ",
    Distance:550.024,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"NWI",
    To:"AMS",
    Distance:239.168,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"NWI",
    To:"AMS",
    Distance:239.168,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"NWI",
    To:"EDI",
    Distance:472.792,
    Airport:"Flybe"
}),
new Routes(
{
    From:"NWI",
    To:"GCI",
    Distance:451.067,
    Airport:"Flybe"
}),
new Routes(
{
    From:"NWI",
    To:"HUY",
    Distance:147.863,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"NWI",
    To:"JER",
    Distance:456.045,
    Airport:"Flybe"
}),
new Routes(
{
    From:"NWI",
    To:"MAN",
    Distance:249.618,
    Airport:"Flybe"
}),
new Routes(
{
    From:"NWI",
    To:"MLA",
    Distance:2137.32,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"NYA",
    To:"EYK",
    Distance:183.087,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"NYA",
    To:"SVX",
    Distance:655.487,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"NYA",
    To:"TJM",
    Distance:547.369,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"NYA",
    To:"TJM",
    Distance:547.369,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"NYK",
    To:"UAS",
    Distance:86.7249,
    Airport:"Fly Air"
}),
new Routes(
{
    From:"NYK",
    To:"WIL",
    Distance:141.611,
    Airport:"Fly Air"
}),
new Routes(
{
    From:"NYM",
    To:"DME",
    Distance:2171.62,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"NYM",
    To:"DME",
    Distance:2171.62,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"NYM",
    To:"OVS",
    Distance:646.201,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"NYM",
    To:"SLY",
    Distance:301.213,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"NYM",
    To:"SVX",
    Distance:1158.73,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"NYM",
    To:"TJM",
    Distance:1000.79,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"NYM",
    To:"UFA",
    Distance:1522.52,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"NYM",
    To:"VKO",
    Distance:2186.24,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"NYO",
    To:"AGP",
    Distance:2906.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"AHO",
    Distance:2107.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"ALC",
    Distance:2600.12,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"BCN",
    Distance:2203.44,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"BEG",
    Distance:1570.37,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"NYO",
    To:"BGY",
    Distance:1536.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"BIQ",
    Distance:2119.64,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"BRE",
    Distance:813.616,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"BUD",
    Distance:1271.7,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"NYO",
    To:"BVA",
    Distance:1410.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"BZR",
    Distance:1955,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"CHQ",
    Distance:2639.74,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"CIA",
    Distance:1912.88,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"CRL",
    Distance:1221.27,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"GDN",
    Distance:499.599,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"NYO",
    To:"KRK",
    Distance:986.032,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"KTW",
    Distance:934.859,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"NYO",
    To:"MLA",
    Distance:2556.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"PFO",
    Distance:2911.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"PMI",
    Distance:2363.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"POZ",
    Distance:708.066,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"NYO",
    To:"PSA",
    Distance:1737.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"RHO",
    Distance:2618.01,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"RJK",
    Distance:1517.36,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"SKG",
    Distance:2075.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"SKP",
    Distance:1899.5,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"NYO",
    To:"STN",
    Distance:1298.69,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"TSF",
    Distance:1495.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"WAW",
    Distance:779.151,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"NYO",
    To:"WMI",
    Distance:742.499,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYO",
    To:"ZAD",
    Distance:1635.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"NYT",
    To:"BKK",
    Distance:802.286,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"NYT",
    To:"KMG",
    Distance:924.461,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NYU",
    To:"HEH",
    Distance:199.624,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"NYU",
    To:"MDL",
    Distance:123.835,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"NYU",
    To:"MDL",
    Distance:123.835,
    Airport:"Air Mandalay"
}),
new Routes(
{
    From:"NYU",
    To:"RGN",
    Distance:491.119,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"NYU",
    To:"RGN",
    Distance:491.119,
    Airport:"Air Mandalay"
}),
new Routes(
{
    From:"NZH",
    To:"COQ",
    Distance:252.695,
    Airport:"Homer Air"
}),
new Routes(
{
    From:"NZH",
    To:"HET",
    Distance:1060.01,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"NZH",
    To:"HRB",
    Distance:799.022,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"NZH",
    To:"HTA",
    Distance:393.318,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NZH",
    To:"IKT",
    Distance:954.041,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NZH",
    To:"KJA",
    Distance:1810.07,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"NZH",
    To:"NAY",
    Distance:1090.47,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"NZH",
    To:"NAY",
    Distance:1090.47,
    Airport:"China United"
}),
new Routes(
{
    From:"NZH",
    To:"OVB",
    Distance:2407.92,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"NZH",
    To:"PEK",
    Distance:1056.48,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"NZH",
    To:"UUD",
    Distance:739.357,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"OAG",
    To:"SYD",
    Distance:199.322,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"OAJ",
    To:"ATL",
    Distance:640.331,
    Airport:"Air France"
}),
new Routes(
{
    From:"OAJ",
    To:"ATL",
    Distance:640.331,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"OAJ",
    To:"ATL",
    Distance:640.331,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"OAJ",
    To:"CLT",
    Distance:306.314,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OAJ",
    To:"CLT",
    Distance:306.314,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OAJ",
    To:"DCA",
    Distance:450.236,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OAJ",
    To:"DCA",
    Distance:450.236,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OAK",
    To:"ABQ",
    Distance:1427.2,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"ARN",
    Distance:8586.47,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OAK",
    To:"AUS",
    Distance:2405.3,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"AZA",
    Distance:1073.93,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"OAK",
    To:"BLI",
    Distance:1231.35,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"OAK",
    To:"BOI",
    Distance:823.055,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"BUR",
    Distance:523.413,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"CMH",
    Distance:3387.11,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OAK",
    To:"DEN",
    Distance:1536.76,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OAK",
    To:"DEN",
    Distance:1536.76,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"DFW",
    Distance:2339.5,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"EUG",
    Distance:716.853,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"OAK",
    To:"GDL",
    Distance:2641.04,
    Airport:"Volaris"
}),
new Routes(
{
    From:"OAK",
    To:"GEG",
    Distance:1164.89,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"HNL",
    Distance:3873.28,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"HNL",
    Distance:3873.28,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"HNL",
    Distance:3873.28,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"HOU",
    Distance:2638.35,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"JFK",
    Distance:4135.12,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"OAK",
    To:"KOA",
    Distance:3824.86,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"KOA",
    Distance:3824.86,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"LAS",
    Distance:654.294,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OAK",
    To:"LAS",
    Distance:654.294,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"LAS",
    Distance:654.294,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"LAX",
    Distance:542.734,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OAK",
    To:"LAX",
    Distance:542.734,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"OAK",
    To:"LAX",
    Distance:542.734,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"LGB",
    Distance:568.355,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"OAK",
    To:"LIH",
    Distance:3950.22,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"LIH",
    Distance:3950.22,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"MCI",
    Distance:2390.57,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"MDW",
    Distance:2960.84,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OAK",
    To:"MDW",
    Distance:2960.84,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"OGG",
    Distance:3777.02,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"OGG",
    Distance:3777.02,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"OGG",
    Distance:3777.02,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"OKC",
    Distance:2207.79,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OAK",
    To:"ONT",
    Distance:582.326,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"ORD",
    Distance:2947.29,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"PDX",
    Distance:875.377,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"PDX",
    Distance:875.377,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"PDX",
    Distance:875.377,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"PHX",
    Distance:1038.23,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"PHX",
    Distance:1038.23,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"PHX",
    Distance:1038.23,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OAK",
    To:"PVU",
    Distance:948.441,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"OAK",
    To:"SAN",
    Distance:718.365,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"SEA",
    Distance:1081.7,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"SEA",
    Distance:1081.7,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"SEA",
    Distance:1081.7,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"SLC",
    Distance:944.855,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"OAK",
    To:"SLC",
    Distance:944.855,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAK",
    To:"SNA",
    Distance:597.206,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OAK",
    To:"SNA",
    Distance:597.206,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OAL",
    To:"CGB",
    Distance:9652.66,
    Airport:"Azul"
}),
new Routes(
{
    From:"OAX",
    To:"CUN",
    Distance:1128.15,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"OAX",
    To:"IAH",
    Distance:1450.66,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OAX",
    To:"MEX",
    Distance:367.086,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"OAX",
    To:"MEX",
    Distance:367.086,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"OAX",
    To:"MTY",
    Distance:1036.81,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"OAX",
    To:"TIJ",
    Distance:2667.17,
    Airport:"Volaris"
}),
new Routes(
{
    From:"OBO",
    To:"HND",
    Distance:851.546,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OBO",
    To:"HND",
    Distance:851.546,
    Airport:"Hokkaido International Airlines"
}),
new Routes(
{
    From:"OBO",
    To:"HND",
    Distance:851.546,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"OBU",
    To:"ABL",
    Distance:46.962,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OBU",
    To:"ABL",
    Distance:46.962,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OBU",
    To:"OTZ",
    Distance:248.673,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OBU",
    To:"OTZ",
    Distance:248.673,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OBY",
    To:"CNP",
    Distance:38.459,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"OCC",
    To:"LTX",
    Distance:153.571,
    Airport:"TAME"
}),
new Routes(
{
    From:"OCC",
    To:"UIO",
    Distance:170.733,
    Airport:"Aerolineas Galapagos (Aerogal)"
}),
new Routes(
{
    From:"OCC",
    To:"UIO",
    Distance:170.733,
    Airport:"TAME"
}),
new Routes(
{
    From:"ODN",
    To:"MUR",
    Distance:84.0756,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"ODN",
    To:"MYY",
    Distance:124.345,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"ODO",
    To:"IKT",
    Distance:852.142,
    Airport:"Cargoitalia"
}),
new Routes(
{
    From:"ODO",
    To:"IKT",
    Distance:852.142,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"ODS",
    To:"DME",
    Distance:1118.57,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"ODS",
    To:"DME",
    Distance:1118.57,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"ODS",
    To:"DWC",
    Distance:3260.58,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"ODS",
    To:"IST",
    Distance:624.153,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"ODS",
    To:"IST",
    Distance:624.153,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ODS",
    To:"IST",
    Distance:624.153,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"ODS",
    To:"KBP",
    Distance:435.985,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"ODS",
    To:"KBP",
    Distance:435.985,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"ODS",
    To:"LCA",
    Distance:1308.09,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"ODS",
    To:"MUC",
    Distance:1434.34,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ODS",
    To:"SHJ",
    Distance:3215.4,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"ODS",
    To:"SVO",
    Distance:1159.34,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ODS",
    To:"SVO",
    Distance:1159.34,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"ODS",
    To:"TLV",
    Distance:1642.8,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"ODS",
    To:"VIE",
    Distance:1079.13,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"ODS",
    To:"VIE",
    Distance:1079.13,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"ODS",
    To:"VKO",
    Distance:1117.18,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"ODS",
    To:"WAW",
    Distance:948.778,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"ODY",
    To:"VTE",
    Distance:305.495,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"OER",
    To:"ARN",
    Distance:421.52,
    Airport:"NextJet"
}),
new Routes(
{
    From:"OGG",
    To:"DEN",
    Distance:5308.32,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"DFW",
    Distance:5962.34,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"DFW",
    Distance:5962.34,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OGG",
    To:"HNL",
    Distance:161.66,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"HNL",
    Distance:161.66,
    Airport:"Island Air (WP)"
}),
new Routes(
{
    From:"OGG",
    To:"HNL",
    Distance:161.66,
    Airport:"Maya Island Air"
}),
new Routes(
{
    From:"OGG",
    To:"HNL",
    Distance:161.66,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OGG",
    To:"HNL",
    Distance:161.66,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"HNM",
    Distance:44.7225,
    Airport:"Maya Island Air"
}),
new Routes(
{
    From:"OGG",
    To:"ITO",
    Distance:194.692,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"KOA",
    Distance:135.071,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"KOA",
    Distance:135.071,
    Airport:"Maya Island Air"
}),
new Routes(
{
    From:"OGG",
    To:"LAX",
    Distance:3995.45,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"LAX",
    Distance:3995.45,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"LAX",
    Distance:3995.45,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"OGG",
    To:"LAX",
    Distance:3995.45,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"LAX",
    Distance:3995.45,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"LAX",
    Distance:3995.45,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OGG",
    To:"LAX",
    Distance:3995.45,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"LIH",
    Distance:323.986,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"LNY",
    Distance:55.5776,
    Airport:"Maya Island Air"
}),
new Routes(
{
    From:"OGG",
    To:"MKK",
    Distance:74.6629,
    Airport:"Maya Island Air"
}),
new Routes(
{
    From:"OGG",
    To:"MUE",
    Distance:127.531,
    Airport:"Maya Island Air"
}),
new Routes(
{
    From:"OGG",
    To:"OAK",
    Distance:3777.02,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"OAK",
    Distance:3777.02,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"OAK",
    Distance:3777.02,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"ORD",
    Distance:6724.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"PDX",
    Distance:4122.26,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"PHX",
    Distance:4571.9,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"PHX",
    Distance:4571.9,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OGG",
    To:"SAN",
    Distance:4083.49,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"SEA",
    Distance:4248.37,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"SEA",
    Distance:4248.37,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"SFO",
    Distance:3760.38,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"SJC",
    Distance:3787.91,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"SJC",
    Distance:3787.91,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"SJC",
    Distance:3787.91,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"SMF",
    Distance:3866.2,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"SMF",
    Distance:3866.2,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OGG",
    To:"SMF",
    Distance:3866.2,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"OGG",
    To:"YVR",
    Distance:4301.61,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"OGG",
    To:"YVR",
    Distance:4301.61,
    Airport:"WestJet"
}),
new Routes(
{
    From:"OGL",
    To:"BGI",
    Distance:713.302,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"OGS",
    To:"ALB",
    Distance:253.182,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"OGX",
    To:"ALG",
    Distance:567.848,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"OGX",
    To:"AZR",
    Distance:704.928,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"OGX",
    To:"ELG",
    Distance:285.142,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"OGX",
    To:"IAM",
    Distance:592.122,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"OGX",
    To:"ORN",
    Distance:693.255,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"OGZ",
    To:"DME",
    Distance:1439.68,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OHE",
    To:"HEK",
    Distance:448.354,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"OHE",
    To:"HRB",
    Distance:856.615,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"OHE",
    To:"JGD",
    Distance:305.539,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"OHH",
    To:"KHV",
    Distance:779.536,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"OHH",
    To:"UUS",
    Distance:744.57,
    Airport:"Sat Airlines"
}),
new Routes(
{
    From:"OIA",
    To:"CKS",
    Distance:136.082,
    Airport:"Shuttle America"
}),
new Routes(
{
    From:"OIM",
    To:"HND",
    Distance:93.746,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OIT",
    To:"HND",
    Distance:771.789,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OIT",
    To:"HND",
    Distance:771.789,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"OIT",
    To:"ICN",
    Distance:652.459,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"OIT",
    To:"ITM",
    Distance:370.276,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OIT",
    To:"ITM",
    Distance:370.276,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"OIT",
    To:"ITM",
    Distance:370.276,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"OIT",
    To:"NGO",
    Distance:490.772,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OIT",
    To:"NGO",
    Distance:490.772,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"OIT",
    To:"NRT",
    Distance:830.877,
    Airport:"Genesis"
}),
new Routes(
{
    From:"OKA",
    To:"CTS",
    Distance:2241.73,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"FSZ",
    Distance:1389.38,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"FUK",
    Distance:864.969,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"FUK",
    Distance:864.969,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"OKA",
    To:"FUK",
    Distance:864.969,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"HIJ",
    Distance:1046.36,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"HKG",
    Distance:1456.69,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"OKA",
    To:"HKG",
    Distance:1456.69,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"OKA",
    To:"HKG",
    Distance:1456.69,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"HND",
    Distance:1554.33,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"HND",
    Distance:1554.33,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"HND",
    Distance:1554.33,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"ICN",
    Distance:1258.57,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"ICN",
    Distance:1258.57,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"ICN",
    Distance:1258.57,
    Airport:"Jin Air"
}),
new Routes(
{
    From:"OKA",
    To:"ISG",
    Distance:404.129,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"ISG",
    Distance:404.129,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"OKA",
    To:"ISG",
    Distance:404.129,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"OKA",
    To:"ISG",
    Distance:404.129,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"ITM",
    Distance:1211.37,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"ITM",
    Distance:1211.37,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"KHH",
    Distance:841.095,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"KIJ",
    Distance:1659.2,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"KIX",
    Distance:1170.13,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"KIX",
    Distance:1170.13,
    Airport:"Genesis"
}),
new Routes(
{
    From:"OKA",
    To:"KIX",
    Distance:1170.13,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"OKA",
    To:"KIX",
    Distance:1170.13,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"OKA",
    To:"KMI",
    Distance:731.813,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"KMJ",
    Distance:800.997,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"KMQ",
    Distance:1405.26,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"OKA",
    To:"KOJ",
    Distance:691.377,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"MMY",
    Distance:283.464,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"MMY",
    Distance:283.464,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"OKA",
    To:"MMY",
    Distance:283.464,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"MYJ",
    Distance:977.821,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"NGO",
    Distance:1301.57,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"NGO",
    Distance:1301.57,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"OKA",
    To:"NGO",
    Distance:1301.57,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"NGS",
    Distance:778.809,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"NRT",
    Distance:1612.01,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"NRT",
    Distance:1612.01,
    Airport:"Arrow Air"
}),
new Routes(
{
    From:"OKA",
    To:"NRT",
    Distance:1612.01,
    Airport:"Genesis"
}),
new Routes(
{
    From:"OKA",
    To:"NRT",
    Distance:1612.01,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"NRT",
    Distance:1612.01,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"OKJ",
    Distance:1122,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"OKA",
    To:"PEK",
    Distance:1852.4,
    Airport:"Air China"
}),
new Routes(
{
    From:"OKA",
    To:"PEK",
    Distance:1852.4,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"PUS",
    Distance:1006.53,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"PVG",
    Distance:791.78,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"PVG",
    Distance:791.78,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"PVG",
    Distance:791.78,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"RMQ",
    Distance:738.429,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"SDJ",
    Distance:1819.3,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"TAK",
    Distance:1080.88,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"TPE",
    Distance:654.729,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"TPE",
    Distance:654.729,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"OKA",
    To:"TPE",
    Distance:654.729,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"OKA",
    To:"UEO",
    Distance:94.7808,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"OKA",
    To:"UKB",
    Distance:1185.77,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKA",
    To:"UKB",
    Distance:1185.77,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"OKA",
    To:"YGJ",
    Distance:1162.78,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"ATL",
    Distance:1221.65,
    Airport:"Air France"
}),
new Routes(
{
    From:"OKC",
    To:"ATL",
    Distance:1221.65,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OKC",
    To:"ATL",
    Distance:1221.65,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"OKC",
    To:"ATL",
    Distance:1221.65,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"ATL",
    Distance:1221.65,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"ATL",
    Distance:1221.65,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"OKC",
    To:"BWI",
    Distance:1894.45,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OKC",
    To:"BWI",
    Distance:1894.45,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"DAL",
    Distance:291.371,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OKC",
    To:"DAL",
    Distance:291.371,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"DEN",
    Distance:796.3,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OKC",
    To:"DEN",
    Distance:796.3,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"DEN",
    Distance:796.3,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"DEN",
    Distance:796.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"DFW",
    Distance:282.359,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"DFW",
    Distance:282.359,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OKC",
    To:"DTW",
    Distance:1445.98,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"OKC",
    To:"EWR",
    Distance:2127.65,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"HOU",
    Distance:675.104,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OKC",
    To:"HOU",
    Distance:675.104,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"IAD",
    Distance:1824.07,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"IAH",
    Distance:637.439,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"LAS",
    Distance:1583.86,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OKC",
    To:"LAS",
    Distance:1583.86,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"LAX",
    Distance:1906.21,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"LAX",
    Distance:1906.21,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"LAX",
    Distance:1906.21,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OKC",
    To:"LAX",
    Distance:1906.21,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"MDW",
    Distance:1111.33,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OKC",
    To:"MDW",
    Distance:1111.33,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"MSP",
    Distance:1118.4,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"OKC",
    To:"ORD",
    Distance:1114.24,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"ORD",
    Distance:1114.24,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OKC",
    To:"ORD",
    Distance:1114.24,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"PHX",
    Distance:1338.52,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"SFB",
    Distance:1705.07,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"OKC",
    To:"SFO",
    Distance:2221.55,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OKC",
    To:"SLC",
    Distance:1391.57,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"OKC",
    To:"STL",
    Distance:741.789,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OKC",
    To:"STL",
    Distance:741.789,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OKJ",
    To:"CTS",
    Distance:1119.87,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKJ",
    To:"CTS",
    Distance:1119.87,
    Airport:"Hokkaido International Airlines"
}),
new Routes(
{
    From:"OKJ",
    To:"GUM",
    Distance:2608.64,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKJ",
    To:"GUM",
    Distance:2608.64,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OKJ",
    To:"HND",
    Distance:545.73,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKJ",
    To:"HND",
    Distance:545.73,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"OKJ",
    To:"ICN",
    Distance:730.044,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"OKJ",
    To:"MFM",
    Distance:2418.79,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"OKJ",
    To:"OKA",
    Distance:1122,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"OKJ",
    To:"PVG",
    Distance:1193.04,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"OKJ",
    To:"PVG",
    Distance:1193.04,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"OKJ",
    To:"TPE",
    Distance:1621.66,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"OKJ",
    To:"TPE",
    Distance:1621.66,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"OLA",
    To:"OSL",
    Distance:397.487,
    Airport:"ABSA - Aerolinhas Brasileiras"
}),
new Routes(
{
    From:"OLB",
    To:"AMS",
    Distance:1318.95,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"OLB",
    To:"ARN",
    Distance:2165.01,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OLB",
    To:"BLQ",
    Distance:429.466,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OLB",
    To:"BOD",
    Distance:940.595,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"OLB",
    To:"BRN",
    Distance:688.126,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"OLB",
    To:"BSL",
    Distance:760.643,
    Airport:"easyJet"
}),
new Routes(
{
    From:"OLB",
    To:"CDG",
    Distance:1054.73,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OLB",
    To:"CGN",
    Distance:1123.29,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"OLB",
    To:"CGN",
    Distance:1123.29,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"OLB",
    To:"CGN",
    Distance:1123.29,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OLB",
    To:"DUS",
    Distance:1174.49,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"OLB",
    To:"DUS",
    Distance:1174.49,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"OLB",
    To:"DUS",
    Distance:1174.49,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OLB",
    To:"FCO",
    Distance:249.368,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OLB",
    To:"FDH",
    Distance:753.085,
    Airport:"Intersky"
}),
new Routes(
{
    From:"OLB",
    To:"FRA",
    Distance:1017.78,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"OLB",
    To:"GOA",
    Distance:394.747,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"OLB",
    To:"GVA",
    Distance:653.99,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"OLB",
    To:"GVA",
    Distance:653.99,
    Airport:"easyJet"
}),
new Routes(
{
    From:"OLB",
    To:"HAM",
    Distance:1416.14,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"OLB",
    To:"HAM",
    Distance:1416.14,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"OLB",
    To:"HAM",
    Distance:1416.14,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OLB",
    To:"LGW",
    Distance:1361.49,
    Airport:"British Airways"
}),
new Routes(
{
    From:"OLB",
    To:"LGW",
    Distance:1361.49,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OLB",
    To:"LGW",
    Distance:1361.49,
    Airport:"easyJet"
}),
new Routes(
{
    From:"OLB",
    To:"LIN",
    Distance:505.918,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OLB",
    To:"MUC",
    Distance:848.081,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"OLB",
    To:"MUC",
    Distance:848.081,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"OLB",
    To:"MUC",
    Distance:848.081,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OLB",
    To:"MXP",
    Distance:530.03,
    Airport:"easyJet"
}),
new Routes(
{
    From:"OLB",
    To:"NAP",
    Distance:401.169,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OLB",
    To:"NCE",
    Distance:360.56,
    Airport:"easyJet"
}),
new Routes(
{
    From:"OLB",
    To:"NTE",
    Distance:1127.44,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"OLB",
    To:"NUE",
    Distance:963.896,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"OLB",
    To:"NUE",
    Distance:963.896,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OLB",
    To:"RIX",
    Distance:2061.88,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"OLB",
    To:"RIX",
    Distance:2061.88,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"OLB",
    To:"STR",
    Distance:866.656,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"OLB",
    To:"STR",
    Distance:866.656,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"OLB",
    To:"STR",
    Distance:866.656,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OLB",
    To:"SXF",
    Distance:1312.24,
    Airport:"easyJet"
}),
new Routes(
{
    From:"OLB",
    To:"TRN",
    Distance:501.836,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OLB",
    To:"TXL",
    Distance:1327.63,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"OLB",
    To:"TXL",
    Distance:1327.63,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OLB",
    To:"VCE",
    Distance:561.295,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"OLB",
    To:"VIE",
    Distance:976.729,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"OLB",
    To:"VIE",
    Distance:976.729,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"OLB",
    To:"VIE",
    Distance:976.729,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OLB",
    To:"VIE",
    Distance:976.729,
    Airport:"Niki"
}),
new Routes(
{
    From:"OLB",
    To:"VRN",
    Distance:512.245,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OLB",
    To:"ZRH",
    Distance:734.168,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"OLB",
    To:"ZRH",
    Distance:734.168,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OLC",
    To:"TFF",
    Distance:465.702,
    Airport:"Azul"
}),
new Routes(
{
    From:"OLF",
    To:"BIL",
    Distance:339.268,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"OLH",
    To:"ADQ",
    Distance:75.1576,
    Airport:"Astair"
}),
new Routes(
{
    From:"OLP",
    To:"ADL",
    Distance:519.471,
    Airport:"Qantas"
}),
new Routes(
{
    From:"OMA",
    To:"ATL",
    Distance:1321.04,
    Airport:"Air France"
}),
new Routes(
{
    From:"OMA",
    To:"ATL",
    Distance:1321.04,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"OMA",
    To:"ATL",
    Distance:1321.04,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"OMA",
    To:"ATL",
    Distance:1321.04,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"OMA",
    To:"CLT",
    Distance:1467.73,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OMA",
    To:"CLT",
    Distance:1467.73,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OMA",
    To:"DCA",
    Distance:1623.99,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OMA",
    To:"DCA",
    Distance:1623.99,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"OMA",
    To:"DCA",
    Distance:1623.99,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OMA",
    To:"DEN",
    Distance:758.158,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"OMA",
    To:"DEN",
    Distance:758.158,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OMA",
    To:"DEN",
    Distance:758.158,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OMA",
    To:"DFW",
    Distance:940.205,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OMA",
    To:"DFW",
    Distance:940.205,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OMA",
    To:"DTW",
    Distance:1044.17,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"OMA",
    To:"EWR",
    Distance:1819.76,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OMA",
    To:"IAH",
    Distance:1259.57,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OMA",
    To:"LAS",
    Distance:1764.92,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OMA",
    To:"LGA",
    Distance:1842.88,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"OMA",
    To:"MCO",
    Distance:1948.93,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"OMA",
    To:"MDW",
    Distance:679.437,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OMA",
    To:"MDW",
    Distance:679.437,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OMA",
    To:"MSP",
    Distance:453.194,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"OMA",
    To:"ORD",
    Distance:667.88,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OMA",
    To:"ORD",
    Distance:667.88,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OMA",
    To:"ORD",
    Distance:667.88,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OMA",
    To:"PHX",
    Distance:1667.51,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OMA",
    To:"PHX",
    Distance:1667.51,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OMA",
    To:"PHX",
    Distance:1667.51,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OMA",
    To:"SAN",
    Distance:2109.41,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OMA",
    To:"SEA",
    Distance:2195.41,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OMA",
    To:"SLC",
    Distance:1348.09,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"OMA",
    To:"STL",
    Distance:549.304,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"OMA",
    To:"STL",
    Distance:549.304,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OMD",
    To:"WDH",
    Distance:685.675,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"OME",
    To:"ANC",
    Distance:864.532,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OME",
    To:"ELI",
    Distance:152.035,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OME",
    To:"ELI",
    Distance:152.035,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OME",
    To:"GAM",
    Distance:315.878,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OME",
    To:"GAM",
    Distance:315.878,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OME",
    To:"GLV",
    Distance:116.647,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OME",
    To:"KKA",
    Distance:209.139,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OME",
    To:"KTS",
    Distance:103.006,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OME",
    To:"OTZ",
    Distance:294.148,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OME",
    To:"OTZ",
    Distance:294.148,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OME",
    To:"SHH",
    Distance:195.475,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OME",
    To:"SHH",
    Distance:195.475,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OME",
    To:"SKK",
    Distance:203.079,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OME",
    To:"SVA",
    Distance:261.72,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OME",
    To:"SVA",
    Distance:261.72,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OME",
    To:"TLA",
    Distance:91.3018,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OME",
    To:"TLA",
    Distance:91.3018,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OME",
    To:"TNC",
    Distance:164.777,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OME",
    To:"UNK",
    Distance:235.256,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OME",
    To:"UNK",
    Distance:235.256,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OME",
    To:"WAA",
    Distance:175.1,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OME",
    To:"WBB",
    Distance:189.926,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OME",
    To:"WBB",
    Distance:189.926,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OME",
    To:"WMO",
    Distance:98.9094,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OME",
    To:"WMO",
    Distance:98.9094,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OMH",
    To:"MED",
    Distance:1544.31,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"OMH",
    To:"THR",
    Distance:598.63,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"OMH",
    To:"THR",
    Distance:598.63,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"OMO",
    To:"BGY",
    Distance:698.115,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"OMR",
    To:"OTP",
    Distance:424.63,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"OMR",
    To:"OTP",
    Distance:424.63,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OMS",
    To:"AER",
    Distance:2704.82,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"OMS",
    To:"DME",
    Distance:2223.64,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"OMS",
    To:"DME",
    Distance:2223.64,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OMS",
    To:"DME",
    Distance:2223.64,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"OMS",
    To:"DWC",
    Distance:3697.94,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"OMS",
    To:"DYU",
    Distance:1856.97,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"OMS",
    To:"EVN",
    Distance:2692.23,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"OMS",
    To:"GYD",
    Distance:2351.71,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"OMS",
    To:"HMA",
    Distance:718.14,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"OMS",
    To:"LED",
    Distance:2586.65,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"OMS",
    To:"NJC",
    Distance:690.826,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"OMS",
    To:"NUX",
    Distance:1242.03,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"OMS",
    To:"OVB",
    Distance:595.432,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"OMS",
    To:"SAW",
    Distance:3556.18,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"OMS",
    To:"SVO",
    Distance:2239.75,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"OMS",
    To:"TAS",
    Distance:1552.81,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"OMS",
    To:"TSE",
    Distance:455.625,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"OND",
    To:"ERS",
    Distance:539.375,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"ONG",
    To:"BUC",
    Distance:126.55,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"ONG",
    To:"DMD",
    Distance:147.025,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"ONG",
    To:"NTN",
    Distance:230.849,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"ONJ",
    To:"HND",
    Distance:518.505,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ONQ",
    To:"DTM",
    Distance:2163.52,
    Airport:"Germania"
}),
new Routes(
{
    From:"ONQ",
    To:"DUS",
    Distance:2209.58,
    Airport:"Germania"
}),
new Routes(
{
    From:"ONT",
    To:"DEN",
    Distance:1315.73,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ONT",
    To:"DEN",
    Distance:1315.73,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ONT",
    To:"DEN",
    Distance:1315.73,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ONT",
    To:"DFW",
    Distance:1908.36,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ONT",
    To:"DFW",
    Distance:1908.36,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ONT",
    To:"GDL",
    Distance:2059.13,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ONT",
    To:"GDL",
    Distance:2059.13,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ONT",
    To:"GDL",
    Distance:2059.13,
    Airport:"Volaris"
}),
new Routes(
{
    From:"ONT",
    To:"IAH",
    Distance:2142.27,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ONT",
    To:"LAS",
    Distance:316.723,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ONT",
    To:"LAS",
    Distance:316.723,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ONT",
    To:"MDW",
    Distance:2739.57,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ONT",
    To:"OAK",
    Distance:582.326,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ONT",
    To:"PDX",
    Distance:1350.78,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ONT",
    To:"PDX",
    Distance:1350.78,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ONT",
    To:"PHX",
    Distance:521.353,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ONT",
    To:"PHX",
    Distance:521.353,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ONT",
    To:"PHX",
    Distance:521.353,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ONT",
    To:"SEA",
    Distance:1540.37,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ONT",
    To:"SEA",
    Distance:1540.37,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ONT",
    To:"SFO",
    Distance:584.761,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ONT",
    To:"SJC",
    Distance:536.417,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ONT",
    To:"SLC",
    Distance:897.867,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ONT",
    To:"SMF",
    Distance:627.302,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"OOK",
    To:"MYU",
    Distance:67.6002,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OOK",
    To:"TNK",
    Distance:10.7732,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"OOK",
    To:"TNK",
    Distance:10.7732,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OOL",
    To:"ADL",
    Distance:1604.2,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"OOL",
    To:"ADL",
    Distance:1604.2,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"OOL",
    To:"AKL",
    Distance:2216.66,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"OOL",
    To:"AKL",
    Distance:2216.66,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"OOL",
    To:"AKL",
    Distance:2216.66,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"OOL",
    To:"CBR",
    Distance:892.411,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"OOL",
    To:"CHC",
    Distance:2406.66,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"OOL",
    To:"CHC",
    Distance:2406.66,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"OOL",
    To:"CHC",
    Distance:2406.66,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"OOL",
    To:"CNS",
    Distance:1484.3,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"OOL",
    To:"ISA",
    Distance:1644.15,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"OOL",
    To:"ISA",
    Distance:1644.15,
    Airport:"Qantas"
}),
new Routes(
{
    From:"OOL",
    To:"KIX",
    Distance:7220.79,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"OOL",
    To:"KIX",
    Distance:7220.79,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"OOL",
    To:"KIX",
    Distance:7220.79,
    Airport:"Qantas"
}),
new Routes(
{
    From:"OOL",
    To:"KUL",
    Distance:6508.52,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"OOL",
    To:"MEL",
    Distance:1329.6,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"OOL",
    To:"MEL",
    Distance:1329.6,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"OOL",
    To:"MEL",
    Distance:1329.6,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"OOL",
    To:"NRT",
    Distance:7240.35,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"OOL",
    To:"NRT",
    Distance:7240.35,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"OOL",
    To:"NRT",
    Distance:7240.35,
    Airport:"Qantas"
}),
new Routes(
{
    From:"OOL",
    To:"NTL",
    Distance:537.71,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"OOL",
    To:"SIN",
    Distance:6211.86,
    Airport:"Scoot"
}),
new Routes(
{
    From:"OOL",
    To:"SYD",
    Distance:679.983,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"OOL",
    To:"SYD",
    Distance:679.983,
    Airport:"Qantas"
}),
new Routes(
{
    From:"OOL",
    To:"SYD",
    Distance:679.983,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"OOL",
    To:"SYD",
    Distance:679.983,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"OPO",
    To:"AMS",
    Distance:1594.98,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"OPO",
    To:"AMS",
    Distance:1594.98,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"AMS",
    Distance:1594.98,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"OPO",
    To:"BCN",
    Distance:898.662,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"OPO",
    To:"BCN",
    Distance:898.662,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"OPO",
    To:"BCN",
    Distance:898.662,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"BCN",
    Distance:898.662,
    Airport:"SATA International"
}),
new Routes(
{
    From:"OPO",
    To:"BCN",
    Distance:898.662,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"BGY",
    Distance:1559.21,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"BHX",
    Distance:1351.47,
    Airport:"Flybe"
}),
new Routes(
{
    From:"OPO",
    To:"BLQ",
    Distance:1662.91,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"BOD",
    Distance:759.481,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"BRE",
    Distance:1852.44,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"BRU",
    Distance:1473.4,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"OPO",
    To:"BRU",
    Distance:1473.4,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"OPO",
    To:"BRU",
    Distance:1473.4,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"OPO",
    To:"BRU",
    Distance:1473.4,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"BRU",
    Distance:1473.4,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"BSL",
    Distance:1463.83,
    Airport:"easyJet"
}),
new Routes(
{
    From:"OPO",
    To:"BVA",
    Distance:1240.21,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"CCF",
    Distance:929.969,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"CCS",
    Distance:6601.19,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"CDG",
    Distance:1231.14,
    Airport:"easyJet"
}),
new Routes(
{
    From:"OPO",
    To:"CFE",
    Distance:1079.11,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"CIA",
    Distance:1767.78,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"CRL",
    Distance:1439.52,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"DLE",
    Distance:1294.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"DTM",
    Distance:1686.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"DUB",
    Distance:1365.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"EBU",
    Distance:1150.32,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"EIN",
    Distance:1560.29,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"EWR",
    Distance:5360.74,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"EWR",
    Distance:5360.74,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OPO",
    To:"FAO",
    Distance:474.781,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"FCO",
    Distance:1739.32,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"OPO",
    To:"FCO",
    Distance:1739.32,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"FKB",
    Distance:1556.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"FMM",
    Distance:1668.61,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"FNC",
    Distance:1190.75,
    Airport:"SATA International"
}),
new Routes(
{
    From:"OPO",
    To:"FNC",
    Distance:1190.75,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"FNC",
    Distance:1190.75,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"OPO",
    To:"FRA",
    Distance:1650.67,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"OPO",
    To:"FRA",
    Distance:1650.67,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"GIG",
    Distance:7964.85,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"GRU",
    Distance:8179.6,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"GVA",
    Distance:1308.61,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"OPO",
    To:"GVA",
    Distance:1308.61,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"GVA",
    Distance:1308.61,
    Airport:"easyJet"
}),
new Routes(
{
    From:"OPO",
    To:"HHN",
    Distance:1567.7,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"LAD",
    Distance:6005.25,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"OPO",
    To:"LGW",
    Distance:1278.27,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"LGW",
    Distance:1278.27,
    Airport:"easyJet"
}),
new Routes(
{
    From:"OPO",
    To:"LHR",
    Distance:1298.76,
    Airport:"British Airways"
}),
new Routes(
{
    From:"OPO",
    To:"LIL",
    Distance:1375.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"LIS",
    Distance:277.006,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"OPO",
    To:"LIS",
    Distance:277.006,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"LIS",
    Distance:277.006,
    Airport:"SATA International"
}),
new Routes(
{
    From:"OPO",
    To:"LIS",
    Distance:277.006,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"LIS",
    Distance:277.006,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OPO",
    To:"LPA",
    Distance:1601.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"LPL",
    Distance:1412.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"LRH",
    Distance:813.377,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"LUX",
    Distance:1484.76,
    Airport:"Luxair"
}),
new Routes(
{
    From:"OPO",
    To:"LUX",
    Distance:1484.76,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"LYS",
    Distance:1215.45,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"OPO",
    To:"LYS",
    Distance:1215.45,
    Airport:"easyJet"
}),
new Routes(
{
    From:"OPO",
    To:"MAD",
    Distance:438.096,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"OPO",
    To:"MAD",
    Distance:438.096,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"MAD",
    Distance:438.096,
    Airport:"SATA International"
}),
new Routes(
{
    From:"OPO",
    To:"MAD",
    Distance:438.096,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"MAD",
    Distance:438.096,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"OPO",
    To:"MAD",
    Distance:438.096,
    Airport:"US Airways"
}),
new Routes(
{
    From:"OPO",
    To:"MRS",
    Distance:1166.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"MST",
    Distance:1543.11,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"MUC",
    Distance:1790.26,
    Airport:"SATA International"
}),
new Routes(
{
    From:"OPO",
    To:"MXP",
    Distance:1484.08,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"OPO",
    To:"MXP",
    Distance:1484.08,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"NRN",
    Distance:1611.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"NTE",
    Distance:864.622,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"OPO",
    To:"ORY",
    Distance:1199.91,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"OPO",
    To:"ORY",
    Distance:1199.91,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"OPO",
    To:"ORY",
    Distance:1199.91,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"OPO",
    To:"ORY",
    Distance:1199.91,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"ORY",
    Distance:1199.91,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"OPO",
    To:"PDL",
    Distance:1508.54,
    Airport:"SATA International"
}),
new Routes(
{
    From:"OPO",
    To:"PDL",
    Distance:1508.54,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"PMI",
    Distance:983.539,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"STN",
    Distance:1362.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"SXB",
    Distance:1514.37,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"TER",
    Distance:1589.05,
    Airport:"SATA International"
}),
new Routes(
{
    From:"OPO",
    To:"TER",
    Distance:1589.05,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"TFS",
    Distance:1634.23,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"TUF",
    Distance:1014.91,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"VLC",
    Distance:721.352,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"XCR",
    Distance:1309.79,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OPO",
    To:"YYZ",
    Distance:5642.23,
    Airport:"SATA International"
}),
new Routes(
{
    From:"OPO",
    To:"YYZ",
    Distance:5642.23,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPO",
    To:"ZRH",
    Distance:1529.85,
    Airport:"Finnair"
}),
new Routes(
{
    From:"OPO",
    To:"ZRH",
    Distance:1529.85,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"OPO",
    To:"ZRH",
    Distance:1529.85,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OPS",
    To:"BSB",
    Distance:938.687,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"OPS",
    To:"CGB",
    Distance:422.876,
    Airport:"Azul"
}),
new Routes(
{
    From:"OPS",
    To:"CGB",
    Distance:422.876,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ABE",
    Distance:1050.39,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ABQ",
    Distance:1795.93,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ABQ",
    Distance:1795.93,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"ABQ",
    Distance:1795.93,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ACY",
    Distance:1156.35,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ACY",
    Distance:1156.35,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ALB",
    Distance:1160.52,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ALO",
    Distance:375.413,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ALO",
    Distance:375.413,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"AMM",
    Distance:10013.8,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"AMM",
    Distance:10013.8,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"ORD",
    To:"AMM",
    Distance:10013.8,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"AMS",
    Distance:6611.86,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"AMS",
    Distance:6611.86,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"AMS",
    Distance:6611.86,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ORD",
    To:"AMS",
    Distance:6611.86,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ANC",
    Distance:4568.39,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ANC",
    Distance:4568.39,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ARN",
    Distance:6855.69,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ORD",
    To:"ART",
    Distance:991.225,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ART",
    Distance:991.225,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ATL",
    Distance:976.328,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ORD",
    To:"ATW",
    Distance:258.082,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"AUH",
    Distance:11687.9,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"AUH",
    Distance:11687.9,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"ORD",
    To:"AUS",
    Distance:1574.56,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"AUS",
    Distance:1574.56,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"AUS",
    Distance:1574.56,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"AVL",
    Distance:863.155,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"AVP",
    Distance:1013.62,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"AZO",
    Distance:196.167,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"AZO",
    Distance:196.167,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"BDL",
    Distance:1256.98,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"BDL",
    Distance:1256.98,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"BDL",
    Distance:1256.98,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"BHM",
    Distance:941.207,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"BMI",
    Distance:187.145,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"BMI",
    Distance:187.145,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"BNA",
    Distance:659.489,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"BNA",
    Distance:659.489,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"BNA",
    Distance:659.489,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"BOI",
    Distance:2306.95,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"BOS",
    Distance:1391.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"BOS",
    Distance:1391.08,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"ORD",
    To:"BOS",
    Distance:1391.08,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"BOS",
    Distance:1391.08,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"BOS",
    Distance:1391.08,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"BRL",
    Distance:299.76,
    Airport:"Air Choice One"
}),
new Routes(
{
    From:"ORD",
    To:"BRU",
    Distance:6675.18,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"BRU",
    Distance:6675.18,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"BTV",
    Distance:1225.12,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"BUF",
    Distance:759.646,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"BUF",
    Distance:759.646,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"BUF",
    Distance:759.646,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"BWI",
    Distance:997.973,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"BWI",
    Distance:997.973,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"BWI",
    Distance:997.973,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"BZN",
    Distance:1903.91,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CAE",
    Distance:1072.98,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CAK",
    Distance:551.305,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CDG",
    Distance:6664.21,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORD",
    To:"CDG",
    Distance:6664.21,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CDG",
    Distance:6664.21,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ORD",
    To:"CDG",
    Distance:6664.21,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"CDG",
    Distance:6664.21,
    Airport:"Finnair"
}),
new Routes(
{
    From:"ORD",
    To:"CDG",
    Distance:6664.21,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CDG",
    Distance:6664.21,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ORD",
    To:"CDG",
    Distance:6664.21,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CDG",
    Distance:6664.21,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"CDG",
    Distance:6664.21,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CHA",
    Distance:806.919,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CHA",
    Distance:806.919,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"CHO",
    Distance:909.978,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CHO",
    Distance:909.978,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"CHS",
    Distance:1224.1,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CID",
    Distance:314.987,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CID",
    Distance:314.987,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"CID",
    Distance:314.987,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CLE",
    Distance:506.569,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CLE",
    Distance:506.569,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"CLE",
    Distance:506.569,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CLT",
    Distance:964.579,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CLT",
    Distance:964.579,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"CLT",
    Distance:964.579,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CMH",
    Distance:474.803,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CMH",
    Distance:474.803,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"CMH",
    Distance:474.803,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CMI",
    Distance:217.907,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CMI",
    Distance:217.907,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"CMX",
    Distance:578.927,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"COS",
    Distance:1462.88,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"COU",
    Distance:506.828,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"COU",
    Distance:506.828,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"CPH",
    Distance:6853.72,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ORD",
    To:"CRW",
    Distance:669.226,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CUN",
    Distance:2330.64,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CUN",
    Distance:2330.64,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"CUN",
    Distance:2330.64,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CVG",
    Distance:425.383,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CVG",
    Distance:425.383,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"CVG",
    Distance:425.383,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"CVG",
    Distance:425.383,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CWA",
    Distance:341.076,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"CWA",
    Distance:341.076,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"CWA",
    Distance:341.076,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DAY",
    Distance:386.109,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DAY",
    Distance:386.109,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"DAY",
    Distance:386.109,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DBQ",
    Distance:235.799,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DBQ",
    Distance:235.799,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"DCA",
    Distance:982.621,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DCA",
    Distance:982.621,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"DCA",
    Distance:982.621,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DEC",
    Distance:251.705,
    Airport:"Air Choice One"
}),
new Routes(
{
    From:"ORD",
    To:"DEL",
    Distance:12021.3,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"ORD",
    To:"DEN",
    Distance:1426.03,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DEN",
    Distance:1426.03,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DEN",
    Distance:1426.03,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"DEN",
    Distance:1426.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DFW",
    Distance:1290.64,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DFW",
    Distance:1290.64,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DFW",
    Distance:1290.64,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"DFW",
    Distance:1290.64,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DLH",
    Distance:638.918,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DOH",
    Distance:11457.1,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DOH",
    Distance:11457.1,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ORD",
    To:"DSM",
    Distance:480.103,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DSM",
    Distance:480.103,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"DSM",
    Distance:480.103,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DTW",
    Distance:376.393,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DTW",
    Distance:376.393,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"DTW",
    Distance:376.393,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"DTW",
    Distance:376.393,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DUB",
    Distance:5895.32,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORD",
    To:"DUB",
    Distance:5895.32,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DUB",
    Distance:5895.32,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ORD",
    To:"DUB",
    Distance:5895.32,
    Airport:"Finnair"
}),
new Routes(
{
    From:"ORD",
    To:"DUB",
    Distance:5895.32,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DUB",
    Distance:5895.32,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"DUB",
    Distance:5895.32,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DUS",
    Distance:6788.41,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ORD",
    To:"DUS",
    Distance:6788.41,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DUS",
    Distance:6788.41,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ORD",
    To:"DUS",
    Distance:6788.41,
    Airport:"Finnair"
}),
new Routes(
{
    From:"ORD",
    To:"DUS",
    Distance:6788.41,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"DUS",
    Distance:6788.41,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ORD",
    To:"DUS",
    Distance:6788.41,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"DUS",
    Distance:6788.41,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"EAU",
    Distance:431.925,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ELM",
    Distance:908.668,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ELP",
    Distance:1987.53,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ELP",
    Distance:1987.53,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"EVV",
    Distance:439.432,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"EVV",
    Distance:439.432,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"EWR",
    Distance:1154.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"EWR",
    Distance:1154.46,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"EWR",
    Distance:1154.46,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"FAR",
    Distance:894.765,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"FAR",
    Distance:894.765,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"FAR",
    Distance:894.765,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"FCO",
    Distance:7742.08,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ORD",
    To:"FCO",
    Distance:7742.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"FCO",
    Distance:7742.08,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ORD",
    To:"FCO",
    Distance:7742.08,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"FCO",
    Distance:7742.08,
    Airport:"Finnair"
}),
new Routes(
{
    From:"ORD",
    To:"FCO",
    Distance:7742.08,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"FCO",
    Distance:7742.08,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"FLL",
    Distance:1905.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"FLL",
    Distance:1905.4,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"FLL",
    Distance:1905.4,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"FLL",
    Distance:1905.4,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"FNT",
    Distance:358.454,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"FNT",
    Distance:358.454,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"FOE",
    Distance:737.272,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"FRA",
    Distance:6969.86,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ORD",
    To:"FRA",
    Distance:6969.86,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"FSD",
    Distance:742.529,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"FSD",
    Distance:742.529,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"FSD",
    Distance:742.529,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"FWA",
    Distance:251.629,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"FWA",
    Distance:251.629,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"FWA",
    Distance:251.629,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"GCM",
    Distance:2597.09,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"ORD",
    To:"GDL",
    Distance:2789.39,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ORD",
    To:"GDL",
    Distance:2789.39,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"GRB",
    Distance:279.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"GRB",
    Distance:279.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"GRB",
    Distance:279.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"GRR",
    Distance:219.729,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"GRR",
    Distance:219.729,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"GRR",
    Distance:219.729,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"GRU",
    Distance:8428.05,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"GSO",
    Distance:948.478,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"GSP",
    Distance:929.833,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"HKG",
    Distance:12522.5,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"HKG",
    Distance:12522.5,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"ORD",
    To:"HKG",
    Distance:12522.5,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"HNL",
    Distance:6819.16,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"HPN",
    Distance:1184.9,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"HPN",
    Distance:1184.9,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"HPN",
    Distance:1184.9,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"HSV",
    Distance:822.235,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"HSV",
    Distance:822.235,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"HSV",
    Distance:822.235,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"IAD",
    Distance:945.406,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"IAH",
    Distance:1490.65,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"IAH",
    Distance:1490.65,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"IAH",
    Distance:1490.65,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"IAH",
    Distance:1490.65,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ICN",
    Distance:10519.1,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ICN",
    Distance:10519.1,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"ICN",
    Distance:10519.1,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"ORD",
    To:"ICT",
    Distance:944.657,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ICT",
    Distance:944.657,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"ICT",
    Distance:944.657,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"IND",
    Distance:285.595,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"IND",
    Distance:285.595,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"IND",
    Distance:285.595,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"IST",
    Distance:8813.93,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"IST",
    Distance:8813.93,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"JAN",
    Distance:1091.95,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"JAX",
    Distance:1392.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"JAX",
    Distance:1392.43,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"JAX",
    Distance:1392.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"JFK",
    Distance:1187.84,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"JFK",
    Distance:1187.84,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"JFK",
    Distance:1187.84,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"ORD",
    To:"JFK",
    Distance:1187.84,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ORD",
    To:"JFK",
    Distance:1187.84,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"LAN",
    Distance:286.631,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LAS",
    Distance:2431.71,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LAS",
    Distance:2431.71,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LAS",
    Distance:2431.71,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"LAS",
    Distance:2431.71,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LAX",
    Distance:2802.12,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LAX",
    Distance:2802.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LAX",
    Distance:2802.12,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LAX",
    Distance:2802.12,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"LAX",
    Distance:2802.12,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LAX",
    Distance:2802.12,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"ORD",
    To:"LEX",
    Distance:520.562,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LEX",
    Distance:520.562,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"LEX",
    Distance:520.562,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LGA",
    Distance:1177.06,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LGA",
    Distance:1177.06,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"LGA",
    Distance:1177.06,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LGA",
    Distance:1177.06,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"LGA",
    Distance:1177.06,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LHR",
    Distance:6343.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LHR",
    Distance:6343.43,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ORD",
    To:"LHR",
    Distance:6343.43,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"LHR",
    Distance:6343.43,
    Airport:"Finnair"
}),
new Routes(
{
    From:"ORD",
    To:"LHR",
    Distance:6343.43,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LHR",
    Distance:6343.43,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ORD",
    To:"LHR",
    Distance:6343.43,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"LHR",
    Distance:6343.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LHR",
    Distance:6343.43,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ORD",
    To:"LIT",
    Distance:889.405,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LIT",
    Distance:889.405,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"LIT",
    Distance:889.405,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LNK",
    Distance:748.579,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LSE",
    Distance:345.098,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"LSE",
    Distance:345.098,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MAD",
    Distance:6744.26,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MAD",
    Distance:6744.26,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MAD",
    Distance:6744.26,
    Airport:"Finnair"
}),
new Routes(
{
    From:"ORD",
    To:"MAD",
    Distance:6744.26,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MAN",
    Distance:6139.96,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MAN",
    Distance:6139.96,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MAN",
    Distance:6139.96,
    Airport:"Finnair"
}),
new Routes(
{
    From:"ORD",
    To:"MAN",
    Distance:6139.96,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MAN",
    Distance:6139.96,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MBJ",
    Distance:2776.33,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MBJ",
    Distance:2776.33,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MBJ",
    Distance:2776.33,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MBS",
    Distance:356.889,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MCI",
    Distance:647.002,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MCI",
    Distance:647.002,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MCI",
    Distance:647.002,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MCO",
    Distance:1620.09,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MCO",
    Distance:1620.09,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MCO",
    Distance:1620.09,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MCO",
    Distance:1620.09,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MDT",
    Distance:953.887,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MDT",
    Distance:953.887,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MDT",
    Distance:953.887,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MEM",
    Distance:791.982,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MEM",
    Distance:791.982,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"MEM",
    Distance:791.982,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MEM",
    Distance:791.982,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MEX",
    Distance:2718.71,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ORD",
    To:"MEX",
    Distance:2718.71,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MEX",
    Distance:2718.71,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"MEX",
    Distance:2718.71,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MEX",
    Distance:2718.71,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MEX",
    Distance:2718.71,
    Airport:"Volaris"
}),
new Routes(
{
    From:"ORD",
    To:"MHK",
    Distance:804.448,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MHK",
    Distance:804.448,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MHT",
    Distance:1353.11,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MIA",
    Distance:1930.04,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MIA",
    Distance:1930.04,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MIA",
    Distance:1930.04,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MKE",
    Distance:107.708,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MKE",
    Distance:107.708,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MKE",
    Distance:107.708,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MKG",
    Distance:190.15,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MLI",
    Distance:223.922,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MLI",
    Distance:223.922,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MLI",
    Distance:223.922,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MOB",
    Distance:1255.46,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MQT",
    Distance:488.17,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MQT",
    Distance:488.17,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MSN",
    Distance:174.472,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MSN",
    Distance:174.472,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MSN",
    Distance:174.472,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MSP",
    Distance:536.987,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MSP",
    Distance:536.987,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"MSP",
    Distance:536.987,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MSP",
    Distance:536.987,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MSP",
    Distance:536.987,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MSY",
    Distance:1349.25,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORD",
    To:"MSY",
    Distance:1349.25,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ORD",
    To:"MSY",
    Distance:1349.25,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MSY",
    Distance:1349.25,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MSY",
    Distance:1349.25,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MSY",
    Distance:1349.25,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MSY",
    Distance:1349.25,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MSY",
    Distance:1349.25,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MSY",
    Distance:1349.25,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MSY",
    Distance:1349.25,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ORD",
    To:"MSY",
    Distance:1349.25,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MSY",
    Distance:1349.25,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"MSY",
    Distance:1349.25,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MTY",
    Distance:2119.51,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MUC",
    Distance:7269.56,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ORD",
    To:"MUC",
    Distance:7269.56,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MYR",
    Distance:1212.25,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"MYR",
    Distance:1212.25,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"NAS",
    Distance:2113.75,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"NRT",
    Distance:10074,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ORD",
    To:"NRT",
    Distance:10074,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"NRT",
    Distance:10074,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"NRT",
    Distance:10074,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"NRT",
    Distance:10074,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"NRT",
    Distance:10074,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"OAK",
    Distance:2947.29,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"OGG",
    Distance:6724.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"OKC",
    Distance:1114.24,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"OKC",
    Distance:1114.24,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"OKC",
    Distance:1114.24,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"OMA",
    Distance:667.88,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"OMA",
    Distance:667.88,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"OMA",
    Distance:667.88,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ORF",
    Distance:1151.68,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PAH",
    Distance:551.929,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PBI",
    Distance:1843.7,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PBI",
    Distance:1843.7,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"PDX",
    Distance:2791.61,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PDX",
    Distance:2791.61,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PDX",
    Distance:2791.61,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"PDX",
    Distance:2791.61,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PEK",
    Distance:10562.4,
    Airport:"Air China"
}),
new Routes(
{
    From:"ORD",
    To:"PEK",
    Distance:10562.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PEK",
    Distance:10562.4,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PEK",
    Distance:10562.4,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"PEK",
    Distance:10562.4,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PHL",
    Distance:1088.32,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PHL",
    Distance:1088.32,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"PHL",
    Distance:1088.32,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PHX",
    Distance:2313.39,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PHX",
    Distance:2313.39,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"PHX",
    Distance:2313.39,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PIA",
    Distance:208.955,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PIA",
    Distance:208.955,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"PIA",
    Distance:208.955,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PIT",
    Distance:662.239,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PIT",
    Distance:662.239,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"PIT",
    Distance:662.239,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PNS",
    Distance:1280.92,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PSP",
    Distance:2653,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PSP",
    Distance:2653,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"PTY",
    Distance:3753.09,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PTY",
    Distance:3753.09,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PUJ",
    Distance:3192.09,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PUJ",
    Distance:3192.09,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PVD",
    Distance:1363.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PVG",
    Distance:11334,
    Airport:"Air China"
}),
new Routes(
{
    From:"ORD",
    To:"PVG",
    Distance:11334,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PVG",
    Distance:11334,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PVG",
    Distance:11334,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"PVG",
    Distance:11334,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PVR",
    Distance:2872.63,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PVR",
    Distance:2872.63,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PVR",
    Distance:2872.63,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"PVR",
    Distance:2872.63,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"PWM",
    Distance:1444.44,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"RAP",
    Distance:1251.36,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"RDU",
    Distance:1039.22,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"RDU",
    Distance:1039.22,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"RDU",
    Distance:1039.22,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"RIC",
    Distance:1031.65,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"RIC",
    Distance:1031.65,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"RIC",
    Distance:1031.65,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"RNO",
    Distance:2683.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"RNO",
    Distance:2683.08,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"ROA",
    Distance:852.926,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ROC",
    Distance:847.2,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"ROC",
    Distance:847.2,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"ROC",
    Distance:847.2,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"RST",
    Distance:431.116,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"RST",
    Distance:431.116,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"RSW",
    Distance:1806.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"RSW",
    Distance:1806.43,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"RSW",
    Distance:1806.43,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"RSW",
    Distance:1806.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SAL",
    Distance:3175.19,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"ORD",
    To:"SAN",
    Distance:2768.04,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SAN",
    Distance:2768.04,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SAN",
    Distance:2768.04,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"SAN",
    Distance:2768.04,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SAT",
    Distance:1677.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SAT",
    Distance:1677.42,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"SAT",
    Distance:1677.42,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SAV",
    Distance:1245.45,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SBN",
    Distance:134.891,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SCE",
    Distance:847.427,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SDF",
    Distance:461.479,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SDF",
    Distance:461.479,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"SDF",
    Distance:461.479,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SEA",
    Distance:2761.77,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SEA",
    Distance:2761.77,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SEA",
    Distance:2761.77,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"SEA",
    Distance:2761.77,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SFO",
    Distance:2963.95,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SFO",
    Distance:2963.95,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SFO",
    Distance:2963.95,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"SFO",
    Distance:2963.95,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SFO",
    Distance:2963.95,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"ORD",
    To:"SGF",
    Distance:705.114,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SGF",
    Distance:705.114,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"SGF",
    Distance:705.114,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SJC",
    Distance:2937.11,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SJC",
    Distance:2937.11,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"SJD",
    Distance:2909.17,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SJD",
    Distance:2909.17,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SJD",
    Distance:2909.17,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"SJD",
    Distance:2909.17,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SJO",
    Distance:3574.81,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SJU",
    Distance:3337.68,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SJU",
    Distance:3337.68,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"ORD",
    To:"SJU",
    Distance:3337.68,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"SJU",
    Distance:3337.68,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SLC",
    Distance:2006.13,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SLC",
    Distance:2006.13,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"SLC",
    Distance:2006.13,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"SLC",
    Distance:2006.13,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SMF",
    Distance:2859.77,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SNA",
    Distance:2771.94,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SNA",
    Distance:2771.94,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"SNA",
    Distance:2771.94,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SPI",
    Distance:280.22,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SRQ",
    Distance:1692.81,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"STC",
    Distance:633.494,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"STL",
    Distance:415.418,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"STL",
    Distance:415.418,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"STL",
    Distance:415.418,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"STT",
    Distance:3408,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SUX",
    Distance:699.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SUX",
    Distance:699.89,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"SXM",
    Distance:3548.93,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SYR",
    Distance:973.905,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"SYR",
    Distance:973.905,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"SYR",
    Distance:973.905,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"TOL",
    Distance:342.454,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"TOL",
    Distance:342.454,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"TPA",
    Distance:1631.26,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"TPA",
    Distance:1631.26,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"TPA",
    Distance:1631.26,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"TPA",
    Distance:1631.26,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"TUL",
    Distance:941.45,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"TUL",
    Distance:941.45,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"TUL",
    Distance:941.45,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"TUS",
    Distance:2309.49,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"TUS",
    Distance:2309.49,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"TVC",
    Distance:360.015,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"TVC",
    Distance:360.015,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"TVC",
    Distance:360.015,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"TXL",
    Distance:7081.23,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ORD",
    To:"TXL",
    Distance:7081.23,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"TYS",
    Distance:764.553,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"TYS",
    Distance:764.553,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"TYS",
    Distance:764.553,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"VIE",
    Distance:7566.46,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"VIE",
    Distance:7566.46,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"WAW",
    Distance:7518.9,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"XNA",
    Distance:839.827,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"XNA",
    Distance:839.827,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"XNA",
    Distance:839.827,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YEG",
    Distance:2279.83,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ORD",
    To:"YEG",
    Distance:2279.83,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YHZ",
    Distance:1988.53,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ORD",
    To:"YHZ",
    Distance:1988.53,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YKF",
    Distance:636.291,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YKF",
    Distance:636.291,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"YOW",
    Distance:1051,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ORD",
    To:"YOW",
    Distance:1051,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YQB",
    Distance:1413.58,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ORD",
    To:"YQB",
    Distance:1413.58,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YQR",
    Distance:1590.03,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ORD",
    To:"YQR",
    Distance:1590.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YUL",
    Distance:1200.65,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ORD",
    To:"YUL",
    Distance:1200.65,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YUL",
    Distance:1200.65,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"ORD",
    To:"YUL",
    Distance:1200.65,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"YUL",
    Distance:1200.65,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YUL",
    Distance:1200.65,
    Airport:"WestJet"
}),
new Routes(
{
    From:"ORD",
    To:"YVR",
    Distance:2831.42,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ORD",
    To:"YVR",
    Distance:2831.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YVR",
    Distance:2831.42,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"YVR",
    Distance:2831.42,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YVR",
    Distance:2831.42,
    Airport:"WestJet"
}),
new Routes(
{
    From:"ORD",
    To:"YWG",
    Distance:1137.84,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ORD",
    To:"YWG",
    Distance:1137.84,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YXE",
    Distance:1810.13,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YXU",
    Distance:565.739,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ORD",
    To:"YXU",
    Distance:565.739,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YYC",
    Distance:2224.28,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ORD",
    To:"YYC",
    Distance:2224.28,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YYC",
    Distance:2224.28,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"YYC",
    Distance:2224.28,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YYC",
    Distance:2224.28,
    Airport:"WestJet"
}),
new Routes(
{
    From:"ORD",
    To:"YYZ",
    Distance:700.36,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ORD",
    To:"YYZ",
    Distance:700.36,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YYZ",
    Distance:700.36,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"ORD",
    To:"YYZ",
    Distance:700.36,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORD",
    To:"YYZ",
    Distance:700.36,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORD",
    To:"YYZ",
    Distance:700.36,
    Airport:"WestJet"
}),
new Routes(
{
    From:"ORD",
    To:"ZRH",
    Distance:7130.72,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ORD",
    To:"ZRH",
    Distance:7130.72,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"ATL",
    Distance:829.702,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORF",
    To:"ATL",
    Distance:829.702,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ORF",
    To:"ATL",
    Distance:829.702,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"ATL",
    Distance:829.702,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ORF",
    To:"ATL",
    Distance:829.702,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORF",
    To:"ATL",
    Distance:829.702,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"ATL",
    Distance:829.702,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"BWI",
    Distance:256.885,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ORF",
    To:"BWI",
    Distance:256.885,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"CLT",
    Distance:465.37,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"CLT",
    Distance:465.37,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORF",
    To:"DCA",
    Distance:229.708,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"DCA",
    Distance:229.708,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORF",
    To:"DFW",
    Distance:1947.35,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"DFW",
    Distance:1947.35,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORF",
    To:"DTW",
    Distance:851.254,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORF",
    To:"EWR",
    Distance:457.535,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"IAD",
    Distance:253.11,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"IAH",
    Distance:1930.48,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"JFK",
    Distance:466.345,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"JFK",
    Distance:466.345,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORF",
    To:"JFK",
    Distance:466.345,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORF",
    To:"LGA",
    Distance:476.468,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"LGA",
    Distance:476.468,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORF",
    To:"LGA",
    Distance:476.468,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORF",
    To:"MCO",
    Distance:1055.31,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ORF",
    To:"MCO",
    Distance:1055.31,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORF",
    To:"MCO",
    Distance:1055.31,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"MDW",
    Distance:1131.13,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ORF",
    To:"MDW",
    Distance:1131.13,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"MIA",
    Distance:1293.67,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"MIA",
    Distance:1293.67,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORF",
    To:"MSP",
    Distance:1678.89,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ORF",
    To:"ORD",
    Distance:1151.68,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"PHL",
    Distance:341.47,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORF",
    To:"PHL",
    Distance:341.47,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ORH",
    To:"FLL",
    Distance:1952.71,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"ORH",
    To:"MCO",
    Distance:1757.86,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"ORI",
    To:"ADQ",
    Distance:25.7216,
    Airport:"Astair"
}),
new Routes(
{
    From:"ORK",
    To:"ACE",
    Distance:2580.91,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"ACE",
    Distance:2580.91,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ORK",
    To:"AGP",
    Distance:1715.46,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"AGP",
    Distance:1715.46,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ORK",
    To:"ALC",
    Distance:1629.04,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"AMS",
    Distance:906.114,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"BCN",
    Distance:1420.74,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"BHX",
    Distance:464.936,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"BRS",
    Distance:401.7,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"BRU",
    Distance:905.525,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"CDG",
    Distance:841.932,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"EDI",
    Distance:566.431,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"EMA",
    Distance:498.742,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ORK",
    To:"FAO",
    Distance:1649.19,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"FAO",
    Distance:1649.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ORK",
    To:"FUE",
    Distance:2638.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ORK",
    To:"GDN",
    Distance:1809.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ORK",
    To:"GLA",
    Distance:521.05,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"JER",
    Distance:532.446,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"LGW",
    Distance:579.476,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ORK",
    To:"LHR",
    Distance:555.067,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"LIS",
    Distance:1453.06,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"LPA",
    Distance:2720,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ORK",
    To:"LPL",
    Distance:415.522,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ORK",
    To:"MAN",
    Distance:452.087,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"MUC",
    Distance:1492,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"NCE",
    Distance:1480.31,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"NCL",
    Distance:573.28,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"PMI",
    Distance:1616.37,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ORK",
    To:"PMI",
    Distance:1616.37,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ORK",
    To:"STN",
    Distance:598.862,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ORK",
    To:"TFS",
    Distance:2730.32,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ORK",
    To:"VNO",
    Distance:2246.9,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ORK",
    To:"WRO",
    Distance:1750.7,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ORN",
    To:"AAE",
    Distance:767.612,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"ALC",
    Distance:295.644,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"ALC",
    Distance:295.644,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ORN",
    To:"ALC",
    Distance:295.644,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORN",
    To:"ALG",
    Distance:364.277,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"AZR",
    Distance:866.766,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"BCN",
    Distance:673.103,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"BCN",
    Distance:673.103,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ORN",
    To:"BCN",
    Distance:673.103,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORN",
    To:"CBH",
    Distance:467.92,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"CDG",
    Distance:1511.08,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORN",
    To:"CDG",
    Distance:1511.08,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"CMN",
    Distance:685.95,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"CZL",
    Distance:655.718,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"FCO",
    Distance:1309.19,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ORN",
    To:"GHA",
    Distance:543.413,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"HME",
    Distance:764.352,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"IST",
    Distance:2623.35,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"IST",
    Distance:2623.35,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ORN",
    To:"LIL",
    Distance:1687.59,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORN",
    To:"LIL",
    Distance:1687.59,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"LYS",
    Distance:1221.45,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORN",
    To:"LYS",
    Distance:1221.45,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"MAD",
    Distance:599.664,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORN",
    To:"MED",
    Distance:4038.83,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"ORN",
    To:"MLH",
    Distance:1491.18,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORN",
    To:"MRS",
    Distance:1001.82,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORN",
    To:"MRS",
    Distance:1001.82,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"OGX",
    Distance:693.255,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"ORY",
    Distance:1477.06,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORN",
    To:"ORY",
    Distance:1477.06,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"TLS",
    Distance:906.148,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORN",
    To:"TLS",
    Distance:906.148,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORN",
    To:"TUN",
    Distance:981.93,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"ORV",
    To:"IAN",
    Distance:31.0274,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"ORV",
    To:"IAN",
    Distance:31.0274,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ORV",
    To:"OTZ",
    Distance:69.3081,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"ORV",
    To:"OTZ",
    Distance:69.3081,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ORY",
    To:"AAE",
    Distance:1395.37,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORY",
    To:"AAE",
    Distance:1395.37,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORY",
    To:"ABJ",
    Distance:4869.43,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"ORY",
    To:"AGA",
    Distance:2274.57,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"ORY",
    To:"AGA",
    Distance:2274.57,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"AGF",
    Distance:523.791,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"ORY",
    To:"AGP",
    Distance:1450.95,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"AGP",
    Distance:1450.95,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"AGP",
    Distance:1450.95,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"AJA",
    Distance:907.975,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"AJA",
    Distance:907.975,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"ORY",
    To:"ALC",
    Distance:1184.58,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"ALC",
    Distance:1184.58,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"ALG",
    Distance:1339.95,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORY",
    To:"ALG",
    Distance:1339.95,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORY",
    To:"ARN",
    Distance:1573.47,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ORY",
    To:"ATH",
    Distance:2106.45,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"ATH",
    Distance:2106.45,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ORY",
    To:"AUR",
    Distance:426.336,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"ORY",
    To:"AYT",
    Distance:2644.18,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"BCN",
    Distance:826.272,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"BCN",
    Distance:826.272,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"BES",
    Distance:499.335,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"BGO",
    Distance:1299.18,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ORY",
    To:"BIA",
    Distance:881.161,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"BIA",
    Distance:881.161,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"ORY",
    To:"BIO",
    Distance:727.204,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"BIO",
    Distance:727.204,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"BIQ",
    Distance:656.53,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"BJA",
    Distance:1353.81,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORY",
    To:"BJA",
    Distance:1353.81,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORY",
    To:"BJV",
    Distance:2404.68,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"BKO",
    Distance:4135.19,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORY",
    To:"BLJ",
    Distance:1478.19,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORY",
    To:"BLQ",
    Distance:824.939,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"BLQ",
    Distance:824.939,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"BOD",
    Distance:492.442,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"BSK",
    Distance:1573.89,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORY",
    To:"BSK",
    Distance:1573.89,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORY",
    To:"BUD",
    Distance:1260.68,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"BVE",
    Distance:403.158,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"ORY",
    To:"CAY",
    Distance:7084.98,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"ORY",
    To:"CAY",
    Distance:7084.98,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"CAY",
    Distance:7084.98,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"ORY",
    To:"CFE",
    Distance:332.419,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"CFR",
    Distance:211.108,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"ORY",
    To:"CLY",
    Distance:850.642,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"CLY",
    Distance:850.642,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"ORY",
    To:"CMN",
    Distance:1896.83,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"ORY",
    To:"CPH",
    Distance:1037.34,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ORY",
    To:"CTA",
    Distance:1617.79,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"CWL",
    Distance:503.703,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"CWL",
    Distance:503.703,
    Airport:"CityJet"
}),
new Routes(
{
    From:"ORY",
    To:"CZL",
    Distance:1427.08,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORY",
    To:"CZL",
    Distance:1427.08,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORY",
    To:"DBV",
    Distance:1410.01,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"DCM",
    Distance:574.795,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"ORY",
    To:"DJE",
    Distance:1792.03,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORY",
    To:"DJE",
    Distance:1792.03,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"DJE",
    Distance:1792.03,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"ORY",
    To:"DKR",
    Distance:4191.51,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"ORY",
    To:"DZA",
    Distance:8036.36,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"ORY",
    To:"DZA",
    Distance:8036.36,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"ORY",
    To:"ESU",
    Distance:2176.18,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"ORY",
    To:"ESU",
    Distance:2176.18,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"EWR",
    Distance:5855.57,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"EWR",
    Distance:5855.57,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ORY",
    To:"EWR",
    Distance:5855.57,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"FAO",
    Distance:1547.26,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"FAO",
    Distance:1547.26,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ORY",
    To:"FCO",
    Distance:1089.85,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"FCO",
    Distance:1089.85,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"FCO",
    Distance:1089.85,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ORY",
    To:"FDF",
    Distance:6850.15,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"ORY",
    To:"FDF",
    Distance:6850.15,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"FDF",
    Distance:6850.15,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"ORY",
    To:"FEZ",
    Distance:1753.79,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"ORY",
    To:"FLR",
    Distance:871.415,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"FLR",
    Distance:871.415,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"FNC",
    Distance:2389.93,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORY",
    To:"FSC",
    Distance:960.893,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"ORY",
    To:"GVA",
    Distance:394.728,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ORY",
    To:"HEL",
    Distance:1929.03,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ORY",
    To:"HER",
    Distance:2385.58,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"IBZ",
    Distance:1098.37,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"IBZ",
    Distance:1098.37,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"IBZ",
    Distance:1098.37,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"IKA",
    Distance:4207.88,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"ORY",
    To:"JFK",
    Distance:5832.49,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"JFK",
    Distance:5832.49,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ORY",
    To:"JFK",
    Distance:5832.49,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"LAI",
    Distance:427.507,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"ORY",
    To:"LCY",
    Distance:350.027,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"LCY",
    Distance:350.027,
    Airport:"CityJet"
}),
new Routes(
{
    From:"ORY",
    To:"LDE",
    Distance:643.217,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"ORY",
    To:"LHR",
    Distance:366.181,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ORY",
    To:"LHR",
    Distance:366.181,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ORY",
    To:"LHR",
    Distance:366.181,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"LIG",
    Distance:330.49,
    Airport:"Twin Jet"
}),
new Routes(
{
    From:"ORY",
    To:"LIN",
    Distance:637.823,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"LIN",
    Distance:637.823,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ORY",
    To:"LIN",
    Distance:637.823,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ORY",
    To:"LIS",
    Distance:1437.25,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORY",
    To:"LIS",
    Distance:1437.25,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"LIS",
    Distance:1437.25,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"LIS",
    Distance:1437.25,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"ORY",
    To:"LIS",
    Distance:1437.25,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"LPA",
    Distance:2767.39,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"LPA",
    Distance:2767.39,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"LPY",
    Distance:419.031,
    Airport:"Hex'Air"
}),
new Routes(
{
    From:"ORY",
    To:"LRH",
    Distance:389.262,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"ORY",
    To:"LRT",
    Distance:442.538,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"ORY",
    To:"LYS",
    Distance:392.034,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"MAD",
    Distance:1027.77,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"ORY",
    To:"MAD",
    Distance:1027.77,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"MAD",
    Distance:1027.77,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"MIR",
    Distance:1596.61,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"MIR",
    Distance:1596.61,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"ORY",
    To:"MLA",
    Distance:1739.12,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"MLA",
    Distance:1739.12,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"ORY",
    To:"MLA",
    Distance:1739.12,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"MLH",
    Distance:403.687,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"MPL",
    Distance:585.688,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"MRS",
    Distance:627.917,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"NAP",
    Distance:1280.16,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"NAP",
    Distance:1280.16,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ORY",
    To:"NCE",
    Distance:675.826,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"NCE",
    Distance:675.826,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ORY",
    To:"NTE",
    Distance:343.478,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"OPO",
    Distance:1199.91,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORY",
    To:"OPO",
    Distance:1199.91,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"OPO",
    Distance:1199.91,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"OPO",
    Distance:1199.91,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"ORY",
    To:"OPO",
    Distance:1199.91,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"ORN",
    Distance:1477.06,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORY",
    To:"ORN",
    Distance:1477.06,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORY",
    To:"OSL",
    Distance:1392.02,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ORY",
    To:"OUD",
    Distance:1589.38,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"ORY",
    To:"OUD",
    Distance:1589.38,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"OZZ",
    Distance:2126.42,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"ORY",
    To:"PAP",
    Distance:7351.18,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"ORY",
    To:"PDL",
    Distance:2559.62,
    Airport:"SATA International"
}),
new Routes(
{
    From:"ORY",
    To:"PGF",
    Distance:666.661,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"ORY",
    To:"PGX",
    Distance:409.312,
    Airport:"Twin Jet"
}),
new Routes(
{
    From:"ORY",
    To:"PMI",
    Distance:1020.26,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"ORY",
    To:"PMI",
    Distance:1020.26,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"PMI",
    Distance:1020.26,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"PMI",
    Distance:1020.26,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"PMO",
    Distance:1455.19,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"PMO",
    Distance:1455.19,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ORY",
    To:"PRG",
    Distance:873.426,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"PSA",
    Distance:833.699,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"PSA",
    Distance:833.699,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ORY",
    To:"PTP",
    Distance:6750.97,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"ORY",
    To:"PTP",
    Distance:6750.97,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"PTP",
    Distance:6750.97,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"ORY",
    To:"PUF",
    Distance:631.733,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"QSF",
    Distance:1415.94,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORY",
    To:"QSF",
    Distance:1415.94,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORY",
    To:"RAK",
    Distance:2093.88,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"ORY",
    To:"RAK",
    Distance:2093.88,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"RBA",
    Distance:1796.92,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"RBA",
    Distance:1796.92,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"RBA",
    Distance:1796.92,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"ORY",
    To:"RDZ",
    Distance:480.166,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"ORY",
    To:"RUN",
    Distance:9358.73,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"ORY",
    To:"RUN",
    Distance:9358.73,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"RUN",
    Distance:9358.73,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"ORY",
    To:"SAW",
    Distance:2281.98,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"SAW",
    Distance:2281.98,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"SCU",
    Distance:7499.9,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"ORY",
    To:"SOU",
    Distance:363.563,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"SOU",
    Distance:363.563,
    Airport:"Flybe"
}),
new Routes(
{
    From:"ORY",
    To:"SVQ",
    Distance:1422.86,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"SVQ",
    Distance:1422.86,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"SVQ",
    Distance:1422.86,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"SXB",
    Distance:387.674,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"SXF",
    Distance:885.905,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ORY",
    To:"SXM",
    Distance:6721.75,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"ORY",
    To:"SXM",
    Distance:6721.75,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"ORY",
    To:"TFN",
    Distance:2759.97,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"TFS",
    Distance:2813.46,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"TLM",
    Distance:1556.09,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORY",
    To:"TLM",
    Distance:1556.09,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ORY",
    To:"TLN",
    Distance:690.757,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"TLS",
    Distance:571.819,
    Airport:"Air France"
}),
new Routes(
{
    From:"ORY",
    To:"TLS",
    Distance:571.819,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ORY",
    To:"TLV",
    Distance:3284.73,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"TNG",
    Distance:1595.66,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"ORY",
    To:"TOE",
    Distance:1711.5,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"ORY",
    To:"TUN",
    Distance:1466.28,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"TUN",
    Distance:1466.28,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"ORY",
    To:"TXL",
    Distance:879.396,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ORY",
    To:"UIP",
    Distance:489.349,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"ORY",
    To:"VCE",
    Distance:835.761,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ORY",
    To:"VCE",
    Distance:835.761,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ORY",
    To:"VKO",
    Distance:2470.09,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ORY",
    To:"VKO",
    Distance:2470.09,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"VLC",
    Distance:1051.54,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"VLC",
    Distance:1051.54,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ORY",
    To:"YUL",
    Distance:5525.42,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"OSD",
    To:"ARN",
    Distance:433.696,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSD",
    To:"BMA",
    Distance:464.757,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"OSI",
    To:"DBV",
    Distance:325.507,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"OSI",
    To:"SPU",
    Distance:292.293,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"OSI",
    To:"STN",
    Distance:1533.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OSI",
    To:"ZAG",
    Distance:215.52,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"OSL",
    To:"AAL",
    Distance:352.331,
    Airport:"ABSA - Aerolinhas Brasileiras"
}),
new Routes(
{
    From:"OSL",
    To:"AAL",
    Distance:352.331,
    Airport:"British Airways"
}),
new Routes(
{
    From:"OSL",
    To:"AAL",
    Distance:352.331,
    Airport:"Finnair"
}),
new Routes(
{
    From:"OSL",
    To:"AAL",
    Distance:352.331,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"AAR",
    Distance:433.894,
    Airport:"British Airways"
}),
new Routes(
{
    From:"OSL",
    To:"ABZ",
    Distance:835.308,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"OSL",
    To:"ABZ",
    Distance:835.308,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"AES",
    Distance:373.835,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"AES",
    Distance:373.835,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"AGP",
    Distance:2840.53,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"AGP",
    Distance:2840.53,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"AJA",
    Distance:2037.6,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"ALC",
    Distance:2570.41,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"ALC",
    Distance:2570.41,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"ALF",
    Distance:1224.99,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"ALF",
    Distance:1224.99,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"AMS",
    Distance:959.183,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"OSL",
    To:"AMS",
    Distance:959.183,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"AMS",
    Distance:959.183,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"ARN",
    Distance:384.53,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"OSL",
    To:"ARN",
    Distance:384.53,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"ARN",
    Distance:384.53,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"ATH",
    Distance:2635.02,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"OSL",
    To:"ATH",
    Distance:2635.02,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"ATH",
    Distance:2635.02,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"AYT",
    Distance:2942.67,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"BCN",
    Distance:2190.3,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"OSL",
    To:"BCN",
    Distance:2190.3,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"OSL",
    To:"BCN",
    Distance:2190.3,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"BCN",
    Distance:2190.3,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"BDU",
    Distance:1045.44,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"BEG",
    Distance:1815.67,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"BGO",
    Distance:324.705,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"BGO",
    Distance:324.705,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"BIO",
    Distance:2101.53,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"BKK",
    Distance:8671.29,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"BKK",
    Distance:8671.29,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"BKK",
    Distance:8671.29,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"OSL",
    To:"BLL",
    Distance:508.32,
    Airport:"British Airways"
}),
new Routes(
{
    From:"OSL",
    To:"BLL",
    Distance:508.32,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"BLL",
    Distance:508.32,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"BNN",
    Distance:588.402,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"OSL",
    To:"BOJ",
    Distance:2252.61,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"BOO",
    Distance:802.696,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"BOO",
    Distance:802.696,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"BRU",
    Distance:1112.63,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"OSL",
    To:"BRU",
    Distance:1112.63,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"BTS",
    Distance:1393.44,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"BUD",
    Distance:1513.49,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"CDG",
    Distance:1357.19,
    Airport:"Air France"
}),
new Routes(
{
    From:"OSL",
    To:"CDG",
    Distance:1357.19,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"OSL",
    To:"CDG",
    Distance:1357.19,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"CGN",
    Distance:1066.23,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"CHQ",
    Distance:2897.69,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"CHQ",
    Distance:2897.69,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"CPH",
    Distance:517.023,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"CPH",
    Distance:517.023,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"OSL",
    To:"CPH",
    Distance:517.023,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"DBV",
    Distance:2019.96,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"DOH",
    Distance:4956.82,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"OSL",
    To:"DUB",
    Distance:1291.83,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"DUB",
    Distance:1291.83,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"DUS",
    Distance:1026.06,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"OSL",
    To:"DUS",
    Distance:1026.06,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"EDI",
    Distance:970.25,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"EDI",
    Distance:970.25,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"EVE",
    Distance:959.971,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"EVE",
    Distance:959.971,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"EWR",
    Distance:5932.99,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"EWR",
    Distance:5932.99,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OSL",
    To:"FAO",
    Distance:2909.78,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"FCO",
    Distance:2046.32,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"FCO",
    Distance:2046.32,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"FDE",
    Distance:318.651,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"OSL",
    To:"FLL",
    Distance:7581.88,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"FRA",
    Distance:1141.99,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"OSL",
    To:"FRA",
    Distance:1141.99,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"OSL",
    To:"FRA",
    Distance:1141.99,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"FRO",
    Distance:363.004,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"OSL",
    To:"GDN",
    Distance:782.715,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"GDN",
    Distance:782.715,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"GOT",
    Distance:289.456,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"GOT",
    Distance:289.456,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"OSL",
    To:"GVA",
    Distance:1585.9,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"GZP",
    Distance:3055.55,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"HAM",
    Distance:732.919,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"OSL",
    To:"HAM",
    Distance:732.919,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"HAU",
    Distance:342.959,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"HAU",
    Distance:342.959,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"HEL",
    Distance:763.498,
    Airport:"Finnair"
}),
new Routes(
{
    From:"OSL",
    To:"HEL",
    Distance:763.498,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"HEL",
    Distance:763.498,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"HOV",
    Distance:348.151,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"OSL",
    To:"ISB",
    Distance:5289.16,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"OSL",
    To:"IST",
    Distance:2458.14,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"IST",
    Distance:2458.14,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"OSL",
    To:"JFK",
    Distance:5917.29,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"KBP",
    Distance:1653.24,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"KEF",
    Distance:1781.41,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"OSL",
    To:"KEF",
    Distance:1781.41,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"KEF",
    Distance:1781.41,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"KKN",
    Distance:1368.66,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"KKN",
    Distance:1368.66,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"KRK",
    Distance:1250.58,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"KRS",
    Distance:279.975,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"KRS",
    Distance:279.975,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"KSU",
    Distance:367.563,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"LCA",
    Distance:3248.04,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"LED",
    Distance:1062.61,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"LGW",
    Distance:1226.45,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"LHR",
    Distance:1204.93,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OSL",
    To:"LHR",
    Distance:1204.93,
    Airport:"British Airways"
}),
new Routes(
{
    From:"OSL",
    To:"LHR",
    Distance:1204.93,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"OSL",
    To:"LHR",
    Distance:1204.93,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"LIS",
    Distance:2768.55,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"LIS",
    Distance:2768.55,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OSL",
    To:"LPA",
    Distance:4104.84,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"LPA",
    Distance:4104.84,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"LYR",
    Distance:2013.34,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"LYR",
    Distance:2013.34,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"MAN",
    Distance:1110.95,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"MAN",
    Distance:1110.95,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"MJV",
    Distance:2630.63,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"MLA",
    Distance:2716.88,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"MOL",
    Distance:349.152,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"MOL",
    Distance:349.152,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"MUC",
    Distance:1317.3,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"OSL",
    To:"MUC",
    Distance:1317.3,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"MUC",
    Distance:1317.3,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"MXP",
    Distance:1626.9,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"MXP",
    Distance:1626.9,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"NCE",
    Distance:1857.07,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"NCE",
    Distance:1857.07,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"OLA",
    Distance:397.487,
    Airport:"ABSA - Aerolinhas Brasileiras"
}),
new Routes(
{
    From:"OSL",
    To:"ORY",
    Distance:1392.02,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"PLQ",
    Distance:750.604,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"PMI",
    Distance:2367.82,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"PMI",
    Distance:2367.82,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"PRG",
    Distance:1139.79,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"PRG",
    Distance:1139.79,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"PSA",
    Distance:1836.44,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"PUY",
    Distance:1711.6,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"RAK",
    Distance:3477.47,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"RIX",
    Distance:828.535,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"OSL",
    To:"RIX",
    Distance:828.535,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"RIX",
    Distance:828.535,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"RRS",
    Distance:265.456,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"OSL",
    To:"SDN",
    Distance:324.727,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"OSL",
    To:"SOG",
    Distance:240.812,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"OSL",
    To:"SPU",
    Distance:1884.6,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"SRP",
    Distance:323.28,
    Airport:"DAT Danish Air Transport"
}),
new Routes(
{
    From:"OSL",
    To:"SSJ",
    Distance:644.462,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"OSL",
    To:"SVG",
    Distance:340.873,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"SVG",
    Distance:340.873,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"SVO",
    Distance:1604.26,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"OSL",
    To:"SVO",
    Distance:1604.26,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"SXF",
    Distance:881.48,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"SZZ",
    Distance:770.018,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"TFS",
    Distance:4136.96,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"TLL",
    Distance:771.485,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"OSL",
    To:"TLL",
    Distance:771.485,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"TLL",
    Distance:771.485,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"TOS",
    Distance:1115.47,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"OSL",
    To:"TOS",
    Distance:1115.47,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"TOS",
    Distance:1115.47,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"TRD",
    Distance:363.018,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"TRD",
    Distance:363.018,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"TXL",
    Distance:859.382,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"OSL",
    To:"TXL",
    Distance:859.382,
    Airport:"Finnair"
}),
new Routes(
{
    From:"OSL",
    To:"TXL",
    Distance:859.382,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"OSL",
    To:"TXL",
    Distance:859.382,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"VCE",
    Distance:1635.39,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"VDB",
    Distance:134.641,
    Airport:"ABSA - Aerolinhas Brasileiras"
}),
new Routes(
{
    From:"OSL",
    To:"VIE",
    Distance:1388.87,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"OSL",
    To:"VIE",
    Distance:1388.87,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"VNO",
    Distance:1047.15,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"VXO",
    Distance:419.445,
    Airport:"NextJet"
}),
new Routes(
{
    From:"OSL",
    To:"WAW",
    Distance:1079.1,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OSL",
    To:"ZRH",
    Distance:1425.02,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OSL",
    To:"ZRH",
    Distance:1425.02,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"OSR",
    To:"CDG",
    Distance:1127.61,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"OSR",
    To:"PRG",
    Distance:279.444,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"OSR",
    To:"PRG",
    Distance:279.444,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"OSR",
    To:"STN",
    Distance:1276.48,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OSS",
    To:"CEK",
    Distance:1832.47,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"OSS",
    To:"CEK",
    Distance:1832.47,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"DME",
    Distance:3025.2,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"OSS",
    To:"DME",
    Distance:3025.2,
    Airport:"Comores Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"DME",
    Distance:3025.2,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"DME",
    Distance:3025.2,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"DME",
    Distance:3025.2,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"FRU",
    Distance:306.297,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"OSS",
    To:"FRU",
    Distance:306.297,
    Airport:"Apache Air"
}),
new Routes(
{
    From:"OSS",
    To:"FRU",
    Distance:306.297,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"IKT",
    Distance:2715.99,
    Airport:"Comores Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"IKT",
    Distance:2715.99,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"IST",
    Distance:3662.46,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"OSS",
    To:"IST",
    Distance:3662.46,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"KJA",
    Distance:2243.93,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"OSS",
    To:"KJA",
    Distance:2243.93,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"KUF",
    Distance:2218.37,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"KZN",
    Distance:2392.26,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"LED",
    Distance:3607.08,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"LED",
    Distance:3607.08,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"OVB",
    Distance:1758.68,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"OSS",
    To:"OVB",
    Distance:1758.68,
    Airport:"Comores Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"OVB",
    Distance:1758.68,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"OVB",
    Distance:1758.68,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"SGC",
    Distance:2305.96,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"OSS",
    To:"SGC",
    Distance:2305.96,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"SVX",
    Distance:1991.71,
    Airport:"Comores Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"SVX",
    Distance:1991.71,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"SVX",
    Distance:1991.71,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"OSS",
    To:"URC",
    Distance:1260.66,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"OSS",
    To:"URC",
    Distance:1260.66,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"OST",
    To:"LGG",
    Distance:191.386,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"OSW",
    To:"DME",
    Distance:1452.25,
    Airport:"Orenburg Airlines"
}),
new Routes(
{
    From:"OSY",
    To:"MJF",
    Distance:164.708,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"OSY",
    To:"RVK",
    Distance:45.6175,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"OSY",
    To:"TRD",
    Distance:117.255,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"OTD",
    To:"SIC",
    Distance:11287.3,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"OTH",
    To:"PDX",
    Distance:274.577,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"OTH",
    To:"SFO",
    Distance:663.788,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OTP",
    To:"AHO",
    Distance:1518.66,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"AMM",
    Distance:1667.31,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"OTP",
    To:"AMM",
    Distance:1667.31,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"AMS",
    Distance:1784.23,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"OTP",
    To:"AMS",
    Distance:1784.23,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"ATH",
    Distance:759.514,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"OTP",
    To:"ATH",
    Distance:759.514,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"OTP",
    To:"ATH",
    Distance:759.514,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"BAY",
    Distance:398.605,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"OTP",
    To:"BAY",
    Distance:398.605,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"BCN",
    Distance:1981.84,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"OTP",
    To:"BCN",
    Distance:1981.84,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"OTP",
    To:"BCN",
    Distance:1981.84,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"OTP",
    To:"BCN",
    Distance:1981.84,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"BCN",
    Distance:1981.84,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"BEG",
    Distance:458.624,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"OTP",
    To:"BEG",
    Distance:458.624,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"BEY",
    Distance:1441.2,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"OTP",
    To:"BEY",
    Distance:1441.2,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"BGY",
    Distance:1290.09,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"BLQ",
    Distance:1172.17,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"BRI",
    Distance:851.095,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"BRU",
    Distance:1754.84,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"OTP",
    To:"BRU",
    Distance:1754.84,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"BUD",
    Distance:617,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"BVA",
    Distance:1888.86,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"CDG",
    Distance:1851.33,
    Airport:"Air France"
}),
new Routes(
{
    From:"OTP",
    To:"CDG",
    Distance:1851.33,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"CIA",
    Distance:1136.17,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"CLJ",
    Distance:309.456,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"OTP",
    To:"CLJ",
    Distance:309.456,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"CPH",
    Distance:1552.73,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OTP",
    To:"CRL",
    Distance:1744.68,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"CTA",
    Distance:1215.19,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"CUF",
    Distance:1460.93,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"DOH",
    Distance:3137.66,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"OTP",
    To:"DTM",
    Distance:1570.31,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"DUB",
    Distance:2531,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OTP",
    To:"DUB",
    Distance:2531,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"DUS",
    Distance:1615.89,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"OTP",
    To:"DWC",
    Distance:3432.81,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"DXB",
    Distance:3393.41,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"OTP",
    To:"DXB",
    Distance:3393.41,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"EIN",
    Distance:1713.05,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"FCO",
    Distance:1162.76,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"OTP",
    To:"FCO",
    Distance:1162.76,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"OTP",
    To:"FCO",
    Distance:1162.76,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"FRA",
    Distance:1451.78,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"OTP",
    To:"FRA",
    Distance:1451.78,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"OTP",
    To:"FRA",
    Distance:1451.78,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"GVA",
    Distance:1567.57,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"GVA",
    Distance:1567.57,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"IAS",
    Distance:312.728,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"OTP",
    To:"IAS",
    Distance:312.728,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"IST",
    Distance:456.913,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"IST",
    Distance:456.913,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"OTP",
    To:"KIV",
    Distance:341.685,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"OTP",
    To:"KIV",
    Distance:341.685,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"OTP",
    To:"KIV",
    Distance:341.685,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"LCA",
    Distance:1254.31,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"OTP",
    To:"LCA",
    Distance:1254.31,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"LCA",
    Distance:1254.31,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"LGW",
    Distance:2079.76,
    Airport:"easyJet"
}),
new Routes(
{
    From:"OTP",
    To:"LHR",
    Distance:2105.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"OTP",
    To:"LHR",
    Distance:2105.01,
    Airport:"British Airways"
}),
new Routes(
{
    From:"OTP",
    To:"LHR",
    Distance:2105.01,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"LIN",
    Distance:1323.86,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"OTP",
    To:"LIN",
    Distance:1323.86,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"LIS",
    Distance:2972.17,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"OTP",
    To:"LTN",
    Distance:2107.55,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"MAD",
    Distance:2458.82,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"OTP",
    To:"MAD",
    Distance:2458.82,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"MAD",
    Distance:2458.82,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"MUC",
    Distance:1172.18,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"OTP",
    To:"MUC",
    Distance:1172.18,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"MXP",
    Distance:1366.02,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"NAP",
    Distance:1046.95,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"NCE",
    Distance:1507.76,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"OMR",
    Distance:424.63,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"OTP",
    To:"OMR",
    Distance:424.63,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"PEG",
    Distance:1100.94,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"PRG",
    Distance:1081.63,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"OTP",
    To:"PRG",
    Distance:1081.63,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"PRG",
    Distance:1081.63,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"OTP",
    To:"PSA",
    Distance:1255.77,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"SAW",
    Distance:485.154,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"OTP",
    To:"SKG",
    Distance:518.406,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"SOF",
    Distance:301.026,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"OTP",
    To:"SOF",
    Distance:301.026,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"OTP",
    To:"SOF",
    Distance:301.026,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"STN",
    Distance:2067.37,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OTP",
    To:"SUJ",
    Distance:427.276,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"OTP",
    To:"SUJ",
    Distance:427.276,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"SVO",
    Distance:1496.89,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"OTP",
    To:"SVO",
    Distance:1496.89,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"TLV",
    Distance:1591,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"OTP",
    To:"TLV",
    Distance:1591,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"TLV",
    Distance:1591,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"TRF",
    Distance:1944.52,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"TSF",
    Distance:1096.55,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"TSR",
    Distance:397.832,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"OTP",
    To:"TSR",
    Distance:397.832,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"TXL",
    Distance:1291.86,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"OTP",
    To:"TXL",
    Distance:1291.86,
    Airport:"Finnair"
}),
new Routes(
{
    From:"OTP",
    To:"VIE",
    Distance:829.982,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"OTP",
    To:"VIE",
    Distance:829.982,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"VLC",
    Distance:2256.19,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"VRN",
    Distance:1198.24,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"WAW",
    Distance:925.085,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"OTP",
    To:"WAW",
    Distance:925.085,
    Airport:"Tarom"
}),
new Routes(
{
    From:"OTP",
    To:"ZAZ",
    Distance:2216.21,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"OTP",
    To:"ZRH",
    Distance:1389.75,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"OTZ",
    To:"ABL",
    Distance:207.442,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OTZ",
    To:"ABL",
    Distance:207.442,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OTZ",
    To:"ANC",
    Distance:879.917,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OTZ",
    To:"BKC",
    Distance:119.301,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OTZ",
    To:"BKC",
    Distance:119.301,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OTZ",
    To:"DRG",
    Distance:90.9366,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OTZ",
    To:"DRG",
    Distance:90.9366,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OTZ",
    To:"IAN",
    Distance:94.7362,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OTZ",
    To:"IAN",
    Distance:94.7362,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OTZ",
    To:"KVL",
    Distance:126.736,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OTZ",
    To:"OME",
    Distance:294.148,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"OTZ",
    To:"OME",
    Distance:294.148,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OTZ",
    To:"ORV",
    Distance:69.3081,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OTZ",
    To:"ORV",
    Distance:69.3081,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OTZ",
    To:"PHO",
    Distance:241.028,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OTZ",
    To:"PHO",
    Distance:241.028,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OTZ",
    To:"SHG",
    Distance:237.21,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OTZ",
    To:"SHG",
    Distance:237.21,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OTZ",
    To:"WLK",
    Distance:118.994,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OTZ",
    To:"WLK",
    Distance:118.994,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OTZ",
    To:"WTK",
    Distance:77.4836,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"OTZ",
    To:"WTK",
    Distance:77.4836,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"OUA",
    To:"ABJ",
    Distance:831.929,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"OUA",
    To:"ABJ",
    Distance:831.929,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"OUA",
    To:"ABJ",
    Distance:831.929,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"OUA",
    To:"ABJ",
    Distance:831.929,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"OUA",
    To:"ABJ",
    Distance:831.929,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"OUA",
    To:"ABJ",
    Distance:831.929,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"OUA",
    To:"ABJ",
    Distance:831.929,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OUA",
    To:"ACC",
    Distance:764.743,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"OUA",
    To:"ADD",
    Distance:4417.02,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"OUA",
    To:"ALG",
    Distance:2747.15,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"OUA",
    To:"BKO",
    Distance:699.276,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"OUA",
    To:"BKO",
    Distance:699.276,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"OUA",
    To:"BKO",
    Distance:699.276,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"OUA",
    To:"BOY",
    Distance:334.281,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"OUA",
    To:"BRU",
    Distance:4320.71,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"OUA",
    To:"BRU",
    Distance:4320.71,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"OUA",
    To:"BRU",
    Distance:4320.71,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"OUA",
    To:"BRU",
    Distance:4320.71,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"OUA",
    To:"CDG",
    Distance:4093.51,
    Airport:"Air France"
}),
new Routes(
{
    From:"OUA",
    To:"CMN",
    Distance:2416.83,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"OUA",
    To:"COO",
    Distance:791.911,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"OUA",
    To:"DKR",
    Distance:1747.04,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"OUA",
    To:"IST",
    Distance:4339.45,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"OUA",
    To:"LFW",
    Distance:751.993,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"OUA",
    To:"LFW",
    Distance:751.993,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"OUA",
    To:"NIM",
    Distance:419.758,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"OUA",
    To:"NIM",
    Distance:419.758,
    Airport:"Air France"
}),
new Routes(
{
    From:"OUA",
    To:"NIM",
    Distance:419.758,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"OUA",
    To:"NIM",
    Distance:419.758,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"OUA",
    To:"NIM",
    Distance:419.758,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"OUA",
    To:"NIM",
    Distance:419.758,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"OUA",
    To:"NIM",
    Distance:419.758,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"OUA",
    To:"TUN",
    Distance:2965.29,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"OUD",
    To:"BRU",
    Distance:1864.67,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"OUD",
    To:"BVA",
    Distance:1663.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OUD",
    To:"CMN",
    Distance:545.102,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"OUD",
    To:"CRL",
    Distance:1817.41,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OUD",
    To:"LIL",
    Distance:1800.26,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"OUD",
    To:"LYS",
    Distance:1352.91,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"OUD",
    To:"MRS",
    Distance:1140.91,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OUD",
    To:"NRN",
    Distance:1977.86,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"OUD",
    To:"ORY",
    Distance:1589.38,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"OUD",
    To:"ORY",
    Distance:1589.38,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"OUL",
    To:"ALC",
    Distance:3407.6,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OUL",
    To:"ARN",
    Distance:700.615,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"OUL",
    To:"HEL",
    Distance:513.312,
    Airport:"Finnair"
}),
new Routes(
{
    From:"OUL",
    To:"HEL",
    Distance:513.312,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"OVB",
    To:"ALA",
    Distance:1358.11,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"BKK",
    Distance:4855.76,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"BTK",
    Distance:1199.38,
    Airport:"Cargoitalia"
}),
new Routes(
{
    From:"OVB",
    To:"CEK",
    Distance:1338.63,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"OVB",
    To:"CEK",
    Distance:1338.63,
    Airport:"Cargoitalia"
}),
new Routes(
{
    From:"OVB",
    To:"CIT",
    Distance:1700.6,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"DME",
    Distance:2789.7,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"DME",
    Distance:2789.7,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"DME",
    Distance:2789.7,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"DXB",
    Distance:3987.92,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"DYU",
    Distance:2103.69,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"DYU",
    Distance:2103.69,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"OVB",
    To:"EVN",
    Distance:3253.53,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"FEG",
    Distance:1817.56,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"FRA",
    Distance:4805.95,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"FRU",
    Distance:1454.04,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"OVB",
    To:"FRU",
    Distance:1454.04,
    Airport:"Comores Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"FRU",
    Distance:1454.04,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"FRU",
    Distance:1454.04,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"GYD",
    Distance:2885.05,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"GYD",
    Distance:2885.05,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"HKG",
    Distance:4463.65,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"HKT",
    Distance:5396.58,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"HMA",
    Distance:1038.44,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"OVB",
    To:"HRB",
    Distance:3206.56,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"HRG",
    Distance:4978.91,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"HTA",
    Distance:2036.64,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"IKT",
    Distance:1458.82,
    Airport:"Cargoitalia"
}),
new Routes(
{
    From:"OVB",
    To:"IKT",
    Distance:1458.82,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"OVB",
    To:"IKT",
    Distance:1458.82,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"IST",
    Distance:4176.66,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"KBP",
    Distance:3445.74,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"KHV",
    Distance:3596.65,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"KHV",
    Distance:3596.65,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"KHV",
    Distance:3596.65,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"KJA",
    Distance:630.158,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"OVB",
    To:"KJA",
    Distance:630.158,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"KRR",
    Distance:3236.83,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"OVB",
    To:"KRR",
    Distance:3236.83,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"LBD",
    Distance:1903.68,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"LBD",
    Distance:1903.68,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"OVB",
    To:"LBD",
    Distance:1903.68,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"OVB",
    To:"LED",
    Distance:3097.6,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"LED",
    Distance:3097.6,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"OVB",
    To:"LED",
    Distance:3097.6,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"MJZ",
    Distance:1967.48,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"OVB",
    To:"MUC",
    Distance:4727.26,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"NJC",
    Distance:752.888,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"OVB",
    To:"NJC",
    Distance:752.888,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"OVB",
    To:"NJC",
    Distance:752.888,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"OVB",
    To:"NMA",
    Distance:1759.9,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"OVB",
    To:"NSK",
    Distance:1607.25,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"NSK",
    Distance:1607.25,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"NSK",
    Distance:1607.25,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"NUX",
    Distance:1272.89,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"OVB",
    To:"NZH",
    Distance:2407.92,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"OVB",
    To:"OMS",
    Distance:595.432,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"OVB",
    To:"OSS",
    Distance:1758.68,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"OVB",
    To:"OSS",
    Distance:1758.68,
    Airport:"Comores Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"OSS",
    Distance:1758.68,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"OSS",
    Distance:1758.68,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"PEK",
    Distance:2995.24,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"PEK",
    Distance:2995.24,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"PRG",
    Distance:4468.21,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"PYJ",
    Distance:2007,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"OVB",
    To:"SGC",
    Distance:886.878,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"OVB",
    To:"SLY",
    Distance:1543.83,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"OVB",
    To:"SVO",
    Distance:2800.37,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"SVX",
    Distance:1370.29,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"OVB",
    To:"SVX",
    Distance:1370.29,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"OVB",
    To:"SVX",
    Distance:1370.29,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"OVB",
    To:"SVX",
    Distance:1370.29,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"SVX",
    Distance:1370.29,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"TAS",
    Distance:1816.21,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"TAS",
    Distance:1816.21,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"OVB",
    To:"TJM",
    Distance:1098.21,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"OVB",
    To:"TSE",
    Distance:868.317,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"OVB",
    To:"URC",
    Distance:1282.37,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"URC",
    Distance:1282.37,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"URC",
    Distance:1282.37,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"UUD",
    Distance:1671.66,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"VKO",
    Distance:2822.14,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"VVO",
    Distance:3729.55,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"VVO",
    Distance:3729.55,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"YKS",
    Distance:2775.16,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"OVB",
    To:"YKS",
    Distance:2775.16,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"OVD",
    To:"ACE",
    Distance:1759.59,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"OVD",
    To:"AGP",
    Distance:776.991,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"OVD",
    To:"AGP",
    Distance:776.991,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"OVD",
    To:"BCN",
    Distance:711.582,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"OVD",
    To:"BCN",
    Distance:711.582,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"OVD",
    To:"CDG",
    Distance:894.669,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"OVD",
    To:"CDG",
    Distance:894.669,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"OVD",
    To:"MAD",
    Distance:397.55,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"OVD",
    To:"MAD",
    Distance:397.55,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"OVD",
    To:"PMI",
    Distance:853.919,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"OVD",
    To:"PMI",
    Distance:853.919,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"OVD",
    To:"STN",
    Distance:1036.44,
    Airport:"easyJet"
}),
new Routes(
{
    From:"OVD",
    To:"SVQ",
    Distance:683.46,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"OVD",
    To:"SVQ",
    Distance:683.46,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"OVD",
    To:"TFS",
    Distance:1966.18,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"OVD",
    To:"VLC",
    Distance:646.959,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"OVD",
    To:"VLC",
    Distance:646.959,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"OVS",
    To:"EYK",
    Distance:306.56,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"OVS",
    To:"NYM",
    Distance:646.201,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"OVS",
    To:"SVX",
    Distance:533.454,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"OVS",
    To:"TJM",
    Distance:469.532,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"OVS",
    To:"VKO",
    Distance:1645.18,
    Airport:"Gazpromavia"
}),
new Routes(
{
    From:"OWB",
    To:"SFB",
    Distance:1138.25,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"OWB",
    To:"STL",
    Distance:301.359,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"OXB",
    To:"BJL",
    Distance:193.62,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"OXB",
    To:"CKY",
    Distance:340.85,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"OXB",
    To:"CKY",
    Distance:340.85,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"OXB",
    To:"CMN",
    Distance:2524.55,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"OXB",
    To:"DKR",
    Distance:373.562,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"OXB",
    To:"DKR",
    Distance:373.562,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"OZC",
    To:"CEB",
    Distance:237.22,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"OZC",
    To:"MNL",
    Distance:768.117,
    Airport:"Air Philippines"
}),
new Routes(
{
    From:"OZC",
    To:"MNL",
    Distance:768.117,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"OZC",
    To:"MNL",
    Distance:768.117,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"OZH",
    To:"IEV",
    Distance:452.35,
    Airport:"Motor Sich"
}),
new Routes(
{
    From:"OZH",
    To:"VKO",
    Distance:869.228,
    Airport:"Motor Sich"
}),
new Routes(
{
    From:"OZZ",
    To:"CMN",
    Distance:277.521,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"OZZ",
    To:"ORY",
    Distance:2126.42,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"PAC",
    To:"BFQ",
    Distance:214.824,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"PAC",
    To:"BOC",
    Distance:298.687,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"PAC",
    To:"CHX",
    Distance:329.47,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"PAC",
    To:"DAV",
    Distance:323.06,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"PAC",
    To:"OTD",
    Distance:68.8782,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"PAC",
    To:"PUE",
    Distance:224.531,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"PAC",
    To:"PVE",
    Distance:91.4196,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"PAC",
    To:"PYC",
    Distance:149.431,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"PAC",
    To:"SAX",
    Distance:183.119,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"PAD",
    To:"ACE",
    Distance:3121,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PAD",
    To:"AYT",
    Distance:2390.29,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PAD",
    To:"AYT",
    Distance:2390.29,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PAD",
    To:"AYT",
    Distance:2390.29,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"PAD",
    To:"FUE",
    Distance:3181.07,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PAD",
    To:"IBZ",
    Distance:1524.2,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PAD",
    To:"LPA",
    Distance:3306.16,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PAD",
    To:"MUC",
    Distance:427.446,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"PAD",
    To:"PMI",
    Distance:1416.03,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PAD",
    To:"PMI",
    Distance:1416.03,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PAD",
    To:"TFS",
    Distance:3355.72,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PAF",
    To:"EBB",
    Distance:274.889,
    Airport:"Benin Golf Air"
}),
new Routes(
{
    From:"PAG",
    To:"CEB",
    Distance:281.675,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"PAG",
    To:"MNL",
    Distance:789.082,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"PAH",
    To:"ORD",
    Distance:551.929,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PAP",
    To:"ATL",
    Distance:2062.92,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PAP",
    To:"CAP",
    Distance:128.612,
    Airport:"Salmon Air"
}),
new Routes(
{
    From:"PAP",
    To:"FLL",
    Distance:1160.27,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PAP",
    To:"FLL",
    Distance:1160.27,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PAP",
    To:"FLL",
    Distance:1160.27,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"PAP",
    To:"FLL",
    Distance:1160.27,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PAP",
    To:"JBQ",
    Distance:243.155,
    Airport:"Omskavia Airline"
}),
new Routes(
{
    From:"PAP",
    To:"JBQ",
    Distance:243.155,
    Airport:"Salmon Air"
}),
new Routes(
{
    From:"PAP",
    To:"JFK",
    Distance:2457.03,
    Airport:"Air France"
}),
new Routes(
{
    From:"PAP",
    To:"JFK",
    Distance:2457.03,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PAP",
    To:"JFK",
    Distance:2457.03,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PAP",
    To:"JFK",
    Distance:2457.03,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PAP",
    To:"MIA",
    Distance:1148.89,
    Airport:"Air France"
}),
new Routes(
{
    From:"PAP",
    To:"MIA",
    Distance:1148.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PAP",
    To:"MIA",
    Distance:1148.89,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PAP",
    To:"MIA",
    Distance:1148.89,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PAP",
    To:"PLS",
    Distance:355.12,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"PAP",
    To:"PTP",
    Distance:1170.05,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"PAP",
    To:"PTP",
    Distance:1170.05,
    Airport:"Air France"
}),
new Routes(
{
    From:"PAP",
    To:"PTY",
    Distance:1304.79,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PAP",
    To:"PTY",
    Distance:1304.79,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PAP",
    To:"SDQ",
    Distance:277.152,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"PAP",
    To:"SXM",
    Distance:971.214,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"PAP",
    To:"YUL",
    Distance:2993.08,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"PAS",
    To:"ATH",
    Distance:146.655,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"PAS",
    To:"ATH",
    Distance:146.655,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"PAT",
    To:"CCU",
    Distance:471.976,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"PAT",
    To:"CCU",
    Distance:471.976,
    Airport:"Go Air"
}),
new Routes(
{
    From:"PAT",
    To:"CCU",
    Distance:471.976,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"PAT",
    To:"CCU",
    Distance:471.976,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"PAT",
    To:"DEL",
    Distance:856.713,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"PAT",
    To:"DEL",
    Distance:856.713,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"PAT",
    To:"DEL",
    Distance:856.713,
    Airport:"Go Air"
}),
new Routes(
{
    From:"PAT",
    To:"DEL",
    Distance:856.713,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"PAT",
    To:"DEL",
    Distance:856.713,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"PAT",
    To:"IXR",
    Distance:254.301,
    Airport:"Go Air"
}),
new Routes(
{
    From:"PAT",
    To:"IXR",
    Distance:254.301,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"PAT",
    To:"LKO",
    Distance:438.669,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"PAV",
    To:"SSA",
    Distance:390.406,
    Airport:"Azul"
}),
new Routes(
{
    From:"PAZ",
    To:"MEX",
    Distance:212.501,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PAZ",
    To:"MEX",
    Distance:212.501,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"PAZ",
    To:"REX",
    Distance:606.231,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PAZ",
    To:"REX",
    Distance:606.231,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"PAZ",
    To:"VSA",
    Distance:566.88,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PAZ",
    To:"VSA",
    Distance:566.88,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"PBC",
    To:"CUN",
    Distance:1218.02,
    Airport:"Volaris"
}),
new Routes(
{
    From:"PBC",
    To:"DFW",
    Distance:1533.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PBC",
    To:"DFW",
    Distance:1533.42,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PBC",
    To:"GDL",
    Distance:538.426,
    Airport:"Volaris"
}),
new Routes(
{
    From:"PBC",
    To:"IAH",
    Distance:1242.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PBC",
    To:"MTY",
    Distance:757.404,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PBC",
    To:"TIJ",
    Distance:2376.04,
    Airport:"Volaris"
}),
new Routes(
{
    From:"PBD",
    To:"BOM",
    Distance:439.338,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"PBD",
    To:"BOM",
    Distance:439.338,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"PBG",
    To:"BOS",
    Distance:322.614,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PBG",
    To:"BOS",
    Distance:322.614,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"PBG",
    To:"FLL",
    Distance:2150.99,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PBG",
    To:"FLL",
    Distance:2150.99,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"PBG",
    To:"MYR",
    Distance:1306.81,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"PBG",
    To:"PIE",
    Distance:2033.41,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PBG",
    To:"SFB",
    Distance:1893.79,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PBH",
    To:"CCU",
    Distance:537.109,
    Airport:"Druk Air"
}),
new Routes(
{
    From:"PBH",
    To:"DAC",
    Distance:407.68,
    Airport:"Druk Air"
}),
new Routes(
{
    From:"PBH",
    To:"GAU",
    Distance:258.556,
    Airport:"Druk Air"
}),
new Routes(
{
    From:"PBH",
    To:"IXB",
    Distance:135.01,
    Airport:"Druk Air"
}),
new Routes(
{
    From:"PBH",
    To:"KTM",
    Distance:402.11,
    Airport:"Druk Air"
}),
new Routes(
{
    From:"PBI",
    To:"ATL",
    Distance:878.003,
    Airport:"Air France"
}),
new Routes(
{
    From:"PBI",
    To:"ATL",
    Distance:878.003,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PBI",
    To:"ATL",
    Distance:878.003,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PBI",
    To:"ATL",
    Distance:878.003,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PBI",
    To:"ATL",
    Distance:878.003,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PBI",
    To:"ATL",
    Distance:878.003,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PBI",
    To:"ATL",
    Distance:878.003,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PBI",
    To:"ATL",
    Distance:878.003,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"PBI",
    To:"BDL",
    Distance:1826.01,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PBI",
    To:"BOS",
    Distance:1929.49,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PBI",
    To:"BWI",
    Distance:1425.1,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PBI",
    To:"CLE",
    Distance:1645.59,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PBI",
    To:"CLT",
    Distance:952.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PBI",
    To:"CLT",
    Distance:952.01,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PBI",
    To:"DCA",
    Distance:1382.75,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PBI",
    To:"DCA",
    Distance:1382.75,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PBI",
    To:"DFW",
    Distance:1772.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PBI",
    To:"DFW",
    Distance:1772.12,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PBI",
    To:"DTW",
    Distance:1752.05,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PBI",
    To:"ELH",
    Distance:366.291,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PBI",
    To:"EWR",
    Distance:1650.38,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PBI",
    To:"EWR",
    Distance:1650.38,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PBI",
    To:"HPN",
    Distance:1703.37,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PBI",
    To:"IAH",
    Distance:1535.31,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PBI",
    To:"ISP",
    Distance:1695.77,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PBI",
    To:"JFK",
    Distance:1657.14,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PBI",
    To:"LAX",
    Distance:3742.72,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PBI",
    To:"LAX",
    Distance:3742.72,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PBI",
    To:"LGA",
    Distance:1668.31,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PBI",
    To:"LGA",
    Distance:1668.31,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PBI",
    To:"LGA",
    Distance:1668.31,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PBI",
    To:"LGA",
    Distance:1668.31,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PBI",
    To:"MHH",
    Distance:300.089,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"PBI",
    To:"MHH",
    Distance:300.089,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PBI",
    To:"NAS",
    Distance:320.363,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"PBI",
    To:"ORD",
    Distance:1843.7,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PBI",
    To:"ORD",
    Distance:1843.7,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PBI",
    To:"PHL",
    Distance:1533.7,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PBI",
    To:"PHL",
    Distance:1533.7,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PBI",
    To:"SJU",
    Distance:1711.04,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PBI",
    To:"TPA",
    Distance:280.407,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PBJ",
    To:"ULB",
    Distance:12.1086,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"PBJ",
    To:"VLI",
    Distance:140.301,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"PBL",
    To:"MAR",
    Distance:399.66,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PBL",
    To:"PMV",
    Distance:451.137,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PBM",
    To:"AMS",
    Distance:7524.42,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PBM",
    To:"AMS",
    Distance:7524.42,
    Airport:"Surinam Airways"
}),
new Routes(
{
    From:"PBM",
    To:"AUA",
    Distance:1806.23,
    Airport:"Surinam Airways"
}),
new Routes(
{
    From:"PBM",
    To:"BEL",
    Distance:1064.29,
    Airport:"Surinam Airways"
}),
new Routes(
{
    From:"PBM",
    To:"CAY",
    Distance:320.935,
    Airport:"Surinam Airways"
}),
new Routes(
{
    From:"PBM",
    To:"CUR",
    Distance:1687.57,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"PBM",
    To:"GEO",
    Distance:358.485,
    Airport:"Surinam Airways"
}),
new Routes(
{
    From:"PBM",
    To:"POS",
    Distance:886.061,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"PBM",
    To:"POS",
    Distance:886.061,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"PBM",
    To:"POS",
    Distance:886.061,
    Airport:"Surinam Airways"
}),
new Routes(
{
    From:"PBO",
    To:"PER",
    Distance:990.662,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PBO",
    To:"PER",
    Distance:990.662,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PBO",
    To:"PER",
    Distance:990.662,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PBU",
    To:"MYT",
    Distance:216.544,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"PCL",
    To:"IQT",
    Distance:529.551,
    Airport:"Peruvian Airlines"
}),
new Routes(
{
    From:"PCL",
    To:"IQT",
    Distance:529.551,
    Airport:"Star Peru (2I)"
}),
new Routes(
{
    From:"PCL",
    To:"LIM",
    Distance:491.343,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"PCL",
    To:"LIM",
    Distance:491.343,
    Airport:"Peruvian Airlines"
}),
new Routes(
{
    From:"PCL",
    To:"LIM",
    Distance:491.343,
    Airport:"Star Peru (2I)"
}),
new Routes(
{
    From:"PCL",
    To:"TPP",
    Distance:287.294,
    Airport:"Star Peru (2I)"
}),
new Routes(
{
    From:"PCR",
    To:"BOG",
    Distance:754.744,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"PCR",
    To:"BOG",
    Distance:754.744,
    Airport:"SATENA"
}),
new Routes(
{
    From:"PCR",
    To:"VVC",
    Distance:713.904,
    Airport:"SATENA"
}),
new Routes(
{
    From:"PDA",
    To:"BOG",
    Distance:698.031,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"PDA",
    To:"BOG",
    Distance:698.031,
    Airport:"SATENA"
}),
new Routes(
{
    From:"PDA",
    To:"VVC",
    Distance:633.662,
    Airport:"SATENA"
}),
new Routes(
{
    From:"PDG",
    To:"BTH",
    Distance:474.008,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"PDG",
    To:"BTH",
    Distance:474.008,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PDG",
    To:"CGK",
    Distance:911.072,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"PDG",
    To:"CGK",
    Distance:911.072,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"PDG",
    To:"CGK",
    Distance:911.072,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PDG",
    To:"CGK",
    Distance:911.072,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"PDG",
    To:"KUL",
    Distance:429.962,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"PDL",
    To:"AMS",
    Distance:2857.15,
    Airport:"SATA International"
}),
new Routes(
{
    From:"PDL",
    To:"ARN",
    Distance:3910.34,
    Airport:"SATA International"
}),
new Routes(
{
    From:"PDL",
    To:"BOS",
    Distance:3844.5,
    Airport:"SATA International"
}),
new Routes(
{
    From:"PDL",
    To:"BOS",
    Distance:3844.5,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"PDL",
    To:"DUS",
    Distance:2947.35,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PDL",
    To:"FLW",
    Distance:509.093,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"PDL",
    To:"FNC",
    Distance:984.92,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"PDL",
    To:"FNC",
    Distance:984.92,
    Airport:"SATA International"
}),
new Routes(
{
    From:"PDL",
    To:"FNC",
    Distance:984.92,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"PDL",
    To:"FRA",
    Distance:3029.63,
    Airport:"SATA International"
}),
new Routes(
{
    From:"PDL",
    To:"HOR",
    Distance:277.796,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"PDL",
    To:"LGW",
    Distance:2493.28,
    Airport:"SATA International"
}),
new Routes(
{
    From:"PDL",
    To:"LIS",
    Distance:1448.65,
    Airport:"SATA International"
}),
new Routes(
{
    From:"PDL",
    To:"LIS",
    Distance:1448.65,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"PDL",
    To:"OPO",
    Distance:1508.54,
    Airport:"SATA International"
}),
new Routes(
{
    From:"PDL",
    To:"OPO",
    Distance:1508.54,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"PDL",
    To:"ORY",
    Distance:2559.62,
    Airport:"SATA International"
}),
new Routes(
{
    From:"PDL",
    To:"PIX",
    Distance:256.365,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"PDL",
    To:"SJZ",
    Distance:239.665,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"PDL",
    To:"SMA",
    Distance:97.4595,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"PDL",
    To:"TER",
    Distance:166.353,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"PDL",
    To:"YYZ",
    Distance:4513.02,
    Airport:"SATA International"
}),
new Routes(
{
    From:"PDL",
    To:"YYZ",
    Distance:4513.02,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"PDP",
    To:"AEP",
    Distance:305.368,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"PDP",
    To:"AEP",
    Distance:305.368,
    Airport:"BQB Lineas Aereas"
}),
new Routes(
{
    From:"PDP",
    To:"ROS",
    Distance:568.278,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"PDS",
    To:"MEX",
    Distance:1032.71,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PDS",
    To:"MEX",
    Distance:1032.71,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"PDT",
    To:"PDX",
    Distance:292.216,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"PDV",
    To:"HHN",
    Distance:1610.28,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PDV",
    To:"STN",
    Distance:2147.72,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PDX",
    To:"ABQ",
    Distance:1786.61,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"AMS",
    Distance:8028.79,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PDX",
    To:"AMS",
    Distance:8028.79,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"ANC",
    Distance:2476.77,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"ATL",
    Distance:3489.12,
    Airport:"Air France"
}),
new Routes(
{
    From:"PDX",
    To:"ATL",
    Distance:3489.12,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"ATL",
    Distance:3489.12,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PDX",
    To:"ATL",
    Distance:3489.12,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"BIL",
    Distance:1090.78,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"BLI",
    Distance:356.294,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"BOI",
    Distance:552.601,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"BOS",
    Distance:4072.28,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"BOS",
    Distance:4072.28,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"BOS",
    Distance:4072.28,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PDX",
    To:"BUR",
    Distance:1316.4,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"BUR",
    Distance:1316.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"CLT",
    Distance:3664.45,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"CLT",
    Distance:3664.45,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PDX",
    To:"DCA",
    Distance:3773.19,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"DCA",
    Distance:3773.19,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"DEN",
    Distance:1592.13,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PDX",
    To:"DEN",
    Distance:1592.13,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"DEN",
    Distance:1592.13,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"DEN",
    Distance:1592.13,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"DFW",
    Distance:2597.01,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"DFW",
    Distance:2597.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"DFW",
    Distance:2597.01,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"DFW",
    Distance:2597.01,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PDX",
    To:"DTW",
    Distance:3134.91,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"DTW",
    Distance:3134.91,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PDX",
    To:"EUG",
    Distance:169.855,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"EUG",
    Distance:169.855,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"EWR",
    Distance:3906.5,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"FAT",
    Distance:1008.91,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"GEG",
    Distance:447.808,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"HNL",
    Distance:4188.22,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"HNL",
    Distance:4188.22,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"IAD",
    Distance:3736.21,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"IAH",
    Distance:2933.69,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"JFK",
    Distance:3938.83,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PDX",
    To:"JFK",
    Distance:3938.83,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PDX",
    To:"LAS",
    Distance:1227.64,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"LAS",
    Distance:1227.64,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"LAS",
    Distance:1227.64,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"LAX",
    Distance:1343.08,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"LAX",
    Distance:1343.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"LAX",
    Distance:1343.08,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PDX",
    To:"LAX",
    Distance:1343.08,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"LGB",
    Distance:1362.43,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"LGB",
    Distance:1362.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"LGB",
    Distance:1362.43,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PDX",
    To:"LMT",
    Distance:387.923,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"MCI",
    Distance:2378.74,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"MDW",
    Distance:2810.89,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PDX",
    To:"MDW",
    Distance:2810.89,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"MFR",
    Distance:358.116,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"MSO",
    Distance:670.176,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"MSP",
    Distance:2288.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PDX",
    To:"NRT",
    Distance:7742.11,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PDX",
    To:"OAK",
    Distance:875.377,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PDX",
    To:"OAK",
    Distance:875.377,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"OAK",
    Distance:875.377,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"OAK",
    Distance:875.377,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"OGG",
    Distance:4122.26,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"OKC",
    Distance:2384.5,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PDX",
    To:"ONT",
    Distance:1350.78,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"ONT",
    Distance:1350.78,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"ORD",
    Distance:2791.61,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"ORD",
    Distance:2791.61,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"ORD",
    Distance:2791.61,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PDX",
    To:"ORD",
    Distance:2791.61,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"OTH",
    Distance:274.577,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"PDT",
    Distance:292.216,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"PHL",
    Distance:3862.51,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"PHL",
    Distance:3862.51,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PDX",
    To:"PHX",
    Distance:1625.09,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"PHX",
    Distance:1625.09,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"PHX",
    Distance:1625.09,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"PHX",
    Distance:1625.09,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PDX",
    To:"PSC",
    Distance:279.319,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"PSP",
    Distance:1406.45,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"RDM",
    Distance:187.113,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"RDM",
    Distance:187.113,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"RNO",
    Distance:715.581,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"RNO",
    Distance:715.581,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SAN",
    Distance:1502.62,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SAN",
    Distance:1502.62,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SAN",
    Distance:1502.62,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SBA",
    Distance:1263.02,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SEA",
    Distance:208.025,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SEA",
    Distance:208.025,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SFO",
    Distance:886.388,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SFO",
    Distance:886.388,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SFO",
    Distance:886.388,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SFO",
    Distance:886.388,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"PDX",
    To:"SJC",
    Distance:916.387,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SJC",
    Distance:916.387,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SJC",
    Distance:916.387,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SLC",
    Distance:1011.74,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SLC",
    Distance:1011.74,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PDX",
    To:"SLC",
    Distance:1011.74,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SMF",
    Distance:770.963,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SMF",
    Distance:770.963,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SNA",
    Distance:1384.53,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"SNA",
    Distance:1384.53,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"STS",
    Distance:787.432,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"TUS",
    Distance:1802.18,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"YVR",
    Distance:403.3,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"PDX",
    To:"YVR",
    Distance:403.3,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"YVR",
    Distance:403.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"YVR",
    Distance:403.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PDX",
    To:"YYC",
    Distance:881.628,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"PDX",
    To:"YYC",
    Distance:881.628,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PEC",
    To:"ELV",
    Distance:27.4749,
    Airport:"Alaska Seaplane Service"
}),
new Routes(
{
    From:"PED",
    To:"DME",
    Distance:1600.67,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"PED",
    To:"LED",
    Distance:1424.22,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"PEE",
    To:"DME",
    Distance:1137.75,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"PEE",
    To:"DME",
    Distance:1137.75,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"PEE",
    To:"DWC",
    Distance:3710.62,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"PEE",
    To:"LED",
    Distance:1486.38,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"PEE",
    To:"PRG",
    Distance:2812.27,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PEE",
    To:"SVO",
    Distance:1145.16,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"PEG",
    To:"CAG",
    Distance:516.179,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PEG",
    To:"CRL",
    Distance:1021.97,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PEG",
    To:"OTP",
    Distance:1100.94,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"PEG",
    To:"STN",
    Distance:1340.44,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PEG",
    To:"TPS",
    Distance:576.494,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PEI",
    To:"ADZ",
    Distance:1084.79,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PEI",
    To:"BOG",
    Distance:176.908,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"PEI",
    To:"BOG",
    Distance:176.908,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PEI",
    To:"BOG",
    Distance:176.908,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"PEI",
    To:"EOH",
    Distance:157.349,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"PEI",
    To:"PTY",
    Distance:621.244,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"ADD",
    Distance:8329.32,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"ADD",
    Distance:8329.32,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"ALA",
    Distance:3271.45,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"PEK",
    To:"ALA",
    Distance:3271.45,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"ALG",
    Distance:9104.04,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"PEK",
    To:"AMS",
    Distance:7827.08,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"AMS",
    Distance:7827.08,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"AQG",
    Distance:1056.96,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"PEK",
    To:"ARN",
    Distance:6690.93,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"ARN",
    Distance:6690.93,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"PEK",
    To:"AUH",
    Distance:5954.84,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PEK",
    To:"AUH",
    Distance:5954.84,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"PEK",
    To:"AUH",
    Distance:5954.84,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"BAV",
    Distance:560.901,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"BAV",
    Distance:560.901,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"BAV",
    Distance:560.901,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"BHY",
    Distance:2173.97,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"BHY",
    Distance:2173.97,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"BKK",
    Distance:3317.02,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"BKK",
    Distance:3317.02,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"BKK",
    Distance:3317.02,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"PEK",
    To:"BRU",
    Distance:7944.91,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"BRU",
    Distance:7944.91,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CAI",
    Distance:7532.85,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"CAI",
    Distance:7532.85,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"PEK",
    To:"CAN",
    Distance:1881.03,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"CAN",
    Distance:1881.03,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CAN",
    Distance:1881.03,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CAN",
    Distance:1881.03,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CDG",
    Distance:8188.72,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"CDG",
    Distance:8188.72,
    Airport:"Air France"
}),
new Routes(
{
    From:"PEK",
    To:"CDG",
    Distance:8188.72,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CDG",
    Distance:8188.72,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CGD",
    Distance:1320.59,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CGK",
    Distance:5237.66,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"PEK",
    To:"CGO",
    Distance:664.117,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"CGO",
    Distance:664.117,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CGO",
    Distance:664.117,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CGQ",
    Distance:804.754,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"CGQ",
    Distance:804.754,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CGQ",
    Distance:804.754,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CGQ",
    Distance:804.754,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CGQ",
    Distance:804.754,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CHG",
    Distance:362.305,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"CHG",
    Distance:362.305,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CIF",
    Distance:308.6,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"CIF",
    Distance:308.6,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CIH",
    Distance:522.435,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CIH",
    Distance:522.435,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CJJ",
    Distance:1021.15,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"CJJ",
    Distance:1021.15,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CJU",
    Distance:1144.09,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CJU",
    Distance:1144.09,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PEK",
    To:"CKG",
    Distance:1464,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"CKG",
    Distance:1464,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CKG",
    Distance:1464,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CKG",
    Distance:1464,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CKG",
    Distance:1464,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CKG",
    Distance:1464,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CMB",
    Distance:5163.65,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CNX",
    Distance:2908.21,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"CPH",
    Distance:7194.28,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"CPH",
    Distance:7194.28,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"PEK",
    To:"CSX",
    Distance:1357.69,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"CSX",
    Distance:1357.69,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CSX",
    Distance:1357.69,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CSX",
    Distance:1357.69,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CSX",
    Distance:1357.69,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CTS",
    Distance:2106.68,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"CTS",
    Distance:2106.68,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PEK",
    To:"CTU",
    Distance:1556.03,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"CTU",
    Distance:1556.03,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PEK",
    To:"CTU",
    Distance:1556.03,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CTU",
    Distance:1556.03,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CTU",
    Distance:1556.03,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CTU",
    Distance:1556.03,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CZX",
    Distance:947.472,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"CZX",
    Distance:947.472,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"CZX",
    Distance:947.472,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"DAT",
    Distance:264,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"DAT",
    Distance:264,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"DAX",
    Distance:1273.75,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"DAX",
    Distance:1273.75,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"DDG",
    Distance:655.378,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"DDG",
    Distance:655.378,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"DEL",
    Distance:3808.9,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"DLC",
    Distance:442.55,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"DLC",
    Distance:442.55,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PEK",
    To:"DLC",
    Distance:442.55,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"DLC",
    Distance:442.55,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"DLC",
    Distance:442.55,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"DLC",
    Distance:442.55,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"DOH",
    Distance:6166.8,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"PEK",
    To:"DOY",
    Distance:345.288,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"DSN",
    Distance:558.808,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"DSN",
    Distance:558.808,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"DTW",
    Distance:10646.7,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"DTW",
    Distance:10646.7,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"DTW",
    Distance:10646.7,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PEK",
    To:"DUS",
    Distance:7796.1,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"DUS",
    Distance:7796.1,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"PEK",
    To:"DXB",
    Distance:5845.05,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"DXB",
    Distance:5845.05,
    Airport:"Emirates"
}),
new Routes(
{
    From:"PEK",
    To:"DYG",
    Distance:1342.95,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"DYG",
    Distance:1342.95,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"DYG",
    Distance:1342.95,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"ENY",
    Distance:722.403,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"EWR",
    Distance:10967.9,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"EWR",
    Distance:10967.9,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"FCO",
    Distance:8146.42,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"FNJ",
    Distance:783.293,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"FNJ",
    Distance:783.293,
    Airport:"Air Koryo"
}),
new Routes(
{
    From:"PEK",
    To:"FOC",
    Distance:1598.54,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"FOC",
    Distance:1598.54,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"FOC",
    Distance:1598.54,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"FOC",
    Distance:1598.54,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"FOC",
    Distance:1598.54,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"FRA",
    Distance:7789.36,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"FRA",
    Distance:7789.36,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"PEK",
    To:"FUG",
    Distance:801.327,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"FUG",
    Distance:801.327,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"GMP",
    Distance:926.96,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"GMP",
    Distance:926.96,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"GMP",
    Distance:926.96,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"GMP",
    Distance:926.96,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PEK",
    To:"GVA",
    Distance:8200.28,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"GYD",
    Distance:5502.59,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"GYS",
    Distance:1295.73,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"GYS",
    Distance:1295.73,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HAK",
    Distance:2314.83,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"HAK",
    Distance:2314.83,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HAK",
    Distance:2314.83,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HAK",
    Distance:2314.83,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"PEK",
    To:"HAK",
    Distance:2314.83,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HAN",
    Distance:2332.32,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HAN",
    Distance:2332.32,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HEL",
    Distance:6307.58,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"HEL",
    Distance:6307.58,
    Airport:"Finnair"
}),
new Routes(
{
    From:"PEK",
    To:"HET",
    Distance:411.691,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"HET",
    Distance:411.691,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HET",
    Distance:411.691,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"PEK",
    To:"HET",
    Distance:411.691,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HFE",
    Distance:925.154,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"HFE",
    Distance:925.154,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HFE",
    Distance:925.154,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HGH",
    Distance:1149.57,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"HGH",
    Distance:1149.57,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HGH",
    Distance:1149.57,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HGH",
    Distance:1149.57,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HGH",
    Distance:1149.57,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"PEK",
    To:"HGH",
    Distance:1149.57,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HGH",
    Distance:1149.57,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HGH",
    Distance:1149.57,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HIA",
    Distance:736.858,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HKG",
    Distance:1992.04,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"HKG",
    Distance:1992.04,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"PEK",
    To:"HKG",
    Distance:1992.04,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HKG",
    Distance:1992.04,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"PEK",
    To:"HKG",
    Distance:1992.04,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HKG",
    Distance:1992.04,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HKT",
    Distance:3990.41,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"HKT",
    Distance:3990.41,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HLD",
    Distance:1046.26,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"HLD",
    Distance:1046.26,
    Airport:"Canadian National Airways"
}),
new Routes(
{
    From:"PEK",
    To:"HLD",
    Distance:1046.26,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HLD",
    Distance:1046.26,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"PEK",
    To:"HLD",
    Distance:1046.26,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HLH",
    Distance:799.677,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"HLH",
    Distance:799.677,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HMI",
    Distance:1927.91,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"HMI",
    Distance:1927.91,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HND",
    Distance:2092.21,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"HND",
    Distance:2092.21,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PEK",
    To:"HND",
    Distance:2092.21,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HND",
    Distance:2092.21,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HNL",
    Distance:8132.43,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"HNL",
    Distance:8132.43,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HNL",
    Distance:8132.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HRB",
    Distance:999.183,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"HRB",
    Distance:999.183,
    Airport:"Canadian National Airways"
}),
new Routes(
{
    From:"PEK",
    To:"HRB",
    Distance:999.183,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HRB",
    Distance:999.183,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HRB",
    Distance:999.183,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HRB",
    Distance:999.183,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HSN",
    Distance:1244.1,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HSN",
    Distance:1244.1,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"HYN",
    Distance:1355.2,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"HYN",
    Distance:1355.2,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"IAD",
    Distance:11112.8,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"IAD",
    Distance:11112.8,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"IAH",
    Distance:11556.3,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"IAH",
    Distance:11556.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"ICN",
    Distance:902.61,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"ICN",
    Distance:902.61,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"ICN",
    Distance:902.61,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"ICN",
    Distance:902.61,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PEK",
    To:"IKA",
    Distance:5645.81,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"PEK",
    To:"IKT",
    Distance:1643.94,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"INC",
    Distance:926.817,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"INC",
    Distance:926.817,
    Airport:"Canadian National Airways"
}),
new Routes(
{
    From:"PEK",
    To:"INC",
    Distance:926.817,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"INC",
    Distance:926.817,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"INC",
    Distance:926.817,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"INC",
    Distance:926.817,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"INC",
    Distance:926.817,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"INC",
    Distance:926.817,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"PEK",
    To:"ISB",
    Distance:3896.07,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"ISB",
    Distance:3896.07,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"IST",
    Distance:7071.6,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"IST",
    Distance:7071.6,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"JDZ",
    Distance:1195.62,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"JDZ",
    Distance:1195.62,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"JFK",
    Distance:10978.3,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"JFK",
    Distance:10978.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PEK",
    To:"JFK",
    Distance:10978.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"JGS",
    Distance:1475.47,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"JGS",
    Distance:1475.47,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"JIQ",
    Distance:1370.31,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"JIU",
    Distance:1151.84,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"JIU",
    Distance:1151.84,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"JJN",
    Distance:1709.72,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"JJN",
    Distance:1709.72,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"JMU",
    Distance:1346.24,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"JMU",
    Distance:1346.24,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"JMU",
    Distance:1346.24,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"JNB",
    Distance:11707.9,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"JNB",
    Distance:11707.9,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"PEK",
    To:"JNG",
    Distance:518.534,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"JXA",
    Distance:1310.83,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"JXA",
    Distance:1310.83,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"PEK",
    To:"KHH",
    Distance:1978.3,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KHN",
    Distance:1248.63,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"KHN",
    Distance:1248.63,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KHN",
    Distance:1248.63,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KHN",
    Distance:1248.63,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KHV",
    Distance:1746.22,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KHV",
    Distance:1746.22,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KHV",
    Distance:1746.22,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KIX",
    Distance:1762.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"KIX",
    Distance:1762.48,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PEK",
    To:"KJA",
    Distance:2506.05,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KJA",
    Distance:2506.05,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KJA",
    Distance:2506.05,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KMG",
    Distance:2115.19,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"KMG",
    Distance:2115.19,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"PEK",
    To:"KMG",
    Distance:2115.19,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KMG",
    Distance:2115.19,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KMG",
    Distance:2115.19,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KMG",
    Distance:2115.19,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KOW",
    Distance:1592.58,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"KOW",
    Distance:1592.58,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KOW",
    Distance:1592.58,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KUL",
    Distance:4413.46,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"PEK",
    To:"KUL",
    Distance:4413.46,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KWE",
    Distance:1756.26,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"KWE",
    Distance:1756.26,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KWE",
    Distance:1756.26,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KWE",
    Distance:1756.26,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KWL",
    Distance:1761.17,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"KWL",
    Distance:1761.17,
    Airport:"Canadian National Airways"
}),
new Routes(
{
    From:"PEK",
    To:"KWL",
    Distance:1761.17,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KWL",
    Distance:1761.17,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"KWL",
    Distance:1761.17,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"LAD",
    Distance:11774.2,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"LAX",
    Distance:10037.1,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"LAX",
    Distance:10037.1,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PEK",
    To:"LAX",
    Distance:10037.1,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"LED",
    Distance:6056.54,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"LED",
    Distance:6056.54,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"LGW",
    Distance:8165.01,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"LGW",
    Distance:8165.01,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"PEK",
    To:"LHR",
    Distance:8152.71,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"LHR",
    Distance:8152.71,
    Airport:"British Airways"
}),
new Routes(
{
    From:"PEK",
    To:"LHR",
    Distance:8152.71,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"PEK",
    To:"LHW",
    Distance:1215.83,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"LHW",
    Distance:1215.83,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"LHW",
    Distance:1215.83,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"LHW",
    Distance:1215.83,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"PEK",
    To:"LHW",
    Distance:1215.83,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"LJG",
    Distance:2103.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"LJG",
    Distance:2103.48,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"LJG",
    Distance:2103.48,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"PEK",
    To:"LJG",
    Distance:2103.48,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"LUM",
    Distance:2424.01,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"PEK",
    To:"LXA",
    Distance:2622.42,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"LXA",
    Distance:2622.42,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"LYA",
    Distance:736.442,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"LYG",
    Distance:658.459,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"LYI",
    Distance:582.431,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"LZH",
    Distance:1888.69,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"LZH",
    Distance:1888.69,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"LZO",
    Distance:1613.12,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"MAD",
    Distance:9203.76,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"MAD",
    Distance:9203.76,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"MDG",
    Distance:1174.83,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"MDG",
    Distance:1174.83,
    Airport:"Canadian National Airways"
}),
new Routes(
{
    From:"PEK",
    To:"MDG",
    Distance:1174.83,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"MDG",
    Distance:1174.83,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"MFM",
    Distance:2013.7,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"MFM",
    Distance:2013.7,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"PEK",
    To:"MIG",
    Distance:1435.56,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"MIG",
    Distance:1435.56,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"MLE",
    Distance:5870.65,
    Airport:"Albanian Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"MLE",
    Distance:5870.65,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"MNL",
    Distance:2875.98,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"MNL",
    Distance:2875.98,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"PEK",
    To:"MNL",
    Distance:2875.98,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"MRU",
    Distance:9076.6,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"PEK",
    To:"MUC",
    Distance:7720.89,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"MUC",
    Distance:7720.89,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"PEK",
    To:"MWX",
    Distance:1031.77,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"MWX",
    Distance:1031.77,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"MXP",
    Distance:8091.74,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"NAO",
    Distance:1406.67,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NBS",
    Distance:944.946,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NDG",
    Distance:989.895,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"NDG",
    Distance:989.895,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NDG",
    Distance:989.895,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NGB",
    Distance:1223.17,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"NGB",
    Distance:1223.17,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NGB",
    Distance:1223.17,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NGB",
    Distance:1223.17,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NGB",
    Distance:1223.17,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NGO",
    Distance:1871.72,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PEK",
    To:"NGO",
    Distance:1871.72,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"NGO",
    Distance:1871.72,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PEK",
    To:"NGO",
    Distance:1871.72,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"PEK",
    To:"NKG",
    Distance:949.466,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"NKG",
    Distance:949.466,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NKG",
    Distance:949.466,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PEK",
    To:"NKG",
    Distance:949.466,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NNG",
    Distance:2098.04,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"NNG",
    Distance:2098.04,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NNG",
    Distance:2098.04,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NNG",
    Distance:2098.04,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NRT",
    Distance:2135.28,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"NRT",
    Distance:2135.28,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PEK",
    To:"NRT",
    Distance:2135.28,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NRT",
    Distance:2135.28,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NRT",
    Distance:2135.28,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NRT",
    Distance:2135.28,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NTG",
    Distance:973.775,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"NTG",
    Distance:973.775,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"NZH",
    Distance:1056.48,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"OKA",
    Distance:1852.4,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"OKA",
    Distance:1852.4,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PEK",
    To:"ORD",
    Distance:10562.4,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"ORD",
    Distance:10562.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"ORD",
    Distance:10562.4,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"ORD",
    Distance:10562.4,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PEK",
    To:"ORD",
    Distance:10562.4,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"OVB",
    Distance:2995.24,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"OVB",
    Distance:2995.24,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"PUS",
    Distance:1215.22,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"PUS",
    Distance:1215.22,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"PUS",
    Distance:1215.22,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"PUS",
    Distance:1215.22,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PEK",
    To:"PVG",
    Distance:1099.55,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"PVG",
    Distance:1099.55,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PEK",
    To:"PVG",
    Distance:1099.55,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PEK",
    To:"PVG",
    Distance:1099.55,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"PVG",
    Distance:1099.55,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"PVG",
    Distance:1099.55,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"REP",
    Distance:3217.07,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"RGN",
    Distance:3243.53,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"RLK",
    Distance:753.458,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"RLK",
    Distance:753.458,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SEA",
    Distance:8679.15,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SEA",
    Distance:8679.15,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SEA",
    Distance:8679.15,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SEA",
    Distance:8679.15,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PEK",
    To:"SEA",
    Distance:8679.15,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SFO",
    Distance:9494.1,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"SFO",
    Distance:9494.1,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PEK",
    To:"SFO",
    Distance:9494.1,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SGN",
    Distance:3397.65,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"SHA",
    Distance:1076.52,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"SHA",
    Distance:1076.52,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SHA",
    Distance:1076.52,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SHA",
    Distance:1076.52,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SHA",
    Distance:1076.52,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SHA",
    Distance:1076.52,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SHA",
    Distance:1076.52,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SHE",
    Distance:583.107,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"SHE",
    Distance:583.107,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SHE",
    Distance:583.107,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SHE",
    Distance:583.107,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SIN",
    Distance:4490.58,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"SIN",
    Distance:4490.58,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SPN",
    Distance:3958.83,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SVO",
    Distance:5795.06,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SVO",
    Distance:5795.06,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"SVO",
    Distance:5795.06,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SVO",
    Distance:5795.06,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SVX",
    Distance:4364.65,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SVX",
    Distance:4364.65,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SWA",
    Distance:1854.77,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"SWA",
    Distance:1854.77,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SWA",
    Distance:1854.77,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SYD",
    Distance:8964.53,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"SYX",
    Distance:2517.33,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"SYX",
    Distance:2517.33,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SYX",
    Distance:2517.33,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SYX",
    Distance:2517.33,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SZX",
    Distance:1956.85,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"SZX",
    Distance:1956.85,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SZX",
    Distance:1956.85,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"SZX",
    Distance:1956.85,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"TAE",
    Distance:1154.73,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"TAO",
    Distance:538.037,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"TAO",
    Distance:538.037,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"TAO",
    Distance:538.037,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"PEK",
    To:"TAO",
    Distance:538.037,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"TAO",
    Distance:538.037,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"TAS",
    Distance:3941.64,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"TAS",
    Distance:3941.64,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"PEK",
    To:"TEN",
    Distance:1511.56,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"TGO",
    Distance:604.722,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"TGO",
    Distance:604.722,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"TGO",
    Distance:604.722,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"TLV",
    Distance:7140.47,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"TLV",
    Distance:7140.47,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"TNA",
    Distance:362.558,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"TNA",
    Distance:362.558,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"TPE",
    Distance:1723.4,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"TPE",
    Distance:1723.4,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"TPE",
    Distance:1723.4,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"PEK",
    To:"TPE",
    Distance:1723.4,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"TSE",
    Distance:3652.05,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"PEK",
    To:"TXL",
    Distance:7356.33,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PEK",
    To:"TXL",
    Distance:7356.33,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"TXN",
    Distance:1160.5,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"TXN",
    Distance:1160.5,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"TYN",
    Distance:429.421,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"TYN",
    Distance:429.421,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"TYN",
    Distance:429.421,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"ULN",
    Distance:1165.46,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"ULN",
    Distance:1165.46,
    Airport:"MIAT Mongolian Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"URC",
    Distance:2430.02,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"URC",
    Distance:2430.02,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"URC",
    Distance:2430.02,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"URC",
    Distance:2430.02,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"UUD",
    Distance:1480.83,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"UYN",
    Distance:623.954,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"VIE",
    Distance:7451.91,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"VIE",
    Distance:7451.91,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"VKO",
    Distance:5817.25,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"VVO",
    Distance:1340.73,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"WAW",
    Distance:6943.77,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"WAW",
    Distance:6943.77,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"WEF",
    Distance:441.063,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"WNZ",
    Distance:1408.55,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"WNZ",
    Distance:1408.55,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"WNZ",
    Distance:1408.55,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"WNZ",
    Distance:1408.55,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"WUA",
    Distance:834.447,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"WUA",
    Distance:834.447,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"WUA",
    Distance:834.447,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"WUH",
    Distance:1055.77,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"WUH",
    Distance:1055.77,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"WUH",
    Distance:1055.77,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"WUH",
    Distance:1055.77,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"WUH",
    Distance:1055.77,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"WUS",
    Distance:1382.53,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"WUS",
    Distance:1382.53,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"WUX",
    Distance:1015.42,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"WUX",
    Distance:1015.42,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"WUX",
    Distance:1015.42,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"WXN",
    Distance:1265.68,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"XFN",
    Distance:962.049,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"XFN",
    Distance:962.049,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"XIL",
    Distance:429.555,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"XIL",
    Distance:429.555,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"XIY",
    Distance:933.538,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"XIY",
    Distance:933.538,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"XIY",
    Distance:933.538,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"XIY",
    Distance:933.538,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"XIY",
    Distance:933.538,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"XMN",
    Distance:1733.53,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"XMN",
    Distance:1733.53,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"XMN",
    Distance:1733.53,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"XMN",
    Distance:1733.53,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"PEK",
    To:"XMN",
    Distance:1733.53,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"XMN",
    Distance:1733.53,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"XNN",
    Distance:1327.13,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"XNN",
    Distance:1327.13,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"XNN",
    Distance:1327.13,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"XNN",
    Distance:1327.13,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"XNN",
    Distance:1327.13,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"YBP",
    Distance:1667.73,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"YBP",
    Distance:1667.73,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"YCU",
    Distance:747.877,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"YCU",
    Distance:747.877,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"YIC",
    Distance:1381.03,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"YIC",
    Distance:1381.03,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"YIH",
    Distance:1144.91,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"YIH",
    Distance:1144.91,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"YIH",
    Distance:1144.91,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"PEK",
    To:"YIH",
    Distance:1144.91,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"YIW",
    Distance:1234.32,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"YIW",
    Distance:1234.32,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"YIW",
    Distance:1234.32,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"YKS",
    Distance:2603.54,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"PEK",
    To:"YKS",
    Distance:2603.54,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"YNJ",
    Distance:1114.94,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"YNJ",
    Distance:1114.94,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"YNJ",
    Distance:1114.94,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"YNT",
    Distance:510.834,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"YNT",
    Distance:510.834,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"YNT",
    Distance:510.834,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"YNT",
    Distance:510.834,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"YNZ",
    Distance:808.304,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"YNZ",
    Distance:808.304,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"YTY",
    Distance:881.627,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"YTY",
    Distance:881.627,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"YVR",
    Distance:8492.31,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"PEK",
    To:"YVR",
    Distance:8492.31,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"YYZ",
    Distance:10560.8,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"PEK",
    To:"YYZ",
    Distance:10560.8,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"YYZ",
    Distance:10560.8,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"ZHA",
    Distance:2179.16,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"ZHA",
    Distance:2179.16,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"ZHY",
    Distance:1027.81,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"ZRH",
    Distance:7970.72,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"PEK",
    To:"ZUH",
    Distance:2032.42,
    Airport:"Air China"
}),
new Routes(
{
    From:"PEK",
    To:"ZUH",
    Distance:2032.42,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEK",
    To:"ZUH",
    Distance:2032.42,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PEM",
    To:"CUZ",
    Distance:310.932,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"PEM",
    To:"CUZ",
    Distance:310.932,
    Airport:"Star Peru (2I)"
}),
new Routes(
{
    From:"PEM",
    To:"LIM",
    Distance:859.153,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"PEN",
    To:"BKI",
    Distance:1746.99,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"PEN",
    To:"BKK",
    Distance:933.679,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PEN",
    To:"BKK",
    Distance:933.679,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"PEN",
    To:"BTJ",
    Distance:538.199,
    Airport:"Firefly"
}),
new Routes(
{
    From:"PEN",
    To:"BTJ",
    Distance:538.199,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PEN",
    To:"CAN",
    Distance:2448.74,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PEN",
    To:"CGK",
    Distance:1454.2,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"PEN",
    To:"DMK",
    Distance:958.675,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"PEN",
    To:"HKG",
    Distance:2393.22,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"PEN",
    To:"HKG",
    Distance:2393.22,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"PEN",
    To:"HKG",
    Distance:2393.22,
    Airport:"Hong Kong Express Airways"
}),
new Routes(
{
    From:"PEN",
    To:"HKT",
    Distance:380.647,
    Airport:"Firefly"
}),
new Routes(
{
    From:"PEN",
    To:"HKT",
    Distance:380.647,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PEN",
    To:"JHB",
    Distance:554.079,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"PEN",
    To:"KBR",
    Distance:243.124,
    Airport:"Firefly"
}),
new Routes(
{
    From:"PEN",
    To:"KBR",
    Distance:243.124,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PEN",
    To:"KBR",
    Distance:243.124,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"PEN",
    To:"KCH",
    Distance:1195.27,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"PEN",
    To:"KUA",
    Distance:366.423,
    Airport:"Firefly"
}),
new Routes(
{
    From:"PEN",
    To:"KUA",
    Distance:366.423,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PEN",
    To:"KUL",
    Distance:325.208,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"PEN",
    To:"KUL",
    Distance:325.208,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PEN",
    To:"KUL",
    Distance:325.208,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PEN",
    To:"KUL",
    Distance:325.208,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"PEN",
    To:"LGK",
    Distance:129.849,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"PEN",
    To:"LGK",
    Distance:129.849,
    Airport:"Firefly"
}),
new Routes(
{
    From:"PEN",
    To:"LGK",
    Distance:129.849,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PEN",
    To:"LGK",
    Distance:129.849,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"PEN",
    To:"MYY",
    Distance:1522.93,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"PEN",
    To:"SIN",
    Distance:602.372,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"PEN",
    To:"SIN",
    Distance:602.372,
    Airport:"Jetstar Asia Airways"
}),
new Routes(
{
    From:"PEN",
    To:"SIN",
    Distance:602.372,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PEN",
    To:"SIN",
    Distance:602.372,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"PEN",
    To:"SIN",
    Distance:602.372,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"PEN",
    To:"SIN",
    Distance:602.372,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"PEN",
    To:"SUB",
    Distance:1978.25,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"PEN",
    To:"SZB",
    Distance:279.19,
    Airport:"Firefly"
}),
new Routes(
{
    From:"PEN",
    To:"SZB",
    Distance:279.19,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PEN",
    To:"SZB",
    Distance:279.19,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"PEN",
    To:"TPE",
    Distance:3135.18,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"PEN",
    To:"USM",
    Distance:473.243,
    Airport:"Firefly"
}),
new Routes(
{
    From:"PEN",
    To:"USM",
    Distance:473.243,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PER",
    To:"ADL",
    Distance:2115.41,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"PER",
    To:"ADL",
    Distance:2115.41,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"ADL",
    Distance:2115.41,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"AKL",
    Distance:5336.49,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PER",
    To:"AKL",
    Distance:5336.49,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PER",
    To:"AKL",
    Distance:5336.49,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"ALH",
    Distance:375.1,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PER",
    To:"ALH",
    Distance:375.1,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"ASP",
    Distance:1977.55,
    Airport:"Emirates"
}),
new Routes(
{
    From:"PER",
    To:"ASP",
    Distance:1977.55,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"BKI",
    Distance:4211.79,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PER",
    To:"BKK",
    Distance:5325.8,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"PER",
    To:"BKK",
    Distance:5325.8,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"PER",
    To:"BME",
    Distance:1692.41,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"BME",
    Distance:1692.41,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"BNE",
    Distance:3607.6,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PER",
    To:"BNE",
    Distance:3607.6,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"PER",
    To:"BNE",
    Distance:3607.6,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"BNE",
    Distance:3607.6,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"BQB",
    Distance:201.339,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PER",
    To:"BQB",
    Distance:201.339,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"CAN",
    Distance:6159.26,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PER",
    To:"CBR",
    Distance:3084.87,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"CGK",
    Distance:3029.05,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"PER",
    To:"CGK",
    Distance:3029.05,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"PER",
    To:"CNS",
    Distance:3431.94,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"PER",
    To:"DOH",
    Distance:9332.11,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"PER",
    To:"DPS",
    Distance:2580.17,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"PER",
    To:"DPS",
    Distance:2580.17,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"PER",
    To:"DPS",
    Distance:2580.17,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"PER",
    To:"DPS",
    Distance:2580.17,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"DPS",
    Distance:2580.17,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"DRW",
    Distance:2652.63,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"DRW",
    Distance:2652.63,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"DXB",
    Distance:9041.52,
    Airport:"Emirates"
}),
new Routes(
{
    From:"PER",
    To:"DXB",
    Distance:9041.52,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"EPR",
    Distance:580.507,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PER",
    To:"EPR",
    Distance:580.507,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"GET",
    Distance:369.913,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PER",
    To:"GET",
    Distance:369.913,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"GET",
    Distance:369.913,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"HKG",
    Distance:6036.19,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"PER",
    To:"HKT",
    Distance:4832.14,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"JNB",
    Distance:8309.63,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"JNB",
    Distance:8309.63,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"PER",
    To:"KGI",
    Distance:537.097,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PER",
    To:"KGI",
    Distance:537.097,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"KGI",
    Distance:537.097,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"KNX",
    Distance:2211.23,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PER",
    To:"KNX",
    Distance:2211.23,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"PER",
    To:"KNX",
    Distance:2211.23,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"KNX",
    Distance:2211.23,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"KTA",
    Distance:1251.07,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"KTA",
    Distance:1251.07,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"KUL",
    Distance:4140.16,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"PER",
    To:"KUL",
    Distance:4140.16,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PER",
    To:"LEA",
    Distance:1094.95,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PER",
    To:"LEA",
    Distance:1094.95,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"LEA",
    Distance:1094.95,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"LOP",
    Distance:2578.03,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"PER",
    To:"MEL",
    Distance:2700.78,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PER",
    To:"MEL",
    Distance:2700.78,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"PER",
    To:"MEL",
    Distance:2700.78,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"MEL",
    Distance:2700.78,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"PER",
    To:"MEL",
    Distance:2700.78,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"MRU",
    Distance:5886.02,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"PER",
    To:"PBO",
    Distance:990.662,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PER",
    To:"PBO",
    Distance:990.662,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"PBO",
    Distance:990.662,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"PHE",
    Distance:1312.65,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"PHE",
    Distance:1312.65,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"RVT",
    Distance:446.626,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PER",
    To:"RVT",
    Distance:446.626,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"SIN",
    Distance:3910.75,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PER",
    To:"SIN",
    Distance:3910.75,
    Airport:"Emirates"
}),
new Routes(
{
    From:"PER",
    To:"SIN",
    Distance:3910.75,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"PER",
    To:"SIN",
    Distance:3910.75,
    Airport:"Jetstar Asia Airways"
}),
new Routes(
{
    From:"PER",
    To:"SIN",
    Distance:3910.75,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"SIN",
    Distance:3910.75,
    Airport:"Scoot"
}),
new Routes(
{
    From:"PER",
    To:"SIN",
    Distance:3910.75,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"PER",
    To:"SIN",
    Distance:3910.75,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"PER",
    To:"SIN",
    Distance:3910.75,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"SYD",
    Distance:3277.21,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PER",
    To:"SYD",
    Distance:3277.21,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"PER",
    To:"SYD",
    Distance:3277.21,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"SYD",
    Distance:3277.21,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"PER",
    To:"SYD",
    Distance:3277.21,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"XCH",
    Distance:2612.51,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PER",
    To:"ZNE",
    Distance:1019.92,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PER",
    To:"ZNE",
    Distance:1019.92,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PES",
    To:"DME",
    Distance:751.848,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"PET",
    To:"POA",
    Distance:221.191,
    Airport:"Azul"
}),
new Routes(
{
    From:"PET",
    To:"POA",
    Distance:221.191,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"PET",
    To:"POA",
    Distance:221.191,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"PET",
    To:"RIG",
    Distance:43.2668,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"PEU",
    To:"LCE",
    Distance:333.446,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"PEU",
    To:"TGU",
    Distance:393.011,
    Airport:"Air Atlanta Icelandic"
}),
new Routes(
{
    From:"PEW",
    To:"AAN",
    Distance:1882.33,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"PEW",
    To:"AUH",
    Distance:1947.33,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"PEW",
    To:"AUH",
    Distance:1947.33,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PEW",
    To:"AUH",
    Distance:1947.33,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"PEW",
    To:"AUH",
    Distance:1947.33,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PEW",
    To:"BAH",
    Distance:2178.6,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"PEW",
    To:"CJL",
    Distance:212.065,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PEW",
    To:"DOH",
    Distance:2153.52,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PEW",
    To:"DOH",
    Distance:2153.52,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"PEW",
    To:"DSK",
    Distance:238.847,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PEW",
    To:"DXB",
    Distance:1835.33,
    Airport:"Emirates"
}),
new Routes(
{
    From:"PEW",
    To:"DXB",
    Distance:1835.33,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"PEW",
    To:"ISB",
    Distance:152.304,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PEW",
    To:"JED",
    Distance:3444.7,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PEW",
    To:"JED",
    Distance:3444.7,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"PEW",
    To:"KBL",
    Distance:220.878,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PEW",
    To:"KHI",
    Distance:1094.54,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"PEW",
    To:"KHI",
    Distance:1094.54,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PEW",
    To:"KHI",
    Distance:1094.54,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"PEW",
    To:"KUL",
    Distance:4675.75,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PEW",
    To:"KWI",
    Distance:2286.27,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PEW",
    To:"LHE",
    Distance:385.397,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PEW",
    To:"MCT",
    Distance:1728.92,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PEW",
    To:"MCT",
    Distance:1728.92,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"PEW",
    To:"RUH",
    Distance:2595.12,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PEW",
    To:"RUH",
    Distance:2595.12,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"PEW",
    To:"RUH",
    Distance:2595.12,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"PEW",
    To:"SHJ",
    Distance:1817.94,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"PEW",
    To:"SHJ",
    Distance:1817.94,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PEW",
    To:"SHJ",
    Distance:1817.94,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"PEZ",
    To:"DME",
    Distance:527.708,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"PFB",
    To:"ERM",
    Distance:64.9778,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"PFB",
    To:"GRU",
    Distance:793.397,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"PFB",
    To:"POA",
    Distance:224.664,
    Airport:"Azul"
}),
new Routes(
{
    From:"PFB",
    To:"POA",
    Distance:224.664,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"PFB",
    To:"VCP",
    Distance:780.805,
    Airport:"Azul"
}),
new Routes(
{
    From:"PFO",
    To:"AMS",
    Distance:2937.79,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"PFO",
    To:"ATH",
    Distance:844.244,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PFO",
    To:"BHX",
    Distance:3340.13,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"PFO",
    To:"BHX",
    Distance:3340.13,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PFO",
    To:"BRS",
    Distance:3359.41,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PFO",
    To:"BRS",
    Distance:3359.41,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PFO",
    To:"BRU",
    Distance:2877.99,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"PFO",
    To:"CHQ",
    Distance:763.278,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PFO",
    To:"CRL",
    Distance:2857.25,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PFO",
    To:"DME",
    Distance:2338.02,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"PFO",
    To:"DME",
    Distance:2338.02,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"PFO",
    To:"EDI",
    Distance:3595.98,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PFO",
    To:"EMA",
    Distance:3330.5,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PFO",
    To:"EMA",
    Distance:3330.5,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"PFO",
    To:"EMA",
    Distance:3330.5,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PFO",
    To:"GLA",
    Distance:3652.13,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PFO",
    To:"GPA",
    Distance:1059.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PFO",
    To:"KRK",
    Distance:1994.94,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PFO",
    To:"KRR",
    Distance:1280.04,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"PFO",
    To:"KUN",
    Distance:2342.68,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PFO",
    To:"LBA",
    Distance:3397.86,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PFO",
    To:"LGW",
    Distance:3185.78,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"PFO",
    To:"LGW",
    Distance:3185.78,
    Airport:"British Airways"
}),
new Routes(
{
    From:"PFO",
    To:"LGW",
    Distance:3185.78,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"PFO",
    To:"LGW",
    Distance:3185.78,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PFO",
    To:"LGW",
    Distance:3185.78,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PFO",
    To:"LTN",
    Distance:3228.39,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PFO",
    To:"LTN",
    Distance:3228.39,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PFO",
    To:"MAN",
    Distance:3411.64,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"PFO",
    To:"MAN",
    Distance:3411.64,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PFO",
    To:"MAN",
    Distance:3411.64,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PFO",
    To:"MAN",
    Distance:3411.64,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"PFO",
    To:"MAN",
    Distance:3411.64,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PFO",
    To:"MAN",
    Distance:3411.64,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PFO",
    To:"NCL",
    Distance:3456.19,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PFO",
    To:"NCL",
    Distance:3456.19,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PFO",
    To:"NYO",
    Distance:2911.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PFO",
    To:"SKG",
    Distance:1056.5,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PFO",
    To:"SOF",
    Distance:1184.93,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"PFO",
    To:"STN",
    Distance:3190.91,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PFO",
    To:"STN",
    Distance:3190.91,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PFO",
    To:"VKO",
    Distance:2349.69,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"PFQ",
    To:"THR",
    Distance:529.761,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"PGA",
    To:"DEN",
    Distance:674.394,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PGA",
    To:"DEN",
    Distance:674.394,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"PGA",
    To:"DEN",
    Distance:674.394,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PGA",
    To:"GCN",
    Distance:125.018,
    Airport:"SENIC AIRLINES"
}),
new Routes(
{
    From:"PGA",
    To:"IGM",
    Distance:290.474,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"PGA",
    To:"PHX",
    Distance:391.631,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"PGD",
    To:"ABE",
    Distance:1641.27,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGD",
    To:"AVL",
    Distance:948.434,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGD",
    To:"CID",
    Distance:1884.87,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGD",
    To:"CVG",
    Distance:1371.43,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGD",
    To:"DSM",
    Distance:1943.23,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGD",
    To:"FWA",
    Distance:1590.63,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGD",
    To:"GSP",
    Distance:887.139,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGD",
    To:"IAG",
    Distance:1820.86,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGD",
    To:"ISP",
    Distance:1745.35,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGD",
    To:"LEX",
    Distance:1260.07,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGD",
    To:"PIA",
    Distance:1684.18,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGD",
    To:"RFD",
    Distance:1817.25,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGD",
    To:"SBN",
    Distance:1691.15,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGD",
    To:"SGF",
    Distance:1569.59,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGD",
    To:"SPI",
    Distance:1602.99,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGD",
    To:"TOL",
    Distance:1639.32,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGD",
    To:"TYS",
    Distance:1006.72,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGD",
    To:"YNG",
    Distance:1599.16,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PGF",
    To:"CRL",
    Distance:866.711,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PGF",
    To:"DUB",
    Distance:1365.57,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"PGF",
    To:"NTE",
    Distance:604.046,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"PGF",
    To:"ORY",
    Distance:666.661,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"PGF",
    To:"STN",
    Distance:1035.88,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PGK",
    To:"BTH",
    Distance:428.639,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PGK",
    To:"CGK",
    Distance:444.417,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"PGK",
    To:"CGK",
    Distance:444.417,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"PGK",
    To:"CGK",
    Distance:444.417,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PGK",
    To:"CGK",
    Distance:444.417,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"PGK",
    To:"PLM",
    Distance:179.603,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"PGK",
    To:"TJQ",
    Distance:190.876,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PGU",
    To:"AWZ",
    Distance:584.818,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"PGU",
    To:"IFN",
    Distance:603.186,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"PGU",
    To:"RAS",
    Distance:1144.17,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"PGU",
    To:"SYZ",
    Distance:240.592,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"PGU",
    To:"THR",
    Distance:933.768,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"PGV",
    To:"CLT",
    Distance:325.746,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PGV",
    To:"CLT",
    Distance:325.746,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PGX",
    To:"EGC",
    Distance:47.5716,
    Airport:"Twin Jet"
}),
new Routes(
{
    From:"PGX",
    To:"ORY",
    Distance:409.312,
    Airport:"Twin Jet"
}),
new Routes(
{
    From:"PHC",
    To:"ABV",
    Distance:445.159,
    Airport:"Air France"
}),
new Routes(
{
    From:"PHC",
    To:"ABV",
    Distance:445.159,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"PHC",
    To:"ABV",
    Distance:445.159,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PHC",
    To:"ABV",
    Distance:445.159,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PHC",
    To:"LOS",
    Distance:437.349,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"PHC",
    To:"LOS",
    Distance:437.349,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"PHC",
    To:"LOS",
    Distance:437.349,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"PHC",
    To:"LOS",
    Distance:437.349,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PHE",
    To:"BME",
    Distance:472.373,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"PHE",
    To:"BME",
    Distance:472.373,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PHE",
    To:"BME",
    Distance:472.373,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PHE",
    To:"BNE",
    Distance:3580.24,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PHE",
    To:"DPS",
    Distance:1345.46,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PHE",
    To:"MEL",
    Distance:3173.88,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PHE",
    To:"PER",
    Distance:1312.65,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PHE",
    To:"PER",
    Distance:1312.65,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PHF",
    To:"ATL",
    Distance:817.217,
    Airport:"Air France"
}),
new Routes(
{
    From:"PHF",
    To:"ATL",
    Distance:817.217,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PHF",
    To:"ATL",
    Distance:817.217,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PHF",
    To:"CLT",
    Distance:452.739,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHF",
    To:"CLT",
    Distance:452.739,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHF",
    To:"DEN",
    Distance:2460.81,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PHF",
    To:"PHL",
    Distance:323.558,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHF",
    To:"PHL",
    Distance:323.558,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHF",
    To:"SFB",
    Distance:1028.64,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PHL",
    To:"ABE",
    Distance:88.3864,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ABE",
    Distance:88.3864,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"ALB",
    Distance:341.668,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ALB",
    Distance:341.668,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"AMS",
    Distance:5997.05,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"AMS",
    Distance:5997.05,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"ART",
    Distance:462.642,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ART",
    Distance:462.642,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"ATH",
    Distance:8083.06,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ATH",
    Distance:8083.06,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ATH",
    Distance:8083.06,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"ATL",
    Distance:1071.59,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PHL",
    To:"ATL",
    Distance:1071.59,
    Airport:"Air France"
}),
new Routes(
{
    From:"PHL",
    To:"ATL",
    Distance:1071.59,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHL",
    To:"ATL",
    Distance:1071.59,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PHL",
    To:"ATL",
    Distance:1071.59,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ATL",
    Distance:1071.59,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PHL",
    To:"ATL",
    Distance:1071.59,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ATL",
    Distance:1071.59,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ATL",
    Distance:1071.59,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"AUA",
    Distance:3086.35,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"AUA",
    Distance:3086.35,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"AUS",
    Distance:2299.09,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"AUS",
    Distance:2299.09,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"AVP",
    Distance:168.076,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"AVP",
    Distance:168.076,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"BCN",
    Distance:6299.91,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"BCN",
    Distance:6299.91,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"BDA",
    Distance:1262.09,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"BDA",
    Distance:1262.09,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"BDL",
    Distance:314.667,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"BDL",
    Distance:314.667,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"BGM",
    Distance:267.115,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"BGM",
    Distance:267.115,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"BGR",
    Distance:760.447,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"BGR",
    Distance:760.447,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"BHM",
    Distance:1241.37,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"BHM",
    Distance:1241.37,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"BNA",
    Distance:1084.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"BNA",
    Distance:1084.3,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"BNA",
    Distance:1084.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"BOS",
    Distance:450.146,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"BOS",
    Distance:450.146,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PHL",
    To:"BOS",
    Distance:450.146,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"BRU",
    Distance:6035.51,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"BRU",
    Distance:6035.51,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"BTV",
    Distance:539.6,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"BTV",
    Distance:539.6,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"BUF",
    Distance:448.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"BUF",
    Distance:448.46,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"BWI",
    Distance:144.857,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"BWI",
    Distance:144.857,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"CAE",
    Distance:841.244,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"CAE",
    Distance:841.244,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"CAK",
    Distance:537.701,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"CAK",
    Distance:537.701,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"CDG",
    Distance:5984.13,
    Airport:"Air France"
}),
new Routes(
{
    From:"PHL",
    To:"CDG",
    Distance:5984.13,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"CDG",
    Distance:5984.13,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PHL",
    To:"CDG",
    Distance:5984.13,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"CHO",
    Distance:337.843,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"CHO",
    Distance:337.843,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"CHS",
    Distance:886.104,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"CHS",
    Distance:886.104,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"CLE",
    Distance:583.117,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"CLE",
    Distance:583.117,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"CLT",
    Distance:721.477,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"CLT",
    Distance:721.477,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"CMH",
    Distance:652.263,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"CMH",
    Distance:652.263,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"CUN",
    Distance:2367.8,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"CUN",
    Distance:2367.8,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"CUN",
    Distance:2367.8,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"CVG",
    Distance:814.048,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"CVG",
    Distance:814.048,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PHL",
    To:"CVG",
    Distance:814.048,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"DAY",
    Distance:765.715,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"DAY",
    Distance:765.715,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"DCA",
    Distance:191.608,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"DCA",
    Distance:191.608,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"DEN",
    Distance:2500.4,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHL",
    To:"DEN",
    Distance:2500.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"DEN",
    Distance:2500.4,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"DEN",
    Distance:2500.4,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"DEN",
    Distance:2500.4,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"DFW",
    Distance:2092.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"DFW",
    Distance:2092.87,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"DFW",
    Distance:2092.87,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"DOH",
    Distance:10917,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"DOH",
    Distance:10917,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"PHL",
    To:"DTW",
    Distance:728.048,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"DTW",
    Distance:728.048,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PHL",
    To:"DTW",
    Distance:728.048,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"DUB",
    Distance:5252.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"DUB",
    Distance:5252.87,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"ELM",
    Distance:289.637,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ELM",
    Distance:289.637,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"ERI",
    Distance:481.579,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ERI",
    Distance:481.579,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"EWR",
    Distance:128.844,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"EWR",
    Distance:128.844,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"FCO",
    Distance:7016.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"FCO",
    Distance:7016.87,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"FLL",
    Distance:1600.63,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHL",
    To:"FLL",
    Distance:1600.63,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"FLL",
    Distance:1600.63,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"FLL",
    Distance:1600.63,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"FRA",
    Distance:6337.91,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"FRA",
    Distance:6337.91,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"PHL",
    To:"FRA",
    Distance:6337.91,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"GCM",
    Distance:2361.91,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"GCM",
    Distance:2361.91,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"GLA",
    Distance:5310.81,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"GLA",
    Distance:5310.81,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"GSO",
    Distance:587.631,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"GSO",
    Distance:587.631,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"GSP",
    Distance:827.92,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"GSP",
    Distance:827.92,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"HPN",
    Distance:185.698,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"HPN",
    Distance:185.698,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"HVN",
    Distance:251.972,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"HVN",
    Distance:251.972,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"IAD",
    Distance:216.41,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"IAH",
    Distance:2129.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"IAH",
    Distance:2129.48,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"IAH",
    Distance:2129.48,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ICT",
    Distance:1934.9,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHL",
    To:"ILM",
    Distance:666.003,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ILM",
    Distance:666.003,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"IND",
    Distance:943.898,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"IND",
    Distance:943.898,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"IPT",
    Distance:208.187,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"IPT",
    Distance:208.187,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"ISP",
    Distance:208.49,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ISP",
    Distance:208.49,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"ITH",
    Distance:308.523,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ITH",
    Distance:308.523,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"JAX",
    Distance:1195.24,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"JAX",
    Distance:1195.24,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"JFK",
    Distance:150.615,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PHL",
    To:"LAS",
    Distance:3494.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"LAS",
    Distance:3494.43,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"LAS",
    Distance:3494.43,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"LAS",
    Distance:3494.43,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"LAX",
    Distance:3856.32,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"LAX",
    Distance:3856.32,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"LAX",
    Distance:3856.32,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"PHL",
    To:"LGA",
    Distance:153.597,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"LGA",
    Distance:153.597,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"LHR",
    Distance:5689.59,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"LHR",
    Distance:5689.59,
    Airport:"British Airways"
}),
new Routes(
{
    From:"PHL",
    To:"LHR",
    Distance:5689.59,
    Airport:"Finnair"
}),
new Routes(
{
    From:"PHL",
    To:"LHR",
    Distance:5689.59,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"LHR",
    Distance:5689.59,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"LIS",
    Distance:5550.69,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"LIS",
    Distance:5550.69,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"PHL",
    To:"LIS",
    Distance:5550.69,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"MAD",
    Distance:5909.39,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"MAD",
    Distance:5909.39,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"MAN",
    Distance:5511.7,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"MAN",
    Distance:5511.7,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"MBJ",
    Distance:2389.84,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"MBJ",
    Distance:2389.84,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"MCI",
    Distance:1666.66,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"MCI",
    Distance:1666.66,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"MCO",
    Distance:1388.56,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHL",
    To:"MCO",
    Distance:1388.56,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"MCO",
    Distance:1388.56,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"MCO",
    Distance:1388.56,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"MDT",
    Distance:134.444,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"MDT",
    Distance:134.444,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"MDW",
    Distance:1072.93,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHL",
    To:"MDW",
    Distance:1072.93,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"MHT",
    Distance:465.259,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"MHT",
    Distance:465.259,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"MIA",
    Distance:1634.24,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"MIA",
    Distance:1634.24,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"MKE",
    Distance:1108.13,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"MKE",
    Distance:1108.13,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"MSP",
    Distance:1574.41,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"MSP",
    Distance:1574.41,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PHL",
    To:"MSP",
    Distance:1574.41,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"MSY",
    Distance:1750.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"MSY",
    Distance:1750.89,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"MUC",
    Distance:6631.16,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"MUC",
    Distance:6631.16,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"MYR",
    Distance:762.654,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"MYR",
    Distance:762.654,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"MYR",
    Distance:762.654,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"NAS",
    Distance:1662.35,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"NAS",
    Distance:1662.35,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"ORD",
    Distance:1088.32,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ORD",
    Distance:1088.32,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"ORD",
    Distance:1088.32,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ORF",
    Distance:341.47,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ORF",
    Distance:341.47,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"PBI",
    Distance:1533.7,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"PBI",
    Distance:1533.7,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"PDX",
    Distance:3862.51,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"PDX",
    Distance:3862.51,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"PHF",
    Distance:323.558,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"PHF",
    Distance:323.558,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"PHX",
    Distance:3332.79,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHL",
    To:"PHX",
    Distance:3332.79,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"PHX",
    Distance:3332.79,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"PHX",
    Distance:3332.79,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"PIT",
    Distance:429.561,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"PIT",
    Distance:429.561,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"PLS",
    Distance:2032.05,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"PLS",
    Distance:2032.05,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"PUJ",
    Distance:2459.13,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"PUJ",
    Distance:2459.13,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"PUJ",
    Distance:2459.13,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"PVD",
    Distance:382.34,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"PVD",
    Distance:382.34,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"PWM",
    Distance:585.85,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"PWM",
    Distance:585.85,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"RDU",
    Distance:542.248,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"RDU",
    Distance:542.248,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PHL",
    To:"RDU",
    Distance:542.248,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"RIC",
    Distance:319.047,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"RIC",
    Distance:319.047,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"ROA",
    Distance:499.325,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ROA",
    Distance:499.325,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"ROC",
    Distance:413.9,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ROC",
    Distance:413.9,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"RSW",
    Distance:1600.72,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"RSW",
    Distance:1600.72,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"RSW",
    Distance:1600.72,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"SAN",
    Distance:3805.92,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"SAN",
    Distance:3805.92,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"SAT",
    Distance:2404.24,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"SAT",
    Distance:2404.24,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"SAV",
    Distance:1013.85,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"SAV",
    Distance:1013.85,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"SBY",
    Distance:171.862,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"SBY",
    Distance:171.862,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"SCE",
    Distance:246.201,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"SCE",
    Distance:246.201,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"SDF",
    Distance:925.516,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"SDF",
    Distance:925.516,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"SDQ",
    Distance:2443.53,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"SDQ",
    Distance:2443.53,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"SEA",
    Distance:3817.67,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"SEA",
    Distance:3817.67,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"SEA",
    Distance:3817.67,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"SFO",
    Distance:4047.74,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"SFO",
    Distance:4047.74,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"SFO",
    Distance:4047.74,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"SFO",
    Distance:4047.74,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"PHL",
    To:"SJU",
    Distance:2542.8,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"SJU",
    Distance:2542.8,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"SLC",
    Distance:3092.79,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"SLC",
    Distance:3092.79,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PHL",
    To:"SLC",
    Distance:3092.79,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"STL",
    Distance:1306,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"STL",
    Distance:1306,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"STL",
    Distance:1306,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"STT",
    Distance:2589.51,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"STT",
    Distance:2589.51,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"SWF",
    Distance:205.218,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"SWF",
    Distance:205.218,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"SXM",
    Distance:2693,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"SXM",
    Distance:2693,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"SYR",
    Distance:367.319,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"SYR",
    Distance:367.319,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"TLV",
    Distance:9267.59,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"TLV",
    Distance:9267.59,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"TPA",
    Distance:1482.74,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"TPA",
    Distance:1482.74,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"TPA",
    Distance:1482.74,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"TYS",
    Distance:890.806,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"TYS",
    Distance:890.806,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"VCE",
    Distance:6818.77,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"VCE",
    Distance:6818.77,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"YHZ",
    Distance:1111.52,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"YHZ",
    Distance:1111.52,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"YOW",
    Distance:607.083,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"YOW",
    Distance:607.083,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"YQB",
    Distance:829.668,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"YQB",
    Distance:829.668,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"YUL",
    Distance:634.472,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"YUL",
    Distance:634.472,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"YYZ",
    Distance:557.976,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"PHL",
    To:"YYZ",
    Distance:557.976,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"YYZ",
    Distance:557.976,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHL",
    To:"YYZ",
    Distance:557.976,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ZRH",
    Distance:6459.92,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHL",
    To:"ZRH",
    Distance:6459.92,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHO",
    To:"LUR",
    Distance:64.8513,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"PHO",
    To:"OTZ",
    Distance:241.028,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"PHO",
    To:"OTZ",
    Distance:241.028,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"PHO",
    To:"PIZ",
    Distance:215.46,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"PHS",
    To:"CNX",
    Distance:260.948,
    Airport:"Zambia Skyways"
}),
new Routes(
{
    From:"PHS",
    To:"DMK",
    Distance:321.096,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"PHS",
    To:"DMK",
    Distance:321.096,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"PHW",
    To:"JNB",
    Distance:381.895,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"PHX",
    To:"ABQ",
    Distance:527.661,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHX",
    To:"ABQ",
    Distance:527.661,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"ABQ",
    Distance:527.661,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"ABQ",
    Distance:527.661,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"ANC",
    Distance:4101.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"ANC",
    Distance:4101.46,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"ATL",
    Distance:2549.05,
    Airport:"Air France"
}),
new Routes(
{
    From:"PHX",
    To:"ATL",
    Distance:2549.05,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHX",
    To:"ATL",
    Distance:2549.05,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PHX",
    To:"ATL",
    Distance:2549.05,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"ATL",
    Distance:2549.05,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PHX",
    To:"ATL",
    Distance:2549.05,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"ATL",
    Distance:2549.05,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"ATL",
    Distance:2549.05,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"ATL",
    Distance:2549.05,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"PHX",
    To:"AUS",
    Distance:1400.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"AUS",
    Distance:1400.87,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"AUS",
    Distance:1400.87,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"BFL",
    Distance:683.101,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"BFL",
    Distance:683.101,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"BNA",
    Distance:2326.29,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"BOI",
    Distance:1184.09,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"BOI",
    Distance:1184.09,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"BOI",
    Distance:1184.09,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"BOS",
    Distance:3693.74,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"BOS",
    Distance:3693.74,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PHX",
    To:"BOS",
    Distance:3693.74,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"BUF",
    Distance:3070.68,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"BUR",
    Distance:592.417,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"BUR",
    Distance:592.417,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"BUR",
    Distance:592.417,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"BWI",
    Distance:3209.7,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"BWI",
    Distance:3209.7,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"BWI",
    Distance:3209.7,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"CLE",
    Distance:2790.73,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"CLT",
    Distance:2848.34,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"CLT",
    Distance:2848.34,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"CMH",
    Distance:2682.8,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"CMH",
    Distance:2682.8,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"CMH",
    Distance:2682.8,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"CUN",
    Distance:2830.38,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"CUN",
    Distance:2830.38,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"DCA",
    Distance:3177.68,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"DCA",
    Distance:3177.68,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"DEN",
    Distance:968.5,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHX",
    To:"DEN",
    Distance:968.5,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"DEN",
    Distance:968.5,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"DEN",
    Distance:968.5,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"DEN",
    Distance:968.5,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"DEN",
    Distance:968.5,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"DEN",
    Distance:968.5,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"DFW",
    Distance:1393.83,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"DFW",
    Distance:1393.83,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"DFW",
    Distance:1393.83,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"DRO",
    Distance:565.707,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"DRO",
    Distance:565.707,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"DSM",
    Distance:1847.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"DSM",
    Distance:1847.12,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"DTW",
    Distance:2683.95,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"DTW",
    Distance:2683.95,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PHX",
    To:"DTW",
    Distance:2683.95,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"DTW",
    Distance:2683.95,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"ELP",
    Distance:557.709,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"ELP",
    Distance:557.709,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"ELP",
    Distance:557.709,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"EWR",
    Distance:3425.34,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"EWR",
    Distance:3425.34,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"EWR",
    Distance:3425.34,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"EWR",
    Distance:3425.34,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"FAT",
    Distance:793.078,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"FAT",
    Distance:793.078,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"FLG",
    Distance:192.292,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"FLG",
    Distance:192.292,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"FLL",
    Distance:3168.87,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHX",
    To:"FLL",
    Distance:3168.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"FLL",
    Distance:3168.87,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"FLL",
    Distance:3168.87,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"GDL",
    Distance:1673.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"GDL",
    Distance:1673.01,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"GDL",
    Distance:1673.01,
    Airport:"Volaris"
}),
new Routes(
{
    From:"PHX",
    To:"GEG",
    Distance:1643.86,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"GEG",
    Distance:1643.86,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"GEG",
    Distance:1643.86,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"GJT",
    Distance:705.271,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"GJT",
    Distance:705.271,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"HMO",
    Distance:491.021,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PHX",
    To:"HMO",
    Distance:491.021,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PHX",
    To:"HMO",
    Distance:491.021,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"HNL",
    Distance:4688.5,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"HNL",
    Distance:4688.5,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"HNL",
    Distance:4688.5,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"HOU",
    Distance:1638.65,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHX",
    To:"HOU",
    Distance:1638.65,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"IAD",
    Distance:3141.54,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"IAH",
    Distance:1620.92,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"IAH",
    Distance:1620.92,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"IAH",
    Distance:1620.92,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"IND",
    Distance:2390.83,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"IND",
    Distance:2390.83,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"IND",
    Distance:2390.83,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"JFK",
    Distance:3458.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"JFK",
    Distance:3458.08,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PHX",
    To:"JFK",
    Distance:3458.08,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PHX",
    To:"JFK",
    Distance:3458.08,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"KOA",
    Distance:4596.93,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"KOA",
    Distance:4596.93,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"LAS",
    Distance:410.889,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHX",
    To:"LAS",
    Distance:410.889,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"LAS",
    Distance:410.889,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"LAS",
    Distance:410.889,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"LAX",
    Distance:594.407,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"LAX",
    Distance:594.407,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"LAX",
    Distance:594.407,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PHX",
    To:"LAX",
    Distance:594.407,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"LAX",
    Distance:594.407,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"LAX",
    Distance:594.407,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"LGB",
    Distance:570.008,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"LGB",
    Distance:570.008,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"LHR",
    Distance:8462.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"LHR",
    Distance:8462.43,
    Airport:"British Airways"
}),
new Routes(
{
    From:"PHX",
    To:"LHR",
    Distance:8462.43,
    Airport:"Finnair"
}),
new Routes(
{
    From:"PHX",
    To:"LHR",
    Distance:8462.43,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"LIH",
    Distance:4787.2,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"LIH",
    Distance:4787.2,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"LIT",
    Distance:1825.06,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"MCI",
    Distance:1676.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"MCI",
    Distance:1676.89,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"MCI",
    Distance:1676.89,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"MCO",
    Distance:2969.65,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"MCO",
    Distance:2969.65,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"MCO",
    Distance:2969.65,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"MDW",
    Distance:2319.62,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"MEX",
    Distance:2016.62,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"MEX",
    Distance:2016.62,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"MEX",
    Distance:2016.62,
    Airport:"Volaris"
}),
new Routes(
{
    From:"PHX",
    To:"MIA",
    Distance:3168.23,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"MIA",
    Distance:3168.23,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"MKE",
    Distance:2346.5,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"MKE",
    Distance:2346.5,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"MKE",
    Distance:2346.5,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"MRY",
    Distance:960.963,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"MRY",
    Distance:960.963,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"MSP",
    Distance:2051.68,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"MSP",
    Distance:2051.68,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PHX",
    To:"MSP",
    Distance:2051.68,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"MSP",
    Distance:2051.68,
    Airport:"Sun Country Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"MSP",
    Distance:2051.68,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"MSY",
    Distance:2088.93,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"MZT",
    Distance:1272.65,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"MZT",
    Distance:1272.65,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"OAK",
    Distance:1038.23,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHX",
    To:"OAK",
    Distance:1038.23,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"OAK",
    Distance:1038.23,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"OAK",
    Distance:1038.23,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"OGG",
    Distance:4571.9,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"OGG",
    Distance:4571.9,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"OKC",
    Distance:1338.52,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"OMA",
    Distance:1667.51,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"OMA",
    Distance:1667.51,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"OMA",
    Distance:1667.51,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"ONT",
    Distance:521.353,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHX",
    To:"ONT",
    Distance:521.353,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"ONT",
    Distance:521.353,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"ONT",
    Distance:521.353,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"ORD",
    Distance:2313.39,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"ORD",
    Distance:2313.39,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"ORD",
    Distance:2313.39,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"PDX",
    Distance:1625.09,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHX",
    To:"PDX",
    Distance:1625.09,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"PDX",
    Distance:1625.09,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"PDX",
    Distance:1625.09,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"PDX",
    Distance:1625.09,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"PGA",
    Distance:391.631,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"PHL",
    Distance:3332.79,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHX",
    To:"PHL",
    Distance:3332.79,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"PHL",
    Distance:3332.79,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"PHL",
    Distance:3332.79,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"PIT",
    Distance:2912.96,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"PIT",
    Distance:2912.96,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"PIT",
    Distance:2912.96,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"PSP",
    Distance:418.449,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"PSP",
    Distance:418.449,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"PVR",
    Distance:1567.05,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"PVR",
    Distance:1567.05,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"RDU",
    Distance:3036.45,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"RNO",
    Distance:966.664,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"RNO",
    Distance:966.664,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"RNO",
    Distance:966.664,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"SAN",
    Distance:488.624,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHX",
    To:"SAN",
    Distance:488.624,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SAN",
    Distance:488.624,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SAN",
    Distance:488.624,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"SAT",
    Distance:1354.1,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SAT",
    Distance:1354.1,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SAT",
    Distance:1354.1,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"SBA",
    Distance:730.466,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SBA",
    Distance:730.466,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"SBP",
    Distance:817.084,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SBP",
    Distance:817.084,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"SDF",
    Distance:2418.71,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SEA",
    Distance:1781.86,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SEA",
    Distance:1781.86,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SEA",
    Distance:1781.86,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SEA",
    Distance:1781.86,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"SFO",
    Distance:1046.06,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SFO",
    Distance:1046.06,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SFO",
    Distance:1046.06,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"SFO",
    Distance:1046.06,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SJC",
    Distance:998.687,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHX",
    To:"SJC",
    Distance:998.687,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SJC",
    Distance:998.687,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SJC",
    Distance:998.687,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"SJD",
    Distance:1165.03,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SJD",
    Distance:1165.03,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"SLC",
    Distance:817.745,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SLC",
    Distance:817.745,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PHX",
    To:"SLC",
    Distance:817.745,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SLC",
    Distance:817.745,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"SMF",
    Distance:1040.02,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SMF",
    Distance:1040.02,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SMF",
    Distance:1040.02,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"SNA",
    Distance:543.295,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PHX",
    To:"SNA",
    Distance:543.295,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SNA",
    Distance:543.295,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SNA",
    Distance:543.295,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"SOW",
    Distance:207.025,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SOW",
    Distance:207.025,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"SOW",
    Distance:207.025,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"STL",
    Distance:2026.78,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"STL",
    Distance:2026.78,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"STL",
    Distance:2026.78,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"SVC",
    Distance:370.171,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"TPA",
    Distance:2872.71,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"TPA",
    Distance:2872.71,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"TPA",
    Distance:2872.71,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"TUL",
    Distance:1501.75,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"TUS",
    Distance:177.487,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"TUS",
    Distance:177.487,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"YEG",
    Distance:2213.55,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"YEG",
    Distance:2213.55,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"YEG",
    Distance:2213.55,
    Airport:"WestJet"
}),
new Routes(
{
    From:"PHX",
    To:"YUM",
    Distance:256.806,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"YUM",
    Distance:256.806,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"YVR",
    Distance:1980.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"YVR",
    Distance:1980.43,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"YYC",
    Distance:1972.63,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"YYC",
    Distance:1972.63,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PHX",
    To:"YYC",
    Distance:1972.63,
    Airport:"WestJet"
}),
new Routes(
{
    From:"PHX",
    To:"YYZ",
    Distance:3013.39,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"PHX",
    To:"ZIH",
    Distance:2051.29,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PHX",
    To:"ZIH",
    Distance:2051.29,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PIA",
    To:"ATL",
    Distance:909.712,
    Airport:"Air France"
}),
new Routes(
{
    From:"PIA",
    To:"ATL",
    Distance:909.712,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PIA",
    To:"ATL",
    Distance:909.712,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PIA",
    To:"AZA",
    Distance:2107.85,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIA",
    To:"DEN",
    Distance:1272.65,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PIA",
    To:"DFW",
    Distance:1082.53,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PIA",
    To:"DFW",
    Distance:1082.53,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PIA",
    To:"DTW",
    Distance:555.657,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PIA",
    To:"LAS",
    Distance:2268.6,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIA",
    To:"MSP",
    Distance:550.232,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PIA",
    To:"ORD",
    Distance:208.955,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PIA",
    To:"ORD",
    Distance:208.955,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PIA",
    To:"ORD",
    Distance:208.955,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PIA",
    To:"PGD",
    Distance:1684.18,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIA",
    To:"PIE",
    Distance:1556.04,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"ABE",
    Distance:1564.02,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"AVL",
    Distance:836.969,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"BGR",
    Distance:2244.63,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"CHA",
    Distance:827.343,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"CID",
    Distance:1755.87,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"DSM",
    Distance:1813.43,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"ELM",
    Distance:1668.96,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"FAR",
    Distance:2445.98,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"FSD",
    Distance:2148.73,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"FWA",
    Distance:1471.02,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"GRR",
    Distance:1684.1,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"GSO",
    Distance:946.495,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"GSP",
    Distance:778.008,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"HTS",
    Distance:1162.78,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"IAG",
    Distance:1722.95,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"LCK",
    Distance:1323.81,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"LEX",
    Distance:1140.05,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"MDT",
    Distance:1469.9,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"MLI",
    Distance:1664.78,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"PBG",
    Distance:2033.41,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"PIA",
    Distance:1556.04,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"RFD",
    Distance:1690.88,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"ROA",
    Distance:1077.15,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"SBN",
    Distance:1569.28,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"SGF",
    Distance:1441.24,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"SWF",
    Distance:1700.86,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"SYR",
    Distance:1790.66,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"TOL",
    Distance:1524.17,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"TRI",
    Distance:952.754,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"TYS",
    Distance:887.124,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIE",
    To:"YNG",
    Distance:1495.73,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PIH",
    To:"SLC",
    Distance:241.382,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PIK",
    To:"ACE",
    Distance:3039.89,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"AGP",
    Distance:2094.32,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"ALC",
    Distance:1939.07,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"BCN",
    Distance:1653.31,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"CCF",
    Distance:1453.53,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"CFU",
    Distance:2525.97,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"CIA",
    Distance:1968,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"DUB",
    Distance:256.392,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"FAO",
    Distance:2072.28,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"FUE",
    Distance:3098.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"IBZ",
    Distance:1902.21,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"LDY",
    Distance:171.108,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"LPA",
    Distance:3186.29,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"MJV",
    Distance:1992.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"MLA",
    Distance:2620.72,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"PMI",
    Distance:1854.77,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"REU",
    Distance:1651.26,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"RIX",
    Distance:1759.74,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"TFS",
    Distance:3201.22,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"WMI",
    Distance:1675.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIK",
    To:"WRO",
    Distance:1501.28,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIN",
    To:"MAO",
    Distance:370.861,
    Airport:"Azul"
}),
new Routes(
{
    From:"PIR",
    To:"ATY",
    Distance:254.639,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PIR",
    To:"ATY",
    Distance:254.639,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"PIR",
    To:"DEN",
    Distance:619.18,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PIR",
    To:"DEN",
    Distance:619.18,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"PIR",
    To:"DEN",
    Distance:619.18,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PIR",
    To:"HON",
    Distance:163.497,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PIR",
    To:"HON",
    Distance:163.497,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"PIR",
    To:"HON",
    Distance:163.497,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PIS",
    To:"AJA",
    Distance:851.734,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"PIS",
    To:"LRH",
    Distance:123.838,
    Airport:"Air France"
}),
new Routes(
{
    From:"PIS",
    To:"LRH",
    Distance:123.838,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"PIS",
    To:"LYS",
    Distance:380.666,
    Airport:"Air France"
}),
new Routes(
{
    From:"PIS",
    To:"LYS",
    Distance:380.666,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"PIS",
    To:"SNN",
    Distance:949.372,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIS",
    To:"STN",
    Distance:589.051,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PIT",
    To:"ATL",
    Distance:847.973,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PIT",
    To:"ATL",
    Distance:847.973,
    Airport:"Air France"
}),
new Routes(
{
    From:"PIT",
    To:"ATL",
    Distance:847.973,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PIT",
    To:"ATL",
    Distance:847.973,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PIT",
    To:"ATL",
    Distance:847.973,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PIT",
    To:"ATL",
    Distance:847.973,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"ATL",
    Distance:847.973,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"BDL",
    Distance:651.434,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"BDL",
    Distance:651.434,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PIT",
    To:"BNA",
    Distance:742.627,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"BOS",
    Distance:796.564,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"BOS",
    Distance:796.564,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PIT",
    To:"BOS",
    Distance:796.564,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PIT",
    To:"BWI",
    Distance:337.686,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PIT",
    To:"BWI",
    Distance:337.686,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"CDG",
    Distance:6275.77,
    Airport:"Air France"
}),
new Routes(
{
    From:"PIT",
    To:"CDG",
    Distance:6275.77,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PIT",
    To:"CLT",
    Distance:590.125,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"CLT",
    Distance:590.125,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PIT",
    To:"CUN",
    Distance:2252.71,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"CVG",
    Distance:411.522,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PIT",
    To:"DCA",
    Distance:328.62,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"DCA",
    Distance:328.62,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PIT",
    To:"DEN",
    Distance:2070.97,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"DEN",
    Distance:2070.97,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"DFW",
    Distance:1715.71,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"DFW",
    Distance:1715.71,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"DFW",
    Distance:1715.71,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PIT",
    To:"DTW",
    Distance:323.173,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PIT",
    To:"EWR",
    Distance:512.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"FLL",
    Distance:1603.32,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"HOU",
    Distance:1819.91,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"IAD",
    Distance:293.242,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"IAH",
    Distance:1797.49,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"JFK",
    Distance:545.295,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"JFK",
    Distance:545.295,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PIT",
    To:"JFK",
    Distance:545.295,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PIT",
    To:"LAS",
    Distance:3066.59,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"LAX",
    Distance:3430.05,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"LAX",
    Distance:3430.05,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"LAX",
    Distance:3430.05,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PIT",
    To:"LAX",
    Distance:3430.05,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"LGA",
    Distance:537.524,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"LGA",
    Distance:537.524,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PIT",
    To:"LGA",
    Distance:537.524,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PIT",
    To:"MCO",
    Distance:1344.83,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PIT",
    To:"MCO",
    Distance:1344.83,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PIT",
    To:"MCO",
    Distance:1344.83,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"MDW",
    Distance:645.718,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PIT",
    To:"MDW",
    Distance:645.718,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"MEM",
    Distance:1048.08,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PIT",
    To:"MIA",
    Distance:1634.38,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"MIA",
    Distance:1634.38,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PIT",
    To:"MSP",
    Distance:1166.74,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PIT",
    To:"ORD",
    Distance:662.239,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"ORD",
    Distance:662.239,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PIT",
    To:"ORD",
    Distance:662.239,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"PHL",
    Distance:429.561,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"PHL",
    Distance:429.561,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PIT",
    To:"PHX",
    Distance:2912.96,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"PHX",
    Distance:2912.96,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"PHX",
    Distance:2912.96,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PIT",
    To:"PUJ",
    Distance:2688.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PIT",
    To:"PUJ",
    Distance:2688.66,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"RDU",
    Distance:528.336,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"RDU",
    Distance:528.336,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PIT",
    To:"RSW",
    Distance:1558.09,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"SFO",
    Distance:3618.27,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"STL",
    Distance:889.083,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"STL",
    Distance:889.083,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PIT",
    To:"TPA",
    Distance:1407.54,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PIT",
    To:"TPA",
    Distance:1407.54,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PIT",
    To:"YYZ",
    Distance:357.707,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"PIT",
    To:"YYZ",
    Distance:357.707,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PIU",
    To:"LIM",
    Distance:850,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"PIU",
    To:"LIM",
    Distance:850,
    Airport:"Peruvian Airlines"
}),
new Routes(
{
    From:"PIX",
    To:"PDL",
    Distance:256.365,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"PIX",
    To:"TER",
    Distance:119.515,
    Airport:"SATA Air Acores"
}),
new Routes(
{
    From:"PIX",
    To:"TER",
    Distance:119.515,
    Airport:"SATA International"
}),
new Routes(
{
    From:"PIX",
    To:"TER",
    Distance:119.515,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"PIZ",
    To:"BRW",
    Distance:288.549,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"PIZ",
    To:"PHO",
    Distance:215.46,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"PJA",
    To:"LLA",
    Distance:193.871,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"PJA",
    To:"TLL",
    Distance:875.26,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"PJG",
    To:"KHI",
    Distance:378.872,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PJM",
    To:"GLF",
    Distance:18.7581,
    Airport:"LACSA"
}),
new Routes(
{
    From:"PJM",
    To:"SJO",
    Distance:190.583,
    Airport:"CAL Cargo Air Lines"
}),
new Routes(
{
    From:"PJM",
    To:"SJO",
    Distance:190.583,
    Airport:"Euro Exec Express"
}),
new Routes(
{
    From:"PJM",
    To:"SJO",
    Distance:190.583,
    Airport:"LACSA"
}),
new Routes(
{
    From:"PKB",
    To:"CLE",
    Distance:232.41,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PKC",
    To:"DME",
    Distance:6774.74,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"PKC",
    To:"KHV",
    Distance:1704.09,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"PKC",
    To:"KHV",
    Distance:1704.09,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"PKC",
    To:"SVO",
    Distance:6742.28,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"PKC",
    To:"VVO",
    Distance:2210.8,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"PKC",
    To:"VVO",
    Distance:2210.8,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"PKE",
    To:"BHS",
    Distance:134.952,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"PKE",
    To:"SYD",
    Distance:286.981,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"PKN",
    To:"BDJ",
    Distance:352.68,
    Airport:"Illinois Airways"
}),
new Routes(
{
    From:"PKN",
    To:"CGK",
    Distance:673.767,
    Airport:"Illinois Airways"
}),
new Routes(
{
    From:"PKN",
    To:"KTG",
    Distance:214.121,
    Airport:"Illinois Airways"
}),
new Routes(
{
    From:"PKN",
    To:"PKN",
    Distance:0,
    Airport:"Illinois Airways"
}),
new Routes(
{
    From:"PKN",
    To:"SOC",
    Distance:544.482,
    Airport:"Illinois Airways"
}),
new Routes(
{
    From:"PKN",
    To:"SRG",
    Distance:495.731,
    Airport:"Illinois Airways"
}),
new Routes(
{
    From:"PKN",
    To:"SUB",
    Distance:534.224,
    Airport:"Illinois Airways"
}),
new Routes(
{
    From:"PKR",
    To:"KTM",
    Distance:146.423,
    Airport:"Yeti Airways"
}),
new Routes(
{
    From:"PKU",
    To:"BDO",
    Distance:1064.33,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"PKU",
    To:"BDO",
    Distance:1064.33,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PKU",
    To:"BTH",
    Distance:306.259,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"PKU",
    To:"BTH",
    Distance:306.259,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PKU",
    To:"CGK",
    Distance:933.255,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"PKU",
    To:"CGK",
    Distance:933.255,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"PKU",
    To:"CGK",
    Distance:933.255,
    Airport:"Interlink Airlines"
}),
new Routes(
{
    From:"PKU",
    To:"CGK",
    Distance:933.255,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PKU",
    To:"CGK",
    Distance:933.255,
    Airport:"Mandala Airlines"
}),
new Routes(
{
    From:"PKU",
    To:"CGK",
    Distance:933.255,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"PKU",
    To:"JOG",
    Distance:1354.32,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PKU",
    To:"JOG",
    Distance:1354.32,
    Airport:"Mandala Airlines"
}),
new Routes(
{
    From:"PKU",
    To:"KUL",
    Distance:255.764,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"PKU",
    To:"SIN",
    Distance:300.252,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"PKU",
    To:"SIN",
    Distance:300.252,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"PKU",
    To:"SIN",
    Distance:300.252,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"PKU",
    To:"SZB",
    Distance:297.096,
    Airport:"Firefly"
}),
new Routes(
{
    From:"PKU",
    To:"SZB",
    Distance:297.096,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PKY",
    To:"CGK",
    Distance:916.989,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"PKY",
    To:"CGK",
    Distance:916.989,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PKY",
    To:"SUB",
    Distance:587.3,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PKZ",
    To:"LPQ",
    Distance:654.313,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"PKZ",
    To:"REP",
    Distance:285.722,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"PKZ",
    To:"SGN",
    Distance:488.793,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"PKZ",
    To:"VTE",
    Distance:467.426,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"PKZ",
    To:"ZVK",
    Distance:192.456,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"PLJ",
    To:"DGA",
    Distance:50.2153,
    Airport:"Midwest Airlines (Egypt)"
}),
new Routes(
{
    From:"PLJ",
    To:"PND",
    Distance:67.8706,
    Airport:"Midwest Airlines (Egypt)"
}),
new Routes(
{
    From:"PLM",
    To:"BTH",
    Distance:451.568,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"PLM",
    To:"BTH",
    Distance:451.568,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PLM",
    To:"CGK",
    Distance:419.262,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"PLM",
    To:"CGK",
    Distance:419.262,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"PLM",
    To:"CGK",
    Distance:419.262,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PLM",
    To:"CGK",
    Distance:419.262,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"PLM",
    To:"DPS",
    Distance:1327.64,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"PLM",
    To:"JOG",
    Distance:835.518,
    Airport:"Mandala Airlines"
}),
new Routes(
{
    From:"PLM",
    To:"KUL",
    Distance:710.131,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"PLM",
    To:"PGK",
    Distance:179.603,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"PLM",
    To:"SIN",
    Distance:478.869,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"PLM",
    To:"SIN",
    Distance:478.869,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"PLM",
    To:"SIN",
    Distance:478.869,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"PLM",
    To:"TKG",
    Distance:266.01,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PLN",
    To:"DTW",
    Distance:390.924,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PLO",
    To:"ADL",
    Distance:245.01,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PLO",
    To:"ADL",
    Distance:245.01,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"PLQ",
    To:"CPH",
    Distance:528.581,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"PLQ",
    To:"OSL",
    Distance:750.604,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PLQ",
    To:"RIX",
    Distance:205.972,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"PLS",
    To:"ATL",
    Distance:1778.51,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PLS",
    To:"BOS",
    Distance:2292.59,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PLS",
    To:"BOS",
    Distance:2292.59,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PLS",
    To:"CAP",
    Distance:227.029,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"PLS",
    To:"CAP",
    Distance:227.029,
    Airport:"Salmon Air"
}),
new Routes(
{
    From:"PLS",
    To:"CLT",
    Distance:1716.41,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PLS",
    To:"CLT",
    Distance:1716.41,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PLS",
    To:"DFW",
    Distance:2731.91,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PLS",
    To:"DFW",
    Distance:2731.91,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PLS",
    To:"EWR",
    Distance:2111.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PLS",
    To:"GDT",
    Distance:121.785,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"PLS",
    To:"GDT",
    Distance:121.785,
    Airport:"PB Air"
}),
new Routes(
{
    From:"PLS",
    To:"JFK",
    Distance:2102.65,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PLS",
    To:"JFK",
    Distance:2102.65,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PLS",
    To:"KIN",
    Distance:636.886,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"PLS",
    To:"MIA",
    Distance:930.525,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PLS",
    To:"MIA",
    Distance:930.525,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PLS",
    To:"NAS",
    Distance:642.878,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"PLS",
    To:"NAS",
    Distance:642.878,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"PLS",
    To:"NAS",
    Distance:642.878,
    Airport:"British Airways"
}),
new Routes(
{
    From:"PLS",
    To:"PAP",
    Distance:355.12,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"PLS",
    To:"PHL",
    Distance:2032.05,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PLS",
    To:"PHL",
    Distance:2032.05,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PLS",
    To:"POP",
    Distance:285.17,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"PLS",
    To:"SDQ",
    Distance:460.18,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"PLS",
    To:"SJU",
    Distance:751.702,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"PLS",
    To:"STI",
    Distance:314.958,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"PLS",
    To:"XSC",
    Distance:81.4255,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"PLS",
    To:"YUL",
    Distance:2638.4,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"PLS",
    To:"YYZ",
    Distance:2528.51,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"PLS",
    To:"YYZ",
    Distance:2528.51,
    Airport:"WestJet"
}),
new Routes(
{
    From:"PLU",
    To:"AAX",
    Distance:316.677,
    Airport:"Azul"
}),
new Routes(
{
    From:"PLU",
    To:"CFB",
    Distance:392.814,
    Airport:"Azul"
}),
new Routes(
{
    From:"PLU",
    To:"GRU",
    Distance:475.699,
    Airport:"Azul"
}),
new Routes(
{
    From:"PLU",
    To:"GVR",
    Distance:232.238,
    Airport:"Azul"
}),
new Routes(
{
    From:"PLU",
    To:"IPN",
    Distance:158.932,
    Airport:"Azul"
}),
new Routes(
{
    From:"PLU",
    To:"MOC",
    Distance:349.902,
    Airport:"Azul"
}),
new Routes(
{
    From:"PLU",
    To:"POJ",
    Distance:297.12,
    Airport:"Azul"
}),
new Routes(
{
    From:"PLU",
    To:"RAO",
    Distance:423.016,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"PLU",
    To:"RAO",
    Distance:423.016,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"PLU",
    To:"SJK",
    Distance:424.38,
    Airport:"Azul"
}),
new Routes(
{
    From:"PLU",
    To:"UDI",
    Distance:461.183,
    Airport:"Azul"
}),
new Routes(
{
    From:"PLU",
    To:"VCP",
    Distance:481.391,
    Airport:"Azul"
}),
new Routes(
{
    From:"PLU",
    To:"VDC",
    Distance:644.177,
    Airport:"Azul"
}),
new Routes(
{
    From:"PLW",
    To:"BPN",
    Distance:337.458,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PLW",
    To:"BPN",
    Distance:337.458,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"PLW",
    To:"CGK",
    Distance:1580.33,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"PLW",
    To:"CGK",
    Distance:1580.33,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PLW",
    To:"SUB",
    Distance:1067.48,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PLW",
    To:"UPG",
    Distance:462.379,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"PLW",
    To:"UPG",
    Distance:462.379,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PLW",
    To:"UPG",
    Distance:462.379,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"PLX",
    To:"ALA",
    Distance:815.093,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"PLX",
    To:"TSE",
    Distance:621.767,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"PLX",
    To:"UKK",
    Distance:164.621,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"PLZ",
    To:"CPT",
    Distance:646.801,
    Airport:"British Airways"
}),
new Routes(
{
    From:"PLZ",
    To:"CPT",
    Distance:646.801,
    Airport:"Mango"
}),
new Routes(
{
    From:"PLZ",
    To:"CPT",
    Distance:646.801,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"PLZ",
    To:"DUR",
    Distance:672.364,
    Airport:"British Airways"
}),
new Routes(
{
    From:"PLZ",
    To:"DUR",
    Distance:672.364,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"PLZ",
    To:"ELS",
    Distance:230.372,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"PLZ",
    To:"JNB",
    Distance:908.236,
    Airport:"British Airways"
}),
new Routes(
{
    From:"PLZ",
    To:"JNB",
    Distance:908.236,
    Airport:"Mango"
}),
new Routes(
{
    From:"PLZ",
    To:"JNB",
    Distance:908.236,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"PMC",
    To:"BBA",
    Distance:510.467,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"PMC",
    To:"BBA",
    Distance:510.467,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"PMC",
    To:"CCP",
    Distance:518.869,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"PMC",
    To:"PUQ",
    Distance:1296.74,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PMC",
    To:"PUQ",
    Distance:1296.74,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"PMC",
    To:"PUQ",
    Distance:1296.74,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"PMC",
    To:"SCL",
    Distance:917.49,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMC",
    To:"SCL",
    Distance:917.49,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"PMC",
    To:"SCL",
    Distance:917.49,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"PMF",
    To:"AHO",
    Distance:494.071,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMF",
    To:"CAG",
    Distance:628.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMF",
    To:"STN",
    Distance:1079.32,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMF",
    To:"TPS",
    Distance:790.07,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"AAL",
    Distance:2017.46,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PMI",
    To:"AAR",
    Distance:1949.69,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"AGP",
    Distance:708.353,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"AGP",
    Distance:708.353,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"AGP",
    Distance:708.353,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"AGP",
    Distance:708.353,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"ALC",
    Distance:317.467,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"ALC",
    Distance:317.467,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"ALC",
    Distance:317.467,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"ALG",
    Distance:321.15,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"PMI",
    To:"AMS",
    Distance:1426.85,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"AMS",
    Distance:1426.85,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"AMS",
    Distance:1426.85,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"PMI",
    To:"ARN",
    Distance:2474.9,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PMI",
    To:"ARN",
    Distance:2474.9,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"PMI",
    To:"BCN",
    Distance:201.504,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"PMI",
    To:"BCN",
    Distance:201.504,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PMI",
    To:"BCN",
    Distance:201.504,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"BCN",
    Distance:201.504,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"BCN",
    Distance:201.504,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"BCN",
    Distance:201.504,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"BFS",
    Distance:1807.32,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PMI",
    To:"BFS",
    Distance:1807.32,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMI",
    To:"BGO",
    Distance:2312.64,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PMI",
    To:"BGY",
    Distance:887.568,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"BHD",
    Distance:1794.03,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"PMI",
    To:"BHX",
    Distance:1474.78,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"PMI",
    To:"BHX",
    Distance:1474.78,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"BHX",
    Distance:1474.78,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"BHX",
    Distance:1474.78,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"PMI",
    To:"BHX",
    Distance:1474.78,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PMI",
    To:"BIO",
    Distance:627.921,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"BIO",
    Distance:627.921,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"PMI",
    To:"BIO",
    Distance:627.921,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"BIO",
    Distance:627.921,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"BLK",
    Distance:1639.52,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PMI",
    To:"BLL",
    Distance:1861.15,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"BLQ",
    Distance:897.278,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"BOD",
    Distance:651.364,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"PMI",
    To:"BOD",
    Distance:651.364,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"BOD",
    Distance:651.364,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"BOH",
    Distance:1298.07,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"BOH",
    Distance:1298.07,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PMI",
    To:"BRE",
    Distance:1569.58,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"BRE",
    Distance:1569.58,
    Airport:"Germania"
}),
new Routes(
{
    From:"PMI",
    To:"BRE",
    Distance:1569.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"BRN",
    Distance:904.631,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"PMI",
    To:"BRS",
    Distance:1381.24,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"BRS",
    Distance:1381.24,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"PMI",
    To:"BRS",
    Distance:1381.24,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PMI",
    To:"BRS",
    Distance:1381.24,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMI",
    To:"BRU",
    Distance:1269.19,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"BRU",
    Distance:1269.19,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"PMI",
    To:"BRU",
    Distance:1269.19,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"BRU",
    Distance:1269.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"BSL",
    Distance:973.241,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"BSL",
    Distance:973.241,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"PMI",
    To:"BSL",
    Distance:973.241,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMI",
    To:"BTS",
    Distance:1501.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"BVA",
    Distance:1101.99,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"CGN",
    Distance:1303.94,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"CGN",
    Distance:1303.94,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PMI",
    To:"CGN",
    Distance:1303.94,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PMI",
    To:"CGN",
    Distance:1303.94,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"CGN",
    Distance:1303.94,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"PMI",
    To:"CIA",
    Distance:868.181,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"CPH",
    Distance:1930.72,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"CPH",
    Distance:1930.72,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PMI",
    To:"CPH",
    Distance:1930.72,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"PMI",
    To:"CRL",
    Distance:1220.12,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"CWL",
    Distance:1398.17,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PMI",
    To:"DME",
    Distance:3126.15,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"DME",
    Distance:3126.15,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"DRS",
    Distance:1546.17,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"DTM",
    Distance:1382.94,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"DTM",
    Distance:1382.94,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PMI",
    To:"DTM",
    Distance:1382.94,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"DUB",
    Distance:1685.76,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"PMI",
    To:"DUB",
    Distance:1685.76,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"DUS",
    Distance:1341.96,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"DUS",
    Distance:1341.96,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PMI",
    To:"DUS",
    Distance:1341.96,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PMI",
    To:"DUS",
    Distance:1341.96,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"PMI",
    To:"DUS",
    Distance:1341.96,
    Airport:"Yangon Airways"
}),
new Routes(
{
    From:"PMI",
    To:"EDI",
    Distance:1877.58,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PMI",
    To:"EDI",
    Distance:1877.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"EDI",
    Distance:1877.58,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PMI",
    To:"EDI",
    Distance:1877.58,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMI",
    To:"EIN",
    Distance:1338.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"EIN",
    Distance:1338.58,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"PMI",
    To:"EMA",
    Distance:1508.41,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"PMI",
    To:"EMA",
    Distance:1508.41,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PMI",
    To:"EMA",
    Distance:1508.41,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"EMA",
    Distance:1508.41,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"PMI",
    To:"EMA",
    Distance:1508.41,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PMI",
    To:"ERF",
    Distance:1422.39,
    Airport:"Germania"
}),
new Routes(
{
    From:"PMI",
    To:"EXT",
    Distance:1332.14,
    Airport:"Flybe"
}),
new Routes(
{
    From:"PMI",
    To:"EXT",
    Distance:1332.14,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"PMI",
    To:"EXT",
    Distance:1332.14,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PMI",
    To:"FAO",
    Distance:974.432,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"FDH",
    Distance:1054.05,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"FDH",
    Distance:1054.05,
    Airport:"Germania"
}),
new Routes(
{
    From:"PMI",
    To:"FKB",
    Distance:1110.44,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"FKB",
    Distance:1110.44,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"FMM",
    Distance:1113.92,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"FMM",
    Distance:1113.92,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"PMI",
    To:"FMO",
    Distance:1449.81,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"FRA",
    Distance:1250.72,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"FRA",
    Distance:1250.72,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PMI",
    To:"FRA",
    Distance:1250.72,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"PMI",
    To:"FRA",
    Distance:1250.72,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"PMI",
    To:"GLA",
    Distance:1889.52,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PMI",
    To:"GLA",
    Distance:1889.52,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"PMI",
    To:"GLA",
    Distance:1889.52,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PMI",
    To:"GLA",
    Distance:1889.52,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMI",
    To:"GOT",
    Distance:2127.74,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"PMI",
    To:"GRO",
    Distance:261.029,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"GRQ",
    Distance:1536.61,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"GRQ",
    Distance:1536.61,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"PMI",
    To:"GRX",
    Distance:624.891,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"PMI",
    To:"GRX",
    Distance:624.891,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"GRX",
    Distance:624.891,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"GRZ",
    Distance:1317.44,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"GRZ",
    Distance:1317.44,
    Airport:"Niki"
}),
new Routes(
{
    From:"PMI",
    To:"GSE",
    Distance:2129.95,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"GVA",
    Distance:792.468,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"PMI",
    To:"GVA",
    Distance:792.468,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMI",
    To:"HAJ",
    Distance:1530.78,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"HAJ",
    Distance:1530.78,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PMI",
    To:"HAJ",
    Distance:1530.78,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PMI",
    To:"HAJ",
    Distance:1530.78,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"PMI",
    To:"HAM",
    Distance:1658.57,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"HAM",
    Distance:1658.57,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PMI",
    To:"HAM",
    Distance:1658.57,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PMI",
    To:"HAM",
    Distance:1658.57,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMI",
    To:"HEL",
    Distance:2774.59,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PMI",
    To:"HHN",
    Distance:1209.52,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"IBZ",
    Distance:139.105,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"IBZ",
    Distance:139.105,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"ILD",
    Distance:304.363,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"INN",
    Distance:1102.58,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"INN",
    Distance:1102.58,
    Airport:"Niki"
}),
new Routes(
{
    From:"PMI",
    To:"KSF",
    Distance:1415.03,
    Airport:"Germania"
}),
new Routes(
{
    From:"PMI",
    To:"KUN",
    Distance:2333.84,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"LBA",
    Distance:1625.45,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"PMI",
    To:"LBA",
    Distance:1625.45,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PMI",
    To:"LBA",
    Distance:1625.45,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"LBA",
    Distance:1625.45,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PMI",
    To:"LBC",
    Distance:1695.37,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"LCY",
    Distance:1344.93,
    Airport:"British Airways"
}),
new Routes(
{
    From:"PMI",
    To:"LCY",
    Distance:1344.93,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"LEI",
    Distance:537.658,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"LEJ",
    Distance:1511.91,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"LEJ",
    Distance:1511.91,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PMI",
    To:"LGG",
    Distance:1250.53,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"PMI",
    To:"LGW",
    Distance:1308.97,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"PMI",
    To:"LGW",
    Distance:1308.97,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PMI",
    To:"LGW",
    Distance:1308.97,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"LGW",
    Distance:1308.97,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"PMI",
    To:"LGW",
    Distance:1308.97,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PMI",
    To:"LGW",
    Distance:1308.97,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMI",
    To:"LHR",
    Distance:1348.62,
    Airport:"British Airways"
}),
new Routes(
{
    From:"PMI",
    To:"LHR",
    Distance:1348.62,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"LNZ",
    Distance:1329.38,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"LNZ",
    Distance:1329.38,
    Airport:"Niki"
}),
new Routes(
{
    From:"PMI",
    To:"LPL",
    Distance:1589.52,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"LPL",
    Distance:1589.52,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMI",
    To:"LTN",
    Distance:1390.64,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"PMI",
    To:"LTN",
    Distance:1390.64,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PMI",
    To:"LTN",
    Distance:1390.64,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMI",
    To:"LUX",
    Distance:1153.2,
    Airport:"Luxair"
}),
new Routes(
{
    From:"PMI",
    To:"LYS",
    Distance:712.987,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"LYS",
    Distance:712.987,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"MAD",
    Distance:545.953,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"PMI",
    To:"MAD",
    Distance:545.953,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PMI",
    To:"MAD",
    Distance:545.953,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"MAD",
    Distance:545.953,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"MAH",
    Distance:132.079,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"MAH",
    Distance:132.079,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"MAN",
    Distance:1580.65,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"PMI",
    To:"MAN",
    Distance:1580.65,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PMI",
    To:"MAN",
    Distance:1580.65,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PMI",
    To:"MAN",
    Distance:1580.65,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"MAN",
    Distance:1580.65,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"MAN",
    Distance:1580.65,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"PMI",
    To:"MAN",
    Distance:1580.65,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PMI",
    To:"MAN",
    Distance:1580.65,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMI",
    To:"MRS",
    Distance:478.676,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"MRS",
    Distance:478.676,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"MRS",
    Distance:478.676,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"MST",
    Distance:1284.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"MUC",
    Distance:1216.09,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"MUC",
    Distance:1216.09,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PMI",
    To:"MUC",
    Distance:1216.09,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"PMI",
    To:"MUC",
    Distance:1216.09,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"PMI",
    To:"MXP",
    Distance:834.853,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMI",
    To:"NCL",
    Distance:1752.81,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PMI",
    To:"NCL",
    Distance:1752.81,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"PMI",
    To:"NCL",
    Distance:1752.81,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PMI",
    To:"NCL",
    Distance:1752.81,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMI",
    To:"NDR",
    Distance:718.749,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"PMI",
    To:"NRN",
    Distance:1365.44,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"NTE",
    Distance:914.572,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"PMI",
    To:"NUE",
    Distance:1286.56,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"NUE",
    Distance:1286.56,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"PMI",
    To:"NYO",
    Distance:2363.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"OPO",
    Distance:983.539,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"ORK",
    Distance:1616.37,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"PMI",
    To:"ORK",
    Distance:1616.37,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"ORY",
    Distance:1020.26,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"PMI",
    To:"ORY",
    Distance:1020.26,
    Airport:"Air France"
}),
new Routes(
{
    From:"PMI",
    To:"ORY",
    Distance:1020.26,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"ORY",
    Distance:1020.26,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"OSL",
    Distance:2367.82,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PMI",
    To:"OSL",
    Distance:2367.82,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"PMI",
    To:"OST",
    Distance:1294.94,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"PMI",
    To:"OVD",
    Distance:853.919,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"PMI",
    To:"OVD",
    Distance:853.919,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"PAD",
    Distance:1416.03,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"PAD",
    Distance:1416.03,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PMI",
    To:"PIK",
    Distance:1854.77,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"PRG",
    Distance:1480.52,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"PRG",
    Distance:1480.52,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PMI",
    To:"REU",
    Distance:221.117,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"RLG",
    Distance:1751.61,
    Airport:"Germania"
}),
new Routes(
{
    From:"PMI",
    To:"RTM",
    Distance:1385.45,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"PMI",
    To:"RYG",
    Distance:2276.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"SCN",
    Distance:1128.77,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"SCQ",
    Distance:1002.3,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"SCQ",
    Distance:1002.3,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"SDR",
    Distance:694.571,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"SEN",
    Distance:1345.51,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMI",
    To:"SNN",
    Distance:1710.97,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"SOF",
    Distance:1762.21,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"PMI",
    To:"SOU",
    Distance:1306.43,
    Airport:"Flybe"
}),
new Routes(
{
    From:"PMI",
    To:"STN",
    Distance:1384.56,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"STN",
    Distance:1384.56,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PMI",
    To:"STN",
    Distance:1384.56,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMI",
    To:"STR",
    Distance:1139.5,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"STR",
    Distance:1139.5,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PMI",
    To:"STR",
    Distance:1139.5,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PMI",
    To:"STR",
    Distance:1139.5,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"PMI",
    To:"SVQ",
    Distance:786.653,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"SVQ",
    Distance:786.653,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"SVQ",
    Distance:786.653,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"SVQ",
    Distance:786.653,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"SXF",
    Distance:1648.29,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PMI",
    To:"SXF",
    Distance:1648.29,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMI",
    To:"SZG",
    Distance:1231.78,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"SZG",
    Distance:1231.78,
    Airport:"Niki"
}),
new Routes(
{
    From:"PMI",
    To:"TLS",
    Distance:467.132,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"TLS",
    Distance:467.132,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"TRF",
    Distance:2246.8,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PMI",
    To:"TXL",
    Distance:1656.02,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"TXL",
    Distance:1656.02,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PMI",
    To:"VIE",
    Distance:1458.26,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"VIE",
    Distance:1458.26,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"VIE",
    Distance:1458.26,
    Airport:"Niki"
}),
new Routes(
{
    From:"PMI",
    To:"VLC",
    Distance:275.362,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"VLC",
    Distance:275.362,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"PMI",
    To:"VLC",
    Distance:275.362,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PMI",
    To:"VLC",
    Distance:275.362,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMI",
    To:"VLC",
    Distance:275.362,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"WMI",
    Distance:1982.69,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMI",
    To:"XRY",
    Distance:829.034,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"ZAZ",
    Distance:395.443,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"PMI",
    To:"ZQW",
    Distance:1135.53,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"PMI",
    To:"ZRH",
    Distance:996.415,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PMI",
    To:"ZRH",
    Distance:996.415,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"PMO",
    To:"AMS",
    Distance:1698.66,
    Airport:"Air One"
}),
new Routes(
{
    From:"PMO",
    To:"AMS",
    Distance:1698.66,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PMO",
    To:"ARN",
    Distance:2412.42,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PMO",
    To:"BCN",
    Distance:1002.69,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PMO",
    To:"BCN",
    Distance:1002.69,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMO",
    To:"BGY",
    Distance:879.333,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMO",
    To:"BLQ",
    Distance:722.913,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMO",
    To:"BOD",
    Distance:1364.32,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"PMO",
    To:"BRI",
    Distance:455.132,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"PMO",
    To:"BRI",
    Distance:455.132,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"PMO",
    To:"BRU",
    Distance:1568.32,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"PMO",
    To:"CDG",
    Distance:1470.94,
    Airport:"Air One"
}),
new Routes(
{
    From:"PMO",
    To:"CDG",
    Distance:1470.94,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PMO",
    To:"CDG",
    Distance:1470.94,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"PMO",
    To:"CDG",
    Distance:1470.94,
    Airport:"XL Airways France"
}),
new Routes(
{
    From:"PMO",
    To:"CGN",
    Distance:1486.55,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PMO",
    To:"CTA",
    Distance:190.582,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"PMO",
    To:"FCO",
    Distance:409.767,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PMO",
    To:"FCO",
    Distance:409.767,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"PMO",
    To:"FCO",
    Distance:409.767,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMO",
    To:"FCO",
    Distance:409.767,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMO",
    To:"FLR",
    Distance:646.106,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"PMO",
    To:"FLR",
    Distance:646.106,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PMO",
    To:"FLR",
    Distance:646.106,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PMO",
    To:"FRA",
    Distance:1366.17,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"PMO",
    To:"GOA",
    Distance:779.018,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"PMO",
    To:"LGW",
    Distance:1778.47,
    Airport:"Air One"
}),
new Routes(
{
    From:"PMO",
    To:"LGW",
    Distance:1778.47,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PMO",
    To:"LGW",
    Distance:1778.47,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMO",
    To:"LIN",
    Distance:867.64,
    Airport:"Air One"
}),
new Routes(
{
    From:"PMO",
    To:"LIN",
    Distance:867.64,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PMO",
    To:"LMP",
    Distance:300.743,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"PMO",
    To:"MAD",
    Distance:1453.34,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMO",
    To:"MRS",
    Distance:883.364,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMO",
    To:"MUC",
    Distance:1136.6,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"PMO",
    To:"MXP",
    Distance:903.782,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMO",
    To:"NAP",
    Distance:318.419,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"PMO",
    To:"NAP",
    Distance:318.419,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PMO",
    To:"NRN",
    Distance:1588.36,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMO",
    To:"NTE",
    Distance:1557.99,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"PMO",
    To:"ORY",
    Distance:1455.19,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PMO",
    To:"ORY",
    Distance:1455.19,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PMO",
    To:"PNL",
    Distance:180.691,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"PMO",
    To:"PSA",
    Distance:652.958,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMO",
    To:"STN",
    Distance:1822.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMO",
    To:"SVO",
    Distance:2675.67,
    Airport:"Air One"
}),
new Routes(
{
    From:"PMO",
    To:"SVO",
    Distance:2675.67,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PMO",
    To:"SVQ",
    Distance:1667.25,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMO",
    To:"SXB",
    Distance:1233.17,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"PMO",
    To:"TRN",
    Distance:901.874,
    Airport:"Air One"
}),
new Routes(
{
    From:"PMO",
    To:"TRN",
    Distance:901.874,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"PMO",
    To:"TRN",
    Distance:901.874,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PMO",
    To:"TSF",
    Distance:834.187,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PMO",
    To:"TUN",
    Distance:292.393,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"PMO",
    To:"TXL",
    Distance:1599.47,
    Airport:"Air One"
}),
new Routes(
{
    From:"PMO",
    To:"TXL",
    Distance:1599.47,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PMO",
    To:"VCE",
    Distance:817.269,
    Airport:"Air One"
}),
new Routes(
{
    From:"PMO",
    To:"VCE",
    Distance:817.269,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"PMO",
    To:"VCE",
    Distance:817.269,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PMO",
    To:"VIE",
    Distance:1139.81,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"PMO",
    To:"VRN",
    Distance:823.214,
    Airport:"Air One"
}),
new Routes(
{
    From:"PMO",
    To:"VRN",
    Distance:823.214,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"PMO",
    To:"VRN",
    Distance:823.214,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PMR",
    To:"AKL",
    Distance:375.232,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PMR",
    To:"CHC",
    Distance:435.04,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PMR",
    To:"HLZ",
    Distance:273.966,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PMR",
    To:"NSN",
    Distance:229.07,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PMR",
    To:"WLG",
    Distance:131.125,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PMV",
    To:"BRM",
    Distance:597.336,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PMV",
    To:"CCS",
    Distance:332.025,
    Airport:"Aero Lanka"
}),
new Routes(
{
    From:"PMV",
    To:"CCS",
    Distance:332.025,
    Airport:"Aserca Airlines"
}),
new Routes(
{
    From:"PMV",
    To:"CCS",
    Distance:332.025,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PMV",
    To:"CCS",
    Distance:332.025,
    Airport:"Virgin Pacific"
}),
new Routes(
{
    From:"PMV",
    To:"GND",
    Distance:266.902,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PMV",
    To:"HAV",
    Distance:2372.67,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"PMV",
    To:"MAO",
    Distance:1610.78,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PMV",
    To:"MAR",
    Distance:848.693,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PMV",
    To:"MUN",
    Distance:157.101,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PMV",
    To:"PBL",
    Distance:451.137,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PMV",
    To:"POS",
    Distance:289.504,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PMV",
    To:"PZO",
    Distance:320.427,
    Airport:"Aserca Airlines"
}),
new Routes(
{
    From:"PMV",
    To:"PZO",
    Distance:320.427,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PMV",
    To:"STD",
    Distance:960.361,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PMV",
    To:"VIG",
    Distance:881.808,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PMV",
    To:"VLN",
    Distance:441.235,
    Airport:"Aero Lanka"
}),
new Routes(
{
    From:"PMV",
    To:"VLN",
    Distance:441.235,
    Airport:"Virgin Pacific"
}),
new Routes(
{
    From:"PMW",
    To:"AUX",
    Distance:335.293,
    Airport:"Azul"
}),
new Routes(
{
    From:"PMW",
    To:"AUX",
    Distance:335.293,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"PMW",
    To:"BSB",
    Distance:627.727,
    Airport:"Azul"
}),
new Routes(
{
    From:"PMW",
    To:"BSB",
    Distance:627.727,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"PMW",
    To:"BSB",
    Distance:627.727,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"PMW",
    To:"GYN",
    Distance:716.742,
    Airport:"Azul"
}),
new Routes(
{
    From:"PMW",
    To:"GYN",
    Distance:716.742,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"PMY",
    To:"AEP",
    Distance:1080.13,
    Airport:"Omni Air International"
}),
new Routes(
{
    From:"PMZ",
    To:"SJO",
    Distance:141.553,
    Airport:"CAL Cargo Air Lines"
}),
new Routes(
{
    From:"PMZ",
    To:"SJO",
    Distance:141.553,
    Airport:"Euro Exec Express"
}),
new Routes(
{
    From:"PMZ",
    To:"SJO",
    Distance:141.553,
    Airport:"LACSA"
}),
new Routes(
{
    From:"PNA",
    To:"MAD",
    Distance:299.23,
    Airport:"Finnair"
}),
new Routes(
{
    From:"PNA",
    To:"MAD",
    Distance:299.23,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PNH",
    To:"BKK",
    Distance:503.919,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"PNH",
    To:"BKK",
    Distance:503.919,
    Airport:"Cambodia Angkor Air (K6)"
}),
new Routes(
{
    From:"PNH",
    To:"BKK",
    Distance:503.919,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"PNH",
    To:"BKK",
    Distance:503.919,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"PNH",
    To:"CAN",
    Distance:1592.27,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PNH",
    To:"DMK",
    Distance:529.533,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"PNH",
    To:"HAN",
    Distance:1080.65,
    Airport:"Cambodia Angkor Air (K6)"
}),
new Routes(
{
    From:"PNH",
    To:"HAN",
    Distance:1080.65,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"PNH",
    To:"HKG",
    Distance:1536.06,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"PNH",
    To:"ICN",
    Distance:3597.73,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PNH",
    To:"ICN",
    Distance:3597.73,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PNH",
    To:"KUL",
    Distance:1037.8,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"PNH",
    To:"KUL",
    Distance:1037.8,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PNH",
    To:"NNG",
    Distance:1279.67,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PNH",
    To:"PVG",
    Distance:2790.5,
    Airport:"Cambodia Angkor Air (K6)"
}),
new Routes(
{
    From:"PNH",
    To:"REP",
    Distance:235.584,
    Airport:"Cambodia Angkor Air (K6)"
}),
new Routes(
{
    From:"PNH",
    To:"RGN",
    Distance:1111.75,
    Airport:"Maxair"
}),
new Routes(
{
    From:"PNH",
    To:"SGN",
    Distance:213.15,
    Airport:"Cambodia Angkor Air (K6)"
}),
new Routes(
{
    From:"PNH",
    To:"SGN",
    Distance:213.15,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"PNH",
    To:"SGN",
    Distance:213.15,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"PNH",
    To:"SIN",
    Distance:1137.65,
    Airport:"Jetstar Asia Airways"
}),
new Routes(
{
    From:"PNH",
    To:"SIN",
    Distance:1137.65,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"PNH",
    To:"SIN",
    Distance:1137.65,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"PNH",
    To:"SIN",
    Distance:1137.65,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"PNH",
    To:"SIN",
    Distance:1137.65,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PNH",
    To:"TPE",
    Distance:2288.3,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"PNH",
    To:"TPE",
    Distance:2288.3,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"PNH",
    To:"VTE",
    Distance:757.061,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"PNH",
    To:"VTE",
    Distance:757.061,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"PNI",
    To:"KSA",
    Distance:555.365,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PNI",
    To:"KWA",
    Distance:1066.47,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PNI",
    To:"TKK",
    Distance:704.237,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PNK",
    To:"BTH",
    Distance:604.423,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PNK",
    To:"CGK",
    Distance:731.024,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"PNK",
    To:"CGK",
    Distance:731.024,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PNK",
    To:"CGK",
    Distance:731.024,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"PNK",
    To:"KCH",
    Distance:209.911,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PNK",
    To:"KTG",
    Distance:195.41,
    Airport:"Illinois Airways"
}),
new Routes(
{
    From:"PNL",
    To:"PMO",
    Distance:180.691,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"PNL",
    To:"TPS",
    Distance:130.102,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"PNL",
    To:"VCE",
    Distance:966.675,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"PNP",
    To:"GUR",
    Distance:278.17,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"PNP",
    To:"LAE",
    Distance:303.583,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"PNP",
    To:"POM",
    Distance:139.065,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"PNP",
    To:"POM",
    Distance:139.065,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"PNP",
    To:"TFI",
    Distance:115.08,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"PNQ",
    To:"AMD",
    Distance:517.357,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"PNQ",
    To:"AMD",
    Distance:517.357,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"PNQ",
    To:"BLR",
    Distance:743.606,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"PNQ",
    To:"BLR",
    Distance:743.606,
    Airport:"Go Air"
}),
new Routes(
{
    From:"PNQ",
    To:"BLR",
    Distance:743.606,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"PNQ",
    To:"BLR",
    Distance:743.606,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"PNQ",
    To:"BLR",
    Distance:743.606,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"PNQ",
    To:"BOM",
    Distance:124.197,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"PNQ",
    To:"BOM",
    Distance:124.197,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"PNQ",
    To:"CCU",
    Distance:1577.31,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"PNQ",
    To:"COK",
    Distance:974.003,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"PNQ",
    To:"DEL",
    Distance:1156.46,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"PNQ",
    To:"DEL",
    Distance:1156.46,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"PNQ",
    To:"DEL",
    Distance:1156.46,
    Airport:"Go Air"
}),
new Routes(
{
    From:"PNQ",
    To:"DEL",
    Distance:1156.46,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"PNQ",
    To:"DEL",
    Distance:1156.46,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"PNQ",
    To:"DEL",
    Distance:1156.46,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"PNQ",
    To:"GOI",
    Distance:356.09,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"PNQ",
    To:"GOI",
    Distance:356.09,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"PNQ",
    To:"HYD",
    Distance:496.997,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"PNQ",
    To:"HYD",
    Distance:496.997,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"PNQ",
    To:"HYD",
    Distance:496.997,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"PNQ",
    To:"HYD",
    Distance:496.997,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"PNQ",
    To:"HYD",
    Distance:496.997,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"PNQ",
    To:"IDR",
    Distance:500.183,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"PNQ",
    To:"IDR",
    Distance:500.183,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"PNQ",
    To:"MAA",
    Distance:913.425,
    Airport:"Go Air"
}),
new Routes(
{
    From:"PNQ",
    To:"MAA",
    Distance:913.425,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"PNQ",
    To:"MAA",
    Distance:913.425,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"PNQ",
    To:"NAG",
    Distance:604.527,
    Airport:"Go Air"
}),
new Routes(
{
    From:"PNQ",
    To:"NAG",
    Distance:604.527,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"PNQ",
    To:"SHJ",
    Distance:2038.16,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"PNQ",
    To:"SHJ",
    Distance:2038.16,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"PNR",
    To:"ADD",
    Distance:3354.46,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"PNR",
    To:"BZV",
    Distance:378.396,
    Airport:"Estafeta Carga Aerea"
}),
new Routes(
{
    From:"PNR",
    To:"BZV",
    Distance:378.396,
    Airport:"Pacific East Asia Cargo Airlines"
}),
new Routes(
{
    From:"PNR",
    To:"BZV",
    Distance:378.396,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"PNR",
    To:"BZV",
    Distance:378.396,
    Airport:"Varig Log"
}),
new Routes(
{
    From:"PNR",
    To:"CDG",
    Distance:6053.56,
    Airport:"Air France"
}),
new Routes(
{
    From:"PNR",
    To:"CDG",
    Distance:6053.56,
    Airport:"Varig Log"
}),
new Routes(
{
    From:"PNR",
    To:"CMN",
    Distance:4715.05,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"PNR",
    To:"COO",
    Distance:1629.8,
    Airport:"Mauritania Airlines International"
}),
new Routes(
{
    From:"PNR",
    To:"COO",
    Distance:1629.8,
    Airport:"Pacific East Asia Cargo Airlines"
}),
new Routes(
{
    From:"PNR",
    To:"COO",
    Distance:1629.8,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"PNR",
    To:"COO",
    Distance:1629.8,
    Airport:"Varig Log"
}),
new Routes(
{
    From:"PNR",
    To:"DLA",
    Distance:1010.08,
    Airport:"Pacific East Asia Cargo Airlines"
}),
new Routes(
{
    From:"PNR",
    To:"JNB",
    Distance:2941.05,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"PNR",
    To:"LBV",
    Distance:647.712,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"PNR",
    To:"LBV",
    Distance:647.712,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"PNR",
    To:"LBV",
    Distance:647.712,
    Airport:"Pacific East Asia Cargo Airlines"
}),
new Routes(
{
    From:"PNR",
    To:"POG",
    Distance:573.802,
    Airport:"Estafeta Carga Aerea"
}),
new Routes(
{
    From:"PNS",
    To:"ATL",
    Distance:437.34,
    Airport:"Air France"
}),
new Routes(
{
    From:"PNS",
    To:"ATL",
    Distance:437.34,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PNS",
    To:"ATL",
    Distance:437.34,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PNS",
    To:"ATL",
    Distance:437.34,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PNS",
    To:"ATL",
    Distance:437.34,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"PNS",
    To:"BNA",
    Distance:630.139,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PNS",
    To:"CLT",
    Distance:785.832,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PNS",
    To:"CLT",
    Distance:785.832,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PNS",
    To:"DCA",
    Distance:1313.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PNS",
    To:"DCA",
    Distance:1313.43,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PNS",
    To:"DFW",
    Distance:969.869,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PNS",
    To:"DFW",
    Distance:969.869,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PNS",
    To:"HOU",
    Distance:784.049,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PNS",
    To:"IAH",
    Distance:785.185,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PNS",
    To:"MCO",
    Distance:612.7,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PNS",
    To:"MIA",
    Distance:852.932,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PNS",
    To:"MIA",
    Distance:852.932,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PNS",
    To:"ORD",
    Distance:1280.92,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PNS",
    To:"TPA",
    Distance:530.071,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PNZ",
    To:"BSB",
    Distance:1076.55,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"PNZ",
    To:"CNF",
    Distance:1199.15,
    Airport:"Azul"
}),
new Routes(
{
    From:"PNZ",
    To:"REC",
    Distance:635.526,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"PNZ",
    To:"REC",
    Distance:635.526,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"PNZ",
    To:"SSA",
    Distance:464,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"POA",
    To:"AEP",
    Distance:848.965,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"POA",
    To:"BSB",
    Distance:1605.11,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"POA",
    To:"BSB",
    Distance:1605.11,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"POA",
    To:"CGH",
    Distance:837.752,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"POA",
    To:"CGH",
    Distance:837.752,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"POA",
    To:"CNF",
    Distance:1361.32,
    Airport:"Azul"
}),
new Routes(
{
    From:"POA",
    To:"CWB",
    Distance:533.971,
    Airport:"Azul"
}),
new Routes(
{
    From:"POA",
    To:"CWB",
    Distance:533.971,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"POA",
    To:"CWB",
    Distance:533.971,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"POA",
    To:"ERM",
    Distance:280.507,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"POA",
    To:"EZE",
    Distance:874.828,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"POA",
    To:"FLN",
    Distance:363.459,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"POA",
    To:"FLN",
    Distance:363.459,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"POA",
    To:"GIG",
    Distance:1122.59,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"POA",
    To:"GIG",
    Distance:1122.59,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"POA",
    To:"GIG",
    Distance:1122.59,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"POA",
    To:"GRU",
    Distance:866.101,
    Airport:"Azul"
}),
new Routes(
{
    From:"POA",
    To:"GRU",
    Distance:866.101,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"POA",
    To:"GRU",
    Distance:866.101,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"POA",
    To:"GRU",
    Distance:866.101,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"POA",
    To:"IGU",
    Distance:587.76,
    Airport:"Azul"
}),
new Routes(
{
    From:"POA",
    To:"JOI",
    Distance:479.489,
    Airport:"Azul"
}),
new Routes(
{
    From:"POA",
    To:"LDB",
    Distance:740.659,
    Airport:"Azul"
}),
new Routes(
{
    From:"POA",
    To:"LIM",
    Distance:3338.15,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"POA",
    To:"LIM",
    Distance:3338.15,
    Airport:"Grupo TACA"
}),
new Routes(
{
    From:"POA",
    To:"LIS",
    Distance:8800.51,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"POA",
    To:"MGF",
    Distance:729.605,
    Airport:"Azul"
}),
new Routes(
{
    From:"POA",
    To:"MIA",
    Distance:6935.63,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"POA",
    To:"MIA",
    Distance:6935.63,
    Airport:"US Airways"
}),
new Routes(
{
    From:"POA",
    To:"MVD",
    Distance:705.601,
    Airport:"BQB Lineas Aereas"
}),
new Routes(
{
    From:"POA",
    To:"MVD",
    Distance:705.601,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"POA",
    To:"NVT",
    Distance:424.988,
    Airport:"Azul"
}),
new Routes(
{
    From:"POA",
    To:"PET",
    Distance:221.191,
    Airport:"Azul"
}),
new Routes(
{
    From:"POA",
    To:"PFB",
    Distance:224.664,
    Airport:"Azul"
}),
new Routes(
{
    From:"POA",
    To:"PFB",
    Distance:224.664,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"POA",
    To:"PTY",
    Distance:5288.38,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"POA",
    To:"RIA",
    Distance:244.74,
    Airport:"Azul"
}),
new Routes(
{
    From:"POA",
    To:"RIA",
    Distance:244.74,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"POA",
    To:"SDU",
    Distance:1120.03,
    Airport:"Azul"
}),
new Routes(
{
    From:"POA",
    To:"SRA",
    Distance:400.053,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"POA",
    To:"VCP",
    Distance:874.421,
    Airport:"Azul"
}),
new Routes(
{
    From:"POA",
    To:"XAP",
    Distance:349.539,
    Airport:"Azul"
}),
new Routes(
{
    From:"POG",
    To:"PNR",
    Distance:573.802,
    Airport:"Estafeta Carga Aerea"
}),
new Routes(
{
    From:"POI",
    To:"LPB",
    Distance:426.147,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"POI",
    To:"LPB",
    Distance:426.147,
    Airport:"Southern Winds Airlines"
}),
new Routes(
{
    From:"POJ",
    To:"PLU",
    Distance:297.12,
    Airport:"Azul"
}),
new Routes(
{
    From:"POL",
    To:"APL",
    Distance:270.96,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"POL",
    To:"APL",
    Distance:270.96,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"POL",
    To:"BEW",
    Distance:965.178,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"POL",
    To:"DAR",
    Distance:694.447,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"POL",
    To:"JNB",
    Distance:1944.9,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"POL",
    To:"MPM",
    Distance:1661.02,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"POL",
    To:"NBO",
    Distance:1356.44,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"POL",
    To:"NBO",
    Distance:1356.44,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"POM",
    To:"BNE",
    Distance:2088.68,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"BNE",
    Distance:2088.68,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"POM",
    To:"BNE",
    Distance:2088.68,
    Airport:"Qantas"
}),
new Routes(
{
    From:"POM",
    To:"BNE",
    Distance:2088.68,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"POM",
    To:"BUA",
    Distance:935.367,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"CEB",
    Distance:3381.53,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"CMU",
    Distance:453.796,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"CNS",
    Distance:842.598,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"CNS",
    Distance:842.598,
    Airport:"Qantas"
}),
new Routes(
{
    From:"POM",
    To:"DAU",
    Distance:442.079,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"DAU",
    Distance:442.079,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"POM",
    To:"DPS",
    Distance:3518.94,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"GKA",
    Distance:424.602,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"GKA",
    Distance:424.602,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"POM",
    To:"GUR",
    Distance:354.513,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"GUR",
    Distance:354.513,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"POM",
    To:"HGU",
    Distance:515.31,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"HGU",
    Distance:515.31,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"POM",
    To:"HIR",
    Distance:1407.77,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"HKG",
    Distance:5063.57,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"HKN",
    Distance:565.008,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"HKN",
    Distance:565.008,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"POM",
    To:"KVG",
    Distance:860.096,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"LAE",
    Distance:324.117,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"LAE",
    Distance:324.117,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"POM",
    To:"LNV",
    Distance:929.236,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"LNV",
    Distance:929.236,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"POM",
    To:"MAG",
    Distance:496.79,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"MAS",
    Distance:821.094,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"MDU",
    Distance:536.961,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"MNL",
    Distance:3929.29,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"MXH",
    Distance:556.414,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"POM",
    To:"NAN",
    Distance:3389.37,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"NRT",
    Distance:5077.76,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"PNP",
    Distance:139.065,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"PNP",
    Distance:139.065,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"POM",
    To:"RAB",
    Distance:803.864,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"RAB",
    Distance:803.864,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"POM",
    To:"SIN",
    Distance:4934.78,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"SYD",
    Distance:2754.4,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"SYD",
    Distance:2754.4,
    Airport:"Qantas"
}),
new Routes(
{
    From:"POM",
    To:"TBG",
    Distance:806.967,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"TBG",
    Distance:806.967,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"POM",
    To:"TFI",
    Distance:234.054,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"POM",
    To:"TIZ",
    Distance:617.802,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"TIZ",
    Distance:617.802,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"POM",
    To:"UNG",
    Distance:750.955,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"UNG",
    Distance:750.955,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"POM",
    To:"VAI",
    Distance:995.187,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"WBM",
    Distance:559.321,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POM",
    To:"WWK",
    Distance:760.442,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"POP",
    To:"ANU",
    Distance:970.45,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"POP",
    To:"AZS",
    Distance:102.524,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"POP",
    To:"CDG",
    Distance:7144.5,
    Airport:"XL Airways France"
}),
new Routes(
{
    From:"POP",
    To:"DUS",
    Distance:7435.67,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"POP",
    To:"EWR",
    Distance:2352.78,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"POP",
    To:"FRA",
    Distance:7570.56,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"POP",
    To:"JFK",
    Distance:2341.89,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"POP",
    To:"LRM",
    Distance:226.894,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"POP",
    To:"MIA",
    Distance:1200.76,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"POP",
    To:"MIA",
    Distance:1200.76,
    Airport:"US Airways"
}),
new Routes(
{
    From:"POP",
    To:"PLS",
    Distance:285.17,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"POP",
    To:"PUJ",
    Distance:266.904,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"POP",
    To:"SJU",
    Distance:501.864,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"POP",
    To:"YHZ",
    Distance:2868.51,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"POP",
    To:"YYZ",
    Distance:2790.16,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"POP",
    To:"YYZ",
    Distance:2790.16,
    Airport:"WestJet"
}),
new Routes(
{
    From:"POR",
    To:"ARN",
    Distance:292.321,
    Airport:"NextJet"
}),
new Routes(
{
    From:"POR",
    To:"HEL",
    Distance:213.219,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"POR",
    To:"KOK",
    Distance:260.466,
    Airport:"NextJet"
}),
new Routes(
{
    From:"POS",
    To:"BGI",
    Distance:341.028,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"POS",
    To:"CCS",
    Distance:617.889,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"POS",
    To:"CUR",
    Distance:849.521,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"POS",
    To:"CUR",
    Distance:849.521,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"POS",
    To:"CUR",
    Distance:849.521,
    Airport:"Surinam Airways"
}),
new Routes(
{
    From:"POS",
    To:"EWR",
    Distance:3576.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"POS",
    To:"FLL",
    Distance:2621.14,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"POS",
    To:"FLL",
    Distance:2621.14,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"POS",
    To:"GEO",
    Distance:567.806,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"POS",
    To:"GND",
    Distance:164.13,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"POS",
    To:"GND",
    Distance:164.13,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"POS",
    To:"GND",
    Distance:164.13,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"POS",
    To:"IAH",
    Distance:4124.16,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"POS",
    To:"JFK",
    Distance:3557.36,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"POS",
    To:"JFK",
    Distance:3557.36,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"POS",
    To:"KIN",
    Distance:1852.81,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"POS",
    To:"LGW",
    Distance:7099.6,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"POS",
    To:"MCO",
    Distance:2874.03,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"POS",
    To:"MIA",
    Distance:2613.34,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"POS",
    To:"MIA",
    Distance:2613.34,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"POS",
    To:"MIA",
    Distance:2613.34,
    Airport:"US Airways"
}),
new Routes(
{
    From:"POS",
    To:"PBM",
    Distance:886.061,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"POS",
    To:"PBM",
    Distance:886.061,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"POS",
    To:"PBM",
    Distance:886.061,
    Airport:"Surinam Airways"
}),
new Routes(
{
    From:"POS",
    To:"PMV",
    Distance:289.504,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"POS",
    To:"PTY",
    Distance:1984.11,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"POS",
    To:"PTY",
    Distance:1984.11,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"POS",
    To:"SLU",
    Distance:382.659,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"POS",
    To:"SLU",
    Distance:382.659,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"POS",
    To:"SVD",
    Distance:283.762,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"POS",
    To:"TAB",
    Distance:82.7063,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"POS",
    To:"UVF",
    Distance:351.406,
    Airport:"British Airways"
}),
new Routes(
{
    From:"POS",
    To:"UVF",
    Distance:351.406,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"POS",
    To:"YYZ",
    Distance:4078.85,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"POS",
    To:"YYZ",
    Distance:4078.85,
    Airport:"WestJet"
}),
new Routes(
{
    From:"POZ",
    To:"BCN",
    Distance:1663.2,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"POZ",
    To:"BRS",
    Distance:1341.81,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"POZ",
    To:"BVA",
    Distance:1080.24,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"POZ",
    To:"CIA",
    Distance:1223.17,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"POZ",
    To:"CPH",
    Distance:447.703,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"POZ",
    To:"DUB",
    Distance:1545.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"POZ",
    To:"DUS",
    Distance:701.645,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"POZ",
    To:"EDI",
    Distance:1365.96,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"POZ",
    To:"FRA",
    Distance:634.833,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"POZ",
    To:"FRA",
    Distance:634.833,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"POZ",
    To:"GRO",
    Distance:1575.43,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"POZ",
    To:"LPL",
    Distance:1320.12,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"POZ",
    To:"LTN",
    Distance:1172.02,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"POZ",
    To:"MUC",
    Distance:576.099,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"POZ",
    To:"MUC",
    Distance:576.099,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"POZ",
    To:"NYO",
    Distance:708.066,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"POZ",
    To:"RYG",
    Distance:859.653,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"POZ",
    To:"STN",
    Distance:1131,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"POZ",
    To:"TRF",
    Distance:856.06,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"POZ",
    To:"WAW",
    Distance:282.998,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"PPB",
    To:"CGH",
    Distance:514.455,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"PPB",
    To:"VCP",
    Distance:450.044,
    Airport:"Azul"
}),
new Routes(
{
    From:"PPG",
    To:"HNL",
    Distance:4202.62,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"PPK",
    To:"ALA",
    Distance:1391.11,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"PPK",
    To:"TSE",
    Distance:444.409,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"PPN",
    To:"BOG",
    Distance:370.277,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"PPP",
    To:"BNE",
    Distance:895.349,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"PPP",
    To:"BNE",
    Distance:895.349,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PPP",
    To:"SYD",
    Distance:1517.87,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"PPQ",
    To:"AKL",
    Distance:433.626,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PPQ",
    To:"CHC",
    Distance:351.476,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PPS",
    To:"BKI",
    Distance:517.612,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PPS",
    To:"CEB",
    Distance:575.092,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"PPS",
    To:"DVO",
    Distance:811.402,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"PPS",
    To:"ILO",
    Distance:428.183,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"PPS",
    To:"MNL",
    Distance:584.196,
    Airport:"Air Philippines"
}),
new Routes(
{
    From:"PPS",
    To:"MNL",
    Distance:584.196,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"PPS",
    To:"MNL",
    Distance:584.196,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"PPS",
    To:"MNL",
    Distance:584.196,
    Airport:"South East Asian Airlines"
}),
new Routes(
{
    From:"PPS",
    To:"MNL",
    Distance:584.196,
    Airport:"Zest Air"
}),
new Routes(
{
    From:"PPT",
    To:"AHE",
    Distance:499.54,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"AKL",
    Distance:4092.82,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PPT",
    To:"AKL",
    Distance:4092.82,
    Airport:"Air Tahiti Nui"
}),
new Routes(
{
    From:"PPT",
    To:"AKL",
    Distance:4092.82,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PPT",
    To:"AKL",
    Distance:4092.82,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PPT",
    To:"AUQ",
    Distance:1434.95,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"AXR",
    Distance:409.766,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"BOB",
    Distance:258.983,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"FAV",
    Distance:452.853,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"HNL",
    Distance:4416.57,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"PPT",
    To:"HOI",
    Distance:919.074,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"HUH",
    Distance:178.34,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"IPC",
    Distance:4249.15,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"PPT",
    To:"LAX",
    Distance:6611.93,
    Airport:"Air France"
}),
new Routes(
{
    From:"PPT",
    To:"LAX",
    Distance:6611.93,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PPT",
    To:"LAX",
    Distance:6611.93,
    Airport:"Air Tahiti Nui"
}),
new Routes(
{
    From:"PPT",
    To:"LAX",
    Distance:6611.93,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PPT",
    To:"LAX",
    Distance:6611.93,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PPT",
    To:"LAX",
    Distance:6611.93,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PPT",
    To:"MAU",
    Distance:306.828,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"MOZ",
    Distance:17.5954,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"MVT",
    Distance:313.831,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"NHV",
    Distance:1406.59,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"NOU",
    Distance:4633.24,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"PPT",
    To:"NRT",
    Distance:9444.46,
    Airport:"Air Tahiti Nui"
}),
new Routes(
{
    From:"PPT",
    To:"NRT",
    Distance:9444.46,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PPT",
    To:"RAR",
    Distance:1143.21,
    Airport:"Air Rarotonga"
}),
new Routes(
{
    From:"PPT",
    To:"RAR",
    Distance:1143.21,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"RFP",
    Distance:217.769,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"RGI",
    Distance:356.488,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"RMT",
    Distance:655.954,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"RUR",
    Distance:572.29,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"RVV",
    Distance:730.432,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"TIH",
    Distance:308.44,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"TKX",
    Distance:599.301,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"TUB",
    Distance:645.96,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPT",
    To:"XMH",
    Distance:513.409,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"PPW",
    To:"KOI",
    Distance:43.803,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"PPW",
    To:"NRL",
    Distance:26.4576,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"PPW",
    To:"WRY",
    Distance:2.82266,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"PQC",
    To:"HAN",
    Distance:1238.2,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"PQC",
    To:"SGN",
    Distance:300.787,
    Airport:"Jetstar Pacific"
}),
new Routes(
{
    From:"PQC",
    To:"SGN",
    Distance:300.787,
    Airport:"Royal Air Cambodge"
}),
new Routes(
{
    From:"PQC",
    To:"SGN",
    Distance:300.787,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"PQC",
    To:"VCA",
    Distance:191.618,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"PQI",
    To:"BOS",
    Distance:534.983,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PQI",
    To:"BOS",
    Distance:534.983,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"PQQ",
    To:"BNE",
    Distance:451.194,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PQQ",
    To:"BNE",
    Distance:451.194,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PQQ",
    To:"LDH",
    Distance:589.258,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PQQ",
    To:"SYD",
    Distance:320.614,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PQQ",
    To:"SYD",
    Distance:320.614,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PQQ",
    To:"SYD",
    Distance:320.614,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"PQS",
    To:"BET",
    Distance:140.301,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"PQS",
    To:"BET",
    Distance:140.301,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"PQS",
    To:"MOU",
    Distance:44.5815,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"PRA",
    To:"AEP",
    Distance:362.486,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"PRA",
    To:"AEP",
    Distance:362.486,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"PRC",
    To:"LAX",
    Distance:555.68,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"AGP",
    Distance:2116.15,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"ALA",
    Distance:4700.14,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"AMS",
    Distance:705.007,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"AMS",
    Distance:705.007,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"AMS",
    Distance:705.007,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"AMS",
    Distance:705.007,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PRG",
    To:"ARN",
    Distance:1087.1,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"ARN",
    Distance:1087.1,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PRG",
    To:"ARN",
    Distance:1087.1,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PRG",
    To:"ARN",
    Distance:1087.1,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"PRG",
    To:"ARN",
    Distance:1087.1,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"ATH",
    Distance:1555.64,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"AYT",
    Distance:1974.8,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"BCN",
    Distance:1358.03,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"PRG",
    To:"BCN",
    Distance:1358.03,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"BCN",
    Distance:1358.03,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"BCN",
    Distance:1358.03,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"BCN",
    Distance:1358.03,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"BEG",
    Distance:742.331,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"PRG",
    To:"BGO",
    Distance:1267.7,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PRG",
    To:"BGY",
    Distance:597.843,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"PRG",
    To:"BRI",
    Distance:1015.17,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"PRG",
    To:"BRS",
    Distance:1200.48,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PRG",
    To:"BRU",
    Distance:696.577,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"BRU",
    Distance:696.577,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"BRU",
    Distance:696.577,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"BRU",
    Distance:696.577,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"BSL",
    Distance:565.857,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"PRG",
    To:"BTS",
    Distance:303.651,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"BTS",
    Distance:303.651,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"BUD",
    Distance:470.763,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"BUD",
    Distance:470.763,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"CDG",
    Distance:852.372,
    Airport:"Air France"
}),
new Routes(
{
    From:"PRG",
    To:"CDG",
    Distance:852.372,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PRG",
    To:"CDG",
    Distance:852.372,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"CDG",
    Distance:852.372,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"CDG",
    Distance:852.372,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PRG",
    To:"CEK",
    Distance:3171.47,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"CEK",
    Distance:3171.47,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"CGN",
    Distance:510.497,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PRG",
    To:"CLJ",
    Distance:786.2,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"CLJ",
    Distance:786.2,
    Airport:"Tarom"
}),
new Routes(
{
    From:"PRG",
    To:"CPH",
    Distance:622.807,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"CPH",
    Distance:622.807,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PRG",
    To:"CPH",
    Distance:622.807,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"PRG",
    To:"CPH",
    Distance:622.807,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"DUB",
    Distance:1454.75,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"PRG",
    To:"DUB",
    Distance:1454.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PRG",
    To:"DUS",
    Distance:543.821,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"DUS",
    Distance:543.821,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PRG",
    To:"DUS",
    Distance:543.821,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"DXB",
    Distance:4463.79,
    Airport:"Emirates"
}),
new Routes(
{
    From:"PRG",
    To:"DXB",
    Distance:4463.79,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PRG",
    To:"EDI",
    Distance:1341.29,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PRG",
    To:"EDI",
    Distance:1341.29,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PRG",
    To:"EMA",
    Distance:1119.15,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PRG",
    To:"EVN",
    Distance:2587.13,
    Airport:"Atlantis European Airways"
}),
new Routes(
{
    From:"PRG",
    To:"EVN",
    Distance:2587.13,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"FCO",
    Distance:935.403,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PRG",
    To:"FCO",
    Distance:935.403,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"FCO",
    Distance:935.403,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"FCO",
    Distance:935.403,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"FCO",
    Distance:935.403,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"FCO",
    Distance:935.403,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"PRG",
    To:"FCO",
    Distance:935.403,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PRG",
    To:"FNC",
    Distance:3193.79,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"FRA",
    Distance:408.055,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"FRA",
    Distance:408.055,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"FRA",
    Distance:408.055,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"PRG",
    To:"FRA",
    Distance:408.055,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"GOJ",
    Distance:2063.89,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"GOJ",
    Distance:2063.89,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"GVA",
    Distance:740.864,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"PRG",
    To:"GYD",
    Distance:2963.3,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"GYD",
    Distance:2963.3,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"HAM",
    Distance:489.777,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"HAM",
    Distance:489.777,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PRG",
    To:"HAM",
    Distance:489.777,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"HEL",
    Distance:1319.83,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"HEL",
    Distance:1319.83,
    Airport:"Finnair"
}),
new Routes(
{
    From:"PRG",
    To:"HEL",
    Distance:1319.83,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PRG",
    To:"HER",
    Distance:1863.62,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"HER",
    Distance:1863.62,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"ICN",
    Distance:8236.51,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"ICN",
    Distance:8236.51,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PRG",
    To:"IST",
    Distance:1516.42,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"KBP",
    Distance:1181.29,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"KBP",
    Distance:1181.29,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"KBP",
    Distance:1181.29,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"KRR",
    Distance:1941.56,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"PRG",
    To:"KSC",
    Distance:529.808,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"KSC",
    Distance:529.808,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"KUF",
    Distance:2469.67,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"LBA",
    Distance:1164.8,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PRG",
    To:"LED",
    Distance:1478.25,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"LED",
    Distance:1478.25,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"LGW",
    Distance:1024.3,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PRG",
    To:"LHR",
    Distance:1044.27,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"LHR",
    Distance:1044.27,
    Airport:"British Airways"
}),
new Routes(
{
    From:"PRG",
    To:"LIN",
    Distance:637.407,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PRG",
    To:"LIS",
    Distance:2228.66,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"PRG",
    To:"LJU",
    Distance:431.368,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"PRG",
    To:"LPA",
    Distance:3511.8,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"LTN",
    Distance:1040.87,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"PRG",
    To:"LYS",
    Distance:837.84,
    Airport:"Air France"
}),
new Routes(
{
    From:"PRG",
    To:"LYS",
    Distance:837.84,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"PRG",
    To:"MAD",
    Distance:1749,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"PRG",
    To:"MAD",
    Distance:1749,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"MAD",
    Distance:1749,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"MAD",
    Distance:1749,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"MAN",
    Distance:1191.73,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PRG",
    To:"MAN",
    Distance:1191.73,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PRG",
    To:"MLA",
    Distance:1583.88,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"PRG",
    To:"MLA",
    Distance:1583.88,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"MRS",
    Distance:1010.52,
    Airport:"Air France"
}),
new Routes(
{
    From:"PRG",
    To:"MSQ",
    Distance:1030.2,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"MSQ",
    Distance:1030.2,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"MUC",
    Distance:264.568,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"PRG",
    To:"MXP",
    Distance:645.671,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"MXP",
    Distance:645.671,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"MXP",
    Distance:645.671,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PRG",
    To:"NAP",
    Distance:1024.64,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"PRG",
    To:"NCE",
    Distance:893.473,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"NCE",
    Distance:893.473,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"NCL",
    Distance:1206.01,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PRG",
    To:"NTE",
    Distance:1208.97,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"PRG",
    To:"ORY",
    Distance:873.426,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PRG",
    To:"OSL",
    Distance:1139.79,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PRG",
    To:"OSL",
    Distance:1139.79,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"PRG",
    To:"OSR",
    Distance:279.444,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"OSR",
    Distance:279.444,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"OTP",
    Distance:1081.63,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"OTP",
    Distance:1081.63,
    Airport:"Tarom"
}),
new Routes(
{
    From:"PRG",
    To:"OTP",
    Distance:1081.63,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"OVB",
    Distance:4468.21,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"PEE",
    Distance:2812.27,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"PMI",
    Distance:1480.52,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"PMI",
    Distance:1480.52,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"PSA",
    Distance:771.402,
    Airport:"Air One"
}),
new Routes(
{
    From:"PRG",
    To:"PSA",
    Distance:771.402,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PRG",
    To:"RHO",
    Distance:1883.66,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"RHO",
    Distance:1883.66,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"RIX",
    Distance:992.009,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"PRG",
    To:"RIX",
    Distance:992.009,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"ROV",
    Distance:1893.23,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"RTM",
    Distance:716.63,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"PRG",
    To:"RTW",
    Distance:2222.86,
    Airport:"Saratov Aviation Division"
}),
new Routes(
{
    From:"PRG",
    To:"SOF",
    Distance:1080.06,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"PRG",
    To:"SOF",
    Distance:1080.06,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"SPU",
    Distance:745.866,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"STN",
    Distance:999.759,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PRG",
    To:"STN",
    Distance:999.759,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PRG",
    To:"SVO",
    Distance:1670.05,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"SVO",
    Distance:1670.05,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"SVX",
    Distance:3106.32,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"SVX",
    Distance:3106.32,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"SXB",
    Distance:510.899,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"SXB",
    Distance:510.899,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"TAS",
    Distance:4283.69,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"TFS",
    Distance:3573.16,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"TLV",
    Distance:2634.63,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"TLV",
    Distance:2634.63,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"TLV",
    Distance:2634.63,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"TLV",
    Distance:2634.63,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"PRG",
    To:"TSF",
    Distance:518.449,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"PRG",
    To:"TXL",
    Distance:281.626,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"TXL",
    Distance:281.626,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"UFA",
    Distance:2827.77,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"VCE",
    Distance:530.453,
    Airport:"Air One"
}),
new Routes(
{
    From:"PRG",
    To:"VCE",
    Distance:530.453,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PRG",
    To:"VIE",
    Distance:277.93,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"VLC",
    Distance:1651.16,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"VLC",
    Distance:1651.16,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"VNO",
    Distance:900.91,
    Airport:"LTU International"
}),
new Routes(
{
    From:"PRG",
    To:"WAW",
    Distance:521.014,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"WAW",
    Distance:521.014,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"WAW",
    Distance:521.014,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRG",
    To:"ZRH",
    Distance:510.65,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"PRG",
    To:"ZRH",
    Distance:510.65,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"PRG",
    To:"ZRH",
    Distance:510.65,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"PRH",
    To:"DMK",
    Distance:471.568,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"PRI",
    To:"SEZ",
    Distance:43.7267,
    Airport:"Air Seychelles"
}),
new Routes(
{
    From:"PRN",
    To:"BSL",
    Distance:1195.97,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PRN",
    To:"CPH",
    Distance:1570.97,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"PRN",
    To:"DUS",
    Distance:1449.17,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PRN",
    To:"FRA",
    Distance:1265.12,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"PRN",
    To:"FRA",
    Distance:1265.12,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"PRN",
    To:"GVA",
    Distance:1251.55,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"PRN",
    To:"GVA",
    Distance:1251.55,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PRN",
    To:"HAJ",
    Distance:1387.81,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PRN",
    To:"HAM",
    Distance:1474.36,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PRN",
    To:"IST",
    Distance:668.742,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"PRN",
    To:"LGW",
    Distance:1864.52,
    Airport:"Germania"
}),
new Routes(
{
    From:"PRN",
    To:"LJU",
    Distance:661.392,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"PRN",
    To:"MUC",
    Distance:964.992,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"PRN",
    To:"MUC",
    Distance:964.992,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"PRN",
    To:"SAW",
    Distance:710.954,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"PRN",
    To:"STR",
    Distance:1140.89,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PRN",
    To:"TXL",
    Distance:1251.77,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PRN",
    To:"VIE",
    Distance:707.503,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"PRN",
    To:"ZAG",
    Distance:530.156,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"PRN",
    To:"ZRH",
    Distance:1120.23,
    Airport:"Belair Airlines"
}),
new Routes(
{
    From:"PRN",
    To:"ZRH",
    Distance:1120.23,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"PSA",
    To:"AHO",
    Distance:380.982,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"AMS",
    Distance:1045.71,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"PSA",
    To:"ARN",
    Distance:1847.05,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PSA",
    To:"BCN",
    Distance:731.146,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"PSA",
    To:"BCN",
    Distance:731.146,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PSA",
    To:"BDS",
    Distance:707.287,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"BLL",
    Distance:1343.52,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"BOH",
    Distance:1212.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"BRI",
    Distance:594.227,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"BRS",
    Distance:1301.09,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PSA",
    To:"BUD",
    Distance:805.653,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"BVA",
    Distance:900.283,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"CAG",
    Distance:505.305,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"CGN",
    Distance:835.176,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PSA",
    To:"CIY",
    Distance:824.564,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"CPH",
    Distance:1336.78,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PSA",
    To:"CRL",
    Distance:876.768,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"CTA",
    Distance:795.738,
    Airport:"Air One"
}),
new Routes(
{
    From:"PSA",
    To:"CTA",
    Distance:795.738,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PSA",
    To:"DUB",
    Distance:1628.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"EDI",
    Distance:1677.35,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"EIN",
    Distance:941.514,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"EMA",
    Distance:1333.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"FCO",
    Distance:258.24,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PSA",
    To:"FEZ",
    Distance:1712.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"FUE",
    Distance:2742.96,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"GDN",
    Distance:1324.77,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"GRO",
    Distance:653.272,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"GSE",
    Distance:1570.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"HAU",
    Distance:1776.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"HHN",
    Distance:735.999,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"IBZ",
    Distance:923.399,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"KRK",
    Distance:1006.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"LBA",
    Distance:1431.88,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PSA",
    To:"LBA",
    Distance:1431.88,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"LBC",
    Distance:1125.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"LGW",
    Distance:1147.99,
    Airport:"British Airways"
}),
new Routes(
{
    From:"PSA",
    To:"LGW",
    Distance:1147.99,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PSA",
    To:"LHR",
    Distance:1186.61,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PSA",
    To:"LHR",
    Distance:1186.61,
    Airport:"British Airways"
}),
new Routes(
{
    From:"PSA",
    To:"LIS",
    Distance:1716.79,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"LPA",
    Distance:2890.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"LPL",
    Distance:1445.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"LTN",
    Distance:1212.4,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PSA",
    To:"MAD",
    Distance:1203.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"MAN",
    Distance:1419.38,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PSA",
    To:"MLA",
    Distance:937.347,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"MUC",
    Distance:530.268,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"PSA",
    To:"NCL",
    Distance:1531.45,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PSA",
    To:"NRN",
    Distance:935.886,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"NYO",
    Distance:1737.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"ORY",
    Distance:833.699,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PSA",
    To:"ORY",
    Distance:833.699,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PSA",
    To:"OSL",
    Distance:1836.44,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PSA",
    To:"OTP",
    Distance:1255.77,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"PSA",
    To:"PMO",
    Distance:652.958,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"PRG",
    Distance:771.402,
    Airport:"Air One"
}),
new Routes(
{
    From:"PSA",
    To:"PRG",
    Distance:771.402,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PSA",
    To:"RAK",
    Distance:2097.72,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"SKG",
    Distance:1094.43,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"STN",
    Distance:1184.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"SUF",
    Distance:721.525,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"SVO",
    Distance:2346.97,
    Airport:"Air One"
}),
new Routes(
{
    From:"PSA",
    To:"SVO",
    Distance:2346.97,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PSA",
    To:"SVQ",
    Distance:1538.61,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"SXF",
    Distance:994.321,
    Airport:"easyJet"
}),
new Routes(
{
    From:"PSA",
    To:"TFS",
    Distance:2965.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"TIA",
    Distance:804.153,
    Airport:"Air One"
}),
new Routes(
{
    From:"PSA",
    To:"TIA",
    Distance:804.153,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PSA",
    To:"TIA",
    Distance:804.153,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"PSA",
    To:"TPS",
    Distance:665.599,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"TRF",
    Distance:1723.86,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"TXL",
    Distance:1009.84,
    Airport:"Air One"
}),
new Routes(
{
    From:"PSA",
    To:"TXL",
    Distance:1009.84,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PSA",
    To:"VLC",
    Distance:1016.46,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSA",
    To:"WMI",
    Distance:1235.01,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSC",
    To:"AZA",
    Distance:1573.81,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PSC",
    To:"DEN",
    Distance:1369.52,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PSC",
    To:"LAS",
    Distance:1179.73,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PSC",
    To:"MSP",
    Distance:2012.59,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PSC",
    To:"PDX",
    Distance:279.319,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PSC",
    To:"SEA",
    Distance:275.991,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PSC",
    To:"SFO",
    Distance:998.125,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PSC",
    To:"SLC",
    Distance:837.345,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PSE",
    To:"JFK",
    Distance:2609.51,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PSE",
    To:"MCO",
    Distance:1897.82,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PSG",
    To:"JNU",
    Distance:198.195,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PSG",
    To:"WRG",
    Distance:49.8244,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PSJ",
    To:"UPG",
    Distance:423.401,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PSM",
    To:"SFB",
    Distance:1842.59,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PSO",
    To:"BOG",
    Distance:506.915,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"PSO",
    To:"BOG",
    Distance:506.915,
    Airport:"SATENA"
}),
new Routes(
{
    From:"PSO",
    To:"CLO",
    Distance:259.248,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"PSP",
    To:"BLI",
    Distance:1736.98,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PSP",
    To:"DEN",
    Distance:1246.8,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PSP",
    To:"DEN",
    Distance:1246.8,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PSP",
    To:"DFW",
    Distance:1808.34,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PSP",
    To:"DFW",
    Distance:1808.34,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PSP",
    To:"IAH",
    Distance:2039.19,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PSP",
    To:"LAS",
    Distance:279.012,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PSP",
    To:"LAX",
    Distance:175.959,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PSP",
    To:"MSP",
    Distance:2336.32,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PSP",
    To:"MSP",
    Distance:2336.32,
    Airport:"Sun Country Airlines"
}),
new Routes(
{
    From:"PSP",
    To:"ORD",
    Distance:2653,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PSP",
    To:"ORD",
    Distance:2653,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PSP",
    To:"PDX",
    Distance:1406.45,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PSP",
    To:"PHX",
    Distance:418.449,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PSP",
    To:"PHX",
    Distance:418.449,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PSP",
    To:"SEA",
    Distance:1590.41,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PSP",
    To:"SFO",
    Distance:676.617,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PSP",
    To:"SFO",
    Distance:676.617,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PSP",
    To:"SFO",
    Distance:676.617,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PSP",
    To:"SFO",
    Distance:676.617,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PSP",
    To:"SFO",
    Distance:676.617,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PSP",
    To:"SLC",
    Distance:870.972,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PSP",
    To:"SMF",
    Distance:707.204,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PSP",
    To:"YEG",
    Distance:2178.42,
    Airport:"WestJet"
}),
new Routes(
{
    From:"PSP",
    To:"YVR",
    Distance:1794.85,
    Airport:"WestJet"
}),
new Routes(
{
    From:"PSP",
    To:"YYC",
    Distance:1932.42,
    Airport:"WestJet"
}),
new Routes(
{
    From:"PSR",
    To:"BGY",
    Distance:507.756,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSR",
    To:"BVA",
    Distance:1214.21,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSR",
    To:"CAG",
    Distance:557.526,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSR",
    To:"CRL",
    Distance:1160.86,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSR",
    To:"GRO",
    Distance:942.386,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSR",
    To:"HHN",
    Distance:990.077,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSR",
    To:"LIN",
    Distance:516.046,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PSR",
    To:"NRN",
    Distance:1186.34,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSR",
    To:"STN",
    Distance:1484.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PSS",
    To:"AEP",
    Distance:830.909,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"PTG",
    To:"JNB",
    Distance:275.901,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"PTH",
    To:"AKN",
    Distance:224.215,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"PTJ",
    To:"MEB",
    Distance:307.592,
    Airport:"Sharp Airlines"
}),
new Routes(
{
    From:"PTP",
    To:"ANU",
    Distance:100.804,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"PTP",
    To:"ANU",
    Distance:100.804,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"PTP",
    To:"DOM",
    Distance:83.6272,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"PTP",
    To:"DOM",
    Distance:83.6272,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"PTP",
    To:"DOM",
    Distance:83.6272,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"PTP",
    To:"FDF",
    Distance:194.602,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"PTP",
    To:"FDF",
    Distance:194.602,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"PTP",
    To:"FDF",
    Distance:194.602,
    Airport:"Air France"
}),
new Routes(
{
    From:"PTP",
    To:"FDF",
    Distance:194.602,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"PTP",
    To:"FDF",
    Distance:194.602,
    Airport:"XL Airways France"
}),
new Routes(
{
    From:"PTP",
    To:"MIA",
    Distance:2212.7,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PTP",
    To:"MIA",
    Distance:2212.7,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PTP",
    To:"ORY",
    Distance:6750.97,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"PTP",
    To:"ORY",
    Distance:6750.97,
    Airport:"Air France"
}),
new Routes(
{
    From:"PTP",
    To:"ORY",
    Distance:6750.97,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"PTP",
    To:"PAP",
    Distance:1170.05,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"PTP",
    To:"PAP",
    Distance:1170.05,
    Airport:"Air France"
}),
new Routes(
{
    From:"PTP",
    To:"SBH",
    Distance:228.564,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"PTP",
    To:"SBH",
    Distance:228.564,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"PTP",
    To:"SDQ",
    Distance:896.429,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"PTP",
    To:"SDQ",
    Distance:896.429,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"PTP",
    To:"SDQ",
    Distance:896.429,
    Airport:"Air France"
}),
new Routes(
{
    From:"PTP",
    To:"SFG",
    Distance:259.862,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"PTP",
    To:"SFG",
    Distance:259.862,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"PTP",
    To:"SFG",
    Distance:259.862,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"PTP",
    To:"SJU",
    Distance:532.424,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PTP",
    To:"SJU",
    Distance:532.424,
    Airport:"Seaborne Airlines"
}),
new Routes(
{
    From:"PTP",
    To:"SXM",
    Distance:258.957,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"PTP",
    To:"YUL",
    Distance:3441.05,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"PTU",
    To:"BET",
    Distance:196.642,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"PTY",
    To:"ADZ",
    Distance:465.973,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"AMS",
    Distance:8813.47,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PTY",
    To:"AMS",
    Distance:8813.47,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"ASU",
    Distance:4490.32,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"ATL",
    Distance:2779.94,
    Airport:"Air France"
}),
new Routes(
{
    From:"PTY",
    To:"ATL",
    Distance:2779.94,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PTY",
    To:"ATL",
    Distance:2779.94,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PTY",
    To:"AUA",
    Distance:1091.87,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"BAQ",
    Distance:543.055,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"BGA",
    Distance:715.795,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"BOG",
    Distance:755.043,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"PTY",
    To:"BOG",
    Distance:755.043,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"BOS",
    Distance:3791.44,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"BOS",
    Distance:3791.44,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"BSB",
    Distance:4437.66,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"CCS",
    Distance:1368.28,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PTY",
    To:"CCS",
    Distance:1368.28,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"CCS",
    Distance:1368.28,
    Airport:"Santa Barbara Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"CDG",
    Distance:8660.25,
    Airport:"Air France"
}),
new Routes(
{
    From:"PTY",
    To:"CLO",
    Distance:698.457,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"CNF",
    Distance:5022.54,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"COR",
    Distance:4773.67,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"CTG",
    Distance:450.706,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"CUC",
    Distance:766.333,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"CUN",
    Distance:1553.92,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PTY",
    To:"CUN",
    Distance:1553.92,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"CUR",
    Distance:1190.54,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"DFW",
    Distance:3210.04,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"DFW",
    Distance:3210.04,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PTY",
    To:"EWR",
    Distance:3553.59,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"EWR",
    Distance:3553.59,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"EZE",
    Distance:5350.85,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"FLL",
    Distance:1892.19,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"GDL",
    Distance:2864.48,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PTY",
    To:"GDL",
    Distance:2864.48,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"GIG",
    Distance:5295.49,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"GRU",
    Distance:5085.96,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"GUA",
    Distance:1358.37,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"GYE",
    Distance:1249.81,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"GYE",
    Distance:1249.81,
    Airport:"TAME"
}),
new Routes(
{
    From:"PTY",
    To:"HAV",
    Distance:1580.8,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"HAV",
    Distance:1580.8,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"PTY",
    To:"IAD",
    Distance:3327.3,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"IAD",
    Distance:3327.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"IAH",
    Distance:2856.46,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"IAH",
    Distance:2856.46,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"IQT",
    Distance:1580.17,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"JFK",
    Distance:3553.6,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"JFK",
    Distance:3553.6,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"KIN",
    Distance:1024.76,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"LAS",
    Distance:4696.22,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"LAS",
    Distance:4696.22,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"LAX",
    Distance:4845.37,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"LAX",
    Distance:4845.37,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"LIM",
    Distance:2358.83,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"LIR",
    Distance:695.865,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"MAD",
    Distance:8157.06,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"MAO",
    Distance:2530.75,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"MAR",
    Distance:854.9,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"MBJ",
    Distance:1060.75,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"MCO",
    Distance:2161.92,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"MCO",
    Distance:2161.92,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"MDE",
    Distance:543.09,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"MEX",
    Distance:2411.07,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PTY",
    To:"MEX",
    Distance:2411.07,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"MGA",
    Distance:816.243,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PTY",
    To:"MGA",
    Distance:816.243,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"MIA",
    Distance:1861.85,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"MIA",
    Distance:1861.85,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"MIA",
    Distance:1861.85,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"MIA",
    Distance:1861.85,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PTY",
    To:"MIA",
    Distance:1861.85,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"MTY",
    Distance:2869.78,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PTY",
    To:"MTY",
    Distance:2869.78,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"MVD",
    Distance:5465.59,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"NAS",
    Distance:1787.08,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"ORD",
    Distance:3753.09,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"ORD",
    Distance:3753.09,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"PAP",
    Distance:1304.79,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PTY",
    To:"PAP",
    Distance:1304.79,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"PEI",
    Distance:621.244,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"POA",
    Distance:5288.38,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"POS",
    Distance:1984.11,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PTY",
    To:"POS",
    Distance:1984.11,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"PUJ",
    Distance:1589.57,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"REC",
    Distance:5283.04,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"SAL",
    Distance:1161.04,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"PTY",
    To:"SAL",
    Distance:1161.04,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"SAP",
    Distance:1167.69,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"SCL",
    Distance:4808.61,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"SDQ",
    Distance:1476.73,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PTY",
    To:"SDQ",
    Distance:1476.73,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"SJO",
    Distance:538.986,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"PTY",
    To:"SJO",
    Distance:538.986,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"SJO",
    Distance:538.986,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"SJO",
    Distance:538.986,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"SJU",
    Distance:1779.87,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"STI",
    Distance:1487.55,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"SXM",
    Distance:2020.16,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"TGU",
    Distance:1017.6,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"TPA",
    Distance:2127.8,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"UIO",
    Distance:1029.17,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"VLN",
    Distance:1261.5,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"VVI",
    Distance:3465.65,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PTY",
    To:"YYZ",
    Distance:3848.07,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PUB",
    To:"DEN",
    Distance:175.525,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PUE",
    To:"PAC",
    Distance:224.531,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"PUF",
    To:"CDG",
    Distance:666.572,
    Airport:"Air France"
}),
new Routes(
{
    From:"PUF",
    To:"CDG",
    Distance:666.572,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PUF",
    To:"LYS",
    Distance:508.405,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"PUF",
    To:"MRS",
    Distance:454.932,
    Airport:"Twin Jet"
}),
new Routes(
{
    From:"PUF",
    To:"ORY",
    Distance:631.733,
    Airport:"Air France"
}),
new Routes(
{
    From:"PUG",
    To:"ADL",
    Distance:281.351,
    Airport:"Sharp Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"AMS",
    Distance:7244.71,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"PUJ",
    To:"ANU",
    Distance:713.36,
    Airport:"British Airways"
}),
new Routes(
{
    From:"PUJ",
    To:"ANU",
    Distance:713.36,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"ATL",
    Distance:2313.45,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PUJ",
    To:"ATL",
    Distance:2313.45,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PUJ",
    To:"ATL",
    Distance:2313.45,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"BOG",
    Distance:1664.85,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"PUJ",
    To:"BOG",
    Distance:1664.85,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"BOS",
    Distance:2657.83,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PUJ",
    To:"BWI",
    Distance:2427.16,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PUJ",
    To:"CCS",
    Distance:897.799,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"CDG",
    Distance:7078.85,
    Airport:"Air France"
}),
new Routes(
{
    From:"PUJ",
    To:"CDG",
    Distance:7078.85,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PUJ",
    To:"CDG",
    Distance:7078.85,
    Airport:"XL Airways France"
}),
new Routes(
{
    From:"PUJ",
    To:"CLE",
    Distance:2844.72,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"CLT",
    Distance:2227.53,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"CLT",
    Distance:2227.53,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PUJ",
    To:"CVG",
    Distance:2766.71,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PUJ",
    To:"DME",
    Distance:9296.61,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"DTW",
    Distance:2986.1,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PUJ",
    To:"DUS",
    Distance:7381.58,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PUJ",
    To:"EWR",
    Distance:2521.82,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"EZE",
    Distance:6026.82,
    Airport:"LAN Argentina"
}),
new Routes(
{
    From:"PUJ",
    To:"FLL",
    Distance:1470.77,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PUJ",
    To:"FLL",
    Distance:1470.77,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"FRA",
    Distance:7510.51,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PUJ",
    To:"IAD",
    Distance:2429.69,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"JFK",
    Distance:2508.21,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PUJ",
    To:"JFK",
    Distance:2508.21,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PUJ",
    To:"LED",
    Distance:8700.72,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"LGW",
    Distance:6896.97,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PUJ",
    To:"LIM",
    Distance:3534.16,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"LYS",
    Distance:7270.99,
    Airport:"XL Airways France"
}),
new Routes(
{
    From:"PUJ",
    To:"MAD",
    Distance:6570.07,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"PUJ",
    To:"MAD",
    Distance:6570.07,
    Airport:"Compagnie Africaine d\\'Aviation"
}),
new Routes(
{
    From:"PUJ",
    To:"MBJ",
    Distance:1006.73,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"PUJ",
    To:"MDW",
    Distance:3167.67,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PUJ",
    To:"MIA",
    Distance:1466.29,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"MIA",
    Distance:1466.29,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"MIA",
    Distance:1466.29,
    Airport:"LAN Argentina"
}),
new Routes(
{
    From:"PUJ",
    To:"MIA",
    Distance:1466.29,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PUJ",
    To:"MSP",
    Distance:3722.07,
    Airport:"Sun Country Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"MUC",
    Distance:7758.6,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PUJ",
    To:"MUC",
    Distance:7758.6,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"PUJ",
    To:"NTE",
    Distance:6760.37,
    Airport:"XL Airways France"
}),
new Routes(
{
    From:"PUJ",
    To:"ORD",
    Distance:3192.09,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"ORD",
    Distance:3192.09,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"PHL",
    Distance:2459.13,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"PHL",
    Distance:2459.13,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"PHL",
    Distance:2459.13,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PUJ",
    To:"PIT",
    Distance:2688.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PUJ",
    To:"PIT",
    Distance:2688.66,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"PTY",
    Distance:1589.57,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"SCL",
    Distance:5783.45,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"SDQ",
    Distance:138.513,
    Airport:"Air France"
}),
new Routes(
{
    From:"PUJ",
    To:"SDQ",
    Distance:138.513,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"SJU",
    Distance:249.427,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PUJ",
    To:"SJU",
    Distance:249.427,
    Airport:"Seaborne Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"STL",
    Distance:3089.04,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"SVO",
    Distance:9243.37,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"SVO",
    Distance:9243.37,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"PUJ",
    To:"TLS",
    Distance:6980.53,
    Airport:"XL Airways France"
}),
new Routes(
{
    From:"PUJ",
    To:"YHZ",
    Distance:2960.37,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"PUJ",
    To:"YHZ",
    Distance:2960.37,
    Airport:"WestJet"
}),
new Routes(
{
    From:"PUJ",
    To:"YQB",
    Distance:3150.54,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"PUJ",
    To:"YUL",
    Distance:3032.43,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"PUJ",
    To:"YUL",
    Distance:3032.43,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"PUJ",
    To:"YUL",
    Distance:3032.43,
    Airport:"WestJet"
}),
new Routes(
{
    From:"PUJ",
    To:"YYZ",
    Distance:2984.31,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"PUJ",
    To:"YYZ",
    Distance:2984.31,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"PUJ",
    To:"YYZ",
    Distance:2984.31,
    Airport:"WestJet"
}),
new Routes(
{
    From:"PUJ",
    To:"ZRH",
    Distance:7525.91,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"PUM",
    To:"UPG",
    Distance:248.593,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"PUQ",
    To:"BBA",
    Distance:790.284,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"PUQ",
    To:"PMC",
    Distance:1296.74,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"PUQ",
    To:"PMC",
    Distance:1296.74,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"PUQ",
    To:"PMC",
    Distance:1296.74,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"PUQ",
    To:"RGL",
    Distance:187.099,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"PUQ",
    To:"SCL",
    Distance:2180.5,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"PUQ",
    To:"SCL",
    Distance:2180.5,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"BKK",
    Distance:3697.97,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"BKK",
    Distance:3697.97,
    Airport:"Jeju Air"
}),
new Routes(
{
    From:"PUS",
    To:"BKK",
    Distance:3697.97,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"BKK",
    Distance:3697.97,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"PUS",
    To:"CAN",
    Distance:1999.79,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"CEB",
    Distance:2810.88,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"PUS",
    To:"CEB",
    Distance:2810.88,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"PUS",
    To:"CEB",
    Distance:2810.88,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"CJU",
    Distance:291.194,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"CJU",
    Distance:291.194,
    Airport:"Jeju Air"
}),
new Routes(
{
    From:"PUS",
    To:"CJU",
    Distance:291.194,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"CSX",
    Distance:1675.28,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"PUS",
    To:"CTS",
    Distance:1386.2,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"FUK",
    Distance:225.078,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"PUS",
    To:"FUK",
    Distance:225.078,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"FUK",
    Distance:225.078,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"GMP",
    Distance:326.994,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"GMP",
    Distance:326.994,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"GUM",
    Distance:2889.39,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"HAN",
    Distance:2735.65,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"HAN",
    Distance:2735.65,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"HGH",
    Distance:966.867,
    Airport:"Air China"
}),
new Routes(
{
    From:"PUS",
    To:"HGH",
    Distance:966.867,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"HKG",
    Distance:2042.9,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"PUS",
    To:"HKG",
    Distance:2042.9,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"PUS",
    To:"HKG",
    Distance:2042.9,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"PUS",
    To:"HKG",
    Distance:2042.9,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"KHH",
    Distance:1630.11,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"PUS",
    To:"KIX",
    Distance:581.554,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"PUS",
    To:"KIX",
    Distance:581.554,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"KIX",
    Distance:581.554,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"KIX",
    Distance:581.554,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"KIX",
    Distance:581.554,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"PUS",
    To:"KLO",
    Distance:2695.64,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"KLO",
    Distance:2695.64,
    Airport:"Zest Air"
}),
new Routes(
{
    From:"PUS",
    To:"KUL",
    Distance:4570.3,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"PUS",
    To:"KWL",
    Distance:2121.63,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"MFM",
    Distance:2078.39,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"PUS",
    To:"MFM",
    Distance:2078.39,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"PUS",
    To:"MNL",
    Distance:2431.03,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"MNL",
    Distance:2431.03,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"PUS",
    To:"MNL",
    Distance:2431.03,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"NGO",
    Distance:717.122,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"NGO",
    Distance:717.122,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"NKG",
    Distance:1009.22,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"NKG",
    Distance:1009.22,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"NRT",
    Distance:1038.16,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"PUS",
    To:"NRT",
    Distance:1038.16,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"NRT",
    Distance:1038.16,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"NRT",
    Distance:1038.16,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"NRT",
    Distance:1038.16,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"OKA",
    Distance:1006.53,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PUS",
    To:"OKA",
    Distance:1006.53,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"PEK",
    Distance:1215.22,
    Airport:"Air China"
}),
new Routes(
{
    From:"PUS",
    To:"PEK",
    Distance:1215.22,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"PEK",
    Distance:1215.22,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"PEK",
    Distance:1215.22,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"PVG",
    Distance:801.06,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"PVG",
    Distance:801.06,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"PVG",
    Distance:801.06,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"PVG",
    Distance:801.06,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"REP",
    Distance:3492.64,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"PUS",
    To:"REP",
    Distance:3492.64,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"SGN",
    Distance:3522.64,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"SGN",
    Distance:3522.64,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"SHE",
    Distance:847.36,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"SHE",
    Distance:847.36,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"SPN",
    Distance:2789.19,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"TAO",
    Distance:782.197,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"PUS",
    To:"TAO",
    Distance:782.197,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"TAO",
    Distance:782.197,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"TAO",
    Distance:782.197,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PUS",
    To:"TAO",
    Distance:782.197,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"TPE",
    Distance:1344.55,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"PUS",
    To:"TPE",
    Distance:1344.55,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"TXN",
    Distance:1169.95,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"TYN",
    Distance:1484.18,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"PUS",
    To:"VVO",
    Distance:954.581,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"PUS",
    To:"WUH",
    Distance:1456.53,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"PUS",
    To:"XIY",
    Distance:1841.53,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"PUU",
    To:"BOG",
    Distance:534.851,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"PUU",
    To:"BOG",
    Distance:534.851,
    Airport:"SATENA"
}),
new Routes(
{
    From:"PUU",
    To:"CLO",
    Distance:338.069,
    Airport:"SATENA"
}),
new Routes(
{
    From:"PUU",
    To:"LQM",
    Distance:206.992,
    Airport:"SATENA"
}),
new Routes(
{
    From:"PUW",
    To:"LWS",
    Distance:41.6977,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PUW",
    To:"SEA",
    Distance:401.259,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PUY",
    To:"ARN",
    Distance:1662.69,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"PUY",
    To:"BVA",
    Distance:1024.99,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PUY",
    To:"CGN",
    Distance:833.91,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"PUY",
    To:"CRL",
    Distance:939.725,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PUY",
    To:"DME",
    Distance:2053.92,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"PUY",
    To:"DUB",
    Distance:1738.55,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"PUY",
    To:"FRA",
    Distance:699.091,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"PUY",
    To:"HHN",
    Distance:752.334,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PUY",
    To:"MAN",
    Distance:1502.09,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"PUY",
    To:"MAN",
    Distance:1502.09,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PUY",
    To:"OSL",
    Distance:1711.6,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"PUY",
    To:"RYG",
    Distance:1624.42,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PUY",
    To:"STN",
    Distance:1271.62,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"PUY",
    To:"ZAD",
    Distance:142.782,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"PUY",
    To:"ZAG",
    Distance:192.579,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"PVA",
    To:"ADZ",
    Distance:94.1098,
    Airport:"SATENA"
}),
new Routes(
{
    From:"PVC",
    To:"BOS",
    Distance:72.2714,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"PVD",
    To:"ATL",
    Distance:1453.42,
    Airport:"Air France"
}),
new Routes(
{
    From:"PVD",
    To:"ATL",
    Distance:1453.42,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PVD",
    To:"ATL",
    Distance:1453.42,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PVD",
    To:"BWI",
    Distance:527.125,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PVD",
    To:"BWI",
    Distance:527.125,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PVD",
    To:"CLT",
    Distance:1099.94,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PVD",
    To:"CLT",
    Distance:1099.94,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PVD",
    To:"DCA",
    Distance:573.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PVD",
    To:"DCA",
    Distance:573.89,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PVD",
    To:"DTW",
    Distance:987.131,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PVD",
    To:"EWR",
    Distance:257.324,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PVD",
    To:"FLL",
    Distance:1916.17,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PVD",
    To:"FLL",
    Distance:1916.17,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PVD",
    To:"IAD",
    Distance:597.93,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PVD",
    To:"LAS",
    Distance:3794.47,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PVD",
    To:"MCO",
    Distance:1728.62,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PVD",
    To:"MCO",
    Distance:1728.62,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PVD",
    To:"MCO",
    Distance:1728.62,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PVD",
    To:"MDW",
    Distance:1352.64,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PVD",
    To:"MDW",
    Distance:1352.64,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PVD",
    To:"ORD",
    Distance:1363.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PVD",
    To:"PHL",
    Distance:382.34,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PVD",
    To:"PHL",
    Distance:382.34,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PVD",
    To:"RSW",
    Distance:1935.62,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PVD",
    To:"SAN",
    Distance:4122.76,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PVD",
    To:"SLC",
    Distance:3360.01,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PVD",
    To:"TPA",
    Distance:1831.68,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"ACX",
    Distance:1781.57,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"ADD",
    Distance:8830.84,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"AKL",
    Distance:9368.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"AKL",
    Distance:9368.48,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PVG",
    To:"AMS",
    Distance:8910.46,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"AMS",
    Distance:8910.46,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"AMS",
    Distance:8910.46,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"AUH",
    Distance:6549.93,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"PVG",
    To:"AUH",
    Distance:6549.93,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"BAV",
    Distance:1490.32,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"BHY",
    Distance:1639.28,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"BHY",
    Distance:1639.28,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"BKI",
    Distance:2866.29,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"BKI",
    Distance:2866.29,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"BKK",
    Distance:2897.09,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"BKK",
    Distance:2897.09,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"BKK",
    Distance:2897.09,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"BKK",
    Distance:2897.09,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"BKK",
    Distance:2897.09,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"PVG",
    To:"BWN",
    Distance:3000.53,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CAN",
    Distance:1203.11,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"CAN",
    Distance:1203.11,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CAN",
    Distance:1203.11,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CAN",
    Distance:1203.11,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CAN",
    Distance:1203.11,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CAN",
    Distance:1203.11,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CDG",
    Distance:9266.45,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"CDG",
    Distance:9266.45,
    Airport:"Air France"
}),
new Routes(
{
    From:"PVG",
    To:"CDG",
    Distance:9266.45,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CGK",
    Distance:4445.97,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CGK",
    Distance:4445.97,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"PVG",
    To:"CGO",
    Distance:833.103,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CGO",
    Distance:833.103,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CGO",
    Distance:833.103,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CGQ",
    Distance:1409.05,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CGQ",
    Distance:1409.05,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"CGQ",
    Distance:1409.05,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CGQ",
    Distance:1409.05,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CGQ",
    Distance:1409.05,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CJU",
    Distance:513.078,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CJU",
    Distance:513.078,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"CJU",
    Distance:513.078,
    Airport:"Jin Air"
}),
new Routes(
{
    From:"PVG",
    To:"CJU",
    Distance:513.078,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CKG",
    Distance:1461.26,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"CKG",
    Distance:1461.26,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PVG",
    To:"CKG",
    Distance:1461.26,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CKG",
    Distance:1461.26,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"CKG",
    Distance:1461.26,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CKG",
    Distance:1461.26,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CKG",
    Distance:1461.26,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CMB",
    Distance:5098.81,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CNX",
    Distance:2673.98,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CNX",
    Distance:2673.98,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"CNX",
    Distance:2673.98,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CPH",
    Distance:8277.13,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"PVG",
    To:"CSX",
    Distance:891.865,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CSX",
    Distance:891.865,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CTS",
    Distance:2180.54,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CTS",
    Distance:2180.54,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CTU",
    Distance:1703.9,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"CTU",
    Distance:1703.9,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PVG",
    To:"CTU",
    Distance:1703.9,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CTU",
    Distance:1703.9,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"PVG",
    To:"CTU",
    Distance:1703.9,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CTU",
    Distance:1703.9,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"CTU",
    Distance:1703.9,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"DAD",
    Distance:2173.05,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"DAT",
    Distance:1243.43,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"DAX",
    Distance:1359.45,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"DDG",
    Distance:1012.69,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"DEL",
    Distance:4291.5,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"PVG",
    To:"DEL",
    Distance:4291.5,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"DLC",
    Distance:870.136,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"DLC",
    Distance:870.136,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"DLC",
    Distance:870.136,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"DLC",
    Distance:870.136,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"DLC",
    Distance:870.136,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"DLC",
    Distance:870.136,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"DLC",
    Distance:870.136,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"DOH",
    Distance:6800.52,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"PVG",
    To:"DOY",
    Distance:754.367,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"DPS",
    Distance:4491.78,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"DTW",
    Distance:11461.8,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"DTW",
    Distance:11461.8,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"DTW",
    Distance:11461.8,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PVG",
    To:"DXB",
    Distance:6448.44,
    Airport:"Emirates"
}),
new Routes(
{
    From:"PVG",
    To:"DYG",
    Distance:1115.55,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"DYG",
    Distance:1115.55,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"DYG",
    Distance:1115.55,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"EWR",
    Distance:11860,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"EWR",
    Distance:11860,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"FCO",
    Distance:9169.18,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"PVG",
    To:"FCO",
    Distance:9169.18,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"FOC",
    Distance:615.728,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"FOC",
    Distance:615.728,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"FRA",
    Distance:8859.77,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"FRA",
    Distance:8859.77,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"FRA",
    Distance:8859.77,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"PVG",
    To:"FSZ",
    Distance:1579.43,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"FSZ",
    Distance:1579.43,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"FUK",
    Distance:855.878,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"FUK",
    Distance:855.878,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"FUK",
    Distance:855.878,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HAK",
    Distance:1685.66,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HAK",
    Distance:1685.66,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HAK",
    Distance:1685.66,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HAK",
    Distance:1685.66,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HAK",
    Distance:1685.66,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HAN",
    Distance:1936.86,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HAN",
    Distance:1936.86,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HDG",
    Distance:906.095,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HEL",
    Distance:7393.92,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"HEL",
    Distance:7393.92,
    Airport:"Finnair"
}),
new Routes(
{
    From:"PVG",
    To:"HET",
    Distance:1402.09,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"HET",
    Distance:1402.09,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HFE",
    Distance:433.247,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"PVG",
    To:"HFE",
    Distance:433.247,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HIJ",
    Distance:1100.8,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HIJ",
    Distance:1100.8,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HKG",
    Distance:1255.7,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"PVG",
    To:"HKG",
    Distance:1255.7,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HKG",
    Distance:1255.7,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"HKG",
    Distance:1255.7,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"PVG",
    To:"HKG",
    Distance:1255.7,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HKG",
    Distance:1255.7,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HKG",
    Distance:1255.7,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HKT",
    Distance:3533.59,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HKT",
    Distance:3533.59,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"HKT",
    Distance:3533.59,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HKT",
    Distance:3533.59,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HMI",
    Distance:2798.46,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HNL",
    Distance:7913.88,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HRB",
    Distance:1655.36,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HRB",
    Distance:1655.36,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"HRB",
    Distance:1655.36,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HRB",
    Distance:1655.36,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HRB",
    Distance:1655.36,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"HSN",
    Distance:144.642,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"IBR",
    Distance:1807.71,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"ICN",
    Distance:822.392,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"ICN",
    Distance:822.392,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"ICN",
    Distance:822.392,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"ICN",
    Distance:822.392,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PVG",
    To:"ICN",
    Distance:822.392,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"IKA",
    Distance:6442.77,
    Airport:"Mahan Air"
}),
new Routes(
{
    From:"PVG",
    To:"INC",
    Distance:1653.53,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"INC",
    Distance:1653.53,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"INC",
    Distance:1653.53,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"INC",
    Distance:1653.53,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"INC",
    Distance:1653.53,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"IST",
    Distance:8030.03,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"IST",
    Distance:8030.03,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"JFK",
    Distance:11873.7,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"JFK",
    Distance:11873.7,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PVG",
    To:"JJN",
    Distance:773.041,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"JJN",
    Distance:773.041,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"JMU",
    Distance:1896.57,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"JNZ",
    Distance:1109.28,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"JNZ",
    Distance:1109.28,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"JZH",
    Distance:1717.35,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"JZH",
    Distance:1717.35,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"JZH",
    Distance:1717.35,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KHH",
    Distance:963.368,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KHH",
    Distance:963.368,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"KHH",
    Distance:963.368,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"PVG",
    To:"KHH",
    Distance:963.368,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KHN",
    Distance:622.391,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"KHN",
    Distance:622.391,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KHN",
    Distance:622.391,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KIJ",
    Distance:1734.51,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KIJ",
    Distance:1734.51,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KIX",
    Distance:1307.29,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"KIX",
    Distance:1307.29,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PVG",
    To:"KIX",
    Distance:1307.29,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KIX",
    Distance:1307.29,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"KIX",
    Distance:1307.29,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KIX",
    Distance:1307.29,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KIX",
    Distance:1307.29,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KMG",
    Distance:1988.04,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"KMG",
    Distance:1988.04,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"PVG",
    To:"KMG",
    Distance:1988.04,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KMG",
    Distance:1988.04,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KMG",
    Distance:1988.04,
    Airport:"KSY"
}),
new Routes(
{
    From:"PVG",
    To:"KMG",
    Distance:1988.04,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KMQ",
    Distance:1468.51,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KMQ",
    Distance:1468.51,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KOJ",
    Distance:848.326,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KOJ",
    Distance:848.326,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KUL",
    Distance:3796.71,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"PVG",
    To:"KUL",
    Distance:3796.71,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KUL",
    Distance:3796.71,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KUL",
    Distance:3796.71,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KWE",
    Distance:1546.95,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"KWE",
    Distance:1546.95,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KWE",
    Distance:1546.95,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KWE",
    Distance:1546.95,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KWE",
    Distance:1546.95,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KWL",
    Distance:1326.95,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"KWL",
    Distance:1326.95,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KWL",
    Distance:1326.95,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"KWL",
    Distance:1326.95,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KWL",
    Distance:1326.95,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KWL",
    Distance:1326.95,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"KWL",
    Distance:1326.95,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"LAX",
    Distance:10415.3,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"LAX",
    Distance:10415.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"LAX",
    Distance:10415.3,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"LAX",
    Distance:10415.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PVG",
    To:"LAX",
    Distance:10415.3,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"LAX",
    Distance:10415.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"LHR",
    Distance:9240.88,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"LHR",
    Distance:9240.88,
    Airport:"British Airways"
}),
new Routes(
{
    From:"PVG",
    To:"LHR",
    Distance:9240.88,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"LHR",
    Distance:9240.88,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"PVG",
    To:"LHW",
    Distance:1769.18,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"LHW",
    Distance:1769.18,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"LYI",
    Distance:536.791,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"LZH",
    Distance:1443.83,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"LZO",
    Distance:1599.34,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"MDG",
    Distance:1634.73,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"MEL",
    Distance:8017.37,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"MEL",
    Distance:8017.37,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PVG",
    To:"MEL",
    Distance:8017.37,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"MEL",
    Distance:8017.37,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PVG",
    To:"MFM",
    Distance:1289.91,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"MFM",
    Distance:1289.91,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"PVG",
    To:"MFM",
    Distance:1289.91,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"MFM",
    Distance:1289.91,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"MFM",
    Distance:1289.91,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"MFM",
    Distance:1289.91,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"MIG",
    Distance:1620.22,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"MIG",
    Distance:1620.22,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"MLE",
    Distance:5860.67,
    Airport:"Albanian Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"MNL",
    Distance:1851.43,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"PVG",
    To:"MNL",
    Distance:1851.43,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"MNL",
    Distance:1851.43,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"MNL",
    Distance:1851.43,
    Airport:"Zest Air"
}),
new Routes(
{
    From:"PVG",
    To:"MRU",
    Distance:8922.23,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"PVG",
    To:"MUC",
    Distance:8778.19,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"MUC",
    Distance:8778.19,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"PVG",
    To:"MWX",
    Distance:604.027,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"MXP",
    Distance:9144.1,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"MYJ",
    Distance:1063.92,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"MYJ",
    Distance:1063.92,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"NAO",
    Distance:1500.7,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"NDG",
    Distance:1798.88,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"NGO",
    Distance:1456.89,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"NGO",
    Distance:1456.89,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PVG",
    To:"NGO",
    Distance:1456.89,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"NGO",
    Distance:1456.89,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"NGO",
    Distance:1456.89,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"NGS",
    Distance:789.152,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"NGS",
    Distance:789.152,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"NKG",
    Distance:287.027,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"NNG",
    Distance:1649.63,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"NNG",
    Distance:1649.63,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"NNG",
    Distance:1649.63,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"NNG",
    Distance:1649.63,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"NRT",
    Distance:1795.54,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"NRT",
    Distance:1795.54,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PVG",
    To:"NRT",
    Distance:1795.54,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"NRT",
    Distance:1795.54,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PVG",
    To:"NRT",
    Distance:1795.54,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"OKA",
    Distance:791.78,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"OKA",
    Distance:791.78,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"OKA",
    Distance:791.78,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"OKJ",
    Distance:1193.04,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"OKJ",
    Distance:1193.04,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"ORD",
    Distance:11334,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"ORD",
    Distance:11334,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"ORD",
    Distance:11334,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"ORD",
    Distance:11334,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PVG",
    To:"ORD",
    Distance:11334,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"PEK",
    Distance:1099.55,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"PEK",
    Distance:1099.55,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PVG",
    To:"PEK",
    Distance:1099.55,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PVG",
    To:"PEK",
    Distance:1099.55,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"PEK",
    Distance:1099.55,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"PEK",
    Distance:1099.55,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"PNH",
    Distance:2790.5,
    Airport:"Cambodia Angkor Air (K6)"
}),
new Routes(
{
    From:"PVG",
    To:"PNH",
    Distance:2790.5,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"PUS",
    Distance:801.06,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"PUS",
    Distance:801.06,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"PUS",
    Distance:801.06,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"PVG",
    To:"PUS",
    Distance:801.06,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"REP",
    Distance:2696.28,
    Airport:"Cambodia Angkor Air (K6)"
}),
new Routes(
{
    From:"PVG",
    To:"REP",
    Distance:2696.28,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"REP",
    Distance:2696.28,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"RMQ",
    Distance:773.698,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"PVG",
    To:"SDJ",
    Distance:1908.83,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"SDJ",
    Distance:1908.83,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PVG",
    To:"SEA",
    Distance:9187.8,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SEA",
    Distance:9187.8,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PVG",
    To:"SFO",
    Distance:9877.41,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"SFO",
    Distance:9877.41,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SFO",
    Distance:9877.41,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PVG",
    To:"SFO",
    Distance:9877.41,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SGN",
    Distance:2746.49,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SGN",
    Distance:2746.49,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SHE",
    Distance:1146.23,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SHE",
    Distance:1146.23,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"SHE",
    Distance:1146.23,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SHE",
    Distance:1146.23,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SHE",
    Distance:1146.23,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SHP",
    Distance:998.955,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SHP",
    Distance:998.955,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SIN",
    Distance:3805.87,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SIN",
    Distance:3805.87,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"SIN",
    Distance:3805.87,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SJW",
    Distance:1024.92,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SPN",
    Distance:3014.18,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SVO",
    Distance:6850.95,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SVO",
    Distance:6850.95,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SWA",
    Distance:998.458,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SYD",
    Distance:7865.4,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"SYD",
    Distance:7865.4,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"PVG",
    To:"SYD",
    Distance:7865.4,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SYD",
    Distance:7865.4,
    Airport:"Qantas"
}),
new Routes(
{
    From:"PVG",
    To:"SYX",
    Distance:1895.67,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SYX",
    Distance:1895.67,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"SYX",
    Distance:1895.67,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SYX",
    Distance:1895.67,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SYX",
    Distance:1895.67,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SZX",
    Distance:1233.09,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"SZX",
    Distance:1233.09,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"PVG",
    To:"SZX",
    Distance:1233.09,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SZX",
    Distance:1233.09,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SZX",
    Distance:1233.09,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"SZX",
    Distance:1233.09,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TAE",
    Distance:825.865,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TAK",
    Distance:1191.84,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"TAO",
    Distance:584.772,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"TAO",
    Distance:584.772,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TAO",
    Distance:584.772,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"TAO",
    Distance:584.772,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TAO",
    Distance:584.772,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TAO",
    Distance:584.772,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TGO",
    Distance:1380.73,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TIJ",
    Distance:10619,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PVG",
    To:"TNA",
    Distance:763.062,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TOY",
    Distance:1543.68,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TOY",
    Distance:1543.68,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TPE",
    Distance:676.797,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"TPE",
    Distance:676.797,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TPE",
    Distance:676.797,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TPE",
    Distance:676.797,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"TPE",
    Distance:676.797,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TPE",
    Distance:676.797,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"PVG",
    To:"TPE",
    Distance:676.797,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TPE",
    Distance:676.797,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"PVG",
    To:"TSA",
    Distance:675.814,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TSA",
    Distance:675.814,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"PVG",
    To:"TSA",
    Distance:675.814,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"PVG",
    To:"TSN",
    Distance:975.34,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TSN",
    Distance:975.34,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TSN",
    Distance:975.34,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TVS",
    Distance:1013.46,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TVS",
    Distance:1013.46,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TYN",
    Distance:1115.76,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"TYN",
    Distance:1115.76,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"URC",
    Distance:3312.28,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"URC",
    Distance:3312.28,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"WEF",
    Distance:660.173,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"WNZ",
    Distance:370.932,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"WNZ",
    Distance:370.932,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"WNZ",
    Distance:370.932,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"WUH",
    Distance:725.338,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"WUH",
    Distance:725.338,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"WUH",
    Distance:725.338,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"WUH",
    Distance:725.338,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"WUH",
    Distance:725.338,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"WXN",
    Distance:1276.93,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"WXN",
    Distance:1276.93,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"XFN",
    Distance:907.244,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"XIY",
    Distance:1273.14,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"XIY",
    Distance:1273.14,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"XIY",
    Distance:1273.14,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"XIY",
    Distance:1273.14,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"XIY",
    Distance:1273.14,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"XIY",
    Distance:1273.14,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"XIY",
    Distance:1273.14,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"XIY",
    Distance:1273.14,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"XMN",
    Distance:817.889,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"XMN",
    Distance:817.889,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"XMN",
    Distance:817.889,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"XMN",
    Distance:817.889,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"XNN",
    Distance:1916.78,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"YBP",
    Distance:1681.14,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"YCU",
    Distance:1094.83,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"YCU",
    Distance:1094.83,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"YNJ",
    Distance:1469.77,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"YNJ",
    Distance:1469.77,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"YNT",
    Distance:697.027,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"YNT",
    Distance:697.027,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"YNT",
    Distance:697.027,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"YNY",
    Distance:992.514,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"YVR",
    Distance:9016.05,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"PVG",
    To:"YVR",
    Distance:9016.05,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"YVR",
    Distance:9016.05,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"YYZ",
    Distance:11414.4,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"PVG",
    To:"YYZ",
    Distance:11414.4,
    Airport:"Air China"
}),
new Routes(
{
    From:"PVG",
    To:"ZHA",
    Distance:1586.6,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"ZHA",
    Distance:1586.6,
    Airport:"China SSS"
}),
new Routes(
{
    From:"PVG",
    To:"ZHA",
    Distance:1586.6,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"ZRH",
    Distance:9031.31,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"PVG",
    To:"ZUH",
    Distance:1316.07,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"ZUH",
    Distance:1316.07,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"ZUH",
    Distance:1316.07,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"PVG",
    To:"ZUH",
    Distance:1316.07,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"PVH",
    To:"BSB",
    Distance:1909.05,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"PVH",
    To:"BSB",
    Distance:1909.05,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"PVH",
    To:"CGB",
    Distance:1145.07,
    Airport:"Azul"
}),
new Routes(
{
    From:"PVH",
    To:"CGB",
    Distance:1145.07,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"PVH",
    To:"CGB",
    Distance:1145.07,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"PVH",
    To:"MAO",
    Distance:760.942,
    Airport:"Azul"
}),
new Routes(
{
    From:"PVH",
    To:"MAO",
    Distance:760.942,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"PVH",
    To:"RBR",
    Distance:404.981,
    Airport:"Azul"
}),
new Routes(
{
    From:"PVH",
    To:"RBR",
    Distance:404.981,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"PVK",
    To:"AMS",
    Distance:1931.07,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"PVK",
    To:"CFU",
    Distance:105.162,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"PVK",
    To:"DUS",
    Distance:1753.6,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PVK",
    To:"EFL",
    Distance:92.472,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"PVK",
    To:"JSH",
    Distance:627.678,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"PVK",
    To:"LGW",
    Distance:2121.79,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"PVK",
    To:"LGW",
    Distance:2121.79,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PVK",
    To:"MAN",
    Distance:2373.21,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"PVK",
    To:"MUC",
    Distance:1271.34,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PVK",
    To:"VIE",
    Distance:1075.44,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"PVK",
    To:"VIE",
    Distance:1075.44,
    Airport:"Niki"
}),
new Routes(
{
    From:"PVR",
    To:"ATL",
    Distance:2505.73,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PVR",
    To:"ATL",
    Distance:2505.73,
    Airport:"Air France"
}),
new Routes(
{
    From:"PVR",
    To:"ATL",
    Distance:2505.73,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PVR",
    To:"ATL",
    Distance:2505.73,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"DEN",
    Distance:2133.61,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"DEN",
    Distance:2133.61,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"DFW",
    Distance:1582.97,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"DFW",
    Distance:1582.97,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PVR",
    To:"EWR",
    Distance:3680.16,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"GDL",
    Distance:202.999,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PVR",
    To:"IAH",
    Distance:1434.85,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"LAX",
    Distance:1961.78,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PVR",
    To:"LAX",
    Distance:1961.78,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"LAX",
    Distance:1961.78,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PVR",
    To:"LAX",
    Distance:1961.78,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"MEX",
    Distance:660.311,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PVR",
    To:"MEX",
    Distance:660.311,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"PVR",
    To:"MEX",
    Distance:660.311,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"PVR",
    To:"MEX",
    Distance:660.311,
    Airport:"Volaris"
}),
new Routes(
{
    From:"PVR",
    To:"MTY",
    Distance:773.117,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"PVR",
    To:"MTY",
    Distance:773.117,
    Airport:"Volaris"
}),
new Routes(
{
    From:"PVR",
    To:"ORD",
    Distance:2872.63,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"ORD",
    Distance:2872.63,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"ORD",
    Distance:2872.63,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PVR",
    To:"ORD",
    Distance:2872.63,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"PHX",
    Distance:1567.05,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"PHX",
    Distance:1567.05,
    Airport:"US Airways"
}),
new Routes(
{
    From:"PVR",
    To:"SAN",
    Distance:1786.56,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PVR",
    To:"SAN",
    Distance:1786.56,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"SAN",
    Distance:1786.56,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"SFO",
    Distance:2503.58,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PVR",
    To:"SFO",
    Distance:2503.58,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"SFO",
    Distance:2503.58,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"SFO",
    Distance:2503.58,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"SFO",
    Distance:2503.58,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"PVR",
    To:"SLC",
    Distance:2324.54,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PVR",
    To:"SLC",
    Distance:2324.54,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"PVR",
    To:"STL",
    Distance:2462.9,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"PVR",
    To:"TIJ",
    Distance:1756.88,
    Airport:"Volaris"
}),
new Routes(
{
    From:"PVR",
    To:"TLC",
    Distance:612.747,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"PVR",
    To:"YEG",
    Distance:3697.27,
    Airport:"WestJet"
}),
new Routes(
{
    From:"PVR",
    To:"YUL",
    Distance:3980.54,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"PVR",
    To:"YVR",
    Distance:3546.68,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"PVR",
    To:"YVR",
    Distance:3546.68,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"PVR",
    To:"YVR",
    Distance:3546.68,
    Airport:"WestJet"
}),
new Routes(
{
    From:"PVR",
    To:"YYC",
    Distance:3469.41,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"PVR",
    To:"YYC",
    Distance:3469.41,
    Airport:"WestJet"
}),
new Routes(
{
    From:"PVU",
    To:"AZA",
    Distance:768.405,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PVU",
    To:"LAX",
    Distance:915.208,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PVU",
    To:"OAK",
    Distance:948.441,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"PWE",
    To:"VKO",
    Distance:5581.34,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"PWM",
    To:"BWI",
    Distance:726.475,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"PWM",
    To:"JFK",
    Distance:439.9,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"PWQ",
    To:"ALA",
    Distance:983.292,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"PWQ",
    To:"DME",
    Distance:2561.93,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"PWQ",
    To:"TSE",
    Distance:408.434,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"PXM",
    To:"MEX",
    Distance:448.083,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"PXM",
    To:"MEX",
    Distance:448.083,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"PXM",
    To:"MEX",
    Distance:448.083,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"PXO",
    To:"LIS",
    Distance:907.566,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"PXO",
    To:"LIS",
    Distance:907.566,
    Airport:"SATA International"
}),
new Routes(
{
    From:"PXO",
    To:"LIS",
    Distance:907.566,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"PXU",
    To:"DAD",
    Distance:227.613,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"PXU",
    To:"HAN",
    Distance:835.883,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"PXU",
    To:"SGN",
    Distance:384.005,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"PYC",
    To:"ACU",
    Distance:30.3656,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"PYH",
    To:"CCS",
    Distance:558.223,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PYJ",
    To:"DME",
    Distance:3920.68,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"PYJ",
    To:"MJZ",
    Distance:440.441,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"PYJ",
    To:"OVB",
    Distance:2007,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"PYJ",
    To:"YKS",
    Distance:976.965,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"PYJ",
    To:"YKS",
    Distance:976.965,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"PYY",
    To:"CNX",
    Distance:87.0604,
    Airport:"Zambia Skyways"
}),
new Routes(
{
    From:"PZB",
    To:"JNB",
    Distance:443.894,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"PZH",
    To:"DSK",
    Distance:148.863,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PZH",
    To:"UET",
    Distance:270.815,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"PZI",
    To:"CKG",
    Distance:591.898,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"PZI",
    To:"CTU",
    Distance:495.617,
    Airport:"Air China"
}),
new Routes(
{
    From:"PZI",
    To:"CTU",
    Distance:495.617,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"PZI",
    To:"CTU",
    Distance:495.617,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"PZO",
    To:"BLA",
    Distance:292.766,
    Airport:"Aserca Airlines"
}),
new Routes(
{
    From:"PZO",
    To:"CAJ",
    Distance:228.912,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PZO",
    To:"CCS",
    Distance:530.568,
    Airport:"Aserca Airlines"
}),
new Routes(
{
    From:"PZO",
    To:"CCS",
    Distance:530.568,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PZO",
    To:"CCS",
    Distance:530.568,
    Airport:"Virgin Pacific"
}),
new Routes(
{
    From:"PZO",
    To:"GEO",
    Distance:535.263,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PZO",
    To:"PMV",
    Distance:320.427,
    Airport:"Aserca Airlines"
}),
new Routes(
{
    From:"PZO",
    To:"PMV",
    Distance:320.427,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PZO",
    To:"SNV",
    Distance:451.913,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"PZU",
    To:"CAI",
    Distance:1325.54,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"PZU",
    To:"JED",
    Distance:320.037,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"PZU",
    To:"KRT",
    Distance:654.954,
    Airport:"ALAK"
}),
new Routes(
{
    From:"PZU",
    To:"KRT",
    Distance:654.954,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"PZU",
    To:"KRT",
    Distance:654.954,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"QBC",
    To:"YAA",
    Distance:87.9801,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"QBC",
    To:"YVR",
    Distance:428.393,
    Airport:"Pacific Coastal Airline"
}),
new Routes(
{
    From:"QOW",
    To:"ABV",
    Distance:398.098,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"QOW",
    To:"LOS",
    Distance:448.239,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"QRO",
    To:"CUN",
    Distance:1383.54,
    Airport:"Volaris"
}),
new Routes(
{
    From:"QRO",
    To:"DFW",
    Distance:1400.49,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"QRO",
    To:"DFW",
    Distance:1400.49,
    Airport:"US Airways"
}),
new Routes(
{
    From:"QRO",
    To:"IAH",
    Distance:1149.4,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"QRO",
    To:"MTY",
    Distance:573.956,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"QRO",
    To:"MTY",
    Distance:573.956,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"QRO",
    To:"TIJ",
    Distance:2126.54,
    Airport:"Volaris"
}),
new Routes(
{
    From:"QRW",
    To:"ABV",
    Distance:457.14,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"QRW",
    To:"LOS",
    Distance:274.393,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"QSF",
    To:"ALG",
    Distance:197.105,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"QSF",
    To:"LYS",
    Distance:1061.9,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"QSF",
    To:"LYS",
    Distance:1061.9,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"QSF",
    To:"MLH",
    Distance:1281.82,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"QSF",
    To:"MRS",
    Distance:807.048,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"QSF",
    To:"MRS",
    Distance:807.048,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"QSF",
    To:"ORY",
    Distance:1415.94,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"QSF",
    To:"ORY",
    Distance:1415.94,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"QUB",
    To:"TIP",
    Distance:678.625,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"RAB",
    To:"BUA",
    Distance:281.084,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"RAB",
    To:"BUA",
    Distance:281.084,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"RAB",
    To:"CNS",
    Distance:1570.94,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"RAB",
    To:"HKN",
    Distance:251.857,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"RAB",
    To:"HKN",
    Distance:251.857,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"RAB",
    To:"KVG",
    Distance:262.272,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"RAB",
    To:"KVG",
    Distance:262.272,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"RAB",
    To:"LAE",
    Distance:673.091,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"RAB",
    To:"LNV",
    Distance:146.826,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"RAB",
    To:"LNV",
    Distance:146.826,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"RAB",
    To:"MAS",
    Distance:605.721,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"RAB",
    To:"POM",
    Distance:803.864,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"RAB",
    To:"POM",
    Distance:803.864,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"RAE",
    To:"JED",
    Distance:1044.77,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RAE",
    To:"RUH",
    Distance:857.58,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RAH",
    To:"RUH",
    Distance:608.2,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RAJ",
    To:"BOM",
    Distance:418.817,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"RAJ",
    To:"BOM",
    Distance:418.817,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"RAJ",
    To:"BOM",
    Distance:418.817,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"RAK",
    To:"AGA",
    Distance:198.204,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RAK",
    To:"AMS",
    Distance:2524.87,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RAK",
    To:"BCN",
    Distance:1404.82,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"RAK",
    To:"BCN",
    Distance:1404.82,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"RAK",
    To:"BGY",
    Distance:2185.95,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"BHX",
    Distance:2373.35,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"RAK",
    To:"BOD",
    Distance:1601.55,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"RAK",
    To:"BOD",
    Distance:1601.55,
    Airport:"easyJet"
}),
new Routes(
{
    From:"RAK",
    To:"BRS",
    Distance:2241.64,
    Airport:"easyJet"
}),
new Routes(
{
    From:"RAK",
    To:"BRU",
    Distance:2379.52,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"RAK",
    To:"BRU",
    Distance:2379.52,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"RAK",
    To:"BRU",
    Distance:2379.52,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"RAK",
    To:"BSL",
    Distance:2212.99,
    Airport:"easyJet"
}),
new Routes(
{
    From:"RAK",
    To:"BVA",
    Distance:2157.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"CDG",
    Distance:2128.63,
    Airport:"easyJet"
}),
new Routes(
{
    From:"RAK",
    To:"CGN",
    Distance:2478.39,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"RAK",
    To:"CIA",
    Distance:2151.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"CMN",
    Distance:200.193,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"RAK",
    To:"CPH",
    Distance:3120.31,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"RAK",
    To:"CRL",
    Distance:2336.12,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"DLE",
    Distance:2063.68,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"DUB",
    Distance:2429.79,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"EIN",
    Distance:2463.77,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"GRO",
    Distance:1492.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"GVA",
    Distance:2029.07,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"RAK",
    To:"GVA",
    Distance:2029.07,
    Airport:"easyJet"
}),
new Routes(
{
    From:"RAK",
    To:"HHN",
    Distance:2401.88,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"LGW",
    Distance:2266.22,
    Airport:"British Airways"
}),
new Routes(
{
    From:"RAK",
    To:"LGW",
    Distance:2266.22,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"RAK",
    To:"LGW",
    Distance:2266.22,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"RAK",
    To:"LGW",
    Distance:2266.22,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"RAK",
    To:"LGW",
    Distance:2266.22,
    Airport:"easyJet"
}),
new Routes(
{
    From:"RAK",
    To:"LIL",
    Distance:2298.82,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"RAK",
    To:"LIS",
    Distance:803.973,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"RAK",
    To:"LPA",
    Distance:818.413,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"RAK",
    To:"LTN",
    Distance:2338.62,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"LUX",
    Distance:2327.97,
    Airport:"Luxair"
}),
new Routes(
{
    From:"RAK",
    To:"LYS",
    Distance:1934.52,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"RAK",
    To:"LYS",
    Distance:1934.52,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"RAK",
    To:"LYS",
    Distance:1934.52,
    Airport:"easyJet"
}),
new Routes(
{
    From:"RAK",
    To:"MAD",
    Distance:1066.32,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"RAK",
    To:"MAD",
    Distance:1066.32,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"RAK",
    To:"MAD",
    Distance:1066.32,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"MAN",
    Distance:2461.92,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"RAK",
    To:"MAN",
    Distance:2461.92,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"RAK",
    To:"MAN",
    Distance:2461.92,
    Airport:"easyJet"
}),
new Routes(
{
    From:"RAK",
    To:"MRS",
    Distance:1754.91,
    Airport:"Air France"
}),
new Routes(
{
    From:"RAK",
    To:"MRS",
    Distance:1754.91,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"RAK",
    To:"MRS",
    Distance:1754.91,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"MUC",
    Distance:2498.99,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"RAK",
    To:"MXP",
    Distance:2125.09,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"RAK",
    To:"MXP",
    Distance:2125.09,
    Airport:"easyJet"
}),
new Routes(
{
    From:"RAK",
    To:"NCE",
    Distance:1891.34,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"RAK",
    To:"NCE",
    Distance:1891.34,
    Airport:"easyJet"
}),
new Routes(
{
    From:"RAK",
    To:"NRN",
    Distance:2506.42,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"NTE",
    Distance:1813.14,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"RAK",
    To:"NTE",
    Distance:1813.14,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"RAK",
    To:"ORY",
    Distance:2093.88,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"RAK",
    To:"ORY",
    Distance:2093.88,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"RAK",
    To:"OSL",
    Distance:3477.47,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"RAK",
    To:"PSA",
    Distance:2097.72,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"RTM",
    Distance:2479.86,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RAK",
    To:"STN",
    Distance:2353.29,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"STN",
    Distance:2353.29,
    Airport:"easyJet"
}),
new Routes(
{
    From:"RAK",
    To:"SVQ",
    Distance:675.286,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"SXB",
    Distance:2296.93,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"RAK",
    To:"SXF",
    Distance:2893.56,
    Airport:"easyJet"
}),
new Routes(
{
    From:"RAK",
    To:"TLS",
    Distance:1570.01,
    Airport:"Air France"
}),
new Routes(
{
    From:"RAK",
    To:"TLS",
    Distance:1570.01,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"RAK",
    To:"TLS",
    Distance:1570.01,
    Airport:"easyJet"
}),
new Routes(
{
    From:"RAK",
    To:"TUF",
    Distance:1910.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"XCR",
    Distance:2166.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RAK",
    To:"ZRH",
    Distance:2255.44,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"RAO",
    To:"BSB",
    Distance:585.424,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"RAO",
    To:"BSB",
    Distance:585.424,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"RAO",
    To:"CGH",
    Distance:300.076,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"RAO",
    To:"CNF",
    Distance:430.275,
    Airport:"Azul"
}),
new Routes(
{
    From:"RAO",
    To:"CWB",
    Distance:509.134,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"RAO",
    To:"GIG",
    Distance:502.892,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"RAO",
    To:"GRU",
    Distance:288.626,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"RAO",
    To:"GRU",
    Distance:288.626,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"RAO",
    To:"GRU",
    Distance:288.626,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"RAO",
    To:"GYN",
    Distance:523.22,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"RAO",
    To:"GYN",
    Distance:523.22,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"RAO",
    To:"PLU",
    Distance:423.016,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"RAO",
    To:"PLU",
    Distance:423.016,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"RAO",
    To:"SDU",
    Distance:514.678,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"RAO",
    To:"SJP",
    Distance:173.118,
    Airport:"Azul"
}),
new Routes(
{
    From:"RAO",
    To:"SJP",
    Distance:173.118,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"RAO",
    To:"SJP",
    Distance:173.118,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"RAO",
    To:"UDI",
    Distance:254.739,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"RAO",
    To:"VCP",
    Distance:218.487,
    Airport:"Azul"
}),
new Routes(
{
    From:"RAP",
    To:"AZA",
    Distance:1406.19,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"RAP",
    To:"DEN",
    Distance:483.982,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RAP",
    To:"DFW",
    Distance:1344.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RAP",
    To:"DFW",
    Distance:1344.89,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RAP",
    To:"LAS",
    Distance:1355.35,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"RAP",
    To:"MSP",
    Distance:785.566,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RAP",
    To:"ORD",
    Distance:1251.36,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RAP",
    To:"SLC",
    Distance:816.336,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RAR",
    To:"AIT",
    Distance:263.769,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"RAR",
    To:"AIT",
    Distance:263.769,
    Airport:"Air Rarotonga"
}),
new Routes(
{
    From:"RAR",
    To:"AIU",
    Distance:222.883,
    Airport:"Air Rarotonga"
}),
new Routes(
{
    From:"RAR",
    To:"AKL",
    Distance:3013.41,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"RAR",
    To:"AKL",
    Distance:3013.41,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RAR",
    To:"AKL",
    Distance:3013.41,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"RAR",
    To:"LAX",
    Distance:7536.23,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"RAR",
    To:"LAX",
    Distance:7536.23,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RAR",
    To:"MGS",
    Distance:211.117,
    Airport:"Air Rarotonga"
}),
new Routes(
{
    From:"RAR",
    To:"MOI",
    Distance:266.11,
    Airport:"Air Rarotonga"
}),
new Routes(
{
    From:"RAR",
    To:"MUK",
    Distance:282.124,
    Airport:"Air Rarotonga"
}),
new Routes(
{
    From:"RAR",
    To:"PPT",
    Distance:1143.21,
    Airport:"Air Rarotonga"
}),
new Routes(
{
    From:"RAR",
    To:"PPT",
    Distance:1143.21,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"RAR",
    To:"SYD",
    Distance:4985.01,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"RAS",
    To:"AWZ",
    Distance:670.306,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"RAS",
    To:"BND",
    Distance:1290.72,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"RAS",
    To:"MED",
    Distance:1703.01,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RAS",
    To:"MHD",
    Distance:901.677,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"RAS",
    To:"MHD",
    Distance:901.677,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"RAS",
    To:"MHD",
    Distance:901.677,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"RAS",
    To:"PGU",
    Distance:1144.17,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"RAS",
    To:"SYZ",
    Distance:908.822,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"RAS",
    To:"THR",
    Distance:237.459,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"RAS",
    To:"THR",
    Distance:237.459,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"RBA",
    To:"BVA",
    Distance:1860.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RBA",
    To:"CDG",
    Distance:1831.68,
    Airport:"Air France"
}),
new Routes(
{
    From:"RBA",
    To:"CMN",
    Distance:108.625,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"RBA",
    To:"CRL",
    Distance:2039.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RBA",
    To:"GRO",
    Distance:1205.52,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RBA",
    To:"MAD",
    Distance:769.611,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RBA",
    To:"MRS",
    Distance:1468.68,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RBA",
    To:"ORY",
    Distance:1796.92,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"RBA",
    To:"ORY",
    Distance:1796.92,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"RBA",
    To:"ORY",
    Distance:1796.92,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"RBA",
    To:"STN",
    Distance:2060.53,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RBQ",
    To:"LPB",
    Distance:243.572,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"RBQ",
    To:"TDD",
    Distance:280.98,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"RBR",
    To:"BSB",
    Distance:2232.65,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"RBR",
    To:"BSB",
    Distance:2232.65,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"RBR",
    To:"CZS",
    Distance:621.563,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"RBR",
    To:"PVH",
    Distance:404.981,
    Airport:"Azul"
}),
new Routes(
{
    From:"RBR",
    To:"PVH",
    Distance:404.981,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"RBV",
    To:"HIR",
    Distance:299.769,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"RBV",
    To:"MUA",
    Distance:45.4404,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"RBY",
    To:"FAI",
    Distance:360.769,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"RBY",
    To:"FAI",
    Distance:360.769,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"RBY",
    To:"GAL",
    Distance:69.6557,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"RBY",
    To:"TAL",
    Distance:167.487,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"RCB",
    To:"JNB",
    Distance:477.187,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"RCE",
    To:"DHB",
    Distance:11.3622,
    Airport:"Kenmore Air"
}),
new Routes(
{
    From:"RCE",
    To:"FBS",
    Distance:13.5585,
    Airport:"Kenmore Air"
}),
new Routes(
{
    From:"RCH",
    To:"BOG",
    Distance:770.66,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"RCM",
    To:"JCK",
    Distance:1692.57,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"RDC",
    To:"CDJ",
    Distance:82.4803,
    Airport:"Shuttle America"
}),
new Routes(
{
    From:"RDD",
    To:"SFO",
    Distance:321.433,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RDM",
    To:"DEN",
    Distance:1442.26,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RDM",
    To:"LAX",
    Distance:1170.55,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RDM",
    To:"LAX",
    Distance:1170.55,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RDM",
    To:"PDX",
    Distance:187.113,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"RDM",
    To:"PDX",
    Distance:187.113,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RDM",
    To:"SEA",
    Distance:366.42,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"RDM",
    To:"SFO",
    Distance:744.903,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RDM",
    To:"SLC",
    Distance:844.034,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDN",
    To:"SIN",
    Distance:503.012,
    Airport:"Berjaya Air"
}),
new Routes(
{
    From:"RDN",
    To:"SZB",
    Distance:334.57,
    Airport:"Berjaya Air"
}),
new Routes(
{
    From:"RDU",
    To:"ATL",
    Distance:572.249,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"RDU",
    To:"ATL",
    Distance:572.249,
    Airport:"Air France"
}),
new Routes(
{
    From:"RDU",
    To:"ATL",
    Distance:572.249,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"RDU",
    To:"ATL",
    Distance:572.249,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"ATL",
    Distance:572.249,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"RDU",
    To:"ATL",
    Distance:572.249,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"ATL",
    Distance:572.249,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"ATL",
    Distance:572.249,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"ATL",
    Distance:572.249,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"RDU",
    To:"BDL",
    Distance:855.775,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"BNA",
    Distance:710.164,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"RDU",
    To:"BNA",
    Distance:710.164,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"BOS",
    Distance:984.509,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"BOS",
    Distance:984.509,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"RDU",
    To:"BWI",
    Distance:411.529,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"RDU",
    To:"BWI",
    Distance:411.529,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"BWI",
    Distance:411.529,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"CLT",
    Distance:208.519,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"CLT",
    Distance:208.519,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RDU",
    To:"CMH",
    Distance:582.488,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"CUN",
    Distance:1828.1,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"RDU",
    To:"CUN",
    Distance:1828.1,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"CVG",
    Distance:627.237,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"DCA",
    Distance:365.086,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"DCA",
    Distance:365.086,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RDU",
    To:"DEN",
    Distance:2306.48,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"DFW",
    Distance:1704.52,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"DFW",
    Distance:1704.52,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RDU",
    To:"DTW",
    Distance:806.941,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"EWR",
    Distance:669.962,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"FLL",
    Distance:1097.98,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"FLL",
    Distance:1097.98,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"RDU",
    To:"FLL",
    Distance:1097.98,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"HOU",
    Distance:1687.63,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"IAD",
    Distance:360.722,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"IAH",
    Distance:1675.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"IND",
    Distance:785.275,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"JFK",
    Distance:686.493,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"JFK",
    Distance:686.493,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"JFK",
    Distance:686.493,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"RDU",
    To:"JFK",
    Distance:686.493,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RDU",
    To:"LAS",
    Distance:3252.84,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"LAS",
    Distance:3252.84,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"LAX",
    Distance:3594.54,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"LAX",
    Distance:3594.54,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"LAX",
    Distance:3594.54,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"LAX",
    Distance:3594.54,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RDU",
    To:"LGA",
    Distance:693.007,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"LGA",
    Distance:693.007,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"LGA",
    Distance:693.007,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RDU",
    To:"LHR",
    Distance:6215.93,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"LHR",
    Distance:6215.93,
    Airport:"British Airways"
}),
new Routes(
{
    From:"RDU",
    To:"LHR",
    Distance:6215.93,
    Airport:"Finnair"
}),
new Routes(
{
    From:"RDU",
    To:"LHR",
    Distance:6215.93,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"LHR",
    Distance:6215.93,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"LHR",
    Distance:6215.93,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RDU",
    To:"MCO",
    Distance:861.452,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"RDU",
    To:"MCO",
    Distance:861.452,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"MCO",
    Distance:861.452,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"MDW",
    Distance:1016.16,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"RDU",
    To:"MDW",
    Distance:1016.16,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"MEM",
    Distance:1017.09,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"MIA",
    Distance:1130.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"MIA",
    Distance:1130.43,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RDU",
    To:"MSP",
    Distance:1576.15,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"ORD",
    Distance:1039.22,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"ORD",
    Distance:1039.22,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RDU",
    To:"ORD",
    Distance:1039.22,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"PHL",
    Distance:542.248,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"PHL",
    Distance:542.248,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"PHL",
    Distance:542.248,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RDU",
    To:"PHX",
    Distance:3036.45,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"PIT",
    Distance:528.336,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"PIT",
    Distance:528.336,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RDU",
    To:"SFO",
    Distance:3853.27,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"RDU",
    To:"SFO",
    Distance:3853.27,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"SLC",
    Distance:2927.9,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"STL",
    Distance:1072.03,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"TPA",
    Distance:946.892,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"RDU",
    To:"TPA",
    Distance:946.892,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RDU",
    To:"TPA",
    Distance:946.892,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"TTN",
    Distance:600.067,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"RDU",
    To:"YYZ",
    Distance:870.247,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"RDV",
    To:"SLQ",
    Distance:13.7445,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"RDZ",
    To:"CRL",
    Distance:688.949,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RDZ",
    To:"DUB",
    Distance:1187,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RDZ",
    To:"ORY",
    Distance:480.166,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"RDZ",
    To:"STN",
    Distance:847.866,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"REC",
    To:"AJU",
    Distance:395.429,
    Airport:"Azul"
}),
new Routes(
{
    From:"REC",
    To:"AJU",
    Distance:395.429,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"REC",
    To:"BSB",
    Distance:1653.97,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"REC",
    To:"BSB",
    Distance:1653.97,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"REC",
    To:"BSB",
    Distance:1653.97,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"REC",
    To:"CNF",
    Distance:1608.34,
    Airport:"Azul"
}),
new Routes(
{
    From:"REC",
    To:"CNF",
    Distance:1608.34,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"REC",
    To:"FEN",
    Distance:549.559,
    Airport:"Azul"
}),
new Routes(
{
    From:"REC",
    To:"FEN",
    Distance:549.559,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"REC",
    To:"FOR",
    Distance:627.134,
    Airport:"Azul"
}),
new Routes(
{
    From:"REC",
    To:"FOR",
    Distance:627.134,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"REC",
    To:"FOR",
    Distance:627.134,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"REC",
    To:"FRA",
    Distance:7707.33,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"REC",
    To:"GIG",
    Distance:1858.75,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"REC",
    To:"GIG",
    Distance:1858.75,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"REC",
    To:"GIG",
    Distance:1858.75,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"REC",
    To:"GRU",
    Distance:2100.29,
    Airport:"Azul"
}),
new Routes(
{
    From:"REC",
    To:"GRU",
    Distance:2100.29,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"REC",
    To:"GRU",
    Distance:2100.29,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"REC",
    To:"GRU",
    Distance:2100.29,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"REC",
    To:"JDO",
    Distance:489.557,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"REC",
    To:"LIS",
    Distance:5857.31,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"REC",
    To:"MCZ",
    Distance:181.089,
    Airport:"Azul"
}),
new Routes(
{
    From:"REC",
    To:"MIA",
    Distance:6184.52,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"REC",
    To:"MIA",
    Distance:6184.52,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"REC",
    To:"MIA",
    Distance:6184.52,
    Airport:"US Airways"
}),
new Routes(
{
    From:"REC",
    To:"NAT",
    Distance:248.931,
    Airport:"Azul"
}),
new Routes(
{
    From:"REC",
    To:"PNZ",
    Distance:635.526,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"REC",
    To:"PNZ",
    Distance:635.526,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"REC",
    To:"PTY",
    Distance:5283.04,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"REC",
    To:"SSA",
    Distance:649.408,
    Airport:"Azul"
}),
new Routes(
{
    From:"REC",
    To:"SSA",
    Distance:649.408,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"REC",
    To:"SSA",
    Distance:649.408,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"REC",
    To:"SSA",
    Distance:649.408,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"REC",
    To:"THE",
    Distance:936.833,
    Airport:"Azul"
}),
new Routes(
{
    From:"REC",
    To:"VCP",
    Distance:2106.3,
    Airport:"Azul"
}),
new Routes(
{
    From:"REG",
    To:"FCO",
    Distance:506.249,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"REG",
    To:"FCO",
    Distance:506.249,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"REG",
    To:"LIN",
    Distance:974.918,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"REG",
    To:"LIN",
    Distance:974.918,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"REG",
    To:"TRN",
    Distance:1033.67,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"REG",
    To:"VCE",
    Distance:870.512,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"REL",
    To:"AEP",
    Distance:1129.29,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"REL",
    To:"BHI",
    Distance:562.529,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"REL",
    To:"BRC",
    Distance:536.261,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"REL",
    To:"CRD",
    Distance:335.059,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"REL",
    To:"EQS",
    Distance:477.922,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"REL",
    To:"EZE",
    Distance:1098.43,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"REN",
    To:"DME",
    Distance:1221.76,
    Airport:"Orenburg Airlines"
}),
new Routes(
{
    From:"REN",
    To:"DYU",
    Distance:1802.07,
    Airport:"Orenburg Airlines"
}),
new Routes(
{
    From:"REN",
    To:"DYU",
    Distance:1802.07,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"REN",
    To:"LBD",
    Distance:1687.23,
    Airport:"Orenburg Airlines"
}),
new Routes(
{
    From:"REN",
    To:"LBD",
    Distance:1687.23,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"REN",
    To:"LED",
    Distance:1792.92,
    Airport:"Orenburg Airlines"
}),
new Routes(
{
    From:"REN",
    To:"SVO",
    Distance:1265.84,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"REP",
    To:"BKK",
    Distance:332.751,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"REP",
    To:"BKK",
    Distance:332.751,
    Airport:"Cambodia Angkor Air (K6)"
}),
new Routes(
{
    From:"REP",
    To:"CAN",
    Distance:1493.33,
    Airport:"Cambodia Angkor Air (K6)"
}),
new Routes(
{
    From:"REP",
    To:"CAN",
    Distance:1493.33,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"REP",
    To:"DAD",
    Distance:555.17,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"REP",
    To:"DAD",
    Distance:555.17,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"REP",
    To:"DAD",
    Distance:555.17,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"REP",
    To:"DAD",
    Distance:555.17,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"REP",
    To:"DMK",
    Distance:350.878,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"REP",
    To:"HAN",
    Distance:893.872,
    Airport:"Air France"
}),
new Routes(
{
    From:"REP",
    To:"HAN",
    Distance:893.872,
    Airport:"Cambodia Angkor Air (K6)"
}),
new Routes(
{
    From:"REP",
    To:"HAN",
    Distance:893.872,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"REP",
    To:"HKG",
    Distance:1455.59,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"REP",
    To:"ICN",
    Distance:3490.3,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"REP",
    To:"ICN",
    Distance:3490.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"REP",
    To:"ICN",
    Distance:3490.3,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"REP",
    To:"ICN",
    Distance:3490.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"REP",
    To:"KMG",
    Distance:1292.69,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"REP",
    To:"KOS",
    Distance:315.372,
    Airport:"Cambodia Angkor Air (K6)"
}),
new Routes(
{
    From:"REP",
    To:"KUL",
    Distance:1208.22,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"REP",
    To:"KUL",
    Distance:1208.22,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"REP",
    To:"LPQ",
    Distance:742.48,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"REP",
    To:"LPQ",
    Distance:742.48,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"REP",
    To:"MNL",
    Distance:1860.36,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"REP",
    To:"PEK",
    Distance:3217.07,
    Airport:"Air China"
}),
new Routes(
{
    From:"REP",
    To:"PKZ",
    Distance:285.722,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"REP",
    To:"PNH",
    Distance:235.584,
    Airport:"Cambodia Angkor Air (K6)"
}),
new Routes(
{
    From:"REP",
    To:"PNH",
    Distance:235.584,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"REP",
    To:"PNH",
    Distance:235.584,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"REP",
    To:"PNH",
    Distance:235.584,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"REP",
    To:"PUS",
    Distance:3492.64,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"REP",
    To:"PUS",
    Distance:3492.64,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"REP",
    To:"PVG",
    Distance:2696.28,
    Airport:"Cambodia Angkor Air (K6)"
}),
new Routes(
{
    From:"REP",
    To:"PVG",
    Distance:2696.28,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"REP",
    To:"PVG",
    Distance:2696.28,
    Airport:"China SSS"
}),
new Routes(
{
    From:"REP",
    To:"SGN",
    Distance:422.266,
    Airport:"Cambodia Angkor Air (K6)"
}),
new Routes(
{
    From:"REP",
    To:"SGN",
    Distance:422.266,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"REP",
    To:"SIN",
    Distance:1341.21,
    Airport:"Jetstar Asia Airways"
}),
new Routes(
{
    From:"REP",
    To:"SIN",
    Distance:1341.21,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"REP",
    To:"SIN",
    Distance:1341.21,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"REP",
    To:"SIN",
    Distance:1341.21,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"REP",
    To:"TPE",
    Distance:2238.04,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"RES",
    To:"AEP",
    Distance:792.853,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"RET",
    To:"BOO",
    Distance:100.845,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"RET",
    To:"LKN",
    Distance:93.8855,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"REU",
    To:"BFS",
    Distance:1597.77,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"REU",
    To:"BHX",
    Distance:1276.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"REU",
    To:"BRS",
    Distance:1176.23,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"REU",
    To:"BRS",
    Distance:1176.23,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"REU",
    To:"BRU",
    Distance:1114.12,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"REU",
    To:"CRL",
    Distance:1066.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"REU",
    To:"DUB",
    Distance:1473.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"REU",
    To:"EIN",
    Distance:1189.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"REU",
    To:"EMA",
    Distance:1312.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"REU",
    To:"HHN",
    Distance:1086.84,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"REU",
    To:"LPL",
    Distance:1387.99,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"REU",
    To:"LTN",
    Distance:1198.53,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"REU",
    To:"MAN",
    Distance:1381.5,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"REU",
    To:"MAN",
    Distance:1381.5,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"REU",
    To:"MAN",
    Distance:1381.5,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"REU",
    To:"NCL",
    Distance:1558.7,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"REU",
    To:"PIK",
    Distance:1651.26,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"REU",
    To:"PMI",
    Distance:221.117,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"REU",
    To:"STN",
    Distance:1196.07,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"REX",
    To:"CUN",
    Distance:1281.84,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"REX",
    To:"GDL",
    Distance:800.936,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"REX",
    To:"MEX",
    Distance:735.936,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"REX",
    To:"MEX",
    Distance:735.936,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"REX",
    To:"MEX",
    Distance:735.936,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"REX",
    To:"PAZ",
    Distance:606.231,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"REX",
    To:"PAZ",
    Distance:606.231,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"REX",
    To:"VER",
    Distance:791.333,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"RFD",
    To:"AZA",
    Distance:2206.49,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"RFD",
    To:"LAS",
    Distance:2337.25,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"RFD",
    To:"PGD",
    Distance:1817.25,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"RFD",
    To:"PIE",
    Distance:1690.88,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"RFD",
    To:"SFB",
    Distance:1651.15,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"RFP",
    To:"BOB",
    Distance:43.4068,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"RFP",
    To:"HUH",
    Distance:47.4726,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"RFP",
    To:"MAU",
    Distance:89.2056,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"RFP",
    To:"PPT",
    Distance:217.769,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"RGA",
    To:"AEP",
    Distance:2258.39,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"RGA",
    To:"RGL",
    Distance:263.15,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"RGI",
    To:"FAV",
    Distance:247.09,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"RGI",
    To:"MVT",
    Distance:113.918,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"RGI",
    To:"PPT",
    Distance:356.488,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"RGI",
    To:"TIH",
    Distance:63.9014,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"RGI",
    To:"XMH",
    Distance:180.513,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"RGK",
    To:"DME",
    Distance:3115.55,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"RGL",
    To:"AEP",
    Distance:2086.91,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"RGL",
    To:"AEP",
    Distance:2086.91,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"RGL",
    To:"CRD",
    Distance:661.526,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"RGL",
    To:"MPN",
    Distance:748.226,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"RGL",
    To:"RGA",
    Distance:263.15,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"RGL",
    To:"USH",
    Distance:365.953,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"RGN",
    To:"AKY",
    Distance:496.762,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"RGN",
    To:"AKY",
    Distance:496.762,
    Airport:"Air Mandalay"
}),
new Routes(
{
    From:"RGN",
    To:"BKK",
    Distance:611.162,
    Airport:"Asia Wings"
}),
new Routes(
{
    From:"RGN",
    To:"BKK",
    Distance:611.162,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"RGN",
    To:"BKK",
    Distance:611.162,
    Airport:"Maxair"
}),
new Routes(
{
    From:"RGN",
    To:"BKK",
    Distance:611.162,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"RGN",
    To:"CAN",
    Distance:1929.56,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"RGN",
    To:"CAN",
    Distance:1929.56,
    Airport:"Maxair"
}),
new Routes(
{
    From:"RGN",
    To:"CCU",
    Distance:1026.84,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"RGN",
    To:"CNX",
    Distance:363.922,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"RGN",
    To:"DAC",
    Distance:975.499,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"RGN",
    To:"DMK",
    Distance:583.767,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"RGN",
    To:"DMK",
    Distance:583.767,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"RGN",
    To:"DOH",
    Distance:4694.85,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"RGN",
    To:"HAN",
    Distance:1123.76,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"RGN",
    To:"HEH",
    Distance:432.549,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"RGN",
    To:"HEH",
    Distance:432.549,
    Airport:"Air Mandalay"
}),
new Routes(
{
    From:"RGN",
    To:"HKG",
    Distance:1955.28,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"RGN",
    To:"ICN",
    Distance:3741.64,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"RGN",
    To:"ICN",
    Distance:3741.64,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"RGN",
    To:"ICN",
    Distance:3741.64,
    Airport:"Maxair"
}),
new Routes(
{
    From:"RGN",
    To:"KMG",
    Distance:1130.59,
    Airport:"Air China"
}),
new Routes(
{
    From:"RGN",
    To:"KMG",
    Distance:1130.59,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"RGN",
    To:"KUL",
    Distance:1688.48,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"RGN",
    To:"KUL",
    Distance:1688.48,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"RGN",
    To:"KUL",
    Distance:1688.48,
    Airport:"Maxair"
}),
new Routes(
{
    From:"RGN",
    To:"KYP",
    Distance:392.188,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"RGN",
    To:"MDL",
    Distance:533.412,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"RGN",
    To:"MYT",
    Distance:950.939,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"RGN",
    To:"NNG",
    Distance:1409.5,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"RGN",
    To:"NRT",
    Distance:4830.75,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"RGN",
    To:"NYU",
    Distance:491.119,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"RGN",
    To:"NYU",
    Distance:491.119,
    Airport:"Air Mandalay"
}),
new Routes(
{
    From:"RGN",
    To:"PEK",
    Distance:3243.53,
    Airport:"Air China"
}),
new Routes(
{
    From:"RGN",
    To:"PNH",
    Distance:1111.75,
    Airport:"Maxair"
}),
new Routes(
{
    From:"RGN",
    To:"SGN",
    Distance:1321.43,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"RGN",
    To:"SIN",
    Distance:1931.93,
    Airport:"Asia Wings"
}),
new Routes(
{
    From:"RGN",
    To:"SIN",
    Distance:1931.93,
    Airport:"Jetstar Asia Airways"
}),
new Routes(
{
    From:"RGN",
    To:"SIN",
    Distance:1931.93,
    Airport:"Maxair"
}),
new Routes(
{
    From:"RGN",
    To:"SIN",
    Distance:1931.93,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"RGN",
    To:"SIN",
    Distance:1931.93,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"RGN",
    To:"SIN",
    Distance:1931.93,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"RGN",
    To:"SNW",
    Distance:259.898,
    Airport:"Air Mandalay"
}),
new Routes(
{
    From:"RGN",
    To:"THL",
    Distance:564.321,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"RGN",
    To:"TPE",
    Distance:2753.95,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"RGN",
    To:"TVY",
    Distance:382.588,
    Airport:"Air Mandalay"
}),
new Routes(
{
    From:"RGS",
    To:"BCN",
    Distance:486.621,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"RHD",
    To:"AEP",
    Distance:999.653,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"RHI",
    To:"IMT",
    Distance:107.064,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RHI",
    To:"MSP",
    Distance:305.409,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RHO",
    To:"AMS",
    Distance:2540.9,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RHO",
    To:"AOK",
    Distance:138.35,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"AOK",
    Distance:138.35,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"ATH",
    Distance:404.483,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"ATH",
    Distance:404.483,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"RHO",
    To:"ATH",
    Distance:404.483,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"ATH",
    Distance:404.483,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RHO",
    To:"BGY",
    Distance:1847.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RHO",
    To:"BOH",
    Distance:2861.33,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RHO",
    To:"BRU",
    Distance:2471.29,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"RHO",
    To:"BSL",
    Distance:2094.54,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"RHO",
    To:"CDG",
    Distance:2494.52,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"CGN",
    Distance:2314.02,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"RHO",
    To:"CGN",
    Distance:2314.02,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"RHO",
    To:"CRL",
    Distance:2447.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RHO",
    To:"DME",
    Distance:2240.36,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"DME",
    Distance:2240.36,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"DME",
    Distance:2240.36,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"DRS",
    Distance:1993.25,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"RHO",
    To:"DUS",
    Distance:2362.97,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"RHO",
    To:"DUS",
    Distance:2362.97,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"RHO",
    To:"DUS",
    Distance:2362.97,
    Airport:"Germania"
}),
new Routes(
{
    From:"RHO",
    To:"DUS",
    Distance:2362.97,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"RHO",
    To:"EIN",
    Distance:2452.27,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RHO",
    To:"EMA",
    Distance:2924.16,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"RHO",
    To:"EMA",
    Distance:2924.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RHO",
    To:"EMA",
    Distance:2924.16,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"RHO",
    To:"FRA",
    Distance:2178.85,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"RHO",
    To:"FRA",
    Distance:2178.85,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"RHO",
    To:"GLA",
    Distance:3258.41,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"RHO",
    To:"HAJ",
    Distance:2293.14,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"RHO",
    To:"HAJ",
    Distance:2293.14,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"RHO",
    To:"HAM",
    Distance:2371.14,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"RHO",
    To:"HER",
    Distance:287.382,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"HER",
    Distance:287.382,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"JKH",
    Distance:275.638,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"KBP",
    Distance:1566.24,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"KGS",
    Distance:98.7042,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"KGS",
    Distance:98.7042,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"KUN",
    Distance:2086.04,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RHO",
    To:"KZS",
    Distance:136.27,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"KZS",
    Distance:136.27,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"LBA",
    Distance:2996.94,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"RHO",
    To:"LED",
    Distance:2606.07,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"LED",
    Distance:2606.07,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"LED",
    Distance:2606.07,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"LEJ",
    Distance:2088.68,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"RHO",
    To:"LEJ",
    Distance:2088.68,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"RHO",
    To:"LGG",
    Distance:2398.57,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"RHO",
    To:"LGW",
    Distance:2771.96,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"RHO",
    To:"LGW",
    Distance:2771.96,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"RHO",
    To:"LGW",
    Distance:2771.96,
    Airport:"easyJet"
}),
new Routes(
{
    From:"RHO",
    To:"LPL",
    Distance:3040.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RHO",
    To:"LPL",
    Distance:3040.03,
    Airport:"easyJet"
}),
new Routes(
{
    From:"RHO",
    To:"LUX",
    Distance:2292.45,
    Airport:"Luxair"
}),
new Routes(
{
    From:"RHO",
    To:"MAN",
    Distance:3006.75,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"RHO",
    To:"MAN",
    Distance:3006.75,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"RHO",
    To:"MAN",
    Distance:3006.75,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"RHO",
    To:"MUC",
    Distance:1878.69,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"RHO",
    To:"MUC",
    Distance:1878.69,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"RHO",
    To:"MUC",
    Distance:1878.69,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"RHO",
    To:"NCL",
    Distance:3062.27,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"RHO",
    To:"NCL",
    Distance:3062.27,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"RHO",
    To:"NUE",
    Distance:2000.39,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"RHO",
    To:"NUE",
    Distance:2000.39,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"RHO",
    To:"NYO",
    Distance:2618.01,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RHO",
    To:"PRG",
    Distance:1883.66,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"PRG",
    Distance:1883.66,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"RHO",
    To:"RYG",
    Distance:2842.09,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RHO",
    To:"SKG",
    Distance:638.243,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"SKG",
    Distance:638.243,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"SMI",
    Distance:176.825,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"STN",
    Distance:2781.79,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RHO",
    To:"STN",
    Distance:2781.79,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"RHO",
    To:"STR",
    Distance:2052.24,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"RHO",
    To:"STR",
    Distance:2052.24,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"RHO",
    To:"SVO",
    Distance:2286.38,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"SXF",
    Distance:2111.15,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"RHO",
    To:"TXL",
    Distance:2136.68,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"RHO",
    To:"VIE",
    Distance:1606.24,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"RHO",
    To:"VIE",
    Distance:1606.24,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"RHO",
    To:"VIE",
    Distance:1606.24,
    Airport:"Niki"
}),
new Routes(
{
    From:"RIA",
    To:"GEL",
    Distance:165.712,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"RIA",
    To:"POA",
    Distance:244.74,
    Airport:"Azul"
}),
new Routes(
{
    From:"RIA",
    To:"POA",
    Distance:244.74,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"RIA",
    To:"URG",
    Distance:323.505,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"RIB",
    To:"TDD",
    Distance:440.514,
    Airport:"Southern Winds Airlines"
}),
new Routes(
{
    From:"RIC",
    To:"ATL",
    Distance:773.177,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"RIC",
    To:"ATL",
    Distance:773.177,
    Airport:"Air France"
}),
new Routes(
{
    From:"RIC",
    To:"ATL",
    Distance:773.177,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"RIC",
    To:"ATL",
    Distance:773.177,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"RIC",
    To:"ATL",
    Distance:773.177,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RIC",
    To:"ATL",
    Distance:773.177,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"RIC",
    To:"ATL",
    Distance:773.177,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RIC",
    To:"BOS",
    Distance:762.324,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RIC",
    To:"BOS",
    Distance:762.324,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RIC",
    To:"BOS",
    Distance:762.324,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"RIC",
    To:"BOS",
    Distance:762.324,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RIC",
    To:"CLE",
    Distance:582.873,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RIC",
    To:"CLT",
    Distance:412.477,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RIC",
    To:"CLT",
    Distance:412.477,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RIC",
    To:"CVG",
    Distance:663.779,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RIC",
    To:"DFW",
    Distance:1859.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RIC",
    To:"DFW",
    Distance:1859.46,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RIC",
    To:"DTW",
    Distance:733.93,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RIC",
    To:"EWR",
    Distance:446.634,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RIC",
    To:"FLL",
    Distance:1298.94,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"RIC",
    To:"FPO",
    Distance:1224.04,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"RIC",
    To:"IAD",
    Distance:160.491,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RIC",
    To:"IAH",
    Distance:1859.97,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RIC",
    To:"JFK",
    Distance:463.501,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RIC",
    To:"LGA",
    Distance:469.758,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RIC",
    To:"LGA",
    Distance:469.758,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RIC",
    To:"LGA",
    Distance:469.758,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RIC",
    To:"MCO",
    Distance:1075.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RIC",
    To:"MCO",
    Distance:1075.3,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"RIC",
    To:"MCO",
    Distance:1075.3,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RIC",
    To:"MIA",
    Distance:1332.1,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RIC",
    To:"MIA",
    Distance:1332.1,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RIC",
    To:"MSP",
    Distance:1558.92,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RIC",
    To:"ORD",
    Distance:1031.65,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RIC",
    To:"ORD",
    Distance:1031.65,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RIC",
    To:"ORD",
    Distance:1031.65,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RIC",
    To:"PHL",
    Distance:319.047,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RIC",
    To:"PHL",
    Distance:319.047,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RIG",
    To:"PET",
    Distance:43.2668,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"RIG",
    To:"PET",
    Distance:43.2668,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"RIG",
    To:"POA",
    Distance:250.802,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"RIW",
    To:"DEN",
    Distance:475.67,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"RIX",
    To:"ABZ",
    Distance:1572.71,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"AES",
    Distance:1174.91,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"AMS",
    Distance:1333.24,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"AMS",
    Distance:1333.24,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"RIX",
    To:"ARN",
    Distance:465.721,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"ARN",
    Distance:465.721,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"RIX",
    To:"ARN",
    Distance:465.721,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"RIX",
    To:"ATH",
    Distance:2111.29,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"BCN",
    Distance:2337.08,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"BGO",
    Distance:1144.29,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"BGO",
    Distance:1144.29,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"RIX",
    To:"BGY",
    Distance:1589.85,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RIX",
    To:"BLL",
    Distance:921.081,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"BRE",
    Distance:1057.4,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RIX",
    To:"BRU",
    Distance:1434.28,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"BRU",
    Distance:1434.28,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"RIX",
    To:"BUD",
    Distance:1102.12,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"CDG",
    Distance:1672.09,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"CDG",
    Distance:1672.09,
    Airport:"Air France"
}),
new Routes(
{
    From:"RIX",
    To:"CPH",
    Distance:712.674,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"CPH",
    Distance:712.674,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"RIX",
    To:"CPH",
    Distance:712.674,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"RIX",
    To:"DME",
    Distance:877.404,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"DME",
    Distance:877.404,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"RIX",
    To:"DUB",
    Distance:1942.61,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RIX",
    To:"DUS",
    Distance:1279.61,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"DUS",
    Distance:1279.61,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"RIX",
    To:"EIN",
    Distance:1348.52,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"RIX",
    To:"EMA",
    Distance:1670.39,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RIX",
    To:"FCO",
    Distance:1877.22,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"FCO",
    Distance:1877.22,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"RIX",
    To:"FRA",
    Distance:1272.19,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"FRA",
    Distance:1272.19,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"RIX",
    To:"FRA",
    Distance:1272.19,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"RIX",
    To:"GOT",
    Distance:706.344,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"GYD",
    Distance:2617.61,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"GYD",
    Distance:2617.61,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"RIX",
    To:"HAM",
    Distance:956.172,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"HAM",
    Distance:956.172,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"RIX",
    To:"HEL",
    Distance:381.689,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"HEL",
    Distance:381.689,
    Airport:"Finnair"
}),
new Routes(
{
    From:"RIX",
    To:"HER",
    Distance:2401.74,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"RIX",
    To:"HHN",
    Distance:1345.72,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RIX",
    To:"IST",
    Distance:1807,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"RIX",
    To:"JFK",
    Distance:6745.7,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"RIX",
    To:"KBP",
    Distance:861.291,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"KBP",
    Distance:861.291,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"RIX",
    To:"KGD",
    Distance:308.918,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"KIV",
    Distance:1161.6,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"LCA",
    Distance:2557.14,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"LED",
    Distance:486.445,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"LGW",
    Distance:1692.22,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"LTN",
    Distance:1661.84,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"RIX",
    To:"MAN",
    Distance:1703.24,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RIX",
    To:"MLA",
    Distance:2447.57,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"MSQ",
    Distance:424.164,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"MSQ",
    Distance:424.164,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"RIX",
    To:"MUC",
    Distance:1254.88,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"MUC",
    Distance:1254.88,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"RIX",
    To:"MXP",
    Distance:1635.96,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"MXP",
    Distance:1635.96,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"RIX",
    To:"NCE",
    Distance:1884.84,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"NRN",
    Distance:1295.08,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RIX",
    To:"OLB",
    Distance:2061.88,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"OLB",
    Distance:2061.88,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"RIX",
    To:"OSL",
    Distance:828.535,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"OSL",
    Distance:828.535,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"RIX",
    To:"OSL",
    Distance:828.535,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"RIX",
    To:"PIK",
    Distance:1759.74,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RIX",
    To:"PLQ",
    Distance:205.972,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"PRG",
    Distance:992.009,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"PRG",
    Distance:992.009,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"RIX",
    To:"RYG",
    Distance:818.781,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RIX",
    To:"SAW",
    Distance:1822.74,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"STN",
    Distance:1625.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RIX",
    To:"SVG",
    Distance:1101.14,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"SVO",
    Distance:831.548,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"RIX",
    To:"SVO",
    Distance:831.548,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"TAS",
    Distance:3640.76,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"TAS",
    Distance:3640.76,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"RIX",
    To:"TBS",
    Distance:2260.16,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"TBS",
    Distance:2260.16,
    Airport:"Georgian Airways"
}),
new Routes(
{
    From:"RIX",
    To:"TFS",
    Distance:4507.42,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"RIX",
    To:"TFS",
    Distance:4507.42,
    Airport:"SmartLynx Airlines"
}),
new Routes(
{
    From:"RIX",
    To:"TKU",
    Distance:411.216,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"TLL",
    Distance:281.411,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"TLV",
    Distance:2894.16,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"TRD",
    Distance:1020.09,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"RIX",
    To:"TRF",
    Distance:843.329,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"RIX",
    To:"TXL",
    Distance:838.585,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"TXL",
    Distance:838.585,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"RIX",
    To:"VCE",
    Distance:1501.13,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"VCE",
    Distance:1501.13,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"RIX",
    To:"VIE",
    Distance:1099.08,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"VIE",
    Distance:1099.08,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"RIX",
    To:"VKO",
    Distance:832.734,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"VKO",
    Distance:832.734,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"RIX",
    To:"VNO",
    Distance:267.511,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"WAW",
    Distance:563.277,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIX",
    To:"WAW",
    Distance:563.277,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"RIX",
    To:"ZRH",
    Distance:1480.55,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"RIY",
    To:"ADE",
    Distance:511.752,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"RIY",
    To:"ADE",
    Distance:511.752,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"RIY",
    To:"AUH",
    Distance:1218.56,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"RIY",
    To:"CAI",
    Distance:2516.45,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"RIY",
    To:"DXB",
    Distance:1333.02,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"RIY",
    To:"JED",
    Distance:1331.18,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"RIY",
    To:"KWI",
    Distance:1625.86,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"RIY",
    To:"SAH",
    Distance:560.856,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"RIY",
    To:"SAH",
    Distance:560.856,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"RIY",
    To:"SCT",
    Distance:539.163,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"RIY",
    To:"SCT",
    Distance:539.163,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"RIY",
    To:"SHJ",
    Distance:1347.88,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"RJA",
    To:"HYD",
    Distance:357.783,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"RJA",
    To:"HYD",
    Distance:357.783,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"RJA",
    To:"HYD",
    Distance:357.783,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"RJH",
    To:"DAC",
    Distance:192.43,
    Airport:"United Airways"
}),
new Routes(
{
    From:"RJK",
    To:"CGN",
    Distance:835.512,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"RJK",
    To:"HAM",
    Distance:991.98,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"RJK",
    To:"LHR",
    Distance:1307.21,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"RJK",
    To:"NYO",
    Distance:1517.36,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RJK",
    To:"SPU",
    Distance:231.646,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"RJK",
    To:"STR",
    Distance:560.031,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"RJK",
    To:"ZAG",
    Distance:130.654,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"RJL",
    To:"MAD",
    Distance:241.457,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"RKD",
    To:"BOS",
    Distance:243.733,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"RKS",
    To:"DEN",
    Distance:417.145,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RKS",
    To:"GCC",
    Distance:419.569,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RKS",
    To:"SLC",
    Distance:259.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RKV",
    To:"AEY",
    Distance:249.402,
    Airport:"Air Iceland"
}),
new Routes(
{
    From:"RKV",
    To:"EGS",
    Distance:380.159,
    Airport:"Air Iceland"
}),
new Routes(
{
    From:"RKV",
    To:"GOH",
    Distance:1428.1,
    Airport:"Air Iceland"
}),
new Routes(
{
    From:"RKV",
    To:"IFJ",
    Distance:221.559,
    Airport:"Air Iceland"
}),
new Routes(
{
    From:"RKV",
    To:"KUS",
    Distance:732.848,
    Airport:"Air Iceland"
}),
new Routes(
{
    From:"RLG",
    To:"AYT",
    Distance:2366.38,
    Airport:"Germania"
}),
new Routes(
{
    From:"RLG",
    To:"CGN",
    Distance:486.217,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"RLG",
    To:"MUC",
    Distance:619.68,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"RLG",
    To:"PMI",
    Distance:1751.61,
    Airport:"Germania"
}),
new Routes(
{
    From:"RLG",
    To:"STR",
    Distance:618.82,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"RLK",
    To:"HET",
    Distance:343.478,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"RLK",
    To:"INC",
    Distance:309.461,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"RLK",
    To:"PEK",
    Distance:753.458,
    Airport:"Air China"
}),
new Routes(
{
    From:"RLK",
    To:"PEK",
    Distance:753.458,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"RLK",
    To:"XIY",
    Distance:725.936,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"RMA",
    To:"BNE",
    Distance:440.342,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"RMA",
    To:"BNE",
    Distance:440.342,
    Airport:"Qantas"
}),
new Routes(
{
    From:"RMA",
    To:"CTL",
    Distance:250.494,
    Airport:"Qantas"
}),
new Routes(
{
    From:"RMF",
    To:"CAI",
    Distance:595.982,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"RMF",
    To:"DUS",
    Distance:3704.79,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"RMF",
    To:"VIE",
    Distance:2960.03,
    Airport:"Niki"
}),
new Routes(
{
    From:"RMF",
    To:"ZRH",
    Distance:3337.44,
    Airport:"Belair Airlines"
}),
new Routes(
{
    From:"RMF",
    To:"ZRH",
    Distance:3337.44,
    Airport:"Helvetic Airways"
}),
new Routes(
{
    From:"RMF",
    To:"ZRH",
    Distance:3337.44,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"RMI",
    To:"DME",
    Distance:2196.2,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"RMI",
    To:"DME",
    Distance:2196.2,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"RMI",
    To:"KRR",
    Distance:2098.95,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"RMQ",
    To:"CAN",
    Distance:750.943,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"RMQ",
    To:"CGO",
    Distance:1315.05,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"RMQ",
    To:"CSX",
    Distance:857.258,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"RMQ",
    To:"FOC",
    Distance:209.261,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"RMQ",
    To:"HAN",
    Distance:1555.46,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"RMQ",
    To:"HGH",
    Distance:663.514,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"RMQ",
    To:"HGH",
    Distance:663.514,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"RMQ",
    To:"HKG",
    Distance:718.514,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"RMQ",
    To:"HKG",
    Distance:718.514,
    Airport:"Hong Kong Express Airways"
}),
new Routes(
{
    From:"RMQ",
    To:"HKG",
    Distance:718.514,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"RMQ",
    To:"HUN",
    Distance:104.584,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"RMQ",
    To:"KIX",
    Distance:1809.64,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"RMQ",
    To:"KNH",
    Distance:229.808,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"RMQ",
    To:"MFM",
    Distance:755.744,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"RMQ",
    To:"MFM",
    Distance:755.744,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"RMQ",
    To:"MXZ",
    Distance:454.84,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"RMQ",
    To:"MZG",
    Distance:127.131,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"RMQ",
    To:"NGB",
    Distance:624.047,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"RMQ",
    To:"NGB",
    Distance:624.047,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"RMQ",
    To:"NKG",
    Distance:849.136,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"RMQ",
    To:"NNG",
    Distance:1282.8,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"RMQ",
    To:"OKA",
    Distance:738.429,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"RMQ",
    To:"PVG",
    Distance:773.698,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"RMQ",
    To:"SGN",
    Distance:2101.11,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"RMQ",
    To:"SZX",
    Distance:717.705,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"RMQ",
    To:"TAO",
    Distance:1334.71,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"RMQ",
    To:"TNA",
    Distance:1437.36,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"RMQ",
    To:"XMN",
    Distance:254.325,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"RMQ",
    To:"XMN",
    Distance:254.325,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"RMT",
    To:"PPT",
    Distance:655.954,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"RMT",
    To:"RUR",
    Distance:150.074,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"RNA",
    To:"HIR",
    Distance:216.228,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"RNA",
    To:"IRA",
    Distance:66.7524,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"RNB",
    To:"ARN",
    Distance:407.598,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"RNB",
    To:"BMA",
    Distance:378.106,
    Airport:"Golden Air"
}),
new Routes(
{
    From:"RNB",
    To:"BMA",
    Distance:378.106,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"RNL",
    To:"BNY",
    Distance:38.5569,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"RNL",
    To:"HIR",
    Distance:234.167,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"RNN",
    To:"CPH",
    Distance:146.617,
    Airport:"DAT Danish Air Transport"
}),
new Routes(
{
    From:"RNO",
    To:"DEN",
    Distance:1290.88,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"RNO",
    To:"DEN",
    Distance:1290.88,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"DEN",
    Distance:1290.88,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"DFW",
    Distance:2160.51,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"DFW",
    Distance:2160.51,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RNO",
    To:"LAS",
    Distance:555.778,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"RNO",
    To:"LAS",
    Distance:555.778,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"LAX",
    Distance:629.617,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"LAX",
    Distance:629.617,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"LAX",
    Distance:629.617,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"LAX",
    Distance:629.617,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RNO",
    To:"LAX",
    Distance:629.617,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"MDW",
    Distance:2697.55,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"RNO",
    To:"MDW",
    Distance:2697.55,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"ORD",
    Distance:2683.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"ORD",
    Distance:2683.08,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RNO",
    To:"PDX",
    Distance:715.581,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"PDX",
    Distance:715.581,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"PHX",
    Distance:966.664,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"PHX",
    Distance:966.664,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"PHX",
    Distance:966.664,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RNO",
    To:"SAN",
    Distance:787.036,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"SEA",
    Distance:907.32,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"SEA",
    Distance:907.32,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"SFO",
    Distance:308.327,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"SJC",
    Distance:303.076,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"RNO",
    To:"SLC",
    Distance:677.275,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RNS",
    To:"BCN",
    Distance:810.897,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"RNS",
    To:"BCN",
    Distance:810.897,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"RNS",
    To:"BOD",
    Distance:368.755,
    Airport:"Nationwide Airlines"
}),
new Routes(
{
    From:"RNS",
    To:"CDG",
    Distance:332.372,
    Airport:"Air France"
}),
new Routes(
{
    From:"RNS",
    To:"CDG",
    Distance:332.372,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"RNS",
    To:"EXT",
    Distance:320.246,
    Airport:"Air France"
}),
new Routes(
{
    From:"RNS",
    To:"EXT",
    Distance:320.246,
    Airport:"Flybe"
}),
new Routes(
{
    From:"RNS",
    To:"LYS",
    Distance:580.087,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"RNS",
    To:"MRS",
    Distance:745.184,
    Airport:"Air France"
}),
new Routes(
{
    From:"RNS",
    To:"NCE",
    Distance:848.193,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"RNS",
    To:"SOU",
    Distance:321.484,
    Airport:"Air France"
}),
new Routes(
{
    From:"RNS",
    To:"SOU",
    Distance:321.484,
    Airport:"Flybe"
}),
new Routes(
{
    From:"RNS",
    To:"TLS",
    Distance:548.874,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"ROA",
    To:"ATL",
    Distance:574.995,
    Airport:"Air France"
}),
new Routes(
{
    From:"ROA",
    To:"ATL",
    Distance:574.995,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ROA",
    To:"ATL",
    Distance:574.995,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ROA",
    To:"ATL",
    Distance:574.995,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ROA",
    To:"CLT",
    Distance:250.296,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ROA",
    To:"CLT",
    Distance:250.296,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ROA",
    To:"DTW",
    Distance:615.205,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ROA",
    To:"IAD",
    Distance:284.537,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ROA",
    To:"LGA",
    Distance:651.676,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ROA",
    To:"LGA",
    Distance:651.676,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ROA",
    To:"ORD",
    Distance:852.926,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ROA",
    To:"PHL",
    Distance:499.325,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ROA",
    To:"PHL",
    Distance:499.325,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ROA",
    To:"PIE",
    Distance:1077.15,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"ROA",
    To:"SFB",
    Distance:957.696,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"ROB",
    To:"ABJ",
    Distance:720.205,
    Airport:"Kampuchea Airlines"
}),
new Routes(
{
    From:"ROB",
    To:"ACC",
    Distance:1129.79,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ROB",
    To:"ACC",
    Distance:1129.79,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"ROB",
    To:"ACC",
    Distance:1129.79,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ROB",
    To:"ACC",
    Distance:1129.79,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"ROB",
    To:"BRU",
    Distance:5153.75,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"ROB",
    To:"BRU",
    Distance:5153.75,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ROB",
    To:"BRU",
    Distance:5153.75,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ROB",
    To:"CMN",
    Distance:3030.67,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"ROB",
    To:"FNA",
    Distance:409.594,
    Airport:"Air France"
}),
new Routes(
{
    From:"ROB",
    To:"FNA",
    Distance:409.594,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"ROB",
    To:"FNA",
    Distance:409.594,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ROB",
    To:"FNA",
    Distance:409.594,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ROB",
    To:"FNA",
    Distance:409.594,
    Airport:"Kampuchea Airlines"
}),
new Routes(
{
    From:"ROB",
    To:"FNA",
    Distance:409.594,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"ROB",
    To:"LOS",
    Distance:1512.47,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"ROC",
    To:"ATL",
    Distance:1206.66,
    Airport:"Air France"
}),
new Routes(
{
    From:"ROC",
    To:"ATL",
    Distance:1206.66,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ROC",
    To:"ATL",
    Distance:1206.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ROC",
    To:"ATL",
    Distance:1206.66,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ROC",
    To:"BOS",
    Distance:550.743,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ROC",
    To:"BOS",
    Distance:550.743,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ROC",
    To:"BWI",
    Distance:446.474,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ROC",
    To:"CLE",
    Distance:392.616,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ROC",
    To:"CLT",
    Distance:922.893,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ROC",
    To:"CLT",
    Distance:922.893,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ROC",
    To:"DCA",
    Distance:477.422,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ROC",
    To:"DCA",
    Distance:477.422,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ROC",
    To:"DTW",
    Distance:475.208,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ROC",
    To:"EWR",
    Distance:395.994,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ROC",
    To:"IAD",
    Distance:464.52,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ROC",
    To:"JFK",
    Distance:424.055,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ROC",
    To:"JFK",
    Distance:424.055,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"ROC",
    To:"LGA",
    Distance:408.024,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ROC",
    To:"MCO",
    Distance:1665.56,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ROC",
    To:"MCO",
    Distance:1665.56,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ROC",
    To:"MDW",
    Distance:839.637,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ROC",
    To:"MDW",
    Distance:839.637,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ROC",
    To:"MSP",
    Distance:1257.09,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ROC",
    To:"ORD",
    Distance:847.2,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ROC",
    To:"ORD",
    Distance:847.2,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ROC",
    To:"ORD",
    Distance:847.2,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ROC",
    To:"PHL",
    Distance:413.9,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ROC",
    To:"PHL",
    Distance:413.9,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ROC",
    To:"TPA",
    Distance:1739.52,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ROC",
    To:"YYZ",
    Distance:169.949,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ROI",
    To:"DMK",
    Distance:419.219,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"ROK",
    To:"BNE",
    Distance:518.128,
    Airport:"Emirates"
}),
new Routes(
{
    From:"ROK",
    To:"BNE",
    Distance:518.128,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ROK",
    To:"BNE",
    Distance:518.128,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ROK",
    To:"GLT",
    Distance:93.5091,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ROK",
    To:"MKY",
    Distance:279.591,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ROO",
    To:"CGB",
    Distance:182.514,
    Airport:"Azul"
}),
new Routes(
{
    From:"ROP",
    To:"GUM",
    Distance:90.6971,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ROP",
    To:"SPN",
    Distance:117.377,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ROR",
    To:"GUM",
    Distance:1310.72,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ROR",
    To:"ICN",
    Distance:3445.46,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"ROR",
    To:"ICN",
    Distance:3445.46,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"ROR",
    To:"MNL",
    Distance:1675.49,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ROR",
    To:"NRT",
    Distance:3213.19,
    Airport:"Air France"
}),
new Routes(
{
    From:"ROR",
    To:"NRT",
    Distance:3213.19,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ROR",
    To:"NRT",
    Distance:3213.19,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ROR",
    To:"TPE",
    Distance:2424.28,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"ROR",
    To:"TPE",
    Distance:2424.28,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"ROR",
    To:"YAP",
    Distance:455.654,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ROS",
    To:"AEP",
    Distance:286.162,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"ROS",
    To:"AEP",
    Distance:286.162,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"ROS",
    To:"COR",
    Distance:367.112,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"ROS",
    To:"EZE",
    Distance:297.709,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"ROS",
    To:"GRU",
    Distance:1751.5,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"ROS",
    To:"GRU",
    Distance:1751.5,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"ROS",
    To:"PDP",
    Distance:568.278,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"ROT",
    To:"AKL",
    Distance:181.858,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"ROT",
    To:"CHC",
    Distance:677.608,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"ROT",
    To:"WLG",
    Distance:380.463,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"ROV",
    To:"AYT",
    Distance:1369.34,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"BUD",
    Distance:1544.78,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"DME",
    Distance:915.873,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"DME",
    Distance:915.873,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"DME",
    Distance:915.873,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"DXB",
    Distance:2804.15,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"ROV",
    To:"DYU",
    Distance:2535.17,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"EGO",
    Distance:444.067,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"ROV",
    To:"EVN",
    Distance:871.745,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"IST",
    Distance:1120.4,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"IST",
    Distance:1120.4,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"KBP",
    Distance:737.526,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"KBP",
    Distance:737.526,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"KUF",
    Distance:1007.34,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"LBD",
    Distance:2506.91,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"LED",
    Distance:1527.38,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"LED",
    Distance:1527.38,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"PRG",
    Distance:1893.23,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"SHJ",
    Distance:2803.13,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"ROV",
    To:"SIP",
    Distance:512.369,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"SKG",
    Distance:1539.43,
    Airport:"Air Nippon"
}),
new Routes(
{
    From:"ROV",
    To:"SVO",
    Distance:982.951,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"SVX",
    Distance:1770.26,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"TAS",
    Distance:2423.17,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"TAS",
    Distance:2423.17,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"ROV",
    To:"TLV",
    Distance:1746.23,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"VIE",
    Distance:1736.27,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"ROV",
    To:"VOG",
    Distance:376.896,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"ROW",
    To:"DFW",
    Distance:699.237,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ROW",
    To:"DFW",
    Distance:699.237,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RPR",
    To:"BHO",
    Distance:509.974,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"RPR",
    To:"BHO",
    Distance:509.974,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"RPR",
    To:"BOM",
    Distance:954.694,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"RPR",
    To:"BOM",
    Distance:954.694,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"RPR",
    To:"CCU",
    Distance:711.054,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"RPR",
    To:"DEL",
    Distance:944.829,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"RPR",
    To:"DEL",
    Distance:944.829,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"RPR",
    To:"DEL",
    Distance:944.829,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"RPR",
    To:"DEL",
    Distance:944.829,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"RPR",
    To:"HYD",
    Distance:538.09,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"RPR",
    To:"IDR",
    Distance:635.843,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"RPR",
    To:"VTZ",
    Distance:414.984,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"RRG",
    To:"MRU",
    Distance:597.535,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"RRS",
    To:"OSL",
    Distance:265.456,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"RSA",
    To:"AFA",
    Distance:434.452,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"RSD",
    To:"NAS",
    Distance:130.914,
    Airport:"Aeroper"
}),
new Routes(
{
    From:"RSD",
    To:"NAS",
    Distance:130.914,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"RSH",
    To:"ANI",
    Distance:96.1457,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"RSH",
    To:"BET",
    Distance:114.079,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"RSH",
    To:"KLG",
    Distance:58.0735,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"RST",
    To:"AZA",
    Distance:2031.36,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"RST",
    To:"MSP",
    Distance:122.515,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RST",
    To:"ORD",
    Distance:431.116,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RST",
    To:"ORD",
    Distance:431.116,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RSU",
    To:"CJU",
    Distance:180.532,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"RSU",
    To:"GMP",
    Distance:310.967,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"RSU",
    To:"GMP",
    Distance:310.967,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"RSW",
    To:"ACY",
    Distance:1583.67,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"ATL",
    Distance:830.268,
    Airport:"Air France"
}),
new Routes(
{
    From:"RSW",
    To:"ATL",
    Distance:830.268,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"RSW",
    To:"ATL",
    Distance:830.268,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"ATL",
    Distance:830.268,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"RSW",
    To:"ATL",
    Distance:830.268,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RSW",
    To:"ATL",
    Distance:830.268,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"ATL",
    Distance:830.268,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"ATL",
    Distance:830.268,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"RSW",
    To:"BDL",
    Distance:1902.19,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"BOS",
    Distance:2013.3,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"RSW",
    To:"BWI",
    Distance:1482.85,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"RSW",
    To:"BWI",
    Distance:1482.85,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"CLE",
    Distance:1654.11,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"CLT",
    Distance:968.026,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"CLT",
    Distance:968.026,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RSW",
    To:"CMH",
    Distance:1500.57,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RSW",
    To:"CMH",
    Distance:1500.57,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"CVG",
    Distance:1417.5,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RSW",
    To:"DCA",
    Distance:1438.26,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"RSW",
    To:"DCA",
    Distance:1438.26,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"DCA",
    Distance:1438.26,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"DCA",
    Distance:1438.26,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RSW",
    To:"DEN",
    Distance:2584.04,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"DEN",
    Distance:2584.04,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"DFW",
    Distance:1634.28,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"DFW",
    Distance:1634.28,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RSW",
    To:"DTW",
    Distance:1749.19,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RSW",
    To:"DTW",
    Distance:1749.19,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"DUS",
    Distance:7640.48,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"RSW",
    To:"DUS",
    Distance:7640.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"EWR",
    Distance:1722,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"RSW",
    To:"EWR",
    Distance:1722,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"EYW",
    Distance:220.173,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"HPN",
    Distance:1776.6,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"RSW",
    To:"IAH",
    Distance:1383.76,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"ILG",
    Distance:1568.52,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"IND",
    Distance:1524.81,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RSW",
    To:"IND",
    Distance:1524.81,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"JFK",
    Distance:1731.64,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"RSW",
    To:"LGA",
    Distance:1741.61,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RSW",
    To:"LGA",
    Distance:1741.61,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"RSW",
    To:"MCO",
    Distance:215.068,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"MDW",
    Distance:1781.99,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"RSW",
    To:"MDW",
    Distance:1781.99,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"MKE",
    Distance:1907.75,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"MSP",
    Distance:2282.23,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RSW",
    To:"MSP",
    Distance:2282.23,
    Airport:"Sun Country Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"ORD",
    Distance:1806.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"ORD",
    Distance:1806.43,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"ORD",
    Distance:1806.43,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RSW",
    To:"ORD",
    Distance:1806.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"PHL",
    Distance:1600.72,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"PHL",
    Distance:1600.72,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"PHL",
    Distance:1600.72,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RSW",
    To:"PIT",
    Distance:1558.09,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"PVD",
    Distance:1935.62,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"STL",
    Distance:1577.61,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"TTN",
    Distance:1656.76,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"RSW",
    To:"YYZ",
    Distance:1915.59,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"RSW",
    To:"YYZ",
    Distance:1915.59,
    Airport:"WestJet"
}),
new Routes(
{
    From:"RTA",
    To:"NAN",
    Distance:587.679,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"RTB",
    To:"ATL",
    Distance:1937.28,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"RTB",
    To:"DFW",
    Distance:2124.97,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RTB",
    To:"DFW",
    Distance:2124.97,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RTB",
    To:"GUA",
    Distance:470.467,
    Airport:"Air Atlanta Icelandic"
}),
new Routes(
{
    From:"RTB",
    To:"IAH",
    Distance:1765.32,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"RTB",
    To:"LCE",
    Distance:72.9577,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"RTB",
    To:"MIA",
    Distance:1235.8,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RTB",
    To:"MIA",
    Distance:1235.8,
    Airport:"US Airways"
}),
new Routes(
{
    From:"RTB",
    To:"SAL",
    Distance:419.913,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"RTB",
    To:"SAP",
    Distance:177.963,
    Airport:"Air Atlanta Icelandic"
}),
new Routes(
{
    From:"RTB",
    To:"SAP",
    Distance:177.963,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"RTB",
    To:"TGU",
    Distance:261.675,
    Airport:"Air Atlanta Icelandic"
}),
new Routes(
{
    From:"RTB",
    To:"TGU",
    Distance:261.675,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"RTM",
    To:"AGP",
    Distance:1838.73,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"ALC",
    Distance:1569.31,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"AYT",
    Distance:2655.14,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"BCN",
    Distance:1198.76,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"BJV",
    Distance:2441.51,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"BUD",
    Distance:1175.5,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"EGC",
    Distance:843.824,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"EIN",
    Distance:85.7177,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"FAO",
    Distance:1924.97,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"FCO",
    Distance:1273.86,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"GRO",
    Distance:1125.32,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"HER",
    Distance:2472.23,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"IBZ",
    Distance:1474.06,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"IST",
    Distance:2214.15,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"RTM",
    To:"LCY",
    Distance:305.881,
    Airport:"Air France"
}),
new Routes(
{
    From:"RTM",
    To:"LCY",
    Distance:305.881,
    Airport:"British Airways"
}),
new Routes(
{
    From:"RTM",
    To:"LCY",
    Distance:305.881,
    Airport:"CityJet"
}),
new Routes(
{
    From:"RTM",
    To:"LCY",
    Distance:305.881,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"RTM",
    To:"LHR",
    Distance:341.582,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"RTM",
    To:"LHR",
    Distance:341.582,
    Airport:"British Airways"
}),
new Routes(
{
    From:"RTM",
    To:"MAD",
    Distance:1413.57,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"MPL",
    Distance:932.565,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"MUC",
    Distance:658.738,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"RTM",
    To:"NCE",
    Distance:945.612,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"PMI",
    Distance:1385.45,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"PRG",
    Distance:716.63,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"RAK",
    Distance:2479.86,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"RHO",
    Distance:2537.32,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"SAW",
    Distance:2251.01,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"SPU",
    Distance:1286.26,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"TLN",
    Distance:993.391,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"VIE",
    Distance:964.751,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTM",
    To:"VLC",
    Distance:1437.11,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"RTW",
    To:"DME",
    Distance:702.929,
    Airport:"Saratov Aviation Division"
}),
new Routes(
{
    From:"RTW",
    To:"EVN",
    Distance:1250.25,
    Airport:"Saratov Aviation Division"
}),
new Routes(
{
    From:"RTW",
    To:"MRV",
    Distance:820.316,
    Airport:"Saratov Aviation Division"
}),
new Routes(
{
    From:"RTW",
    To:"PRG",
    Distance:2222.86,
    Airport:"Saratov Aviation Division"
}),
new Routes(
{
    From:"RTW",
    To:"SVX",
    Distance:1133.62,
    Airport:"Saratov Aviation Division"
}),
new Routes(
{
    From:"RUA",
    To:"EBB",
    Distance:375.004,
    Airport:"Eagle Air"
}),
new Routes(
{
    From:"RUH",
    To:"ABT",
    Distance:733.902,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"ADD",
    Distance:1963.96,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"ADD",
    Distance:1963.96,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"AHB",
    Distance:855.711,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"AHB",
    Distance:855.711,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"AJF",
    Distance:843.908,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"AMM",
    Distance:1288.59,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"AMM",
    Distance:1288.59,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"RUH",
    To:"AMM",
    Distance:1288.59,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"AQI",
    Distance:379.868,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"ATZ",
    Distance:1583.76,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"AUH",
    Distance:805.388,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"RUH",
    To:"AUH",
    Distance:805.388,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"AUH",
    Distance:805.388,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"BAH",
    Distance:420.662,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"RUH",
    To:"BAH",
    Distance:420.662,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"BEY",
    Distance:1464.74,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"BEY",
    Distance:1464.74,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"BHH",
    Distance:693.692,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"BLR",
    Distance:3508.48,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"BOM",
    Distance:2770.38,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"RUH",
    To:"BOM",
    Distance:2770.38,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"RUH",
    To:"BOM",
    Distance:2770.38,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"CAI",
    Distance:1611.72,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"RUH",
    To:"CAI",
    Distance:1611.72,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"RUH",
    To:"CAI",
    Distance:1611.72,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"CAN",
    Distance:6686.46,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"CCJ",
    Distance:3441.97,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"RUH",
    To:"CCJ",
    Distance:3441.97,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"CDG",
    Distance:4650.71,
    Airport:"Air France"
}),
new Routes(
{
    From:"RUH",
    To:"CDG",
    Distance:4650.71,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"CGK",
    Distance:7342.04,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"CMB",
    Distance:4040.48,
    Airport:"L"
}),
new Routes(
{
    From:"RUH",
    To:"CMB",
    Distance:4040.48,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"CMB",
    Distance:4040.48,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"CMN",
    Distance:5295.17,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"COK",
    Distance:3539.1,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"DAC",
    Distance:4407.52,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"DAC",
    Distance:4407.52,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"DEL",
    Distance:3037.07,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"RUH",
    To:"DEL",
    Distance:3037.07,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"DMM",
    Distance:353.138,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"DMM",
    Distance:353.138,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"DOH",
    Distance:491.104,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"DOH",
    Distance:491.104,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"RUH",
    To:"DOH",
    Distance:491.104,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"DWC",
    Distance:849.726,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"RUH",
    To:"DWD",
    Distance:237.68,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"DXB",
    Distance:873.015,
    Airport:"Emirates"
}),
new Routes(
{
    From:"RUH",
    To:"DXB",
    Distance:873.015,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"DXB",
    Distance:873.015,
    Airport:"Qantas"
}),
new Routes(
{
    From:"RUH",
    To:"DXB",
    Distance:873.015,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"EAM",
    Distance:850.256,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"ELQ",
    Distance:329.16,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"FCO",
    Distance:3670.59,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"RUH",
    To:"FCO",
    Distance:3670.59,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"FRA",
    Distance:4293.84,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"RUH",
    To:"FRA",
    Distance:4293.84,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"GIZ",
    Distance:992.252,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"GIZ",
    Distance:992.252,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"GVA",
    Distance:4298.12,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"HAS",
    Distance:571.027,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"HBE",
    Distance:1794.37,
    Airport:"Air Arabia Egypt"
}),
new Routes(
{
    From:"RUH",
    To:"HBE",
    Distance:1794.37,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"RUH",
    To:"HBE",
    Distance:1794.37,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"HBE",
    Distance:1794.37,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"HKG",
    Distance:6781.57,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"RUH",
    To:"HMB",
    Distance:1506.15,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"HOF",
    Distance:282.878,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"HTY",
    Distance:1610.45,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"HYD",
    Distance:3388.58,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"IAD",
    Distance:10842.3,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"ICN",
    Distance:7491.7,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"RUH",
    To:"ISB",
    Distance:2725.8,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"ISB",
    Distance:2725.8,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"ISB",
    Distance:2725.8,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"RUH",
    To:"IST",
    Distance:2430.75,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"IST",
    Distance:2430.75,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"JED",
    Distance:851.832,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"RUH",
    To:"JED",
    Distance:851.832,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"RUH",
    To:"JED",
    Distance:851.832,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"JED",
    Distance:851.832,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"JED",
    Distance:851.832,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"JFK",
    Distance:10480.2,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"KHI",
    Distance:2061.28,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"KHI",
    Distance:2061.28,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"KRT",
    Distance:1803.87,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"KRT",
    Distance:1803.87,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"KRT",
    Distance:1803.87,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"RUH",
    To:"KUL",
    Distance:6377.18,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"KWI",
    Distance:491.04,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"RUH",
    To:"KWI",
    Distance:491.04,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"RUH",
    To:"KWI",
    Distance:491.04,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"KWI",
    Distance:491.04,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"LHE",
    Distance:2801.89,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"LHE",
    Distance:2801.89,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"LHE",
    Distance:2801.89,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"RUH",
    To:"LHR",
    Distance:4940.81,
    Airport:"British Airways"
}),
new Routes(
{
    From:"RUH",
    To:"LHR",
    Distance:4940.81,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"LKO",
    Distance:3416.85,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"LXR",
    Distance:1408.04,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"MAA",
    Distance:3750.3,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"MCT",
    Distance:1183.74,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"RUH",
    To:"MCT",
    Distance:1183.74,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"MED",
    Distance:707.55,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"MED",
    Distance:707.55,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"MNL",
    Distance:7777.61,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"MNL",
    Distance:7777.61,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"MUC",
    Distance:3999.4,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"RUH",
    To:"MXP",
    Distance:4084.72,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"RUH",
    To:"MXP",
    Distance:4084.72,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"PEW",
    Distance:2595.12,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"PEW",
    Distance:2595.12,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"PEW",
    Distance:2595.12,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"RUH",
    To:"RAE",
    Distance:857.58,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"RAH",
    Distance:608.2,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"SAH",
    Distance:1085.45,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"SAH",
    Distance:1085.45,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"RUH",
    To:"SAW",
    Distance:2394.05,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"SHJ",
    Distance:888.447,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"RUH",
    To:"SHW",
    Distance:834.084,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"SIN",
    Distance:6674.22,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"SIN",
    Distance:6674.22,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"SKT",
    Distance:2816.17,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"SSH",
    Distance:1269.25,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"RUH",
    To:"SSH",
    Distance:1269.25,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"SSH",
    Distance:1269.25,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"TAI",
    Distance:1281.69,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"RUH",
    To:"TIF",
    Distance:737.914,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"RUH",
    To:"TIF",
    Distance:737.914,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"TRV",
    Distance:3688.14,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"RUH",
    To:"TUI",
    Distance:1080.52,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"TUU",
    Distance:1070.45,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"ULH",
    Distance:899.445,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"URY",
    Distance:1168.44,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUH",
    To:"YNB",
    Distance:877.921,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"RUN",
    To:"CDG",
    Distance:9369.39,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"RUN",
    To:"DIE",
    Distance:1157.25,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"RUN",
    To:"DZA",
    Distance:1410.68,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"RUN",
    To:"HAH",
    Distance:1668.55,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"RUN",
    To:"JNB",
    Distance:2834.95,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"RUN",
    To:"MAA",
    Distance:4632.41,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"RUN",
    To:"MRS",
    Distance:8800.92,
    Airport:"XL Airways France"
}),
new Routes(
{
    From:"RUN",
    To:"MRU",
    Distance:231.754,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"RUN",
    To:"MRU",
    Distance:231.754,
    Airport:"Air France"
}),
new Routes(
{
    From:"RUN",
    To:"MRU",
    Distance:231.754,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"RUN",
    To:"MRU",
    Distance:231.754,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"RUN",
    To:"NOS",
    Distance:1137.16,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"RUN",
    To:"ORY",
    Distance:9358.73,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"RUN",
    To:"ORY",
    Distance:9358.73,
    Airport:"Air France"
}),
new Routes(
{
    From:"RUN",
    To:"ORY",
    Distance:9358.73,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"RUN",
    To:"SMS",
    Distance:732.24,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"RUN",
    To:"TMM",
    Distance:711.647,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"RUN",
    To:"TNR",
    Distance:871.462,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"RUN",
    To:"TNR",
    Distance:871.462,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"RUR",
    To:"PPT",
    Distance:572.29,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"RUR",
    To:"RMT",
    Distance:150.074,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"RUS",
    To:"HIR",
    Distance:97.2329,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"RUT",
    To:"BOS",
    Distance:204.513,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"RVD",
    To:"VCP",
    Distance:701.365,
    Airport:"Azul"
}),
new Routes(
{
    From:"RVE",
    To:"BOG",
    Distance:349.919,
    Airport:"SATENA"
}),
new Routes(
{
    From:"RVE",
    To:"TME",
    Distance:54.022,
    Airport:"SATENA"
}),
new Routes(
{
    From:"RVK",
    To:"MQN",
    Distance:223.068,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"RVK",
    To:"OSY",
    Distance:45.6175,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"RVK",
    To:"TRD",
    Distance:153.908,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"RVN",
    To:"HEL",
    Distance:696.02,
    Airport:"Finnair"
}),
new Routes(
{
    From:"RVN",
    To:"HEL",
    Distance:696.02,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"RVT",
    To:"PER",
    Distance:446.626,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"RVT",
    To:"PER",
    Distance:446.626,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"RVV",
    To:"PPT",
    Distance:730.432,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"RVV",
    To:"TUB",
    Distance:197.051,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"RXS",
    To:"MNL",
    Distance:374.12,
    Airport:"Air Philippines"
}),
new Routes(
{
    From:"RXS",
    To:"MNL",
    Distance:374.12,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"RXS",
    To:"MNL",
    Distance:374.12,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"RYG",
    To:"AGP",
    Distance:2753.33,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"RYG",
    To:"AGP",
    Distance:2753.33,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"ALC",
    Distance:2480.43,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"RYG",
    To:"ALC",
    Distance:2480.43,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"BCN",
    Distance:2099.25,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"BGY",
    Distance:1525.63,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"BLQ",
    Distance:1650.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"BVA",
    Distance:1235.68,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"BZR",
    Distance:1855.63,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"CFU",
    Distance:2290.81,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"CHQ",
    Distance:2823.36,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"CIA",
    Distance:1958.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"CRL",
    Distance:1070.05,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"DUB",
    Distance:1235.68,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"EDI",
    Distance:921.982,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"GDN",
    Distance:725.069,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"KGS",
    Distance:2770.95,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"KRK",
    Distance:1182.36,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"KUN",
    Distance:937.606,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"MAD",
    Distance:2326.22,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"MAN",
    Distance:1043.69,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"MLA",
    Distance:2629.11,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"PMI",
    Distance:2276.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"POZ",
    Distance:859.653,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"PUY",
    Distance:1624.42,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"RHO",
    Distance:2842.09,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"RIX",
    Distance:818.781,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"RZE",
    Distance:1254.23,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"SKG",
    Distance:2262.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"STN",
    Distance:1061.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"SXF",
    Distance:796.577,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"TLL",
    Distance:793.749,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"TSF",
    Distance:1529.65,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"VNO",
    Distance:1021.17,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"WMI",
    Distance:983.522,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"WRO",
    Distance:997.246,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYG",
    To:"ZAD",
    Distance:1725.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RYK",
    To:"AUH",
    Distance:1615.83,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"RYK",
    To:"KHI",
    Distance:495.509,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"RYK",
    To:"LHE",
    Distance:528.673,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"RZE",
    To:"BRS",
    Distance:1737.97,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RZE",
    To:"BVA",
    Distance:1426.84,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"RZE",
    To:"DUB",
    Distance:1967.63,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RZE",
    To:"EMA",
    Distance:1637.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RZE",
    To:"FCO",
    Distance:1190.87,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"RZE",
    To:"FRA",
    Distance:960.556,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"RZE",
    To:"LTN",
    Distance:1572.76,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RZE",
    To:"MAN",
    Distance:1702.64,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RZE",
    To:"RYG",
    Distance:1254.23,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RZE",
    To:"STN",
    Distance:1531.33,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"RZE",
    To:"WAW",
    Distance:240.078,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"RZR",
    To:"MHD",
    Distance:803.667,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"RZR",
    To:"THR",
    Distance:147.144,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"SAB",
    To:"SXM",
    Distance:45.5567,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"SAF",
    To:"DEN",
    Distance:488.105,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAF",
    To:"DFW",
    Distance:884.724,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAF",
    To:"DFW",
    Distance:884.724,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAF",
    To:"LAX",
    Distance:1139.57,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAF",
    To:"LAX",
    Distance:1139.57,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAF",
    To:"LAX",
    Distance:1139.57,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAH",
    To:"AAY",
    Distance:854.673,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"SAH",
    To:"AAY",
    Distance:854.673,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"ADD",
    Distance:932.027,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"ADE",
    Distance:306.955,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"SAH",
    To:"ADE",
    Distance:306.955,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAH",
    To:"ADE",
    Distance:306.955,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"AMM",
    Distance:1989.6,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"SAH",
    To:"AMM",
    Distance:1989.6,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"ASM",
    Distance:569.544,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"AUH",
    Distance:1475.41,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"SAH",
    To:"AXK",
    Distance:298.22,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"SAH",
    To:"BAH",
    Distance:1372.17,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"SAH",
    To:"BAH",
    Distance:1372.17,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"BEY",
    Distance:2220,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"CAI",
    Distance:2088.54,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"SAH",
    To:"CAI",
    Distance:2088.54,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"DOH",
    Distance:1329.65,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"SAH",
    To:"DXB",
    Distance:1589.45,
    Airport:"Emirates"
}),
new Routes(
{
    From:"SAH",
    To:"DXB",
    Distance:1589.45,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"SAH",
    To:"DXB",
    Distance:1589.45,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"GXF",
    Distance:492.01,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"SAH",
    To:"GXF",
    Distance:492.01,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"HOD",
    Distance:155.832,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"SAH",
    To:"HOD",
    Distance:155.832,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"JED",
    Distance:871.893,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"SAH",
    To:"JED",
    Distance:871.893,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"JIB",
    Distance:451.675,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"KRT",
    Distance:1249.79,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"KWI",
    Distance:1576.49,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"SAH",
    To:"KWI",
    Distance:1576.49,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"NBO",
    Distance:2032.35,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"RIY",
    Distance:560.856,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"SAH",
    To:"RIY",
    Distance:560.856,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"RUH",
    Distance:1085.45,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"SAH",
    To:"RUH",
    Distance:1085.45,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAH",
    To:"TAI",
    Distance:199.261,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"SAH",
    To:"TAI",
    Distance:199.261,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"SAL",
    To:"ATL",
    Distance:2293.89,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAL",
    To:"BOG",
    Distance:1902.18,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"BZE",
    Distance:462.682,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"CLO",
    Distance:1774.47,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"CUN",
    Distance:875.65,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"DFW",
    Distance:2309.98,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAL",
    To:"DFW",
    Distance:2309.98,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"DFW",
    Distance:2309.98,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAL",
    To:"DFW",
    Distance:2309.98,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAL",
    To:"EWR",
    Distance:3358.38,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"EWR",
    Distance:3358.38,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAL",
    To:"FLL",
    Distance:1683.98,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"SAL",
    To:"GUA",
    Distance:203.334,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"GYE",
    Distance:2007.96,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"HAV",
    Distance:1272.21,
    Airport:"Grupo TACA"
}),
new Routes(
{
    From:"SAL",
    To:"IAD",
    Distance:3056.52,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"IAD",
    Distance:3056.52,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAL",
    To:"IAH",
    Distance:1949.67,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"IAH",
    Distance:1949.67,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAL",
    To:"IAH",
    Distance:1949.67,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAL",
    To:"JFK",
    Distance:3369.82,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"JFK",
    Distance:3369.82,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAL",
    To:"JFK",
    Distance:3369.82,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAL",
    To:"LAX",
    Distance:3734.35,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"LAX",
    Distance:3734.35,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAL",
    To:"LAX",
    Distance:3734.35,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAL",
    To:"LIM",
    Distance:3122.53,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"LIR",
    Distance:496.048,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"MAD",
    Distance:8665.37,
    Airport:"British Airways"
}),
new Routes(
{
    From:"SAL",
    To:"MAD",
    Distance:8665.37,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"SAL",
    To:"MCO",
    Distance:1849.19,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"MCO",
    Distance:1849.19,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAL",
    To:"MDE",
    Distance:1697.74,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"MEX",
    Distance:1258.58,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"SAL",
    To:"MEX",
    Distance:1258.58,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"MGA",
    Distance:344.836,
    Airport:"Grupo TACA"
}),
new Routes(
{
    From:"SAL",
    To:"MGA",
    Distance:344.836,
    Airport:"LACSA"
}),
new Routes(
{
    From:"SAL",
    To:"MIA",
    Distance:1650.66,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAL",
    To:"MIA",
    Distance:1650.66,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"MIA",
    Distance:1650.66,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAL",
    To:"MIA",
    Distance:1650.66,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAL",
    To:"ORD",
    Distance:3175.19,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"PTY",
    Distance:1161.04,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"PTY",
    Distance:1161.04,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"SAL",
    To:"RTB",
    Distance:419.913,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"SAP",
    Distance:254.75,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"SFO",
    Distance:4249.85,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"SFO",
    Distance:4249.85,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAL",
    To:"SFO",
    Distance:4249.85,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAL",
    To:"SJO",
    Distance:652.155,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"TGU",
    Distance:210.199,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"UIO",
    Distance:1906.94,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAL",
    To:"YYZ",
    Distance:3480.39,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAN",
    To:"ABQ",
    Distance:1009.21,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"ATL",
    Distance:3037.66,
    Airport:"Air France"
}),
new Routes(
{
    From:"SAN",
    To:"ATL",
    Distance:3037.66,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAN",
    To:"ATL",
    Distance:3037.66,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"ATL",
    Distance:3037.66,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"SAN",
    To:"ATL",
    Distance:3037.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAN",
    To:"ATL",
    Distance:3037.66,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"ATL",
    Distance:3037.66,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"ATL",
    Distance:3037.66,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"SAN",
    To:"AUS",
    Distance:1870.02,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"BLI",
    Distance:1840.43,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"SAN",
    To:"BNA",
    Distance:2812.05,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"BOI",
    Distance:1207.27,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"BOS",
    Distance:4155.87,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"BOS",
    Distance:4155.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"BOS",
    Distance:4155.87,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"SAN",
    To:"BWI",
    Distance:3685.58,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAN",
    To:"BWI",
    Distance:3685.58,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"CLT",
    Distance:3335.34,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"CLT",
    Distance:3335.34,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAN",
    To:"DCA",
    Distance:3654.77,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"DCA",
    Distance:3654.77,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAN",
    To:"DEN",
    Distance:1371.29,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAN",
    To:"DEN",
    Distance:1371.29,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"DEN",
    Distance:1371.29,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"DEN",
    Distance:1371.29,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"DFW",
    Distance:1880.4,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"DFW",
    Distance:1880.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"DFW",
    Distance:1880.4,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"DFW",
    Distance:1880.4,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAN",
    To:"DTW",
    Distance:3142.16,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"DTW",
    Distance:3142.16,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAN",
    To:"EWR",
    Distance:3895.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"FAT",
    Distance:505.342,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"HNL",
    Distance:4200.69,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"HNL",
    Distance:4200.69,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"HOU",
    Distance:2108.39,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAN",
    To:"HOU",
    Distance:2108.39,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"IAD",
    Distance:3618.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"IAH",
    Distance:2093.11,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"IPL",
    Distance:151.009,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"JFK",
    Distance:3928.01,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"JFK",
    Distance:3928.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"JFK",
    Distance:3928.01,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAN",
    To:"JFK",
    Distance:3928.01,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"SAN",
    To:"JFK",
    Distance:3928.01,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"SAN",
    To:"JFK",
    Distance:3928.01,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAN",
    To:"LAS",
    Distance:416.39,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAN",
    To:"LAS",
    Distance:416.39,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"LAS",
    Distance:416.39,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"LAX",
    Distance:175.733,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"LAX",
    Distance:175.733,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"LAX",
    Distance:175.733,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAN",
    To:"LAX",
    Distance:175.733,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAN",
    To:"LAX",
    Distance:175.733,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"LHR",
    Distance:8806.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"LHR",
    Distance:8806.42,
    Airport:"British Airways"
}),
new Routes(
{
    From:"SAN",
    To:"LHR",
    Distance:8806.42,
    Airport:"Finnair"
}),
new Routes(
{
    From:"SAN",
    To:"LHR",
    Distance:8806.42,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"LIH",
    Distance:4300.52,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"MCI",
    Distance:2142.27,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAN",
    To:"MCI",
    Distance:2142.27,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"MCO",
    Distance:3451.53,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"MCO",
    Distance:3451.53,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"MDW",
    Distance:2775.97,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"MEX",
    Distance:2330.11,
    Airport:"Volaris"
}),
new Routes(
{
    From:"SAN",
    To:"MIA",
    Distance:3642.52,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"MIA",
    Distance:3642.52,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAN",
    To:"MRY",
    Distance:603.766,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"MSP",
    Distance:2462.78,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"MSP",
    Distance:2462.78,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAN",
    To:"MSP",
    Distance:2462.78,
    Airport:"Sun Country Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"MSY",
    Distance:2568.23,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"NRT",
    Distance:8924.45,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"NRT",
    Distance:8924.45,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"NRT",
    Distance:8924.45,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"OAK",
    Distance:718.365,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"OGG",
    Distance:4083.49,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"ORD",
    Distance:2768.04,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"ORD",
    Distance:2768.04,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"ORD",
    Distance:2768.04,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAN",
    To:"ORD",
    Distance:2768.04,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"PDX",
    Distance:1502.62,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"PDX",
    Distance:1502.62,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"PDX",
    Distance:1502.62,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"PHL",
    Distance:3805.92,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"PHL",
    Distance:3805.92,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAN",
    To:"PHX",
    Distance:488.624,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAN",
    To:"PHX",
    Distance:488.624,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"PHX",
    Distance:488.624,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"PHX",
    Distance:488.624,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAN",
    To:"PVR",
    Distance:1786.56,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"SAN",
    To:"PVR",
    Distance:1786.56,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"PVR",
    Distance:1786.56,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"RNO",
    Distance:787.036,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAN",
    To:"RNO",
    Distance:787.036,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"SAT",
    Distance:1814.35,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAN",
    To:"SAT",
    Distance:1814.35,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"SDF",
    Distance:2897.82,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAN",
    To:"SEA",
    Distance:1692.27,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"SEA",
    Distance:1692.27,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"SEA",
    Distance:1692.27,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAN",
    To:"SFO",
    Distance:718.903,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"SFO",
    Distance:718.903,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"SFO",
    Distance:718.903,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"SAN",
    To:"SJC",
    Distance:671.41,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAN",
    To:"SJC",
    Distance:671.41,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"SJD",
    Distance:1292.64,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"SJD",
    Distance:1292.64,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"SLC",
    Distance:1008.35,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"SLC",
    Distance:1008.35,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAN",
    To:"SMF",
    Distance:772.637,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"STL",
    Distance:2501.14,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"STS",
    Distance:818.617,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"STS",
    Distance:818.617,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"TUS",
    Distance:590.408,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"YYC",
    Distance:2060.06,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAN",
    To:"YYC",
    Distance:2060.06,
    Airport:"WestJet"
}),
new Routes(
{
    From:"SAN",
    To:"YYZ",
    Distance:3465.02,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"SAP",
    To:"ATL",
    Distance:2052.24,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAP",
    To:"EWR",
    Distance:3104.97,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAP",
    To:"FLL",
    Distance:1429.85,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"SAP",
    To:"GUA",
    Distance:295.885,
    Airport:"Air Atlanta Icelandic"
}),
new Routes(
{
    From:"SAP",
    To:"GUA",
    Distance:295.885,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAP",
    To:"GUA",
    Distance:295.885,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"SAP",
    To:"IAH",
    Distance:1784.66,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAP",
    To:"JFK",
    Distance:3116.16,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAP",
    To:"LCE",
    Distance:119.096,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"SAP",
    To:"MEX",
    Distance:1262.43,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"SAP",
    To:"MIA",
    Distance:1396.62,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAP",
    To:"MIA",
    Distance:1396.62,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAP",
    To:"MIA",
    Distance:1396.62,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAP",
    To:"MIA",
    Distance:1396.62,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAP",
    To:"PTY",
    Distance:1167.69,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"SAP",
    To:"RTB",
    Distance:177.963,
    Airport:"Air Atlanta Icelandic"
}),
new Routes(
{
    From:"SAP",
    To:"RTB",
    Distance:177.963,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"SAP",
    To:"SAL",
    Distance:254.75,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAP",
    To:"SJO",
    Distance:728.446,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SAP",
    To:"SJO",
    Distance:728.446,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"SAP",
    To:"TGU",
    Distance:172.389,
    Airport:"Air Atlanta Icelandic"
}),
new Routes(
{
    From:"SAT",
    To:"ATL",
    Distance:1404.7,
    Airport:"Air France"
}),
new Routes(
{
    From:"SAT",
    To:"ATL",
    Distance:1404.7,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAT",
    To:"ATL",
    Distance:1404.7,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"SAT",
    To:"ATL",
    Distance:1404.7,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAT",
    To:"ATL",
    Distance:1404.7,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"ATL",
    Distance:1404.7,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"ATL",
    Distance:1404.7,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"SAT",
    To:"BNA",
    Distance:1321.62,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"BWI",
    Distance:2261.96,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAT",
    To:"BWI",
    Distance:2261.96,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"CLT",
    Distance:1759.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"CLT",
    Distance:1759.87,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAT",
    To:"CUN",
    Distance:1498.74,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAT",
    To:"DAL",
    Distance:399.271,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAT",
    To:"DAL",
    Distance:399.271,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"DEN",
    Distance:1279.94,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAT",
    To:"DEN",
    Distance:1279.94,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"DEN",
    Distance:1279.94,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"DFW",
    Distance:397.965,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"DFW",
    Distance:397.965,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAT",
    To:"DTW",
    Distance:1954.35,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAT",
    To:"ELP",
    Distance:797.195,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"EWR",
    Distance:2522.41,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"GDL",
    Distance:1114.12,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"SAT",
    To:"GDL",
    Distance:1114.12,
    Airport:"Volaris"
}),
new Routes(
{
    From:"SAT",
    To:"HOU",
    Distance:308.778,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAT",
    To:"HOU",
    Distance:308.778,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"HRL",
    Distance:376.153,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"IAD",
    Distance:2189.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"IAH",
    Distance:306.1,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"JFK",
    Distance:2550.85,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAT",
    To:"LAS",
    Distance:1717.49,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAT",
    To:"LAS",
    Distance:1717.49,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"LAX",
    Distance:1944.66,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAT",
    To:"LAX",
    Distance:1944.66,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"LAX",
    Distance:1944.66,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"MCO",
    Distance:1672.23,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAT",
    To:"MCO",
    Distance:1672.23,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAT",
    To:"MCO",
    Distance:1672.23,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"MDW",
    Distance:1668.41,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAT",
    To:"MDW",
    Distance:1668.41,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"MEM",
    Distance:1005.57,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAT",
    To:"MEX",
    Distance:1124.42,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"SAT",
    To:"MEX",
    Distance:1124.42,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAT",
    To:"MEX",
    Distance:1124.42,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAT",
    To:"MEX",
    Distance:1124.42,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"SAT",
    To:"MSP",
    Distance:1767.79,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAT",
    To:"MTY",
    Distance:447.59,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"SAT",
    To:"MTY",
    Distance:447.59,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAT",
    To:"MTY",
    Distance:447.59,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"SAT",
    To:"ORD",
    Distance:1677.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"ORD",
    Distance:1677.42,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAT",
    To:"ORD",
    Distance:1677.42,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"PHL",
    Distance:2404.24,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"PHL",
    Distance:2404.24,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAT",
    To:"PHX",
    Distance:1354.1,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAT",
    To:"PHX",
    Distance:1354.1,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"PHX",
    Distance:1354.1,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"PHX",
    Distance:1354.1,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAT",
    To:"SAN",
    Distance:1814.35,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"SEA",
    Distance:2854.25,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"SFO",
    Distance:2381.57,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"SLC",
    Distance:1749.18,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAT",
    To:"STL",
    Distance:1265.88,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAT",
    To:"STL",
    Distance:1265.88,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAT",
    To:"TLC",
    Distance:1139.21,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"SAT",
    To:"TPA",
    Distance:1561.93,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"SAT",
    To:"TPA",
    Distance:1561.93,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"SAV",
    To:"ATL",
    Distance:344.797,
    Airport:"Air France"
}),
new Routes(
{
    From:"SAV",
    To:"ATL",
    Distance:344.797,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SAV",
    To:"ATL",
    Distance:344.797,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"SAV",
    To:"ATL",
    Distance:344.797,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAV",
    To:"ATL",
    Distance:344.797,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"SAV",
    To:"ATL",
    Distance:344.797,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"SAV",
    To:"BOS",
    Distance:1450.39,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"SAV",
    To:"CLT",
    Distance:344.029,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAV",
    To:"CLT",
    Distance:344.029,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAV",
    To:"DCA",
    Distance:837.151,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAV",
    To:"DCA",
    Distance:837.151,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAV",
    To:"DFW",
    Distance:1485.97,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAV",
    To:"DFW",
    Distance:1485.97,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAV",
    To:"DTW",
    Distance:1137.36,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAV",
    To:"EWR",
    Distance:1140.64,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAV",
    To:"IAD",
    Distance:830.141,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAV",
    To:"IAH",
    Distance:1366.72,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAV",
    To:"JFK",
    Distance:1155.47,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAV",
    To:"JFK",
    Distance:1155.47,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"SAV",
    To:"LGA",
    Distance:1162.95,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SAV",
    To:"ORD",
    Distance:1245.45,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SAV",
    To:"PHL",
    Distance:1013.85,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SAV",
    To:"PHL",
    Distance:1013.85,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SAW",
    To:"ADA",
    Distance:675.236,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ADA",
    Distance:675.236,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ADB",
    Distance:343.464,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ADB",
    Distance:343.464,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"SAW",
    To:"ADB",
    Distance:343.464,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ALA",
    Distance:3891.97,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"AMS",
    Distance:2246.49,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"AMS",
    Distance:2246.49,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"SAW",
    To:"AMS",
    Distance:2246.49,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ARN",
    Distance:2229.55,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ASF",
    Distance:1615.59,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ASR",
    Distance:578.622,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ASR",
    Distance:578.622,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ATH",
    Distance:566.273,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"AYT",
    Distance:463.082,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"AYT",
    Distance:463.082,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"SAW",
    To:"AYT",
    Distance:463.082,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"BAL",
    Distance:1065.71,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"BCN",
    Distance:2272.84,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"BEG",
    Distance:852.574,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"SAW",
    To:"BEG",
    Distance:852.574,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"BEY",
    Distance:957.324,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"BGY",
    Distance:1668.3,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"BJV",
    Distance:429.836,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"BJV",
    Distance:429.836,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"BLQ",
    Distance:1523.19,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"BRU",
    Distance:2204.11,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"BSL",
    Distance:1879.55,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"BUD",
    Distance:1080.79,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"SAW",
    To:"CDG",
    Distance:2275.44,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"CGN",
    Distance:2030.35,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SAW",
    To:"CGN",
    Distance:2030.35,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"SAW",
    To:"CGN",
    Distance:2030.35,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"CMN",
    Distance:3349.83,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"SAW",
    To:"CPH",
    Distance:2037.85,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"CRL",
    Distance:2189.29,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"DIY",
    Distance:992.923,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"DIY",
    Distance:992.923,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"DLM",
    Distance:467.552,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"DME",
    Distance:1731.8,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"DNZ",
    Distance:347.785,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"DOH",
    Distance:2691.84,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"DOK",
    Distance:1039.77,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"DTM",
    Distance:2032.37,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"SAW",
    To:"DTM",
    Distance:2032.37,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"SAW",
    To:"DUS",
    Distance:2073.92,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SAW",
    To:"DUS",
    Distance:2073.92,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"DUS",
    Distance:2073.92,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"DXB",
    Distance:2967.5,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"SAW",
    To:"DXB",
    Distance:2967.5,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"EBU",
    Distance:2082.18,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ECN",
    Distance:736.256,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ECN",
    Distance:736.256,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"EDO",
    Distance:245.562,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"EIN",
    Distance:2169.4,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"SAW",
    To:"ERC",
    Distance:875.955,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ERZ",
    Distance:1008.63,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ERZ",
    Distance:1008.63,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ESB",
    Distance:323.124,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ESB",
    Distance:323.124,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"EZS",
    Distance:889.999,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"EZS",
    Distance:889.999,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"FCO",
    Distance:1425.09,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"FRA",
    Distance:1901.49,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"FRA",
    Distance:1901.49,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"FRU",
    Distance:3696.07,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"GNY",
    Distance:910.651,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"GYD",
    Distance:1745.19,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"GYD",
    Distance:1745.19,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"GZP",
    Distance:573.626,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"GZT",
    Distance:831.623,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"GZT",
    Distance:831.623,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"HAJ",
    Distance:1961.97,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"SAW",
    To:"HAM",
    Distance:2019.74,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"SAW",
    To:"HRK",
    Distance:1140.87,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"HTY",
    Distance:787.727,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"HTY",
    Distance:787.727,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"IKA",
    Distance:1998.54,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"IKA",
    Distance:1998.54,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"JED",
    Distance:2329.07,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"SAW",
    To:"KBP",
    Distance:1057.54,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"KBP",
    Distance:1057.54,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"KCM",
    Distance:756.685,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"KRR",
    Distance:923.905,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"KSY",
    Distance:1162.7,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"KWI",
    Distance:2129.67,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"SAW",
    To:"KWI",
    Distance:2129.67,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"SAW",
    To:"KWI",
    Distance:2129.67,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"KWI",
    Distance:2129.67,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"KYA",
    Distance:428.198,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"KYA",
    Distance:428.198,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"LGW",
    Distance:2523.57,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"LWO",
    Distance:1075.13,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"MAD",
    Distance:2755.54,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"MED",
    Distance:2057.62,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"SAW",
    To:"MLA",
    Distance:1406.77,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"SAW",
    To:"MLA",
    Distance:1406.77,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"MLX",
    Distance:799.569,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"MQM",
    Distance:1058.52,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"MQM",
    Distance:1058.52,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"MRS",
    Distance:1998.67,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"MRV",
    Distance:1185.37,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"SAW",
    To:"MSR",
    Distance:1080.63,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"MUC",
    Distance:1610.03,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SAW",
    To:"MUC",
    Distance:1610.03,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"MUC",
    Distance:1610.03,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"MXP",
    Distance:1741.89,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"MZH",
    Distance:522.397,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"NAV",
    Distance:504.836,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"NUE",
    Distance:1712.69,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SAW",
    To:"NUE",
    Distance:1712.69,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"OMS",
    Distance:3556.18,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ORY",
    Distance:2281.98,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ORY",
    Distance:2281.98,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"SAW",
    To:"OTP",
    Distance:485.154,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"PRN",
    Distance:710.954,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"RIX",
    Distance:1822.74,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"SAW",
    To:"RTM",
    Distance:2251.01,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"SAW",
    To:"RUH",
    Distance:2394.05,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"SAW",
    To:"SHJ",
    Distance:2973.21,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"SAW",
    To:"SJJ",
    Distance:957.938,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"SJJ",
    Distance:957.938,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"SKP",
    Distance:651.506,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"STN",
    Distance:2518.44,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"STR",
    Distance:1798.56,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SAW",
    To:"STR",
    Distance:1798.56,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"SAW",
    To:"STR",
    Distance:1798.56,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"STW",
    Distance:1139.89,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"SXF",
    Distance:1748.25,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"SAW",
    To:"SXF",
    Distance:1748.25,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"TBS",
    Distance:1308.3,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"TBS",
    Distance:1308.3,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"TIA",
    Distance:804.399,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"TLV",
    Distance:1106.34,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"TLV",
    Distance:1106.34,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"TXL",
    Distance:1773.33,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"SAW",
    To:"TZX",
    Distance:879.769,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"TZX",
    Distance:879.769,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"VAN",
    Distance:1228.6,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"VAN",
    Distance:1228.6,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"VAS",
    Distance:654.478,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"VAS",
    Distance:654.478,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"VIE",
    Distance:1287.02,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"VIE",
    Distance:1287.02,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"SAW",
    To:"ZRH",
    Distance:1802.07,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"SAX",
    To:"GHE",
    Distance:18.2537,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"SBA",
    To:"DEN",
    Distance:1471.41,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"SBA",
    To:"DEN",
    Distance:1471.41,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SBA",
    To:"LAX",
    Distance:142.301,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SBA",
    To:"PDX",
    Distance:1263.02,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SBA",
    To:"PHX",
    Distance:730.466,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SBA",
    To:"PHX",
    Distance:730.466,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SBA",
    To:"SEA",
    Distance:1462.64,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SBA",
    To:"SFO",
    Distance:421.848,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SBH",
    To:"ANU",
    Distance:139.288,
    Airport:"PAN Air"
}),
new Routes(
{
    From:"SBH",
    To:"ANU",
    Distance:139.288,
    Airport:"T.J. Air"
}),
new Routes(
{
    From:"SBH",
    To:"PTP",
    Distance:228.564,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"SBH",
    To:"PTP",
    Distance:228.564,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"SBH",
    To:"SAB",
    Distance:50.0606,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"SBH",
    To:"SFG",
    Distance:31.6042,
    Airport:"PAN Air"
}),
new Routes(
{
    From:"SBH",
    To:"SJU",
    Distance:340.129,
    Airport:"T.J. Air"
}),
new Routes(
{
    From:"SBH",
    To:"STT",
    Distance:231.369,
    Airport:"T.J. Air"
}),
new Routes(
{
    From:"SBH",
    To:"SXM",
    Distance:33.0604,
    Airport:"Air Caraïbes"
}),
new Routes(
{
    From:"SBH",
    To:"SXM",
    Distance:33.0604,
    Airport:"PAN Air"
}),
new Routes(
{
    From:"SBH",
    To:"SXM",
    Distance:33.0604,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"SBN",
    To:"ATL",
    Distance:912.759,
    Airport:"Air France"
}),
new Routes(
{
    From:"SBN",
    To:"ATL",
    Distance:912.759,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SBN",
    To:"ATL",
    Distance:912.759,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"SBN",
    To:"AZA",
    Distance:2410.89,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"SBN",
    To:"DTW",
    Distance:251.374,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SBN",
    To:"LAS",
    Distance:2559.67,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"SBN",
    To:"MSP",
    Distance:660.515,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SBN",
    To:"ORD",
    Distance:134.891,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SBN",
    To:"PGD",
    Distance:1691.15,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"SBN",
    To:"PIE",
    Distance:1569.28,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"SBN",
    To:"SFB",
    Distance:1509.29,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"SBP",
    To:"LAX",
    Distance:250.046,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SBP",
    To:"PHX",
    Distance:817.084,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SBP",
    To:"PHX",
    Distance:817.084,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SBP",
    To:"SFO",
    Distance:306.906,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SBW",
    To:"BKI",
    Distance:608.542,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SBW",
    To:"BTU",
    Distance:149.706,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SBW",
    To:"JHB",
    Distance:926.693,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"SBW",
    To:"KCH",
    Distance:201.536,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"SBW",
    To:"KCH",
    Distance:201.536,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SBW",
    To:"KUL",
    Distance:1142.74,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"SBW",
    To:"KUL",
    Distance:1142.74,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SBW",
    To:"KUL",
    Distance:1142.74,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"SBW",
    To:"MYY",
    Distance:319.143,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"SBY",
    To:"CLT",
    Distance:595.63,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SBY",
    To:"CLT",
    Distance:595.63,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SBY",
    To:"PHL",
    Distance:171.862,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SBY",
    To:"PHL",
    Distance:171.862,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SBZ",
    To:"MUC",
    Distance:973.466,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"SBZ",
    To:"MUC",
    Distance:973.466,
    Airport:"Tarom"
}),
new Routes(
{
    From:"SBZ",
    To:"OTP",
    Distance:207.465,
    Airport:"Tarom"
}),
new Routes(
{
    From:"SBZ",
    To:"VIE",
    Distance:626.387,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"SBZ",
    To:"VIE",
    Distance:626.387,
    Airport:"Tarom"
}),
new Routes(
{
    From:"SCC",
    To:"ANC",
    Distance:1005.39,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SCC",
    To:"BRW",
    Distance:327.396,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"SCC",
    To:"BTI",
    Distance:184.326,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"SCC",
    To:"FAI",
    Distance:598.741,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"SCC",
    To:"NUI",
    Distance:95.6832,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"SCE",
    To:"DTW",
    Distance:482.525,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SCE",
    To:"IAD",
    Distance:214.433,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SCE",
    To:"ORD",
    Distance:847.427,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"SCE",
    To:"PHL",
    Distance:246.201,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SCE",
    To:"PHL",
    Distance:246.201,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SCK",
    To:"LAS",
    Distance:576.827,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"SCL",
    To:"AEP",
    Distance:1147.28,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"SCL",
    To:"AEP",
    Distance:1147.28,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"AKL",
    Distance:9652.99,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"AKL",
    Distance:9652.99,
    Airport:"Qantas"
}),
new Routes(
{
    From:"SCL",
    To:"ANF",
    Distance:1106.72,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SCL",
    To:"ANF",
    Distance:1106.72,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"ANF",
    Distance:1106.72,
    Airport:"Pal airlines"
}),
new Routes(
{
    From:"SCL",
    To:"ANF",
    Distance:1106.72,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"SCL",
    To:"ARI",
    Distance:1673.46,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"ASU",
    Distance:1571.35,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"ASU",
    Distance:1571.35,
    Airport:"TAM Mercosur"
}),
new Routes(
{
    From:"SCL",
    To:"ATL",
    Distance:7588.47,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"SCL",
    To:"ATL",
    Distance:7588.47,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"SCL",
    To:"BBA",
    Distance:1394.62,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"BOG",
    Distance:4250.68,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SCL",
    To:"BOG",
    Distance:4250.68,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"CCP",
    Distance:429.109,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"CCP",
    Distance:429.109,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"SCL",
    To:"CCS",
    Distance:4908.63,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"CDG",
    Distance:11672.8,
    Airport:"Air France"
}),
new Routes(
{
    From:"SCL",
    To:"CDG",
    Distance:11672.8,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"SCL",
    To:"CJC",
    Distance:1225.4,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"CJC",
    Distance:1225.4,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"SCL",
    To:"COR",
    Distance:659.143,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"CPO",
    Distance:714.858,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"CPO",
    Distance:714.858,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"SCL",
    To:"CUN",
    Distance:6288.34,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"DFW",
    Distance:7866.28,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"DFW",
    Distance:7866.28,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"DFW",
    Distance:7866.28,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SCL",
    To:"EZE",
    Distance:1138.23,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"SCL",
    To:"EZE",
    Distance:1138.23,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"SCL",
    To:"EZE",
    Distance:1138.23,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"EZE",
    Distance:1138.23,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"EZE",
    Distance:1138.23,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"SCL",
    To:"GIG",
    Distance:2934.78,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"GIG",
    Distance:2934.78,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"GRU",
    Distance:2614.59,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"GRU",
    Distance:2614.59,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"SCL",
    To:"GRU",
    Distance:2614.59,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"GYE",
    Distance:3600.11,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"IPC",
    Distance:3752.31,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"IQQ",
    Distance:1430.96,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"IQQ",
    Distance:1430.96,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"SCL",
    To:"IQQ",
    Distance:1430.96,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"JFK",
    Distance:8237.79,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"JFK",
    Distance:8237.79,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"LIM",
    Distance:2461.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"LIM",
    Distance:2461.89,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"SCL",
    To:"LIM",
    Distance:2461.89,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"LIM",
    Distance:2461.89,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"SCL",
    To:"LIM",
    Distance:2461.89,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"LIM",
    Distance:2461.89,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"LSC",
    Distance:388.573,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"LSC",
    Distance:388.573,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"SCL",
    To:"MAD",
    Distance:10719.7,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"MAD",
    Distance:10719.7,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"MDZ",
    Distance:195.824,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"MEX",
    Distance:6596.57,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"SCL",
    To:"MEX",
    Distance:6596.57,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"MIA",
    Distance:6657.49,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"MIA",
    Distance:6657.49,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"MIA",
    Distance:6657.49,
    Airport:"US Airways"
}),
new Routes(
{
    From:"SCL",
    To:"MVD",
    Distance:1366.54,
    Airport:"BQB Lineas Aereas"
}),
new Routes(
{
    From:"SCL",
    To:"MVD",
    Distance:1366.54,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"PMC",
    Distance:917.49,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"PMC",
    Distance:917.49,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"PMC",
    Distance:917.49,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"SCL",
    To:"PTY",
    Distance:4808.61,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"SCL",
    To:"PUJ",
    Distance:5783.45,
}),
new Routes(
{