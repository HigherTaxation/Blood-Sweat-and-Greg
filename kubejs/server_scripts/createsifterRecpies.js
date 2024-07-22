ServerEvents.recipes(event => {
	event.remove({type: 'createsifter:sifting'})

	event.custom({
		"type": "createsifter:sifting",
		"ingredients": [
		{
		  "item": "kubejs:granite_gravel"
		},
		{
		  "item": "createsifter:string_mesh"
		}
	  ],
	  "processingTime": 500,
	  "results": [
		{
		  "chance": .2,
		  "item": "gtceu:small_copper_dust"
		}
	  ]
})

	event.custom({
		"type": "createsifter:sifting",
		"ingredients": [
		{
		  "item": "kubejs:diorite_gravel"
		},
		{
		  "item": "createsifter:string_mesh"
		}
	  ],
	  "processingTime": 500,
	  "results": [
		{
		  "chance": 0.15,
		  "item": "gtceu:small_tin_dust"
		}
	  ]
})

	event.custom({
		"type": "createsifter:sifting",
		"ingredients": [
		{
		  "item": "kubejs:andesite_gravel"
		},
		{
		  "item": "createsifter:brass_mesh"
		}
	  ],
	  "processingTime": 500,
	  "results": [
		{
		  "chance": 0.10,
		  "item": "gtceu:small_iron_dust"
		}
	  ]
})

});