<!-- Change the witch text for on/off switches -->
<!-- var txt_on = '<img src=icons/on.png>'; -->
<!-- var txt_off = '<img src=icons/off.png>'; -->
var txt_on = 'Aan';
var txt_off = 'Uit';
var txt_zonon = 'Uit'; <!-- Dicht -->
var txt_zonoff = 'In'; <!-- Open -->
var txt_zonstopped = 'Gestopt';
var txt_zonstop = '| |';
<!-- var txt_dim_plus = ' + '; -->
<!-- var txt_dim_min = ' - '; -->

<!-- Change thetText displayed in PopUps -->
var txt_switch_protected = '\'Schakelaar is beveiligd\'';
var txt_switch_on = '\'Inschakelen\'';
var txt_switch_off = '\'Uitschakelen\'';
var txt_blind_up = '\'Zonnescherm openen\'';
var txt_blind_down = '\'Zonnescherm sluiten\'';
var txt_blind_stop = '\'Zonnescherm stoppen\'';

<!-- Change the timeout of the PopUp -->
var switch_protected_timeout = '1500';
var switch_on_timeout = '1500';
var switch_off_timeout = '1500';
var camera_doorbell_timeout = '15400';

<!-- Value for ZWave dimmer when on-->
var z_dimmer = '40';

<!-- Set values so colors can change -->
var temp_freeze = '0';
var temp_freeze_color = ';color:#0090ff;';
var humidity_max = '70';
var humidity_max_color = ';color:#0090ff;';
var CPUmem_max = '95';
var mem_max_color = ';color:red;';
var CPUusage_max = '50';
var cpu_max_color = ';color:red;';
var color_on = ';color:#1B9772;';
var color_off = ';color:#E24E2A;';
var show_sonos_volume = true; <!-- show Sonos volume in desc text -->

<!-- Change idx of special items -->
var idx_CPUmem = '5';
var idx_HDDmem = '8';
var idx_CPUusage = '10';
var idx_CPUtemp = '1100';
var idx_SunState = '42';
var idx_IsDonker = '42'; <!-- for day night css -->
var idx_FibaroWP = '1100';
var idx_Alarm = '109';
var idx_Rainmeter = '39';
var idx_Temp1 = '25';
var idx_Temp2 = '24';
var idx_Temp_buiten = '176';
var idx_Tempf = '154';
var idx_Iphone5s = '10';
var idx_Voordeur = '153';
var idx_Garagedeur = '149';
var idx_WindRichting = '38';
var idx_WindSnelheid = '38';
var idx_BewegingF = '145';
var idx_LuxF = '147';
var idx_ZonV = '110';
var idx_ZonA = '111';
var idx_Barometer = '37';
var idx_Visibility = '40';
var idx_Usage1 = '140';
var idx_Usage2 = '142';

var idx_water_meter = '1100';
var idx_doorbell = '1100';
var idx_electricity_today = '1100';
var idx_gas_today = '1100';
var idx_ram_usage = '1100';
var idx_cpu_usage = '1100';

var IsNight = 'No';

<!-- Text for vdesc -->
var desc_alarm_off = 'Alarm uit';
var desc_alarm_home = 'Alarm aan (thuis)';
var desc_alarm_away = 'Alarm aan (weg)';
var desc_sunrise = 'Zon op';
var desc_sunset = 'Zon onder';
var desc_showsunboth = ''; // used to show sunrise and sunset in vdesc
var txt_sunboth='';
var txt_sunset='Zon onder';
var txt_sunrise='Zon op';
var var_sunrise='';
var var_sunset='';
var desc_protected = '<img src=icons/lock-closed_w.png align=right style="margin:1.5px 3px 0px -10px">'; //shows lock picture if device is protected or when plusmin is 4

<!-- This triggers the camera PopUp when the doorbell is pressed -->
<!-- Text could be 'On', 'Group On' or 'Chime' -->
var doorbell_status = 'On';
var doorbel_idx = '1100';
var doorbel_cmd = "lightbox_open('camera1', 15400);"

// ############################################################################################################
// #### vvvvv   USER VALUES below vvvvv   #######
// ############################################################################################################

$(document).ready(function() {
        $.roomplan=2;	// define roomplan in Domoticz and create items below.
        $.domoticzurl="http://192.168.1.171:8080";
		//format: idx, value, label, description,lastseen(1 when lastseen is wanted, 2 is only time) ,plusmin button or protected (1 for buttons, 2 for volume of Sonos, 4 for protected), [override css], [alarm value]
        $.PageArray = [

	['25','Temp',		'cell1',	'Kamer temperatuur','0','0'], //Desc means show the sub cells
	['24','SetPoint',		'cell2',	'Thermostaat','0','0.5'],
	['37','Temp',		'cell4',	'Buitentemp','0','0'],
  ['0','Desc',		'cell5',	'Regen + regenkans','0','0'],
	['41','Rain',		'cell5a',	'Regen','1','0'],
	['41','Humidity',	'cell5b',	'Regenkans','0','0'],
	['32','Status',		'cell6',	'CV switch','0','0'],
	['37','ForecastStr',		'cell7',	'Weersvoorspelling','0','0'],
  ['37','Barometer',		'cell8',	'Barometer','0','0'],
	['38','Data', 'cell9', 'Amsterdam Wind (m/s)','0','0'],
	['37','Humidity',	'cell10',	'Lucht vochtigheid','0','0'],
	['40','Visibility',	'cell11',	'Zicht','0','0'],
	['00','Status',		'cell13',	'Kantoor lamp (25%)','1','0'],
	['00','Level',		'cell14',	'Kantoor','1','5'], //Level using for ZWave dimmer, vplusmin = 5 to start with level from z_dimmer
	['00','Status',	'cell15',	'Tuin','1','0'],
	['00','Status',	'cell16',	'Voordeur','1','4'],
	['00','Status',	'cell17',	'Garagedeur','1','4'],
	['00','Status',		'cell18',	'iPhone 5s','1','4'],
	['00','Data',		'cell19',	'Scherm (V)','1','0'],
	['37','Barometer',	'cell20',	'Barometer','0','0'],
	['42','Status',		'cell21',	'Zon','2','0'],
	['00','Tijd',		'cell22',	'Tijd','0','0'],
	['00','Data',		'cell23',	'Alarm','1','0'],
	['00','Temp',		'cell25',	'Temperatuur buiten (C)','0','0'],
	['42','SunBoth',		'cell26',	'Dummy cel voor bepaling zon op en zon onder','0','0'],
	['42','Status',		'cell00',	'IsDonker','0','0'],
//pagina2
	['00','Desc',		'cell2_1',	'Barometer + zicht','0','0'],
	['00','Barometer',	'cell2_1a',	'Barometer','1','0'],
	['00','Visibility',	'cell2_1b',	'Zicht','0','0'],
	['00','Desc',		'cell2_2',	'WindRichting','0','0'],
	['00','Data',		'cell2_2a',	'WindRichting','1','0'],
	['00','Data',		'cell2_2b',	'WindSnelheid','0','0'],
	['00','ForecastStr','cell2_3',	'Weersvoorspelling','0','0'],
	['00','Desc',		'cell2_4',	'NAS CPU + HDD','0','0'],
	['00','Data',		'cell2_4a',	'CPU','1','0'],
	['00','Data',		'cell2_4b',	'HDD','0','0'],
	['00','Desc',		'cell2_5',	'Temp + Lux F','1','0'],
	['00','Data',		'cell2_5a',	'Temperatuur Fibaro','1','0'],
	['00','Data',		'cell2_5b',	'Temperatuur Fibaro','1','0'],

	['00','Level',		'cell2_6',	'Lamp slaapkamer','1','1'],
	['00','Status',		'cell2_7',	'Slaapkamer kast','1','0'],
	['00','Data',		'cell2_8',	'Bewegingssensor F','1','4'],
	['00','Status',		'cell2_9',	'Led gang','1','0'],
	['00','Status',		'cell2_10',	'Led zolder','1','0'],

	['00','Status',		'cell2_11',	'Lamp TV','1','0'],
	['00','Status',		'cell2_12',	'Lamp vensterbank','1','0'],
	['00','Usage',		'cell2_13',	'Cell 2_13','0','0'],
	['00','Status',		'cell2_14',	'Vijver pomp','1','0'],
	['00','Status',		'cell2_15',	'Vijver luchtpomp','1','0'],

	['00','Status',	'cell2_16',	'Droger','1','0'],
	['00','Status',		'cell2_17',	'Garage','1','0'],
	['00','Data',		'cell2_18',	'0','0','0'],
	['00','Data',		'cell2_19',	'0','0','0'],
	['00','Status',	'cell2_20',	'IJskast','1','0'],

	['00','Data',		'cell2_21',	'Verbruik droger','1','0'],
	['00','Tijd',		'cell2_22',	'Tijd','0','0'],
	['00','Data',		'cell2_23',	'Verbruik IJskast','1','0'],
	['00','ForecastStr','cell2_25',	'Weersvoorspelling (FC)','0','0'],
	];
	$.PageArray_Scenes = [

	['00','Status',		'cell8',	'Lampen kamer (groep)','1','0'],
	['00','Status',		'cell13',	'Studeerkamer (30%)','1','0'],

	];

// ############################################################################################################
// #### ^^^^^   USER VALUES above ^^^^^   #######
// ############################################################################################################

RefreshData();
});
