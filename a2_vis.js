var vg_streamgraph = "streamgraph.vg.json";
var vg_prop_map = "country_visits.vg.json";
var vg_dumbell = "dumbell.vg.json";
var vg_pop_pyr = "pyramid.vg.json"
var vg_par_plot = "parallel.vg.json"
var vg_heatmap = "heatmap_reason.vg.json"
var vg_multi = "multi_chart.vg.json"
var vg_spend = "total_spend.vg.json"
var vg_chlor_map = "state_map.vg.json";
var vg_stacked = "stacked.vg.json";
var vg_bubble = "state_data.vg.json";

vegaEmbed("#streamgraph", vg_streamgraph, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#prop_map", vg_prop_map, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#dumbell", vg_dumbell, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#pop_pyr", vg_pop_pyr, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#par_plot", vg_par_plot, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#heatmap", vg_heatmap, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#multi", vg_multi, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#spend", vg_spend, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#chlor_map", vg_chlor_map, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#stacked", vg_stacked, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#bubble", vg_bubble, { "actions": false }
).then(function(result){}).catch(console.error);