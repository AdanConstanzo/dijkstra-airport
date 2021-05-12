var Routes = require('../models/Routes');

var mongoose = require("mongoose");

var connect = "mongodb://admin:supportftw117@ds155490.mlab.com:55490/dijkstra-airplanes"
mongoose.connect(connect);
console.log("Working.");

var routes = [

new Routes(
{
    From:"IND",
    To:"CUN",
    Distance:2077.95,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"IND",
    To:"DCA",
    Distance:802.103,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"IND",
    To:"DCA",
    Distance:802.103,
    Airport:"US Airways"
}),
new Routes(
{
    From:"IND",
    To:"DEN",
    Distance:1567.63,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"IND",
    To:"DEN",
    Distance:1567.63,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"IND",
    To:"DEN",
    Distance:1567.63,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"IND",
    To:"DEN",
    Distance:1567.63,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"IND",
    To:"DFW",
    Distance:1223.99,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"IND",
    To:"DFW",
    Distance:1223.99,
    Airport:"US Airways"
}),
new Routes(
{
    From:"IND",
    To:"DTW",
    Distance:371.372,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"IND",
    To:"EWR",
    Distance:1034.62,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"IND",
    To:"FLL",
    Distance:1620.86,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"IND",
    To:"HOU",
    Distance:1387.26,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"IND",
    To:"IAD",
    Distance:764.72,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"IND",
    To:"IAH",
    Distance:1359.53,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"IND",
    To:"JFK",
    Distance:1067.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"IND",
    To:"JFK",
    Distance:1067.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"IND",
    To:"JFK",
    Distance:1067.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"IND",
    To:"LAS",
    Distance:2552.88,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"IND",
    To:"LAS",
    Distance:2552.88,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"IND",
    To:"LAX",
    Distance:2912.88,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"IND",
    To:"LAX",
    Distance:2912.88,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"IND",
    To:"LAX",
    Distance:2912.88,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"IND",
    To:"LAX",
    Distance:2912.88,
    Airport:"US Airways"
}),
new Routes(
{
    From:"IND",
    To:"LGA",
    Distance:1059.91,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"IND",
    To:"MBJ",
    Distance:2492.41,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"IND",
    To:"MCI",
    Distance:723.562,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"IND",
    To:"MCI",
    Distance:723.562,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"IND",
    To:"MCO",
    Distance:1335.89,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"IND",
    To:"MCO",
    Distance:1335.89,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"IND",
    To:"MCO",
    Distance:1335.89,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"IND",
    To:"MEM",
    Distance:613.111,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"IND",
    To:"MIA",
    Distance:1645.85,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"IND",
    To:"MIA",
    Distance:1645.85,
    Airport:"US Airways"
}),
new Routes(
{
    From:"IND",
    To:"MSP",
    Distance:808.362,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"IND",
    To:"ORD",
    Distance:285.595,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"IND",
    To:"ORD",
    Distance:285.595,
    Airport:"US Airways"
}),
new Routes(
{
    From:"IND",
    To:"ORD",
    Distance:285.595,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"IND",
    To:"PHL",
    Distance:943.898,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"IND",
    To:"PHL",
    Distance:943.898,
    Airport:"US Airways"
}),
new Routes(
{
    From:"IND",
    To:"PHX",
    Distance:2390.83,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"IND",
    To:"PHX",
    Distance:2390.83,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"IND",
    To:"PHX",
    Distance:2390.83,
    Airport:"US Airways"
}),
new Routes(
{
    From:"IND",
    To:"RDU",
    Distance:785.275,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"IND",
    To:"RSW",
    Distance:1524.81,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"IND",
    To:"RSW",
    Distance:1524.81,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"IND",
    To:"SFO",
    Distance:3120.02,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"IND",
    To:"SLC",
    Distance:2175.06,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"IND",
    To:"TPA",
    Distance:1350.68,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"IND",
    To:"TPA",
    Distance:1350.68,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"IND",
    To:"TPA",
    Distance:1350.68,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"IND",
    To:"TTN",
    Distance:979.278,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"IND",
    To:"YYZ",
    Distance:706.7,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"INH",
    To:"JNB",
    Distance:764.217,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"INH",
    To:"MPM",
    Distance:365.342,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"INH",
    To:"VNX",
    Distance:206.83,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"INL",
    To:"BRD",
    Distance:247.301,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"INL",
    To:"MSP",
    Distance:409.9,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"INN",
    To:"AMS",
    Distance:733.077,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"INN",
    To:"EIN",
    Distance:635.197,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"INN",
    To:"FRA",
    Distance:370.015,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"INN",
    To:"FRA",
    Distance:370.015,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"INN",
    To:"LGW",
    Distance:941.475,
    Airport:"easyJet"
}),
new Routes(
{
    From:"INN",
    To:"PMI",
    Distance:1102.58,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"INN",
    To:"PMI",
    Distance:1102.58,
    Airport:"Niki"
}),
new Routes(
{
    From:"INN",
    To:"VIE",
    Distance:402.353,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"INU",
    To:"BNE",
    Distance:3327.74,
    Airport:"Nauru Air Corporation"
}),
new Routes(
{
    From:"INU",
    To:"MAJ",
    Distance:974.492,
    Airport:"Nauru Air Corporation"
}),
new Routes(
{
    From:"INU",
    To:"TRW",
    Distance:724.927,
    Airport:"Nauru Air Corporation"
}),
new Routes(
{
    From:"INV",
    To:"AMS",
    Distance:808.527,
    Airport:"Flybe"
}),
new Routes(
{
    From:"INV",
    To:"BHD",
    Distance:344.305,
    Airport:"Flybe"
}),
new Routes(
{
    From:"INV",
    To:"BHX",
    Distance:584.442,
    Airport:"Flybe"
}),
new Routes(
{
    From:"INV",
    To:"BRS",
    Distance:690.266,
    Airport:"easyJet"
}),
new Routes(
{
    From:"INV",
    To:"EDI",
    Distance:181.796,
    Airport:"Flybe"
}),
new Routes(
{
    From:"INV",
    To:"KOI",
    Distance:170.976,
    Airport:"Flybe"
}),
new Routes(
{
    From:"INV",
    To:"LGW",
    Distance:753.398,
    Airport:"easyJet"
}),
new Routes(
{
    From:"INV",
    To:"LSI",
    Distance:304.491,
    Airport:"Flybe"
}),
new Routes(
{
    From:"INV",
    To:"LTN",
    Distance:672.844,
    Airport:"easyJet"
}),
new Routes(
{
    From:"INV",
    To:"MAN",
    Distance:478.952,
    Airport:"Flybe"
}),
new Routes(
{
    From:"INV",
    To:"SYY",
    Distance:154.358,
    Airport:"Flybe"
}),
new Routes(
{
    From:"INZ",
    To:"ALG",
    Distance:1051.76,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"INZ",
    To:"TMR",
    Distance:575.59,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"IOA",
    To:"ATH",
    Distance:333.823,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"IOA",
    To:"ATH",
    Distance:333.823,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"IOM",
    To:"BHD",
    Distance:100.412,
    Airport:"Star1 Airlines"
}),
new Routes(
{
    From:"IOM",
    To:"BHX",
    Distance:263.411,
    Airport:"Flybe"
}),
new Routes(
{
    From:"IOM",
    To:"BLK",
    Distance:110.043,
    Airport:"Star1 Airlines"
}),
new Routes(
{
    From:"IOM",
    To:"DUB",
    Distance:130.887,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"IOM",
    To:"GLO",
    Distance:293.722,
    Airport:"Star1 Airlines"
}),
new Routes(
{
    From:"IOM",
    To:"LCY",
    Distance:425.466,
    Airport:"British Airways"
}),
new Routes(
{
    From:"IOM",
    To:"LGW",
    Distance:442.692,
    Airport:"easyJet"
}),
new Routes(
{
    From:"IOM",
    To:"LPL",
    Distance:143.466,
    Airport:"Flybe"
}),
new Routes(
{
    From:"IOM",
    To:"LPL",
    Distance:143.466,
    Airport:"easyJet"
}),
new Routes(
{
    From:"IOM",
    To:"MAN",
    Distance:174.545,
    Airport:"Flybe"
}),
new Routes(
{
    From:"IOM",
    To:"NCL",
    Distance:216.769,
    Airport:"Star1 Airlines"
}),
new Routes(
{
    From:"IOS",
    To:"BSB",
    Distance:959.912,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"IOS",
    To:"CGH",
    Distance:1264.31,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"IOS",
    To:"CNF",
    Distance:749.371,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"IOS",
    To:"GRU",
    Distance:1235.55,
    Airport:"Azul"
}),
new Routes(
{
    From:"IOS",
    To:"SDU",
    Distance:999.267,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"IOS",
    To:"SSA",
    Distance:224.976,
    Airport:"Azul"
}),
new Routes(
{
    From:"IOS",
    To:"SSA",
    Distance:224.976,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"IOS",
    To:"SSA",
    Distance:224.976,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"IOS",
    To:"VCP",
    Distance:1246.63,
    Airport:"Azul"
}),
new Routes(
{
    From:"IPA",
    To:"DLY",
    Distance:34.5056,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"IPA",
    To:"TAH",
    Distance:64.7528,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"IPA",
    To:"VLI",
    Distance:167.544,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"IPC",
    To:"PPT",
    Distance:4249.15,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"IPC",
    To:"SCL",
    Distance:3752.31,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"IPH",
    To:"SIN",
    Distance:481.52,
    Airport:"Firefly"
}),
new Routes(
{
    From:"IPH",
    To:"SIN",
    Distance:481.52,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"IPI",
    To:"BOG",
    Distance:579.212,
    Airport:"SATENA"
}),
new Routes(
{
    From:"IPL",
    To:"BUR",
    Distance:299.151,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"IPL",
    To:"SAN",
    Distance:151.009,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"IPN",
    To:"CNF",
    Distance:156.267,
    Airport:"Azul"
}),
new Routes(
{
    From:"IPN",
    To:"GRU",
    Distance:603.11,
    Airport:"Azul"
}),
new Routes(
{
    From:"IPN",
    To:"PLU",
    Distance:158.932,
    Airport:"Azul"
}),
new Routes(
{
    From:"IPT",
    To:"PHL",
    Distance:208.187,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"IPT",
    To:"PHL",
    Distance:208.187,
    Airport:"US Airways"
}),
new Routes(
{
    From:"IQN",
    To:"LHW",
    Distance:360.469,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"IQN",
    To:"LHW",
    Distance:360.469,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"IQN",
    To:"LHW",
    Distance:360.469,
    Airport:"China United"
}),
new Routes(
{
    From:"IQN",
    To:"NAY",
    Distance:889.327,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"IQN",
    To:"NAY",
    Distance:889.327,
    Airport:"China United"
}),
new Routes(
{
    From:"IQN",
    To:"XIY",
    Distance:183.115,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"IQQ",
    To:"ANF",
    Distance:324.636,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"IQQ",
    To:"ANF",
    Distance:324.636,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"IQQ",
    To:"ARI",
    Distance:243.709,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"IQQ",
    To:"ARI",
    Distance:243.709,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"IQQ",
    To:"LPB",
    Distance:493.916,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"IQQ",
    To:"SCL",
    Distance:1430.96,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"IQQ",
    To:"SCL",
    Distance:1430.96,
    Airport:"Pal airlines"
}),
new Routes(
{
    From:"IQQ",
    To:"SCL",
    Distance:1430.96,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"IQQ",
    To:"VVI",
    Distance:806.993,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"IQT",
    To:"LIM",
    Distance:1007.11,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"IQT",
    To:"LIM",
    Distance:1007.11,
    Airport:"Peruvian Airlines"
}),
new Routes(
{
    From:"IQT",
    To:"PCL",
    Distance:529.551,
    Airport:"Peruvian Airlines"
}),
new Routes(
{
    From:"IQT",
    To:"PCL",
    Distance:529.551,
    Airport:"Star Peru (2I)"
}),
new Routes(
{
    From:"IQT",
    To:"PTY",
    Distance:1580.17,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"IQT",
    To:"TPP",
    Distance:454.862,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"IQT",
    To:"TPP",
    Distance:454.862,
    Airport:"Star Peru (2I)"
}),
new Routes(
{
    From:"IRA",
    To:"HIR",
    Distance:231.648,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"IRA",
    To:"NNB",
    Distance:75.2064,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"IRA",
    To:"RNA",
    Distance:66.7524,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"IRG",
    To:"AUU",
    Distance:182.786,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"IRG",
    To:"CNS",
    Distance:526.37,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"IRJ",
    To:"AEP",
    Distance:977.294,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"IRK",
    To:"STL",
    Distance:239.28,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"IRP",
    To:"FKI",
    Distance:372.982,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"IRZ",
    To:"TFF",
    Distance:331.596,
    Airport:"Azul"
}),
new Routes(
{
    From:"ISA",
    To:"BNE",
    Distance:1571.42,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ISA",
    To:"BNE",
    Distance:1571.42,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ISA",
    To:"BQL",
    Distance:253.703,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"ISA",
    To:"CNJ",
    Distance:105.642,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ISA",
    To:"CNS",
    Distance:781.978,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"ISA",
    To:"DMD",
    Distance:310.822,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"ISA",
    To:"DRW",
    Distance:1297.77,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"ISA",
    To:"DRW",
    Distance:1297.77,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ISA",
    To:"JCK",
    Distance:232.464,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"ISA",
    To:"OOL",
    Distance:1644.15,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"ISA",
    To:"OOL",
    Distance:1644.15,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ISA",
    To:"TSV",
    Distance:776.473,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ISA",
    To:"TSV",
    Distance:776.473,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"ISB",
    To:"AUH",
    Distance:2059.2,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"AUH",
    Distance:2059.2,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"ISB",
    To:"AUH",
    Distance:2059.2,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"AUH",
    Distance:2059.2,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"AUH",
    Distance:2059.2,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"ISB",
    To:"AUH",
    Distance:2059.2,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ISB",
    To:"BAH",
    Distance:2307.55,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"ISB",
    To:"BCN",
    Distance:6152.36,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"BHV",
    Distance:492.365,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"BHX",
    Distance:6131.01,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"BKK",
    Distance:3562.59,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"ISB",
    To:"CDG",
    Distance:5909.42,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"CJL",
    Distance:278.892,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"CPH",
    Distance:5165.91,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"DMM",
    Distance:2372.99,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"DMM",
    Distance:2372.99,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"DOH",
    Distance:2276.87,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ISB",
    To:"DXB",
    Distance:1949.01,
    Airport:"Emirates"
}),
new Routes(
{
    From:"ISB",
    To:"DXB",
    Distance:1949.01,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"DXB",
    Distance:1949.01,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"ISB",
    To:"GIL",
    Distance:279.711,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"HEA",
    Distance:1004.84,
    Airport:"Safi Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"IST",
    Distance:3958.21,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"JED",
    Distance:3576.71,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"ISB",
    To:"JED",
    Distance:3576.71,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"JED",
    Distance:3576.71,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"JED",
    Distance:3576.71,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"ISB",
    To:"KBL",
    Distance:373.136,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"KBL",
    Distance:373.136,
    Airport:"Safi Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"KDU",
    Distance:293.961,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"KHI",
    Distance:1126.31,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"ISB",
    To:"KHI",
    Distance:1126.31,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"KHI",
    Distance:1126.31,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"ISB",
    To:"KWI",
    Distance:2427.66,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"ISB",
    To:"LBA",
    Distance:6095.14,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"LHE",
    Distance:263.074,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"LHR",
    Distance:6066.21,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"MAN",
    Distance:6145.76,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"MCT",
    Distance:1822.38,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"ISB",
    To:"MCT",
    Distance:1822.38,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"MED",
    Distance:3380.98,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"MUX",
    Distance:411.335,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"MXP",
    Distance:5519.23,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"PEK",
    Distance:3896.07,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"PEK",
    Distance:3896.07,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"PEW",
    Distance:152.304,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"RUH",
    Distance:2725.8,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"RUH",
    Distance:2725.8,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"RUH",
    Distance:2725.8,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"ISB",
    To:"SHJ",
    Distance:1931.53,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"SKT",
    Distance:168.327,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"SKZ",
    Distance:773.966,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"SKZ",
    Distance:773.966,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"ISB",
    To:"UET",
    Distance:691.226,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"ISB",
    To:"UET",
    Distance:691.226,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"UET",
    Distance:691.226,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"ISB",
    To:"URC",
    Distance:1687.39,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ISB",
    To:"YYZ",
    Distance:10986.2,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"ISC",
    To:"EXT",
    Distance:224.513,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"ISC",
    To:"LEQ",
    Distance:49.8926,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"ISC",
    To:"NQY",
    Distance:109.964,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"ISE",
    To:"IST",
    Distance:371.859,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ISG",
    To:"FUK",
    Distance:1194.01,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ISG",
    To:"HND",
    Distance:1947.36,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ISG",
    To:"HND",
    Distance:1947.36,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"ISG",
    To:"KIX",
    Distance:1549.13,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ISG",
    To:"KIX",
    Distance:1549.13,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"ISG",
    To:"KIX",
    Distance:1549.13,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"ISG",
    To:"MMY",
    Distance:122.206,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ISG",
    To:"NGO",
    Distance:1686.83,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ISG",
    To:"OKA",
    Distance:404.129,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ISG",
    To:"OKA",
    Distance:404.129,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"ISG",
    To:"OKA",
    Distance:404.129,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"ISG",
    To:"OKA",
    Distance:404.129,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"ISG",
    To:"TPE",
    Distance:309.335,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"ISG",
    To:"TPE",
    Distance:309.335,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"ISN",
    To:"DEN",
    Distance:928.37,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ISN",
    To:"MSP",
    Distance:876.42,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ISP",
    To:"BOS",
    Distance:246.577,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ISP",
    To:"BOS",
    Distance:246.577,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"ISP",
    To:"BWI",
    Distance:353.31,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ISP",
    To:"BWI",
    Distance:353.31,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ISP",
    To:"DCA",
    Distance:399.633,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ISP",
    To:"DCA",
    Distance:399.633,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ISP",
    To:"FLL",
    Distance:1761.45,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ISP",
    To:"FLL",
    Distance:1761.45,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ISP",
    To:"MCO",
    Distance:1565.05,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ISP",
    To:"MCO",
    Distance:1565.05,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ISP",
    To:"PBI",
    Distance:1695.77,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ISP",
    To:"PGD",
    Distance:1745.35,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"ISP",
    To:"PHL",
    Distance:208.49,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ISP",
    To:"PHL",
    Distance:208.49,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ISP",
    To:"SNA",
    Distance:3997.08,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ISP",
    To:"TPA",
    Distance:1665.31,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ISP",
    To:"TPA",
    Distance:1665.31,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"IST",
    To:"AAE",
    Distance:1870.48,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"IST",
    To:"AAL",
    Distance:2247.18,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"IST",
    To:"AAL",
    Distance:2247.18,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ACC",
    Distance:4874.34,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ADA",
    Distance:713.564,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"IST",
    To:"ADA",
    Distance:713.564,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"IST",
    To:"ADA",
    Distance:713.564,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ADB",
    Distance:330.521,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"IST",
    To:"ADB",
    Distance:330.521,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"IST",
    To:"ADB",
    Distance:330.521,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ADB",
    Distance:330.521,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ADD",
    Distance:3691.69,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ADF",
    Distance:904.467,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"AER",
    Distance:957.066,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"IST",
    To:"AER",
    Distance:957.066,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"AGP",
    Distance:2907.2,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"AJI",
    Distance:1212.57,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ALA",
    Distance:3927.92,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"IST",
    To:"ALA",
    Distance:3927.92,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ALG",
    Distance:2259.3,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"IST",
    To:"ALG",
    Distance:2259.3,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"AMM",
    Distance:1212.31,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"IST",
    To:"AMM",
    Distance:1212.31,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"AMS",
    Distance:2210.07,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"IST",
    To:"AMS",
    Distance:2210.07,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"AQJ",
    Distance:1382.52,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ARN",
    Distance:2209.31,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"IST",
    To:"ARN",
    Distance:2209.31,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ASB",
    Distance:2545.17,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ASB",
    Distance:2545.17,
    Airport:"Turkmenistan Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ASR",
    Distance:620.457,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ATH",
    Distance:537.557,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ATH",
    Distance:537.557,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ATH",
    Distance:537.557,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"AUH",
    Distance:3017.84,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"IST",
    To:"AUH",
    Distance:3017.84,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"AYT",
    Distance:484.873,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"IST",
    To:"AYT",
    Distance:484.873,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"IST",
    To:"AYT",
    Distance:484.873,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BAH",
    Distance:2586.06,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"IST",
    To:"BAH",
    Distance:2586.06,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BAL",
    Distance:1108.13,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BCN",
    Distance:2230.41,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BEG",
    Distance:813.287,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BEN",
    Distance:1246.75,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"IST",
    To:"BEN",
    Distance:1246.75,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BEN",
    Distance:1246.75,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BEY",
    Distance:989.604,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BEY",
    Distance:989.604,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BGG",
    Distance:1030.74,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BGW",
    Distance:1610.35,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BHX",
    Distance:2628.58,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BIO",
    Distance:2612.76,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BJV",
    Distance:426.174,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"IST",
    To:"BJV",
    Distance:426.174,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"IST",
    To:"BJV",
    Distance:426.174,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BKK",
    Distance:7506.25,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"IST",
    To:"BKK",
    Distance:7506.25,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BLL",
    Distance:2176.64,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BLQ",
    Distance:1481.32,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BOM",
    Distance:4819.95,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IST",
    To:"BOM",
    Distance:4819.95,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BRE",
    Distance:2014.09,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BRU",
    Distance:2166.25,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BSL",
    Distance:1839.37,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BSR",
    Distance:2051.11,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BUD",
    Distance:1045.7,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"BUS",
    Distance:1069.47,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"CAI",
    Distance:1229.4,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"IST",
    To:"CAI",
    Distance:1229.4,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"CAN",
    Distance:7885.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"IST",
    To:"CAN",
    Distance:7885.48,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"CDG",
    Distance:2235.68,
    Airport:"Air France"
}),
new Routes(
{
    From:"IST",
    To:"CDG",
    Distance:2235.68,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"IST",
    To:"CDG",
    Distance:2235.68,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"CGN",
    Distance:1993.15,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"CMN",
    Distance:3308.74,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"IST",
    To:"CMN",
    Distance:3308.74,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"CND",
    Distance:377.371,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"CPH",
    Distance:2009.14,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"IST",
    To:"CPH",
    Distance:2009.14,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"CZL",
    Distance:1991.49,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"IST",
    To:"DAC",
    Distance:5957.85,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DAR",
    Distance:5426.03,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DEL",
    Distance:4558.52,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IST",
    To:"DEL",
    Distance:4558.52,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DIY",
    Distance:1035.27,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"IST",
    To:"DIY",
    Distance:1035.27,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DLA",
    Distance:4531.81,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DLM",
    Distance:474.124,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"IST",
    To:"DLM",
    Distance:474.124,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DMM",
    Distance:2511.43,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DMM",
    Distance:2511.43,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DNK",
    Distance:958.706,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DNK",
    Distance:958.706,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DNK",
    Distance:958.706,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"IST",
    To:"DNZ",
    Distance:362.947,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DOH",
    Distance:2731.42,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"IST",
    To:"DOH",
    Distance:2731.42,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DOK",
    Distance:1058.45,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DOK",
    Distance:1058.45,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DOK",
    Distance:1058.45,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DUB",
    Distance:2949.17,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DUS",
    Distance:2037.05,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DXB",
    Distance:3008.37,
    Airport:"Emirates"
}),
new Routes(
{
    From:"IST",
    To:"DXB",
    Distance:3008.37,
    Airport:"Qantas"
}),
new Routes(
{
    From:"IST",
    To:"DXB",
    Distance:3008.37,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"DYU",
    Distance:3400.84,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"IST",
    To:"DYU",
    Distance:3400.84,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"IST",
    To:"DYU",
    Distance:3400.84,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"EBL",
    Distance:1415.46,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"IST",
    To:"EBL",
    Distance:1415.46,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ECN",
    Distance:765.93,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"IST",
    To:"ECN",
    Distance:765.93,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"IST",
    To:"ECN",
    Distance:765.93,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"EDI",
    Distance:2857.66,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ELQ",
    Distance:2133.61,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ERC",
    Distance:918.132,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ERZ",
    Distance:1050.47,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"IST",
    To:"ERZ",
    Distance:1050.47,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ESB",
    Distance:365.549,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"EZS",
    Distance:932.438,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"IST",
    To:"EZS",
    Distance:932.438,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"FCO",
    Distance:1382.67,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"IST",
    To:"FCO",
    Distance:1382.67,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"FDH",
    Distance:1700.2,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"FIH",
    Distance:5224.28,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"FRA",
    Distance:1863.84,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"IST",
    To:"FRA",
    Distance:1863.84,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"FRA",
    Distance:1863.84,
    Airport:"US Airways"
}),
new Routes(
{
    From:"IST",
    To:"FRU",
    Distance:3732.49,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"IST",
    To:"FRU",
    Distance:3732.49,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"GNY",
    Distance:952.511,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"IST",
    To:"GNY",
    Distance:952.511,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"GOA",
    Distance:1672.18,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"GOT",
    Distance:2195.77,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"IST",
    To:"GOT",
    Distance:2195.77,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"GRU",
    Distance:10548.5,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"GUW",
    Distance:1952.77,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"IST",
    To:"GVA",
    Distance:1911.71,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"GYD",
    Distance:1785.77,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"IST",
    To:"GYD",
    Distance:1785.77,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"GZP",
    Distance:601.738,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"IST",
    To:"GZT",
    Distance:872.256,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"IST",
    To:"GZT",
    Distance:872.256,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"IST",
    To:"GZT",
    Distance:872.256,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"HAJ",
    Distance:1927.58,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"HAM",
    Distance:1986.92,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"HBE",
    Distance:1121.33,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"IST",
    To:"HBE",
    Distance:1121.33,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"HEL",
    Distance:2166.73,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"IST",
    To:"HEL",
    Distance:2166.73,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"HKG",
    Distance:8008.93,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"HRG",
    Distance:1600.78,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"IST",
    To:"HRG",
    Distance:1600.78,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"HTY",
    Distance:826.228,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"IAD",
    Distance:8413.02,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"IAD",
    Distance:8413.02,
    Airport:"US Airways"
}),
new Routes(
{
    From:"IST",
    To:"IAH",
    Distance:10258.8,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"IAH",
    Distance:10258.8,
    Airport:"US Airways"
}),
new Routes(
{
    From:"IST",
    To:"ICN",
    Distance:7937.05,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ICN",
    Distance:7937.05,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"IST",
    To:"ICN",
    Distance:7937.05,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"IFN",
    Distance:2236.15,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"IGD",
    Distance:1276.25,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"IKA",
    Distance:2040.98,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"IST",
    To:"IKA",
    Distance:2040.98,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"IST",
    To:"IKA",
    Distance:2040.98,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"IST",
    To:"IKA",
    Distance:2040.98,
    Airport:"Mahan Air"
}),
new Routes(
{
    From:"IST",
    To:"IKA",
    Distance:2040.98,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ISB",
    Distance:3958.21,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ISE",
    Distance:371.859,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ISU",
    Distance:1558.1,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"IST",
    To:"ISU",
    Distance:1558.1,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"JED",
    Distance:2355.66,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"IST",
    To:"JED",
    Distance:2355.66,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"JFK",
    Distance:8051.75,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"JFK",
    Distance:8051.75,
    Airport:"US Airways"
}),
new Routes(
{
    From:"IST",
    To:"JIB",
    Distance:3560.05,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"JNB",
    Distance:7463.2,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"JRO",
    Distance:5008.54,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KAN",
    Distance:3776.47,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KBL",
    Distance:3588.63,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KBP",
    Distance:1054.04,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KBP",
    Distance:1054.04,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"IST",
    To:"KBP",
    Distance:1054.04,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KBP",
    Distance:1054.04,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KCM",
    Distance:797.747,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KFS",
    Distance:418.765,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KGL",
    Distance:4777.21,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"IST",
    To:"KGL",
    Distance:4777.21,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KHI",
    Distance:3957.41,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KIV",
    Distance:661.767,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"IST",
    To:"KIV",
    Distance:661.767,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KIX",
    Distance:8759.19,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"IST",
    To:"KIX",
    Distance:8759.19,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KRT",
    Distance:2845.86,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KSH",
    Distance:1770.44,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KSY",
    Distance:1203.81,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KTM",
    Distance:5301.45,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KUL",
    Distance:8376.6,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KUL",
    Distance:8376.6,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KVD",
    Distance:1469.8,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KWI",
    Distance:2169.69,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"IST",
    To:"KWI",
    Distance:2169.69,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KYA",
    Distance:463.117,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KZN",
    Distance:2205.69,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"KZR",
    Distance:235.722,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"LAX",
    Distance:11034.2,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"LAX",
    Distance:11034.2,
    Airport:"US Airways"
}),
new Routes(
{
    From:"IST",
    To:"LED",
    Distance:2095.46,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"IST",
    To:"LED",
    Distance:2095.46,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"LEJ",
    Distance:1718.45,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"LGW",
    Distance:2485.1,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"LHE",
    Distance:4171.27,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"LHR",
    Distance:2513.26,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"IST",
    To:"LHR",
    Distance:2513.26,
    Airport:"British Airways"
}),
new Routes(
{
    From:"IST",
    To:"LHR",
    Distance:2513.26,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"LIS",
    Distance:3222.08,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"IST",
    To:"LIS",
    Distance:3222.08,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"LJU",
    Distance:1292.32,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"IST",
    To:"LJU",
    Distance:1292.32,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"LOS",
    Distance:4584.34,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"LTN",
    Distance:2519.77,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"IST",
    To:"LUX",
    Distance:2001.39,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"LWO",
    Distance:1052.6,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"LYS",
    Distance:1981.35,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MAD",
    Distance:2713.11,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MAN",
    Distance:2692.29,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MCT",
    Distance:3351.32,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"IST",
    To:"MCT",
    Distance:3351.32,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MED",
    Distance:2086.88,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MED",
    Distance:2086.88,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MHD",
    Distance:2715.49,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MLA",
    Distance:1370.44,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"IST",
    To:"MLA",
    Distance:1370.44,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MLE",
    Distance:6042.14,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MLX",
    Distance:841.856,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"IST",
    To:"MLX",
    Distance:841.856,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MQM",
    Distance:1100.67,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MRA",
    Distance:1555.88,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"IST",
    To:"MRA",
    Distance:1555.88,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MRS",
    Distance:1956.33,
    Airport:"Air France"
}),
new Routes(
{
    From:"IST",
    To:"MRS",
    Distance:1956.33,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MSQ",
    Distance:1436.22,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MSQ",
    Distance:1436.22,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MSR",
    Distance:1123.02,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MUC",
    Distance:1571.61,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MUC",
    Distance:1571.61,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"IST",
    To:"MUC",
    Distance:1571.61,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MUC",
    Distance:1571.61,
    Airport:"US Airways"
}),
new Routes(
{
    From:"IST",
    To:"MXP",
    Distance:1700.46,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MZH",
    Distance:563.809,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"MZR",
    Distance:3331.92,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"NAJ",
    Distance:1427.66,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"NAP",
    Distance:1218.74,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"NAV",
    Distance:546.085,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"NBC",
    Distance:2329.6,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"IST",
    To:"NBO",
    Distance:4774.19,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"IST",
    To:"NBO",
    Distance:4774.19,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"NCE",
    Distance:1795.42,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"NIM",
    Distance:4001.45,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"NJF",
    Distance:1710.55,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"NRT",
    Distance:8996.51,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"IST",
    To:"NRT",
    Distance:8996.51,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"NSI",
    Distance:4487.49,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"NUE",
    Distance:1675.34,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ODS",
    Distance:624.153,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ODS",
    Distance:624.153,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"IST",
    To:"ODS",
    Distance:624.153,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ODS",
    Distance:624.153,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ORD",
    Distance:8813.93,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ORD",
    Distance:8813.93,
    Airport:"US Airways"
}),
new Routes(
{
    From:"IST",
    To:"ORN",
    Distance:2623.35,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"IST",
    To:"ORN",
    Distance:2623.35,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"OSL",
    Distance:2458.14,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"IST",
    To:"OSL",
    Distance:2458.14,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"OSS",
    Distance:3662.46,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"IST",
    To:"OSS",
    Distance:3662.46,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"OTP",
    Distance:456.913,
    Airport:"Tarom"
}),
new Routes(
{
    From:"IST",
    To:"OTP",
    Distance:456.913,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"OVB",
    Distance:4176.66,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"PEK",
    Distance:7071.6,
    Airport:"Air China"
}),
new Routes(
{
    From:"IST",
    To:"PEK",
    Distance:7071.6,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"PRG",
    Distance:1516.42,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"PRN",
    Distance:668.742,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"PVG",
    Distance:8030.03,
    Airport:"Air China"
}),
new Routes(
{
    From:"IST",
    To:"PVG",
    Distance:8030.03,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"RIX",
    Distance:1807,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ROV",
    Distance:1120.4,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ROV",
    Distance:1120.4,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"RTM",
    Distance:2214.15,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"RUH",
    Distance:2430.75,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"IST",
    To:"RUH",
    Distance:2430.75,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"SAH",
    Distance:3200.67,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"SCO",
    Distance:1850.73,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"IST",
    To:"SIN",
    Distance:8669.31,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"IST",
    To:"SIN",
    Distance:8669.31,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"IST",
    To:"SIN",
    Distance:8669.31,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"SJJ",
    Distance:916.374,
    Airport:"Air Bosna"
}),
new Routes(
{
    From:"IST",
    To:"SJJ",
    Distance:916.374,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"SKG",
    Distance:494.79,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"SKP",
    Distance:609.062,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"SOF",
    Distance:486.985,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"SSH",
    Distance:1532.42,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"IST",
    To:"SSH",
    Distance:1532.42,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"STR",
    Distance:1759.72,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"SVO",
    Distance:1780.66,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"IST",
    To:"SVX",
    Distance:2880.61,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"SYZ",
    Distance:2493.24,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"SZG",
    Distance:1463.16,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"TAS",
    Distance:3358.77,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"TAS",
    Distance:3358.77,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"IST",
    To:"TBS",
    Distance:1348.04,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"IST",
    To:"TBS",
    Distance:1348.04,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"TBZ",
    Distance:1523.83,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"TGD",
    Distance:808.586,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"TIA",
    Distance:762.103,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"TIF",
    Distance:2432.22,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"TIP",
    Distance:1668.24,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"IST",
    To:"TIP",
    Distance:1668.24,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"IST",
    To:"TIP",
    Distance:1668.24,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"TLL",
    Distance:2068.63,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"TLS",
    Distance:2266.21,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"TLV",
    Distance:1134.37,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"TRN",
    Distance:1775.93,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"TSE",
    Distance:3423.67,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"IST",
    To:"TSE",
    Distance:3423.67,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"TUN",
    Distance:1668.65,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"IST",
    To:"TUN",
    Distance:1668.65,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"TXL",
    Distance:1741.2,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"TZX",
    Distance:920.621,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"IST",
    To:"TZX",
    Distance:920.621,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"UFA",
    Distance:2497.95,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"URC",
    Distance:4722.07,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"IST",
    To:"VAN",
    Distance:1270.96,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"VAS",
    Distance:696.838,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"VCE",
    Distance:1422.21,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"VIE",
    Distance:1250.73,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"IST",
    To:"VIE",
    Distance:1250.73,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"IST",
    To:"VIE",
    Distance:1250.73,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"VKO",
    Distance:1738.09,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"IST",
    To:"VKO",
    Distance:1738.09,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"VLC",
    Distance:2480.76,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"VNO",
    Distance:1540.81,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"WAW",
    Distance:1379.29,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"WAW",
    Distance:1379.29,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"YNB",
    Distance:2059.62,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"YYZ",
    Distance:8198.83,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"IST",
    To:"YYZ",
    Distance:8198.83,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ZAG",
    Distance:1156.86,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ZAG",
    Distance:1156.86,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ZRH",
    Distance:1761.94,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ZRH",
    Distance:1761.94,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"IST",
    To:"ZRH",
    Distance:1761.94,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"IST",
    To:"ZRH",
    Distance:1761.94,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ISU",
    To:"AMM",
    Distance:962.085,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"ISU",
    To:"ARN",
    Distance:3325.97,
    Airport:"Germania"
}),
new Routes(
{
    From:"ISU",
    To:"ARN",
    Distance:3325.97,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"ISU",
    To:"DOH",
    Distance:1291.84,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ISU",
    To:"DUS",
    Distance:3514.17,
    Airport:"Germania"
}),
new Routes(
{
    From:"ISU",
    To:"DXB",
    Distance:1495.63,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"ISU",
    To:"IKA",
    Distance:528.688,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"ISU",
    To:"IST",
    Distance:1558.1,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"ISU",
    To:"IST",
    Distance:1558.1,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ISU",
    To:"MUC",
    Distance:3082.38,
    Airport:"Germania"
}),
new Routes(
{
    From:"ITB",
    To:"STM",
    Distance:243.155,
    Airport:"Amerijet International"
}),
new Routes(
{
    From:"ITB",
    To:"STM",
    Distance:243.155,
    Airport:"Azul"
}),
new Routes(
{
    From:"ITH",
    To:"DTW",
    Distance:567.286,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ITH",
    To:"EWR",
    Distance:276.122,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ITH",
    To:"PHL",
    Distance:308.523,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ITH",
    To:"PHL",
    Distance:308.523,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ITM",
    To:"AOJ",
    Distance:806.368,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"ASJ",
    Distance:890.291,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"AXT",
    Distance:683.656,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ITM",
    To:"AXT",
    Distance:683.656,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"CTS",
    Distance:1040.02,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ITM",
    To:"CTS",
    Distance:1040.02,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"CTS",
    Distance:1040.02,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"FKS",
    Distance:524.689,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ITM",
    To:"FKS",
    Distance:524.689,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"FUK",
    Distance:477.702,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ITM",
    To:"FUK",
    Distance:477.702,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"FUK",
    Distance:477.702,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"GAJ",
    Distance:596.925,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"HKD",
    Distance:907.285,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"HNA",
    Distance:722.034,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"HND",
    Distance:403.694,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ITM",
    To:"HND",
    Distance:403.694,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"KCZ",
    Distance:213.244,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ITM",
    To:"KIJ",
    Distance:449.236,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ITM",
    To:"KIJ",
    Distance:449.236,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"KMI",
    Distance:491.811,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ITM",
    To:"KMI",
    Distance:491.811,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"KMJ",
    Distance:475.558,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ITM",
    To:"KMJ",
    Distance:475.558,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"KOJ",
    Distance:549.709,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ITM",
    To:"KOJ",
    Distance:549.709,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"MSJ",
    Distance:839.107,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"MYJ",
    Distance:273.161,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ITM",
    To:"MYJ",
    Distance:273.161,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"NGS",
    Distance:550.757,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ITM",
    To:"NGS",
    Distance:550.757,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"NRT",
    Distance:462.135,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ITM",
    To:"NRT",
    Distance:462.135,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"NRT",
    Distance:462.135,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"OIT",
    Distance:370.276,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ITM",
    To:"OIT",
    Distance:370.276,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"OIT",
    Distance:370.276,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"OKA",
    Distance:1211.37,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ITM",
    To:"OKA",
    Distance:1211.37,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"SDJ",
    Distance:615.559,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ITM",
    To:"SDJ",
    Distance:615.559,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"ITM",
    To:"SDJ",
    Distance:615.559,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ITO",
    To:"HNL",
    Distance:348.011,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"ITO",
    To:"HNL",
    Distance:348.011,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ITO",
    To:"LAX",
    Distance:3937.28,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ITO",
    To:"OGG",
    Distance:194.692,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"IUE",
    To:"AKL",
    Distance:2487.25,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"IVC",
    To:"CHC",
    Distance:464.506,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"IVC",
    To:"WLG",
    Distance:767.967,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"IVL",
    To:"KTT",
    Distance:146.134,
    Airport:"Air France"
}),
new Routes(
{
    From:"IVL",
    To:"KTT",
    Distance:146.134,
    Airport:"Finnair"
}),
new Routes(
{
    From:"IWJ",
    To:"HND",
    Distance:733.013,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"IXA",
    To:"CCU",
    Distance:316.554,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXA",
    To:"CCU",
    Distance:316.554,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"IXA",
    To:"CCU",
    Distance:316.554,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"IXA",
    To:"CCU",
    Distance:316.554,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXA",
    To:"CCU",
    Distance:316.554,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IXA",
    To:"GAU",
    Distance:249.198,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"IXA",
    To:"GAU",
    Distance:249.198,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IXA",
    To:"IMF",
    Distance:286.105,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"IXB",
    To:"BKK",
    Distance:1938.71,
    Airport:"Druk Air"
}),
new Routes(
{
    From:"IXB",
    To:"CCU",
    Distance:447.882,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXB",
    To:"CCU",
    Distance:447.882,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"IXB",
    To:"CCU",
    Distance:447.882,
    Airport:"Go Air"
}),
new Routes(
{
    From:"IXB",
    To:"CCU",
    Distance:447.882,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"IXB",
    To:"CCU",
    Distance:447.882,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXB",
    To:"CCU",
    Distance:447.882,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IXB",
    To:"DEL",
    Distance:1125.16,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXB",
    To:"DEL",
    Distance:1125.16,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"IXB",
    To:"DEL",
    Distance:1125.16,
    Airport:"Go Air"
}),
new Routes(
{
    From:"IXB",
    To:"DEL",
    Distance:1125.16,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"IXB",
    To:"DEL",
    Distance:1125.16,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXB",
    To:"DEL",
    Distance:1125.16,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IXB",
    To:"GAU",
    Distance:330.679,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"IXB",
    To:"GAU",
    Distance:330.679,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IXB",
    To:"PBH",
    Distance:135.01,
    Airport:"Druk Air"
}),
new Routes(
{
    From:"IXC",
    To:"BOM",
    Distance:1347.18,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"IXC",
    To:"BOM",
    Distance:1347.18,
    Airport:"Go Air"
}),
new Routes(
{
    From:"IXC",
    To:"BOM",
    Distance:1347.18,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"IXC",
    To:"BOM",
    Distance:1347.18,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXC",
    To:"DEL",
    Distance:236.249,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXC",
    To:"DEL",
    Distance:236.249,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"IXC",
    To:"DEL",
    Distance:236.249,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXC",
    To:"DEL",
    Distance:236.249,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IXC",
    To:"SXR",
    Distance:414.199,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IXD",
    To:"BOM",
    Distance:1153.1,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXD",
    To:"DEL",
    Distance:575.519,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXE",
    To:"AUH",
    Distance:2479.09,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"IXE",
    To:"BLR",
    Distance:301.052,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXE",
    To:"BLR",
    Distance:301.052,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"IXE",
    To:"BLR",
    Distance:301.052,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXE",
    To:"BLR",
    Distance:301.052,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IXE",
    To:"BOM",
    Distance:714.753,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"IXE",
    To:"BOM",
    Distance:714.753,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXE",
    To:"BOM",
    Distance:714.753,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"IXE",
    To:"BOM",
    Distance:714.753,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXE",
    To:"BOM",
    Distance:714.753,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IXE",
    To:"DMM",
    Distance:3016.32,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"IXE",
    To:"DOH",
    Distance:2799.25,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"IXE",
    To:"DXB",
    Distance:2459.75,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"IXE",
    To:"DXB",
    Distance:2459.75,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXE",
    To:"SHJ",
    Distance:2450.75,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"IXG",
    To:"BLR",
    Distance:460.996,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IXJ",
    To:"BOM",
    Distance:1524.98,
    Airport:"Go Air"
}),
new Routes(
{
    From:"IXJ",
    To:"DEL",
    Distance:507.05,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXJ",
    To:"DEL",
    Distance:507.05,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"IXJ",
    To:"DEL",
    Distance:507.05,
    Airport:"Go Air"
}),
new Routes(
{
    From:"IXJ",
    To:"DEL",
    Distance:507.05,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"IXJ",
    To:"DEL",
    Distance:507.05,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXJ",
    To:"DEL",
    Distance:507.05,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IXJ",
    To:"IXL",
    Distance:298.491,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXJ",
    To:"SXR",
    Distance:144.45,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXJ",
    To:"SXR",
    Distance:144.45,
    Airport:"Go Air"
}),
new Routes(
{
    From:"IXJ",
    To:"SXR",
    Distance:144.45,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"IXJ",
    To:"SXR",
    Distance:144.45,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IXL",
    To:"DEL",
    Distance:620.713,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXL",
    To:"DEL",
    Distance:620.713,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"IXL",
    To:"DEL",
    Distance:620.713,
    Airport:"Go Air"
}),
new Routes(
{
    From:"IXL",
    To:"DEL",
    Distance:620.713,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXL",
    To:"IXJ",
    Distance:298.491,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXL",
    To:"SXR",
    Distance:255.902,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXM",
    To:"CMB",
    Distance:354.751,
    Airport:"L"
}),
new Routes(
{
    From:"IXM",
    To:"CMB",
    Distance:354.751,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IXM",
    To:"CMB",
    Distance:354.751,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"IXM",
    To:"HYD",
    Distance:848.113,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IXM",
    To:"MAA",
    Distance:418.562,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXM",
    To:"MAA",
    Distance:418.562,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"IXM",
    To:"MAA",
    Distance:418.562,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXM",
    To:"MAA",
    Distance:418.562,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IXR",
    To:"BOM",
    Distance:1373.19,
    Airport:"Go Air"
}),
new Routes(
{
    From:"IXR",
    To:"BOM",
    Distance:1373.19,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"IXR",
    To:"CCU",
    Distance:328.192,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"IXR",
    To:"CCU",
    Distance:328.192,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"IXR",
    To:"CCU",
    Distance:328.192,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXR",
    To:"DEL",
    Distance:1007.67,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXR",
    To:"DEL",
    Distance:1007.67,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"IXR",
    To:"DEL",
    Distance:1007.67,
    Airport:"Go Air"
}),
new Routes(
{
    From:"IXR",
    To:"DEL",
    Distance:1007.67,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"IXR",
    To:"DEL",
    Distance:1007.67,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXR",
    To:"PAT",
    Distance:254.301,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"IXS",
    To:"CCU",
    Distance:525.014,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXS",
    To:"CCU",
    Distance:525.014,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"IXS",
    To:"CCU",
    Distance:525.014,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXS",
    To:"GAU",
    Distance:192.712,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXS",
    To:"GAU",
    Distance:192.712,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"IXS",
    To:"GAU",
    Distance:192.712,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXS",
    To:"IMF",
    Distance:94.18,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXU",
    To:"BOM",
    Distance:278.857,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXU",
    To:"BOM",
    Distance:278.857,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"IXU",
    To:"BOM",
    Distance:278.857,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXU",
    To:"DEL",
    Distance:983.092,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXU",
    To:"DEL",
    Distance:983.092,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IXZ",
    To:"CCU",
    Distance:1306.16,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXZ",
    To:"CCU",
    Distance:1306.16,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"IXZ",
    To:"CCU",
    Distance:1306.16,
    Airport:"Go Air"
}),
new Routes(
{
    From:"IXZ",
    To:"CCU",
    Distance:1306.16,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXZ",
    To:"CCU",
    Distance:1306.16,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IXZ",
    To:"DEL",
    Distance:2485.01,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXZ",
    To:"MAA",
    Distance:1371.41,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"IXZ",
    To:"MAA",
    Distance:1371.41,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"IXZ",
    To:"MAA",
    Distance:1371.41,
    Airport:"Go Air"
}),
new Routes(
{
    From:"IXZ",
    To:"MAA",
    Distance:1371.41,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"IXZ",
    To:"MAA",
    Distance:1371.41,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"IZA",
    To:"CNF",
    Distance:224.79,
    Airport:"Azul"
}),
new Routes(
{
    From:"IZA",
    To:"VCP",
    Distance:440.199,
    Airport:"Azul"
}),
new Routes(
{
    From:"IZO",
    To:"HND",
    Distance:623.889,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"JAC",
    To:"DEN",
    Distance:652.915,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JAC",
    To:"SLC",
    Distance:329.665,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JAI",
    To:"AMD",
    Distance:525.498,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"JAI",
    To:"AUH",
    Distance:2135.58,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"JAI",
    To:"BLR",
    Distance:1554.82,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"JAI",
    To:"BOM",
    Distance:911.327,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"JAI",
    To:"BOM",
    Distance:911.327,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"JAI",
    To:"BOM",
    Distance:911.327,
    Airport:"Go Air"
}),
new Routes(
{
    From:"JAI",
    To:"BOM",
    Distance:911.327,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"JAI",
    To:"BOM",
    Distance:911.327,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"JAI",
    To:"CCU",
    Distance:1356.72,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"JAI",
    To:"DEL",
    Distance:231.701,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"JAI",
    To:"DEL",
    Distance:231.701,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"JAI",
    To:"DEL",
    Distance:231.701,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"JAI",
    To:"DEL",
    Distance:231.701,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"JAI",
    To:"HYD",
    Distance:1077.19,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"JAI",
    To:"MCT",
    Distance:1797.99,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"JAI",
    To:"SHJ",
    Distance:2031.64,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"JAI",
    To:"SHJ",
    Distance:2031.64,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"JAL",
    To:"MEX",
    Distance:238.518,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"JAL",
    To:"MEX",
    Distance:238.518,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"JAN",
    To:"ATL",
    Distance:546.991,
    Airport:"Air France"
}),
new Routes(
{
    From:"JAN",
    To:"ATL",
    Distance:546.991,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"JAN",
    To:"ATL",
    Distance:546.991,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"JAN",
    To:"ATL",
    Distance:546.991,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JAN",
    To:"ATL",
    Distance:546.991,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"JAN",
    To:"CLT",
    Distance:903.391,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JAN",
    To:"CLT",
    Distance:903.391,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JAN",
    To:"DCA",
    Distance:1383.24,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JAN",
    To:"DCA",
    Distance:1383.24,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JAN",
    To:"DFW",
    Distance:655.277,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JAN",
    To:"DFW",
    Distance:655.277,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JAN",
    To:"HOU",
    Distance:577.725,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"JAN",
    To:"HOU",
    Distance:577.725,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"JAN",
    To:"IAH",
    Distance:563.837,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JAN",
    To:"MCO",
    Distance:944.877,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"JAN",
    To:"MCO",
    Distance:944.877,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"JAN",
    To:"MDW",
    Distance:1073.42,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"JAN",
    To:"ORD",
    Distance:1091.95,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JAV",
    To:"GOH",
    Distance:561.483,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JAV",
    To:"JEG",
    Distance:90.1517,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JAV",
    To:"JQA",
    Distance:178.116,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JAV",
    To:"JUV",
    Distance:435.653,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JAV",
    To:"SFJ",
    Distance:247.026,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JAX",
    To:"ATL",
    Distance:434.452,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"JAX",
    To:"ATL",
    Distance:434.452,
    Airport:"Air France"
}),
new Routes(
{
    From:"JAX",
    To:"ATL",
    Distance:434.452,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"JAX",
    To:"ATL",
    Distance:434.452,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"ATL",
    Distance:434.452,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"JAX",
    To:"ATL",
    Distance:434.452,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JAX",
    To:"ATL",
    Distance:434.452,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"ATL",
    Distance:434.452,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"ATL",
    Distance:434.452,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"JAX",
    To:"BNA",
    Distance:778.835,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"BOS",
    Distance:1626.67,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JAX",
    To:"BOS",
    Distance:1626.67,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JAX",
    To:"BWI",
    Distance:1068.03,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"JAX",
    To:"BWI",
    Distance:1068.03,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"CLT",
    Distance:529.418,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"CLT",
    Distance:529.418,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JAX",
    To:"CVG",
    Distance:989.25,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JAX",
    To:"DCA",
    Distance:1021.64,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"DCA",
    Distance:1021.64,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JAX",
    To:"DEN",
    Distance:2324.93,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"DFW",
    Distance:1475.25,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"DFW",
    Distance:1475.25,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JAX",
    To:"DTW",
    Distance:1311.46,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JAX",
    To:"EWR",
    Distance:1320.95,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"FLL",
    Distance:514.091,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"HOU",
    Distance:1310.47,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"IAD",
    Distance:1015.81,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"IAH",
    Distance:1312.05,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"JFK",
    Distance:1334.47,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JAX",
    To:"JFK",
    Distance:1334.47,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JAX",
    To:"LAS",
    Distance:3155.81,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"LGA",
    Distance:1342.61,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JAX",
    To:"MDW",
    Distance:1367.67,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"MHH",
    Distance:631.169,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"MIA",
    Distance:540.344,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"MIA",
    Distance:540.344,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JAX",
    To:"MSP",
    Distance:1890.28,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JAX",
    To:"ORD",
    Distance:1392.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"ORD",
    Distance:1392.43,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JAX",
    To:"ORD",
    Distance:1392.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"PHL",
    Distance:1195.24,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JAX",
    To:"PHL",
    Distance:1195.24,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JAX",
    To:"SJU",
    Distance:2073.47,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JAX",
    To:"TPA",
    Distance:291.816,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JBQ",
    To:"AUA",
    Distance:675.084,
    Airport:"Omskavia Airline"
}),
new Routes(
{
    From:"JBQ",
    To:"PAP",
    Distance:243.155,
    Airport:"Omskavia Airline"
}),
new Routes(
{
    From:"JBQ",
    To:"PAP",
    Distance:243.155,
    Airport:"Salmon Air"
}),
new Routes(
{
    From:"JBR",
    To:"STL",
    Distance:325.274,
    Airport:"Air Choice One"
}),
new Routes(
{
    From:"JCB",
    To:"CFC",
    Distance:70.1353,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"JCB",
    To:"ERM",
    Distance:93.2548,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"JCB",
    To:"FLN",
    Distance:296.727,
    Airport:"NHT Lineas Aereas"
}),
new Routes(
{
    From:"JCK",
    To:"ISA",
    Distance:232.464,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"JCK",
    To:"RCM",
    Distance:1692.57,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"JDH",
    To:"BOM",
    Distance:796.639,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"JDH",
    To:"BOM",
    Distance:796.639,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"JDH",
    To:"BOM",
    Distance:796.639,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"JDH",
    To:"DEL",
    Distance:475.81,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"JDH",
    To:"DEL",
    Distance:475.81,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"JDH",
    To:"DEL",
    Distance:475.81,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"JDO",
    To:"BSB",
    Distance:1345.88,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"JDO",
    To:"FOR",
    Distance:391.413,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"JDO",
    To:"GRU",
    Distance:1959.92,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"JDO",
    To:"REC",
    Distance:489.557,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"JDO",
    To:"VCP",
    Distance:1946.61,
    Airport:"Azul"
}),
new Routes(
{
    From:"JDZ",
    To:"CAN",
    Distance:765.592,
    Airport:"Air China"
}),
new Routes(
{
    From:"JDZ",
    To:"CAN",
    Distance:765.592,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JDZ",
    To:"CTU",
    Distance:1281.13,
    Airport:"Air China"
}),
new Routes(
{
    From:"JDZ",
    To:"CTU",
    Distance:1281.13,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"JDZ",
    To:"FOC",
    Distance:450.808,
    Airport:"Air China"
}),
new Routes(
{
    From:"JDZ",
    To:"FOC",
    Distance:450.808,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JDZ",
    To:"PEK",
    Distance:1195.62,
    Airport:"Air China"
}),
new Routes(
{
    From:"JDZ",
    To:"PEK",
    Distance:1195.62,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JDZ",
    To:"SHA",
    Distance:449.811,
    Airport:"Air China"
}),
new Routes(
{
    From:"JDZ",
    To:"SHA",
    Distance:449.811,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JDZ",
    To:"SZX",
    Distance:817.215,
    Airport:"Air China"
}),
new Routes(
{
    From:"JDZ",
    To:"SZX",
    Distance:817.215,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JDZ",
    To:"XIY",
    Distance:976.733,
    Airport:"Air China"
}),
new Routes(
{
    From:"JDZ",
    To:"XIY",
    Distance:976.733,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JDZ",
    To:"XMN",
    Distance:541.406,
    Airport:"Air China"
}),
new Routes(
{
    From:"JDZ",
    To:"XMN",
    Distance:541.406,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"JED",
    To:"ABT",
    Distance:299.711,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"ADA",
    Distance:1742.09,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"ADD",
    Distance:1412.88,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"JED",
    To:"ADD",
    Distance:1412.88,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"ADD",
    Distance:1412.88,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"JED",
    To:"ADD",
    Distance:1412.88,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"ADD",
    Distance:1412.88,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"JED",
    To:"ADD",
    Distance:1412.88,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JED",
    To:"ADE",
    Distance:1164.57,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"ADE",
    Distance:1164.57,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"JED",
    To:"AHB",
    Distance:529.155,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"AHB",
    Distance:529.155,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"AJF",
    Distance:906.225,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"ALG",
    Distance:3837.5,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"AMM",
    Distance:1159.9,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"AMM",
    Distance:1159.9,
    Airport:"Royal Falcon"
}),
new Routes(
{
    From:"JED",
    To:"AMM",
    Distance:1159.9,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"JED",
    To:"AMM",
    Distance:1159.9,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"AQI",
    Distance:1019.71,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"ASM",
    Distance:710.754,
    Airport:"Nasair"
}),
new Routes(
{
    From:"JED",
    To:"ASW",
    Distance:697.251,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"ATZ",
    Distance:1017.72,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"AUH",
    Distance:1613.63,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"JED",
    To:"AUH",
    Distance:1613.63,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"AUH",
    Distance:1613.63,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"AWZ",
    Distance:1436.17,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"AZD",
    Distance:1879.32,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"BAH",
    Distance:1272.19,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"JED",
    To:"BAH",
    Distance:1272.19,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"BEN",
    Distance:2196.94,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"JED",
    To:"BEY",
    Distance:1397.16,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"JED",
    To:"BEY",
    Distance:1397.16,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"BHH",
    Distance:406.372,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"BLR",
    Distance:4189.96,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"BOM",
    Distance:3518.84,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"JED",
    To:"BOM",
    Distance:3518.84,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"JED",
    To:"BOM",
    Distance:3518.84,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"BWN",
    Distance:8335.87,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"JED",
    To:"CAI",
    Distance:1216.68,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"JED",
    To:"CAI",
    Distance:1216.68,
    Airport:"Nile Air"
}),
new Routes(
{
    From:"JED",
    To:"CAI",
    Distance:1216.68,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"CAN",
    Distance:7526.09,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"CCJ",
    Distance:4084.38,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"JED",
    To:"CCJ",
    Distance:4084.38,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"CDG",
    Distance:4427.11,
    Airport:"Air France"
}),
new Routes(
{
    From:"JED",
    To:"CDG",
    Distance:4427.11,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"CGK",
    Distance:7971.46,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"JED",
    To:"CGK",
    Distance:7971.46,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"JED",
    To:"CGK",
    Distance:7971.46,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"CGK",
    Distance:7971.46,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"CGP",
    Distance:5401.73,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"JED",
    To:"CMB",
    Distance:4653.75,
    Airport:"L"
}),
new Routes(
{
    From:"JED",
    To:"CMB",
    Distance:4653.75,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"CMB",
    Distance:4653.75,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"JED",
    To:"CMN",
    Distance:4747.45,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"CMN",
    Distance:4747.45,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"JED",
    To:"CMN",
    Distance:4747.45,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"DAC",
    Distance:5231.03,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"JED",
    To:"DAC",
    Distance:5231.03,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"DAC",
    Distance:5231.03,
    Airport:"United Airways"
}),
new Routes(
{
    From:"JED",
    To:"DEL",
    Distance:3879.71,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"JED",
    To:"DEL",
    Distance:3879.71,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"DMM",
    Distance:1203.89,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"DMM",
    Distance:1203.89,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"DOH",
    Distance:1326.11,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"JED",
    To:"DOH",
    Distance:1326.11,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"DWC",
    Distance:1660.72,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"JED",
    To:"DWD",
    Distance:621.205,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"DXB",
    Distance:1699,
    Airport:"Emirates"
}),
new Routes(
{
    From:"JED",
    To:"DXB",
    Distance:1699,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"JED",
    To:"DXB",
    Distance:1699,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"DXB",
    Distance:1699,
    Airport:"Qantas"
}),
new Routes(
{
    From:"JED",
    To:"DXB",
    Distance:1699,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"EAM",
    Distance:712.848,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"EJH",
    Distance:571.51,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"ELQ",
    Distance:695.773,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"FCO",
    Distance:3362.05,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"JED",
    To:"FCO",
    Distance:3362.05,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"FRA",
    Distance:4132.74,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"JED",
    To:"FRA",
    Distance:4132.74,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"FRA",
    Distance:4132.74,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"JED",
    To:"FRA",
    Distance:4132.74,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"FRA",
    Distance:4132.74,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"JED",
    To:"FRA",
    Distance:4132.74,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JED",
    To:"GBT",
    Distance:2241.69,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"GIZ",
    Distance:641.679,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"GIZ",
    Distance:641.679,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"GVA",
    Distance:4040.4,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"GXF",
    Distance:1195.77,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"JED",
    To:"HAS",
    Distance:689.457,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"HBE",
    Distance:1393.12,
    Airport:"Air Arabia Egypt"
}),
new Routes(
{
    From:"JED",
    To:"HBE",
    Distance:1393.12,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"JED",
    To:"HBE",
    Distance:1393.12,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"JED",
    To:"HBE",
    Distance:1393.12,
    Airport:"Express One International"
}),
new Routes(
{
    From:"JED",
    To:"HBE",
    Distance:1393.12,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"HBE",
    Distance:1393.12,
    Airport:"Nile Air"
}),
new Routes(
{
    From:"JED",
    To:"HBE",
    Distance:1393.12,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"HMB",
    Distance:913.835,
    Airport:"Marysya Airlines"
}),
new Routes(
{
    From:"JED",
    To:"HMB",
    Distance:913.835,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"HOD",
    Distance:869.318,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"JED",
    To:"HOF",
    Distance:1126.63,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"HTY",
    Distance:1656.2,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"HYD",
    Distance:4134.81,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"JED",
    To:"IAD",
    Distance:10591.6,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"IFN",
    Distance:1756.03,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"ISB",
    Distance:3576.71,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"ISB",
    Distance:3576.71,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"JED",
    To:"ISB",
    Distance:3576.71,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"ISB",
    Distance:3576.71,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"JED",
    To:"IST",
    Distance:2355.66,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"JED",
    To:"IST",
    Distance:2355.66,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"IST",
    Distance:2355.66,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"JED",
    To:"JFK",
    Distance:10225.4,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"JNB",
    Distance:5445.68,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"KAN",
    Distance:3423.21,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"KHI",
    Distance:2877.46,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"KHI",
    Distance:2877.46,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"JED",
    To:"KHI",
    Distance:2877.46,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"KRT",
    Distance:970.57,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"KRT",
    Distance:970.57,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"KRT",
    Distance:970.57,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"JED",
    To:"KUL",
    Distance:7065.69,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"JED",
    To:"KUL",
    Distance:7065.69,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"JED",
    To:"KUL",
    Distance:7065.69,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"KUL",
    Distance:7065.69,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"KWI",
    Distance:1218.56,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"JED",
    To:"KWI",
    Distance:1218.56,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"JED",
    To:"KWI",
    Distance:1218.56,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"JED",
    To:"KWI",
    Distance:1218.56,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"KWI",
    Distance:1218.56,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"LAX",
    Distance:13389.8,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"LGW",
    Distance:4714.36,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"LHE",
    Distance:3653.15,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"LHE",
    Distance:3653.15,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"JED",
    To:"LHE",
    Distance:3653.15,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"LHE",
    Distance:3653.15,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"JED",
    To:"LHR",
    Distance:4748.64,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JED",
    To:"LHR",
    Distance:4748.64,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"LKO",
    Distance:4251,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"LXR",
    Distance:792.512,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"JED",
    To:"LXR",
    Distance:792.512,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"MAA",
    Distance:4446.44,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"MAD",
    Distance:4516.74,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"JED",
    To:"MAD",
    Distance:4516.74,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"MAN",
    Distance:4957.31,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"MAN",
    Distance:4957.31,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"MCT",
    Distance:1973.09,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"JED",
    To:"MCT",
    Distance:1973.09,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"MED",
    Distance:324.443,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"MED",
    Distance:324.443,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"MHD",
    Distance:2557.5,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"MNL",
    Distance:8595.14,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"MUX",
    Distance:3349.37,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"JED",
    To:"MXP",
    Distance:3833.27,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"JED",
    To:"MXP",
    Distance:3833.27,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"NBO",
    Distance:2568.78,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"JED",
    To:"NBO",
    Distance:2568.78,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"OMH",
    Distance:1866.2,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"ORN",
    Distance:4145.3,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"PEW",
    Distance:3444.7,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"JED",
    To:"PEW",
    Distance:3444.7,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"JED",
    To:"PZU",
    Distance:320.037,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"JED",
    To:"RAE",
    Distance:1044.77,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"RAS",
    Distance:2009,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"RIY",
    Distance:1331.18,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"JED",
    To:"RUH",
    Distance:851.832,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"JED",
    To:"RUH",
    Distance:851.832,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"JED",
    To:"RUH",
    Distance:851.832,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"RUH",
    Distance:851.832,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"RUH",
    Distance:851.832,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"JED",
    To:"SAH",
    Distance:871.893,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"SAH",
    Distance:871.893,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"JED",
    To:"SAW",
    Distance:2329.07,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"JED",
    To:"SHJ",
    Distance:1715.6,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"JED",
    To:"SHW",
    Distance:956.671,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"SIN",
    Distance:7360.03,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"SKT",
    Distance:3668.01,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"JED",
    To:"SLL",
    Distance:1648.54,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"JED",
    To:"SSH",
    Distance:849.056,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"JED",
    To:"SSH",
    Distance:849.056,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"SUB",
    Distance:8644.75,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"JED",
    To:"SYZ",
    Distance:1603.67,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"TAI",
    Distance:1033.48,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"JED",
    To:"TBZ",
    Distance:1951.03,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"THR",
    Distance:1954.1,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"TIP",
    Distance:2836.42,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"JED",
    To:"TUN",
    Distance:3254.24,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"TUN",
    Distance:3254.24,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"JED",
    To:"TUU",
    Distance:786.095,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"URY",
    Distance:1098.11,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"YNB",
    Distance:296.044,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JED",
    To:"YYZ",
    Distance:10444.5,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JEG",
    To:"JAV",
    Distance:90.1517,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JEG",
    To:"JHS",
    Distance:198.736,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JEG",
    To:"SFJ",
    Distance:206.083,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JER",
    To:"AMS",
    Distance:598.344,
    Airport:"Skynet Airlines"
}),
new Routes(
{
    From:"JER",
    To:"BHX",
    Distance:362.292,
    Airport:"Flybe"
}),
new Routes(
{
    From:"JER",
    To:"BRS",
    Distance:244.66,
    Airport:"Skynet Airlines"
}),
new Routes(
{
    From:"JER",
    To:"CDG",
    Distance:346.043,
    Airport:"Skynet Airlines"
}),
new Routes(
{
    From:"JER",
    To:"CWL",
    Distance:256.657,
    Airport:"Air France"
}),
new Routes(
{
    From:"JER",
    To:"CWL",
    Distance:256.657,
    Airport:"CityJet"
}),
new Routes(
{
    From:"JER",
    To:"CWL",
    Distance:256.657,
    Airport:"Flybe"
}),
new Routes(
{
    From:"JER",
    To:"DUB",
    Distance:547.238,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"JER",
    To:"DUS",
    Distance:677.45,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"JER",
    To:"EDI",
    Distance:753.859,
    Airport:"Flybe"
}),
new Routes(
{
    From:"JER",
    To:"EMA",
    Distance:407.413,
    Airport:"Flybe"
}),
new Routes(
{
    From:"JER",
    To:"EXT",
    Distance:190.791,
    Airport:"Flybe"
}),
new Routes(
{
    From:"JER",
    To:"FRA",
    Distance:778.283,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"JER",
    To:"GCI",
    Distance:38.7948,
    Airport:"Aurigny Air Services"
}),
new Routes(
{
    From:"JER",
    To:"GCI",
    Distance:38.7948,
    Airport:"Flybe"
}),
new Routes(
{
    From:"JER",
    To:"GCI",
    Distance:38.7948,
    Airport:"Skynet Airlines"
}),
new Routes(
{
    From:"JER",
    To:"GLA",
    Distance:756.191,
    Airport:"Flybe"
}),
new Routes(
{
    From:"JER",
    To:"GLA",
    Distance:756.191,
    Airport:"easyJet"
}),
new Routes(
{
    From:"JER",
    To:"GVA",
    Distance:702.971,
    Airport:"Skynet Airlines"
}),
new Routes(
{
    From:"JER",
    To:"HAJ",
    Distance:907.979,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"JER",
    To:"HUY",
    Distance:502.074,
    Airport:"Flybe"
}),
new Routes(
{
    From:"JER",
    To:"LBA",
    Distance:519.256,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"JER",
    To:"LCY",
    Distance:301.218,
    Airport:"Skynet Airlines"
}),
new Routes(
{
    From:"JER",
    To:"LGW",
    Distance:258.684,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JER",
    To:"LGW",
    Distance:258.684,
    Airport:"easyJet"
}),
new Routes(
{
    From:"JER",
    To:"LPL",
    Distance:460.999,
    Airport:"easyJet"
}),
new Routes(
{
    From:"JER",
    To:"MAN",
    Distance:461.025,
    Airport:"Flybe"
}),
new Routes(
{
    From:"JER",
    To:"MAN",
    Distance:461.025,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"JER",
    To:"NCL",
    Distance:649.124,
    Airport:"easyJet"
}),
new Routes(
{
    From:"JER",
    To:"NWI",
    Distance:456.045,
    Airport:"Flybe"
}),
new Routes(
{
    From:"JER",
    To:"ORK",
    Distance:532.446,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"JER",
    To:"SEN",
    Distance:333.22,
    Airport:"easyJet"
}),
new Routes(
{
    From:"JER",
    To:"SOU",
    Distance:202.766,
    Airport:"Flybe"
}),
new Routes(
{
    From:"JER",
    To:"SOU",
    Distance:202.766,
    Airport:"Skynet Airlines"
}),
new Routes(
{
    From:"JER",
    To:"STN",
    Distance:343.616,
    Airport:"Aurigny Air Services"
}),
new Routes(
{
    From:"JER",
    To:"STR",
    Distance:834.953,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"JER",
    To:"ZRH",
    Distance:816.758,
    Airport:"Skynet Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"ABQ",
    Distance:2931.46,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"ACC",
    Distance:8221.49,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"AMM",
    Distance:9214.77,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"AMM",
    Distance:9214.77,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"JFK",
    To:"AMM",
    Distance:9214.77,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"AMS",
    Distance:5847.53,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"AMS",
    Distance:5847.53,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"ANU",
    Distance:2855.47,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"ANU",
    Distance:2855.47,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"ARN",
    Distance:6291.98,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"JFK",
    To:"ATL",
    Distance:1222.08,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"JFK",
    To:"ATL",
    Distance:1222.08,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"ATL",
    Distance:1222.08,
    Airport:"Air France"
}),
new Routes(
{
    From:"JFK",
    To:"ATL",
    Distance:1222.08,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"JFK",
    To:"ATL",
    Distance:1222.08,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"ATL",
    Distance:1222.08,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"ATL",
    Distance:1222.08,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"JFK",
    To:"AUA",
    Distance:3150.36,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"AUA",
    Distance:3150.36,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"AUH",
    Distance:11031.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"AUH",
    Distance:11031.4,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"JFK",
    To:"AUS",
    Distance:2445.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"AUS",
    Distance:2445.46,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"AUS",
    Distance:2445.46,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"AUS",
    Distance:2445.46,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"AZS",
    Distance:2407.42,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"BCN",
    Distance:6150.23,
    Airport:"Air France"
}),
new Routes(
{
    From:"JFK",
    To:"BCN",
    Distance:6150.23,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"BCN",
    Distance:6150.23,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JFK",
    To:"BCN",
    Distance:6150.23,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"BCN",
    Distance:6150.23,
    Airport:"Finnair"
}),
new Routes(
{
    From:"JFK",
    To:"BCN",
    Distance:6150.23,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"BCN",
    Distance:6150.23,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"BCN",
    Distance:6150.23,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"JFK",
    To:"BCN",
    Distance:6150.23,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"BDA",
    Distance:1226.74,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"BDA",
    Distance:1226.74,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"BDA",
    Distance:1226.74,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"BDA",
    Distance:1226.74,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"BGI",
    Distance:3366.29,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"BGO",
    Distance:5603.81,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"JFK",
    To:"BNA",
    Distance:1229.76,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"BNA",
    Distance:1229.76,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"BNA",
    Distance:1229.76,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"BOG",
    Distance:3996.31,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"JFK",
    To:"BOG",
    Distance:3996.31,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"BOG",
    Distance:3996.31,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"BOG",
    Distance:3996.31,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"BOS",
    Distance:300.188,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"BOS",
    Distance:300.188,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"BOS",
    Distance:300.188,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"BOS",
    Distance:300.188,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"BQN",
    Distance:2542.97,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"BRU",
    Distance:5885.52,
    Airport:"Air France"
}),
new Routes(
{
    From:"JFK",
    To:"BRU",
    Distance:5885.52,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"BRU",
    Distance:5885.52,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"BRU",
    Distance:5885.52,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"BRU",
    Distance:5885.52,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"JFK",
    To:"BRU",
    Distance:5885.52,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"BTV",
    Distance:429.178,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"BUF",
    Distance:483.698,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"BUF",
    Distance:483.698,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"BUR",
    Distance:3958.38,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"BWI",
    Distance:295.361,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"BWI",
    Distance:295.361,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"BWI",
    Distance:295.361,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"CAI",
    Distance:9016.46,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"JFK",
    To:"CAI",
    Distance:9016.46,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"CCS",
    Distance:3405.88,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"CDG",
    Distance:5833.66,
    Airport:"Air France"
}),
new Routes(
{
    From:"JFK",
    To:"CDG",
    Distance:5833.66,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"JFK",
    To:"CDG",
    Distance:5833.66,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"CDG",
    Distance:5833.66,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JFK",
    To:"CDG",
    Distance:5833.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"CDG",
    Distance:5833.66,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"JFK",
    To:"CDG",
    Distance:5833.66,
    Airport:"Finnair"
}),
new Routes(
{
    From:"JFK",
    To:"CDG",
    Distance:5833.66,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"CDG",
    Distance:5833.66,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"JFK",
    To:"CDG",
    Distance:5833.66,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"CDG",
    Distance:5833.66,
    Airport:"XL Airways France"
}),
new Routes(
{
    From:"JFK",
    To:"CHS",
    Distance:1025,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"CHS",
    Distance:1025,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"CLE",
    Distance:682.205,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"CLE",
    Distance:682.205,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"CLE",
    Distance:682.205,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"CLT",
    Distance:870.526,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"CLT",
    Distance:870.526,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"CLT",
    Distance:870.526,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"CLT",
    Distance:870.526,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"CMH",
    Distance:775.544,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"CMH",
    Distance:775.544,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"CMH",
    Distance:775.544,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"CMN",
    Distance:5794.97,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"JFK",
    To:"CPH",
    Distance:6188.68,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"JFK",
    To:"CTG",
    Distance:3362.12,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"CUN",
    Distance:2506.33,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"JFK",
    To:"CUN",
    Distance:2506.33,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"CUN",
    Distance:2506.33,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"CUN",
    Distance:2506.33,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"CUN",
    Distance:2506.33,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"CVG",
    Distance:945.657,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"CVG",
    Distance:945.657,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"CVG",
    Distance:945.657,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"DCA",
    Distance:342.216,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"DCA",
    Distance:342.216,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"DCA",
    Distance:342.216,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"DEL",
    Distance:11754.5,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"JFK",
    To:"DEN",
    Distance:2609.8,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"DEN",
    Distance:2609.8,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"DFW",
    Distance:2234.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"DFW",
    Distance:2234.89,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"DFW",
    Distance:2234.89,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"DKR",
    Distance:6120.19,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"DOH",
    Distance:10767.8,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"DOH",
    Distance:10767.8,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"JFK",
    To:"DTW",
    Distance:816.722,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"DUB",
    Distance:5103.03,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"JFK",
    To:"DUB",
    Distance:5103.03,
    Airport:"Air France"
}),
new Routes(
{
    From:"JFK",
    To:"DUB",
    Distance:5103.03,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"DUB",
    Distance:5103.03,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JFK",
    To:"DUB",
    Distance:5103.03,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"DUB",
    Distance:5103.03,
    Airport:"Finnair"
}),
new Routes(
{
    From:"JFK",
    To:"DUB",
    Distance:5103.03,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"DUB",
    Distance:5103.03,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"DUB",
    Distance:5103.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"DUS",
    Distance:6017.23,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"JFK",
    To:"DUS",
    Distance:6017.23,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"DXB",
    Distance:11001.5,
    Airport:"Emirates"
}),
new Routes(
{
    From:"JFK",
    To:"DXB",
    Distance:11001.5,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"EZE",
    Distance:8534.82,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"JFK",
    To:"EZE",
    Distance:8534.82,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"EZE",
    Distance:8534.82,
    Airport:"LAN Argentina"
}),
new Routes(
{
    From:"JFK",
    To:"FCO",
    Distance:6866.32,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"JFK",
    To:"FCO",
    Distance:6866.32,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"FCO",
    Distance:6866.32,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JFK",
    To:"FCO",
    Distance:6866.32,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"FCO",
    Distance:6866.32,
    Airport:"Finnair"
}),
new Routes(
{
    From:"JFK",
    To:"FCO",
    Distance:6866.32,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"FCO",
    Distance:6866.32,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"FLL",
    Distance:1723.29,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"FLL",
    Distance:1723.29,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"FRA",
    Distance:6187.98,
    Airport:"Air France"
}),
new Routes(
{
    From:"JFK",
    To:"FRA",
    Distance:6187.98,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"FRA",
    Distance:6187.98,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"FRA",
    Distance:6187.98,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"FRA",
    Distance:6187.98,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"JFK",
    To:"FRA",
    Distance:6187.98,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"FRA",
    Distance:6187.98,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"FRA",
    Distance:6187.98,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"GCM",
    Distance:2480.87,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"JFK",
    To:"GCM",
    Distance:2480.87,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"GEO",
    Distance:4098.16,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"GIG",
    Distance:7729.51,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"GIG",
    Distance:7729.51,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"GIG",
    Distance:7729.51,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"GND",
    Distance:3393.24,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"GND",
    Distance:3393.24,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"GRU",
    Distance:7663.75,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"GRU",
    Distance:7663.75,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"GRU",
    Distance:7663.75,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"GRU",
    Distance:7663.75,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"GRU",
    Distance:7663.75,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"GUA",
    Distance:3320.74,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"GVA",
    Distance:6201.22,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"GVA",
    Distance:6201.22,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"GYE",
    Distance:4799.01,
    Airport:"Aerolane"
}),
new Routes(
{
    From:"JFK",
    To:"GYE",
    Distance:4799.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"HEL",
    Distance:6607.32,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"HEL",
    Distance:6607.32,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JFK",
    To:"HEL",
    Distance:6607.32,
    Airport:"Finnair"
}),
new Routes(
{
    From:"JFK",
    To:"HEL",
    Distance:6607.32,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"HKG",
    Distance:12970.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"HKG",
    Distance:12970.4,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"JFK",
    To:"HNL",
    Distance:8006.73,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"HOU",
    Distance:2296.09,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"IAD",
    Distance:366.314,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"IAD",
    Distance:366.314,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"IAD",
    Distance:366.314,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"ICN",
    Distance:11088.8,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"ICN",
    Distance:11088.8,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"ICN",
    Distance:11088.8,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"JFK",
    To:"ICN",
    Distance:11088.8,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"IND",
    Distance:1067.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"IND",
    Distance:1067.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"IND",
    Distance:1067.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"IST",
    Distance:8051.75,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"IST",
    Distance:8051.75,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"JAX",
    Distance:1334.47,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"JAX",
    Distance:1334.47,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"JED",
    Distance:10225.4,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"JNB",
    Distance:12831.3,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"JNB",
    Distance:12831.3,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JFK",
    To:"JNB",
    Distance:12831.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"JNB",
    Distance:12831.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"KBP",
    Distance:7532.62,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"KEF",
    Distance:4163.25,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"JFK",
    To:"KIN",
    Distance:2540.95,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"KIN",
    Distance:2540.95,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"KIN",
    Distance:2540.95,
    Airport:"Overland Airways"
}),
new Routes(
{
    From:"JFK",
    To:"KIX",
    Distance:11153.9,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"KWI",
    Distance:10201.5,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"JFK",
    To:"LAS",
    Distance:3609.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"LAS",
    Distance:3609.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"LAS",
    Distance:3609.3,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"JFK",
    To:"LAS",
    Distance:3609.3,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"LAS",
    Distance:3609.3,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"LAS",
    Distance:3609.3,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"JFK",
    To:"LAS",
    Distance:3609.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"LAS",
    Distance:3609.3,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"JFK",
    To:"LAX",
    Distance:3974.2,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"LAX",
    Distance:3974.2,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"LAX",
    Distance:3974.2,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"LAX",
    Distance:3974.2,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"LAX",
    Distance:3974.2,
    Airport:"Qantas"
}),
new Routes(
{
    From:"JFK",
    To:"LAX",
    Distance:3974.2,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"LAX",
    Distance:3974.2,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"LAX",
    Distance:3974.2,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"JFK",
    To:"LCY",
    Distance:5572.49,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"LCY",
    Distance:5572.49,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JFK",
    To:"LCY",
    Distance:5572.49,
    Airport:"Finnair"
}),
new Routes(
{
    From:"JFK",
    To:"LCY",
    Distance:5572.49,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"LGB",
    Distance:3958.29,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"LHE",
    Distance:11349.9,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"LHR",
    Distance:5539.45,
    Airport:"Air France"
}),
new Routes(
{
    From:"JFK",
    To:"LHR",
    Distance:5539.45,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"JFK",
    To:"LHR",
    Distance:5539.45,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"LHR",
    Distance:5539.45,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JFK",
    To:"LHR",
    Distance:5539.45,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"LHR",
    Distance:5539.45,
    Airport:"Finnair"
}),
new Routes(
{
    From:"JFK",
    To:"LHR",
    Distance:5539.45,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"LHR",
    Distance:5539.45,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"LHR",
    Distance:5539.45,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"JFK",
    To:"LHR",
    Distance:5539.45,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"LHR",
    Distance:5539.45,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"LHR",
    Distance:5539.45,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"JFK",
    To:"LIM",
    Distance:5865.78,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"LIM",
    Distance:5865.78,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"LIM",
    Distance:5865.78,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"LIR",
    Distance:3535.32,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"LIR",
    Distance:3535.32,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"LOS",
    Distance:8444.43,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"JFK",
    To:"LRM",
    Distance:2510.73,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"MAD",
    Distance:5760.86,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"JFK",
    To:"MAD",
    Distance:5760.86,
    Airport:"Air France"
}),
new Routes(
{
    From:"JFK",
    To:"MAD",
    Distance:5760.86,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"MAD",
    Distance:5760.86,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JFK",
    To:"MAD",
    Distance:5760.86,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"MAD",
    Distance:5760.86,
    Airport:"Finnair"
}),
new Routes(
{
    From:"JFK",
    To:"MAD",
    Distance:5760.86,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"MAD",
    Distance:5760.86,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"MAD",
    Distance:5760.86,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"MAN",
    Distance:5362.05,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"MAN",
    Distance:5362.05,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JFK",
    To:"MAN",
    Distance:5362.05,
    Airport:"Finnair"
}),
new Routes(
{
    From:"JFK",
    To:"MAN",
    Distance:5362.05,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"MAN",
    Distance:5362.05,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"MBJ",
    Distance:2492.89,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"MBJ",
    Distance:2492.89,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"MBJ",
    Distance:2492.89,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"MCO",
    Distance:1521.38,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"MCO",
    Distance:1521.38,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"MCO",
    Distance:1521.38,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"MCO",
    Distance:1521.38,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"MDE",
    Distance:3836.96,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"JFK",
    To:"MDE",
    Distance:3836.96,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"MEX",
    Distance:3365.33,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"JFK",
    To:"MEX",
    Distance:3365.33,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"JFK",
    To:"MEX",
    Distance:3365.33,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"MEX",
    Distance:3365.33,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"JFK",
    To:"MIA",
    Distance:1757.11,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"MIA",
    Distance:1757.11,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"MIA",
    Distance:1757.11,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"MSP",
    Distance:1651.27,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"MSP",
    Distance:1651.27,
    Airport:"Sun Country Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"MSY",
    Distance:1901.49,
    Airport:"Air France"
}),
new Routes(
{
    From:"JFK",
    To:"MSY",
    Distance:1901.49,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"JFK",
    To:"MSY",
    Distance:1901.49,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"MSY",
    Distance:1901.49,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"JFK",
    To:"MSY",
    Distance:1901.49,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"MSY",
    Distance:1901.49,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"MSY",
    Distance:1901.49,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"MSY",
    Distance:1901.49,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"JFK",
    To:"MSY",
    Distance:1901.49,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"MSY",
    Distance:1901.49,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"JFK",
    To:"MSY",
    Distance:1901.49,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"JFK",
    To:"MUC",
    Distance:6481.06,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"JFK",
    To:"MUC",
    Distance:6481.06,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"MXP",
    Distance:6412.75,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"JFK",
    To:"MXP",
    Distance:6412.75,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"MXP",
    Distance:6412.75,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JFK",
    To:"MXP",
    Distance:6412.75,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"MXP",
    Distance:6412.75,
    Airport:"Emirates"
}),
new Routes(
{
    From:"JFK",
    To:"MXP",
    Distance:6412.75,
    Airport:"Finnair"
}),
new Routes(
{
    From:"JFK",
    To:"MXP",
    Distance:6412.75,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"MXP",
    Distance:6412.75,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"MXP",
    Distance:6412.75,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"JFK",
    To:"MXP",
    Distance:6412.75,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"NAS",
    Distance:1768.13,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"NAS",
    Distance:1768.13,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"NCE",
    Distance:6406.85,
    Airport:"Air France"
}),
new Routes(
{
    From:"JFK",
    To:"NCE",
    Distance:6406.85,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"NRT",
    Distance:10830.4,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"JFK",
    To:"NRT",
    Distance:10830.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"NRT",
    Distance:10830.4,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"NRT",
    Distance:10830.4,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"NRT",
    Distance:10830.4,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"OAK",
    Distance:4135.12,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"ORD",
    Distance:1187.84,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"ORD",
    Distance:1187.84,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"ORD",
    Distance:1187.84,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"ORD",
    Distance:1187.84,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"JFK",
    To:"ORD",
    Distance:1187.84,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"ORF",
    Distance:466.345,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"ORF",
    Distance:466.345,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"ORF",
    Distance:466.345,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"ORY",
    Distance:5832.49,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"ORY",
    Distance:5832.49,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JFK",
    To:"ORY",
    Distance:5832.49,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"OSL",
    Distance:5917.29,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"JFK",
    To:"PAP",
    Distance:2457.03,
    Airport:"Air France"
}),
new Routes(
{
    From:"JFK",
    To:"PAP",
    Distance:2457.03,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"PAP",
    Distance:2457.03,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"PAP",
    Distance:2457.03,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"PBI",
    Distance:1657.14,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"PDX",
    Distance:3938.83,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"PDX",
    Distance:3938.83,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"PEK",
    Distance:10978.3,
    Airport:"Air China"
}),
new Routes(
{
    From:"JFK",
    To:"PEK",
    Distance:10978.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"PEK",
    Distance:10978.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"PHL",
    Distance:150.615,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"PHX",
    Distance:3458.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"PHX",
    Distance:3458.08,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"PHX",
    Distance:3458.08,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"PHX",
    Distance:3458.08,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"PIT",
    Distance:545.295,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"PIT",
    Distance:545.295,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"PIT",
    Distance:545.295,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"PLS",
    Distance:2102.65,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"PLS",
    Distance:2102.65,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"POP",
    Distance:2341.89,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"POS",
    Distance:3557.36,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"POS",
    Distance:3557.36,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"PSE",
    Distance:2609.51,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"PTY",
    Distance:3553.6,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"PTY",
    Distance:3553.6,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"PUJ",
    Distance:2508.21,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"PUJ",
    Distance:2508.21,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"PVG",
    Distance:11873.7,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"PVG",
    Distance:11873.7,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"PWM",
    Distance:439.9,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"RDU",
    Distance:686.493,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"RDU",
    Distance:686.493,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"RDU",
    Distance:686.493,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"RDU",
    Distance:686.493,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"RIC",
    Distance:463.501,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"RIX",
    Distance:6745.7,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"JFK",
    To:"ROC",
    Distance:424.055,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"ROC",
    Distance:424.055,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"RSW",
    Distance:1731.64,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"RUH",
    Distance:10480.2,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"SAL",
    Distance:3369.82,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"JFK",
    To:"SAL",
    Distance:3369.82,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SAL",
    Distance:3369.82,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"SAN",
    Distance:3928.01,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"SAN",
    Distance:3928.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"SAN",
    Distance:3928.01,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"SAN",
    Distance:3928.01,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SAN",
    Distance:3928.01,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SAN",
    Distance:3928.01,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SAP",
    Distance:3116.16,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"JFK",
    To:"SAT",
    Distance:2550.85,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"SAV",
    Distance:1155.47,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"SAV",
    Distance:1155.47,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SCL",
    Distance:8237.79,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"SCL",
    Distance:8237.79,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"SDF",
    Distance:1062.34,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"SDQ",
    Distance:2500.67,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"SDQ",
    Distance:2500.67,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SEA",
    Distance:3886.66,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"SEA",
    Distance:3886.66,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"SEA",
    Distance:3886.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"SEA",
    Distance:3886.66,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SEA",
    Distance:3886.66,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SFO",
    Distance:4151.78,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"SFO",
    Distance:4151.78,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"SFO",
    Distance:4151.78,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"SFO",
    Distance:4151.78,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SFO",
    Distance:4151.78,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SFO",
    Distance:4151.78,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"SFO",
    Distance:4151.78,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"JFK",
    To:"SJC",
    Distance:4124.78,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SJO",
    Distance:3558.98,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"SJO",
    Distance:3558.98,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"SJO",
    Distance:3558.98,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SJU",
    Distance:2577.91,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"SJU",
    Distance:2577.91,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"SJU",
    Distance:2577.91,
    Airport:"Finnair"
}),
new Routes(
{
    From:"JFK",
    To:"SJU",
    Distance:2577.91,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SJU",
    Distance:2577.91,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SLC",
    Distance:3193.58,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"SLC",
    Distance:3193.58,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SMF",
    Distance:4047.3,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SNN",
    Distance:4945.97,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"JFK",
    To:"SRQ",
    Distance:1678,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"STI",
    Distance:2380.32,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"STI",
    Distance:2380.32,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"STL",
    Distance:1432.83,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"STT",
    Distance:2618.77,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"STT",
    Distance:2618.77,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"STT",
    Distance:2618.77,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SVO",
    Distance:7480.92,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"SVO",
    Distance:7480.92,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"SXM",
    Distance:2712.24,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"SXM",
    Distance:2712.24,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"SXM",
    Distance:2712.24,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SXM",
    Distance:2712.24,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"SYR",
    Distance:335.606,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"SYR",
    Distance:335.606,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"TAB",
    Distance:3516.34,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"TLV",
    Distance:9117.05,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"TLV",
    Distance:9117.05,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"TPA",
    Distance:1619.52,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"TPA",
    Distance:1619.52,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"TPA",
    Distance:1619.52,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"TPA",
    Distance:1619.52,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"TPE",
    Distance:12544.6,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"JFK",
    To:"TXL",
    Distance:6367.75,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"JFK",
    To:"TXL",
    Distance:6367.75,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"UVF",
    Distance:3241.27,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JFK",
    To:"VCE",
    Distance:6668.25,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"JFK",
    To:"VCE",
    Distance:6668.25,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"VIE",
    Distance:6805.04,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"VIE",
    Distance:6805.04,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"VKO",
    Distance:7500.77,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"WAW",
    Distance:6847.76,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"YUL",
    Distance:537.17,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"JFK",
    To:"YUL",
    Distance:537.17,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"YUL",
    Distance:537.17,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"YUL",
    Distance:537.17,
    Airport:"Finnair"
}),
new Routes(
{
    From:"JFK",
    To:"YUL",
    Distance:537.17,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"YUL",
    Distance:537.17,
    Airport:"WestJet"
}),
new Routes(
{
    From:"JFK",
    To:"YVR",
    Distance:3930.42,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"JFK",
    To:"YYC",
    Distance:3277.15,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"YYC",
    Distance:3277.15,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"YYC",
    Distance:3277.15,
    Airport:"WestJet"
}),
new Routes(
{
    From:"JFK",
    To:"YYZ",
    Distance:588.596,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"JFK",
    To:"YYZ",
    Distance:588.596,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"JFK",
    To:"YYZ",
    Distance:588.596,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"YYZ",
    Distance:588.596,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"YYZ",
    Distance:588.596,
    Airport:"Finnair"
}),
new Routes(
{
    From:"JFK",
    To:"YYZ",
    Distance:588.596,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"YYZ",
    Distance:588.596,
    Airport:"WestJet"
}),
new Routes(
{
    From:"JFK",
    To:"ZRH",
    Distance:6309.47,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JFK",
    To:"ZRH",
    Distance:6309.47,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"JFK",
    To:"ZRH",
    Distance:6309.47,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JFK",
    To:"ZRH",
    Distance:6309.47,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JFR",
    To:"GOH",
    Distance:264.66,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JFR",
    To:"UAK",
    Distance:242.493,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JGA",
    To:"BOM",
    Distance:478.617,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"JGD",
    To:"HLD",
    Distance:334.384,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"JGD",
    To:"HRB",
    Distance:551.619,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JGD",
    To:"HRB",
    Distance:551.619,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"JGD",
    To:"OHE",
    Distance:305.539,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"JGN",
    To:"INC",
    Distance:678.231,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"JGN",
    To:"LHW",
    Distance:621.634,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"JGN",
    To:"LHW",
    Distance:621.634,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JGN",
    To:"LHW",
    Distance:621.634,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"JGN",
    To:"XIY",
    Distance:1100.23,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JGS",
    To:"CAN",
    Distance:415.996,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JGS",
    To:"CTU",
    Distance:1128.12,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"JGS",
    To:"PEK",
    Distance:1475.47,
    Airport:"Air China"
}),
new Routes(
{
    From:"JGS",
    To:"PEK",
    Distance:1475.47,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JGS",
    To:"SHA",
    Distance:799.629,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JGS",
    To:"SHA",
    Distance:799.629,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"JGS",
    To:"SZX",
    Distance:482.886,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JGS",
    To:"XIY",
    Distance:1015.38,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JGS",
    To:"XMN",
    Distance:428.861,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"JHB",
    To:"BDO",
    Distance:1044.09,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"JHB",
    To:"BKI",
    Distance:1454.12,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"JHB",
    To:"CGK",
    Distance:925.091,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"JHB",
    To:"KBR",
    Distance:525.868,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"JHB",
    To:"KBR",
    Distance:525.868,
    Airport:"Firefly"
}),
new Routes(
{
    From:"JHB",
    To:"KBR",
    Distance:525.868,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"JHB",
    To:"KCH",
    Distance:742.411,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"JHB",
    To:"KUL",
    Distance:249.981,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"JHB",
    To:"KUL",
    Distance:249.981,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"JHB",
    To:"MYY",
    Distance:1183.7,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"JHB",
    To:"PEN",
    Distance:554.079,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"JHB",
    To:"SBW",
    Distance:926.693,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"JHB",
    To:"SUB",
    Distance:1424.53,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"JHB",
    To:"SUB",
    Distance:1424.53,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"JHB",
    To:"SZB",
    Distance:287.939,
    Airport:"Firefly"
}),
new Routes(
{
    From:"JHB",
    To:"SZB",
    Distance:287.939,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"JHB",
    To:"SZB",
    Distance:287.939,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"JHB",
    To:"TWU",
    Distance:1631.97,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"JHG",
    To:"CKG",
    Distance:1042.72,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JHG",
    To:"CTU",
    Distance:1008.02,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"JHG",
    To:"CTU",
    Distance:1008.02,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"JHG",
    To:"DIG",
    Distance:656.253,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JHG",
    To:"DLU",
    Distance:411.145,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"JHG",
    To:"DLU",
    Distance:411.145,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JHG",
    To:"HGH",
    Distance:2164.14,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"JHG",
    To:"KMG",
    Distance:391.886,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"JHG",
    To:"KMG",
    Distance:391.886,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JHG",
    To:"KMG",
    Distance:391.886,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JHG",
    To:"KMG",
    Distance:391.886,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"JHG",
    To:"KMG",
    Distance:391.886,
    Airport:"KSY"
}),
new Routes(
{
    From:"JHG",
    To:"KMG",
    Distance:391.886,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"JHG",
    To:"KMG",
    Distance:391.886,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"JHG",
    To:"KMG",
    Distance:391.886,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JHG",
    To:"KMG",
    Distance:391.886,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"JHG",
    To:"KMG",
    Distance:391.886,
    Airport:"West Air China"
}),
new Routes(
{
    From:"JHG",
    To:"LJG",
    Distance:548.494,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"JHG",
    To:"LJG",
    Distance:548.494,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JHG",
    To:"LJG",
    Distance:548.494,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"JHG",
    To:"LJG",
    Distance:548.494,
    Airport:"KSY"
}),
new Routes(
{
    From:"JHG",
    To:"LJG",
    Distance:548.494,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JHG",
    To:"LPQ",
    Distance:272.871,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"JHG",
    To:"TCZ",
    Distance:403.188,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JHM",
    To:"HNL",
    Distance:135.479,
    Airport:"Maya Island Air"
}),
new Routes(
{
    From:"JHM",
    To:"KOA",
    Distance:151.02,
    Airport:"Maya Island Air"
}),
new Routes(
{
    From:"JHS",
    To:"GOH",
    Distance:321.065,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JHS",
    To:"JEG",
    Distance:198.736,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JHS",
    To:"SFJ",
    Distance:132.353,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JHW",
    To:"BFD",
    Distance:64.2335,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JHW",
    To:"CLE",
    Distance:230.164,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JIB",
    To:"ADD",
    Distance:556.026,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"JIB",
    To:"ADD",
    Distance:556.026,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"JIB",
    To:"ADD",
    Distance:556.026,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"JIB",
    To:"ADD",
    Distance:556.026,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"JIB",
    To:"CDG",
    Distance:5591.56,
    Airport:"Air France"
}),
new Routes(
{
    From:"JIB",
    To:"DIR",
    Distance:256.999,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"JIB",
    To:"DXB",
    Distance:1992.4,
    Airport:"Daallo Airlines"
}),
new Routes(
{
    From:"JIB",
    To:"DXB",
    Distance:1992.4,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"JIB",
    To:"DXB",
    Distance:1992.4,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"JIB",
    To:"DXB",
    Distance:1992.4,
    Airport:"Zip"
}),
new Routes(
{
    From:"JIB",
    To:"HAH",
    Distance:2566.5,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"JIB",
    To:"HGA",
    Distance:247.436,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"JIB",
    To:"IST",
    Distance:3560.05,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"JIB",
    To:"JED",
    Distance:1204.45,
    Airport:"Zip"
}),
new Routes(
{
    From:"JIB",
    To:"MGQ",
    Distance:1086.08,
    Airport:"Daallo Airlines"
}),
new Routes(
{
    From:"JIB",
    To:"MGQ",
    Distance:1086.08,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"JIB",
    To:"MGQ",
    Distance:1086.08,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"JIB",
    To:"MGQ",
    Distance:1086.08,
    Airport:"Zip"
}),
new Routes(
{
    From:"JIB",
    To:"NBO",
    Distance:1587.81,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"JIB",
    To:"NBO",
    Distance:1587.81,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"JIB",
    To:"SAH",
    Distance:451.675,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"JIB",
    To:"SAH",
    Distance:451.675,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"JIB",
    To:"TAI",
    Distance:260.494,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"JIJ",
    To:"ADD",
    Distance:439.85,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"JIJ",
    To:"DIR",
    Distance:106.513,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"JIJ",
    To:"GDE",
    Distance:390.647,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"JIK",
    To:"ATH",
    Distance:212.937,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"JIK",
    To:"ATH",
    Distance:212.937,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"JIK",
    To:"LXS",
    Distance:266.437,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"JIM",
    To:"ADD",
    Distance:262.413,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"JIM",
    To:"AMH",
    Distance:200.039,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"JIQ",
    To:"CAN",
    Distance:813.052,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JIQ",
    To:"CKG",
    Distance:212.751,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"JIQ",
    To:"CTU",
    Distance:484.593,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"JIQ",
    To:"KMG",
    Distance:783.887,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JIQ",
    To:"KMG",
    Distance:783.887,
    Airport:"China SSS"
}),
new Routes(
{
    From:"JIQ",
    To:"PEK",
    Distance:1370.31,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JIQ",
    To:"SHA",
    Distance:1213.79,
    Airport:"China SSS"
}),
new Routes(
{
    From:"JIU",
    To:"CAN",
    Distance:753.804,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JIU",
    To:"PEK",
    Distance:1151.84,
    Airport:"Air China"
}),
new Routes(
{
    From:"JIU",
    To:"PEK",
    Distance:1151.84,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"JIU",
    To:"SHA",
    Distance:538.24,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JIU",
    To:"XMN",
    Distance:614.734,
    Airport:"Air China"
}),
new Routes(
{
    From:"JIU",
    To:"XMN",
    Distance:614.734,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"CAN",
    Distance:559.272,
    Airport:"Air China"
}),
new Routes(
{
    From:"JJN",
    To:"CAN",
    Distance:559.272,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"CAN",
    Distance:559.272,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"CAN",
    Distance:559.272,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"CGO",
    Distance:1174.1,
    Airport:"West Air China"
}),
new Routes(
{
    From:"JJN",
    To:"CSX",
    Distance:654.044,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"CSX",
    Distance:654.044,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"CSX",
    Distance:654.044,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"CTU",
    Distance:1576.84,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"HGH",
    Distance:630.887,
    Airport:"Air China"
}),
new Routes(
{
    From:"JJN",
    To:"HGH",
    Distance:630.887,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"HGH",
    Distance:630.887,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"HGH",
    Distance:630.887,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"HKG",
    Distance:550.952,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"HKG",
    Distance:550.952,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"HSN",
    Distance:681.874,
    Airport:"Air China"
}),
new Routes(
{
    From:"JJN",
    To:"HSN",
    Distance:681.874,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"HSN",
    Distance:681.874,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"HSN",
    Distance:681.874,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"KWE",
    Distance:1196.86,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"KWE",
    Distance:1196.86,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"KWE",
    Distance:1196.86,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"MFM",
    Distance:588.581,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"MFM",
    Distance:588.581,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"NKG",
    Distance:772.778,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"NKG",
    Distance:772.778,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"NKG",
    Distance:772.778,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"NNG",
    Distance:1087.88,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"JJN",
    To:"PEK",
    Distance:1709.72,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"PEK",
    Distance:1709.72,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"PVG",
    Distance:773.041,
    Airport:"Air China"
}),
new Routes(
{
    From:"JJN",
    To:"PVG",
    Distance:773.041,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"SHA",
    Distance:761.077,
    Airport:"China SSS"
}),
new Routes(
{
    From:"JJN",
    To:"SHA",
    Distance:761.077,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"SHA",
    Distance:761.077,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"SZX",
    Distance:542.402,
    Airport:"Air China"
}),
new Routes(
{
    From:"JJN",
    To:"SZX",
    Distance:542.402,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"SZX",
    Distance:542.402,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"SZX",
    Distance:542.402,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"TPE",
    Distance:268.297,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"WUH",
    Distance:792.914,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"WUH",
    Distance:792.914,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"WUH",
    Distance:792.914,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"JJN",
    To:"YIW",
    Distance:525.497,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"JJU",
    To:"JNN",
    Distance:77.5591,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JJU",
    To:"JNS",
    Distance:22.3951,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JJU",
    To:"LLU",
    Distance:37.2758,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JJU",
    To:"UAK",
    Distance:59.2246,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JKG",
    To:"ARN",
    Distance:306.208,
    Airport:"NextJet"
}),
new Routes(
{
    From:"JKG",
    To:"HAD",
    Distance:140.39,
    Airport:"NextJet"
}),
new Routes(
{
    From:"JKH",
    To:"ATH",
    Distance:197.311,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"JKH",
    To:"ATH",
    Distance:197.311,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"JKH",
    To:"MJT",
    Distance:88.7259,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"JKH",
    To:"MJT",
    Distance:88.7259,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"JKH",
    To:"RHO",
    Distance:275.638,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"JKH",
    To:"SKG",
    Distance:364.205,
    Airport:"Cielos Airlines"
}),
new Routes(
{
    From:"JKL",
    To:"ATH",
    Distance:285.739,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"JKL",
    To:"ATH",
    Distance:285.739,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"JKL",
    To:"KGS",
    Distance:23.1942,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"JKL",
    To:"KGS",
    Distance:23.1942,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"JKL",
    To:"LRS",
    Distance:27.6018,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"JKL",
    To:"LRS",
    Distance:27.6018,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"JLN",
    To:"DFW",
    Distance:526.568,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JLN",
    To:"DFW",
    Distance:526.568,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JLR",
    To:"BOM",
    Distance:872.64,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"JLR",
    To:"DEL",
    Distance:667.811,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"JLR",
    To:"DEL",
    Distance:667.811,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"JMK",
    To:"ATH",
    Distance:135.506,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"JMK",
    To:"ATH",
    Distance:135.506,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"JMK",
    To:"CGN",
    Distance:2072.28,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"JMK",
    To:"GVA",
    Distance:1863.03,
    Airport:"easyJet"
}),
new Routes(
{
    From:"JMK",
    To:"JTR",
    Distance:115.783,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"JMK",
    To:"JTR",
    Distance:115.783,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"JMK",
    To:"LGW",
    Distance:2519.32,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"JMK",
    To:"LGW",
    Distance:2519.32,
    Airport:"easyJet"
}),
new Routes(
{
    From:"JMK",
    To:"LHR",
    Distance:2552.93,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JMK",
    To:"MAN",
    Distance:2759.86,
    Airport:"easyJet"
}),
new Routes(
{
    From:"JMK",
    To:"MXP",
    Distance:1651.49,
    Airport:"easyJet"
}),
new Routes(
{
    From:"JMK",
    To:"VIE",
    Distance:1384.43,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"JMK",
    To:"VIE",
    Distance:1384.43,
    Airport:"Niki"
}),
new Routes(
{
    From:"JMU",
    To:"DLC",
    Distance:1136.87,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"JMU",
    To:"HRB",
    Distance:351.384,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"JMU",
    To:"KHV",
    Distance:400.004,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"JMU",
    To:"PEK",
    Distance:1346.24,
    Airport:"Air China"
}),
new Routes(
{
    From:"JMU",
    To:"PEK",
    Distance:1346.24,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"JMU",
    To:"PEK",
    Distance:1346.24,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JMU",
    To:"PVG",
    Distance:1896.57,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JMU",
    To:"SHE",
    Distance:834.097,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"JMU",
    To:"TAO",
    Distance:1442.5,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JMU",
    To:"TAO",
    Distance:1442.5,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"ACC",
    Distance:4673.63,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"ADD",
    Distance:4068,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"ADD",
    Distance:4068,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"AMS",
    Distance:9017.3,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"APL",
    Distance:1678.67,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"JNB",
    To:"APL",
    Distance:1678.67,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"ATL",
    Distance:13582.6,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JNB",
    To:"AUH",
    Distance:6298.56,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"JNB",
    To:"AUH",
    Distance:6298.56,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"JNB",
    To:"AUH",
    Distance:6298.56,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"AUH",
    Distance:6298.56,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"BBK",
    Distance:976.673,
    Airport:"Air Botswana"
}),
new Routes(
{
    From:"JNB",
    To:"BBK",
    Distance:976.673,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"BEW",
    Distance:980.687,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"JNB",
    To:"BEW",
    Distance:980.687,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"BFN",
    Distance:380.15,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"BKK",
    Distance:8996.21,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"BKK",
    Distance:8996.21,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"JNB",
    To:"BLZ",
    Distance:1356.17,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"BLZ",
    Distance:1356.17,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"BOM",
    Distance:6964,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"JNB",
    To:"BOM",
    Distance:6964,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"JNB",
    To:"BOM",
    Distance:6964,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"BUQ",
    Distance:681.766,
    Airport:"Air Zimbabwe"
}),
new Routes(
{
    From:"JNB",
    To:"BUQ",
    Distance:681.766,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"BZV",
    Distance:2799.57,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"CAI",
    Distance:6264.99,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"JNB",
    To:"CAI",
    Distance:6264.99,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"CDG",
    Distance:8737.52,
    Airport:"Air France"
}),
new Routes(
{
    From:"JNB",
    To:"CDG",
    Distance:8737.52,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"JNB",
    To:"CPT",
    Distance:1271.07,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"CPT",
    Distance:1271.07,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JNB",
    To:"CPT",
    Distance:1271.07,
    Airport:"Comair"
}),
new Routes(
{
    From:"JNB",
    To:"CPT",
    Distance:1271.07,
    Airport:"Mango"
}),
new Routes(
{
    From:"JNB",
    To:"CPT",
    Distance:1271.07,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"JNB",
    To:"CPT",
    Distance:1271.07,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"CPT",
    Distance:1271.07,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"CPT",
    Distance:1271.07,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"CPT",
    Distance:1271.07,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"JNB",
    To:"DAR",
    Distance:2436.15,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"DKR",
    Distance:6716.69,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"DKR",
    Distance:6716.69,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JNB",
    To:"DKR",
    Distance:6716.69,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"DOH",
    Distance:6239.48,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"JNB",
    To:"DUR",
    Distance:501.837,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JNB",
    To:"DUR",
    Distance:501.837,
    Airport:"Comair"
}),
new Routes(
{
    From:"JNB",
    To:"DUR",
    Distance:501.837,
    Airport:"Mango"
}),
new Routes(
{
    From:"JNB",
    To:"DUR",
    Distance:501.837,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"DXB",
    Distance:6413.1,
    Airport:"Emirates"
}),
new Routes(
{
    From:"JNB",
    To:"DXB",
    Distance:6413.1,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"EBB",
    Distance:2945.84,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"ELL",
    Distance:279.442,
    Airport:"VivaColombia"
}),
new Routes(
{
    From:"JNB",
    To:"ELS",
    Distance:767.917,
    Airport:"Comair"
}),
new Routes(
{
    From:"JNB",
    To:"ELS",
    Distance:767.917,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"FBM",
    Distance:1619.38,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"JNB",
    To:"FBM",
    Distance:1619.38,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"FIH",
    Distance:2776.39,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"FRA",
    Distance:8689.88,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"JNB",
    To:"FRA",
    Distance:8689.88,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"FRA",
    Distance:8689.88,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JNB",
    To:"FRW",
    Distance:559.245,
    Airport:"Air Botswana"
}),
new Routes(
{
    From:"JNB",
    To:"GBE",
    Distance:292.8,
    Airport:"Air Botswana"
}),
new Routes(
{
    From:"JNB",
    To:"GBE",
    Distance:292.8,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"GRJ",
    Distance:1040.56,
    Airport:"Comair"
}),
new Routes(
{
    From:"JNB",
    To:"GRJ",
    Distance:1040.56,
    Airport:"Mango"
}),
new Routes(
{
    From:"JNB",
    To:"GRJ",
    Distance:1040.56,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"GRU",
    Distance:7439.02,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"GRU",
    Distance:7439.02,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"HDS",
    Distance:343.793,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"HKG",
    Distance:10674.6,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"JNB",
    To:"HKG",
    Distance:10674.6,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"HRE",
    Distance:958.514,
    Airport:"Air Zimbabwe"
}),
new Routes(
{
    From:"JNB",
    To:"HRE",
    Distance:958.514,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JNB",
    To:"HRE",
    Distance:958.514,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"INH",
    Distance:764.217,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"JNB",
    To:"IST",
    Distance:7463.2,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"JED",
    Distance:5445.68,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"JFK",
    Distance:12831.3,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"JNB",
    To:"JFK",
    Distance:12831.3,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"JFK",
    Distance:12831.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JNB",
    To:"JFK",
    Distance:12831.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"KGL",
    Distance:2695.25,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"JNB",
    To:"KGL",
    Distance:2695.25,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"KIM",
    Distance:453.442,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"LAD",
    Distance:2490.26,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"LAD",
    Distance:2490.26,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"LBV",
    Distance:3581.49,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"LHR",
    Distance:9075.8,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"LHR",
    Distance:9075.8,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JNB",
    To:"LHR",
    Distance:9075.8,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"LHR",
    Distance:9075.8,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"LHR",
    Distance:9075.8,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JNB",
    To:"LHR",
    Distance:9075.8,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"JNB",
    To:"LLW",
    Distance:1489.49,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"LOS",
    Distance:4524.09,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"JNB",
    To:"LOS",
    Distance:4524.09,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"LUN",
    Distance:1202.02,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"LVI",
    Distance:957.928,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JNB",
    To:"LVI",
    Distance:957.928,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"MGH",
    Distance:563.205,
    Airport:"VivaColombia"
}),
new Routes(
{
    From:"JNB",
    To:"MPM",
    Distance:432.957,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"JNB",
    To:"MPM",
    Distance:432.957,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"JNB",
    To:"MPM",
    Distance:432.957,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"MQP",
    Distance:298.444,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"MRU",
    Distance:3065.91,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"JNB",
    To:"MRU",
    Distance:3065.91,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JNB",
    To:"MRU",
    Distance:3065.91,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"MSU",
    Distance:375.751,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"MTS",
    Distance:308.153,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"MUB",
    Distance:844.083,
    Airport:"Air Botswana"
}),
new Routes(
{
    From:"JNB",
    To:"MUB",
    Distance:844.083,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"MUC",
    Distance:8444.33,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"JNB",
    To:"MUC",
    Distance:8444.33,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"MUC",
    Distance:8444.33,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JNB",
    To:"NBO",
    Distance:2912.01,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"JNB",
    To:"NBO",
    Distance:2912.01,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"NLA",
    Distance:1461.87,
    Airport:"Interair South Africa"
}),
new Routes(
{
    From:"JNB",
    To:"NLA",
    Distance:1461.87,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"PER",
    Distance:8309.63,
    Airport:"Qantas"
}),
new Routes(
{
    From:"JNB",
    To:"PER",
    Distance:8309.63,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"PHW",
    Distance:381.895,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"PLZ",
    Distance:908.236,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JNB",
    To:"PLZ",
    Distance:908.236,
    Airport:"Mango"
}),
new Routes(
{
    From:"JNB",
    To:"PLZ",
    Distance:908.236,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"PNR",
    Distance:2941.05,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"POL",
    Distance:1944.9,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"PTG",
    Distance:275.901,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"PZB",
    Distance:443.894,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"RCB",
    Distance:477.187,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"RUN",
    Distance:2834.95,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"JNB",
    To:"SEZ",
    Distance:3756.42,
    Airport:"Air Seychelles"
}),
new Routes(
{
    From:"JNB",
    To:"SEZ",
    Distance:3756.42,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"SIN",
    Distance:8655.95,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"SIN",
    Distance:8655.95,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"SIN",
    Distance:8655.95,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"SIN",
    Distance:8655.95,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"JNB",
    To:"SYD",
    Distance:11023.8,
    Airport:"Qantas"
}),
new Routes(
{
    From:"JNB",
    To:"SYD",
    Distance:11023.8,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"TET",
    Distance:1247.72,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"JNB",
    To:"TET",
    Distance:1247.72,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"TLV",
    Distance:6504.28,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"TNR",
    Distance:2135.09,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"JNB",
    To:"TNR",
    Distance:2135.09,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"UTN",
    Distance:734.601,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"UTT",
    Distance:602.867,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"VFA",
    Distance:928.024,
    Airport:"Air Zimbabwe"
}),
new Routes(
{
    From:"JNB",
    To:"VFA",
    Distance:928.024,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JNB",
    To:"VFA",
    Distance:928.024,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"VNX",
    Distance:851.027,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"JNB",
    To:"VNX",
    Distance:851.027,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"WDH",
    Distance:1165.22,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"JNB",
    To:"WDH",
    Distance:1165.22,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JNB",
    To:"WDH",
    Distance:1165.22,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"JNB",
    To:"WDH",
    Distance:1165.22,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"JNB",
    To:"WDH",
    Distance:1165.22,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"WVB",
    Distance:1418.84,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"ZNZ",
    Distance:2502.34,
    Airport:"Mango"
}),
new Routes(
{
    From:"JNB",
    To:"ZRH",
    Distance:8418.99,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"JNB",
    To:"ZRH",
    Distance:8418.99,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"JNG",
    To:"CAN",
    Distance:1373.03,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JNG",
    To:"CTU",
    Distance:1289.81,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"JNG",
    To:"DLC",
    Distance:593.37,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"JNG",
    To:"HRB",
    Distance:1398.67,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JNG",
    To:"KMG",
    Distance:1757.19,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JNG",
    To:"PEK",
    Distance:518.534,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JNG",
    To:"SHA",
    Distance:647.381,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JNG",
    To:"SHA",
    Distance:647.381,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"JNG",
    To:"SHE",
    Distance:886.376,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"JNG",
    To:"XIY",
    Distance:717.315,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"JNN",
    To:"JJU",
    Distance:77.5591,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JNN",
    To:"LLU",
    Distance:40.8004,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JNS",
    To:"JJU",
    Distance:22.3951,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JNS",
    To:"UAK",
    Distance:43.5341,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JNU",
    To:"AGN",
    Distance:94.6684,
    Airport:"Alaska Seaplane Service"
}),
new Routes(
{
    From:"JNU",
    To:"ANC",
    Distance:915.929,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"JNU",
    To:"GST",
    Distance:66.361,
    Airport:"Alaska Seaplane Service"
}),
new Routes(
{
    From:"JNU",
    To:"GST",
    Distance:66.361,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"JNU",
    To:"HNH",
    Distance:56.6563,
    Airport:"Alaska Seaplane Service"
}),
new Routes(
{
    From:"JNU",
    To:"HNH",
    Distance:56.6563,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"JNU",
    To:"HNS",
    Distance:112.905,
    Airport:"Alaska Seaplane Service"
}),
new Routes(
{
    From:"JNU",
    To:"HNS",
    Distance:112.905,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"JNU",
    To:"KTN",
    Distance:376.115,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"JNU",
    To:"KTN",
    Distance:376.115,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JNU",
    To:"KTN",
    Distance:376.115,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"JNU",
    To:"PEC",
    Distance:107.054,
    Airport:"Alaska Seaplane Service"
}),
new Routes(
{
    From:"JNU",
    To:"PSG",
    Distance:198.195,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"JNU",
    To:"SEA",
    Distance:1460.52,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"JNU",
    To:"SGY",
    Distance:130.017,
    Airport:"Alaska Seaplane Service"
}),
new Routes(
{
    From:"JNU",
    To:"SGY",
    Distance:130.017,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"JNU",
    To:"SIT",
    Distance:152.724,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"JNU",
    To:"YAK",
    Distance:296.477,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"JNX",
    To:"ATH",
    Distance:157.551,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"JNX",
    To:"ATH",
    Distance:157.551,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"JNZ",
    To:"HGH",
    Distance:1210.22,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"JNZ",
    To:"PVG",
    Distance:1109.28,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JNZ",
    To:"PVG",
    Distance:1109.28,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"JNZ",
    To:"TAO",
    Distance:540.956,
    Airport:"Air China"
}),
new Routes(
{
    From:"JNZ",
    To:"TAO",
    Distance:540.956,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"JOE",
    To:"HEL",
    Distance:358.703,
    Airport:"Finnair"
}),
new Routes(
{
    From:"JOG",
    To:"BDJ",
    Distance:680.502,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"JOG",
    To:"BDO",
    Distance:330.007,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"JOG",
    To:"BPN",
    Distance:1018.93,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"JOG",
    To:"BPN",
    Distance:1018.93,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"JOG",
    To:"BPN",
    Distance:1018.93,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"JOG",
    To:"BPN",
    Distance:1018.93,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"JOG",
    To:"BTH",
    Distance:1213.06,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"JOG",
    To:"CGK",
    Distance:455.915,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"JOG",
    To:"CGK",
    Distance:455.915,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"JOG",
    To:"CGK",
    Distance:455.915,
    Airport:"Interlink Airlines"
}),
new Routes(
{
    From:"JOG",
    To:"CGK",
    Distance:455.915,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"JOG",
    To:"CGK",
    Distance:455.915,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"JOG",
    To:"DPS",
    Distance:531.893,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"JOG",
    To:"DPS",
    Distance:531.893,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"JOG",
    To:"DPS",
    Distance:531.893,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"JOG",
    To:"KUL",
    Distance:1519.22,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"JOG",
    To:"LOP",
    Distance:652.114,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"JOG",
    To:"PKU",
    Distance:1354.32,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"JOG",
    To:"PKU",
    Distance:1354.32,
    Airport:"Mandala Airlines"
}),
new Routes(
{
    From:"JOG",
    To:"PLM",
    Distance:835.518,
    Airport:"Mandala Airlines"
}),
new Routes(
{
    From:"JOG",
    To:"SIN",
    Distance:1241.85,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"JOG",
    To:"SIN",
    Distance:1241.85,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"JOG",
    To:"SIN",
    Distance:1241.85,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"JOG",
    To:"SIN",
    Distance:1241.85,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"JOG",
    To:"SIN",
    Distance:1241.85,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"JOG",
    To:"SUB",
    Distance:263.525,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"JOG",
    To:"SUB",
    Distance:263.525,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"JOG",
    To:"UPG",
    Distance:1052.48,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"JOG",
    To:"UPG",
    Distance:1052.48,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"JOI",
    To:"CGH",
    Distance:360.663,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"JOI",
    To:"CGH",
    Distance:360.663,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"JOI",
    To:"GRU",
    Distance:389.33,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"JOI",
    To:"POA",
    Distance:479.489,
    Airport:"Azul"
}),
new Routes(
{
    From:"JOI",
    To:"VCP",
    Distance:395.224,
    Airport:"Azul"
}),
new Routes(
{
    From:"JOL",
    To:"ZAM",
    Distance:150.844,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"JOS",
    To:"LOS",
    Distance:699.18,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"JPA",
    To:"BSB",
    Distance:1712.47,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"JPA",
    To:"BSB",
    Distance:1712.47,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"JPA",
    To:"BSB",
    Distance:1712.47,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"JPA",
    To:"FOR",
    Distance:545.658,
    Airport:"Azul"
}),
new Routes(
{
    From:"JPA",
    To:"GIG",
    Distance:1954.43,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"JPA",
    To:"GIG",
    Distance:1954.43,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"JPA",
    To:"GIG",
    Distance:1954.43,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"JPA",
    To:"GRU",
    Distance:2189.06,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"JPA",
    To:"GRU",
    Distance:2189.06,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"JPA",
    To:"SSA",
    Distance:739.907,
    Airport:"Azul"
}),
new Routes(
{
    From:"JPA",
    To:"VCP",
    Distance:2192.53,
    Airport:"Azul"
}),
new Routes(
{
    From:"JPR",
    To:"CGB",
    Distance:816.727,
    Airport:"Azul"
}),
new Routes(
{
    From:"JPR",
    To:"CGB",
    Distance:816.727,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"JQA",
    To:"JAV",
    Distance:178.116,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JQA",
    To:"UMD",
    Distance:3397.8,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JQE",
    To:"PAC",
    Distance:223.327,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"JRO",
    To:"ADD",
    Distance:1392.81,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"JRO",
    To:"ADD",
    Distance:1392.81,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"JRO",
    To:"DAR",
    Distance:450.095,
    Airport:"Air France"
}),
new Routes(
{
    From:"JRO",
    To:"DAR",
    Distance:450.095,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"JRO",
    To:"DAR",
    Distance:450.095,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"JRO",
    To:"DAR",
    Distance:450.095,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"JRO",
    To:"DAR",
    Distance:450.095,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"JRO",
    To:"DAR",
    Distance:450.095,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"JRO",
    To:"EBB",
    Distance:643.335,
    Airport:"Northern Dene Airways"
}),
new Routes(
{
    From:"JRO",
    To:"EBB",
    Distance:643.335,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"JRO",
    To:"KGL",
    Distance:787.201,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"JRO",
    To:"MBA",
    Distance:287.583,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"JRO",
    To:"MWZ",
    Distance:472.795,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"JRO",
    To:"MWZ",
    Distance:472.795,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"JRO",
    To:"NBO",
    Distance:235.215,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"JRO",
    To:"NBO",
    Distance:235.215,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"JRO",
    To:"WIL",
    Distance:236.132,
    Airport:"Fly Air"
}),
new Routes(
{
    From:"JRO",
    To:"ZNZ",
    Distance:391.39,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"JRO",
    To:"ZNZ",
    Distance:391.39,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"JSH",
    To:"ATH",
    Distance:358.564,
    Airport:"Cielos Airlines"
}),
new Routes(
{
    From:"JSH",
    To:"AXD",
    Distance:627.241,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"JSH",
    To:"KSJ",
    Distance:76.842,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"JSH",
    To:"KSJ",
    Distance:76.842,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"JSH",
    To:"PVK",
    Distance:627.678,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"JSI",
    To:"ATH",
    Distance:143.189,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"JSI",
    To:"ATH",
    Distance:143.189,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"JSR",
    To:"DAC",
    Distance:145.892,
    Airport:"Rainbow Air Polynesia"
}),
new Routes(
{
    From:"JSR",
    To:"DAC",
    Distance:145.892,
    Airport:"United Airways"
}),
new Routes(
{
    From:"JSR",
    To:"DAC",
    Distance:145.892,
    Airport:"Viking Hellas"
}),
new Routes(
{
    From:"JST",
    To:"AOO",
    Distance:43.6296,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JST",
    To:"IAD",
    Distance:192.837,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"JSU",
    To:"GOH",
    Distance:148.372,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JSU",
    To:"SFJ",
    Distance:204.939,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JSY",
    To:"ATH",
    Distance:105.386,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"JSY",
    To:"ATH",
    Distance:105.386,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"JTC",
    To:"CGH",
    Distance:296.257,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"JTC",
    To:"MII",
    Distance:88.4609,
    Airport:"Azul"
}),
new Routes(
{
    From:"JTC",
    To:"VCP",
    Distance:219.882,
    Airport:"Azul"
}),
new Routes(
{
    From:"JTR",
    To:"AMS",
    Distance:2400.02,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"JTR",
    To:"ATH",
    Distance:218.424,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"JTR",
    To:"ATH",
    Distance:218.424,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"JTR",
    To:"ATH",
    Distance:218.424,
    Airport:"US Airways"
}),
new Routes(
{
    From:"JTR",
    To:"BRU",
    Distance:2319.79,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"JTR",
    To:"CGN",
    Distance:2171.02,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"JTR",
    To:"LGW",
    Distance:2610.55,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"JTR",
    To:"LGW",
    Distance:2610.55,
    Airport:"easyJet"
}),
new Routes(
{
    From:"JTR",
    To:"LHR",
    Distance:2644.81,
    Airport:"British Airways"
}),
new Routes(
{
    From:"JTR",
    To:"MAN",
    Distance:2854.95,
    Airport:"easyJet"
}),
new Routes(
{
    From:"JTR",
    To:"VCE",
    Distance:1493.32,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"JTR",
    To:"VIE",
    Distance:1492.13,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"JTR",
    To:"VIE",
    Distance:1492.13,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"JTR",
    To:"VIE",
    Distance:1492.13,
    Airport:"Niki"
}),
new Routes(
{
    From:"JTR",
    To:"VOL",
    Distance:392.377,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"JTY",
    To:"ATH",
    Distance:262.763,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"JTY",
    To:"ATH",
    Distance:262.763,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"JTY",
    To:"LRS",
    Distance:77.1436,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"JTY",
    To:"LRS",
    Distance:77.1436,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"JUB",
    To:"ADD",
    Distance:916.231,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"JUB",
    To:"ADD",
    Distance:916.231,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"JUB",
    To:"CAI",
    Distance:2807.74,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"JUB",
    To:"CAI",
    Distance:2807.74,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"JUB",
    To:"DXB",
    Distance:3399.38,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"JUB",
    To:"EBB",
    Distance:545.117,
    Airport:"Nasair"
}),
new Routes(
{
    From:"JUB",
    To:"EBB",
    Distance:545.117,
    Airport:"Northern Dene Airways"
}),
new Routes(
{
    From:"JUB",
    To:"KGL",
    Distance:777.783,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"JUB",
    To:"KRT",
    Distance:1196.26,
    Airport:"Nasair"
}),
new Routes(
{
    From:"JUB",
    To:"KRT",
    Distance:1196.26,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"JUB",
    To:"NBO",
    Distance:907.762,
    Airport:"Fly540"
}),
new Routes(
{
    From:"JUB",
    To:"NBO",
    Distance:907.762,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"JUJ",
    To:"AEP",
    Distance:1301.56,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"JUJ",
    To:"COR",
    Distance:775.612,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"JUL",
    To:"AQP",
    Distance:180.728,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"JUL",
    To:"AQP",
    Distance:180.728,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"JUL",
    To:"AQP",
    Distance:180.728,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"JUL",
    To:"AQP",
    Distance:180.728,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"JUL",
    To:"CUZ",
    Distance:287.857,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"JUL",
    To:"CUZ",
    Distance:287.857,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"JUL",
    To:"LIM",
    Distance:843.226,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"JUV",
    To:"JAV",
    Distance:435.653,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JUV",
    To:"NAQ",
    Distance:641.732,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"JUZ",
    To:"NAY",
    Distance:1224.49,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JUZ",
    To:"NAY",
    Distance:1224.49,
    Airport:"China United"
}),
new Routes(
{
    From:"JUZ",
    To:"SZX",
    Distance:868.261,
    Airport:"Air China"
}),
new Routes(
{
    From:"JUZ",
    To:"SZX",
    Distance:868.261,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JUZ",
    To:"XMN",
    Distance:497.6,
    Airport:"Air China"
}),
new Routes(
{
    From:"JUZ",
    To:"XMN",
    Distance:497.6,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"JXA",
    To:"HRB",
    Distance:371.772,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"JXA",
    To:"PEK",
    Distance:1310.83,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JXA",
    To:"PEK",
    Distance:1310.83,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"JXA",
    To:"SHE",
    Distance:760.195,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"JXA",
    To:"TAO",
    Distance:1343.08,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JXA",
    To:"TAO",
    Distance:1343.08,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"JYV",
    To:"HEL",
    Distance:234.644,
    Airport:"Finnair"
}),
new Routes(
{
    From:"JYV",
    To:"HEL",
    Distance:234.644,
    Airport:"Flybe"
}),
new Routes(
{
    From:"JYV",
    To:"KEM",
    Distance:379.732,
    Airport:"Finnair"
}),
new Routes(
{
    From:"JZH",
    To:"CAN",
    Distance:1411.58,
    Airport:"Air China"
}),
new Routes(
{
    From:"JZH",
    To:"CAN",
    Distance:1411.58,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JZH",
    To:"CKG",
    Distance:448.03,
    Airport:"Air China"
}),
new Routes(
{
    From:"JZH",
    To:"CKG",
    Distance:448.03,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JZH",
    To:"CKG",
    Distance:448.03,
    Airport:"West Air China"
}),
new Routes(
{
    From:"JZH",
    To:"CTU",
    Distance:254.583,
    Airport:"Air China"
}),
new Routes(
{
    From:"JZH",
    To:"CTU",
    Distance:254.583,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"JZH",
    To:"CTU",
    Distance:254.583,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JZH",
    To:"CTU",
    Distance:254.583,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"JZH",
    To:"CTU",
    Distance:254.583,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"JZH",
    To:"CTU",
    Distance:254.583,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JZH",
    To:"CTU",
    Distance:254.583,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"JZH",
    To:"PVG",
    Distance:1717.35,
    Airport:"Air China"
}),
new Routes(
{
    From:"JZH",
    To:"PVG",
    Distance:1717.35,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"JZH",
    To:"PVG",
    Distance:1717.35,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"JZH",
    To:"XIY",
    Distance:501.288,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KAD",
    To:"LOS",
    Distance:634.757,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"KAJ",
    To:"HEL",
    Distance:463.141,
    Airport:"Finnair"
}),
new Routes(
{
    From:"KAJ",
    To:"HEL",
    Distance:463.141,
    Airport:"Flybe"
}),
new Routes(
{
    From:"KAL",
    To:"GAL",
    Distance:97.9242,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KAL",
    To:"HSL",
    Distance:189.982,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"KAL",
    To:"NUL",
    Distance:55.6691,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KAN",
    To:"ABV",
    Distance:365.156,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"KAN",
    To:"BEY",
    Distance:3649.9,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"KAN",
    To:"CAI",
    Distance:3097.86,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"KAN",
    To:"JED",
    Distance:3423.21,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"KAN",
    To:"KRT",
    Distance:2622.67,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"KAN",
    To:"LOS",
    Distance:834.097,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"KAN",
    To:"NDJ",
    Distance:707.804,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KAO",
    To:"HEL",
    Distance:665.705,
    Airport:"Finnair"
}),
new Routes(
{
    From:"KAT",
    To:"AKL",
    Distance:254.523,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"KAW",
    To:"MGZ",
    Distance:265.972,
    Airport:"Air Mandalay"
}),
new Routes(
{
    From:"KBC",
    To:"FYU",
    Distance:43.0909,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"KBL",
    To:"DEL",
    Distance:1001.29,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"KBL",
    To:"DEL",
    Distance:1001.29,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"KBL",
    To:"DEL",
    Distance:1001.29,
    Airport:"Kam Air"
}),
new Routes(
{
    From:"KBL",
    To:"DEL",
    Distance:1001.29,
    Airport:"Safi Airlines"
}),
new Routes(
{
    From:"KBL",
    To:"DEL",
    Distance:1001.29,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"KBL",
    To:"DWC",
    Distance:1758.11,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"KBL",
    To:"DXB",
    Distance:1686.39,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"KBL",
    To:"DXB",
    Distance:1686.39,
    Airport:"Emirates"
}),
new Routes(
{
    From:"KBL",
    To:"DXB",
    Distance:1686.39,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"KBL",
    To:"DXB",
    Distance:1686.39,
    Airport:"Kam Air"
}),
new Routes(
{
    From:"KBL",
    To:"DXB",
    Distance:1686.39,
    Airport:"Safi Airlines"
}),
new Routes(
{
    From:"KBL",
    To:"DYU",
    Distance:443.625,
    Airport:"Kam Air"
}),
new Routes(
{
    From:"KBL",
    To:"ESB",
    Distance:3237.57,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"KBL",
    To:"GYD",
    Distance:1808.59,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"KBL",
    To:"HEA",
    Distance:641.957,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"KBL",
    To:"HEA",
    Distance:641.957,
    Airport:"Hankook Airline"
}),
new Routes(
{
    From:"KBL",
    To:"HEA",
    Distance:641.957,
    Airport:"Safi Airlines"
}),
new Routes(
{
    From:"KBL",
    To:"IKA",
    Distance:1645.62,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"KBL",
    To:"ISB",
    Distance:373.136,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KBL",
    To:"ISB",
    Distance:373.136,
    Airport:"Safi Airlines"
}),
new Routes(
{
    From:"KBL",
    To:"IST",
    Distance:3588.63,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KBL",
    To:"KDH",
    Distance:462.694,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"KBL",
    To:"KDH",
    Distance:462.694,
    Airport:"Hankook Airline"
}),
new Routes(
{
    From:"KBL",
    To:"KWI",
    Distance:2086.91,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"KBL",
    To:"MHD",
    Distance:886.552,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"KBL",
    To:"MZR",
    Distance:299.038,
    Airport:"Hankook Airline"
}),
new Routes(
{
    From:"KBL",
    To:"MZR",
    Distance:299.038,
    Airport:"Safi Airlines"
}),
new Routes(
{
    From:"KBL",
    To:"PEW",
    Distance:220.878,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"ALA",
    Distance:3534.46,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"KBP",
    To:"ALA",
    Distance:3534.46,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"AMM",
    Distance:2113.15,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"KBP",
    To:"AMS",
    Distance:1818.65,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"AMS",
    Distance:1818.65,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"ATH",
    Distance:1485.46,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"AYT",
    Distance:1495.18,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"BCN",
    Distance:2429.18,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"BCN",
    Distance:2429.18,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"BKK",
    Distance:7415.87,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"BRU",
    Distance:1854.16,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"BRU",
    Distance:1854.16,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"CDG",
    Distance:2032.41,
    Airport:"Air France"
}),
new Routes(
{
    From:"KBP",
    To:"CDG",
    Distance:2032.41,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"DME",
    Distance:733.04,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"DME",
    Distance:733.04,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"DNK",
    Distance:376.29,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"DNK",
    Distance:376.29,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"KBP",
    To:"DOK",
    Distance:557.414,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"DOK",
    Distance:557.414,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"DXB",
    Distance:3488.66,
    Airport:"Emirates"
}),
new Routes(
{
    From:"KBP",
    To:"DXB",
    Distance:3488.66,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"EVN",
    Distance:1545.46,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"FCO",
    Distance:1715.94,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"KBP",
    To:"FCO",
    Distance:1715.94,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"FRA",
    Distance:1585.8,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"KBP",
    To:"FRA",
    Distance:1585.8,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"GVA",
    Distance:1880.11,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"GYD",
    Distance:1846.22,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"GYD",
    Distance:1846.22,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"GYD",
    Distance:1846.22,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"HEL",
    Distance:1169.47,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"HER",
    Distance:1731.03,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"HRK",
    Distance:387.283,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"IFO",
    Distance:475.709,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"IFO",
    Distance:475.709,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"KBP",
    To:"IST",
    Distance:1054.04,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"IST",
    Distance:1054.04,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"KBP",
    To:"IST",
    Distance:1054.04,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"IST",
    Distance:1054.04,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"JFK",
    Distance:7532.62,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"KGD",
    Distance:858.341,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"KGD",
    Distance:858.341,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"KIV",
    Distance:406.42,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KBP",
    To:"LCA",
    Distance:1734.31,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"LED",
    Distance:1052.14,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"LED",
    Distance:1052.14,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"LED",
    Distance:1052.14,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"LED",
    Distance:1052.14,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"LGW",
    Distance:2172.6,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"LHR",
    Distance:2185.15,
    Airport:"British Airways"
}),
new Routes(
{
    From:"KBP",
    To:"LIS",
    Distance:3372.38,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"KBP",
    To:"LIS",
    Distance:3372.38,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"LWO",
    Distance:498.464,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"MAD",
    Distance:2872.23,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"MAD",
    Distance:2872.23,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"MSQ",
    Distance:439.194,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"MSQ",
    Distance:439.194,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"MUC",
    Distance:1397.77,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"KBP",
    To:"MUC",
    Distance:1397.77,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"MXP",
    Distance:1723.43,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"NAP",
    Distance:1659.03,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"KBP",
    To:"NCE",
    Distance:1932.91,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"ODS",
    Distance:435.985,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"ODS",
    Distance:435.985,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"OSL",
    Distance:1653.24,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"KBP",
    To:"OVB",
    Distance:3445.74,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"OVB",
    Distance:3445.74,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"PRG",
    Distance:1181.29,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"PRG",
    Distance:1181.29,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"KBP",
    To:"PRG",
    Distance:1181.29,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"RHO",
    Distance:1566.24,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"RIX",
    Distance:861.291,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"KBP",
    To:"RIX",
    Distance:861.291,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"ROV",
    Distance:737.526,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"ROV",
    Distance:737.526,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"SAW",
    Distance:1057.54,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"SAW",
    Distance:1057.54,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"SHJ",
    Distance:3489.23,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"KBP",
    To:"SIP",
    Distance:631.926,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"SVO",
    Distance:761.214,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"SVO",
    Distance:761.214,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"SVX",
    Distance:2080.23,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"SVX",
    Distance:2080.23,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"TAS",
    Distance:3102.56,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"KBP",
    To:"TBS",
    Distance:1448.18,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"TBS",
    Distance:1448.18,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"TFS",
    Distance:4674.17,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"TLL",
    Distance:1079.27,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"KBP",
    To:"TLV",
    Distance:2065.03,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"TLV",
    Distance:2065.03,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"TSE",
    Distance:2823.03,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"KBP",
    To:"TSE",
    Distance:2823.03,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"TXL",
    Distance:1241.33,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"UKS",
    Distance:659.983,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"KBP",
    To:"VIE",
    Distance:1067.66,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"VIE",
    Distance:1067.66,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"VNO",
    Distance:609.264,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"WAW",
    Distance:719.266,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"WAW",
    Distance:719.266,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBP",
    To:"ZRH",
    Distance:1657.7,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"KBP",
    To:"ZRH",
    Distance:1657.7,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KBR",
    To:"BKI",
    Distance:1521.48,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KBR",
    To:"JHB",
    Distance:525.868,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KBR",
    To:"JHB",
    Distance:525.868,
    Airport:"Firefly"
}),
new Routes(
{
    From:"KBR",
    To:"JHB",
    Distance:525.868,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KBR",
    To:"KCH",
    Distance:1033.95,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KBR",
    To:"KUL",
    Distance:385.879,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KBR",
    To:"KUL",
    Distance:385.879,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KBR",
    To:"PEN",
    Distance:243.124,
    Airport:"Firefly"
}),
new Routes(
{
    From:"KBR",
    To:"PEN",
    Distance:243.124,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KBR",
    To:"PEN",
    Distance:243.124,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KBR",
    To:"SIN",
    Distance:567.866,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KBR",
    To:"SZB",
    Distance:347.53,
    Airport:"Firefly"
}),
new Routes(
{
    From:"KBR",
    To:"SZB",
    Distance:347.53,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KBR",
    To:"SZB",
    Distance:347.53,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KBU",
    To:"BDJ",
    Distance:156.539,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"KBU",
    To:"UPG",
    Distance:424.084,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"KBV",
    To:"BKK",
    Distance:650.022,
    Airport:"Air France"
}),
new Routes(
{
    From:"KBV",
    To:"BKK",
    Distance:650.022,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"KBV",
    To:"BKK",
    Distance:650.022,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"KBV",
    To:"BKK",
    Distance:650.022,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"KBV",
    To:"BKK",
    Distance:650.022,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"KBV",
    To:"BKK",
    Distance:650.022,
    Airport:"Qantas"
}),
new Routes(
{
    From:"KBV",
    To:"BKK",
    Distance:650.022,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"KBV",
    To:"BKK",
    Distance:650.022,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"KBV",
    To:"CNX",
    Distance:1186.55,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"KBV",
    To:"DMK",
    Distance:670.433,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"KBV",
    To:"DMK",
    Distance:670.433,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"KBV",
    To:"KUL",
    Distance:666.797,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KBV",
    To:"KUL",
    Distance:666.797,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KBV",
    To:"SIN",
    Distance:932.732,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"KBV",
    To:"SIN",
    Distance:932.732,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"KBV",
    To:"USM",
    Distance:199.936,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"KCA",
    To:"URC",
    Distance:439.475,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KCA",
    To:"URC",
    Distance:439.475,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KCH",
    To:"BKI",
    Distance:803.458,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KCH",
    To:"BKI",
    Distance:803.458,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KCH",
    To:"BTU",
    Distance:348.496,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KCH",
    To:"BTU",
    Distance:348.496,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KCH",
    To:"JHB",
    Distance:742.411,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KCH",
    To:"KBR",
    Distance:1033.95,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KCH",
    To:"KUL",
    Distance:969.904,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KCH",
    To:"KUL",
    Distance:969.904,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KCH",
    To:"KUL",
    Distance:969.904,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KCH",
    To:"KUL",
    Distance:969.904,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KCH",
    To:"LGK",
    Distance:1294.97,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KCH",
    To:"MKM",
    Distance:249.14,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KCH",
    To:"MYY",
    Distance:512.732,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KCH",
    To:"MYY",
    Distance:512.732,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KCH",
    To:"MYY",
    Distance:512.732,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KCH",
    To:"MZV",
    Distance:571.297,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KCH",
    To:"MZV",
    Distance:571.297,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"KCH",
    To:"PEN",
    Distance:1195.27,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KCH",
    To:"PNK",
    Distance:209.911,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KCH",
    To:"SBW",
    Distance:201.536,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KCH",
    To:"SBW",
    Distance:201.536,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KCH",
    To:"SIN",
    Distance:706.308,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KCH",
    To:"SIN",
    Distance:706.308,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KCH",
    To:"SIN",
    Distance:706.308,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"KCH",
    To:"SIN",
    Distance:706.308,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"KCH",
    To:"TGC",
    Distance:122.356,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KCL",
    To:"KCQ",
    Distance:16.1371,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"KCM",
    To:"ESB",
    Distance:447.614,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KCM",
    To:"IST",
    Distance:797.747,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KCM",
    To:"SAW",
    Distance:756.685,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"KCQ",
    To:"KPV",
    Distance:45.5253,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"KCT",
    To:"CMB",
    Distance:140.515,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"KCT",
    To:"DIW",
    Distance:40.26,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"KCZ",
    To:"HND",
    Distance:602.284,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KCZ",
    To:"HND",
    Distance:602.284,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KCZ",
    To:"ITM",
    Distance:213.244,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KCZ",
    To:"NKM",
    Distance:353.9,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"KDH",
    To:"DEL",
    Distance:1131.04,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"KDH",
    To:"DXB",
    Distance:1238.02,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"KDH",
    To:"KBL",
    Distance:462.694,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"KDH",
    To:"KBL",
    Distance:462.694,
    Airport:"Hankook Airline"
}),
new Routes(
{
    From:"KDH",
    To:"MHD",
    Distance:777.211,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"KDI",
    To:"CGK",
    Distance:1760.34,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"KDI",
    To:"UPG",
    Distance:335.648,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"KDI",
    To:"UPG",
    Distance:335.648,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"KDI",
    To:"UPG",
    Distance:335.648,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"KDM",
    To:"GAN",
    Distance:132.565,
    Airport:"Maldivian"
}),
new Routes(
{
    From:"KDM",
    To:"MLE",
    Distance:416.084,
    Airport:"Maldivian"
}),
new Routes(
{
    From:"KDO",
    To:"GKK",
    Distance:125.858,
    Airport:"Maldivian"
}),
new Routes(
{
    From:"KDO",
    To:"MLE",
    Distance:259.382,
    Airport:"Maldivian"
}),
new Routes(
{
    From:"KDU",
    To:"ISB",
    Distance:293.961,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KDV",
    To:"NAN",
    Distance:163.252,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"KDV",
    To:"SUV",
    Distance:120.547,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"KEF",
    To:"ALC",
    Distance:3208.07,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"KEF",
    To:"ALC",
    Distance:3208.07,
    Airport:"bmibaby"
}),
new Routes(
{
    From:"KEF",
    To:"AMS",
    Distance:2037.66,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"ARN",
    Distance:2142.5,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"BGO",
    Distance:1489.45,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"BGO",
    Distance:1489.45,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"KEF",
    To:"BLL",
    Distance:1967.38,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"BOS",
    Distance:3874.24,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"BRS",
    Distance:1817.49,
    Airport:"easyJet"
}),
new Routes(
{
    From:"KEF",
    To:"BRU",
    Distance:2148.11,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"BSL",
    Distance:2576.1,
    Airport:"easyJet"
}),
new Routes(
{
    From:"KEF",
    To:"CDG",
    Distance:2241.08,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"CDG",
    Distance:2241.08,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"KEF",
    To:"CDG",
    Distance:2241.08,
    Airport:"bmibaby"
}),
new Routes(
{
    From:"KEF",
    To:"CPH",
    Distance:2143.92,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"CPH",
    Distance:2143.92,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"KEF",
    To:"CPH",
    Distance:2143.92,
    Airport:"bmibaby"
}),
new Routes(
{
    From:"KEF",
    To:"DEN",
    Distance:5727,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"EDI",
    Distance:1384.63,
    Airport:"easyJet"
}),
new Routes(
{
    From:"KEF",
    To:"EWR",
    Distance:4176.91,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"FRA",
    Distance:2400.6,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"GLA",
    Distance:1347.45,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"GOH",
    Distance:1400.56,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"KEF",
    To:"HEL",
    Distance:2444.34,
    Airport:"Finnair"
}),
new Routes(
{
    From:"KEF",
    To:"HEL",
    Distance:2444.34,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"IAD",
    Distance:4494.88,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"JFK",
    Distance:4163.25,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"LGW",
    Distance:1935.27,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"LGW",
    Distance:1935.27,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"KEF",
    To:"LGW",
    Distance:1935.27,
    Airport:"bmibaby"
}),
new Routes(
{
    From:"KEF",
    To:"LHR",
    Distance:1894.38,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"LTN",
    Distance:1861.76,
    Airport:"easyJet"
}),
new Routes(
{
    From:"KEF",
    To:"MAN",
    Distance:1653.08,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"MAN",
    Distance:1653.08,
    Airport:"easyJet"
}),
new Routes(
{
    From:"KEF",
    To:"MUC",
    Distance:2691.75,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"OSL",
    Distance:1781.41,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"OSL",
    Distance:1781.41,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"KEF",
    To:"OSL",
    Distance:1781.41,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"KEF",
    To:"SEA",
    Distance:5811.35,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"SFB",
    Distance:5642.8,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"SXF",
    Distance:2431.13,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"KEF",
    To:"SXF",
    Distance:2431.13,
    Airport:"bmibaby"
}),
new Routes(
{
    From:"KEF",
    To:"YEG",
    Distance:4921.54,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"YYZ",
    Distance:4170.61,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEF",
    To:"ZRH",
    Distance:2630.71,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"KEJ",
    To:"DME",
    Distance:2986.35,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KEJ",
    To:"DME",
    Distance:2986.35,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"KEJ",
    To:"SVO",
    Distance:2994.44,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KEM",
    To:"HEL",
    Distance:607.918,
    Airport:"Finnair"
}),
new Routes(
{
    From:"KEM",
    To:"HEL",
    Distance:607.918,
    Airport:"Flybe"
}),
new Routes(
{
    From:"KEP",
    To:"KTM",
    Distance:365.62,
    Airport:"Yeti Airways"
}),
new Routes(
{
    From:"KER",
    To:"IFN",
    Distance:555.437,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"KER",
    To:"SYZ",
    Distance:428.224,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"KER",
    To:"THR",
    Distance:799.065,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"KER",
    To:"ZAH",
    Distance:391.526,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"KET",
    To:"RGN",
    Distance:611.647,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"KFP",
    To:"CDB",
    Distance:59.1171,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"KFS",
    To:"IST",
    Distance:418.765,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KGA",
    To:"FBM",
    Distance:842.421,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"KGA",
    To:"FIH",
    Distance:795.943,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"KGA",
    To:"TSH",
    Distance:194.549,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"KGC",
    To:"ADL",
    Distance:125.262,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"KGD",
    To:"DME",
    Distance:1098.78,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KGD",
    To:"DME",
    Distance:1098.78,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"KGD",
    To:"DME",
    Distance:1098.78,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KGD",
    To:"EGO",
    Distance:1171.88,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"KGD",
    To:"KBP",
    Distance:858.341,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KGD",
    To:"KBP",
    Distance:858.341,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"KGD",
    To:"LED",
    Distance:795.258,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KGD",
    To:"MSQ",
    Distance:494.223,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"KGD",
    To:"RIX",
    Distance:308.918,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"KGD",
    To:"SVO",
    Distance:1065.44,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KGD",
    To:"TAS",
    Distance:3827.63,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KGD",
    To:"TAS",
    Distance:3827.63,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"KGD",
    To:"TXL",
    Distance:545.619,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"KGD",
    To:"TXL",
    Distance:545.619,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KGE",
    To:"GZO",
    Distance:116.225,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"KGE",
    To:"MUA",
    Distance:116.116,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"KGF",
    To:"ALA",
    Distance:757.451,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"KGF",
    To:"ALA",
    Distance:757.451,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"KGF",
    To:"DME",
    Distance:2450.1,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"KGF",
    To:"KZO",
    Distance:803.457,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"KGF",
    To:"LED",
    Distance:2921.66,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KGF",
    To:"SVO",
    Distance:2481.66,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KGF",
    To:"UKK",
    Distance:657.525,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"KGI",
    To:"ADL",
    Distance:1657.35,
    Airport:"Qantas"
}),
new Routes(
{
    From:"KGI",
    To:"MEL",
    Distance:2274.35,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"KGI",
    To:"PER",
    Distance:537.097,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"KGI",
    To:"PER",
    Distance:537.097,
    Airport:"Qantas"
}),
new Routes(
{
    From:"KGI",
    To:"PER",
    Distance:537.097,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"KGL",
    To:"ADD",
    Distance:1550,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"KGL",
    To:"ADD",
    Distance:1550,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"KGL",
    To:"BJM",
    Distance:176.15,
    Airport:"Air France"
}),
new Routes(
{
    From:"KGL",
    To:"BJM",
    Distance:176.15,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"KGL",
    To:"BJM",
    Distance:176.15,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"KGL",
    To:"BJM",
    Distance:176.15,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KGL",
    To:"BJM",
    Distance:176.15,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"KGL",
    To:"BJM",
    Distance:176.15,
    Airport:"Northern Dene Airways"
}),
new Routes(
{
    From:"KGL",
    To:"BJM",
    Distance:176.15,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"KGL",
    To:"BRU",
    Distance:6362,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"KGL",
    To:"BZV",
    Distance:1672.12,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"KGL",
    To:"DAR",
    Distance:1143.22,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"KGL",
    To:"DXB",
    Distance:4067.24,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"KGL",
    To:"EBB",
    Distance:340.024,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"KGL",
    To:"EBB",
    Distance:340.024,
    Airport:"Air France"
}),
new Routes(
{
    From:"KGL",
    To:"EBB",
    Distance:340.024,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"KGL",
    To:"EBB",
    Distance:340.024,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"KGL",
    To:"EBB",
    Distance:340.024,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KGL",
    To:"EBB",
    Distance:340.024,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"KGL",
    To:"EBB",
    Distance:340.024,
    Airport:"Northern Dene Airways"
}),
new Routes(
{
    From:"KGL",
    To:"EBB",
    Distance:340.024,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"KGL",
    To:"EBB",
    Distance:340.024,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"KGL",
    To:"EBB",
    Distance:340.024,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KGL",
    To:"EBB",
    Distance:340.024,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"KGL",
    To:"IST",
    Distance:4777.21,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"KGL",
    To:"JNB",
    Distance:2695.25,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"KGL",
    To:"JNB",
    Distance:2695.25,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"KGL",
    To:"JRO",
    Distance:787.201,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"KGL",
    To:"JUB",
    Distance:777.783,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"KGL",
    To:"KME",
    Distance:147.432,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"KGL",
    To:"LBV",
    Distance:2320.13,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"KGL",
    To:"LOS",
    Distance:3124.81,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"KGL",
    To:"MBA",
    Distance:1074.67,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"KGL",
    To:"NBO",
    Distance:757.93,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"KGL",
    To:"NBO",
    Distance:757.93,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"KGL",
    To:"NBO",
    Distance:757.93,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KGL",
    To:"NBO",
    Distance:757.93,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"KGL",
    To:"NBO",
    Distance:757.93,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"KGL",
    To:"NBO",
    Distance:757.93,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"KGL",
    To:"NBO",
    Distance:757.93,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"KGP",
    To:"SVX",
    Distance:980.081,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"KGS",
    To:"AMS",
    Distance:2451.95,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"KGS",
    To:"ATH",
    Distance:305.778,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"KGS",
    To:"ATH",
    Distance:305.778,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"KGS",
    To:"BGY",
    Distance:1751.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KGS",
    To:"BRU",
    Distance:2379.99,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"KGS",
    To:"BSL",
    Distance:2000.14,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"KGS",
    To:"CGN",
    Distance:2224.47,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"KGS",
    To:"CGN",
    Distance:2224.47,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"KGS",
    To:"CGN",
    Distance:2224.47,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"KGS",
    To:"DME",
    Distance:2225.45,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"KGS",
    To:"DUS",
    Distance:2273.83,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"KGS",
    To:"DUS",
    Distance:2273.83,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"KGS",
    To:"DUS",
    Distance:2273.83,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"KGS",
    To:"FRA",
    Distance:2089.01,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"KGS",
    To:"FRA",
    Distance:2089.01,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"KGS",
    To:"GLA",
    Distance:3169.78,
    Airport:"easyJet"
}),
new Routes(
{
    From:"KGS",
    To:"HAJ",
    Distance:2208.81,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"KGS",
    To:"HAJ",
    Distance:2208.81,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"KGS",
    To:"HAM",
    Distance:2289.31,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"KGS",
    To:"HAM",
    Distance:2289.31,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"KGS",
    To:"JKL",
    Distance:23.1942,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"KGS",
    To:"JKL",
    Distance:23.1942,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"KGS",
    To:"KRK",
    Distance:1588.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KGS",
    To:"KUN",
    Distance:2033.37,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KGS",
    To:"LBA",
    Distance:2906.73,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"KGS",
    To:"LBA",
    Distance:2906.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KGS",
    To:"LEJ",
    Distance:2005.52,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"KGS",
    To:"LGW",
    Distance:2678.79,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"KGS",
    To:"LGW",
    Distance:2678.79,
    Airport:"easyJet"
}),
new Routes(
{
    From:"KGS",
    To:"LPL",
    Distance:2948.62,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KGS",
    To:"LUX",
    Distance:2200.27,
    Airport:"Luxair"
}),
new Routes(
{
    From:"KGS",
    To:"MAN",
    Distance:2915.6,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"KGS",
    To:"MUC",
    Distance:1788.86,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"KGS",
    To:"MUC",
    Distance:1788.86,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"KGS",
    To:"MUC",
    Distance:1788.86,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"KGS",
    To:"RHO",
    Distance:98.7042,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"KGS",
    To:"RHO",
    Distance:98.7042,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"KGS",
    To:"RYG",
    Distance:2770.95,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KGS",
    To:"STN",
    Distance:2689.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KGS",
    To:"STR",
    Distance:1960.66,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"KGS",
    To:"STR",
    Distance:1960.66,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"KGS",
    To:"SXF",
    Distance:2031.72,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"KGS",
    To:"TXL",
    Distance:2057.24,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"KGT",
    To:"CTU",
    Distance:217.349,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KGX",
    To:"ANV",
    Distance:28.2839,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KGX",
    To:"SHX",
    Distance:33.7791,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KHD",
    To:"THR",
    Distance:373.878,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"KHG",
    To:"CTU",
    Distance:2716.46,
    Airport:"Air China"
}),
new Routes(
{
    From:"KHG",
    To:"CTU",
    Distance:2716.46,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KHG",
    To:"NGQ",
    Distance:903.665,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHG",
    To:"URC",
    Distance:1065.97,
    Airport:"Air China"
}),
new Routes(
{
    From:"KHG",
    To:"URC",
    Distance:1065.97,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KHG",
    To:"URC",
    Distance:1065.97,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHG",
    To:"URC",
    Distance:1065.97,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KHG",
    To:"URC",
    Distance:1065.97,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KHG",
    To:"URC",
    Distance:1065.97,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KHG",
    To:"URC",
    Distance:1065.97,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KHG",
    To:"URC",
    Distance:1065.97,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KHG",
    To:"URC",
    Distance:1065.97,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KHG",
    To:"XIY",
    Distance:2944.72,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"BKK",
    Distance:2292.19,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"CAN",
    Distance:727.405,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"KHH",
    To:"CGO",
    Distance:1471.33,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"CGO",
    Distance:1471.33,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"KHH",
    To:"CKG",
    Distance:1580.19,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"CSX",
    Distance:949.59,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"CSX",
    Distance:949.59,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"KHH",
    To:"CTU",
    Distance:1855.02,
    Airport:"Primaris Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"FOC",
    Distance:379.821,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"KHH",
    To:"FOC",
    Distance:379.821,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"KHH",
    To:"FOC",
    Distance:379.821,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"HAN",
    Distance:1507.35,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"KHH",
    To:"HAN",
    Distance:1507.35,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"HFE",
    Distance:1066.74,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"KHH",
    To:"HGH",
    Distance:850.951,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"HGH",
    Distance:850.951,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"KHH",
    To:"HKG",
    Distance:662.006,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"KHH",
    To:"HKG",
    Distance:662.006,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"HKG",
    Distance:662.006,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"KHH",
    To:"HUN",
    Distance:206.432,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"ICN",
    Distance:1755.85,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"ICN",
    Distance:1755.85,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"KHH",
    To:"ICN",
    Distance:1755.85,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"KHN",
    Distance:828.993,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"KHN",
    Distance:828.993,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"KIX",
    Distance:1959.48,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"KIX",
    Distance:1959.48,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"KHH",
    To:"KMG",
    Distance:1810.14,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"KHH",
    To:"KNH",
    Distance:289.063,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"KHH",
    To:"MFM",
    Distance:696.548,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"KHH",
    To:"MFM",
    Distance:696.548,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"KHH",
    To:"MFM",
    Distance:696.548,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"KHH",
    To:"MNL",
    Distance:899.937,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"MZG",
    Distance:132.693,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"KHH",
    To:"NGB",
    Distance:813.697,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"KHH",
    To:"NKG",
    Distance:1029.63,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"NNG",
    Distance:1249.83,
    Airport:"Primaris Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"NNG",
    Distance:1249.83,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"KHH",
    To:"NRT",
    Distance:2427.57,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KHH",
    To:"NRT",
    Distance:2427.57,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"NRT",
    Distance:2427.57,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"NRT",
    Distance:2427.57,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"KHH",
    To:"NRT",
    Distance:2427.57,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"OKA",
    Distance:841.095,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"PEK",
    Distance:1978.3,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"PUS",
    Distance:1630.11,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"KHH",
    To:"PVG",
    Distance:963.368,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"PVG",
    Distance:963.368,
    Airport:"China SSS"
}),
new Routes(
{
    From:"KHH",
    To:"PVG",
    Distance:963.368,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"KHH",
    To:"PVG",
    Distance:963.368,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"SGN",
    Distance:1956.43,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"SGN",
    Distance:1956.43,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"KHH",
    To:"SGN",
    Distance:1956.43,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"SIN",
    Distance:2948.61,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"SIN",
    Distance:2948.61,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"SZX",
    Distance:671.246,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"TAO",
    Distance:1522.15,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"KHH",
    To:"TNA",
    Distance:1616.17,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"KHH",
    To:"TSN",
    Distance:1861.86,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"KHH",
    To:"WUH",
    Distance:1097.23,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"WUH",
    Distance:1097.23,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"XMN",
    Distance:314.852,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"XMN",
    Distance:314.852,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"KHH",
    To:"XMN",
    Distance:314.852,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KHH",
    To:"XUZ",
    Distance:1326.15,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"KHI",
    To:"AUH",
    Distance:1264.7,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"KHI",
    To:"AUH",
    Distance:1264.7,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"KHI",
    To:"AUH",
    Distance:1264.7,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"BAH",
    Distance:1663.28,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"KHI",
    To:"BHV",
    Distance:668.659,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"KHI",
    To:"BHV",
    Distance:668.659,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"BKK",
    Distance:3726.67,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"KHI",
    To:"BKK",
    Distance:3726.67,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"KHI",
    To:"BOM",
    Distance:874.206,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"CMB",
    Distance:2390.51,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"CMB",
    Distance:2390.51,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"CTU",
    Distance:3658.38,
    Airport:"Air China"
}),
new Routes(
{
    From:"KHI",
    To:"DAC",
    Distance:2353.65,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"DEA",
    Distance:650.718,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"DEL",
    Distance:1067.41,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"DMM",
    Distance:1747.17,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"DMM",
    Distance:1747.17,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"DOH",
    Distance:1570.23,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"KHI",
    To:"DXB",
    Distance:1188.27,
    Airport:"Emirates"
}),
new Routes(
{
    From:"KHI",
    To:"DXB",
    Distance:1188.27,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"KHI",
    To:"DXB",
    Distance:1188.27,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"DXB",
    Distance:1188.27,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"KHI",
    To:"GWD",
    Distance:487.934,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"IKA",
    Distance:1927.97,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"KHI",
    To:"ISB",
    Distance:1126.31,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"KHI",
    To:"ISB",
    Distance:1126.31,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"ISB",
    Distance:1126.31,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"KHI",
    To:"IST",
    Distance:3957.41,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"JED",
    Distance:2877.46,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"KHI",
    To:"JED",
    Distance:2877.46,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"JED",
    Distance:2877.46,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"KTM",
    Distance:1838.61,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"KUL",
    Distance:4444.73,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"LHE",
    Distance:1021.51,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"KHI",
    To:"LHE",
    Distance:1021.51,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"LHE",
    Distance:1021.51,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"KHI",
    To:"LHR",
    Distance:6338.81,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"LYP",
    Distance:917.759,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"KHI",
    To:"LYP",
    Distance:917.759,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"MCT",
    Distance:911.504,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"KHI",
    To:"MCT",
    Distance:911.504,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"MCT",
    Distance:911.504,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"KHI",
    To:"MED",
    Distance:2768.49,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"MJD",
    Distance:287.3,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"MUX",
    Distance:723.089,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"KHI",
    To:"MUX",
    Distance:723.089,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"MUX",
    Distance:723.089,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"KHI",
    To:"PEW",
    Distance:1094.54,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"KHI",
    To:"PEW",
    Distance:1094.54,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"PEW",
    Distance:1094.54,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"KHI",
    To:"PJG",
    Distance:378.872,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"RUH",
    Distance:2061.28,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"RUH",
    Distance:2061.28,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"RYK",
    Distance:495.509,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"SHJ",
    Distance:1172.85,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"KHI",
    To:"SHJ",
    Distance:1172.85,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"SKZ",
    Distance:352.736,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"TUK",
    Distance:431.752,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"UET",
    Distance:594.723,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"KHI",
    To:"UET",
    Distance:594.723,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHI",
    To:"UET",
    Distance:594.723,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"KHI",
    To:"YYZ",
    Distance:11670.1,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"CAN",
    Distance:661.546,
    Airport:"Air China"
}),
new Routes(
{
    From:"KHN",
    To:"CAN",
    Distance:661.546,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"CAN",
    Distance:661.546,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"CAN",
    Distance:661.546,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"CAN",
    Distance:661.546,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"CGO",
    Distance:658.21,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KHN",
    To:"CGQ",
    Distance:1826.81,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"CKG",
    Distance:902.607,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"CKG",
    Distance:902.607,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"CKG",
    Distance:902.607,
    Airport:"West Air China"
}),
new Routes(
{
    From:"KHN",
    To:"CKG",
    Distance:902.607,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"CTU",
    Distance:1169.28,
    Airport:"Air China"
}),
new Routes(
{
    From:"KHN",
    To:"CTU",
    Distance:1169.28,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"CTU",
    Distance:1169.28,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"CTU",
    Distance:1169.28,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"DLC",
    Distance:1237.11,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"DMK",
    Distance:2291,
    Airport:"Alpi Eagles"
}),
new Routes(
{
    From:"KHN",
    To:"HAK",
    Distance:1135.15,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"HAK",
    Distance:1135.15,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"HAK",
    Distance:1135.15,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KHN",
    To:"HET",
    Distance:1383.29,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KHN",
    To:"HKG",
    Distance:755.658,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"HRB",
    Distance:2072.33,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"HRB",
    Distance:2072.33,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"HRB",
    Distance:2072.33,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"ICN",
    Distance:1369.22,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"KHH",
    Distance:828.993,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"KHH",
    Distance:828.993,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"KMG",
    Distance:1372.57,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"KMG",
    Distance:1372.57,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"KMG",
    Distance:1372.57,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"KMG",
    Distance:1372.57,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"KOW",
    Distance:351.745,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KHN",
    To:"KOW",
    Distance:351.745,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"KWE",
    Distance:932.123,
    Airport:"Air China"
}),
new Routes(
{
    From:"KHN",
    To:"KWE",
    Distance:932.123,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"KWE",
    Distance:932.123,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"LYA",
    Distance:705.269,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"NAY",
    Distance:1214.79,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"NAY",
    Distance:1214.79,
    Airport:"China United"
}),
new Routes(
{
    From:"KHN",
    To:"NGB",
    Distance:549.535,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"NGB",
    Distance:549.535,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"NKG",
    Distance:427.978,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"NKG",
    Distance:427.978,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"NNG",
    Distance:1040.17,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KHN",
    To:"NNG",
    Distance:1040.17,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"NNG",
    Distance:1040.17,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"PEK",
    Distance:1248.63,
    Airport:"Air China"
}),
new Routes(
{
    From:"KHN",
    To:"PEK",
    Distance:1248.63,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"PEK",
    Distance:1248.63,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"PEK",
    Distance:1248.63,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"PVG",
    Distance:622.391,
    Airport:"Air China"
}),
new Routes(
{
    From:"KHN",
    To:"PVG",
    Distance:622.391,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"PVG",
    Distance:622.391,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"SHA",
    Distance:583.992,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"SHA",
    Distance:583.992,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"SHE",
    Distance:1544.14,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"SJW",
    Distance:1052.86,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KHN",
    To:"SYX",
    Distance:1347.01,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KHN",
    To:"SZX",
    Distance:723.153,
    Airport:"Air China"
}),
new Routes(
{
    From:"KHN",
    To:"SZX",
    Distance:723.153,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"SZX",
    Distance:723.153,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"SZX",
    Distance:723.153,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"SZX",
    Distance:723.153,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"TAO",
    Distance:923.322,
    Airport:"Air China"
}),
new Routes(
{
    From:"KHN",
    To:"TAO",
    Distance:923.322,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"TAO",
    Distance:923.322,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"TNA",
    Distance:897.123,
    Airport:"Air China"
}),
new Routes(
{
    From:"KHN",
    To:"TNA",
    Distance:897.123,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KHN",
    To:"TNA",
    Distance:897.123,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"TPE",
    Distance:675.59,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"TPE",
    Distance:675.59,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"TSN",
    Distance:1148.5,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KHN",
    To:"TYN",
    Distance:1033.15,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"WNZ",
    Distance:495.826,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KHN",
    To:"WUH",
    Distance:268.615,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"XIY",
    Distance:917.673,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"XIY",
    Distance:917.673,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"XIY",
    Distance:917.673,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"XIY",
    Distance:917.673,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"XMN",
    Distance:528.941,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"XMN",
    Distance:528.941,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"XMN",
    Distance:528.941,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"ZUH",
    Distance:803.573,
    Airport:"Air China"
}),
new Routes(
{
    From:"KHN",
    To:"ZUH",
    Distance:803.573,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KHN",
    To:"ZUH",
    Distance:803.573,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KHS",
    To:"MCT",
    Distance:353.058,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"KHV",
    To:"BQS",
    Distance:599.757,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KHV",
    To:"DME",
    Distance:6149.96,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"DYR",
    Distance:3074.2,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KHV",
    To:"GDX",
    Distance:1610.87,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"GDX",
    Distance:1610.87,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KHV",
    To:"GDX",
    Distance:1610.87,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"KHV",
    To:"HKG",
    Distance:3469.32,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"KHV",
    To:"HKG",
    Distance:3469.32,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"HRB",
    Distance:749.339,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"HRB",
    Distance:749.339,
    Airport:"Sat Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"HTA",
    Distance:1596.24,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"KHV",
    To:"ICN",
    Distance:1418.1,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"ICN",
    Distance:1418.1,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"IKT",
    Distance:2204.83,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"JMU",
    Distance:400.004,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"KHV",
    To:"KJA",
    Distance:2969.54,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"KJA",
    Distance:2969.54,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"NRT",
    Distance:1481.6,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"NRT",
    Distance:1481.6,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"OHH",
    Distance:779.536,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KHV",
    To:"OVB",
    Distance:3596.65,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"OVB",
    Distance:3596.65,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"OVB",
    Distance:3596.65,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"PEK",
    Distance:1746.22,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"PEK",
    Distance:1746.22,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"PEK",
    Distance:1746.22,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"PKC",
    Distance:1704.09,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"PKC",
    Distance:1704.09,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"SVO",
    Distance:6136.87,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"UUD",
    Distance:1997.2,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"KHV",
    To:"UUS",
    Distance:591.822,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"UUS",
    Distance:591.822,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"UUS",
    Distance:591.822,
    Airport:"Sat Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"VVO",
    Distance:616.715,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"VVO",
    Distance:616.715,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KHV",
    To:"YKS",
    Distance:1545.54,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KID",
    To:"ARN",
    Distance:472.757,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"KIH",
    To:"AUH",
    Distance:242.298,
    Airport:"Kish Air"
}),
new Routes(
{
    From:"KIH",
    To:"AWZ",
    Distance:737.408,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"KIH",
    To:"AWZ",
    Distance:737.408,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"KIH",
    To:"BND",
    Distance:249.955,
    Airport:"Georgian National Airlines"
}),
new Routes(
{
    From:"KIH",
    To:"BND",
    Distance:249.955,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"KIH",
    To:"BND",
    Distance:249.955,
    Airport:"Kish Air"
}),
new Routes(
{
    From:"KIH",
    To:"DXB",
    Distance:198.044,
    Airport:"Kish Air"
}),
new Routes(
{
    From:"KIH",
    To:"GSM",
    Distance:232.072,
    Airport:"Georgian National Airlines"
}),
new Routes(
{
    From:"KIH",
    To:"IFN",
    Distance:721.756,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"KIH",
    To:"IFN",
    Distance:721.756,
    Airport:"Kish Air"
}),
new Routes(
{
    From:"KIH",
    To:"SYZ",
    Distance:361.756,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"KIH",
    To:"SYZ",
    Distance:361.756,
    Airport:"Georgian National Airlines"
}),
new Routes(
{
    From:"KIH",
    To:"SYZ",
    Distance:361.756,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"KIH",
    To:"SYZ",
    Distance:361.756,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"KIH",
    To:"THR",
    Distance:1049.9,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"KIH",
    To:"THR",
    Distance:1049.9,
    Airport:"Kish Air"
}),
new Routes(
{
    From:"KIJ",
    To:"CTS",
    Distance:620.154,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIJ",
    To:"CTS",
    Distance:620.154,
    Airport:"Hokkaido International Airlines"
}),
new Routes(
{
    From:"KIJ",
    To:"CTS",
    Distance:620.154,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIJ",
    To:"FUK",
    Distance:895.668,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIJ",
    To:"FUK",
    Distance:895.668,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"KIJ",
    To:"HRB",
    Distance:1388.79,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KIJ",
    To:"ICN",
    Distance:1111.7,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIJ",
    To:"ICN",
    Distance:1111.7,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"KIJ",
    To:"ITM",
    Distance:449.236,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIJ",
    To:"ITM",
    Distance:449.236,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIJ",
    To:"NGO",
    Distance:363.375,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIJ",
    To:"NKM",
    Distance:320.942,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"KIJ",
    To:"NRT",
    Distance:232.894,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIJ",
    To:"OKA",
    Distance:1659.2,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIJ",
    To:"PVG",
    Distance:1734.51,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KIJ",
    To:"PVG",
    Distance:1734.51,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIM",
    To:"CPT",
    Distance:819.268,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"KIM",
    To:"JNB",
    Distance:453.442,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"KIN",
    To:"ANU",
    Distance:1591.91,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"KIN",
    To:"ATL",
    Distance:1904.44,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"KIN",
    To:"BGI",
    Distance:1929.21,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"KIN",
    To:"CUR",
    Distance:1055.45,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"KIN",
    To:"FLL",
    Distance:968.863,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"KIN",
    To:"FLL",
    Distance:968.863,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"KIN",
    To:"FLL",
    Distance:968.863,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"KIN",
    To:"GCM",
    Distance:504.666,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"KIN",
    To:"GEO",
    Distance:2378.47,
    Airport:"Overland Airways"
}),
new Routes(
{
    From:"KIN",
    To:"JFK",
    Distance:2540.95,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"KIN",
    To:"JFK",
    Distance:2540.95,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"KIN",
    To:"JFK",
    Distance:2540.95,
    Airport:"Overland Airways"
}),
new Routes(
{
    From:"KIN",
    To:"LGW",
    Distance:7536.8,
    Airport:"British Airways"
}),
new Routes(
{
    From:"KIN",
    To:"LGW",
    Distance:7536.8,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"KIN",
    To:"MBJ",
    Distance:134.647,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"KIN",
    To:"MBJ",
    Distance:134.647,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"KIN",
    To:"MCO",
    Distance:1254.67,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"KIN",
    To:"MIA",
    Distance:945.393,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KIN",
    To:"MIA",
    Distance:945.393,
    Airport:"US Airways"
}),
new Routes(
{
    From:"KIN",
    To:"NAS",
    Distance:792.96,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"KIN",
    To:"PLS",
    Distance:636.886,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"KIN",
    To:"POS",
    Distance:1852.81,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"KIN",
    To:"PTY",
    Distance:1024.76,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"KIN",
    To:"PTY",
    Distance:1024.76,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KIN",
    To:"SDQ",
    Distance:753.978,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"KIN",
    To:"SXM",
    Distance:1446.36,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"KIN",
    To:"YYZ",
    Distance:2874.73,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"KIN",
    To:"YYZ",
    Distance:2874.73,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"KIN",
    To:"YYZ",
    Distance:2874.73,
    Airport:"Overland Airways"
}),
new Routes(
{
    From:"KIN",
    To:"YYZ",
    Distance:2874.73,
    Airport:"WestJet"
}),
new Routes(
{
    From:"KIR",
    To:"ALC",
    Distance:1694.42,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KIR",
    To:"DUB",
    Distance:258.555,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"KIR",
    To:"FAO",
    Distance:1690.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KIR",
    To:"HHN",
    Distance:1196.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KIR",
    To:"LTN",
    Distance:626.885,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KIR",
    To:"STN",
    Distance:667.884,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KIS",
    To:"EDL",
    Distance:78.691,
    Airport:"Fly540"
}),
new Routes(
{
    From:"KIS",
    To:"NBO",
    Distance:280.276,
    Airport:"Fly540"
}),
new Routes(
{
    From:"KIS",
    To:"NBO",
    Distance:280.276,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"KIT",
    To:"ATH",
    Distance:202.29,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"KIT",
    To:"ATH",
    Distance:202.29,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"KIT",
    To:"KLX",
    Distance:124.958,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"KIT",
    To:"ZTH",
    Distance:250.62,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"KIV",
    To:"AER",
    Distance:945.535,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"ATH",
    Distance:1079.73,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"BLQ",
    Distance:1391.79,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"BLQ",
    Distance:1391.79,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"KIV",
    To:"BVA",
    Distance:1996.91,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"CIA",
    Distance:1414.81,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KIV",
    To:"DME",
    Distance:1129.77,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"DME",
    Distance:1129.77,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KIV",
    To:"DUB",
    Distance:2579.26,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"DWC",
    Distance:3399.21,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"KIV",
    To:"FCO",
    Distance:1439.45,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"FCO",
    Distance:1439.45,
    Airport:"Carpatair"
}),
new Routes(
{
    From:"KIV",
    To:"FRA",
    Distance:1536.63,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"IST",
    Distance:661.767,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"IST",
    Distance:661.767,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KIV",
    To:"KBP",
    Distance:406.42,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"LCA",
    Distance:1396.36,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"LED",
    Distance:1434.01,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"LIS",
    Distance:3197.6,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"MUC",
    Distance:1291.5,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"KIV",
    To:"MXP",
    Distance:1554.97,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"MXP",
    Distance:1554.97,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"KIV",
    To:"OTP",
    Distance:341.685,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"OTP",
    Distance:341.685,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"KIV",
    To:"OTP",
    Distance:341.685,
    Airport:"Tarom"
}),
new Routes(
{
    From:"KIV",
    To:"RIX",
    Distance:1161.6,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"KIV",
    To:"SGC",
    Distance:3223.32,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"STN",
    Distance:2132.79,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"TSF",
    Distance:1291.37,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KIV",
    To:"VCE",
    Distance:1282.91,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"VCE",
    Distance:1282.91,
    Airport:"Carpatair"
}),
new Routes(
{
    From:"KIV",
    To:"VIE",
    Distance:936.489,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"KIV",
    To:"VRN",
    Distance:1396.82,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"KIV",
    To:"VRN",
    Distance:1396.82,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"KIX",
    To:"AMS",
    Distance:9240.56,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"BKK",
    Distance:4160.97,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"BKK",
    Distance:4160.97,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"KIX",
    To:"BKK",
    Distance:4160.97,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"BKK",
    Distance:4160.97,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"KIX",
    To:"CAN",
    Distance:2455.59,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"CAN",
    Distance:2455.59,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"CDG",
    Distance:9624.87,
    Airport:"Air France"
}),
new Routes(
{
    From:"KIX",
    To:"CGK",
    Distance:5417.4,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"CGK",
    Distance:5417.4,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"KIX",
    To:"CJU",
    Distance:813.22,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"CJU",
    Distance:813.22,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"KIX",
    To:"CNS",
    Distance:5813.95,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"CNS",
    Distance:5813.95,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"KIX",
    To:"CNS",
    Distance:5813.95,
    Airport:"Qantas"
}),
new Routes(
{
    From:"KIX",
    To:"CTS",
    Distance:1082.73,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"CTS",
    Distance:1082.73,
    Airport:"Genesis"
}),
new Routes(
{
    From:"KIX",
    To:"CTS",
    Distance:1082.73,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"CTS",
    Distance:1082.73,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"KIX",
    To:"DLC",
    Distance:1319.94,
    Airport:"Air China"
}),
new Routes(
{
    From:"KIX",
    To:"DLC",
    Distance:1319.94,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"DLC",
    Distance:1319.94,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"DOH",
    Distance:7909.23,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"DOH",
    Distance:7909.23,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"DOH",
    Distance:7909.23,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"KIX",
    To:"DPS",
    Distance:5246.71,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"DPS",
    Distance:5246.71,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"KIX",
    To:"DXB",
    Distance:7577.03,
    Airport:"Emirates"
}),
new Routes(
{
    From:"KIX",
    To:"DXB",
    Distance:7577.03,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"FCO",
    Distance:9738.94,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"KIX",
    To:"FOC",
    Distance:1767.55,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"FOC",
    Distance:1767.55,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"FRA",
    Distance:9262.51,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"FRA",
    Distance:9262.51,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"KIX",
    To:"FUK",
    Distance:451.751,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"FUK",
    Distance:451.751,
    Airport:"Genesis"
}),
new Routes(
{
    From:"KIX",
    To:"FUK",
    Distance:451.751,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"KIX",
    To:"GMP",
    Distance:835.627,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"GMP",
    Distance:835.627,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"GMP",
    Distance:835.627,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"GMP",
    Distance:835.627,
    Airport:"Jeju Air"
}),
new Routes(
{
    From:"KIX",
    To:"GMP",
    Distance:835.627,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"KIX",
    To:"GUM",
    Distance:2520.37,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"GUM",
    Distance:2520.37,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"KIX",
    To:"GUM",
    Distance:2520.37,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"KIX",
    To:"GUM",
    Distance:2520.37,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"HAN",
    Distance:3229.31,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"HAN",
    Distance:3229.31,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"HEL",
    Distance:7731.51,
    Airport:"Finnair"
}),
new Routes(
{
    From:"KIX",
    To:"HEL",
    Distance:7731.51,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"HGH",
    Distance:1466.21,
    Airport:"Air China"
}),
new Routes(
{
    From:"KIX",
    To:"HGH",
    Distance:1466.21,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"HKD",
    Distance:949.989,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"HKG",
    Distance:2476.06,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"KIX",
    To:"HKG",
    Distance:2476.06,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"HKG",
    Distance:2476.06,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"KIX",
    To:"HKG",
    Distance:2476.06,
    Airport:"Hong Kong Express Airways"
}),
new Routes(
{
    From:"KIX",
    To:"HKG",
    Distance:2476.06,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"HKG",
    Distance:2476.06,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"KIX",
    To:"HND",
    Distance:431.387,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"HND",
    Distance:431.387,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"HND",
    Distance:431.387,
    Airport:"Star Flyer"
}),
new Routes(
{
    From:"KIX",
    To:"HNL",
    Distance:6613.83,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"HNL",
    Distance:6613.83,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"KIX",
    To:"HNL",
    Distance:6613.83,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"HNL",
    Distance:6613.83,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"HRB",
    Distance:1458.74,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"ICN",
    Distance:859.992,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"ICN",
    Distance:859.992,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"ICN",
    Distance:859.992,
    Airport:"Eastar Jet"
}),
new Routes(
{
    From:"KIX",
    To:"ICN",
    Distance:859.992,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"ICN",
    Distance:859.992,
    Airport:"Jeju Air"
}),
new Routes(
{
    From:"KIX",
    To:"ICN",
    Distance:859.992,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"KIX",
    To:"ICN",
    Distance:859.992,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"KIX",
    To:"ISG",
    Distance:1549.13,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"ISG",
    Distance:1549.13,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"KIX",
    To:"ISG",
    Distance:1549.13,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"KIX",
    To:"IST",
    Distance:8759.19,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"IST",
    Distance:8759.19,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"JFK",
    Distance:11153.9,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"KHH",
    Distance:1959.48,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"KHH",
    Distance:1959.48,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"KIX",
    To:"KOJ",
    Distance:512.913,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"KIX",
    To:"KUL",
    Distance:4943.27,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KIX",
    To:"KUL",
    Distance:4943.27,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"KUL",
    Distance:4943.27,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"MFM",
    Distance:2513.21,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"KIX",
    To:"MFM",
    Distance:2513.21,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"MNL",
    Distance:2635.49,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"KIX",
    To:"MNL",
    Distance:2635.49,
    Airport:"Jetstar Asia Airways"
}),
new Routes(
{
    From:"KIX",
    To:"MNL",
    Distance:2635.49,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"MYJ",
    Distance:243.736,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"KIX",
    To:"NGS",
    Distance:521.253,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"KIX",
    To:"NKG",
    Distance:1553.45,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"NKG",
    Distance:1553.45,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"NOU",
    Distance:7078.83,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"KIX",
    To:"NRT",
    Distance:490.556,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"NRT",
    Distance:490.556,
    Airport:"Genesis"
}),
new Routes(
{
    From:"KIX",
    To:"NRT",
    Distance:490.556,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"KIX",
    To:"NRT",
    Distance:490.556,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"KIX",
    To:"OKA",
    Distance:1170.13,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"OKA",
    Distance:1170.13,
    Airport:"Genesis"
}),
new Routes(
{
    From:"KIX",
    To:"OKA",
    Distance:1170.13,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"KIX",
    To:"OKA",
    Distance:1170.13,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"KIX",
    To:"OOL",
    Distance:7220.79,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"OOL",
    Distance:7220.79,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"KIX",
    To:"OOL",
    Distance:7220.79,
    Airport:"Qantas"
}),
new Routes(
{
    From:"KIX",
    To:"PEK",
    Distance:1762.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"KIX",
    To:"PEK",
    Distance:1762.48,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"PUS",
    Distance:581.554,
    Airport:"Air Busan"
}),
new Routes(
{
    From:"KIX",
    To:"PUS",
    Distance:581.554,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"PUS",
    Distance:581.554,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"PUS",
    Distance:581.554,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"KIX",
    To:"PUS",
    Distance:581.554,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"KIX",
    To:"PVG",
    Distance:1307.29,
    Airport:"Air China"
}),
new Routes(
{
    From:"KIX",
    To:"PVG",
    Distance:1307.29,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"PVG",
    Distance:1307.29,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"PVG",
    Distance:1307.29,
    Airport:"China SSS"
}),
new Routes(
{
    From:"KIX",
    To:"PVG",
    Distance:1307.29,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"PVG",
    Distance:1307.29,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"PVG",
    Distance:1307.29,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"RMQ",
    Distance:1809.64,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"SDJ",
    Distance:654.169,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"KIX",
    To:"SFO",
    Distance:8691.56,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"SFO",
    Distance:8691.56,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"SGN",
    Distance:3910.62,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"SGN",
    Distance:3910.62,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"SHE",
    Distance:1300.54,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"SHE",
    Distance:1300.54,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"SIN",
    Distance:4902.68,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"SIN",
    Distance:4902.68,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"SPN",
    Distance:2390.74,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"TAO",
    Distance:1362.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"KIX",
    To:"TAO",
    Distance:1362.48,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"TAO",
    Distance:1362.48,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"TAO",
    Distance:1362.48,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"TAO",
    Distance:1362.48,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"TNA",
    Distance:1648.59,
    Airport:"Air China"
}),
new Routes(
{
    From:"KIX",
    To:"TNA",
    Distance:1648.59,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"TNA",
    Distance:1648.59,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"TPE",
    Distance:1703.42,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"TPE",
    Distance:1703.42,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"KIX",
    To:"TPE",
    Distance:1703.42,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"TPE",
    Distance:1703.42,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"KIX",
    To:"TPE",
    Distance:1703.42,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"TPE",
    Distance:1703.42,
    Airport:"Jetstar Asia Airways"
}),
new Routes(
{
    From:"KIX",
    To:"TPE",
    Distance:1703.42,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"KIX",
    To:"TPE",
    Distance:1703.42,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"KIX",
    To:"WUX",
    Distance:1418.85,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KIX",
    To:"WUX",
    Distance:1418.85,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"YNT",
    Distance:1290.71,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KIX",
    To:"YNT",
    Distance:1290.71,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"AER",
    Distance:3913.13,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"DME",
    Distance:3322.02,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"DME",
    Distance:3322.02,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"DXB",
    Distance:4547.72,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"DYU",
    Distance:2623.05,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"DYU",
    Distance:2623.05,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"KJA",
    To:"DYU",
    Distance:2623.05,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"EVN",
    Distance:3883.51,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"FRU",
    Distance:1939.81,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"KJA",
    To:"FRU",
    Distance:1939.81,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"GYD",
    Distance:3513.55,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"IAA",
    Distance:1287.57,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"IKT",
    Distance:886.592,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"KJA",
    To:"IKT",
    Distance:886.592,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"KHV",
    Distance:2969.54,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"KHV",
    Distance:2969.54,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"KRR",
    Distance:3850.55,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"LBD",
    Distance:2427.6,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"LBD",
    Distance:2427.6,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"KJA",
    To:"LBD",
    Distance:2427.6,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"LED",
    Distance:3552.15,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"LED",
    Distance:3552.15,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"MJZ",
    Distance:1401.88,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"KJA",
    To:"MJZ",
    Distance:1401.88,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"NMA",
    Distance:2267.22,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"NSK",
    Distance:1482.14,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"NZH",
    Distance:1810.07,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"KJA",
    To:"OSS",
    Distance:2243.93,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"KJA",
    To:"OVB",
    Distance:630.158,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"KJA",
    To:"OVB",
    Distance:630.158,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"PEK",
    Distance:2506.05,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"PEK",
    Distance:2506.05,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"PEK",
    Distance:2506.05,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"SKD",
    Distance:2610.31,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"SVO",
    Distance:3324.55,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"SVX",
    Distance:1929.41,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"KJA",
    To:"SVX",
    Distance:1929.41,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"TAS",
    Distance:2354.94,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"TAS",
    Distance:2354.94,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"KJA",
    To:"TOF",
    Distance:448.899,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"UUD",
    Distance:1089.2,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"VKO",
    Distance:3350.58,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"KJA",
    To:"YKS",
    Distance:2191.65,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KKA",
    To:"ELI",
    Distance:64.0289,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KKA",
    To:"OME",
    Distance:209.139,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"KKA",
    To:"SKK",
    Distance:63.2828,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"KKA",
    To:"SKK",
    Distance:63.2828,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KKA",
    To:"UNK",
    Distance:118.116,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KKB",
    To:"SYB",
    Distance:8.05096,
    Airport:"Air Salone"
}),
new Routes(
{
    From:"KKC",
    To:"BKK",
    Distance:379.117,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"KKC",
    To:"DMK",
    Distance:367.714,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"KKE",
    To:"AKL",
    Distance:209.527,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"KKH",
    To:"BET",
    Distance:107.611,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KKH",
    To:"KWK",
    Distance:18.5721,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"KKH",
    To:"KWK",
    Distance:18.5721,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KKJ",
    To:"HND",
    Distance:821.353,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KKJ",
    To:"HND",
    Distance:821.353,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KKJ",
    To:"HND",
    Distance:821.353,
    Airport:"Star Flyer"
}),
new Routes(
{
    From:"KKN",
    To:"ALF",
    Distance:251.143,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"KKN",
    To:"LKL",
    Distance:191.725,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"KKN",
    To:"OSL",
    Distance:1368.66,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"KKN",
    To:"OSL",
    Distance:1368.66,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"KKN",
    To:"TOS",
    Distance:422.653,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"KKN",
    To:"VAW",
    Distance:82.5718,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"KKN",
    To:"VDS",
    Distance:37.7627,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"KKR",
    To:"PPT",
    Distance:358.779,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"KLG",
    To:"ANI",
    Distance:42.5586,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KLG",
    To:"BET",
    Distance:116.289,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KLG",
    To:"RSH",
    Distance:58.0735,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KLL",
    To:"IGG",
    Distance:58.6232,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"KLN",
    To:"KYK",
    Distance:28.4787,
    Airport:"Air Salone"
}),
new Routes(
{
    From:"KLO",
    To:"CEB",
    Distance:232.143,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"KLO",
    To:"CRK",
    Distance:436.554,
    Airport:"South East Asian Airlines"
}),
new Routes(
{
    From:"KLO",
    To:"ICN",
    Distance:2896.31,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"KLO",
    To:"ICN",
    Distance:2896.31,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"KLO",
    To:"ICN",
    Distance:2896.31,
    Airport:"Zest Air"
}),
new Routes(
{
    From:"KLO",
    To:"KUL",
    Distance:2484.44,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KLO",
    To:"MNL",
    Distance:347.21,
    Airport:"Air Philippines"
}),
new Routes(
{
    From:"KLO",
    To:"MNL",
    Distance:347.21,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"KLO",
    To:"MNL",
    Distance:347.21,
    Airport:"LSM Airlines"
}),
new Routes(
{
    From:"KLO",
    To:"MNL",
    Distance:347.21,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"KLO",
    To:"MNL",
    Distance:347.21,
    Airport:"South East Asian Airlines"
}),
new Routes(
{
    From:"KLO",
    To:"MNL",
    Distance:347.21,
    Airport:"Zest Air"
}),
new Routes(
{
    From:"KLO",
    To:"PUS",
    Distance:2695.64,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"KLO",
    To:"PUS",
    Distance:2695.64,
    Airport:"Zest Air"
}),
new Routes(
{
    From:"KLO",
    To:"SIN",
    Distance:2330.48,
    Airport:"South East Asian Airlines"
}),
new Routes(
{
    From:"KLO",
    To:"SIN",
    Distance:2330.48,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"KLO",
    To:"TPE",
    Distance:1494.67,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"KLO",
    To:"TPE",
    Distance:1494.67,
    Airport:"Zest Air"
}),
new Routes(
{
    From:"KLR",
    To:"ARN",
    Distance:343.413,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"KLR",
    To:"BMA",
    Distance:312.315,
    Airport:"Golden Air"
}),
new Routes(
{
    From:"KLR",
    To:"BMA",
    Distance:312.315,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"KLU",
    To:"CGN",
    Distance:705.647,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"KLU",
    To:"CGN",
    Distance:705.647,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"KLU",
    To:"HAM",
    Distance:836.178,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"KLU",
    To:"HAM",
    Distance:836.178,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"KLU",
    To:"TXL",
    Distance:662.277,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"KLU",
    To:"TXL",
    Distance:662.277,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"KLU",
    To:"VIE",
    Distance:234.252,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"KLV",
    To:"LED",
    Distance:1528.48,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KLV",
    To:"LED",
    Distance:1528.48,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"KLV",
    To:"SVO",
    Distance:1745.91,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KLV",
    To:"SVO",
    Distance:1745.91,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"KLV",
    To:"SVX",
    Distance:3181.75,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KLW",
    To:"CGA",
    Distance:12.0281,
    Airport:"Avient Aviation"
}),
new Routes(
{
    From:"KLW",
    To:"KTN",
    Distance:89.4002,
    Airport:"Interstate Airline"
}),
new Routes(
{
    From:"KLX",
    To:"AMS",
    Distance:2164.15,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"KLX",
    To:"ARN",
    Distance:2528.3,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"KLX",
    To:"ARN",
    Distance:2528.3,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"KLX",
    To:"DUS",
    Distance:1986.88,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"KLX",
    To:"LGW",
    Distance:2348.91,
    Airport:"easyJet"
}),
new Routes(
{
    From:"KLX",
    To:"MUC",
    Distance:1505.23,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"KLX",
    To:"MUC",
    Distance:1505.23,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"KLX",
    To:"SKG",
    Distance:392.42,
    Airport:"Cielos Airlines"
}),
new Routes(
{
    From:"KLX",
    To:"VIE",
    Distance:1305.66,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"KLX",
    To:"VIE",
    Distance:1305.66,
    Airport:"Niki"
}),
new Routes(
{
    From:"KME",
    To:"KGL",
    Distance:147.432,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"KMG",
    To:"BFJ",
    Distance:367.274,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"BHY",
    Distance:771.292,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"BHY",
    Distance:771.292,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"BKK",
    Distance:1275,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"BKK",
    Distance:1275,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"KMG",
    To:"BSD",
    Distance:360.284,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"BSD",
    Distance:360.284,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CAN",
    Distance:1084.98,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"CAN",
    Distance:1084.98,
    Airport:"Air France"
}),
new Routes(
{
    From:"KMG",
    To:"CAN",
    Distance:1084.98,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CAN",
    Distance:1084.98,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CAN",
    Distance:1084.98,
    Airport:"KSY"
}),
new Routes(
{
    From:"KMG",
    To:"CAN",
    Distance:1084.98,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CCU",
    Distance:1476.56,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CEI",
    Distance:632.759,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CGD",
    Distance:983.505,
    Airport:"China SSS"
}),
new Routes(
{
    From:"KMG",
    To:"CGO",
    Distance:1504.59,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"CGO",
    Distance:1504.59,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"CGO",
    Distance:1504.59,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CGO",
    Distance:1504.59,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CGO",
    Distance:1504.59,
    Airport:"KSY"
}),
new Routes(
{
    From:"KMG",
    To:"CGO",
    Distance:1504.59,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CGO",
    Distance:1504.59,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CKG",
    Distance:651.386,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"CKG",
    Distance:651.386,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"CKG",
    Distance:651.386,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CKG",
    Distance:651.386,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CKG",
    Distance:651.386,
    Airport:"KSY"
}),
new Routes(
{
    From:"KMG",
    To:"CKG",
    Distance:651.386,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CKG",
    Distance:651.386,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CKG",
    Distance:651.386,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CKG",
    Distance:651.386,
    Airport:"West Air China"
}),
new Routes(
{
    From:"KMG",
    To:"CMB",
    Distance:3133.85,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CNX",
    Distance:794.467,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CSX",
    Distance:1100.16,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"CSX",
    Distance:1100.16,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"CSX",
    Distance:1100.16,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CSX",
    Distance:1100.16,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CSX",
    Distance:1100.16,
    Airport:"KSY"
}),
new Routes(
{
    From:"KMG",
    To:"CSX",
    Distance:1100.16,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"KMG",
    To:"CSX",
    Distance:1100.16,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CSX",
    Distance:1100.16,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CTU",
    Distance:632.32,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"CTU",
    Distance:632.32,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"CTU",
    Distance:632.32,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CTU",
    Distance:632.32,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CTU",
    Distance:632.32,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"KMG",
    To:"CTU",
    Distance:632.32,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CTU",
    Distance:632.32,
    Airport:"KSY"
}),
new Routes(
{
    From:"KMG",
    To:"CTU",
    Distance:632.32,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CTU",
    Distance:632.32,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"CZX",
    Distance:1826.81,
    Airport:"KSY"
}),
new Routes(
{
    From:"KMG",
    To:"CZX",
    Distance:1826.81,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"DAC",
    Distance:1256.06,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"DAD",
    Distance:1145.39,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"DAX",
    Distance:842.008,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"DAX",
    Distance:842.008,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"DIG",
    Distance:436.196,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"DIG",
    Distance:436.196,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"DIG",
    Distance:436.196,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"DLC",
    Distance:2348.39,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"DLU",
    Distance:254.364,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"DLU",
    Distance:254.364,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"DLU",
    Distance:254.364,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"DMK",
    Distance:1252.13,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"KMG",
    To:"DSN",
    Distance:1786.49,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"DXB",
    Distance:4744.12,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"FOC",
    Distance:1700.68,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"FOC",
    Distance:1700.68,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"FOC",
    Distance:1700.68,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"HAK",
    Distance:971.63,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"HAK",
    Distance:971.63,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"HAK",
    Distance:971.63,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"HAK",
    Distance:971.63,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"HFE",
    Distance:1609.36,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"HFE",
    Distance:1609.36,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"HFE",
    Distance:1609.36,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"HFE",
    Distance:1609.36,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"KMG",
    To:"HGH",
    Distance:1835.34,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"HGH",
    Distance:1835.34,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"HGH",
    Distance:1835.34,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"HGH",
    Distance:1835.34,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"HGH",
    Distance:1835.34,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KMG",
    To:"HGH",
    Distance:1835.34,
    Airport:"KSY"
}),
new Routes(
{
    From:"KMG",
    To:"HGH",
    Distance:1835.34,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"HGH",
    Distance:1835.34,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"HKG",
    Distance:1175.87,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"KMG",
    To:"HKG",
    Distance:1175.87,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"HKG",
    Distance:1175.87,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"KMG",
    To:"HKG",
    Distance:1175.87,
    Airport:"Hong Kong Express Airways"
}),
new Routes(
{
    From:"KMG",
    To:"HKT",
    Distance:1934.74,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"ICN",
    Distance:2635.05,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"ICN",
    Distance:2635.05,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"KMG",
    To:"INC",
    Distance:1531.12,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"JHG",
    Distance:391.886,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"JHG",
    Distance:391.886,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"JHG",
    Distance:391.886,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"JHG",
    Distance:391.886,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"KMG",
    To:"JHG",
    Distance:391.886,
    Airport:"KSY"
}),
new Routes(
{
    From:"KMG",
    To:"JHG",
    Distance:391.886,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"KMG",
    To:"JHG",
    Distance:391.886,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"JHG",
    Distance:391.886,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"JHG",
    Distance:391.886,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"JHG",
    Distance:391.886,
    Airport:"West Air China"
}),
new Routes(
{
    From:"KMG",
    To:"JIQ",
    Distance:783.887,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"JIQ",
    Distance:783.887,
    Airport:"China SSS"
}),
new Routes(
{
    From:"KMG",
    To:"JNG",
    Distance:1757.19,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"KHH",
    Distance:1810.14,
    Airport:"Uni Air"
}),
new Routes(
{
    From:"KMG",
    To:"KHN",
    Distance:1372.57,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"KHN",
    Distance:1372.57,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"KHN",
    Distance:1372.57,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"KHN",
    Distance:1372.57,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"KOW",
    Distance:1225.25,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"KTM",
    Distance:1756.63,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"KUL",
    Distance:2476.21,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KMG",
    To:"KUL",
    Distance:2476.21,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"KWE",
    Distance:441.13,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"KWE",
    Distance:441.13,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"KWE",
    Distance:441.13,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"KWE",
    Distance:441.13,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"KMG",
    To:"KWE",
    Distance:441.13,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"KWE",
    Distance:441.13,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"KWE",
    Distance:441.13,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"KWL",
    Distance:734.941,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"KWL",
    Distance:734.941,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"KWL",
    Distance:734.941,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"LHW",
    Distance:1239.81,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"LHW",
    Distance:1239.81,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"LHW",
    Distance:1239.81,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"LJG",
    Distance:327.42,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"LJG",
    Distance:327.42,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"LJG",
    Distance:327.42,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"LJG",
    Distance:327.42,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KMG",
    To:"LJG",
    Distance:327.42,
    Airport:"KSY"
}),
new Routes(
{
    From:"KMG",
    To:"LJG",
    Distance:327.42,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"LLF",
    Distance:901.279,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"LNJ",
    Distance:308.645,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"LNJ",
    Distance:308.645,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"LUM",
    Distance:430.527,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"LUM",
    Distance:430.527,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"LUM",
    Distance:430.527,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"LXA",
    Distance:1263.95,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"LYA",
    Distance:1393.11,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"LZH",
    Distance:677.645,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"KMG",
    To:"LZO",
    Distance:503.149,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"MDL",
    Distance:781.427,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"MFM",
    Distance:1149.48,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"MIG",
    Distance:741.853,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"MIG",
    Distance:741.853,
    Airport:"China SSS"
}),
new Routes(
{
    From:"KMG",
    To:"NAO",
    Distance:718.803,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"NGB",
    Distance:1921.69,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"NGB",
    Distance:1921.69,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"NKG",
    Distance:1743.94,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"NKG",
    Distance:1743.94,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"NKG",
    Distance:1743.94,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"NKG",
    Distance:1743.94,
    Airport:"KSY"
}),
new Routes(
{
    From:"KMG",
    To:"NKG",
    Distance:1743.94,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"KMG",
    To:"NKG",
    Distance:1743.94,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"NKG",
    Distance:1743.94,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"NKG",
    Distance:1743.94,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"NNG",
    Distance:612.567,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KMG",
    To:"NNG",
    Distance:612.567,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"NNG",
    Distance:612.567,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"NNG",
    Distance:612.567,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"NNG",
    Distance:612.567,
    Airport:"KSY"
}),
new Routes(
{
    From:"KMG",
    To:"NNG",
    Distance:612.567,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"NYT",
    Distance:924.461,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"PEK",
    Distance:2115.19,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"PEK",
    Distance:2115.19,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"PEK",
    Distance:2115.19,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"PEK",
    Distance:2115.19,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"PEK",
    Distance:2115.19,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"PEK",
    Distance:2115.19,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"PVG",
    Distance:1988.04,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"PVG",
    Distance:1988.04,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"PVG",
    Distance:1988.04,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"PVG",
    Distance:1988.04,
    Airport:"China SSS"
}),
new Routes(
{
    From:"KMG",
    To:"PVG",
    Distance:1988.04,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"PVG",
    Distance:1988.04,
    Airport:"KSY"
}),
new Routes(
{
    From:"KMG",
    To:"PVG",
    Distance:1988.04,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"REP",
    Distance:1292.69,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"RGN",
    Distance:1130.59,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"RGN",
    Distance:1130.59,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"SHA",
    Distance:1946.75,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"SHA",
    Distance:1946.75,
    Airport:"China SSS"
}),
new Routes(
{
    From:"KMG",
    To:"SHA",
    Distance:1946.75,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"SHA",
    Distance:1946.75,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"SHA",
    Distance:1946.75,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"SIN",
    Distance:2632.32,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"KMG",
    To:"SIN",
    Distance:2632.32,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"SJW",
    Distance:1857.51,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"SJW",
    Distance:1857.51,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"SJW",
    Distance:1857.51,
    Airport:"China SSS"
}),
new Routes(
{
    From:"KMG",
    To:"SJW",
    Distance:1857.51,
    Airport:"China United"
}),
new Routes(
{
    From:"KMG",
    To:"SYM",
    Distance:304.469,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"SYM",
    Distance:304.469,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"SYM",
    Distance:304.469,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"SYX",
    Distance:1013.64,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"SYX",
    Distance:1013.64,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"SYX",
    Distance:1013.64,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"SZX",
    Distance:1155.42,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"SZX",
    Distance:1155.42,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"SZX",
    Distance:1155.42,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"SZX",
    Distance:1155.42,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"SZX",
    Distance:1155.42,
    Airport:"KSY"
}),
new Routes(
{
    From:"KMG",
    To:"SZX",
    Distance:1155.42,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"TAO",
    Distance:2095.83,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"TAO",
    Distance:2095.83,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"TAO",
    Distance:2095.83,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"TCZ",
    Distance:429.448,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"TCZ",
    Distance:429.448,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"TNA",
    Distance:1905.12,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"TNA",
    Distance:1905.12,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"TNA",
    Distance:1905.12,
    Airport:"KSY"
}),
new Routes(
{
    From:"KMG",
    To:"TNA",
    Distance:1905.12,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"TNA",
    Distance:1905.12,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"TNA",
    Distance:1905.12,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"TPE",
    Distance:1861.32,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"TPE",
    Distance:1861.32,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"TSN",
    Distance:2083.07,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"TSN",
    Distance:2083.07,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"TSN",
    Distance:2083.07,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"TYN",
    Distance:1698.19,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"TYN",
    Distance:1698.19,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"TYN",
    Distance:1698.19,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"TYN",
    Distance:1698.19,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"UYN",
    Distance:1616.42,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"KMG",
    To:"VTE",
    Distance:779.037,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"VTE",
    Distance:779.037,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"WNH",
    Distance:235.464,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"WNH",
    Distance:235.464,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"WNZ",
    Distance:1829.95,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"WNZ",
    Distance:1829.95,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"WNZ",
    Distance:1829.95,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"WUH",
    Distance:1296.67,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"WUH",
    Distance:1296.67,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"WUH",
    Distance:1296.67,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"WUH",
    Distance:1296.67,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"WUH",
    Distance:1296.67,
    Airport:"KSY"
}),
new Routes(
{
    From:"KMG",
    To:"WUH",
    Distance:1296.67,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"WUH",
    Distance:1296.67,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"WUH",
    Distance:1296.67,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"WXN",
    Distance:855.125,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"XIC",
    Distance:337.833,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"XIY",
    Distance:1200.13,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KMG",
    To:"XIY",
    Distance:1200.13,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"XIY",
    Distance:1200.13,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"XIY",
    Distance:1200.13,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"XIY",
    Distance:1200.13,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"XIY",
    Distance:1200.13,
    Airport:"KSY"
}),
new Routes(
{
    From:"KMG",
    To:"XIY",
    Distance:1200.13,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"XIY",
    Distance:1200.13,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"XMN",
    Distance:1553.25,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"XMN",
    Distance:1553.25,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"XMN",
    Distance:1553.25,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"XMN",
    Distance:1553.25,
    Airport:"KSY"
}),
new Routes(
{
    From:"KMG",
    To:"XMN",
    Distance:1553.25,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"XMN",
    Distance:1553.25,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"XMN",
    Distance:1553.25,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"XMN",
    Distance:1553.25,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"XNN",
    Distance:1284.38,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"XUZ",
    Distance:1720.12,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"YBP",
    Distance:459.519,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"YCU",
    Distance:1367.59,
    Airport:"Air China"
}),
new Routes(
{
    From:"KMG",
    To:"YCU",
    Distance:1367.59,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"YIC",
    Distance:1192.92,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"YIH",
    Distance:1062.42,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KMG",
    To:"YIW",
    Distance:1775.42,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"ZAT",
    Distance:278.387,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"ZAT",
    Distance:278.387,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMG",
    To:"ZHA",
    Distance:884.592,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KMG",
    To:"ZUH",
    Distance:1133.5,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KMI",
    To:"FUK",
    Distance:211.689,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KMI",
    To:"FUK",
    Distance:211.689,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"KMI",
    To:"HND",
    Distance:871.762,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KMI",
    To:"HND",
    Distance:871.762,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KMI",
    To:"ICN",
    Distance:771.414,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KMI",
    To:"ICN",
    Distance:771.414,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"KMI",
    To:"ITM",
    Distance:491.811,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KMI",
    To:"ITM",
    Distance:491.811,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KMI",
    To:"NGO",
    Distance:597.638,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KMI",
    To:"OKA",
    Distance:731.813,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KMI",
    To:"TPE",
    Distance:1251.33,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KMJ",
    To:"HND",
    Distance:874.161,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KMJ",
    To:"HND",
    Distance:874.161,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KMJ",
    To:"ICN",
    Distance:652.196,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KMJ",
    To:"ICN",
    Distance:652.196,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"KMJ",
    To:"ITM",
    Distance:475.558,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KMJ",
    To:"ITM",
    Distance:475.558,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KMJ",
    To:"NGO",
    Distance:593.559,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KMJ",
    To:"NKM",
    Distance:620.267,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"KMJ",
    To:"OKA",
    Distance:800.997,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KMQ",
    To:"CTS",
    Distance:841.336,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KMQ",
    To:"CTS",
    Distance:841.336,
    Airport:"Hokkaido International Airlines"
}),
new Routes(
{
    From:"KMQ",
    To:"FUK",
    Distance:625.838,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KMQ",
    To:"FUK",
    Distance:625.838,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"KMQ",
    To:"HND",
    Distance:317.647,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KMQ",
    To:"HND",
    Distance:317.647,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KMQ",
    To:"ICN",
    Distance:892.524,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KMQ",
    To:"ICN",
    Distance:892.524,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"KMQ",
    To:"NRT",
    Distance:364.424,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KMQ",
    To:"NRT",
    Distance:364.424,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"KMQ",
    To:"OKA",
    Distance:1405.26,
    Airport:"Japan Transocean Air"
}),
new Routes(
{
    From:"KMQ",
    To:"PVG",
    Distance:1468.51,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KMQ",
    To:"PVG",
    Distance:1468.51,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KMQ",
    To:"SDJ",
    Distance:443.73,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KMQ",
    To:"SDJ",
    Distance:443.73,
    Airport:"Ibex Airlines"
}),
new Routes(
{
    From:"KMQ",
    To:"TPE",
    Distance:1915.55,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KMQ",
    To:"TPE",
    Distance:1915.55,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"KMS",
    To:"ACC",
    Distance:200.002,
    Airport:"Asian Wings Airways"
}),
new Routes(
{
    From:"KMS",
    To:"ACC",
    Distance:200.002,
    Airport:"Skyservice Airlines"
}),
new Routes(
{
    From:"KMS",
    To:"ACC",
    Distance:200.002,
    Airport:"Starbow Airlines"
}),
new Routes(
{
    From:"KND",
    To:"BKY",
    Distance:328.484,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"KND",
    To:"FIH",
    Distance:1173.28,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"KNG",
    To:"AMQ",
    Distance:622.163,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"KNG",
    To:"FKQ",
    Distance:177.863,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"KNG",
    To:"NBX",
    Distance:202.219,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"KNH",
    To:"KHH",
    Distance:289.063,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"KNH",
    To:"MZG",
    Distance:160.462,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"KNH",
    To:"RMQ",
    Distance:229.808,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"KNH",
    To:"TSA",
    Distance:330.259,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"KNH",
    To:"TSA",
    Distance:330.259,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"KNQ",
    To:"GEA",
    Distance:215.635,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"KNS",
    To:"BWT",
    Distance:200.345,
    Airport:"Sharp Airlines"
}),
new Routes(
{
    From:"KNS",
    To:"MEL",
    Distance:258.98,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"KNU",
    To:"DEL",
    Distance:399.123,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"KNX",
    To:"BME",
    Distance:728.255,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"KNX",
    To:"BME",
    Distance:728.255,
    Airport:"Qantas"
}),
new Routes(
{
    From:"KNX",
    To:"DRW",
    Distance:441.48,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"KNX",
    To:"DRW",
    Distance:441.48,
    Airport:"Qantas"
}),
new Routes(
{
    From:"KNX",
    To:"PER",
    Distance:2211.23,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"KNX",
    To:"PER",
    Distance:2211.23,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"KNX",
    To:"PER",
    Distance:2211.23,
    Airport:"Qantas"
}),
new Routes(
{
    From:"KNX",
    To:"PER",
    Distance:2211.23,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"KOA",
    To:"DEN",
    Distance:5351.46,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"KOA",
    To:"HNL",
    Distance:262.783,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"KOA",
    To:"HNL",
    Distance:262.783,
    Airport:"US Airways"
}),
new Routes(
{
    From:"KOA",
    To:"JHM",
    Distance:151.02,
    Airport:"Maya Island Air"
}),
new Routes(
{
    From:"KOA",
    To:"LAX",
    Distance:4025.63,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"KOA",
    To:"LAX",
    Distance:4025.63,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KOA",
    To:"LAX",
    Distance:4025.63,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"KOA",
    To:"LAX",
    Distance:4025.63,
    Airport:"US Airways"
}),
new Routes(
{
    From:"KOA",
    To:"LAX",
    Distance:4025.63,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"KOA",
    To:"OAK",
    Distance:3824.86,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"KOA",
    To:"OAK",
    Distance:3824.86,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KOA",
    To:"OGG",
    Distance:135.071,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"KOA",
    To:"OGG",
    Distance:135.071,
    Airport:"Maya Island Air"
}),
new Routes(
{
    From:"KOA",
    To:"PHX",
    Distance:4596.93,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KOA",
    To:"PHX",
    Distance:4596.93,
    Airport:"US Airways"
}),
new Routes(
{
    From:"KOA",
    To:"SEA",
    Distance:4326.7,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"KOA",
    To:"SFO",
    Distance:3808.02,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"KOA",
    To:"SJC",
    Distance:3834.12,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"KOA",
    To:"SJC",
    Distance:3834.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KOA",
    To:"YVR",
    Distance:4385.26,
    Airport:"WestJet"
}),
new Routes(
{
    From:"KOC",
    To:"BMY",
    Distance:110.832,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"KOC",
    To:"GEA",
    Distance:298.193,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"KOE",
    To:"DPS",
    Distance:946.024,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"KOE",
    To:"DPS",
    Distance:946.024,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"KOE",
    To:"ENE",
    Distance:265.008,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"KOE",
    To:"ENE",
    Distance:265.008,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"KOE",
    To:"LOP",
    Distance:826.103,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"KOE",
    To:"MOF",
    Distance:231.802,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"KOE",
    To:"SUB",
    Distance:1235.57,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"KOE",
    To:"SUB",
    Distance:1235.57,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"KOE",
    To:"SUB",
    Distance:1235.57,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"KOE",
    To:"TMC",
    Distance:492.386,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"KOI",
    To:"ABZ",
    Distance:199.615,
    Airport:"Flybe"
}),
new Routes(
{
    From:"KOI",
    To:"EDI",
    Distance:335.615,
    Airport:"Flybe"
}),
new Routes(
{
    From:"KOI",
    To:"EOI",
    Distance:26.9777,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"KOI",
    To:"GLA",
    Distance:355.097,
    Airport:"Flybe"
}),
new Routes(
{
    From:"KOI",
    To:"INV",
    Distance:170.976,
    Airport:"Flybe"
}),
new Routes(
{
    From:"KOI",
    To:"LSI",
    Distance:137.034,
    Airport:"Flybe"
}),
new Routes(
{
    From:"KOI",
    To:"NDY",
    Distance:37.5423,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"KOI",
    To:"NRL",
    Distance:52.8675,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"KOI",
    To:"PPW",
    Distance:43.803,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"KOI",
    To:"SOY",
    Distance:26.6375,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"KOI",
    To:"WRY",
    Distance:43.7218,
    Airport:"Linhas A"
}),
new Routes(
{
    From:"KOJ",
    To:"FSZ",
    Distance:769.586,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"KOJ",
    To:"HKG",
    Distance:1966.82,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"KOJ",
    To:"HND",
    Distance:935.737,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KOJ",
    To:"HND",
    Distance:935.737,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KOJ",
    To:"HND",
    Distance:935.737,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"KOJ",
    To:"ICN",
    Distance:741.014,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KOJ",
    To:"ICN",
    Distance:741.014,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"KOJ",
    To:"ITM",
    Distance:549.709,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KOJ",
    To:"ITM",
    Distance:549.709,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KOJ",
    To:"KIX",
    Distance:512.913,
    Airport:"Peach Aviation"
}),
new Routes(
{
    From:"KOJ",
    To:"NGO",
    Distance:659.416,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KOJ",
    To:"NGO",
    Distance:659.416,
    Airport:"Genesis"
}),
new Routes(
{
    From:"KOJ",
    To:"NRT",
    Distance:995.423,
    Airport:"Genesis"
}),
new Routes(
{
    From:"KOJ",
    To:"OKA",
    Distance:691.377,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KOJ",
    To:"PVG",
    Distance:848.326,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KOJ",
    To:"PVG",
    Distance:848.326,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KOJ",
    To:"TPE",
    Distance:1190.52,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KOJ",
    To:"UKB",
    Distance:523.886,
    Airport:"Skymark Airlines"
}),
new Routes(
{
    From:"KOK",
    To:"HEL",
    Distance:390.192,
    Airport:"Finnair"
}),
new Routes(
{
    From:"KOK",
    To:"HEL",
    Distance:390.192,
    Airport:"Flybe"
}),
new Routes(
{
    From:"KOK",
    To:"POR",
    Distance:260.466,
    Airport:"NextJet"
}),
new Routes(
{
    From:"KOP",
    To:"DMK",
    Distance:579.382,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"KOP",
    To:"DMK",
    Distance:579.382,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"KOS",
    To:"REP",
    Distance:315.372,
    Airport:"Cambodia Angkor Air (K6)"
}),
new Routes(
{
    From:"KOT",
    To:"EMK",
    Distance:55.6103,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KOT",
    To:"KSM",
    Distance:108.512,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KOT",
    To:"WBB",
    Distance:82.7553,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KOV",
    To:"ALA",
    Distance:1236.82,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"KOV",
    To:"DME",
    Distance:2047.63,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"KOW",
    To:"CAN",
    Distance:315.916,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KOW",
    To:"CTU",
    Distance:1196.59,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KOW",
    To:"HGH",
    Distance:730.259,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KOW",
    To:"KHN",
    Distance:351.745,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KOW",
    To:"KHN",
    Distance:351.745,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KOW",
    To:"KMG",
    Distance:1225.25,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KOW",
    To:"PEK",
    Distance:1592.58,
    Airport:"Air China"
}),
new Routes(
{
    From:"KOW",
    To:"PEK",
    Distance:1592.58,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KOW",
    To:"PEK",
    Distance:1592.58,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KOW",
    To:"SHA",
    Distance:866.147,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KOW",
    To:"SZX",
    Distance:371.501,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KOW",
    To:"XMN",
    Distance:353.563,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KOW",
    To:"ZUH",
    Distance:452.472,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KOZ",
    To:"ADQ",
    Distance:19.2306,
    Airport:"Astair"
}),
new Routes(
{
    From:"KOZ",
    To:"ORI",
    Distance:20.8424,
    Airport:"Air Salone"
}),
new Routes(
{
    From:"KPN",
    To:"BET",
    Distance:152.974,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KPN",
    To:"CYF",
    Distance:27.8919,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"KPN",
    To:"CYF",
    Distance:27.8919,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KPO",
    To:"CJU",
    Distance:383.846,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"KPO",
    To:"GMP",
    Distance:292.149,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"KPO",
    To:"GMP",
    Distance:292.149,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"KPV",
    To:"AKN",
    Distance:342.946,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"KQA",
    To:"DUT",
    Distance:55.8859,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"KRF",
    To:"ARN",
    Distance:377.775,
    Airport:"NextJet"
}),
new Routes(
{
    From:"KRF",
    To:"ARN",
    Distance:377.775,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"KRF",
    To:"GEV",
    Distance:475.837,
    Airport:"NextJet"
}),
new Routes(
{
    From:"KRF",
    To:"GEV",
    Distance:475.837,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"KRK",
    To:"AGP",
    Distance:2445.63,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"ALC",
    Distance:2074.31,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"AMS",
    Distance:1073.6,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"KRK",
    To:"ARN",
    Distance:1071.17,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"KRK",
    To:"BFS",
    Distance:1825.38,
    Airport:"easyJet"
}),
new Routes(
{
    From:"KRK",
    To:"BGO",
    Distance:1458.1,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"KRK",
    To:"BGY",
    Distance:896.081,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"BHX",
    Distance:1515.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"BLQ",
    Distance:887.866,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"BRS",
    Distance:1584.24,
    Airport:"easyJet"
}),
new Routes(
{
    From:"KRK",
    To:"BSL",
    Distance:937.459,
    Airport:"easyJet"
}),
new Routes(
{
    From:"KRK",
    To:"BVA",
    Distance:1268.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"CAG",
    Distance:1469.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"CDG",
    Distance:1246.29,
    Airport:"easyJet"
}),
new Routes(
{
    From:"KRK",
    To:"CIA",
    Distance:1074.24,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"CPH",
    Distance:779.354,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"KRK",
    To:"CRL",
    Distance:1088.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"DTM",
    Distance:869.302,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"DUB",
    Distance:1820.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"EDI",
    Distance:1670.99,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"EDI",
    Distance:1670.99,
    Airport:"easyJet"
}),
new Routes(
{
    From:"KRK",
    To:"EIN",
    Distance:1023.22,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"EMA",
    Distance:1488.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"FRA",
    Distance:801.89,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"KRK",
    To:"FRA",
    Distance:801.89,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"KRK",
    To:"GDN",
    Distance:486.459,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"KRK",
    To:"GRO",
    Distance:1592.98,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"HEL",
    Distance:1184.17,
    Airport:"Finnair"
}),
new Routes(
{
    From:"KRK",
    To:"KGS",
    Distance:1588.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"LBA",
    Distance:1521.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"LGW",
    Distance:1410.07,
    Airport:"easyJet"
}),
new Routes(
{
    From:"KRK",
    To:"LPL",
    Distance:1593.86,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"LPL",
    Distance:1593.86,
    Airport:"easyJet"
}),
new Routes(
{
    From:"KRK",
    To:"MAD",
    Distance:2101.95,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"MAN",
    Distance:1555.98,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"MLA",
    Distance:1638.05,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"MUC",
    Distance:611.427,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"KRK",
    To:"MUC",
    Distance:611.427,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"KRK",
    To:"NCL",
    Distance:1545.46,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"KRK",
    To:"NYO",
    Distance:986.032,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"OSL",
    Distance:1250.58,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"KRK",
    To:"PFO",
    Distance:1994.94,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"PSA",
    Distance:1006.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"RYG",
    Distance:1182.36,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"SEN",
    Distance:1347.19,
    Airport:"easyJet"
}),
new Routes(
{
    From:"KRK",
    To:"SNN",
    Distance:1999.68,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"STN",
    Distance:1378.98,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"STR",
    Distance:779.324,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"KRK",
    To:"SVG",
    Distance:1333.62,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"KRK",
    To:"SVO",
    Distance:1343.56,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KRK",
    To:"TPS",
    Distance:1471.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KRK",
    To:"TRD",
    Distance:1579.23,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"KRK",
    To:"TXL",
    Distance:528.888,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"KRK",
    To:"VIE",
    Distance:320.357,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"KRK",
    To:"VIE",
    Distance:320.357,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"KRK",
    To:"WAW",
    Distance:246.395,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"KRK",
    To:"ZRH",
    Distance:872.13,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"KRL",
    To:"CGO",
    Distance:2539.62,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KRL",
    To:"CKG",
    Distance:2271.53,
    Airport:"West Air China"
}),
new Routes(
{
    From:"KRL",
    To:"CTU",
    Distance:2015.15,
    Airport:"Air China"
}),
new Routes(
{
    From:"KRL",
    To:"CTU",
    Distance:2015.15,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KRL",
    To:"HMI",
    Distance:633.102,
    Airport:"Air China"
}),
new Routes(
{
    From:"KRL",
    To:"HMI",
    Distance:633.102,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KRL",
    To:"URC",
    Distance:269.057,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KRL",
    To:"URC",
    Distance:269.057,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KRL",
    To:"URC",
    Distance:269.057,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KRL",
    To:"URC",
    Distance:269.057,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KRN",
    To:"ARN",
    Distance:916.05,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"KRN",
    To:"ARN",
    Distance:916.05,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"KRO",
    To:"DME",
    Distance:1723.79,
    Airport:"IzAvia"
}),
new Routes(
{
    From:"KRO",
    To:"SVX",
    Distance:318.782,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"KRP",
    To:"CPH",
    Distance:232.41,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"KRR",
    To:"AER",
    Distance:187.009,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"AER",
    Distance:187.009,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KRR",
    To:"BUD",
    Distance:1550.37,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"DME",
    Distance:1156.98,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"KRR",
    To:"DME",
    Distance:1156.98,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"DME",
    Distance:1156.98,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"DME",
    Distance:1156.98,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"DXB",
    Distance:2635.86,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"KRR",
    To:"DXB",
    Distance:2635.86,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"DYU",
    Distance:2546.18,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KRR",
    To:"DYU",
    Distance:2546.18,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"KRR",
    To:"EGO",
    Distance:652.654,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KRR",
    To:"EVN",
    Distance:691.281,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"FEG",
    Distance:2693.36,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KRR",
    To:"FRU",
    Distance:2807.91,
    Airport:"Air Florida"
}),
new Routes(
{
    From:"KRR",
    To:"IST",
    Distance:954.326,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KRR",
    To:"KJA",
    Distance:3850.55,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"LBD",
    Distance:2538.27,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"KRR",
    To:"LBD",
    Distance:2538.27,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"LCA",
    Distance:1223.83,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KRR",
    To:"LED",
    Distance:1745.83,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"MCX",
    Distance:722.228,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KRR",
    To:"MSQ",
    Distance:1268.23,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"MUC",
    Distance:2109.18,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"NMA",
    Distance:2653.27,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"NUX",
    Distance:3215.45,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KRR",
    To:"OVB",
    Distance:3236.83,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"KRR",
    To:"OVB",
    Distance:3236.83,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"PFO",
    Distance:1280.04,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"PRG",
    Distance:1941.56,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KRR",
    To:"RMI",
    Distance:2098.95,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KRR",
    To:"SAW",
    Distance:923.905,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"SCO",
    Distance:954.417,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"KRR",
    To:"SKG",
    Distance:1411.22,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"SVO",
    Distance:1222.46,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"SVX",
    Distance:1984.08,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"SVX",
    Distance:1984.08,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"TAS",
    Distance:2463.96,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KRR",
    To:"TAS",
    Distance:2463.96,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"TAS",
    Distance:2463.96,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"KRR",
    To:"TLV",
    Distance:1494.72,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KRR",
    To:"VIE",
    Distance:1754.4,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"VKO",
    Distance:1181.55,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"KRR",
    To:"VKO",
    Distance:1181.55,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"KRR",
    To:"VOG",
    Distance:572.637,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"KRR",
    To:"VOZ",
    Distance:753.861,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"KRS",
    To:"ALC",
    Distance:2301.45,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"KRS",
    To:"AMS",
    Distance:688.311,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"KRS",
    To:"AMS",
    Distance:688.311,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KRS",
    To:"BGO",
    Distance:283.74,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"KRS",
    To:"CPH",
    Distance:399.444,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"KRS",
    To:"CPH",
    Distance:399.444,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"KRS",
    To:"GDN",
    Distance:767.773,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KRS",
    To:"OSL",
    Distance:279.975,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"KRS",
    To:"OSL",
    Distance:279.975,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"KRS",
    To:"SVG",
    Distance:160.507,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"KRS",
    To:"TRD",
    Distance:603.917,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"KRT",
    To:"ADD",
    Distance:1000.22,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"KRT",
    To:"ADD",
    Distance:1000.22,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"KRT",
    To:"AMM",
    Distance:1827.46,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"KRT",
    To:"AMM",
    Distance:1827.46,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"KRT",
    To:"ASM",
    Distance:682.185,
    Airport:"Nasair"
}),
new Routes(
{
    From:"KRT",
    To:"AUH",
    Distance:2504.99,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"KRT",
    To:"AUH",
    Distance:2504.99,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"KRT",
    To:"AUH",
    Distance:2504.99,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KRT",
    To:"AUH",
    Distance:2504.99,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"KRT",
    To:"BAH",
    Distance:2217.72,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"KRT",
    To:"CAI",
    Distance:1620.17,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"KRT",
    To:"CAI",
    Distance:1620.17,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"KRT",
    To:"DOH",
    Distance:2250.27,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"KRT",
    To:"DOH",
    Distance:2250.27,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"KRT",
    To:"DWC",
    Distance:2552.51,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"KRT",
    To:"DXB",
    Distance:2603.24,
    Airport:"Emirates"
}),
new Routes(
{
    From:"KRT",
    To:"DXB",
    Distance:2603.24,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"KRT",
    To:"DXB",
    Distance:2603.24,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"KRT",
    To:"EGN",
    Distance:1110.46,
    Airport:"ALAK"
}),
new Routes(
{
    From:"KRT",
    To:"EGN",
    Distance:1110.46,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"KRT",
    To:"ELF",
    Distance:808.132,
    Airport:"ALAK"
}),
new Routes(
{
    From:"KRT",
    To:"ELF",
    Distance:808.132,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"KRT",
    To:"IST",
    Distance:2845.86,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KRT",
    To:"JED",
    Distance:970.57,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"KRT",
    To:"JED",
    Distance:970.57,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"KRT",
    To:"JED",
    Distance:970.57,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"KRT",
    To:"JUB",
    Distance:1196.26,
    Airport:"Nasair"
}),
new Routes(
{
    From:"KRT",
    To:"JUB",
    Distance:1196.26,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"KRT",
    To:"MED",
    Distance:1244.89,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"KRT",
    To:"NBO",
    Distance:1940.66,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"KRT",
    To:"NDJ",
    Distance:1929.2,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"KRT",
    To:"PZU",
    Distance:654.954,
    Airport:"ALAK"
}),
new Routes(
{
    From:"KRT",
    To:"PZU",
    Distance:654.954,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"KRT",
    To:"RUH",
    Distance:1803.87,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"KRT",
    To:"RUH",
    Distance:1803.87,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"KRT",
    To:"RUH",
    Distance:1803.87,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"KRT",
    To:"SAH",
    Distance:1249.79,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"KRT",
    To:"SHJ",
    Distance:2620.55,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"KRT",
    To:"SHJ",
    Distance:2620.55,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"KRT",
    To:"UYL",
    Distance:909.478,
    Airport:"ALAK"
}),
new Routes(
{
    From:"KRT",
    To:"UYL",
    Distance:909.478,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"KRY",
    To:"URC",
    Distance:279.266,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KRY",
    To:"URC",
    Distance:279.266,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KSA",
    To:"KWA",
    Distance:645.945,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"KSA",
    To:"PNI",
    Distance:555.365,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"KSC",
    To:"BTS",
    Distance:302.275,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"KSC",
    To:"BTS",
    Distance:302.275,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"KSC",
    To:"LTN",
    Distance:1570.53,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KSC",
    To:"PRG",
    Distance:529.808,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"KSC",
    To:"PRG",
    Distance:529.808,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"KSC",
    To:"VIE",
    Distance:350.331,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"KSD",
    To:"ALC",
    Distance:2551.33,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"KSD",
    To:"ARN",
    Distance:259.148,
    Airport:"NextJet"
}),
new Routes(
{
    From:"KSF",
    To:"AYT",
    Distance:2334,
    Airport:"Germania"
}),
new Routes(
{
    From:"KSF",
    To:"PMI",
    Distance:1415.03,
    Airport:"Germania"
}),
new Routes(
{
    From:"KSH",
    To:"IST",
    Distance:1770.44,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KSH",
    To:"MHD",
    Distance:1151.57,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"KSH",
    To:"MHD",
    Distance:1151.57,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"KSH",
    To:"THR",
    Distance:406.774,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"KSH",
    To:"THR",
    Distance:406.774,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"KSH",
    To:"THR",
    Distance:406.774,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"KSJ",
    To:"AOK",
    Distance:21.3814,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"KSJ",
    To:"AOK",
    Distance:21.3814,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"KSJ",
    To:"JSH",
    Distance:76.842,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"KSJ",
    To:"JSH",
    Distance:76.842,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"KSM",
    To:"ANC",
    Distance:708.878,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"KSM",
    To:"ANC",
    Distance:708.878,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KSM",
    To:"KOT",
    Distance:108.512,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KSM",
    To:"MOU",
    Distance:20.1632,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KSM",
    To:"SXP",
    Distance:94.8893,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KSN",
    To:"ALA",
    Distance:1477.51,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"KSN",
    To:"TSE",
    Distance:592.229,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"KSN",
    To:"VKO",
    Distance:1711.58,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"KSO",
    To:"ATH",
    Distance:361.254,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"KSQ",
    To:"DME",
    Distance:2775.07,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"KSQ",
    To:"DME",
    Distance:2775.07,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"KSQ",
    To:"LED",
    Distance:3407.84,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KSQ",
    To:"LED",
    Distance:3407.84,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"KSQ",
    To:"TAS",
    Distance:392.946,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"KSU",
    To:"ABZ",
    Distance:857.927,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"KSU",
    To:"BGO",
    Distance:342.116,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"KSU",
    To:"MOL",
    Distance:49.7468,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"KSU",
    To:"OSL",
    Distance:367.563,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"KSU",
    To:"SVG",
    Distance:485.374,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"KSU",
    To:"SVG",
    Distance:485.374,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"KSU",
    To:"TRD",
    Distance:159.632,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"KSY",
    To:"ESB",
    Distance:858.528,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KSY",
    To:"IST",
    Distance:1203.81,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KSY",
    To:"SAW",
    Distance:1162.7,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KTA",
    To:"BNE",
    Distance:3750.63,
    Airport:"Qantas"
}),
new Routes(
{
    From:"KTA",
    To:"MEL",
    Distance:3292.36,
    Airport:"Qantas"
}),
new Routes(
{
    From:"KTA",
    To:"PER",
    Distance:1251.07,
    Airport:"Qantas"
}),
new Routes(
{
    From:"KTA",
    To:"PER",
    Distance:1251.07,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"KTA",
    To:"PHE",
    Distance:196.495,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"KTA",
    To:"PHE",
    Distance:196.495,
    Airport:"Qantas"
}),
new Routes(
{
    From:"KTA",
    To:"SYD",
    Distance:3680.64,
    Airport:"Qantas"
}),
new Routes(
{
    From:"KTB",
    To:"HYL",
    Distance:23.9579,
    Airport:"Avient Aviation"
}),
new Routes(
{
    From:"KTB",
    To:"HYL",
    Distance:23.9579,
    Airport:"Fly Colombia ( Interliging Flights )"
}),
new Routes(
{
    From:"KTB",
    To:"KTN",
    Distance:63.6403,
    Airport:"Fly Colombia ( Interliging Flights )"
}),
new Routes(
{
    From:"KTE",
    To:"SZB",
    Distance:260.477,
    Airport:"Firefly"
}),
new Routes(
{
    From:"KTE",
    To:"SZB",
    Distance:260.477,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KTG",
    To:"PKN",
    Distance:214.121,
    Airport:"Illinois Airways"
}),
new Routes(
{
    From:"KTG",
    To:"PNK",
    Distance:195.41,
    Airport:"Illinois Airways"
}),
new Routes(
{
    From:"KTL",
    To:"WIL",
    Distance:328.098,
    Airport:"Flightline"
}),
new Routes(
{
    From:"KTM",
    To:"AUH",
    Distance:3080.78,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"KTM",
    To:"BDP",
    Distance:296.88,
    Airport:"Yeti Airways"
}),
new Routes(
{
    From:"KTM",
    To:"BHR",
    Distance:91.5636,
    Airport:"Yeti Airways"
}),
new Routes(
{
    From:"KTM",
    To:"BIR",
    Distance:231.984,
    Airport:"Yeti Airways"
}),
new Routes(
{
    From:"KTM",
    To:"BKK",
    Distance:2229.55,
    Airport:"Nepal Airlines"
}),
new Routes(
{
    From:"KTM",
    To:"BKK",
    Distance:2229.55,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"KTM",
    To:"BOM",
    Distance:1592.31,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"KTM",
    To:"BWA",
    Distance:192.62,
    Airport:"Yeti Airways"
}),
new Routes(
{
    From:"KTM",
    To:"CAN",
    Distance:2837.34,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KTM",
    To:"CCU",
    Distance:640.889,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"KTM",
    To:"CTU",
    Distance:1831.33,
    Airport:"Air China"
}),
new Routes(
{
    From:"KTM",
    To:"DAC",
    Distance:661.786,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"KTM",
    To:"DAC",
    Distance:661.786,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"KTM",
    To:"DAC",
    Distance:661.786,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"KTM",
    To:"DAC",
    Distance:661.786,
    Airport:"United Airways"
}),
new Routes(
{
    From:"KTM",
    To:"DEL",
    Distance:815.167,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"KTM",
    To:"DEL",
    Distance:815.167,
    Airport:"Druk Air"
}),
new Routes(
{
    From:"KTM",
    To:"DEL",
    Distance:815.167,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"KTM",
    To:"DEL",
    Distance:815.167,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"KTM",
    To:"DEL",
    Distance:815.167,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"KTM",
    To:"DHI",
    Distance:482.519,
    Airport:"Yeti Airways"
}),
new Routes(
{
    From:"KTM",
    To:"DOH",
    Distance:3364.05,
    Airport:"Nepal Airlines"
}),
new Routes(
{
    From:"KTM",
    To:"DOH",
    Distance:3364.05,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"KTM",
    To:"DWC",
    Distance:3033.26,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"KTM",
    To:"DXB",
    Distance:2990.54,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"KTM",
    To:"HKG",
    Distance:2932.32,
    Airport:"Nepal Airlines"
}),
new Routes(
{
    From:"KTM",
    To:"ICN",
    Distance:3966.45,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"KTM",
    To:"IST",
    Distance:5301.45,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KTM",
    To:"KEP",
    Distance:365.62,
    Airport:"Yeti Airways"
}),
new Routes(
{
    From:"KTM",
    To:"KHI",
    Distance:1838.61,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KTM",
    To:"KMG",
    Distance:1756.63,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KTM",
    To:"KUL",
    Distance:3273.2,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KTM",
    To:"KUL",
    Distance:3273.2,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KTM",
    To:"KUL",
    Distance:3273.2,
    Airport:"Nepal Airlines"
}),
new Routes(
{
    From:"KTM",
    To:"LXA",
    Distance:571.023,
    Airport:"Air China"
}),
new Routes(
{
    From:"KTM",
    To:"MCT",
    Distance:2746.37,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"KTM",
    To:"PBH",
    Distance:402.11,
    Airport:"Druk Air"
}),
new Routes(
{
    From:"KTM",
    To:"PKR",
    Distance:146.423,
    Airport:"Yeti Airways"
}),
new Routes(
{
    From:"KTM",
    To:"SHJ",
    Distance:2973.79,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"KTM",
    To:"SIN",
    Distance:3538.1,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"KTM",
    To:"SIN",
    Distance:3538.1,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"KTM",
    To:"TMI",
    Distance:185.81,
    Airport:"Yeti Airways"
}),
new Routes(
{
    From:"KTM",
    To:"VNS",
    Distance:352.217,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"KTN",
    To:"CGA",
    Distance:91.5384,
    Airport:"Avient Aviation"
}),
new Routes(
{
    From:"KTN",
    To:"CGA",
    Distance:91.5384,
    Airport:"Fly Colombia ( Interliging Flights )"
}),
new Routes(
{
    From:"KTN",
    To:"HYL",
    Distance:60.4901,
    Airport:"Avient Aviation"
}),
new Routes(
{
    From:"KTN",
    To:"HYL",
    Distance:60.4901,
    Airport:"Fly Colombia ( Interliging Flights )"
}),
new Routes(
{
    From:"KTN",
    To:"JNU",
    Distance:376.115,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"KTN",
    To:"JNU",
    Distance:376.115,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KTN",
    To:"KLW",
    Distance:89.4002,
    Airport:"Interstate Airline"
}),
new Routes(
{
    From:"KTN",
    To:"KTB",
    Distance:63.6403,
    Airport:"Fly Colombia ( Interliging Flights )"
}),
new Routes(
{
    From:"KTN",
    To:"MTM",
    Distance:26.3979,
    Airport:"Avient Aviation"
}),
new Routes(
{
    From:"KTN",
    To:"MTM",
    Distance:26.3979,
    Airport:"Fly Colombia ( Interliging Flights )"
}),
new Routes(
{
    From:"KTN",
    To:"SEA",
    Distance:1092.74,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"KTN",
    To:"SEA",
    Distance:1092.74,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KTN",
    To:"SEA",
    Distance:1092.74,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KTN",
    To:"SIT",
    Distance:293.688,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"KTN",
    To:"SIT",
    Distance:293.688,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KTN",
    To:"WRG",
    Distance:132.002,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"KTS",
    To:"OME",
    Distance:103.006,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"KTS",
    To:"TLA",
    Distance:11.7117,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KTS",
    To:"WAA",
    Distance:81.8589,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"KTS",
    To:"WAA",
    Distance:81.8589,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KTT",
    To:"HEL",
    Distance:821.06,
    Airport:"Air France"
}),
new Routes(
{
    From:"KTT",
    To:"HEL",
    Distance:821.06,
    Airport:"Finnair"
}),
new Routes(
{
    From:"KTW",
    To:"ALC",
    Distance:2055.84,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KTW",
    To:"BCN",
    Distance:1658.6,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KTW",
    To:"BGO",
    Distance:1393.77,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KTW",
    To:"BGY",
    Distance:876.485,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KTW",
    To:"BHX",
    Distance:1454.33,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KTW",
    To:"BVA",
    Distance:1216.23,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KTW",
    To:"CGN",
    Distance:841.471,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KTW",
    To:"CHQ",
    Distance:1710.88,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KTW",
    To:"CIA",
    Distance:1085.35,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KTW",
    To:"DTM",
    Distance:810.038,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KTW",
    To:"DUB",
    Distance:1758.29,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KTW",
    To:"DUS",
    Distance:867.545,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"KTW",
    To:"EIN",
    Distance:964.529,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KTW",
    To:"FRA",
    Distance:750.212,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"KTW",
    To:"FRA",
    Distance:750.212,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"KTW",
    To:"HHN",
    Distance:841.968,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KTW",
    To:"IEV",
    Distance:804.472,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"KTW",
    To:"KUT",
    Distance:2008.16,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KTW",
    To:"LTN",
    Distance:1360.6,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KTW",
    To:"MMX",
    Distance:679.189,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KTW",
    To:"NAP",
    Distance:1128.61,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KTW",
    To:"NYO",
    Distance:934.859,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KTW",
    To:"STN",
    Distance:1319.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KTW",
    To:"SVG",
    Distance:1268.17,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KTW",
    To:"TLV",
    Distance:2430.27,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KTW",
    To:"TRF",
    Distance:1119.37,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KTW",
    To:"WAW",
    Distance:229.273,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"KUA",
    To:"KUL",
    Distance:202.014,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUA",
    To:"PEN",
    Distance:366.423,
    Airport:"Firefly"
}),
new Routes(
{
    From:"KUA",
    To:"PEN",
    Distance:366.423,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUA",
    To:"SIN",
    Distance:283.429,
    Airport:"Firefly"
}),
new Routes(
{
    From:"KUA",
    To:"SIN",
    Distance:283.429,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUD",
    To:"BKI",
    Distance:139.726,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUD",
    To:"SDK",
    Distance:176.582,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"ALA",
    Distance:2262.77,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"KUF",
    To:"DME",
    Distance:818.239,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"DME",
    Distance:818.239,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"DME",
    Distance:818.239,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"DWC",
    Distance:3245.53,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"KUF",
    To:"DWC",
    Distance:3245.53,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"DWC",
    Distance:3245.53,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"DXB",
    Distance:3170.79,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"DYU",
    Distance:2187.58,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"EGO",
    Distance:977.89,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"KUF",
    To:"EVN",
    Distance:1546.69,
    Airport:"Air Armenia"
}),
new Routes(
{
    From:"KUF",
    To:"EVN",
    Distance:1546.69,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"FRA",
    Distance:2847.7,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"KUF",
    To:"GOJ",
    Distance:507.719,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"KUF",
    To:"LBD",
    Distance:2082.15,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"LED",
    Distance:1395.21,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"MSQ",
    Distance:1451.1,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"NSK",
    Distance:2574.69,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"OSS",
    Distance:2218.37,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"PRG",
    Distance:2469.67,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"ROV",
    Distance:1007.34,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"SVO",
    Distance:861.086,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"SVX",
    Distance:766.218,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"KUF",
    To:"SVX",
    Distance:766.218,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"KUF",
    To:"TAS",
    Distance:1970.19,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KUF",
    To:"TAS",
    Distance:1970.19,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"KUF",
    To:"VKO",
    Distance:861.786,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"KUH",
    To:"CTS",
    Distance:205.795,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KUH",
    To:"HND",
    Distance:914.869,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"KUH",
    To:"HND",
    Distance:914.869,
    Airport:"Hokkaido International Airlines"
}),
new Routes(
{
    From:"KUH",
    To:"HND",
    Distance:914.869,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KUH",
    To:"TPE",
    Distance:2890.83,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"KUK",
    To:"NUP",
    Distance:5.86009,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"KUK",
    To:"NUP",
    Distance:5.86009,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KUL",
    To:"ADL",
    Distance:5681.81,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"ADL",
    Distance:5681.81,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"AKL",
    Distance:8703.33,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"ALA",
    Distance:5130.45,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"KUL",
    To:"AMD",
    Distance:3861.23,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KUL",
    To:"AMS",
    Distance:10236.6,
    Airport:"Air France"
}),
new Routes(
{
    From:"KUL",
    To:"AMS",
    Distance:10236.6,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"AMS",
    Distance:10236.6,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"AOR",
    Distance:409.636,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"AOR",
    Distance:409.636,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"AUH",
    Distance:5588.36,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"KUL",
    To:"AUH",
    Distance:5588.36,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"KUL",
    To:"AUH",
    Distance:5588.36,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"BDO",
    Distance:1254.76,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"BDO",
    Distance:1254.76,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"BDO",
    Distance:1254.76,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"BKI",
    Distance:1629,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"BKI",
    Distance:1629,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"BKI",
    Distance:1629,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KUL",
    To:"BKK",
    Distance:1220.57,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"KUL",
    To:"BKK",
    Distance:1220.57,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"BKK",
    Distance:1220.57,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"KUL",
    To:"BKK",
    Distance:1220.57,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"KUL",
    To:"BKK",
    Distance:1220.57,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"BKK",
    Distance:1220.57,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"BKK",
    Distance:1220.57,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"KUL",
    To:"BKK",
    Distance:1220.57,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"KUL",
    To:"BKK",
    Distance:1220.57,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"BLR",
    Distance:2877.37,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"BLR",
    Distance:2877.37,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"KUL",
    To:"BLR",
    Distance:2877.37,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"BNE",
    Distance:6439.61,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"BOM",
    Distance:3624.36,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"KUL",
    To:"BOM",
    Distance:3624.36,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"BOM",
    Distance:3624.36,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KUL",
    To:"BPN",
    Distance:1745.97,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"BTJ",
    Distance:762.814,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"BTU",
    Distance:1256.72,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"BTU",
    Distance:1256.72,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"BWN",
    Distance:1486.65,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"BWN",
    Distance:1486.65,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"BWN",
    Distance:1486.65,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"CAN",
    Distance:2612.72,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"CAN",
    Distance:2612.72,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"CAN",
    Distance:2612.72,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"CCU",
    Distance:2635.58,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"CDG",
    Distance:10442,
    Airport:"Air France"
}),
new Routes(
{
    From:"KUL",
    To:"CDG",
    Distance:10442,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"CDG",
    Distance:10442,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"CEB",
    Distance:2597.98,
    Airport:"Zest Air"
}),
new Routes(
{
    From:"KUL",
    To:"CGK",
    Distance:1129,
    Airport:"Air France"
}),
new Routes(
{
    From:"KUL",
    To:"CGK",
    Distance:1129,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"CGK",
    Distance:1129,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"KUL",
    To:"CGK",
    Distance:1129,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"CGK",
    Distance:1129,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"CGK",
    Distance:1129,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KUL",
    To:"CGK",
    Distance:1129,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"CGK",
    Distance:1129,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"CGK",
    Distance:1129,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KUL",
    To:"CGK",
    Distance:1129,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"KUL",
    To:"CGP",
    Distance:2417.6,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KUL",
    To:"CMB",
    Distance:2466.89,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"CMB",
    Distance:2466.89,
    Airport:"L"
}),
new Routes(
{
    From:"KUL",
    To:"CMB",
    Distance:2466.89,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"CMB",
    Distance:2466.89,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"CNX",
    Distance:1806.41,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"COK",
    Distance:2914.06,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"COK",
    Distance:2914.06,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"COK",
    Distance:2914.06,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KUL",
    To:"CTU",
    Distance:3103.81,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"DAC",
    Distance:2642.34,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"DAC",
    Distance:2642.34,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"DAC",
    Distance:2642.34,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KUL",
    To:"DAC",
    Distance:2642.34,
    Airport:"Rainbow Air Polynesia"
}),
new Routes(
{
    From:"KUL",
    To:"DAC",
    Distance:2642.34,
    Airport:"United Airways"
}),
new Routes(
{
    From:"KUL",
    To:"DEL",
    Distance:3876.9,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"KUL",
    To:"DEL",
    Distance:3876.9,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"DEL",
    Distance:3876.9,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KUL",
    To:"DMK",
    Distance:1247.61,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"DMK",
    Distance:1247.61,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KUL",
    To:"DMK",
    Distance:1247.61,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"DOH",
    Distance:5913.04,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"DOH",
    Distance:5913.04,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"KUL",
    To:"DPS",
    Distance:1964.39,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"DPS",
    Distance:1964.39,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"DPS",
    Distance:1964.39,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"DPS",
    Distance:1964.39,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KUL",
    To:"DRW",
    Distance:3635.38,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"DWC",
    Distance:5549,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"DXB",
    Distance:5549.18,
    Airport:"Emirates"
}),
new Routes(
{
    From:"KUL",
    To:"DXB",
    Distance:5549.18,
    Airport:"Qantas"
}),
new Routes(
{
    From:"KUL",
    To:"DXB",
    Distance:5549.18,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"KUL",
    To:"FNJ",
    Distance:4724.62,
    Airport:"Air Koryo"
}),
new Routes(
{
    From:"KUL",
    To:"FOC",
    Distance:3213.47,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"FOC",
    Distance:3213.47,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"FOC",
    Distance:3213.47,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"FRA",
    Distance:9999.52,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"FRA",
    Distance:9999.52,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"KUL",
    To:"FRA",
    Distance:9999.52,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"HAN",
    Distance:2101.71,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"HAN",
    Distance:2101.71,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"HAN",
    Distance:2101.71,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"HDY",
    Distance:487.96,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"HGH",
    Distance:3636.64,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"HKG",
    Distance:2543.07,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"HKG",
    Distance:2543.07,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"KUL",
    To:"HKG",
    Distance:2543.07,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"HKT",
    Distance:705.124,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"HKT",
    Distance:705.124,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"KUL",
    To:"HKT",
    Distance:705.124,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"HKT",
    Distance:705.124,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"KUL",
    To:"HKT",
    Distance:705.124,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"KUL",
    To:"HND",
    Distance:5350.29,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"HYD",
    Distance:3017.71,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"KUL",
    To:"HYD",
    Distance:3017.71,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"ICN",
    Distance:4612.78,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"ICN",
    Distance:4612.78,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"KUL",
    To:"ICN",
    Distance:4612.78,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"IKA",
    Distance:6336.03,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"KUL",
    To:"IKA",
    Distance:6336.03,
    Airport:"Mahan Air"
}),
new Routes(
{
    From:"KUL",
    To:"IST",
    Distance:8376.6,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"IST",
    Distance:8376.6,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"JED",
    Distance:7065.69,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"JED",
    Distance:7065.69,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"JED",
    Distance:7065.69,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"KUL",
    To:"JED",
    Distance:7065.69,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"JHB",
    Distance:249.981,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"JHB",
    Distance:249.981,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"JOG",
    Distance:1519.22,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"KBR",
    Distance:385.879,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"KBR",
    Distance:385.879,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"KBV",
    Distance:666.797,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"KBV",
    Distance:666.797,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"KCH",
    Distance:969.904,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"KCH",
    Distance:969.904,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"KCH",
    Distance:969.904,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"KCH",
    Distance:969.904,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KUL",
    To:"KHI",
    Distance:4444.73,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"KIX",
    Distance:4943.27,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"KIX",
    Distance:4943.27,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"KIX",
    Distance:4943.27,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"KLO",
    Distance:2484.44,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"KMG",
    Distance:2476.21,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"KMG",
    Distance:2476.21,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"KTM",
    Distance:3273.2,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"KTM",
    Distance:3273.2,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"KTM",
    Distance:3273.2,
    Airport:"Nepal Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"KUA",
    Distance:202.014,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"KWI",
    Distance:6381.31,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KUL",
    To:"KWL",
    Distance:2653.2,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"LBU",
    Distance:1528.39,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"LBU",
    Distance:1528.39,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"LGK",
    Distance:455.025,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"LGK",
    Distance:455.025,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"LGK",
    Distance:455.025,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"LGK",
    Distance:455.025,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KUL",
    To:"LHE",
    Distance:4291.04,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"LHR",
    Distance:10605.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"LHR",
    Distance:10605.3,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"LOP",
    Distance:2059.97,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"MAA",
    Distance:2627.77,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"KUL",
    To:"MAA",
    Distance:2627.77,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"MAA",
    Distance:2627.77,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"KUL",
    To:"MAA",
    Distance:2627.77,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"MCT",
    Distance:5208.98,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"MCT",
    Distance:5208.98,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"KUL",
    To:"MED",
    Distance:7059.68,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"MEL",
    Distance:6315.02,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"MEL",
    Distance:6315.02,
    Airport:"Emirates"
}),
new Routes(
{
    From:"KUL",
    To:"MEL",
    Distance:6315.02,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"MEL",
    Distance:6315.02,
    Airport:"Qantas"
}),
new Routes(
{
    From:"KUL",
    To:"MFM",
    Distance:2510.21,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"MLE",
    Distance:3131.75,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"MNL",
    Distance:2489.85,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"KUL",
    To:"MNL",
    Distance:2489.85,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"MNL",
    Distance:2489.85,
    Airport:"Zest Air"
}),
new Routes(
{
    From:"KUL",
    To:"MRU",
    Distance:5446.53,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"KUL",
    To:"MRU",
    Distance:5446.53,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"MYY",
    Distance:1373.71,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"MYY",
    Distance:1373.71,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"NGO",
    Distance:5085.38,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"NNG",
    Distance:2316,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"NRT",
    Distance:5408.95,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"NRT",
    Distance:5408.95,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"NRT",
    Distance:5408.95,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"OOL",
    Distance:6508.52,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"PDG",
    Distance:429.962,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"PEK",
    Distance:4413.46,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"PEK",
    Distance:4413.46,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"PEN",
    Distance:325.208,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"PEN",
    Distance:325.208,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"PEN",
    Distance:325.208,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"PEN",
    Distance:325.208,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KUL",
    To:"PER",
    Distance:4140.16,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"PER",
    Distance:4140.16,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"PEW",
    Distance:4675.75,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"PKU",
    Distance:255.764,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"PLM",
    Distance:710.131,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"PNH",
    Distance:1037.8,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"PNH",
    Distance:1037.8,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"PUS",
    Distance:4570.3,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"PVG",
    Distance:3796.71,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"PVG",
    Distance:3796.71,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"PVG",
    Distance:3796.71,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"PVG",
    Distance:3796.71,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"REP",
    Distance:1208.22,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"REP",
    Distance:1208.22,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"RGN",
    Distance:1688.48,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"RGN",
    Distance:1688.48,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"RGN",
    Distance:1688.48,
    Airport:"Maxair"
}),
new Routes(
{
    From:"KUL",
    To:"RUH",
    Distance:6377.18,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"SBW",
    Distance:1142.74,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"SBW",
    Distance:1142.74,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"SBW",
    Distance:1142.74,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KUL",
    To:"SDK",
    Distance:1846.19,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"SDK",
    Distance:1846.19,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"SGN",
    Distance:1050.29,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"SGN",
    Distance:1050.29,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"SGN",
    Distance:1050.29,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"SIN",
    Distance:297.521,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"KUL",
    To:"SIN",
    Distance:297.521,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"KUL",
    To:"SIN",
    Distance:297.521,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"SIN",
    Distance:297.521,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"SIN",
    Distance:297.521,
    Airport:"Jetstar Asia Airways"
}),
new Routes(
{
    From:"KUL",
    To:"SIN",
    Distance:297.521,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"SIN",
    Distance:297.521,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"KUL",
    To:"SIN",
    Distance:297.521,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"SIN",
    Distance:297.521,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"KUL",
    To:"SIN",
    Distance:297.521,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"KUL",
    To:"SOC",
    Distance:1519.7,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"SRG",
    Distance:1446.42,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"SUB",
    Distance:1666.81,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"SUB",
    Distance:1666.81,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"KUL",
    To:"SUB",
    Distance:1666.81,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"SYD",
    Distance:6584.91,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"SYD",
    Distance:6584.91,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"SZX",
    Distance:2568.27,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"TAS",
    Distance:5369.43,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"TAS",
    Distance:5369.43,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"KUL",
    To:"TGG",
    Distance:331.459,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"TGG",
    Distance:331.459,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"TPE",
    Distance:3246.08,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"KUL",
    To:"TPE",
    Distance:3246.08,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"TPE",
    Distance:3246.08,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"KUL",
    To:"TPE",
    Distance:3246.08,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"TRZ",
    Distance:2689.49,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"TRZ",
    Distance:2689.49,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"KUL",
    To:"TWU",
    Distance:1829.72,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"TWU",
    Distance:1829.72,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"UPG",
    Distance:2163.99,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"URT",
    Distance:765.084,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"USM",
    Distance:777.971,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"KUL",
    To:"USM",
    Distance:777.971,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"VTE",
    Distance:1697.47,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KUL",
    To:"XMN",
    Distance:2996.05,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"XMN",
    Distance:2996.05,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"KUL",
    To:"XMN",
    Distance:2996.05,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KUN",
    To:"ALC",
    Distance:2616.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"BHX",
    Distance:1712.78,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"BRS",
    Distance:1818.27,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"CAG",
    Distance:2075.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"CIY",
    Distance:2122.79,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"DUB",
    Distance:1966.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"EDI",
    Distance:1723.23,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"HHN",
    Distance:1264.57,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"KGS",
    Distance:2033.37,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"LGW",
    Distance:1667.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"LTN",
    Distance:1647.41,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"MLA",
    Distance:2248.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"NOC",
    Distance:2111.41,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"PFO",
    Distance:2342.68,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"PMI",
    Distance:2333.84,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"RHO",
    Distance:2086.04,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"RYG",
    Distance:937.606,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"STN",
    Distance:1608.5,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUN",
    To:"TPS",
    Distance:2087.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"KUO",
    To:"HEL",
    Distance:334.359,
    Airport:"Finnair"
}),
new Routes(
{
    From:"KUS",
    To:"AGM",
    Distance:23.6033,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"KUS",
    To:"CNP",
    Distance:826.245,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"KUS",
    To:"GOH",
    Distance:702.486,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"KUS",
    To:"RKV",
    Distance:732.848,
    Airport:"Air Iceland"
}),
new Routes(
{
    From:"KUS",
    To:"SFJ",
    Distance:626.476,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"KUT",
    To:"DOK",
    Distance:753.581,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"KUT",
    To:"HRK",
    Distance:984.412,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"KUT",
    To:"IEV",
    Distance:1297.45,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"KUT",
    To:"KTW",
    Distance:2008.16,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KUT",
    To:"MSQ",
    Distance:1681.3,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"KUT",
    To:"TBS",
    Distance:212.163,
    Airport:"Georgian Airways"
}),
new Routes(
{
    From:"KUT",
    To:"VNO",
    Distance:1868.93,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KUT",
    To:"WAW",
    Distance:1957.54,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"KUU",
    To:"DEL",
    Distance:368.111,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"KUV",
    To:"CJU",
    Distance:266.265,
    Airport:"Eastar Jet"
}),
new Routes(
{
    From:"KUV",
    To:"CJU",
    Distance:266.265,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"KVA",
    To:"ATH",
    Distance:336.054,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"KVA",
    To:"ATH",
    Distance:336.054,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"KVA",
    To:"CGN",
    Distance:1740.02,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"KVA",
    To:"DUS",
    Distance:1787.69,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"KVA",
    To:"MUC",
    Distance:1306.84,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"KVA",
    To:"STR",
    Distance:1486.65,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"KVC",
    To:"CDB",
    Distance:30.8439,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"KVD",
    To:"DME",
    Distance:1743.94,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KVD",
    To:"GYD",
    Distance:316.228,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"KVD",
    To:"IST",
    Distance:1469.8,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KVD",
    To:"LED",
    Distance:2392.79,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"KVG",
    To:"MAS",
    Distance:380.352,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"KVG",
    To:"POM",
    Distance:860.096,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"KVG",
    To:"RAB",
    Distance:262.272,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"KVG",
    To:"RAB",
    Distance:262.272,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"KVL",
    To:"OTZ",
    Distance:126.736,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"KVL",
    To:"OTZ",
    Distance:126.736,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KVL",
    To:"PHO",
    Distance:115.241,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"KVX",
    To:"LED",
    Distance:1093.83,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"KVX",
    To:"NNM",
    Distance:1004.27,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"KVX",
    To:"VKO",
    Distance:798.088,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"KWA",
    To:"KSA",
    Distance:645.945,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"KWA",
    To:"MAJ",
    Distance:431.188,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"KWA",
    To:"PNI",
    Distance:1066.47,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"ACX",
    Distance:244.951,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"KWE",
    To:"BFJ",
    Distance:157.784,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"KWE",
    To:"CAN",
    Distance:742.427,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"CAN",
    Distance:742.427,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CAN",
    Distance:742.427,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CAN",
    Distance:742.427,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CGO",
    Distance:1113.84,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"CGO",
    Distance:1113.84,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KWE",
    To:"CGO",
    Distance:1113.84,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CGO",
    Distance:1113.84,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CGO",
    Distance:1113.84,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CGO",
    Distance:1113.84,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CGO",
    Distance:1113.84,
    Airport:"West Air China"
}),
new Routes(
{
    From:"KWE",
    To:"CKG",
    Distance:354.021,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"CKG",
    Distance:354.021,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KWE",
    To:"CKG",
    Distance:354.021,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CKG",
    Distance:354.021,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"KWE",
    To:"CKG",
    Distance:354.021,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CSX",
    Distance:659.82,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CSX",
    Distance:659.82,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CSX",
    Distance:659.82,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CSX",
    Distance:659.82,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CSX",
    Distance:659.82,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CSX",
    Distance:659.82,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CTU",
    Distance:528.598,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"CTU",
    Distance:528.598,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CTU",
    Distance:528.598,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"KWE",
    To:"CTU",
    Distance:528.598,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CTU",
    Distance:528.598,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"CTU",
    Distance:528.598,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"KWE",
    To:"DLU",
    Distance:654.656,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"FOC",
    Distance:1284.12,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"FOC",
    Distance:1284.12,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"KWE",
    To:"FOC",
    Distance:1284.12,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"HAK",
    Distance:823.804,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KWE",
    To:"HAK",
    Distance:823.804,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"HAK",
    Distance:823.804,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KWE",
    To:"HFE",
    Distance:1173.33,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"HFE",
    Distance:1173.33,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"HGH",
    Distance:1394.37,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"HGH",
    Distance:1394.37,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"HGH",
    Distance:1394.37,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"HGH",
    Distance:1394.37,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"HGH",
    Distance:1394.37,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"HGH",
    Distance:1394.37,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"HKG",
    Distance:859.91,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"HKT",
    Distance:2235.93,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"HZH",
    Distance:226.026,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"HZH",
    Distance:226.026,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"KWE",
    To:"INC",
    Distance:1330.1,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KWE",
    To:"JJN",
    Distance:1196.86,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"JJN",
    Distance:1196.86,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"JJN",
    Distance:1196.86,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"KHN",
    Distance:932.123,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"KHN",
    Distance:932.123,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"KHN",
    Distance:932.123,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"KMG",
    Distance:441.13,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"KMG",
    Distance:441.13,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KWE",
    To:"KMG",
    Distance:441.13,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"KMG",
    Distance:441.13,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"KWE",
    To:"KMG",
    Distance:441.13,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"KMG",
    Distance:441.13,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"KMG",
    Distance:441.13,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"KWL",
    Distance:355.691,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KWE",
    To:"KWL",
    Distance:355.691,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"KWE",
    To:"LHW",
    Distance:1106.97,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"LJG",
    Distance:653.381,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KWE",
    To:"LJG",
    Distance:653.381,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"LZO",
    Distance:292.218,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"KWE",
    To:"MIG",
    Distance:579.393,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KWE",
    To:"NKG",
    Distance:1305.35,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"NKG",
    Distance:1305.35,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KWE",
    To:"NKG",
    Distance:1305.35,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"NKG",
    Distance:1305.35,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"NNG",
    Distance:458.497,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KWE",
    To:"NNG",
    Distance:458.497,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"PEK",
    Distance:1756.26,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"PEK",
    Distance:1756.26,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"PEK",
    Distance:1756.26,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"PEK",
    Distance:1756.26,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"PVG",
    Distance:1546.95,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"PVG",
    Distance:1546.95,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"PVG",
    Distance:1546.95,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"PVG",
    Distance:1546.95,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"PVG",
    Distance:1546.95,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"SHA",
    Distance:1505.74,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"SHA",
    Distance:1505.74,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"SHA",
    Distance:1505.74,
    Airport:"China SSS"
}),
new Routes(
{
    From:"KWE",
    To:"SHA",
    Distance:1505.74,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"SHA",
    Distance:1505.74,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"SHA",
    Distance:1505.74,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"SIN",
    Distance:2816.83,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KWE",
    To:"SWA",
    Distance:1055.12,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"SYX",
    Distance:954.195,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"SYX",
    Distance:954.195,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KWE",
    To:"SYX",
    Distance:954.195,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"SYX",
    Distance:954.195,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"SZX",
    Distance:830.629,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"SZX",
    Distance:830.629,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"SZX",
    Distance:830.629,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"SZX",
    Distance:830.629,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"SZX",
    Distance:830.629,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"TAO",
    Distance:1678.99,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"TEN",
    Distance:289.741,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KWE",
    To:"TNA",
    Distance:1510.32,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"TNA",
    Distance:1510.32,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"TPE",
    Distance:1453.03,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"TPE",
    Distance:1453.03,
    Airport:"Primaris Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"TYN",
    Distance:1360.95,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KWE",
    To:"URC",
    Distance:2596.7,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"WNZ",
    Distance:1396.92,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"WNZ",
    Distance:1396.92,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"WNZ",
    Distance:1396.92,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"WUH",
    Distance:862.882,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"WUH",
    Distance:862.882,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KWE",
    To:"WUH",
    Distance:862.882,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"WUH",
    Distance:862.882,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"WUH",
    Distance:862.882,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"WUZ",
    Distance:564.102,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"KWE",
    To:"XIY",
    Distance:898.98,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"XIY",
    Distance:898.98,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KWE",
    To:"XIY",
    Distance:898.98,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"XIY",
    Distance:898.98,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"XIY",
    Distance:898.98,
    Airport:"China United"
}),
new Routes(
{
    From:"KWE",
    To:"XIY",
    Distance:898.98,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KWE",
    To:"XIY",
    Distance:898.98,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"XIY",
    Distance:898.98,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"XMN",
    Distance:1157.43,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"XMN",
    Distance:1157.43,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"XMN",
    Distance:1157.43,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"XNN",
    Distance:1198.29,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"XUZ",
    Distance:1301.23,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KWE",
    To:"XUZ",
    Distance:1301.23,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"YIH",
    Distance:645.108,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KWE",
    To:"ZUH",
    Distance:835.309,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWE",
    To:"ZUH",
    Distance:835.309,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWE",
    To:"ZUH",
    Distance:835.309,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"ADD",
    Distance:2446.29,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"ADD",
    Distance:2446.29,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"ADD",
    Distance:2446.29,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"KWI",
    To:"AMD",
    Distance:2549.54,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"KWI",
    To:"AMM",
    Distance:1180.06,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"KWI",
    To:"AMM",
    Distance:1180.06,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"AMM",
    Distance:1180.06,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"KWI",
    To:"AMS",
    Distance:4355.28,
    Airport:"Air France"
}),
new Routes(
{
    From:"KWI",
    To:"AMS",
    Distance:4355.28,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"KWI",
    To:"AMS",
    Distance:4355.28,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"ATZ",
    Distance:1678.76,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"KWI",
    To:"AUH",
    Distance:850.402,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"KWI",
    To:"AUH",
    Distance:850.402,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"KWI",
    To:"AUH",
    Distance:850.402,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"KWI",
    To:"AUH",
    Distance:850.402,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"AWZ",
    Distance:246.758,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"KWI",
    To:"AWZ",
    Distance:246.758,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"BAH",
    Distance:420.416,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"KWI",
    To:"BAH",
    Distance:420.416,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"KWI",
    To:"BAH",
    Distance:420.416,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"BAH",
    Distance:420.416,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"BEY",
    Distance:1287.36,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"KWI",
    To:"BEY",
    Distance:1287.36,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"BEY",
    Distance:1287.36,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"BKK",
    Distance:5678.49,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"BOM",
    Distance:2758.33,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"KWI",
    To:"BOM",
    Distance:2758.33,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"CAI",
    Distance:1601.91,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"KWI",
    To:"CAI",
    Distance:1601.91,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"KWI",
    To:"CAI",
    Distance:1601.91,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"CCJ",
    Distance:3529.38,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"KWI",
    To:"CGP",
    Distance:4434.12,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"CMB",
    Distance:4142.09,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"CMB",
    Distance:4142.09,
    Airport:"L"
}),
new Routes(
{
    From:"KWI",
    To:"CMB",
    Distance:4142.09,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"COK",
    Distance:3635.38,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"DAC",
    Distance:4240.51,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"DAC",
    Distance:4240.51,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"DEL",
    Distance:2829.87,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"DMM",
    Distance:355.24,
    Airport:"Air France"
}),
new Routes(
{
    From:"KWI",
    To:"DMM",
    Distance:355.24,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"KWI",
    To:"DMM",
    Distance:355.24,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"DMM",
    Distance:355.24,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"DMM",
    Distance:355.24,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"KWI",
    To:"DMM",
    Distance:355.24,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"DOH",
    Distance:566.317,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"DOH",
    Distance:566.317,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"KWI",
    To:"DOH",
    Distance:566.317,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"KWI",
    To:"DWC",
    Distance:877.677,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"KWI",
    To:"DWC",
    Distance:877.677,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"KWI",
    To:"DXB",
    Distance:853.978,
    Airport:"Emirates"
}),
new Routes(
{
    From:"KWI",
    To:"DXB",
    Distance:853.978,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"KWI",
    To:"DXB",
    Distance:853.978,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"KWI",
    To:"DXB",
    Distance:853.978,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"FCO",
    Distance:3490.48,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"KWI",
    To:"FCO",
    Distance:3490.48,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"FRA",
    Distance:4022.14,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"FRA",
    Distance:4022.14,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"KWI",
    To:"GOI",
    Distance:3062.59,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"KWI",
    To:"HBE",
    Distance:1766.35,
    Airport:"Air Arabia Egypt"
}),
new Routes(
{
    From:"KWI",
    To:"HBE",
    Distance:1766.35,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"KWI",
    To:"HBE",
    Distance:1766.35,
    Airport:"Express One International"
}),
new Routes(
{
    From:"KWI",
    To:"HBE",
    Distance:1766.35,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"KWI",
    To:"HBE",
    Distance:1766.35,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"HBE",
    Distance:1766.35,
    Airport:"Nile Air"
}),
new Routes(
{
    From:"KWI",
    To:"HMB",
    Distance:1626.71,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"KWI",
    To:"HMB",
    Distance:1626.71,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"KWI",
    To:"HMB",
    Distance:1626.71,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"IAD",
    Distance:10559.4,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"IFN",
    Distance:539.566,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"KWI",
    To:"IKA",
    Distance:750.306,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"ISB",
    Distance:2427.66,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"IST",
    Distance:2169.69,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"IST",
    Distance:2169.69,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"JED",
    Distance:1218.56,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"JED",
    Distance:1218.56,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"KWI",
    To:"JED",
    Distance:1218.56,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"JED",
    Distance:1218.56,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"KWI",
    To:"JED",
    Distance:1218.56,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"JFK",
    Distance:10201.5,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"KBL",
    Distance:2086.91,
    Airport:"Ariana Afghan Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"KUL",
    Distance:6381.31,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"LHE",
    Distance:2542.6,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"LHE",
    Distance:2542.6,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"LHE",
    Distance:2542.6,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"KWI",
    To:"LHR",
    Distance:4674.88,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"LHR",
    Distance:4674.88,
    Airport:"British Airways"
}),
new Routes(
{
    From:"KWI",
    To:"LHR",
    Distance:4674.88,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"LRR",
    Distance:650.304,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"KWI",
    To:"LXR",
    Distance:1555.73,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"KWI",
    To:"LXR",
    Distance:1555.73,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"KWI",
    To:"MAA",
    Distance:3778.14,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"MCT",
    Distance:1202.38,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"MCT",
    Distance:1202.38,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"KWI",
    To:"MED",
    Distance:969.934,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"KWI",
    To:"MED",
    Distance:969.934,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"MHD",
    Distance:1339.79,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"KWI",
    To:"MHD",
    Distance:1339.79,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"MHD",
    Distance:1339.79,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"KWI",
    To:"NJF",
    Distance:459.198,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"KWI",
    To:"NJF",
    Distance:459.198,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"PEW",
    Distance:2286.27,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"RIY",
    Distance:1625.86,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"KWI",
    To:"RUH",
    Distance:491.04,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"KWI",
    To:"RUH",
    Distance:491.04,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"RUH",
    Distance:491.04,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"KWI",
    To:"RUH",
    Distance:491.04,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"SAW",
    Distance:2129.67,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"KWI",
    To:"SAW",
    Distance:2129.67,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"SAW",
    Distance:2129.67,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"SAW",
    Distance:2129.67,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"SHJ",
    Distance:862.445,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"KWI",
    To:"SKT",
    Distance:2539.02,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"SSH",
    Distance:1331.69,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"KWI",
    To:"SYZ",
    Distance:449.037,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"KWI",
    To:"SYZ",
    Distance:449.037,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"KWI",
    To:"TIF",
    Distance:1138.57,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"KWI",
    To:"TRV",
    Distance:3800.34,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"KWI",
    To:"TUN",
    Distance:3594.08,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"KWJ",
    To:"CJU",
    Distance:181.916,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"KWJ",
    To:"CJU",
    Distance:181.916,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"KWJ",
    To:"GMP",
    Distance:270.422,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"KWJ",
    To:"GMP",
    Distance:270.422,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"KWK",
    To:"BET",
    Distance:124.314,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"KWK",
    To:"BET",
    Distance:124.314,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KWK",
    To:"KKH",
    Distance:18.5721,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KWK",
    To:"KPN",
    Distance:48.4709,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KWL",
    To:"AEB",
    Distance:353.349,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"KWL",
    To:"BHY",
    Distance:416.061,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"KWL",
    To:"BKK",
    Distance:1609.42,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"KWL",
    To:"CAN",
    Distance:387.692,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"CGO",
    Distance:1097.05,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWL",
    To:"CGO",
    Distance:1097.05,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KWL",
    To:"CGO",
    Distance:1097.05,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"CGO",
    Distance:1097.05,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KWL",
    To:"CGO",
    Distance:1097.05,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"CGO",
    Distance:1097.05,
    Airport:"West Air China"
}),
new Routes(
{
    From:"KWL",
    To:"CKG",
    Distance:602.284,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWL",
    To:"CKG",
    Distance:602.284,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"CKG",
    Distance:602.284,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"CKG",
    Distance:602.284,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"CKG",
    Distance:602.284,
    Airport:"West Air China"
}),
new Routes(
{
    From:"KWL",
    To:"CKG",
    Distance:602.284,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"CTU",
    Distance:844.478,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWL",
    To:"CTU",
    Distance:844.478,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"CTU",
    Distance:844.478,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"CTU",
    Distance:844.478,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"CTU",
    Distance:844.478,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"CZX",
    Distance:1203.56,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"FOC",
    Distance:968.348,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWL",
    To:"FOC",
    Distance:968.348,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"FOC",
    Distance:968.348,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"FOC",
    Distance:968.348,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"HAK",
    Distance:589.048,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KWL",
    To:"HAK",
    Distance:589.048,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"HAK",
    Distance:589.048,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KWL",
    To:"HFE",
    Distance:1017.06,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"HGH",
    Distance:1164.31,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWL",
    To:"HGH",
    Distance:1164.31,
    Airport:"China SSS"
}),
new Routes(
{
    From:"KWL",
    To:"HGH",
    Distance:1164.31,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"HGH",
    Distance:1164.31,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KWL",
    To:"HGH",
    Distance:1164.31,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"HGH",
    Distance:1164.31,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"HGH",
    Distance:1164.31,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"HGH",
    Distance:1164.31,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"HKG",
    Distance:510.024,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"KWL",
    To:"HKG",
    Distance:510.024,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"KWL",
    To:"HKG",
    Distance:510.024,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"ICN",
    Distance:2064.13,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"ICN",
    Distance:2064.13,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"INC",
    Distance:1522.73,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"KMG",
    Distance:734.941,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KWL",
    To:"KMG",
    Distance:734.941,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"KMG",
    Distance:734.941,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"KUL",
    Distance:2653.2,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"KWL",
    To:"KWE",
    Distance:355.691,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KWL",
    To:"KWE",
    Distance:355.691,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"KWL",
    To:"LHW",
    Distance:1357.77,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KWL",
    To:"LJG",
    Distance:996.649,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KWL",
    To:"NGB",
    Distance:1236.63,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWL",
    To:"NGB",
    Distance:1236.63,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"NGB",
    Distance:1236.63,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KWL",
    To:"NGB",
    Distance:1236.63,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"NKG",
    Distance:1126.06,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWL",
    To:"NKG",
    Distance:1126.06,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"NKG",
    Distance:1126.06,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"NKG",
    Distance:1126.06,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"NNG",
    Distance:346.718,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"NNG",
    Distance:346.718,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"PEK",
    Distance:1761.17,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWL",
    To:"PEK",
    Distance:1761.17,
    Airport:"Canadian National Airways"
}),
new Routes(
{
    From:"KWL",
    To:"PEK",
    Distance:1761.17,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"PEK",
    Distance:1761.17,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"PEK",
    Distance:1761.17,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"PUS",
    Distance:2121.63,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"PVG",
    Distance:1326.95,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWL",
    To:"PVG",
    Distance:1326.95,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"PVG",
    Distance:1326.95,
    Airport:"China SSS"
}),
new Routes(
{
    From:"KWL",
    To:"PVG",
    Distance:1326.95,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"PVG",
    Distance:1326.95,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"PVG",
    Distance:1326.95,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"PVG",
    Distance:1326.95,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"SHA",
    Distance:1290.19,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"SHA",
    Distance:1290.19,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"SHE",
    Distance:2173.01,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"SJW",
    Distance:1517.2,
    Airport:"China SSS"
}),
new Routes(
{
    From:"KWL",
    To:"SJW",
    Distance:1517.2,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"SWA",
    Distance:702.85,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"SYX",
    Distance:771.652,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"SZX",
    Distance:478.662,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWL",
    To:"SZX",
    Distance:478.662,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"SZX",
    Distance:478.662,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"TNA",
    Distance:1462.53,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"TNA",
    Distance:1462.53,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KWL",
    To:"TPE",
    Distance:1126.48,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"TPE",
    Distance:1126.48,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"KWL",
    To:"TSN",
    Distance:1690.79,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"KWL",
    To:"TYN",
    Distance:1414.43,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"TYN",
    Distance:1414.43,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KWL",
    To:"WNZ",
    Distance:1115.86,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"WUH",
    Distance:741.8,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"XIY",
    Distance:1033.68,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWL",
    To:"XIY",
    Distance:1033.68,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KWL",
    To:"XIY",
    Distance:1033.68,
    Airport:"Caucasus Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"XIY",
    Distance:1033.68,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"XIY",
    Distance:1033.68,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"XIY",
    Distance:1033.68,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KWL",
    To:"XMN",
    Distance:819.233,
    Airport:"Air China"
}),
new Routes(
{
    From:"KWL",
    To:"XMN",
    Distance:819.233,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"KWL",
    To:"XMN",
    Distance:819.233,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"XMN",
    Distance:819.233,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"KWL",
    To:"XMN",
    Distance:819.233,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"XMN",
    Distance:819.233,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"KWL",
    To:"ZUH",
    Distance:493.017,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"KWM",
    To:"CNS",
    Distance:455.052,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"KWM",
    To:"EDR",
    Distance:67.2322,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"KWN",
    To:"BET",
    Distance:113.951,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"KWN",
    To:"BET",
    Distance:113.951,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KWN",
    To:"EEK",
    Distance:52.1781,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"KWN",
    To:"TOG",
    Distance:113.2,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KWT",
    To:"BET",
    Distance:21.4364,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KYA",
    To:"IST",
    Distance:463.117,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KYA",
    To:"SAW",
    Distance:428.198,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"KYA",
    To:"SAW",
    Distance:428.198,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KYP",
    To:"RGN",
    Distance:392.188,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"KYU",
    To:"FAI",
    Distance:466.28,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"KYU",
    To:"GAL",
    Distance:40.627,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"KYZ",
    To:"IKT",
    Distance:686.942,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"KZN",
    To:"AER",
    Distance:1506.82,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"KZN",
    To:"ALA",
    Distance:2399.06,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"KZN",
    To:"ASF",
    Distance:1040.43,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"KZN",
    To:"AYT",
    Distance:2501.89,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"KZN",
    To:"CEK",
    Distance:770.508,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"KZN",
    To:"DME",
    Distance:715.665,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"KZN",
    To:"DME",
    Distance:715.665,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"KZN",
    To:"DME",
    Distance:715.665,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"KZN",
    To:"DME",
    Distance:715.665,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KZN",
    To:"DWC",
    Distance:3485.85,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"KZN",
    To:"DYU",
    Distance:2388.87,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"KZN",
    To:"DYU",
    Distance:2388.87,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KZN",
    To:"EGO",
    Distance:1008.25,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"KZN",
    To:"FEG",
    Distance:2360.73,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"KZN",
    To:"FRU",
    Distance:2276.25,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"KZN",
    To:"IST",
    Distance:2205.69,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KZN",
    To:"LBD",
    Distance:2272.75,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"KZN",
    To:"LBD",
    Distance:2272.75,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"KZN",
    To:"LED",
    Distance:1216.85,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"KZN",
    To:"LED",
    Distance:1216.85,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KZN",
    To:"LED",
    Distance:1216.85,
    Airport:"Rossiya-Russian Airlines"
}),
new Routes(
{
    From:"KZN",
    To:"OSS",
    Distance:2392.26,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"KZN",
    To:"SHJ",
    Distance:3404.73,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"KZN",
    To:"SKD",
    Distance:2196.99,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"KZN",
    To:"SVO",
    Distance:741.923,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"KZN",
    To:"SVX",
    Distance:723.524,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"KZN",
    To:"TAS",
    Distance:2157.78,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"KZN",
    To:"UFA",
    Distance:435.51,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"KZO",
    To:"ALA",
    Distance:926.884,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"KZO",
    To:"KGF",
    Distance:803.457,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"KZO",
    To:"SCO",
    Distance:1156.47,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"KZO",
    To:"TSE",
    Distance:827.004,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"KZR",
    To:"IST",
    Distance:235.722,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"KZS",
    To:"RHO",
    Distance:136.27,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"KZS",
    To:"RHO",
    Distance:136.27,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"ADD",
    Distance:3456.99,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"LAD",
    To:"ADD",
    Distance:3456.99,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"AMS",
    Distance:6849.25,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"BZV",
    Distance:558.79,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"CAB",
    Distance:380.452,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"CBT",
    Distance:403.586,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"CDG",
    Distance:6519.11,
    Airport:"Air France"
}),
new Routes(
{
    From:"LAD",
    To:"CMN",
    Distance:5185.86,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"LAD",
    To:"CPT",
    Distance:2845.24,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"DXB",
    Distance:5931.49,
    Airport:"Emirates"
}),
new Routes(
{
    From:"LAD",
    To:"DXB",
    Distance:5931.49,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"FIH",
    Distance:554.145,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LAD",
    To:"FIH",
    Distance:554.145,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"FIH",
    Distance:554.145,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LAD",
    To:"FIH",
    Distance:554.145,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"FRA",
    Distance:6563.48,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LAD",
    To:"GIG",
    Distance:6199.63,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"GRU",
    Distance:6533.8,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"HAV",
    Distance:10963.9,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"HRE",
    Distance:2177.18,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"JNB",
    Distance:2490.26,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"LAD",
    To:"JNB",
    Distance:2490.26,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"LHR",
    Distance:6836.56,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LAD",
    To:"LHR",
    Distance:6836.56,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"LIS",
    Distance:5780.68,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"LIS",
    Distance:5780.68,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LAD",
    To:"LUO",
    Distance:797.76,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"MAD",
    Distance:5752.27,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"MEG",
    Distance:346.244,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"MPM",
    Distance:2787.06,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"LAD",
    To:"MSZ",
    Distance:721.652,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"NBO",
    Distance:2753.17,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"LAD",
    To:"NOV",
    Distance:518.881,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"OPO",
    Distance:6005.25,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"PEK",
    Distance:11774.2,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"SDD",
    Distance:675.584,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"SPP",
    Distance:808.924,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"SSY",
    Distance:308.836,
    Airport:"Cosmic Air"
}),
new Routes(
{
    From:"LAD",
    To:"SVP",
    Distance:566.018,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"SZA",
    Distance:316.652,
    Airport:"Cosmic Air"
}),
new Routes(
{
    From:"LAD",
    To:"SZA",
    Distance:316.652,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"TMS",
    Distance:1255.5,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"VHC",
    Distance:795.575,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"VPE",
    Distance:948.081,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAD",
    To:"WDH",
    Distance:1581.28,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"LAD",
    To:"WDH",
    Distance:1581.28,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LAE",
    To:"DAU",
    Distance:478.024,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"LAE",
    To:"GKA",
    Distance:157.142,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"LAE",
    To:"HGU",
    Distance:281.081,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"LAE",
    To:"HKN",
    Distance:425.036,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"LAE",
    To:"HKN",
    Distance:425.036,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"LAE",
    To:"MAG",
    Distance:183.615,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"LAE",
    To:"MAS",
    Distance:507.192,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"LAE",
    To:"PNP",
    Distance:303.583,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"LAE",
    To:"POM",
    Distance:324.117,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"LAE",
    To:"POM",
    Distance:324.117,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"LAE",
    To:"RAB",
    Distance:673.091,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"LAI",
    To:"ORY",
    Distance:427.507,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LAM",
    To:"ABQ",
    Distance:98.2981,
    Airport:"Pacific Wings"
}),
new Routes(
{
    From:"LAN",
    To:"ATL",
    Distance:1016.64,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAN",
    To:"ATL",
    Distance:1016.64,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"LAN",
    To:"DCA",
    Distance:770.407,
    Airport:"Sun Country Airlines"
}),
new Routes(
{
    From:"LAN",
    To:"DTW",
    Distance:119.161,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAN",
    To:"MSP",
    Distance:730.595,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAN",
    To:"MSP",
    Distance:730.595,
    Airport:"Sun Country Airlines"
}),
new Routes(
{
    From:"LAN",
    To:"ORD",
    Distance:286.631,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAN",
    To:"SFB",
    Distance:1585.53,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAO",
    To:"MNL",
    Distance:411.332,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"LAO",
    To:"MNL",
    Distance:411.332,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"LAP",
    To:"CUL",
    Distance:302.325,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"LAP",
    To:"GDL",
    Distance:825.723,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LAP",
    To:"GDL",
    Distance:825.723,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"LAP",
    To:"GDL",
    Distance:825.723,
    Airport:"Volaris"
}),
new Routes(
{
    From:"LAP",
    To:"MEX",
    Distance:1274.24,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LAP",
    To:"MEX",
    Distance:1274.24,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"LAP",
    To:"MEX",
    Distance:1274.24,
    Airport:"Volaris"
}),
new Routes(
{
    From:"LAP",
    To:"MTY",
    Distance:1051.1,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"LAP",
    To:"MZT",
    Distance:429.454,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"LAP",
    To:"TIJ",
    Distance:1141.76,
    Airport:"Volaris"
}),
new Routes(
{
    From:"LAQ",
    To:"TIP",
    Distance:823.568,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"LAQ",
    To:"TUN",
    Distance:1161.69,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"LAQ",
    To:"TUN",
    Distance:1161.69,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"LAR",
    To:"DEN",
    Distance:182.119,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"ABQ",
    Distance:781.121,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"ALB",
    Distance:3591.54,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"AMA",
    Distance:1217.75,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"ANC",
    Distance:3703.49,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"ATL",
    Distance:2804.85,
    Airport:"Air France"
}),
new Routes(
{
    From:"LAS",
    To:"ATL",
    Distance:2804.85,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"ATL",
    Distance:2804.85,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LAS",
    To:"ATL",
    Distance:2804.85,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"ATL",
    Distance:2804.85,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"ATL",
    Distance:2804.85,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"ATL",
    Distance:2804.85,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LAS",
    To:"ATW",
    Distance:2426.16,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"AUS",
    Distance:1751.14,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"AUS",
    Distance:1751.14,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"AUS",
    Distance:1751.14,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"AZA",
    Distance:444.066,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"BDL",
    Distance:3688.33,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"BHM",
    Distance:2598.16,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"BIL",
    Distance:1215.09,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"BIS",
    Distance:1684.46,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"BLI",
    Distance:1536.23,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"BLI",
    Distance:1536.23,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"BNA",
    Distance:2548.89,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"BOI",
    Distance:837.202,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"BOI",
    Distance:837.202,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"BOS",
    Distance:3822.69,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"BOS",
    Distance:3822.69,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LAS",
    To:"BUF",
    Distance:3189.48,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"BUR",
    Distance:358.679,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"BUR",
    Distance:358.679,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"BWI",
    Distance:3381.14,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"BWI",
    Distance:3381.14,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"BWI",
    Distance:3381.14,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"BZN",
    Distance:1128.88,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"CID",
    Distance:2118.67,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"CLE",
    Distance:2929.44,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"CLE",
    Distance:2929.44,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"CLT",
    Distance:3076.61,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"CLT",
    Distance:3076.61,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAS",
    To:"CMH",
    Distance:2842.81,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"COS",
    Distance:970.527,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"CPR",
    Distance:1062.9,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"CVG",
    Distance:2694.4,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"DCA",
    Distance:3353.6,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"DCA",
    Distance:3353.6,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAS",
    To:"DEN",
    Distance:1009.37,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"DEN",
    Distance:1009.37,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"DEN",
    Distance:1009.37,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"DEN",
    Distance:1009.37,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"DEN",
    Distance:1009.37,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"DFW",
    Distance:1694.82,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"DFW",
    Distance:1694.82,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"DFW",
    Distance:1694.82,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAS",
    To:"DLH",
    Distance:2243.77,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"DSM",
    Distance:1952.22,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"DSM",
    Distance:1952.22,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"DTW",
    Distance:2808.04,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"DTW",
    Distance:2808.04,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"DTW",
    Distance:2808.04,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"ELP",
    Distance:937.971,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"EUG",
    Distance:1125.75,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"EWR",
    Distance:3576.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"FAR",
    Distance:1937.22,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"FAT",
    Distance:415.725,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"FAT",
    Distance:415.725,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"FCA",
    Distance:1361.94,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"FLL",
    Distance:3492.12,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"FLL",
    Distance:3492.12,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"FNT",
    Distance:2782.55,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"FRA",
    Distance:8962.72,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LAS",
    To:"FSD",
    Distance:1774.14,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"GDL",
    Distance:2078.52,
    Airport:"Volaris"
}),
new Routes(
{
    From:"LAS",
    To:"GEG",
    Distance:1298.07,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"GFK",
    Distance:1977.9,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"GJT",
    Distance:674.368,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"GRI",
    Distance:1559.6,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"GRR",
    Distance:2637.49,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"GTF",
    Distance:1305.61,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"HNL",
    Distance:4440.41,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"HNL",
    Distance:4440.41,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"HOU",
    Distance:1984.68,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"HOU",
    Distance:1984.68,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"IAD",
    Distance:3316.47,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"IAH",
    Distance:1962.8,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"IAH",
    Distance:1962.8,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"ICN",
    Distance:9668.48,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"ICN",
    Distance:9668.48,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"LAS",
    To:"ICT",
    Distance:1583.57,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"ICT",
    Distance:1583.57,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"IDA",
    Distance:867.408,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"IND",
    Distance:2552.88,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"IND",
    Distance:2552.88,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"JAX",
    Distance:3155.81,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"JFK",
    Distance:3609.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"JFK",
    Distance:3609.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"JFK",
    Distance:3609.3,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"LAS",
    To:"JFK",
    Distance:3609.3,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"JFK",
    Distance:3609.3,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LAS",
    To:"JFK",
    Distance:3609.3,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"LAS",
    To:"JFK",
    Distance:3609.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAS",
    To:"JFK",
    Distance:3609.3,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"LAS",
    To:"LAX",
    Distance:379.977,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"LAX",
    Distance:379.977,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"LAX",
    Distance:379.977,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"LAX",
    Distance:379.977,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"LAX",
    Distance:379.977,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"LAX",
    Distance:379.977,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAS",
    To:"LAX",
    Distance:379.977,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"LAX",
    Distance:379.977,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"LAS",
    To:"LBB",
    Distance:1244.26,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"LGB",
    Distance:371.461,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LAS",
    To:"LGW",
    Distance:8432.75,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"LGW",
    Distance:8432.75,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LAS",
    To:"LGW",
    Distance:8432.75,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"LGW",
    Distance:8432.75,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LAS",
    To:"LGW",
    Distance:8432.75,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LAS",
    To:"LHR",
    Distance:8394.56,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"LHR",
    Distance:8394.56,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LAS",
    To:"LHR",
    Distance:8394.56,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LAS",
    To:"LHR",
    Distance:8394.56,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"LIT",
    Distance:2078.63,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"LRD",
    Distance:1756.86,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"MAF",
    Distance:1277.94,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"MAN",
    Distance:8166.45,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LAS",
    To:"MAN",
    Distance:8166.45,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"MAN",
    Distance:8166.45,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"MAN",
    Distance:8166.45,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LAS",
    To:"MCI",
    Distance:1829.51,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"MCO",
    Distance:3276.12,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"MCO",
    Distance:3276.12,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"MDW",
    Distance:2441.91,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"MDW",
    Distance:2441.91,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"MEM",
    Distance:2273.87,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"MEX",
    Distance:2427.48,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LAS",
    To:"MEX",
    Distance:2427.48,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"MEX",
    Distance:2427.48,
    Airport:"Volaris"
}),
new Routes(
{
    From:"LAS",
    To:"MFE",
    Distance:1945.79,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"MFR",
    Distance:964.657,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"MIA",
    Distance:3494.18,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"MIA",
    Distance:3494.18,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAS",
    To:"MKE",
    Distance:2446.97,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"MKE",
    Distance:2446.97,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"MLI",
    Distance:2210.06,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"MOT",
    Distance:1766.66,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"MRY",
    Distance:601.85,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"MSO",
    Distance:1208.14,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"MSP",
    Distance:2087.79,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"MSP",
    Distance:2087.79,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"MSP",
    Distance:2087.79,
    Airport:"Sun Country Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"MSY",
    Distance:2409.59,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"MTY",
    Distance:1832.18,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LAS",
    To:"MTY",
    Distance:1832.18,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"MTY",
    Distance:1832.18,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"LAS",
    To:"OAK",
    Distance:654.294,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"OAK",
    Distance:654.294,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"OAK",
    Distance:654.294,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"OKC",
    Distance:1583.86,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"OMA",
    Distance:1764.92,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"ONT",
    Distance:316.723,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"ORD",
    Distance:2431.71,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"ORD",
    Distance:2431.71,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"ORD",
    Distance:2431.71,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAS",
    To:"ORD",
    Distance:2431.71,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"PDX",
    Distance:1227.64,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"PDX",
    Distance:1227.64,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"PDX",
    Distance:1227.64,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"PHL",
    Distance:3494.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"PHL",
    Distance:3494.43,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"PHL",
    Distance:3494.43,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"PHL",
    Distance:3494.43,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAS",
    To:"PHX",
    Distance:410.889,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"PHX",
    Distance:410.889,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"PHX",
    Distance:410.889,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"PHX",
    Distance:410.889,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAS",
    To:"PIA",
    Distance:2268.6,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"PIT",
    Distance:3066.59,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"PSC",
    Distance:1179.73,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"PSP",
    Distance:279.012,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"PTY",
    Distance:4696.22,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"PTY",
    Distance:4696.22,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"PVD",
    Distance:3794.47,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"RAP",
    Distance:1355.35,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"RDU",
    Distance:3252.84,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"RDU",
    Distance:3252.84,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"RDU",
    Distance:3252.84,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"RFD",
    Distance:2337.25,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"RNO",
    Distance:555.778,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"RNO",
    Distance:555.778,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"RNO",
    Distance:555.778,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"SAN",
    Distance:416.39,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"SAN",
    Distance:416.39,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"SAN",
    Distance:416.39,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"SAT",
    Distance:1717.49,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"SAT",
    Distance:1717.49,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"SBN",
    Distance:2559.67,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"SCK",
    Distance:576.827,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"SDF",
    Distance:2607.29,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"SEA",
    Distance:1395.12,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"SEA",
    Distance:1395.12,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"SEA",
    Distance:1395.12,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"SEA",
    Distance:1395.12,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"SFO",
    Distance:664.861,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"SFO",
    Distance:664.861,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"SFO",
    Distance:664.861,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"SFO",
    Distance:664.861,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"LAS",
    To:"SGF",
    Distance:1941.28,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"SHV",
    Distance:1996.77,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"SJC",
    Distance:620.457,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"SLC",
    Distance:591.961,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"SLC",
    Distance:591.961,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"SLC",
    Distance:591.961,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"SMF",
    Distance:638.648,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"SMF",
    Distance:638.648,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"SMX",
    Distance:497.836,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"SNA",
    Distance:364.466,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"SNA",
    Distance:364.466,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"STL",
    Distance:2201.89,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"TLC",
    Distance:2405.49,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"LAS",
    To:"TPA",
    Distance:3187.47,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"TPA",
    Distance:3187.47,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"TUL",
    Distance:1727.11,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"TUS",
    Distance:586.922,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAS",
    To:"TUS",
    Distance:586.922,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"XNA",
    Distance:1867.42,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAS",
    To:"YEG",
    Distance:1919.76,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"YEG",
    Distance:1919.76,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LAS",
    To:"YQR",
    Distance:1803.65,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LAS",
    To:"YUL",
    Distance:3595.96,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LAS",
    To:"YUL",
    Distance:3595.96,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LAS",
    To:"YVR",
    Distance:1597.19,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LAS",
    To:"YVR",
    Distance:1597.19,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"YVR",
    Distance:1597.19,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"YVR",
    Distance:1597.19,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LAS",
    To:"YWG",
    Distance:2107.56,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LAS",
    To:"YXE",
    Distance:1909.07,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LAS",
    To:"YYC",
    Distance:1674.12,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LAS",
    To:"YYC",
    Distance:1674.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"YYC",
    Distance:1674.12,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"YYC",
    Distance:1674.12,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LAS",
    To:"YYJ",
    Distance:1551.73,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LAS",
    To:"YYZ",
    Distance:3120.34,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LAS",
    To:"YYZ",
    Distance:3120.34,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAS",
    To:"YYZ",
    Distance:3120.34,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAS",
    To:"YYZ",
    Distance:3120.34,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LAS",
    To:"ZRH",
    Distance:9171.92,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LAU",
    To:"MYD",
    Distance:141.142,
    Airport:"Flightline"
}),
new Routes(
{
    From:"LAU",
    To:"MYD",
    Distance:141.142,
    Airport:"Fly540"
}),
new Routes(
{
    From:"LAU",
    To:"WIL",
    Distance:467.088,
    Airport:"Fly Air"
}),
new Routes(
{
    From:"LAW",
    To:"DFW",
    Distance:225.322,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAW",
    To:"DFW",
    Distance:225.322,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"ABQ",
    Distance:1087.56,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ABQ",
    Distance:1087.56,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ABQ",
    Distance:1087.56,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ABQ",
    Distance:1087.56,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"ABQ",
    Distance:1087.56,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"AGU",
    Distance:2081.83,
    Airport:"Volaris"
}),
new Routes(
{
    From:"LAX",
    To:"AKL",
    Distance:10486.6,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"LAX",
    To:"AKL",
    Distance:10486.6,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"AKL",
    Distance:10486.6,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"AMS",
    Distance:8955.95,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"AMS",
    Distance:8955.95,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ANC",
    Distance:3770.81,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ANC",
    Distance:3770.81,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ARN",
    Distance:8863.03,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LAX",
    To:"ASE",
    Distance:1184.51,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ATL",
    Distance:3125.79,
    Airport:"Air France"
}),
new Routes(
{
    From:"LAX",
    To:"ATL",
    Distance:3125.79,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAX",
    To:"ATL",
    Distance:3125.79,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ATL",
    Distance:3125.79,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ATL",
    Distance:3125.79,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"ATL",
    Distance:3125.79,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ATL",
    Distance:3125.79,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ATL",
    Distance:3125.79,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LAX",
    To:"ATL",
    Distance:3125.79,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"LAX",
    To:"AUS",
    Distance:1994.36,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"AUS",
    Distance:1994.36,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"AUS",
    Distance:1994.36,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"AUS",
    Distance:1994.36,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"AUS",
    Distance:1994.36,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"BDL",
    Distance:4057.33,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"BDL",
    Distance:4057.33,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"BDL",
    Distance:4057.33,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"BFL",
    Distance:176.087,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"BJX",
    Distance:2199.16,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"LAX",
    To:"BJX",
    Distance:2199.16,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"BJX",
    Distance:2199.16,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"BLI",
    Distance:1686.17,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAX",
    To:"BNA",
    Distance:2886.33,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"BNA",
    Distance:2886.33,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"BNA",
    Distance:2886.33,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"BNA",
    Distance:2886.33,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"BNA",
    Distance:2886.33,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"BNE",
    Distance:11533.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"BNE",
    Distance:11533.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"BNE",
    Distance:11533.3,
    Airport:"Qantas"
}),
new Routes(
{
    From:"LAX",
    To:"BNE",
    Distance:11533.3,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"LAX",
    To:"BOI",
    Distance:1086.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"BOS",
    Distance:4193.04,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"BOS",
    Distance:4193.04,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"BOS",
    Distance:4193.04,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"BOS",
    Distance:4193.04,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LAX",
    To:"BOS",
    Distance:4193.04,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"BOS",
    Distance:4193.04,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"BOS",
    Distance:4193.04,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"LAX",
    To:"BWI",
    Distance:3739.92,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"BWI",
    Distance:3739.92,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"BZE",
    Distance:3502.78,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"CAN",
    Distance:11618.4,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"CAN",
    Distance:11618.4,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"CDG",
    Distance:9102.51,
    Airport:"Air France"
}),
new Routes(
{
    From:"LAX",
    To:"CDG",
    Distance:9102.51,
    Airport:"Air Tahiti Nui"
}),
new Routes(
{
    From:"LAX",
    To:"CDG",
    Distance:9102.51,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LAX",
    To:"CDG",
    Distance:9102.51,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"CLD",
    Distance:150.364,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"CLE",
    Distance:3296.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"CLT",
    Distance:3412.54,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"CLT",
    Distance:3412.54,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"CMH",
    Distance:3204.07,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"CMH",
    Distance:3204.07,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"CMH",
    Distance:3204.07,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"CMH",
    Distance:3204.07,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"COS",
    Distance:1339.24,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"CPH",
    Distance:9028.53,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LAX",
    To:"CUN",
    Distance:3406.63,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LAX",
    To:"CUN",
    Distance:3406.63,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"CUN",
    Distance:3406.63,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"CUN",
    Distance:3406.63,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"LAX",
    To:"CVG",
    Distance:3050.93,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"DCA",
    Distance:3710.9,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"DCA",
    Distance:3710.9,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"DCA",
    Distance:3710.9,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"DCA",
    Distance:3710.9,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"DEN",
    Distance:1385.13,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAX",
    To:"DEN",
    Distance:1385.13,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"DEN",
    Distance:1385.13,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"DEN",
    Distance:1385.13,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"DEN",
    Distance:1385.13,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"DEN",
    Distance:1385.13,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"DEN",
    Distance:1385.13,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"DFW",
    Distance:1983.18,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"DFW",
    Distance:1983.18,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"DFW",
    Distance:1983.18,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"DFW",
    Distance:1983.18,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"DFW",
    Distance:1983.18,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"DFW",
    Distance:1983.18,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"LAX",
    To:"DGO",
    Distance:1732.69,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"DTW",
    Distance:3178.04,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"DTW",
    Distance:3178.04,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"DUS",
    Distance:9133.12,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LAX",
    To:"DUS",
    Distance:9133.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"DXB",
    Distance:13400.1,
    Airport:"Emirates"
}),
new Routes(
{
    From:"LAX",
    To:"DXB",
    Distance:13400.1,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LAX",
    To:"ELP",
    Distance:1147.58,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ELP",
    Distance:1147.58,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ELP",
    Distance:1147.58,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ELP",
    Distance:1147.58,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"EUG",
    Distance:1205.25,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAX",
    To:"EUG",
    Distance:1205.25,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"EUG",
    Distance:1205.25,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"EWR",
    Distance:3941.02,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"EWR",
    Distance:3941.02,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"LAX",
    To:"FAT",
    Distance:336.73,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"FAT",
    Distance:336.73,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"FAT",
    Distance:336.73,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"FAT",
    Distance:336.73,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"FCO",
    Distance:10203.3,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LAX",
    To:"FCO",
    Distance:10203.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"FLL",
    Distance:3763.23,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LAX",
    To:"FLL",
    Distance:3763.23,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"FLL",
    Distance:3763.23,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"LAX",
    To:"FRA",
    Distance:9321.25,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LAX",
    To:"FRA",
    Distance:9321.25,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"GDL",
    Distance:2105.68,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LAX",
    To:"GDL",
    Distance:2105.68,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"LAX",
    To:"GDL",
    Distance:2105.68,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"GDL",
    Distance:2105.68,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"GDL",
    Distance:2105.68,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"GDL",
    Distance:2105.68,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"GDL",
    Distance:2105.68,
    Airport:"Volaris"
}),
new Routes(
{
    From:"LAX",
    To:"GEG",
    Distance:1522.6,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"GRU",
    Distance:9918.63,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"GRU",
    Distance:9918.63,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"LAX",
    To:"GRU",
    Distance:9918.63,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"GUA",
    Distance:3531.5,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LAX",
    To:"GUA",
    Distance:3531.5,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"GUA",
    Distance:3531.5,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"GUA",
    Distance:3531.5,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"HKG",
    Distance:11664.5,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"HKG",
    Distance:11664.5,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"LAX",
    To:"HMO",
    Distance:881.129,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LAX",
    To:"HMO",
    Distance:881.129,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"HND",
    Distance:8812.41,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"LAX",
    To:"HND",
    Distance:8812.41,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"HND",
    Distance:8812.41,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"HNL",
    Distance:4108.16,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"HNL",
    Distance:4108.16,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAX",
    To:"HNL",
    Distance:4108.16,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"HNL",
    Distance:4108.16,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"HNL",
    Distance:4108.16,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"HNL",
    Distance:4108.16,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"HNL",
    Distance:4108.16,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"HOU",
    Distance:2232.4,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAX",
    To:"HOU",
    Distance:2232.4,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"IAD",
    Distance:3674.03,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"IAD",
    Distance:3674.03,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"IAD",
    Distance:3674.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"IAD",
    Distance:3674.03,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"LAX",
    To:"IAH",
    Distance:2215.08,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"IAH",
    Distance:2215.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"IAH",
    Distance:2215.08,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"IAH",
    Distance:2215.08,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"IAH",
    Distance:2215.08,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ICN",
    Distance:9625.5,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ICN",
    Distance:9625.5,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"ICN",
    Distance:9625.5,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"LAX",
    To:"ICN",
    Distance:9625.5,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"LAX",
    To:"ICN",
    Distance:9625.5,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ICT",
    Distance:1931.75,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"IGM",
    Distance:434.5,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"IGM",
    Distance:434.5,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"IGM",
    Distance:434.5,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"IND",
    Distance:2912.88,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"IND",
    Distance:2912.88,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"IND",
    Distance:2912.88,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"IND",
    Distance:2912.88,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"IST",
    Distance:11034.2,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"IST",
    Distance:11034.2,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"ITO",
    Distance:3937.28,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"JED",
    Distance:13389.8,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"JFK",
    Distance:3974.2,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"JFK",
    Distance:3974.2,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"JFK",
    Distance:3974.2,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"JFK",
    Distance:3974.2,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LAX",
    To:"JFK",
    Distance:3974.2,
    Airport:"Qantas"
}),
new Routes(
{
    From:"LAX",
    To:"JFK",
    Distance:3974.2,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"JFK",
    Distance:3974.2,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"JFK",
    Distance:3974.2,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"LAX",
    To:"KOA",
    Distance:4025.63,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"KOA",
    Distance:4025.63,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"KOA",
    Distance:4025.63,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"KOA",
    Distance:4025.63,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"KOA",
    Distance:4025.63,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"KOA",
    Distance:4025.63,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"LAS",
    Distance:379.977,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAX",
    To:"LAS",
    Distance:379.977,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"LAS",
    Distance:379.977,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"LAS",
    Distance:379.977,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"LAS",
    Distance:379.977,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"LAS",
    Distance:379.977,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"LAS",
    Distance:379.977,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"LAS",
    Distance:379.977,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"LAX",
    To:"LHR",
    Distance:8759.18,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"LAX",
    To:"LHR",
    Distance:8759.18,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"LHR",
    Distance:8759.18,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LAX",
    To:"LHR",
    Distance:8759.18,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"LHR",
    Distance:8759.18,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LAX",
    To:"LHR",
    Distance:8759.18,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"LHR",
    Distance:8759.18,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LAX",
    To:"LHR",
    Distance:8759.18,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"LHR",
    Distance:8759.18,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"LHR",
    Distance:8759.18,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"LHR",
    Distance:8759.18,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LAX",
    To:"LIH",
    Distance:4203.01,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"LIH",
    Distance:4203.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"LIH",
    Distance:4203.01,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"LIH",
    Distance:4203.01,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"LIH",
    Distance:4203.01,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"LIM",
    Distance:6720.6,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"LIM",
    Distance:6720.6,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"LIM",
    Distance:6720.6,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"LAX",
    To:"LIM",
    Distance:6720.6,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"LIM",
    Distance:6720.6,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"LIR",
    Distance:4229.62,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"LTO",
    Distance:1114.89,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MAD",
    Distance:9385.15,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MAD",
    Distance:9385.15,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LAX",
    To:"MAD",
    Distance:9385.15,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LAX",
    To:"MAD",
    Distance:9385.15,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MCE",
    Distance:417.518,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MCI",
    Distance:2189.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"MCI",
    Distance:2189.66,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MCO",
    Distance:3562.32,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MCO",
    Distance:3562.32,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MCO",
    Distance:3562.32,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"MCO",
    Distance:3562.32,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"MCO",
    Distance:3562.32,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MCO",
    Distance:3562.32,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"LAX",
    To:"MDW",
    Distance:2811.54,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAX",
    To:"MDW",
    Distance:2811.54,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MEL",
    Distance:12757.9,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MEL",
    Distance:12757.9,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"MEL",
    Distance:12757.9,
    Airport:"Qantas"
}),
new Routes(
{
    From:"LAX",
    To:"MEL",
    Distance:12757.9,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"LAX",
    To:"MEM",
    Distance:2599.72,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"MEX",
    Distance:2500.01,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LAX",
    To:"MEX",
    Distance:2500.01,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"LAX",
    To:"MEX",
    Distance:2500.01,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MEX",
    Distance:2500.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MEX",
    Distance:2500.01,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"MEX",
    Distance:2500.01,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MEX",
    Distance:2500.01,
    Airport:"Volaris"
}),
new Routes(
{
    From:"LAX",
    To:"MFR",
    Distance:1015.2,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MFR",
    Distance:1015.2,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAX",
    To:"MFR",
    Distance:1015.2,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MIA",
    Distance:3762.64,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MIA",
    Distance:3762.64,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MIA",
    Distance:3762.64,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"MIA",
    Distance:3762.64,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"MKE",
    Distance:2820.6,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAX",
    To:"MKE",
    Distance:2820.6,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MLM",
    Distance:2322.84,
    Airport:"Volaris"
}),
new Routes(
{
    From:"LAX",
    To:"MMH",
    Distance:411.195,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MMH",
    Distance:411.195,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MNL",
    Distance:11740.2,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MRY",
    Distance:428.561,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MRY",
    Distance:428.561,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MRY",
    Distance:428.561,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"MRY",
    Distance:428.561,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MSP",
    Distance:2467.3,
    Airport:"Air France"
}),
new Routes(
{
    From:"LAX",
    To:"MSP",
    Distance:2467.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"MSP",
    Distance:2467.3,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MSP",
    Distance:2467.3,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MSP",
    Distance:2467.3,
    Airport:"Sun Country Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MSP",
    Distance:2467.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MSY",
    Distance:2682.86,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"LAX",
    To:"MSY",
    Distance:2682.86,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MSY",
    Distance:2682.86,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MSY",
    Distance:2682.86,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MSY",
    Distance:2682.86,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"MSY",
    Distance:2682.86,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MSY",
    Distance:2682.86,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MSY",
    Distance:2682.86,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MSY",
    Distance:2682.86,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"LAX",
    To:"MUC",
    Distance:9615.8,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LAX",
    To:"MUC",
    Distance:9615.8,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"MZT",
    Distance:1683.6,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LAX",
    To:"MZT",
    Distance:1683.6,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"NAN",
    Distance:8891.81,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"LAX",
    To:"NAN",
    Distance:8891.81,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"LAX",
    To:"NAN",
    Distance:8891.81,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"NAN",
    Distance:8891.81,
    Airport:"Qantas"
}),
new Routes(
{
    From:"LAX",
    To:"NRT",
    Distance:8753.78,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"LAX",
    To:"NRT",
    Distance:8753.78,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"LAX",
    To:"NRT",
    Distance:8753.78,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"NRT",
    Distance:8753.78,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"NRT",
    Distance:8753.78,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"NRT",
    Distance:8753.78,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"NRT",
    Distance:8753.78,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"NRT",
    Distance:8753.78,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"NRT",
    Distance:8753.78,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"OAK",
    Distance:542.734,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAX",
    To:"OAK",
    Distance:542.734,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"OAK",
    Distance:542.734,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"OGG",
    Distance:3995.45,
    Airport:"Air France"
}),
new Routes(
{
    From:"LAX",
    To:"OGG",
    Distance:3995.45,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"OGG",
    Distance:3995.45,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"OGG",
    Distance:3995.45,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"OGG",
    Distance:3995.45,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"OGG",
    Distance:3995.45,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"OGG",
    Distance:3995.45,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"OGG",
    Distance:3995.45,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"OKC",
    Distance:1906.21,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"OKC",
    Distance:1906.21,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"OKC",
    Distance:1906.21,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"OKC",
    Distance:1906.21,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ORD",
    Distance:2802.12,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ORD",
    Distance:2802.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ORD",
    Distance:2802.12,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ORD",
    Distance:2802.12,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ORD",
    Distance:2802.12,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"ORD",
    Distance:2802.12,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ORD",
    Distance:2802.12,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"LAX",
    To:"PBI",
    Distance:3742.72,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PBI",
    Distance:3742.72,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"PDX",
    Distance:1343.08,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PDX",
    Distance:1343.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PDX",
    Distance:1343.08,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"PDX",
    Distance:1343.08,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PEK",
    Distance:10037.1,
    Airport:"Air China"
}),
new Routes(
{
    From:"LAX",
    To:"PEK",
    Distance:10037.1,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"PEK",
    Distance:10037.1,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PHL",
    Distance:3856.32,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PHL",
    Distance:3856.32,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"PHL",
    Distance:3856.32,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"LAX",
    To:"PHX",
    Distance:594.407,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PHX",
    Distance:594.407,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PHX",
    Distance:594.407,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"PHX",
    Distance:594.407,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PHX",
    Distance:594.407,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"PHX",
    Distance:594.407,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PIT",
    Distance:3430.05,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PIT",
    Distance:3430.05,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PIT",
    Distance:3430.05,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"PIT",
    Distance:3430.05,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PPT",
    Distance:6611.93,
    Airport:"Air France"
}),
new Routes(
{
    From:"LAX",
    To:"PPT",
    Distance:6611.93,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"LAX",
    To:"PPT",
    Distance:6611.93,
    Airport:"Air Tahiti Nui"
}),
new Routes(
{
    From:"LAX",
    To:"PPT",
    Distance:6611.93,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PPT",
    Distance:6611.93,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"PPT",
    Distance:6611.93,
    Airport:"Qantas"
}),
new Routes(
{
    From:"LAX",
    To:"PRC",
    Distance:555.68,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PSP",
    Distance:175.959,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PTY",
    Distance:4845.37,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PTY",
    Distance:4845.37,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PVG",
    Distance:10415.3,
    Airport:"Air China"
}),
new Routes(
{
    From:"LAX",
    To:"PVG",
    Distance:10415.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PVG",
    Distance:10415.3,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PVG",
    Distance:10415.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"PVG",
    Distance:10415.3,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PVG",
    Distance:10415.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"PVG",
    Distance:10415.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PVR",
    Distance:1961.78,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LAX",
    To:"PVR",
    Distance:1961.78,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PVR",
    Distance:1961.78,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"PVR",
    Distance:1961.78,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"PVU",
    Distance:915.208,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LAX",
    To:"PWM",
    Distance:4243.09,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAX",
    To:"RAR",
    Distance:7536.23,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"LAX",
    To:"RAR",
    Distance:7536.23,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"RDM",
    Distance:1170.55,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"RDM",
    Distance:1170.55,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"RDU",
    Distance:3594.54,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"RDU",
    Distance:3594.54,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"RDU",
    Distance:3594.54,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"RDU",
    Distance:3594.54,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"RNO",
    Distance:629.617,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LAX",
    To:"RNO",
    Distance:629.617,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"RNO",
    Distance:629.617,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"RNO",
    Distance:629.617,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"RNO",
    Distance:629.617,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"RNO",
    Distance:629.617,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SAF",
    Distance:1139.57,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SAF",
    Distance:1139.57,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SAF",
    Distance:1139.57,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"SAL",
    Distance:3734.35,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LAX",
    To:"SAL",
    Distance:3734.35,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"SAL",
    Distance:3734.35,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SAN",
    Distance:175.733,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SAN",
    Distance:175.733,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SAN",
    Distance:175.733,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"SAN",
    Distance:175.733,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"SAN",
    Distance:175.733,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SAT",
    Distance:1944.66,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SAT",
    Distance:1944.66,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SBA",
    Distance:142.301,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SBP",
    Distance:250.046,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SEA",
    Distance:1536.91,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SEA",
    Distance:1536.91,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SEA",
    Distance:1536.91,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"SEA",
    Distance:1536.91,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SEA",
    Distance:1536.91,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"LAX",
    To:"SFO",
    Distance:543.173,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SFO",
    Distance:543.173,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SFO",
    Distance:543.173,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"SFO",
    Distance:543.173,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SFO",
    Distance:543.173,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"SFO",
    Distance:543.173,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SFO",
    Distance:543.173,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"LAX",
    To:"SJC",
    Distance:495.724,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SJC",
    Distance:495.724,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"SJC",
    Distance:495.724,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SJC",
    Distance:495.724,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"SJC",
    Distance:495.724,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SJC",
    Distance:495.724,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"LAX",
    To:"SJD",
    Distance:1468.1,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LAX",
    To:"SJD",
    Distance:1468.1,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SJD",
    Distance:1468.1,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SJD",
    Distance:1468.1,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"SJD",
    Distance:1468.1,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SJO",
    Distance:4382.04,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"SLC",
    Distance:949.328,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SLC",
    Distance:949.328,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"SLC",
    Distance:949.328,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SLC",
    Distance:949.328,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"SLC",
    Distance:949.328,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SMF",
    Distance:600.407,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SMF",
    Distance:600.407,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SMF",
    Distance:600.407,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"SMF",
    Distance:600.407,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SMF",
    Distance:600.407,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"SMF",
    Distance:600.407,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SMX",
    Distance:215.932,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"STL",
    Distance:2556.77,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"STL",
    Distance:2556.77,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"STL",
    Distance:2556.77,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"STL",
    Distance:2556.77,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"STS",
    Distance:643.193,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"STS",
    Distance:643.193,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SVO",
    Distance:9757.47,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SVO",
    Distance:9757.47,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"SYD",
    Distance:12061.1,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"LAX",
    To:"SYD",
    Distance:12061.1,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SYD",
    Distance:12061.1,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"SYD",
    Distance:12061.1,
    Airport:"Qantas"
}),
new Routes(
{
    From:"LAX",
    To:"SYD",
    Distance:12061.1,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"SYD",
    Distance:12061.1,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"LAX",
    To:"TLV",
    Distance:12166.6,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"TPA",
    Distance:3466.43,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"TPE",
    Distance:10922.4,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"TPE",
    Distance:10922.4,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"TPE",
    Distance:10922.4,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"LAX",
    To:"TPE",
    Distance:10922.4,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"TUS",
    Distance:724.931,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"TUS",
    Distance:724.931,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"TUS",
    Distance:724.931,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"TUS",
    Distance:724.931,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"TUS",
    Distance:724.931,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"UPN",
    Distance:2287.54,
    Airport:"Volaris"
}),
new Routes(
{
    From:"LAX",
    To:"VIS",
    Distance:278.965,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"VKO",
    Distance:9794.05,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"XNA",
    Distance:2201.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"XNA",
    Distance:2201.89,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"YEG",
    Distance:2187.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"YEG",
    Distance:2187.08,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"YEG",
    Distance:2187.08,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LAX",
    To:"YLW",
    Distance:1782.39,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LAX",
    To:"YLW",
    Distance:1782.39,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"YUL",
    Distance:3972.64,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LAX",
    To:"YUL",
    Distance:3972.64,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"YUM",
    Distance:381.161,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"YVR",
    Distance:1740.89,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LAX",
    To:"YVR",
    Distance:1740.89,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"YVR",
    Distance:1740.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"YVR",
    Distance:1740.89,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"YVR",
    Distance:1740.89,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LAX",
    To:"YYC",
    Distance:1942.04,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LAX",
    To:"YYC",
    Distance:1942.04,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"YYC",
    Distance:1942.04,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"YYC",
    Distance:1942.04,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LAX",
    To:"YYZ",
    Distance:3493.96,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LAX",
    To:"YYZ",
    Distance:3493.96,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"YYZ",
    Distance:3493.96,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LAX",
    To:"YYZ",
    Distance:3493.96,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"YYZ",
    Distance:3493.96,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LAX",
    To:"ZCL",
    Distance:1963.42,
    Airport:"Volaris"
}),
new Routes(
{
    From:"LAX",
    To:"ZIH",
    Distance:2478.75,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LAX",
    To:"ZIH",
    Distance:2478.75,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ZLO",
    Distance:2141.27,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LAX",
    To:"ZLO",
    Distance:2141.27,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LAX",
    To:"ZRH",
    Distance:9534.1,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LAX",
    To:"ZRH",
    Distance:9534.1,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LAZ",
    To:"GNM",
    Distance:125.78,
    Airport:"Abaet"
}),
new Routes(
{
    From:"LBA",
    To:"ABZ",
    Distance:372.485,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"LBA",
    To:"ACE",
    Distance:2935.41,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LBA",
    To:"ACE",
    Distance:2935.41,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"ACE",
    Distance:2935.41,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"AGP",
    Distance:1924.02,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"AGP",
    Distance:1924.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"ALC",
    Distance:1734.86,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"ALC",
    Distance:1734.86,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"AMS",
    Distance:462.463,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LBA",
    To:"AMS",
    Distance:462.463,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"AMS",
    Distance:462.463,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LBA",
    To:"AYT",
    Distance:3115.55,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LBA",
    To:"BCN",
    Distance:1424.93,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LBA",
    To:"BCN",
    Distance:1424.93,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"BGY",
    Distance:1220.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"BHD",
    Distance:286.126,
    Airport:"Flybe"
}),
new Routes(
{
    From:"LBA",
    To:"BJV",
    Distance:2901.45,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LBA",
    To:"BJV",
    Distance:2901.45,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"BUD",
    Distance:1630.53,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"CDG",
    Distance:613.247,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"CFU",
    Distance:2267.2,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"CHQ",
    Distance:2853.46,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"CPH",
    Distance:937.573,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LBA",
    To:"DBV",
    Distance:1927.33,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"DLM",
    Distance:3012.04,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LBA",
    To:"DLM",
    Distance:3012.04,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"DLM",
    Distance:3012.04,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LBA",
    To:"DUB",
    Distance:307.782,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"DUS",
    Distance:636.901,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"FAO",
    Distance:1935.41,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LBA",
    To:"FAO",
    Distance:1935.41,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"FAO",
    Distance:1935.41,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"FCO",
    Distance:1689.8,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"FNC",
    Distance:2640.1,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"FUE",
    Distance:2995.02,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"FUE",
    Distance:2995.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"GDN",
    Distance:1308.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"GLA",
    Distance:284.959,
    Airport:"Flybe"
}),
new Routes(
{
    From:"LBA",
    To:"GRO",
    Distance:1369.99,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"HER",
    Distance:2926.31,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LBA",
    To:"HER",
    Distance:2926.31,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"IBZ",
    Distance:1682.92,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"IBZ",
    Distance:1682.92,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"IBZ",
    Distance:1682.92,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LBA",
    To:"ISB",
    Distance:6095.14,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LBA",
    To:"JER",
    Distance:519.256,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"KGS",
    Distance:2906.73,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"KGS",
    Distance:2906.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"KRK",
    Distance:1521.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"LCA",
    Distance:3452.88,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LBA",
    To:"LCA",
    Distance:3452.88,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"LHR",
    Distance:277.603,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LBA",
    To:"LHR",
    Distance:277.603,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LBA",
    To:"LHR",
    Distance:277.603,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LBA",
    To:"LIG",
    Distance:912.696,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"LPA",
    Distance:3093.42,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"MAH",
    Distance:1618.59,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LBA",
    To:"MAH",
    Distance:1618.59,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"MJV",
    Distance:1790.4,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"MJV",
    Distance:1790.4,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"MLA",
    Distance:2359.89,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"MPL",
    Distance:1215.31,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"NCE",
    Distance:1305.99,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"PFO",
    Distance:3397.86,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"PMI",
    Distance:1625.45,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LBA",
    To:"PMI",
    Distance:1625.45,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"PMI",
    Distance:1625.45,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"PMI",
    Distance:1625.45,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LBA",
    To:"PRG",
    Distance:1164.8,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"PSA",
    Distance:1431.88,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"PSA",
    Distance:1431.88,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"RHO",
    Distance:2996.94,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"SOU",
    Distance:324.857,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"LBA",
    To:"TFS",
    Distance:3117.78,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LBA",
    To:"TFS",
    Distance:3117.78,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"TFS",
    Distance:3117.78,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"TFS",
    Distance:3117.78,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LBA",
    To:"TSF",
    Distance:1346.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBA",
    To:"VCE",
    Distance:1366.83,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBA",
    To:"ZTH",
    Distance:2481.9,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LBB",
    To:"AUS",
    Distance:549.798,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LBB",
    To:"DAL",
    Distance:471.01,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LBB",
    To:"DAL",
    Distance:471.01,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LBB",
    To:"DEN",
    Distance:734.357,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LBB",
    To:"DFW",
    Distance:452.84,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LBB",
    To:"DFW",
    Distance:452.84,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LBB",
    To:"HRL",
    Distance:918.884,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LBB",
    To:"IAH",
    Distance:736.176,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LBB",
    To:"LAS",
    Distance:1244.26,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LBB",
    To:"LAS",
    Distance:1244.26,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LBC",
    To:"BGY",
    Distance:907.091,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBC",
    To:"GDN",
    Distance:508.947,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LBC",
    To:"PMI",
    Distance:1695.37,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBC",
    To:"PSA",
    Distance:1125.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LBD",
    To:"AER",
    Distance:2476.5,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"LBD",
    To:"AER",
    Distance:2476.5,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LBD",
    To:"CEK",
    Distance:1783.28,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"LBD",
    To:"CEK",
    Distance:1783.28,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LBD",
    To:"DME",
    Distance:2873.23,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"LBD",
    To:"DME",
    Distance:2873.23,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"LBD",
    To:"GOJ",
    Distance:2589.62,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LBD",
    To:"HMA",
    Distance:2314.68,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"LBD",
    To:"KJA",
    Distance:2427.6,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"LBD",
    To:"KJA",
    Distance:2427.6,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"LBD",
    To:"KJA",
    Distance:2427.6,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LBD",
    To:"KRR",
    Distance:2538.27,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"LBD",
    To:"KRR",
    Distance:2538.27,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LBD",
    To:"KUF",
    Distance:2082.15,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LBD",
    To:"KZN",
    Distance:2272.75,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"LBD",
    To:"KZN",
    Distance:2272.75,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LBD",
    To:"LED",
    Distance:3477.29,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LBD",
    To:"LED",
    Distance:3477.29,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"LBD",
    To:"LED",
    Distance:3477.29,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"LBD",
    To:"LED",
    Distance:3477.29,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"LBD",
    To:"NJC",
    Distance:2351.84,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"LBD",
    To:"OVB",
    Distance:1903.68,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"LBD",
    To:"OVB",
    Distance:1903.68,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"LBD",
    To:"OVB",
    Distance:1903.68,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"LBD",
    To:"REN",
    Distance:1687.23,
    Airport:"Orenburg Airlines"
}),
new Routes(
{
    From:"LBD",
    To:"REN",
    Distance:1687.23,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"LBD",
    To:"ROV",
    Distance:2506.91,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LBD",
    To:"SGC",
    Distance:2362.87,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"LBD",
    To:"SVX",
    Distance:1947.34,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"LBD",
    To:"SVX",
    Distance:1947.34,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LBD",
    To:"TJM",
    Distance:1913.52,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"LBD",
    To:"UFA",
    Distance:1896.63,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LBD",
    To:"URC",
    Distance:1520.7,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LBE",
    To:"FLL",
    Distance:1580.85,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LBE",
    To:"MCO",
    Distance:1328.72,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LBE",
    To:"MYR",
    Distance:734.675,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LBF",
    To:"DEN",
    Distance:365.415,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"LBJ",
    To:"DPS",
    Distance:519.932,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"LBJ",
    To:"DPS",
    Distance:519.932,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"LBJ",
    To:"ENE",
    Distance:198.873,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"LBJ",
    To:"ENE",
    Distance:198.873,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"LBL",
    To:"DDC",
    Distance:118.776,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"LBL",
    To:"DDC",
    Distance:118.776,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"LBL",
    To:"DDC",
    Distance:118.776,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LBL",
    To:"DEN",
    Distance:450.142,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"LBL",
    To:"DEN",
    Distance:450.142,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"LBL",
    To:"DEN",
    Distance:450.142,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LBP",
    To:"MUR",
    Distance:167.214,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LBS",
    To:"NAN",
    Distance:247.285,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"LBS",
    To:"SUV",
    Distance:193.911,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"LBU",
    To:"BKI",
    Distance:113.43,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LBU",
    To:"KUL",
    Distance:1528.39,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"LBU",
    To:"KUL",
    Distance:1528.39,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LBU",
    To:"MYY",
    Distance:177.308,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LBV",
    To:"ABJ",
    Distance:1574.24,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"LBV",
    To:"ADD",
    Distance:3388.4,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LBV",
    To:"BZV",
    Distance:833.922,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"LBV",
    To:"BZV",
    Distance:833.922,
    Airport:"Pacific East Asia Cargo Airlines"
}),
new Routes(
{
    From:"LBV",
    To:"CDG",
    Distance:5438.8,
    Airport:"Air France"
}),
new Routes(
{
    From:"LBV",
    To:"CMN",
    Distance:4067.41,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"LBV",
    To:"COO",
    Distance:1018.92,
    Airport:"Dennis Sky"
}),
new Routes(
{
    From:"LBV",
    To:"COO",
    Distance:1018.92,
    Airport:"Pacific East Asia Cargo Airlines"
}),
new Routes(
{
    From:"LBV",
    To:"COO",
    Distance:1018.92,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"LBV",
    To:"DLA",
    Distance:395.935,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"LBV",
    To:"DLA",
    Distance:395.935,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"LBV",
    To:"DLA",
    Distance:395.935,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"LBV",
    To:"FIH",
    Distance:859.816,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LBV",
    To:"IST",
    Distance:4911.04,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"LBV",
    To:"JNB",
    Distance:3581.49,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"LBV",
    To:"KGL",
    Distance:2320.13,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"LBV",
    To:"LFW",
    Distance:1105.49,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LBV",
    To:"LOS",
    Distance:958.896,
    Airport:"Dennis Sky"
}),
new Routes(
{
    From:"LBV",
    To:"LOS",
    Distance:958.896,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LBV",
    To:"NSI",
    Distance:433.944,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LBV",
    To:"PNR",
    Distance:647.712,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LBV",
    To:"PNR",
    Distance:647.712,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"LBV",
    To:"PNR",
    Distance:647.712,
    Airport:"Pacific East Asia Cargo Airlines"
}),
new Routes(
{
    From:"LBV",
    To:"SSG",
    Distance:374.815,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"LCA",
    To:"AMM",
    Distance:413.889,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"LCA",
    To:"AMS",
    Distance:2991.62,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"LCA",
    To:"AMS",
    Distance:2991.62,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"ARN",
    Distance:2981.66,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LCA",
    To:"ATH",
    Distance:930.214,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"ATH",
    Distance:930.214,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LCA",
    To:"ATH",
    Distance:930.214,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"LCA",
    To:"ATH",
    Distance:930.214,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"LCA",
    To:"ATH",
    Distance:930.214,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LCA",
    To:"AUH",
    Distance:2332.88,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"LCA",
    To:"AUH",
    Distance:2332.88,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"LCA",
    To:"BAH",
    Distance:1884.58,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"LCA",
    To:"BEG",
    Distance:1581.86,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"LCA",
    To:"BEG",
    Distance:1581.86,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LCA",
    To:"BEY",
    Distance:207.382,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"LCA",
    To:"BEY",
    Distance:207.382,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"BHX",
    Distance:3399.18,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LCA",
    To:"BSL",
    Distance:2580.71,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LCA",
    To:"BUD",
    Distance:1837.35,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LCA",
    To:"CAI",
    Distance:567.983,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"LCA",
    To:"CAI",
    Distance:567.983,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"CDG",
    Distance:2981.35,
    Airport:"Air France"
}),
new Routes(
{
    From:"LCA",
    To:"CDG",
    Distance:2981.35,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"LCA",
    To:"CWL",
    Distance:3463.77,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LCA",
    To:"DME",
    Distance:2306.71,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"DOH",
    Distance:2025.61,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"LCA",
    To:"DOK",
    Distance:1506.53,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"DUS",
    Distance:2815.98,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LCA",
    To:"DXB",
    Distance:2342.6,
    Airport:"Emirates"
}),
new Routes(
{
    From:"LCA",
    To:"EMA",
    Distance:3388.19,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LCA",
    To:"FRA",
    Distance:2637.26,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LCA",
    To:"FRA",
    Distance:2637.26,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"LCA",
    To:"FRA",
    Distance:2637.26,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LCA",
    To:"GLA",
    Distance:3703.58,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LCA",
    To:"HAJ",
    Distance:2719.65,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LCA",
    To:"HER",
    Distance:769.666,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"LCA",
    To:"IEV",
    Distance:1745.48,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"LCA",
    To:"KBP",
    Distance:1734.31,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"KIV",
    Distance:1396.36,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"LCA",
    To:"KRR",
    Distance:1223.83,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"LCA",
    To:"LBA",
    Distance:3452.88,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LCA",
    To:"LBA",
    Distance:3452.88,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LCA",
    To:"LED",
    Distance:2782.27,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"LED",
    Distance:2782.27,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"LGW",
    Distance:3247.45,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LCA",
    To:"LGW",
    Distance:3247.45,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCA",
    To:"LGW",
    Distance:3247.45,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LCA",
    To:"LGW",
    Distance:3247.45,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"LGW",
    Distance:3247.45,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LCA",
    To:"LGW",
    Distance:3247.45,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LCA",
    To:"LGW",
    Distance:3247.45,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LCA",
    To:"LHR",
    Distance:3278.06,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"LHR",
    Distance:3278.06,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCA",
    To:"LHR",
    Distance:3278.06,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"LCA",
    To:"LPL",
    Distance:3503.24,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LCA",
    To:"LTN",
    Distance:3288.11,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LCA",
    To:"LWO",
    Distance:1837.67,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"MAN",
    Distance:3468.53,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LCA",
    To:"MAN",
    Distance:3468.53,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LCA",
    To:"MAN",
    Distance:3468.53,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"MAN",
    Distance:3468.53,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LCA",
    To:"MAN",
    Distance:3468.53,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LCA",
    To:"MLA",
    Distance:1736.86,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"LCA",
    To:"MLA",
    Distance:1736.86,
    Airport:"Emirates"
}),
new Routes(
{
    From:"LCA",
    To:"MSQ",
    Distance:2158.12,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"MUC",
    Distance:2339.51,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"LCA",
    To:"MUC",
    Distance:2339.51,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LCA",
    To:"MXP",
    Distance:2413.18,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LCA",
    To:"ODS",
    Distance:1308.09,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"OSL",
    Distance:3248.04,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LCA",
    To:"OTP",
    Distance:1254.31,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"LCA",
    To:"OTP",
    Distance:1254.31,
    Airport:"Tarom"
}),
new Routes(
{
    From:"LCA",
    To:"OTP",
    Distance:1254.31,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LCA",
    To:"RIX",
    Distance:2557.14,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"LCA",
    To:"SKG",
    Distance:1126.79,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"SKG",
    Distance:1126.79,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"LCA",
    To:"SOF",
    Distance:1239.44,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"LCA",
    To:"SOF",
    Distance:1239.44,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"LCA",
    To:"SOF",
    Distance:1239.44,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LCA",
    To:"SVO",
    Distance:2363.64,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"SVO",
    Distance:2363.64,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"LCA",
    To:"SVX",
    Distance:3174.99,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"SXF",
    Distance:2513.45,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LCA",
    To:"TLV",
    Distance:339.263,
    Airport:"Arkia Israel Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"TLV",
    Distance:339.263,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"LCA",
    To:"TLV",
    Distance:339.263,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"VIE",
    Distance:2036.42,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LCA",
    To:"VIE",
    Distance:2036.42,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"VIE",
    Distance:2036.42,
    Airport:"Niki"
}),
new Routes(
{
    From:"LCA",
    To:"WAW",
    Distance:2169.48,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"LCA",
    To:"ZRH",
    Distance:2505.17,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"LCA",
    To:"ZRH",
    Distance:2505.17,
    Airport:"Helvetic Airways"
}),
new Routes(
{
    From:"LCA",
    To:"ZRH",
    Distance:2505.17,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LCE",
    To:"GCM",
    Distance:703.728,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"LCE",
    To:"GCM",
    Distance:703.728,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"LCE",
    To:"GJA",
    Distance:127.798,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"LCE",
    To:"PEU",
    Distance:333.446,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"LCE",
    To:"RTB",
    Distance:72.9577,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"LCE",
    To:"SAP",
    Distance:119.096,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"LCE",
    To:"TGU",
    Distance:191.035,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"LCE",
    To:"UII",
    Distance:39.0022,
    Airport:"Patriot Airways"
}),
new Routes(
{
    From:"LCG",
    To:"BCN",
    Distance:887.676,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LCG",
    To:"BCN",
    Distance:887.676,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LCG",
    To:"BIO",
    Distance:442.296,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LCG",
    To:"BIO",
    Distance:442.296,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LCG",
    To:"LHR",
    Distance:1085.57,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LCG",
    To:"LHR",
    Distance:1085.57,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LCG",
    To:"LIS",
    Distance:506.688,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LCG",
    To:"MAD",
    Distance:505.863,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"LCG",
    To:"MAD",
    Distance:505.863,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LCG",
    To:"MAD",
    Distance:505.863,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LCG",
    To:"SVQ",
    Distance:687.208,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LCG",
    To:"SVQ",
    Distance:687.208,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LCH",
    To:"DFW",
    Distance:474.996,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LCH",
    To:"DFW",
    Distance:474.996,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LCH",
    To:"IAH",
    Distance:204.46,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LCK",
    To:"PIE",
    Distance:1323.81,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LCK",
    To:"SFB",
    Distance:1236.88,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LCR",
    To:"ACR",
    Distance:69.5753,
    Airport:"SATENA"
}),
new Routes(
{
    From:"LCR",
    To:"LET",
    Distance:514.379,
    Airport:"SATENA"
}),
new Routes(
{
    From:"LCX",
    To:"SHA",
    Distance:760.497,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"LCY",
    To:"ABZ",
    Distance:649.955,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"AGP",
    Distance:1687.85,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"AGP",
    Distance:1687.85,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LCY",
    To:"AMS",
    Distance:335.068,
    Airport:"Air France"
}),
new Routes(
{
    From:"LCY",
    To:"AMS",
    Distance:335.068,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"AMS",
    Distance:335.068,
    Airport:"CityJet"
}),
new Routes(
{
    From:"LCY",
    To:"AMS",
    Distance:335.068,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LCY",
    To:"ANR",
    Distance:307.898,
    Airport:"Air France"
}),
new Routes(
{
    From:"LCY",
    To:"ANR",
    Distance:307.898,
    Airport:"CityJet"
}),
new Routes(
{
    From:"LCY",
    To:"ARN",
    Distance:1434.81,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"BES",
    Distance:466.654,
    Airport:"Air France"
}),
new Routes(
{
    From:"LCY",
    To:"BES",
    Distance:466.654,
    Airport:"CityJet"
}),
new Routes(
{
    From:"LCY",
    To:"BLL",
    Distance:761.639,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"BRN",
    Distance:742.867,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"LCY",
    To:"BSL",
    Distance:692.43,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LCY",
    To:"BVE",
    Distance:714.234,
    Airport:"Air France"
}),
new Routes(
{
    From:"LCY",
    To:"BVE",
    Distance:714.234,
    Airport:"CityJet"
}),
new Routes(
{
    From:"LCY",
    To:"DOL",
    Distance:238.054,
    Airport:"Air France"
}),
new Routes(
{
    From:"LCY",
    To:"DOL",
    Distance:238.054,
    Airport:"CityJet"
}),
new Routes(
{
    From:"LCY",
    To:"DRS",
    Distance:952.411,
    Airport:"Air France"
}),
new Routes(
{
    From:"LCY",
    To:"DRS",
    Distance:952.411,
    Airport:"CityJet"
}),
new Routes(
{
    From:"LCY",
    To:"DUB",
    Distance:478.338,
    Airport:"Air France"
}),
new Routes(
{
    From:"LCY",
    To:"DUB",
    Distance:478.338,
    Airport:"CityJet"
}),
new Routes(
{
    From:"LCY",
    To:"DUS",
    Distance:466.072,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"EDI",
    Distance:543.08,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"FCO",
    Distance:1420.97,
    Airport:"Air France"
}),
new Routes(
{
    From:"LCY",
    To:"FCO",
    Distance:1420.97,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LCY",
    To:"FLR",
    Distance:1193.11,
    Airport:"Air France"
}),
new Routes(
{
    From:"LCY",
    To:"FLR",
    Distance:1193.11,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"FLR",
    Distance:1193.11,
    Airport:"CityJet"
}),
new Routes(
{
    From:"LCY",
    To:"FRA",
    Distance:618.78,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LCY",
    To:"FRA",
    Distance:618.78,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"FRA",
    Distance:618.78,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LCY",
    To:"GLA",
    Distance:568.154,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"GRX",
    Distance:1620.25,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"GRX",
    Distance:1620.25,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LCY",
    To:"GVA",
    Distance:733.673,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LCY",
    To:"IBZ",
    Distance:1408.39,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"IBZ",
    Distance:1408.39,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LCY",
    To:"IOM",
    Distance:425.466,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"JER",
    Distance:301.218,
    Airport:"Skynet Airlines"
}),
new Routes(
{
    From:"LCY",
    To:"LIN",
    Distance:955.791,
    Airport:"Air France"
}),
new Routes(
{
    From:"LCY",
    To:"LIN",
    Distance:955.791,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LCY",
    To:"LUX",
    Distance:482.186,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LCY",
    To:"MAD",
    Distance:1255.59,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"MAD",
    Distance:1255.59,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LCY",
    To:"MAH",
    Distance:1333.82,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"NCE",
    Distance:1023.47,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"NTE",
    Distance:498.727,
    Airport:"Air France"
}),
new Routes(
{
    From:"LCY",
    To:"NTE",
    Distance:498.727,
    Airport:"CityJet"
}),
new Routes(
{
    From:"LCY",
    To:"ORY",
    Distance:350.027,
    Airport:"Air France"
}),
new Routes(
{
    From:"LCY",
    To:"ORY",
    Distance:350.027,
    Airport:"CityJet"
}),
new Routes(
{
    From:"LCY",
    To:"PMI",
    Distance:1344.93,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"PMI",
    Distance:1344.93,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LCY",
    To:"RTM",
    Distance:305.881,
    Airport:"Air France"
}),
new Routes(
{
    From:"LCY",
    To:"RTM",
    Distance:305.881,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"RTM",
    Distance:305.881,
    Airport:"CityJet"
}),
new Routes(
{
    From:"LCY",
    To:"RTM",
    Distance:305.881,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LCY",
    To:"VCE",
    Distance:1122.68,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"ZRH",
    Distance:759.699,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LCY",
    To:"ZRH",
    Distance:759.699,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LCY",
    To:"ZRH",
    Distance:759.699,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LDB",
    To:"CGB",
    Distance:1001.02,
    Airport:"Azul"
}),
new Routes(
{
    From:"LDB",
    To:"CGH",
    Distance:457.507,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"LDB",
    To:"CGH",
    Distance:457.507,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"LDB",
    To:"CWB",
    Distance:314.165,
    Airport:"Azul"
}),
new Routes(
{
    From:"LDB",
    To:"CWB",
    Distance:314.165,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"LDB",
    To:"CWB",
    Distance:314.165,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"LDB",
    To:"GRU",
    Distance:475.775,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"LDB",
    To:"GRU",
    Distance:475.775,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"LDB",
    To:"MGF",
    Distance:91.8291,
    Airport:"Azul"
}),
new Routes(
{
    From:"LDB",
    To:"POA",
    Distance:740.659,
    Airport:"Azul"
}),
new Routes(
{
    From:"LDB",
    To:"VCP",
    Distance:410.049,
    Airport:"Azul"
}),
new Routes(
{
    From:"LDE",
    To:"BGY",
    Distance:818.867,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LDE",
    To:"BRU",
    Distance:923.259,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"LDE",
    To:"MAD",
    Distance:419.619,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LDE",
    To:"ORY",
    Distance:643.217,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LDE",
    To:"STN",
    Distance:968.267,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LDH",
    To:"BNE",
    Distance:738.858,
    Airport:"Qantas"
}),
new Routes(
{
    From:"LDH",
    To:"PQQ",
    Distance:589.258,
    Airport:"Qantas"
}),
new Routes(
{
    From:"LDH",
    To:"SYD",
    Distance:785.585,
    Airport:"Qantas"
}),
new Routes(
{
    From:"LDU",
    To:"BKI",
    Distance:270.949,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LDY",
    To:"BHX",
    Distance:457.552,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LDY",
    To:"FAO",
    Distance:2005.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LDY",
    To:"LPL",
    Distance:338.736,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LDY",
    To:"PIK",
    Distance:171.108,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LDY",
    To:"STN",
    Distance:601.994,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LEA",
    To:"PER",
    Distance:1094.95,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"LEA",
    To:"PER",
    Distance:1094.95,
    Airport:"Qantas"
}),
new Routes(
{
    From:"LEA",
    To:"PER",
    Distance:1094.95,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"LEB",
    To:"BOS",
    Distance:175.624,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"LEB",
    To:"HPN",
    Distance:307.034,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"LEC",
    To:"SSA",
    Distance:323.098,
    Airport:"Azul"
}),
new Routes(
{
    From:"LED",
    To:"AAQ",
    Distance:1711.91,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"AER",
    Distance:1932.59,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"ALA",
    Distance:3609.04,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"ALA",
    Distance:3609.04,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"LED",
    To:"AMS",
    Distance:1773.43,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"AMS",
    Distance:1773.43,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LED",
    To:"ARH",
    Distance:731.465,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"ARH",
    Distance:731.465,
    Airport:"Aeroflot-Nord"
}),
new Routes(
{
    From:"LED",
    To:"ARN",
    Distance:691.159,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"ARN",
    Distance:691.159,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LED",
    To:"ASF",
    Distance:1902.07,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"LED",
    To:"ATH",
    Distance:2472.05,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"LED",
    To:"AYT",
    Distance:2546.83,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"AZN",
    Distance:3570.18,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"LED",
    To:"BCN",
    Distance:2821.93,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"BCN",
    Distance:2821.93,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LED",
    To:"BCN",
    Distance:2821.93,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LED",
    To:"BHK",
    Distance:3250.94,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"BHK",
    Distance:3250.94,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"LED",
    To:"BOJ",
    Distance:1925.1,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"BOJ",
    Distance:1925.1,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"LED",
    To:"CDG",
    Distance:2132.87,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"CDG",
    Distance:2132.87,
    Airport:"Air France"
}),
new Routes(
{
    From:"LED",
    To:"CEK",
    Distance:1909.76,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"CPH",
    Distance:1140.11,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LED",
    To:"CSY",
    Distance:1085.48,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"LED",
    To:"DME",
    Distance:666.891,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"DME",
    Distance:666.891,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"LED",
    To:"DME",
    Distance:666.891,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"LED",
    To:"DME",
    Distance:666.891,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LED",
    To:"DME",
    Distance:666.891,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LED",
    To:"DUS",
    Distance:1740.71,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"DUS",
    Distance:1740.71,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LED",
    To:"DUS",
    Distance:1740.71,
    Airport:"Rossiya-Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"DXB",
    Distance:4300.61,
    Airport:"Emirates"
}),
new Routes(
{
    From:"LED",
    To:"DYU",
    Distance:3580.77,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"DYU",
    Distance:3580.77,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"LED",
    To:"DYU",
    Distance:3580.77,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"LED",
    To:"DYU",
    Distance:3580.77,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LED",
    To:"EGO",
    Distance:1093.21,
    Airport:"Polet Airlines (Priv)"
}),
new Routes(
{
    From:"LED",
    To:"EVN",
    Distance:2396.07,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"EVN",
    Distance:2396.07,
    Airport:"Air Armenia"
}),
new Routes(
{
    From:"LED",
    To:"EVN",
    Distance:2396.07,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LED",
    To:"FCO",
    Distance:2350.63,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"FCO",
    Distance:2350.63,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LED",
    To:"FCO",
    Distance:2350.63,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LED",
    To:"FEG",
    Distance:3572.81,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"LED",
    To:"FRA",
    Distance:1749.24,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"FRA",
    Distance:1749.24,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LED",
    To:"FRU",
    Distance:3491.9,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"FRU",
    Distance:3491.9,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"LED",
    To:"GVA",
    Distance:2187.03,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LED",
    To:"GYD",
    Distance:2549.01,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"GYD",
    Distance:2549.01,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"LED",
    To:"GYD",
    Distance:2549.01,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"LED",
    To:"HAM",
    Distance:1406.58,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"HAM",
    Distance:1406.58,
    Airport:"Rossiya-Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"HEL",
    Distance:299.574,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LED",
    To:"HEL",
    Distance:299.574,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"LED",
    To:"HER",
    Distance:2744.61,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"LED",
    To:"HER",
    Distance:2744.61,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"IAR",
    Distance:623.013,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"LED",
    To:"ICN",
    Distance:6798,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"LED",
    To:"IJK",
    Distance:1386.63,
    Airport:"IzAvia"
}),
new Routes(
{
    From:"LED",
    To:"IST",
    Distance:2095.46,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"IST",
    Distance:2095.46,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"LED",
    To:"KBP",
    Distance:1052.14,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"KBP",
    Distance:1052.14,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"LED",
    To:"KBP",
    Distance:1052.14,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"LED",
    To:"KBP",
    Distance:1052.14,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"LED",
    To:"KGD",
    Distance:795.258,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"KGF",
    Distance:2921.66,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"KIV",
    Distance:1434.01,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"LED",
    To:"KJA",
    Distance:3552.15,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"KJA",
    Distance:3552.15,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"LED",
    To:"KLV",
    Distance:1528.48,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"KLV",
    Distance:1528.48,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"LED",
    To:"KRR",
    Distance:1745.83,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"KSQ",
    Distance:3407.84,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"KSQ",
    Distance:3407.84,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"LED",
    To:"KUF",
    Distance:1395.21,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"KVD",
    Distance:2392.79,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"LED",
    To:"KVX",
    Distance:1093.83,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"LED",
    To:"KZN",
    Distance:1216.85,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"LED",
    To:"KZN",
    Distance:1216.85,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"KZN",
    Distance:1216.85,
    Airport:"Rossiya-Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"LBD",
    Distance:3477.29,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"LBD",
    Distance:3477.29,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"LED",
    To:"LBD",
    Distance:3477.29,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"LED",
    To:"LBD",
    Distance:3477.29,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"LED",
    To:"LCA",
    Distance:2782.27,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"LCA",
    Distance:2782.27,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LED",
    To:"LHR",
    Distance:2113.17,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LED",
    To:"LLK",
    Distance:2679.56,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LED",
    To:"MCX",
    Distance:2227.03,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"LED",
    To:"MLA",
    Distance:2894.22,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"LED",
    To:"MMK",
    Distance:1005.67,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"MMK",
    Distance:1005.67,
    Airport:"Aeroflot-Nord"
}),
new Routes(
{
    From:"LED",
    To:"MRV",
    Distance:1933.65,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"MSQ",
    Distance:671.786,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"MSQ",
    Distance:671.786,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"LED",
    To:"MSQ",
    Distance:671.786,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LED",
    To:"MUC",
    Distance:1741.32,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"MUC",
    Distance:1741.32,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LED",
    To:"MXP",
    Distance:2122.4,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"MXP",
    Distance:2122.4,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LED",
    To:"MXP",
    Distance:2122.4,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LED",
    To:"NBC",
    Distance:1383.38,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"LED",
    To:"NBE",
    Distance:2996.76,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"LED",
    To:"NBE",
    Distance:2996.76,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LED",
    To:"NCE",
    Distance:2371.26,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"NMA",
    Distance:3508.78,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"NMA",
    Distance:3508.78,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"LED",
    To:"NSK",
    Distance:2797.28,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"LED",
    To:"NVI",
    Distance:3254.28,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"NVI",
    Distance:3254.28,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"LED",
    To:"OMS",
    Distance:2586.65,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"OSL",
    Distance:1062.61,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LED",
    To:"OSS",
    Distance:3607.08,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"OSS",
    Distance:3607.08,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"LED",
    To:"OVB",
    Distance:3097.6,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"OVB",
    Distance:3097.6,
    Airport:"Alrosa Mirny Air Enterprise"
}),
new Routes(
{
    From:"LED",
    To:"OVB",
    Distance:3097.6,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"LED",
    To:"PED",
    Distance:1424.22,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LED",
    To:"PEE",
    Distance:1486.38,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"PEK",
    Distance:6056.54,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"LED",
    To:"PEK",
    Distance:6056.54,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"LED",
    To:"PRG",
    Distance:1478.25,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"PRG",
    Distance:1478.25,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"LED",
    To:"PUJ",
    Distance:8700.72,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LED",
    To:"REN",
    Distance:1792.92,
    Airport:"Orenburg Airlines"
}),
new Routes(
{
    From:"LED",
    To:"RHO",
    Distance:2606.07,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"LED",
    To:"RHO",
    Distance:2606.07,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"RHO",
    Distance:2606.07,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LED",
    To:"RIX",
    Distance:486.445,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"LED",
    To:"ROV",
    Distance:1527.38,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"ROV",
    Distance:1527.38,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LED",
    To:"SCW",
    Distance:1132.88,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"SCW",
    Distance:1132.88,
    Airport:"Aeroflot-Nord"
}),
new Routes(
{
    From:"LED",
    To:"SIP",
    Distance:1658.47,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"SKD",
    Distance:3383.1,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"SKD",
    Distance:3383.1,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"LED",
    To:"SKG",
    Distance:2202.79,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"LED",
    To:"SKG",
    Distance:2202.79,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"LED",
    To:"SKX",
    Distance:1100.4,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"LED",
    To:"SVO",
    Distance:599.284,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"SVX",
    Distance:1801.01,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"SVX",
    Distance:1801.01,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LED",
    To:"SXF",
    Distance:1320,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"TAS",
    Distance:3364.85,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"TAS",
    Distance:3364.85,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"LED",
    To:"TFS",
    Distance:4977.15,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"TIV",
    Distance:2088.36,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LED",
    To:"TJM",
    Distance:2033.34,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"TJM",
    Distance:2033.34,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"LED",
    To:"TJU",
    Distance:3681.28,
    Airport:"Japan Asia Airways"
}),
new Routes(
{
    From:"LED",
    To:"TJU",
    Distance:3681.28,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LED",
    To:"TLL",
    Distance:308.382,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"LED",
    To:"TLV",
    Distance:3108.9,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"TLV",
    Distance:3108.9,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"LED",
    To:"TSE",
    Distance:2724.71,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"TSE",
    Distance:2724.71,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"LED",
    To:"TXL",
    Distance:1317.21,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LED",
    To:"UFA",
    Distance:1637.38,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"UGC",
    Distance:2899.32,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"UGC",
    Distance:2899.32,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"LED",
    To:"UUA",
    Distance:1464.06,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"LED",
    To:"VCE",
    Distance:1982.95,
    Airport:"Air One"
}),
new Routes(
{
    From:"LED",
    To:"VCE",
    Distance:1982.95,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LED",
    To:"VIE",
    Distance:1572.01,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"VIE",
    Distance:1572.01,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"VIE",
    Distance:1572.01,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LED",
    To:"VKO",
    Distance:625.445,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LED",
    To:"VKO",
    Distance:625.445,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LED",
    To:"VNO",
    Distance:647.483,
    Airport:"Polet Airlines (Priv)"
}),
new Routes(
{
    From:"LED",
    To:"VOG",
    Distance:1521.84,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"LED",
    To:"VOZ",
    Distance:1048,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"LED",
    To:"VOZ",
    Distance:1048,
    Airport:"Polet Airlines (Priv)"
}),
new Routes(
{
    From:"LED",
    To:"WAW",
    Distance:1025.07,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"LED",
    To:"YKS",
    Distance:4841.54,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"LED",
    To:"ZRH",
    Distance:1965.57,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LEH",
    To:"LYS",
    Distance:565.243,
    Airport:"Twin Jet"
}),
new Routes(
{
    From:"LEI",
    To:"AMS",
    Distance:1807.89,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"LEI",
    To:"BCN",
    Distance:626.438,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LEI",
    To:"BCN",
    Distance:626.438,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LEI",
    To:"BHX",
    Distance:1736.42,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LEI",
    To:"BRU",
    Distance:1655.09,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"LEI",
    To:"CRL",
    Distance:1608.72,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LEI",
    To:"DUB",
    Distance:1867.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LEI",
    To:"EMA",
    Distance:1779.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LEI",
    To:"LGW",
    Distance:1599.89,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LEI",
    To:"MAD",
    Distance:418.894,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"LEI",
    To:"MAD",
    Distance:418.894,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LEI",
    To:"MAN",
    Distance:1835.82,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LEI",
    To:"MAN",
    Distance:1835.82,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LEI",
    To:"MLN",
    Distance:181.727,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LEI",
    To:"NRN",
    Distance:1772.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LEI",
    To:"PMI",
    Distance:537.658,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LEI",
    To:"STN",
    Distance:1684.98,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LEI",
    To:"SVQ",
    Distance:318.754,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"LEJ",
    To:"ACE",
    Distance:3292.72,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LEJ",
    To:"ACE",
    Distance:3292.72,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LEJ",
    To:"AGA",
    Distance:2948.01,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LEJ",
    To:"AMS",
    Distance:522.306,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"LEJ",
    To:"AYT",
    Distance:2179.11,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LEJ",
    To:"AYT",
    Distance:2179.11,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LEJ",
    To:"AYT",
    Distance:2179.11,
    Airport:"Germania"
}),
new Routes(
{
    From:"LEJ",
    To:"AYT",
    Distance:2179.11,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"LEJ",
    To:"BCN",
    Distance:1367.7,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LEJ",
    To:"BCN",
    Distance:1367.7,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LEJ",
    To:"BRE",
    Distance:295.908,
    Airport:"Germania"
}),
new Routes(
{
    From:"LEJ",
    To:"CDG",
    Distance:739.423,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"LEJ",
    To:"CFU",
    Distance:1442.96,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LEJ",
    To:"CGN",
    Distance:361.115,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"LEJ",
    To:"DJE",
    Distance:1955.87,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LEJ",
    To:"DME",
    Distance:1746.14,
    Airport:"Germania"
}),
new Routes(
{
    From:"LEJ",
    To:"DUS",
    Distance:380.371,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"LEJ",
    To:"FNC",
    Distance:3137.55,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LEJ",
    To:"FNC",
    Distance:3137.55,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LEJ",
    To:"FRA",
    Distance:303.604,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LEJ",
    To:"FUE",
    Distance:3352.37,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LEJ",
    To:"FUE",
    Distance:3352.37,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LEJ",
    To:"HER",
    Distance:2065.55,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LEJ",
    To:"HER",
    Distance:2065.55,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LEJ",
    To:"HRG",
    Distance:3246.7,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LEJ",
    To:"IST",
    Distance:1718.45,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"LEJ",
    To:"KGS",
    Distance:2005.52,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LEJ",
    To:"LPA",
    Distance:3482.96,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LEJ",
    To:"MUC",
    Distance:343.882,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LEJ",
    To:"PMI",
    Distance:1511.91,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LEJ",
    To:"PMI",
    Distance:1511.91,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LEJ",
    To:"RHO",
    Distance:2088.68,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LEJ",
    To:"RHO",
    Distance:2088.68,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"LEJ",
    To:"STN",
    Distance:828.79,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LEJ",
    To:"STR",
    Distance:373.378,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"LEJ",
    To:"TFS",
    Distance:3538.18,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LEJ",
    To:"TFS",
    Distance:3538.18,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LEJ",
    To:"VIE",
    Distance:482.6,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"LEJ",
    To:"VIE",
    Distance:482.6,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LEJ",
    To:"ZRH",
    Distance:515.503,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"LEN",
    To:"BCN",
    Distance:655.34,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LEQ",
    To:"ISC",
    Distance:49.8926,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"LET",
    To:"BOG",
    Distance:1093.78,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LET",
    To:"BOG",
    Distance:1093.78,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"LET",
    To:"BOG",
    Distance:1093.78,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LET",
    To:"LCR",
    Distance:514.379,
    Airport:"SATENA"
}),
new Routes(
{
    From:"LET",
    To:"LPD",
    Distance:320.956,
    Airport:"SATENA"
}),
new Routes(
{
    From:"LET",
    To:"TCD",
    Distance:149.338,
    Airport:"SATENA"
}),
new Routes(
{
    From:"LEX",
    To:"ATL",
    Distance:489.496,
    Airport:"Air France"
}),
new Routes(
{
    From:"LEX",
    To:"ATL",
    Distance:489.496,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LEX",
    To:"ATL",
    Distance:489.496,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LEX",
    To:"ATL",
    Distance:489.496,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"LEX",
    To:"CLT",
    Distance:453.067,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LEX",
    To:"CLT",
    Distance:453.067,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LEX",
    To:"DCA",
    Distance:665.117,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LEX",
    To:"DFW",
    Distance:1261.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LEX",
    To:"DFW",
    Distance:1261.12,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LEX",
    To:"DTW",
    Distance:476.382,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LEX",
    To:"FLL",
    Distance:1394.44,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LEX",
    To:"IAH",
    Distance:1332.71,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LEX",
    To:"LGA",
    Distance:970.44,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LEX",
    To:"MSP",
    Distance:1045.19,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LEX",
    To:"ORD",
    Distance:520.562,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LEX",
    To:"ORD",
    Distance:520.562,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LEX",
    To:"ORD",
    Distance:520.562,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LEX",
    To:"PGD",
    Distance:1260.07,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LEX",
    To:"PIE",
    Distance:1140.05,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LEX",
    To:"SFB",
    Distance:1075.74,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LFR",
    To:"CCS",
    Distance:636.046,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"LFT",
    To:"ATL",
    Distance:808.757,
    Airport:"Air France"
}),
new Routes(
{
    From:"LFT",
    To:"ATL",
    Distance:808.757,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LFT",
    To:"ATL",
    Distance:808.757,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LFT",
    To:"DFW",
    Distance:564.326,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LFT",
    To:"DFW",
    Distance:564.326,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LFT",
    To:"IAH",
    Distance:323.578,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LFW",
    To:"ABJ",
    Distance:581.961,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LFW",
    To:"ABJ",
    Distance:581.961,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"LFW",
    To:"ABV",
    Distance:733.708,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LFW",
    To:"ACC",
    Distance:169.108,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LFW",
    To:"ACC",
    Distance:169.108,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"LFW",
    To:"ADD",
    Distance:4148.41,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LFW",
    To:"BKO",
    Distance:1232.91,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LFW",
    To:"BRU",
    Distance:4983.4,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"LFW",
    To:"BRU",
    Distance:4983.4,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LFW",
    To:"BRU",
    Distance:4983.4,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LFW",
    To:"CDG",
    Distance:4765.95,
    Airport:"Air France"
}),
new Routes(
{
    From:"LFW",
    To:"CKY",
    Distance:1680.53,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LFW",
    To:"COO",
    Distance:126.688,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LFW",
    To:"COO",
    Distance:126.688,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"LFW",
    To:"DLA",
    Distance:967.757,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LFW",
    To:"GIG",
    Distance:5811.22,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LFW",
    To:"LBV",
    Distance:1105.49,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LFW",
    To:"LOS",
    Distance:232.925,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LFW",
    To:"OUA",
    Distance:751.993,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"LFW",
    To:"OUA",
    Distance:751.993,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"ATL",
    Distance:1224.87,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LGA",
    To:"ATL",
    Distance:1224.87,
    Airport:"Air France"
}),
new Routes(
{
    From:"LGA",
    To:"ATL",
    Distance:1224.87,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LGA",
    To:"ATL",
    Distance:1224.87,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"ATL",
    Distance:1224.87,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"ATL",
    Distance:1224.87,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"ATL",
    Distance:1224.87,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LGA",
    To:"AUA",
    Distance:3166.58,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"BGR",
    Distance:608.238,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"BHM",
    Distance:1392.63,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"BNA",
    Distance:1227.68,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"BNA",
    Distance:1227.68,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"BNA",
    Distance:1227.68,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"BNA",
    Distance:1227.68,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"BOS",
    Distance:296.694,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"BOS",
    Distance:296.694,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"BOS",
    Distance:296.694,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"BTV",
    Distance:415.012,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"BUF",
    Distance:468.746,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"CAE",
    Distance:993.439,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"CAK",
    Distance:636.703,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LGA",
    To:"CAK",
    Distance:636.703,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"CHO",
    Distance:490.504,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"CHO",
    Distance:490.504,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"CHO",
    Distance:490.504,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"CHS",
    Distance:1033.15,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"CLE",
    Distance:671.953,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"CLE",
    Distance:671.953,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"CLT",
    Distance:874.933,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"CLT",
    Distance:874.933,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"CLT",
    Distance:874.933,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"CMH",
    Distance:768.437,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"CMH",
    Distance:768.437,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"CMH",
    Distance:768.437,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"CVG",
    Distance:939.898,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"DAY",
    Distance:881.794,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"DAY",
    Distance:881.794,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"DAY",
    Distance:881.794,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"DCA",
    Distance:344.786,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"DCA",
    Distance:344.786,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"DCA",
    Distance:344.786,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"DEN",
    Distance:2599.82,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"DEN",
    Distance:2599.82,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"DEN",
    Distance:2599.82,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"DEN",
    Distance:2599.82,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"DFW",
    Distance:2231.36,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"DFW",
    Distance:2231.36,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"DFW",
    Distance:2231.36,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"DFW",
    Distance:2231.36,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"DSM",
    Distance:1655.4,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"DTW",
    Distance:805.132,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"DTW",
    Distance:805.132,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"DTW",
    Distance:805.132,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"DTW",
    Distance:805.132,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"EYW",
    Distance:1946.79,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"FLL",
    Distance:1734.58,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"FLL",
    Distance:1734.58,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LGA",
    To:"FLL",
    Distance:1734.58,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"GRR",
    Distance:992.32,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"GSO",
    Distance:741.092,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"GSO",
    Distance:741.092,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"GSO",
    Distance:741.092,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"GSP",
    Distance:981.463,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"HOU",
    Distance:2295.58,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"IAD",
    Distance:367.464,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"IAH",
    Distance:2277.13,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"IAH",
    Distance:2277.13,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"ILM",
    Distance:805.835,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"ILM",
    Distance:805.835,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"ILM",
    Distance:805.835,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"IND",
    Distance:1059.91,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"JAX",
    Distance:1342.61,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"LEX",
    Distance:970.44,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"LIT",
    Distance:1743.62,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"LIT",
    Distance:1743.62,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"MCI",
    Distance:1777.69,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"MCO",
    Distance:1530.96,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"MCO",
    Distance:1530.96,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LGA",
    To:"MDW",
    Distance:1163.93,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LGA",
    To:"MDW",
    Distance:1163.93,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"MEM",
    Distance:1546.93,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"MHT",
    Distance:313.295,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"MIA",
    Distance:1768.37,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"MIA",
    Distance:1768.37,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"MIA",
    Distance:1768.37,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"MKE",
    Distance:1184.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"MKE",
    Distance:1184.66,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"MSN",
    Distance:1303.45,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"MSP",
    Distance:1638.06,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"MSY",
    Distance:1903.37,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"MSY",
    Distance:1903.37,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"MSY",
    Distance:1903.37,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LGA",
    To:"MYR",
    Distance:906.895,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"MYR",
    Distance:906.895,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"OMA",
    Distance:1842.88,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"ORD",
    Distance:1177.06,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"ORD",
    Distance:1177.06,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"ORD",
    Distance:1177.06,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"ORD",
    Distance:1177.06,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"ORD",
    Distance:1177.06,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"ORF",
    Distance:476.468,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"ORF",
    Distance:476.468,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"ORF",
    Distance:476.468,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"PBI",
    Distance:1668.31,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"PBI",
    Distance:1668.31,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"PBI",
    Distance:1668.31,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LGA",
    To:"PBI",
    Distance:1668.31,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"PHL",
    Distance:153.597,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"PHL",
    Distance:153.597,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"PIT",
    Distance:537.524,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"PIT",
    Distance:537.524,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"PIT",
    Distance:537.524,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"PWM",
    Distance:433.378,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"RDU",
    Distance:693.007,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"RDU",
    Distance:693.007,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"RDU",
    Distance:693.007,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"RIC",
    Distance:469.758,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"RIC",
    Distance:469.758,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"RIC",
    Distance:469.758,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"ROA",
    Distance:651.676,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"ROA",
    Distance:651.676,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"ROC",
    Distance:408.024,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"RSW",
    Distance:1741.61,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"RSW",
    Distance:1741.61,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LGA",
    To:"SAV",
    Distance:1162.95,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"SDF",
    Distance:1057.66,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"SDF",
    Distance:1057.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"SDF",
    Distance:1057.66,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"SRQ",
    Distance:1687.02,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"SRQ",
    Distance:1687.02,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LGA",
    To:"STL",
    Distance:1425.85,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"STL",
    Distance:1425.85,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"STL",
    Distance:1425.85,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"STL",
    Distance:1425.85,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"SYR",
    Distance:318.533,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"TPA",
    Distance:1628.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"TPA",
    Distance:1628.3,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LGA",
    To:"TYS",
    Distance:1040.67,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"TYS",
    Distance:1040.67,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"TYS",
    Distance:1040.67,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"XNA",
    Distance:1841.62,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"XNA",
    Distance:1841.62,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"YHZ",
    Distance:959.442,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"YHZ",
    Distance:959.442,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LGA",
    To:"YOW",
    Distance:526.031,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LGA",
    To:"YOW",
    Distance:526.031,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"YUL",
    Distance:521.982,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LGA",
    To:"YUL",
    Distance:521.982,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"YUL",
    Distance:521.982,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"YUL",
    Distance:521.982,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"YUL",
    Distance:521.982,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"YUL",
    Distance:521.982,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LGA",
    To:"YYZ",
    Distance:573.149,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LGA",
    To:"YYZ",
    Distance:573.149,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"YYZ",
    Distance:573.149,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGA",
    To:"YYZ",
    Distance:573.149,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGA",
    To:"YYZ",
    Distance:573.149,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LGA",
    To:"YYZ",
    Distance:573.149,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LGB",
    To:"AUS",
    Distance:1969.31,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LGB",
    To:"BOS",
    Distance:4178.36,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LGB",
    To:"IAD",
    Distance:3656.85,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LGB",
    To:"JFK",
    Distance:3958.29,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LGB",
    To:"LAS",
    Distance:371.461,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LGB",
    To:"OAK",
    Distance:568.355,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LGB",
    To:"PDX",
    Distance:1362.43,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LGB",
    To:"PDX",
    Distance:1362.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGB",
    To:"PDX",
    Distance:1362.43,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LGB",
    To:"PHX",
    Distance:570.008,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGB",
    To:"PHX",
    Distance:570.008,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LGB",
    To:"SEA",
    Distance:1555.2,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LGB",
    To:"SEA",
    Distance:1555.2,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGB",
    To:"SEA",
    Distance:1555.2,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LGB",
    To:"SFO",
    Distance:569.094,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LGB",
    To:"SLC",
    Distance:947.556,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGB",
    To:"SLC",
    Distance:947.556,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LGB",
    To:"SMF",
    Distance:623.782,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LGG",
    To:"AGA",
    Distance:2573.21,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"LGG",
    To:"AJA",
    Distance:1002.46,
    Airport:"Air France"
}),
new Routes(
{
    From:"LGG",
    To:"AJA",
    Distance:1002.46,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"LGG",
    To:"BIA",
    Distance:950.144,
    Airport:"Air France"
}),
new Routes(
{
    From:"LGG",
    To:"BIA",
    Distance:950.144,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"LGG",
    To:"HER",
    Distance:2324.51,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"LGG",
    To:"LIL",
    Distance:166.333,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"LGG",
    To:"PMI",
    Distance:1250.53,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"LGG",
    To:"RHO",
    Distance:2398.57,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"LGI",
    To:"NAS",
    Distance:317.417,
    Airport:"Aeroper"
}),
new Routes(
{
    From:"LGI",
    To:"NAS",
    Distance:317.417,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"LGK",
    To:"KCH",
    Distance:1294.97,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"LGK",
    To:"KUL",
    Distance:455.025,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"LGK",
    To:"KUL",
    Distance:455.025,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGK",
    To:"KUL",
    Distance:455.025,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LGK",
    To:"KUL",
    Distance:455.025,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"LGK",
    To:"PEN",
    Distance:129.849,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"LGK",
    To:"PEN",
    Distance:129.849,
    Airport:"Firefly"
}),
new Routes(
{
    From:"LGK",
    To:"PEN",
    Distance:129.849,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LGK",
    To:"PEN",
    Distance:129.849,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"LGK",
    To:"SIN",
    Distance:728.3,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"LGK",
    To:"SIN",
    Distance:728.3,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LGK",
    To:"SIN",
    Distance:728.3,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"LGK",
    To:"SIN",
    Distance:728.3,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"LGK",
    To:"SIN",
    Distance:728.3,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"LGK",
    To:"SZB",
    Distance:408.949,
    Airport:"Firefly"
}),
new Routes(
{
    From:"LGK",
    To:"SZB",
    Distance:408.949,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LGK",
    To:"SZB",
    Distance:408.949,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"LGL",
    To:"MUR",
    Distance:124.893,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LGL",
    To:"MYY",
    Distance:163.722,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LGP",
    To:"CEB",
    Distance:317.868,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"LGP",
    To:"MNL",
    Distance:330.532,
    Airport:"Air Philippines"
}),
new Routes(
{
    From:"LGP",
    To:"MNL",
    Distance:330.532,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"LGP",
    To:"MNL",
    Distance:330.532,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"LGQ",
    To:"UIO",
    Distance:182.087,
    Airport:"TAME"
}),
new Routes(
{
    From:"LGW",
    To:"AAL",
    Distance:928.284,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"ABZ",
    Distance:685.645,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"ACE",
    Distance:2710.19,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"ACE",
    Distance:2710.19,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"ACE",
    Distance:2710.19,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LGW",
    To:"ACE",
    Distance:2710.19,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"ACE",
    Distance:2710.19,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"ACE",
    Distance:2710.19,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"ACE",
    Distance:2710.19,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"ACE",
    Distance:2710.19,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"ACE",
    Distance:2710.19,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"ADB",
    Distance:2567.2,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"ADB",
    Distance:2567.2,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"AES",
    Distance:1324.03,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"AGA",
    Distance:2435.23,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"AGA",
    Distance:2435.23,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"AGA",
    Distance:2435.23,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"AGP",
    Distance:1645.2,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"AGP",
    Distance:1645.2,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"AGP",
    Distance:1645.2,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"AGP",
    Distance:1645.2,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"AGP",
    Distance:1645.2,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"AGP",
    Distance:1645.2,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"AJA",
    Distance:1233.02,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"ALC",
    Distance:1430.91,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"ALC",
    Distance:1430.91,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"ALC",
    Distance:1430.91,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"ALC",
    Distance:1430.91,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"ALC",
    Distance:1430.91,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"ALC",
    Distance:1430.91,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"ALG",
    Distance:1630.07,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"AMS",
    Distance:364.704,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"AMS",
    Distance:364.704,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"ANU",
    Distance:6564.03,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"ANU",
    Distance:6564.03,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"ANU",
    Distance:6564.03,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LGW",
    To:"ARN",
    Distance:1475.35,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"ATH",
    Distance:2393.01,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"AYT",
    Distance:2908.05,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"AYT",
    Distance:2908.05,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"AYT",
    Distance:2908.05,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"AYT",
    Distance:2908.05,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"AYT",
    Distance:2908.05,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"BCN",
    Distance:1109.05,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"BCN",
    Distance:1109.05,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"BCN",
    Distance:1109.05,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"BCN",
    Distance:1109.05,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"BCN",
    Distance:1109.05,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"BCN",
    Distance:1109.05,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"BDA",
    Distance:5540.63,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"BDA",
    Distance:5540.63,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"BFS",
    Distance:561.416,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"BGI",
    Distance:6758.76,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"BGI",
    Distance:6758.76,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"BGI",
    Distance:6758.76,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LGW",
    To:"BGO",
    Distance:1070.97,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"BGO",
    Distance:1070.97,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"BHD",
    Distance:542.122,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"LGW",
    To:"BIA",
    Distance:1203.97,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"BJV",
    Distance:2679.5,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"BJV",
    Distance:2679.5,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"BJV",
    Distance:2679.5,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"BLQ",
    Distance:1126.69,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"BOD",
    Distance:703.802,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"BOD",
    Distance:703.802,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"BRI",
    Distance:1708.57,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"BRI",
    Distance:1708.57,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"BRU",
    Distance:328.042,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"BSL",
    Distance:684.234,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"BUD",
    Distance:1464.43,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"BUD",
    Distance:1464.43,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"BVC",
    Distance:4384.79,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"CDG",
    Distance:307.538,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"CFU",
    Distance:2016.63,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"CFU",
    Distance:2016.63,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"CGN",
    Distance:513.811,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"CHQ",
    Distance:2602.67,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"CHQ",
    Distance:2602.67,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"CMN",
    Distance:2066.2,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"LGW",
    To:"CMN",
    Distance:2066.2,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"LGW",
    To:"CPH",
    Distance:984.19,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"CPH",
    Distance:984.19,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"CTA",
    Distance:1938.23,
    Airport:"Air One"
}),
new Routes(
{
    From:"LGW",
    To:"CTA",
    Distance:1938.23,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LGW",
    To:"CTA",
    Distance:1938.23,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"CTA",
    Distance:1938.23,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"CTA",
    Distance:1938.23,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"CTA",
    Distance:1938.23,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"CUN",
    Distance:7976.73,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"CUN",
    Distance:7976.73,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LGW",
    To:"CUN",
    Distance:7976.73,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"CUN",
    Distance:7976.73,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"CUN",
    Distance:7976.73,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LGW",
    To:"DBV",
    Distance:1690.07,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"DBV",
    Distance:1690.07,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"DBV",
    Distance:1690.07,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"DBV",
    Distance:1690.07,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"DBV",
    Distance:1690.07,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"DLM",
    Distance:2792.72,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"DLM",
    Distance:2792.72,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"DLM",
    Distance:2792.72,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"DLM",
    Distance:2792.72,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"DLM",
    Distance:2792.72,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"DME",
    Distance:2543.34,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"DME",
    Distance:2543.34,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"DUB",
    Distance:484.452,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"LGW",
    To:"DUB",
    Distance:484.452,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LGW",
    To:"DUS",
    Distance:484.61,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"DXB",
    Distance:5473.13,
    Airport:"Emirates"
}),
new Routes(
{
    From:"LGW",
    To:"DXB",
    Distance:5473.13,
    Airport:"Qantas"
}),
new Routes(
{
    From:"LGW",
    To:"EDI",
    Distance:573.696,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"EDI",
    Distance:573.696,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"EFL",
    Distance:2172.36,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"ERF",
    Distance:778.536,
    Airport:"Germania"
}),
new Routes(
{
    From:"LGW",
    To:"FAO",
    Distance:1687.56,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"FAO",
    Distance:1687.56,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"FAO",
    Distance:1687.56,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"FAO",
    Distance:1687.56,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"FAO",
    Distance:1687.56,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"FCO",
    Distance:1405.86,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"FCO",
    Distance:1405.86,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"FCO",
    Distance:1405.86,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"FLR",
    Distance:1180.38,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"FLR",
    Distance:1180.38,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"FNA",
    Distance:4877.37,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"FNC",
    Distance:2455.53,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"FNC",
    Distance:2455.53,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LGW",
    To:"FNC",
    Distance:2455.53,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"FNC",
    Distance:2455.53,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"FUE",
    Distance:2770.36,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"FUE",
    Distance:2770.36,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"FUE",
    Distance:2770.36,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"FUE",
    Distance:2770.36,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"FUE",
    Distance:2770.36,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"GCI",
    Distance:256.173,
    Airport:"Aurigny Air Services"
}),
new Routes(
{
    From:"LGW",
    To:"GIB",
    Distance:1717.37,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"GLA",
    Distance:595.24,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"GLA",
    Distance:595.24,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"GOA",
    Distance:1006.42,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"GOT",
    Distance:1081.49,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"GVA",
    Distance:714.907,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"HAM",
    Distance:743.005,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"HAV",
    Distance:7508.02,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LGW",
    To:"HEL",
    Distance:1858.24,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"HER",
    Distance:2679.93,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"HER",
    Distance:2679.93,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"HER",
    Distance:2679.93,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"HME",
    Distance:2226.91,
    Airport:"TransHolding System"
}),
new Routes(
{
    From:"LGW",
    To:"HRG",
    Distance:3900.05,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"HRG",
    Distance:3900.05,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"HRG",
    Distance:3900.05,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"HRG",
    Distance:3900.05,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"HRG",
    Distance:3900.05,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"IBZ",
    Distance:1370.38,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"IBZ",
    Distance:1370.38,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"IBZ",
    Distance:1370.38,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"INN",
    Distance:941.475,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"INV",
    Distance:753.398,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"IOM",
    Distance:442.692,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"IST",
    Distance:2485.1,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"JED",
    Distance:4714.36,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"LGW",
    To:"JER",
    Distance:258.684,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"JER",
    Distance:258.684,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"JMK",
    Distance:2519.32,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"JMK",
    Distance:2519.32,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"JTR",
    Distance:2610.55,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"JTR",
    Distance:2610.55,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"JTR",
    Distance:2610.55,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"KBP",
    Distance:2172.6,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"KEF",
    Distance:1935.27,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"LGW",
    To:"KEF",
    Distance:1935.27,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"KEF",
    Distance:1935.27,
    Airport:"bmibaby"
}),
new Routes(
{
    From:"LGW",
    To:"KGS",
    Distance:2678.79,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"KGS",
    Distance:2678.79,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"KIN",
    Distance:7536.8,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"KIN",
    Distance:7536.8,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"KLX",
    Distance:2348.91,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"KRK",
    Distance:1410.07,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"KUN",
    Distance:1667.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LGW",
    To:"LAS",
    Distance:8432.75,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"LAS",
    Distance:8432.75,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"LAS",
    Distance:8432.75,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGW",
    To:"LAS",
    Distance:8432.75,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LGW",
    To:"LAS",
    Distance:8432.75,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LGW",
    To:"LCA",
    Distance:3247.45,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"LCA",
    Distance:3247.45,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"LCA",
    Distance:3247.45,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"LCA",
    Distance:3247.45,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"LCA",
    Distance:3247.45,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"LCA",
    Distance:3247.45,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"LCA",
    Distance:3247.45,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"LEI",
    Distance:1599.89,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"LIN",
    Distance:943.414,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"LIS",
    Distance:1542.1,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LGW",
    To:"LIS",
    Distance:1542.1,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LGW",
    To:"LIS",
    Distance:1542.1,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"LPA",
    Distance:2878.68,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"LPA",
    Distance:2878.68,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"LPA",
    Distance:2878.68,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"LPA",
    Distance:2878.68,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"LPA",
    Distance:2878.68,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"LUX",
    Distance:484.177,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"LYS",
    Distance:717.37,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"MAD",
    Distance:1212.93,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"LGW",
    To:"MAD",
    Distance:1212.93,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"MAH",
    Distance:1300.46,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"MAH",
    Distance:1300.46,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"MAH",
    Distance:1300.46,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"MBJ",
    Distance:7567.84,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LGW",
    To:"MCO",
    Distance:6991.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"MCO",
    Distance:6991.46,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"MCO",
    Distance:6991.46,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LGW",
    To:"MCO",
    Distance:6991.46,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LGW",
    To:"MCO",
    Distance:6991.46,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"MCO",
    Distance:6991.46,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"MCO",
    Distance:6991.46,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LGW",
    To:"MJV",
    Distance:1487.82,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"MLA",
    Distance:2062.96,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"LGW",
    To:"MLA",
    Distance:2062.96,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"MLA",
    Distance:2062.96,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"MLA",
    Distance:2062.96,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"MLE",
    Distance:8513.81,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"MPL",
    Distance:897.815,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"MRS",
    Distance:948.876,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"MRU",
    Distance:9747.74,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"MRU",
    Distance:9747.74,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"MRU",
    Distance:9747.74,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"MSQ",
    Distance:1920.52,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"MUC",
    Distance:913.54,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"MXP",
    Distance:898.873,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"NAP",
    Distance:1592.13,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"NAP",
    Distance:1592.13,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"LGW",
    To:"NAP",
    Distance:1592.13,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"NAP",
    Distance:1592.13,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"NBE",
    Distance:1877.31,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"NBE",
    Distance:1877.31,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"NBE",
    Distance:1877.31,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"NBE",
    Distance:1877.31,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"NCE",
    Distance:1001,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"NCE",
    Distance:1001,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"NCE",
    Distance:1001,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"NCE",
    Distance:1001,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"NCL",
    Distance:443.927,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"NOC",
    Distance:658.937,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"LGW",
    To:"NQY",
    Distance:346.71,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"NQY",
    Distance:346.71,
    Airport:"Flybe"
}),
new Routes(
{
    From:"LGW",
    To:"NTE",
    Distance:456.04,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"OLB",
    Distance:1361.49,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"OLB",
    Distance:1361.49,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"LGW",
    To:"OLB",
    Distance:1361.49,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"OPO",
    Distance:1278.27,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LGW",
    To:"OPO",
    Distance:1278.27,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"ORK",
    Distance:579.476,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LGW",
    To:"OSL",
    Distance:1226.45,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"OTP",
    Distance:2079.76,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"PDL",
    Distance:2493.28,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LGW",
    To:"PEK",
    Distance:8165.01,
    Airport:"Air China"
}),
new Routes(
{
    From:"LGW",
    To:"PEK",
    Distance:8165.01,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LGW",
    To:"PFO",
    Distance:3185.78,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"PFO",
    Distance:3185.78,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"PFO",
    Distance:3185.78,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"PFO",
    Distance:3185.78,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"PFO",
    Distance:3185.78,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"PMI",
    Distance:1308.97,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"PMI",
    Distance:1308.97,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"PMI",
    Distance:1308.97,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"PMI",
    Distance:1308.97,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"PMI",
    Distance:1308.97,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"PMI",
    Distance:1308.97,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"PMO",
    Distance:1778.47,
    Airport:"Air One"
}),
new Routes(
{
    From:"LGW",
    To:"PMO",
    Distance:1778.47,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LGW",
    To:"PMO",
    Distance:1778.47,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"POS",
    Distance:7099.6,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"PRG",
    Distance:1024.3,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"PRN",
    Distance:1864.52,
    Airport:"Germania"
}),
new Routes(
{
    From:"LGW",
    To:"PSA",
    Distance:1147.99,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"PSA",
    Distance:1147.99,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"PUJ",
    Distance:6896.97,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"PVK",
    Distance:2121.79,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"PVK",
    Distance:2121.79,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"RAK",
    Distance:2266.22,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"RAK",
    Distance:2266.22,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"LGW",
    To:"RAK",
    Distance:2266.22,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"RAK",
    Distance:2266.22,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"RAK",
    Distance:2266.22,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"RHO",
    Distance:2771.96,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"RHO",
    Distance:2771.96,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"RHO",
    Distance:2771.96,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"RIX",
    Distance:1692.22,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"LGW",
    To:"SAW",
    Distance:2523.57,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"SCQ",
    Distance:1107.82,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"SID",
    Distance:4325.16,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"SID",
    Distance:4325.16,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"SKG",
    Distance:2134.3,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"SKG",
    Distance:2134.3,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"SKG",
    Distance:2134.3,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"SNN",
    Distance:622.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LGW",
    To:"SOF",
    Distance:2011.16,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"SPU",
    Distance:1497.72,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"SPU",
    Distance:1497.72,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"SPU",
    Distance:1497.72,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"SSH",
    Distance:3866.38,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"SSH",
    Distance:3866.38,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"SSH",
    Distance:3866.38,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"SSH",
    Distance:3866.38,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"SSH",
    Distance:3866.38,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"SVG",
    Distance:935.452,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"SVQ",
    Distance:1591.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LGW",
    To:"SVQ",
    Distance:1591.55,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"SXB",
    Distance:630.846,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"SXF",
    Distance:952.104,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"SZG",
    Distance:1022.02,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LGW",
    To:"SZG",
    Distance:1022.02,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"TFS",
    Distance:2912.42,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"TFS",
    Distance:2912.42,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"TFS",
    Distance:2912.42,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"TFS",
    Distance:2912.42,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"TFS",
    Distance:2912.42,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"TFS",
    Distance:2912.42,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LGW",
    To:"TFS",
    Distance:2912.42,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"TFS",
    Distance:2912.42,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"TIA",
    Distance:1864.45,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"TIV",
    Distance:1729.72,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"TLL",
    Distance:1815.95,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"TLS",
    Distance:844.165,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"TLV",
    Distance:3557.23,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"TNG",
    Distance:1774.63,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"LGW",
    To:"TOS",
    Distance:2289.41,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"TPA",
    Distance:7111.07,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"TPA",
    Distance:7111.07,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"TPA",
    Distance:7111.07,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LGW",
    To:"TPA",
    Distance:7111.07,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"TRD",
    Distance:1517.89,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"TRF",
    Distance:1110.57,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LGW",
    To:"TRN",
    Distance:879.522,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"UVF",
    Distance:6799.55,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"UVF",
    Distance:6799.55,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LGW",
    To:"UVF",
    Distance:6799.55,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LGW",
    To:"VCE",
    Distance:1117.26,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"VCE",
    Distance:1117.26,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"VCE",
    Distance:1117.26,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"VCE",
    Distance:1117.26,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"VIE",
    Distance:1250.39,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"VLC",
    Distance:1296.59,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"VRN",
    Distance:1038.07,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LGW",
    To:"VRN",
    Distance:1038.07,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LGW",
    To:"VRN",
    Distance:1038.07,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"VRN",
    Distance:1038.07,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"YUL",
    Distance:5245.74,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"LGW",
    To:"YVR",
    Distance:7618.7,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"LGW",
    To:"YYC",
    Distance:7054.58,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"LGW",
    To:"YYZ",
    Distance:5739.19,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"LGW",
    To:"ZAG",
    Distance:1337.49,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"ZRH",
    Distance:753.703,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LGW",
    To:"ZTH",
    Distance:2225.41,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LGW",
    To:"ZTH",
    Distance:2225.41,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LHE",
    To:"AUH",
    Distance:2089.62,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LHE",
    To:"AUH",
    Distance:2089.62,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"AUH",
    Distance:2089.62,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"LHE",
    To:"AUH",
    Distance:2089.62,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"AUH",
    Distance:2089.62,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"AUH",
    Distance:2089.62,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"LHE",
    To:"AUH",
    Distance:2089.62,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"LHE",
    To:"BAH",
    Distance:2381.23,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"LHE",
    To:"BAH",
    Distance:2381.23,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"BCN",
    Distance:6377.16,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"BHV",
    Distance:353.106,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"LHE",
    To:"BHV",
    Distance:353.106,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"BKK",
    Distance:3337.48,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"LHE",
    To:"DEA",
    Distance:412.63,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"DEL",
    Distance:418.872,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"DMM",
    Distance:2452.36,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"DMM",
    Distance:2452.36,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"LHE",
    To:"DOH",
    Distance:2334.79,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"DOH",
    Distance:2334.79,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"LHE",
    To:"DXB",
    Distance:1985.19,
    Airport:"Emirates"
}),
new Routes(
{
    From:"LHE",
    To:"DXB",
    Distance:1985.19,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"DXB",
    Distance:1985.19,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"LHE",
    To:"ISB",
    Distance:263.074,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"IST",
    Distance:4171.27,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"JED",
    Distance:3653.15,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"LHE",
    To:"JED",
    Distance:3653.15,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"JED",
    Distance:3653.15,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"JED",
    Distance:3653.15,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"LHE",
    To:"KHI",
    Distance:1021.51,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"LHE",
    To:"KHI",
    Distance:1021.51,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"KHI",
    Distance:1021.51,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"LHE",
    To:"KUL",
    Distance:4291.04,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"KWI",
    Distance:2542.6,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"LHE",
    To:"KWI",
    Distance:2542.6,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"KWI",
    Distance:2542.6,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"LHE",
    To:"LHR",
    Distance:6315.17,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"MAN",
    Distance:6398.15,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"MCT",
    Distance:1814.18,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"LHE",
    To:"MCT",
    Distance:1814.18,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"MCT",
    Distance:1814.18,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"LHE",
    To:"MED",
    Distance:3477.17,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"MHD",
    Distance:1457.99,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"LHE",
    To:"MUX",
    Distance:320.355,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"MXP",
    Distance:5752.9,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"OSL",
    Distance:5549.48,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"PEW",
    Distance:385.397,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"RUH",
    Distance:2801.89,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"RUH",
    Distance:2801.89,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"RUH",
    Distance:2801.89,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"LHE",
    To:"RYK",
    Distance:528.673,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"SHJ",
    Distance:1967.72,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"SKZ",
    Distance:687.383,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"UET",
    Distance:726.139,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"LHE",
    To:"UET",
    Distance:726.139,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHE",
    To:"UET",
    Distance:726.139,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"LHE",
    To:"YYZ",
    Distance:11246.4,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ABV",
    Distance:4774.96,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ABZ",
    Distance:646.349,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ABZ",
    Distance:646.349,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ABZ",
    Distance:646.349,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ABZ",
    Distance:646.349,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ABZ",
    Distance:646.349,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ACC",
    Distance:5100.84,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ACC",
    Distance:5100.84,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ADD",
    Distance:5920.39,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"AGP",
    Distance:1676.61,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"AGP",
    Distance:1676.61,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ALA",
    Distance:5623.55,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"LHR",
    To:"ALA",
    Distance:5623.55,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ALG",
    Distance:1669.65,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"LHR",
    To:"AMM",
    Distance:3683.28,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"AMM",
    Distance:3683.28,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"LHR",
    To:"AMS",
    Distance:370.194,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"AMS",
    Distance:370.194,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"AMS",
    Distance:370.194,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"AMS",
    Distance:370.194,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"AMS",
    Distance:370.194,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ARN",
    Distance:1461.97,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ARN",
    Distance:1461.97,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ARN",
    Distance:1461.97,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"ARN",
    Distance:1461.97,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ARN",
    Distance:1461.97,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LHR",
    To:"ARN",
    Distance:1461.97,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"LHR",
    To:"ASB",
    Distance:4741.07,
    Airport:"Turkmenistan Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ATH",
    Distance:2427.1,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ATH",
    Distance:2427.1,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ATH",
    Distance:2427.1,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ATH",
    Distance:2427.1,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ATH",
    Distance:2427.1,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ATL",
    Distance:6760.55,
    Airport:"Air France"
}),
new Routes(
{
    From:"LHR",
    To:"ATL",
    Distance:6760.55,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ATL",
    Distance:6760.55,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ATL",
    Distance:6760.55,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LHR",
    To:"ATL",
    Distance:6760.55,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"ATL",
    Distance:6760.55,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ATL",
    Distance:6760.55,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ATL",
    Distance:6760.55,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"AUH",
    Distance:5516.78,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"AUH",
    Distance:5516.78,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"AUH",
    Distance:5516.78,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"LHR",
    To:"AUH",
    Distance:5516.78,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"AUS",
    Distance:7892.39,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"AUS",
    Distance:7892.39,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"AUS",
    Distance:7892.39,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"AUS",
    Distance:7892.39,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BAH",
    Distance:5093.88,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BAH",
    Distance:5093.88,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BAH",
    Distance:5093.88,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"LHR",
    To:"BAH",
    Distance:5093.88,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BCN",
    Distance:1148.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BCN",
    Distance:1148.46,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BCN",
    Distance:1148.46,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BEG",
    Distance:1701.69,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BEY",
    Distance:3481.88,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BEY",
    Distance:3481.88,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BEY",
    Distance:3481.88,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BGO",
    Distance:1041.38,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BGO",
    Distance:1041.38,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BHD",
    Distance:502.505,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"LHR",
    To:"BHD",
    Distance:502.505,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BHD",
    Distance:502.505,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BHD",
    Distance:502.505,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BIO",
    Distance:927.539,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BIO",
    Distance:927.539,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BKK",
    Distance:9577.74,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BKK",
    Distance:9577.74,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"LHR",
    To:"BKK",
    Distance:9577.74,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BKK",
    Distance:9577.74,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"LHR",
    To:"BLQ",
    Distance:1163.66,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BLQ",
    Distance:1163.66,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BLR",
    Distance:8065.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BLR",
    Distance:8065.12,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BOM",
    Distance:7213.01,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"LHR",
    To:"BOM",
    Distance:7213.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BOM",
    Distance:7213.01,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BOM",
    Distance:7213.01,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BOM",
    Distance:7213.01,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BOS",
    Distance:5239.44,
    Airport:"Air France"
}),
new Routes(
{
    From:"LHR",
    To:"BOS",
    Distance:5239.44,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BOS",
    Distance:5239.44,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BOS",
    Distance:5239.44,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LHR",
    To:"BOS",
    Distance:5239.44,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"BOS",
    Distance:5239.44,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BOS",
    Distance:5239.44,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BOS",
    Distance:5239.44,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BOS",
    Distance:5239.44,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BRU",
    Distance:350.511,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BRU",
    Distance:350.511,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BRU",
    Distance:350.511,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BSL",
    Distance:720.006,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LHR",
    To:"BSL",
    Distance:720.006,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BSL",
    Distance:720.006,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BUD",
    Distance:1488.93,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BUD",
    Distance:1488.93,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BUD",
    Distance:1488.93,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BWI",
    Distance:5833.18,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"BWI",
    Distance:5833.18,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"BWI",
    Distance:5833.18,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"BWI",
    Distance:5833.18,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"CAI",
    Distance:3532.99,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"CAI",
    Distance:3532.99,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"LHR",
    To:"CAN",
    Distance:9495.37,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"CDG",
    Distance:347.74,
    Airport:"Air France"
}),
new Routes(
{
    From:"LHR",
    To:"CDG",
    Distance:347.74,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"CDG",
    Distance:347.74,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"CGN",
    Distance:534.24,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"LHR",
    To:"CLT",
    Distance:6408.95,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"CLT",
    Distance:6408.95,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LHR",
    To:"CMB",
    Distance:8715.41,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"CMN",
    Distance:2094.59,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"LHR",
    To:"CPH",
    Distance:979.158,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"CPH",
    Distance:979.158,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"CPH",
    Distance:979.158,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LHR",
    To:"CPT",
    Distance:9681.62,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"CPT",
    Distance:9681.62,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"CTU",
    Distance:8301.61,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"DAC",
    Distance:8014.73,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"DEL",
    Distance:6731.12,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"LHR",
    To:"DEL",
    Distance:6731.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"DEL",
    Distance:6731.12,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"DEL",
    Distance:6731.12,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"LHR",
    To:"DEL",
    Distance:6731.12,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"DEN",
    Distance:7496.06,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"DEN",
    Distance:7496.06,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"DEN",
    Distance:7496.06,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"DEN",
    Distance:7496.06,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"DFW",
    Distance:7626.93,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"DFW",
    Distance:7626.93,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"DFW",
    Distance:7626.93,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"DFW",
    Distance:7626.93,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"LHR",
    To:"DFW",
    Distance:7626.93,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"DFW",
    Distance:7626.93,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"DFW",
    Distance:7626.93,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LHR",
    To:"DME",
    Distance:2544.68,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"DOH",
    Distance:5239.69,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"LHR",
    To:"DOH",
    Distance:5239.69,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LHR",
    To:"DTW",
    Distance:6044.19,
    Airport:"Air France"
}),
new Routes(
{
    From:"LHR",
    To:"DTW",
    Distance:6044.19,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LHR",
    To:"DTW",
    Distance:6044.19,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"DTW",
    Distance:6044.19,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"DUB",
    Distance:448.892,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"LHR",
    To:"DUB",
    Distance:448.892,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"DUB",
    Distance:448.892,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"DUS",
    Distance:501.846,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"DUS",
    Distance:501.846,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"DUS",
    Distance:501.846,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LHR",
    To:"DXB",
    Distance:5498.03,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"DXB",
    Distance:5498.03,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"DXB",
    Distance:5498.03,
    Airport:"Emirates"
}),
new Routes(
{
    From:"LHR",
    To:"DXB",
    Distance:5498.03,
    Airport:"Qantas"
}),
new Routes(
{
    From:"LHR",
    To:"DXB",
    Distance:5498.03,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"DXB",
    Distance:5498.03,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"EBB",
    Distance:6497.54,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"EBB",
    Distance:6497.54,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"EDI",
    Distance:532.822,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"EDI",
    Distance:532.822,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"EDI",
    Distance:532.822,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"EDI",
    Distance:532.822,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"EDI",
    Distance:532.822,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"EWR",
    Distance:5561.44,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"EWR",
    Distance:5561.44,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"EWR",
    Distance:5561.44,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LHR",
    To:"EWR",
    Distance:5561.44,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"EWR",
    Distance:5561.44,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"EWR",
    Distance:5561.44,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LHR",
    To:"EWR",
    Distance:5561.44,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"EWR",
    Distance:5561.44,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"EZE",
    Distance:11137.1,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"FAO",
    Distance:1713.51,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"FCO",
    Distance:1444.62,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LHR",
    To:"FCO",
    Distance:1444.62,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"FCO",
    Distance:1444.62,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"FNA",
    Distance:4906.14,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"FRA",
    Distance:653.231,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LHR",
    To:"FRA",
    Distance:653.231,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"FRA",
    Distance:653.231,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"FRA",
    Distance:653.231,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LHR",
    To:"GIB",
    Distance:1747.75,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"GIB",
    Distance:1747.75,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"GIG",
    Distance:9253.5,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"GLA",
    Distance:554.048,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"GLA",
    Distance:554.048,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"GLA",
    Distance:554.048,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"GOT",
    Distance:1068.27,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"GOT",
    Distance:1068.27,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"GOT",
    Distance:1068.27,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"GOT",
    Distance:1068.27,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LHR",
    To:"GRU",
    Distance:9460.27,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"GRU",
    Distance:9460.27,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"GVA",
    Distance:754.674,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"GVA",
    Distance:754.674,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"GVA",
    Distance:754.674,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LHR",
    To:"GYD",
    Distance:4002.05,
    Airport:"Azerbaijan Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"GYD",
    Distance:4002.05,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"HAJ",
    Distance:703.032,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LHR",
    To:"HAJ",
    Distance:703.032,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"HAJ",
    Distance:703.032,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"HAM",
    Distance:745.11,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LHR",
    To:"HAM",
    Distance:745.11,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"HAM",
    Distance:745.11,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"HAM",
    Distance:745.11,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"LHR",
    To:"HEL",
    Distance:1847.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"HEL",
    Distance:1847.42,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"HEL",
    Distance:1847.42,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"HEL",
    Distance:1847.42,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"HKG",
    Distance:9630.33,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"HKG",
    Distance:9630.33,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"LHR",
    To:"HKG",
    Distance:9630.33,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"HND",
    Distance:9590.8,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"LHR",
    To:"HND",
    Distance:9590.8,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"HND",
    Distance:9590.8,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"HND",
    Distance:9590.8,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"HYD",
    Distance:7738.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"HYD",
    Distance:7738.01,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"IAD",
    Distance:5901.57,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"IAD",
    Distance:5901.57,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"IAD",
    Distance:5901.57,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LHR",
    To:"IAD",
    Distance:5901.57,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"IAD",
    Distance:5901.57,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"IAD",
    Distance:5901.57,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LHR",
    To:"IAD",
    Distance:5901.57,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"IAD",
    Distance:5901.57,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"IAH",
    Distance:7762.71,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"IAH",
    Distance:7762.71,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"IAH",
    Distance:7762.71,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"IAH",
    Distance:7762.71,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"IAH",
    Distance:7762.71,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LHR",
    To:"IAH",
    Distance:7762.71,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"IBZ",
    Distance:1408.81,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"IBZ",
    Distance:1408.81,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ICN",
    Distance:8860.6,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ICN",
    Distance:8860.6,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ICN",
    Distance:8860.6,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"LHR",
    To:"IKA",
    Distance:4422.66,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"LHR",
    To:"ISB",
    Distance:6066.21,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"IST",
    Distance:2513.26,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"IST",
    Distance:2513.26,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"IST",
    Distance:2513.26,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"JED",
    Distance:4748.64,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"JED",
    Distance:4748.64,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"JFK",
    Distance:5539.45,
    Airport:"Air France"
}),
new Routes(
{
    From:"LHR",
    To:"JFK",
    Distance:5539.45,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"LHR",
    To:"JFK",
    Distance:5539.45,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"JFK",
    Distance:5539.45,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"JFK",
    Distance:5539.45,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LHR",
    To:"JFK",
    Distance:5539.45,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"JFK",
    Distance:5539.45,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"JFK",
    Distance:5539.45,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"JFK",
    Distance:5539.45,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"LHR",
    To:"JFK",
    Distance:5539.45,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"JFK",
    Distance:5539.45,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LHR",
    To:"JFK",
    Distance:5539.45,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"JMK",
    Distance:2552.93,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"JNB",
    Distance:9075.8,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"JNB",
    Distance:9075.8,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"JNB",
    Distance:9075.8,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"LHR",
    To:"JNB",
    Distance:9075.8,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"JNB",
    Distance:9075.8,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LHR",
    To:"JNB",
    Distance:9075.8,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"JTR",
    Distance:2644.81,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"KBP",
    Distance:2185.15,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"KEF",
    Distance:1894.38,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"LHR",
    To:"KHI",
    Distance:6338.81,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"KUL",
    Distance:10605.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"KUL",
    Distance:10605.3,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"KWI",
    Distance:4674.88,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"KWI",
    Distance:4674.88,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"KWI",
    Distance:4674.88,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"LHR",
    To:"LAD",
    Distance:6836.56,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"LAS",
    Distance:8394.56,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"LAS",
    Distance:8394.56,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"LAS",
    Distance:8394.56,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"LAS",
    Distance:8394.56,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"LAX",
    Distance:8759.18,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"LHR",
    To:"LAX",
    Distance:8759.18,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"LAX",
    Distance:8759.18,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"LAX",
    Distance:8759.18,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LHR",
    To:"LAX",
    Distance:8759.18,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"LAX",
    Distance:8759.18,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"LAX",
    Distance:8759.18,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LHR",
    To:"LAX",
    Distance:8759.18,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"LAX",
    Distance:8759.18,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LHR",
    To:"LAX",
    Distance:8759.18,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"LAX",
    Distance:8759.18,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"LBA",
    Distance:277.603,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"LBA",
    Distance:277.603,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"LBA",
    Distance:277.603,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"LCA",
    Distance:3278.06,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"LCA",
    Distance:3278.06,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"LCA",
    Distance:3278.06,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"LHR",
    To:"LCG",
    Distance:1085.57,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"LCG",
    Distance:1085.57,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"LED",
    Distance:2113.17,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"LHE",
    Distance:6315.17,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"LIN",
    Distance:981.092,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"LHR",
    To:"LIN",
    Distance:981.092,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LHR",
    To:"LIN",
    Distance:981.092,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"LIN",
    Distance:981.092,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"LIS",
    Distance:1564.62,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"LHR",
    To:"LIS",
    Distance:1564.62,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"LIS",
    Distance:1564.62,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"LIS",
    Distance:1564.62,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"LIS",
    Distance:1564.62,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LHR",
    To:"LIS",
    Distance:1564.62,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LHR",
    To:"LIS",
    Distance:1564.62,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LHR",
    To:"LOS",
    Distance:5004.82,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LHR",
    To:"LOS",
    Distance:5004.82,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"LOS",
    Distance:5004.82,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"LUX",
    Distance:514.165,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"LUX",
    Distance:514.165,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"LXR",
    Distance:4005.27,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"LHR",
    To:"LYS",
    Distance:758.208,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"LYS",
    Distance:758.208,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"MAA",
    Distance:8235.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"MAA",
    Distance:8235.3,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"MAD",
    Distance:1244.4,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"MAD",
    Distance:1244.4,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"MAN",
    Distance:242.168,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"MAN",
    Distance:242.168,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"MAN",
    Distance:242.168,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"MAN",
    Distance:242.168,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"MAN",
    Distance:242.168,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"MCT",
    Distance:5833.69,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"LHR",
    To:"MEX",
    Distance:8903.65,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LHR",
    To:"MEX",
    Distance:8903.65,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"MEX",
    Distance:8903.65,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"MIA",
    Distance:7108.83,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"MIA",
    Distance:7108.83,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"MIA",
    Distance:7108.83,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LHR",
    To:"MIA",
    Distance:7108.83,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"MIA",
    Distance:7108.83,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"MIA",
    Distance:7108.83,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LHR",
    To:"MIA",
    Distance:7108.83,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"MLA",
    Distance:2103.11,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"LHR",
    To:"MNL",
    Distance:10766.7,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"MRS",
    Distance:990.07,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"MRS",
    Distance:990.07,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"MRU",
    Distance:9784.93,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"LHR",
    To:"MSP",
    Distance:6442.53,
    Airport:"Air France"
}),
new Routes(
{
    From:"LHR",
    To:"MSP",
    Distance:6442.53,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LHR",
    To:"MSP",
    Distance:6442.53,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"MSP",
    Distance:6442.53,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"MUC",
    Distance:941.766,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LHR",
    To:"MUC",
    Distance:941.766,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"MUC",
    Distance:941.766,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"MUC",
    Distance:941.766,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LHR",
    To:"MXP",
    Distance:936.843,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"MXP",
    Distance:936.843,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"NAS",
    Distance:6976.48,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"NBO",
    Distance:6841.74,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"NBO",
    Distance:6841.74,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"NBO",
    Distance:6841.74,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"LHR",
    To:"NCE",
    Distance:1041.66,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"NCE",
    Distance:1041.66,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"NCL",
    Distance:404.207,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"NCL",
    Distance:404.207,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"NCL",
    Distance:404.207,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"NRT",
    Distance:9590.86,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"LHR",
    To:"NRT",
    Distance:9590.86,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"NRT",
    Distance:9590.86,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"NRT",
    Distance:9590.86,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"OPO",
    Distance:1298.76,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ORD",
    Distance:6343.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ORD",
    Distance:6343.43,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ORD",
    Distance:6343.43,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LHR",
    To:"ORD",
    Distance:6343.43,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"ORD",
    Distance:6343.43,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ORD",
    Distance:6343.43,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LHR",
    To:"ORD",
    Distance:6343.43,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ORD",
    Distance:6343.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ORD",
    Distance:6343.43,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ORK",
    Distance:555.067,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"LHR",
    To:"ORY",
    Distance:366.181,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LHR",
    To:"ORY",
    Distance:366.181,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ORY",
    Distance:366.181,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"OSL",
    Distance:1204.93,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"OSL",
    Distance:1204.93,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"OSL",
    Distance:1204.93,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"OSL",
    Distance:1204.93,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LHR",
    To:"OTP",
    Distance:2105.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"OTP",
    Distance:2105.01,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"OTP",
    Distance:2105.01,
    Airport:"Tarom"
}),
new Routes(
{
    From:"LHR",
    To:"PEK",
    Distance:8152.71,
    Airport:"Air China"
}),
new Routes(
{
    From:"LHR",
    To:"PEK",
    Distance:8152.71,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"PEK",
    Distance:8152.71,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"PHL",
    Distance:5689.59,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"PHL",
    Distance:5689.59,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"PHL",
    Distance:5689.59,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"PHL",
    Distance:5689.59,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"PHL",
    Distance:5689.59,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LHR",
    To:"PHX",
    Distance:8462.43,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"PHX",
    Distance:8462.43,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"PHX",
    Distance:8462.43,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"PHX",
    Distance:8462.43,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"PMI",
    Distance:1348.62,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"PMI",
    Distance:1348.62,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"PRG",
    Distance:1044.27,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"PRG",
    Distance:1044.27,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"PSA",
    Distance:1186.61,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"PSA",
    Distance:1186.61,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"PVG",
    Distance:9240.88,
    Airport:"Air China"
}),
new Routes(
{
    From:"LHR",
    To:"PVG",
    Distance:9240.88,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"PVG",
    Distance:9240.88,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"PVG",
    Distance:9240.88,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"RDU",
    Distance:6215.93,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"RDU",
    Distance:6215.93,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"RDU",
    Distance:6215.93,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"RDU",
    Distance:6215.93,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"RDU",
    Distance:6215.93,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"RDU",
    Distance:6215.93,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LHR",
    To:"RJK",
    Distance:1307.21,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"RTM",
    Distance:341.582,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"RTM",
    Distance:341.582,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"RUH",
    Distance:4940.81,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"RUH",
    Distance:4940.81,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"RUH",
    Distance:4940.81,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"SAN",
    Distance:8806.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"SAN",
    Distance:8806.42,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"SAN",
    Distance:8806.42,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"SAN",
    Distance:8806.42,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"SEA",
    Distance:7701.51,
    Airport:"Air France"
}),
new Routes(
{
    From:"LHR",
    To:"SEA",
    Distance:7701.51,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"SEA",
    Distance:7701.51,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"SEA",
    Distance:7701.51,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LHR",
    To:"SEA",
    Distance:7701.51,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"SEA",
    Distance:7701.51,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"SEA",
    Distance:7701.51,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"SEA",
    Distance:7701.51,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"SFO",
    Distance:8615.47,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"LHR",
    To:"SFO",
    Distance:8615.47,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"SFO",
    Distance:8615.47,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"SFO",
    Distance:8615.47,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LHR",
    To:"SFO",
    Distance:8615.47,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"SFO",
    Distance:8615.47,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"SFO",
    Distance:8615.47,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LHR",
    To:"SFO",
    Distance:8615.47,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"SFO",
    Distance:8615.47,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"SFO",
    Distance:8615.47,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"SIN",
    Distance:10883.1,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"SIN",
    Distance:10883.1,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"SIN",
    Distance:10883.1,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"SIN",
    Distance:10883.1,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"SNN",
    Distance:593.662,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"LHR",
    To:"SOF",
    Distance:2040.86,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"SOF",
    Distance:2040.86,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"SOF",
    Distance:2040.86,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"LHR",
    To:"SPU",
    Distance:1531.68,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"STR",
    Distance:756.486,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LHR",
    To:"STR",
    Distance:756.486,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"STR",
    Distance:756.486,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"STR",
    Distance:756.486,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"LHR",
    To:"SVG",
    Distance:908.476,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"SVG",
    Distance:908.476,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"SVG",
    Distance:908.476,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LHR",
    To:"SVO",
    Distance:2508.12,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"TAS",
    Distance:5260.56,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"LHR",
    To:"TIP",
    Distance:2366.1,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"TIP",
    Distance:2366.1,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"TLS",
    Distance:883.312,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"TLS",
    Distance:883.312,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"TLV",
    Distance:3588.97,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"TLV",
    Distance:3588.97,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"TNG",
    Distance:1804.36,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"LHR",
    To:"TSE",
    Distance:4796.53,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"LHR",
    To:"TUN",
    Distance:1831.89,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"LHR",
    To:"TXL",
    Distance:947.039,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LHR",
    To:"TXL",
    Distance:947.039,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"TXL",
    Distance:947.039,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"TXL",
    Distance:947.039,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"LHR",
    To:"VCE",
    Distance:1151.79,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"VCE",
    Distance:1151.79,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"VIE",
    Distance:1275.16,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LHR",
    To:"VIE",
    Distance:1275.16,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"VIE",
    Distance:1275.16,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"VIE",
    Distance:1275.16,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"VKO",
    Distance:2502.24,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"VKO",
    Distance:2502.24,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LHR",
    To:"WAW",
    Distance:1469.42,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"LHR",
    To:"WAW",
    Distance:1469.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"WAW",
    Distance:1469.42,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"WAW",
    Distance:1469.42,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"WAW",
    Distance:1469.42,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"YEG",
    Distance:6808.79,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LHR",
    To:"YEG",
    Distance:6808.79,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LHR",
    To:"YHZ",
    Distance:4584.35,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LHR",
    To:"YHZ",
    Distance:4584.35,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LHR",
    To:"YOW",
    Distance:5345.96,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LHR",
    To:"YOW",
    Distance:5345.96,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LHR",
    To:"YUL",
    Distance:5213.94,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LHR",
    To:"YUL",
    Distance:5213.94,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"YUL",
    Distance:5213.94,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"YUL",
    Distance:5213.94,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"YUL",
    Distance:5213.94,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"YUL",
    Distance:5213.94,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LHR",
    To:"YVR",
    Distance:7578.01,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LHR",
    To:"YVR",
    Distance:7578.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"YVR",
    Distance:7578.01,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"YVR",
    Distance:7578.01,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"YVR",
    Distance:7578.01,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"YVR",
    Distance:7578.01,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LHR",
    To:"YYC",
    Distance:7014.42,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LHR",
    To:"YYC",
    Distance:7014.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"YYC",
    Distance:7014.42,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"YYC",
    Distance:7014.42,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"YYC",
    Distance:7014.42,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"YYC",
    Distance:7014.42,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LHR",
    To:"YYT",
    Distance:3715.64,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LHR",
    To:"YYT",
    Distance:3715.64,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LHR",
    To:"YYZ",
    Distance:5706.77,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LHR",
    To:"YYZ",
    Distance:5706.77,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"YYZ",
    Distance:5706.77,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"YYZ",
    Distance:5706.77,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"YYZ",
    Distance:5706.77,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LHR",
    To:"YYZ",
    Distance:5706.77,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"YYZ",
    Distance:5706.77,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LHR",
    To:"ZAG",
    Distance:1368.13,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ZAG",
    Distance:1368.13,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ZAG",
    Distance:1368.13,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ZRH",
    Distance:788.427,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LHR",
    To:"ZRH",
    Distance:788.427,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LHR",
    To:"ZRH",
    Distance:788.427,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LHR",
    To:"ZRH",
    Distance:788.427,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LHR",
    To:"ZYL",
    Distance:8017.88,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"CAN",
    Distance:1693.47,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"CAN",
    Distance:1693.47,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"CGO",
    Distance:943.984,
    Airport:"Air China"
}),
new Routes(
{
    From:"LHW",
    To:"CGO",
    Distance:943.984,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"CGO",
    Distance:943.984,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"CGO",
    Distance:943.984,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"CKG",
    Distance:765.251,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"CKG",
    Distance:765.251,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"CKG",
    Distance:765.251,
    Airport:"West Air China"
}),
new Routes(
{
    From:"LHW",
    To:"CSX",
    Distance:1261.32,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"CSX",
    Distance:1261.32,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"CSX",
    Distance:1261.32,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"CSX",
    Distance:1261.32,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"CTU",
    Distance:616.611,
    Airport:"Air China"
}),
new Routes(
{
    From:"LHW",
    To:"CTU",
    Distance:616.611,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"CTU",
    Distance:616.611,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"CTU",
    Distance:616.611,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"DNH",
    Distance:912.794,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"LHW",
    To:"DNH",
    Distance:912.794,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"HFE",
    Distance:1349.45,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"HGH",
    Distance:1693.62,
    Airport:"Air China"
}),
new Routes(
{
    From:"LHW",
    To:"HGH",
    Distance:1693.62,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"HGH",
    Distance:1693.62,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"INC",
    Distance:337.499,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"LHW",
    To:"IQN",
    Distance:360.469,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"LHW",
    To:"IQN",
    Distance:360.469,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"IQN",
    Distance:360.469,
    Airport:"China United"
}),
new Routes(
{
    From:"LHW",
    To:"JGN",
    Distance:621.634,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"LHW",
    To:"JGN",
    Distance:621.634,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"JGN",
    Distance:621.634,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"KMG",
    Distance:1239.81,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"LHW",
    To:"KMG",
    Distance:1239.81,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"KMG",
    Distance:1239.81,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"KWE",
    Distance:1106.97,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"KWL",
    Distance:1357.77,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"LHW",
    To:"LXA",
    Distance:1408.06,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"LHW",
    To:"NKG",
    Distance:1486.29,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"NNG",
    Distance:1565.06,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"LHW",
    To:"PEK",
    Distance:1215.83,
    Airport:"Air China"
}),
new Routes(
{
    From:"LHW",
    To:"PEK",
    Distance:1215.83,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"PEK",
    Distance:1215.83,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"PEK",
    Distance:1215.83,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"LHW",
    To:"PEK",
    Distance:1215.83,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"PVG",
    Distance:1769.18,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"PVG",
    Distance:1769.18,
    Airport:"China SSS"
}),
new Routes(
{
    From:"LHW",
    To:"PVG",
    Distance:1769.18,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"SHA",
    Distance:1725.79,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"SHA",
    Distance:1725.79,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"SHE",
    Distance:1798.92,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"SJW",
    Distance:1009.76,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"SZX",
    Distance:1792.24,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"TNA",
    Distance:1217.5,
    Airport:"Air China"
}),
new Routes(
{
    From:"LHW",
    To:"TNA",
    Distance:1217.5,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"TNA",
    Distance:1217.5,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"TNA",
    Distance:1217.5,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"TPE",
    Distance:2079.82,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"TSN",
    Distance:1253.16,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"TSN",
    Distance:1253.16,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"TYN",
    Distance:820.855,
    Airport:"Air China"
}),
new Routes(
{
    From:"LHW",
    To:"TYN",
    Distance:820.855,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"LHW",
    To:"TYN",
    Distance:820.855,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"TYN",
    Distance:820.855,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"LHW",
    To:"URC",
    Distance:1620.54,
    Airport:"Air China"
}),
new Routes(
{
    From:"LHW",
    To:"URC",
    Distance:1620.54,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"LHW",
    To:"URC",
    Distance:1620.54,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"URC",
    Distance:1620.54,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"URC",
    Distance:1620.54,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"URC",
    Distance:1620.54,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"LHW",
    To:"URC",
    Distance:1620.54,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"URC",
    Distance:1620.54,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"URC",
    Distance:1620.54,
    Airport:"West Air China"
}),
new Routes(
{
    From:"LHW",
    To:"WUH",
    Distance:1146.63,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"WUH",
    Distance:1146.63,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"WUH",
    Distance:1146.63,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"XIY",
    Distance:501.609,
    Airport:"Air China"
}),
new Routes(
{
    From:"LHW",
    To:"XIY",
    Distance:501.609,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"LHW",
    To:"XIY",
    Distance:501.609,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"XIY",
    Distance:501.609,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"XIY",
    Distance:501.609,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"XIY",
    Distance:501.609,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"YCU",
    Distance:678.075,
    Airport:"Air China"
}),
new Routes(
{
    From:"LHW",
    To:"YCU",
    Distance:678.075,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"LHW",
    To:"YZY",
    Distance:8924.32,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"LIF",
    To:"GEA",
    Distance:183.046,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"LIF",
    To:"TGJ",
    Distance:68.6217,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"LIF",
    To:"UVE",
    Distance:70.972,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"LIG",
    To:"AVN",
    Distance:365.015,
    Airport:"Nationwide Airlines"
}),
new Routes(
{
    From:"LIG",
    To:"BRS",
    Distance:677.136,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIG",
    To:"EMA",
    Distance:795.718,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIG",
    To:"LBA",
    Distance:912.696,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIG",
    To:"LPL",
    Distance:879.648,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIG",
    To:"LYS",
    Distance:303.594,
    Airport:"Nationwide Airlines"
}),
new Routes(
{
    From:"LIG",
    To:"NCE",
    Distance:535.74,
    Airport:"Twin Jet"
}),
new Routes(
{
    From:"LIG",
    To:"ORY",
    Distance:330.49,
    Airport:"Twin Jet"
}),
new Routes(
{
    From:"LIG",
    To:"SOU",
    Distance:595.781,
    Airport:"Air France"
}),
new Routes(
{
    From:"LIG",
    To:"SOU",
    Distance:595.781,
    Airport:"Flybe"
}),
new Routes(
{
    From:"LIG",
    To:"STN",
    Distance:673.177,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIH",
    To:"DEN",
    Distance:5486.7,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LIH",
    To:"HNL",
    Distance:163.631,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"LIH",
    To:"HNL",
    Distance:163.631,
    Airport:"Island Air (WP)"
}),
new Routes(
{
    From:"LIH",
    To:"HNL",
    Distance:163.631,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIH",
    To:"HNL",
    Distance:163.631,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LIH",
    To:"LAX",
    Distance:4203.01,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LIH",
    To:"LAX",
    Distance:4203.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIH",
    To:"LAX",
    Distance:4203.01,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LIH",
    To:"LAX",
    Distance:4203.01,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIH",
    To:"LAX",
    Distance:4203.01,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LIH",
    To:"OAK",
    Distance:3950.22,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LIH",
    To:"OAK",
    Distance:3950.22,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIH",
    To:"OGG",
    Distance:323.986,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"LIH",
    To:"PHX",
    Distance:4787.2,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIH",
    To:"PHX",
    Distance:4787.2,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIH",
    To:"SAN",
    Distance:4300.52,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LIH",
    To:"SEA",
    Distance:4345.01,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LIH",
    To:"SFO",
    Distance:3934.09,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LIH",
    To:"SJC",
    Distance:3964.55,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LIH",
    To:"SJC",
    Distance:3964.55,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIH",
    To:"YVR",
    Distance:4382.7,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LIL",
    To:"AGA",
    Distance:2477.5,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LIL",
    To:"AJA",
    Distance:1055.48,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"LIL",
    To:"AJA",
    Distance:1055.48,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"LIL",
    To:"ALG",
    Distance:1542.41,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"LIL",
    To:"ALG",
    Distance:1542.41,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"LIL",
    To:"BCN",
    Distance:1033.14,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LIL",
    To:"BCN",
    Distance:1033.14,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LIL",
    To:"BIA",
    Distance:1015.07,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"LIL",
    To:"BIA",
    Distance:1015.07,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LIL",
    To:"BIQ",
    Distance:862.388,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LIL",
    To:"BOD",
    Distance:698.023,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LIL",
    To:"BOD",
    Distance:698.023,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIL",
    To:"CFU",
    Distance:1789.41,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"LIL",
    To:"DBV",
    Distance:1457.56,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"LIL",
    To:"DJE",
    Distance:1957.89,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"LIL",
    To:"DJE",
    Distance:1957.89,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LIL",
    To:"FAO",
    Distance:1744.08,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"LIL",
    To:"FSC",
    Distance:1108.32,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LIL",
    To:"FUE",
    Distance:2841.21,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"LIL",
    To:"GVA",
    Distance:529.843,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIL",
    To:"HER",
    Distance:2451.56,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"LIL",
    To:"LGG",
    Distance:166.333,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"LIL",
    To:"LYS",
    Distance:557.761,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LIL",
    To:"MPL",
    Distance:779.577,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LIL",
    To:"MRS",
    Distance:808.533,
    Airport:"Air France"
}),
new Routes(
{
    From:"LIL",
    To:"MRS",
    Distance:808.533,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIL",
    To:"NCE",
    Distance:828.393,
    Airport:"Air France"
}),
new Routes(
{
    From:"LIL",
    To:"NCE",
    Distance:828.393,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIL",
    To:"NTE",
    Distance:511.564,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LIL",
    To:"OPO",
    Distance:1375.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIL",
    To:"ORN",
    Distance:1687.59,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"LIL",
    To:"ORN",
    Distance:1687.59,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"LIL",
    To:"OUD",
    Distance:1800.26,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LIL",
    To:"RAK",
    Distance:2298.82,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LIL",
    To:"RHO",
    Distance:2537.24,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"LIL",
    To:"SPU",
    Distance:1266.22,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"LIL",
    To:"SXB",
    Distance:397.185,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LIL",
    To:"TLS",
    Distance:781.829,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LIL",
    To:"TLS",
    Distance:781.829,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIL",
    To:"VCE",
    Distance:887.955,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LIM",
    To:"AMS",
    Distance:10519.9,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIM",
    To:"AMS",
    Distance:10519.9,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"ANF",
    Distance:1452.57,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"ANS",
    Distance:448.947,
    Airport:"AeroWorld "
}),
new Routes(
{
    From:"LIM",
    To:"AQP",
    Distance:765.519,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LIM",
    To:"AQP",
    Distance:765.519,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"AQP",
    Distance:765.519,
    Airport:"Peruvian Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"ASU",
    Distance:2528.53,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"ATA",
    Distance:302.051,
    Airport:"AeroWorld "
}),
new Routes(
{
    From:"LIM",
    To:"ATL",
    Distance:5135.76,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LIM",
    To:"AYP",
    Distance:339.981,
    Airport:"AeroWorld "
}),
new Routes(
{
    From:"LIM",
    To:"AYP",
    Distance:339.981,
    Airport:"Star Peru (2I)"
}),
new Routes(
{
    From:"LIM",
    To:"BOG",
    Distance:1888.29,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"BOG",
    Distance:1888.29,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"CCS",
    Distance:2753.12,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"CCS",
    Distance:2753.12,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"CDG",
    Distance:10276,
    Airport:"Air France"
}),
new Routes(
{
    From:"LIM",
    To:"CDG",
    Distance:10276,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIM",
    To:"CIX",
    Distance:653.705,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"CJA",
    Distance:563.464,
    Airport:"AeroWorld "
}),
new Routes(
{
    From:"LIM",
    To:"CJA",
    Distance:563.464,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"CLO",
    Distance:1732.66,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"COR",
    Distance:2521.73,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"CUN",
    Distance:3827.57,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"CUZ",
    Distance:585.912,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"CUZ",
    Distance:585.912,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"CUZ",
    Distance:585.912,
    Airport:"Peruvian Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"CUZ",
    Distance:585.912,
    Airport:"Star Peru (2I)"
}),
new Routes(
{
    From:"LIM",
    To:"CUZ",
    Distance:585.912,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"DFW",
    Distance:5424.05,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"DFW",
    Distance:5424.05,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"DFW",
    Distance:5424.05,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIM",
    To:"EWR",
    Distance:5869.42,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"EZE",
    Distance:3152.97,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"LIM",
    To:"EZE",
    Distance:3152.97,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"EZE",
    Distance:3152.97,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"FLL",
    Distance:4248.65,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LIM",
    To:"FLL",
    Distance:4248.65,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"GIG",
    Distance:3777.31,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"GIG",
    Distance:3777.31,
    Airport:"Grupo TACA"
}),
new Routes(
{
    From:"LIM",
    To:"GRU",
    Distance:3474.9,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"GRU",
    Distance:3474.9,
    Airport:"Grupo TACA"
}),
new Routes(
{
    From:"LIM",
    To:"GRU",
    Distance:3474.9,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"GRU",
    Distance:3474.9,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"GYE",
    Distance:1138.54,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"GYE",
    Distance:1138.54,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"HAV",
    Distance:3935.51,
    Airport:"Grupo TACA"
}),
new Routes(
{
    From:"LIM",
    To:"HAV",
    Distance:3935.51,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"HUU",
    Distance:258.156,
    Airport:"AeroWorld "
}),
new Routes(
{
    From:"LIM",
    To:"HUU",
    Distance:258.156,
    Airport:"Star Peru (2I)"
}),
new Routes(
{
    From:"LIM",
    To:"IAH",
    Distance:5062.45,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"IGU",
    Distance:2811.91,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"IGU",
    Distance:2811.91,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"IQT",
    Distance:1007.11,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"IQT",
    Distance:1007.11,
    Airport:"Peruvian Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"JFK",
    Distance:5865.78,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"JFK",
    Distance:5865.78,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"JFK",
    Distance:5865.78,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"JUL",
    Distance:843.226,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"LAX",
    Distance:6720.6,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"LAX",
    Distance:6720.6,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"LAX",
    Distance:6720.6,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"LIM",
    To:"LAX",
    Distance:6720.6,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"LAX",
    Distance:6720.6,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"LPB",
    Distance:1083.15,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LIM",
    To:"LPB",
    Distance:1083.15,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"LPB",
    Distance:1083.15,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"MAD",
    Distance:9526.68,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"LIM",
    To:"MAD",
    Distance:9526.68,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"MAD",
    Distance:9526.68,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"MDE",
    Distance:2030.87,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"MEX",
    Distance:4244.99,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LIM",
    To:"MEX",
    Distance:4244.99,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"MEX",
    Distance:4244.99,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"MIA",
    Distance:4218.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"MIA",
    Distance:4218.89,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"MIA",
    Distance:4218.89,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"MIA",
    Distance:4218.89,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIM",
    To:"MIA",
    Distance:4218.89,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"MVD",
    Distance:3310.45,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"PCL",
    Distance:491.343,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"PCL",
    Distance:491.343,
    Airport:"Peruvian Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"PCL",
    Distance:491.343,
    Airport:"Star Peru (2I)"
}),
new Routes(
{
    From:"LIM",
    To:"PEM",
    Distance:859.153,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"PIU",
    Distance:850,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"PIU",
    Distance:850,
    Airport:"Peruvian Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"POA",
    Distance:3338.15,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"POA",
    Distance:3338.15,
    Airport:"Grupo TACA"
}),
new Routes(
{
    From:"LIM",
    To:"PTY",
    Distance:2358.83,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"PUJ",
    Distance:3534.16,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"SAL",
    Distance:3122.53,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"SCL",
    Distance:2461.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"SCL",
    Distance:2461.89,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"SCL",
    Distance:2461.89,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"SCL",
    Distance:2461.89,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"LIM",
    To:"SCL",
    Distance:2461.89,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"SCL",
    Distance:2461.89,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"SDQ",
    Distance:3483.15,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"SJO",
    Distance:2570.47,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"TBP",
    Distance:1008.06,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"TCQ",
    Distance:994.201,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"TPP",
    Distance:618.401,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"TPP",
    Distance:618.401,
    Airport:"Peruvian Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"TPP",
    Distance:618.401,
    Airport:"Star Peru (2I)"
}),
new Routes(
{
    From:"LIM",
    To:"TRU",
    Distance:489.54,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"UIO",
    Distance:1329.75,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"UIO",
    Distance:1329.75,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"UIO",
    Distance:1329.75,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LIM",
    To:"UIO",
    Distance:1329.75,
    Airport:"TAME"
}),
new Routes(
{
    From:"LIM",
    To:"VVI",
    Distance:1626.58,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LIM",
    To:"VVI",
    Distance:1626.58,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIM",
    To:"VVI",
    Distance:1626.58,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LIM",
    To:"YYZ",
    Distance:6198.72,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LIN",
    To:"AHO",
    Distance:541.131,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"AMS",
    Distance:831.082,
    Airport:"Air One"
}),
new Routes(
{
    From:"LIN",
    To:"AMS",
    Distance:831.082,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"AMS",
    Distance:831.082,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LIN",
    To:"ARN",
    Distance:1681.02,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LIN",
    To:"BCN",
    Distance:741.971,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"BDS",
    Distance:882.171,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"BRI",
    Distance:771.547,
    Airport:"Air One"
}),
new Routes(
{
    From:"LIN",
    To:"BRI",
    Distance:771.547,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"BRU",
    Distance:702.773,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"BRU",
    Distance:702.773,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"LIN",
    To:"BRU",
    Distance:702.773,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LIN",
    To:"BRU",
    Distance:702.773,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LIN",
    To:"CAG",
    Distance:688.942,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"CDG",
    Distance:644.077,
    Airport:"Air France"
}),
new Routes(
{
    From:"LIN",
    To:"CDG",
    Distance:644.077,
    Airport:"Air One"
}),
new Routes(
{
    From:"LIN",
    To:"CDG",
    Distance:644.077,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"CIY",
    Distance:1039.16,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"CPH",
    Distance:1155.75,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LIN",
    To:"CTA",
    Distance:1009.2,
    Airport:"Air One"
}),
new Routes(
{
    From:"LIN",
    To:"CTA",
    Distance:1009.2,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"CTA",
    Distance:1009.2,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"LIN",
    To:"DUB",
    Distance:1426.77,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"LIN",
    To:"FCO",
    Distance:470.219,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"FCO",
    Distance:470.219,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIN",
    To:"FRA",
    Distance:512.358,
    Airport:"Air Dolomiti"
}),
new Routes(
{
    From:"LIN",
    To:"FRA",
    Distance:512.358,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"FRA",
    Distance:512.358,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"LIN",
    To:"FRA",
    Distance:512.358,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LIN",
    To:"LCY",
    Distance:955.791,
    Airport:"Air France"
}),
new Routes(
{
    From:"LIN",
    To:"LCY",
    Distance:955.791,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"LGW",
    Distance:943.414,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIN",
    To:"LHR",
    Distance:981.092,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"LIN",
    To:"LHR",
    Distance:981.092,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"LHR",
    Distance:981.092,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIN",
    To:"LHR",
    Distance:981.092,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LIN",
    To:"MAD",
    Distance:1179.23,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LIN",
    To:"MLA",
    Distance:1152.19,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"LIN",
    To:"MLA",
    Distance:1152.19,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"LIN",
    To:"NAP",
    Distance:649.612,
    Airport:"Air Italy"
}),
new Routes(
{
    From:"LIN",
    To:"NAP",
    Distance:649.612,
    Airport:"Air One"
}),
new Routes(
{
    From:"LIN",
    To:"NAP",
    Distance:649.612,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"NAP",
    Distance:649.612,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"LIN",
    To:"OLB",
    Distance:505.918,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"LIN",
    To:"ORY",
    Distance:637.823,
    Airport:"Air France"
}),
new Routes(
{
    From:"LIN",
    To:"ORY",
    Distance:637.823,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"ORY",
    Distance:637.823,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIN",
    To:"OTP",
    Distance:1323.86,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"OTP",
    Distance:1323.86,
    Airport:"Tarom"
}),
new Routes(
{
    From:"LIN",
    To:"PMO",
    Distance:867.64,
    Airport:"Air One"
}),
new Routes(
{
    From:"LIN",
    To:"PMO",
    Distance:867.64,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"PRG",
    Distance:637.407,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"PSR",
    Distance:516.046,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"REG",
    Distance:974.918,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"REG",
    Distance:974.918,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"LIN",
    To:"SUF",
    Distance:925.662,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"TRS",
    Distance:328.913,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"TXL",
    Distance:843.142,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"LIN",
    To:"VIE",
    Distance:629.113,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIN",
    To:"WAW",
    Distance:1133.96,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIR",
    To:"ATL",
    Distance:2564.84,
    Airport:"Air France"
}),
new Routes(
{
    From:"LIR",
    To:"ATL",
    Distance:2564.84,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LIR",
    To:"CLT",
    Distance:2777.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIR",
    To:"CLT",
    Distance:2777.01,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIR",
    To:"DEN",
    Distance:3761.89,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"LIR",
    To:"DFW",
    Distance:2744.57,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIR",
    To:"DFW",
    Distance:2744.57,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIR",
    To:"EWR",
    Distance:3528.45,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LIR",
    To:"IAH",
    Distance:2383.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LIR",
    To:"JFK",
    Distance:3535.32,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LIR",
    To:"JFK",
    Distance:3535.32,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LIR",
    To:"LAX",
    Distance:4229.62,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LIR",
    To:"MIA",
    Distance:1778.27,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIR",
    To:"MIA",
    Distance:1778.27,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIR",
    To:"PTY",
    Distance:695.865,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"LIR",
    To:"SAL",
    Distance:496.048,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LIR",
    To:"SJO",
    Distance:160.605,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIR",
    To:"SJO",
    Distance:160.605,
    Airport:"CAL Cargo Air Lines"
}),
new Routes(
{
    From:"LIR",
    To:"SJO",
    Distance:160.605,
    Airport:"Euro Exec Express"
}),
new Routes(
{
    From:"LIR",
    To:"SJO",
    Distance:160.605,
    Airport:"LACSA"
}),
new Routes(
{
    From:"LIR",
    To:"SYQ",
    Distance:169.182,
    Airport:"CAL Cargo Air Lines"
}),
new Routes(
{
    From:"LIR",
    To:"TNO",
    Distance:42.8448,
    Airport:"CAL Cargo Air Lines"
}),
new Routes(
{
    From:"LIR",
    To:"YYZ",
    Distance:3722.69,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"LIR",
    To:"YYZ",
    Distance:3722.69,
    Airport:"WestJet"
}),
new Routes(
{
    From:"LIS",
    To:"ACC",
    Distance:3798.04,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"AGP",
    Distance:470.179,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"LIS",
    To:"AGP",
    Distance:470.179,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"AGP",
    Distance:470.179,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"ALG",
    Distance:1109.79,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"LIS",
    To:"ALG",
    Distance:1109.79,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"AMS",
    Distance:1846.3,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"LIS",
    To:"AMS",
    Distance:1846.3,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LIS",
    To:"AMS",
    Distance:1846.3,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"AMS",
    Distance:1846.3,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"AMS",
    Distance:1846.3,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"AMS",
    Distance:1846.3,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"LIS",
    To:"AMS",
    Distance:1846.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIS",
    To:"AMS",
    Distance:1846.3,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"ARN",
    Distance:2998.31,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"ARN",
    Distance:2998.31,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"BCN",
    Distance:994,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"BCN",
    Distance:994,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"BCN",
    Distance:994,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"BCN",
    Distance:994,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"BIO",
    Distance:724.289,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"BIO",
    Distance:724.289,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"BIO",
    Distance:724.289,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"BKO",
    Distance:2920.97,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"BLQ",
    Distance:1807.43,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIS",
    To:"BLQ",
    Distance:1807.43,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"BLQ",
    Distance:1807.43,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"BOD",
    Distance:968.147,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"BOD",
    Distance:968.147,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"BOS",
    Distance:5124.08,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"BOS",
    Distance:5124.08,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"BRS",
    Distance:1487.6,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"BRU",
    Distance:1717.47,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"BRU",
    Distance:1717.47,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LIS",
    To:"BRU",
    Distance:1717.47,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"BRU",
    Distance:1717.47,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"BRU",
    Distance:1717.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIS",
    To:"BRU",
    Distance:1717.47,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"BRU",
    Distance:1717.47,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"LIS",
    To:"BRU",
    Distance:1717.47,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIS",
    To:"BSB",
    Distance:7293.59,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"BSL",
    Distance:1663.08,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"BUD",
    Distance:2480,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"BVA",
    Distance:1484.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIS",
    To:"BVC",
    Distance:2852.37,
    Airport:"TACV"
}),
new Routes(
{
    From:"LIS",
    To:"BVC",
    Distance:2852.37,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"CCS",
    Distance:6501.61,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"CDG",
    Distance:1469.96,
    Airport:"Air France"
}),
new Routes(
{
    From:"LIS",
    To:"CDG",
    Distance:1469.96,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIS",
    To:"CDG",
    Distance:1469.96,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"CGN",
    Distance:1850.46,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"LIS",
    To:"CMN",
    Distance:617.787,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"LIS",
    To:"CMN",
    Distance:617.787,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"CNF",
    Distance:7439.85,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"CPH",
    Distance:2471.8,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LIS",
    To:"CPH",
    Distance:2471.8,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"CPH",
    Distance:2471.8,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"DKR",
    Distance:2795.78,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"DLE",
    Distance:1495.84,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIS",
    To:"DME",
    Distance:3913.3,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"DME",
    Distance:3913.3,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"DUB",
    Distance:1642.48,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"LIS",
    To:"DUB",
    Distance:1642.48,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIS",
    To:"DUS",
    Distance:1861.72,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"DXB",
    Distance:6137.8,
    Airport:"Emirates"
}),
new Routes(
{
    From:"LIS",
    To:"DXB",
    Distance:6137.8,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"EDI",
    Distance:1956.13,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"EIN",
    Distance:1804.46,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"LIS",
    To:"EWR",
    Distance:5433.27,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"EWR",
    Distance:5433.27,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIS",
    To:"EWR",
    Distance:5433.27,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"FAO",
    Distance:221.669,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIS",
    To:"FAO",
    Distance:221.669,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"FAO",
    Distance:221.669,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"FAO",
    Distance:221.669,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIS",
    To:"FCO",
    Distance:1839.76,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIS",
    To:"FCO",
    Distance:1839.76,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"FNC",
    Distance:965.136,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"FNC",
    Distance:965.136,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"FNC",
    Distance:965.136,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIS",
    To:"FNC",
    Distance:965.136,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"FOR",
    Distance:5612.32,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"FRA",
    Distance:1871.8,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"FRA",
    Distance:1871.8,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LIS",
    To:"FRA",
    Distance:1871.8,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"FRA",
    Distance:1871.8,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"GIG",
    Distance:7714.71,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"GRU",
    Distance:7934.76,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"GVA",
    Distance:1495.67,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LIS",
    To:"GVA",
    Distance:1495.67,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LIS",
    To:"GVA",
    Distance:1495.67,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"GVA",
    Distance:1495.67,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"HAM",
    Distance:2197.68,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LIS",
    To:"HAM",
    Distance:2197.68,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"HEL",
    Distance:3363.88,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LIS",
    To:"HEL",
    Distance:3363.88,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"HHN",
    Distance:1793.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIS",
    To:"HOR",
    Distance:1697.32,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"HOR",
    Distance:1697.32,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"IST",
    Distance:3222.08,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"IST",
    Distance:3222.08,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"KBP",
    Distance:3372.38,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"KBP",
    Distance:3372.38,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"KIV",
    Distance:3197.6,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"LIS",
    To:"LAD",
    Distance:5780.68,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"LAD",
    Distance:5780.68,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"LCG",
    Distance:506.688,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"LGW",
    Distance:1542.1,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"LGW",
    Distance:1542.1,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"LGW",
    Distance:1542.1,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"LHR",
    Distance:1564.62,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"LIS",
    To:"LHR",
    Distance:1564.62,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"LHR",
    Distance:1564.62,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LIS",
    To:"LHR",
    Distance:1564.62,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LIS",
    To:"LHR",
    Distance:1564.62,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"LHR",
    Distance:1564.62,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"LPA",
    Distance:1337.91,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"LIS",
    To:"LPA",
    Distance:1337.91,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"LPL",
    Distance:1687.65,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"LTN",
    Distance:1606.45,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"LUX",
    Distance:1711.54,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LIS",
    To:"LUX",
    Distance:1711.54,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"LUX",
    Distance:1711.54,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"LYS",
    Distance:1399.42,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"LYS",
    Distance:1399.42,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"MAD",
    Distance:513.371,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"LIS",
    To:"MAD",
    Distance:513.371,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"MAD",
    Distance:513.371,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"MAD",
    Distance:513.371,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"MAD",
    Distance:513.371,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIS",
    To:"MAD",
    Distance:513.371,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"MAN",
    Distance:1702.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIS",
    To:"MAN",
    Distance:1702.71,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"MIA",
    Distance:6677.16,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"MIA",
    Distance:6677.16,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"MPM",
    Distance:8400.23,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"MRS",
    Distance:1306.64,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIS",
    To:"MRS",
    Distance:1306.64,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"MUC",
    Distance:1983.61,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LIS",
    To:"MUC",
    Distance:1983.61,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"MXP",
    Distance:1651.71,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIS",
    To:"MXP",
    Distance:1651.71,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"MXP",
    Distance:1651.71,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"NAT",
    Distance:5651,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"NCE",
    Distance:1468.1,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"NCE",
    Distance:1468.1,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"NTE",
    Distance:1113.03,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LIS",
    To:"OPO",
    Distance:277.006,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIS",
    To:"OPO",
    Distance:277.006,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"OPO",
    Distance:277.006,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"OPO",
    Distance:277.006,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIS",
    To:"ORK",
    Distance:1453.06,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"LIS",
    To:"ORY",
    Distance:1437.25,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"LIS",
    To:"ORY",
    Distance:1437.25,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"ORY",
    Distance:1437.25,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"ORY",
    Distance:1437.25,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"ORY",
    Distance:1437.25,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LIS",
    To:"OSL",
    Distance:2768.55,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LIS",
    To:"OSL",
    Distance:2768.55,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"OTP",
    Distance:2972.17,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"PDL",
    Distance:1448.65,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"PDL",
    Distance:1448.65,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"PHL",
    Distance:5550.69,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"PHL",
    Distance:5550.69,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"PHL",
    Distance:5550.69,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIS",
    To:"PIX",
    Distance:1673.15,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"PIX",
    Distance:1673.15,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"POA",
    Distance:8800.51,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"PRG",
    Distance:2228.66,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"PSA",
    Distance:1716.79,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIS",
    To:"PXO",
    Distance:907.566,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"LIS",
    To:"PXO",
    Distance:907.566,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"PXO",
    Distance:907.566,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"RAK",
    Distance:803.973,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"REC",
    Distance:5857.31,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"SID",
    Distance:2794.54,
    Airport:"TACV"
}),
new Routes(
{
    From:"LIS",
    To:"SID",
    Distance:2794.54,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"SMA",
    Distance:1419.8,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"SMA",
    Distance:1419.8,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"SSA",
    Distance:6498.48,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"STN",
    Distance:1627.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LIS",
    To:"STR",
    Distance:1833.04,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"LIS",
    To:"SVQ",
    Distance:321.683,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"SVQ",
    Distance:321.683,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"SXF",
    Distance:2305.42,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"SXF",
    Distance:2305.42,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LIS",
    To:"TER",
    Distance:1554.05,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"TER",
    Distance:1554.05,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"TLS",
    Distance:1029.41,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"TMS",
    Distance:4565.6,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"TMS",
    Distance:4565.6,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"TNG",
    Distance:443.239,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"TUN",
    Distance:1711.12,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"LIS",
    To:"VCE",
    Distance:1915.34,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIS",
    To:"VCE",
    Distance:1915.34,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"VCP",
    Distance:7928.12,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"VIE",
    Distance:2305.01,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"VIE",
    Distance:2305.01,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"VLC",
    Distance:750.27,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"VLC",
    Distance:750.27,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"VXE",
    Distance:2889.34,
    Airport:"TACV"
}),
new Routes(
{
    From:"LIS",
    To:"VXE",
    Distance:2889.34,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"WAW",
    Distance:2748.96,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"LIS",
    To:"WAW",
    Distance:2748.96,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"YUL",
    Distance:5235.17,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"LIS",
    To:"YYZ",
    Distance:5740.46,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"LIS",
    To:"YYZ",
    Distance:5740.46,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"YYZ",
    Distance:5740.46,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIS",
    To:"ZRH",
    Distance:1723.49,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LIS",
    To:"ZRH",
    Distance:1723.49,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LIS",
    To:"ZRH",
    Distance:1723.49,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LIS",
    To:"ZRH",
    Distance:1723.49,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LIT",
    To:"ATL",
    Distance:727.164,
    Airport:"Air France"
}),
new Routes(
{
    From:"LIT",
    To:"ATL",
    Distance:727.164,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LIT",
    To:"ATL",
    Distance:727.164,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LIT",
    To:"ATL",
    Distance:727.164,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LIT",
    To:"BWI",
    Distance:1465.71,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LIT",
    To:"BWI",
    Distance:1465.71,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LIT",
    To:"CLT",
    Distance:1028.76,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIT",
    To:"CLT",
    Distance:1028.76,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIT",
    To:"DAL",
    Distance:476.044,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LIT",
    To:"DAL",
    Distance:476.044,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LIT",
    To:"DCA",
    Distance:1425.83,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIT",
    To:"DCA",
    Distance:1425.83,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIT",
    To:"DEN",
    Distance:1238.68,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"LIT",
    To:"DEN",
    Distance:1238.68,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LIT",
    To:"DFW",
    Distance:489.109,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIT",
    To:"DFW",
    Distance:489.109,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIT",
    To:"DTW",
    Distance:1133.95,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LIT",
    To:"HOU",
    Distance:634.105,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LIT",
    To:"IAH",
    Distance:603.322,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LIT",
    To:"LAS",
    Distance:2078.63,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LIT",
    To:"LGA",
    Distance:1743.62,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIT",
    To:"LGA",
    Distance:1743.62,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIT",
    To:"MDW",
    Distance:876.1,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LIT",
    To:"ORD",
    Distance:889.405,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LIT",
    To:"ORD",
    Distance:889.405,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LIT",
    To:"ORD",
    Distance:889.405,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LIT",
    To:"PHX",
    Distance:1825.06,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"LIT",
    To:"SFB",
    Distance:1230.5,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LIT",
    To:"STL",
    Distance:476.454,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"LJA",
    To:"FIH",
    Distance:894.595,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"LJG",
    To:"CAN",
    Distance:1370.48,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"CAN",
    Distance:1370.48,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"LJG",
    To:"CGO",
    Distance:1551.26,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"LJG",
    To:"CKG",
    Distance:702.014,
    Airport:"Air China"
}),
new Routes(
{
    From:"LJG",
    To:"CKG",
    Distance:702.014,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"LJG",
    To:"CKG",
    Distance:702.014,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"CKG",
    Distance:702.014,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"CKG",
    Distance:702.014,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"CKG",
    Distance:702.014,
    Airport:"West Air China"
}),
new Routes(
{
    From:"LJG",
    To:"CKG",
    Distance:702.014,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"CSX",
    Distance:1288,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"LJG",
    To:"CSX",
    Distance:1288,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"CTU",
    Distance:547.591,
    Airport:"Air China"
}),
new Routes(
{
    From:"LJG",
    To:"CTU",
    Distance:547.591,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"LJG",
    To:"CTU",
    Distance:547.591,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"LJG",
    To:"CTU",
    Distance:547.591,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"CTU",
    Distance:547.591,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"HFE",
    Distance:1739.25,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"LJG",
    To:"HGH",
    Distance:2004.94,
    Airport:"Air China"
}),
new Routes(
{
    From:"LJG",
    To:"HGH",
    Distance:2004.94,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"HGH",
    Distance:2004.94,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"LJG",
    To:"HGH",
    Distance:2004.94,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"HGH",
    Distance:2004.94,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"HKG",
    Distance:1472.71,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"ICN",
    Distance:2721.29,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"JHG",
    Distance:548.494,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"LJG",
    To:"JHG",
    Distance:548.494,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"JHG",
    Distance:548.494,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"LJG",
    To:"JHG",
    Distance:548.494,
    Airport:"KSY"
}),
new Routes(
{
    From:"LJG",
    To:"JHG",
    Distance:548.494,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"KMG",
    Distance:327.42,
    Airport:"Air France"
}),
new Routes(
{
    From:"LJG",
    To:"KMG",
    Distance:327.42,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"LJG",
    To:"KMG",
    Distance:327.42,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"KMG",
    Distance:327.42,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"KMG",
    Distance:327.42,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"LJG",
    To:"KMG",
    Distance:327.42,
    Airport:"KSY"
}),
new Routes(
{
    From:"LJG",
    To:"KMG",
    Distance:327.42,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"KWE",
    Distance:653.381,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"LJG",
    To:"KWE",
    Distance:653.381,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"KWL",
    Distance:996.649,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"LJG",
    To:"MIG",
    Distance:668.407,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"NGB",
    Distance:2099.83,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"LJG",
    To:"NKG",
    Distance:1882.41,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"LJG",
    To:"NKG",
    Distance:1882.41,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"LJG",
    To:"NNG",
    Distance:931.702,
    Airport:"KSY"
}),
new Routes(
{
    From:"LJG",
    To:"PEK",
    Distance:2103.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"LJG",
    To:"PEK",
    Distance:2103.48,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"PEK",
    Distance:2103.48,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"LJG",
    To:"PEK",
    Distance:2103.48,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"SHA",
    Distance:2103.28,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"SIN",
    Distance:2867.41,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"LJG",
    To:"SJW",
    Distance:1851.04,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"LJG",
    To:"SZX",
    Distance:1448.86,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"LJG",
    To:"TCZ",
    Distance:278.173,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"TNA",
    Distance:1944.87,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"LJG",
    To:"TPE",
    Distance:2106.23,
    Airport:"Mandarin Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"TYN",
    Distance:1674.96,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"LJG",
    To:"WUH",
    Distance:1427.47,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"LJG",
    To:"WUH",
    Distance:1427.47,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"LJG",
    To:"WUH",
    Distance:1427.47,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"XIY",
    Distance:1169.98,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"LJG",
    To:"XIY",
    Distance:1169.98,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LJG",
    To:"XIY",
    Distance:1169.98,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"LJG",
    To:"XIY",
    Distance:1169.98,
    Airport:"KSY"
}),
new Routes(
{
    From:"LJG",
    To:"XIY",
    Distance:1169.98,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LJU",
    To:"AMS",
    Distance:974.431,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"LJU",
    To:"BEG",
    Distance:481.778,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"LJU",
    To:"BRU",
    Distance:898.309,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"LJU",
    To:"BRU",
    Distance:898.309,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"LJU",
    To:"CDG",
    Distance:943.645,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"LJU",
    To:"CDG",
    Distance:943.645,
    Airport:"Air France"
}),
new Routes(
{
    From:"LJU",
    To:"CPH",
    Distance:1052.1,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"LJU",
    To:"CPH",
    Distance:1052.1,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LJU",
    To:"CRL",
    Distance:875.516,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LJU",
    To:"FRA",
    Distance:609.166,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"LJU",
    To:"FRA",
    Distance:609.166,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LJU",
    To:"HEL",
    Distance:1710.94,
    Airport:"Finnair"
}),
new Routes(
{
    From:"LJU",
    To:"IST",
    Distance:1292.32,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"LJU",
    To:"IST",
    Distance:1292.32,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"LJU",
    To:"LTN",
    Distance:1246.54,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LJU",
    To:"MUC",
    Distance:310.929,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"LJU",
    To:"MUC",
    Distance:310.929,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LJU",
    To:"PRG",
    Distance:431.368,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"LJU",
    To:"PRN",
    Distance:661.392,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"LJU",
    To:"SJJ",
    Distance:404.709,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"LJU",
    To:"SKP",
    Distance:742.381,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"LJU",
    To:"STN",
    Distance:1209.52,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LJU",
    To:"SVO",
    Distance:1920.77,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"LJU",
    To:"SVO",
    Distance:1920.77,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"LJU",
    To:"TGD",
    Distance:574.448,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"LJU",
    To:"TGD",
    Distance:574.448,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"LJU",
    To:"TIA",
    Distance:681.011,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"LJU",
    To:"VIE",
    Distance:263.61,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"LJU",
    To:"VIE",
    Distance:263.61,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"LJU",
    To:"WAW",
    Distance:811.884,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"LJU",
    To:"WAW",
    Distance:811.884,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"LJU",
    To:"ZRH",
    Distance:469.943,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"LJU",
    To:"ZRH",
    Distance:469.943,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LKB",
    To:"SUV",
    Distance:277.819,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"LKE",
    To:"FBS",
    Distance:112.61,
    Airport:"Kenmore Air"
}),
new Routes(
{
    From:"LKE",
    To:"SEA",
    Distance:20.1388,
    Airport:"Kenmore Air"
}),
new Routes(
{
    From:"LKE",
    To:"YWH",
    Distance:117.77,
    Airport:"Kenmore Air"
}),
new Routes(
{
    From:"LKG",
    To:"WIL",
    Distance:672.804,
    Airport:"Flightline"
}),
new Routes(
{
    From:"LKH",
    To:"MUR",
    Distance:110.171,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LKH",
    To:"MYY",
    Distance:143.937,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LKL",
    To:"TOS",
    Distance:235.458,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"LKN",
    To:"BOO",
    Distance:103.264,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"LKN",
    To:"RET",
    Distance:93.8855,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"LKN",
    To:"SVJ",
    Distance:44.9165,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"LKO",
    To:"BLR",
    Distance:1571.94,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"LKO",
    To:"BOM",
    Distance:1183.59,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"LKO",
    To:"BOM",
    Distance:1183.59,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"LKO",
    To:"BOM",
    Distance:1183.59,
    Airport:"Go Air"
}),
new Routes(
{
    From:"LKO",
    To:"BOM",
    Distance:1183.59,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"LKO",
    To:"BOM",
    Distance:1183.59,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"LKO",
    To:"DED",
    Distance:464.178,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"LKO",
    To:"DEL",
    Distance:423.48,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"LKO",
    To:"DEL",
    Distance:423.48,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"LKO",
    To:"DEL",
    Distance:423.48,
    Airport:"Go Air"
}),
new Routes(
{
    From:"LKO",
    To:"DEL",
    Distance:423.48,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"LKO",
    To:"DEL",
    Distance:423.48,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"LKO",
    To:"DEL",
    Distance:423.48,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"LKO",
    To:"DXB",
    Distance:2552.11,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"LKO",
    To:"JED",
    Distance:4251,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"LKO",
    To:"MCT",
    Distance:2298.71,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"LKO",
    To:"PAT",
    Distance:438.669,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"LKO",
    To:"RUH",
    Distance:3416.85,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"LLA",
    To:"ARN",
    Distance:689.179,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LLA",
    To:"ARN",
    Distance:689.179,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LLA",
    To:"PJA",
    Distance:193.871,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"LLF",
    To:"CSX",
    Distance:259.348,
    Airport:"Potomac Air"
}),
new Routes(
{
    From:"LLF",
    To:"KMG",
    Distance:901.279,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LLF",
    To:"SZX",
    Distance:468.298,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LLI",
    To:"ADD",
    Distance:333.85,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LLI",
    To:"AXU",
    Distance:242.526,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LLI",
    To:"GDQ",
    Distance:178.578,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LLK",
    To:"DME",
    Distance:2023.05,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LLK",
    To:"LED",
    Distance:2679.56,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LLU",
    To:"JJU",
    Distance:37.2758,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"LLU",
    To:"JNN",
    Distance:40.8004,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"LLW",
    To:"BLZ",
    Distance:246.189,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LLW",
    To:"DAR",
    Distance:970.491,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LLW",
    To:"HRE",
    Distance:542.951,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LLW",
    To:"JNB",
    Distance:1489.49,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"LLW",
    To:"LUN",
    Distance:598.494,
    Airport:"Air France"
}),
new Routes(
{
    From:"LLW",
    To:"LUN",
    Distance:598.494,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LLW",
    To:"LUN",
    Distance:598.494,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LLW",
    To:"LUN",
    Distance:598.494,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"LLW",
    To:"LUN",
    Distance:598.494,
    Airport:"Proflight Commuter Services"
}),
new Routes(
{
    From:"LLW",
    To:"NBO",
    Distance:1429.17,
    Airport:"Air France"
}),
new Routes(
{
    From:"LLW",
    To:"NBO",
    Distance:1429.17,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LLW",
    To:"NBO",
    Distance:1429.17,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"LMC",
    To:"VVC",
    Distance:221.974,
    Airport:"SATENA"
}),
new Routes(
{
    From:"LMM",
    To:"GDL",
    Distance:823.073,
    Airport:"Volaris"
}),
new Routes(
{
    From:"LMM",
    To:"HMO",
    Distance:426.057,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LMM",
    To:"MEX",
    Distance:1239.8,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LMM",
    To:"MZT",
    Distance:399.932,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LMM",
    To:"TIJ",
    Distance:1080.27,
    Airport:"Volaris"
}),
new Routes(
{
    From:"LMN",
    To:"MYY",
    Distance:125.688,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LMP",
    To:"CTA",
    Distance:309.561,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"LMP",
    To:"PMO",
    Distance:300.743,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"LMP",
    To:"VCE",
    Distance:1112.99,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"LMT",
    To:"PDX",
    Distance:387.923,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LMT",
    To:"SFO",
    Distance:507.465,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LNB",
    To:"CCV",
    Distance:43.4512,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"LNB",
    To:"VLI",
    Distance:125.168,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"LNE",
    To:"LOD",
    Distance:65.9115,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"LNE",
    To:"SON",
    Distance:109.544,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"LNE",
    To:"VLI",
    Distance:204.507,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"LNJ",
    To:"KMG",
    Distance:308.645,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LNJ",
    To:"KMG",
    Distance:308.645,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LNK",
    To:"DEN",
    Distance:679.296,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LNK",
    To:"MSP",
    Distance:532.812,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LNK",
    To:"ORD",
    Distance:748.579,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LNS",
    To:"IAD",
    Distance:164.39,
    Airport:"Pacific Wings"
}),
new Routes(
{
    From:"LNV",
    To:"POM",
    Distance:929.236,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"LNV",
    To:"POM",
    Distance:929.236,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"LNV",
    To:"RAB",
    Distance:146.826,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"LNY",
    To:"HNL",
    Distance:116.905,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"LNY",
    To:"HNL",
    Distance:116.905,
    Airport:"Island Air (WP)"
}),
new Routes(
{
    From:"LNY",
    To:"MKK",
    Distance:43.52,
    Airport:"Maya Island Air"
}),
new Routes(
{
    From:"LNY",
    To:"OGG",
    Distance:55.5776,
    Airport:"Maya Island Air"
}),
new Routes(
{
    From:"LNZ",
    To:"AYT",
    Distance:1847.2,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"LNZ",
    To:"DUS",
    Distance:631.682,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"LNZ",
    To:"DUS",
    Distance:631.682,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LNZ",
    To:"FRA",
    Distance:456.371,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"LNZ",
    To:"FRA",
    Distance:456.371,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LNZ",
    To:"HER",
    Distance:1695.02,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LNZ",
    To:"HER",
    Distance:1695.02,
    Airport:"Niki"
}),
new Routes(
{
    From:"LNZ",
    To:"PMI",
    Distance:1329.38,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LNZ",
    To:"PMI",
    Distance:1329.38,
    Airport:"Niki"
}),
new Routes(
{
    From:"LNZ",
    To:"STN",
    Distance:1073.45,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LNZ",
    To:"SZG",
    Distance:100.689,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"LNZ",
    To:"VIE",
    Distance:177.176,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"LOD",
    To:"LNE",
    Distance:65.9115,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"LOD",
    To:"SON",
    Distance:83.0859,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"LOE",
    To:"DMK",
    Distance:409.904,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"LOH",
    To:"GYE",
    Distance:212.175,
    Airport:"TAME"
}),
new Routes(
{
    From:"LOH",
    To:"UIO",
    Distance:439.729,
    Airport:"TAME"
}),
new Routes(
{
    From:"LOK",
    To:"EDL",
    Distance:304.955,
    Airport:"Fly540"
}),
new Routes(
{
    From:"LOP",
    To:"BMU",
    Distance:266.106,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"LOP",
    To:"CGK",
    Distance:1100.28,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"LOP",
    To:"CGK",
    Distance:1100.28,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"LOP",
    To:"DPS",
    Distance:121.939,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"LOP",
    To:"DPS",
    Distance:121.939,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"LOP",
    To:"JOG",
    Distance:652.114,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"LOP",
    To:"KOE",
    Distance:826.103,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"LOP",
    To:"KUL",
    Distance:2059.97,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"LOP",
    To:"PER",
    Distance:2578.03,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"LOP",
    To:"SIN",
    Distance:1765.12,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"LOP",
    To:"SIN",
    Distance:1765.12,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"LOP",
    To:"SIN",
    Distance:1765.12,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"LOP",
    To:"SUB",
    Distance:413.605,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"LOP",
    To:"SUB",
    Distance:413.605,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"LOP",
    To:"SUB",
    Distance:413.605,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"LOP",
    To:"UPG",
    Distance:547.458,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"LOS",
    To:"ABJ",
    Distance:814.806,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LOS",
    To:"ABJ",
    Distance:814.806,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"LOS",
    To:"ABJ",
    Distance:814.806,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"ABJ",
    Distance:814.806,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"ABV",
    Distance:511.417,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LOS",
    To:"ACC",
    Distance:400.511,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LOS",
    To:"ACC",
    Distance:400.511,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LOS",
    To:"ACC",
    Distance:400.511,
    Airport:"Asian Wings Airways"
}),
new Routes(
{
    From:"LOS",
    To:"ACC",
    Distance:400.511,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"ACC",
    Distance:400.511,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"LOS",
    To:"ADD",
    Distance:3916.32,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"AMM",
    Distance:4393.12,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"LOS",
    To:"AMS",
    Distance:5086.8,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"ATL",
    Distance:9395.42,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LOS",
    To:"AUH",
    Distance:5807.56,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"LOS",
    To:"BEY",
    Distance:4483.98,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"BKO",
    Distance:1401.59,
    Airport:"Dennis Sky"
}),
new Routes(
{
    From:"LOS",
    To:"BNI",
    Distance:253.398,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LOS",
    To:"CAI",
    Distance:3931.38,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"LOS",
    To:"CBQ",
    Distance:583.828,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LOS",
    To:"CDG",
    Distance:4719.16,
    Airport:"Air France"
}),
new Routes(
{
    From:"LOS",
    To:"CMN",
    Distance:3184.4,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"LOS",
    To:"COO",
    Distance:106.36,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LOS",
    To:"COO",
    Distance:106.36,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"LOS",
    To:"DKR",
    Distance:2446.23,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"DLA",
    Distance:763.89,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"DLA",
    Distance:763.89,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"LOS",
    To:"DOH",
    Distance:5523.01,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"LOS",
    To:"DXB",
    Distance:5895.91,
    Airport:"Emirates"
}),
new Routes(
{
    From:"LOS",
    To:"ENU",
    Distance:468.639,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LOS",
    To:"FNA",
    Distance:1834.3,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LOS",
    To:"FRA",
    Distance:4855.8,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"FRA",
    Distance:4855.8,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LOS",
    To:"FRA",
    Distance:4855.8,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"IAH",
    Distance:10468.9,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"IST",
    Distance:4584.34,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"JFK",
    Distance:8444.43,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LOS",
    To:"JNB",
    Distance:4524.09,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LOS",
    To:"JNB",
    Distance:4524.09,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"LOS",
    To:"JOS",
    Distance:699.18,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LOS",
    To:"KAD",
    Distance:634.757,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LOS",
    To:"KAN",
    Distance:834.097,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LOS",
    To:"KGL",
    Distance:3124.81,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"LOS",
    To:"LBV",
    Distance:958.896,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"LFW",
    Distance:232.925,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"LHR",
    Distance:5004.82,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LOS",
    To:"LHR",
    Distance:5004.82,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LOS",
    To:"LHR",
    Distance:5004.82,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"LOS",
    To:"MAD",
    Distance:3833.12,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"NBO",
    Distance:3831.77,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"LOS",
    To:"PHC",
    Distance:437.349,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LOS",
    To:"PHC",
    Distance:437.349,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"PHC",
    Distance:437.349,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LOS",
    To:"PHC",
    Distance:437.349,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"QOW",
    Distance:448.239,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LOS",
    To:"QRW",
    Distance:274.393,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"LOS",
    To:"ROB",
    Distance:1512.47,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"LOS",
    To:"SSG",
    Distance:674.07,
    Airport:"Dennis Sky"
}),
new Routes(
{
    From:"LPA",
    To:"ACE",
    Distance:207.455,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"LPA",
    To:"ACE",
    Distance:207.455,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"LPA",
    To:"ACE",
    Distance:207.455,
    Airport:"Tropic Air"
}),
new Routes(
{
    From:"LPA",
    To:"AGA",
    Distance:629.009,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"LPA",
    To:"AGP",
    Distance:1409.55,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"AGP",
    Distance:1409.55,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"ALC",
    Distance:1793.64,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"AMS",
    Distance:3182.78,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"LPA",
    To:"ARN",
    Distance:4334.94,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LPA",
    To:"BCN",
    Distance:2174.49,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"BCN",
    Distance:2174.49,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"BCN",
    Distance:2174.49,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"BGO",
    Distance:3919.2,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LPA",
    To:"BGY",
    Distance:2957.36,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"BHX",
    Distance:2951.14,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LPA",
    To:"BHX",
    Distance:2951.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"BHX",
    Distance:2951.14,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LPA",
    To:"BIO",
    Distance:2042.37,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"LPA",
    To:"BIO",
    Distance:2042.37,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"BIO",
    Distance:2042.37,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"BJL",
    Distance:1628.06,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"LPA",
    To:"BOH",
    Distance:2784.48,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"BRE",
    Distance:3425.8,
    Airport:"Germania"
}),
new Routes(
{
    From:"LPA",
    To:"BRE",
    Distance:3425.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"BRS",
    Distance:2814.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"BRS",
    Distance:2814.75,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"BRS",
    Distance:2814.75,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LPA",
    To:"BRU",
    Distance:3050.58,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"LPA",
    To:"BSL",
    Distance:2950.15,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LPA",
    To:"BSL",
    Distance:2950.15,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"LPA",
    To:"BSL",
    Distance:2950.15,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPA",
    To:"CDG",
    Distance:2800.88,
    Airport:"XL Airways France"
}),
new Routes(
{
    From:"LPA",
    To:"CGN",
    Distance:3174.63,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LPA",
    To:"CGN",
    Distance:3174.63,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"LPA",
    To:"CGN",
    Distance:3174.63,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LPA",
    To:"CGN",
    Distance:3174.63,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"LPA",
    To:"CMN",
    Distance:959.425,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"LPA",
    To:"CMN",
    Distance:959.425,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"LPA",
    To:"CPH",
    Distance:3804.54,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LPA",
    To:"CRL",
    Distance:3012.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"DKR",
    Distance:1482.89,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"LPA",
    To:"DKR",
    Distance:1482.89,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"DUB",
    Distance:2931.21,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"LPA",
    To:"DUB",
    Distance:2931.21,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"DUS",
    Distance:3189.79,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LPA",
    To:"DUS",
    Distance:3189.79,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LPA",
    To:"DUS",
    Distance:3189.79,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"LPA",
    To:"DUS",
    Distance:3189.79,
    Airport:"Yangon Airways"
}),
new Routes(
{
    From:"LPA",
    To:"EDI",
    Distance:3259.39,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"EIN",
    Distance:3137.35,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"EIN",
    Distance:3137.35,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"LPA",
    To:"EMA",
    Distance:3001.49,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LPA",
    To:"EMA",
    Distance:3001.49,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"EMA",
    Distance:3001.49,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"EMA",
    Distance:3001.49,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LPA",
    To:"ERF",
    Distance:3381.68,
    Airport:"Germania"
}),
new Routes(
{
    From:"LPA",
    To:"EUN",
    Distance:230.623,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"LPA",
    To:"EUN",
    Distance:230.623,
    Airport:"Tropic Air"
}),
new Routes(
{
    From:"LPA",
    To:"FKB",
    Distance:3066.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"FNC",
    Distance:546.425,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"LPA",
    To:"FNC",
    Distance:546.425,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LPA",
    To:"FRA",
    Distance:3182.93,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LPA",
    To:"FRA",
    Distance:3182.93,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"LPA",
    To:"FUE",
    Distance:160.083,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"LPA",
    To:"FUE",
    Distance:160.083,
    Airport:"Tropic Air"
}),
new Routes(
{
    From:"LPA",
    To:"GLA",
    Distance:3227.44,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LPA",
    To:"GLA",
    Distance:3227.44,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"GLA",
    Distance:3227.44,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LPA",
    To:"HAJ",
    Distance:3423.95,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"LPA",
    To:"HAM",
    Distance:3528.12,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LPA",
    To:"HAM",
    Distance:3528.12,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LPA",
    To:"HAM",
    Distance:3528.12,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LPA",
    To:"LBA",
    Distance:3093.42,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LPA",
    To:"LEJ",
    Distance:3482.96,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LPA",
    To:"LGW",
    Distance:2878.68,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LPA",
    To:"LGW",
    Distance:2878.68,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"LGW",
    Distance:2878.68,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LPA",
    To:"LGW",
    Distance:2878.68,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LPA",
    To:"LGW",
    Distance:2878.68,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPA",
    To:"LIS",
    Distance:1337.91,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"LPA",
    To:"LIS",
    Distance:1337.91,
    Airport:"SATA International"
}),
new Routes(
{
    From:"LPA",
    To:"LPL",
    Distance:3005.96,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"LTN",
    Distance:2941.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"LTN",
    Distance:2941.16,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LPA",
    To:"LUX",
    Distance:3030.52,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LPA",
    To:"MAD",
    Distance:1766.26,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"LPA",
    To:"MAD",
    Distance:1766.26,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LPA",
    To:"MAD",
    Distance:1766.26,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"MAD",
    Distance:1766.26,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"MAD",
    Distance:1766.26,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"MAD",
    Distance:1766.26,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"MAN",
    Distance:3024.4,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LPA",
    To:"MAN",
    Distance:3024.4,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LPA",
    To:"MAN",
    Distance:3024.4,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"MAN",
    Distance:3024.4,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"MAN",
    Distance:3024.4,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"LPA",
    To:"MAN",
    Distance:3024.4,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LPA",
    To:"MUC",
    Distance:3254.34,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LPA",
    To:"MUC",
    Distance:3254.34,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LPA",
    To:"MUC",
    Distance:3254.34,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LPA",
    To:"MUC",
    Distance:3254.34,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"LPA",
    To:"NCL",
    Distance:3209.44,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"LPA",
    To:"NDB",
    Distance:795.783,
    Airport:"Mauritania Airlines International"
}),
new Routes(
{
    From:"LPA",
    To:"NDB",
    Distance:795.783,
    Airport:"Tropic Air"
}),
new Routes(
{
    From:"LPA",
    To:"NKC",
    Distance:1095,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"NRN",
    Distance:3185.45,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"NUE",
    Distance:3286.01,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LPA",
    To:"NUE",
    Distance:3286.01,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"LPA",
    To:"OPO",
    Distance:1601.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"ORK",
    Distance:2720,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"ORY",
    Distance:2767.39,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"ORY",
    Distance:2767.39,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"OSL",
    Distance:4104.84,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LPA",
    To:"OSL",
    Distance:4104.84,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LPA",
    To:"PAD",
    Distance:3306.16,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LPA",
    To:"PIK",
    Distance:3186.29,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"PRG",
    Distance:3511.8,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"LPA",
    To:"PSA",
    Distance:2890.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"RAK",
    Distance:818.413,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"LPA",
    To:"SCQ",
    Distance:1778.21,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"LPA",
    To:"SCQ",
    Distance:1778.21,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"SCQ",
    Distance:1778.21,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"SDR",
    Distance:2010.43,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"SPC",
    Distance:244.497,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"LPA",
    To:"STN",
    Distance:2963.76,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"STN",
    Distance:2963.76,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LPA",
    To:"STR",
    Distance:3124.76,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LPA",
    To:"STR",
    Distance:3124.76,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"LPA",
    To:"SVQ",
    Distance:1377.54,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"LPA",
    To:"SVQ",
    Distance:1377.54,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"SVQ",
    Distance:1377.54,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"SVQ",
    Distance:1377.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"SXF",
    Distance:3616.91,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"LPA",
    To:"SXF",
    Distance:3616.91,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LPA",
    To:"SZG",
    Distance:3296.1,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LPA",
    To:"SZG",
    Distance:3296.1,
    Airport:"Niki"
}),
new Routes(
{
    From:"LPA",
    To:"TFN",
    Distance:111.834,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"LPA",
    To:"TFN",
    Distance:111.834,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"LPA",
    To:"TFN",
    Distance:111.834,
    Airport:"Tropic Air"
}),
new Routes(
{
    From:"LPA",
    To:"TFS",
    Distance:117.114,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"LPA",
    To:"TRF",
    Distance:3989.24,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LPA",
    To:"TXL",
    Distance:3616.54,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LPA",
    To:"VDE",
    Distance:246.122,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"LPA",
    To:"VIE",
    Distance:3544.09,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LPA",
    To:"VIE",
    Distance:3544.09,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"VIE",
    Distance:3544.09,
    Airport:"Niki"
}),
new Routes(
{
    From:"LPA",
    To:"VIL",
    Distance:471.697,
    Airport:"Tropic Air"
}),
new Routes(
{
    From:"LPA",
    To:"VLC",
    Distance:1879.86,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LPA",
    To:"VLC",
    Distance:1879.86,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPA",
    To:"ZRH",
    Distance:3001.18,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"LPA",
    To:"ZRH",
    Distance:3001.18,
    Airport:"Helvetic Airways"
}),
new Routes(
{
    From:"LPA",
    To:"ZRH",
    Distance:3001.18,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LPB",
    To:"AQP",
    Distance:362.154,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"LPB",
    To:"ARI",
    Distance:305.763,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"LPB",
    To:"BOG",
    Distance:2448.16,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LPB",
    To:"CBB",
    Distance:236.895,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"LPB",
    To:"CBB",
    Distance:236.895,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"LPB",
    To:"CIJ",
    Distance:611.891,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"LPB",
    To:"CUZ",
    Distance:521.022,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"LPB",
    To:"IQQ",
    Distance:493.916,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LPB",
    To:"LIM",
    Distance:1083.15,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LPB",
    To:"LIM",
    Distance:1083.15,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"LPB",
    To:"LIM",
    Distance:1083.15,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LPB",
    To:"POI",
    Distance:426.147,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"LPB",
    To:"POI",
    Distance:426.147,
    Airport:"Southern Winds Airlines"
}),
new Routes(
{
    From:"LPB",
    To:"RBQ",
    Distance:243.572,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"LPB",
    To:"SRE",
    Distance:414.012,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"LPB",
    To:"SRE",
    Distance:414.012,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"LPB",
    To:"SRZ",
    Distance:552.76,
    Airport:"Southern Winds Airlines"
}),
new Routes(
{
    From:"LPB",
    To:"TDD",
    Distance:397.971,
    Airport:"Southern Winds Airlines"
}),
new Routes(
{
    From:"LPB",
    To:"TJA",
    Distance:670.001,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"LPB",
    To:"TJA",
    Distance:670.001,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"LPB",
    To:"UYU",
    Distance:462.347,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"LPB",
    To:"VVI",
    Distance:552.005,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"LPB",
    To:"VVI",
    Distance:552.005,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LPB",
    To:"VVI",
    Distance:552.005,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"LPB",
    To:"VVI",
    Distance:552.005,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LPB",
    To:"VVI",
    Distance:552.005,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LPD",
    To:"LET",
    Distance:320.956,
    Airport:"SATENA"
}),
new Routes(
{
    From:"LPI",
    To:"AMS",
    Distance:965.196,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LPI",
    To:"CPH",
    Distance:359.991,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LPL",
    To:"ACE",
    Distance:2850.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"ACE",
    Distance:2850.18,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"AGP",
    Distance:1856.77,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"AGP",
    Distance:1856.77,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"ALC",
    Distance:1682.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"ALC",
    Distance:1682.82,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"AMS",
    Distance:523.869,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"BCN",
    Distance:1388.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"BCN",
    Distance:1388.16,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"BFS",
    Distance:264.688,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"BJV",
    Distance:2945.59,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"BTS",
    Distance:1517.26,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"CCF",
    Distance:1187.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"CDG",
    Distance:610.005,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"DUB",
    Distance:227.068,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"EGC",
    Distance:977.086,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"FAO",
    Distance:1857.2,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"FAO",
    Distance:1857.2,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"FNI",
    Distance:1190.17,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"FUE",
    Distance:2909.62,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"FUE",
    Distance:2909.62,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"GDN",
    Distance:1397.44,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LPL",
    To:"GVA",
    Distance:1016.33,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"IBZ",
    Distance:1639.85,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"IOM",
    Distance:143.466,
    Airport:"Flybe"
}),
new Routes(
{
    From:"LPL",
    To:"IOM",
    Distance:143.466,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"JER",
    Distance:460.999,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"KGS",
    Distance:2948.62,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"KRK",
    Distance:1593.86,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"KRK",
    Distance:1593.86,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"LCA",
    Distance:3503.24,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"LDY",
    Distance:338.736,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"LIG",
    Distance:879.648,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"LIS",
    Distance:1687.65,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"LPA",
    Distance:3005.96,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"MAD",
    Distance:1428.77,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"MLA",
    Distance:2365.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"NAP",
    Distance:1887.32,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"NCE",
    Distance:1304,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"NOC",
    Distance:398.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"OPO",
    Distance:1412.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"ORK",
    Distance:415.522,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"PMI",
    Distance:1589.52,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"PMI",
    Distance:1589.52,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"POZ",
    Distance:1320.12,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"PSA",
    Distance:1445.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"REU",
    Distance:1387.99,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"RHO",
    Distance:3040.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"RHO",
    Distance:3040.03,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"SNN",
    Distance:412.263,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"SXF",
    Distance:1101.89,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LPL",
    To:"SZZ",
    Distance:1172.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"TFS",
    Distance:3028.64,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"TRF",
    Distance:1035.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"VNO",
    Distance:1832.89,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"WAW",
    Distance:1600.77,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LPL",
    To:"WMI",
    Distance:1572.51,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPL",
    To:"WRO",
    Distance:1362.57,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPM",
    To:"NUS",
    Distance:61.3299,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"LPM",
    To:"VLI",
    Distance:148.2,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"LPP",
    To:"BGY",
    Distance:2086.26,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPP",
    To:"GRO",
    Distance:2725.04,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPP",
    To:"NRN",
    Distance:1701.45,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LPQ",
    To:"BKK",
    Distance:707.445,
    Airport:"Air France"
}),
new Routes(
{
    From:"LPQ",
    To:"BKK",
    Distance:707.445,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"LPQ",
    To:"BKK",
    Distance:707.445,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"LPQ",
    To:"BKK",
    Distance:707.445,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"LPQ",
    To:"CNX",
    Distance:358.346,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"LPQ",
    To:"HAN",
    Distance:407.137,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"LPQ",
    To:"HAN",
    Distance:407.137,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"LPQ",
    To:"JHG",
    Distance:272.871,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"LPQ",
    To:"PKZ",
    Distance:654.313,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"LPQ",
    To:"REP",
    Distance:742.48,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"LPQ",
    To:"REP",
    Distance:742.48,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"LPQ",
    To:"VTE",
    Distance:216.515,
    Airport:"FlyNordic"
}),
new Routes(
{
    From:"LPQ",
    To:"VTE",
    Distance:216.515,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"LPS",
    To:"WSX",
    Distance:14.9262,
    Airport:"Kenmore Air"
}),
new Routes(
{
    From:"LPT",
    To:"BKK",
    Distance:527.371,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"LPY",
    To:"ORY",
    Distance:419.031,
    Airport:"Hex'Air"
}),
new Routes(
{
    From:"LQM",
    To:"PUU",
    Distance:206.992,
    Airport:"SATENA"
}),
new Routes(
{
    From:"LRD",
    To:"DFW",
    Distance:639.1,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LRD",
    To:"DFW",
    Distance:639.1,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LRD",
    To:"IAH",
    Distance:484.642,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LRD",
    To:"LAS",
    Distance:1756.86,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"LRE",
    To:"BNE",
    Distance:989.939,
    Airport:"Qantas"
}),
new Routes(
{
    From:"LRE",
    To:"WIN",
    Distance:170.673,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"LRH",
    To:"CRL",
    Distance:632.856,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LRH",
    To:"DUB",
    Distance:883.277,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LRH",
    To:"EMA",
    Distance:739.721,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LRH",
    To:"OPO",
    Distance:813.377,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LRH",
    To:"ORY",
    Distance:389.262,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LRH",
    To:"PIS",
    Distance:123.838,
    Airport:"Air France"
}),
new Routes(
{
    From:"LRH",
    To:"PIS",
    Distance:123.838,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LRH",
    To:"SOU",
    Distance:530.651,
    Airport:"Air France"
}),
new Routes(
{
    From:"LRH",
    To:"SOU",
    Distance:530.651,
    Airport:"Flybe"
}),
new Routes(
{
    From:"LRH",
    To:"STN",
    Distance:642.932,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LRM",
    To:"AUA",
    Distance:672.007,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"LRM",
    To:"FCO",
    Distance:7935,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"LRM",
    To:"FCO",
    Distance:7935,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"LRM",
    To:"JFK",
    Distance:2510.73,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"LRM",
    To:"MAD",
    Distance:6624.18,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"LRM",
    To:"MIA",
    Distance:1427.23,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LRM",
    To:"MIA",
    Distance:1427.23,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LRM",
    To:"MXP",
    Distance:7605.01,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"LRM",
    To:"SJU",
    Distance:306.954,
    Airport:"Seaborne Airlines"
}),
new Routes(
{
    From:"LRM",
    To:"YHZ",
    Distance:2981.36,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"LRR",
    To:"DOH",
    Distance:388.2,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"LRR",
    To:"DXB",
    Distance:286.467,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"LRR",
    To:"KWI",
    Distance:650.304,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"LRR",
    To:"SHJ",
    Distance:284.229,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"LRR",
    To:"SYZ",
    Distance:271.351,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"LRR",
    To:"THR",
    Distance:937.153,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"LRS",
    To:"ATH",
    Distance:265.219,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"LRS",
    To:"ATH",
    Distance:265.219,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"LRS",
    To:"JKL",
    Distance:27.6018,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"LRS",
    To:"JKL",
    Distance:27.6018,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"LRS",
    To:"JTY",
    Distance:77.1436,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"LRS",
    To:"JTY",
    Distance:77.1436,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"LRT",
    To:"LYS",
    Distance:687.82,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"LRT",
    To:"ORY",
    Distance:442.538,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LSA",
    To:"GUR",
    Distance:216.859,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"LSC",
    To:"ANF",
    Distance:723.512,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LSC",
    To:"ANF",
    Distance:723.512,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"LSC",
    To:"CJC",
    Distance:855.988,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LSC",
    To:"CJC",
    Distance:855.988,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"LSC",
    To:"CPO",
    Distance:344.813,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"LSC",
    To:"SCL",
    Distance:388.573,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"LSC",
    To:"SCL",
    Distance:388.573,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"LSE",
    To:"MSP",
    Distance:191.892,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LSE",
    To:"ORD",
    Distance:345.098,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LSE",
    To:"ORD",
    Distance:345.098,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LSI",
    To:"ABZ",
    Distance:302.225,
    Airport:"Flybe"
}),
new Routes(
{
    From:"LSI",
    To:"EDI",
    Distance:453.712,
    Airport:"Flybe"
}),
new Routes(
{
    From:"LSI",
    To:"GLA",
    Distance:482.5,
    Airport:"Flybe"
}),
new Routes(
{
    From:"LSI",
    To:"INV",
    Distance:304.491,
    Airport:"Flybe"
}),
new Routes(
{
    From:"LSI",
    To:"KOI",
    Distance:137.034,
    Airport:"Flybe"
}),
new Routes(
{
    From:"LSP",
    To:"AUA",
    Distance:81.4865,
    Airport:"Tiara Air"
}),
new Routes(
{
    From:"LSP",
    To:"CCS",
    Distance:368.815,
    Airport:"Aserca Airlines"
}),
new Routes(
{
    From:"LSP",
    To:"CCS",
    Distance:368.815,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"LSP",
    To:"CUR",
    Distance:137.334,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"LST",
    To:"BNE",
    Distance:1663.94,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"LST",
    To:"BWT",
    Distance:138.038,
    Airport:"Sharp Airlines"
}),
new Routes(
{
    From:"LST",
    To:"FLS",
    Distance:174.411,
    Airport:"Sharp Airlines"
}),
new Routes(
{
    From:"LST",
    To:"MEL",
    Distance:475.988,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"LST",
    To:"MEL",
    Distance:475.988,
    Airport:"Qantas"
}),
new Routes(
{
    From:"LST",
    To:"MEL",
    Distance:475.988,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"LST",
    To:"SYD",
    Distance:913.734,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"LST",
    To:"SYD",
    Distance:913.734,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"LSY",
    To:"SYD",
    Distance:602.182,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"LTD",
    To:"TIP",
    Distance:429.856,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"LTI",
    To:"BYN",
    Distance:345.345,
    Airport:"Homer Air"
}),
new Routes(
{
    From:"LTN",
    To:"ABZ",
    Distance:603.944,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"ACE",
    Distance:2774.97,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LTN",
    To:"ACE",
    Distance:2774.97,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"ACE",
    Distance:2774.97,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LTN",
    To:"AGP",
    Distance:1721.12,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LTN",
    To:"AGP",
    Distance:1721.12,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LTN",
    To:"AGP",
    Distance:1721.12,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"AHO",
    Distance:1414.05,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"ALC",
    Distance:1511.5,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LTN",
    To:"ALC",
    Distance:1511.5,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"AMS",
    Distance:353.851,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"AYT",
    Distance:2949.1,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LTN",
    To:"AYT",
    Distance:2949.1,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LTN",
    To:"BCN",
    Distance:1190.77,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"BEG",
    Distance:1709.52,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"BFS",
    Distance:496.699,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"BJV",
    Distance:2724.77,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LTN",
    To:"BOD",
    Distance:783.94,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"BOJ",
    Distance:2326.67,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"BTS",
    Distance:1317.98,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"BUD",
    Distance:1490.81,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"BUD",
    Distance:1490.81,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"BZR",
    Distance:990.62,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"CDG",
    Distance:379.375,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"CFU",
    Distance:2070.42,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"CLJ",
    Distance:1822.89,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"CRA",
    Distance:1975.36,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"CTA",
    Distance:2005.23,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"DEB",
    Distance:1647.8,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"DLM",
    Distance:2837.27,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LTN",
    To:"DLM",
    Distance:2837.27,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LTN",
    To:"DTM",
    Distance:551.181,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"DUB",
    Distance:433.533,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"EDI",
    Distance:493.909,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"FAO",
    Distance:1756.69,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LTN",
    To:"FAO",
    Distance:1756.69,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LTN",
    To:"FAO",
    Distance:1756.69,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"FCO",
    Distance:1470.61,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LTN",
    To:"FNI",
    Distance:970.201,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"FUE",
    Distance:2835.04,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"FUE",
    Distance:2835.04,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LTN",
    To:"GDN",
    Distance:1282.98,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"GIB",
    Distance:1792.11,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LTN",
    To:"GLA",
    Distance:518.027,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"GRO",
    Distance:1133.95,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"GVA",
    Distance:783.949,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"HAM",
    Distance:723.095,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"HER",
    Distance:2732.86,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"IAS",
    Distance:2072.38,
    Airport:"Tarom"
}),
new Routes(
{
    From:"LTN",
    To:"IBZ",
    Distance:1452.01,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LTN",
    To:"IBZ",
    Distance:1452.01,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"IEV",
    Distance:2140.21,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"INV",
    Distance:672.844,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"IST",
    Distance:2519.77,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"LTN",
    To:"KEF",
    Distance:1861.76,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"KIR",
    Distance:626.885,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"KSC",
    Distance:1570.53,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"KTW",
    Distance:1360.6,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"KUN",
    Distance:1647.41,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"LCA",
    Distance:3288.11,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LTN",
    To:"LCA",
    Distance:3288.11,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LTN",
    To:"LIS",
    Distance:1606.45,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"LJU",
    Distance:1246.54,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"LPA",
    Distance:2941.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"LPA",
    Distance:2941.16,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LTN",
    To:"LUZ",
    Distance:1590.65,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"MAD",
    Distance:1288.93,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"MAH",
    Distance:1381.38,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LTN",
    To:"MJV",
    Distance:1568.2,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"MLA",
    Distance:2133.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"MPL",
    Distance:977.528,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"MXP",
    Distance:961.308,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"NAP",
    Distance:1654.44,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LTN",
    To:"NCE",
    Distance:1073.86,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"NOC",
    Distance:609.922,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"OTP",
    Distance:2107.55,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"PFO",
    Distance:3228.39,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LTN",
    To:"PFO",
    Distance:3228.39,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"PMI",
    Distance:1390.64,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LTN",
    To:"PMI",
    Distance:1390.64,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LTN",
    To:"PMI",
    Distance:1390.64,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"POZ",
    Distance:1172.02,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"PRG",
    Distance:1040.87,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"PSA",
    Distance:1212.4,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"RAK",
    Distance:2338.62,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"REU",
    Distance:1198.53,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"REU",
    Distance:1198.53,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LTN",
    To:"RIX",
    Distance:1661.84,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"RZE",
    Distance:1572.76,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"SKP",
    Distance:1988.77,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"SOF",
    Distance:2049.8,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"SSH",
    Distance:3916.14,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LTN",
    To:"SSH",
    Distance:3916.14,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LTN",
    To:"SSH",
    Distance:3916.14,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"SXF",
    Distance:948.434,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"TFS",
    Distance:2972.75,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"LTN",
    To:"TFS",
    Distance:2972.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LTN",
    To:"TFS",
    Distance:2972.75,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LTN",
    To:"TGM",
    Distance:1888.36,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"TLV",
    Distance:3600.79,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"LTN",
    To:"TLV",
    Distance:3600.79,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"TSR",
    Distance:1717.36,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"VAR",
    Distance:2304.73,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"VCE",
    Distance:1169.2,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTN",
    To:"VNO",
    Distance:1723.88,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"WAW",
    Distance:1455.02,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"WRO",
    Distance:1194.9,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LTN",
    To:"ZRH",
    Distance:806.7,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LTO",
    To:"LAX",
    Distance:1114.89,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LTX",
    To:"GYE",
    Distance:246.402,
    Airport:"TAME"
}),
new Routes(
{
    From:"LTX",
    To:"OCC",
    Distance:153.571,
    Airport:"TAME"
}),
new Routes(
{
    From:"LUD",
    To:"OMD",
    Distance:242.009,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"LUG",
    To:"GVA",
    Distance:217.478,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"LUG",
    To:"ZRH",
    Distance:164.713,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LUH",
    To:"DEL",
    Distance:277.631,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"LUM",
    To:"CAN",
    Distance:1504.73,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LUM",
    To:"CTU",
    Distance:869.843,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LUM",
    To:"KMG",
    Distance:430.527,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"LUM",
    To:"KMG",
    Distance:430.527,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LUM",
    To:"KMG",
    Distance:430.527,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LUM",
    To:"PEK",
    Distance:2424.01,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"LUN",
    To:"ADD",
    Distance:2933.56,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LUN",
    To:"AMS",
    Distance:7859.88,
    Airport:"Air France"
}),
new Routes(
{
    From:"LUN",
    To:"AMS",
    Distance:7859.88,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LUN",
    To:"AMS",
    Distance:7859.88,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LUN",
    To:"BLZ",
    Distance:699.799,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LUN",
    To:"CIP",
    Distance:486.862,
    Airport:"Proflight Commuter Services"
}),
new Routes(
{
    From:"LUN",
    To:"DUR",
    Distance:1647.71,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"LUN",
    To:"DXB",
    Distance:5372.71,
    Airport:"Emirates"
}),
new Routes(
{
    From:"LUN",
    To:"GBE",
    Distance:1059.27,
    Airport:"Air Botswana"
}),
new Routes(
{
    From:"LUN",
    To:"HRE",
    Distance:403.431,
    Airport:"Air France"
}),
new Routes(
{
    From:"LUN",
    To:"HRE",
    Distance:403.431,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"LUN",
    To:"HRE",
    Distance:403.431,
    Airport:"Emirates"
}),
new Routes(
{
    From:"LUN",
    To:"HRE",
    Distance:403.431,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LUN",
    To:"HRE",
    Distance:403.431,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LUN",
    To:"HRE",
    Distance:403.431,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"LUN",
    To:"HRE",
    Distance:403.431,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LUN",
    To:"JNB",
    Distance:1202.02,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"LUN",
    To:"LAD",
    Distance:1803.58,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LUN",
    To:"LLW",
    Distance:598.494,
    Airport:"Air France"
}),
new Routes(
{
    From:"LUN",
    To:"LLW",
    Distance:598.494,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LUN",
    To:"LLW",
    Distance:598.494,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LUN",
    To:"LLW",
    Distance:598.494,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"LUN",
    To:"LLW",
    Distance:598.494,
    Airport:"Proflight Commuter Services"
}),
new Routes(
{
    From:"LUN",
    To:"LVI",
    Distance:394.029,
    Airport:"Proflight Commuter Services"
}),
new Routes(
{
    From:"LUN",
    To:"MFU",
    Distance:440.438,
    Airport:"Proflight Commuter Services"
}),
new Routes(
{
    From:"LUN",
    To:"NBO",
    Distance:1814.45,
    Airport:"Air France"
}),
new Routes(
{
    From:"LUN",
    To:"NBO",
    Distance:1814.45,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LUN",
    To:"NBO",
    Distance:1814.45,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LUN",
    To:"NBO",
    Distance:1814.45,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"LUN",
    To:"NLA",
    Distance:260.39,
    Airport:"Proflight Commuter Services"
}),
new Routes(
{
    From:"LUN",
    To:"SLI",
    Distance:417.205,
    Airport:"Proflight Commuter Services"
}),
new Routes(
{
    From:"LUN",
    To:"WDH",
    Distance:1402.47,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"LUN",
    To:"WDH",
    Distance:1402.47,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"LUO",
    To:"LAD",
    Distance:797.76,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"LUQ",
    To:"AEP",
    Distance:746.351,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"LUR",
    To:"OTZ",
    Distance:265.623,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"LUV",
    To:"AMQ",
    Distance:558.334,
    Airport:"Illinois Airways"
}),
new Routes(
{
    From:"LUV",
    To:"AMQ",
    Distance:558.334,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"LUW",
    To:"UPG",
    Distance:572.446,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"LUW",
    To:"UPG",
    Distance:572.446,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"LUX",
    To:"ACE",
    Distance:2844.23,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"ADB",
    Distance:2085.45,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"AGA",
    Distance:2514.58,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"AGP",
    Distance:1678.17,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"AJA",
    Distance:879.645,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"AMS",
    Distance:314.97,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LUX",
    To:"ARN",
    Distance:1341.22,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"AYT",
    Distance:2424.63,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"BCN",
    Distance:980.291,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LUX",
    To:"BCN",
    Distance:980.291,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LUX",
    To:"BCN",
    Distance:980.291,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"BIA",
    Distance:825.856,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"BVC",
    Distance:4551.94,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"CAG",
    Distance:1175.3,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"CDG",
    Distance:273.995,
    Airport:"Air France"
}),
new Routes(
{
    From:"LUX",
    To:"CDG",
    Distance:273.995,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"CFU",
    Distance:1550.47,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"CLY",
    Distance:813.626,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"CPH",
    Distance:794.914,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"CPH",
    Distance:794.914,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LUX",
    To:"CTA",
    Distance:1526.41,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"DBV",
    Distance:1214.6,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"DJE",
    Distance:1791.08,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"DUB",
    Distance:959.35,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"DUS",
    Distance:189.034,
    Airport:"China United Airlines"
}),
new Routes(
{
    From:"LUX",
    To:"DUS",
    Distance:189.034,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"FAO",
    Distance:1805.4,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"FCO",
    Distance:987.339,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LUX",
    To:"FCO",
    Distance:987.339,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"FNC",
    Distance:2671.17,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"FRA",
    Distance:173.052,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"FSC",
    Distance:930.9,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"FUE",
    Distance:2904.24,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"GVA",
    Distance:376.863,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"HER",
    Distance:2211.1,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"IBZ",
    Distance:1255.64,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"IST",
    Distance:2001.39,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"LUX",
    To:"KGS",
    Distance:2200.27,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"LCY",
    Distance:482.186,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"LGW",
    Distance:484.177,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LUX",
    To:"LHR",
    Distance:514.165,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LUX",
    To:"LHR",
    Distance:514.165,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LUX",
    To:"LIS",
    Distance:1711.54,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"LIS",
    Distance:1711.54,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LUX",
    To:"LIS",
    Distance:1711.54,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LUX",
    To:"LPA",
    Distance:3030.52,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"MAD",
    Distance:1271.01,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"MLA",
    Distance:1670.8,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"MUC",
    Distance:430.541,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LUX",
    To:"MUC",
    Distance:430.541,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"MXP",
    Distance:482.625,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LUX",
    To:"MXP",
    Distance:482.625,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"MXP",
    Distance:482.625,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LUX",
    To:"NAP",
    Distance:1158.03,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"NCE",
    Distance:668.027,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"OPO",
    Distance:1484.76,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"OPO",
    Distance:1484.76,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LUX",
    To:"PMI",
    Distance:1153.2,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"RAK",
    Distance:2327.97,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"RHO",
    Distance:2292.45,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"SCN",
    Distance:79.485,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LUX",
    To:"SCN",
    Distance:79.485,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"TFS",
    Distance:3081.63,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"TXL",
    Distance:591.69,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LUX",
    To:"TXL",
    Distance:591.69,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"VAR",
    Distance:1794.46,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"VIE",
    Distance:775.485,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"LUX",
    To:"VIE",
    Distance:775.485,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"XRY",
    Distance:1739.16,
    Airport:"Luxair"
}),
new Routes(
{
    From:"LUX",
    To:"ZRH",
    Distance:295.6,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LUZ",
    To:"FCO",
    Distance:1316.92,
    Airport:"Carpatair"
}),
new Routes(
{
    From:"LUZ",
    To:"GDN",
    Distance:450.713,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"LUZ",
    To:"LTN",
    Distance:1590.65,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LUZ",
    To:"MXP",
    Distance:1202.72,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"LUZ",
    To:"STN",
    Distance:1549.36,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"LUZ",
    To:"TRF",
    Distance:1181.7,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"LVI",
    To:"HRE",
    Distance:557.837,
    Airport:"Air France"
}),
new Routes(
{
    From:"LVI",
    To:"HRE",
    Distance:557.837,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LVI",
    To:"HRE",
    Distance:557.837,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"LVI",
    To:"JNB",
    Distance:957.928,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LVI",
    To:"JNB",
    Distance:957.928,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"LVI",
    To:"LUN",
    Distance:394.029,
    Airport:"Proflight Commuter Services"
}),
new Routes(
{
    From:"LVI",
    To:"MQP",
    Distance:1002.28,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"LWB",
    To:"IAD",
    Distance:283.504,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"LWN",
    To:"DME",
    Distance:1687.33,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"LWO",
    To:"BGY",
    Distance:1158.42,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"LWO",
    To:"DTM",
    Distance:1164.9,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"LWO",
    To:"FCO",
    Distance:1268.45,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"LWO",
    To:"GRO",
    Distance:1853.22,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"LWO",
    To:"IST",
    Distance:1052.6,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"LWO",
    To:"KBP",
    Distance:498.464,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"LWO",
    To:"LCA",
    Distance:1837.67,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"LWO",
    To:"MUC",
    Distance:899.99,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LWO",
    To:"NAP",
    Distance:1245.11,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"LWO",
    To:"SAW",
    Distance:1075.13,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"LWO",
    To:"TLV",
    Distance:2176.78,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"LWO",
    To:"TSF",
    Distance:992.553,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"LWO",
    To:"VIE",
    Distance:571.218,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"LWO",
    To:"VIE",
    Distance:571.218,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"LWO",
    To:"VKO",
    Distance:1100.08,
    Airport:"East African"
}),
new Routes(
{
    From:"LWO",
    To:"VLC",
    Distance:2233.1,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"LWO",
    To:"WAW",
    Distance:334.962,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"LWS",
    To:"BOI",
    Distance:318.628,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LWS",
    To:"PUW",
    Distance:41.6977,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LWS",
    To:"SEA",
    Distance:419.402,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"LWS",
    To:"SLC",
    Distance:741.581,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"LWY",
    To:"BKI",
    Distance:140.381,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LWY",
    To:"BKM",
    Distance:100.061,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LWY",
    To:"MYY",
    Distance:168.076,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"LXA",
    To:"BPX",
    Distance:613.157,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"LXA",
    To:"CKG",
    Distance:1521.73,
    Airport:"Air China"
}),
new Routes(
{
    From:"LXA",
    To:"CKG",
    Distance:1521.73,
    Airport:"Air France"
}),
new Routes(
{
    From:"LXA",
    To:"CKG",
    Distance:1521.73,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LXA",
    To:"CKG",
    Distance:1521.73,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LXA",
    To:"CKG",
    Distance:1521.73,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LXA",
    To:"CKG",
    Distance:1521.73,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"LXA",
    To:"CKG",
    Distance:1521.73,
    Airport:"West Air China"
}),
new Routes(
{
    From:"LXA",
    To:"CKG",
    Distance:1521.73,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"LXA",
    To:"CTU",
    Distance:1263.36,
    Airport:"Air China"
}),
new Routes(
{
    From:"LXA",
    To:"CTU",
    Distance:1263.36,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LXA",
    To:"CTU",
    Distance:1263.36,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LXA",
    To:"CTU",
    Distance:1263.36,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LXA",
    To:"CTU",
    Distance:1263.36,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"LXA",
    To:"DIG",
    Distance:872.121,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LXA",
    To:"GXH",
    Distance:1225.21,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LXA",
    To:"INC",
    Distance:1723.82,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"LXA",
    To:"KMG",
    Distance:1263.95,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LXA",
    To:"KTM",
    Distance:571.023,
    Airport:"Air China"
}),
new Routes(
{
    From:"LXA",
    To:"LHW",
    Distance:1408.06,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"LXA",
    To:"LZY",
    Distance:331.949,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"LXA",
    To:"MIG",
    Distance:1346.82,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"LXA",
    To:"NGQ",
    Distance:1083.43,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"LXA",
    To:"PEK",
    Distance:2622.42,
    Airport:"Air China"
}),
new Routes(
{
    From:"LXA",
    To:"PEK",
    Distance:2622.42,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LXA",
    To:"XIY",
    Distance:1776.27,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LXA",
    To:"XIY",
    Distance:1776.27,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LXA",
    To:"XIY",
    Distance:1776.27,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LXA",
    To:"XNN",
    Distance:1312.13,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LXA",
    To:"XNN",
    Distance:1312.13,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"LXG",
    To:"VTE",
    Distance:352.181,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"LXR",
    To:"CAI",
    Distance:511.153,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"LXR",
    To:"CAI",
    Distance:511.153,
    Airport:"Marysya Airlines"
}),
new Routes(
{
    From:"LXR",
    To:"CDG",
    Distance:3675.53,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"LXR",
    To:"DOH",
    Distance:1892.17,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"LXR",
    To:"JED",
    Distance:792.512,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"LXR",
    To:"JED",
    Distance:792.512,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"LXR",
    To:"KWI",
    Distance:1555.73,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"LXR",
    To:"KWI",
    Distance:1555.73,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"LXR",
    To:"LHR",
    Distance:4005.27,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"LXR",
    To:"RUH",
    Distance:1408.04,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"LXS",
    To:"ATH",
    Distance:246.966,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"LXS",
    To:"ATH",
    Distance:246.966,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"LXS",
    To:"JIK",
    Distance:266.437,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"LXS",
    To:"MJT",
    Distance:151.044,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"LXS",
    To:"SKG",
    Distance:203.677,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"LYA",
    To:"BHY",
    Distance:1460.65,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"LYA",
    To:"CAN",
    Distance:1229.08,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LYA",
    To:"CKG",
    Distance:744.272,
    Airport:"China SSS"
}),
new Routes(
{
    From:"LYA",
    To:"DLC",
    Distance:967.823,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LYA",
    To:"KHN",
    Distance:705.269,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LYA",
    To:"KMG",
    Distance:1393.11,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LYA",
    To:"PEK",
    Distance:736.442,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LYA",
    To:"SHA",
    Distance:918.232,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LYA",
    To:"SHE",
    Distance:1236.97,
    Airport:"China SSS"
}),
new Routes(
{
    From:"LYB",
    To:"CYB",
    Distance:22.0016,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"LYB",
    To:"GCM",
    Distance:138.922,
    Airport:"Cayman Airways"
}),
new Routes(
{
    From:"LYC",
    To:"AJR",
    Distance:118.855,
    Airport:"NextJet"
}),
new Routes(
{
    From:"LYC",
    To:"AJR",
    Distance:118.855,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LYC",
    To:"ARN",
    Distance:546.021,
    Airport:"NextJet"
}),
new Routes(
{
    From:"LYC",
    To:"ARN",
    Distance:546.021,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LYG",
    To:"CAN",
    Distance:1368.32,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LYG",
    To:"CTU",
    Distance:1498.75,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"LYG",
    To:"DLC",
    Distance:531.594,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LYG",
    To:"DLC",
    Distance:531.594,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"LYG",
    To:"FOC",
    Distance:958.756,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"LYG",
    To:"HGH",
    Distance:493.109,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LYG",
    To:"HKG",
    Distance:1457.02,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LYG",
    To:"HSN",
    Distance:590.748,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LYG",
    To:"NAY",
    Distance:634.602,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LYG",
    To:"NAY",
    Distance:634.602,
    Airport:"China United"
}),
new Routes(
{
    From:"LYG",
    To:"PEK",
    Distance:658.459,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LYG",
    To:"SHA",
    Distance:420.561,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LYG",
    To:"SHA",
    Distance:420.561,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"LYG",
    To:"SHE",
    Distance:837.963,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"LYG",
    To:"WUH",
    Distance:630.795,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LYG",
    To:"XUZ",
    Distance:201.172,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LYH",
    To:"CLT",
    Distance:282.116,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LYH",
    To:"CLT",
    Distance:282.116,
    Airport:"US Airways"
}),
new Routes(
{
    From:"LYI",
    To:"CAN",
    Distance:1386.98,
    Airport:"Air China"
}),
new Routes(
{
    From:"LYI",
    To:"CAN",
    Distance:1386.98,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LYI",
    To:"CSX",
    Distance:906.869,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"LYI",
    To:"DLC",
    Distance:516.667,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"LYI",
    To:"HGH",
    Distance:568.034,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LYI",
    To:"NAY",
    Distance:556.133,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LYI",
    To:"NAY",
    Distance:556.133,
    Airport:"China United"
}),
new Routes(
{
    From:"LYI",
    To:"PEK",
    Distance:582.431,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LYI",
    To:"PVG",
    Distance:536.791,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LYI",
    To:"SHA",
    Distance:507.147,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LYI",
    To:"SHA",
    Distance:507.147,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"LYI",
    To:"SHE",
    Distance:823.085,
    Airport:"Air China"
}),
new Routes(
{
    From:"LYI",
    To:"SHE",
    Distance:823.085,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LYI",
    To:"SZX",
    Distance:1450.02,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"LYI",
    To:"WNZ",
    Distance:826.221,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"LYI",
    To:"WUH",
    Distance:615.174,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"LYI",
    To:"XIY",
    Distance:884.8,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LYI",
    To:"YIW",
    Distance:652.003,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"LYP",
    To:"KHI",
    Distance:917.759,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"LYP",
    To:"KHI",
    Distance:917.759,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"LYR",
    To:"OSL",
    Distance:2013.34,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"LYR",
    To:"OSL",
    Distance:2013.34,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LYR",
    To:"TOS",
    Distance:957.617,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"LYS",
    To:"AAE",
    Distance:1015.65,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"LYS",
    To:"ADB",
    Distance:1993.14,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"LYS",
    To:"AGA",
    Distance:2126.63,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"AGP",
    Distance:1285.17,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"AGP",
    Distance:1285.17,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"AJA",
    Distance:517.051,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"AJA",
    Distance:517.051,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LYS",
    To:"AJA",
    Distance:517.051,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"LYS",
    To:"AJA",
    Distance:517.051,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"ALG",
    Distance:1016.78,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"LYS",
    To:"ALG",
    Distance:1016.78,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"LYS",
    To:"AMS",
    Distance:732.296,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"AMS",
    Distance:732.296,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"ATH",
    Distance:1779.82,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"ATH",
    Distance:1779.82,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"ATH",
    Distance:1779.82,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LYS",
    To:"BCN",
    Distance:549.062,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"BCN",
    Distance:549.062,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"BCN",
    Distance:549.062,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"BES",
    Distance:780.29,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"BES",
    Distance:780.29,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"BHX",
    Distance:897.775,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"BHX",
    Distance:897.775,
    Airport:"Flybe"
}),
new Routes(
{
    From:"LYS",
    To:"BIA",
    Distance:497.266,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"BIA",
    Distance:497.266,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"LYS",
    To:"BIA",
    Distance:497.266,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"BIQ",
    Distance:580.518,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"BJA",
    Distance:1002.36,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"LYS",
    To:"BLJ",
    Distance:1113.79,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"LYS",
    To:"BLQ",
    Distance:503.763,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"BLQ",
    Distance:503.763,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"BOD",
    Distance:465.052,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"BOD",
    Distance:465.052,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"BRU",
    Distance:577.173,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"BRU",
    Distance:577.173,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"BRU",
    Distance:577.173,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"BRU",
    Distance:577.173,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"BSK",
    Distance:1216.93,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"LYS",
    To:"CDG",
    Distance:412.436,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"CDG",
    Distance:412.436,
    Airport:"XL Airways France"
}),
new Routes(
{
    From:"LYS",
    To:"CFE",
    Distance:149.233,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"CFR",
    Distance:565.844,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"CMN",
    Distance:1747.8,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"LYS",
    To:"CMN",
    Distance:1747.8,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"LYS",
    To:"CMN",
    Distance:1747.8,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"CTA",
    Distance:1235.65,
    Airport:"Air One"
}),
new Routes(
{
    From:"LYS",
    To:"CTA",
    Distance:1235.65,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LYS",
    To:"CZL",
    Distance:1058.58,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"LYS",
    To:"CZL",
    Distance:1058.58,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"LYS",
    To:"DJE",
    Distance:1403.49,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"LYS",
    To:"DJE",
    Distance:1403.49,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"LYS",
    To:"DUB",
    Distance:1181.84,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"LYS",
    To:"DUS",
    Distance:630.739,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"LYS",
    To:"DXB",
    Distance:4986.83,
    Airport:"Emirates"
}),
new Routes(
{
    From:"LYS",
    To:"EDI",
    Distance:1280.61,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"ETZ",
    Distance:372.416,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"FCO",
    Distance:721.16,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"FCO",
    Distance:721.16,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"FCO",
    Distance:721.16,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LYS",
    To:"FCO",
    Distance:721.16,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"FLR",
    Distance:527.447,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"FLR",
    Distance:527.447,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"FRA",
    Distance:542.917,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"FRA",
    Distance:542.917,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LYS",
    To:"GOT",
    Distance:1414.85,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"GOT",
    Distance:1414.85,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"HER",
    Distance:2044.16,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LYS",
    To:"IST",
    Distance:1981.35,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"LEH",
    Distance:565.243,
    Airport:"Twin Jet"
}),
new Routes(
{
    From:"LYS",
    To:"LGW",
    Distance:717.37,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"LHR",
    Distance:758.208,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"LHR",
    Distance:758.208,
    Airport:"British Airways"
}),
new Routes(
{
    From:"LYS",
    To:"LIG",
    Distance:303.594,
    Airport:"Nationwide Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"LIL",
    Distance:557.761,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"LIS",
    Distance:1399.42,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"LYS",
    To:"LIS",
    Distance:1399.42,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"LRT",
    Distance:687.82,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"LYS",
    To:"MAD",
    Distance:911.486,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"MAD",
    Distance:911.486,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"MIR",
    Distance:1205.97,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"LYS",
    To:"MIR",
    Distance:1205.97,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LYS",
    To:"MIR",
    Distance:1205.97,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"LYS",
    To:"MLA",
    Distance:1350.21,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"MLA",
    Distance:1350.21,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"LYS",
    To:"MLH",
    Distance:278.492,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"MPL",
    Distance:255.186,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"MRS",
    Distance:254.914,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"MUC",
    Distance:585.151,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"LYS",
    To:"MXP",
    Distance:282.757,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"MXP",
    Distance:282.757,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"MXP",
    Distance:282.757,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LYS",
    To:"NCE",
    Distance:284.745,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"NCE",
    Distance:284.745,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"NTE",
    Distance:537.263,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"NTE",
    Distance:537.263,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"OPO",
    Distance:1215.45,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LYS",
    To:"OPO",
    Distance:1215.45,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"ORN",
    Distance:1221.45,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"LYS",
    To:"ORN",
    Distance:1221.45,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"LYS",
    To:"ORY",
    Distance:392.034,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"OUD",
    Distance:1352.91,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LYS",
    To:"PIS",
    Distance:380.666,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"PIS",
    Distance:380.666,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"PMI",
    Distance:712.987,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"PMI",
    Distance:712.987,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"PRG",
    Distance:837.84,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"PRG",
    Distance:837.84,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"PUF",
    Distance:508.405,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"QSF",
    Distance:1061.9,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"LYS",
    To:"QSF",
    Distance:1061.9,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"LYS",
    To:"RAK",
    Distance:1934.52,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"LYS",
    To:"RAK",
    Distance:1934.52,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LYS",
    To:"RAK",
    Distance:1934.52,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"RNS",
    Distance:580.087,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"SPU",
    Distance:918.685,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"STN",
    Distance:771.22,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"SVQ",
    Distance:1297.05,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"SVQ",
    Distance:1297.05,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"SVQ",
    Distance:1297.05,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LYS",
    To:"SXB",
    Distance:366.839,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"SXF",
    Distance:960.418,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"TLM",
    Distance:1312.33,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"LYS",
    To:"TLS",
    Distance:375.731,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"TLS",
    Distance:375.731,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"LYS",
    To:"TLS",
    Distance:375.731,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"TUN",
    Distance:1075.57,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"LYS",
    To:"TUN",
    Distance:1075.57,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"LYS",
    To:"TUN",
    Distance:1075.57,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"LYS",
    To:"VCE",
    Distance:565.088,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"VCE",
    Distance:565.088,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"LYS",
    To:"VCE",
    Distance:565.088,
    Airport:"easyJet"
}),
new Routes(
{
    From:"LYS",
    To:"VIE",
    Distance:910.224,
    Airport:"Air France"
}),
new Routes(
{
    From:"LYS",
    To:"VIE",
    Distance:910.224,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"LYS",
    To:"YUL",
    Distance:5865.79,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"LYS",
    To:"ZRH",
    Distance:327.34,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"LZC",
    To:"MEX",
    Distance:367.933,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"LZC",
    To:"MEX",
    Distance:367.933,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"LZH",
    To:"CAN",
    Distance:407.756,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LZH",
    To:"CKG",
    Distance:670.638,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"LZH",
    To:"CSX",
    Distance:584.657,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LZH",
    To:"CTU",
    Distance:888.902,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"LZH",
    To:"KMG",
    Distance:677.645,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"LZH",
    To:"PEK",
    Distance:1888.69,
    Airport:"Air China"
}),
new Routes(
{
    From:"LZH",
    To:"PEK",
    Distance:1888.69,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LZH",
    To:"PVG",
    Distance:1443.83,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LZH",
    To:"SHA",
    Distance:1408.17,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LZH",
    To:"SYX",
    Distance:656.566,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LZH",
    To:"SZX",
    Distance:483.451,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"LZH",
    To:"WUH",
    Distance:871.778,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LZH",
    To:"XMN",
    Distance:885.524,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"LZH",
    To:"ZUH",
    Distance:475.361,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"LZO",
    To:"CAN",
    Distance:995.26,
    Airport:"Air China"
}),
new Routes(
{
    From:"LZO",
    To:"CAN",
    Distance:995.26,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LZO",
    To:"CSX",
    Distance:768.072,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LZO",
    To:"CSX",
    Distance:768.072,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"LZO",
    To:"HAK",
    Distance:1116.02,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"LZO",
    To:"HGH",
    Distance:1462.06,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LZO",
    To:"KMG",
    Distance:503.149,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LZO",
    To:"KWE",
    Distance:292.218,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"LZO",
    To:"NNG",
    Distance:747.948,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"LZO",
    To:"PEK",
    Distance:1613.12,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LZO",
    To:"PVG",
    Distance:1599.34,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"LZO",
    To:"SZX",
    Distance:1089.33,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"LZO",
    To:"XIY",
    Distance:698.521,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"LZY",
    To:"CTU",
    Distance:936.629,
    Airport:"Air China"
}),
new Routes(
{
    From:"LZY",
    To:"CTU",
    Distance:936.629,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"LZY",
    To:"CTU",
    Distance:936.629,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"LZY",
    To:"CTU",
    Distance:936.629,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"LZY",
    To:"LXA",
    Distance:331.949,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"MAA",
    To:"AMD",
    Distance:1375.24,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"AMD",
    Distance:1375.24,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"MAA",
    To:"AUH",
    Distance:2966.76,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"MAA",
    To:"AUH",
    Distance:2966.76,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"MAA",
    To:"BAH",
    Distance:3416.28,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"MAA",
    To:"BKK",
    Distance:2225.89,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"MAA",
    To:"BKK",
    Distance:2225.89,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"MAA",
    To:"BLR",
    Distance:272.271,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"MAA",
    To:"BLR",
    Distance:272.271,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"MAA",
    To:"BLR",
    Distance:272.271,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"BLR",
    Distance:272.271,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"MAA",
    To:"BLR",
    Distance:272.271,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"MAA",
    To:"BOM",
    Distance:1033.98,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"MAA",
    To:"BOM",
    Distance:1033.98,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"MAA",
    To:"BOM",
    Distance:1033.98,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"MAA",
    To:"BOM",
    Distance:1033.98,
    Airport:"Go Air"
}),
new Routes(
{
    From:"MAA",
    To:"BOM",
    Distance:1033.98,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"BOM",
    Distance:1033.98,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"MAA",
    To:"BOM",
    Distance:1033.98,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"MAA",
    To:"CCJ",
    Distance:503.714,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"MAA",
    To:"CCU",
    Distance:1384.58,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"MAA",
    To:"CCU",
    Distance:1384.58,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"CCU",
    Distance:1384.58,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"MAA",
    To:"CJB",
    Distance:405.106,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"MAA",
    To:"CJB",
    Distance:405.106,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"CJB",
    Distance:405.106,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"MAA",
    To:"CJB",
    Distance:405.106,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"MAA",
    To:"CMB",
    Distance:647.262,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"MAA",
    To:"CMB",
    Distance:647.262,
    Airport:"L"
}),
new Routes(
{
    From:"MAA",
    To:"CMB",
    Distance:647.262,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"MAA",
    To:"CMB",
    Distance:647.262,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"COK",
    Distance:519.593,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"MAA",
    To:"COK",
    Distance:519.593,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"MAA",
    To:"COK",
    Distance:519.593,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"COK",
    Distance:519.593,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"MAA",
    To:"COK",
    Distance:519.593,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"MAA",
    To:"DAC",
    Distance:1616.23,
    Airport:"Maldivian"
}),
new Routes(
{
    From:"MAA",
    To:"DEL",
    Distance:1760.59,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"MAA",
    To:"DEL",
    Distance:1760.59,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"MAA",
    To:"DEL",
    Distance:1760.59,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"DEL",
    Distance:1760.59,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"MAA",
    To:"DEL",
    Distance:1760.59,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"MAA",
    To:"DMK",
    Distance:2210.66,
    Airport:"Thai AirAsia"
}),
new Routes(
{
    From:"MAA",
    To:"DMM",
    Distance:3502.18,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"DOH",
    Distance:3290.89,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"MAA",
    To:"DXB",
    Distance:2933.95,
    Airport:"Emirates"
}),
new Routes(
{
    From:"MAA",
    To:"DXB",
    Distance:2933.95,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"FRA",
    Distance:7596.17,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"MAA",
    To:"FRA",
    Distance:7596.17,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"MAA",
    To:"GOI",
    Distance:734.017,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"MAA",
    To:"GOI",
    Distance:734.017,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"MAA",
    To:"GOI",
    Distance:734.017,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"MAA",
    To:"GOI",
    Distance:734.017,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"MAA",
    To:"HKG",
    Distance:3711.8,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"MAA",
    To:"HRI",
    Distance:753.24,
    Airport:"L"
}),
new Routes(
{
    From:"MAA",
    To:"HRI",
    Distance:753.24,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"HYD",
    Distance:528.733,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"MAA",
    To:"HYD",
    Distance:528.733,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"MAA",
    To:"HYD",
    Distance:528.733,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"HYD",
    Distance:528.733,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"MAA",
    To:"HYD",
    Distance:528.733,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"MAA",
    To:"IXM",
    Distance:418.562,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"MAA",
    To:"IXM",
    Distance:418.562,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"MAA",
    To:"IXM",
    Distance:418.562,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"MAA",
    To:"IXM",
    Distance:418.562,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"MAA",
    To:"IXZ",
    Distance:1371.41,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"MAA",
    To:"IXZ",
    Distance:1371.41,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"MAA",
    To:"IXZ",
    Distance:1371.41,
    Airport:"Go Air"
}),
new Routes(
{
    From:"MAA",
    To:"IXZ",
    Distance:1371.41,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"MAA",
    To:"IXZ",
    Distance:1371.41,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"MAA",
    To:"JED",
    Distance:4446.44,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"KUL",
    Distance:2627.77,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"MAA",
    To:"KUL",
    Distance:2627.77,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"MAA",
    To:"KUL",
    Distance:2627.77,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"MAA",
    To:"KUL",
    Distance:2627.77,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"KWI",
    Distance:3778.14,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"MAA",
    To:"LHR",
    Distance:8235.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"LHR",
    Distance:8235.3,
    Airport:"British Airways"
}),
new Routes(
{
    From:"MAA",
    To:"MCT",
    Distance:2589.6,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"MAA",
    To:"MCT",
    Distance:2589.6,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"MAA",
    To:"MLE",
    Distance:1221.36,
    Airport:"Maldivian"
}),
new Routes(
{
    From:"MAA",
    To:"MRU",
    Distance:4456.91,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"MAA",
    To:"MRU",
    Distance:4456.91,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"MAA",
    To:"PNQ",
    Distance:913.425,
    Airport:"Go Air"
}),
new Routes(
{
    From:"MAA",
    To:"PNQ",
    Distance:913.425,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"PNQ",
    Distance:913.425,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"MAA",
    To:"RUH",
    Distance:3750.3,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"RUN",
    Distance:4632.41,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"MAA",
    To:"SHJ",
    Distance:2923.16,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"MAA",
    To:"SHJ",
    Distance:2923.16,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"MAA",
    To:"SIN",
    Distance:2924.45,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"MAA",
    To:"SIN",
    Distance:2924.45,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"MAA",
    To:"SIN",
    Distance:2924.45,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"SIN",
    Distance:2924.45,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"MAA",
    To:"SIN",
    Distance:2924.45,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"MAA",
    To:"SIN",
    Distance:2924.45,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"SIN",
    Distance:2924.45,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"MAA",
    To:"TRV",
    Distance:615.261,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"MAA",
    To:"TRV",
    Distance:615.261,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"MAA",
    To:"TRV",
    Distance:615.261,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"TRV",
    Distance:615.261,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"MAA",
    To:"TRZ",
    Distance:295.032,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"MAA",
    To:"TRZ",
    Distance:295.032,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"MAA",
    To:"TRZ",
    Distance:295.032,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"MAA",
    To:"VTZ",
    Distance:618.626,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"MAA",
    To:"VTZ",
    Distance:618.626,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"MAB",
    To:"AUX",
    Distance:229.338,
    Airport:"Azul"
}),
new Routes(
{
    From:"MAB",
    To:"BEL",
    Distance:449.632,
    Airport:"Azul"
}),
new Routes(
{
    From:"MAB",
    To:"BEL",
    Distance:449.632,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"MAB",
    To:"BEL",
    Distance:449.632,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"MAB",
    To:"BSB",
    Distance:1175.38,
    Airport:"Azul"
}),
new Routes(
{
    From:"MAB",
    To:"BSB",
    Distance:1175.38,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"MAB",
    To:"BSB",
    Distance:1175.38,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"MAB",
    To:"CKS",
    Distance:126.921,
    Airport:"Azul"
}),
new Routes(
{
    From:"MAB",
    To:"IMP",
    Distance:186.618,
    Airport:"Shuttle America"
}),
new Routes(
{
    From:"MAB",
    To:"OIA",
    Distance:262.174,
    Airport:"Shuttle America"
}),
new Routes(
{
    From:"MAB",
    To:"RDC",
    Distance:310.55,
    Airport:"Shuttle America"
}),
new Routes(
{
    From:"MAB",
    To:"TUR",
    Distance:187.435,
    Airport:"Azul"
}),
new Routes(
{
    From:"MAD",
    To:"ACC",
    Distance:3894.22,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"ACE",
    Distance:1575.75,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"ACE",
    Distance:1575.75,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"ACE",
    Distance:1575.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"AGP",
    Distance:432.271,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"AGP",
    Distance:432.271,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"AHO",
    Distance:1001.01,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"ALC",
    Distance:356.77,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"ALG",
    Distance:725.046,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"MAD",
    To:"ALG",
    Distance:725.046,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"AMM",
    Distance:3652.13,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"AMM",
    Distance:3652.13,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"MAD",
    To:"AMS",
    Distance:1458.58,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"AMS",
    Distance:1458.58,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"AMS",
    Distance:1458.58,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"ARN",
    Distance:2599.39,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"ARN",
    Distance:2599.39,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"MAD",
    To:"ATH",
    Distance:2377.39,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"ATH",
    Distance:2377.39,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"ATL",
    Distance:6960.38,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"MAD",
    To:"ATL",
    Distance:6960.38,
    Airport:"Air France"
}),
new Routes(
{
    From:"MAD",
    To:"ATL",
    Distance:6960.38,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"MAD",
    To:"ATL",
    Distance:6960.38,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"BCN",
    Distance:482.744,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"BCN",
    Distance:482.744,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"BCN",
    Distance:482.744,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"BGY",
    Distance:1219.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"BIO",
    Distance:316.87,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"BIO",
    Distance:316.87,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"BJZ",
    Distance:330.553,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"BKK",
    Distance:10193,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"MAD",
    To:"BLQ",
    Distance:1295.59,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"BLQ",
    Distance:1295.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"BOD",
    Distance:535.339,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"BOG",
    Distance:8031.42,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"MAD",
    To:"BOG",
    Distance:8031.42,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"BOS",
    Distance:5473.02,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"BOS",
    Distance:5473.02,
    Airport:"British Airways"
}),
new Routes(
{
    From:"MAD",
    To:"BOS",
    Distance:5473.02,
    Airport:"Finnair"
}),
new Routes(
{
    From:"MAD",
    To:"BOS",
    Distance:5473.02,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"BRS",
    Distance:1212.56,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAD",
    To:"BRU",
    Distance:1313.59,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"MAD",
    To:"BRU",
    Distance:1313.59,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"BRU",
    Distance:1313.59,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"BRU",
    Distance:1313.59,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"BRU",
    Distance:1313.59,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"BSL",
    Distance:1185.01,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAD",
    To:"BUD",
    Distance:1973.72,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"BUD",
    Distance:1973.72,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"MAD",
    To:"BVA",
    Distance:1091.2,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"CAG",
    Distance:1084.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"CAI",
    Distance:3350.36,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"MAD",
    To:"CCS",
    Distance:7005.89,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"CCS",
    Distance:7005.89,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"MAD",
    To:"CCS",
    Distance:7005.89,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"CDG",
    Distance:1062.48,
    Airport:"Air France"
}),
new Routes(
{
    From:"MAD",
    To:"CDG",
    Distance:1062.48,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"CDG",
    Distance:1062.48,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAD",
    To:"CIA",
    Distance:1359,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"CLJ",
    Distance:2288.56,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"MAD",
    To:"CLO",
    Distance:8302.82,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"MAD",
    To:"CMN",
    Distance:869.075,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"CMN",
    Distance:869.075,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"MAD",
    To:"CPH",
    Distance:2058.34,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"CPH",
    Distance:2058.34,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"MAD",
    To:"CPH",
    Distance:2058.34,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"MAD",
    To:"CRL",
    Distance:1270.69,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"CTA",
    Distance:1642.11,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"CUN",
    Distance:7960.66,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"MAD",
    To:"CUN",
    Distance:7960.66,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"CUN",
    Distance:7960.66,
    Airport:"Compagnie Africaine d\\'Aviation"
}),
new Routes(
{
    From:"MAD",
    To:"DFW",
    Distance:7972.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"DFW",
    Distance:7972.46,
    Airport:"British Airways"
}),
new Routes(
{
    From:"MAD",
    To:"DFW",
    Distance:7972.46,
    Airport:"Finnair"
}),
new Routes(
{
    From:"MAD",
    To:"DFW",
    Distance:7972.46,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"DFW",
    Distance:7972.46,
    Airport:"US Airways"
}),
new Routes(
{
    From:"MAD",
    To:"DJE",
    Distance:1465.59,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"MAD",
    To:"DKR",
    Distance:3165.81,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"DKR",
    Distance:3165.81,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"DME",
    Distance:3436.01,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"DME",
    Distance:3436.01,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"DOH",
    Distance:5327.36,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"MAD",
    To:"DOH",
    Distance:5327.36,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"MAD",
    To:"DOH",
    Distance:5327.36,
    Airport:"US Airways"
}),
new Routes(
{
    From:"MAD",
    To:"DUB",
    Distance:1451.8,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"MAD",
    To:"DUB",
    Distance:1451.8,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"DUB",
    Distance:1451.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"DUS",
    Distance:1439.39,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"MAD",
    To:"DUS",
    Distance:1439.39,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"MAD",
    To:"DUS",
    Distance:1439.39,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"DXB",
    Distance:5649.12,
    Airport:"Emirates"
}),
new Routes(
{
    From:"MAD",
    To:"EAS",
    Distance:350.601,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"EDI",
    Distance:1718.74,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAD",
    To:"EIN",
    Distance:1398.26,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"MAD",
    To:"EWR",
    Distance:5788.34,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"MAD",
    To:"EWR",
    Distance:5788.34,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"EZE",
    Distance:10086.9,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"MAD",
    To:"EZE",
    Distance:10086.9,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"EZE",
    Distance:10086.9,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"FCO",
    Distance:1330.49,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"FCO",
    Distance:1330.49,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"MAD",
    To:"FCO",
    Distance:1330.49,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"FLR",
    Distance:1270.33,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"FLR",
    Distance:1270.33,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"FRA",
    Distance:1418.41,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"MAD",
    To:"FRA",
    Distance:1418.41,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"FRA",
    Distance:1418.41,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"FRA",
    Distance:1418.41,
    Airport:"Finnair"
}),
new Routes(
{
    From:"MAD",
    To:"FRA",
    Distance:1418.41,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"FRA",
    Distance:1418.41,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"FRA",
    Distance:1418.41,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"MAD",
    To:"FRA",
    Distance:1418.41,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"FUE",
    Distance:1635.5,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"FUE",
    Distance:1635.5,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"MAD",
    To:"FUE",
    Distance:1635.5,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"FUE",
    Distance:1635.5,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"GIG",
    Distance:8147.61,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"GRU",
    Distance:8378.68,
    Airport:"Air China"
}),
new Routes(
{
    From:"MAD",
    To:"GRU",
    Distance:8378.68,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"GRU",
    Distance:8378.68,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"GRU",
    Distance:8378.68,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"GRU",
    Distance:8378.68,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"GRX",
    Distance:367.932,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"GUA",
    Distance:8708.28,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"GVA",
    Distance:1008.57,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"MAD",
    To:"GVA",
    Distance:1008.57,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"GVA",
    Distance:1008.57,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"MAD",
    To:"GVA",
    Distance:1008.57,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAD",
    To:"GYE",
    Distance:9013.97,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"GYE",
    Distance:9013.97,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"HAM",
    Distance:1778.95,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"MAD",
    To:"HAV",
    Distance:7461.45,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"HAV",
    Distance:7461.45,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"MAD",
    To:"HEL",
    Distance:2945.58,
    Airport:"Finnair"
}),
new Routes(
{
    From:"MAD",
    To:"HEL",
    Distance:2945.58,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"IBZ",
    Distance:459.448,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"IBZ",
    Distance:459.448,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"MAD",
    To:"IBZ",
    Distance:459.448,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"IBZ",
    Distance:459.448,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"IBZ",
    Distance:459.448,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"ICN",
    Distance:9963.48,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"MAD",
    To:"IST",
    Distance:2713.11,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"JED",
    Distance:4516.74,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"JED",
    Distance:4516.74,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"JFK",
    Distance:5760.86,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"JFK",
    Distance:5760.86,
    Airport:"Air France"
}),
new Routes(
{
    From:"MAD",
    To:"JFK",
    Distance:5760.86,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"JFK",
    Distance:5760.86,
    Airport:"British Airways"
}),
new Routes(
{
    From:"MAD",
    To:"JFK",
    Distance:5760.86,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"MAD",
    To:"JFK",
    Distance:5760.86,
    Airport:"Finnair"
}),
new Routes(
{
    From:"MAD",
    To:"JFK",
    Distance:5760.86,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"JFK",
    Distance:5760.86,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"JFK",
    Distance:5760.86,
    Airport:"US Airways"
}),
new Routes(
{
    From:"MAD",
    To:"KBP",
    Distance:2872.23,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"KBP",
    Distance:2872.23,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"KRK",
    Distance:2101.95,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"LAD",
    Distance:5752.27,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"LAX",
    Distance:9385.15,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"LAX",
    Distance:9385.15,
    Airport:"British Airways"
}),
new Routes(
{
    From:"MAD",
    To:"LAX",
    Distance:9385.15,
    Airport:"Finnair"
}),
new Routes(
{
    From:"MAD",
    To:"LAX",
    Distance:9385.15,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"LCG",
    Distance:505.863,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"LCG",
    Distance:505.863,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"MAD",
    To:"LCG",
    Distance:505.863,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"LCY",
    Distance:1255.59,
    Airport:"British Airways"
}),
new Routes(
{
    From:"MAD",
    To:"LCY",
    Distance:1255.59,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"LDE",
    Distance:419.619,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"LEI",
    Distance:418.894,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"LEI",
    Distance:418.894,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"LGW",
    Distance:1212.93,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"LGW",
    Distance:1212.93,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAD",
    To:"LHR",
    Distance:1244.4,
    Airport:"British Airways"
}),
new Routes(
{
    From:"MAD",
    To:"LHR",
    Distance:1244.4,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"LIM",
    Distance:9526.68,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"LIM",
    Distance:9526.68,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"LIM",
    Distance:9526.68,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"LIN",
    Distance:1179.23,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"LIS",
    Distance:513.371,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"LIS",
    Distance:513.371,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"LIS",
    Distance:513.371,
    Airport:"SATA International"
}),
new Routes(
{
    From:"MAD",
    To:"LIS",
    Distance:513.371,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"MAD",
    To:"LIS",
    Distance:513.371,
    Airport:"US Airways"
}),
new Routes(
{
    From:"MAD",
    To:"LIS",
    Distance:513.371,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAD",
    To:"LOS",
    Distance:3833.12,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"LPA",
    Distance:1766.26,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"LPA",
    Distance:1766.26,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"MAD",
    To:"LPA",
    Distance:1766.26,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"LPA",
    Distance:1766.26,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"LPA",
    Distance:1766.26,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"LPL",
    Distance:1428.77,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAD",
    To:"LRM",
    Distance:6624.18,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"LTN",
    Distance:1288.93,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAD",
    To:"LUX",
    Distance:1271.01,
    Airport:"Luxair"
}),
new Routes(
{
    From:"MAD",
    To:"LYS",
    Distance:911.486,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"LYS",
    Distance:911.486,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAD",
    To:"MAH",
    Distance:664.92,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"MAN",
    Distance:1433.29,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"MDE",
    Distance:8031.75,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"MAD",
    To:"MEX",
    Distance:9065.8,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"MAD",
    To:"MEX",
    Distance:9065.8,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"MEX",
    Distance:9065.8,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"MAD",
    To:"MEX",
    Distance:9065.8,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"MIA",
    Distance:7106.38,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"MIA",
    Distance:7106.38,
    Airport:"British Airways"
}),
new Routes(
{
    From:"MAD",
    To:"MIA",
    Distance:7106.38,
    Airport:"Finnair"
}),
new Routes(
{
    From:"MAD",
    To:"MIA",
    Distance:7106.38,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"MIA",
    Distance:7106.38,
    Airport:"US Airways"
}),
new Routes(
{
    From:"MAD",
    To:"MJV",
    Distance:384.425,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"MLA",
    Distance:1655.85,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"MLN",
    Distance:582.207,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"MRS",
    Distance:795.725,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"MRS",
    Distance:795.725,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"MUC",
    Distance:1495.66,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"MAD",
    To:"MUC",
    Distance:1495.66,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"MUC",
    Distance:1495.66,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"MUC",
    Distance:1495.66,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"MAD",
    To:"MVD",
    Distance:9948.12,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"MXP",
    Distance:1148.81,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"MXP",
    Distance:1148.81,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"MXP",
    Distance:1148.81,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAD",
    To:"NCE",
    Distance:956.089,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"NTE",
    Distance:756.892,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"OPO",
    Distance:438.096,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"OPO",
    Distance:438.096,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"OPO",
    Distance:438.096,
    Airport:"SATA International"
}),
new Routes(
{
    From:"MAD",
    To:"OPO",
    Distance:438.096,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"MAD",
    To:"OPO",
    Distance:438.096,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"MAD",
    To:"OPO",
    Distance:438.096,
    Airport:"US Airways"
}),
new Routes(
{
    From:"MAD",
    To:"ORD",
    Distance:6744.26,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"ORD",
    Distance:6744.26,
    Airport:"British Airways"
}),
new Routes(
{
    From:"MAD",
    To:"ORD",
    Distance:6744.26,
    Airport:"Finnair"
}),
new Routes(
{
    From:"MAD",
    To:"ORD",
    Distance:6744.26,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"ORN",
    Distance:599.664,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"ORY",
    Distance:1027.77,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"ORY",
    Distance:1027.77,
    Airport:"Air France"
}),
new Routes(
{
    From:"MAD",
    To:"ORY",
    Distance:1027.77,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"OTP",
    Distance:2458.82,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"OTP",
    Distance:2458.82,
    Airport:"Tarom"
}),
new Routes(
{
    From:"MAD",
    To:"OTP",
    Distance:2458.82,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"MAD",
    To:"OVD",
    Distance:397.55,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"OVD",
    Distance:397.55,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"PEK",
    Distance:9203.76,
    Airport:"Air China"
}),
new Routes(
{
    From:"MAD",
    To:"PEK",
    Distance:9203.76,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"PHL",
    Distance:5909.39,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"PHL",
    Distance:5909.39,
    Airport:"US Airways"
}),
new Routes(
{
    From:"MAD",
    To:"PMI",
    Distance:545.953,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"PMI",
    Distance:545.953,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"MAD",
    To:"PMI",
    Distance:545.953,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"PMI",
    Distance:545.953,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"PMO",
    Distance:1453.34,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"PNA",
    Distance:299.23,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"PRG",
    Distance:1749,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"PRG",
    Distance:1749,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"PRG",
    Distance:1749,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"PRG",
    Distance:1749,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"MAD",
    To:"PSA",
    Distance:1203.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"PTY",
    Distance:8157.06,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"PUJ",
    Distance:6570.07,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"PUJ",
    Distance:6570.07,
    Airport:"Compagnie Africaine d\\'Aviation"
}),
new Routes(
{
    From:"MAD",
    To:"RAK",
    Distance:1066.32,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"RAK",
    Distance:1066.32,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"MAD",
    To:"RAK",
    Distance:1066.32,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"RBA",
    Distance:769.611,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"RJL",
    Distance:241.457,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"RTM",
    Distance:1413.57,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"MAD",
    To:"RYG",
    Distance:2326.22,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"SAW",
    Distance:2755.54,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"SCL",
    Distance:10719.7,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"SCL",
    Distance:10719.7,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"SCQ",
    Distance:483.023,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"SCQ",
    Distance:483.023,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"SCU",
    Distance:7108.79,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"MAD",
    To:"SDQ",
    Distance:6689.6,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"SDR",
    Distance:326.862,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"SJO",
    Distance:8499.69,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"SOF",
    Distance:2246.71,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"MAD",
    To:"SOF",
    Distance:2246.71,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"SOF",
    Distance:2246.71,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"MAD",
    To:"SPC",
    Distance:1847.16,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"SSA",
    Distance:6934.57,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"SSG",
    Distance:4266.47,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"STN",
    Distance:1299.57,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"SVO",
    Distance:3418.9,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"SVO",
    Distance:3418.9,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"SVQ",
    Distance:396.721,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"SXB",
    Distance:1257.7,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"SXF",
    Distance:1851.64,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAD",
    To:"TFN",
    Distance:1772.16,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"TFN",
    Distance:1772.16,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"MAD",
    To:"TFN",
    Distance:1772.16,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"TFN",
    Distance:1772.16,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"TFN",
    Distance:1772.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"TFS",
    Distance:1824.58,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"TFS",
    Distance:1824.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"TIP",
    Distance:1724.46,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"TLS",
    Distance:535.774,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"TLV",
    Distance:3544.31,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"TLV",
    Distance:3544.31,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"TNG",
    Distance:568.448,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"TNG",
    Distance:568.448,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"MAD",
    To:"TNG",
    Distance:568.448,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAD",
    To:"TRN",
    Distance:1052.23,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"TSR",
    Distance:2095.27,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"MAD",
    To:"TUN",
    Distance:1262.51,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"MAD",
    To:"TXL",
    Distance:1851.96,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"MAD",
    To:"TXL",
    Distance:1851.96,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"UIO",
    Distance:8749.18,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"UIO",
    Distance:8749.18,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"VCE",
    Distance:1406.26,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"VGO",
    Distance:464.319,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"VGO",
    Distance:464.319,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"MAD",
    To:"VGO",
    Distance:464.319,
    Airport:"Finnair"
}),
new Routes(
{
    From:"MAD",
    To:"VGO",
    Distance:464.319,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"VIE",
    Distance:1804.88,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"MAD",
    To:"VIE",
    Distance:1804.88,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"VIE",
    Distance:1804.88,
    Airport:"Niki"
}),
new Routes(
{
    From:"MAD",
    To:"VKO",
    Distance:3400.4,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"VLC",
    Distance:285.542,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"VLC",
    Distance:285.542,
    Airport:"Finnair"
}),
new Routes(
{
    From:"MAD",
    To:"VLC",
    Distance:285.542,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"VVI",
    Distance:8917.67,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"MAD",
    To:"VVI",
    Distance:8917.67,
    Airport:"Astrakhan Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"WAW",
    Distance:2269.75,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"XRY",
    Distance:469.729,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"ZRH",
    Distance:1238.8,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"MAD",
    To:"ZRH",
    Distance:1238.8,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAD",
    To:"ZRH",
    Distance:1238.8,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"MAF",
    To:"DAL",
    Distance:512.235,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"MAF",
    To:"DAL",
    Distance:512.235,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"MAF",
    To:"DEN",
    Distance:908.15,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"MAF",
    To:"DFW",
    Distance:496.13,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"MAF",
    To:"DFW",
    Distance:496.13,
    Airport:"US Airways"
}),
new Routes(
{
    From:"MAF",
    To:"HOU",
    Distance:708.706,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"MAF",
    To:"IAH",
    Distance:689.263,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"MAF",
    To:"LAS",
    Distance:1277.94,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"MAG",
    To:"GKA",
    Distance:106.705,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"MAG",
    To:"HGU",
    Distance:179.02,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"MAG",
    To:"LAE",
    Distance:183.615,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"MAG",
    To:"MAS",
    Distance:393.998,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"MAG",
    To:"POM",
    Distance:496.79,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"MAG",
    To:"VAI",
    Distance:570.585,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"MAG",
    To:"WWK",
    Distance:296.301,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"MAG",
    To:"WWK",
    Distance:296.301,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"MAH",
    To:"BCN",
    Distance:241.047,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"MAH",
    To:"BCN",
    Distance:241.047,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAH",
    To:"BCN",
    Distance:241.047,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAH",
    To:"BHX",
    Distance:1472.31,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAH",
    To:"BRU",
    Distance:1227.63,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"MAH",
    To:"CGN",
    Distance:1244.39,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"MAH",
    To:"DUS",
    Distance:1285.78,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"MAH",
    To:"EDI",
    Distance:1873.49,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAH",
    To:"EMA",
    Distance:1502.43,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAH",
    To:"EMA",
    Distance:1502.43,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAH",
    To:"EMA",
    Distance:1502.43,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAH",
    To:"FRA",
    Distance:1179.78,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"MAH",
    To:"GRO",
    Distance:257.671,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"MAH",
    To:"HAJ",
    Distance:1461.71,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"MAH",
    To:"HAM",
    Distance:1591.46,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"MAH",
    To:"LBA",
    Distance:1618.59,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAH",
    To:"LBA",
    Distance:1618.59,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAH",
    To:"LCY",
    Distance:1333.82,
    Airport:"British Airways"
}),
new Routes(
{
    From:"MAH",
    To:"LGW",
    Distance:1300.46,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAH",
    To:"LGW",
    Distance:1300.46,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAH",
    To:"LGW",
    Distance:1300.46,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAH",
    To:"LTN",
    Distance:1381.38,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAH",
    To:"MAD",
    Distance:664.92,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAH",
    To:"MAN",
    Distance:1578.41,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAH",
    To:"MAN",
    Distance:1578.41,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAH",
    To:"MAN",
    Distance:1578.41,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAH",
    To:"MUC",
    Distance:1119.69,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"MAH",
    To:"NCL",
    Distance:1743.37,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAH",
    To:"PMI",
    Distance:132.079,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"MAH",
    To:"PMI",
    Distance:132.079,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAH",
    To:"STR",
    Distance:1058.7,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"MAH",
    To:"TXL",
    Distance:1572.02,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"MAH",
    To:"VLC",
    Distance:404.352,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAH",
    To:"VLC",
    Distance:404.352,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAJ",
    To:"HNL",
    Distance:3668.19,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"MAJ",
    To:"INU",
    Distance:974.492,
    Airport:"Nauru Air Corporation"
}),
new Routes(
{
    From:"MAJ",
    To:"KWA",
    Distance:431.188,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"MAJ",
    To:"TRW",
    Distance:665.235,
    Airport:"Nauru Air Corporation"
}),
new Routes(
{
    From:"MAM",
    To:"MEX",
    Distance:721.914,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"MAM",
    To:"MEX",
    Distance:721.914,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"MAN",
    To:"ABZ",
    Distance:427.928,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"MAN",
    To:"ABZ",
    Distance:427.928,
    Airport:"Flybe"
}),
new Routes(
{
    From:"MAN",
    To:"ACE",
    Distance:2866.99,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAN",
    To:"ACE",
    Distance:2866.99,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"MAN",
    To:"ACE",
    Distance:2866.99,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"ACE",
    Distance:2866.99,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"ACE",
    Distance:2866.99,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"ACE",
    Distance:2866.99,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"MAN",
    To:"ACE",
    Distance:2866.99,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"ADB",
    Distance:2796.7,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"AGA",
    Distance:2621.19,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAN",
    To:"AGA",
    Distance:2621.19,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"MAN",
    To:"AGA",
    Distance:2621.19,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"AGP",
    Distance:1862.59,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAN",
    To:"AGP",
    Distance:1862.59,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"AGP",
    Distance:1862.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"AGP",
    Distance:1862.59,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"AGP",
    Distance:1862.59,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"ALC",
    Distance:1681.03,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAN",
    To:"ALC",
    Distance:1681.03,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"ALC",
    Distance:1681.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"ALC",
    Distance:1681.03,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"ALC",
    Distance:1681.03,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"AMS",
    Distance:486.718,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"AMS",
    Distance:486.718,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"ARN",
    Distance:1415.28,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"MAN",
    To:"ARN",
    Distance:1415.28,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"MAN",
    To:"ARN",
    Distance:1415.28,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"MAN",
    To:"ATH",
    Distance:2636.65,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"ATH",
    Distance:2636.65,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"ATH",
    Distance:2636.65,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"ATL",
    Distance:6580.99,
    Airport:"Air France"
}),
new Routes(
{
    From:"MAN",
    To:"ATL",
    Distance:6580.99,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"MAN",
    To:"ATL",
    Distance:6580.99,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"ATL",
    Distance:6580.99,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"MAN",
    To:"AUH",
    Distance:5678.28,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"MAN",
    To:"AYT",
    Distance:3130.42,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAN",
    To:"AYT",
    Distance:3130.42,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"AYT",
    Distance:3130.42,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"AYT",
    Distance:3130.42,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"BCN",
    Distance:1379.55,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAN",
    To:"BCN",
    Distance:1379.55,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"BCN",
    Distance:1379.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"BFS",
    Distance:295.475,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"BGI",
    Distance:6698.85,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"MAN",
    To:"BGO",
    Distance:895.032,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"MAN",
    To:"BGY",
    Distance:1212.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"BHD",
    Distance:273.974,
    Airport:"Flybe"
}),
new Routes(
{
    From:"MAN",
    To:"BIO",
    Distance:1118.78,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"BJV",
    Distance:2912.09,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAN",
    To:"BJV",
    Distance:2912.09,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"BJV",
    Distance:2912.09,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"BJV",
    Distance:2912.09,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"BLL",
    Distance:782.201,
    Airport:"British Airways"
}),
new Routes(
{
    From:"MAN",
    To:"BLQ",
    Distance:1389.42,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"BRE",
    Distance:736.833,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"BRU",
    Distance:535.647,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"BSL",
    Distance:943.016,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"BUD",
    Distance:1653.69,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"BUD",
    Distance:1653.69,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"BVA",
    Distance:529.525,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"BVC",
    Distance:4510.92,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"MAN",
    To:"BVC",
    Distance:4510.92,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"BZR",
    Distance:1189.46,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"CAI",
    Distance:3743.79,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"MAN",
    To:"CCC",
    Distance:7116.28,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"CDG",
    Distance:588.002,
    Airport:"Air France"
}),
new Routes(
{
    From:"MAN",
    To:"CDG",
    Distance:588.002,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"MAN",
    To:"CDG",
    Distance:588.002,
    Airport:"Flybe"
}),
new Routes(
{
    From:"MAN",
    To:"CDG",
    Distance:588.002,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"CFU",
    Distance:2268.34,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"CFU",
    Distance:2268.34,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"CFU",
    Distance:2268.34,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"CGN",
    Distance:699.418,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"MAN",
    To:"CIA",
    Distance:1694.6,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"CPH",
    Distance:994.591,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"MAN",
    To:"CPH",
    Distance:994.591,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"MAN",
    To:"CPH",
    Distance:994.591,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"CRL",
    Distance:562.363,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"CTA",
    Distance:2213.12,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"CTA",
    Distance:2213.12,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"CUN",
    Distance:7794.52,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"MAN",
    To:"CUN",
    Distance:7794.52,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"CUN",
    Distance:7794.52,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"MAN",
    To:"CUN",
    Distance:7794.52,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"DBV",
    Distance:1932.34,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAN",
    To:"DBV",
    Distance:1932.34,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"DBV",
    Distance:1932.34,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"DLM",
    Distance:3023.52,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAN",
    To:"DLM",
    Distance:3023.52,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"DLM",
    Distance:3023.52,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"DLM",
    Distance:3023.52,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"MAN",
    To:"DLM",
    Distance:3023.52,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"DLM",
    Distance:3023.52,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"DME",
    Distance:2575.6,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"DOH",
    Distance:5407.62,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"MAN",
    To:"DOH",
    Distance:5407.62,
    Airport:"US Airways"
}),
new Routes(
{
    From:"MAN",
    To:"DUB",
    Distance:265.015,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"MAN",
    To:"DUB",
    Distance:265.015,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"DUS",
    Distance:655.433,
    Airport:"Flybe"
}),
new Routes(
{
    From:"MAN",
    To:"DUS",
    Distance:655.433,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"MAN",
    To:"DXB",
    Distance:5655.27,
    Airport:"Emirates"
}),
new Routes(
{
    From:"MAN",
    To:"DXB",
    Distance:5655.27,
    Airport:"Qantas"
}),
new Routes(
{
    From:"MAN",
    To:"EDI",
    Distance:297.189,
    Airport:"Flybe"
}),
new Routes(
{
    From:"MAN",
    To:"EWR",
    Distance:5383.17,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"MAN",
    To:"EWR",
    Distance:5383.17,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"EXT",
    Distance:301.478,
    Airport:"Flybe"
}),
new Routes(
{
    From:"MAN",
    To:"FAO",
    Distance:1869.31,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAN",
    To:"FAO",
    Distance:1869.31,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"FAO",
    Distance:1869.31,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"FAO",
    Distance:1869.31,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"FCO",
    Distance:1677.62,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"FNC",
    Distance:2570.28,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"FNC",
    Distance:2570.28,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"FRA",
    Distance:831.287,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"MAN",
    To:"FUE",
    Distance:2926.55,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAN",
    To:"FUE",
    Distance:2926.55,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"MAN",
    To:"FUE",
    Distance:2926.55,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"FUE",
    Distance:2926.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"FUE",
    Distance:2926.55,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"GCI",
    Distance:436.338,
    Airport:"Aurigny Air Services"
}),
new Routes(
{
    From:"MAN",
    To:"GDN",
    Distance:1359.78,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"GIB",
    Distance:1927.72,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAN",
    To:"GLA",
    Distance:312.562,
    Airport:"Flybe"
}),
new Routes(
{
    From:"MAN",
    To:"GOT",
    Distance:1031.29,
    Airport:"British Airways"
}),
new Routes(
{
    From:"MAN",
    To:"GRO",
    Distance:1327.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"GVA",
    Distance:992.662,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"HAJ",
    Distance:807.214,
    Airport:"Flybe"
}),
new Routes(
{
    From:"MAN",
    To:"HAM",
    Distance:810.831,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"MAN",
    To:"HAM",
    Distance:810.831,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"HEL",
    Distance:1811.51,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"HEL",
    Distance:1811.51,
    Airport:"British Airways"
}),
new Routes(
{
    From:"MAN",
    To:"HEL",
    Distance:1811.51,
    Airport:"Finnair"
}),
new Routes(
{
    From:"MAN",
    To:"HER",
    Distance:2929.36,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"HER",
    Distance:2929.36,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"HER",
    Distance:2929.36,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"HRG",
    Distance:4145.87,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAN",
    To:"HRG",
    Distance:4145.87,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"HRG",
    Distance:4145.87,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"MAN",
    To:"HRG",
    Distance:4145.87,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"IBZ",
    Distance:1634.02,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"MAN",
    To:"IBZ",
    Distance:1634.02,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"IBZ",
    Distance:1634.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"IBZ",
    Distance:1634.02,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"INV",
    Distance:478.952,
    Airport:"Flybe"
}),
new Routes(
{
    From:"MAN",
    To:"IOM",
    Distance:174.545,
    Airport:"Flybe"
}),
new Routes(
{
    From:"MAN",
    To:"ISB",
    Distance:6145.76,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"IST",
    Distance:2692.29,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"JED",
    Distance:4957.31,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"MAN",
    To:"JED",
    Distance:4957.31,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"JER",
    Distance:461.025,
    Airport:"Flybe"
}),
new Routes(
{
    From:"MAN",
    To:"JER",
    Distance:461.025,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"JFK",
    Distance:5362.05,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"JFK",
    Distance:5362.05,
    Airport:"British Airways"
}),
new Routes(
{
    From:"MAN",
    To:"JFK",
    Distance:5362.05,
    Airport:"Finnair"
}),
new Routes(
{
    From:"MAN",
    To:"JFK",
    Distance:5362.05,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"JFK",
    Distance:5362.05,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"JFK",
    Distance:5362.05,
    Airport:"US Airways"
}),
new Routes(
{
    From:"MAN",
    To:"JMK",
    Distance:2759.86,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"JTR",
    Distance:2854.95,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"JTR",
    Distance:2854.95,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"KEF",
    Distance:1653.08,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"MAN",
    To:"KEF",
    Distance:1653.08,
    Airport:"easyJet"
}),
new Routes(
{
    From:"MAN",
    To:"KGS",
    Distance:2915.6,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"KGS",
    Distance:2915.6,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"KRK",
    Distance:1555.98,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"MAN",
    To:"LAS",
    Distance:8166.45,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"MAN",
    To:"LAS",
    Distance:8166.45,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"MAN",
    To:"LAS",
    Distance:8166.45,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"LAS",
    Distance:8166.45,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"MAN",
    To:"LCA",
    Distance:3468.53,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAN",
    To:"LCA",
    Distance:3468.53,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"MAN",
    To:"LCA",
    Distance:3468.53,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"LCA",
    Distance:3468.53,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"MAN",
    To:"LCA",
    Distance:3468.53,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"LEI",
    Distance:1835.82,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"MAN",
    To:"LEI",
    Distance:1835.82,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"MAN",
    To:"LHE",
    Distance:6398.15,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"LHR",
    Distance:242.168,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"MAN",
    To:"LHR",
    Distance:242.168,
    Airport:"British Airways"
}),
new Routes(
{
    From:"MAN",
    To:"LHR",
    Distance:242.168,
}),