var Routes = require('../models/Routes');

var mongoose = require("mongoose");

var connect = "mongodb://admin:supportftw117@ds155490.mlab.com:55490/dijkstra-airplanes"
mongoose.connect(connect);
console.log("Working.");

var routes = [

new Routes(
{
    From:"AAE",
    To:"ALG",
    Distance:409.468,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"AAE",
    To:"CDG",
    Distance:1420.67,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"AAE",
    To:"IST",
    Distance:1870.48,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"AAE",
    To:"LYS",
    Distance:1015.65,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"AAE",
    To:"MRS",
    Distance:767.653,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"AAE",
    To:"MRS",
    Distance:767.653,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"AAE",
    To:"ORN",
    Distance:767.612,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"AAE",
    To:"ORY",
    Distance:1395.37,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"AAE",
    To:"ORY",
    Distance:1395.37,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"AAL",
    To:"AAR",
    Distance:99.8986,
    Airport:"British Airways"
}),
new Routes(
{
    From:"AAL",
    To:"AGP",
    Distance:2506.84,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AAL",
    To:"ALC",
    Distance:2226.11,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AAL",
    To:"AMS",
    Distance:623.925,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AAL",
    To:"AMS",
    Distance:623.925,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AAL",
    To:"ARN",
    Distance:549.349,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AAL",
    To:"BCN",
    Distance:1842.09,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AAL",
    To:"BCN",
    Distance:1842.09,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AAL",
    To:"BLL",
    Distance:156.383,
    Airport:"DAT Danish Air Transport"
}),
new Routes(
{
    From:"AAL",
    To:"BLL",
    Distance:156.383,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AAL",
    To:"BLL",
    Distance:156.383,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AAL",
    To:"CPH",
    Distance:238.283,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AAL",
    To:"CPH",
    Distance:238.283,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AAL",
    To:"IST",
    Distance:2247.18,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AAL",
    To:"LGW",
    Distance:928.284,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AAL",
    To:"OSL",
    Distance:352.331,
    Airport:"ABSA - Aerolinhas Brasileiras"
}),
new Routes(
{
    From:"AAL",
    To:"OSL",
    Distance:352.331,
    Airport:"British Airways"
}),
new Routes(
{
    From:"AAL",
    To:"OSL",
    Distance:352.331,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AAL",
    To:"PMI",
    Distance:2017.46,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AAL",
    To:"SVG",
    Distance:317.676,
    Airport:"DAT Danish Air Transport"
}),
new Routes(
{
    From:"AAN",
    To:"CCJ",
    Distance:2596.92,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"AAN",
    To:"PEW",
    Distance:1882.33,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"AAQ",
    To:"DME",
    Distance:1157.82,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"AAQ",
    To:"LED",
    Distance:1711.91,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"AAQ",
    To:"SVO",
    Distance:1219.88,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"AAR",
    To:"AAL",
    Distance:99.8986,
    Airport:"British Airways"
}),
new Routes(
{
    From:"AAR",
    To:"AGP",
    Distance:2457.74,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AAR",
    To:"BMA",
    Distance:550.235,
    Airport:"British Airways"
}),
new Routes(
{
    From:"AAR",
    To:"CPH",
    Distance:147.737,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AAR",
    To:"GOT",
    Distance:181.896,
    Airport:"British Airways"
}),
new Routes(
{
    From:"AAR",
    To:"OSL",
    Distance:433.894,
    Airport:"British Airways"
}),
new Routes(
{
    From:"AAR",
    To:"PMI",
    Distance:1949.69,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AAR",
    To:"STN",
    Distance:835.003,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AAT",
    To:"URC",
    Distance:443.077,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"AAT",
    To:"URC",
    Distance:443.077,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"AAX",
    To:"POJ",
    Distance:110.587,
    Airport:"Azul"
}),
new Routes(
{
    From:"AAY",
    To:"SAH",
    Distance:854.673,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"ABA",
    To:"DME",
    Distance:3366.3,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"ABA",
    To:"IKT",
    Distance:884.069,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"ABA",
    To:"NSK",
    Distance:1743.78,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"ABA",
    To:"SVO",
    Distance:3374.84,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ABD",
    To:"MHD",
    Distance:1243.77,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"ABD",
    To:"MHD",
    Distance:1243.77,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"ABD",
    To:"SYZ",
    Distance:430.216,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"ABD",
    To:"THR",
    Distance:657.464,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"ABD",
    To:"THR",
    Distance:657.464,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"ABD",
    To:"THR",
    Distance:657.464,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"ABE",
    To:"ATL",
    Distance:1113.75,
    Airport:"Air France"
}),
new Routes(
{
    From:"ABE",
    To:"ATL",
    Distance:1113.75,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ABE",
    To:"ATL",
    Distance:1113.75,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ABE",
    To:"CLT",
    Distance:773.278,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ABE",
    To:"CLT",
    Distance:773.278,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ABE",
    To:"DTW",
    Distance:681.798,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ABE",
    To:"MYR",
    Distance:834.409,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"ABE",
    To:"ORD",
    Distance:1050.39,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ABE",
    To:"PGD",
    Distance:1641.27,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"ABE",
    To:"PHL",
    Distance:88.3864,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ABE",
    To:"PHL",
    Distance:88.3864,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ABE",
    To:"PIE",
    Distance:1564.02,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"ABE",
    To:"SFB",
    Distance:1421.82,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"ABI",
    To:"DFW",
    Distance:253.333,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ABI",
    To:"DFW",
    Distance:253.333,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ABJ",
    To:"ACC",
    Distance:417.911,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ABJ",
    To:"ACC",
    Distance:417.911,
    Airport:"Emirates"
}),
new Routes(
{
    From:"ABJ",
    To:"ACC",
    Distance:417.911,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"ABJ",
    To:"ACC",
    Distance:417.911,
    Airport:"Kampuchea Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"ACC",
    Distance:417.911,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"ACC",
    Distance:417.911,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"ABJ",
    To:"ACC",
    Distance:417.911,
    Airport:"Starbow Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"ALG",
    Distance:3569.78,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ABJ",
    To:"BKO",
    Distance:921.402,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"ABJ",
    To:"BKO",
    Distance:921.402,
    Airport:"Mauritania Airlines International"
}),
new Routes(
{
    From:"ABJ",
    To:"BOY",
    Distance:657.411,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"ABJ",
    To:"BRU",
    Distance:5134.85,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ABJ",
    To:"BRU",
    Distance:5134.85,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"BRU",
    Distance:5134.85,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ABJ",
    To:"BRU",
    Distance:5134.85,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"CDG",
    Distance:4903.21,
    Airport:"Air France"
}),
new Routes(
{
    From:"ABJ",
    To:"CDG",
    Distance:4903.21,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ABJ",
    To:"CKY",
    Distance:1170.57,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"CKY",
    Distance:1170.57,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"ABJ",
    To:"CMN",
    Distance:3148.16,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"ABJ",
    To:"COO",
    Distance:708.648,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"COO",
    Distance:708.648,
    Airport:"Mauritania Airlines International"
}),
new Routes(
{
    From:"ABJ",
    To:"COO",
    Distance:708.648,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"DKR",
    Distance:1819.66,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"ABJ",
    To:"DKR",
    Distance:1819.66,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"ABJ",
    To:"DKR",
    Distance:1819.66,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"DLA",
    Distance:1518.76,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"ABJ",
    To:"FNA",
    Distance:1088.87,
    Airport:"Kampuchea Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"IST",
    Distance:5134.2,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"LBV",
    Distance:1574.24,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"ABJ",
    To:"LFW",
    Distance:581.961,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"LFW",
    Distance:581.961,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"LFW",
    Distance:581.961,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"ABJ",
    To:"LFW",
    Distance:581.961,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ABJ",
    To:"LFW",
    Distance:581.961,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"LOS",
    Distance:814.806,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ABJ",
    To:"LOS",
    Distance:814.806,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"ABJ",
    To:"LOS",
    Distance:814.806,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"LOS",
    Distance:814.806,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"NBO",
    Distance:4596.02,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"ABJ",
    To:"ORY",
    Distance:4869.43,
    Airport:"Corsairfly"
}),
new Routes(
{
    From:"ABJ",
    To:"OUA",
    Distance:831.929,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"ABJ",
    To:"OUA",
    Distance:831.929,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ABJ",
    To:"OUA",
    Distance:831.929,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"OUA",
    Distance:831.929,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"OUA",
    Distance:831.929,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"ABJ",
    To:"OUA",
    Distance:831.929,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ABJ",
    To:"OUA",
    Distance:831.929,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"ROB",
    Distance:720.205,
    Airport:"Kampuchea Airlines"
}),
new Routes(
{
    From:"ABJ",
    To:"TUN",
    Distance:3796.6,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"ABL",
    To:"OTZ",
    Distance:207.442,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"ABL",
    To:"OTZ",
    Distance:207.442,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ABL",
    To:"SHG",
    Distance:38.7475,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"ABL",
    To:"SHG",
    Distance:38.7475,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ABM",
    To:"CNS",
    Distance:749.616,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"ABQ",
    To:"ATL",
    Distance:2038.35,
    Airport:"Air France"
}),
new Routes(
{
    From:"ABQ",
    To:"ATL",
    Distance:2038.35,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ABQ",
    To:"ATL",
    Distance:2038.35,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ABQ",
    To:"ATL",
    Distance:2038.35,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"ATL",
    Distance:2038.35,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ABQ",
    To:"BWI",
    Distance:2682.06,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"CNM",
    Distance:370.684,
    Airport:"Pacific Wings"
}),
new Routes(
{
    From:"ABQ",
    To:"DAL",
    Distance:932.079,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"DEN",
    Distance:562.656,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ABQ",
    To:"DEN",
    Distance:562.656,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"DEN",
    Distance:562.656,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"DFW",
    Distance:913.83,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"DFW",
    Distance:913.83,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ABQ",
    To:"HOU",
    Distance:1220.63,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"IAH",
    Distance:1195.7,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"JFK",
    Distance:2931.46,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"ABQ",
    To:"LAM",
    Distance:98.2981,
    Airport:"Pacific Wings"
}),
new Routes(
{
    From:"ABQ",
    To:"LAS",
    Distance:781.121,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ABQ",
    To:"LAS",
    Distance:781.121,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"LAX",
    Distance:1087.56,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"LAX",
    Distance:1087.56,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"LAX",
    Distance:1087.56,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"LAX",
    Distance:1087.56,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ABQ",
    To:"LAX",
    Distance:1087.56,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"MCI",
    Distance:1154.2,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ABQ",
    To:"MCI",
    Distance:1154.2,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"MDW",
    Distance:1800.95,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ABQ",
    To:"MDW",
    Distance:1800.95,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"MSP",
    Distance:1577.04,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ABQ",
    To:"OAK",
    Distance:1427.2,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"ORD",
    Distance:1795.93,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"ORD",
    Distance:1795.93,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ABQ",
    To:"ORD",
    Distance:1795.93,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"PDX",
    Distance:1786.61,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ABQ",
    To:"PDX",
    Distance:1786.61,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"PHX",
    Distance:527.661,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"PHX",
    Distance:527.661,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"PHX",
    Distance:527.661,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ABQ",
    To:"SAN",
    Distance:1009.21,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"SEA",
    Distance:1897.33,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"SFO",
    Distance:1439.28,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ABQ",
    To:"SLC",
    Distance:793.568,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ABR",
    To:"MSP",
    Distance:412.451,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ABS",
    To:"ASW",
    Distance:215.522,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ABT",
    To:"DMM",
    Distance:1079.09,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"ABT",
    To:"JED",
    Distance:299.711,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"ABT",
    To:"RUH",
    Distance:733.902,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"ABV",
    To:"ACC",
    Distance:902.424,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ABV",
    To:"ADD",
    Distance:3462.46,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ABV",
    To:"BNI",
    Distance:350.805,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ABV",
    To:"CAI",
    Distance:3435.06,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ABV",
    To:"CBQ",
    Distance:463.889,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ABV",
    To:"CDG",
    Distance:4470.13,
    Airport:"Air France"
}),
new Routes(
{
    From:"ABV",
    To:"CDG",
    Distance:4470.13,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ABV",
    To:"CDG",
    Distance:4470.13,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ABV",
    To:"COO",
    Distance:613.017,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ABV",
    To:"ENU",
    Distance:283.521,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ABV",
    To:"FRA",
    Distance:4562.71,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ABV",
    To:"IBA",
    Distance:405.129,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ABV",
    To:"ILR",
    Distance:310.815,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ABV",
    To:"KAN",
    Distance:365.156,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ABV",
    To:"LFW",
    Distance:733.708,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ABV",
    To:"LHR",
    Distance:4774.96,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ABV",
    To:"LOS",
    Distance:511.417,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ABV",
    To:"NDJ",
    Distance:917.695,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ABV",
    To:"NIM",
    Distance:744.505,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ABV",
    To:"PHC",
    Distance:445.159,
    Airport:"Air France"
}),
new Routes(
{
    From:"ABV",
    To:"PHC",
    Distance:445.159,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ABV",
    To:"PHC",
    Distance:445.159,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ABV",
    To:"PHC",
    Distance:445.159,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ABV",
    To:"QOW",
    Distance:398.098,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ABV",
    To:"QRW",
    Distance:457.14,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ABV",
    To:"SKO",
    Distance:489.218,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ABV",
    To:"SSG",
    Distance:605.383,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ABV",
    To:"YOL",
    Distance:567.969,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ABX",
    To:"MEL",
    Distance:259.331,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"ABX",
    To:"SYD",
    Distance:450.843,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ABX",
    To:"SYD",
    Distance:450.843,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"ABX",
    To:"SYD",
    Distance:450.843,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ABY",
    To:"ATL",
    Distance:234.667,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ABY",
    To:"ATL",
    Distance:234.667,
    Airport:"Air France"
}),
new Routes(
{
    From:"ABY",
    To:"ATL",
    Distance:234.667,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ABY",
    To:"ATL",
    Distance:234.667,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ABZ",
    To:"AMS",
    Distance:703.275,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ABZ",
    To:"BGO",
    Distance:548.27,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ABZ",
    To:"BGO",
    Distance:548.27,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"ABZ",
    To:"BHD",
    Distance:367.318,
    Airport:"Flybe"
}),
new Routes(
{
    From:"ABZ",
    To:"BHX",
    Distance:528.745,
    Airport:"Flybe"
}),
new Routes(
{
    From:"ABZ",
    To:"BRS",
    Distance:647.953,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"ABZ",
    To:"CDG",
    Distance:963.588,
    Airport:"Air France"
}),
new Routes(
{
    From:"ABZ",
    To:"CDG",
    Distance:963.588,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ABZ",
    To:"CDG",
    Distance:963.588,
    Airport:"Flybe"
}),
new Routes(
{
    From:"ABZ",
    To:"CPH",
    Distance:928.629,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ABZ",
    To:"DUB",
    Distance:492.891,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ABZ",
    To:"EBJ",
    Distance:687.092,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"ABZ",
    To:"EMA",
    Distance:489.156,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"ABZ",
    To:"FRA",
    Distance:1064.59,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ABZ",
    To:"HUY",
    Distance:419.849,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"ABZ",
    To:"KOI",
    Distance:199.615,
    Airport:"Flybe"
}),
new Routes(
{
    From:"ABZ",
    To:"KSU",
    Distance:857.927,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"ABZ",
    To:"LBA",
    Distance:372.485,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"ABZ",
    To:"LCY",
    Distance:649.955,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ABZ",
    To:"LGW",
    Distance:685.645,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ABZ",
    To:"LHR",
    Distance:646.349,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ABZ",
    To:"LHR",
    Distance:646.349,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ABZ",
    To:"LHR",
    Distance:646.349,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ABZ",
    To:"LHR",
    Distance:646.349,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"ABZ",
    To:"LHR",
    Distance:646.349,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ABZ",
    To:"LSI",
    Distance:302.225,
    Airport:"Flybe"
}),
new Routes(
{
    From:"ABZ",
    To:"LTN",
    Distance:603.944,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ABZ",
    To:"MAN",
    Distance:427.928,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"ABZ",
    To:"MAN",
    Distance:427.928,
    Airport:"Flybe"
}),
new Routes(
{
    From:"ABZ",
    To:"MME",
    Distance:303.231,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"ABZ",
    To:"NCL",
    Distance:242.709,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"ABZ",
    To:"NWI",
    Distance:550.024,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"ABZ",
    To:"NWI",
    Distance:550.024,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"ABZ",
    To:"OSL",
    Distance:835.308,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"ABZ",
    To:"OSL",
    Distance:835.308,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ABZ",
    To:"RIX",
    Distance:1572.71,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"ABZ",
    To:"SVG",
    Distance:497.01,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"ABZ",
    To:"SVG",
    Distance:497.01,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ABZ",
    To:"SVG",
    Distance:497.01,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"ABZ",
    To:"SYY",
    Distance:270.106,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"ABZ",
    To:"WIC",
    Distance:149.475,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"ACA",
    To:"IAH",
    Distance:1537.77,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ACA",
    To:"MEX",
    Distance:306.509,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ACA",
    To:"MEX",
    Distance:306.509,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"ACA",
    To:"MEX",
    Distance:306.509,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"ACA",
    To:"MTY",
    Distance:1003.8,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"ACA",
    To:"TIJ",
    Distance:2464.2,
    Airport:"Volaris"
}),
new Routes(
{
    From:"ACA",
    To:"TLC",
    Distance:287.571,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ACA",
    To:"TLC",
    Distance:287.571,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"ACC",
    To:"ABJ",
    Distance:417.911,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ACC",
    To:"ABJ",
    Distance:417.911,
    Airport:"Emirates"
}),
new Routes(
{
    From:"ACC",
    To:"ABJ",
    Distance:417.911,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"ACC",
    To:"ABJ",
    Distance:417.911,
    Airport:"Kampuchea Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"ABJ",
    Distance:417.911,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"ABJ",
    Distance:417.911,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"ACC",
    To:"ABJ",
    Distance:417.911,
    Airport:"Starbow Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"ABJ",
    Distance:417.911,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"ABV",
    Distance:902.424,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ACC",
    To:"ADD",
    Distance:4312.08,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"AMS",
    Distance:5212.87,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"BEY",
    Distance:4829.52,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"CAI",
    Distance:4282.92,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ACC",
    To:"CMN",
    Distance:3180.99,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"ACC",
    To:"COO",
    Distance:294.259,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"ACC",
    To:"DKR",
    Distance:2148.78,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ACC",
    To:"DKR",
    Distance:2148.78,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"DKR",
    Distance:2148.78,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"ACC",
    To:"DXB",
    Distance:6288.97,
    Airport:"Emirates"
}),
new Routes(
{
    From:"ACC",
    To:"FCO",
    Distance:4208.8,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ACC",
    To:"FNA",
    Distance:1475.85,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"FNA",
    Distance:1475.85,
    Airport:"Kampuchea Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"FNA",
    Distance:1475.85,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"ACC",
    To:"FRA",
    Distance:5006.17,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ACC",
    To:"IST",
    Distance:4874.34,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"JFK",
    Distance:8221.49,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ACC",
    To:"JNB",
    Distance:4673.63,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"ACC",
    To:"KMS",
    Distance:200.002,
    Airport:"Asian Wings Airways"
}),
new Routes(
{
    From:"ACC",
    To:"KMS",
    Distance:200.002,
    Airport:"Skyservice Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"KMS",
    Distance:200.002,
    Airport:"Starbow Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"LFW",
    Distance:169.108,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"LHR",
    Distance:5100.84,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"LHR",
    Distance:5100.84,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ACC",
    To:"LIS",
    Distance:3798.04,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"ACC",
    To:"LOS",
    Distance:400.511,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ACC",
    To:"LOS",
    Distance:400.511,
    Airport:"Asian Wings Airways"
}),
new Routes(
{
    From:"ACC",
    To:"LOS",
    Distance:400.511,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"LOS",
    Distance:400.511,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"ACC",
    To:"MAD",
    Distance:3894.22,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"MLW",
    Distance:1173.87,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"NBO",
    Distance:4190.51,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"ACC",
    To:"OUA",
    Distance:764.743,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"ACC",
    To:"ROB",
    Distance:1129.79,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"ACC",
    To:"ROB",
    Distance:1129.79,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"ROB",
    Distance:1129.79,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ACC",
    To:"ROB",
    Distance:1129.79,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"ACC",
    To:"TKD",
    Distance:194.726,
    Airport:"Starbow Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"TML",
    Distance:446.094,
    Airport:"Asian Wings Airways"
}),
new Routes(
{
    From:"ACC",
    To:"TML",
    Distance:446.094,
    Airport:"Starbow Airlines"
}),
new Routes(
{
    From:"ACC",
    To:"WDH",
    Distance:3665.48,
    Airport:"Air Namibia"
}),
new Routes(
{
    From:"ACE",
    To:"AMS",
    Distance:3005.89,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"ACE",
    To:"BCN",
    Distance:1974.13,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ACE",
    To:"BCN",
    Distance:1974.13,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ACE",
    To:"BCN",
    Distance:1974.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"BFS",
    Distance:2920.18,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"ACE",
    To:"BFS",
    Distance:2920.18,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"ACE",
    To:"BGY",
    Distance:2757.69,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"BHX",
    Distance:2790.18,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"ACE",
    To:"BHX",
    Distance:2790.18,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"ACE",
    To:"BHX",
    Distance:2790.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"BHX",
    Distance:2790.18,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"ACE",
    To:"BHX",
    Distance:2790.18,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"ACE",
    To:"BHX",
    Distance:2790.18,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ACE",
    To:"BIO",
    Distance:1859.37,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"ACE",
    To:"BIO",
    Distance:1859.37,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ACE",
    To:"BIO",
    Distance:1859.37,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ACE",
    To:"BLK",
    Distance:2891,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"ACE",
    To:"BLQ",
    Distance:2795.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"BOH",
    Distance:2619.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"BRE",
    Distance:3243.85,
    Airport:"Germania"
}),
new Routes(
{
    From:"ACE",
    To:"BRS",
    Distance:2654.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"BRS",
    Distance:2654.16,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"ACE",
    To:"BVA",
    Distance:2640.33,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"CGN",
    Distance:2989.91,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ACE",
    To:"CRL",
    Distance:2831.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"DUB",
    Distance:2786.49,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ACE",
    To:"DUB",
    Distance:2786.49,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"DUS",
    Distance:3006.73,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ACE",
    To:"DUS",
    Distance:3006.73,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"ACE",
    To:"EDI",
    Distance:3110.34,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"EIN",
    Distance:2957.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"EMA",
    Distance:2840.22,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"ACE",
    To:"EMA",
    Distance:2840.22,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"ACE",
    To:"EMA",
    Distance:2840.22,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"EMA",
    Distance:2840.22,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"ACE",
    To:"EMA",
    Distance:2840.22,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"ACE",
    To:"EMA",
    Distance:2840.22,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ACE",
    To:"FKB",
    Distance:2875.41,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"FRA",
    Distance:2994.06,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"ACE",
    To:"FRA",
    Distance:2994.06,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"ACE",
    To:"FUE",
    Distance:60.315,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ACE",
    To:"FUE",
    Distance:60.315,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"ACE",
    To:"FUE",
    Distance:60.315,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"ACE",
    To:"FUE",
    Distance:60.315,
    Airport:"Luxair"
}),
new Routes(
{
    From:"ACE",
    To:"FUE",
    Distance:60.315,
    Airport:"Niki"
}),
new Routes(
{
    From:"ACE",
    To:"GLA",
    Distance:3081.23,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"ACE",
    To:"GLA",
    Distance:3081.23,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"ACE",
    To:"GLA",
    Distance:3081.23,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"ACE",
    To:"GLA",
    Distance:3081.23,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"ACE",
    To:"GLA",
    Distance:3081.23,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ACE",
    To:"HAJ",
    Distance:3239.29,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"ACE",
    To:"HAJ",
    Distance:3239.29,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"ACE",
    To:"HAM",
    Distance:3345.83,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ACE",
    To:"HAM",
    Distance:3345.83,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"ACE",
    To:"HHN",
    Distance:2922.51,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"LBA",
    Distance:2935.41,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"ACE",
    To:"LBA",
    Distance:2935.41,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"ACE",
    To:"LBA",
    Distance:2935.41,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"LEJ",
    Distance:3292.72,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ACE",
    To:"LEJ",
    Distance:3292.72,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"ACE",
    To:"LGW",
    Distance:2710.19,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"ACE",
    To:"LGW",
    Distance:2710.19,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ACE",
    To:"LGW",
    Distance:2710.19,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"ACE",
    To:"LGW",
    Distance:2710.19,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ACE",
    To:"LGW",
    Distance:2710.19,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ACE",
    To:"LGW",
    Distance:2710.19,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"ACE",
    To:"LGW",
    Distance:2710.19,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"ACE",
    To:"LGW",
    Distance:2710.19,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ACE",
    To:"LGW",
    Distance:2710.19,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ACE",
    To:"LPA",
    Distance:207.455,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"ACE",
    To:"LPA",
    Distance:207.455,
    Airport:"Tropic Air"
}),
new Routes(
{
    From:"ACE",
    To:"LPL",
    Distance:2850.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"LPL",
    Distance:2850.18,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ACE",
    To:"LTN",
    Distance:2774.97,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"ACE",
    To:"LTN",
    Distance:2774.97,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"LTN",
    Distance:2774.97,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ACE",
    To:"LUX",
    Distance:2844.23,
    Airport:"Luxair"
}),
new Routes(
{
    From:"ACE",
    To:"MAD",
    Distance:1575.75,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"ACE",
    To:"MAD",
    Distance:1575.75,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ACE",
    To:"MAD",
    Distance:1575.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"MAN",
    Distance:2866.99,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"ACE",
    To:"MAN",
    Distance:2866.99,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"ACE",
    To:"MAN",
    Distance:2866.99,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"ACE",
    To:"MAN",
    Distance:2866.99,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"MAN",
    Distance:2866.99,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"ACE",
    To:"MAN",
    Distance:2866.99,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"ACE",
    To:"MAN",
    Distance:2866.99,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ACE",
    To:"MUC",
    Distance:3058.01,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ACE",
    To:"MUC",
    Distance:3058.01,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"ACE",
    To:"NCL",
    Distance:3054.04,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"ACE",
    To:"NCL",
    Distance:3054.04,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"ACE",
    To:"NCL",
    Distance:3054.04,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"ACE",
    To:"NCL",
    Distance:3054.04,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ACE",
    To:"NOC",
    Distance:2802.98,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"NRN",
    Distance:3004.24,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"ORK",
    Distance:2580.91,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ACE",
    To:"ORK",
    Distance:2580.91,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"OVD",
    Distance:1759.59,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"ACE",
    To:"PAD",
    Distance:3121,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"ACE",
    To:"PIK",
    Distance:3039.89,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"SCQ",
    Distance:1619.26,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"ACE",
    To:"SCQ",
    Distance:1619.26,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"SDR",
    Distance:1831.07,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"SNN",
    Distance:2669.43,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"STN",
    Distance:2796.01,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"STN",
    Distance:2796.01,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"ACE",
    To:"STN",
    Distance:2796.01,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ACE",
    To:"STR",
    Distance:2931.91,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"ACE",
    To:"STR",
    Distance:2931.91,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"ACE",
    To:"SVQ",
    Distance:1183.34,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"SXF",
    Distance:3427.38,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"ACE",
    To:"TFN",
    Distance:271.758,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"ACE",
    To:"TXL",
    Distance:3427.66,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ACE",
    To:"ZAZ",
    Distance:1812.56,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ACE",
    To:"ZRH",
    Distance:2806.4,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ACE",
    To:"ZRH",
    Distance:2806.4,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ACH",
    To:"EBA",
    Distance:528.054,
    Airport:"Intersky"
}),
new Routes(
{
    From:"ACH",
    To:"VIE",
    Distance:527.942,
    Airport:"Air Europe"
}),
new Routes(
{
    From:"ACI",
    To:"GCI",
    Distance:41.0959,
    Airport:"Aurigny Air Services"
}),
new Routes(
{
    From:"ACI",
    To:"SOU",
    Distance:151.152,
    Airport:"Aurigny Air Services"
}),
new Routes(
{
    From:"ACK",
    To:"BOS",
    Distance:146.299,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"ACK",
    To:"EWB",
    Distance:88.2934,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"ACK",
    To:"HPN",
    Distance:306.022,
    Airport:"T.J. Air"
}),
new Routes(
{
    From:"ACK",
    To:"HYA",
    Distance:49.792,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"ACK",
    To:"MVY",
    Distance:48.8503,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"ACK",
    To:"TEB",
    Distance:338.419,
    Airport:"T.J. Air"
}),
new Routes(
{
    From:"ACR",
    To:"LCR",
    Distance:69.5753,
    Airport:"SATENA"
}),
new Routes(
{
    From:"ACR",
    To:"SVI",
    Distance:401.151,
    Airport:"SATENA"
}),
new Routes(
{
    From:"ACT",
    To:"DFW",
    Distance:144.087,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ACT",
    To:"DFW",
    Distance:144.087,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ACU",
    To:"PAC",
    Distance:174.824,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"ACV",
    To:"CEC",
    Distance:89.8292,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ACV",
    To:"SFO",
    Distance:402.185,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ACV",
    To:"SMF",
    Distance:332.598,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ACX",
    To:"CAN",
    Distance:866.207,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ACX",
    To:"CKG",
    Distance:541.058,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"ACX",
    To:"KWE",
    Distance:244.951,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"ACX",
    To:"NAY",
    Distance:1950.67,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"ACX",
    To:"NAY",
    Distance:1950.67,
    Airport:"China United"
}),
new Routes(
{
    From:"ACX",
    To:"PVG",
    Distance:1781.57,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"ACY",
    To:"BOS",
    Distance:441.014,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ACY",
    To:"DTW",
    Distance:798.865,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ACY",
    To:"FLL",
    Distance:1576.11,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ACY",
    To:"IAH",
    Distance:2162.89,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ACY",
    To:"MCO",
    Distance:1373.47,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ACY",
    To:"MYR",
    Distance:750.596,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ACY",
    To:"ORD",
    Distance:1156.35,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ACY",
    To:"ORD",
    Distance:1156.35,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ACY",
    To:"RSW",
    Distance:1583.67,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ACY",
    To:"TPA",
    Distance:1472.1,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ADA",
    To:"ADB",
    Distance:729.729,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADA",
    To:"ADB",
    Distance:729.729,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADA",
    To:"AYT",
    Distance:398.219,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADA",
    To:"AYT",
    Distance:398.219,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADA",
    To:"EBL",
    Distance:779.137,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"ADA",
    To:"EBL",
    Distance:779.137,
    Airport:"Zoom Airlines"
}),
new Routes(
{
    From:"ADA",
    To:"ECN",
    Distance:258.854,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"ADA",
    To:"ECN",
    Distance:258.854,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADA",
    To:"ESB",
    Distance:402.276,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ADA",
    To:"IST",
    Distance:713.564,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"ADA",
    To:"IST",
    Distance:713.564,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"ADA",
    To:"IST",
    Distance:713.564,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ADA",
    To:"JED",
    Distance:1742.09,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"ADA",
    To:"SAW",
    Distance:675.236,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADA",
    To:"SAW",
    Distance:675.236,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ADA",
    To:"TZX",
    Distance:592.275,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADA",
    To:"VAN",
    Distance:726.923,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"ADA",
    Distance:729.729,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"ADA",
    Distance:729.729,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"AMS",
    Distance:2326.89,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"AMS",
    Distance:2326.89,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"AMS",
    Distance:2326.89,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"ADB",
    To:"ARN",
    Distance:2463.48,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"ASR",
    Distance:727.006,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"ASR",
    Distance:727.006,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"ATH",
    Distance:283.807,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"AYT",
    Distance:356.418,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"AYT",
    Distance:356.418,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"BHX",
    Distance:2723.29,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ADB",
    To:"BRE",
    Distance:2161.85,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"BRU",
    Distance:2261.97,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"BSL",
    Distance:1894.65,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"BSL",
    Distance:1894.65,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"CDG",
    Distance:2295.36,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"ADB",
    To:"CDG",
    Distance:2295.36,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"CGN",
    Distance:2101.26,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"CPH",
    Distance:2208.64,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"DIY",
    Distance:1141.42,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"DIY",
    Distance:1141.42,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"DTM",
    Distance:2116.3,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"DUB",
    Distance:3044.53,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ADB",
    To:"DUS",
    Distance:2149.42,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"DUS",
    Distance:2149.42,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"ECN",
    Distance:663.781,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"ADB",
    To:"ECN",
    Distance:663.781,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"ESB",
    Distance:542.696,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"ESB",
    Distance:542.696,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"EZS",
    Distance:1056.51,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"FRA",
    Distance:1966.77,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"GNY",
    Distance:1034.31,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"GZT",
    Distance:920.801,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"GZT",
    Distance:920.801,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"HAJ",
    Distance:2073.25,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"HAM",
    Distance:2149.1,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"HAM",
    Distance:2149.1,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"HEL",
    Distance:2453.88,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"HTY",
    Distance:834.495,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"IST",
    Distance:330.521,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"ADB",
    To:"IST",
    Distance:330.521,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"ADB",
    To:"IST",
    Distance:330.521,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"IST",
    Distance:330.521,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"LGW",
    Distance:2567.2,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ADB",
    To:"LGW",
    Distance:2567.2,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ADB",
    To:"LUX",
    Distance:2085.45,
    Airport:"Luxair"
}),
new Routes(
{
    From:"ADB",
    To:"LYS",
    Distance:1993.14,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"MAN",
    Distance:2796.7,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ADB",
    To:"MQM",
    Distance:1189.46,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"MUC",
    Distance:1666.96,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ADB",
    To:"MUC",
    Distance:1666.96,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"NTE",
    Distance:2529.85,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"SAW",
    Distance:343.464,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"SAW",
    Distance:343.464,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"SAW",
    Distance:343.464,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"STN",
    Distance:2574,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"STR",
    Distance:1844.05,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"STR",
    Distance:1844.05,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"SXB",
    Distance:1936.53,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"TXL",
    Distance:1913.26,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"TZX",
    Distance:1121.47,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"TZX",
    Distance:1121.47,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"VAS",
    Distance:857.979,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ADB",
    To:"VIE",
    Distance:1385.88,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADB",
    To:"ZRH",
    Distance:1819.93,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ADD",
    To:"ABV",
    Distance:3462.46,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"ACC",
    Distance:4312.08,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"AMH",
    Distance:352.873,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"ASO",
    Distance:476.309,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"AXU",
    Distance:574.758,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"BAH",
    Distance:2292.22,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"ADD",
    To:"BEY",
    Distance:2783.12,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"BJR",
    Distance:334.164,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"BKK",
    Distance:6757.86,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"BKK",
    Distance:6757.86,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"BKO",
    Distance:5116.06,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"BKO",
    Distance:5116.06,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"ADD",
    To:"BOM",
    Distance:3834.7,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"ADD",
    To:"BOM",
    Distance:3834.7,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"CAI",
    Distance:2473.55,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ADD",
    To:"CAI",
    Distance:2473.55,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"CAN",
    Distance:8038.05,
    Airport:"Air China"
}),
new Routes(
{
    From:"ADD",
    To:"CAN",
    Distance:8038.05,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"CAN",
    Distance:8038.05,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"CDG",
    Distance:5580.73,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"COO",
    Distance:4021.9,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"DAR",
    Distance:1763.67,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"DAR",
    Distance:1763.67,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ADD",
    To:"DEL",
    Distance:4552.46,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"ADD",
    To:"DEL",
    Distance:4552.46,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"DIR",
    Distance:342.847,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"DLA",
    Distance:3258.53,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"DLA",
    Distance:3258.53,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"DMM",
    Distance:2264.18,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"DOH",
    Distance:2258.77,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ADD",
    To:"DXB",
    Distance:2518.96,
    Airport:"Emirates"
}),
new Routes(
{
    From:"ADD",
    To:"DXB",
    Distance:2518.96,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"DXB",
    Distance:2518.96,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"ADD",
    To:"EBB",
    Distance:1217.61,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"EBB",
    Distance:1217.61,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ADD",
    To:"ENU",
    Distance:3452.06,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"FBM",
    Distance:2604.51,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"FCO",
    Distance:4481.06,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"FIH",
    Distance:2985.03,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"FRA",
    Distance:5349.49,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"FRA",
    Distance:5349.49,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ADD",
    To:"GDQ",
    Distance:421.139,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"GMB",
    Distance:475.27,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"HGA",
    Distance:583.607,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"HKG",
    Distance:8106.55,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"HRE",
    Distance:3109.58,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"HRE",
    Distance:3109.58,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ADD",
    To:"HRE",
    Distance:3109.58,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ADD",
    To:"HRE",
    Distance:3109.58,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"IST",
    Distance:3691.69,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"JED",
    Distance:1412.88,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ADD",
    To:"JED",
    Distance:1412.88,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"JED",
    Distance:1412.88,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ADD",
    To:"JED",
    Distance:1412.88,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"JED",
    Distance:1412.88,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ADD",
    To:"JED",
    Distance:1412.88,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"JIB",
    Distance:556.026,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ADD",
    To:"JIB",
    Distance:556.026,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"JIB",
    Distance:556.026,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"JIB",
    Distance:556.026,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"ADD",
    To:"JIJ",
    Distance:439.85,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"JIM",
    Distance:262.413,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"JNB",
    Distance:4068,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"JNB",
    Distance:4068,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"ADD",
    To:"JRO",
    Distance:1392.81,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"JUB",
    Distance:916.231,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"JUB",
    Distance:916.231,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"KGL",
    Distance:1550,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ADD",
    To:"KGL",
    Distance:1550,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"KRT",
    Distance:1000.22,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"KRT",
    Distance:1000.22,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"ADD",
    To:"KWI",
    Distance:2446.29,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"KWI",
    Distance:2446.29,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"ADD",
    To:"LAD",
    Distance:3456.99,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ADD",
    To:"LAD",
    Distance:3456.99,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"LBV",
    Distance:3388.4,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"LFW",
    Distance:4148.41,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"LHR",
    Distance:5920.39,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"LLW",
    Distance:2591.47,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"LOS",
    Distance:3916.32,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"LUN",
    Distance:2933.56,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"MBA",
    Distance:1449.63,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"MBA",
    Distance:1449.63,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ADD",
    To:"MCT",
    Distance:2633.14,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"MCT",
    Distance:2633.14,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"ADD",
    To:"MPM",
    Distance:3938.55,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"MQX",
    Distance:505.585,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"NBO",
    Distance:1163.61,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"NBO",
    Distance:1163.61,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"NBO",
    Distance:1163.61,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"NBO",
    Distance:1163.61,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"ADD",
    To:"NDJ",
    Distance:2620.46,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"NIM",
    Distance:4020.99,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"OUA",
    Distance:4417.02,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"PEK",
    Distance:8329.32,
    Airport:"Air China"
}),
new Routes(
{
    From:"ADD",
    To:"PEK",
    Distance:8329.32,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"PNR",
    Distance:3354.46,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"PVG",
    Distance:8830.84,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"RUH",
    Distance:1963.96,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"RUH",
    Distance:1963.96,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"SAH",
    Distance:932.027,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"ADD",
    To:"SSG",
    Distance:3373.96,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"SSG",
    Distance:3373.96,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ADD",
    To:"TLV",
    Distance:2592.81,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADE",
    To:"AHB",
    Distance:653.082,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"ADE",
    To:"AMM",
    Distance:2294.71,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"ADE",
    To:"AMM",
    Distance:2294.71,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"ADE",
    To:"ASM",
    Distance:714.393,
    Airport:"Nasair"
}),
new Routes(
{
    From:"ADE",
    To:"AUH",
    Distance:1639.43,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"ADE",
    To:"BOM",
    Distance:3052.55,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"ADE",
    To:"CAI",
    Distance:2379.28,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"ADE",
    To:"DMM",
    Distance:1596.46,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"ADE",
    To:"DMM",
    Distance:1596.46,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"ADE",
    To:"DOH",
    Distance:1542.81,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"ADE",
    To:"DXB",
    Distance:1755.53,
    Airport:"Nasair"
}),
new Routes(
{
    From:"ADE",
    To:"DXB",
    Distance:1755.53,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"ADE",
    To:"GXF",
    Distance:534.359,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"ADE",
    To:"IST",
    Distance:3504.87,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ADE",
    To:"JED",
    Distance:1164.57,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"ADE",
    To:"JED",
    Distance:1164.57,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"ADE",
    To:"MGQ",
    Distance:1202.97,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"ADE",
    To:"RIY",
    Distance:511.752,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"ADE",
    To:"RUH",
    Distance:1359.92,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"ADE",
    To:"SAH",
    Distance:306.955,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"ADE",
    To:"SAH",
    Distance:306.955,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"ADE",
    To:"SHJ",
    Distance:1771.87,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"ADF",
    To:"ESB",
    Distance:543.183,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ADF",
    To:"IST",
    Distance:904.467,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ADK",
    To:"ANC",
    Distance:1913.26,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ADL",
    To:"AKL",
    Distance:3251.35,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"ADL",
    To:"AKL",
    Distance:3251.35,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"ADL",
    To:"AKL",
    Distance:3251.35,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ADL",
    To:"AKL",
    Distance:3251.35,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ADL",
    To:"ASP",
    Distance:1316.74,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ADL",
    To:"BHQ",
    Distance:426.058,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"ADL",
    To:"BNE",
    Distance:1620.02,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ADL",
    To:"BNE",
    Distance:1620.02,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"ADL",
    To:"BNE",
    Distance:1620.02,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ADL",
    To:"BNE",
    Distance:1620.02,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"ADL",
    To:"BNE",
    Distance:1620.02,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ADL",
    To:"CBR",
    Distance:970.246,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ADL",
    To:"CBR",
    Distance:970.246,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ADL",
    To:"CED",
    Distance:545.366,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"ADL",
    To:"CNS",
    Distance:2132.36,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"ADL",
    To:"CPD",
    Distance:748.292,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"ADL",
    To:"DPS",
    Distance:3759.86,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"ADL",
    To:"DPS",
    Distance:3759.86,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ADL",
    To:"DRW",
    Distance:2622.1,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"ADL",
    To:"DRW",
    Distance:2622.1,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ADL",
    To:"DXB",
    Distance:11006.4,
    Airport:"Emirates"
}),
new Routes(
{
    From:"ADL",
    To:"DXB",
    Distance:11006.4,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ADL",
    To:"HKG",
    Distance:6875.84,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"ADL",
    To:"KGC",
    Distance:125.262,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"ADL",
    To:"KGI",
    Distance:1657.35,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ADL",
    To:"KUL",
    Distance:5681.81,
    Airport:"AirAsia X"
}),
new Routes(
{
    From:"ADL",
    To:"KUL",
    Distance:5681.81,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"ADL",
    To:"MEL",
    Distance:641.662,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"ADL",
    To:"MEL",
    Distance:641.662,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ADL",
    To:"MEL",
    Distance:641.662,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"ADL",
    To:"MEL",
    Distance:641.662,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ADL",
    To:"MGB",
    Distance:371.112,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"ADL",
    To:"MQL",
    Distance:335.045,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"ADL",
    To:"OLP",
    Distance:519.471,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ADL",
    To:"OOL",
    Distance:1604.2,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"ADL",
    To:"OOL",
    Distance:1604.2,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ADL",
    To:"PER",
    Distance:2115.41,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"ADL",
    To:"PER",
    Distance:2115.41,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ADL",
    To:"PER",
    Distance:2115.41,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ADL",
    To:"PLO",
    Distance:245.01,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ADL",
    To:"PLO",
    Distance:245.01,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"ADL",
    To:"PUG",
    Distance:281.351,
    Airport:"Sharp Airlines"
}),
new Routes(
{
    From:"ADL",
    To:"SIN",
    Distance:5401.96,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ADL",
    To:"SIN",
    Distance:5401.96,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"ADL",
    To:"SIN",
    Distance:5401.96,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ADL",
    To:"SYD",
    Distance:1164.2,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ADL",
    To:"SYD",
    Distance:1164.2,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"ADL",
    To:"SYD",
    Distance:1164.2,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ADL",
    To:"SYD",
    Distance:1164.2,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"ADL",
    To:"SYD",
    Distance:1164.2,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ADL",
    To:"WYA",
    Distance:229.704,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"ADQ",
    To:"AKK",
    Distance:135.657,
    Airport:"Astair"
}),
new Routes(
{
    From:"ADQ",
    To:"ANC",
    Distance:406.006,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ADQ",
    To:"ANC",
    Distance:406.006,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ADQ",
    To:"AOS",
    Distance:84.5832,
    Airport:"Air Salone"
}),
new Routes(
{
    From:"ADQ",
    To:"KKB",
    Distance:49.5584,
    Airport:"Air Salone"
}),
new Routes(
{
    From:"ADQ",
    To:"KLN",
    Distance:91.4224,
    Airport:"Air Salone"
}),
new Routes(
{
    From:"ADQ",
    To:"KOZ",
    Distance:19.2306,
    Airport:"Air Salone"
}),
new Routes(
{
    From:"ADQ",
    To:"KOZ",
    Distance:19.2306,
    Airport:"Astair"
}),
new Routes(
{
    From:"ADQ",
    To:"OLH",
    Distance:75.1576,
    Airport:"Air Salone"
}),
new Routes(
{
    From:"ADQ",
    To:"OLH",
    Distance:75.1576,
    Airport:"Astair"
}),
new Routes(
{
    From:"ADQ",
    To:"ORI",
    Distance:25.7216,
    Airport:"Astair"
}),
new Routes(
{
    From:"ADU",
    To:"MHD",
    Distance:1018.76,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"ADU",
    To:"THR",
    Distance:389.514,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"ADU",
    To:"THR",
    Distance:389.514,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"ADZ",
    To:"BAQ",
    Distance:777.62,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"ADZ",
    To:"BOG",
    Distance:1207.66,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"ADZ",
    To:"BOG",
    Distance:1207.66,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"ADZ",
    To:"BOG",
    Distance:1207.66,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"ADZ",
    To:"CLO",
    Distance:1163.64,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"ADZ",
    To:"CLO",
    Distance:1163.64,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"ADZ",
    To:"CTG",
    Distance:716.031,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"ADZ",
    To:"MDE",
    Distance:992.383,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"ADZ",
    To:"PEI",
    Distance:1084.79,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"ADZ",
    To:"PTY",
    Distance:465.973,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"ADZ",
    To:"PVA",
    Distance:94.1098,
    Airport:"SATENA"
}),
new Routes(
{
    From:"AEB",
    To:"CAN",
    Distance:647.077,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"AEB",
    To:"CKG",
    Distance:667.83,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"AEB",
    To:"KWL",
    Distance:353.349,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"AEP",
    To:"AFA",
    Distance:914.131,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"ASU",
    Distance:1039.84,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"BHI",
    Distance:571.477,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"BHI",
    Distance:571.477,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AEP",
    To:"BRC",
    Distance:1335.26,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"BRC",
    Distance:1335.26,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AEP",
    To:"COR",
    Distance:649.124,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"COR",
    Distance:649.124,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AEP",
    To:"CPC",
    Distance:1279.56,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"CRD",
    Distance:1463.91,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"CRD",
    Distance:1463.91,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AEP",
    To:"CTC",
    Distance:960.123,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"CWB",
    Distance:1340.01,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"EQS",
    Distance:1439.3,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"FLN",
    Distance:1210.99,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"FMA",
    Distance:928.257,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"FTE",
    Distance:2068.5,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"GIG",
    Distance:1969.77,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"GRU",
    Distance:1694.53,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"GRU",
    Distance:1694.53,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"AEP",
    To:"GRU",
    Distance:1694.53,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"AEP",
    To:"IGR",
    Distance:1051.36,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"IGR",
    Distance:1051.36,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AEP",
    To:"IRJ",
    Distance:977.294,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"JUJ",
    Distance:1301.56,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"LUQ",
    Distance:746.351,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"MDQ",
    Distance:382.802,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"MDQ",
    Distance:382.802,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"AEP",
    To:"MDZ",
    Distance:978.588,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"MDZ",
    Distance:978.588,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AEP",
    To:"MVD",
    Distance:220.212,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"MVD",
    Distance:220.212,
    Airport:"BQB Lineas Aereas"
}),
new Routes(
{
    From:"AEP",
    To:"NQN",
    Distance:994.799,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"NQN",
    Distance:994.799,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AEP",
    To:"PDP",
    Distance:305.368,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"PDP",
    Distance:305.368,
    Airport:"BQB Lineas Aereas"
}),
new Routes(
{
    From:"AEP",
    To:"PMY",
    Distance:1080.13,
    Airport:"Omni Air International"
}),
new Routes(
{
    From:"AEP",
    To:"POA",
    Distance:848.965,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"PRA",
    Distance:362.486,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"PRA",
    Distance:362.486,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"AEP",
    To:"PSS",
    Distance:830.909,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"REL",
    Distance:1129.29,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"RES",
    Distance:792.853,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"RGA",
    Distance:2258.39,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"RGL",
    Distance:2086.91,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"RGL",
    Distance:2086.91,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AEP",
    To:"RHD",
    Distance:999.653,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"ROS",
    Distance:286.162,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"ROS",
    Distance:286.162,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"AEP",
    To:"RSA",
    Distance:575.892,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"SCL",
    Distance:1147.28,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"SCL",
    Distance:1147.28,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AEP",
    To:"SDE",
    Distance:940.405,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"SFN",
    Distance:387.303,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"SFN",
    Distance:387.303,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"AEP",
    To:"SLA",
    Distance:1275.97,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"SLA",
    Distance:1275.97,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AEP",
    To:"SLA",
    Distance:1275.97,
    Airport:"Omni Air International"
}),
new Routes(
{
    From:"AEP",
    To:"TUC",
    Distance:1069.69,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"TUC",
    Distance:1069.69,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AEP",
    To:"UAQ",
    Distance:988.985,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"UAQ",
    Distance:988.985,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AEP",
    To:"USH",
    Distance:2381.38,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AEP",
    To:"USH",
    Distance:2381.38,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AEP",
    To:"VDM",
    Distance:808.986,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AER",
    To:"DME",
    Distance:1337.83,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"AER",
    To:"DME",
    Distance:1337.83,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"AER",
    To:"DME",
    Distance:1337.83,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"AER",
    To:"DME",
    Distance:1337.83,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"AER",
    To:"DYU",
    Distance:2470.16,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"AER",
    To:"EVN",
    Distance:519.737,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"AER",
    To:"EVN",
    Distance:519.737,
    Airport:"Air Armenia"
}),
new Routes(
{
    From:"AER",
    To:"IST",
    Distance:957.066,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"AER",
    To:"IST",
    Distance:957.066,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AER",
    To:"KIV",
    Distance:945.535,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"AER",
    To:"KJA",
    Distance:3913.13,
    Airport:"NordStar Airlines"
}),
new Routes(
{
    From:"AER",
    To:"KRR",
    Distance:187.009,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"AER",
    To:"KRR",
    Distance:187.009,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"AER",
    To:"KZN",
    Distance:1506.82,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"AER",
    To:"LBD",
    Distance:2476.5,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"AER",
    To:"LBD",
    Distance:2476.5,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"AER",
    To:"LED",
    Distance:1932.59,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"AER",
    To:"MSQ",
    Distance:1449.43,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"AER",
    To:"OMS",
    Distance:2704.82,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"AER",
    To:"SVO",
    Distance:1404.16,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"AER",
    To:"SVX",
    Distance:2080.64,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"AER",
    To:"SVX",
    Distance:2080.64,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"AER",
    To:"TAS",
    Distance:2409.44,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"AER",
    To:"TAS",
    Distance:2409.44,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"AER",
    To:"TZX",
    Distance:273.309,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"AER",
    To:"VKO",
    Distance:1363.76,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"AES",
    To:"ALC",
    Distance:2737.28,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AES",
    To:"AMS",
    Distance:1142.72,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AES",
    To:"AMS",
    Distance:1142.72,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AES",
    To:"BGO",
    Distance:256.496,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AES",
    To:"BGO",
    Distance:256.496,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"AES",
    To:"CPH",
    Distance:856.75,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AES",
    To:"GDN",
    Distance:1155.35,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"AES",
    To:"LGW",
    Distance:1324.03,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AES",
    To:"OSL",
    Distance:373.835,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AES",
    To:"OSL",
    Distance:373.835,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AES",
    To:"RIX",
    Distance:1174.91,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"AES",
    To:"TRD",
    Distance:262.551,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AES",
    To:"VNO",
    Distance:1408.88,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"AET",
    To:"BTT",
    Distance:62.6573,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"AET",
    To:"FAI",
    Distance:291.266,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"AET",
    To:"HUS",
    Distance:92.956,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"AEX",
    To:"ATL",
    Distance:803.648,
    Airport:"Air France"
}),
new Routes(
{
    From:"AEX",
    To:"ATL",
    Distance:803.648,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AEX",
    To:"ATL",
    Distance:803.648,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AEX",
    To:"DFW",
    Distance:457.261,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AEX",
    To:"DFW",
    Distance:457.261,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AEX",
    To:"IAH",
    Distance:305.933,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AEY",
    To:"RKV",
    Distance:249.402,
    Airport:"Air Iceland"
}),
new Routes(
{
    From:"AFA",
    To:"AEP",
    Distance:914.131,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AFA",
    To:"LUQ",
    Distance:238.875,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"AFL",
    To:"CGB",
    Distance:643.468,
    Airport:"Azul"
}),
new Routes(
{
    From:"AFZ",
    To:"THR",
    Distance:568.01,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"AGA",
    To:"AMS",
    Distance:2703.75,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AGA",
    To:"BRU",
    Distance:2560.52,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"AGA",
    To:"BRU",
    Distance:2560.52,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"AGA",
    To:"BRU",
    Distance:2560.52,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"AGA",
    To:"CDG",
    Distance:2309.18,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGA",
    To:"CMN",
    Distance:379.947,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"AGA",
    To:"CRL",
    Distance:2517.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGA",
    To:"DUS",
    Distance:2686.03,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"AGA",
    To:"EUN",
    Distance:507.011,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"AGA",
    To:"FRA",
    Distance:2655.26,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"AGA",
    To:"LEJ",
    Distance:2948.01,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"AGA",
    To:"LGW",
    Distance:2435.23,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"AGA",
    To:"LGW",
    Distance:2435.23,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"AGA",
    To:"LGW",
    Distance:2435.23,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGA",
    To:"LIL",
    Distance:2477.5,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"AGA",
    To:"LIL",
    Distance:2477.5,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"AGA",
    To:"LPA",
    Distance:629.009,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"AGA",
    To:"LUX",
    Distance:2514.58,
    Airport:"Luxair"
}),
new Routes(
{
    From:"AGA",
    To:"LYS",
    Distance:2126.63,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGA",
    To:"MAN",
    Distance:2621.19,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"AGA",
    To:"MAN",
    Distance:2621.19,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"AGA",
    To:"MAN",
    Distance:2621.19,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"AGA",
    To:"MRS",
    Distance:1950.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGA",
    To:"MUC",
    Distance:2693.91,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"AGA",
    To:"ORY",
    Distance:2274.57,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"AGA",
    To:"ORY",
    Distance:2274.57,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"AGA",
    To:"SXF",
    Distance:3084.35,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGA",
    To:"VIL",
    Distance:973.627,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"AGB",
    To:"MRS",
    Distance:709.081,
    Airport:"Germania"
}),
new Routes(
{
    From:"AGF",
    To:"DCM",
    Distance:152.551,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"AGF",
    To:"ORY",
    Distance:523.791,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"AGH",
    To:"ARN",
    Distance:477.924,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AGH",
    To:"BMA",
    Distance:454.326,
    Airport:"Golden Air"
}),
new Routes(
{
    From:"AGH",
    To:"BMA",
    Distance:454.326,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"AGM",
    To:"KUS",
    Distance:23.6033,
    Airport:"Air Greenland"
}),
new Routes(
{
    From:"AGN",
    To:"TKE",
    Distance:48.6131,
    Airport:"Alaska Seaplane Service"
}),
new Routes(
{
    From:"AGP",
    To:"AAL",
    Distance:2506.84,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AGP",
    To:"AAR",
    Distance:2457.74,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"AMS",
    Distance:1883.66,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"AMS",
    Distance:1883.66,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"AMS",
    Distance:1883.66,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AGP",
    To:"ARN",
    Distance:3015.84,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AGP",
    To:"ARN",
    Distance:3015.84,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AGP",
    To:"BCN",
    Distance:765.965,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"BCN",
    Distance:765.965,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"BCN",
    Distance:765.965,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"BFS",
    Distance:2003.87,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"AGP",
    To:"BFS",
    Distance:2003.87,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGP",
    To:"BGO",
    Distance:2715.51,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AGP",
    To:"BGY",
    Distance:1549.76,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"BHD",
    Distance:1997.94,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"AGP",
    To:"BHX",
    Distance:1767.69,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"AGP",
    To:"BHX",
    Distance:1767.69,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"BIO",
    Distance:749.082,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"BIO",
    Distance:749.082,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"BLK",
    Distance:1904.45,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"AGP",
    To:"BLL",
    Distance:2356.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"BLQ",
    Distance:1589.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"BOD",
    Distance:960.711,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"AGP",
    To:"BOH",
    Distance:1582.6,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"BRE",
    Distance:2092.53,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"BRS",
    Distance:1641.48,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"BRS",
    Distance:1641.48,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGP",
    To:"BRU",
    Distance:1735.48,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"BRU",
    Distance:1735.48,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"BRU",
    Distance:1735.48,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"AGP",
    To:"BRU",
    Distance:1735.48,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"BRU",
    Distance:1735.48,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"BSL",
    Distance:1563.64,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGP",
    To:"BTS",
    Distance:2180.63,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"BUD",
    Distance:2283.54,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"AGP",
    To:"BVA",
    Distance:1517.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"BVE",
    Distance:1066.86,
    Airport:"Luxair"
}),
new Routes(
{
    From:"AGP",
    To:"CDG",
    Distance:1485.82,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"AGP",
    To:"CDG",
    Distance:1485.82,
    Airport:"Air France"
}),
new Routes(
{
    From:"AGP",
    To:"CDG",
    Distance:1485.82,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGP",
    To:"CGN",
    Distance:1829.09,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AGP",
    To:"CGN",
    Distance:1829.09,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AGP",
    To:"CGN",
    Distance:1829.09,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"CIA",
    Distance:1575.21,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"CMN",
    Distance:463.048,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"CMN",
    Distance:463.048,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"AGP",
    To:"CPH",
    Distance:2471.54,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"CPH",
    Distance:2471.54,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"CPH",
    Distance:2471.54,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AGP",
    To:"CPH",
    Distance:2471.54,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AGP",
    To:"CRL",
    Distance:1691.08,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"CWL",
    Distance:1639.54,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"CWL",
    Distance:1639.54,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"CWL",
    Distance:1639.54,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"AGP",
    To:"DME",
    Distance:3793.53,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"DME",
    Distance:3793.53,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"DTM",
    Distance:1907.32,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"DUB",
    Distance:1867.16,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"AGP",
    To:"DUB",
    Distance:1867.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"DUS",
    Distance:1853.46,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AGP",
    To:"DUS",
    Distance:1853.46,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"AGP",
    To:"EDI",
    Distance:2144.97,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"AGP",
    To:"EDI",
    Distance:2144.97,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"EIN",
    Distance:1818.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"EIN",
    Distance:1818.71,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AGP",
    To:"EMA",
    Distance:1813.4,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"AGP",
    To:"EMA",
    Distance:1813.4,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"AGP",
    To:"EMA",
    Distance:1813.4,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"EXT",
    Distance:1565.74,
    Airport:"Flybe"
}),
new Routes(
{
    From:"AGP",
    To:"FCO",
    Distance:1547.93,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AGP",
    To:"FCO",
    Distance:1547.93,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"FCO",
    Distance:1547.93,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"FKB",
    Distance:1688.62,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"FMM",
    Distance:1740.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"FMO",
    Distance:1966.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"FRA",
    Distance:1815.32,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"AGP",
    To:"GLA",
    Distance:2134.62,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"AGP",
    To:"GLA",
    Distance:2134.62,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"AGP",
    To:"GLA",
    Distance:2134.62,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGP",
    To:"GOT",
    Distance:2639.62,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AGP",
    To:"GOT",
    Distance:2639.62,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AGP",
    To:"GSE",
    Distance:2636.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"GVA",
    Distance:1380.3,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"AGP",
    To:"GVA",
    Distance:1380.3,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGP",
    To:"HAJ",
    Distance:2075.86,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"HAJ",
    Distance:2075.86,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"HAM",
    Distance:2191.71,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AGP",
    To:"HAM",
    Distance:2191.71,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"HAM",
    Distance:2191.71,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"HAM",
    Distance:2191.71,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AGP",
    To:"HAU",
    Distance:2615.92,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"HEL",
    Distance:3352.64,
    Airport:"Finnair"
}),
new Routes(
{
    From:"AGP",
    To:"HEL",
    Distance:3352.64,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AGP",
    To:"HHN",
    Distance:1751.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"IBZ",
    Distance:570.908,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"AGP",
    To:"IBZ",
    Distance:570.908,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"IST",
    Distance:2907.2,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"KRK",
    Distance:2445.63,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"LBA",
    Distance:1924.02,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"AGP",
    To:"LBA",
    Distance:1924.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"LCY",
    Distance:1687.85,
    Airport:"British Airways"
}),
new Routes(
{
    From:"AGP",
    To:"LCY",
    Distance:1687.85,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"LGW",
    Distance:1645.2,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"AGP",
    To:"LGW",
    Distance:1645.2,
    Airport:"British Airways"
}),
new Routes(
{
    From:"AGP",
    To:"LGW",
    Distance:1645.2,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"LGW",
    Distance:1645.2,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AGP",
    To:"LGW",
    Distance:1645.2,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"AGP",
    To:"LGW",
    Distance:1645.2,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGP",
    To:"LHR",
    Distance:1676.61,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"LHR",
    Distance:1676.61,
    Airport:"British Airways"
}),
new Routes(
{
    From:"AGP",
    To:"LIL",
    Distance:1658.47,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"AGP",
    To:"LIS",
    Distance:470.179,
    Airport:"SATA International"
}),
new Routes(
{
    From:"AGP",
    To:"LIS",
    Distance:470.179,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"AGP",
    To:"LPA",
    Distance:1409.55,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"LPA",
    Distance:1409.55,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"LPL",
    Distance:1856.77,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"LPL",
    Distance:1856.77,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGP",
    To:"LTN",
    Distance:1721.12,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"AGP",
    To:"LTN",
    Distance:1721.12,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"AGP",
    To:"LTN",
    Distance:1721.12,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGP",
    To:"LUX",
    Distance:1678.17,
    Airport:"Luxair"
}),
new Routes(
{
    From:"AGP",
    To:"LYS",
    Distance:1285.17,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"LYS",
    Distance:1285.17,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"MAD",
    Distance:432.271,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"AGP",
    To:"MAD",
    Distance:432.271,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"MAN",
    Distance:1862.59,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"AGP",
    To:"MAN",
    Distance:1862.59,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"AGP",
    To:"MAN",
    Distance:1862.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"MAN",
    Distance:1862.59,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"AGP",
    To:"MAN",
    Distance:1862.59,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGP",
    To:"MLN",
    Distance:208.172,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"MLN",
    Distance:208.172,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"MMX",
    Distance:2492.6,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"MRS",
    Distance:1115.95,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"MUC",
    Distance:1854.94,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AGP",
    To:"MUC",
    Distance:1854.94,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"MUC",
    Distance:1854.94,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"MUC",
    Distance:1854.94,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"AGP",
    To:"MUC",
    Distance:1854.94,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AGP",
    To:"MXP",
    Distance:1485.77,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGP",
    To:"NCL",
    Distance:2052.95,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"AGP",
    To:"NCL",
    Distance:2052.95,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"AGP",
    To:"NCL",
    Distance:2052.95,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGP",
    To:"NOC",
    Distance:1945.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"NRN",
    Distance:1859.96,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"NTE",
    Distance:1189.16,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"NTE",
    Distance:1189.16,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"NUE",
    Distance:1897.99,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"NYO",
    Distance:2906.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"ORK",
    Distance:1715.46,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"AGP",
    To:"ORK",
    Distance:1715.46,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"ORY",
    Distance:1450.95,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"ORY",
    Distance:1450.95,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"ORY",
    Distance:1450.95,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"AGP",
    To:"OSL",
    Distance:2840.53,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AGP",
    To:"OSL",
    Distance:2840.53,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AGP",
    To:"OVD",
    Distance:776.991,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"OVD",
    Distance:776.991,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"PIK",
    Distance:2094.32,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"PMI",
    Distance:708.353,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AGP",
    To:"PMI",
    Distance:708.353,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"AGP",
    To:"PMI",
    Distance:708.353,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"PMI",
    Distance:708.353,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"PMI",
    Distance:708.353,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"PRG",
    Distance:2116.15,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"RTM",
    Distance:1838.73,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AGP",
    To:"RYG",
    Distance:2753.33,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AGP",
    To:"RYG",
    Distance:2753.33,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"SCQ",
    Distance:768.235,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"SCQ",
    Distance:768.235,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"SCQ",
    Distance:768.235,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"SDR",
    Distance:753.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"SEN",
    Distance:1706.42,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGP",
    To:"SNN",
    Distance:1815.27,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"AGP",
    To:"SNN",
    Distance:1815.27,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"SOF",
    Distance:2467.32,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"AGP",
    To:"SOU",
    Distance:1606.86,
    Airport:"Flybe"
}),
new Routes(
{
    From:"AGP",
    To:"STN",
    Distance:1731.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"STN",
    Distance:1731.82,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGP",
    To:"STR",
    Distance:1738.87,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AGP",
    To:"STR",
    Distance:1738.87,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"AGP",
    To:"SVG",
    Distance:2575.65,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AGP",
    To:"SVO",
    Distance:3781.21,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"SVO",
    Distance:3781.21,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"AGP",
    To:"SXF",
    Distance:2243.26,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AGP",
    To:"TFN",
    Distance:1433.57,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"AGP",
    To:"TFN",
    Distance:1433.57,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"TFN",
    Distance:1433.57,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"TLS",
    Distance:919.344,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"TLS",
    Distance:919.344,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"TMP",
    Distance:3374.5,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"TRD",
    Distance:3155.7,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AGP",
    To:"TRF",
    Distance:2719.87,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AGP",
    To:"TRF",
    Distance:2719.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"TSF",
    Distance:1711.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"TXL",
    Distance:2245.87,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AGP",
    To:"TXL",
    Distance:2245.87,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"AGP",
    To:"VIE",
    Distance:2135.47,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AGP",
    To:"VIE",
    Distance:2135.47,
    Airport:"Niki"
}),
new Routes(
{
    From:"AGP",
    To:"VKO",
    Distance:3760.01,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"VLC",
    Distance:470.627,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AGP",
    To:"VST",
    Distance:2963.06,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"WAW",
    Distance:2631.96,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AGP",
    To:"WRO",
    Distance:2331.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AGP",
    To:"YUL",
    Distance:5705.16,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"AGP",
    To:"ZRH",
    Distance:1607.92,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"AGR",
    To:"BOM",
    Distance:1036.91,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"AGR",
    To:"HJR",
    Distance:325.428,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"AGS",
    To:"ATL",
    Distance:230.335,
    Airport:"Air France"
}),
new Routes(
{
    From:"AGS",
    To:"ATL",
    Distance:230.335,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AGS",
    To:"ATL",
    Distance:230.335,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AGS",
    To:"CLT",
    Distance:225.494,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AGS",
    To:"CLT",
    Distance:225.494,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AGS",
    To:"DCA",
    Distance:753.023,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AGS",
    To:"DCA",
    Distance:753.023,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AGT",
    To:"ASU",
    Distance:269.927,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"AGT",
    To:"ASU",
    Distance:269.927,
    Airport:"TAM Mercosur"
}),
new Routes(
{
    From:"AGT",
    To:"GRU",
    Distance:876.85,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"AGT",
    To:"GRU",
    Distance:876.85,
    Airport:"TAM Mercosur"
}),
new Routes(
{
    From:"AGU",
    To:"CUN",
    Distance:1599.95,
    Airport:"Volaris"
}),
new Routes(
{
    From:"AGU",
    To:"DFW",
    Distance:1348.75,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AGU",
    To:"DFW",
    Distance:1348.75,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AGU",
    To:"IAH",
    Distance:1154.69,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AGU",
    To:"LAX",
    Distance:2081.83,
    Airport:"Volaris"
}),
new Routes(
{
    From:"AGU",
    To:"MEX",
    Distance:421.689,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"AGU",
    To:"MEX",
    Distance:421.689,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"AGU",
    To:"MTY",
    Distance:505.686,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"AGU",
    To:"TIJ",
    Distance:1881.7,
    Airport:"Volaris"
}),
new Routes(
{
    From:"AGX",
    To:"COK",
    Distance:466.834,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"AHB",
    To:"ADE",
    Distance:653.082,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"AHB",
    To:"CAI",
    Distance:1743.51,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"AHB",
    To:"CAI",
    Distance:1743.51,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"AHB",
    To:"CAI",
    Distance:1743.51,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AHB",
    To:"DMM",
    Distance:1172.8,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AHB",
    To:"DXB",
    Distance:1525.27,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"AHB",
    To:"JED",
    Distance:529.155,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"AHB",
    To:"JED",
    Distance:529.155,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AHB",
    To:"MED",
    Distance:765.515,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AHB",
    To:"RUH",
    Distance:855.711,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"AHB",
    To:"RUH",
    Distance:855.711,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AHB",
    To:"SAH",
    Distance:349.47,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"AHB",
    To:"SHJ",
    Distance:1542.78,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"AHB",
    To:"TIF",
    Distance:422.871,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AHB",
    To:"TUU",
    Distance:1283.02,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AHE",
    To:"PPT",
    Distance:499.54,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"AHE",
    To:"XMH",
    Distance:20.1543,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"AHN",
    To:"BNA",
    Distance:389.399,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"AHO",
    To:"AOI",
    Distance:533.725,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"BGY",
    Distance:572.195,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"BLL",
    Distance:1681.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"BLQ",
    Distance:498.532,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"BTS",
    Distance:1096.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"BVA",
    Distance:1093.6,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"CIA",
    Distance:382.647,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"CRL",
    Distance:1132.43,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"CUF",
    Distance:438.728,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"DTM",
    Distance:1211.6,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"DUB",
    Distance:1792.85,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"EIN",
    Distance:1223.52,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"FCO",
    Distance:355.907,
    Airport:"Excel Airways"
}),
new Routes(
{
    From:"AHO",
    To:"FMM",
    Distance:832.508,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"GRO",
    Distance:483.163,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"GSE",
    Distance:1923.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"HHN",
    Distance:1039.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"LIN",
    Distance:541.131,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AHO",
    To:"LTN",
    Distance:1414.05,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"MAD",
    Distance:1001.01,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"MXP",
    Distance:556.934,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AHO",
    To:"NRN",
    Distance:1230.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"NYO",
    Distance:2107.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"OTP",
    Distance:1518.66,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"AHO",
    To:"PMF",
    Distance:494.071,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"PSA",
    Distance:380.982,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"STN",
    Distance:1394.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"TRF",
    Distance:2067.76,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"TRN",
    Distance:510.679,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AHO",
    To:"TRS",
    Distance:713.766,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHO",
    To:"TSF",
    Distance:641.24,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AHU",
    To:"CMN",
    Distance:399.02,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"AIA",
    To:"CDR",
    Distance:90.4199,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"AIA",
    To:"CDR",
    Distance:90.4199,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"AIA",
    To:"CDR",
    Distance:90.4199,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AIN",
    To:"ATK",
    Distance:96.6035,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"AIN",
    To:"BRW",
    Distance:137.441,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"AIT",
    To:"AIU",
    Distance:213.903,
    Airport:"Air Rarotonga"
}),
new Routes(
{
    From:"AIT",
    To:"RAR",
    Distance:263.769,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AIT",
    To:"RAR",
    Distance:263.769,
    Airport:"Air Rarotonga"
}),
new Routes(
{
    From:"AIU",
    To:"RAR",
    Distance:222.883,
    Airport:"Air Rarotonga"
}),
new Routes(
{
    From:"AJA",
    To:"ARN",
    Distance:2068.33,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AJA",
    To:"AVN",
    Distance:386.679,
    Airport:"Nationwide Airlines"
}),
new Routes(
{
    From:"AJA",
    To:"BES",
    Distance:1262.1,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"AJA",
    To:"BOD",
    Distance:833.702,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"AJA",
    To:"BSL",
    Distance:638.022,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AJA",
    To:"BVE",
    Distance:691.139,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"AJA",
    To:"CDG",
    Distance:926.165,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AJA",
    To:"CFR",
    Distance:1079.62,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"AJA",
    To:"DCM",
    Distance:561.89,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"AJA",
    To:"GVA",
    Distance:525.71,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AJA",
    To:"LGG",
    Distance:1002.46,
    Airport:"Air France"
}),
new Routes(
{
    From:"AJA",
    To:"LGG",
    Distance:1002.46,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"AJA",
    To:"LGW",
    Distance:1233.02,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AJA",
    To:"LIL",
    Distance:1055.48,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"AJA",
    To:"LIL",
    Distance:1055.48,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"AJA",
    To:"LUX",
    Distance:879.645,
    Airport:"Luxair"
}),
new Routes(
{
    From:"AJA",
    To:"LYS",
    Distance:517.051,
    Airport:"Air France"
}),
new Routes(
{
    From:"AJA",
    To:"LYS",
    Distance:517.051,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AJA",
    To:"LYS",
    Distance:517.051,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"AJA",
    To:"LYS",
    Distance:517.051,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AJA",
    To:"MPL",
    Distance:435.732,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"AJA",
    To:"MRS",
    Distance:338.116,
    Airport:"Air France"
}),
new Routes(
{
    From:"AJA",
    To:"MRS",
    Distance:338.116,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AJA",
    To:"MRS",
    Distance:338.116,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"AJA",
    To:"NCE",
    Distance:232.325,
    Airport:"Air France"
}),
new Routes(
{
    From:"AJA",
    To:"NCE",
    Distance:232.325,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AJA",
    To:"NCE",
    Distance:232.325,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"AJA",
    To:"NTE",
    Distance:1008.26,
    Airport:"Air France"
}),
new Routes(
{
    From:"AJA",
    To:"NTE",
    Distance:1008.26,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"AJA",
    To:"NTE",
    Distance:1008.26,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"AJA",
    To:"OLB",
    Distance:128.615,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AJA",
    To:"ORY",
    Distance:907.975,
    Airport:"Air France"
}),
new Routes(
{
    From:"AJA",
    To:"ORY",
    Distance:907.975,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"AJA",
    To:"OSL",
    Distance:2037.6,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AJA",
    To:"PIS",
    Distance:851.734,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"AJA",
    To:"SXB",
    Distance:741.223,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"AJA",
    To:"TLS",
    Distance:635.827,
    Airport:"Air France"
}),
new Routes(
{
    From:"AJA",
    To:"TLS",
    Distance:635.827,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"AJA",
    To:"TLS",
    Distance:635.827,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"AJF",
    To:"JED",
    Distance:906.225,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AJF",
    To:"RUH",
    Distance:843.908,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AJI",
    To:"ESB",
    Distance:857.049,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AJI",
    To:"IST",
    Distance:1212.57,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AJL",
    To:"CCU",
    Distance:461.431,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"AJL",
    To:"CCU",
    Distance:461.431,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"AJL",
    To:"CCU",
    Distance:461.431,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"AJL",
    To:"GAU",
    Distance:289.632,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"AJL",
    To:"GAU",
    Distance:289.632,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"AJL",
    To:"IMF",
    Distance:158.1,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"AJR",
    To:"LYC",
    Distance:118.855,
    Airport:"NextJet"
}),
new Routes(
{
    From:"AJR",
    To:"LYC",
    Distance:118.855,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AJU",
    To:"BSB",
    Distance:1292.57,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"AJU",
    To:"GIG",
    Distance:1469.11,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"AJU",
    To:"GRU",
    Distance:1705.1,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"AJU",
    To:"GRU",
    Distance:1705.1,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"AJU",
    To:"MCZ",
    Distance:215.426,
    Airport:"Azul"
}),
new Routes(
{
    From:"AJU",
    To:"REC",
    Distance:395.429,
    Airport:"Azul"
}),
new Routes(
{
    From:"AJU",
    To:"REC",
    Distance:395.429,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"AJU",
    To:"SDU",
    Distance:1475.37,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"AJU",
    To:"SSA",
    Distance:254.401,
    Airport:"Azul"
}),
new Routes(
{
    From:"AJU",
    To:"SSA",
    Distance:254.401,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"AJU",
    To:"SSA",
    Distance:254.401,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"AJU",
    To:"SSA",
    Distance:254.401,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"AJU",
    To:"VCP",
    Distance:1710.89,
    Airport:"Azul"
}),
new Routes(
{
    From:"AKB",
    To:"DUT",
    Distance:544.743,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"AKF",
    To:"BEN",
    Distance:929.535,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"AKF",
    To:"BEN",
    Distance:929.535,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"AKF",
    To:"TIP",
    Distance:1368.34,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"AKI",
    To:"TLT",
    Distance:25.7736,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"AKI",
    To:"TLT",
    Distance:25.7736,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"AKJ",
    To:"HND",
    Distance:931.076,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"AKJ",
    To:"HND",
    Distance:931.076,
    Airport:"Hokkaido International Airlines"
}),
new Routes(
{
    From:"AKJ",
    To:"HND",
    Distance:931.076,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"AKJ",
    To:"NGO",
    Distance:1093,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"AKJ",
    To:"TPE",
    Distance:2823.25,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"AKJ",
    To:"TPE",
    Distance:2823.25,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"AKJ",
    To:"TPE",
    Distance:2823.25,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"AKK",
    To:"ADQ",
    Distance:135.657,
    Airport:"Astair"
}),
new Routes(
{
    From:"AKL",
    To:"ADL",
    Distance:3251.35,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"ADL",
    Distance:3251.35,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"AKL",
    To:"ADL",
    Distance:3251.35,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"AKL",
    To:"APW",
    Distance:2891,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"APW",
    Distance:2891,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"AKL",
    To:"BHE",
    Distance:507.745,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"BKK",
    Distance:9555.33,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"AKL",
    To:"BKK",
    Distance:9555.33,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AKL",
    To:"BNE",
    Distance:2295.4,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"BNE",
    Distance:2295.4,
    Airport:"Air Tahiti Nui"
}),
new Routes(
{
    From:"AKL",
    To:"BNE",
    Distance:2295.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AKL",
    To:"BNE",
    Distance:2295.4,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"AKL",
    To:"BNE",
    Distance:2295.4,
    Airport:"Emirates"
}),
new Routes(
{
    From:"AKL",
    To:"BNE",
    Distance:2295.4,
    Airport:"Qantas"
}),
new Routes(
{
    From:"AKL",
    To:"BNE",
    Distance:2295.4,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"AKL",
    To:"CAN",
    Distance:9300.08,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"AKL",
    To:"CHC",
    Distance:745.678,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"CHC",
    Distance:745.678,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"AKL",
    To:"CNS",
    Distance:3619.43,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"CNS",
    Distance:3619.43,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"AKL",
    To:"DUD",
    Distance:1062.65,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"DUD",
    Distance:1062.65,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"AKL",
    To:"GIS",
    Distance:334.918,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"HKG",
    Distance:9170.14,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"HKG",
    Distance:9170.14,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"AKL",
    To:"HLZ",
    Distance:106.73,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"ICN",
    Distance:9656.28,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"AKL",
    To:"KAT",
    Distance:254.523,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"KKE",
    Distance:209.527,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"KUL",
    Distance:8703.33,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"AKL",
    To:"LAX",
    Distance:10486.6,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"LAX",
    Distance:10486.6,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AKL",
    To:"MEL",
    Distance:2637.3,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"MEL",
    Distance:2637.3,
    Airport:"Air Tahiti Nui"
}),
new Routes(
{
    From:"AKL",
    To:"MEL",
    Distance:2637.3,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"AKL",
    To:"MEL",
    Distance:2637.3,
    Airport:"Emirates"
}),
new Routes(
{
    From:"AKL",
    To:"MEL",
    Distance:2637.3,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"AKL",
    To:"MEL",
    Distance:2637.3,
    Airport:"Qantas"
}),
new Routes(
{
    From:"AKL",
    To:"MEL",
    Distance:2637.3,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"AKL",
    To:"NAN",
    Distance:2156.48,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"NAN",
    Distance:2156.48,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"AKL",
    To:"NAN",
    Distance:2156.48,
    Airport:"Qantas"
}),
new Routes(
{
    From:"AKL",
    To:"NOU",
    Distance:1860.28,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"AKL",
    To:"NOU",
    Distance:1860.28,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"NPE",
    Distance:328.058,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"NPL",
    Distance:228.831,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"NRT",
    Distance:8836.29,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"NRT",
    Distance:8836.29,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"AKL",
    To:"NRT",
    Distance:8836.29,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"AKL",
    To:"NSN",
    Distance:495.88,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"OOL",
    Distance:2216.66,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"OOL",
    Distance:2216.66,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"AKL",
    To:"OOL",
    Distance:2216.66,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"AKL",
    To:"PER",
    Distance:5336.49,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"PER",
    Distance:5336.49,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"AKL",
    To:"PMR",
    Distance:375.232,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"PPQ",
    Distance:433.626,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"PPT",
    Distance:4092.82,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"PPT",
    Distance:4092.82,
    Airport:"Air Tahiti Nui"
}),
new Routes(
{
    From:"AKL",
    To:"PPT",
    Distance:4092.82,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AKL",
    To:"PPT",
    Distance:4092.82,
    Airport:"Qantas"
}),
new Routes(
{
    From:"AKL",
    To:"PVG",
    Distance:9368.48,
    Airport:"Air China"
}),
new Routes(
{
    From:"AKL",
    To:"PVG",
    Distance:9368.48,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"RAR",
    Distance:3013.41,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"RAR",
    Distance:3013.41,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"AKL",
    To:"ROT",
    Distance:181.858,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"SCL",
    Distance:9652.99,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AKL",
    To:"SCL",
    Distance:9652.99,
    Airport:"Qantas"
}),
new Routes(
{
    From:"AKL",
    To:"SFO",
    Distance:10509,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"SFO",
    Distance:10509,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AKL",
    To:"SIN",
    Distance:8408.26,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"AKL",
    To:"SIN",
    Distance:8408.26,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"AKL",
    To:"SIN",
    Distance:8408.26,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"AKL",
    To:"SYD",
    Distance:2159.53,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"SYD",
    Distance:2159.53,
    Airport:"Air Tahiti Nui"
}),
new Routes(
{
    From:"AKL",
    To:"SYD",
    Distance:2159.53,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AKL",
    To:"SYD",
    Distance:2159.53,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"AKL",
    To:"SYD",
    Distance:2159.53,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"AKL",
    To:"SYD",
    Distance:2159.53,
    Airport:"Emirates"
}),
new Routes(
{
    From:"AKL",
    To:"SYD",
    Distance:2159.53,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"AKL",
    To:"SYD",
    Distance:2159.53,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AKL",
    To:"SYD",
    Distance:2159.53,
    Airport:"Qantas"
}),
new Routes(
{
    From:"AKL",
    To:"SYD",
    Distance:2159.53,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"AKL",
    To:"TBU",
    Distance:2004.01,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"TBU",
    Distance:2004.01,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"AKL",
    To:"TRG",
    Distance:144.446,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"TUO",
    Distance:223.493,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"VLI",
    Distance:2238.57,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"VLI",
    Distance:2238.57,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"AKL",
    To:"WAG",
    Distance:329.117,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"WHK",
    Distance:213.036,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"WLG",
    Distance:480.271,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"WLG",
    Distance:480.271,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"AKL",
    To:"WRE",
    Distance:143.043,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"ZQN",
    Distance:1024.84,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AKL",
    To:"ZQN",
    Distance:1024.84,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"AKN",
    To:"ANC",
    Distance:462.847,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"AKN",
    To:"ANC",
    Distance:462.847,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"AKN",
    To:"DLG",
    Distance:114.301,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"AKN",
    To:"KLL",
    Distance:51.5999,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"AKN",
    To:"PIP",
    Distance:132.894,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"AKN",
    To:"WSN",
    Distance:20.6062,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"AKP",
    To:"BTT",
    Distance:135.924,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"AKP",
    To:"FAI",
    Distance:407.149,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"AKU",
    To:"CTU",
    Distance:2427.45,
    Airport:"Air China"
}),
new Routes(
{
    From:"AKU",
    To:"CTU",
    Distance:2427.45,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"AKU",
    To:"URC",
    Distance:657.144,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"AKU",
    To:"URC",
    Distance:657.144,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"AKU",
    To:"URC",
    Distance:657.144,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"AKU",
    To:"URC",
    Distance:657.144,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AKX",
    To:"ALA",
    Distance:1686.03,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"AKX",
    To:"ALA",
    Distance:1686.03,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"AKX",
    To:"DME",
    Distance:1412.06,
    Airport:"BRA-Transportes Aereos"
}),
new Routes(
{
    From:"AKX",
    To:"DME",
    Distance:1412.06,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"AKX",
    To:"SCO",
    Distance:847.166,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"AKX",
    To:"TSE",
    Distance:1007.85,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"AKX",
    To:"TSE",
    Distance:1007.85,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"AKY",
    To:"RGN",
    Distance:496.762,
    Airport:"Air Bagan"
}),
new Routes(
{
    From:"AKY",
    To:"RGN",
    Distance:496.762,
    Airport:"Air Mandalay"
}),
new Routes(
{
    From:"AKY",
    To:"SNW",
    Distance:238.759,
    Airport:"Air Mandalay"
}),
new Routes(
{
    From:"ALA",
    To:"AKX",
    Distance:1686.03,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"AKX",
    Distance:1686.03,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"ALA",
    To:"AMS",
    Distance:5256.02,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ALA",
    To:"AUH",
    Distance:2930.39,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"AUH",
    Distance:2930.39,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"ALA",
    To:"BKK",
    Distance:4000.35,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"CIT",
    Distance:625.832,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"CIT",
    Distance:625.832,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"ALA",
    To:"DEL",
    Distance:1644.09,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"DMB",
    Distance:468.95,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"ALA",
    To:"DME",
    Distance:3080.92,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"ALA",
    To:"DYU",
    Distance:872.203,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"DYU",
    Distance:872.203,
    Airport:"Salzburg arrows"
}),
new Routes(
{
    From:"ALA",
    To:"DYU",
    Distance:872.203,
    Airport:"Tajik Air"
}),
new Routes(
{
    From:"ALA",
    To:"DZN",
    Distance:870.986,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"ALA",
    To:"FRA",
    Distance:5091.47,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ALA",
    To:"FRU",
    Distance:210.216,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"FRU",
    Distance:210.216,
    Airport:"Cyprus Turkish Airlines"
}),
new Routes(
{
    From:"ALA",
    To:"GUW",
    Distance:2009.34,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"GUW",
    Distance:2009.34,
    Airport:"Flightlink Tanzania"
}),
new Routes(
{
    From:"ALA",
    To:"GYD",
    Distance:2246.65,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"HKG",
    Distance:4113.15,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"ICN",
    Distance:4172.36,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"ICN",
    Distance:4172.36,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"ALA",
    To:"IKA",
    Distance:2381.35,
    Airport:"Mahan Air"
}),
new Routes(
{
    From:"ALA",
    To:"IST",
    Distance:3927.92,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"IST",
    Distance:3927.92,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ALA",
    To:"KBP",
    Distance:3534.46,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"KBP",
    Distance:3534.46,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"ALA",
    To:"KGF",
    Distance:757.451,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"KGF",
    Distance:757.451,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"ALA",
    To:"KOV",
    Distance:1236.82,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"ALA",
    To:"KSN",
    Distance:1477.51,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"ALA",
    To:"KUF",
    Distance:2262.77,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"KUL",
    Distance:5130.45,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"KZN",
    Distance:2399.06,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"KZO",
    Distance:926.884,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"LED",
    Distance:3609.04,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ALA",
    To:"LED",
    Distance:3609.04,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"LHR",
    Distance:5623.55,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"LHR",
    Distance:5623.55,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ALA",
    To:"OVB",
    Distance:1358.11,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"ALA",
    To:"PEK",
    Distance:3271.45,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"PEK",
    Distance:3271.45,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"ALA",
    To:"PLX",
    Distance:815.093,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"ALA",
    To:"PPK",
    Distance:1391.11,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"ALA",
    To:"PRG",
    Distance:4700.14,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"ALA",
    To:"PWQ",
    Distance:983.292,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"SAW",
    Distance:3891.97,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ALA",
    To:"SCO",
    Distance:2081.44,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"SCO",
    Distance:2081.44,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"ALA",
    To:"SGN",
    Distance:4606.47,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"SHJ",
    Distance:2798.05,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"ALA",
    To:"SVO",
    Distance:3121.67,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"TAS",
    Distance:678.94,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"TAS",
    Distance:678.94,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"ALA",
    To:"TBS",
    Distance:2620.42,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"TSE",
    Distance:950.546,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"TSE",
    Distance:950.546,
    Airport:"Flightlink Tanzania"
}),
new Routes(
{
    From:"ALA",
    To:"TSE",
    Distance:950.546,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ALA",
    To:"TSE",
    Distance:950.546,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"ALA",
    To:"TSE",
    Distance:950.546,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ALA",
    To:"UKK",
    Distance:851.205,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"UKK",
    Distance:851.205,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"ALA",
    To:"URC",
    Distance:841.456,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"ALA",
    To:"URC",
    Distance:841.456,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ALA",
    To:"VKO",
    Distance:3124.22,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"ALB",
    To:"ATL",
    Distance:1372.14,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ALB",
    To:"ATL",
    Distance:1372.14,
    Airport:"Air France"
}),
new Routes(
{
    From:"ALB",
    To:"ATL",
    Distance:1372.14,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ALB",
    To:"ATL",
    Distance:1372.14,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ALB",
    To:"ATL",
    Distance:1372.14,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ALB",
    To:"BOS",
    Distance:232.988,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"ALB",
    To:"BWI",
    Distance:464.448,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ALB",
    To:"BWI",
    Distance:464.448,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ALB",
    To:"CLE",
    Distance:680.344,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ALB",
    To:"CLT",
    Distance:1039.75,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ALB",
    To:"CLT",
    Distance:1039.75,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ALB",
    To:"DCA",
    Distance:511.652,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ALB",
    To:"DCA",
    Distance:511.652,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ALB",
    To:"DTW",
    Distance:785.148,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ALB",
    To:"EWR",
    Distance:230.61,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ALB",
    To:"EWR",
    Distance:230.61,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ALB",
    To:"FLL",
    Distance:1942.11,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ALB",
    To:"FLL",
    Distance:1942.11,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ALB",
    To:"IAD",
    Distance:522.723,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ALB",
    To:"LAS",
    Distance:3591.54,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ALB",
    To:"MCO",
    Distance:1729.04,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ALB",
    To:"MDW",
    Distance:1151.6,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ALB",
    To:"MDW",
    Distance:1151.6,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ALB",
    To:"MSP",
    Distance:1572.26,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ALB",
    To:"MSS",
    Distance:257.243,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"ALB",
    To:"OGS",
    Distance:253.182,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"ALB",
    To:"ORD",
    Distance:1160.52,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ALB",
    To:"PHL",
    Distance:341.668,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ALB",
    To:"PHL",
    Distance:341.668,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ALB",
    To:"TPA",
    Distance:1821.01,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ALB",
    To:"TPA",
    Distance:1821.01,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"AAL",
    Distance:2226.11,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"AES",
    Distance:2737.28,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"ALG",
    Distance:376.996,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALC",
    To:"AMS",
    Distance:1613.16,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"AMS",
    Distance:1613.16,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"AMS",
    Distance:1613.16,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"ALC",
    To:"ARN",
    Distance:2711.3,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"ARN",
    Distance:2711.3,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ALC",
    To:"BCN",
    Distance:403.854,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"BCN",
    Distance:403.854,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"BFS",
    Distance:1870.19,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"ALC",
    To:"BFS",
    Distance:1870.19,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ALC",
    To:"BGO",
    Distance:2480.9,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"BGO",
    Distance:2480.9,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ALC",
    To:"BGY",
    Distance:1179.36,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"BHX",
    Distance:1578.5,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"ALC",
    To:"BHX",
    Distance:1578.5,
    Airport:"Flybe"
}),
new Routes(
{
    From:"ALC",
    To:"BHX",
    Distance:1578.5,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"BHX",
    Distance:1578.5,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ALC",
    To:"BIO",
    Distance:592.106,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"BIO",
    Distance:592.106,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"BLK",
    Distance:1732.61,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"ALC",
    To:"BLL",
    Distance:2071.47,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"BLL",
    Distance:2071.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"BLQ",
    Distance:1206.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"BOH",
    Distance:1393.36,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"BRE",
    Distance:1791.7,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"BRS",
    Distance:1466.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"BRS",
    Distance:1466.47,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ALC",
    To:"BRS",
    Distance:1466.47,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ALC",
    To:"BRU",
    Distance:1458.01,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"BRU",
    Distance:1458.01,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"BRU",
    Distance:1458.01,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"BRU",
    Distance:1458.01,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"BSL",
    Distance:1225.1,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ALC",
    To:"BVA",
    Distance:1260.4,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"CGN",
    Distance:1524.41,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"CPH",
    Distance:2164.54,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"CPH",
    Distance:2164.54,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"CPH",
    Distance:2164.54,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"CRL",
    Distance:1410.57,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"CWL",
    Distance:1474.42,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"CWL",
    Distance:1474.42,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"CWL",
    Distance:1474.42,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ALC",
    To:"DME",
    Distance:3424.91,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"DME",
    Distance:3424.91,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"DME",
    Distance:3424.91,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"DME",
    Distance:3424.91,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"DUB",
    Distance:1739.16,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ALC",
    To:"DUB",
    Distance:1739.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"DUS",
    Distance:1555.69,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ALC",
    To:"EDI",
    Distance:1975.67,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"ALC",
    To:"EDI",
    Distance:1975.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"EDI",
    Distance:1975.67,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ALC",
    To:"EIN",
    Distance:1535.77,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"EIN",
    Distance:1535.77,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"ALC",
    To:"EMA",
    Distance:1618.85,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"ALC",
    To:"EMA",
    Distance:1618.85,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"ALC",
    To:"EMA",
    Distance:1618.85,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"EMA",
    Distance:1618.85,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ALC",
    To:"EVE",
    Distance:3519.32,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"EXT",
    Distance:1402.74,
    Airport:"Flybe"
}),
new Routes(
{
    From:"ALC",
    To:"FCO",
    Distance:1157.19,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"FCO",
    Distance:1157.19,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"FKB",
    Distance:1357.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"FMM",
    Distance:1387.39,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"FRA",
    Distance:1491.63,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ALC",
    To:"GLA",
    Distance:1977.01,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"ALC",
    To:"GLA",
    Distance:1977.01,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ALC",
    To:"GLA",
    Distance:1977.01,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ALC",
    To:"GOT",
    Distance:2348.25,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"GSE",
    Distance:2347.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"GVA",
    Distance:1040.1,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ALC",
    To:"HAM",
    Distance:1886.67,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ALC",
    To:"HAM",
    Distance:1886.67,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"HAU",
    Distance:2377.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"HEL",
    Distance:3029.95,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"HHN",
    Distance:1437.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"IBZ",
    Distance:180.269,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"IBZ",
    Distance:180.269,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"KEF",
    Distance:3208.07,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"KEF",
    Distance:3208.07,
    Airport:"bmibaby"
}),
new Routes(
{
    From:"ALC",
    To:"KIR",
    Distance:1694.42,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"KRK",
    Distance:2074.31,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"KRS",
    Distance:2301.45,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ALC",
    To:"KSD",
    Distance:2551.33,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"KTW",
    Distance:2055.84,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"KUN",
    Distance:2616.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"LBA",
    Distance:1734.86,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"ALC",
    To:"LBA",
    Distance:1734.86,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"LGW",
    Distance:1430.91,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"ALC",
    To:"LGW",
    Distance:1430.91,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ALC",
    To:"LGW",
    Distance:1430.91,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"LGW",
    Distance:1430.91,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"LGW",
    Distance:1430.91,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ALC",
    To:"LGW",
    Distance:1430.91,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ALC",
    To:"LPA",
    Distance:1793.64,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"LPL",
    Distance:1682.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"LPL",
    Distance:1682.82,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ALC",
    To:"LTN",
    Distance:1511.5,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"ALC",
    To:"LTN",
    Distance:1511.5,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ALC",
    To:"MAD",
    Distance:356.77,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"MAN",
    Distance:1681.03,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"ALC",
    To:"MAN",
    Distance:1681.03,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"ALC",
    To:"MAN",
    Distance:1681.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"MAN",
    Distance:1681.03,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ALC",
    To:"MAN",
    Distance:1681.03,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ALC",
    To:"MOL",
    Distance:2771.11,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"MST",
    Distance:1489.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"MUC",
    Distance:1496.75,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ALC",
    To:"MUC",
    Distance:1496.75,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"NCL",
    Distance:1865.05,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"ALC",
    To:"NCL",
    Distance:1865.05,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ALC",
    To:"NCL",
    Distance:1865.05,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ALC",
    To:"NOC",
    Distance:1847.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"NRN",
    Distance:1570.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"NUE",
    Distance:1552.89,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"NYO",
    Distance:2600.12,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"ORK",
    Distance:1629.04,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ALC",
    To:"ORN",
    Distance:295.644,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALC",
    To:"ORN",
    Distance:295.644,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"ORN",
    Distance:295.644,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"ORY",
    Distance:1184.58,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"ORY",
    Distance:1184.58,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"OSL",
    Distance:2570.41,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"OSL",
    Distance:2570.41,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ALC",
    To:"OUL",
    Distance:3407.6,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"PIK",
    Distance:1939.07,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"PMI",
    Distance:317.467,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ALC",
    To:"PMI",
    Distance:317.467,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"PMI",
    Distance:317.467,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ALC",
    To:"RTM",
    Distance:1569.31,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"ALC",
    To:"RYG",
    Distance:2480.43,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"RYG",
    Distance:2480.43,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"SCQ",
    Distance:838.065,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"SEN",
    Distance:1480.93,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ALC",
    To:"SNN",
    Distance:1728.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"SOU",
    Distance:1410.02,
    Airport:"Flybe"
}),
new Routes(
{
    From:"ALC",
    To:"STN",
    Distance:1513.82,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"STR",
    Distance:1398.15,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ALC",
    To:"SVG",
    Distance:2332.57,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"SVG",
    Distance:2332.57,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ALC",
    To:"TFS",
    Distance:1870.86,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"ALC",
    To:"TKU",
    Distance:2939.79,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"TMP",
    Distance:3062.2,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"TOS",
    Distance:3677.93,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"TRD",
    Distance:2902.74,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"TRD",
    Distance:2902.74,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ALC",
    To:"TRF",
    Distance:2448.87,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"TRF",
    Distance:2448.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"TXL",
    Distance:1913.24,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ALC",
    To:"UME",
    Distance:3155.49,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALC",
    To:"VST",
    Distance:2663.24,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"VXO",
    Distance:2356.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"WMI",
    Distance:2270.37,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"WRO",
    Distance:1973.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ALC",
    To:"ZRH",
    Distance:1260.39,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ALF",
    To:"HFT",
    Distance:79.0248,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"ALF",
    To:"KKN",
    Distance:251.143,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"ALF",
    To:"LKL",
    Distance:61.7181,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"ALF",
    To:"OSL",
    Distance:1224.99,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALF",
    To:"OSL",
    Distance:1224.99,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ALF",
    To:"SOJ",
    Distance:94.6261,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"ALF",
    To:"TOS",
    Distance:173.759,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ALF",
    To:"TOS",
    Distance:173.759,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ALF",
    To:"TOS",
    Distance:173.759,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"ALF",
    To:"VDS",
    Distance:245.989,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"ALG",
    To:"AAE",
    Distance:409.468,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"ABJ",
    Distance:3569.78,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"ALC",
    Distance:376.996,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"AMM",
    Distance:3049.16,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"AMM",
    Distance:3049.16,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"ALG",
    To:"AZR",
    Distance:1034.89,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"BCN",
    Distance:521.496,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"BCN",
    Distance:521.496,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ALG",
    To:"BCN",
    Distance:521.496,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ALG",
    To:"BEY",
    Distance:2933.85,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"BJA",
    Distance:165.347,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"BKO",
    Distance:2908.25,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"BLJ",
    Distance:296.447,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"BOD",
    Distance:963.182,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"BRU",
    Distance:1583.34,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"BSK",
    Distance:310.412,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"CAI",
    Distance:2705.72,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"CAI",
    Distance:2705.72,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ALG",
    To:"CDG",
    Distance:1371.18,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ALG",
    To:"CDG",
    Distance:1371.18,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ALG",
    To:"CDG",
    Distance:1371.18,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"CDG",
    Distance:1371.18,
    Airport:"Air France"
}),
new Routes(
{
    From:"ALG",
    To:"CDG",
    Distance:1371.18,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ALG",
    To:"CGN",
    Distance:1606.81,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"ALG",
    To:"CMN",
    Distance:1050.21,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"CMN",
    Distance:1050.21,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"ALG",
    To:"CZL",
    Distance:307.878,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"DJG",
    Distance:1501.6,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"DKR",
    Distance:3187.75,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"DOH",
    Distance:4729.08,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ALG",
    To:"DXB",
    Distance:5068.25,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"DXB",
    Distance:5068.25,
    Airport:"Emirates"
}),
new Routes(
{
    From:"ALG",
    To:"ELU",
    Distance:479.472,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"ETZ",
    Distance:1388.64,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"FCO",
    Distance:962.78,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"FCO",
    Distance:962.78,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ALG",
    To:"FRA",
    Distance:1543.1,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"FRA",
    Distance:1543.1,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ALG",
    To:"GHA",
    Distance:481.828,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"GVA",
    Distance:1088.41,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"HME",
    Distance:619.373,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"HRM",
    Distance:418.25,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"INZ",
    Distance:1051.76,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"IST",
    Distance:2259.3,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"IST",
    Distance:2259.3,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ALG",
    To:"LGW",
    Distance:1630.07,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ALG",
    To:"LHR",
    Distance:1669.65,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"LIL",
    Distance:1542.41,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ALG",
    To:"LIL",
    Distance:1542.41,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"LIS",
    Distance:1109.79,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"LIS",
    Distance:1109.79,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"ALG",
    To:"LYS",
    Distance:1016.78,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ALG",
    To:"LYS",
    Distance:1016.78,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"MAD",
    Distance:725.046,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"MAD",
    Distance:725.046,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ALG",
    To:"MED",
    Distance:3716.03,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"ALG",
    To:"MLA",
    Distance:1013.24,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"ALG",
    To:"MLH",
    Distance:1262.47,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ALG",
    To:"MRS",
    Distance:768.927,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ALG",
    To:"MRS",
    Distance:768.927,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"MRS",
    Distance:768.927,
    Airport:"Air France"
}),
new Routes(
{
    From:"ALG",
    To:"MUW",
    Distance:321.666,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"MXP",
    Distance:1095.26,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"NCE",
    Distance:845.741,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"NIM",
    Distance:2582.82,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"OGX",
    Distance:567.848,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"ORN",
    Distance:364.277,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"ORY",
    Distance:1339.95,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ALG",
    To:"ORY",
    Distance:1339.95,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"OUA",
    Distance:2747.15,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"PEK",
    Distance:9104.04,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"PMI",
    Distance:321.15,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"QSF",
    Distance:197.105,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"SVO",
    Distance:3332.11,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"TEE",
    Distance:462.569,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"TGR",
    Distance:480.571,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"TID",
    Distance:217.632,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"TIP",
    Distance:1012.84,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"TIP",
    Distance:1012.84,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"ALG",
    To:"TLM",
    Distance:459.774,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"TLS",
    Distance:787.299,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"ALG",
    To:"TLS",
    Distance:787.299,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"TUN",
    Distance:624.662,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"TUN",
    Distance:624.662,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"ALG",
    To:"VIE",
    Distance:1672.8,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALG",
    To:"YUL",
    Distance:6275.41,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"ALH",
    To:"BQB",
    Distance:261.608,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ALH",
    To:"PER",
    Distance:375.1,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"ALH",
    To:"PER",
    Distance:375.1,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ALO",
    To:"ORD",
    Distance:375.413,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ALO",
    To:"ORD",
    Distance:375.413,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ALS",
    To:"DEN",
    Distance:289.045,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"ALS",
    To:"DEN",
    Distance:289.045,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"ALS",
    To:"DEN",
    Distance:289.045,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ALS",
    To:"FMN",
    Distance:223.361,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"ALS",
    To:"FMN",
    Distance:223.361,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"ALS",
    To:"FMN",
    Distance:223.361,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ALW",
    To:"SEA",
    Distance:341.208,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"AMA",
    To:"DAL",
    Distance:519.189,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"AMA",
    To:"DAL",
    Distance:519.189,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AMA",
    To:"DEN",
    Distance:578.616,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"AMA",
    To:"DEN",
    Distance:578.616,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AMA",
    To:"DEN",
    Distance:578.616,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AMA",
    To:"DFW",
    Distance:501.516,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AMA",
    To:"DFW",
    Distance:501.516,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AMA",
    To:"IAH",
    Distance:832.841,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AMA",
    To:"LAS",
    Distance:1217.75,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AMA",
    To:"MDW",
    Distance:1414.2,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"AMD",
    To:"AUH",
    Distance:1835.16,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AMD",
    To:"AUH",
    Distance:1835.16,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"AMD",
    To:"BLR",
    Distance:1245.16,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"AMD",
    To:"BOM",
    Distance:444.167,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"AMD",
    To:"BOM",
    Distance:444.167,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"AMD",
    To:"BOM",
    Distance:444.167,
    Airport:"Go Air"
}),
new Routes(
{
    From:"AMD",
    To:"BOM",
    Distance:444.167,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"AMD",
    To:"BOM",
    Distance:444.167,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"AMD",
    To:"BOM",
    Distance:444.167,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"AMD",
    To:"CCU",
    Distance:1619.95,
    Airport:"Go Air"
}),
new Routes(
{
    From:"AMD",
    To:"CCU",
    Distance:1619.95,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"AMD",
    To:"DEL",
    Distance:756.518,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"AMD",
    To:"DEL",
    Distance:756.518,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"AMD",
    To:"DEL",
    Distance:756.518,
    Airport:"Go Air"
}),
new Routes(
{
    From:"AMD",
    To:"DEL",
    Distance:756.518,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"AMD",
    To:"DEL",
    Distance:756.518,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"AMD",
    To:"DEL",
    Distance:756.518,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"AMD",
    To:"DOH",
    Distance:2148.98,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"AMD",
    To:"DWC",
    Distance:1789.73,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"AMD",
    To:"DXB",
    Distance:1767.42,
    Airport:"Emirates"
}),
new Routes(
{
    From:"AMD",
    To:"DXB",
    Distance:1767.42,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"AMD",
    To:"GOI",
    Distance:864.958,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"AMD",
    To:"HYD",
    Distance:872.262,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"AMD",
    To:"HYD",
    Distance:872.262,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"AMD",
    To:"HYD",
    Distance:872.262,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"AMD",
    To:"JAI",
    Distance:525.498,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"AMD",
    To:"KUL",
    Distance:3861.23,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"AMD",
    To:"KWI",
    Distance:2549.54,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"AMD",
    To:"MAA",
    Distance:1375.24,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"AMD",
    To:"MAA",
    Distance:1375.24,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"AMD",
    To:"MCT",
    Distance:1465.66,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"AMD",
    To:"PNQ",
    Distance:517.357,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"AMD",
    To:"PNQ",
    Distance:517.357,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"AMD",
    To:"SHJ",
    Distance:1752.77,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"AMD",
    To:"SIN",
    Distance:4156.73,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"AMH",
    To:"ADD",
    Distance:352.873,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"ADE",
    Distance:2294.71,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"ADE",
    Distance:2294.71,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"AMM",
    To:"ALG",
    Distance:3049.16,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"AMM",
    To:"ALG",
    Distance:3049.16,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"AMS",
    Distance:3402,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"AQJ",
    Distance:252.572,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"ATH",
    Distance:1297.11,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"AUH",
    Distance:1998.18,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AMM",
    To:"AUH",
    Distance:1998.18,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"AUH",
    Distance:1998.18,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"BAH",
    Distance:1545.75,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"AMM",
    To:"BAH",
    Distance:1545.75,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"BCN",
    Distance:3188.64,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"BCN",
    Distance:3188.64,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"BEN",
    Distance:1483.46,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"AMM",
    To:"BEN",
    Distance:1483.46,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"BEN",
    Distance:1483.46,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"BEY",
    Distance:238.054,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"BEY",
    Distance:238.054,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"BEY",
    Distance:238.054,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"AMM",
    To:"BGW",
    Distance:791.449,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"BKK",
    Distance:6840.68,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"BKK",
    Distance:6840.68,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"BOM",
    Distance:3937.92,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"BSR",
    Distance:1117.7,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"CAI",
    Distance:472.37,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"AMM",
    To:"CAI",
    Distance:472.37,
    Airport:"Royal Falcon"
}),
new Routes(
{
    From:"AMM",
    To:"CAI",
    Distance:472.37,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"CDG",
    Distance:3381.24,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMM",
    To:"CDG",
    Distance:3381.24,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"DEL",
    Distance:3945.43,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"DME",
    Distance:2638.03,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"DME",
    Distance:2638.03,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"DMM",
    Distance:1461.35,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"DOH",
    Distance:1680.53,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"AMM",
    To:"DOH",
    Distance:1680.53,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"DWC",
    Distance:2032.57,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"AMM",
    To:"DXB",
    Distance:2021.55,
    Airport:"Emirates"
}),
new Routes(
{
    From:"AMM",
    To:"DXB",
    Distance:2021.55,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"AMM",
    To:"DXB",
    Distance:2021.55,
    Airport:"Qantas"
}),
new Routes(
{
    From:"AMM",
    To:"DXB",
    Distance:2021.55,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"EBL",
    Distance:889.478,
    Airport:"Royal Falcon"
}),
new Routes(
{
    From:"AMM",
    To:"EBL",
    Distance:889.478,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"EBL",
    Distance:889.478,
    Airport:"Zoom Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"FCO",
    Distance:2382.38,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMM",
    To:"FCO",
    Distance:2382.38,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"AMM",
    To:"FCO",
    Distance:2382.38,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"FRA",
    Distance:3045.84,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AMM",
    To:"FRA",
    Distance:3045.84,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"AMM",
    To:"FRA",
    Distance:3045.84,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"GVA",
    Distance:3018.43,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"HBE",
    Distance:604.709,
    Airport:"Air Arabia Egypt"
}),
new Routes(
{
    From:"AMM",
    To:"HOD",
    Distance:2015.86,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"AMM",
    To:"IST",
    Distance:1212.31,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"IST",
    Distance:1212.31,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"ISU",
    Distance:962.085,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"JED",
    Distance:1159.9,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"AMM",
    To:"JED",
    Distance:1159.9,
    Airport:"Royal Falcon"
}),
new Routes(
{
    From:"AMM",
    To:"JED",
    Distance:1159.9,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"JED",
    Distance:1159.9,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"JFK",
    Distance:9214.77,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"JFK",
    Distance:9214.77,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"JFK",
    Distance:9214.77,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AMM",
    To:"KBP",
    Distance:2113.15,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"KRT",
    Distance:1827.46,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"KWI",
    Distance:1180.06,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"AMM",
    To:"KWI",
    Distance:1180.06,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"AMM",
    To:"KWI",
    Distance:1180.06,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"LCA",
    Distance:413.889,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"LHR",
    Distance:3683.28,
    Airport:"British Airways"
}),
new Routes(
{
    From:"AMM",
    To:"LHR",
    Distance:3683.28,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"LOS",
    Distance:4393.12,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"MAD",
    Distance:3652.13,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"MAD",
    Distance:3652.13,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"MCT",
    Distance:2368.34,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"AMM",
    To:"MCT",
    Distance:2368.34,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"MED",
    Distance:876.137,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"AMM",
    To:"MED",
    Distance:876.137,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"MED",
    Distance:876.137,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"MRA",
    Distance:1971.37,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"MUC",
    Distance:2747.19,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AMM",
    To:"MUC",
    Distance:2747.19,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"ORD",
    Distance:10013.8,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"ORD",
    Distance:10013.8,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"ORD",
    Distance:10013.8,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AMM",
    To:"OTP",
    Distance:1667.31,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"OTP",
    Distance:1667.31,
    Airport:"Tarom"
}),
new Routes(
{
    From:"AMM",
    To:"RUH",
    Distance:1288.59,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"AMM",
    To:"RUH",
    Distance:1288.59,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"RUH",
    Distance:1288.59,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"SAH",
    Distance:1989.6,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"SAH",
    Distance:1989.6,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"AMM",
    To:"SHJ",
    Distance:2031.87,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"AMM",
    To:"SSH",
    Distance:444.061,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"TIP",
    Distance:2147.11,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"AMM",
    To:"TIP",
    Distance:2147.11,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"TIP",
    Distance:2147.11,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"TLV",
    Distance:109.32,
    Airport:"Arkia Israel Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"TLV",
    Distance:109.32,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"TUN",
    Distance:2426.82,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"TXL",
    Distance:2952.58,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AMM",
    To:"TXL",
    Distance:2952.58,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"VIE",
    Distance:2448.56,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AMM",
    To:"VIE",
    Distance:2448.56,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"VIE",
    Distance:2448.56,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"YUL",
    Distance:8897.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AMM",
    To:"YUL",
    Distance:8897.01,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMM",
    To:"YUL",
    Distance:8897.01,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AMM",
    To:"ZRH",
    Distance:2905.81,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMQ",
    To:"CGK",
    Distance:2389.35,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"AMQ",
    To:"CGK",
    Distance:2389.35,
    Airport:"Interlink Airlines"
}),
new Routes(
{
    From:"AMQ",
    To:"CGK",
    Distance:2389.35,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"AMQ",
    To:"FKQ",
    Distance:472.027,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"AMQ",
    To:"LUV",
    Distance:558.334,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"AMQ",
    To:"MKW",
    Distance:732.548,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"AMQ",
    To:"NBX",
    Distance:822.956,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"AMQ",
    To:"SOQ",
    Distance:457.478,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"AMQ",
    To:"SUB",
    Distance:1741.7,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"AMQ",
    To:"SUB",
    Distance:1741.7,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"AMQ",
    To:"UPG",
    Distance:958.109,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"AMQ",
    To:"UPG",
    Distance:958.109,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"AMQ",
    To:"UPG",
    Distance:958.109,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"AMS",
    To:"AAL",
    Distance:623.925,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"AAL",
    Distance:623.925,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"ABZ",
    Distance:703.275,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"ACC",
    Distance:5212.87,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"ACE",
    Distance:3005.89,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"ADB",
    Distance:2326.89,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"ADB",
    Distance:2326.89,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AMS",
    To:"ADB",
    Distance:2326.89,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"AES",
    Distance:1142.72,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"AES",
    Distance:1142.72,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"AGP",
    Distance:1883.66,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"AGP",
    Distance:1883.66,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"AGP",
    Distance:1883.66,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"AJA",
    Distance:1194.03,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"ALA",
    Distance:5256.02,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"ALC",
    Distance:1613.16,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"ALC",
    Distance:1613.16,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"ALC",
    Distance:1613.16,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"AMM",
    Distance:3402,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AMS",
    To:"ARN",
    Distance:1152.17,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"ARN",
    Distance:1152.17,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"ARN",
    Distance:1152.17,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AMS",
    To:"ARN",
    Distance:1152.17,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AMS",
    To:"ASR",
    Distance:2795.44,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"ASR",
    Distance:2795.44,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AMS",
    To:"ATH",
    Distance:2181.75,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"ATH",
    Distance:2181.75,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"ATL",
    Distance:7065.79,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"ATL",
    Distance:7065.79,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"AUA",
    Distance:7878.42,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"AMS",
    To:"AUA",
    Distance:7878.42,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"AUH",
    Distance:5191.57,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"AMS",
    To:"AUH",
    Distance:5191.57,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"AUH",
    Distance:5191.57,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"AUH",
    Distance:5191.57,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AMS",
    To:"AUH",
    Distance:5191.57,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"AMS",
    To:"AUH",
    Distance:5191.57,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"AUH",
    Distance:5191.57,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"AMS",
    To:"AYT",
    Distance:2654.81,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"AYT",
    Distance:2654.81,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"BCN",
    Distance:1241.14,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BCN",
    Distance:1241.14,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BCN",
    Distance:1241.14,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BCN",
    Distance:1241.14,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BCN",
    Distance:1241.14,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"BEG",
    Distance:1410.21,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AMS",
    To:"BEG",
    Distance:1410.21,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"AMS",
    To:"BFS",
    Distance:771.04,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"BGO",
    Distance:888.303,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"BGO",
    Distance:888.303,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BHX",
    Distance:442.134,
    Airport:"Flybe"
}),
new Routes(
{
    From:"AMS",
    To:"BHX",
    Distance:442.134,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BIO",
    Distance:1152.51,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BIO",
    Distance:1152.51,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BJV",
    Distance:2444.52,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"BKK",
    Distance:9207.57,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BKK",
    Distance:9207.57,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"AMS",
    To:"BKK",
    Distance:9207.57,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BLL",
    Distance:477.042,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"BLL",
    Distance:477.042,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BLQ",
    Distance:988.46,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"BLQ",
    Distance:988.46,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BLQ",
    Distance:988.46,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BOD",
    Distance:923.69,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"BOD",
    Distance:923.69,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BOD",
    Distance:923.69,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"BOM",
    Distance:6859.52,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"BOM",
    Distance:6859.52,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BON",
    Distance:7792.34,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"AMS",
    To:"BOS",
    Distance:5547.35,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"BOS",
    Distance:5547.35,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BRE",
    Distance:283.33,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"BRE",
    Distance:283.33,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BRI",
    Distance:1538.05,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"BRN",
    Distance:631.223,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"AMS",
    To:"BRS",
    Distance:523.994,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"BRS",
    Distance:523.994,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BRS",
    Distance:523.994,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"BRU",
    Distance:157.661,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BSL",
    Distance:560.644,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"BSL",
    Distance:560.644,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"BSL",
    Distance:560.644,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"BUD",
    Distance:1168.43,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"CAI",
    Distance:3287.3,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"AMS",
    To:"CAI",
    Distance:3287.3,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"CAN",
    Distance:9139.73,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"CAN",
    Distance:9139.73,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"CDG",
    Distance:398.273,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"CDG",
    Distance:398.273,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"CDG",
    Distance:398.273,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"CFE",
    Distance:734.412,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"CFE",
    Distance:734.412,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"AMS",
    To:"CFE",
    Distance:734.412,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"CFU",
    Distance:1827.49,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"CGN",
    Distance:229.641,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"CGN",
    Distance:229.641,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"CHQ",
    Distance:2411.3,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"CMN",
    Distance:2327.11,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"AMS",
    To:"CMN",
    Distance:2327.11,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"CPH",
    Distance:633.383,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"AMS",
    To:"CPH",
    Distance:633.383,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"CPH",
    Distance:633.383,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"CPH",
    Distance:633.383,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"CPH",
    Distance:633.383,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AMS",
    To:"CPH",
    Distance:633.383,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AMS",
    To:"CPT",
    Distance:9687.09,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"CPT",
    Distance:9687.09,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"CTA",
    Distance:1834.88,
    Airport:"Air One"
}),
new Routes(
{
    From:"AMS",
    To:"CTA",
    Distance:1834.88,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"CTA",
    Distance:1834.88,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"CTU",
    Distance:7942.06,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"CTU",
    Distance:7942.06,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"CUR",
    Distance:7834.08,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"AMS",
    To:"CUR",
    Distance:7834.08,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"CWL",
    Distance:565.674,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"CWL",
    Distance:565.674,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"DBV",
    Distance:1480.71,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"DEL",
    Distance:6363.45,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"DFW",
    Distance:7900.1,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"DFW",
    Distance:7900.1,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"DLM",
    Distance:2554.14,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"DMM",
    Distance:4704.77,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"DMM",
    Distance:4704.77,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"DMM",
    Distance:4704.77,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"DOH",
    Distance:4921.35,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"DOH",
    Distance:4921.35,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"DOH",
    Distance:4921.35,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"DTW",
    Distance:6323.6,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"DTW",
    Distance:6323.6,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"DUB",
    Distance:750.16,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"AMS",
    To:"DUS",
    Distance:178.348,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"DUS",
    Distance:178.348,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"DXB",
    Distance:5168.64,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"DXB",
    Distance:5168.64,
    Airport:"Emirates"
}),
new Routes(
{
    From:"AMS",
    To:"DXB",
    Distance:5168.64,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"EBL",
    Distance:3535.45,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"EDI",
    Distance:666.362,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"EDI",
    Distance:666.362,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"EMA",
    Distance:415.665,
    Airport:"Flybe"
}),
new Routes(
{
    From:"AMS",
    To:"EWR",
    Distance:5868.46,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"EWR",
    Distance:5868.46,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"EWR",
    Distance:5868.46,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"AMS",
    To:"EWR",
    Distance:5868.46,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"EXT",
    Distance:591.88,
    Airport:"Flybe"
}),
new Routes(
{
    From:"AMS",
    To:"EZE",
    Distance:11462.2,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"FAO",
    Distance:1969.77,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"FCO",
    Distance:1296.78,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"FCO",
    Distance:1296.78,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"FCO",
    Distance:1296.78,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"FCO",
    Distance:1296.78,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"FLR",
    Distance:1058.34,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"FLR",
    Distance:1058.34,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"FNC",
    Distance:2783.5,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"FRA",
    Distance:365.74,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"FRA",
    Distance:365.74,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"FRA",
    Distance:365.74,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"FRA",
    Distance:365.74,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"AMS",
    To:"FUE",
    Distance:3066.2,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"FUK",
    Distance:9108.67,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"GCI",
    Distance:607.225,
    Airport:"Skynet Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"GDN",
    Distance:936.62,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"AMS",
    To:"GIG",
    Distance:9559.26,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"GLA",
    Distance:717.958,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"GLA",
    Distance:717.958,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"GLA",
    Distance:717.958,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"GOT",
    Distance:763.539,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"GRO",
    Distance:1167.05,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"GRU",
    Distance:9774.4,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"GUW",
    Distance:3370.38,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"AMS",
    To:"GVA",
    Distance:681.998,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"GVA",
    Distance:681.998,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"HAJ",
    Distance:334.358,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"HAJ",
    Distance:334.358,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"HAM",
    Distance:379.356,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"HAM",
    Distance:379.356,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"AMS",
    To:"HAM",
    Distance:379.356,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"HAV",
    Distance:7818.91,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"HEL",
    Distance:1521.31,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"HEL",
    Distance:1521.31,
    Airport:"Finnair"
}),
new Routes(
{
    From:"AMS",
    To:"HEL",
    Distance:1521.31,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"HEL",
    Distance:1521.31,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"HER",
    Distance:2480.93,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"HGH",
    Distance:8922.05,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"HGH",
    Distance:8922.05,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"HKG",
    Distance:9274.4,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"AMS",
    To:"HKG",
    Distance:9274.4,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"HOG",
    Distance:7596.6,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"AMS",
    To:"HRE",
    Distance:8214.56,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"HRE",
    Distance:8214.56,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"HRE",
    Distance:8214.56,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"HUY",
    Distance:370.404,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"HUY",
    Distance:370.404,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"IAD",
    Distance:6207.09,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"IAD",
    Distance:6207.09,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"IAD",
    Distance:6207.09,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"AMS",
    To:"IAD",
    Distance:6207.09,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"IAH",
    Distance:8049.29,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"IAH",
    Distance:8049.29,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"IAH",
    Distance:8049.29,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"AMS",
    To:"IAH",
    Distance:8049.29,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"IBZ",
    Distance:1516.67,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"IBZ",
    Distance:1516.67,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"IBZ",
    Distance:1516.67,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"ICN",
    Distance:8551.96,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"ICN",
    Distance:8551.96,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"AMS",
    To:"IKA",
    Distance:4075.58,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"AMS",
    To:"INN",
    Distance:733.077,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"INV",
    Distance:808.527,
    Airport:"Flybe"
}),
new Routes(
{
    From:"AMS",
    To:"IST",
    Distance:2210.07,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"IST",
    Distance:2210.07,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"JER",
    Distance:598.344,
    Airport:"Skynet Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"JFK",
    Distance:5847.53,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"JFK",
    Distance:5847.53,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"JKH",
    Distance:2265.27,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"JMK",
    Distance:2300.73,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"JNB",
    Distance:9017.3,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"JRO",
    Distance:6901.25,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"JRO",
    Distance:6901.25,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"JRO",
    Distance:6901.25,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"JTR",
    Distance:2400.02,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"KBP",
    Distance:1818.65,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"KBP",
    Distance:1818.65,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"KEF",
    Distance:2037.66,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"AMS",
    To:"KGL",
    Distance:6486.88,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"KGL",
    Distance:6486.88,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"KGL",
    Distance:6486.88,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"KGS",
    Distance:2451.95,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"KIT",
    Distance:2286.37,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"KIX",
    Distance:9240.56,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"KRK",
    Distance:1073.6,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"AMS",
    To:"KRS",
    Distance:688.311,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"KRS",
    Distance:688.311,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"KUL",
    Distance:10236.6,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"KUL",
    Distance:10236.6,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"KUL",
    Distance:10236.6,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"KWI",
    Distance:4355.28,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"KWI",
    Distance:4355.28,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"KWI",
    Distance:4355.28,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"KYA",
    Distance:2672.97,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LAD",
    Distance:6849.25,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LAX",
    Distance:8955.95,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"LAX",
    Distance:8955.95,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LBA",
    Distance:462.463,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"LBA",
    Distance:462.463,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"AMS",
    To:"LBA",
    Distance:462.463,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LCA",
    Distance:2991.62,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"AMS",
    To:"LCA",
    Distance:2991.62,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LCY",
    Distance:335.068,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"LCY",
    Distance:335.068,
    Airport:"British Airways"
}),
new Routes(
{
    From:"AMS",
    To:"LCY",
    Distance:335.068,
    Airport:"CityJet"
}),
new Routes(
{
    From:"AMS",
    To:"LCY",
    Distance:335.068,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LED",
    Distance:1773.43,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LED",
    Distance:1773.43,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LEJ",
    Distance:522.306,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"AMS",
    To:"LGW",
    Distance:364.704,
    Airport:"British Airways"
}),
new Routes(
{
    From:"AMS",
    To:"LGW",
    Distance:364.704,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"LHR",
    Distance:370.194,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LHR",
    Distance:370.194,
    Airport:"British Airways"
}),
new Routes(
{
    From:"AMS",
    To:"LHR",
    Distance:370.194,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LHR",
    Distance:370.194,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LHR",
    Distance:370.194,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LIM",
    Distance:10519.9,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"LIM",
    Distance:10519.9,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LIN",
    Distance:831.082,
    Airport:"Air One"
}),
new Routes(
{
    From:"AMS",
    To:"LIN",
    Distance:831.082,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"LIN",
    Distance:831.082,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LIS",
    Distance:1846.3,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AMS",
    To:"LIS",
    Distance:1846.3,
    Airport:"Finnair"
}),
new Routes(
{
    From:"AMS",
    To:"LIS",
    Distance:1846.3,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LIS",
    Distance:1846.3,
    Airport:"SATA International"
}),
new Routes(
{
    From:"AMS",
    To:"LIS",
    Distance:1846.3,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"AMS",
    To:"LIS",
    Distance:1846.3,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"LIS",
    Distance:1846.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AMS",
    To:"LIS",
    Distance:1846.3,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"LJU",
    Distance:974.431,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"AMS",
    To:"LOS",
    Distance:5086.8,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LPA",
    Distance:3182.78,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"LPI",
    Distance:965.196,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LPL",
    Distance:523.869,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"LTN",
    Distance:353.851,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"LUX",
    Distance:314.97,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"LYS",
    Distance:732.296,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"LYS",
    Distance:732.296,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"MAD",
    Distance:1458.58,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"AMS",
    To:"MAD",
    Distance:1458.58,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"MAD",
    Distance:1458.58,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"MAN",
    Distance:486.718,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"MAN",
    Distance:486.718,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"MAN",
    Distance:486.718,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"MEX",
    Distance:9206.28,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"MLA",
    Distance:1982.85,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"AMS",
    To:"MLA",
    Distance:1982.85,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"MME",
    Distance:477.656,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"MME",
    Distance:477.656,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"MRS",
    Distance:987.204,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"MRS",
    Distance:987.204,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"MSP",
    Distance:6684.89,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"MSP",
    Distance:6684.89,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"MSQ",
    Distance:1556.25,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"MUC",
    Distance:664.168,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"MUC",
    Distance:664.168,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"AMS",
    To:"MXP",
    Distance:796.643,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"NAP",
    Distance:1461.08,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"NBO",
    Distance:6677.42,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"NBO",
    Distance:6677.42,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"NBO",
    Distance:6677.42,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"AMS",
    To:"NCE",
    Distance:978.865,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"NCE",
    Distance:978.865,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"NCE",
    Distance:978.865,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"NCL",
    Distance:522.064,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"NCL",
    Distance:522.064,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"NDR",
    Distance:2022.51,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"AMS",
    To:"NDR",
    Distance:2022.51,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"AMS",
    To:"NRT",
    Distance:9318.79,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"NTE",
    Distance:733.268,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"NTE",
    Distance:733.268,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"NUE",
    Distance:540.959,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"NWI",
    Distance:239.168,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"NWI",
    Distance:239.168,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"OPO",
    Distance:1594.98,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AMS",
    To:"OPO",
    Distance:1594.98,
    Airport:"Finnair"
}),
new Routes(
{
    From:"AMS",
    To:"OPO",
    Distance:1594.98,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"AMS",
    To:"OPO",
    Distance:1594.98,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"ORD",
    Distance:6611.86,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"ORD",
    Distance:6611.86,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"ORD",
    Distance:6611.86,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"AMS",
    To:"ORD",
    Distance:6611.86,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"ORK",
    Distance:906.114,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"AMS",
    To:"OSL",
    Distance:959.183,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"OSL",
    Distance:959.183,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AMS",
    To:"OSL",
    Distance:959.183,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"AMS",
    To:"OTP",
    Distance:1784.23,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"OTP",
    Distance:1784.23,
    Airport:"Tarom"
}),
new Routes(
{
    From:"AMS",
    To:"PBM",
    Distance:7524.42,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"PBM",
    Distance:7524.42,
    Airport:"Surinam Airways"
}),
new Routes(
{
    From:"AMS",
    To:"PDL",
    Distance:2857.15,
    Airport:"SATA International"
}),
new Routes(
{
    From:"AMS",
    To:"PDX",
    Distance:8028.79,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"PDX",
    Distance:8028.79,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"PEK",
    Distance:7827.08,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"PEK",
    Distance:7827.08,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"PFO",
    Distance:2937.79,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"PHL",
    Distance:5997.05,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"PHL",
    Distance:5997.05,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AMS",
    To:"PMI",
    Distance:1426.85,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"PMI",
    Distance:1426.85,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"PMI",
    Distance:1426.85,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"PMO",
    Distance:1698.66,
    Airport:"Air One"
}),
new Routes(
{
    From:"AMS",
    To:"PMO",
    Distance:1698.66,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"PMO",
    Distance:1698.66,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"POP",
    Distance:7293.8,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"AMS",
    To:"PRG",
    Distance:705.007,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"PRG",
    Distance:705.007,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"PRG",
    Distance:705.007,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"AMS",
    To:"PRG",
    Distance:705.007,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"PSA",
    Distance:1045.71,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"PTY",
    Distance:8813.47,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"PTY",
    Distance:8813.47,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"PUJ",
    Distance:7244.71,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"AMS",
    To:"PVG",
    Distance:8910.46,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"PVG",
    Distance:8910.46,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"PVG",
    Distance:8910.46,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"PVK",
    Distance:1931.07,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"RAK",
    Distance:2524.87,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"RHO",
    Distance:2540.9,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"RIX",
    Distance:1333.24,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"AMS",
    To:"RIX",
    Distance:1333.24,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"SAW",
    Distance:2246.49,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"SAW",
    Distance:2246.49,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"SAW",
    Distance:2246.49,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"SEA",
    Distance:7840.01,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"SEA",
    Distance:7840.01,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"SEN",
    Distance:290.638,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"SFB",
    Distance:7257.87,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"AMS",
    To:"SFO",
    Distance:8785.52,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"SFO",
    Distance:8785.52,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"SIN",
    Distance:10513.9,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"SIN",
    Distance:10513.9,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"SKG",
    Distance:1904.81,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"SMI",
    Distance:2364.3,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"SOF",
    Distance:1753.09,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"AMS",
    To:"SOU",
    Distance:448.491,
    Airport:"Flybe"
}),
new Routes(
{
    From:"AMS",
    To:"SPC",
    Distance:3221.41,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"STN",
    Distance:312.881,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"STR",
    Distance:511.01,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"SUF",
    Distance:1732.64,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"SVG",
    Distance:732.391,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"SVG",
    Distance:732.391,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"SVO",
    Distance:2144.35,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"SVO",
    Distance:2144.35,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"SVQ",
    Distance:1852.07,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"SVQ",
    Distance:1852.07,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"SVQ",
    Distance:1852.07,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"SXB",
    Distance:465.673,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"SXB",
    Distance:465.673,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"AMS",
    To:"SXB",
    Distance:465.673,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"SXF",
    Distance:594.668,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AMS",
    To:"SXM",
    Distance:6933.21,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"TBS",
    Distance:3219.96,
    Airport:"Georgian Airways"
}),
new Routes(
{
    From:"AMS",
    To:"TBS",
    Distance:3219.96,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"TFS",
    Distance:3223.92,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"TLL",
    Distance:1471.89,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"AMS",
    To:"TLL",
    Distance:1471.89,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"TLS",
    Distance:997.47,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"TLS",
    Distance:997.47,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"TLV",
    Distance:3311.99,
    Airport:"Arkia Israel Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"TLV",
    Distance:3311.99,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"TLV",
    Distance:3311.99,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"TLV",
    Distance:3311.99,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"TNG",
    Distance:2026.96,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"AMS",
    To:"TNG",
    Distance:2026.96,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"AMS",
    To:"TPE",
    Distance:9442.5,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"TPE",
    Distance:9442.5,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"TRD",
    Distance:1290.66,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"TRD",
    Distance:1290.66,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"TRF",
    Distance:837.894,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"TRF",
    Distance:837.894,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"TRN",
    Distance:818.004,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"TUN",
    Distance:1771.15,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"AMS",
    To:"TXL",
    Distance:578.188,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"TXL",
    Distance:578.188,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"UIO",
    Distance:9561.9,
    Airport:"Air France"
}),
new Routes(
{
    From:"AMS",
    To:"UIO",
    Distance:9561.9,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"VCE",
    Distance:936.914,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AMS",
    To:"VCE",
    Distance:936.914,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"VCE",
    Distance:936.914,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"VIE",
    Distance:959.483,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"VIE",
    Distance:959.483,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"VLC",
    Distance:1481.11,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"VLC",
    Distance:1481.11,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"VLC",
    Distance:1481.11,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"VRA",
    Distance:7750.34,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"AMS",
    To:"VRN",
    Distance:889.028,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AMS",
    To:"VXE",
    Distance:4729.43,
    Airport:"TACV"
}),
new Routes(
{
    From:"AMS",
    To:"VXO",
    Distance:820.537,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"AMS",
    To:"WAW",
    Distance:1101.17,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"WAW",
    Distance:1101.17,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"XMN",
    Distance:9317.17,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"XMN",
    Distance:9317.17,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"YUL",
    Distance:5503.14,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"YUL",
    Distance:5503.14,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"YVR",
    Distance:7707.27,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"YVR",
    Distance:7707.27,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"YYC",
    Distance:7167.64,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"AMS",
    To:"YYC",
    Distance:7167.64,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"YYC",
    Distance:7167.64,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"YYZ",
    Distance:5989.66,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"AMS",
    To:"YYZ",
    Distance:5989.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"YYZ",
    Distance:5989.66,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"ZAG",
    Distance:1098.85,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"ZRH",
    Distance:602.832,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"ZRH",
    Distance:602.832,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"AMS",
    To:"ZRH",
    Distance:602.832,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"AMS",
    To:"ZTH",
    Distance:2045.77,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"ANC",
    To:"ADK",
    Distance:1913.26,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"ADQ",
    Distance:406.006,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"ADQ",
    Distance:406.006,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANC",
    To:"AKN",
    Distance:462.847,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"AKN",
    Distance:462.847,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"ANC",
    To:"ANI",
    Distance:510.056,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"ANI",
    Distance:510.056,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANC",
    To:"ANI",
    Distance:510.056,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"ANC",
    To:"BET",
    Distance:639.448,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"BET",
    Distance:639.448,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANC",
    To:"BRW",
    Distance:1162.79,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"CDB",
    Distance:995.469,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"CDB",
    Distance:995.469,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"ANC",
    To:"CDV",
    Distance:256.313,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"CDV",
    Distance:256.313,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANC",
    To:"DEN",
    Distance:3863.06,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"DLG",
    Distance:527.11,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"DLG",
    Distance:527.11,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"ANC",
    To:"ENA",
    Distance:95.0585,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"ANC",
    To:"ENA",
    Distance:95.0585,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"ENA",
    Distance:95.0585,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANC",
    To:"FAI",
    Distance:418.946,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"FAI",
    Distance:418.946,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANC",
    To:"HNL",
    Distance:4474.24,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"HOM",
    Distance:188.414,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"HOM",
    Distance:188.414,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANC",
    To:"ILI",
    Distance:312.143,
    Airport:"Alaska Central Express"
}),
new Routes(
{
    From:"ANC",
    To:"JNU",
    Distance:915.929,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"KSM",
    Distance:708.878,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"KSM",
    Distance:708.878,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANC",
    To:"LAS",
    Distance:3703.49,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"LAX",
    Distance:3770.81,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"LAX",
    Distance:3770.81,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"MCG",
    Distance:352.668,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"MCG",
    Distance:352.668,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"ANC",
    To:"MSP",
    Distance:4042.02,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ANC",
    To:"OME",
    Distance:864.532,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"ORD",
    Distance:4568.39,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"ORD",
    Distance:4568.39,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"OTZ",
    Distance:879.917,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"PDX",
    Distance:2476.77,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"PHX",
    Distance:4101.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"PHX",
    Distance:4101.46,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ANC",
    To:"SCC",
    Distance:1005.39,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"SDP",
    Distance:894.592,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"SDP",
    Distance:894.592,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"ANC",
    To:"SEA",
    Distance:2325.64,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"SEA",
    Distance:2325.64,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ANC",
    To:"SEA",
    Distance:2325.64,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"SLC",
    Distance:3412.98,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ANC",
    To:"SNP",
    Distance:1229.42,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"SNP",
    Distance:1229.42,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"ANC",
    To:"STG",
    Distance:1234.34,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"STG",
    Distance:1234.34,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"ANC",
    To:"UNK",
    Distance:629.8,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"UNK",
    Distance:629.8,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANC",
    To:"UNK",
    Distance:629.8,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"ANC",
    To:"VDZ",
    Distance:201.091,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANC",
    To:"VDZ",
    Distance:201.091,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANF",
    To:"CJC",
    Distance:189.677,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"ANF",
    To:"CJC",
    Distance:189.677,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"ANF",
    To:"IQQ",
    Distance:324.636,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"ANF",
    To:"IQQ",
    Distance:324.636,
    Airport:"Pal airlines"
}),
new Routes(
{
    From:"ANF",
    To:"IQQ",
    Distance:324.636,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"ANF",
    To:"LIM",
    Distance:1452.57,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"ANF",
    To:"LSC",
    Distance:723.512,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"ANF",
    To:"LSC",
    Distance:723.512,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"ANF",
    To:"SCL",
    Distance:1106.72,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"ANF",
    To:"SCL",
    Distance:1106.72,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"ANF",
    To:"SCL",
    Distance:1106.72,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"ANG",
    To:"FSC",
    Distance:854.619,
    Airport:"Luxair"
}),
new Routes(
{
    From:"ANI",
    To:"ANC",
    Distance:510.056,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANI",
    To:"ANC",
    Distance:510.056,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANI",
    To:"ANC",
    Distance:510.056,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"ANI",
    To:"CHU",
    Distance:17.3306,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANI",
    To:"HCR",
    Distance:68.5484,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANI",
    To:"KLG",
    Distance:42.5586,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANI",
    To:"MCG",
    Distance:254.392,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ANI",
    To:"MCG",
    Distance:254.392,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"ANI",
    To:"RSH",
    Distance:96.1457,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANI",
    To:"SHX",
    Distance:123.503,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANM",
    To:"TMM",
    Distance:359.682,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"ANM",
    To:"TNR",
    Distance:519.285,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"ANM",
    To:"WMN",
    Distance:83.4314,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"ANR",
    To:"LCY",
    Distance:307.898,
    Airport:"Air France"
}),
new Routes(
{
    From:"ANR",
    To:"LCY",
    Distance:307.898,
    Airport:"CityJet"
}),
new Routes(
{
    From:"ANS",
    To:"LIM",
    Distance:448.947,
    Airport:"AeroWorld "
}),
new Routes(
{
    From:"ANU",
    To:"AXA",
    Distance:178.868,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"ANU",
    To:"BGI",
    Distance:514.751,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"ANU",
    To:"BGI",
    Distance:514.751,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"ANU",
    To:"CLT",
    Distance:2762.85,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ANU",
    To:"CLT",
    Distance:2762.85,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ANU",
    To:"DOM",
    Distance:184.419,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"ANU",
    To:"EWR",
    Distance:2875.91,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ANU",
    To:"FRA",
    Distance:7158.8,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"ANU",
    To:"JFK",
    Distance:2855.47,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ANU",
    To:"JFK",
    Distance:2855.47,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ANU",
    To:"KIN",
    Distance:1591.91,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"ANU",
    To:"LGW",
    Distance:6564.03,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ANU",
    To:"LGW",
    Distance:6564.03,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ANU",
    To:"LGW",
    Distance:6564.03,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ANU",
    To:"MIA",
    Distance:2139.2,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ANU",
    To:"MIA",
    Distance:2139.2,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ANU",
    To:"NEV",
    Distance:85.0397,
    Airport:"Sibaviatrans"
}),
new Routes(
{
    From:"ANU",
    To:"PTP",
    Distance:100.804,
    Airport:"Air Antilles Express"
}),
new Routes(
{
    From:"ANU",
    To:"PTP",
    Distance:100.804,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"ANU",
    To:"PUJ",
    Distance:713.36,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ANU",
    To:"PUJ",
    Distance:713.36,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ANU",
    To:"SBH",
    Distance:139.288,
    Airport:"PAN Air"
}),
new Routes(
{
    From:"ANU",
    To:"SBH",
    Distance:139.288,
    Airport:"T.J. Air"
}),
new Routes(
{
    From:"ANU",
    To:"SDQ",
    Distance:846.171,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"ANU",
    To:"SJU",
    Distance:468.59,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"ANU",
    To:"SKB",
    Distance:100.243,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ANU",
    To:"SKB",
    Distance:100.243,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ANU",
    To:"SKB",
    Distance:100.243,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"ANU",
    To:"SLU",
    Distance:356.968,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"ANU",
    To:"SXM",
    Distance:171.968,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"ANU",
    To:"TAB",
    Distance:673.733,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ANU",
    To:"TAB",
    Distance:673.733,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ANU",
    To:"UVF",
    Distance:389.018,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ANU",
    To:"YYZ",
    Distance:3394.39,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ANU",
    To:"YYZ",
    Distance:3394.39,
    Airport:"WestJet"
}),
new Routes(
{
    From:"ANV",
    To:"HCR",
    Distance:55.2886,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANV",
    To:"KGX",
    Distance:28.2839,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ANX",
    To:"BOO",
    Distance:236.568,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"ANX",
    To:"EVE",
    Distance:91.6183,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"ANX",
    To:"TOS",
    Distance:116.508,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"AOE",
    To:"BRU",
    Distance:2360.18,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AOI",
    To:"AHO",
    Distance:533.725,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AOI",
    To:"CRL",
    Distance:1015.77,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AOI",
    To:"CTA",
    Distance:698.758,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"AOI",
    To:"DUS",
    Distance:985.931,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"AOI",
    To:"FCO",
    Distance:220.989,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AOI",
    To:"MUC",
    Distance:540.634,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"AOI",
    To:"NRN",
    Distance:1038.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AOI",
    To:"STN",
    Distance:1341.07,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AOI",
    To:"TPS",
    Distance:638.613,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"AOI",
    To:"TXL",
    Distance:994.465,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"AOJ",
    To:"CTS",
    Distance:241.615,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"AOJ",
    To:"HND",
    Distance:581.736,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"AOJ",
    To:"ICN",
    Distance:1279.64,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"AOJ",
    To:"ITM",
    Distance:806.368,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"AOJ",
    To:"NKM",
    Distance:692.801,
    Airport:"Fuji Dream Airlines"
}),
new Routes(
{
    From:"AOK",
    To:"ATH",
    Distance:399.594,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"AOK",
    To:"ATH",
    Distance:399.594,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"AOK",
    To:"KSJ",
    Distance:21.3814,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"AOK",
    To:"KSJ",
    Distance:21.3814,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"AOK",
    To:"RHO",
    Distance:138.35,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"AOK",
    To:"RHO",
    Distance:138.35,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"AOO",
    To:"IAD",
    Distance:167.552,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AOO",
    To:"JST",
    Distance:43.6296,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AOR",
    To:"KUL",
    Distance:409.636,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"AOR",
    To:"KUL",
    Distance:409.636,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"AOR",
    To:"SZB",
    Distance:363.287,
    Airport:"Firefly"
}),
new Routes(
{
    From:"AOR",
    To:"SZB",
    Distance:363.287,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"AOR",
    To:"SZB",
    Distance:363.287,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"AOS",
    To:"KZB",
    Distance:9.57126,
    Airport:"Air Salone"
}),
new Routes(
{
    From:"APF",
    To:"MIA",
    Distance:153.705,
    Airport:"Chitaavia"
}),
new Routes(
{
    From:"APL",
    To:"BEW",
    Distance:697.995,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"APL",
    To:"JNB",
    Distance:1678.67,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"APL",
    To:"JNB",
    Distance:1678.67,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"APL",
    To:"MPM",
    Distance:1390.08,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"APL",
    To:"NBO",
    Distance:1554.61,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"APL",
    To:"POL",
    Distance:270.96,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"APL",
    To:"POL",
    Distance:270.96,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"APL",
    To:"TET",
    Distance:614.299,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"APL",
    To:"VXC",
    Distance:478.378,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"APN",
    To:"DTW",
    Distance:319.081,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"APN",
    To:"MSP",
    Distance:759.775,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"APO",
    To:"BOG",
    Distance:425.716,
    Airport:"SATENA"
}),
new Routes(
{
    From:"APO",
    To:"EOH",
    Distance:199.437,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"APO",
    To:"EOH",
    Distance:199.437,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"APO",
    To:"EOH",
    Distance:199.437,
    Airport:"SATENA"
}),
new Routes(
{
    From:"APW",
    To:"AKL",
    Distance:2891,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"APW",
    To:"AKL",
    Distance:2891,
    Airport:"US Airways"
}),
new Routes(
{
    From:"APW",
    To:"AKL",
    Distance:2891,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"APW",
    To:"HNL",
    Distance:4199.97,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"APW",
    To:"NAN",
    Distance:1209.74,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"AQA",
    To:"VCP",
    Distance:167.953,
    Airport:"Azul"
}),
new Routes(
{
    From:"AQG",
    To:"CAN",
    Distance:881.467,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"AQG",
    To:"CKG",
    Distance:1005.01,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"AQG",
    To:"HAK",
    Distance:1356.04,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"AQG",
    To:"PEK",
    Distance:1056.96,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"AQG",
    To:"SHA",
    Distance:414.653,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"AQG",
    To:"WUH",
    Distance:272.7,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"AQG",
    To:"XMN",
    Distance:679.749,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"AQI",
    To:"JED",
    Distance:1019.71,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AQI",
    To:"RUH",
    Distance:379.868,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AQJ",
    To:"AMM",
    Distance:252.572,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AQJ",
    To:"IST",
    Distance:1382.52,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AQP",
    To:"CUZ",
    Distance:314.272,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AQP",
    To:"JUL",
    Distance:180.728,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"AQP",
    To:"JUL",
    Distance:180.728,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AQP",
    To:"LIM",
    Distance:765.519,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AQP",
    To:"LIM",
    Distance:765.519,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AQP",
    To:"LIM",
    Distance:765.519,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AQP",
    To:"LIM",
    Distance:765.519,
    Airport:"Peruvian Airlines"
}),
new Routes(
{
    From:"AQP",
    To:"LIM",
    Distance:765.519,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"AQP",
    To:"LPB",
    Distance:362.154,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"AQP",
    To:"TCQ",
    Distance:235.649,
    Airport:"Peruvian Airlines"
}),
new Routes(
{
    From:"ARC",
    To:"VEE",
    Distance:127.448,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"ARH",
    To:"CSH",
    Distance:235.263,
    Airport:"Aeroflot-Nord"
}),
new Routes(
{
    From:"ARH",
    To:"LED",
    Distance:731.465,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ARH",
    To:"LED",
    Distance:731.465,
    Airport:"Aeroflot-Nord"
}),
new Routes(
{
    From:"ARH",
    To:"MMK",
    Distance:596.545,
    Airport:"Aeroflot-Nord"
}),
new Routes(
{
    From:"ARH",
    To:"NNM",
    Distance:663.023,
    Airport:"Aeroflot-Nord"
}),
new Routes(
{
    From:"ARH",
    To:"NNM",
    Distance:663.023,
    Airport:"UTair-Express"
}),
new Routes(
{
    From:"ARH",
    To:"SVO",
    Distance:947.195,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ARH",
    To:"SVO",
    Distance:947.195,
    Airport:"Aeroflot-Nord"
}),
new Routes(
{
    From:"ARH",
    To:"USK",
    Distance:802.028,
    Airport:"Aeroflot-Nord"
}),
new Routes(
{
    From:"ARI",
    To:"ANF",
    Distance:566.751,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"ARI",
    To:"IQQ",
    Distance:243.709,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"ARI",
    To:"IQQ",
    Distance:243.709,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"ARI",
    To:"LPB",
    Distance:305.763,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"ARI",
    To:"SCL",
    Distance:1673.46,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"ARK",
    To:"ZNZ",
    Distance:427.984,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"ARM",
    To:"SYD",
    Distance:382.315,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ARM",
    To:"SYD",
    Distance:382.315,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"ARN",
    To:"AAL",
    Distance:549.349,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"ADB",
    Distance:2463.48,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ARN",
    To:"ADD",
    Distance:5900.19,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"ADD",
    Distance:5900.19,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"AGH",
    Distance:477.924,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"AGP",
    Distance:3015.84,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"AGP",
    Distance:3015.84,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"AJA",
    Distance:2068.33,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"ALC",
    Distance:2711.3,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"ALC",
    Distance:2711.3,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"AMS",
    Distance:1152.17,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ARN",
    To:"AMS",
    Distance:1152.17,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"AMS",
    Distance:1152.17,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"AMS",
    Distance:1152.17,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"ATH",
    Distance:2452.3,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"ATH",
    Distance:2452.3,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"BCN",
    Distance:2314.93,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"BCN",
    Distance:2314.93,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"BCN",
    Distance:2314.93,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"BCN",
    Distance:2314.93,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"BEG",
    Distance:1657.15,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"ARN",
    To:"BEG",
    Distance:1657.15,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"ARN",
    To:"BEG",
    Distance:1657.15,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"BGO",
    Distance:709.171,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"BGO",
    Distance:709.171,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"BGW",
    Distance:3510.32,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"BHX",
    Distance:1451.53,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"BKK",
    Distance:8296.22,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"BKK",
    Distance:8296.22,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"BKK",
    Distance:8296.22,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"ARN",
    To:"BLL",
    Distance:677.721,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"BLQ",
    Distance:1738.75,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"BRU",
    Distance:1287.77,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"BUD",
    Distance:1361.05,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"CDG",
    Distance:1539.16,
    Airport:"Air France"
}),
new Routes(
{
    From:"ARN",
    To:"CDG",
    Distance:1539.16,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ARN",
    To:"CDG",
    Distance:1539.16,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"CGN",
    Distance:1188.77,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"ARN",
    To:"CHQ",
    Distance:2719.67,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"CMN",
    Distance:3467.94,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"ARN",
    To:"CPH",
    Distance:546.758,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"CPH",
    Distance:546.758,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"CPH",
    Distance:546.758,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"CTA",
    Distance:2475.25,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"DBV",
    Distance:1900.54,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"DBV",
    Distance:1900.54,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"DOH",
    Distance:4617.48,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ARN",
    To:"DUB",
    Distance:1624.75,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ARN",
    To:"DUB",
    Distance:1624.75,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"DUS",
    Distance:1162.41,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"ARN",
    To:"DUS",
    Distance:1162.41,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ARN",
    To:"DUS",
    Distance:1162.41,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"DXB",
    Distance:4785.12,
    Airport:"Emirates"
}),
new Routes(
{
    From:"ARN",
    To:"DXB",
    Distance:4785.12,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ARN",
    To:"EBL",
    Distance:3202.86,
    Airport:"Germania"
}),
new Routes(
{
    From:"ARN",
    To:"EBL",
    Distance:3202.86,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"EBL",
    Distance:3202.86,
    Airport:"Zoom Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"EDI",
    Distance:1320.25,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"EDI",
    Distance:1320.25,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"EVG",
    Distance:326.737,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"EWR",
    Distance:6307.18,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"EWR",
    Distance:6307.18,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"FAO",
    Distance:3119.74,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"FCO",
    Distance:2022.47,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"FCO",
    Distance:2022.47,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"FLL",
    Distance:7962.14,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"FRA",
    Distance:1224.53,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"FRA",
    Distance:1224.53,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ARN",
    To:"FRA",
    Distance:1224.53,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"GEV",
    Distance:843.972,
    Airport:"NextJet"
}),
new Routes(
{
    From:"ARN",
    To:"GEV",
    Distance:843.972,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"GOT",
    Distance:393.862,
    Airport:"Air China"
}),
new Routes(
{
    From:"ARN",
    To:"GOT",
    Distance:393.862,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"GOT",
    Distance:393.862,
    Airport:"Nouvel Air Tunisie"
}),
new Routes(
{
    From:"ARN",
    To:"GOT",
    Distance:393.862,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"GVA",
    Distance:1682.71,
    Airport:"Air China"
}),
new Routes(
{
    From:"ARN",
    To:"GVA",
    Distance:1682.71,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"GVA",
    Distance:1682.71,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ARN",
    To:"GVA",
    Distance:1682.71,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ARN",
    To:"HAD",
    Distance:444.48,
    Airport:"NextJet"
}),
new Routes(
{
    From:"ARN",
    To:"HAM",
    Distance:825.509,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"ARN",
    To:"HAM",
    Distance:825.509,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"HEL",
    Distance:398.569,
    Airport:"Air China"
}),
new Routes(
{
    From:"ARN",
    To:"HEL",
    Distance:398.569,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"HEL",
    Distance:398.569,
    Airport:"Finnair"
}),
new Routes(
{
    From:"ARN",
    To:"HEL",
    Distance:398.569,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"HEL",
    Distance:398.569,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"HFS",
    Distance:245.856,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"IKA",
    Distance:3600.47,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"ARN",
    To:"IKA",
    Distance:3600.47,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"IST",
    Distance:2209.31,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"IST",
    Distance:2209.31,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"ISU",
    Distance:3325.97,
    Airport:"Germania"
}),
new Routes(
{
    From:"ARN",
    To:"ISU",
    Distance:3325.97,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"JFK",
    Distance:6291.98,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"JKG",
    Distance:306.208,
    Airport:"NextJet"
}),
new Routes(
{
    From:"ARN",
    To:"KEF",
    Distance:2142.5,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"ARN",
    To:"KID",
    Distance:472.757,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"KLR",
    Distance:343.413,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"KLX",
    Distance:2528.3,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"KLX",
    Distance:2528.3,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"KRF",
    Distance:377.775,
    Airport:"NextJet"
}),
new Routes(
{
    From:"ARN",
    To:"KRF",
    Distance:377.775,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"KRK",
    Distance:1071.17,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"KRN",
    Distance:916.05,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"KRN",
    Distance:916.05,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"KSD",
    Distance:259.148,
    Airport:"NextJet"
}),
new Routes(
{
    From:"ARN",
    To:"LAX",
    Distance:8863.03,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"LCA",
    Distance:2981.66,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"LCY",
    Distance:1434.81,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ARN",
    To:"LED",
    Distance:691.159,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"LED",
    Distance:691.159,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"LGW",
    Distance:1475.35,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"LHR",
    Distance:1461.97,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"LHR",
    Distance:1461.97,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ARN",
    To:"LHR",
    Distance:1461.97,
    Airport:"Finnair"
}),
new Routes(
{
    From:"ARN",
    To:"LHR",
    Distance:1461.97,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"LHR",
    Distance:1461.97,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"LHR",
    Distance:1461.97,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"ARN",
    To:"LIN",
    Distance:1681.02,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"LIS",
    Distance:2998.31,
    Airport:"SATA International"
}),
new Routes(
{
    From:"ARN",
    To:"LIS",
    Distance:2998.31,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"ARN",
    To:"LLA",
    Distance:689.179,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"LLA",
    Distance:689.179,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"LPA",
    Distance:4334.94,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"LUX",
    Distance:1341.22,
    Airport:"Luxair"
}),
new Routes(
{
    From:"ARN",
    To:"LYC",
    Distance:546.021,
    Airport:"NextJet"
}),
new Routes(
{
    From:"ARN",
    To:"LYC",
    Distance:546.021,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"MAD",
    Distance:2599.39,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"MAD",
    Distance:2599.39,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"MAN",
    Distance:1415.28,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"MAN",
    Distance:1415.28,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"MAN",
    Distance:1415.28,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"ARN",
    To:"MHQ",
    Distance:122.181,
    Airport:"NextJet"
}),
new Routes(
{
    From:"ARN",
    To:"MLA",
    Distance:2657.46,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"MMX",
    Distance:532.157,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"MMX",
    Distance:532.157,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"MSQ",
    Distance:887.724,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"MUC",
    Distance:1317.32,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ARN",
    To:"MUC",
    Distance:1317.32,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"MUC",
    Distance:1317.32,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"MXX",
    Distance:237.255,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"NCE",
    Distance:1919.96,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"NCE",
    Distance:1919.96,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"OAK",
    Distance:8586.47,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"OER",
    Distance:421.52,
    Airport:"NextJet"
}),
new Routes(
{
    From:"ARN",
    To:"OLB",
    Distance:2165.01,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"ORD",
    Distance:6855.69,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"ORY",
    Distance:1573.47,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"OSD",
    Distance:433.696,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"OSL",
    Distance:384.53,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"OSL",
    Distance:384.53,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"OSL",
    Distance:384.53,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"OUL",
    Distance:700.615,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"PEK",
    Distance:6690.93,
    Airport:"Air China"
}),
new Routes(
{
    From:"ARN",
    To:"PEK",
    Distance:6690.93,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"PMI",
    Distance:2474.9,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"PMI",
    Distance:2474.9,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"PMO",
    Distance:2412.42,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"POR",
    Distance:292.321,
    Airport:"NextJet"
}),
new Routes(
{
    From:"ARN",
    To:"PRG",
    Distance:1087.1,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"PRG",
    Distance:1087.1,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"PRG",
    Distance:1087.1,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"PRG",
    Distance:1087.1,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"ARN",
    To:"PSA",
    Distance:1847.05,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"PUY",
    Distance:1662.69,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"RIX",
    Distance:465.721,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"ARN",
    To:"RIX",
    Distance:465.721,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"RIX",
    Distance:465.721,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"RNB",
    Distance:407.598,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"SAW",
    Distance:2229.55,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"SDL",
    Distance:320.831,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"SFT",
    Distance:576.619,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"SJJ",
    Distance:1760.14,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"SKG",
    Distance:2156.23,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"SKG",
    Distance:2156.23,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"SPU",
    Distance:1795.04,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"SPU",
    Distance:1795.04,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"SVG",
    Distance:702.178,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"SVO",
    Distance:1219.76,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"SVO",
    Distance:1219.76,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"SXF",
    Distance:853.058,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"TKU",
    Distance:259.233,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"TKU",
    Distance:259.233,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"ARN",
    To:"TLL",
    Distance:390.556,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"ARN",
    To:"TLL",
    Distance:390.556,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"TLV",
    Distance:3320.53,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"TMP",
    Distance:367.399,
    Airport:"Air China"
}),
new Routes(
{
    From:"ARN",
    To:"TMP",
    Distance:367.399,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"TMP",
    Distance:367.399,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"ARN",
    To:"TOS",
    Distance:1116.42,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"TRD",
    Distance:561.787,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"TRF",
    Distance:436.158,
    Airport:"NextJet"
}),
new Routes(
{
    From:"ARN",
    To:"TXL",
    Distance:838.778,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ARN",
    To:"TXL",
    Distance:838.778,
    Airport:"Finnair"
}),
new Routes(
{
    From:"ARN",
    To:"TXL",
    Distance:838.778,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"TXL",
    Distance:838.778,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ARN",
    To:"TXL",
    Distance:838.778,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"UME",
    Distance:476.801,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"UME",
    Distance:476.801,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"VAA",
    Distance:429.721,
    Airport:"Air China"
}),
new Routes(
{
    From:"ARN",
    To:"VAA",
    Distance:429.721,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"VAA",
    Distance:429.721,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"VAA",
    Distance:429.721,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"ARN",
    To:"VBY",
    Distance:222.56,
    Airport:"NextJet"
}),
new Routes(
{
    From:"ARN",
    To:"VBY",
    Distance:222.56,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"VCE",
    Distance:1615.99,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"VHM",
    Distance:550.75,
    Airport:"NextJet"
}),
new Routes(
{
    From:"ARN",
    To:"VHM",
    Distance:550.75,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"VIE",
    Distance:1286.35,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"ARN",
    To:"VIE",
    Distance:1286.35,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"VIE",
    Distance:1286.35,
    Airport:"Finnair"
}),
new Routes(
{
    From:"ARN",
    To:"VIE",
    Distance:1286.35,
    Airport:"Niki"
}),
new Routes(
{
    From:"ARN",
    To:"VNO",
    Distance:712.475,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ARN",
    To:"VNO",
    Distance:712.475,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"VXO",
    Distance:355.491,
    Airport:"NextJet"
}),
new Routes(
{
    From:"ARN",
    To:"WAW",
    Distance:853.605,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"ARN",
    To:"ZRH",
    Distance:1486.43,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ARN",
    To:"ZRH",
    Distance:1486.43,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ART",
    To:"ORD",
    Distance:991.225,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ART",
    To:"ORD",
    Distance:991.225,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ART",
    To:"PHL",
    Distance:462.642,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ART",
    To:"PHL",
    Distance:462.642,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ARU",
    To:"GRU",
    Distance:480.045,
    Airport:"Azul"
}),
new Routes(
{
    From:"ARU",
    To:"VCP",
    Distance:397.48,
    Airport:"Azul"
}),
new Routes(
{
    From:"ARW",
    To:"BGY",
    Distance:894.915,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"ASB",
    To:"ATQ",
    Distance:1651.14,
    Airport:"Turkmenistan Airlines"
}),
new Routes(
{
    From:"ASB",
    To:"BHX",
    Distance:4818.67,
    Airport:"Turkmenistan Airlines"
}),
new Routes(
{
    From:"ASB",
    To:"DEL",
    Distance:2027.06,
    Airport:"Turkmenistan Airlines"
}),
new Routes(
{
    From:"ASB",
    To:"DME",
    Distance:2467.8,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"ASB",
    To:"DME",
    Distance:2467.8,
    Airport:"Turkmenistan Airlines"
}),
new Routes(
{
    From:"ASB",
    To:"DXB",
    Distance:1443.86,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"ASB",
    To:"DXB",
    Distance:1443.86,
    Airport:"Turkmenistan Airlines"
}),
new Routes(
{
    From:"ASB",
    To:"FRA",
    Distance:4117.07,
    Airport:"Turkmenistan Airlines"
}),
new Routes(
{
    From:"ASB",
    To:"GYD",
    Distance:767.059,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ASB",
    To:"GYD",
    Distance:767.059,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ASB",
    To:"IST",
    Distance:2545.17,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ASB",
    To:"IST",
    Distance:2545.17,
    Airport:"Turkmenistan Airlines"
}),
new Routes(
{
    From:"ASB",
    To:"LHR",
    Distance:4741.07,
    Airport:"Turkmenistan Airlines"
}),
new Routes(
{
    From:"ASB",
    To:"MSQ",
    Distance:2900.04,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"ASB",
    To:"URC",
    Distance:2517.72,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"ASE",
    To:"DEN",
    Distance:201.22,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ASE",
    To:"LAX",
    Distance:1184.51,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ASF",
    To:"DME",
    Distance:1235.23,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"ASF",
    To:"DME",
    Distance:1235.23,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"ASF",
    To:"KZN",
    Distance:1040.43,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"ASF",
    To:"LED",
    Distance:1902.07,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"ASF",
    To:"MRV",
    Distance:448.168,
    Airport:"Aerocondor"
}),
new Routes(
{
    From:"ASF",
    To:"SAW",
    Distance:1615.59,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ASF",
    To:"SCO",
    Distance:362.327,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"ASF",
    To:"SVO",
    Distance:1303.4,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ASJ",
    To:"HND",
    Distance:1235.03,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ASJ",
    To:"ITM",
    Distance:890.291,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"ASM",
    To:"ADE",
    Distance:714.393,
    Airport:"Nasair"
}),
new Routes(
{
    From:"ASM",
    To:"CAI",
    Distance:1818.46,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ASM",
    To:"JED",
    Distance:710.754,
    Airport:"Nasair"
}),
new Routes(
{
    From:"ASM",
    To:"JUB",
    Distance:1407.43,
    Airport:"Nasair"
}),
new Routes(
{
    From:"ASM",
    To:"KRT",
    Distance:682.185,
    Airport:"Nasair"
}),
new Routes(
{
    From:"ASM",
    To:"NBO",
    Distance:1859.89,
    Airport:"Nasair"
}),
new Routes(
{
    From:"ASM",
    To:"SAH",
    Distance:569.544,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"ASO",
    To:"ADD",
    Distance:476.309,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"ASP",
    To:"ADL",
    Distance:1316.74,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ASP",
    To:"AYQ",
    Distance:333.489,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ASP",
    To:"BNE",
    Distance:1965.41,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ASP",
    To:"CNS",
    Distance:1454.67,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ASP",
    To:"DRW",
    Distance:1307.08,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ASP",
    To:"MEL",
    Distance:1859.83,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ASP",
    To:"MEL",
    Distance:1859.83,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"ASP",
    To:"PER",
    Distance:1977.55,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ASP",
    To:"SYD",
    Distance:2020.22,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ASP",
    To:"SYD",
    Distance:2020.22,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ASP",
    To:"SYD",
    Distance:2020.22,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"ASR",
    To:"ADB",
    Distance:727.006,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ASR",
    To:"ADB",
    Distance:727.006,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ASR",
    To:"AMS",
    Distance:2795.44,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"ASR",
    To:"DUS",
    Distance:2626.72,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ASR",
    To:"IST",
    Distance:620.457,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ASR",
    To:"SAW",
    Distance:578.622,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ASR",
    To:"SAW",
    Distance:578.622,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ASU",
    To:"AEP",
    Distance:1039.84,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"ASU",
    To:"AGT",
    Distance:269.927,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"ASU",
    To:"AGT",
    Distance:269.927,
    Airport:"TAM Mercosur"
}),
new Routes(
{
    From:"ASU",
    To:"EZE",
    Distance:1069.98,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"ASU",
    To:"EZE",
    Distance:1069.98,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"ASU",
    To:"EZE",
    Distance:1069.98,
    Airport:"TAM Mercosur"
}),
new Routes(
{
    From:"ASU",
    To:"GRU",
    Distance:1137.03,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"ASU",
    To:"GRU",
    Distance:1137.03,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"ASU",
    To:"GRU",
    Distance:1137.03,
    Airport:"TAM Mercosur"
}),
new Routes(
{
    From:"ASU",
    To:"LIM",
    Distance:2528.53,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"ASU",
    To:"MIA",
    Distance:6179.15,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ASU",
    To:"MIA",
    Distance:6179.15,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ASU",
    To:"MVD",
    Distance:1076.84,
    Airport:"BQB Lineas Aereas"
}),
new Routes(
{
    From:"ASU",
    To:"PTY",
    Distance:4490.32,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"ASU",
    To:"SCL",
    Distance:1571.35,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"ASU",
    To:"SCL",
    Distance:1571.35,
    Airport:"TAM Mercosur"
}),
new Routes(
{
    From:"ASU",
    To:"VVI",
    Distance:1024.87,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"ASU",
    To:"VVI",
    Distance:1024.87,
    Airport:"TAM Mercosur"
}),
new Routes(
{
    From:"ASV",
    To:"WIL",
    Distance:154.998,
    Airport:"Flightline"
}),
new Routes(
{
    From:"ASV",
    To:"WIL",
    Distance:154.998,
    Airport:"Fly Air"
}),
new Routes(
{
    From:"ASW",
    To:"ABS",
    Distance:215.522,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ASW",
    To:"CAI",
    Distance:698.851,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ASW",
    To:"CAI",
    Distance:698.851,
    Airport:"Marysya Airlines"
}),
new Routes(
{
    From:"ASW",
    To:"JED",
    Distance:697.251,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"ATA",
    To:"LIM",
    Distance:302.051,
    Airport:"AeroWorld "
}),
new Routes(
{
    From:"ATC",
    To:"NAS",
    Distance:186.524,
    Airport:"Aeroper"
}),
new Routes(
{
    From:"ATD",
    To:"HIR",
    Distance:121.75,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"ADB",
    Distance:283.807,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"AMM",
    Distance:1297.11,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"ATH",
    To:"AMS",
    Distance:2181.75,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"AMS",
    Distance:2181.75,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"ATH",
    To:"AOK",
    Distance:399.594,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"AOK",
    Distance:399.594,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"ARN",
    Distance:2452.3,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ATH",
    To:"ARN",
    Distance:2452.3,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ATH",
    To:"AUH",
    Distance:3263.09,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"AUH",
    Distance:3263.09,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"ATH",
    To:"AXD",
    Distance:367.766,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"AXD",
    Distance:367.766,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"BCN",
    Distance:1904.51,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"BCN",
    Distance:1904.51,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"BCN",
    Distance:1904.51,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"BCN",
    Distance:1904.51,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"BEG",
    Distance:822.943,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"BEG",
    Distance:822.943,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"ATH",
    To:"BEG",
    Distance:822.943,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"BEY",
    Distance:1135.21,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"BGY",
    Distance:1457.06,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ATH",
    To:"BRU",
    Distance:2101.43,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"BRU",
    Distance:2101.43,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"BUD",
    Distance:1123.24,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"CAI",
    Distance:1107.17,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"CAI",
    Distance:1107.17,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ATH",
    To:"CDG",
    Distance:2108.65,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"CDG",
    Distance:2108.65,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATH",
    To:"CDG",
    Distance:2108.65,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"CFU",
    Distance:395.594,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"CFU",
    Distance:395.594,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"CGN",
    Distance:1952.69,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"ATH",
    To:"CHQ",
    Distance:268.005,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"CHQ",
    Distance:268.005,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"CHQ",
    Distance:268.005,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ATH",
    To:"CPH",
    Distance:2139.46,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ATH",
    To:"CPH",
    Distance:2139.46,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ATH",
    To:"DBV",
    Distance:704.324,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"DME",
    Distance:2206.29,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"DME",
    Distance:2206.29,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"DOH",
    Distance:2955.1,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"ATH",
    To:"DOH",
    Distance:2955.1,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ATH",
    To:"DUB",
    Distance:2875.7,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ATH",
    To:"DUS",
    Distance:2003.42,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"DUS",
    Distance:2003.42,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ATH",
    To:"DXB",
    Distance:3271.87,
    Airport:"Emirates"
}),
new Routes(
{
    From:"ATH",
    To:"EDI",
    Distance:2848.01,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ATH",
    To:"EFL",
    Distance:302.329,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"EFL",
    Distance:302.329,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"EIN",
    Distance:2089,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"ATH",
    To:"EVN",
    Distance:1779.25,
    Airport:"Air Armenia"
}),
new Routes(
{
    From:"ATH",
    To:"FCO",
    Distance:1085.51,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"FCO",
    Distance:1085.51,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATH",
    To:"FCO",
    Distance:1085.51,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"FCO",
    Distance:1085.51,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ATH",
    To:"FRA",
    Distance:1816.58,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"FRA",
    Distance:1816.58,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ATH",
    To:"GVA",
    Distance:1731.29,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"GVA",
    Distance:1731.29,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ATH",
    To:"GVA",
    Distance:1731.29,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ATH",
    To:"HAM",
    Distance:2045.22,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ATH",
    To:"HBE",
    Distance:941.54,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"HBE",
    Distance:941.54,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ATH",
    To:"HEL",
    Distance:2489.67,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ATH",
    To:"HER",
    Distance:309.063,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"HER",
    Distance:309.063,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"HER",
    Distance:309.063,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ATH",
    To:"HER",
    Distance:309.063,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"IEV",
    Distance:1478.58,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"IOA",
    Distance:333.823,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"IOA",
    Distance:333.823,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"IST",
    Distance:537.557,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"IST",
    Distance:537.557,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"IST",
    Distance:537.557,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JIK",
    Distance:212.937,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JIK",
    Distance:212.937,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JKH",
    Distance:197.311,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JKH",
    Distance:197.311,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JKL",
    Distance:285.739,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JKL",
    Distance:285.739,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JMK",
    Distance:135.506,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JMK",
    Distance:135.506,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JNX",
    Distance:157.551,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JNX",
    Distance:157.551,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JSH",
    Distance:358.564,
    Airport:"Cielos Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JSI",
    Distance:143.189,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JSI",
    Distance:143.189,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JSY",
    Distance:105.386,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JSY",
    Distance:105.386,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JTR",
    Distance:218.424,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JTR",
    Distance:218.424,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JTY",
    Distance:262.763,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"JTY",
    Distance:262.763,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"KBP",
    Distance:1485.46,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"KGS",
    Distance:305.778,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"KGS",
    Distance:305.778,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"KIT",
    Distance:202.29,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"KIT",
    Distance:202.29,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"KIV",
    Distance:1079.73,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"ATH",
    To:"KRR",
    Distance:1490.15,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"KSO",
    Distance:361.254,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"KVA",
    Distance:336.054,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"KVA",
    Distance:336.054,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"KZI",
    Distance:318.11,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"LCA",
    Distance:930.214,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"LCA",
    Distance:930.214,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATH",
    To:"LCA",
    Distance:930.214,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"ATH",
    To:"LCA",
    Distance:930.214,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"ATH",
    To:"LED",
    Distance:2472.05,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"LGW",
    Distance:2393.01,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ATH",
    To:"LHR",
    Distance:2427.1,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"LHR",
    Distance:2427.1,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"LHR",
    Distance:2427.1,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ATH",
    To:"LHR",
    Distance:2427.1,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"LRS",
    Distance:265.219,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"LRS",
    Distance:265.219,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"LXS",
    Distance:246.966,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"LXS",
    Distance:246.966,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"LYS",
    Distance:1779.82,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"LYS",
    Distance:1779.82,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"LYS",
    Distance:1779.82,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ATH",
    To:"MAD",
    Distance:2377.39,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"MAD",
    Distance:2377.39,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"MAN",
    Distance:2636.65,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"MAN",
    Distance:2636.65,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"MAN",
    Distance:2636.65,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ATH",
    To:"MJT",
    Distance:262.394,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"MJT",
    Distance:262.394,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"MLA",
    Distance:872.551,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"ATH",
    To:"MLO",
    Distance:145.742,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"MLO",
    Distance:145.742,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"MRS",
    Distance:1688.97,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"MRS",
    Distance:1688.97,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATH",
    To:"MRS",
    Distance:1688.97,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"MUC",
    Distance:1517.68,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"MUC",
    Distance:1517.68,
    Airport:"Air China"
}),
new Routes(
{
    From:"ATH",
    To:"MUC",
    Distance:1517.68,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ATH",
    To:"MXP",
    Distance:1520.35,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"MXP",
    Distance:1520.35,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"MXP",
    Distance:1520.35,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ATH",
    To:"NTE",
    Distance:2316.56,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"NTE",
    Distance:2316.56,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ATH",
    To:"ORY",
    Distance:2106.45,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"ATH",
    To:"ORY",
    Distance:2106.45,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ATH",
    To:"OSL",
    Distance:2635.02,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"OSL",
    Distance:2635.02,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"ATH",
    To:"OSL",
    Distance:2635.02,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"ATH",
    To:"OTP",
    Distance:759.514,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"OTP",
    Distance:759.514,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"OTP",
    Distance:759.514,
    Airport:"Tarom"
}),
new Routes(
{
    From:"ATH",
    To:"PAS",
    Distance:146.655,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"PAS",
    Distance:146.655,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"PFO",
    Distance:844.244,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ATH",
    To:"PHL",
    Distance:8083.06,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"PHL",
    Distance:8083.06,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"PHL",
    Distance:8083.06,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ATH",
    To:"PRG",
    Distance:1555.64,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"RHO",
    Distance:404.483,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"RHO",
    Distance:404.483,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"RHO",
    Distance:404.483,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ATH",
    To:"RIX",
    Distance:2111.29,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"ATH",
    To:"SAW",
    Distance:566.273,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"SKG",
    Distance:299.24,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"SKG",
    Distance:299.24,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"SKG",
    Distance:299.24,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ATH",
    To:"SKU",
    Distance:124.022,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"SKU",
    Distance:124.022,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"SMI",
    Distance:262.079,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"SMI",
    Distance:262.079,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"SOF",
    Distance:531.119,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"SOF",
    Distance:531.119,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"ATH",
    To:"SOF",
    Distance:531.119,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"ATH",
    To:"SOF",
    Distance:531.119,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"SPU",
    Distance:895.444,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"STN",
    Distance:2407.92,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"ATH",
    To:"STR",
    Distance:1682.16,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"ATH",
    To:"SVO",
    Distance:2241.95,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"SXF",
    Distance:1797.77,
    Airport:"easyJet"
}),
new Routes(
{
    From:"ATH",
    To:"TBS",
    Distance:1837.19,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"TIA",
    Distance:529.274,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"TIA",
    Distance:529.274,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"TLS",
    Distance:1996.38,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATH",
    To:"TLV",
    Distance:1193.68,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"TLV",
    Distance:1193.68,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"TXL",
    Distance:1823.08,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"TXL",
    Distance:1823.08,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ATH",
    To:"VCE",
    Distance:1275.95,
    Airport:"Air One"
}),
new Routes(
{
    From:"ATH",
    To:"VCE",
    Distance:1275.95,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATH",
    To:"VIE",
    Distance:1278.9,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"VIE",
    Distance:1278.9,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"WAW",
    Distance:1599.07,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"WAW",
    Distance:1599.07,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"YUL",
    Distance:7631.86,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"ATH",
    To:"YYZ",
    Distance:8128.49,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"ATH",
    To:"ZRH",
    Distance:1639.49,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"ATH",
    To:"ZTH",
    Distance:269.494,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"ATH",
    To:"ZTH",
    Distance:269.494,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"ATK",
    To:"AIN",
    Distance:96.6035,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ATK",
    To:"BRW",
    Distance:94.1894,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ATL",
    To:"ABE",
    Distance:1113.75,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"ABE",
    Distance:1113.75,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"ABE",
    Distance:1113.75,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ABQ",
    Distance:2038.35,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"ABQ",
    Distance:2038.35,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"ABQ",
    Distance:2038.35,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"ABQ",
    Distance:2038.35,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ABQ",
    Distance:2038.35,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"ABY",
    Distance:234.667,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"ABY",
    Distance:234.667,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"ABY",
    Distance:234.667,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"ABY",
    Distance:234.667,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"AEX",
    Distance:803.648,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"AEX",
    Distance:803.648,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"AEX",
    Distance:803.648,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"AGS",
    Distance:230.335,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"AGS",
    Distance:230.335,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"AGS",
    Distance:230.335,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ALB",
    Distance:1372.14,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"ALB",
    Distance:1372.14,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"ALB",
    Distance:1372.14,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"ALB",
    Distance:1372.14,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"AMS",
    Distance:7065.79,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"AMS",
    Distance:7065.79,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ATW",
    Distance:1232.11,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"ATW",
    Distance:1232.11,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"ATW",
    Distance:1232.11,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"AUA",
    Distance:2767.16,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"AUA",
    Distance:2767.16,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"AUA",
    Distance:2767.16,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"AUS",
    Distance:1305.99,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"AUS",
    Distance:1305.99,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"AUS",
    Distance:1305.99,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"AUS",
    Distance:1305.99,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"AUS",
    Distance:1305.99,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"AUS",
    Distance:1305.99,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"AUS",
    Distance:1305.99,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"AVL",
    Distance:264.353,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"AVL",
    Distance:264.353,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"AVL",
    Distance:264.353,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"AVL",
    Distance:264.353,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"AVP",
    Distance:1149.09,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"AVP",
    Distance:1149.09,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"AVP",
    Distance:1149.09,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"AZO",
    Distance:961.113,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"AZO",
    Distance:961.113,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"BDA",
    Distance:1844.36,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"BDL",
    Distance:1382.31,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"BDL",
    Distance:1382.31,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"BDL",
    Distance:1382.31,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"BDL",
    Distance:1382.31,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"BDL",
    Distance:1382.31,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"BDL",
    Distance:1382.31,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"BDL",
    Distance:1382.31,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"BHM",
    Distance:215.53,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"BHM",
    Distance:215.53,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"BHM",
    Distance:215.53,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"BHM",
    Distance:215.53,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"BHM",
    Distance:215.53,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"BHM",
    Distance:215.53,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"BJX",
    Distance:2188.51,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"BMI",
    Distance:858.25,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"BMI",
    Distance:858.25,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"BMI",
    Distance:858.25,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"BNA",
    Distance:344.43,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"BNA",
    Distance:344.43,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"BNA",
    Distance:344.43,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"BNA",
    Distance:344.43,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"BNA",
    Distance:344.43,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"BNA",
    Distance:344.43,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"BNA",
    Distance:344.43,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"BOG",
    Distance:3388.73,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"BON",
    Distance:2899.38,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"BOS",
    Distance:1521.55,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"BOS",
    Distance:1521.55,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"BOS",
    Distance:1521.55,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"BOS",
    Distance:1521.55,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"BOS",
    Distance:1521.55,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"BOS",
    Distance:1521.55,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"BOS",
    Distance:1521.55,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"BOS",
    Distance:1521.55,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"BQK",
    Distance:383.553,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"BQK",
    Distance:383.553,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"BQK",
    Distance:383.553,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"BRU",
    Distance:7106.02,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"BRU",
    Distance:7106.02,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"BRU",
    Distance:7106.02,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"BSB",
    Distance:6729.01,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"BTR",
    Distance:720.938,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"BTR",
    Distance:720.938,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"BTR",
    Distance:720.938,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"BTV",
    Distance:1545.88,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"BTV",
    Distance:1545.88,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"BTV",
    Distance:1545.88,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"BUF",
    Distance:1147.06,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"BUF",
    Distance:1147.06,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"BUF",
    Distance:1147.06,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"BUF",
    Distance:1147.06,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"BWI",
    Distance:927.522,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"BWI",
    Distance:927.522,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"BWI",
    Distance:927.522,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"BWI",
    Distance:927.522,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"BWI",
    Distance:927.522,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"BWI",
    Distance:927.522,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"BWI",
    Distance:927.522,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"BZE",
    Distance:1831.32,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"CAE",
    Distance:307.583,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"CAE",
    Distance:307.583,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"CAE",
    Distance:307.583,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"CAE",
    Distance:307.583,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CAK",
    Distance:851.298,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"CAK",
    Distance:851.298,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"CAK",
    Distance:851.298,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"CAK",
    Distance:851.298,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CAK",
    Distance:851.298,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CCS",
    Distance:3117.25,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"CDG",
    Distance:7055.72,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"CDG",
    Distance:7055.72,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"CDG",
    Distance:7055.72,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"CDG",
    Distance:7055.72,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"CHA",
    Distance:171.046,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"CHA",
    Distance:171.046,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"CHA",
    Distance:171.046,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"CHA",
    Distance:171.046,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CHA",
    Distance:171.046,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CHO",
    Distance:734.758,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"CHO",
    Distance:734.758,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"CHO",
    Distance:734.758,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CHS",
    Distance:416.056,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"CHS",
    Distance:416.056,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CHS",
    Distance:416.056,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"CHS",
    Distance:416.056,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"CHS",
    Distance:416.056,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CHS",
    Distance:416.056,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CHS",
    Distance:416.056,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"CID",
    Distance:1117.5,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"CID",
    Distance:1117.5,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"CID",
    Distance:1117.5,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CID",
    Distance:1117.5,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CLE",
    Distance:893.812,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"CLE",
    Distance:893.812,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"CLE",
    Distance:893.812,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"CLE",
    Distance:893.812,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CLE",
    Distance:893.812,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CLT",
    Distance:364.56,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"CLT",
    Distance:364.56,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CLT",
    Distance:364.56,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"CLT",
    Distance:364.56,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CLT",
    Distance:364.56,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"CLT",
    Distance:364.56,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CLT",
    Distance:364.56,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ATL",
    To:"CLT",
    Distance:364.56,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"CMH",
    Distance:720.4,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"CMH",
    Distance:720.4,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"CMH",
    Distance:720.4,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"CMH",
    Distance:720.4,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"CMH",
    Distance:720.4,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"CMH",
    Distance:720.4,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CMH",
    Distance:720.4,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CMH",
    Distance:720.4,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ATL",
    To:"COS",
    Distance:1902.52,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"COS",
    Distance:1902.52,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"COS",
    Distance:1902.52,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CRW",
    Distance:585.069,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"CRW",
    Distance:585.069,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"CRW",
    Distance:585.069,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CRW",
    Distance:585.069,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CSG",
    Distance:133.362,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"CSG",
    Distance:133.362,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"CSG",
    Distance:133.362,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CUN",
    Distance:1421.66,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"CUN",
    Distance:1421.66,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"CUN",
    Distance:1421.66,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"CUN",
    Distance:1421.66,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"CUN",
    Distance:1421.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"CUN",
    Distance:1421.66,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CUN",
    Distance:1421.66,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CUN",
    Distance:1421.66,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"CUN",
    Distance:1421.66,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ATL",
    To:"CVG",
    Distance:602.182,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"CVG",
    Distance:602.182,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"CVG",
    Distance:602.182,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"CVG",
    Distance:602.182,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"CVG",
    Distance:602.182,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CVG",
    Distance:602.182,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CVG",
    Distance:602.182,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"CZM",
    Distance:1478.9,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"CZM",
    Distance:1478.9,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"CZM",
    Distance:1478.9,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"CZM",
    Distance:1478.9,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"CZM",
    Distance:1478.9,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ATL",
    To:"DAB",
    Distance:589.713,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"DAB",
    Distance:589.713,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"DAB",
    Distance:589.713,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DAL",
    Distance:1158.03,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"DAL",
    Distance:1158.03,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"DAL",
    Distance:1158.03,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DAL",
    Distance:1158.03,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"DAY",
    Distance:696.956,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"DAY",
    Distance:696.956,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"DAY",
    Distance:696.956,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"DAY",
    Distance:696.956,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"DAY",
    Distance:696.956,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DAY",
    Distance:696.956,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DCA",
    Distance:880.087,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"DCA",
    Distance:880.087,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"DCA",
    Distance:880.087,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"DCA",
    Distance:880.087,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"DCA",
    Distance:880.087,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"DCA",
    Distance:880.087,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DCA",
    Distance:880.087,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DEN",
    Distance:1926.63,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"DEN",
    Distance:1926.63,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ATL",
    To:"DEN",
    Distance:1926.63,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"DEN",
    Distance:1926.63,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"DEN",
    Distance:1926.63,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"DEN",
    Distance:1926.63,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"DEN",
    Distance:1926.63,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DEN",
    Distance:1926.63,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DEN",
    Distance:1926.63,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DEN",
    Distance:1926.63,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DEN",
    Distance:1926.63,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"DFW",
    Distance:1174.53,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"DFW",
    Distance:1174.53,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"DFW",
    Distance:1174.53,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DFW",
    Distance:1174.53,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ATL",
    To:"DFW",
    Distance:1174.53,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DFW",
    Distance:1174.53,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"DFW",
    Distance:1174.53,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DFW",
    Distance:1174.53,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ATL",
    To:"DFW",
    Distance:1174.53,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DFW",
    Distance:1174.53,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ATL",
    To:"DFW",
    Distance:1174.53,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"DHN",
    Distance:274.708,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"DHN",
    Distance:274.708,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"DHN",
    Distance:274.708,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DSM",
    Distance:1195.77,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"DSM",
    Distance:1195.77,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"DSM",
    Distance:1195.77,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DTW",
    Distance:958.2,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"DTW",
    Distance:958.2,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"DTW",
    Distance:958.2,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"DTW",
    Distance:958.2,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"DTW",
    Distance:958.2,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"DTW",
    Distance:958.2,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DTW",
    Distance:958.2,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DTW",
    Distance:958.2,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"DUB",
    Distance:6322.9,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"DUB",
    Distance:6322.9,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"DUB",
    Distance:6322.9,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DUS",
    Distance:7236.38,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"DUS",
    Distance:7236.38,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"DUS",
    Distance:7236.38,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"DXB",
    Distance:12209.4,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"ECP",
    Distance:388.466,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"ECP",
    Distance:388.466,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"ECP",
    Distance:388.466,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ELP",
    Distance:2059.52,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"ELP",
    Distance:2059.52,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"ELP",
    Distance:2059.52,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"ELP",
    Distance:2059.52,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"EVV",
    Distance:563.565,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"EVV",
    Distance:563.565,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"EVV",
    Distance:563.565,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"EVV",
    Distance:563.565,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"EWN",
    Distance:696.309,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"EWN",
    Distance:696.309,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"EWN",
    Distance:696.309,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"EWR",
    Distance:1199.31,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"EWR",
    Distance:1199.31,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"EWR",
    Distance:1199.31,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"EWR",
    Distance:1199.31,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"EWR",
    Distance:1199.31,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"EWR",
    Distance:1199.31,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"EWR",
    Distance:1199.31,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"EYW",
    Distance:1042.34,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"EYW",
    Distance:1042.34,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"EYW",
    Distance:1042.34,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"EZE",
    Distance:8075.97,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"FAR",
    Distance:1807.96,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"FAY",
    Distance:531.228,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"FAY",
    Distance:531.228,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"FAY",
    Distance:531.228,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"FCO",
    Distance:8085.96,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"FCO",
    Distance:8085.96,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"FCO",
    Distance:8085.96,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"FCO",
    Distance:8085.96,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"FCO",
    Distance:8085.96,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"FLL",
    Distance:936.441,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"FLL",
    Distance:936.441,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"FLL",
    Distance:936.441,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"FLL",
    Distance:936.441,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"FLL",
    Distance:936.441,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"FLL",
    Distance:936.441,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"FLL",
    Distance:936.441,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"FLL",
    Distance:936.441,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"FNT",
    Distance:1039.01,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"FNT",
    Distance:1039.01,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"FNT",
    Distance:1039.01,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"FPO",
    Distance:960.587,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"FRA",
    Distance:7408.2,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"FRA",
    Distance:7408.2,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"FRA",
    Distance:7408.2,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"FRA",
    Distance:7408.2,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ATL",
    To:"FRA",
    Distance:7408.2,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"FSD",
    Distance:1535.45,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"FSM",
    Distance:929.941,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"FSM",
    Distance:929.941,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"FSM",
    Distance:929.941,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"FWA",
    Distance:819.169,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"FWA",
    Distance:819.169,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"FWA",
    Distance:819.169,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"FWA",
    Distance:819.169,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"GCM",
    Distance:1623.73,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"GDL",
    Distance:2363.87,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"GDL",
    Distance:2363.87,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"GDL",
    Distance:2363.87,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"GDL",
    Distance:2363.87,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"GDL",
    Distance:2363.87,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"GDL",
    Distance:2363.87,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"GGT",
    Distance:1395.67,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"GIG",
    Distance:7641.81,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"GIG",
    Distance:7641.81,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"ATL",
    To:"GNV",
    Distance:483.942,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"GNV",
    Distance:483.942,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"GNV",
    Distance:483.942,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"GNV",
    Distance:483.942,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"GPT",
    Distance:565.981,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"GPT",
    Distance:565.981,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"GPT",
    Distance:565.981,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"GPT",
    Distance:565.981,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"GRB",
    Distance:1247.53,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"GRB",
    Distance:1247.53,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"GRB",
    Distance:1247.53,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"GRK",
    Distance:1289.79,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"GRK",
    Distance:1289.79,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"GRK",
    Distance:1289.79,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"GRR",
    Distance:1032.31,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"GRR",
    Distance:1032.31,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"GRR",
    Distance:1032.31,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"GRU",
    Distance:7510.15,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"GSO",
    Distance:492.599,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"GSO",
    Distance:492.599,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"GSO",
    Distance:492.599,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"GSO",
    Distance:492.599,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"GSO",
    Distance:492.599,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"GSO",
    Distance:492.599,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"GSP",
    Distance:246.58,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"GSP",
    Distance:246.58,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"GSP",
    Distance:246.58,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"GSP",
    Distance:246.58,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"GTR",
    Distance:386.372,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"GTR",
    Distance:386.372,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"GTR",
    Distance:386.372,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"GUA",
    Distance:2205.94,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"HNL",
    Distance:7233.87,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"HOU",
    Distance:1118.18,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"HOU",
    Distance:1118.18,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"HOU",
    Distance:1118.18,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"HOU",
    Distance:1118.18,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"HOU",
    Distance:1118.18,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"HOU",
    Distance:1118.18,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"HPN",
    Distance:1255.44,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"HPN",
    Distance:1255.44,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"HPN",
    Distance:1255.44,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"HSV",
    Distance:242.961,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"HSV",
    Distance:242.961,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"HSV",
    Distance:242.961,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"HSV",
    Distance:242.961,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"HSV",
    Distance:242.961,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"IAD",
    Distance:859.029,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"IAD",
    Distance:859.029,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"IAD",
    Distance:859.029,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"IAD",
    Distance:859.029,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ATL",
    To:"IAD",
    Distance:859.029,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"IAD",
    Distance:859.029,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"IAD",
    Distance:859.029,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ATL",
    To:"IAD",
    Distance:859.029,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"IAD",
    Distance:859.029,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"IAH",
    Distance:1107.57,
    Airport:"Air China"
}),
new Routes(
{
    From:"ATL",
    To:"IAH",
    Distance:1107.57,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"IAH",
    Distance:1107.57,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"IAH",
    Distance:1107.57,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"IAH",
    Distance:1107.57,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"IAH",
    Distance:1107.57,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ATL",
    To:"IAH",
    Distance:1107.57,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"IAH",
    Distance:1107.57,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"IAH",
    Distance:1107.57,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ATL",
    To:"ICN",
    Distance:11487.2,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"ICN",
    Distance:11487.2,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"ATL",
    To:"ICT",
    Distance:1255.68,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"ICT",
    Distance:1255.68,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"ICT",
    Distance:1255.68,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"ICT",
    Distance:1255.68,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ILM",
    Distance:605.885,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"ILM",
    Distance:605.885,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"ILM",
    Distance:605.885,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"ILM",
    Distance:605.885,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"IND",
    Distance:696.267,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"IND",
    Distance:696.267,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"IND",
    Distance:696.267,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"IND",
    Distance:696.267,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"IND",
    Distance:696.267,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"IND",
    Distance:696.267,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"IND",
    Distance:696.267,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"IND",
    Distance:696.267,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"IND",
    Distance:696.267,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ATL",
    To:"JAN",
    Distance:546.991,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"JAN",
    Distance:546.991,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"JAN",
    Distance:546.991,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"JAN",
    Distance:546.991,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"JAN",
    Distance:546.991,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"JAX",
    Distance:434.452,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"JAX",
    Distance:434.452,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"JAX",
    Distance:434.452,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"JAX",
    Distance:434.452,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"JAX",
    Distance:434.452,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"JAX",
    Distance:434.452,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"JAX",
    Distance:434.452,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"JAX",
    Distance:434.452,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"JAX",
    Distance:434.452,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"JFK",
    Distance:1222.08,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"JFK",
    Distance:1222.08,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"JFK",
    Distance:1222.08,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"JFK",
    Distance:1222.08,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"JFK",
    Distance:1222.08,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"JFK",
    Distance:1222.08,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"JFK",
    Distance:1222.08,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"JFK",
    Distance:1222.08,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"ATL",
    To:"JFK",
    Distance:1222.08,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"JFK",
    Distance:1222.08,
    Airport:"WestJet"
}),
new Routes(
{
    From:"ATL",
    To:"JNB",
    Distance:13582.6,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"KIN",
    Distance:1904.44,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"LAN",
    Distance:1016.64,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"LAN",
    Distance:1016.64,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"LAS",
    Distance:2804.85,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"LAS",
    Distance:2804.85,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"LAS",
    Distance:2804.85,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"LAS",
    Distance:2804.85,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"LAS",
    Distance:2804.85,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"LAS",
    Distance:2804.85,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"LAS",
    Distance:2804.85,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"LAX",
    Distance:3125.79,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"LAX",
    Distance:3125.79,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"LAX",
    Distance:3125.79,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"LAX",
    Distance:3125.79,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"LAX",
    Distance:3125.79,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"LAX",
    Distance:3125.79,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"LAX",
    Distance:3125.79,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"LAX",
    Distance:3125.79,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"LAX",
    Distance:3125.79,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"LAX",
    Distance:3125.79,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ATL",
    To:"LEX",
    Distance:489.496,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"LEX",
    Distance:489.496,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"LEX",
    Distance:489.496,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"LEX",
    Distance:489.496,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"LFT",
    Distance:808.757,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"LFT",
    Distance:808.757,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"LFT",
    Distance:808.757,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"LGA",
    Distance:1224.87,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"LGA",
    Distance:1224.87,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"LGA",
    Distance:1224.87,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"LGA",
    Distance:1224.87,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"LGA",
    Distance:1224.87,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"LGA",
    Distance:1224.87,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"LGA",
    Distance:1224.87,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"LGA",
    Distance:1224.87,
    Airport:"WestJet"
}),
new Routes(
{
    From:"ATL",
    To:"LHR",
    Distance:6760.55,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"LHR",
    Distance:6760.55,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"LHR",
    Distance:6760.55,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ATL",
    To:"LHR",
    Distance:6760.55,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"LHR",
    Distance:6760.55,
    Airport:"Finnair"
}),
new Routes(
{
    From:"ATL",
    To:"LHR",
    Distance:6760.55,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"LHR",
    Distance:6760.55,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"LHR",
    Distance:6760.55,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"LIM",
    Distance:5135.76,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"LIR",
    Distance:2564.84,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"LIT",
    Distance:727.164,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"LIT",
    Distance:727.164,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"LIT",
    Distance:727.164,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"LIT",
    Distance:727.164,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"LOS",
    Distance:9395.42,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MAD",
    Distance:6960.38,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"MAD",
    Distance:6960.38,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MAD",
    Distance:6960.38,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MAD",
    Distance:6960.38,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MAN",
    Distance:6580.99,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MAN",
    Distance:6580.99,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MAN",
    Distance:6580.99,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MAN",
    Distance:6580.99,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"MBJ",
    Distance:1802.94,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"MBJ",
    Distance:1802.94,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MBJ",
    Distance:1802.94,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MBS",
    Distance:1100.82,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MBS",
    Distance:1100.82,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MCI",
    Distance:1113.38,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"MCI",
    Distance:1113.38,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MCI",
    Distance:1113.38,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"MCI",
    Distance:1113.38,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"MCI",
    Distance:1113.38,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MCI",
    Distance:1113.38,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MCI",
    Distance:1113.38,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MCI",
    Distance:1113.38,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"MCO",
    Distance:650.737,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"MCO",
    Distance:650.737,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MCO",
    Distance:650.737,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"MCO",
    Distance:650.737,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"MCO",
    Distance:650.737,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MCO",
    Distance:650.737,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MCO",
    Distance:650.737,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MCO",
    Distance:650.737,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"MDT",
    Distance:997.129,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MDT",
    Distance:997.129,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MDT",
    Distance:997.129,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MDW",
    Distance:951.957,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MDW",
    Distance:951.957,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"MDW",
    Distance:951.957,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MDW",
    Distance:951.957,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MDW",
    Distance:951.957,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MEM",
    Distance:532.792,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"MEM",
    Distance:532.792,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MEM",
    Distance:532.792,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MEM",
    Distance:532.792,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"MEM",
    Distance:532.792,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MEM",
    Distance:532.792,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MEM",
    Distance:532.792,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"MEX",
    Distance:2143.4,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"MEX",
    Distance:2143.4,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MEX",
    Distance:2143.4,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"MEX",
    Distance:2143.4,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MEX",
    Distance:2143.4,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MEX",
    Distance:2143.4,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"MEX",
    Distance:2143.4,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ATL",
    To:"MGA",
    Distance:2396.68,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MGM",
    Distance:236.012,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MGM",
    Distance:236.012,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MGM",
    Distance:236.012,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MHT",
    Distance:1531.06,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MHT",
    Distance:1531.06,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MHT",
    Distance:1531.06,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MIA",
    Distance:959.062,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"MIA",
    Distance:959.062,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MIA",
    Distance:959.062,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MIA",
    Distance:959.062,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"MIA",
    Distance:959.062,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MIA",
    Distance:959.062,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ATL",
    To:"MIA",
    Distance:959.062,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MIA",
    Distance:959.062,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MIA",
    Distance:959.062,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MIA",
    Distance:959.062,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ATL",
    To:"MIA",
    Distance:959.062,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"MIA",
    Distance:959.062,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ATL",
    To:"MKE",
    Distance:1078.35,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MKE",
    Distance:1078.35,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"MKE",
    Distance:1078.35,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"MKE",
    Distance:1078.35,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MKE",
    Distance:1078.35,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MKE",
    Distance:1078.35,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MLB",
    Distance:713.29,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MLB",
    Distance:713.29,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MLB",
    Distance:713.29,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MLI",
    Distance:1020.04,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MLI",
    Distance:1020.04,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MLI",
    Distance:1020.04,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MLU",
    Distance:719.836,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MLU",
    Distance:719.836,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MLU",
    Distance:719.836,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MOB",
    Distance:485.937,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MOB",
    Distance:485.937,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MOB",
    Distance:485.937,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MSN",
    Distance:1139.5,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MSN",
    Distance:1139.5,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MSN",
    Distance:1139.5,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MSP",
    Distance:1459.71,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"MSP",
    Distance:1459.71,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MSP",
    Distance:1459.71,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"MSP",
    Distance:1459.71,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"MSP",
    Distance:1459.71,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MSP",
    Distance:1459.71,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MSP",
    Distance:1459.71,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MSP",
    Distance:1459.71,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MSY",
    Distance:683.578,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"MSY",
    Distance:683.578,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MSY",
    Distance:683.578,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"MSY",
    Distance:683.578,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MSY",
    Distance:683.578,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"MSY",
    Distance:683.578,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MSY",
    Distance:683.578,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MSY",
    Distance:683.578,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MSY",
    Distance:683.578,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"MTY",
    Distance:1745.24,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"MTY",
    Distance:1745.24,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MTY",
    Distance:1745.24,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"MTY",
    Distance:1745.24,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MTY",
    Distance:1745.24,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MTY",
    Distance:1745.24,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"MUC",
    Distance:7701.96,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MUC",
    Distance:7701.96,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MUC",
    Distance:7701.96,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"MYR",
    Distance:508.985,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"MYR",
    Distance:508.985,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"MYR",
    Distance:508.985,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"MYR",
    Distance:508.985,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"NAS",
    Distance:1169.44,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"NAS",
    Distance:1169.44,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"NAS",
    Distance:1169.44,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"NAS",
    Distance:1169.44,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"NRT",
    Distance:11002.2,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"OAJ",
    Distance:640.331,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"OAJ",
    Distance:640.331,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"OAJ",
    Distance:640.331,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"OKC",
    Distance:1221.65,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"OKC",
    Distance:1221.65,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"OKC",
    Distance:1221.65,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"OKC",
    Distance:1221.65,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"OKC",
    Distance:1221.65,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"OKC",
    Distance:1221.65,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"OKC",
    Distance:1221.65,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"OMA",
    Distance:1321.04,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"OMA",
    Distance:1321.04,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"OMA",
    Distance:1321.04,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"OMA",
    Distance:1321.04,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"British Airways"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"Qantas"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ORD",
    Distance:976.328,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"ORF",
    Distance:829.702,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"ORF",
    Distance:829.702,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"ORF",
    Distance:829.702,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ORF",
    Distance:829.702,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"ORF",
    Distance:829.702,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"ORF",
    Distance:829.702,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ORF",
    Distance:829.702,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PAP",
    Distance:2062.92,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"PBI",
    Distance:878.003,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"PBI",
    Distance:878.003,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"PBI",
    Distance:878.003,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PBI",
    Distance:878.003,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"PBI",
    Distance:878.003,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"PBI",
    Distance:878.003,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PBI",
    Distance:878.003,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PBI",
    Distance:878.003,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"PDX",
    Distance:3489.12,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"PDX",
    Distance:3489.12,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PDX",
    Distance:3489.12,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"PDX",
    Distance:3489.12,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"PDX",
    Distance:3489.12,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PHF",
    Distance:817.217,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"PHF",
    Distance:817.217,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"PHF",
    Distance:817.217,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PHL",
    Distance:1071.59,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"PHL",
    Distance:1071.59,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"PHL",
    Distance:1071.59,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"PHL",
    Distance:1071.59,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"PHL",
    Distance:1071.59,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PHL",
    Distance:1071.59,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"PHL",
    Distance:1071.59,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PHL",
    Distance:1071.59,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PHL",
    Distance:1071.59,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ATL",
    To:"PHX",
    Distance:2549.05,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"PHX",
    Distance:2549.05,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"PHX",
    Distance:2549.05,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"PHX",
    Distance:2549.05,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PHX",
    Distance:2549.05,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"PHX",
    Distance:2549.05,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PHX",
    Distance:2549.05,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PHX",
    Distance:2549.05,
    Airport:"US Airways"
}),
new Routes(
{
    From:"ATL",
    To:"PHX",
    Distance:2549.05,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"PIA",
    Distance:909.712,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"PIA",
    Distance:909.712,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"PIA",
    Distance:909.712,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PIT",
    Distance:847.973,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"PIT",
    Distance:847.973,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"PIT",
    Distance:847.973,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"PIT",
    Distance:847.973,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"PIT",
    Distance:847.973,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"PIT",
    Distance:847.973,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PIT",
    Distance:847.973,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PLS",
    Distance:1778.51,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"PNS",
    Distance:437.34,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"PNS",
    Distance:437.34,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PNS",
    Distance:437.34,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"PNS",
    Distance:437.34,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PNS",
    Distance:437.34,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"PTY",
    Distance:2779.94,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"PTY",
    Distance:2779.94,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"PTY",
    Distance:2779.94,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"PUJ",
    Distance:2313.45,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"PUJ",
    Distance:2313.45,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"PUJ",
    Distance:2313.45,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PVD",
    Distance:1453.42,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"PVD",
    Distance:1453.42,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"PVD",
    Distance:1453.42,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"PVR",
    Distance:2505.73,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"PVR",
    Distance:2505.73,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"PWM",
    Distance:1651.74,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"PWM",
    Distance:1651.74,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"PWM",
    Distance:1651.74,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"RDU",
    Distance:572.249,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"RDU",
    Distance:572.249,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"RDU",
    Distance:572.249,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"RDU",
    Distance:572.249,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"RDU",
    Distance:572.249,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"RDU",
    Distance:572.249,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"RDU",
    Distance:572.249,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"RDU",
    Distance:572.249,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"RDU",
    Distance:572.249,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"RIC",
    Distance:773.177,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"RIC",
    Distance:773.177,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"RIC",
    Distance:773.177,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"RIC",
    Distance:773.177,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"RIC",
    Distance:773.177,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"RIC",
    Distance:773.177,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"RIC",
    Distance:773.177,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ROA",
    Distance:574.995,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"ROA",
    Distance:574.995,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"ROA",
    Distance:574.995,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ROA",
    Distance:574.995,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"ROC",
    Distance:1206.66,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"ROC",
    Distance:1206.66,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"ROC",
    Distance:1206.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"ROC",
    Distance:1206.66,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"RSW",
    Distance:830.268,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"RSW",
    Distance:830.268,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"RSW",
    Distance:830.268,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"RSW",
    Distance:830.268,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"RSW",
    Distance:830.268,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"RSW",
    Distance:830.268,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"RSW",
    Distance:830.268,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"RSW",
    Distance:830.268,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"RTB",
    Distance:1937.28,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SAL",
    Distance:2293.89,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SAN",
    Distance:3037.66,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"SAN",
    Distance:3037.66,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"SAN",
    Distance:3037.66,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SAN",
    Distance:3037.66,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"SAN",
    Distance:3037.66,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SAN",
    Distance:3037.66,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SAN",
    Distance:3037.66,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SAN",
    Distance:3037.66,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"SAP",
    Distance:2052.24,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SAT",
    Distance:1404.7,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"SAT",
    Distance:1404.7,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"SAT",
    Distance:1404.7,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"SAT",
    Distance:1404.7,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SAT",
    Distance:1404.7,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SAT",
    Distance:1404.7,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SAT",
    Distance:1404.7,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"SAV",
    Distance:344.797,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"SAV",
    Distance:344.797,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SAV",
    Distance:344.797,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"SAV",
    Distance:344.797,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SAV",
    Distance:344.797,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SAV",
    Distance:344.797,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"SBN",
    Distance:912.759,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"SBN",
    Distance:912.759,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SBN",
    Distance:912.759,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SCL",
    Distance:7588.47,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SCL",
    Distance:7588.47,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"ATL",
    To:"SDF",
    Distance:518.094,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"SDF",
    Distance:518.094,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"SDF",
    Distance:518.094,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SDF",
    Distance:518.094,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SDF",
    Distance:518.094,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SDF",
    Distance:518.094,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"SDQ",
    Distance:2238.19,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SEA",
    Distance:3505,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"SEA",
    Distance:3505,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"SEA",
    Distance:3505,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SEA",
    Distance:3505,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"SEA",
    Distance:3505,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SEA",
    Distance:3505,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SFO",
    Distance:3434.71,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"SFO",
    Distance:3434.71,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"ATL",
    To:"SFO",
    Distance:3434.71,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"SFO",
    Distance:3434.71,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SFO",
    Distance:3434.71,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SFO",
    Distance:3434.71,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SFO",
    Distance:3434.71,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SFO",
    Distance:3434.71,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SFO",
    Distance:3434.71,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"SGF",
    Distance:904.976,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"SGF",
    Distance:904.976,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SGF",
    Distance:904.976,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SHV",
    Distance:885.576,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"SHV",
    Distance:885.576,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SHV",
    Distance:885.576,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SJC",
    Distance:3397.65,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SJC",
    Distance:3397.65,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SJC",
    Distance:3397.65,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"SJD",
    Distance:2724.96,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"SJD",
    Distance:2724.96,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SJD",
    Distance:2724.96,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SJD",
    Distance:2724.96,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"ATL",
    To:"SJO",
    Distance:2629.06,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"SJO",
    Distance:2629.06,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SJU",
    Distance:2490.94,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"SJU",
    Distance:2490.94,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"SJU",
    Distance:2490.94,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"SJU",
    Distance:2490.94,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SJU",
    Distance:2490.94,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SJU",
    Distance:2490.94,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SJU",
    Distance:2490.94,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"SLC",
    Distance:2553.59,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"SLC",
    Distance:2553.59,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"SLC",
    Distance:2553.59,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SLC",
    Distance:2553.59,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"SLC",
    Distance:2553.59,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SLC",
    Distance:2553.59,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SMF",
    Distance:3359.73,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"SMF",
    Distance:3359.73,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SMF",
    Distance:3359.73,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SMF",
    Distance:3359.73,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"SNA",
    Distance:3081.3,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"SNA",
    Distance:3081.3,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"SNA",
    Distance:3081.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SNA",
    Distance:3081.3,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SRQ",
    Distance:716.786,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"SRQ",
    Distance:716.786,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"SRQ",
    Distance:716.786,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SRQ",
    Distance:716.786,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SRQ",
    Distance:716.786,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"STL",
    Distance:779.007,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"STL",
    Distance:779.007,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"STL",
    Distance:779.007,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"STL",
    Distance:779.007,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"STL",
    Distance:779.007,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"STL",
    Distance:779.007,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"STL",
    Distance:779.007,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"STL",
    Distance:779.007,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"STR",
    Distance:7516.64,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"STR",
    Distance:7516.64,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"STR",
    Distance:7516.64,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"STT",
    Distance:2574.81,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"STT",
    Distance:2574.81,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SXM",
    Distance:2738.84,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SYR",
    Distance:1277.63,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"SYR",
    Distance:1277.63,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"SYR",
    Distance:1277.63,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"SYR",
    Distance:1277.63,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"TGU",
    Distance:2194.85,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"TLH",
    Distance:360.367,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"TLH",
    Distance:360.367,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"TLH",
    Distance:360.367,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"TPA",
    Distance:654.955,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"TPA",
    Distance:654.955,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"ATL",
    To:"TPA",
    Distance:654.955,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"TPA",
    Distance:654.955,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"TPA",
    Distance:654.955,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"TPA",
    Distance:654.955,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"TPA",
    Distance:654.955,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"TRI",
    Distance:365.282,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"TRI",
    Distance:365.282,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"TRI",
    Distance:365.282,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"TTN",
    Distance:1127.89,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"TUL",
    Distance:1082.27,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"TUL",
    Distance:1082.27,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"TUL",
    Distance:1082.27,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"TUL",
    Distance:1082.27,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"TUS",
    Distance:2474.96,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"TUS",
    Distance:2474.96,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"TUS",
    Distance:2474.96,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"TUS",
    Distance:2474.96,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"TUS",
    Distance:2474.96,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"ATL",
    To:"TYS",
    Distance:244.998,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"TYS",
    Distance:244.998,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"TYS",
    Distance:244.998,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"TYS",
    Distance:244.998,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"TYS",
    Distance:244.998,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"TYS",
    Distance:244.998,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"UIO",
    Distance:3806.85,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"UVF",
    Distance:3241.61,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"VLD",
    Distance:335.343,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"VLD",
    Distance:335.343,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"VLD",
    Distance:335.343,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"VPS",
    Distance:402.488,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"VPS",
    Distance:402.488,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"ATL",
    To:"VPS",
    Distance:402.488,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"VPS",
    Distance:402.488,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"XNA",
    Distance:946.552,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"XNA",
    Distance:946.552,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"XNA",
    Distance:946.552,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"XNA",
    Distance:946.552,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"XNA",
    Distance:946.552,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"YUL",
    Distance:1600.29,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"ATL",
    To:"YUL",
    Distance:1600.29,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"YUL",
    Distance:1600.29,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"YYZ",
    Distance:1191.08,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"ATL",
    To:"YYZ",
    Distance:1191.08,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATL",
    To:"YYZ",
    Distance:1191.08,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATL",
    To:"YYZ",
    Distance:1191.08,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"YYZ",
    Distance:1191.08,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ATL",
    To:"YYZ",
    Distance:1191.08,
    Airport:"WestJet"
}),
new Routes(
{
    From:"ATL",
    To:"ZRH",
    Distance:7531.51,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATM",
    To:"BEL",
    Distance:468.613,
    Airport:"Amerijet International"
}),
new Routes(
{
    From:"ATM",
    To:"BEL",
    Distance:468.613,
    Airport:"Azul"
}),
new Routes(
{
    From:"ATM",
    To:"ORX",
    Distance:433.198,
    Airport:"Amerijet International"
}),
new Routes(
{
    From:"ATM",
    To:"STM",
    Distance:296.726,
    Airport:"Azul"
}),
new Routes(
{
    From:"ATQ",
    To:"ASB",
    Distance:1651.14,
    Airport:"Turkmenistan Airlines"
}),
new Routes(
{
    From:"ATQ",
    To:"BOM",
    Distance:1416.61,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"ATQ",
    To:"DEL",
    Distance:413.869,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"ATQ",
    To:"DEL",
    Distance:413.869,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"ATQ",
    To:"DEL",
    Distance:413.869,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"ATQ",
    To:"DEL",
    Distance:413.869,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"ATQ",
    To:"DOH",
    Distance:2375.52,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"ATQ",
    To:"SXR",
    Distance:253.261,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"ATQ",
    To:"TAS",
    Distance:1170,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"ATT",
    To:"BET",
    Distance:5707.85,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"ATT",
    To:"KUK",
    Distance:5745.92,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"ATW",
    To:"ATL",
    Distance:1232.11,
    Airport:"Air France"
}),
new Routes(
{
    From:"ATW",
    To:"ATL",
    Distance:1232.11,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATW",
    To:"ATL",
    Distance:1232.11,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"ATW",
    To:"AZA",
    Distance:2334.6,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"ATW",
    To:"DTW",
    Distance:475.325,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATW",
    To:"LAS",
    Distance:2426.16,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"ATW",
    To:"MSP",
    Distance:379.776,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"ATW",
    To:"ORD",
    Distance:258.082,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"ATW",
    To:"SFB",
    Distance:1837.91,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"ATY",
    To:"MSP",
    Distance:309.774,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"ATY",
    To:"PIR",
    Distance:254.639,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"ATY",
    To:"PIR",
    Distance:254.639,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"ATZ",
    To:"CAI",
    Distance:344.124,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"ATZ",
    To:"CAI",
    Distance:344.124,
    Airport:"Marysya Airlines"
}),
new Routes(
{
    From:"ATZ",
    To:"JED",
    Distance:1017.72,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"ATZ",
    To:"KWI",
    Distance:1678.76,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"ATZ",
    To:"RUH",
    Distance:1583.76,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"ATZ",
    To:"SHJ",
    Distance:2448.78,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"AUA",
    To:"AMS",
    Distance:7878.42,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"AUA",
    To:"ATL",
    Distance:2767.16,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"AUA",
    To:"ATL",
    Distance:2767.16,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AUA",
    To:"ATL",
    Distance:2767.16,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUA",
    To:"BOG",
    Distance:978.884,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"AUA",
    To:"BOG",
    Distance:978.884,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"AUA",
    To:"BON",
    Distance:194.172,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AUA",
    To:"BOS",
    Distance:3321.99,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"AUA",
    To:"BWI",
    Distance:3037.55,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"AUA",
    To:"CCS",
    Distance:391.305,
    Airport:"Aero Lanka"
}),
new Routes(
{
    From:"AUA",
    To:"CCS",
    Distance:391.305,
    Airport:"Aserca Airlines"
}),
new Routes(
{
    From:"AUA",
    To:"CCS",
    Distance:391.305,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"AUA",
    To:"CCS",
    Distance:391.305,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"AUA",
    To:"CCS",
    Distance:391.305,
    Airport:"Myway Airlines"
}),
new Routes(
{
    From:"AUA",
    To:"CLT",
    Distance:2754.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUA",
    To:"CLT",
    Distance:2754.42,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AUA",
    To:"CUR",
    Distance:119.795,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"AUA",
    To:"CUR",
    Distance:119.795,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"AUA",
    To:"EWR",
    Distance:3160.83,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AUA",
    To:"FLL",
    Distance:1844.37,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"AUA",
    To:"IAD",
    Distance:3030.54,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AUA",
    To:"JBQ",
    Distance:675.084,
    Airport:"Omskavia Airline"
}),
new Routes(
{
    From:"AUA",
    To:"JFK",
    Distance:3150.36,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AUA",
    To:"JFK",
    Distance:3150.36,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"AUA",
    To:"LGA",
    Distance:3166.58,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AUA",
    To:"LRM",
    Distance:672.007,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"AUA",
    To:"LSP",
    Distance:81.4865,
    Airport:"Tiara Air"
}),
new Routes(
{
    From:"AUA",
    To:"MAR",
    Distance:285.483,
    Airport:"Tiara Air"
}),
new Routes(
{
    From:"AUA",
    To:"MCO",
    Distance:2123.17,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"AUA",
    To:"MIA",
    Distance:1828.11,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUA",
    To:"MIA",
    Distance:1828.11,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"AUA",
    To:"MIA",
    Distance:1828.11,
    Airport:"Myway Airlines"
}),
new Routes(
{
    From:"AUA",
    To:"MIA",
    Distance:1828.11,
    Airport:"Surinam Airways"
}),
new Routes(
{
    From:"AUA",
    To:"MIA",
    Distance:1828.11,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AUA",
    To:"PBM",
    Distance:1806.23,
    Airport:"Surinam Airways"
}),
new Routes(
{
    From:"AUA",
    To:"PHL",
    Distance:3086.35,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUA",
    To:"PHL",
    Distance:3086.35,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AUA",
    To:"PTY",
    Distance:1091.87,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"AUA",
    To:"VLN",
    Distance:346.609,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"AUA",
    To:"VLN",
    Distance:346.609,
    Airport:"Myway Airlines"
}),
new Routes(
{
    From:"AUA",
    To:"YYZ",
    Distance:3586.81,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"AUA",
    To:"YYZ",
    Distance:3586.81,
    Airport:"WestJet"
}),
new Routes(
{
    From:"AUC",
    To:"BOG",
    Distance:459.927,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"AUC",
    To:"BOG",
    Distance:459.927,
    Airport:"SATENA"
}),
new Routes(
{
    From:"AUG",
    To:"BOS",
    Distance:238.447,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"AUH",
    To:"ADE",
    Distance:1639.43,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"AUH",
    To:"ALA",
    Distance:2930.39,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"AUH",
    To:"ALA",
    Distance:2930.39,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"AMD",
    Distance:1835.16,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"AMD",
    Distance:1835.16,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"AUH",
    To:"AMM",
    Distance:1998.18,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"AMM",
    Distance:1998.18,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"AUH",
    To:"AMM",
    Distance:1998.18,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"AMS",
    Distance:5191.57,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"AUH",
    To:"AMS",
    Distance:5191.57,
    Airport:"Air France"
}),
new Routes(
{
    From:"AUH",
    To:"AMS",
    Distance:5191.57,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AUH",
    To:"AMS",
    Distance:5191.57,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"AMS",
    Distance:5191.57,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"AUH",
    To:"AMS",
    Distance:5191.57,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"AMS",
    Distance:5191.57,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"AUH",
    To:"ATH",
    Distance:3263.09,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"ATH",
    Distance:3263.09,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"BAH",
    Distance:452.445,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AUH",
    To:"BAH",
    Distance:452.445,
    Airport:"Air France"
}),
new Routes(
{
    From:"AUH",
    To:"BAH",
    Distance:452.445,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"BAH",
    Distance:452.445,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"AUH",
    To:"BAH",
    Distance:452.445,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AUH",
    To:"BAH",
    Distance:452.445,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"BAH",
    Distance:452.445,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"AUH",
    To:"BAH",
    Distance:452.445,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"BEG",
    Distance:3828.7,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"BEG",
    Distance:3828.7,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"AUH",
    To:"BEY",
    Distance:2128.75,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"BEY",
    Distance:2128.75,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"BGW",
    Distance:1410.2,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"BKK",
    Distance:4966.18,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"BKK",
    Distance:4966.18,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"AUH",
    To:"BKK",
    Distance:4966.18,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"BLR",
    Distance:2733.72,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"BLR",
    Distance:2733.72,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"BLR",
    Distance:2733.72,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"AUH",
    To:"BOM",
    Distance:1970.88,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"AUH",
    To:"BOM",
    Distance:1970.88,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"BOM",
    Distance:1970.88,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"BOM",
    Distance:1970.88,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"AUH",
    To:"BRU",
    Distance:5166.69,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"AUH",
    To:"BRU",
    Distance:5166.69,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"BRU",
    Distance:5166.69,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"BSR",
    Distance:967.895,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"CAI",
    Distance:2377.98,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"AUH",
    To:"CAI",
    Distance:2377.98,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"CCJ",
    Distance:2690.44,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"AUH",
    To:"CCJ",
    Distance:2690.44,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"CCJ",
    Distance:2690.44,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"AUH",
    To:"CDG",
    Distance:5251.86,
    Airport:"Air France"
}),
new Routes(
{
    From:"AUH",
    To:"CDG",
    Distance:5251.86,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"CGK",
    Distance:6574.68,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"CGK",
    Distance:6574.68,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"CGK",
    Distance:6574.68,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"AUH",
    To:"CMB",
    Distance:3300.11,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"CMB",
    Distance:3300.11,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"CMB",
    Distance:3300.11,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"CMB",
    Distance:3300.11,
    Airport:"L"
}),
new Routes(
{
    From:"AUH",
    To:"CMB",
    Distance:3300.11,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"CMN",
    Distance:6052.78,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"CMN",
    Distance:6052.78,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"AUH",
    To:"CMN",
    Distance:6052.78,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"AUH",
    To:"COK",
    Distance:2793.98,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"AUH",
    To:"COK",
    Distance:2793.98,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"COK",
    Distance:2793.98,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"COK",
    Distance:2793.98,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"AUH",
    To:"CTU",
    Distance:4871.83,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"CTU",
    Distance:4871.83,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"CTU",
    Distance:4871.83,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"DAC",
    Distance:3617.7,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"DEL",
    Distance:2277.38,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"AUH",
    To:"DEL",
    Distance:2277.38,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"DEL",
    Distance:2277.38,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"DEL",
    Distance:2277.38,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"AUH",
    To:"DME",
    Distance:3706.72,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"DME",
    Distance:3706.72,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"DMM",
    Distance:537.343,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"DMM",
    Distance:537.343,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"AUH",
    To:"DMM",
    Distance:537.343,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"AUH",
    To:"DOH",
    Distance:324.712,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"DOH",
    Distance:324.712,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"AUH",
    To:"DUB",
    Distance:5940.79,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"AUH",
    To:"DUB",
    Distance:5940.79,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"DUS",
    Distance:5026.29,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AUH",
    To:"DUS",
    Distance:5026.29,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"DUS",
    Distance:5026.29,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"EBL",
    Distance:1663.35,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"FCO",
    Distance:4339.25,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"FCO",
    Distance:4339.25,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"FRA",
    Distance:4863.59,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"AUH",
    To:"FRA",
    Distance:4863.59,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AUH",
    To:"FRA",
    Distance:4863.59,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"FRA",
    Distance:4863.59,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"AUH",
    To:"FRA",
    Distance:4863.59,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"GRU",
    Distance:12120.5,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"GVA",
    Distance:4926.33,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"GVA",
    Distance:4926.33,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"GXF",
    Distance:1122.36,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"AUH",
    To:"HKG",
    Distance:6006.73,
    Airport:"Air Seychelles"
}),
new Routes(
{
    From:"AUH",
    To:"HKG",
    Distance:6006.73,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"HKT",
    Distance:4974.2,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AUH",
    To:"HKT",
    Distance:4974.2,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"HYD",
    Distance:2587.91,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"HYD",
    Distance:2587.91,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"AUH",
    To:"IAD",
    Distance:11386.8,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"IAD",
    Distance:11386.8,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"ICN",
    Distance:6837.28,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"ICN",
    Distance:6837.28,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"ICN",
    Distance:6837.28,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"AUH",
    To:"IKA",
    Distance:1266.69,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"ISB",
    Distance:2059.2,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"ISB",
    Distance:2059.2,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"ISB",
    Distance:2059.2,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"ISB",
    Distance:2059.2,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"ISB",
    Distance:2059.2,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"AUH",
    To:"ISB",
    Distance:2059.2,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"AUH",
    To:"IST",
    Distance:3017.84,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"IST",
    Distance:3017.84,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"JAI",
    Distance:2135.58,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"JED",
    Distance:1613.63,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"JED",
    Distance:1613.63,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"AUH",
    To:"JED",
    Distance:1613.63,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"JFK",
    Distance:11031.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"JFK",
    Distance:11031.4,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"JNB",
    Distance:6298.56,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"JNB",
    Distance:6298.56,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"JNB",
    Distance:6298.56,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"JNB",
    Distance:6298.56,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"AUH",
    To:"KHI",
    Distance:1264.7,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"KHI",
    Distance:1264.7,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"KHI",
    Distance:1264.7,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"KIH",
    Distance:242.298,
    Airport:"Kish Air"
}),
new Routes(
{
    From:"AUH",
    To:"KRT",
    Distance:2504.99,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"KRT",
    Distance:2504.99,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"KRT",
    Distance:2504.99,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"KRT",
    Distance:2504.99,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"AUH",
    To:"KTM",
    Distance:3080.78,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"KUL",
    Distance:5588.36,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"KUL",
    Distance:5588.36,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"KUL",
    Distance:5588.36,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"KUL",
    Distance:5588.36,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"KWI",
    Distance:850.402,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"KWI",
    Distance:850.402,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"KWI",
    Distance:850.402,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"AUH",
    To:"KWI",
    Distance:850.402,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"AUH",
    To:"KWI",
    Distance:850.402,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"LCA",
    Distance:2332.88,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"AUH",
    To:"LCA",
    Distance:2332.88,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"LHE",
    Distance:2089.62,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"LHE",
    Distance:2089.62,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"LHE",
    Distance:2089.62,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"LHE",
    Distance:2089.62,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"LHE",
    Distance:2089.62,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"LHE",
    Distance:2089.62,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"AUH",
    To:"LHE",
    Distance:2089.62,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"AUH",
    To:"LHR",
    Distance:5516.78,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"LHR",
    Distance:5516.78,
    Airport:"British Airways"
}),
new Routes(
{
    From:"AUH",
    To:"LHR",
    Distance:5516.78,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"LHR",
    Distance:5516.78,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"LHR",
    Distance:5516.78,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"AUH",
    To:"LOS",
    Distance:5807.56,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"MAA",
    Distance:2966.76,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"MAA",
    Distance:2966.76,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"AUH",
    To:"MAN",
    Distance:5678.28,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"MCT",
    Distance:380.653,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"AUH",
    To:"MCT",
    Distance:380.653,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"MCT",
    Distance:380.653,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"MCT",
    Distance:380.653,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"AUH",
    To:"MCT",
    Distance:380.653,
    Airport:"British Airways"
}),
new Routes(
{
    From:"AUH",
    To:"MCT",
    Distance:380.653,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"MCT",
    Distance:380.653,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"MCT",
    Distance:380.653,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"AUH",
    To:"MCT",
    Distance:380.653,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"AUH",
    To:"MCT",
    Distance:380.653,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"MCT",
    Distance:380.653,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"AUH",
    To:"MCT",
    Distance:380.653,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"MED",
    Distance:1511.69,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"MED",
    Distance:1511.69,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"AUH",
    To:"MED",
    Distance:1511.69,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"MEL",
    Distance:11651.7,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"MEL",
    Distance:11651.7,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"MEL",
    Distance:11651.7,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"AUH",
    To:"MLE",
    Distance:3024.69,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"MLE",
    Distance:3024.69,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"MNL",
    Distance:6984.16,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"MNL",
    Distance:6984.16,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"MSQ",
    Distance:3949.77,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"MSQ",
    Distance:3949.77,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"MUC",
    Distance:4580.01,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"AUH",
    To:"MUC",
    Distance:4580.01,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AUH",
    To:"MUC",
    Distance:4580.01,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"MXP",
    Distance:4713.72,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"MXP",
    Distance:4713.72,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"NBO",
    Distance:3443.17,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"NBO",
    Distance:3443.17,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"NBO",
    Distance:3443.17,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"NRT",
    Distance:8088.47,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"AUH",
    To:"NRT",
    Distance:8088.47,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"ORD",
    Distance:11687.9,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"ORD",
    Distance:11687.9,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"PEK",
    Distance:5954.84,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AUH",
    To:"PEK",
    Distance:5954.84,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"PEK",
    Distance:5954.84,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"AUH",
    To:"PEK",
    Distance:5954.84,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"PEK",
    Distance:5954.84,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"PEW",
    Distance:1947.33,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"PEW",
    Distance:1947.33,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"PEW",
    Distance:1947.33,
    Airport:"Shaheen Air International"
}),
new Routes(
{
    From:"AUH",
    To:"PEW",
    Distance:1947.33,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"AUH",
    To:"PVG",
    Distance:6549.93,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"PVG",
    Distance:6549.93,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"RIY",
    Distance:1218.56,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"AUH",
    To:"RUH",
    Distance:805.388,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"RUH",
    Distance:805.388,
    Airport:"Nas Air"
}),
new Routes(
{
    From:"AUH",
    To:"RUH",
    Distance:805.388,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"RYK",
    Distance:1615.83,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"SAH",
    Distance:1475.41,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"SEZ",
    Distance:3237.96,
    Airport:"Air Seychelles"
}),
new Routes(
{
    From:"AUH",
    To:"SEZ",
    Distance:3237.96,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"SEZ",
    Distance:3237.96,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"SGN",
    Distance:5680.17,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"SGN",
    Distance:5680.17,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"AUH",
    To:"SIN",
    Distance:5885.79,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AUH",
    To:"SIN",
    Distance:5885.79,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"AUH",
    To:"SIN",
    Distance:5885.79,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"SIN",
    Distance:5885.79,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"SIN",
    Distance:5885.79,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"AUH",
    To:"SIN",
    Distance:5885.79,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"AUH",
    To:"SYD",
    Distance:12061.4,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUH",
    To:"SYD",
    Distance:12061.4,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"SYD",
    Distance:12061.4,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"AUH",
    To:"TRV",
    Distance:2955.21,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"AUH",
    To:"TRV",
    Distance:2955.21,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"TRV",
    Distance:2955.21,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"AUH",
    To:"TSE",
    Distance:3288.08,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"AUH",
    To:"TSE",
    Distance:3288.08,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"TXL",
    Distance:4663.67,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AUH",
    To:"TXL",
    Distance:4663.67,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"YYZ",
    Distance:11122.3,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"AUH",
    To:"YYZ",
    Distance:11122.3,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"AUH",
    To:"ZYL",
    Distance:3748.14,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"AUK",
    To:"EMK",
    Distance:14.611,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"AUK",
    To:"SXP",
    Distance:20.1658,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"AUQ",
    To:"NHV",
    Distance:171.935,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"AUQ",
    To:"PPT",
    Distance:1434.95,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"AUQ",
    To:"UAH",
    Distance:109.967,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"AUQ",
    To:"UAP",
    Distance:125.829,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"AUR",
    To:"ORY",
    Distance:426.336,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"AUS",
    To:"ATL",
    Distance:1305.99,
    Airport:"Air France"
}),
new Routes(
{
    From:"AUS",
    To:"ATL",
    Distance:1305.99,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"AUS",
    To:"ATL",
    Distance:1305.99,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AUS",
    To:"ATL",
    Distance:1305.99,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AUS",
    To:"ATL",
    Distance:1305.99,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"ATL",
    Distance:1305.99,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"ATL",
    Distance:1305.99,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"AUS",
    To:"BNA",
    Distance:1215.97,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"BOS",
    Distance:2729.7,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"AUS",
    To:"BWI",
    Distance:2157.03,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"CLE",
    Distance:1889.46,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"CLT",
    Distance:1659.03,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"CLT",
    Distance:1659.03,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AUS",
    To:"CUN",
    Distance:1484.31,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"AUS",
    To:"CUN",
    Distance:1484.31,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"DAL",
    Distance:304.974,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"DCA",
    Distance:2114.36,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"DEN",
    Distance:1248.82,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"AUS",
    To:"DEN",
    Distance:1248.82,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"DEN",
    Distance:1248.82,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"DEN",
    Distance:1248.82,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"DFW",
    Distance:306.388,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"DFW",
    Distance:306.388,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AUS",
    To:"DTW",
    Distance:1848.53,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AUS",
    To:"ELP",
    Distance:848.835,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"AUS",
    To:"ELP",
    Distance:848.835,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"EWR",
    Distance:2416.91,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"EWR",
    Distance:2416.91,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"FLL",
    Distance:1775.67,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"AUS",
    To:"FLL",
    Distance:1775.67,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"HOU",
    Distance:238.379,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"HRL",
    Distance:441.005,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"AUS",
    To:"HRL",
    Distance:441.005,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"IAD",
    Distance:2084.36,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"IAH",
    Distance:225.232,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"JFK",
    Distance:2445.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"JFK",
    Distance:2445.46,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AUS",
    To:"JFK",
    Distance:2445.46,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"AUS",
    To:"JFK",
    Distance:2445.46,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AUS",
    To:"LAS",
    Distance:1751.14,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AUS",
    To:"LAS",
    Distance:1751.14,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"LAX",
    Distance:1994.36,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"LAX",
    Distance:1994.36,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"LAX",
    Distance:1994.36,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"LAX",
    Distance:1994.36,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AUS",
    To:"LAX",
    Distance:1994.36,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"LBB",
    Distance:549.798,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"LGB",
    Distance:1969.31,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"AUS",
    To:"LHR",
    Distance:7892.39,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"LHR",
    Distance:7892.39,
    Airport:"British Airways"
}),
new Routes(
{
    From:"AUS",
    To:"LHR",
    Distance:7892.39,
    Airport:"Finnair"
}),
new Routes(
{
    From:"AUS",
    To:"LHR",
    Distance:7892.39,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"MCO",
    Distance:1597.01,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"AUS",
    To:"MCO",
    Distance:1597.01,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AUS",
    To:"MCO",
    Distance:1597.01,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"AUS",
    To:"MCO",
    Distance:1597.01,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"MDW",
    Distance:1565.16,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"AUS",
    To:"MDW",
    Distance:1565.16,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"MEM",
    Distance:899.347,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AUS",
    To:"MEX",
    Distance:1204.56,
    Airport:"Aeromar"
}),
new Routes(
{
    From:"AUS",
    To:"MSP",
    Distance:1678.89,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AUS",
    To:"MSY",
    Distance:713.293,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"MSY",
    Distance:713.293,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"OAK",
    Distance:2405.3,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"AUS",
    To:"OAK",
    Distance:2405.3,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"ORD",
    Distance:1574.56,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"ORD",
    Distance:1574.56,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AUS",
    To:"ORD",
    Distance:1574.56,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"PHL",
    Distance:2299.09,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"PHL",
    Distance:2299.09,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AUS",
    To:"PHX",
    Distance:1400.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"PHX",
    Distance:1400.87,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"PHX",
    Distance:1400.87,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AUS",
    To:"SAN",
    Distance:1870.02,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"SEA",
    Distance:2847.39,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"SFO",
    Distance:2416,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"AUS",
    To:"SFO",
    Distance:2416,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"SFO",
    Distance:2416,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"AUS",
    To:"SJC",
    Distance:2371.41,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"AUS",
    To:"SJC",
    Distance:2371.41,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUS",
    To:"SLC",
    Distance:1746.59,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AUS",
    To:"SMF",
    Distance:2379.31,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"AUS",
    To:"TPA",
    Distance:1490.25,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"AUU",
    To:"CNS",
    Distance:584.555,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"AUU",
    To:"CUQ",
    Distance:157.229,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"AUX",
    To:"BSB",
    Distance:961.671,
    Airport:"Azul"
}),
new Routes(
{
    From:"AUX",
    To:"MAB",
    Distance:229.338,
    Airport:"Azul"
}),
new Routes(
{
    From:"AUX",
    To:"PMW",
    Distance:335.293,
    Airport:"Azul"
}),
new Routes(
{
    From:"AUX",
    To:"PMW",
    Distance:335.293,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"AUY",
    To:"TAH",
    Distance:105.207,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"AVL",
    To:"ATL",
    Distance:264.353,
    Airport:"Air France"
}),
new Routes(
{
    From:"AVL",
    To:"ATL",
    Distance:264.353,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"AVL",
    To:"ATL",
    Distance:264.353,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AVL",
    To:"ATL",
    Distance:264.353,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AVL",
    To:"CLT",
    Distance:147.122,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AVL",
    To:"CLT",
    Distance:147.122,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AVL",
    To:"DTW",
    Distance:756.746,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AVL",
    To:"FLL",
    Distance:1065.81,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AVL",
    To:"ORD",
    Distance:863.155,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AVL",
    To:"PGD",
    Distance:948.434,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AVL",
    To:"PIE",
    Distance:836.969,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AVL",
    To:"SFB",
    Distance:750.496,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AVN",
    To:"AJA",
    Distance:386.679,
    Airport:"Nationwide Airlines"
}),
new Routes(
{
    From:"AVN",
    To:"LIG",
    Distance:365.015,
    Airport:"Nationwide Airlines"
}),
new Routes(
{
    From:"AVP",
    To:"ATL",
    Distance:1149.09,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AVP",
    To:"ATL",
    Distance:1149.09,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"AVP",
    To:"CLT",
    Distance:819,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AVP",
    To:"CLT",
    Distance:819,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AVP",
    To:"DTW",
    Distance:639.909,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AVP",
    To:"ORD",
    Distance:1013.62,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"AVP",
    To:"PHL",
    Distance:168.076,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AVP",
    To:"PHL",
    Distance:168.076,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AVP",
    To:"SFB",
    Distance:1483.28,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AVV",
    To:"SYD",
    Distance:755.52,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"AWD",
    To:"FTA",
    Distance:72.5962,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"AWD",
    To:"TAH",
    Distance:46.5931,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"AWZ",
    To:"BND",
    Distance:868.777,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"AWZ",
    To:"DXB",
    Distance:935.316,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"AWZ",
    To:"IFN",
    Distance:331.692,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"AWZ",
    To:"IFN",
    Distance:331.692,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"AWZ",
    To:"KIH",
    Distance:737.408,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"AWZ",
    To:"KIH",
    Distance:737.408,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"AWZ",
    To:"KWI",
    Distance:246.758,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"AWZ",
    To:"KWI",
    Distance:246.758,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"AWZ",
    To:"MED",
    Distance:1165.52,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AWZ",
    To:"MHD",
    Distance:1142.49,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"AWZ",
    To:"MHD",
    Distance:1142.49,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"AWZ",
    To:"MHD",
    Distance:1142.49,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"AWZ",
    To:"PGU",
    Distance:584.818,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"AWZ",
    To:"RAS",
    Distance:670.306,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"AWZ",
    To:"SRY",
    Distance:716.762,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"AWZ",
    To:"SRY",
    Distance:716.762,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"AWZ",
    To:"SYZ",
    Distance:417.868,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"AWZ",
    To:"SYZ",
    Distance:417.868,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"AWZ",
    To:"SYZ",
    Distance:417.868,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"AWZ",
    To:"TBZ",
    Distance:790.123,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"AWZ",
    To:"THR",
    Distance:538.553,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"AWZ",
    To:"THR",
    Distance:538.553,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"AWZ",
    To:"THR",
    Distance:538.553,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"AWZ",
    To:"THR",
    Distance:538.553,
    Airport:"Kish Air"
}),
new Routes(
{
    From:"AXA",
    To:"ANU",
    Distance:178.868,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"AXA",
    To:"SJU",
    Distance:312.14,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"AXA",
    To:"SJU",
    Distance:312.14,
    Airport:"T.J. Air"
}),
new Routes(
{
    From:"AXA",
    To:"STT",
    Distance:203.083,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"AXA",
    To:"SXM",
    Distance:19.0896,
    Airport:"SOCHI AIR CHATER"
}),
new Routes(
{
    From:"AXA",
    To:"SXM",
    Distance:19.0896,
    Airport:"Windward Islands Airways"
}),
new Routes(
{
    From:"AXD",
    To:"ATH",
    Distance:367.766,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"AXD",
    To:"ATH",
    Distance:367.766,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"AXD",
    To:"JSH",
    Distance:627.241,
    Airport:"Big Sky Airlines"
}),
new Routes(
{
    From:"AXK",
    To:"SAH",
    Distance:298.22,
    Airport:"Airlines Of Tasmania"
}),
new Routes(
{
    From:"AXM",
    To:"BOG",
    Distance:181.625,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"AXM",
    To:"FLL",
    Distance:2448.97,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"AXP",
    To:"CRI",
    Distance:40.1507,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"AXP",
    To:"NAS",
    Distance:458.188,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"AXR",
    To:"KKR",
    Distance:54.3622,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"AXT",
    To:"CTS",
    Distance:372.328,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"AXT",
    To:"CTS",
    Distance:372.328,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"AXT",
    To:"HND",
    Distance:453.469,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"AXT",
    To:"HND",
    Distance:453.469,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"AXT",
    To:"ICN",
    Distance:1219.68,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"AXT",
    To:"ITM",
    Distance:683.656,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"AXT",
    To:"ITM",
    Distance:683.656,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"AXT",
    To:"NGO",
    Distance:609.062,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"AXU",
    To:"ADD",
    Distance:574.758,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"AXU",
    To:"LLI",
    Distance:242.526,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"AYP",
    To:"LIM",
    Distance:339.981,
    Airport:"AeroWorld "
}),
new Routes(
{
    From:"AYP",
    To:"LIM",
    Distance:339.981,
    Airport:"Star Peru (2I)"
}),
new Routes(
{
    From:"AYQ",
    To:"ASP",
    Distance:333.489,
    Airport:"Qantas"
}),
new Routes(
{
    From:"AYQ",
    To:"CNS",
    Distance:1788.03,
    Airport:"Qantas"
}),
new Routes(
{
    From:"AYQ",
    To:"SYD",
    Distance:2177.58,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"AYQ",
    To:"SYD",
    Distance:2177.58,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"AYT",
    To:"ADA",
    Distance:398.219,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"ADA",
    Distance:398.219,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"ADB",
    Distance:356.418,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"ADB",
    Distance:356.418,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"AMS",
    Distance:2654.81,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"AMS",
    Distance:2654.81,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AYT",
    To:"BGO",
    Distance:3167.4,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AYT",
    To:"BGW",
    Distance:1286.21,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"BHX",
    Distance:3060.35,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"BHX",
    Distance:3060.35,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"AYT",
    To:"BHX",
    Distance:3060.35,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"AYT",
    To:"BLL",
    Distance:2651.16,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"BRE",
    Distance:2474.87,
    Airport:"Germania"
}),
new Routes(
{
    From:"AYT",
    To:"BRS",
    Distance:3082.54,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"AYT",
    To:"BRS",
    Distance:3082.54,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"AYT",
    To:"BRU",
    Distance:2597.76,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"AYT",
    To:"BRU",
    Distance:2597.76,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"BSL",
    Distance:2241.16,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"BSL",
    Distance:2241.16,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AYT",
    To:"CGN",
    Distance:2432.08,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AYT",
    To:"CGN",
    Distance:2432.08,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"AYT",
    To:"CGN",
    Distance:2432.08,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"AYT",
    To:"CGN",
    Distance:2432.08,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"CGN",
    Distance:2432.08,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"AYT",
    To:"CPH",
    Distance:2489.08,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"DRS",
    Distance:2077.83,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AYT",
    To:"DRS",
    Distance:2077.83,
    Airport:"Germania"
}),
new Routes(
{
    From:"AYT",
    To:"DUS",
    Distance:2478.7,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AYT",
    To:"DUS",
    Distance:2478.7,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"AYT",
    To:"DUS",
    Distance:2478.7,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"AYT",
    To:"DUS",
    Distance:2478.7,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"DUS",
    Distance:2478.7,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"AYT",
    To:"EBL",
    Distance:1176.87,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"ECN",
    Distance:310.414,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"EIN",
    Distance:2571.37,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AYT",
    To:"ERF",
    Distance:2217.03,
    Airport:"Germania"
}),
new Routes(
{
    From:"AYT",
    To:"ESB",
    Distance:406.662,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"FDH",
    Distance:2110.52,
    Airport:"Germania"
}),
new Routes(
{
    From:"AYT",
    To:"FMO",
    Distance:2475.73,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AYT",
    To:"FRA",
    Distance:2299.15,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"AYT",
    To:"FRA",
    Distance:2299.15,
    Airport:"Germania"
}),
new Routes(
{
    From:"AYT",
    To:"FRA",
    Distance:2299.15,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"FRA",
    Distance:2299.15,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"AYT",
    To:"GLA",
    Distance:3368.16,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"GRQ",
    Distance:2598.94,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AYT",
    To:"GRZ",
    Distance:1689.59,
    Airport:"Niki"
}),
new Routes(
{
    From:"AYT",
    To:"GRZ",
    Distance:1689.59,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"GVA",
    Distance:2288.57,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"HAJ",
    Distance:2387.11,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"AYT",
    To:"HAJ",
    Distance:2387.11,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"HAJ",
    Distance:2387.11,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"AYT",
    To:"HAM",
    Distance:2454.15,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AYT",
    To:"HAM",
    Distance:2454.15,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"AYT",
    To:"HAM",
    Distance:2454.15,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"HAM",
    Distance:2454.15,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"AYT",
    To:"HAM",
    Distance:2454.15,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"HEL",
    Distance:2636.74,
    Airport:"Finnair"
}),
new Routes(
{
    From:"AYT",
    To:"IST",
    Distance:484.873,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"AYT",
    To:"IST",
    Distance:484.873,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"AYT",
    To:"IST",
    Distance:484.873,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"KSF",
    Distance:2334,
    Airport:"Germania"
}),
new Routes(
{
    From:"AYT",
    To:"KZN",
    Distance:2501.89,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"AYT",
    To:"LBA",
    Distance:3115.55,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"AYT",
    To:"LED",
    Distance:2546.83,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"LEJ",
    Distance:2179.11,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AYT",
    To:"LEJ",
    Distance:2179.11,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"AYT",
    To:"LEJ",
    Distance:2179.11,
    Airport:"Germania"
}),
new Routes(
{
    From:"AYT",
    To:"LEJ",
    Distance:2179.11,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"LGW",
    Distance:2908.05,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"AYT",
    To:"LGW",
    Distance:2908.05,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"LGW",
    Distance:2908.05,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"AYT",
    To:"LGW",
    Distance:2908.05,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"AYT",
    To:"LGW",
    Distance:2908.05,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AYT",
    To:"LNZ",
    Distance:1847.2,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"LTN",
    Distance:2949.1,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"AYT",
    To:"LTN",
    Distance:2949.1,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"AYT",
    To:"LUX",
    Distance:2424.63,
    Airport:"Luxair"
}),
new Routes(
{
    From:"AYT",
    To:"MAN",
    Distance:3130.42,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"AYT",
    To:"MAN",
    Distance:3130.42,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"MAN",
    Distance:3130.42,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"AYT",
    To:"MAN",
    Distance:3130.42,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"AYT",
    To:"MAN",
    Distance:3130.42,
    Airport:"easyJet"
}),
new Routes(
{
    From:"AYT",
    To:"MUC",
    Distance:2000.93,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AYT",
    To:"MUC",
    Distance:2000.93,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"AYT",
    To:"MUC",
    Distance:2000.93,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"MUC",
    Distance:2000.93,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"AYT",
    To:"NUE",
    Distance:2114.72,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AYT",
    To:"NUE",
    Distance:2114.72,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"NUE",
    Distance:2114.72,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"AYT",
    To:"ORY",
    Distance:2644.18,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"AYT",
    To:"OSL",
    Distance:2942.67,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AYT",
    To:"PAD",
    Distance:2390.29,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AYT",
    To:"PAD",
    Distance:2390.29,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"AYT",
    To:"PAD",
    Distance:2390.29,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"PRG",
    Distance:1974.8,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"AYT",
    To:"RLG",
    Distance:2366.38,
    Airport:"Germania"
}),
new Routes(
{
    From:"AYT",
    To:"ROV",
    Distance:1369.34,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"RTM",
    Distance:2655.14,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"AYT",
    To:"SAW",
    Distance:463.082,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"SAW",
    Distance:463.082,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"SAW",
    Distance:463.082,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"STR",
    Distance:2182.4,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AYT",
    To:"STR",
    Distance:2182.4,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"AYT",
    To:"STR",
    Distance:2182.4,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"STR",
    Distance:2182.4,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"AYT",
    To:"SVO",
    Distance:2178.24,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"SVO",
    Distance:2178.24,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"AYT",
    To:"SXF",
    Distance:2186.39,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"AYT",
    To:"SXF",
    Distance:2186.39,
    Airport:"Germania"
}),
new Routes(
{
    From:"AYT",
    To:"SZG",
    Distance:1891.08,
    Airport:"Niki"
}),
new Routes(
{
    From:"AYT",
    To:"SZG",
    Distance:1891.08,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"TRD",
    Distance:3243.42,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AYT",
    To:"TRF",
    Distance:2884.54,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"AYT",
    To:"TXL",
    Distance:2211.77,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"AYT",
    To:"TXL",
    Distance:2211.77,
    Airport:"Germania"
}),
new Routes(
{
    From:"AYT",
    To:"TXL",
    Distance:2211.77,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"TZX",
    Distance:900.308,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"VIE",
    Distance:1701.93,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"VIE",
    Distance:1701.93,
    Airport:"Niki"
}),
new Routes(
{
    From:"AYT",
    To:"VIE",
    Distance:1701.93,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"VIE",
    Distance:1701.93,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"VKO",
    Distance:2134.87,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"VKO",
    Distance:2134.87,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"ZQW",
    Distance:2326.9,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"AYT",
    To:"ZRH",
    Distance:2165.57,
    Airport:"Belair Airlines"
}),
new Routes(
{
    From:"AYT",
    To:"ZRH",
    Distance:2165.57,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"AYT",
    To:"ZRH",
    Distance:2165.57,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"AZA",
    To:"ATW",
    Distance:2334.6,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"BIL",
    Distance:1415.24,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"BIS",
    Distance:1757.78,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"BLI",
    Distance:1944.16,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"BZN",
    Distance:1387.22,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"CID",
    Distance:1992.33,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"DLH",
    Distance:2226.19,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"EUG",
    Distance:1562.67,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"FAR",
    Distance:1963.76,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"FSD",
    Distance:1724.86,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"FWA",
    Distance:2483.86,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"GFK",
    Distance:2028.3,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"GRI",
    Distance:1454.95,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"GRR",
    Distance:2508.61,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"GTF",
    Distance:1576.28,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"ICT",
    Distance:1373.55,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"IDA",
    Distance:1135.51,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"LAS",
    Distance:444.066,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"MLI",
    Distance:2068.86,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"MOT",
    Distance:1874.05,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"MSO",
    Distance:1527.09,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"OAK",
    Distance:1073.93,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"PIA",
    Distance:2107.85,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"PSC",
    Distance:1573.81,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"PVU",
    Distance:768.405,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"RAP",
    Distance:1406.19,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"RFD",
    Distance:2206.49,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"RST",
    Distance:2031.36,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"SBN",
    Distance:2410.89,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"SGF",
    Distance:1711.92,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZA",
    To:"STC",
    Distance:2025.4,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"AZD",
    To:"BND",
    Distance:559.314,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"AZD",
    To:"MED",
    Distance:1642.7,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"AZD",
    To:"MHD",
    Distance:689.728,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"AZD",
    To:"MHD",
    Distance:689.728,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"AZD",
    To:"MHD",
    Distance:689.728,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"AZD",
    To:"THR",
    Distance:501.959,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"AZD",
    To:"THR",
    Distance:501.959,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"AZI",
    To:"DXB",
    Distance:129.493,
    Airport:"VRG Linhas Aereas"
}),
new Routes(
{
    From:"AZI",
    To:"FJR",
    Distance:203.154,
    Airport:"VRG Linhas Aereas"
}),
new Routes(
{
    From:"AZI",
    To:"XSB",
    Distance:191.072,
    Airport:"VRG Linhas Aereas"
}),
new Routes(
{
    From:"AZI",
    To:"ZDY",
    Distance:214.932,
    Airport:"VRG Linhas Aereas"
}),
new Routes(
{
    From:"AZN",
    To:"DME",
    Distance:2986,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"AZN",
    To:"LED",
    Distance:3570.18,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"AZN",
    To:"TAS",
    Distance:259.628,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"AZO",
    To:"ATL",
    Distance:961.113,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AZO",
    To:"ATL",
    Distance:961.113,
    Airport:"Pinnacle Airlines"
}),
new Routes(
{
    From:"AZO",
    To:"DTW",
    Distance:181.057,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AZO",
    To:"MSP",
    Distance:684.155,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"AZO",
    To:"ORD",
    Distance:196.167,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"AZO",
    To:"ORD",
    Distance:196.167,
    Airport:"US Airways"
}),
new Routes(
{
    From:"AZR",
    To:"ALG",
    Distance:1034.89,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"AZR",
    To:"BMW",
    Distance:727.306,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"AZR",
    To:"CZL",
    Distance:1135.85,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"AZR",
    To:"INZ",
    Distance:273.913,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"AZR",
    To:"OGX",
    Distance:704.928,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"AZR",
    To:"ORN",
    Distance:866.766,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"AZS",
    To:"JFK",
    Distance:2407.42,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"AZS",
    To:"SJU",
    Distance:404.178,
    Airport:"Aereonautica militare"
}),
new Routes(
{
    From:"AZS",
    To:"YUL",
    Distance:2936.87,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"AZS",
    To:"YUL",
    Distance:2936.87,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"AZS",
    To:"YYZ",
    Distance:2866.66,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"AZS",
    To:"YYZ",
    Distance:2866.66,
    Airport:"WestJet"
}),
new Routes(
{
    From:"BAH",
    To:"ADD",
    Distance:2292.22,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"AMM",
    Distance:1545.75,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"AMM",
    Distance:1545.75,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"BAH",
    To:"AUH",
    Distance:452.445,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BAH",
    To:"AUH",
    Distance:452.445,
    Airport:"Air France"
}),
new Routes(
{
    From:"BAH",
    To:"AUH",
    Distance:452.445,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BAH",
    To:"AUH",
    Distance:452.445,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BAH",
    To:"AUH",
    Distance:452.445,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BAH",
    To:"AUH",
    Distance:452.445,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BAH",
    To:"AUH",
    Distance:452.445,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"AUH",
    Distance:452.445,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BAH",
    To:"BEY",
    Distance:1679.47,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"BGW",
    Distance:992.41,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"BKK",
    Distance:5386.3,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"BKK",
    Distance:5386.3,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BAH",
    To:"BKK",
    Distance:5386.3,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BAH",
    To:"BOM",
    Distance:2412.73,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"BOM",
    Distance:2412.73,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BAH",
    To:"CAI",
    Distance:1929.8,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"BAH",
    To:"CAI",
    Distance:1929.8,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"CDG",
    Distance:4821.75,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"CMB",
    Distance:3751.74,
    Airport:"L"
}),
new Routes(
{
    From:"BAH",
    To:"CMB",
    Distance:3751.74,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"BAH",
    To:"COK",
    Distance:3245.83,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"DEL",
    Distance:2619.78,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"DMM",
    Distance:86.1856,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"DMM",
    Distance:86.1856,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"BAH",
    To:"DOH",
    Distance:145.963,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BAH",
    To:"DOH",
    Distance:145.963,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"BAH",
    To:"DOH",
    Distance:145.963,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BAH",
    To:"DOH",
    Distance:145.963,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BAH",
    To:"DOH",
    Distance:145.963,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"DOH",
    Distance:145.963,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BAH",
    To:"DOH",
    Distance:145.963,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BAH",
    To:"DOH",
    Distance:145.963,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BAH",
    To:"DOH",
    Distance:145.963,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BAH",
    To:"DOH",
    Distance:145.963,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BAH",
    To:"DWC",
    Distance:487.922,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"BAH",
    To:"DWC",
    Distance:487.922,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"DXB",
    Distance:487.062,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"BAH",
    To:"DXB",
    Distance:487.062,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BAH",
    To:"DXB",
    Distance:487.062,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"BAH",
    To:"DXB",
    Distance:487.062,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"DXB",
    Distance:487.062,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BAH",
    To:"FRA",
    Distance:4441.35,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"IKA",
    Distance:1018.11,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"ISB",
    Distance:2307.55,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"IST",
    Distance:2586.06,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"IST",
    Distance:2586.06,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BAH",
    To:"IXE",
    Distance:2931.53,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"BAH",
    To:"JED",
    Distance:1272.19,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"JED",
    Distance:1272.19,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"BAH",
    To:"KHI",
    Distance:1663.28,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"KRT",
    Distance:2217.72,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"KWI",
    Distance:420.416,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"KWI",
    Distance:420.416,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"BAH",
    To:"KWI",
    Distance:420.416,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"BAH",
    To:"KWI",
    Distance:420.416,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BAH",
    To:"LCA",
    Distance:1884.58,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"LHE",
    Distance:2381.23,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"LHE",
    Distance:2381.23,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"BAH",
    To:"LHR",
    Distance:5093.88,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BAH",
    To:"LHR",
    Distance:5093.88,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BAH",
    To:"LHR",
    Distance:5093.88,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"LHR",
    Distance:5093.88,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BAH",
    To:"MAA",
    Distance:3416.28,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"MCT",
    Distance:826.708,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"MCT",
    Distance:826.708,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"BAH",
    To:"MCT",
    Distance:826.708,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BAH",
    To:"MED",
    Distance:1113.74,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"MED",
    Distance:1113.74,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"BAH",
    To:"MHD",
    Distance:1398.75,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"MHD",
    Distance:1398.75,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"BAH",
    To:"MNL",
    Distance:7369.79,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"MNL",
    Distance:7369.79,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"BAH",
    To:"NJF",
    Distance:877.545,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"PEW",
    Distance:2178.6,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"RUH",
    Distance:420.662,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"RUH",
    Distance:420.662,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"BAH",
    To:"SAH",
    Distance:1372.17,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"SAH",
    Distance:1372.17,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"BAH",
    To:"SHJ",
    Distance:499.961,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"BAH",
    To:"SKT",
    Distance:2396.03,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAH",
    To:"TRV",
    Distance:3405.9,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BAL",
    To:"ESB",
    Distance:742.589,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BAL",
    To:"IST",
    Distance:1108.13,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BAL",
    To:"SAW",
    Distance:1065.71,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"BAQ",
    To:"ADZ",
    Distance:777.62,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BAQ",
    To:"BOG",
    Distance:691.605,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BAQ",
    To:"BOG",
    Distance:691.605,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BAQ",
    To:"BOG",
    Distance:691.605,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BAQ",
    To:"CLO",
    Distance:835.721,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BAQ",
    To:"MDE",
    Distance:530.125,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BAQ",
    To:"MIA",
    Distance:1755.55,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BAQ",
    To:"MIA",
    Distance:1755.55,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BAQ",
    To:"MIA",
    Distance:1755.55,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BAQ",
    To:"PTY",
    Distance:543.055,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"CAN",
    Distance:1933.77,
    Airport:"Air China"
}),
new Routes(
{
    From:"BAV",
    To:"CAN",
    Distance:1933.77,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"CGO",
    Distance:752.111,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"CGO",
    Distance:752.111,
    Airport:"Japan Air System"
}),
new Routes(
{
    From:"BAV",
    To:"CIF",
    Distance:765.859,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"BAV",
    To:"CSX",
    Distance:1406.72,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"CTU",
    Distance:1236.63,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"NAY",
    Distance:549.711,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"NAY",
    Distance:549.711,
    Airport:"China United"
}),
new Routes(
{
    From:"BAV",
    To:"NKG",
    Distance:1261.45,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"PEK",
    Distance:560.901,
    Airport:"Air China"
}),
new Routes(
{
    From:"BAV",
    To:"PEK",
    Distance:560.901,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"PEK",
    Distance:560.901,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"PVG",
    Distance:1490.32,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"SHA",
    Distance:1456.13,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"SHA",
    Distance:1456.13,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"SHE",
    Distance:1118.68,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"SJW",
    Distance:476.601,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"SJW",
    Distance:476.601,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"SJW",
    Distance:476.601,
    Airport:"China United"
}),
new Routes(
{
    From:"BAV",
    To:"TSN",
    Distance:647.219,
    Airport:"Air China"
}),
new Routes(
{
    From:"BAV",
    To:"TSN",
    Distance:647.219,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"BAV",
    To:"TSN",
    Distance:647.219,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"TYN",
    Distance:386.387,
    Airport:"Air China"
}),
new Routes(
{
    From:"BAV",
    To:"TYN",
    Distance:386.387,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"URC",
    Distance:1885.05,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"WUH",
    Distance:1151.3,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BAV",
    To:"XIY",
    Distance:688.519,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"BAV",
    To:"XIY",
    Distance:688.519,
    Airport:"Cargo Plus Aviation"
}),
new Routes(
{
    From:"BAX",
    To:"DME",
    Distance:2910.12,
    Airport:"Ciel Canadien"
}),
new Routes(
{
    From:"BAX",
    To:"DME",
    Distance:2910.12,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"BAX",
    To:"SVO",
    Distance:2924.49,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"BAY",
    To:"OTP",
    Distance:398.605,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BAY",
    To:"OTP",
    Distance:398.605,
    Airport:"Tarom"
}),
new Routes(
{
    From:"BAZ",
    To:"MAO",
    Distance:393.264,
    Airport:"Azul"
}),
new Routes(
{
    From:"BBA",
    To:"PMC",
    Distance:510.467,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BBA",
    To:"PMC",
    Distance:510.467,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"BBA",
    To:"PUQ",
    Distance:790.284,
    Airport:"Sky Airline"
}),
new Routes(
{
    From:"BBA",
    To:"SCL",
    Distance:1394.62,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BBI",
    To:"BLR",
    Distance:1187.71,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BBI",
    To:"BOM",
    Distance:1361.68,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BBI",
    To:"BOM",
    Distance:1361.68,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BBI",
    To:"CCU",
    Distance:381.896,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BBI",
    To:"DEL",
    Distance:1277.71,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BBI",
    To:"DEL",
    Distance:1277.71,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BBI",
    To:"HYD",
    Distance:833.277,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BBI",
    To:"IXZ",
    Distance:1208.29,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BBI",
    To:"VTZ",
    Distance:391.221,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BBK",
    To:"GBE",
    Distance:751.58,
    Airport:"Air Botswana"
}),
new Routes(
{
    From:"BBK",
    To:"JNB",
    Distance:976.673,
    Airport:"Air Botswana"
}),
new Routes(
{
    From:"BBK",
    To:"JNB",
    Distance:976.673,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"BBK",
    To:"MUB",
    Distance:299.622,
    Airport:"Air Botswana"
}),
new Routes(
{
    From:"BBN",
    To:"MUR",
    Distance:137.504,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BBN",
    To:"MYY",
    Distance:177.965,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BBO",
    To:"BSA",
    Distance:470.038,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BBO",
    To:"JIB",
    Distance:233.257,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BCD",
    To:"CEB",
    Distance:120.681,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"BCD",
    To:"CGY",
    Distance:308.733,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"BCD",
    To:"DVO",
    Distance:491.883,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"BCD",
    To:"MNL",
    Distance:477.242,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"BCD",
    To:"MNL",
    Distance:477.242,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"BCD",
    To:"MNL",
    Distance:477.242,
    Airport:"South East Asian Airlines"
}),
new Routes(
{
    From:"BCI",
    To:"LRE",
    Distance:105.735,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BCN",
    To:"AAL",
    Distance:1842.09,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"AAL",
    Distance:1842.09,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ACE",
    Distance:1974.13,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ACE",
    Distance:1974.13,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ACE",
    Distance:1974.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"AGP",
    Distance:765.965,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"AGP",
    Distance:765.965,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"AGP",
    Distance:765.965,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"ALC",
    Distance:403.854,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ALC",
    Distance:403.854,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ALG",
    Distance:521.496,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BCN",
    To:"ALG",
    Distance:521.496,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ALG",
    Distance:521.496,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"AMM",
    Distance:3188.64,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"AMM",
    Distance:3188.64,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"BCN",
    To:"AMS",
    Distance:1241.14,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"AMS",
    Distance:1241.14,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"AMS",
    Distance:1241.14,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"AMS",
    Distance:1241.14,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"AMS",
    Distance:1241.14,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"BCN",
    To:"ARN",
    Distance:2314.93,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ARN",
    Distance:2314.93,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ARN",
    Distance:2314.93,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BCN",
    To:"ARN",
    Distance:2314.93,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BCN",
    To:"ATH",
    Distance:1904.51,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ATH",
    Distance:1904.51,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ATH",
    Distance:1904.51,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ATH",
    Distance:1904.51,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BES",
    Distance:944.916,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BES",
    Distance:944.916,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BFS",
    Distance:1606.15,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BCN",
    To:"BGO",
    Distance:2123.2,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BGO",
    Distance:2123.2,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BGO",
    Distance:2123.2,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BCN",
    To:"BGY",
    Distance:783.842,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"BHX",
    Distance:1273.75,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BCN",
    To:"BHX",
    Distance:1273.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"BIO",
    Distance:466.812,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BIO",
    Distance:466.812,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BJL",
    Distance:3599.89,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BJL",
    Distance:3599.89,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BJL",
    Distance:3599.89,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BJZ",
    Distance:802.455,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BCN",
    To:"BLQ",
    Distance:831.321,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BLQ",
    Distance:831.321,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BLQ",
    Distance:831.321,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"BOD",
    Distance:453.474,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BOD",
    Distance:453.474,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BOG",
    Distance:8513.4,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BCN",
    To:"BRI",
    Distance:1226.7,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BRI",
    Distance:1226.7,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BRN",
    Distance:759.377,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"BCN",
    To:"BRS",
    Distance:1179.74,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BCN",
    To:"BRU",
    Distance:1083.78,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BRU",
    Distance:1083.78,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BRU",
    Distance:1083.78,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BRU",
    Distance:1083.78,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"BRU",
    Distance:1083.78,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"BSL",
    Distance:822.239,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BCN",
    To:"BSL",
    Distance:822.239,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BCN",
    To:"BUD",
    Distance:1522.08,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"BUD",
    Distance:1522.08,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BCN",
    To:"BVA",
    Distance:907.062,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"CAI",
    Distance:2906.14,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"BCN",
    To:"CDG",
    Distance:858.738,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BCN",
    To:"CDG",
    Distance:858.738,
    Airport:"Air France"
}),
new Routes(
{
    From:"BCN",
    To:"CDG",
    Distance:858.738,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"CDG",
    Distance:858.738,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"CDG",
    Distance:858.738,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BCN",
    To:"CGN",
    Distance:1132.75,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BCN",
    To:"CIA",
    Distance:876.391,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"CLJ",
    Distance:1824.71,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BCN",
    To:"CMN",
    Distance:1226.52,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"BCN",
    To:"CMN",
    Distance:1226.52,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"CMN",
    Distance:1226.52,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"CMN",
    Distance:1226.52,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BCN",
    To:"CPH",
    Distance:1768.58,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"CPH",
    Distance:1768.58,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"CPH",
    Distance:1768.58,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BCN",
    To:"CPH",
    Distance:1768.58,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BCN",
    To:"CRL",
    Distance:1035.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"CTA",
    Distance:1193.27,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"CTA",
    Distance:1193.27,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"CWL",
    Distance:1196.82,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"CWL",
    Distance:1196.82,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"DBV",
    Distance:1344.59,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"DBV",
    Distance:1344.59,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"DKR",
    Distance:3504.1,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"DKR",
    Distance:3504.1,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"DME",
    Distance:3028.68,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"DME",
    Distance:3028.68,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"DME",
    Distance:3028.68,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"DOH",
    Distance:4858.68,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"BCN",
    To:"DOH",
    Distance:4858.68,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BCN",
    To:"DRS",
    Distance:1412.45,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"DRS",
    Distance:1412.45,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"DTM",
    Distance:1212.28,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"DTM",
    Distance:1212.28,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"DUB",
    Distance:1485.22,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BCN",
    To:"DUB",
    Distance:1485.22,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"DUS",
    Distance:1167.41,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BCN",
    To:"DUS",
    Distance:1167.41,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"DUS",
    Distance:1167.41,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BCN",
    To:"DUS",
    Distance:1167.41,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"DXB",
    Distance:5175.71,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BCN",
    To:"EAS",
    Distance:391.859,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"EAS",
    Distance:391.859,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"EDI",
    Distance:1676.57,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"EDI",
    Distance:1676.57,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"EDI",
    Distance:1676.57,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"EIN",
    Distance:1156.63,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"BCN",
    To:"EMA",
    Distance:1307.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"EWR",
    Distance:6176.62,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BCN",
    To:"EWR",
    Distance:6176.62,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"EZE",
    Distance:10480.9,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"BCN",
    To:"FCO",
    Distance:847.868,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BCN",
    To:"FCO",
    Distance:847.868,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"FCO",
    Distance:847.868,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"FCO",
    Distance:847.868,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"FEZ",
    Distance:1027.73,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"FEZ",
    Distance:1027.73,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"FEZ",
    Distance:1027.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"FLR",
    Distance:797.55,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"FLR",
    Distance:797.55,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"FRA",
    Distance:1091.98,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"FRA",
    Distance:1091.98,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"FRA",
    Distance:1091.98,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"FRA",
    Distance:1091.98,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BCN",
    To:"FUE",
    Distance:2031.89,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"FUE",
    Distance:2031.89,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"FUE",
    Distance:2031.89,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"GDN",
    Distance:1890.94,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BCN",
    To:"GLA",
    Distance:1688.12,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BCN",
    To:"GOA",
    Distance:650.533,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"GOA",
    Distance:650.533,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"GOT",
    Distance:1958.32,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"GOT",
    Distance:1958.32,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"GOT",
    Distance:1958.32,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BCN",
    To:"GRU",
    Distance:8764.36,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"GRX",
    Distance:680.133,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"GRX",
    Distance:680.133,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"GVA",
    Distance:637.446,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BCN",
    To:"GVA",
    Distance:637.446,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BCN",
    To:"HAJ",
    Distance:1367.6,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"HAJ",
    Distance:1367.6,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BCN",
    To:"HAJ",
    Distance:1367.6,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"HAM",
    Distance:1492.56,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"HAM",
    Distance:1492.56,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BCN",
    To:"HAM",
    Distance:1492.56,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"HAM",
    Distance:1492.56,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BCN",
    To:"HEL",
    Distance:2628.06,
    Airport:"Finnair"
}),
new Routes(
{
    From:"BCN",
    To:"HEL",
    Distance:2628.06,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"HEL",
    Distance:2628.06,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"HEL",
    Distance:2628.06,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BCN",
    To:"IBZ",
    Distance:276.156,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"IBZ",
    Distance:276.156,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"IBZ",
    Distance:276.156,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"IEV",
    Distance:2399.99,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"IEV",
    Distance:2399.99,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ISB",
    Distance:6152.36,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"IST",
    Distance:2230.41,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"JFK",
    Distance:6150.23,
    Airport:"Air France"
}),
new Routes(
{
    From:"BCN",
    To:"JFK",
    Distance:6150.23,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"JFK",
    Distance:6150.23,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BCN",
    To:"JFK",
    Distance:6150.23,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BCN",
    To:"JFK",
    Distance:6150.23,
    Airport:"Finnair"
}),
new Routes(
{
    From:"BCN",
    To:"JFK",
    Distance:6150.23,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"JFK",
    Distance:6150.23,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"JFK",
    Distance:6150.23,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BCN",
    To:"JFK",
    Distance:6150.23,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BCN",
    To:"KBP",
    Distance:2429.18,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"KBP",
    Distance:2429.18,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"KTW",
    Distance:1658.6,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BCN",
    To:"LBA",
    Distance:1424.93,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BCN",
    To:"LBA",
    Distance:1424.93,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BCN",
    To:"LCG",
    Distance:887.676,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LCG",
    Distance:887.676,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LED",
    Distance:2821.93,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LED",
    Distance:2821.93,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LED",
    Distance:2821.93,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LEI",
    Distance:626.438,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LEI",
    Distance:626.438,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LEJ",
    Distance:1367.7,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LEJ",
    Distance:1367.7,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LEN",
    Distance:655.34,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LGW",
    Distance:1109.05,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BCN",
    To:"LGW",
    Distance:1109.05,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BCN",
    To:"LGW",
    Distance:1109.05,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LGW",
    Distance:1109.05,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LGW",
    Distance:1109.05,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BCN",
    To:"LGW",
    Distance:1109.05,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BCN",
    To:"LHE",
    Distance:6377.16,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LHR",
    Distance:1148.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LHR",
    Distance:1148.46,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BCN",
    To:"LHR",
    Distance:1148.46,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LIL",
    Distance:1033.14,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LIL",
    Distance:1033.14,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LIN",
    Distance:741.971,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BCN",
    To:"LIS",
    Distance:994,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LIS",
    Distance:994,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LIS",
    Distance:994,
    Airport:"SATA International"
}),
new Routes(
{
    From:"BCN",
    To:"LIS",
    Distance:994,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"BCN",
    To:"LPA",
    Distance:2174.49,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LPA",
    Distance:2174.49,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LPA",
    Distance:2174.49,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"LPL",
    Distance:1388.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"LPL",
    Distance:1388.16,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BCN",
    To:"LTN",
    Distance:1190.77,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BCN",
    To:"LUX",
    Distance:980.291,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LUX",
    Distance:980.291,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LUX",
    Distance:980.291,
    Airport:"Luxair"
}),
new Routes(
{
    From:"BCN",
    To:"LYS",
    Distance:549.062,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LYS",
    Distance:549.062,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"LYS",
    Distance:549.062,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BCN",
    To:"MAD",
    Distance:482.744,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BCN",
    To:"MAD",
    Distance:482.744,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"MAD",
    Distance:482.744,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"MAH",
    Distance:241.047,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"MAH",
    Distance:241.047,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"MAH",
    Distance:241.047,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"MAN",
    Distance:1379.55,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BCN",
    To:"MAN",
    Distance:1379.55,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BCN",
    To:"MAN",
    Distance:1379.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"MIA",
    Distance:7544.85,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"MIA",
    Distance:7544.85,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BCN",
    To:"MIA",
    Distance:7544.85,
    Airport:"Finnair"
}),
new Routes(
{
    From:"BCN",
    To:"MIA",
    Distance:7544.85,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"MIA",
    Distance:7544.85,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BCN",
    To:"MLA",
    Distance:1234.2,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"MLA",
    Distance:1234.2,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"MRS",
    Distance:350.503,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"MRS",
    Distance:350.503,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"MSQ",
    Distance:2375.04,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"MUC",
    Distance:1094.63,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"MUC",
    Distance:1094.63,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"MUC",
    Distance:1094.63,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BCN",
    To:"MXP",
    Distance:720.796,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"MXP",
    Distance:720.796,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"MXP",
    Distance:720.796,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"MXP",
    Distance:720.796,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BCN",
    To:"NAP",
    Distance:1023.61,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"NAP",
    Distance:1023.61,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"NCE",
    Distance:496.298,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"NCE",
    Distance:496.298,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"NCE",
    Distance:496.298,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BCN",
    To:"NCL",
    Distance:1552.66,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BCN",
    To:"NDR",
    Distance:831.171,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"BCN",
    To:"NDR",
    Distance:831.171,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"NDR",
    Distance:831.171,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"NDR",
    Distance:831.171,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"NTE",
    Distance:714.237,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"NTE",
    Distance:714.237,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"NUE",
    Distance:1149.04,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"NUE",
    Distance:1149.04,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"NYO",
    Distance:2203.44,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"OPO",
    Distance:898.662,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"OPO",
    Distance:898.662,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"OPO",
    Distance:898.662,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"OPO",
    Distance:898.662,
    Airport:"SATA International"
}),
new Routes(
{
    From:"BCN",
    To:"OPO",
    Distance:898.662,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"BCN",
    To:"ORK",
    Distance:1420.74,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BCN",
    To:"ORN",
    Distance:673.103,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BCN",
    To:"ORN",
    Distance:673.103,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ORN",
    Distance:673.103,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ORY",
    Distance:826.272,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ORY",
    Distance:826.272,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"OSL",
    Distance:2190.3,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"OSL",
    Distance:2190.3,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"OSL",
    Distance:2190.3,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BCN",
    To:"OSL",
    Distance:2190.3,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BCN",
    To:"OTP",
    Distance:1981.84,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BCN",
    To:"OTP",
    Distance:1981.84,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"OTP",
    Distance:1981.84,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"OTP",
    Distance:1981.84,
    Airport:"Tarom"
}),
new Routes(
{
    From:"BCN",
    To:"OTP",
    Distance:1981.84,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BCN",
    To:"OVD",
    Distance:711.582,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"OVD",
    Distance:711.582,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"PHL",
    Distance:6299.91,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"PHL",
    Distance:6299.91,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BCN",
    To:"PIK",
    Distance:1653.31,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"PMI",
    Distance:201.504,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BCN",
    To:"PMI",
    Distance:201.504,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BCN",
    To:"PMI",
    Distance:201.504,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"PMI",
    Distance:201.504,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"PMI",
    Distance:201.504,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"PMI",
    Distance:201.504,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"PMO",
    Distance:1002.69,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"PMO",
    Distance:1002.69,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"POZ",
    Distance:1663.2,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BCN",
    To:"PRG",
    Distance:1358.03,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BCN",
    To:"PRG",
    Distance:1358.03,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"PRG",
    Distance:1358.03,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"PRG",
    Distance:1358.03,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"PRG",
    Distance:1358.03,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"BCN",
    To:"PSA",
    Distance:731.146,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"PSA",
    Distance:731.146,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"RAK",
    Distance:1404.82,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"RAK",
    Distance:1404.82,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"RGS",
    Distance:486.621,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"RIX",
    Distance:2337.08,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"BCN",
    To:"RNS",
    Distance:810.897,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"RNS",
    Distance:810.897,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"RTM",
    Distance:1198.76,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"BCN",
    To:"RYG",
    Distance:2099.25,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"SAW",
    Distance:2272.84,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"SCQ",
    Distance:883.254,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"SCQ",
    Distance:883.254,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"SCQ",
    Distance:883.254,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"SDR",
    Distance:539.234,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"SDR",
    Distance:539.234,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"SDR",
    Distance:539.234,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"SEN",
    Distance:1147.3,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BCN",
    To:"SIN",
    Distance:10899.4,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"SLM",
    Distance:635.901,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"SOF",
    Distance:1764.62,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"BCN",
    To:"SOF",
    Distance:1764.62,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BCN",
    To:"STN",
    Distance:1185.62,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"STR",
    Distance:994.656,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"STR",
    Distance:994.656,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BCN",
    To:"STR",
    Distance:994.656,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"SVG",
    Distance:1970.51,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"SVG",
    Distance:1970.51,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"SVO",
    Distance:3017.42,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"SVO",
    Distance:3017.42,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BCN",
    To:"SVQ",
    Distance:809.277,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"SVQ",
    Distance:809.277,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"SVQ",
    Distance:809.277,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"SXF",
    Distance:1504.88,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BCN",
    To:"SXF",
    Distance:1504.88,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BCN",
    To:"TFN",
    Distance:2194.51,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BCN",
    To:"TFN",
    Distance:2194.51,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BCN",
    To:"TFN",
    Distance:2194.51,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"TFN",
    Distance:2194.51,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"TFN",
    Distance:2194.51,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"TFS",
    Distance:2245.15,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"TFS",
    Distance:2245.15,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"TFS",
    Distance:2245.15,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"TLS",
    Distance:265.847,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"TLS",
    Distance:265.847,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"TLV",
    Distance:3081.68,
    Airport:"Arkia Israel Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"TLV",
    Distance:3081.68,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"TLV",
    Distance:3081.68,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"TLV",
    Distance:3081.68,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"TNG",
    Distance:930.672,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"BCN",
    To:"TNG",
    Distance:930.672,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"TNG",
    Distance:930.672,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"TNG",
    Distance:930.672,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BCN",
    To:"TRF",
    Distance:2068.9,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BCN",
    To:"TRN",
    Distance:625.824,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"TRN",
    Distance:625.824,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"TRN",
    Distance:625.824,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"TSF",
    Distance:947.865,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"TSR",
    Distance:1626.41,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BCN",
    To:"TUN",
    Distance:859.161,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"BCN",
    To:"TXL",
    Distance:1510.39,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BCN",
    To:"TXL",
    Distance:1510.39,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"TXL",
    Distance:1510.39,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"TXL",
    Distance:1510.39,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BCN",
    To:"VCE",
    Distance:951.753,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"VCE",
    Distance:951.753,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"VGO",
    Distance:893.343,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"VGO",
    Distance:893.343,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"VIE",
    Distance:1369.69,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BCN",
    To:"VIE",
    Distance:1369.69,
    Airport:"Air China"
}),
new Routes(
{
    From:"BCN",
    To:"VIE",
    Distance:1369.69,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"VIE",
    Distance:1369.69,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"VIE",
    Distance:1369.69,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"VIE",
    Distance:1369.69,
    Airport:"Niki"
}),
new Routes(
{
    From:"BCN",
    To:"VLL",
    Distance:578.782,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"VLL",
    Distance:578.782,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"VLL",
    Distance:578.782,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"VNO",
    Distance:2258.08,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"VNO",
    Distance:2258.08,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BCN",
    To:"WAW",
    Distance:1869.69,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"WAW",
    Distance:1869.69,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"WAW",
    Distance:1869.69,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"WAW",
    Distance:1869.69,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BCN",
    To:"WAW",
    Distance:1869.69,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BCN",
    To:"WMI",
    Distance:1869.3,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"XRY",
    Distance:865.722,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"XRY",
    Distance:865.722,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"XRY",
    Distance:865.722,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BCN",
    To:"YUL",
    Distance:5911.35,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"BCN",
    To:"YYZ",
    Distance:6417.69,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BCN",
    To:"YYZ",
    Distance:6417.69,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"BCN",
    To:"ZAG",
    Distance:1229.44,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ZAG",
    Distance:1229.44,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ZAG",
    Distance:1229.44,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ZRH",
    Distance:856.533,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ZRH",
    Distance:856.533,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BCN",
    To:"ZRH",
    Distance:856.533,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BDA",
    To:"ATL",
    Distance:1844.36,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BDA",
    To:"BOS",
    Distance:1243.71,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BDA",
    To:"EWR",
    Distance:1254.08,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BDA",
    To:"JFK",
    Distance:1226.74,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BDA",
    To:"JFK",
    Distance:1226.74,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BDA",
    To:"JFK",
    Distance:1226.74,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BDA",
    To:"JFK",
    Distance:1226.74,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BDA",
    To:"LGW",
    Distance:5540.63,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BDA",
    To:"LGW",
    Distance:5540.63,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BDA",
    To:"MIA",
    Distance:1681.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BDA",
    To:"MIA",
    Distance:1681.46,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BDA",
    To:"PHL",
    Distance:1262.09,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BDA",
    To:"PHL",
    Distance:1262.09,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BDA",
    To:"YYZ",
    Distance:1810.63,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BDA",
    To:"YYZ",
    Distance:1810.63,
    Airport:"WestJet"
}),
new Routes(
{
    From:"BDB",
    To:"BNE",
    Distance:287.089,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BDB",
    To:"BNE",
    Distance:287.089,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BDH",
    To:"DXB",
    Distance:152.139,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"BDH",
    To:"SYZ",
    Distance:399.894,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"BDJ",
    To:"BDO",
    Distance:883.744,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BDJ",
    To:"BPN",
    Distance:338.433,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BDJ",
    To:"BPN",
    Distance:338.433,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"BDJ",
    To:"CGK",
    Distance:946.448,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"BDJ",
    To:"CGK",
    Distance:946.448,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BDJ",
    To:"CGK",
    Distance:946.448,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BDJ",
    To:"CGK",
    Distance:946.448,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"BDJ",
    To:"JOG",
    Distance:680.502,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BDJ",
    To:"KBU",
    Distance:156.539,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BDJ",
    To:"PKN",
    Distance:352.68,
    Airport:"Illinois Airways"
}),
new Routes(
{
    From:"BDJ",
    To:"SRG",
    Distance:624.555,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BDJ",
    To:"SUB",
    Distance:489.394,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"BDJ",
    To:"SUB",
    Distance:489.394,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BDJ",
    To:"SUB",
    Distance:489.394,
    Airport:"Illinois Airways"
}),
new Routes(
{
    From:"BDJ",
    To:"SUB",
    Distance:489.394,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"ATL",
    Distance:1382.31,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"BDL",
    To:"ATL",
    Distance:1382.31,
    Airport:"Air France"
}),
new Routes(
{
    From:"BDL",
    To:"ATL",
    Distance:1382.31,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BDL",
    To:"ATL",
    Distance:1382.31,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BDL",
    To:"ATL",
    Distance:1382.31,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BDL",
    To:"ATL",
    Distance:1382.31,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"ATL",
    Distance:1382.31,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"BWI",
    Distance:455.722,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BDL",
    To:"BWI",
    Distance:455.722,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"CLT",
    Distance:1035.69,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"CLT",
    Distance:1035.69,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BDL",
    To:"CVG",
    Distance:1062.09,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BDL",
    To:"DCA",
    Distance:503.651,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"DCA",
    Distance:503.651,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BDL",
    To:"DEN",
    Distance:2682.92,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"DFW",
    Distance:2363.18,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"DFW",
    Distance:2363.18,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BDL",
    To:"DTW",
    Distance:880.619,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BDL",
    To:"FLL",
    Distance:1891.89,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BDL",
    To:"FLL",
    Distance:1891.89,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"IAD",
    Distance:523.286,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"LAS",
    Distance:3688.33,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"LAX",
    Distance:4057.33,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"LAX",
    Distance:4057.33,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"LAX",
    Distance:4057.33,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BDL",
    To:"MCO",
    Distance:1692.21,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BDL",
    To:"MCO",
    Distance:1692.21,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BDL",
    To:"MCO",
    Distance:1692.21,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BDL",
    To:"MCO",
    Distance:1692.21,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"MDW",
    Distance:1246.42,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BDL",
    To:"MDW",
    Distance:1246.42,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"MIA",
    Distance:1925.76,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"MIA",
    Distance:1925.76,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BDL",
    To:"MSP",
    Distance:1686.22,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BDL",
    To:"ORD",
    Distance:1256.98,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"ORD",
    Distance:1256.98,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BDL",
    To:"ORD",
    Distance:1256.98,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"PBI",
    Distance:1826.01,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BDL",
    To:"PHL",
    Distance:314.667,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"PHL",
    Distance:314.667,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BDL",
    To:"PIT",
    Distance:651.434,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"PIT",
    Distance:651.434,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BDL",
    To:"RDU",
    Distance:855.775,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BDL",
    To:"RSW",
    Distance:1902.19,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"SJU",
    Distance:2688.57,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BDL",
    To:"TPA",
    Distance:1790.54,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BDL",
    To:"TPA",
    Distance:1790.54,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"YUL",
    Distance:401.79,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BDL",
    To:"YUL",
    Distance:401.79,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BDL",
    To:"YYZ",
    Distance:598.569,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BDL",
    To:"YYZ",
    Distance:598.569,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BDO",
    To:"BDJ",
    Distance:883.744,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BDO",
    To:"BTH",
    Distance:970.977,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BDO",
    To:"DPS",
    Distance:861.027,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"BDO",
    To:"DPS",
    Distance:861.027,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BDO",
    To:"DPS",
    Distance:861.027,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"BDO",
    To:"DPS",
    Distance:861.027,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BDO",
    To:"JHB",
    Distance:1044.09,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"BDO",
    To:"JOG",
    Distance:330.007,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BDO",
    To:"KUL",
    Distance:1254.76,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BDO",
    To:"KUL",
    Distance:1254.76,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"BDO",
    To:"KUL",
    Distance:1254.76,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BDO",
    To:"PKU",
    Distance:1064.33,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"BDO",
    To:"PKU",
    Distance:1064.33,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BDO",
    To:"SIN",
    Distance:999.848,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BDO",
    To:"SIN",
    Distance:999.848,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"BDO",
    To:"SIN",
    Distance:999.848,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"BDO",
    To:"SIN",
    Distance:999.848,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"BDO",
    To:"SIN",
    Distance:999.848,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"BDO",
    To:"SUB",
    Distance:577.354,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BDO",
    To:"SUB",
    Distance:577.354,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"BDO",
    To:"SUB",
    Distance:577.354,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BDP",
    To:"KTM",
    Distance:296.88,
    Airport:"Yeti Airways"
}),
new Routes(
{
    From:"BDQ",
    To:"BOM",
    Distance:363.021,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BDQ",
    To:"BOM",
    Distance:363.021,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BDQ",
    To:"BOM",
    Distance:363.021,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BDQ",
    To:"DEL",
    Distance:794.479,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BDQ",
    To:"DEL",
    Distance:794.479,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BDS",
    To:"BGY",
    Distance:869.852,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BDS",
    To:"BLQ",
    Distance:694.564,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BDS",
    To:"BSL",
    Distance:1132.05,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BDS",
    To:"BVA",
    Distance:1576.91,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BDS",
    To:"CIA",
    Distance:465.152,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BDS",
    To:"CRL",
    Distance:1509.23,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BDS",
    To:"EIN",
    Distance:1538.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BDS",
    To:"FCO",
    Distance:493.014,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BDS",
    To:"GRO",
    Distance:1274.85,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BDS",
    To:"GVA",
    Distance:1137.59,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BDS",
    To:"LIN",
    Distance:882.171,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BDS",
    To:"MUC",
    Distance:984.652,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BDS",
    To:"MUC",
    Distance:984.652,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"BDS",
    To:"MXP",
    Distance:929.171,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BDS",
    To:"PSA",
    Distance:707.287,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BDS",
    To:"STN",
    Distance:1838.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BDS",
    To:"STR",
    Distance:1127.02,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BDS",
    To:"TRN",
    Distance:977.688,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BDS",
    To:"TSF",
    Distance:724.669,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BDS",
    To:"ZRH",
    Distance:1064.74,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BDS",
    To:"ZRH",
    Distance:1064.74,
    Airport:"Helvetic Airways"
}),
new Routes(
{
    From:"BDS",
    To:"ZRH",
    Distance:1064.74,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"BDU",
    To:"OSL",
    Distance:1045.44,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BEB",
    To:"GLA",
    Distance:253.029,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BEB",
    To:"SYY",
    Distance:101.959,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BEG",
    To:"AMS",
    Distance:1410.21,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BEG",
    To:"AMS",
    Distance:1410.21,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"ARN",
    Distance:1657.15,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BEG",
    To:"ARN",
    Distance:1657.15,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"ARN",
    Distance:1657.15,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BEG",
    To:"ATH",
    Distance:822.943,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"BEG",
    To:"ATH",
    Distance:822.943,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"ATH",
    Distance:822.943,
    Airport:"Olympic Airlines"
}),
new Routes(
{
    From:"BEG",
    To:"AUH",
    Distance:3828.7,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BEG",
    To:"AUH",
    Distance:3828.7,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"BNX",
    Distance:237.671,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"BRU",
    Distance:1356.6,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"BUD",
    Distance:302.263,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"BEG",
    To:"BUD",
    Distance:302.263,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"BVA",
    Distance:1465.26,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BEG",
    To:"CDG",
    Distance:1423.24,
    Airport:"Air France"
}),
new Routes(
{
    From:"BEG",
    To:"CDG",
    Distance:1423.24,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"CPH",
    Distance:1316.66,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"CRL",
    Distance:1339.56,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BEG",
    To:"DTM",
    Distance:1197.85,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BEG",
    To:"DUS",
    Distance:1234.18,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BEG",
    To:"DUS",
    Distance:1234.18,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"DXB",
    Distance:3816.47,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"BEG",
    To:"EIN",
    Distance:1327.31,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BEG",
    To:"ESB",
    Distance:1162.07,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BEG",
    To:"FCO",
    Distance:732.616,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BEG",
    To:"FCO",
    Distance:732.616,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"FCO",
    Distance:732.616,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BEG",
    To:"FMM",
    Distance:847.919,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BEG",
    To:"FRA",
    Distance:1055.92,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BEG",
    To:"FRA",
    Distance:1055.92,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BEG",
    To:"FRA",
    Distance:1055.92,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"FRA",
    Distance:1055.92,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BEG",
    To:"FRA",
    Distance:1055.92,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BEG",
    To:"GSE",
    Distance:1552.76,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BEG",
    To:"GVA",
    Distance:1115.83,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"BEG",
    To:"GVA",
    Distance:1115.83,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BEG",
    To:"GVA",
    Distance:1115.83,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BEG",
    To:"IST",
    Distance:813.287,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BEG",
    To:"LCA",
    Distance:1581.86,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"LCA",
    Distance:1581.86,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BEG",
    To:"LHR",
    Distance:1701.69,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BEG",
    To:"LHR",
    Distance:1701.69,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"LJU",
    Distance:481.778,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"LTN",
    Distance:1709.52,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BEG",
    To:"MLH",
    Distance:1029.19,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BEG",
    To:"MMX",
    Distance:1287.96,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BEG",
    To:"MUC",
    Distance:760.114,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BEG",
    To:"MUC",
    Distance:760.114,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BEG",
    To:"MXP",
    Distance:910.681,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BEG",
    To:"MXP",
    Distance:910.681,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"MXP",
    Distance:910.681,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BEG",
    To:"NYO",
    Distance:1570.37,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BEG",
    To:"OSL",
    Distance:1815.67,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BEG",
    To:"OTP",
    Distance:458.624,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"OTP",
    Distance:458.624,
    Airport:"Tarom"
}),
new Routes(
{
    From:"BEG",
    To:"PRG",
    Distance:742.331,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"SAW",
    Distance:852.574,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"SAW",
    Distance:852.574,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"BEG",
    To:"SJJ",
    Distance:192.254,
    Airport:"Air Bosna"
}),
new Routes(
{
    From:"BEG",
    To:"SJJ",
    Distance:192.254,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"SKG",
    Distance:525.128,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"SKP",
    Distance:334.881,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"SOF",
    Distance:342.893,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"SPU",
    Distance:350.035,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"BEG",
    To:"STR",
    Distance:946.775,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BEG",
    To:"STR",
    Distance:946.775,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BEG",
    To:"STR",
    Distance:946.775,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"SVO",
    Distance:1725.4,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"BEG",
    To:"SVO",
    Distance:1725.4,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"TGD",
    Distance:286.378,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"TGD",
    Distance:286.378,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"BEG",
    To:"TIV",
    Distance:297.204,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"TIV",
    Distance:297.204,
    Airport:"Montenegro Airlines"
}),
new Routes(
{
    From:"BEG",
    To:"TLV",
    Distance:1902.17,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"TRF",
    Distance:1735.06,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BEG",
    To:"TUN",
    Distance:1224.64,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"BEG",
    To:"TXL",
    Distance:1002.21,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BEG",
    To:"TXL",
    Distance:1002.21,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"VAR",
    Distance:626.008,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"VIE",
    Distance:464.649,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"BEG",
    To:"VIE",
    Distance:464.649,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"WAW",
    Distance:818.411,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"WAW",
    Distance:818.411,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"BEG",
    To:"ZRH",
    Distance:951.513,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BEG",
    To:"ZRH",
    Distance:951.513,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BEJ",
    To:"BPN",
    Distance:385.372,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BEJ",
    To:"BPN",
    Distance:385.372,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BEJ",
    To:"BPN",
    Distance:385.372,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"BEL",
    To:"ATM",
    Distance:468.613,
    Airport:"Amerijet International"
}),
new Routes(
{
    From:"BEL",
    To:"ATM",
    Distance:468.613,
    Airport:"Azul"
}),
new Routes(
{
    From:"BEL",
    To:"BSB",
    Distance:1612.58,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"BSB",
    Distance:1612.58,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"BVS",
    Distance:225.251,
    Airport:"Amerijet International"
}),
new Routes(
{
    From:"BEL",
    To:"CAY",
    Distance:813.219,
    Airport:"Surinam Airways"
}),
new Routes(
{
    From:"BEL",
    To:"CKS",
    Distance:553.467,
    Airport:"Azul"
}),
new Routes(
{
    From:"BEL",
    To:"CNF",
    Distance:2088.23,
    Airport:"Azul"
}),
new Routes(
{
    From:"BEL",
    To:"FOR",
    Distance:1136.2,
    Airport:"Azul"
}),
new Routes(
{
    From:"BEL",
    To:"FOR",
    Distance:1136.2,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"FOR",
    Distance:1136.2,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"GIG",
    Distance:2448.96,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"GIG",
    Distance:2448.96,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"GRU",
    Distance:2461.69,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"GRU",
    Distance:2461.69,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"IMP",
    Distance:475.259,
    Airport:"Azul"
}),
new Routes(
{
    From:"BEL",
    To:"MAB",
    Distance:449.632,
    Airport:"Azul"
}),
new Routes(
{
    From:"BEL",
    To:"MAB",
    Distance:449.632,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"MAB",
    Distance:449.632,
    Airport:"Shuttle America"
}),
new Routes(
{
    From:"BEL",
    To:"MAB",
    Distance:449.632,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"MAO",
    Distance:1299.07,
    Airport:"Azul"
}),
new Routes(
{
    From:"BEL",
    To:"MAO",
    Distance:1299.07,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"MAO",
    Distance:1299.07,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"MCP",
    Distance:329.52,
    Airport:"Azul"
}),
new Routes(
{
    From:"BEL",
    To:"MCP",
    Distance:329.52,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"MCP",
    Distance:329.52,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"MIA",
    Distance:4561.95,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"PBM",
    Distance:1064.29,
    Airport:"Surinam Airways"
}),
new Routes(
{
    From:"BEL",
    To:"SLZ",
    Distance:490.121,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"SLZ",
    Distance:490.121,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"STM",
    Distance:711.485,
    Airport:"Air France"
}),
new Routes(
{
    From:"BEL",
    To:"STM",
    Distance:711.485,
    Airport:"Azul"
}),
new Routes(
{
    From:"BEL",
    To:"STM",
    Distance:711.485,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"STM",
    Distance:711.485,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BEL",
    To:"STM",
    Distance:711.485,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BEN",
    To:"AKF",
    Distance:929.535,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"BEN",
    To:"AKF",
    Distance:929.535,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"BEN",
    To:"AMM",
    Distance:1483.46,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"BEN",
    To:"AMM",
    Distance:1483.46,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"BEN",
    To:"AMM",
    Distance:1483.46,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"BEN",
    To:"CAI",
    Distance:1082.15,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"BEN",
    To:"CAI",
    Distance:1082.15,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"BEN",
    To:"CAI",
    Distance:1082.15,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"BEN",
    To:"CMN",
    Distance:2602.01,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"BEN",
    To:"CMN",
    Distance:2602.01,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"BEN",
    To:"HBE",
    Distance:902.952,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"BEN",
    To:"IST",
    Distance:1246.75,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"BEN",
    To:"IST",
    Distance:1246.75,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"BEN",
    To:"IST",
    Distance:1246.75,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BEN",
    To:"JED",
    Distance:2196.94,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"BEN",
    To:"MLA",
    Distance:678.075,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"BEN",
    To:"MRA",
    Distance:490.627,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"BEN",
    To:"MRA",
    Distance:490.627,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"BEN",
    To:"SFA",
    Distance:935.19,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"BEN",
    To:"SFA",
    Distance:935.19,
    Airport:"Tuninter"
}),
new Routes(
{
    From:"BEN",
    To:"TIP",
    Distance:670.551,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"BEN",
    To:"TIP",
    Distance:670.551,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"BEN",
    To:"TUN",
    Distance:1060.66,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"BEN",
    To:"TUN",
    Distance:1060.66,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"BEN",
    To:"TUN",
    Distance:1060.66,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"BES",
    To:"AJA",
    Distance:1262.1,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BES",
    To:"BCN",
    Distance:944.916,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BES",
    To:"BCN",
    Distance:944.916,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BES",
    To:"BIA",
    Distance:1263.53,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BES",
    To:"BOD",
    Distance:491.715,
    Airport:"Nationwide Airlines"
}),
new Routes(
{
    From:"BES",
    To:"CDG",
    Distance:514.763,
    Airport:"Air France"
}),
new Routes(
{
    From:"BES",
    To:"CDG",
    Distance:514.763,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BES",
    To:"LCY",
    Distance:466.654,
    Airport:"Air France"
}),
new Routes(
{
    From:"BES",
    To:"LCY",
    Distance:466.654,
    Airport:"CityJet"
}),
new Routes(
{
    From:"BES",
    To:"LYS",
    Distance:780.29,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BES",
    To:"LYS",
    Distance:780.29,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BES",
    To:"MRS",
    Distance:929.082,
    Airport:"Air France"
}),
new Routes(
{
    From:"BES",
    To:"MRS",
    Distance:929.082,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BES",
    To:"NCE",
    Distance:1042.24,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BES",
    To:"ORY",
    Distance:499.335,
    Airport:"Air France"
}),
new Routes(
{
    From:"BES",
    To:"SOU",
    Distance:354.775,
    Airport:"Air France"
}),
new Routes(
{
    From:"BES",
    To:"SOU",
    Distance:354.775,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BET",
    To:"ANC",
    Distance:639.448,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BET",
    To:"ANC",
    Distance:639.448,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BET",
    To:"ATT",
    Distance:5707.85,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"BET",
    To:"CYF",
    Distance:151.369,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BET",
    To:"EEK",
    Distance:63.9564,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"BET",
    To:"EEK",
    Distance:63.9564,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BET",
    To:"EMK",
    Distance:263.055,
    Airport:"Aero Flight"
}),
new Routes(
{
    From:"BET",
    To:"GNU",
    Distance:185.405,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"BET",
    To:"HPB",
    Distance:245.485,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BET",
    To:"KKH",
    Distance:107.611,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BET",
    To:"KLG",
    Distance:116.289,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BET",
    To:"KPN",
    Distance:152.974,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"BET",
    To:"KUK",
    Distance:38.6337,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BET",
    To:"KWK",
    Distance:124.314,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BET",
    To:"KWN",
    Distance:113.951,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"BET",
    To:"KWN",
    Distance:113.951,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BET",
    To:"KWT",
    Distance:21.4364,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"BET",
    To:"KWT",
    Distance:21.4364,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BET",
    To:"MLL",
    Distance:121.048,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"BET",
    To:"MLL",
    Distance:121.048,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BET",
    To:"NME",
    Distance:159.861,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"BET",
    To:"NME",
    Distance:159.861,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BET",
    To:"OOK",
    Distance:178.984,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BET",
    To:"PQS",
    Distance:140.301,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BET",
    To:"TLT",
    Distance:58.6902,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BET",
    To:"VAK",
    Distance:217.693,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BET",
    To:"WTL",
    Distance:67.0496,
    Airport:"Airbus France"
}),
new Routes(
{
    From:"BET",
    To:"WTL",
    Distance:67.0496,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BEU",
    To:"BQL",
    Distance:165.505,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"BEU",
    To:"BVI",
    Distance:172.876,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"BEW",
    To:"APL",
    Distance:697.995,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"BEW",
    To:"JNB",
    Distance:980.687,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"BEW",
    To:"JNB",
    Distance:980.687,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"BEW",
    To:"MPM",
    Distance:721.748,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"BEW",
    To:"POL",
    Distance:965.178,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"BEW",
    To:"TET",
    Distance:431.816,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"BEW",
    To:"UEL",
    Distance:298.651,
    Airport:"Air Mozambique"
}),
new Routes(
{
    From:"BEY",
    To:"ACC",
    Distance:4829.52,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"ADD",
    Distance:2783.12,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"ALG",
    Distance:2933.85,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BEY",
    To:"AMM",
    Distance:238.054,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"AMM",
    Distance:238.054,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"BEY",
    To:"AMM",
    Distance:238.054,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"BEY",
    To:"ATH",
    Distance:1135.21,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"AUH",
    Distance:2128.75,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BEY",
    To:"AUH",
    Distance:2128.75,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"BAH",
    Distance:1679.47,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BEY",
    To:"BGW",
    Distance:812.716,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"BRU",
    Distance:3139.26,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"BSR",
    Distance:1201.12,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"CAI",
    Distance:563.353,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"BEY",
    To:"CAI",
    Distance:563.353,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"CDG",
    Distance:3187.08,
    Airport:"Air France"
}),
new Routes(
{
    From:"BEY",
    To:"CDG",
    Distance:3187.08,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"CMN",
    Distance:3960.47,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BEY",
    To:"DMM",
    Distance:1597.93,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"DOH",
    Distance:1819.9,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"DOH",
    Distance:1819.9,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BEY",
    To:"DWC",
    Distance:2159.76,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"BEY",
    To:"DXB",
    Distance:2140.69,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BEY",
    To:"DXB",
    Distance:2140.69,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"EBL",
    Distance:816.752,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"EBL",
    Distance:816.752,
    Airport:"Zoom Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"EVN",
    Distance:1057.66,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"FCO",
    Distance:2216.87,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BEY",
    To:"FCO",
    Distance:2216.87,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"FRA",
    Distance:2839.31,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BEY",
    To:"FRA",
    Distance:2839.31,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"GVA",
    Distance:2833.68,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"HBE",
    Distance:632.379,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"BEY",
    To:"IKA",
    Distance:1442.75,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"BEY",
    To:"IST",
    Distance:989.604,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"IST",
    Distance:989.604,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"JED",
    Distance:1397.16,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"JED",
    Distance:1397.16,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"KAN",
    Distance:3649.9,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"KWI",
    Distance:1287.36,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"BEY",
    To:"KWI",
    Distance:1287.36,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"BEY",
    To:"KWI",
    Distance:1287.36,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"LCA",
    Distance:207.382,
    Airport:"Cyprus Airways"
}),
new Routes(
{
    From:"BEY",
    To:"LCA",
    Distance:207.382,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"LHR",
    Distance:3481.88,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BEY",
    To:"LHR",
    Distance:3481.88,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"LOS",
    Distance:4483.98,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"MCT",
    Distance:2489.16,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"BEY",
    To:"MED",
    Distance:1108.5,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"MED",
    Distance:1108.5,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"MHD",
    Distance:2209.92,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"BEY",
    To:"MSQ",
    Distance:2306.45,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"MXP",
    Distance:2620.23,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BEY",
    To:"MXP",
    Distance:2620.23,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"NJF",
    Distance:856.506,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"OTP",
    Distance:1441.2,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"OTP",
    Distance:1441.2,
    Airport:"Tarom"
}),
new Routes(
{
    From:"BEY",
    To:"RUH",
    Distance:1464.74,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"RUH",
    Distance:1464.74,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"SAH",
    Distance:2220,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"BEY",
    To:"SAW",
    Distance:957.324,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"SHJ",
    Distance:2149.53,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"BEY",
    To:"SVO",
    Distance:2467.59,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"SVO",
    Distance:2467.59,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"SXF",
    Distance:2705.46,
    Airport:"Germania"
}),
new Routes(
{
    From:"BEY",
    To:"TUN",
    Distance:2309.2,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BEY",
    To:"TUN",
    Distance:2309.2,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"BFD",
    To:"CLE",
    Distance:270.369,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BFD",
    To:"JHW",
    Distance:64.2335,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BFF",
    To:"DEN",
    Distance:241.394,
    Airport:"Great Lakes Airlines"
}),
new Routes(
{
    From:"BFI",
    To:"CLM",
    Distance:110.934,
    Airport:"Kenmore Air"
}),
new Routes(
{
    From:"BFI",
    To:"ESD",
    Distance:138.564,
    Airport:"Kenmore Air"
}),
new Routes(
{
    From:"BFJ",
    To:"CAN",
    Distance:899.918,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BFJ",
    To:"CKG",
    Distance:298.855,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"BFJ",
    To:"KMG",
    Distance:367.274,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"BFJ",
    To:"KWE",
    Distance:157.784,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"BFJ",
    To:"NAY",
    Distance:1721.4,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"BFJ",
    To:"NAY",
    Distance:1721.4,
    Airport:"China United"
}),
new Routes(
{
    From:"BFJ",
    To:"SHA",
    Distance:1603.33,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"BFJ",
    To:"SZX",
    Distance:988.406,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BFL",
    To:"DEN",
    Distance:1356.74,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BFL",
    To:"IAH",
    Distance:2293.78,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BFL",
    To:"LAX",
    Distance:176.087,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BFL",
    To:"PHX",
    Distance:683.101,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BFL",
    To:"PHX",
    Distance:683.101,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BFL",
    To:"SFO",
    Distance:383.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BFN",
    To:"CPT",
    Distance:908.469,
    Airport:"Mango"
}),
new Routes(
{
    From:"BFN",
    To:"CPT",
    Distance:908.469,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"BFN",
    To:"DUR",
    Distance:460.12,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"BFN",
    To:"JNB",
    Distance:380.15,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"BFQ",
    To:"JQE",
    Distance:8.65169,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"BFS",
    To:"ACE",
    Distance:2920.18,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BFS",
    To:"AGP",
    Distance:2003.87,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BFS",
    To:"AGP",
    Distance:2003.87,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"ALC",
    Distance:1870.19,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BFS",
    To:"ALC",
    Distance:1870.19,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"AMS",
    Distance:771.04,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"BCN",
    Distance:1606.15,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"BHX",
    Distance:383.455,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"BRS",
    Distance:432.667,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"CDG",
    Distance:868.663,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"DBV",
    Distance:2227.79,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BFS",
    To:"DLM",
    Distance:3317.59,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BFS",
    To:"EDI",
    Distance:230.282,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"EWR",
    Distance:5098.82,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BFS",
    To:"EWR",
    Distance:5098.82,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BFS",
    To:"FAO",
    Distance:1966.34,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BFS",
    To:"FAO",
    Distance:1966.34,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"GLA",
    Distance:176.039,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"KRK",
    Distance:1825.38,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"LCA",
    Distance:3760.46,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BFS",
    To:"LGW",
    Distance:561.416,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"LPL",
    Distance:264.688,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"LTN",
    Distance:496.699,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"MAN",
    Distance:295.475,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"MJV",
    Distance:1921.32,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BFS",
    To:"MLA",
    Distance:2623.56,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"NBE",
    Distance:2427.96,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BFS",
    To:"NCE",
    Distance:1559.69,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"NCL",
    Distance:292.654,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"PMI",
    Distance:1807.32,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BFS",
    To:"PMI",
    Distance:1807.32,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BFS",
    To:"PMI",
    Distance:1807.32,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"REU",
    Distance:1597.77,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BFS",
    To:"STN",
    Distance:527.919,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BFS",
    To:"TFS",
    Distance:3075.42,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BFS",
    To:"TFS",
    Distance:3075.42,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BFV",
    To:"DMK",
    Distance:320.244,
    Airport:"Nok Air"
}),
new Routes(
{
    From:"BGA",
    To:"BOG",
    Distance:289.875,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BGA",
    To:"BOG",
    Distance:289.875,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BGA",
    To:"BOG",
    Distance:289.875,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BGA",
    To:"MDE",
    Distance:269.365,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BGA",
    To:"PTY",
    Distance:715.795,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BGF",
    To:"CMN",
    Distance:4205.68,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BGF",
    To:"DLA",
    Distance:976.776,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BGF",
    To:"NSI",
    Distance:776.226,
    Airport:"Air France"
}),
new Routes(
{
    From:"BGG",
    To:"ESB",
    Distance:666.735,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BGG",
    To:"IST",
    Distance:1030.74,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BGI",
    To:"ANU",
    Distance:514.751,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"BGI",
    To:"ANU",
    Distance:514.751,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"BGI",
    To:"DOM",
    Distance:336.902,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"BGI",
    To:"FDF",
    Distance:234.598,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"BGI",
    To:"FRA",
    Distance:7334.08,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"BGI",
    To:"GND",
    Distance:275.949,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"BGI",
    To:"GRU",
    Distance:4299.47,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BGI",
    To:"JFK",
    Distance:3366.29,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BGI",
    To:"KIN",
    Distance:1929.21,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"BGI",
    To:"LGW",
    Distance:6758.76,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BGI",
    To:"LGW",
    Distance:6758.76,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BGI",
    To:"LGW",
    Distance:6758.76,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"BGI",
    To:"MAN",
    Distance:6698.85,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"BGI",
    To:"MAN",
    Distance:6698.85,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"BGI",
    To:"MIA",
    Distance:2592.98,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BGI",
    To:"MIA",
    Distance:2592.98,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BGI",
    To:"OGL",
    Distance:713.302,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"BGI",
    To:"POS",
    Distance:341.028,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"BGI",
    To:"SLU",
    Distance:193.301,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"BGI",
    To:"SVD",
    Distance:186.259,
    Airport:"Leeward Islands Air Transport"
}),
new Routes(
{
    From:"BGI",
    To:"SXM",
    Distance:674.476,
    Airport:"Caribbean Airlines"
}),
new Routes(
{
    From:"BGI",
    To:"YYZ",
    Distance:3908.48,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BGI",
    To:"YYZ",
    Distance:3908.48,
    Airport:"WestJet"
}),
new Routes(
{
    From:"BGM",
    To:"DTW",
    Distance:607.096,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BGM",
    To:"IAD",
    Distance:383.749,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BGM",
    To:"PHL",
    Distance:267.115,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BGM",
    To:"PHL",
    Distance:267.115,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BGO",
    To:"ABZ",
    Distance:548.27,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BGO",
    To:"ABZ",
    Distance:548.27,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BGO",
    To:"AES",
    Distance:256.496,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BGO",
    To:"AES",
    Distance:256.496,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BGO",
    To:"AGP",
    Distance:2715.51,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"ALC",
    Distance:2480.9,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"ALC",
    Distance:2480.9,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BGO",
    To:"AMS",
    Distance:888.303,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BGO",
    To:"AMS",
    Distance:888.303,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BGO",
    To:"ARN",
    Distance:709.171,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"ARN",
    Distance:709.171,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BGO",
    To:"AYT",
    Distance:3167.4,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"BCN",
    Distance:2123.2,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BGO",
    To:"BCN",
    Distance:2123.2,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BGO",
    To:"BCN",
    Distance:2123.2,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"BLL",
    Distance:556.535,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BGO",
    To:"BNN",
    Distance:674.468,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BGO",
    To:"BOO",
    Distance:894.378,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BGO",
    To:"CHQ",
    Distance:3068.43,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"CPH",
    Distance:679.5,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"CPH",
    Distance:679.5,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BGO",
    To:"DBV",
    Distance:2160.22,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"EDI",
    Distance:697.38,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"FAE",
    Distance:696.883,
    Airport:"Atlantic Airways"
}),
new Routes(
{
    From:"BGO",
    To:"FCO",
    Distance:2110.99,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"FDE",
    Distance:125.675,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BGO",
    To:"FRA",
    Distance:1160.63,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BGO",
    To:"FRA",
    Distance:1160.63,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BGO",
    To:"FRO",
    Distance:143.846,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BGO",
    To:"GDN",
    Distance:1028.69,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BGO",
    To:"HAM",
    Distance:794.825,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BGO",
    To:"HAU",
    Distance:105.427,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BGO",
    To:"HOV",
    Distance:214.719,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BGO",
    To:"JFK",
    Distance:5603.81,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"KEF",
    Distance:1489.45,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"KRK",
    Distance:1458.1,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"KRS",
    Distance:283.74,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BGO",
    To:"KSU",
    Distance:342.116,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BGO",
    To:"KTW",
    Distance:1393.77,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BGO",
    To:"LGW",
    Distance:1070.97,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"LGW",
    Distance:1070.97,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BGO",
    To:"LHR",
    Distance:1041.38,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BGO",
    To:"LHR",
    Distance:1041.38,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BGO",
    To:"LPA",
    Distance:3919.2,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"MAN",
    Distance:895.032,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BGO",
    To:"MOL",
    Distance:293.305,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BGO",
    To:"NCE",
    Distance:1854.57,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"ORY",
    Distance:1299.18,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"OSL",
    Distance:324.705,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"OSL",
    Distance:324.705,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BGO",
    To:"OSL",
    Distance:324.705,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BGO",
    To:"PMI",
    Distance:2312.64,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"PRG",
    Distance:1267.7,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"RIX",
    Distance:1144.29,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"BGO",
    To:"RIX",
    Distance:1144.29,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BGO",
    To:"SKE",
    Distance:273.008,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BGO",
    To:"SOG",
    Distance:141.756,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BGO",
    To:"SVG",
    Distance:159.281,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"BGO",
    To:"SVG",
    Distance:159.281,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"SVG",
    Distance:159.281,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BGO",
    To:"SVG",
    Distance:159.281,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BGO",
    To:"SXF",
    Distance:1016.23,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"TOS",
    Distance:1220.55,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BGO",
    To:"TRD",
    Distance:461.442,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"BGO",
    To:"TRD",
    Distance:461.442,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"TRD",
    Distance:461.442,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BGO",
    To:"TRF",
    Distance:307.98,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BGO",
    To:"TRF",
    Distance:307.98,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BGO",
    To:"VNO",
    Distance:1347.62,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BGR",
    To:"DCA",
    Distance:948.378,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BGR",
    To:"DCA",
    Distance:948.378,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BGR",
    To:"DTW",
    Distance:1204.59,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BGR",
    To:"LGA",
    Distance:608.238,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BGR",
    To:"PHL",
    Distance:760.447,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BGR",
    To:"PHL",
    Distance:760.447,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BGR",
    To:"PIE",
    Distance:2244.63,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BGR",
    To:"SFB",
    Distance:2091.64,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BGW",
    To:"AMM",
    Distance:791.449,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"BGW",
    To:"ARN",
    Distance:3510.32,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"BGW",
    To:"AUH",
    Distance:1410.2,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BGW",
    To:"AYT",
    Distance:1286.21,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BGW",
    To:"BAH",
    Distance:992.41,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BGW",
    To:"BEY",
    Distance:812.716,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BGW",
    To:"CAI",
    Distance:1262.05,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"BGW",
    To:"DOH",
    Distance:1138.2,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BGW",
    To:"DXB",
    Distance:1398.01,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BGW",
    To:"DXB",
    Distance:1398.01,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"BGW",
    To:"ESB",
    Distance:1258.03,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BGW",
    To:"IST",
    Distance:1610.35,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BGW",
    To:"SHJ",
    Distance:1403.83,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"BGW",
    To:"TBS",
    Distance:936.922,
    Airport:"Cameroon Airlines"
}),
new Routes(
{
    From:"BGY",
    To:"ACE",
    Distance:2757.69,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"AGP",
    Distance:1549.76,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"AHO",
    Distance:572.195,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"ALC",
    Distance:1179.36,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"ARW",
    Distance:894.915,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BGY",
    To:"ATH",
    Distance:1457.06,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"BCN",
    Distance:783.842,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"BDS",
    Distance:869.852,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"BLL",
    Distance:1120,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"BRE",
    Distance:822.577,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"BRI",
    Distance:760.537,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"BRS",
    Distance:1111.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"BTS",
    Distance:633.829,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"BUD",
    Distance:755.637,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"BVA",
    Distance:707.351,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"CAG",
    Distance:716.12,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"CHQ",
    Distance:1656.29,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"CLJ",
    Distance:1081.13,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BGY",
    To:"CMN",
    Distance:2010.09,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"BGY",
    To:"CRA",
    Distance:1123.98,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BGY",
    To:"CRL",
    Distance:659.445,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"CTA",
    Distance:1015.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"DUB",
    Distance:1433.51,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"EIN",
    Distance:716.665,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"EMA",
    Distance:1126.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"FEZ",
    Distance:1805.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"FUE",
    Distance:2815.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"GDN",
    Distance:1150.66,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BGY",
    To:"GRO",
    Distance:697.194,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"GSE",
    Distance:1353.62,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"HHN",
    Distance:508.995,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"IBZ",
    Distance:1019.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"IEV",
    Distance:1623.16,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"BGY",
    To:"KGS",
    Distance:1751.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"KRK",
    Distance:896.081,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"KTW",
    Distance:876.485,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BGY",
    To:"LBA",
    Distance:1220.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"LBC",
    Distance:907.091,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"LDE",
    Distance:818.867,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"LPA",
    Distance:2957.36,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"LPP",
    Distance:2086.26,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"LWO",
    Distance:1158.42,
    Airport:"Wizz Air Ukraine"
}),
new Routes(
{
    From:"BGY",
    To:"MAD",
    Distance:1219.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"MAN",
    Distance:1212.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"MLA",
    Distance:1162.64,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"NRN",
    Distance:709.047,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"NYO",
    Distance:1536.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"OMO",
    Distance:698.115,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"BGY",
    To:"OPO",
    Distance:1559.21,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"OTP",
    Distance:1290.09,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BGY",
    To:"PMI",
    Distance:887.568,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"PMO",
    Distance:879.333,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"PRG",
    Distance:597.843,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BGY",
    To:"PSR",
    Distance:507.756,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"RAK",
    Distance:2185.95,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"RHO",
    Distance:1847.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"RIX",
    Distance:1589.85,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"RYG",
    Distance:1525.63,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"SAW",
    Distance:1668.3,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"BGY",
    To:"SCQ",
    Distance:1471.61,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"SDR",
    Distance:1098.95,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"SKG",
    Distance:1218.01,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"SKP",
    Distance:1040.11,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BGY",
    To:"SOF",
    Distance:1140,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BGY",
    To:"STN",
    Distance:977.476,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"SUF",
    Distance:924.315,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"SVQ",
    Distance:1585.31,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"SXF",
    Distance:795.673,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"TFS",
    Distance:3025.98,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"TIA",
    Distance:934.953,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"BGY",
    To:"TLL",
    Distance:1829.24,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"TMP",
    Distance:1967.12,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"TPS",
    Distance:893.312,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"TSR",
    Distance:902.128,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BGY",
    To:"VLC",
    Distance:1079.43,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"VNO",
    Distance:1485.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"VNO",
    Distance:1485.67,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BGY",
    To:"WAW",
    Distance:1092.48,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BGY",
    To:"WMI",
    Distance:1095.12,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"WRO",
    Distance:802.752,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BGY",
    To:"ZAZ",
    Distance:971.282,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHB",
    To:"BOS",
    Distance:315.208,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"BHD",
    To:"ABZ",
    Distance:367.318,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHD",
    To:"AGP",
    Distance:1997.94,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BHD",
    To:"BHX",
    Distance:363.491,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHD",
    To:"CWL",
    Distance:396.098,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHD",
    To:"EDI",
    Distance:216.768,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHD",
    To:"EMA",
    Distance:358.877,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHD",
    To:"EXT",
    Distance:462.485,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHD",
    To:"FAO",
    Distance:1963.92,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BHD",
    To:"GLA",
    Distance:166.621,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHD",
    To:"INV",
    Distance:344.305,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHD",
    To:"IOM",
    Distance:100.412,
    Airport:"Star1 Airlines"
}),
new Routes(
{
    From:"BHD",
    To:"LBA",
    Distance:286.126,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHD",
    To:"LGW",
    Distance:542.122,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BHD",
    To:"LHR",
    Distance:502.505,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BHD",
    To:"LHR",
    Distance:502.505,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BHD",
    To:"LHR",
    Distance:502.505,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BHD",
    To:"LHR",
    Distance:502.505,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BHD",
    To:"MAN",
    Distance:273.974,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHD",
    To:"NCL",
    Distance:271.78,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHD",
    To:"PMI",
    Distance:1794.03,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BHD",
    To:"SOU",
    Distance:508.269,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHE",
    To:"AKL",
    Distance:507.745,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"BHE",
    To:"CHC",
    Distance:245.075,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"BHE",
    To:"WLG",
    Distance:80.8036,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"BHH",
    To:"DMM",
    Distance:1028.15,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"BHH",
    To:"JED",
    Distance:406.372,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"BHH",
    To:"RUH",
    Distance:693.692,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"BHI",
    To:"AEP",
    Distance:571.477,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"BHI",
    To:"AEP",
    Distance:571.477,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BHI",
    To:"MDQ",
    Distance:410.378,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"BHI",
    To:"REL",
    Distance:562.529,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"BHJ",
    To:"BOM",
    Distance:572.591,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BHJ",
    To:"BOM",
    Distance:572.591,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BHK",
    To:"DME",
    Distance:2615.66,
    Airport:"Moskovia Airlines"
}),
new Routes(
{
    From:"BHK",
    To:"DME",
    Distance:2615.66,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"BHK",
    To:"DME",
    Distance:2615.66,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"BHK",
    To:"LED",
    Distance:3250.94,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"BHK",
    To:"LED",
    Distance:3250.94,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"BHK",
    To:"TAS",
    Distance:437.731,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"BHM",
    To:"ATL",
    Distance:215.53,
    Airport:"Air France"
}),
new Routes(
{
    From:"BHM",
    To:"ATL",
    Distance:215.53,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BHM",
    To:"ATL",
    Distance:215.53,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BHM",
    To:"ATL",
    Distance:215.53,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BHM",
    To:"ATL",
    Distance:215.53,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BHM",
    To:"ATL",
    Distance:215.53,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"BHM",
    To:"BWI",
    Distance:1096.54,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BHM",
    To:"BWI",
    Distance:1096.54,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BHM",
    To:"CLT",
    Distance:563.782,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BHM",
    To:"CLT",
    Distance:563.782,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BHM",
    To:"DAL",
    Distance:942.513,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BHM",
    To:"DAL",
    Distance:942.513,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BHM",
    To:"DCA",
    Distance:1050.59,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BHM",
    To:"DCA",
    Distance:1050.59,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BHM",
    To:"DEN",
    Distance:1740.03,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BHM",
    To:"DFW",
    Distance:959.044,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BHM",
    To:"DFW",
    Distance:959.044,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BHM",
    To:"DTW",
    Distance:1006.76,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BHM",
    To:"FPO",
    Distance:1098.28,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"BHM",
    To:"HOU",
    Distance:916.92,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BHM",
    To:"IAH",
    Distance:903.648,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BHM",
    To:"LAS",
    Distance:2598.16,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BHM",
    To:"LAS",
    Distance:2598.16,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BHM",
    To:"LGA",
    Distance:1392.63,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BHM",
    To:"MCO",
    Distance:771.185,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BHM",
    To:"MCO",
    Distance:771.185,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BHM",
    To:"MCO",
    Distance:771.185,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BHM",
    To:"MDW",
    Distance:918.555,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BHM",
    To:"MIA",
    Distance:1065.35,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BHM",
    To:"MIA",
    Distance:1065.35,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BHM",
    To:"MSP",
    Distance:1375.28,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BHM",
    To:"ORD",
    Distance:941.207,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BHM",
    To:"PHL",
    Distance:1241.37,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BHM",
    To:"PHL",
    Distance:1241.37,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BHM",
    To:"TPA",
    Distance:740.48,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BHM",
    To:"TPA",
    Distance:740.48,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BHO",
    To:"BOM",
    Distance:657.686,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BHO",
    To:"BOM",
    Distance:657.686,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BHO",
    To:"BOM",
    Distance:657.686,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BHO",
    To:"DEL",
    Distance:587.469,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BHO",
    To:"DEL",
    Distance:587.469,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BHO",
    To:"DEL",
    Distance:587.469,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BHQ",
    To:"ADL",
    Distance:426.058,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"BHQ",
    To:"DBO",
    Distance:669.286,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"BHQ",
    To:"MQL",
    Distance:254.233,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"BHQ",
    To:"SYD",
    Distance:930.397,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"BHR",
    To:"KTM",
    Distance:91.5636,
    Airport:"Yeti Airways"
}),
new Routes(
{
    From:"BHS",
    To:"PKE",
    Distance:134.952,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"BHS",
    To:"SYD",
    Distance:153.23,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"BHU",
    To:"BOM",
    Distance:304.593,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BHU",
    To:"BOM",
    Distance:304.593,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BHV",
    To:"ISB",
    Distance:492.365,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"BHV",
    To:"KHI",
    Distance:668.659,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"BHV",
    To:"KHI",
    Distance:668.659,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"BHV",
    To:"LHE",
    Distance:353.106,
    Airport:"MexicanaLink"
}),
new Routes(
{
    From:"BHV",
    To:"LHE",
    Distance:353.106,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"BHX",
    To:"ABZ",
    Distance:528.745,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"ACE",
    Distance:2790.18,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"ACE",
    Distance:2790.18,
    Airport:"Condor Flugdienst"
}),
new Routes(
{
    From:"BHX",
    To:"ACE",
    Distance:2790.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"ACE",
    Distance:2790.18,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BHX",
    To:"ACE",
    Distance:2790.18,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"BHX",
    To:"ACE",
    Distance:2790.18,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"ADB",
    Distance:2723.29,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"AGP",
    Distance:1767.69,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"AGP",
    Distance:1767.69,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"ALC",
    Distance:1578.5,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"ALC",
    Distance:1578.5,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"ALC",
    Distance:1578.5,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"ALC",
    Distance:1578.5,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"AMS",
    Distance:442.134,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"AMS",
    Distance:442.134,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BHX",
    To:"ARN",
    Distance:1451.53,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BHX",
    To:"ASB",
    Distance:4818.67,
    Airport:"Turkmenistan Airlines"
}),
new Routes(
{
    From:"BHX",
    To:"AYT",
    Distance:3060.35,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BHX",
    To:"AYT",
    Distance:3060.35,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"BHX",
    To:"AYT",
    Distance:3060.35,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"BCN",
    Distance:1273.75,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"BCN",
    Distance:1273.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"BFS",
    Distance:383.455,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BHX",
    To:"BHD",
    Distance:363.491,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"BJV",
    Distance:2837.34,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"BJV",
    Distance:2837.34,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"BRU",
    Distance:462.916,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BHX",
    To:"BRU",
    Distance:462.916,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BHX",
    To:"BTS",
    Distance:1423.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"BVC",
    Distance:4444.76,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"BHX",
    To:"BVC",
    Distance:4444.76,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"BZG",
    Distance:1324.6,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"CDG",
    Distance:487.575,
    Airport:"Air France"
}),
new Routes(
{
    From:"BHX",
    To:"CDG",
    Distance:487.575,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"CGN",
    Distance:637.702,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"CPH",
    Distance:1001.99,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BHX",
    To:"DBV",
    Distance:1852.6,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"DBV",
    Distance:1852.6,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"DBV",
    Distance:1852.6,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"DEL",
    Distance:6798.84,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BHX",
    To:"DLM",
    Distance:2949.63,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"DLM",
    Distance:2949.63,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BHX",
    To:"DLM",
    Distance:2949.63,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"BHX",
    To:"DLM",
    Distance:2949.63,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"DUB",
    Distance:321.507,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BHX",
    To:"DUB",
    Distance:321.507,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"DUS",
    Distance:598.364,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"DUS",
    Distance:598.364,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BHX",
    To:"DXB",
    Distance:5603.41,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BHX",
    To:"DXB",
    Distance:5603.41,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BHX",
    To:"EDI",
    Distance:402.826,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"EWR",
    Distance:5444.83,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BHX",
    To:"EWR",
    Distance:5444.83,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BHX",
    To:"FAO",
    Distance:1784.01,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"FAO",
    Distance:1784.01,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"FAO",
    Distance:1784.01,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"FCO",
    Distance:1583.12,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"FLR",
    Distance:1355.52,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"FNC",
    Distance:2506.45,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"FNC",
    Distance:2506.45,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"FRA",
    Distance:764.742,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BHX",
    To:"FUE",
    Distance:2849.97,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"FUE",
    Distance:2849.97,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"FUE",
    Distance:2849.97,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BHX",
    To:"FUE",
    Distance:2849.97,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"BHX",
    To:"FUE",
    Distance:2849.97,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"GCI",
    Distance:340.969,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"GDN",
    Distance:1351.78,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"GIB",
    Distance:1834.7,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"GLA",
    Distance:418.267,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"GOT",
    Distance:1061.61,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"BHX",
    To:"HAJ",
    Distance:773.861,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"HAM",
    Distance:794.491,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BHX",
    To:"HER",
    Distance:2846.77,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"HRG",
    Distance:4065.29,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"IBZ",
    Distance:1529.12,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"INV",
    Distance:584.442,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"IOM",
    Distance:263.411,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"ISB",
    Distance:6131.01,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"BHX",
    To:"IST",
    Distance:2628.58,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BHX",
    To:"JER",
    Distance:362.292,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"KRK",
    Distance:1515.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"KTW",
    Distance:1454.33,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"KUN",
    Distance:1712.78,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"LCA",
    Distance:3399.18,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"LCA",
    Distance:3399.18,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BHX",
    To:"LCA",
    Distance:3399.18,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"LDY",
    Distance:457.552,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"LEI",
    Distance:1736.42,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"LPA",
    Distance:2951.14,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"LPA",
    Distance:2951.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"LPA",
    Distance:2951.14,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"LYS",
    Distance:897.775,
    Airport:"Air France"
}),
new Routes(
{
    From:"BHX",
    To:"LYS",
    Distance:897.775,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"MAH",
    Distance:1472.31,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"MJV",
    Distance:1633.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"MLA",
    Distance:2242.9,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"BHX",
    To:"MLA",
    Distance:2242.9,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"MUC",
    Distance:1059.84,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BHX",
    To:"MXP",
    Distance:1074.41,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"NBE",
    Distance:2057.12,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BHX",
    To:"NBE",
    Distance:2057.12,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"BHX",
    To:"NBE",
    Distance:2057.12,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"NCE",
    Distance:1181.41,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"NCL",
    Distance:287.312,
    Airport:"Eastern Airways"
}),
new Routes(
{
    From:"BHX",
    To:"NOC",
    Distance:497.948,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"OPO",
    Distance:1351.47,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"ORK",
    Distance:464.936,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BHX",
    To:"PFO",
    Distance:3340.13,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"PFO",
    Distance:3340.13,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"PMI",
    Distance:1474.78,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"PMI",
    Distance:1474.78,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"PMI",
    Distance:1474.78,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BHX",
    To:"PMI",
    Distance:1474.78,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"BHX",
    To:"PMI",
    Distance:1474.78,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"RAK",
    Distance:2373.35,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"REU",
    Distance:1276.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"SNN",
    Distance:485.526,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BHX",
    To:"SPU",
    Distance:1661.44,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"SSH",
    Distance:4029.6,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"SSH",
    Distance:4029.6,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"BHX",
    To:"SSH",
    Distance:4029.6,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"STR",
    Distance:879.251,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"TFS",
    Distance:2978.22,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"TFS",
    Distance:2978.22,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BHX",
    To:"TFS",
    Distance:2978.22,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BHX",
    To:"TFS",
    Distance:2978.22,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"BHX",
    To:"TFS",
    Distance:2978.22,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BHX",
    To:"TXL",
    Distance:1015.86,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BHX",
    To:"VCE",
    Distance:1283.11,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BHX",
    To:"WAT",
    Distance:363.998,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BHX",
    To:"ZRH",
    Distance:920.71,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BHY",
    To:"CAN",
    Distance:460.183,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BHY",
    To:"CGO",
    Distance:1510.23,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BHY",
    To:"CKG",
    Distance:947.518,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BHY",
    To:"CKG",
    Distance:947.518,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"BHY",
    To:"CSX",
    Distance:838.627,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BHY",
    To:"CTU",
    Distance:1137.74,
    Airport:"Empresa Ecuatoriana De Aviacion"
}),
new Routes(
{
    From:"BHY",
    To:"HAK",
    Distance:215.656,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"BHY",
    To:"HGH",
    Distance:1473.43,
    Airport:"Air China"
}),
new Routes(
{
    From:"BHY",
    To:"HGH",
    Distance:1473.43,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"BHY",
    To:"KMG",
    Distance:771.292,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"BHY",
    To:"KMG",
    Distance:771.292,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BHY",
    To:"KWL",
    Distance:416.061,
    Airport:"Huaxia"
}),
new Routes(
{
    From:"BHY",
    To:"LYA",
    Distance:1460.65,
    Airport:"Air Foyle"
}),
new Routes(
{
    From:"BHY",
    To:"PEK",
    Distance:2173.97,
    Airport:"Air China"
}),
new Routes(
{
    From:"BHY",
    To:"PEK",
    Distance:2173.97,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"BHY",
    To:"PVG",
    Distance:1639.28,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"BHY",
    To:"PVG",
    Distance:1639.28,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"BHY",
    To:"SJW",
    Distance:1932.01,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BHY",
    To:"SZX",
    Distance:481.141,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"BHY",
    To:"XIY",
    Distance:1436.25,
    Airport:"Sichuan Airlines"
}),
new Routes(
{
    From:"BIA",
    To:"BES",
    Distance:1263.53,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BIA",
    To:"BOD",
    Distance:857.52,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BIA",
    To:"BRU",
    Distance:1002.91,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BIA",
    To:"CDG",
    Distance:896.459,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BIA",
    To:"CGN",
    Distance:941.335,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BIA",
    To:"DUS",
    Distance:992.972,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BIA",
    To:"EBU",
    Distance:531.098,
    Airport:"Air France"
}),
new Routes(
{
    From:"BIA",
    To:"EBU",
    Distance:531.098,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"BIA",
    To:"FRA",
    Distance:834.162,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BIA",
    To:"GVA",
    Distance:489.616,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BIA",
    To:"HAM",
    Distance:1232.35,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BIA",
    To:"LGG",
    Distance:950.144,
    Airport:"Air France"
}),
new Routes(
{
    From:"BIA",
    To:"LGG",
    Distance:950.144,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"BIA",
    To:"LGW",
    Distance:1203.97,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BIA",
    To:"LIL",
    Distance:1015.07,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BIA",
    To:"LIL",
    Distance:1015.07,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BIA",
    To:"LUX",
    Distance:825.856,
    Airport:"Luxair"
}),
new Routes(
{
    From:"BIA",
    To:"LYS",
    Distance:497.266,
    Airport:"Air France"
}),
new Routes(
{
    From:"BIA",
    To:"LYS",
    Distance:497.266,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"BIA",
    To:"LYS",
    Distance:497.266,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BIA",
    To:"MRS",
    Distance:360.853,
    Airport:"Air France"
}),
new Routes(
{
    From:"BIA",
    To:"MRS",
    Distance:360.853,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BIA",
    To:"MRS",
    Distance:360.853,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"BIA",
    To:"NCE",
    Distance:221.379,
    Airport:"Air France"
}),
new Routes(
{
    From:"BIA",
    To:"NCE",
    Distance:221.379,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BIA",
    To:"NCE",
    Distance:221.379,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"BIA",
    To:"NTE",
    Distance:1011.79,
    Airport:"Air France"
}),
new Routes(
{
    From:"BIA",
    To:"NTE",
    Distance:1011.79,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BIA",
    To:"NTE",
    Distance:1011.79,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"BIA",
    To:"ORY",
    Distance:881.161,
    Airport:"Air France"
}),
new Routes(
{
    From:"BIA",
    To:"ORY",
    Distance:881.161,
    Airport:"Corse-Mediterranee"
}),
new Routes(
{
    From:"BIA",
    To:"STR",
    Distance:682.729,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BIA",
    To:"SXB",
    Distance:681.021,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BIA",
    To:"TLS",
    Distance:669.844,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BIA",
    To:"TLS",
    Distance:669.844,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BIA",
    To:"TXL",
    Distance:1148.34,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BIK",
    To:"DJJ",
    Distance:513.612,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BIK",
    To:"DJJ",
    Distance:513.612,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"BIK",
    To:"UPG",
    Distance:1887.36,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BIK",
    To:"UPG",
    Distance:1887.36,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"BIL",
    To:"AZA",
    Distance:1415.24,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BIL",
    To:"DEN",
    Distance:732.343,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BIL",
    To:"GDV",
    Distance:321.602,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"BIL",
    To:"GGW",
    Distance:304.383,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"BIL",
    To:"HVR",
    Distance:317.752,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"BIL",
    To:"LAS",
    Distance:1215.09,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BIL",
    To:"MSP",
    Distance:1199.53,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BIL",
    To:"OLF",
    Distance:339.268,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"BIL",
    To:"PDX",
    Distance:1090.78,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BIL",
    To:"SDY",
    Distance:392.453,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"BIL",
    To:"SEA",
    Distance:1065.81,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BIL",
    To:"SLC",
    Distance:623.698,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BIM",
    To:"FLL",
    Distance:98.0332,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"ACE",
    Distance:1859.37,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BIO",
    To:"ACE",
    Distance:1859.37,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"ACE",
    Distance:1859.37,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"AGP",
    Distance:749.082,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"AGP",
    Distance:749.082,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"ALC",
    Distance:592.106,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"ALC",
    Distance:592.106,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"AMS",
    Distance:1152.51,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"AMS",
    Distance:1152.51,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"BCN",
    Distance:466.812,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"BCN",
    Distance:466.812,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"BRU",
    Distance:1012.54,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"BRU",
    Distance:1012.54,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"CDG",
    Distance:761.295,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BIO",
    To:"CDG",
    Distance:761.295,
    Airport:"Air France"
}),
new Routes(
{
    From:"BIO",
    To:"CDG",
    Distance:761.295,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BIO",
    To:"DUB",
    Distance:1152.03,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BIO",
    To:"DUS",
    Distance:1147.63,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BIO",
    To:"FCO",
    Distance:1251.23,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BIO",
    To:"FRA",
    Distance:1148.04,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BIO",
    To:"FUE",
    Distance:1919.59,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"FUE",
    Distance:1919.59,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"GVA",
    Distance:782.734,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BIO",
    To:"IBZ",
    Distance:609.189,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BIO",
    To:"IBZ",
    Distance:609.189,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"IBZ",
    Distance:609.189,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"IST",
    Distance:2612.76,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"LCG",
    Distance:442.296,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"LCG",
    Distance:442.296,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"LHR",
    Distance:927.539,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"LHR",
    Distance:927.539,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"LIS",
    Distance:724.289,
    Airport:"SATA International"
}),
new Routes(
{
    From:"BIO",
    To:"LIS",
    Distance:724.289,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"BIO",
    To:"LIS",
    Distance:724.289,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BIO",
    To:"LIS",
    Distance:724.289,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BIO",
    To:"LPA",
    Distance:2042.37,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BIO",
    To:"LPA",
    Distance:2042.37,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"LPA",
    Distance:2042.37,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"MAD",
    Distance:316.87,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BIO",
    To:"MAD",
    Distance:316.87,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"MAN",
    Distance:1118.78,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BIO",
    To:"MUC",
    Distance:1266.97,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BIO",
    To:"MXP",
    Distance:958.251,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"MXP",
    Distance:958.251,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"ORY",
    Distance:727.204,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"ORY",
    Distance:727.204,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"OSL",
    Distance:2101.53,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BIO",
    To:"PMI",
    Distance:627.921,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BIO",
    To:"PMI",
    Distance:627.921,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BIO",
    To:"PMI",
    Distance:627.921,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"PMI",
    Distance:627.921,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"SCQ",
    Distance:449.102,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"SCQ",
    Distance:449.102,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"STN",
    Distance:982.955,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BIO",
    To:"STR",
    Distance:1110.41,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BIO",
    To:"SVQ",
    Distance:701.153,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"SVQ",
    Distance:701.153,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"TFN",
    Distance:2038.5,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BIO",
    To:"TFN",
    Distance:2038.5,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"TFN",
    Distance:2038.5,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"TXL",
    Distance:1579.92,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"TXL",
    Distance:1579.92,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"VCE",
    Distance:1234.99,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BIO",
    To:"VGO",
    Distance:481.419,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIO",
    To:"VLC",
    Distance:469.732,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BIQ",
    To:"CDG",
    Distance:691.276,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BIQ",
    To:"CPH",
    Distance:1687.75,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BIQ",
    To:"CRL",
    Distance:899.31,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BIQ",
    To:"DUB",
    Distance:1160.12,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BIQ",
    To:"GVA",
    Distance:675.474,
    Airport:"Air France"
}),
new Routes(
{
    From:"BIQ",
    To:"GVA",
    Distance:675.474,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BIQ",
    To:"LIL",
    Distance:862.388,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BIQ",
    To:"LYS",
    Distance:580.518,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BIQ",
    To:"MRS",
    Distance:543.683,
    Airport:"Air France"
}),
new Routes(
{
    From:"BIQ",
    To:"NCE",
    Distance:704.136,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BIQ",
    To:"NYO",
    Distance:2119.64,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BIQ",
    To:"ORY",
    Distance:656.53,
    Airport:"Air France"
}),
new Routes(
{
    From:"BIQ",
    To:"STN",
    Distance:945.018,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BIQ",
    To:"SXB",
    Distance:903.06,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BIR",
    To:"KTM",
    Distance:231.984,
    Airport:"Yeti Airways"
}),
new Routes(
{
    From:"BIS",
    To:"AZA",
    Distance:1757.78,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BIS",
    To:"DEN",
    Distance:831.233,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"BIS",
    To:"DEN",
    Distance:831.233,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BIS",
    To:"LAS",
    Distance:1684.46,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BIS",
    To:"MSP",
    Distance:620.416,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BIS",
    To:"SFB",
    Distance:2621,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BJA",
    To:"ALG",
    Distance:165.347,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BJA",
    To:"LYS",
    Distance:1002.36,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BJA",
    To:"MRS",
    Distance:747.725,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"BJA",
    To:"MRS",
    Distance:747.725,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BJA",
    To:"ORY",
    Distance:1353.81,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"BJA",
    To:"ORY",
    Distance:1353.81,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BJB",
    To:"THR",
    Distance:571.425,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"BJF",
    To:"BVG",
    Distance:39.0248,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BJF",
    To:"HFT",
    Distance:222.123,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BJF",
    To:"MEH",
    Distance:83.2329,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BJF",
    To:"VAW",
    Distance:57.1539,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BJF",
    To:"VDS",
    Distance:59.7896,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BJI",
    To:"MSP",
    Distance:320.642,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BJL",
    To:"BCN",
    Distance:3599.89,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"BJL",
    To:"BCN",
    Distance:3599.89,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BJL",
    To:"BCN",
    Distance:3599.89,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BJL",
    To:"CMN",
    Distance:2408.78,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BJL",
    To:"DKR",
    Distance:180.184,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BJL",
    To:"DKR",
    Distance:180.184,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"BJL",
    To:"DKR",
    Distance:180.184,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BJL",
    To:"DKR",
    Distance:180.184,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BJL",
    To:"FNA",
    Distance:646.472,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"BJL",
    To:"FNA",
    Distance:646.472,
    Airport:"Atlant-Soyuz Airlines"
}),
new Routes(
{
    From:"BJL",
    To:"LPA",
    Distance:1628.06,
    Airport:"Binter Canarias"
}),
new Routes(
{
    From:"BJL",
    To:"OXB",
    Distance:193.62,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BJM",
    To:"EBB",
    Distance:510.618,
    Airport:"Northern Dene Airways"
}),
new Routes(
{
    From:"BJM",
    To:"KGL",
    Distance:176.15,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"BJM",
    To:"KGL",
    Distance:176.15,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BJM",
    To:"KGL",
    Distance:176.15,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BJM",
    To:"KGL",
    Distance:176.15,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"BJM",
    To:"KGL",
    Distance:176.15,
    Airport:"Northern Dene Airways"
}),
new Routes(
{
    From:"BJM",
    To:"KGL",
    Distance:176.15,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"BJM",
    To:"NBO",
    Distance:874.242,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BJM",
    To:"NBO",
    Distance:874.242,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BJM",
    To:"NBO",
    Distance:874.242,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BJM",
    To:"NBO",
    Distance:874.242,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"BJM",
    To:"NBO",
    Distance:874.242,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BJM",
    To:"NBO",
    Distance:874.242,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BJR",
    To:"ADD",
    Distance:334.164,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BJR",
    To:"LLI",
    Distance:185.059,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BJV",
    To:"ADB",
    Distance:124.38,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"BJV",
    To:"AMS",
    Distance:2444.52,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"BJV",
    To:"BHX",
    Distance:2837.34,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BJV",
    To:"BRS",
    Distance:2851.7,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BJV",
    To:"BRU",
    Distance:2376.86,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"BJV",
    To:"EDI",
    Distance:3107.51,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BJV",
    To:"EIN",
    Distance:2356.63,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"BJV",
    To:"EMA",
    Distance:2829.8,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BJV",
    To:"ESB",
    Distance:562.274,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"BJV",
    To:"ESB",
    Distance:562.274,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BJV",
    To:"GLA",
    Distance:3161.73,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BJV",
    To:"IST",
    Distance:426.174,
    Airport:"Atlasjet"
}),
new Routes(
{
    From:"BJV",
    To:"IST",
    Distance:426.174,
    Airport:"Onur Air"
}),
new Routes(
{
    From:"BJV",
    To:"IST",
    Distance:426.174,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BJV",
    To:"LBA",
    Distance:2901.45,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BJV",
    To:"LBA",
    Distance:2901.45,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BJV",
    To:"LGW",
    Distance:2679.5,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BJV",
    To:"LGW",
    Distance:2679.5,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BJV",
    To:"LGW",
    Distance:2679.5,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BJV",
    To:"LPL",
    Distance:2945.59,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BJV",
    To:"LTN",
    Distance:2724.77,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BJV",
    To:"MAN",
    Distance:2912.09,
    Airport:"Air Bourbon"
}),
new Routes(
{
    From:"BJV",
    To:"MAN",
    Distance:2912.09,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BJV",
    To:"MAN",
    Distance:2912.09,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BJV",
    To:"MAN",
    Distance:2912.09,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BJV",
    To:"NCL",
    Distance:2965.57,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BJV",
    To:"ORY",
    Distance:2404.68,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BJV",
    To:"RTM",
    Distance:2441.51,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"BJV",
    To:"SAW",
    Distance:429.836,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"BJV",
    To:"SAW",
    Distance:429.836,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BJV",
    To:"STN",
    Distance:2688.05,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BJX",
    To:"ATL",
    Distance:2188.51,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BJX",
    To:"CUN",
    Distance:1515.33,
    Airport:"Volaris"
}),
new Routes(
{
    From:"BJX",
    To:"DFW",
    Distance:1394.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BJX",
    To:"DFW",
    Distance:1394.48,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BJX",
    To:"IAH",
    Distance:1173.82,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BJX",
    To:"LAX",
    Distance:2199.16,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BJX",
    To:"LAX",
    Distance:2199.16,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BJX",
    To:"MDW",
    Distance:2646.05,
    Airport:"Volaris"
}),
new Routes(
{
    From:"BJX",
    To:"MEX",
    Distance:305.2,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"BJX",
    To:"MTY",
    Distance:550.223,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"BJX",
    To:"MTY",
    Distance:550.223,
    Airport:"Birmingham European"
}),
new Routes(
{
    From:"BJX",
    To:"SFO",
    Distance:2730.34,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"BJX",
    To:"TIJ",
    Distance:1999.1,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"BJX",
    To:"TIJ",
    Distance:1999.1,
    Airport:"Volaris"
}),
new Routes(
{
    From:"BJZ",
    To:"BCN",
    Distance:802.455,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BJZ",
    To:"MAD",
    Distance:330.553,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BKC",
    To:"DRG",
    Distance:73.7004,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"BKC",
    To:"DRG",
    Distance:73.7004,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BKC",
    To:"OTZ",
    Distance:119.301,
    Airport:"Bering Air"
}),
new Routes(
{
    From:"BKC",
    To:"OTZ",
    Distance:119.301,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BKG",
    To:"DAL",
    Distance:528.417,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BKG",
    To:"DEN",
    Distance:1067.76,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"BKG",
    To:"HOU",
    Distance:789.786,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BKG",
    To:"MDW",
    Distance:749.289,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"BTU",
    Distance:459.021,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"BWN",
    Distance:166.252,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"BWN",
    Distance:166.252,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"CAN",
    Distance:1963.18,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BKI",
    To:"CGK",
    Distance:1698.97,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BKI",
    To:"DPS",
    Distance:1635.88,
    Airport:"Indonesia AirAsia"
}),
new Routes(
{
    From:"BKI",
    To:"HGH",
    Distance:2739.85,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BKI",
    To:"HKG",
    Distance:1834.86,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BKI",
    To:"HKG",
    Distance:1834.86,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"BKI",
    To:"HKG",
    Distance:1834.86,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"BKI",
    To:"HKG",
    Distance:1834.86,
    Airport:"Hong Kong Express Airways"
}),
new Routes(
{
    From:"BKI",
    To:"HKG",
    Distance:1834.86,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"ICN",
    Distance:3661.1,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"ICN",
    Distance:3661.1,
    Airport:"Eastar Jet"
}),
new Routes(
{
    From:"BKI",
    To:"ICN",
    Distance:3661.1,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"BKI",
    To:"ICN",
    Distance:3661.1,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"JHB",
    Distance:1454.12,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BKI",
    To:"KBR",
    Distance:1521.48,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BKI",
    To:"KCH",
    Distance:803.458,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BKI",
    To:"KCH",
    Distance:803.458,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"KUD",
    Distance:139.726,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"KUL",
    Distance:1629,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BKI",
    To:"KUL",
    Distance:1629,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"KUL",
    Distance:1629,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"BKI",
    To:"LBU",
    Distance:113.43,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"LDU",
    Distance:270.949,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"LWY",
    Distance:140.381,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"MNL",
    Distance:1096.99,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"BKI",
    To:"MNL",
    Distance:1096.99,
    Airport:"Zest Air"
}),
new Routes(
{
    From:"BKI",
    To:"MYY",
    Distance:290.73,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BKI",
    To:"MYY",
    Distance:290.73,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"MZV",
    Distance:251.333,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"NRT",
    Distance:4143.94,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"NRT",
    Distance:4143.94,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"PEN",
    Distance:1746.99,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BKI",
    To:"PER",
    Distance:4211.79,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"PPS",
    Distance:517.612,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"PVG",
    Distance:2866.29,
    Airport:"China SSS"
}),
new Routes(
{
    From:"BKI",
    To:"PVG",
    Distance:2866.29,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"SBW",
    Distance:608.542,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"SDK",
    Distance:222.159,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BKI",
    To:"SDK",
    Distance:222.159,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"SIN",
    Distance:1431.52,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BKI",
    To:"SIN",
    Distance:1431.52,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"SIN",
    Distance:1431.52,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"BKI",
    To:"SIN",
    Distance:1431.52,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"SZX",
    Distance:1872.68,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BKI",
    To:"SZX",
    Distance:1872.68,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"TPE",
    Distance:2198.74,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BKI",
    To:"TPE",
    Distance:2198.74,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKI",
    To:"TWU",
    Distance:291.883,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BKI",
    To:"TWU",
    Distance:291.883,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"ADD",
    Distance:6757.86,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"ADD",
    Distance:6757.86,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"AKL",
    Distance:9555.33,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"AKL",
    Distance:9555.33,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"ALA",
    Distance:4000.35,
    Airport:"Air Astana"
}),
new Routes(
{
    From:"BKK",
    To:"AMM",
    Distance:6840.68,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"AMM",
    Distance:6840.68,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"BKK",
    To:"AMS",
    Distance:9207.57,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"AMS",
    Distance:9207.57,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"BKK",
    To:"AMS",
    Distance:9207.57,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"ARN",
    Distance:8296.22,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BKK",
    To:"ARN",
    Distance:8296.22,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BKK",
    To:"ARN",
    Distance:8296.22,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"AUH",
    Distance:4966.18,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BKK",
    To:"AUH",
    Distance:4966.18,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"AUH",
    Distance:4966.18,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BKK",
    To:"BAH",
    Distance:5386.3,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BKK",
    To:"BAH",
    Distance:5386.3,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"BAH",
    Distance:5386.3,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"BLR",
    Distance:2497.68,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"BNE",
    Distance:7260.31,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"BNE",
    Distance:7260.31,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"BOM",
    Distance:3030.61,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BKK",
    To:"BOM",
    Distance:3030.61,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"BKK",
    To:"BOM",
    Distance:3030.61,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"BOM",
    Distance:3030.61,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BKK",
    To:"BOM",
    Distance:3030.61,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"BRU",
    Distance:9262.31,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"BRU",
    Distance:9262.31,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"BWN",
    Distance:1832.97,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"BWN",
    Distance:1832.97,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"CAI",
    Distance:7279.8,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"BKK",
    To:"CAI",
    Distance:7279.8,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"CAI",
    Distance:7279.8,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"CAN",
    Distance:1706.09,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"BKK",
    To:"CAN",
    Distance:1706.09,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"CAN",
    Distance:1706.09,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"BKK",
    To:"CAN",
    Distance:1706.09,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"BKK",
    To:"CAN",
    Distance:1706.09,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"CAN",
    Distance:1706.09,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"CCU",
    Distance:1636.87,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"CCU",
    Distance:1636.87,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"CDG",
    Distance:9448.27,
    Airport:"Air France"
}),
new Routes(
{
    From:"BKK",
    To:"CDG",
    Distance:9448.27,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BKK",
    To:"CDG",
    Distance:9448.27,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"CEI",
    Distance:703.365,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"BKK",
    To:"CEI",
    Distance:703.365,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"CEI",
    Distance:703.365,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"CEI",
    Distance:703.365,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"CEI",
    Distance:703.365,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"CEI",
    Distance:703.365,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"CEI",
    Distance:703.365,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BKK",
    To:"CEI",
    Distance:703.365,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"CGK",
    Distance:2296.96,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BKK",
    To:"CGK",
    Distance:2296.96,
    Airport:"Mandala Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"CGK",
    Distance:2296.96,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"CGO",
    Distance:2665.11,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"CGP",
    Distance:1341.04,
    Airport:"Rainbow Air Polynesia"
}),
new Routes(
{
    From:"BKK",
    To:"CKG",
    Distance:1883.5,
    Airport:"BusinessAir"
}),
new Routes(
{
    From:"BKK",
    To:"CKG",
    Distance:1883.5,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"CMB",
    Distance:2391.61,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"BKK",
    To:"CMB",
    Distance:2391.61,
    Airport:"L"
}),
new Routes(
{
    From:"BKK",
    To:"CMB",
    Distance:2391.61,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"CMB",
    Distance:2391.61,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"CNX",
    Distance:596.72,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BKK",
    To:"CNX",
    Distance:596.72,
    Airport:"Air France"
}),
new Routes(
{
    From:"BKK",
    To:"CNX",
    Distance:596.72,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"BKK",
    To:"CNX",
    Distance:596.72,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"CNX",
    Distance:596.72,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BKK",
    To:"CNX",
    Distance:596.72,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BKK",
    To:"CNX",
    Distance:596.72,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"CNX",
    Distance:596.72,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"CNX",
    Distance:596.72,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BKK",
    To:"CNX",
    Distance:596.72,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"CPH",
    Distance:8636.97,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BKK",
    To:"CPH",
    Distance:8636.97,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"CRK",
    Distance:2139.38,
    Airport:"South East Asian Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"CSX",
    Distance:2065.55,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"CTS",
    Distance:5073.45,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"CTU",
    Distance:1907.29,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"CTU",
    Distance:1907.29,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"DAC",
    Distance:1568.34,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"DAC",
    Distance:1568.34,
    Airport:"Biman Bangladesh Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"DAC",
    Distance:1568.34,
    Airport:"Druk Air"
}),
new Routes(
{
    From:"BKK",
    To:"DAC",
    Distance:1568.34,
    Airport:"Rainbow Air Polynesia"
}),
new Routes(
{
    From:"BKK",
    To:"DAC",
    Distance:1568.34,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"DAC",
    Distance:1568.34,
    Airport:"United Airways"
}),
new Routes(
{
    From:"BKK",
    To:"DEL",
    Distance:2948.49,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BKK",
    To:"DEL",
    Distance:2948.49,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"DEL",
    Distance:2948.49,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BKK",
    To:"DEL",
    Distance:2948.49,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"DME",
    Distance:7058.76,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"DME",
    Distance:7058.76,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"DME",
    Distance:7058.76,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"DOH",
    Distance:5284.2,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BKK",
    To:"DPS",
    Distance:2958.59,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"DXB",
    Distance:4903.74,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BKK",
    To:"DXB",
    Distance:4903.74,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BKK",
    To:"DXB",
    Distance:4903.74,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"FCO",
    Distance:8876.08,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"FOC",
    Distance:2397.45,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"FOC",
    Distance:2397.45,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"FRA",
    Distance:9001.55,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BKK",
    To:"FRA",
    Distance:9001.55,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"FUK",
    Distance:3724.83,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"FUK",
    Distance:3724.83,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"GAU",
    Distance:1679.63,
    Airport:"Druk Air"
}),
new Routes(
{
    From:"BKK",
    To:"HAN",
    Distance:995.228,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BKK",
    To:"HAN",
    Distance:995.228,
    Airport:"Royal Air Cambodge"
}),
new Routes(
{
    From:"BKK",
    To:"HAN",
    Distance:995.228,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"HAN",
    Distance:995.228,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"HDY",
    Distance:751.332,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"HEL",
    Distance:7907.82,
    Airport:"Finnair"
}),
new Routes(
{
    From:"BKK",
    To:"HKG",
    Distance:1689.33,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"BKK",
    To:"HKG",
    Distance:1689.33,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"HKG",
    Distance:1689.33,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"BKK",
    To:"HKG",
    Distance:1689.33,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BKK",
    To:"HKG",
    Distance:1689.33,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BKK",
    To:"HKG",
    Distance:1689.33,
    Airport:"Hong Kong Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"HKG",
    Distance:1689.33,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"BKK",
    To:"HKG",
    Distance:1689.33,
    Airport:"Orient Thai Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"HKG",
    Distance:1689.33,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"BKK",
    To:"HKG",
    Distance:1689.33,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"HKG",
    Distance:1689.33,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"HKG",
    Distance:1689.33,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"HKT",
    Distance:673.555,
    Airport:"Air France"
}),
new Routes(
{
    From:"BKK",
    To:"HKT",
    Distance:673.555,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"BKK",
    To:"HKT",
    Distance:673.555,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"HKT",
    Distance:673.555,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BKK",
    To:"HKT",
    Distance:673.555,
    Airport:"BusinessAir"
}),
new Routes(
{
    From:"BKK",
    To:"HKT",
    Distance:673.555,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BKK",
    To:"HKT",
    Distance:673.555,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"HKT",
    Distance:673.555,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"HKT",
    Distance:673.555,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BKK",
    To:"HKT",
    Distance:673.555,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"HND",
    Distance:4589.34,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"BKK",
    To:"HND",
    Distance:4589.34,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"HND",
    Distance:4589.34,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"HND",
    Distance:4589.34,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"HYD",
    Distance:2421.48,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"ICN",
    Distance:3668.62,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BKK",
    To:"ICN",
    Distance:3668.62,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"ICN",
    Distance:3668.62,
    Airport:"BusinessAir"
}),
new Routes(
{
    From:"BKK",
    To:"ICN",
    Distance:3668.62,
    Airport:"Eastar Jet"
}),
new Routes(
{
    From:"BKK",
    To:"ICN",
    Distance:3668.62,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"ICN",
    Distance:3668.62,
    Airport:"Jeju Air"
}),
new Routes(
{
    From:"BKK",
    To:"ICN",
    Distance:3668.62,
    Airport:"Jin Air"
}),
new Routes(
{
    From:"BKK",
    To:"ICN",
    Distance:3668.62,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"BKK",
    To:"ICN",
    Distance:3668.62,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"ICN",
    Distance:3668.62,
    Airport:"Tway Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"IKA",
    Distance:5496.8,
    Airport:"Mahan Air"
}),
new Routes(
{
    From:"BKK",
    To:"IKT",
    Distance:4302.92,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"ISB",
    Distance:3562.59,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"IST",
    Distance:7506.25,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"IST",
    Distance:7506.25,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"IXB",
    Distance:1938.71,
    Airport:"Druk Air"
}),
new Routes(
{
    From:"BKK",
    To:"JNB",
    Distance:8996.21,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"BKK",
    To:"JNB",
    Distance:8996.21,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"KBP",
    Distance:7415.87,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"KBV",
    Distance:650.022,
    Airport:"Air France"
}),
new Routes(
{
    From:"BKK",
    To:"KBV",
    Distance:650.022,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"KBV",
    Distance:650.022,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"BKK",
    To:"KBV",
    Distance:650.022,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BKK",
    To:"KBV",
    Distance:650.022,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BKK",
    To:"KBV",
    Distance:650.022,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BKK",
    To:"KBV",
    Distance:650.022,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BKK",
    To:"KBV",
    Distance:650.022,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"KHH",
    Distance:2292.19,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"KHI",
    Distance:3726.67,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"BKK",
    To:"KHI",
    Distance:3726.67,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"KIX",
    Distance:4160.97,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"BKK",
    To:"KIX",
    Distance:4160.97,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"KIX",
    Distance:4160.97,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"KIX",
    Distance:4160.97,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"KJA",
    Distance:4778.49,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"KKC",
    Distance:379.117,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"KMG",
    Distance:1275,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"KMG",
    Distance:1275,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"KTM",
    Distance:2229.55,
    Airport:"Nepal Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"KTM",
    Distance:2229.55,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"KUL",
    Distance:1220.57,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"BKK",
    To:"KUL",
    Distance:1220.57,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"KUL",
    Distance:1220.57,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"KUL",
    Distance:1220.57,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"BKK",
    To:"KUL",
    Distance:1220.57,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"KUL",
    Distance:1220.57,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"KUL",
    Distance:1220.57,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"BKK",
    To:"KUL",
    Distance:1220.57,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"KUL",
    Distance:1220.57,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"KWI",
    Distance:5678.49,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"BKK",
    To:"LHE",
    Distance:3337.48,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"LHR",
    Distance:9577.74,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BKK",
    To:"LHR",
    Distance:9577.74,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"BKK",
    To:"LHR",
    Distance:9577.74,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"LHR",
    Distance:9577.74,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"LPQ",
    Distance:707.445,
    Airport:"Air France"
}),
new Routes(
{
    From:"BKK",
    To:"LPQ",
    Distance:707.445,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"LPQ",
    Distance:707.445,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BKK",
    To:"LPQ",
    Distance:707.445,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"LPT",
    Distance:527.371,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"MAA",
    Distance:2225.89,
    Airport:"Air Austral"
}),
new Routes(
{
    From:"BKK",
    To:"MAA",
    Distance:2225.89,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"MAD",
    Distance:10193,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"MCT",
    Distance:4589.76,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"BKK",
    To:"MDL",
    Distance:1024.79,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"MDL",
    Distance:1024.79,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BKK",
    To:"MDL",
    Distance:1024.79,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BKK",
    To:"MEL",
    Distance:7331.71,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"BKK",
    To:"MEL",
    Distance:7331.71,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"MEL",
    Distance:7331.71,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"MFM",
    Distance:1651.77,
    Airport:"Air Macau"
}),
new Routes(
{
    From:"BKK",
    To:"MFM",
    Distance:1651.77,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"MLE",
    Distance:3166.38,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"MNL",
    Distance:2187.54,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"BKK",
    To:"MNL",
    Distance:2187.54,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"BKK",
    To:"MNL",
    Distance:2187.54,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"MNL",
    Distance:2187.54,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"MUC",
    Distance:8799.73,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BKK",
    To:"MUC",
    Distance:8799.73,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"MXP",
    Distance:9079.61,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"NBO",
    Distance:7224.15,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"NBO",
    Distance:7224.15,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"BKK",
    To:"NBO",
    Distance:7224.15,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"NGB",
    Distance:2783.51,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"NGO",
    Distance:4310.44,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"BKK",
    To:"NGO",
    Distance:4310.44,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"NNG",
    Distance:1264.6,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"NNG",
    Distance:1264.6,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"NRT",
    Distance:4649.01,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BKK",
    To:"NRT",
    Distance:4649.01,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"BKK",
    To:"NRT",
    Distance:4649.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"NRT",
    Distance:4649.01,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"NRT",
    Distance:4649.01,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BKK",
    To:"NRT",
    Distance:4649.01,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"NRT",
    Distance:4649.01,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"NRT",
    Distance:4649.01,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"NYT",
    Distance:802.286,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"OSL",
    Distance:8671.29,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BKK",
    To:"OSL",
    Distance:8671.29,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BKK",
    To:"OSL",
    Distance:8671.29,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"OVB",
    Distance:4855.76,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"PEK",
    Distance:3317.02,
    Airport:"Air China"
}),
new Routes(
{
    From:"BKK",
    To:"PEK",
    Distance:3317.02,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"PEK",
    Distance:3317.02,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"PEN",
    Distance:933.679,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"PEN",
    Distance:933.679,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"PER",
    Distance:5325.8,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"PER",
    Distance:5325.8,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"PNH",
    Distance:503.919,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"PNH",
    Distance:503.919,
    Airport:"Cambodia Angkor Air (K6)"
}),
new Routes(
{
    From:"BKK",
    To:"PNH",
    Distance:503.919,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"PNH",
    Distance:503.919,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"PUS",
    Distance:3697.97,
    Airport:"Asiana Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"PUS",
    Distance:3697.97,
    Airport:"Jeju Air"
}),
new Routes(
{
    From:"BKK",
    To:"PUS",
    Distance:3697.97,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"BKK",
    To:"PUS",
    Distance:3697.97,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"PVG",
    Distance:2897.09,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"PVG",
    Distance:2897.09,
    Airport:"China SSS"
}),
new Routes(
{
    From:"BKK",
    To:"PVG",
    Distance:2897.09,
    Airport:"Juneyao Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"PVG",
    Distance:2897.09,
    Airport:"Shanghai Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"PVG",
    Distance:2897.09,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"REP",
    Distance:332.751,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"REP",
    Distance:332.751,
    Airport:"Cambodia Angkor Air (K6)"
}),
new Routes(
{
    From:"BKK",
    To:"RGN",
    Distance:611.162,
    Airport:"Asia Wings"
}),
new Routes(
{
    From:"BKK",
    To:"RGN",
    Distance:611.162,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"RGN",
    Distance:611.162,
    Airport:"Maxair"
}),
new Routes(
{
    From:"BKK",
    To:"RGN",
    Distance:611.162,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"SGN",
    Distance:716.134,
    Airport:"Royal Air Cambodge"
}),
new Routes(
{
    From:"BKK",
    To:"SGN",
    Distance:716.134,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"SGN",
    Distance:716.134,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"SGN",
    Distance:716.134,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"SIN",
    Distance:1416.91,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BKK",
    To:"SIN",
    Distance:1416.91,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"BKK",
    To:"SIN",
    Distance:1416.91,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"BKK",
    To:"SIN",
    Distance:1416.91,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"SIN",
    Distance:1416.91,
    Airport:"Jetstar Asia Airways"
}),
new Routes(
{
    From:"BKK",
    To:"SIN",
    Distance:1416.91,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BKK",
    To:"SIN",
    Distance:1416.91,
    Airport:"Scoot"
}),
new Routes(
{
    From:"BKK",
    To:"SIN",
    Distance:1416.91,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"SIN",
    Distance:1416.91,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"SIN",
    Distance:1416.91,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"BKK",
    To:"SVO",
    Distance:7104.63,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"SVX",
    Distance:5857.58,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"SWA",
    Distance:1994.84,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"SYD",
    Distance:7514.64,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BKK",
    To:"SYD",
    Distance:7514.64,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BKK",
    To:"SYD",
    Distance:7514.64,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"SYD",
    Distance:7514.64,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"SZX",
    Distance:1700.38,
    Airport:"Air China"
}),
new Routes(
{
    From:"BKK",
    To:"SZX",
    Distance:1700.38,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"TAO",
    Distance:3182.69,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"TAS",
    Distance:4317.97,
    Airport:"Uzbekistan Airways"
}),
new Routes(
{
    From:"BKK",
    To:"TDX",
    Distance:231.215,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"THS",
    Distance:407.844,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"TLV",
    Distance:6945.66,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"TLV",
    Distance:6945.66,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"TNA",
    Distance:3052.41,
    Airport:"Shandong Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"TNR",
    Distance:6862.12,
    Airport:"Air Madagascar"
}),
new Routes(
{
    From:"BKK",
    To:"TNR",
    Distance:6862.12,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"TPE",
    Distance:2489.36,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"TPE",
    Distance:2489.36,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"BKK",
    To:"TPE",
    Distance:2489.36,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"TPE",
    Distance:2489.36,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"TPE",
    Distance:2489.36,
    Airport:"TransAsia Airways"
}),
new Routes(
{
    From:"BKK",
    To:"TPE",
    Distance:2489.36,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"UBP",
    Distance:476.995,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"ULN",
    Distance:3839.24,
    Airport:"Homer Air"
}),
new Routes(
{
    From:"BKK",
    To:"URT",
    Distance:535.406,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"USM",
    Distance:465.617,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"USM",
    Distance:465.617,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"UTH",
    Distance:466.417,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"UTH",
    Distance:466.417,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"VIE",
    Distance:8451.06,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"VIE",
    Distance:8451.06,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"BKK",
    To:"VIE",
    Distance:8451.06,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"VTE",
    Distance:516.817,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BKK",
    To:"VTE",
    Distance:516.817,
    Airport:"FlyNordic"
}),
new Routes(
{
    From:"BKK",
    To:"VTE",
    Distance:516.817,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"VTE",
    Distance:516.817,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"WUH",
    Distance:2348.07,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"XMN",
    Distance:2185.69,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"XMN",
    Distance:2185.69,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"XMN",
    Distance:2185.69,
    Airport:"Xiamen Airlines"
}),
new Routes(
{
    From:"BKK",
    To:"ZRH",
    Distance:9054.16,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BKK",
    To:"ZRH",
    Distance:9054.16,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BKK",
    To:"ZVK",
    Distance:536.36,
    Airport:"Lao Airlines"
}),
new Routes(
{
    From:"BKM",
    To:"LWY",
    Distance:100.061,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BKO",
    To:"ABJ",
    Distance:921.402,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"BKO",
    To:"ABJ",
    Distance:921.402,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"BKO",
    To:"ABJ",
    Distance:921.402,
    Airport:"Mauritania Airlines International"
}),
new Routes(
{
    From:"BKO",
    To:"ADD",
    Distance:5116.06,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BKO",
    To:"ADD",
    Distance:5116.06,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"BKO",
    To:"ALG",
    Distance:2908.25,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BKO",
    To:"CDG",
    Distance:4169.83,
    Airport:"Air France"
}),
new Routes(
{
    From:"BKO",
    To:"CKY",
    Distance:699.847,
    Airport:"Dennis Sky"
}),
new Routes(
{
    From:"BKO",
    To:"CKY",
    Distance:699.847,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BKO",
    To:"CMN",
    Distance:2316.91,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BKO",
    To:"COO",
    Distance:1324.82,
    Airport:"Dennis Sky"
}),
new Routes(
{
    From:"BKO",
    To:"COO",
    Distance:1324.82,
    Airport:"Mauritania Airlines International"
}),
new Routes(
{
    From:"BKO",
    To:"COO",
    Distance:1324.82,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"BKO",
    To:"DKR",
    Distance:1059.57,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"BKO",
    To:"DKR",
    Distance:1059.57,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BKO",
    To:"DKR",
    Distance:1059.57,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"BKO",
    To:"DKR",
    Distance:1059.57,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"BKO",
    To:"DKR",
    Distance:1059.57,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"BKO",
    To:"LFW",
    Distance:1232.91,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BKO",
    To:"LIS",
    Distance:2920.97,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"BKO",
    To:"LOS",
    Distance:1401.59,
    Airport:"Dennis Sky"
}),
new Routes(
{
    From:"BKO",
    To:"NBO",
    Distance:5186.38,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"BKO",
    To:"NKC",
    Distance:1057.25,
    Airport:"Mauritania Airlines International"
}),
new Routes(
{
    From:"BKO",
    To:"ORY",
    Distance:4135.19,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"BKO",
    To:"OUA",
    Distance:699.276,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"BKO",
    To:"OUA",
    Distance:699.276,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BKO",
    To:"OUA",
    Distance:699.276,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"BKO",
    To:"TUN",
    Distance:3255.05,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"BKQ",
    To:"LRE",
    Distance:160.729,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BKS",
    To:"BTH",
    Distance:588.505,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BKS",
    To:"CGK",
    Distance:540.27,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"BKS",
    To:"CGK",
    Distance:540.27,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BKS",
    To:"CGK",
    Distance:540.27,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BKS",
    To:"CGK",
    Distance:540.27,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"BKW",
    To:"IAD",
    Distance:344.706,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BKW",
    To:"SHD",
    Distance:202.201,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BKY",
    To:"KND",
    Distance:328.484,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"BKZ",
    To:"MWZ",
    Distance:178.999,
    Airport:"Precision Air"
}),
new Routes(
{
    From:"BLA",
    To:"CCS",
    Distance:257.707,
    Airport:"Aero Lanka"
}),
new Routes(
{
    From:"BLA",
    To:"CCS",
    Distance:257.707,
    Airport:"Aserca Airlines"
}),
new Routes(
{
    From:"BLA",
    To:"CCS",
    Distance:257.707,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"BLA",
    To:"PZO",
    Distance:292.766,
    Airport:"Aserca Airlines"
}),
new Routes(
{
    From:"BLA",
    To:"VLN",
    Distance:354.604,
    Airport:"Aserca Airlines"
}),
new Routes(
{
    From:"BLD",
    To:"GCW",
    Distance:93.0274,
    Airport:"Papillon Grand Canyon Helicopters"
}),
new Routes(
{
    From:"BLI",
    To:"AZA",
    Distance:1944.16,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BLI",
    To:"HNL",
    Distance:4369.8,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BLI",
    To:"LAS",
    Distance:1536.23,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BLI",
    To:"LAS",
    Distance:1536.23,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BLI",
    To:"LAX",
    Distance:1686.17,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BLI",
    To:"OAK",
    Distance:1231.35,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BLI",
    To:"PDX",
    Distance:356.294,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BLI",
    To:"PSP",
    Distance:1736.98,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BLI",
    To:"SAN",
    Distance:1840.43,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BLI",
    To:"SEA",
    Distance:150.369,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BLJ",
    To:"ALG",
    Distance:296.447,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BLJ",
    To:"LYS",
    Distance:1113.79,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BLJ",
    To:"MRS",
    Distance:859.473,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BLJ",
    To:"ORY",
    Distance:1478.19,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BLK",
    To:"ACE",
    Distance:2891,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BLK",
    To:"AGP",
    Distance:1904.45,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BLK",
    To:"ALC",
    Distance:1732.61,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BLK",
    To:"DLM",
    Distance:3088.27,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BLK",
    To:"DUB",
    Distance:217.404,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BLK",
    To:"FAO",
    Distance:1901.63,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BLK",
    To:"IOM",
    Distance:110.043,
    Airport:"Star1 Airlines"
}),
new Routes(
{
    From:"BLK",
    To:"PMI",
    Distance:1639.52,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BLK",
    To:"TFS",
    Distance:3066.75,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BLL",
    To:"AAL",
    Distance:156.383,
    Airport:"DAT Danish Air Transport"
}),
new Routes(
{
    From:"BLL",
    To:"AAL",
    Distance:156.383,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BLL",
    To:"AGP",
    Distance:2356.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"AHO",
    Distance:1681.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"ALC",
    Distance:2071.47,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BLL",
    To:"ALC",
    Distance:2071.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"AMS",
    Distance:477.042,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BLL",
    To:"AMS",
    Distance:477.042,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BLL",
    To:"ARN",
    Distance:677.721,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BLL",
    To:"AYT",
    Distance:2651.16,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"BLL",
    To:"BGO",
    Distance:556.535,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BLL",
    To:"BGY",
    Distance:1120,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"BRU",
    Distance:620.659,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BLL",
    To:"BUD",
    Distance:1155,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"CCF",
    Distance:1476.11,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"CDG",
    Distance:871.147,
    Airport:"Air France"
}),
new Routes(
{
    From:"BLL",
    To:"CDG",
    Distance:871.147,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BLL",
    To:"CFU",
    Distance:1961.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"CHQ",
    Distance:2519.21,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"CIA",
    Distance:1570.07,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"CPH",
    Distance:220.092,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BLL",
    To:"DUS",
    Distance:519.349,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BLL",
    To:"EBJ",
    Distance:44.4849,
    Airport:"DAT Danish Air Transport"
}),
new Routes(
{
    From:"BLL",
    To:"FAE",
    Distance:1171.27,
    Airport:"Atlantic Airways"
}),
new Routes(
{
    From:"BLL",
    To:"FAO",
    Distance:2446.81,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"FRA",
    Distance:636.661,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BLL",
    To:"FRA",
    Distance:636.661,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BLL",
    To:"GRO",
    Distance:1606.76,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"IST",
    Distance:2176.64,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BLL",
    To:"IST",
    Distance:2176.64,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BLL",
    To:"KEF",
    Distance:1967.38,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"BLL",
    To:"LCY",
    Distance:761.639,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BLL",
    To:"MAN",
    Distance:782.201,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BLL",
    To:"MLA",
    Distance:2247.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"MUC",
    Distance:840.71,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BLL",
    To:"OSL",
    Distance:508.32,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BLL",
    To:"OSL",
    Distance:508.32,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BLL",
    To:"OSL",
    Distance:508.32,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BLL",
    To:"PMI",
    Distance:1861.15,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"PSA",
    Distance:1343.52,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"RIX",
    Distance:921.081,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"BLL",
    To:"STN",
    Distance:724.69,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"SVG",
    Distance:407.514,
    Airport:"DAT Danish Air Transport"
}),
new Routes(
{
    From:"BLL",
    To:"TFS",
    Distance:3698.39,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"TSF",
    Distance:1142.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"ZAD",
    Distance:1366,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLL",
    To:"ZRH",
    Distance:921.136,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BLQ",
    To:"ACE",
    Distance:2795.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"AGP",
    Distance:1589.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"AHO",
    Distance:498.532,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"ALC",
    Distance:1206.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"AMS",
    Distance:988.46,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BLQ",
    To:"AMS",
    Distance:988.46,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"BLQ",
    To:"AMS",
    Distance:988.46,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BLQ",
    To:"ARN",
    Distance:1738.75,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BLQ",
    To:"BCN",
    Distance:831.321,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BLQ",
    To:"BCN",
    Distance:831.321,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BLQ",
    To:"BCN",
    Distance:831.321,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"BDS",
    Distance:694.564,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"BOD",
    Distance:948.773,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"BRI",
    Distance:584.323,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"BRS",
    Distance:1287.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"BRU",
    Distance:871.071,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BLQ",
    To:"BVA",
    Distance:884.08,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"CAG",
    Distance:615.903,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"BLQ",
    To:"CDG",
    Distance:830.237,
    Airport:"Air France"
}),
new Routes(
{
    From:"BLQ",
    To:"CDG",
    Distance:830.237,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BLQ",
    To:"CDG",
    Distance:830.237,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BLQ",
    To:"CGN",
    Distance:768.949,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BLQ",
    To:"CLJ",
    Distance:994.241,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BLQ",
    To:"CMN",
    Distance:2042.69,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"BLQ",
    To:"CMN",
    Distance:2042.69,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BLQ",
    To:"CPH",
    Distance:1236.11,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BLQ",
    To:"CRL",
    Distance:834.438,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"CTA",
    Distance:847.269,
    Airport:"Air One"
}),
new Routes(
{
    From:"BLQ",
    To:"CTA",
    Distance:847.269,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BLQ",
    To:"CTA",
    Distance:847.269,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"BLQ",
    To:"CTA",
    Distance:847.269,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"DUB",
    Distance:1610.83,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BLQ",
    To:"DUB",
    Distance:1610.83,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"EDI",
    Distance:1635.63,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"EIN",
    Distance:885.245,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"BLQ",
    To:"FCO",
    Distance:313.527,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BLQ",
    To:"FRA",
    Distance:644.621,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BLQ",
    To:"IAS",
    Distance:1295.86,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BLQ",
    To:"IAS",
    Distance:1295.86,
    Airport:"Tarom"
}),
new Routes(
{
    From:"BLQ",
    To:"IBZ",
    Distance:1035.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"IST",
    Distance:1481.32,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BLQ",
    To:"KIV",
    Distance:1391.79,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"BLQ",
    To:"KIV",
    Distance:1391.79,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"BLQ",
    To:"KRK",
    Distance:887.866,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"LGW",
    Distance:1126.69,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BLQ",
    To:"LHR",
    Distance:1163.66,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BLQ",
    To:"LHR",
    Distance:1163.66,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BLQ",
    To:"LIS",
    Distance:1807.43,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BLQ",
    To:"LIS",
    Distance:1807.43,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"BLQ",
    To:"LIS",
    Distance:1807.43,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"BLQ",
    To:"LYS",
    Distance:503.763,
    Airport:"Air France"
}),
new Routes(
{
    From:"BLQ",
    To:"LYS",
    Distance:503.763,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BLQ",
    To:"MAD",
    Distance:1295.59,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BLQ",
    To:"MAD",
    Distance:1295.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"MAN",
    Distance:1389.42,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"MLA",
    Distance:1002.01,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"MUC",
    Distance:426.284,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BLQ",
    To:"NRN",
    Distance:873.375,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"OLB",
    Distance:429.466,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"BLQ",
    To:"OPO",
    Distance:1662.91,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"ORY",
    Distance:824.939,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BLQ",
    To:"ORY",
    Distance:824.939,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BLQ",
    To:"OTP",
    Distance:1172.17,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BLQ",
    To:"PMI",
    Distance:897.278,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"PMO",
    Distance:722.913,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"RYG",
    Distance:1650.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"SAW",
    Distance:1523.19,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"BLQ",
    To:"SOF",
    Distance:995.733,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BLQ",
    To:"STN",
    Distance:1154.65,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"SUF",
    Distance:748.624,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"SVO",
    Distance:2229.57,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"BLQ",
    To:"SVO",
    Distance:2229.57,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BLQ",
    To:"SVQ",
    Distance:1640.55,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"TFS",
    Distance:3072.62,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"TIA",
    Distance:768.227,
    Airport:"Air One"
}),
new Routes(
{
    From:"BLQ",
    To:"TIA",
    Distance:768.227,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BLQ",
    To:"TIA",
    Distance:768.227,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"BLQ",
    To:"TIA",
    Distance:768.227,
    Airport:"Excel Airways"
}),
new Routes(
{
    From:"BLQ",
    To:"TPS",
    Distance:743.333,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"TSR",
    Distance:799.83,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BLQ",
    To:"TUN",
    Distance:859.118,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"BLQ",
    To:"TXL",
    Distance:904.212,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BLQ",
    To:"VIE",
    Distance:567.607,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"BLQ",
    To:"VLC",
    Distance:1121.11,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"WMI",
    Distance:1116.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"WRO",
    Distance:840.796,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BLQ",
    To:"ZAG",
    Distance:398.168,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"BLQ",
    To:"ZAG",
    Distance:398.168,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"BLR",
    To:"AMD",
    Distance:1245.16,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"AUH",
    Distance:2733.72,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BLR",
    To:"AUH",
    Distance:2733.72,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BLR",
    To:"AUH",
    Distance:2733.72,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BLR",
    To:"BBI",
    Distance:1187.71,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"BKK",
    Distance:2497.68,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BLR",
    To:"BOM",
    Distance:853.708,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BLR",
    To:"BOM",
    Distance:853.708,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BLR",
    To:"BOM",
    Distance:853.708,
    Airport:"Go Air"
}),
new Routes(
{
    From:"BLR",
    To:"BOM",
    Distance:853.708,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"BOM",
    Distance:853.708,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BLR",
    To:"BOM",
    Distance:853.708,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BLR",
    To:"CCJ",
    Distance:274.486,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BLR",
    To:"CCU",
    Distance:1569.15,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BLR",
    To:"CCU",
    Distance:1569.15,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BLR",
    To:"CCU",
    Distance:1569.15,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"CCU",
    Distance:1569.15,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BLR",
    To:"CCU",
    Distance:1569.15,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BLR",
    To:"CDG",
    Distance:7842.47,
    Airport:"Air France"
}),
new Routes(
{
    From:"BLR",
    To:"CJB",
    Distance:224.044,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BLR",
    To:"CJB",
    Distance:224.044,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BLR",
    To:"CMB",
    Distance:685.811,
    Airport:"L"
}),
new Routes(
{
    From:"BLR",
    To:"CMB",
    Distance:685.811,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"COK",
    Distance:340.434,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BLR",
    To:"COK",
    Distance:340.434,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BLR",
    To:"COK",
    Distance:340.434,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"COK",
    Distance:340.434,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BLR",
    To:"COK",
    Distance:340.434,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BLR",
    To:"DEL",
    Distance:1737.46,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BLR",
    To:"DEL",
    Distance:1737.46,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BLR",
    To:"DEL",
    Distance:1737.46,
    Airport:"Go Air"
}),
new Routes(
{
    From:"BLR",
    To:"DEL",
    Distance:1737.46,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"DEL",
    Distance:1737.46,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BLR",
    To:"DEL",
    Distance:1737.46,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BLR",
    To:"DMM",
    Distance:3270.7,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"DOH",
    Distance:3056.53,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BLR",
    To:"DXB",
    Distance:2706.87,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BLR",
    To:"FRA",
    Distance:7421.64,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BLR",
    To:"FRA",
    Distance:7421.64,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BLR",
    To:"GAU",
    Distance:2062.37,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"GOI",
    Distance:494.105,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BLR",
    To:"GOI",
    Distance:494.105,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BLR",
    To:"GOI",
    Distance:494.105,
    Airport:"Go Air"
}),
new Routes(
{
    From:"BLR",
    To:"GOI",
    Distance:494.105,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"GOI",
    Distance:494.105,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BLR",
    To:"GOI",
    Distance:494.105,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BLR",
    To:"HBX",
    Distance:386.625,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BLR",
    To:"HKG",
    Distance:3968.29,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"BLR",
    To:"HKG",
    Distance:3968.29,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"BLR",
    To:"HYD",
    Distance:508.015,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BLR",
    To:"HYD",
    Distance:508.015,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BLR",
    To:"HYD",
    Distance:508.015,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"HYD",
    Distance:508.015,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BLR",
    To:"HYD",
    Distance:508.015,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BLR",
    To:"IDR",
    Distance:1104.35,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BLR",
    To:"IDR",
    Distance:1104.35,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BLR",
    To:"IXE",
    Distance:301.052,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BLR",
    To:"IXE",
    Distance:301.052,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BLR",
    To:"IXE",
    Distance:301.052,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BLR",
    To:"IXE",
    Distance:301.052,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BLR",
    To:"IXG",
    Distance:460.996,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BLR",
    To:"JAI",
    Distance:1554.82,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"JED",
    Distance:4189.96,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"KUL",
    Distance:2877.37,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BLR",
    To:"KUL",
    Distance:2877.37,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BLR",
    To:"KUL",
    Distance:2877.37,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"LHR",
    Distance:8065.12,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"LHR",
    Distance:8065.12,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BLR",
    To:"LKO",
    Distance:1571.94,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"MAA",
    Distance:272.271,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BLR",
    To:"MAA",
    Distance:272.271,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"BLR",
    To:"MAA",
    Distance:272.271,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BLR",
    To:"MAA",
    Distance:272.271,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"MAA",
    Distance:272.271,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BLR",
    To:"MAA",
    Distance:272.271,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BLR",
    To:"MCT",
    Distance:2360,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"BLR",
    To:"MYQ",
    Distance:131.611,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BLR",
    To:"NAG",
    Distance:917.142,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"PNQ",
    Distance:743.606,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BLR",
    To:"PNQ",
    Distance:743.606,
    Airport:"Go Air"
}),
new Routes(
{
    From:"BLR",
    To:"PNQ",
    Distance:743.606,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"PNQ",
    Distance:743.606,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BLR",
    To:"PNQ",
    Distance:743.606,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BLR",
    To:"RUH",
    Distance:3508.48,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"SHJ",
    Distance:2696.86,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"BLR",
    To:"SIN",
    Distance:3172.95,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"BLR",
    To:"SIN",
    Distance:3172.95,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"SIN",
    Distance:3172.95,
    Airport:"Tiger Airways"
}),
new Routes(
{
    From:"BLR",
    To:"TRV",
    Distance:503.479,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BLR",
    To:"TRV",
    Distance:503.479,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BLR",
    To:"TRV",
    Distance:503.479,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"TRV",
    Distance:503.479,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BLR",
    To:"VGA",
    Distance:521.201,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BLR",
    To:"VTZ",
    Distance:797.626,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BLR",
    To:"VTZ",
    Distance:797.626,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BLR",
    To:"VTZ",
    Distance:797.626,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BLR",
    To:"VTZ",
    Distance:797.626,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BLV",
    To:"SFB",
    Distance:1344.93,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BLZ",
    To:"ADD",
    Distance:2773.91,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BLZ",
    To:"JNB",
    Distance:1356.17,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BLZ",
    To:"JNB",
    Distance:1356.17,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"BLZ",
    To:"LLW",
    Distance:246.189,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BLZ",
    To:"NBO",
    Distance:1611.05,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"BMA",
    To:"AAR",
    Distance:550.235,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BMA",
    To:"AGH",
    Distance:454.326,
    Airport:"Golden Air"
}),
new Routes(
{
    From:"BMA",
    To:"AGH",
    Distance:454.326,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"BMA",
    To:"BRU",
    Distance:1266.35,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BMA",
    To:"BRU",
    Distance:1266.35,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"BMA",
    To:"GOT",
    Distance:378.678,
    Airport:"Finnair"
}),
new Routes(
{
    From:"BMA",
    To:"GOT",
    Distance:378.678,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"BMA",
    To:"HAD",
    Distance:422.453,
    Airport:"Golden Air"
}),
new Routes(
{
    From:"BMA",
    To:"HAD",
    Distance:422.453,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"BMA",
    To:"HEL",
    Distance:406.449,
    Airport:"Finnair"
}),
new Routes(
{
    From:"BMA",
    To:"HEL",
    Distance:406.449,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"BMA",
    To:"KLR",
    Distance:312.315,
    Airport:"Golden Air"
}),
new Routes(
{
    From:"BMA",
    To:"KLR",
    Distance:312.315,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"BMA",
    To:"MMX",
    Distance:505.316,
    Airport:"Finnair"
}),
new Routes(
{
    From:"BMA",
    To:"MMX",
    Distance:505.316,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"BMA",
    To:"OSD",
    Distance:464.757,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"BMA",
    To:"RNB",
    Distance:378.106,
    Airport:"Golden Air"
}),
new Routes(
{
    From:"BMA",
    To:"RNB",
    Distance:378.106,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"BMA",
    To:"SDL",
    Distance:353.925,
    Airport:"Golden Air"
}),
new Routes(
{
    From:"BMA",
    To:"SDL",
    Distance:353.925,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"BMA",
    To:"THN",
    Distance:341.911,
    Airport:"Golden Air"
}),
new Routes(
{
    From:"BMA",
    To:"UME",
    Distance:508.659,
    Airport:"Finnair"
}),
new Routes(
{
    From:"BMA",
    To:"UME",
    Distance:508.659,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"BMA",
    To:"VBY",
    Distance:189.556,
    Airport:"Golden Air"
}),
new Routes(
{
    From:"BMA",
    To:"VBY",
    Distance:189.556,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"BMA",
    To:"VXO",
    Distance:329.006,
    Airport:"Golden Air"
}),
new Routes(
{
    From:"BMA",
    To:"VXO",
    Distance:329.006,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"BME",
    To:"BNE",
    Distance:3337.29,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BME",
    To:"DRW",
    Distance:1106.97,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"BME",
    To:"DRW",
    Distance:1106.97,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BME",
    To:"KNX",
    Distance:728.255,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"BME",
    To:"KNX",
    Distance:728.255,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BME",
    To:"KTA",
    Distance:655.173,
    Airport:"Airnorth"
}),
new Routes(
{
    From:"BME",
    To:"KTA",
    Distance:655.173,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BME",
    To:"MEL",
    Distance:3121.46,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BME",
    To:"PER",
    Distance:1692.41,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BME",
    To:"PER",
    Distance:1692.41,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BME",
    To:"PHE",
    Distance:472.373,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BME",
    To:"SYD",
    Distance:3390.86,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BMI",
    To:"ATL",
    Distance:858.25,
    Airport:"Air France"
}),
new Routes(
{
    From:"BMI",
    To:"ATL",
    Distance:858.25,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BMI",
    To:"ATL",
    Distance:858.25,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BMI",
    To:"DEN",
    Distance:1338.84,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"BMI",
    To:"DFW",
    Distance:1110.23,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BMI",
    To:"DFW",
    Distance:1110.23,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BMI",
    To:"DTW",
    Distance:502.724,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BMI",
    To:"MCO",
    Distance:1508.83,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"BMI",
    To:"MSP",
    Distance:602.951,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BMI",
    To:"ORD",
    Distance:187.145,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BMI",
    To:"ORD",
    Distance:187.145,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BMI",
    To:"SFB",
    Distance:1477.02,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BMU",
    To:"DPS",
    Distance:387.669,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BMU",
    To:"DPS",
    Distance:387.669,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BMU",
    To:"LOP",
    Distance:266.106,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BMV",
    To:"DAD",
    Distance:375.447,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"BMV",
    To:"HAN",
    Distance:982.274,
    Airport:"Royal Air Cambodge"
}),
new Routes(
{
    From:"BMV",
    To:"HAN",
    Distance:982.274,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"BMV",
    To:"SGN",
    Distance:260.477,
    Airport:"Jetstar Pacific"
}),
new Routes(
{
    From:"BMV",
    To:"SGN",
    Distance:260.477,
    Airport:"Royal Air Cambodge"
}),
new Routes(
{
    From:"BMV",
    To:"SGN",
    Distance:260.477,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"BMV",
    To:"VII",
    Distance:723.963,
    Airport:"Jetstar Pacific"
}),
new Routes(
{
    From:"BMW",
    To:"AZR",
    Distance:727.306,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BMY",
    To:"GEA",
    Distance:405.973,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"BMY",
    To:"KOC",
    Distance:110.832,
    Airport:"Iberworld"
}),
new Routes(
{
    From:"BNA",
    To:"AHN",
    Distance:389.399,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"ATL",
    Distance:344.43,
    Airport:"Air France"
}),
new Routes(
{
    From:"BNA",
    To:"ATL",
    Distance:344.43,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"ATL",
    Distance:344.43,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BNA",
    To:"ATL",
    Distance:344.43,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BNA",
    To:"ATL",
    Distance:344.43,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"ATL",
    Distance:344.43,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"BNA",
    To:"AUS",
    Distance:1215.97,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"BOS",
    Distance:1514.3,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"BWI",
    Distance:943.642,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BNA",
    To:"BWI",
    Distance:943.642,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"CHS",
    Distance:705.818,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BNA",
    To:"CHS",
    Distance:705.818,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"CLE",
    Distance:721.435,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"CLE",
    Distance:721.435,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"CLT",
    Distance:527.786,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"CLT",
    Distance:527.786,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BNA",
    To:"CMH",
    Distance:543.383,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"CVG",
    Distance:370.267,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BNA",
    To:"DCA",
    Distance:902.482,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"DCA",
    Distance:902.482,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BNA",
    To:"DEN",
    Distance:1627.6,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"DEN",
    Distance:1627.6,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"DEN",
    Distance:1627.6,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"DFW",
    Distance:1014.15,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"DFW",
    Distance:1014.15,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BNA",
    To:"DTW",
    Distance:734.968,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BNA",
    To:"DTW",
    Distance:734.968,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"ECP",
    Distance:648.203,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"EWR",
    Distance:1201.01,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"EWR",
    Distance:1201.01,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"FLL",
    Distance:1277.94,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"GSP",
    Distance:426.083,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"HOU",
    Distance:1078.01,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BNA",
    To:"HOU",
    Distance:1078.01,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"IAD",
    Distance:871.042,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"IAH",
    Distance:1056.52,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"JAX",
    Distance:778.835,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"JFK",
    Distance:1229.76,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"JFK",
    Distance:1229.76,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BNA",
    To:"JFK",
    Distance:1229.76,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BNA",
    To:"LAS",
    Distance:2548.89,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"LAX",
    Distance:2886.33,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"LAX",
    Distance:2886.33,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"LAX",
    Distance:2886.33,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BNA",
    To:"LAX",
    Distance:2886.33,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"LAX",
    Distance:2886.33,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BNA",
    To:"LGA",
    Distance:1227.68,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"LGA",
    Distance:1227.68,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BNA",
    To:"LGA",
    Distance:1227.68,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"LGA",
    Distance:1227.68,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BNA",
    To:"MCI",
    Distance:789.623,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"MCO",
    Distance:992.997,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BNA",
    To:"MCO",
    Distance:992.997,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BNA",
    To:"MCO",
    Distance:992.997,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"MDW",
    Distance:636.33,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BNA",
    To:"MDW",
    Distance:636.33,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"MIA",
    Distance:1299.42,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"MIA",
    Distance:1299.42,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BNA",
    To:"MKL",
    Distance:209.888,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"MSP",
    Distance:1119.07,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BNA",
    To:"MSY",
    Distance:758.831,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"ORD",
    Distance:659.489,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"ORD",
    Distance:659.489,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BNA",
    To:"ORD",
    Distance:659.489,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"PHL",
    Distance:1084.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"PHL",
    Distance:1084.3,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"PHL",
    Distance:1084.3,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BNA",
    To:"PHX",
    Distance:2326.29,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"PIT",
    Distance:742.627,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BNA",
    To:"PIT",
    Distance:742.627,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"PNS",
    Distance:630.139,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"PVD",
    Distance:1456.92,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BNA",
    To:"RDU",
    Distance:710.164,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"SAN",
    Distance:2812.05,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"SAT",
    Distance:1321.62,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"SLC",
    Distance:2254.64,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BNA",
    To:"STL",
    Distance:437.415,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"TPA",
    Distance:986.456,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BNA",
    To:"TPA",
    Distance:986.456,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"TTN",
    Distance:1133.69,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"BNA",
    To:"YYZ",
    Distance:1031.95,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BND",
    To:"AWZ",
    Distance:868.777,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"BND",
    To:"AZD",
    Distance:559.314,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"BND",
    To:"DXB",
    Distance:240.795,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"BND",
    To:"DXB",
    Distance:240.795,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"BND",
    To:"IFN",
    Distance:753.237,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"BND",
    To:"IFN",
    Distance:753.237,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"BND",
    To:"KIH",
    Distance:249.955,
    Airport:"Georgian National Airlines"
}),
new Routes(
{
    From:"BND",
    To:"KIH",
    Distance:249.955,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"BND",
    To:"KIH",
    Distance:249.955,
    Airport:"Kish Air"
}),
new Routes(
{
    From:"BND",
    To:"MHD",
    Distance:1048.78,
    Airport:"Air Bangladesh"
}),
new Routes(
{
    From:"BND",
    To:"MHD",
    Distance:1048.78,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"BND",
    To:"RAS",
    Distance:1290.72,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"BND",
    To:"SRY",
    Distance:1089.24,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"BND",
    To:"SYZ",
    Distance:451.549,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"BND",
    To:"SYZ",
    Distance:451.549,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"BND",
    To:"TBZ",
    Distance:1538.72,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"BND",
    To:"THR",
    Distance:1056.9,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"BND",
    To:"THR",
    Distance:1056.9,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"BND",
    To:"ZBR",
    Distance:445.159,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"BNE",
    To:"ADL",
    Distance:1620.02,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"ADL",
    Distance:1620.02,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"BNE",
    To:"ADL",
    Distance:1620.02,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"ADL",
    Distance:1620.02,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"BNE",
    To:"ADL",
    Distance:1620.02,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"AKL",
    Distance:2295.4,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"BNE",
    To:"AKL",
    Distance:2295.4,
    Airport:"Air Tahiti Nui"
}),
new Routes(
{
    From:"BNE",
    To:"AKL",
    Distance:2295.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"AKL",
    Distance:2295.4,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"AKL",
    Distance:2295.4,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BNE",
    To:"AKL",
    Distance:2295.4,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"AKL",
    Distance:2295.4,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BNE",
    To:"AKL",
    Distance:2295.4,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"APW",
    Distance:3912.28,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"ASP",
    Distance:1965.41,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"BCI",
    Distance:891.343,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"BDB",
    Distance:287.089,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"BDB",
    Distance:287.089,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"BKK",
    Distance:7260.31,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BNE",
    To:"BKK",
    Distance:7260.31,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"BKQ",
    Distance:836.13,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BNE",
    To:"BKQ",
    Distance:836.13,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"BME",
    Distance:3337.29,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"CAN",
    Distance:7081.24,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"CBR",
    Distance:956.237,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"CBR",
    Distance:956.237,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"CBR",
    Distance:956.237,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"CHC",
    Distance:2497.83,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"BNE",
    To:"CHC",
    Distance:2497.83,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"CHC",
    Distance:2497.83,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"CNJ",
    Distance:1481.41,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"BNE",
    To:"CNJ",
    Distance:1481.41,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"CNJ",
    Distance:1481.41,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"CNS",
    Distance:1391.13,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"CNS",
    Distance:1391.13,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BNE",
    To:"CNS",
    Distance:1391.13,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"BNE",
    To:"CNS",
    Distance:1391.13,
    Airport:"Finnair"
}),
new Routes(
{
    From:"BNE",
    To:"CNS",
    Distance:1391.13,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"BNE",
    To:"CNS",
    Distance:1391.13,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"CNS",
    Distance:1391.13,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"BNE",
    To:"CNS",
    Distance:1391.13,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"CTL",
    Distance:688.194,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"DPS",
    Distance:4487.82,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BNE",
    To:"DPS",
    Distance:4487.82,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"BNE",
    To:"DPS",
    Distance:4487.82,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"DRW",
    Distance:2851.59,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"DRW",
    Distance:2851.59,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"BNE",
    To:"DRW",
    Distance:2851.59,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"DRW",
    Distance:2851.59,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"DRW",
    Distance:2851.59,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"BNE",
    To:"DRW",
    Distance:2851.59,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"DUD",
    Distance:2552.05,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"BNE",
    To:"DUD",
    Distance:2552.05,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"DXB",
    Distance:11979.2,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BNE",
    To:"DXB",
    Distance:11979.2,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"EMD",
    Distance:652.436,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"EMD",
    Distance:652.436,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"GLT",
    Distance:434.481,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"GLT",
    Distance:434.481,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"HBA",
    Distance:1791.17,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"BNE",
    To:"HBA",
    Distance:1791.17,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"HIR",
    Distance:2125.17,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"HIR",
    Distance:2125.17,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"HKG",
    Distance:6948.04,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"BNE",
    To:"HKG",
    Distance:6948.04,
    Airport:"Finnair"
}),
new Routes(
{
    From:"BNE",
    To:"HKG",
    Distance:6948.04,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"HNL",
    Distance:7552.39,
    Airport:"Hawaiian Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"HTI",
    Distance:888.485,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"BNE",
    To:"HTI",
    Distance:888.485,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"HVB",
    Distance:230.861,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"ICN",
    Distance:7729.63,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"BNE",
    To:"INU",
    Distance:3327.74,
    Airport:"Nauru Air Corporation"
}),
new Routes(
{
    From:"BNE",
    To:"ISA",
    Distance:1571.42,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"ISA",
    Distance:1571.42,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"KTA",
    Distance:3750.63,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"KUL",
    Distance:6439.61,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"LAX",
    Distance:11533.3,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"LAX",
    Distance:11533.3,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BNE",
    To:"LAX",
    Distance:11533.3,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"LAX",
    Distance:11533.3,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"LDH",
    Distance:738.858,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"LRE",
    Distance:989.939,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BNE",
    To:"LRE",
    Distance:989.939,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"LST",
    Distance:1663.94,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"BNE",
    To:"MEL",
    Distance:1380.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"MEL",
    Distance:1380.87,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"BNE",
    To:"MEL",
    Distance:1380.87,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"MEL",
    Distance:1380.87,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"BNE",
    To:"MEL",
    Distance:1380.87,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"MKY",
    Distance:797.653,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"BNE",
    To:"MKY",
    Distance:797.653,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"MKY",
    Distance:797.653,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"MOV",
    Distance:780.794,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"MOV",
    Distance:780.794,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"NAN",
    Distance:2710.85,
    Airport:"Air Pacific"
}),
new Routes(
{
    From:"BNE",
    To:"NAN",
    Distance:2710.85,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"NAN",
    Distance:2710.85,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"NLK",
    Distance:1462.91,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"BNE",
    To:"NOU",
    Distance:1450.25,
    Airport:"Air Caledonie International"
}),
new Routes(
{
    From:"BNE",
    To:"NOU",
    Distance:1450.25,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"NTL",
    Distance:612.626,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"BNE",
    To:"NTL",
    Distance:612.626,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"NTL",
    Distance:612.626,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"PER",
    Distance:3607.6,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"PER",
    Distance:3607.6,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"BNE",
    To:"PER",
    Distance:3607.6,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"PER",
    Distance:3607.6,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"PHE",
    Distance:3580.24,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"POM",
    Distance:2088.68,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"BNE",
    To:"POM",
    Distance:2088.68,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"BNE",
    To:"POM",
    Distance:2088.68,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"POM",
    Distance:2088.68,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"PPP",
    Distance:895.349,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"BNE",
    To:"PPP",
    Distance:895.349,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"PQQ",
    Distance:451.194,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"PQQ",
    Distance:451.194,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"RMA",
    Distance:440.342,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"BNE",
    To:"RMA",
    Distance:440.342,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"ROK",
    Distance:518.128,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BNE",
    To:"ROK",
    Distance:518.128,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"ROK",
    Distance:518.128,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"SIN",
    Distance:6142.7,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BNE",
    To:"SIN",
    Distance:6142.7,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"BNE",
    To:"SIN",
    Distance:6142.7,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"SIN",
    Distance:6142.7,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BNE",
    To:"SIN",
    Distance:6142.7,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"SIN",
    Distance:6142.7,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BNE",
    To:"SIN",
    Distance:6142.7,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"SIN",
    Distance:6142.7,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"SIN",
    Distance:6142.7,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"SON",
    Distance:1965.3,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"BNE",
    To:"SON",
    Distance:1965.3,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"SYD",
    Distance:752.833,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"SYD",
    Distance:752.833,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"BNE",
    To:"SYD",
    Distance:752.833,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"SYD",
    Distance:752.833,
    Airport:"Tiger Airways Australia"
}),
new Routes(
{
    From:"BNE",
    To:"SYD",
    Distance:752.833,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"TPE",
    Distance:6760.07,
    Airport:"China Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"TPE",
    Distance:6760.07,
    Airport:"EVA Air"
}),
new Routes(
{
    From:"BNE",
    To:"TSV",
    Distance:1112.27,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BNE",
    To:"TSV",
    Distance:1112.27,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"BNE",
    To:"TSV",
    Distance:1112.27,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"TSV",
    Distance:1112.27,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"TWB",
    Distance:119.811,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"BNE",
    To:"VLI",
    Distance:1893.77,
    Airport:"Air Vanuatu"
}),
new Routes(
{
    From:"BNE",
    To:"VLI",
    Distance:1893.77,
    Airport:"Qantas"
}),
new Routes(
{
    From:"BNE",
    To:"VLI",
    Distance:1893.77,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"WLG",
    Distance:2510.96,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"BNE",
    To:"WLG",
    Distance:2510.96,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNE",
    To:"ZQN",
    Distance:2401.21,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"BNE",
    To:"ZQN",
    Distance:2401.21,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNI",
    To:"ABV",
    Distance:350.805,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"BNI",
    To:"LOS",
    Distance:253.398,
    Airport:"Arik Air"
}),
new Routes(
{
    From:"BNK",
    To:"MEL",
    Distance:1272.82,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"BNK",
    To:"NTL",
    Distance:468.924,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"BNK",
    To:"SYD",
    Distance:611.823,
    Airport:"Jetstar Airways"
}),
new Routes(
{
    From:"BNK",
    To:"SYD",
    Distance:611.823,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"BNK",
    To:"SYD",
    Distance:611.823,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BNN",
    To:"BGO",
    Distance:674.468,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BNN",
    To:"MQN",
    Distance:137.903,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BNN",
    To:"OSL",
    Distance:588.402,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BNN",
    To:"SSJ",
    Distance:56.3083,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BNN",
    To:"TRD",
    Distance:231.239,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BNS",
    To:"CCS",
    Distance:417.194,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"BNX",
    To:"BEG",
    Distance:237.671,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BNX",
    To:"SJJ",
    Distance:148.908,
    Airport:"Air Bosna"
}),
new Routes(
{
    From:"BNX",
    To:"ZRH",
    Distance:728.854,
    Airport:"Air Bosna"
}),
new Routes(
{
    From:"BNY",
    To:"HIR",
    Distance:210.234,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"BNY",
    To:"RNL",
    Distance:38.5569,
    Airport:"Solomon Airlines"
}),
new Routes(
{
    From:"BOB",
    To:"HUH",
    Distance:82.3181,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"BOB",
    To:"MAU",
    Distance:52.551,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"BOB",
    To:"MOZ",
    Distance:241.419,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"BOB",
    To:"PPT",
    Distance:258.983,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"BOB",
    To:"RFP",
    Distance:43.4068,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"BOB",
    To:"RGI",
    Distance:468.153,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"BOB",
    To:"TIH",
    Distance:404.477,
    Airport:"Air Tahiti"
}),
new Routes(
{
    From:"BOC",
    To:"PAC",
    Distance:298.687,
    Airport:"Metro Batavia"
}),
new Routes(
{
    From:"BOC",
    To:"SJO",
    Distance:226.573,
    Airport:"CAL Cargo Air Lines"
}),
new Routes(
{
    From:"BOD",
    To:"AGP",
    Distance:960.711,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BOD",
    To:"AJA",
    Distance:833.702,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BOD",
    To:"ALG",
    Distance:963.182,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BOD",
    To:"AMS",
    Distance:923.69,
    Airport:"Air France"
}),
new Routes(
{
    From:"BOD",
    To:"AMS",
    Distance:923.69,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BOD",
    To:"AMS",
    Distance:923.69,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BOD",
    To:"BCN",
    Distance:453.474,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BOD",
    To:"BCN",
    Distance:453.474,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BOD",
    To:"BES",
    Distance:491.715,
    Airport:"Nationwide Airlines"
}),
new Routes(
{
    From:"BOD",
    To:"BIA",
    Distance:857.52,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BOD",
    To:"BLQ",
    Distance:948.773,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOD",
    To:"BRS",
    Distance:743.759,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BOD",
    To:"BRU",
    Distance:778.32,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BOD",
    To:"BSL",
    Distance:704.35,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BOD",
    To:"CDG",
    Distance:527.137,
    Airport:"Air France"
}),
new Routes(
{
    From:"BOD",
    To:"CDG",
    Distance:527.137,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BOD",
    To:"CIA",
    Distance:1126.81,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOD",
    To:"CLY",
    Distance:805.642,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BOD",
    To:"CMN",
    Distance:1404.39,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BOD",
    To:"CRL",
    Distance:735.796,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOD",
    To:"DUB",
    Distance:1036.69,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BOD",
    To:"EDI",
    Distance:1250.69,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOD",
    To:"FCO",
    Distance:1100.15,
    Airport:"Air France"
}),
new Routes(
{
    From:"BOD",
    To:"FCO",
    Distance:1100.15,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BOD",
    To:"FCO",
    Distance:1100.15,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BOD",
    To:"FLR",
    Distance:954.211,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BOD",
    To:"FSC",
    Distance:876.938,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BOD",
    To:"GVA",
    Distance:553.996,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"BOD",
    To:"GVA",
    Distance:553.996,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BOD",
    To:"HER",
    Distance:2428.49,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"BOD",
    To:"LGW",
    Distance:703.802,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BOD",
    To:"LGW",
    Distance:703.802,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BOD",
    To:"LIL",
    Distance:698.023,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BOD",
    To:"LIL",
    Distance:698.023,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BOD",
    To:"LIS",
    Distance:968.147,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"BOD",
    To:"LIS",
    Distance:968.147,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BOD",
    To:"LTN",
    Distance:783.94,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BOD",
    To:"LYS",
    Distance:465.052,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BOD",
    To:"LYS",
    Distance:465.052,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BOD",
    To:"MAD",
    Distance:535.339,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BOD",
    To:"MRS",
    Distance:497.759,
    Airport:"Air France"
}),
new Routes(
{
    From:"BOD",
    To:"MRS",
    Distance:497.759,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOD",
    To:"MUC",
    Distance:1031.06,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BOD",
    To:"MXP",
    Distance:744.462,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BOD",
    To:"NCE",
    Distance:644.774,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BOD",
    To:"NCE",
    Distance:644.774,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BOD",
    To:"NTE",
    Distance:267.597,
    Airport:"Air France"
}),
new Routes(
{
    From:"BOD",
    To:"NTE",
    Distance:267.597,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BOD",
    To:"OLB",
    Distance:940.595,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BOD",
    To:"OPO",
    Distance:759.481,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOD",
    To:"ORY",
    Distance:492.442,
    Airport:"Air France"
}),
new Routes(
{
    From:"BOD",
    To:"PMI",
    Distance:651.364,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BOD",
    To:"PMI",
    Distance:651.364,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BOD",
    To:"PMI",
    Distance:651.364,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BOD",
    To:"PMO",
    Distance:1364.32,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BOD",
    To:"RAK",
    Distance:1601.55,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BOD",
    To:"RAK",
    Distance:1601.55,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BOD",
    To:"RNS",
    Distance:368.755,
    Airport:"Nationwide Airlines"
}),
new Routes(
{
    From:"BOD",
    To:"STN",
    Distance:787.783,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOD",
    To:"SVQ",
    Distance:930.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOD",
    To:"SXB",
    Distance:757.828,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BOD",
    To:"SXB",
    Distance:757.828,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BOD",
    To:"TFS",
    Distance:2335.07,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BOD",
    To:"TUN",
    Distance:1276.2,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"BOD",
    To:"VCE",
    Distance:1026.08,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BOD",
    To:"YUL",
    Distance:5518.1,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"BOD",
    To:"ZRH",
    Distance:770.969,
    Airport:"Helvetic Airways"
}),
new Routes(
{
    From:"BOG",
    To:"ADZ",
    Distance:1207.66,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"ADZ",
    Distance:1207.66,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"ADZ",
    Distance:1207.66,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"APO",
    Distance:425.716,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"ATL",
    Distance:3388.73,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOG",
    To:"AUA",
    Distance:978.884,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"AUA",
    Distance:978.884,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"AUC",
    Distance:459.927,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"AUC",
    Distance:459.927,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"AXM",
    Distance:181.625,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"BAQ",
    Distance:691.605,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"BAQ",
    Distance:691.605,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"BAQ",
    Distance:691.605,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"BCN",
    Distance:8513.4,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"BGA",
    Distance:289.875,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"BGA",
    Distance:289.875,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"BGA",
    Distance:289.875,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"BUN",
    Distance:330.133,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"BUN",
    Distance:330.133,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"CCS",
    Distance:1025.68,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"CCS",
    Distance:1025.68,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"BOG",
    To:"CCS",
    Distance:1025.68,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"CCS",
    Distance:1025.68,
    Airport:"TAME"
}),
new Routes(
{
    From:"BOG",
    To:"CDG",
    Distance:8644.7,
    Airport:"Air France"
}),
new Routes(
{
    From:"BOG",
    To:"CLO",
    Distance:279.306,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"CLO",
    Distance:279.306,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"CLO",
    Distance:279.306,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"CTG",
    Distance:655.848,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"CTG",
    Distance:655.848,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"CTG",
    Distance:655.848,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"CUC",
    Distance:401.664,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"CUC",
    Distance:401.664,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"CUN",
    Distance:2277.75,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"CUN",
    Distance:2277.75,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"CUR",
    Distance:1009.03,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"CZU",
    Distance:530.063,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"CZU",
    Distance:530.063,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"DFW",
    Distance:3932.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"DFW",
    Distance:3932.87,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"DFW",
    Distance:3932.87,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOG",
    To:"EJA",
    Distance:261.002,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"EOH",
    Distance:232.457,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"EWR",
    Distance:4002.01,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"EWR",
    Distance:4002.01,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"EYP",
    Distance:207.004,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"EYP",
    Distance:207.004,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"EZE",
    Distance:4688.88,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"BOG",
    To:"EZE",
    Distance:4688.88,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"FLA",
    Distance:380.176,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"FLA",
    Distance:380.176,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"FLL",
    Distance:2460.82,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"FLL",
    Distance:2460.82,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOG",
    To:"FLL",
    Distance:2460.82,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"FLL",
    Distance:2460.82,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOG",
    To:"FRA",
    Distance:9085.12,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"FRA",
    Distance:9085.12,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BOG",
    To:"GIG",
    Distance:4541.55,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"GRU",
    Distance:4335.89,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"GRU",
    Distance:4335.89,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"GRU",
    Distance:4335.89,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"GUA",
    Distance:2102.99,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"GYE",
    Distance:993.931,
    Airport:"Aerolineas Galapagos (Aerogal)"
}),
new Routes(
{
    From:"BOG",
    To:"GYE",
    Distance:993.931,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"HAV",
    Distance:2218.71,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"HAV",
    Distance:2218.71,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"HAV",
    Distance:2218.71,
    Airport:"Cubana de Aviación"
}),
new Routes(
{
    From:"BOG",
    To:"IAD",
    Distance:3822.25,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"IAD",
    Distance:3822.25,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"IAH",
    Distance:3584.94,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"IAH",
    Distance:3584.94,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"IBE",
    Distance:113.676,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"IBE",
    Distance:113.676,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"IPI",
    Distance:579.212,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"JFK",
    Distance:3996.31,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"JFK",
    Distance:3996.31,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOG",
    To:"JFK",
    Distance:3996.31,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOG",
    To:"JFK",
    Distance:3996.31,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"LET",
    Distance:1093.78,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"LET",
    Distance:1093.78,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"LET",
    Distance:1093.78,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"LIM",
    Distance:1888.29,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"LIM",
    Distance:1888.29,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"LPB",
    Distance:2448.16,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"MAD",
    Distance:8031.42,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"MAD",
    Distance:8031.42,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"MCO",
    Distance:2744.67,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"MCO",
    Distance:2744.67,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOG",
    To:"MCO",
    Distance:2744.67,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOG",
    To:"MDE",
    Distance:215.446,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"MDE",
    Distance:215.446,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"MDE",
    Distance:215.446,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"MEX",
    Distance:3158.9,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"BOG",
    To:"MEX",
    Distance:3158.9,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"MEX",
    Distance:3158.9,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"MEX",
    Distance:3158.9,
    Airport:"Interjet (ABC Aerolineas)"
}),
new Routes(
{
    From:"BOG",
    To:"MIA",
    Distance:2434.89,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"MIA",
    Distance:2434.89,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"MIA",
    Distance:2434.89,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"MIA",
    Distance:2434.89,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOG",
    To:"MIA",
    Distance:2434.89,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"MTR",
    Distance:494.417,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"MTR",
    Distance:494.417,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"MVP",
    Distance:579.435,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"MZL",
    Distance:150.487,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"NVA",
    Distance:232.643,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"NVA",
    Distance:232.643,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"PCR",
    Distance:754.744,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"PCR",
    Distance:754.744,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"PDA",
    Distance:698.031,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"PDA",
    Distance:698.031,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"PEI",
    Distance:176.908,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"PEI",
    Distance:176.908,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"PEI",
    Distance:176.908,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"PPN",
    Distance:370.277,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"PSO",
    Distance:506.915,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"PSO",
    Distance:506.915,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"PTY",
    Distance:755.043,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"PTY",
    Distance:755.043,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"PUJ",
    Distance:1664.85,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"PUJ",
    Distance:1664.85,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"PUU",
    Distance:534.851,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"PUU",
    Distance:534.851,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"RCH",
    Distance:770.66,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"RVE",
    Distance:349.919,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"SAL",
    Distance:1902.18,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"SCL",
    Distance:4250.68,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"SCL",
    Distance:4250.68,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"SDQ",
    Distance:1602.14,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"SJE",
    Distance:289.232,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"SJE",
    Distance:289.232,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"SJO",
    Distance:1255.64,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"SJU",
    Distance:1765.35,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"SMR",
    Distance:713.715,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"SMR",
    Distance:713.715,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"SMR",
    Distance:713.715,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"SVI",
    Distance:291.699,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"TME",
    Distance:328.029,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"UIB",
    Distance:297.297,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"UIB",
    Distance:297.297,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"UIB",
    Distance:297.297,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"UIO",
    Distance:722.832,
    Airport:"Aerolineas Galapagos (Aerogal)"
}),
new Routes(
{
    From:"BOG",
    To:"UIO",
    Distance:722.832,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"UIO",
    Distance:722.832,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"UIO",
    Distance:722.832,
    Airport:"TAME"
}),
new Routes(
{
    From:"BOG",
    To:"VGZ",
    Distance:495.863,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"VUP",
    Distance:645.153,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"VUP",
    Distance:645.153,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"VVC",
    Distance:83.7617,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOG",
    To:"VVC",
    Distance:83.7617,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BOG",
    To:"VVC",
    Distance:83.7617,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BOG",
    To:"YYZ",
    Distance:4367.2,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BOG",
    To:"YYZ",
    Distance:4367.2,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BOH",
    To:"ACE",
    Distance:2619.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOH",
    To:"AGP",
    Distance:1582.6,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOH",
    To:"ALC",
    Distance:1393.36,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOH",
    To:"CCF",
    Distance:897.635,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOH",
    To:"CHQ",
    Distance:2681.12,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOH",
    To:"DUB",
    Distance:421.422,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BOH",
    To:"FAO",
    Distance:1605.97,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOH",
    To:"FUE",
    Distance:2679.74,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOH",
    To:"GRO",
    Distance:1048.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOH",
    To:"IBZ",
    Distance:1347.74,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOH",
    To:"LPA",
    Distance:2784.48,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOH",
    To:"MJV",
    Distance:1448.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOH",
    To:"MLA",
    Distance:2110.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOH",
    To:"PMI",
    Distance:1298.07,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOH",
    To:"PMI",
    Distance:1298.07,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BOH",
    To:"PSA",
    Distance:1212.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOH",
    To:"RHO",
    Distance:2861.33,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOH",
    To:"TFS",
    Distance:2815.09,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BOH",
    To:"TFS",
    Distance:2815.09,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BOI",
    To:"DEN",
    Distance:1042.18,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BOI",
    To:"DEN",
    Distance:1042.18,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BOI",
    To:"DEN",
    Distance:1042.18,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOI",
    To:"GEG",
    Distance:462.325,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BOI",
    To:"LAS",
    Distance:837.202,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BOI",
    To:"LAS",
    Distance:837.202,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BOI",
    To:"LAX",
    Distance:1086.43,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOI",
    To:"LWS",
    Distance:318.628,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BOI",
    To:"MSP",
    Distance:1832.53,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOI",
    To:"OAK",
    Distance:823.055,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BOI",
    To:"ORD",
    Distance:2306.95,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOI",
    To:"PDX",
    Distance:552.601,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BOI",
    To:"PHX",
    Distance:1184.09,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOI",
    To:"PHX",
    Distance:1184.09,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BOI",
    To:"PHX",
    Distance:1184.09,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOI",
    To:"SAN",
    Distance:1207.27,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BOI",
    To:"SEA",
    Distance:641.161,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BOI",
    To:"SFO",
    Distance:840.241,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOI",
    To:"SJC",
    Distance:841.299,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BOI",
    To:"SLC",
    Distance:466.414,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOI",
    To:"SMF",
    Distance:703.406,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BOJ",
    To:"BRU",
    Distance:1973.07,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BOJ",
    To:"CPH",
    Distance:1801.85,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BOJ",
    To:"DME",
    Distance:1612.48,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"BOJ",
    To:"DUB",
    Distance:2754.2,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BOJ",
    To:"HEL",
    Distance:1980.99,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BOJ",
    To:"LED",
    Distance:1925.1,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"BOJ",
    To:"LED",
    Distance:1925.1,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"BOJ",
    To:"LTN",
    Distance:2326.67,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BOJ",
    To:"OSL",
    Distance:2252.61,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BOJ",
    To:"SOF",
    Distance:336.41,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"BOJ",
    To:"SVO",
    Distance:1650.56,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"BOJ",
    To:"VAR",
    Distance:77.8693,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"BOM",
    To:"ADD",
    Distance:3834.7,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"ADD",
    Distance:3834.7,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"ADE",
    Distance:3052.55,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"BOM",
    To:"AGR",
    Distance:1036.91,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"AMD",
    Distance:444.167,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"AMD",
    Distance:444.167,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"AMD",
    Distance:444.167,
    Airport:"Go Air"
}),
new Routes(
{
    From:"BOM",
    To:"AMD",
    Distance:444.167,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"AMD",
    Distance:444.167,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"AMD",
    Distance:444.167,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BOM",
    To:"AMM",
    Distance:3937.92,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"BOM",
    To:"AMS",
    Distance:6859.52,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOM",
    To:"AMS",
    Distance:6859.52,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"ATQ",
    Distance:1416.61,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BOM",
    To:"AUH",
    Distance:1970.88,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"AUH",
    Distance:1970.88,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BOM",
    To:"AUH",
    Distance:1970.88,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BOM",
    To:"AUH",
    Distance:1970.88,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"BAH",
    Distance:2412.73,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"BOM",
    To:"BAH",
    Distance:2412.73,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"BBI",
    Distance:1361.68,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"BBI",
    Distance:1361.68,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"BDQ",
    Distance:363.021,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"BDQ",
    Distance:363.021,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"BDQ",
    Distance:363.021,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"BHJ",
    Distance:572.591,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"BHJ",
    Distance:572.591,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"BHO",
    Distance:657.686,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"BHO",
    Distance:657.686,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"BHO",
    Distance:657.686,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"BHU",
    Distance:304.593,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"BHU",
    Distance:304.593,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"BKK",
    Distance:3030.61,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"BKK",
    Distance:3030.61,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"BOM",
    To:"BKK",
    Distance:3030.61,
    Airport:"Bangkok Airways"
}),
new Routes(
{
    From:"BOM",
    To:"BKK",
    Distance:3030.61,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"BKK",
    Distance:3030.61,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BOM",
    To:"BLR",
    Distance:853.708,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"BLR",
    Distance:853.708,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"BLR",
    Distance:853.708,
    Airport:"Go Air"
}),
new Routes(
{
    From:"BOM",
    To:"BLR",
    Distance:853.708,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"BLR",
    Distance:853.708,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"BLR",
    Distance:853.708,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BOM",
    To:"BRU",
    Distance:6866.06,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"BRU",
    Distance:6866.06,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"CAI",
    Distance:4341.43,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"CAI",
    Distance:4341.43,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"BOM",
    To:"CCJ",
    Distance:944.164,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"BOM",
    To:"CCJ",
    Distance:944.164,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"CCJ",
    Distance:944.164,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"CCU",
    Distance:1665.49,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"CCU",
    Distance:1665.49,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"CCU",
    Distance:1665.49,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"CCU",
    Distance:1665.49,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"CCU",
    Distance:1665.49,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BOM",
    To:"CDG",
    Distance:6993.63,
    Airport:"Air France"
}),
new Routes(
{
    From:"BOM",
    To:"CJB",
    Distance:1001.78,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"CJB",
    Distance:1001.78,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"CJB",
    Distance:1001.78,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"CJB",
    Distance:1001.78,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"CJB",
    Distance:1001.78,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BOM",
    To:"CMB",
    Distance:1525.78,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"CMB",
    Distance:1525.78,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"CMB",
    Distance:1525.78,
    Airport:"L"
}),
new Routes(
{
    From:"BOM",
    To:"CMB",
    Distance:1525.78,
    Airport:"SriLankan Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"COK",
    Distance:1063.04,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"BOM",
    To:"COK",
    Distance:1063.04,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"COK",
    Distance:1063.04,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"COK",
    Distance:1063.04,
    Airport:"Go Air"
}),
new Routes(
{
    From:"BOM",
    To:"COK",
    Distance:1063.04,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"COK",
    Distance:1063.04,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"COK",
    Distance:1063.04,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BOM",
    To:"CTU",
    Distance:3372.02,
    Airport:"Air China"
}),
new Routes(
{
    From:"BOM",
    To:"DAC",
    Distance:1887.85,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"DEL",
    Distance:1138.23,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"DEL",
    Distance:1138.23,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"DEL",
    Distance:1138.23,
    Airport:"Go Air"
}),
new Routes(
{
    From:"BOM",
    To:"DEL",
    Distance:1138.23,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"DEL",
    Distance:1138.23,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"DEL",
    Distance:1138.23,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BOM",
    To:"DIU",
    Distance:272.128,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"DIU",
    Distance:272.128,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"DMM",
    Distance:2498.91,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"DMM",
    Distance:2498.91,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"DOH",
    Distance:2295.17,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"BOM",
    To:"DOH",
    Distance:2295.17,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"DOH",
    Distance:2295.17,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BOM",
    To:"DXB",
    Distance:1926.16,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"DXB",
    Distance:1926.16,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BOM",
    To:"DXB",
    Distance:1926.16,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"DXB",
    Distance:1926.16,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"EWR",
    Distance:12545.8,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"EWR",
    Distance:12545.8,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"FRA",
    Distance:6570.75,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"FRA",
    Distance:6570.75,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BOM",
    To:"GAU",
    Distance:2071.07,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"GOI",
    Distance:424.797,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"GOI",
    Distance:424.797,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"GOI",
    Distance:424.797,
    Airport:"Go Air"
}),
new Routes(
{
    From:"BOM",
    To:"GOI",
    Distance:424.797,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"GOI",
    Distance:424.797,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"GOI",
    Distance:424.797,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BOM",
    To:"GWL",
    Distance:971.337,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"HBX",
    Distance:476.614,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BOM",
    To:"HKG",
    Distance:4271.86,
    Airport:"Cathay Pacific"
}),
new Routes(
{
    From:"BOM",
    To:"HKG",
    Distance:4271.86,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BOM",
    To:"HKG",
    Distance:4271.86,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"HYD",
    Distance:618.554,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"HYD",
    Distance:618.554,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"HYD",
    Distance:618.554,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"HYD",
    Distance:618.554,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"HYD",
    Distance:618.554,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BOM",
    To:"ICN",
    Distance:5547.86,
    Airport:"Korean Air"
}),
new Routes(
{
    From:"BOM",
    To:"IDR",
    Distance:505.951,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"IDR",
    Distance:505.951,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"IDR",
    Distance:505.951,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"IDR",
    Distance:505.951,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"IKA",
    Distance:2799.31,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"BOM",
    To:"IST",
    Distance:4819.95,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"IST",
    Distance:4819.95,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"IXC",
    Distance:1347.18,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"IXC",
    Distance:1347.18,
    Airport:"Go Air"
}),
new Routes(
{
    From:"BOM",
    To:"IXC",
    Distance:1347.18,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"IXC",
    Distance:1347.18,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"IXD",
    Distance:1153.1,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"IXE",
    Distance:714.753,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"BOM",
    To:"IXE",
    Distance:714.753,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"IXE",
    Distance:714.753,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"IXE",
    Distance:714.753,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"IXE",
    Distance:714.753,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BOM",
    To:"IXJ",
    Distance:1524.98,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"IXU",
    Distance:278.857,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"IXU",
    Distance:278.857,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"IXU",
    Distance:278.857,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"JAI",
    Distance:911.327,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"JAI",
    Distance:911.327,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"JAI",
    Distance:911.327,
    Airport:"Go Air"
}),
new Routes(
{
    From:"BOM",
    To:"JAI",
    Distance:911.327,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"JAI",
    Distance:911.327,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"JDH",
    Distance:796.639,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"JDH",
    Distance:796.639,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"JDH",
    Distance:796.639,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"JED",
    Distance:3518.84,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"JED",
    Distance:3518.84,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"JED",
    Distance:3518.84,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"JGA",
    Distance:478.617,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"JLR",
    Distance:872.64,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BOM",
    To:"JNB",
    Distance:6964,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"JNB",
    Distance:6964,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"JNB",
    Distance:6964,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"BOM",
    To:"KHI",
    Distance:874.206,
    Airport:"Pakistan International Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"KTM",
    Distance:1592.31,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"KUL",
    Distance:3624.36,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"KUL",
    Distance:3624.36,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"KUL",
    Distance:3624.36,
    Airport:"Malindo Air"
}),
new Routes(
{
    From:"BOM",
    To:"KWI",
    Distance:2758.33,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"KWI",
    Distance:2758.33,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"BOM",
    To:"LHR",
    Distance:7213.01,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"LHR",
    Distance:7213.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"LHR",
    Distance:7213.01,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BOM",
    To:"LHR",
    Distance:7213.01,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"LHR",
    Distance:7213.01,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"BOM",
    To:"LKO",
    Distance:1183.59,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"LKO",
    Distance:1183.59,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"LKO",
    Distance:1183.59,
    Airport:"Go Air"
}),
new Routes(
{
    From:"BOM",
    To:"LKO",
    Distance:1183.59,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"LKO",
    Distance:1183.59,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"MAA",
    Distance:1033.98,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"BOM",
    To:"MAA",
    Distance:1033.98,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"MAA",
    Distance:1033.98,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"MAA",
    Distance:1033.98,
    Airport:"Go Air"
}),
new Routes(
{
    From:"BOM",
    To:"MAA",
    Distance:1033.98,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"MAA",
    Distance:1033.98,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"MAA",
    Distance:1033.98,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BOM",
    To:"MCT",
    Distance:1590.25,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"MCT",
    Distance:1590.25,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"MCT",
    Distance:1590.25,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"MCT",
    Distance:1590.25,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"BOM",
    To:"MRU",
    Distance:4695.34,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"MRU",
    Distance:4695.34,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"BOM",
    To:"MUC",
    Distance:6312.18,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"MUC",
    Distance:6312.18,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BOM",
    To:"NAG",
    Distance:682.589,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"NAG",
    Distance:682.589,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"NAG",
    Distance:682.589,
    Airport:"Go Air"
}),
new Routes(
{
    From:"BOM",
    To:"NAG",
    Distance:682.589,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"NAG",
    Distance:682.589,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"NBO",
    Distance:4533.02,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"NBO",
    Distance:4533.02,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"BOM",
    To:"NRT",
    Distance:6786.22,
    Airport:"All Nippon Airways"
}),
new Routes(
{
    From:"BOM",
    To:"NRT",
    Distance:6786.22,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"PAT",
    Distance:1448.79,
    Airport:"Go Air"
}),
new Routes(
{
    From:"BOM",
    To:"PAT",
    Distance:1448.79,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"PNQ",
    Distance:124.197,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"PNQ",
    Distance:124.197,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"RAJ",
    Distance:418.817,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"RAJ",
    Distance:418.817,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"RAJ",
    Distance:418.817,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"RPR",
    Distance:954.694,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"RPR",
    Distance:954.694,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"RPR",
    Distance:954.694,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"RUH",
    Distance:2770.38,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"RUH",
    Distance:2770.38,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"RUH",
    Distance:2770.38,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"SAH",
    Distance:3064.63,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"BOM",
    To:"SHJ",
    Distance:1914.06,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"BOM",
    To:"SIN",
    Distance:3921.85,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BOM",
    To:"SIN",
    Distance:3921.85,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"SIN",
    Distance:3921.85,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"STV",
    Distance:225.596,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BOM",
    To:"SXR",
    Distance:1667.34,
    Airport:"Go Air"
}),
new Routes(
{
    From:"BOM",
    To:"SXR",
    Distance:1667.34,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"TLV",
    Distance:4046.75,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"TRV",
    Distance:1257.71,
    Airport:"Air India Express"
}),
new Routes(
{
    From:"BOM",
    To:"TRV",
    Distance:1257.71,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"TRV",
    Distance:1257.71,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"TRV",
    Distance:1257.71,
    Airport:"IndiGo Airlines"
}),
new Routes(
{
    From:"BOM",
    To:"TRV",
    Distance:1257.71,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"TRV",
    Distance:1257.71,
    Airport:"Spicejet"
}),
new Routes(
{
    From:"BOM",
    To:"UDR",
    Distance:623.878,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"UDR",
    Distance:623.878,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"UDR",
    Distance:623.878,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"VNS",
    Distance:1247.29,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"VTZ",
    Distance:1103.04,
    Airport:"Air Sahara"
}),
new Routes(
{
    From:"BOM",
    To:"VTZ",
    Distance:1103.04,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BOM",
    To:"ZRH",
    Distance:6539.65,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"BOM",
    To:"ZRH",
    Distance:6539.65,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BON",
    To:"AMS",
    Distance:7792.34,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"BON",
    To:"AMS",
    Distance:7792.34,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BON",
    To:"ATL",
    Distance:2899.38,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BON",
    To:"AUA",
    Distance:194.172,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"BON",
    To:"CUR",
    Distance:75.4179,
    Airport:"Arkefly"
}),
new Routes(
{
    From:"BON",
    To:"CUR",
    Distance:75.4179,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"BON",
    To:"CUR",
    Distance:75.4179,
    Airport:"Scat Air"
}),
new Routes(
{
    From:"BON",
    To:"CUR",
    Distance:75.4179,
    Airport:"Tiara Air"
}),
new Routes(
{
    From:"BON",
    To:"EWR",
    Distance:3227.83,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BON",
    To:"IAH",
    Distance:3423.6,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOO",
    To:"ANX",
    Distance:236.568,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BOO",
    To:"BGO",
    Distance:894.378,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BOO",
    To:"BNN",
    Distance:222.651,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BOO",
    To:"EVE",
    Distance:166.844,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BOO",
    To:"LKN",
    Distance:103.264,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BOO",
    To:"MJF",
    Distance:172.817,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BOO",
    To:"MQN",
    Distance:100.7,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BOO",
    To:"NVK",
    Distance:181.306,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BOO",
    To:"OSL",
    Distance:802.696,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BOO",
    To:"OSL",
    Distance:802.696,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BOO",
    To:"RET",
    Distance:100.845,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BOO",
    To:"SKN",
    Distance:148.44,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BOO",
    To:"SSJ",
    Distance:168.209,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BOO",
    To:"SVJ",
    Distance:109.071,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BOO",
    To:"TOS",
    Distance:326.271,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BOO",
    To:"TOS",
    Distance:326.271,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BOO",
    To:"TRD",
    Distance:452.686,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BOO",
    To:"TRD",
    Distance:452.686,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BOS",
    To:"ACK",
    Distance:146.299,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"BOS",
    To:"ACY",
    Distance:441.014,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"ALB",
    Distance:232.988,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"BOS",
    To:"AMS",
    Distance:5547.35,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"AMS",
    Distance:5547.35,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"ATL",
    Distance:1521.55,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"BOS",
    To:"ATL",
    Distance:1521.55,
    Airport:"Air France"
}),
new Routes(
{
    From:"BOS",
    To:"ATL",
    Distance:1521.55,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BOS",
    To:"ATL",
    Distance:1521.55,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"ATL",
    Distance:1521.55,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"ATL",
    Distance:1521.55,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"ATL",
    Distance:1521.55,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"BOS",
    To:"AUA",
    Distance:3321.99,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"AUG",
    Distance:238.447,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"BOS",
    To:"AUS",
    Distance:2729.7,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"BDA",
    Distance:1243.71,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"BHB",
    Distance:315.208,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"BOS",
    To:"BNA",
    Distance:1514.3,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"BUF",
    Distance:634.935,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"BUF",
    Distance:634.935,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"BUF",
    Distance:634.935,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOS",
    To:"BWI",
    Distance:594.064,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BOS",
    To:"BWI",
    Distance:594.064,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"BWI",
    Distance:594.064,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"CAK",
    Distance:881.537,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BOS",
    To:"CAK",
    Distance:881.537,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"CDG",
    Distance:5534.26,
    Airport:"Air France"
}),
new Routes(
{
    From:"BOS",
    To:"CDG",
    Distance:5534.26,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BOS",
    To:"CDG",
    Distance:5534.26,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"CHS",
    Distance:1317.73,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"CHS",
    Distance:1317.73,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"CLE",
    Distance:903.307,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"CLT",
    Distance:1170.68,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"CLT",
    Distance:1170.68,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"CLT",
    Distance:1170.68,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOS",
    To:"CMH",
    Distance:1028.02,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"CUN",
    Distance:2796.18,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"BOS",
    To:"CUN",
    Distance:2796.18,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"CUN",
    Distance:2796.18,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"CUN",
    Distance:2796.18,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"CUN",
    Distance:2796.18,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOS",
    To:"CVG",
    Distance:1207.62,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"DCA",
    Distance:641.48,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"DCA",
    Distance:641.48,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"DCA",
    Distance:641.48,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOS",
    To:"DEN",
    Distance:2815.75,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"DEN",
    Distance:2815.75,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"DEN",
    Distance:2815.75,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"DFW",
    Distance:2509.27,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"DFW",
    Distance:2509.27,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"DFW",
    Distance:2509.27,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"DFW",
    Distance:2509.27,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOS",
    To:"DTW",
    Distance:1014.99,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"DTW",
    Distance:1014.99,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"DUB",
    Distance:4802.86,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BOS",
    To:"DUB",
    Distance:4802.86,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"DXB",
    Distance:10702.1,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BOS",
    To:"DXB",
    Distance:10702.1,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"EWR",
    Distance:322.308,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"EWR",
    Distance:322.308,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"FCO",
    Distance:6569.28,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BOS",
    To:"FCO",
    Distance:6569.28,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"FLL",
    Distance:1994.31,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"FLL",
    Distance:1994.31,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"FRA",
    Distance:5887.84,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BOS",
    To:"FRA",
    Distance:5887.84,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"HOU",
    Distance:2586.92,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"HOU",
    Distance:2586.92,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"HYA",
    Distance:97.7641,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"BOS",
    To:"IAD",
    Distance:663.552,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"IAD",
    Distance:663.552,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"IAH",
    Distance:2567.65,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"IND",
    Distance:1313.65,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"ISP",
    Distance:246.577,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"ISP",
    Distance:246.577,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"BOS",
    To:"JAX",
    Distance:1626.67,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"JAX",
    Distance:1626.67,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"JFK",
    Distance:300.188,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"JFK",
    Distance:300.188,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"JFK",
    Distance:300.188,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"JFK",
    Distance:300.188,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOS",
    To:"KEF",
    Distance:3874.24,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"BOS",
    To:"LAS",
    Distance:3822.69,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"LAS",
    Distance:3822.69,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"LAX",
    Distance:4193.04,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"LAX",
    Distance:4193.04,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"LAX",
    Distance:4193.04,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"LAX",
    Distance:4193.04,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"LAX",
    Distance:4193.04,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOS",
    To:"LAX",
    Distance:4193.04,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"LAX",
    Distance:4193.04,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"BOS",
    To:"LEB",
    Distance:175.624,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"BOS",
    To:"LGA",
    Distance:296.694,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"LGA",
    Distance:296.694,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"LGA",
    Distance:296.694,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOS",
    To:"LGB",
    Distance:4178.36,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"LHR",
    Distance:5239.44,
    Airport:"Air France"
}),
new Routes(
{
    From:"BOS",
    To:"LHR",
    Distance:5239.44,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"LHR",
    Distance:5239.44,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BOS",
    To:"LHR",
    Distance:5239.44,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"LHR",
    Distance:5239.44,
    Airport:"Finnair"
}),
new Routes(
{
    From:"BOS",
    To:"LHR",
    Distance:5239.44,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"LHR",
    Distance:5239.44,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"LHR",
    Distance:5239.44,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"LHR",
    Distance:5239.44,
    Airport:"Virgin Atlantic Airways"
}),
new Routes(
{
    From:"BOS",
    To:"LIS",
    Distance:5124.08,
    Airport:"SATA International"
}),
new Routes(
{
    From:"BOS",
    To:"LIS",
    Distance:5124.08,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"BOS",
    To:"MAD",
    Distance:5473.02,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"MAD",
    Distance:5473.02,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BOS",
    To:"MAD",
    Distance:5473.02,
    Airport:"Finnair"
}),
new Routes(
{
    From:"BOS",
    To:"MAD",
    Distance:5473.02,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"MCI",
    Distance:2016.85,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"MCO",
    Distance:1805.98,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BOS",
    To:"MCO",
    Distance:1805.98,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"MCO",
    Distance:1805.98,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"MCO",
    Distance:1805.98,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"MDT",
    Distance:538.168,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"MDT",
    Distance:538.168,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOS",
    To:"MDW",
    Distance:1381.51,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BOS",
    To:"MDW",
    Distance:1381.51,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"MIA",
    Distance:2028.28,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"MIA",
    Distance:2028.28,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOS",
    To:"MKE",
    Distance:1380.52,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"MSP",
    Distance:1804.23,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"MSP",
    Distance:1804.23,
    Airport:"Sun Country Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"MSY",
    Distance:2199.57,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"MSY",
    Distance:2199.57,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"MUC",
    Distance:6181.02,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BOS",
    To:"MUC",
    Distance:6181.02,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"MVY",
    Distance:112.871,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"BOS",
    To:"MYR",
    Distance:1187.99,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"MYR",
    Distance:1187.99,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"NAS",
    Distance:2015.47,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"NAS",
    Distance:2015.47,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"NRT",
    Distance:10760.8,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"NRT",
    Distance:10760.8,
    Airport:"Japan Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"ORD",
    Distance:1391.08,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"ORD",
    Distance:1391.08,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"ORD",
    Distance:1391.08,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"ORD",
    Distance:1391.08,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOS",
    To:"ORD",
    Distance:1391.08,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"PBG",
    Distance:322.614,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"PBG",
    Distance:322.614,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"BOS",
    To:"PBI",
    Distance:1929.49,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"PDL",
    Distance:3844.5,
    Airport:"SATA International"
}),
new Routes(
{
    From:"BOS",
    To:"PDL",
    Distance:3844.5,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"BOS",
    To:"PDX",
    Distance:4072.28,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"PDX",
    Distance:4072.28,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"PDX",
    Distance:4072.28,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"PHL",
    Distance:450.146,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"PHL",
    Distance:450.146,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"PHL",
    Distance:450.146,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOS",
    To:"PHX",
    Distance:3693.74,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"PHX",
    Distance:3693.74,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"PHX",
    Distance:3693.74,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOS",
    To:"PIT",
    Distance:796.564,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"PIT",
    Distance:796.564,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"PIT",
    Distance:796.564,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOS",
    To:"PLS",
    Distance:2292.59,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"PLS",
    Distance:2292.59,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"PQI",
    Distance:534.983,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"PQI",
    Distance:534.983,
    Airport:"Peninsula Airways"
}),
new Routes(
{
    From:"BOS",
    To:"PTY",
    Distance:3791.44,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"PTY",
    Distance:3791.44,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"PUJ",
    Distance:2657.83,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"PVC",
    Distance:72.2714,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"BOS",
    To:"RDU",
    Distance:984.509,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"RDU",
    Distance:984.509,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"RIC",
    Distance:762.324,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"RIC",
    Distance:762.324,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"RIC",
    Distance:762.324,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"RIC",
    Distance:762.324,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOS",
    To:"RKD",
    Distance:243.733,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"BOS",
    To:"ROC",
    Distance:550.743,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"ROC",
    Distance:550.743,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOS",
    To:"RSW",
    Distance:2013.3,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"RUT",
    Distance:204.513,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"BOS",
    To:"SAN",
    Distance:4155.87,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"SAN",
    Distance:4155.87,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"SAN",
    Distance:4155.87,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"SAV",
    Distance:1450.39,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"SDQ",
    Distance:2664.41,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"SEA",
    Distance:4005.53,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"SEA",
    Distance:4005.53,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"SEA",
    Distance:4005.53,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"SFO",
    Distance:4341.23,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"SFO",
    Distance:4341.23,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"SFO",
    Distance:4341.23,
    Airport:"Virgin America"
}),
new Routes(
{
    From:"BOS",
    To:"SJC",
    Distance:4316.67,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"SJU",
    Distance:2701.98,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"SLC",
    Distance:3379.54,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"SLK",
    Distance:342.64,
    Airport:"Cape Air"
}),
new Routes(
{
    From:"BOS",
    To:"SNN",
    Distance:4646,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BOS",
    To:"STI",
    Distance:2553.12,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"STL",
    Distance:1680.6,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"STT",
    Distance:2731.81,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"SXM",
    Distance:2805.9,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"SYR",
    Distance:424.728,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"SYR",
    Distance:424.728,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BOS",
    To:"TPA",
    Distance:1908.47,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BOS",
    To:"YHZ",
    Distance:664.801,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BOS",
    To:"YHZ",
    Distance:664.801,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"YOW",
    Distance:497.944,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BOS",
    To:"YOW",
    Distance:497.944,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"YTZ",
    Distance:696.401,
    Airport:"Porter Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"YUL",
    Distance:408.977,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BOS",
    To:"YUL",
    Distance:408.977,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"YYZ",
    Distance:715.881,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BOS",
    To:"YYZ",
    Distance:715.881,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOS",
    To:"ZRH",
    Distance:6009.99,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BOS",
    To:"ZRH",
    Distance:6009.99,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BOY",
    To:"ABJ",
    Distance:657.411,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"BOY",
    To:"OUA",
    Distance:334.281,
    Airport:"Air Burkina"
}),
new Routes(
{
    From:"BPN",
    To:"BDJ",
    Distance:338.433,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BPN",
    To:"BDJ",
    Distance:338.433,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"BPN",
    To:"BEJ",
    Distance:385.372,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BPN",
    To:"BEJ",
    Distance:385.372,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BPN",
    To:"BEJ",
    Distance:385.372,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"BPN",
    To:"BTH",
    Distance:1445.12,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BPN",
    To:"CGK",
    Distance:1257.64,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"BPN",
    To:"CGK",
    Distance:1257.64,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BPN",
    To:"CGK",
    Distance:1257.64,
    Airport:"Interlink Airlines"
}),
new Routes(
{
    From:"BPN",
    To:"CGK",
    Distance:1257.64,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BPN",
    To:"CGK",
    Distance:1257.64,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"BPN",
    To:"DPS",
    Distance:853.419,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"BPN",
    To:"JOG",
    Distance:1018.93,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"BPN",
    To:"JOG",
    Distance:1018.93,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BPN",
    To:"JOG",
    Distance:1018.93,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BPN",
    To:"JOG",
    Distance:1018.93,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"BPN",
    To:"KUL",
    Distance:1745.97,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BPN",
    To:"MDC",
    Distance:946.33,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BPN",
    To:"MDC",
    Distance:946.33,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BPN",
    To:"PLW",
    Distance:337.458,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BPN",
    To:"PLW",
    Distance:337.458,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"BPN",
    To:"SIN",
    Distance:1463.55,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BPN",
    To:"SIN",
    Distance:1463.55,
    Airport:"SilkAir"
}),
new Routes(
{
    From:"BPN",
    To:"SIN",
    Distance:1463.55,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"BPN",
    To:"SRG",
    Distance:961.602,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BPN",
    To:"SUB",
    Distance:817.956,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"BPN",
    To:"SUB",
    Distance:817.956,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BPN",
    To:"SUB",
    Distance:817.956,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BPN",
    To:"SUB",
    Distance:817.956,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"BPN",
    To:"TRK",
    Distance:516.353,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BPN",
    To:"TRK",
    Distance:516.353,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BPN",
    To:"TRK",
    Distance:516.353,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"BPN",
    To:"UPG",
    Distance:514.854,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"BPN",
    To:"UPG",
    Distance:514.854,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BPN",
    To:"UPG",
    Distance:514.854,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BPN",
    To:"UPG",
    Distance:514.854,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"BPS",
    To:"CGH",
    Distance:1124.16,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BPS",
    To:"CNF",
    Distance:627.07,
    Airport:"Azul"
}),
new Routes(
{
    From:"BPS",
    To:"CNF",
    Distance:627.07,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BPS",
    To:"CNF",
    Distance:627.07,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BPS",
    To:"CNF",
    Distance:627.07,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BPS",
    To:"GRU",
    Distance:1095.5,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BPS",
    To:"GRU",
    Distance:1095.5,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BPS",
    To:"SDU",
    Distance:836.837,
    Airport:"Azul"
}),
new Routes(
{
    From:"BPS",
    To:"SSA",
    Distance:400.456,
    Airport:"Azul"
}),
new Routes(
{
    From:"BPS",
    To:"SSA",
    Distance:400.456,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BPS",
    To:"VCP",
    Distance:1114.87,
    Airport:"Azul"
}),
new Routes(
{
    From:"BPT",
    To:"DFW",
    Distance:435.01,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BPT",
    To:"DFW",
    Distance:435.01,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BPX",
    To:"CTU",
    Distance:654.676,
    Airport:"Air China"
}),
new Routes(
{
    From:"BPX",
    To:"CTU",
    Distance:654.676,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"BPX",
    To:"LXA",
    Distance:613.157,
    Airport:"Virgin Express"
}),
new Routes(
{
    From:"BQB",
    To:"ALH",
    Distance:261.608,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BQB",
    To:"PER",
    Distance:201.339,
    Airport:"Air New Zealand"
}),
new Routes(
{
    From:"BQB",
    To:"PER",
    Distance:201.339,
    Airport:"Virgin Australia"
}),
new Routes(
{
    From:"BQK",
    To:"ATL",
    Distance:383.553,
    Airport:"Air France"
}),
new Routes(
{
    From:"BQK",
    To:"ATL",
    Distance:383.553,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BQK",
    To:"ATL",
    Distance:383.553,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BQL",
    To:"BEU",
    Distance:165.505,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"BQL",
    To:"ISA",
    Distance:253.703,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"BQN",
    To:"EWR",
    Distance:2558.11,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BQN",
    To:"FLL",
    Distance:1581.28,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"BQN",
    To:"JFK",
    Distance:2542.97,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BQN",
    To:"MCO",
    Distance:1817.21,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BQS",
    To:"DME",
    Distance:5602.34,
    Airport:"Transaero Airlines"
}),
new Routes(
{
    From:"BQS",
    To:"HTA",
    Distance:996.685,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"BQS",
    To:"KHV",
    Distance:599.757,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"BQS",
    To:"VVO",
    Distance:859.691,
    Airport:"Isles of Scilly Skybus"
}),
new Routes(
{
    From:"BQS",
    To:"YKS",
    Distance:1305.34,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"BRA",
    To:"BSB",
    Distance:525.859,
    Airport:"Azul"
}),
new Routes(
{
    From:"BRA",
    To:"BSB",
    Distance:525.859,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"BRA",
    To:"BSB",
    Distance:525.859,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"BRA",
    To:"SSA",
    Distance:729.784,
    Airport:"Azul"
}),
new Routes(
{
    From:"BRA",
    To:"SSA",
    Distance:729.784,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"BRA",
    To:"SSA",
    Distance:729.784,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"BRC",
    To:"AEP",
    Distance:1335.26,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"BRC",
    To:"AEP",
    Distance:1335.26,
    Airport:"LAN Airlines"
}),
new Routes(
{
    From:"BRC",
    To:"COR",
    Distance:1256.97,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"BRC",
    To:"CRD",
    Distance:595.072,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"BRC",
    To:"EQS",
    Distance:195.351,
    Airport:"TRIP Linhas A"
}),
new Routes(
{
    From:"BRC",
    To:"EZE",
    Distance:1308.98,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"BRC",
    To:"MDZ",
    Distance:948.51,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"BRD",
    To:"INL",
    Distance:247.301,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BRD",
    To:"MSP",
    Distance:183.038,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BRE",
    To:"ACE",
    Distance:3243.85,
    Airport:"Germania"
}),
new Routes(
{
    From:"BRE",
    To:"ADB",
    Distance:2161.85,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"BRE",
    To:"AGP",
    Distance:2092.53,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"ALC",
    Distance:1791.7,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"AMS",
    Distance:283.33,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BRE",
    To:"AMS",
    Distance:283.33,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BRE",
    To:"AYT",
    Distance:2474.87,
    Airport:"Germania"
}),
new Routes(
{
    From:"BRE",
    To:"BGY",
    Distance:822.577,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"BZR",
    Distance:1153,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"CDG",
    Distance:625.256,
    Airport:"Air France"
}),
new Routes(
{
    From:"BRE",
    To:"CDG",
    Distance:625.256,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BRE",
    To:"CFU",
    Distance:1717.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"CHQ",
    Distance:2288.92,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"CPH",
    Distance:380.182,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BRE",
    To:"DUB",
    Distance:1001.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"EDI",
    Distance:847.462,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"FAO",
    Distance:2204.49,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"FMO",
    Distance:125.866,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"BRE",
    To:"FNC",
    Distance:3043.15,
    Airport:"Germania"
}),
new Routes(
{
    From:"BRE",
    To:"FRA",
    Distance:336.35,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRE",
    To:"FUE",
    Distance:3304.07,
    Airport:"Germania"
}),
new Routes(
{
    From:"BRE",
    To:"FUE",
    Distance:3304.07,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"GRO",
    Distance:1318.44,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"HAU",
    Distance:734.168,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"IBZ",
    Distance:1674.91,
    Airport:"Germania"
}),
new Routes(
{
    From:"BRE",
    To:"IST",
    Distance:2014.09,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BRE",
    To:"LEJ",
    Distance:295.908,
    Airport:"Germania"
}),
new Routes(
{
    From:"BRE",
    To:"LPA",
    Distance:3425.8,
    Airport:"Germania"
}),
new Routes(
{
    From:"BRE",
    To:"LPA",
    Distance:3425.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"MAN",
    Distance:736.833,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"MUC",
    Distance:562.92,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRE",
    To:"NBE",
    Distance:1891.57,
    Airport:"Germania"
}),
new Routes(
{
    From:"BRE",
    To:"NYO",
    Distance:813.616,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"OPO",
    Distance:1852.44,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"PMI",
    Distance:1569.58,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BRE",
    To:"PMI",
    Distance:1569.58,
    Airport:"Germania"
}),
new Routes(
{
    From:"BRE",
    To:"PMI",
    Distance:1569.58,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"RIX",
    Distance:1057.4,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"SKG",
    Distance:1755.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"STN",
    Distance:593.174,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"STR",
    Distance:485.505,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BRE",
    To:"TFS",
    Distance:3471.79,
    Airport:"Germania"
}),
new Routes(
{
    From:"BRE",
    To:"TFS",
    Distance:3471.79,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"TLL",
    Distance:1213.45,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"TLS",
    Distance:1180.82,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"BRE",
    To:"TMP",
    Distance:1282.99,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"TSF",
    Distance:858.722,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"VIE",
    Distance:775.965,
    Airport:"Germania"
}),
new Routes(
{
    From:"BRE",
    To:"VNO",
    Distance:1094.13,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRE",
    To:"ZRH",
    Distance:621.005,
    Airport:"Maastricht Airlines"
}),
new Routes(
{
    From:"BRI",
    To:"AMS",
    Distance:1538.05,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"BRI",
    To:"BCN",
    Distance:1226.7,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BRI",
    To:"BCN",
    Distance:1226.7,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BRI",
    To:"BGY",
    Distance:760.537,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"BLQ",
    Distance:584.323,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"BUD",
    Distance:727.822,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BRI",
    To:"BVA",
    Distance:1467.89,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"CAG",
    Distance:687.083,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"CDG",
    Distance:1414.43,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRI",
    To:"CGN",
    Distance:1309.75,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BRI",
    To:"CIA",
    Distance:354.728,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"CRL",
    Distance:1405.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"CTA",
    Distance:433.532,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BRI",
    To:"CTA",
    Distance:433.532,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"BRI",
    To:"DUB",
    Distance:2193.02,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"DUS",
    Distance:1363.03,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BRI",
    To:"FCO",
    Distance:382.912,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BRI",
    To:"FKB",
    Distance:1088.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"FLR",
    Distance:543.703,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BRI",
    To:"FLR",
    Distance:543.703,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BRI",
    To:"GOA",
    Distance:741.649,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"HHN",
    Distance:1225.37,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"LGW",
    Distance:1708.57,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BRI",
    To:"LGW",
    Distance:1708.57,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRI",
    To:"LIN",
    Distance:771.547,
    Airport:"Air One"
}),
new Routes(
{
    From:"BRI",
    To:"LIN",
    Distance:771.547,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BRI",
    To:"MLA",
    Distance:619.893,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"MST",
    Distance:1375.64,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"MUC",
    Distance:892.81,
    Airport:"Air Dolomiti"
}),
new Routes(
{
    From:"BRI",
    To:"MUC",
    Distance:892.81,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRI",
    To:"MXP",
    Distance:818.349,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRI",
    To:"NRN",
    Distance:1417.2,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"OTP",
    Distance:851.095,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BRI",
    To:"PMO",
    Distance:455.132,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BRI",
    To:"PMO",
    Distance:455.132,
    Airport:"Blue Panorama Airlines"
}),
new Routes(
{
    From:"BRI",
    To:"PRG",
    Distance:1015.17,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BRI",
    To:"PSA",
    Distance:594.227,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"STN",
    Distance:1732.31,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"STR",
    Distance:1027.18,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BRI",
    To:"SVQ",
    Distance:1987.26,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"TIA",
    Distance:249.236,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BRI",
    To:"TRN",
    Distance:865.199,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BRI",
    To:"TRN",
    Distance:865.199,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"TRS",
    Distance:584.844,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"TSF",
    Distance:622.309,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"TXL",
    Distance:1296.71,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BRI",
    To:"TXL",
    Distance:1296.71,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"BRI",
    To:"VCE",
    Distance:602.22,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BRI",
    To:"VLC",
    Distance:1470.92,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRI",
    To:"VRN",
    Distance:670.545,
    Airport:"Air Senegal International"
}),
new Routes(
{
    From:"BRL",
    To:"ORD",
    Distance:299.76,
    Airport:"Air Choice One"
}),
new Routes(
{
    From:"BRL",
    To:"STL",
    Distance:235.258,
    Airport:"Air Choice One"
}),
new Routes(
{
    From:"BRM",
    To:"CCS",
    Distance:266.438,
    Airport:"Aserca Airlines"
}),
new Routes(
{
    From:"BRM",
    To:"CCS",
    Distance:266.438,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"BRM",
    To:"CCS",
    Distance:266.438,
    Airport:"Virgin Pacific"
}),
new Routes(
{
    From:"BRM",
    To:"CUR",
    Distance:242.57,
    Airport:"Insel Air (7I/INC) (Priv)"
}),
new Routes(
{
    From:"BRM",
    To:"PMV",
    Distance:597.336,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"BRN",
    To:"AMS",
    Distance:631.223,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"BRN",
    To:"BCN",
    Distance:759.377,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"BRN",
    To:"CGN",
    Distance:440.184,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"BRN",
    To:"EBA",
    Distance:509.908,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"BRN",
    To:"HAM",
    Distance:767.388,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"BRN",
    To:"IBZ",
    Distance:1023.14,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"BRN",
    To:"LCY",
    Distance:742.867,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"BRN",
    To:"MUC",
    Distance:358.964,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"BRN",
    To:"OLB",
    Distance:688.126,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"BRN",
    To:"PMI",
    Distance:904.631,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"BRN",
    To:"TXL",
    Distance:752.624,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"BRN",
    To:"VIE",
    Distance:693.818,
    Airport:"SkyWork Airlines "
}),
new Routes(
{
    From:"BRO",
    To:"DFW",
    Distance:778.157,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BRO",
    To:"DFW",
    Distance:778.157,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BRO",
    To:"IAH",
    Distance:497.462,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRQ",
    To:"STN",
    Distance:1199.86,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRR",
    To:"GLA",
    Distance:224.905,
    Airport:"Flybe"
}),
new Routes(
{
    From:"BRS",
    To:"ABZ",
    Distance:647.953,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"BRS",
    To:"ACE",
    Distance:2654.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"ACE",
    Distance:2654.16,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BRS",
    To:"AGP",
    Distance:1641.48,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"AGP",
    Distance:1641.48,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"ALC",
    Distance:1466.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"ALC",
    Distance:1466.47,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BRS",
    To:"ALC",
    Distance:1466.47,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"AMS",
    Distance:523.994,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BRS",
    To:"AMS",
    Distance:523.994,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BRS",
    To:"AMS",
    Distance:523.994,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"AYT",
    Distance:3082.54,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BRS",
    To:"BCN",
    Distance:1179.74,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"BFS",
    Distance:432.667,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"BGY",
    Distance:1111.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"BJV",
    Distance:2851.7,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"BLQ",
    Distance:1287.87,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"BOD",
    Distance:743.759,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"BRU",
    Distance:505.172,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRS",
    To:"BUD",
    Distance:1642.28,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"BZR",
    Distance:1005.33,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"CDG",
    Distance:458.197,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"CEG",
    Distance:200.412,
    Airport:"Germania"
}),
new Routes(
{
    From:"BRS",
    To:"CFU",
    Distance:2182.21,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BRS",
    To:"CFU",
    Distance:2182.21,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"CHQ",
    Distance:2767.23,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"CPH",
    Distance:1117.52,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"DLM",
    Distance:2965.34,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BRS",
    To:"DLM",
    Distance:2965.34,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BRS",
    To:"DLM",
    Distance:2965.34,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"DUB",
    Distance:330.719,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BRS",
    To:"DUB",
    Distance:330.719,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"EDI",
    Distance:509.679,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"EGC",
    Distance:767.56,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"FAO",
    Distance:1650.43,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"FAO",
    Distance:1650.43,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"FCO",
    Distance:1557.4,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"FNC",
    Distance:2370.55,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"FRA",
    Distance:806.465,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"BRS",
    To:"FUE",
    Distance:2713.92,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BRS",
    To:"FUE",
    Distance:2713.92,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"GCI",
    Distance:216.735,
    Airport:"Aurigny Air Services"
}),
new Routes(
{
    From:"BRS",
    To:"GDN",
    Distance:1454.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"GLA",
    Distance:511.778,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"GRO",
    Distance:1133.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"GVA",
    Distance:862.151,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"HAM",
    Distance:894.236,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"BRS",
    To:"HER",
    Distance:2845.88,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"IBZ",
    Distance:1427.01,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"INV",
    Distance:690.266,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"JER",
    Distance:244.66,
    Airport:"Skynet Airlines"
}),
new Routes(
{
    From:"BRS",
    To:"KEF",
    Distance:1817.49,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"KRK",
    Distance:1584.24,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"KUN",
    Distance:1818.27,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"LIG",
    Distance:677.136,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"LIS",
    Distance:1487.6,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"LPA",
    Distance:2814.75,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"LPA",
    Distance:2814.75,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BRS",
    To:"LPA",
    Distance:2814.75,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BRS",
    To:"MAD",
    Distance:1212.56,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"MAH",
    Distance:1388.43,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BRS",
    To:"MJV",
    Distance:1520.49,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"MLA",
    Distance:2201.29,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"BRS",
    To:"MLA",
    Distance:2201.29,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"MUC",
    Distance:1090.64,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"BRS",
    To:"MXP",
    Distance:1056.44,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"BRS",
    To:"NBE",
    Distance:1996.83,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BRS",
    To:"NBE",
    Distance:1996.83,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BRS",
    To:"NCE",
    Distance:1135.63,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"NCL",
    Distance:412.105,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"NOC",
    Distance:498.052,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"ORK",
    Distance:401.7,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BRS",
    To:"PFO",
    Distance:3359.41,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BRS",
    To:"PFO",
    Distance:3359.41,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"PMI",
    Distance:1381.24,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"PMI",
    Distance:1381.24,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BRS",
    To:"PMI",
    Distance:1381.24,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"BRS",
    To:"PMI",
    Distance:1381.24,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BRS",
    To:"PMI",
    Distance:1381.24,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"POZ",
    Distance:1341.81,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"PRG",
    Distance:1200.48,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"PSA",
    Distance:1301.09,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"RAK",
    Distance:2241.64,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"REU",
    Distance:1176.23,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"REU",
    Distance:1176.23,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BRS",
    To:"RZE",
    Distance:1737.97,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"SNN",
    Distance:448.896,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BRS",
    To:"SXF",
    Distance:1117.93,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"TFS",
    Distance:2841.76,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"TFS",
    Distance:2841.76,
    Airport:"Thomas Cook Airlines"
}),
new Routes(
{
    From:"BRS",
    To:"TFS",
    Distance:2841.76,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"BRS",
    To:"TFS",
    Distance:2841.76,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BRS",
    To:"TFS",
    Distance:2841.76,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"TLS",
    Distance:914.711,
    Airport:"Germania"
}),
new Routes(
{
    From:"BRS",
    To:"TLS",
    Distance:914.711,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRS",
    To:"TSF",
    Distance:1266.71,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"VLC",
    Distance:1333.79,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"WMI",
    Distance:1600.25,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"WRO",
    Distance:1361,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRS",
    To:"ZRH",
    Distance:922.758,
    Airport:"Helvetic Airways"
}),
new Routes(
{
    From:"BRU",
    To:"ABJ",
    Distance:5134.85,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"ABJ",
    Distance:5134.85,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"ABJ",
    Distance:5134.85,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"ACE",
    Distance:2870.66,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"ADB",
    Distance:2261.97,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"AGA",
    Distance:2560.52,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"AGA",
    Distance:2560.52,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"AGA",
    Distance:2560.52,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BRU",
    To:"AGP",
    Distance:1735.48,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"AGP",
    Distance:1735.48,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"AGP",
    Distance:1735.48,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"AGP",
    Distance:1735.48,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRU",
    To:"ALC",
    Distance:1458.01,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"ALC",
    Distance:1458.01,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"ALC",
    Distance:1458.01,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"ALC",
    Distance:1458.01,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRU",
    To:"ALG",
    Distance:1583.34,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BRU",
    To:"AMS",
    Distance:157.661,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"AOE",
    Distance:2360.18,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"ARN",
    Distance:1287.77,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BRU",
    To:"ATH",
    Distance:2101.43,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"ATH",
    Distance:2101.43,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"ATH",
    Distance:2101.43,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BRU",
    To:"ATL",
    Distance:7106.02,
    Airport:"Air France"
}),
new Routes(
{
    From:"BRU",
    To:"ATL",
    Distance:7106.02,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BRU",
    To:"ATL",
    Distance:7106.02,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"AUH",
    Distance:5166.69,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"BRU",
    To:"AUH",
    Distance:5166.69,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"AUH",
    Distance:5166.69,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BRU",
    To:"AYT",
    Distance:2597.76,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"AYT",
    Distance:2597.76,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BCN",
    Distance:1083.78,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BCN",
    Distance:1083.78,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BCN",
    Distance:1083.78,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BCN",
    Distance:1083.78,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BCN",
    Distance:1083.78,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRU",
    To:"BEG",
    Distance:1356.6,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BRU",
    To:"BEY",
    Distance:3139.26,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BHX",
    Distance:462.916,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BHX",
    Distance:462.916,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BIA",
    Distance:1002.91,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BIO",
    Distance:1012.54,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BIO",
    Distance:1012.54,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BJM",
    Distance:6475.88,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BRU",
    To:"BJM",
    Distance:6475.88,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BJM",
    Distance:6475.88,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"BJM",
    Distance:6475.88,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BJV",
    Distance:2376.86,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BKK",
    Distance:9262.31,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BKK",
    Distance:9262.31,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BRU",
    To:"BLL",
    Distance:620.659,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BRU",
    To:"BLQ",
    Distance:871.071,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BMA",
    Distance:1266.35,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BMA",
    Distance:1266.35,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"BRU",
    To:"BOD",
    Distance:778.32,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRU",
    To:"BOJ",
    Distance:1973.07,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"BOM",
    Distance:6866.06,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BOM",
    Distance:6866.06,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BRU",
    To:"BRS",
    Distance:505.172,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BSL",
    Distance:429.362,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"BSL",
    Distance:429.362,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BRU",
    To:"BSL",
    Distance:429.362,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRU",
    To:"BUD",
    Distance:1138.52,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"CAI",
    Distance:3208.6,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"CAI",
    Distance:3208.6,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"BRU",
    To:"CDG",
    Distance:251.481,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"CDG",
    Distance:251.481,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"CFU",
    Distance:1735.92,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"CHQ",
    Distance:2322.23,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"CMN",
    Distance:2182.67,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"BRU",
    To:"CMN",
    Distance:2182.67,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"CMN",
    Distance:2182.67,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BRU",
    To:"COO",
    Distance:4956.91,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BRU",
    To:"COO",
    Distance:4956.91,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"COO",
    Distance:4956.91,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"COO",
    Distance:4956.91,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"CPH",
    Distance:754.384,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"CPH",
    Distance:754.384,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"CPH",
    Distance:754.384,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"BRU",
    To:"CPH",
    Distance:754.384,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BRU",
    To:"CTA",
    Distance:1711.74,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"BRU",
    To:"CTA",
    Distance:1711.74,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"DBV",
    Distance:1397.23,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"DEL",
    Distance:6399.31,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"DEL",
    Distance:6399.31,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BRU",
    To:"DJE",
    Distance:1960.69,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"BRU",
    To:"DKR",
    Distance:4477.44,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BRU",
    To:"DKR",
    Distance:4477.44,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"DKR",
    Distance:4477.44,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"DKR",
    Distance:4477.44,
    Airport:"Senegal Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"DKR",
    Distance:4477.44,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"DLA",
    Distance:5237.38,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BRU",
    To:"DLA",
    Distance:5237.38,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"DLA",
    Distance:5237.38,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"DLA",
    Distance:5237.38,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BRU",
    To:"DLA",
    Distance:5237.38,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"DME",
    Distance:2260.68,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"DOH",
    Distance:4890.47,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BRU",
    To:"DUB",
    Distance:784.316,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BRU",
    To:"EDI",
    Distance:764.686,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"EMA",
    Distance:452.938,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"BRU",
    To:"EWR",
    Distance:5907.22,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"EWR",
    Distance:5907.22,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BRU",
    To:"EWR",
    Distance:5907.22,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BRU",
    To:"EWR",
    Distance:5907.22,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"EWR",
    Distance:5907.22,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"FAO",
    Distance:1832.27,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"FAO",
    Distance:1832.27,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"BRU",
    To:"FCO",
    Distance:1172.59,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BRU",
    To:"FCO",
    Distance:1172.59,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"FCO",
    Distance:1172.59,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"FCO",
    Distance:1172.59,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"FCO",
    Distance:1172.59,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"FCO",
    Distance:1172.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRU",
    To:"FIH",
    Distance:6236.12,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"FLR",
    Distance:936.18,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"FNA",
    Distance:4974.42,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"FNA",
    Distance:4974.42,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"FNA",
    Distance:4974.42,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"FNC",
    Distance:2664.08,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"FRA",
    Distance:303.264,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"FRA",
    Distance:303.264,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"FRA",
    Distance:303.264,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"GDN",
    Distance:1017.36,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"BRU",
    To:"GOT",
    Distance:905.015,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"GOT",
    Distance:905.015,
    Airport:"Malmö Aviation"
}),
new Routes(
{
    From:"BRU",
    To:"GOT",
    Distance:905.015,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"GVA",
    Distance:532.1,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"GVA",
    Distance:532.1,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"GVA",
    Distance:532.1,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BRU",
    To:"GVA",
    Distance:532.1,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRU",
    To:"HAJ",
    Distance:398.17,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"HAJ",
    Distance:398.17,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"HAJ",
    Distance:398.17,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"HAM",
    Distance:481.804,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"HAM",
    Distance:481.804,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"HEL",
    Distance:1646.52,
    Airport:"Finnair"
}),
new Routes(
{
    From:"BRU",
    To:"HER",
    Distance:2395.43,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"HER",
    Distance:2395.43,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"HER",
    Distance:2395.43,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"IAD",
    Distance:6246.99,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"IAD",
    Distance:6246.99,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"IAD",
    Distance:6246.99,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"IBZ",
    Distance:1359.46,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"IBZ",
    Distance:1359.46,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"IBZ",
    Distance:1359.46,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"IST",
    Distance:2166.25,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"JFK",
    Distance:5885.52,
    Airport:"Air France"
}),
new Routes(
{
    From:"BRU",
    To:"JFK",
    Distance:5885.52,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"JFK",
    Distance:5885.52,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BRU",
    To:"JFK",
    Distance:5885.52,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"JFK",
    Distance:5885.52,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"JFK",
    Distance:5885.52,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"JMK",
    Distance:2224.28,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"KBP",
    Distance:1854.16,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"KBP",
    Distance:1854.16,
    Airport:"Ukraine International Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"KEF",
    Distance:2148.11,
    Airport:"Icelandair"
}),
new Routes(
{
    From:"BRU",
    To:"KGL",
    Distance:6362,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BRU",
    To:"KGL",
    Distance:6362,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"KGL",
    Distance:6362,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"KGL",
    Distance:6362,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"BRU",
    To:"KGL",
    Distance:6362,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"KGS",
    Distance:2379.99,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"LAD",
    Distance:6698.3,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BRU",
    To:"LAD",
    Distance:6698.3,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"LAD",
    Distance:6698.3,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"LAD",
    Distance:6698.3,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"LDE",
    Distance:923.259,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"LEI",
    Distance:1655.09,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"LGW",
    Distance:328.042,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRU",
    To:"LHR",
    Distance:350.511,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"LHR",
    Distance:350.511,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BRU",
    To:"LHR",
    Distance:350.511,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"LIN",
    Distance:702.773,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BRU",
    To:"LIN",
    Distance:702.773,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"LIN",
    Distance:702.773,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"LIN",
    Distance:702.773,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BRU",
    To:"LIS",
    Distance:1717.47,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"LIS",
    Distance:1717.47,
    Airport:"Finnair"
}),
new Routes(
{
    From:"BRU",
    To:"LIS",
    Distance:1717.47,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"LIS",
    Distance:1717.47,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"LIS",
    Distance:1717.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRU",
    To:"LIS",
    Distance:1717.47,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"BRU",
    To:"LIS",
    Distance:1717.47,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BRU",
    To:"LIS",
    Distance:1717.47,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BRU",
    To:"LJU",
    Distance:898.309,
    Airport:"Adria Airways"
}),
new Routes(
{
    From:"BRU",
    To:"LJU",
    Distance:898.309,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"LPA",
    Distance:3050.58,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"LYS",
    Distance:577.173,
    Airport:"Air France"
}),
new Routes(
{
    From:"BRU",
    To:"LYS",
    Distance:577.173,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BRU",
    To:"LYS",
    Distance:577.173,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"LYS",
    Distance:577.173,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRU",
    To:"MAD",
    Distance:1313.59,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"BRU",
    To:"MAD",
    Distance:1313.59,
    Airport:"Air Europa"
}),
new Routes(
{
    From:"BRU",
    To:"MAD",
    Distance:1313.59,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"MAD",
    Distance:1313.59,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"MAD",
    Distance:1313.59,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"MAH",
    Distance:1227.63,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"MAN",
    Distance:535.647,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"MAN",
    Distance:535.647,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"MIR",
    Distance:1756.98,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"BRU",
    To:"MLA",
    Distance:1853.62,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"BRU",
    To:"MLA",
    Distance:1853.62,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"MRS",
    Distance:831.979,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"MUC",
    Distance:596.977,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"MUC",
    Distance:596.977,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"MXP",
    Distance:664.684,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"MXP",
    Distance:664.684,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"MXP",
    Distance:664.684,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"MXP",
    Distance:664.684,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRU",
    To:"NAP",
    Distance:1345.1,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"NAP",
    Distance:1345.1,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRU",
    To:"NBE",
    Distance:1715.66,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"NCE",
    Distance:831.166,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"NCE",
    Distance:831.166,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRU",
    To:"NCL",
    Distance:618.067,
    Airport:"Air Sicilia"
}),
new Routes(
{
    From:"BRU",
    To:"NCL",
    Distance:618.067,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"NDR",
    Distance:1869.69,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"BRU",
    To:"NDR",
    Distance:1869.69,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BRU",
    To:"NSI",
    Distance:5287.47,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"NSI",
    Distance:5287.47,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"NSI",
    Distance:5287.47,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BRU",
    To:"NSI",
    Distance:5287.47,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"NTE",
    Distance:608.886,
    Airport:"Air France"
}),
new Routes(
{
    From:"BRU",
    To:"NTE",
    Distance:608.886,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BRU",
    To:"OPO",
    Distance:1473.4,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"OPO",
    Distance:1473.4,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"OPO",
    Distance:1473.4,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"OPO",
    Distance:1473.4,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRU",
    To:"OPO",
    Distance:1473.4,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"BRU",
    To:"ORD",
    Distance:6675.18,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"ORD",
    Distance:6675.18,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"ORK",
    Distance:905.525,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BRU",
    To:"OSL",
    Distance:1112.63,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"OSL",
    Distance:1112.63,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BRU",
    To:"OTP",
    Distance:1754.84,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"OTP",
    Distance:1754.84,
    Airport:"Tarom"
}),
new Routes(
{
    From:"BRU",
    To:"OUA",
    Distance:4320.71,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BRU",
    To:"OUA",
    Distance:4320.71,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"OUA",
    Distance:4320.71,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"OUA",
    Distance:4320.71,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"OUD",
    Distance:1864.67,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BRU",
    To:"PEK",
    Distance:7944.91,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"PEK",
    Distance:7944.91,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"PFO",
    Distance:2877.99,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"PHL",
    Distance:6035.51,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"PHL",
    Distance:6035.51,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BRU",
    To:"PMI",
    Distance:1269.19,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"PMI",
    Distance:1269.19,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"PMI",
    Distance:1269.19,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"PMI",
    Distance:1269.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRU",
    To:"PMO",
    Distance:1568.32,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"PRG",
    Distance:696.577,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"PRG",
    Distance:696.577,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"PRG",
    Distance:696.577,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"BRU",
    To:"PRG",
    Distance:696.577,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"RAK",
    Distance:2379.52,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"RAK",
    Distance:2379.52,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"RAK",
    Distance:2379.52,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BRU",
    To:"REU",
    Distance:1114.12,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"RHO",
    Distance:2471.29,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"RIX",
    Distance:1434.28,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"BRU",
    To:"RIX",
    Distance:1434.28,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"SAW",
    Distance:2204.11,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"SCQ",
    Distance:1320.53,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"SCQ",
    Distance:1320.53,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"SOF",
    Distance:1697.51,
    Airport:"Bulgaria Air"
}),
new Routes(
{
    From:"BRU",
    To:"STR",
    Distance:419.514,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BRU",
    To:"SVO",
    Distance:2229.62,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"SVQ",
    Distance:1708.83,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"SXB",
    Distance:346.523,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"SXB",
    Distance:346.523,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"SXF",
    Distance:644.511,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRU",
    To:"TFS",
    Distance:3094.92,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"TIV",
    Distance:1435.64,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"TLL",
    Distance:1591.54,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"TLL",
    Distance:1591.54,
    Airport:"Estonian Air"
}),
new Routes(
{
    From:"BRU",
    To:"TLS",
    Distance:842.027,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"TLS",
    Distance:842.027,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BRU",
    To:"TLV",
    Distance:3250.98,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"TLV",
    Distance:3250.98,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"TNG",
    Distance:1881.24,
    Airport:"Air Arabia Maroc"
}),
new Routes(
{
    From:"BRU",
    To:"TNG",
    Distance:1881.24,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BRU",
    To:"TRN",
    Distance:675.968,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"TSF",
    Distance:815.714,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRU",
    To:"TUN",
    Distance:1627.46,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"BRU",
    To:"TXL",
    Distance:633.23,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"TXL",
    Distance:633.23,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"TXL",
    Distance:633.23,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"VAR",
    Distance:1951.5,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRU",
    To:"VCE",
    Distance:835.759,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"VCE",
    Distance:835.759,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"VCE",
    Distance:835.759,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"VIE",
    Distance:924.887,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"VIE",
    Distance:924.887,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"VLC",
    Distance:1326.51,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"VLC",
    Distance:1326.51,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"VLC",
    Distance:1326.51,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BRU",
    To:"VNO",
    Distance:1453.57,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"BRU",
    To:"VNO",
    Distance:1453.57,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"VNO",
    Distance:1453.57,
    Airport:"LTU International"
}),
new Routes(
{
    From:"BRU",
    To:"VNO",
    Distance:1453.57,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"WAW",
    Distance:1146.2,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"WRO",
    Distance:867.039,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"BRU",
    To:"YUL",
    Distance:5553.84,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BRU",
    To:"YUL",
    Distance:5553.84,
    Airport:"Air Transat"
}),
new Routes(
{
    From:"BRU",
    To:"YUL",
    Distance:5553.84,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"YUL",
    Distance:5553.84,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BRU",
    To:"YYZ",
    Distance:6044.4,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BRU",
    To:"YYZ",
    Distance:6044.4,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BRU",
    To:"YYZ",
    Distance:6044.4,
    Airport:"Jet Airways"
}),
new Routes(
{
    From:"BRU",
    To:"ZAG",
    Distance:1029.02,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"ZAG",
    Distance:1029.02,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"ZRH",
    Distance:482.865,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BRU",
    To:"ZRH",
    Distance:482.865,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BRU",
    To:"ZTH",
    Distance:1950.75,
    Airport:"Harmony Airways"
}),
new Routes(
{
    From:"BRW",
    To:"AIN",
    Distance:137.441,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BRW",
    To:"ANC",
    Distance:1162.79,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BRW",
    To:"ATK",
    Distance:94.1894,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BRW",
    To:"FAI",
    Distance:807.279,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BRW",
    To:"NUI",
    Distance:242.569,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BRW",
    To:"PIZ",
    Distance:288.549,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BRW",
    To:"SCC",
    Distance:327.396,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BSA",
    To:"BBO",
    Distance:470.038,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BSA",
    To:"GLK",
    Distance:533.272,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BSB",
    To:"AJU",
    Distance:1292.57,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"ATL",
    Distance:6729.01,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BSB",
    To:"AUX",
    Distance:961.671,
    Airport:"Azul"
}),
new Routes(
{
    From:"BSB",
    To:"BEL",
    Distance:1612.58,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"BEL",
    Distance:1612.58,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"BRA",
    Distance:525.859,
    Airport:"Azul"
}),
new Routes(
{
    From:"BSB",
    To:"BRA",
    Distance:525.859,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"BRA",
    Distance:525.859,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"BSB",
    To:"CDG",
    Distance:8756.36,
    Airport:"Air France"
}),
new Routes(
{
    From:"BSB",
    To:"CGB",
    Distance:877.589,
    Airport:"Azul"
}),
new Routes(
{
    From:"BSB",
    To:"CGB",
    Distance:877.589,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"CGB",
    Distance:877.589,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"CGB",
    Distance:877.589,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"CGH",
    Distance:872.436,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"CGH",
    Distance:872.436,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"CGH",
    Distance:872.436,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"CGR",
    Distance:877.545,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"CGR",
    Distance:877.545,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"CGR",
    Distance:877.545,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"CNF",
    Distance:591.539,
    Airport:"Azul"
}),
new Routes(
{
    From:"BSB",
    To:"CNF",
    Distance:591.539,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"CNF",
    Distance:591.539,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"CNF",
    Distance:591.539,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"CWB",
    Distance:1081.76,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"CWB",
    Distance:1081.76,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"CWB",
    Distance:1081.76,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"EZE",
    Distance:2358.15,
    Airport:"Aerolineas Argentinas"
}),
new Routes(
{
    From:"BSB",
    To:"FLN",
    Distance:1313.63,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"FLN",
    Distance:1313.63,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"FOR",
    Distance:1691.72,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"FOR",
    Distance:1691.72,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"FOR",
    Distance:1691.72,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"GIG",
    Distance:913.95,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"GIG",
    Distance:913.95,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"GIG",
    Distance:913.95,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"GRU",
    Distance:854.3,
    Airport:"Azul"
}),
new Routes(
{
    From:"BSB",
    To:"GRU",
    Distance:854.3,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"GRU",
    Distance:854.3,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"GRU",
    Distance:854.3,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"GYN",
    Distance:162.724,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"GYN",
    Distance:162.724,
    Airport:"Shuttle America"
}),
new Routes(
{
    From:"BSB",
    To:"GYN",
    Distance:162.724,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"IMP",
    Distance:1150.82,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"IMP",
    Distance:1150.82,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"IOS",
    Distance:959.912,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"JDO",
    Distance:1345.88,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"JPA",
    Distance:1712.47,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"JPA",
    Distance:1712.47,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"JPA",
    Distance:1712.47,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"LIS",
    Distance:7293.59,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"BSB",
    To:"MAB",
    Distance:1175.38,
    Airport:"Azul"
}),
new Routes(
{
    From:"BSB",
    To:"MAB",
    Distance:1175.38,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"MAB",
    Distance:1175.38,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"MAO",
    Distance:1948.93,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"MAO",
    Distance:1948.93,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"MCZ",
    Distance:1492.78,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"MCZ",
    Distance:1492.78,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"MCZ",
    Distance:1492.78,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"MIA",
    Distance:5807.98,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"MIA",
    Distance:5807.98,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"MIA",
    Distance:5807.98,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BSB",
    To:"NAT",
    Distance:1770.62,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"NAT",
    Distance:1770.62,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"NAT",
    Distance:1770.62,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"OPS",
    Distance:938.687,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"PMW",
    Distance:627.727,
    Airport:"Azul"
}),
new Routes(
{
    From:"BSB",
    To:"PMW",
    Distance:627.727,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"PMW",
    Distance:627.727,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"PNZ",
    Distance:1076.55,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"POA",
    Distance:1605.11,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"POA",
    Distance:1605.11,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"PTY",
    Distance:4437.66,
    Airport:"Copa Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"PVH",
    Distance:1909.05,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"PVH",
    Distance:1909.05,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"RAO",
    Distance:585.424,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"RAO",
    Distance:585.424,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"BSB",
    To:"RBR",
    Distance:2232.65,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"RBR",
    Distance:2232.65,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"REC",
    Distance:1653.97,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"REC",
    Distance:1653.97,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"REC",
    Distance:1653.97,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"SDU",
    Distance:927.918,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"SDU",
    Distance:927.918,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"SDU",
    Distance:927.918,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"SJP",
    Distance:571.876,
    Airport:"Marusya Airways"
}),
new Routes(
{
    From:"BSB",
    To:"SLZ",
    Distance:1531.4,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"SLZ",
    Distance:1531.4,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"SSA",
    Distance:1083.62,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"SSA",
    Distance:1083.62,
    Airport:"Oceanair"
}),
new Routes(
{
    From:"BSB",
    To:"SSA",
    Distance:1083.62,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"THE",
    Distance:1324.58,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"THE",
    Distance:1324.58,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"UDI",
    Distance:336.471,
    Airport:"Azul"
}),
new Routes(
{
    From:"BSB",
    To:"UDI",
    Distance:336.471,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"VCP",
    Distance:797.773,
    Airport:"Azul"
}),
new Routes(
{
    From:"BSB",
    To:"VCP",
    Distance:797.773,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"VCP",
    Distance:797.773,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSB",
    To:"VIX",
    Distance:942.562,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BSC",
    To:"EOH",
    Distance:199.444,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BSD",
    To:"KMG",
    Distance:360.284,
    Airport:"China Eastern Airlines"
}),
new Routes(
{
    From:"BSD",
    To:"KMG",
    Distance:360.284,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"BSG",
    To:"COO",
    Distance:960.276,
    Airport:"Chicago Express"
}),
new Routes(
{
    From:"BSG",
    To:"SSG",
    Distance:239.057,
    Airport:"Chicago Express"
}),
new Routes(
{
    From:"BSK",
    To:"ALG",
    Distance:310.412,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BSK",
    To:"LYS",
    Distance:1216.93,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BSK",
    To:"ORY",
    Distance:1573.89,
    Airport:"Aigle Azur"
}),
new Routes(
{
    From:"BSK",
    To:"ORY",
    Distance:1573.89,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"BSL",
    To:"ADB",
    Distance:1894.65,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"BSL",
    To:"ADB",
    Distance:1894.65,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"BSL",
    To:"AGP",
    Distance:1563.64,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"AJA",
    Distance:638.022,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"ALC",
    Distance:1225.1,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"AMS",
    Distance:560.644,
    Airport:"Air France"
}),
new Routes(
{
    From:"BSL",
    To:"AMS",
    Distance:560.644,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BSL",
    To:"AMS",
    Distance:560.644,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"AYT",
    Distance:2241.16,
    Airport:"SunExpress"
}),
new Routes(
{
    From:"BSL",
    To:"AYT",
    Distance:2241.16,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"BCN",
    Distance:822.239,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BSL",
    To:"BCN",
    Distance:822.239,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"BDS",
    Distance:1132.05,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"BOD",
    Distance:704.35,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"BRU",
    Distance:429.362,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BSL",
    To:"BRU",
    Distance:429.362,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BSL",
    To:"BRU",
    Distance:429.362,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"BUD",
    Distance:880.015,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"CAG",
    Distance:935.295,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"CDG",
    Distance:400.741,
    Airport:"Air France"
}),
new Routes(
{
    From:"BSL",
    To:"CDG",
    Distance:400.741,
    Airport:"Air Mauritius"
}),
new Routes(
{
    From:"BSL",
    To:"CDG",
    Distance:400.741,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BSL",
    To:"CPH",
    Distance:959.675,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"CTA",
    Distance:1282.5,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BSL",
    To:"CTA",
    Distance:1282.5,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"BSL",
    To:"CTA",
    Distance:1282.5,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"DJE",
    Distance:1549,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"BSL",
    To:"DRS",
    Distance:599.018,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"DUB",
    Distance:1168.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BSL",
    To:"DUS",
    Distance:415.031,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BSL",
    To:"EDI",
    Distance:1191.62,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"FAO",
    Distance:1728.05,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"FCO",
    Distance:743.396,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BSL",
    To:"FCO",
    Distance:743.396,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"FNC",
    Distance:2628.17,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"BSL",
    To:"FRA",
    Distance:280.902,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BSL",
    To:"FRA",
    Distance:280.902,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BSL",
    To:"FRA",
    Distance:280.902,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BSL",
    To:"FUE",
    Distance:2816.24,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"BSL",
    To:"FUE",
    Distance:2816.24,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"HAM",
    Distance:693.601,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BSL",
    To:"HAM",
    Distance:693.601,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BSL",
    To:"HAM",
    Distance:693.601,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"HER",
    Distance:1995.89,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BSL",
    To:"HER",
    Distance:1995.89,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"BSL",
    To:"HRG",
    Distance:3216.44,
    Airport:"Belair Airlines"
}),
new Routes(
{
    From:"BSL",
    To:"IBZ",
    Distance:1089.23,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BSL",
    To:"IST",
    Distance:1839.37,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BSL",
    To:"KEF",
    Distance:2576.1,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"KGS",
    Distance:2000.14,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"BSL",
    To:"KRK",
    Distance:937.459,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"LCA",
    Distance:2580.71,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"LCY",
    Distance:692.43,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BSL",
    To:"LGW",
    Distance:684.234,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"LHR",
    Distance:720.006,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BSL",
    To:"LHR",
    Distance:720.006,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BSL",
    To:"LHR",
    Distance:720.006,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BSL",
    To:"LIS",
    Distance:1663.08,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"LPA",
    Distance:2950.15,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BSL",
    To:"LPA",
    Distance:2950.15,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"BSL",
    To:"LPA",
    Distance:2950.15,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"MAD",
    Distance:1185.01,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"MAN",
    Distance:943.016,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"MPL",
    Distance:525.429,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"MUC",
    Distance:328.037,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BSL",
    To:"MUC",
    Distance:328.037,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BSL",
    To:"MUC",
    Distance:328.037,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BSL",
    To:"NAP",
    Distance:918.921,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"NCE",
    Distance:437.85,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"NTE",
    Distance:689.596,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"OLB",
    Distance:760.643,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"OPO",
    Distance:1463.83,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"PMI",
    Distance:973.241,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BSL",
    To:"PMI",
    Distance:973.241,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"BSL",
    To:"PMI",
    Distance:973.241,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"PRG",
    Distance:565.857,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BSL",
    To:"PRN",
    Distance:1195.97,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"RAK",
    Distance:2212.99,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"RHO",
    Distance:2094.54,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"BSL",
    To:"SAW",
    Distance:1879.55,
    Airport:"Pegasus Airlines"
}),
new Routes(
{
    From:"BSL",
    To:"SCQ",
    Distance:1349.84,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"SKG",
    Distance:1459.11,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"SPU",
    Distance:817.092,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"STN",
    Distance:708.503,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BSL",
    To:"SVQ",
    Distance:1573.61,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"SXF",
    Distance:683.114,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"TFS",
    Distance:3009.58,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BSL",
    To:"TFS",
    Distance:3009.58,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"BSL",
    To:"TFS",
    Distance:3009.58,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"TLS",
    Distance:650.757,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"TLV",
    Distance:2883.68,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"VCE",
    Distance:435.495,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BSL",
    To:"VIE",
    Distance:676.686,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"BSL",
    To:"VIE",
    Distance:676.686,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BSL",
    To:"ZQW",
    Distance:180.321,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"BSO",
    To:"MNL",
    Distance:668.589,
    Airport:"Air Philippines"
}),
new Routes(
{
    From:"BSO",
    To:"MNL",
    Distance:668.589,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"BSR",
    To:"AMM",
    Distance:1117.7,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"BSR",
    To:"AUH",
    Distance:967.895,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BSR",
    To:"BEY",
    Distance:1201.12,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"BSR",
    To:"DOH",
    Distance:701.869,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BSR",
    To:"DXB",
    Distance:958.533,
    Airport:"Emirates"
}),
new Routes(
{
    From:"BSR",
    To:"DXB",
    Distance:958.533,
    Airport:"Fly Dubai"
}),
new Routes(
{
    From:"BSR",
    To:"IST",
    Distance:2051.11,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BSR",
    To:"SHJ",
    Distance:965.106,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"BTH",
    To:"BDO",
    Distance:970.977,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BTH",
    To:"BKS",
    Distance:588.505,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BTH",
    To:"BPN",
    Distance:1445.12,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BTH",
    To:"CGK",
    Distance:853.593,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"BTH",
    To:"CGK",
    Distance:853.593,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BTH",
    To:"CGK",
    Distance:853.593,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BTH",
    To:"CGK",
    Distance:853.593,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"BTH",
    To:"DJB",
    Distance:311.292,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BTH",
    To:"DJB",
    Distance:311.292,
    Airport:"Sriwijaya Air"
}),
new Routes(
{
    From:"BTH",
    To:"DPS",
    Distance:1644.11,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BTH",
    To:"JOG",
    Distance:1213.06,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BTH",
    To:"NTX",
    Distance:566.528,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BTH",
    To:"PDG",
    Distance:474.008,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"BTH",
    To:"PDG",
    Distance:474.008,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BTH",
    To:"PGK",
    Distance:428.639,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BTH",
    To:"PKU",
    Distance:306.259,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"BTH",
    To:"PKU",
    Distance:306.259,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BTH",
    To:"PLM",
    Distance:451.568,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"BTH",
    To:"PLM",
    Distance:451.568,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BTH",
    To:"PNK",
    Distance:604.423,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BTH",
    To:"SRG",
    Distance:1136.42,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BTH",
    To:"SUB",
    Distance:1348.34,
    Airport:"Citilink Indonesia"
}),
new Routes(
{
    From:"BTH",
    To:"SUB",
    Distance:1348.34,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BTH",
    To:"SZB",
    Distance:362.544,
    Airport:"Firefly"
}),
new Routes(
{
    From:"BTH",
    To:"SZB",
    Distance:362.544,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BTH",
    To:"TKG",
    Distance:717.305,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BTH",
    To:"TKG",
    Distance:717.305,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BTI",
    To:"FYU",
    Distance:401.963,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BTI",
    To:"SCC",
    Distance:184.326,
    Airport:"Era Alaska"
}),
new Routes(
{
    From:"BTJ",
    To:"CGK",
    Distance:1798.13,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BTJ",
    To:"CGK",
    Distance:1798.13,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BTJ",
    To:"KUL",
    Distance:762.814,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BTJ",
    To:"PEN",
    Distance:538.199,
    Airport:"Firefly"
}),
new Routes(
{
    From:"BTJ",
    To:"PEN",
    Distance:538.199,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BTK",
    To:"DME",
    Distance:3834.28,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"BTK",
    To:"IKT",
    Distance:488.324,
    Airport:"Cargoitalia"
}),
new Routes(
{
    From:"BTK",
    To:"OVB",
    Distance:1199.38,
    Airport:"Cargoitalia"
}),
new Routes(
{
    From:"BTK",
    To:"VKO",
    Distance:3860.15,
    Airport:"Aircompany Yakutia"
}),
new Routes(
{
    From:"BTM",
    To:"SLC",
    Distance:576.009,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BTR",
    To:"ATL",
    Distance:720.938,
    Airport:"Air France"
}),
new Routes(
{
    From:"BTR",
    To:"ATL",
    Distance:720.938,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BTR",
    To:"ATL",
    Distance:720.938,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BTR",
    To:"CLT",
    Distance:1085.17,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BTR",
    To:"CLT",
    Distance:1085.17,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BTR",
    To:"DFW",
    Distance:615.742,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BTR",
    To:"DFW",
    Distance:615.742,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BTR",
    To:"IAH",
    Distance:407.176,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BTS",
    To:"AGP",
    Distance:2180.63,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BTS",
    To:"AHO",
    Distance:1096.19,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BTS",
    To:"BGY",
    Distance:633.829,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BTS",
    To:"BHX",
    Distance:1423.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BTS",
    To:"BVA",
    Distance:1112.96,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BTS",
    To:"CIA",
    Distance:795.706,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BTS",
    To:"CRL",
    Distance:957.892,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BTS",
    To:"DUB",
    Distance:1741.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BTS",
    To:"EDI",
    Distance:1642.45,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BTS",
    To:"GRO",
    Distance:1329.28,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BTS",
    To:"KSC",
    Distance:302.275,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"BTS",
    To:"LPL",
    Distance:1517.26,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BTS",
    To:"LTN",
    Distance:1317.98,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BTS",
    To:"OSL",
    Distance:1393.44,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BTS",
    To:"PMI",
    Distance:1501.18,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BTS",
    To:"PRG",
    Distance:303.651,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"BTS",
    To:"PRG",
    Distance:303.651,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BTS",
    To:"PRG",
    Distance:303.651,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"BTS",
    To:"STN",
    Distance:1277.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BTS",
    To:"TPS",
    Distance:1203,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BTT",
    To:"AET",
    Distance:62.6573,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"BTT",
    To:"AKP",
    Distance:135.924,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"BTT",
    To:"FAI",
    Distance:286.87,
    Airport:"Astral Aviation"
}),
new Routes(
{
    From:"BTU",
    To:"BKI",
    Distance:459.021,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BTU",
    To:"KCH",
    Distance:348.496,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BTU",
    To:"KCH",
    Distance:348.496,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BTU",
    To:"KUL",
    Distance:1256.72,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BTU",
    To:"KUL",
    Distance:1256.72,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BTU",
    To:"MYY",
    Distance:171.017,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BTU",
    To:"SBW",
    Distance:149.706,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BTV",
    To:"ATL",
    Distance:1545.88,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BTV",
    To:"ATL",
    Distance:1545.88,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BTV",
    To:"DCA",
    Distance:703.076,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BTV",
    To:"DCA",
    Distance:703.076,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BTV",
    To:"DTW",
    Distance:861.6,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BTV",
    To:"EWR",
    Distance:428.379,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BTV",
    To:"IAD",
    Distance:710.598,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BTV",
    To:"JFK",
    Distance:429.178,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BTV",
    To:"LGA",
    Distance:415.012,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BTV",
    To:"ORD",
    Distance:1225.12,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BTV",
    To:"PHL",
    Distance:539.6,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BTV",
    To:"PHL",
    Distance:539.6,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BTV",
    To:"SFB",
    Distance:1885.98,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BUA",
    To:"LNV",
    Distance:348.323,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"BUA",
    To:"POM",
    Distance:935.367,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"BUA",
    To:"RAB",
    Distance:281.084,
    Airport:"Air Niugini"
}),
new Routes(
{
    From:"BUA",
    To:"RAB",
    Distance:281.084,
    Airport:"Airlines PNG"
}),
new Routes(
{
    From:"BUC",
    To:"DMD",
    Distance:78.3186,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"BUC",
    To:"ONG",
    Distance:126.55,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"BUD",
    To:"AGP",
    Distance:2283.54,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"AMS",
    Distance:1168.43,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BUD",
    To:"ARN",
    Distance:1361.05,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BUD",
    To:"ATH",
    Distance:1123.24,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"BUD",
    To:"BCN",
    Distance:1522.08,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BUD",
    To:"BCN",
    Distance:1522.08,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"BEG",
    Distance:302.263,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"BUD",
    To:"BEG",
    Distance:302.263,
    Airport:"Jat Airways"
}),
new Routes(
{
    From:"BUD",
    To:"BGY",
    Distance:755.637,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BUD",
    To:"BLL",
    Distance:1155,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BUD",
    To:"BRI",
    Distance:727.822,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"BRS",
    Distance:1642.28,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BUD",
    To:"BRU",
    Distance:1138.52,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"BUD",
    To:"BSL",
    Distance:880.015,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BUD",
    To:"BVA",
    Distance:1281.26,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BUD",
    To:"CAI",
    Distance:2188.51,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"BUD",
    To:"CDG",
    Distance:1247.27,
    Airport:"Air France"
}),
new Routes(
{
    From:"BUD",
    To:"CDG",
    Distance:1247.27,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BUD",
    To:"CGN",
    Distance:958.453,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BUD",
    To:"CIA",
    Distance:818.446,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BUD",
    To:"CPH",
    Distance:1016.75,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BUD",
    To:"CPH",
    Distance:1016.75,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BUD",
    To:"CRL",
    Distance:1129.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BUD",
    To:"CRL",
    Distance:1129.73,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"CTA",
    Distance:1160.22,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"DOH",
    Distance:3754.55,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BUD",
    To:"DTM",
    Distance:954.287,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"DUB",
    Distance:1914.11,
    Airport:"Aer Lingus"
}),
new Routes(
{
    From:"BUD",
    To:"DUB",
    Distance:1914.11,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BUD",
    To:"DUS",
    Distance:999.012,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BUD",
    To:"DWC",
    Distance:4049.19,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"EDI",
    Distance:1811.96,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BUD",
    To:"EIN",
    Distance:1096.07,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"EMA",
    Distance:1578,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BUD",
    To:"FCO",
    Distance:835.733,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BUD",
    To:"FCO",
    Distance:835.733,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"BUD",
    To:"FCO",
    Distance:835.733,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"FRA",
    Distance:835.866,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BUD",
    To:"FRA",
    Distance:835.866,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BUD",
    To:"FRA",
    Distance:835.866,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"BUD",
    To:"GSE",
    Distance:1251.29,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"GVA",
    Distance:1007.61,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BUD",
    To:"GYD",
    Distance:2564.49,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"HAM",
    Distance:948.938,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BUD",
    To:"HEL",
    Distance:1478.94,
    Airport:"Finnair"
}),
new Routes(
{
    From:"BUD",
    To:"HEL",
    Distance:1478.94,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BUD",
    To:"HHN",
    Distance:922.238,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"IEV",
    Distance:880.768,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"IST",
    Distance:1045.7,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BUD",
    To:"KRR",
    Distance:1550.37,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"BUD",
    To:"LBA",
    Distance:1630.53,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BUD",
    To:"LCA",
    Distance:1837.35,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"LGW",
    Distance:1464.43,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BUD",
    To:"LGW",
    Distance:1464.43,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BUD",
    To:"LHR",
    Distance:1488.93,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BUD",
    To:"LHR",
    Distance:1488.93,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BUD",
    To:"LHR",
    Distance:1488.93,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BUD",
    To:"LIS",
    Distance:2480,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"BUD",
    To:"LTN",
    Distance:1490.81,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"LTN",
    Distance:1490.81,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BUD",
    To:"MAD",
    Distance:1973.72,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BUD",
    To:"MAD",
    Distance:1973.72,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"MAN",
    Distance:1653.69,
    Airport:"Jet2.com"
}),
new Routes(
{
    From:"BUD",
    To:"MAN",
    Distance:1653.69,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BUD",
    To:"MLA",
    Distance:1346.7,
    Airport:"Air Malta"
}),
new Routes(
{
    From:"BUD",
    To:"MLA",
    Distance:1346.7,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"MMX",
    Distance:987.017,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"MSQ",
    Distance:945.319,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"BUD",
    To:"MUC",
    Distance:565.901,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"BUD",
    To:"MXP",
    Distance:829.239,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"NAP",
    Distance:828.703,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"NYO",
    Distance:1271.7,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"ORY",
    Distance:1260.68,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BUD",
    To:"OSL",
    Distance:1513.49,
    Airport:"Norwegian Air Shuttle"
}),
new Routes(
{
    From:"BUD",
    To:"OTP",
    Distance:617,
    Airport:"Tarom"
}),
new Routes(
{
    From:"BUD",
    To:"PRG",
    Distance:470.763,
    Airport:"Czech Airlines"
}),
new Routes(
{
    From:"BUD",
    To:"PRG",
    Distance:470.763,
    Airport:"Travel Service"
}),
new Routes(
{
    From:"BUD",
    To:"PSA",
    Distance:805.653,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BUD",
    To:"RIX",
    Distance:1102.12,
    Airport:"Air Baltic"
}),
new Routes(
{
    From:"BUD",
    To:"ROV",
    Distance:1544.78,
    Airport:"Ural Airlines"
}),
new Routes(
{
    From:"BUD",
    To:"RTM",
    Distance:1175.5,
    Airport:"Transavia Holland"
}),
new Routes(
{
    From:"BUD",
    To:"SAW",
    Distance:1080.79,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"SKG",
    Distance:824.356,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"STN",
    Distance:1450.54,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BUD",
    To:"STR",
    Distance:757.94,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"BUD",
    To:"SVO",
    Distance:1562.61,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"BUD",
    To:"SXF",
    Distance:685.588,
    Airport:"easyJet"
}),
new Routes(
{
    From:"BUD",
    To:"TLV",
    Distance:2165.94,
    Airport:"El Al Israel Airlines"
}),
new Routes(
{
    From:"BUD",
    To:"TLV",
    Distance:2165.94,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"TMP",
    Distance:1578.59,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BUD",
    To:"TSF",
    Distance:575.245,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BUD",
    To:"TXL",
    Distance:711.124,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"BUD",
    To:"VIE",
    Distance:214.21,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"BUD",
    To:"VKO",
    Distance:1533.56,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"WAW",
    Distance:539.936,
    Airport:"LOT Polish Airlines"
}),
new Routes(
{
    From:"BUD",
    To:"WAW",
    Distance:539.936,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BUD",
    To:"ZAG",
    Distance:307.825,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"BUD",
    To:"ZRH",
    Distance:804.413,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"BUF",
    To:"ATL",
    Distance:1147.06,
    Airport:"Air France"
}),
new Routes(
{
    From:"BUF",
    To:"ATL",
    Distance:1147.06,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BUF",
    To:"ATL",
    Distance:1147.06,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BUF",
    To:"ATL",
    Distance:1147.06,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BUF",
    To:"BOS",
    Distance:634.935,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BUF",
    To:"BOS",
    Distance:634.935,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BUF",
    To:"BOS",
    Distance:634.935,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BUF",
    To:"BWI",
    Distance:452.979,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BUF",
    To:"BWI",
    Distance:452.979,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BUF",
    To:"CLE",
    Distance:308.026,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BUF",
    To:"CLT",
    Distance:879.998,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BUF",
    To:"CLT",
    Distance:879.998,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BUF",
    To:"DCA",
    Distance:476.371,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BUF",
    To:"DCA",
    Distance:476.371,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BUF",
    To:"DTW",
    Distance:386.9,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BUF",
    To:"EWR",
    Distance:453.225,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BUF",
    To:"FLL",
    Distance:1880.06,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BUF",
    To:"FLL",
    Distance:1880.06,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BUF",
    To:"IAD",
    Distance:457.067,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BUF",
    To:"JFK",
    Distance:483.698,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BUF",
    To:"JFK",
    Distance:483.698,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BUF",
    To:"LAS",
    Distance:3189.48,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BUF",
    To:"LGA",
    Distance:468.746,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BUF",
    To:"MCO",
    Distance:1630.03,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BUF",
    To:"MCO",
    Distance:1630.03,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BUF",
    To:"MCO",
    Distance:1630.03,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BUF",
    To:"MDW",
    Distance:751.76,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BUF",
    To:"MDW",
    Distance:751.76,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BUF",
    To:"MSP",
    Distance:1178.94,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BUF",
    To:"ORD",
    Distance:759.646,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BUF",
    To:"ORD",
    Distance:759.646,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BUF",
    To:"ORD",
    Distance:759.646,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BUF",
    To:"PHL",
    Distance:448.46,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BUF",
    To:"PHL",
    Distance:448.46,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BUF",
    To:"PHX",
    Distance:3070.68,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BUF",
    To:"TPA",
    Distance:1698.77,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BUN",
    To:"BOG",
    Distance:330.133,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BUN",
    To:"BOG",
    Distance:330.133,
    Airport:"SATENA"
}),
new Routes(
{
    From:"BUQ",
    To:"HRE",
    Distance:348.571,
    Airport:"Air Zimbabwe"
}),
new Routes(
{
    From:"BUQ",
    To:"JNB",
    Distance:681.766,
    Airport:"Air Zimbabwe"
}),
new Routes(
{
    From:"BUQ",
    To:"JNB",
    Distance:681.766,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"BUQ",
    To:"VFA",
    Distance:361.857,
    Airport:"Air Zimbabwe"
}),
new Routes(
{
    From:"BUR",
    To:"DEN",
    Distance:1366.11,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BUR",
    To:"DEN",
    Distance:1366.11,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BUR",
    To:"IPL",
    Distance:299.151,
    Airport:"SeaPort Airlines"
}),
new Routes(
{
    From:"BUR",
    To:"JFK",
    Distance:3958.38,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BUR",
    To:"LAS",
    Distance:358.679,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BUR",
    To:"LAS",
    Distance:358.679,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BUR",
    To:"OAK",
    Distance:523.413,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BUR",
    To:"PDX",
    Distance:1316.4,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BUR",
    To:"PDX",
    Distance:1316.4,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BUR",
    To:"PHX",
    Distance:592.417,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BUR",
    To:"PHX",
    Distance:592.417,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BUR",
    To:"PHX",
    Distance:592.417,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BUR",
    To:"SEA",
    Distance:1509.65,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BUR",
    To:"SEA",
    Distance:1509.65,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BUR",
    To:"SFO",
    Distance:524.583,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BUR",
    To:"SJC",
    Distance:476.725,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BUR",
    To:"SLC",
    Distance:923.258,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BUR",
    To:"SMF",
    Distance:577.277,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BUS",
    To:"DME",
    Distance:1557.68,
    Airport:"Georgian Airways"
}),
new Routes(
{
    From:"BUS",
    To:"DME",
    Distance:1557.68,
    Airport:"S7 Airlines"
}),
new Routes(
{
    From:"BUS",
    To:"DNK",
    Distance:907.065,
    Airport:"ZABAIKAL AIRLINES"
}),
new Routes(
{
    From:"BUS",
    To:"IST",
    Distance:1069.47,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"BUS",
    To:"MSQ",
    Distance:1694.26,
    Airport:"Belavia Belarusian Airlines"
}),
new Routes(
{
    From:"BUS",
    To:"TBS",
    Distance:278.863,
    Airport:"Georgian Airways"
}),
new Routes(
{
    From:"BUX",
    To:"GOM",
    Distance:376.094,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"BUX",
    To:"IRP",
    Distance:324.422,
    Airport:"Baikotovitchestrian Airlines "
}),
new Routes(
{
    From:"BUZ",
    To:"DXB",
    Distance:607.827,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"BUZ",
    To:"MHD",
    Distance:1155.65,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"BUZ",
    To:"SYZ",
    Distance:182.668,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"BUZ",
    To:"THR",
    Distance:751.283,
    Airport:"Iran Air"
}),
new Routes(
{
    From:"BUZ",
    To:"THR",
    Distance:751.283,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"BVA",
    To:"ACE",
    Distance:2640.33,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"AGP",
    Distance:1517.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"AHO",
    Distance:1093.6,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"ALC",
    Distance:1260.4,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"BCN",
    Distance:907.062,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"BDS",
    Distance:1576.91,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"BEG",
    Distance:1465.26,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BVA",
    To:"BGY",
    Distance:707.351,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"BLQ",
    Distance:884.08,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"BRI",
    Distance:1467.89,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"BTS",
    Distance:1112.96,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"BUD",
    Distance:1281.26,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"BZR",
    Distance:688.314,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"CAG",
    Distance:1260.33,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"CIA",
    Distance:1176.4,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"CLJ",
    Distance:1622.83,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BVA",
    To:"DUB",
    Distance:728.734,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"FAO",
    Distance:1603.03,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"FEZ",
    Distance:1822.14,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"GDN",
    Distance:1244.14,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BVA",
    To:"GRO",
    Distance:841.405,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"GSE",
    Distance:1124.64,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"KIV",
    Distance:1996.91,
    Airport:"Air Moldova"
}),
new Routes(
{
    From:"BVA",
    To:"KRK",
    Distance:1268.16,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"KTW",
    Distance:1216.23,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BVA",
    To:"LIS",
    Distance:1484.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"MAD",
    Distance:1091.2,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"MAN",
    Distance:529.525,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"NDR",
    Distance:1662.27,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"NYO",
    Distance:1410.73,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"OPO",
    Distance:1240.21,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"OTP",
    Distance:1888.86,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BVA",
    To:"OUD",
    Distance:1663.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"PMI",
    Distance:1101.99,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"POZ",
    Distance:1080.24,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BVA",
    To:"PSA",
    Distance:900.283,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"PSR",
    Distance:1214.21,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"PUY",
    Distance:1024.99,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"RAK",
    Distance:2157.38,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"RBA",
    Distance:1860.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"RYG",
    Distance:1235.68,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"RZE",
    Distance:1426.84,
    Airport:"Eurolot"
}),
new Routes(
{
    From:"BVA",
    To:"SNN",
    Distance:850.268,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"SOF",
    Distance:1798.16,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BVA",
    To:"SVQ",
    Distance:1484.3,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"TFS",
    Distance:2862.47,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"TGM",
    Distance:1686.76,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BVA",
    To:"TNG",
    Distance:1659.64,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"TPS",
    Distance:1527.67,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"TRS",
    Distance:940.494,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"TSF",
    Distance:865.911,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"TSR",
    Distance:1491.86,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BVA",
    To:"VLC",
    Distance:1126.85,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"VNO",
    Distance:1676.88,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"VNO",
    Distance:1676.88,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BVA",
    To:"WAW",
    Distance:1354.46,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BVA",
    To:"WMI",
    Distance:1336.57,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"WRO",
    Distance:1063.76,
    Airport:"Wizz Air"
}),
new Routes(
{
    From:"BVA",
    To:"ZAD",
    Distance:1167.56,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVA",
    To:"ZAZ",
    Distance:899.938,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVB",
    To:"MAO",
    Distance:658.233,
    Airport:"Azul"
}),
new Routes(
{
    From:"BVB",
    To:"MAO",
    Distance:658.233,
    Airport:"City Connexion Airlines"
}),
new Routes(
{
    From:"BVB",
    To:"MAO",
    Distance:658.233,
    Airport:"TAM Brazilian Airlines"
}),
new Routes(
{
    From:"BVC",
    To:"BHX",
    Distance:4444.76,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"BVC",
    To:"BHX",
    Distance:4444.76,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BVC",
    To:"LGW",
    Distance:4384.79,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BVC",
    To:"LIS",
    Distance:2852.37,
    Airport:"TACV"
}),
new Routes(
{
    From:"BVC",
    To:"LIS",
    Distance:2852.37,
    Airport:"TAP Portugal"
}),
new Routes(
{
    From:"BVC",
    To:"MAN",
    Distance:4510.92,
    Airport:"Thomsonfly"
}),
new Routes(
{
    From:"BVC",
    To:"MAN",
    Distance:4510.92,
    Airport:"Transavia France"
}),
new Routes(
{
    From:"BVC",
    To:"SID",
    Distance:67.5664,
    Airport:"Luxair"
}),
new Routes(
{
    From:"BVC",
    To:"SID",
    Distance:67.5664,
    Airport:"TACV"
}),
new Routes(
{
    From:"BVC",
    To:"SID",
    Distance:67.5664,
    Airport:"TUIfly"
}),
new Routes(
{
    From:"BVC",
    To:"SID",
    Distance:67.5664,
    Airport:"XL Airways France"
}),
new Routes(
{
    From:"BVE",
    To:"AJA",
    Distance:691.139,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BVE",
    To:"LCY",
    Distance:714.234,
    Airport:"Air France"
}),
new Routes(
{
    From:"BVE",
    To:"LCY",
    Distance:714.234,
    Airport:"CityJet"
}),
new Routes(
{
    From:"BVE",
    To:"ORY",
    Distance:403.158,
    Airport:"Airlinair"
}),
new Routes(
{
    From:"BVE",
    To:"STN",
    Distance:754.272,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BVG",
    To:"BJF",
    Distance:39.0248,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BVG",
    To:"HFT",
    Distance:196.251,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BVG",
    To:"MEH",
    Distance:46.2858,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BVG",
    To:"VDS",
    Distance:94.5011,
    Airport:"Widerøe"
}),
new Routes(
{
    From:"BVH",
    To:"CGB",
    Distance:540.766,
    Airport:"Azul"
}),
new Routes(
{
    From:"BVI",
    To:"BEU",
    Distance:172.876,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"BVI",
    To:"WNR",
    Distance:336.995,
    Airport:"Aero Condor Peru"
}),
new Routes(
{
    From:"BVV",
    To:"UUS",
    Distance:437.957,
    Airport:"Sat Airlines"
}),
new Routes(
{
    From:"BWA",
    To:"KTM",
    Distance:192.62,
    Airport:"Yeti Airways"
}),
new Routes(
{
    From:"BWI",
    To:"ABQ",
    Distance:2682.06,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"ABQ",
    Distance:2682.06,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"ALB",
    Distance:464.448,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"ALB",
    Distance:464.448,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"ATL",
    Distance:927.522,
    Airport:"AeroMéxico"
}),
new Routes(
{
    From:"BWI",
    To:"ATL",
    Distance:927.522,
    Airport:"Air France"
}),
new Routes(
{
    From:"BWI",
    To:"ATL",
    Distance:927.522,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"ATL",
    Distance:927.522,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BWI",
    To:"ATL",
    Distance:927.522,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BWI",
    To:"ATL",
    Distance:927.522,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"ATL",
    Distance:927.522,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"AUA",
    Distance:3037.55,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"AUS",
    Distance:2157.03,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"AUS",
    Distance:2157.03,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"BDL",
    Distance:455.722,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"BDL",
    Distance:455.722,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"BHM",
    Distance:1096.54,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"BNA",
    Distance:943.642,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"BNA",
    Distance:943.642,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"BOS",
    Distance:594.064,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"BOS",
    Distance:594.064,
    Airport:"JetBlue Airways"
}),
new Routes(
{
    From:"BWI",
    To:"BOS",
    Distance:594.064,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"BUF",
    Distance:452.979,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"BUF",
    Distance:452.979,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"CHS",
    Distance:760.796,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"CLE",
    Distance:504.801,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"CLE",
    Distance:504.801,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"CLE",
    Distance:504.801,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"CLT",
    Distance:580.705,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"CLT",
    Distance:580.705,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"CLT",
    Distance:580.705,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"CLT",
    Distance:580.705,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BWI",
    To:"CMH",
    Distance:540.988,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"CMH",
    Distance:540.988,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"CUN",
    Distance:2239.54,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"CVG",
    Distance:690.097,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BWI",
    To:"DAY",
    Distance:652.348,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"DAY",
    Distance:652.348,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"DEN",
    Distance:2393.56,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"DEN",
    Distance:2393.56,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"DEN",
    Distance:2393.56,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"DFW",
    Distance:1954.76,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"DFW",
    Distance:1954.76,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"DFW",
    Distance:1954.76,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BWI",
    To:"DTW",
    Distance:656.739,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"DTW",
    Distance:656.739,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BWI",
    To:"DTW",
    Distance:656.739,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"ECP",
    Distance:1287.04,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"EWR",
    Distance:271.793,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"FLL",
    Distance:1492.71,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"FLL",
    Distance:1492.71,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"FLL",
    Distance:1492.71,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"FNT",
    Distance:727.179,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"FNT",
    Distance:727.179,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"FPO",
    Distance:1415.51,
    Airport:"Bahamasair"
}),
new Routes(
{
    From:"BWI",
    To:"GRR",
    Distance:848.73,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"GSP",
    Distance:684.716,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"HOU",
    Distance:2003.31,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"IAH",
    Distance:1985.79,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"IND",
    Distance:828.352,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"IND",
    Distance:828.352,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"ISP",
    Distance:353.31,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"ISP",
    Distance:353.31,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"JAX",
    Distance:1068.03,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"JFK",
    Distance:295.361,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"JFK",
    Distance:295.361,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BWI",
    To:"JFK",
    Distance:295.361,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BWI",
    To:"LAS",
    Distance:3381.14,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"LAS",
    Distance:3381.14,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"LAS",
    Distance:3381.14,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"LAX",
    Distance:3739.92,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"LAX",
    Distance:3739.92,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"LAX",
    Distance:3739.92,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"LHR",
    Distance:5833.18,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"LHR",
    Distance:5833.18,
    Airport:"British Airways"
}),
new Routes(
{
    From:"BWI",
    To:"LHR",
    Distance:5833.18,
    Airport:"Finnair"
}),
new Routes(
{
    From:"BWI",
    To:"LHR",
    Distance:5833.18,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"LIT",
    Distance:1465.71,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"MBJ",
    Distance:2301.71,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"MCI",
    Distance:1551.65,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"MCO",
    Distance:1268.99,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"MCO",
    Distance:1268.99,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"MDW",
    Distance:980.544,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"MDW",
    Distance:980.544,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"MEM",
    Distance:1264.91,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"MEM",
    Distance:1264.91,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"MHT",
    Distance:605.617,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"MHT",
    Distance:605.617,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"MIA",
    Distance:1525.93,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"MIA",
    Distance:1525.93,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BWI",
    To:"MKE",
    Distance:1029.49,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"MSP",
    Distance:1503.62,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BWI",
    To:"MSP",
    Distance:1503.62,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"MSY",
    Distance:1606.16,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"MSY",
    Distance:1606.16,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"MYR",
    Distance:643.602,
    Airport:"Spirit Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"NAS",
    Distance:1573.67,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"OKC",
    Distance:1894.45,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"ORD",
    Distance:997.973,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"ORD",
    Distance:997.973,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BWI",
    To:"ORD",
    Distance:997.973,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"ORF",
    Distance:256.885,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"ORF",
    Distance:256.885,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"PBI",
    Distance:1425.1,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"PHL",
    Distance:144.857,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"PHL",
    Distance:144.857,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BWI",
    To:"PHX",
    Distance:3209.7,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"PHX",
    Distance:3209.7,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"PHX",
    Distance:3209.7,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"PHX",
    Distance:3209.7,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BWI",
    To:"PIT",
    Distance:337.686,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"PIT",
    Distance:337.686,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"PUJ",
    Distance:2427.16,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"PVD",
    Distance:527.125,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"PVD",
    Distance:527.125,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"PWM",
    Distance:726.475,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"PWM",
    Distance:726.475,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"RDU",
    Distance:411.529,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"RDU",
    Distance:411.529,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BWI",
    To:"RDU",
    Distance:411.529,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"ROC",
    Distance:446.474,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"ROC",
    Distance:446.474,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"RSW",
    Distance:1482.85,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"RSW",
    Distance:1482.85,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"SAN",
    Distance:3685.58,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"SAN",
    Distance:3685.58,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"SAT",
    Distance:2261.96,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"SAT",
    Distance:2261.96,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"SDF",
    Distance:794.7,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"SDF",
    Distance:794.7,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"SEA",
    Distance:3748.16,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"SFO",
    Distance:3944.34,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"SJU",
    Distance:2524.51,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"SJU",
    Distance:2524.51,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"SLC",
    Distance:2993.47,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"SLC",
    Distance:2993.47,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BWI",
    To:"SLC",
    Distance:2993.47,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"STL",
    Distance:1184.49,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"STL",
    Distance:1184.49,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"TPA",
    Distance:1357.9,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"BWI",
    To:"TPA",
    Distance:1357.9,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"BWI",
    To:"YYZ",
    Distance:558.095,
    Airport:"Air Canada"
}),
new Routes(
{
    From:"BWK",
    To:"ZAG",
    Distance:277.488,
    Airport:"Croatia Airlines"
}),
new Routes(
{
    From:"BWN",
    To:"BKI",
    Distance:166.252,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BWN",
    To:"BKI",
    Distance:166.252,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"BWN",
    To:"BKK",
    Distance:1832.97,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"BWN",
    To:"BKK",
    Distance:1832.97,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"BWN",
    To:"CGK",
    Distance:1535.75,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BWN",
    To:"CGK",
    Distance:1535.75,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"BWN",
    To:"DWC",
    Distance:6735.46,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"BWN",
    To:"HKG",
    Distance:1933.95,
    Airport:"Dragonair"
}),
new Routes(
{
    From:"BWN",
    To:"HKG",
    Distance:1933.95,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"BWN",
    To:"JED",
    Distance:8335.87,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"BWN",
    To:"KUL",
    Distance:1486.65,
    Airport:"AirAsia"
}),
new Routes(
{
    From:"BWN",
    To:"KUL",
    Distance:1486.65,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BWN",
    To:"KUL",
    Distance:1486.65,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"BWN",
    To:"MEL",
    Distance:5658.58,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"BWN",
    To:"MNL",
    Distance:1255.23,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"BWN",
    To:"MNL",
    Distance:1255.23,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"BWN",
    To:"MZV",
    Distance:100.55,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"BWN",
    To:"MZV",
    Distance:100.55,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"BWN",
    To:"PVG",
    Distance:3000.53,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"BWN",
    To:"SIN",
    Distance:1277.85,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"BWN",
    To:"SIN",
    Distance:1277.85,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"BWN",
    To:"SUB",
    Distance:1390.82,
    Airport:"Garuda Indonesia"
}),
new Routes(
{
    From:"BWN",
    To:"SUB",
    Distance:1390.82,
    Airport:"Royal Brunei Airlines"
}),
new Routes(
{
    From:"BWT",
    To:"KNS",
    Distance:200.345,
    Airport:"Sharp Airlines"
}),
new Routes(
{
    From:"BWT",
    To:"LST",
    Distance:138.038,
    Airport:"Sharp Airlines"
}),
new Routes(
{
    From:"BWT",
    To:"MEL",
    Distance:377.578,
    Airport:"Regional Express"
}),
new Routes(
{
    From:"BXB",
    To:"SOQ",
    Distance:313.431,
    Airport:"Lion Mentari Airlines"
}),
new Routes(
{
    From:"BXR",
    To:"THR",
    Distance:993.58,
    Airport:"Iran Aseman Airlines"
}),
new Routes(
{
    From:"BXU",
    To:"CEB",
    Distance:223,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"BXU",
    To:"MNL",
    Distance:785.656,
    Airport:"Air Philippines"
}),
new Routes(
{
    From:"BXU",
    To:"MNL",
    Distance:785.656,
    Airport:"Cebu Pacific"
}),
new Routes(
{
    From:"BXU",
    To:"MNL",
    Distance:785.656,
    Airport:"Philippine Airlines"
}),
new Routes(
{
    From:"BYC",
    To:"SRZ",
    Distance:465.443,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"BYC",
    To:"SRZ",
    Distance:465.443,
    Airport:"Southern Winds Airlines"
}),
new Routes(
{
    From:"BYC",
    To:"TJA",
    Distance:117.391,
    Airport:"Amaszonas"
}),
new Routes(
{
    From:"BYC",
    To:"TJA",
    Distance:117.391,
    Airport:"Southern Winds Airlines"
}),
new Routes(
{
    From:"BYN",
    To:"LTI",
    Distance:345.345,
    Airport:"Homer Air"
}),
new Routes(
{
    From:"BYN",
    To:"ULN",
    Distance:496.051,
    Airport:"Homer Air"
}),
new Routes(
{
    From:"BYO",
    To:"VCP",
    Distance:979.361,
    Airport:"Azul"
}),
new Routes(
{
    From:"BZE",
    To:"ATL",
    Distance:1831.32,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BZE",
    To:"CLT",
    Distance:2096.03,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BZE",
    To:"CLT",
    Distance:2096.03,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BZE",
    To:"CUK",
    Distance:36.4197,
    Airport:"Midwest Airlines (Egypt)"
}),
new Routes(
{
    From:"BZE",
    To:"DFW",
    Distance:1918.19,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BZE",
    To:"DFW",
    Distance:1918.19,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BZE",
    To:"DGA",
    Distance:64.3944,
    Airport:"Midwest Airlines (Egypt)"
}),
new Routes(
{
    From:"BZE",
    To:"EWR",
    Distance:2909.06,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BZE",
    To:"IAH",
    Distance:1556.94,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BZE",
    To:"LAX",
    Distance:3502.78,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BZE",
    To:"MIA",
    Distance:1235.7,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"BZE",
    To:"MIA",
    Distance:1235.7,
    Airport:"US Airways"
}),
new Routes(
{
    From:"BZE",
    To:"SAL",
    Distance:462.682,
    Airport:"Avianca - Aerovias Nacionales de Colombia"
}),
new Routes(
{
    From:"BZE",
    To:"SPR",
    Distance:54.8798,
    Airport:"Midwest Airlines (Egypt)"
}),
new Routes(
{
    From:"BZE",
    To:"TZA",
    Distance:1.20355,
    Airport:"Midwest Airlines (Egypt)"
}),
new Routes(
{
    From:"BZG",
    To:"BHX",
    Distance:1324.6,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BZG",
    To:"DUB",
    Distance:1605.5,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BZG",
    To:"STN",
    Distance:1205.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BZL",
    To:"DAC",
    Distance:116.321,
    Airport:"United Airways"
}),
new Routes(
{
    From:"BZN",
    To:"AZA",
    Distance:1387.22,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BZN",
    To:"DEN",
    Distance:843.588,
    Airport:"Frontier Airlines"
}),
new Routes(
{
    From:"BZN",
    To:"DEN",
    Distance:843.588,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BZN",
    To:"LAS",
    Distance:1128.88,
    Airport:"Allegiant Air"
}),
new Routes(
{
    From:"BZN",
    To:"MSP",
    Distance:1402.87,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BZN",
    To:"ORD",
    Distance:1903.91,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"BZN",
    To:"SEA",
    Distance:870.813,
    Airport:"Alaska Airlines"
}),
new Routes(
{
    From:"BZN",
    To:"SLC",
    Distance:558.705,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"BZO",
    To:"FCO",
    Distance:522.912,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"BZO",
    To:"FCO",
    Distance:522.912,
    Airport:"Flybaboo"
}),
new Routes(
{
    From:"BZR",
    To:"BRE",
    Distance:1153,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BZR",
    To:"BRS",
    Distance:1005.33,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BZR",
    To:"BVA",
    Distance:688.314,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BZR",
    To:"EDI",
    Distance:1483.5,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BZR",
    To:"LTN",
    Distance:990.62,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BZR",
    To:"MAN",
    Distance:1189.46,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BZR",
    To:"NRN",
    Distance:943.921,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BZR",
    To:"NYO",
    Distance:1955,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BZR",
    To:"RYG",
    Distance:1855.63,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"BZV",
    To:"ADD",
    Distance:2996.11,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BZV",
    To:"CDG",
    Distance:6049.09,
    Airport:"Air France"
}),
new Routes(
{
    From:"BZV",
    To:"CDG",
    Distance:6049.09,
    Airport:"Varig Log"
}),
new Routes(
{
    From:"BZV",
    To:"CMN",
    Distance:4824.09,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BZV",
    To:"COO",
    Distance:1852.73,
    Airport:"Mauritania Airlines International"
}),
new Routes(
{
    From:"BZV",
    To:"COO",
    Distance:1852.73,
    Airport:"Pacific East Asia Cargo Airlines"
}),
new Routes(
{
    From:"BZV",
    To:"COO",
    Distance:1852.73,
    Airport:"Varig Log"
}),
new Routes(
{
    From:"BZV",
    To:"DLA",
    Distance:1105.02,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"BZV",
    To:"DLA",
    Distance:1105.02,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"BZV",
    To:"DLA",
    Distance:1105.02,
    Airport:"Varig Log"
}),
new Routes(
{
    From:"BZV",
    To:"FIH",
    Distance:25.9464,
    Airport:"Camair-co"
}),
new Routes(
{
    From:"BZV",
    To:"FIH",
    Distance:25.9464,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BZV",
    To:"FIH",
    Distance:25.9464,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"BZV",
    To:"JNB",
    Distance:2799.57,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"BZV",
    To:"KGL",
    Distance:1672.12,
    Airport:"Rwandair Express"
}),
new Routes(
{
    From:"BZV",
    To:"LAD",
    Distance:558.79,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"BZV",
    To:"LBV",
    Distance:833.922,
    Airport:"Hapagfly"
}),
new Routes(
{
    From:"BZV",
    To:"LBV",
    Distance:833.922,
    Airport:"Pacific East Asia Cargo Airlines"
}),
new Routes(
{
    From:"BZV",
    To:"NBO",
    Distance:2428.93,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"BZV",
    To:"NBO",
    Distance:2428.93,
    Airport:"Kenya Airways"
}),
new Routes(
{
    From:"BZV",
    To:"PNR",
    Distance:378.396,
    Airport:"Estafeta Carga Aerea"
}),
new Routes(
{
    From:"BZV",
    To:"PNR",
    Distance:378.396,
    Airport:"Pacific East Asia Cargo Airlines"
}),
new Routes(
{
    From:"BZV",
    To:"PNR",
    Distance:378.396,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"BZV",
    To:"PNR",
    Distance:378.396,
    Airport:"Varig Log"
}),
new Routes(
{
    From:"CAB",
    To:"LAD",
    Distance:380.452,
    Airport:"Cosmic Air"
}),
new Routes(
{
    From:"CAB",
    To:"LAD",
    Distance:380.452,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"CAB",
    To:"SZA",
    Distance:63.8113,
    Airport:"TAAG Angola Airlines"
}),
new Routes(
{
    From:"CAC",
    To:"CWB",
    Distance:438.842,
    Airport:"Azul"
}),
new Routes(
{
    From:"CAC",
    To:"GRU",
    Distance:733.947,
    Airport:"Changan Airlines"
}),
new Routes(
{
    From:"CAC",
    To:"VCP",
    Distance:683.493,
    Airport:"Azul"
}),
new Routes(
{
    From:"CAE",
    To:"ATL",
    Distance:307.583,
    Airport:"Air France"
}),
new Routes(
{
    From:"CAE",
    To:"ATL",
    Distance:307.583,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CAE",
    To:"ATL",
    Distance:307.583,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CAE",
    To:"ATL",
    Distance:307.583,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CAE",
    To:"CLT",
    Distance:142.709,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CAE",
    To:"CLT",
    Distance:142.709,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CAE",
    To:"DCA",
    Distance:657.051,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CAE",
    To:"DCA",
    Distance:657.051,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CAE",
    To:"DFW",
    Distance:1480.47,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CAE",
    To:"DFW",
    Distance:1480.47,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CAE",
    To:"DTW",
    Distance:940.432,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CAE",
    To:"IAD",
    Distance:645.775,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CAE",
    To:"IAH",
    Distance:1410.41,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CAE",
    To:"LGA",
    Distance:993.439,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CAE",
    To:"ORD",
    Distance:1072.98,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CAE",
    To:"PHL",
    Distance:841.244,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CAE",
    To:"PHL",
    Distance:841.244,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CAG",
    To:"BGY",
    Distance:716.12,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"BLQ",
    Distance:615.903,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"CAG",
    To:"BRI",
    Distance:687.083,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"BSL",
    Distance:935.295,
    Airport:"easyJet"
}),
new Routes(
{
    From:"CAG",
    To:"BVA",
    Distance:1260.33,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"CGN",
    Distance:1300.05,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"CAG",
    To:"CIA",
    Distance:412.024,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"CRL",
    Distance:1297.27,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"CUF",
    Distance:600.603,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"DUS",
    Distance:1350.3,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"CAG",
    To:"DUS",
    Distance:1350.3,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"CAG",
    To:"DUS",
    Distance:1350.3,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"CAG",
    To:"FCO",
    Distance:391.829,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CAG",
    To:"FKB",
    Distance:1062.28,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"FLR",
    Distance:537.515,
    Airport:"Formosa Airlines"
}),
new Routes(
{
    From:"CAG",
    To:"FLR",
    Distance:537.515,
    Airport:"Iberia Airlines"
}),
new Routes(
{
    From:"CAG",
    To:"GOA",
    Distance:574.253,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"GRO",
    Distance:607.504,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"GVA",
    Distance:813.092,
    Airport:"easyJet"
}),
new Routes(
{
    From:"CAG",
    To:"HHN",
    Distance:1197.8,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"KRK",
    Distance:1469.66,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"KUN",
    Distance:2075.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"LIN",
    Distance:688.942,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CAG",
    To:"LUX",
    Distance:1175.3,
    Airport:"Luxair"
}),
new Routes(
{
    From:"CAG",
    To:"MAD",
    Distance:1084.93,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"MRS",
    Distance:564.878,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"MUC",
    Distance:1035.42,
    Airport:"Air Berlin"
}),
new Routes(
{
    From:"CAG",
    To:"MUC",
    Distance:1035.42,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"CAG",
    To:"MUC",
    Distance:1035.42,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"CAG",
    To:"MXP",
    Distance:709.831,
    Airport:"easyJet"
}),
new Routes(
{
    From:"CAG",
    To:"NAP",
    Distance:481.136,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"CAG",
    To:"NRN",
    Distance:1391.72,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"PEG",
    Distance:516.179,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"PMF",
    Distance:628.1,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"PSA",
    Distance:505.305,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"PSR",
    Distance:557.526,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"STN",
    Distance:1560.88,
    Airport:"easyJet"
}),
new Routes(
{
    From:"CAG",
    To:"STR",
    Distance:1049.59,
    Airport:"Germanwings"
}),
new Routes(
{
    From:"CAG",
    To:"SXF",
    Distance:1499.59,
    Airport:"easyJet"
}),
new Routes(
{
    From:"CAG",
    To:"TPS",
    Distance:333.563,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"TRN",
    Distance:671.534,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"CAG",
    To:"TSF",
    Distance:756.363,
    Airport:"Ryanair"
}),
new Routes(
{
    From:"CAG",
    To:"VRN",
    Distance:699.597,
    Airport:"Meridiana"
}),
new Routes(
{
    From:"CAH",
    To:"SGN",
    Distance:242.987,
    Airport:"Vietnam Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"ABV",
    Distance:3435.06,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"ACC",
    Distance:4282.92,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"ADD",
    Distance:2473.55,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"ADD",
    Distance:2473.55,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"ADE",
    Distance:2379.28,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"CAI",
    To:"AHB",
    Distance:1743.51,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"AHB",
    Distance:1743.51,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"AHB",
    Distance:1743.51,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"ALG",
    Distance:2705.72,
    Airport:"Air Algerie"
}),
new Routes(
{
    From:"CAI",
    To:"ALG",
    Distance:2705.72,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"AMM",
    Distance:472.37,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"AMM",
    Distance:472.37,
    Airport:"Royal Falcon"
}),
new Routes(
{
    From:"CAI",
    To:"AMM",
    Distance:472.37,
    Airport:"Royal Jordanian"
}),
new Routes(
{
    From:"CAI",
    To:"AMS",
    Distance:3287.3,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"AMS",
    Distance:3287.3,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"ASM",
    Distance:1818.46,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"ASW",
    Distance:698.851,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"ASW",
    Distance:698.851,
    Airport:"Marysya Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"ATH",
    Distance:1107.17,
    Airport:"Aegean Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"ATH",
    Distance:1107.17,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"ATZ",
    Distance:344.124,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"ATZ",
    Distance:344.124,
    Airport:"Marysya Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"AUH",
    Distance:2377.98,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"AUH",
    Distance:2377.98,
    Airport:"Etihad Airways"
}),
new Routes(
{
    From:"CAI",
    To:"BAH",
    Distance:1929.8,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"BAH",
    Distance:1929.8,
    Airport:"Gulf Air Bahrain"
}),
new Routes(
{
    From:"CAI",
    To:"BCN",
    Distance:2906.14,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"BEN",
    Distance:1082.15,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"CAI",
    To:"BEN",
    Distance:1082.15,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"BEN",
    Distance:1082.15,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"BEY",
    Distance:563.353,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"BEY",
    Distance:563.353,
    Airport:"Middle East Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"BGW",
    Distance:1262.05,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"BKK",
    Distance:7279.8,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"BKK",
    Distance:7279.8,
    Airport:"Malaysia Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"BKK",
    Distance:7279.8,
    Airport:"Thai Airways International"
}),
new Routes(
{
    From:"CAI",
    To:"BOM",
    Distance:4341.43,
    Airport:"Air India Limited"
}),
new Routes(
{
    From:"CAI",
    To:"BOM",
    Distance:4341.43,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"BRU",
    Distance:3208.6,
    Airport:"Brussels Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"BRU",
    Distance:3208.6,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"BUD",
    Distance:2188.51,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"CAN",
    Distance:7991.44,
    Airport:"Air China"
}),
new Routes(
{
    From:"CAI",
    To:"CAN",
    Distance:7991.44,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"CDG",
    Distance:3210.45,
    Airport:"Air France"
}),
new Routes(
{
    From:"CAI",
    To:"CDG",
    Distance:3210.45,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"CDG",
    Distance:3210.45,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"CAI",
    To:"CGK",
    Distance:8948.87,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"CMN",
    Distance:3683.73,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"CMN",
    Distance:3683.73,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"CAI",
    To:"CPH",
    Distance:3197.28,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"CPH",
    Distance:3197.28,
    Airport:"Scandinavian Airlines System"
}),
new Routes(
{
    From:"CAI",
    To:"DAR",
    Distance:4197.54,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"DME",
    Distance:2858.48,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"DMM",
    Distance:1843.68,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"DMM",
    Distance:1843.68,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"DOH",
    Distance:2053.95,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"DOH",
    Distance:2053.95,
    Airport:"Qatar Airways"
}),
new Routes(
{
    From:"CAI",
    To:"DXB",
    Distance:2415.46,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"DXB",
    Distance:2415.46,
    Airport:"Emirates"
}),
new Routes(
{
    From:"CAI",
    To:"DXB",
    Distance:2415.46,
    Airport:"Singapore Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"EBB",
    Distance:3346.5,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"EBL",
    Distance:1350.42,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"ELQ",
    Distance:1283.27,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"ELQ",
    Distance:1283.27,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"ELQ",
    Distance:1283.27,
    Airport:"Express One International"
}),
new Routes(
{
    From:"CAI",
    To:"ELQ",
    Distance:1283.27,
    Airport:"Nile Air"
}),
new Routes(
{
    From:"CAI",
    To:"FCO",
    Distance:2150.17,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CAI",
    To:"FCO",
    Distance:2150.17,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"FRA",
    Distance:2922.68,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"FRA",
    Distance:2922.68,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"CAI",
    To:"GVA",
    Distance:2824.39,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"GVA",
    Distance:2824.39,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"CAI",
    To:"HBE",
    Distance:186.094,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"HBE",
    Distance:186.094,
    Airport:"Marysya Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"HMB",
    Distance:421.698,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"HMB",
    Distance:421.698,
    Airport:"Marysya Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"HRG",
    Distance:402.093,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"HRG",
    Distance:402.093,
    Airport:"Marysya Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"IST",
    Distance:1229.4,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"IST",
    Distance:1229.4,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"JED",
    Distance:1216.68,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"JED",
    Distance:1216.68,
    Airport:"Nile Air"
}),
new Routes(
{
    From:"CAI",
    To:"JED",
    Distance:1216.68,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"JFK",
    Distance:9016.46,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"JFK",
    Distance:9016.46,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"JNB",
    Distance:6264.99,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"JNB",
    Distance:6264.99,
    Airport:"South African Airways"
}),
new Routes(
{
    From:"CAI",
    To:"JUB",
    Distance:2807.74,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"JUB",
    Distance:2807.74,
    Airport:"Turkish Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"KAN",
    Distance:3097.86,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"KRT",
    Distance:1620.17,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"KRT",
    Distance:1620.17,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"CAI",
    To:"KWI",
    Distance:1601.91,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"KWI",
    Distance:1601.91,
    Airport:"Jazeera Airways"
}),
new Routes(
{
    From:"CAI",
    To:"KWI",
    Distance:1601.91,
    Airport:"Kuwait Airways"
}),
new Routes(
{
    From:"CAI",
    To:"LCA",
    Distance:567.983,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"LCA",
    Distance:567.983,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"LHR",
    Distance:3532.99,
    Airport:"British Airways"
}),
new Routes(
{
    From:"CAI",
    To:"LHR",
    Distance:3532.99,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"LOS",
    Distance:3931.38,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"LXR",
    Distance:511.153,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"LXR",
    Distance:511.153,
    Airport:"Marysya Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"MAD",
    Distance:3350.36,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"MAN",
    Distance:3743.79,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"MCT",
    Distance:2756.08,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"MCT",
    Distance:2756.08,
    Airport:"Oman Air"
}),
new Routes(
{
    From:"CAI",
    To:"MED",
    Distance:1026.77,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"MED",
    Distance:1026.77,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"MRA",
    Distance:1571.76,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"MUC",
    Distance:2623.16,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"MUC",
    Distance:2623.16,
    Airport:"Lufthansa"
}),
new Routes(
{
    From:"CAI",
    To:"MXP",
    Distance:2616.77,
    Airport:"Alitalia"
}),
new Routes(
{
    From:"CAI",
    To:"MXP",
    Distance:2616.77,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"NBO",
    Distance:3544.8,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"PEK",
    Distance:7532.85,
    Airport:"Air China"
}),
new Routes(
{
    From:"CAI",
    To:"PEK",
    Distance:7532.85,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"PZU",
    Distance:1325.54,
    Airport:"Sudan Airways"
}),
new Routes(
{
    From:"CAI",
    To:"RIY",
    Distance:2516.45,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"CAI",
    To:"RMF",
    Distance:595.982,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"RUH",
    Distance:1611.72,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"RUH",
    Distance:1611.72,
    Airport:"Royal Air Maroc"
}),
new Routes(
{
    From:"CAI",
    To:"RUH",
    Distance:1611.72,
    Airport:"Saudi Arabian Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"SAH",
    Distance:2088.54,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"SAH",
    Distance:2088.54,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"CAI",
    To:"SHJ",
    Distance:2427.39,
    Airport:"Air Arabia"
}),
new Routes(
{
    From:"CAI",
    To:"SHJ",
    Distance:2427.39,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"SSH",
    Distance:375.871,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"SSH",
    Distance:375.871,
    Airport:"Marysya Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"SVO",
    Distance:2913.08,
    Airport:"Aeroflot Russian Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"SXF",
    Distance:2873.82,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"TAI",
    Distance:2246.61,
    Airport:"Yemenia"
}),
new Routes(
{
    From:"CAI",
    To:"TIF",
    Distance:1325.38,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"TIF",
    Distance:1325.38,
    Airport:"Express One International"
}),
new Routes(
{
    From:"CAI",
    To:"TIF",
    Distance:1325.38,
    Airport:"Nile Air"
}),
new Routes(
{
    From:"CAI",
    To:"TIP",
    Distance:1752.56,
    Airport:"Afriqiyah Airways"
}),
new Routes(
{
    From:"CAI",
    To:"TIP",
    Distance:1752.56,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"TIP",
    Distance:1752.56,
    Airport:"Libyan Arab Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"TLV",
    Distance:392.484,
    Airport:"Air Sinai"
}),
new Routes(
{
    From:"CAI",
    To:"TUN",
    Distance:2096.09,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"TUN",
    Distance:2096.09,
    Airport:"Tunisair"
}),
new Routes(
{
    From:"CAI",
    To:"TUU",
    Distance:542.14,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"TUU",
    Distance:542.14,
    Airport:"Express One International"
}),
new Routes(
{
    From:"CAI",
    To:"TUU",
    Distance:542.14,
    Airport:"Nile Air"
}),
new Routes(
{
    From:"CAI",
    To:"VIE",
    Distance:2365.38,
    Airport:"Austrian Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"VIE",
    Distance:2365.38,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"YNB",
    Distance:935.456,
    Airport:"AlMasria Universal Airlines"
}),
new Routes(
{
    From:"CAI",
    To:"YNB",
    Distance:935.456,
    Airport:"Express One International"
}),
new Routes(
{
    From:"CAI",
    To:"YNB",
    Distance:935.456,
    Airport:"Nile Air"
}),
new Routes(
{
    From:"CAI",
    To:"YYZ",
    Distance:9228.24,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"ZRH",
    Distance:2744.74,
    Airport:"Egyptair"
}),
new Routes(
{
    From:"CAI",
    To:"ZRH",
    Distance:2744.74,
    Airport:"Swiss International Air Lines"
}),
new Routes(
{
    From:"CAJ",
    To:"PZO",
    Distance:228.912,
    Airport:"Conviasa"
}),
new Routes(
{
    From:"CAK",
    To:"ATL",
    Distance:851.298,
    Airport:"Air France"
}),
new Routes(
{
    From:"CAK",
    To:"ATL",
    Distance:851.298,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"CAK",
    To:"ATL",
    Distance:851.298,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CAK",
    To:"ATL",
    Distance:851.298,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CAK",
    To:"ATL",
    Distance:851.298,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"CAK",
    To:"BOS",
    Distance:881.537,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"CAK",
    To:"BOS",
    Distance:881.537,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"CAK",
    To:"CLT",
    Distance:635.543,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CAK",
    To:"CLT",
    Distance:635.543,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CAK",
    To:"DCA",
    Distance:440.262,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CAK",
    To:"DCA",
    Distance:440.262,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CAK",
    To:"DEN",
    Distance:1965.21,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"CAK",
    To:"DTW",
    Distance:214.609,
    Airport:"Delta Air Lines"
}),
new Routes(
{
    From:"CAK",
    To:"LGA",
    Distance:636.703,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"CAK",
    To:"LGA",
    Distance:636.703,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"CAK",
    To:"MCO",
    Distance:1388.51,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"CAK",
    To:"MCO",
    Distance:1388.51,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"CAK",
    To:"ORD",
    Distance:551.305,
    Airport:"United Airlines"
}),
new Routes(
{
    From:"CAK",
    To:"PHL",
    Distance:537.701,
    Airport:"American Airlines"
}),
new Routes(
{
    From:"CAK",
    To:"PHL",
    Distance:537.701,
    Airport:"US Airways"
}),
new Routes(
{
    From:"CAK",
    To:"TPA",
    Distance:1442.37,
    Airport:"AirTran Airways"
}),
new Routes(
{
    From:"CAK",
    To:"TPA",
    Distance:1442.37,
    Airport:"Southwest Airlines"
}),
new Routes(
{
    From:"CAL",
    To:"GLA",
    Distance:92.2966,
    Airport:"Flybe"
}),
new Routes(
{
    From:"CAN",
    To:"ACX",
    Distance:866.207,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CAN",
    To:"ADD",
    Distance:8038.05,
    Airport:"Air China"
}),
new Routes(
{
    From:"CAN",
    To:"ADD",
    Distance:8038.05,
    Airport:"Ethiopian Airlines"
}),
new Routes(
{
    From:"CAN",
    To:"ADD",
    Distance:8038.05,
    Airport:"Shenzhen Airlines"
}),
new Routes(
{
    From:"CAN",
    To:"AEB",
    Distance:647.077,
    Airport:"Hainan Airlines"
}),
new Routes(
{
    From:"CAN",
    To:"AKL",
    Distance:9300.08,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CAN",
    To:"AMS",
    Distance:9139.73,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CAN",
    To:"AMS",
    Distance:9139.73,
    Airport:"KLM Royal Dutch Airlines"
}),
new Routes(
{
    From:"CAN",
    To:"AQG",
    Distance:881.467,
    Airport:"China Southern Airlines"
}),
new Routes(
{
    From:"CAN",
    To:"BAV",
}),
new Routes(
{