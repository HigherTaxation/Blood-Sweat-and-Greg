ServerEvents.recipes(event => {
	event.remove({output: 'create:andesite_alloy'})
	event.remove({output: 'create:shaft'})	
	event.remove({output: 'create:cogwheel'})
	event.remove({output: 'create:large_cogwheel'})
	event.remove({output: 'create:water_wheel'})
	event.remove({id: 'create:milling/granite'})

	event.recipes.bloodmagic.altar('gtceu:andesite_alloy_ingot', 'minecraft:andesite').upgradeLevel(0).altarSyphon(200)

	event.shaped(
  	Item.of('create:shaft', 2), 
  	[
   	 'A  ',
   	 ' B ', 
   	 '  B'
  	],
  	{
	  A: '#forge:tools/files',
  	  B: 'gtceu:andesite_alloy_ingot'
  	}
	).damageIngredient('#forge:tools/files', 1)
	
	event.shaped(
  	Item.of('create:cogwheel'), 
  	[
   	 ' B ',
   	 'BAB', 
   	 ' B '
  	],
  	{
	  A: 'create:shaft',
  	  B: 'gtceu:wood_plate'
  	}
	)

	event.shaped(
  	Item.of('create:large_cogwheel'), 
  	[
   	 'ABA',
   	 'BBB', 
   	 'ABA'
  	],
  	{
	  A: 'create:cogwheel',
  	  B: 'gtceu:wood_plate'
  	}
	)
	
	event.shaped(
  	Item.of('create:water_wheel'), 
  	[
   	 'BBB',
   	 'BAB', 
   	 'BBB'
  	],
  	{
	  A: 'create:cogwheel',
  	  B: 'gtceu:wood_plate'
  	}
	)
	
  event.recipes.create.milling('kubejs:granite_gravel', 'minecraft:granite')
  event.recipes.create.milling('kubejs:diorite_gravel', 'minecraft:diorite')
  event.recipes.create.milling('kubejs:andesite_gravel', 'minecraft:andesite')
  
})
