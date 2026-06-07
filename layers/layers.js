var wms_layers = [];


        var lyr_EsriStreet_0 = new ol.layer.Tile({
            'title': 'Esri Street',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Tanzania_1 = new ol.format.GeoJSON();
var features_Tanzania_1 = format_Tanzania_1.readFeatures(json_Tanzania_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tanzania_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tanzania_1.addFeatures(features_Tanzania_1);
var lyr_Tanzania_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tanzania_1, 
                style: style_Tanzania_1,
                popuplayertitle: 'Tanzania',
                interactive: true,
    title: 'Tanzania<br />\
    <img src="styles/legend/Tanzania_1_0.png" /> Arusha<br />\
    <img src="styles/legend/Tanzania_1_1.png" /> Dar-es-salaam<br />\
    <img src="styles/legend/Tanzania_1_2.png" /> Dodoma<br />\
    <img src="styles/legend/Tanzania_1_3.png" /> Geita<br />\
    <img src="styles/legend/Tanzania_1_4.png" /> Iringa<br />\
    <img src="styles/legend/Tanzania_1_5.png" /> Kagera<br />\
    <img src="styles/legend/Tanzania_1_6.png" /> Kaskazini Pemba<br />\
    <img src="styles/legend/Tanzania_1_7.png" /> Kaskazini Unguja<br />\
    <img src="styles/legend/Tanzania_1_8.png" /> Katavi<br />\
    <img src="styles/legend/Tanzania_1_9.png" /> Kigoma<br />\
    <img src="styles/legend/Tanzania_1_10.png" /> Kilimanjaro<br />\
    <img src="styles/legend/Tanzania_1_11.png" /> Kusini Pemba<br />\
    <img src="styles/legend/Tanzania_1_12.png" /> Kusini Unguja<br />\
    <img src="styles/legend/Tanzania_1_13.png" /> Lindi<br />\
    <img src="styles/legend/Tanzania_1_14.png" /> Manyara<br />\
    <img src="styles/legend/Tanzania_1_15.png" /> Mara<br />\
    <img src="styles/legend/Tanzania_1_16.png" /> Mbeya<br />\
    <img src="styles/legend/Tanzania_1_17.png" /> Mjini Magharibi<br />\
    <img src="styles/legend/Tanzania_1_18.png" /> Morogoro<br />\
    <img src="styles/legend/Tanzania_1_19.png" /> Mtwara<br />\
    <img src="styles/legend/Tanzania_1_20.png" /> Mwanza<br />\
    <img src="styles/legend/Tanzania_1_21.png" /> Njombe<br />\
    <img src="styles/legend/Tanzania_1_22.png" /> Pwani<br />\
    <img src="styles/legend/Tanzania_1_23.png" /> Rukwa<br />\
    <img src="styles/legend/Tanzania_1_24.png" /> Ruvuma<br />\
    <img src="styles/legend/Tanzania_1_25.png" /> Shinyanga<br />\
    <img src="styles/legend/Tanzania_1_26.png" /> Simiyu<br />\
    <img src="styles/legend/Tanzania_1_27.png" /> Singida<br />\
    <img src="styles/legend/Tanzania_1_28.png" /> Tabora<br />\
    <img src="styles/legend/Tanzania_1_29.png" /> Tanga<br />\
    <img src="styles/legend/Tanzania_1_30.png" /> <br />' });

lyr_EsriStreet_0.setVisible(true);lyr_Tanzania_1.setVisible(true);
var layersList = [lyr_EsriStreet_0,lyr_Tanzania_1];
lyr_Tanzania_1.set('fieldAliases', {'REGION': 'REGION', 'INTERCENSU': 'INTERCENSU', 'POPULATION': 'POPULATION', 'GROWTH_RAT': 'GROWTH_RAT', 'POP_DENSIT': 'POP_DENSIT', 'AVER__HH': 'AVER__HH', 'SEXRATIO': 'SEXRATIO', 'POP_PERCEN': 'POP_PERCEN', 'AGE0_14': 'AGE0_14', 'AGE65_ABOV': 'AGE65_ABOV', 'AGE15_64': 'AGE15_64', 'AGE_15_49F': 'AGE_15_49F', 'HIV_PREV': 'HIV_PREV', 'AREA': 'AREA', });
lyr_Tanzania_1.set('fieldImages', {'REGION': 'TextEdit', 'INTERCENSU': 'TextEdit', 'POPULATION': 'Range', 'GROWTH_RAT': 'TextEdit', 'POP_DENSIT': 'TextEdit', 'AVER__HH': 'TextEdit', 'SEXRATIO': 'TextEdit', 'POP_PERCEN': 'TextEdit', 'AGE0_14': 'TextEdit', 'AGE65_ABOV': 'TextEdit', 'AGE15_64': 'TextEdit', 'AGE_15_49F': 'TextEdit', 'HIV_PREV': 'TextEdit', 'AREA': 'Range', });
lyr_Tanzania_1.set('fieldLabels', {'REGION': 'no label', 'INTERCENSU': 'no label', 'POPULATION': 'no label', 'GROWTH_RAT': 'no label', 'POP_DENSIT': 'no label', 'AVER__HH': 'no label', 'SEXRATIO': 'no label', 'POP_PERCEN': 'no label', 'AGE0_14': 'no label', 'AGE65_ABOV': 'no label', 'AGE15_64': 'no label', 'AGE_15_49F': 'no label', 'HIV_PREV': 'no label', 'AREA': 'no label', });
lyr_Tanzania_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});