ServerEvents.recipes(event => {
	event.remove({output: ''})
	
	event.shaped(
  	Item.of('gtceu:wood_dust', 2), 
  	[
   	 ' A ',
   	 ' B ', 
   	 '   '
  	],
  	{
	  A: '#forge:tools/mortars',
  	  B: '#minecraft:planks'
  	}
	).damageIngredient('#forge:tools/mortars', 1)
	
		event.shaped(
  	Item.of('gtceu:wood_plate'), 
  	[
   	 'BBB',
   	 'BAB', 
   	 'BBB'
  	],
  	{
	  A: '#forge:tools/mallets',
  	  B: 'gtceu:wood_dust'
  	}
	).damageIngredient('#forge:tools/mallets', 1)

	
	
});